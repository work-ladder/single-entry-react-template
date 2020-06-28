const { getOptions } = require('loader-utils');

module.exports = function (source) {
  /*
    this指向webpack 不能使用箭头函数，webpack需要对指定this指向
    source：打包后的文件内容
    this.query options参数
  */
  const options = getOptions(this) || {};
  // 返回处理后的结果，相当于是打包拦截器
  return source.replace('nm$l', options.name || '和谐');
};
