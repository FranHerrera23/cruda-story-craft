import Link from 'next/link'

/* Card individual de la grilla de Selected Work en la home.

   Estructura: nombre arriba (con flecha en hover) · figura 3:4 al
   medio · empresa abajo en gris. Toda la card es un <Link> al case
   study — grayscale filter en la foto, hover scale muy suave.

   Placeholder de imagen:
     Cuando `imageSrc` no se declara, se rendereá una figura gris
     con el nombre adentro en gris chico. No es una caja vacía —
     una caja pelada se lee como imagen rota; con el nombre se lee
     como pendiente. §5 del brief.

   Placeholder de texto:
     Cuando `nameVerified` o `companyVerified` es false, ese string
     se envuelve con `data-placeholder-text="true"`. Sin tratamiento
     visual — el texto se ve normal. El atributo existe para grepear
     qué falta antes de publicar. §5 del brief.

   Card del confidencial:
     `permanentPlaceholder: true` marca que la card no espera foto,
     nunca la va a tener. Placeholder gris queda como diseño final. */
export default function WorkCard({
  name,
  company,
  href,
  imageSrc,
  imageAlt,
  nameVerified = true,
  companyVerified = true,
  permanentPlaceholder = false,
}: {
  name: string
  company: string
  href: string
  imageSrc?: string
  imageAlt?: string
  nameVerified?: boolean
  companyVerified?: boolean
  permanentPlaceholder?: boolean
}) {
  const nameNode = nameVerified ? (
    <>{name}</>
  ) : (
    <span data-placeholder-text="true">{name}</span>
  )
  const companyNode = companyVerified ? (
    <>{company}</>
  ) : (
    <span data-placeholder-text="true">{company}</span>
  )

  return (
    <Link href={href} className="work-card">
      <p className="work-card__name">
        <span>{nameNode}</span>
        <span className="work-card__arrow" aria-hidden="true">
          ↗
        </span>
      </p>
      {imageSrc ? (
        <figure className="work-card__figure">
          <img
            className="work-card__img"
            src={imageSrc}
            alt={imageAlt ?? name}
          />
        </figure>
      ) : (
        <figure
          className="work-card__figure work-card__figure--placeholder"
          data-placeholder={permanentPlaceholder ? 'permanent' : 'true'}
        >
          <span className="work-card__placeholder-label">{name}</span>
        </figure>
      )}
      <p className="work-card__company">{companyNode}</p>
    </Link>
  )
}
