// 引入MniCssExtractPlugin插件
// const MiniCssExtractPlugin = require('mini-css-extract-plugin').default
module.exports = {
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: "css" },
    ], // `style: true` 会加载 less 文件
  ],
};
