var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge')
var webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
    entry: './examples/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'webi.js'
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../dist/index.html'),
            template: path.join(__dirname, '../examples/index.html')
        })
    ]
})
