import type { NextConfig } from "next";

// Konsolidert config (tidligere delt mellom next.config.ts og .mjs – Next bruker
// bare én fil, så images-/turbopack-config kunne bli ignorert).
const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "realtyflow.chatgenius.pro" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "zenecohomes.com",
          },
        ],
        destination: "https://www.zenecohomes.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
