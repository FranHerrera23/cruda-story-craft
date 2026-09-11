import './home-hero.css'

/* Home · Hero — brief 11-sep §2.

   Estructura: la sección ES la grilla de 12 columnas desde 1000px.
   El H1 se posiciona en `grid-column: 7 / span 6`. Sin wrapper
   inner — el vacío de la izquierda es margen del sistema, no una
   columna vacía renderizada. Copy verbatim del brief 10-sep §2. */
export default function HomeHero() {
  return (
    <section className="home-hero">
      <h1>
        CRUDA builds the narrative that founder-led companies need
        at the point where what they built stopped explaining
        itself.
      </h1>
    </section>
  )
}
