/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  postcss: {
    postcssOptions: {
      plugins: {
        'postcss-import': {},
        'postcss-preset-env': {},
        'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
      },
    },
  },
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.ctfassets.net',
      port: '',
    },
  ],
  images: {
    domains: ['images.ctfassets.net'],
  },
}

module.exports = nextConfig
