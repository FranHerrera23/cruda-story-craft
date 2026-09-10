import type { Fact } from './types'

/* B1 · HEAD. Asimétrico: 8fr título / 3fr ficha.
   El title puede contener <b>...</b> para acentuar (INOUT: IN<b>OUT</b>).
   Se pasa como string y se inyecta con dangerouslySetInnerHTML porque
   el acento es parte del contrato de identidad del caso — no es copy
   que reescribimos. Data file → render, sin transformación. */
export default function BlockHead({
  title,
  oneLiner,
  facts,
}: {
  title: string
  oneLiner: string
  facts: Fact[]
}) {
  return (
    <header className="b-head" id="top">
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <p className="one">{oneLiner}</p>
      </div>
      <div className="facts">
        {facts.map((f) => (
          <div key={f.label}>
            <span>{f.label}</span>
            <span>{f.value}</span>
          </div>
        ))}
      </div>
    </header>
  )
}
