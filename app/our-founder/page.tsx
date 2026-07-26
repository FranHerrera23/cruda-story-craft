import type { Metadata } from 'next'
import Image from 'next/image'
import './our-founder.css'

/* ------------------------------------------------------------------
   CRUDA — /our-founder. Etapa 4.
   Copy locked from ourfounder.html + brief. Rows that start with [FRAN
   are skipped entirely — placeholder ≠ render. Single <h1> = the hero.
   Person schema below excludes any sameAs with placeholders.
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

// sameAs is intentionally empty until Fran provides links.
// A broken sameAs is worse than none — per brief PASO 4.
const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Francisco Herrera',
  jobTitle: 'Founder',
  url: 'https://www.thecruda.com/our-founder',
  image: 'https://www.thecruda.com/team/fran.jpg',
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

// AT A GLANCE rows. Rows whose value begins with "[FRAN" are dropped at render.
type Row =
  | { kind: 'simple'; label: string; value: string }
  | { kind: 'wide'; label: string; value: string }
  | { kind: 'wide-headline'; label: string; headline: string; list: string }

const AT_A_GLANCE: Row[] = [
  { kind: 'simple', label: 'Based in', value: '[FRAN]' },
  { kind: 'simple', label: 'Building', value: 'CRUDA, a holding company' },
  {
    kind: 'simple',
    label: 'Started as',
    value:
      'College dropout at 17, producing events for 600 people in northern Argentina',
  },
  { kind: 'simple', label: 'Years building brands', value: '10' },
  {
    kind: 'wide',
    label: 'Worked on',
    value:
      "TikTok · Oreo · DirecTV · FOX · Natura · Nestlé · Mary Kay · Brahma · PedidosYa · Smithfield · Lucciano's · Dean & Dennys · Flynn Paff · United Nations · Argentine Polo Association · National Tourism Board",
  },
  {
    kind: 'wide-headline',
    label: 'Clients and teams from',
    headline: '24 countries across 4 continents',
    list:
      'Argentina · Peru · Brazil · United States · Spain · UK · Germany · Czech Republic · Ukraine · Russia · Kazakhstan · Saudi Arabia · UAE · Lebanon · Israel · India · Pakistan · China · Indonesia · Malaysia · Philippines',
  },
  {
    kind: 'wide-headline',
    label: 'Industries',
    headline: '14',
    list:
      'CPG · Real estate · Construction · Retail · Fintech · Private equity · Web3 · Hospitality · Architecture & lighting design · Sports · Entertainment · Tourism · Tech · Non-profit',
  },
  {
    kind: 'simple',
    label: 'Before that',
    value: 'Comedy, music, nightlife and entertainment. 20,000+ tickets sold.',
  },
  { kind: 'simple', label: 'Writes', value: '[FRAN — nombre de la publicación]' },
]

function rowHasPlaceholder(row: Row): boolean {
  if (row.kind === 'wide-headline') {
    return row.headline.startsWith('[FRAN') || row.list.startsWith('[FRAN')
  }
  return row.value.startsWith('[FRAN')
}

export default function OurFounderPage() {
  const rows = AT_A_GLANCE.filter((r) => !rowHasPlaceholder(r))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
      />
      <div className="of">
        {/* 1. HERO */}
        <header className="of-header">
          <div className="w">
            <p className="mono eyebrow">Our Founder</p>
            <h1>I believed the work spoke for itself.</h1>
            <div className="hero-body">
              <p>
                For years I thought that if you were good enough, the world would find you. Then I
                spent ten years inside agencies and brands watching the opposite — the best work in
                the room losing to work that was simply told better.
              </p>
              <p className="hit">
                The world doesn&apos;t reward the best. It rewards the best told.
              </p>
              <p>CRUDA exists to change that.</p>
            </div>
          </div>
        </header>

        {/* 2. AT A GLANCE */}
        <section>
          <div className="w">
            <p className="mono sec-label">At a glance</p>
            <div className="gl">
              {rows.map((row) => {
                if (row.kind === 'wide-headline') {
                  return (
                    <div className="gl-row" key={row.label}>
                      <span className="gl-k">{row.label}</span>
                      <span className="gl-v wide">
                        <span className="gl-n">{row.headline}</span>
                        {row.list}
                      </span>
                    </div>
                  )
                }
                if (row.kind === 'wide') {
                  return (
                    <div className="gl-row" key={row.label}>
                      <span className="gl-k">{row.label}</span>
                      <span className="gl-v wide">{row.value}</span>
                    </div>
                  )
                }
                return (
                  <div className="gl-row" key={row.label}>
                    <span className="gl-k">{row.label}</span>
                    <span className="gl-v">{row.value}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 3. HOW I GOT HERE */}
        <section>
          <div className="w">
            <div className="split">
              <div>
                <h2>How I got here</h2>
                <div className="prose">
                  <p>
                    I was seventeen when I organised an event for six hundred people in a small city
                    in northern Argentina. College dropout, no budget, no reason for anyone to say
                    yes.
                  </p>
                  <p>
                    Then came the theatres. Comedy tours across three provinces. Gerónimo Rauch
                    singing Phantom of the Opera with an orchestra conducted by Gerardo Gardelin.
                    Les Luthiers. Axel. Comedians who now fill the Gran Rex and have over a million
                    followers — back when they were still filling small rooms.
                  </p>
                  <p>
                    My first campaign was for Mary Kay: twenty creators, a summer line launch, and a
                    closing event with their global CMO in the room.
                  </p>
                  <p className="todo">
                    [FRAN — 1 párrafo: Buenos Aires. El boliche de 20.000 personas, las campañas
                    para las marcas de la lista. Material en el CV. Regla: los hechos como prueba de
                    una capacidad, no en orden cronológico.]
                  </p>
                  <p>
                    Then Dubai. Clients and teammates from twenty-four countries. I built the PR
                    strategy for a side event at the White House during the US-Africa Summit —
                    Fortune 1000 CEOs and members of the Ghanaian royal family in the room. It ended
                    up in Associated Press.
                  </p>
                  <p>
                    Every room taught me the same thing from a different angle: the tools of
                    business are real, but the message that actually moves people comes from
                    somewhere else. It isn&apos;t manufactured in a slide.
                  </p>
                </div>
              </div>
              <figure>
                <Image
                  src="/team/fran.jpg"
                  alt="Francisco Herrera, founder of CRUDA"
                  width={800}
                  height={1000}
                />
                <figcaption>Francisco Herrera</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* 4. WHAT I ACTUALLY DO */}
        <section>
          <div className="w">
            <h2>What I actually do</h2>
            <div className="prose">
              <p className="lead">I read rooms I don&apos;t come from.</p>
              <p>
                Twenty-four countries and fourteen industries is not a list of places I&apos;ve
                been. It&apos;s the reason I can sit with a lighting designer in Lima, a founder in
                Riyadh and a manufacturer in Shanghai, and speak at the same level in all three —
                because merit is measured differently in each room, and I learned to read the code
                before I opened my mouth.
              </p>
              <p>
                That is the whole job. Walk into a world you weren&apos;t raised in, understand how
                value gets recognised there, and build the way someone becomes visible in that code.
              </p>
              <p>CRUDA is that, made into a company.</p>
            </div>
          </div>
        </section>

        {/* 5. THE PROOF */}
        <section className="proof">
          <div className="w">
            <h2>The proof isn&apos;t mine</h2>
            <p>
              If the job is making other people visible, the proof has to be people you can see.
            </p>
            <a href="/clients" className="link">
              See the work →
            </a>
          </div>
        </section>

        {/* 6. CIERRE */}
        <section className="close">
          <div className="w">
            <p>Ten years to understand that the work doesn&apos;t speak for itself.</p>
            <p>Now I make sure it does.</p>
            <a href="/contact" className="btn">
              Start a conversation
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
