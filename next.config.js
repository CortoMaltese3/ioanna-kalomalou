/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'ioanna-kalomalou';

const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sumitdey.netlify.app',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
