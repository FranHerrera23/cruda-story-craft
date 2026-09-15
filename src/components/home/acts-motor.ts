/* Home · Acts · motor
   Brief 07 definitivo (15-sep) · §7 EL MOTOR + §8 LENIS.

   Uno por acto, mismo código. Cero transition y cero animation
   en el CSS de los actos (§9 regla 1). Todo el movimiento es
   función de `p` sobre el track, escrito cada frame.

   La meseta (§4). El relleno consume solo FILL_PORTION del rango.
   Cuando lines terminaron de rellenarse, el beat queda quieto y
   lleno el 60% restante. Ese 60% de quietud es lo que le da
   tiempo a la frase.

   Lenis (§8). Mientras un acto está en viewport, wheelMultiplier
   y duration bajan para reducir momentum — un flick fuerte no
   debe atravesar más de un beat. Se restauran al salir. */

import type { Beat, Art } from './acts-config'
import { FILL_PORTION } from './acts-config'

const clamp = (v: number, a: number, b: number) =>
  Math.max(a, Math.min(v, b))

const map = (v: number, i0: number, i1: number) =>
  clamp((v - i0) / (i1 - i0), 0, 1)

/* ══════════ Lenis quiet mode ══════════
   Contador compartido entre los dos actos. Cada IntersectionObserver
   suma/resta uno; si al menos un acto está en viewport, Lenis va
   quiet. Al salir de todos, restaura defaults.

   __lenis lo expone SmoothScroll.tsx en window. Sin lenis (reduced
   motion o SSR) la función es no-op. */

type LenisOptions = {
  wheelMultiplier: number
  duration: number
}

const QUIET: LenisOptions = { wheelMultiplier: 0.55, duration: 0.9 }
const DEFAULT: LenisOptions = { wheelMultiplier: 0.9, duration: 1.4 }

let actsInView = 0

function setLenis(opts: LenisOptions) {
  const lenis = (window as unknown as { __lenis?: { options: LenisOptions } })
    .__lenis
  if (!lenis || !lenis.options) return
  lenis.options.wheelMultiplier = opts.wheelMultiplier
  lenis.options.duration = opts.duration
}

export function enterAct() {
  actsInView++
  if (actsInView === 1) setLenis(QUIET)
}

export function leaveAct() {
  actsInView = Math.max(0, actsInView - 1)
  if (actsInView === 0) setLenis(DEFAULT)
}

/* ══════════ runAct ══════════
   Setea listeners de scroll+resize sobre el track, calcula p en
   cada frame y aplica:
     · Beats · visibility hidden/visible + --fill por línea
     · Arts  · opacity por rampa in/out (independiente del beat)
     · Counter · texto "NN /NN" con el beat activo

   Devuelve una función de cleanup — el componente la llama en el
   return del useEffect. */

export type RunActOptions = {
  track: HTMLElement
  beats: Beat[]
  arts?: Art[]
  totalBeats?: number /* Para el contador (denominador). Default beats.length. */
}

export function runAct({ track, beats, arts = [], totalBeats }: RunActOptions) {
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

    beats.forEach((b, i) => {
      const el = beatEls[i]
      if (!el) return
      const on = p >= b.from && p <= b.to
      /* Fuera de rango NO se atenúa: no existe (§9 regla 2). */
      el.style.visibility = on ? 'visible' : 'hidden'
      if (!on) return
      active = i

      /* Meseta · el relleno consume solo FILL_PORTION del rango
         del beat. El resto queda quieto y lleno. */
      const span = b.to - b.from
      const fillEnd = b.from + span * FILL_PORTION

      const lines = el.querySelectorAll<HTMLElement>('[data-line]')
      const n = lines.length
      const step = (fillEnd - b.from) / n

      lines.forEach((ln, j) => {
        const from = b.from + step * j
        ln.style.setProperty(
          '--fill',
          map(p, from, from + step) * 100 + '%',
        )
      })
    })

    /* Contador · muestra el activo. En huecos mantiene el último;
       nunca 00 (§9 regla 5). */
    if (counter) {
      if (active >= 0) lastActive = active
      if (lastActive >= 0) {
        counter.textContent =
          String(lastActive + 1).padStart(2, '0') + ' /' + denom
      }
    }

    /* Arts · opacity continua, independiente de los beats. */
    artEls.forEach((el, i) => {
      const a = arts[i]
      if (!a) return
      const o = Math.min(map(p, a.in0, a.in1), 1 - map(p, a.out0, a.out1))
      el.style.opacity = String(clamp(o, 0, 1))
    })
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
