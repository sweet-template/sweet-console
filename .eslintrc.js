module.exports = {
    root: true,
    env: {
      node: true,
      jquery: true,
    },
    extends: [
      "plugin:vue/essential",
      "@vue/airbnb",
    ],
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "indent": 0,
      "destructuring": true,
      "prefer-destructuring": "off",
      "prefer-template": "off",
      "object-curly-spacing": [0, "never"],
      "quote-props": "off",
      "max-len": ["error", {"code": 300}],
      "quotes": "off",
      "no-param-reassign": "off",
      "no-unused-expressions": "off",
      "linebreak-style": [0, "error", "windows"],
      "import/prefer-default-export": false,
      "import/order": false,
      "no-plusplus": "off",
      "consistent-return": "off",
      "no-useless-escape": "off",
      "no-nested-ternary": "off",
      "import/extensions": 0,
      "arrow-parens": 0,
      "no-return-assign": 0,
      "prefer-spread": 0,
      "class-methods-use-this": 0,
      "arrow-body-style": ["error", "as-needed"],
      "comma-dangle": 0,
      "no-underscore-dangle": 0,
      "no-restricted-syntax": 0,
    },
    parserOptions: {
      parser: "babel-eslint",
    },
  };
  