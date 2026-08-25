import { NextResponse } from 'next/server'

/* Brief v4 UX §4.8 — proxy hacia Substack.
   Substack bloquea CORS para POST directo desde el cliente, así que
   el input propio postea acá y este handler pasa la subscription a
   Substack en el servidor.

   Endpoint activo se configura via env var SUBSTACK_PUBLICATION (el
   subdomain de la publicación, e.g. "thecruda"). Sin env, respondemos
   error controlado para que el estado del formulario sea legible en
   dev y no rompa el sitio en prod si la variable no está definida.

   B4 hardening (sin Redis, sin captcha):
   - Origin check: fuera de la lista de hosts propios y localhost,
     devuelve 403. Bloquea que otro sitio use este endpoint como bot
     proxy contra Substack.
   - Rate limit in-memory: 5 requests / 10 minutos por IP. La memoria
     es por instancia (edge/serverless spawnea múltiples) — no es una
     defensa robusta contra un atacante distribuido, pero corta abuso
     casual de un solo IP. Para algo más serio, ir a Upstash/Redis.
   - Honeypot: el body puede traer un campo `website` que en el DOM
     está escondido (sr-only, tabIndex=-1). Si vino con valor, es un
     bot — devolvemos 200 con éxito falso y no llamamos a Substack.
   - utm_campaign se manda a Substack en el `source` field junto con
     utm_source (antes se recibía y se perdía). */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/* Allowlist de hosts propios. Se puede sobreescribir via env
   NEXT_PUBLIC_SITE_ORIGIN si el deploy usa otra URL. */
const ALLOWED_HOSTS = new Set<string>([
  'thecruda.com',
  'www.thecruda.com',
  'localhost',
])

/* In-memory rate limit. Se reinicia cuando la instancia se recicla —
   OK para un forma de contact, no para producción crítica. */
const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_MAX = 5
const rateStore = new Map<string, number[]>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const hits = (rateStore.get(ip) ?? []).filter(
    (t) => now - t < RATE_WINDOW_MS,
  )
  if (hits.length >= RATE_MAX) {
    rateStore.set(ip, hits)
    return false
  }
  hits.push(now)
  rateStore.set(ip, hits)
  return true
}

function isAllowedOrigin(req: Request): boolean {
  const origin = req.headers.get('origin')
  if (!origin) {
    /* Sin Origin header, probablemente same-origin form post o curl.
       Aceptamos — el rate limit filtra abuso. */
    return true
  }
  try {
    const host = new URL(origin).hostname
    if (ALLOWED_HOSTS.has(host)) return true
    const envOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN
    if (envOrigin) {
      try {
        if (new URL(envOrigin).hostname === host) return true
      } catch {}
    }
    return false
  } catch {
    return false
  }
}

export const runtime = 'nodejs'

type Body = {
  email?: string
  source_path?: string
  utm_source?: string
  utm_campaign?: string
  /* Honeypot — nombre neutro que un bot probablemente completa. En el
     DOM va oculto con sr-only + tabIndex=-1 + autocomplete="off". */
  website?: string
}

export async function POST(req: Request) {
  if (!isAllowedOrigin(req)) {
    return NextResponse.json({ ok: false, reason: 'error' }, { status: 403 })
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ ok: false, reason: 'error' }, { status: 429 })
  }

  let body: Body = {}
  try {
    body = (await req.json()) as Body
  } catch {
    return NextResponse.json({ ok: false, reason: 'invalid' }, { status: 400 })
  }

  /* Honeypot — si vino con valor, es un bot. Devolvemos 200 ok:true
     para que ni siquiera sepa que fue detectado, y no llamamos a
     Substack. El humano no puede llenar el campo (sr-only + tabIndex). */
  if (body.website && body.website.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const email = (body.email ?? '').trim()
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, reason: 'invalid' }, { status: 400 })
  }

  const publication = process.env.SUBSTACK_PUBLICATION
  if (!publication) {
    console.warn('[subscribe] SUBSTACK_PUBLICATION no configurado')
    return NextResponse.json({ ok: false, reason: 'error' }, { status: 500 })
  }

  const endpoint = `https://${publication}.substack.com/api/v1/free`

  /* Substack acepta un solo string `source` — combinamos utm_source y
     utm_campaign para no perder atribución. Formato: "utm_source · utm_campaign"
     si ambos vienen, si no cae al valor default "thecruda-site". */
  const utmSource = (body.utm_source ?? '').trim()
  const utmCampaign = (body.utm_campaign ?? '').trim()
  const sourceParts = [utmSource, utmCampaign].filter(Boolean)
  const source = sourceParts.length > 0 ? sourceParts.join(' · ') : 'thecruda-site'

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        first_url: body.source_path ?? '',
        first_referrer: '',
        source,
        referral_code: '',
      }),
    })
    if (res.ok) {
      return NextResponse.json({ ok: true })
    }
    /* Substack devuelve 409 cuando ya está suscripto. */
    if (res.status === 409) {
      return NextResponse.json({ ok: false, reason: 'already' })
    }
    return NextResponse.json({ ok: false, reason: 'error' }, { status: 502 })
  } catch (err) {
    console.warn('[subscribe] fetch failed', err)
    return NextResponse.json({ ok: false, reason: 'error' }, { status: 502 })
  }
}
