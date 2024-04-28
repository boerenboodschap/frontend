/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  images: {
    domains: [
      "images.unsplash.com",
      "source.unsplash.com",
      process.env.BACKEND_IP,
    ],
  },
};

module.exports = nextConfig;
