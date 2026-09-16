/* Home · Acts · motor
   Brief de reconstrucción v1 (16-sep) · F2.

   Uno por acto, mismo código. Cero transition y cero animation
   en el CSS de los actos. Todo el movimiento es función de `p`
   sobre el track, escrito cada frame.

   ═══ Relleno secuencial (F2 §2.1) ═══

   Dentro de la ventana de un beat con N líneas:
     p_beat  0.00 – 0.08   settle · nada se mueve
             0.08 – 0.92   relleno · N tramos iguales SIN SOLAPE
             0.92 – 1.00   hold · todas al 100%

     línea i  inicio_relleno_local = i     / N
              fin_relleno_local    = (i+1) / N

   INVARIANTE: en cualquier p existe como máximo UNA línea con
   --fill entre 0% y 100%. Ese es el test binario de F2.

   ═══ Quantización a borde de palabra (F2 §2.2) ═══

   El relleno crudo (0..100) se snapea al borde derecho de la
   palabra más cercana por debajo. Se mide con Range API en el
   texto de la copia .lit de cada línea, se cachea, se
   recalcula solo en resize. El fill avanza a saltos de palabra.

   ═══ Cámara (F2 §2.5) ═══

   Cada art tiene [start, end] sobre p del acto y (startScale,
   endScale). Solo el art activo se pinta (opacity 1); los otros
   opacity 0 · corte duro entre archivos. Escala interpola
   linealmente dentro de [start, end] · sin transition, sin
   animation.

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
  lerp?: number
}

let actsInView = 0
let interpFrom: LenisOptions = { ...LENIS_OUT_ACT }
let interpAnimId: number | null = null

type LenisRef = { options: { wheelMultiplier: number; duration: number; lerp?: number } }

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
  if (opts.lerp !== undefined) lenis.options.lerp = opts.lerp
}

function interpolateLenis(to: LenisOptions) {
  if (interpAnimId != null) cancelAnimationFrame(interpAnimId)
  const from = { ...interpFrom }
  const start = performance.now()
  const step = () => {
    const now = performance.now()
    const t = Math.min(1, (now - start) / LENIS_INTERP_MS)
    /* easeOutCubic · rápido al arranque, se asienta suave. */
    const ease = 1 - Math.pow(1 - t, 3)
    const current: LenisOptions = {
      wheelMultiplier:
        from.wheelMultiplier +
        (to.wheelMultiplier - from.wheelMultiplier) * ease,
      duration: from.duration + (to.duration - from.duration) * ease,
      lerp:
        from.lerp !== undefined && to.lerp !== undefined
          ? from.lerp + (to.lerp - from.lerp) * ease
          : to.lerp,
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

export type RunActOptions = {
  track: HTMLElement
  beats: Beat[]
  arts?: Art[]
  totalBeats?: number
}

export function runAct({ track, beats, arts = [], totalBeats }: RunActOptions) {
  installResizeListener()

  const beatEls = Array.from(
    track.querySelectorAll<HTMLElement>('[data-beat]'),
  )
  const artEls = Array.from(
    track.querySelectorAll<HTMLElement>('[data-art]'),
  )
  const counter = track.querySelector<HTMLElement>('[data-counter]')
  const denom = String(totalBeats ?? beats.length).padStart(2, '0')

  let ticking = false
  let lastActive = -1

  function draw() {
    const rect = track.getBoundingClientRect()
    const total = track.offsetHeight - window.innerHeight
    if (total <= 0) return
    const p = clamp(-rect.top / total, 0, 1)

    let active = -1

    /* ── Beats · fill secuencial con snap a palabra ── */
    beats.forEach((b, i) => {
      const el = beatEls[i]
      if (!el) return
      const on = p >= b.from && p <= b.to
      el.style.visibility = on ? 'visible' : 'hidden'
      if (!on) return
      active = i

      const localP = clamp((p - b.from) / (b.to - b.from), 0, 1)
      const lines = el.querySelectorAll<HTMLElement>('[data-line]')
      const N = lines.length
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

      lines.forEach((ln, j) => {
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

        /* Snap a borde de palabra sobre la copia .lit. */
        const litEl = ln.querySelector<HTMLElement>('.lit')
        const snapped = litEl ? snapToWord(litEl, rawFill) : rawFill
        ln.style.setProperty('--fill', snapped + '%')
      })
    })

    /* ── Counter · último beat activo, nunca 00 ── */
    if (counter) {
      if (active >= 0) lastActive = active
      if (lastActive >= 0) {
        counter.textContent =
          String(lastActive + 1).padStart(2, '0') + ' /' + denom
      }
    }

    /* ── Arts · corte duro + escala continua ── */
    if (arts.length > 0) {
      let activeArtIdx = -1
      for (let i = 0; i < arts.length; i++) {
        if (p >= arts[i].start && p < arts[i].end) {
          activeArtIdx = i
          break
        }
      }
      /* Si p está más allá del último art.end (p ≥ 1.01 nunca ocurre;
         p ≥ 1 sí), el último queda activo. */
      if (activeArtIdx === -1 && p >= arts[arts.length - 1].start) {
        activeArtIdx = arts.length - 1
      }

      artEls.forEach((el, i) => {
        if (i === activeArtIdx) {
          const a = arts[i]
          const t = clamp((p - a.start) / (a.end - a.start), 0, 1)
          const scale = a.startScale + (a.endScale - a.startScale) * t
          el.style.opacity = '1'
          el.style.transform = `scale(${scale.toFixed(4)})`
        } else {
          el.style.opacity = '0'
          /* Sin reset explícito del transform · el próximo frame
             sobre este art lo va a sobrescribir. Dejarlo colgado
             es benigno mientras opacity=0. */
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
