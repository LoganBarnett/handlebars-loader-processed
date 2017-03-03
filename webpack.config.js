const path = require('path')
const pkg = require('./package.json')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // context: __dirname,
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.handlebars$/,
        use: [
          {
            loader: 'handlebars-loader',
            options: {
              runtime: 'handlebars/runtime',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.handlebars',
      filename: 'index.html',
      version: pkg.version,
    }),
  ],
}
