import Slot from './Slot'
import type { MediaAsset } from './types'

/* B6 · PAIR. Dos imágenes lado a lado a 0.82 × --media
   (aprox 55vh cuando --media = 68vh). §3 del spec.
   En mobile se apilan; sin ratio fijo. */
export default function BlockPair({
  assets,
  id,
}: {
  assets: [MediaAsset, MediaAsset]
  id?: string
}) {
  return (
    <div className="b-pair" id={id}>
      <figure>
        <Slot asset={assets[0]} className="u" />
      </figure>
      <figure>
        <Slot asset={assets[1]} className="u" />
      </figure>
    </div>
  )
}
