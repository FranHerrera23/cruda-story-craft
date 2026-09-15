'use client'

import { useEffect, useRef, useState } from 'react'
import './opening-act.css'

/* Home · Opening Act — Brief 07 v2 (15-sep).

   Reemplaza HomeHero + EveryCompany. El hero y every-company
   dejan de ser dos secciones y pasan a ser un solo escenario
   oscuro con siete beats.

   MECÁNICA — SCRUB PURO, NO EVENTOS
   Ninguna propiedad animada del escenario tiene `transition` ni
   `animation`. El estilo es función pura del progreso del scroll.
   Cada frame lee `p = clamp((scrollY - trackTop) / (trackHeight
   - viewportHeight), 0, 1)` y escribe estilo. Test binario: si
   frenás el scroll a mitad de un relleno tiene que quedar
   congelado; si termina solo, es evento y está mal.

   MÁSCARA — DIM + LIT
   Cada beat renderea dos copias del texto, superpuestas exactas.
   La copia .beat__dim está siempre visible a #EFEBDF · 22%; la
   copia .beat__lit está a 100% pero recortada con clip-path
   proporcional al progreso. Las dos van en el HTML servido —
   el texto nunca aparece de la nada. Sin JS y bajo reduce
   motion, la dim se lee.

   LÍNEA POR LÍNEA
   El relleno avanza línea por línea, no en un barrido continuo
   por el párrafo entero (eso lee como resaltador). LineReveals
   parte los beats en `.rv-line > span`; el scrub setea `--fill`
   por línea, subdividiendo el rango del beat.

   BEATS — VERBATIM (§P3)
   Siete beats con rangos [from, to] en progreso global. Los
   huecos entre beats son deliberados — el vacío es descanso.

   FRAMES (§P6)
   Seis PNG en public/why-now/ con opacidad cross-fadeada al
   progreso global. Cuando los archivos no existen (hoy),
   FRAMES_AVAILABLE = false y no se renderea ningún <img> —
   cero cajas vacías, cero placeholder, cero <img> sin src.
   El escenario funciona solo con tipografía.

   COLOR
   --ink-deep #0E1113 fondo. --cream #EFEBDF texto y logo. Los
   dos tokens viven en case-study.css :root. */

/* ═══ Config ═══ */

const BEATS = [
  { from: 0.02, to: 0.11, text: 'Your company outgrew its own story.' },
  { from: 0.15, to: 0.24, text: 'We build the next one.' },
  {
    from: 0.30,
    to: 0.40,
    text:
      'Marcus Aurelius ran the Roman Empire for nineteen years.<br>Wars, plague, the whole weight of it.',
  },
  {
    from: 0.44,
    to: 0.55,
    text:
      'What survived isn&rsquo;t the empire. It&rsquo;s twelve notebooks he wrote in Greek and titled <em class="nowrap">To&nbsp;Himself</em>&nbsp;— not philosophy, just a man working out what to do.',
  },
  {
    from: 0.59,
    to: 0.69,
    text:
      'You have a version of that. It lives in your head, in rooms you&rsquo;ve walked into, in decisions you made so long ago you stopped explaining them.',
  },
  {
    from: 0.73,
    to: 0.82,
    text:
      'And you&rsquo;re too close to see it. Anyone who does something exceptional every day eventually files it under normal.',
  },
  {
    from: 0.87,
    to: 1.0,
    text:
      'So the job isn&rsquo;t writing.<br>It&rsquo;s taking things off until what&rsquo;s left is only yours.',
  },
] as const

/* Frames — continuous crossfade sobre progreso global. Cada
   capa tiene un `peak` (posición donde opacidad = 1) y `width`
   (radio de fade a cada lado). Adyacentes se solapan → el
   crossfade entre bust → book cae en el rango .42–.50 del beat 4. */
type FramePeak = { name: string; peak: number; width: number }
const FRAMES: FramePeak[] = [
  { name: 'bust-01-dense', peak: 0.14, width: 0.16 },
  { name: 'bust-02-mid', peak: 0.35, width: 0.10 },
  { name: 'bust-03-min', peak: 0.46, width: 0.06 },
  { name: 'book-01-dense', peak: 0.60, width: 0.14 },
  { name: 'book-02-mid', peak: 0.78, width: 0.12 },
  { name: 'book-03-min', peak: 0.93, width: 0.10 },
]

/* Los seis PNG en public/why-now/ (bust-01-dense.png,
   bust-02-mid.png, bust-03-min.png, book-01-dense.png,
   book-02-mid.png, book-03-min.png). Los archivos entran por git
   — el runtime remoto no acepta attachments de chat como archivos.
   Cuando estén en el repo, flip a true y la placa se renderea con
   las imágenes adentro. Sin archivos: cero <img>, cero placa
   (regla 14 del ledger). */
const FRAMES_AVAILABLE = false

/* ═══ Component ═══ */

const clamp = (n: number, min: number, max: number) =>
  n < min ? min : n > max ? max : n

