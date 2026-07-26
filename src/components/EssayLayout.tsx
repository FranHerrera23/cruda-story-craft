import Image from 'next/image'
import Link from 'next/link'
import EssayProgressBar from './EssayProgressBar'
import './essay.css'

/* ------------------------------------------------------------------
   CRUDA — EssayLayout
   AEO discipline adapted to essay. The skeleton serves the machine;
   the prose inside serves the human. No bullets — essays flow.
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
  readingMinutes: number
  heroImage?: string
  heroAlt?: string
  body: EssayBlock[]
  faqs?: Faq[]
}

const AUTHOR = {
  name: 'Francisco Herrera',
  role: 'Founder, CRUDA',
  photo: '/team/fran.jpg',
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
  const modified = es.updatedAt.startsWith('[FRAN') ? es.publishedAt : es.updatedAt
  const graph: unknown[] = [
    {
      '@type': 'Article',
      '@id': `${base}/essays/${es.slug}#article`,
      headline: es.title,
      description: es.answerCapsule,
      datePublished: es.publishedAt,
      dateModified: modified,
      articleSection: es.category,
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
        '@id': `${base}/essays/${es.slug}`,
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
      '@id': `${base}/essays/${es.slug}#faq`,
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
  const showUpdated =
    es.updatedAt !== es.publishedAt && !es.updatedAt.startsWith('[FRAN')

  return (
    <div className="essay-root essay">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(es)) }}
      />

      <EssayProgressBar />

      <article>
        <header className="e-head">
          <Link href="/essays" className="mono e-back">
            ← Essays
          </Link>
          <p className="mono e-meta">
            {es.category} · {es.readingMinutes} min read
          </p>

          <h1>{es.title}</h1>

          <div className="e-by">
            <Image
              src={AUTHOR.photo}
              alt={AUTHOR.name}
              width={40}
              height={40}
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
            // quote — attributed to someone else
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

        {/* Subscribe */}
        <section className="e-sub" aria-label="Subscribe">
          <h3>[FRAN — nombre de la publicación]</h3>
          <p>[FRAN — 1 frase sobre qué recibe quien se suscribe]</p>
          <form className="e-form" action="[FRAN — proveedor de email]" method="post">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              aria-label="Email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </article>
    </div>
  )
}
