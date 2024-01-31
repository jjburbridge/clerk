const webpack = require("webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^next\/(navigation|headers|compat\/router)$/,
      }),
    );
    return config;
  },
}

module.exports = nextConfig
