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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export loginUser */
/* unused harmony export validateToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSavedLinks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookie__ = __webpack_require__("cookie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_action_types__ = __webpack_require__("./constants/action-types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_api_client_js__ = __webpack_require__("./src/api/client.js");




var client = new __WEBPACK_IMPORTED_MODULE_3__src_api_client_js__["a" /* default */]();
var loginUser = function loginUser(email, password) {
  return function (dispatch) {
    client.login(email, password).then(function (res) {
      __WEBPACK_IMPORTED_MODULE_0_next_router___default.a.push('/inbox');

      if (process.browser) {
        document.cookie = "zipp-token=".concat(res.data.token, "; expires=Fri, 31 Dec 9999 23:59:59 GMT");
      }

      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_2__constants_action_types__["b" /* LOGIN_USER */],
        payload: res.data
      });
    }).catch(function (e) {// dispatch({type: LOGIN_USER_FAILED, paylod: res})
    });
  };
};
var validateToken = function validateToken(token) {
  return function (dispatch) {
    client.validateToken(token).then(function (res) {
      __WEBPACK_IMPORTED_MODULE_0_next_router___default.a.push('/inbox');
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_2__constants_action_types__["b" /* LOGIN_USER */],
        payload: res.data
      });
    }).catch(function (e) {// not successful
    });
  };
};
var registerUser = function registerUser(email, password) {
  return function (dispatch) {
    client.register(email, password).then(function (res) {
      __WEBPACK_IMPORTED_MODULE_0_next_router___default.a.push('/inbox');
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_2__constants_action_types__["d" /* REGISTER_USER */],
        payload: res.data
      });
    }).catch(function (e) {// do something
    });
  };
};
var logoutUser = function logoutUser(token) {
  return function (dispatch) {
    __WEBPACK_IMPORTED_MODULE_0_next_router___default.a.push('/');

    if (process.browser) {
      document.cookie = "zipp-token= ; expires=Fri, 31 Dec 1970 23:59:59 GMT";
    }

    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__constants_action_types__["c" /* LOGOUT_USER */]
    });
  };
};
var getSavedLinks = function getSavedLinks(email, token) {
  return function (dispatch) {
    if (email && token) {
      client.getSavedLinks(email, token).then(function (res) {
        dispatch({
          type: __WEBPACK_IMPORTED_MODULE_2__constants_action_types__["a" /* GET_SAVED_LINKS */],
          payload: res.data
        });
      }).catch(function (e) {// do something
      });
    } else {
      if (process.browser) {
        __WEBPACK_IMPORTED_MODULE_0_next_router___default.a.replace('/login');
      }
    }
  };
};

/***/ }),

/***/ "./constants/action-types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGIN_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REGISTER_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGOUT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_SAVED_LINKS; });
/* unused harmony export SAVE_LINK */
/* unused harmony export DISMISS_LINK */
/* unused harmony export GET_BOOKMARKS */
/* unused harmony export ADD_BOOKMARK */
/* unused harmony export REMOVE_BOOKMARK */
// user
var LOGIN_USER = "LOGIN_USER";
var REGISTER_USER = "REGISTER_USER";
var LOGOUT_USER = "LOGOUT_USER"; // inbox

var GET_SAVED_LINKS = "GET_SAVED_LINKS";
var SAVE_LINK = "SAVE_LINK";
var DISMISS_LINK = "DISMISS_LINK"; // bookmarks

var GET_BOOKMARKS = "GET_BOOKMARKS";
var ADD_BOOKMARK = "ADD_BOOKMARK";
var REMOVE_BOOKMARK = "REMOVE_BOOKMARK";

/***/ }),

/***/ "./pages/signup/index.css":
/***/ (function(module, exports) {

module.exports = {
	"test": "_2iEyVFFqs-a99NFuyA1GF0"
};

/***/ }),

/***/ "./pages/signup/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_css__ = __webpack_require__("./pages/signup/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_RegisterForm__ = __webpack_require__("./src/components/RegisterForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_components_Page__ = __webpack_require__("./src/components/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__("./store/index.js");
var _jsxFileName = "/Users/Justin/Desktop/projects/zipp2-frontend/pages/signup/index.js";






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_components_Page__["a" /* default */], {
    pageName: "Sign Up",
    store: __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */],
    hideNav: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_components_RegisterForm__["a" /* default */], {
    store: __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
});

/***/ }),

/***/ "./reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_action_types__ = __webpack_require__("./constants/action-types.js");

var initialState = {
  user: {},
  savedLinks: [],
  bookmarks: {},
  newLinkModalVisible: false
};

var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_action_types__["d" /* REGISTER_USER */]:
      return Object.assign({}, state, {
        user: action.payload
      });

    case __WEBPACK_IMPORTED_MODULE_0__constants_action_types__["b" /* LOGIN_USER */]:
      return Object.assign({}, state, {
        user: action.payload
      });

    case __WEBPACK_IMPORTED_MODULE_0__constants_action_types__["c" /* LOGOUT_USER */]:
      return Object.assign({}, state, {
        user: {}
      });

    case __WEBPACK_IMPORTED_MODULE_0__constants_action_types__["a" /* GET_SAVED_LINKS */]:
      return Object.assign({}, state, {
        savedLinks: action.payload
      });
  }

  return state;
};

