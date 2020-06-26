/* eslint-disable */
// SetScriptTimestampPlugin.js
class MyPlugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('SetScriptTimestampPlugin',
      (compilation, callback) => {
        // 插件逻辑 调用compilation提供的plugin方法
        compilation.plugin(
          "html-webpack-plugin-before-html-processing",
          (htmlPluginData, callback) => {
            // 返回修改后的结果
            htmlPluginData.html = `<script>(${this.options})() </script>`;
          }
        );
      }
    );
  }
}
module.exports = MyPlugin;
