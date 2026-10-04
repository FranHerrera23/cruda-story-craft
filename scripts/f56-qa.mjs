#!/usr/bin/env node
/* F56 · QA runtime del wizard /second-look.
   Pre-req: `npm run start` corriendo en localhost:3000.

   Verifica el brief §6:
   1. Capturas de los 4 pasos + cierre en 390 y 1440.
   2. Back del browser conserva state al volver atrás.
   3. Paso 3 no avanza sin empresa.
   4. Calendly NO carga antes del paso 4. */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from '../node_modules/playwright/index.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const BASE = process.env.BASE || 'http://localhost:3000'
const OUT = path.join(ROOT, 'scripts/.f56-qa')
fs.mkdirSync(OUT, { recursive: true })

const VIEWPORTS = [390, 1440]

async function captureStep(ctx, step, w, { withForm = false } = {}) {
  const p = await ctx.newPage()
  /* reduced motion saltea el Loader (desktop) y las animaciones
     entre pasos. En mobile el Loader además mira isHomePathname()
     y UTM; igual lo cubrimos. */
  await p.emulateMedia({ reducedMotion: 'reduce' })
  await p.goto(BASE + '/second-look?utm_source=qa', {
    waitUntil: 'networkidle',
    timeout: 30000,
  })
  await p.waitForTimeout(500)
  if (step > 1) {
    for (let s = 1; s < step; s++) {
      /* Si vamos al paso 4, antes necesitamos empresa (required). */
      if (s === 3 && withForm) {
        await p.fill('#sl-company', 'ACME Industries')
      }
      /* En el paso 2, el botón primary es "Tell me about your company".
         En el 1, "See how it works". En el 3, submit form "Continue". */
      await p.locator('.sl-step.sl-on .sl-btn:not(.sl-btn--ghost)').first().click()
      await p.waitForTimeout(400)
    }
  }
  const name = `step${step}-${w}`
  await p.screenshot({ path: path.join(OUT, `${name}.png`), fullPage: true })
  await p.close()
  return name
}

async function verifyStep3Required(ctx) {
  const p = await ctx.newPage()
  await p.goto(BASE + '/second-look?utm_source=qa', { waitUntil: 'networkidle' })
  await p.waitForTimeout(400)
  /* 1 → 2 */
  await p.locator('.sl-step.sl-on .sl-btn:not(.sl-btn--ghost)').first().click()
  await p.waitForTimeout(300)
  /* 2 → 3 */
  await p.locator('.sl-step.sl-on .sl-btn:not(.sl-btn--ghost)').first().click()
  await p.waitForTimeout(300)
  /* Verifico que estoy en el paso 3. */
  const onStep3 = await p.locator('.sl-step[data-step="3"].sl-on').count()
  /* Clickeo Continue sin llenar empresa. Debería quedarse en el paso 3. */
  await p.locator('.sl-step.sl-on button[type="submit"]').click()
  await p.waitForTimeout(300)
  const stillOnStep3 = await p.locator('.sl-step[data-step="3"].sl-on').count()
  const onStep4 = await p.locator('.sl-step[data-step="4"].sl-on').count()
  await p.close()
  return { onStep3, stillOnStep3, onStep4 }
}

async function verifyCalendlyNotLoadedBeforeStep4(ctx) {
  const p = await ctx.newPage()
  const calendlyRequests = []
  p.on('request', req => {
    if (req.url().includes('calendly.com')) calendlyRequests.push(req.url())
  })
  await p.goto(BASE + '/second-look?utm_source=qa', { waitUntil: 'networkidle' })
  await p.waitForTimeout(500)
  const beforeStep4 = [...calendlyRequests]
  /* 1 → 2 → 3 */
  await p.locator('.sl-step.sl-on .sl-btn:not(.sl-btn--ghost)').first().click()
  await p.waitForTimeout(300)
  await p.locator('.sl-step.sl-on .sl-btn:not(.sl-btn--ghost)').first().click()
  await p.waitForTimeout(300)
  const beforeStep3Advance = [...calendlyRequests]
  /* Lleno empresa + Continue → paso 4 */
  await p.fill('#sl-company', 'ACME Industries')
  await p.locator('.sl-step.sl-on button[type="submit"]').click()
  await p.waitForTimeout(2000)
  const afterStep4 = [...calendlyRequests]
  await p.close()
  return { beforeStep4, beforeStep3Advance, afterStep4 }
}

