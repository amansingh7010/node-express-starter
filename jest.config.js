module.exports = {
  // Use ts-jest preset for testing TypeScript files with Jest
  preset: "ts-jest",
  // Set the test environment to Node.js
  testEnvironment: "node",

  // Define the root directory for tests and modules
  roots: ["<rootDir>/tests"],

  // Use ts-jest to transform TypeScript files
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },

  // Regular expression to find test files
  testRegex: "((\\.|/)(test|spec))\\.ts?$",

  // File extensions to recognize in module resolution
  moduleFileExtensions: ["ts", "js", "json", "node"],
};
