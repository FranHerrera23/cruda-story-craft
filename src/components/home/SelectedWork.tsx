import WorkCard from './WorkCard'
import './work-card.css'
import './selected-work.css'

/* Home · Selected Work — grilla de nueve retratos.

   Design system unificado §4 — el filete arriba lo pinta ahora
   home-layout.css entre secciones, no la sección misma. El eyebrow
   SELECTED WORK arranca directo dentro del padding uniforme.

   Entre label y grilla van 160px de aire (mobile: menos). El gap
   horizontal de la grilla es 20px.

   ID de la sección: `selected-work` — es el ancla al que el ítem
   WORK del nav apunta desde `/#selected-work`. */

export type WorkCardData = {
  name: string
  company: string
  href?: string
  imageSrc?: string
  imageAlt?: string
  nameVerified?: boolean
  companyVerified?: boolean
  permanentPlaceholder?: boolean
}

export default function SelectedWork({
  cards = [],
}: {
  cards?: WorkCardData[]
}) {
  return (
    <section id="selected-work" className="home-work">
      <div className="home-work__inner">
        <div className="home-work__label">Selected Work</div>
        <div className="home-work__grid">
          {cards.map((card, i) => (
            <WorkCard key={card.href + i} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
