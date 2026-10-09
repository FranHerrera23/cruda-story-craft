# Placeholders activos

Entradas con texto o asset que faltan y están cubiertos con
`[PLACEHOLDER: ...]`. En preview salen con fondo amarillo; en
producción el elemento que los contiene no renderiza (si el
placeholder es un título o una sección entera, se oculta la sección
completa).

Ver `docs/autonomy.md` para la regla.

| brief | archivo | ubicación | qué falta |
|---|---|---|---|
| F30 INOUT | `src/content/work/inout.ts` | sections[1].blocks (SYSTEM) | `/inout/system-01-logo-grid.jpg` · diagrama construcción logo (A1 F25) |
| F30 INOUT | `src/content/work/inout.ts` | sections[1].blocks (SYSTEM) | `/inout/system-02-two-axes.jpg` · diagrama dos ejes (A2 F25) |
| F30 INOUT | `src/content/work/inout.ts` | sections[1].blocks (SYSTEM) | `/inout/system-03-swatch-blue.jpg` · swatch Pantone 4736 C #1600FF (A3 F25) |
| F30 INOUT | `src/content/work/inout.ts` | sections[1].blocks (SYSTEM) | `/inout/system-04-swatch-green.jpg` · swatch Pantone 418 C #3E4B41 (A4 F25) |
| F30 INOUT | `src/content/work/inout.ts` | sections[1].blocks (SYSTEM) | `/inout/system-05-typography.jpg` · spec Montserrat tracking 14pt (A5 F25) |
| F30 INOUT | `src/content/work/inout.ts` | sections[2].blocks (PHOTO BAND) | `/inout/photo-band-el-tipal-neobox.jpg` · interior El Tipal, Neobox mayo 2022 (A9 F25) |
| F30 INOUT | `src/content/work/inout.ts` | rooms[0].image | `/inout/insiders-01-salvador-pepi.jpg` · still episodio #01 (A6 F25) |
| F30 INOUT | `src/content/work/inout.ts` | rooms[1].image | `/inout/insiders-02-sergio-cabrera.jpg` · still episodio #02 (A7 F25) |
| F30 INOUT | `src/content/work/inout.ts` | rooms[2].image | `/inout/insiders-03-horizontal-arquitectos.jpg` · still episodio #03 (A8 F25) |
| F30 INOUT | `src/content/work/inout.ts` | — | `publishedAt` sin setear · brief original 2020, fecha exacta de anuncio sin confirmar (F38 no fake dates) |
| Ensayo Emigrar | `content/essays/emigrar-te-devuelve-el-lapiz.md` | frontmatter `hero_credit` | "Foto: [nombre del fotógrafo] en Unsplash" · falta nombre del fotógrafo |
