# eslint-config-daxko

A [shareable][http://eslint.org/docs/developer-guide/shareable-configs.html] ESLint config for Daxko.

## Installation

```$ npm install --save-dev eslint eslint-config-daxko```

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

If you're working with React, you can include additional rules by adding `daxko/react` in the [extends](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) property of your `.eslintrc` file.

```
{
  "extends": ["daxko", "daxko/react"],
  "rules": {
    // additional rules or overrides for your project
  }
}
```