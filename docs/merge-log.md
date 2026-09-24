# Merge log · sesión 24-sep 2026

Origen: `main` en `cc1dd4a` (Merge f23-6-cases-editorial).
Todo mergeado con `--no-ff` (merge commit propio) para poder revertir cada rama por separado.

## Merges ejecutados en orden

| # | Rama | Merge commit | Verificado con `npm run build` |
|---|---|---|---|
| 1 | `f25-fixes` | `10db8b07dfb8d9d7c1c0843acf01045afb3c0c88` | ✅ |
| 2 | `f28-proof` | `451e8804ca9106cfea974317b78636db22481084` | ✅ |
| 3 | `f31-services` | `fd78fefc0b5b56aae0c28a6ce38471aeb01452a0` | ✅ |
| 4 | `f31-home` | `f166ce90f9e397d5775a645f8f6564e3c8c04293` | ✅ |
| 5 | `f31-contact` | `2d51c1358d982d4eec52a9ffdeba35ff87510d1c` | ✅ |
| 6 | `f31-thinking` | `0e2da09aa2c2ef02b8a953e9f5a881cc10b16fbd` | ✅ |
| 7 | `f33-case-mold` | `91f3f703c185caa03374619f34a478037862f1e6` | ✅ |
| 8 | `f27-mike` | `985f7d79beaf892b8e2b13c28b6de591c85fca2c` | ✅ |
| 9 | `f27-jose` | `82231e48482043b945a78c17702997ebadb642ae` | ✅ |
| 10 | `f27-girish` | `458d551577b381a21eeee8eb350ebf6e8c1fc658` | ✅ |
| 11 | `f29-jack` | `9bc735b2a8e3857652d27ec38d9ca2e53d3bf054` | ✅ |

`origin/main` HEAD final: `9bc735b`.

---

## Conflictos y resolución

### Merge 3 · `f31-services` · 1 conflicto

**`app/services/page.tsx`** · sección de cierre.

- **HEAD (main con f28-proof mergeada previamente):**
  ```
  {/* 07 · F28 §2 · MIKE PROOF · mismo componente que la prueba de Karen en la home. */}
  <MikeProofBlock />
  {/* 08 · START HERE · F23-5 · con "Book the call →". */}
  ```
- **f31-services** (rama pre-F28):
  ```
  {/* 06 · START HERE · F23-5 */}
  ```

**Regla aplicada:** "no cambies nada que su brief no mencione". F31-services solo cambia el body de Translated y saca WHO IT IS NOT FOR; nunca menciona MikeProofBlock (es de F28).

**Resolución:** conservé el bloque MikeProofBlock (que vino de f28-proof) y mantuve la numeración 07/08. El bloque 06 en la rama entrante fue redundante (la seccion StartHere quedó como 08).

### Merge 11 · `f29-jack` · 2 conflictos

**`app/services/page.tsx`** y **`src/components/home/HomeKarenProof.tsx`**.

Origen del conflicto: `f29-jack` fue rebasado a lo largo de la sesión sobre f27-girish → f28-proof → f33-case-mold. En ese trayecto quedó cargando versiones anteriores de esos dos archivos (con `w.metricGroups?.reach?.[0]` que fallaba en Vercel), previas al fix `9b8e355` de f28-proof que introduce `KAREN_PROOF_CELLS` en `src/data/proof-karen.ts`.

- **HEAD:** ambos archivos con el fix (`KAREN_PROOF_CELLS` en HomeKarenProof, `MIKE_PROOF_CELLS` en MikeProofBlock).
- **f29-jack:** versión vieja con `w.metricGroups?.reach?.[0]` (que en main no existía en el tipo cuando esa rama se cortó de f28-proof).

**Regla aplicada:** el brief de F29 solo menciona la nueva página `/work/jack-yeager` y la card de Jack en la home. No menciona HomeKarenProof ni /services.

**Resolución:** `git checkout --ours` en los dos archivos (mantengo main). Del lado de f29-jack solo tomé `src/content/work/jack-yeager.ts` que es lo único que su brief cubre.

---

## Ramas que no se mergearon (y por qué)

- **`f26-case-karen`** · `b98e9d7` · **NO mergeada por separado**. Su contenido está totalmente incluido en el merge de `f33-case-mold` (que se creó encima de f26 y le agregó el overhaul Pentagram). Mergear f26 después de f33 sería redundante y podría revertir cambios de F33.

- **F30 (INOUT)** y **F32 (Confidential + /about)** · no construidas todavía. Van en una próxima sesión, directo sobre el molde F33 que ya está en main.

---

## Rollback · comandos exactos

Para revertir cualquier merge individual (sin afectar los otros), corré uno de estos en `main` con working tree limpio:

```bash
# Rollback f25-fixes
git revert -m 1 10db8b0

# Rollback f28-proof
git revert -m 1 451e880

# Rollback f31-services
git revert -m 1 fd78fef

# Rollback f31-home
git revert -m 1 f166ce9

# Rollback f31-contact
git revert -m 1 2d51c13

# Rollback f31-thinking
git revert -m 1 0e2da09

# Rollback f33-case-mold (incluye f26)
git revert -m 1 91f3f70

# Rollback f27-mike
git revert -m 1 985f7d7

# Rollback f27-jose
git revert -m 1 82231e4

# Rollback f27-girish
git revert -m 1 458d551

# Rollback f29-jack
git revert -m 1 9bc735b
```

Después de cualquier revert:
```bash
npm run build
git push origin main
```

Notas sobre rollbacks encadenados:
- Rollback de F33 mientras F27 y F29 están en main puede dejar los data files de Mike/José/Girish/Jack apuntando a un molde que ya no existe. Si necesitás rollback de F33, hace sentido revertir también F27-mike/jose/girish y F29-jack en orden inverso, o rollback simultáneo.
- Rollback de f28-proof mientras f31-services está mergeada no rompe nada — MikeProofBlock desaparece de /services pero el resto de la página sigue funcionando.
- Rollback de f31-contact mientras la variable de entorno `NEXT_PUBLIC_CALENDLY_URL` está en Vercel es inocuo — vuelve a la versión con filtro de 5 preguntas.

---

## Notas operativas post-merge

1. **Vercel** debería redeployar automáticamente `main` después de cada push. Confirmar que thecruda.com refleja los cambios.
2. **`NEXT_PUBLIC_CALENDLY_URL`** hay que cargarla en Vercel (Production + Preview) para que /contact muestre el embed en vez del link mailto de fallback. La rama f31-contact ya está mergeada, no rompe si la variable no está.
3. **Assets faltantes** (documentados en `docs/F33-session-summary.md` §C) siguen faltando — cuando existan, aparecen automáticamente en las páginas correspondientes gracias al filtro `publicFileExists` de F26 §E.6.
