/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
    addMessageLoder: function (selector,location) {
        $(location).addClass("loader");
        $(location).append("<div id='loader' class='loader-container text-center color-white'><div><i style='color:white' class='fa fa-spinner fa-pulse fa-3x'></i></div><div style='color:white'><h4>Smart Docs <br> <small> Cargando Recursos <div id='"+selector+"'> </div> </small> <br><small>... Se esta preparando para ti ...</small></h4><h5>Desarollado por: Huawei Colombia  <br> OSS IT Team </h5></div></div>");
    },
    changeMessageLoader: function (selector, msg) {
        console.log("Selector: "+ selector);
        console.log("Message: " + msg);
        $("#" + selector).text(msg);
    },
    removeMessageLoader: function (location){
        $("#loader").remove();
        $(location).removeClass("loader");
    },
    launchProcessImageModal: function(){
        $("#process_image_modal").remove();
        $("body").append("<div class='fade modal modal-warning'aria-hidden=true aria-labelledby=myModalLabel1 id=process_image_modal role=dialog style=display:block tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel13>La imagen esta siendo procesada </h4></div><div class=modal-body> <img src='./../images/mapIcon.svg' style='margin-left:auto;margin-right:auto;display:block' width='150px'><h4 style='text-align:center'> Espera un momento, este proceso puede tomar algunos segundos dependiendo de tu conexion</h4></div></div></div></div>");
        $("#process_image_modal").modal({ backdrop: 'static', keyboard: false });
    },
    removeProcessImageModal:function(){
        $("#process_image_modal").modal('hide');
    }
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
    "reports":[],
    "getReports": function(){
        let reference = this;
        return reference.reports;
    },
    "reportsLog": [],
    "getReportsLog":function(){
        let reference = this;
        return reference.reportsLog;
    },
    "reportSelected":{}
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
    "templateSelected": "",
    "templates":[],
    "getTemplates": function(){
        let reference = this;
        return reference.templates;
    }
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
    "visits":[],
    "visitSelected":{},
    "getVisits": function(){
        let reference = this;
        return reference.visits; 
    }
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(12);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./flat-blue.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./flat-blue.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
let dataBase;
let visitsConnection = __webpack_require__(3);
let templatesConnection = __webpack_require__(2);
let reportsConnection = __webpack_require__(1);

module.exports = {
    "dataBase": "",
    "startIndexedDB": function () {
        let reference = this;
        reference.dataBase = indexedDB.open("SmartDocsOffline");
        reference.dataBase.onupgradeneeded = function (e) {
            let active = reference.dataBase.result;

            let visits = active.createObjectStore("visits", { keyPath: 'visitId', autoIncrement: true });
            visits.createIndex("by_visitId", "visitId", { unique: true });
            visits.createIndex("by_site", "site", { unique: false });
            visits.createIndex("by_creationDate", "creationDate", { unique: false });

            let templates = active.createObjectStore("templates", { keyPath: 'templateId' });
            templates.createIndex("by_templateId", "templateId", { unique: true });
            templates.createIndex("by_creationDate", "creationDate", { unique: false });
            templates.createIndex("by_lastModification", "lastModification", { unique: false });
            templates.createIndex("by_project", "project", { unique: false });

            let reports = active.createObjectStore("reports", { keyPath: 'reportId', autoIncrement: true });
            reports.createIndex("by_reportId", "reportId", { unique: true });
            reports.createIndex("by_site", "site", { unique: false });
            reports.createIndex("by_creation_date", "creationDate", { unique: false });
            reports.createIndex("by_lastModification", "lastModification", { unique: false });

            let reportsLog = active.createObjectStore("reportsLog", { keyPath: 'reportLogId', autoIncrement: true });
            reportsLog.createIndex("by_reportLogId", "reportLogId", { unique: true });
            reportsLog.createIndex("by_reportId", "reportId", { unique: false });
            reportsLog.createIndex("by_site", "site", { unique: false });
            reportsLog.createIndex("by_creation_date", "creationDate", { unique: false });
            reportsLog.createIndex("by_operation", "operation", { unique: false });
            reportsLog.createIndex("by_operationDate", "operationDate", { unique: false });
            
        }

        reference.dataBase.onsuccess = function (e) {
            console.log("Smart Docs Offline DB was loaded");
        }

        reference.dataBase.onerror = function (e) {
            console.error("An error ocurred " + e);
        }
    },
    "addVisit": function (site) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            var active = reference.dataBase.result;
            var data = active.transaction(["visits"], "readwrite");
            var object = data.objectStore("visits");

            var request = object.put({
                site: site,
                creationDate: "" + new Date()
            });

            request.onerror = function (e) {
                console.log("An error occurred " + request.error.name + " \n\n " + request.error.message);
                reject(request.error.name);
            }

            request.onsuccess = function (e){
                visitsConnection.visitSelected.visitId = e.target.result;
            }

            data.oncomplete = function (e) {
                console.log("The Visit was register on SmartDocsOffline");
                resolve();
            }
        });
    },
    "getVisits": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["visits"], "readonly");
            let object = data.objectStore("visits");
            let elements = [];

            object.openCursor().onsuccess = function (e) {
                var result = e.target.result;
                if (result === null) {
                    result;
                }
                else {
                    elements.push(result.value);
                    console.log(elements);
                    result.continue();
                }
            }

            data.oncomplete = function (e) {
                console.log("elements", elements);
                visitsConnection.visits = elements;
                resolve();
            }
        });
    },
    "addTemplate": function (templateId, name, project, icon, content) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            var active = reference.dataBase.result;
            var data = active.transaction(["templates"], "readwrite");
            var object = data.objectStore("templates");

            var request = object.put({
                templateId: templateId,
                name: name,
                project: project,
                icon: icon,
                content: content,
                creationDate: "" + new Date(),
                lastModification: "" + new Date()
            });

            request.onerror = function (e) {
                console.log("An error occurred " + request.error.name + " \n\n " + request.error.message);
                reject(request.error.name);
            }

            data.oncomplete = function (e) {
                console.log("The template was added to SmartDocsOffline");
                resolve();
            }
        });
    },
    "getTemplates": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["templates"], "readonly");
            let object = data.objectStore("templates");
            let elements = [];

            object.openCursor().onsuccess = function (e) {
                var result = e.target.result;
                if (result === null) {
                    result;
                }
                else {
                    elements.push(result.value);
                    console.log(elements);
                    result.continue();
                }
            }

            data.oncomplete = function (e) {
                console.log("elements", elements);
                templatesConnection.templates = elements;
                resolve();
            }
        });
    },
    "getTemplateByTemplateId": function (templateId) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["templates"], "readonly");
            let object = data.objectStore("templates");
            let request = object.get(templateId);
            request.onsuccess = function () {
                if (request.result !== undefined) {
                    resolve(request.result);
                }
            }
        });
    },
    "addReport": function (templateId, site, answer, status) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reports", "reportsLog"], "readwrite");
            let object = data.objectStore("reports");
            let request = object.put({
                site: site,
                templateId: templateId,
                content: answer,
                status: status,
                creationDate: "" + new Date(),
                lastModification: "" + new Date()
            });

            request.onerror = function (e) {
                console.log("An error occurred " + request.error.name + " \n\n " + request.error.message);
                reject(e);
            }

            request.onsuccess = function (e) {
                reference.addReportLog(e.target.result ,"Creacion", status);
            }

            data.oncomplete = function (e) {
                console.log("The report was added to SmartDocsOffline", e);
                resolve();
            }
        });
    },
    "updateReport": function (reportId, status, content) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            var objectStore = active.transaction(["reports"], "readwrite").objectStore("reports");
            var request = objectStore.get(reportId);
            request.onerror = function (event) {
                // Handle errors!
                reject(request.error.name);
            };
            request.onsuccess = function (event) {
                // Get the old value that we want to update
                var data = request.result;

                // update the value(s) in the object that you want to change
                data.content = content;
                data.status = status;
                data.lastModification = "" + new Date()

                // Put this updated object back into the database.
                var requestUpdate = objectStore.put(data);
                requestUpdate.onerror = function (event) {
                    // Do something with the error
                    reject(requestUpdate.error.name);
                };
                requestUpdate.onsuccess = function (event) {
                    // Success - the data is updated!
                    reference.addReportLog(reportId ,"Actualizacion", status).then(function () {
                        resolve();
                    });
                };
            };
        });
    },
    "getReports": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reports"], "readonly");
            let object = data.objectStore("reports");
            let elements = [];

            object.openCursor().onsuccess = function (e) {
                let result = e.target.result;
                if (result === null) {
                    result;
                }
                else {
                    elements.push(result.value);
                    console.log(elements);
                    result.continue();
                }
            }

            data.oncomplete = function (e) {
                console.log("elements", elements);
                reportsConnection.reports = elements;
                resolve();
            }
        });
    },
    "addReportLog": function (reportId, operation, status) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reportsLog"], "readwrite");
            let object = data.objectStore("reportsLog");
            let request = object.put({
                reportId: reportId,
                operation: operation,
                status: status,
                operationDate: "" + new Date(),
            });

            request.onerror = function (e) {
                console.log("An error occurred " + request.error.name + " \n\n " + request.error.message);
                reject(e);
            }

            data.oncomplete = function (e) {
                console.log("The report was added to the Log");
                resolve();
            }
        });
    },
    getReportsLog: function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reportsLog"], "readonly");
            let object = data.objectStore("reportsLog");
            let elements = [];

            object.openCursor().onsuccess = function (e) {
                let result = e.target.result;
                if (result === null) {
                    result;
                }
                else {
                    elements.push(result.value);
                    console.log(elements);
                    result.continue();
                }
            }

            data.oncomplete = function (e) {
                console.log("elements", elements);
                reportsConnection.reportsLog = elements;
                resolve();
            }
        });
    }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

let message = __webpack_require__(0);

