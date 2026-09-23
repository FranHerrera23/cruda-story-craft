import type { WorkMetric } from '@/content/work/types'
import '../home/home-karen-proof.css'

/* ProofBlock · F28 · componente reusable de la sección
   "What we built for {X}" · mismo layout que HomeKarenProof.

   Se usa en:
   · home · Karen · (HomeKarenProof importa este componente).
   · /services · Mike · como prueba antes del START HERE.

   Anatomía:
     rótulo · h2 · regla naranja · párrafo del cuerpo · celdas
     de cifras (con fuente) · link al caso.

   El bloque hereda .plane .plane--black y la anatomía cell__/name/rule
   de planes.css. En /services no hay planos, así que el consumer
   envuelve <ProofBlock /> en su propio contenedor si lo necesita.
   Cuando se pasa `standalone={true}`, ProofBlock ya emite un
   <section> con la clase para vivir sin plano. */

export type ProofCell = Pick<WorkMetric, 'value' | 'label' | 'period' | 'source'>

export type ProofBlockProps = {
  id?: string
  eyebrow: string
  h2: string
  body?: string
  cells: ProofCell[]
  href: string
  linkLabel: string
  /* Modo con fondo negro por default (home) o sin fondo (services). */
  standalone?: boolean
}

export default function ProofBlock({
  id,
  eyebrow,
  h2,
  body,
  cells,
  href,
  linkLabel,
  standalone = false,
}: ProofBlockProps) {
  const cls = standalone
    ? 'proof-standalone home-karen-proof'
    : 'plane plane--black home-karen-proof'
  return (
    <section className={cls} id={id} data-plane={standalone ? undefined : ''}>
      <div className={standalone ? 'proof-standalone__in' : 'plane__in'}>
        <div className="plane__top">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="name name--sm">{h2}</h2>
          <div className="rule" />
          {body && (
            <p className="body" style={{ maxWidth: '66ch' }}>
              {body}
            </p>
          )}
        </div>
        <div className="data">
          {cells.map((m, i) => (
            <div key={i} className="cell">
              <p className="cell__big">{m.value}</p>
              <p className="cell__v">{m.label}</p>
              <p className="cell__n">
                {m.period}
                {m.source && (
                  <>
                    {' · '}
                    {m.source}
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
        <a className="go" href={href}>
          {linkLabel} →
        </a>
      </div>
    </section>
  )
}
