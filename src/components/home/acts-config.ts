/* Home · Acts · calibración
   Brief de reconstrucción v1 (16-sep) · F2.

   Los números que producen la sensación de peso viven acá,
   juntos y comentados. Se ajustan mirando, no calculando.

   ═══ Alturas ═══

   ACT1_HEIGHT_VH   1200vh · 2 beats.
                    Geometría F2 §2.3:
                      p 0.00 – 0.06   beat 1 settle
                      p 0.06 – 0.44   beat 1 relleno
                      p 0.44 – 0.52   hueco
                      p 0.52 – 0.58   beat 2 settle
                      p 0.58 – 0.92   beat 2 relleno
                      p 0.92 – 1.00   salida
                    Cero pantallas muertas salvo el hueco de 96vh.

   ACT2_HEIGHT_VH   2100vh · 5 beats · 420vh cada uno.
                    F2 §2.4. Distribución interna:
                      5 beats × 16% + 4 huecos × 5% = 100%
                    Beats en [0.00, 0.16], [0.21, 0.37], [0.42, 0.58],
                    [0.63, 0.79], [0.84, 1.00]. Huecos de 5% entre
                    cada par.

   Mobile: alturas más chicas · gesto de scroll más corto. Los
   rangos [from, to] son proporcionales al alto del track.

   ═══ Mecánica de relleno (F2 §2.1) ═══

   Dentro de la ventana de un beat con N líneas:
     p_beat  0.00 – 0.08   settle · nada se mueve
             0.08 – 0.92   relleno · N tramos iguales SIN SOLAPE
             0.92 – 1.00   hold · todas al 100%

   línea i  inicio = 0.08 + 0.84 · (i     / N)
            fin    = 0.08 + 0.84 · ((i+1) / N)

   INVARIANTE: en cualquier p existe como máximo UNA línea con
   --fill entre 0% y 100%. Ese es el test binario de F2.

   FILL_PORTION se retira · era la meseta simétrica del brief 07
   (fase 3B), reemplazada por settle/relleno/hold explícitos.

   ═══ Cámara (F2 §2.5) ═══

   La imagen cambia en el borde del beat, dentro del hueco.
   La cámara se mueve todo el tiempo, atada al progreso del ACTO,
   incluso en los tramos sin texto. Sin transition, sin animation.
   Reset de escala al cambiar de archivo en el mismo frame que el
   swap · corte duro, cero interpolación entre 1.45 y 1.85. */

export const ACT1_HEIGHT_VH = 1200
export const ACT2_HEIGHT_VH = 2100
export const ACT1_HEIGHT_VH_MOBILE = 960
export const ACT2_HEIGHT_VH_MOBILE = 1680

/* ══════════ Copy · beats ══════════
   Cada beat es un array de líneas autorales. El motor genera un
   [data-line] por línea; el relleno barre línea a línea dentro
   de la ventana [0.08, 0.92] del beat.

   Las líneas están cortadas como Fran las escribió — el quiebre
   autoral es intencional. En viewports muy chicos alguna línea
   puede envolver visualmente; el clip-path del motor aplica al
   contenedor de la línea, así que el envuelto se rellena
   coherente. */

export type Beat = {
  from: number
  to: number
  lines: string[]
}

/* Acto 1 · hero negro. Dos beats. Cero imagen.
   Geometría F2 §2.3 · beat 1 [0.00, 0.44], beat 2 [0.52, 0.92].
   Beat 1 arranca en 0 (Motion v4 §1) · sin baseline visible al
   cargar era un bug de estado inicial. */
export const ACT1_BEATS: Beat[] = [
  { from: 0.00, to: 0.44, lines: ['Your company outgrew its own story.'] },
  { from: 0.52, to: 0.92, lines: ['We build the next one.'] },
]

/* Acto 2 · why-now paper. Cinco beats.
   `To Himself` va en <em class="nowrap"> — no se puede partir.
   El em-dash lleva &nbsp; adelante.
   Apóstrofes tipográficos con &rsquo;.

   Geometría F2 · 5 beats de 0.16 + 4 huecos de 0.05.

   COPY · beat 1 línea 2 (F2 §2.7).
   "Wars, plague, the whole weight of it." → "He was at war for
   fourteen of them." Verificación histórica: Guerras Marcomanas
   166–180 d.C. son 14 años. Reinado 161–180, 19 años. La guerra
   pártica (161–166) se solapa pero es previa — la cifra
   subestima. Publicable. */
