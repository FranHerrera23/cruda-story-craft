'use client'

import { useEffect } from 'react'
import './planes.css'

/* Motor del apilado · brief F11.0 (21-sep · autónomo).
   Reemplaza AnchorAdvance en las 5 secciones marcadas del prototipo.

   Este componente NO renderiza nada visible: se monta al lado de
   los planos y aplica cuatro efectos, todos atados a scroll (rAF),
   todos reversibles al scrollear hacia atrás.

     1  z-index por orden de DOM sobre los hijos de <main class="stack">.
        Fix del transparente: un sticky pinta sobre los hermanos
        estáticos posteriores. z-index creciente por índice de DOM
        obliga a que lo posterior cubra a lo anterior.
     2  Reveal del contenido de cada plano · [data-r] atado al scroll,
        escalonado por hijo. Sin IntersectionObserver.
     3  Escala + fade del .plane__in cuando el siguiente hermano lo
        cubre (measuring nx.getBoundingClientRect().top / vh).
     4  Nada más. La barra la maneja HomeChrome en F11.2.

   Los sticky quedan a cargo del CSS. El motor no cambia position. */

export default function PlanesStack() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const doc = document
    const stack = doc.getElementById('stack')
    if (!stack) return

    doc.body.classList.add('js')

    /* F48 · gate mobile · en touch o viewport chico no se monta
       el scroll-scrub. El reveal de `data-r` sigue quedando en el
       DOM (el marcado ocurre antes del early-return abajo), pero
       el CSS de F48 lo neutraliza con `opacity: 1 !important` y
       `transform: none !important`. Desktop no cambia. */
    const reduce =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(max-width: 767px)').matches

    // 1 · z-index por orden de DOM.
    Array.from(stack.children).forEach((el, i) => {
      const s = getComputedStyle(el as HTMLElement)
      if (s.position === 'static') (el as HTMLElement).style.position = 'relative'
      ;(el as HTMLElement).style.zIndex = String(i + 1)
    })

    // 2 · Marcar los nodos animables de cada plano en orden de lectura.
    //    El selector cubre la anatomía del prototipo y evita anidamientos:
    //    si un ancestro ya está marcado no se marca el descendiente.
    const planes = Array.from(stack.querySelectorAll<HTMLElement>('[data-plane]'))
    const per = new Map<HTMLElement, HTMLElement[]>()
    const sel =
      '.eyebrow,.name,.rule,.lede,.body,.quote,.cell,.irow,.go,.mail,' +
      '.home-founder__portrait,.home-what-others__item,.pitem,.press'
    planes.forEach(pl => {
      const nodes = Array.from(pl.querySelectorAll<HTMLElement>(sel))
      const seen: HTMLElement[] = []
      nodes.forEach(n => {
        if (seen.some(x => x.contains(n))) return
        seen.push(n)
        n.setAttribute('data-r', '')
      })
      per.set(pl, seen)
    })

    if (reduce) return

    const cl = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v)

    const frame = () => {
      const vh = window.innerHeight
      for (let i = 0; i < planes.length; i++) {
        const pl = planes[i]
        const inn = pl.firstElementChild as HTMLElement | null
        const nx = pl.nextElementSibling as HTMLElement | null
        const nodes = per.get(pl) || []

        // Reveal · atado al scroll, escalonado.
        const r = pl.getBoundingClientRect()
        const enter = cl((vh - r.top) / (vh * 0.55), 0, 1)
        const n = nodes.length
        for (let k = 0; k < n; k++) {
          const start = k * (0.42 / Math.max(n - 1, 1))
          const o = cl((enter - start) / 0.58, 0, 1)
          const e = 1 - Math.pow(1 - o, 3)
          nodes[k].style.opacity = String(e)
          nodes[k].style.transform = `translateY(${((1 - e) * 22).toFixed(2)}px)`
        }

        if (!inn) continue
        if (!nx) {
          inn.style.transform = ''
          inn.style.opacity = ''
          continue
        }
        // Escala + fade cuando el siguiente hermano (cualquiera) cubre.
        const c = cl(1 - nx.getBoundingClientRect().top / vh, 0, 1)
        inn.style.transform = `scale(${(1 - 0.035 * c).toFixed(4)})`
        inn.style.opacity = (1 - 0.55 * c).toFixed(3)
      }
    }

    let tick = false
    const on = () => {
      if (tick) return
      tick = true
      requestAnimationFrame(() => {
        tick = false
        frame()
      })
    }

    frame()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on, { passive: true })
    return () => {
      window.removeEventListener('scroll', on)
      window.removeEventListener('resize', on)
    }
  }, [])

  return null
}
