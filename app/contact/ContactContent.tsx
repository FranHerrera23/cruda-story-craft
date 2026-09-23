'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

/* /contact · F31 §3 · 23-sep · Fran.

   Reemplaza el filtro de 5 preguntas (§3.4 sale) por:
   1 · h1 "One conversation." + regla naranja (única de la página).
   2 · lede "Forty-five minutes. No pitch."
   3 · dos columnas: BOOK THE CALL (Calendly inline) + WRITE TO US
       (form Name/Email/What are you trying to do?)
   4 · línea de pie con fees + mailto.

   Sin secciones oscuras (todo papel).

   NEXT_PUBLIC_CALENDLY_URL define la URL del embed. Si no está,
   la columna izquierda cae a un link "Book the call →" a la URL
   (o al mailto si tampoco hay). Nunca hay embed vacío.

   Form:
   - Name (required), Email (required), What are you trying to do?
     (opcional, textarea).
   - Envío por mailto con los tres campos escritos en el cuerpo.
   - Send it → siempre en --ink. Si falta un obligatorio, subrayado
     naranja 2px + "Required" bajo el campo. */

const EMAIL_RE = /.+@.+\..+/
const CALENDLY = process.env.NEXT_PUBLIC_CALENDLY_URL ?? ''

function calendlyIframeUrl(base: string): string {
  const url = new URL(base)
  url.searchParams.set('hide_gdpr_banner', '1')
  // Paper: F1EFEB · Ink: 0D0D0D · sin naranja en primary color.
  url.searchParams.set('background_color', 'F1EFEB')
  url.searchParams.set('text_color', '0D0D0D')
  url.searchParams.set('primary_color', '0D0D0D')
  return url.toString()
}

export default function ContactContent() {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [what, setWhat] = useState('')
  const [touched, setTouched] = useState(false)

  const nameOk = name.trim().length > 0
  const mailOk = EMAIL_RE.test(mail.trim())
  const iframeUrl = useMemo(
    () => (CALENDLY ? calendlyIframeUrl(CALENDLY) : ''),
    [],
  )

  const submit = () => {
    setTouched(true)
    if (!nameOk || !mailOk) return
    const body = [
      `Name: ${name.trim()}`,
      `Email: ${mail.trim()}`,
      what.trim() ? `What are you trying to do?\n${what.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n\n')
    const url =
      'mailto:fran@thecruda.com' +
      '?subject=' +
      encodeURIComponent('One conversation — ' + name.trim()) +
      '&body=' +
      encodeURIComponent(body)
    window.location.href = url
  }

  return (
    <>
      {/* 01 · APERTURA · papel · única regla naranja */}
      <section className="contact-sec">
        <p className="contact-eyebrow">Contact</p>
        <h1 className="contact-name">One conversation.</h1>
        <div className="contact-rule" />
        <p className="contact-lede">Forty-five minutes. No pitch.</p>
      </section>

      {/* 02 · DOS COLUMNAS · Calendly + form */}
      <section className="contact-sec contact-act">
        <div className="contact-act__col contact-act__col--book">
          <p className="contact-eyebrow">Book the call</p>
          {iframeUrl ? (
            <iframe
              className="contact-cal"
              src={iframeUrl}
              title="Book a 45-minute call with Fran Herrera on Calendly"
              loading="lazy"
            />
          ) : CALENDLY ? (
            <a className="contact-cal-link" href={CALENDLY} target="_blank" rel="noopener">
              Book the call →
            </a>
          ) : (
            <a
              className="contact-cal-link"
              href="mailto:fran@thecruda.com?subject=One%20conversation"
            >
              Book the call →
            </a>
          )}
        </div>

        <div className="contact-act__col contact-act__col--write">
          <p className="contact-eyebrow">Write to us</p>
          <div className="contact-form">
            <label className="contact-field">
              <span className="contact-field__l">Name</span>
              <input
                className={`contact-inp${touched && !nameOk ? ' contact-inp--err' : ''}`}
                type="text"
                autoComplete="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              {touched && !nameOk && <span className="contact-err">Required</span>}
            </label>

            <label className="contact-field">
              <span className="contact-field__l">Email</span>
              <input
                className={`contact-inp${touched && !mailOk ? ' contact-inp--err' : ''}`}
                type="email"
                autoComplete="email"
                value={mail}
                onChange={e => setMail(e.target.value)}
              />
              {touched && !mailOk && <span className="contact-err">Required</span>}
            </label>

            <label className="contact-field">
              <span className="contact-field__l">What are you trying to do?</span>
              <textarea
                className="contact-inp contact-inp--ta"
                rows={4}
                value={what}
                onChange={e => setWhat(e.target.value)}
              />
            </label>

            <button type="button" className="contact-send" onClick={submit}>
              Send it →
            </button>
          </div>
        </div>
      </section>

      {/* 03 · PIE · fees + mailto */}
      <section className="contact-sec contact-out-sec">
        <p className="contact-out">
          Fees are public on <Link href="/services">services</Link>. If none
          of this fits, write anyway —{' '}
          <a href="mailto:fran@thecruda.com">fran@thecruda.com</a>
        </p>
      </section>
    </>
  )
}
