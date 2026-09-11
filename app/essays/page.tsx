import type { Metadata } from 'next'
import Link from 'next/link'
import {
  allResources,
  dedupeByPiece,
  kindLabel,
  languageLabel,
} from '@/content/resources'
import { collectionPageSchema } from '@/lib/collection-schema'
import './essays.css'

/* /essays — design system unificado §7.

   Los filtros de chips (kind / company / language) se retiran —
   tres filas de botones con "CRUDA (5)" contra nada no dicen
   nada. La página queda como índice tipográfico: título, lede,
   y lista de ensayos separados por filete, título en grot 700
   con meta debajo.

   Data source: allResources + dedupeByPiece('en') filtrado por
   kind === 'essay'. Un ensayo bilingüe es una sola pieza. */

const ESSAYS = dedupeByPiece(allResources, 'en').filter(
  (r) => r.kind === 'essay',
)

const SCHEMA = collectionPageSchema({
  url: 'https://www.thecruda.com/essays',
  name: 'Essays — CRUDA',
  description:
    'Essays from CRUDA on narrative, brand and the founders who build them.',
  items: ESSAYS,
})

export const metadata: Metadata = {
  title: 'Essays — CRUDA',
  description:
    'Essays from CRUDA on narrative, brand and the founders who build them. Everything is a narrative — companies too.',
  alternates: {
    canonical: 'https://www.thecruda.com/essays',
  },
  openGraph: {
    title: 'Essays — CRUDA',
    description:
      'Essays from CRUDA on narrative, brand and the founders who build them.',
    url: 'https://www.thecruda.com/essays',
    type: 'website',
    images: [
      {
        url: 'https://www.thecruda.com/logo.png',
        width: 1080,
        height: 1080,
        alt: 'CRUDA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Essays — CRUDA',
    description:
      'Essays from CRUDA on narrative, brand and the founders who build them.',
    images: ['https://www.thecruda.com/logo.png'],
  },
}

export default function EssaysPage() {
  return (
    <div className="ei">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <header data-reveal="text" className="ei-head">
        <p className="ei-eyebrow">Essays</p>
        <h1 className="ei-h1">Essays.</h1>
        <p className="ei-lede">
          Pieces on narrative, brand, and the founders who build them.
          Written for people who have to make decisions, not for people
          who write about them.
        </p>
      </header>

      <ol className="ei-list">
        {ESSAYS.map((e) => (
          <li key={e.slug} data-reveal="text" className="ei-item">
            <Link href={e.href} className="ei-link">
              <h2 className="ei-title">{e.title}</h2>
              <p className="ei-meta">
                {kindLabel(e.kind)} · {languageLabel(e.language)}
              </p>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
