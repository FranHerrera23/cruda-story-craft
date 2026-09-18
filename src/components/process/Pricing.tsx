import './pricing.css'

/* /process · Pricing table (v6 F6 §6.2)
   Va al final de /process, después de los tres meses y antes del
   bloque de Karen. Ledger 4 (16-sep) · el precio del engagement
   es público y vive en /process.

   Regla 1 vigente · cero múltiplos o ratios contra el fee. El
   precio se publica como fee, no como fee × N o fee ÷ N.

   Retiro autorizado (Fran, 18-sep) · el barrido transversal del
   posicionamiento viejo (F8 §4 punto 8 nunca corrido fuera de
   home) encontró tres filas del Bucket A · CONTRADICTS NEW
   POSITIONING acá adentro. Salen entera cada una:

     · 'Ten to twelve a year'                       (línea 16 pre-retiro)
     · 'The person on your first call writes your
        last line'                                  (línea 18 pre-retiro)
     · 'Nothing expires on day ninety'              (línea 22 pre-retiro)

   Este archivo es el peor lugar posible para el posicionamiento
   viejo: no es prosa suelta, es una ventaja declarada frente a
   la competencia en una tabla pública. Estuvo desde el F8 (v6
   F6 §6.2 · "cinco filas verbatim del brief") y el punto 8 de
   verificación nunca se corrió acá.

   La comparación queda con UNA fila. La regla 23 aplicada por
   Fran en fase C1 vuelve a aplicar acá · "si al armar la tabla
   queda corta, no se rellena: queda corta". Cuando corra el
   rework de /process (wireframe /process · F1-F7), Fran decide
   si sale la comparación entera o si vuelve con filas nuevas
   firmadas.

   Los tres pares se retiran completos (CRUDA y Agencies) porque
   la comparación es una tupla · sin la cara CRUDA la cara
   Agencies no tiene con qué comparar. */

const ROWS: [string, string][] = [
  ['Surfaces chosen in month one', 'Surfaces sold to you'],
]

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing__inner">
        <p className="pricing__eyebrow">TRANSLATED</p>
        <h2 className="pricing__h2">Three months.</h2>

        <hr className="pricing__rule" aria-hidden="true" />

        {/* Total lidera. Título "CRUDA" del engagement + "Agencies"
            como columna de contraste. */}
        <div className="pricing__lead">
          <div className="pricing__col pricing__col--cruda">
            <div className="pricing__price">$19,500</div>
            <div className="pricing__price-note">flat, three months</div>
          </div>
          <div className="pricing__col pricing__col--other">
            <div className="pricing__label">Agencies</div>
            <div className="pricing__price-note">
              Proposals, retainers, scope creep
            </div>
          </div>
        </div>

        <hr className="pricing__rule" aria-hidden="true" />

        <div className="pricing__rows">
          {ROWS.map(([left, right], i) => (
            <div key={i} className="pricing__row">
              <div className="pricing__col pricing__col--cruda">{left}</div>
              <div className="pricing__col pricing__col--other">{right}</div>
            </div>
          ))}
        </div>

        <hr className="pricing__rule" aria-hidden="true" />

        {/* Línea de pago · registro operativo · grotesca 13px
            tracking .55em. */}
        <p className="pricing__payment">
          $6,500 PER MONTH &middot; 50% UPFRONT &middot; 50% AT THE
          START OF MONTH THREE
        </p>

        <p className="pricing__media">
          The media budget is yours and sits outside the engagement.
        </p>
      </div>
    </section>
  )
}
