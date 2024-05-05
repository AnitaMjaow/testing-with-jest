const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: 'production', // or 'production' or 'none'
	entry: './src/index.js', // your entry file
	output: {
		path: path.resolve(__dirname, 'dist'), // output filename
		filename: 'main.js'// output directory
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [{
				context: __dirname + '/src/',
				from: '*.html'
			}]
		})
	]
};

// ERROR in unable to locate 'C:/Users/olsso/projekt/git-test/testing-with-jest/src/*.html' glob
// webpack 5.82.1 compiled with 1 error in 708 ms

//Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
//You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
