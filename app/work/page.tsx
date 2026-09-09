import type { Metadata } from 'next'
import { Suspense } from 'react'
import ResourceCards from '@/components/ResourceCards'
import ResourceFilters from '@/components/ResourceFilters'
import { allResources, countByKind, dedupeByPiece } from '@/content/resources'
import { collectionPageSchema } from '@/lib/collection-schema'
import '@/styles/resources.css'

/* /work — brief v2 Task 3.
   Canonical case study index. Reemplaza /resources/case-studies y
   /architecture-design (ambos con 301 permanente). Phase B agrega el
   NDS grid (label above image, huge images, no descriptions); esta
   versión mantiene la card list actual hasta que Phase B corra. */

export const metadata: Metadata = {
  title: 'Work — CRUDA',
  description:
    'Case studies from CRUDA — founder-led companies at a point of inflection. Market entry, category shift, succession, hyperscale, new entity.',
  alternates: {
    canonical: 'https://www.thecruda.com/work',
  },
  openGraph: {
    title: 'Work — CRUDA',
    description:
      'Case studies from CRUDA — founder-led companies at a point of inflection.',
    url: 'https://www.thecruda.com/work',
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
    title: 'Work — CRUDA',
    description:
      'Case studies from CRUDA — founder-led companies at a point of inflection.',
    images: ['https://www.thecruda.com/logo.png'],
  },
}

const DEDUPED = dedupeByPiece(allResources, 'en')
const CASE_STUDIES = DEDUPED.filter((r) => r.kind === 'case-study')
const GLOBAL_KIND_COUNTS = countByKind(DEDUPED)

const SCHEMA = collectionPageSchema({
  url: 'https://www.thecruda.com/work',
  name: 'Work — CRUDA',
  description:
    'Case studies from CRUDA — founder-led companies at a point of inflection.',
  items: CASE_STUDIES,
})

export default function WorkPage() {
  return (
    <div className="rs-root">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <section className="rs-head">
        <div className="rs-inner">
          <p className="rs-eyebrow">Work</p>
          <h1 className="rs-h1">Selected work.</h1>
          <p className="rs-sub">
            Founder-led companies at a point of inflection. What we built and
            what changed.
          </p>
        </div>
      </section>
      <div className="rs-body">
        <div className="rs-inner">
          <Suspense fallback={null}>
            <ResourceFilters
              items={CASE_STUDIES}
              scope="case-studies"
              totalItems={DEDUPED.length}
              globalKindCounts={GLOBAL_KIND_COUNTS}
            />
          </Suspense>
          <ResourceCards items={CASE_STUDIES} />
        </div>
      </div>
    </div>
  )
}
