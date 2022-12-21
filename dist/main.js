/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/background-image.jpg */ "./src/imgs/background-image.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:wght@300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --maincomponent: #184e77;\n    --cardwidth: max(450px, 45vw);\n    --cardcontentwidth: max(415px, 60%);\n    --accentcolor: #a8dadc;\n    --radius: 25px;\n    font-family: 'Poppins', sans-serif;\n}\n\n*{\n    box-sizing: border-box;\n}\nbody{\n    margin: 0px;\n    overflow-x: hidden;\n}\n\n#content{\n    overflow: scroll;\n    overflow-x: hidden;\n    height: 100vh;\n    width: 100vw;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nbutton{\n    border-style: none;\n}\n\n/*header + components styling */\nheader{\n    width: 100%;\n    background-color: var(--maincomponent);\n    padding-top: 8px;\n    display: flex;\n    justify-content: center;\n    gap:24px;\n}\n\n.page-selector{\n    color: white;\n    background-color: #cfa3ca;\n    border-radius: 5px;\n\n    width: 100px;\n    height: 50px;\n}\n\n.page-selector:hover{\n    cursor: pointer;\n}\n.page-selector:active{\n    transform: scale(0.9);\n}\n\n\n/*body styling*/\n\n.main-card{\n    margin-top: 48px;\n    background-color: var(--maincomponent);\n    width: var(--cardwidth);\n    border-radius: var(--radius);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 24px;\n}\n\n.main-card>*{\n    margin-top: 24px;\n    margin-bottom: 24px;\n}\n\n.heading-container,\n.sub-heading-container{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 12px;\n    background-color: var(--accentcolor);\n    border-radius: var(--radius);\n}\n\n.heading-container{\n    width: var(--cardcontentwidth);\n}\n\n.sub-heading-container{\n    width: calc(var(--cardcontentwidth)/2);\n}\n\n.heading-container>h1{\n    display: inline-block;\n    font-size: x-large;\n}\n\n.emoji{\n    width: 50px;\n    height: 50px;\n}\n\n.card{\n    width: var(--cardcontentwidth);\n    background-color: var(--accentcolor);\n    border-radius: var(--radius);\n    padding: 24px;\n    text-align: center;\n}\n\n.author,\n.price{\n    font-weight: bold;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,wBAAwB;IACxB,6BAA6B;IAC7B,mCAAmC;IACnC,sBAAsB;IACtB,cAAc;IACd,kCAAkC;AACtC;;AAEA;IACI,sBAAsB;AAC1B;AACA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,mDAA8C;;IAE9C,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA,+BAA+B;AAC/B;IACI,WAAW;IACX,sCAAsC;IACtC,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;;IAElB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;AACA;IACI,qBAAqB;AACzB;;;AAGA,eAAe;;AAEf;IACI,gBAAgB;IAChB,sCAAsC;IACtC,uBAAuB;IACvB,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;;IAEI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,oCAAoC;IACpC,4BAA4B;AAChC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,8BAA8B;IAC9B,oCAAoC;IACpC,4BAA4B;IAC5B,aAAa;IACb,kBAAkB;AACtB;;AAEA;;IAEI,iBAAiB;AACrB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:wght@300&display=swap');\n\n:root{\n    --maincomponent: #184e77;\n    --cardwidth: max(450px, 45vw);\n    --cardcontentwidth: max(415px, 60%);\n    --accentcolor: #a8dadc;\n    --radius: 25px;\n    font-family: 'Poppins', sans-serif;\n}\n\n*{\n    box-sizing: border-box;\n}\nbody{\n    margin: 0px;\n    overflow-x: hidden;\n}\n\n#content{\n    overflow: scroll;\n    overflow-x: hidden;\n    height: 100vh;\n    width: 100vw;\n    background: url('./imgs/background-image.jpg');\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nbutton{\n    border-style: none;\n}\n\n/*header + components styling */\nheader{\n    width: 100%;\n    background-color: var(--maincomponent);\n    padding-top: 8px;\n    display: flex;\n    justify-content: center;\n    gap:24px;\n}\n\n.page-selector{\n    color: white;\n    background-color: #cfa3ca;\n    border-radius: 5px;\n\n    width: 100px;\n    height: 50px;\n}\n\n.page-selector:hover{\n    cursor: pointer;\n}\n.page-selector:active{\n    transform: scale(0.9);\n}\n\n\n/*body styling*/\n\n.main-card{\n    margin-top: 48px;\n    background-color: var(--maincomponent);\n    width: var(--cardwidth);\n    border-radius: var(--radius);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 24px;\n}\n\n.main-card>*{\n    margin-top: 24px;\n    margin-bottom: 24px;\n}\n\n.heading-container,\n.sub-heading-container{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 12px;\n    background-color: var(--accentcolor);\n    border-radius: var(--radius);\n}\n\n.heading-container{\n    width: var(--cardcontentwidth);\n}\n\n.sub-heading-container{\n    width: calc(var(--cardcontentwidth)/2);\n}\n\n.heading-container>h1{\n    display: inline-block;\n    font-size: x-large;\n}\n\n.emoji{\n    width: 50px;\n    height: 50px;\n}\n\n.card{\n    width: var(--cardcontentwidth);\n    background-color: var(--accentcolor);\n    border-radius: var(--radius);\n    padding: 24px;\n    text-align: center;\n}\n\n.author,\n.price{\n    font-weight: bold;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactCardComponent)
/* harmony export */ });
/* harmony import */ var _makeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeElement */ "./src/makeElement.js");


