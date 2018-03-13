/**
 * Created by VickyFan on 2018/3/12.
 */
var path = require('path');
var proxy = require('http-proxy-middleware');

module.exports = {
    entry:[
        path.resolve(__dirname,"src/App.js")
    ],
    output:{
        path:path.resolve(__dirname,"dist/"),
        filename:'bundle.js',
        publicPath: '/static/'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader:'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'
            },{
                test: /\.(scss|css)$/,
                use: ['style-loader','css-loader','sass-loader'],
                exclude: /node_modules/,
                include: path.join(__dirname, './src/styles')
            }
        ]
    },
    devServer:{
        proxy:{
            '/api':{
                target:'http://api.douban.com',  //设置的是代理对象地址
                pathRewrite:{'^/api':'/'},       //重新路径
                changeOrigin:true
            }
        }
    }
}