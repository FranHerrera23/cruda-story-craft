'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* Home · every-company · scrub con meseta — Brief 04 P1 (14-sep).

   Reemplaza WhyNowFocus. Antes: foco por índice de párrafo (uno
   activo, el resto atenuados). Ahora: opacidad por párrafo con
   meseta — cada párrafo sube en el primer 15% de su banda, queda
   quieto en 100% durante el 55%, y baja en el último 30%.

   El último párrafo NO se atenúa antes de que se suelte el pin.
   Si se apaga mientras el lector todavía está ahí, la sección se
   siente como que lo echó.

   Distancia real: pin, end +=500vh. Son cinco párrafos, cada uno
   necesita cerca de un viewport para leerse.

   Frames (seis PNG en public/why-now/) atados al mismo scrub. La
   secuencia es sustracción: bust dense → mid → min → book dense
   → mid → min. La dissolvencia bust→book ocurre en el párrafo 2.
   Cada frame tiene un peak y decae a los lados; los adyacentes
   cross-fade.

   Bajo prefers-reduced-motion no se registra el trigger. El
   fallback CSS deja los cinco párrafos en opacidad plena y el
   primer frame visible. Si los frames faltan, los <img> fallan
   silencioso — el copy sigue en pie. */

/* Cinco párrafos. Cinco bandas iguales de 0.20 progress cada una. */
const N = 5

/* Peak position + fade width por frame. Corridos para que la
   dissolvencia bust→book caiga en el párrafo 2 (0.20-0.40). */
type FramePeak = { name: string; peak: number; width: number; holdEnd?: boolean }
const FRAMES: FramePeak[] = [
  { name: 'bust-01', peak: 0.10, width: 0.10 },
  { name: 'bust-02', peak: 0.22, width: 0.08 },
  { name: 'bust-03', peak: 0.33, width: 0.08 },
  { name: 'book-01', peak: 0.50, width: 0.15 },
  { name: 'book-02', peak: 0.70, width: 0.10 },
  { name: 'book-03', peak: 0.90, width: 0.15, holdEnd: true },
]

function paragraphOpacity(progress: number, i: number): number {
  const start = i / N
  const end = (i + 1) / N
  const local = (progress - start) / (end - start)
  const isLast = i === N - 1
  if (local < 0) return 0
  if (local < 0.15) return local / 0.15
  if (local < 0.70) return 1
  if (isLast) return 1
  if (local < 1.0) return 1 - (local - 0.70) / 0.30
  return 0
}

function frameOpacity(progress: number, frame: FramePeak): number {
  const dist = Math.abs(progress - frame.peak)
  if (frame.holdEnd && progress >= frame.peak) return 1
  if (dist >= frame.width) return 0
  return 1 - dist / frame.width
}

export default function EveryCompanyFocus() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const section = document.querySelector<HTMLElement>('.every-company')
    if (!section) return
    const paragraphs = Array.from(
      section.querySelectorAll<HTMLElement>('.every-company__body p'),
    )
    if (paragraphs.length === 0) return
    const frames = Array.from(
      section.querySelectorAll<HTMLElement>('.every-company__frames > *'),
    )

    /* Pin + scrub. end: +=500vh son cinco viewports — uno por
       párrafo. El scrub:1 mantiene la fricción del sistema. */
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=500vh',
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const p = self.progress
        paragraphs.forEach((el, i) => {
          el.style.opacity = String(paragraphOpacity(p, i))
        })
        frames.forEach((el, i) => {
          if (i >= FRAMES.length) return
          el.style.opacity = String(frameOpacity(p, FRAMES[i]))
        })
      },
    })

    return () => {
      trigger.kill()
      paragraphs.forEach((el) => {
        el.style.opacity = ''
      })
      frames.forEach((el) => {
        el.style.opacity = ''
      })
    }
  }, [])

  return null
}
