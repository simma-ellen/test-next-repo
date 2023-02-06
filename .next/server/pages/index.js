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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/api/storyblok.ts":
/*!******************************!*\
  !*** ./lib/api/storyblok.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStory\": () => (/* binding */ getStory)\n/* harmony export */ });\n/* harmony import */ var _storyblok_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storyblok/react */ \"@storyblok/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_storyblok_react__WEBPACK_IMPORTED_MODULE_0__]);\n_storyblok_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n(0,_storyblok_react__WEBPACK_IMPORTED_MODULE_0__.storyblokInit)({\n    accessToken: \"SCWmH5n9jDiQDM7toIUdoAtt\",\n    use: [\n        _storyblok_react__WEBPACK_IMPORTED_MODULE_0__.apiPlugin\n    ],\n    apiOptions: {\n        cache: {\n            clear: \"auto\",\n            type: \"memory\"\n        }\n    }\n});\nconst storyblokApi = (0,_storyblok_react__WEBPACK_IMPORTED_MODULE_0__.getStoryblokApi)();\nasync function getStory(slug, params = {}) {\n    const result = await storyblokApi.get(\"cdn/stories/\" + slug, {\n        ...params\n    });\n    const response = result.data;\n    return response;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpL3N0b3J5Ymxvay50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2RTtBQUU3RUUsK0RBQWFBLENBQUM7SUFDWkMsYUFBYTtJQUNiQyxLQUFLO1FBQUNKLHVEQUFTQTtLQUFDO0lBQ2hCSyxZQUFZO1FBQ1ZDLE9BQU87WUFDTEMsT0FBTztZQUNQQyxNQUFNO1FBQ1I7SUFDRjtBQUNGO0FBRUEsTUFBTUMsZUFBZVIsaUVBQWVBO0FBRTdCLGVBQWVTLFNBQVNDLElBQVksRUFBRUMsU0FBUyxDQUFDLENBQUMsRUFBRTtJQUN4RCxNQUFNQyxTQUFTLE1BQU1KLGFBQWFLLEdBQUcsQ0FBQyxpQkFBaUJILE1BQU07UUFDM0QsR0FBR0MsTUFBTTtJQUNYO0lBQ0EsTUFBTUcsV0FBV0YsT0FBT0csSUFBSTtJQUM1QixPQUFPRDtBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXBpL3N0b3J5Ymxvay50cz81OGI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwaVBsdWdpbiwgZ2V0U3RvcnlibG9rQXBpLCBzdG9yeWJsb2tJbml0IH0gZnJvbSBcIkBzdG9yeWJsb2svcmVhY3RcIjtcblxuc3RvcnlibG9rSW5pdCh7XG4gIGFjY2Vzc1Rva2VuOiBcIlNDV21INW45akRpUURNN3RvSVVkb0F0dFwiLFxuICB1c2U6IFthcGlQbHVnaW5dLFxuICBhcGlPcHRpb25zOiB7XG4gICAgY2FjaGU6IHtcbiAgICAgIGNsZWFyOiBcImF1dG9cIixcbiAgICAgIHR5cGU6IFwibWVtb3J5XCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBzdG9yeWJsb2tBcGkgPSBnZXRTdG9yeWJsb2tBcGkoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0b3J5KHNsdWc6IHN0cmluZywgcGFyYW1zID0ge30pIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RvcnlibG9rQXBpLmdldChcImNkbi9zdG9yaWVzL1wiICsgc2x1Zywge1xuICAgIC4uLnBhcmFtcyxcbiAgfSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gcmVzdWx0LmRhdGE7XG4gIHJldHVybiByZXNwb25zZTtcbn1cbiJdLCJuYW1lcyI6WyJhcGlQbHVnaW4iLCJnZXRTdG9yeWJsb2tBcGkiLCJzdG9yeWJsb2tJbml0IiwiYWNjZXNzVG9rZW4iLCJ1c2UiLCJhcGlPcHRpb25zIiwiY2FjaGUiLCJjbGVhciIsInR5cGUiLCJzdG9yeWJsb2tBcGkiLCJnZXRTdG9yeSIsInNsdWciLCJwYXJhbXMiLCJyZXN1bHQiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/api/storyblok.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var lib_api_storyblok__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/api/storyblok */ \"./lib/api/storyblok.ts\");\n/* harmony import */ var _storyblok_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @storyblok/react */ \"@storyblok/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__, lib_api_storyblok__WEBPACK_IMPORTED_MODULE_3__, _storyblok_react__WEBPACK_IMPORTED_MODULE_4__]);\n([swr__WEBPACK_IMPORTED_MODULE_2__, lib_api_storyblok__WEBPACK_IMPORTED_MODULE_3__, _storyblok_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction Home(fallbackSettings) {\n    const storyblokApi = (0,_storyblok_react__WEBPACK_IMPORTED_MODULE_4__.getStoryblokApi)();\n    (0,_storyblok_react__WEBPACK_IMPORTED_MODULE_4__.storyblokInit)({\n        accessToken: \"SCWmH5n9jDiQDM7toIUdoAtt\",\n        use: [\n            _storyblok_react__WEBPACK_IMPORTED_MODULE_4__.apiPlugin\n        ],\n        apiOptions: {\n            cache: {\n                clear: \"auto\",\n                type: \"memory\"\n            }\n        }\n    });\n    const fetcher = async (url)=>await storyblokApi.get(url).then((res)=>res.data);\n    const { data , error , isLoading  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"cdn/stories/settings\", fetcher);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Test Next App\"\n                }, void 0, false, {\n                    fileName: \"/Users/ellenbrage/Repositories/test-next-repo/pages/index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ellenbrage/Repositories/test-next-repo/pages/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"bg-yellow-200 min-h-screen flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl font-bold mb-10\",\n                            children: \"Try fetching some data\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ellenbrage/Repositories/test-next-repo/pages/index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"Loading…\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ellenbrage/Repositories/test-next-repo/pages/index.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_2__.SWRConfig, {\n                            value: {\n                                fallbackSettings\n                            },\n                            children: JSON.stringify(data)\n                        }, void 0, false, {\n                            fileName: \"/Users/ellenbrage/Repositories/test-next-repo/pages/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ellenbrage/Repositories/test-next-repo/pages/index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ellenbrage/Repositories/test-next-repo/pages/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nconst getStaticProps = async (context)=>{\n    const fallbackSettings = await (0,lib_api_storyblok__WEBPACK_IMPORTED_MODULE_3__.getStory)(\"settings\");\n    return {\n        props: {\n            fallbackSettings\n        },\n        revalidate: 3600\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUVXO0FBR0s7QUFDZ0M7QUFFOUQsU0FBU08sS0FBS0MsZ0JBQXFCLEVBQUU7SUFDbEQsTUFBTUMsZUFBZUosaUVBQWVBO0lBQ3BDQywrREFBYUEsQ0FBQztRQUNaSSxhQUFhO1FBQ2JDLEtBQUs7WUFBQ1AsdURBQVNBO1NBQUM7UUFDaEJRLFlBQVk7WUFDVkMsT0FBTztnQkFDTEMsT0FBTztnQkFDUEMsTUFBTTtZQUNSO1FBQ0Y7SUFDRjtJQUNBLE1BQU1DLFVBQVUsT0FBT0MsTUFDckIsTUFBTVIsYUFBYVMsR0FBRyxDQUFDRCxLQUFLRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtJQUNwRCxNQUFNLEVBQUVBLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxVQUFTLEVBQUUsR0FBR3RCLCtDQUFNQSxDQUFDLHdCQUF3QmU7SUFFbEUscUJBQ0U7OzBCQUNFLDhEQUFDaEIsa0RBQUlBOzBCQUNILDRFQUFDd0I7OEJBQU07Ozs7Ozs7Ozs7OzBCQUVULDhEQUFDQztnQkFBS0MsV0FBVTswQkFDZCw0RUFBQ0M7O3NDQUNDLDhEQUFDQzs0QkFBR0YsV0FBVTtzQ0FBMkI7Ozs7Ozt3QkFDeENILDJCQUFhLDhEQUFDSTtzQ0FBSTs7Ozs7O3NDQUVuQiw4REFBQ3pCLDBDQUFTQTs0QkFBQzJCLE9BQU87Z0NBQUVyQjs0QkFBaUI7c0NBQ2xDc0IsS0FBS0MsU0FBUyxDQUFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01QixDQUFDO0FBQ00sTUFBTVcsaUJBQXNDLE9BQ2pEQyxVQUNHO0lBQ0gsTUFBTXpCLG1CQUFtQixNQUFNTCwyREFBUUEsQ0FBQztJQUV4QyxPQUFPO1FBQ0wrQixPQUFPO1lBQ0wxQjtRQUNGO1FBQ0EyQixZQUFZO0lBQ2Q7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwiQG5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCB1c2VTV1IsIHsgU1dSQ29uZmlnIH0gZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUHJvcHNDb250ZXh0IH0gZnJvbSBcIm5leHQvdHlwZXNcIjtcbmltcG9ydCB7IGdldFN0b3J5IH0gZnJvbSBcImxpYi9hcGkvc3RvcnlibG9rXCI7XG5pbXBvcnQgeyBhcGlQbHVnaW4sIGdldFN0b3J5Ymxva0FwaSwgc3RvcnlibG9rSW5pdCB9IGZyb20gXCJAc3RvcnlibG9rL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoZmFsbGJhY2tTZXR0aW5nczogYW55KSB7XG4gIGNvbnN0IHN0b3J5Ymxva0FwaSA9IGdldFN0b3J5Ymxva0FwaSgpO1xuICBzdG9yeWJsb2tJbml0KHtcbiAgICBhY2Nlc3NUb2tlbjogXCJTQ1dtSDVuOWpEaVFETTd0b0lVZG9BdHRcIixcbiAgICB1c2U6IFthcGlQbHVnaW5dLFxuICAgIGFwaU9wdGlvbnM6IHtcbiAgICAgIGNhY2hlOiB7XG4gICAgICAgIGNsZWFyOiBcImF1dG9cIixcbiAgICAgICAgdHlwZTogXCJtZW1vcnlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IGZldGNoZXIgPSBhc3luYyAodXJsOiBzdHJpbmcpID0+XG4gICAgYXdhaXQgc3RvcnlibG9rQXBpLmdldCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVNXUihcImNkbi9zdG9yaWVzL3NldHRpbmdzXCIsIGZldGNoZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VGVzdCBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy15ZWxsb3ctMjAwIG1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItMTBcIj5UcnkgZmV0Y2hpbmcgc29tZSBkYXRhPC9oMT5cbiAgICAgICAgICB7aXNMb2FkaW5nICYmIDxkaXY+TG9hZGluZ+KApjwvZGl2Pn1cbiAgICAgICAgICB7LyogQHRzLWlnbm9yZSAgKi99XG4gICAgICAgICAgPFNXUkNvbmZpZyB2YWx1ZT17eyBmYWxsYmFja1NldHRpbmdzIH19PlxuICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KGRhdGEpfVxuICAgICAgICAgIDwvU1dSQ29uZmlnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHM8YW55PiA9IGFzeW5jIChcbiAgY29udGV4dDogR2V0U3RhdGljUHJvcHNDb250ZXh0XG4pID0+IHtcbiAgY29uc3QgZmFsbGJhY2tTZXR0aW5ncyA9IGF3YWl0IGdldFN0b3J5KFwic2V0dGluZ3NcIik7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZmFsbGJhY2tTZXR0aW5ncyxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDM2MDAsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTV1IiLCJTV1JDb25maWciLCJnZXRTdG9yeSIsImFwaVBsdWdpbiIsImdldFN0b3J5Ymxva0FwaSIsInN0b3J5Ymxva0luaXQiLCJIb21lIiwiZmFsbGJhY2tTZXR0aW5ncyIsInN0b3J5Ymxva0FwaSIsImFjY2Vzc1Rva2VuIiwidXNlIiwiYXBpT3B0aW9ucyIsImNhY2hlIiwiY2xlYXIiLCJ0eXBlIiwiZmV0Y2hlciIsInVybCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJ0aXRsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInByb3BzIiwicmV2YWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@storyblok/react":
/*!***********************************!*\
  !*** external "@storyblok/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@storyblok/react");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();