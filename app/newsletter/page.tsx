import type { Metadata } from 'next'
import Link from 'next/link'
import { allEssays } from '@/content/essays'
import SubscribeForm from '@/components/SubscribeForm'
import EssayCard, { type EssayCardData } from '@/components/thinking/EssayCard'
import './newsletter.css'

/* /newsletter · F54 · 1-oct · Fran · rediseño con hero + recent + banda.

   Estructura (brief F54 §4):
     - Hero (cols 1-8): h1 "Narrative Sparring" 72px, regla naranja,
       "Every week, the full story." 26px, intro de /thinking 18px,
       <SubscribeForm /> con id="subscribe".
     - Recent pieces: filete, header "Recent pieces" + link "All
       pieces on Thinking →", 3 tarjetas EN más recientes.
     - Banda negra final: fondo #000, línea en crema "Every week,
       the full story." + link-botón "Subscribe" al #subscribe de
       arriba (brief §4 fallback por si beehiiv no admite 2
       instancias en la misma página).

   SubscribeForm vive solo en el hero · el bloque de la banda negra
   es un link-botón al ancla #subscribe para evitar el riesgo de un
   segundo embed. Reporte en el PR final: "fallback link-botón". */

export const metadata: Metadata = {
  title: 'Narrative Sparring · CRUDA Newsletter',
  description:
    'One essay a week on narrative, brand and the things people don’t say out loud.',
  alternates: { canonical: 'https://www.thecruda.com/newsletter' },
  openGraph: {
    title: 'Narrative Sparring · CRUDA Newsletter',
    description:
      'One essay a week on narrative, brand and the things people don’t say out loud.',
    url: 'https://www.thecruda.com/newsletter',
    type: 'website',
    images: [{
      url: 'https://www.thecruda.com/logo.png',
      width: 1080, height: 1080, alt: 'CRUDA',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narrative Sparring · CRUDA Newsletter',
    description:
      'One essay a week on narrative, brand and the things people don’t say out loud.',
    images: ['https://www.thecruda.com/logo.png'],
  },
}

/* ------- Recent pieces (EN only · brief §4 Recent pieces) ------- */

const MONTHS_EN = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
]

function fmtDateEn(iso: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return `${MONTHS_EN[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`
}

const RECENT: EssayCardData[] = [...allEssays]
  .filter(e => (e.language ?? 'en') === 'en')
  .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''))
  .slice(0, 3)
  .map(e => ({
    slug: e.slug,
    href: `/thinking/${e.slug}`,
    title: e.title,
    dek: e.deck || undefined,
    metaText: `${fmtDateEn(e.publishedAt)} · ${e.readingMinutes} min read`,
    heroImage: e.heroImage,
    heroAlt: e.heroAlt,
    priority: false,
    sizes: '(max-width: 767px) 90vw, (max-width: 1023px) 48vw, 31vw',
  }))

export default function NewsletterPage() {
  return (
    <div className="n-page">
      {/* ============ Hero (brief §4 Hero) ============ */}
      <section className="n-hero" aria-labelledby="n-hero-h1">
        <div className="n-hero__inner">
          <h1 id="n-hero-h1" className="n-hero__h">Narrative Sparring</h1>
          <div className="n-hero__rule" aria-hidden="true" />
          <p className="n-hero__line">Every week, the full story.</p>
          <p className="n-hero__intro">
            Pieces on narrative, brand, and the founders who build them.
            Written for people who have to make decisions, not for people
            who write about them.
          </p>
          <div id="subscribe" className="n-hero__sub">
            <SubscribeForm />
          </div>
        </div>
      </section>

      {/* ============ Recent pieces (brief §4) ============ */}
      <section className="n-recent" aria-labelledby="n-recent-h">
        <div className="n-recent__head">
          <h2 id="n-recent-h" className="n-recent__h">Recent pieces</h2>
          <Link href="/thinking" className="n-recent__all">
            All pieces on Thinking →
          </Link>
        </div>
        <div className="n-recent__grid">
          {RECENT.map(card => (
            <EssayCard key={card.slug} data={card} />
          ))}
        </div>
      </section>

      {/* ============ Banda negra final (brief §4) ============
          "Si el embed de beehiiv no admite dos instancias en la misma
          página, el bloque de la derecha es un link 'Subscribe' con
          forma de botón". Elegimos el link-botón para no arriesgar
          regresión del embed en producción. Reportado al final de F54. */}
      <section className="n-band" aria-labelledby="n-band-h">
        <div className="n-band__inner">
          <p id="n-band-h" className="n-band__line">
            Every week, the full story.
          </p>
          <a href="#subscribe" className="n-band__cta">Subscribe</a>
        </div>
      </section>
    </div>
  )
}
