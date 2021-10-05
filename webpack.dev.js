const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    hot: 'only',
    port: 3000,
    static: __dirname,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
