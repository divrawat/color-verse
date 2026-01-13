/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  eslint: {
    // Disable ESLint during builds to prevent deployment issues
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
