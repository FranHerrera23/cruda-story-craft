/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Preserve existing environment variables
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  // Optimize for production
  swcMinify: true,
  // Support for Framer Motion and other animations
  transpilePackages: ['framer-motion'],
  /* Brief v2 — redirects.
     Regla dura: NO CHAINS. Cada URL vieja apunta DIRECTO a su canónica
     final, no a un intermediario que a su vez redirige. Y ningún
     internal link del sitio apunta a una URL que redirige.

     Task 4 nota importante: /sports y /systems no redirigen — devuelven
     410 Gone desde middleware.ts. Fuera del sitemap, fuera de la nav.
     Las viejas rutas /ai-concierge (que apuntaban a /systems) se eliminan
     también: quien tenga ese link ahora ve 404 (aceptable, la audiencia
     de esos 20 emails ya vio Systems durante 3 meses). */
  async redirects() {
    return [
      // ============ Case studies → /work/{slug} (Task 2 + Task 3) ============
      // /clients/* y /resources/case-studies/* iban a /resources/case-studies
      // (cadena). Ahora TODAS apuntan directo a /work.
      {
        source: '/clients',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/clients/:slug',
        destination: '/work/:slug',
        permanent: true,
      },
      {
        source: '/resources/case-studies',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/resources/case-studies/:slug',
        destination: '/work/:slug',
        permanent: true,
      },
      // /architecture-design deja de existir. → /work (Task 3).
      {
        source: '/architecture-design',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/architecture-design/about',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/architecture-design/:path*',
        destination: '/work',
        permanent: true,
      },

      // ============ Thinking · F14b.1 · 21-sep · autónomo ============
      // /thinking pasa a ser la página canónica (antes redirigía a
      // /essays). Se invierten los redirects: cualquier URL vieja
      // apunta directo a /thinking, sin cadenas.
      {
        source: '/essays',
        destination: '/thinking',
        permanent: true,
      },
      {
        source: '/essays/:slug',
        destination: '/thinking/:slug',
        permanent: true,
      },
      {
        source: '/resources/essays',
        destination: '/thinking',
        permanent: true,
      },
      {
        source: '/resources/essays/:slug',
        destination: '/thinking/:slug',
        permanent: true,
      },

      // ============ Resources hub retirado (D3) ============
      // El hub /resources se colapsa. Apunta DIRECTO al ancla de la
      // home. Antes iba a /work y /work a su vez redirige a
      // /#selected-work: cadena · viola la regla "NO CHAINS".
      // Fix Hallazgo #2 F16.0 (Fran, 21-sep).
      {
        source: '/resources',
        destination: '/#selected-work',
        permanent: true,
      },

      // ============ /our-founder → /about (Brief 02, 14-sep) ============
      // La página de empresa se muda a /about (canónica). /our-founder
      // era la URL vieja mientras la página tenía a Fran como sujeto.
      // Ahora la empresa es el sujeto, y la ruta lo refleja.
      {
        source: '/our-founder',
        destination: '/about',
        permanent: true,
      },

      // ============ /approach → /services/translated (F23-4) ============
      // /approach → /process apuntaba a la vieja página de proceso.
      // /process ahora es Translated (§5.1). Se saltea el intermediario
      // apuntando directo a la canónica final (regla NO CHAINS).
      {
        source: '/approach',
        destination: '/services/translated',
        permanent: true,
      },

      // ============ /process → /services/translated (F23-4 §5.1) ============
      // La vieja /process pasa a ser la página del plano Translated,
      // bajo /services/translated. Un salto directo.
      {
        source: '/process',
        destination: '/services/translated',
        permanent: true,
      },

      // ============ Legacy misc ============
      {
        // /book-call era un shell pre-v3 con copy vieja. /contact ya
        // embebe Calendly + email.
        source: '/book-call',
        destination: '/contact',
        permanent: true,
      },
      /* Slug rename del confidential (L5) — el descriptor es fashion,
         no retail. 308 permanente desde el slug viejo. Sin cadena:
         apunta directo al nuevo canónico. */
      {
        source: '/work/confidential-retail-founder',
        destination: '/work/confidential-fashion-founder',
        permanent: true,
      },
      /* Home · Selected Work (brief 10-sep §9 paso 4) — el índice
         /work con filtros se retira. Los nueve casos viven en la
         grilla de la home. /work permanent 308 al ancla. Las rutas
         hijas /work/[slug] siguen sirviendo cada caso. */
      {
        source: '/work',
        destination: '/#selected-work',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
