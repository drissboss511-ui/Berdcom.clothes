/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'scontent.cdninstagram.com'],
    unoptimized: true
  },
  reactStrictMode: true,
}

module.exports = nextConfig
