const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve('dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextWebpackPlugin('css/style.css'),
    new HtmlWebpackPlugin({
      template: './src/index.html', // 模板路径
      hash: true // 在打包好的bundle.js 后加上hash
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,     // 解析scss
        use: ExtractTextWebpackPlugin.extract({
          // 将css用link的方式引入就不再需要style-loader了
          fallback: "style-loader",
          use: ['css-loader', 'postcss-loader', 'sass-loader'] // 从右向左解析
        })
      },
      {
        test: /\.css$/,     // 解析css
        use: ExtractTextWebpackPlugin.extract({
          // 将css用link的方式引入就不再需要style-loader了
          fallback: "style-loader",
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.less$/,     // 解析less
        use: ExtractTextWebpackPlugin.extract({
          // 将css用link的方式引入就不再需要style-loader了
          fallback: "style-loader",
          use: ['css-loader', 'postcss-loader', 'less-loader'] // 从右向左解析
        })
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 8192,  // 小于8k的图片自动转成base64格式，并且不会存在实体图片
            outputPath: 'images/' // 图片打包后存放的目录
          }
        }]
      },
      {
        test: /.\js$/,
        use: "babel-loader",
        include: /src/,
        exclude: /node_modules/
      }
    ],
  }
}
