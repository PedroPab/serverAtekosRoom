import globals from 'globals'
import pluginJs from '@eslint/js'
// import tseslint from 'typescript-eslint'
//jest
import jest from 'eslint-plugin-jest'


export default [
	{ files: ['**/*.{js,mjs,cjs,ts}'] },
	{ languageOptions: { globals: globals.node } },
	pluginJs.configs.recommended,
	// ...tseslint.configs.recommended,
	{
		files: ['**/*.test.js'], // Configurar para los archivos de test
		...jest.configs['flat/recommended'], // Configurar las reglas recomendadas de Jest
		rules: {
			...jest.configs['flat/recommended'].rules, // Reglas recomendadas
			'jest/no-disabled-tests': 'warn',
			'jest/no-focused-tests': 'error',
			'jest/no-identical-title': 'error',
			'jest/prefer-to-have-length': 'warn',
			'jest/valid-expect': 'error'
		}
	},
	{
		rules: {
			'no-restricted-globals': ['error', 'name', 'length'],
			'prefer-arrow-callback': 'error',
			'quotes': ['error', 'single', { allowTemplateLiterals: true }],
			'semi': ['error', 'never'],
			'object-curly-spacing': ['error', 'always'],
			'require-jsdoc': 'off',
			'new-cap': ['error', { newIsCap: true, capIsNew: false }],
			'no-tabs': 'off', // Desactiva la prohibición de tabs
			//'indent': ['error', 'tab'], // Usa tabs para la indentación

		}
	}
]
