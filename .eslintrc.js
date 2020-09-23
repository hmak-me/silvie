module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: ['airbnb-base', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'import/no-unresolved': 'off',
		'no-plusplus': 'off',
		'class-methods-use-this': 'off',
	},
	settings: {
		'prettier/prettier': ['error'],

		'import/resolver': {
			alias: {
				map: [
					['src', './src'],
					['base', './src/base'],
					['bootstrap', './src/bootstrap'],
					['controllers', './src/controllers'],
					['graphql', './src/graphql'],
					['middlewares', './src/middlewares'],
				],
				extensions: ['.js', '.ts', '.gql', '.json'],
			},
		},
	},

	overrides: [
		{
			files: ['**/*.ts'],

			extends: ['plugin:@typescript-eslint/recommended', 'airbnb-base', 'plugin:prettier/recommended'],
			parser: '@typescript-eslint/parser',

			plugins: ['@typescript-eslint', 'prettier'],
			rules: {
				'import/no-unresolved': 'off',
				'no-plusplus': 'off',
				'class-methods-use-this': 'off',
				'@typescript-eslint/no-namespace': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
			},
		},
	],
};