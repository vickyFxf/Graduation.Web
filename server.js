var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var port = 3000;
var localhost = 'localhost';
var open = require('open');
var http=require('http');
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats:
        {
            assets: true,			// 增加资源信息
            assetsSort: "field",	// 对资源按指定的项进行排序
            cached: false,			// 增加缓存了的（但没构建）模块的信息
            children: false,		// 增加子级的信息
            colors: true,			// 等同于`webpack --colors`
            errors: true,			// 增加错误信息
            errorDetails: true,		// 增加错误的详细信息（就像解析日志一样）
            hash: true,				// 增加编译的哈希值
            modules: false,			// 增加内置的模块信息
            modulesSort: "field",	// 对模块按指定的项进行排序
            publicPath: true,		// 增加 publicPath 的信息
            reasons: true,			// 增加模块被引入的原因
            source: true,			// 增加模块的源码
            timings: true,			// 增加时间信
            version: false,			// 增加 webpack 版本信息
            warnings: true			// 增加提示
        },
}).listen(port, localhost, function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:' + port);
    open("http://localhost:3000/login.html")
});