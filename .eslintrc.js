module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    '@vue/airbnb'
  ],
  rules: {
    // don't require .vue extension when importing
    'import/extensions': [
      'off',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    "global-require": 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 'off',
    'comma-dangle': ['error', 'never'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-destructuring': 0,
    'no-restricted-syntax': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-unused-vars': 0,
    complexity: ['error', 10],
    'max-depth': ['error', 3],
    // 引入
    'import/prefer-default-export': 0,
    // 行最大长度限制
    'max-len': 0,
    "template-curly-spacing" : "off",
    "indent": ["error", 2],
    "linebreak-style": [0 ,"error", "windows"]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
