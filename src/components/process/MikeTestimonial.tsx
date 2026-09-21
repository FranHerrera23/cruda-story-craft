import './mike-testimonial.css'

/* /process · Mike testimonial.

   F16.4 · 21-sep · autónomo · brief §2 · CERO placeholders en
   producción. El bloque sólo renderiza cuando Fran pasa el copy
   del testimonio. Sin quote → no se renderiza nada.

   Cuando Fran entregue el copy, se pasa como prop y el bloque
   aparece. */

type MikeTestimonialProps = {
  quote?: string
  attribution?: string
}

export default function MikeTestimonial({
  quote,
  attribution,
}: MikeTestimonialProps = {}) {
  if (!quote) return null
  return (
    <section id="mike-testimonial" className="mike-testimonial">
      <div className="mike-testimonial__inner">
        <figure className="mike-testimonial__figure">
          <blockquote className="mike-testimonial__quote">
            <p>{quote}</p>
          </blockquote>
          {attribution && (
            <figcaption className="mike-testimonial__attrib">
              {attribution}
            </figcaption>
          )}
        </figure>
      </div>
    </section>
  )
}
