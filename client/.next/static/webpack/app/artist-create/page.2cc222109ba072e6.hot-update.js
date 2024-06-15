"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/artist-create/page",{

/***/ "(app-pages-browser)/./src/app/artist-create/page.tsx":
/*!****************************************!*\
  !*** ./src/app/artist-create/page.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ArtistCreate = ()=>{\n    _s();\n    // name, bio, coverImage, genre\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [bio, setBio] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [coverImage, setCoverImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [genre, setGenre] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const ArtistAdd = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3000/api/v1/artists\", {\n            name,\n            bio,\n            coverImage,\n            genre\n        });\n        if (response.status === 200) {\n            router.push(\"/songs\");\n        }\n        setName(\"\");\n        setBio(\"\");\n        setCoverImage(\"\");\n        setGenre(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: name,\n                        onChange: (e)=>setName(e.target.value),\n                        type: \"text\",\n                        placeholder: \"Название артиста\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\artist-create\\\\page.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: bio,\n                        onChange: (e)=>setBio(e.target.value),\n                        type: \"text\",\n                        placeholder: \"Био артиста\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\artist-create\\\\page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: coverImage,\n                        onChange: (e)=>setCoverImage(e.target.value),\n                        type: \"text\",\n                        placeholder: \"Фокта артиста\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\artist-create\\\\page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: genre,\n                        onChange: (e)=>setGenre(e.target.value),\n                        type: \"text\",\n                        placeholder: \"Жанр его песней\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\artist-create\\\\page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\artist-create\\\\page.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ArtistAdd,\n                children: \"Add Artits\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\artist-create\\\\page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\akaza\\\\OneDrive\\\\Рабочий стол\\\\nfactorial\\\\lectures\\\\spotify\\\\client\\\\src\\\\app\\\\artist-create\\\\page.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ArtistCreate, \"aFiNKioLy+PGLm982k8WmjCCwQI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ArtistCreate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArtistCreate);\nvar _c;\n$RefreshReg$(_c, \"ArtistCreate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXJ0aXN0LWNyZWF0ZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMwQjtBQUNrQjtBQUNKO0FBRXhDLE1BQU1JLGVBQWU7O0lBQ25CLCtCQUErQjtJQUMvQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDSSxLQUFLQyxPQUFPLEdBQUdMLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTVUsU0FBU1osMERBQVNBO0lBQ3hCLE1BQU1hLFlBQVk7UUFDaEIsTUFBTUMsV0FBVyxNQUFNZiw2Q0FBS0EsQ0FBQ2dCLElBQUksQ0FBQyx3Q0FBd0M7WUFDeEVYO1lBQ0FFO1lBQ0FFO1lBQ0FFO1FBQ0Y7UUFDQSxJQUFJSSxTQUFTRSxNQUFNLEtBQUssS0FBSztZQUMzQkosT0FBT0ssSUFBSSxDQUFDO1FBQ2Q7UUFDQVosUUFBUTtRQUNSRSxPQUFPO1FBQ1BFLGNBQWM7UUFDZEUsU0FBUztJQUNYO0lBQ0EscUJBQ0UsOERBQUNPOzswQkFDQyw4REFBQ0E7O2tDQUNDLDhEQUFDQzt3QkFDQ0MsT0FBT2hCO3dCQUNQaUIsVUFBVSxDQUFDQyxJQUFNakIsUUFBUWlCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDdkNJLE1BQUs7d0JBQ0xDLGFBQVk7Ozs7OztrQ0FFZCw4REFBQ047d0JBQ0NDLE9BQU9kO3dCQUNQZSxVQUFVLENBQUNDLElBQU1mLE9BQU9lLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDdENJLE1BQUs7d0JBQ0xDLGFBQVk7Ozs7OztrQ0FFZCw4REFBQ047d0JBQ0NDLE9BQU9aO3dCQUNQYSxVQUFVLENBQUNDLElBQU1iLGNBQWNhLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDN0NJLE1BQUs7d0JBQ0xDLGFBQVk7Ozs7OztrQ0FFZCw4REFBQ047d0JBQ0NDLE9BQU9WO3dCQUNQVyxVQUFVLENBQUNDLElBQU1YLFNBQVNXLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDeENJLE1BQUs7d0JBQ0xDLGFBQVk7Ozs7Ozs7Ozs7OzswQkFHaEIsOERBQUNDO2dCQUFPQyxTQUFTZDswQkFBVzs7Ozs7Ozs7Ozs7O0FBR2xDO0dBckRNVjs7UUFNV0gsc0RBQVNBOzs7S0FOcEJHO0FBdUROLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYXJ0aXN0LWNyZWF0ZS9wYWdlLnRzeD8xNWRmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBcnRpc3RDcmVhdGUgPSAoKSA9PiB7XHJcbiAgLy8gbmFtZSwgYmlvLCBjb3ZlckltYWdlLCBnZW5yZVxyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtiaW8sIHNldEJpb10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY292ZXJJbWFnZSwgc2V0Q292ZXJJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZ2VucmUsIHNldEdlbnJlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IEFydGlzdEFkZCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvYXJ0aXN0c1wiLCB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGJpbyxcclxuICAgICAgY292ZXJJbWFnZSxcclxuICAgICAgZ2VucmUsXHJcbiAgICB9KTtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9zb25nc1wiKTtcclxuICAgIH1cclxuICAgIHNldE5hbWUoJycpXHJcbiAgICBzZXRCaW8oJycpXHJcbiAgICBzZXRDb3ZlckltYWdlKCcnKVxyXG4gICAgc2V0R2VucmUoJycpXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J3QsNC30LLQsNC90LjQtSDQsNGA0YLQuNGB0YLQsFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtiaW99XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJpbyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCR0LjQviDQsNGA0YLQuNGB0YLQsFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtjb3ZlckltYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb3ZlckltYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KTQvtC60YLQsCDQsNGA0YLQuNGB0YLQsFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtnZW5yZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0R2VucmUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLQltCw0L3RgCDQtdCz0L4g0L/QtdGB0L3QtdC5XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtBcnRpc3RBZGR9PkFkZCBBcnRpdHM8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpc3RDcmVhdGU7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJBcnRpc3RDcmVhdGUiLCJuYW1lIiwic2V0TmFtZSIsImJpbyIsInNldEJpbyIsImNvdmVySW1hZ2UiLCJzZXRDb3ZlckltYWdlIiwiZ2VucmUiLCJzZXRHZW5yZSIsInJvdXRlciIsIkFydGlzdEFkZCIsInJlc3BvbnNlIiwicG9zdCIsInN0YXR1cyIsInB1c2giLCJkaXYiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/artist-create/page.tsx\n"));

/***/ })

});