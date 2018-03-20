module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  plugins: ['jest', 'prettier'],
  rules: {
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'no-class-assign': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'no-use-before-define': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
};
