const webpack = require('webpack');
const { merge } = require('webpack-merge');
const ProdConf = require('./webpack.prod');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
let conf = {
  plugins: [
    new BundleAnalyzerPlugin(),
  ]
};

module.exports = merge(ProdConf, conf);
