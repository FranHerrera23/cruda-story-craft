import Slot from './Slot'
import type { MediaAsset } from './types'

/* B2 · LEAD. Media única de apertura a 78vh (--media-lead).
   Sin foto renderiza el slot con la spec del asset. */
export default function BlockLead({ asset }: { asset: MediaAsset }) {
  return (
    <div className="b-lead">
      <Slot asset={asset} fill />
    </div>
  )
}
