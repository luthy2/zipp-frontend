webpackHotUpdate(5,{

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

/***/ "./src/components/LinkList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_client__ = __webpack_require__("./src/api/client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LinkItem__ = __webpack_require__("./src/components/LinkItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_index__ = __webpack_require__("./actions/index.js");
var _jsxFileName = "/Users/Justin/Desktop/projects/zipp2-frontend/src/components/LinkList.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var LinkList =
/*#__PURE__*/
function (_Component) {
  _inherits(LinkList, _Component);

  function LinkList(props) {
    var _this;

    _classCallCheck(this, LinkList);

    _this = _possibleConstructorReturn(this, (LinkList.__proto__ || Object.getPrototypeOf(LinkList)).call(this, props));
    _this.dismissLinkItem = _this.dismissLinkItem.bind(_assertThisInitialized(_this));
    _this.bookmarkLinkItem = _this.bookmarkLinkItem.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LinkList, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // console.log(this.props.user.token)
      this.props.getSavedLinks(this.props.user.email, this.props.user.token);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {// const currentUser = this.state.currentUser
      // const token = this.state.currentUserToken
      // const queryPath = apiBase+'user/'+currentUser+'/saved'
      // var resp = apiClient.apiRequest(queryPath, {headers:{'Authorization':token}})
      // if (resp){
      //   resp.then((r)=>{
      //     this.setState({
      //           inboxIsLoaded: true,
      //           inboxItems:r,
      //         })
      //   })
      // }
    }
  }, {
    key: "dismissLinkItem",
    value: function dismissLinkItem(linkId) {// this.props.dismissLinkItem(linkId)
    }
  }, {
    key: "bookmarkLinkItem",
    value: function bookmarkLinkItem(linkId) {// this.props.bookmarkLinkItem(linkId)
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var error = this.props.inboxError;
      var isLoaded = this.props.inboxIsLoaded;
      var items = this.props.savedLinks;

      if (error) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, "Error: ", error.message);
      } else if (!isLoaded) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "spinner",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "bounce1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "bounce2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "bounce3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }));
      } else {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "row justify-content-md-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, items.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__LinkItem__["a" /* default */], {
            item: item,
            dismissLinkItem: _this2.dismissLinkItem,
            bookmarkLinkItem: _this2.bookmarkLinkItem,
            key: item.id.toString(),
            token: _this2.props.currentUserToken,
            currentUser: _this2.props.currentUser,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          });
        })));
      }
    }
  }]);

  return LinkList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state
/*, ownProps*/
) {
  return {
    user: state.user,
    savedLinks: state.savedLinks
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getSavedLinks: function getSavedLinks(email, token) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_index__["a" /* getSavedLinks */])(email, token));
    }
  };
};

var Inbox = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* connect */])(mapStateToProps, mapDispatchToProps)(LinkList);
/* harmony default export */ __webpack_exports__["a"] = (Inbox);

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

/***/ })

})
//# sourceMappingURL=5.62fec2448694a168a20a.hot-update.js.map