const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssModules: false,
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            quality: 85
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'image-webpack-loader',
        // Specify enforce: 'pre' to apply the loader
        // and not duplicate it in rules with them
        enforce: 'pre'
      }
    )
    return config
  }
})
