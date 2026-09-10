import type { Figure } from './types'

/* B9 · FIGURES. §3: "Datos. Una cifra manda y el resto apoya."
   Lista plana — el primer item se renderea más grande via CSS
   (:first-child), el resto en escala de apoyo. Tres, cuatro items,
   el layout se acomoda vía flex.

   Cada item puede tener un `hint` opcional (small note debajo del
   label — fuente, atribución, período). MTC/Girish lo usan para
   linkear al origen del dato. */
export default function BlockFigures({
  items,
  id,
}: {
  items: Figure[]
  id?: string
}) {
  return (
    <section className="b-figures" id={id}>
      {items.map((f, i) => (
        <div key={i}>
          <b>{f.value}</b>
          <p>{f.label}</p>
          {f.hint ? <small>{f.hint}</small> : null}
        </div>
      ))}
    </section>
  )
}
