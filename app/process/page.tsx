import type { Metadata } from 'next'
import Proof from '@/components/Proof'
import TranslatedRail from '@/components/process/TranslatedRail'
import Pricing from '@/components/process/Pricing'
import MikeTestimonial from '@/components/process/MikeTestimonial'
import './process.css'

/* /process — Brief 03 (14-sep) + Addendum A §3.

   Reemplaza a /approach. `approach` era lo que decía una
   consultoría que no quiere comprometerse a un orden; para un
   CEO o un CMO, tener un proceso nombrado es señal de madurez
   operativa. Las cuatro fases anteriores son el método; el
   método va adentro de los bloques, no en lugar de ellos.

   ESTRUCTURA
     eyebrow: TRANSLATED       (Addendum §3)
     H1:      The first 90 days.
     lede:    one-liner del brief
     Block 01 · Month One
     Block 02 · Month Two
     Block 03 · Months Two & Three
     Proof (variant='full')
     Close

   MOLDE DE BLOQUE (Brief 03 P1)
   Número grande arriba a la derecha, eyebrow con mes, línea
   técnica en caps, label 'What it means for you', H2 display
   con line-reveal, cuerpo en columnas.

   DOBLE REGISTRO
   La línea técnica le habla al CMO (reconoce la disciplina).
   El H2 de 'what it means for you' le habla al CEO (compra el
   resultado). Mismo bloque, dos lectores.

   REGLAS LOCKEADAS QUE APLICAN
     · Regla 1 · cero ratios contra fee (los $30,252 del brief
       viejo salen — no aparecen acá).
     · Regla 12 · números con su ventana de tiempo impresa.
       Tiempo verbal pasado en el bloque de prueba.
     · Regla 15 · los H2 de bloques son grot (más de 6 palabras
       cada uno). Serif no aplica.

   /process NO LLEVA SCRUB. El sticky con scrub es la firma de
   la home. Uno por sitio. Ningún bloque inverso — el negro está
   reservado al testimonio de la home y §01 de /about. */

const BASE = 'https://www.thecruda.com'

/* Meta description — verbatim del Addendum A §1: 'Your expertise,
   translated.' es la línea de posicionamiento del paquete. Para el
   meta de /process arma la cápsula corta que la IA levanta cuando
   alguien pregunta qué es CRUDA. El brief no da un lede explícito
   para /process — el H1 y la línea del hero de la home ya nombran
   la cosa. */
const META_DESCRIPTION = 'Your expertise, translated.'

