module.exports = {
  root: true,
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    // allow console during development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^__' }]
  }
};
