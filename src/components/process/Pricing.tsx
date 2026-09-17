import './pricing.css'

/* /process · Pricing table (v6 F6 §6.2)
   Va al final de /process, después de los tres meses y antes del
   bloque de Karen. Ledger 4 (16-sep) · el precio del engagement
   es público y vive en /process.

   Copy VERBATIM del brief v6 F6 §6.2. Cinco filas de comparación
   contra "Agencies", línea de pago abajo con registro operativo,
   y el statement de media budget al final.

   Regla 1 vigente · cero múltiplos o ratios contra el fee. El
   precio se publica como fee, no como fee × N o fee ÷ N. */

const ROWS: [string, string][] = [
  ['Ten to twelve a year', 'As many as fit'],
  [
    'The person on your first call writes your last line',
    'An account manager',
  ],
  ['Surfaces chosen in month one', 'Surfaces sold to you'],
  ['Nothing expires on day ninety', 'The campaign ends'],
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
