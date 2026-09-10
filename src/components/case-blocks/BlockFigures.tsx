import type { Figure } from './types'

/* B9 · FIGURES. §3: "Datos. Una cifra manda (5fr) y el resto apoya
   (3fr)". Un primary figure grande + una lista de support. La
   arquitectura del bloque es la misma para todos los casos que lo
   usen (Girish, Confidencial); solo cambian los valores. */
export default function BlockFigures({
  primary,
  support,
  id,
}: {
  primary: Figure
  support: Figure[]
  id?: string
}) {
  return (
    <section className="b-figures" id={id}>
      <div className="b-figures-primary">
        <span className="b-figures-v">{primary.value}</span>
        <span className="b-figures-l">{primary.label}</span>
      </div>
      {support.length > 0 ? (
        <ul className="b-figures-support">
          {support.map((f, i) => (
            <li key={i}>
              <span className="b-figures-v-sm">{f.value}</span>
              <span className="b-figures-l">{f.label}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}
