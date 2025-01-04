import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    rules: {
      "no-console": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "no-trailing-spaces": "warn",
      eqeqeq: ["warn", "always"],
      quotes: ["warn", "double", { avoidEscape: true }],
      semi: ["error", "always"],
      "react-hooks/exhaustive-deps": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];

export default eslintConfig;
