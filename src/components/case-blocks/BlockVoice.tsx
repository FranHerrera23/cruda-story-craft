/* B8 · VOICE. Voz del cliente, en el flujo. §3: NO un slab negro
   al final. Se rendereá como cualquier otro bloque, con la misma
   grilla 2fr/10fr que la prosa: label a la izquierda, cita a la
   derecha, atribución debajo.

   La cita NO entra al pool de verificación de pull quotes — es
   copy del cliente, no prosa de la página. El compositor lo
   respeta por defecto: verifyPullQuotes solo suma prose/band/
   passages, no voice. */
export default function BlockVoice({
  label,
  quote,
  attribution,
  id,
}: {
  label?: string
  quote: string
  attribution: string
  id?: string
}) {
  return (
    <section className="b-voice" id={id}>
      {label ? <span className="lbl">{label}</span> : <span aria-hidden="true" />}
      <div>
        <blockquote>{quote}</blockquote>
        <cite>{attribution}</cite>
      </div>
    </section>
  )
}
