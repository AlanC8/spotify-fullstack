"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/songs/page",{

/***/ "(app-pages-browser)/./src/app/components/SongArtists.tsx":
/*!********************************************!*\
  !*** ./src/app/components/SongArtists.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _service_SongService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/SongService */ \"(app-pages-browser)/./src/app/service/SongService.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst SongArtists = ()=>{\n    _s();\n    const [artists, setArtists] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const navigate = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const getArtists = async ()=>{\n        const response = await _service_SongService__WEBPACK_IMPORTED_MODULE_2__.SongService.getAllArtists();\n        setArtists(response.data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getArtists();\n    }, []);\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const searchForArtists = ()=>{\n        return artists.filter((artist)=>artist.name.toLowerCase().includes(query.toLowerCase()));\n    };\n    const filteredArtists = query ? searchForArtists() : artists;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold text-center mb-8\",\n                children: \"Artists\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongArtists.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: query,\n                    onChange: (e)=>setQuery(e.target.value),\n                    className: \"py-2 px-4 border-2 rounded\",\n                    type: \"text\",\n                    placeholder: \"Клоун детекшннн\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongArtists.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongArtists.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"\",\n                children: \"Предложить артиста\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongArtists.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6\",\n                children: filteredArtists.map((artist)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>{\n                            navigate.push(\"/artists/\".concat(artist._id));\n                        },\n                        className: \"bg-white rounded-xl shadow-lg  hover:scale-105 transform transition duration-300\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: artist.coverImage,\n                                alt: artist.name,\n                                className: \"w-32 h-32 rounded-full mx-auto mt-4 object-cover border-4 border-white shadow-md\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongArtists.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-4 text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-semibold mt-4\",\n                                        children: artist.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongArtists.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-600\",\n                                        children: artist.genre\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongArtists.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongArtists.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, artist._id, true, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongArtists.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongArtists.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongArtists.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SongArtists, \"w1sR6LnTiP2dMb78htq4/7xU1WY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SongArtists;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SongArtists);\nvar _c;\n$RefreshReg$(_c, \"SongArtists\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Tb25nQXJ0aXN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDRTtBQUNUO0FBRTVDLE1BQU1LLGNBQWM7O0lBQ2xCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU1NLFdBQVdKLDBEQUFTQTtJQUMxQixNQUFNSyxhQUFhO1FBQ2pCLE1BQU1DLFdBQVcsTUFBTVAsNkRBQVdBLENBQUNRLGFBQWE7UUFDaERKLFdBQVdHLFNBQVNFLElBQUk7SUFDMUI7SUFFQVgsZ0RBQVNBLENBQUM7UUFDUlE7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUM7SUFFbkMsTUFBTWEsbUJBQW1CO1FBQ3ZCLE9BQU9ULFFBQVFVLE1BQU0sQ0FBQyxDQUFDQyxTQUFXQSxPQUFPQyxJQUFJLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDUCxNQUFNTSxXQUFXO0lBQ3hGO0lBRUEsTUFBTUUsa0JBQWtCUixRQUFRRSxxQkFBcUJUO0lBRXJELHFCQUNFLDhEQUFDZ0I7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFzQzs7Ozs7OzBCQUNwRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNFO29CQUFNQyxPQUFPYjtvQkFBT2MsVUFBVSxDQUFDQyxJQUFNZCxTQUFTYyxFQUFFQyxNQUFNLENBQUNILEtBQUs7b0JBQUdILFdBQVU7b0JBQTZCTyxNQUFLO29CQUFPQyxhQUFZOzs7Ozs7Ozs7OzswQkFFakksOERBQUNDO2dCQUFFVCxXQUFVOzBCQUFHOzs7Ozs7MEJBQ2hCLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWkYsZ0JBQWdCWSxHQUFHLENBQUMsQ0FBQ2hCLHVCQUNwQiw4REFBQ0s7d0JBRUNZLFNBQVM7NEJBQ1AxQixTQUFTMkIsSUFBSSxDQUFDLFlBQXVCLE9BQVhsQixPQUFPbUIsR0FBRzt3QkFDdEM7d0JBQ0FiLFdBQVU7OzBDQUVWLDhEQUFDYztnQ0FDQ0MsS0FBS3JCLE9BQU9zQixVQUFVO2dDQUN0QkMsS0FBS3ZCLE9BQU9DLElBQUk7Z0NBQ2hCSyxXQUFVOzs7Ozs7MENBRVosOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ2tCO3dDQUFHbEIsV0FBVTtrREFBOEJOLE9BQU9DLElBQUk7Ozs7OztrREFDdkQsOERBQUNjO3dDQUFFVCxXQUFVO2tEQUFpQk4sT0FBT3lCLEtBQUs7Ozs7Ozs7Ozs7Ozs7dUJBYnZDekIsT0FBT21CLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQjNCO0dBbERNL0I7O1FBRWFELHNEQUFTQTs7O0tBRnRCQztBQW9ETiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvU29uZ0FydGlzdHMudHN4P2ViMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU29uZ1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9Tb25nU2VydmljZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5jb25zdCBTb25nQXJ0aXN0cyA9ICgpID0+IHtcclxuICBjb25zdCBbYXJ0aXN0cywgc2V0QXJ0aXN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBnZXRBcnRpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTb25nU2VydmljZS5nZXRBbGxBcnRpc3RzKCk7XHJcbiAgICBzZXRBcnRpc3RzKHJlc3BvbnNlLmRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRBcnRpc3RzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBzZWFyY2hGb3JBcnRpc3RzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFydGlzdHMuZmlsdGVyKChhcnRpc3QpID0+IGFydGlzdC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkQXJ0aXN0cyA9IHF1ZXJ5ID8gc2VhcmNoRm9yQXJ0aXN0cygpIDogYXJ0aXN0cztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC00XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgbWItOFwiPkFydGlzdHM8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICA8aW5wdXQgdmFsdWU9e3F1ZXJ5fSBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwicHktMiBweC00IGJvcmRlci0yIHJvdW5kZWRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0JrQu9C+0YPQvSDQtNC10YLQtdC60YjQvdC90L1cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+0J/RgNC10LTQu9C+0LbQuNGC0Ywg0LDRgNGC0LjRgdGC0LA8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNCBnYXAtNlwiPlxyXG4gICAgICAgIHtmaWx0ZXJlZEFydGlzdHMubWFwKChhcnRpc3QpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXthcnRpc3QuX2lkfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbmF2aWdhdGUucHVzaChgL2FydGlzdHMvJHthcnRpc3QuX2lkfWApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1sZyAgaG92ZXI6c2NhbGUtMTA1IHRyYW5zZm9ybSB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e2FydGlzdC5jb3ZlckltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD17YXJ0aXN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0zMiBoLTMyIHJvdW5kZWQtZnVsbCBteC1hdXRvIG10LTQgb2JqZWN0LWNvdmVyIGJvcmRlci00IGJvcmRlci13aGl0ZSBzaGFkb3ctbWRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbXQtNFwiPnthcnRpc3QubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj57YXJ0aXN0LmdlbnJlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29uZ0FydGlzdHM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU29uZ1NlcnZpY2UiLCJ1c2VSb3V0ZXIiLCJTb25nQXJ0aXN0cyIsImFydGlzdHMiLCJzZXRBcnRpc3RzIiwibmF2aWdhdGUiLCJnZXRBcnRpc3RzIiwicmVzcG9uc2UiLCJnZXRBbGxBcnRpc3RzIiwiZGF0YSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJzZWFyY2hGb3JBcnRpc3RzIiwiZmlsdGVyIiwiYXJ0aXN0IiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJmaWx0ZXJlZEFydGlzdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwIiwibWFwIiwib25DbGljayIsInB1c2giLCJfaWQiLCJpbWciLCJzcmMiLCJjb3ZlckltYWdlIiwiYWx0IiwiaDIiLCJnZW5yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/SongArtists.tsx\n"));

/***/ })

});