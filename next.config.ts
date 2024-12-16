import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  //----------------------------------- IMAGE --------------------------------------------------
  // the image configuration if don't input this code it won't work on browser
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**", // Barcha pathlarni qabul qilish uchun
      },
    ],
  },
  //-------------------------------------------------------------------------------------
};

export default nextConfig;
