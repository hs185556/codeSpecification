module.exports = {
  env: {
    browser: true, // 在浏览器环境中运行
    es2021: true, // 启用 ES2021 语法支持
    node: true // 在 Node.js 环境中运行，解决 module.export 报错
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential'], // 使用 eslint 推荐的规则和 Vue.js 相关的规则
  overrides: [], // 不覆盖任何特定配置
  parserOptions: {
    ecmaVersion: 'latest', // 使用最新的 ECMAScript 版本
    sourceType: 'module' // 使用 ECMAScript 模块
  },
  plugins: ['vue'], // 使用 Vue.js 插件
  rules: {
    'vue/multi-word-component-names': 'off' // 禁用对多词组件名称的验证规则
  }
};
