/* Home · Acts · calibración
   Brief 07 definitivo (15-sep) · §12 CALIBRACIÓN.

   Los tres números que producen la sensación de peso viven acá,
   juntos y comentados. Se ajustan mirando, no calculando.

   ACT1_HEIGHT_VH   Altura del track del acto 1 (hero negro, dos
                    beats). Punto de partida 400vh · 200vh por beat.
                    → Se siente rápido = subir.
                    → Se siente lento  = bajar.

   ACT2_HEIGHT_VH   Altura del track del acto 2 (why-now paper,
                    cinco beats). Punto de partida 1100vh · ~220vh
                    por beat.
                    → Igual que acto 1.

   FILL_PORTION     Fracción del rango del beat que consume el
                    relleno. El 60% restante el beat queda quieto
                    y lleno — la meseta que hace que la frase
                    tenga tiempo (§4 del brief).
                    → Punto de partida 0.4.
                    → El beat se va apenas se llena = subir.
                    → El beat se queda demasiado tiempo = bajar.

   Mobile · alturas más chicas porque el scroll es más corto por
   gesto. Los rangos [from, to] son los mismos — el motor los lee
   proporcionalmente al alto total del track. */

export const ACT1_HEIGHT_VH = 400
export const ACT2_HEIGHT_VH = 1100
export const ACT1_HEIGHT_VH_MOBILE = 320
export const ACT2_HEIGHT_VH_MOBILE = 900

export const FILL_PORTION = 0.4

/* ══════════ Copy · verbatim del Brief 07 §5 ══════════
   Cada beat es un array de líneas autorales. El motor genera un
   [data-line] por línea; el relleno barre línea a línea dentro
   del rango del beat.

   Las líneas ya están cortadas como Fran las escribió — el
   quiebre autoral es intencional. En viewports muy chicos alguna
   línea puede envolver visualmente; el clip-path aplica al
   contenedor de la línea, así que el envuelto se rellena
   coherente. */

export type Beat = {
  from: number
  to: number
  lines: string[]
}

/* Acto 1 · hero negro. Dos beats. Cero imagen.
   Motion v4 §1 — beat 1 arranca en 0, sin offset de entrada. Con
   from=0 el motor pinta el beat activo desde el primer frame,
   antes de cualquier scroll. Sin baseline visible al cargar era
   un bug de estado inicial: el copy existía en el DOM pero
   quedaba con visibility hidden y el watchdog no lo cazaba
   porque a los 2000ms el elemento ya estaba "técnicamente
   visible". */
export const ACT1_BEATS: Beat[] = [
  { from: 0.00, to: 0.34, lines: ['Your company outgrew its own story.'] },
  { from: 0.50, to: 0.78, lines: ['We build the next one.'] },
]

/* Acto 2 · why-now paper. Cinco beats.
   `To Himself` va en <em class="nowrap"> — no se puede partir.
   El em-dash lleva &nbsp; adelante (§5 del brief).
   Apóstrofes tipográficos con &rsquo;.

   Motion v4 §1 — beat 1 arranca en 0. Mismo motivo que act 1:
   al entrar al acto (rect.top ≈ 0), p=0 y el beat 01 tiene que
   estar en rango. Antes empezaba en 0.04 y la primera pantalla
   del acto quedaba muerta hasta el primer flick. */
export const ACT2_BEATS: Beat[] = [
  {
    from: 0.00,
    to: 0.20,
    lines: [
      'Marcus Aurelius ran the Roman Empire for nineteen years.',
      'Wars, plague, the whole weight of it.',
    ],
  },
  {
    from: 0.24,
    to: 0.40,
    lines: [
      'What survived isn&rsquo;t the empire. It&rsquo;s twelve notebooks he wrote in',
      'Greek and titled <em class="nowrap">To&nbsp;Himself</em>&nbsp;&mdash; not philosophy, just a man working',
      'out what to do.',
    ],
  },
  {
    from: 0.44,
    to: 0.60,
    lines: [
      'You have a version of that. It lives in your head, in rooms you&rsquo;ve',
      'walked into, in decisions you made so long ago you stopped',
      'explaining them.',
    ],
  },
  {
    from: 0.64,
    to: 0.80,
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
   Motion v5 · Fase 3A (15-sep). Cinco capas apiladas, opacity
   como función de p con rampas de entrada [in0, in1] y salida
   [out0, out1] alineadas a los cinco beats.

   ORDEN CORREGIDO (Motion v5 §1). Dos rampas ascendentes.
   Dentro de cada sujeto la tinta solo suma:

       01  bust  line art limpio    ░       (el contorno)
       02  bust  grabado denso     ███      (grabado completo)
       ╎  corte de sujeto en el hueco 02→03 ╎
       03  book  line art limpio    ░       (el contorno)
       04  book  denso + fantasma  ██▓      (entra la trama)
       05  book  grabado denso     ███      (volumen terminado)

   Mapping de los nombres descriptivos del brief a los archivos
   reales del repo (comprobado por lectura visual · Motion v5 §1
   verificación 3 · ningún archivo se borra):

       bust · line    → public/why-now/bust-03-min.png
       bust · dense   → public/why-now/bust-02-mid.png
                        (el naming del archivo miente ·
                        `mid` es el más denso de los tres,
                        con puntillismo tupido y hatching cerrado)
       book · line    → public/why-now/book-03-min.png
       book · ghost   → public/why-now/book-02-mid.png
       book · dense   → public/why-now/book-01-dense.png

   `bust-01-dense.png` queda en el repo (regla del brief) pero
   fuera del array — es la variante intermedia del busto y
   ninguno de los cinco slots la usa.

   RANGOS. Alineados a los beats de ACT2_BEATS:
       beat 01  0.00 ─ 0.20    ⇢ art 01
       hueco    0.20 ─ 0.24    ⇢ cross-fade 01→02
       beat 02  0.24 ─ 0.40    ⇢ art 02
       hueco    0.40 ─ 0.44    ⇢ cross-fade 02→03 (corte de sujeto)
       beat 03  0.44 ─ 0.60    ⇢ art 03
       hueco    0.60 ─ 0.64    ⇢ cross-fade 03→04
       beat 04  0.64 ─ 0.80    ⇢ art 04
       hueco    0.80 ─ 0.84    ⇢ cross-fade 04→05
       beat 05  0.84 ─ 1.00    ⇢ art 05

   Motion v5 Fase 3B (todavía sin arrancar) convierte el
   cross-fade del corte de sujeto (02→03) en corte duro dentro
   del hueco, sin fundido. Para 3A queda cross-fade en todos —
   "un array, nada más" (Motion v5 §1 implementación). */

export type Art = {
  name: string
  in0: number
  in1: number
  out0: number
  out1: number
}

export const ACT2_ARTS: Art[] = [
  { name: 'bust-03-min',   in0: 0.00, in1: 0.00, out0: 0.20, out1: 0.24 },
  { name: 'bust-02-mid',   in0: 0.20, in1: 0.24, out0: 0.40, out1: 0.44 },
  { name: 'book-03-min',   in0: 0.40, in1: 0.44, out0: 0.60, out1: 0.64 },
  { name: 'book-02-mid',   in0: 0.60, in1: 0.64, out0: 0.80, out1: 0.84 },
  { name: 'book-01-dense', in0: 0.80, in1: 0.84, out0: 1.00, out1: 1.01 },
]
