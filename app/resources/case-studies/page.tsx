import type { Metadata } from 'next'
import { Suspense } from 'react'
import ResourceCards from '../ResourceCards'
import ResourceFilters from '../ResourceFilters'
import { allResources, countByKind } from '@/content/resources'
import '../resources.css'

/* /resources/case-studies — brief v12 T2.
   Ruta real con title y canonical propios. Server-rendera los 5 case
   studies. Company y Language chips filtran dentro del scope; el
   Format axis apunta a las tres rutas hermanas via <Link>. */

export const metadata: Metadata = {
  title: 'Case studies — CRUDA',
  description:
    'Case studies from CRUDA — founder-experts whose work is stronger than their reach. What we built and what changed.',
  alternates: {
    canonical: 'https://www.thecruda.com/resources/case-studies',
  },
  openGraph: {
    title: 'Case studies — CRUDA',
    description:
      'Case studies from CRUDA — founder-experts whose work is stronger than their reach.',
    url: 'https://www.thecruda.com/resources/case-studies',
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
    title: 'Case studies — CRUDA',
    description:
      'Case studies from CRUDA — founder-experts whose work is stronger than their reach.',
    images: ['https://www.thecruda.com/logo.png'],
  },
}

const CASE_STUDIES = allResources.filter((r) => r.kind === 'case-study')
const GLOBAL_KIND_COUNTS = countByKind(allResources)

export default function CaseStudiesResourcesPage() {
  return (
    <div className="rs-root">
      <section className="rs-head">
        <div className="rs-inner">
          <p className="rs-eyebrow">Resources · Case studies</p>
          <h1 className="rs-h1">Case studies.</h1>
          <p className="rs-sub">
            What we built for founder-experts whose work is stronger than their
            reach. The narrative system, the piece that moved, and what changed
            after it landed.
          </p>
        </div>
      </section>
      <div className="rs-body">
        <div className="rs-inner">
          <Suspense fallback={null}>
            <ResourceFilters
              items={CASE_STUDIES}
              scope="case-studies"
              totalItems={allResources.length}
              globalKindCounts={GLOBAL_KIND_COUNTS}
            />
          </Suspense>
          <ResourceCards items={CASE_STUDIES} />
        </div>
      </div>
    </div>
  )
}
