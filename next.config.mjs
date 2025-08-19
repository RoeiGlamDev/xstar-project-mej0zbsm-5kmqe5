

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add your image domain here
  },
  webpack(config) {

    return config
  },
  experimental: {
    modern: true
}
}
export default nextConfig;