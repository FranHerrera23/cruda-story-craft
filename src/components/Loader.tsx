'use client'

import { useEffect, useState } from 'react'

/* Motion v3 §1 (14-sep) — Loader nuevo.

   La versión anterior era rápida y vacía. 500ms de wordmark sin
   nada más se leían como un parpadeo. El fix no es acortarlo —
   es darle al ojo algo que mirar.

   Tres elementos:
     · Wordmark CRUDA — --paper, grot 500, clamp(48-88px). Cinco
       letras con máscara individual, cada una sube desde
       translateY(100%) a 0. Duración 620ms por letra, stagger 70ms.
     · Línea de tagline — abajo, 13px tracked, mayúsculas, --paper
       al 40%. Aparece a los 420ms con fade-in de 500ms.
     · Panel --ink de fondo.

   Todo dentro de `.loader__stage`, que sale de una sola vez —
   translateY(0 → -100%) con --dur-4 y --ease-exit. La salida
   arranca a los 1400ms y termina a los 2000ms.

   Timing:
     t=0        wordmark empieza a entrar
     t=280ms    última letra empieza (4 × 70)
     t=420ms    tagline empieza fade-in
     t=900ms    wordmark completo
     t=920ms    tagline visible al 40%
     t=1400ms   panel arranca a salir (--dur-4)
     t=2000ms   panel fuera → dispatch cruda:loader-out → hero H1

   `cruda:loader-out` lo espera RevealScroll (§2) para dispararle
   el revelado al hero. Sin este evento el H1 queda en su estado
   inicial invisible.

   Flash-free en reload: inline script en <head> (layout.tsx) setea
   data-loader="skip" en <html> antes del primer paint. CSS gate
   `html[data-loader="skip"] .loader { display:none }` corta el
   render antes de pintar.

   Aún es solo primera visita de la sesión (sessionStorage). En
   reloads posteriores el hero fire a 120ms via el fallback de
   RevealScroll — no espera el evento porque el loader no corre.

   Reduced motion: el nodo se desmonta inmediatamente. RevealScroll
   detecta reduce y dispara el hero a 120ms sin esperar evento. */

const HOLD_MS = 1400
const EXIT_MS = 600
const UNMOUNT_BUFFER_MS = 50
const UNMOUNT_MS = HOLD_MS + EXIT_MS + UNMOUNT_BUFFER_MS
const SESSION_KEY = 'cruda-loader-shown'
const LETTER_STAGGER_MS = 70

const WORDMARK = ['C', 'R', 'U', 'D', 'A'] as const
/* Enmienda 5-E · tagline site-wide. */
const TAGLINE = 'We translate cultures into business.'

function dispatchLoaderOut() {
  document.dispatchEvent(new CustomEvent('cruda:loader-out'))
}

export default function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false)
      /* No dispatcheamos loader-out — RevealScroll bajo reduce va
         al fallback de 120ms directamente (chequea el media query
         cuando setup arranca). Duplicar el evento acá sería noise. */
      return
    }

    let skip = false
    try {
      skip = sessionStorage.getItem(SESSION_KEY) === '1'
    } catch {
      /* Storage bloqueado (Safari privado, políticas corporativas):
         el loader corre, aceptable. */
    }

    if (skip) {
      setVisible(false)
      /* Mismo caso que reduce — RevealScroll ve data-loader="skip"
         y usa el fallback de 120ms. No dispatcheamos loader-out. */
      return
    }

    /* Marcar la sesión ANTES de arrancar timers. Si algo falla
       después, la próxima carga ya no ve el loader. */
    try {
      sessionStorage.setItem(SESSION_KEY, '1')
    } catch {}

    /* Dispatch al final del exit del panel, no al arranque. La
       secuencia se lee como: "el telón sube, y apenas termina,
       arranca el revelado por línea del H1" (§2). */
    const tOut = window.setTimeout(dispatchLoaderOut, HOLD_MS + EXIT_MS)
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
     viven en CSS keyframes, no en transitions triggereadas por JS.
     Ventaja: arrancan en el primer paint, no dependen de hydration.
     El único rol de JS es dispatchear el evento a los 2000ms y
     desmontar el nodo a los 2050ms. */
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader__stage">
        <div className="loader__panel" />
        <div className="loader__word">
          {WORDMARK.map((letter, i) => (
            <span key={i} className="loader__letter-clip">
              <span
                className="loader__letter"
                style={{ animationDelay: `${i * LETTER_STAGGER_MS}ms` }}
              >
                {letter}
              </span>
            </span>
          ))}
        </div>
        <div className="loader__line">{TAGLINE}</div>
      </div>
    </div>
  )
}
