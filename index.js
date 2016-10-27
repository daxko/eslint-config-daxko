module.exports = {

  extends: [
    'eslint:recommended',
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/node.js',
    './rules/style.js',
    './rules/variables.js',
  ],

  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true
    }
  },

  ecmaFeatures: {
    experimentalObjectRestSpread: true,
    impliedStrict: true
  },

  rules: {}

};