/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Only use /portfolio for production (e.g. GitHub Pages); root path for local dev
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
