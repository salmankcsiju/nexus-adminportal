import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* @ts-ignore - allowedDevOrigins is required for local network HMR in some environments */
  allowedDevOrigins: ['10.19.33.42', 'localhost:3000'],
};

export default nextConfig;
