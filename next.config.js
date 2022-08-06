/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: async function (
  ) {
    return {
      '/': { page: '/' },
    }
  }
}

module.exports = nextConfig
