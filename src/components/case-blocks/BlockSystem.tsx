import Slot from './Slot'
import type { SystemCell } from './types'

/* B14 · SYSTEM. Grilla de 4 columnas para piezas chicas de identidad.
   Paleta y tipografía se RENDERIZAN (no se simulan), per §3.

   Tres tipos de celda:
     - swatch: color chip con Pantone + hex + nombre. Fondo = tono.
     - type:   escalera tipográfica en --c-type (weights) + nota.
     - slot:   fallback §6 para artefactos aún no existentes
               (manual, brochure, morfología del logo).

   `wide: true` extiende la celda a 2 columnas del grid.
   La clase .wide vive directamente en el grid child para no
   introducir wrappers extra que desalinearían la grilla. */

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
