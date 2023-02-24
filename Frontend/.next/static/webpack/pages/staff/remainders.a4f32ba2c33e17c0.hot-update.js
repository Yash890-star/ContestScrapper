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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst StaffNavbar = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [excel, setExcel] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const logoutHandler = ()=>{\n        fetch(\"http://localhost:5001/logout\", {\n            credentials: \"include\"\n        }).then((response)=>response.json()).then((data)=>{\n            if (data.body === \"success\") {\n                router.push(\"/auth/login\");\n            }\n        });\n    };\n    const fecthHandler = ()=>{\n        fetch(\"http://localhost:5001/createExcel\", {\n            credentials: \"include\"\n        }).then((res)=>res.json()).then((data)=>setExcel());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center py-8 navContainer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/staff/homepage\",\n                    className: \"text-2xl mx-4\",\n                    children: \"Competitions\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\components\\\\staffNavbar.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/staff/remainders\",\n                    className: \"text-2xl mx-4\",\n                    children: \"Remainders\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\components\\\\staffNavbar.js\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"text-2xl mx-4\",\n                    onClick: fecthHandler,\n                    children: \"Fetch Excel data\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\components\\\\staffNavbar.js\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"text-2xl mx-4\",\n                    onClick: logoutHandler,\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\components\\\\staffNavbar.js\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\components\\\\staffNavbar.js\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(StaffNavbar, \"Oru7xSb3f/J10mFCmuGgm5ABvaw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = StaffNavbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StaffNavbar);\nvar _c;\n$RefreshReg$(_c, \"StaffNavbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0YWZmTmF2YmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1c7QUFDUDtBQUVqQyxNQUFNRyxjQUFjLElBQU07O0lBRXRCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBO0lBRWxDLE1BQU1LLGdCQUFnQixJQUFNO1FBQ3hCQyxNQUFNLGdDQUErQjtZQUNqQ0MsYUFBYTtRQUNqQixHQUFHQyxJQUFJLENBQUNDLENBQUFBLFdBQVlBLFNBQVNDLElBQUksSUFBSUYsSUFBSSxDQUNyQ0csQ0FBQUEsT0FBUTtZQUNKLElBQUdBLEtBQUtDLElBQUksS0FBSyxXQUFVO2dCQUN2QlYsT0FBT1csSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTDtJQUVSO0lBRUEsTUFBTUMsZUFBZSxJQUFNO1FBQ3ZCUixNQUFNLHFDQUFxQztZQUN2Q0MsYUFBYTtRQUNqQixHQUFHQyxJQUFJLENBQUNPLENBQUFBLE1BQU9BLElBQUlMLElBQUksSUFBSUYsSUFBSSxDQUMzQkcsQ0FBQUEsT0FBUVA7SUFFaEI7SUFFQSxxQkFBUztrQkFDTCw0RUFBQ1k7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNuQixrREFBSUE7b0JBQUNvQixNQUFLO29CQUFrQkQsV0FBVTs4QkFBZ0I7Ozs7Ozs4QkFDdkQsOERBQUNuQixrREFBSUE7b0JBQUNvQixNQUFLO29CQUFvQkQsV0FBVTs4QkFBZ0I7Ozs7Ozs4QkFDekQsOERBQUNFO29CQUFPRixXQUFVO29CQUFnQkcsU0FBU047OEJBQWM7Ozs7Ozs4QkFDekQsOERBQUNLO29CQUFPRixXQUFVO29CQUFnQkcsU0FBU2Y7OEJBQWU7Ozs7Ozs7Ozs7Ozs7QUFHdEU7R0FqQ01KOztRQUVhRixrREFBU0E7OztLQUZ0QkU7QUFtQ04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdGFmZk5hdmJhci5qcz9jOGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTdGFmZk5hdmJhciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW2V4Y2VsLCBzZXRFeGNlbF0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgY29uc3QgbG9nb3V0SGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL2xvZ291dCcse1xyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXHJcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5ib2R5ID09PSAnc3VjY2Vzcycpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvYXV0aC9sb2dpbicpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmVjdGhIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDEvY3JlYXRlRXhjZWwnLCB7XHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKFxyXG4gICAgICAgICAgICBkYXRhID0+IHNldEV4Y2VsKClcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICggPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHktOCBuYXZDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdGFmZi9ob21lcGFnZVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIG14LTRcIj5Db21wZXRpdGlvbnM8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3RhZmYvcmVtYWluZGVyc1wiIGNsYXNzTmFtZT1cInRleHQtMnhsIG14LTRcIj5SZW1haW5kZXJzPC9MaW5rPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtMnhsIG14LTRcIiBvbkNsaWNrPXtmZWN0aEhhbmRsZXJ9PkZldGNoIEV4Y2VsIGRhdGE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBteC00XCIgb25DbGljaz17bG9nb3V0SGFuZGxlcn0+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz4gKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFN0YWZmTmF2YmFyOyJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJTdGFmZk5hdmJhciIsInJvdXRlciIsImV4Y2VsIiwic2V0RXhjZWwiLCJsb2dvdXRIYW5kbGVyIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiYm9keSIsInB1c2giLCJmZWN0aEhhbmRsZXIiLCJyZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/staffNavbar.js\n"));

/***/ })

});