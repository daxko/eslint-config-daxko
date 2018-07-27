# eslint-config-daxko

A [shareable](http://eslint.org/docs/developer-guide/shareable-configs.html) ESLint config for Daxko.

[![Build Status](https://travis-ci.org/daxko/eslint-config-daxko.svg?branch=master)](https://travis-ci.org/daxko/eslint-config-daxko)
[![npm](https://img.shields.io/npm/v/eslint-config-daxko.svg?style=flat)](https://www.npmjs.com/package/eslint-config-daxko)

## Installation

`$ npm install --save-dev eslint eslint-config-daxko`

## Usage

Once installed, you will need to add `daxko` in the [extends](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) property of your `.eslintrc` file.

```
{
  "extends": ["daxko"],
  "rules": {
    // additional rules or overrides for your project
  }
}
```

## Additional Rule Sets

### `daxko/react`

If you're working with React, you can include additional rules by adding `daxko/react` in the [extends](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) property of your `.eslintrc` file. `eslint-plugin-react` is required as an additional dependency.

```
{
  "extends": ["daxko", "daxko/react"],
  "rules": {
    // additional rules or overrides for your project
  }
}
```

## Updating on npm

Make sure you have have an account on npmjs.com.  
Contact a team member or tech ops to get added to Daxko org to publish.
