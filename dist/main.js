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
}

function makeMenuCard(menuItem){
    const menuCard = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeDiv)('card');

    const menuTitle = document.createElement('h3');
    menuTitle.textContent = menuItem.title;

    const menuDescription = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makePara)('menu-description');
    menuDescription.textContent = menuItem.description;

    const menuPrice = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__.makePara)('price');
    menuPrice.textContent = menuItem.price;

    menuCard.appendChild(menuTitle);
    menuCard.appendChild(menuDescription);
    menuCard.appendChild(menuPrice);

    return menuCard;
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
    mainCard.appendChild(makeMenuCard(jellyMargherita));
    mainCard.appendChild(makeMenuCard(ginTonic));

    mainCard.appendChild(sidesHeading);
    mainCard.appendChild(makeMenuCard(toastJelly));
    mainCard.appendChild(makeMenuCard(poutine));

    mainCard.appendChild(mainDishHeading);
    mainCard.appendChild(makeMenuCard(krabbyPatty));
    mainCard.appendChild(makeMenuCard(jellyBurger));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFDO0FBQ0s7QUFDQTtBQUNNO0FBQzNCOztBQUVyQjs7QUFFQTtBQUNBLG9CQUFvQixzREFBVTs7QUFFOUI7QUFDQSxvQkFBb0Isb0RBQWlCOztBQUVyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0Msb0RBQWlCO0FBQ3JEO0FBQ0E7QUFDQSxvQ0FBb0Msb0RBQWlCO0FBQ3JEO0FBQ0E7QUFDQSxvQ0FBb0MsdURBQW9CO0FBQ3hEO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21ha2VFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvYmFja2dyb3VuZC1pbWFnZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLW1haW5jb21wb25lbnQ6ICMxODRlNzc7XFxuICAgIC0tY2FyZHdpZHRoOiBtYXgoNDUwcHgsIDQ1dncpO1xcbiAgICAtLWNhcmRjb250ZW50d2lkdGg6IG1heCg0MTVweCwgNjAlKTtcXG4gICAgLS1hY2NlbnRjb2xvcjogI2E4ZGFkYztcXG4gICAgLS1yYWRpdXM6IDI1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbip7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHl7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qaGVhZGVyICsgY29tcG9uZW50cyBzdHlsaW5nICovXFxuaGVhZGVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbmNvbXBvbmVudCk7XFxuICAgIHBhZGRpbmctdG9wOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6MjRweDtcXG59XFxuXFxuLnBhZ2Utc2VsZWN0b3J7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmYTNjYTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnBhZ2Utc2VsZWN0b3I6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnBhZ2Utc2VsZWN0b3I6YWN0aXZle1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxufVxcblxcblxcbi8qYm9keSBzdHlsaW5nKi9cXG5cXG4ubWFpbi1jYXJke1xcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluY29tcG9uZW50KTtcXG4gICAgd2lkdGg6IHZhcigtLWNhcmR3aWR0aCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxufVxcblxcbi5tYWluLWNhcmQ+KntcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuXFxuLmhlYWRpbmctY29udGFpbmVyLFxcbi5zdWItaGVhZGluZy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudGNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcXG59XFxuXFxuLmhlYWRpbmctY29udGFpbmVye1xcbiAgICB3aWR0aDogdmFyKC0tY2FyZGNvbnRlbnR3aWR0aCk7XFxufVxcblxcbi5zdWItaGVhZGluZy1jb250YWluZXJ7XFxuICAgIHdpZHRoOiBjYWxjKHZhcigtLWNhcmRjb250ZW50d2lkdGgpLzIpO1xcbn1cXG5cXG4uaGVhZGluZy1jb250YWluZXI+aDF7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cXG5cXG4uZW1vaml7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5jYXJke1xcbiAgICB3aWR0aDogdmFyKC0tY2FyZGNvbnRlbnR3aWR0aCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudGNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYXV0aG9yLFxcbi5wcmljZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSx3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLG1DQUFtQztJQUNuQyxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixtREFBOEM7O0lBRTlDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBLCtCQUErQjtBQUMvQjtJQUNJLFdBQVc7SUFDWCxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7O0lBRWxCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOzs7QUFHQSxlQUFlOztBQUVmO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNDQUFzQztJQUN0Qyx1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdHtcXG4gICAgLS1tYWluY29tcG9uZW50OiAjMTg0ZTc3O1xcbiAgICAtLWNhcmR3aWR0aDogbWF4KDQ1MHB4LCA0NXZ3KTtcXG4gICAgLS1jYXJkY29udGVudHdpZHRoOiBtYXgoNDE1cHgsIDYwJSk7XFxuICAgIC0tYWNjZW50Y29sb3I6ICNhOGRhZGM7XFxuICAgIC0tcmFkaXVzOiAyNXB4O1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5e1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWdzL2JhY2tncm91bmQtaW1hZ2UuanBnJyk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbntcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKmhlYWRlciArIGNvbXBvbmVudHMgc3R5bGluZyAqL1xcbmhlYWRlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5jb21wb25lbnQpO1xcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOjI0cHg7XFxufVxcblxcbi5wYWdlLXNlbGVjdG9ye1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmEzY2E7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5wYWdlLXNlbGVjdG9yOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wYWdlLXNlbGVjdG9yOmFjdGl2ZXtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbn1cXG5cXG5cXG4vKmJvZHkgc3R5bGluZyovXFxuXFxuLm1haW4tY2FyZHtcXG4gICAgbWFyZ2luLXRvcDogNDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbmNvbXBvbmVudCk7XFxuICAgIHdpZHRoOiB2YXIoLS1jYXJkd2lkdGgpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyNHB4O1xcbn1cXG5cXG4ubWFpbi1jYXJkPip7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcblxcbi5oZWFkaW5nLWNvbnRhaW5lcixcXG4uc3ViLWhlYWRpbmctY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnRjb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxufVxcblxcbi5oZWFkaW5nLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IHZhcigtLWNhcmRjb250ZW50d2lkdGgpO1xcbn1cXG5cXG4uc3ViLWhlYWRpbmctY29udGFpbmVye1xcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1jYXJkY29udGVudHdpZHRoKS8yKTtcXG59XFxuXFxuLmhlYWRpbmctY29udGFpbmVyPmgxe1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG59XFxuXFxuLmVtb2ppe1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uY2FyZHtcXG4gICAgd2lkdGg6IHZhcigtLWNhcmRjb250ZW50d2lkdGgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnRjb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmF1dGhvcixcXG4ucHJpY2V7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHttYWtlRGl2LCBtYWtlUGFyYSwgbWFrZUNhcmRIZWFkaW5nfSBmcm9tICcuL21ha2VFbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdENhcmRDb21wb25lbnQoKXtcblxuICAgIGNvbnN0IGhlYWRpbmdDb250YWluZXIgPSBtYWtlQ2FyZEhlYWRpbmcoXCJDb250YWN0IFVzXCIpO1xuXG5cbiAgICBjb25zdCBtYWluQ2FyZCA9IG1ha2VEaXYoJ21haW4tY2FyZCcpO1xuICAgIG1haW5DYXJkLmFwcGVuZENoaWxkKGhlYWRpbmdDb250YWluZXIpO1xuICAgIHJldHVybiBtYWluQ2FyZDtcbn0iLCJcbmZ1bmN0aW9uIG1ha2VCdXR0b24oc3RyKXtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBzdHI7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BhZ2Utc2VsZWN0b3InKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIHN0cik7XG5cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXJDb21wKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgICBsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcblxuICAgIGFyZ3MuZm9yRWFjaChhcmcgPT57XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGxldCBzdHIgPSBhcmcudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IG1ha2VCdXR0b24oc3RyKTtcbiAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gbWFrZUJ1dHRvbihcIkVSUk9SXCIpO1xuICAgICAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59IiwiXG5pbXBvcnQge21ha2VEaXYsIG1ha2VQYXJhLCBtYWtlQ2FyZEhlYWRpbmd9IGZyb20gJy4vbWFrZUVsZW1lbnQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVDYXJkQ29tcG9uZW50KCl7XG5cbiAgICAvL2hlYWRpbmdcbiAgICBcbiAgICBjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gbWFrZUNhcmRIZWFkaW5nKFwiRGFuY2luZyBKZWxseSdzIEplbGx5IEJhclwiKTtcblxuICAgIC8vY2FyZCBxdW90ZVxuXG4gICAgY29uc3QgcXVvdGUgPSBtYWtlUGFyYSgncXVvdGUnKTtcbiAgICBxdW90ZS50ZXh0Q29udGVudCA9IGBXZSBsb3ZlIERhbmNpbmcgSmVsbHkncyBpbiBvdXIgZmFtaWx5LFxuICAgIGl0IGlzIHRoZSBmaW5lc3QgSmVsbHkgZXN0YWJsaXNobWVudCBpbiBhbGwgb2YgdGhlIGNvYXN0IVxuICAgIEkgaGlnaGx5IHJlY29tbWVuZCB0cnlpbmcgYSBqZWxseSBtYXJnaGVyaXRhLCBpdCdsbCBibG93XG4gICAgeW91ciB0ZW50YWNsZXMgb2ZmIWA7XG5cbiAgICBjb25zdCBhdXRob3IgPSBtYWtlUGFyYSgnYXV0aG9yJyk7XG4gICAgYXV0aG9yLnRleHRDb250ZW50ID0gXCItIFNxdWlkd2FyZCBUZW50YWNsZXNcIjtcblxuICAgIGNvbnN0IHF1b3RlQ2FyZCA9IG1ha2VEaXYoJ2NhcmQnKTtcbiAgICBxdW90ZUNhcmQuYXBwZW5kQ2hpbGQocXVvdGUpO1xuICAgIHF1b3RlQ2FyZC5hcHBlbmRDaGlsZChhdXRob3IpO1xuXG4gICAgLy9jYXJkIGhvdXJzXG5cbiAgICBjb25zdCB3ZWVrID0gW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdXG4gICAgY29uc3QgaG91ckNhcmQgPSBtYWtlRGl2KCdjYXJkJyk7XG4gICAgY29uc3QgaG91ckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhvdXJIZWFkaW5nLnRleHRDb250ZW50ID0gXCJIb3Vyc1wiO1xuICAgIGhvdXJDYXJkLmFwcGVuZENoaWxkKGhvdXJIZWFkaW5nKTtcblxuICAgIHdlZWsuZm9yRWFjaChkYXkgPT57XG4gICAgICAgIGNvbnN0IHBhcmEgPSBtYWtlUGFyYSgnZGF5Jyk7XG5cbiAgICAgICAgaWYoZGF5ID09IFwiU3VuZGF5XCIpe1xuICAgICAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IGAke2RheX06IDhhbSAtIDhwbWA7XG4gICAgICAgIH0gZWxzZSBpZihkYXkgPT0gXCJUaHVyc2RheVwiIHx8IGRheSA9PSBcIkZyaWRheVwiKXtcbiAgICAgICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBgJHtkYXl9OiA2YW0gLSAxMHBtYDtcbiAgICAgICAgfSBlbHNlIGlmKGRheSA9PSBcIlNhdHVyZGF5XCIpe1xuICAgICAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IGAke2RheX06IDhhbSAtIDEwcG1gO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gYCR7ZGF5fTogNmFtIC0gNnBtYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhvdXJDYXJkLmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIH0pXG4gICAgXG4gICAgLy9sb2NhdGlvbiBpbmZvXG5cbiAgICBjb25zdCBsb2NhdGlvbkNhcmQgPSBtYWtlRGl2KCdjYXJkJyk7XG4gICAgY29uc3QgbG9jYXRpb25IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBsb2NhdGlvbkhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCJcbiAgICBjb25zdCBsb2NhdGlvblBhcmEgPSBtYWtlUGFyYSgnbG9jYXRpb24nKTtcbiAgICBsb2NhdGlvblBhcmEudGV4dENvbnRlbnQgPSBcIjEwMSBCaWtpbmkgQm90dG9tIExhbmVcIjtcblxuICAgIGxvY2F0aW9uQ2FyZC5hcHBlbmRDaGlsZChsb2NhdGlvbkhlYWRpbmcpO1xuICAgIGxvY2F0aW9uQ2FyZC5hcHBlbmRDaGlsZChsb2NhdGlvblBhcmEpO1xuXG4gICAgLy9ncmVldGluZyBjYXJkXG5cbiAgICBjb25zdCBncmVldGluZ0NhcmQgPSBtYWtlRGl2KCdjYXJkJyk7XG4gICAgY29uc3QgZ3JlZXRpbmdIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBncmVldGluZ0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIldlIGxvb2sgZm9yd2FyZCB0byBzZWVpbmcgeW91IVwiO1xuICAgIGdyZWV0aW5nQ2FyZC5hcHBlbmRDaGlsZChncmVldGluZ0hlYWRpbmcpO1xuXG4gICAgLy9hZGRpbmcgZWxlbWVudHMgdG8gbWFpbiBjYXJkXG5cbiAgICBjb25zdCBtYWluQ2FyZCA9IG1ha2VEaXYoJ21haW4tY2FyZCcpO1xuICAgIG1haW5DYXJkLmFwcGVuZENoaWxkKGhlYWRpbmdDb250YWluZXIpO1xuICAgIG1haW5DYXJkLmFwcGVuZENoaWxkKHF1b3RlQ2FyZCk7XG4gICAgbWFpbkNhcmQuYXBwZW5kQ2hpbGQoaG91ckNhcmQpO1xuICAgIG1haW5DYXJkLmFwcGVuZENoaWxkKGxvY2F0aW9uQ2FyZCk7XG4gICAgbWFpbkNhcmQuYXBwZW5kQ2hpbGQoZ3JlZXRpbmdDYXJkKTtcblxuICAgIHJldHVybiBtYWluQ2FyZDtcbn0iLCJpbXBvcnQgSmVsbHkgZnJvbSAnLi9pbWdzL2plbGx5LnBuZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRGl2KCl7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcbiAgICBhcmdzLmZvckVhY2goYXJnID0+e1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChhcmcpXG4gICAgfSlcblxuICAgIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUGFyYSgpe1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcbiAgICBhcmdzLmZvckVhY2goYXJnID0+e1xuICAgICAgICBwYXJhLmNsYXNzTGlzdC5hZGQoYXJnKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcGFyYTtcbn1cblxuZnVuY3Rpb24gbWFrZUplbGx5KCl7XG4gICAgY29uc3QgamVsbHlFbW9qaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGplbGx5RW1vamkuY2xhc3NMaXN0LmFkZCgnZW1vamknKVxuICAgIGplbGx5RW1vamkuc3JjID0gSmVsbHk7XG4gICAgcmV0dXJuIGplbGx5RW1vamk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ2FyZEhlYWRpbmcoc3RyKXtcbiAgICBjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gbWFrZURpdignaGVhZGluZy1jb250YWluZXInKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gc3RyO1xuXG4gICAgY29uc3QgamVsbHlFbW9qaSA9IG1ha2VKZWxseSgpO1xuXG4gICAgaGVhZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBoZWFkaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGplbGx5RW1vamkpO1xuXG4gICAgcmV0dXJuIGhlYWRpbmdDb250YWluZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ2FyZFN1YkhlYWRpbmcoc3RyKXtcbiAgICBjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gbWFrZURpdignc3ViLWhlYWRpbmctY29udGFpbmVyJyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IHN0cjtcblxuICAgIGNvbnN0IGplbGx5RW1vamkgPSBtYWtlSmVsbHkoKTtcblxuICAgIGhlYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgaGVhZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChqZWxseUVtb2ppKTtcblxuICAgIHJldHVybiBoZWFkaW5nQ29udGFpbmVyO1xufSIsImltcG9ydCB7bWFrZURpdiwgbWFrZVBhcmEsIG1ha2VDYXJkSGVhZGluZywgbWFrZUNhcmRTdWJIZWFkaW5nfSBmcm9tICcuL21ha2VFbGVtZW50JztcblxuY2xhc3MgbWVudUl0ZW17XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VNZW51Q2FyZChtZW51SXRlbSl7XG4gICAgY29uc3QgbWVudUNhcmQgPSBtYWtlRGl2KCdjYXJkJyk7XG5cbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IG1lbnVJdGVtLnRpdGxlO1xuXG4gICAgY29uc3QgbWVudURlc2NyaXB0aW9uID0gbWFrZVBhcmEoJ21lbnUtZGVzY3JpcHRpb24nKTtcbiAgICBtZW51RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBtZW51SXRlbS5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IG1lbnVQcmljZSA9IG1ha2VQYXJhKCdwcmljZScpO1xuICAgIG1lbnVQcmljZS50ZXh0Q29udGVudCA9IG1lbnVJdGVtLnByaWNlO1xuXG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChtZW51RGVzY3JpcHRpb24pO1xuICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKG1lbnVQcmljZSk7XG5cbiAgICByZXR1cm4gbWVudUNhcmQ7XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51Q2FyZENvbXBvbmVudCgpe1xuXG4gICAgY29uc3QgaGVhZGluZ0NvbnRhaW5lciA9IG1ha2VDYXJkSGVhZGluZyhcIk1lbnVcIik7XG5cblxuICAgIGNvbnN0IGJldmVyYWdlc0hlYWRpbmcgPSBtYWtlQ2FyZFN1YkhlYWRpbmcoXCJCZXZzXCIpOyAgIFxuXG4gICAgY29uc3QgamVsbHlNYXJnaGVyaXRhID0gbmV3IG1lbnVJdGVtKFxuICAgICAgICBcIkplbGx5IE1hcmdoZXJpdGFcIixcblxuICAgICAgICBgQSBjb2xkLCBjb21wbGV4IGRyaW5rIFxuICAgICAgICBtYWRlIHdpdGggdGhlIGhpZ2hlc3QgcXVhbGl0eSBqZWxseSBcbiAgICAgICAgYW5kIGEgYml0IG9mIGxpbWUgdG8gc3RhcnQgeW91ciBcbiAgICAgICAgbmlnaHQgb2ZmIHJpZ2h0IWAsXG5cbiAgICAgICAgXCJQcmljZTogJDhcIlxuICAgICk7XG5cbiAgICBjb25zdCBnaW5Ub25pYyA9IG5ldyBtZW51SXRlbShcbiAgICAgICAgXCJHaW4gJiBUb25pY1wiLFxuXG4gICAgICAgIGBBIHRhbnRhbGl6aW5nLCBhbG1vc3QgZXhvdGljLCBkcmluayB0aGF0IGlzXG4gICAgICAgIGEgZGVlcCBzZWEgdHdpc3Qgb24gYSBjbGFzc2ljLiBcbiAgICAgICAgSW5mdXNlZCB3aXRoIHRoZSBmbGF2b3JzIG9mIHNldmVyYWwga2luZHMgb2YgXG4gICAgICAgIGplbGx5IGZpc2ggamVsbHkuYCxcblxuICAgICAgICBcIlByaWNlOiAkMTJcIlxuICAgICk7XG5cblxuICAgIGNvbnN0IHNpZGVzSGVhZGluZyA9IG1ha2VDYXJkU3ViSGVhZGluZyhcIlNpZGVzXCIpO1xuXG4gICAgY29uc3QgdG9hc3RKZWxseSA9IG5ldyBtZW51SXRlbShcbiAgICAgICAgXCJUb2FzdCAmIEplbGx5XCIsXG5cbiAgICAgICAgYEEgc2xpY2Ugb2YgdG9hc3QsIHlvdXIgY2hvaWNlIG9mIGJyZWFkLCBcbiAgICAgICAgYW5kIG91ciBob21lbWFkZSBqZWxseWZpc2ggamVsbHkuYCxcblxuICAgICAgICBcIlByaWNlOiAkMlwiXG4gICAgKTtcblxuICAgIGNvbnN0IHBvdXRpbmUgPSBuZXcgbWVudUl0ZW0oXG4gICAgICAgIFwiUG91dGluZVwiLFxuXG4gICAgICAgIGBUaGUgY3Jpc3BpZXN0IGZyaWVzIHlvdSd2ZSBldmVyIGhhZFxuICAgICAgICB0aGUgcGxlYXN1cmUgb2YgZWF0aW5nLCB0b3BwZWQgd2l0aCBvdXJcbiAgICAgICAgZ3JhdnksIG1hZGUgZnJlc2ggaW4gaG91c2UgZXZlcnlkYXkuYCxcblxuICAgICAgICBcIlByaWNlOiAkNlwiXG4gICAgKTtcblxuXG4gICAgY29uc3QgbWFpbkRpc2hIZWFkaW5nID0gbWFrZUNhcmRTdWJIZWFkaW5nKFwiTWFpbnNcIik7XG5cbiAgICBjb25zdCBrcmFiYnlQYXR0eSA9IG5ldyBtZW51SXRlbShcbiAgICAgICAgXCJLcmFiYnkgUGF0dHlcIixcblxuICAgICAgICBgWW91IGtub3cgd2hhdCB0aGlzIGlzLmAsXG5cbiAgICAgICAgXCJQcmljZTogJDEyXCJcbiAgICApO1xuXG4gICAgY29uc3QgamVsbHlCdXJnZXIgPSBuZXcgbWVudUl0ZW0oXG4gICAgICAgIFwiSmVsbHkgQnVyZ2VyXCIsXG5cbiAgICAgICAgYE91ciBvY2VhbiBmYW1vdXMgS3JhYmJ5IFBhdHR5IHdpdGhcbiAgICAgICAgamVsbHlmaXNoIGplbGx5LiAoVGhlIGNoZWYncyBmYXZvdXJpdGUhKWAsXG5cbiAgICAgICAgXCJQcmljZTogJDE1XCJcbiAgICApO1xuXG5cblxuICAgIGNvbnN0IG1haW5DYXJkID0gbWFrZURpdignbWFpbi1jYXJkJyk7XG4gICAgbWFpbkNhcmQuYXBwZW5kQ2hpbGQoaGVhZGluZ0NvbnRhaW5lcik7XG5cbiAgICBtYWluQ2FyZC5hcHBlbmRDaGlsZChiZXZlcmFnZXNIZWFkaW5nKTtcbiAgICBtYWluQ2FyZC5hcHBlbmRDaGlsZChtYWtlTWVudUNhcmQoamVsbHlNYXJnaGVyaXRhKSk7XG4gICAgbWFpbkNhcmQuYXBwZW5kQ2hpbGQobWFrZU1lbnVDYXJkKGdpblRvbmljKSk7XG5cbiAgICBtYWluQ2FyZC5hcHBlbmRDaGlsZChzaWRlc0hlYWRpbmcpO1xuICAgIG1haW5DYXJkLmFwcGVuZENoaWxkKG1ha2VNZW51Q2FyZCh0b2FzdEplbGx5KSk7XG4gICAgbWFpbkNhcmQuYXBwZW5kQ2hpbGQobWFrZU1lbnVDYXJkKHBvdXRpbmUpKTtcblxuICAgIG1haW5DYXJkLmFwcGVuZENoaWxkKG1haW5EaXNoSGVhZGluZyk7XG4gICAgbWFpbkNhcmQuYXBwZW5kQ2hpbGQobWFrZU1lbnVDYXJkKGtyYWJieVBhdHR5KSk7XG4gICAgbWFpbkNhcmQuYXBwZW5kQ2hpbGQobWFrZU1lbnVDYXJkKGplbGx5QnVyZ2VyKSk7XG4gICAgcmV0dXJuIG1haW5DYXJkO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBoZWFkZXJDb21wIGZyb20gXCIuL2hlYWRlci5qc1wiO1xuaW1wb3J0IGhvbWVDYXJkQ29tcG9uZW50IGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBtZW51Q2FyZENvbXBvbmVudCBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgY29udGFjdENhcmRDb21wb25lbnQgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7IFxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuLy9FYWNoIHBhcmFtZXRlciBjcmVhdGVzIGEgYnV0dG9uIHdpdGggdGhlIHRleHQgY29udGVudCB5b3UgZW50ZXJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyQ29tcChcIkhvbWVcIiwgXCJNZW51XCIsIFwiQ29udGFjdFwiKSk7XG5cbi8vZGVmYXVsdCBwYWdlIGxvYWRlZFxuY29udGVudC5hcHBlbmRDaGlsZChob21lQ2FyZENvbXBvbmVudCgpKTtcblxuLy9idXR0b24gZXZlbnQgbGlzdGVuZXJzXG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2Utc2VsZWN0b3InKTtcblxuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PntcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgY29uc3QgbWFpbkNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY2FyZFwiKTtcbiAgICAgICAgbWFpbkNhcmQucmVtb3ZlKCk7XG5cbiAgICAgICAgc3dpdGNoKGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2lkJykpe1xuICAgICAgICAgICAgY2FzZSBcIkhvbWVcIjogXG4gICAgICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChob21lQ2FyZENvbXBvbmVudCgpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJNZW51XCI6XG4gICAgICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Q2FyZENvbXBvbmVudCgpKTtcbiAgICAgICAgICAgICAgICBicmVhazsgIFxuICAgICAgICAgICAgY2FzZSBcIkNvbnRhY3RcIjpcbiAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RDYXJkQ29tcG9uZW50KCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=