'use client'

import { useState } from 'react'
import Link from 'next/link'

/* /contact · F31 §3 · 23-sep · Fran · F56 (Fran 2-oct).

   F56 reemplaza el bloque Calendly por el link grande a
   /second-look. La columna izquierda ya no embebe Calendly ni
   lee NEXT_PUBLIC_CALENDLY_URL (la variable queda huérfana,
   Fran la elimina en Vercel). La única entrada agendable del
   sitio es /second-look.

   Estructura:
   1 · h1 "Start with a Second Look." + regla naranja única.
   2 · lede "Two conversations and a written diagnosis. $950."
   3 · dos columnas:
       - izquierda: link "Start a Second Look →" a /second-look
       - derecha: WRITE TO US (form Name/Email/What are you trying to do?)
   4 · pie: fees → /services + mailto directo.

   Form (sin cambios desde F31):
   - Name (required), Email (required), What are you trying to do? (opcional).
   - Envío por mailto con los tres campos en el cuerpo.
   - Send it → en --ink. Si falta uno obligatorio, naranja 2px + "Required". */

const EMAIL_RE = /.+@.+\..+/

export default function ContactContent() {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [what, setWhat] = useState('')
  const [touched, setTouched] = useState(false)

  const nameOk = name.trim().length > 0
  const mailOk = EMAIL_RE.test(mail.trim())

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
      encodeURIComponent('Write to us — ' + name.trim()) +
      '&body=' +
      encodeURIComponent(body)
    window.location.href = url
  }

  return (
    <>
      {/* 01 · APERTURA · papel · única regla naranja */}
      <section className="contact-sec">
        <p className="contact-eyebrow">Contact</p>
        <h1 className="contact-name">Start with a Second Look.</h1>
        <div className="contact-rule" />
        <p className="contact-lede">
          Two conversations and a written diagnosis. $950.
        </p>
      </section>

      {/* 02 · DOS COLUMNAS · link a Second Look + form */}
      <section className="contact-sec contact-act">
        <div className="contact-act__col contact-act__col--book">
          <p className="contact-eyebrow">Second Look</p>
          <Link className="contact-cal-link" href="/second-look">
            Start a Second Look →
          </Link>
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
