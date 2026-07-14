/** @type {import('next').NextConfig} */

// When deploying to GitHub Pages as a PROJECT site (username.github.io/reachy),
// GitHub serves the site from a sub-path. Set REPO_NAME to your repo name and
// this will automatically configure the base path for you at build time.
// Leave REPO_NAME empty if you deploy to a USER/ORG page (username.github.io)
// or to a custom domain — in those cases the site lives at the root "/".
const REPO_NAME = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: REPO_NAME,
  assetPrefix: REPO_NAME,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: REPO_NAME,
  },
};

export default nextConfig;
