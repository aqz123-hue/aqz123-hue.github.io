import type { NextConfig } from 'next';

// GitHub Pages only serves files, so generate a self-contained static site.
// The repository name becomes part of the public Pages URL.
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGitHubPagesBuild ? '/cixi-midautumn-roadtrip' : undefined,
};

export default nextConfig;