module.exports = {
    "imgTo64": function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            var canvas = $("#canvasRezise")[0];
            var ctx = canvas.getContext('2d');
            var img = new Image();
            reader.onload = function (e) {
                console.log(input.id.replace("Event", ""));
                ctx.drawImage(img, 100, 100, widthSize, heigthSize);

                var widthSize = 768;
                var heigthSize = 1024;
                $('#' + input.id.replace("Event", "")).attr('src', $('#canvasRezise')[0].toDataURL());

            }
            img.src = e.target.result;

            reader.readAsDataURL(input.files[0]);
        }
    },
    "showTable": function (tableId) {
        let reference = this;
        let tableValues = JSON.parse($("#" + tableId + "Value").val());
        //console.log("Show table in action", tableValues);
        $("#" + tableId + "> tbody").html("");
        tableValues.forEach((tableVal, indexBig) => {
            tableVal.forEach((val, index) => {
                if (index == 0) {
                    console.log("Imprimir TR con IndexInterno:" + val);
                    $("#" + tableId + " > tbody").append("<tr id='" + tableId + + tableVal[0] + "' value='" + tableVal + "'><td>" + indexBig + "</td></tr>");
                }
                else {
                    console.log("Imprimir TD con valor :" + val);
                    $("#" + tableId + " > tbody > tr[id='" + tableId + tableVal[0] + "']").append("<td>" + val + "</td>");
                }
                if (index == tableVal.length - 1) {
                    $("#" + tableId + " > tbody > tr[id='" + tableId + tableVal[0] + "']").append("<td><div id='" + tableVal[0] + "Del'> <i class='fa fa-trash-o'></i>Eliminar</div></td>");

                    $("#" + tableVal[0] + "Del").click(function () {
                        let id = this.id;
                        let dataSearch = id.replace("Del", "");
                        let tableData = JSON.parse($("#" + tableId + "Value").val());

                        tableData.forEach((value, indexData) => {
                            if (dataSearch == value[0]) {
                                console.log("I found the value", tableData[indexData]);
                                tableData.splice(indexData, 1);
                                $("#" + tableId + "Value").val(JSON.stringify(tableData));
                                reference.showTable(tableId);
                            }
                        });

                    });

                }

            });

        });

    },
    "addToTable": function (tableId, values, indix) {
        let reference = this;
        //console.log("Add to table in action" + values);
        let tableValues = $("#" + tableId + "Value").val();
        $("#" + tableId + "> tbody").html("");
        if (tableValues != "") {
            tableValues = JSON.parse($("#" + tableId + "Value").val());
            tableValues.push(values);
            $("#" + tableId + "Value").val(JSON.stringify(tableValues));
        }
        else {
            tableValues = [];
            tableValues.push(values);
            $("#" + tableId + "Value").val(JSON.stringify(tableValues));
        }
        let doIt = false;
        let temp = 0;
        tableValues.forEach(function (tableVal, indexBig) {
            tableVal.forEach( function (val, index) {
                if (index == 0) {
                    console.log("Imprimir TR con IndexInterno:" + val);
                    $("#" + tableId + " > tbody").append("<tr id='" + tableId + + tableVal[0] + "' value='" + tableVal + "'><td>" + indexBig + "</td></tr>");
                }
                else {
                    console.log("Imprimir TD con valor :" + val);
                    $("#" + tableId + " > tbody > tr[id='" + tableId + tableVal[0] + "']").append("<td>" + val + "</td>");
                }
                if (index == tableVal.length - 1) {
                    $("#" + tableId + " > tbody > tr[id='" + tableId + tableVal[0] + "']").append("<td><div id='" + tableVal[0] + "Del'> <i class='fa fa-trash-o'></i>Eliminar</div></td>");

                    $("#" + tableVal[0] + "Del").click( function () {
                        let id = this.id;
                        let dataSearch = id.replace("Del", "");
                        let tableData = JSON.parse($("#" + tableId + "Value").val());
                        tableData.forEach( function (value, indexData) {
                            if (dataSearch == value[0]) {
                                console.log("I found the value", tableData[indexData]);
                                tableData.splice(indexData, 1);
                                $("#" + tableId + "Value").val(JSON.stringify(tableData));
                                reference.showTable(tableId);
                            }
                        });

                    });

                }

            });

        });
    },
    allInputs: [],
    "executeEngine": function (template) {
        let reference = this;
        reference.allInputs = [];
        //Variable to generate a id for RadioButtons
        var id_gen = 0;
        //Variable for default image
        var defaultImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRkVFMEI5M0E2QkMxMUU2QjUxMUY2QzdEQUU2NTQ2OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRkVFMEI5NEE2QkMxMUU2QjUxMUY2QzdEQUU2NTQ2OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVGRUUwQjkxQTZCQzExRTZCNTExRjZDN0RBRTY1NDY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVGRUUwQjkyQTZCQzExRTZCNTExRjZDN0RBRTY1NDY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Z8XpDgAAmltJREFUeNrsvQtYXNl1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";

        template.tabs.forEach((valueTab, indexTab) => {
            valueTab.navtab.forEach((valuenavTab, indexnavTab) => {
                //Generating navTabs
                $("#templateNavTabs").append("<li role='" + valueTab.role + "' class='" + valueTab.class + "'>" +
                    "<a href='#" + valuenavTab.location + "' role='" + valuenavTab.role + "' aria-controls='" + valuenavTab.location + "' data-toggle='" + valuenavTab.data_toggle + "' >" + valuenavTab.title + "</a></li>");

                valueTab.panel.forEach(function (valueTabPanel, indexTabPanel) {
                    //Generating the tabPanel
                    $("#templateTabsPanel").append("<div role='" + valueTabPanel.role + "' class='" + valueTabPanel.class + "' id='" + valuenavTab.location + "'></div>");

                    $("#" + valuenavTab.location).append("<div class=''");
                    valueTabPanel.subpanel.forEach(function (valueSubPanel, indexSTabContent) {
                        $("#" + valuenavTab.location).append("<div id='" + valueSubPanel.id + "' class='" + valueSubPanel.class + "'> " +
                            "<div class='panel-heading'><h3 class='panel-title'></h3>" + valueSubPanel.title + "</div>" +
                            "<div class='panel-body'>" + "</div></div>");


                        let typeInside;

                        valueSubPanel.elements.forEach(function (valueSubPanelEle, indexSubPanelEle) {

                            switch (valueSubPanelEle.type) {


                                case "date": case "datetime": case "time": case "month": case "week":

                                    reference.allInputs.push({ 'name': valueSubPanelEle.label.value, 'selector': valueSubPanelEle.id, "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });



                                    switch (valueSubPanelEle.type) {
                                        case "date": typeInside = "date"; break;
                                        case "datetime": typeInside = "datetime-local"; break;
                                        case "time": typeInside = "time"; break;
                                        case "week": typeInside = "week"; break;
                                        case "month": typeInside = "month"; break;
                                    }

                                    //Adding the input 
                                    $("#" + valueSubPanel.id + " > .panel-body ").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'><label class='" + valueSubPanelEle.label.class + "'>" + valueSubPanelEle.label.value + "</label> <input id='" + valueSubPanelEle.id + "' class='" + valueSubPanelEle.class + "' name='" + valueSubPanelEle.name + "' type='" + typeInside + "'></div>");


                                    //Validate ReadOnly Attribute
                                    if (valueSubPanelEle.readOnly == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='" + typeInside + "']").prop('readOnly', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Disabled Attribute
                                    if (valueSubPanelEle.disabled == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='" + typeInside + "']").prop('disabled', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Required Attribute
                                    if (valueSubPanelEle.required == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > .control-label").text("* " + valueSubPanelEle.label.value);
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='" + typeInside + "']").prop('required', function () {
                                            return true;
                                        });
                                    }

                                    //Validate AutoFocus Attribute
                                    if (valueSubPanelEle.autofocus == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='" + typeInside + "']").prop('autofocus', function () {
                                            return true;
                                        });
                                    }

                                    switch (typeInside) {

                                        case "date":

                                            //Min Date
                                            switch (valueSubPanelEle.min) {
                                                case "today":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='date']").prop('min', function () {
                                                        return new Date().toJSON().split('T')[0];
                                                    });
                                                    break;
                                                case "tomorrow":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='date']").prop('min', function () {
                                                        var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                                                        var day = currentDate.getDate();
                                                        var month = currentDate.getMonth() + 1;
                                                        var year = currentDate.getFullYear();
                                                        if (day < 10) {
                                                            day = 0 + "" + day;
                                                        }
                                                        return "" + year + "-" + month + "-" + day;
                                                    });
                                                    break;
                                                default:
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='date']").prop('min', function () {
                                                        return valueSubPanelEle.min;
                                                    });
                                                    break;
                                            }

                                            //Max Date
                                            switch (valueSubPanelEle.max) {
                                                case "today":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='date']").prop('max', function () {
                                                        return new Date().toJSON().split('T')[0];
                                                    });
                                                    break;
                                                case "tomorrow":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='date']").prop('max', function () {
                                                        var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                                                        var day = currentDate.getDate();
                                                        var month = currentDate.getMonth() + 1;
                                                        var year = currentDate.getFullYear();
                                                        if (day < 10) {
                                                            day = 0 + "" + day;
                                                        }
                                                        return "" + year + "-" + month + "-" + day;
                                                    });
                                                    break;
                                                default:
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='date']").prop('max', function () {
                                                        return valueSubPanelEle.max;
                                                    });
                                                    break;
                                            }

                                            break;

                                        case "datetime-local":

                                            //Min Date
                                            switch (valueSubPanelEle.min) {
                                                case "today":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='datetime-local']").prop('min', function () {
                                                        var str = new Date().toJSON().split('.')[0];
                                                        return str.split('T')[0] + "T00:00:00";
                                                    });
                                                    break;
                                                case "tomorrow":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='datetime-local']").prop('min', function () {
                                                        var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                                                        var day = currentDate.getDate();
                                                        var month = currentDate.getMonth() + 1;
                                                        var year = currentDate.getFullYear();
                                                        if (day < 10) {
                                                            day = 0 + "" + day;
                                                        }
                                                        return "" + year + "-" + month + "-" + day + "T00:00:00";
                                                    });
                                                    break;
                                                default:
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='datetime-local']").prop('min', function () {
                                                        return valueSubPanelEle.min;
                                                    });
                                                    break;
                                            }

                                            //Validate Max Date
                                            switch (valueSubPanelEle.max) {
                                                case "today":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='datetime-local']").prop('max', function () {
                                                        return new Date().toJSON().split('.')[0];
                                                    });
                                                    break;
                                                case "tomorrow":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='datetime-local']").prop('max', function () {
                                                        var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                                                        var day = currentDate.getDate();
                                                        var month = currentDate.getMonth() + 1;
                                                        var year = currentDate.getFullYear();
                                                        if (day < 10) {
                                                            day = 0 + "" + day;
                                                        }
                                                        return "" + year + "-" + month + "-" + day + "T12:00";
                                                    });
                                                    break;
                                                default:
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='datetime-local']").prop('max', function () {
                                                        return valueSubPanelEle.max;
                                                    });
                                                    break;
                                            }

                                            break;

                                        case "month":
                                            switch (valueSubPanelEle.min) {
                                                case "TM":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='month']").prop('min', function () {
                                                        date = new Date().toJSON().split('-');
                                                        return date[0] + "-" + date[1];
                                                    });
                                                    break;
                                                case "NM":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='month']").prop('min', function () {
                                                        var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                                                        var month = currentDate.getMonth() + 1;
                                                        var year = currentDate.getFullYear();
                                                        if (parseInt(month) == 12) {
                                                            return "" + parseInt(year + 1) + "-01";
                                                        }
                                                        else {
                                                            return "" + year + "-" + parseInt(month + 1);
                                                        }
                                                    });
                                                    break;
                                                default:
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='month']").prop('min', function () {
                                                        return valueSubPanelEle.min;
                                                    });
                                                    break;
                                            }
                                            //Validate Max Date
                                            switch (valueSubPanelEle.max) {
                                                case "TM":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='month']").prop('max', function () {
                                                        date = new Date().toJSON().split('-');
                                                        return date[0] + "-" + date[1];
                                                    });
                                                    break;
                                                case "NM":
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='month']").prop('max', function () {
                                                        var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                                                        var month = currentDate.getMonth() + 1;
                                                        var year = currentDate.getFullYear();
                                                        if (parseInt(month) == 12) {
                                                            return "" + parseInt(year + 1) + "-01";
                                                        }
                                                        else {
                                                            return "" + year + "-" + parseInt(month + 1);
                                                        }
                                                    });
                                                    break;
                                                default:
                                                    $("#" + valueSubPanelEle.idDiv + " > input[type='month']").prop('max', function () {
                                                        return valueSubPanelEle.max;
                                                    });
                                                    break;
                                            }
                                            break;

                                            break;
                                    }


                                    //Validate Step Attribute
                                    if (valueSubPanelEle.step != undefined) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='" + typeInside + "']").prop('step', function () {
                                            return valueSubPanelEle.step;
                                        });
                                    }

                                    break;

                                case "text": case "textArea":

                                    reference.allInputs.push({ 'name': valueSubPanelEle.label.value, selector: valueSubPanelEle.id, "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });

                                    let textSelector;

                                    switch (valueSubPanelEle.type) {
                                        case "text":
                                            //Adding the input
                                            $("#" + valueSubPanel.id + " > .panel-body ").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'><label class='" + valueSubPanelEle.label.class + "'>" + valueSubPanelEle.label.value + "</label> <input id='" + valueSubPanelEle.id + "' class='" + valueSubPanelEle.class + "' name='" + valueSubPanelEle.name + "' type='text'> </div>");

                                            textSelector = " > input[type='text']";

                                            break;

                                        case "textArea":
                                            //Adding the input
                                            $("#" + valueSubPanel.id + " > .panel-body ").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'><label class='" + valueSubPanelEle.label.class + "'>" + valueSubPanelEle.label.value + "</label> <textarea id='" + valueSubPanelEle.id + "' class='" + valueSubPanelEle.class + "' name='" + valueSubPanelEle.name + "'> </textarea></div>");

                                            textSelector = " > textArea";

                                            break;
                                    }


                                    //Validate ReadOnly Attribute
                                    if (valueSubPanelEle.readOnly == true) {
                                        $("#" + valueSubPanelEle.idDiv + textSelector).prop('readOnly', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Disabled Attribute
                                    if (valueSubPanelEle.disabled == true) {
                                        $("#" + valueSubPanelEle.idDiv + textSelector).prop('disabled', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Required Attribute
                                    if (valueSubPanelEle.required == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > .control-label").text("* " + valueSubPanelEle.label.value);
                                        $("#" + valueSubPanelEle.idDiv + textSelector).prop('required', function () {
                                            return true;
                                        });
                                    }

                                    //Validate AutoFocus Attribute
                                    if (valueSubPanelEle.autofocus == true) {
                                        $("#" + valueSubPanelEle.idDiv + textSelector).prop('autofocus', function () {
                                            return true;
                                        });
                                    }

                                    //Validate MaxLength Attribute
                                    if (valueSubPanelEle.maxLenght > 0) {
                                        $("#" + valueSubPanelEle.idDiv + textSelector).prop('maxLength', function () {
                                            return valueSubPanelEle.maxLenght;
                                        });
                                    }

                                    break;

                                case "number":

                                    $("#" + valueSubPanel.id + " > .panel-body ").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'><label class='" + valueSubPanelEle.label.class + "'>" + valueSubPanelEle.label.value + "</label> <input id='" + valueSubPanelEle.id + "'class='" + valueSubPanelEle.class + "' name='" + valueSubPanelEle.name + "' type='number'> </div>");

                                    reference.allInputs.push({ 'name': valueSubPanelEle.label.value, 'selector': valueSubPanelEle.id, "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });

                                    //Validate ReadOnly Attribute
                                    if (valueSubPanelEle.readOnly == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='number']").prop('readOnly', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Disabled Attribute
                                    if (valueSubPanelEle.disabled == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='number']").prop('disabled', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Required Attribute
                                    if (valueSubPanelEle.required == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > .control-label").text("* " + valueSubPanelEle.label.value);
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='number']").prop('required', function () {
                                            return true;
                                        });
                                    }

                                    //Validate AutoFocus Attribute
                                    if (valueSubPanelEle.autofocus == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='number']").prop('autofocus', function () {
                                            return true;
                                        });
                                    }

                                    //Validate MaxLength Attribute
                                    if (valueSubPanelEle.min > 0) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='number']").prop('min', function () {
                                            return valueSubPanelEle.min;
                                        });
                                    }

                                    //Validate MaxLength Attribute
                                    if (valueSubPanelEle.max > 0) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[type='number']").prop('max', function () {
                                            return valueSubPanelEle.max;
                                        });
                                    }

                                    break;


                                case "radio": case "checkbox":

                                    reference.allInputs.push({ 'name': valueSubPanelEle.label.value, 'selector': valueSubPanelEle.name, "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });

                                    switch (valueSubPanelEle.type) {

                                        case "radio": typeInside = "radio"; break;
                                        case "checkbox": typeInside = "checkbox"; break;

                                    }

                                    $("#" + valueSubPanel.id + " > .panel-body ").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'><label class='" + valueSubPanelEle.label.class + "'>" + valueSubPanelEle.label.value + "</label> </div>");

                                    valueSubPanelEle.options.forEach(function (listItem, indexList) {
                                        $("#" + valueSubPanelEle.idDiv).append("<div class='" + valueSubPanelEle.class + "'>" +
                                            "<input type='" + typeInside + "' id='id" + id_gen + "' name='" + valueSubPanelEle.name + "'  value='" + listItem.value + "'> <label for='id" + id_gen + "'> " + listItem.label + "</label></div>");

                                        //Validate ReadOnly Attribute
                                        if (valueSubPanelEle.readOnly == true) {
                                            $("#id" + id_gen).prop('readOnly', function () {
                                                return true;
                                            });
                                        }

                                        //Validate Disabled Attribute
                                        if (valueSubPanelEle.disabled == true) {
                                            $("#id" + id_gen).prop('disabled', function () {
                                                return true;
                                            });
                                        }

                                        //Validate Required Attribute
                                        if (valueSubPanelEle.required == true) {
                                            $("#" + valueSubPanelEle.idDiv + " > .control-label").text("* " + valueSubPanelEle.label.value);
                                            $("#id" + id_gen).prop('required', function () {
                                                return true;
                                            });
                                        }

                                        //Validate AutoFocus Attribute
                                        if (valueSubPanelEle.autofocus == true) {
                                            $("#id" + id_gen).prop('autofocus', function () {
                                                return true;
                                            });
                                        }


                                        id_gen += 1;

                                    });


                                    break;


                                case "select":

                                    $("#" + valueSubPanel.id + " > .panel-body ").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'><label class='" + valueSubPanelEle.label.class + "'>" + valueSubPanelEle.label.value + "</label> <select id='" + valueSubPanelEle.id + "' class='" + valueSubPanelEle.class + "' name='" + valueSubPanelEle.name + "'> </select></div>");

                                    reference.allInputs.push({ 'name': valueSubPanelEle.label.value, 'selector': valueSubPanelEle.id, "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });

                                    valueSubPanelEle.options.forEach(function (valueOption, indexOption) {
                                        $("#" + valueSubPanelEle.id).append("<option value='" + valueOption.value + "'>" + valueOption.label + "</option>");
                                    });

                                    if (valueSubPanelEle.service.name == "") {
                                        MessageProcessor.process({
                                            serviceId: valueSubPanelEle.service.name,
                                            data: valueSubPanelEle.service.params,
                                            success: function (data) {
                                                data.results.forEach(function (valueOption, indexOption) {
                                                    $("#" + valueSubPanelEle.id).append("<option value='" + valueOption[valueSubPanelEle.service.radio] + "'>" + valueOption[valueSubPanelEle.service.label] + "</option>");
                                                });
                                            }
                                        });
                                    }

                                    //Validate ReadOnly Attribute
                                    if (valueSubPanelEle.readOnly == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > select").prop('readOnly', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Disabled Attribute
                                    if (valueSubPanelEle.disabled == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > select").prop('disabled', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Required Attribute
                                    if (valueSubPanelEle.required == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > .control-label").text("* " + valueSubPanelEle.label.value);
                                        $("#" + valueSubPanelEle.idDiv + " > select").prop('required', function () {
                                            return true;
                                        });
                                    }

                                    //Validate AutoFocus Attribute
                                    if (valueSubPanelEle.autofocus == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > select").prop('autofocus', function () {
                                            return true;
                                        });
                                    }

                                    break;

                                case "multiSelect":

                                    $("#" + valueSubPanel.id + " > .panel-body ").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'><label class='" + valueSubPanelEle.label.class + "'>" + valueSubPanelEle.label.value + "</label> <select multiple id='" + valueSubPanelEle.id + "' class='" + valueSubPanelEle.class + "' name='" + valueSubPanelEle.name + "'> </select></div>");

                                    reference.allInputs.push({ 'name': valueSubPanelEle.label.value, 'selector': valueSubPanelEle.id, "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });

                                    valueSubPanelEle.options.forEach(function (valueOption, indexOption) {
                                        $("#" + valueSubPanelEle.id).append("<option value='" + valueOption.value + "'>" + valueOption.label + "</option>");
                                    });

                                    if (valueSubPanelEle.service.name == "") {
                                        MessageProcessor.process({
                                            serviceId: valueSubPanelEle.service.name,
                                            data: valueSubPanelEle.service.params,
                                            success: function (data) {
                                                data.results.forEach(function (valueOption, indexOption) {
                                                    $("#" + valueSubPanelEle.id).append("<option value='" + valueOption[valueSubPanelEle.service.radio] + "'>" + valueOption[valueSubPanelEle.service.label] + "</option>");
                                                });
                                            }
                                        });
                                    }

                                    //Validate ReadOnly Attribute
                                    if (valueSubPanelEle.readOnly == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > select").prop('readOnly', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Disabled Attribute
                                    if (valueSubPanelEle.disabled == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > select").prop('disabled', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Required Attribute
                                    if (valueSubPanelEle.required == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > .control-label").text("* " + valueSubPanelEle.label.value);
                                        $("#" + valueSubPanelEle.idDiv + " > select").prop('required', function () {
                                            return true;
                                        });
                                    }

                                    //Validate AutoFocus Attribute
                                    if (valueSubPanelEle.autofocus == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > select").prop('autofocus', function () {
                                            return true;
                                        });
                                    }

                                    break;

                                case "list":

                                    $("#" + valueSubPanel.id + " > .panel-body ").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'><label class='" + valueSubPanelEle.label.class + "'>" + valueSubPanelEle.label.value + "</label> <input list='" + valueSubPanelEle.id + "' id='" + valueSubPanelEle.id + "List' class='" + valueSubPanelEle.class + "' name='" + valueSubPanelEle.name + "'><datalist id='" + valueSubPanelEle.id + "'></datalist><input type='hidden' id='" + valueSubPanel.id + "ValList'></div>");

                                    reference.allInputs.push({ 'name': valueSubPanelEle.label.value, 'selector': valueSubPanelEle.id + 'List', "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });

                                    valueSubPanelEle.options.forEach(function (valueOption, indexOption) {
                                        $("#" + valueSubPanelEle.id).append("<option value='" + valueOption.value + "'>" + valueOption.label + "</option>");
                                    });

                                    //Validate ReadOnly Attribute
                                    if (valueSubPanelEle.readOnly == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[name='" + valueSubPanelEle.name + "']").prop('readOnly', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Disabled Attribute
                                    if (valueSubPanelEle.disabled == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[name='" + valueSubPanelEle.name + "']").prop('disabled', function () {
                                            return true;
                                        });
                                    }

                                    //Validate Required Attribute
                                    if (valueSubPanelEle.required == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > .control-label").text("* " + valueSubPanelEle.label.value);
                                        $("#" + valueSubPanelEle.idDiv + " > input[name='" + valueSubPanelEle.name + "']").prop('required', function () {
                                            return true;
                                        });
                                    }

                                    //Validate AutoFocus Attribute
                                    if (valueSubPanelEle.autofocus == true) {
                                        $("#" + valueSubPanelEle.idDiv + " > input[name='" + valueSubPanelEle.name + "']").prop('autofocus', function () {
                                            return true;
                                        });
                                    }

                                    //Get the answer and show it in the console
                                    $("input[id='" + valueSubPanelEle.id + "List']").on('focusout', function (e) {
                                        var opt = $('option[value="' + $(this).val() + '"]');
                                        if (opt.length) {
                                            console.log(opt.attr('value'));
                                            $("#" + valueSubPanelEle.id + "ValList").val(opt.attr('value'));
                                        } else {
                                            $("input[id='" + valueSubPanelEle.id + "List']").val("");
                                            console.log("Invalid Option");
                                            $("#invalidOpt").modal('show');
                                            $("#")
                                        }
                                    });

                                    break;

                                case "table":

                                    $("#" + valueSubPanel.id + " > .panel-body ").append("<div id='" + valueSubPanelEle.idDiv + "' class='col-sm-12 col-md-12 co-lg-12 table-responsive'><hr><table class='" + valueSubPanelEle.class + "' id='" + valueSubPanelEle.id + "'><thead>" + "<tr></tr></thead><tbody></tbody></table></div>");
                                    $("#" + valueSubPanel.id + " > .panel-body").append("<input type='hidden' id='" + valueSubPanelEle.id + "Value'>");
                                    $("#" + valueSubPanel.id + " > .panel-body").append("<input type='hidden' id='" + valueSubPanelEle.id + "Index' value='0'> ");

                                    reference.allInputs.push({ 'name': valueSubPanelEle.name, 'selector': valueSubPanelEle.id, "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });

                                    $("#" + valueSubPanelEle.id + "> thead > tr").append("<th> # </th>");

                                    valueSubPanelEle.elements.forEach(function (valueEle, indexEle) {

                                        switch (valueEle.type) {

                                            case "text":

                                                $("#" + valueSubPanel.id + " > .panel-body >").append("<div  id='" + valueEle.idDiv + "' class='" + valueEle.divClass + "'><input id= '" + valueEle.id + "'class='" + valueEle.class + "' name='" + valueEle.name + "' type='text' placeholder='" + valueEle.label.value + "'></div>");

                                                //Validate ReadOnly Attribute
                                                if (valueEle.readOnly == true) {
                                                    $("#" + valueEle.idDiv + " > input[type='text']").prop('readOnly', function () {
                                                        return true;
                                                    });
                                                }

                                                //Validate Disabled Attribute
                                                if (valueEle.disabled == true) {
                                                    $("#" + valueEle.idDiv + " > input[type='text']").prop('disabled', function () {
                                                        return true;
                                                    });
                                                }

                                                //Validate Required Attribute
                                                if (valueEle.required == true) {
                                                    $("#" + valueEle.idDiv + " > .control-label").text("* " + valueEle.label.value);
                                                    $("#" + valueEle.idDiv + " > input[type='text']").prop('required', function () {
                                                        return true;
                                                    });
                                                }

                                                //Validate AutoFocus Attribute
                                                if (valueEle.autofocus == true) {
                                                    $("#" + valueEle.idDiv + " > input[type='text']").prop('autofocus', function () {
                                                        return true;
                                                    });
                                                }

                                                //Validate MaxLength Attribute
                                                if (valueEle.maxLenght > 0) {
                                                    $("#" + valueEle.idDiv + " > input[type='text']").prop('maxLength', function () {
                                                        return valueSubPanelEle.maxLenght;
                                                    });
                                                }

                                                break;

                                            case "number":

                                                $("#" + valueSubPanel.id + " > .panel-body >").append("<div  id='" + valueEle.idDiv + "' class='" + valueEle.divClass + "'><input id='" + valueEle.id + "' class='" + valueEle.class + "' name='" + valueEle.name + "' type='number' placeholder='" + valueEle.label.value + "'></div>");

                                                //Validate ReadOnly Attribute
                                                if (valueEle.readOnly == true) {
                                                    $("#" + valueEle.idDiv + " > input[type='number']").prop('readOnly', function () {
                                                        return true;
                                                    });
                                                }

                                                //Validate Disabled Attribute
                                                if (valueEle.disabled == true) {
                                                    $("#" + valueEle.idDiv + " > input[type='number']").prop('disabled', function () {
                                                        return true;
                                                    });
                                                }

                                                //Validate Required Attribute
                                                if (valueEle.required == true) {
                                                    $("#" + valueEle.idDiv + " > .control-label").text("* " + valueEle.label.value);
                                                    $("#" + valueEle.idDiv + " > input[type='number']").prop('required', function () {
                                                        return true;
                                                    });
                                                }

                                                //Validate AutoFocus Attribute
                                                if (valueEle.autofocus == true) {
                                                    $("#" + valueEle.idDiv + " > input[type='number']").prop('autofocus', function () {
                                                        return true;
                                                    });
                                                }

                                                //Validate MaxLength Attribute
                                                if (valueEle.maxLenght > 0) {
                                                    $("#" + valueEle.idDiv + " > input[type='number']").prop('maxLength', function () {
                                                        return valueSubPanelEle.maxLenght;
                                                    });
                                                }

                                                break;

                                            case "list":

                                                //WORK ON THIS> INCOMPLETE SERVICE CALLED
                                                $("#" + valueSubPanel.id + " > .panel-body >").append("<div  id='" + valueEle.idDiv + "' class='" + valueEle.divClass + "'><input id='" + valueEle.id + "' list='" + valueEle.id + "Opt'class='" + valueEle.class + "' name='" + valueEle.name + "' placeholder='" + valueEle.label.value + "'> <datalist id='" + valueEle.id + "Opt'></datalist><input type='hidden' id='" + valueEle.id + "ValList'></div>");

                                                valueEle.options.forEach(function (valueOption, indexOption) {
                                                    $("#" + valueEle.id + "Opt").append("<option value='" + valueOption.value + "'>" + valueOption.label + "</option>");
                                                });

                                                //Get the answer and show it in the console
                                                $("input[id='" + valueEle.id + "']").on('focusout', function (e) {
                                                    var opt = $('option[value="' + $(this).val() + '"]');
                                                    if (opt.length) {
                                                        console.log(opt.attr('value'));
                                                        $("#" + valueEle.id + "ValList").val(opt.attr('value'));
                                                    } else {
                                                        $("input[id='" + valueEle.id + "']").val("");
                                                        $("#" + valueEle.id + "ValList").val(opt.attr(""));
                                                        console.log("Invalid Option");
                                                        $("#invalidOpt").modal('show');
                                                        $("#")
                                                    }
                                                });

                                                break;

                                            case "button":

                                                $("#" + valueSubPanel.id + " > .panel-body >").append("<div  id='" + valueEle.idDiv + "' class='" + valueEle.divClass + "'><button id='" + valueEle.id + "' class='" + valueEle.class + "' name='" + valueEle.name + "'>" + valueEle.label.value + "</button></div>");
                                                $("button[id='" + valueEle.id + "']").click(function () {

                                                    var values = [];
                                                    var qtyEle = 0;

                                                    values.push(($("#" + valueSubPanelEle.id + "Index").val() == "") ? 0 : parseInt($("#" + valueSubPanelEle.id + "Index").val()) );
                                                    valueSubPanelEle.elements.forEach(function (valueEle2, indexEle2) {

                                                        switch (valueEle2.type) {

                                                            case "list":
                                                                qtyEle += 1;
                                                                if ($("input[id='" + valueEle2.id + "ValList']").val() != "") {
                                                                    values.push($("input[id='" + valueEle2.id + "ValList']").val());
                                                                }
                                                                break;

                                                            case "number":
                                                                qtyEle += 1;
                                                                if ($("input[id='" + valueEle2.id + "']").val() != "") {
                                                                    values.push($("input[id='" + valueEle2.id + "']").val());
                                                                }
                                                                break;

                                                            case "text":
                                                                qtyEle += 1;
                                                                if ($("input[id='" + valueEle2.id + "']").val() != "") {
                                                                    values.push($("input[id='" + valueEle2.id + "']").val());
                                                                }
                                                                break;
                                                        }
                                                    });
                                                    console.log("Value sent" + values);
                                                    if (values.length == qtyEle + 1) {
                                                        $("#" + valueSubPanelEle.id + "Index").val( ($("#" + valueSubPanelEle.id + "Index").val() == "")? 1 : parseInt($("#" + valueSubPanelEle.id + "Index").val()) + 1);
                                                        var index = parseInt ($("#" + valueSubPanelEle.id + "Index").val());
                                                        reference.addToTable(valueSubPanelEle.id, values, index);
                                                    }
                                                    else {
                                                        $("#invalidTable").modal('show');
                                                    }
                                                });
                                                break;
                                        }

                                        if (valueEle.type != "button") {
                                            $("#" + valueSubPanelEle.id + "> thead > tr").append("<th> " + valueEle.label.value + "</th>");
                                        }
                                        else {
                                            $("#" + valueSubPanelEle.id + "> thead > tr").append("<th> </th>");
                                        }

                                    });


                                    break;

                                case "image2Labels":

                                    $("#" + valueSubPanel.id + "> .panel-body").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'>" +
                                        "<div id='" + valueSubPanelEle.idDiv + "'class='thumbnail' align='center'>" +
                                        "<h3>" + valueSubPanelEle.labels.firstLabel + "<a class='anchorjs-link' href='#thumbnail-label'><span class='anchorjs-icon'></span></a></h3>" +
                                        "<img width='450' height='600' style='width: 450px;height: 600px' src='" + defaultImg + "' class='" + valueSubPanelEle.class + "' id='" + valueSubPanelEle.id + "'>" +
                                        "<div class='caption'> <h3>" + valueSubPanelEle.labels.secondLabel + "<a class='anchorjs-link' href='#thumbnail-label'><span class='anchorjs-icon'></span></a></h3> " +
                                        " <p><input type='file' id='" + valueSubPanelEle.id + "Event' accept='image/*' capture='camera'></p></div> </div>" +
                                        "</div>");



                        reference.allInputs.push({ 'name': valueSubPanelEle.label.value, 'selector': valueSubPanelEle.id, "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });

                        $("#" + valueSubPanelEle.id + "Event").on('change', function (event) {

                            message.launchProcessImageModal();
                            var myCanvas = $('#canvasRezise')[0];
                            var ctx = myCanvas.getContext('2d');
                            var img = new Image();

                            img.onload = function () {

                                myCanvas.width = 450;
                                myCanvas.height = 600;
                                ctx.drawImage(img, 0, 0, 450, 600);

                                ctx.font = "bold 8pt sans-serif";
                                ctx.shadowColor = 'black';
                                ctx.fillStyle = "white";
                                ctx.shadowBlur = 7;

                                ctx.fillText('SDM Ticket : Offline Version ' , 10, (myCanvas.height - 150));
                                ctx.fillText('Sitio: Offline Version ', 10, (myCanvas.height - 130));
                                ctx.fillText('Hora Actual: ' + new Date().toString().split("GMT")[0], 10, (myCanvas.height - 110));
                                ctx.font = "bold 8pt sans-serif";
                                ctx.shadowColor = 'black';
                                ctx.fillStyle = "white";
                                ctx.shadowBlur = 7;
     
                                navigator.geolocation.getCurrentPosition(function (position) {
                                    ctx.fillText('Latitud : ' + position.coords.latitude, 10, (myCanvas.height - 90));
                                    ctx.fillText('Longitud : ' + position.coords.longitude, 10, (myCanvas.height - 70));
                                    ctx.fillText('Precision : Aprox. ' + position.coords.accuracy + ' Metros', 10, (myCanvas.height - 50));

                                    ctx.fillText('Direccion: ' + 'Offline Version', (myCanvas.width / 2) - 80, (myCanvas.height - 10));
                                        ctx.font = "italic 8pt sans-serif";
                                        ctx.shadowColor = 'black';
                                        ctx.fillStyle = "white";
                                        ctx.shadowBlur = 7;
                                        ctx.fillText('Este Imagen fue cargada en Smart Docs', 10, (myCanvas.height - 30));
                                        ctx.fillText('Huawei @OWS', 80, (myCanvas.height - 10));
                                        $("#" + valueSubPanelEle.id).attr("src", myCanvas.toDataURL());
                                        message.removeProcessImageModal();
                                });


                                function get(url) {
                                    return new Promise(function (resolve, reject) {

                                        var xhttp = new XMLHttpRequest();
                                        xhttp.open("POST", url, true);
                                        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                                        xhttp.onreadystatechange = function () {//Call a function when the state changes.
                                            if (xhttp.readyState == 4 && xhttp.status == 200) {
                                                resolve(JSON.parse(xhttp.response));
                                            }
                                        }
                                        xhttp.onerror = function () {
                                            reject(xhttp.statusText);
                                        };
                                        xhttp.send();
                                    })
                                }

                                console.log("The Image changes");


                            };

                            img.src = URL.createObjectURL(event.target.files[0]);
                        });

                        break;

                                case "image1Label":


    $("#" + valueSubPanel.id + "> .panel-body").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'>" +
    "<div id='" + valueSubPanelEle.idDiv + "' class='thumbnail' align='center'>" +
    "<img width='450' height='600' style='width: 450px;height: 600px' src='" + defaultImg + "' class='" + valueSubPanelEle.class + "' id='" + valueSubPanelEle.id + "'>" +
    "<div class='caption'> <h3>" + valueSubPanelEle.labels.firstLabel + "<a class='anchorjs-link' href='#thumbnail-label'><span class='anchorjs-icon'></span></a></h3> " +
    " <p><input type='file' id='" + valueSubPanelEle.id + "Event' accept='image/*'     capture='camera'></p></div> </div>" +
    "</div>");

    reference.allInputs.push({ 'name': valueSubPanelEle.label.value, 'selector': valueSubPanelEle.id, "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });

    $("#" + valueSubPanelEle.id + "Event").on('change', function(event) {

       message.launchProcessImageModal(); 
        var myCanvas = $('#canvasRezise')[0];
        var ctx = myCanvas.getContext('2d');
        var img = new Image();

        img.onload = function () {

            myCanvas.width = 600;
            myCanvas.height = 800;
            ctx.drawImage(img, 0, 0, 600, 800);

            ctx.font = "bold 8pt sans-serif";
            ctx.shadowColor = 'black';
            ctx.fillStyle = "white";
            ctx.shadowBlur = 7;

            ctx.fillText('SDM Ticket : ' + 'Offline Version', 10, (myCanvas.height - 150));
            ctx.fillText('Sitio: ' + 'Offline Version', 10, (myCanvas.height - 130));
            ctx.fillText('Hora Actual: ' + new Date().toString().split("GMT")[0], 10, (myCanvas.height - 110));
            ctx.font = "bold 8pt sans-serif";
            ctx.shadowColor = 'black';
            ctx.fillStyle = "white";
            ctx.shadowBlur = 7;

            navigator.geolocation.getCurrentPosition(function (position) {
                ctx.fillText('Latitud : ' + position.coords.latitude, 10, (myCanvas.height - 90));
                ctx.fillText('Longitud : ' + position.coords.longitude, 10, (myCanvas.height - 70));
                ctx.fillText('Precision : Aprox. ' + position.coords.accuracy + ' Metros', 10, (myCanvas.height - 50));
                ctx.fillText('Direccion: ' + 'Offline Version', (myCanvas.width / 2) - 80, (myCanvas.height - 10));
                    ctx.font = "italic 8pt sans-serif";
                    ctx.shadowColor = 'black';
                    ctx.fillStyle = "white";
                    ctx.shadowBlur = 7;
                    ctx.fillText('Este Imagen fue cargada en Smart Docs', 10, (myCanvas.height - 30));
                    ctx.fillText('Huawei @OWS', 80, (myCanvas.height - 10));
                    $("#" + valueSubPanelEle.id).attr("src", myCanvas.toDataURL());
                    message.removeProcessImageModal();
            });


            function get(url) {
                return new Promise(function (resolve, reject) {

                    var xhttp = new XMLHttpRequest();
                    xhttp.open("POST", url, true);
                    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhttp.onreadystatechange = function () {//Call a function when the state changes.
                        if (xhttp.readyState == 4 && xhttp.status == 200) {
                            resolve(JSON.parse(xhttp.response));
                        }
                    }
                    xhttp.onerror = function () {
                        reject(xhttp.statusText);
                    };
                    xhttp.send();
                })
            }

            console.log("The Image changes");


        };

        img.src = URL.createObjectURL(event.target.files[0]);
    });
    //reference.imgTo64(this, '' + valueSubPanelEle.id)
    //reference.imgTo64(this);


    break;
}

                        })

                    });
                });
            });
        });
    },
