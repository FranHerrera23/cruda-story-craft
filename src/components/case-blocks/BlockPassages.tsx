import type { Passage } from './types'

/* B13 · PASSAGES. Para casos cuya prueba es escritura publicada
   (Girish). Dos densidades:

     Featured: pieza destacada, con excerpt a tamaño de lectura.
               Cada una es un mini-artículo — title en escala, tres
               líneas máximo de excerpt en serif, venue/year abajo.
               Se listan verticalmente, no en grilla — para que la
               lectura no compita con la ojeada.

     Archive:  entrada compacta del archivo. Una línea por pieza —
               title izquierda, venue+year derecha. La grilla acá
               es horizontal (tabla de archivo, no de contenido).

   El excerpt del featured NO entra al pool de verificación de pull
   quotes: es copy del autor, no prosa de la página. verifyPullQuotes
   solo cubre prose/band/passages... — hm, sí cubre `passages`.

   Corrección: el chequeo original quería que passages contara como
   prosa porque una pull PODÍA venir del texto del passage. Pero
   `Passage.excerpt` es cita del autor, no argumento nuestro. La
   política queda: si Girish quiere una pull de un excerpt, se
   duplica al pool de prosa vía un prose block dedicado. El bloque
   passages en sí NO alimenta el pool. (Cambio aplicado en
   CaseComposer.tsx en el mismo commit.) */
export default function BlockPassages({
  label,
  featured,
  archive,
  id,
}: {
  label?: string
  featured: Passage[]
  archive?: Passage[]
  id?: string
}) {
  return (
    <section className="b-passages" id={id}>
      {label ? <span className="lbl">{label}</span> : null}

      <div className="b-passages-featured">
        {featured.map((p, i) => {
          const inner = (
            <>
              <h3 className="b-passages-title">{p.title}</h3>
              {p.excerpt ? (
                <p className="b-passages-excerpt">{p.excerpt}</p>
              ) : null}
              {p.venue || p.year ? (
                <p className="b-passages-meta">
                  {[p.venue, p.year].filter(Boolean).join(' · ')}
                </p>
              ) : null}
            </>
          )
          return (
            <article className="b-passages-featured-item" key={i}>
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="b-passages-featured-link"
                >
                  {inner}
                </a>
              ) : (
                inner
              )}
            </article>
          )
        })}
      </div>

      {archive && archive.length > 0 ? (
        <div className="b-passages-archive">
          <h3 className="b-passages-archive-h">Archive</h3>
          <ul>
            {archive.map((p, i) => {
              const meta = [p.venue, p.year].filter(Boolean).join(' · ')
              const row = (
                <>
                  <span className="b-passages-archive-t">{p.title}</span>
                  {meta ? (
                    <span className="b-passages-archive-m">{meta}</span>
                  ) : null}
                </>
              )
              return (
                <li key={i}>
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {row}
                    </a>
                  ) : (
                    row
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}
    </section>
  )
}
