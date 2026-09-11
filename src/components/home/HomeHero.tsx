'use client'

import { useEffect, useRef } from 'react'
import './home-hero.css'

/* Home · Hero — brief 11-sep v2 §3.

   El H1 se escribe carácter por carácter al cargar. Reglas duras:

   1. El H1 completo va en el HTML servido — SSR renderea el texto
      entero. Sin JS, el usuario ve el H1 igual (SEO, screen readers,
      hard refresh, JS off).
   2. Antes de mutar el DOM, se lockea `min-height` a la altura
      natural del H1 con el texto completo. Elimina CLS: sin importar
      qué haya adentro, la caja no cambia de alto.
   3. Estructura durante el tipeo: span visible (chars ya escritos),
      cursor, span invisible (chars faltantes con visibility:hidden).
      Los tres son `aria-hidden`; el `aria-label` del H1 tiene el
      texto completo — screen readers no ven la animación.
   4. Cursor 0.06em × 0.82em en --signal, blink 530ms, `.done` lo
      esconde al terminar — no queda titilando.
   5. prefers-reduced-motion: reduce → no animación, texto completo
      al instante, sin cursor.
   6. `document.fonts.ready` antes de medir la altura — evita medir
      con fallback y que la altura salte cuando carga Archivo. */

const FULL =
  'CRUDA builds the narrative that founder-led companies need at the point where what they built stopped explaining itself.'
const SPEED = 22
const START_DELAY = 300

export default function HomeHero() {
  const h1Ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const h1 = h1Ref.current
    if (!h1) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    let cancelled = false
    let timeoutId: number | undefined
    let startId: number | undefined

    const setup = () => {
      if (cancelled) return

      /* Lock height BEFORE mutating, con el texto completo aún dentro. */
      const naturalHeight = h1.offsetHeight
      h1.style.minHeight = `${naturalHeight}px`

      const visible = document.createElement('span')
      visible.setAttribute('aria-hidden', 'true')
      visible.className = 'type-visible'

      const cursor = document.createElement('span')
      cursor.setAttribute('aria-hidden', 'true')
      cursor.className = 'type-cursor'

      const invisible = document.createElement('span')
      invisible.setAttribute('aria-hidden', 'true')
      invisible.className = 'type-invisible'
      invisible.textContent = FULL

      h1.textContent = ''
      h1.appendChild(visible)
      h1.appendChild(cursor)
      h1.appendChild(invisible)

      let i = 0
      const tick = () => {
        if (cancelled) return
        if (i >= FULL.length) {
          cursor.classList.add('done')
          return
        }
        i++
        visible.textContent = FULL.slice(0, i)
        invisible.textContent = FULL.slice(i)
        timeoutId = window.setTimeout(tick, SPEED)
      }
      startId = window.setTimeout(tick, START_DELAY)
    }

    if (document.fonts && typeof document.fonts.ready?.then === 'function') {
      document.fonts.ready.then(setup)
    } else {
      setup()
    }

    return () => {
      cancelled = true
      if (timeoutId !== undefined) window.clearTimeout(timeoutId)
      if (startId !== undefined) window.clearTimeout(startId)
    }
  }, [])

  return (
    <section className="home-hero">
      <h1 ref={h1Ref} aria-label={FULL}>
        {FULL}
      </h1>
    </section>
  )
}
