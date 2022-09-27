process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: ['src/*.spec.ts'],
		exclude: [
			'node_modules'
		],
		preprocessors: {
			'src/*.spec.ts': ['webpack', 'coverage']
		},
		plugins: [
			'karma-chrome-launcher',
			'karma-coverage',
			'karma-jasmine',
			'karma-webpack'
		],
		webpack: {
			// karma watches the test entry points
			// (you don't need to specify the entry option)
			// webpack watches dependencies
			resolve: {
				extensions: ['.ts', '.tsx', '.js'],
				fallback: {
					fs: false,
				}
			},
			devtool: 'inline-source-map',
			module: {
				rules: [
					{
						test: /\.tsx?$/,
						exclude: /node_modules/,
						loader: 'ts-loader'
					}
				]
			}
			// webpack configuration
		},
		coverageReporter: {
			type: 'lcov',
			dir: 'coverage/'
		},
		webpackMiddleware: {
			// webpack-dev-middleware configuration
			// i. e.
			stats: 'errors-only'
		},
		mime: {
			'text/x-typescript': ['ts', 'tsx']
		},
		reporters: ['progress', 'coverage'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['ChromeHeadless'],
		singleRun: true,
		concurrency: Infinity
	});
};
