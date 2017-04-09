console.log("webpack.dev.config.js is running...");
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var vue = require('vue-loader');

module.exports= {
	//context: __dirname + "/app",
	entry:{
		index:path.resolve(__dirname,"./src/script/index.js"),
		utils:path.resolve(__dirname,"./src/script/utils/utils.js")
	},
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"js/[name].[hash:7].min.js"
	},
	resolve:{
		extensions: ['', '.js', '.vue', '.styl']
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
	},
	plugins:[
		new HtmlWebpackPlugin({
		filename: 'index.html',
		template: './template/index.html',
		inject: 'head',
		title: 'My App',
		favicon:'./images/favico.ico',
		minify:true,
		hash:true,
		cache:false,
		showErrors:false,
		"chunks": {
			"head" : {
				"entry" : "assets/head_bundle.js",
				"css" : ["main.css"]
			},
			xhtml : false
		}
	}),
	   new webpack.ProvidePlugin({
	       $: "jquery",
	       jQuery: "jquery",
	       "window.jQuery": "jquery"
	   })
		
	]
	
}


