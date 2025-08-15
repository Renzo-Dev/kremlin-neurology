import { defineConfig } from 'eslint/config'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import parserVue from 'vue-eslint-parser'
import prettierPlugin from 'eslint-plugin-prettier'

export default defineConfig([
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        parser: {
          js: 'espree', // парсер JS внутри <script>
          ts: '@typescript-eslint/parser', // если используешь TS
        },
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: globals.browser,
    },
    plugins: {
      vue: pluginVue,
      prettier: prettierPlugin,
    },
    rules: {
      ...pluginVue.configs['flat/essential'].rules,
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-components': 'warn',
      'prettier/prettier': 'warn',
    },
  },
])
