/** @type {import('eslint').Linter.FlatConfig} */
const config = [
    {
        // Use the recommended ESLint rules
        rules: {
            // Add the rules from eslint:recommended directly
            'no-alert': 'warn',
            'no-console': 'warn',
            'no-empty': 'error',
            // Add any other rules you want here
        },
    },
];

module.exports = config;
