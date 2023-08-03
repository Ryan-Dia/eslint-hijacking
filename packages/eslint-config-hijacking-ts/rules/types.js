module.exports = {
  rules: {
    // Disallow the any type.
    // https://typescript-eslint.io/rules/no-explicit-any/
    // Extending "plugin:@typescript-eslint/recommended" in an ESLint configuration enables this rule.
    '@typescript-eslint/no-explicit-any': 'off',

    // Require explicit return types on functions and class methods.
    // https://typescript-eslint.io/rules/explicit-function-return-type/
    '@typescript-eslint/explicit-function-return-type': 'off',

    // Disallow non-null assertions after an optional chain expression.
    // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain/
    // Extending "plugin:@typescript-eslint/recommended" in an ESLint configuration enables this rule.
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',

    // Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.
    // https://typescript-eslint.io/rules/no-inferrable-types/
    // Extending "plugin:@typescript-eslint/stylistic" in an ESLint configuration enables this rule.
    '@typescript-eslint/no-inferrable-types': 'warn',

    // Require explicit return and argument types on exported functions' and classes' public class methods.
    // https://typescript-eslint.io/rules/explicit-module-boundary-types/
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Require consistently using either T[] or Array<T> for arrays.
    // https://typescript-eslint.io/rules/array-type/
    // Extending "plugin:@typescript-eslint/stylistic" in an ESLint configuration enables this rule.
    // TODO : record in docs
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
  },
};
