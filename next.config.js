/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreDuringBuilds: true,
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
