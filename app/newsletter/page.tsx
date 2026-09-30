import type { Metadata } from 'next'
import SubscribeForm from '@/components/SubscribeForm'

/* Brief v4 UX §4.8 — ubicación 4 del capture: ruta propia, indexable.
   Página simple (grid-container + heading + form). Nada de gate ni
   scarcity.

   F53 §7 (Fran 30-sep) · SubscribeForm (embed hosted de beehiiv)
   reemplaza al CaptureForm in-house que estaba gateado por
   CAPTURE_ENABLED (=false en F0). La ruta vuelve a ser indexable
   (sin robots noindex) porque ya renderea contenido real. */

export const metadata: Metadata = {
  title: 'Newsletter — CRUDA',
  description:
    'One essay a week on narrative, brand and the things people don’t say out loud.',
  alternates: { canonical: 'https://www.thecruda.com/newsletter' },
  openGraph: {
    title: 'Newsletter — CRUDA',
    description:
      'One essay a week on narrative, brand and the things people don’t say out loud.',
    url: 'https://www.thecruda.com/newsletter',
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
    title: 'Newsletter — CRUDA',
    description:
      'One essay a week on narrative, brand and the things people don’t say out loud.',
    images: ['https://www.thecruda.com/logo.png'],
  },
}

export default function NewsletterPage() {
  return (
    <div className="newsletter-root">
      <section className="newsletter-shell grid-container">
        <div className="newsletter-inner">
          <p className="newsletter-eyebrow">Newsletter</p>
          <h1 className="newsletter-heading">
            One essay a week. Narrative, brand, and the things people
            don’t say out loud.
          </h1>
          <p className="newsletter-body">
            No scarcity, no funnel, no email everyone else already
            sends. When there’s something worth reading, it lands.
            Otherwise nothing does.
          </p>
          <SubscribeForm />
        </div>
      </section>
    </div>
  )
}
