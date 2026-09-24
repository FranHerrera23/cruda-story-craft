import type { Metadata } from 'next'
import Link from 'next/link'
import PlanesStack from '@/components/motion/PlanesStack'
import StartHere from '@/components/StartHere'
import ProofBlock from '@/components/proof/ProofBlock'
import { MIKE_PROOF_CELLS } from '@/data/proof-mike'
import '@/components/motion/planes.css'
import './services.css'

/* /services · F23-2 · 22-sep · Fran §3.3 v2.

   Siete planos. Copy actualizado a §3.3:
     · Ledes de home + services alineados (Work with us for one…).
     · Descriptors nuevos en Transmission, Interpreted, The Read.
     · 03 y 04 renombrados: "Across two cultures" · "A single session".
     · Translated cuerpo nuevo (5 entregables listados).
     · CTAs "Write to us →" → "Book the call →" (→ /contact).
     · Translated conserva "See how it works →" → /services/translated.
     · Línea de costos F23 (constante §0.1) debajo del índice y como
       segunda línea de Fee en Translated/Transmission/Interpreted.
     · Línea "See it in: …" con los casos por plano.
     · Nueva sección WHO IT IS NOT FOR antes de START HERE.
     · Interpreted body intacto (Fran: "no tocar"). */

const BASE = 'https://www.thecruda.com'

const SERVICES_TITLE = 'Services · CRUDA'
const SERVICES_DESCRIPTION =
  'Translated, Transmission, Interpreted and The Read: what each includes, how long it runs and what it costs.'

/* Constantes F23 §0.1 · una sola definición. */
const COST_LINE =
  'Fees cover our work. Any third-party costs are paid by the client directly.'

