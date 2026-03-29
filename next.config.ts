import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.wheelchairindia.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
