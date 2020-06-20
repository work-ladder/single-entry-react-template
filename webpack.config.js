const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")

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
    new ExtractTextWebpackPlugin('/style.less')
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        /* 
          也可以这样写，这种方式方便写一些配置参数
          use: [
              {loader: 'style-loader'},
              {loader: 'css-loader'}
          ]
        */
      }
    ]
  }
}
