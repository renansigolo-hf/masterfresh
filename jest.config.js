/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  bail: true,
  testEnvironment: "jsdom",
  testMatch: ["**/src/**/*.spec.ts?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "^@environments(.*)$": "<rootDir>/src/environments$1",
  },
  // setupFiles: ["./jest.setup.js"],
  cacheDirectory: "./cache",
};
