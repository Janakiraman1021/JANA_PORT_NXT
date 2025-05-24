/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'jr-portfolio-gilt.vercel.app',
      'images.unsplash.com',
      'port-backend-onv7.onrender.com'
    ],
  },
}

export default nextConfig
