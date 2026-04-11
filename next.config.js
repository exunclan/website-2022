/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['img.youtube.com'],
    unoptimized: true,
  }
}

module.exports = nextConfig
