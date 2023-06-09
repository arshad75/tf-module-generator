// NOTE: commitlint error when 'ticket' is not provided is unclear: https://github.com/conventional-changelog/commitlint/issues/607
// ⧗   input: feat: no ticket
// ✖   subject may not be empty [subject-empty]
// ✖   type may not be empty [type-empty]

module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      // <type>(<ticket>): <subject>
      // e.g. fix(CCOE-73): install homebrew with bash
      headerPattern: /^(\w+)(\(CCOE-\d+\)):\s(.*)$/,
      headerCorrespondence: ["type", "ticket", "subject"],
    },
  },
  rules: {
    "body-max-line-length": [2, "always", 120],
    "footer-max-line-length": [2, "always", 120],
    "header-max-length": [2, "always", 72],
  },
};
