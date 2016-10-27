module.exports = {

  rules: {

    // Enforces one true brace style
    // http://eslint.org/docs/rules/brace-style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // Warn when not using camel case names
    // http://eslint.org/docs/rules/camelcase
    'camelcase': ['warn', { properties: 'never' }],

    // Allow trailing commas
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': 'off',

    // Enforce consistent use of JSX quotes
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],

    // Warn when quotes aren't consistent
    // http://eslint.org/docs/rules/quotes
    'quotes': ['warn', 'single', { avoidEscape: true }],

    // Require semicolons
    // http://eslint.org/docs/rules/semi
    'semi': ['error', 'always'],

  }

};