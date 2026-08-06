import { generateLlmsTxt } from '@/lib/llms-txt'

/* Brief v12 T5 — /llms.txt.
   Generado desde allResources; nada hardcoded. Se re-emite en cada
   build cuando entra contenido nuevo. */

export const dynamic = 'force-static'

export function GET() {
  return new Response(generateLlmsTxt(), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
