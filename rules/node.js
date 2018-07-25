module.exports = {
  rules: {
    // Enforce callback return
    // http://eslint.org/docs/rules/callback-return
    'callback-return': 'off',

    // Disable string concatination of __dirname & __filename
    // http://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error'
  }
};
