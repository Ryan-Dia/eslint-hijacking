module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'].concat(
    ['eslint-config-hijacking-js', './rules/styles', './rules/types'].map(require.resolve)
  ),
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
