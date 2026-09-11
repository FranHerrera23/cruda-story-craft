import './why-now.css'

/* Home · why-now — "Half the Value".
   Brief 10-sep §3. Copy verbatim, NO CHANGE.

   Va entre el hero y Selected Work. Es el problema planteado antes
   de mostrar cualquier pieza de trabajo — el equivalente estructural
   de "Ten Billion Hours" de la referencia. Sin este bloque las cards
   peladas no tienen contexto.

   El título lleva un superíndice `¹` que linkea al ancla `#ref-1`
   del footnote debajo. Hasta que Fran confirme la fuente, el footnote
   entra con `data-placeholder-text="true"` per §8. */

export default function WhyNow() {
  return (
    <section id="why-now" className="why-now">
      <div className="why-now__in in">
        <h2>
          Half the Value
          <sup>
            <a href="#ref-1" aria-label="See footnote 1">1</a>
          </sup>
        </h2>
        <div className="why-now__body">
          <p>
            Roughly half of what your company is worth sits in you. Who
            trusts you. Who recommends you. Who picks up when you call.
            It doesn&apos;t appear on any balance sheet and it is the
            most valuable thing the business owns.
          </p>
          <p>
            That holds until something shifts. A generation hands over.
            Two studios become one. You move into a category that has
            never heard of you. You start again.
          </p>
          <p>
            The reputation stays where it was. It doesn&apos;t transfer.
            And the story you have is the story of the company you used
            to be — which means half the value is sitting in a version
            of you that no longer exists.
          </p>
          <p>
            Narrative is business infrastructure. Most companies only
            find that out at the moment they need it to hold.
          </p>
        </div>
      </div>
      <ol className="why-now__refs refs">
        <li id="ref-1" data-placeholder-text="true">
          1. [Fuente pendiente]
        </li>
      </ol>
    </section>
  )
}
