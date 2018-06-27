module.exports = {
    "extends": "airbnb",
    "plugins": [
    "react",
    "react-native"
  ],
  "globals": {
    "__DEV__": true,
    "fetch": true
  },
  "parser": "babel-eslint",
  "rules": {
    "max-len": ["error", 120],
    "no-console": 0,
    "react/forbid-prop-types": [0, { "forbid": ["any", "array", "object"] }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
};
