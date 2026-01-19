var GUI =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"editor": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/playground/editor.jsx","vendors~addon-settings~credits~editor~embed~fullscreen~player"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/lib/normalize.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/lib/normalize.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}\nbody{margin:0}\narticle,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}\naudio,canvas,progress,video{display:inline-block;vertical-align:baseline}\naudio:not([controls]){display:none;height:0}\n[hidden],template{display:none}\na{background-color:transparent}\na:active,a:hover{outline:0}\nabbr[title]{border-bottom:1px dotted}\nb,strong{font-weight:bold}\ndfn{font-style:italic}\nh1{font-size:2em;margin:.67em 0}\nmark{background:#ff0;color:#000}\nsmall{font-size:80%}\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\nsup{top:-0.5em}\nsub{bottom:-0.25em}\nimg{border:0}\nsvg:not(:root){overflow:hidden}\nfigure{margin:1em 40px}\nhr{box-sizing:content-box;height:0}\npre{overflow:auto}\ncode,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}\nbutton,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}\nbutton{overflow:visible}\nbutton,select{text-transform:none}\nbutton,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}\nbutton[disabled],html input[disabled]{cursor:default}\nbutton::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}\ninput{line-height:normal}\ninput[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}\ninput[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}\ninput[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}\ninput[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}\nfieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}\nlegend{border:0;padding:0}\ntextarea{overflow:auto}\noptgroup{font-weight:bold}\ntable{border-collapse:collapse;border-spacing:0}\ntd,th{padding:0}\n", ""]);

// exports


/***/ }),

/***/ "./src/lib/normalize.css":
/*!*******************************!*\
  !*** ./src/lib/normalize.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!./normalize.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/lib/normalize.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/lib/tw-polyfill.js":
/*!********************************!*\
  !*** ./src/lib/tw-polyfill.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable no-extend-native */

if (!Blob.prototype.text) {
  Blob.prototype.text = function () {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => resolve(fr.result);
      fr.onerror = () => reject(new Error('Cannot read blob as text'));
      fr.readAsText(this);
    });
  };
}
if (!Array.prototype.flat) {
  Array.prototype.flat = function () {
    let depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    const result = [];
    for (const i of this) {
      if (Array.isArray(i)) {
        if (depth < 1) {
          result.push(i);
        } else {
          for (const j of i.flat(depth - 1)) {
            result.push(j);
          }
        }
      } else {
        result.push(i);
      }
    }
    return result;
  };
}
if (!Array.prototype.flatMap) {
  Array.prototype.flatMap = function () {
    return this.map(...arguments).flat();
  };
}
if (typeof queueMicrotask !== 'function') {
  window.queueMicrotask = callback => {
    Promise.resolve().then(callback);
  };
}
if (!Object.fromEntries) {
  Object.fromEntries = function (entries) {
    const object = {};
    for (const entry of entries) {
      object[entry[0]] = entry[1];
    }
    return object;
  };
}

/***/ }),

/***/ "./src/playground/app-target.js":
/*!**************************************!*\
  !*** ./src/playground/app-target.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);


const appTarget = document.getElementById('app');

// Remove everything from the target to fix macOS Safari "Save Page As",
while (appTarget.firstChild) {
  appTarget.removeChild(appTarget.firstChild);
}
Object(react_modal__WEBPACK_IMPORTED_MODULE_1__["setAppElement"])(appTarget);
const render = children => {
  react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render(children, appTarget);
  if (window.SplashEnd) {
    window.SplashEnd();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ }),

/***/ "./src/playground/editor.jsx":
/*!***********************************!*\
  !*** ./src/playground/editor.jsx ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_first__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import-first */ "./src/playground/import-first.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _render_interface_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-interface.jsx */ "./src/playground/render-interface.jsx");
/* harmony import */ var _render_interface_jsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_render_interface_jsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-target */ "./src/playground/app-target.js");
/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */





Object(_app_target__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_render_interface_jsx__WEBPACK_IMPORTED_MODULE_2___default.a, null));

/***/ }),

/***/ "./src/playground/import-first.js":
/*!****************************************!*\
  !*** ./src/playground/import-first.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-path */ "./src/playground/public-path.js");
