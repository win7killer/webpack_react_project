const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    react_dll: ['react', 'react-dom', 'react-router-dom', 'react-loadable'],
  },
  output: {
    path: path.join(__dirname, './public/dll'),
    filename: '[name].[chunkhash:8].js',
    library: '[name]',
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!.gitignore'],
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, './public/dll/[name].manifest.json'),
      name: '[name]',
    })
  ]

};
