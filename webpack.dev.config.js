console.log("webpack.dev.config.js is running...");
var webpack = require('webpack');
var path = require('path');



module.exports= {
	entry:{
		index:path.resolve(__dirname,"./src/index.js")
	},
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"[name].[hash:7].min.js"
	},
	module:{
		loaders:[
			{
				test:/\.vue$/,
				loader:"vue"
			},
			{
				test:/\.js$/,
				loader:"babel-loader"
			},
			{
				test:/\.css$/,
				loader:"style!css"
			},
			{
				test:/\.(png|jpg)$/,
				loader:"url?limit=1024"
			}
		]
	}
	
}