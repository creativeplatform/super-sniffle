/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: false,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: 'cloudinary',
    path: "cloudinary://417721411368189:QiVZ8fJOoGbCEOeW1X8yukfrqs0@dyangxc7h"
  },
}

module.exports = nextConfig
