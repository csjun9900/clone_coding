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

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/avatar/avatar */ \"./node_modules/antd/lib/avatar/avatar.js\");\n/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostImages */ \"./components/PostImages.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar PostCard = function(param) {\n    var post = param.post;\n    _s();\n    var id = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        var ref;\n        return (ref = state.user.me) === null || ref === void 0 ? void 0 : ref.id;\n    });\n    // const id = me?.id; // 옵셔널 체이닝\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Card, {\n            cover: post.Images[0] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostImages__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                images: post.Images\n            }, void 0, false, void 0, void 0),\n            actions: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.RetweetOutlined, {}, \"retweet\", false, void 0, void 0),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.HeartOutlined, {}, \"heart\", false, void 0, void 0),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.MessageOutlined, {}, \"comment\", false, void 0, void 0),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Popover, {\n                    content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button.Group, {\n                        children: id && post.User.id === id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    children: \"수정\"\n                                }, void 0, false, void 0, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    type: \"danger\",\n                                    children: \"삭제\"\n                                }, void 0, false, void 0, void 0)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            children: \"신고\"\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.EllipsisOutlined, {}, void 0, false, void 0, void 0)\n                }, \"more\", false, void 0, void 0), \n            ],\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Card.Meta, {\n                avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    children: post.User.nickname[0]\n                }, void 0, false, void 0, void 0),\n                title: post.User.nickname,\n                description: post.content\n            }, void 0, false, {\n                fileName: \"C:\\\\Clone\\\\react-nodebird\\\\prepare\\\\front\\\\components\\\\PostCard.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Clone\\\\react-nodebird\\\\prepare\\\\front\\\\components\\\\PostCard.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Clone\\\\react-nodebird\\\\prepare\\\\front\\\\components\\\\PostCard.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this));\n};\n_s(PostCard, \"FJdoDJNyUlJ5WKWdRipc5DguCUQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = PostCard;\nPostCard.propTypes = {\n    post: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({\n        id: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),\n        User: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),\n        content: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),\n        comments: prop_types__WEBPACK_IMPORTED_MODULE_7___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_7___default().object)),\n        Images: prop_types__WEBPACK_IMPORTED_MODULE_7___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_7___default().object))\n    }).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2dCO0FBQ1A7QUFDdUI7QUFNL0I7QUFDaUI7QUFDTjs7O0FBRXJDLEdBQUssQ0FBQ2EsUUFBUSxHQUFHLFFBQVEsUUFBTSxDQUFDO1FBQVpDLElBQUksU0FBSkEsSUFBSTs7SUFDdEIsR0FBSyxDQUFDQyxFQUFFLEdBQUdkLHdEQUFXLENBQUMsUUFBUSxDQUFQZSxLQUFLO1lBQUtBLEdBQWE7Z0JBQWJBLEdBQWEsR0FBYkEsS0FBSyxDQUFDQyxJQUFJLENBQUNDLEVBQUUsY0FBYkYsR0FBYSxLQUFiQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxHQUFhLENBQUVELEVBQUU7O0lBQ25ELEVBQWdDO0lBQ3BCLE1BQU4sNkVBQ0hJLENBQUc7OEZBQ0RoQixzQ0FBSTtZQUNIaUIsS0FBSyxFQUFFTixJQUFJLENBQUNPLE1BQU0sQ0FBQyxDQUFDLGlGQUFNVCxtREFBVTtnQkFBQ1UsTUFBTSxFQUFFUixJQUFJLENBQUNPLE1BQU07O1lBQ3hERSxPQUFPLEVBQUUsQ0FBQzs0RkFDUGhCLDhEQUFlLE1BQUssQ0FBUzs0RkFDN0JDLDREQUFhLE1BQUssQ0FBTzs0RkFDekJDLDhEQUFlLE1BQUssQ0FBUzs0RkFDN0JMLHlDQUFPO29CQUVOb0IsT0FBTyw4RUFDSmxCLDhDQUFZO2tDQUNWUyxFQUFFLElBQUlELElBQUksQ0FBQ1ksSUFBSSxDQUFDWCxFQUFFLEtBQUtBLEVBQUU7OzRHQUVyQlQsd0NBQU07OENBQUMsQ0FBRTs7NEdBQ0xBLHdDQUFFO29DQUFDcUIsSUFBSSxFQUFDLENBQVE7OENBQUMsQ0FBRTs7O3VIQUdyQnJCLHdDQUFFO3NDQUFDLENBQUU7OzswR0FLZkksK0RBQWdCO21CQWRiLENBQU07WUFnQmQsQ0FBQztrR0FFQVAsMkNBQVM7Z0JBQ1IwQixNQUFNLDhFQUFHbEIsOERBQU07OEJBQUVHLElBQUksQ0FBQ1ksSUFBSSxDQUFDSSxRQUFRLENBQUMsQ0FBQzs7Z0JBQ3JDQyxLQUFLLEVBQUVqQixJQUFJLENBQUNZLElBQUksQ0FBQ0ksUUFBUTtnQkFDekJFLFdBQVcsRUFBRWxCLElBQUksQ0FBQ1UsT0FBTzs7Ozs7Ozs7Ozs7Ozs7OztBQU9uQyxDQUFDO0dBeENLWCxRQUFROztRQUNEWixvREFBVzs7O0tBRGxCWSxRQUFRO0FBMENkQSxRQUFRLENBQUNvQixTQUFTLEdBQUcsQ0FBQztJQUNwQm5CLElBQUksRUFBRVosdURBQWUsQ0FBQyxDQUFDO1FBQ3JCYSxFQUFFLEVBQUViLDBEQUFnQjtRQUNwQndCLElBQUksRUFBRXhCLDBEQUFnQjtRQUN0QnNCLE9BQU8sRUFBRXRCLDBEQUFnQjtRQUN6Qm9DLFFBQVEsRUFBRXBDLHlEQUFpQixDQUFDQSwwREFBZ0I7UUFDNUNtQixNQUFNLEVBQUVuQix5REFBaUIsQ0FBQ0EsMERBQWdCO0lBQzVDLENBQUMsRUFBRXNDLFVBQVU7QUFDZixDQUFDO0FBRUQsK0RBQWUzQixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcz9hMThhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBDYXJkLCBQb3BvdmVyLCBCdXR0b25Hcm91cCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHtcclxuICBSZXR3ZWV0T3V0bGluZWQsXHJcbiAgSGVhcnRPdXRsaW5lZCxcclxuICBNZXNzYWdlT3V0bGluZWQsXHJcbiAgRWxsaXBzaXNPdXRsaW5lZCxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiYW50ZC9saWIvYXZhdGFyL2F2YXRhclwiO1xyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tIFwiLi9Qb3N0SW1hZ2VzXCI7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XHJcbiAgLy8gY29uc3QgaWQgPSBtZT8uaWQ7IC8vIOyYteyFlOuEkCDssrTsnbTri51cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENhcmRcclxuICAgICAgICBjb3Zlcj17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XHJcbiAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCIgLz4sXHJcbiAgICAgICAgICA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIC8+LFxyXG4gICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgLz4sXHJcbiAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICBrZXk9XCJtb3JlXCJcclxuICAgICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkID8gKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCI+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvUG9wb3Zlcj4sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgIHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5jb250ZW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgey8qIDxDb21tZW50Rm9ybSAvPiAqL31cclxuICAgICAgey8qIDxDb250ZW50cyAvPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU2VsZWN0b3IiLCJQcm9wVHlwZXMiLCJDYXJkIiwiUG9wb3ZlciIsIkJ1dHRvbkdyb3VwIiwiQnV0dG9uIiwiUmV0d2VldE91dGxpbmVkIiwiSGVhcnRPdXRsaW5lZCIsIk1lc3NhZ2VPdXRsaW5lZCIsIkVsbGlwc2lzT3V0bGluZWQiLCJBdmF0YXIiLCJQb3N0SW1hZ2VzIiwiUG9zdENhcmQiLCJwb3N0IiwiaWQiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImRpdiIsImNvdmVyIiwiSW1hZ2VzIiwiaW1hZ2VzIiwiYWN0aW9ucyIsImNvbnRlbnQiLCJHcm91cCIsIlVzZXIiLCJ0eXBlIiwiTWV0YSIsImF2YXRhciIsIm5pY2tuYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb3BUeXBlcyIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0Iiwic3RyaW5nIiwiY29tbWVudHMiLCJhcnJheU9mIiwiaXNSZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostCard.js\n");

/***/ })

});