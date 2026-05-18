import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/thanks-for-request",
        destination: "/thank-you",
        permanent: true,
      },
      {
        source: "/thanks-for-request/",
        destination: "/thank-you",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
