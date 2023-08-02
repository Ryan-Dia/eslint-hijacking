module.exports = {
  extends: [
    './rules/best-practices',
    './rules/style',
    './rules/variables',
    './rules/imports',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: 'module',
  },
  rules: {},
};
