const withCSS = require('@zeit/next-css');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const withImages = require('next-images')
const withOffline = require('next-offline')
const withPlugins = require('next-compose-plugins');
const path = require('path');

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
  [withOffline, {
    generateSw: false,
    workboxOpts: {
      swSrc: path.join(__dirname, 'service-worker.js'),
      importWorkboxFrom: 'local'
    }
  }],
], nextConfig);
