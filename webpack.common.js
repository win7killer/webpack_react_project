const webpack = require('webpack');
const path = require('path');

const SrcDir = path.join(__dirname, 'src');

module.exports = {
  stats: 'normal',
  devtool: 'source-map',
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(SrcDir, '../dist'),
    chunkFilename: '[name].chunk.js',
    publicPath: '/static/'
  },
  module: {

    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /\/node\_modules\//,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.less$/,
        loader: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75,
              remPrecision: 8,
            }
          },
          'less-loader',
        ]
      },
      {
        test: /\.(jp(e)?g|png|webp)$/,
        loader: [
          {
            loader: 'url-loader',
            options: {
              limit: 5 * 1024
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': SrcDir,
    },
    extensions: ['.jsx', '.js', '.less', '.json']
  }
};
