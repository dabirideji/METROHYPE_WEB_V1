/** @type {import('eslint').Linter.Config} */
const config = {
    extends: ['eslint:recommended'],
    parserOptions: {
      ecmaVersion: 2020, // Use the latest ECMAScript features
      sourceType: 'module', // Allow for the use of imports
    },
    rules: {
      // Add your custom rules here
      'no-console': 'warn', // Warn on console.log statements
    },
  };
  
  module.exports = config;
  