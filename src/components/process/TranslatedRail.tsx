'use client'

import { useEffect, useRef } from 'react'
import './translated-rail.css'

/* /process · TRANSLATED rail (v6 F6 §6.1)
   Columna vertical fija de 42px al borde izquierdo con la palabra
   TRANSLATED escrita en vertical-rl (Archivo 13px w300 caps
   tracking .55em) y una barra de 2px pegada al borde derecho
   que crece con scaleY atado al progreso vertical de la página.

   Motion v3 §6 · el registro operativo se mueve solo por scroll,
   sin transition, sin animation. La barra es scaleY inline por
   frame vía rAF · misma disciplina que el motor de los acts.

   Ledger tension pendiente (v3 §12) · el riel es un indicador de
   progreso; hoy hay tres indicadores en el sitio (01/05 de act2,
   este riel, más los del 01/03 de las hojas si se construyen).
   La resolución (v6 §11) queda para Fran. No se ejecuta acá. */

export default function TranslatedRail() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      /* Bajo reduce motion la barra queda al 100% (progreso total)
         · el rail sigue visible como marca. */
      if (barRef.current) barRef.current.style.transform = 'scaleY(1)'
      return
    }

    let ticking = false
    let lastP = -1

    const update = () => {
      ticking = false
      const scrollTop = window.scrollY
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight <= 0) return
      const p = Math.max(0, Math.min(1, scrollTop / scrollHeight))
      if (Math.abs(p - lastP) < 0.001) return
      lastP = p
      if (barRef.current) {
        barRef.current.style.transform = `scaleY(${p.toFixed(4)})`
      }
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="translated-rail" aria-hidden="true">
      <span className="translated-rail__word">TRANSLATED</span>
      <div className="translated-rail__bar" ref={barRef} />
    </div>
  )
}
