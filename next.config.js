const withCSS = require('@zeit/next-css');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  cssModules: false,
  webpack: (config) => {
    if (config.mode === 'production') {
      if (Array.isArray(config.optimization.minimizer)) {
        config.optimization.minimizer.push(
          new OptimizeCSSAssetsPlugin()
        )
      }
    }
    return config
  }
}

module.exports = withPlugins([
  [withImages],
  [withCSS],
], nextConfig);
