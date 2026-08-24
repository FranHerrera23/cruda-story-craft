'use client'

import { useState } from 'react'

/* Brief v4 UX §4.8 — captura de email.
   Substack se conecta desde el input propio (sin embed, que inyecta
   tipografía y layout ajenos). El componente postea a /api/subscribe,
   que hace de proxy contra Substack — cliente CORS-safe.

   Estados sin disculpas, sin signos de exclamación (per brief).
   Guardamos utm_source, utm_campaign, source_path para atribuir en
   tres meses qué ensayo trae gente. */

type Status = 'idle' | 'loading' | 'success' | 'invalid' | 'already' | 'error'

type Copy = {
  heading: string
  body: string
  placeholder: string
  cta: string
  states: Record<Exclude<Status, 'idle' | 'loading'>, string>
}

const COPY: Record<'en' | 'es', Copy> = {
  en: {
    heading: 'Keep reading the next one.',
    body:
      'One essay a week on narrative, brand and the things people don’t say out loud.',
    placeholder: 'your@email.com',
    cta: 'Subscribe',
    states: {
      success: 'Done. Check your inbox to confirm.',
      invalid: 'That email doesn’t look right.',
      already: 'You’re already on the list.',
      error: 'Couldn’t connect. Try again in a moment.',
    },
  },
  es: {
    heading: 'Seguí leyendo lo próximo.',
    body:
      'Un ensayo por semana sobre narrativa, marca y las cosas que la gente no dice en voz alta.',
    placeholder: 'tu@email.com',
    cta: 'Suscribirme',
    states: {
      success: 'Listo. Revisá tu casilla para confirmar.',
      invalid: 'Ese email no parece válido.',
      already: 'Ya estás en la lista.',
      error: 'No se pudo conectar. Probá de nuevo en un momento.',
    },
  },
}

type Props = {
  lang?: 'en' | 'es'
  variant?: 'full' | 'compact'
  sourcePath?: string
}

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
}

export default function CaptureForm({
  lang = 'en',
  variant = 'full',
  sourcePath,
}: Props) {
  const copy = COPY[lang]
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setStatus('invalid')
      return
    }
    setStatus('loading')
    try {
      const params =
        typeof window !== 'undefined'
          ? new URLSearchParams(window.location.search)
          : new URLSearchParams()
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          source_path: sourcePath ?? (typeof window !== 'undefined' ? window.location.pathname : ''),
          utm_source: params.get('utm_source') ?? '',
          utm_campaign: params.get('utm_campaign') ?? '',
        }),
      })
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean
        reason?: 'invalid' | 'already' | 'error'
      }
      if (data.ok) {
        setStatus('success')
        setEmail('')
      } else if (data.reason === 'invalid') {
        setStatus('invalid')
      } else if (data.reason === 'already') {
        setStatus('already')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const stateMsg =
    status !== 'idle' && status !== 'loading' ? copy.states[status] : ''

  return (
    <section
      className={`capture capture--${variant}`}
      aria-label={copy.heading}
    >
      {variant === 'full' && (
        <>
          <h3 className="capture__heading">{copy.heading}</h3>
          <p className="capture__body">{copy.body}</p>
        </>
      )}
      <form className="capture__form" onSubmit={handleSubmit} noValidate>
        <div className="capture__row">
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            placeholder={copy.placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={status === 'invalid'}
            aria-label="Email"
          />
          <button type="submit" disabled={status === 'loading'}>
            {copy.cta}
          </button>
        </div>
        {stateMsg && (
          <p
            className={`capture__status capture__status--${status}`}
            role="status"
            aria-live="polite"
          >
            {stateMsg}
          </p>
        )}
      </form>
    </section>
  )
}
