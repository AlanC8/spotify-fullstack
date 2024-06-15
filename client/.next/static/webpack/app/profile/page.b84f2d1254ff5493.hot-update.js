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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst PlaylistComponent = ()=>{\n    _s();\n    const [playlists, setPlaylists] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedPlaylist, setSelectedPlaylist] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const navigate = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3000/api/v1/playlists\").then((response)=>setPlaylists(response.data)).catch((error)=>console.error(\"Error fetching playlists:\", error));\n    }, []);\n    const handleAddSongToPlaylist = (playlistId, songId)=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3000/api/v1/playlists/\".concat(playlistId, \"/add-song\"), {\n            songId\n        }).then((response)=>{\n            // Update the playlists state with the updated playlist\n            setPlaylists(playlists.map((p)=>p._id === response.data._id ? response.data : p));\n        }).catch((error)=>console.error(\"Error adding song to playlist:\", error));\n    };\n    // const handleRemoveSongFromPlaylist = (playlistId, songId) => {\n    //   axios\n    //     .post(\n    //       `http://localhost:3000/api/v1/playlists/${playlistId}/remove-song`,\n    //       { songId }\n    //     )\n    //     .then((response) => {\n    //       // Update the playlists state with the updated playlist\n    //       setPlaylists(\n    //         playlists.map((p) =>\n    //           p._id === response.data._id ? response.data : p\n    //         )\n    //       );\n    //     })\n    //     .catch((error) =>\n    //       console.error(\"Error removing song from playlist:\", error)\n    //     );\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-4\",\n        children: playlists.map((playlist)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>{\n                    navigate.push(\"playlist/\".concat(playlist._id));\n                },\n                className: \"mb-4 p-4 bg-gray-100 rounded border-2 cursor-pointer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl font-bold\",\n                        children: playlist.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\PlayList.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" Songs: \",\n                            playlist.music.length,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\PlayList.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined),\n                    \"button\"\n                ]\n            }, playlist._id, true, {\n                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\PlayList.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\components\\\\PlayList.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PlaylistComponent, \"JL2NDDKuDeZ22an2ViYv+VShmik=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PlaylistComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlaylistComponent);\nvar _c;\n$RefreshReg$(_c, \"PlaylistComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9QbGF5TGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDQTtBQUU1QyxNQUFNSSxvQkFBb0I7O0lBQ3hCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdDLE1BQU0sQ0FBQ0ksa0JBQWtCQyxvQkFBb0IsR0FBR0wsK0NBQVFBLENBQUM7SUFFekQsTUFBTU0sV0FBV1IsMERBQVNBO0lBQzFCQyxnREFBU0EsQ0FBQztRQUNSRiw2Q0FBS0EsQ0FDRlUsR0FBRyxDQUFDLDBDQUNKQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYU4sYUFBYU0sU0FBU0MsSUFBSSxHQUM3Q0MsS0FBSyxDQUFDLENBQUNDLFFBQVVDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO0lBQ2pFLEdBQUcsRUFBRTtJQUVMLE1BQU1FLDBCQUEwQixDQUFDQyxZQUFZQztRQUMzQ25CLDZDQUFLQSxDQUNGb0IsSUFBSSxDQUFDLDBDQUFxRCxPQUFYRixZQUFXLGNBQVk7WUFDckVDO1FBQ0YsR0FDQ1IsSUFBSSxDQUFDLENBQUNDO1lBQ0wsdURBQXVEO1lBQ3ZETixhQUNFRCxVQUFVZ0IsR0FBRyxDQUFDLENBQUNDLElBQ2JBLEVBQUVDLEdBQUcsS0FBS1gsU0FBU0MsSUFBSSxDQUFDVSxHQUFHLEdBQUdYLFNBQVNDLElBQUksR0FBR1M7UUFHcEQsR0FDQ1IsS0FBSyxDQUFDLENBQUNDLFFBQVVDLFFBQVFELEtBQUssQ0FBQyxrQ0FBa0NBO0lBQ3RFO0lBRUEsaUVBQWlFO0lBQ2pFLFVBQVU7SUFDVixhQUFhO0lBQ2IsNEVBQTRFO0lBQzVFLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsNEJBQTRCO0lBQzVCLGdFQUFnRTtJQUNoRSxzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLDREQUE0RDtJQUM1RCxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIsbUVBQW1FO0lBQ25FLFNBQVM7SUFDVCxLQUFLO0lBRUwscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVU7a0JBQ1pwQixVQUFVZ0IsR0FBRyxDQUFDLENBQUNLLHlCQUNkLDhEQUFDRjtnQkFFQ0csU0FBUztvQkFDUGxCLFNBQVNtQixJQUFJLENBQUMsWUFBeUIsT0FBYkYsU0FBU0gsR0FBRztnQkFDeEM7Z0JBQ0FFLFdBQVU7O2tDQUVWLDhEQUFDSTt3QkFBR0osV0FBVTtrQ0FBcUJDLFNBQVNJLElBQUk7Ozs7OztrQ0FDaEQsOERBQUNSOzs0QkFBRTs0QkFBU0ksU0FBU0ssS0FBSyxDQUFDQyxNQUFNOzRCQUFDOzs7Ozs7O29CQUFLOztlQVBsQ04sU0FBU0gsR0FBRzs7Ozs7Ozs7OztBQWEzQjtHQWhFTW5COztRQUlhSCxzREFBU0E7OztLQUp0Qkc7QUFrRU4sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUGxheUxpc3QudHN4PzhkNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFBsYXlsaXN0Q29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwbGF5bGlzdHMsIHNldFBsYXlsaXN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUGxheWxpc3QsIHNldFNlbGVjdGVkUGxheWxpc3RdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlUm91dGVyKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3BsYXlsaXN0c1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHNldFBsYXlsaXN0cyhyZXNwb25zZS5kYXRhKSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHBsYXlsaXN0czpcIiwgZXJyb3IpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFNvbmdUb1BsYXlsaXN0ID0gKHBsYXlsaXN0SWQsIHNvbmdJZCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvcGxheWxpc3RzLyR7cGxheWxpc3RJZH0vYWRkLXNvbmdgLCB7XHJcbiAgICAgICAgc29uZ0lkLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAvLyBVcGRhdGUgdGhlIHBsYXlsaXN0cyBzdGF0ZSB3aXRoIHRoZSB1cGRhdGVkIHBsYXlsaXN0XHJcbiAgICAgICAgc2V0UGxheWxpc3RzKFxyXG4gICAgICAgICAgcGxheWxpc3RzLm1hcCgocCkgPT5cclxuICAgICAgICAgICAgcC5faWQgPT09IHJlc3BvbnNlLmRhdGEuX2lkID8gcmVzcG9uc2UuZGF0YSA6IHBcclxuICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIHNvbmcgdG8gcGxheWxpc3Q6XCIsIGVycm9yKSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc3QgaGFuZGxlUmVtb3ZlU29uZ0Zyb21QbGF5bGlzdCA9IChwbGF5bGlzdElkLCBzb25nSWQpID0+IHtcclxuICAvLyAgIGF4aW9zXHJcbiAgLy8gICAgIC5wb3N0KFxyXG4gIC8vICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3BsYXlsaXN0cy8ke3BsYXlsaXN0SWR9L3JlbW92ZS1zb25nYCxcclxuICAvLyAgICAgICB7IHNvbmdJZCB9XHJcbiAgLy8gICAgIClcclxuICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gICAgICAgLy8gVXBkYXRlIHRoZSBwbGF5bGlzdHMgc3RhdGUgd2l0aCB0aGUgdXBkYXRlZCBwbGF5bGlzdFxyXG4gIC8vICAgICAgIHNldFBsYXlsaXN0cyhcclxuICAvLyAgICAgICAgIHBsYXlsaXN0cy5tYXAoKHApID0+XHJcbiAgLy8gICAgICAgICAgIHAuX2lkID09PSByZXNwb25zZS5kYXRhLl9pZCA/IHJlc3BvbnNlLmRhdGEgOiBwXHJcbiAgLy8gICAgICAgICApXHJcbiAgLy8gICAgICAgKTtcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLmNhdGNoKChlcnJvcikgPT5cclxuICAvLyAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVtb3Zpbmcgc29uZyBmcm9tIHBsYXlsaXN0OlwiLCBlcnJvcilcclxuICAvLyAgICAgKTtcclxuICAvLyB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XHJcbiAgICAgIHtwbGF5bGlzdHMubWFwKChwbGF5bGlzdCkgPT4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17cGxheWxpc3QuX2lkfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBuYXZpZ2F0ZS5wdXNoKGBwbGF5bGlzdC8ke3BsYXlsaXN0Ll9pZH1gKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi00IHAtNCBiZy1ncmF5LTEwMCByb3VuZGVkIGJvcmRlci0yIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj57cGxheWxpc3QubmFtZX08L2gzPlxyXG4gICAgICAgICAgPHA+IFNvbmdzOiB7cGxheWxpc3QubXVzaWMubGVuZ3RofSA8L3A+XHJcbiAgICAgICAgICBidXR0b25cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWxpc3RDb21wb25lbnQ7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGxheWxpc3RDb21wb25lbnQiLCJwbGF5bGlzdHMiLCJzZXRQbGF5bGlzdHMiLCJzZWxlY3RlZFBsYXlsaXN0Iiwic2V0U2VsZWN0ZWRQbGF5bGlzdCIsIm5hdmlnYXRlIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlQWRkU29uZ1RvUGxheWxpc3QiLCJwbGF5bGlzdElkIiwic29uZ0lkIiwicG9zdCIsIm1hcCIsInAiLCJfaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJwbGF5bGlzdCIsIm9uQ2xpY2siLCJwdXNoIiwiaDMiLCJuYW1lIiwibXVzaWMiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/PlayList.tsx\n"));

/***/ })

});