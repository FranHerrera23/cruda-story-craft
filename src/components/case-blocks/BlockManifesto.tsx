/* MANIFESTO — dos columnas: prosa de argumento a la izquierda,
   lista de líneas de marca en var(--c-type) a la derecha.
   Sólo válido dentro de un slab; el fondo lo pinta el slab.

   `who` es el rótulo grande (INOUT: "INSIDERS"), en la face del
   cliente. Las lines aceptan <b>...</b> inline para acentuar
   ciertas palabras (INOUT: "the ones who <b>dream awake.</b>").

   Las lines son copy del cliente. NO entran al pool de
   verificación de pull quotes — misma política que passages.excerpt.
   Los paragraphs de la izquierda son prosa nuestra sobre el
   cliente; SÍ entran al pool. */
export default function BlockManifesto({
  who,
  paragraphs,
  lines,
}: {
  who: string
  paragraphs: string[]
  lines: string[]
}) {
  return (
    <div className="slab-in manif">
      <div>
        <p className="who">{who}</p>
        {paragraphs.map((p, i) => (
          <p key={i} style={i > 0 ? { marginTop: 20 } : undefined}>
            {p}
          </p>
        ))}
      </div>
      <ul>
        {lines.map((line, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: line }} />
        ))}
      </ul>
    </div>
  )
}
