const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyRightPlugin = require('./MyPlugin1');
const doSomething = require('./custom-script');
const MyPlugin = require('./MyPlugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  devServer: {
    port: 9009,
    open: true, // 自动打开浏览器
    contentBase: './dist', // todo: 告诉服务器从哪里dist目录中提供内容
    hot: true, // 只更新修改的部分，而不是刷新整个页面
    // hotOnly:true
    // publicPath: '/dist',
    proxy: {
      '/api': {
        target: 'https://mock.gem-mine.tech/', // 目标服务器 host
        pathRewrite: { '^/api': '' }, // 重写请求，比如我们源访问的是api/old-path，那么请求会被解析为/api/new-path
        // changeOrigin: true, // 这个参数可以让target参数是域名。设置为true, 本地就会虚拟一个服务器接收你的请求并代你发送该请求,
        secure: false, // 不检查安全问题。设置后，可以接受运行在 HTTPS 上，可以使用无效证书的后端服务器
      },
    },
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 模板路径
      hash: true, // 在打包好的bundle.js 后加上hash
      inject: true,
    }),
    new MyPlugin(doSomething.toString()),
    new CleanWebpackPlugin(),
    new ExtractTextWebpackPlugin('css/style.css'),
    new webpack.HotModuleReplacementPlugin(),
    new CopyRightPlugin(),
  ],
  // 注册loader
  resolveLoader: {
    // loader查找顺序，从左到右
    modules: ['node_modules', './'],
  },
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
        use: [{
          loader: 'MyLoader',
          options: {
            name: '河蟹',
          },
        }, {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        }],
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
