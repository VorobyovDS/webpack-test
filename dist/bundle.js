/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./common.scss */ \"./src/common.scss\");\n// import './index.html'\n__webpack_require__(/*! ./index.html */ \"./src/index.html\");\n__webpack_require__(/*! ./block/test.js */ \"./src/block/test.js\");\n\n/*let name =\"john\", age =25;\r\nlet s =`Hello ${name}.${age+1}`;\r\nconsole.log(s);*/\n/*var x=1, y=2;\r\nvar obj ={x,y};\r\nconsole.log(obj.x);*/\n/*var [a,b,c] = [1,2,3];\r\n[a,c]=[c,a]    //свап\r\nconsole.log(a,c);\r\nvar {x,y,z}={x:1, y:2, z:3};\r\nconsole.log(x,y,z);*/\n/*let x = Symbol(\"this is x\");\r\nlet y = Symbol();\r\nconsole.log(x);*/\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/block/test.js":
/*!***************************!*\
  !*** ./src/block/test.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n    let el = document.querySelector(\".title-link\");\n    let el_text = document.querySelector(\".title-link .title\");\n\n    function getRandomColor() {\n        let letters = '0123456789ABCDEF';\n        let color = '#';\n        for (let i = 0; i < 6; i++) {\n            color += letters[Math.floor(Math.random() * 16)];\n        }\n        return color;\n    }\n\n    el.onclick = function (e) {\n        e.preventDefault();\n        el_text.style.color = getRandomColor();\n    };\n})();\n\n//# sourceURL=webpack:///./src/block/test.js?");

/***/ }),

/***/ "./src/common.scss":
/*!*************************!*\
  !*** ./src/common.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/common.scss?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<html> <head> <meta charset=UTF-8> <meta name=viewport content=\\\"width=device-width,initial-scale=1\\\"> <title>webpack</title> </head> <body> <a href=\\\"\\\" class=title-link><p class=title> test WebPack 4 </p></a> </body> </html>\";\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ })

/******/ });