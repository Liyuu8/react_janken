/* eslint-disable no-undef */
const path = require('path');

// eslint-disable-next-line no-undef
const publicDir = path.join(__dirname, '/public');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: publicDir + '/js',
    filename: '[name].js',
  },
  devServer: {
    contentBase: publicDir,
    port: 8080,
    publicPath: '/js/',
  },
  devtool: '#inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
