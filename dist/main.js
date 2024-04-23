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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  height: 100vh;
}

nav{
    
    display: flex;
    justify-content: center;
    padding-top: 2em;
    gap: 3em;
    height: 10%;

}
.content{
   text-align: center;

   color: rgb(157, 16, 16);
 
}

.Btn{
  font-size: 2em;
  cursor: pointer;
}
.Btn:hover{
  
   color: rgb(176, 21, 4);
}





`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,aAAa;AACf;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,QAAQ;IACR,WAAW;;AAEf;AACA;GACG,kBAAkB;;GAElB,uBAAuB;;AAE1B;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;AACA;;GAEG,sBAAsB;AACzB","sourcesContent":["*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody{\n  height: 100vh;\n}\n\nnav{\n    \n    display: flex;\n    justify-content: center;\n    padding-top: 2em;\n    gap: 3em;\n    height: 10%;\n\n}\n.content{\n   text-align: center;\n\n   color: rgb(157, 16, 16);\n \n}\n\n.Btn{\n  font-size: 2em;\n  cursor: pointer;\n}\n.Btn:hover{\n  \n   color: rgb(176, 21, 4);\n}\n\n\n\n\n\n"],"sourceRoot":""}]);
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/createAboutPage.js":
/*!********************************!*\
  !*** ./src/createAboutPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAboutPage: () => (/* binding */ createAboutPage)
/* harmony export */ });
const content = document.querySelector(".content");
const h1=document.createElement("h1");
const img = document.createElement("img");
img.src = "data:image/png;base64,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";

h1.innerText="This is About Page";

function createAboutPage() {
    content.innerText = ""; // Clear the content before adding new elements
    content.appendChild(h1);
    content.appendChild(img);

}

/***/ }),

/***/ "./src/createHomePage.js":
/*!*******************************!*\
  !*** ./src/createHomePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomePage: () => (/* binding */ createHomePage)
/* harmony export */ });
const content = document.querySelector(".content");
const h1 = document.createElement("h1");
const img = document.createElement("img");
img.src = "https://plus.unsplash.com/premium_photo-1675344317686-118cc9f89f8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGhvbWVwYWdlfGVufDB8fDB8fHww"; // Set the src attribute correctly
h1.innerText = "This is Home Page";

function createHomePage() {
  content.innerText = ""; // Clear the content before adding new elements
  content.appendChild(h1);
  content.appendChild(img);
}


/***/ }),

/***/ "./src/createMenuPage.js":
/*!*******************************!*\
  !*** ./src/createMenuPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)
/* harmony export */ });
const content = document.querySelector(".content");
const h1=document.createElement("h1");

const img = document.createElement("img");
img.src = "https://images.unsplash.com/photo-1599250300435-b9693f21830d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnV8ZW58MHwwfDB8fHww";
h1.innerText="This is Menu Page";
function createMenuPage() {
    content.innerText = ""; // Clear the content before adding new elements
    content.appendChild(h1);
    content.appendChild(img);

}

/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadPage: () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _createHomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHomePage */ "./src/createHomePage.js");

function loadPage() {
    (0,_createHomePage__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();
    
}

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadPage */ "./src/loadPage.js");
/* harmony import */ var _createHomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createHomePage */ "./src/createHomePage.js");
/* harmony import */ var _createMenuPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createMenuPage */ "./src/createMenuPage.js");
/* harmony import */ var _createAboutPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createAboutPage */ "./src/createAboutPage.js");





(0,_loadPage__WEBPACK_IMPORTED_MODULE_1__.loadPage)();

const home=document.querySelector(".Home");
const menu=document.querySelector(".Menu");
const about=document.querySelector(".About");
about.addEventListener("click",_createAboutPage__WEBPACK_IMPORTED_MODULE_4__.createAboutPage);
menu.addEventListener("click",_createMenuPage__WEBPACK_IMPORTED_MODULE_3__.createMenuPage);
home.addEventListener("click",_createHomePage__WEBPACK_IMPORTED_MODULE_2__.createHomePage);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NyZWF0ZUFib3V0UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3JlYXRlSG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NyZWF0ZU1lbnVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJvZHl7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbm5hdntcbiAgICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyZW07XG4gICAgZ2FwOiAzZW07XG4gICAgaGVpZ2h0OiAxMCU7XG5cbn1cbi5jb250ZW50e1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICBjb2xvcjogcmdiKDE1NywgMTYsIDE2KTtcbiBcbn1cblxuLkJ0bntcbiAgZm9udC1zaXplOiAyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5CdG46aG92ZXJ7XG4gIFxuICAgY29sb3I6IHJnYigxNzYsIDIxLCA0KTtcbn1cblxuXG5cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixXQUFXOztBQUVmO0FBQ0E7R0FDRyxrQkFBa0I7O0dBRWxCLHVCQUF1Qjs7QUFFMUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBOztHQUVHLHNCQUFzQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHl7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5uYXZ7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDJlbTtcXG4gICAgZ2FwOiAzZW07XFxuICAgIGhlaWdodDogMTAlO1xcblxcbn1cXG4uY29udGVudHtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgY29sb3I6IHJnYigxNTcsIDE2LCAxNik7XFxuIFxcbn1cXG5cXG4uQnRue1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5CdG46aG92ZXJ7XFxuICBcXG4gICBjb2xvcjogcmdiKDE3NiwgMjEsIDQpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5jb25zdCBoMT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuaW1nLnNyYyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPRUFBQURoQ0FNQUFBQUpiU0pJQUFBQmdGQk1WRVgvLy84amphM0hFRllBTUZEL3J4bjUrZm50N2UzcTZ1cnc4UEQxOWZYbDVlWGk0dUw4L1B6MzkvZm82T2prNU9RQWhhai9yQURjM056RkFFN0ZBRXpFQUVnQWdxYkRBRVFBaDZuL3JRRC9xQUFBSzAwQUlFWUFGMEhDQUVFQUpVblg2TzcvOU9NQUVqK0d1Y3p0OWZnNWxyTmhwNzhBZktMQTJ1VC8rL1BmN1BILzdkUC93Vi85OWZnQUcwUEtJV0Y3dE1qLzVzTC96WUVBaTdNQUFEZkh6dFNRbktqejF0OUpuTGpmaTZXYXhOVFFTbmJYYW94cXE4SUFBQ2syVVdtbXNMa0FBRG9BQURMTU9tdi8xSmI2Ni9EbnFyMy8ySi8vdmxMVVhJS3N6dHYvNThYa29MWC96b1h0d003RzN1Y1dPMWx0Zm81TFlYYi90VFhjZjV6LzNyREFBRFAvd0ZuMjNlVkZYSEovalp1M3dNZGRjSUtocTdYL3RDL1pjNU83eDdoK21JYWdubkdjVllKdmxvOVBlSjJqUFhDeUxHV0hWWUgveDI5WWtwYStiSXFvQlUrem9HQkJrS0NYbkhaOElsUFVwVUZVS0ZKM1ZITVJXSGNxUWxUY2x3RFltaWFSYVJ0c1hrR0JhVDdDalM1Q01WWXFMVkdJQUVDN3RZNmFURnhoQUFBYjRFbEVRVlI0bk8xZGlVTWFiWHAvQnhpT09PZ2dNQXlIZ01BZ29nWmk1Qm9sbUNnZVJNRXpNZkZJZDdmYlhiZmQ3dEZ1dDl0dXQvOTZuL2VkZXhoMGxFUDNLNy92U3dMRDRmeDg3dmQ0WG9TbW1HS0tLYWFZWW9vcHBwaGlpaW4rRGtFWGk3bVh2b2N4SXAwVldKYmxxT3hQa2lSVEVPc3NUeEh3Yk9lbGIyZjBFSGxlcGtmQWxsLzZoa2FOUEVzWndZb3ZmVXVqUlphbnpPRFNMMzFUbzBUUkxFRU00YVh2YXBRb1l4R3lsS0JLa2p3dnZQUnRqUkNFV1JxQ0lSWmRVeER5SXI1U2YrbmJHaDNTb0tSc1duN0VpNGp1RUtseVA1Mm9XQUE2VGVsaGo0Tmd1TlJCTkZ6aWZ6cHFDanJKOStUSHhUeFZMOGpYZmpvQkE5aXdqT2xhamxQbCtoTkFoN2NJRGNKUGlXR1dwZXBwTVYvUFp6czV5RSt6OEVqczVTRmttQVg3OTRvY2w2MVRQSjhWeFRySFVpd253Q01LTzFYK3A1Si9GemlVNHlVMk9QL080d2RwRnZ4TU9mK3lOell5aUJSazNoUnhuQ0tYRXdpdEhpL2t5QXV2RnAvdnorOE9qbGRzdlZjRU55UG1lWWp2T1RhTENrc1FPQmloREJjNzdPTWZyalUyU3pzL3VrUGU3cE94ZkI2THVseXVRTXkxYitQZG1FZ25tMStxNXptY3FKWGhBVXVsZ1dIMjBlUzd2UmtKT2h5T1lIaG5iZmk3ZmdKV0FnR1hqSURyM2FOdlR5OFZVWTlGQlZHVWtwaWVtTzJBVUJHcVAxWUdkME9ZSDBib3h3anUyemFXb3k0ZFlxdkxqMzJBejRLOFRFbG90b2lLUzRQU3RyVnU5d3IrMllzNE5CeHU3VTBxdUN3ZkJQUU1YZEhBWTJJVWwzcFdsK3VEbExTUkRJZVNtM3RiWVljZXdWQjRNdVo0R1RBU3hHSmNmK1F6K2FWK2ZlenhiTkg2M1RJelZVTTFSSTZHdi85SHNSc3o4OFBXZUw3NDhLYzZTMzFzaFBvQXBldEcrcGhwRlBkR3dlRkJYR29FQXdGaWoxSHNibHlCeTRjL0o1akxYUXZPTXJiMHNqUExNWEkxQ2hZUFlGblQwT2o2NS9WQU5PWmFEd1QyRDJLdTJNRUtXbGtkK01IMGtyRlV5bkVEL2VpaHhpcFkrbUdtdURrNk1wYlkxZGxnNElCWnZQK00wTHNZTms1d09DREx3WjhVRFk0ejk4QTQxSTdLSnZ3RDRvV0o0Ymk5ellHVmc5bmR4elFKNXdjKzJ1UzBQTHRJOFlOSE1JalV3cHVIeEs5Y2hVME1nNGNqb2pJQStpQnhwK1pzdS9CbkhSdmo3a09maFl4R0NocTVMTWNPSnJnWGtwem0yaGZpVmN3eWRFVEdtdDBvc2Y1dU4yQ1dGN2JRMlBMeUE2R3hMZ2hMZkwyWkY1YTR2SFdnV0RzNk9qckVsTUlndmU0V3VkWm5pT0hheU9oWVFaSGZjcXpQcVh3TkJIWlhvb09sV09SRWhNdmdlcmxBSHZlam13d0ZnMEhGbmNoeG9XMVcwOUI0RGZGY3RrRFVuM0d2ZzN4amdjR1plRjJ2bVhWcGNOR0F0YkNsbUJvbWltTjJOZmVTbWxvWkhDRWZHMVJQcFFVOG9hYkcrQ0xiWDkvdnFTWVhORncvTkpwaWVMeFZ4cVVVTFdMOW9scVdVZ0hMVCtVNmRRNlB0dVZBT1lzb2pjazFLWmJLR28xUlk3aGovUGdQdlJTRFl5NHlaQjUzRmk5aEdjWXNIQTNRWTNrK2k2Y3BHSW90YzNrZVQxand2TWp6ckNDbXRUZTIxV3d0WkJKVFF5ZkY4TGlUbWxVc3hOaG5pMWRBZ1Myc3NKZVhKa1lGaXNJRkljWERmMkNRUFhVeVdCQnA1YjJIQTAxTlN3TEdIUTdseUg1dTlRcE9keTZQalJrNFdKOHkyNVNGSUUvemZKM1A0MEdwUElRTlpScEtIZm8rVWdKRHBHMzg2dHJFWWdYR25XdEFtcjJQUTM1TWZicjgrZDI3ZitEZXE3T0ZJTDVzZWdtUFFuVzRjbzZsQkVHYkRoWWtNVFlVaGtaUEExRkVaNGZqWTJZa1lsRXNZUmtHNUNpNXZIOGVpMEh0Y2ZjemxhSUF2aVVudVpZY0EvSXI2K1pLK1RyYU85cFRDVHBLeG0vV0IzMFQrYkVnQ3RGdzhhQ2Y0dGVBRWl3K2Z3VjZjbXJ3YzVWaW5lZVZjaUxOWVpucThZdElVRmZ3bWhoS1FWOTZlY3p4bm1BM2dIbjBqODFFbzY0b2lIQngxeFdMM1g5V3M5ZC81RFVoS2xQM29LQmw1Zkl2LzZua2NQeXFaSXpxcHErdUFjVmdRM1kzNHg5MFd3NUVyY3JBeTloOUxIQytDdlJjdTh1Nkl1VDh2ZXhQT0lHU0JvT1JpRTJRbFh6c3I4UDlZeFY5bmdidEJVRjRVbVVjbXNCQXhuSEFLdXhGRDlEaWZUUVdXSlZldTFjS3llaHZjTndyaTcyaVlkQWlsKzVrUVc5L3JRYnpVbEJMYWNLbXNRb0d2R3h3UzVMenVDTSt4bUxNSWlDdVNzNUhWZDVWbVdFZzl2TnlRVTVJR2RydncvRFRNbGttM2RpTVNNVEM3Ylc5a2lUUFNLT2tUMnFZaXhLOEorU1FTLzlKTU1RK0pYWnNNRVRtYTh3VVFBNGtlaTVwNEoveHVkL016TXpQcUppYm0zWDdTSXhZMjl2RXhFaTJDWW9ZRGtQbGRKVFVxU0xPMllLYlIxMVpteWVocFZMQUNKeTc3dllsajdwOEdUVVRSSGg4S25hL1F0ak56c3pyeUFFN2pEZjRqOGVMcGRsdUFESEpSNjUxdTVocUtha0ZkbXgrYTZpbW1HdlliS1Bqd0tWaVl5Q2orL1YxQ0gxZnpjRmpCYUloRWJOM2J0NUFUeVdvWUphUTNETW9KbW9IdFdIRHF4Q0lVRTIrSjZLa2x5REFRT3hPSmdsQjRySS9PTjdIc0VPbForZk4vSXdFWnduY2Z2akVuaUVkYXp1U201SlVyNDYwWUlnSDN5WXhzdjk1OVdCMWY5a2xqNVVDeVg2Q3kvZkF6emN6YjR2Z3JHZlc0K3Y3aWtZNG1TeHRsaUphTkFrR1E1SER5YzJMNDJnUU8xZ25jMno5RlFYY2gxL2laNGNnUVIvSHRXN0RFQ1NEaDQyOWNWZE9PdHpIWXJIelMzUWNBM1dOM3ZlL3pzek5QNDJneCtPbXpWOWlHQ3VkUkxwbXhDTFdsL3YxL1JWa2tlSzQ1NTlNRU9BMXFhQWgyNWs4UXhVck1mT2dEVDN6SElKdWdGLy9OVFhqRU5TNGgvTUhZOVZjU25ubm4wdlE3ZmJxdnNmRWNPeHpNb093WXA0OG5CdUNJRURUMURYakxOdUVwa2Y3Y1I0MVdBOHpQeHhCdDg3aEtBTlF3WEFrSEFvSEo3dFdRY1crTVYramh5WG85ZXFNVWE0bURtdHJWMUkyOXdKWWpuM1ZQL1VQVHhDZ2hzYWFwS2VUcDZYRHZjSE5qSWFnMTZ0S2tlaHBhQks1OWlDc3hJNTF6MFpGVUVkeDUyVWpJVlNCQWRmOXU4WGw1Y1hQeDR1anNFRVY0RzZJM2VFSjB0RDRWeWNNQkZUN3JtZ2dockUvdkJmMWVnMFVyMG8vTHJhSXAzbEJMVlZuOVFPUW1zNk1rcUFQTXJodWtrd212bFNVSURoUWwzOGg5R2FrQkFFSVhaQjRPUGFwbUlkd3JpeFpXQmtxVmJNazZQUExFekxCZjA2L0hFTjVVRFJ3ckRQQ1VSSDArY0FVU1R6OGw4eFpmNEU4RWVUZS96YXF6Q1krdTVvWVRCRHJLWW1ISldjcTRYNEpnZ3pGL3l0aEdQdXM2ZWdvQ1dJOUpUSjBPdU1uTDhHd3lWUHZmeGNsODAzTVdBajYvT0JQSVI3KzN1bDBKcjVQbm1BUHozMisvM25VQlhuYjdHTUVaMmVmUTlBUFF0d01PcHdZbVhuekRjeGMzOTVXQVBOOW94OVBRSzVZNkFDYTlYcXpZMTdFSkUxd3Z2L05IKzdWWkthUElEQ1RDTTVVWnA1RDBFOUQ4djFId2pEK3pmamp0MDgrYkRqakd3c0xDNW1OMXUzenpMUlhwbmlXNVFGTk1adm51S3poMVk0eU84WVZsVkRZVDNBK215VU1QZUpTd2ZNTWdsaUkveFozU2tLczZILzh0MCtuK1BsMmdyQlBaRTVudDI5T25LZFA0ZGVobEozbDBrSWZSdVFNSzBUVk9lcW1Jc0orRlowVk9hNHpTeGh5bU9HREJOTnBYejlCc01SS3h0a3Z4Rk9Kcjd1VkFLVGdkNURLSk9JSklIaWpId1o1Q0l4aDY3V2tvWWFWV3FvSTJiUnNoUlkyNkJIeVZOTURTaW94ZklpZ3I3QWsrdm9JMGpUWVdLdGZpRzgrWFVNbFU3bjUxUHBlclZaUFcyK2xkMkRtWnpZWjFuVmJyM2xSckZQNWJDZGRwclFWUHRvQ0JObVJXaEI4TTgrSlRSNjdHY3dRMkxqZEVqL0NDZlB6K2VRazFPdnZjUjNHMzArUVptUk5kTWJmcWhFRHhFcWowdy9mcnBWRTRCcFRqTGUyV3dubmhqMlRMQnQ2QStBcnZUTFBnYzBwSzdWVUVmSWRhV3pVeW91Q2tzNTN1STZITUt4VThrSzlneW02WjdLQzBPd0JSVjh6aXlrV21tbGZOcy9YeTgxK2dpQkVaZ01UVEp4c2Y5eVdmdmoyaHh1RWZEZXoydjNleXVZSTBsNm9JQnZBbXg4MUVjckxDeGk4T1ptVmRnem0xTjhBeTZDQlljSlRGend6Yk5PTkdiSmx0cHdWdUxMWDR5NndWRllVdUk3UDdXUHJ3TkFuTHZYOG1HR3phVUVRMVBRMEJVNnppbEIxZzBTTTZ3OTlzZkZNVm1UTHFHSUYwU0JDVlRXeDRIanNibklDMStRVlArTWZHQWNybk9oeDUxbnNRK0ViWjBCYWRWQldEeSs0eWNPMDE4ZExETG1lajJncGJVRVExTFN5RUhlUyt6NzllTTBnOTBhL3gzU3FET05PZXNZR1EvMUNFTjFlWGJ3am0rS2JhWkVIYmMwU1Y4UVhrR2NRd1ZtUm5mZTRpWnFDREVVdjZHZVBMUU9mQWlpb3Q4ZGxmVHFHUG1Eb3R5S0kxZlJ0aXhpYzcrUnNZNkhsdEVqZ05JWWJsYXFka0tFbnFPMFFMUElVV1Q3QnNzMDBQTTNqeDN3T3pRektaTndDSllwaWxzKzdaOTNZMDJBblE5WDlUZllOOXFGdVB1L3pXekUwRXdRMXJaSVJXVHAraW56VlZ1YTYvNFkxTGQyK3p0aElZUmtkUTkySytqcGY3eFVFU2wyRExoQlBTZzlNMWVaWkFZUGk1endLUXpjd3pQTWVFaVVvWU1qVy9XYUdmUVFaWmNENTVBYi9YVTFaM0hFMW9kb2hlTlBIc3pnZFEwRjdkNXJEdTNZWlRXK0xwSG1BZTlBVXRpZkxWVEFWRWRSVVp1aCt3elo5V1RCQXVGd0VoUVVaQWtPL3dwQzJKc2dnTHhiYmpSVHBXamNXZHp5ZmNXckkySWdYR2tOZE10cVJBcjV1VzNhV2gzRC9adDZhNEJ1UFFKRkViWWJOZTkwaVg4YlJBZGg2QzF3Wng3OHNtS05QWUhHaFcyY2xUMFA3TFFuQzd6VnppcjdMeXJkUXRicmpWbHpIME1ZMHNaS1I4Zm8xdkZtT1BDdndsTEplbTJZNWlCVURDTTVXdUxJYko5dmdOY0VPZVNvTDhaRVZ2RzVmbmhPOUlGa3dRV0RjTEthYkZOdnorNHBjdlZpMEpNaGcrVlUreWVuWXhxM1ZIVjlyUW95M0hpZUk4bW8wMTZISjQ5OE5qb1RxSXZTeVlEUkRmVDNveVM1VmlBemQ0cExvQmRVVWxqZ3U3OEVXV09hV2xpQXk0bVFHRXZxbFptK3A0UGZSY0pXaXJRakNqNzJ0YkNqK0pXNWRLR3BDWE5pMndiRGU1MlVRVmwzOGQ1SFRSY2hlRS9ubXJRbEN3VFNqbEVzUSsyZm4zTzVlSVUxU05hOXZ0bER3U1BtYVAxMG8rbjF1bkhMVDZVTGFraUNtK0UyMXZodHJFYzNJcWFrelpVZUVxR2toUWlTM0I4QWFyRnhpd05FTUltZ3FlQW0xaDhzbDJscUNtS0ZiUzJPMlA3Mnh2R2NzeEhncXNYRm1xeDZXY2hyVHhoMUpPWHNRRk5WQ01kMUJzL1lJMnE0SExRbENydDFxeVhaSVo2d2pPakJNblZXcnRySlNKUzgxTVN6emRacTBZZEgyMEZOcE5EY1Jnc2hadmYwbzMvenRKNHVRajc0bklLOTV3bG9ia2RXbDNESklTc1BySTBpV2c0eG1JZ1NocEwvMk9DVk5uWTFuK2dSVmdiSXBucGl6VHhBc2tWQ3M2M2NNTXJ5Y3hpa01SWlpYR1k2WklMckJCZjdweVN3V1lmemJKeWttVmlvNC81dXBmRCtCMUR5ZXNKTng2eUFuMWp4VXZvVmV1cGp1aVZLaGtjK3liRTk5QjRNbVF4QnRrNyt2UDFadlArQXk2bE44R3h6S2RTSjFFdi80YVFHUFlpeDhlL0t3dUx4VGdzOTNPbUs1emkyeFpQY0hDRFhOWXdNdGtsRUF4RXlHb0FMZm1TUysyZE1QRzNMOG9LK3hnbWEybjhvUG81Qm5lVFc2MDZDVFpTa085cmh5cml6VnlCTERDUkRjdnBZZTN5aUZnMzk3NDBhS0M1Vk01dVQydWV2NWNtS2RaVVZzZDB5SDFmb0JDWlRjQVZFZ0RDY2h3ZXBHL0dZYkRPMlRscFZXTmpJMzFlcXA4OE9OcmFwK01FUjJpUmVvSmYxb3FUWUVnQmxPUkVXclJCVVRaM28zNnI4OU96azVxdzdKRDZQWHlZb0ZmV3pzc1RxR2s3SEJha3JLcWpOMmgwT0hnelpRQmZuZ1pKek05NVJUR1JLZENOUWhEbHBpT0g0dmVpckwwTzU0NzdCUVJxb2c0azhvVE1nRE1hbEp6YkVwelVpaGpIcGprNkE4dXEyamg5a01yaVpNa011L3hQYUVHQ29qM253UHpkb2pXS3ZWSklMdVd1Mks4UFB2TlM0YVhkb2VRWFFpVjdjMlM0ZWhJZlZiWFRySmJDUDNuQzBKT2lJbFAyRjQ5U1hab0lGZ054aU9BRXJJRmtHZjdHZ1dKclpTSHhNOGlUc1RWZVNiczJPRHZwSmpSMllZRGdKRGZ6dmtjQngxRzZVR1k0Y2dtczFNMXRFUVF5US84UWJSYzNhY2pNTFFKek5rR3NGZ0c1TlpzMFVRVlJha1VUU3J5bkE4S0xML2prMGZyNUNZcytORlpZWStpU0hqWTdhQ084aW1rOEdRNTViK05ER0NJRVJwa0htRFJyTzIxb3NTaGo2TjRVVXcxTldiNE1NRXBYQVlYL2lQUjV1S2pRNXpHY1czZWUzRVFjTFFwekdrYXhGSGVLdUdHSHNFVVR3VlQ3MzkwNStqVm0wQXhnUjVHRDF4aStnM05nSzlpYUhmejNURHdXQmtwNFpzRVZ6K3o3Lzg1Yi8rMitVS1RKTGhndXJjN0dReS9sSndoOVl6OURQdEMwZklrZHhETmdpaWQzanBWVFFRR05oV1pBeDRJNCtpcDJqa3RwR3FxUXo5YlptaG4wYitJNkRZWmg0bmlQdkN4S0xySy90V1hRREdobzlxa3VHM2tZdjZkeHdPb3FWMFYyYUlSWWYyUWlFUTRxTUVrU3QyanJkUDd3WW0yYksycGFYQ2RwWTBid1hEVjVnaStoRWtEQ1hyYTRkRFIraHhnaXR5MThLdmx1MDR4Z1c1SkhXK1JjZzcreGhCbjM4djdOakV3anFLT0RCRCtvb0daaUREY0JjOVNoQzlrMStMUHRhN2NHVHdWbHNuc2d6am9LYk03R01Fb2JEQSsxc2JqWjNrMWc0d3BOR21vOUh0WG9RZzdqOU9VTUZpMzI3cWNhR3lrSWpIOFR3SS9EbE4zQ0RrZnJ3ZTlOZUNvV0E0bkR4RXBlUUZvdjFKbkhlSEl6dHQrd1RSNVdRY0RZTzhHVmw4MzA1VDhXK0pqQnZSTmdwZTJuMjBkWGhSWTVqdVhnM2NwNy9iK1BHalVYdUNCTUdqeGg1L3o3QjRjK3BNdEw0cGM1SHhUT0xtKytuYjc3SVFIeVNvVmJ6d0QvRXk1QXVmUWhEZFBkVFFielM0L3BpS0U5MlVHVzVMVnhFUjRtTUVuekJrWVkzbFI1dWtEZzIzZnNHREV4ZUhLcnpqSjRnWkxxK3ZIcHpmblIvYzc0OG51VkZIOUp4OVl5YU1aK3dFSVZpY0k3bXZEK1J2Z2ZYUnU1MWJweEViK3Rrc24yZnNCTkZ1YkVYWndVSWFWaHlNVnBCTWE4RklNR1ZjdVROK2dwQzhuU3NNQXhMSDFWSEs4UlJLM3RSQ0twR0lwMUo0dnM2Wk1vNnZNK01uaUJZRHdJcVFXNWUxMWFMMTMzUGgzUUJPVlRmeVZjOU92OSswTW0vZm1oZnUrTWRPRU8wSG9zY3JwTXgvcCt5WjYrL0ErVnhnTDZOYmJFUmZuM3d5RHo5N3gwMXdWUXNYSzJxNzVzRDVTRVkyWmx0a1dNYXcvTGI2d2J5RWJzd0UxN1cwZEZIWHJ6bGcxY0x4cWNCcmRQdEhuTGMvNmRmUWdVU1pzUkw4clBXbVdIWWh2Vk1kUHRWUk5qeVlGMjZlZnZKb1R6SzNlb3FqSjRqT05WbGR4dEN4cmlYMTBPN0dvNFFKOCtZcWVrRmJuVFMzVWNYWjJ5Z0pMaHNNYkZIWFFHMDl0dkpaMy9oKzJKcERXZlhYditUb2UwSjdtRXJoQ1doNmhCSTAydGQrVENOOEVOaEYrdGIzZ2VFUzFtdEZoQllya2RSRmROY2ZUNlEzMENNamVLNnJsVUNjNnpyQzJQUjBob2hiVUEvRFVCWGh0NzZYUEJ2VjZ1bHBkUTV0WjI3TzVNMGNqR0dINVBOVjlEd1FsUjh1cmtaamdmTnozUmdOU00xZ2lJLzI5SDhRNmdwcWk2VzNub1ZFSXBWS0xMUTI1Sm9LejV3d295Q1krMW5VSlROOEY0dWRIeDlEM0RNd2ZQZlpvS1lXYlp4c1Exc0ZuMnFaYjB3ZE5LMHE3OG5nQU9JZm1tQ2FldjlubWVGdUxIcTV2SHZuVWdoam5HTktoak0yaG9tSjM3UWw0Z256N04zMVc2Y1pDemR3Ky9TUUJEc3M5ZjYzVVdLSHg3RzdaZEs1UWQ5R2V4WHlVNk1oUm9jd3hCUDlJbmpUOU4xcHFvK2hNK1dzU0pyNmJJSU1YaGY1L25kUjdEN3VwZDR3ZUZPOGJpZ1JiRER3YnRkZ2lNOW5TT3NJbXFkZ2FVMkVKOW92Z3V6QkFqRStsMkNQSE9ENS91ZFJFTnBCVERJdzBwMVpjNWk0cWVIQnU4Qm9aT2pUaThrMFE2bVo2TUkyMDlMdFd2a3I3clpDUDR0Z3JpbXRSbnIvQnhEYW5acW9ZWlhVdXNMaHZEdDJhVERFWnhORVNLK0J4b0RoVVVXWXdHNzIrNGI2dnRMT2p6WnBWdnBrZ2gxQlBvdVYvd091L3RRMFpzVmdpUXllaWpxNDB4RWNKalhWYjBZeDdtUzRsUmttNU4xeUZmbWQvK1BZWEx0cXQzRkRFcnNUb0FiSTIxbWlobU9ramdONlg3TnFrTjlqeDJvOEFwMDNNVVhFYTBrdkU5dEtzZC85MngrZHpyLyt6Ukc4K0pFTWg0SVh1S3VNUERqNkJJSzBKTVQzLzJzY2hUa0hVbmQzNTErUEwxZDBCZkFvRWxNdElzUmI4OWZWbTdOdlo2ZFMraVl2eEhxck9kaEdoSnhPSVRkdFRqYWtxd3p6RklMS2Vpdnp5ZVRMc3JUd01OdnF2cEhoY1BXVFh4dUFPa204VGFYaThYaUtqTEp0eXk4a2RNTVpGMUxmYmRKNVBIUUJGOVFqNzJ3VFRNc3JPL3RPYVZuVUZiMW1FUTQzNk5ZZjlFZ0t2bTJaa0RjaXBFc3NGdVFtN3ZNRTJ2cTBuMVpVVnN6MUg4aTJhT0tsRVR5MitLSW53R3RPWE9JM1VBN2VxT21xY2NjbU9RcHVFMHR5RFhYYk82U0pWV1BMZHE4dTVjUUVzNDVLRkYyV0hJY2ZqTHJlNktQWXlpaUNqVytZRmlIWFFnNUh5ZUdJMUtSekFIQWpza1k0Y29GK05MbzFmVU1yeTkxSkhXWHhzZlZaVU12bi9SU2p3MHFRVUZ5SW15aVM1MUR6TG1UTyt2YXB0RXRCNmFnZjBuZ2wyS2l0WFFRZG9VMW1LeEpPL3A0UzZubUF3RGV0RGtQcWFKdmtCNXlWdEc0Kzh5MXdQNUpCWVcvTFlJdnhoWk9GaFlXTlU5OWN4V3JWOVZwSmJqV0tXNjBGUzIxMGdjMnloSHZwL0VwWmVadTErQnpLNlJwVkREclE2N05SVTRjcW0vVHd0VlF4eGhNYjN5cklXN0VrSjJGTk9XVURyM3VDZjdCWmh2WndSL1dRdGo3Y0FnVjlwNHFCaDdMdDZqeHBZSVJMRjdaQmJHL2ZMbVFTcmVyais2ZjJrbEtUdkIycHN6cHVZTGw1aEFOSjhCY3lnYktWRnFiMXpVWUdIN3Urdk91S0JVakw5QkZQS0xvcjE5ZlhNN2EyTDdibFlIOGgrZENRRWlKQmlMK1VSY1RtTzBVakI1cldHc0pRZmRzN2pWalpYVDA0WDkyZDVQb2hFNUtOR2w3aUxEM0J4MjlzS3NkWGhINnRVaUNuUDhpNzR3cE5pbVVwMnd4ZkhPMXdNQXo1V3poSWxMVnI3QVpNR2NFVmNFbkljZmxzRnA4QVpVTkxYeDdNVVFtM1R5ZTlqYkVkTmd3OXE0T1VHVWprS0ZsZ2FiWHZEMjkxTE5zclFkY1JDa1YyTGk0SW4yUnRiU2NaS1FHQ1NieHdQVm02eVBNbWhtVXVyMldzU2xKalB0THpGZUVIaEFoU056WEl5VGliTzVFanVYWGxXcnVOcitmcUhHOGd5UnRPSDgrUkVwaTNQRnozRmVEcWFEUGtDRXJCc0J2dXRuSDYxcCtUNXVUOXFBcU0vamxYRnZnQktjSEw0K2lMQXlwRFhmWjVGUTVlV0w2enFQa1VDNmNwc2c5RS9KZkUwWmNHQkhuREtSV05rSFdyZUYyQ3hsdThERlV3K3dwZHpSVVF2TkNmRHdOb2g2eGJ4V3N5dEJZVzhiR3ZEb2NsZEpVMEhWeUlkcXpQdmRGMk1QTEdVcGVXakZMa3FVRW5XcjhjMXI1MDBXSFNmTERkajVEMVlYNWFyekE5a1NMVVZoUldUNUR4NjJQWVRhNjFrMzEwR3NHUzFadTFVcER2cE5XTE9keWZpUmFnT016eEQ1MFgvRUk0Q29FVjlwMU5DQW1OOWRzN3ZOeVdrZWR3UEV5bjRhOHlpWUk1VHNqaHd3UEhlSy9QdzE1NE05enZPTGVDSWV0NEFhVEl1Q0ZFZjc3WkVTQXBUU1A0SDlHOU9rZUNmbjdBeDE0T3RiRFZBUlE3anIwdkE5dHhkM2dxWHlpVXBVTURpNXpBVW5WQnlJdEZFa3VhZ3o3MVl1aUdMQTVmWEFzZW9pOERqOVdFb3I2SnJZK2syVDFLODZxdk16TUZpK3QzS3JVdmU4Z2liNU9CT3hmQVB3TE8wVHA2UmdJbDFLbEo3aDZ4aFUyckF6U1BrbXRyZzJXWWxhSmVIUnVpSVlVUitITHoxUldJakdWNytKMHQxSDNRRHJFSjRyM3YyYnd1MTJZb050M2tYbHQ1Z2MvVURwcnpsemJJNzlDYzVtaGdTRTZUazR2NnRIbzl6UW9vYnpHdS83SWc1L3FZRGJFUkFoRStNS1NmNWltbFRZcSt4aWl6SFZSL2ZRekpmSlBwcUkyUzR5THk0RGxVYVYwdHJLYmdCUjZzazM5OVJiQjAwT3VXSXhrcGJja0h3SFhEam9jSlFxalExZnFTRUl0NUNJdW94NzYrdkZRYWNKTCtDb1ZMRjkzYVh0QXhvQURXQWFRb0tIcEtOY3ROM0xzSkZMVE12NzVvMGRhZkxFMVlodnJQU0xkQW1TOW5PYlh2c2p3TUJabjM2OHZhREVkTEsrTy9OZzVGemJGc29aZWw5SE1XT2RTMG1pSjljVEFsTThIZzRFQ2hnOGp6YWExZEN1aG9EODhqdnI3U0F1R2pRNDFTRE5vOFg3cE9DbjFXMGRNMEpxZzJFSDFkV052UkQrQ0hTallQTVFLalk4dmdjakRZTEE2SFpLei9kV0xQb1p5TEdnbzFiSCtLZEdRVTB4MngwMk55SWliNjZtS2hEbDBjRVNPUnphT25uRUtGQjdwNVhzZzM4L2c4Y2k3LzJwTHVQclNmZmdTVlNOcHFFa1V0cDBkL1I2OEJUS0ZjcDRSOHRqZk1rU3BUVERIRkZGTk1NY1VVVTB3eHhSUlRUREhGRkZOTU1jVVVVL3oveHY4QlZJa3U1R0Q4SDJZQUFBQUFTVVZPUks1Q1lJST1cIjtcblxuaDEuaW5uZXJUZXh0PVwiVGhpcyBpcyBBYm91dCBQYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBYm91dFBhZ2UoKSB7XG4gICAgY29udGVudC5pbm5lclRleHQgPSBcIlwiOyAvLyBDbGVhciB0aGUgY29udGVudCBiZWZvcmUgYWRkaW5nIG5ldyBlbGVtZW50c1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1nKTtcblxufSIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5jb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbmNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5pbWcuc3JjID0gXCJodHRwczovL3BsdXMudW5zcGxhc2guY29tL3ByZW1pdW1fcGhvdG8tMTY3NTM0NDMxNzY4Ni0xMThjYzlmODlmOGE/dz02MDAmYXV0bz1mb3JtYXQmZml0PWNyb3AmcT02MCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1YeDhjbVZ6ZEdGMWNtRnVkQ1V5TUdodmJXVndZV2RsZkdWdWZEQjhmREI4Zkh3d1wiOyAvLyBTZXQgdGhlIHNyYyBhdHRyaWJ1dGUgY29ycmVjdGx5XG5oMS5pbm5lclRleHQgPSBcIlRoaXMgaXMgSG9tZSBQYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcbiAgY29udGVudC5pbm5lclRleHQgPSBcIlwiOyAvLyBDbGVhciB0aGUgY29udGVudCBiZWZvcmUgYWRkaW5nIG5ldyBlbGVtZW50c1xuICBjb250ZW50LmFwcGVuZENoaWxkKGgxKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChpbWcpO1xufVxuIiwiY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbmNvbnN0IGgxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmltZy5zcmMgPSBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTk5MjUwMzAwNDM1LWI5NjkzZjIxODMwZD93PTYwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZxPTYwJml4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4elpXRnlZMmg4TVRSOGZHMWxiblY4Wlc1OE1Id3dmREI4Zkh3d1wiO1xuaDEuaW5uZXJUZXh0PVwiVGhpcyBpcyBNZW51IFBhZ2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcbiAgICBjb250ZW50LmlubmVyVGV4dCA9IFwiXCI7IC8vIENsZWFyIHRoZSBjb250ZW50IGJlZm9yZSBhZGRpbmcgbmV3IGVsZW1lbnRzXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoMSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbWcpO1xuXG59IiwiaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfSBmcm9tIFwiLi9jcmVhdGVIb21lUGFnZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICAgIGNyZWF0ZUhvbWVQYWdlKCk7XG4gICAgXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBsb2FkUGFnZSB9IGZyb20gJy4vbG9hZFBhZ2UnO1xuaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfSBmcm9tICcuL2NyZWF0ZUhvbWVQYWdlJztcbmltcG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH0gZnJvbSAnLi9jcmVhdGVNZW51UGFnZSc7XG5pbXBvcnQgeyBjcmVhdGVBYm91dFBhZ2UgfSBmcm9tICcuL2NyZWF0ZUFib3V0UGFnZSc7XG5sb2FkUGFnZSgpO1xuXG5jb25zdCBob21lPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuSG9tZVwiKTtcbmNvbnN0IG1lbnU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5NZW51XCIpO1xuY29uc3QgYWJvdXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5BYm91dFwiKTtcbmFib3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGNyZWF0ZUFib3V0UGFnZSk7XG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGNyZWF0ZU1lbnVQYWdlKTtcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsY3JlYXRlSG9tZVBhZ2UpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==