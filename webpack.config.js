var webpack = require('webpack')
var path = require('path')
module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'EditorConfig.js'
  }
}
