import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {

      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'always'],
      '@stylistic/js/space-in-parens': ['error', 'never'],
      '@stylistic/js/no-multi-spaces': ['error', {'ignoreEOLComments': true}]
    }
  }
];