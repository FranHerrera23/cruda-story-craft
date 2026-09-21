import type { Metadata } from 'next'
import Link from 'next/link'
import './about.css'

/* /about · F13 · 21-sep · autónomo · prototipo about-v1.

   Seis secciones (NO son planos apilados · brief §2 del prototipo:
   "ninguna sección es un plano apilado. Cada una es un dispositivo
   con jerarquía propia y motion atado al scroll").

     01  Opener · split asimétrico (Pentagram /about)
     02  How it started · cronología con 3 fechas
     03  Operating principles · índice de 5 líneas
     04  How the work is structured · 2 celdas opuestas
     05  Who runs it · retrato + celdas · trampa 7 resuelta
     06  Cierre

   Regla §2 · nav sigue a la superficie por color (`on-black` en
   este archivo señala "surface oscuro"; el `Nav` global detecta
   esta clase para pintar `.bar--dark`).

   Copy textual del prototipo. Los dos rótulos y notas nuevas de
   §04 (execution / judgment layer) heredan de about-v1 y quedan
   firmados por su presencia en el prototipo. */

const BASE = 'https://www.thecruda.com'

/* Enmienda 6-E · meta description exacta. */
const META_DESCRIPTION =
  'CRUDA is a communications company founded by Fran Herrera. First client in 2021, registered in 2024.'

