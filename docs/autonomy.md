# Regla permanente de autonomía · Fran 4-oct-2026

**Aplica siempre, en todas las sesiones.**

Ejecutá de punta a punta sin consultarme. La cola en curso es:
**F56 (merge + deploy) → F55 → F52 → F30.** Cada brief se encadena
con el siguiente sin esperar OK.

## Decisiones que ya están tomadas (no me las consultes)

- **Merge:** con el preview de Vercel en verde (lo chequeás vos por la
  API) y la QA del brief cumplida, mergeás con `--no-ff`, actualizás
  `docs/merge-log.md` y hacés push a `main`.
- **Producción:** después de cada deploy, verificá con `curl` que el
  cambio esté live. Si el deploy falla, diagnosticá y corregí.
- **Lighthouse:** lo medido en el contenedor es orientativo. Si la
  performance da ≥ 90 y el CLS < 0,1, se mergea aunque el LCP local
  pase de 2,5 s; anotalo para F52.
- **Pixel-diff:** criterio F49 (imágenes enmascaradas). Las diferencias
  de la nav en 1440 que también aparecen en un control AFTER-vs-AFTER
  son ruido. Los cambios esperados del brief no frenan.
- **Herramientas de captura:** si fallan (loader, timing, lazy),
  arreglá el script; no me lo reportes como bloqueo.
- **Copy existente:** se usa tal cual, sin pedirme revisión. En F55,
  el texto de *Before CRUDA*, *What he reads* y las 8 Q&A se copia
  verbatim del código actual; no hace falta mandármelo antes.
- **Avatar:** si `public/fran-avatar-source.*` está en el repo, se
  usa. Si no, se usa `fran-herrera.webp` y se deja anotado.
- **Scroll de F55:** el mismo componente que usa `/services`.

## No parás nunca · ante cada caso

1. **Falta un texto** que no existe en brief, HTML o código: poné
   `[PLACEHOLDER: qué va acá]` y seguí. Nunca inventes el texto.
   - En previews: resaltado con fondo amarillo.
   - En producción: el elemento que lo contiene **no se renderiza**.
     Si el placeholder es un título o sección entera, se oculta la
     sección completa.
   - Llevá lista en `docs/placeholders.md` (archivo, ubicación, qué
     falta) y sumala al reporte del brief.
2. **Contradicción entre briefs:** gana el más reciente. Anotalo en
   el reporte y seguí.
3. **Preview o deploy fallan 3 veces por la misma causa:** dejá esa
   rama sin mergear, anotá el log en el reporte y seguí con el brief
   siguiente.
4. **Acción fuera del repo** (Calendly, Vercel, beehiiv, GitHub):
   anotala en el reporte y seguí con todo lo demás.

## Reporte

Uno solo por brief, **al terminar el merge**, con:
- hash de main después del merge
- link de producción
- salida de `curl` que verifica los cambios live
- una línea por check de QA

**Sin reportes intermedios.**