"validateField": function (name,type, selector) {
    var defaultImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRkVFMEI5M0E2QkMxMUU2QjUxMUY2QzdEQUU2NTQ2OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRkVFMEI5NEE2QkMxMUU2QjUxMUY2QzdEQUU2NTQ2OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVGRUUwQjkxQTZCQzExRTZCNTExRjZDN0RBRTY1NDY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVGRUUwQjkyQTZCQzExRTZCNTExRjZDN0RBRTY1NDY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Z8XpDgAAmltJREFUeNrsvQtYXNl1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";
    switch (type) {

        case "image1Label": case "image2Labels":
            if ($("#" + selector).attr('src') == defaultImg) {
                allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': defaultImg });
            }
            else {
                allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': $("#" + selector).attr('src') });
            }
            return true;
            break;


        case "textArea": case "text":

            if ($("#" + selector).val().length < 1) {
                //Contain Blank Spaces
                allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': "" });
                return false;
            }
            else {
                //No Contain Blanck Spaces
                allInputsFilled.push({ 'name': name,'sel': selector, 'type': type, 'val': $("#" + selector).val() });
                return true;
            }

            break;

        case "table":

            if ($("#" + selector + "Value").val()) {
                allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': $("#" + selector + "Value").val(), 'indix': $("#" + selector + "Index").val() });
            }
            else {
                allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': "", 'indix': "" });
            }
            return true;

            break;
        default:
            if ($("#" + selector).val()) {
                allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': $("#" + selector).val() });
                return true;
            }
            else {
                allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': "" });
                return false;
            }
            break;

    }
},
"saveAnswer": function () {
    let reference = this;
    var allReqComplete = false;
    var arrayAllReqComplete = [];
    allInputsFilled = [];
    var validate;
    var fieldsEmpty;
    let response = {};

    reference.allInputs.forEach((value, index) => {

        validate = reference.validateField(value.name,value.type, value.selector);

        //Validate == false --> It's Empty
        //Validate == true --> Completed

        //If it's required
        if (value.required == true) {

            //If it's empty
            if (validate == false) {
                allReqComplete = false;
                arrayAllReqComplete.push({ "name": value.name, "sel": value.selector, "fill": false });
            }
            //If it's not empty
            else {

                allReqComplete = true;
                arrayAllReqComplete.push({ "name": value.name, "sel": value.selector, "fill": true });
            }

        }
        //If it's not required
        else {
            allReqComplete = true;
            arrayAllReqComplete.push({ "name": value.name, "sel": value.selector, "fill": true });
        }

    });
    //console.log("Completed", arrayAllReqComplete);

    arrayAllReqComplete.forEach((value, index) => {
        if (value.fill == false) {
            if (fieldsEmpty == undefined) {
                fieldsEmpty = value.name;
            }
            else {
                fieldsEmpty += "  -  " + value.name;
            }
            //console.log("Falta completar:" + value.name);
            allReqComplete = false;
        }
    });
    response = { "userAnswer": JSON.stringify(allInputsFilled), "completed": allReqComplete }
    if (allReqComplete == false) {
        $("#emptyFieldsText").text(fieldsEmpty);
        response["fieldsEmpty"] = fieldsEmpty
    }

    return response;
},
"matchAnswers": function (allInputsAnswer) {
    let reference = this;
    allInputsAnswer.forEach((value, index) => {

        switch (value.type) {

            case "image2Labels": case "image1Label":
                $("#" + value.sel).attr('src', value.val);
                break;

            case "table":

                $("#" + value.sel + "Index").val(value.indix);
                $("#" + value.sel + "Value").val(value.val);
                if (parseInt(value.indix) >= 1) {
                    reference.showTable(value.sel);
                }
                break;

            default:
                $("#" + value.sel).val("" + value.val);
                break;
        }
    })
},
"watermark": function (selector) {


}
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".flat-blue {\n  background-color: #F9F9F9;\n  /* small screen */ }\n  .flat-blue a {\n    color: #363c46; }\n  .flat-blue a:hover {\n    color: #09486b; }\n  .flat-blue .app-footer {\n    opacity: 0.7;\n    color: #353d47; }\n  .flat-blue .navbar, .flat-blue .navbar.navbar-default {\n    border-bottom: 0px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08); }\n    .flat-blue .navbar > .container-fluid, .flat-blue .navbar.navbar-default > .container-fluid {\n      background-color: #FFF; }\n    .flat-blue .navbar .navbar-header .navbar-brand, .flat-blue .navbar.navbar-default .navbar-header .navbar-brand {\n      color: #F9F9F9; }\n    .flat-blue .navbar .navbar-header .navbar-expand-toggle, .flat-blue .navbar.navbar-default .navbar-header .navbar-expand-toggle {\n      color: #353d47; }\n    .flat-blue .navbar .navbar-header .navbar-right-expand-toggle, .flat-blue .navbar.navbar-default .navbar-header .navbar-right-expand-toggle {\n      color: #353d47; }\n    .flat-blue .navbar .navbar-breadcrumb li, .flat-blue .navbar.navbar-default .navbar-breadcrumb li {\n      color: #353d47; }\n      .flat-blue .navbar .navbar-breadcrumb li a, .flat-blue .navbar.navbar-default .navbar-breadcrumb li a {\n        color: #353d47; }\n    .flat-blue .navbar .navbar-nav > li, .flat-blue .navbar.navbar-default .navbar-nav > li {\n      border-left: 1px solid #F9F9F9; }\n      .flat-blue .navbar .navbar-nav > li > a, .flat-blue .navbar.navbar-default .navbar-nav > li > a {\n        color: #353d47; }\n    .flat-blue .navbar .navbar-nav > li:hover > a, .flat-blue .navbar.navbar-default .navbar-nav > li:hover > a {\n      color: #22A7F0; }\n    .flat-blue .navbar .navbar-nav > li.open > a, .flat-blue .navbar.navbar-default .navbar-nav > li.open > a {\n      background-color: transparent;\n      color: #22A7F0; }\n    .flat-blue .navbar .navbar-nav > li.danger > a, .flat-blue .navbar.navbar-default .navbar-nav > li.danger > a {\n      background-color: transparent;\n      border-bottom: 4px solid #FA2A00;\n      color: #FA2A00; }\n    .flat-blue .navbar .navbar-nav > li.danger.open > a, .flat-blue .navbar.navbar-default .navbar-nav > li.danger.open > a {\n      background-color: #FA2A00;\n      color: #FFF; }\n    .flat-blue .navbar .navbar-nav .dropdown-menu, .flat-blue .navbar.navbar-default .navbar-nav .dropdown-menu {\n      background-color: #F9F9F9;\n      border-color: #E4E4E4; }\n      .flat-blue .navbar .navbar-nav .dropdown-menu .title, .flat-blue .navbar.navbar-default .navbar-nav .dropdown-menu .title {\n        background-color: #FFF; }\n        .flat-blue .navbar .navbar-nav .dropdown-menu .title .badge, .flat-blue .navbar.navbar-default .navbar-nav .dropdown-menu .title .badge {\n          background-color: #353d47; }\n    .flat-blue .navbar .navbar-nav .dropdown-menu.danger, .flat-blue .navbar.navbar-default .navbar-nav .dropdown-menu.danger {\n      border-color: #FA2A00; }\n      .flat-blue .navbar .navbar-nav .dropdown-menu.danger .title, .flat-blue .navbar.navbar-default .navbar-nav .dropdown-menu.danger .title {\n        background-color: #FA2A00;\n        color: #FFF; }\n        .flat-blue .navbar .navbar-nav .dropdown-menu.danger .title .badge, .flat-blue .navbar.navbar-default .navbar-nav .dropdown-menu.danger .title .badge {\n          background-color: #FFF;\n          color: #FA2A00; }\n  .flat-blue .navbar.navbar-inverse {\n    background-color: #353d47;\n    border-bottom: 0px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1); }\n    .flat-blue .navbar.navbar-inverse > .container-fluid {\n      background-color: #353d47; }\n    .flat-blue .navbar.navbar-inverse .navbar-header .navbar-brand {\n      color: #F9F9F9; }\n    .flat-blue .navbar.navbar-inverse .navbar-header .navbar-expand-toggle {\n      color: #FFF; }\n    .flat-blue .navbar.navbar-inverse .navbar-header .navbar-right-expand-toggle {\n      color: #FFF; }\n    .flat-blue .navbar.navbar-inverse .navbar-breadcrumb li {\n      color: #FFF; }\n      .flat-blue .navbar.navbar-inverse .navbar-breadcrumb li a {\n        color: #FFF; }\n    .flat-blue .navbar.navbar-inverse .navbar-nav > li {\n      border-left: 1px solid #363c46; }\n      .flat-blue .navbar.navbar-inverse .navbar-nav > li > a {\n        color: #FFF; }\n    .flat-blue .navbar.navbar-inverse .navbar-nav > li:hover > a {\n      color: #22A7F0; }\n    .flat-blue .navbar.navbar-inverse .navbar-nav > li.open > a {\n      background-color: transparent;\n      color: #22A7F0; }\n    .flat-blue .navbar.navbar-inverse .navbar-nav > li.danger > a {\n      background-color: transparent;\n      border-bottom: 4px solid #FA2A00;\n      color: #FFF; }\n    .flat-blue .navbar.navbar-inverse .navbar-nav > li.danger.open > a {\n      background-color: #FA2A00; }\n    .flat-blue .navbar.navbar-inverse .navbar-nav .dropdown-menu {\n      background-color: #F9F9F9;\n      border-color: #353d47; }\n      .flat-blue .navbar.navbar-inverse .navbar-nav .dropdown-menu .title {\n        background-color: #FFF; }\n        .flat-blue .navbar.navbar-inverse .navbar-nav .dropdown-menu .title .badge {\n          background-color: #353d47; }\n    .flat-blue .navbar.navbar-inverse .navbar-nav .dropdown-menu.danger {\n      border-color: #FA2A00; }\n      .flat-blue .navbar.navbar-inverse .navbar-nav .dropdown-menu.danger .title {\n        background-color: #FA2A00;\n        color: #FFF; }\n        .flat-blue .navbar.navbar-inverse .navbar-nav .dropdown-menu.danger .title .badge {\n          background-color: #FFF;\n          color: #FA2A00; }\n  .flat-blue .side-menu {\n    background-color: #FFF;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08); }\n    .flat-blue .side-menu .navbar-header {\n      background-color: #22A7F0;\n      margin-bottom: 4px; }\n      .flat-blue .side-menu .navbar-header .navbar-brand {\n        color: #19B5FE; }\n    .flat-blue .side-menu .navbar-nav {\n      width: 100%; }\n    .flat-blue .side-menu .navbar {\n      background-color: #FFF;\n      border-bottom: 0px;\n      -moz-box-shadow: none;\n      -webkit-box-shadow: none;\n      box-shadow: none; }\n      .flat-blue .side-menu .navbar li > a {\n        color: #363c46; }\n      .flat-blue .side-menu .navbar li.active {\n        border-left: 0; }\n        .flat-blue .side-menu .navbar li.active > a {\n          border-right: 4px solid #22A7F0;\n          background-color: #FFF; }\n      .flat-blue .side-menu .navbar > li:hover > a {\n        background-color: #FA2A00;\n        color: #FFF; }\n      .flat-blue .side-menu .navbar li.dropdown {\n        background-color: transparent; }\n        .flat-blue .side-menu .navbar li.dropdown > .panel-collapse {\n          background-color: #E4E4E4; }\n        .flat-blue .side-menu .navbar li.dropdown .panel-body {\n          padding: 0 7px; }\n  .flat-blue .side-menu.sidebar-inverse {\n    background-color: #353d47;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08); }\n    .flat-blue .side-menu.sidebar-inverse .navbar {\n      background-color: #353d47;\n      border-bottom: 0px;\n      -moz-box-shadow: none;\n      -webkit-box-shadow: none;\n      box-shadow: none; }\n      .flat-blue .side-menu.sidebar-inverse .navbar li {\n        border-left: 0; }\n        .flat-blue .side-menu.sidebar-inverse .navbar li > a {\n          color: #FFF; }\n      .flat-blue .side-menu.sidebar-inverse .navbar li.active > a {\n        color: #353d47;\n        border-left: 3px solid #22A7F0;\n        border-right: 0px solid #22A7F0;\n        background-color: #FFF; }\n        .flat-blue .side-menu.sidebar-inverse .navbar li.active > a .icon {\n          margin-left: -3px; }\n      .flat-blue .side-menu.sidebar-inverse .navbar > li:hover > a {\n        background-color: #FA2A00;\n        color: #FFF; }\n      .flat-blue .side-menu.sidebar-inverse .navbar li.dropdown > .panel-collapse {\n        background-color: rgba(0, 0, 0, 0.1); }\n      .flat-blue .side-menu.sidebar-inverse .navbar li.dropdown .panel-body {\n        padding: 0 7px; }\n  @media (max-width: 768px) {\n    .flat-blue .navbar.navbar-default .navbar-nav > li {\n      border-left: 0; }\n    .flat-blue .navbar.navbar-default .navbar-right {\n      background-color: #FFF; }\n    .flat-blue .navbar.navbar-inverse .navbar-nav > li {\n      border-left: 0; }\n    .flat-blue .navbar.navbar-inverse .navbar-right {\n      background-color: #353d47; } }\n  .flat-blue .card.red {\n    background-color: #d9534f;\n    color: #FFF; }\n  .flat-blue .card.yellow {\n    background-color: #ffb400;\n    color: #FFF; }\n.flat-blue .card.blueBoots {\n  background-color: #5bc0de;\n  color: #FFF; }\n  .flat-blue .card.green {\n    background-color: #5cb85c;\n    color: #FFF; }\n  .flat-blue .card.blue {\n    background-color: #22A7F0;\n    color: #FFF; }\n.flat-blue .card.goldBootsDark {\n  background-color: #F1A021;\n  color: #FFF; }\n  .flat-blue .card.dark {\n    background-color: #353d47;\n    color: #FFF; }\n  .flat-blue .card.red, .flat-blue .card.yellow, .flat-blue .card.green, .flat-blue .card.blue, .flat-blue .card.dark {\n    border: 0; }\n    .flat-blue .card.red .card-header, .flat-blue .card.yellow .card-header, .flat-blue .card.green .card-header, .flat-blue .card.blue .card-header, .flat-blue .card.dark .card-header {\n      border-bottom: 0; }\n      .flat-blue .card.red .card-header .title, .flat-blue .card.yellow .card-header .title, .flat-blue .card.green .card-header .title, .flat-blue .card.blue .card-header .title, .flat-blue .card.dark .card-header .title {\n        color: #FFF; }\n  .flat-blue .card {\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n    border: 0px solid #E4E4E4; }\n    .flat-blue .card .card-header {\n      border-bottom: 1px solid #E4E4E4; }\n      .flat-blue .card .card-header .title {\n        color: #353d47; }\n    .flat-blue .card .card-body .sub-title {\n      border-bottom: 1px solid #EAEAEA; }\n    .flat-blue .card .card-header.no-border {\n      border-bottom: 0; }\n    .flat-blue .card .card-jumbotron {\n      background-color: #EAEAEA; }\n  .flat-blue .card.primary .card-jumbotron {\n    background-color: #353d47;\n    color: #FFF; }\n  .flat-blue .card.profile .card-footer {\n    border-top: 1px solid #F9F9F9; }\n  .flat-blue .card.summary-inline.red:hover {\n    background-color: #7c1a06; }\n  .flat-blue .card.summary-inline.yellow:hover {\n    background-color: #85630f; }\n  .flat-blue .card.summary-inline.green:hover {\n    background-color: #006551; }\n  .flat-blue .card.summary-inline.blue:hover {\n    background-color: #353d47; }\n  .flat-blue .card.summary-inline.dark:hover {\n    background-color: #09486b; }\n  .flat-blue .card.card-success .card-header {\n    background-color: #1ABC9C; }\n    .flat-blue .card.card-success .card-header .title {\n      color: #FFF; }\n  .flat-blue .card.card-info .card-header {\n    background-color: #22A7F0; }\n    .flat-blue .card.card-info .card-header .title {\n      color: #FFF; }\n  .flat-blue .panel.panel-default {\n    border: 1px solid #EAEAEA; }\n    .flat-blue .panel.panel-default .panel-heading {\n      border-bottom: 1px solid #EAEAEA;\n      background-color: #F0F0F0; }\n  .flat-blue .panel.panel-primary {\n    border: 1px solid #353d47; }\n    .flat-blue .panel.panel-primary .panel-heading {\n      border-bottom: 1px solid #353d47;\n      background-color: #73849d;\n      color: #FFF; }\n  .flat-blue .panel.panel-success {\n    border: 1px solid #1ABC9C; }\n    .flat-blue .panel.panel-success .panel-heading {\n      border-bottom: 1px solid #1ABC9C;\n      background-color: #99e9d9;\n      color: #006551; }\n  .flat-blue .panel.panel-info {\n    border: 1px solid #22A7F0; }\n    .flat-blue .panel.panel-info .panel-heading {\n      border-bottom: 1px solid #22A7F0;\n      background-color: #91d5fb;\n      color: #09486b; }\n  .flat-blue .panel.panel-warning {\n    border: 1px solid #FABE28; }\n    .flat-blue .panel.panel-warning .panel-heading {\n      border-bottom: 1px solid #FABE28;\n      background-color: #ffe5a2;\n      color: #85630f; }\n  .flat-blue .panel.panel-danger {\n    border: 1px solid #fb927d; }\n    .flat-blue .panel.panel-danger .panel-heading {\n      border-bottom: 1px solid #fb927d;\n      background-color: #ffb8aa;\n      color: #7c1a06; }\n  .flat-blue .panel.fresh-color.panel-primary {\n    border: 1px solid #353d47; }\n    .flat-blue .panel.fresh-color.panel-primary .panel-heading {\n      border-bottom: 1px solid #353d47;\n      background-color: #353d47;\n      color: #FFF; }\n  .flat-blue .panel.fresh-color.panel-success {\n    border: 1px solid #1ABC9C; }\n    .flat-blue .panel.fresh-color.panel-success .panel-heading {\n      border-bottom: 1px solid #1ABC9C;\n      background-color: #1ABC9C;\n      color: #FFF; }\n  .flat-blue .panel.fresh-color.panel-info {\n    border: 1px solid #22A7F0; }\n    .flat-blue .panel.fresh-color.panel-info .panel-heading {\n      border-bottom: 1px solid #22A7F0;\n      background-color: #22A7F0;\n      color: #FFF; }\n  .flat-blue .panel.fresh-color.panel-warning {\n    border: 1px solid #FABE28; }\n    .flat-blue .panel.fresh-color.panel-warning .panel-heading {\n      border-bottom: 1px solid #FABE28;\n      background-color: #FABE28;\n      color: #FFF; }\n  .flat-blue .panel.fresh-color.panel-danger {\n    border: 1px solid #FA2A00; }\n    .flat-blue .panel.fresh-color.panel-danger .panel-heading {\n      border-bottom: 1px solid #FA2A00;\n      background-color: #FA2A00;\n      color: #FFF; }\n  .flat-blue .btn.btn-default {\n    background-color: #F0F0F0;\n    border-color: #EAEAEA; }\n  .flat-blue .btn.btn-default:hover {\n    background-color: #EAEAEA; }\n  .flat-blue .btn.btn-primary {\n    background-color: #353d47;\n    color: #FFF;\n    border-color: #353d47; }\n  .flat-blue .btn.btn-success {\n    background-color: #1ABC9C;\n    color: #FFF;\n    border-color: #1ABC9C; }\n  .flat-blue .btn.btn-warning {\n    background-color: #FABE28;\n    color: #FFF;\n    border-color: #FABE28; }\n  .flat-blue .btn.btn-info {\n    background-color: #22A7F0;\n    color: #FFF;\n    border-color: #22A7F0; }\n  .flat-blue .btn.btn-danger {\n    background-color: #FA2A00;\n    color: #FFF;\n    border-color: #FA2A00; }\n  .flat-blue .btn.btn-link {\n    color: #353d47; }\n  .flat-blue .progress .progress-bar {\n    background-color: #353d47;\n    color: #FFF; }\n  .flat-blue .progress .progress-bar.progress-bar-success {\n    background-color: #1ABC9C; }\n  .flat-blue .progress .progress-bar.progress-bar-info {\n    background-color: #22A7F0; }\n  .flat-blue .progress .progress-bar.progress-bar-warning {\n    background-color: #FABE28; }\n  .flat-blue .progress .progress-bar.progress-bar-danger {\n    background-color: #FA2A00; }\n  .flat-blue .color-white {\n    color: #FFF; }\n  .flat-blue .pagination > li > a {\n    color: #353d47; }\n  .flat-blue .pagination .active > a, .flat-blue .pagination .active > a:focus, .flat-blue .pagination .active > a:hover, .flat-blue .pagination .active span, .flat-blue .pagination .active > span:focus, .flat-blue .pagination .active > span:hover {\n    background-color: #353d47;\n    border-color: #353d47;\n    color: #FFF; }\n  .flat-blue .modal.modal-primary .modal-header {\n    background-color: #353d47;\n    color: #FFF; }\n  .flat-blue .modal.modal-success .modal-header {\n    background-color: #1ABC9C;\n    color: #FFF; }\n  .flat-blue .modal.modal-info .modal-header {\n    background-color: #22A7F0;\n    color: #FFF; }\n  .flat-blue .modal.modal-warning .modal-header {\n    background-color: #FABE28;\n    color: #FFF; }\n  .flat-blue .modal.modal-danger .modal-header {\n    background-color: #FA2A00;\n    color: #FFF; }\n  .flat-blue .alert.alert-success {\n    background-color: #99e9d9;\n    color: #006551;\n    border-color: #1ABC9C; }\n    .flat-blue .alert.alert-success .alert-link {\n      color: #006551;\n      text-decoration: underline; }\n    .flat-blue .alert.alert-success .btn-link {\n      color: #006551; }\n  .flat-blue .alert.alert-info {\n    background-color: #91d5fb;\n    color: #09486b;\n    border-color: #22A7F0; }\n    .flat-blue .alert.alert-info .alert-link {\n      color: #09486b;\n      text-decoration: underline; }\n    .flat-blue .alert.alert-info .btn-link {\n      color: #09486b; }\n  .flat-blue .alert.alert-warning {\n    background-color: #ffe5a2;\n    border-color: #FABE28;\n    color: #85630f; }\n    .flat-blue .alert.alert-warning .alert-link {\n      color: #85630f;\n      text-decoration: underline; }\n    .flat-blue .alert.alert-warning .btn-link {\n      color: #85630f; }\n  .flat-blue .alert.alert-danger {\n    background-color: #ffb8aa;\n    border-color: #fb927d;\n    color: #7c1a06; }\n    .flat-blue .alert.alert-danger .alert-link {\n      color: #7c1a06;\n      text-decoration: underline; }\n    .flat-blue .alert.alert-danger .btn-link {\n      color: #7c1a06; }\n  .flat-blue .alert.fresh-color {\n    color: #FFF; }\n    .flat-blue .alert.fresh-color .alert-link {\n      color: #FFF;\n      text-decoration: underline; }\n    .flat-blue .alert.fresh-color .btn-link {\n      color: #FFF; }\n  .flat-blue .alert.fresh-color.alert-success {\n    background-color: #1ABC9C; }\n  .flat-blue .alert.fresh-color.alert-info {\n    background-color: #22A7F0; }\n  .flat-blue .alert.fresh-color.alert-warning {\n    background-color: #FABE28; }\n  .flat-blue .alert.fresh-color.alert-danger {\n    background-color: #FA2A00;\n    border-color: #FA2A00; }\n  .flat-blue .list-group .list-group-item.active {\n    background-color: #353d47;\n    color: #FFF;\n    border-color: #353d47; }\n    .flat-blue .list-group .list-group-item.active .badge {\n      color: #353d47; }\n  .flat-blue .list-group .list-group-item.list-group-item-success {\n    background-color: #99e9d9;\n    color: #006551;\n    border-color: #99e9d9; }\n    .flat-blue .list-group .list-group-item.list-group-item-success .badge {\n      background-color: #FFF;\n      color: #1ABC9C; }\n  .flat-blue .list-group .list-group-item.list-group-item-info {\n    background-color: #91d5fb;\n    color: #09486b;\n    border-color: #91d5fb; }\n    .flat-blue .list-group .list-group-item.list-group-item-info .badge {\n      background-color: #FFF;\n      color: #22A7F0; }\n  .flat-blue .list-group .list-group-item.list-group-item-warning {\n    background-color: #ffe5a2;\n    color: #85630f;\n    border-color: #ffe5a2; }\n    .flat-blue .list-group .list-group-item.list-group-item-warning .badge {\n      background-color: #FFF;\n      color: #FABE28; }\n  .flat-blue .list-group .list-group-item.list-group-item-danger {\n    background-color: #ffb8aa;\n    color: #7c1a06;\n    border-color: #ffb8aa; }\n    .flat-blue .list-group .list-group-item.list-group-item-danger .badge {\n      background-color: #FFF;\n      color: #FA2A00; }\n  .flat-blue .bootstrap-switch {\n    border-color: #EAEAEA; }\n    .flat-blue .bootstrap-switch .bootstrap-switch-primary {\n      background-color: #353d47; }\n  .flat-blue .table .active td, .flat-blue .table .active th {\n    background-color: #EAEAEA; }\n  .flat-blue .table .success {\n    color: #006551; }\n    .flat-blue .table .success td, .flat-blue .table .success th {\n      background-color: #99e9d9; }\n  .flat-blue .table .info {\n    color: #09486b; }\n    .flat-blue .table .info td, .flat-blue .table .info th {\n      background-color: #91d5fb; }\n  .flat-blue .table .warning {\n    color: #85630f; }\n    .flat-blue .table .warning td, .flat-blue .table .warning th {\n      background-color: #ffe5a2; }\n  .flat-blue .table .danger {\n    color: #7c1a06; }\n    .flat-blue .table .danger td, .flat-blue .table .danger th {\n      background-color: #ffb8aa; }\n  .flat-blue .table > tbody > tr > td, .flat-blue .table > tbody > tr > th, .flat-blue .table > tfoot > tr > td, .flat-blue .table > tfoot > tr > th {\n    border-color: #EAEAEA; }\n  .flat-blue .table > thead > tr > th {\n    border-color: #EAEAEA; }\n  .flat-blue .table.table-striped > tbody > tr:nth-of-type(odd) {\n    background-color: #FDFDFD; }\n  .flat-blue .login-box .login-form .login-header {\n    color: #FFF; }\n  .flat-blue .login-box .login-form .login-body {\n    background-color: #FFF; }\n  .flat-blue .login-box input {\n    background-color: #F9F9F9;\n    border: 1px solid #F9F9F9; }\n  .flat-blue .login-box .login-footer a {\n    color: #FFF; }\n  .flat-blue .login-box .login-footer a:hover {\n    color: #FFF;\n    text-decoration: underline; }\n  .flat-blue .badge.primary {\n    background-color: #353d47; }\n  .flat-blue .badge.success {\n    background-color: #1ABC9C; }\n  .flat-blue .badge.info {\n    background-color: #22A7F0; }\n  .flat-blue .badge.warning {\n    background-color: #FABE28; }\n  .flat-blue .badge.danger {\n    background-color: #FA2A00; }\n  .flat-blue .nav-tabs {\n    background-color: #EAEAEA; }\n    .flat-blue .nav-tabs > li > a:hover {\n      background-color: #EAEAEA; }\n    .flat-blue .nav-tabs > li.active > a:hover {\n      background-color: #FFF; }\n  .flat-blue .tabs-below > .nav-tabs {\n    border-top: 1px solid #E4E4E4; }\n  .flat-blue .tabs-below > .nav-tabs > li > a:hover,\n  .flat-blue .tabs-below > .nav-tabs > li > a:focus {\n    border-top-color: #E4E4E4;\n    border-bottom-color: transparent; }\n  .flat-blue .tabs-below > .nav-tabs > .active > a,\n  .flat-blue .tabs-below > .nav-tabs > .active > a:hover,\n  .flat-blue .tabs-below > .nav-tabs > .active > a:focus {\n    border-color: transparent #E4E4E4 #E4E4E4 #E4E4E4; }\n  .flat-blue .tabs-left > .nav-tabs {\n    border-right: 1px solid #E4E4E4; }\n  .flat-blue .tabs-left > .nav-tabs > li > a:hover,\n  .flat-blue .tabs-left > .nav-tabs > li > a:focus {\n    border-color: #E4E4E4 #E4E4E4 #E4E4E4 #E4E4E4; }\n  .flat-blue .tabs-left > .nav-tabs .active > a,\n  .flat-blue .tabs-left > .nav-tabs .active > a:hover,\n  .flat-blue .tabs-left > .nav-tabs .active > a:focus {\n    border-color: #E4E4E4 transparent #E4E4E4 #E4E4E4;\n    *border-right-color: #FFF; }\n  .flat-blue .tabs-right > .nav-tabs {\n    border-left: 1px solid #E4E4E4; }\n  .flat-blue .tabs-right > .nav-tabs > li > a:hover,\n  .flat-blue .tabs-right > .nav-tabs > li > a:focus {\n    border-color: #E4E4E4 #E4E4E4 #E4E4E4 #E4E4E4; }\n  .flat-blue .tabs-right > .nav-tabs .active > a,\n  .flat-blue .tabs-right > .nav-tabs .active > a:hover,\n  .flat-blue .tabs-right > .nav-tabs .active > a:focus {\n    border-color: #E4E4E4 #E4E4E4 #E4E4E4 transparent;\n    *border-left-color: #FFF; }\n  .flat-blue .step .nav-tabs {\n    background-color: #FFF; }\n  .flat-blue .step .nav-tabs > li {\n    border: 1px solid #E4E4E4;\n    border-right: 0; }\n  .flat-blue .step .nav-tabs > li:after {\n    border-top: 15px solid transparent;\n    border-bottom: 15px solid transparent;\n    border-left: 15px solid #FFF; }\n  .flat-blue .step .nav-tabs > li:before {\n    border-top: 16px solid transparent;\n    border-bottom: 16px solid transparent;\n    border-left: 16px solid #E4E4E4; }\n  .flat-blue .step .nav-tabs > li.active {\n    background-color: #EAEAEA; }\n    .flat-blue .step .nav-tabs > li.active > a, .flat-blue .step .nav-tabs > li.active > a:focus, .flat-blue .step .nav-tabs > li.active > a:hover {\n      background: transparent; }\n  .flat-blue .step .nav-tabs > li:hover {\n    background-color: #EAEAEA; }\n  .flat-blue .step .nav-tabs > li:hover:after, .flat-blue .step .nav-tabs > li.active:after {\n    border-left: 15px solid #EAEAEA; }\n  .flat-blue .step .nav-tabs > li:last-child {\n    border-right: 1px solid #E4E4E4; }\n  .flat-blue .step .nav-tabs > li.step-success {\n    background-color: #99e9d9;\n    border: 1px solid #1ABC9C; }\n    .flat-blue .step .nav-tabs > li.step-success a {\n      color: #006551; }\n  .flat-blue .step .nav-tabs > li.step-disabled {\n    background-color: #99e9d9; }\n  .flat-blue .step .nav-tabs > li.step-success:after {\n    border-left: 15px solid #99e9d9; }\n  .flat-blue .step .nav-tabs > li.step-success.active:hover:after {\n    border-left: 15px solid #99e9d9; }\n  .flat-blue .step .nav-tabs > li.step-success:hover:after {\n    border-left: 15px solid #EAEAEA; }\n  .flat-blue .step.card-no-padding .nav-tabs > li {\n    border: 0px solid transparent;\n    border-right: 1px solid #E4E4E4;\n    border-bottom: 1px solid #E4E4E4; }\n  .flat-blue .step.card-no-padding .nav-tabs > li:last-child {\n    border-right: 0px solid #E4E4E4; }\n  .flat-blue .step.tabs-left .nav-tabs > li {\n    border: 1px solid #E4E4E4; }\n  .flat-blue .step.tabs-left .nav-tabs > li:after {\n    border-top: 15px solid transparent;\n    border-bottom: 15px solid transparent;\n    border-left: 15px solid #FFF; }\n  .flat-blue .step.tabs-left .nav-tabs > li:before {\n    border-top: 16px solid transparent;\n    border-bottom: 16px solid transparent;\n    border-left: 16px solid #E4E4E4; }\n  .flat-blue .step.tabs-left .nav-tabs > li.active {\n    background-color: #EAEAEA; }\n    .flat-blue .step.tabs-left .nav-tabs > li.active > a, .flat-blue .step.tabs-left .nav-tabs > li.active > a:focus, .flat-blue .step.tabs-left .nav-tabs > li.active > a:hover {\n      background: transparent; }\n  .flat-blue .step.tabs-left .nav-tabs > li:hover {\n    background-color: #EAEAEA; }\n  .flat-blue .step.tabs-left .nav-tabs > li:hover:after, .flat-blue .step.tabs-left .nav-tabs > li.active:after {\n    border-left: 15px solid #EAEAEA; }\n  .flat-blue .step.tabs-left.card-no-padding .nav-tabs > li {\n    border: 0px solid transparent; }\n  .flat-blue .pricing-table {\n    box-shadow: 0 1px 1px #CCC; }\n    .flat-blue .pricing-table .pt-header {\n      background-color: #E4E4E4; }\n      .flat-blue .pricing-table .pt-header .plan-pricing .pricing {\n        text-shadow: 0 1px 1px #FFF; }\n    .flat-blue .pricing-table .pt-body {\n      background-color: #F9F9F9; }\n      .flat-blue .pricing-table .pt-body .plan-detail {\n        border-top: 1px dashed rgba(255, 255, 255, 0.6);\n        padding-top: 1em;\n        margin-top: 1em; }\n    .flat-blue .pricing-table .pt-footer {\n      background-color: #F9F9F9; }\n  .flat-blue .pricing-table.dark-blue .pt-header {\n    background-color: #353d47;\n    color: #FFF; }\n  .flat-blue .pricing-table.dark-blue .pt-body {\n    background-color: #9eaabd;\n    color: #363c46; }\n  .flat-blue .pricing-table.green .pt-header {\n    background-color: #1ABC9C;\n    color: #FFF; }\n  .flat-blue .pricing-table.green .pt-body {\n    background-color: #99e9d9;\n    color: #006551; }\n  .flat-blue .pricing-table.blue .pt-header {\n    background-color: #22A7F0;\n    color: #FFF; }\n  .flat-blue .pricing-table.blue .pt-body {\n    background-color: #91d5fb;\n    color: #09486b; }\n  .flat-blue .pricing-table.yellow .pt-header {\n    background-color: #FABE28;\n    color: #FFF; }\n  .flat-blue .pricing-table.yellow .pt-body {\n    background-color: #ffe5a2;\n    color: #85630f; }\n  .flat-blue .pricing-table.red .pt-header {\n    background-color: #FA2A00;\n    color: #FFF; }\n  .flat-blue .pricing-table.red .pt-body {\n    background-color: #ffb8aa;\n    color: #7c1a06; }\n\n.flat-blue.landing-page .navbar-inverse .navbar-toggle:focus, .flat-blue.landing-page .navbar-inverse .navbar-toggle:hover {\n  background-color: transparent; }\n\n.flat-blue.landing-page .navbar {\n  background-color: transparent;\n  box-shadow: none; }\n  .flat-blue.landing-page .navbar .navbar-nav > .active > a {\n    background-color: transparent; }\n  .flat-blue.landing-page .navbar .navbar-nav > li {\n    border-left: 0px solid #F9F9F9; }\n    .flat-blue.landing-page .navbar .navbar-nav > li > a {\n      color: #FFF; }\n  .flat-blue.landing-page .navbar .navbar-collapse {\n    border: 0; }\n\n.flat-blue.landing-page .navbar.affix .navbar-nav > li > a {\n  color: #353d47; }\n\n.flat-blue.landing-page .navbar.affix .navbar-nav > li:hover > a {\n  color: #22A7F0; }\n\n@media (max-width: 768px) {\n  .flat-blue.landing-page .navbar .navbar-collapse {\n    background-color: #333; }\n  .flat-blue.landing-page .navbar .navbar-right {\n    background-color: transparent;\n    color: #FFF; }\n  .flat-blue.landing-page .navbar.affix .navbar-nav > li > a {\n    color: #FFF; } }\n\n.flat-blue.landing-page .navbar.affix .navbar-brand {\n  color: #353d47; }\n\n.flat-blue.landing-page .navbar.affix .navbar-toggle .icon-bar {\n  background-color: #353d47; }\n\n.flat-blue.landing-page .app-header .app-btn {\n  background-color: transparent;\n  border: 2px solid #FFF; }\n\n.flat-blue.landing-page .app-content-a {\n  background-color: #EAEAEA; }\n", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "html {\n  height: 100%; }\n\nbody {\n  padding-top: 0px;\n  height: 100%;\n  position: relative;\n  font-size: 13px; }\n\n* {\n  outline: none; }\n\n.row > [class*=\"col-\"] {\n  margin-bottom: 25px; }\n\n.row.no-margin-bottom > [class*=\"col-\"] {\n  margin-bottom: 10px; }\n\n.row.no-gap {\n  margin-left: 0;\n  margin-right: 0; }\n  .row.no-gap > [class*=\"col-\"] {\n    padding-left: 0;\n    padding-right: 0px; }\n\n.no-padding {\n  padding: 0px !important; }\n\n.float-left {\n  float: left; }\n\n.float-right {\n  float: right; }\n\n.clear-both {\n  clear: both; }\n\n.no-margin-bottom {\n  margin-bottom: 0; }\n\n.no-margin {\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0; }\n\na {\n  text-decoration: none; }\n\na:hover {\n  text-decoration: none; }\n\n.font-weight-300 {\n  font-weight: 300; }\n\n.text-indent {\n  text-indent: 1em; }\n\n.navbar {\n  z-index: 10001;\n  padding-left: 60px;\n  -webkit-transition: all 0.25s;\n  transition: all 0.25s; }\n  .navbar > .container, .navbar > .container-fluid {\n    z-index: 10001; }\n    .navbar > .container .navbar-brand, .navbar > .container-fluid .navbar-brand {\n      height: 60px;\n      line-height: 60px;\n      margin-left: 0px;\n      font-family: 'Roboto Condensed', sans-serif;\n      font-weight: 400;\n      padding: 0;\n      font-size: 1.5em; }\n      .navbar > .container .navbar-brand .fa-angle-right, .navbar > .container-fluid .navbar-brand .fa-angle-right {\n        margin-left: 5px;\n        margin-right: 5px; }\n    .navbar > .container .navbar-expand-toggle, .navbar > .container-fluid .navbar-expand-toggle {\n      width: 60px;\n      height: 60px;\n      background-color: transparent;\n      border: 0px;\n      float: left;\n      -moz-transition: all 0.25s linear;\n      -webkit-transition: all 0.25s linear;\n      transition: all 0.25s linear;\n      opacity: 0.75; }\n    .navbar > .container .navbar-expand-toggle .icon, .navbar > .container-fluid .navbar-expand-toggle .icon {\n      font-size: 1.4em; }\n    .navbar > .container .navbar-right-expand-toggle, .navbar > .container-fluid .navbar-right-expand-toggle {\n      width: 60px;\n      height: 60px;\n      background-color: transparent;\n      border: 0px;\n      position: absolute;\n      right: 0;\n      -moz-transition: all 0.25s linear;\n      -webkit-transition: all 0.25s linear;\n      transition: all 0.25s linear;\n      opacity: 0.75; }\n    .navbar > .container .navbar-right-expand-toggle .icon, .navbar > .container-fluid .navbar-right-expand-toggle .icon {\n      font-size: 1.4em; }\n  .navbar .navbar-breadcrumb {\n    margin-left: 0px;\n    background-color: transparent;\n    padding: 0px;\n    float: left; }\n    .navbar .navbar-breadcrumb > li {\n      height: 60px;\n      line-height: 60px;\n      vertical-align: middle;\n      font-family: 'Roboto Condensed', sans-serif;\n      font-size: 1.5em; }\n  .navbar .navbar-nav > li > a {\n    font-family: 'Roboto Condensed', sans-serif;\n    height: 60px;\n    line-height: 60px;\n    padding: 0px 20px 0px 20px; }\n  .navbar .dropdown-menu {\n    padding: 0;\n    border: 0;\n    border-bottom-left-radius: 2px;\n    border-bottom-right-radius: 2px;\n    animation-duration: 0.4s;\n    -webkit-animation-duration: 0.4s;\n    z-index: -1;\n    position: absolute; }\n    .navbar .dropdown-menu .title {\n      font-family: 'Roboto Condensed', sans-serif;\n      padding: 5px 10px;\n      -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n      -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); }\n    .navbar .dropdown-menu .message {\n      font-family: 'Roboto Condensed', sans-serif;\n      text-align: center;\n      padding: 10px 20px; }\n    .navbar .dropdown-menu .notifications.list-group {\n      list-style: none;\n      padding: 0;\n      margin: 0; }\n      .navbar .dropdown-menu .notifications.list-group .list-group-item {\n        min-width: 250px;\n        padding: 8px;\n        border: 0;\n        border-bottom: 1px solid #EEE; }\n        .navbar .dropdown-menu .notifications.list-group .list-group-item .icon {\n          margin-right: 5px; }\n      .navbar .dropdown-menu .notifications.list-group .badge {\n        border-radius: 1em; }\n      .navbar .dropdown-menu .notifications.list-group .list-group-item:last-child {\n        border-bottom-right-radius: 0px;\n        border-bottom-left-radius: 0px; }\n      .navbar .dropdown-menu .notifications.list-group .list-group-item:first-child {\n        border-top-right-radius: 0px;\n        border-top-left-radius: 0px; }\n      .navbar .dropdown-menu .notifications.list-group a.list-group-item:hover {\n        cursor: pointer; }\n  .navbar .dropdown.profile .dropdown-menu {\n    width: 305px;\n    padding-bottom: 0px;\n    text-align: center; }\n    .navbar .dropdown.profile .dropdown-menu li.profile-img {\n      padding: 0px;\n      max-height: 300px;\n      overflow: hidden; }\n      .navbar .dropdown.profile .dropdown-menu li.profile-img img.profile-img {\n        width: 100%;\n        height: auto;\n        margin: 0px;\n        border: 0; }\n    .navbar .dropdown.profile .dropdown-menu .profile-info {\n      font-family: 'Roboto Condensed', sans-serif;\n      padding: 15px; }\n      .navbar .dropdown.profile .dropdown-menu .profile-info .username {\n        font-size: 1.8em; }\n\n.app-container {\n  min-height: 100%;\n  position: relative;\n  padding-bottom: 30px; }\n  .app-container .app-footer {\n    display: block;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    left: 65px;\n    -webkit-transition: all 0.25s;\n    transition: all 0.25s;\n    font-size: 12px;\n    font-family: 'Roboto Condensed', sans-serif; }\n    .app-container .app-footer .wrapper {\n      padding: 10px 35px;\n      padding-left: 25px;\n      height: 50px;\n      line-height: 50px;\n      vertical-align: middle; }\n  .app-container .content-container {\n    margin-right: 0;\n    margin-left: 0; }\n    .app-container .content-container .side-menu {\n      overflow-y: auto;\n      z-index: 100000;\n      position: fixed;\n      width: 60px;\n      height: 100%;\n      -webkit-transition: all 0.25s;\n      transition: all 0.25s; }\n      .app-container .content-container .side-menu .navbar-header {\n        width: 100%;\n        border-bottom: 0px solid #e7e7e7; }\n        .app-container .content-container .side-menu .navbar-header .navbar-brand {\n          width: 455px;\n          line-height: 60px;\n          height: 60px;\n          padding: 0;\n          width: 100%;\n          overflow: hidden;\n          font-family: 'Roboto Condensed', sans-serif; }\n          .app-container .content-container .side-menu .navbar-header .navbar-brand .icon {\n            width: 60px;\n            text-align: center;\n            display: inline-block; }\n          .app-container .content-container .side-menu .navbar-header .navbar-brand .title {\n            margin-left: -10px;\n            display: none; }\n        .app-container .content-container .side-menu .navbar-header .navbar-expand-toggle {\n          position: absolute;\n          right: 0;\n          width: 60px;\n          height: 60px;\n          background-color: transparent;\n          border: 0px;\n          -moz-transition: all 0.25s linear;\n          -webkit-transition: all 0.25s linear;\n          transition: all 0.25s linear;\n          opacity: 0.75; }\n      .app-container .content-container .side-menu .navbar {\n        border: none;\n        padding-left: 0px; }\n      .app-container .content-container .side-menu .navbar-nav li {\n        display: block;\n        width: 100%;\n        overflow: hidden; }\n        .app-container .content-container .side-menu .navbar-nav li a {\n          font-family: 'Roboto Condensed', sans-serif;\n          padding: 0 10px 0 10px;\n          height: 46px;\n          line-height: 46px;\n          display: block;\n          white-space: nowrap; }\n          .app-container .content-container .side-menu .navbar-nav li a .icon {\n            margin-left: 0px;\n            width: 38px;\n            text-align: center;\n            font-size: 1.1em;\n            display: inline-block; }\n          .app-container .content-container .side-menu .navbar-nav li a .title {\n            width: 0px;\n            white-space: nowrap;\n            padding-left: 6px;\n            display: none; }\n      .app-container .content-container .side-menu .navbar-nav li.dropdown {\n        border: 0;\n        margin-bottom: 0;\n        border-radius: 0;\n        box-shadow: none; }\n        .app-container .content-container .side-menu .navbar-nav li.dropdown ul li a {\n          height: 44px;\n          line-height: 44px;\n          vertical-align: middle;\n          padding: 0em 1.2em; }\n        .app-container .content-container .side-menu .navbar-nav li.dropdown > a:after {\n          content: \"\";\n          position: absolute;\n          right: 1em; }\n      .app-container .content-container .side-menu .navbar-nav .panel-collapse.in {\n        display: none; }\n    .app-container .content-container .side-menu:hover {\n      width: 250px; }\n      .app-container .content-container .side-menu:hover .navbar-header .navbar-brand .title {\n        display: inline-block; }\n      .app-container .content-container .side-menu:hover .navbar-nav li a .title {\n        width: 192px;\n        display: inline-block; }\n      .app-container .content-container .side-menu:hover .navbar-nav li.dropdown > a:after {\n        font-family: FontAwesome;\n        content: \"\\F107\";\n        position: absolute;\n        right: 1em; }\n      .app-container .content-container .side-menu:hover .panel-collapse.in {\n        display: block; }\n    .app-container .content-container .side-body {\n      padding-top: 70px; }\n    .app-container .content-container .side-body.padding-top {\n      padding-top: 84px; }\n\n.app-container.expanded .app-footer {\n  left: 250px; }\n  .app-container.expanded .app-footer .wrapper {\n    padding-left: 25px; }\n\n.app-container.expanded .content-container .navbar-top {\n  padding-left: 250px; }\n\n.app-container.expanded .content-container .side-menu {\n  width: 250px; }\n  .app-container.expanded .content-container .side-menu .navbar-header .navbar-brand .title {\n    display: inline-block; }\n  .app-container.expanded .content-container .side-menu .navbar-nav li a .title {\n    display: inline-block; }\n  .app-container.expanded .content-container .side-menu .navbar-nav li .panel-collapse.in {\n    display: block; }\n  .app-container.expanded .content-container .side-menu .navbar-nav li.dropdown > a:after {\n    font-family: FontAwesome;\n    content: \"\\F107\";\n    position: absolute;\n    right: 1em; }\n\n.container-fluid > .navbar-collapse, .container-fluid > .navbar-header, .container > .navbar-collapse, .container > .navbar-header {\n  margin-left: -15px;\n  margin-right: -15px; }\n\n.page-title {\n  font-family: 'Roboto Condensed', sans-serif;\n  margin-left: -10px;\n  margin-right: -10px;\n  padding: 15px 10px;\n  margin-bottom: 0px;\n  height: auto; }\n  .page-title .title {\n    font-size: 2em; }\n  .page-title .page-action {\n    float: right;\n    height: 40px;\n    line-height: 40px;\n    vertical-align: middle; }\n\n.sub-title {\n  font-family: 'Roboto Condensed', sans-serif; }\n  .sub-title > * {\n    display: inline-block; }\n  .sub-title h3 {\n    margin-right: 10px; }\n  .sub-title .description {\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 0.9em; }\n  .sub-title .action .btn {\n    padding: 0 0.5em; }\n\n/* Main body section */\n.app-container .side-body {\n  margin-left: 75px;\n  margin-right: 15px;\n  -webkit-transition: all 0.25s;\n  transition: all 0.25s; }\n\n.app-container.expanded .side-body {\n  margin-left: 260px; }\n\n/* small screen */\n@media (max-width: 768px) {\n  .navbar {\n    padding-left: 0; }\n    .navbar .navbar-header {\n      width: auto;\n      display: block; }\n    .navbar .navbar-nav {\n      width: auto;\n      margin: 0; }\n      .navbar .navbar-nav > li {\n        display: inline-block; }\n    .navbar .navbar-right {\n      position: absolute;\n      top: 0;\n      right: -100%;\n      height: 100%;\n      width: 100%;\n      -moz-transition: all 0.25s linear;\n      -webkit-transition: all 0.25s linear;\n      transition: all 0.25s linear; }\n      .navbar .navbar-right .open .dropdown-menu {\n        position: absolute; }\n    .navbar .navbar-right.expanded {\n      right: 0; }\n  .app-container .navbar-top {\n    min-width: 300px; }\n  .app-container .content-container .side-menu {\n    margin-left: -250px;\n    width: 0px; }\n  .app-container .content-container .side-body {\n    margin-left: 10px; }\n  .app-container.expanded .navbar-top {\n    min-width: 480px;\n    padding-left: 0px; }\n  .app-container.expanded .side-menu {\n    margin-left: 0px;\n    width: 250px; }\n  .app-container.expanded .side-body {\n    margin-left: 10px; }\n  .app-container .app-footer .wrapper, .app-container.expanded .app-footer .wrapper {\n    padding-left: 25px; } }\n\n/* Card */\n.card {\n  background-color: #FFF;\n  border-radius: 1px;\n  overflow: hidden;\n  position: relative; }\n  .card .card-body {\n    padding: 25px; }\n    .card .card-body .sub-title {\n      font-size: 1.2em;\n      padding: 1.2em 0em 0.4em 0em;\n      margin-bottom: 25px; }\n      .card .card-body .sub-title .description {\n        padding-left: 0.4em;\n        font-size: 0.8em;\n        opacity: 0.8; }\n  .card .card-body.half-padding {\n    padding: 12.5px; }\n  .card .card-header .card-title {\n    padding: 1.2em 25px;\n    float: left; }\n    .card .card-header .card-title .title {\n      font-family: 'Roboto Condensed', sans-serif;\n      font-size: 1.5em;\n      text-decoration: none; }\n  .card .card-header .pull-right {\n    padding: 0.5em 1em; }\n  .card .card-header:after {\n    content: '';\n    display: block;\n    clear: both; }\n  .card .card-profile-img img {\n    width: 100%;\n    height: auto; }\n  .card .card-jumbotron {\n    padding: 1.5em 1.5em; }\n\n.card:hover .card-header .title {\n  text-decoration: none !important; }\n\n.card.summary-inline .card-body {\n  padding: 20px; }\n  .card.summary-inline .card-body .content {\n    float: right; }\n    .card.summary-inline .card-body .content .title {\n      font-family: 'Lato', sans-serif;\n      margin-top: -0.3em;\n      font-size: 3.5em;\n      text-align: right; }\n    .card.summary-inline .card-body .content .sub-title {\n      font-family: 'Lato', sans-serif;\n      font-size: 0.9em;\n      text-align: right;\n      margin-top: -10px;\n      margin-bottom: 0;\n      padding: 0;\n      border-bottom: 0; }\n\n.card.profile .card-body {\n  padding: 0.5em 0.8em; }\n\n.card.profile .card-footer {\n  padding: 0.5em 0.8em; }\n\n.panel {\n  border-radius: 1px; }\n  .panel .panel-heading {\n    border-top-left-radius: 2px;\n    border-top-right-radius: 2px; }\n\n.chart {\n  padding: 15px; }\n\n.chart.no-padding {\n  padding: 0;\n  margin-bottom: -5px; }\n\n.btn {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-radius: 1px;\n  border-width: 1px;\n  font-family: 'Roboto Condensed', sans-serif; }\n\n.btn-group-lg > .btn, .btn-group-lg > .btn-lg {\n  border-radius: 1px; }\n\n.progress {\n  border-radius: 1px;\n  box-shadow: none; }\n  .progress .progress-bar {\n    box-shadow: none; }\n\n.pagination {\n  margin-top: 5px;\n  margin-bottom: 5px; }\n  .pagination li:first-child > a, .pagination li:first-child span {\n    border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px; }\n  .pagination li:last-child > a, .pagination li:last-child span {\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px; }\n\n.form-control {\n  border-radius: 1px;\n  box-shadow: none; }\n\n.bs-example-modal .modal {\n  z-index: 100;\n  position: relative;\n  display: block; }\n\n.modal {\n  z-index: 100001; }\n  .modal .modal-dialog .modal-header {\n    font-family: 'Roboto Condensed', sans-serif; }\n  .modal .modal-dialog .modal-content {\n    border-radius: 1px;\n    box-shadow: none; }\n  .modal .modal-dialog .modal-footer .btn {\n    margin-top: 0;\n    margin-bottom: 0; }\n\n.modal-backdrop {\n  z-index: 100000; }\n\n.modal-backdrop.in {\n  opacity: 0.8; }\n\n.alert {\n  border-width: 0px;\n  border-radius: 1px; }\n\n.list-group .badge {\n  border-radius: 1px; }\n\n.list-group .list-group-item:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n\n.list-group .list-group-item:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n\n.checkbox3, .radio3 {\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.checkbox-inline {\n  margin-bottom: 5px; }\n\n.checkbox3 label, .radio3 label {\n  padding: 8px 0 8px 30px; }\n\n.checkbox3 label::before, .radio3 label::before {\n  top: 5px; }\n\n.checkbox3 label::after, .radio3 label::after {\n  top: 5px; }\n\n.checkbox3 label, .radio3 label, .checkbox-inline, .radio-inline {\n  font-weight: normal; }\n\n.bootstrap-switch {\n  border-radius: 1px; }\n\n.thumbnail {\n  border-radius: 1px;\n  padding: 0; }\n  .thumbnail .caption {\n    padding: 0.5em 1.2em; }\n    .thumbnail .caption .h1, .thumbnail .caption .h2, .thumbnail .caption .h3, .thumbnail .caption h1, .thumbnail .caption h2, .thumbnail .caption h3 {\n      margin-top: 15px; }\n\nbody.login-page {\n  background: url(\"https://100l-app.teleows.com/servicecreator/fileservice/get?batchId=9acf4c9d-b0e0-43ce-94c7-7fb29ed8bbb6&attachmentId=666966\")no-repeat center center fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover; }\n  body.login-page .login-box {\n    width: 100%;\n    max-width: 320px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 0; }\n    body.login-page .login-box > .title {\n      margin-bottom: 1em; }\n    body.login-page .login-box > .row {\n      margin-left: 0;\n      margin-right: 0;\n      margin-bottom: 0; }\n  body.login-page .login-form {\n    padding: 0em; }\n    body.login-page .login-form .login-header {\n      margin-bottom: 1.2em;\n      font-size: 1.5em; }\n    body.login-page .login-form .login-body {\n      padding: 1.5em;\n      border-radius: 1px; }\n    body.login-page .login-form input {\n      margin-bottom: 0.8em;\n      margin-top: 0.5em;\n      padding: 1.2em 1em;\n      font-size: 1.1em;\n      border-radius: 1px; }\n  body.login-page .login-button .btn {\n    padding: 0.5em 2em;\n    font-size: 1.1em;\n    border-radius: 1px;\n    margin-bottom: 0; }\n  body.login-page .login-footer {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    width: 100%;\n    text-align: center;\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px; }\n\n@media (max-width: 768px) {\n  body.login-page .login-form .login-header {\n    margin-bottom: 1em; }\n  body.login-page .login-box {\n    width: 100%;\n    max-width: 260px; } }\n\n.dataTables_wrapper .row {\n  margin-bottom: 0.5em; }\n\n.dataTables_wrapper .top {\n  margin-bottom: 6px;\n  position: relative; }\n\n.dataTables_wrapper .bottom {\n  margin-top: 6px; }\n\n.dataTables_wrapper .top:after, .dataTables_wrapper .bottom:after {\n  position: relative;\n  clear: both;\n  display: block;\n  content: ''; }\n\n.dataTables_wrapper .dataTables_paginate .paginate_button {\n  padding: 0;\n  margin-left: 0;\n  border: 0; }\n\n.dataTables_wrapper .dataTables_paginate .paginate_button:hover, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active {\n  border: 0; }\n\n.dataTables_wrapper tfoot {\n  display: none; }\n\n.code-preview {\n  width: 100%;\n  min-height: 400px; }\n\n.nav-tabs > li {\n  margin-bottom: -1px; }\n  .nav-tabs > li > a {\n    border-radius: 0;\n    border: 0; }\n\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {\n  border-radius: 0;\n  border-top: 0; }\n\n.tab-content > div {\n  padding: 20px; }\n\n.tabs-below > .nav-tabs,\n.tabs-right > .nav-tabs,\n.tabs-left > .nav-tabs {\n  border-bottom: 0; }\n\n.tab-content > .tab-pane,\n.pill-content > .pill-pane {\n  display: none; }\n\n.tab-content > .active,\n.pill-content > .active {\n  display: block; }\n\n.tabs-below > .nav-tabs > li {\n  margin-top: -1px;\n  margin-bottom: 0; }\n\n.tabs-below > .nav-tabs > li > a:hover,\n.tabs-below > .nav-tabs > li > a:focus {\n  border-bottom-color: transparent; }\n\n.tabs-left > .nav-tabs > li,\n.tabs-right > .nav-tabs > li {\n  float: none; }\n\n.tabs-left > .nav-tabs > li > a,\n.tabs-right > .nav-tabs > li > a {\n  min-width: 74px;\n  margin-right: 0;\n  margin-bottom: 3px; }\n\n.tabs-left, .tabs-right {\n  display: table; }\n\n.tabs-left > .nav-tabs {\n  display: table-cell;\n  margin-right: 19px; }\n\n.tabs-left > .nav-tabs > li > a {\n  margin-right: -1px; }\n\n.tabs-right > .nav-tabs {\n  display: table-cell;\n  margin-left: 19px; }\n\n.tabs-right > .nav-tabs > li > a {\n  margin-left: -1px; }\n\n.tab:after {\n  content: '';\n  display: block;\n  clear: both; }\n\n.step .nav-tabs {\n  border-bottom: 0px;\n  margin-left: 0;\n  margin-right: 0;\n  margin-bottom: 20px; }\n  .step .nav-tabs > li[class^=\"col-\"] {\n    padding-left: 0;\n    padding-right: 0; }\n  .step .nav-tabs > li:first-child {\n    border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px; }\n  .step .nav-tabs > li {\n    border-right: 0; }\n    .step .nav-tabs > li > a {\n      margin-right: 0;\n      display: block;\n      width: 100%;\n      padding: 1em;\n      padding-left: 2em;\n      vertical-align: middle;\n      white-space: nowrap;\n      overflow: hidden;\n      text-align: left;\n      border-bottom: 0; }\n      .step .nav-tabs > li > a .icon {\n        font-size: 2.5em;\n        display: inline-block;\n        margin-right: 0.25em;\n        vertical-align: middle; }\n      .step .nav-tabs > li > a .step-title {\n        width: auto;\n        display: inline-block;\n        vertical-align: middle;\n        text-align: left; }\n        .step .nav-tabs > li > a .step-title .title {\n          font-weight: bold;\n          font-size: 1.1em; }\n        .step .nav-tabs > li > a .step-title .description {\n          font-size: 0.9em; }\n    .step .nav-tabs > li > a:hover {\n      border-bottom: 0; }\n  .step .nav-tabs > li:after {\n    content: \"\";\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: 50%;\n    right: -15px;\n    transform: translate(0%, -50%);\n    z-index: 100001; }\n  .step .nav-tabs > li:before {\n    content: \"\";\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: 50%;\n    right: -16px;\n    transform: translate(0%, -50%);\n    z-index: 100000; }\n  .step .nav-tabs > li.active > a, .step .nav-tabs > li.active > a:focus, .step .nav-tabs > li.active > a:hover {\n    border: 0;\n    border-radius: 0;\n    border-bottom: 0; }\n  .step .nav-tabs > li:last-child {\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px; }\n  .step .nav-tabs > li:last-child:before, .step .nav-tabs > li:last-child:after {\n    display: none; }\n\n.step .tab-content > div {\n  padding: 0; }\n\n.step.card-no-padding .nav-tabs {\n  margin-bottom: 0px; }\n  .step.card-no-padding .nav-tabs > li {\n    border-radius: 0; }\n\n.step.card-no-padding .tab-content > div {\n  padding: 20px; }\n\n.step.tabs-left .tab-content {\n  padding: 5px 15px;\n  display: table-cell;\n  vertical-align: top; }\n  .step.tabs-left .tab-content > div {\n    padding: 20px; }\n\n.step.tabs-left .nav-tabs {\n  border-bottom: 0px;\n  margin-left: 0;\n  margin-right: 0;\n  margin-bottom: 0; }\n  .step.tabs-left .nav-tabs > li[class^=\"col-\"] {\n    padding-left: 0;\n    padding-right: 0; }\n  .step.tabs-left .nav-tabs > li:first-child {\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px; }\n  .step.tabs-left .nav-tabs > li {\n    border-right: 0px;\n    min-width: 250px;\n    display: table;\n    width: 250px; }\n    .step.tabs-left .nav-tabs > li > a {\n      margin-right: 0;\n      display: table-cell;\n      width: 100%;\n      padding: 1em;\n      padding-left: 2em;\n      vertical-align: middle;\n      table-layout: fixed;\n      white-space: nowrap;\n      overflow: hidden; }\n      .step.tabs-left .nav-tabs > li > a .icon {\n        font-size: 2.5em;\n        display: inline-block;\n        margin-right: 0.25em;\n        vertical-align: middle; }\n      .step.tabs-left .nav-tabs > li > a .step-title {\n        width: auto;\n        display: inline-block;\n        vertical-align: middle; }\n        .step.tabs-left .nav-tabs > li > a .step-title .title {\n          font-weight: bold;\n          font-size: 1.1em; }\n        .step.tabs-left .nav-tabs > li > a .step-title .description {\n          font-size: 0.9em; }\n    .step.tabs-left .nav-tabs > li > a:hover {\n      border-bottom: 0; }\n  .step.tabs-left .nav-tabs > li:after {\n    content: \"\";\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: 50%;\n    transform: translate(0%, -50%);\n    z-index: 10000;\n    display: none; }\n  .step.tabs-left .nav-tabs > li:before {\n    content: \"\";\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: 50%;\n    right: -16px;\n    transform: translate(0%, -50%);\n    z-index: 10000;\n    display: none; }\n  .step.tabs-left .nav-tabs > li.active > a, .step.tabs-left .nav-tabs > li.active > a:focus, .step.tabs-left .nav-tabs > li.active > a:hover {\n    border: 0;\n    border-radius: 0;\n    border-bottom: 0; }\n  .step.tabs-left .nav-tabs > li.active:after, .step.tabs-left .nav-tabs > li.active:before {\n    display: block; }\n  .step.tabs-left .nav-tabs > li:last-child {\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px; }\n\n@media (max-width: 768px) {\n  .step .nav-tabs > li:after {\n    display: none; }\n  .step .nav-tabs > li:before {\n    display: none; } }\n\n.loader-container {\n  display: none; }\n\n.loader .loader-container {\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1003; }\n\n.loader:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.9);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1001;\n  border-radius: 1px; }\n\n.pricing-table .pt-header {\n  text-align: center;\n  padding: 1em; }\n  .pricing-table .pt-header .plan-pricing .pricing {\n    font-size: 2.5em; }\n  .pricing-table .pt-header .plan-pricing .pricing-type {\n    opacity: 0.9; }\n\n.pricing-table .pt-body {\n  padding: 1em;\n  text-align: center; }\n  .pricing-table .pt-body .plan-detail {\n    padding: 0;\n    margin: 0;\n    list-style: none; }\n\n.pricing-table .pt-footer {\n  padding: 0.75em;\n  text-align: center; }\n\n.icons-list {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n  .icons-list > li {\n    float: left;\n    text-align: center;\n    width: 100px;\n    height: 100px;\n    padding: 8px; }\n    .icons-list > li span {\n      display: block; }\n    .icons-list > li .glyphicon {\n      font-size: 1.5em; }\n    .icons-list > li .glyphicon-class {\n      margin-top: 8px;\n      font-size: 0.75em; }\n\n.icons-list:after {\n  content: '';\n  display: block;\n  position: relative;\n  clear: both; }\n\n.row.example > [class*='col-'] > div {\n  background-color: #EEE;\n  padding: 10px;\n  border: 1px solid #DDD; }\n\n.breadcrumb {\n  margin-bottom: 0; }\n  .breadcrumb > li + li:before {\n    font-family: FontAwesome;\n    content: '\\F105';\n    margin-right: 3px; }\n\n.message-list {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n  .message-list > a > li {\n    border-bottom: 1px dotted #EEE;\n    padding: 8px; }\n    .message-list > a > li > .message-block {\n      padding-left: 70px;\n      min-height: 60px; }\n      .message-list > a > li > .message-block .username {\n        font-size: 12px;\n        font-weight: bold; }\n      .message-list > a > li > .message-block .message-datetime {\n        font-size: 10px;\n        color: #AAA; }\n      .message-list > a > li > .message-block .message {\n        font-size: 12px; }\n    .message-list > a > li .profile-img {\n      width: 60px;\n      height: 60px; }\n  .message-list > a:hover li {\n    background-color: rgba(0, 0, 0, 0.01); }\n\n.bs-example > * {\n  margin-bottom: 20px; }\n\n.bs-example > *:last-child {\n  margin-bottom: 5px; }\n\n.landing-page {\n  font-family: 'Roboto Condensed', sans-serif; }\n  .landing-page .navbar .navbar-toggle {\n    position: absolute;\n    right: 0;\n    border-radius: 0;\n    border: 0;\n    height: 44px;\n    padding: 0 15px; }\n  .landing-page .app-header {\n    padding-top: 100px;\n    background-repeat: no-repeat;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    background-position: center;\n    margin-bottom: 0; }\n    .landing-page .app-header .app-logo {\n      margin-bottom: 20px; }\n    .landing-page .app-header .app-description {\n      margin-bottom: 40px; }\n  .landing-page .app-content-a, .landing-page .app-content-b {\n    padding-top: 50px;\n    padding-bottom: 20px; }\n  .landing-page .app-content-b.feature-1 {\n    background-repeat: no-repeat;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    background-position: center;\n    margin-bottom: 0; }\n  .landing-page .app-content-b.contact-us {\n    padding-top: 60px;\n    padding-bottom: 60px;\n    background-repeat: no-repeat;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    background-position: center;\n    margin-bottom: 0; }\n    .landing-page .app-content-b.contact-us .contact-us-header {\n      font-weight: 300;\n      font-size: 46px; }\n    .landing-page .app-content-b.contact-us .contact-us-description {\n      font-weight: 300;\n      font-size: 18px;\n      opacity: 0.9;\n      text-indent: 40px; }\n    .landing-page .app-content-b.contact-us form {\n      margin-top: 20px; }\n      .landing-page .app-content-b.contact-us form input {\n        padding: 10px;\n        width: 100%;\n        border: 0px; }\n  .landing-page .app-content-header {\n    font-weight: 300;\n    font-size: 46px; }\n  .landing-page .app-content-description {\n    font-weight: 300;\n    font-size: 18px; }\n  .landing-page .app-footer {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    margin-bottom: 0; }\n    .landing-page .app-footer p {\n      margin: 0; }\n  .landing-page .navbar-affix {\n    width: 100%;\n    height: 60px;\n    border-top: 2px rgba(78, 205, 196, 0.8);\n    -webkit-transition: all 0.2s ease-in;\n    transition: all 0.2s ease-in;\n    position: fixed;\n    -webkit-box-shadow: 0px 0px 6px 0px rgba(96, 100, 109, 0.4);\n    box-shadow: 0px 0px 6px 0px rgba(96, 100, 109, 0.4); }\n  .landing-page .navbar.affix {\n    z-index: 4000;\n    background-color: rgba(255, 255, 255, 0.95) !important;\n    height: 60px;\n    opacity: 1;\n    margin-top: 0px; }\n  .landing-page .navbar-affix.affix li a {\n    height: 60px;\n    line-height: 60px; }\n  .landing-page .navbar-affix.affix .navbar-nav > li > a {\n    background-color: transparent;\n    font-weight: 400;\n    color: #333; }\n  .landing-page .navbar {\n    padding-left: 0px;\n    background-color: transparent;\n    box-shadow: none; }\n    .landing-page .navbar .navbar-right {\n      position: relative;\n      right: 0; }\n    .landing-page .navbar .navbar-header {\n      border-bottom: 0px solid #e7e7e7; }\n      .landing-page .navbar .navbar-header .navbar-brand {\n        width: 45px;\n        line-height: 60px;\n        height: 60px;\n        padding: 0;\n        width: 100%;\n        overflow: hidden;\n        padding-left: 0px;\n        font-family: 'Roboto Condensed', sans-serif; }\n        .landing-page .navbar .navbar-header .navbar-brand .icon {\n          width: 50px;\n          text-align: center;\n          display: inline-block; }\n        .landing-page .navbar .navbar-header .navbar-brand .title {\n          margin-left: -10px;\n          display: inline-block; }\n      .landing-page .navbar .navbar-header .navbar-expand-toggle {\n        position: absolute;\n        right: 0;\n        width: 60px;\n        height: 60px;\n        background-color: transparent;\n        border: 0px;\n        -moz-transition: all 0.25s linear;\n        -webkit-transition: all 0.25s linear;\n        transition: all 0.25s linear;\n        opacity: 0.75; }\n\n@media only screen and (max-width: 768px) {\n  .landing-page .navbar .navbar-header .navbar-brand {\n    padding-left: 15px; } }\n\n.row-example > [class*=\"col-\"] {\n  margin-bottom: 0px; }\n\n/* CUSTOMIZE THE NAVBAR\n-------------------------------------------------- */\n/* Special class on .container surrounding .navbar, used for positioning it into place. */\n.navbar-wrapper {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 20; }\n\n/* Flip around the padding for proper display in narrow viewports */\n.navbar-wrapper > .container {\n  padding-right: 0;\n  padding-left: 0; }\n\n.navbar-wrapper .navbar {\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.navbar-wrapper .navbar .container {\n  width: auto; }\n\n/* CUSTOMIZE THE CAROUSEL\n-------------------------------------------------- */\n/* Carousel base class */\n.carousel {\n  height: 500px;\n  margin-bottom: 60px; }\n\n/* Since positioning the image, we need to help out the caption */\n.carousel-caption {\n  z-index: 10; }\n\n/* Declare heights because of positioning of img element */\n.carousel .item {\n  height: 500px;\n  background-color: #777; }\n\n.carousel-inner > .item > img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  height: 500px; }\n\n/* MARKETING CONTENT\n-------------------------------------------------- */\n/* Center align the text within the three columns below the carousel */\n.marketing .col-lg-4 {\n  margin-bottom: 20px;\n  text-align: center; }\n\n.marketing h2 {\n  font-weight: normal; }\n\n.marketing .col-lg-4 p {\n  margin-right: 10px;\n  margin-left: 10px; }\n\n/* Featurettes\n------------------------- */\n.featurette-divider {\n  margin: 80px 0;\n  /* Space out the Bootstrap <hr> more */ }\n\n/* Thin out the marketing headings */\n.featurette-heading {\n  font-weight: 300;\n  line-height: 1;\n  letter-spacing: -1px; }\n\n/* RESPONSIVE CSS\n-------------------------------------------------- */\n@media (min-width: 768px) {\n  /* Navbar positioning foo */\n  .navbar-wrapper .container {\n    padding-right: 15px;\n    padding-left: 15px; }\n  .navbar-wrapper .navbar {\n    padding-right: 0;\n    padding-left: 0; }\n  /* The navbar becomes detached from the top, so we round the corners */\n  .navbar-wrapper .navbar {\n    border-radius: 4px; }\n  /* Bump up size of carousel content */\n  .carousel-caption p {\n    margin-bottom: 20px;\n    font-size: 21px;\n    line-height: 1.4; }\n  .featurette-heading {\n    font-size: 50px; } }\n\n@media (min-width: 992px) {\n  .featurette-heading {\n    margin-top: 100px;\n    margin-bottom: 20px; } }\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_flat_blue_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_flat_blue_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_flat_blue_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_style_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_style_css__);


