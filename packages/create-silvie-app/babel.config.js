module.exports = (api) => {
	api.cache(true);

	return {
		presets: [['@babel/preset-env', { modules: 'cjs', targets: { node: true } }], '@babel/preset-typescript'],
		plugins: [
			[
				'@babel/plugin-transform-typescript',
				{
					allowDeclareFields: true,
				},
			],
			'@babel/plugin-proposal-optional-chaining',
			['@babel/plugin-proposal-decorators', { legacy: true }],
			'@babel/plugin-proposal-export-default-from',
			'@babel/plugin-proposal-nullish-coalescing-operator',
			'@babel/plugin-proposal-do-expressions',
			'@babel/plugin-proposal-class-properties',
			'@babel/plugin-transform-named-capturing-groups-regex',
			'@babel/plugin-proposal-optional-catch-binding',
			[
				'wildcard-import',
				{ changeExtensions: { enabled: process.env.NODE_ENV === 'production', extensions: { ts: 'js' } } },
			],
			'import-graphql-files',
		],
	};
};
