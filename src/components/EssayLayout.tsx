import Image from 'next/image'
import Link from 'next/link'
import EssayProgressBar from './EssayProgressBar'
import ClosingBlock from './ClosingBlock'
import RelatedResources from './RelatedResources'
import './essay.css'

/* ------------------------------------------------------------------
   CRUDA — EssayLayout
   AEO discipline adapted to essays and conversations.
   The skeleton serves the machine; the prose serves the human.

   Brief v8: soporte de idioma sin i18n.
   - `language` opcional en el Essay ('en' default).
   - Se aplica como atributo lang= del <article>.
   - EssayBlock permite `html` en p/pull para preservar inline markup
     (bold, cursivas) — safe porque el contenido lo autoreamos nosotros.
   - Nuevo bloque `checklist` para listas de checkboxes semánticas.
------------------------------------------------------------------- */

export type EssayBlock =
  | { type: 'p'; text?: string; html?: string; lead?: boolean }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'pull'; text?: string; html?: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'checklist'; items: string[] }
  /* Brief v15 T4 — firma final del ensayo (reemplaza la línea del
     newsletter que prometía algo que no existe). Mono, mayúsculas,
     --fs-meta, --ink-2. No es un CTA, es firma. */
  | { type: 'signature'; text: string }

export type Faq = { q: string; a: string }

export type EssayLanguage = 'en' | 'es'

export type Essay = {
  slug: string
  /* title = H1 visible (para el humano).
     seoTitle = <title> del head + og:title + twitter:title (keyword
     literal para el buscador y para AI). Si no existe, cae a title.
     Brief v13 T2.1. */
  title: string
  seoTitle?: string
  /* Brief v9 T1 — bajada editorial. Va entre H1 y byline, en
     --fs-lead / --ink-2 / peso regular. Es el subtítulo del ensayo.
     Distinta de answerCapsule (que sirve al AEO y va bajo --cream). */
  deck?: string
  publishedAt: string
  updatedAt: string
  answerCapsule: string
  category: string
  tags?: string[]
  contentType?: 'Essay' | 'Conversation'
  readingMinutes: number
  heroImage?: string
  heroAlt?: string
  body: EssayBlock[]
  faqs?: Faq[]
  language?: EssayLanguage
  /* Brief v15 T2 — vínculo entre versiones de una misma pieza en
     distintos idiomas. Genérico: cuando entre otro par bilingüe,
     apunta desde los dos lados.
     Regla: recíproco. Las dos versiones se declaran mutuamente,
     incluyéndose a sí mismas. */
  alternates?: {
    es?: string
    en?: string
  }
}

const AUTHOR = {
  name: 'Francisco Herrera',
  role: 'Founder, CRUDA',
  photo: '/fran-herrera.png',
  url: 'https://www.thecruda.com/our-founder',
}

