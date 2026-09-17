import type { Metadata } from 'next'
import Link from 'next/link'
import './about.css'

/* /about — Brief 02 (14-sep). Reemplaza /our-founder como página
   de empresa.

   Diagnóstico del brief: /our-founder tenía a Fran como sujeto y
   a CRUDA como predicado. Esta fase invierte eso — la empresa es
   el sujeto, las personas son la prueba, y van al final.

   Estructura:
     01 · WHAT CRUDA IS       (BLACK · único inverso de la página)
     02 · HOW IT STARTED      (blanco · label + body)
     03 · OPERATING PRINCIPLES (blanco · 5 filas con filete)
     04 · HOW THE WORK IS STRUCTURED (blanco · label + body)
     05 · WHO RUNS IT         (blanco · retrato + bio)
     06 · THE TEAM            (especificado, no renderizado hasta 3 pers.)
     07 · CLOSE               (blanco · dos CTAs)

   Copy en tercera persona. La sección `04` arranca por el hecho
   de CRUDA — 'The person on the first call is the person who
   writes the last line' — no por la descalificación de la
   competencia.

   Cinco operating principles, no seis: el sexto original ('the
   machine executes, the judgment doesn't') era el contenido de
   'The structure', que ahora vive en §04. Se elimina la
   duplicación.

   §05 se construye sin retrato hasta que Fran lo suba. No se
   reserva altura con `vh` — un agujero en su lugar sería peor
   que ninguna imagen. La grilla se activa cuando `hasPortrait`
   pase a true. */

const BASE = 'https://www.thecruda.com'

