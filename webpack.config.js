const path = require('path');

const SRC = path.resolve(__dirname, "node_modules");
module.exports = {
  context: __dirname,
  entry: "./frontend/entry.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: "[resourcePath]",
    devtoolFallbackModuleFilenameTemplate: "[resourcePath]?[hash]"
  },
  module: {
    rules: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      },
      {
        test: /\.mp3$/,
        include: SRC,
        loader: "file-loader"
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".css", ".mp3", "*"]
  }
};