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

   ACT2_HEIGHT_VH   1680vh · 4 beats · F10.1 (19-sep) firmado
                    18-sep · nunca ejecutado en F9. El brief F9
                    exigía el corte y no lo puse en un commit
                    propio · el problema de los quince gestos
                    quedó en producción hasta este commit.

                    Punto de partida 2100 × 4/5 = 1680. Objetivo
                    medido · siete gestos de rueda o menos para
                    toda la sección. Si a 1680 son más de siete,
                    baja. NÚMERO MEDIDO · scratchpad/count-
                    gestures.mjs · no estimado.

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
export const ACT2_HEIGHT_VH = 620
export const ACT1_HEIGHT_VH_MOBILE = 260
export const ACT2_HEIGHT_VH_MOBILE = 500

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

/* Acto 2 · why-now paper. CUATRO beats (F10.1 · corte firmado
   18-sep · nunca ejecutado en F9 · Commit 8).

   COPY · Fran, verbatim del brief F10 §6.1:
     · Beat 01 · sin cambios (17w).
     · Beat 02 · sale "and titled To Himself" (23w).
     · Beat 03 · funde los beats 3 y 4 viejos (22w) · sale
                 "It lives in your head, in rooms you've walked
                 into, in decisions you made so long ago you
                 stopped explaining them" · sale "eventually".
     · Beat 04 · sin cambios · era el beat 05 (15w).
     Total 77w · antes 104w · reducción 26%.

   TIPOGRAFÍA · apóstrofes con &rsquo; (sistema), em-dash con
   &nbsp;&mdash; · sin <em> ni <span> hijos (Fran retiró
   "and titled To Himself" · el único hijo HTML del acto sale
   con él · el bug de LineReveals dejó de aplicar acá).

   VENTANAS · nueva geometría 4 beats + 3 huecos = 1.0:
     Beat 01 · [0.00, 0.18] · window 0.18
     hueco   · [0.18, 0.22] · 0.04
     Beat 02 · [0.22, 0.48] · window 0.26 · TRANSICIÓN ancha
     hueco   · [0.48, 0.55] · 0.07 · book thin → book mid
     Beat 03 · [0.55, 0.77] · window 0.22
     hueco   · [0.77, 0.82] · 0.05 · book mid → book dense
     Beat 04 · [0.82, 1.00] · window 0.18

   COPY · beat 1 línea 2 heredado de F2 §2.7 · "He was at war
   for fourteen of them." Verificación histórica: Guerras
   Marcomanas 166-180 d.C. son 14 años. Reinado 161-180, 19
   años. La guerra pártica (161-166) se solapa pero es previa
   — la cifra subestima. Publicable.

   MOTOR MIDE · cada beat es UNA sola string · LineReveals
   splittea por línea visual y el motor sweep barre las líneas
   medidas (F10.1 §6.1 · "si el split es por línea visual,
   ignoralos y dejá que el motor mida"). */