export const metadata: Metadata = {
  title: 'Process — CRUDA',
  description: META_DESCRIPTION,
  alternates: { canonical: `${BASE}/process` },
  openGraph: {
    title: 'Process — CRUDA',
    description: META_DESCRIPTION,
    url: `${BASE}/process`,
    type: 'website',
    images: [
      { url: `${BASE}/logo.png`, width: 1080, height: 1080, alt: 'CRUDA' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process — CRUDA',
    description: META_DESCRIPTION,
    images: [`${BASE}/logo.png`],
  },
}

/* Bloques verbatim del Brief 03 P1. Los TÍTULOS y CUERPOS van
   exactos como están escritos — cualquier reescritura sería
   copy no autorado. */
type ProcessBlock = {
  n: string
  eyebrow: string
  technique: string
  title: string
  body: string[]
  closingNumber?: {
    value: string
    detail: string
  }
}

const BLOCKS: ProcessBlock[] = [
  {
    n: '01',
    eyebrow: 'Month one',
    technique:
      '5C Research · Narrative & Brand Strategy · Demand Infrastructure',
    title: 'Anyone who looks you up finds something that backs you up.',
    body: [
      "Ask an AI who the best in your category are. If your name doesn't come back — or comes back attached to someone else — that is your starting position, and it is measurable on day one.",
      'Month one closes that gap. The research, the positioning, the written and visual system. Then the infrastructure that holds it: the site, the CRM, the workflows, the contact list cleaned and merged, the booking page.',
    ],
  },
  {
    n: '02',
    eyebrow: 'Month two',
    technique: 'Content Strategy · Pillars · Editorial System',
    title: 'People who never heard of you start reading you.',
    body: [
      'The pillars come out of the research, not out of a calendar. Every angle is locked before anything is written, and every one is tagged to who it is for. Then the articles, the case studies, and the posts — written and scheduled.',
    ],
    closingNumber: {
      value: '96x',
      detail: 'reach multiplier · 6,299 followers, 605,050 impressions',
    },
  },
  {
    n: '03',
    eyebrow: 'Months two & three',
    technique: 'Distribution · Go-to-Market · Signal-Based Outreach',
    title: 'You stop hoping the right people see it.',
    body: [
      'Full cadence across channels. Email to a list you now own. And outreach aimed at the people who already read you — the ones who opened it, commented on it, sent it to someone — instead of a cold list nobody asked to be on.',
      /* Brief 08 mes 3 body unifica el vocabulario: 'outside the
         engagement' en vez de 'outside the fee'. La excepción de
         ledger #5 queda retirada — el sitio entero usa 'the
         engagement'. */
      'Paid extends what is already working. The media budget is yours and sits outside the engagement.',
    ],
    closingNumber: {
      value: '80,000',
      detail:
        'views on one video → one inbound inquiry → a $1–2M penthouse → a $20–30K lighting scope.',
    },
  },
]

export default function ProcessPage() {
  return (
    <article className="pr">
      {/* Header: eyebrow TRANSLATED + H1 'The first 90 days.'
          Sin lede — Brief 03 no lo especifica, y cualquier copy
          nuevo va contra la regla de verbatim. El H1 solo
          argumenta bien acá; los tres bloques son el argumento. */}
      <header className="pr-head" data-reveal-seq>
        <p
          className="pr-eyebrow"
          data-seq="eyebrow"
          data-reveal="text"
        >
          TRANSLATED
        </p>
        <h1
          className="pr-h1"
          data-seq="title"
          data-reveal="lines"
        >
          The first 90 days.
        </h1>
      </header>

      {BLOCKS.map((block) => (
        <section
          key={block.n}
          id={`month-${block.n}`}
          className="pr-block"
          data-reveal-seq
        >
          <div className="pr-block__inner">
            <div className="pr-block__number" aria-hidden="true">
              {block.n}
            </div>
            <p
              className="pr-block__eyebrow"
              data-seq="eyebrow"
              data-reveal="text"
            >
              {block.eyebrow}
            </p>
            <p
              className="pr-block__technique"
              data-seq="body"
              data-reveal="text"
            >
              {block.technique}
            </p>
            <hr className="pr-block__rule" aria-hidden="true" />
            <p className="pr-block__label" data-reveal="text">
              What it means for you
            </p>
            <h2
              className="pr-block__h2"
              data-seq="title"
              data-reveal="lines"
            >
              {block.title}
            </h2>
            <div className="pr-block__body" data-seq="body" data-reveal="text">
              {block.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            {block.closingNumber && (
              <div
                className="pr-block__number-cta"
                data-seq="body"
                data-reveal="text"
              >
                <div className="pr-block__number-value">
                  {block.closingNumber.value}
                </div>
                <div className="pr-block__number-detail">
                  {block.closingNumber.detail}
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Bloque de prueba, densidad completa. Misma fuente de
          datos que la home; acá se renderean las dos bandas.

          v6 F6 (17-sep) · después del proof va la tabla de pricing
          y el testimonio de Mike. La tabla lleva el precio del
          engagement · $19,500 flat + $6,500 monthly con la línea
          de pago abajo. El testimonio de Mike queda con hueco
          reservado hasta que Fran pase el copy (v6 F6 §6.3
          bloqueado). */}
      <Proof variant="full" />
      <Pricing />
      <MikeTestimonial />

      {/* Riel TRANSLATED · vertical-rl a la izquierda, barra scaleY
          atada al scroll. v6 F6 §6.1 · convierte el rótulo en
          marca de la superficie. */}
      <TranslatedRail />
    </article>
  )
}