/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),

/***/ "./src/api/client.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ApiClient =
/*#__PURE__*/
function () {
  function ApiClient() {
    _classCallCheck(this, ApiClient);

    this.apiBase = function () {
      // t
      if (true) {
        return 'http://localhost:5000/api/';
      } else {
        return 'https://zipp-api.herokuapp.com/api/';
      }
    };
  }

  _createClass(ApiClient, [{
    key: "postBody",
    value: function postBody(data) {
      var postData = JSON.stringify(data);
      return {
        method: "post",
        body: postData,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      };
    }
  }, {
    key: "apiRequest",
    value: function apiRequest(path, options) {
      var base = this.apiBase();
      return fetch(base + path, options).then(function (res) {
        if (res.ok) {
          res.json();
        }
      }).then(function (result) {
        return result;
      }).catch(function (e) {
        return null;
      });
    }
  }, {
    key: "login",
    value: function login(email, password) {
      var auth = {
        "email": email,
        "password": password
      };
      var url = "".concat(this.apiBase(), "authenticate");
      return __WEBPACK_IMPORTED_MODULE_0_axios___default()({
        method: 'post',
        url: url,
        data: auth
      });
    }
  }, {
    key: "validateToken",
    value: function validateToken(token) {
      var url = "".concat(this.apiBase(), "validate");
      return __WEBPACK_IMPORTED_MODULE_0_axios___default()({
        method: 'post',
        url: url,
        headers: {
          Authorization: token
        }
      });
    }
  }, {
    key: "register",
    value: function register(email, password) {
      var auth = {
        "email": email,
        "password": password
      };
      var url = "".concat(this.apiBase(), "register");
      return __WEBPACK_IMPORTED_MODULE_0_axios___default()({
        method: 'post',
        url: url,
        data: auth
      });
    }
  }, {
    key: "getSavedLinks",
    value: function getSavedLinks(user, token) {
      var url = "".concat(this.apiBase(), "user/").concat(user, "/saved");
      return __WEBPACK_IMPORTED_MODULE_0_axios___default()({
        url: url,
        headers: {
          'Authorization': token
        }
      });
    }
  }, {
    key: "getBookmarks",
    value: function getBookmarks(user, token) {
      var url = "".concat(this.apiBase(), "user/").concat(user, "/bookmarked");
      return __WEBPACK_IMPORTED_MODULE_0_axios___default()({
        url: url,
        headers: {
          'Authorization': token
        }
      });
    }
  }, {
    key: "saveLink",
    value: function saveLink(user, token, link) {
      var url = "".concat(this.apiBase, "user/").concat(user, "/saved");
      return __WEBPACK_IMPORTED_MODULE_0_axios___default()({
        method: 'post',
        url: url,
        data: data,
        headers: {
          "Authorization": token
        }
      });
    }
  }]);

  return ApiClient;
}(); // var devClient = new ApiClient('localhost')
// var prodClient = new ApiClient('production')


/* harmony default export */ __webpack_exports__["a"] = (ApiClient);

/***/ }),

/***/ "./src/components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/Justin/Desktop/projects/zipp2-frontend/src/components/Header.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row justify-content-md-center mt-5 pt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, this.props.pageName))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* unused harmony default export */ var _unused_webpack_default_export = (Header);

/***/ }),

/***/ "./src/components/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_index__ = __webpack_require__("./actions/index.js");
var _jsxFileName = "/Users/Justin/Desktop/projects/zipp2-frontend/src/components/Nav.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Nav =
/*#__PURE__*/
function (_Component) {
  _inherits(Nav, _Component);

  function Nav(props) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));
    _this.handleSignOut = _this.handleSignOut.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Nav, [{
    key: "handleNavChange",
    value: function handleNavChange(event) {
      this.props.handleNavChange(event);
    }
  }, {
    key: "handleSignOut",
    value: function handleSignOut(event) {
      event.preventDefault();
      this.props.logoutUser();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.hide) {
        return null;
      } else {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "navbar navbar-expand-lg fixed-top p-3 px-md-4 mb-3 bg-white border-bottom box-shadow",
          role: "navbar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          id: "brand",
          className: "navbar-brand",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, "Zipp"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "navbar-nav mr-auto",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          id: "inbox",
          href: "/inbox",
          className: "nav-item nav-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, "Inbox"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          id: "bookmarks",
          href: "/bookmarks",
          onClick: this.props.handleNavChange,
          className: "nav-item nav-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, "Bookmarks")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "navbar-nav",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          className: "btn btn-sm btn-outline-primary",
          type: "button",
          "data-toggle": "modal",
          "data-target": "#linkInputModal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, "Save"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          id: "profile",
          href: "/profile",
          className: "nav-item nav-link mr-auto",
          onClick: this.props.handleNavChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, this.props.currentUser), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          id: "signOut",
          href: "",
          onClick: this.handleSignOut,
          className: "nav-item nav-link mr-auto",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, "sign out")));
      }
    }
  }]);

  return Nav;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    logoutUser: function logoutUser() {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_index__["b" /* logoutUser */])());
    }
  };
};

