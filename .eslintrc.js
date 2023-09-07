module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:markdown/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'unused-imports',
    'markdown',
    'prettier',
  ],
  overrides: [
    {
      files: ['src/packages/**/*.md'],
      processor: 'markdown/markdown',
    },
    {
      files: [
        'src/packages/**/*.md/*.ts',
        'src/packages/**/*.md/*.tsx',
        'src/packages/**/*.md/*.js',
        'src/packages/**/*.md/*.jsx',
      ],
      rules: {
        'no-nested-ternary': 0,
        '@typescript-eslint/no-explicit-any': 0,
        'unused-imports/no-unused-imports': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
      },
    },
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        printWidth: 80,
        proseWrap: 'preserve',
        endOfLine: 'auto',
      },
    ],
    radix: 0,
    'unused-imports/no-unused-imports': 2,
    'no-underscore-dangle': 0,
    'no-useless-constructor': 0,
    'no-await-in-loop': 0,
    'no-loop-func': 0,
    'consistent-return': 0,
    'max-classes-per-file': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'no-undef': 0,
    'no-shadow': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'no-script-url': 0,
    'no-restricted-syntax': 0,
    'no-unused-expressions': 0,
    'import/no-mutable-exports': 0,
    'jsx-a11y/no-autofocus': 0,
    'react/no-children-prop': 0,
    'react/no-danger': 0,
    'react/button-has-type': 0,
    'react/function-component-definition': 0,
    'react/jsx-no-useless-fragment': 0,
    'jsx-a11y/aria-proptypes': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'react/prop-types': 0,
    'react/no-array-index-key': 0,
    'react/static-property-placement': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'no-param-reassign': 0,
    'prefer-destructuring': 0,
    'react/require-default-props': 0,
    'react/sort-comp': [
      0,
      {
        order: ['constructor', 'lifecycle', 'everything-else', 'render'],
      },
    ],
    'no-bitwise': 0,
    'no-multi-assign': 0, // 禁止连续赋值
    'no-cond-assign': 0, // 禁止条件表达式中出现赋值操作符
  },
}
