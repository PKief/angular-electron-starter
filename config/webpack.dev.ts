import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as helpers from './helpers';
import commonConfig from './webpack.common';

const config: webpack.Configuration = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:3000/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    port: 3000,
    compress: true,
    overlay: {
      warnings: true,
      errors: true
    },
    quiet: false
  }
});

export default config;