/* harmony import */ var _public_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_tw_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/tw-polyfill */ "./src/lib/tw-polyfill.js");
/* harmony import */ var _lib_tw_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_tw_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/normalize.css */ "./src/lib/normalize.css");
/* harmony import */ var _lib_normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_normalize_css__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/playground/public-path.js":
/*!***************************************!*\
  !*** ./src/playground/public-path.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
if (false) {}

/***/ }),

/***/ "./src/playground/render-interface.jsx":
/*!*********************************************!*\
  !*** ./src/playground/render-interface.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\src\\playground\\render-interface.jsx: [React Intl] Message Descriptors require an `id` and `defaultMessage`.\n\u001b[0m \u001b[90m 56 |\u001b[39m\n \u001b[90m 57 |\u001b[39m \u001b[36mconst\u001b[39m messages \u001b[33m=\u001b[39m defineMessages({\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 58 |\u001b[39m     defaultTitle\u001b[33m:\u001b[39m {\n \u001b[90m    |\u001b[39m                   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 59 |\u001b[39m         defaultMessage\u001b[33m:\u001b[39m \u001b[32m''\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 60 |\u001b[39m         description\u001b[33m:\u001b[39m \u001b[32m'Title of homepage'\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 61 |\u001b[39m         id\u001b[33m:\u001b[39m \u001b[32m'tw.guiDefaultTitle'\u001b[39m\u001b[0m\n    at File.buildCodeFrameError (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\core\\lib\\transformation\\file\\file.js:200:12)\n    at NodePath.buildCodeFrameError (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\path\\index.js:118:21)\n    at storeMessage (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\babel-plugin-react-intl\\dist\\index.js:119:20)\n    at processMessageObject (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\babel-plugin-react-intl\\dist\\index.js:297:21)\n    at Array.forEach (<anonymous>)\n    at PluginPass.CallExpression (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\babel-plugin-react-intl\\dist\\index.js:316:30)\n    at newFn (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\visitors.js:172:14)\n    at NodePath._call (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\path\\context.js:49:20)\n    at NodePath.call (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\path\\context.js:39:18)\n    at NodePath.visit (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\path\\context.js:88:31)\n    at TraversalContext.visitQueue (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\context.js:90:16)\n    at TraversalContext.visitSingle (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\context.js:66:19)\n    at TraversalContext.visit (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\context.js:113:19)\n    at traverseNode (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\traverse-node.js:131:17)\n    at NodePath.visit (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\path\\context.js:94:52)\n    at TraversalContext.visitQueue (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\context.js:90:16)\n    at TraversalContext.visitMultiple (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\context.js:62:17)\n    at TraversalContext.visit (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\context.js:111:19)\n    at traverseNode (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\traverse-node.js:131:17)\n    at NodePath.visit (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\path\\context.js:94:52)\n    at TraversalContext.visitQueue (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\context.js:90:16)\n    at TraversalContext.visitMultiple (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\context.js:62:17)\n    at TraversalContext.visit (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\context.js:111:19)\n    at traverseNode (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\traverse-node.js:131:17)\n    at NodePath.visit (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\path\\context.js:94:52)\n    at TraversalContext.visitQueue (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\context.js:90:16)\n    at TraversalContext.visitSingle (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\context.js:66:19)\n    at TraversalContext.visit (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\context.js:113:19)\n    at traverseNode (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\traverse-node.js:131:17)\n    at traverse (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\traverse\\lib\\index.js:53:34)\n    at transformFile (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\core\\lib\\transformation\\index.js:80:31)\n    at transformFile.next (<anonymous>)\n    at run (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\core\\lib\\transformation\\index.js:25:12)\n    at run.next (<anonymous>)\n    at transform (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\@babel\\core\\lib\\transform.js:22:33)\n    at transform.next (<anonymous>)\n    at step (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\gensync\\index.js:261:32)\n    at C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\gensync\\index.js:273:13\n    at async.call.result.err.err (C:\\Users\\jakev\\Desktop\\Turbowarp\\turbowarp-scratch-gui\\node_modules\\gensync\\index.js:223:11)");

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map