export const ACT2_BEATS: Beat[] = [
  {
    from: 0.00,
    to: 0.16,
    lines: [
      'Marcus Aurelius ran the Roman Empire for nineteen years.',
      'He was at war for fourteen of them.',
    ],
  },
  {
    from: 0.21,
    to: 0.37,
    lines: [
      'What survived isn&rsquo;t the empire. It&rsquo;s twelve notebooks he wrote in',
      'Greek and titled <em class="nowrap">To&nbsp;Himself</em>&nbsp;&mdash; not philosophy, just a man working',
      'out what to do.',
    ],
  },
  {
    from: 0.42,
    to: 0.58,
    lines: [
      'You have a version of that. It lives in your head, in rooms you&rsquo;ve',
      'walked into, in decisions you made so long ago you stopped',
      'explaining them.',
    ],
  },
  {
    from: 0.63,
    to: 0.79,
    lines: [
      'And you&rsquo;re too close to see it. Anyone who does something',
      'exceptional every day eventually files it under normal.',
    ],
  },
  {
    from: 0.84,
    to: 1.0,
    lines: [
      'So the job isn&rsquo;t writing.',
      'It&rsquo;s taking things off until what&rsquo;s left is only yours.',
    ],
  },
]

/* ══════════ Arts · dibujos del acto 2 ══════════
   F2 §2.5 · corte duro entre archivos + escala continua sobre p
   del acto DENTRO DE CADA BEAT. F2-FIX bug 3 (17-sep) · la
   escala es constante DENTRO DE CADA FAMILIA (busto vs. libro).
   Antes cada beat tenía su propia escala descendente a lo largo
   del acto (1.90, 1.85, 1.80...) · eso rompía la ilusión central:
   la imagen se leía como cinco dibujos distintos en lugar de un
   dibujo que gana detalle.

   Ahora todos los busts comparten (startScale, endScale) y todos
   los books comparten otro (startScale, endScale). El salto entre
   beats es de DETALLE (line → dense), no de ENCUADRE.

   Valores elegidos para que el dibujo entre completo en el
   viewport pero con una cámara viva:
     bust  1.20 → 1.05   pull-back del 15% dentro de cada beat
     book  1.20 → 1.05   idem
   Iguales entre familias · el sistema no distingue busto de
   libro por escala, solo por transform-origin.

   Mapping de nombres descriptivos a archivos reales del repo
   (comprobado midiendo densidad de tinta · 15-sep):
     bust · line    → public/why-now/bust-03-min.png    · 10.1% dark
     bust · dense   → public/why-now/bust-01-dense.png  · 30.8% dark
     book · line    → public/why-now/book-03-min.png    ·  3.0% dark
     book · ghost   → public/why-now/book-02-mid.png    ·  6.7% dark
     book · dense   → public/why-now/book-01-dense.png  · 69.1% dark

   Los sufijos de archivo NO mienten · la densidad se verifica
   midiendo área oscura, no a ojo. */

export type Art = {
  name: string
  subject: 'bust' | 'book'
  start: number
  end: number
  startScale: number
  endScale: number
}

export const ACT2_ARTS: Art[] = [
  { name: 'bust-03-min',   subject: 'bust', start: 0.00, end: 0.21, startScale: 1.20, endScale: 1.05 },
  { name: 'bust-01-dense', subject: 'bust', start: 0.21, end: 0.42, startScale: 1.20, endScale: 1.05 },
  { name: 'book-03-min',   subject: 'book', start: 0.42, end: 0.63, startScale: 1.20, endScale: 1.05 },
  { name: 'book-02-mid',   subject: 'book', start: 0.63, end: 0.84, startScale: 1.20, endScale: 1.05 },
  { name: 'book-01-dense', subject: 'book', start: 0.84, end: 1.01, startScale: 1.20, endScale: 1.05 },
]

/* ══════════ Cámara · orígenes por sujeto (F2 §2.5) ══════════
   El punto de interés del busto es el rostro; el del libro, el
   lomo. Se ajustan mirando, no calculando. */

export const CAMERA_ORIGIN = {
  bust: '50% 28%',
  book: '42% 45%',
} as const

/* ══════════ Lenis · parámetros (F2 §2.6 · corregido F2-FIX 17-sep) ══════════
   wheelMultiplier NO se toca (0.35 dentro / 0.9 fuera).
   duration en el acto · 2.00.
   duration fuera del acto · 1.70.

   `lerp` SE RETIRA (F2-FIX bug 2). En Lenis, lerp y duration son
   mutuamente excluyentes; con lerp presente, duration se ignora
   y el scroll pasa a interpolación exponencial asintótica. Con
   wheelMultiplier: 0.35 eso da la sensación de "traba y queda a
   mitad de letra". El peso del scroll viene de duration.

   Interpolación entre juegos de parámetros sobre 400ms al
   entrar/salir del acto. Motor la maneja. */

export const LENIS_IN_ACT = {
  wheelMultiplier: 0.35,
  duration: 2.0,
} as const

export const LENIS_OUT_ACT = {
  wheelMultiplier: 0.9,
  duration: 1.7,
} as const

export const LENIS_INTERP_MS = 400
