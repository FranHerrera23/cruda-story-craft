import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/* Brief v2 Task 4 — 410 Gone para rutas retiradas.

   /sports y /systems se retiran del sitio. En vez de 404 (que Google
   interpreta como "page is temporarily missing") o 301 (que consolida
   authority hacia otra URL, cosa que no queremos acá), respondemos
   410 Gone — es la señal explícita "esta URL fue eliminada
   intencionalmente y no va a volver". Search Console la de-indexa
   rápido.

   /systems eventualmente vuelve como sección dentro de /approach; el
   día que vuelva, esta regla se remueve.

   /sports queda apagada por tiempo indefinido.

   Next.js App Router no permite setear el status code de un page.tsx
   directamente. Middleware es la vía correcta — corre en Edge Runtime,
   antes del renderer, y devuelve la respuesta con el status que
   queramos. */

const GONE_ROUTES = ['/sports', '/systems']

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  for (const gone of GONE_ROUTES) {
    if (pathname === gone || pathname.startsWith(`${gone}/`)) {
      return new NextResponse(
        `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Gone — CRUDA</title><meta name="robots" content="noindex"><meta http-equiv="cache-control" content="no-store"></head><body><h1>Gone.</h1><p>This page has been retired. <a href="/">Return home.</a></p></body></html>`,
        {
          status: 410,
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'X-Robots-Tag': 'noindex',
          },
        },
      )
    }
  }
  return NextResponse.next()
}

/* Matcher: solo corre para las rutas relevantes. Evita costo edge
   por cada request. */
export const config = {
  matcher: ['/sports', '/sports/:path*', '/systems', '/systems/:path*'],
}
