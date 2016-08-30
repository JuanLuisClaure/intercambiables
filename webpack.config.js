var webpack = require("webpack");
var ComponentPlugin = require("component-webpack-plugin");
var WebpackPathOrderPlugin = require('path-order-webpack-plugin');

module.exports = {
  entry: {
    "app": "./www/build/main.js",

  },
  output: {
    path: __dirname,
    filename: "app.bundle.js"
  },
  watch: true,
  module: {
        loaders: [
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: ['raw-loader', 'sass-loader']
          },// sass-loader not scss-loader
          {
            test: /\.css$/,
            loaders: ['style', 'css']

          }//para los css todo listo

        ]

    }

}
