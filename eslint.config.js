import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'


export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-restricted-globals': ['error', 'name', 'length'],
      'prefer-arrow-callback': 'error',
      'quotes': ['error', 'single', { allowTemplateLiterals: true }],
      'semi': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'require-jsdoc': 'off',
      'new-cap': ['error', { newIsCap: true, capIsNew: false }],
    }
}
]
