import './ordinal.css'

/* Ordinal — Brief 08 §P2 (15-sep).

   Componente único para toda numeración pequeña del sitio.
   Un solo lenguaje visual: grot 11px, tracking .14em, mayúsculas,
   color heredado al 40% (por default) o al 55% en superficies
   inversas.

   Se usa en:
     · Cards de selected-work (01..08, arriba a la izquierda).
     · Meses del first-90 (Month 1, Month 2, Month 3).
     · Bloques de /process (01, 02, 03).
     · Eyebrows de secciones home (SELECTED WORK    02/07).

   El componente NO trae posicionamiento — el consumer lo pone
   donde quiere con CSS. La única responsabilidad del componente
   es el tratamiento tipográfico.

   Cuando el brief dice 'SELECTED WORK 03/09' con progreso total,
   el consumer arma `<Ordinal>03/09</Ordinal>`. Cuando dice solo
   ordinal ('01'), el consumer arma `<Ordinal>01</Ordinal>`. La
   forma de la string es responsabilidad del consumer. */

type OrdinalProps = {
  children: React.ReactNode
  /* variant='muted' (default) — al 40%. Para superficies paper. */
  /* variant='dim'    — al 55%. Para superficies inversas (opening-act,
                        testimonial) donde el .40 sobre --cream desaparece. */
  variant?: 'muted' | 'dim'
  className?: string
}

export default function Ordinal({
  children,
  variant = 'muted',
  className = '',
}: OrdinalProps) {
  return (
    <span
      className={`ord ord--${variant}${className ? ' ' + className : ''}`}
    >
      {children}
    </span>
  )
}
