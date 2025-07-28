/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Add experimental config if needed
  experimental: {
    // Add any experimental features here
  }
};

console.log('Next.js Config:', JSON.stringify(nextConfig, null, 2));
module.exports = nextConfig;
