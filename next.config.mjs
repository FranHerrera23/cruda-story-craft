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
        destination: '/our-founder',
        permanent: true,
      },
      {
        source: '/architecture-design/:path*',
        destination: '/work',
        permanent: true,
      },

      // ============ Essays → /essays/{slug} (D3) ============
      // /thinking/* iba a /resources/essays. Sin cadenas — directo a /essays.
      {
        source: '/thinking',
        destination: '/essays',
        permanent: true,
      },
      {
        source: '/thinking/:slug',
        destination: '/essays/:slug',
        permanent: true,
      },
      {
        source: '/resources/essays',
        destination: '/essays',
        permanent: true,
      },
      {
        source: '/resources/essays/:slug',
        destination: '/essays/:slug',
        permanent: true,
      },

      // ============ Resources hub retirado (D3) ============
      // El hub /resources se colapsa. La ruta apunta a /work — un buyer
      // que llega desde un link viejo debería ver el work, no un hub.
      {
        source: '/resources',
        destination: '/work',
        permanent: true,
      },

      // ============ About → /our-founder (D2) ============
      {
        source: '/about',
        destination: '/our-founder',
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
    ]
  },
};

export default nextConfig;
