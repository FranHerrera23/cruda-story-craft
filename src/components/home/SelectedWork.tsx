import WorkCard from './WorkCard'
import './work-card.css'
import './selected-work.css'

/* Home · Selected Work — grilla de nueve retratos.

   Brief 11-sep §3. La sección arranca con un filete de 1px al 20%
   —no una línea sólida— antes del label. Label "I  Selected Work"
   a 17px grotesca (baja de 22 a 17: la referencia usa body para
   labels de sección; a 22 se leía como sub-título, no como label).

   Entre label y grilla van 160px de aire (mobile: menos). El gap
   horizontal de la grilla es 20px (baja de 32): el gap-x igualado
   a la gutter de la 12-col del hero cierra visualmente el sistema.

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
        <div className="home-work__rule" aria-hidden="true" />
        <div className="home-work__label">
          <span className="i">I</span>
          <span>Selected Work</span>
        </div>
        <div className="home-work__grid">
          {cards.map((card, i) => (
            <WorkCard key={card.href + i} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
