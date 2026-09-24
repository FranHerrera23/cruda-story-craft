import type { Metadata } from 'next'
import Link from 'next/link'
import StartHere from '@/components/StartHere'
import './about.css'

/* /about · F32 §2 · 24-sep · Fran.

   Cambios vs. F25 §6:
   §2.1 · lede nueva del hero + link "See how we work →" a /services.
   §2.2 · WHO RUNS IT · debajo del born in Salta, agrega bloque de
          lenguajes + link LinkedIn.
   §2.3 · HOW IT STARTED · 4 filas (Early 2021, July 2023, February
          2024, 2021—2026) · sale "registered" y "restructured".
   §2.4 · KEY FACTS (sección nueva antes de START HERE) · <dl>.
   §2.5 · FAQ (sección nueva) · 8 preguntas, acordeón.
   §2.6 · JSON-LD @graph: Organization + Person + FAQPage.
   §2.7 · Meta description actualizada. */

const BASE = 'https://www.thecruda.com'

/* F37 §4 · title de /about pasa a "About CRUDA · Founded by Fran
   Herrera" (entity separation + SEO). */
const ABOUT_TITLE = 'About CRUDA · Founded by Fran Herrera'
const ABOUT_DESCRIPTION =
  'CRUDA is a communications company founded by Fran Herrera in 2024. First client in 2021.'

/* F37 §3 · foto de Fran en /about · URL absoluta para el nodo
   Person.image del JSON-LD. */
const FRAN_PHOTO_URL = `${BASE}/fran-herrera.webp`

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

/* F32 §2.6 · JSON-LD @graph · Organization + Person + FAQPage.
   Un solo <script> con los tres nodos linkeados por @id. F37 va
   a completar Person con birthPlace, knowsLanguage, knowsAbout,
   image y description. */
const ORG_ID = `${BASE}/#organization`
const PERSON_ID = `${BASE}/about#fran-herrera`

/* Las 8 FAQ · mismo texto que se renderea abajo · el `answerText`
   se mantiene idéntico al visible (regla F32 §2.8). */
const FAQ_ITEMS: Array<{ q: string; a: string }> = [
  {
    q: 'What is CRUDA?',
    a: 'CRUDA is a communications company. We build narrative and demand systems for founders, companies and cross-border joint ventures. Fran Herrera founded it in February 2024.',
  },
  {
    q: 'How much does CRUDA cost?',
    a: 'Translated is $19,500 flat for twelve weeks. Transmission starts at $2,200 a month. Interpreted runs twelve weeks from $55,000, and The Read is priced on request.',
  },
  {
    q: 'Who pays for ads, production and other outside costs?',
    a: "The client, directly. CRUDA's fees cover our work. We do not run paid ads ourselves; when a project needs them, we work with a partner agency.",
  },
  {
    q: 'Does CRUDA set up a CRM?',
    a: 'Yes. The CRM is set up during Translated. Ongoing follow-up is scoped separately, alongside Transmission; CRUDA is not a lead generation agency.',
  },
  {
    q: 'Will I work with Fran directly?',
    a: 'Yes. Fran leads every engagement, with a team small enough to move.',
  },
  {
    q: 'Where is CRUDA based?',
    a: 'Between Dubai and Moscow. CRUDA works remotely, with clients in the United States, Latin America and the Middle East.',
  },
  {
    q: 'What languages does CRUDA work in?',
    a: 'English and Spanish, with Russian in-house. Chinese and Arabic through collaborators brought in for each project.',
  },
  {
    q: 'How fast does CRUDA reply?',
    a: 'Within 24 to 48 hours. The first step is a 45-minute call with Fran, booked on the contact page.',
  },
]