export const metadata: Metadata = {
  title: 'About — CRUDA',
  description:
    'CRUDA is a narrative practice for founder-led companies. We work with companies whose reputation was built in person and now has to travel without them.',
  alternates: { canonical: `${BASE}/about` },
  openGraph: {
    title: 'About — CRUDA',
    description:
      'CRUDA is a narrative practice for founder-led companies.',
    url: `${BASE}/about`,
    type: 'website',
    images: [
      { url: `${BASE}/logo.png`, width: 1080, height: 1080, alt: 'CRUDA' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About — CRUDA',
    description:
      'CRUDA is a narrative practice for founder-led companies.',
    images: [`${BASE}/logo.png`],
  },
}

/* Person schema — Task 5 Phase A. Migrado de /our-founder a /about.
   @id cambia a `${BASE}/about#person`. La Organization schema en
   layout.tsx queda apuntando al nuevo @id. `alternateName` es la
   pieza que corta la ambigüedad con el cuartetero salteño en
   entity resolvers — 'Francisco Herrera' ahí es correcto y es el
   único lugar del repo donde ese string se queda. */
const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${BASE}/about#person`,
  name: 'Fran Herrera',
  alternateName: ['Francisco Herrera', 'Francisco Fran Herrera'],
  jobTitle: 'Founder & CEO',
  worksFor: { '@id': `${BASE}/#organization` },
  birthPlace: 'Salta, Argentina',
  nationality: 'Argentine',
  url: `${BASE}/about`,
  image: `${BASE}/fran-herrera.png`,
  sameAs: [
    'https://www.linkedin.com/in/franherrera2',
    'https://x.com/franherrera_23',
    'https://thefranherrera.substack.com',
    'https://www.youtube.com/@franherrera2',
    'https://franherrera.me',
  ],
  knowsAbout: [
    'Brand strategy',
    'Narrative systems',
    'Founder positioning',
    'Architecture and design marketing',
    'Influencer marketing',
    'Public relations',
  ],
} as const

/* Operating principles — cinco. El sexto original (machine/judgment)
   pasó a §04 dentro del bloque 'How the work is structured'. */
const PRINCIPLES = [
  {
    principle: "We don't invent a story.",
    consequence:
      "We remove the layers that aren't yours until what's left is the part you'd have said anyway.",
  },
  {
    principle: 'We observe. We don’t prescribe.',
    consequence:
      'Nobody is told what to believe about their own company. We return what we see and let the founder decide.',
  },
  {
    principle: 'Specific beats general.',
    consequence:
      'Names, numbers, places and dates. The more specific a story is, the more people recognise themselves in it.',
  },
  {
    principle: 'We never sell with fear.',
    consequence:
      "No urgency, no scarcity, no last chance. If it isn't a fit, it isn't a fit.",
  },
  {
    /* v6 F5 §5.1 (17-sep) · reemplaza "If it isn't measured, it
       didn't happen." Ledger 24 · el número es evidencia
       direccional, no condición de existencia. Toda cifra
       publicada lleva fuente y período. */
    principle: 'Data is directional at best.',
    consequence:
      'Some of what matters cannot be counted, and some of what gets counted does not matter. We bring the figures we have and we do not dress up the rest.',
  },
] as const

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
      />
      <div className="ab">
        {/* ═════════ 01 · WHAT CRUDA IS ═════════ */}
        {/* El único bloque inverso de la página. Hero-entry: se
            encadena a la salida del loader; sin loader (segunda
            visita o reduced motion), fallback 120ms. */}
        <section
          id="what-cruda-is"
          className="ab-block ab-block--ink"
          data-reveal-seq
          data-hero-entry
        >
          <div className="ab-inner">
            <p
              className="ab-eyebrow ab-eyebrow--on-ink"
              data-seq="eyebrow"
              data-reveal="text"
            >
              CRUDA
            </p>
            <h1
              className="ab-h1"
              data-seq="title"
              data-reveal="lines"
            >
              CRUDA is a narrative practice
              <br />
              for founder-led companies.
            </h1>
            <p
              className="ab-lede ab-lede--on-ink"
              data-seq="body"
              data-reveal="text"
            >
              We work with companies whose reputation was built in
              person and now has to travel without them.
            </p>
          </div>
        </section>

        {/* ═════════ 02 · HOW IT STARTED ═════════ */}
        <section
          id="how-it-started"
          className="ab-block ab-block--paper"
          data-reveal-seq
        >
          <div className="ab-inner">
            <p
              className="ab-label"
              data-seq="eyebrow"
              data-reveal="text"
            >
              How it started
            </p>
            <div
              className="ab-prose"
              data-seq="body"
              data-reveal="text"
            >
              <p>
                The first client came three years before the company
                did.
              </p>
              <p>
                In early 2021, Karen Mannheim hired Fran Herrera
                through an agency where TRAZZO was one of the
                accounts. The work outlasted the agency and ran for
                five years.
              </p>
              <p>
                CRUDA was registered in February 2024, the same month
                Norhart restructured and the in-house job ended. The
                practice already existed. What changed was the name on
                it.
              </p>
            </div>
          </div>
        </section>

        {/* ═════════ 03 · OPERATING PRINCIPLES ═════════ */}
        {/* Cinco filas con filete al 20%. Mismo componente de
            inside-cruda de la home. Cada fila: principio a la izq,
            consecuencia a la der. */}
        <section
          id="operating-principles"
          className="ab-block ab-block--paper"
          data-reveal-seq
        >
          <div className="ab-inner">
            <p
              className="ab-eyebrow"
              data-seq="eyebrow"
              data-reveal="text"
            >
              Operating principles
            </p>
            <h2
              className="ab-h2"
              data-seq="title"
              data-reveal="lines"
            >
              How the work is done.
            </h2>
            <div className="ab-principles" data-seq="body" data-reveal="text">
              {PRINCIPLES.map((row, i) => (
                <div key={i} className="ab-row">
                  <div className="ab-row__label">{row.principle}</div>
                  <div className="ab-row__body">
                    <p>{row.consequence}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════ 04 · HOW THE WORK IS STRUCTURED ═════════ */}
        {/* Fran, 14-sep: 'arrancando por el hecho de CRUDA y no por
            la descalificación de la competencia'. El opener antiguo
            ('Most firms sell you a senior...') queda anulado. `The
            structure` fact migra desde la home (Brief 04 §4.2). */}
        <section
          id="how-structured"
          className="ab-block ab-block--paper"
          data-reveal-seq
        >
          <div className="ab-inner">
            <p
              className="ab-label"
              data-seq="eyebrow"
              data-reveal="text"
            >
              How the work is structured
            </p>
            <div
              className="ab-prose"
              data-seq="body"
              data-reveal="text"
            >
              <p>
                The person on the first call is the person who writes
                the last line. Nothing is briefed down, because there
                is no one to brief it down to.
              </p>
              <p>
                That is only possible because the execution layer is
                machine-assisted and the judgment layer is not. The
                system handles volume. The decisions &mdash; what is
                worth saying, what is true, what gets cut &mdash; do
                not scale and are not meant to.
              </p>
            </div>
          </div>
        </section>

        {/* ═════════ 05 · WHO RUNS IT ═════════ */}
        {/* El retrato de Fran no existe todavía (Fran, 14-sep).
            La sección se construye igual y sale sin imagen hasta
            que él lo suba. NO SE RESERVA ALTURA CON vh —regla
            lockeada— porque un agujero es peor que sin imagen. */}
        <section
          id="who-runs-it"
          className="ab-block ab-block--paper"
          data-reveal-seq
        >
          <div className="ab-inner ab-who">
            <p
              className="ab-label"
              data-seq="eyebrow"
              data-reveal="text"
            >
              Who runs it
            </p>
            <div className="ab-who__body">
              {/* v6 F5 §5.3 · el retrato entra en el bloque Who
                  runs it. El CSS ya soporta el :has(.ab-who__portrait)
                  encendiendo grilla 2-col. Fran encontrado en
                  /public/fran-herrera.webp (grep de F4.2 · el mismo
                  archivo que consume el bloque LEGACY de la home). */}
              <img
                className="ab-who__portrait"
                src="/fran-herrera.webp"
                alt="Fran Herrera"
              />
              <h3
                className="ab-who__name"
                data-seq="title"
                data-reveal="lines"
              >
                Fran Herrera
              </h3>
              {/* v6 F5 §5.5 · corrección de contexto · "Founder ·
                  Abu Dhabi" → "Founder · Between UAE and Russia". */}
              <p className="ab-who__role">
                Founder &middot; Between UAE and Russia
              </p>
              <div
                className="ab-prose"
                data-seq="body"
                data-reveal="text"
              >
                {/* v6 F5 §5.5 · lista de clientes alineada con la
                    LEGACY de la home. TikTok, Oreo, Brahma, PedidosYa,
                    Purina retirados · Mondelez, AB InBev, Delivery
                    Hero, Nestlé, TikTok y UN según brief. */}
                <p>
                  Ten years building brands across three continents,
                  in-house and on the agency side, on accounts for
                  Mondelez, AB InBev, Delivery Hero, Nestlé and
                  TikTok. Direct work for the United Nations. Born in
                  Salta, in the north of Argentina.
                </p>
                <p>
                  CRUDA is what that experience looks like pointed at
                  one kind of client.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*
          ═════════ 06 · THE TEAM ═════════
          Especificado, no renderizado.

          El retrato de Fran en §05 ocupa una columna exacta de la
          grilla, con aspect 3:4. Cuando haya tres personas, esta
          sección se enciende como grilla 3-up y lo único que cambia
          es que el epígrafe pasa de estar al costado a estar debajo.
          Ninguna medida de §05 se toca cuando eso pase.

          No renderizar una grilla de 3-4 con una sola card — ese es
          exactamente el bug de la home donde Jack Yaeger sin foto
          rompía el renglón. Se enciende cuando hay 3+.
        */}

        {/* ═════════ 07 · CLOSE ═════════ */}
        <section
          id="close"
          className="ab-block ab-block--paper ab-block--close"
          data-reveal-seq
        >
          <div className="ab-inner">
            <div
              className="ab-cta-row"
              data-seq="body"
              data-reveal="text"
            >
              <Link href="/#selected-work" className="ab-cta">
                See the work
              </Link>
              <Link href="/contact" className="ab-cta">
                Start a conversation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
