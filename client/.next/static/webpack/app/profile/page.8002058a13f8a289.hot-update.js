"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./src/app/components/PlayList.tsx":
/*!*****************************************!*\
  !*** ./src/app/components/PlayList.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst PlaylistComponent = ()=>{\n    _s();\n    const [playlists, setPlaylists] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedPlaylist, setSelectedPlaylist] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const navigate = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3000/api/v1/playlists\").then((response)=>setPlaylists(response.data)).catch((error)=>console.error(\"Error fetching playlists:\", error));\n    }, []);\n    const handleAddSongToPlaylist = (playlistId, songId)=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3000/api/v1/playlists/\".concat(playlistId, \"/add-song\"), {\n            songId\n        }).then((response)=>{\n            // Update the playlists state with the updated playlist\n            setPlaylists(playlists.map((p)=>p._id === response.data._id ? response.data : p));\n        }).catch((error)=>console.error(\"Error adding song to playlist:\", error));\n    };\n    // const handleRemoveSongFromPlaylist = (playlistId, songId) => {\n    //   axios\n    //     .post(\n    //       `http://localhost:3000/api/v1/playlists/${playlistId}/remove-song`,\n    //       { songId }\n    //     )\n    //     .then((response) => {\n    //       // Update the playlists state with the updated playlist\n    //       setPlaylists(\n    //         playlists.map((p) =>\n    //           p._id === response.data._id ? response.data : p\n    //         )\n    //       );\n    //     })\n    //     .catch((error) =>\n    //       console.error(\"Error removing song from playlist:\", error)\n    //     );\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-4\",\n        children: playlists.map((playlist)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>{\n                    navigate.push(\"playlist/\".concat(playlist._id));\n                },\n                className: \"mb-4 p-4 bg-gray-100 rounded border-2 cursor-pointer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-xl font-bold\",\n                                children: playlist.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\PlayList.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \" Songs: \",\n                                    playlist.music.length,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\PlayList.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, undefined),\n                            \"s\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\PlayList.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Удалить плейлист\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\PlayList.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, playlist._id, true, {\n                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\PlayList.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\PlayList.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PlaylistComponent, \"JL2NDDKuDeZ22an2ViYv+VShmik=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PlaylistComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlaylistComponent);\nvar _c;\n$RefreshReg$(_c, \"PlaylistComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9QbGF5TGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDQTtBQUU1QyxNQUFNSSxvQkFBb0I7O0lBQ3hCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdDLE1BQU0sQ0FBQ0ksa0JBQWtCQyxvQkFBb0IsR0FBR0wsK0NBQVFBLENBQUM7SUFFekQsTUFBTU0sV0FBV1IsMERBQVNBO0lBQzFCQyxnREFBU0EsQ0FBQztRQUNSRiw2Q0FBS0EsQ0FDRlUsR0FBRyxDQUFDLDBDQUNKQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYU4sYUFBYU0sU0FBU0MsSUFBSSxHQUM3Q0MsS0FBSyxDQUFDLENBQUNDLFFBQVVDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO0lBQ2pFLEdBQUcsRUFBRTtJQUVMLE1BQU1FLDBCQUEwQixDQUFDQyxZQUFZQztRQUMzQ25CLDZDQUFLQSxDQUNGb0IsSUFBSSxDQUFDLDBDQUFxRCxPQUFYRixZQUFXLGNBQVk7WUFDckVDO1FBQ0YsR0FDQ1IsSUFBSSxDQUFDLENBQUNDO1lBQ0wsdURBQXVEO1lBQ3ZETixhQUNFRCxVQUFVZ0IsR0FBRyxDQUFDLENBQUNDLElBQ2JBLEVBQUVDLEdBQUcsS0FBS1gsU0FBU0MsSUFBSSxDQUFDVSxHQUFHLEdBQUdYLFNBQVNDLElBQUksR0FBR1M7UUFHcEQsR0FDQ1IsS0FBSyxDQUFDLENBQUNDLFFBQVVDLFFBQVFELEtBQUssQ0FBQyxrQ0FBa0NBO0lBQ3RFO0lBRUEsaUVBQWlFO0lBQ2pFLFVBQVU7SUFDVixhQUFhO0lBQ2IsNEVBQTRFO0lBQzVFLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsNEJBQTRCO0lBQzVCLGdFQUFnRTtJQUNoRSxzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLDREQUE0RDtJQUM1RCxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIsbUVBQW1FO0lBQ25FLFNBQVM7SUFDVCxLQUFLO0lBRUwscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVU7a0JBQ1pwQixVQUFVZ0IsR0FBRyxDQUFDLENBQUNLLHlCQUNkLDhEQUFDRjtnQkFFQ0csU0FBUztvQkFDUGxCLFNBQVNtQixJQUFJLENBQUMsWUFBeUIsT0FBYkYsU0FBU0gsR0FBRztnQkFDeEM7Z0JBQ0FFLFdBQVU7O2tDQUVWLDhEQUFDRDs7MENBQ0MsOERBQUNLO2dDQUFHSixXQUFVOzBDQUFxQkMsU0FBU0ksSUFBSTs7Ozs7OzBDQUNoRCw4REFBQ1I7O29DQUFFO29DQUFTSSxTQUFTSyxLQUFLLENBQUNDLE1BQU07b0NBQUM7Ozs7Ozs7NEJBQUs7Ozs7Ozs7a0NBRXpDLDhEQUFDQztrQ0FBTzs7Ozs7OztlQVZIUCxTQUFTSCxHQUFHOzs7Ozs7Ozs7O0FBZTNCO0dBbEVNbkI7O1FBSWFILHNEQUFTQTs7O0tBSnRCRztBQW9FTiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9QbGF5TGlzdC50c3g/OGQ1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUGxheWxpc3RDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3BsYXlsaXN0cywgc2V0UGxheWxpc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VsZWN0ZWRQbGF5bGlzdCwgc2V0U2VsZWN0ZWRQbGF5bGlzdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VSb3V0ZXIoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvcGxheWxpc3RzXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc2V0UGxheWxpc3RzKHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcGxheWxpc3RzOlwiLCBlcnJvcikpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkU29uZ1RvUGxheWxpc3QgPSAocGxheWxpc3RJZCwgc29uZ0lkKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9wbGF5bGlzdHMvJHtwbGF5bGlzdElkfS9hZGQtc29uZ2AsIHtcclxuICAgICAgICBzb25nSWQsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgcGxheWxpc3RzIHN0YXRlIHdpdGggdGhlIHVwZGF0ZWQgcGxheWxpc3RcclxuICAgICAgICBzZXRQbGF5bGlzdHMoXHJcbiAgICAgICAgICBwbGF5bGlzdHMubWFwKChwKSA9PlxyXG4gICAgICAgICAgICBwLl9pZCA9PT0gcmVzcG9uc2UuZGF0YS5faWQgPyByZXNwb25zZS5kYXRhIDogcFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgc29uZyB0byBwbGF5bGlzdDpcIiwgZXJyb3IpKTtcclxuICB9O1xyXG5cclxuICAvLyBjb25zdCBoYW5kbGVSZW1vdmVTb25nRnJvbVBsYXlsaXN0ID0gKHBsYXlsaXN0SWQsIHNvbmdJZCkgPT4ge1xyXG4gIC8vICAgYXhpb3NcclxuICAvLyAgICAgLnBvc3QoXHJcbiAgLy8gICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvcGxheWxpc3RzLyR7cGxheWxpc3RJZH0vcmVtb3ZlLXNvbmdgLFxyXG4gIC8vICAgICAgIHsgc29uZ0lkIH1cclxuICAvLyAgICAgKVxyXG4gIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAvLyAgICAgICAvLyBVcGRhdGUgdGhlIHBsYXlsaXN0cyBzdGF0ZSB3aXRoIHRoZSB1cGRhdGVkIHBsYXlsaXN0XHJcbiAgLy8gICAgICAgc2V0UGxheWxpc3RzKFxyXG4gIC8vICAgICAgICAgcGxheWxpc3RzLm1hcCgocCkgPT5cclxuICAvLyAgICAgICAgICAgcC5faWQgPT09IHJlc3BvbnNlLmRhdGEuX2lkID8gcmVzcG9uc2UuZGF0YSA6IHBcclxuICAvLyAgICAgICAgIClcclxuICAvLyAgICAgICApO1xyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAuY2F0Y2goKGVycm9yKSA9PlxyXG4gIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZW1vdmluZyBzb25nIGZyb20gcGxheWxpc3Q6XCIsIGVycm9yKVxyXG4gIC8vICAgICApO1xyXG4gIC8vIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cclxuICAgICAge3BsYXlsaXN0cy5tYXAoKHBsYXlsaXN0KSA9PiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtwbGF5bGlzdC5faWR9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRlLnB1c2goYHBsYXlsaXN0LyR7cGxheWxpc3QuX2lkfWApO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTQgcC00IGJnLWdyYXktMTAwIHJvdW5kZWQgYm9yZGVyLTIgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPntwbGF5bGlzdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDxwPiBTb25nczoge3BsYXlsaXN0Lm11c2ljLmxlbmd0aH0gPC9wPnNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbj7Qo9C00LDQu9C40YLRjCDQv9C70LXQudC70LjRgdGCPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXlsaXN0Q29tcG9uZW50O1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBsYXlsaXN0Q29tcG9uZW50IiwicGxheWxpc3RzIiwic2V0UGxheWxpc3RzIiwic2VsZWN0ZWRQbGF5bGlzdCIsInNldFNlbGVjdGVkUGxheWxpc3QiLCJuYXZpZ2F0ZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUFkZFNvbmdUb1BsYXlsaXN0IiwicGxheWxpc3RJZCIsInNvbmdJZCIsInBvc3QiLCJtYXAiLCJwIiwiX2lkIiwiZGl2IiwiY2xhc3NOYW1lIiwicGxheWxpc3QiLCJvbkNsaWNrIiwicHVzaCIsImgzIiwibmFtZSIsIm11c2ljIiwibGVuZ3RoIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/PlayList.tsx\n"));

/***/ })

});