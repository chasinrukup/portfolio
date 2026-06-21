import type { NextConfig } from "next";
import path from "node:path";

const config: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    qualities: [75, 85, 88, 90],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
};

export default config;
