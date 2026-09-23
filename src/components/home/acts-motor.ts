/* Home · Acts · motor
   Brief F8 (17-sep) · dos modos en un motor.

   Cero transition y cero animation en el CSS de los actos. Todo
   el movimiento es función de `p` sobre el track, escrito cada
   frame.

   ═══ Modo 'phrase' · act 1 (F8 §1) ═══

   Cada beat es una frase completa. Dentro de la ventana
   [from, to] del beat, con local p:
       0.00 – 0.15   enter · opacity 0→1, ty +16px→0
       0.15 – 0.85   hold  · opacity 1, ty 0
       0.85 – 1.00   exit  · opacity 1→0, ty 0→-16px
   Fuera de la ventana · opacity 0. Sin fill, sin snap, sin
   LineReveals · una sola opacidad por beat.

   ═══ Modo 'progressive' · act 2 (F2 §2.1) ═══

   Relleno secuencial dentro de la ventana [from, to] del beat
   con N líneas visuales:
     local p  0.00 – 0.08   settle · nada se mueve
              0.08 – 0.92   relleno · N tramos SIN SOLAPE
              0.92 – 1.00   hold · todas al 100%

     línea i  inicio_relleno_local = i     / N
              fin_relleno_local    = (i+1) / N

   Snap a borde de palabra sobre la .rv-line (medido con Range
   API, cacheado, invalidado en resize + document.fonts.ready).

   ═══ Cámara (F2 §2.5 · solo act 2) ═══

   Cada art tiene [start, end] sobre p del acto y (startScale,
   endScale). Solo el art activo se pinta (opacity 1); los otros
   opacity 0 · corte duro entre archivos.

   ═══ Lenis (F2 §2.6) ═══

   Mientras un acto está en viewport, wheelMultiplier baja a 0.35
   y duration sube a 2.0. Interpolación 400ms entre juegos de
   parámetros al entrar/salir del acto · sin tirón. */

import type { Beat, Art } from './acts-config'
import {
  LENIS_IN_ACT,
  LENIS_OUT_ACT,
  LENIS_INTERP_MS,
} from './acts-config'

const clamp = (v: number, a: number, b: number) =>
  Math.max(a, Math.min(v, b))

/* ══════════ Word-boundary quantization ══════════
   Mide una sola vez por elemento y cachea; se invalida en resize
   incrementando `boundariesVersion`. WeakMap para permitir GC
   cuando el elemento se desmonta. */

type CachedBounds = { version: number; bounds: number[] }
const boundariesCache = new WeakMap<HTMLElement, CachedBounds>()
let boundariesVersion = 0

function measureWordBoundaries(lineEl: HTMLElement): number[] {
  const rect = lineEl.getBoundingClientRect()
  if (rect.width === 0) return [0, 100]

  const boundaries: number[] = [0]
  const range = document.createRange()
  try {
    range.setStart(lineEl, 0)
  } catch {
    return [0, 100]
  }

  const walker = document.createTreeWalker(lineEl, NodeFilter.SHOW_TEXT)
  let textNode: Text | null
  while ((textNode = walker.nextNode() as Text | null)) {
    const text = textNode.textContent || ''
    for (let i = 0; i < text.length; i++) {
      if (/\s/.test(text[i])) {
        try {
          range.setEnd(textNode, i)
        } catch {
          continue
        }
        const r = range.getBoundingClientRect()
        if (r.width === 0) continue
        const rightX = r.right - rect.left
        const pct = (rightX / rect.width) * 100
        if (pct > 0 && pct <= 100) boundaries.push(pct)
      }
    }
  }
  boundaries.push(100)
  /* Dedupe + sort ascendente. */
  return Array.from(new Set(boundaries)).sort((a, b) => a - b)
}

function getBounds(el: HTMLElement): number[] {
  const cached = boundariesCache.get(el)
  if (cached && cached.version === boundariesVersion) return cached.bounds
  const bounds = measureWordBoundaries(el)
  boundariesCache.set(el, { version: boundariesVersion, bounds })
  return bounds
}

function snapToWord(el: HTMLElement, raw: number): number {
  if (raw <= 0) return 0
  if (raw >= 100) return 100
  const bounds = getBounds(el)
  let snap = 0
  for (const b of bounds) {
    if (b <= raw) snap = b
    else break
  }
  return snap
}

