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
exports.id = "pages/auth/signup";
exports.ids = ["pages/auth/signup"];
exports.modules = {

/***/ "./pages/auth/signup.js":
/*!******************************!*\
  !*** ./pages/auth/signup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Signup = ()=>{\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const submitHandler = (event)=>{\n        event.preventDefault();\n        fetch(\"http://localhost:5001/register\", {\n            method: \"POST\",\n            credentials: \"include\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                name: name,\n                email: email,\n                password: password\n            })\n        }).then((response)=>response.json()).then((result)=>{\n            if (result.message === \"yes\") {\n                router.push(\"/select/competition\");\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col mx-auto justify-center items-center h-screen text-black\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center text-6xl mb-5 text-white\",\n                    children: \"Sign Up\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\Frontend\\\\pages\\\\auth\\\\signup.js\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-white text-xl mb-5\",\n                    children: \"Enter your credentials to continue\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\Frontend\\\\pages\\\\auth\\\\signup.js\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    placeholder: \"Name\",\n                    type: \"text\",\n                    className: \"border w-64 border-black rounded-lg p-2 my-2\",\n                    onChange: (e)=>setName(e.target.value)\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\Frontend\\\\pages\\\\auth\\\\signup.js\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    placeholder: \"Email\",\n                    type: \"text\",\n                    className: \"border w-64 border-black rounded-lg p-2 my-2\",\n                    onChange: (e)=>setEmail(e.target.value)\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\Frontend\\\\pages\\\\auth\\\\signup.js\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    placeholder: \"Password\",\n                    type: \"password\",\n                    className: \"border w-64 border-black rounded-lg p-2 my-2\",\n                    onChange: (e)=>setPassword(e.target.value)\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\Frontend\\\\pages\\\\auth\\\\signup.js\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-24 h-10 rounded-lg my-10\",\n                    onClick: submitHandler,\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\Frontend\\\\pages\\\\auth\\\\signup.js\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\Frontend\\\\pages\\\\auth\\\\signup.js\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ251cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNPO0FBRXhDLE1BQU1FLFNBQVMsSUFBTTtJQUVqQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBO0lBQ2hDLE1BQU0sQ0FBQ0ssT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUE7SUFDbEMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQTtJQUN4QyxNQUFNUyxTQUFTUixzREFBU0E7SUFFeEIsTUFBTVMsZ0JBQWdCLENBQUNDLFFBQVU7UUFDN0JBLE1BQU1DLGNBQWM7UUFDcEJDLE1BQU0sa0NBQWlDO1lBQ25DQyxRQUFRO1lBQ1JDLGFBQWE7WUFDYkMsU0FBUztnQkFBQyxnQkFBZTtZQUFrQjtZQUMzQ0MsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNqQmhCLE1BQU1BO2dCQUNORSxPQUFPQTtnQkFDUEUsVUFBVUE7WUFDZDtRQUNKLEdBQUdhLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSSxJQUFJRixJQUFJLENBQ3JDRyxDQUFBQSxTQUFVO1lBQ04sSUFBR0EsT0FBT0MsT0FBTyxLQUFLLE9BQU07Z0JBQ3hCZixPQUFPZ0IsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTDtJQUVSO0lBRUEscUJBQVM7a0JBQ0wsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBdUM7Ozs7Ozs4QkFDckQsOERBQUNFO29CQUFFRixXQUFVOzhCQUEwQjs7Ozs7OzhCQUN2Qyw4REFBQ0c7b0JBQU1DLGFBQVk7b0JBQU9DLE1BQUs7b0JBQU9MLFdBQVU7b0JBQStDTSxVQUFVQyxDQUFBQSxJQUFLOUIsUUFBUThCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7OzhCQUNwSSw4REFBQ047b0JBQU1DLGFBQVk7b0JBQVFDLE1BQUs7b0JBQU9MLFdBQVU7b0JBQStDTSxVQUFVQyxDQUFBQSxJQUFLNUIsU0FBUzRCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7OzhCQUN0SSw4REFBQ047b0JBQU1DLGFBQVk7b0JBQVdDLE1BQUs7b0JBQVdMLFdBQVU7b0JBQStDTSxVQUFVQyxDQUFBQSxJQUFLMUIsWUFBWTBCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7OzhCQUNoSiw4REFBQ0M7b0JBQU9WLFdBQVU7b0JBQTZCVyxTQUFTNUI7OEJBQWU7Ozs7Ozs7Ozs7Ozs7QUFHbkY7QUFFQSxpRUFBZVIsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2F1dGgvc2lnbnVwLmpzPzU2ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBTaWdudXAgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3JlZ2lzdGVyJyx7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwifSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKFxyXG4gICAgICAgICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0Lm1lc3NhZ2UgPT09ICd5ZXMnKXtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL3NlbGVjdC9jb21wZXRpdGlvbicpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9ICAgXHJcblxyXG4gICAgcmV0dXJuICggPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXgtYXV0byBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gdGV4dC1ibGFja1wiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC02eGwgbWItNSB0ZXh0LXdoaXRlXCI+U2lnbiBVcDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCBtYi01XCI+RW50ZXIgeW91ciBjcmVkZW50aWFscyB0byBjb250aW51ZTwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYm9yZGVyIHctNjQgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbGcgcC0yIG15LTJcIiBvbkNoYW5nZT17ZSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYm9yZGVyIHctNjQgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbGcgcC0yIG15LTJcIiBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJib3JkZXIgdy02NCBib3JkZXItYmxhY2sgcm91bmRlZC1sZyBwLTIgbXktMlwiIG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctMjQgaC0xMCByb3VuZGVkLWxnIG15LTEwXCIgb25DbGljaz17c3VibWl0SGFuZGxlcn0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz4gKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJTaWdudXAiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicm91dGVyIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsIm1lc3NhZ2UiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/signup.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signup.js"));
module.exports = __webpack_exports__;

})();