import type { Metadata } from 'next'
import { Suspense } from 'react'
import ResourceCards from './ResourceCards'
import ResourceFilters from './ResourceFilters'
import { allResources, countByKind } from '@/content/resources'
import './resources.css'

/* /resources — brief v12 T1 + T2.

   Server component: renderea el header + todas las cards en el HTML
   crudo. Los data-* dejan que el filtro cliente oculte cards sin
   re-renderear la lista, así preservamos SSR.

   Format axis (Case studies / Essays) es NAVEGACIÓN, no filtro:
   cada uno tiene su ruta real, su title y su canonical propio. */

export const metadata: Metadata = {
  title: 'Resources — CRUDA',
  description:
    'Essays, conversations and case studies on narrative for founders, studios and athletes.',
  alternates: { canonical: 'https://www.thecruda.com/resources' },
  openGraph: {
    title: 'Resources — CRUDA',
    description:
      'Essays, conversations and case studies on narrative for founders, studios and athletes.',
    url: 'https://www.thecruda.com/resources',
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
    title: 'Resources — CRUDA',
    description:
      'Essays, conversations and case studies on narrative for founders, studios and athletes.',
    images: ['https://www.thecruda.com/logo.png'],
  },
}

const GLOBAL_KIND_COUNTS = countByKind(allResources)

export default function ResourcesPage() {
  return (
    <div className="rs-root">
      <section className="rs-head">
        <div className="rs-inner">
          <p className="rs-eyebrow">Resources</p>
          <h1 className="rs-h1">Everything is a narrative. Companies too.</h1>
          <p className="rs-sub">
            Essays, conversations and case studies. What we&apos;ve written and
            what we&apos;ve built for the people we work with.
          </p>
        </div>
      </section>
      <div className="rs-body">
        <div className="rs-inner">
          {/* Filter chips — client. Suspense boundary requerido por
              useSearchParams. Fallback null preserva el SSR de las cards. */}
          <Suspense fallback={null}>
            <ResourceFilters
              items={allResources}
              scope="all"
              totalItems={allResources.length}
              globalKindCounts={GLOBAL_KIND_COUNTS}
            />
          </Suspense>
          {/* Cards — server. Los links están en el HTML crudo. */}
          <ResourceCards items={allResources} />
        </div>
      </div>
    </div>
  )
}
