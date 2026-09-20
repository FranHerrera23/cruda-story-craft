'use client'

import { useEffect, useRef, ReactNode } from 'react'
import './anchor-advance.css'

/* Dispositivo A · brief F10 §2.1 · escrito UNA sola vez.

   Un ANCLA se fija arriba (position: sticky). Los ITEMS avanzan
   debajo. El que está en la zona viva del viewport lee al 100%,
   los demás quedan atenuados a 0.35. La única variable animada
   es la opacidad. Atado al scroll · sin transition CSS · el valor
   sale de una medición en rAF.

   Uso · las cuatro secciones de la home marcadas como A en el
   brief F10 §2.4:
     · QUÉ ES CRUDA (posición 02)   · label+sub+display en el ancla
     · TESTIMONIO + LA PRUEBA (04)  · la cita en el ancla
     · WHAT OTHERS (06)             · el rótulo en el ancla
     · OUR FOUNDER (07)             · retrato+rótulo+titular
     · LOS SERVICIOS (08)           · label+sub en el ancla

   La sección hospedante controla su typography, su ground y sus
   separadores. Este componente sólo maneja la mecánica.

   PROHIBICIONES DEL BRIEF §2.1
     ✗ sin desplazamiento vertical de los items
     ✗ sin escala
     ✗ sin color
       la única variable es la opacidad

   REDUCED MOTION
     · El rAF no se instala.
     · Los items quedan a opacidad 1 vía CSS media query.
     · El ancla pierde el sticky (position: static) para que la
       lectura sea lineal · brief F10 §12 punto 8.

   MEDICIÓN
     Cada item se ubica por su bounding-rect. La zona viva es una
     fracción del viewport (default 0.6 · un poco debajo del centro
     porque el ancla toma el top). La opacidad interpola linealmente
     entre 1 (centro del item exactamente en la zona viva) y 0.35
     (a `threshold` px o más).

   TUNEO
     · readingZone · dónde vive la lectura. Sube (más cerca de 0)
       si el ancla es corta; baja (más cerca de 1) si el ancla es
       alta.
     · threshold · qué tan angosta es la zona viva. Bajo threshold
       = un item vivo por vez, transición brusca. Alto threshold =
       dos items parcialmente vivos, transición suave. */

const OPACITY_LIVE = 1.0
const OPACITY_ATTENUATED = 0.35

interface AnchorAdvanceProps {
  id?: string
  className?: string
  children: ReactNode
  /* Distancia máxima (px) entre el centro de un item y el centro
     de la zona viva para que el item lea 100%. Fuera del rango,
     lineal a 0.35. Default 260px · calibrable por sección. */
  threshold?: number
  /* Fracción vertical del viewport donde está la zona viva
     (0 = top, 1 = bottom). Default 0.6. */
  readingZone?: number
}

export function AnchorAdvance({
  id,
  className,
  children,
  threshold = 260,
  readingZone = 0.6,
}: AnchorAdvanceProps) {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const root = rootRef.current
    if (!root) return

    let raf = 0
    let scheduled = false

    const measure = () => {
      const vh = window.innerHeight
      const readingY = vh * readingZone
      const items = root.querySelectorAll<HTMLElement>('[data-aa-item]')
      items.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const distance = Math.abs(center - readingY)
        const t = Math.min(distance / threshold, 1)
        const opacity =
          OPACITY_LIVE - t * (OPACITY_LIVE - OPACITY_ATTENUATED)
        el.style.opacity = String(opacity)
      })
      scheduled = false
    }

    const schedule = () => {
      if (scheduled) return
      scheduled = true
      raf = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [readingZone, threshold])

  return (
    <section
      ref={rootRef}
      id={id}
      className={`aa ${className || ''}`.trim()}
    >
      {children}
    </section>
  )
}

interface SlotProps {
  children: ReactNode
  className?: string
}

/* Ancla · el bloque que se fija en el top. Su ground (bg y color)
   lo pone la sección hospedante para que los items que scrollean
   detrás queden cubiertos por el ancla. */
export function Anchor({ children, className }: SlotProps) {
  return (
    <div data-aa-anchor className={`aa__anchor ${className || ''}`.trim()}>
      {children}
    </div>
  )
}

/* Item · cada fila que avanza. Empieza atenuado (0.35) para que
   incluso sin JS haya un render sensato. El motor rAF va a
   sobrescribir en el primer frame. */
export function Item({ children, className }: SlotProps) {
  return (
    <div
      data-aa-item
      className={`aa__item ${className || ''}`.trim()}
      style={{ opacity: OPACITY_ATTENUATED }}
    >
      {children}
    </div>
  )
}
