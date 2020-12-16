module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/newline-after-import': 'error',
    'import/no-default-export': 'off',
    'import/no-cycle': 'error',
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-mutable-exports': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
      },
    ],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'never', prev: 'import', next: 'import' },
      {
        blankLine: 'always',
        prev: '*',
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'export',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'function',
      },
      {
        blankLine: 'any',
        prev: 'function',
        next: 'function',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'expression',
      },
      {
        blankLine: 'any',
        prev: 'expression',
        next: 'expression',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'block-like',
      },
    ],
  },
};
