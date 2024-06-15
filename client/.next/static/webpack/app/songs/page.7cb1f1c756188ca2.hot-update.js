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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst SongItem = (param)=>{\n    let { songs } = param;\n    _s();\n    const [currentSong, setCurrentSong] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [playingSongUrl, setPlayingSongUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handlePlay = (audioUrl)=>{\n        if (currentSong) {\n            if (playingSongUrl === audioUrl) {\n                currentSong.pause();\n                setCurrentSong(null);\n                setPlayingSongUrl(null);\n            } else {\n                currentSong.pause();\n                const audio = new Audio(audioUrl);\n                audio.play();\n                setCurrentSong(audio);\n                setPlayingSongUrl(audioUrl);\n            }\n        } else {\n            const audio = new Audio(audioUrl);\n            audio.play();\n            setCurrentSong(audio);\n            setPlayingSongUrl(audioUrl);\n        }\n    };\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const songSearch = ()=>{\n        return songs.filter((song)=>song.title.toLowerCase().includes(query.toLowerCase()));\n    };\n    const filteredSongs = query ? songSearch() : songs;\n    const [playList, setPlayList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const showPlayLists = async ()=>{\n        const resp1 = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3000/api/v1/playlists\");\n        setPlayList(resp1.data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold text-center mb-8\",\n                        children: \"Random Music\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center mb-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            value: query,\n                            onChange: (e)=>setQuery(e.target.value),\n                            className: \"py-2 px-4 border-2 rounded\",\n                            type: \"text\",\n                            placeholder: \"Поиск мюзик\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            filteredSongs.map((song)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-4 p-4 mb-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow dark:bg-gray-950 dark:hover:shadow-lg cursor-pointer\",\n                    onClick: ()=>handlePlay(song.audioUrl),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-shrink-0 w-16 h-16 rounded-md overflow-hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: song.coverImage,\n                                alt: \"Song Cover\",\n                                width: 64,\n                                height: 64,\n                                className: \"w-full h-full object-cover\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1 min-w-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-lg font-medium truncate text-gray-800 dark:text-white\",\n                                    children: song.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-500 truncate dark:text-gray-400\",\n                                    children: song.artist\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined),\n                        \"});\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>{\n                                showPlayLists();\n                                setVisible(true);\n                            },\n                            className: \"text-center text-white text-sm\",\n                            children: [\n                                \"Добавить \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 22\n                                }, undefined),\n                                \" в плейлист\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyModal, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-blue-500 hover:text-blue-700 cursor-pointer\",\n                            children: playingSongUrl === song.audioUrl ? \"Pause\" : \"Play\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-sm text-gray-500 dark:text-gray-400\",\n                            children: song.duration\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, new Date().getTime() + Math.random(), true, {\n                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SongItem, \"GTHdW5vMA1FV2mIhZhkLhlepv8c=\");\n_c = SongItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SongItem);\nvar _c;\n$RefreshReg$(_c, \"SongItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Tb25nSXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUVkO0FBTTFCLE1BQU1HLFdBQW9DO1FBQUMsRUFBRUMsS0FBSyxFQUFFOztJQUNsRCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQTBCO0lBQ3hFLE1BQU0sQ0FBQ00sZ0JBQWdCQyxrQkFBa0IsR0FBR1AsK0NBQVFBLENBQWdCO0lBRXBFLE1BQU1RLGFBQWEsQ0FBQ0M7UUFDbEIsSUFBSUwsYUFBYTtZQUNmLElBQUlFLG1CQUFtQkcsVUFBVTtnQkFDL0JMLFlBQVlNLEtBQUs7Z0JBQ2pCTCxlQUFlO2dCQUNmRSxrQkFBa0I7WUFDcEIsT0FBTztnQkFDTEgsWUFBWU0sS0FBSztnQkFDakIsTUFBTUMsUUFBUSxJQUFJQyxNQUFNSDtnQkFDeEJFLE1BQU1FLElBQUk7Z0JBQ1ZSLGVBQWVNO2dCQUNmSixrQkFBa0JFO1lBQ3BCO1FBQ0YsT0FBTztZQUNMLE1BQU1FLFFBQVEsSUFBSUMsTUFBTUg7WUFDeEJFLE1BQU1FLElBQUk7WUFDVlIsZUFBZU07WUFDZkosa0JBQWtCRTtRQUNwQjtJQUNGO0lBRUEsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdmLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1nQixhQUFhO1FBQ2pCLE9BQU9iLE1BQU1jLE1BQU0sQ0FBQyxDQUFDQyxPQUNuQkEsS0FBS0MsS0FBSyxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ1AsTUFBTU0sV0FBVztJQUV2RDtJQUVBLE1BQU1FLGdCQUFnQlIsUUFBUUUsZUFBZWI7SUFFN0MsTUFBTSxDQUFDb0IsVUFBVUMsWUFBWSxHQUFHeEIsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUN5QixTQUFTQyxXQUFXLEdBQUcxQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNMkIsZ0JBQWdCO1FBQ3BCLE1BQU1DLFFBQVEsTUFBTTNCLDZDQUFLQSxDQUFDNEIsR0FBRyxDQUFDO1FBQzlCTCxZQUFZSSxNQUFNRSxJQUFJO0lBQ3hCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDs7a0NBQ0QsOERBQUNFO3dCQUFHRCxXQUFVO2tDQUFzQzs7Ozs7O2tDQUNwRCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNFOzRCQUFNQyxPQUFPckI7NEJBQU9zQixVQUFVQyxDQUFBQSxJQUFLdEIsU0FBU3NCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs0QkFBR0gsV0FBVTs0QkFBNkJPLE1BQUs7NEJBQU9DLGFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRzlIbEIsY0FBY21CLEdBQUcsQ0FBQyxDQUFDdkIscUJBQ2xCLDhEQUFDYTtvQkFFQ0MsV0FBVTtvQkFDVlUsU0FBUyxJQUFNbEMsV0FBV1UsS0FBS1QsUUFBUTs7c0NBRXZDLDhEQUFDc0I7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNXO2dDQUNDQyxLQUFLMUIsS0FBSzJCLFVBQVU7Z0NBQ3BCQyxLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSaEIsV0FBVTs7Ozs7Ozs7Ozs7c0NBR2QsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ2lCO29DQUFHakIsV0FBVTs4Q0FDWGQsS0FBS0MsS0FBSzs7Ozs7OzhDQUViLDhEQUFDK0I7b0NBQUVsQixXQUFVOzhDQUNWZCxLQUFLaUMsTUFBTTs7Ozs7Ozs7Ozs7O3dCQUVWO3NDQUVOLDhEQUFDcEI7NEJBQUlXLFNBQVM7Z0NBQ1hmO2dDQUNBRCxXQUFXOzRCQUNkOzRCQUFHTSxXQUFVOztnQ0FBaUM7OENBQ25DLDhEQUFDb0I7Ozs7O2dDQUFLOzs7Ozs7O3NDQUVqQiw4REFBQ0M7Ozs7O3NDQUdELDhEQUFDdEI7NEJBQUlDLFdBQVU7c0NBQ1oxQixtQkFBbUJZLEtBQUtULFFBQVEsR0FBRyxVQUFVOzs7Ozs7c0NBRWhELDhEQUFDc0I7NEJBQUlDLFdBQVU7c0NBQ1pkLEtBQUtvQyxRQUFROzs7Ozs7O21CQW5DWCxJQUFJQyxPQUFPQyxPQUFPLEtBQUtDLEtBQUtDLE1BQU07Ozs7Ozs7Ozs7O0FBeUNqRDtHQTdGTXhEO0tBQUFBO0FBK0ZOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Tb25nSXRlbS50c3g/YjI0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElNdXNpYyBmcm9tIFwiLi4vdHlwZXMvbXVzaWMudHlwZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbnRlcmZhY2UgU29uZ0l0ZW1Qcm9wcyB7XHJcbiAgc29uZ3M6IElNdXNpY1tdO1xyXG59XHJcblxyXG5jb25zdCBTb25nSXRlbTogUmVhY3QuRkM8U29uZ0l0ZW1Qcm9wcz4gPSAoeyBzb25ncyB9KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRTb25nLCBzZXRDdXJyZW50U29uZ10gPSB1c2VTdGF0ZTxIVE1MQXVkaW9FbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3BsYXlpbmdTb25nVXJsLCBzZXRQbGF5aW5nU29uZ1VybF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGxheSA9IChhdWRpb1VybDogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFNvbmcpIHtcclxuICAgICAgaWYgKHBsYXlpbmdTb25nVXJsID09PSBhdWRpb1VybCkge1xyXG4gICAgICAgIGN1cnJlbnRTb25nLnBhdXNlKCk7XHJcbiAgICAgICAgc2V0Q3VycmVudFNvbmcobnVsbCk7XHJcbiAgICAgICAgc2V0UGxheWluZ1NvbmdVcmwobnVsbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3VycmVudFNvbmcucGF1c2UoKTtcclxuICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhhdWRpb1VybCk7XHJcbiAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgIHNldEN1cnJlbnRTb25nKGF1ZGlvKTtcclxuICAgICAgICBzZXRQbGF5aW5nU29uZ1VybChhdWRpb1VybCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGF1ZGlvVXJsKTtcclxuICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICBzZXRDdXJyZW50U29uZyhhdWRpbyk7XHJcbiAgICAgIHNldFBsYXlpbmdTb25nVXJsKGF1ZGlvVXJsKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBzb25nU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHNvbmdzLmZpbHRlcigoc29uZykgPT5cclxuICAgICAgc29uZy50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlsdGVyZWRTb25ncyA9IHF1ZXJ5ID8gc29uZ1NlYXJjaCgpIDogc29uZ3M7XHJcblxyXG4gIGNvbnN0IFtwbGF5TGlzdCwgc2V0UGxheUxpc3RdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3Qgc2hvd1BsYXlMaXN0cyA9IGFzeW5jKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcDEgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3BsYXlsaXN0c1wiKVxyXG4gICAgc2V0UGxheUxpc3QocmVzcDEuZGF0YSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwXCI+XHJcbiAgICAgIDxkaXYgPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLThcIj5SYW5kb20gTXVzaWM8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItMTBcIj5cclxuICAgICAgICA8aW5wdXQgdmFsdWU9e3F1ZXJ5fSBvbkNoYW5nZT17ZSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInB5LTIgcHgtNCBib3JkZXItMiByb3VuZGVkXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCf0L7QuNGB0Log0LzRjtC30LjQulwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2ZpbHRlcmVkU29uZ3MubWFwKChzb25nKSA9PiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtuZXcgRGF0ZSgpLmdldFRpbWUoKSArIE1hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBwLTQgbWItNCByb3VuZGVkLWxnIGJnLXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpzaGFkb3ctbWQgdHJhbnNpdGlvbi1zaGFkb3cgZGFyazpiZy1ncmF5LTk1MCBkYXJrOmhvdmVyOnNoYWRvdy1sZyBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5KHNvbmcuYXVkaW9VcmwpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB3LTE2IGgtMTYgcm91bmRlZC1tZCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17c29uZy5jb3ZlckltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD1cIlNvbmcgQ292ZXJcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXs2NH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezY0fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSB0cnVuY2F0ZSB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgIHtzb25nLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgdHJ1bmNhdGUgZGFyazp0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgICAgICAge3NvbmcuYXJ0aXN0fVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgIH0pOyBcclxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgc2hvd1BsYXlMaXN0cygpXHJcbiAgICAgICAgICAgICBzZXRWaXNpYmxlKHRydWUpXHJcbiAgICAgICAgICB9fSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtc21cIj5cclxuICAgICAgICAgICAg0JTQvtCx0LDQstC40YLRjCA8YnIgLz4g0LIg0L/Qu9C10LnQu9C40YHRglxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8TXlNb2RhbD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L015TW9kYWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTcwMCBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICB7cGxheWluZ1NvbmdVcmwgPT09IHNvbmcuYXVkaW9VcmwgPyAnUGF1c2UnIDogJ1BsYXknfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICAgICAge3NvbmcuZHVyYXRpb259XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29uZ0l0ZW07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJTb25nSXRlbSIsInNvbmdzIiwiY3VycmVudFNvbmciLCJzZXRDdXJyZW50U29uZyIsInBsYXlpbmdTb25nVXJsIiwic2V0UGxheWluZ1NvbmdVcmwiLCJoYW5kbGVQbGF5IiwiYXVkaW9VcmwiLCJwYXVzZSIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwicXVlcnkiLCJzZXRRdWVyeSIsInNvbmdTZWFyY2giLCJmaWx0ZXIiLCJzb25nIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZmlsdGVyZWRTb25ncyIsInBsYXlMaXN0Iiwic2V0UGxheUxpc3QiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInNob3dQbGF5TGlzdHMiLCJyZXNwMSIsImdldCIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJtYXAiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiY292ZXJJbWFnZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDMiLCJwIiwiYXJ0aXN0IiwiYnIiLCJNeU1vZGFsIiwiZHVyYXRpb24iLCJEYXRlIiwiZ2V0VGltZSIsIk1hdGgiLCJyYW5kb20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/SongItem.tsx\n"));

/***/ })

});