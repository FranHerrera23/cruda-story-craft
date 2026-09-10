import type { MediaAsset } from './types'

/* §6 · slot de media faltante. Fondo blanco, filete negro 1px,
   nombre + spec del asset. Le dice a Fran exactamente qué falta.
   Ningún layout puede depender de que la imagen exista para no
   romperse. Cuando `asset.src` está, se renderiza la <img>.

   Ambos caminos aceptan `className` para que el bloque padre
   asigne la altura vía CSS (`.b-band .media .u` = 68vh) o el
   componente aplique fill inline (lead = 78vh en el contenedor
   padre .b-lead). */
export default function Slot({
  asset,
  fill = false,
  className = '',
}: {
  asset: MediaAsset
  fill?: boolean
  className?: string
}) {
  const style = fill ? { height: '100%' } : undefined
  if (asset.src) {
    return (
      <img
        src={asset.src}
        alt={asset.alt ?? ''}
        className={className || undefined}
        style={style}
      />
    )
  }
  return (
    <div className={`slot ${className}`.trim()} style={style}>
      <b>{asset.slotName}</b>
      <i>{asset.slotSpec}</i>
    </div>
  )
}