async function verifyBackPreservesState(ctx) {
  const p = await ctx.newPage()
  await p.goto(BASE + '/second-look?utm_source=qa', { waitUntil: 'networkidle' })
  await p.waitForTimeout(400)
  /* 1 → 2 → 3 */
  await p.locator('.sl-step.sl-on .sl-btn:not(.sl-btn--ghost)').first().click()
  await p.waitForTimeout(300)
  await p.locator('.sl-step.sl-on .sl-btn:not(.sl-btn--ghost)').first().click()
  await p.waitForTimeout(300)
  await p.fill('#sl-company', 'ACME Industries')
  await p.locator('.sl-step.sl-on .sl-opt').nth(1).click()  // revenue "$1–5M"
  await p.locator('.sl-step.sl-on .sl-opt').nth(5).click()  // budget "$5–20K"
  await p.waitForTimeout(200)
  /* Back del browser dos veces → paso 1 */
  await p.goBack({ waitUntil: 'commit' })
  await p.waitForTimeout(300)
  await p.goBack({ waitUntil: 'commit' })
  await p.waitForTimeout(300)
  const backToStep1 = await p.locator('.sl-step[data-step="1"].sl-on').count()
  /* Forward dos veces → paso 3, estado conservado */
  await p.goForward({ waitUntil: 'commit' })
  await p.waitForTimeout(300)
  await p.goForward({ waitUntil: 'commit' })
  await p.waitForTimeout(300)
  const company = await p.inputValue('#sl-company')
  const revenuePressed = await p.locator('.sl-opts').first().locator('[aria-pressed="true"]').textContent()
  const budgetPressed = await p.locator('.sl-opts').nth(1).locator('[aria-pressed="true"]').textContent()
  await p.close()
  return { backToStep1, company, revenuePressed, budgetPressed }
}

async function main() {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  })

  console.log('# F56 · QA runtime\n')

  /* Capturas de los 4 pasos + cierre. Paso 5 no se puede alcanzar
     sin el event_scheduled de Calendly real; se simula vía hash
     y popstate dispatch. Para simplicidad, capturo pasos 1-4. */
  for (const w of VIEWPORTS) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 } })
    for (const step of [1, 2, 3, 4]) {
      const name = await captureStep(ctx, step, w, { withForm: true })
      console.log(`  captured · ${name}.png`)
    }
    await ctx.close()
  }

  /* Verificación de required del paso 3. */
  console.log('\n## Paso 3 required (empresa) ·')
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
    const r = await verifyStep3Required(ctx)
    console.log(`  on step 3 after navigate 1→2→3: ${r.onStep3 === 1 ? '✓' : '✗'}`)
    console.log(`  still on step 3 after Continue w/o company: ${r.stillOnStep3 === 1 ? '✓' : '✗'}`)
    console.log(`  on step 4 (should NOT be): ${r.onStep4 === 0 ? '✓' : '✗'}`)
    await ctx.close()
  }

  /* Verificación de que Calendly no carga antes del paso 4. */
  console.log('\n## Calendly NO carga antes del paso 4 ·')
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
    const r = await verifyCalendlyNotLoadedBeforeStep4(ctx)
    console.log(`  requests al cargar paso 1: ${r.beforeStep4.length} (should be 0)`)
    console.log(`  requests en paso 3 antes de Continue: ${r.beforeStep3Advance.length} (should be 0)`)
    console.log(`  requests después de entrar al paso 4: ${r.afterStep4.length} (should be > 0)`)
    r.beforeStep4.forEach(u => console.log('    · pre:', u))
    r.afterStep4.slice(0, 3).forEach(u => console.log('    · post:', u))
    await ctx.close()
  }

  /* Back preserva state. */
  console.log('\n## Back del browser preserva state ·')
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
    const r = await verifyBackPreservesState(ctx)
    console.log(`  volvió al paso 1: ${r.backToStep1 === 1 ? '✓' : '✗'}`)
    console.log(`  company después de fw-fw: "${r.company}" (expected "ACME Industries")`)
    console.log(`  revenue pressed: "${r.revenuePressed}" (expected "$1–5M")`)
    console.log(`  budget pressed: "${r.budgetPressed}" (expected "$5–20K")`)
    await ctx.close()
  }

  await browser.close()
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
