/* METHOD · tres (o N) movimientos numerados en grilla de columnas.
   Cada movimiento tiene número ("Movement one"), heading display,
   y prosa larga. Border-top negro fuerte separador de sección.

   Confidencial es el caso que lo usa: cuando el cliente no puede
   ser el sujeto visible, el trabajo mismo es la prueba. */
export default function BlockMethod({
  label,
  movements,
  id,
}: {
  label?: string
  movements: {
    number: string
    heading: string
    paragraphs: string[]
  }[]
  id?: string
}) {
  return (
    <section className="b-method" id={id}>
      {label ? <span className="lbl">{label}</span> : null}
      <div className="set">
        {movements.map((m, i) => (
          <div className="mv" key={i}>
            <i>{m.number}</i>
            <h3>{m.heading}</h3>
            {m.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
