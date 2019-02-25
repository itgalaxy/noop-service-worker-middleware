"use strict";

const presets = require("eslint-plugin-itgalaxy");

module.exports = {
  extends: [
    "plugin:itgalaxy/jest",
    "plugin:itgalaxy/esnext",
    "plugin:itgalaxy/node",
    "plugin:itgalaxy/markdown"
  ],
  overrides: [
    // Jest
    {
      env: {
        browser: true,
        node: true
      },
      files: ["**/__tests__/**/*"],
      parserOptions: {
        sourceType: "module"
      },
      rules: {
        // Allow to use `console` (example - `mocking`)
        "no-console": "off",
        // Allow all `es` features in tests, because we use `babel`
        "node/no-unsupported-features/es-syntax": "off"
      }
    },

    // Configurations and node stuff
    {
      env: {
        browser: false,
        node: true
      },
      excludedFiles: ["src/**/*", "**/__tests__/**/*"],
      files: [".*.*", "**/*"],
      parserOptions: {
        sourceType: "script"
      },
      rules: {
        "no-console": "off",
        "node/shebang": "off"
      }
    },

    // Markdown
    {
      env: {
        browser: true,
        node: true
      },
      files: ["**/*.md"],
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true
        }
      },
      rules: {
        "import/no-unresolved": "off",
        "no-console": "off",
        "no-undef": "off",
        "no-unused-vars": "off",
        "node/no-unpublished-require": "off",
        strict: "off"
      }
    }
  ],
  root: true
};
