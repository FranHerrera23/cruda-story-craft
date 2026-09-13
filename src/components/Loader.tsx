'use client'

import { useEffect, useState } from 'react'

/* Motion v3 §9 — Loader.

   Va contra la lista del v2 y entra con dos condiciones que lo
   hacen aceptable:
     · Solo en la primera visita de la sesión (sessionStorage).
       Nadie espera dos veces.
     · Tope duro de 800ms. Si la página está lista antes, sale
       antes. El loader no puede ser más lento que el sitio.

   Wordmark CRUDA en --paper sobre panel --ink. Cinco letras con
   máscara individual: cada letra sube desde translateY(100%) a 0
   con stagger 60ms. Sin spinner, sin barra, sin porcentaje.

   Es la MISMA máscara del route transition (§8) — un componente,
   dos usos. Acá empieza cubierto y destapa hacia arriba una sola
   vez, en la carga inicial.

   FLASH-FREE EN RELOAD
   Un `<script>` inline en el <head> lee sessionStorage antes del
   primer paint y setea `data-loader="show"|"skip"` en <html>. CSS
   `html[data-loader="skip"] .loader { display:none }` corta el
   render del loader antes de pintar, sin flash.

   NO-JS
   Sin JS el inline script no corre, no hay attr, y el loader se
   pinta con sus keyframes CSS. La animación ocurre, la máscara
   destapa, la página queda. Aceptable como degradación.

   REDUCED MOTION
   `.loader { display:none }` en el media query. La página aparece
   sin telón. */

const HOLD_MS = 500
const EXIT_MS = 250
const UNMOUNT_MS = HOLD_MS + EXIT_MS + 50
const SESSION_KEY = 'cruda-loader-shown'

const WORDMARK = ['C', 'R', 'U', 'D', 'A'] as const

export default function Loader() {
  /* SSR default 'up' — el loader entra visible. La CSS gate en
     <html data-loader="skip"> impide el paint cuando ya se mostró
     en la sesión. */
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return

    /* Reduced motion — CSS ya lo oculta, pero desmontamos por
       higiene para no dejar el nodo en el DOM. */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false)
      return
    }

    let skip = false
    try {
      skip = sessionStorage.getItem(SESSION_KEY) === '1'
    } catch {
      /* Storage bloqueado (Safari privado, políticas corporativas):
         el loader se muestra siempre. Aceptable. */
    }

    if (skip) {
      setVisible(false)
      return
    }

    /* Marcar la sesión ANTES de arrancar el timer de unmount.
       Si algo falla después, al menos la siguiente carga no ve
       el loader otra vez. */
    try {
      sessionStorage.setItem(SESSION_KEY, '1')
    } catch {}

    const t = window.setTimeout(() => setVisible(false), UNMOUNT_MS)
    return () => window.clearTimeout(t)
  }, [])

  if (!visible) return null

  /* La animación del panel y de las letras vive en CSS keyframes,
     no en transiciones disparadas por JS. Ventaja: el reveal
     empieza en el primer paint, no depende de hydration. Si la
     página tarda en hidratarse el loader ya está corriendo. */
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader__panel" />
      <div className="loader__word">
        {WORDMARK.map((letter, i) => (
          <span key={i} className="loader__letter-clip">
            <span
              className="loader__letter"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {letter}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