let visits = __webpack_require__(3);
let smartEngine = __webpack_require__(9);
let templates = __webpack_require__(2);
let reports = __webpack_require__(1);
let indexDb = __webpack_require__(8);
let message = __webpack_require__(0);


(function () {
    let smartDocsOffline = {
        initApplication: function () {
            let reference = this;
            $.get("/views/dashboard.html", function (page) {
                $("#mainContent2").html(page);
                reference.addEventsToMenu();
                reference.loadNavBar();
            });
        },
        loadNavBar: function () {
            $(function () {
                $(".navbar-expand-toggle").click(function () {
                    $(".app-container").toggleClass("expanded");
                    return $(".navbar-expand-toggle").toggleClass("fa-rotate-90");
                });
                return $(".navbar-right-expand-toggle").click(function () {
                    $(".navbar-right").toggleClass("expanded");
                    return $(".navbar-right-expand-toggle").toggleClass("fa-rotate-90");
                });
            });

            $(function () {
                return $(".side-menu .nav .dropdown").on('show.bs.collapse', function () {
                    return $(".side-menu .nav .dropdown .collapse").collapse('hide');
                });
            });
        },
        addEventsToMenu: function () {
            let reference = this;
            let items = [
                { id: "itemInicio", page_route: "dashboard" },
                { id: "itemVisitas", page_route: "allVisits" },
                { id: "itemTemplates", page_route: "allTemplatesBoxes" },
                { id: "itemReportes", page_route: "myReports" },
                { id: "itemLogger", page_route: "myReportsLog" },
                { id: "itemFaq", page_route: "" }
            ];

            for (let item of items) {
                $("#" + item.id).click(function () {
                    reference.changePage(item.page_route);
                    reference.changeActiveMenu(item.id);
                });
            }
        },
        changeActiveMenu: function (id_page) {
            $(".active").removeClass("active");
            $("#" + id_page).addClass("active");
        },
        changePage: function (page_route) {
            let reference = this;
            $.get("/views/" + page_route + ".html", function (page) {
                $("#mainContent2").html(page);
                reference.loadResources(page_route);
            });
        },
        loadResources: function (page_route) {
            let reference = this;
            switch (page_route) {
                case "allVisits":
                    indexDb.getVisits().then(function () {
                        reference.fillVisitsPage();
                        reference.loadEventNewVisit();
                    });
                    break;
                case "allReportsRelated":
                    indexDb.getTemplates().then(function () {
                        return indexDb.getReports();
                    }).then(function () {
                        let reportsFiltered = reports.getReports().filter(function (report) {
                            return report.site == visits.visitSelected.visitId;
                        });
                        console.log("Reports Filtered", reportsFiltered);
                        reference.fillBoxesReportsRelated(reportsFiltered);
                    })
                    reference.addEventsReportRelated();
                    break;
                case "allTemplatesBoxes":
                    indexDb.getReports().then(function () {
                        reference.getAllTemplates();
                    });
                    break;
                case "newReport":
                    reference.showTemplate();
                    reference.saveAnswerEvent();
                    if (Object.keys(reports.reportSelected).length != 0) {
                        reference.fillAnswer();
                    }
                    break;
                case "myReports":
                    console.log("Start Fill Reports");
                    indexDb.getReports().then(function () {
                        reference.fillReportsPage();
                    });
                    break;
                case "myReportsLog":
                    indexDb.getReportsLog().then(function () {
                        reference.fillReportsLogPage();
                    });
                    break;
            }
        },
        loadEventNewVisit() {
            let reference = this;
            $("#new_VisitBtn").click(function () {
                $("#new_visit_modal").remove();
                $("body").append("<div class='fade modal modal-info'aria-hidden=true aria-labelledby=myModalLabel1 id=new_visit_modal role=dialog style=display:block tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel13> Registra una nueva visita </h4></div><div class='modal-body'><label class='text-right'>Nombre Sitio : </label><input id='site_name_register' type='text' class='form-control' placeholder='El nombre del sitio debe tener al menos 5 caracteres'><br><p style='text-align: center'><b>Nota:</b> Debes registrar una visita para poder crear reportes del sitio </p></div><div class='modal-footer'><button id='new_visit_register_btn' class='btn btn-info' disabled> Registrar </button> </div> </div></div></div>");
                $("#new_visit_modal").modal({ backdrop: 'static', keyboard: false });

                $("#site_name_register").on("input", function () {
                    let site = $("#site_name_register").val();

                    if (site.length > 5) {
                        $("#new_visit_register_btn").attr("disabled", false);
                    }
                    else {
                        $("#new_visit_register_btn").attr("disabled", true);
                    }
                });

                $("#new_visit_register_btn").click(function () {
                    let site = $("#site_name_register").val();
                    $("#new_visit_modal").modal('hide');
                    indexDb.addVisit(site).then(function () {
                        reference.changePage("allTemplatesBoxes");
                    });
                });
            });


        },
        addEventsReportRelated: function () {
            let reference = this;
            $("#add_reportBtn").click(function () {
                reference.changePage("allTemplatesBoxes");
            });

            $("#del_reportBtn").click(function () {
                alert("Se ha eliminado la visita");
            });
        },
        getAllTemplates: function () {
            let reference = this;
            if (navigator.onLine) {
                $.get("http://localhost:3000/templates/", function (templatesResponse) {
                    templates.templates = templatesResponse;
                    for (let template of templates.templates) {
                        indexDb.addTemplate(template.templateId, template.name, template.project, template.icon, template.content);
                    }
                    reference.fillTemplatesPage();

                })
            }
            else {
                indexDb.getTemplates();
                reference.fillTemplatesPage({});
            }
        },
        fillVisitsPage: function () {
            let reference = this;
            let visitsResponse = visits.getVisits();
            let cont = 0;
            for (let visit of visitsResponse) {
                $("#visitsNotFound").remove();
                $("#allVisitsDiv").append("<div class='col-sm-12 col-md-6 col-lg-6'><div class=pricing-table><div class=pt-header style=background-color:#fff><div class=plan-pricing><div class=pricing style=font-size:1.5em>" + visit.site + "</div><img style='width:100px' src='/img/visitIcon.svg' style=padding:10px><div class=pricing-type><!--<b>Id:</b>" + visit.visitId + "!--></div></div></div><div class=pt-footer><button id='attachReports" + cont + "' class='btn btn-primary' style='margin-right:5px;box-shadow: 2px 2px 2px #888888;' type=button>Ver Visita</button></div></div></div>");
                $("#attachReports" + cont).on("click", function (event) {
                    visits.visitSelected = visit;
                    reference.changePage("allReportsRelated");
                });
                cont++;
            }
        },
        fillBoxesReportsRelated: function (reportsFiltered) {
            let reference = this;
            let templatesResponse = templates.getTemplates();
            message.addMessageLoder("loaderMessage", "#mainContent2");
            message.changeMessageLoader("loaderMessage", "Filtrando Reportes Relacionados");
            let cont = 0;
            for (let report of reportsFiltered) {
                switch (report.status) {
                    case "SM-Status001":
                        report.status_name = "DRAFT";
                        report.status_background = "yellow";
                        report.status_class = "warning";
                        break;
                    case "SM-Status002":
                        report.status_name = "COMPLETED";
                        report.status_background = "blue";
                        report.status_class = "info";
                        break;
                }
                let templateFilter = templatesResponse.filter(function (template) {
                    return template.templateId == report.templateId;
                });
                templateFilter = templateFilter[0];
                console.log("Template Filter ", templateFilter);
                $("#allReportsRelatedDiv").append("<div class='col-sm-12 col-md-6 col-lg-6'><div class='pricing-table " + report.status_background + "'><div class=pt-header><div class=plan-pricing><div class=pricing style=font-size:1.5em>" + templateFilter.name + "</div><div class=pricing-type> Ultima Modificacion: " + report.lastModification.split("GMT")[0] + "</div></div></div><div class=pt-body><h4>" + report.status_name + "</h4><ul class=plan-detail><li><b>Report Id:<br></b>" + report.reportId + "</ul></div><div class=pt-footer><button id='viewReport_" + cont + "' class='btn btn-" + report.status_class + "'type=button>Ver Detalles</button></div></div></div>");
                $("#viewReport_" + cont).on("click", function (event) {
                    reports.reportSelected = report;
                    templates.templateSelected = templateFilter;
                    reference.changePage('newReport');
                });
                cont++;
            }
            $("#sdmTicket").text(reports.reportSelected.ticket_id);
            message.removeMessageLoader("#mainContent2");
        },
        fillTemplatesPage: function () {
            let reference = this;
            let templatesResponse = templates.getTemplates();
            for (let template of templatesResponse) {
                $("#templatesNotFound").remove();
                $("#allTemplatesDiv").append("<div class='col-sm-12 col-md-6 col-lg-6'><div class=pricing-table><div class=pt-header style=background-color:#fff><div class=plan-pricing><div class=pricing style=font-size:1.5em>" + template.name + "</div><img src='" + template.icon + "'style=padding:10px><div class=pricing-type><!--<b>Id:</b>" + template.templateId + "!--></div></div></div><div class=pt-footer><p><b>Ultima Actualizacion: </b> " + template.lastModification.split("GMT")[0] + " </p><button id='createTemplate'class='btn btn-primary' style='margin-right:5px;box-shadow: 2px 2px 2px #888888;' type=button>Crear Reporte</button></div></div></div>");
                $("#createTemplate").on("click", function (event) {
                    reports.reportSelected = {};
                    templates.templateSelected = template;
                    reference.changePage("newReport");
                });
            }
        },
        showTemplate: function () {
            let reference = this;
            smartEngine.executeEngine(templates.templateSelected.content);
            $('#templateNavTabs a:first').tab('show');
        },
        fillAnswer: function () {
            let reference = this;
            smartEngine.matchAnswers(reports.reportSelected.content);
        },
        saveAnswerEvent: function () {
            let reference = this;
            $("#btnSave").click(function () {
                let answer = smartEngine.saveAnswer();
                console.log("Smart Engine Answer : ", answer);
                let status;
                switch (answer.completed) {
                    case false:
                        status = "SM-Status001";
                        break;
                    case true:
                        status = "SM-Status002";
                        break;
                }

                let answerObj = JSON.parse(answer.userAnswer);

                if (Object.keys(reports.reportSelected).length == 0) {
                    indexDb.addReport(templates.templateSelected.templateId, visits.visitSelected.visitId, answerObj, status).then(function () {
                        reference.changePage("allVisits");
                    })
                        .catch(function (err) {
                            console.log(err);
                        });
                }
                else {
                    indexDb.updateReport(reports.reportSelected.reportId, status, answerObj).then(function () {
                        reports.reportSelected = {};
                        reference.changePage("allVisits");
                    });
                }
            });
        },
        fillReportsPage: function () {
            let reference = this;
            //let templatesResponse = templates.getTemplates();
            let reportsResponse = reports.getReports();
            console.log("Reports Response", reportsResponse);
            let cont = 0;
            for (let report of reportsResponse) {
                $("#dataTableAllReport > tbody").append("<tr><td style='cursor:pointer' id='allReports" + cont + "'>" + report.reportId + "</td><td> " + report.name + "</td><td>" + report.status + "</td><td>" + report.lastModification.split("GMT")[0] + "</td><td><input id='allReports" + cont + "Details' type='image' name='image' src='/img/eyeIcon.png'></td></tr>");
                $('#allReports' + cont).add('#allReports' + cont + "Details").on("click",
                    { "report": report }, function (event) {
                        reports.reportSelected = event.data.report;
                        indexDb.getTemplateByTemplateId(reports.reportSelected.templateId).then(function (template) {
                            console.log("Get Template By Id : " + template);
                            templates.templateSelected = template;
                            reference.changePage("newReport");
                        });
                    });
                cont += 1;
            }
        },
        fillReportsLogPage: function () {
            let reference = this;
            //let templatesResponse = templates.getTemplates();
            let reportsLogResponse = reports.getReportsLog();
            console.log("Reports Log Response", reportsLogResponse);
            let cont = 0;
            for (let reportLog of reportsLogResponse) {
                let background_status;
                switch (reportLog.status) {
                    case "SM-Status001":
                        background_status = "warning";
                        break;
                    case "SM-Status002":
                        background_status = "info";
                        break;
                }
                $("#dataTableAllReportLog > tbody").append("<tr class= '" + background_status + "' ><td>" + reportLog.reportId + "</td><td> " + reportLog.operation + "</td><td>" + reportLog.status + "</td><td>" + reportLog.operationDate.split("GMT")[0] + "</td></tr>");
            }
        }
    }

    smartDocsOffline.initApplication();
    indexDb.startIndexedDB();

})();

/***/ })
/******/ ]);