import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export (next/image optimization is server-side)
  },
};

export default nextConfig;
