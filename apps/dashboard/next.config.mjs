/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/dashboard',
  trailingSlash: true,
  transpilePackages: ["@repo/ui"],
};

export default nextConfig;
