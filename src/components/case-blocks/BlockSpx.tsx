/* SPX · specifiers. Lista jerárquica de entidades — cada fila es
   un name (strong, tamaño display) + meta (span, gris chico).
   Rows con border-bottom y padding vertical. Sin prosa.

   INOUT: quién especifica el sistema (studios de arquitectura +
   sector). MTC: hitos de AGP en sesenta años (hito + año/nota).

   Src opcional al final — atribución de la fuente ("Published by
   AGP, or stated publicly by José Mannheim under his own name.")
   en 12.5px gris. */
export default function BlockSpx({
  label,
  items,
  src,
  id,
}: {
  label?: string
  items: { title: string; meta?: string }[]
  src?: string
  id?: string
}) {
  return (
    <section className="spx" id={id}>
      {label ? <span className="lbl">{label}</span> : null}
      <ol>
        {items.map((item, i) => (
          <li key={i}>
            <strong>{item.title}</strong>
            {item.meta ? <span>{item.meta}</span> : null}
          </li>
        ))}
      </ol>
      {src ? <p className="src">{src}</p> : null}
    </section>
  )
}
