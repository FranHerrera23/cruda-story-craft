# Decisiones lockeadas

Ledger de decisiones permanentes que trascienden un brief y aplican a todo
el sitio. Se abren solo con instrucción explícita de Fran.

---

## 2026-09-14 · Regla de ratios contra fee

**Regla:** ningún múltiplo, ratio o proporción contra el fee puede aparecer
en el sitio. `21x el fee`, `1.7x el fee`, `1.38% de los ingresos`,
`$30,252 en media value` — todos son función de dos direcciones: el lector
divide y deduce el pricing.

**Alcance:** todo el sitio, sin excepción. Aplica a rutas indexadas y a
las noindex (`/pricing`, `/deck`) — el noindex protege del crawler, no
del lector, y el pricing es exactamente lo que un humano con link puede
inferir.

**Verificación:** grep del repo hoy devuelve cero ocurrencias
(`multiplier`, `21x`, `1.7x`, `1.38%`, `$30,252`, `media value`). La regla
queda como bloqueo para futuras iteraciones.

**Origen:** Brief 03 (Process) · P2, 14 septiembre 2026.

---

## 2026-09-14 · `--space-8` (244px) fuera del sistema

**Decisión:** el token `--space-8: 244px` sale del `:root` de
`case-study.css`. Sus dos usos (`essay .e-head padding-top` y
`approach .ap padding-top`) pasan a `--s5` (clamp 100–180).

**Razón:** 244px suelto convivía con la escala cerrada `--s1`…`--s5` del
sistema. Un valor fuera de escala en el mismo `:root` es exactamente lo
que la unificación tipográfica y de espaciado retiró de todo lo demás.

**Alcance de esta decisión:** solo el reemplazo. **Subir `--s5` al valor
244 con regresión de sitio completo queda como fase propia** — cambia el
padding vertical de cada sección donde `--s5` se consume, y eso requiere
mirar la home, `/our-founder` (→ `/about`), `/approach` (→ `/process`),
`/essays`, `/contact` y los case studies uno por uno.

**Verificación:** grep de `--space-8` en `src/` y `app/` devuelve cero
ocurrencias vivas. La declaración en `case-study.css:62` queda con una
nota que apunta a esta entrada.

**Origen:** Brief 03 (Process) · P4, 14 septiembre 2026 · resuelto por
adelantado en commit `952c94f`.

---

## 2026-09-14 · Tiempo verbal sobre clientes

**Regla:** ningún compromiso cerrado se enmarca en presente. El hecho
sobre el cliente (lo que ella hace en su práctica) puede quedar en
presente; el marco que lo ata a CRUDA hoy tiene que llevar rango de
fechas o verbo en pasado.

**Formato de atribución:** `Client, YYYY—YYYY` cuando el compromiso está
cerrado. Un rango sin qualifier no puede leerse como "fecha del testimonio"
— la fecha del testimonio va en la copy del testimonio si hace falta, no
en la atribución.

**Alcance:** todo el sitio, incluidas rutas noindex.

**Verificación permanente:** grep de `still a client`, `is ongoing`,
`Client since <year>` en la mitad del rango debe devolver cero ocurrencias
sobre engagements cerrados.

**Origen:** Fran, 14 septiembre 2026 · barrido ejecutado en commits
`952c94f` y siguientes.
