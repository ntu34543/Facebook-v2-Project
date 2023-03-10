module.exports = {
  root: true,
  extends: '@react-native-community',
};
module.exports = {
  root: true,
  extends: ['@react-native-community'],
  plugins: ['prettier', 'react', 'react-native', 'eslint-plugin-import'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react-native/no-unused-styles': 2,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': [
      2,
      {
        skip: ['Text.Text'],
      },
    ],
    'react-native/split-platform-components': 0,
    'react-hooks/exhaustive-deps': 0,
    'import/no-unresolved': 2,
    'no-unused-vars': 'off',
    'no-alert': 2,
    'no-console': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
        paths: ['src'],
      },
    },
  },
};
