webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\nvar initialState = {\n  mainPosts: [{\n    id: 1,\n    // 게시글 자체 속성\n    User: {\n      // 다른 정보들과 합쳐서 줌\n      id: 1,\n      nickname: \"동두\"\n    },\n    content: \"첫 번째 게시글 #해시태그 #익스프레스\",\n    // 게시글 자체 속성\n    Image: [// 다른 정보들과 합쳐서 줌\n    {\n      src: \"https://postfiles.pstatic.net/MjAyMTA2MjlfMTU3/MDAxNjI0ODk2NDkwMDgz.Q9lKbK2zgM5FWQGKDhaHVcT2zMqVZKzdeW601i9rEIAg.Egv79qTFYRSPHqqIMV50T-AMoBlm0iWNPLudoEZbfncg.JPEG.4012popo/20210108_143447.jpg?type=w966\"\n    }, {\n      src: \"https://postfiles.pstatic.net/MjAyMTA2MjlfMTgy/MDAxNjI0ODk2NDkzNDgz.U7_npqKuy1jx_Dr2escVxRLHNWheUq0ALFUuFQxW4ZIg.63wI-NGWjr1Qdicn6xUxMhazohOTT97uWUO0SidY9W0g.JPEG.4012popo/20210127_185449.jpg?type=w966\"\n    }, {\n      src: \"https://postfiles.pstatic.net/MjAyMTA2MjlfNjYg/MDAxNjI0ODk2NTE0NTc0.cYcUet2ac_ceeCuFGzMzXfd-1jxmvtgU8jDVxMqqZicg.koXU3Kuww7tCOtzOWR8b7PH11QIG80tcc9MgFfrmltwg.JPEG.4012popo/IMG_0429.jpg?type=w966\"\n    }],\n    Conments: [{\n      // 다른 정보들과 합쳐서 줌\n      User: {\n        nickname: \"nero\"\n      },\n      content: \"마싯겠땅\"\n    }, {\n      User: {\n        nickname: \"babo\"\n      },\n      content: \"어쩌라거ㅗ\"\n    }]\n  }],\n  imagePaths: []\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlIiwic3JjIiwiQ29ubWVudHMiLCJpbWFnZVBhdGhzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsV0FBUyxFQUFFLENBQ1Q7QUFDRUMsTUFBRSxFQUFFLENBRE47QUFDUztBQUNQQyxRQUFJLEVBQUU7QUFDSjtBQUNBRCxRQUFFLEVBQUUsQ0FGQTtBQUdKRSxjQUFRLEVBQUU7QUFITixLQUZSO0FBT0VDLFdBQU8sRUFBRSx1QkFQWDtBQU9vQztBQUNsQ0MsU0FBSyxFQUFFLENBQ0w7QUFDQTtBQUNFQyxTQUFHLEVBQUU7QUFEUCxLQUZLLEVBS0w7QUFDRUEsU0FBRyxFQUFFO0FBRFAsS0FMSyxFQVFMO0FBQ0VBLFNBQUcsRUFBRTtBQURQLEtBUkssQ0FSVDtBQW9CRUMsWUFBUSxFQUFFLENBQ1I7QUFDRTtBQUNBTCxVQUFJLEVBQUU7QUFDSkMsZ0JBQVEsRUFBRTtBQUROLE9BRlI7QUFLRUMsYUFBTyxFQUFFO0FBTFgsS0FEUSxFQVFSO0FBQ0VGLFVBQUksRUFBRTtBQUNKQyxnQkFBUSxFQUFFO0FBRE4sT0FEUjtBQUlFQyxhQUFPLEVBQUU7QUFKWCxLQVJRO0FBcEJaLEdBRFMsQ0FEZTtBQXVDMUJJLFlBQVUsRUFBRTtBQXZDYyxDQUFyQjs7QUEwQ1AsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCWCxZQUF5QjtBQUFBLE1BQVhZLE1BQVc7O0FBQ2hELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFO0FBQ0UsYUFBT0YsS0FBUDtBQUZKO0FBSUQsQ0FMRDs7QUFPZUQsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbWFpblBvc3RzOiBbXG4gICAge1xuICAgICAgaWQ6IDEsIC8vIOqyjOyLnOq4gCDsnpDssrQg7IaN7ISxXG4gICAgICBVc2VyOiB7XG4gICAgICAgIC8vIOuLpOuluCDsoJXrs7Trk6Tqs7wg7ZWp7LOQ7IScIOykjFxuICAgICAgICBpZDogMSxcbiAgICAgICAgbmlja25hbWU6IFwi64+Z65GQXCIsXG4gICAgICB9LFxuICAgICAgY29udGVudDogXCLssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqRcIiwgLy8g6rKM7Iuc6riAIOyekOyytCDsho3shLFcbiAgICAgIEltYWdlOiBbXG4gICAgICAgIC8vIOuLpOuluCDsoJXrs7Trk6Tqs7wg7ZWp7LOQ7IScIOykjFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vcG9zdGZpbGVzLnBzdGF0aWMubmV0L01qQXlNVEEyTWpsZk1UVTMvTURBeE5qSTBPRGsyTkRrd01EZ3ouUTlsS2JLMnpnTTVGV1FHS0RoYUhWY1Qyek1xVlpLemRlVzYwMWk5ckVJQWcuRWd2NzlxVEZZUlNQSHFxSU1WNTBULUFNb0JsbTBpV05QTHVkb0VaYmZuY2cuSlBFRy40MDEycG9wby8yMDIxMDEwOF8xNDM0NDcuanBnP3R5cGU9dzk2NlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vcG9zdGZpbGVzLnBzdGF0aWMubmV0L01qQXlNVEEyTWpsZk1UZ3kvTURBeE5qSTBPRGsyTkRrek5EZ3ouVTdfbnBxS3V5MWp4X0RyMmVzY1Z4UkxITldoZVVxMEFMRlV1RlF4VzRaSWcuNjN3SS1OR1dqcjFRZGljbjZ4VXhNaGF6b2hPVFQ5N3VXVU8wU2lkWTlXMGcuSlBFRy40MDEycG9wby8yMDIxMDEyN18xODU0NDkuanBnP3R5cGU9dzk2NlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vcG9zdGZpbGVzLnBzdGF0aWMubmV0L01qQXlNVEEyTWpsZk5qWWcvTURBeE5qSTBPRGsyTlRFME5UYzAuY1ljVWV0MmFjX2NlZUN1Rkd6TXpYZmQtMWp4bXZ0Z1U4akRWeE1xcVppY2cua29YVTNLdXd3N3RDT3R6T1dSOGI3UEgxMVFJRzgwdGNjOU1nRmZybWx0d2cuSlBFRy40MDEycG9wby9JTUdfMDQyOS5qcGc/dHlwZT13OTY2XCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgQ29ubWVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIC8vIOuLpOuluCDsoJXrs7Trk6Tqs7wg7ZWp7LOQ7IScIOykjFxuICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcIm5lcm9cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IFwi66eI7Iuv6rKg65WFXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICBuaWNrbmFtZTogXCJiYWJvXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50OiBcIuyWtOypjOudvOqxsOOFl1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICBpbWFnZVBhdGhzOiBbXSxcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})