function fmt(iso: string, locale: string) {
  return new Date(iso).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function schema(es: Essay) {
  const base = 'https://www.thecruda.com'
  const modified = es.updatedAt || es.publishedAt
  const graph: unknown[] = [
    {
      '@type': 'Article',
      '@id': `${base}/thinking/${es.slug}#article`,
      /* Brief v13 T2.1 — headline = keyword literal (seoTitle) para
         que AI y buscadores lo indexen bien; alternativeHeadline =
         H1 humano. */
      headline: es.seoTitle ?? es.title,
      alternativeHeadline: es.seoTitle ? es.title : undefined,
      description: es.answerCapsule,
      datePublished: es.publishedAt,
      dateModified: modified,
      articleSection: es.category,
      inLanguage: es.language === 'es' ? 'es' : 'en',
      keywords: es.tags && es.tags.length > 0 ? es.tags.join(', ') : undefined,
      image: es.heroImage ? `${base}${es.heroImage}` : undefined,
      author: {
        '@type': 'Person',
        name: AUTHOR.name,
        jobTitle: AUTHOR.role,
        url: AUTHOR.url,
        worksFor: { '@type': 'Organization', name: 'CRUDA', url: base },
      },
      publisher: {
        '@type': 'Organization',
        name: 'CRUDA',
        url: base,
        logo: { '@type': 'ImageObject', url: `${base}/logo.png` },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${base}/thinking/${es.slug}`,
      },
    },
    {
      '@type': 'Person',
      '@id': `${base}/our-founder#person`,
      name: AUTHOR.name,
      jobTitle: AUTHOR.role,
      url: AUTHOR.url,
      image: `${base}${AUTHOR.photo}`,
      worksFor: { '@type': 'Organization', name: 'CRUDA', url: base },
    },
  ]
  if (es.faqs && es.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${base}/thinking/${es.slug}#faq`,
      mainEntity: es.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}

export default function EssayLayout({ es }: { es: Essay }) {
  const showUpdated = es.updatedAt !== '' && es.updatedAt !== es.publishedAt
  const contentType = es.contentType ?? 'Essay'
  const lang = es.language ?? 'en'
  const dateLocale = lang === 'es' ? 'es-ES' : 'en-US'
  const backLabel = lang === 'es' ? '← Recursos' : '← Resources'
  const updatedLabel = lang === 'es' ? 'Actualizado' : 'Updated'
  const readingLabel = lang === 'es' ? 'min de lectura' : 'min read'
  const questionsLabel = lang === 'es' ? 'Preguntas' : 'Questions'
  const metaTags = [es.category, ...(es.tags ?? [])].filter(Boolean)

  return (
    <div className="essay-root essay">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(es)) }}
      />

      <EssayProgressBar />

      <article lang={lang}>
        <header className="e-head">
          <Link href="/resources" className="mono e-back">
            {backLabel}
          </Link>
          <p className="e-meta">
            <span className="e-type">{contentType}</span>
            <span className="mono">
              {metaTags.join(' · ')} · {es.readingMinutes} {readingLabel}
            </span>
          </p>

          <h1>{es.title}</h1>

          {/* Brief v9 T1 — bajada entre H1 y byline. --fs-lead, --ink-2,
              peso regular. Ninguna otra pieza del molde muestra este
              texto: no se duplica en el body. */}
          {es.deck && <p className="e-deck">{es.deck}</p>}

          <div className="e-by">
            <Image
              src={AUTHOR.photo}
              alt={AUTHOR.name}
              width={64}
              height={64}
              className="e-av"
            />
            <div>
              <span className="e-name">{AUTHOR.name}</span>
              <span className="e-role">{AUTHOR.role}</span>
            </div>
            <div className="e-dates">
              <time dateTime={es.publishedAt}>{fmt(es.publishedAt, dateLocale)}</time>
              {showUpdated && (
                <>
                  <br />
                  {updatedLabel}{' '}
                  <time dateTime={es.updatedAt}>{fmt(es.updatedAt, dateLocale)}</time>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Answer capsule — de qué se trata, sin spoilear el giro.
            Brief v8 T1: sobre --cream, como el bloque takeaways de los
            case studies. Es lo que la IA levanta como respuesta. */}
        <p className="e-capsule">{es.answerCapsule}</p>

        {es.heroImage && es.heroAlt && (
          <figure className="e-hero">
            <Image src={es.heroImage} alt={es.heroAlt} width={1600} height={900} priority />
          </figure>
        )}

        {/* Body */}
        <div className="e-body">
          {es.body.map((block, i) => {
            if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>
            if (block.type === 'h3') return <h3 key={i}>{block.text}</h3>
            if (block.type === 'p') {
              const className = block.lead ? 'lead' : undefined
              if (block.html) {
                return (
                  <p
                    key={i}
                    className={className}
                    dangerouslySetInnerHTML={{ __html: block.html }}
                  />
                )
              }
              return (
                <p key={i} className={className}>
                  {block.text}
                </p>
              )
            }
            if (block.type === 'pull') {
              if (block.html) {
                return (
                  <p
                    key={i}
                    className="e-pull"
                    dangerouslySetInnerHTML={{ __html: block.html }}
                  />
                )
              }
              return (
                <p key={i} className="e-pull">
                  {block.text}
                </p>
              )
            }
            if (block.type === 'checklist') {
              return (
                <ul key={i} className="e-checklist" role="list">
                  {block.items.map((item, j) => (
                    <li key={j}>
                      <span className="e-checkbox" aria-hidden="true" />
                      <span
                        className="e-checkitem"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    </li>
                  ))}
                </ul>
              )
            }
            if (block.type === 'signature') {
              return (
                <p key={i} className="e-signature">
                  {block.text}
                </p>
              )
            }
            // quote — attributed
            return (
              <div key={i} className="e-quote">
                <p>{block.text}</p>
                {block.attribution && <cite>{block.attribution}</cite>}
              </div>
            )
          })}
        </div>

        {es.faqs && es.faqs.length > 0 && (
          <section className="e-faq">
            <h2>{questionsLabel}</h2>
            {es.faqs.map((f, i) => (
              <details key={i}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </section>
        )}

        <ClosingBlock kind="essay" lang={lang} />

        {/* Brief v9 T5 — 3 piezas relacionadas después del cierre.
            Brief v15 T3 — excluir la traducción cuando la pieza es
            bilingüe. Leer un ES y ver su versión EN en "seguí
            leyendo" es raro. */}
        <RelatedResources
          excludeHrefs={buildExcludeHrefs(es)}
          lang={lang}
        />
      </article>
    </div>
  )
}

function buildExcludeHrefs(es: Essay): string[] {
  const acc = [`/thinking/${es.slug}`]
  const alt = es.alternates
  if (alt?.es && alt.es !== es.slug) acc.push(`/thinking/${alt.es}`)
  if (alt?.en && alt.en !== es.slug) acc.push(`/thinking/${alt.en}`)
  return acc
}
