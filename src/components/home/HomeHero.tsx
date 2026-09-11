import './home-hero.css'

/* Home · Hero — reemplazo del hero v7 per brief 10-sep §2.

   Copy única, sin eyebrow, sin sub, sin tags, sin botón. La copy
   vieja se preserva en content/orphaned/home-hero-v1.md.

   Layout: dos columnas 1fr / 1.4fr desde 1000px, el H1 en la
   segunda. En mobile pasa a una columna. Weight 400 (regular),
   no bold — la referencia usa regular a tamaño grande y ese
   contraste es lo que hace que se lea como editorial y no como
   landing.

   Fondo `--paper-warm` (#F2F2F0). Alto mínimo 72vh — la costura
   contra `why-now` es el corte de color, no un separator. */
export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero__inner">
        <h1>
          CRUDA builds the narrative that founder-led companies need
          at the point where what they built stopped explaining
          itself.
        </h1>
      </div>
    </section>
  )
}
