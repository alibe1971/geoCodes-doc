```js title="package.json"
{
  ...
  "scripts": {
    "build": "node build",
    "lint": "eslint --fix .",
    "test": "jest --verbose",
    "start": "npm-run-all --sequential lint build test"
  },
  ...
}

```