function contactCardComponent(){

    const headingContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeCardHeading)("Contact Us");


    const mainCard = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeDiv)('main-card');
    mainCard.appendChild(headingContainer);
    return mainCard;
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ headerComp)
/* harmony export */ });

function makeButton(str){
    const button = document.createElement('button');
    button.textContent = str;
    button.classList.add('page-selector');
    button.setAttribute('id', str);

    return button;
}

function headerComp(){
    const header = document.createElement('header');

    let args = Array.from(arguments);

    args.forEach(arg =>{
        try{
            let str = arg.toString();
            const button = makeButton(str);
            header.appendChild(button);
        }
        catch(err){
            console.log(err);
            const button = makeButton("ERROR");
            header.appendChild(button);
        }
    });

    return header;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeCardComponent)
/* harmony export */ });
/* harmony import */ var _makeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeElement */ "./src/makeElement.js");




function homeCardComponent(){

    //heading
    
    const headingContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeCardHeading)("Dancing Jelly's Jelly Bar");

    //card quote

    const quote = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makePara)('quote');
    quote.textContent = `We love Dancing Jelly's in our family,
    it is the finest Jelly establishment in all of the coast!
    I highly recommend trying a jelly margherita, it'll blow
    your tentacles off!`;

    const author = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makePara)('author');
    author.textContent = "- Squidward Tentacles";

    const quoteCard = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeDiv)('card');
    quoteCard.appendChild(quote);
    quoteCard.appendChild(author);

    //card hours

    const week = ["Sunday", "Monday","Tuesday","Wednesday", "Thursday", "Friday", "Saturday"]
    const hourCard = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeDiv)('card');
    const hourHeading = document.createElement('h3');
    hourHeading.textContent = "Hours";
    hourCard.appendChild(hourHeading);

    week.forEach(day =>{
        const para = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makePara)('day');

        if(day == "Sunday"){
            para.textContent = `${day}: 8am - 8pm`;
        } else if(day == "Thursday" || day == "Friday"){
            para.textContent = `${day}: 6am - 10pm`;
        } else if(day == "Saturday"){
            para.textContent = `${day}: 8am - 10pm`;
        } else{
            para.textContent = `${day}: 6am - 6pm`;
        }

        hourCard.appendChild(para);
    })
    
    //location info

    const locationCard = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeDiv)('card');
    const locationHeading = document.createElement('h3');
    locationHeading.textContent = "Location"
    const locationPara = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makePara)('location');
    locationPara.textContent = "101 Bikini Bottom Lane";

    locationCard.appendChild(locationHeading);
    locationCard.appendChild(locationPara);

    //greeting card

    const greetingCard = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeDiv)('card');
    const greetingHeading = document.createElement('h4');
    greetingHeading.textContent = "We look forward to seeing you!";
    greetingCard.appendChild(greetingHeading);

    //adding elements to main card

    const mainCard = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeDiv)('main-card');
    mainCard.appendChild(headingContainer);
    mainCard.appendChild(quoteCard);
    mainCard.appendChild(hourCard);
    mainCard.appendChild(locationCard);
    mainCard.appendChild(greetingCard);

    return mainCard;
}

/***/ }),

/***/ "./src/makeElement.js":
/*!****************************!*\
  !*** ./src/makeElement.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeCardHeading": () => (/* binding */ makeCardHeading),
/* harmony export */   "makeCardSubHeading": () => (/* binding */ makeCardSubHeading),
/* harmony export */   "makeDiv": () => (/* binding */ makeDiv),
/* harmony export */   "makePara": () => (/* binding */ makePara)
/* harmony export */ });
/* harmony import */ var _imgs_jelly_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/jelly.png */ "./src/imgs/jelly.png");


function makeDiv(){
    const div = document.createElement('div');

    let args = Array.from(arguments);
    args.forEach(arg =>{
        div.classList.add(arg)
    })

    return div;
}

function makePara(){
    const para = document.createElement('p');

    let args = Array.from(arguments);
    args.forEach(arg =>{
        para.classList.add(arg)
    })

    return para;
}

function makeJelly(){
    const jellyEmoji = document.createElement('img');
    jellyEmoji.classList.add('emoji')
    jellyEmoji.src = _imgs_jelly_png__WEBPACK_IMPORTED_MODULE_0__;
    return jellyEmoji;
}

