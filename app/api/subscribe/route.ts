import { NextResponse } from 'next/server'

/* F53 §7 (Fran 30-sep) · Substack fuera del formulario.
   La app migró la captura de email al embed hosted de beehiiv
   (SubscribeForm en /newsletter y en cada ensayo), así que este
   endpoint dejó de tener uso desde el cliente. La lógica de
   Substack se elimina completa.

   El endpoint queda vivo como stub para no romper cualquier
   link legacy que le pegue: responde 500 con reason="error" y lo
   registra en logs, sin redirigir a otro proveedor. Se puede
   borrar del árbol cuando confirmemos que nada externo lo llama.

   Origin check + rate limit + honeypot se mantienen para que el
   stub siga siendo defensa razonable contra abuso, aunque hoy no
   procese nada. */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ALLOWED_HOSTS = new Set<string>([
  'thecruda.com',
  'www.thecruda.com',
  'localhost',
])

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

  /* Honeypot · si vino con valor, es un bot. 200 ok:true para no
     revelar la detección, sin registrar. */
  if (body.website && body.website.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const email = (body.email ?? '').trim()
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, reason: 'invalid' }, { status: 400 })
  }

  /* Substack fuera · sin proveedor de fallback. Registramos y
     devolvemos 500. No redirigimos a otro lado. */
  console.warn(
    '[subscribe] endpoint sin proveedor · captura se hace via ' +
    'embed beehiiv en el cliente. Este POST no debería estar ' +
    'llegando desde /newsletter ni desde /thinking/*.',
  )
  return NextResponse.json({ ok: false, reason: 'error' }, { status: 500 })
}
