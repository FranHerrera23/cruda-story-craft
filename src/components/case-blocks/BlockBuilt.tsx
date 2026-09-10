/* B10 · BUILT. Dos columnas: "What we built" (izquierda) y
   "Observable change" (derecha). Las etiquetas son fijas — son parte
   de la promesa del bloque, no de la copy del caso. Los items se
   listan sin bullet, cada uno con border-bottom que respira. */
export default function BlockBuilt({
  built,
  changes,
  id,
}: {
  built: string[]
  changes: string[]
  id?: string
}) {
  return (
    <section className="b-built" id={id}>
      <div>
        <h2>What we built</h2>
        <ul>
          {built.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Observable change</h2>
        <ul>
          {changes.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
