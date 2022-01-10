module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['US', 'DE', 'ZD'],
    },
  },
  rules: {
    'references-empty': [1, 'never'],
    'body-max-line-length': [0, 'always', 'Infinity'],
  },
};
