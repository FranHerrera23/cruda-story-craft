import type { Metadata } from 'next'
import Link from 'next/link'
import StartHere from '@/components/StartHere'
import './about.css'

/* /about · F24 · 23-sep · Fran §2–§5 (AEO).

   HERO (rótulo · h1 · regla naranja · primer párrafo · lede · link)
   Sección WHAT WE TRANSLATE (con las 3 columnas OUTWARD/INWARD/ACROSS)
   HOW IT STARTED (nuevo · CRUDA started the month Fran was laid off)
   OPERATING PRINCIPLES · sin regla en h2
   HOW THE WORK IS STRUCTURED · sin regla en h2
   WHO RUNS IT · Fran Herrera, founder · agregadas líneas F24 · LinkedIn
   AT A GLANCE (nuevo · <dl> con 14 filas · key facts para AEO)
   QUESTIONS (nuevo · 8 h3 + p · FAQ)
   START HERE

   Reglas naranja: UNA sola en toda la página, bajo el h1.

   §3 vs §7 (parar y reportar): el brief §3 dice "si hoy hay un lede
   debajo del h1, queda debajo, sin cambios". El lede actual traía
   "registered in 2024", que §7 exige a 0. Resolución: se conserva
   el lede pero se refrasea la línea para eliminar "registered in 2024"
   (matcheando la meta description de §2). Se reporta a Fran.

   §4.1 Fran block (bio + LinkedIn): tres líneas ya vivían en WHO
   RUNS IT. Las dos que faltaban ("Fran leads every engagement…" y
   el link "LinkedIn →") se agregan ahí para no duplicar.

   §5 JSON-LD: Organization ya se emitía site-wide desde app/layout.tsx.
   Aquí se emite un @graph con Organization + Person + FAQPage; sale
   el schema site-wide si vive en /about (queda el del layout como
   default site-wide y se re-emite acá con más detalle). */

const BASE = 'https://www.thecruda.com'

const ABOUT_TITLE = 'About · CRUDA'
const ABOUT_DESCRIPTION =
  'CRUDA is a communications company founded by Fran Herrera in 2024. First client in 2021.'

const LOGO_URL = `${BASE}/cruda-logo-black.png`

/* Constantes F24 §4.3 · FAQ · el texto acá es la ÚNICA fuente,
   consumida por (a) el render visible y (b) el JSON-LD. Cambiar
   una respuesta cambia los dos. */
const FAQ: { q: string; a: React.ReactNode; jsonA: string }[] = [
  {
    q: 'What is CRUDA?',
    a: (
      <>
        CRUDA is a communications company. We build narrative and
        demand systems for founders, companies and cross-border joint
        ventures. Fran Herrera founded it in February 2024.
      </>
    ),
    jsonA:
      'CRUDA is a communications company. We build narrative and demand systems for founders, companies and cross-border joint ventures. Fran Herrera founded it in February 2024.',
  },
  {
    q: 'How much does CRUDA cost?',
    a: (
      <>
        Translated is $19,500 flat for twelve weeks. Transmission
        starts at $2,200 a month. Interpreted runs twelve weeks from
        $55,000, and The Read is priced on request.
      </>
    ),
    jsonA:
      'Translated is $19,500 flat for twelve weeks. Transmission starts at $2,200 a month. Interpreted runs twelve weeks from $55,000, and The Read is priced on request.',
  },
  {
    q: 'Who pays for ads, production and other outside costs?',
    a: (
      <>
        The client, directly. CRUDA’s fees cover our work. We do not
        run paid ads ourselves; when a project needs them, we work
        with a partner agency.
      </>
    ),
    jsonA:
      'The client, directly. CRUDA’s fees cover our work. We do not run paid ads ourselves; when a project needs them, we work with a partner agency.',
  },
  {
    q: 'Does CRUDA set up a CRM?',
    a: (
      <>
        Yes. The CRM is set up during Translated. Ongoing follow-up is
        scoped separately, alongside Transmission; CRUDA is not a lead
        generation agency.
      </>
    ),
    jsonA:
      'Yes. The CRM is set up during Translated. Ongoing follow-up is scoped separately, alongside Transmission; CRUDA is not a lead generation agency.',
  },
  {
    q: 'Will I work with Fran directly?',
    a: <>Yes. Fran leads every engagement, with a team small enough to move.</>,
    jsonA:
      'Yes. Fran leads every engagement, with a team small enough to move.',
  },
  {
    q: 'Where is CRUDA based?',
    a: (
      <>
        Between Dubai and Moscow. CRUDA works remotely, with clients
        in the United States, Latin America and the Middle East.
      </>
    ),
    jsonA:
      'Between Dubai and Moscow. CRUDA works remotely, with clients in the United States, Latin America and the Middle East.',
  },
  {
    q: 'What languages does CRUDA work in?',
    a: (
      <>
        English and Spanish, with Russian in-house. Chinese and Arabic
        through collaborators brought in for each project.
      </>
    ),
    jsonA:
      'English and Spanish, with Russian in-house. Chinese and Arabic through collaborators brought in for each project.',
  },
  {
    q: 'How fast does CRUDA reply?',
    a: (
      <>
        Within 24 to 48 hours. The first step is a 45-minute call with
        Fran, booked on the <Link href="/contact">contact page</Link>.
      </>
    ),
    jsonA:
      'Within 24 to 48 hours. The first step is a 45-minute call with Fran, booked on the contact page.',
  },
]

