module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses rules from `@typescript-eslint/eslint-plugin`,
    'airbnb-typescript',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // Layer in all the JS Rules
    './.eslintrc.js',
  ],
  // Typescript Extras
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  // Then we add our own custom typescript rules
  rules: {
    // This allows us to use async function on addEventListener()
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [1, { ignoreRestSiblings: true }],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': [
      'warn',
      {
        ignoreDeclarationMerge: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/unbound-method': 'error',
    // this is covered by the typescript compiler, so we don't need it
    'no-undef': 'off',
    'no-shadow': 'off', // TS does it
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
