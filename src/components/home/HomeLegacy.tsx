'use client'

import { useEffect, useState } from 'react'
import { AnchorAdvance, Anchor, Item } from '@/components/motion/AnchorAdvance'
import './home-legacy.css'

/* Home · OUR FOUNDER (F10 §10 · posición 07 · H0 · 21-sep)

   H0 hotfix (21-sep · Fran F1 + F2 firmadas):
     · Sale la banda roja "TITULAR PROPUESTO · PENDIENTE FIRMA"
     · Salen las filas PRACTICE y THE TEAM
     · Fran firma el titular · se revierte italic + opacity, queda
       plano
     · Estructura del ancla NO se toca acá · eso es F11.0
     · Rename .home-legacy__ → .home-founder__ NO se hace acá ·
       eso es F11.0

   Dispositivo A (AnchorAdvance) · vigente hasta F11.0:
     · ANCLA · retrato a sangre (borde izq desktop · banner-top
       mobile) + label OUR FOUNDER + titular firmado
     · ITEMS · 2 filas · EXPERIENCE · LEGACY
     · Crédito al pie · Fran Herrera · Founder · between UAE and
       Russia

   readingZone diferenciado desktop 0.72 / mobile 0.78 se mantiene.
   Con 2 items en vez de 4 puede haber que recalibrar · si al
   verificar los picos no llegan >0.85, ajusto y reporto. */

const LEGACY_HOLDINGS = [
  'Mondelez',
  'AB InBev',
  'Delivery Hero',
  'Nestlé',
  'TikTok',
  'United Nations',
]

const CREDIT = 'Fran Herrera · Founder · between UAE and Russia'

/* Titular · FIRMADO por Fran, 21-sep (F2). Textual. */
const HEADLINE =
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
              {HEADLINE}
            </h2>
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

        <p className="home-legacy__credit">{CREDIT}</p>
      </div>
    </AnchorAdvance>
  )
}
