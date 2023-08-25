module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'].concat(
    ['eslint-config-hijacking-js', './rules/styles', './rules/types'].map(require.resolve)
  ),
  parserOptions: {
    project: true,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.mts'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.mts', '.tsx'],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
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

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        mts: 'never',
        tsx: 'never',
      },
    ],
  },
};
