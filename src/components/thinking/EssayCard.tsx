import Image from 'next/image'
import Link from 'next/link'
import EssayCover from './EssayCover'
import './essay-card.css'

/* F54 §1.3 · Tarjeta de ensayo (grilla + /newsletter · recent pieces).
   El bloque entero es un link al ensayo, con 4 elementos verticales:
     1. Imagen o portada 16:9
     2. Meta (fecha · N min read, + "Also in …" opcional)
     3. Título h3 20px / 1.25 / 500
     4. Dek opcional

   El Steve Walls (podcast upcoming) usa una variante no-link que se
   maneja fuera de este componente (brief §1.3). Esta tarjeta asume
   que todo link lleva al ensayo. */

export type EssayCardData = {
  slug: string
  href: string
  title: string
  dek?: string
  metaText: string
  heroImage?: string
  heroAlt?: string
  /* `priority`: solo la destacada lo pide (brief §1.2). Las demás
     son lazy. En tarjetas sin hero (portada tipográfica) este flag
     no se aplica · la portada es DOM puro. */
  priority?: boolean
  /* `sizes` para next/image · varía entre destacada y grilla
     (brief §3). El caller decide. */
  sizes?: string
  /* Variante no-link (podcast upcoming de Steve Walls). Cuando es
     true, el bloque no envuelve en <Link> y el título queda en
     secundario (brief §1.3). */
  dim?: boolean
}

export default function EssayCard({ data }: { data: EssayCardData }) {
  const inner = (
    <>
      <div className="e-card__media">
        {data.heroImage && data.heroAlt ? (
          <Image
            src={data.heroImage}
            alt={data.heroAlt}
            width={1600}
            height={900}
            sizes={data.sizes}
            priority={data.priority ?? false}
            className="e-card__img"
          />
        ) : (
          <EssayCover title={data.title} />
        )}
      </div>
      <p className="e-card__meta">{data.metaText}</p>
      <h3 className="e-card__title">{data.title}</h3>
      {data.dek && <p className="e-card__dek">{data.dek}</p>}
    </>
  )

  if (data.dim) {
    return <article className="e-card e-card--dim">{inner}</article>
  }
  return (
    <article className="e-card">
      <Link href={data.href} className="e-card__link">
        {inner}
      </Link>
    </article>
  )
}
