import type { Metadata } from 'next'
import { existsSync } from 'node:fs'
import path from 'node:path'
import SparringSessionClient from './SparringSessionClient'
import './sparring-session.css'

/* F57 §2 (Fran 6-oct) · fallback chain para el retrato de Fran. */
function resolvePortrait(): string {
  const candidates = [
    'public/fran-second-look.jpg',
    'public/fran-second-look.webp',
    'public/fran-second-look.png',
    'public/fran-avatar-source.jpg',
    'public/fran-avatar-source.webp',
    'public/fran-avatar-source.png',
    'public/fran-herrera.webp',
  ]
  for (const rel of candidates) {
    if (existsSync(path.join(process.cwd(), rel))) {
      return '/' + rel.slice('public/'.length)
    }
  }
  return '/fran-herrera.webp'
}
const PORTRAIT_SRC = resolvePortrait()

/* /sparring-session · F58 · 27-oct.

   Antes vivía en /second-look. F58 renombra el producto a "Narrative
   Sparring Session" (mismo wizard, mismo precio, misma lógica); la
   ruta vieja /second-look responde 301 → /sparring-session en
   next.config.mjs. */

const BASE = 'https://www.thecruda.com'
const ORG_ID = `${BASE}/#organization`

const SL_TITLE = 'Narrative Sparring Session · Fran Herrera · CRUDA'
const SL_DESCRIPTION =
  'Two conversations and a written diagnosis of your business, from the outside. $950, credited toward any engagement.'
const SL_OG_IMAGE = `${BASE}/second-look-og.jpg`

export const metadata: Metadata = {
  title: SL_TITLE,
  description: SL_DESCRIPTION,
  alternates: { canonical: `${BASE}/sparring-session` },
  openGraph: {
    title: SL_TITLE,
    description: SL_DESCRIPTION,
    url: `${BASE}/sparring-session`,
    type: 'website',
    images: [
      { url: SL_OG_IMAGE, width: 1200, height: 630, alt: 'Narrative Sparring Session · CRUDA' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SL_TITLE,
    description: SL_DESCRIPTION,
    images: [SL_OG_IMAGE],
  },
  robots: { index: true, follow: true },
}

const SL_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE}/sparring-session#service`,
  name: 'Narrative Sparring Session',
  serviceType: 'Business diagnosis',
  description:
    "Two conversations and a written diagnosis of your business, from the outside. $950, credited toward any engagement.",
  provider: { '@id': ORG_ID },
  url: `${BASE}/sparring-session`,
  offers: {
    '@type': 'Offer',
    price: 950,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: `${BASE}/sparring-session`,
  },
} as const

export default function SparringSessionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SL_SCHEMA) }}
      />
      <SparringSessionClient portraitSrc={PORTRAIT_SRC} />
    </>
  )
}
