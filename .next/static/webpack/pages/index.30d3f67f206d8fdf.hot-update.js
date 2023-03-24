"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./shared/components/Modal/index.tsx":
/*!*******************************************!*\
  !*** ./shared/components/Modal/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": function() { return /* binding */ Modal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var features_app_providers_ScrollControlProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/app/providers/ScrollControlProvider */ \"./features/app/providers/ScrollControlProvider.tsx\");\n/* harmony import */ var shared_components_AgreementPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/components/AgreementPopup */ \"./shared/components/AgreementPopup/index.tsx\");\n/* harmony import */ var _Modal_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal.module.scss */ \"./shared/components/Modal/Modal.module.scss\");\n/* harmony import */ var _Modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Modal_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Modal = (param)=>{\n    let { children , title , subTitle , onClose , isShowModal  } = param;\n    _s();\n    const [isShowPolitics, setIsShowPolitics] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { toggleScroll  } = (0,features_app_providers_ScrollControlProvider__WEBPACK_IMPORTED_MODULE_2__.useScrollControl)();\n    const handleShowPolitics = ()=>{\n        setIsShowPolitics(!isShowPolitics);\n    };\n    const handleClosePolitics = ()=>{\n        handleShowPolitics();\n        onClose();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        toggleScroll(!isShowModal);\n    }, [\n        isShowModal\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isShowModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: isShowPolitics ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(shared_components_AgreementPopup__WEBPACK_IMPORTED_MODULE_3__.AgreementPopup, {\n                handleClose: handleClosePolitics\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\shared\\\\components\\\\Modal\\\\index.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().overlay),\n                        onClick: onClose\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\shared\\\\components\\\\Modal\\\\index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_Modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().closeBtn),\n                        onClick: onClose\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\shared\\\\components\\\\Modal\\\\index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_Modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().modalWrapper),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: (_Modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\shared\\\\components\\\\Modal\\\\index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_Modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subTitle),\n                                children: subTitle\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\shared\\\\components\\\\Modal\\\\index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().formWrapper),\n                                children: children\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\shared\\\\components\\\\Modal\\\\index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_Modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().privacy),\n                                children: [\n                                    \"Я принимаю\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: (_Modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().privacyLink),\n                                        onClick: handleShowPolitics,\n                                        children: \"Условия передачи информации\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\shared\\\\components\\\\Modal\\\\index.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\shared\\\\components\\\\Modal\\\\index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\shared\\\\components\\\\Modal\\\\index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 15\n                    }, undefined)\n                ]\n            }, void 0, true)\n        }, void 0, false)\n    }, void 0, false);\n};\n_s(Modal, \"ckKApMEbnejaCwdtAZOm7OpZiJA=\", false, function() {\n    return [\n        features_app_providers_ScrollControlProvider__WEBPACK_IMPORTED_MODULE_2__.useScrollControl\n    ];\n});\n_c = Modal;\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zaGFyZWQvY29tcG9uZW50cy9Nb2RhbC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXlEO0FBRXNCO0FBQ2Q7QUFFekI7QUFVakMsTUFBTUssUUFBUSxTQUFpRTtRQUFoRSxFQUFFQyxTQUFRLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFQyxRQUFPLEVBQUVDLFlBQVcsRUFBVTs7SUFDL0UsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHWiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFELE1BQU0sRUFBRWEsYUFBWSxFQUFFLEdBQUdYLDhGQUFnQkE7SUFFekMsTUFBTVkscUJBQXFCLElBQU07UUFDL0JGLGtCQUFrQixDQUFDRDtJQUNyQjtJQUVBLE1BQU1JLHNCQUFzQixJQUFNO1FBQ2hDRDtRQUNBTDtJQUNGO0lBRUFSLGdEQUFTQSxDQUFDLElBQU07UUFDZFksYUFBYSxDQUFDSDtJQUNoQixHQUFHO1FBQUNBO0tBQVk7SUFFaEIscUJBQ0U7a0JBQ0dBLDZCQUNDO3NCQUNHQywrQkFDQyw4REFBQ1IsNEVBQWNBO2dCQUFDYSxhQUFhRDs7Ozs7MENBRTdCOztrQ0FDRSw4REFBQ0U7d0JBQUlDLFdBQVdkLG1FQUFjO3dCQUFFZ0IsU0FBU1g7Ozs7OztrQ0FDekMsOERBQUNZO3dCQUFPSCxXQUFXZCxvRUFBZTt3QkFBRWdCLFNBQVNYOzs7Ozs7a0NBQzdDLDhEQUFDYzt3QkFBUUwsV0FBV2Qsd0VBQW1COzswQ0FDckMsOERBQUNxQjtnQ0FBR1AsV0FBV2QsaUVBQVk7MENBQUdHOzs7Ozs7MENBQzlCLDhEQUFDbUI7Z0NBQUtSLFdBQVdkLG9FQUFlOzBDQUFHSTs7Ozs7OzBDQUNuQyw4REFBQ1M7Z0NBQUlDLFdBQVdkLHVFQUFrQjswQ0FBR0U7Ozs7OzswQ0FDckMsOERBQUNvQjtnQ0FBS1IsV0FBV2QsbUVBQWM7O29DQUFFO29DQUNwQjtrREFDWCw4REFBQ3lCO3dDQUFFWCxXQUFXZCx1RUFBa0I7d0NBQUVnQixTQUFTTjtrREFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBTXRFOzs7QUFLWCxFQUFDO0dBNUNZVDs7UUFFY0gsMEZBQWdCQTs7O0tBRjlCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zaGFyZWQvY29tcG9uZW50cy9Nb2RhbC9pbmRleC50c3g/OGQ0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdEVsZW1lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IHVzZVNjcm9sbENvbnRyb2wgfSBmcm9tICdmZWF0dXJlcy9hcHAvcHJvdmlkZXJzL1Njcm9sbENvbnRyb2xQcm92aWRlcidcclxuaW1wb3J0IHsgQWdyZWVtZW50UG9wdXAgfSBmcm9tICdzaGFyZWQvY29tcG9uZW50cy9BZ3JlZW1lbnRQb3B1cCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Nb2RhbC5tb2R1bGUuc2NzcydcclxuXHJcbmludGVyZmFjZSBJTW9kYWwge1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBzdWJUaXRsZTogc3RyaW5nXHJcbiAgb25DbG9zZTogKCkgPT4gdm9pZFxyXG4gIGlzU2hvd01vZGFsOiBib29sZWFuXHJcbiAgY2hpbGRyZW46IFJlYWN0RWxlbWVudFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTW9kYWwgPSAoeyBjaGlsZHJlbiwgdGl0bGUsIHN1YlRpdGxlLCBvbkNsb3NlLCBpc1Nob3dNb2RhbCB9OiBJTW9kYWwpID0+IHtcclxuICBjb25zdCBbaXNTaG93UG9saXRpY3MsIHNldElzU2hvd1BvbGl0aWNzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IHsgdG9nZ2xlU2Nyb2xsIH0gPSB1c2VTY3JvbGxDb250cm9sKClcclxuXHJcbiAgY29uc3QgaGFuZGxlU2hvd1BvbGl0aWNzID0gKCkgPT4ge1xyXG4gICAgc2V0SXNTaG93UG9saXRpY3MoIWlzU2hvd1BvbGl0aWNzKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VQb2xpdGljcyA9ICgpID0+IHtcclxuICAgIGhhbmRsZVNob3dQb2xpdGljcygpXHJcbiAgICBvbkNsb3NlKClcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB0b2dnbGVTY3JvbGwoIWlzU2hvd01vZGFsKVxyXG4gIH0sIFtpc1Nob3dNb2RhbF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7aXNTaG93TW9kYWwgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7aXNTaG93UG9saXRpY3MgPyAoXHJcbiAgICAgICAgICAgIDxBZ3JlZW1lbnRQb3B1cCBoYW5kbGVDbG9zZT17aGFuZGxlQ2xvc2VQb2xpdGljc30gLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5fSBvbkNsaWNrPXtvbkNsb3NlfSAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VCdG59IG9uQ2xpY2s9e29uQ2xvc2V9IC8+XHJcbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zdWJUaXRsZX0+e3N1YlRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybVdyYXBwZXJ9PntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByaXZhY3l9PlxyXG4gICAgICAgICAgICAgICAgICDQryDQv9GA0LjQvdC40LzQsNGOeycgJ31cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMucHJpdmFjeUxpbmt9IG9uQ2xpY2s9e2hhbmRsZVNob3dQb2xpdGljc30+XHJcbiAgICAgICAgICAgICAgICAgICAg0KPRgdC70L7QstC40Y8g0L/QtdGA0LXQtNCw0YfQuCDQuNC90YTQvtGA0LzQsNGG0LjQuFxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU2Nyb2xsQ29udHJvbCIsIkFncmVlbWVudFBvcHVwIiwic3R5bGVzIiwiTW9kYWwiLCJjaGlsZHJlbiIsInRpdGxlIiwic3ViVGl0bGUiLCJvbkNsb3NlIiwiaXNTaG93TW9kYWwiLCJpc1Nob3dQb2xpdGljcyIsInNldElzU2hvd1BvbGl0aWNzIiwidG9nZ2xlU2Nyb2xsIiwiaGFuZGxlU2hvd1BvbGl0aWNzIiwiaGFuZGxlQ2xvc2VQb2xpdGljcyIsImhhbmRsZUNsb3NlIiwiZGl2IiwiY2xhc3NOYW1lIiwib3ZlcmxheSIsIm9uQ2xpY2siLCJidXR0b24iLCJjbG9zZUJ0biIsInNlY3Rpb24iLCJtb2RhbFdyYXBwZXIiLCJoMiIsInNwYW4iLCJmb3JtV3JhcHBlciIsInByaXZhY3kiLCJhIiwicHJpdmFjeUxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./shared/components/Modal/index.tsx\n"));

/***/ })

});