module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2021,
  },
  ignorePatterns: ['tests/**/*.js'],
  rules: {
    // General
    'no-unused-vars': 'warn', // Warn about unused variables
    'no-undef': 'error', // Disallow using undeclared variables
    'no-dupe-keys': 'error', // Disallow duplicate keys in object literals
    'no-extra-parens': 'warn', // Avoid unnecessary parentheses

    // Stylistic
    indent: ['error', 2], // Use 2 spaces for indentation
    quotes: ['error', 'single'], // Use single quotes for strings
    semi: ['error', 'always'], // Require semicolons at the end of statements
    'object-curly-spacing': ['error', 'always'], // Require spaces inside curly braces

    // ES6
    'prefer-const': 'error', // Prefer using const for variables that don't need reassignment
    'arrow-spacing': 'error', // Enforce consistent spacing before and after arrow functions
    'no-var': 'error', // Use let or const instead of var
    'prefer-template': 'warn', // Prefer template literals over string concatenation
  },
};
