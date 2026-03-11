const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: false,
  transpilePackages: [
    'three',
    '@thatopen/components',
    '@thatopen/components-front',
    '@thatopen/fragments',
  ],
  webpack: (config) => {
    // Allow webpack/Terser to correctly handle ESM .mjs files from packages
    // like @thatopen/fragments that ship worker files with import/export syntax.
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });
    return config;
  },
};

module.exports = withMDX(nextConfig);
