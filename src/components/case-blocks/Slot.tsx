import type { MediaAsset } from './types'

/* Brief 06 P0.1 + P0.2 (15-sep) — sin src, el slot no renderea nada.
   La versión anterior mostraba una caja con `slotName` + `slotSpec`
   (nombres internos, en español) como placeholder. En producción
   esos textos son notas de especificación visibles al usuario, en
   un sitio en inglés — ergo: bug de producción.

   Ahora: `src` presente → <img>. Sin src → null. Los bloques padre
   (BlockLead, BlockBand) decidieron qué hacer cuando el slot está
   vacío — colapsar la reserva de altura y no dibujar caja vacía
   (regla lockeada del ledger #14). */
export default function Slot({
  asset,
  fill = false,
  className = '',
}: {
  asset: MediaAsset
  fill?: boolean
  className?: string
}) {
  if (!asset.src) return null
  const style = fill ? { height: '100%' } : undefined
  return (
    <img
      src={asset.src}
      alt={asset.alt ?? ''}
      className={className || undefined}
      style={style}
    />
  )
}
