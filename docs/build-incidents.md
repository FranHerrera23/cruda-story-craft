# BUILD INCIDENTS

Registro de incidentes técnicos del repo · bugs de deploy, de
cache, de assets, protocolos de diagnóstico que funcionaron o
fallaron. Vive al lado del código para que el próximo que
debuggee lo encuentre.

Es distinto del registro de lecciones de negocio y proceso, que
vive en el project knowledge del proyecto
(`EXPERIMENTS_AND_LEARNINGS.md`). Este archivo es solo build.

---

## 2026-09-16 · Cuatro de cinco imágenes de #act2 reportadas como rotas

El repo estaba limpio: los cinco archivos tracked, los cinco
sirviendo 200 en local, ningún commit tocó `public/`. Era cache
del navegador que hizo el reporte.

Protocolo: ante un bug visual, verificar en incógnito antes de
abrir la investigación. El protocolo listar → verificar →
reportar funcionó y detuvo la fase en el punto correcto.

Diagnóstico ejecutado:

  · `grep ACT2_ARTS` en `acts-config.ts` · 5 nombres declarados.
  · `ls public/why-now/` · 6 PNGs presentes (los 5 + bust-02-mid
    fuera del array).
  · `git ls-files public/why-now/` · los 6 tracked.
  · `git blame` sobre `3253008`, `4132bbc`, `6fdae95` · ningún
    commit tocó `public/`.
  · `curl -sI http://localhost:3000/why-now/<name>.png` · los
    5 devolvieron 200.

Con esa cadena de verificaciones, el código quedó descartado
como causa. Fran recargó en incógnito y las cinco imágenes se
renderizaron.

**Aprendizaje operativo:** el primer paso de cualquier bug
visual reportado es hard-reload (Ctrl+Shift+R / Cmd+Shift+R) o
ventana incógnita. Recién con eso, si el bug persiste, se
escala.
