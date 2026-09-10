import type { PieceLine } from './types'

/* PIECE · pieza publicada recreada entera. Columna 8fr de texto
   con apertura display + frases bisagra + párrafos + sidebar sticky
   3fr con métricas de engagement, fuente, y una nota sobre por
   qué esa pieza importa.

   Reemplaza a los tres bloques que se pisaban en la primera
   iteración de Girish (tarjetas, captura, texto).

   Cada línea del contenido lleva su kind (open/turn/p), y el
   componente resuelve la clase CSS. */
export default function BlockPiece({
  label,
  pieceTitle,
  content,
  sidebar,
  note,
  id,
}: {
  label?: string
  pieceTitle?: string
  content: PieceLine[]
  sidebar: {
    metrics: { value: string; label: string }[]
    src?: string
    why?: string
  }
  note?: string
  id?: string
}) {
  return (
    <section className="b-piece" id={id}>
      {label ? <span className="lbl">{label}</span> : null}
      <div className="piece">
        <div className="txt">
          {pieceTitle ? <h3 className="piece-title">{pieceTitle}</h3> : null}
          {content.map((line, i) => {
            const className =
              line.kind === 'open'
                ? 'open'
                : line.kind === 'turn'
                  ? 'turn'
                  : undefined
            /* Content lines aceptan HTML inline (ej. <span class="redact">
               para tapar nombres de empresa en confidenciales). Se inyecta
               via dangerouslySetInnerHTML — el string viene del data file,
               es trusted. */
            return (
              <p
                key={i}
                className={className}
                dangerouslySetInnerHTML={{ __html: line.text }}
              />
            )
          })}
        </div>
        <aside className="side">
          {sidebar.metrics.map((m, i) => (
            <div className="m" key={i}>
              <b>{m.value}</b>
              <span>{m.label}</span>
            </div>
          ))}
          {sidebar.src ? <p className="src">{sidebar.src}</p> : null}
          {sidebar.why ? <p className="why">{sidebar.why}</p> : null}
        </aside>
      </div>
      {note ? <p className="note">{note}</p> : null}
    </section>
  )
}
