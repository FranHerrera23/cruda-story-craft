/* Home · Acts · calibración
   Wireframe LOCK · home §4 (17-sep) — reemplaza F8 §1.

   Los números que producen la sensación de peso viven acá,
   juntos y comentados. Se ajustan mirando, no calculando.

   ═══ Alturas ═══

   ACT1_HEIGHT_VH   260vh · 2 beats · crossfade solapado.
                    Wireframe home §4.3 explícito. La frase
                    entrante empieza su fade-in cuando la
                    saliente está al 40% de opacidad — nunca
                    hay un frame con la pantalla vacía. Esto
                    reemplaza el modelo con hueco negro entre
                    frases del ejec anterior de F8.

                    Distribución sobre p del track (§4.3):
                      0.00 – 0.45   beat 1 hold (opacity 1)
                      0.45 – 0.60   beat 1 exit (1 → 0)
                      0.54 – 0.65   beat 2 enter (0 → 1)
                      0.65 – 1.00   beat 2 hold (opacity 1)
                    Overlap 0.54 – 0.60 · ambas frases parciales.

                    Beat 1 no tiene enter · arranca visible al
                    top del acto para evitar el "hueco negro
                    antes de la primera frase" (§4.4).
                    Beat 2 no tiene exit · queda visible al fin
                    del acto para evitar el "hueco negro después
                    de la segunda" (§4.4). La transición al
                    #act2 la maneja el borde entre secciones.

   ACT2_HEIGHT_VH   2100vh · 5 beats · 420vh cada uno.
                    F2 §2.4 (sin cambio · el lock declara #act2
                    "no change" en el modelo de fill por línea).

   Mobile: alturas más chicas · gesto de scroll más corto. Los
   rangos [from, to] son proporcionales al alto del track.

   ═══ Mecánica de act 1 (wireframe §4.3 · modelo phrase con overlap) ═══

   Cada beat tiene una ventana [from, to] global sobre p. El
   motor calcula opacity + ty por beat según:

     · Primer beat  · sin enter · hold hasta to − exitWidth,
                                  exit lineal hasta to
     · Último beat  · enter lineal desde from hasta
                                  from + enterWidth, luego hold
     · Beats medios · enter, hold, exit dentro de [from, to]

   Con dos beats solamente, no hay medio. Constantes de
   enter/exit width viven en acts-motor.ts. */

export const ACT1_HEIGHT_VH = 260
export const ACT2_HEIGHT_VH = 2100
export const ACT1_HEIGHT_VH_MOBILE = 260
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

/* Acto 1 · hero negro. Dos beats con ventanas SOLAPADAS.
   Wireframe LOCK · home §4.3 (17-sep).

   Beat 1 [0.00, 0.60] · sin fade-in (arranca visible al top del
   acto, evita el hueco negro previo a la primera frase). Fade-
   out en su último 25% de ventana.

   Beat 2 [0.54, 1.00] · sin fade-out (queda visible al fin del
   acto, evita el hueco negro posterior a la segunda frase). Su
   fade-in arranca cuando beat 1 pasa por opacity 0.4 · overlap
   real 0.54-0.60 con ambas frases parciales, cero pantalla
   vacía. */
export const ACT1_BEATS: Beat[] = [
  { from: 0.00, to: 0.60, lines: ['Your company outgrew its own story.'] },
  { from: 0.54, to: 1.00, lines: ['We build the next one.'] },
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

   ORDEN F8 §2 (17-sep) · se restaura el orden anterior a
   6fdae95. La densidad medida a ojo (área oscura ponderada por
   contraste percibido) no coincide con la densidad de píxeles
   dark:

     bust-02-mid · 12.3% de área dark · pero el detalle es fino
                   (puntillismo + hatching cerrado) · a ojo se
                   lee como "el grabado denso" que sigue al line
                   art. Va en el slot 2.
     bust-01-dense · 30.8% de área dark · pero grandes zonas de
                   negro plano · lee como "sombra" no como
                   "grabado que sumó detalle". Queda en el repo
                   fuera del array.

   Fran cortó el diagnóstico A/B en F8: en pantalla la sensación
   correcta es "líneas → hatching denso → corte a libro". El
   sufijo de archivo se puede leer como fuente de verdad para el
   área dark, pero la lectura del sujeto la dicta el ojo.

   Mapping definitivo:
     bust · line    → public/why-now/bust-03-min.png    · 10.1% dark
     bust · dense   → public/why-now/bust-02-mid.png    · 12.3% dark
     book · line    → public/why-now/book-03-min.png    ·  3.0% dark
     book · ghost   → public/why-now/book-02-mid.png    ·  6.7% dark
     book · dense   → public/why-now/book-01-dense.png  · 69.1% dark

   bust-01-dense.png queda en el repo pero fuera del array. */

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
  { name: 'bust-02-mid',   subject: 'bust', start: 0.21, end: 0.42, startScale: 1.20, endScale: 1.05 },
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
