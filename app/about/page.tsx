import type { Metadata } from 'next'
import Link from 'next/link'
import StartHere from '@/components/StartHere'
import './about.css'

/* /about · F23-2 · 22-sep · Fran §3.4 v2.

   Hero (rótulo · h1 · regla naranja · lede · link)
   Sección WHAT WE TRANSLATE (con las 3 columnas OUTWARD/INWARD/ACROSS)
   HOW IT STARTED · sin regla en h2
   OPERATING PRINCIPLES · sin regla en h2
   HOW THE WORK IS STRUCTURED · sin regla en h2
   WHO RUNS IT · h2 nuevo, LEGACY → TRACK RECORD
   START HERE (queda hasta f23-5)

   Reglas naranja: UNA sola en toda la página, bajo el h1. */

const BASE = 'https://www.thecruda.com'

const ABOUT_TITLE = 'About · CRUDA'
const ABOUT_DESCRIPTION =
  'CRUDA is a communications company founded by Fran Herrera. First client in 2021, registered in 2024.'

export const metadata: Metadata = {
  title: ABOUT_TITLE,
  description: ABOUT_DESCRIPTION,
  alternates: { canonical: `${BASE}/about` },
  openGraph: {
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
    url: `${BASE}/about`,
    type: 'website',
    images: [
      { url: `${BASE}/logo.png`, width: 1080, height: 1080, alt: 'CRUDA' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
    images: [`${BASE}/logo.png`],
  },
}

export default function AboutPage() {
  return (
    <>
      {/* 01 · HERO · única regla naranja de la página. */}
      <section className="about-sec about-sec--black on-black" data-sec>
        <p className="about-eyebrow">About</p>
        <h1 className="about-name">
          You work with the founder — and with a team small enough to
          move.
        </h1>
        <div className="about-rule" />
        <p className="about-lede" style={{ maxWidth: '42ch' }}>
          CRUDA is a communications company founded by Fran Herrera.
          First client in 2021, registered in 2024.
        </p>
        <Link
          className="about-go"
          href="/services"
          style={{ marginTop: 'clamp(20px, 3.2vh, 36px)' }}
        >
          See how we work →
        </Link>
      </section>

      {/* 02 · WHAT WE TRANSLATE · h2 sin regla. */}
      <section className="about-sec about-sec--black on-black" data-sec>
        <p className="about-eyebrow">What we translate</p>
        <h2 className="about-name">We translate cultures into business.</h2>
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

      {/* 03 · HOW IT STARTED · h2 sin regla. */}
      <section className="about-sec" data-sec>
        <p className="about-eyebrow">How it started</p>
        <h2 className="about-name">
          The first client came three years before the company did.
        </h2>
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

      {/* 04 · OPERATING PRINCIPLES · h2 sin regla. */}
      <section className="about-sec about-sec--black on-black" data-sec>
        <p className="about-eyebrow">Operating principles</p>
        <h2 className="about-name">How the work is done.</h2>
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
              t: 'We never sell with fear: no deadlines, no scarcity, no last chance. If it is not a fit, we say so.',
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

      {/* 05 · HOW THE WORK IS STRUCTURED · h2 sin regla. */}
      <section
        className="about-sec about-sec--black on-black about-sec--soft"
        data-sec
      >
        <p className="about-eyebrow">How the work is structured</p>
        <h2 className="about-name about-name--sm">
          Software handles the volume. A person decides what gets said.
        </h2>
        <div className="about-layers marks">
          <div className="about-layer mark">
            <p className="about-layer__l">The execution layer</p>
            <p className="about-layer__v">
              <em>Software.</em>
            </p>
            <p className="about-layer__n">
              Volume, cadence, format. What can be systematised, is.
            </p>
          </div>
          <div className="about-layer mark">
            <p className="about-layer__l">The judgment layer</p>
            <p className="about-layer__v">A person.</p>
            <p className="about-layer__n">
              What is worth saying, what is true, what gets cut. That stays
              with a person.
            </p>
          </div>
        </div>
      </section>

      {/* 06 · WHO RUNS IT · h2 sin regla. */}
      <section className="about-sec about-sec--black on-black" data-sec>
        <div className="about-who">
          <div className="about-who__port" aria-hidden="true">
            <img src="/fran-herrera.webp" alt="" loading="lazy" />
          </div>
          <div className="about-who__b">
            <p className="about-eyebrow">Who runs it</p>
            <h2 className="about-name about-name--sm">
              Fran Herrera, founder.
            </h2>
            <div className="about-data about-data--2">
              <div className="about-cell">
                <p className="about-cell__l">Experience</p>
                <p className="about-cell__v">
                  Ten years building brands across three continents,
                  in-house and agency side.
                </p>
                <p className="about-cell__n">
                  Born in Salta, in the north of Argentina
                </p>
              </div>
              <div className="about-cell">
                <p className="about-cell__l">Track record</p>
                <p className="about-cell__v">
                  Mondelez · AB InBev · Delivery Hero · Nestlé · TikTok ·
                  a United Nations agency
                </p>
                <p className="about-cell__n">
                  An International Women&apos;s Day campaign for a United
                  Nations agency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 · START HERE · F23-5 */}
      <section className="about-sec" data-sec>
        <StartHere h2="You talk to Fran from the first call." />
      </section>
    </>
  )
}
