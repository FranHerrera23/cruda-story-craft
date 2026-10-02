'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

/* /second-look · wizard de 4 pasos + cierre · F56.

   Copy VERBATIM del brief + del HTML referencia (docs/F56-*).
   Técnica según brief:
   - Un paso visible por vez.
   - Barra superior con marca "SECOND LOOK" + "N / 4".
   - Botón Back en los pasos 2 a 4.
   - Las respuestas se conservan al volver atrás.
   - history.pushState · hashes #step-1 … #step-4, #done.
     El Back del browser vuelve y conserva state.
   - Paso 1 sin animación (CSS @keyframes solo aplica steps 2-5).
   - Validación nativa: paso 3 no avanza sin empresa.
   - Calendly se inyecta AL ENTRAR al paso 4, no antes.
   - URL de Calendly: process.env.NEXT_PUBLIC_CALENDLY_URL_SECOND_LOOK.
     Si no existe, se muestra fallback con mailto + se registra error.
   - Listener de postMessage valida e.origin === 'https://calendly.com'
     (EXACTO, no indexOf).
   - Al recibir calendly.event_scheduled → paso 5 (cierre). */

type Answers = { revenue: string; budget: string }

const TOTAL = 4

const STEP_HASHES: Record<number, string> = {
  1: '#step-1',
  2: '#step-2',
  3: '#step-3',
  4: '#step-4',
  5: '#done',
}

function hashToStep(hash: string): number {
  const entry = Object.entries(STEP_HASHES).find(([, h]) => h === hash)
  return entry ? Number(entry[0]) : 1
}

const REVENUE_OPTS = ['Under $1M', '$1–5M', '$5–20M', '$20M+'] as const
const BUDGET_OPTS = ['Under $5K', '$5–20K', '$20–50K', '$50K+'] as const

/* Grilla paso 2 · 8 clientes.
   Fuente: misma data que el Selected work de la home
   (src/components/home/SelectedWork.tsx), con BAUHOME excluido
   per brief ("9.ª entrada no va"). Datos verbatim. */
const TRUST_CARDS = [
  {
    name: 'Karen Mannheim',
    meta: 'TRAZZO Lighting · Miami',
    line: "Lights homes worth $10 million to $200 million; one of Forbes Perú's 50 most powerful women, 2026.",
  },
  {
    name: 'Mike Kaeding',
    meta: 'Norhart · Minneapolis',
    line: 'CEO of Norhart, $230M in assets created, on a mission to halve the cost of housing.',
  },
  {
    name: 'Girish Sehgal',
    meta: 'Sheikh Shakhbout Medical City · Abu Dhabi',
    line: "Former Four Seasons GM, bringing hospitality into the UAE's biggest medical city.",
  },
  {
    name: 'José Mannheim',
    meta: 'MTC · Panama City',
    line: 'Co-founder of AGP, maker of armored glass for the Pentagon, Tesla and Audi.',
  },
  {
    name: 'Confidential',
    meta: 'Dubai',
    line: 'Built a $300M on-demand fashion group, lost it, and built it again.',
  },
  {
    name: 'JP Romero',
    meta: 'JURA · CTD · Miami',
    line: 'Takes Latin American architecture and design brands into the US market.',
  },
  {
    name: 'INOUT',
    meta: 'Frameless Sliding Doors · Argentina',
    line: 'A frameless sliding door line, branded from zero, with a trade program the client still runs on its own.',
  },
  {
    name: 'Jack Yeager',
    meta: 'Mistiva · Midtown Miami',
    line: 'Sold his first company for seven figures, sailed the world, and came back to build a lighting business in Miami.',
  },
] as const

