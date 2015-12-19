module.exports = {
  entry: ['mocha!./test/index.js'],
  output: {
    filename: 'test.build.js',
    path: 'test/',
    publicPath: 'http://localhost:8081/test'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: 8081
  }
}
