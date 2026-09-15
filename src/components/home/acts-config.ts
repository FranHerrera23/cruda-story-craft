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
   Seis capas apiladas · opacity como función de p con rampas de
   entrada [in0, in1] y de salida [out0, out1]. Continuo, no
   salta con el beat (Brief 07 §3). Peaks entre bust-01-dense
   (dense) y book-03-min (min) — la línea pierde densidad de
   forma continua a lo largo del acto. */

export type Art = {
  name: string
  in0: number
  in1: number
  out0: number
  out1: number
}

export const ACT2_ARTS: Art[] = [
  { name: 'bust-01-dense', in0: 0.00, in1: 0.02, out0: 0.14, out1: 0.20 },
  { name: 'bust-02-mid',   in0: 0.14, in1: 0.20, out0: 0.30, out1: 0.36 },
  { name: 'bust-03-min',   in0: 0.30, in1: 0.36, out0: 0.46, out1: 0.52 },
  { name: 'book-01-dense', in0: 0.46, in1: 0.52, out0: 0.62, out1: 0.68 },
  { name: 'book-02-mid',   in0: 0.62, in1: 0.68, out0: 0.78, out1: 0.84 },
  { name: 'book-03-min',   in0: 0.78, in1: 0.84, out0: 1.00, out1: 1.01 },
]
