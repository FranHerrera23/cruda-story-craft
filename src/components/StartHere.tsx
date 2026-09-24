import Link from 'next/link'
import './start-here.css'

/* StartHere · F23-5 · 22-sep · Fran §6.

   Reemplaza el bloque "One conversation." en todas las páginas,
   salvo /contact.

   Anatomía:
     START HERE                              rótulo
     h2 · una pregunta que el lector
     reconoce como suya                      h2-sec, sin regla
     [Prueba · 17px ink]                     opcional
     [Fuente · 13px --grey]                  opcional
     The first step is a 45-minute call      lede FIJO (constante F23 §0.1)
     with Fran. No cost, and no pitch at
     the end of it.
     Book the call →                          CTA principal → /contact
     fran@thecruda.com                        secundario

   El fondo lo pone la sección padre; StartHere no fuerza fondo. */

export type StartHereProps = {
  h2: string
  /* Línea de prueba (opcional) con su fuente. */
  proof?: string
  source?: string
}

const LEDE =
  'The first step is a 45-minute call with Fran. No cost, and no pitch at the end of it.'

export default function StartHere({ h2, proof, source }: StartHereProps) {
  return (
    <section className="start-here" aria-label="Start here">
      <div className="start-here__in">
        <p className="start-here__eyebrow">Start here</p>
        <h2 className="start-here__h">{h2}</h2>
        {proof && (
          <>
            <p className="start-here__proof">{proof}</p>
            {source && <p className="start-here__source">{source}</p>}
          </>
        )}
        <p className="start-here__lede">{LEDE}</p>
        <Link className="start-here__cta" href="/contact">
          Book the call →
        </Link>
        <br />
        <a className="start-here__mail" href="mailto:fran@thecruda.com">
          fran@thecruda.com
        </a>
      </div>
    </section>
  )
}

/* Índice de copy por caso · F23-5 §6.2. */
export const CASE_START_HERE: Record<string, StartHereProps> = {
  'karen-mannheim': {
    h2: 'Is your work known at home and invisible abroad?',
    proof:
      'In 2025, TRAZZO grew revenue 46% and closed its largest project, $380K.',
    source: 'TRAZZO internal review, 2025',
  },
  'mike-kaeding': {
    h2: 'Is your company doing more than its story says?',
    proof:
      "Mike's LinkedIn reached 2M impressions a year: $110,000 a year in media value.",
    source: 'LinkedIn Analytics + CPM benchmarks, Jul 2023 — Oct 2024',
  },
  'girish-sehgal': {
    h2: 'Does your career make sense only to people holding your CV?',
    proof: 'A move from hotels to a hospital now reads as strategy.',
  },
  'mannheim-trading': {
    h2: 'Starting something new after a lifetime in one industry?',
    proof: 'At eighty, José publishes under his own name.',
  },
  'juan-pablo-romero': {
    h2: 'Bringing a European brand into the US market?',
  },
  inout: {
    h2: 'Launching a new line under a name the market already knows?',
    proof:
      'Five years on, the client still runs INSIDERS without us.',
    source: 'Client, verified, 2021—2026',
  },
  'confidential-fashion-founder': {
    h2: 'Built it twice, and never told the story?',
    proof: 'One LinkedIn post brought in more than 1,000 CVs.',
    source: 'Client, 2025',
  },
}
