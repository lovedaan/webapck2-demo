/*
 * @Author: Marte
 * @Date:   2017-06-12 21:36:01
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-06-20 22:15:40
 */

'use strict';
/*require('./css/a.less');

const objH = require('./js/header.js');*/
//import 'src/css/a.less'
import 'src/css/b.styl'

import objH from 'src/js/header.js'

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showName() {
        console.log(this.name);
    }
}

var p1 = new Person('张三', 18);

p1.showName();

let [a, b, c] = [1, 2, 3];

console.log(objH.name);