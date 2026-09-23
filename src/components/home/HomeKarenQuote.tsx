import './home-karen-quote.css'

/* Home · KAREN · LA CITA · plano negro · F11.0 (21-sep · autónomo).

   Split D1 firmado: la cita y la prueba, dos planos distintos.
   D4 firmado: sin asset de retrato → cita a ancho completo.

   Copy · prototipo home-v3, textual:
     "The work is excellent and nobody outside your circle finds
      out. I had it for twenty-eight years."
     "In early 2021 I decided to become visible and I hired Fran.
      Five years later, TRAZZO is not the same company."

   La serif · única aparición permitida en el sitio. Regla §2. */

export default function HomeKarenQuote() {
  return (
    <section
      className="plane plane--black home-karen-quote"
      id="karen-quote"
      data-plane
    >
      <div className="plane__in">
        <div className="plane__top">
          <p className="eyebrow">What a client says</p>
          <blockquote className="home-karen-quote__body">
            <p className="quote">
              The work is excellent and nobody outside your circle finds
              out. I had it for twenty-eight years.
            </p>
            <p className="quote">
              In early 2021 I decided to become visible and I hired
              Fran. Five years later, TRAZZO is not the same company.
            </p>
          </blockquote>
          <div className="rule" />
        </div>
        <div className="data data--2">
          <div className="cell">
            <p className="cell__l">Who</p>
            <p className="cell__v">Karen Mannheim</p>
            <p className="cell__n">Founder, TRAZZO Lighting</p>
          </div>
          <div className="cell">
            <p className="cell__l">Client since</p>
            <p className="cell__v">2021 — 2026</p>
            <p className="cell__n">Five years</p>
          </div>
        </div>
      </div>
    </section>
  )
}
