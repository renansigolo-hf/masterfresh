/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: [
    "build",
    "node_modules",
    "config/*",
    "src/@types/custom.d.ts",
    "*.js",
  ],
  settings: {
    react: {
      version: "17.0.2",
    },
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "prettier",
  ],
}
