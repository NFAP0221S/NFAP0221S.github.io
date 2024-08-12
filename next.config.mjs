/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "",
  assetPrefix: isProd ? "/" : "",
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
