webpackHotUpdate(4,{

/***/ "./actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return validateToken; });
/* unused harmony export registerUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logoutUser; });
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

/***/ "./node_modules/next/router.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/router/index.js")


/***/ })

})
//# sourceMappingURL=4.4366f1801b453f21216f.hot-update.js.map