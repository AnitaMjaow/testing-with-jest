const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		mode: 'none'
	}
};

//Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
//You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/