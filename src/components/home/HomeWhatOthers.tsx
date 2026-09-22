import { findWork } from '@/content/work'
import './home-what-others.css'

/* Home · WHAT OTHER PEOPLE STARTED SAYING · F18.4 · 21-sep · autónomo.

   Dos items · Karen y Mike (Drapers retirado en F11.0). Los links de
   Karen (Forbes/AD) y Mike (triple network) llegan a sus /work/*
   respectivos, no a `#` (F18.4 · brief §F18.4).

   Copy textual del prototipo home-v3 §11. Assets reales no existen
   todavía: regla §2 · el bloque se renderiza sin la imagen. */

export default function HomeWhatOthers() {
  const karen = findWork('karen-mannheim')
  const mike = findWork('mike-kaeding')
  return (
    <section
      className="plane plane--paper home-what-others"
      id="what-others"
      data-plane
    >
      <div className="plane__in">
        <div className="plane__top">
          <p className="eyebrow">What other people started saying</p>
          <h2 className="name name--sm">
            Forbes Perú put Karen on its 2026 list; ABC, Fox News and
            CBS now call Mike.
          </h2>
          <div className="rule" />
        </div>
        <div className="press">
          <a
            className="pitem"
            href={karen ? `/work/${karen.slug}` : '#'}
            aria-label="Karen · Forbes Perú"
          >
            <p className="pitem__src">Forbes Perú</p>
            <p className="pitem__h">
              Karen Mannheim, named to “Las 50 mujeres más poderosas de
              Perú en 2026.”
            </p>
            <p className="pitem__m">
              June 2026 · also in Architectural Digest
            </p>
          </a>
          <a
            className="pitem"
            href={mike ? `/work/${mike.slug}` : '#'}
            aria-label="Mike · triple network"
          >
            <p className="pitem__src">ABC · Fox News · CBS</p>
            <p className="pitem__h">
              Mike Kaeding, from a builder nobody outside Minnesota had
              heard of to a source three networks call.
            </p>
            <p className="pitem__m">
              56,000 followers · 2M impressions a year · Jul 2023 — Oct
              2024
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}
