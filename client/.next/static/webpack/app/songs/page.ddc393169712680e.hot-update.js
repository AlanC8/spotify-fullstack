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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _modal_MyModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/MyModal */ \"(app-pages-browser)/./src/app/components/modal/MyModal.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst SongItem = (param)=>{\n    let { songs } = param;\n    _s();\n    const [currentSong, setCurrentSong] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [playingSongUrl, setPlayingSongUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handlePlay = (audioUrl)=>{\n        if (currentSong) {\n            if (playingSongUrl === audioUrl) {\n                currentSong.pause();\n                setCurrentSong(null);\n                setPlayingSongUrl(null);\n            } else {\n                currentSong.pause();\n                const audio = new Audio(audioUrl);\n                audio.play();\n                setCurrentSong(audio);\n                setPlayingSongUrl(audioUrl);\n            }\n        } else {\n            const audio = new Audio(audioUrl);\n            audio.play();\n            setCurrentSong(audio);\n            setPlayingSongUrl(audioUrl);\n        }\n    };\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const songSearch = ()=>{\n        return songs.filter((song)=>song.title.toLowerCase().includes(query.toLowerCase()));\n    };\n    const filteredSongs = query ? songSearch() : songs;\n    const [playList, setPlayList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const showPlayLists = async ()=>{\n        const resp1 = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3000/api/v1/playlists\");\n        setPlayList(resp1.data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold text-center mb-8\",\n                        children: \"Random Music\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center mb-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            value: query,\n                            onChange: (e)=>setQuery(e.target.value),\n                            className: \"py-2 px-4 border-2 rounded\",\n                            type: \"text\",\n                            placeholder: \"Поиск мюзик\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            filteredSongs.map((song)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-4 p-4 mb-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow dark:bg-gray-950 dark:hover:shadow-lg cursor-pointer\",\n                    onClick: ()=>handlePlay(song.audioUrl),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-shrink-0 w-16 h-16 rounded-md overflow-hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: song.coverImage,\n                                alt: \"Song Cover\",\n                                width: 64,\n                                height: 64,\n                                className: \"w-full h-full object-cover\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1 min-w-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-lg font-medium truncate text-gray-800 dark:text-white\",\n                                    children: song.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-500 truncate dark:text-gray-400\",\n                                    children: song.artist\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>{\n                                showPlayLists();\n                                setVisible(true);\n                            },\n                            className: \"text-center text-white text-sm\",\n                            children: [\n                                \"Добавить \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 22\n                                }, undefined),\n                                \" в плейлист\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modal_MyModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            visible: visible,\n                            setVisible: setVisible,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: playList.map((playlist)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \" h1 \"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-blue-500 hover:text-blue-700 cursor-pointer\",\n                            children: playingSongUrl === song.audioUrl ? \"Pause\" : \"Play\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-sm text-gray-500 dark:text-gray-400\",\n                            children: song.duration\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, new Date().getTime() + Math.random(), true, {\n                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SongItem, \"GTHdW5vMA1FV2mIhZhkLhlepv8c=\");\n_c = SongItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SongItem);\nvar _c;\n$RefreshReg$(_c, \"SongItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Tb25nSXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFFZDtBQUNZO0FBTXRDLE1BQU1JLFdBQW9DO1FBQUMsRUFBRUMsS0FBSyxFQUFFOztJQUNsRCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR04sK0NBQVFBLENBQTBCO0lBQ3hFLE1BQU0sQ0FBQ08sZ0JBQWdCQyxrQkFBa0IsR0FBR1IsK0NBQVFBLENBQWdCO0lBRXBFLE1BQU1TLGFBQWEsQ0FBQ0M7UUFDbEIsSUFBSUwsYUFBYTtZQUNmLElBQUlFLG1CQUFtQkcsVUFBVTtnQkFDL0JMLFlBQVlNLEtBQUs7Z0JBQ2pCTCxlQUFlO2dCQUNmRSxrQkFBa0I7WUFDcEIsT0FBTztnQkFDTEgsWUFBWU0sS0FBSztnQkFDakIsTUFBTUMsUUFBUSxJQUFJQyxNQUFNSDtnQkFDeEJFLE1BQU1FLElBQUk7Z0JBQ1ZSLGVBQWVNO2dCQUNmSixrQkFBa0JFO1lBQ3BCO1FBQ0YsT0FBTztZQUNMLE1BQU1FLFFBQVEsSUFBSUMsTUFBTUg7WUFDeEJFLE1BQU1FLElBQUk7WUFDVlIsZUFBZU07WUFDZkosa0JBQWtCRTtRQUNwQjtJQUNGO0lBRUEsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNaUIsYUFBYTtRQUNqQixPQUFPYixNQUFNYyxNQUFNLENBQUMsQ0FBQ0MsT0FDbkJBLEtBQUtDLEtBQUssQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNQLE1BQU1NLFdBQVc7SUFFdkQ7SUFFQSxNQUFNRSxnQkFBZ0JSLFFBQVFFLGVBQWViO0lBRTdDLE1BQU0sQ0FBQ29CLFVBQVVDLFlBQVksR0FBR3pCLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDMEIsU0FBU0MsV0FBVyxHQUFHM0IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTTRCLGdCQUFnQjtRQUNwQixNQUFNQyxRQUFRLE1BQU01Qiw2Q0FBS0EsQ0FBQzZCLEdBQUcsQ0FBQztRQUM5QkwsWUFBWUksTUFBTUUsSUFBSTtJQUN4QjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7O2tDQUNDLDhEQUFDRTt3QkFBR0QsV0FBVTtrQ0FBc0M7Ozs7OztrQ0FDcEQsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRTs0QkFDQ0MsT0FBT3JCOzRCQUNQc0IsVUFBVSxDQUFDQyxJQUFNdEIsU0FBU3NCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs0QkFDeENILFdBQVU7NEJBQ1ZPLE1BQUs7NEJBQ0xDLGFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSWpCbEIsY0FBY21CLEdBQUcsQ0FBQyxDQUFDdkIscUJBQ2xCLDhEQUFDYTtvQkFFQ0MsV0FBVTtvQkFDVlUsU0FBUyxJQUFNbEMsV0FBV1UsS0FBS1QsUUFBUTs7c0NBRXZDLDhEQUFDc0I7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNXO2dDQUNDQyxLQUFLMUIsS0FBSzJCLFVBQVU7Z0NBQ3BCQyxLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSaEIsV0FBVTs7Ozs7Ozs7Ozs7c0NBR2QsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ2lCO29DQUFHakIsV0FBVTs4Q0FDWGQsS0FBS0MsS0FBSzs7Ozs7OzhDQUViLDhEQUFDK0I7b0NBQUVsQixXQUFVOzhDQUNWZCxLQUFLaUMsTUFBTTs7Ozs7Ozs7Ozs7O3NDQUloQiw4REFBQ3BCOzRCQUNDVyxTQUFTO2dDQUNQZjtnQ0FDQUQsV0FBVzs0QkFDYjs0QkFDQU0sV0FBVTs7Z0NBQ1g7OENBQ1UsOERBQUNvQjs7Ozs7Z0NBQUs7Ozs7Ozs7c0NBRWpCLDhEQUFDbkQsc0RBQU9BOzRCQUFDd0IsU0FBU0E7NEJBQVNDLFlBQVlBO3NDQUNyQyw0RUFBQ0s7MENBQ0VSLFNBQVNrQixHQUFHLENBQUMsQ0FBQ1kseUJBQ2IsOERBQUNwQjtrREFBRzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJViw4REFBQ0Y7NEJBQUlDLFdBQVU7c0NBQ1oxQixtQkFBbUJZLEtBQUtULFFBQVEsR0FBRyxVQUFVOzs7Ozs7c0NBRWhELDhEQUFDc0I7NEJBQUlDLFdBQVU7c0NBQ1pkLEtBQUtvQyxRQUFROzs7Ozs7O21CQTFDWCxJQUFJQyxPQUFPQyxPQUFPLEtBQUtDLEtBQUtDLE1BQU07Ozs7Ozs7Ozs7O0FBZ0RqRDtHQTFHTXhEO0tBQUFBO0FBNEdOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Tb25nSXRlbS50c3g/YjI0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElNdXNpYyBmcm9tIFwiLi4vdHlwZXMvbXVzaWMudHlwZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBNeU1vZGFsIGZyb20gXCIuL21vZGFsL015TW9kYWxcIjtcclxuXHJcbmludGVyZmFjZSBTb25nSXRlbVByb3BzIHtcclxuICBzb25nczogSU11c2ljW107XHJcbn1cclxuXHJcbmNvbnN0IFNvbmdJdGVtOiBSZWFjdC5GQzxTb25nSXRlbVByb3BzPiA9ICh7IHNvbmdzIH0pID0+IHtcclxuICBjb25zdCBbY3VycmVudFNvbmcsIHNldEN1cnJlbnRTb25nXSA9IHVzZVN0YXRlPEhUTUxBdWRpb0VsZW1lbnQgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbcGxheWluZ1NvbmdVcmwsIHNldFBsYXlpbmdTb25nVXJsXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQbGF5ID0gKGF1ZGlvVXJsOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChjdXJyZW50U29uZykge1xyXG4gICAgICBpZiAocGxheWluZ1NvbmdVcmwgPT09IGF1ZGlvVXJsKSB7XHJcbiAgICAgICAgY3VycmVudFNvbmcucGF1c2UoKTtcclxuICAgICAgICBzZXRDdXJyZW50U29uZyhudWxsKTtcclxuICAgICAgICBzZXRQbGF5aW5nU29uZ1VybChudWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50U29uZy5wYXVzZSgpO1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGF1ZGlvVXJsKTtcclxuICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgc2V0Q3VycmVudFNvbmcoYXVkaW8pO1xyXG4gICAgICAgIHNldFBsYXlpbmdTb25nVXJsKGF1ZGlvVXJsKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oYXVkaW9VcmwpO1xyXG4gICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgIHNldEN1cnJlbnRTb25nKGF1ZGlvKTtcclxuICAgICAgc2V0UGxheWluZ1NvbmdVcmwoYXVkaW9VcmwpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHNvbmdTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc29uZ3MuZmlsdGVyKChzb25nKSA9PlxyXG4gICAgICBzb25nLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWRTb25ncyA9IHF1ZXJ5ID8gc29uZ1NlYXJjaCgpIDogc29uZ3M7XHJcblxyXG4gIGNvbnN0IFtwbGF5TGlzdCwgc2V0UGxheUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzaG93UGxheUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcDEgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3BsYXlsaXN0c1wiKTtcclxuICAgIHNldFBsYXlMaXN0KHJlc3AxLmRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtYi04XCI+UmFuZG9tIE11c2ljPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItMTBcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17cXVlcnl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTQgYm9yZGVyLTIgcm91bmRlZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0LjRgdC6INC80Y7Qt9C40LpcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtmaWx0ZXJlZFNvbmdzLm1hcCgoc29uZykgPT4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17bmV3IERhdGUoKS5nZXRUaW1lKCkgKyBNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgcC00IG1iLTQgcm91bmRlZC1sZyBiZy13aGl0ZSBzaGFkb3ctc20gaG92ZXI6c2hhZG93LW1kIHRyYW5zaXRpb24tc2hhZG93IGRhcms6YmctZ3JheS05NTAgZGFyazpob3ZlcjpzaGFkb3ctbGcgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGxheShzb25nLmF1ZGlvVXJsKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgdy0xNiBoLTE2IHJvdW5kZWQtbWQgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e3NvbmcuY292ZXJJbWFnZX1cclxuICAgICAgICAgICAgICBhbHQ9XCJTb25nIENvdmVyXCJcclxuICAgICAgICAgICAgICB3aWR0aD17NjR9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs2NH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1pbi13LTBcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gdHJ1bmNhdGUgdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICB7c29uZy50aXRsZX1cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIHRydW5jYXRlIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICAgIHtzb25nLmFydGlzdH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2hvd1BsYXlMaXN0cygpO1xyXG4gICAgICAgICAgICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtd2hpdGUgdGV4dC1zbVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgINCU0L7QsdCw0LLQuNGC0YwgPGJyIC8+INCyINC/0LvQtdC50LvQuNGB0YJcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPE15TW9kYWwgdmlzaWJsZT17dmlzaWJsZX0gc2V0VmlzaWJsZT17c2V0VmlzaWJsZX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge3BsYXlMaXN0Lm1hcCgocGxheWxpc3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxoMT4gaDEgPC9oMT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L015TW9kYWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTcwMCBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICB7cGxheWluZ1NvbmdVcmwgPT09IHNvbmcuYXVkaW9VcmwgPyBcIlBhdXNlXCIgOiBcIlBsYXlcIn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgICAgIHtzb25nLmR1cmF0aW9ufVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvbmdJdGVtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiTXlNb2RhbCIsIlNvbmdJdGVtIiwic29uZ3MiLCJjdXJyZW50U29uZyIsInNldEN1cnJlbnRTb25nIiwicGxheWluZ1NvbmdVcmwiLCJzZXRQbGF5aW5nU29uZ1VybCIsImhhbmRsZVBsYXkiLCJhdWRpb1VybCIsInBhdXNlIiwiYXVkaW8iLCJBdWRpbyIsInBsYXkiLCJxdWVyeSIsInNldFF1ZXJ5Iiwic29uZ1NlYXJjaCIsImZpbHRlciIsInNvbmciLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJmaWx0ZXJlZFNvbmdzIiwicGxheUxpc3QiLCJzZXRQbGF5TGlzdCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwic2hvd1BsYXlMaXN0cyIsInJlc3AxIiwiZ2V0IiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm1hcCIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJjb3ZlckltYWdlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMyIsInAiLCJhcnRpc3QiLCJiciIsInBsYXlsaXN0IiwiZHVyYXRpb24iLCJEYXRlIiwiZ2V0VGltZSIsIk1hdGgiLCJyYW5kb20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/SongItem.tsx\n"));

/***/ })

});