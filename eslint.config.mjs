import enonicConfig from '@enonic/eslint-config';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const level = 'off';

export default [
  ...enonicConfig,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      }
    },
    rules: {
      // '@typescript-eslint/no-namespace': [
      //   'error',
      //   {
      //     allowDeclarations: true,
      //     // allowDefinitionFiles: true,
      //   },
      // ],
      // '@typescript-eslint/no-unnecessary-type-assertion': level,
      '@typescript-eslint/no-unsafe-assignment': level,
      '@typescript-eslint/no-unsafe-call': level,
      '@typescript-eslint/no-unsafe-member-access': level,
      '@typescript-eslint/no-unsafe-return': level,
    }
  },
  {
    ignores: [
      "build/**/*",
      "coverage/**/*",
      "node_modules/**/*",

      // TODO:
      // "src/bun/**/*",
      "src/jest/**/*",
      "src/test/**/*",
      "src/main/resources/**/*.d.ts",
      "tsup/**/*",
      "tsup/**/*.d.ts",

      // These cause: Parsing error: "parserOptions.project" has been provided for @typescript-eslint/parser
      "eslint.config.mjs",
      "tsup.config.ts",
      "vite.config.ts",
      "bin/**/*",
    ]
  }
];
