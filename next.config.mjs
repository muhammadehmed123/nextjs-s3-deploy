/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // ✅ Required
  images: {
    unoptimized: true,        // ✅ For S3 compatibility
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
