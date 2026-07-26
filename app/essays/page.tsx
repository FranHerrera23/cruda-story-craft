import type { Metadata } from 'next'
import Link from 'next/link'
import { allEssays } from '@/content/essays'
import '@/components/essay.css'

const BASE = 'https://www.thecruda.com'

export const metadata: Metadata = {
  title: 'Essays | CRUDA',
  description:
    'Essays is the media arm of the CRUDA holding. Writing on narrative, business, and identity.',
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
      <main className="w essay-idx">
        <p className="mono idx-eyebrow">Essays</p>
        <h1>[FRAN — nombre de la publicación]</h1>
        <p className="idx-sub">
          [FRAN — 1-2 frases: qué es esta publicación y para quién.]
        </p>

        <ol className="es-list">
          {allEssays.map((es, i) => (
            <li key={es.slug}>
              <Link href={`/essays/${es.slug}`}>
                <span className="es-idx-n">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>
                  <span className="es-idx-title">{es.title}</span>
                  <span className="es-idx-meta">
                    <time dateTime={es.publishedAt}>{fmt(es.publishedAt)}</time>
                    <span> · {es.category} · {es.readingMinutes} min</span>
                  </span>
                </span>
                <span className="es-idx-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>

        {/* Email capture — the one surface of the holding that captures. */}
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
      </main>
    </div>
  )
}
