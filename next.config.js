/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'emmerce.duckdns.org',
      },
    ],
  },
};

module.exports = nextConfig;
