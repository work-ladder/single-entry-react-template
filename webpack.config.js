const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MyPlugin = require('./MyPlugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 模板路径
      hash: true, // 在打包好的bundle.js 后加上hash
      inject: true,
    }),
    new MyPlugin({ options: true }),
    new CleanWebpackPlugin(),
    new ExtractTextWebpackPlugin('css/style.css'),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/, // 解析scss
        use: ExtractTextWebpackPlugin.extract({
          // 将css用link的方式引入就不再需要style-loader了
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'], // 从右向左解析
        }),
      },
      {
        test: /\.css$/, // 解析css
        use: ExtractTextWebpackPlugin.extract({
          // 将css用link的方式引入就不再需要style-loader了
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        }),
      },
      {
        test: /\.less$/, // 解析less
        use: ExtractTextWebpackPlugin.extract({
          // 将css用link的方式引入就不再需要style-loader了
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'less-loader'], // 从右向左解析
        }),
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192, // 小于8k的图片自动转成base64格式，并且不会存在实体图片
            outputPath: 'images/', // 图片打包后存放的目录
          },
        }],
      },
      {
        test: /\.js?x$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        include: /src/,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // 别名
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      component: path.join(__dirname, 'src/component'),
    },
    // 省略后缀
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.less'],
  },
};
