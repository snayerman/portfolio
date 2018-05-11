var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'./src/index.jsx'
	],
  output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
  },
  module: {
    	loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel-loader'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
					   name: '[name].[ext]',
						outputPath: 'fonts/'
					}
				}]
		   }
   	]
 	}
}
