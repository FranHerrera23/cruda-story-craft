import type { Metadata } from 'next'
import Link from 'next/link'
import { allEssays } from '@/content/essays'
import '@/components/essay.css'

const BASE = 'https://www.thecruda.com'

export const metadata: Metadata = {
  title: 'Thinking | CRUDA',
  description:
    'Essays and conversations on narrative, business and the stories that move people. From Francisco Herrera, founder of CRUDA.',
  alternates: { canonical: `${BASE}/thinking` },
}

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
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

      <main className="essay-idx">
        <div className="list" role="list">
          {allEssays.map((es, i) => {
            const type = es.contentType ?? 'Essay'
            const tagsLine = [es.category, ...(es.tags ?? [])].filter(Boolean).join(' · ')
            return (
              <Link
                key={es.slug}
                href={`/thinking/${es.slug}`}
                className="item"
                role="listitem"
              >
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="cats">
                    <span className="type">{type}</span>
                    <span>{tagsLine}</span>
                  </p>
                  <h2 className="t">{es.title}</h2>
                  <p className="m">
                    Francisco Herrera ·{' '}
                    <time dateTime={es.publishedAt}>{fmt(es.publishedAt)}</time>
                    <span> · {es.readingMinutes} min</span>
                  </p>
                </div>
                <span className="a" aria-hidden="true">
                  →
                </span>
              </Link>
            )
          })}
        </div>

        <section className="sub" aria-label="Subscribe">
          <h2>Everything is a narrative, companies too.</h2>
          <p>
            [FRAN — 1 frase sobre qué recibe quien se suscribe y con qué frecuencia]
          </p>
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
        </section>
      </main>
    </div>
  )
}
