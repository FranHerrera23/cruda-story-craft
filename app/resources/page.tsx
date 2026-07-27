import type { Metadata } from 'next'
import ResourcesLibrary from './ResourcesLibrary'
import { allResources } from '@/content/resources'
import './resources.css'

/* /resources — brief v5 T7.
   Biblioteca única con dos ejes (Company · Format). Reemplaza a
   /thinking. La página es Server; los filtros son Client. */

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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources — CRUDA',
    description:
      'Essays, conversations and case studies on narrative for founders, studios and athletes.',
  },
}

export default function ResourcesPage() {
  return (
    <div className="rs-root">
      <section className="rs-head">
        <div className="rs-inner">
          <p className="mono rs-eyebrow">Resources</p>
          <h1 className="rs-h1">Everything is a narrative. Companies too.</h1>
          <p className="rs-sub">
            Essays, conversations and case studies. What we&apos;ve written and
            what we&apos;ve built for the people we work with.
          </p>
        </div>
      </section>
      <ResourcesLibrary items={allResources} />
    </div>
  )
}
