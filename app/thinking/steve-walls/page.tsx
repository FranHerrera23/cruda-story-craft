import type { Metadata } from 'next'
import Link from 'next/link'
import StartHere from '@/components/StartHere'
import './steve-walls.css'

/* /thinking/steve-walls · F14b.2 · 21-sep · autónomo.

   Estado: upcoming.
   noindex a nivel meta · fuera del sitemap.

   Brief §7 · el título, ID y fecha del episodio los completa Fran
   cuando el episodio se publica. En estado "upcoming" la página
   se renderiza minimal: bloque negro diseñado con "Coming soon" +
   back a /thinking. Sin capsule, sin metadata, sin transcript.

   Cuando el estado pase a "published", se cambia UN campo (status)
   y la página pasa a indexarse con: <img> real de YouTube,
   VideoObject schema con transcript, capsule + takeaways + meta,
   capítulos, artículo editado y transcript completo. Esa mecánica
   está diseñada en el prototipo episode-v1 pero no se implementa
   ahora porque el episodio aún no existe (§7 espera a Fran).

   Ruta estática · toma precedencia sobre `/thinking/[slug]` del
   catch-all de essays. */

const BASE = 'https://www.thecruda.com'

export const metadata: Metadata = {
  title: 'Steve Walls · Episode 01 — CRUDA Thinking',
  description:
    'Former Chief Strategy Officer, Publicis Singapore and Saatchi & Saatchi. In conversation with Fran Herrera. Coming soon.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${BASE}/thinking/steve-walls`,
  },
}

export default function SteveWallsPage() {
  return (
    <article className="episode">
      <header className="episode-top">
        <Link className="episode-back" href="/thinking">
          ← Thinking
        </Link>
        <p className="episode-eyebrow">Podcast · Episode 01</p>
        <h1 className="episode-h1">Steve Walls</h1>
        <p className="episode-sub">
          Former Chief Strategy Officer, Publicis Singapore and Saatchi &amp;
          Saatchi.
        </p>
      </header>

      <figure className="episode-figure">
        <div className="player">
          <div className="soon">
            <span className="soon__o">Episode 01</span>
            <div>
              <p className="soon__n">Steve Walls</p>
              <p className="soon__r">In conversation with Fran Herrera</p>
            </div>
            <span className="soon__s">Coming soon</span>
          </div>
        </div>
      </figure>

      {/* START HERE · F23-5 */}
      <StartHere h2="Did one of these pieces describe your company?" />
    </article>
  )
}
