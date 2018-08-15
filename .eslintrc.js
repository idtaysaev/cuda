module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention eslint:all
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  plugins: [
    "vue"
  ],
  rules: {
    indent: ["error", "tab"],
    "vue/html-indent": ["error", "tab"],
    quotes: ["error", "double"],
    "quote-props": ["error", "as-needed"]
  }
}
