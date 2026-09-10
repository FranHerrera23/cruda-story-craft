/* PILLARS · lista numerada de pilares. Cada uno lleva un número
   (i, gris chico), un heading display en --g weight 700, y un body
   de prosa. Border-top negro, border-bottom en --rule por fila.
   Note opcional al final en 12.5px gris.

   Girish lo usa para tres pilares que hacen que doce piezas se
   lean como un argumento en lugar de doce opiniones.

   El body ES prosa nuestra sobre el argumento del caso — SÍ entra
   al pool de pull quotes. El heading es display, no prosa argumental
   — NO entra al pool. */
export default function BlockPillars({
  label,
  items,
  note,
  id,
}: {
  label?: string
  items: { number: string; heading: string; body: string }[]
  note?: string
  id?: string
}) {
  return (
    <section className="b-pillars" id={id}>
      {label ? <span className="lbl">{label}</span> : null}
      <ol>
        {items.map((item, i) => (
          <li key={i}>
            <i>{item.number}</i>
            <div>
              <h3>{item.heading}</h3>
              <p>{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
      {note ? <p className="note">{note}</p> : null}
    </section>
  )
}
