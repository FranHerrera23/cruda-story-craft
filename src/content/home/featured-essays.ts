/* Home · essays featured.

   Curaduría MANUAL. Tres ensayos en el orden en que aparecen en la
   home. NO es filtrado automático por fecha, ni por idioma — es una
   selección editorial que Fran controla.

   Para cambiar qué se muestra: editá los slugs en el array. Cada
   slug debe existir en @/content/essays (ver el index.ts de ahí).

   Regla que se va a respetar acá: inglés arriba, después bilingüe.
   El objetivo es mostrar profundidad y rango — tres ensayos que
   se lean como "Fran piensa más ancho que lo que vende", no tres
   ensayos que se lean como un feed. */

export const featuredEssaySlugs = [
  /* 1 · Ancho conceptual — sociedad, valor propio, filosofía. */
  'third-place',
  /* 2 · Empresarial — capital relacional, anti-tech marketing. */
  'el-ocho',
  /* 3 · Bilingüe — lenguaje de marca, honestidad en el vender. */
  'narradores-peligrosos',
] as const
