import Image from 'next/image'
import Link from 'next/link'
import EssayProgressBar from './EssayProgressBar'
import ClosingBlock from './ClosingBlock'
import './essay.css'

/* ------------------------------------------------------------------
   CRUDA — EssayLayout
   AEO discipline adapted to essays and conversations.
   The skeleton serves the machine; the prose serves the human.
------------------------------------------------------------------- */

export type EssayBlock =
  | { type: 'p'; text: string; lead?: boolean }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'pull'; text: string }
  | { type: 'h2'; text: string }

export type Faq = { q: string; a: string }

export type Essay = {
  slug: string
  title: string
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
}

const AUTHOR = {
  name: 'Francisco Herrera',
  role: 'Founder, CRUDA',
  photo: '/fran-herrera.png',
  url: 'https://www.thecruda.com/our-founder',
}

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
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
      headline: es.title,
      description: es.answerCapsule,
      datePublished: es.publishedAt,
      dateModified: modified,
      articleSection: es.category,
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
  const metaTags = [es.category, ...(es.tags ?? [])].filter(Boolean)

  return (
    <div className="essay-root essay">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(es)) }}
      />

      <EssayProgressBar />

      <article>
        <header className="e-head">
          <Link href="/resources" className="mono e-back">
            ← Resources
          </Link>
          <p className="e-meta">
            <span className="e-type">{contentType}</span>
            <span className="mono">
              {metaTags.join(' · ')} · {es.readingMinutes} min read
            </span>
          </p>

          <h1>{es.title}</h1>

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
              <time dateTime={es.publishedAt}>{fmt(es.publishedAt)}</time>
              {showUpdated && (
                <>
                  <br />
                  Updated <time dateTime={es.updatedAt}>{fmt(es.updatedAt)}</time>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Answer capsule — de qué se trata, sin spoilear el giro */}
        <p className="e-capsule">{es.answerCapsule}</p>

        {es.heroImage && es.heroAlt && (
          <figure className="e-hero">
            <Image src={es.heroImage} alt={es.heroAlt} width={1600} height={900} priority />
          </figure>
        )}

        {/* Body: flowing prose, no bullets */}
        <div className="e-body">
          {es.body.map((block, i) => {
            if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>
            if (block.type === 'p') {
              return (
                <p key={i} className={block.lead ? 'lead' : undefined}>
                  {block.text}
                </p>
              )
            }
            if (block.type === 'pull') {
              return (
                <p key={i} className="e-pull">
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
            <h2>Questions</h2>
            {es.faqs.map((f, i) => (
              <details key={i}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </section>
        )}

        {/* Closing block — brief v5 T6. Reemplazó al form de subscribe
            (no hay proveedor de email; un form muerto es peor que nada). */}
        <ClosingBlock kind="essay" />
      </article>
    </div>
  )
}
