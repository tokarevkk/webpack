const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileLoader = require('file-loader');

module.exports = {
   mode: 'development',
   entry: './src/app.js',
   module: {
      rules: [
         {
           test: /\.(png|jpe?g|gif)$/i,
           loader: 'file-loader',
           options: {
             outputPath: 'images',
           },
         },
         {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
       ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         filename: 'index.html',
         template: 'src/index.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'friends.html',
         template: 'src/friends.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'messages.html',
         template: 'src/messages.html'
      })
  ],
   output: {
      filename: '[name].js',
      path: path.join(__dirname, 'dist'),  
   },
   
}