/* Invalidación global en dos eventos: resize (viewport cambió) y
   font-load (las métricas de texto cambiaron después del primer
   paint). Los actos comparten el listener.

   font-loading race: el motor mide boundaries en el primer draw
   con las fuentes de fallback (system-ui, sans-serif). Cuando
   Instrument Serif y Archivo terminan de cargar, el texto reflow
   pero el cache queda con los valores viejos → fills que no
   caen en bordes de palabra. document.fonts.ready dispara una
   vez, incrementa la versión y el próximo hit re-mide contra
   la geometría real. */
let resizeInstalled = false
function installResizeListener() {
  if (resizeInstalled) return
  resizeInstalled = true
  window.addEventListener('resize', () => {
    boundariesVersion++
  })
  if (typeof document !== 'undefined' && document.fonts?.ready) {
    document.fonts.ready
      .then(() => {
        boundariesVersion++
      })
      .catch(() => {
        /* Safari privado o CSP raro que rompe la promise ·
           el cache queda con los valores de fallback y algún
           borde puede fallar. No es fatal. */
      })
  }
}

/* ══════════ Lenis quiet mode · interpolación 400ms ══════════
   Contador compartido entre los dos actos. Cada IntersectionObserver
   suma/resta uno; si al menos un acto está en viewport, Lenis va
   quiet. Al salir de todos, restaura defaults.

   Interpolación con easeOutCubic sobre 400ms entre juegos de
   parámetros. rAF-driven · nunca hay salto en un frame. */

type LenisOptions = {
  wheelMultiplier: number
  duration: number
}

let actsInView = 0
let interpFrom: LenisOptions = { ...LENIS_OUT_ACT }
let interpAnimId: number | null = null

type LenisRef = { options: { wheelMultiplier: number; duration: number } }

function getLenis(): LenisRef | null {
  if (typeof window === 'undefined') return null
  const w = window as unknown as { __lenis?: LenisRef }
  return w.__lenis ?? null
}

function setLenisRaw(opts: LenisOptions) {
  const lenis = getLenis()
  if (!lenis?.options) return
  lenis.options.wheelMultiplier = opts.wheelMultiplier
  lenis.options.duration = opts.duration
}

function interpolateLenis(to: LenisOptions) {
  if (interpAnimId != null) cancelAnimationFrame(interpAnimId)
  const from = { ...interpFrom }
  const start = performance.now()
  const step = () => {
    const now = performance.now()
    const t = Math.min(1, (now - start) / LENIS_INTERP_MS)
    const ease = 1 - Math.pow(1 - t, 3)
    const current: LenisOptions = {
      wheelMultiplier:
        from.wheelMultiplier +
        (to.wheelMultiplier - from.wheelMultiplier) * ease,
      duration: from.duration + (to.duration - from.duration) * ease,
    }
    setLenisRaw(current)
    interpFrom = current
    if (t < 1) {
      interpAnimId = requestAnimationFrame(step)
    } else {
      interpAnimId = null
    }
  }
  interpAnimId = requestAnimationFrame(step)
}

export function enterAct() {
  actsInView++
  if (actsInView === 1) interpolateLenis(LENIS_IN_ACT)
}

export function leaveAct() {
  actsInView = Math.max(0, actsInView - 1)
  if (actsInView === 0) interpolateLenis(LENIS_OUT_ACT)
}

/* ══════════ runAct ══════════
   Setea listeners de scroll+resize sobre el track, calcula p en
   cada frame y aplica:
     · Beats · visibility hidden/visible + --fill secuencial por
       línea con quantización a borde de palabra
     · Arts  · corte duro (opacity 1 solo el activo) + transform
       scale interpolando entre startScale y endScale
     · Counter · texto "NN /NN" con el beat activo

   Devuelve una función de cleanup — el componente la llama en el
   return del useEffect. */

const SETTLE_END = 0.08
const RELLENO_END = 0.92

/* Phrase mode · anchos de enter/exit en unidades de track-p.
   Wireframe home §4.3 · 17-sep.
   El primer beat no tiene enter (arranca visible al top). El
   último beat no tiene exit (queda visible al fin del acto). Los
   beats intermedios (no aplica con 2 beats) tendrían ambos. */
const PHRASE_ENTER_WIDTH_P = 0.11
const PHRASE_EXIT_WIDTH_P = 0.15
const PHRASE_TY_PX = 40

export type RunActOptions = {
  track: HTMLElement
  beats: Beat[]
  arts?: Art[]
  mode?: 'progressive' | 'phrase'
  totalBeats?: number
}

