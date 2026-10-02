#!/usr/bin/env node
/* F56 · og:image de /second-look · 1200×630 JPG.
   Spec (brief §3): fondo negro, raya naranja 40×2 arriba a la
   izquierda, abajo a la izquierda la frase del h1 del paso 1 en
   crema, con la tipografía del sitio (Archivo).

   Técnica: Playwright carga un HTML inline con Archivo desde
   Google Fonts, screenshot JPEG a /public/second-look-og.jpg.
   Idempotente: borra el output viejo antes de generar.

   Uso: `node scripts/f56-og-image.mjs`. No requiere build previo. */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from '../node_modules/playwright/index.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'public/second-look-og.jpg')

/* Spec exacto del brief · copy verbatim. */
const H1 = "You've looked at your company from the inside for years."
const BG = '#000000'
const ORANGE = '#FF5A00'
const CREAM = '#EFEBDF'

const HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600&display=swap" rel="stylesheet">
<style>
  html, body { margin: 0; padding: 0; }
  body {
    width: 1200px;
    height: 630px;
    background: ${BG};
    font-family: 'Archivo', 'Helvetica Neue', Arial, sans-serif;
    position: relative;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
  }
  .stripe {
    position: absolute;
    top: 64px;
    left: 64px;
    width: 40px;
    height: 2px;
    background: ${ORANGE};
  }
  .headline {
    position: absolute;
    left: 64px;
    bottom: 64px;
    max-width: 1000px;
    color: ${CREAM};
    font-size: 56px;
    font-weight: 600;
    letter-spacing: -0.03em;
    line-height: 1.06;
    margin: 0;
  }
</style>
</head>
<body>
  <div class="stripe" aria-hidden="true"></div>
  <h1 class="headline">${H1}</h1>
</body>
</html>`

async function main() {
  if (fs.existsSync(OUT)) fs.unlinkSync(OUT)

  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  })
  const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 } })
  const page = await ctx.newPage()
  await page.setContent(HTML, { waitUntil: 'networkidle' })
  /* Pequeño wait para asegurar que la fuente custom se aplicó. */
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
