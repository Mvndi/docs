import nextra from 'nextra';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    if (config.cache && !dev) {
      config.cache = Object.freeze({
        type: 'memory',
      });
    }
    // Important: return the modified config
    return config;
  },
};

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

export default {
  ...withNextra(nextConfig),
  images: {
    unoptimized: true,
  },
};
