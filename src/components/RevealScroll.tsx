'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/* Reveal global — motion §3.3 + §3.4 + orquestador v3 §2 (14-sep).

   Un solo componente maneja:
     · Secciones con `data-reveal-seq`: al entrar al viewport
       cascadea `.on` a cada `[data-seq]` hijo con delay compuesto.
     · Elementos sueltos con `data-reveal` fuera de una sección
       seq: reveal individual como antes.
     · Hero con `data-hero-entry`: nunca observa. Se encadena a la
       salida del loader (evento `cruda:loader-out`) o dispara a
       120ms cuando la sesión ya vio el loader.

   Orden dentro de una sección seq:
     eyebrow  →  --seq-delay: 0ms
     title    →  --seq-delay: 120ms   (con su propio stagger por línea)
     body|media → --seq-delay: 120ms + lineCount × lineStagger + 160ms

   `data-line-count` en el título lo pone LineReveals al partirlo.
   Este componente lee ese contador para calcular el delay del cuerpo
   — no se hardcodea, se sigue el corte real. Si el conteo es 0,
   NaN o undefined (título sin split, o sin data-reveal="lines"),
   el body cae a un delay fijo de 400ms — brief 14-sep P0.4.

   Brief 14-sep P0 — corre en CADA ruta.
   Next SPA no remonta este componente. Con `usePathname` como dep
   el useEffect re-corre en cada ruta, con el DOM nuevo. PageShell
   limpia el flag linesReady al cubrir; acá esperamos que LineReveals
   lo vuelva a marcar sobre la ruta nueva.

   Brief 14-sep P0.3 — watchdog de 2000ms, no negociable.
   Ningún elemento con `data-reveal` o `data-seq` puede terminar
   invisible permanente. Al cumplirse 2s desde el montaje forzamos
   `.on` sobre todo lo que siga sin ella. Esto no es fallback de UX;
   es seguro de contenido — el copy servido no puede quedar oculto.

   Blocking: no registra nada hasta ver `html[data-lines-ready="true"]`
   o recibir `cruda:lines-ready`. LineReveals lo emite después de
   splittear todos los títulos. Los dos sistemas arrancan del mismo
   punto y el orden lo dicta el stagger, no la carrera.

   prefers-reduced-motion se maneja por CSS global — los `.on`
   fuerzan transition-duration:1ms y las cascadas quedan pero sin
   animación visible. */

const TITLE_DELAY_MS = 120
const BODY_GAP_MS = 160
const HERO_FALLBACK_DELAY_MS = 120
const BODY_DELAY_FALLBACK_MS = 400
const WATCHDOG_MS = 2000

type Cleanup = () => void

function computeSeqDelays(section: HTMLElement) {
  const eyebrow = section.querySelector<HTMLElement>('[data-seq="eyebrow"]')
  const title = section.querySelector<HTMLElement>('[data-seq="title"]')
  const bodies = section.querySelectorAll<HTMLElement>(
    '[data-seq="body"], [data-seq="media"]',
  )

  if (eyebrow) eyebrow.style.setProperty('--seq-delay', '0ms')
  if (title) title.style.setProperty('--seq-delay', `${TITLE_DELAY_MS}ms`)

  /* Brief P0.4 — fallback duro. Si el conteo de líneas es 0, NaN
     o undefined (título sin data-reveal="lines", o LineReveals no
     lo tocó todavía, o el split falló), el body sale a 400ms fijo.
     NUNCA propagar NaN a un transition-delay — el browser lo
     ignora silenciosamente y el cuerpo puede quedar sin salir. */
  const rawCount = Number(title?.dataset.lineCount ?? '')
  const rawStagger = Number(title?.dataset.lineStagger ?? '')
  const lineCount = Number.isFinite(rawCount) && rawCount > 0 ? rawCount : 0
  const lineStagger = Number.isFinite(rawStagger) && rawStagger > 0 ? rawStagger : 90

  const bodyDelay =
    lineCount > 0
      ? TITLE_DELAY_MS + lineCount * lineStagger + BODY_GAP_MS
      : BODY_DELAY_FALLBACK_MS
  bodies.forEach((el) => {
    el.style.setProperty('--seq-delay', `${bodyDelay}ms`)
  })
}

function fireSection(section: HTMLElement) {
  section.classList.add('seq-on')
  const items = section.querySelectorAll<HTMLElement>('[data-seq]')
  items.forEach((el) => el.classList.add('on'))
}

