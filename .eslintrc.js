module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 10,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'prettier/prettier': 'error',
    'no-use-before-define': 'off',
    'consistent-return': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/jsx-one-expression-per-line': 'off',
    'global-require': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    semi: [2, 'never'],
    'no-extra-boolean-cast': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/no-named-default': 'off',
    'no-throw-literal': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
}
