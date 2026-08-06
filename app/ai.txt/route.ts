import { generateLlmsTxt } from '@/lib/llms-txt'

/* Brief v12 T5 — /ai.txt.
   Mismo contenido que /llms.txt. Duplicamos la ruta porque distintos
   crawlers buscan uno u otro; contenido único, dos direcciones. */

export const dynamic = 'force-static'

export function GET() {
  return new Response(generateLlmsTxt(), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
