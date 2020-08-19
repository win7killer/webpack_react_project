const webpack = require('webpack');
const path = require('path');

const SrcDir = path.join(__dirname, 'src');
const DistDir = path.join(__dirname, 'dist');
module.exports = {
  stats: 'normal',
  devtool: 'eval-source-map',
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: DistDir,
    chunkFilename: '[name].chunk.js',
    publicPath: '/static/'
  },
  module: {

    rules: [
      {
        test: /\.jsx?$/,
        exclude: /\/node\_modules\//,
        loader: 'babel-loader'
      },
      {
        test: /\.(less|css)/,
        loader: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': SrcDir,
    },
    extensions: ['.jsx', '.js', '.less', '.json']
  },
  devServer: {
    contentBase: './',
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true,
    // historyApiFallback: true,
    hot: true,
    open: 'Google Chrome',
    overlay: true,
    publicPath: '/static/',
    writeToDisk: true,
    compress: true,
  }
};
