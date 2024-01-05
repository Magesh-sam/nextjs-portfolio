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
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
        port: "",
        pathname: "/*/**",
      },
    ],
  },
};

module.exports = nextConfig;
