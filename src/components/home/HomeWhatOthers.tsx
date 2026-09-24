import { findWork } from '@/content/work'
import './home-what-others.css'

/* Home · WHAT OTHER PEOPLE STARTED SAYING · F28 §1.2 · 23-sep.

   Textos actualizados (§1.2 F28):
   - h2 pasa a "Forbes Perú put Karen on its 2026 list, without a pitch."
   - Card de Mike ya no menciona ABC / Fox News / CBS.
   - Rótulo de Mike ahora es "LINKEDIN · 2023 — 2025".
   - "56,000 followers · 2M impressions a year" queda como
     "2M impressions a year · $110,000 a year in media value". */

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
            Forbes Perú put Karen on its 2026 list, without a pitch.
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
            aria-label="Mike Kaeding · LinkedIn 2023 — 2025"
          >
            <p className="pitem__src">LINKEDIN · 2023 — 2025</p>
            <p className="pitem__h">
              Mike Kaeding, from occasional technical posts to a weekly
              voice 56,000 people follow.
            </p>
            <p className="pitem__m">
              2M impressions a year · $110,000 a year in media value
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}
