webpackHotUpdate(6,{

/***/ "./actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export loginUser */
/* unused harmony export validateToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSavedLinks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookie__ = __webpack_require__("./node_modules/cookie/index.js");
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/components/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
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

var ConnectedNav = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* connect */])(null, mapDispatchToProps)(Nav);
/* harmony default export */ __webpack_exports__["a"] = (ConnectedNav);

/***/ }),

/***/ "./src/components/RegisterForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("./node_modules/next/router.js");
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

var Register = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* connect */])(null, mapDispatchToProps)(RegisterForm);
/* harmony default export */ __webpack_exports__["a"] = (Register);

/***/ })

})
//# sourceMappingURL=6.62fec2448694a168a20a.hot-update.js.map