/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env.WORDPRESS_URL,
      },
    ],
  },
}

module.exports = nextConfig