function setup(): Cleanup {
  /* Calcular delays antes de observar — así cada elemento tiene
     su transition-delay listo el instante que le llega `.on`. */
  const seqSections = Array.from(
    document.querySelectorAll<HTMLElement>('[data-reveal-seq]'),
  )
  seqSections.forEach(computeSeqDelays)

  const sectionIO = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        fireSection(entry.target as HTMLElement)
        sectionIO.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.06 },
  )
  seqSections.forEach((s) => {
    if (s.hasAttribute('data-hero-entry')) return // hero es aparte
    sectionIO.observe(s)
  })

  /* Reveals sueltos: los que no tienen data-seq. Los que están
     DENTRO de una sección seq pero no marcados con data-seq (ej:
     las f9-row de HomeFirst90 con su propio stagger, las
     work-cards de selected-work) siguen con reveal individual. */
  const singleTargets = Array.from(
    document.querySelectorAll<HTMLElement>(
      '[data-reveal]:not(.on):not([data-seq])',
    ),
  )
  const singleIO = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('on')
        singleIO.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.06 },
  )
  singleTargets.forEach((el) => singleIO.observe(el))

  /* Hero: no observer. Se encadena a la presencia del Loader en
     el DOM, no al data-loader attribute — ese attr solo lo setea
     el inline script en la primera carga, y queda stale en SPA
     nav (back button, client-side routing). Fix 14-sep P0: si el
     .loader está en el DOM, esperar `cruda:loader-out`. Si no
     está (sesión ya vio el loader, o reduce motion), fallback
     120ms para arrancar el reveal directo. */
  const heroSections = Array.from(
    document.querySelectorAll<HTMLElement>('[data-hero-entry]'),
  )
  const heroCleanup: Cleanup[] = []
  if (heroSections.length > 0) {
    const fireHero = () => heroSections.forEach(fireSection)

    const reduce =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const loaderPresent = !!document.querySelector('.loader')

    if (reduce || !loaderPresent) {
      const t = window.setTimeout(fireHero, HERO_FALLBACK_DELAY_MS)
      heroCleanup.push(() => window.clearTimeout(t))
    } else {
      const listener = () => fireHero()
      document.addEventListener('cruda:loader-out', listener, { once: true })
      heroCleanup.push(() =>
        document.removeEventListener('cruda:loader-out', listener),
      )
    }
  }

  /* Brief P0.3 — watchdog. Después de 2s, nada puede seguir oculto.
     Cubre secciones seq, elementos data-seq sueltos, reveals
     individuales, y el hero. Seguro de contenido, no fallback de UX. */
  const watchdog = window.setTimeout(() => {
    document
      .querySelectorAll<HTMLElement>('[data-reveal-seq]:not(.seq-on)')
      .forEach((section) => {
        section.classList.add('seq-on')
        section
          .querySelectorAll<HTMLElement>('[data-seq]')
          .forEach((el) => el.classList.add('on'))
      })
    document
      .querySelectorAll<HTMLElement>('[data-seq]:not(.on)')
      .forEach((el) => el.classList.add('on'))
    document
      .querySelectorAll<HTMLElement>('[data-reveal]:not(.on)')
      .forEach((el) => el.classList.add('on'))
  }, WATCHDOG_MS)

  return () => {
    sectionIO.disconnect()
    singleIO.disconnect()
    heroCleanup.forEach((fn) => fn())
    window.clearTimeout(watchdog)
  }
}

export default function RevealScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof document === 'undefined') return

    let cleanup: Cleanup | undefined
    const readyFlag = () =>
      document.documentElement.dataset.linesReady === 'true'

    if (readyFlag()) {
      cleanup = setup()
      return () => cleanup?.()
    }

    const onReady = () => {
      cleanup = setup()
    }
    document.addEventListener('cruda:lines-ready', onReady, { once: true })

    /* Belt-and-suspenders: si el evento ya pasó entre el check
       inicial y el addEventListener, chequeamos el flag en el
       próximo tick. */
    const raf = window.requestAnimationFrame(() => {
      if (readyFlag() && !cleanup) {
        cleanup = setup()
        document.removeEventListener('cruda:lines-ready', onReady)
      }
    })

    return () => {
      document.removeEventListener('cruda:lines-ready', onReady)
      window.cancelAnimationFrame(raf)
      cleanup?.()
    }
  }, [pathname])

  return null
}
