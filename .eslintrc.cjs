/** @type {import("eslint").Linter.Config} */
module.exports = {
  settings: {
    "import/resolver": {
      typescript: { project: ["./tsconfig.json"] },
    },
    tailwindcss: {
      callees: ["cn"],
      config: "tailwind.config.ts",
    },
  },
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  overrides: [
    {
      // =================================================================
      // TypeScript EsLint (Configuration File)
      // =================================================================
      files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json"],
        ecmaVersion: "latest",
        sourceType: "module",
      },
      extends: ["next/core-web-vitals"],
    },
    {
      // =================================================================
      // JavaScript EsLint (Configuration File)
      // =================================================================
      files: ["*.js", "*.jsx", "*.mjs", "*.cjs"],
      extends: ["next/core-web-vitals"],
    },
  ],
};
