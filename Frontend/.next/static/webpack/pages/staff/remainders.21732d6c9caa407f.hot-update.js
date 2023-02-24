"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/staff/remainders",{

/***/ "./components/staffNavbar.js":
/*!***********************************!*\
  !*** ./components/staffNavbar.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst StaffNavbar = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const logoutHandler = ()=>{\n        fetch(\"http://localhost:5001/logout\", {\n            credentials: \"include\"\n        }).then((response)=>response.json()).then((data)=>{\n            if (data.body === \"success\") {\n                router.push(\"/auth/login\");\n            }\n        });\n    };\n    const fecthHandler = ()=>{\n        fetch(\"http://localhost:5001/createExcel\", {\n            credentials: \"include\"\n        }).then((res)=>res.jsno);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center py-8 navContainer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/staff/homepage\",\n                    className: \"text-2xl mx-4\",\n                    children: \"Competitions\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\components\\\\staffNavbar.js\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/staff/remainders\",\n                    className: \"text-2xl mx-4\",\n                    children: \"Remainders\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\components\\\\staffNavbar.js\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"text-2xl mx-4\",\n                    onClick: fecthHandler,\n                    children: \"Fetch Excel data\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\components\\\\staffNavbar.js\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"text-2xl mx-4\",\n                    onClick: logoutHandler,\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\components\\\\staffNavbar.js\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\components\\\\staffNavbar.js\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(StaffNavbar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = StaffNavbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StaffNavbar);\nvar _c;\n$RefreshReg$(_c, \"StaffNavbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0YWZmTmF2YmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QjtBQUNXO0FBRXhDLE1BQU1FLGNBQWMsSUFBTTs7SUFFdEIsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBRXhCLE1BQU1HLGdCQUFnQixJQUFNO1FBQ3hCQyxNQUFNLGdDQUErQjtZQUNqQ0MsYUFBYTtRQUNqQixHQUFHQyxJQUFJLENBQUNDLENBQUFBLFdBQVlBLFNBQVNDLElBQUksSUFBSUYsSUFBSSxDQUNyQ0csQ0FBQUEsT0FBUTtZQUNKLElBQUdBLEtBQUtDLElBQUksS0FBSyxXQUFVO2dCQUN2QlIsT0FBT1MsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTDtJQUVSO0lBRUEsTUFBTUMsZUFBZSxJQUFNO1FBQ3ZCUixNQUFNLHFDQUFxQztZQUN2Q0MsYUFBYTtRQUNqQixHQUFHQyxJQUFJLENBQUNPLENBQUFBLE1BQU9BLElBQUlDLElBQUk7SUFDM0I7SUFFQSxxQkFBUztrQkFDTCw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNqQixrREFBSUE7b0JBQUNrQixNQUFLO29CQUFrQkQsV0FBVTs4QkFBZ0I7Ozs7Ozs4QkFDdkQsOERBQUNqQixrREFBSUE7b0JBQUNrQixNQUFLO29CQUFvQkQsV0FBVTs4QkFBZ0I7Ozs7Ozs4QkFDekQsOERBQUNFO29CQUFPRixXQUFVO29CQUFnQkcsU0FBU1A7OEJBQWM7Ozs7Ozs4QkFDekQsOERBQUNNO29CQUFPRixXQUFVO29CQUFnQkcsU0FBU2hCOzhCQUFlOzs7Ozs7Ozs7Ozs7O0FBR3RFO0dBOUJNRjs7UUFFYUQsa0RBQVNBOzs7S0FGdEJDO0FBZ0NOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3RhZmZOYXZiYXIuanM/YzhjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgU3RhZmZOYXZiYXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBsb2dvdXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDEvbG9nb3V0Jyx7XHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLmJvZHkgPT09ICdzdWNjZXNzJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9hdXRoL2xvZ2luJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmZWN0aEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9jcmVhdGVFeGNlbCcsIHtcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc25vKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB5LTggbmF2Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3RhZmYvaG9tZXBhZ2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBteC00XCI+Q29tcGV0aXRpb25zPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3N0YWZmL3JlbWFpbmRlcnNcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBteC00XCI+UmVtYWluZGVyczwvTGluaz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBteC00XCIgb25DbGljaz17ZmVjdGhIYW5kbGVyfT5GZXRjaCBFeGNlbCBkYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC0yeGwgbXgtNFwiIG9uQ2xpY2s9e2xvZ291dEhhbmRsZXJ9PkxvZ291dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC8+ICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTdGFmZk5hdmJhcjsiXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsIlN0YWZmTmF2YmFyIiwicm91dGVyIiwibG9nb3V0SGFuZGxlciIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImJvZHkiLCJwdXNoIiwiZmVjdGhIYW5kbGVyIiwicmVzIiwianNubyIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/staffNavbar.js\n"));

/***/ })

});