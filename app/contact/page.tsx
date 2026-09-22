import type { Metadata } from 'next'
import ContactContent from './ContactContent'
import './contact.css'

/* /contact · F14a · 21-sep · autónomo · prototipo contact-v1.

   Tres secciones + filtro ICP (5 preguntas).
   La línea vieja "We do not ask about revenue, industry or geography"
   está retirada (contradecía la Q04 del filtro sobre budget). El
   prototipo firmado no la incluye. */

const BASE = 'https://www.thecruda.com'

const CONTACT_TITLE = 'Contact · CRUDA'
const META_DESCRIPTION =
  'Book a 45-minute call with Fran Herrera, founder of CRUDA, or write to fran@thecruda.com.'

export const metadata: Metadata = {
  title: CONTACT_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: `${BASE}/contact` },
  openGraph: {
    title: CONTACT_TITLE,
    description: META_DESCRIPTION,
    url: `${BASE}/contact`,
    type: 'website',
    images: [
      { url: `${BASE}/logo.png`, width: 1080, height: 1080, alt: 'CRUDA' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: CONTACT_TITLE,
    description: META_DESCRIPTION,
    images: [`${BASE}/logo.png`],
  },
}

export default function ContactPage() {
  return <ContactContent />
}
