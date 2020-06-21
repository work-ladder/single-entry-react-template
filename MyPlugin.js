/* eslint-disable */
// SetScriptTimestampPlugin.js
class MyPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('SetScriptTimestampPlugin',
      (compilation, callback) => {
// 插件逻辑 调用compilation提供的plugin方法
        compilation.plugin(
          "html-webpack-plugin-before-html-processing",
          function(htmlPluginData, callback) {
// 读取并修改 script 上 src 列表
            let jsScr = htmlPluginData.assets.js[0];
            htmlPluginData.assets.js = [];
            let result = `
<script>
let scriptDOM = document.createElement("script");
let jsScr = "./${jsScr}";
scriptDOM.src = jsScr + "?" + new Date().getTime();
document.body.appendChild(scriptDOM)
</script>
`;
            let resultHTML = htmlPluginData.html.replace(
              "<!--MyPlugin inset script-->", result
            );
            // 返回修改后的结果
            htmlPluginData.html = "<script>console.log('my-plugin')</script>";
          }
        );
      }
    );
  }
}
module.exports = MyPlugin;
