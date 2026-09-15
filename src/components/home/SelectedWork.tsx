import WorkCard from './WorkCard'
import './work-card.css'
import './selected-work.css'

/* Home · Selected Work — brief 12-sep §6.3.

   Estructura:
     eyebrow  "SELECTED WORK"
     dek      "Eight founders, each at the point where..."
     grid     3/2/1 cols con align-items:start (cards de altura
              distinta no se estiran a la fila entera).

   Cards con draft:true no se rederean — el flag sigue existiendo
   por si un caso hay que ocultar en el futuro, pero las cards sin
   foto ya no se marcan como draft: van con placeholder:true (Fran
   15-sep · ledger 23 · "sin FOTO la card se queda").

   ID de la sección: `selected-work` — ancla que apunta el nav y
   el link "See the work" de /our-founder.

   Contradicción viva con el dek · con INOUT y Mistiva restauradas
   (addendum 15-sep) hoy hay 9 cards visibles y el dek dice
   "Eight founders". Bug vivo del §9 del v5 · no se corrige acá
   porque el número final depende de si Arman/BAUHOME queda o
   sale (decisión de Fran, arrastra el dek). */

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
  placeholder?: boolean
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
          Eight founders, each at the point where what they built
          stopped explaining itself.
        </p>
        <div className="work-grid">
          {visible.map((card, i) => (
            <WorkCard
              key={(card.href ?? card.name) + i}
              {...card}
              ordinal={String(i + 1).padStart(2, '0')}
              revealIndex={Math.min(i, 5)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
