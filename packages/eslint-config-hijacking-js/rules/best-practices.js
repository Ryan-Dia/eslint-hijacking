module.exports = {
  rules: {
    // Enforces return statements in callbacks of array's methods
    // 배열 메소드('map', 'filter', 'reduce'등)의 콜백 함수에서 'return' 문을 사용하도록 강제함
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['error', { allowImplicit: true }],

    // Specify the maximum cyclomatic complexity allowed in a program
    // https://eslint.org/docs/rules/complexity
    // Reference : https://github.com/eslint/eslint/issues/4808#issuecomment-167795140
    complexity: ['off', 15],

    // Require return statements to either always or never specify values
    // 함수가 항상 값을 return 하거나 아예 값을 return 하지 않도록 함
    // 즉 경우에따라 'true'  or 'undefined'이 되지 않도록 함
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'error',

    // Require default case in switch statements
    // https://eslint.org/docs/rules/default-case
    'default-case': ['error', { commentPattern: '^no default$' }],

    // Enforce default clauses in switch statements to be last
    // https://eslint.org/docs/rules/default-case-last
    'default-case-last': 'error',

    // Enforce default parameters to be last
    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': 'error',

    // encourages use of dot notation whenever possible
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': ['error', { allowKeywords: true }],

    // Enforces consistent newlines before or after dots
    // https://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // Disallow empty functions, except for standalone funcs/arrows
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],
  },
};
