import type { NextConfig } from "next";
import { site } from "./src/lib/site";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // One canonical host for search engines: www.mypowercarekl.com/... -> mypowercarekl.com/...
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${site.domain}` }],
        destination: `https://${site.domain}/:path*`,
        permanent: true,
      },
      // TV wall mounting was dropped (handyman work, not electrical).
      { source: "/services/tv-installation", destination: "/services", permanent: true },
      { source: "/:lang(ms|zh)/services/tv-installation", destination: "/:lang/services", permanent: true },
    ];
  },
};

export default nextConfig;
