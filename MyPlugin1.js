class CopyRightPlugin {
  constructor(params) {
    this.name = (params && params.name) || 'nm$l';
  }

  apply(compiler) {
    /*
      compiler.hooks：webpack生命周期
    */

    const that = this;

    // 资源输出到 output 目录前执行, 是个异步钩子
    compiler.hooks.emit.tapAsync('CopyRightPlugin', (compilation, cb) => {
      // compilation.assets  打包后的内容
      // debugger;
      // eslint-disable-next-line no-param-reassign
      compilation.assets['copyRight.txt'] = {
        source() {
          // 返回文件内容
          return `copyright by ${that.name}`;
        },
        size() {
          // 文件大小
          return 30;
        },
      };
      // 处理完毕后执行 cb 以通知 Webpack
      // 如果不执行 cb，运行流程将会一直卡在这不往下执行
      cb();
    });
  }
}

module.exports = CopyRightPlugin;
