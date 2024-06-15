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

/***/ "(app-pages-browser)/./src/app/components/SongItem.tsx":
/*!*****************************************!*\
  !*** ./src/app/components/SongItem.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _modal_MyModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/MyModal */ \"(app-pages-browser)/./src/app/components/modal/MyModal.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst SongItem = (param)=>{\n    let { songs } = param;\n    _s();\n    const [currentSong, setCurrentSong] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [playingSongUrl, setPlayingSongUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handlePlay = (audioUrl)=>{\n        if (currentSong) {\n            if (playingSongUrl === audioUrl) {\n                currentSong.pause();\n                setCurrentSong(null);\n                setPlayingSongUrl(null);\n            } else {\n                currentSong.pause();\n                const audio = new Audio(audioUrl);\n                audio.play();\n                setCurrentSong(audio);\n                setPlayingSongUrl(audioUrl);\n            }\n        } else {\n            const audio = new Audio(audioUrl);\n            audio.play();\n            setCurrentSong(audio);\n            setPlayingSongUrl(audioUrl);\n        }\n    };\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const songSearch = ()=>{\n        return songs.filter((song)=>song.title.toLowerCase().includes(query.toLowerCase()));\n    };\n    const filteredSongs = query ? songSearch() : songs;\n    const [playList, setPlayList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const showPlayLists = async ()=>{\n        const resp1 = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3000/api/v1/playlists\");\n        setPlayList(resp1.data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold text-center mb-8\",\n                        children: \"Random Music\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center mb-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            value: query,\n                            onChange: (e)=>setQuery(e.target.value),\n                            className: \"py-2 px-4 border-2 rounded\",\n                            type: \"text\",\n                            placeholder: \"Поиск мюзик\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            filteredSongs.map((song)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-4 p-4 mb-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow dark:bg-gray-950 dark:hover:shadow-lg cursor-pointer\",\n                    onClick: ()=>handlePlay(song.audioUrl),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-shrink-0 w-16 h-16 rounded-md overflow-hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: song.coverImage,\n                                alt: \"Song Cover\",\n                                width: 64,\n                                height: 64,\n                                className: \"w-full h-full object-cover\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1 min-w-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-lg font-medium truncate text-gray-800 dark:text-white\",\n                                    children: song.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-500 truncate dark:text-gray-400\",\n                                    children: song.artist\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>{\n                                showPlayLists();\n                                setVisible(true);\n                            },\n                            className: \"text-center text-white text-sm\",\n                            children: [\n                                \"Добавить \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 22\n                                }, undefined),\n                                \" в плейлист\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modal_MyModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            visible: visible,\n                            setVisible: setVisible,\n                            children: \"asfasf\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-blue-500 hover:text-blue-700 cursor-pointer\",\n                            children: playingSongUrl === song.audioUrl ? \"Pause\" : \"Play\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-sm text-gray-500 dark:text-gray-400\",\n                            children: song.duration\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, new Date().getTime() + Math.random(), true, {\n                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SongItem, \"GTHdW5vMA1FV2mIhZhkLhlepv8c=\");\n_c = SongItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SongItem);\nvar _c;\n$RefreshReg$(_c, \"SongItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Tb25nSXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFFZDtBQUNZO0FBTXRDLE1BQU1JLFdBQW9DO1FBQUMsRUFBRUMsS0FBSyxFQUFFOztJQUNsRCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR04sK0NBQVFBLENBQTBCO0lBQ3hFLE1BQU0sQ0FBQ08sZ0JBQWdCQyxrQkFBa0IsR0FBR1IsK0NBQVFBLENBQWdCO0lBRXBFLE1BQU1TLGFBQWEsQ0FBQ0M7UUFDbEIsSUFBSUwsYUFBYTtZQUNmLElBQUlFLG1CQUFtQkcsVUFBVTtnQkFDL0JMLFlBQVlNLEtBQUs7Z0JBQ2pCTCxlQUFlO2dCQUNmRSxrQkFBa0I7WUFDcEIsT0FBTztnQkFDTEgsWUFBWU0sS0FBSztnQkFDakIsTUFBTUMsUUFBUSxJQUFJQyxNQUFNSDtnQkFDeEJFLE1BQU1FLElBQUk7Z0JBQ1ZSLGVBQWVNO2dCQUNmSixrQkFBa0JFO1lBQ3BCO1FBQ0YsT0FBTztZQUNMLE1BQU1FLFFBQVEsSUFBSUMsTUFBTUg7WUFDeEJFLE1BQU1FLElBQUk7WUFDVlIsZUFBZU07WUFDZkosa0JBQWtCRTtRQUNwQjtJQUNGO0lBRUEsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNaUIsYUFBYTtRQUNqQixPQUFPYixNQUFNYyxNQUFNLENBQUMsQ0FBQ0MsT0FDbkJBLEtBQUtDLEtBQUssQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNQLE1BQU1NLFdBQVc7SUFFdkQ7SUFFQSxNQUFNRSxnQkFBZ0JSLFFBQVFFLGVBQWViO0lBRTdDLE1BQU0sQ0FBQ29CLFVBQVVDLFlBQVksR0FBR3pCLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDMEIsU0FBU0MsV0FBVyxHQUFHM0IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTTRCLGdCQUFnQjtRQUNwQixNQUFNQyxRQUFRLE1BQU01Qiw2Q0FBS0EsQ0FBQzZCLEdBQUcsQ0FBQztRQUM5QkwsWUFBWUksTUFBTUUsSUFBSTtJQUN4QjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7O2tDQUNDLDhEQUFDRTt3QkFBR0QsV0FBVTtrQ0FBc0M7Ozs7OztrQ0FDcEQsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRTs0QkFDQ0MsT0FBT3JCOzRCQUNQc0IsVUFBVSxDQUFDQyxJQUFNdEIsU0FBU3NCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs0QkFDeENILFdBQVU7NEJBQ1ZPLE1BQUs7NEJBQ0xDLGFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSWpCbEIsY0FBY21CLEdBQUcsQ0FBQyxDQUFDdkIscUJBQ2xCLDhEQUFDYTtvQkFFQ0MsV0FBVTtvQkFDVlUsU0FBUyxJQUFNbEMsV0FBV1UsS0FBS1QsUUFBUTs7c0NBRXZDLDhEQUFDc0I7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNXO2dDQUNDQyxLQUFLMUIsS0FBSzJCLFVBQVU7Z0NBQ3BCQyxLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSaEIsV0FBVTs7Ozs7Ozs7Ozs7c0NBR2QsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ2lCO29DQUFHakIsV0FBVTs4Q0FDWGQsS0FBS0MsS0FBSzs7Ozs7OzhDQUViLDhEQUFDK0I7b0NBQUVsQixXQUFVOzhDQUNWZCxLQUFLaUMsTUFBTTs7Ozs7Ozs7Ozs7O3NDQUloQiw4REFBQ3BCOzRCQUNDVyxTQUFTO2dDQUNQZjtnQ0FDQUQsV0FBVzs0QkFDYjs0QkFDQU0sV0FBVTs7Z0NBQ1g7OENBQ1UsOERBQUNvQjs7Ozs7Z0NBQUs7Ozs7Ozs7c0NBRWpCLDhEQUFDbkQsc0RBQU9BOzRCQUFDd0IsU0FBU0E7NEJBQVNDLFlBQVlBO3NDQUFZOzs7Ozs7c0NBR25ELDhEQUFDSzs0QkFBSUMsV0FBVTtzQ0FDWjFCLG1CQUFtQlksS0FBS1QsUUFBUSxHQUFHLFVBQVU7Ozs7OztzQ0FFaEQsOERBQUNzQjs0QkFBSUMsV0FBVTtzQ0FDWmQsS0FBS21DLFFBQVE7Ozs7Ozs7bUJBdENYLElBQUlDLE9BQU9DLE9BQU8sS0FBS0MsS0FBS0MsTUFBTTs7Ozs7Ozs7Ozs7QUE0Q2pEO0dBdEdNdkQ7S0FBQUE7QUF3R04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1NvbmdJdGVtLnRzeD9iMjQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSU11c2ljIGZyb20gXCIuLi90eXBlcy9tdXNpYy50eXBlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE15TW9kYWwgZnJvbSBcIi4vbW9kYWwvTXlNb2RhbFwiO1xyXG5cclxuaW50ZXJmYWNlIFNvbmdJdGVtUHJvcHMge1xyXG4gIHNvbmdzOiBJTXVzaWNbXTtcclxufVxyXG5cclxuY29uc3QgU29uZ0l0ZW06IFJlYWN0LkZDPFNvbmdJdGVtUHJvcHM+ID0gKHsgc29uZ3MgfSkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50U29uZywgc2V0Q3VycmVudFNvbmddID0gdXNlU3RhdGU8SFRNTEF1ZGlvRWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtwbGF5aW5nU29uZ1VybCwgc2V0UGxheWluZ1NvbmdVcmxdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBsYXkgPSAoYXVkaW9Vcmw6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRTb25nKSB7XHJcbiAgICAgIGlmIChwbGF5aW5nU29uZ1VybCA9PT0gYXVkaW9VcmwpIHtcclxuICAgICAgICBjdXJyZW50U29uZy5wYXVzZSgpO1xyXG4gICAgICAgIHNldEN1cnJlbnRTb25nKG51bGwpO1xyXG4gICAgICAgIHNldFBsYXlpbmdTb25nVXJsKG51bGwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGN1cnJlbnRTb25nLnBhdXNlKCk7XHJcbiAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oYXVkaW9VcmwpO1xyXG4gICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICBzZXRDdXJyZW50U29uZyhhdWRpbyk7XHJcbiAgICAgICAgc2V0UGxheWluZ1NvbmdVcmwoYXVkaW9VcmwpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhhdWRpb1VybCk7XHJcbiAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgc2V0Q3VycmVudFNvbmcoYXVkaW8pO1xyXG4gICAgICBzZXRQbGF5aW5nU29uZ1VybChhdWRpb1VybCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3Qgc29uZ1NlYXJjaCA9ICgpID0+IHtcclxuICAgIHJldHVybiBzb25ncy5maWx0ZXIoKHNvbmcpID0+XHJcbiAgICAgIHNvbmcudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmaWx0ZXJlZFNvbmdzID0gcXVlcnkgPyBzb25nU2VhcmNoKCkgOiBzb25ncztcclxuXHJcbiAgY29uc3QgW3BsYXlMaXN0LCBzZXRQbGF5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHNob3dQbGF5TGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwMSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvcGxheWxpc3RzXCIpO1xyXG4gICAgc2V0UGxheUxpc3QocmVzcDEuZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLThcIj5SYW5kb20gTXVzaWM8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi0xMFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtNCBib3JkZXItMiByb3VuZGVkXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7QuNGB0Log0LzRjtC30LjQulwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2ZpbHRlcmVkU29uZ3MubWFwKChzb25nKSA9PiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtuZXcgRGF0ZSgpLmdldFRpbWUoKSArIE1hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBwLTQgbWItNCByb3VuZGVkLWxnIGJnLXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpzaGFkb3ctbWQgdHJhbnNpdGlvbi1zaGFkb3cgZGFyazpiZy1ncmF5LTk1MCBkYXJrOmhvdmVyOnNoYWRvdy1sZyBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5KHNvbmcuYXVkaW9VcmwpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB3LTE2IGgtMTYgcm91bmRlZC1tZCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17c29uZy5jb3ZlckltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD1cIlNvbmcgQ292ZXJcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXs2NH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezY0fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSB0cnVuY2F0ZSB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgIHtzb25nLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgdHJ1bmNhdGUgZGFyazp0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgICAgICAge3NvbmcuYXJ0aXN0fVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzaG93UGxheUxpc3RzKCk7XHJcbiAgICAgICAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LXNtXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg0JTQvtCx0LDQstC40YLRjCA8YnIgLz4g0LIg0L/Qu9C10LnQu9C40YHRglxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8TXlNb2RhbCB2aXNpYmxlPXt2aXNpYmxlfSBzZXRWaXNpYmxlPXtzZXRWaXNpYmxlfT5cclxuICAgICAgICAgICAgYXNmYXNmXHJcbiAgICAgICAgICA8L015TW9kYWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTcwMCBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICB7cGxheWluZ1NvbmdVcmwgPT09IHNvbmcuYXVkaW9VcmwgPyBcIlBhdXNlXCIgOiBcIlBsYXlcIn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgICAgIHtzb25nLmR1cmF0aW9ufVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvbmdJdGVtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiTXlNb2RhbCIsIlNvbmdJdGVtIiwic29uZ3MiLCJjdXJyZW50U29uZyIsInNldEN1cnJlbnRTb25nIiwicGxheWluZ1NvbmdVcmwiLCJzZXRQbGF5aW5nU29uZ1VybCIsImhhbmRsZVBsYXkiLCJhdWRpb1VybCIsInBhdXNlIiwiYXVkaW8iLCJBdWRpbyIsInBsYXkiLCJxdWVyeSIsInNldFF1ZXJ5Iiwic29uZ1NlYXJjaCIsImZpbHRlciIsInNvbmciLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJmaWx0ZXJlZFNvbmdzIiwicGxheUxpc3QiLCJzZXRQbGF5TGlzdCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwic2hvd1BsYXlMaXN0cyIsInJlc3AxIiwiZ2V0IiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm1hcCIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJjb3ZlckltYWdlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMyIsInAiLCJhcnRpc3QiLCJiciIsImR1cmF0aW9uIiwiRGF0ZSIsImdldFRpbWUiLCJNYXRoIiwicmFuZG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/SongItem.tsx\n"));

/***/ })

});