/** @type {import('next').NextConfig} */

const nextConfig = {
  devIndicators: {
    buildActivityPosition: 'bottom-left',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'emmerce.duckdns.org',
      },
      {
        protocol: 'https',
        hostname: 'emmerce-bucket.s3.ap-northeast-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '*.elandrs.com',
      },
      {
        protocol: 'https',
        hostname: 'blskorea.hgodo.com',
      },
      {
        protocol: 'https',
        hostname: '*.coupangcdn.com',
      },
    ],
  },
};

module.exports = nextConfig;
