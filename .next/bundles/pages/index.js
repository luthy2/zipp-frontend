module.exports =
__NEXT_REGISTER_PAGE('/', function() {
          var comp =
      webpackJsonp([4],{

/***/ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.css":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:5)\nYou may need an appropriate loader to handle this file type.\n| body {\n|   margin: 0;\n|   padding: 0;");

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
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
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/App.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/Justin/Desktop/projects/zipp2-frontend/src/App.js: Unexpected token, expected \";\" (566:21)\n\n  564 | \n  565 |   render(){\n> 566 |     var gSignInStyle : {\n      |                      ^\n  567 |       width:500\n  568 |     }\n  569 |     return(\n    at _class.raise (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:2063:16)\n    at _class.semicolon (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:2047:40)\n    at _class.parseVarStatement (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:4370:10)\n    at _class.parseStatementContent (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:3976:21)\n    at _class.parseStatement (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:4470:23)\n    at _class.parseBlockBody (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:4457:10)\n    at _class.parseBlock (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:4446:10)\n    at _class.parseFunctionBody (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:3722:24)\n    at _class.parseFunctionBodyAndFinish (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:3702:10)\n    at _class.parseMethod (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:3654:10)\n    at _class.pushClassMethod (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:4847:30)\n    at _class.parseClassMemberWithIsStatic (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:4766:12)\n    at _class.parseClassMember (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:4708:10)\n    at _class.parseClassBody (/Users/Justin/Desktop/projects/zipp2-frontend/node_modules/@babel/core/node_modules/babylon/lib/index.js:4663:12)");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ })

},[3])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map