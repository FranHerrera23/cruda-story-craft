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
        destination: '/clients',
        permanent: true,
      },
      {
        // Etapa 3: /about is now the A&D vertical about
        source: '/about',
        destination: '/architecture-design/about',
        permanent: true,
      },
      {
        // Brief v5 T7: /thinking (index) → /resources (biblioteca)
        source: '/thinking',
        destination: '/resources',
        permanent: true,
      },
      // Nota: /thinking/[slug] queda vivo — el URL canonical de cada
      // ensayo no cambia para no romper backlinks. Cuando migren a
      // /resources/[slug] se agrega el 301 de cada slug.
    ]
  },
};

export default nextConfig;
