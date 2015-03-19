var webpack = require('webpack');

var outputDir = "./dist"

module.exports = {
  entry: "./src/formations.js",

  watch: false,

  output: {
    filename: outputDir + '/bundle.js'
  },

  resolve: {
    modulesDirectories: ['node_modules']
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
}
