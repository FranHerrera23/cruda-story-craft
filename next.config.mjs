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
  // 301: legacy → new routes
  async redirects() {
    return [
      {
        // Etapa 1: Work → Clients (AEO case study system)
        source: '/work',
        destination: '/resources/case-studies',
        permanent: true,
      },
      {
        // Etapa 3: /about is now the A&D vertical about
        source: '/about',
        destination: '/architecture-design/about',
        permanent: true,
      },
      // Brief v4 UX §5 — todas las piezas viven bajo /resources/.
      // /thinking/* y /clients/* redirigen 301 a las canónicas nuevas.
      {
        source: '/thinking',
        destination: '/resources/essays',
        permanent: true,
      },
      {
        source: '/thinking/:slug',
        destination: '/resources/essays/:slug',
        permanent: true,
      },
      {
        source: '/clients',
        destination: '/resources/case-studies',
        permanent: true,
      },
      {
        source: '/clients/:slug',
        destination: '/resources/case-studies/:slug',
        permanent: true,
      },
      {
        // Cleanup post-v10: /book-call era un shell pre-v3 que abría
        // Calendly en new tab con copy vieja ("construction and
        // architecture leaders"). Redundante con /contact (que ya
        // embebe Calendly + email). Nada del sitio linkeaba a esto.
        source: '/book-call',
        destination: '/contact',
        permanent: true,
      },
      // Brief v12 T2 — canonical duplicados: /resources?format=X tenía
      // el mismo title y canonical que /resources. Ahora cada formato
      // vive en su ruta con metadata propia. Los query params quedan
      // como historial pero redirigen a la ruta canónica.
      {
        source: '/resources',
        has: [{ type: 'query', key: 'format', value: 'case-study' }],
        destination: '/resources/case-studies',
        permanent: true,
      },
      {
        source: '/resources',
        has: [{ type: 'query', key: 'format', value: 'essay' }],
        destination: '/resources/essays',
        permanent: true,
      },
      // Rebrand: la unidad se llama Systems. La URL vieja
      // /ai-concierge está en 20+ emails ya enviados a prospectos —
      // 301 obligatorio para no romper esos links.
      {
        source: '/ai-concierge',
        destination: '/systems',
        permanent: true,
      },
      {
        source: '/ai-concierge/:path*',
        destination: '/systems/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
