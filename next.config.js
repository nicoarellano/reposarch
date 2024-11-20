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
  transpilePackages: ['three'],
};

const withTM = require('next-transpile-modules')(['three']);
module.exports = withTM();

module.exports = withMDX(nextConfig);
