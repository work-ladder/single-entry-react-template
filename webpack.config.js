const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin  = require("mini-css-extract-plugin")

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve('dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 模板路径
      hash: true // 在打包好的bundle.js 后加上hash
    }),
    new MiniCssExtractPlugin({filename: 'css/index.less'})
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
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
      }
    ],
  }
}