export default function SecondLookClient() {
  const [step, setStep] = useState<number>(1)
  const [company, setCompany] = useState<string>('')
  const [answers, setAnswers] = useState<Answers>({ revenue: '', budget: '' })
  const calendlyLoadedForRef = useRef<string | null>(null)
  const calendlyRef = useRef<HTMLDivElement | null>(null)

  const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL_SECOND_LOOK ?? ''

  const show = useCallback(
    (n: number, pushHistory: boolean = true) => {
      const next = Math.max(1, Math.min(5, n))
      setStep(next)
      if (pushHistory) {
        try {
          window.history.pushState({ step: next }, '', STEP_HASHES[next])
        } catch (_) {
          /* no-op */
        }
      }
      /* Scroll al tope en cada cambio · idéntico al prototipo. */
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } catch (_) {
        /* no-op */
      }
    },
    [],
  )

  /* Sync inicial del hash de la URL al step (permite deep-link
     a #step-3 por ejemplo). Solo corre una vez al montar. */
  useEffect(() => {
    const initial = hashToStep(window.location.hash)
    if (initial !== 1) {
      setStep(initial)
    } else {
      /* En step 1, replaceState para dejar el hash explícito;
         así el popstate siempre encuentra algo que leer. */
      try {
        window.history.replaceState({ step: 1 }, '', STEP_HASHES[1])
      } catch (_) {
        /* no-op */
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* popstate · botón atrás del browser. Lee el step del state o
     del hash y actualiza sin volver a pushear. */
  useEffect(() => {
    const onPop = (e: PopStateEvent) => {
      const fromState = (e.state as { step?: number } | null)?.step
      const next = fromState ?? hashToStep(window.location.hash)
      show(next, false)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [show])

  /* Listener de Calendly · validación EXACTA del origen (brief).
     Al recibir event_scheduled, va al paso 5 (cierre). */
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (e.origin !== 'https://calendly.com') return
      const data = e.data as { event?: string } | null
      if (data && data.event === 'calendly.event_scheduled') {
        show(5)
      }
    }
    window.addEventListener('message', onMsg)
    return () => window.removeEventListener('message', onMsg)
  }, [show])

  /* Carga Calendly al entrar al paso 4. Inyecta el script sólo si
     no está ya cargado, construye la URL con a1/a2/a3 y llama a
     initInlineWidget. Si NEXT_PUBLIC_CALENDLY_URL_SECOND_LOOK no
     está, muestra fallback con mailto y loguea error. */
  const loadCalendly = useCallback(() => {
    if (!CALENDLY_URL) {
      console.error(
        'F56 · NEXT_PUBLIC_CALENDLY_URL_SECOND_LOOK missing — showing mailto fallback.',
      )
      return
    }
    const signature = [company.trim(), answers.revenue, answers.budget].join('|')
    if (calendlyLoadedForRef.current === signature) return

    const params = new URLSearchParams({
      hide_gdpr_banner: '1',
      a1: company.trim(),
      a2: answers.revenue,
      a3: answers.budget,
    })
    const url = CALENDLY_URL + '?' + params.toString()

    const el = calendlyRef.current
    if (el) el.innerHTML = ''

    const init = () => {
      const w = window as unknown as {
        Calendly?: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void }
      }
      if (w.Calendly && w.Calendly.initInlineWidget && el) {
        w.Calendly.initInlineWidget({ url, parentElement: el })
        calendlyLoadedForRef.current = signature
      } else {
        setTimeout(init, 150)
      }
    }

    /* Inyectar el script de Calendly si todavía no está en el DOM. */
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    )
    if (existing) {
      init()
    } else {
      const s = document.createElement('script')
      s.src = 'https://assets.calendly.com/assets/external/widget.js'
      s.async = true
      s.onload = init
      document.head.appendChild(s)
    }
  }, [CALENDLY_URL, company, answers.revenue, answers.budget])

  useEffect(() => {
    if (step === 4) loadCalendly()
  }, [step, loadCalendly])

  const next = () => show(step + 1)
  const back = () => show(step - 1)

  const canAdvanceStep3 = company.trim().length > 0

  const toggleOpt = (group: 'revenue' | 'budget', value: string) => {
    setAnswers(a => ({ ...a, [group]: value }))
  }

  return (
    <div className="sl-page">
      <header className="sl-top">
        <span className="sl-brand">SECOND LOOK</span>
        <span className="sl-label" aria-live="polite">
          {step <= TOTAL ? `${step} / ${TOTAL}` : ''}
        </span>
      </header>

      <main className="sl-main">
        <div className="sl-wrap">
          {/* STEP 1 · Welcome */}
          <section
            className={`sl-step${step === 1 ? ' sl-on' : ''}`}
            data-step={1}
            aria-labelledby="sl-s1"
            aria-hidden={step !== 1}
          >
            <div className="sl-row">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="sl-portrait"
                src="/fran-herrera.webp"
                alt="Fran Herrera, founder of CRUDA"
                width={760}
                height={950}
              />
              <div className="sl-col">
                <h1 id="sl-s1">
                  You&rsquo;ve looked at your company from the inside for years.
                </h1>
                <p className="sl-lead">This is the look from the outside.</p>
                <div className="sl-rule" aria-hidden="true" />
                <p className="sl-body" style={{ maxWidth: '46ch' }}>
                  Hi, I&rsquo;m Fran. A Second Look is just you and me: two
                  long conversations about your business, and then I write
                  down what I see. Your company, read from the outside, by
                  someone who has nothing to sell you that day.
                </p>
                <div>
                  <button className="sl-btn" type="button" onClick={next}>
                    See how it works
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* STEP 2 · How it works + who trusted us */}
          <section
            className={`sl-step${step === 2 ? ' sl-on' : ''}`}
            data-step={2}
            aria-label="How it works"
            aria-hidden={step !== 2}
          >
            <div className="sl-stack">
              <div className="sl-three">
                <div className="sl-three__col">
                  <p className="sl-label">First conversation · 90 min</p>
                  <p className="sl-body">
                    We go through the essentials, the way a fractional CMO
                    would: your product, your price, where and how you sell,
                    who your clients really are, and the story underneath it
                    all.
                  </p>
                </div>
                <div className="sl-three__col">
                  <p className="sl-label">Second conversation · 90 min</p>
                  <p className="sl-body">
                    I share what I see: what&rsquo;s working, what isn&rsquo;t,
                    and what&rsquo;s hard to notice when you&rsquo;re this
                    close.
                  </p>
                </div>
                <div className="sl-three__col">
                  <p className="sl-label">Yours to keep</p>
                  <p className="sl-body">
                    A written diagnosis of your business, and what I&rsquo;d
                    do next.
                  </p>
                </div>
              </div>

              <div className="sl-trust">
                <p className="sl-label">Founders and companies who trusted us</p>
                <div className="sl-grid">
                  {TRUST_CARDS.map(c => (
                    <div key={c.name} className="sl-card">
                      <p className="sl-card__n">{c.name}</p>
                      <p className="sl-card__r">{c.meta}</p>
                      <p className="sl-card__l">{c.line}</p>
                    </div>
                  ))}
                </div>
                <p className="sl-range">
                  From homes worth $200 million to a hospital in Abu Dhabi.
                  The industry changes. What a company needs to say about
                  itself doesn&rsquo;t.
                </p>
              </div>

              <div className="sl-actions">
                <button className="sl-btn" type="button" onClick={next}>
                  Tell me about your company
                </button>
                <button className="sl-btn sl-btn--ghost" type="button" onClick={back}>
                  Back
                </button>
              </div>
            </div>
          </section>

          {/* STEP 3 · Tres preguntas */}
          <section
            className={`sl-step${step === 3 ? ' sl-on' : ''}`}
            data-step={3}
            aria-labelledby="sl-s3"
            aria-hidden={step !== 3}
          >
            <form
              className="sl-stack sl-form"
              onSubmit={e => {
                e.preventDefault()
                if (canAdvanceStep3) next()
              }}
            >
              <h2 id="sl-s3">Tell me about your company.</h2>

              <label className="sl-field">
                <span className="sl-label">Company and website</span>
                <input
                  id="sl-company"
                  name="company"
                  type="text"
                  required
                  autoComplete="organization"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                />
              </label>

              <fieldset>
                <legend className="sl-label">Annual revenue</legend>
                <div className="sl-opts">
                  {REVENUE_OPTS.map(o => (
                    <button
                      key={o}
                      className="sl-opt"
                      type="button"
                      aria-pressed={answers.revenue === o}
                      onClick={() => toggleOpt('revenue', o)}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="sl-label">
                  Budget available to invest in this
                </legend>
                <div className="sl-opts">
                  {BUDGET_OPTS.map(o => (
                    <button
                      key={o}
                      className="sl-opt"
                      type="button"
                      aria-pressed={answers.budget === o}
                      onClick={() => toggleOpt('budget', o)}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="sl-actions">
                <button className="sl-btn" type="submit">
                  Continue
                </button>
                <button
                  className="sl-btn sl-btn--ghost"
                  type="button"
                  onClick={back}
                >
                  Back
                </button>
              </div>
            </form>
          </section>

          {/* STEP 4 · Booking */}
          <section
            className={`sl-step${step === 4 ? ' sl-on' : ''}`}
            data-step={4}
            aria-labelledby="sl-s4"
            aria-hidden={step !== 4}
          >
            <div className="sl-stack" style={{ gap: '28px' }}>
              <div className="sl-bookhead">
                <h2 id="sl-s4" style={{ maxWidth: '14ch' }}>
                  Pick a time that works for you.
                </h2>
                <div className="sl-price">
                  <p className="sl-price__amt">$950</p>
                  <p className="sl-price__note">
                    Two conversations and a written diagnosis. Credited toward
                    any engagement if we work together.
                  </p>
                </div>
              </div>

              {CALENDLY_URL ? (
                <div className="sl-calendly" id="sl-calendly" ref={calendlyRef} />
              ) : (
                <p className="sl-fallback">
                  Write to me directly at{' '}
                  <a href="mailto:fran@thecruda.com">fran@thecruda.com</a>.
                </p>
              )}

              <p className="sl-small">
                Once you book, I&rsquo;ll send you an invoice for $950 within
                24 hours. Your time is confirmed when it&rsquo;s paid. We set
                the second conversation together, at the end of the first.
              </p>

              <div className="sl-actions">
                <button
                  className="sl-btn sl-btn--ghost"
                  type="button"
                  onClick={back}
                >
                  Back
                </button>
              </div>
            </div>
          </section>

          {/* CLOSING · step 5 */}
          <section
            className={`sl-step${step === 5 ? ' sl-on' : ''}`}
            data-step={5}
            aria-labelledby="sl-s5"
            aria-hidden={step !== 5}
          >
            <div className="sl-row">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="sl-portrait sl-portrait--sm"
                src="/fran-herrera.webp"
                alt="Fran Herrera"
                width={480}
                height={600}
              />
              <div className="sl-col" style={{ gap: '18px' }}>
                <h2 id="sl-s5">See you soon.</h2>
                <p className="sl-body" style={{ maxWidth: '48ch' }}>
                  Your time is held. The invoice will be in your inbox within
                  24 hours, and once it&rsquo;s paid, your Second Look is
                  confirmed. Between now and then, you don&rsquo;t need to
                  prepare anything. Just come as you are.
                </p>
                <p className="sl-body" style={{ color: 'var(--sl-grey)' }}>
                  Fran
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="sl-foot">
        <span>
          Referred by a client? Write to me directly at{' '}
          <a href="mailto:fran@thecruda.com">fran@thecruda.com</a>.
        </span>
        <span>CRUDA · Your expertise, translated.</span>
      </footer>
    </div>
  )
}
