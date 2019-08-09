const  path = require('path')
const webpack = require('webpack-dev-server')
const hwp = require('html-webpack-plugin')

module.exports = {
    // 入口文件,webpack要对哪个文件进行打包
    entry: path.join(__dirname,'./src/main.js'),
    //出口文件
    output: {
        //打包后输出文件的目录
        path:path.join(__dirname,'./dist'),
        //打包后输出文件的名称
        filename: "bundle.js"
    },
    plugins: [
        new hwp({
            title: "首页",
            //模板路径
            template: path.resolve(__dirname,'src/index.html'),
            //自动生成的文件名,自动注入bundle.js
            filename: "index.html"

        })
    ],
    //配置第三方模块加载器
    module: {
        //配置第三方加载规则
        rules: [
            //使用正则表达式，匹配后缀名为.css的文件，按从右向左的顺序依次加载css-loader，style-loader
            {test: /\.css$/, use: ['style-loader','css-loader']},
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    }
}