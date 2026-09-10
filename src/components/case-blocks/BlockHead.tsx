import type { Fact } from './types'

/* B1 · HEAD. Asimétrico: 8fr título / 3fr ficha.

   El title puede contener <b>...</b> para acentuar (INOUT: IN<b>OUT</b>).
   Se pasa como string y se inyecta con dangerouslySetInnerHTML porque
   el acento es parte del contrato de identidad del caso — no es copy
   que reescribimos.

   Tags: texto plano separado por punto medio ( · ), 13px gris, bajo
   el one-liner. NO son links (Fran: "nadie hace clic en ese tag,
   está para orientar"). NO son píldoras redondeadas (§7 regla 4). */
export default function BlockHead({
  title,
  oneLiner,
  tags,
  facts,
}: {
  title: string
  oneLiner: string
  tags?: string[]
  facts: Fact[]
}) {
  return (
    <header className="b-head" id="top">
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <p className="one">{oneLiner}</p>
        {tags && tags.length > 0 ? (
          <p className="b-head-tags">{tags.join(' · ')}</p>
        ) : null}
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
