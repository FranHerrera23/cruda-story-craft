import type { Metadata } from 'next'
import Link from 'next/link'
import PlanesStack from '@/components/motion/PlanesStack'
import '@/components/motion/planes.css'
import './services.css'

/* /services · F12 · 21-sep · autónomo · prototipo services-v4.

   Siete planos. Copy textual del prototipo. Precios firmados §2:
     Translated    12 weeks · $19,500  (Flat)
     Transmission  From $2,200 / month
     Interpreted   12 weeks · From $55,000
     The Read      per session · On request

   Sólo TRANSLATED lleva a otra página (`/process` · brief §2:
   "See how it works" va ahí). Los otros tres CTA van a /contact.

   mix-blend-mode del prototipo se retira (§2 · cero mix-blend).
   Contador NN/07 se retira (§2 · cero contadores). El progreso
   sigue vivo, sin numeración textual. */

const BASE = 'https://www.thecruda.com'

const META_DESCRIPTION =
  'CRUDA is a communications company. We translate cultures into business.'

export const metadata: Metadata = {
  title: 'Services — CRUDA',
  description: META_DESCRIPTION,
  alternates: { canonical: `${BASE}/services` },
  openGraph: {
    title: 'Services — CRUDA',
    description: META_DESCRIPTION,
    url: `${BASE}/services`,
    type: 'website',
    images: [
      { url: `${BASE}/logo.png`, width: 1080, height: 1080, alt: 'CRUDA' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services — CRUDA',
    description: META_DESCRIPTION,
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
              Four doors. The same skill, at four distances.
            </p>
            <div className="services-index">
              <div className="irow">
                <span className="irow__o">01</span>
                <span className="irow__n">Translated</span>
                <span className="irow__p">12 weeks · $19,500</span>
              </div>
              <div className="irow">
                <span className="irow__o">02</span>
                <span className="irow__n">Transmission</span>
                <span className="irow__p">from $2,200 / month</span>
              </div>
              <div className="irow">
                <span className="irow__o">03</span>
                <span className="irow__n">Interpreted</span>
                <span className="irow__p">12 weeks · from $55,000</span>
              </div>
              <div className="irow">
                <span className="irow__o">04</span>
                <span className="irow__n">The Read</span>
                <span className="irow__p">per session</span>
              </div>
            </div>
          </div>
        </section>

        {/* 02 · TRANSLATED · paper */}
        <section className="plane plane--paper" data-plane>
          <div className="plane__in">
            <p className="eyebrow">01 · Building the system</p>
            <h2 className="name">Translated</h2>
            <div className="rule" />
            <p className="lede">
              Twelve weeks to build the system a company uses to say what it is.
            </p>
            <p className="body">
              It starts with the founder in the room and ends with a narrative
              platform, a founder manuscript, four content pillars and a
              working cadence — a proprietary framework, run 1:1, that the
              company can keep running without us.
            </p>
            <div className="data">
              <div className="cell">
                <p className="cell__l">For</p>
                <p className="cell__v">A founder, CMO or head of marketing</p>
                <p className="cell__n">One engagement at a time</p>
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
              </div>
            </div>
            <Link className="go" href="/process">
              See how it works →
            </Link>
          </div>
        </section>

        {/* 03 · TRANSMISSION · negro */}
        <section className="plane plane--black" data-plane>
          <div className="plane__in">
            <p className="eyebrow">02 · Running the system</p>
            <h2 className="name">Transmission</h2>
            <div className="rule" />
            <p className="lede">
              The system, run every week, so it stops depending on the founder.
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
              </div>
            </div>
            <Link className="go" href="/contact">
              Write to us →
            </Link>
          </div>
        </section>

        {/* 04 · INTERPRETED · paper */}
        <section className="plane plane--paper" data-plane>
          <div className="plane__in">
            <p className="eyebrow">03 · Two cultures, one room</p>
            <h2 className="name">Interpreted</h2>
            <div className="rule" />
            <p className="lede">
              Two sides with capital and capability, made legible to each other.
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
              </div>
            </div>
            <Link className="go" href="/contact">
              Write to us →
            </Link>
          </div>
        </section>

        {/* 05 · THE READ · negro */}
        <section className="plane plane--black" data-plane>
          <div className="plane__in">
            <p className="eyebrow">04 · Judgment, once</p>
            <h2 className="name">The Read</h2>
            <div className="rule" />
            <p className="lede">
              One session. What an outsider sees, said plainly.
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
            <Link className="go" href="/contact">
              Write to us →
            </Link>
          </div>
        </section>

        {/* 06 · EL CORTE · paper */}
        <section className="plane plane--paper" data-plane>
          <div className="plane__in">
            <p className="eyebrow">Who it holds for</p>
            <h2 className="name">If none of this is you, this is not for you.</h2>
            <div className="rule" />
          </div>
        </section>

        {/* 07 · CIERRE · paper */}
        <section className="plane plane--paper services-close" data-plane>
          <div className="plane__in">
            <p className="eyebrow">Start here</p>
            <h2 className="name">One conversation.</h2>
            <div className="rule" />
            <p className="lede">
              We ask what you are actually trying to do, and what the market
              currently believes about you.
            </p>
            <p className="body">
              If those two things are the same, you do not need us. If they
              are not, that gap is the work.
            </p>
            <a className="services-mail" href="mailto:fran@thecruda.com">
              fran@thecruda.com
            </a>
          </div>
        </section>

      </main>
    </>
  )
}
