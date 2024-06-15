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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst PlaylistComponent = ()=>{\n    _s();\n    const [playlists, setPlaylists] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedPlaylist, setSelectedPlaylist] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const navigate = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3000/api/v1/playlists\").then((response)=>setPlaylists(response.data)).catch((error)=>console.error(\"Error fetching playlists:\", error));\n    }, []);\n    const handleAddSongToPlaylist = (playlistId, songId)=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3000/api/v1/playlists/\".concat(playlistId, \"/add-song\"), {\n            songId\n        }).then((response)=>{\n            // Update the playlists state with the updated playlist\n            setPlaylists(playlists.map((p)=>p._id === response.data._id ? response.data : p));\n        }).catch((error)=>console.error(\"Error adding song to playlist:\", error));\n    };\n    // const handleRemoveSongFromPlaylist = (playlistId, songId) => {\n    //   axios\n    //     .post(\n    //       `http://localhost:3000/api/v1/playlists/${playlistId}/remove-song`,\n    //       { songId }\n    //     )\n    //     .then((response) => {\n    //       // Update the playlists state with the updated playlist\n    //       setPlaylists(\n    //         playlists.map((p) =>\n    //           p._id === response.data._id ? response.data : p\n    //         )\n    //       );\n    //     })\n    //     .catch((error) =>\n    //       console.error(\"Error removing song from playlist:\", error)\n    //     );\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-4\",\n        children: playlists.map((playlist)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>{\n                    navigate.push(\"playlist/\".concat(playlist._id));\n                },\n                className: \"mb-4 p-4 bg-gray-100 rounded border-2 cursor-pointer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl font-bold\",\n                        children: playlist.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\PlayList.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" Songs: \",\n                            playlist.music.length,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\PlayList.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"mt-2\",\n                        children: playlist.songs && playlist.songs.map((songId)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"flex items-center justify-between py-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: songId\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\PlayList.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleRemoveSongFromPlaylist(playlist._id, songId),\n                                        className: \"ml-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded\",\n                                        children: \"Remove\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\PlayList.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, songId, true, {\n                                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\PlayList.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\PlayList.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, playlist._id, true, {\n                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\PlayList.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\PlayList.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PlaylistComponent, \"JL2NDDKuDeZ22an2ViYv+VShmik=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PlaylistComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlaylistComponent);\nvar _c;\n$RefreshReg$(_c, \"PlaylistComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9QbGF5TGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDQTtBQUU1QyxNQUFNSSxvQkFBb0I7O0lBQ3hCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdDLE1BQU0sQ0FBQ0ksa0JBQWtCQyxvQkFBb0IsR0FBR0wsK0NBQVFBLENBQUM7SUFFekQsTUFBTU0sV0FBV1IsMERBQVNBO0lBQzFCQyxnREFBU0EsQ0FBQztRQUNSRiw2Q0FBS0EsQ0FDRlUsR0FBRyxDQUFDLDBDQUNKQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYU4sYUFBYU0sU0FBU0MsSUFBSSxHQUM3Q0MsS0FBSyxDQUFDLENBQUNDLFFBQVVDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO0lBQ2pFLEdBQUcsRUFBRTtJQUVMLE1BQU1FLDBCQUEwQixDQUFDQyxZQUFZQztRQUMzQ25CLDZDQUFLQSxDQUNGb0IsSUFBSSxDQUFDLDBDQUFxRCxPQUFYRixZQUFXLGNBQVk7WUFDckVDO1FBQ0YsR0FDQ1IsSUFBSSxDQUFDLENBQUNDO1lBQ0wsdURBQXVEO1lBQ3ZETixhQUNFRCxVQUFVZ0IsR0FBRyxDQUFDLENBQUNDLElBQ2JBLEVBQUVDLEdBQUcsS0FBS1gsU0FBU0MsSUFBSSxDQUFDVSxHQUFHLEdBQUdYLFNBQVNDLElBQUksR0FBR1M7UUFHcEQsR0FDQ1IsS0FBSyxDQUFDLENBQUNDLFFBQVVDLFFBQVFELEtBQUssQ0FBQyxrQ0FBa0NBO0lBQ3RFO0lBRUEsaUVBQWlFO0lBQ2pFLFVBQVU7SUFDVixhQUFhO0lBQ2IsNEVBQTRFO0lBQzVFLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsNEJBQTRCO0lBQzVCLGdFQUFnRTtJQUNoRSxzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLDREQUE0RDtJQUM1RCxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIsbUVBQW1FO0lBQ25FLFNBQVM7SUFDVCxLQUFLO0lBRUwscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVU7a0JBQ1pwQixVQUFVZ0IsR0FBRyxDQUFDLENBQUNLLHlCQUNkLDhEQUFDRjtnQkFFQ0csU0FBUztvQkFDUGxCLFNBQVNtQixJQUFJLENBQUMsWUFBeUIsT0FBYkYsU0FBU0gsR0FBRztnQkFDeEM7Z0JBQ0FFLFdBQVU7O2tDQUVWLDhEQUFDSTt3QkFBR0osV0FBVTtrQ0FBcUJDLFNBQVNJLElBQUk7Ozs7OztrQ0FDaEQsOERBQUNSOzs0QkFBRTs0QkFBU0ksU0FBU0ssS0FBSyxDQUFDQyxNQUFNOzRCQUFDOzs7Ozs7O2tDQUNsQyw4REFBQ0M7d0JBQUdSLFdBQVU7a0NBQ1hDLFNBQVNRLEtBQUssSUFDYlIsU0FBU1EsS0FBSyxDQUFDYixHQUFHLENBQUMsQ0FBQ0YsdUJBQ2xCLDhEQUFDZ0I7Z0NBRUNWLFdBQVU7O2tEQUVWLDhEQUFDVztrREFBTWpCOzs7Ozs7a0RBQ1AsOERBQUNrQjt3Q0FDQ1YsU0FBUyxJQUNQVyw2QkFBNkJaLFNBQVNILEdBQUcsRUFBRUo7d0NBRTdDTSxXQUFVO2tEQUNYOzs7Ozs7OytCQVRJTjs7Ozs7Ozs7Ozs7ZUFaUk8sU0FBU0gsR0FBRzs7Ozs7Ozs7OztBQStCM0I7R0FsRk1uQjs7UUFJYUgsc0RBQVNBOzs7S0FKdEJHO0FBb0ZOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1BsYXlMaXN0LnRzeD84ZDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQbGF5bGlzdENvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBbcGxheWxpc3RzLCBzZXRQbGF5bGlzdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFBsYXlsaXN0LCBzZXRTZWxlY3RlZFBsYXlsaXN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZVJvdXRlcigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9wbGF5bGlzdHNcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzZXRQbGF5bGlzdHMocmVzcG9uc2UuZGF0YSkpXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwbGF5bGlzdHM6XCIsIGVycm9yKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRTb25nVG9QbGF5bGlzdCA9IChwbGF5bGlzdElkLCBzb25nSWQpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3BsYXlsaXN0cy8ke3BsYXlsaXN0SWR9L2FkZC1zb25nYCwge1xyXG4gICAgICAgIHNvbmdJZCxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBwbGF5bGlzdHMgc3RhdGUgd2l0aCB0aGUgdXBkYXRlZCBwbGF5bGlzdFxyXG4gICAgICAgIHNldFBsYXlsaXN0cyhcclxuICAgICAgICAgIHBsYXlsaXN0cy5tYXAoKHApID0+XHJcbiAgICAgICAgICAgIHAuX2lkID09PSByZXNwb25zZS5kYXRhLl9pZCA/IHJlc3BvbnNlLmRhdGEgOiBwXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBzb25nIHRvIHBsYXlsaXN0OlwiLCBlcnJvcikpO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZVJlbW92ZVNvbmdGcm9tUGxheWxpc3QgPSAocGxheWxpc3RJZCwgc29uZ0lkKSA9PiB7XHJcbiAgLy8gICBheGlvc1xyXG4gIC8vICAgICAucG9zdChcclxuICAvLyAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9wbGF5bGlzdHMvJHtwbGF5bGlzdElkfS9yZW1vdmUtc29uZ2AsXHJcbiAgLy8gICAgICAgeyBzb25nSWQgfVxyXG4gIC8vICAgICApXHJcbiAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gIC8vICAgICAgIC8vIFVwZGF0ZSB0aGUgcGxheWxpc3RzIHN0YXRlIHdpdGggdGhlIHVwZGF0ZWQgcGxheWxpc3RcclxuICAvLyAgICAgICBzZXRQbGF5bGlzdHMoXHJcbiAgLy8gICAgICAgICBwbGF5bGlzdHMubWFwKChwKSA9PlxyXG4gIC8vICAgICAgICAgICBwLl9pZCA9PT0gcmVzcG9uc2UuZGF0YS5faWQgPyByZXNwb25zZS5kYXRhIDogcFxyXG4gIC8vICAgICAgICAgKVxyXG4gIC8vICAgICAgICk7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+XHJcbiAgLy8gICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlbW92aW5nIHNvbmcgZnJvbSBwbGF5bGlzdDpcIiwgZXJyb3IpXHJcbiAgLy8gICAgICk7XHJcbiAgLy8gfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxyXG4gICAgICB7cGxheWxpc3RzLm1hcCgocGxheWxpc3QpID0+IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e3BsYXlsaXN0Ll9pZH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgbmF2aWdhdGUucHVzaChgcGxheWxpc3QvJHtwbGF5bGlzdC5faWR9YCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItNCBwLTQgYmctZ3JheS0xMDAgcm91bmRlZCBib3JkZXItMiBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+e3BsYXlsaXN0Lm5hbWV9PC9oMz5cclxuICAgICAgICAgIDxwPiBTb25nczoge3BsYXlsaXN0Lm11c2ljLmxlbmd0aH0gPC9wPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAge3BsYXlsaXN0LnNvbmdzICYmXHJcbiAgICAgICAgICAgICAgcGxheWxpc3Quc29uZ3MubWFwKChzb25nSWQpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3NvbmdJZH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57c29uZ0lkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVSZW1vdmVTb25nRnJvbVBsYXlsaXN0KHBsYXlsaXN0Ll9pZCwgc29uZ0lkKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTYwMCB0ZXh0LXdoaXRlIHB4LTIgcHktMSByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlbW92ZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5bGlzdENvbXBvbmVudDtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQbGF5bGlzdENvbXBvbmVudCIsInBsYXlsaXN0cyIsInNldFBsYXlsaXN0cyIsInNlbGVjdGVkUGxheWxpc3QiLCJzZXRTZWxlY3RlZFBsYXlsaXN0IiwibmF2aWdhdGUiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVBZGRTb25nVG9QbGF5bGlzdCIsInBsYXlsaXN0SWQiLCJzb25nSWQiLCJwb3N0IiwibWFwIiwicCIsIl9pZCIsImRpdiIsImNsYXNzTmFtZSIsInBsYXlsaXN0Iiwib25DbGljayIsInB1c2giLCJoMyIsIm5hbWUiLCJtdXNpYyIsImxlbmd0aCIsInVsIiwic29uZ3MiLCJsaSIsInNwYW4iLCJidXR0b24iLCJoYW5kbGVSZW1vdmVTb25nRnJvbVBsYXlsaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/PlayList.tsx\n"));

/***/ })

});