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

/***/ "(app-pages-browser)/./src/app/songs/page.tsx":
/*!********************************!*\
  !*** ./src/app/songs/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _service_SongService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/SongService */ \"(app-pages-browser)/./src/app/service/SongService.ts\");\n/* harmony import */ var _components_SongItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SongItem */ \"(app-pages-browser)/./src/app/components/SongItem.tsx\");\n/* harmony import */ var _service_AuthService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/AuthService */ \"(app-pages-browser)/./src/app/service/AuthService.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_SongArtists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SongArtists */ \"(app-pages-browser)/./src/app/components/SongArtists.tsx\");\n/* harmony import */ var _components_modal_MyModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/modal/MyModal */ \"(app-pages-browser)/./src/app/components/modal/MyModal.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Song = ()=>{\n    _s();\n    const [songs, setSongs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const routes = (0,next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    const getSongs = async ()=>{\n        const response = await _service_SongService__WEBPACK_IMPORTED_MODULE_2__.SongService.getAllSongs();\n        setSongs(response.data);\n    };\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const getUser = async ()=>{\n        const response = await _service_AuthService__WEBPACK_IMPORTED_MODULE_4__.AuthService.getUser();\n        setUser(response.data);\n    };\n    const [logged, setLogged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getSongs();\n        getUser();\n        if (window !== undefined) {\n            if (localStorage.getItem(\"access\")) {\n                setLogged(true);\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[80%] mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-5xl font-bold py-6\",\n                            children: \"SpotyMoty\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"align-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: logged ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        onClick: ()=>setVisible(true),\n                                        className: \"cursor-pointer\",\n                                        alt: \"Выйти с аккаунта?\",\n                                        src: user.userImage,\n                                        width: 40\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        href: \"/login\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"cursor-pointer\",\n                                            children: \"Войти в аккаунт\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modal_MyModal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    visible: visible,\n                                    setVisible: setVisible,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"cursor-pointer px-4 py-2 border-2 rounded mb-2\",\n                                                onClick: ()=>{\n                                                    routes.push(\"/profile\");\n                                                },\n                                                children: \"В профиль\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"cursor-pointer px-4 py-2 border-2 rounded\",\n                                                onClick: ()=>{\n                                                    if (window !== undefined) {\n                                                        setLogged(false);\n                                                        localStorage.removeItem(\"access\");\n                                                        location.reload();\n                                                        routes.push(\"/songs\");\n                                                    }\n                                                },\n                                                children: \"Выйти с аккаунта\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SongArtists__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: \"Создать Плейлист\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SongItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            songs: songs\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Song, \"35PBI/h+phIeUnVjZR4Z6GRRZ54=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter\n    ];\n});\n_c = Song;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Song);\nvar _c;\n$RefreshReg$(_c, \"Song\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc29uZ3MvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNFO0FBRVA7QUFDTztBQUV4QjtBQUN1QjtBQUNGO0FBQ047QUFFNUMsTUFBTVUsT0FBTzs7SUFDWCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQVcsRUFBRTtJQUMvQyxNQUFNVyxTQUFTSiwwREFBU0E7SUFDeEIsTUFBTUssV0FBVztRQUNmLE1BQU1DLFdBQVcsTUFBTVosNkRBQVdBLENBQUNhLFdBQVc7UUFDOUNKLFNBQVNHLFNBQVNFLElBQUk7SUFDeEI7SUFDQSxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2pCLCtDQUFRQSxDQUFDLENBQUM7SUFDbEMsTUFBTWtCLFVBQVU7UUFDZCxNQUFNTCxXQUFXLE1BQU1WLDZEQUFXQSxDQUFDZSxPQUFPO1FBQzFDRCxRQUFRSixTQUFTRSxJQUFJO0lBQ3ZCO0lBQ0EsTUFBTSxDQUFDSSxRQUFRQyxVQUFVLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNxQixTQUFTQyxXQUFXLEdBQUd0QiwrQ0FBUUEsQ0FBQztJQUN2Q0QsZ0RBQVNBLENBQUM7UUFDUmE7UUFDQU07UUFDQSxJQUFJSyxXQUFXQyxXQUFXO1lBQ3hCLElBQUlDLGFBQWFDLE9BQU8sQ0FBQyxXQUFXO2dCQUNsQ04sVUFBVTtZQUNaO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUdELFdBQVU7c0NBQTBCOzs7Ozs7c0NBQ3hDLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEOzhDQUNFUix1QkFDQyw4REFBQ1c7d0NBQ0NDLFNBQVMsSUFBTVQsV0FBVzt3Q0FDMUJNLFdBQVU7d0NBQ1ZJLEtBQUk7d0NBQ0pDLEtBQUtqQixLQUFLa0IsU0FBUzt3Q0FDbkJDLE9BQU87Ozs7O2tFQUdULDhEQUFDL0IsaURBQUlBO3dDQUFDZ0MsTUFBTTtrREFDViw0RUFBQ1A7NENBQUdELFdBQVU7c0RBQWlCOzs7Ozs7Ozs7Ozs7Ozs7OzhDQUlyQyw4REFBQ3RCLGlFQUFPQTtvQ0FBQ2UsU0FBU0E7b0NBQVNDLFlBQVlBOzhDQUNyQyw0RUFBQ0s7OzBEQUNDLDhEQUFDQTtnREFDQ0MsV0FBVTtnREFDVkcsU0FBUztvREFDUHBCLE9BQU8wQixJQUFJLENBQUU7Z0RBQ2Y7MERBQ0Q7Ozs7OzswREFHRCw4REFBQ1Y7Z0RBQ0NDLFdBQVU7Z0RBQ1ZHLFNBQVM7b0RBQ1AsSUFBSVIsV0FBV0MsV0FBVzt3REFDeEJKLFVBQVU7d0RBQ1ZLLGFBQWFhLFVBQVUsQ0FBQzt3REFDeEJDLFNBQVNDLE1BQU07d0RBQ2Y3QixPQUFPMEIsSUFBSSxDQUFDO29EQUNkO2dEQUNGOzBEQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFPVCw4REFBQ1Y7O3NDQUNDLDhEQUFDdEIsK0RBQVdBOzs7OztzQ0FDWiw4REFBQ0QsaURBQUlBO3NDQUFDOzs7Ozs7c0NBQ04sOERBQUNGLDREQUFRQTs0QkFBQ08sT0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNCO0dBL0VNRDs7UUFFV0Qsc0RBQVNBOzs7S0FGcEJDO0FBaUZOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc29uZ3MvcGFnZS50c3g/ZGM1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU29uZ1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9Tb25nU2VydmljZVwiO1xyXG5pbXBvcnQgSU11c2ljIGZyb20gXCIuLi90eXBlcy9tdXNpYy50eXBlXCI7XHJcbmltcG9ydCBTb25nSXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9Tb25nSXRlbVwiO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlL0F1dGhTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldCB9IGZyb20gXCJodHRwXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFNvbmdBcnRpc3RzIGZyb20gXCIuLi9jb21wb25lbnRzL1NvbmdBcnRpc3RzXCI7XHJcbmltcG9ydCBNeU1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL21vZGFsL015TW9kYWxcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuY29uc3QgU29uZyA9ICgpID0+IHtcclxuICBjb25zdCBbc29uZ3MsIHNldFNvbmdzXSA9IHVzZVN0YXRlPElNdXNpY1tdPihbXSk7XHJcbiAgY29uc3Qgcm91dGVzID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZ2V0U29uZ3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNvbmdTZXJ2aWNlLmdldEFsbFNvbmdzKCk7XHJcbiAgICBzZXRTb25ncyhyZXNwb25zZS5kYXRhKTtcclxuICB9O1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9IGFzIGFueSk7XHJcbiAgY29uc3QgZ2V0VXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXV0aFNlcnZpY2UuZ2V0VXNlcigpO1xyXG4gICAgc2V0VXNlcihyZXNwb25zZS5kYXRhKTtcclxuICB9O1xyXG4gIGNvbnN0IFtsb2dnZWQsIHNldExvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRTb25ncygpO1xyXG4gICAgZ2V0VXNlcigpO1xyXG4gICAgaWYgKHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1wiKSkge1xyXG4gICAgICAgIHNldExvZ2dlZCh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzgwJV0gbXgtYXV0b1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1ib2xkIHB5LTZcIj5TcG90eU1vdHk8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7bG9nZ2VkID8gKFxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cItCS0YvQudGC0Lgg0YEg0LDQutC60LDRg9C90YLQsD9cIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3VzZXIudXNlckltYWdlfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17NDB9XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2xvZ2luXCJ9PlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj7QktC+0LnRgtC4INCyINCw0LrQutCw0YPQvdGCPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE15TW9kYWwgdmlzaWJsZT17dmlzaWJsZX0gc2V0VmlzaWJsZT17c2V0VmlzaWJsZX0+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgcHgtNCBweS0yIGJvcmRlci0yIHJvdW5kZWQgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXMucHVzaChgL3Byb2ZpbGVgKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg0JIg0L/RgNC+0YTQuNC70YxcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBweC00IHB5LTIgYm9yZGVyLTIgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldExvZ2dlZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImFjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVzLnB1c2goXCIvc29uZ3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDQktGL0LnRgtC4INGBINCw0LrQutCw0YPQvdGC0LBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L015TW9kYWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFNvbmdBcnRpc3RzIC8+XHJcbiAgICAgICAgICA8TGluaz7QodC+0LfQtNCw0YLRjCDQn9C70LXQudC70LjRgdGCPC9MaW5rPlxyXG4gICAgICAgICAgPFNvbmdJdGVtIHNvbmdzPXtzb25nc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29uZztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTb25nU2VydmljZSIsIlNvbmdJdGVtIiwiQXV0aFNlcnZpY2UiLCJMaW5rIiwiU29uZ0FydGlzdHMiLCJNeU1vZGFsIiwidXNlUm91dGVyIiwiU29uZyIsInNvbmdzIiwic2V0U29uZ3MiLCJyb3V0ZXMiLCJnZXRTb25ncyIsInJlc3BvbnNlIiwiZ2V0QWxsU29uZ3MiLCJkYXRhIiwidXNlciIsInNldFVzZXIiLCJnZXRVc2VyIiwibG9nZ2VkIiwic2V0TG9nZ2VkIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ3aW5kb3ciLCJ1bmRlZmluZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbWciLCJvbkNsaWNrIiwiYWx0Iiwic3JjIiwidXNlckltYWdlIiwid2lkdGgiLCJocmVmIiwicHVzaCIsInJlbW92ZUl0ZW0iLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/songs/page.tsx\n"));

/***/ })

});