export const ACT2_BEATS: Beat[] = [
  {
    from: 0.00,
    to: 0.18,
    lines: [
      'Marcus Aurelius ran the Roman Empire for nineteen years. He was at war for fourteen of them.',
    ],
  },
  {
    from: 0.22,
    to: 0.48,
    lines: [
      'What survived isn&rsquo;t the empire. It&rsquo;s twelve notebooks he wrote in Greek&nbsp;&mdash; not philosophy, just a man working out what to do.',
    ],
  },
  {
    from: 0.55,
    to: 0.77,
    lines: [
      'You have a version of that, and you&rsquo;re too close to see it. Anyone who does something exceptional every day files it under normal.',
    ],
  },
  {
    from: 0.82,
    to: 1.00,
    lines: [
      'So the job isn&rsquo;t writing. It&rsquo;s taking things off until what&rsquo;s left is only yours.',
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

   SECUENCIA (F10.1 · 4 beats). Global p sobre el acto 2:

     beat 01  [0.00, 0.18]   bust dense              (bust-01-dense.png)
     hueco    [0.18, 0.22]   bust dense sostenido
     beat 02  [0.22, 0.48]   ↓ LA TRANSICIÓN ↓
        local 0.00-0.25      bust dense visible
        local 0.25-0.45      bust dense → bust mid crossfade
        local 0.45-0.60      bust mid → bust thin crossfade
        local 0.60-0.70      bust thin → 0 · book thin 0 → parcial
        local 0.60-0.80      book thin entra
        local 0.80-1.00      book thin sostenido
     hueco    [0.48, 0.55]   book thin → book mid crossfade
     beat 03  [0.55, 0.77]   book mid                (book-02-mid.png)
     hueco    [0.77, 0.82]   book mid → book dense crossfade
     beat 04  [0.82, 1.00]   book dense              (book-01-dense.png)

   Los seis assets siguen en uso · el corte de F10.1 fusionó
   los beats 04 y 05 viejos (ambos mostraban book-01-dense) en
   un solo beat 04, que es la fusión natural del arte.

   Todos los locales de beat 02 convertidos a global p (window
   0.26 = to − from = 0.48 − 0.22):

     local  0.00 → global  0.220
     local  0.25 → global  0.285
     local  0.45 → global  0.337
     local  0.60 → global  0.376
     local  0.70 → global  0.402
     local  0.80 → global  0.428
     local  1.00 → global  0.480

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
     0.285-0.337) hacia bust-mid. */
  {
    name: 'bust-01-dense', subject: 'bust',
    in0: 0.000, in1: 0.000,
    out0: 0.285, out1: 0.337,
    startScale: 1.20, endScale: 1.08,
  },
  /* Bust mid · entra por crossfade con dense, sostiene poco, y
     cede a thin en local 0.45-0.60 (global 0.337-0.376). */
  {
    name: 'bust-02-mid', subject: 'bust',
    in0: 0.285, in1: 0.337,
    out0: 0.337, out1: 0.376,
    startScale: 1.15, endScale: 1.08,
  },
  /* Bust thin · dominante en el pico del "borrado". Empieza a
     desaparecer en local 0.60 (global 0.376), termina en 0.70
     (global 0.402). Coincide con la entrada del libro-thin. */
  {
    name: 'bust-03-min', subject: 'bust',
    in0: 0.337, in1: 0.376,
    out0: 0.376, out1: 0.402,
    startScale: 1.10, endScale: 1.05,
  },
  /* Book thin · entra por overlap con bust thin (local 0.60 =
     global 0.376). Domina hasta el fin de beat 02 (0.48) y
     mantiene durante el hueco. Fade out hacia book-mid en el
     hueco 0.48-0.55 (window 0.07 · crossfade largo). */
  {
    name: 'book-03-min', subject: 'book',
    in0: 0.376, in1: 0.402,
    out0: 0.480, out1: 0.550,
    startScale: 1.20, endScale: 1.08,
  },
  /* Book mid · el arte de beat 03 [0.55, 0.77]. Fade-in durante
     el hueco 0.48-0.55, sostiene todo el beat, cede a book-dense
     en el hueco 0.77-0.82. */
  {
    name: 'book-02-mid', subject: 'book',
    in0: 0.480, in1: 0.550,
    out0: 0.770, out1: 0.820,
    startScale: 1.15, endScale: 1.05,
  },
  /* Book dense · beat 04. Entra por crossfade con book-mid en
     el hueco 0.77-0.82, queda hasta el fin del acto. */
  {
    name: 'book-01-dense', subject: 'book',
    in0: 0.770, in1: 0.820,
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

/* ══════════ Lenis · parámetros (F2 §2.6 · F9 §2.2 · Commit 6 · 19-sep) ══════════
   wheelMultiplier NO se toca (0.35 dentro / 0.9 fuera).

   F9 §2.2 · Fran (18-sep) · el scroll se sentía trabado, no
   lento. La lentitud implementada como LAG (wheelMultiplier bajo
   + duration larga) daba un scroll asintótico "barato". El
   modelo correcto: el scroll responde inmediato, lo que dura
   es el contenido. `duration` es cuánto tarda el scroll en
   alcanzar su destino tras cada gesto · 2.0s produce arrastre.

   Ambas duration bajan a 1.1 (Fran, 19-sep). Estimación tuya ·
   si en incógnito se siente apurada, subir a 1.3. Las dos
   constantes quedan expuestas · un solo lugar para ajustar.

   `lerp` SE RETIRA (F2-FIX bug 2 · 17-sep). En Lenis, lerp y
   duration son mutuamente excluyentes; con lerp presente,
   duration se ignora y el scroll pasa a interpolación
   exponencial asintótica. Con wheelMultiplier: 0.35 eso daba
   la sensación de "traba y queda a mitad de letra". El peso
   del scroll viene de duration.

   Interpolación entre juegos de parámetros sobre 400ms al
   entrar/salir del acto. Motor la maneja. */

/* Constante expuesta para tuneo rápido en incógnito. Cambia a
   1.3 si a 1.1 se siente apurada. Aplica a los dos juegos. */
const LENIS_DURATION = 1.1

export const LENIS_IN_ACT = {
  wheelMultiplier: 0.35,
  duration: LENIS_DURATION,
} as const

export const LENIS_OUT_ACT = {
  wheelMultiplier: 0.9,
  duration: LENIS_DURATION,
} as const

export const LENIS_INTERP_MS = 400
