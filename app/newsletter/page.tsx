import type { Metadata } from 'next'
import CaptureForm from '@/components/CaptureForm'
import { CAPTURE_ENABLED } from '@/lib/flags'

/* Brief v4 UX §4.8 — ubicación 4 del capture: ruta propia, indexable.
   Página simple (grid-container + heading + form). Nada de gate ni
   scarcity.

   F0 — con CAPTURE_ENABLED apagado la ruta sigue viva pero se degrada
   a "solo H1", pierde eyebrow + body + form. Cambia el metadata a
   robots noindex y se saca del sitemap (ver app/sitemap.ts).
   La ruta existe por si alguien tiene el link viejo, pero no se
   indexa una página que no hace nada. */

export const metadata: Metadata = {
  title: 'Newsletter — CRUDA',
  description:
    'One essay a week on narrative, brand and the things people don’t say out loud.',
  alternates: { canonical: 'https://www.thecruda.com/newsletter' },
  robots: CAPTURE_ENABLED
    ? undefined
    : {
        index: false,
        follow: false,
      },
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
          {CAPTURE_ENABLED ? (
            <>
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
              <CaptureForm lang="en" variant="full" />
            </>
          ) : (
            /* F0 — solo H1. Sin eyebrow, sin body, sin form. La ruta
               sobrevive pero no se indexa (ver metadata.robots).
               Cuando vuelva un proveedor de newsletter, el flag se
               prende y toda la página vuelve tal cual estaba. */
            <h1 className="newsletter-heading">Newsletter</h1>
          )}
        </div>
      </section>
    </div>
  )
}
