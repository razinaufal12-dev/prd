import type { NextConfig } from 'next';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const isUserPagesRepo = repoName.endsWith('.github.io');
const basePath =
  isGitHubPages && repoName && !isUserPagesRepo ? `/${repoName}` : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: false,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
