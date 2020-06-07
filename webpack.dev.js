const path = require("path");
const merge = require('webpack-merge');
const webpack = require("webpack");
const common= require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true,
        watchContentBase: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})