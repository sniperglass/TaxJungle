webpackHotUpdate("main",{

/***/ "./src/components/BlogOverview/styles.js":
/*!***********************************************!*\
  !*** ./src/components/BlogOverview/styles.js ***!
  \***********************************************/
/*! exports provided: BlogOverviewStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogOverviewStyle", function() { return BlogOverviewStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_purple_background2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/purple_background2.jpg */ "./src/assets/purple_background2.jpg");
/* harmony import */ var _assets_purple_background6_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/purple_background6.jpg */ "./src/assets/purple_background6.jpg");
/* harmony import */ var _assets_purple_background7_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/purple_background7.jpg */ "./src/assets/purple_background7.jpg");
/* harmony import */ var _assets_purple_background8_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/purple_background8.jpeg */ "./src/assets/purple_background8.jpeg");
/* harmony import */ var _assets_purple_background9_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/purple_background9.jpeg */ "./src/assets/purple_background9.jpeg");
/* harmony import */ var _assets_purple_background11_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/purple_background11.jpg */ "./src/assets/purple_background11.jpg");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);








const BlogOverviewStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section`

position: absolute;
z-index: -1;
width: 100vw;
height:100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:${props => props.theme.backgrounds.greyLight};
/* border: 1px solid red; */
justify-content: flex-start;

.title {
    display: flex;
    font-weight:500;
    font-size:36px;
    width: 100%;
    height: 15%;
    color: white;
    /* color:${props => props.theme.text.mainColor}; */
    background-color: 
    align-items: center;
    justify-content: center;
    /* border: 1px solid green; */
}

.main-container {
    /* position: relative; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 85%;
    /* border: 1px solid red; */ 
}

.card-box {
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 80%;
    /* border: 1px solid red; */
}
.back-img {
    position: fixed;
    width: 100%;
    height: 300px;
    z-index: -1;
    bottom: 0;
    background-color: ${props => props.theme.text.mainColor};
    /* border: 1px solid yellow;  */
}
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.55fa0e153e4e05aee629.hot-update.js.map