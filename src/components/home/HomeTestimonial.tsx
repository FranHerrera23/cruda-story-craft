import './home-testimonial.css'

/* Home · testimonio — brief 12-sep §6.6.

   Sección nueva. Va después de The First 90 Days, antes de essays.
   Fondo --ink, texto --paper. Es el ÚNICO inverso de la home — el
   cierre pasó a --paper (§6.8) para que este sea el corte único.

   Sin foto, sin comillas decorativas, sin filete vertical. La
   escala y el inverso hacen todo el trabajo. Cita íntegra, sin
   recortar.

   Rotable: cuando lleguen los testimonios de Mike, José o Germán,
   esta sección puede alternar. Hoy va Karen sola.

   Motion: data-reveal="text" en la sección. RevealScroll global
   la observa. Motion v2 §3b va a mejorar esto con revelado por
   línea cuando llegue su turno. */

export default function HomeTestimonial() {
  return (
    <section
      id="testimonial"
      className="home-testimonial"
      data-reveal="text"
    >
      <div className="home-testimonial__inner in">
        <figure className="home-testimonial__figure">
          <blockquote className="home-testimonial__quote">
            <p>
              Any founder who spent decades building something good
              knows this problem: the work is excellent and nobody
              outside your circle finds out.
            </p>
            <p>
              I had it for twenty-eight years. In early 2021 I
              decided to become visible and I hired Fran. Five years
              later, TRAZZO is not the same company.
            </p>
          </blockquote>
          <figcaption className="home-testimonial__attrib">
            <span className="home-testimonial__name">Karen Mannheim</span>
            <span className="home-testimonial__role">
              Lighting Designer, Miami. Client. (August 2026)
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
