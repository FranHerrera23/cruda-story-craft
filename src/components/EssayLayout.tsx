import Image from 'next/image'
import './essay.css'

/* ------------------------------------------------------------------
   CRUDA — EssayLayout
   AEO discipline adapted to essay. The skeleton serves the machine;
   the prose inside serves the human. No bullets — essays flow.
------------------------------------------------------------------- */

export type EssayBlock =
  | { type: 'p'; text: string }
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
    month: 'short',
    day: 'numeric',
  })
}

function schema(es: Essay) {
  const base = 'https://www.thecruda.com'
  const graph: unknown[] = [
    {
      '@type': 'Article',
      '@id': `${base}/essays/${es.slug}#article`,
      headline: es.title,
      description: es.answerCapsule,
      datePublished: es.publishedAt,
      dateModified: es.updatedAt,
      articleSection: es.category,
      wordCount: undefined,
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
  return (
    <div className="essay-root essay">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(es)) }}
      />

      <article className="w">
        <header className="es-head">
          <p className="mono es-eyebrow">
            {es.category}
            <span className="divider">·</span>
            {es.readingMinutes} min read
          </p>

          <h1>{es.title}</h1>

          <div className="es-byline">
            <Image
              src={AUTHOR.photo}
              alt={AUTHOR.name}
              width={40}
              height={40}
              className="es-avatar"
            />
            <div>
              <span className="es-author">{AUTHOR.name}</span>
              <span className="es-role">{AUTHOR.role}</span>
            </div>
            <div className="es-dates">
              <time dateTime={es.publishedAt}>{fmt(es.publishedAt)}</time>
              {es.updatedAt !== es.publishedAt && !es.updatedAt.startsWith('[FRAN') && (
                <span>
                  {' '}
                  · Updated <time dateTime={es.updatedAt}>{fmt(es.updatedAt)}</time>
                </span>
              )}
            </div>
          </div>
        </header>

        {/* Answer capsule — what this is about, sin spoiler del giro. */}
        <p className="es-capsule">{es.answerCapsule}</p>

        {es.heroImage && es.heroAlt && (
          <figure className="es-hero">
            <Image src={es.heroImage} alt={es.heroAlt} width={1600} height={900} priority />
          </figure>
        )}

        {/* Body: flowing prose, no bullets */}
        <div className="es-body">
          {es.body.map((block, i) => {
            if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>
            if (block.type === 'p') return <p key={i}>{block.text}</p>
            if (block.type === 'pull') return <p key={i} className="es-pull">{block.text}</p>
            // quote — attributed to someone else
            return (
              <div key={i} className="es-quote">
                <blockquote>{block.text}</blockquote>
                {block.attribution && <cite>{block.attribution}</cite>}
              </div>
            )
          })}
        </div>

        {es.faqs && es.faqs.length > 0 && (
          <section className="es-faq">
            <h2>Questions</h2>
            {es.faqs.map((f, i) => (
              <details key={i}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </section>
        )}

        {/* Email capture — Essays is the one surface that captures. */}
        <section className="es-capture" aria-label="Subscribe">
          <p className="es-capture-note">Subscribe</p>
          <p className="es-capture-line">
            [FRAN — 1 frase sobre qué recibe quien se suscribe]
          </p>
          <form action="[FRAN — proveedor de email]" method="post">
            <input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              aria-label="Email address"
            />
            <button type="submit">Subscribe</button>
          </form>
          <p className="es-capture-todo">
            [FRAN] Wire this form to the email provider.
          </p>
        </section>
      </article>
    </div>
  )
}
