import { AnchorAdvance, Anchor, Item } from '@/components/motion/AnchorAdvance'
import './home-testimonial.css'

/* Home · TESTIMONIO + LA PRUEBA (F10 §7 · posición 04 · Commit 11 F10.3)

   Dispositivo A (AnchorAdvance):
     · ANCLA · cita (serif) + atribución (label + meta)
     · ITEMS · 2 grupos con rótulo propio, 3 celdas cada grupo:
              - WHAT WE BUILT · impressions, reach, media value
                (una sola celda de media value con el TOTAL ·
                Fran corrigió 20-sep · $60,180 · desglose y
                fuentes al pie de la celda).
              - THE BUSINESS, OVER THE SAME PERIOD · revenue
                growth, approved quotes, largest close.
              El rótulo del grupo TITULA la fila · SEPARADO POR
              REGLA · nunca encima de los números.
     · MEDIA VALUE · una sola celda por grupo · $60,180 (total ·
              LinkedIn $33,278 + Instagram $26,914) · CPMs y
              fuentes visibles al pie de la celda.

   Ground · negro (--ink-deep). Segundo bloque inverso permitido.

   COPY · brief F10 §6.2 · traducción firmada (20-sep, Fran):
     · "impressions" → "times her work appeared in front of someone"
     · "reach multiplier" → "more people than actually follow her"
   La traducción es el punto entero de la decisión · los números
   son verificados, las fuentes también · nada acá está pendiente. */

type Cell = {
  value: string
  label: string
  detail?: string
  /* Sólo la celda del media value · narrativa larga que
     explica el número + sources técnicas. */
  narrative?: string
  sources?: string
}

type Group = {
  key: string
  label: string
  cells: Cell[]
}

const GROUPS: Group[] = [
  {
    key: 'what-we-built',
    label: 'WHAT WE BUILT',
    cells: [
      {
        value: '605,050',
        label: 'times her work appeared in front of someone',
        detail: '365 days · 66% outside her network',
      },
      {
        value: '96x',
        label: 'more people than actually follow her',
        detail: 'on 6,299 followers',
      },
      {
        value: '$60,180',
        label: 'what buying that attention would have cost',
        narrative:
          'At market rates, reaching the same people through paid advertising would have cost this much in one year. She paid a fraction of it — and unlike advertising, the articles are still working.',
        sources:
          'LinkedIn 605,050 impressions × $55 CPM · 365 days. Instagram 2,242,860 views × $12 CPM · annualized from 90 days. CPMs at the floor of published 2026 benchmarks.',
      },
    ],
  },
  {
    key: 'the-business',
    label: 'THE BUSINESS, OVER THE SAME PERIOD',
    cells: [
      {
        value: '+46%',
        label: 'revenue growth',
        detail: '2025 vs 2024',
      },
      {
        value: '+27%',
        label: 'approved quotes',
      },
      {
        value: '$380K',
        label: 'largest close',
      },
    ],
  },
]

const SOURCES = 'LinkedIn Analytics, August 2026 · TRAZZO internal review, 2025'

export default function HomeTestimonial() {
  return (
    <AnchorAdvance
      id="testimonial"
      className="home-testimonial"
      threshold={240}
      /* F10.3 verify iter 2 (20-sep) · el ancla del testimonio
         incluye la cita entera (2 párrafos serif) + atribución ·
         en 1440 mide 66% del viewport. readingZone 0.78 no era
         suficiente (item top todavía tapado por el ancla). Subido
         a 0.86 · zona viva casi al pie del viewport, item vivo
         entero por debajo del ancla en las tres pantallas. */
      readingZone={0.86}
    >
      <Anchor className="home-testimonial__anchor">
        <figure className="home-testimonial__figure">
          <blockquote className="home-testimonial__quote">
            <p>
              Any founder who spent decades building something good
              knows this problem: the work is excellent and nobody
              outside your circle finds out.
            </p>
            <p>
              I had it for twenty-eight years. In early 2021 I
              decided to become visible and I hired Fran. Five years
              later, TRAZZO is not the same company.
            </p>
          </blockquote>
          <figcaption className="home-testimonial__attrib">
            <span className="home-testimonial__name">Karen Mannheim</span>
            <span className="home-testimonial__role">
              Lighting Designer, Miami. Client, 2021—2026.
            </span>
          </figcaption>
        </figure>
      </Anchor>

      <div className="home-testimonial__items">
        {GROUPS.map(group => (
          <Item key={group.key} className="home-testimonial__group">
            <p className="home-testimonial__group-label">{group.label}</p>
            <hr className="home-testimonial__group-rule" aria-hidden="true" />
            <div className="home-testimonial__cells">
              {group.cells.map((cell, i) => (
                <div key={i} className="home-testimonial__cell">
                  <div className="home-testimonial__value">{cell.value}</div>
                  <div className="home-testimonial__label">{cell.label}</div>
                  {cell.detail && (
                    <div className="home-testimonial__detail">
                      {cell.detail}
                    </div>
                  )}
                  {cell.narrative && (
                    <p className="home-testimonial__narrative">
                      {cell.narrative}
                    </p>
                  )}
                  {cell.sources && (
                    <p className="home-testimonial__cell-sources">
                      {cell.sources}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Item>
        ))}

        <p className="home-testimonial__sources">{SOURCES}</p>
      </div>
    </AnchorAdvance>
  )
}
