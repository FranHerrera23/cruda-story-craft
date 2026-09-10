/* CLAIM — línea display en var(--c-type), con gloss opcional (la
   lectura en el otro idioma) y note opcional (contexto).
   Sólo válido dentro de un slab — el fondo lo aporta el slab
   parent, este bloque no pinta nada.

   `text` acepta <br> y <b>...</b> inline (INOUT: "Vos elegís<br>
   de qué lado <b>estar.</b>"). Se inyecta via dangerouslySetInnerHTML
   como el H1 del head — es parte del contrato de identidad del
   caso, no copy que reescribimos.

   El claim no lleva prosa nuestra: es una línea de marca (texto
   del caso, escrito por el cliente o para el cliente). NO entra
   al pool de verificación de pull quotes. */
export default function BlockClaim({
  text,
  gloss,
  note,
}: {
  text: string
  gloss?: string
  note?: string
}) {
  return (
    <div className="slab-in">
      <p className="claim" dangerouslySetInnerHTML={{ __html: text }} />
      {gloss ? <p className="gloss">{gloss}</p> : null}
      {note ? <p className="note">{note}</p> : null}
    </div>
  )
}
