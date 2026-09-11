import Link from 'next/link'

/* Card de la grilla de Selected Work en la home.
   Brief 11-sep §3.

   Estructura:
     work-card__head    (flex baseline, name + arrow)
     work-card__figure  (aspect 4:5)
     work-card__company (grot 15px gris)

   El nombre pasa a serif 19px — casi body. La imagen manda; el
   nombre acompaña. Hover: la CARD ENTERA baja a opacity .8. Ninguna
   parte cambia de color — el rojo en una grilla de nueve se vuelve
   ruido.

   Placeholder de imagen (§5 brief 10-sep): cuando `imageSrc` no
   está, la figura muestra el nombre centrado en gris. La card del
   confidencial usa placeholder permanente.

   Placeholder de texto: `data-placeholder-text="true"` cuando
   name/company no están verificados. Grepeable.

   Route ausente: cuando `href` es undefined, la card se rendereá
   como <div> no-clickable, sin flecha. `data-placeholder-route`. */
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
      <div className="work-card__head">
        <span className="work-card__name">{nameNode}</span>
        {href ? (
          <span className="work-card__arrow" aria-hidden="true">
            ↗
          </span>
        ) : null}
      </div>
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
