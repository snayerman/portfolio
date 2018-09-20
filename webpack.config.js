var path = require('path');
var webpack = require('webpack');

module.exports = {
	// devtool: 'eval',
	devtool: 'source-map',
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
				loader: "style-loader",
				options: {
					sourceMap: true
				}
			},
			{
				test: /\.scss$/,
				loader: "css-loader",
				options: {
					sourceMap: true
				}
			},
			{
				test: /\.scss$/,
				loader: "sass-loader",
				options: {
					sourceMap: true
				}
         },
         {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
               'file-loader',
               {
                  loader: 'image-webpack-loader',
                  options: {
                  bypassOnDebug: true,
                  },
               },
            ],
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
