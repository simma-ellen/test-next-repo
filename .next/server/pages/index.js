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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStory\": () => (/* binding */ getStory)\n/* harmony export */ });\n/* harmony import */ var _storyblok_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storyblok/react */ \"@storyblok/react\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_storyblok_react__WEBPACK_IMPORTED_MODULE_0__, swr__WEBPACK_IMPORTED_MODULE_1__]);\n([_storyblok_react__WEBPACK_IMPORTED_MODULE_0__, swr__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// const { serverRuntimeConfig } = getConfig();\n(0,_storyblok_react__WEBPACK_IMPORTED_MODULE_0__.storyblokInit)({\n    accessToken: \"SCWmH5n9jDiQDM7toIUdoAtt\",\n    use: [\n        _storyblok_react__WEBPACK_IMPORTED_MODULE_0__.apiPlugin\n    ],\n    // components: components,\n    apiOptions: {\n        cache: {\n            clear: \"auto\",\n            type: \"memory\"\n        }\n    }\n});\nconst storyblokApi = (0,_storyblok_react__WEBPACK_IMPORTED_MODULE_0__.getStoryblokApi)();\nasync function getStory(slug, params = {}) {\n    // const { data, error, isLoading } = useSWR(\"cdn/stories/settings\" + slug, {\n    // ...params,\n    // });\n    const { data , error , isLoading  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"cdn/stories/settings\");\n    // const result = await storyblokApi.get(\"cdn/stories/\" + slug, {\n    //   ...params,\n    // });\n    return data;\n// const response = result.data;\n// return response;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpL3N0b3J5Ymxvay50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkU7QUFFcEQ7QUFFekIsK0NBQStDO0FBRS9DRSwrREFBYUEsQ0FBQztJQUNaRSxhQUFhO0lBQ2JDLEtBQUs7UUFBQ0wsdURBQVNBO0tBQUM7SUFDaEIsMEJBQTBCO0lBQzFCTSxZQUFZO1FBQ1ZDLE9BQU87WUFDTEMsT0FBTztZQUNQQyxNQUFNO1FBQ1I7SUFDRjtBQUNGO0FBRUEsTUFBTUMsZUFBZVQsaUVBQWVBO0FBRTdCLGVBQWVVLFNBQVNDLElBQVksRUFBRUMsU0FBUyxDQUFDLENBQUMsRUFBRTtJQUN4RCw2RUFBNkU7SUFDN0UsYUFBYTtJQUNiLE1BQU07SUFDTixNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxVQUFTLEVBQUUsR0FBR2IsK0NBQU1BLENBQUM7SUFFMUMsaUVBQWlFO0lBQ2pFLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBT1c7QUFDUCxnQ0FBZ0M7QUFDaEMsbUJBQW1CO0FBQ3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXBpL3N0b3J5Ymxvay50cz81OGI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwaVBsdWdpbiwgZ2V0U3RvcnlibG9rQXBpLCBzdG9yeWJsb2tJbml0IH0gZnJvbSBcIkBzdG9yeWJsb2svcmVhY3RcIjtcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuLy8gY29uc3QgeyBzZXJ2ZXJSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcblxuc3RvcnlibG9rSW5pdCh7XG4gIGFjY2Vzc1Rva2VuOiBcIlNDV21INW45akRpUURNN3RvSVVkb0F0dFwiLFxuICB1c2U6IFthcGlQbHVnaW5dLFxuICAvLyBjb21wb25lbnRzOiBjb21wb25lbnRzLFxuICBhcGlPcHRpb25zOiB7XG4gICAgY2FjaGU6IHtcbiAgICAgIGNsZWFyOiBcImF1dG9cIixcbiAgICAgIHR5cGU6IFwibWVtb3J5XCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBzdG9yeWJsb2tBcGkgPSBnZXRTdG9yeWJsb2tBcGkoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0b3J5KHNsdWc6IHN0cmluZywgcGFyYW1zID0ge30pIHtcbiAgLy8gY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VTV1IoXCJjZG4vc3Rvcmllcy9zZXR0aW5nc1wiICsgc2x1Zywge1xuICAvLyAuLi5wYXJhbXMsXG4gIC8vIH0pO1xuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVNXUihcImNkbi9zdG9yaWVzL3NldHRpbmdzXCIpO1xuXG4gIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN0b3J5Ymxva0FwaS5nZXQoXCJjZG4vc3Rvcmllcy9cIiArIHNsdWcsIHtcbiAgLy8gICAuLi5wYXJhbXMsXG4gIC8vIH0pO1xuICByZXR1cm4gZGF0YTtcbiAgLy8gY29uc3QgcmVzcG9uc2UgPSByZXN1bHQuZGF0YTtcbiAgLy8gcmV0dXJuIHJlc3BvbnNlO1xufVxuIl0sIm5hbWVzIjpbImFwaVBsdWdpbiIsImdldFN0b3J5Ymxva0FwaSIsInN0b3J5Ymxva0luaXQiLCJ1c2VTV1IiLCJhY2Nlc3NUb2tlbiIsInVzZSIsImFwaU9wdGlvbnMiLCJjYWNoZSIsImNsZWFyIiwidHlwZSIsInN0b3J5Ymxva0FwaSIsImdldFN0b3J5Iiwic2x1ZyIsInBhcmFtcyIsImRhdGEiLCJlcnJvciIsImlzTG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/api/storyblok.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lib_api_storyblok__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/api/storyblok */ \"./lib/api/storyblok.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_api_storyblok__WEBPACK_IMPORTED_MODULE_2__]);\nlib_api_storyblok__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction Home(settings) {\n    // const { data, error, isLoading } = useSWR(\"/api/user\", fetcher);\n    console.log(settings);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Test Next App\"\n                }, void 0, false, {\n                    fileName: \"/Users/ellen/Repositories/test-next-repo/pages/index.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ellen/Repositories/test-next-repo/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"bg-yellow-200 min-h-screen flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold mb-10\",\n                        children: \"Try fetching some data\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ellen/Repositories/test-next-repo/pages/index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ellen/Repositories/test-next-repo/pages/index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ellen/Repositories/test-next-repo/pages/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nconst getStaticProps = async (context)=>{\n    const settings = await (0,lib_api_storyblok__WEBPACK_IMPORTED_MODULE_2__.getStory)(\"settings\");\n    return {\n        props: {\n            settings\n        },\n        revalidate: 3600\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFPTUE7QUFQdUI7QUFLZ0I7QUFJOUIsU0FBU0csS0FBS0MsUUFBYSxFQUFFO0lBQzFDLG1FQUFtRTtJQUNuRUMsUUFBUUMsR0FBRyxDQUFDRjtJQUVaLHFCQUNFOzswQkFDRSw4REFBQ0gsa0RBQUlBOzBCQUNILDRFQUFDTTs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNDO2dCQUFLQyxXQUFVOzBCQUNkLDRFQUFDQzs4QkFDQyw0RUFBQ0M7d0JBQUdGLFdBQVU7a0NBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkQsQ0FBQztBQUNNLE1BQU1HLGlCQUFzQyxPQUNqREMsVUFDRztJQUNILE1BQU1ULFdBQVcsTUFBTUYsMkRBQVFBLENBQUM7SUFFaEMsT0FBTztRQUNMWSxPQUFPO1lBQ0xWO1FBQ0Y7UUFDQVcsWUFBWTtJQUNkO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIkBuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMsIEdldFN0YXRpY1Byb3BzQ29udGV4dCB9IGZyb20gXCJuZXh0L3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRTdG9yeSB9IGZyb20gXCJsaWIvYXBpL3N0b3J5Ymxva1wiO1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoc2V0dGluZ3M6IGFueSkge1xuICAvLyBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVNXUihcIi9hcGkvdXNlclwiLCBmZXRjaGVyKTtcbiAgY29uc29sZS5sb2coc2V0dGluZ3MpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VGVzdCBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy15ZWxsb3ctMjAwIG1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItMTBcIj5UcnkgZmV0Y2hpbmcgc29tZSBkYXRhPC9oMT5cbiAgICAgICAgICB7LyogSSBoYXZlIHtkYXRhfSBtb25rZXkgZnJpZW5kcy4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wczxhbnk+ID0gYXN5bmMgKFxuICBjb250ZXh0OiBHZXRTdGF0aWNQcm9wc0NvbnRleHRcbikgPT4ge1xuICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGdldFN0b3J5KFwic2V0dGluZ3NcIik7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc2V0dGluZ3MsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAzNjAwLFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJpbnRlciIsIkhlYWQiLCJnZXRTdG9yeSIsIkhvbWUiLCJzZXR0aW5ncyIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInByb3BzIiwicmV2YWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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