module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  ignorePatterns: ['node_modules/*'],
  extends: ['eslint:recommended', 'airbnb', 'prettier'],
  plugins: ['react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': 0,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
