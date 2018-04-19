/*
 * @Author: VickyFan 
 * @Date: 2018-03-01 09:12:02 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-16 17:28:59
 */
var path = require('path');
var proxy = require('http-proxy-middleware');
module.exports = {
  //入口
  entry: [
    path.resolve(__dirname, 'src/App.js')
  ],
  //出口
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'
      }, {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
        include: path.join(__dirname, './src/styles')
      }, {
        test: /\.(gif|jpg|png)$/,
        loader: 'url-loader?limit=8192&name=images/[name].[ext]'
      }
    ]
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.douban.com',  //设置的是代理对象地址
        pathRewrite: { '^/api': '/' },    //重新路径
        changeOrigin: true
      }
    }
  }
}