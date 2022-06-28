const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const express = require('express')

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'img',
          publicPath: path.resolve(__dirname, 'img'),
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'friends.html',
      template: 'src/friends.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'messages.html',
      template: 'src/messages.html',
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      devServer.app.use(
        '/img/',
        express.static(path.resolve(__dirname, 'img')),
      )
      return middlewares
    },
  },
}
