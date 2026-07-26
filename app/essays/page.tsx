import type { Metadata } from 'next'
import Link from 'next/link'
import { allEssays } from '@/content/essays'
import '@/components/essay.css'

const BASE = 'https://www.thecruda.com'

export const metadata: Metadata = {
  title: 'Essays | CRUDA',
  description: '[FRAN — 1 frase]',
  alternates: { canonical: `${BASE}/essays` },
}

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function EssaysIndexPage() {
  return (
    <div className="essay-root">
      <header className="essay-idx-header">
        <div className="essay-idx">
          <p className="mono eyebrow">Essays</p>
          <h1>[FRAN — nombre de la publicación]</h1>
          <p className="intro">
            [FRAN — 1-2 frases: qué es esta publicación y para quién]
          </p>
        </div>
      </header>

      <main className="essay-idx">
        <div className="list" role="list">
          {allEssays.map((es, i) => (
            <Link key={es.slug} href={`/essays/${es.slug}`} className="item" role="listitem">
              <span className="n">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2 className="t">{es.title}</h2>
                <p className="m">
                  <time dateTime={es.publishedAt}>{fmt(es.publishedAt)}</time>
                  <span> · {es.category} · {es.readingMinutes} min</span>
                </p>
              </div>
              <span className="a" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>

        <section className="sub" aria-label="Subscribe">
          <h2>[FRAN — headline de suscripción]</h2>
          <p>[FRAN — 1 frase sobre qué recibe quien se suscribe]</p>
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
        </section>
      </main>
    </div>
  )
}
