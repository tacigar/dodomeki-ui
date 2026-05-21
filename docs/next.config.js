/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@dodomeki-ui/core', '@dodomeki-ui/theme'],
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
