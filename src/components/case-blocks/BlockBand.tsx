import Slot from './Slot'
import type { MediaAsset, ProseGroup } from './types'

/* B3 · BAND. Media 7fr izquierda + prosa 4fr derecha sticky.
   La prosa nunca se colapsa — desde 1000px la columna derecha
   se pega al viewport a top:110px mientras la media pasa.
   `caption` es opcional (INOUT: bajo la instalación, dice
   estudio/año). `groups` puede tener 1..N — cada uno con su
   label y sus párrafos. */
export default function BlockBand({
  asset,
  caption,
  groups,
  id,
}: {
  asset: MediaAsset
  caption?: string
  groups: ProseGroup[]
  id?: string
}) {
  return (
    <div className="b-band" id={id}>
      <div className="media">
        <figure>
          <Slot asset={asset} className="u" fill={false} />
          {caption ? <figcaption>{caption}</figcaption> : null}
        </figure>
      </div>
      <div className="prose">
        {groups.map((g, i) => (
          <div className="grp" key={`${g.label}-${i}`}>
            <span className="lbl">{g.label}</span>
            {g.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
