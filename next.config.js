/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'], // Adicione aqui os domínios de imagens que você usa
  },
}

module.exports = nextConfig 