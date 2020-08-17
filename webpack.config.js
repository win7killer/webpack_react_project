const webpack = require('webpack');
const path = require('path');

const SrcDir = path.join(__dirname, 'src');

module.exports = {
  stats: 'normal',
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(SrcDir, '../dist'),
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },
  module: {

    rules: [
      {
        test: /\.js$/,
        exclude: /\/node\_modules\//,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@': SrcDir,
    },
  }
};
