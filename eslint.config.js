export default {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", "eslint.config.js", "coverage", "node_modules"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "testing-library", "jest-dom"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
