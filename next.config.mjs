/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <== THIS is required for static export in App Router
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
