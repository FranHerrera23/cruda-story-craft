import type { Metadata } from 'next'
import { Suspense } from 'react'
import ResourceCards from '@/components/ResourceCards'
import ResourceFilters from '@/components/ResourceFilters'
import { allResources, countByKind, dedupeByPiece } from '@/content/resources'
import { collectionPageSchema } from '@/lib/collection-schema'
import '@/styles/resources.css'

/* /essays — brief v2 D3.
   Canonical essay index. Reemplaza /resources/essays (301 permanent).
   Nav "Essays" apunta directo acá — sin cadenas.  */

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

/* Brief v4 UX §4.6 — dedupe por pieza (un ensayo bilingüe es UNA). */
const DEDUPED = dedupeByPiece(allResources, 'en')
const ESSAYS = DEDUPED.filter((r) => r.kind === 'essay')
const GLOBAL_KIND_COUNTS = countByKind(DEDUPED)

const SCHEMA = collectionPageSchema({
  url: 'https://www.thecruda.com/essays',
  name: 'Essays — CRUDA',
  description:
    'Essays from CRUDA on narrative, brand and the founders who build them.',
  items: ESSAYS,
})

export default function EssaysPage() {
  return (
    <div className="rs-root">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <section className="rs-head">
        <div className="rs-inner">
          <p className="rs-eyebrow">Essays</p>
          <h1 className="rs-h1">Essays.</h1>
          <p className="rs-sub">
            Pieces on narrative, brand, and the founders who build them. Written
            for people who have to make decisions, not for people who write
            about them.
          </p>
        </div>
      </section>
      <div className="rs-body">
        <div className="rs-inner">
          <Suspense fallback={null}>
            <ResourceFilters
              items={ESSAYS}
              scope="essays"
              totalItems={DEDUPED.length}
              globalKindCounts={GLOBAL_KIND_COUNTS}
            />
          </Suspense>
          <ResourceCards items={ESSAYS} />
        </div>
      </div>
    </div>
  )
}
