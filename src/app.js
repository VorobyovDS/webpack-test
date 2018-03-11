require('./common.scss');
// import './index.html'
require('./index.html');
require('./block/test.js');

import React from 'react';
import {render} from 'react-dom';
import Greeter from './block/Greeter'
//import { CometSpinLoader } from 'react-css-loaders';


// <CometSpinLoader color="#C5FF52" duration="10" size="200"/>,


render(
    <Greeter />,
    document.getElementById('root')
);







/*let name ="john", age =25;
let s =`Hello ${name}.${age+1}`;
console.log(s);*/
/*var x=1, y=2;
var obj ={x,y};
console.log(obj.x);*/
/*var [a,b,c] = [1,2,3];
[a,c]=[c,a]    //свап
console.log(a,c);
var {x,y,z}={x:1, y:2, z:3};
console.log(x,y,z);*/
/*let x = Symbol("this is x");
let y = Symbol();
console.log(x);*/
