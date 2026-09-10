import type { Block } from './types'

/* Modificador `slab` — wrapper que pinta el color del cliente
   (--c-1 o --c-2) a sangre durante toda su altura. Envuelve uno o
   más bloques (típicamente B4/B8 per §3 del spec) y les hereda
   texto blanco.

   La composición del contenido interior sigue siendo por bloques
   (no hardcodea claim/gloss/note-style). Cuando un caso pida ese
   patrón exacto de INOUT, se agrega un block-type específico
   (`claim`, por ejemplo) al union — pero eso NO es un slab: es
   contenido dentro de un slab. Mantener slab como puro modificador
   preserva el contrato §4 "sin bloques hardcodeados por caso". */
export default function BlockSlab({
  tone,
  items,
  renderBlock,
}: {
  tone: 'c1' | 'c2'
  items: Block[]
  renderBlock: (block: Block, index: number) => React.ReactNode
}) {
  const toneClass = tone === 'c1' ? 'slab-c1' : 'slab-c2'
  return (
    <section className={`slab ${toneClass}`}>
      {items.map((b, i) => renderBlock(b, i))}
    </section>
  )
}
