import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    dynamicIO: false,
    useCache: true,
  
    
  },
}

export default nextConfig;
