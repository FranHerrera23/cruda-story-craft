/* THESIS · statement narrativo dentro de un slab. Diferente de
   claim (display-typographic en --c-type con gloss/note): thesis
   es prosa argumental en --g weight 700 tracking tight, con un
   reading opcional en 14px gris debajo.

   Sólo válido dentro de un slab — el fondo lo pinta el slab. MTC
   lo usa para las dos afirmaciones que arman el argumento del
   caso (voz vs positioning, dos generaciones). */
export default function BlockThesis({
  statement,
  reading,
}: {
  statement: string
  reading?: string
}) {
  return (
    <div className="slab-in thesis">
      <p className="thesis-statement">{statement}</p>
      {reading ? <p className="thesis-reading">{reading}</p> : null}
    </div>
  )
}
