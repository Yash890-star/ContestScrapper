"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home/homepage",{

/***/ "./pages/home/homepage.js":
/*!********************************!*\
  !*** ./pages/home/homepage.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/navbar */ \"./components/navbar.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst HomePage = ()=>{\n    _s();\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    let a = [];\n    let body = [];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://localhost:5001/competitions\", {\n            credentials: \"include\"\n        }).then((response)=>response.json()).then((result)=>{\n            setResults(result);\n        });\n    }, []);\n    const remindHandler = async (event)=>{\n        event.preventDefault();\n        const elem = document.getElementById(event.target.name);\n        elem.innerHTML = \" \";\n        let y;\n        for (let x of results[event.target.value]){\n            if (x.name === event.target.name) {\n                y = x;\n            }\n        }\n        fetch(\"http://localhost:5001/setRemainder\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            credentials: \"include\",\n            body: JSON.stringify({\n                remainder: y\n            })\n        }).then((response)=>response.json()).then((result)=>{\n            if (result.message === \"yes\") {\n                console.log(\"done\");\n            }\n        });\n    };\n    if (results) {\n        for(let x in results){\n            let head = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-5xl w-1/2 mx-auto my-20\",\n                        children: x\n                    }, void 0, false, {\n                        fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\pages\\\\home\\\\homepage.js\",\n                        lineNumber: 52,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\pages\\\\home\\\\homepage.js\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\pages\\\\home\\\\homepage.js\",\n                lineNumber: 50,\n                columnNumber: 24\n            }, undefined);\n            a.push(head);\n            for (let y of results[x]){\n                let bodyInner = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    id: y.name,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"customGrid mx-auto text-center pt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"pt-1 text-xl\",\n                                        href: y.url,\n                                        children: y.name\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\pages\\\\home\\\\homepage.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"pt-1 text-sm timeContainer\",\n                                        children: y.start_time\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\pages\\\\home\\\\homepage.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\pages\\\\home\\\\homepage.js\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"pt-1\",\n                                    children: [\n                                        y.duration / 60,\n                                        \" mins\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\pages\\\\home\\\\homepage.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\pages\\\\home\\\\homepage.js\",\n                                lineNumber: 63,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \" px-4 h-10 rounded-lg\",\n                                    value: x,\n                                    name: y.name,\n                                    onClick: remindHandler,\n                                    children: \"Remind Me\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\pages\\\\home\\\\homepage.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\pages\\\\home\\\\homepage.js\",\n                                lineNumber: 66,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\pages\\\\home\\\\homepage.js\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\pages\\\\home\\\\homepage.js\",\n                    lineNumber: 57,\n                    columnNumber: 33\n                }, undefined);\n                body.push(bodyInner);\n            }\n            let z = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/6 mx-auto p-4 rounded-2xl compContainer\",\n                children: body\n            }, void 0, false, {\n                fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\pages\\\\home\\\\homepage.js\",\n                lineNumber: 73,\n                columnNumber: 21\n            }, undefined);\n            a.push(z);\n            body = [];\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\pages\\\\home\\\\homepage.js\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, undefined),\n            a.length !== 0 ? a : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-4xl mt-10 text-white \",\n                children: \"Loading Please wait...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\pages\\\\home\\\\homepage.js\",\n                lineNumber: 84,\n                columnNumber: 31\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-10\"\n            }, void 0, false, {\n                fileName: \"D:\\\\newwebdev\\\\vueScrapper\\\\client\\\\pages\\\\home\\\\homepage.js\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(HomePage, \"eIDL3atRCRjHJtkVdhpFgVDMoVU=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUViLFdBQVU7MEJBQXlDOzs7Ozt5QkFBMEI7MEJBQ3RHLDhEQUFDRDtnQkFBSUMsV0FBVTs7Ozs7Ozs7QUFJdkI7R0FwRk1qQztLQUFBQTtBQXNGTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ob21lL2hvbWVwYWdlLmpzP2YwZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiQC9jb21wb25lbnRzL25hdmJhclwiO1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIGxldCBhID0gW11cclxuICAgIGxldCBib2R5ID0gW11cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDEvY29tcGV0aXRpb25zJywge1xyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdHMocmVzdWx0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCByZW1pbmRIYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQubmFtZSlcclxuICAgICAgICBlbGVtLmlubmVySFRNTCA9IFwiIFwiXHJcbiAgICAgICAgbGV0IHlcclxuICAgICAgICBmb3IobGV0IHggb2YgcmVzdWx0c1tldmVudC50YXJnZXQudmFsdWVdKXtcclxuICAgICAgICAgICAgaWYgKHgubmFtZSA9PT0gZXZlbnQudGFyZ2V0Lm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgeSA9IHhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3NldFJlbWFpbmRlcicse1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9LFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHJlbWFpbmRlcjogeVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKFxyXG4gICAgICAgICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0Lm1lc3NhZ2UgPT09IFwieWVzXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZG9uZVwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXN1bHRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCBpbiByZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIGxldCBoZWFkID0gPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIHctMS8yIG14LWF1dG8gbXktMjBcIj57eH08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBhLnB1c2goaGVhZClcclxuICAgICAgICAgICAgZm9yIChsZXQgeSBvZiByZXN1bHRzW3hdKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm9keUlubmVyID0gPGRpdiBjbGFzc05hbWU9XCJcIiBpZD17eS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbUdyaWQgbXgtYXV0byB0ZXh0LWNlbnRlciBwdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwdC0xIHRleHQteGxcIiBocmVmPXt5LnVybH0+e3kubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHQtMSB0ZXh0LXNtIHRpbWVDb250YWluZXJcIj57eS5zdGFydF90aW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInB0LTFcIj57eS5kdXJhdGlvbi82MH0gbWluczwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBweC00IGgtMTAgcm91bmRlZC1sZ1wiIHZhbHVlPXt4fSBuYW1lPXt5Lm5hbWV9IG9uQ2xpY2s9e3JlbWluZEhhbmRsZXJ9PlJlbWluZCBNZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYm9keS5wdXNoKGJvZHlJbm5lcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgeiA9IDxkaXYgY2xhc3NOYW1lPVwidy0zLzYgbXgtYXV0byBwLTQgcm91bmRlZC0yeGwgY29tcENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAge2JvZHl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBhLnB1c2goeilcclxuICAgICAgICAgICAgYm9keSA9IFtdXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgPE5hdmJhci8+XHJcbiAgICAgICAge2EubGVuZ3RoICE9PSAwID8gYSA6IDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNHhsIG10LTEwIHRleHQtd2hpdGUgXCI+TG9hZGluZyBQbGVhc2Ugd2FpdC4uLjwvcD59XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMFwiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvPik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdmJhciIsIkhvbWVQYWdlIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJhIiwiYm9keSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwicmVtaW5kSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRhcmdldCIsIm5hbWUiLCJpbm5lckhUTUwiLCJ5IiwieCIsInZhbHVlIiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZW1haW5kZXIiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImhlYWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInB1c2giLCJib2R5SW5uZXIiLCJpZCIsImhyZWYiLCJ1cmwiLCJzdGFydF90aW1lIiwiZHVyYXRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwieiIsImxlbmd0aCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home/homepage.js\n"));

/***/ })

});