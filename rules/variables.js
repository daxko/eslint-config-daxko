module.exports = {

  rules: {

    // Disable use of undefined
    // http://eslint.org/docs/rules/no-undefined
    'no-undefined': 'error',

    // Check that defined variables and args are used
    // http://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': 'warn',

    // Prevent variable use before definition, except for functions
    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': ['warn', { functions: false, classes: true }],

  }

};