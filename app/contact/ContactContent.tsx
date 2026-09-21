'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'

/* /contact content · F14a · 21-sep · autónomo · contact-v1.

   Tres secciones: apertura (negro) + filtro (paper) + corte (negro).
   El filtro son cinco preguntas, sin backend: el botón compone un
   mailto con las respuestas escritas. Cero caja con borde+radio.

   Q01 The gap · multi-select (data-multi=1)
   Q02 Who runs it today · single
   Q03 Closest door · single (nombres de las 4 puertas + Not sure)
   Q04 Set aside · single (rangos de budget)
   Q05 You · dos inputs (nombre/empresa/ciudad + email)

   El botón se habilita cuando Q01-Q04 tienen valor y los dos
   inputs son válidos (email regex).

   `on-black` marca las secciones oscuras: el Nav global (F11.2)
   las detecta y aplica `.bar--dark`. */

type Answers = {
  challenge: string[]
  team: string | null
  door: string | null
  budget: string | null
}

const EMAIL_RE = /.+@.+\..+/

export default function ContactContent() {
  const [challenge, setChallenge] = useState<string[]>([])
  const [team, setTeam] = useState<string | null>(null)
  const [door, setDoor] = useState<string | null>(null)
  const [budget, setBudget] = useState<string | null>(null)
  const [who, setWho] = useState('')
  const [mail, setMail] = useState('')

  const ready = useMemo(() => {
    return (
      challenge.length > 0 &&
      !!team &&
      !!door &&
      !!budget &&
      who.trim().length > 0 &&
      EMAIL_RE.test(mail.trim())
    )
  }, [challenge, team, door, budget, who, mail])

  const toggleChallenge = (opt: string) => {
    setChallenge(prev =>
      prev.includes(opt) ? prev.filter(o => o !== opt) : [...prev, opt],
    )
  }

  const submit = () => {
    if (!ready) return
    const body = [
      'The gap: ' + challenge.join(' / '),
      'Communications today: ' + team,
      'Closest door: ' + door,
      'Set aside: ' + budget,
      '',
      who.trim(),
      mail.trim(),
    ].join('\n')
    const url =
      'mailto:fran@thecruda.com' +
      '?subject=' +
      encodeURIComponent('One conversation — ' + who.trim()) +
      '&body=' +
      encodeURIComponent(body)
    window.location.href = url
  }

  return (
    <>
      {/* 01 · APERTURA */}
      <section className="contact-sec contact-sec--black on-black">
        <p className="contact-eyebrow">Contact</p>
        <h1 className="contact-name">One conversation.</h1>
        <div className="contact-rule" />
        <p className="contact-lede">Forty-five minutes. No pitch.</p>
        <div className="contact-data">
          <div className="contact-cell">
            <p className="contact-cell__l">Length</p>
            <p className="contact-cell__v">Forty-five minutes</p>
            <p className="contact-cell__n">One call, with Fran</p>
          </div>
          <div className="contact-cell">
            <p className="contact-cell__l">Cost</p>
            <p className="contact-cell__v">None</p>
            <p className="contact-cell__n">And no pitch at the end of it</p>
          </div>
          <div className="contact-cell">
            <p className="contact-cell__l">What we ask</p>
            <p className="contact-cell__v">Where the company is standing</p>
            <p className="contact-cell__n">Not where you want it to be</p>
          </div>
        </div>
      </section>

      {/* 02 · EL FILTRO */}
      <section className="contact-sec">
        <p className="contact-eyebrow">Before we talk</p>
        <h2 className="contact-name contact-name--sm">Five questions first.</h2>
        <div className="contact-rule" />

        <div className="q">
          <div className="qrow">
            <span className="qrow__o">01</span>
            <p className="qrow__q">The gap</p>
            <div className="opts">
              {[
                'Nobody knows us',
                'We say it differently every time',
                'It all depends on the founder',
                "Two sides that don't understand",
              ].map(opt => (
                <button
                  key={opt}
                  type="button"
                  className="opt"
                  aria-pressed={challenge.includes(opt)}
                  onClick={() => toggleChallenge(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="qrow">
            <span className="qrow__o">02</span>
            <p className="qrow__q">Who runs it today</p>
            <div className="opts">
              {['The founder', 'One person', 'A team', 'An agency'].map(opt => (
                <button
                  key={opt}
                  type="button"
                  className="opt"
                  aria-pressed={team === opt}
                  onClick={() => setTeam(team === opt ? null : opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="qrow">
            <span className="qrow__o">03</span>
            <p className="qrow__q">Closest door</p>
            <div className="opts">
              {[
                'Translated',
                'Transmission',
                'Interpreted',
                'The Read',
                'Not sure',
              ].map(opt => (
                <button
                  key={opt}
                  type="button"
                  className="opt"
                  aria-pressed={door === opt}
                  onClick={() => setDoor(door === opt ? null : opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="qrow">
            <span className="qrow__o">04</span>
            <p className="qrow__q">Set aside</p>
            <div className="opts">
              {['Under $20K', '$20—50K', 'Over $50K', 'Nothing yet'].map(opt => (
                <button
                  key={opt}
                  type="button"
                  className="opt"
                  aria-pressed={budget === opt}
                  onClick={() => setBudget(budget === opt ? null : opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="qrow">
            <span className="qrow__o">05</span>
            <p className="qrow__q">You</p>
            <div className="opts" style={{ gap: '10px 24px' }}>
              <input
                className="inp"
                type="text"
                placeholder="Name, company, city"
                autoComplete="organization"
                value={who}
                onChange={e => setWho(e.target.value)}
              />
              <input
                className="inp"
                type="email"
                placeholder="Email"
                autoComplete="email"
                value={mail}
                onChange={e => setMail(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="send">
          <button
            type="button"
            className="btn"
            disabled={!ready}
            onClick={submit}
          >
            Send it →
          </button>
          <p className="sendnote">
            {ready
              ? 'Opens your mail client with the five answers already written.'
              : 'Answer the five and the button opens your mail client with the answers already written.'}
          </p>
        </div>

        <p className="out">
          Fees are public on <Link href="/services">services</Link>. If none
          of this fits, write anyway —{' '}
          <a href="mailto:fran@thecruda.com">fran@thecruda.com</a>
        </p>
      </section>

      {/* 03 · EL CORTE */}
      <section className="contact-sec contact-sec--black on-black">
        <p className="contact-eyebrow">What happens next</p>
        <h2 className="contact-name contact-name--sm">
          If those two things are the same, you do not need us.
        </h2>
        <div className="contact-rule" />
        <p className="contact-body" style={{ maxWidth: '52ch' }}>
          We ask what you are actually trying to do, and what the market
          currently believes about you. If they are not the same, that gap
          is the work.
        </p>
        <a className="contact-mail" href="mailto:fran@thecruda.com">
          fran@thecruda.com
        </a>
      </section>
    </>
  )
}
