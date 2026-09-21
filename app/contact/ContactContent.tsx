'use client'

import { useState } from 'react'
import Link from 'next/link'

/* /contact · F19-D · 21-sep · redesigned.

   Jerarquía W4 del brief F19:
     1  h1 "One conversation." + regla naranja
     2  lede "Forty-five minutes. No pitch."
     3  la acción: Calendly (si CALENDLY_URL) o el formulario
     4  pie con "Fees are public on services..." + email

   Salen: las 3 celdas (Length/Cost/What we ask), el titular
   "Five questions first." y las 5 filas de opciones.

   Formulario: Name + Email obligatorios · "What are you trying
   to do?" opcional · botón "Send it →" siempre en ink, nunca
   gris/disabled. Si faltan campos, marca el campo vacío con
   subrayado naranja 2px + "Required" 13px. Envío = mailto con
   los 3 campos escritos. Cero backend.

   CALENDLY_URL viene por env (NEXT_PUBLIC_CALENDLY_URL). Vacío
   → sólo el formulario centrado. Cuando llegue la URL, se
   agrega la columna izquierda del split. */

const EMAIL_RE = /.+@.+\..+/
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? ''

export default function ContactContent() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const nameOk = name.trim().length > 0
    const emailOk = EMAIL_RE.test(email.trim())
    setNameError(!nameOk)
    setEmailError(!emailOk)
    if (!nameOk || !emailOk) return
    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      '',
      message.trim() || '(no message)',
    ].join('\n')
    const url =
      'mailto:fran@thecruda.com' +
      '?subject=' +
      encodeURIComponent(`One conversation — ${name.trim()}`) +
      '&body=' +
      encodeURIComponent(body)
    window.location.href = url
  }

  const hasCalendly = CALENDLY_URL.length > 0

  return (
    <div className="contact">
      {/* OPENER · una sola superficie · h1 + regla + lede */}
      <section className="contact-hero">
        <p className="contact-eyebrow">Contact</p>
        <h1 className="contact-h1">One conversation.</h1>
        <div className="contact-h1-rule" />
        <p className="contact-lede">Forty-five minutes. No pitch.</p>
      </section>

      <section
        className={`contact-body${hasCalendly ? ' contact-body--split' : ''}`}
      >
        {hasCalendly && (
          <div className="contact-col contact-col--calendly">
            <p className="contact-col__label">Book the call</p>
            <div className="contact-calendly">
              <iframe
                src={`${CALENDLY_URL}?background_color=F1EFEB&text_color=0D0D0D&primary_color=0D0D0D`}
                title="Book the call · Calendly"
                loading="lazy"
              />
            </div>
            <noscript>
              <a
                className="contact-fallback"
                href={CALENDLY_URL}
                rel="noopener"
              >
                Book the call →
              </a>
            </noscript>
          </div>
        )}

        <div className="contact-col contact-col--form">
          <p className="contact-col__label">Write to us</p>
          <form className="contact-form" onSubmit={submit} noValidate>
            <label className="contact-field">
              <span className="contact-field__l">Name</span>
              <input
                type="text"
                autoComplete="name"
                value={name}
                onChange={e => {
                  setName(e.target.value)
                  if (nameError) setNameError(false)
                }}
                aria-invalid={nameError}
                className={`contact-input${nameError ? ' contact-input--err' : ''}`}
              />
              {nameError && (
                <span className="contact-required">Required</span>
              )}
            </label>
            <label className="contact-field">
              <span className="contact-field__l">Email</span>
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                  if (emailError) setEmailError(false)
                }}
                aria-invalid={emailError}
                className={`contact-input${emailError ? ' contact-input--err' : ''}`}
              />
              {emailError && (
                <span className="contact-required">Required</span>
              )}
            </label>
            <label className="contact-field">
              <span className="contact-field__l">
                What are you trying to do?
              </span>
              <textarea
                rows={3}
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="contact-input contact-input--area"
              />
            </label>
            <button type="submit" className="contact-send">
              Send it →
            </button>
          </form>
        </div>
      </section>

      <p className="contact-foot">
        Fees are public on <Link href="/services">services</Link>. If none of
        this fits, write anyway —{' '}
        <a href="mailto:fran@thecruda.com">fran@thecruda.com</a>
      </p>
    </div>
  )
}