function makeCardHeading(str){
    const headingContainer = makeDiv('heading-container');
    const heading = document.createElement('h1');
    heading.textContent = str;

    const jellyEmoji = makeJelly();

    headingContainer.appendChild(heading);
    headingContainer.appendChild(jellyEmoji);

    return headingContainer;
}

function makeCardSubHeading(str){
    const headingContainer = makeDiv('sub-heading-container');
    const heading = document.createElement('h2');
    heading.textContent = str;

    const jellyEmoji = makeJelly();

    headingContainer.appendChild(heading);
    headingContainer.appendChild(jellyEmoji);

    return headingContainer;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuCardComponent)
/* harmony export */ });
/* harmony import */ var _makeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeElement */ "./src/makeElement.js");


class menuItem{
    constructor(title, description, price){
        this.title = title
        this.description = description;
        this.price = price;
    }

    makeCard(){
        const menuCard = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeDiv)('card');

        const menuTitle = document.createElement('h3');
        menuTitle.textContent = this.title;
    
        const menuDescription = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makePara)('menu-description');
        menuDescription.textContent = this.description;
    
        const menuPrice = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makePara)('price');
        menuPrice.textContent = this.price;
    
        menuCard.appendChild(menuTitle);
        menuCard.appendChild(menuDescription);
        menuCard.appendChild(menuPrice);
    
        return menuCard;
    }
}

function menuCardComponent(){

    const headingContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeCardHeading)("Menu");


    const beveragesHeading = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeCardSubHeading)("Bevs");   

    const jellyMargherita = new menuItem(
        "Jelly Margherita",

        `A cold, complex drink 
        made with the highest quality jelly 
        and a bit of lime to start your 
        night off right!`,

        "Price: $8"
    );

    const ginTonic = new menuItem(
        "Gin & Tonic",

        `A tantalizing, almost exotic, drink that is
        a deep sea twist on a classic. 
        Infused with the flavors of several kinds of 
        jelly fish jelly.`,

        "Price: $12"
    );


    const sidesHeading = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeCardSubHeading)("Sides");

    const toastJelly = new menuItem(
        "Toast & Jelly",

        `A slice of toast, your choice of bread, 
        and our homemade jellyfish jelly.`,

        "Price: $2"
    );

    const poutine = new menuItem(
        "Poutine",

        `The crispiest fries you've ever had
        the pleasure of eating, topped with our
        gravy, made fresh in house everyday.`,

        "Price: $6"
    );


    const mainDishHeading = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeCardSubHeading)("Mains");

    const krabbyPatty = new menuItem(
        "Krabby Patty",

        `You know what this is.`,

        "Price: $12"
    );

    const jellyBurger = new menuItem(
        "Jelly Burger",

        `Our ocean famous Krabby Patty with
        jellyfish jelly. (The chef's favourite!)`,

        "Price: $15"
    );



    const mainCard = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeDiv)('main-card');
    mainCard.appendChild(headingContainer);

    mainCard.appendChild(beveragesHeading);
    mainCard.appendChild(jellyMargherita.makeCard());
    mainCard.appendChild(ginTonic.makeCard());

    mainCard.appendChild(sidesHeading);
    mainCard.appendChild(toastJelly.makeCard());
    mainCard.appendChild(poutine.makeCard());

    mainCard.appendChild(mainDishHeading);
    mainCard.appendChild(krabbyPatty.makeCard());
    mainCard.appendChild(jellyBurger.makeCard());
    return mainCard;
}


/***/ }),

/***/ "./src/imgs/background-image.jpg":
/*!***************************************!*\
  !*** ./src/imgs/background-image.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30204f620898d35f61e2.jpg";

/***/ }),

