/*
 * @Author: Marte
 * @Date:   2017-06-12 21:38:15
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-06-20 22:18:53
 */

'use strict';
const path = require('path');

const webpackHtmlPlugin = require('webpack-html-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: __dirname + '/dist/',
        filename: 'js/[name].js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.(less|css)$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'postcss-loader', 'less-loader'],
                fallback: 'style-loader',
            })
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: __dirname + '/node_modules'
        }, {
            test: /\.(png|jpg|svg)$/i,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 2000,
                    name: 'images/[name]-[hash:5].[ext]'
                }
            }, {
                //压缩图片文件
                loader: 'img-loader'
            }]
        }, {
            test: /\.styl(us)?$/,
            use: [
                'style-loader', 'css-loader', {
                    loader: "postcss-loader",
                    options: {
                        plugins: function() {
                            return [
                                require('autoprefixer')
                            ];
                        }
                    }
                }, 'stylus-loader'
            ]
        }]
    },
    resolve: {
        alias: {
            'src': path.resolve(__dirname, 'src/')
        }
    },
    plugins: [
        new webpackHtmlPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: true,
            minify: {
                minifyCSS: true
            }
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            disable: false,
            allChunks: true,
        }),
    ],
    devServer: {
        contentBase: __dirname + '/dist',
        port: 9000, //设置端口号；
        compress: true, //设置gzip压缩;
        hot: true
    }
};