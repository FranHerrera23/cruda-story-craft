import { PROOF_COMPACT, PROOF_SOURCES } from '@/content/proof/karen'
import './home-testimonial.css'

/* Home · testimonio + LA PRUEBA (F9 §2.7.1, Commit 5, 19-sep).

   Antes: el testimonio de Karen vivía en un bloque negro y las
   tres cifras (605,050 · 96x · $380K) vivían en un `<Proof
   variant="compact">` aparte sobre papel. Al retirar la H2
   huérfana del Proof en `3c2285d` (18-sep), la banda quedó
   flotando sin contexto.

   Ahora los dos ítems son un solo bloque negro continuo:

     cita (serif) → atribución (label + meta) → regla →
     tres cifras (grot) → fuentes (meta)

   Karen dice qué pasó, los números lo confirman. Juntos son
   prueba. Separados, la cita es opinión y las cifras son
   adorno.

   Data de las cifras viene de `PROOF_COMPACT` (proof/karen.ts),
   misma fuente que la banda de /process. Un solo lugar para
   editar los números. */

export default function HomeTestimonial() {
  return (
    <section
      id="testimonial"
      className="home-testimonial"
      data-reveal-seq
    >
      <div className="home-testimonial__inner in">
        <figure className="home-testimonial__figure">
          <blockquote
            className="home-testimonial__quote"
            data-seq="body"
          >
            <p data-reveal="lines">
              Any founder who spent decades building something good
              knows this problem: the work is excellent and nobody
              outside your circle finds out.
            </p>
            <p data-reveal="lines">
              I had it for twenty-eight years. In early 2021 I
              decided to become visible and I hired Fran. Five years
              later, TRAZZO is not the same company.
            </p>
          </blockquote>
          <figcaption
            className="home-testimonial__attrib"
            data-reveal="text"
            data-seq="body"
          >
            <span className="home-testimonial__name">Karen Mannheim</span>
            <span className="home-testimonial__role">
              Lighting Designer, Miami. Client, 2021—2026.
            </span>
          </figcaption>
        </figure>

        <hr className="home-testimonial__rule" aria-hidden="true" />

        {/* LA PRUEBA · tres cifras dentro del mismo bloque negro.
            F9 §2.7.1 · las celdas entran de a una izq→der.
            Data de PROOF_COMPACT · una sola fuente entre home y
            /process. */}
        <div
          className="home-testimonial__proof"
          data-reveal="text"
          data-seq="body"
        >
          {PROOF_COMPACT.map((stat, i) => (
            <div
              key={i}
              className="home-testimonial__stat"
              data-stagger={String(i)}
            >
              <div className="home-testimonial__value">{stat.value}</div>
              <div className="home-testimonial__label">{stat.label}</div>
              {stat.detail && (
                <div className="home-testimonial__detail">{stat.detail}</div>
              )}
            </div>
          ))}
        </div>

        <p
          className="home-testimonial__sources"
          data-reveal="text"
          data-seq="body"
        >
          {PROOF_SOURCES}
        </p>
      </div>
    </section>
  )
}
