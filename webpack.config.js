const path = require('path')

module.exports = {
  entry: './src/demo/demo.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/demo')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}
