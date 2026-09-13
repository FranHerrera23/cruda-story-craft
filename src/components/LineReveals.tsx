'use client'

import { useEffect } from 'react'

/* Revelado por línea — motion v3 §6.

   Mide el corte real de cada línea del texto y reescribe el DOM
   con `.rv-line > span` para que cada línea se pueda animar como
   un bloque independiente. El HTML servido queda intacto hasta que
   este componente monta: el texto entero está en el <h1>/<h2>/<p>
   correspondiente, sin depender de JS para existir (motion v3 §12).

   Va sobre elementos marcados con `data-reveal="lines"`. Cuando
   RevealScroll agrega `.on` al padre, cada `.rv-line > span` deshace
   su `translateY(105%)` con transition-delay escalonado (90ms por
   línea).

   MEDICIÓN
   Cada palabra se envuelve en un span temporal `data-word` en
   inline-block y se lee su `offsetTop`. Palabras con el mismo top
   comparten línea. Un `<br>` en la fuente rompe el grupo y arranca
   una línea nueva por autoría (el H1 del hero usa esto).

   RESIZE
   Se guarda el innerHTML original en `data-lines-original`. En
   cada resize (debounced 200ms) se restaura y se vuelve a partir.

   FUENTES
   Con next/font display:swap Archivo puede tardar unos frames en
   swapear después del primer paint. Sin esperar `document.fonts.ready`
   la medición usa la fuente fallback y el corte queda mal. Corremos
   una partición inicial inmediata (para minimizar el flash de texto
   raw) y otra al resolver `fonts.ready` para corregir el corte.

   REDUCED MOTION
   No se instala. El texto queda en su forma servida — visible
   sin animación. */

const SELECTOR = '[data-reveal="lines"]'
const STAGGER_MS = 90
const SNAPSHOT_ATTR = 'data-lines-original'

type Token = { kind: 'word'; el: HTMLElement } | { kind: 'break' }

function splitElement(el: HTMLElement) {
  /* Snapshot en primer pass; restaurar en subsiguientes. */
  if (!el.hasAttribute(SNAPSHOT_ATTR)) {
    el.setAttribute(SNAPSHOT_ATTR, el.innerHTML)
  } else {
    el.innerHTML = el.getAttribute(SNAPSHOT_ATTR) as string
  }

  /* Reemplazar text nodes por word spans, conservar <br> como
     marcadores de corte forzado. Otros elementos se copian tal cual
     (no esperado en H1/H2/P plano, pero no rompe si aparece). */
  const tokens: Token[] = []
  const fragment = document.createDocumentFragment()

  const children = Array.from(el.childNodes)
  for (const node of children) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent ?? ''
      const parts = text.split(/(\s+)/)
      for (const part of parts) {
        if (part === '') continue
        if (/^\s+$/.test(part)) {
          fragment.appendChild(document.createTextNode(' '))
        } else {
          const span = document.createElement('span')
          span.setAttribute('data-word', '')
          span.style.display = 'inline-block'
          span.textContent = part
          fragment.appendChild(span)
          tokens.push({ kind: 'word', el: span })
        }
      }
    } else if (
      node.nodeType === Node.ELEMENT_NODE &&
      (node as HTMLElement).tagName === 'BR'
    ) {
      fragment.appendChild(document.createElement('br'))
      tokens.push({ kind: 'break' })
    } else {
      fragment.appendChild(node.cloneNode(true))
    }
  }

  el.innerHTML = ''
  el.appendChild(fragment)

  /* Agrupar palabras por offsetTop; los BREAK fuerzan línea nueva. */
  const lines: string[] = []
  let current: string[] = []
  let currentTop: number | null = null

  const pushLine = () => {
    if (current.length) {
      lines.push(current.join(' '))
      current = []
    }
    currentTop = null
  }

  for (const tok of tokens) {
    if (tok.kind === 'break') {
      pushLine()
      continue
    }
    const top = tok.el.offsetTop
    const text = tok.el.textContent ?? ''
    if (currentTop === null) {
      currentTop = top
      current.push(text)
    } else if (Math.abs(top - currentTop) < 2) {
      current.push(text)
    } else {
      pushLine()
      currentTop = top
      current.push(text)
    }
  }
  pushLine()

  /* Rebuild final: `.rv-line > span`, uno por línea. Usa <span> con
     display:block (via CSS) para no infringir el content model de
     h1/h2/p con divs. Stagger inline sobre el span interno. */
  el.innerHTML = ''
  lines.forEach((lineText, idx) => {
    const line = document.createElement('span')
    line.className = 'rv-line'
    const inner = document.createElement('span')
    inner.style.transitionDelay = `${idx * STAGGER_MS}ms`
    inner.textContent = lineText
    line.appendChild(inner)
    el.appendChild(line)
  })
}

export default function LineReveals() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(SELECTOR),
    )
    if (elements.length === 0) return

    const run = () => elements.forEach(splitElement)

    run()
    if (document.fonts && typeof document.fonts.ready?.then === 'function') {
      document.fonts.ready.then(run).catch(() => {})
    }

    let resizeTimer: number | undefined
    let lastWidth = window.innerWidth
    const onResize = () => {
      if (window.innerWidth === lastWidth) return
      lastWidth = window.innerWidth
      if (resizeTimer !== undefined) window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(run, 200)
    }
    window.addEventListener('resize', onResize)

    return () => {
      if (resizeTimer !== undefined) window.clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return null
}
