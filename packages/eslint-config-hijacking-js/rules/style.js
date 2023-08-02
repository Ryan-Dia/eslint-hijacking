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

    }        
}
