import Slot from './Slot'
import type { SystemCell } from './types'

/* B14 · SYSTEM. Grilla de 4 columnas para piezas chicas de identidad.
   Paleta y tipografía se RENDERIZAN (no se simulan), per §3.

   Cell kinds:
     - swatch:   color chip. tone='c1'|'c2' pinta la celda entera.
                 tone='both' la divide en dos (INOUT).
     - type:     escalera tipográfica en --c-type + nota.
     - slot:     fallback §6 para artefactos aún no existentes.
     - decision: dato del manual — construcción, morfología, etc.
                 No es mockup; es decisión escrita a tamaño ficha.

   `wide: true` extiende cualquier celda a 2 columnas del grid. */

export default function BlockSystem({
  label,
  cells,
  id,
}: {
  label?: string
  cells: SystemCell[]
  id?: string
}) {
  return (
    <section className="b-system" id={id}>
      {label ? <span className="lbl">{label}</span> : null}
      <div className="sysgrid">
        {cells.map((c, i) => {
          const wide = c.wide ? ' wide' : ''
          const key = `${c.kind}-${i}`

          if (c.kind === 'swatch') {
            if (c.tone === 'both') {
              return (
                <div key={key} className={`cell swatch-both${wide}`}>
                  <div className="cell-half on-c1">
                    <span className="pantone">{c.pantone}</span>
                    <span>
                      {c.hex}
                      <br />
                      <em>{c.friendly}</em>
                    </span>
                  </div>
                  <div className="cell-half on-c2">
                    <span className="pantone">{c.pantone2 ?? c.pantone}</span>
                    <span>
                      {c.hex2 ?? c.hex}
                      <br />
                      <em>{c.friendly2 ?? c.friendly}</em>
                    </span>
                  </div>
                </div>
              )
            }
            const toneClass = c.tone === 'c1' ? 'sw-1' : 'sw-2'
            return (
              <div key={key} className={`cell on-dark ${toneClass}${wide}`}>
                <span className="pantone">{c.pantone}</span>
                <span>
                  {c.hex}
                  <br />
                  <em>{c.friendly}</em>
                </span>
              </div>
            )
          }

          if (c.kind === 'type') {
            return (
              <div key={key} className={`cell spec${wide}`}>
                {c.ladder.map((w, j) => (
                  <u key={j} className={`w${w.weight / 100}`}>
                    {w.text}
                  </u>
                ))}
                <span style={{ marginTop: 14 }}>
                  <em>{c.note}</em>
                </span>
              </div>
            )
          }

          if (c.kind === 'decision') {
            return (
              <div key={key} className={`cell decision${wide}`}>
                <b>{c.title}</b>
                {c.body ? <em>{c.body}</em> : null}
              </div>
            )
          }

          // c.kind === 'slot'
          return (
            <Slot
              key={key}
              asset={{ slotName: c.slotName, slotSpec: c.slotSpec }}
              className={wide.trim()}
            />
          )
        })}
      </div>
    </section>
  )
}
