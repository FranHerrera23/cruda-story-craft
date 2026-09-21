import { findWork } from '@/content/work'
import './home-karen-proof.css'

/* Home · LA PRUEBA · plano negro · F18.4 · 21-sep · autónomo.

   La prueba de Karen sale de `content/work/karen-mannheim.ts` (F18.0).
   Las tres primeras métricas de PRUEBA (605,050 · 96× · $60,180) son
   las mismas que aparecen en el caso. Sin strings propios.

   "Read the case study →" apunta a `/work/karen-mannheim`. */

export default function HomeKarenProof() {
  const w = findWork('karen-mannheim')
  if (!w) return null
  const cells = w.metrics.slice(0, 3)
  return (
    <section
      className="plane plane--black home-karen-proof"
      id="karen-proof"
      data-plane
    >
      <div className="plane__in">
        <div className="plane__top">
          <p className="eyebrow">What we built for her</p>
          <h2 className="name name--sm">
            Thirty-three years of work, in front of the people who
            specify it.
          </h2>
          <div className="rule" />
          <p className="body" style={{ maxWidth: '66ch' }}>
            Karen lights ten, twenty and fifty million dollar homes.
            Her buyers are developers, architects and high-end builders
            across the United States, Latin America and Spain — a few
            thousand people, not a market. The writing went to them.
          </p>
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
        <a className="go" href={`/work/${w.slug}`}>
          Read the case study →
        </a>
      </div>
    </section>
  )
}
