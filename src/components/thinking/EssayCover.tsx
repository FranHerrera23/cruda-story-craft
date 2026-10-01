/* F54 §3 · Portada tipográfica para ensayos sin hero.
   Fondo #000, raya naranja arriba-izq de 40×2 px, título en crema
   abajo-izq. Aspect 16:9 (como la imagen que reemplaza). Puramente
   HTML/CSS, sin JS. `aria-hidden` porque el título se repite debajo. */

export default function EssayCover({
  title,
  compact = false,
}: {
  title: string
  /* La portada en mobile usa padding 18 (vs 22 desktop) y título
     20 px (vs 22). `compact` lo controla por si en el futuro
     queremos una portada chica en otro contexto · hoy la decisión
     la toma el media query, no la prop. */
  compact?: boolean
}) {
  return (
    <div
      className={`essay-cover${compact ? ' essay-cover--compact' : ''}`}
      aria-hidden="true"
    >
      <span className="essay-cover__mark" />
      <p className="essay-cover__title">{title}</p>
    </div>
  )
}
