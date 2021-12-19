module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "no-unused-vars": "off",
    "spaced-comment": "off",
    "comma-dangle": "off",
    "arrow-body-style": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
  },
}
