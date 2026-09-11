import Link from 'next/link'

/* Card individual de la grilla de Selected Work en la home.

   Estructura: nombre arriba (con flecha en hover) · figura 3:4 al
   medio · empresa abajo en gris. Grayscale filter en la foto, hover
   scale muy suave.

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
     nunca la va a tener. Placeholder gris queda como diseño final.

   Route ausente:
     Cuando `href` es undefined (BAUHOME y Mistiva mientras no tengan
     data file ni ruta), la card se rendereá como <div> — no
     clickable, no afforda navegación. La flecha ↗ no aparece.
     `data-placeholder-route="true"` marca la card para grep. Cuando
     Fran migre el case, se agrega el href y la card se vuelve
     Link automáticamente. */
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
  href?: string
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

  const inner = (
    <>
      <p className="work-card__name">
        <span>{nameNode}</span>
        {href ? (
          <span className="work-card__arrow" aria-hidden="true">
            ↗
          </span>
        ) : null}
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
    </>
  )

  if (href) {
    return (
      <Link href={href} className="work-card">
        {inner}
      </Link>
    )
  }
  return (
    <div className="work-card" data-placeholder-route="true">
      {inner}
    </div>
  )
}
