import WorkCard from './WorkCard'
import './work-card.css'
import './selected-work.css'

/* Home · Selected Work — brief 12-sep §6.3 · v6 F4 (17-sep).

   Estructura:
     eyebrow  "SELECTED WORK"
     dek      "N founders, each at the point where..."  (derivado)
     grid     3/2/1 cols con align-items:start.

   Rule 25 (ledger, 16-sep) · el dek deriva el número de
   founders del count de cards visibles. Antes decía "Eight
   founders" con 9 cards renderizando · ese era el bug canónico
   que motivó la regla. Ahora el número se ajusta solo si una
   card entra o sale.

   Cards con draft:true no se rederean. Las cards sin foto van
   con placeholder:true (Fran 15-sep · ledger 23). */

export type WorkCardData = {
  name: string
  company: string
  /* v6 §1 · ciudad + región · siempre visible en la card. Formato
     dictado por Fran: neighborhood optional, city, region. */
  location: string
  line: string
  href?: string
  imageSrc?: string
  imageAlt?: string
  nameVerified?: boolean
  companyVerified?: boolean
  draft?: boolean
  placeholder?: boolean
  /* v6 §1 · scope[0] es SIEMPRE 'NARRATIVE & BRAND STRATEGY' —
     la constante del sistema. scope[1..] son las superficies del
     caso en el orden del brief. Se muestra en hover; en touch va
     siempre visible. */
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
