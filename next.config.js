/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/base',
  experimental: {
    appDir: true,
    serverActions: true,
  },
}

module.exports = nextConfig
