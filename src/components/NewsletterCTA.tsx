'use client'

import { useState, type FormEvent } from 'react'
import './newsletter-cta.css'

/* NewsletterCTA · F58 · 27-oct · versión 2.

   Formulario propio contra /api/subscribe (beehiiv por API).
   Honeypot `website` sr-only. Estados: idle → sending → ok / error /
   already. Propaga utm_source y utm_campaign del URL. En error 500
   (env vars faltantes) cae a un link a /newsletter (único fallback).

   Variantes de estilo:
     dark   · cream sobre --ink-deep (hero, cierre)
     light  · ink sobre --paper (Narrative Sparring, newsletter)

   Variantes de forma:
     bar          · input + botón con borde cerrado (home + /thinking cierre)
     thin         · input con sólo borde inferior + botón negro grande (/thinking hero · C.2)

   Textos de botón:
     ctaLabel     · prop (home: "Subscribe to Narrative Sparring",
                   /thinking: "Get Narrative Sparring →") */

type Variant = 'dark' | 'light'
type Shape = 'bar' | 'thin'
type Status = 'idle' | 'sending' | 'ok' | 'already' | 'error' | 'fallback'

type Props = {
  variant: Variant
  shape?: Shape
  ctaLabel?: string
  helper?: string
  source?: string
}

const MSG_OK = 'You’re in. The next essay arrives this week.'
const MSG_ERR = 'Something went wrong. Try again, or write to fran@thecruda.com.'

function readUtm(name: string): string {
  if (typeof window === 'undefined') return ''
  try {
    return new URL(window.location.href).searchParams.get(name) ?? ''
  } catch {
    return ''
  }
}

export default function NewsletterCTA({
  variant,
  shape = 'bar',
  ctaLabel = 'Subscribe to Narrative Sparring',
  helper,
  source,
}: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [website, setWebsite] = useState('') // honeypot

  const sending = status === 'sending'
  const done = status === 'ok' || status === 'already'

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (sending) return
    setStatus('sending')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source_path: source ?? (typeof window !== 'undefined' ? window.location.pathname : ''),
          utm_source: readUtm('utm_source'),
          utm_campaign: readUtm('utm_campaign'),
          website,
        }),
      })
      if (res.status === 500) {
        setStatus('fallback')
        return
      }
      const data = await res.json().catch(() => ({}))
      if (data?.ok) {
        setStatus('ok')
        return
      }
      if (data?.reason === 'already') {
        setStatus('already')
        return
      }
      setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const rootClass = [
    'ncta',
    `ncta--${variant}`,
    `ncta--${shape}`,
    done ? 'ncta--done' : '',
  ]
    .filter(Boolean)
    .join(' ')

  if (status === 'fallback') {
    return (
      <div className={`ncta ncta--${variant} ncta--${shape} ncta--link-only`}>
        <a href="/newsletter" className="ncta__btn">
          {ctaLabel}
        </a>
      </div>
    )
  }

  return (
    <form className={rootClass} onSubmit={onSubmit} noValidate>
      <label className="ncta__label" htmlFor={`ncta-email-${shape}-${variant}`}>
        Email address
      </label>
      <input
        id={`ncta-email-${shape}-${variant}`}
        className="ncta__input"
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={sending || done}
        aria-invalid={status === 'error' ? true : undefined}
      />
      {/* Honeypot — sr-only, tabIndex=-1, autocomplete off. */}
      <input
        type="text"
        name="website"
        className="ncta__honeypot"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        aria-hidden="true"
      />
      <button
        type="submit"
        className="ncta__btn"
        disabled={sending || done}
      >
        {sending ? 'Sending…' : ctaLabel}
      </button>
      {(status === 'ok' || status === 'already') && (
        <p className="ncta__msg ncta__msg--ok" role="status">{MSG_OK}</p>
      )}
      {status === 'error' && (
        <p className="ncta__msg ncta__msg--err" role="alert">{MSG_ERR}</p>
      )}
      {helper && status === 'idle' && (
        <p className="ncta__helper">{helper}</p>
      )}
    </form>
  )
}
