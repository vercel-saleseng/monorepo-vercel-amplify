/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/dashboard',
  trailingSlash: true,
  transpilePackages: ["@repo/ui"],
};

export default nextConfig;
