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
            let result = `
              <script>
                    (${this.options})()
              </script>
            `;
            let resultHTML = htmlPluginData.html.replace(
              "<!--MyPlugin inset script-->", result
            );
            // 返回修改后的结果
            htmlPluginData.html = resultHTML;
            // 返回修改后的结果
            callback()
          }
        );
      }
    );
  }
}
module.exports = MyPlugin;
