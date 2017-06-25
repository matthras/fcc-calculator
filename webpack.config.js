const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: ['./calculator.js', './calculator.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "calculator.js",
    publicPath: '/'
  },
  module: {
    rules: [
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    },
    {
      test: /\.html$/,
      loader: 'html-loader'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['babel-preset-es2015'].map(require.resolve)
      }
    }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({
      filename:'./calculator.css',
    }),
    new HtmlWebpackPlugin({
      title: 'FreeCodeCamp Calculator',
      filename: 'calculator.html',
      template: 'calculator.html',
      minify: {removeComments: true, collapseWhitespace: true, collapseInlingTagWhitespace: true}
    }),
    new OptimizeCssAssetsPlugin()
  ]
}