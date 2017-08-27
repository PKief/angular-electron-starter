import * as helpers from './helpers';
import * as webpack from "webpack";

const config: webpack.Configuration = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader']
      },
      {
        test: /\.html$/,
        use: 'html-loader'

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: 'null-loader'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        use: 'null-loader'
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        use: 'raw'
      },
      {
        test: /\.scss$/,
        exclude: [/\.global\.scss$/],
        use: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.global\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};

export default config;