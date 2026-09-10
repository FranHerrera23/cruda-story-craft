import type { Fact } from './types'

/* B11 · CREDITS. Ficha (Client / Moment / Years / Team) + línea de
   atribución al final. La ficha renderea como grid de 4 columnas
   desde 760px. */
export default function BlockCredits({
  facts,
  attribution,
  id,
}: {
  facts: Fact[]
  attribution: string
  id?: string
}) {
  return (
    <section className="b-credits" id={id}>
      <dl className="row">
        {facts.map((f) => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
      <p className="attrib">{attribution}</p>
    </section>
  )
}
