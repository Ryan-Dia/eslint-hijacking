const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    // Require or disallow initialization in variable declarations
    // https://eslint.org/docs/latest/rules/init-declarations
    'init-declarations': 'off',

    // Disallow initializing variables to undefined
    // https://eslint.org/docs/latest/rules/no-undef-init#rule-details
    'no-undef': 'off',

    // Disallow use of undefined when initializing variables
    // https://eslint.org/docs/latest/rules/no-undef-init#rule-details
    'no-undef-init': 'error',

    // Require const declarations for variables that are never reassigned after declared
    // https://eslint.org/docs/latest/rules/prefer-const#rule-details
    'prefer-const': 'error',

    // Require let or const instead of var
    // https://eslint.org/docs/latest/rules/no-var#rule-details
    'no-var': 'error',

    // Disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // Disallow specific globals
    // https://eslint.org/docs/latest/rules/no-restricted-globals#rule-details
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message:
          'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
      },
      {
        name: 'isNaN',
        message:
          'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
      },
    ].concat(confusingBrowserGlobals),

    // Disallow variable declarations from shadowing variables declared in the outer scope
    // https://eslint.org/docs/latest/rules/no-shadow#rule-details
    'no-shadow': 'error',

    // disallow use of undefined variable
    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'off',

    // Disallow the use of variables before they are defined
    // https://eslint.org/docs/latest/rules/no-use-before-define#rule-details
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
  },
};
