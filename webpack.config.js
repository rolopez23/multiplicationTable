const path = require('path');

module.exports = {
  entry: `${__dirname}/client/src/Index.jsx`,
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`
  }
};
