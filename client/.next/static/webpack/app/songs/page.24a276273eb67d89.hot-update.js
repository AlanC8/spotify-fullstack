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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _service_SongService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/SongService */ \"(app-pages-browser)/./src/app/service/SongService.ts\");\n/* harmony import */ var _components_SongItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SongItem */ \"(app-pages-browser)/./src/app/components/SongItem.tsx\");\n/* harmony import */ var _service_AuthService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/AuthService */ \"(app-pages-browser)/./src/app/service/AuthService.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_SongArtists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SongArtists */ \"(app-pages-browser)/./src/app/components/SongArtists.tsx\");\n/* harmony import */ var _components_modal_MyModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/modal/MyModal */ \"(app-pages-browser)/./src/app/components/modal/MyModal.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Song = ()=>{\n    _s();\n    const [songs, setSongs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const routes = (0,next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    const getSongs = async ()=>{\n        const response = await _service_SongService__WEBPACK_IMPORTED_MODULE_2__.SongService.getAllSongs();\n        setSongs(response.data);\n    };\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const getUser = async ()=>{\n        const response = await _service_AuthService__WEBPACK_IMPORTED_MODULE_4__.AuthService.getUser();\n        setUser(response.data);\n    };\n    const [logged, setLogged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getSongs();\n        getUser();\n        if (window !== undefined) {\n            if (localStorage.getItem(\"access\")) {\n                setLogged(true);\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[80%] mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-5xl font-bold py-6\",\n                            children: \"SpotyMoty\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex align-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mr-10 text-10x\",\n                                    children: \"❤\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: logged ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        onClick: ()=>setVisible(true),\n                                        className: \"cursor-pointer\",\n                                        alt: \"Выйти с аккаунта?\",\n                                        src: user.userImage,\n                                        width: 40\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        href: \"/login\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"cursor-pointer\",\n                                            children: \"Войти в аккаунт\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modal_MyModal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    visible: visible,\n                                    setVisible: setVisible,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"cursor-pointer px-4 py-2 border-2 rounded mb-2\",\n                                                onClick: ()=>{\n                                                    routes.push(\"/profile\");\n                                                },\n                                                children: \"В профиль\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"cursor-pointer px-4 py-2 border-2 rounded\",\n                                                onClick: ()=>{\n                                                    if (window !== undefined) {\n                                                        setLogged(false);\n                                                        localStorage.removeItem(\"access\");\n                                                        location.reload();\n                                                        routes.push(\"/songs\");\n                                                    }\n                                                },\n                                                children: \"Выйти с аккаунта\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SongArtists__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SongItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            songs: songs\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\songs\\\\page.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Song, \"35PBI/h+phIeUnVjZR4Z6GRRZ54=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter\n    ];\n});\n_c = Song;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Song);\nvar _c;\n$RefreshReg$(_c, \"Song\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc29uZ3MvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNFO0FBRVA7QUFDTztBQUV4QjtBQUN1QjtBQUNGO0FBQ047QUFFNUMsTUFBTVUsT0FBTzs7SUFDWCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQVcsRUFBRTtJQUMvQyxNQUFNVyxTQUFTSiwwREFBU0E7SUFDeEIsTUFBTUssV0FBVztRQUNmLE1BQU1DLFdBQVcsTUFBTVosNkRBQVdBLENBQUNhLFdBQVc7UUFDOUNKLFNBQVNHLFNBQVNFLElBQUk7SUFDeEI7SUFDQSxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2pCLCtDQUFRQSxDQUFDLENBQUM7SUFDbEMsTUFBTWtCLFVBQVU7UUFDZCxNQUFNTCxXQUFXLE1BQU1WLDZEQUFXQSxDQUFDZSxPQUFPO1FBQzFDRCxRQUFRSixTQUFTRSxJQUFJO0lBQ3ZCO0lBQ0EsTUFBTSxDQUFDSSxRQUFRQyxVQUFVLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNxQixTQUFTQyxXQUFXLEdBQUd0QiwrQ0FBUUEsQ0FBQztJQUN2Q0QsZ0RBQVNBLENBQUM7UUFDUmE7UUFDQU07UUFDQSxJQUFJSyxXQUFXQyxXQUFXO1lBQ3hCLElBQUlDLGFBQWFDLE9BQU8sQ0FBQyxXQUFXO2dCQUNsQ04sVUFBVTtZQUNaO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUdELFdBQVU7c0NBQTBCOzs7Ozs7c0NBQ3hDLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUFpQjs7Ozs7OzhDQUdoQyw4REFBQ0Q7OENBQ0VSLHVCQUNDLDhEQUFDVzt3Q0FDQ0MsU0FBUyxJQUFNVCxXQUFXO3dDQUMxQk0sV0FBVTt3Q0FDVkksS0FBSTt3Q0FDSkMsS0FBS2pCLEtBQUtrQixTQUFTO3dDQUNuQkMsT0FBTzs7Ozs7a0VBR1QsOERBQUMvQixpREFBSUE7d0NBQUNnQyxNQUFNO2tEQUNWLDRFQUFDUDs0Q0FBR0QsV0FBVTtzREFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OENBSXJDLDhEQUFDdEIsaUVBQU9BO29DQUFDZSxTQUFTQTtvQ0FBU0MsWUFBWUE7OENBQ3JDLDRFQUFDSzs7MERBQ0MsOERBQUNBO2dEQUNDQyxXQUFVO2dEQUNWRyxTQUFTO29EQUNQcEIsT0FBTzBCLElBQUksQ0FBRTtnREFDZjswREFDRDs7Ozs7OzBEQUdELDhEQUFDVjtnREFDQ0MsV0FBVTtnREFDVkcsU0FBUztvREFDUCxJQUFJUixXQUFXQyxXQUFXO3dEQUN4QkosVUFBVTt3REFDVkssYUFBYWEsVUFBVSxDQUFDO3dEQUN4QkMsU0FBU0MsTUFBTTt3REFDZjdCLE9BQU8wQixJQUFJLENBQUM7b0RBQ2Q7Z0RBQ0Y7MERBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU9ULDhEQUFDVjs7c0NBQ0MsOERBQUN0QiwrREFBV0E7Ozs7O3NDQUNaLDhEQUFDSCw0REFBUUE7NEJBQUNPLE9BQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszQjtHQWpGTUQ7O1FBRVdELHNEQUFTQTs7O0tBRnBCQztBQW1GTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NvbmdzL3BhZ2UudHN4P2RjNTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNvbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2UvU29uZ1NlcnZpY2VcIjtcclxuaW1wb3J0IElNdXNpYyBmcm9tIFwiLi4vdHlwZXMvbXVzaWMudHlwZVwiO1xyXG5pbXBvcnQgU29uZ0l0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU29uZ0l0ZW1cIjtcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9BdXRoU2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXQgfSBmcm9tIFwiaHR0cFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBTb25nQXJ0aXN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Tb25nQXJ0aXN0c1wiO1xyXG5pbXBvcnQgTXlNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbC9NeU1vZGFsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmNvbnN0IFNvbmcgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NvbmdzLCBzZXRTb25nc10gPSB1c2VTdGF0ZTxJTXVzaWNbXT4oW10pO1xyXG4gIGNvbnN0IHJvdXRlcyA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGdldFNvbmdzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTb25nU2VydmljZS5nZXRBbGxTb25ncygpO1xyXG4gICAgc2V0U29uZ3MocmVzcG9uc2UuZGF0YSk7XHJcbiAgfTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSBhcyBhbnkpO1xyXG4gIGNvbnN0IGdldFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF1dGhTZXJ2aWNlLmdldFVzZXIoKTtcclxuICAgIHNldFVzZXIocmVzcG9uc2UuZGF0YSk7XHJcbiAgfTtcclxuICBjb25zdCBbbG9nZ2VkLCBzZXRMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0U29uZ3MoKTtcclxuICAgIGdldFVzZXIoKTtcclxuICAgIGlmICh3aW5kb3cgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NcIikpIHtcclxuICAgICAgICBzZXRMb2dnZWQodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs4MCVdIG14LWF1dG9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCBweS02XCI+U3BvdHlNb3R5PC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0xMCB0ZXh0LTEweFwiPlxyXG4gICAgICAgICAgICDinaRcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge2xvZ2dlZCA/IChcclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCLQktGL0LnRgtC4INGBINCw0LrQutCw0YPQvdGC0LA/XCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXt1c2VyLnVzZXJJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9sb2dpblwifT5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+0JLQvtC50YLQuCDQsiDQsNC60LrQsNGD0L3RgjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxNeU1vZGFsIHZpc2libGU9e3Zpc2libGV9IHNldFZpc2libGU9e3NldFZpc2libGV9PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHB4LTQgcHktMiBib3JkZXItMiByb3VuZGVkIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVzLnB1c2goYC9wcm9maWxlYCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgINCSINC/0YDQvtGE0LjQu9GMXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgcHgtNCBweS0yIGJvcmRlci0yIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRMb2dnZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhY2Nlc3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlcy5wdXNoKFwiL3NvbmdzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg0JLRi9C50YLQuCDRgSDQsNC60LrQsNGD0L3RgtCwXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9NeU1vZGFsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxTb25nQXJ0aXN0cyAvPlxyXG4gICAgICAgICAgPFNvbmdJdGVtIHNvbmdzPXtzb25nc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29uZztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTb25nU2VydmljZSIsIlNvbmdJdGVtIiwiQXV0aFNlcnZpY2UiLCJMaW5rIiwiU29uZ0FydGlzdHMiLCJNeU1vZGFsIiwidXNlUm91dGVyIiwiU29uZyIsInNvbmdzIiwic2V0U29uZ3MiLCJyb3V0ZXMiLCJnZXRTb25ncyIsInJlc3BvbnNlIiwiZ2V0QWxsU29uZ3MiLCJkYXRhIiwidXNlciIsInNldFVzZXIiLCJnZXRVc2VyIiwibG9nZ2VkIiwic2V0TG9nZ2VkIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ3aW5kb3ciLCJ1bmRlZmluZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbWciLCJvbkNsaWNrIiwiYWx0Iiwic3JjIiwidXNlckltYWdlIiwid2lkdGgiLCJocmVmIiwicHVzaCIsInJlbW92ZUl0ZW0iLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/songs/page.tsx\n"));

/***/ })

});