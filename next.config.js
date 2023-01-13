/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
}

module.exports = nextConfig