/***/ "./src/imgs/jelly.png":
/*!****************************!*\
  !*** ./src/imgs/jelly.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b3766ba370911bfd4ad.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




 

const content = document.querySelector('#content');

//Each parameter creates a button with the text content you enter
content.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Home", "Menu", "Contact"));

//default page loaded
content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());

//button event listeners
const buttons = document.querySelectorAll('.page-selector');

buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        const mainCard = document.querySelector(".main-card");
        mainCard.remove();

        switch(button.getAttribute('id')){
            case "Home": 
                content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
                break;
            case "Menu":
                content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
                break;  
            case "Contact":
                content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
                break;
        }
    })
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUM7QUFDSztBQUNBO0FBQ007QUFDM0I7O0FBRXJCOztBQUVBO0FBQ0Esb0JBQW9CLHNEQUFVOztBQUU5QjtBQUNBLG9CQUFvQixvREFBaUI7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQyxvREFBaUI7QUFDckQ7QUFDQTtBQUNBLG9DQUFvQyxvREFBaUI7QUFDckQ7QUFDQTtBQUNBLG9DQUFvQyx1REFBb0I7QUFDeEQ7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFrZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1ncy9iYWNrZ3JvdW5kLWltYWdlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tbWFpbmNvbXBvbmVudDogIzE4NGU3NztcXG4gICAgLS1jYXJkd2lkdGg6IG1heCg0NTBweCwgNDV2dyk7XFxuICAgIC0tY2FyZGNvbnRlbnR3aWR0aDogbWF4KDQxNXB4LCA2MCUpO1xcbiAgICAtLWFjY2VudGNvbG9yOiAjYThkYWRjO1xcbiAgICAtLXJhZGl1czogMjVweDtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keXtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b257XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLypoZWFkZXIgKyBjb21wb25lbnRzIHN0eWxpbmcgKi9cXG5oZWFkZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluY29tcG9uZW50KTtcXG4gICAgcGFkZGluZy10b3A6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDoyNHB4O1xcbn1cXG5cXG4ucGFnZS1zZWxlY3RvcntcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZhM2NhO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ucGFnZS1zZWxlY3Rvcjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucGFnZS1zZWxlY3RvcjphY3RpdmV7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG59XFxuXFxuXFxuLypib2R5IHN0eWxpbmcqL1xcblxcbi5tYWluLWNhcmR7XFxuICAgIG1hcmdpbi10b3A6IDQ4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5jb21wb25lbnQpO1xcbiAgICB3aWR0aDogdmFyKC0tY2FyZHdpZHRoKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjRweDtcXG59XFxuXFxuLm1haW4tY2FyZD4qe1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG5cXG4uaGVhZGluZy1jb250YWluZXIsXFxuLnN1Yi1oZWFkaW5nLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50Y29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xcbn1cXG5cXG4uaGVhZGluZy1jb250YWluZXJ7XFxuICAgIHdpZHRoOiB2YXIoLS1jYXJkY29udGVudHdpZHRoKTtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tY2FyZGNvbnRlbnR3aWR0aCkvMik7XFxufVxcblxcbi5oZWFkaW5nLWNvbnRhaW5lcj5oMXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxufVxcblxcbi5lbW9qaXtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmNhcmR7XFxuICAgIHdpZHRoOiB2YXIoLS1jYXJkY29udGVudHdpZHRoKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50Y29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xcbiAgICBwYWRkaW5nOiAyNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hdXRob3IsXFxuLnByaWNle1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0IsbUNBQW1DO0lBQ25DLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1EQUE4Qzs7SUFFOUMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUEsK0JBQStCO0FBQy9CO0lBQ0ksV0FBVztJQUNYLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjs7SUFFbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7OztBQUdBLGVBQWU7O0FBRWY7SUFDSSxnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULG9DQUFvQztJQUNwQyw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZmYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290e1xcbiAgICAtLW1haW5jb21wb25lbnQ6ICMxODRlNzc7XFxuICAgIC0tY2FyZHdpZHRoOiBtYXgoNDUwcHgsIDQ1dncpO1xcbiAgICAtLWNhcmRjb250ZW50d2lkdGg6IG1heCg0MTVweCwgNjAlKTtcXG4gICAgLS1hY2NlbnRjb2xvcjogI2E4ZGFkYztcXG4gICAgLS1yYWRpdXM6IDI1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbip7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHl7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2ltZ3MvYmFja2dyb3VuZC1pbWFnZS5qcGcnKTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qaGVhZGVyICsgY29tcG9uZW50cyBzdHlsaW5nICovXFxuaGVhZGVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbmNvbXBvbmVudCk7XFxuICAgIHBhZGRpbmctdG9wOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6MjRweDtcXG59XFxuXFxuLnBhZ2Utc2VsZWN0b3J7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmYTNjYTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnBhZ2Utc2VsZWN0b3I6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnBhZ2Utc2VsZWN0b3I6YWN0aXZle1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxufVxcblxcblxcbi8qYm9keSBzdHlsaW5nKi9cXG5cXG4ubWFpbi1jYXJke1xcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluY29tcG9uZW50KTtcXG4gICAgd2lkdGg6IHZhcigtLWNhcmR3aWR0aCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxufVxcblxcbi5tYWluLWNhcmQ+KntcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuXFxuLmhlYWRpbmctY29udGFpbmVyLFxcbi5zdWItaGVhZGluZy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudGNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcXG59XFxuXFxuLmhlYWRpbmctY29udGFpbmVye1xcbiAgICB3aWR0aDogdmFyKC0tY2FyZGNvbnRlbnR3aWR0aCk7XFxufVxcblxcbi5zdWItaGVhZGluZy1jb250YWluZXJ7XFxuICAgIHdpZHRoOiBjYWxjKHZhcigtLWNhcmRjb250ZW50d2lkdGgpLzIpO1xcbn1cXG5cXG4uaGVhZGluZy1jb250YWluZXI+aDF7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cXG5cXG4uZW1vaml7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5jYXJke1xcbiAgICB3aWR0aDogdmFyKC0tY2FyZGNvbnRlbnR3aWR0aCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudGNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYXV0aG9yLFxcbi5wcmljZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge21ha2VEaXYsIG1ha2VQYXJhLCBtYWtlQ2FyZEhlYWRpbmd9IGZyb20gJy4vbWFrZUVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0Q2FyZENvbXBvbmVudCgpe1xuXG4gICAgY29uc3QgaGVhZGluZ0NvbnRhaW5lciA9IG1ha2VDYXJkSGVhZGluZyhcIkNvbnRhY3QgVXNcIik7XG5cblxuICAgIGNvbnN0IG1haW5DYXJkID0gbWFrZURpdignbWFpbi1jYXJkJyk7XG4gICAgbWFpbkNhcmQuYXBwZW5kQ2hpbGQoaGVhZGluZ0NvbnRhaW5lcik7XG4gICAgcmV0dXJuIG1haW5DYXJkO1xufSIsIlxuZnVuY3Rpb24gbWFrZUJ1dHRvbihzdHIpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHN0cjtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncGFnZS1zZWxlY3RvcicpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgc3RyKTtcblxuICAgIHJldHVybiBidXR0b247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlckNvbXAoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICAgIGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xuXG4gICAgYXJncy5mb3JFYWNoKGFyZyA9PntcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgbGV0IHN0ciA9IGFyZy50b1N0cmluZygpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gbWFrZUJ1dHRvbihzdHIpO1xuICAgICAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBtYWtlQnV0dG9uKFwiRVJST1JcIik7XG4gICAgICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn0iLCJcbmltcG9ydCB7bWFrZURpdiwgbWFrZVBhcmEsIG1ha2VDYXJkSGVhZGluZ30gZnJvbSAnLi9tYWtlRWxlbWVudCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZUNhcmRDb21wb25lbnQoKXtcblxuICAgIC8vaGVhZGluZ1xuICAgIFxuICAgIGNvbnN0IGhlYWRpbmdDb250YWluZXIgPSBtYWtlQ2FyZEhlYWRpbmcoXCJEYW5jaW5nIEplbGx5J3MgSmVsbHkgQmFyXCIpO1xuXG4gICAgLy9jYXJkIHF1b3RlXG5cbiAgICBjb25zdCBxdW90ZSA9IG1ha2VQYXJhKCdxdW90ZScpO1xuICAgIHF1b3RlLnRleHRDb250ZW50ID0gYFdlIGxvdmUgRGFuY2luZyBKZWxseSdzIGluIG91ciBmYW1pbHksXG4gICAgaXQgaXMgdGhlIGZpbmVzdCBKZWxseSBlc3RhYmxpc2htZW50IGluIGFsbCBvZiB0aGUgY29hc3QhXG4gICAgSSBoaWdobHkgcmVjb21tZW5kIHRyeWluZyBhIGplbGx5IG1hcmdoZXJpdGEsIGl0J2xsIGJsb3dcbiAgICB5b3VyIHRlbnRhY2xlcyBvZmYhYDtcblxuICAgIGNvbnN0IGF1dGhvciA9IG1ha2VQYXJhKCdhdXRob3InKTtcbiAgICBhdXRob3IudGV4dENvbnRlbnQgPSBcIi0gU3F1aWR3YXJkIFRlbnRhY2xlc1wiO1xuXG4gICAgY29uc3QgcXVvdGVDYXJkID0gbWFrZURpdignY2FyZCcpO1xuICAgIHF1b3RlQ2FyZC5hcHBlbmRDaGlsZChxdW90ZSk7XG4gICAgcXVvdGVDYXJkLmFwcGVuZENoaWxkKGF1dGhvcik7XG5cbiAgICAvL2NhcmQgaG91cnNcblxuICAgIGNvbnN0IHdlZWsgPSBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIixcIlR1ZXNkYXlcIixcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl1cbiAgICBjb25zdCBob3VyQ2FyZCA9IG1ha2VEaXYoJ2NhcmQnKTtcbiAgICBjb25zdCBob3VySGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaG91ckhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XG4gICAgaG91ckNhcmQuYXBwZW5kQ2hpbGQoaG91ckhlYWRpbmcpO1xuXG4gICAgd2Vlay5mb3JFYWNoKGRheSA9PntcbiAgICAgICAgY29uc3QgcGFyYSA9IG1ha2VQYXJhKCdkYXknKTtcblxuICAgICAgICBpZihkYXkgPT0gXCJTdW5kYXlcIil7XG4gICAgICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gYCR7ZGF5fTogOGFtIC0gOHBtYDtcbiAgICAgICAgfSBlbHNlIGlmKGRheSA9PSBcIlRodXJzZGF5XCIgfHwgZGF5ID09IFwiRnJpZGF5XCIpe1xuICAgICAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IGAke2RheX06IDZhbSAtIDEwcG1gO1xuICAgICAgICB9IGVsc2UgaWYoZGF5ID09IFwiU2F0dXJkYXlcIil7XG4gICAgICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gYCR7ZGF5fTogOGFtIC0gMTBwbWA7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBgJHtkYXl9OiA2YW0gLSA2cG1gO1xuICAgICAgICB9XG5cbiAgICAgICAgaG91ckNhcmQuYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgfSlcbiAgICBcbiAgICAvL2xvY2F0aW9uIGluZm9cblxuICAgIGNvbnN0IGxvY2F0aW9uQ2FyZCA9IG1ha2VEaXYoJ2NhcmQnKTtcbiAgICBjb25zdCBsb2NhdGlvbkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGxvY2F0aW9uSGVhZGluZy50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIlxuICAgIGNvbnN0IGxvY2F0aW9uUGFyYSA9IG1ha2VQYXJhKCdsb2NhdGlvbicpO1xuICAgIGxvY2F0aW9uUGFyYS50ZXh0Q29udGVudCA9IFwiMTAxIEJpa2luaSBCb3R0b20gTGFuZVwiO1xuXG4gICAgbG9jYXRpb25DYXJkLmFwcGVuZENoaWxkKGxvY2F0aW9uSGVhZGluZyk7XG4gICAgbG9jYXRpb25DYXJkLmFwcGVuZENoaWxkKGxvY2F0aW9uUGFyYSk7XG5cbiAgICAvL2dyZWV0aW5nIGNhcmRcblxuICAgIGNvbnN0IGdyZWV0aW5nQ2FyZCA9IG1ha2VEaXYoJ2NhcmQnKTtcbiAgICBjb25zdCBncmVldGluZ0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGdyZWV0aW5nSGVhZGluZy50ZXh0Q29udGVudCA9IFwiV2UgbG9vayBmb3J3YXJkIHRvIHNlZWluZyB5b3UhXCI7XG4gICAgZ3JlZXRpbmdDYXJkLmFwcGVuZENoaWxkKGdyZWV0aW5nSGVhZGluZyk7XG5cbiAgICAvL2FkZGluZyBlbGVtZW50cyB0byBtYWluIGNhcmRcblxuICAgIGNvbnN0IG1haW5DYXJkID0gbWFrZURpdignbWFpbi1jYXJkJyk7XG4gICAgbWFpbkNhcmQuYXBwZW5kQ2hpbGQoaGVhZGluZ0NvbnRhaW5lcik7XG4gICAgbWFpbkNhcmQuYXBwZW5kQ2hpbGQocXVvdGVDYXJkKTtcbiAgICBtYWluQ2FyZC5hcHBlbmRDaGlsZChob3VyQ2FyZCk7XG4gICAgbWFpbkNhcmQuYXBwZW5kQ2hpbGQobG9jYXRpb25DYXJkKTtcbiAgICBtYWluQ2FyZC5hcHBlbmRDaGlsZChncmVldGluZ0NhcmQpO1xuXG4gICAgcmV0dXJuIG1haW5DYXJkO1xufSIsImltcG9ydCBKZWxseSBmcm9tICcuL2ltZ3MvamVsbHkucG5nJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VEaXYoKXtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xuICAgIGFyZ3MuZm9yRWFjaChhcmcgPT57XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGFyZylcbiAgICB9KVxuXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQYXJhKCl7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xuICAgIGFyZ3MuZm9yRWFjaChhcmcgPT57XG4gICAgICAgIHBhcmEuY2xhc3NMaXN0LmFkZChhcmcpXG4gICAgfSlcblxuICAgIHJldHVybiBwYXJhO1xufVxuXG5mdW5jdGlvbiBtYWtlSmVsbHkoKXtcbiAgICBjb25zdCBqZWxseUVtb2ppID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgamVsbHlFbW9qaS5jbGFzc0xpc3QuYWRkKCdlbW9qaScpXG4gICAgamVsbHlFbW9qaS5zcmMgPSBKZWxseTtcbiAgICByZXR1cm4gamVsbHlFbW9qaTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDYXJkSGVhZGluZyhzdHIpe1xuICAgIGNvbnN0IGhlYWRpbmdDb250YWluZXIgPSBtYWtlRGl2KCdoZWFkaW5nLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBzdHI7XG5cbiAgICBjb25zdCBqZWxseUVtb2ppID0gbWFrZUplbGx5KCk7XG5cbiAgICBoZWFkaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGhlYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQoamVsbHlFbW9qaSk7XG5cbiAgICByZXR1cm4gaGVhZGluZ0NvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDYXJkU3ViSGVhZGluZyhzdHIpe1xuICAgIGNvbnN0IGhlYWRpbmdDb250YWluZXIgPSBtYWtlRGl2KCdzdWItaGVhZGluZy1jb250YWluZXInKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gc3RyO1xuXG4gICAgY29uc3QgamVsbHlFbW9qaSA9IG1ha2VKZWxseSgpO1xuXG4gICAgaGVhZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBoZWFkaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGplbGx5RW1vamkpO1xuXG4gICAgcmV0dXJuIGhlYWRpbmdDb250YWluZXI7XG59IiwiaW1wb3J0IHttYWtlRGl2LCBtYWtlUGFyYSwgbWFrZUNhcmRIZWFkaW5nLCBtYWtlQ2FyZFN1YkhlYWRpbmd9IGZyb20gJy4vbWFrZUVsZW1lbnQnO1xuXG5jbGFzcyBtZW51SXRlbXtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaWNlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIH1cblxuICAgIG1ha2VDYXJkKCl7XG4gICAgICAgIGNvbnN0IG1lbnVDYXJkID0gbWFrZURpdignY2FyZCcpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG4gICAgXG4gICAgICAgIGNvbnN0IG1lbnVEZXNjcmlwdGlvbiA9IG1ha2VQYXJhKCdtZW51LWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIG1lbnVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgXG4gICAgICAgIGNvbnN0IG1lbnVQcmljZSA9IG1ha2VQYXJhKCdwcmljZScpO1xuICAgICAgICBtZW51UHJpY2UudGV4dENvbnRlbnQgPSB0aGlzLnByaWNlO1xuICAgIFxuICAgICAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICAgICAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChtZW51RGVzY3JpcHRpb24pO1xuICAgICAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChtZW51UHJpY2UpO1xuICAgIFxuICAgICAgICByZXR1cm4gbWVudUNhcmQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51Q2FyZENvbXBvbmVudCgpe1xuXG4gICAgY29uc3QgaGVhZGluZ0NvbnRhaW5lciA9IG1ha2VDYXJkSGVhZGluZyhcIk1lbnVcIik7XG5cblxuICAgIGNvbnN0IGJldmVyYWdlc0hlYWRpbmcgPSBtYWtlQ2FyZFN1YkhlYWRpbmcoXCJCZXZzXCIpOyAgIFxuXG4gICAgY29uc3QgamVsbHlNYXJnaGVyaXRhID0gbmV3IG1lbnVJdGVtKFxuICAgICAgICBcIkplbGx5IE1hcmdoZXJpdGFcIixcblxuICAgICAgICBgQSBjb2xkLCBjb21wbGV4IGRyaW5rIFxuICAgICAgICBtYWRlIHdpdGggdGhlIGhpZ2hlc3QgcXVhbGl0eSBqZWxseSBcbiAgICAgICAgYW5kIGEgYml0IG9mIGxpbWUgdG8gc3RhcnQgeW91ciBcbiAgICAgICAgbmlnaHQgb2ZmIHJpZ2h0IWAsXG5cbiAgICAgICAgXCJQcmljZTogJDhcIlxuICAgICk7XG5cbiAgICBjb25zdCBnaW5Ub25pYyA9IG5ldyBtZW51SXRlbShcbiAgICAgICAgXCJHaW4gJiBUb25pY1wiLFxuXG4gICAgICAgIGBBIHRhbnRhbGl6aW5nLCBhbG1vc3QgZXhvdGljLCBkcmluayB0aGF0IGlzXG4gICAgICAgIGEgZGVlcCBzZWEgdHdpc3Qgb24gYSBjbGFzc2ljLiBcbiAgICAgICAgSW5mdXNlZCB3aXRoIHRoZSBmbGF2b3JzIG9mIHNldmVyYWwga2luZHMgb2YgXG4gICAgICAgIGplbGx5IGZpc2ggamVsbHkuYCxcblxuICAgICAgICBcIlByaWNlOiAkMTJcIlxuICAgICk7XG5cblxuICAgIGNvbnN0IHNpZGVzSGVhZGluZyA9IG1ha2VDYXJkU3ViSGVhZGluZyhcIlNpZGVzXCIpO1xuXG4gICAgY29uc3QgdG9hc3RKZWxseSA9IG5ldyBtZW51SXRlbShcbiAgICAgICAgXCJUb2FzdCAmIEplbGx5XCIsXG5cbiAgICAgICAgYEEgc2xpY2Ugb2YgdG9hc3QsIHlvdXIgY2hvaWNlIG9mIGJyZWFkLCBcbiAgICAgICAgYW5kIG91ciBob21lbWFkZSBqZWxseWZpc2ggamVsbHkuYCxcblxuICAgICAgICBcIlByaWNlOiAkMlwiXG4gICAgKTtcblxuICAgIGNvbnN0IHBvdXRpbmUgPSBuZXcgbWVudUl0ZW0oXG4gICAgICAgIFwiUG91dGluZVwiLFxuXG4gICAgICAgIGBUaGUgY3Jpc3BpZXN0IGZyaWVzIHlvdSd2ZSBldmVyIGhhZFxuICAgICAgICB0aGUgcGxlYXN1cmUgb2YgZWF0aW5nLCB0b3BwZWQgd2l0aCBvdXJcbiAgICAgICAgZ3JhdnksIG1hZGUgZnJlc2ggaW4gaG91c2UgZXZlcnlkYXkuYCxcblxuICAgICAgICBcIlByaWNlOiAkNlwiXG4gICAgKTtcblxuXG4gICAgY29uc3QgbWFpbkRpc2hIZWFkaW5nID0gbWFrZUNhcmRTdWJIZWFkaW5nKFwiTWFpbnNcIik7XG5cbiAgICBjb25zdCBrcmFiYnlQYXR0eSA9IG5ldyBtZW51SXRlbShcbiAgICAgICAgXCJLcmFiYnkgUGF0dHlcIixcblxuICAgICAgICBgWW91IGtub3cgd2hhdCB0aGlzIGlzLmAsXG5cbiAgICAgICAgXCJQcmljZTogJDEyXCJcbiAgICApO1xuXG4gICAgY29uc3QgamVsbHlCdXJnZXIgPSBuZXcgbWVudUl0ZW0oXG4gICAgICAgIFwiSmVsbHkgQnVyZ2VyXCIsXG5cbiAgICAgICAgYE91ciBvY2VhbiBmYW1vdXMgS3JhYmJ5IFBhdHR5IHdpdGhcbiAgICAgICAgamVsbHlmaXNoIGplbGx5LiAoVGhlIGNoZWYncyBmYXZvdXJpdGUhKWAsXG5cbiAgICAgICAgXCJQcmljZTogJDE1XCJcbiAgICApO1xuXG5cblxuICAgIGNvbnN0IG1haW5DYXJkID0gbWFrZURpdignbWFpbi1jYXJkJyk7XG4gICAgbWFpbkNhcmQuYXBwZW5kQ2hpbGQoaGVhZGluZ0NvbnRhaW5lcik7XG5cbiAgICBtYWluQ2FyZC5hcHBlbmRDaGlsZChiZXZlcmFnZXNIZWFkaW5nKTtcbiAgICBtYWluQ2FyZC5hcHBlbmRDaGlsZChqZWxseU1hcmdoZXJpdGEubWFrZUNhcmQoKSk7XG4gICAgbWFpbkNhcmQuYXBwZW5kQ2hpbGQoZ2luVG9uaWMubWFrZUNhcmQoKSk7XG5cbiAgICBtYWluQ2FyZC5hcHBlbmRDaGlsZChzaWRlc0hlYWRpbmcpO1xuICAgIG1haW5DYXJkLmFwcGVuZENoaWxkKHRvYXN0SmVsbHkubWFrZUNhcmQoKSk7XG4gICAgbWFpbkNhcmQuYXBwZW5kQ2hpbGQocG91dGluZS5tYWtlQ2FyZCgpKTtcblxuICAgIG1haW5DYXJkLmFwcGVuZENoaWxkKG1haW5EaXNoSGVhZGluZyk7XG4gICAgbWFpbkNhcmQuYXBwZW5kQ2hpbGQoa3JhYmJ5UGF0dHkubWFrZUNhcmQoKSk7XG4gICAgbWFpbkNhcmQuYXBwZW5kQ2hpbGQoamVsbHlCdXJnZXIubWFrZUNhcmQoKSk7XG4gICAgcmV0dXJuIG1haW5DYXJkO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBoZWFkZXJDb21wIGZyb20gXCIuL2hlYWRlci5qc1wiO1xuaW1wb3J0IGhvbWVDYXJkQ29tcG9uZW50IGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBtZW51Q2FyZENvbXBvbmVudCBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgY29udGFjdENhcmRDb21wb25lbnQgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7IFxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuLy9FYWNoIHBhcmFtZXRlciBjcmVhdGVzIGEgYnV0dG9uIHdpdGggdGhlIHRleHQgY29udGVudCB5b3UgZW50ZXJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyQ29tcChcIkhvbWVcIiwgXCJNZW51XCIsIFwiQ29udGFjdFwiKSk7XG5cbi8vZGVmYXVsdCBwYWdlIGxvYWRlZFxuY29udGVudC5hcHBlbmRDaGlsZChob21lQ2FyZENvbXBvbmVudCgpKTtcblxuLy9idXR0b24gZXZlbnQgbGlzdGVuZXJzXG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2Utc2VsZWN0b3InKTtcblxuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PntcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgY29uc3QgbWFpbkNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY2FyZFwiKTtcbiAgICAgICAgbWFpbkNhcmQucmVtb3ZlKCk7XG5cbiAgICAgICAgc3dpdGNoKGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2lkJykpe1xuICAgICAgICAgICAgY2FzZSBcIkhvbWVcIjogXG4gICAgICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChob21lQ2FyZENvbXBvbmVudCgpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJNZW51XCI6XG4gICAgICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Q2FyZENvbXBvbmVudCgpKTtcbiAgICAgICAgICAgICAgICBicmVhazsgIFxuICAgICAgICAgICAgY2FzZSBcIkNvbnRhY3RcIjpcbiAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RDYXJkQ29tcG9uZW50KCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=