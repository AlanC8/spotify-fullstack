"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/create-album/page",{

/***/ "(app-pages-browser)/./src/app/create-album/page.tsx":
/*!***************************************!*\
  !*** ./src/app/create-album/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst CreatePage = ()=>{\n    _s();\n    const [playlist, setPlaylist] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        description: \"\"\n    });\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const createPlaylist = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3000/api/v1/playlists\", {\n                name: playlist.name,\n                description: playlist.description\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(localStorage.getItem(\"access\"))\n                }\n            });\n            console.log(response.data);\n            router.push(\"/playlist/\".concat(response.data._id));\n        } catch (error) {\n            console.error(\"Error creating playlist:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-4 py-6\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white shadow-md rounded-lg p-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold mb-4\",\n                    children: \"Создать плейлист\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\create-album\\\\page.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: playlist.name,\n                            onChange: (e)=>setPlaylist({\n                                    ...playlist,\n                                    name: e.target.value\n                                }),\n                            placeholder: \"Название плейлиста\",\n                            className: \"w-full p-2 border border-gray-300 rounded-lg\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\create-album\\\\page.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: playlist.description,\n                            onChange: (e)=>setPlaylist({\n                                    ...playlist,\n                                    description: e.target.value\n                                }),\n                            placeholder: \"Описание плейлиста\",\n                            className: \"w-full p-2 border border-gray-300 rounded-lg\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\create-album\\\\page.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\create-album\\\\page.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: createPlaylist,\n                    className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4\",\n                    children: \"Создать плейлист\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\create-album\\\\page.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\create-album\\\\page.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\create-album\\\\page.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CreatePage, \"2oglFzBe5fVYHSj6bvhtiTss8xI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = CreatePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreatePage);\nvar _c;\n$RefreshReg$(_c, \"CreatePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY3JlYXRlLWFsYnVtL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzBCO0FBQ2tCO0FBQ0o7QUFFeEMsTUFBTUksYUFBYTs7SUFDakIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdILCtDQUFRQSxDQUFDO1FBQ3ZDSSxNQUFNO1FBQ05DLGFBQWE7SUFDZjtJQUVBLE1BQU1DLFNBQVNSLDBEQUFTQTtJQUV4QixNQUFNUyxpQkFBaUI7UUFDckIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTVgsNkNBQUtBLENBQUNZLElBQUksQ0FDL0IsMENBQ0E7Z0JBQ0VMLE1BQU1GLFNBQVNFLElBQUk7Z0JBQ25CQyxhQUFhSCxTQUFTRyxXQUFXO1lBQ25DLEdBQ0E7Z0JBQ0VLLFNBQVM7b0JBQ1BDLGVBQWUsVUFBeUMsT0FBL0JDLGFBQWFDLE9BQU8sQ0FBQztnQkFDaEQ7WUFDRjtZQUVGQyxRQUFRQyxHQUFHLENBQUNQLFNBQVNRLElBQUk7WUFDekJWLE9BQU9XLElBQUksQ0FBQyxhQUErQixPQUFsQlQsU0FBU1EsSUFBSSxDQUFDRSxHQUFHO1FBQzVDLEVBQUUsT0FBT0MsT0FBTztZQUNkTCxRQUFRSyxLQUFLLENBQUMsNEJBQTRCQTtRQUM1QztJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBMEI7Ozs7Ozs4QkFDeEMsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQ0NDLE1BQUs7NEJBQ0xDLE9BQU92QixTQUFTRSxJQUFJOzRCQUNwQnNCLFVBQVUsQ0FBQ0MsSUFBTXhCLFlBQVk7b0NBQUUsR0FBR0QsUUFBUTtvQ0FBRUUsTUFBTXVCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQ0FBQzs0QkFDakVJLGFBQVk7NEJBQ1pSLFdBQVU7Ozs7OztzQ0FFWiw4REFBQ0U7NEJBQ0NDLE1BQUs7NEJBQ0xDLE9BQU92QixTQUFTRyxXQUFXOzRCQUMzQnFCLFVBQVUsQ0FBQ0MsSUFDVHhCLFlBQVk7b0NBQUUsR0FBR0QsUUFBUTtvQ0FBRUcsYUFBYXNCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQ0FBQzs0QkFFekRJLGFBQVk7NEJBQ1pSLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFHZCw4REFBQ1M7b0JBQ0NDLFNBQVN4QjtvQkFDVGMsV0FBVTs4QkFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQTVETXBCOztRQU1XSCxzREFBU0E7OztLQU5wQkc7QUE4RE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jcmVhdGUtYWxidW0vcGFnZS50c3g/MThiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ3JlYXRlUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbcGxheWxpc3QsIHNldFBsYXlsaXN0XSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVBsYXlsaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9wbGF5bGlzdHNcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBwbGF5bGlzdC5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IHBsYXlsaXN0LmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NcIil9YCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgcm91dGVyLnB1c2goYC9wbGF5bGlzdC8ke3Jlc3BvbnNlLmRhdGEuX2lkfWApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHBsYXlsaXN0OlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS02XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQtbGcgcC02XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+0KHQvtC30LTQsNGC0Ywg0L/Qu9C10LnQu9C40YHRgjwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwbGF5bGlzdC5uYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBsYXlsaXN0KHsgLi4ucGxheWxpc3QsIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCd0LDQt9Cy0LDQvdC40LUg0L/Qu9C10LnQu9C40YHRgtCwXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwbGF5bGlzdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgIHNldFBsYXlsaXN0KHsgLi4ucGxheWxpc3QsIGRlc2NyaXB0aW9uOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J7Qv9C40YHQsNC90LjQtSDQv9C70LXQudC70LjRgdGC0LBcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2NyZWF0ZVBsYXlsaXN0fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgbXQtNFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg0KHQvtC30LTQsNGC0Ywg0L/Qu9C10LnQu9C40YHRglxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVQYWdlO1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiQ3JlYXRlUGFnZSIsInBsYXlsaXN0Iiwic2V0UGxheWxpc3QiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJyb3V0ZXIiLCJjcmVhdGVQbGF5bGlzdCIsInJlc3BvbnNlIiwicG9zdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicHVzaCIsIl9pZCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/create-album/page.tsx\n"));

/***/ })

});