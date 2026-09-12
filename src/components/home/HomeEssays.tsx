import Link from 'next/link'
import {
  allResources,
  kindLabel,
  languageLabel,
} from '@/content/resources'
import { featuredEssaySlugs } from '@/content/home/featured-essays'
import './home-essays.css'

/* Home · essays — curaduría manual.

   Los tres ensayos que se muestran vienen de un array explícito
   en @/content/home/featured-essays.ts, en el orden en que van a
   aparecer. Fran los edita ahí — no es filtro automático por
   fecha ni por idioma, y no hay lógica de dedupe: si querés dos
   ensayos ES seguidos podés, si querés uno EN y dos ES podés.

   Si un slug del array no matchea un ensayo publicado, se
   ignora (no rompe la grilla). Si sobran menos de dos ensayos
   válidos, la sección se retira entera — una card sola en
   grilla de tres lee como error. */

const RECENT_ESSAYS = featuredEssaySlugs
  .map((slug) =>
    allResources.find((r) => r.kind === 'essay' && r.slug === slug),
  )
  .filter((r): r is NonNullable<typeof r> => r !== undefined)

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
