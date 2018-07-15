module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.css":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:5)\nYou may need an appropriate loader to handle this file type.\n| body {\n|   margin: 0;\n|   padding: 0;");

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_css__ = __webpack_require__("./pages/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_App__ = __webpack_require__("./src/App.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_App__);
throw new Error("Cannot find module \"~/src/registerServiceWorker\"");
var _jsxFileName = "/Users/Justin/Desktop/projects/zipp2-frontend/pages/index.js";





__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_App__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  }
}), document.getElementById('root'));
__WEBPACK_IMPORTED_MODULE_4__src_registerServiceWorker___default()();

/***/ }),

/***/ "./src/App.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/Justin/Desktop/projects/zipp2-frontend/src/App.js: Unexpected token, expected \";\" (566:21)\n\n  564 | \n  565 |   render(){\n> 566 |     var gSignInStyle : {\n      |                      ^\n  567 |       width:500\n  568 |     }\n  569 |     return(\n    at _class.raise (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:2063:16)\n    at _class.semicolon (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:2047:40)\n    at _class.parseVarStatement (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:4370:10)\n    at _class.parseStatementContent (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:3976:21)\n    at _class.parseStatement (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:4470:23)\n    at _class.parseBlockBody (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:4457:10)\n    at _class.parseBlock (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:4446:10)\n    at _class.parseFunctionBody (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:3722:24)\n    at _class.parseFunctionBodyAndFinish (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:3702:10)\n    at _class.parseMethod (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:3654:10)\n    at _class.pushClassMethod (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:4847:30)\n    at _class.parseClassMemberWithIsStatic (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:4766:12)\n    at _class.parseClassMember (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:4708:10)\n    at _class.parseClassBody (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:4663:12)");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map