export const metadata: Metadata = {
  title: 'About — CRUDA',
  description: META_DESCRIPTION,
  alternates: { canonical: `${BASE}/about` },
  openGraph: {
    title: 'About — CRUDA',
    description: META_DESCRIPTION,
    url: `${BASE}/about`,
    type: 'website',
    images: [
      { url: `${BASE}/logo.png`, width: 1080, height: 1080, alt: 'CRUDA' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About — CRUDA',
    description: META_DESCRIPTION,
    images: [`${BASE}/logo.png`],
  },
}

export default function AboutPage() {
  return (
    <>
      {/* 01 · OPENER · W2 · rótulo + h1 + regla + lede corto.
          Sale el split gigante; sale "You work with the founder…" y
          la frase machine-assisted (viven abajo, verbatim). */}
      <section className="about-sec about-sec--black on-black" data-sec>
        <p className="about-eyebrow">About</p>
        <h1 className="about-name">
          We translate cultures into business.
        </h1>
        <div className="about-rule" />
        <p className="about-lede" style={{ maxWidth: '34ch' }}>
          CRUDA is a communications company. High ticket, white glove.
        </p>
        <Link className="about-go" href="/services" style={{ marginTop: 'clamp(20px, 3.2vh, 36px)' }}>
          See how we work →
        </Link>
        <div
          className="about-data marks"
          style={{ marginTop: 'clamp(48px, 8vh, 110px)' }}
        >
          <div className="about-cell mark">
            <p className="about-cell__l">Outward</p>
            <p className="about-cell__v">
              Between a founder and a market that never heard of them.
            </p>
          </div>
          <div className="about-cell mark">
            <p className="about-cell__l">Inward</p>
            <p className="about-cell__v">
              Between a company and its own people.
            </p>
          </div>
          <div className="about-cell mark">
            <p className="about-cell__l">Across</p>
            <p className="about-cell__v">
              Between capital from one part of the world and the country it
              just landed in.
            </p>
          </div>
        </div>
      </section>

      {/* 02 · HOW IT STARTED */}
      <section className="about-sec" data-sec>
        <p className="about-eyebrow">How it started</p>
        <h2 className="about-name">
          The first client came three years before the company did.
        </h2>
        <div className="about-rule" />
        {/* W2 · orden cronológico: Early 2021 → February 2024 → 2021—2026 */}
        <div className="about-chron marks">
          <div className="about-crow mark">
            <p className="about-crow__d">Early 2021</p>
            <p className="about-crow__t">
              Karen Mannheim hired Fran Herrera through an agency where
              TRAZZO was one of the accounts.
            </p>
          </div>
          <div className="about-crow mark">
            <p className="about-crow__d">February 2024</p>
            <p className="about-crow__t">
              CRUDA was registered, the same month Norhart restructured and
              the in-house job ended. The practice already existed. What
              changed was the name on it.
            </p>
          </div>
          <div className="about-crow mark">
            <p className="about-crow__d">2021 — 2026</p>
            <p className="about-crow__t">
              The work outlasted the agency and ran for five years.
            </p>
          </div>
        </div>
      </section>

      {/* 03 · OPERATING PRINCIPLES */}
      <section className="about-sec about-sec--black on-black" data-sec>
        <p className="about-eyebrow">Operating principles</p>
        <h2 className="about-name">How the work is done.</h2>
        <div className="about-rule" />
        <div
          className="about-chron marks"
          style={{ borderTopColor: '#272727' }}
        >
          {[
            {
              n: '01',
              t: "We don't invent a story. We remove the layers that aren't yours until what's left is the part you'd have said anyway.",
            },
            {
              n: '02',
              t: "We observe. We don't prescribe. Nobody is told what to believe about their own company. We return what we see and let the founder decide.",
            },
            {
              n: '03',
              t: 'Specific beats general. Names, numbers, places and dates. The more specific a story is, the more people recognise themselves in it.',
            },
            {
              n: '04',
              t: "We never sell with fear. No urgency, no scarcity, no last chance. If it isn't a fit, it isn't a fit.",
            },
            {
              n: '05',
              t: 'Data is directional at best. Some of what matters cannot be counted, and some of what gets counted does not matter. We bring the figures we have and we do not dress up the rest.',
            },
          ].map(row => (
            <div
              key={row.n}
              className="about-crow mark"
              style={{ borderBottomColor: '#272727' }}
            >
              <p className="about-crow__d">{row.n}</p>
              <p className="about-crow__t">{row.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 04 · HOW THE WORK IS STRUCTURED · dos capas */}
      <section
        className="about-sec about-sec--black on-black about-sec--soft"
        data-sec
      >
        <p className="about-eyebrow">How the work is structured</p>
        <h2 className="about-name about-name--sm">
          The system handles volume. The decisions do not scale, and are not
          meant to.
        </h2>
        <div className="about-rule" />
        <div className="about-layers marks">
          <div className="about-layer mark">
            <p className="about-layer__l">The execution layer</p>
            <p className="about-layer__v">
              <em>Machine-assisted.</em>
            </p>
            <p className="about-layer__n">
              Volume, cadence, format. What can be systematised, is.
            </p>
          </div>
          <div className="about-layer mark">
            <p className="about-layer__l">The judgment layer</p>
            <p className="about-layer__v">Not.</p>
            <p className="about-layer__n">
              What is worth saying, what is true, what gets cut. That stays
              with a person.
            </p>
          </div>
        </div>
      </section>

      {/* 05 · WHO RUNS IT */}
      <section className="about-sec about-sec--black on-black" data-sec>
        <div className="about-who">
          <div className="about-who__port" aria-hidden="true">
            <img src="/fran-herrera.webp" alt="" loading="lazy" />
          </div>
          <div className="about-who__b">
            <p className="about-eyebrow">Who runs it</p>
            <h2 className="about-name about-name--sm">
              You work with the founder — and with a team small enough to
              move.
            </h2>
            <div className="about-rule" />
            <div className="about-data about-data--2">
              <div className="about-cell">
                <p className="about-cell__l">Experience</p>
                <p className="about-cell__v">
                  Ten years building brands across three continents, in-house
                  and agency side.
                </p>
                <p className="about-cell__n">
                  Born in Salta, in the north of Argentina
                </p>
              </div>
              <div className="about-cell">
                <p className="about-cell__l">Legacy</p>
                <p className="about-cell__v">
                  Mondelez · AB InBev · Delivery Hero · Nestlé · TikTok ·
                  United Nations
                </p>
                <p className="about-cell__n">
                  Direct work for the United Nations
                </p>
              </div>
            </div>
            <p className="about-cell__n about-credit">
              Fran Herrera · Founder · born in Salta, Argentina
            </p>
          </div>
        </div>
      </section>

      {/* 06 · CIERRE */}
      <section className="about-sec" data-sec>
        <p className="about-eyebrow">Start here</p>
        <h2 className="about-name">One conversation.</h2>
        <div className="about-rule" />
        <p className="about-lede">
          We ask what you are actually trying to do, and what the market
          currently believes about you.
        </p>
        <p className="about-body">
          If those two things are the same, you do not need us. If they are
          not, that gap is the work.
        </p>
        {/* Enmienda 5-F · Book the call como link primario. */}
        <Link className="about-mail" href="/contact">
          Book the call →
        </Link>
        <p className="about-mail-secondary">
          or write to{' '}
          <a href="mailto:fran@thecruda.com">fran@thecruda.com</a>
        </p>
        <Link className="about-go" href="/#selected-work" style={{ marginTop: 'clamp(24px, 4vh, 40px)' }}>
          See the work →
        </Link>
      </section>
    </>
  )
}
