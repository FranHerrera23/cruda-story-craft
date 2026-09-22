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

   Flash-free en reload: layout.tsx setea data-loader='show'
   (o 'skip' bajo reduced-motion) antes del primer paint. */

const HOLD_MS = 1400
const EXIT_MS = 600
const UNMOUNT_BUFFER_MS = 50
const UNMOUNT_MS = HOLD_MS + EXIT_MS + UNMOUNT_BUFFER_MS
const TAGLINE = 'Narrative for founder-led companies'

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

    /* F22 · en toda carga completa, mandamos el scroll a 0 (o al
       #ancla) antes de que el loader termine su salida. */
    const hasHash = Boolean(window.location.hash)
    if (!hasHash) {
      window.scrollTo(0, 0)
    }

    const tOut = window.setTimeout(() => {
      dispatchLoaderOut()
      if (hasHash) scrollToHashIfAny()
    }, HOLD_MS + EXIT_MS)
    const tUnmount = window.setTimeout(
      () => setVisible(false),
      UNMOUNT_MS,
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