/* @graph JSON-LD · §5. Person + FAQPage.

   La Organization schema (mismo @id) la emite app/layout.tsx site-wide
   con TODOS los campos que §5 pide (description, email, knowsLanguage,
   sameAs, foundingDate, founder). Emitirla también acá duplicaría el
   nodo en el HTML de /about — §7 check "Un solo JSON-LD de Organization
   en /about". Se referencia por @id desde Person.worksFor. Reportado. */
const ABOUT_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${BASE}/about#fran-herrera`,
      name: 'Fran Herrera',
      jobTitle: 'Founder',
      worksFor: { '@id': `${BASE}/#organization` },
      sameAs: ['https://www.linkedin.com/in/franherrera2/'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map(({ q, jsonA }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: jsonA },
      })),
    },
  ],
}

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
      { url: LOGO_URL, width: 708, height: 284, alt: 'CRUDA' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
    images: [LOGO_URL],
  },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ABOUT_SCHEMA),
        }}
      />

      {/* 01 · HERO · única regla naranja de la página. */}
      <section className="about-sec about-sec--black on-black" data-sec>
        <p className="about-eyebrow">About</p>
        <h1 className="about-name">
          You work with the founder — and with a team small enough to
          move.
        </h1>
        <div className="about-rule" />
        <p className="about-lede" style={{ maxWidth: '58ch' }}>
          CRUDA is a communications company. We build narrative and
          demand systems for founders, companies and cross-border
          joint ventures.
        </p>
        <p
          className="about-lede about-lede--sub"
          style={{ maxWidth: '42ch' }}
        >
          Founded by Fran Herrera in 2024. First client in 2021.
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

      {/* 03 · HOW IT STARTED · F24 §4.1 · reemplaza la cronología vieja. */}
      <section className="about-sec" data-sec>
        <p className="about-eyebrow">How it started</p>
        <h2 className="about-name">
          CRUDA started the month Fran was laid off.
        </h2>
        <p className="about-body" style={{ maxWidth: '60ch' }}>
          Karen Mannheim hired Fran in 2021. In July 2023 he went
          in-house at Norhart, Mike Kaeding&apos;s construction company
          in Minneapolis. In February 2024 he was part of a round of
          layoffs there, and CRUDA started that month. Mike stayed on
          as a client into 2025.
        </p>
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

      {/* 06 · WHO RUNS IT · h2 sin regla · F24 agrega dos líneas + LinkedIn. */}
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
            {/* F24 · líneas nuevas + LinkedIn. */}
            <p className="about-body about-who__note">
              Fran leads every engagement. Russian is covered in-house;
              Chinese and Arabic through collaborators brought in for
              each project.
            </p>
            <a
              className="about-go about-who__go"
              href="https://www.linkedin.com/in/franherrera2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </section>

      {/* 07 · AT A GLANCE · F24 §4.2 · <dl> server-rendered para AEO. */}
      <section className="about-sec" data-sec>
        <p className="about-eyebrow">At a glance</p>
        <h2 className="about-name">Key facts.</h2>
        <dl className="about-facts">
          <div className="about-facts__row">
            <dt>Company</dt>
            <dd>CRUDA</dd>
          </div>
          <div className="about-facts__row">
            <dt>Type</dt>
            <dd>Communications company</dd>
          </div>
          <div className="about-facts__row">
            <dt>Founded</dt>
            <dd>February 2024 · first client in 2021</dd>
          </div>
          <div className="about-facts__row">
            <dt>Founder</dt>
            <dd>Fran Herrera</dd>
          </div>
          <div className="about-facts__row">
            <dt>Based in</dt>
            <dd>Dubai and Moscow · works remotely for clients worldwide</dd>
          </div>
          <div className="about-facts__row">
            <dt>Website</dt>
            <dd>thecruda.com</dd>
          </div>
          <div className="about-facts__row">
            <dt>Core offering</dt>
            <dd>
              Narrative and demand systems for founders, companies and
              cross-border joint ventures
            </dd>
          </div>
          <div className="about-facts__row">
            <dt>Services</dt>
            <dd>Translated · Transmission · Interpreted · The Read</dd>
          </div>
          <div className="about-facts__row">
            <dt>Pricing</dt>
            <dd>
              Translated $19,500 flat, 12 weeks · Transmission from
              $2,200 per month · Interpreted from $55,000, 12 weeks ·
              The Read on request
            </dd>
          </div>
          <div className="about-facts__row">
            <dt>Terms</dt>
            <dd>
              Translated: 50% to begin, 50% at month three ·
              Transmission: monthly, 30 days&apos; notice · Third-party
              costs paid by the client directly
            </dd>
          </div>
          <div className="about-facts__row">
            <dt>Languages</dt>
            <dd>
              English and Spanish · Russian in-house · Chinese and
              Arabic through project collaborators
            </dd>
          </div>
          <div className="about-facts__row">
            <dt>Response time</dt>
            <dd>Within 24–48 hours</dd>
          </div>
          <div className="about-facts__row">
            <dt>Notable clients</dt>
            <dd>
              <Link href="/work/karen-mannheim">Karen Mannheim</Link>
              {' (TRAZZO Lighting) · '}
              <Link href="/work/mike-kaeding">Mike Kaeding</Link>
              {' (Norhart) · '}
              <Link href="/work/girish-sehgal">Girish Sehgal</Link>
              {' (Sheikh Shakhbout Medical City) · '}
              <Link href="/work/mannheim-trading">José Mannheim</Link>
              {' (MTC) · '}
              <Link href="/work/juan-pablo-romero">JP Romero</Link>
              {' (JURA · CTD)'}
            </dd>
          </div>
          <div className="about-facts__row">
            <dt>Social</dt>
            <dd>
              <a
                href="https://www.linkedin.com/company/thecrudaspace/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn (CRUDA) →
              </a>
              {' · '}
              <a
                href="https://www.linkedin.com/in/franherrera2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn (Fran Herrera) →
              </a>
            </dd>
          </div>
        </dl>
      </section>

      {/* 08 · QUESTIONS · F24 §4.3 · FAQ · 8 pares h3 + p. */}
      <section className="about-sec" data-sec>
        <p className="about-eyebrow">Questions</p>
        <h2 className="about-name">Frequently asked questions.</h2>
        <div className="about-faq">
          {FAQ.map(({ q, a }) => (
            <div key={q} className="about-faq__item">
              <h3 className="about-faq__q">{q}</h3>
              <p className="about-faq__a">{a}</p>
            </div>
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
