module.exports = {
  extends: ['../../../test/.eslintrc.js'],
  globals: {
    expectDifferentResponseBodies: false,
    expectSameResponseBodies: false,
    generateCrossOriginUrl: false,
  },
  rules: {
    'no-unused-vars': 0,
  },
};