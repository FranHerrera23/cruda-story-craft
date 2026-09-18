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
   Wireframe LOCK · home §5 (17-sep). Reemplaza la disposición
   de F8 §2 y la cláusula de hard-cut de F2 §2.5.

   ARGUMENTO. El busto se BORRA mientras el copy dice que el
   imperio no sobrevivió. El libro aparece en su lugar. Esa
   transición ES la sección · sin ella el bloque es una galería
   de ilustraciones al lado de texto.

   MAPEO SEMÁNTICO ↔ ARCHIVO (verificado por medición de pixels
   sobre el binario · scratchpad/inspect-arts.py · 18-sep):

     nombre wireframe   archivo físico            dark %
     bust-03-dense  →   bust-01-dense.png         13.5%
     bust-02-mid    →   bust-02-mid.png            6.0%
     bust-01-thin   →   bust-03-min.png            5.5%
     book-01-thin   →   book-03-min.png            1.7%
     book-02-mid    →   book-02-mid.png            3.3%
     book-03-dense  →   book-01-dense.png         24.9%

   Los archivos numeran de denso a mínimo. El wireframe numera
   de mínimo a denso. Inversión limpia · seis archivos, seis
   filas · confirmado en incógnito por Fran (18-sep).

   SECUENCIA (wireframe §5.3 + §5.4). Global p sobre el acto 2:

     beat 01  [0.00, 0.16]   bust dense              (bust-01-dense.png)
     hueco    [0.16, 0.21]   bust dense sostenido
     beat 02  [0.21, 0.37]   ↓ LA TRANSICIÓN ↓
        local 0.00-0.25      bust dense visible
        local 0.25-0.45      bust dense → bust mid crossfade
        local 0.45-0.60      bust mid → bust thin crossfade
        local 0.60-0.70      bust thin → 0 · book thin 0 → parcial
        local 0.60-0.80      book thin entra
        local 0.80-1.00      book thin sostenido
     hueco    [0.37, 0.42]   book thin → book mid crossfade
     beat 03  [0.42, 0.58]   book mid                (book-02-mid.png)
     hueco    [0.58, 0.63]   book mid → book dense crossfade
     beat 04  [0.63, 0.79]   book dense              (book-01-dense.png)
     hueco    [0.79, 0.84]   book dense sostenido
     beat 05  [0.84, 1.00]   book dense              (book-01-dense.png)

   Todos los locales de beat 02 convertidos a global p (window
   0.16 = to − from = 0.37 − 0.21):

     local  0.00 → global  0.210
     local  0.25 → global  0.250
     local  0.45 → global  0.282
     local  0.60 → global  0.306
     local  0.70 → global  0.322
     local  0.80 → global  0.338
     local  1.00 → global  0.370

   CROSSFADE. F2 §2.5 pedía hard-cut entre archivos. El
   wireframe lo anula para #act2 (aprobado por Fran, 18-sep) ·
   sin el cruce el argumento del beat 02 no existe. Sólo aplica
   a #act2. El resto de F2 §2.5 (motor sin transition/animation,
   todo función de p) sigue vigente.

   ARTE. Cada art declara cuatro puntos de p:
     in0  cuando arranca a subir opacity desde 0
     in1  cuando llega a 1
     out0 cuando arranca a bajar desde 1
     out1 cuando termina en 0

   Con in0=in1 y out0=out1 el art se comporta como hard-cut
   (compatibilidad con la semántica original). Con separación
   entre in0/in1 y out0/out1 hay crossfade lineal atado al scroll.

   ESCALA. La escala interpola desde startScale (en in0) a
   endScale (en out1). El pull-back sigue existiendo dentro
   del rango visible del art, pero acumula suavemente durante
   los cruces. */

export type Art = {
  name: string
  subject: 'bust' | 'book'
  in0: number
  in1: number
  out0: number
  out1: number
  startScale: number
  endScale: number
}

export const ACT2_ARTS: Art[] = [
  /* Beat 01 + hueco + inicio de beat 02 · bust dense sostenido.
     Fade-out durante local 0.25-0.45 de beat 02 (global
     0.250-0.282) hacia bust-mid. */
  {
    name: 'bust-01-dense', subject: 'bust',
    in0: 0.000, in1: 0.000,
    out0: 0.250, out1: 0.282,
    startScale: 1.20, endScale: 1.08,
  },
  /* Bust mid · entra por crossfade con dense, sostiene poco, y
     cede a thin en local 0.45-0.60 (global 0.282-0.306). */
  {
    name: 'bust-02-mid', subject: 'bust',
    in0: 0.250, in1: 0.282,
    out0: 0.282, out1: 0.306,
    startScale: 1.15, endScale: 1.08,
  },
  /* Bust thin · dominante en el pico del "borrado". Empieza a
     desaparecer en local 0.60 (global 0.306), termina en 0.70
     (global 0.322). Coincide con la entrada del libro-thin. */
  {
    name: 'bust-03-min', subject: 'bust',
    in0: 0.282, in1: 0.306,
    out0: 0.306, out1: 0.322,
    startScale: 1.10, endScale: 1.05,
  },
  /* Book thin · entra por overlap con bust thin (local 0.60 =
     global 0.306). Domina hasta el fin de beat 02 (0.37) y
     mantiene durante el hueco. Fade out hacia book-mid al
     comienzo de beat 03 (0.40-0.42). */
  {
    name: 'book-03-min', subject: 'book',
    in0: 0.306, in1: 0.322,
    out0: 0.400, out1: 0.420,
    startScale: 1.20, endScale: 1.08,
  },
  /* Book mid · el arte de beat 03. Fade-in tail del hueco
     (0.40-0.42), sostiene todo el beat, cede a book-dense en el
     hueco 0.58-0.68 (crossfade largo · el detalle sube). */
  {
    name: 'book-02-mid', subject: 'book',
    in0: 0.400, in1: 0.420,
    out0: 0.630, out1: 0.680,
    startScale: 1.15, endScale: 1.05,
  },
  /* Book dense · beats 04 + 05. Entra por crossfade con book-mid
     en 0.63-0.68 y queda hasta el fin del acto. */
  {
    name: 'book-01-dense', subject: 'book',
    in0: 0.630, in1: 0.680,
    out0: 1.010, out1: 1.020,
    startScale: 1.10, endScale: 1.00,
  },
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
