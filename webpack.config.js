module.exports = {
	mode: 'development', // or 'production' or 'none'
	entry: './src/index.js', // your entry file
	output: {
		filename: 'bundle.js', // output filename
		path: __dirname + '/dist' // output directory
	}
};

//Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
//You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/