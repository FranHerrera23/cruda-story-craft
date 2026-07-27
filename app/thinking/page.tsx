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
  const [featured, ...rest] = allEssays

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
        {/* Featured piece — 01. Full width, serif title. Fills the hole
            that ~700px of dead space used to sit in. */}
        {featured && (
          <Link
            key={featured.slug}
            href={`/thinking/${featured.slug}`}
            className="featured"
            aria-label={`Featured: ${featured.title}`}
          >
            <span className="mono n-small">
              01 · {(featured.contentType ?? 'Essay').toUpperCase()}
            </span>
            <h2 className="display--sm featured-t">{featured.title}</h2>
            <p className="featured-excerpt">
              {featured.answerCapsule.split(' — ')[0]}.
            </p>
            <span className="mono featured-m">
              Francisco Herrera ·{' '}
              <time dateTime={featured.publishedAt}>{fmt(featured.publishedAt)}</time>
              <span> · {[featured.category, ...(featured.tags ?? [])].join(' · ')} ·{' '}
                {featured.readingMinutes} min
              </span>
            </span>
            <span className="mono featured-arrow" aria-hidden="true">Read →</span>
          </Link>
        )}

        {/* Rest — compact list. */}
        {rest.length > 0 && (
          <div className="list" role="list">
            {rest.map((es, i) => {
              const type = es.contentType ?? 'Essay'
              const tagsLine = [es.category, ...(es.tags ?? [])]
                .filter(Boolean)
                .join(' · ')
              const index = i + 2 // continues after the featured 01
              return (
                <Link
                  key={es.slug}
                  href={`/thinking/${es.slug}`}
                  className="item"
                  role="listitem"
                >
                  <span className="n">{String(index).padStart(2, '0')}</span>
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
                  <span className="a" aria-hidden="true">→</span>
                </Link>
              )
            })}
          </div>
        )}
      </main>

      {/* Subscribe on --cream. Full-bleed band so the color reads as
          punctuation and not decoration. */}
      <section className="essay-sub-band" aria-label="Subscribe">
        <div className="essay-idx sub sub--cream">
          <h2>Everything is a narrative, companies too.</h2>
          <p>Ensayos sobre narrativa y negocio. Uno o dos por mes. Nada más.</p>
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
