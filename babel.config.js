module.exports = (api) => {
	api.cache(true);

	return {
		presets: [['@babel/preset-env', { modules: 'cjs' }], '@babel/preset-typescript'],
		plugins: [
			'@babel/plugin-proposal-optional-chaining',
			['@babel/plugin-proposal-decorators', { legacy: true }],
			'@babel/plugin-proposal-export-default-from',
			'@babel/plugin-proposal-nullish-coalescing-operator',
			'@babel/plugin-proposal-do-expressions',
			'@babel/plugin-proposal-class-properties',
			'@babel/plugin-transform-named-capturing-groups-regex',
			'@babel/plugin-proposal-optional-catch-binding',
			[
				'module-resolver',
				{
					root: ['./'],
					alias: {
						src: './src',
						base: './src/base',
						bootstrap: './src/bootstrap',
						controllers: './src/controllers',
						middlewares: './src/middlewares',
					},
				},
			],
			[
				'wildcard',
				{
					exts: ['js', 'ts', 'json', 'gql'],
					noModifyCase: true,
				},
			],
		],
	};
};
