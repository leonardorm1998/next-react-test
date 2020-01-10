const withCSS = require('@zeit/next-css');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = withCSS({
  cssModules: false,
  webpack: (config) => {
    if (config.mode === 'production') {
      if (Array.isArray(config.optimization.minimizer)) {
        config.optimization.minimizer.push(
          new OptimizeCSSAssetsPlugin({})
        )
      }
    }
    config.module.rules.push(
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      }
    )
    return config
  }
})
