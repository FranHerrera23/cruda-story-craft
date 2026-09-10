/* SERIES · lista de episodios/entradas de una serie editorial que
   el caso produjo. INOUT: INSIDERS. Distinto de spx —spx es a
   quiénes convirtió, series es qué produjo. Cada episodio se
   nombra por quién es, no por qué compró.

   Layout: label + subtitle opcional arriba, luego lista con número
   grande a la izquierda y title/meta al lado. Similar visualmente
   a spx pero con la columna del número exacta (el orden importa).
   Note al final en 12.5px gris ("The series continues, produced
   by the client."). */
export default function BlockSeries({
  label,
  subtitle,
  episodes,
  note,
  id,
}: {
  label?: string
  subtitle?: string
  episodes: { number?: string; title: string; meta?: string }[]
  note?: string
  id?: string
}) {
  return (
    <section className="b-series" id={id}>
      {label ? <span className="lbl">{label}</span> : null}
      {subtitle ? <p className="b-series-sub">{subtitle}</p> : null}
      <ol>
        {episodes.map((ep, i) => (
          <li key={i}>
            {ep.number ? <i>{ep.number}</i> : <i aria-hidden="true" />}
            <div>
              <strong>{ep.title}</strong>
              {ep.meta ? <span>{ep.meta}</span> : null}
            </div>
          </li>
        ))}
      </ol>
      {note ? <p className="b-series-note">{note}</p> : null}
    </section>
  )
}
