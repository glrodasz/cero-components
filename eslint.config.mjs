import js from '@eslint/js'
import react from 'eslint-plugin-react'
import prettier from 'eslint-plugin-prettier/recommended'
import storybook from 'eslint-plugin-storybook'
import globals from 'globals'

export default [
  {
    ignores: [
      'node_modules/',
      'coverage/',
      'storybook-static/',
      'dist/',
      '.next/',
      '.cache/',
    ],
  },
  js.configs.recommended,
  react.configs.flat.recommended,
  prettier,
  ...storybook.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
        ...globals.jest,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/forbid-prop-types': 'warn',
    },
  },
]
