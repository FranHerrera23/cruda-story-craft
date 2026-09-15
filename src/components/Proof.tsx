import {
  PROOF_HEADER,
  PROOF_FULL,
  PROOF_COMPACT,
  PROOF_SOURCES,
  type ProofStat,
  type ProofBand,
} from '@/content/proof/karen'
import './proof.css'

/* Proof · Karen Mannheim · componente shared entre home y /process.
   Brief 03 P3 + Brief 04 P3 (14-sep).

   Dos densidades desde el primer commit — es la abstracción que
   pide el brief para que la home y /process consuman la misma
   fuente de datos sin divergir:

     variant="compact"  → home. Tres números en fila.
     variant="full"     → /process. Dos bandas completas.

   Los números revelan como BLOQUE, no dígito por dígito. Un
   contador se lee como gimmick y el sistema no hace ese gesto
   (Brief 03 P5, Brief 04 P7).

   Sin link al case study — el de Karen todavía no existe (Brief
   03 P3). No dejar un link muerto.

   Fondo blanco — es el único bloque de la home que precede al
   testimonio en negro. El corte de color marca el momento en que
   el argumento deja de ser nuestro. */

type ProofProps = {
  variant?: 'compact' | 'full'
  /* La home no repite el encabezado del bloque de prueba — ya
     viene de la coda del `first-90`. `/process` sí lo lleva. */
  showHeader?: boolean
}

function StatCell({ stat }: { stat: ProofStat }) {
  return (
    <div className="proof__stat">
      <div className="proof__value">{stat.value}</div>
      <div className="proof__label">{stat.label}</div>
      {stat.detail && (
        <div className="proof__detail">{stat.detail}</div>
      )}
    </div>
  )
}

function BandRow({ row }: { row: ProofStat[] }) {
  return (
    <div className="proof__row">
      {row.map((stat, i) => (
        <StatCell key={i} stat={stat} />
      ))}
    </div>
  )
}

function Band({ band }: { band: ProofBand }) {
  return (
    <div className="proof__band">
      <p className="proof__band-label">{band.label}</p>
      {band.rows.map((row, i) => (
        <BandRow key={i} row={row} />
      ))}
    </div>
  )
}

export default function Proof({
  variant = 'compact',
  showHeader = true,
}: ProofProps) {
  return (
    <section
      id="proof"
      className={`proof proof--${variant}`}
      data-reveal-seq
    >
      <div className="proof__in in">
        {showHeader && (
          <header className="proof__header">
            <h2
              className="proof__h2"
              data-seq="title"
              data-reveal="lines"
            >
              {PROOF_HEADER.h2[0]}
              <br />
              {PROOF_HEADER.h2[1]}
            </h2>
            <p
              className="proof__attribution"
              data-seq="body"
              data-reveal="text"
            >
              <span className="proof__client">
                {PROOF_HEADER.attribution}
              </span>
              <span className="proof__period">
                {PROOF_HEADER.period}
              </span>
            </p>
          </header>
        )}

        {variant === 'full' ? (
          <div
            className="proof__bands"
            data-seq="body"
            data-reveal="text"
          >
            {PROOF_FULL.map((band, i) => (
              <Band key={i} band={band} />
            ))}
          </div>
        ) : (
          <div
            className="proof__compact"
            data-seq="body"
            data-reveal="text"
          >
            <BandRow row={PROOF_COMPACT} />
          </div>
        )}

        {/* Fuentes citadas — Brief 08 P4. Van bajo la grilla, al
            55%, tamaño meta. Aplica a las dos densidades. */}
        <p
          className="proof__sources"
          data-seq="body"
          data-reveal="text"
        >
          {PROOF_SOURCES}
        </p>
      </div>
    </section>
  )
}
