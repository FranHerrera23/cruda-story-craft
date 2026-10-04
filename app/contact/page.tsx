import type { Metadata } from 'next'
import ContactContent from './ContactContent'
import './contact.css'

/* /contact · F14a · 21-sep · autónomo · prototipo contact-v1 ·
   F56 (Fran 2-oct) saca el embed de Calendly: la única entrada
   agendable del sitio es /second-look. /contact queda como link
   a /second-look + form "Write to us" + mail directo. */

const BASE = 'https://www.thecruda.com'

const CONTACT_TITLE = 'Contact · CRUDA'
const META_DESCRIPTION =
  'Start with a Second Look: two conversations and a written diagnosis for $950. Or write to fran@thecruda.com.'

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
