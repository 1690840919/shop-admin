module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    // 不再检测组件必须驼峰命名
    'vue/multi-word-component-names': 'off',
    // 函数名字后面不需要空格
    'space-before-function-paren': 0
  }
}
