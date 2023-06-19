/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hoopshype.com',
        port: '',
        pathname: '/wp-content/uploads/sites/**',
      },
    ],
  },
}