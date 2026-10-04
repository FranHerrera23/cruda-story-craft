import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import StartHere from '@/components/StartHere'
import './about.css'

/* /about · F55 · Fran 4-oct-2026 · rebuild desde cero.
   Design verbatim de docs/F55-brief.md.

   Scroll motor: RevealScroll global (en app/layout.tsx), que cascadea
   `.on` a los [data-reveal] dentro de secciones `data-reveal-seq`.
   Es la misma animación de entrada visible que /services recibe de
   PlanesStack (translate + opacity al entrar al viewport). Se descarta
   el apilado sticky de /services porque brief §0: "nada se superpone
   ni se apila sobre otro; sin sticky, sin planos que se pliegan".
   Cada panel es un <section> independiente, a todo el ancho, con su
   propio fondo. Reveal reglas F49/F52: nada visible en el primer
   pantallazo arranca en opacity:0 (ver about.css · .f55-hero reveals
   usan sólo transform).

   StartHere (bloque final): usa el componente @/components/StartHere
   que F56 (más reciente) actualizó a lede "Two conversations and a
   written diagnosis. $950." + CTA "Start a Second Look →" → /second-look.
   Reemplaza la copy vieja del brief §4 ("The first step is a
   45-minute call...") que F56 removió site-wide. Regla autonomy §2
   (contradicción entre briefs: gana el más reciente).

   Avatar F55 §6: `public/fran-avatar-source.*` NO está en el repo
   (verificado 4-oct). Fallback regla autonomy: se usa
   `fran-herrera.webp` existente, Fran lo reemplaza en una iteración
   posterior cuando suba el avatar generado por IA. */

const BASE = 'https://www.thecruda.com'
const FRAN_PHOTO_URL = `${BASE}/fran-herrera.webp`

const ABOUT_TITLE = 'About CRUDA · Founded by Fran Herrera'
const ABOUT_DESCRIPTION =
  'CRUDA is a communications company founded by Fran Herrera. We build narrative and demand systems for founders, companies and cross-border joint ventures.'

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

const ORG_ID = `${BASE}/#organization`
const PERSON_ID = `${BASE}/about#fran-herrera`

/* Las 8 FAQ · brief F55 §4 dice "las 8 preguntas y respuestas actuales
   de /about, tal cual, en el mismo orden". Copiadas verbatim del
   código previo a F55 (ya con el merge F56 que actualizó pricing). */
const FAQ_ITEMS: Array<{ q: string; a: string }> = [
  {
    q: 'What is CRUDA?',
    a: 'CRUDA is a communications company. We build narrative and demand systems for founders, companies and cross-border joint ventures. Fran Herrera founded it in February 2024.',
  },
  {
    q: 'How much does CRUDA cost?',
    a: 'Translated is $19,500 flat for twelve weeks. Transmission starts at $2,500 a month. Interpreted runs twelve weeks from $55,000, and Second Look is $950.',
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
    a: 'Within 24 to 48 hours. The first step is a Second Look: two conversations and a written diagnosis for $950.',
  },
]

