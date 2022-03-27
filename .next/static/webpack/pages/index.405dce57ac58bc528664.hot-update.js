webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ImagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/ImagesZoom/styles.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/dongduu/Desktop/NodeBird_SNS/components/ImagesZoom/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ImagesZoom = function ImagesZoom(_ref) {\n  _s();\n\n  var images = _ref.images,\n      onClose = _ref.onClose;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      currentSlide = _useState[0],\n      setCurrentSlide = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Overlay\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Global\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Header\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h1\", {\n        children: \"\\uC0C1\\uC138 \\uD398\\uC774\\uC9C0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"CloseBtn\"], {\n        onClick: onClose,\n        children: \"X\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"SlickWrapper\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          initialSlide: 0,\n          beforeChange: function beforeChange(slide) {\n            return setCurrentSlide(slide);\n          },\n          infinite: true,\n          arrows: false,\n          slidesToShow: 1,\n          slidesToScroll: 1,\n          children: images.map(function (v) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"ImgWrapper\"], {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"img\", {\n                src: v.src,\n                alt: v.src\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 17\n              }, _this)\n            }, v.src, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Indicator\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n            children: [currentSlide + 1, \" /\", images.length]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ImagesZoom, \"VQw0KpRgltXDNPWBgmV3GhZXdQE=\");\n\n_c = ImagesZoom;\nImagesZoom.propTypes + {\n  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,\n  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagesZoom);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImagesZoom\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzPzYxODciXSwibmFtZXMiOlsiSW1hZ2VzWm9vbSIsImltYWdlcyIsIm9uQ2xvc2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInNsaWRlIiwibWFwIiwidiIsInNyYyIsImxlbmd0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBVUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUMxQyxrQkFBd0NDLHNEQUFRLENBQUMsQ0FBRCxDQUFoRDtBQUFBLE1BQU9DLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBRUEsc0JBQ0UscUVBQUMsK0NBQUQ7QUFBQSw0QkFDRSxxRUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyw4Q0FBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQyxnREFBRDtBQUFVLGVBQU8sRUFBRUgsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQU1FO0FBQUEsNkJBQ0UscUVBQUMsb0RBQUQ7QUFBQSxnQ0FDRSxxRUFBQyxrREFBRDtBQUNFLHNCQUFZLEVBQUUsQ0FEaEI7QUFFRSxzQkFBWSxFQUFFLHNCQUFDSSxLQUFEO0FBQUEsbUJBQVdELGVBQWUsQ0FBQ0MsS0FBRCxDQUExQjtBQUFBLFdBRmhCO0FBR0Usa0JBQVEsTUFIVjtBQUlFLGdCQUFNLEVBQUUsS0FKVjtBQUtFLHNCQUFZLEVBQUUsQ0FMaEI7QUFNRSx3QkFBYyxFQUFFLENBTmxCO0FBQUEsb0JBUUdMLE1BQU0sQ0FBQ00sR0FBUCxDQUFXLFVBQUNDLENBQUQ7QUFBQSxnQ0FDVixxRUFBQyxrREFBRDtBQUFBLHFDQUNFO0FBQUssbUJBQUcsRUFBRUEsQ0FBQyxDQUFDQyxHQUFaO0FBQWlCLG1CQUFHLEVBQUVELENBQUMsQ0FBQ0M7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQWlCRCxDQUFDLENBQUNDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFU7QUFBQSxXQUFYO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWVFLHFFQUFDLGlEQUFEO0FBQUEsaUNBQ0U7QUFBQSx1QkFDR0wsWUFBWSxHQUFHLENBRGxCLFFBQ3VCSCxNQUFNLENBQUNTLE1BRDlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0NELENBbkNEOztHQUFNVixVOztLQUFBQSxVO0FBcUNOQSxVQUFVLENBQUNXLFNBQVgsR0FDRTtBQUNFVixRQUFNLEVBQUVXLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JELGlEQUFTLENBQUNFLE1BQTVCLEVBQW9DQyxVQUQ5QztBQUVFYixTQUFPLEVBQUVVLGlEQUFTLENBQUNJLElBQVYsQ0FBZUQ7QUFGMUIsQ0FERjtBQU1lZix5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW1hZ2VzWm9vbS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFNsaWNrIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IHtcbiAgT3ZlcmxheSxcbiAgR2xvYmFsLFxuICBIZWFkZXIsXG4gIENsb3NlQnRuLFxuICBJbWdXcmFwcGVyLFxuICBJbmRpY2F0b3IsXG4gIFNsaWNrV3JhcHBlcixcbn0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IEltYWdlc1pvb20gPSAoeyBpbWFnZXMsIG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8T3ZlcmxheT5cbiAgICAgIDxHbG9iYWwgLz5cbiAgICAgIDxIZWFkZXI+XG4gICAgICAgIDxoMT7sg4HshLgg7Y6Y7J207KeAPC9oMT5cbiAgICAgICAgPENsb3NlQnRuIG9uQ2xpY2s9e29uQ2xvc2V9Plg8L0Nsb3NlQnRuPlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8U2xpY2tXcmFwcGVyPlxuICAgICAgICAgIDxTbGlja1xuICAgICAgICAgICAgaW5pdGlhbFNsaWRlPXswfVxuICAgICAgICAgICAgYmVmb3JlQ2hhbmdlPXsoc2xpZGUpID0+IHNldEN1cnJlbnRTbGlkZShzbGlkZSl9XG4gICAgICAgICAgICBpbmZpbml0ZVxuICAgICAgICAgICAgYXJyb3dzPXtmYWxzZX1cbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdz17MX1cbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsPXsxfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpbWFnZXMubWFwKCh2KSA9PiAoXG4gICAgICAgICAgICAgIDxJbWdXcmFwcGVyIGtleT17di5zcmN9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2LnNyY30gYWx0PXt2LnNyY30gLz5cbiAgICAgICAgICAgICAgPC9JbWdXcmFwcGVyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TbGljaz5cbiAgICAgICAgICA8SW5kaWNhdG9yPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge2N1cnJlbnRTbGlkZSArIDF9IC97aW1hZ2VzLmxlbmd0aH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvSW5kaWNhdG9yPlxuICAgICAgICA8L1NsaWNrV3JhcHBlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvT3ZlcmxheT5cbiAgKTtcbn07XG5cbkltYWdlc1pvb20ucHJvcFR5cGVzICtcbiAge1xuICAgIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcbiAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZXNab29tO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ImagesZoom/index.js\n");

/***/ })

})