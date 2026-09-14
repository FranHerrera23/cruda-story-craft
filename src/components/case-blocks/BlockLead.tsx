import Slot from './Slot'
import type { MediaAsset } from './types'

/* B2 · LEAD. Media única de apertura a 78vh (--media-lead).

   Brief 06 P0.2 (15-sep) — sin `src`, el bloque no existe. Cero
   caja, cero borde, cero altura reservada con vh. Regla lockeada
   del ledger #14: si no hay imagen, el bloque se colapsa —
   nunca se reserva altura esperando un asset. */
export default function BlockLead({ asset }: { asset: MediaAsset }) {
  if (!asset.src) return null
  return (
    <div className="b-lead">
      <Slot asset={asset} fill />
    </div>
  )
}
