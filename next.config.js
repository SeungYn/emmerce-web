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
        hostname: '*.elandmall.com',
      },
      {
        protocol: 'https',
        hostname: '*.esmplus.com',
      },
      {
        protocol: 'https',
        hostname: '*.partnerbk.com',
      },
      {
        protocol: 'https',
        hostname: 'fit6.cre.ma',
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
