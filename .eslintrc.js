module.exports = {
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint', 'import'],
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.json'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
  },
  ignorePatterns: [
    '.eslintrc.js',
    'dist/',
    'jest.config.ts',
    'jest.setup.ts',
    '*.postman_collection.js',
    'prisma/seeds/seed.ts',
    'prisma/seeds/functions.ts',
    'prisma/seeds/types.ts',
    'src/utils/collection/*',
    '*.html',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'no-void': ['error', { allowAsStatement: true }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'require-await': ['error'],
    '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
    'max-classes-per-file': 'off',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          object: false,
        },
      },
    ],
    'no-process-env': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': 'off',
    'import/no-named-as-default': 'off',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      },
    ],
    'import/namespace': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'func-names': [2, 'never'],
    'func-style': [
      2,
      'expression',
      {
        allowArrowFunctions: true,
      },
    ],
    'global-require': 0,
    'import/no-cycle': 'error',
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['sibling', 'parent', 'internal', 'index'],
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    strict: [0, 'global'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
