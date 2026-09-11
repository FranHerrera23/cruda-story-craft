# /home hero — v1 · orphaned

**Source SHA:** `2a56e723` (parent of the hero replacement commit).
**Source file:** `app/page.tsx` lines 42–88 (JSX) + `app/home.css` (styles).
**Retired in:** Home brief 10-sep §2. El hero de v7 se reemplaza por una
sola línea de spec nuevo. El CSS de `.cruda-home-root`, `.shell`, `.mid`,
`.manifesto`, `.line-1`, `.line-2`, `.lower`, `.say`, `.say-you`,
`.principles`, `.cta`, `.cta-arrow`, `.etym` y variantes también se retira
con este commit.

Preservado verbatim per el mismo patrón que el team block y `/systems`:
esto es un hold para reciclar en `/approach` en otro trabajo, no una
fuente activa. Nada acá se edita, nada se publica sin decisión explícita.

---

## Estructura

```
Cruda · raw, in Spanish
Find the essence.
Strip the bullshit.

The work is good. Outside your circle, nobody finds out.

We find stories · No urgency · Raw over polished

[Start a conversation →]
```

## Copy verbatim

**Etym label (mono, `.etym` + `.etym-raw`):**

> Cruda · raw, in Spanish

**H1 (`.manifesto.display`, dos spans `.line-1` / `.line-2`):**

> Find the essence.
> Strip the bullshit.

**Say block (`.lower .say`):**

> The work is good. Outside your circle, nobody finds out.

*Nota histórica:* este string es un reemplazo interino (A.3.2) del anterior
"Nobody buys the company. They buy you." — retirado por decisión de Fran
porque nombra una categoría que no está cerrada. Cuando corra el bloque 1
de home v2 en Phase C se reemplaza entero.

**Principles line (mono):**

> We find stories · No urgency · Raw over polished

**CTA (link a `/contact`, con flecha):**

> Start a conversation →

## Reglas de la copy retirada

- El H1 va en dos líneas duras (`<span class="line-1">` / `.line-2`),
  no en una sola. La segunda debe leerse como respuesta a la primera.
- El "you" del say-block anterior tenía subrayado en `--color-accent`
  vía `.say-you`. Esa clase se cae con la copy — no hay palabra a
  destacar en la interina.
- Los principles son tres, separados por punto medio ancho (` · `), en
  mayúsculas via el mono uppercase del sistema.
- El CTA en la home era el ÚNICO botón de la página. La flecha va
  aparte en `.cta-arrow` con `aria-hidden`.

## Reglas heredadas del brief v7 (para reciclado)

- Un solo protagonista: el titular. Todo lo demás claramente subordinado.
- La zona inferior es un bloque tranquilo con un solo punto de color.
- Copy locked — nada se toca sin decisión editorial.
