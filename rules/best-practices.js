module.exports = {

  rules: {

    // Enforce curly brace conventions
    // http://eslint.org/docs/rules/curly
    'curly': ['error', 'all'],

    // Require use of === & !== when necessary
    // http://eslint.org/docs/rules/eqeqeq
    'eqeqeq': ['error', 'smart'],

    // Disable alerts
    // http://eslint.org/docs/rules/no-alert
    'no-alert': 'error',

    // Disable eval statements
    // http://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // Disable implied eval
    // http://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // Disable empty functions
    // http://eslint.org/docs/rules/no-empty-function
    'no-empty-function': 'error',

    // Disable extending native objects
    // http://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // Disable functions inside loops
    // http://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',

    // Warn magic numbers
    // http://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': ['warn', { ignoreArrayIndexes: true }],

    // Disable function constructors
    // http://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // Warn against parameter reassigning
    // http://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 'warn',

    // Disable use of __proto__
    // http://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // Disable use of with
    // http://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // Require radix parameter for parseInt
    // http://eslint.org/docs/rules/radix
    'radix': 'warn',

  }

};