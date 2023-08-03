module.exports = {
  rules: {
    // Enforce consistent indentation.
    // https://typescript-eslint.io/rules/indent/
    '@typescript-eslint/indent': 'off',

    // Disallow non-null assertions using the ! postfix operator.
    // https://typescript-eslint.io/rules/no-non-null-assertion/
    // Extending "plugin:@typescript-eslint/strict" in an ESLint configuration enables this rule.
    '@typescript-eslint/no-non-null-assertion': 'off',

    // Disallow the use of variables before they are defined.
    // https://typescript-eslint.io/rules/no-use-before-define/
    // Already applied in ESLint.
    '@typescript-eslint/no-use-before-define': 'off',

    // Disallow the declaration of empty interfaces.
    // https://typescript-eslint.io/rules/no-empty-interface/
    '@typescript-eslint/no-empty-interface': 'error',

    // Disallow empty functions.
    // https://typescript-eslint.io/rules/no-empty-function/
    // Extending "plugin:@typescript-eslint/stylistic" in an ESLint configuration enables this rule.
    '@typescript-eslint/no-empty-function': 'off',

    // Enforce naming conventions for everything across a codebase.
    // https://typescript-eslint.io/rules/naming-convention/
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        selector: 'variable',
        leadingUnderscore: 'allow',
      },
      { format: ['camelCase', 'PascalCase'], selector: 'function' },
      { format: ['PascalCase'], selector: 'interface' },
      { format: ['PascalCase'], selector: 'typeAlias' },
    ],

    // Disallow unused variables.
    // https://typescript-eslint.io/rules/no-unused-vars/
    // Extending "plugin:@typescript-eslint/recommended" in an ESLint configuration enables this rule.
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],

    // Require a consistent member declaration order.
    // https://typescript-eslint.io/rules/member-ordering/
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'private-static-field',
          'public-instance-field',
          'private-instance-field',
          'public-constructor',
          'private-constructor',
          'public-instance-method',
          'private-instance-method',
        ],
      },
    ],

    // Disallow require statements except in import statements.
    // https://typescript-eslint.io/rules/no-var-requires/
    // Extending "plugin:@typescript-eslint/recommended" in an ESLint configuration enables this rule.
    '@typescript-eslint/no-var-requires': 'warn',
  },
};
