/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  async rewrites() {
    return [
      { source: '/favicon.png', destination: '/images/Favicon512.png' },
      { source: '/favicon.ico', destination: '/images/Favicon512.png' },
    ]
  },
}

module.exports = nextConfig
