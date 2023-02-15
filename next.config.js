/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  reactStrictMode: true,
  images: {
    deviceSizes: [380, 480, 576, 680, 768, 992, 1280, 1440],
    imageSizes: [48, 56, 64, 80, 96, 128, 256, 384]
  }
}

module.exports = nextConfig
