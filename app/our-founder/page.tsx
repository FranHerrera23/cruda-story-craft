import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import OurFounderStickyIndex from './StickyIndex'
import './our-founder.css'

/* ------------------------------------------------------------------
   CRUDA — /our-founder (editorial system, part 3 rewrite).
   Five blocks. One open, one close. No "How I got here" section —
   its verifiable content lives in the At-a-Glance table. Single <h1>
   in Instrument Serif via .display.
------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'Francisco Herrera — Founder, CRUDA',
  description:
    "I believed the work spoke for itself. It doesn't. The world doesn't reward the best — it rewards the best told. CRUDA exists to change that.",
  alternates: { canonical: 'https://www.thecruda.com/our-founder' },
  openGraph: {
    title: 'Francisco Herrera — Founder, CRUDA',
    description:
      "The world doesn't reward the best — it rewards the best told. CRUDA exists to change that.",
    url: 'https://www.thecruda.com/our-founder',
    type: 'profile',
  },
}

// sameAs omitted intentionally — placeholders were dropped per etapa 4 brief.
const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Francisco Herrera',
  jobTitle: 'Founder',
  url: 'https://www.thecruda.com/our-founder',
  image: 'https://www.thecruda.com/fran-herrera.png',
  worksFor: {
    '@type': 'Organization',
    name: 'CRUDA',
    url: 'https://www.thecruda.com',
  },
  knowsAbout: [
    'Brand strategy',
    'Narrative systems',
    'Founder positioning',
    'Architecture and design marketing',
    'Influencer marketing',
    'Public relations',
  ],
}

// Text rows for At-a-Glance — brief-strict: only the 6 listed.
// 10 / 26 / 14 promote to hero-scale numbers above the table.
const TEXT_ROWS: { label: string; value: string }[] = [
  { label: 'Based in', value: 'Russia, transitioning to Catalunya' },
  { label: 'Building', value: 'CRUDA, a holding company' },
  { label: 'Verticals', value: 'Architecture & Design · Sports · Systems' },
  {
    label: 'Started as',
    value:
      'College dropout at 17, producing events for 600 people in northern Argentina',
  },
  {
    label: 'Worked on',
    value:
      "TikTok · Oreo · DirecTV · FOX · Natura · Nestlé · Mary Kay · Brahma · PedidosYa · Smithfield · Lucciano's · Dean & Dennys · Flynn Paff · United Nations · Argentine Polo Association · National Tourism Board",
  },
  { label: 'Writes', value: 'Everything is a narrative, companies too.' },
]

const COUNTRIES =
  'Argentina · Peru · Brazil · United States · Spain · France · Italy · UK · Germany · Czech Republic · Ukraine · Russia · Kazakhstan · Saudi Arabia · UAE · Lebanon · Israel · India · Pakistan · China · Indonesia · Malaysia · Philippines'

const INDUSTRIES =
  'CPG · Real estate · Construction · Retail · Fintech · Private equity · Web3 · Hospitality · Architecture & lighting design · Sports · Entertainment · Tourism · Tech · Non-profit'

export default function OurFounderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
      />
      <div className="of">
        <OurFounderStickyIndex />

        {/* 01 — BELIEF · hero on ink, only H1.
            Brief v6 T6.2: sale del `.display` reservado al hero de la home.
            La escala baja a --fs-h1, la disciplina editorial vuelve. */}
        <section id="belief" data-section="belief" className="of-hero-ink">
          <div className="of-hero-inner">
            <h1 className="of-hero-h1">
              <span className="of-typing">I believed the work spoke for itself.</span>
            </h1>
          </div>
        </section>

        {/* 01 body · reading on white */}
        <section data-section="belief" className="of-block of-block--white of-belief-body">
          <div className="of-inner">
            <p className="mono of-eyebrow">Our Founder</p>
            <div className="of-reading of-body">
              <p>
                For years I thought that if you were good enough, the world would find you.
                Then I spent ten years inside agencies and brands watching the opposite —
                the best work in the room losing to work that was simply told better.
              </p>
              <p className="of-hit">
                The world doesn&apos;t reward the best. It rewards the best told.
              </p>
              <p>CRUDA exists to change that.</p>
            </div>
          </div>
        </section>

        {/* 02 — METHOD — crema */}
        <section id="method" data-section="method" className="of-block of-block--cream reveal">
          <div className="of-inner">
            <p className="mono of-eyebrow">02 · Method</p>
            <h2 className="of-h2">I read rooms I don&apos;t come from.</h2>
            <div className="of-reading of-body">
              <p>
                Twenty-six countries and fourteen industries is not a list of places
                I&apos;ve been. It&apos;s the reason I can sit with a lighting designer
                in Lima, a founder in Riyadh and a manufacturer in Shanghai, and speak at
                the same level in all three — because merit is measured differently in
                each room, and I learned to read the code before I opened my mouth.
              </p>
              <p>
                That is the whole job. Walk into a world you weren&apos;t raised in,
                understand how value gets recognised there, and build the way someone
                becomes visible in that code.
              </p>
              <p>CRUDA is that, made into a company.</p>
            </div>
            {/* Brief v6 T6.1 — la cita suelta que flotaba a la derecha
                sin patrón se retira. El párrafo de arriba ya cierra. */}
          </div>
        </section>

        {/* 03 — AT A GLANCE — blanco */}
        <section id="at-a-glance" data-section="at-a-glance" className="of-block of-block--white reveal">
          <div className="of-inner">
            <p className="mono of-eyebrow">03 · At a glance</p>

            <div className="of-hero-numbers reveal-group">
              <div className="of-hero-n reveal">
                <span className="of-hero-n-v">10</span>
                <p className="mono of-hero-n-l">years building brands</p>
              </div>
              <div className="of-hero-n reveal">
                <span className="of-hero-n-v">26</span>
                <p className="mono of-hero-n-l">countries across 4 continents</p>
                <p className="mono of-hero-n-list">{COUNTRIES}</p>
              </div>
              <div className="of-hero-n reveal">
                <span className="of-hero-n-v">14</span>
                <p className="mono of-hero-n-l">industries</p>
                <p className="mono of-hero-n-list">{INDUSTRIES}</p>
              </div>
            </div>

            <div className="of-glance-split">
              <div className="of-table reveal-group" role="table">
                {TEXT_ROWS.map((row) => (
                  <div className="of-tr reveal" role="row" key={row.label}>
                    <span className="mono of-tk" role="rowheader">
                      {row.label}
                    </span>
                    <span className="of-tv" role="cell">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <figure className="of-photo">
                <Image
                  src="/fran-herrera.png"
                  alt="Francisco Herrera, founder of CRUDA"
                  width={800}
                  height={1000}
                />
                <figcaption className="mono">Francisco Herrera</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* 04 — PROOF — crema, left-aligned per Punto 4 */}
        <section id="proof" data-section="proof" className="of-block of-block--cream reveal">
          <div className="of-inner">
            <p className="mono of-eyebrow">04 · Proof</p>
            <h2 className="of-h2">The proof isn&apos;t mine.</h2>
            <p className="of-proof-sub">
              If the job is making other people visible, the proof has to be people you can
              see.
            </p>
            <Link href="/clients" className="mono of-proof-link">
              <span>See the work</span>
              <span className="of-proof-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {/* 05 — CONTACT — negro.
            Brief v6 T6.2: sale del `.display`. --fs-h1 alcanza. */}
        <section id="contact" data-section="contact" className="of-block of-block--ink reveal">
          <div className="of-inner">
            <p className="mono of-eyebrow of-eyebrow--on-ink">05 · Contact</p>
            <p className="of-close-line">
              The work still doesn&apos;t speak. Now I do it for other people.
            </p>
            <Link href="/contact" className="of-cta">
              Start a conversation
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
