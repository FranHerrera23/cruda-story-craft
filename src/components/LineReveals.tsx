'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/* Revelado por línea — motion v3 §6 + orquestador §2 (14-sep).

   Mide el corte real de cada línea del texto y reescribe el DOM
   con `.rv-line > span` para que cada línea se anime como bloque.
   El HTML servido queda intacto hasta que este componente monta:
   el texto entero está en el <h1>/<h2>/<p> correspondiente antes
   de que JS corra.

   Orquestador · el bug más grave del rollout de motion v3 era que
   este componente y RevealScroll corrían en paralelo. LineReveals
   necesita medir; RevealScroll no. Los cuerpos ganaban la carrera
   y aparecían antes que los títulos — jerarquía invertida.

   Fix: este componente parte TODOS los títulos al montar, y solo
   entonces marca `html[data-lines-ready="true"]` y dispatchea
   `cruda:lines-ready`. RevealScroll no registra ningún observer
   hasta ver ese flag. Del mismo punto de partida, el orden lo
   decide el stagger de cada sección, no quién arrancó primero.

   Brief 14-sep P0 · corre en CADA ruta.
   Next SPA no remonta el layout: sin usePathname como dep, el
   useEffect fire solo una vez y las rutas siguientes se quedan
   sin split. El flag linesReady se limpia en PageShell al cubrir;
   este componente re-corre con la ruta nueva, splittea sus títulos
   nuevos, y vuelve a marcar el flag. Es idempotente: nodos ya
   splitteados se saltan (chequeo de `.rv-line` hijo).

   Delay compuesto por línea:
     transition-delay = --seq-delay + --line-index × --line-stagger

   --seq-delay lo pone RevealScroll (delay dentro de la sección).
   --line-index lo pone acá (posición 0..N de la línea).
   --line-stagger lo hereda del elemento (default 90ms, hero 140ms
   via `data-line-stagger`).

   RESIZE
   `data-lines-original` guarda el innerHTML crudo. En cada resize
   de ancho (debounced 200ms) se restaura y se vuelve a partir.

   FUENTES
   Con next/font display:swap el corte real depende de que Archivo
   ya haya swapeado. Esperamos `document.fonts.ready` antes del
   primer split. Fallback: si el promise no resuelve en 400ms
   arrancamos con la fuente actual y aceptamos el drift.

   REDUCED MOTION
   No se instala el splitter. Igual marcamos el flag y disparamos
   el evento — RevealScroll no puede quedar bloqueado esperando
   algo que no va a pasar. Bajo reduce el texto queda visible en
   su forma servida. */

const SELECTOR = '[data-reveal="lines"]'
const DEFAULT_STAGGER_MS = 90
const SNAPSHOT_ATTR = 'data-lines-original'
const FONTS_TIMEOUT_MS = 400

type Token = { kind: 'word'; el: HTMLElement } | { kind: 'break' }

/* Split idempotente: si el elemento ya tiene `.rv-line` hijos, ya
   fue splitteado y se saltea. En resize pasamos `force=true` para
   restaurar desde snapshot y volver a partir con el ancho nuevo. */
function splitElement(el: HTMLElement, force = false) {
  if (!force && el.querySelector('.rv-line')) return

  const stagger =
    Number(el.dataset.lineStagger ?? '') || DEFAULT_STAGGER_MS
  el.style.setProperty('--line-stagger', `${stagger}ms`)

  if (!el.hasAttribute(SNAPSHOT_ATTR)) {
    el.setAttribute(SNAPSHOT_ATTR, el.innerHTML)
  } else {
    el.innerHTML = el.getAttribute(SNAPSHOT_ATTR) as string
  }

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

  /* Line count al dataset — RevealScroll lo lee para el delay
     del body (§2: 120ms + lineCount × stagger + 160ms). */
  el.dataset.lineCount = String(lines.length)

  el.innerHTML = ''
  lines.forEach((lineText, idx) => {
    const line = document.createElement('span')
    line.className = 'rv-line'
    const inner = document.createElement('span')
    inner.style.setProperty('--line-index', String(idx))
    inner.textContent = lineText
    line.appendChild(inner)
    el.appendChild(line)
  })
}

function markReady() {
  document.documentElement.dataset.linesReady = 'true'
  document.dispatchEvent(new CustomEvent('cruda:lines-ready'))
}

export default function LineReveals() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

    /* Bajo reduce motion no split, pero SI marcamos el flag —
       RevealScroll depende de él para arrancar. */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      markReady()
      return
    }

    /* Query en cada corrida — el DOM cambió al cambiar la ruta.
       No podemos cachear la lista entre rutas. */
    const gather = () =>
      Array.from(document.querySelectorAll<HTMLElement>(SELECTOR))

    const run = () => {
      gather().forEach((el) => splitElement(el))
      markReady()
    }

    /* fonts.ready con tope de 400ms. Sin cap, un font manifest lento
       podría bloquear el resto del reveal system. Con cap aceptamos
       drift de medición al swap y priorizamos que el orden salga. */
    let dispatched = false
    const dispatch = () => {
      if (dispatched) return
      dispatched = true
      run()
    }
    if (document.fonts?.ready?.then) {
      document.fonts.ready.then(dispatch).catch(dispatch)
      window.setTimeout(dispatch, FONTS_TIMEOUT_MS)
    } else {
      run()
    }

    /* Resize: solo en cambios reales de ancho. Los cambios de
       altura por barras de dirección móvil no cuentan. Force=true
       para volver a medir con el ancho nuevo. */
    let resizeTimer: number | undefined
    let lastWidth = window.innerWidth
    const onResize = () => {
      if (window.innerWidth === lastWidth) return
      lastWidth = window.innerWidth
      if (resizeTimer !== undefined) window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(() => {
        gather().forEach((el) => splitElement(el, true))
      }, 200)
    }
    window.addEventListener('resize', onResize)

    return () => {
      if (resizeTimer !== undefined) window.clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
    }
  }, [pathname])

  return null
}
