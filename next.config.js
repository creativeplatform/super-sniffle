/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "default",
    path: '',
  },
  exportPathMap: async function (
  ) {
    return {
      '/': { page: '/' },
    }
  }
}

module.exports = nextConfig
