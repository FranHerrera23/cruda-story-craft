'use client'

import { useEffect, useState } from 'react'
import { AnchorAdvance, Anchor, Item } from '@/components/motion/AnchorAdvance'
import './home-legacy.css'

/* Home · OUR FOUNDER (F10 §10 · posición 07 · Commit 11 F10.3)

   Dispositivo A (AnchorAdvance):
     · ANCLA · retrato a sangre (borde izq desktop · banner-top
       mobile) + label OUR FOUNDER + titular (PROVISORIO)
     · ITEMS · 4 filas de tabla · EXPERIENCE · LEGACY · PRACTICE
              · THE TEAM
     · Crédito al pie · Fran Herrera · Founder · between UAE and
       Russia

   El ancla es ALTA (retrato + titular) · readingZone tiene que
   ir bajo el ancla, no al centro. En desktop el retrato ocupa
   40% del ancho, no altura extra · el ancla mide como el body
   (~50vh). En mobile el retrato pasa a banner-top a sangre, el
   ancla mide ~60vh (retrato + label + titular) · readingZone
   distinto.

   Regla Fran 20-sep · en 390 el ancla es el banner-top, más
   baja · readingZone distinto. Detección por matchMedia. */

const LEGACY_HOLDINGS = [
  'Mondelez',
  'AB InBev',
  'Delivery Hero',
  'Nestlé',
  'TikTok',
  'United Nations',
]

const CREDIT = 'Fran Herrera · Founder · between UAE and Russia'

/* Titular · propuesto, marcado provisorio en producción · brief
   F10 §10.3. Línea de la propuesta de Stone & Us, textual.
   Fran firma, ajusta o rompe. */
const HEADLINE_PROVISORIO =
  'You work with the founder — and with a team small enough to move.'

export default function HomeLegacy() {
  /* Fran 20-sep · el ancla desktop es distinta a la mobile (banner
     vs retrato a sangre) · readingZone tiene que ser distinto.
     Detectamos por matchMedia y ajustamos. */
  const [readingZone, setReadingZone] = useState(0.72)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia('(max-width: 720px)')
    const update = () => setReadingZone(mql.matches ? 0.78 : 0.72)
    update()
    mql.addEventListener('change', update)
    return () => mql.removeEventListener('change', update)
  }, [])

  return (
    <AnchorAdvance
      id="our-founder"
      className="home-legacy home-legacy--dark"
      threshold={200}
      readingZone={readingZone}
    >
      <Anchor className="home-legacy__anchor">
        <div className="home-legacy__anchor-inner">
          <div className="home-legacy__portrait" aria-hidden="true">
            <img
              src="/fran-herrera.webp"
              alt=""
              className="home-legacy__img"
            />
          </div>
          <div className="home-legacy__anchor-body">
            <p className="home-legacy__label">OUR FOUNDER</p>
            <h2 className="home-legacy__headline">
              {HEADLINE_PROVISORIO}
            </h2>
            <p className="home-legacy__provisorio">
              [ TITULAR PROPUESTO · PENDIENTE FIRMA ]
            </p>
          </div>
        </div>
      </Anchor>

      <div className="home-legacy__items">
        <Item className="home-legacy__row">
          <p className="home-legacy__row-label">EXPERIENCE</p>
          <p className="home-legacy__row-body">
            Ten years building brands across three continents,
            in-house and agency side.
          </p>
        </Item>

        <Item className="home-legacy__row">
          <p className="home-legacy__row-label">LEGACY</p>
          <p className="home-legacy__row-body">
            {LEGACY_HOLDINGS.join(' · ')}
          </p>
        </Item>

        <Item className="home-legacy__row">
          <p className="home-legacy__row-label">PRACTICE</p>
          <p className="home-legacy__row-body home-legacy__row-body--slot">
            [ PENDIENTE · FRAN ]
          </p>
        </Item>

        <Item className="home-legacy__row">
          <p className="home-legacy__row-label">THE TEAM</p>
          <p className="home-legacy__row-body home-legacy__row-body--slot">
            [ PENDIENTE · FRAN ]
          </p>
        </Item>

        <p className="home-legacy__credit">{CREDIT}</p>
      </div>
    </AnchorAdvance>
  )
}
