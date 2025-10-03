/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "ioanna-kalomalou";

const nextConfig = {
  ...(isProd ? { output: "export" } : {}), // only export in production
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
