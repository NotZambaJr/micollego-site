// import type { NextConfig } from "next";
// const nextConfig: NextConfig = {
//   output: 'export',
//   distDir: 'build',
//   images: {
//     unoptimized: true,
//   }
// };
// export default nextConfig;

import withExportImages from 'next-export-optimize-images';
import type { NextConfig } from "next";

export default {
  output: 'export',
  distDir: 'build',
  plugins: [
    withExportImages(),
  ]
} as NextConfig;