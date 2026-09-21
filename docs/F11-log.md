# F11 · Log de ejecución autónoma

Bitácora de la corrida F11.0 → F17.1, iniciada 21-sep-2026.
Autoridad: `cruda-brief-autonomo-21sep.md`. Reemplaza el protocolo
de firma para esta corrida. Una entrada por fase.

Formato · commit corto (7c), checks, shots, DECISIÓN si aplica.

---

## F11.0 · apilado · motor + 6 planos · AnchorAdvance fuera · ✓
commit   (pendiente)
checks   build ✓ · markers 0 · AnchorAdvance en index.html 0 · nested a 0 · h1 0 (F11.1 mete el h1 del hero) · playwright 390 + 1440 ok, sin errores de consola, nojs 5826 chars legible
shots    docs/F11-shots/F11.0/
DECISIÓN: F11.6 (retiro de Drapers) se adelanta a F11.0 · el
marcador `[ Confidential ]` disparaba el grep `"[ "` de §4 y
la única salida limpia era eliminarlo. WHAT OTHERS queda ya en
la versión de dos items del prototipo (Karen · Forbes + Mike
triple network). F11.6 pasa a ser un commit de verificación.
DECISIÓN: la serif de #act2 sigue viva post-F11.0. El check
generico "serif sólo en testimonios" queda en amarillo hasta
que F11.a (siguiente commit) retire `font-family:var(--serif)`
de `.act2 .beat .dim,.act2 .beat .lit`. No hay riesgo funcional:
el uso está aislado a esas dos reglas.
DECISIÓN: sin retrato para KAREN · CITA (D4). La cita queda a
ancho completo (max-width 32ch, serif). No hay asset y §2
prohíbe placeholders — se renderiza sin retrato.
DECISIÓN: /public/fran-herrera.webp existe → el retrato de
OUR FOUNDER se conserva (Trampa 7 preventiva: object-fit:cover
con height:100% sobre grid stretch).

## F11.a · #act2 a Archivo 400 · ✓
commit   (pendiente)
checks   build ✓ · serif en home chunks = 1 (sólo `.home-karen-quote .quote`) · playwright 390 + 1440 ok, sin errores de consola, nojs 5826 chars legible
shots    docs/F11-shots/F11.a/
Cambio: `.act2 .beat .dim,.act2 .beat .lit` pasa de `font-family:
var(--serif)` a Archivo 400. Todo lo demás (weight, clamp, color)
se conserva. La serif queda reservada al testimonio de Karen.

DECISIÓN: translation-in-practice.css sigue usando `--serif` pero
el componente `TranslationInPractice` no se importa desde
`app/page.tsx` (dead code desde F8 §9.1). Su CSS no se incluye en
los chunks de la home. Se retirará cuando el componente muera
oficialmente en un cleanup posterior.

## F11.1 · hero · auto-fit mínimo común · kicker · h1 · ✓
commit   (pendiente)
checks   build ✓ · h1 en /index.html = 1 · fit medido con playwright: 1440 ambas frases 49.62px (container 777.63) · 390 ambas 22.32px (container 342) · kicker "A communications company" presente · playwright 390 + 1440 ok, sin errores de consola, nojs 5852 chars legible
shots    docs/F11-shots/F11.1/
Cambios:
· `fitPhrase` → `fitAllPhrases` · mide cada frase, toma el
  mínimo, aplica a todas.
· primer beat renderiza como `<h1>` (semántico); el resto queda
  en `<p>` para no romper el motor phrase.
· `<p class="hero__kicker">A communications company</p>` en el
  stage, posicionado en `top: calc(50% - clamp(90px,13vh,150px))`.

DECISIÓN: kicker en `left/right: 8vw` (mismo margen que las
frases del beat) en vez de `left:0 right:0` del prototipo. El
prototipo tiene `text-align:center`; en la home el kicker vive
alineado con el hero de layout izquierda. Mobile mantiene el
`text-align:center` del prototipo.



