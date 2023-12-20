/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://blog-mageshkannan.vercel.app/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://blog-mageshkannan.vercel.app/blog/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
