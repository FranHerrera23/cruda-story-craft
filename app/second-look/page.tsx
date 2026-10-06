import type { Metadata } from 'next'
import { existsSync } from 'node:fs'
import path from 'node:path'
import SecondLookClient from './SecondLookClient'
import './second-look.css'

/* F57 §2 (Fran 6-oct) · fallback chain para el retrato de Fran.
   Se evalúa en build-time (SSG) sobre public/ del CWD. El valor
   final se pasa como prop a SecondLookClient para que paso 1 y
   cierre usen el mismo archivo sin tener que correr lógica en el
   cliente. */
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

/* /second-look · F56 · Fran 2-oct.

   Wizard de 4 pasos + cierre. Entrada única agendable del sitio.
   Server component · emite metadata + JSON-LD Service con Offer.
   El wizard entero vive en SecondLookClient (hashes, Calendly,
   state entre pasos).

   Fuentes:
   - docs/F56-brief.md (prioritario)
   - docs/F56-second-look.html (copy + layout de referencia) */

const BASE = 'https://www.thecruda.com'
const ORG_ID = `${BASE}/#organization`

const SL_TITLE = 'Second Look · Fran Herrera · CRUDA'
const SL_DESCRIPTION =
  'Two conversations and a written diagnosis of your business, from the outside. $950, credited toward any engagement.'
const SL_OG_IMAGE = `${BASE}/second-look-og.jpg`

export const metadata: Metadata = {
  title: SL_TITLE,
  description: SL_DESCRIPTION,
  alternates: { canonical: `${BASE}/second-look` },
  openGraph: {
    title: SL_TITLE,
    description: SL_DESCRIPTION,
    url: `${BASE}/second-look`,
    type: 'website',
    images: [
      { url: SL_OG_IMAGE, width: 1200, height: 630, alt: 'Second Look · CRUDA' },
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

/* Service + Offer · brief §3.
   provider = Organization CRUDA por @id (declarada en app/layout.tsx). */
const SL_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE}/second-look#service`,
  name: 'Second Look',
  serviceType: 'Business diagnosis',
  description:
    "Two conversations and a written diagnosis of your business, from the outside. $950, credited toward any engagement.",
  provider: { '@id': ORG_ID },
  url: `${BASE}/second-look`,
  offers: {
    '@type': 'Offer',
    price: 950,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: `${BASE}/second-look`,
  },
} as const

export default function SecondLookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SL_SCHEMA) }}
      />
      <SecondLookClient portraitSrc={PORTRAIT_SRC} />
    </>
  )
}
