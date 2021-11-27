module.exports = {
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
  ],
  rules: {
    'vue/require-default-prop': 'off',
    'max-len': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
