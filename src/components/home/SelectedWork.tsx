import WorkCard from './WorkCard'
import './work-card.css'
import './selected-work.css'

/* Home · Selected Work — grilla de nueve retratos.

   Brief 11-sep v2 §5. La sección arranca con un filete de 1px al
   20% antes del label. El label pasa a eyebrow del sitio viejo:
   13px, mayúsculas, tracking abierto, gris. Sale el "I" con el
   spacer de 20px — era gesto de la referencia y se retira con la
   grilla de doce del hero.

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
        <div className="home-work__rule" aria-hidden="true" />
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
