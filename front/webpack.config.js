const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry : {
    path : path.join(__dirname, './src/index.js')
    },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    publicPath: '/',
    clean : true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }), 
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    aliasFields: ['browser'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
        options: {
            target: 'es2015',
            loader: 'jsx',
        },
      },
      {
        test: /\.sass|css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};