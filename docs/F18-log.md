# F18 · Log · case studies indexados + prueba en cards + fixes globales

Autoridad: brief F18 · 21-sep-2026 · MODO AUTÓNOMO.
Reemplaza a todos los bloques F18 anteriores.

CALENDLY_URL = (vacío) · F18.10 se saltea.
ENMIENDA 1 (21-sep) · Confidential = Interpreted · across.

Bloques:
  A · Case studies (F18.0 → F18.5)
  B · Fixes globales (F18.6 → F18.10)

Formato: fase · commit · checks · shots · DECISIONes.

---

## F18.0 · fuente única · content/work/[slug].ts · ✓
commit   (pendiente)
checks   build ✓
Cambios:
· `src/content/work/types.ts` · tipo `Work` cierra el contrato.
· 9 archivos de caso: karen-mannheim · mike-kaeding · girish-sehgal
  · jack-yeager · mannheim-trading · inout ·
  confidential-fashion-founder · arman-keshishian · juan-pablo-romero.
· `index.ts` expone `allWork`, `selectedWork` (order ≤ 100 · orden
  asc) y `workGeoStats()`.
· Karen refactor: 7 métricas (PRUEBA ≤4 · CONTEXTO sin tope · W6
  del wireframe). Cifras lockeadas + los dos contextuales
  (5 years, 33 years) mantienen fuente y período.
· INOUT = Germán Noel · Salta. La ex-card "INOUT · Retail systems
  · Panamá City" desaparece; queda una sola card Germán Noel →
  /work/inout (F18.3 la instancia).
· Confidential = Interpreted · across (Enmienda 1).
· Juan Pablo Romero · `order: 101` · fuera de SELECTED WORK (§7).
· Snapshots "antes" de cada caso publicado en docs/F18-before/*.md.

Geo (calculado por `workGeoStats()`):
  founders 8 · cities 7 · countries 4
  → "Eight founders. Seven cities. Four countries." OK

DECISIÓN: los case pages actuales siguen sirviendo el contenido
legacy hasta F18.2 (migración uno a uno). F18.0 sólo entrega la
fuente de datos y verifica que compila.

DECISIÓN: 4 casos tienen sub-secciones extraídas del contenido
publicado (Mike, Girish, MTC, Confidential, INOUT, JPR). Frases,
cifras y arcos son las del sitio · si un párrafo del "before" no
migró, se anota en F18.2.