const ABOUT_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'CRUDA',
      url: BASE,
      logo: `${BASE}/cruda-logo-black-2x.png`,
      description:
        'CRUDA is a communications company. We build narrative and demand systems for founders, companies and cross-border joint ventures.',
      /* F37 §2 · disambiguatingDescription para separar CRUDA como
         entidad de otras marcas homónimas del rubro moda. */
      disambiguatingDescription:
        'Communications company founded by Fran Herrera in 2024, based in Dubai and Moscow.',
      foundingDate: '2024-02',
      founder: { '@id': PERSON_ID },
      email: 'fran@thecruda.com',
      knowsLanguage: ['en', 'es', 'ru', 'zh', 'ar'],
      sameAs: ['https://www.linkedin.com/company/thecrudaspace/'],
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Fran Herrera',
      url: `${BASE}/about`,
      image: FRAN_PHOTO_URL,
      jobTitle: 'Founder',
      worksFor: { '@id': ORG_ID },
      /* F37 §1 · description + birthPlace + knowsLanguage + knowsAbout
         para consolidar la entidad Fran Herrera como founder of CRUDA,
         distinguible de otras entidades homónimas. */
      description:
        'Founder of CRUDA, a communications company that builds narrative and demand systems for founders, companies and cross-border joint ventures.',
      birthPlace: { '@type': 'Place', name: 'Salta, Argentina' },
      knowsLanguage: ['en', 'es', 'ru'],
      knowsAbout: [
        'Narrative strategy',
        'Founder-led communications',
        'Cross-border joint ventures',
      ],
      sameAs: ['https://www.linkedin.com/in/franherrera2/'],
    },
    {
      '@type': 'FAQPage',
      '@id': `${BASE}/about#faq`,
      mainEntity: FAQ_ITEMS.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
} as const

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_SCHEMA) }}
      />

      {/* 01 · HERO · única regla naranja de la página. */}
      <section className="about-sec" data-sec data-reveal-seq>
        <p className="about-eyebrow" data-reveal>
          About
        </p>
        <h1 className="about-name" data-reveal>
          You work with the founder — and with a team small enough to
          move.
        </h1>
        <div className="about-rule" data-reveal />
        <p
          className="about-lede"
          style={{ maxWidth: '48ch' }}
          data-reveal
        >
          CRUDA is a communications company. We build narrative and
          demand systems for founders, companies and cross-border joint
          ventures. Fran Herrera founded it in February 2024; the first
          client came in 2021.
        </p>
        <Link
          className="about-go"
          href="/services"
          style={{ marginTop: 'clamp(20px, 3.2vh, 36px)' }}
          data-reveal
        >
          See how we work →
        </Link>
      </section>

      {/* 02 · WHAT WE TRANSLATE · h2 sin regla · paper. */}
      <section className="about-sec" data-sec data-reveal-seq>
        <p className="about-eyebrow" data-reveal>
          What we translate
        </p>
        <h2 className="about-name" data-reveal>
          We translate cultures into business.
        </h2>
        <div
          className="about-data marks"
          style={{ marginTop: 'clamp(48px, 8vh, 110px)' }}
        >
          <div className="about-cell mark" data-reveal>
            <p className="about-cell__l">Outward</p>
            <p className="about-cell__v">
              Between a founder and a market that never heard of them.
            </p>
          </div>
          <div className="about-cell mark" data-reveal>
            <p className="about-cell__l">Inward</p>
            <p className="about-cell__v">
              Between a company and its own people.
            </p>
          </div>
          <div className="about-cell mark" data-reveal>
            <p className="about-cell__l">Across</p>
            <p className="about-cell__v">
              Between capital from one part of the world and the country it
              just landed in.
            </p>
          </div>
        </div>
      </section>

      {/* 03 · HOW IT STARTED · F32 §2.3 · ahora 4 filas · sale
          "registered" y "restructured". */}
      <section className="about-sec" data-sec data-reveal-seq>
        <p className="about-eyebrow" data-reveal>
          How it started
        </p>
        <h2 className="about-name" data-reveal>
          The first client came three years before the company did.
        </h2>
        <div className="about-chron marks">
          <div className="about-crow mark" data-reveal>
            <p className="about-crow__d">Early 2021</p>
            <p className="about-crow__t">
              Karen Mannheim hired Fran Herrera through an agency where
              TRAZZO was one of the accounts.
            </p>
          </div>
          <div className="about-crow mark" data-reveal>
            <p className="about-crow__d">July 2023</p>
            <p className="about-crow__t">
              Fran went in-house at Norhart, Mike Kaeding&apos;s construction
              company in Minneapolis.
            </p>
          </div>
          <div className="about-crow mark" data-reveal>
            <p className="about-crow__d">February 2024</p>
            <p className="about-crow__t">
              Fran was part of a round of layoffs at Norhart, and CRUDA
              started that month. Mike stayed on as a client into 2025.
            </p>
          </div>
          <div className="about-crow mark" data-reveal>
            <p className="about-crow__d">2021 — 2026</p>
            <p className="about-crow__t">
              The work outlasted the agency and ran for five years.
            </p>
          </div>
        </div>
      </section>

      {/* 04 · OPERATING PRINCIPLES · "How the work is done." */}
      <section className="about-sec" data-sec data-reveal-seq>
        <p className="about-eyebrow" data-reveal>
          Operating principles
        </p>
        <h2 className="about-name" data-reveal>
          How the work is done.
        </h2>
        <div className="about-chron marks">
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
            <div key={row.n} className="about-crow mark" data-reveal>
              <p className="about-crow__d">{row.n}</p>
              <p className="about-crow__t">{row.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 05 · HOW THE WORK IS STRUCTURED · paper · h2 sin regla. */}
      <section className="about-sec" data-sec data-reveal-seq>
        <p className="about-eyebrow" data-reveal>
          How the work is structured
        </p>
        <h2 className="about-name about-name--sm" data-reveal>
          Software handles the volume. A person decides what gets said.
        </h2>
        <div className="about-layers marks">
          <div className="about-layer mark" data-reveal>
            <p className="about-layer__l">The execution layer</p>
            <p className="about-layer__v">
              <em>Software.</em>
            </p>
            <p className="about-layer__n">
              Volume, cadence, format. What can be systematised, is.
            </p>
          </div>
          <div className="about-layer mark" data-reveal>
            <p className="about-layer__l">The judgment layer</p>
            <p className="about-layer__v">A person.</p>
            <p className="about-layer__n">
              What is worth saying, what is true, what gets cut. That stays
              with a person.
            </p>
          </div>
        </div>
      </section>

      {/* 06 · WHO RUNS IT · F32 §2.2 · agrega lenguajes + LinkedIn. */}
      <section className="about-sec" data-sec data-reveal-seq>
        <div className="about-who">
          <div className="about-who__port" aria-hidden="true">
            <img
              src="/fran-herrera.webp"
              alt="Fran Herrera, founder of CRUDA"
              loading="lazy"
            />
          </div>
          <div className="about-who__b">
            <p className="about-eyebrow" data-reveal>
              Who runs it
            </p>
            <h2
              className="about-name about-name--sm"
              data-reveal
              id="fran-herrera"
            >
              Fran Herrera, founder.
            </h2>
            <div className="about-data about-data--2">
              <div className="about-cell" data-reveal>
                <p className="about-cell__l">Experience</p>
                <p className="about-cell__v">
                  Ten years building brands across three continents,
                  in-house and agency side.
                </p>
                <p className="about-cell__n">
                  Born in Salta, in the north of Argentina.
                </p>
                <p className="about-cell__n">
                  Fran leads every engagement. Russian is covered in-house;
                  Chinese and Arabic through collaborators brought in for
                  each project.
                </p>
              </div>
              <div className="about-cell" data-reveal>
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
            <a
              className="about-go"
              href="https://www.linkedin.com/in/franherrera2/"
              target="_blank"
              rel="me noopener"
              style={{ marginTop: 'clamp(20px, 3.2vh, 36px)' }}
              data-reveal
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </section>

      {/* 07 · KEY FACTS · F32 §2.4 · <dl> render server-side. */}
      <section
        className="about-sec about-keyfacts"
        data-sec
        data-reveal-seq
        aria-label="Key facts"
      >
        <p className="about-eyebrow" data-reveal>
          At a glance
        </p>
        <h2 className="about-name about-name--sm" data-reveal>
          Key facts.
        </h2>
        <dl className="about-kf" data-reveal>
          <div>
            <dt>Company</dt>
            <dd>CRUDA</dd>
          </div>
          <div>
            <dt>Type</dt>
            <dd>Communications company</dd>
          </div>
          <div>
            <dt>Founded</dt>
            <dd>February 2024 · first client in 2021</dd>
          </div>
          <div>
            <dt>Founder</dt>
            <dd>Fran Herrera</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>Dubai and Moscow · works remotely for clients worldwide</dd>
          </div>
          <div>
            <dt>Website</dt>
            <dd>thecruda.com</dd>
          </div>
          <div>
            <dt>Core offering</dt>
            <dd>
              Narrative and demand systems for founders, companies and
              cross-border joint ventures
            </dd>
          </div>
          <div>
            <dt>Services</dt>
            <dd>Translated · Transmission · Interpreted · The Read</dd>
          </div>
          <div>
            <dt>Pricing</dt>
            <dd>
              Translated $19,500 flat, 12 weeks · Transmission from $2,200
              per month · Interpreted from $55,000, 12 weeks · The Read on
              request
            </dd>
          </div>
          <div>
            <dt>Terms</dt>
            <dd>
              Translated: 50% to begin, 50% at month three · Transmission:
              monthly, 30 days&apos; notice · Third-party costs paid by the
              client directly
            </dd>
          </div>
          <div>
            <dt>Languages</dt>
            <dd>
              English and Spanish · Russian in-house · Chinese and Arabic
              through project collaborators
            </dd>
          </div>
          <div>
            <dt>Response time</dt>
            <dd>Within 24–48 hours</dd>
          </div>
          <div>
            <dt>Notable clients</dt>
            <dd>
              <Link href="/work/karen-mannheim">Karen Mannheim</Link> (TRAZZO
              Lighting) ·{' '}
              <Link href="/work/mike-kaeding">Mike Kaeding</Link> (Norhart) ·{' '}
              <Link href="/work/girish-sehgal">Girish Sehgal</Link> (Sheikh
              Shakhbout Medical City) ·{' '}
              <Link href="/work/mannheim-trading">José Mannheim</Link> (MTC) ·{' '}
              <Link href="/work/juan-pablo-romero">JP Romero</Link> (JURA ·
              CTD)
            </dd>
          </div>
          <div>
            <dt>Social</dt>
            <dd>
              <a
                href="https://www.linkedin.com/company/thecrudaspace/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn (CRUDA)
              </a>{' '}
              ·{' '}
              <a
                href="https://www.linkedin.com/in/franherrera2/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn (Fran Herrera)
              </a>
            </dd>
          </div>
        </dl>
      </section>

      {/* 08 · FAQ · F32 §2.5 · acordeón. */}
      <section
        className="about-sec about-faq"
        data-sec
        data-reveal-seq
        aria-label="Frequently asked questions"
      >
        <p className="about-eyebrow" data-reveal>
          Questions
        </p>
        <h2 className="about-name about-name--sm" data-reveal>
          Frequently asked questions.
        </h2>
        <div className="about-faq__list" data-reveal>
          {FAQ_ITEMS.map((f, i) => (
            <details key={i}>
              <summary>
                <h3>{f.q}</h3>
              </summary>
              <p>
                {f.q === 'How fast does CRUDA reply?' ? (
                  <>
                    Within 24 to 48 hours. The first step is a 45-minute
                    call with Fran, booked on the{' '}
                    <Link href="/contact">contact page</Link>.
                  </>
                ) : (
                  f.a
                )}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* 09 · START HERE · F23-5 */}
      <section className="about-sec" data-sec>
        <StartHere h2="You talk to Fran from the first call." />
      </section>
    </>
  )
}
