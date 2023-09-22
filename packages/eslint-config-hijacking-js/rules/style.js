module.exports = {
  rules: {
    // Disallow unnecessary boolean casts
    // https://eslint.org/docs/latest/rules/no-extra-boolean-cast#rule-details
    // The "extends": "eslint:recommended" property in a configuration file enables this rule
    'no-extra-boolean-cast': 'off',

    // Enforce return statements in getters
    // https://eslint.org/docs/latest/rules/getter-return#rule-details
    // The "extends": "eslint:recommended" property in a configuration file enables this rule
    'getter-return': 'warn',

    // Disallow using an async function as a Promise executor
    // https://eslint.org/docs/latest/rules/no-async-promise-executor#rule-details
    // The "extends": "eslint:recommended" property in a configuration file enables this rule
    'no-async-promise-executor': 'warn',

    // Disallow specified warning terms in comments
    // https://eslint.org/docs/latest/rules/no-warning-comments#rule-details
    'no-warning-comments': [
      'warn',
      {
        terms: ['TODO', 'FIXME', 'XXX', 'BUG'],
        location: 'anywhere',
      },
    ],

    // Require let or const instead of var
    // https://eslint.org/docs/latest/rules/no-var#rule-details
    curly: ['error', 'all'],

    // Require the use of === and !==
    // https://eslint.org/docs/latest/rules/eqeqeq#rule-details
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // Enforce consistent indentation
    // https://eslint.org/docs/latest/rules/indent#rule-details
    indent: 'off',

    // Disallow shorthand type conversions
    // https://eslint.org/docs/latest/rules/no-implicit-coercion#rule-details
    'no-implicit-coercion': 'error',

    // Disallow use of the Object constructor
    // https://eslint.org/docs/latest/rules/no-new-object
    'no-new-object': 'error',

    // Require quotes around object literal property names
    // https://eslint.org/docs/rules/quote-props.html
    'quote-props': [
      'error',
      'as-needed',
      { keywords: false, unnecessary: true, numbers: true },
    ],

    // Prefer use of an object spread over Object.assign
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'error',

    // Disallow use of the Array constructor
    // https://eslint.org/docs/latest/rules/no-array-constructor
    'no-array-constructor': 'error',

    // Require or disallow space before function opening parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // Require line breaks inside function parentheses if there are line breaks between parameters
    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': ['error', 'multiline-arguments'],

    // Enforce the location of arrow function bodies with implicit returns
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': ['error', 'beside'],
  },
};
