import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // TV wall mounting was dropped (handyman work, not electrical).
      { source: "/services/tv-installation", destination: "/services", permanent: true },
      { source: "/:lang(ms|zh)/services/tv-installation", destination: "/:lang/services", permanent: true },
    ];
  },
};

export default nextConfig;
