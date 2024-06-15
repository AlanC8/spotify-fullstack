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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _modal_MyModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/MyModal */ \"(app-pages-browser)/./src/app/components/modal/MyModal.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SongItem = (param)=>{\n    let { songs } = param;\n    _s();\n    const [currentSong, setCurrentSong] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [playingSongUrl, setPlayingSongUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handlePlay = (audioUrl)=>{\n        if (currentSong) {\n            if (playingSongUrl === audioUrl) {\n                currentSong.pause();\n                setCurrentSong(null);\n                setPlayingSongUrl(null);\n            } else {\n                currentSong.pause();\n                const audio = new Audio(audioUrl);\n                audio.play();\n                setCurrentSong(audio);\n                setPlayingSongUrl(audioUrl);\n            }\n        } else {\n            const audio = new Audio(audioUrl);\n            audio.play();\n            setCurrentSong(audio);\n            setPlayingSongUrl(audioUrl);\n        }\n    };\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const songSearch = ()=>{\n        return songs.filter((song)=>song.title.toLowerCase().includes(query.toLowerCase()));\n    };\n    const filteredSongs = query ? songSearch() : songs;\n    const [playList, setPlayList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedSong, setSelectedSong] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const showPlayLists = async (songId)=>{\n        const resp1 = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3000/api/v1/playlists\");\n        setPlayList(resp1.data);\n        setSelectedSong(songId);\n        setVisible(true);\n    };\n    const addToLikes = async (musicID)=>{\n        await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3000/api/v1/favmuz\", {\n            musicId: musicID\n        }, {\n            headers: {\n                Authorization: \"Bearer \".concat(localStorage.getItem(\"access\"))\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold text-center mb-8\",\n                        children: \"Random Music\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center mb-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            value: query,\n                            onChange: (e)=>setQuery(e.target.value),\n                            className: \"py-2 px-4 border-2 rounded\",\n                            type: \"text\",\n                            placeholder: \"Поиск мюзик\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/create-album\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"pb-6 text-2xl\",\n                            children: \"Создать Плейлист\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/liked-playlists\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            filteredSongs.map((song)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-4 p-4 mb-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow dark:bg-gray-950 dark:hover:shadow-lg cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-shrink-0 w-16 h-16 rounded-md overflow-hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: song.coverImage,\n                                alt: \"Song Cover\",\n                                width: 64,\n                                height: 64,\n                                className: \"w-full h-full object-cover\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1 min-w-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-lg font-medium truncate text-gray-800 dark:text-white\",\n                                    children: song.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-500 truncate dark:text-gray-400\",\n                                    children: song.artist\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>addToLikes(song._id),\n                            className: \"text-white text-xl\",\n                            children: \"♡\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: (e)=>{\n                                e.stopPropagation();\n                                showPlayLists(song._id);\n                            },\n                            className: \"text-center text-white text-sm\",\n                            children: [\n                                \"Добавить \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 22\n                                }, undefined),\n                                \" в плейлист\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modal_MyModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            visible: visible,\n                            setVisible: setVisible,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: playList.length > 0 ? playList.map((playlist)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        onClick: ()=>{\n                                            setVisible(false);\n                                            console.log(selectedSong, playlist._id);\n                                            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3000/api/v1/playlists/\".concat(playlist._id, \"/add-song\"), {\n                                                musicId: selectedSong\n                                            });\n                                        },\n                                        children: playlist.name\n                                    }, playlist._id, false, {\n                                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                        lineNumber: 124,\n                                        columnNumber: 19\n                                    }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    href: \"/create-album\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Создать плейлист\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                        lineNumber: 143,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                    lineNumber: 142,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>handlePlay(song.audioUrl),\n                            className: \"text-blue-500 hover:text-blue-700 cursor-pointer\",\n                            children: playingSongUrl === song.audioUrl ? \"Pause\" : \"Play\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 148,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-sm text-gray-500 dark:text-gray-400\",\n                            children: song.duration\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                            lineNumber: 154,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, song._id, true, {\n                    fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\SongItem.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SongItem, \"eJqeixZ3oYJasWLSwurya4ggEzY=\");\n_c = SongItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SongItem);\nvar _c;\n$RefreshReg$(_c, \"SongItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Tb25nSXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBRWQ7QUFDWTtBQUNUO0FBTTdCLE1BQU1LLFdBQW9DO1FBQUMsRUFBRUMsS0FBSyxFQUFFOztJQUNsRCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQTBCO0lBQ3hFLE1BQU0sQ0FBQ1EsZ0JBQWdCQyxrQkFBa0IsR0FBR1QsK0NBQVFBLENBQWdCO0lBRXBFLE1BQU1VLGFBQWEsQ0FBQ0M7UUFDbEIsSUFBSUwsYUFBYTtZQUNmLElBQUlFLG1CQUFtQkcsVUFBVTtnQkFDL0JMLFlBQVlNLEtBQUs7Z0JBQ2pCTCxlQUFlO2dCQUNmRSxrQkFBa0I7WUFDcEIsT0FBTztnQkFDTEgsWUFBWU0sS0FBSztnQkFDakIsTUFBTUMsUUFBUSxJQUFJQyxNQUFNSDtnQkFDeEJFLE1BQU1FLElBQUk7Z0JBQ1ZSLGVBQWVNO2dCQUNmSixrQkFBa0JFO1lBQ3BCO1FBQ0YsT0FBTztZQUNMLE1BQU1FLFFBQVEsSUFBSUMsTUFBTUg7WUFDeEJFLE1BQU1FLElBQUk7WUFDVlIsZUFBZU07WUFDZkosa0JBQWtCRTtRQUNwQjtJQUNGO0lBRUEsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNa0IsYUFBYTtRQUNqQixPQUFPYixNQUFNYyxNQUFNLENBQUMsQ0FBQ0MsT0FDbkJBLEtBQUtDLEtBQUssQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNQLE1BQU1NLFdBQVc7SUFFdkQ7SUFFQSxNQUFNRSxnQkFBZ0JSLFFBQVFFLGVBQWViO0lBRTdDLE1BQU0sQ0FBQ29CLFVBQVVDLFlBQVksR0FBRzFCLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDMkIsU0FBU0MsV0FBVyxHQUFHNUIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDNkIsY0FBY0MsZ0JBQWdCLEdBQUc5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QyxHQUFHOzs7Ozs7Ozs7OztBQXVFdkI7R0F0Sk05RDtLQUFBQTtBQXdKTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvU29uZ0l0ZW0udHN4P2IyNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJTXVzaWMgZnJvbSBcIi4uL3R5cGVzL211c2ljLnR5cGVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTXlNb2RhbCBmcm9tIFwiLi9tb2RhbC9NeU1vZGFsXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmludGVyZmFjZSBTb25nSXRlbVByb3BzIHtcclxuICBzb25nczogSU11c2ljW107XHJcbn1cclxuXHJcbmNvbnN0IFNvbmdJdGVtOiBSZWFjdC5GQzxTb25nSXRlbVByb3BzPiA9ICh7IHNvbmdzIH0pID0+IHtcclxuICBjb25zdCBbY3VycmVudFNvbmcsIHNldEN1cnJlbnRTb25nXSA9IHVzZVN0YXRlPEhUTUxBdWRpb0VsZW1lbnQgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbcGxheWluZ1NvbmdVcmwsIHNldFBsYXlpbmdTb25nVXJsXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQbGF5ID0gKGF1ZGlvVXJsOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChjdXJyZW50U29uZykge1xyXG4gICAgICBpZiAocGxheWluZ1NvbmdVcmwgPT09IGF1ZGlvVXJsKSB7XHJcbiAgICAgICAgY3VycmVudFNvbmcucGF1c2UoKTtcclxuICAgICAgICBzZXRDdXJyZW50U29uZyhudWxsKTtcclxuICAgICAgICBzZXRQbGF5aW5nU29uZ1VybChudWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50U29uZy5wYXVzZSgpO1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGF1ZGlvVXJsKTtcclxuICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgc2V0Q3VycmVudFNvbmcoYXVkaW8pO1xyXG4gICAgICAgIHNldFBsYXlpbmdTb25nVXJsKGF1ZGlvVXJsKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oYXVkaW9VcmwpO1xyXG4gICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgIHNldEN1cnJlbnRTb25nKGF1ZGlvKTtcclxuICAgICAgc2V0UGxheWluZ1NvbmdVcmwoYXVkaW9VcmwpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHNvbmdTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc29uZ3MuZmlsdGVyKChzb25nKSA9PlxyXG4gICAgICBzb25nLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWRTb25ncyA9IHF1ZXJ5ID8gc29uZ1NlYXJjaCgpIDogc29uZ3M7XHJcblxyXG4gIGNvbnN0IFtwbGF5TGlzdCwgc2V0UGxheUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VsZWN0ZWRTb25nLCBzZXRTZWxlY3RlZFNvbmddID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IHNob3dQbGF5TGlzdHMgPSBhc3luYyAoc29uZ0lkKSA9PiB7XHJcbiAgICBjb25zdCByZXNwMSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvcGxheWxpc3RzXCIpO1xyXG4gICAgc2V0UGxheUxpc3QocmVzcDEuZGF0YSk7XHJcbiAgICBzZXRTZWxlY3RlZFNvbmcoc29uZ0lkKTtcclxuICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkVG9MaWtlcyA9IGFzeW5jIChtdXNpY0lEOiBzdHJpbmcpID0+IHtcclxuICAgIGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL2Zhdm11elwiLCB7XHJcbiAgICAgIG11c2ljSWQ6IG11c2ljSUQsXHJcbiAgICB9LCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NcIil9YCxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtYi04XCI+UmFuZG9tIE11c2ljPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItMTBcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17cXVlcnl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTQgYm9yZGVyLTIgcm91bmRlZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0LjRgdC6INC80Y7Qt9C40LpcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxMaW5rIGhyZWY9e1wiL2NyZWF0ZS1hbGJ1bVwifT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGItNiB0ZXh0LTJ4bFwiPtCh0L7Qt9C00LDRgtGMINCf0LvQtdC50LvQuNGB0YI8L2gxPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9e1wiL2xpa2VkLXBsYXlsaXN0c1wifT5cclxuICAgICAgICBcclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2ZpbHRlcmVkU29uZ3MubWFwKChzb25nKSA9PiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtzb25nLl9pZH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IHAtNCBtYi00IHJvdW5kZWQtbGcgYmctd2hpdGUgc2hhZG93LXNtIGhvdmVyOnNoYWRvdy1tZCB0cmFuc2l0aW9uLXNoYWRvdyBkYXJrOmJnLWdyYXktOTUwIGRhcms6aG92ZXI6c2hhZG93LWxnIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgdy0xNiBoLTE2IHJvdW5kZWQtbWQgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e3NvbmcuY292ZXJJbWFnZX1cclxuICAgICAgICAgICAgICBhbHQ9XCJTb25nIENvdmVyXCJcclxuICAgICAgICAgICAgICB3aWR0aD17NjR9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs2NH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1pbi13LTBcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gdHJ1bmNhdGUgdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICB7c29uZy50aXRsZX1cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIHRydW5jYXRlIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICAgIHtzb25nLmFydGlzdH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGFkZFRvTGlrZXMoc29uZy5faWQpfSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGxcIj7imaE8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgIHNob3dQbGF5TGlzdHMoc29uZy5faWQpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtc21cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDQlNC+0LHQsNCy0LjRgtGMIDxiciAvPiDQsiDQv9C70LXQudC70LjRgdGCXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxNeU1vZGFsIHZpc2libGU9e3Zpc2libGV9IHNldFZpc2libGU9e3NldFZpc2libGV9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtwbGF5TGlzdC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgcGxheUxpc3QubWFwKChwbGF5bGlzdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3BsYXlsaXN0Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkU29uZywgcGxheWxpc3QuX2lkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9wbGF5bGlzdHMvJHtwbGF5bGlzdC5faWR9L2FkZC1zb25nYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG11c2ljSWQ6IHNlbGVjdGVkU29uZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3BsYXlsaXN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NyZWF0ZS1hbGJ1bWB9PlxyXG4gICAgICAgICAgICAgICAgICA8aDE+0KHQvtC30LTQsNGC0Ywg0L/Qu9C10LnQu9C40YHRgjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L015TW9kYWw+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBsYXkoc29uZy5hdWRpb1VybCl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTcwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwbGF5aW5nU29uZ1VybCA9PT0gc29uZy5hdWRpb1VybCA/IFwiUGF1c2VcIiA6IFwiUGxheVwifVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICAgICAge3NvbmcuZHVyYXRpb259XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29uZ0l0ZW07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJNeU1vZGFsIiwiTGluayIsIlNvbmdJdGVtIiwic29uZ3MiLCJjdXJyZW50U29uZyIsInNldEN1cnJlbnRTb25nIiwicGxheWluZ1NvbmdVcmwiLCJzZXRQbGF5aW5nU29uZ1VybCIsImhhbmRsZVBsYXkiLCJhdWRpb1VybCIsInBhdXNlIiwiYXVkaW8iLCJBdWRpbyIsInBsYXkiLCJxdWVyeSIsInNldFF1ZXJ5Iiwic29uZ1NlYXJjaCIsImZpbHRlciIsInNvbmciLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJmaWx0ZXJlZFNvbmdzIiwicGxheUxpc3QiLCJzZXRQbGF5TGlzdCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwic2VsZWN0ZWRTb25nIiwic2V0U2VsZWN0ZWRTb25nIiwic2hvd1BsYXlMaXN0cyIsInNvbmdJZCIsInJlc3AxIiwiZ2V0IiwiZGF0YSIsImFkZFRvTGlrZXMiLCJtdXNpY0lEIiwicG9zdCIsIm11c2ljSWQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJocmVmIiwibWFwIiwiaW1nIiwic3JjIiwiY292ZXJJbWFnZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDMiLCJwIiwiYXJ0aXN0Iiwib25DbGljayIsIl9pZCIsInN0b3BQcm9wYWdhdGlvbiIsImJyIiwibGVuZ3RoIiwicGxheWxpc3QiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImR1cmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/SongItem.tsx\n"));

/***/ })

});