const { getOptions } = require('loader-utils');

module.exports = function (source) {
  /*
    this指向webpack 不能使用箭头函数，webpack需要对指定this指向
    source：打包后的文件内容
    this.query options参数
  */
  const options = getOptions(this) || {};
  // 返回处理后的结果，相当于是打包拦截器
  // return source.replace('nm$l', options.name || '和谐');
  const result = source.replace('nm$l', options.name || '和谐');

  /*
    this.callback(
      err: Error | null,  // error信息
      content: string | Buffer,   // 要返回的内容
      sourceMap?: SourceMap,    // source-map
      meta?: any  // 会被 webpack 忽略，可以是任何东西（例如一些元数据）。
    );
  */
  // 如果只传这两个参数，效果同上
  this.callback(null, result);

  // 异步操作
  // const callback = this.async();
  // setTimeout(() => { // 直接影响打包时间
  //   const options = getOptions(this);
  //   const result = source.replace('nm$l', options.name || '和谐');
  //   callback(null, result); // 这里实际还是调用了this.callback()
  // }, 3000);
};
