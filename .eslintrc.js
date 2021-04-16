module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-console': 'off',
    'consistent-return': 'off',
    'array-callback-return': 'off',
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'max-len': 'off',
    indent: 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
    ],
    'linebreak-style': 'off',
  },
};
