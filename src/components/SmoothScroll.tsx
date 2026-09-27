'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* Smooth scroll site-wide — motion v3 §4.

   Lenis + GSAP ScrollTrigger. Los dos números que producen la
   sensación de peso son `duration: 1.4` y `wheelMultiplier: 0.9`.
   Por encima de 1.6 la sensación deja de ser peso y pasa a ser
   roto.

   ScrollTrigger.update se ata al 'scroll' de Lenis para que los
   triggers scrub del §5 (why-now) reciban la posición correcta.

   ANCLAS
   Lenis reemplaza el scroll nativo y por default se come los
   hash links.
     · Clicks a hash del propio documento: `anchors: {offset:-64}`
       manda Lenis a interceptarlos con offset al nav fijo.
     · Carga inicial con /#hash: el navegador scrollea nativo
       al hash antes de que Lenis monte, pero Lenis resetea al
       top al iniciar. Se compensa con un scrollTo(target,
       immediate:true) inmediatamente después de instanciar.
       `scrollRestoration = 'manual'` evita que el navegador
       vuelva a tirar al hash cuando el usuario navega con back.

   Bajo prefers-reduced-motion no se instancia Lenis — los
   anchors nativos y el scroll-behavior:smooth del CSS quedan.

   F48 · Lenis desactivado en mobile / touch. Además del gate
   por prefers-reduced-motion, también salteamos la instancia en:
     · `(pointer: coarse)` — dispositivos touch (iPhone, Android).
     · `(max-width: 767px)` — cualquier viewport mobile aunque
        el device pretenda tener puntero fino (por ejemplo iPad
        en Safari mobile con pointer:fine emulado).
   El scroll pasa a ser nativo en esos casos. Desktop (pointer
   fine + viewport >= 768) sigue con Lenis igual que antes. */

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    /* F48 · gate mobile / touch. */
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(max-width: 767px)').matches) return

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    /* Motion v6 F2 · parámetros globales fuera del acto:
         duration 1.7, wheelMultiplier 0.9.
       Dentro del acto el motor los baja a 0.35 / 2.0 con
       interpolación 400ms.

       lerp SE ELIMINA (F2-FIX bug 2, 17-sep). El brief original
       de F2 §2.6 pedía lerp:0.075 sin aclarar que en Lenis el
       lerp es mutuamente excluyente con duration · con lerp
       presente, duration se ignora y el scroll pasa a modo
       exponencial asintótico. Ese modo, sumado a
       wheelMultiplier: 0.35, dio la sensación de "traba y queda
       a mitad de letra" reportada. El peso del scroll viene de
       duration · lerp no aporta y rompe. */
    const lenis = new Lenis({
      duration: 1.7,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.6,
      anchors: { offset: -64 },
    })

    /* Expuesta para debug e integraciones puntuales — ej. si un
       componente necesita `lenis.stop()` durante una transición
       de ruta (motion v3 §8). No es API pública. */
    ;(window as unknown as { __lenis?: unknown }).__lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    /* Ancla inicial. Chromium scrolleó al hash nativo antes de
       montar Lenis; al inicializar, Lenis resetea a 0. Se
       compensa reposicionando al target con immediate:true
       (sin animación) para evitar el "salto animado" que se ve
       feo al entrar. */
    const initialHash = window.location.hash
    if (initialHash && initialHash.length > 1) {
      const targetId = initialHash.slice(1)
      window.setTimeout(() => {
        const target = document.getElementById(targetId)
        if (target) {
          lenis.scrollTo(target, { offset: -64, immediate: true })
        }
      }, 100)
    }

    return () => {
      lenis.destroy()
      gsap.ticker.remove(raf)
    }
  }, [])

  return null
}
