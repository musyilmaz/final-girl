module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [
      2,
      "always",
      ["core", "infra", "docs", "frontend", "ui", "lib"],
    ],
  },
};
