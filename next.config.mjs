/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

// 날짜 포맷을 YY.DD.MM 형식으로 변경
const buildDate = (() => {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2); // 마지막 두 자리 연도
  const day = String(date.getDate()).padStart(2, '0'); // 일자를 두 자리로 맞춤
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월을 두 자리로 맞춤 (월은 0부터 시작하므로 +1)
  return `${year}.${day}.${month}`;
})();

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
  env: {
    NEXT_PUBLIC_BUILD_DATE: buildDate,
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
