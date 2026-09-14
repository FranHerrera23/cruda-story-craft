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

   Motion v3 §4 (14-sep) — la cita se recortó al segundo párrafo.
   El primero repetía la tesis de `why-now` dicha por Karen; el
   lector ya la había leído cinco secciones antes. El segundo es
   el único que prueba algo — contrató, siguió cinco años, la
   empresa cambió. El primero queda íntegro en `/our-founder`
   (líneas 182-190), donde no compite con nada. Recortar la cita
   es legítimo mientras no cambie el sentido; acá lo concentra.

   Motion: el <p> lleva `data-reveal="lines"`. LineReveals mide el
   corte real y reescribe con `.rv-line > span` para que las líneas
   suban en stagger. */

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
            <p data-reveal="lines">
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
