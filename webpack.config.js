const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require("webpack");
const path = require("path");

let cssLoaders = [
  "style-loader",
  MiniCssExtractPlugin.loader,
  "css-loader",
  "postcss-loader",
  "sass-loader"
]

module.exports = {
  mode: "development",
  entry: {main: "./js/app.js"},
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [ [
              "@babel/preset-env",
              {
                "targets": {
                  "browsers": "iOS 10"
                }
              }
            ]],
            plugins: ["@babel/plugin-proposal-object-rest-spread"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: cssLoaders
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name:'[name].[ext]',
          publicPath: './assets/imgs',
          outputPath: './assets/imgs'
        }
      },
      {
        test: /\.(otf|ttf|woff2)$/,
        loader: 'url-loader',
        options: {
          name:'[name].[ext]',
          publicPath: './assets/font',
          outputPath: './assets/font'
        }
      }
    ]
  },
  devServer: {
    contentBase: "./build",
      overlay: true,
      hot: true
  },
  plugins: [
    new MiniCssExtractPlugin({filename: "bundle.css"}),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
      alias: {
      vue: "vue/dist/vue.min.js"
    }
  },
}