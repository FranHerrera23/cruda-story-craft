import './mike-testimonial.css'

/* /process · Mike testimonial (v6 F6 §6.3)
   Debajo de la tabla de pricing, molde idéntico al testimonio de
   Karen en la home. Negro, serif, atribución completa.

   BLOQUEADO por Fran (v6 F6 §6.3 · "el copy del testimonio de
   Mike lo pasa Fran"). Se deja el hueco reservado con el molde
   listo · marcador `[ testimonio pendiente ]` visible para
   Fran, invisible al lector. No se escribe testimonio.

   Cuando Fran pase el copy, se pega verbatim entre las comillas
   y se saca la clase pending. */

type MikeTestimonialProps = {
  quote?: string
  attribution?: string
}

export default function MikeTestimonial({ quote, attribution }: MikeTestimonialProps = {}) {
  const isPending = !quote
  return (
    <section
      id="mike-testimonial"
      className={`mike-testimonial${isPending ? ' mike-testimonial--pending' : ''}`}
    >
      <div className="mike-testimonial__inner">
        <figure className="mike-testimonial__figure">
          <blockquote className="mike-testimonial__quote">
            {isPending ? (
              <p aria-hidden="true">[ testimonial · pending copy ]</p>
            ) : (
              <p>{quote}</p>
            )}
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
