import Image from 'next/image'
import Link from 'next/link'
import EssayProgressBar from './EssayProgressBar'
import CaptureForm from './CaptureForm'
import { CAPTURE_ENABLED } from '@/lib/flags'
import './essay.css'

/* ------------------------------------------------------------------
   CRUDA — EssayLayout
   AEO discipline adapted to essays and conversations.
   The skeleton serves the machine; the prose serves the human.

   B5 rework (deroga §4.5, §4.6 y §4.7 del brief para páginas de pieza):
   - El hero se reordena: breadcrumb → fecha → H1 → byline
     (foto, nombre, rol, tiempo de lectura) → imagen hero. Los chips
     de contentType y meta salen; las categorías viven solo en las
     cards de los índices.
   - Cada h2 puede abrir con una imagen (`image?: { src, alt }`). El
     slot se renderea con reveal por clip-path; si la pieza no tiene
     imagen, la sección arranca sin hueco.
   - El bloque beige del ClosingBlock (.cb) se elimina. Reemplazo:
     una línea de texto con link (.link) — "¿Tenés una historia que
     contar? Hablemos." / "Got a story worth telling? Let's talk."
   - El grid de RelatedResources al cierre se elimina. El mecanismo de
     continuidad es el newsletter (CaptureForm), no un grid de cards.
     Las cards viven solo en /resources/*.
   - Orden final del cierre: body → sources → faq → CTA line →
     CaptureForm → SiteFooter global. */

export type EssayBlock =
  | { type: 'p'; text?: string; html?: string; lead?: boolean }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'pull'; text?: string; html?: string }
  /* B5 — h2 puede abrir con una imagen. Si no viene, la sección
     renderea sin imagen y sin hueco. */
  | { type: 'h2'; text: string; image?: { src: string; alt: string } }
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
     distintos idiomas. */
  alternates?: {
    es?: string
    en?: string
  }
  /* Brief v4 UX §4.9 — footnotes numeradas al pie. Cada dato o cifra
     citada en el body debería tener su fuente acá. El inline sup
     va en un bloque html usando <a class="footnote-ref">…<sup>N</sup></a>. */
  sources?: Array<{ n: number; text: string; url: string }>
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
      '@id': `${base}/resources/essays/${es.slug}#article`,
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
        '@id': `${base}/resources/essays/${es.slug}`,
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
      '@id': `${base}/resources/essays/${es.slug}#faq`,
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
  const lang = es.language ?? 'en'
  const dateLocale = lang === 'es' ? 'es-ES' : 'en-US'
  const backLabel = lang === 'es' ? '← Recursos' : '← Resources'
  const updatedLabel = lang === 'es' ? 'Actualizado' : 'Updated'
  const readingLabel = lang === 'es' ? 'min de lectura' : 'min read'
  const questionsLabel = lang === 'es' ? 'Preguntas' : 'Questions'
  const ctaLine =
    lang === 'es'
      ? '¿Tenés una historia que contar? Hablemos.'
      : "Got a story worth telling? Let's talk."

  return (
    <div className="essay-root essay">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(es)) }}
      />

      <EssayProgressBar />

      <article lang={lang}>
        {/* B5.3 — hero: breadcrumb → fecha → H1 → byline → hero image.
            Cero chips de categoría en la página de pieza. */}
        <header className="e-head">
          <Link href="/resources" className="mono e-back">
            {backLabel}
          </Link>
          <p className="e-date mono">
            <time dateTime={es.publishedAt}>
              {fmt(es.publishedAt, dateLocale)}
            </time>
            {showUpdated && (
              <>
                {' · '}
                {updatedLabel}{' '}
                <time dateTime={es.updatedAt}>{fmt(es.updatedAt, dateLocale)}</time>
              </>
            )}
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
            <div className="e-reading mono">
              {es.readingMinutes} {readingLabel}
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
            if (block.type === 'h2') {
              /* B5.4 — slot de imagen opcional. Si viene image, la
                 sección arranca con una <figure> con reveal por
                 clip-path (CSS). Sin imagen → h2 solo, cero hueco. */
              return (
                <div key={i} className="e-section">
                  {block.image && (
                    <figure className="e-section-image">
                      <Image
                        src={block.image.src}
                        alt={block.image.alt}
                        width={1600}
                        height={900}
                      />
                    </figure>
                  )}
                  <h2>{block.text}</h2>
                </div>
              )
            }
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

        {/* B5.6 — orden del cierre: sources ANTES de faq. Antes eran
            body → faq → sources; ahora body → sources → faq. La
            sección de fuentes cierra el argumento del cuerpo; las
            preguntas abren después. */}
        {es.sources && es.sources.length > 0 && (
          <section className="e-sources" aria-labelledby="e-sources-heading">
            <h2 id="e-sources-heading">
              {lang === 'es' ? 'Fuentes' : 'Sources'}
            </h2>
            <ol>
              {es.sources.map((s) => (
                <li key={s.n} value={s.n}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.text}
                    <span className="sr-only">
                      {lang === 'es' ? ' (abre en una pestaña nueva)' : ' (opens in a new tab)'}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </section>
        )}

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

        {/* B5.2 — CTA es una línea, no un bloque. .link para el sweep
            underline; contact abre una conversación real. */}
        <p className="e-cta-line">
          <Link href="/contact" className="link">
            {ctaLine}
          </Link>
        </p>

        {/* B5.6 — captura al final del cierre. Mecanismo de continuidad
            del sitio; reemplaza al grid de related (que se eliminó).
            F0 — gateado por CAPTURE_ENABLED. Si el flag está apagado el
            wrapper tampoco renderea: el cierre queda body → sources →
            faq → línea CTA → SiteFooter, sin hueco. */}
        {CAPTURE_ENABLED && <CaptureForm lang={lang} variant="full" />}
      </article>
    </div>
  )
}
