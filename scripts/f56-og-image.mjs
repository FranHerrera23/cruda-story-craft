#!/usr/bin/env node
/* F56 · og:image de /second-look · 1200×630 JPG.
   Spec (brief §3): fondo negro, raya naranja 40×2 arriba a la
   izquierda, abajo a la izquierda la frase del h1 del paso 1 en
   crema, con la tipografía del sitio (Archivo via next/font).

   Técnica (Fran 3-oct, iteración v2): cargamos una página real
   del sitio (/second-look) para que next/font meta Archivo via
   su CSS variable --font-archivo, luego reemplazamos el DOM con
   el diseño del og manteniendo la variable scoped en <html>.
   Antes v1 cargaba Archivo desde Google Fonts CDN · podía diferir
   mínimamente del bundle del sitio.

   Pre-req: `npm run start` corriendo en localhost:3000.
   Idempotente: borra el output viejo antes de generar.

   Uso: `node scripts/f56-og-image.mjs`.

   Apóstrofe curvo (U+2019) en la frase · brief verbatim. */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from '../node_modules/playwright/index.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const BASE = process.env.BASE || 'http://localhost:3000'
const OUT = path.join(ROOT, 'public/second-look-og.jpg')

/* U+2019 curly right single quotation mark · verbatim brief. */
const H1 = 'You’ve looked at your company from the inside for years.'
const BG = '#000000'
const ORANGE = '#FF5A00'
const CREAM = '#EFEBDF'

const OG_HTML_FRAGMENT = `
<style>
  html, body { margin: 0; padding: 0; width: 1200px; height: 630px; }
  body {
    background: ${BG};
    font-family: var(--font-archivo), 'Helvetica Neue', Arial, sans-serif;
    position: relative;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
  }
  .f56og-stripe {
    position: absolute;
    top: 64px;
    left: 64px;
    width: 40px;
    height: 2px;
    background: ${ORANGE};
  }
  .f56og-h {
    position: absolute;
    left: 64px;
    bottom: 64px;
    max-width: 1000px;
    color: ${CREAM};
    /* Pisamos el h1 default del sitio (Instrument Serif via globals.css)
       con Archivo del sitio via next/font variable. */
    font-family: var(--font-archivo), 'Helvetica Neue', Arial, sans-serif;
    font-size: 56px;
    font-weight: 600;
    letter-spacing: -0.03em;
    line-height: 1.06;
    margin: 0;
  }
</style>
<div class="f56og-stripe" aria-hidden="true"></div>
<h1 class="f56og-h">${H1}</h1>
`

async function main() {
  if (fs.existsSync(OUT)) fs.unlinkSync(OUT)

  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  })
  const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 } })
  const page = await ctx.newPage()
  /* Cargamos cualquier página del sitio para que next/font aplique
     Archivo via --font-archivo en <html>. /second-look sirve. */
  await page.goto(BASE + '/second-look?utm_source=qa', {
    waitUntil: 'networkidle',
  })
  /* Reemplazamos el body con el fragmento del og. NO tocamos los
     stylesheets externos: ahí vive la definición de --font-archivo
     que next/font inyecta en html.className. Nuestro <style> del
     fragmento se agrega al body y pisa lo que necesite por
     especificidad / cascada. */
  await page.evaluate(fragment => {
    document.body.innerHTML = fragment
  }, OG_HTML_FRAGMENT)
  /* Dejamos que la fuente del sitio pinte · ya debería estar
     cacheada por el goto inicial, pero por si acaso un waitfor. */
  try {
    await page.evaluate(async () => {
      if ('fonts' in document && document.fonts.ready) {
        await document.fonts.ready
      }
    })
  } catch (_) {
    /* no-op */
  }
  await page.waitForTimeout(300)
  await page.screenshot({ path: OUT, type: 'jpeg', quality: 92, fullPage: false })
  await ctx.close()
  await browser.close()

  const bytes = fs.statSync(OUT).size
  console.log(`og:image written · ${OUT} · ${(bytes / 1024).toFixed(1)} KB`)
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
