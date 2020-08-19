const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const commonConf = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const SrcDir = path.join(__dirname, 'src');

const conf = {
  stats: 'normal',
  devtool: 'none',
  mode: 'production',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.join(__dirname, './dist'),
    chunkFilename: '[name].chunk.[chunkhash:8].js',
    publicPath: '/static/'
  },
  module: {

    rules: [
      {
        test: /\.css$/,
        loader: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test: /\.less$/,
        loader: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75,
              remPrecision: 8,
            }
          }
        ]
      },
    ]
  },
  resolve: {
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css'
    }),

  ]
};

module.exports = merge(commonConf, conf);
