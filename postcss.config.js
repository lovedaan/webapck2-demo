/*
 * @Author: Marte
 * @Date:   2017-06-13 19:05:53
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-06-13 19:06:15
 */

'use strict';

module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: 'last 5 version' //前五种浏览器版本
        })
    ]
};