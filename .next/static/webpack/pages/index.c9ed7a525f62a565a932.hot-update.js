webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nvar initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: \"동두\"\n    },\n    content: \"첫 번째 게시글 #해시태그 #익스프레스\",\n    Images: [{\n      src: \"https://cdn.inflearn.com/public/files/courses/325637/b3dcddbc-f6c2-4c35-a1ae-350af347616e/325637-0.png\"\n    }, {\n      src: \"https://cdn.inflearn.com/public/files/courses/325637/b3dcddbc-f6c2-4c35-a1ae-350af347616e/325637-0.png\"\n    }, {\n      src: \"https://cdn.inflearn.com/public/files/courses/325637/b3dcddbc-f6c2-4c35-a1ae-350af347616e/325637-0.png\"\n    }],\n    // 깃허브 연습\n    Comments: [{\n      User: {\n        nickname: \"nero\"\n      },\n      content: \"마싯겠땅\"\n    }, {\n      User: {\n        nickname: \"babo\"\n      },\n      content: \"어쩌라거ㅗ\"\n    }]\n  }],\n  imagePaths: [],\n  postAdded: false\n};\nvar ADD_POST = \"ADD_POST\";\nvar addPost = {\n  type: ADD_POST\n};\nvar dummmyPost = {\n  id: 2,\n  content: \"더미데이터입니다.\",\n  User: {\n    id: 1,\n    nickname: \"더미\"\n  },\n  Images: [],\n  Contents: []\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummmyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n        postAdded: true\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsIkFERF9QT1NUIiwiYWRkUG9zdCIsInR5cGUiLCJkdW1tbXlQb3N0IiwiQ29udGVudHMiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsV0FBUyxFQUFFLENBQ1Q7QUFDRUMsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFO0FBQ0pELFFBQUUsRUFBRSxDQURBO0FBRUpFLGNBQVEsRUFBRTtBQUZOLEtBRlI7QUFNRUMsV0FBTyxFQUFFLHVCQU5YO0FBT0VDLFVBQU0sRUFBRSxDQUNOO0FBQ0VDLFNBQUcsRUFBRTtBQURQLEtBRE0sRUFJTjtBQUNFQSxTQUFHLEVBQUU7QUFEUCxLQUpNLEVBT047QUFDRUEsU0FBRyxFQUFFO0FBRFAsS0FQTSxDQVBWO0FBa0JFO0FBQ0FDLFlBQVEsRUFBRSxDQUNSO0FBQ0VMLFVBQUksRUFBRTtBQUNKQyxnQkFBUSxFQUFFO0FBRE4sT0FEUjtBQUlFQyxhQUFPLEVBQUU7QUFKWCxLQURRLEVBT1I7QUFDRUYsVUFBSSxFQUFFO0FBQ0pDLGdCQUFRLEVBQUU7QUFETixPQURSO0FBSUVDLGFBQU8sRUFBRTtBQUpYLEtBUFE7QUFuQlosR0FEUyxDQURlO0FBcUMxQkksWUFBVSxFQUFFLEVBckNjO0FBc0MxQkMsV0FBUyxFQUFFO0FBdENlLENBQXJCO0FBeUNQLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNPLElBQU1DLE9BQU8sR0FBRztBQUNyQkMsTUFBSSxFQUFFRjtBQURlLENBQWhCO0FBR1AsSUFBTUcsVUFBVSxHQUFHO0FBQ2pCWixJQUFFLEVBQUUsQ0FEYTtBQUVqQkcsU0FBTyxFQUFFLFdBRlE7QUFHakJGLE1BQUksRUFBRTtBQUNKRCxNQUFFLEVBQUUsQ0FEQTtBQUVKRSxZQUFRLEVBQUU7QUFGTixHQUhXO0FBT2pCRSxRQUFNLEVBQUUsRUFQUztBQVFqQlMsVUFBUSxFQUFFO0FBUk8sQ0FBbkI7O0FBV0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCakIsWUFBeUI7QUFBQSxNQUFYa0IsTUFBVzs7QUFDaEQsVUFBUUEsTUFBTSxDQUFDTCxJQUFmO0FBQ0UsU0FBS0YsUUFBTDtBQUNFLDZDQUNLTSxLQURMO0FBRUVoQixpQkFBUyxHQUFHYSxVQUFILHNHQUFrQkcsS0FBSyxDQUFDaEIsU0FBeEIsRUFGWDtBQUdFUyxpQkFBUyxFQUFFO0FBSGI7O0FBS0Y7QUFDRSxhQUFPTyxLQUFQO0FBUko7QUFVRCxDQVhEOztBQWFlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBtYWluUG9zdHM6IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIFVzZXI6IHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5pY2tuYW1lOiBcIuuPmeuRkFwiLFxuICAgICAgfSxcbiAgICAgIGNvbnRlbnQ6IFwi7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkXCIsXG4gICAgICBJbWFnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogXCJodHRwczovL2Nkbi5pbmZsZWFybi5jb20vcHVibGljL2ZpbGVzL2NvdXJzZXMvMzI1NjM3L2IzZGNkZGJjLWY2YzItNGMzNS1hMWFlLTM1MGFmMzQ3NjE2ZS8zMjU2MzctMC5wbmdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogXCJodHRwczovL2Nkbi5pbmZsZWFybi5jb20vcHVibGljL2ZpbGVzL2NvdXJzZXMvMzI1NjM3L2IzZGNkZGJjLWY2YzItNGMzNS1hMWFlLTM1MGFmMzQ3NjE2ZS8zMjU2MzctMC5wbmdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogXCJodHRwczovL2Nkbi5pbmZsZWFybi5jb20vcHVibGljL2ZpbGVzL2NvdXJzZXMvMzI1NjM3L2IzZGNkZGJjLWY2YzItNGMzNS1hMWFlLTM1MGFmMzQ3NjE2ZS8zMjU2MzctMC5wbmdcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICAvLyDquYPtl4jruIwg7Jew7Iq1XG4gICAgICBDb21tZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgbmlja25hbWU6IFwibmVyb1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDogXCLrp4jsi6/qsqDrlYVcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcImJhYm9cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IFwi7Ja07KmM65286rGw44WXXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG4gIGltYWdlUGF0aHM6IFtdLFxuICBwb3N0QWRkZWQ6IGZhbHNlLFxufTtcblxuY29uc3QgQUREX1BPU1QgPSBcIkFERF9QT1NUXCI7XG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcbiAgdHlwZTogQUREX1BPU1QsXG59O1xuY29uc3QgZHVtbW15UG9zdCA9IHtcbiAgaWQ6IDIsXG4gIGNvbnRlbnQ6IFwi642U66+4642w7J207YSw7J6F64uI64ukLlwiLFxuICBVc2VyOiB7XG4gICAgaWQ6IDEsXG4gICAgbmlja25hbWU6IFwi642U66+4XCIsXG4gIH0sXG4gIEltYWdlczogW10sXG4gIENvbnRlbnRzOiBbXSxcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBRERfUE9TVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtYWluUG9zdHM6IFtkdW1tbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxuICAgICAgICBwb3N0QWRkZWQ6IHRydWUsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})