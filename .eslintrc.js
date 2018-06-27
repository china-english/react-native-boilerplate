module.exports = {
    "extends": "airbnb",
    "plugins": [
      "react",
      "jsx-a11y",
      "react-native"
    ],
  "globals": {
    "__DEV__": true,
    "fetch": true
  },
  "parser": "babel-eslint",
  "rules": {
    // "max-len": ["error", 120],
    "no-console": 0,
    "newline-per-chained-call": 1,
    // "react/forbid-prop-types": [0, { "forbid": ["any", "array", "object"] }],
    "class-methods-use-this": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
};
