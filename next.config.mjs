/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname: "i.pinimg.com",
      },
    ],
  },
};

export default nextConfig;