import { NextResponse } from 'next/server'

/* Brief v4 UX §4.8 — proxy hacia Substack.
   Substack bloquea CORS para POST directo desde el cliente, así que
   el input propio postea acá y este handler pasa la subscription a
   Substack en el servidor.

   Endpoint activo se configura via env var SUBSTACK_PUBLICATION (el
   subdomain de la publicación, e.g. "thecruda"). Sin env, respondemos
   error controlado para que el estado del formulario sea legible en
   dev y no rompa el sitio en prod si la variable no está definida.

   Cuando el endpoint deje de responder consistentemente, el disparador
   para migrar a beehiiv es cambiar SUBSTACK_PUBLICATION por una
   config equivalente. El componente cliente no cambia. */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const runtime = 'nodejs'

type Body = {
  email?: string
  source_path?: string
  utm_source?: string
  utm_campaign?: string
}

export async function POST(req: Request) {
  let body: Body = {}
  try {
    body = (await req.json()) as Body
  } catch {
    return NextResponse.json({ ok: false, reason: 'invalid' }, { status: 400 })
  }

  const email = (body.email ?? '').trim()
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, reason: 'invalid' }, { status: 400 })
  }

  const publication = process.env.SUBSTACK_PUBLICATION
  if (!publication) {
    /* Sin publicación configurada: retornamos error controlado. Se
       loggea para que quede rastro; el usuario ve el mensaje "no
       se pudo conectar" y puede reintentar cuando esté cableado. */
    console.warn('[subscribe] SUBSTACK_PUBLICATION no configurado')
    return NextResponse.json({ ok: false, reason: 'error' }, { status: 500 })
  }

  const endpoint = `https://${publication}.substack.com/api/v1/free`

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
        source: body.utm_source || 'thecruda-site',
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