/* JSON-LD mantiene @id, image, FAQPage para no romper F37. */
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

      {/* HERO · blanco · reveal del h1 solo transform (F49/F52). */}
      <section className="f55-panel f55-hero" data-reveal-seq>
        <div className="f55-wrap f55-hero__in">
          <h1 className="f55-hero__h" data-reveal>
            Find the essence.
            <br />
            Strip the bullshit.
          </h1>
          <div className="f55-hero__rule" data-reveal aria-hidden="true" />
        </div>
      </section>

      {/* PANEL I · blanco · Our story */}
      <section className="f55-panel f55-panel--light" data-reveal-seq>
        <div className="f55-wrap">
          <div className="f55-bar" data-reveal>
            <span className="f55-bar__n">I</span>
            <span className="f55-bar__t">Our story</span>
            <span className="f55-bar__c">I / IV</span>
          </div>
          <div className="f55-body">
            <h2 className="f55-h2" data-reveal>
              The first client came three years before the company did.
            </h2>
            <p className="f55-p" data-reveal>
              Karen Mannheim&rsquo;s work was known only in Lima. In early
              2021 she hired Fran Herrera through an agency where TRAZZO
              was one of the accounts.
            </p>
            <p className="f55-p" data-reveal>
              In July 2023, Fran went in-house at Norhart, Mike
              Kaeding&rsquo;s construction company in Minneapolis. In
              February 2024 he was part of a round of layoffs there, and
              CRUDA started that same month.
            </p>
            <p className="f55-p" data-reveal>
              Mike stayed on as a client into 2025. Karen&rsquo;s work
              outlasted the agency and ran for five years. Now it wins
              pitches in Miami.
            </p>
          </div>
        </div>
      </section>

      {/* PANEL II · NEGRO · The work */}
      <section className="f55-panel f55-panel--dark" data-reveal-seq>
        <div className="f55-wrap">
          <div className="f55-bar" data-reveal>
            <span className="f55-bar__n">II</span>
            <span className="f55-bar__t">The work</span>
            <span className="f55-bar__c">II / IV</span>
          </div>
          <div className="f55-body">
            <h2 className="f55-h2" data-reveal>
              We don&rsquo;t add. We reveal what&rsquo;s already there.
            </h2>
            <p className="f55-p" data-reveal>
              Every founder we work with already has a true story. Most of
              it is buried under specs, prices and projects. The work is
              to find it, strip away what isn&rsquo;t theirs, and make it
              sayable.
            </p>
            <p className="f55-p" data-reveal>
              CRUDA is a communications company. We build narrative and
              demand systems for founders, companies and cross-border
              joint ventures.
            </p>
          </div>
        </div>
      </section>

      {/* PANEL III · blanco · Who you work with · incluye id=fran-herrera */}
      <section
        className="f55-panel f55-panel--light"
        data-reveal-seq
        id="fran-herrera"
      >
        <div className="f55-wrap">
          <div className="f55-bar" data-reveal>
            <span className="f55-bar__n">III</span>
            <span className="f55-bar__t">Who you work with</span>
            <span className="f55-bar__c">III / IV</span>
          </div>
          <div className="f55-body">
            <h2 className="f55-h2" data-reveal>
              You talk to Fran from the first call.
            </h2>
            <div className="f55-fran" data-reveal>
              <Image
                className="f55-fran__p"
                src="/fran-herrera.webp"
                alt="Fran Herrera"
                width={240}
                height={300}
                sizes="(max-width: 767px) 96px, 120px"
              />
              <p className="f55-p f55-fran__t">
                Fran Herrera founded CRUDA in February 2024. Before that,
                ten years across Fortune 500s, SMEs and B2B companies, on
                three continents, in-house and agency side. He was born
                in Salta, in the north of Argentina, and works from Dubai
                and Moscow.
              </p>
            </div>
            <dl className="f55-ficha" data-reveal>
              <div className="f55-ficha__row">
                <dt>Languages</dt>
                <dd>
                  English and Spanish. Russian in-house. Chinese and
                  Arabic with collaborators.
                </dd>
              </div>
              <div className="f55-ficha__row">
                <dt>Replies</dt>
                <dd>Within 24&ndash;48 hours.</dd>
              </div>
              <div className="f55-ficha__row">
                <dt>Before CRUDA</dt>
                <dd>Mondelez · AB InBev · Delivery Hero · Nestl&eacute; · TikTok</dd>
              </div>
              <div className="f55-ficha__row">
                <dt>What he reads</dt>
                <dd>
                  Cultures and markets, and what a story needs to travel
                  between them.
                </dd>
              </div>
            </dl>
            <a
              className="f55-linkedin"
              href="https://www.linkedin.com/in/franherrera2/"
              target="_blank"
              rel="me noopener"
              data-reveal
            >
              Fran on LinkedIn &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* PANEL IV · blanco · Questions · 8 Q&A acordeón */}
      <section
        className="f55-panel f55-panel--light"
        data-reveal-seq
        aria-label="Frequently asked questions"
      >
        <div className="f55-wrap">
          <div className="f55-bar" data-reveal>
            <span className="f55-bar__n">IV</span>
            <span className="f55-bar__t">Questions</span>
            <span className="f55-bar__c">IV / IV</span>
          </div>
          <div className="f55-body">
            <div className="f55-faq" data-reveal>
              {FAQ_ITEMS.map((f, i) => (
                <details key={i} className="f55-faq__item">
                  <summary className="f55-faq__q">
                    <span>{f.q}</span>
                    <span className="f55-faq__plus" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="f55-faq__a">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* START HERE · negro · componente StartHere F56
          (lede + CTA actualizados a Second Look). */}
      <section className="f55-panel f55-panel--dark f55-starthere" data-reveal-seq>
        <div className="f55-wrap">
          <StartHere h2="Not sure which of the four fits?" />
        </div>
      </section>
    </>
  )
}
