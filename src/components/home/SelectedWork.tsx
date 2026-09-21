import WorkCard from './WorkCard'
import './work-card.css'
import './selected-work.css'

/* Home · Selected Work · F19-B (21-sep).
   Restaurado desde 577f104 (diseño aprobado). Cambios de DATOS
   en `selected-work.ts`; acá sólo:
     · Titular · "Selected work." (Enmienda 3 · F19-B.2)
     · Retira el eyebrow "Selected Work" y el helper de conteo
       de founders (F19-B, sin conteo).
     · Grilla 3/2/1 cols con align-items:start · sin cambios. */

export type WorkCardData = {
  name: string
  company: string
  location: string
  line: string
  href?: string
  imageSrc?: string
  imageAlt?: string
  nameVerified?: boolean
  companyVerified?: boolean
  draft?: boolean
  placeholder?: boolean
  /* Tercera línea de la card. F19-B.2 · en lugar de "NARRATIVE &
     BRAND STRATEGY · WEB · DEMAND" se muestra el servicio (uno o
     dos: Translated / Transmission / Interpreted / The Read).
     Cuando está vacío, la línea se oculta (Arman). */
  scope: string[]
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
        <h2 className="home-work__title">Selected work.</h2>
        <div className="home-work__rule" aria-hidden="true" />
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
