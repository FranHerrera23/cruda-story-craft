# EXPERIMENTS AND LEARNINGS

Registro de aprendizajes operativos sobre la ejecución del sitio.
Es complementario al ledger (`docs/decisions.md`): el ledger fija
reglas del sistema; este archivo captura lecciones sobre cómo se
trabaja, cómo se debuggea y cómo se reporta.

Cada entrada nombra el incidente, el aprendizaje, y (cuando aplica)
la regla operativa que sale de él.

---

## 2026-09-16 · Verificar en incógnito ANTES de reportar un bug visual

**Incidente:** Fran reportó cuatro de cinco imágenes rotas en
`#act2` a las 18:08. Marcos vacíos con el ícono de imagen rota
del navegador. Levantó como bug bloqueante de la Fase 2 de motion.

**Diagnóstico:** el agente de código corrió el protocolo de F1
completo · listó las cinco rutas declaradas en `ACT2_ARTS`,
verificó cada una contra `public/why-now/` en disco, contra `git
ls-files`, y contra la respuesta HTTP del server local. Los cinco
archivos existían, estaban tracked por git y devolvían 200. El
código de HEAD estaba limpio.

**Causa real:** cache del navegador de Fran. Una sesión anterior
había cacheado el HTML apuntando a paths que ya no eran válidos.
Una recarga en incógnito mostró las cinco imágenes.

**Aprendizaje:** el primer paso de cualquier bug visual es una
ventana limpia. Antes de escalar como bug de código:

  1. Ctrl+Shift+R (hard reload · descarta cache) · en Firefox
     es Cmd+Shift+R.
  2. Ventana en modo incógnito / privado · descarta cache y
     extensiones.
  3. DevTools → Network → Disable cache mientras la pestaña
     está abierta.

Recién con eso, si el bug persiste, se reporta.

**Consecuencia para el agente:** el protocolo funcionó y frenó
correctamente. No corregir nunca sobre un reporte visual sin
verificar el estado del código y del servidor. El protocolo del
brief F1 ("listar → verificar → reportar sin corregir") se
mantiene como estándar para futuros bugs de assets rotos.

**Origen:** Fran, 16 septiembre 2026 · brief de reconstrucción v1,
cierre de F1.
