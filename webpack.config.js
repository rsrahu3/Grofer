var path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'src') + '/App.jsx',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };