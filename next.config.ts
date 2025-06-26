import type { NextConfig } from "next";

const repoName = 'test-vibe';

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? `/${repoName}` : '';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: basePath,
  assetPrefix: isProd ? `/${repoName}/` : undefined,
  images: {
    unoptimized: true,
  },
  env: {
    BASE_PATH: basePath,
  },
};

export default nextConfig;
