module.exports = {
  root: true,
  env: { 
    browser: true,
    es2021: true, 
    jest: true, 
    node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@babel/eslint-parser',
  parserOptions: {ecmaFeature: {jsx: true}, ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh', 'react', 'prettier', 'react-hooks'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
