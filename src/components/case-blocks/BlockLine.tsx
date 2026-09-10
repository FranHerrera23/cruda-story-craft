/* LINE · frase de código editorial a tamaño display, sobre blanco.
   Prosa nuestra — una regla escrita, un principio, no un pull ni
   un claim. INOUT L57 la usa para el código fotográfico.

   Content entra al pool de pull quotes (es prosa nuestra). */
export default function BlockLine({
  text,
  id,
}: {
  text: string
  id?: string
}) {
  return (
    <section className="b-line" id={id}>
      <p>{text}</p>
    </section>
  )
}
