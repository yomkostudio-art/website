import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = ""; // No prefix for custom domain

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
