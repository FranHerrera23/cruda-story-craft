import { NextResponse } from 'next/server'

/* F58 §C.1 · proxy de captura de email · 27-oct.
   El input propio postea acá y este handler llama a beehiiv en el
   servidor (evita el bloqueo CORS del embed). Substack ya no existe;
   el fallback se removió en F58.

   Env vars (Vercel, no las ve CC):
   - BEEHIIV_API_KEY
   - BEEHIIV_PUBLICATION_ID = pub_107e66d0-6cea-49aa-87e4-41870deb6616
   Sin ellas, 500 (NewsletterCTA cae a su fallback de link).

   Hardening:
   - Origin check: hosts propios + previews de Vercel del proyecto
     (`*.vercel.app`). Fuera de ahí, 403.
   - Rate limit in-memory: 5 req / 10 min por IP.
   - Honeypot `website`: si viene con valor, 200 ok falso sin llamar
     al proveedor.
   - utm_source y utm_campaign se propagan a beehiiv con el nombre
     nativo (utm_*). */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ALLOWED_HOSTS = new Set<string>([
  'thecruda.com',
  'www.thecruda.com',
  'localhost',
])

/* F58 · previews de Vercel del proyecto cruda_website. Cualquier
   host que termine en uno de estos sufijos pasa la allowlist. */
const ALLOWED_HOST_SUFFIXES = [
  '.vercel.app',
]

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
  if (!origin) return true
  try {
    const host = new URL(origin).hostname
    if (ALLOWED_HOSTS.has(host)) return true
    if (ALLOWED_HOST_SUFFIXES.some((suffix) => host.endsWith(suffix))) return true
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

  if (!beehiivKey || !beehiivPub) {
    console.warn('[subscribe] BEEHIIV_API_KEY / BEEHIIV_PUBLICATION_ID missing')
    return NextResponse.json({ ok: false, reason: 'error' }, { status: 500 })
  }

  return await subscribeBeehiiv({
    apiKey: beehiivKey,
    publicationId: beehiivPub,
    email,
    utmSource,
    utmCampaign,
    sourcePath,
  })
}

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
        reactivate_existing: true,
        send_welcome_email: true,
        utm_source: args.utmSource || 'thecruda-site',
        utm_medium: 'web',
        utm_campaign: args.utmCampaign || '',
        referring_site: args.sourcePath || '',
      }),
    })
    if (res.status === 201) return NextResponse.json({ ok: true })
    if (res.status === 200) {
      const data = (await res.json().catch(() => ({}))) as {
        data?: { status?: string }
      }
      if (data?.data?.status === 'active') {
        return NextResponse.json({ ok: true })
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