export const metadata: Metadata = {
  title: SERVICES_TITLE,
  description: SERVICES_DESCRIPTION,
  alternates: { canonical: `${BASE}/services` },
  openGraph: {
    title: SERVICES_TITLE,
    description: SERVICES_DESCRIPTION,
    url: `${BASE}/services`,
    type: 'website',
    images: [
      { url: `${BASE}/logo.png`, width: 1080, height: 1080, alt: 'CRUDA' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SERVICES_TITLE,
    description: SERVICES_DESCRIPTION,
    images: [`${BASE}/logo.png`],
  },
}

export default function ServicesPage() {
  return (
    <>
      <PlanesStack />
      <main className="stack services-stack" id="stack">

        {/* 01 · APERTURA · negro · el índice con precios */}
        <section className="plane plane--black services-open" data-plane>
          <div className="plane__in">
            <p className="eyebrow">What CRUDA is</p>
            <h1 className="name">We translate cultures into business.</h1>
            <div className="rule" />
            <p className="lede">
              Work with us for one session, for twelve weeks, or every
              week after that.
            </p>
            <div className="services-index">
              <div className="irow">
                <span className="irow__o">01</span>
                <span className="irow__n">Translated</span>
                <span className="irow__p">12 weeks · <em>$19,500</em></span>
              </div>
              <div className="irow">
                <span className="irow__o">02</span>
                <span className="irow__n">Transmission</span>
                <span className="irow__p">from <em>$2,200</em> / month</span>
              </div>
              <div className="irow">
                <span className="irow__o">03</span>
                <span className="irow__n">Interpreted</span>
                <span className="irow__p">12 weeks · from <em>$55,000</em></span>
              </div>
              <div className="irow">
                <span className="irow__o">04</span>
                <span className="irow__n">The Read</span>
                <span className="irow__p">per session · <em>On request</em></span>
              </div>
            </div>
            <p className="services-cost-line">{COST_LINE}</p>
          </div>
        </section>

        {/* 02 · TRANSLATED · paper */}
        <section className="plane plane--paper" data-plane id="translated">
          <div className="plane__in">
            <p className="eyebrow">01 · Building the system</p>
            <h2 className="name">Translated</h2>
            <div className="rule" />
            <p className="lede">
              Twelve weeks to build the system a company uses to say what it is.
            </p>
            <p className="body">
              It starts with the founder in the room and ends with a
              system the company keeps running without us: a narrative
              platform, a founder manuscript, four content pillars, a
              website that tells the story, a CRM set up to follow up
              on it, and a working cadence to publish and distribute it.
            </p>
            <div className="data">
              <div className="cell">
                <p className="cell__l">For</p>
                <p className="cell__v">A founder, CMO or head of marketing</p>
              </div>
              <div className="cell">
                <p className="cell__l">Runs</p>
                <p className="cell__v">Twelve weeks</p>
                <p className="cell__n">50% to begin, 50% at month three</p>
              </div>
              <div className="cell">
                <p className="cell__l">Fee</p>
                <p className="cell__v cell__fee">$19,500</p>
                <p className="cell__n">Flat</p>
                <p className="cell__n">{COST_LINE}</p>
              </div>
            </div>
            <div className="services-ctas">
              <Link className="go" href="/contact">
                Book the call →
              </Link>
              <Link className="go" href="/services/translated">
                See how it works →
              </Link>
            </div>
            <p className="services-see-in">
              See it in:{' '}
              <Link href="/work/karen-mannheim">Karen Mannheim</Link> ·{' '}
              <Link href="/work/girish-sehgal">Girish Sehgal</Link> ·{' '}
              <Link href="/work/mannheim-trading">José Mannheim</Link> ·{' '}
              <Link href="/work/juan-pablo-romero">JP Romero</Link> ·{' '}
              <Link href="/work/inout">INOUT</Link>
            </p>
          </div>
        </section>

        {/* 03 · TRANSMISSION · negro */}
        <section className="plane plane--black" data-plane id="transmission">
          <div className="plane__in">
            <p className="eyebrow">02 · Running the system</p>
            <h2 className="name">Transmission</h2>
            <div className="rule" />
            <p className="lede">
              We run the system every week, so it stops depending on the
              founder.
            </p>
            <div className="data data--2">
              <div className="cell">
                <p className="cell__l">Runs</p>
                <p className="cell__v">Monthly</p>
                <p className="cell__n">Thirty days’ notice, either side</p>
              </div>
              <div className="cell">
                <p className="cell__l">Fee</p>
                <p className="cell__v cell__fee">From $2,200</p>
                <p className="cell__n">Per month</p>
                <p className="cell__n">{COST_LINE}</p>
              </div>
            </div>
            <div className="services-ctas">
              <Link className="go" href="/contact">
                Book the call →
              </Link>
            </div>
            <p className="services-see-in">
              See it in:{' '}
              <Link href="/work/karen-mannheim">Karen Mannheim</Link> ·{' '}
              <Link href="/work/mike-kaeding">Mike Kaeding</Link> ·{' '}
              <Link href="/work/juan-pablo-romero">JP Romero</Link>
            </p>
          </div>
        </section>

        {/* 04 · INTERPRETED · paper */}
        <section className="plane plane--paper" data-plane id="interpreted">
          <div className="plane__in">
            <p className="eyebrow">03 · Across two cultures</p>
            <h2 className="name">Interpreted</h2>
            <div className="rule" />
            <p className="lede">
              For companies whose owners, teams and buyers come from
              different cultures.
            </p>
            <p className="body">
              Outward, the narrative does not speak to the capital or the
              buyer it needs to reach. Inward, foreign leadership and local
              staff do not understand each other, and the talent leaves. We
              work both fronts, on the ground, with interpreters and press.
              Today: Chinese and Middle Eastern joint ventures operating in
              Russia and Belarus.
            </p>
            <div className="data">
              <div className="cell">
                <p className="cell__l">Runs</p>
                <p className="cell__v">Twelve weeks</p>
                <p className="cell__n">Discovery, plan, execution in situ</p>
              </div>
              <div className="cell">
                <p className="cell__l">Team</p>
                <p className="cell__v">Interpreters, press, direction</p>
                <p className="cell__n">White glove, 1:1</p>
              </div>
              <div className="cell">
                <p className="cell__l">Fee</p>
                <p className="cell__v cell__fee">From $55,000</p>
                <p className="cell__n">Scope set per firm</p>
                <p className="cell__n">{COST_LINE}</p>
              </div>
            </div>
            <div className="services-ctas">
              <Link className="go" href="/contact">
                Book the call →
              </Link>
            </div>
            <p className="services-see-in">
              See it in:{' '}
              <Link href="/work/confidential-fashion-founder">Confidential</Link>
            </p>
          </div>
        </section>

        {/* 05 · THE READ · negro */}
        <section className="plane plane--black" data-plane id="read">
          <div className="plane__in">
            <p className="eyebrow">04 · A single session</p>
            <h2 className="name">The Read</h2>
            <div className="rule" />
            <p className="lede">
              One session in which an outsider tells you, plainly, what
              they see.
            </p>
            <div className="data data--2">
              <div className="cell">
                <p className="cell__l">Runs</p>
                <p className="cell__v">One session</p>
                <p className="cell__n">No system, no retainer</p>
              </div>
              <div className="cell">
                <p className="cell__l">Fee</p>
                <p className="cell__v">On request</p>
              </div>
            </div>
            <div className="services-ctas">
              <Link className="go" href="/contact">
                Book the call →
              </Link>
            </div>
          </div>
        </section>

        {/* F31 §1.4 · WHO IT IS NOT FOR sale de la página · el
            rótulo/h2/lede quedaba en /services de la versión F23-2;
            F31 §1.4 pide sacarlo. */}

        {/* 07 · F28 §2 · MIKE PROOF · mismo componente que la
            prueba de Karen en la home. Cifras 56,000 · 2M · $110,000
            (proof-mike.ts). */}
        <MikeProofBlock />

        {/* 08 · START HERE · F23-5 · con "Book the call →". */}
        <section className="plane plane--paper services-close" data-plane>
          <div className="plane__in">
            <StartHere h2="Not sure which of the four fits?" />
          </div>
        </section>

      </main>
    </>
  )
}

function MikeProofBlock() {
  return (
    <ProofBlock
      id="mike-proof"
      eyebrow="What we built for him"
      h2="A weekly voice for a plan to halve the cost of housing."
      body="Mike Kaeding runs Norhart, a Minnesota company that has created $230M in assets and aims to cut the cost of building housing in half. From 2023 to 2025, we turned that plan into a voice he publishes every week, under his own name."
      cells={MIKE_PROOF_CELLS}
      href="/work/mike-kaeding"
      linkLabel="Read the case study"
    />
  )
}
