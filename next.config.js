/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  },
  nextConfig,
};
