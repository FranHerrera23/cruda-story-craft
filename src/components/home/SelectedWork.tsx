import WorkCard from './WorkCard'
import './work-card.css'
import './selected-work.css'

/* Home · Selected Work — brief 12-sep §6.3.

   Estructura:
     eyebrow  "SELECTED WORK"
     dek      "Nine founders, each at the point where..."
     grid     3/2/1 cols con align-items:start (cards de altura
              distinta no se estiran a la fila entera).

   Cards con draft:true no se rederean — es el flag para casos
   como Germán (INOUT) donde falta la cita del cliente. Cuando
   llegue, se saca el flag y la card entra al orden.

   ID de la sección: `selected-work` — ancla que apunta el nav y
   el link "See the work" de /our-founder. */

export type WorkCardData = {
  name: string
  company: string
  line: string
  href?: string
  imageSrc?: string
  imageAlt?: string
  nameVerified?: boolean
  companyVerified?: boolean
  draft?: boolean
}

export default function SelectedWork({
  cards = [],
}: {
  cards?: WorkCardData[]
}) {
  const visible = cards.filter((c) => !c.draft)
  return (
    <section id="selected-work" className="home-work">
      <div className="home-work__inner">
        <p className="home-work__eyebrow">Selected Work</p>
        <p className="home-work__dek">
          Nine founders, each at the point where what they built
          stopped explaining itself.
        </p>
        <div className="work-grid">
          {visible.map((card, i) => (
            <WorkCard
              key={(card.href ?? card.name) + i}
              {...card}
              revealIndex={Math.min(i, 5)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
