/* B4 · PROSE. Prosa a ancho completo. Etiqueta 2fr / cuerpo 10fr.
   La label es opcional — algunas prosas van sin ella (después
   de un pull, por ejemplo). */
export default function BlockProse({
  label,
  paragraphs,
  id,
}: {
  label?: string
  paragraphs: string[]
  id?: string
}) {
  return (
    <div className="b-prose" id={id}>
      {label ? <span className="lbl">{label}</span> : <span aria-hidden="true" />}
      <div className="body">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  )
}
