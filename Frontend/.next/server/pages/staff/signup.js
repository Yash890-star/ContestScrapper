"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/staff/signup";
exports.ids = ["pages/staff/signup"];
exports.modules = {

/***/ "./pages/staff/signup.js":
/*!*******************************!*\
  !*** ./pages/staff/signup.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Signup = ()=>{\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const submitHandler = (event)=>{\n        event.preventDefault();\n        fetch(\"http://localhost:5001/staffRegister\", {\n            method: \"POST\",\n            credentials: \"include\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                name: name,\n                email: email,\n                password: password\n            })\n        }).then((response)=>response.json()).then((result)=>{\n            if (result.message === \"yes\") {\n                router.push(\"/staff/homepage\");\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col mx-auto justify-center items-center h-screen text-black\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center text-6xl mb-5 text-white\",\n                    children: \"Sign Up\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\Frontend\\\\pages\\\\staff\\\\signup.js\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-white text-xl mb-5\",\n                    children: \"Enter your credentials to continue\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\Frontend\\\\pages\\\\staff\\\\signup.js\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    placeholder: \"Name\",\n                    type: \"text\",\n                    className: \"border w-64 border-black rounded-lg p-2 my-2\",\n                    onChange: (e)=>setName(e.target.value)\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\Frontend\\\\pages\\\\staff\\\\signup.js\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    placeholder: \"Email\",\n                    type: \"text\",\n                    className: \"border w-64 border-black rounded-lg p-2 my-2\",\n                    onChange: (e)=>setEmail(e.target.value)\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\Frontend\\\\pages\\\\staff\\\\signup.js\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    placeholder: \"Password\",\n                    type: \"password\",\n                    className: \"border w-64 border-black rounded-lg p-2 my-2\",\n                    onChange: (e)=>setPassword(e.target.value)\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\Frontend\\\\pages\\\\staff\\\\signup.js\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-24 h-10 rounded-lg my-10\",\n                    onClick: submitHandler,\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\Frontend\\\\pages\\\\staff\\\\signup.js\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\Frontend\\\\pages\\\\staff\\\\signup.js\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdGFmZi9zaWdudXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUM7QUFDTztBQUV4QyxNQUFNRSxTQUFTLElBQU07SUFFakIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQTtJQUNoQyxNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBO0lBQ2xDLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUE7SUFDeEMsTUFBTVMsU0FBU1Isc0RBQVNBO0lBRXhCLE1BQU1TLGdCQUFnQixDQUFDQyxRQUFVO1FBQzdCQSxNQUFNQyxjQUFjO1FBQ3BCQyxNQUFNLHVDQUFzQztZQUN4Q0MsUUFBUTtZQUNSQyxhQUFhO1lBQ2JDLFNBQVM7Z0JBQUMsZ0JBQWU7WUFBa0I7WUFDM0NDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDakJoQixNQUFNQTtnQkFDTkUsT0FBT0E7Z0JBQ1BFLFVBQVVBO1lBQ2Q7UUFDSixHQUFHYSxJQUFJLENBQUNDLENBQUFBLFdBQVlBLFNBQVNDLElBQUksSUFBSUYsSUFBSSxDQUNyQ0csQ0FBQUEsU0FBVTtZQUNOLElBQUdBLE9BQU9DLE9BQU8sS0FBSyxPQUFNO2dCQUN4QmYsT0FBT2dCLElBQUksQ0FBQztZQUNoQixDQUFDO1FBQ0w7SUFFUjtJQUVBLHFCQUFTO2tCQUNMLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQXVDOzs7Ozs7OEJBQ3JELDhEQUFDRTtvQkFBRUYsV0FBVTs4QkFBMEI7Ozs7Ozs4QkFDdkMsOERBQUNHO29CQUFNQyxhQUFZO29CQUFPQyxNQUFLO29CQUFPTCxXQUFVO29CQUErQ00sVUFBVUMsQ0FBQUEsSUFBSzlCLFFBQVE4QixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs4QkFDcEksOERBQUNOO29CQUFNQyxhQUFZO29CQUFRQyxNQUFLO29CQUFPTCxXQUFVO29CQUErQ00sVUFBVUMsQ0FBQUEsSUFBSzVCLFNBQVM0QixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs4QkFDdEksOERBQUNOO29CQUFNQyxhQUFZO29CQUFXQyxNQUFLO29CQUFXTCxXQUFVO29CQUErQ00sVUFBVUMsQ0FBQUEsSUFBSzFCLFlBQVkwQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs4QkFDaEosOERBQUNDO29CQUFPVixXQUFVO29CQUE2QlcsU0FBUzVCOzhCQUFlOzs7Ozs7Ozs7Ozs7O0FBR25GO0FBRUEsaUVBQWVSLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9zdGFmZi9zaWdudXAuanM/Mzc1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFNpZ251cCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDEvc3RhZmZSZWdpc3Rlcicse1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIn0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihcclxuICAgICAgICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5tZXNzYWdlID09PSAneWVzJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9zdGFmZi9ob21lcGFnZScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9ICAgXHJcblxyXG4gICAgcmV0dXJuICggPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXgtYXV0byBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gdGV4dC1ibGFja1wiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC02eGwgbWItNSB0ZXh0LXdoaXRlXCI+U2lnbiBVcDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCBtYi01XCI+RW50ZXIgeW91ciBjcmVkZW50aWFscyB0byBjb250aW51ZTwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYm9yZGVyIHctNjQgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbGcgcC0yIG15LTJcIiBvbkNoYW5nZT17ZSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYm9yZGVyIHctNjQgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbGcgcC0yIG15LTJcIiBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJib3JkZXIgdy02NCBib3JkZXItYmxhY2sgcm91bmRlZC1sZyBwLTIgbXktMlwiIG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctMjQgaC0xMCByb3VuZGVkLWxnIG15LTEwXCIgb25DbGljaz17c3VibWl0SGFuZGxlcn0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz4gKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJTaWdudXAiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicm91dGVyIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsIm1lc3NhZ2UiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/staff/signup.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/staff/signup.js"));
module.exports = __webpack_exports__;

})();