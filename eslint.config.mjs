import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module"
    },
    rules: {
      // Add any custom rules here
    }
  },
  // Override default ignores
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
