import WorkCard from './WorkCard'
import './work-card.css'
import './selected-work.css'

/* Home · Selected Work — grilla de nueve retratos.

   Reemplaza el índice filtrable de /work. Los nueve casos viven acá,
   sin filtros, sin contadores, en el orden fijo del brief 10-sep.

   ID de la sección: `selected-work` — es el ancla al que el ítem
   WORK del nav apunta desde `/#selected-work`, y el destino del
   redirect 308 de `/work`.

   Encabezado: "I  Selected Work" — el `I` es un carácter literal,
   no un ícono. Referencia visual: nds.gov.

   Los 9 cards se pasan por prop `cards`. En este paso el prop viene
   vacío por default; paso 3 del brief agrega los datos. */

export type WorkCardData = {
  name: string
  company: string
  /* href opcional — BAUHOME y Mistiva no tienen ruta todavía y la
     card se rendereá no-clickable hasta que migren. Ver WorkCard. */
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
        <div className="home-work__label">
          <span>I</span>
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
