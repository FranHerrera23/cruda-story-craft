import type { Metadata } from 'next'
import Link from 'next/link'
import { allEssays } from '@/content/essays'
import '@/components/essay.css'

const BASE = 'https://www.thecruda.com'

const TITLE = 'Thinking | CRUDA'
const DESCRIPTION =
  'Essays and conversations on narrative, business and the stories that move people. From Francisco Herrera, founder of CRUDA.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE}/thinking` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${BASE}/thinking`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
}

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function excerpt(capsule: string): string {
  const first = capsule.split(/\.\s/)[0]
  return first.length > 120 ? first.slice(0, 118) + '…' : first + '.'
}

export default function ThinkingIndexPage() {
  return (
    <div className="essay-root">
      <header className="essay-idx-header">
        <div className="essay-idx">
          <p className="mono eyebrow">Thinking</p>
          <h1>Everything is a narrative, companies too.</h1>
          <p className="intro">
            Essays and conversations on narrative, business, and the stories that move people
            without them noticing.
          </p>
        </div>
      </header>

      <section className="thinking-list-band" aria-label="Pieces">
        <div className="essay-idx thinking-list reveal-group">
          {allEssays.map((es, i) => {
            const number = i + 1
            const type = (es.contentType ?? 'Essay').toUpperCase()
            const tagsLine = [
              es.category.toUpperCase(),
              ...(es.tags ?? []).map((t) => t.toUpperCase()),
            ]
              .filter(Boolean)
              .join(' · ')
            return (
              <Link
                key={es.slug}
                href={`/thinking/${es.slug}`}
                className="thinking-card reveal"
                role="listitem"
                aria-label={es.title}
              >
                <p className="mono thinking-card-meta">
                  {String(number).padStart(2, '0')} · {type} · {tagsLine}
                </p>
                <h2 className="thinking-card-title">{es.title}</h2>
                <p className="thinking-card-excerpt">{excerpt(es.answerCapsule)}</p>
                <p className="mono thinking-card-byline">
                  Francisco Herrera ·{' '}
                  <time dateTime={es.publishedAt}>{fmt(es.publishedAt)}</time>
                  <span> · {es.readingMinutes} min</span>
                </p>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="essay-sub-band reveal" aria-label="Subscribe">
        <div className="essay-idx sub sub--cream">
          <h2>One or two a month.</h2>
          <p>Essays on narrative and business. Nothing else.</p>
          <form className="form" action="[FRAN — proveedor de email]" method="post">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              aria-label="Email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          <p className="legal">
            By subscribing you agree to receive emails from CRUDA. Unsubscribe any time.
          </p>
        </div>
      </section>
    </div>
  )
}
