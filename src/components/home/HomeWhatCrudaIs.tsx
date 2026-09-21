import './home-what-cruda-is.css'

/* Home · QUÉ ES CRUDA · plano 01 · F11.0 (21-sep · autónomo).

   AnchorAdvance retirado. La sección es un plano del apilado:
   .plane.plane--paper con .plane__in centrado, anatomía fija:
   eyebrow · name · rule · lede · celdas de dato al pie.

   Copy · prototipo home-v3 firmado, textual.
     eyebrow "What CRUDA is"
     name    "We translate cultures into business."
     lede    "CRUDA is a communications company."
     data    Outward · Inward · Across (celdas del prototipo).

   Reveal + escala + fade los mete el motor (PlanesStack). */

export default function HomeWhatCrudaIs() {
  return (
    <section
      className="plane plane--paper home-wci"
      id="what-cruda-is"
      data-plane
    >
      <div className="plane__in">
        <div className="plane__top">
          <p className="eyebrow">What CRUDA is</p>
          <h2 className="name">We translate cultures into business.</h2>
          <div className="rule" />
          <p className="lede">CRUDA is a communications company.</p>
        </div>
        <div className="data marks">
          <div className="cell mark">
            <p className="cell__l">Outward</p>
            <p className="cell__v">
              Between a founder and a market that never heard of them.
            </p>
          </div>
          <div className="cell mark">
            <p className="cell__l">Inward</p>
            <p className="cell__v">
              Between a company and its own people.
            </p>
          </div>
          <div className="cell mark">
            <p className="cell__l">Across</p>
            <p className="cell__v">
              Between capital from one part of the world and the country
              it just landed in.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