export default function OpeningAct() {
  const actRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const beatsRefs = useRef<Array<HTMLDivElement | null>>([])
  const framesRefs = useRef<Array<HTMLImageElement | null>>([])
  const counterRef = useRef<HTMLSpanElement>(null)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)

    if (mq.matches) {
      /* Bajo reduce motion, todos los beats en flujo con fill=100
         y sin sticky/scrub. El CSS aplica el fallback. Nada de JS. */
      return
    }

    const act = actRef.current
    if (!act) return

    let raf = 0
    let lastP = -1

    const update = () => {
      raf = 0
      const rect = act.getBoundingClientRect()
      const vh = window.innerHeight
      const total = act.offsetHeight - vh
      const scrolled = -rect.top
      const p = clamp(scrolled / total, 0, 1)
      if (p === lastP) return
      lastP = p

      /* Beats · Un solo beat en pantalla a la vez (Fran fix
         15-sep). Fuera de rango: data-active="false", CSS lo
         apaga con visibility:hidden. Entre beats la pantalla
         queda vacía — eso es descanso, no bug. Dentro del rango
         del beat, la lit se rellena línea por línea con --fill. */
      BEATS.forEach((beat, i) => {
        const el = beatsRefs.current[i]
        if (!el) return
        const active = p >= beat.from && p <= beat.to
        if (el.dataset.active !== String(active)) {
          el.dataset.active = String(active)
        }
        if (!active) return
        const local = clamp((p - beat.from) / (beat.to - beat.from), 0, 1)
        const litLines = el.querySelectorAll<HTMLElement>(
          '.beat__lit .rv-line > span',
        )
        const N = litLines.length || 1
        litLines.forEach((line, j) => {
          const lineLocal = clamp(local * N - j, 0, 1)
          line.style.setProperty('--fill', `${lineLocal * 100}%`)
        })
      })

      /* Frames · opacity por peak-fade. Solo si están montados. */
      if (FRAMES_AVAILABLE) {
        FRAMES.forEach((frame, i) => {
          const el = framesRefs.current[i]
          if (!el) return
          const dist = Math.abs(p - frame.peak)
          const opacity = dist >= frame.width ? 0 : 1 - dist / frame.width
          el.style.opacity = String(opacity)
        })
      }

      /* Counter · muestra el beat activo (o el último activo si
         estamos en un hueco entre beats). */
      const counterEl = counterRef.current
      if (counterEl) {
        let idx = 0
        for (let i = 0; i < BEATS.length; i++) {
          if (p >= BEATS[i].from) idx = i
          if (p < BEATS[i].to) break
        }
        counterEl.textContent = String(idx + 1).padStart(2, '0')
      }
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div id="act" className="act" ref={actRef}>
      <div
        id="stage"
        className={`stage${reduced ? ' stage--reduced' : ''}`}
        ref={stageRef}
      >
        <div className="stage__grid" aria-hidden="true" />

        <p className="stage__counter" aria-hidden="true">
          <span className="stage__counter-num" ref={counterRef}>
            01
          </span>
          <span className="stage__counter-slash">/07</span>
          <span className="stage__counter-label">Story</span>
        </p>

        {/* Placa clara (#F2F2F0) que flota adentro del escenario —
            marco de dispositivo tipo zerasoftwarestudio.com/build.
            SOLO se renderea si los seis PNG existen. Sin archivos:
            ni caja ni borde, la izquierda queda como negativo del
            escenario (regla 14 del ledger). Los PNG entran sin
            filtro — línea negra sobre blanco, como fueron
            diseñados; nada de invert + mix-blend-mode. */}
        {FRAMES_AVAILABLE && (
          <div className="stage__plate" aria-hidden="true">
            {FRAMES.map((frame, i) => (
              <img
                key={frame.name}
                ref={(el) => {
                  framesRefs.current[i] = el
                }}
                className="stage__frame"
                src={`/why-now/${frame.name}.png`}
                alt=""
              />
            ))}
          </div>
        )}

        <div className="stage__beats">
          {BEATS.map((beat, i) => (
            <div
              key={i}
              className="beat"
              ref={(el) => {
                beatsRefs.current[i] = el
              }}
            >
              {/* dim está siempre visible. LineReveals la parte en
                  líneas medibles; el clip-path per línea vive en la
                  lit, no en la dim. */}
              <span
                className="beat__dim"
                data-reveal="lines"
                dangerouslySetInnerHTML={{ __html: beat.text }}
              />
              {/* lit se recorta por línea con --fill setado por el
                  scrub. aria-hidden — el texto ya está en la dim. */}
              <span
                className="beat__lit"
                aria-hidden="true"
                data-reveal="lines"
                dangerouslySetInnerHTML={{ __html: beat.text }}
              />
            </div>
          ))}
        </div>

        <div className="stage__logo" aria-hidden="true">
          CRUDA
        </div>
      </div>
    </div>
  )
}
