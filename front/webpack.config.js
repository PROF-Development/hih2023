const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry : {
    path : path.join(__dirname, './src/index.js')
    },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    clean : true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }), 
  ],
  devServer: {
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};