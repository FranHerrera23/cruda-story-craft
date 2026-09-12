import Link from 'next/link'

/* Card de Selected Work — brief 12-sep §6.3.

   Anatomía:
     [ figure 4:5 · SOLO si hay imageSrc ]
     [ name  · grot 700 --t-body ]  [ arrow ↗ · SOLO si hay href ]
     [ company · grot 400 --t-body ]
     [ line · grot 400 --t-small ]

   Reglas duras:
   · El bloque de texto va PEGADO a la imagen — nada de nombre
     arriba, hueco en el medio y empresa abajo.
   · Card sin foto NO reserva altura. Sin placeholder gris, sin
     caja vacía, sin min-height. El texto sube al tope de la celda.
     El grid usa align-items:start para permitirlo.
   · Card sin href NO tiene hover, ni flecha, ni cursor pointer.
   · Sin data-placeholder-text: el flag nameVerified/companyVerified
     se preserva como grep signal pero no cambia el markup — no hay
     tratamiento visual distinto por nombre no confirmado.

   Hover (solo con href): la imagen escala 1.03 con --dur-3, la
   flecha aparece desde abajo-izquierda. El texto no se mueve. */

export type WorkCardProps = {
  name: string
  company: string
  line: string
  href?: string
  imageSrc?: string
  imageAlt?: string
  nameVerified?: boolean
  companyVerified?: boolean
  revealIndex?: number
}

export default function WorkCard({
  name,
  company,
  line,
  href,
  imageSrc,
  imageAlt,
  revealIndex,
}: WorkCardProps) {
  /* Reveal declarado en SSR — motion v2 §4 dice que opacity:0 tiene
     que estar en el CSS servido, no aplicado por JS después del
     primer paint. RevealScroll global agrega .on al montar. */
  const revealProps =
    revealIndex !== undefined
      ? {
          'data-reveal': 'text' as const,
          'data-stagger': String(revealIndex),
        }
      : undefined
  const inner = (
    <>
      {imageSrc && (
        <div className="work-card__media">
          <img
            className="work-card__img"
            src={imageSrc}
            alt={imageAlt ?? name}
          />
        </div>
      )}
      <div className="work-card__head">
        <span className="work-card__name">{name}</span>
        {href && (
          <span className="work-card__arrow" aria-hidden="true">
            ↗
          </span>
        )}
      </div>
      <p className="work-card__company">{company}</p>
      <p className="work-card__line">{line}</p>
    </>
  )

  if (href) {
    return (
      <Link href={href} className="work-card" {...revealProps}>
        {inner}
      </Link>
    )
  }
  return (
    <div
      className="work-card"
      data-placeholder-route="true"
      {...revealProps}
    >
      {inner}
    </div>
  )
}
