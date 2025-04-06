import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
      },
      {
        hostname: 'via.placeholder.com',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'upload.wikimedia.org',
      },
      {
        hostname: 'seeklogo.com',
      },
      {
        hostname: 'tailwindcss.com',
      },
      {
        hostname: 'www.gatsbyjs.com',
      },
      {
        hostname: 'remix.run',
      },
      {
        hostname: 'astro.build',
      },
    ],
  },
  eslint: {
    // Exclude test files from build-time linting
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Exclude test files from build-time type checking
    ignoreBuildErrors: false,
    // You might want to set this to true if TypeScript errors are only in test files
  },
};

export default nextConfig;