export function runAct({
  track,
  beats,
  arts = [],
  mode = 'progressive',
  totalBeats,
}: RunActOptions) {
  installResizeListener()

  const beatEls = Array.from(
    track.querySelectorAll<HTMLElement>('[data-beat]'),
  )
  const artEls = Array.from(
    track.querySelectorAll<HTMLElement>('[data-art]'),
  )
  const counter = track.querySelector<HTMLElement>('[data-counter]')
  const stage = track.querySelector<HTMLElement>('.act__stage')
  const denom = String(totalBeats ?? beats.length).padStart(2, '0')

  let ticking = false
  let lastActive = -1

  function draw() {
    const rect = track.getBoundingClientRect()
    const total = track.offsetHeight - window.innerHeight
    if (total <= 0) return
    const p = clamp(-rect.top / total, 0, 1)

    /* F25 §2 · fade del stage a medida que llega al pin.
       El .act outer (620vh, natural offset después del plano
       previo) no es sticky en sí. Su stage sí (sticky top:0
       height:100svh). Antes de que el outer.top llegue a 0 del
       viewport, el stage ya está pintado en la mitad del
       viewport y su "STORY" chip + contador tapan el h2 del
       plano previo (HomeWhatCrudaIs · "We translate cultures
       into business.").
       Bisect: el mismo patrón se ve desde F21 (ab7f23e). No
       hay commit-regresor · es inherente al ensamble sticky
       plane + sticky stage con outer relative.
       Fix mínimo: opacity del stage = 0 mientras rect.top > 0
       (outer aún debajo del viewport top), llega a 1 cuando
       rect.top ≤ 0 (outer alcanza el pin). Fade window 40vh
       para que el ingreso no sea corte duro. */
    if (stage) {
      const arrival = clamp(1 - rect.top / (window.innerHeight * 0.4), 0, 1)
      stage.style.opacity = arrival.toFixed(3)
    }

    let active = -1

    if (mode === 'phrase') {
      /* ── Modo phrase con overlap · wireframe home §4.3 ──
         Cada beat tiene una ventana [from, to] sobre p del track.
         Dentro de esa ventana:
           · Primer beat  · sin enter (arranca en 1) · exit en el
                            último PHRASE_EXIT_WIDTH_P
           · Último beat  · enter en el primer PHRASE_ENTER_WIDTH_P
                            · sin exit (queda en 1)
           · Beats medios · enter + hold + exit
         Fuera de la ventana · el primer beat quedaría en 1 hacia
         atrás (never sucede porque from=0 del primero), el
         último en 1 hacia adelante (p clamped a 1 lo cubre), y
         los medios en 0.
         Las ventanas SE SOLAPAN a propósito para que en el
         cruce ambas frases estén parciales · CERO frames con
         pantalla vacía. */
      const lastIdx = beats.length - 1
      beats.forEach((b, i) => {
        const el = beatEls[i]
        if (!el) return
        const isFirst = i === 0
        const isLast = i === lastIdx
        let opacity = 0
        let ty = 0
        if (p < b.from) {
          opacity = 0
          ty = PHRASE_TY_PX
        } else if (p > b.to) {
          if (isLast) {
            opacity = 1
            ty = 0
          } else {
            opacity = 0
            ty = -PHRASE_TY_PX
          }
        } else {
          const enterEnd = isFirst ? b.from : b.from + PHRASE_ENTER_WIDTH_P
          const exitStart = isLast ? b.to : b.to - PHRASE_EXIT_WIDTH_P
          if (p < enterEnd) {
            const t = (p - b.from) / (enterEnd - b.from)
            opacity = t
            ty = PHRASE_TY_PX * (1 - t)
          } else if (p > exitStart) {
            const t = (p - exitStart) / (b.to - exitStart)
            opacity = 1 - t
            ty = -PHRASE_TY_PX * t
          } else {
            opacity = 1
            ty = 0
          }
        }
        if (opacity > 0) active = i
        el.style.opacity = opacity.toFixed(3)
        el.style.setProperty('--ty', ty.toFixed(2) + 'px')
      })
    } else {
      /* ── Modo progressive · fill secuencial con snap a palabra.
         F2-FIX bug 1 (17-sep) · iteración pasa de `[data-line]`
         (línea autoral) a `.lit .rv-line` (visual line real
         medida por LineReveals). Cada .rv-line recibe su propio
         --fill y su clip-path aplica sobre su propio bounding
         box · nunca una banda compartida.

         Antes de que LineReveals split-tee las .lit, el motor no
         encuentra .rv-line y no setea nada · el .dim queda
         visible en su 22% y el copy se lee. Cuando LineReveals
         termina (evento cruda:lines-ready o resize), la próxima
         frame de scroll ya escribe los fills. ── */
      beats.forEach((b, i) => {
        const el = beatEls[i]
        if (!el) return
        const on = p >= b.from && p <= b.to
        el.style.visibility = on ? 'visible' : 'hidden'
        if (!on) return
        active = i

        const localP = clamp((p - b.from) / (b.to - b.from), 0, 1)
        const visualLines = el.querySelectorAll<HTMLElement>('.lit .rv-line')
        const N = visualLines.length
        if (N === 0) return

        let phase: 'settle' | 'relleno' | 'hold'
        let rellenoLocal = 0
        if (localP < SETTLE_END) {
          phase = 'settle'
        } else if (localP >= RELLENO_END) {
          phase = 'hold'
        } else {
          phase = 'relleno'
          rellenoLocal =
            (localP - SETTLE_END) / (RELLENO_END - SETTLE_END)
        }

        visualLines.forEach((rvLine, j) => {
          let rawFill: number
          if (phase === 'settle') {
            rawFill = 0
          } else if (phase === 'hold') {
            rawFill = 100
          } else {
            const lineStart = j / N
            const lineEnd = (j + 1) / N
            if (rellenoLocal < lineStart) rawFill = 0
            else if (rellenoLocal >= lineEnd) rawFill = 100
            else
              rawFill =
                ((rellenoLocal - lineStart) / (lineEnd - lineStart)) * 100
          }

          /* Snap a borde de palabra sobre la .rv-line misma · sus
             bounds coinciden con su ancho renderizado. */
          const snapped = snapToWord(rvLine, rawFill)
          rvLine.style.setProperty('--fill', snapped + '%')
        })
      })
    }

    /* ── Counter · último beat activo, nunca 00 ── */
    if (counter) {
      if (active >= 0) lastActive = active
      if (lastActive >= 0) {
        counter.textContent =
          String(lastActive + 1).padStart(2, '0') + ' /' + denom
      }
    }

    /* ── Arts · crossfade suave + escala interpolada por art ──
       Wireframe home §5 (17-sep). Reemplaza el hard-cut de F2
       §2.5 SOLO para #act2. Cada art declara [in0, in1, out0,
       out1] y su opacity es función de p:

         p ≤ in0                 → 0
         in0 < p ≤ in1           → lineal 0..1
         in1 < p ≤ out0          → 1
         out0 < p ≤ out1         → lineal 1..0
         p > out1                → 0

       Con in0==in1 y out0==out1 el comportamiento colapsa a
       hard-cut · retro-compatible.

       Múltiples arts pueden tener opacity > 0 simultáneamente
       (en los cruces). Cada uno con su propia escala. La escala
       interpola linealmente desde startScale (en in0) a endScale
       (en out1) sobre el rango del art. ── */
    if (arts.length > 0) {
      artEls.forEach((el, i) => {
        const a = arts[i]
        let opacity: number
        /* Trampa medida (18-sep) · con in0=in1=0 la comparación
           `p <= in0` daba opacity 0 en p=0, dejando el primer
           arte apagado el frame inicial. Con `p < in0` estricto
           el caso hard-cut (in0==in1) cae al branch siguiente y
           el ternario devuelve 1 sin dividir por 0. */
        if (p < a.in0) opacity = 0
        else if (p <= a.in1) {
          opacity = a.in1 === a.in0 ? 1 : (p - a.in0) / (a.in1 - a.in0)
        } else if (p <= a.out0) opacity = 1
        else if (p <= a.out1) {
          opacity = a.out1 === a.out0 ? 0 : 1 - (p - a.out0) / (a.out1 - a.out0)
        } else opacity = 0

        /* Escala sobre el rango visible del art [in0, out1] · el
         "pull-back" acumula continuo a lo largo del tiempo total
         del art, incluso durante los crossfades. */
        const span = a.out1 - a.in0
        const t = span > 0 ? clamp((p - a.in0) / span, 0, 1) : 0
        const scale = a.startScale + (a.endScale - a.startScale) * t

        if (opacity > 0) {
          el.style.opacity = opacity.toFixed(3)
          el.style.transform = `scale(${scale.toFixed(4)})`
        } else {
          el.style.opacity = '0'
        }
      })
    }
  }

  function onScroll() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      draw()
      ticking = false
    })
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  draw()

  return () => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
  }
}
