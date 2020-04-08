webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/layouts/layout.js":
/*!**************************************!*\
  !*** ./components/layouts/layout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//import Link from "next/link";


var Layout = function Layout(_ref) {
  var children = _ref.children;
  return __jsx("div", null, __jsx("ul", null, __jsx("li", null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    route: "/"
  }, __jsx("a", null, "Home"))), __jsx("li", null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    route: "/about"
  }, __jsx("a", null, "About"))), __jsx("li", null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    route: "user",
    params: {
      name: "admin"
    }
  }, __jsx("a", null, "User page")))), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=about.js.13bca853dd135ff57b15.hot-update.js.map