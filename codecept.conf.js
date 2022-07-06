require('ts-node/register');

exports.config = {
	tests: './*/*_test.ts',
	output: './output',
	helpers: {
		REST: {
			endpoint: 'https://qainterview.pythonanywhere.com',
		},
		JSONResponse: {}
	},
	include: {
		I: './steps_file.ts'
	},
	bootstrap: null,
	mocha: {},
	name: 'codeceptjs-api-tests-factorial',
	plugins: {
		allure: {
			outputDir: 'report',
			enabled: true
		}
	}
};
