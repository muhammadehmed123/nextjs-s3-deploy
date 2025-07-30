/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ required for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