var ConnectedNav = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(null, mapDispatchToProps)(Nav);
/* harmony default export */ __webpack_exports__["a"] = (ConnectedNav);

/***/ }),

/***/ "./src/components/Page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Nav__ = __webpack_require__("./src/components/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__("./src/components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__("./store/index.js");
var _jsxFileName = "/Users/Justin/Desktop/projects/zipp2-frontend/src/components/Page.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page(props) {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));
  }

  _createClass(Page, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
        integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Nav__["a" /* default */], {
        store: __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */],
        hide: this.props.hideNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, this.props.children))));
    }
  }]);

  return Page;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Page);

/***/ }),

/***/ "./src/components/RegisterForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_index__ = __webpack_require__("./actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_client_js__ = __webpack_require__("./src/api/client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_validators__ = __webpack_require__("./src/utils/validators.js");
var _jsxFileName = "/Users/Justin/Desktop/projects/zipp2-frontend/src/components/RegisterForm.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var RegisterForm =
/*#__PURE__*/
function (_Component) {
  _inherits(RegisterForm, _Component);

  function RegisterForm(props) {
    var _this;

    _classCallCheck(this, RegisterForm);

    _this = _possibleConstructorReturn(this, (RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).call(this, props));
    _this.state = {
      emailInput: '',
      passwordInput: '',
      confirmPasswordInput: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RegisterForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      var name = event.target.name;
      var value = event.target.value;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault(); // validate email and password

      if (__WEBPACK_IMPORTED_MODULE_5__utils_validators__["a" /* default */].validateEmail(this.state.emailInput)) {
        if (__WEBPACK_IMPORTED_MODULE_5__utils_validators__["a" /* default */].validatePassword(this.state.passwordInput)) {
          if (this.state.passwordInput === this.state.confirmPasswordInput) {
            this.props.registerUser(this.state.emailInput, this.state.passwordInput, this.state.confirmPasswordInput);
          } else {// dispatch password mismatch error
          }
        } else {// dispatch invalid password error
          }
      } else {// dispatch invalid email error
        }
    }
  }, {
    key: "render",
    value: function render() {
      var _React$createElement, _React$createElement2, _React$createElement3;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row justify-content-md-center pt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Register"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        className: "form-group",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "m-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", (_React$createElement = {
        className: "form-control",
        type: "text",
        name: "emailInput",
        value: this.state.emailInput,
        onChange: this.handleChange
      }, _defineProperty(_React$createElement, "className", "form-control my-1"), _defineProperty(_React$createElement, "placeholder", "john@example.com"), _defineProperty(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 55
      }), _React$createElement))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "m-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", (_React$createElement2 = {
        className: "form-control",
        type: "password",
        name: "passwordInput",
        value: this.state.passwordInput,
        onChange: this.handleChange
      }, _defineProperty(_React$createElement2, "className", "form-control"), _defineProperty(_React$createElement2, "placeholder", "password"), _defineProperty(_React$createElement2, "__source", {
        fileName: _jsxFileName,
        lineNumber: 58
      }), _React$createElement2))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "m-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", (_React$createElement3 = {
        className: "form-control",
        type: "password",
        name: "confirmPasswordInput",
        value: this.state.confirmPasswordInput,
        onChange: this.handleChange
      }, _defineProperty(_React$createElement3, "className", "form-control"), _defineProperty(_React$createElement3, "placeholder", "password"), _defineProperty(_React$createElement3, "__source", {
        fileName: _jsxFileName,
        lineNumber: 61
      }), _React$createElement3))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "submit",
        value: "Register",
        className: "btn btn-primary btn-block my-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })), "already have an account? ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "log in"))));
    }
  }]);

  return RegisterForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    registerUser: function registerUser(email, password, confirmPassword) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_index__["c" /* registerUser */])(email, password, confirmPassword));
    }
  };
};

var Register = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(null, mapDispatchToProps)(RegisterForm);
/* harmony default export */ __webpack_exports__["a"] = (Register);

/***/ }),

/***/ "./src/utils/validators.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  validateLinkInput: function validateLinkInput(link) {
    var exp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
    var regexp = new RegExp(exp);

    if (link.match(regexp)) {
      return true;
    } else {
      return false;
    }
  },
  validateEmail: function validateEmail(email) {
    var exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var regexp = new RegExp(exp);

    if (email.match(regexp)) {
      return true;
    } else {
      return false;
    }
  },
  validatePassword: function validatePassword(pw) {
    if (pw.length < 7) {
      return true;
    } else {
      return false;
    }
  }
});

/***/ }),

/***/ "./store/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_index__ = __webpack_require__("./reducers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);



var storeEnhancers = __WEBPACK_IMPORTED_MODULE_0_redux__["compose"];
var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_1__reducers_index__["a" /* default */], storeEnhancers(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a)));
/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/signup/index.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "cookie":
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=signup.js.map