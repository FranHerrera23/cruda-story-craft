/* B10 · BUILT. Dos columnas: "What we built" (izquierda) y
   "Observable change" (derecha). Las etiquetas son fijas — son parte
   de la promesa del bloque, no de la copy del caso.

   Si una columna llega vacía (changes: []), no se renderea — no
   tiene sentido mostrar un h2 sin lista debajo. Cuando llegue el
   contenido, se agrega y la columna aparece. Preserva el layout
   1fr/1fr cuando ambas están, y a full-width cuando solo una. */
export default function BlockBuilt({
  built,
  changes,
  id,
}: {
  built: string[]
  changes: string[]
  id?: string
}) {
  const hasBuilt = built.length > 0
  const hasChanges = changes.length > 0
  if (!hasBuilt && !hasChanges) return null
  return (
    <section
      className={`b-built${!hasBuilt || !hasChanges ? ' b-built--single' : ''}`}
      id={id}
    >
      {hasBuilt ? (
        <div>
          <h2>What we built</h2>
          <ul>
            {built.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {hasChanges ? (
        <div>
          <h2>Observable change</h2>
          <ul>
            {changes.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  )
}
