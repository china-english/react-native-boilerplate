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
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]，
    "arrow-parens": [
      "error",
      "always"
    ],
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "comma-dangle": [
      2,
      "always-multiline"
    ],
    "no-alert": 0,
    "no-unused-vars": 2,
    "no-confusing-arrow": 0,
    "no-console": 1,
    "no-use-before-define": 0,
    "import/imports-first": 0,
    "import/newline-after-import": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "import/no-webpack-loader-syntax": 0,
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "jsx-a11y/aria-props": 2,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/label-has-for": 2,
    "jsx-a11y/mouse-events-have-key-events": 2,
    "jsx-a11y/role-has-required-aria-props": 2,
    "jsx-a11y/role-supports-aria-props": 2,
    "jsx-a11y/no-static-element-interactions": 0,
    "max-len": 0,
    "newline-per-chained-call": 0,
    "prefer-template": 2,
    "class-methods-use-this": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-first-prop-new-line": [
      2,
      "multiline"
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/jsx-no-target-blank": 0,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/require-extension": 0,
    "react/self-closing-comp": 0,
    "semi": [
      2,
      "always"
    ]
  }
};
