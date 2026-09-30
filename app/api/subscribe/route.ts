import { NextResponse } from 'next/server'

/* Brief v4 UX §4.8 — proxy de captura de email.
   El input propio postea acá y este handler llama al proveedor de
   newsletter en el servidor (evita el bloqueo CORS del embed).

   F53 §7 (Fran 30-sep) · doble proveedor:
   - beehiiv primero, si BEEHIIV_API_KEY y BEEHIIV_PUBLICATION_ID
     están seteadas (endpoint /v2/publications/<id>/subscriptions).
   - Substack como fallback, si SUBSTACK_PUBLICATION está seteada.
   - Ninguno seteado → 500 con reason="error", legible en dev.

   El migre de Substack → beehiiv se hace prendiendo las env vars de
   beehiiv en Vercel; no hay que redeployar código. Cuando Fran las
   confirme prender, apagamos SUBSTACK_PUBLICATION y limpiamos el
   fallback en una fase siguiente.

   B4 hardening (sin Redis, sin captcha):
   - Origin check: fuera de la lista de hosts propios y localhost,
     devuelve 403. Bloquea que otro sitio use este endpoint como bot
     proxy contra el proveedor.
   - Rate limit in-memory: 5 requests / 10 minutos por IP. La memoria
     es por instancia (edge/serverless spawnea múltiples) — no es una
     defensa robusta contra un atacante distribuido, pero corta abuso
     casual de un solo IP. Para algo más serio, ir a Upstash/Redis.
   - Honeypot: el body puede traer un campo `website` que en el DOM
     está escondido (sr-only, tabIndex=-1). Si vino con valor, es un
     bot — devolvemos 200 con éxito falso y no llamamos al proveedor.
   - utm_campaign y utm_source se propagan al proveedor con el nombre
     nativo (utm_* en beehiiv, source concatenado en Substack). */

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

  const utmSource = (body.utm_source ?? '').trim()
  const utmCampaign = (body.utm_campaign ?? '').trim()
  const sourcePath = body.source_path ?? ''

  const beehiivKey = process.env.BEEHIIV_API_KEY
  const beehiivPub = process.env.BEEHIIV_PUBLICATION_ID
  const substackPub = process.env.SUBSTACK_PUBLICATION

  if (beehiivKey && beehiivPub) {
    return await subscribeBeehiiv({
      apiKey: beehiivKey,
      publicationId: beehiivPub,
      email,
      utmSource,
      utmCampaign,
      sourcePath,
    })
  }
  if (substackPub) {
    return await subscribeSubstack({
      publication: substackPub,
      email,
      utmSource,
      utmCampaign,
      sourcePath,
    })
  }
  console.warn('[subscribe] ni BEEHIIV_* ni SUBSTACK_PUBLICATION configurados')
  return NextResponse.json({ ok: false, reason: 'error' }, { status: 500 })
}

/* ═════════ beehiiv ═════════
   API: POST https://api.beehiiv.com/v2/publications/<id>/subscriptions
   Docs: https://developers.beehiiv.com/docs/v2/[nombre].
   201 → creado; 200 → existente (beehiiv devuelve el objeto con
   status: "active" o "inactive" según reactivate_existing).
   Reactivate: false → si ya existe, devolvemos "already".
   send_welcome_email: true → beehiiv manda su welcome estándar. */

type SubArgs = {
  email: string
  utmSource: string
  utmCampaign: string
  sourcePath: string
}

async function subscribeBeehiiv(
  args: SubArgs & { apiKey: string; publicationId: string },
) {
  const endpoint = `https://api.beehiiv.com/v2/publications/${args.publicationId}/subscriptions`
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${args.apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: args.email,
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: args.utmSource || 'thecruda-site',
        utm_medium: 'web',
        utm_campaign: args.utmCampaign || '',
        referring_site: args.sourcePath || '',
      }),
    })
    if (res.status === 201) return NextResponse.json({ ok: true })
    if (res.status === 200) {
      /* 200 con status: "active" significa que la subscription ya
         existía. beehiiv sólo devuelve 200 en el "existente" cuando
         reactivate_existing=false, o cuando la subscription ya
         estaba activa. */
      const data = (await res.json().catch(() => ({}))) as {
        data?: { status?: string }
      }
      if (data?.data?.status === 'active') {
        return NextResponse.json({ ok: false, reason: 'already' })
      }
      return NextResponse.json({ ok: true })
    }
    console.warn('[subscribe/beehiiv] http', res.status, await res.text().catch(() => ''))
    return NextResponse.json({ ok: false, reason: 'error' }, { status: 502 })
  } catch (err) {
    console.warn('[subscribe/beehiiv] fetch failed', err)
    return NextResponse.json({ ok: false, reason: 'error' }, { status: 502 })
  }
}

/* ═════════ Substack (fallback legacy) ═════════ */

async function subscribeSubstack(
  args: SubArgs & { publication: string },
) {
  const endpoint = `https://${args.publication}.substack.com/api/v1/free`
  const sourceParts = [args.utmSource, args.utmCampaign].filter(Boolean)
  const source = sourceParts.length > 0 ? sourceParts.join(' · ') : 'thecruda-site'
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: args.email,
        first_url: args.sourcePath,
        first_referrer: '',
        source,
        referral_code: '',
      }),
    })
    if (res.ok) return NextResponse.json({ ok: true })
    if (res.status === 409) {
      return NextResponse.json({ ok: false, reason: 'already' })
    }
    return NextResponse.json({ ok: false, reason: 'error' }, { status: 502 })
  } catch (err) {
    console.warn('[subscribe/substack] fetch failed', err)
    return NextResponse.json({ ok: false, reason: 'error' }, { status: 502 })
  }
}
