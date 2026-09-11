import Link from 'next/link'
import {
  allResources,
  dedupeByPiece,
  kindLabel,
  languageLabel,
} from '@/content/resources'
import './home-essays.css'

/* Home · essays — brief 11-sep §A.

   Tres essays más recientes desde el data source de /essays.
   Se dedupe pares bilingües preservando la versión inglesa (mismo
   criterio que /essays) y se filtra kind === 'essay'. Sin
   hardcodear títulos — si mañana Fran publica uno nuevo, la home
   se actualiza sola.

   §A.2 · si hay menos de dos publicados la sección se retira
   entera — una card en grilla de tres se lee como error. */

const RECENT_ESSAYS = dedupeByPiece(allResources, 'en')
  .filter((r) => r.kind === 'essay')
  .slice(0, 3)

export default function HomeEssays() {
  if (RECENT_ESSAYS.length < 2) return null

  return (
    <section id="essays" className="home-essays">
      <div className="home-essays__inner in">
        <div className="home-essays__head">
          <p className="home-essays__eyebrow">Essays</p>
          <Link href="/essays" className="home-essays__all">
            All essays ↗
          </Link>
        </div>

        <p className="home-essays__lede">
          Pieces on narrative, brand, and the founders who build them.
        </p>

        <div className="home-essays__grid">
          {RECENT_ESSAYS.map((e) => (
            <Link key={e.slug} href={e.href} className="essay-card">
              <h3 className="essay-card__title">{e.title}</h3>
              <p className="essay-card__meta">
                {kindLabel(e.kind)} · {languageLabel(e.language)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
