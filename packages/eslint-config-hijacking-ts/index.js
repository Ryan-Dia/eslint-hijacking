module.exports = {
  extends: [
    'eslint-config-hijacking-js',
    'plugin:@typescript-eslint/recommended',
    './rules/style',
    './rules/types',
  ].map(require.resolve),
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  rules: {
    // for performance Troubleshooting
    // TypeScript provides the same checks
    // https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting#eslint-plugin-import
    // eslint-plugin-import
    'import/named': 'off',
    'import/no-named-as-default': 'off',

    // Already applied in TSLint.
    'no-unused-vars': 'off',
  },
};
