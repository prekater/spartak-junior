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

/***/ "./features/app/UI/Header/index.tsx":
/*!******************************************!*\
  !*** ./features/app/UI/Header/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var shared_components_FreeLessonButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/components/FreeLessonButton */ \"./shared/components/FreeLessonButton/index.tsx\");\n/* harmony import */ var shared_components_Modal___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/components/Modal/ */ \"./shared/components/Modal/index.tsx\");\n/* harmony import */ var shared_components_Selector___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/components/Selector/ */ \"./shared/components/Selector/index.tsx\");\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Logo */ \"./features/app/UI/Header/components/Logo.tsx\");\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Menu */ \"./features/app/UI/Header/components/Menu.tsx\");\n/* harmony import */ var _components_Phone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Phone */ \"./features/app/UI/Header/components/Phone.tsx\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Header.module.scss */ \"./features/app/UI/Header/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isFixed, setIsFixed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleShowModal = ()=>{\n        setShowModal(!showModal);\n    };\n    const wrapper = (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"wrapper\", (_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().wrapper));\n    const header = (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().root), {\n        [(_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().root_fixed)]: isFixed\n    });\n    const navBarBtn = (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().navBarBtn), {\n        [(_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().navBarBtn_close)]: isOpen\n    });\n    const handleClick = ()=>{\n        setIsOpen(!isOpen);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isOpen) {\n            document.body.style.overflow = \"hidden\";\n        } else {\n            document.body.style.overflow = \"unset\";\n        }\n        const showHeader = ()=>{\n            if (window.scrollY > 100) {\n                setIsFixed(true);\n            } else {\n                setIsFixed(false);\n            }\n        };\n        window.addEventListener(\"scroll\", showHeader);\n        return ()=>window.removeEventListener(\"scroll\", showHeader);\n    }, [\n        isOpen\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            isFixed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().fixed)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\features\\\\app\\\\UI\\\\Header\\\\index.tsx\",\n                lineNumber: 56,\n                columnNumber: 19\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                id: \"header\",\n                className: header,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: wrapper,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            isFixed: isFixed\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\features\\\\app\\\\UI\\\\Header\\\\index.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().navWrapper),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\features\\\\app\\\\UI\\\\Header\\\\index.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Phone__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\features\\\\app\\\\UI\\\\Header\\\\index.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(shared_components_FreeLessonButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    onClick: handleShowModal,\n                                    title: \"Пробное занятие\",\n                                    className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().freeLesson)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\features\\\\app\\\\UI\\\\Header\\\\index.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\features\\\\app\\\\UI\\\\Header\\\\index.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: navBarBtn,\n                            onClick: handleClick\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\features\\\\app\\\\UI\\\\Header\\\\index.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\features\\\\app\\\\UI\\\\Header\\\\index.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\features\\\\app\\\\UI\\\\Header\\\\index.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().modalNavBar),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        onClose: handleClick\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\features\\\\app\\\\UI\\\\Header\\\\index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Phone__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\features\\\\app\\\\UI\\\\Header\\\\index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\features\\\\app\\\\UI\\\\Header\\\\index.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(shared_components_Modal___WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                title: \"Записаться на пробное занятие\",\n                subTitle: \"Просто заполните форму, а мы перезвоним и уточним все детали\",\n                onClose: handleShowModal,\n                isShowModal: showModal,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().form),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().input),\n                            placeholder: \"Имя ребёнка\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\features\\\\app\\\\UI\\\\Header\\\\index.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().input),\n                            placeholder: \"Ваше имя\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\features\\\\app\\\\UI\\\\Header\\\\index.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(shared_components_Selector___WEBPACK_IMPORTED_MODULE_5__.Selector, {\n                            selectorInputClassName: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().select),\n                            selectorWrapperClassName: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().selectWrapper)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\features\\\\app\\\\UI\\\\Header\\\\index.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().errorBlock), (_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().hide)),\n                            children: \"Пожалуйста, заполните все обязательные поля\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\features\\\\app\\\\UI\\\\Header\\\\index.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().buttonForm), (_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().buttonForm_submit)),\n                            children: \"Записаться бесплатно\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\features\\\\app\\\\UI\\\\Header\\\\index.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\features\\\\app\\\\UI\\\\Header\\\\index.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pepek\\\\WebstormProjects\\\\frontend\\\\features\\\\app\\\\UI\\\\Header\\\\index.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Header, \"XVuVTOmUIyBkRUhLwU3U9LSdvII=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNPLHVFQUFpQixFQUFFQSxpRUFBVztzQ0FBRzs7Ozs7O3NDQUNwRCw4REFBQ2lDOzRCQUFPYyxNQUFLOzRCQUFTckIsV0FBV2pDLGdEQUFFQSxDQUFDTyx1RUFBaUIsRUFBRUEsOEVBQXdCO3NDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVGO0dBN0VNQztLQUFBQTtBQStFTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9mZWF0dXJlcy9hcHAvVUkvSGVhZGVyL2luZGV4LnRzeD8xMDkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBjbiBmcm9tICdjbHN4J1xyXG5cclxuaW1wb3J0IEZyZWVMZXNzb25CdXR0b24gZnJvbSAnc2hhcmVkL2NvbXBvbmVudHMvRnJlZUxlc3NvbkJ1dHRvbidcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdzaGFyZWQvY29tcG9uZW50cy9Nb2RhbC8nXHJcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSAnc2hhcmVkL2NvbXBvbmVudHMvU2VsZWN0b3IvJ1xyXG5cclxuaW1wb3J0IExvZ28gZnJvbSAnLi9jb21wb25lbnRzL0xvZ28nXHJcbmltcG9ydCBNZW51IGZyb20gJy4vY29tcG9uZW50cy9NZW51J1xyXG5pbXBvcnQgUGhvbmUgZnJvbSAnLi9jb21wb25lbnRzL1Bob25lJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgY29uc3QgW2lzRml4ZWQsIHNldElzRml4ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cclxuICBjb25zdCBoYW5kbGVTaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93TW9kYWwoIXNob3dNb2RhbClcclxuICB9XHJcblxyXG4gIGNvbnN0IHdyYXBwZXIgPSBjbignd3JhcHBlcicsIHN0eWxlcy53cmFwcGVyKVxyXG5cclxuICBjb25zdCBoZWFkZXIgPSBjbihzdHlsZXMucm9vdCwge1xyXG4gICAgW3N0eWxlcy5yb290X2ZpeGVkXTogaXNGaXhlZFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IG5hdkJhckJ0biA9IGNuKHN0eWxlcy5uYXZCYXJCdG4sIHsgW3N0eWxlcy5uYXZCYXJCdG5fY2xvc2VdOiBpc09wZW4gfSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRJc09wZW4oIWlzT3BlbilcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd1bnNldCdcclxuICAgIH1cclxuICAgIGNvbnN0IHNob3dIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDEwMCkge1xyXG4gICAgICAgIHNldElzRml4ZWQodHJ1ZSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRJc0ZpeGVkKGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNob3dIZWFkZXIpXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNob3dIZWFkZXIpXHJcbiAgfSwgW2lzT3Blbl0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7aXNGaXhlZCAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpeGVkfSAvPn1cclxuICAgICAgPGhlYWRlciBpZD1cImhlYWRlclwiIGNsYXNzTmFtZT17aGVhZGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17d3JhcHBlcn0+XHJcbiAgICAgICAgICA8TG9nbyBpc0ZpeGVkPXtpc0ZpeGVkfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZXcmFwcGVyfT5cclxuICAgICAgICAgICAgPE1lbnUgLz5cclxuICAgICAgICAgICAgPFBob25lIC8+XHJcbiAgICAgICAgICAgIDxGcmVlTGVzc29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNob3dNb2RhbH0gdGl0bGU9XCLQn9GA0L7QsdC90L7QtSDQt9Cw0L3Rj9GC0LjQtVwiIGNsYXNzTmFtZT17c3R5bGVzLmZyZWVMZXNzb259IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtuYXZCYXJCdG59IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAge2lzT3BlbiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbE5hdkJhcn0+XHJcbiAgICAgICAgICA8TWVudSBvbkNsb3NlPXtoYW5kbGVDbGlja30gLz5cclxuICAgICAgICAgIDxQaG9uZSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cItCX0LDQv9C40YHQsNGC0YzRgdGPINC90LAg0L/RgNC+0LHQvdC+0LUg0LfQsNC90Y/RgtC40LVcIlxyXG4gICAgICAgIHN1YlRpdGxlPVwi0J/RgNC+0YHRgtC+INC30LDQv9C+0LvQvdC40YLQtSDRhNC+0YDQvNGDLCDQsCDQvNGLINC/0LXRgNC10LfQstC+0L3QuNC8INC4INGD0YLQvtGH0L3QuNC8INCy0YHQtSDQtNC10YLQsNC70LhcIlxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZVNob3dNb2RhbH1cclxuICAgICAgICBpc1Nob3dNb2RhbD17c2hvd01vZGFsfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHBsYWNlaG9sZGVyPVwi0JjQvNGPINGA0LXQsdGR0L3QutCwXCIgLz5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gcGxhY2Vob2xkZXI9XCLQktCw0YjQtSDQuNC80Y9cIiAvPlxyXG4gICAgICAgICAgPFNlbGVjdG9yIHNlbGVjdG9ySW5wdXRDbGFzc05hbWU9e3N0eWxlcy5zZWxlY3R9IHNlbGVjdG9yV3JhcHBlckNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdFdyYXBwZXJ9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLmVycm9yQmxvY2ssIHN0eWxlcy5oaWRlKX0+0J/QvtC20LDQu9GD0LnRgdGC0LAsINC30LDQv9C+0LvQvdC40YLQtSDQstGB0LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3Ri9C1INC/0L7Qu9GPPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e2NuKHN0eWxlcy5idXR0b25Gb3JtLCBzdHlsZXMuYnV0dG9uRm9ybV9zdWJtaXQpfT5cclxuICAgICAgICAgICAg0JfQsNC/0LjRgdCw0YLRjNGB0Y8g0LHQtdGB0L/Qu9Cw0YLQvdC+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjbiIsIkZyZWVMZXNzb25CdXR0b24iLCJNb2RhbCIsIlNlbGVjdG9yIiwiTG9nbyIsIk1lbnUiLCJQaG9uZSIsInN0eWxlcyIsIkhlYWRlciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImlzRml4ZWQiLCJzZXRJc0ZpeGVkIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiaGFuZGxlU2hvd01vZGFsIiwid3JhcHBlciIsImhlYWRlciIsInJvb3QiLCJyb290X2ZpeGVkIiwibmF2QmFyQnRuIiwibmF2QmFyQnRuX2Nsb3NlIiwiaGFuZGxlQ2xpY2siLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93Iiwic2hvd0hlYWRlciIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImZpeGVkIiwiaWQiLCJuYXZXcmFwcGVyIiwib25DbGljayIsInRpdGxlIiwiZnJlZUxlc3NvbiIsImJ1dHRvbiIsIm1vZGFsTmF2QmFyIiwib25DbG9zZSIsInN1YlRpdGxlIiwiaXNTaG93TW9kYWwiLCJmb3JtIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInNlbGVjdG9ySW5wdXRDbGFzc05hbWUiLCJzZWxlY3QiLCJzZWxlY3RvcldyYXBwZXJDbGFzc05hbWUiLCJzZWxlY3RXcmFwcGVyIiwiZXJyb3JCbG9jayIsImhpZGUiLCJ0eXBlIiwiYnV0dG9uRm9ybSIsImJ1dHRvbkZvcm1fc3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./features/app/UI/Header/index.tsx\n"));

/***/ })

});