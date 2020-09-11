const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const commonConf = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const SrcDir = path.join(__dirname, 'src');

const conf = {
  stats: 'minimal',
  // devtool: 'none',
  mode: 'production',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'static/[name].[chunkhash:8].js',
    path: path.join(__dirname, './dist'),
    chunkFilename: 'static/[name].chunk.[chunkhash:8].js',
    publicPath: '/swb/dist/'
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
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 50,
              remPrecision: 8,
            }
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                // globalVars: { color1: 'red' }
              }

            }
          }
        ]
      },
    ]
  },
  resolve: {
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!.gitignore'],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public/dll',
          to: 'dll'
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'static/[name].[contenthash:8].css',
      chunkFilename: 'static/[name].chunk.[contenthash:8].css',
      ignoreOrder: true,

    }),
    new webpack.DllReferencePlugin({
      manifest: path.join(__dirname, './public/dll/react_dll.manifest.json')
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
      filename: 'index.html',
      minify: false,
      chunks: 'all',
      publicPath: '/swb/dist/'
    })

  ],
  optimization: {
    minimizer: [new TerserWebpackPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
};

module.exports = (new SpeedMeasurePlugin).wrap(merge(commonConf, conf));
