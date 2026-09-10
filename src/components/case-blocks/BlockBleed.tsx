import Slot from './Slot'
import type { MediaAsset } from './types'

/* B7 · BLEED. Una imagen a sangre a --media (68vh). Sin
   max-width, sin padding lateral — se come el ancho de la
   pantalla. §3 del spec. */
export default function BlockBleed({
  asset,
  id,
}: {
  asset: MediaAsset
  id?: string
}) {
  return (
    <div className="b-bleed" id={id}>
      <Slot asset={asset} fill />
    </div>
  )
}
