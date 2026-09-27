'use client'

import { useEffect, useState } from 'react'

/* Loader · F22 · 22-sep.

   Estructura y timing heredados de Motion v3 §1 (14-sep) — no se
   rediseña. Cambia SOLO el wordmark: en vez de 5 letras Archivo,
   entra el logo crema (public/cruda-logo-cream.png) dentro de la
   misma máscara con la que subían las letras. Fondo --ink, tagline,
   salida del panel y duración total: idénticos.

   Timing:
     t=0        wordmark entra (translateY 100% → 0)
     t=420ms    tagline empieza fade-in
     t=1400ms   panel arranca a salir (--dur-4 · --ease-exit)
     t=2000ms   panel fuera → dispatch cruda:loader-out → hero H1
     t=2050ms   nodo desmontado

   F22 fixes:
     · Sin sessionStorage. El loader aparece en toda carga completa
       (primer paint, F5, entrada por URL). En navegación interna
       de Next el layout persiste y este componente no se re-monta,
       así que el loader no reaparece.
     · history.scrollRestoration = 'manual' (via inline script en
       layout.tsx) evita que el browser restaure el scroll previo
       antes de terminar la salida del loader.
     · En cada carga completa forzamos scroll a 0. Si la URL trae
       #ancla, la respetamos: hacemos scrollIntoView al terminar
       la salida del loader para asegurar el destino.

   F23.1 fix (§2.3):
     · El loader corre SOLO si navigation.type === 'navigate' o
       'reload'. En 'back_forward' (BFCache o back button del
       browser) no aparece: la posición de scroll la restaura
       PageShell desde sessionStorage.

   Flash-free en reload: layout.tsx setea data-loader='show'
   (o 'skip' bajo reduced-motion) antes del primer paint. */

const HOLD_MS = 1400
const EXIT_MS = 600
const UNMOUNT_BUFFER_MS = 50
const UNMOUNT_MS = HOLD_MS + EXIT_MS + UNMOUNT_BUFFER_MS
const TAGLINE = 'We translate cultures into business.'

/* F48 · variantes mobile · el brief pide 1.2s máximo total en
   mobile. Compresión: HOLD 400ms + EXIT 400ms + buffer 50ms
   = 850ms real + margin. Se activa solo cuando el gate mobile
   pasa (matchMedia pointer:coarse o max-width 767 o reduce-motion). */
const HOLD_MS_MOBILE = 400
const EXIT_MS_MOBILE = 400
const UNMOUNT_MS_MOBILE = HOLD_MS_MOBILE + EXIT_MS_MOBILE + UNMOUNT_BUFFER_MS

const LOADER_SEEN_KEY = 'cruda-loader-seen'

/* F48 · gate mobile · solo se aplica policy nueva del brief bajo
   pointer:coarse, max-width 767 o prefers-reduced-motion:reduce. */
function isMobileLoaderContext(): boolean {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(pointer: coarse)').matches ||
    window.matchMedia('(max-width: 767px)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/* F48 · UTM detection · cualquier parámetro `utm_*` presente en
   la URL cuenta como tráfico de outreach donde no queremos meter
   fricción del loader. */
function hasUtmParams(): boolean {
  if (typeof window === 'undefined') return false
  const params = new URLSearchParams(window.location.search)
  for (const key of params.keys()) {
    if (key.toLowerCase().startsWith('utm_')) return true
  }
  return false
}

function isHomePathname(): boolean {
  if (typeof window === 'undefined') return false
  return window.location.pathname === '/'
}

function dispatchLoaderOut() {
  document.dispatchEvent(new CustomEvent('cruda:loader-out'))
}

function scrollToHashIfAny() {
  const raw = window.location.hash
  if (!raw) return false
  const id = decodeURIComponent(raw.slice(1))
  if (!id) return false
  const el = document.getElementById(id)
  if (!el) return false
  el.scrollIntoView()
  return true
}

export default function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false)
      /* RevealScroll bajo reduce va al fallback de 120ms directamente. */
      return
    }

    /* F23.1 · back button / BFCache · no volvemos a mostrar el loader.
       PageShell restaura la posición de scroll de la ruta desde
       sessionStorage. */
    const navEntry = performance.getEntriesByType('navigation')[0] as
      | (PerformanceNavigationTiming & { type: string })
      | undefined
    if (navEntry && navEntry.type === 'back_forward') {
      setVisible(false)
      return
    }

    /* F48 · policy nueva sólo bajo mobile/touch/reduced-motion
       (regla dura Fran: desktop code path unchanged). En desktop
       cae al camino original (loader en toda carga completa,
       duración 2s). En mobile: solo `/`, una vez por sesión,
       nunca con UTM, duración max 1.2s. */
    const mobileCtx = isMobileLoaderContext()
    if (mobileCtx) {
      if (!isHomePathname()) {
        setVisible(false)
        return
      }
      if (hasUtmParams()) {
        setVisible(false)
        return
      }
      try {
        if (sessionStorage.getItem(LOADER_SEEN_KEY) === '1') {
          setVisible(false)
          return
        }
        sessionStorage.setItem(LOADER_SEEN_KEY, '1')
      } catch {
        /* Private mode / storage blocked · no impedir la home. */
      }
    }

    /* F22 · en toda carga completa, mandamos el scroll a 0 (o al
       #ancla) antes de que el loader termine su salida. */
    const hasHash = Boolean(window.location.hash)
    if (!hasHash) {
      window.scrollTo(0, 0)
    }

    const holdMs = mobileCtx ? HOLD_MS_MOBILE : HOLD_MS
    const exitMs = mobileCtx ? EXIT_MS_MOBILE : EXIT_MS
    const unmountMs = mobileCtx ? UNMOUNT_MS_MOBILE : UNMOUNT_MS

    const tOut = window.setTimeout(() => {
      dispatchLoaderOut()
      if (hasHash) scrollToHashIfAny()
    }, holdMs + exitMs)
    const tUnmount = window.setTimeout(
      () => setVisible(false),
      unmountMs,
    )

    return () => {
      window.clearTimeout(tOut)
      window.clearTimeout(tUnmount)
    }
  }, [])

  if (!visible) return null

  /* La animación del wordmark, la tagline y la salida del panel
     viven en CSS keyframes. Único rol de JS: dispatchear el evento
     a los 2000ms y desmontar a los 2050ms. */
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader__stage">
        <div className="loader__panel" />
        <div className="loader__word">
          <span className="loader__letter-clip">
            <span className="loader__letter">
              <img
                className="loader__logo"
                src="/cruda-logo-cream.png"
                alt=""
              />
            </span>
          </span>
        </div>
        <div className="loader__line">{TAGLINE}</div>
      </div>
    </div>
  )
}
