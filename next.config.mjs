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
  // 301: /work → /clients (Etapa 1 AEO)
  async redirects() {
    return [
      {
        source: '/work',
        destination: '/clients',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
