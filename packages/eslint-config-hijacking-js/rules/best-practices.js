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

    // Encourages use of dot notation whenever possible
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

    // Disallow empty destructuring patterns
    // https://eslint.org/docs/rules/no-empty-pattern
    // The "extends": "eslint:recommended" property in a configuration file enables this rule
    'no-empty-pattern': 'error',

    // Require the use of === and !==
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // Make sure for-in loops have an if statement
    // https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'error',

    // Enforce a maximum number of classes per file
    // 여러 클래스가 포함된 파일은 탐색하기 어렵고 구조가 잘못된 코드베이스가 되는 경우가 많습니다.
    // 가장 좋은 방법은 각 파일을 단일 책임으로 제한하는 것입니다.
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': ['error', 1],

    // Disallow use of arguments.caller or arguments.callee
    // https://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // Disallow lexical declarations in case/default clauses
    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',

    // Disallow returning value in constructor
    // https://eslint.org/docs/rules/no-constructor-return
    'no-constructor-return': 'error',

    // Disallow else after a return in an if
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['error', { allowElseIf: false }],

    // Disallow use of eval()
    // 신뢰할 수 없는 코드에 사용하면 eval()프로그램이 여러 가지 주입 공격에 노출될 수 있습니다.
    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // Disallow adding to native types
    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // Disallow unnecessary function binding
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',

    // Disallow Unnecessary Labels
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // Disallow fallthrough of case statements
    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',

    // Disallow the use of leading or trailing decimal points in numeric literals
    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // Disallow reassignments of native objects or read-only globals
    // The "extends": "eslint:recommended" property in a configuration file enables this rule
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': ['error', { exceptions: [] }],

    // Disallow implicit type conversions
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': [
      'off',
      {
        boolean: false,
        number: true,
        string: true,
        allow: [],
      },
    ],

    // Disallow var and named functions in global scope
    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',

    // Disallow use of eval()-like methods
    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',
  },
};
