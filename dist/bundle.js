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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {module.exports = {
    addMessageLoder: function (selector, location) {
        $(location).addClass("loader");
        $(location).append("<div id='loader' class='loader-container text-center color-white'><div><i style='color:white' class='fa fa-spinner fa-pulse fa-3x'></i></div><div style='color:white'><h4>Smart Docs <br> <small> Cargando Recursos <div id='" + selector + "'> </div> </small> <br><small>... Se esta preparando para ti ...</small></h4><h5>Desarollado por: Huawei Colombia  <br> OSS IT Team </h5></div></div>");
    },
    changeMessageLoader: function (selector, msg) {
        console.log("Selector: " + selector);
        console.log("Message: " + msg);
        $("#" + selector).text(msg);
    },
    removeMessageLoader: function (location) {
        $("#loader").remove();
        $(location).removeClass("loader");
    },
    launchProcessImageModal: function () {
        $("#process_image_modal").remove();
        $("body").append("<div class='fade modal modal-warning'aria-hidden=true aria-labelledby=myModalLabel1 id=process_image_modal role=dialog style=display:block tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel13>La imagen esta siendo procesada </h4></div><div class=modal-body> <img src='/img/mapIcon.svg' style='margin-left:auto;margin-right:auto;display:block' width='150px'><h4 style='text-align:center'> Espera un momento, este proceso puede tomar algunos segundos dependiendo de tu conexion</h4></div></div></div></div>");
        $("#process_image_modal").modal({ backdrop: 'static', keyboard: false });
    },
    removeProcessImageModal: function () {
        $("#process_image_modal").modal('hide');
    },
    launchErrorModal: function (title, description, recomendation) {
        $("#error_modal").remove();
        $("body").append("<div class='fade modal modal-danger'aria-hidden=true aria-labelledby=myModalLabel1 id=error_modal role=dialog style=display:none tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel9> " + title + " </h4></div><div class=modal-body><img src='/img/errorIcon.svg' style=margin-left:auto;margin-right:auto;display:block width=150px><h4 style=text-align:center> " + description + " </h4><h5 style=text-align:center> " + recomendation + " </h5></div><div class=modal-footer><input class='btn btn-danger'data-dismiss=modal type=button value='Lo entiendo'></div></div></div></div>");
        $("#error_modal").modal('show');
    },
    launchErrorNotAuthenthicateModal: function (title, description, recomendation) {
        $("#errorAuth_modal").remove();
        $("body").append("<div class='fade modal modal-danger'aria-hidden=true aria-labelledby=myModalLabel1 id=errorAuth_modal role=dialog style=display:none tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel9> " + title + " </h4></div><div class=modal-body><img src='/img/errorIcon.svg' style=margin-left:auto;margin-right:auto;display:block width=150px><h4 style=text-align:center> " + description + " </h4><h5 style=text-align:center> " + recomendation + " </h5></div><div class=modal-footer><input id='initApplication' class='btn btn-primary' data-dismiss=modal type=button value='Iniciar Sesion></div></div></div></div>");
        $("#initApplication").click(function(){
            window.location.replace("https://smart-docs.herokuapp.com/?#no-back-button");
        });
        $("#errorAuth_modal").modal({ backdrop: 'static', keyboard: false });
    },
    launchChooseConnection: function () {
        return new Promise(function (resolve, reject) {
            $("#connection_modal").remove();
            $("body").append("<div class='fade modal modal-warning' aria-hidden=true aria-labelledby=myModalLabel1 id=connection_modal role=dialog style=display:none tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel9> Selecciona el tipo de conexion </h4></div><div class=modal-body><img src='/img/internetIcon.svg' style=margin-left:auto;margin-right:auto;display:block width=150px><h4 style=text-align:center> Actualmente estas conectado a Internet </h4><h5 style=text-align:center> Deseas sincronizar todo tu trabajo ? </h5></div><div class=modal-footer><input id='yesConnection' class='btn btn-warning' type=button value='Si'><input id='noConnection' class='btn btn-warning' type=button value='No'></div></div></div></div>");
            $("#connection_modal").modal({ backdrop: 'static', keyboard: false });

            $("#yesConnection").click(function () {
                resolve(true);
                $("#connection_modal").modal('hide');
            });

            $("#noConnection").click(function () {
                resolve(false);
                $("#connection_modal").modal('hide');
            });
        });
    },
    launchSyncModal: function () {
        let reference = this;
        $("#sync_information_modal").remove();
        $("body").append("<div class='fade modal modal-warning'aria-hidden=true aria-labelledby=myModalLabel1 id=sync_information_modal role=dialog style=display:block tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel13>Sincronizacion en Curso </h4></div><br><div style='float:none;margin: 0 auto;text-align:center'><i style='color:black' class='fa fa-spinner fa-pulse fa-3x text-center'></i></div><h4 style='text-align:center'>Por favor no cierres la aplicacion, estamos sincronizando tu progreso . </h4><br><h5 style='text-align:center'><b> Estado : </b><div id='sync_information_status'></div></h5></div></div></div></div>");
        $("#sync_information_modal").modal({ backdrop: 'static', keyboard: false });
    },
    changeSyncModalText: function (msg) {
        $("#sync_information_status").html(msg);
    },
    removeSyncModal: function () {
        $("#sync_information_modal").modal('hide');
    },
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
let dataBase;
let templatesConnection = __webpack_require__(6);
let siteConnection = __webpack_require__(5);

module.exports = {
    "dataBase": "",
    "startIndexedDB": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            reference.dataBase = indexedDB.open("SmartDocsOffline", 6);
            reference.dataBase.onupgradeneeded = function (e) {
                let active = reference.dataBase.result;
                let sites = active.createObjectStore("sites", { keyPath: 'siteId' });
                sites.createIndex("by_siteId", "siteId", { unique: true });
                sites.createIndex("by_project", "project", { unique: false });
                sites.createIndex("by_fmOffice", "fmOffice", { unique: false });
                sites.createIndex("by_creationDate", "creationDate", { unique: false });
                sites.createIndex("by_lastModification", "lastModification", { unique: false });

                let visits = active.createObjectStore("visits", { keyPath: 'visitId' });
                visits.createIndex("by_visitId", "visitId", { unique: true });
                visits.createIndex("by_site", "site", { unique: false });
                visits.createIndex("by_author", "author", { unique: false });
                visits.createIndex("by_creationDate", "creationDate", { unique: false });

                let templates = active.createObjectStore("templates", { keyPath: 'templateId' });
                templates.createIndex("by_templateId", "templateId", { unique: true });
                templates.createIndex("by_creationDate", "creationDate", { unique: false });
                templates.createIndex("by_lastModification", "lastModification", { unique: false });
                templates.createIndex("by_taskType", "taskType", { unique: false })
                templates.createIndex("by_project", "project", { unique: false });

                let reports = active.createObjectStore("reports", { keyPath: 'reportId' });
                reports.createIndex("by_reportId", "reportId", { unique: true });
                reports.createIndex("by_site", "site", { unique: false });
                reports.createIndex("by_creation_date", "creationDate", { unique: false });
                reports.createIndex("by_lastModification", "lastModification", { unique: false });

                let reportsImages = active.createObjectStore("reportsImage", { keyPath: 'reportImgId' });
                reportsImages.createIndex("by_reportId", "reportId", { unique: false });
                reportsImages.createIndex("by_lastModification", "lastModification", { unique: false });

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
                resolve();
            }

            reference.dataBase.onerror = function (e) {
                console.error("An error ocurred " + e);
                reject(e);
            }
        });
    },
    "addSite": function (siteId, name, fmOffice, project, portafolio, anchorTenant, region, city) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            var active = reference.dataBase.result;
            var data = active.transaction(["sites"], "readwrite");
            var object = data.objectStore("sites");

            var request = object.put({
                siteId: siteId,
                name: name,
                project: project,
                portafolio: portafolio,
                anchorTenant: anchorTenant,
                region: region,
                fmOffice: fmOffice,
                city: city,
                creationDate: "" + new Date(),
                lastModification: "" + new Date()
            });

            request.onerror = function (e) {
                console.log("An error occurred " + request.error.name + " \n\n " + request.error.message);
                reject(request.error.name);
            }

            data.oncomplete = function (e) {
                console.log("The Site was register on SmartDocsOffline");
                resolve();
            }
        });
    },
    /**
* Method: Get Sites from indexed db - Database create on the user device
*  Make a request to sites objectstore, and iterate between the sites.
*  Get the total sites saved and change the modal text
* @author Sebastian Guevara <outs.sebastian.velasquez@huawei.com>
* @since Added for perfomance reasons, Doesn't download all the sites, only some of them based on the user preferences. 
* @version 1.0.0
* date  07/18/2017 DD-MM-YYYY
*/
    "getSites": function () {
        let cont = 0;
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["sites"], "readonly");
            let object = data.objectStore("sites");
            let elements = [];

            object.openCursor().onsuccess = function (e) {
                var result = e.target.result;
                if (result === null) {
                    result;
                } else {
                    $("#sync_information_status").html('Se han cargado ' + cont + 'de ' + localStorage.getItem('totalSitesSM') + ' Sitios');
                    elements.push(result.value);
                    console.log(elements);
                    result.continue();
                }
            }

            data.oncomplete = function (e) {
                console.log("elements", elements);
                //siteConnection.sites = elements;
                resolve(elements);
            }
        });
    },
    "addVisit": function (visitId, siteId, name, author, cloud, creationDate = "" + new Date()) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            var active = reference.dataBase.result;
            var data = active.transaction(["visits"], "readwrite");
            var object = data.objectStore("visits");

            var request = object.put({
                visitId: visitId,
                siteId: siteId,
                name: name,
                author: author,
                cloud: cloud,
                creationDate: creationDate
            });

            request.onerror = function (e) {
                console.log("An error occurred " + request.error.name + " \n\n " + request.error.message);
                reject(request.error.name);
            }

            request.onsuccess = function (e) {
                console.log("Visit Selected ", e.target.result);
            }

            data.oncomplete = function (e) {
                console.log("The Visit was register on SmartDocsOffline");
                resolve();
            }
        });
    },
    "updateVisit": function (visitId, cloud = true) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            var objectStore = active.transaction(["visits"], "readwrite").objectStore("visits");
            var request = objectStore.get(visitId);
            request.onerror = function (event) {
                // Handle errors!
                reject(request.error.name);
            };
            request.onsuccess = function (event) {
                // Get the old value that we want to update
                var data = request.result;

                // update the value(s) in the object that you want to change
                data.cloud = cloud;
                // Put this updated object back into the database.
                var requestUpdate = objectStore.put(data);
                requestUpdate.onerror = function (event) {
                    // Do something with the error
                    reject(requestUpdate.error.name);
                };
                requestUpdate.onsuccess = function (event) {
                    // Success - the data is updated!
                    resolve();
                };
            };
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
                } else {
                    elements.push(result.value);
                    console.log(elements);
                    result.continue();
                }
            }

            data.oncomplete = function (e) {
                console.log("elements", elements);
                resolve(elements);
            }
        });
    },
    "getVisitByVisitId": function (visitId) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["visits"], "readonly");
            let object = data.objectStore("visits");
            let request = object.get("Fri Jun 02 2017 22:14:53 GMT-0500 (SA Pacific Standard Time)");
            request.onsuccess = function () {
                if (request.result !== undefined) {
                    resolve(request.result);
                }
            }
        });
    },
    "deleteVisit": function (visitId) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["visits"], "readwrite");
            let object = data.objectStore("visits");
            let index = object.index("by_visitId");
            var objectStoreRequest = index.openCursor(IDBKeyRange.only(visitId.toString()));

            objectStoreRequest.onsuccess = function (e) {
                let cursor = objectStoreRequest.result;
                if (cursor) {
                    cursor.delete();
                    cursor.continue();
                }

            }
            objectStoreRequest.onerror = function (e) {
                reject(e.error.name);
            }

            data.oncomplete = function (e) {
                resolve();
            }
        });
    },
    "deleteAllVisits": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["visits"], "readwrite");
            let object = data.objectStore("visits");
            var objectStoreRequest = object.clear();

            objectStoreRequest.onsuccess = function (e) {
                resolve();
                console.log("Reports DB was cleared");
            }
            objectStoreRequest.onerror = function (e) {
                reject(e.error.name);
            }
        });
    },
    "deleteAllVisitsByAuthor": function (author) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["visits"], "readwrite");
            let object = data.objectStore("visits");

            object.openCursor().onsuccess = function (e) {
                var cursor = event.target.result;
                if (cursor) {
                    if (cursor.value.author !== author.toString()) {
                        var request = cursor.delete();
                        request.onsuccess = function () {
                            console.log('One Visit Founded and was deleted');
                        };
                    }
                    cursor.continue();
                }
            }
            data.oncomplete = function (e) {
                console.log("The visits by author was completed");
                resolve();
            }

            data.onerror = function (e) {
                console.log("An error occurred " + data.error.name + " \n\n " + data.error.message);
                reject(data.error.name);
            }


        });
    },
    "addTemplate": function (templateId, name, project, taskType, icon, content) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            var active = reference.dataBase.result;
            var data = active.transaction(["templates"], "readwrite");
            var object = data.objectStore("templates");

            var request = object.put({
                templateId: templateId,
                name: name,
                project: project,
                taskType: taskType,
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
                } else {
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
    "addReportAllProperties": function (reportId, templateId, visitId, status, author, cloud,
        creationDate, completedDate, lastModification, checkbox_answer, date_answer, datetime_answer,
        list_answer, month_answer, multiselect_answer, number_answer, radio_answer, select_answer, table_answer,
        text_answer, textarea_answer, time_answer, week_answer) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reports", "reportsLog"], "readwrite");
            let object = data.objectStore("reports");
            let request = object.put({
                reportId: reportId,
                visitId: visitId,
                templateId: templateId,
                cloud: cloud,
                status: status,
                author: author,
                completedDate: completedDate,
                creationDate: creationDate,
                lastModification: lastModification,
                checkbox_answer: checkbox_answer,
                date_answer: date_answer,
                datetime_answer: datetime_answer,
                list_answer: list_answer,
                month_answer: month_answer,
                multiselect_answer: multiselect_answer,
                number_answer: number_answer,
                radio_answer: radio_answer,
                select_answer: select_answer,
                table_answer: table_answer,
                text_answer: text_answer,
                textarea_answer: textarea_answer,
                time_answer: time_answer,
                week_answer: week_answer
            });

            request.onerror = function (e) {
                console.log("An error occurred " + request.error.name + " \n\n " + request.error.message);
                reject(e);
            }

            request.onsuccess = function (e) {
                reference.addReportLog(e.target.result, "Modificacion", status);
            }

            data.oncomplete = function (e) {
                console.log("The report was added to SmartDocsOffline", e);
                resolve();
            }
        });
    },
    "addReport": function (reportId, templateId, visitId, status, author, creationDate = "" + new Date(), cloud = false) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reports", "reportsLog"], "readwrite");
            let object = data.objectStore("reports");
            let request = object.put({
                reportId: reportId,
                visitId: visitId,
                templateId: templateId,
                cloud: cloud,
                status: status,
                author: author,
                completedDate: status == 'SM-Status002' ? "" + new Date() : "",
                creationDate: creationDate,
                lastModification: "" + new Date(),
                checkbox_answer: [],
                date_answer: [],
                datetime_answer: [],
                list_answer: [],
                month_answer: [],
                multiselect_answer: [],
                number_answer: [],
                radio_answer: [],
                select_answer: [],
                table_answer: [],
                text_answer: [],
                textarea_answer: [],
                time_answer: [],
                week_answer: []
            });

            request.onerror = function (e) {
                console.log("An error occurred " + request.error.name + " \n\n " + request.error.message);
                reject(e);
            }

            request.onsuccess = function (e) {
                reference.addReportLog(e.target.result, "Creacion", status);
            }

            data.oncomplete = function (e) {
                console.log("The report was added to SmartDocsOffline", e);
                resolve();
            }
        });
    },
    "updateReport": function (reportId, property, propValue) {
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
                data[property] = propValue;

                // Put this updated object back into the database.
                var requestUpdate = objectStore.put(data);
                requestUpdate.onerror = function (event) {
                    // Do something with the error
                    reject(requestUpdate.error.name);
                };
                requestUpdate.onsuccess = function (event) {
                    // Success - the data is updated!
                    resolve();
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
                } else {
                    elements.push(result.value);
                    console.log(elements);
                    result.continue();
                }
            }

            data.oncomplete = function (e) {
                console.log("elements", elements);
                resolve(elements);
            }
        });
    },
    "deleteReports": function (reportId) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reports"], "readwrite");
            let object = data.objectStore("reports");
            let index = object.index("by_reportId");
            var objectStoreRequest = index.openCursor(IDBKeyRange.only(reportId.toString()));

            objectStoreRequest.onsuccess = function (e) {
                let cursor = objectStoreRequest.result;
                if (cursor) {
                    cursor.delete();
                    cursor.continue();
                }

            }
            objectStoreRequest.onerror = function (e) {
                reject(e.error.name);
            }

            data.oncomplete = function (e) {
                resolve();
            }
        });
    },
    "deleteAllReports": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reports"], "readwrite");
            let object = data.objectStore("reports");
            var objectStoreRequest = object.clear();

            objectStoreRequest.onsuccess = function (e) {
                resolve();
                console.log("Reports DB was cleared");
            }
            objectStoreRequest.onerror = function (e) {
                reject(e.error.name);
            }
        });
    },
    "deleteAllReportsByAuthor": function (author) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reports"], "readwrite");
            let object = data.objectStore("reports");

            object.openCursor().onsuccess = function (e) {
                var cursor = event.target.result;
                if (cursor) {
                    if (cursor.value.author !== author.toString()) {
                        var request = cursor.delete();
                        request.onsuccess = function () {
                            console.log('One Report Founded and was deleted');
                        };
                    }
                    cursor.continue();
                }
            }
            data.oncomplete = function (e) {
                console.log("The reports by author was completed");
                resolve();
            }

            data.onerror = function (e) {
                console.log("An error occurred " + data.error.name + " \n\n " + data.error.message);
                reject(data.error.name);
            }


        });
    },
    "addReportImages": function (reportImgId, reportId, images, author, image_1 = [], cloud = false) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reportsImage"], "readwrite");
            let object = data.objectStore("reportsImage");
            let request = object.put({
                reportImgId: reportImgId,
                reportId: reportId,
                images: images,
                image_1: image_1,
                cloud: cloud,
                author: author,
                lastModification: "" + new Date()
            });

            request.onerror = function (e) {
                console.log("An error occurred " + request.error.name + " \n\n " + request.error.message);
                reject(e);
            }

            request.onsuccess = function (e) {
                //reference.addReportLog(e.target.result, "Creacion", status);
            }

            data.oncomplete = function (e) {
                console.log("The image was added to SmartDocsOffline", e);
                resolve();
            }
        });
    },
    "updateReportImages": function (reportImgId, property, propValue) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            var objectStore = active.transaction(["reportsImage"], "readwrite").objectStore("reportsImage");
            var request = objectStore.get(reportImgId);
            request.onerror = function (event) {
                // Handle errors!
                reject(request.error.name);
            };
            request.onsuccess = function (event) {
                // Get the old value that we want to update
                var data = request.result;

                // update the value(s) in the object that you want to change
                data[property] = propValue;

                // Put this updated object back into the database.
                var requestUpdate = objectStore.put(data);
                requestUpdate.onerror = function (event) {
                    // Do something with the error
                    reject(requestUpdate.error.name);
                };
                requestUpdate.onsuccess = function (event) {
                    // Success - the data is updated!
                    resolve();
                };
            };
        });
    },
    "getReportsImages": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reportsImage"], "readonly");
            let object = data.objectStore("reportsImage");
            let elements = [];

            object.openCursor().onsuccess = function (e) {
                let result = e.target.result;
                if (result === null) {
                    result;
                } else {
                    elements.push(result.value);
                    console.log(elements);
                    result.continue();
                }
            }

            data.oncomplete = function (e) {
                console.log("elements", elements);
                resolve(elements);
            }
        });
    },
    "getReportImagesByReportId": function (reportId) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reportsImage"], "readonly");
            let object = data.objectStore("reportsImage");
            let elements = [];

            object.openCursor().onsuccess = function (e) {
                let result = e.target.result;
                if (result === null) {
                    result;
                } else {
                    if (result.value.reportId == reportId) {
                        elements.push(result.value);
                        console.log(elements);
                    }
                    result.continue();
                }
            }
            data.oncomplete = function (e) {
                console.log("elements", elements);
                resolve(elements);
            }
        });
    },
    "deleteReportsImage": function (reportId) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reportsImage"], "readwrite");
            let object = data.objectStore("reportsImage");
            let index = object.index("by_reportId");
            var objectStoreRequest = index.openCursor(IDBKeyRange.only(reportId.toString()));

            objectStoreRequest.onsuccess = function (e) {
                let cursor = objectStoreRequest.result;
                if (cursor) {
                    cursor.delete();
                    cursor.continue();
                }

            }
            objectStoreRequest.onerror = function (e) {
                reject(e.error.name);
            }

            data.oncomplete = function (e) {
                resolve();
            }
        });
    },
    "deleteAllReportsImage": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reportsImage"], "readwrite");
            let object = data.objectStore("reportsImage");
            var objectStoreRequest = object.clear();

            objectStoreRequest.onsuccess = function (e) {
                resolve();
                console.log("Reports Img DB was cleared");
            }
            objectStoreRequest.onerror = function (e) {
                reject(e.error.name);
            }
        });
    },
    "deleteAllReportsImageByAuthor": function (author) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reportsImage"], "readwrite");
            let object = data.objectStore("reportsImage");

            object.openCursor().onsuccess = function (e) {
                var cursor = event.target.result;
                if (cursor) {
                    if (cursor.value.author !== author.toString()) {
                        var request = cursor.delete();
                        request.onsuccess = function () {
                            console.log('One ReportImg Founded and was deleted');
                        };
                    }
                    cursor.continue();
                }
            }
            data.oncomplete = function (e) {
                console.log("The reportsImg by author was completed");
                resolve();
            }

            data.onerror = function (e) {
                console.log("An error occurred " + data.error.name + " \n\n " + data.error.message);
                reject(data.error.name);
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
    "getReportsLog": function () {
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
                } else {
                    elements.push(result.value);
                    console.log(elements);
                    result.continue();
                }
            }

            data.oncomplete = function (e) {
                console.log("elements", elements);
                resolve(elements);
            }
        });
    },
    "deleteAllReportsLog": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let active = reference.dataBase.result;
            let data = active.transaction(["reportsLog"], "readwrite");
            let object = data.objectStore("reportsLog");
            var objectStoreRequest = object.clear();

            objectStoreRequest.onsuccess = function (e) {
                resolve();
                console.log("Reports Log was cleared");
            }
            objectStoreRequest.onerror = function (e) {
                reject(e.error.name);
            }
        });
    }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
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
/* 4 */
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
	fixUrls = __webpack_require__(35);

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {let message = __webpack_require__(1);

module.exports = {
    "sites": [],
    "getAllSites": function () {
        let reference = this;
        return reference.sites;
    },
    "getSitesOnCloud": function () {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'https://smart-docs.herokuapp.com/sites/?token=' + localStorage.getItem('token'),
                type: 'GET',
                dataType: 'json',
                statusCode: {
                    401: function () {
                        message.launchErrorNotAuthenthicateModal("La sesion ha caducado", "El token de seguridad que se te ha asignado ya no es valido", "Solucion: Inicia de nuevo Sesion");
                        localStorage.clear();
                    }
                },
                error: function () {
                    reject();
                },
                complete: function (msgRes) {
                    resolve(msgRes.responseJSON);
                }
            });
        });
    },
    /**
 * Method: Find Sites depeding on user properties like region and project
 *  Make a GET request to https://smart-docs.herokuapp.com/sites/findMySites with the token query parameter
 *  Return an array of sites based on the user preferences 
 *  If the token isn't valid rwill prompt a error. Solution: Get a new token, login again.
 * @author Sebastian Guevara <outs.sebastian.velasquez@huawei.com>
 * @since Added for perfomance reasons, Doesn't download all the sites, only some of them based on the user preferences. 
 * @version 1.0.0
 * date  07/18/2017 DD-MM-YYYY
 */
    "getSitesOnCloudByUserPreferences": function () {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'https://smart-docs.herokuapp.com/sites/findMySites/?token=' + localStorage.getItem('token'),
                type: 'GET',
                dataType: 'json',
                statusCode: {
                    401: function () {
                        message.launchErrorNotAuthenthicateModal("La sesion ha caducado", "El token de seguridad que se te ha asignado ya no es valido", "Solucion: Inicia de nuevo Sesion");
                        localStorage.clear();
                    }
                },
                error: function () {
                    reject();
                },
                complete: function (msgRes) {
                    resolve(msgRes.responseJSON);
                }
            });
        });
    }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {let indexDb = __webpack_require__(2);
let message = __webpack_require__(1);

module.exports = {
    "templateSelected": "",
    "templates": [],
    "getTemplates": function () {
        let reference = this;
        return reference.templates;
    },
    "getTemplatesOnCloud": function () {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'https://smart-docs.herokuapp.com/templates/?token=' + localStorage.getItem('token'),
                type: 'GET',
                dataType: 'json',
                statusCode: {
                    401: function () {
                        message.launchErrorNotAuthenthicateModal("La sesion ha caducado", "El token de seguridad que se te ha asignado ya no es valido", "Solucion: Inicia de nuevo Sesion");
                        localStorage.clear();
                    }
                },
                error: function () {
                    reject();
                },
                complete: function (msgRes) {
                    resolve(msgRes.responseJSON);
                }
            });
        });
    }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// This file is autogenerated via the `commonjs` Grunt task. You can require() this file in a CommonJS environment.
__webpack_require__(30)
__webpack_require__(20)
__webpack_require__(21)
__webpack_require__(22)
__webpack_require__(23)
__webpack_require__(24)
__webpack_require__(25)
__webpack_require__(29)
__webpack_require__(26)
__webpack_require__(27)
__webpack_require__(28)
__webpack_require__(19)

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./checkbox-radioStyles.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./checkbox-radioStyles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./custom.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./custom.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {let message = __webpack_require__(1);

module.exports = {
    "signin": function (username,password) {
        console.log("Sign in Start");
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'https://smart-docs.herokuapp.com/user/signin',
                type: 'POST',
                dataType: 'json',
                data: { username: username, password: password },
                statusCode: {
                    500: function (msgRes) {
                        message.launchErrorModal(msgRes.responseJSON.title,msgRes.responseJSON.error.message, " Revisa tus credenciales");
                        $("#userpassword").val("");
                    }
                },
                error: function () {
                    reject();
                },
                complete: function (msgRes) {
                    localStorage.setItem("user",JSON.stringify(msgRes.responseJSON.user));
                    localStorage.setItem("token",msgRes.responseJSON.token);
                    localStorage.setItem("userLogged",new Date());
                    resolve(msgRes.responseJSON.user);
                }
            })
        });

    }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
    "sendNotification": function (title, body) {
        Notification.requestPermission(function (result) {
            if (result === 'granted') {
                navigator.serviceWorker.ready.then(function (registration) {
                    registration.showNotification(title, {
                        body: body,
                        icon: '/img/huaweiLogo-192x192.png',
                        vibrate: [200, 300, 200, 300, 200, 300, 200],
                        tag: 'Smart Docs Offline',
                        badge: '/img/huaweiLogo-badge.png'
                    });
                });
            }
        });
    }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {let indexDb = __webpack_require__(2);
let message = __webpack_require__(1);

module.exports = {
    "reportsImages": [],
    "getReportsImages": function () {
        let reference = this;
        return new Promise(function (resolve, rejec) {
            indexDb.getReportsImages().then(function (reportsImageResponse) {
                reference.reportsImages = reportsImageResponse;
                resolve(reportsImageResponse);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    uploadReportsImages: function (reportImagesResponse) {
        console.log("Upload Reports Images on Action");
        let reference = this;
        let reportsToImgCreate = [];
        let cont = 0;
        for (let reportImgToCreate of reportImagesResponse) {
            if (!reportImgToCreate.cloud) {
                this["reportImgToCreateUpd" + cont] = reference.uploadReportCreate({
                    reportImgId: reportImgToCreate.reportImgId,
                    reportId: reportImgToCreate.reportId,
                    images: JSON.stringify(reportImgToCreate.images),
                    author: reportImgToCreate.author,
                    lastModification: reportImgToCreate.lastModification
                });
                reportsToImgCreate.push(this["reportImgToCreateUpd" + cont]);
                cont ++;
            }
        }
        return new Promise(function (resolve, reject) {
            Promise.all(reportsToImgCreate).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    uploadReportsImages1: function () {
        let reference = this;
        let reportsToImgCreate = [];
        let cont = 0;
        for (let reportImgToCreate of reference.reportsImages) {
            if (!reportImgToCreate.cloud) {
            this["reportImgToCreateUpd" + cont] = reference.uploadReportUpdate({
                reportImgId: reportImgToCreate.reportImgId,
                reportId: reportImgToCreate.reportId,
                image_1: reportImgToCreate.image_1,
            });
            reportsToImgCreate.push(this["reportImgToCreateUpd" + cont]);
            cont ++;
            }
        }
        return new Promise(function (resolve, reject) {
            Promise.all(reportsToImgCreate).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    uploadReportCreate: function (dataToUpdate) {

        let promiseUpdateLocally = indexDb.updateReportImages(dataToUpdate.reportImgId,"cloud",true);

        let promiseUpdateCloud = new Promise(function(resolve,reject){

            $.ajax({
                url: 'https://smart-docs.herokuapp.com/reportsImg/?token='+ localStorage.getItem("token"),
                type: 'POST',
                dataType: 'json',
                data: dataToUpdate,
                statusCode: {
                    401: function () {
                        message.launchErrorNotAuthenthicateModal("La sesion ha caducado", "El token de seguridad que se te ha asignado ya no es valido", "Solucion: Inicia de nuevo Sesion");
                        localStorage.clear();
                    }
                },
                error: function () {
                    reject();
                },
                complete: function (msgRes) {
                    resolve();
                }
            });
        });
        return new Promise(function (resolve, reject) {
            Promise.all([promiseUpdateLocally,promiseUpdateCloud]).then(function(){
                resolve();
            });
        });
    },
    uploadReportUpdate: function (dataToUpdate) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'https://smart-docs.herokuapp.com/reportsImg/update/?token='+ localStorage.getItem("token"),
                type: 'PATCH',
                data: { reportImgId: dataToUpdate.reportImgId, reportId: dataToUpdate.reportId, image_1: JSON.stringify(dataToUpdate.image_1) },
                dataType: 'json',
                statusCode: {
                    401: function () {
                        message.launchErrorNotAuthenthicateModal("La sesion ha caducado", "El token de seguridad que se te ha asignado ya no es valido", "Solucion: Inicia de nuevo Sesion");
                        localStorage.clear();
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    // log the error to the console
                    console.log("The following error occured: " + textStatus, errorThrown);
                    reject();
                },
                complete: function () {
                    resolve();
                }
            });
        });
    }
    ,
    deleteReportsImg: function () {
        return new Promise(function (resolve, reject) {
            indexDb.deleteReportsImage().then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    getReportsImgSaveonCloud: function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            $.ajax({
                method: "GET",
                url: 'https://smart-docs.herokuapp.com/reportsImg/?token='+ localStorage.getItem("token"),
                statusCode: {
                    401: function () {
                        message.launchErrorNotAuthenthicateModal("La sesion ha caducado", "El token de seguridad que se te ha asignado ya no es valido", "Solucion: Inicia de nuevo Sesion");
                        localStorage.clear();
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    // log the error to the console
                    console.log("The following error occured: " + textStatus, errorThrown);
                    reject();
                },
                complete: function (reqRes) {
                    let cont = 0;
                    let updateReportImg = [];
                    for (let reportImgRes of reqRes.responseJSON) {
                        this["updateReportImage" + cont] = indexDb.addReportImages(reportImgRes.reportImgId, reportImgRes.reportId, reportImgRes.images, reportImgRes.author, reportImgRes.image_1);
                        updateReportImg.push(this["updateReportImage" + cont]);
                        cont++;
                    }
                    if (updateReportImg.length > 0) {
                        Promise.all(updateReportImg).then(function () {
                            resolve();
                        });
                    }
                    else {
                        resolve();
                    }
                }
            })
        });
    },
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {let indexDb = __webpack_require__(2);
let message = __webpack_require__(1);

module.exports = {
    "reports": [],
    "reportsLog": [],
    "getReportsLog": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            indexDb.getReportsLog().then(function (reportsLogRes) {
                reference.reportsLog = reportsLogRes;
                resolve(reportsLogRes);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    "reportSelected": {},
    "getReports": function () {
        let reference = this;
        console.log("Index Db", indexDb);
        return new Promise(function (resolve, reject) {
            indexDb.getReports().then(function (reportsResponse) {
                reference.reports = reportsResponse;
                resolve(reportsResponse);
            }).catch(function (err) {
                reject(err);
            })
        });
    },
    "uploadReportToCloud": function (reportsResponse) {
        console.log("Upload reports to Cloud on Action");
        let reference = this;
        let cont = 0;
        let reportsToUpdate = [];
        for (let reportToUpd of reportsResponse) {
            if (!reportToUpd.cloud) {
                this["reportToUpdate" + cont] = reference.uploadReport({
                    reportId: reportToUpd.reportId,
                    templateId: reportToUpd.templateId,
                    visitId: reportToUpd.visitId,
                    status: reportToUpd.status,
                    lastModification: reportToUpd.lastModification,
                    author: reportToUpd.author,
                    completedDate: reportToUpd.completedDate,
                    creationDate: reportToUpd.creationDate,
                    checkbox_answer: reportToUpd.checkbox_answer,
                    date_answer: reportToUpd.date_answer,
                    datetime_answer: reportToUpd.datetime_answer,
                    list_answer: reportToUpd.list_answer,
                    month_answer: reportToUpd.month_answer,
                    multiselect_answer: reportToUpd.multiselect_answer,
                    number_answer: reportToUpd.number_answer,
                    radio_answer: reportToUpd.radio_answer,
                    select_answer: reportToUpd.select_answer,
                    table_answer: reportToUpd.table_answer,
                    text_answer: reportToUpd.text_answer,
                    textarea_answer: reportToUpd.textarea_answer,
                    time_answer: reportToUpd.time_answer,
                    week_answer: reportToUpd.week_answer
                });
                reportsToUpdate.push(this["reportToUpdate" + cont]);
                cont += 1;
            }
        }
        return new Promise(function (resolve, reject) {
            Promise.all(reportsToUpdate).then(function (values) {
                console.log("Reports Update ", values);
                resolve();
            }).catch(function (err) {
                reject(err);
            })
        });
    },
    "uploadReport": function (dataToUpdate) {
        console.log("Upload Reports to Cloud");
        let reference = this;
        let updateReportLocal = new Promise(function (resolve, reject) {
            indexDb.updateReport(dataToUpdate.reportId, "cloud", true).then(function () {
                resolve();
            });
        });
        let updateReportCloud = new Promise(function (resolve, reject) {



            $.ajax({
                url: 'https://smart-docs.herokuapp.com/reports/?token=' + localStorage.getItem('token'),
                type: 'POST',
                dataType: 'json',
                data: {
                    reportId: dataToUpdate.reportId,
                    templateId: dataToUpdate.templateId,
                    visitId: dataToUpdate.visitId,
                    status: dataToUpdate.status,
                    lastModification: dataToUpdate.lastModification,
                    author: dataToUpdate.author,
                    completedDate: dataToUpdate.completedDate,
                    creationDate: dataToUpdate.creationDate
                },
                statusCode: {
                    401: function () {
                        message.launchErrorNotAuthenthicateModal("La sesion ha caducado", "El token de seguridad que se te ha asignado ya no es valido", "Solucion: Inicia de nuevo Sesion");
                        localStorage.clear();
                    }
                },
                error: function () {
                    reject();
                },
                complete: function (msgRes) {
                    let updateReportProCloud = new Promise(function (resolve, reject) {
                        let answerDate = reference.uploadReportProp(dataToUpdate.reportId, "date_answer", dataToUpdate.date_answer);
                        let answerDateTime = reference.uploadReportProp(dataToUpdate.reportId, "datetime_answer", dataToUpdate.datetime_answer);
                        let answerWeek = reference.uploadReportProp(dataToUpdate.reportId, "week_answer", dataToUpdate.week_answer);
                        let answerMonth = reference.uploadReportProp(dataToUpdate.reportId, "month_answer", dataToUpdate.month_answer);
                        let answerText = reference.uploadReportProp(dataToUpdate.reportId, "text_answer", dataToUpdate.text_answer);
                        let answerTextArea = reference.uploadReportProp(dataToUpdate.reportId, "textarea_answer", dataToUpdate.textarea_answer);
                        let answerNumber = reference.uploadReportProp(dataToUpdate.reportId, "number_answer", dataToUpdate.number_answer);
                        let answerTime = reference.uploadReportProp(dataToUpdate.reportId, "time_answer", dataToUpdate.time_answer);
                        let answerRadio = reference.uploadReportProp(dataToUpdate.reportId, "radio_answer", dataToUpdate.radio_answer);
                        let answerCheckbox = reference.uploadReportProp(dataToUpdate.reportId, "checkbox_answer", dataToUpdate.checkbox_answer);
                        let answerSelect = reference.uploadReportProp(dataToUpdate.reportId, "select_answer", dataToUpdate.select_answer);
                        let answerMultiSelect = reference.uploadReportProp(dataToUpdate.reportId, "multiselect_answer", dataToUpdate.multiselect_answer);
                        let answerList = reference.uploadReportProp(dataToUpdate.reportId, "list_answer", dataToUpdate.list_answer);
                        let answerTable = reference.uploadReportProp(dataToUpdate.reportId, "table_answer", dataToUpdate.table_answer);

                        Promise.all([answerDate, answerDateTime, answerTime, answerWeek, answerMonth, answerText,
                            answerTextArea, answerNumber, answerTime, answerRadio, answerCheckbox, answerSelect,
                            answerMultiSelect, answerList, answerTable]).then(function () {
                                resolve();
                            });
                    });
                    updateReportProCloud.then(function () {
                        resolve();
                    });
                }
            });

        });


        return new Promise(function (resolve, reject) {
            Promise.all([updateReportLocal, updateReportCloud]).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    "uploadReportProp": function (reportId, prop, valuePro) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'https://smart-docs.herokuapp.com/reports/update/' + prop + "?token="+ localStorage.getItem('token'),
                type: 'PATCH',
                data: { reportId: reportId, content: JSON.stringify(valuePro) },
                dataType: 'json',
                statusCode: {
                    401: function () {
                        message.launchErrorNotAuthenthicateModal("La sesion ha caducado", "El token de seguridad que se te ha asignado ya no es valido", "Solucion: Inicia de nuevo Sesion");
                        localStorage.clear();
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    // log the error to the console
                    console.log("The following error occured: " + textStatus, errorThrown);
                    reject(textStatus);
                },
                complete: function () {
                    console.log(prop + " was updated ");
                    resolve();
                }
            });
        });
    },
    deleteReports: function () {
        return new Promise(function (resolve, reject) {
            indexDb.deleteReports().then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    "validateReportsLocally": function (reportsOnCloud, reportsLocally) {
        let reference = this;
        let reportsToDelete = [];
        //Iterate on Reports Locally
        for (let reportLocal of reportsLocally) {
            //Filter on reports Cloud
            let reportFiltered = reportsOnCloud.filter(function (report) {
                return report.reportId == reportLocal.reportId;
            });

            if (reportFiltered.length == 0) {
                reportsToDelete.push(indexDb.deleteReports(reportLocal.reportId));
                reportsToDelete.push(indexDb.deleteReportsImage(reportLocal.reportId));
            }
        }

        //Iterate on Reports Cloud
        for (let reportCloud of reportsOnCloud) {
            //Filter on reports Locally
            let reportFiltered = reportsLocally.filter(function (report) {
                return report.reportId == reportCloud.reportId;
            });

            if (reportFiltered.length == 0) {
                reportsToDelete.push(reference.getReportOnCloudToSaveLocally(reportCloud.reportId));
            }
            else{
                 if(reportFiltered[0].lastModification != reportCloud.lastModification){
                        reportsToDelete.push(reference.getReportOnCloudToSaveLocally(reportCloud.reportId));
                 } 
            }
        }

        return new Promise(function (resolve, reject) {
            Promise.all(reportsToDelete).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    "getReportOnCloudToSaveLocally": function (reportId) {
        let reference = this;

        return new Promise(function (resolve, reject) {
            $.ajax({
                method: "GET",
                url: "https://smart-docs.herokuapp.com/reports/getAllFieldsReport/" + reportId+ "?token="+ localStorage.getItem("token"),
                statusCode: {
                    401: function () {
                        message.launchErrorNotAuthenthicateModal("La sesion ha caducado", "El token de seguridad que se te ha asignado ya no es valido", "Solucion: Inicia de nuevo Sesion");
                        localStorage.clear();
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    // log the error to the console
                    console.log("The following error occured: " + textStatus, errorThrown);
                    reject(textStatus);
                },
                complete: function (reqRes) {
                    reference.saveReportsLocally(reqRes.responseJSON)
                        .then(function () {
                            resolve();
                        })
                        .catch(function (err) {
                            reject(err);
                        });
                }
            });
        });
    },
    "saveReportsLocally": function (reportResponse) {
        let reference = this;
        return new Promise(function (resolve, reject) {
            let saveReportLocal = reference.saveReportOnCloudToSaveLocally(reportResponse[0]);
            let saveReportImagesLocal = reference.saveReportImageOnCloudToSaveLocally(reportResponse[0]);

            Promise.all([saveReportLocal, saveReportImagesLocal]).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    "saveReportOnCloudToSaveLocally": function (report) {
        return new Promise(function (resolve, reject) {
            indexDb.addReportAllProperties(report.reportId, report.templateId, report.visitId, report.status, report.author, true,
                report.creationDate, report.completedDate, report.lastModification, report.checkbox_answer, report.date_answer, report.datetime_answer,
                report.list_answer, report.month_answer, report.multiselect_answer, report.number_answer, report.radio_answer, report.select_answer, report.table_answer,
                report.text_answer, report.textarea_answer, report.time_answer, report.week_answer).then(function () {
                    resolve();
                }).catch(function (err) {
                    reject(err);
                });
        });
    },
    "saveReportImageOnCloudToSaveLocally": function (report) {
        let promisesSave = [];
        for (let reportImg of report.reportImages) {
            promisesSave.push(indexDb.addReportImages(reportImg.reportImgId, report.reportId, reportImg.images, report.author, reportImg.image_1, true));
        }
        return new Promise(function (resolve, reject) {
            if (promisesSave.length == 0) {
                resolve();
            }
            else {
                Promise.all(promisesSave).then(function () {
                    resolve();
                })
                    .catch(function (err) {
                        reject(err);
                    });
            }
        });
    },
    getReportsSaveonCloud: function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            $.ajax({
                method: "GET",
                url: "https://smart-docs.herokuapp.com/reports/?token="+ localStorage.getItem("token"),
                statusCode: {
                    401: function () {
                        message.launchErrorNotAuthenthicateModal("La sesion ha caducado", "El token de seguridad que se te ha asignado ya no es valido", "Solucion: Inicia de nuevo Sesion");
                        localStorage.clear();
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("request failed" + textStatus);
                },
                complete: function (reqRes) {
                   resolve(reqRes.responseJSON); 
                }
            })
        });
    },
    saveReportsSaveonCloud: function (reportsSaveOnCloud) {
        console.log("Save reports on the cloud");
        let reference = this;
        return new Promise(function (resolve, reject) {
            let cont = 0;
            let updateReports = [];
            for (let reportRes of reportsSaveOnCloud) {
                this["updateReport" + cont] = indexDb.addReport(reportRes.reportId, reportRes.templateId,
                    reportRes.visitId, reportRes.status, reportRes.author, reportRes.creationDate, true);
                updateReports.push(this["updateReport" + cont]);
                cont++;
            }
            if (updateReports.length > 0) {
                Promise.all(updateReports).then(function () {
                    let cont = 0;
                    let updateReportsPro = [];
                    for (let reportRes of reportsSaveOnCloud) {
                        this["updateReportProCheck" + cont] = indexDb.updateReport(reportRes.reportId, "checkbox_answer", reportRes.checkbox_answer);
                        updateReportsPro.push(this["updateReportProCheck" + cont]);
                        this["updateReportProDate" + cont] = indexDb.updateReport(reportRes.reportId, "date_answer", reportRes.date_answer);
                        updateReportsPro.push(this["updateReportProDate" + cont]);
                        this["updateReportProDatetime" + cont] = indexDb.updateReport(reportRes.reportId, "datetime_answer", reportRes.datetime_answer);
                        updateReportsPro.push(this["updateReportProDatetime" + cont]);
                        this["updateReportProTime" + cont] = indexDb.updateReport(reportRes.reportId, "time_answer", reportRes.time_answer);
                        updateReportsPro.push(this["updateReportProTime" + cont]);
                        this["updateReportProWeek" + cont] = indexDb.updateReport(reportRes.reportId, "week_answer", reportRes.week_answer);
                        updateReportsPro.push(this["updateReportProWeek" + cont]);
                        this["updateReportProMonth" + cont] = indexDb.updateReport(reportRes.reportId, "month_answer", reportRes.month_answer);
                        updateReportsPro.push(this["updateReportProMonth" + cont]);
                        this["updateReportProText" + cont] = indexDb.updateReport(reportRes.reportId, "text_answer", reportRes.text_answer);
                        updateReportsPro.push(this["updateReportProText" + cont]);
                        this["updateReportProTextarea" + cont] = indexDb.updateReport(reportRes.reportId, "textarea_answer", reportRes.textarea_answer);
                        updateReportsPro.push(this["updateReportTextarea" + cont]);
                        this["updateReportProNumber" + cont] = indexDb.updateReport(reportRes.reportId, "number_answer", reportRes.number_answer);
                        updateReportsPro.push(this["updateReportProNumber" + cont]);
                        this["updateReportProRadio" + cont] = indexDb.updateReport(reportRes.reportId, "radio_answer", reportRes.radio_answer);
                        updateReportsPro.push(this["updateReportProRadio" + cont]);
                        this["updateReportProSelect" + cont] = indexDb.updateReport(reportRes.reportId, "select_answer", reportRes.select_answer);
                        updateReportsPro.push(this["updateReportProSelect" + cont]);
                        this["updateReportProMultiselect" + cont] = indexDb.updateReport(reportRes.reportId, "multiselect_answer", reportRes.multiselect_answer);
                        updateReportsPro.push(this["updateReportProMultiselect" + cont]);
                        this["updateReportProList" + cont] = indexDb.updateReport(reportRes.reportId, "list_answer", reportRes.list_answer);
                        updateReportsPro.push(this["updateReportProList" + cont]);
                        this["updateReportProTable" + cont] = indexDb.updateReport(reportRes.reportId, "table_answer", reportRes.table_answer);
                        updateReportsPro.push(this["updateReportProTable" + cont]);
                    }
                    Promise.all(updateReportsPro).then(function () {
                        resolve();
                    }).catch(function (err) {
                        reject(err);
                    })
                });
            }
            else {
                resolve();
            }


        });
    },
    changeStatistic: function () {
        let reference = this;
        console.log("Change Statistic");
        return new Promise(function (resolve, reject) {
            indexDb.getReports().then(function (reportsResponse) {
                let totalReports = reportsResponse.length;
                $("#statisticTotal").text(totalReports);
                let draft_reports = reportsResponse.filter(function (report) {
                    return report.status == "SM-Status001"
                });
                $("#statisticDraft").text(draft_reports.length);
                let completed_reports = reportsResponse.filter(function (report) {
                    return report.status == "SM-Status002"
                });
                $("#statisticCompleted").text(completed_reports.length);
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        })
    }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {let message = __webpack_require__(1);

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
            tableVal.forEach(function (val, index) {
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
                        tableData.forEach(function (value, indexData) {
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

        var imageNotApply = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8AAAAPACAIAAAB1tIfMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMGE1MjBkMy1lMjQ4LTMwNGEtYWFlZS03NTAxOTY3YzFlYmUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODI1NEI3MzY0REE0MTFFNzg4QThCNzE3RTY0OUE0RTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODI1NEI3MzU0REE0MTFFNzg4QThCNzE3RTY0OUE0RTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkxMDE0OTMwLTVjMmItMTA0MC1iMjA5LTVlMjExY2JhOTdhZiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMGE1MjBkMy1lMjQ4LTMwNGEtYWFlZS03NTAxOTY3YzFlYmUiLz4gPC9y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";

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

                                    if (valueSubPanelEle.defaultValue) {
                                        reference.allDefaultValueInputs.push({ sel: valueSubPanelEle.id, val: valueSubPanelEle.defaultValue });
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

                                    if (valueSubPanelEle.defaultValue) {
                                        reference.allDefaultValueInputs.push({ sel: valueSubPanelEle.id, val: valueSubPanelEle.defaultValue });
                                    }

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

                                    if (valueSubPanel.validation) {
                                        $("#" + valueSubPanel.id).on("input", function () {
                                            console.log("On Input Element");
                                            let value = $("#" + valueSubPanel.id).val();
                                            if (value.length > 0) {


                                            }
                                        });
                                    }
                                    break;

                                case "hidden":

                                    reference.allInputs.push({ 'name': valueSubPanelEle.label.value, 'selector': valueSubPanelEle.name, "type": valueSubPanelEle.type });

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

                                                    values.push(($("#" + valueSubPanelEle.id + "Index").val() == "") ? 0 : parseInt($("#" + valueSubPanelEle.id + "Index").val()));
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
                                                        $("#" + valueSubPanelEle.id + "Index").val(($("#" + valueSubPanelEle.id + "Index").val() == "") ? 1 : parseInt($("#" + valueSubPanelEle.id + "Index").val()) + 1);
                                                        var index = parseInt($("#" + valueSubPanelEle.id + "Index").val());
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
                                        "<img width='450' height='450' style='width: 450px;height: 450px' src='" + defaultImg + "' class='" + valueSubPanelEle.class + "' id='" + valueSubPanelEle.id + "'>" +
                                        "<div class='caption'> <h3>" + valueSubPanelEle.labels.secondLabel + "<a class='anchorjs-link' href='#thumbnail-label'><span class='anchorjs-icon'></span></a></h3> " +
                                        " <p><button id=" + valueSubPanelEle.id + 'NA' + " class='btn btn-danger imageNotApplybuttons'>No Aplica</button><input type='file' id='" + valueSubPanelEle.id + "Event' accept='image/*' capture='camera'></p></div> </div>" +
                                        "</div>");

                                    reference.allInputs.push({ 'name': valueSubPanelEle.label.value, 'selector': valueSubPanelEle.id, "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });

                                    $("#" + valueSubPanelEle.id + "NA").click(function () {
                                        console.log("Image Not Apply");
                                        $("#" + valueSubPanelEle.id).prop("src", imageNotApply);
                                    });

                                    $("#" + valueSubPanelEle.id + "Event").on('change', function (event) {
                                        /*
                                        message.launchProcessImageModal();
                                        var myCanvas = $('#canvasRezise')[0];
                                        var ctx = myCanvas.getContext('2d');
                                        var img = new Image();

                                        img.onload = function () {

                                            myCanvas.width = 500;
                                            myCanvas.height = 600;
                                            ctx.drawImage(img, 0, 0, 500, 600);

                                            ctx.font = "bold 8pt sans-serif";
                                            ctx.shadowColor = 'black';
                                            ctx.fillStyle = "white";
                                            ctx.shadowBlur = 7;

                                            //ctx.fillText('SDM Ticket : Offline Version ', 10, (myCanvas.height - 150));
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

                                                //ctx.fillText('Direccion: ' + 'Offline Version', (myCanvas.width / 2) - 80, (myCanvas.height - 10));
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
                                        */
                                    });

                                    break;

                                case "graphic":

                                    $("#" + valueSubPanel.id + " > .panel-body ").append("<div  id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'><canvas id='" + valueSubPanelEle.id + "' width='" + valueSubPanelEle.width + "' height='" + valueSubPanelEle.height + "'> </canvas></div>");

                                    for (inputEle of valueSubPanelEle.inputsData) {
                                        $("#" + inputEle).on("input", function () {

                                            /*reference.removeChart(valueSubPanelEle.id, valueSubPanelEle.idDiv, valueSubPanelEle.divClass, valueSubPanelEle.id, valueSubPanelEle.width , valueSubPanelEle.height);
                                            */

                                            reference.generateChart(valueSubPanelEle.id, valueSubPanelEle.width, valueSubPanelEle.height, valueSubPanelEle.graphicType, valueSubPanelEle.labels, valueSubPanelEle.labelDataSet, valueSubPanelEle.inputsData, valueSubPanelEle.backgroundColor, valueSubPanelEle.borderColor, valueSubPanelEle.xlabel, valueSubPanelEle.ylabel);
                                        });
                                    }



                                    break;

                                case "image1Label":
                                    let ref = this;
                                    let labelRequired;
                                    switch (valueSubPanelEle.required) {
                                        case true:
                                            labelRequired = "* ";
                                            break;

                                        case false:
                                            labelRequired = "";
                                            break;
                                    }

                                    $("#" + valueSubPanel.id + "> .panel-body").append("<div id='" + valueSubPanelEle.idDiv + "' class='" + valueSubPanelEle.divClass + "'>" +
                                        "<div id='" + valueSubPanelEle.idDiv + "' class='thumbnail' align='center'>" +
                                        "<img width='450' height='450' style='width: 450px;height: 450px' src='" + defaultImg + "' class='" + valueSubPanelEle.class + "' id='" + valueSubPanelEle.id + "'>" +
                                        "<div class='caption'> <h3>" + labelRequired + valueSubPanelEle.labels.firstLabel + "<a class='anchorjs-link' href='#thumbnail-label'><span class='anchorjs-icon'></span></a></h3> " +
                                        "<div>  <label for='" + valueSubPanelEle.id + "Event' class='btn btn-primary'> Seleccionar Imagen </label> <button id=" + valueSubPanelEle.id + 'NA' + " class='btn btn-danger imageNotApplybuttons'>No Aplica</button>  <input type='file' id='" + valueSubPanelEle.id + "Event' accept='image/*' capture='camera' style='visibility:hidden;'></div> </div>" +
                                        "</div>");

                                    reference.allInputs.push({ 'name': valueSubPanelEle.label.value, 'selector': valueSubPanelEle.id, "type": valueSubPanelEle.type, "required": valueSubPanelEle.required });

                                    $("#" + valueSubPanelEle.id).click(function () {
                                        var elem = document.getElementById('' + valueSubPanelEle.id);
                                        // Go full-screen based on broswer javascript runtime
                                        if (elem.requestFullscreen) {
                                            i.requestFullscreen();
                                        } else if (elem.webkitRequestFullscreen) {
                                            i.webkitRequestFullscreen();
                                        } else if (elem.mozRequestFullScreen) {
                                            i.mozRequestFullScreen();
                                        } else if (elem.msRequestFullscreen) {
                                            i.msRequestFullscreen();
                                        }
                                    });

                                    $("#" + valueSubPanelEle.id + "NA").click(function () {
                                        console.log("Image Not Apply");
                                        $("#" + valueSubPanelEle.id).prop("src", imageNotApply);
                                    });

                                    $("#" + valueSubPanelEle.id + "Event").on('change', function (event) {
                                        //reference.grantPermissionPosition()
                                        message.launchProcessImageModal();

                                        var myCanvas = $('#canvasRezise')[0];
                                        var ctx = myCanvas.getContext('2d');
                                        var img = new Image();

                                        img.onload = function () {

                                            myCanvas.width = 500;
                                            myCanvas.height = 600;
                                            ctx.drawImage(img, 0, 0, 500, 600);

                                            ctx.font = "bold 8pt sans-serif";
                                            ctx.shadowColor = 'black';
                                            ctx.fillStyle = "white";
                                            ctx.shadowBlur = 7;

                                            //ctx.fillText('SDM Ticket : ' + 'Offline Version', 10, (myCanvas.height - 150));
                                            //ctx.fillText('Sitio: ' + 'Offline Version', 10, (myCanvas.height - 130));
                                            ctx.fillText('Hora Actual: ' + new Date().toString().split("GMT")[0], 10, (myCanvas.height - 110));
                                            ctx.font = "bold 8pt sans-serif";
                                            ctx.shadowColor = 'black';
                                            ctx.fillStyle = "white";
                                            ctx.shadowBlur = 7;


                                            navigator.geolocation.getCurrentPosition(function (position) {

                                                ctx.fillText('Latitud : ' + position.coords.latitude, 10, (myCanvas.height - 90));
                                                ctx.fillText('Longitud : ' + position.coords.longitude, 10, (myCanvas.height - 70));
                                                ctx.fillText('Precision : Aprox. ' + position.coords.accuracy + ' Metros', 10, (myCanvas.height - 50));
                                                //ctx.fillText('Direccion: ' + 'Offline Version', (myCanvas.width / 2) - 80, (myCanvas.height - 10));
                                                //ctx.font = "italic 8pt sans-serif";
                                                //ctx.shadowColor = 'black';
                                                //ctx.fillStyle = "white";
                                                //ctx.shadowBlur = 7;
                                                //ctx.fillText('Este Imagen fue cargada en Smart Docs', 10, (myCanvas.height - 30));
                                                //ctx.fillText('Huawei @OWS', 80, (myCanvas.height - 10));

                                                $("#" + valueSubPanelEle.id).attr("src", myCanvas.toDataURL());
                                                //$("#" + valueSubPanelEle.id).attr("src", img.src);
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
    removeChart: function (subpanelId, elementIdDiv, elementDivClass, elementId, elementWidth, elementHeight) {
        $("#" + elementId).remove();
        $("#" + subpanelId + " > .panel-body >").append("<div  id='" + elementIdDiv + "' class='" + elementDivClass + "'><canvas id='" + elementId + "' width='" + elementWidth + "' height='" + elementHeight + "'> </canvas></div>");
    },
    generateChart: function (canvasId, chartWidth, chartHeight, chartType, chartLabels, chartslabelDataSet, inputsData, chartBackgroundColor, chartBorderColor, chartXlabel, chartYlabel) {
        console.log("Generating Chart");

        let chartData = [];

        for (let inputData of inputsData) {
            chartData.push($("#" + inputData).val());
        }

        let ctx = document.getElementById(canvasId);
        //ctx.destroy();
        ctx.width = chartWidth;
        ctx.height = chartHeight;
        var myChart = new Chart(ctx, {
            type: chartType,
            data: {
                labels: chartLabels,
                datasets: [{
                    label: chartslabelDataSet,
                    data: chartData,
                    backgroundColor: [
                        chartBackgroundColor
                    ],
                    borderColor: [
                        chartBorderColor
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: chartYlabel
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: chartXlabel
                        }
                    }]
                }
            }
        });
    },
    allInputsFilled: [],
    "askforpermision": function () {

    },

    "validateField": function (name, type, selector) {
        let reference = this;
        var defaultImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRkVFMEI5M0E2QkMxMUU2QjUxMUY2QzdEQUU2NTQ2OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRkVFMEI5NEE2QkMxMUU2QjUxMUY2QzdEQUU2NTQ2OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVGRUUwQjkxQTZCQzExRTZCNTExRjZDN0RBRTY1NDY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVGRUUwQjkyQTZCQzExRTZCNTExRjZDN0RBRTY1NDY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Z8XpDgAAmltJREFUeNrsvQtYXNl1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";
        switch (type) {

            case "image1Label": case "image2Labels":
                if ($("#" + selector).attr('src') == defaultImg) {
                    reference.allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': defaultImg });
                    return false;
                }
                else {
                    reference.allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': $("#" + selector).attr('src') });
                    return true;
                }

                break;


            case "textArea": case "text":

                if ($("#" + selector).val().length < 1) {
                    //Contain Blank Spaces
                    reference.allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': "" });
                    return false;
                }
                else {
                    //No Contain Blanck Spaces
                    reference.allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': $("#" + selector).val() });
                    return true;
                }

                break;

            case "table":

                if ($("#" + selector + "Value").val()) {
                    reference.allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': $("#" + selector + "Value").val(), 'indix': $("#" + selector + "Index").val() });
                }
                else {
                    reference.allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': "", 'indix': "" });
                }
                return true;

                break;
            case "radio":
                if ($("input[name='" + selector + "']:checked").val() != undefined) {
                    reference.allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': $("input[name='" + selector + "']:checked").val() });
                    return true;
                }
                else {
                    reference.allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': '' });
                    return false;
                }
                break;
            default:
                if ($("#" + selector).val()) {
                    reference.allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': $("#" + selector).val() });
                    return true;
                }
                else {
                    reference.allInputsFilled.push({ 'name': name, 'sel': selector, 'type': type, 'val': "" });
                    return false;
                }
                break;

        }
    },
    /**
     * Property: allDefaultValueInputs
     * This will be an array that contains all the default value inputs.
     * The array must be filled by executeEngine Method
     */
    "allDefaultValueInputs": [],
    "fillDefaultValues": function (userInformation, siteInformation) {
        let reference = this;
        console.log("Fill Default Value Inputs");
        for (let input of reference.allDefaultValueInputs) {
            switch (input.val) {
                case "currentDate":
                    var now = new Date();
                    var currentDateFormmated = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
                    $("#" + input.sel).val(currentDateFormmated.toISOString().slice(0, 10));
                    break;
                case "userFullname":
                    $("#" + input.sel).val(userInformation.fullname);
                    break;
                case "userMobile":
                    $("#" + input.sel).val(userInformation.cellphone);
                    break;
                case "userCompany":
                    $("#" + input.sel).val(userInformation.company);
                    break;
                case "userEmail":
                    $("#" + input.sel).val(userInformation.company);
                    break;
                case "siteAssetTower":
                    $("#" + input.sel).val(siteInformation.siteId);
                    break;
                case "siteName":
                    $("#" + input.sel).val(siteInformation.name);
                    break;
                case "sitePortafolio":
                    $("#" + input.sel).val(siteInformation.portafolio);
                    break;
                case "siteAnchorTenant":
                    $("#" + input.sel).val(siteInformation.anchorTenant);
                    break;
                case "siteFmOffice":
                    $("#" + input.sel).val(siteInformation.fmOffice);
                    break;
                case "siteCity":
                    $("#" + input.sel).val(siteInformation.city);
                    break;
                case "siteRegion":
                    $("#" + input.sel).val(siteInformation.region);
                    break;
            }
        }

    },
    "saveAnswer": function () {
        let reference = this;
        var allReqComplete = false;
        var arrayAllReqComplete = [];
        reference.allInputsFilled = [];
        var validate;
        var fieldsEmpty;
        let response = {};

        reference.allInputs.forEach((value, index) => {

            validate = reference.validateField(value.name, value.type, value.selector);

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
        response = { "userAnswer": JSON.stringify(reference.allInputsFilled), "completed": allReqComplete }
        if (allReqComplete == false) {
            $("#emptyFieldsText").text(fieldsEmpty);
            response["fieldsEmpty"] = fieldsEmpty
        }

        return response;
    },
    "changeInputColor": function (selector) {
        $("#")
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

                case "radio":
                    $("input:radio[name='" + value.sel + "'][value='" + value.val + "']").prop("checked", true);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {
    "uidGen": function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {let indexDb = __webpack_require__(2);
let message = __webpack_require__(1);

module.exports = {
    "visits": [],
    "visitSelected": {},
    "getVisits": function () {
        let reference = this;
        return new Promise(function (resolve, reject) {
            indexDb.getVisits().then(function (visitsResponse) {
                reference.visits = visitsResponse;
                resolve(reference.visits);
            });
        }).catch(function (err) {
            reject(err);
        });
    },
    "uploadVisitsToCloud": function () {
        console.log("Upload to Visit on Action");
        let reference = this;
        reference.getVisits().then(function (visits) {
            let cont = 0
            let visitsToUpdate = [];
            for (let visitsToUpd of reference.visits) {
                if (!visitsToUpd.cloud) {
                    this["visitsToUpdate" + cont] = reference.uploadVisit({
                        name: visitsToUpd.name,
                        siteId: visitsToUpd.siteId,
                        visitId: visitsToUpd.visitId,
                        author: visitsToUpd.author,
                        creationDate: visitsToUpd.creationDate
                    });
                    visitsToUpdate.push(this["visitsToUpdate" + cont]);
                    cont += 1;
                }
            }
            return new Promise(function (resolve, reject) {
                Promise.all(visitsToUpdate).then(function (values) {
                    console.log("Visits Update ", values);
                    resolve();
                }).catch(function (err) {
                    reject(err);
                })
            });
        });

    },
    "uploadVisit": function (dataToUpdate) {
        let updateVisitLocal = new Promise(function (resolve, reject) {
            indexDb.updateVisit(dataToUpdate.visitId).then(function () {
                resolve();
            });
        });

        let updateVisitCloud = new Promise(function (resolve, reject) {

            $.ajax({
                url: 'https://smart-docs.herokuapp.com/visits/?token=' + localStorage.getItem('token'),
                type: 'POST',
                dataType: 'json',
                data: dataToUpdate,
                statusCode: {
                    401: function () {
                        message.launchErrorNotAuthenthicateModal("La sesion ha caducado", "El token de seguridad que se te ha asignado ya no es valido", "Solucion: Inicia de nuevo Sesion");
                        localStorage.clear();
                    }
                },
                error: function () {
                    reject();
                },
                complete: function (msgRes) {
                    resolve(msgRes.responseJSON);
                }
            });
        });

        return new Promise(function (resolve, reject) {
            Promise.all([updateVisitLocal, updateVisitCloud]).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    getVisitsSaveonCloud: function () {
        let reference = this;
        return new Promise(function (resolve, reject) {

            $.ajax({
                url: 'https://smart-docs.herokuapp.com/visits/?token=' + localStorage.getItem('token'),
                type: 'GET',
                dataType: 'json',
                statusCode: {
                    401: function () {
                        message.launchErrorNotAuthenthicateModal("La sesion ha caducado", "El token de seguridad que se te ha asignado ya no es valido", "Solucion: Inicia de nuevo Sesion");
                        localStorage.clear();
                    }
                },
                error: function () {
                    reject();
                },
                complete: function (msgRes) {
                    resolve(msgRes.responseJSON);
                }
            });
        });
    },
    "validateVisitLocally": function (visitsOnCloud, visitsLocally) {
        let visitsToUpdate = [];
        //Search for visits on the Cloud to update Locally
        for (let visitCloud of visitsOnCloud) {
            let visitFiltered = visitsLocally.filter(function (visit) {
                return visit.visitId == visitCloud.visitId;
            });
            //Cloud has visit that is not saved locally
            if (visitFiltered.length == 0) {
                visitsToUpdate.push(indexDb.addVisit(
                    visitCloud.visitId, visitCloud.siteId, visitCloud.name, visitCloud.author, true, visitCloud.creationDate));
            }
        }

        //Delete unexisting visits Locally
        for (let visitLocal of visitsLocally) {
            let visitFiltered = visitsOnCloud.filter(function (visit) {
                return visit.visitId == visitLocal.visitId;
            });
            if (visitFiltered.length == 0) {
                visitsToUpdate.push(indexDb.deleteVisit(visitLocal.visitId));
            }
        }

        return new Promise(function (resolve, reject) {
            Promise.all(visitsToUpdate).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
    }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".checkbox3 label::before,.radio3 label::before{overflow:hidden;vertical-align:middle;text-align:center}.checkbox3 label,.radio3 label{white-space:nowrap;cursor:pointer}.checkbox3{position:relative}.checkbox3 input{position:absolute;left:-9999px}.checkbox3 label::after,.checkbox3 label::before{content:'';top:10px;bottom:10px;left:0;display:block}.checkbox3 label{display:block;position:relative;padding:11px 0 11px 30px;font-size:12px;margin-bottom:0;margin-top:-4px}.checkbox3 label::before{position:absolute;width:21px;height:21px;border:1px solid #CCC;-moz-border-radius:1px;border-radius:1px;-webkit-transition:background-color .2s;-moz-transition:background-color .2s;transition:background-color .2s}.checkbox3 label::after{position:absolute;width:19px;height:19px;border:12px solid #FFF;margin:1px;-webkit-transition:all 50ms;-moz-transition:all 50ms;transition:all 50ms;opacity:0}.checkbox3 input:checked+label::before{border-width:1px;border-style:solid;background-color:#444;border-color:#444;color:#fff}.checkbox3 input:checked+label::after{border:3px solid #FFF;opacity:1}.checkbox3.checkbox-sm label{padding:8px 0 8px 22px}.checkbox3.checkbox-sm label::before{width:14px;height:14px;line-height:14px}.checkbox3.checkbox-sm label::after{width:12px;height:12px}.checkbox3.checkbox-lg label{padding:15px 0 15px 40px}.checkbox3.checkbox-lg label::before{width:28px;height:27px;line-height:24px}.checkbox3.checkbox-lg label::after{width:26px;height:25px}.checkbox3.checkbox-inline,.radio3.radio-inline{padding-top:0;padding-left:0;padding-right:0;margin-left:0;margin-right:20px}.checkbox3.checkbox-inline input[type=checkbox],.checkbox3.checkbox-inline input[type=radio],.radio3.radio-inline input[type=checkbox],.radio3.radio-inline input[type=radio]{position:absolute}.checkbox3.checkbox-check input:checked+label::after,.checkbox3.checkbox-check label::after{border:0}.checkbox3.checkbox-check label::after{content:\"\\F00C\";font-family:FontAwesome;font-size:12px;color:#FFF;width:19px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border-width:0}.checkbox3.checkbox-check.checkbox-sm label::after{font-size:9px;line-height:12px;width:12px}.checkbox3.checkbox-check.checkbox-lg label::after{font-size:16px;line-height:26px;width:26px}.checkbox3.checkbox-check.checkbox-light label::after{color:#444}.checkbox3.checkbox-circle label::after,.checkbox3.checkbox-circle label::before{-moz-border-radius:20px;border-radius:20px}.checkbox3.checkbox-round label::after,.checkbox3.checkbox-round label::before,.checkbox3.checkbox-s1 label::after,.checkbox3.checkbox-s1 label::before{-moz-border-radius:4px;border-radius:4px}.checkbox3.checkbox-light label::before{background-color:transparent}.checkbox3.checkbox-light input:checked+label::before{background-color:transparent;border-color:#444}.checkbox3.checkbox-info input:checked+label::before{background-color:#2caef5;border-color:#2caef5}.checkbox3.checkbox-primary input:checked+label::before{background-color:#4183d7;border-color:#4183d7}.checkbox3.checkbox-success input:checked+label::before{background-color:#36b846;border-color:#36b846}.checkbox3.checkbox-warning input:checked+label::before{background-color:#ff9c00;border-color:#ff9c00}.checkbox3.checkbox-danger input:checked+label::before{background-color:#e50011;border-color:#e50011}.checkbox3.checkbox-primary.checkbox-light input:checked+label::before{background-color:transparent;border-color:#4183d7}.checkbox3.checkbox-primary.checkbox-light input:checked+label::after{color:#4183d7}.checkbox3.checkbox-info.checkbox-light input:checked+label::before{background-color:transparent;border-color:#2caef5}.checkbox3.checkbox-info.checkbox-light input:checked+label::after{color:#2caef5}.checkbox3.checkbox-success.checkbox-light input:checked+label::before{background-color:transparent;border-color:#36b846}.checkbox3.checkbox-success.checkbox-light input:checked+label::after{color:#36b846}.checkbox3.checkbox-warning.checkbox-light input:checked+label::before{background-color:transparent;border-color:#ff9c00}.checkbox3.checkbox-warning.checkbox-light input:checked+label::after{color:#ff9c00}.checkbox3.checkbox-danger.checkbox-light input:checked+label::before{background-color:transparent;border-color:#e50011}.checkbox3.checkbox-danger.checkbox-light input:checked+label::after{color:#e50011}.radio3{position:relative}.radio3 input{position:absolute;left:-9999px}.radio3 label{display:block;position:relative;padding:11px 0 11px 30px;font-size:12px;margin-bottom:0;margin-top:-4px}.radio3 label::after,.radio3 label::before{content:'';display:block;position:absolute;top:10px;bottom:10px;left:0}.radio3 label::before{width:21px;height:21px;border:1px solid #CCC;-webkit-transition:background-color .2s;-moz-transition:background-color .2s;transition:background-color .2s}.radio3 label::after{width:19px;height:19px;border:12px solid #FFF;margin:1px;-webkit-transition:all 50ms;-moz-transition:all 50ms;transition:all 50ms;opacity:0}.radio3 input:checked+label::before{font-family:FontAwesome;border-width:1px;border-style:solid;background-color:#444;border-color:#444;color:#fff}.radio3 input:checked+label::after{border:3px solid #FFF;opacity:1}.radio3.radio-check label::after,.radio3.radio-check.radio-light label::after{content:\"\\F00C\";font-family:FontAwesome;color:#FFF;width:19px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border-width:0}.radio3 label::after,.radio3 label::before{-moz-border-radius:20px;border-radius:20px}.radio3.radio-check input:checked+label::after{border-width:0}.radio3.radio-check.radio-light input:checked+label::before{background-color:transparent}.radio3.radio-check.radio-light input:checked+label::after{border-width:0;color:#444}.radio3.radio-sm label{padding:8px 0 8px 22px}.radio3.radio-sm label::before{width:14px;height:14px;line-height:14px}.radio3.radio-sm label::after{width:12px;height:12px}.radio3.radio-lg label{padding:15px 0 15px 40px}.radio3.radio-lg label::before{width:28px;height:27px;line-height:24px}.radio3.radio-lg label::after{width:26px;height:25px}.radio3.radio-check.radio-sm label::after{font-size:9px;line-height:12px;width:12px}.radio3.radio-check.radio-lg label::after{font-size:16px;line-height:26px;width:26px}.radio3.radio-primary input:checked+label::before{background-color:#4183d7;border-color:#4183d7}.radio3.radio-info input:checked+label::before{background-color:#2caef5;border-color:#2caef5}.radio3.radio-success input:checked+label::before{background-color:#36b846;border-color:#36b846}.radio3.radio-warning input:checked+label::before{background-color:#ff9c00;border-color:#ff9c00}.radio3.radio-danger input:checked+label::before{background-color:#e50011;border-color:#e50011}.radio3.radio-primary.radio-light input:checked+label::before{background-color:transparent}.radio3.radio-primary.radio-light input:checked+label::after{color:#4183d7}.radio3.radio-info.radio-light input:checked+label::before{background-color:transparent}.radio3.radio-info.radio-light input:checked+label::after{color:#2caef5}.radio3.radio-success.radio-light input:checked+label::before{background-color:transparent}.radio3.radio-success.radio-light input:checked+label::after{color:#36b846}.radio3.radio-warning.radio-light input:checked+label::before{background-color:transparent}.radio3.radio-warning.radio-light input:checked+label::after{color:#ff9c00}.radio3.radio-danger.radio-light input:checked+label::before{background-color:transparent}.radio3.radio-danger.radio-light input:checked+label::after{color:#e50011}", ""]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\r\n.label-container{\r\n\tposition:fixed;\r\n\tbottom:48px;\r\n\tright:105px;\r\n\tdisplay:table;\r\n\tvisibility: hidden;\r\n}\r\n\r\n.label-text{\r\n\tcolor:#FFF;\r\n\tbackground:rgba(51,51,51,0.5);\r\n\tdisplay:table-cell;\r\n\tvertical-align:middle;\r\n\tpadding:10px;\r\n\tborder-radius:3px;\r\n}\r\n\r\n.label-arrow{\r\n\tdisplay:table-cell;\r\n\tvertical-align:middle;\r\n\tcolor:#333;\r\n\topacity:0.5;\r\n}\r\n\r\n.float{\r\n\tposition:fixed;\r\n\twidth:60px;\r\n\theight:60px;\r\n\tbottom:40px;\r\n\tright:40px;\r\n\tbackground-color:#F33;\r\n\tcolor:#FFF;\r\n\tborder-radius:50px;\r\n\ttext-align:center;\r\n\tbox-shadow: 2px 2px 3px #999;\r\n\tz-index:1000;\r\n\tanimation: bot-to-top 2s ease-out;\r\n}\r\n\r\nul.test{\r\n\tposition:fixed;\r\n\tright:40px;\r\n\tpadding-bottom:20px;\r\n\tbottom:80px;\r\n\tz-index:100;\r\n}\r\n\r\nul.test li{\r\n\tlist-style:none;\r\n\tmargin-bottom:10px;\r\n}\r\n\r\nul.test li a{\r\n\tbackground-color:#F33;\r\n\tcolor:#FFF;\r\n\tborder-radius:50px;\r\n\ttext-align:center;\r\n\tbox-shadow: 2px 2px 3px;\r\n\twidth:60px;\r\n\theight:60px;\r\n\tdisplay:block;\r\n}\r\n\r\nul.test:hover{\r\n\tvisibility:visible!important;\r\n\topacity:1!important;\r\n}\r\n\r\n\r\n.my-float{\r\n\tfont-size:24px;\r\n\tmargin-top:18px;\r\n}\r\n\r\na#menu-share + ul{\r\n  visibility: hidden;\r\n}\r\n\r\na#menu-share:hover + ul{\r\n  visibility: visible;\r\n  animation: scale-in 0.5s;\r\n}\r\n\r\na#menu-share i{\r\n\tanimation: rotate-in 0.5s;\r\n}\r\n\r\na#menu-share:hover > i{\r\n\tanimation: rotate-out 0.5s;\r\n}\r\n\r\n@keyframes bot-to-top {\r\n    0%   {bottom:-40px}\r\n    50%  {bottom:40px}\r\n}\r\n\r\n@keyframes scale-in {\r\n    from {transform: scale(0);opacity: 0;}\r\n    to {transform: scale(1);opacity: 1;}\r\n}\r\n\r\n@keyframes rotate-in {\r\n    from {transform: rotate(0deg);}\r\n    to {transform: rotate(360deg);}\r\n}\r\n\r\n@keyframes rotate-out {\r\n    from {transform: rotate(360deg);}\r\n    to {transform: rotate(0deg);}\r\n}", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".flat-blue {\n  background-color: #F9F9F9;\n  /* small screen */ }\n  .flat-blue a {\n    color: #363c46; }\n  .flat-blue a:hover {\n    color: #09486b; }\n  .flat-blue .app-footer {\n    opacity: 0.7;\n    color: #353d47; }\n  .flat-blue .navbar, .flat-blue .navbar.navbar-default {\n    border-bottom: 0px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08); }\n    .flat-blue .navbar > .container-fluid, .flat-blue .navbar.navbar-default > .container-fluid {\n      background-color: #FFF; }\n    .flat-blue .navbar .navbar-header .navbar-brand, .flat-blue .navbar.navbar-default .navbar-header .navbar-brand {\n      color: #F9F9F9; }\n    .flat-blue .navbar .navbar-header .navbar-expand-toggle, .flat-blue .navbar.navbar-default .navbar-header .navbar-expand-toggle {\n      color: #353d47; }\n    .flat-blue .navbar .navbar-header .navbar-right-expand-toggle, .flat-blue .navbar.navbar-default .navbar-header .navbar-right-expand-toggle {\n      color: #353d47; }\n    .flat-blue .navbar .navbar-breadcrumb li, .flat-blue .navbar.navbar-default .navbar-breadcrumb li {\n      color: #353d47; }\n      .flat-blue .navbar .navbar-breadcrumb li a, .flat-blue .navbar.navbar-default .navbar-breadcrumb li a {\n        color: #353d47; }\n    .flat-blue .navbar .navbar-nav > li, .flat-blue .navbar.navbar-default .navbar-nav > li {\n      border-left: 1px solid #F9F9F9; }\n      .flat-blue .navbar .navbar-nav > li > a, .flat-blue .navbar.navbar-default .navbar-nav > li > a {\n        color: #353d47; }\n    .flat-blue .navbar .navbar-nav > li:hover > a, .flat-blue .navbar.navbar-default .navbar-nav > li:hover > a {\n      color: #22A7F0; }\n    .flat-blue .navbar .navbar-nav > li.open > a, .flat-blue .navbar.navbar-default .navbar-nav > li.open > a {\n      background-color: transparent;\n      color: #22A7F0; }\n    .flat-blue .navbar .navbar-nav > li.danger > a, .flat-blue .navbar.navbar-default .navbar-nav > li.danger > a {\n      background-color: transparent;\n      border-bottom: 4px solid #FA2A00;\n      color: #FA2A00; }\n    .flat-blue .navbar .navbar-nav > li.danger.open > a, .flat-blue .navbar.navbar-default .navbar-nav > li.danger.open > a {\n      background-color: #FA2A00;\n      color: #FFF; }\n    .flat-blue .navbar .navbar-nav .dropdown-menu, .flat-blue .navbar.navbar-default .navbar-nav .dropdown-menu {\n      background-color: #F9F9F9;\n      border-color: #E4E4E4; }\n      .flat-blue .navbar .navbar-nav .dropdown-menu .title, .flat-blue .navbar.navbar-default .navbar-nav .dropdown-menu .title {\n        background-color: #FFF; }\n        .flat-blue .navbar .navbar-nav .dropdown-menu .title .badge, .flat-blue .navbar.navbar-default .navbar-nav .dropdown-menu .title .badge {\n          background-color: #353d47; }\n    .flat-blue .navbar .navbar-nav .dropdown-menu.danger, .flat-blue .navbar.navbar-default .navbar-nav .dropdown-menu.danger {\n      border-color: #FA2A00; }\n      .flat-blue .navbar .navbar-nav .dropdown-menu.danger .title, .flat-blue .navbar.navbar-default .navbar-nav .dropdown-menu.danger .title {\n        background-color: #FA2A00;\n        color: #FFF; }\n        .flat-blue .navbar .navbar-nav .dropdown-menu.danger .title .badge, .flat-blue .navbar.navbar-default .navbar-nav .dropdown-menu.danger .title .badge {\n          background-color: #FFF;\n          color: #FA2A00; }\n  .flat-blue .navbar.navbar-inverse {\n    background-color: #353d47;\n    border-bottom: 0px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1); }\n    .flat-blue .navbar.navbar-inverse > .container-fluid {\n      background-color: #353d47; }\n    .flat-blue .navbar.navbar-inverse .navbar-header .navbar-brand {\n      color: #F9F9F9; }\n    .flat-blue .navbar.navbar-inverse .navbar-header .navbar-expand-toggle {\n      color: #FFF; }\n    .flat-blue .navbar.navbar-inverse .navbar-header .navbar-right-expand-toggle {\n      color: #FFF; }\n    .flat-blue .navbar.navbar-inverse .navbar-breadcrumb li {\n      color: #FFF; }\n      .flat-blue .navbar.navbar-inverse .navbar-breadcrumb li a {\n        color: #FFF; }\n    .flat-blue .navbar.navbar-inverse .navbar-nav > li {\n      border-left: 1px solid #363c46; }\n      .flat-blue .navbar.navbar-inverse .navbar-nav > li > a {\n        color: #FFF; }\n    .flat-blue .navbar.navbar-inverse .navbar-nav > li:hover > a {\n      color: #22A7F0; }\n    .flat-blue .navbar.navbar-inverse .navbar-nav > li.open > a {\n      background-color: transparent;\n      color: #22A7F0; }\n    .flat-blue .navbar.navbar-inverse .navbar-nav > li.danger > a {\n      background-color: transparent;\n      border-bottom: 4px solid #FA2A00;\n      color: #FFF; }\n    .flat-blue .navbar.navbar-inverse .navbar-nav > li.danger.open > a {\n      background-color: #FA2A00; }\n    .flat-blue .navbar.navbar-inverse .navbar-nav .dropdown-menu {\n      background-color: #F9F9F9;\n      border-color: #353d47; }\n      .flat-blue .navbar.navbar-inverse .navbar-nav .dropdown-menu .title {\n        background-color: #FFF; }\n        .flat-blue .navbar.navbar-inverse .navbar-nav .dropdown-menu .title .badge {\n          background-color: #353d47; }\n    .flat-blue .navbar.navbar-inverse .navbar-nav .dropdown-menu.danger {\n      border-color: #FA2A00; }\n      .flat-blue .navbar.navbar-inverse .navbar-nav .dropdown-menu.danger .title {\n        background-color: #FA2A00;\n        color: #FFF; }\n        .flat-blue .navbar.navbar-inverse .navbar-nav .dropdown-menu.danger .title .badge {\n          background-color: #FFF;\n          color: #FA2A00; }\n  .flat-blue .side-menu {\n    background-color: #FFF;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08); }\n    .flat-blue .side-menu .navbar-header {\n      background-color: #22A7F0;\n      margin-bottom: 4px; }\n      .flat-blue .side-menu .navbar-header .navbar-brand {\n        color: #19B5FE; }\n    .flat-blue .side-menu .navbar-nav {\n      width: 100%; }\n    .flat-blue .side-menu .navbar {\n      background-color: #FFF;\n      border-bottom: 0px;\n      -moz-box-shadow: none;\n      -webkit-box-shadow: none;\n      box-shadow: none; }\n      .flat-blue .side-menu .navbar li > a {\n        color: #363c46; }\n      .flat-blue .side-menu .navbar li.active {\n        border-left: 0; }\n        .flat-blue .side-menu .navbar li.active > a {\n          border-right: 4px solid #22A7F0;\n          background-color: #FFF; }\n      .flat-blue .side-menu .navbar > li:hover > a {\n        background-color: #FA2A00;\n        color: #FFF; }\n      .flat-blue .side-menu .navbar li.dropdown {\n        background-color: transparent; }\n        .flat-blue .side-menu .navbar li.dropdown > .panel-collapse {\n          background-color: #E4E4E4; }\n        .flat-blue .side-menu .navbar li.dropdown .panel-body {\n          padding: 0 7px; }\n  .flat-blue .side-menu.sidebar-inverse {\n    background-color: #353d47;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08); }\n    .flat-blue .side-menu.sidebar-inverse .navbar {\n      background-color: #353d47;\n      border-bottom: 0px;\n      -moz-box-shadow: none;\n      -webkit-box-shadow: none;\n      box-shadow: none; }\n      .flat-blue .side-menu.sidebar-inverse .navbar li {\n        border-left: 0; }\n        .flat-blue .side-menu.sidebar-inverse .navbar li > a {\n          color: #FFF; }\n      .flat-blue .side-menu.sidebar-inverse .navbar li.active > a {\n        color: #353d47;\n        border-left: 3px solid #22A7F0;\n        border-right: 0px solid #22A7F0;\n        background-color: #FFF; }\n        .flat-blue .side-menu.sidebar-inverse .navbar li.active > a .icon {\n          margin-left: -3px; }\n      .flat-blue .side-menu.sidebar-inverse .navbar > li:hover > a {\n        background-color: #FA2A00;\n        color: #FFF; }\n      .flat-blue .side-menu.sidebar-inverse .navbar li.dropdown > .panel-collapse {\n        background-color: rgba(0, 0, 0, 0.1); }\n      .flat-blue .side-menu.sidebar-inverse .navbar li.dropdown .panel-body {\n        padding: 0 7px; }\n  @media (max-width: 768px) {\n    .flat-blue .navbar.navbar-default .navbar-nav > li {\n      border-left: 0; }\n    .flat-blue .navbar.navbar-default .navbar-right {\n      background-color: #FFF; }\n    .flat-blue .navbar.navbar-inverse .navbar-nav > li {\n      border-left: 0; }\n    .flat-blue .navbar.navbar-inverse .navbar-right {\n      background-color: #353d47; } }\n  .flat-blue .card.red {\n    background-color: #d9534f;\n    color: #FFF; }\n  .flat-blue .card.yellow {\n    background-color: #ffb400;\n    color: #FFF; }\n.flat-blue .card.blueBoots {\n  background-color: #5bc0de;\n  color: #FFF; }\n  .flat-blue .card.green {\n    background-color: #5cb85c;\n    color: #FFF; }\n  .flat-blue .card.blue {\n    background-color: #22A7F0;\n    color: #FFF; }\n.flat-blue .card.goldBootsDark {\n  background-color: #F1A021;\n  color: #FFF; }\n  .flat-blue .card.dark {\n    background-color: #353d47;\n    color: #FFF; }\n  .flat-blue .card.red, .flat-blue .card.yellow, .flat-blue .card.green, .flat-blue .card.blue, .flat-blue .card.dark {\n    border: 0; }\n    .flat-blue .card.red .card-header, .flat-blue .card.yellow .card-header, .flat-blue .card.green .card-header, .flat-blue .card.blue .card-header, .flat-blue .card.dark .card-header {\n      border-bottom: 0; }\n      .flat-blue .card.red .card-header .title, .flat-blue .card.yellow .card-header .title, .flat-blue .card.green .card-header .title, .flat-blue .card.blue .card-header .title, .flat-blue .card.dark .card-header .title {\n        color: #FFF; }\n  .flat-blue .card {\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n    border: 0px solid #E4E4E4; }\n    .flat-blue .card .card-header {\n      border-bottom: 1px solid #E4E4E4; }\n      .flat-blue .card .card-header .title {\n        color: #353d47; }\n    .flat-blue .card .card-body .sub-title {\n      border-bottom: 1px solid #EAEAEA; }\n    .flat-blue .card .card-header.no-border {\n      border-bottom: 0; }\n    .flat-blue .card .card-jumbotron {\n      background-color: #EAEAEA; }\n  .flat-blue .card.primary .card-jumbotron {\n    background-color: #353d47;\n    color: #FFF; }\n  .flat-blue .card.profile .card-footer {\n    border-top: 1px solid #F9F9F9; }\n  .flat-blue .card.summary-inline.red:hover {\n    background-color: #7c1a06; }\n  .flat-blue .card.summary-inline.yellow:hover {\n    background-color: #85630f; }\n  .flat-blue .card.summary-inline.green:hover {\n    background-color: #006551; }\n  .flat-blue .card.summary-inline.blue:hover {\n    background-color: #353d47; }\n  .flat-blue .card.summary-inline.dark:hover {\n    background-color: #09486b; }\n  .flat-blue .card.card-success .card-header {\n    background-color: #1ABC9C; }\n    .flat-blue .card.card-success .card-header .title {\n      color: #FFF; }\n  .flat-blue .card.card-info .card-header {\n    background-color: #22A7F0; }\n    .flat-blue .card.card-info .card-header .title {\n      color: #FFF; }\n  .flat-blue .panel.panel-default {\n    border: 1px solid #EAEAEA; }\n    .flat-blue .panel.panel-default .panel-heading {\n      border-bottom: 1px solid #EAEAEA;\n      background-color: #F0F0F0; }\n  .flat-blue .panel.panel-primary {\n    border: 1px solid #353d47; }\n    .flat-blue .panel.panel-primary .panel-heading {\n      border-bottom: 1px solid #353d47;\n      background-color: #73849d;\n      color: #FFF; }\n  .flat-blue .panel.panel-success {\n    border: 1px solid #1ABC9C; }\n    .flat-blue .panel.panel-success .panel-heading {\n      border-bottom: 1px solid #1ABC9C;\n      background-color: #99e9d9;\n      color: #006551; }\n  .flat-blue .panel.panel-info {\n    border: 1px solid #22A7F0; }\n    .flat-blue .panel.panel-info .panel-heading {\n      border-bottom: 1px solid #22A7F0;\n      background-color: #91d5fb;\n      color: #09486b; }\n  .flat-blue .panel.panel-warning {\n    border: 1px solid #FABE28; }\n    .flat-blue .panel.panel-warning .panel-heading {\n      border-bottom: 1px solid #FABE28;\n      background-color: #ffe5a2;\n      color: #85630f; }\n  .flat-blue .panel.panel-danger {\n    border: 1px solid #fb927d; }\n    .flat-blue .panel.panel-danger .panel-heading {\n      border-bottom: 1px solid #fb927d;\n      background-color: #ffb8aa;\n      color: #7c1a06; }\n  .flat-blue .panel.fresh-color.panel-primary {\n    border: 1px solid #353d47; }\n    .flat-blue .panel.fresh-color.panel-primary .panel-heading {\n      border-bottom: 1px solid #353d47;\n      background-color: #353d47;\n      color: #FFF; }\n  .flat-blue .panel.fresh-color.panel-success {\n    border: 1px solid #1ABC9C; }\n    .flat-blue .panel.fresh-color.panel-success .panel-heading {\n      border-bottom: 1px solid #1ABC9C;\n      background-color: #1ABC9C;\n      color: #FFF; }\n  .flat-blue .panel.fresh-color.panel-info {\n    border: 1px solid #22A7F0; }\n    .flat-blue .panel.fresh-color.panel-info .panel-heading {\n      border-bottom: 1px solid #22A7F0;\n      background-color: #22A7F0;\n      color: #FFF; }\n  .flat-blue .panel.fresh-color.panel-warning {\n    border: 1px solid #FABE28; }\n    .flat-blue .panel.fresh-color.panel-warning .panel-heading {\n      border-bottom: 1px solid #FABE28;\n      background-color: #FABE28;\n      color: #FFF; }\n  .flat-blue .panel.fresh-color.panel-danger {\n    border: 1px solid #FA2A00; }\n    .flat-blue .panel.fresh-color.panel-danger .panel-heading {\n      border-bottom: 1px solid #FA2A00;\n      background-color: #FA2A00;\n      color: #FFF; }\n  .flat-blue .btn.btn-default {\n    background-color: #F0F0F0;\n    border-color: #EAEAEA; }\n  .flat-blue .btn.btn-default:hover {\n    background-color: #EAEAEA; }\n  .flat-blue .btn.btn-primary {\n    background-color: #353d47;\n    color: #FFF;\n    border-color: #353d47; }\n  .flat-blue .btn.btn-success {\n    background-color: #1ABC9C;\n    color: #FFF;\n    border-color: #1ABC9C; }\n  .flat-blue .btn.btn-warning {\n    background-color: #FABE28;\n    color: #FFF;\n    border-color: #FABE28; }\n  .flat-blue .btn.btn-info {\n    background-color: #22A7F0;\n    color: #FFF;\n    border-color: #22A7F0; }\n  .flat-blue .btn.btn-danger {\n    background-color: #FA2A00;\n    color: #FFF;\n    border-color: #FA2A00; }\n  .flat-blue .btn.btn-link {\n    color: #353d47; }\n  .flat-blue .progress .progress-bar {\n    background-color: #353d47;\n    color: #FFF; }\n  .flat-blue .progress .progress-bar.progress-bar-success {\n    background-color: #1ABC9C; }\n  .flat-blue .progress .progress-bar.progress-bar-info {\n    background-color: #22A7F0; }\n  .flat-blue .progress .progress-bar.progress-bar-warning {\n    background-color: #FABE28; }\n  .flat-blue .progress .progress-bar.progress-bar-danger {\n    background-color: #FA2A00; }\n  .flat-blue .color-white {\n    color: #FFF; }\n  .flat-blue .pagination > li > a {\n    color: #353d47; }\n  .flat-blue .pagination .active > a, .flat-blue .pagination .active > a:focus, .flat-blue .pagination .active > a:hover, .flat-blue .pagination .active span, .flat-blue .pagination .active > span:focus, .flat-blue .pagination .active > span:hover {\n    background-color: #353d47;\n    border-color: #353d47;\n    color: #FFF; }\n  .flat-blue .modal.modal-primary .modal-header {\n    background-color: #353d47;\n    color: #FFF; }\n  .flat-blue .modal.modal-success .modal-header {\n    background-color: #1ABC9C;\n    color: #FFF; }\n  .flat-blue .modal.modal-info .modal-header {\n    background-color: #22A7F0;\n    color: #FFF; }\n  .flat-blue .modal.modal-warning .modal-header {\n    background-color: #FABE28;\n    color: #FFF; }\n  .flat-blue .modal.modal-danger .modal-header {\n    background-color: #FA2A00;\n    color: #FFF; }\n  .flat-blue .alert.alert-success {\n    background-color: #99e9d9;\n    color: #006551;\n    border-color: #1ABC9C; }\n    .flat-blue .alert.alert-success .alert-link {\n      color: #006551;\n      text-decoration: underline; }\n    .flat-blue .alert.alert-success .btn-link {\n      color: #006551; }\n  .flat-blue .alert.alert-info {\n    background-color: #91d5fb;\n    color: #09486b;\n    border-color: #22A7F0; }\n    .flat-blue .alert.alert-info .alert-link {\n      color: #09486b;\n      text-decoration: underline; }\n    .flat-blue .alert.alert-info .btn-link {\n      color: #09486b; }\n  .flat-blue .alert.alert-warning {\n    background-color: #ffe5a2;\n    border-color: #FABE28;\n    color: #85630f; }\n    .flat-blue .alert.alert-warning .alert-link {\n      color: #85630f;\n      text-decoration: underline; }\n    .flat-blue .alert.alert-warning .btn-link {\n      color: #85630f; }\n  .flat-blue .alert.alert-danger {\n    background-color: #ffb8aa;\n    border-color: #fb927d;\n    color: #7c1a06; }\n    .flat-blue .alert.alert-danger .alert-link {\n      color: #7c1a06;\n      text-decoration: underline; }\n    .flat-blue .alert.alert-danger .btn-link {\n      color: #7c1a06; }\n  .flat-blue .alert.fresh-color {\n    color: #FFF; }\n    .flat-blue .alert.fresh-color .alert-link {\n      color: #FFF;\n      text-decoration: underline; }\n    .flat-blue .alert.fresh-color .btn-link {\n      color: #FFF; }\n  .flat-blue .alert.fresh-color.alert-success {\n    background-color: #1ABC9C; }\n  .flat-blue .alert.fresh-color.alert-info {\n    background-color: #22A7F0; }\n  .flat-blue .alert.fresh-color.alert-warning {\n    background-color: #FABE28; }\n  .flat-blue .alert.fresh-color.alert-danger {\n    background-color: #FA2A00;\n    border-color: #FA2A00; }\n  .flat-blue .list-group .list-group-item.active {\n    background-color: #353d47;\n    color: #FFF;\n    border-color: #353d47; }\n    .flat-blue .list-group .list-group-item.active .badge {\n      color: #353d47; }\n  .flat-blue .list-group .list-group-item.list-group-item-success {\n    background-color: #99e9d9;\n    color: #006551;\n    border-color: #99e9d9; }\n    .flat-blue .list-group .list-group-item.list-group-item-success .badge {\n      background-color: #FFF;\n      color: #1ABC9C; }\n  .flat-blue .list-group .list-group-item.list-group-item-info {\n    background-color: #91d5fb;\n    color: #09486b;\n    border-color: #91d5fb; }\n    .flat-blue .list-group .list-group-item.list-group-item-info .badge {\n      background-color: #FFF;\n      color: #22A7F0; }\n  .flat-blue .list-group .list-group-item.list-group-item-warning {\n    background-color: #ffe5a2;\n    color: #85630f;\n    border-color: #ffe5a2; }\n    .flat-blue .list-group .list-group-item.list-group-item-warning .badge {\n      background-color: #FFF;\n      color: #FABE28; }\n  .flat-blue .list-group .list-group-item.list-group-item-danger {\n    background-color: #ffb8aa;\n    color: #7c1a06;\n    border-color: #ffb8aa; }\n    .flat-blue .list-group .list-group-item.list-group-item-danger .badge {\n      background-color: #FFF;\n      color: #FA2A00; }\n  .flat-blue .bootstrap-switch {\n    border-color: #EAEAEA; }\n    .flat-blue .bootstrap-switch .bootstrap-switch-primary {\n      background-color: #353d47; }\n  .flat-blue .table .active td, .flat-blue .table .active th {\n    background-color: #EAEAEA; }\n  .flat-blue .table .success {\n    color: #006551; }\n    .flat-blue .table .success td, .flat-blue .table .success th {\n      background-color: #99e9d9; }\n  .flat-blue .table .info {\n    color: #09486b; }\n    .flat-blue .table .info td, .flat-blue .table .info th {\n      background-color: #91d5fb; }\n  .flat-blue .table .warning {\n    color: #85630f; }\n    .flat-blue .table .warning td, .flat-blue .table .warning th {\n      background-color: #ffe5a2; }\n  .flat-blue .table .danger {\n    color: #7c1a06; }\n    .flat-blue .table .danger td, .flat-blue .table .danger th {\n      background-color: #ffb8aa; }\n  .flat-blue .table > tbody > tr > td, .flat-blue .table > tbody > tr > th, .flat-blue .table > tfoot > tr > td, .flat-blue .table > tfoot > tr > th {\n    border-color: #EAEAEA; }\n  .flat-blue .table > thead > tr > th {\n    border-color: #EAEAEA; }\n  .flat-blue .table.table-striped > tbody > tr:nth-of-type(odd) {\n    background-color: #FDFDFD; }\n  .flat-blue .login-box .login-form .login-header {\n    color: #FFF; }\n  .flat-blue .login-box .login-form .login-body {\n    background-color: #FFF; }\n  .flat-blue .login-box input {\n    background-color: #F9F9F9;\n    border: 1px solid #F9F9F9; }\n  .flat-blue .login-box .login-footer a {\n    color: #FFF; }\n  .flat-blue .login-box .login-footer a:hover {\n    color: #FFF;\n    text-decoration: underline; }\n  .flat-blue .badge.primary {\n    background-color: #353d47; }\n  .flat-blue .badge.success {\n    background-color: #1ABC9C; }\n  .flat-blue .badge.info {\n    background-color: #22A7F0; }\n  .flat-blue .badge.warning {\n    background-color: #FABE28; }\n  .flat-blue .badge.danger {\n    background-color: #FA2A00; }\n  .flat-blue .nav-tabs {\n    background-color: #EAEAEA; }\n    .flat-blue .nav-tabs > li > a:hover {\n      background-color: #EAEAEA; }\n    .flat-blue .nav-tabs > li.active > a:hover {\n      background-color: #FFF; }\n  .flat-blue .tabs-below > .nav-tabs {\n    border-top: 1px solid #E4E4E4; }\n  .flat-blue .tabs-below > .nav-tabs > li > a:hover,\n  .flat-blue .tabs-below > .nav-tabs > li > a:focus {\n    border-top-color: #E4E4E4;\n    border-bottom-color: transparent; }\n  .flat-blue .tabs-below > .nav-tabs > .active > a,\n  .flat-blue .tabs-below > .nav-tabs > .active > a:hover,\n  .flat-blue .tabs-below > .nav-tabs > .active > a:focus {\n    border-color: transparent #E4E4E4 #E4E4E4 #E4E4E4; }\n  .flat-blue .tabs-left > .nav-tabs {\n    border-right: 1px solid #E4E4E4; }\n  .flat-blue .tabs-left > .nav-tabs > li > a:hover,\n  .flat-blue .tabs-left > .nav-tabs > li > a:focus {\n    border-color: #E4E4E4 #E4E4E4 #E4E4E4 #E4E4E4; }\n  .flat-blue .tabs-left > .nav-tabs .active > a,\n  .flat-blue .tabs-left > .nav-tabs .active > a:hover,\n  .flat-blue .tabs-left > .nav-tabs .active > a:focus {\n    border-color: #E4E4E4 transparent #E4E4E4 #E4E4E4;\n    *border-right-color: #FFF; }\n  .flat-blue .tabs-right > .nav-tabs {\n    border-left: 1px solid #E4E4E4; }\n  .flat-blue .tabs-right > .nav-tabs > li > a:hover,\n  .flat-blue .tabs-right > .nav-tabs > li > a:focus {\n    border-color: #E4E4E4 #E4E4E4 #E4E4E4 #E4E4E4; }\n  .flat-blue .tabs-right > .nav-tabs .active > a,\n  .flat-blue .tabs-right > .nav-tabs .active > a:hover,\n  .flat-blue .tabs-right > .nav-tabs .active > a:focus {\n    border-color: #E4E4E4 #E4E4E4 #E4E4E4 transparent;\n    *border-left-color: #FFF; }\n  .flat-blue .step .nav-tabs {\n    background-color: #FFF; }\n  .flat-blue .step .nav-tabs > li {\n    border: 1px solid #E4E4E4;\n    border-right: 0; }\n  .flat-blue .step .nav-tabs > li:after {\n    border-top: 15px solid transparent;\n    border-bottom: 15px solid transparent;\n    border-left: 15px solid #FFF; }\n  .flat-blue .step .nav-tabs > li:before {\n    border-top: 16px solid transparent;\n    border-bottom: 16px solid transparent;\n    border-left: 16px solid #E4E4E4; }\n  .flat-blue .step .nav-tabs > li.active {\n    background-color: #EAEAEA; }\n    .flat-blue .step .nav-tabs > li.active > a, .flat-blue .step .nav-tabs > li.active > a:focus, .flat-blue .step .nav-tabs > li.active > a:hover {\n      background: transparent; }\n  .flat-blue .step .nav-tabs > li:hover {\n    background-color: #EAEAEA; }\n  .flat-blue .step .nav-tabs > li:hover:after, .flat-blue .step .nav-tabs > li.active:after {\n    border-left: 15px solid #EAEAEA; }\n  .flat-blue .step .nav-tabs > li:last-child {\n    border-right: 1px solid #E4E4E4; }\n  .flat-blue .step .nav-tabs > li.step-success {\n    background-color: #99e9d9;\n    border: 1px solid #1ABC9C; }\n    .flat-blue .step .nav-tabs > li.step-success a {\n      color: #006551; }\n  .flat-blue .step .nav-tabs > li.step-disabled {\n    background-color: #99e9d9; }\n  .flat-blue .step .nav-tabs > li.step-success:after {\n    border-left: 15px solid #99e9d9; }\n  .flat-blue .step .nav-tabs > li.step-success.active:hover:after {\n    border-left: 15px solid #99e9d9; }\n  .flat-blue .step .nav-tabs > li.step-success:hover:after {\n    border-left: 15px solid #EAEAEA; }\n  .flat-blue .step.card-no-padding .nav-tabs > li {\n    border: 0px solid transparent;\n    border-right: 1px solid #E4E4E4;\n    border-bottom: 1px solid #E4E4E4; }\n  .flat-blue .step.card-no-padding .nav-tabs > li:last-child {\n    border-right: 0px solid #E4E4E4; }\n  .flat-blue .step.tabs-left .nav-tabs > li {\n    border: 1px solid #E4E4E4; }\n  .flat-blue .step.tabs-left .nav-tabs > li:after {\n    border-top: 15px solid transparent;\n    border-bottom: 15px solid transparent;\n    border-left: 15px solid #FFF; }\n  .flat-blue .step.tabs-left .nav-tabs > li:before {\n    border-top: 16px solid transparent;\n    border-bottom: 16px solid transparent;\n    border-left: 16px solid #E4E4E4; }\n  .flat-blue .step.tabs-left .nav-tabs > li.active {\n    background-color: #EAEAEA; }\n    .flat-blue .step.tabs-left .nav-tabs > li.active > a, .flat-blue .step.tabs-left .nav-tabs > li.active > a:focus, .flat-blue .step.tabs-left .nav-tabs > li.active > a:hover {\n      background: transparent; }\n  .flat-blue .step.tabs-left .nav-tabs > li:hover {\n    background-color: #EAEAEA; }\n  .flat-blue .step.tabs-left .nav-tabs > li:hover:after, .flat-blue .step.tabs-left .nav-tabs > li.active:after {\n    border-left: 15px solid #EAEAEA; }\n  .flat-blue .step.tabs-left.card-no-padding .nav-tabs > li {\n    border: 0px solid transparent; }\n  .flat-blue .pricing-table {\n    box-shadow: 0 1px 1px #CCC; }\n    .flat-blue .pricing-table .pt-header {\n      background-color: #E4E4E4; }\n      .flat-blue .pricing-table .pt-header .plan-pricing .pricing {\n        text-shadow: 0 1px 1px #FFF; }\n    .flat-blue .pricing-table .pt-body {\n      background-color: #F9F9F9; }\n      .flat-blue .pricing-table .pt-body .plan-detail {\n        border-top: 1px dashed rgba(255, 255, 255, 0.6);\n        padding-top: 1em;\n        margin-top: 1em; }\n    .flat-blue .pricing-table .pt-footer {\n      background-color: #F9F9F9; }\n  .flat-blue .pricing-table.dark-blue .pt-header {\n    background-color: #353d47;\n    color: #FFF; }\n  .flat-blue .pricing-table.dark-blue .pt-body {\n    background-color: #9eaabd;\n    color: #363c46; }\n  .flat-blue .pricing-table.green .pt-header {\n    background-color: #1ABC9C;\n    color: #FFF; }\n  .flat-blue .pricing-table.green .pt-body {\n    background-color: #99e9d9;\n    color: #006551; }\n  .flat-blue .pricing-table.blue .pt-header {\n    background-color: #22A7F0;\n    color: #FFF; }\n  .flat-blue .pricing-table.blue .pt-body {\n    background-color: #91d5fb;\n    color: #09486b; }\n  .flat-blue .pricing-table.yellow .pt-header {\n    background-color: #FABE28;\n    color: #FFF; }\n  .flat-blue .pricing-table.yellow .pt-body {\n    background-color: #ffe5a2;\n    color: #85630f; }\n  .flat-blue .pricing-table.red .pt-header {\n    background-color: #FA2A00;\n    color: #FFF; }\n  .flat-blue .pricing-table.red .pt-body {\n    background-color: #ffb8aa;\n    color: #7c1a06; }\n\n.flat-blue.landing-page .navbar-inverse .navbar-toggle:focus, .flat-blue.landing-page .navbar-inverse .navbar-toggle:hover {\n  background-color: transparent; }\n\n.flat-blue.landing-page .navbar {\n  background-color: transparent;\n  box-shadow: none; }\n  .flat-blue.landing-page .navbar .navbar-nav > .active > a {\n    background-color: transparent; }\n  .flat-blue.landing-page .navbar .navbar-nav > li {\n    border-left: 0px solid #F9F9F9; }\n    .flat-blue.landing-page .navbar .navbar-nav > li > a {\n      color: #FFF; }\n  .flat-blue.landing-page .navbar .navbar-collapse {\n    border: 0; }\n\n.flat-blue.landing-page .navbar.affix .navbar-nav > li > a {\n  color: #353d47; }\n\n.flat-blue.landing-page .navbar.affix .navbar-nav > li:hover > a {\n  color: #22A7F0; }\n\n@media (max-width: 768px) {\n  .flat-blue.landing-page .navbar .navbar-collapse {\n    background-color: #333; }\n  .flat-blue.landing-page .navbar .navbar-right {\n    background-color: transparent;\n    color: #FFF; }\n  .flat-blue.landing-page .navbar.affix .navbar-nav > li > a {\n    color: #FFF; } }\n\n.flat-blue.landing-page .navbar.affix .navbar-brand {\n  color: #353d47; }\n\n.flat-blue.landing-page .navbar.affix .navbar-toggle .icon-bar {\n  background-color: #353d47; }\n\n.flat-blue.landing-page .app-header .app-btn {\n  background-color: transparent;\n  border: 2px solid #FFF; }\n\n.flat-blue.landing-page .app-content-a {\n  background-color: #EAEAEA; }\n", ""]);

// exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "*{\n  font-family: 'Roboto Condensed', sans-serif;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  padding-top: 0px;\n  height: 100%;\n  position: relative;\n  font-size: 13px; }\n\n* {\n  outline: none; }\n\n.row > [class*=\"col-\"] {\n  margin-bottom: 25px; }\n\n.row.no-margin-bottom > [class*=\"col-\"] {\n  margin-bottom: 10px; }\n\n.row.no-gap {\n  margin-left: 0;\n  margin-right: 0; }\n  .row.no-gap > [class*=\"col-\"] {\n    padding-left: 0;\n    padding-right: 0px; }\n\n.no-padding {\n  padding: 0px !important; }\n\n.float-left {\n  float: left; }\n\n.float-right {\n  float: right; }\n\n.clear-both {\n  clear: both; }\n\n.no-margin-bottom {\n  margin-bottom: 0; }\n\n.no-margin {\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0; }\n\na {\n  text-decoration: none; }\n\na:hover {\n  text-decoration: none; }\n\n.font-weight-300 {\n  font-weight: 300; }\n\n.text-indent {\n  text-indent: 1em; }\n\n.navbar {\n  z-index: 10001;\n  padding-left: 60px;\n  -webkit-transition: all 0.25s;\n  transition: all 0.25s; }\n  .navbar > .container, .navbar > .container-fluid {\n    z-index: 10001; }\n    .navbar > .container .navbar-brand, .navbar > .container-fluid .navbar-brand {\n      height: 60px;\n      line-height: 60px;\n      margin-left: 0px;\n      font-family: 'Roboto Condensed', sans-serif;\n      font-weight: 400;\n      padding: 0;\n      font-size: 1.5em; }\n      .navbar > .container .navbar-brand .fa-angle-right, .navbar > .container-fluid .navbar-brand .fa-angle-right {\n        margin-left: 5px;\n        margin-right: 5px; }\n    .navbar > .container .navbar-expand-toggle, .navbar > .container-fluid .navbar-expand-toggle {\n      width: 60px;\n      height: 60px;\n      background-color: transparent;\n      border: 0px;\n      float: left;\n      -moz-transition: all 0.25s linear;\n      -webkit-transition: all 0.25s linear;\n      transition: all 0.25s linear;\n      opacity: 0.75; }\n    .navbar > .container .navbar-expand-toggle .icon, .navbar > .container-fluid .navbar-expand-toggle .icon {\n      font-size: 1.4em; }\n    .navbar > .container .navbar-right-expand-toggle, .navbar > .container-fluid .navbar-right-expand-toggle {\n      width: 60px;\n      height: 60px;\n      background-color: transparent;\n      border: 0px;\n      position: absolute;\n      right: 0;\n      -moz-transition: all 0.25s linear;\n      -webkit-transition: all 0.25s linear;\n      transition: all 0.25s linear;\n      opacity: 0.75; }\n    .navbar > .container .navbar-right-expand-toggle .icon, .navbar > .container-fluid .navbar-right-expand-toggle .icon {\n      font-size: 1.4em; }\n  .navbar .navbar-breadcrumb {\n    margin-left: 0px;\n    background-color: transparent;\n    padding: 0px;\n    float: left; }\n    .navbar .navbar-breadcrumb > li {\n      height: 60px;\n      line-height: 60px;\n      vertical-align: middle;\n      font-family: 'Roboto Condensed', sans-serif;\n      font-size: 1.5em; }\n  .navbar .navbar-nav > li > a {\n    font-family: 'Roboto Condensed', sans-serif;\n    height: 60px;\n    line-height: 60px;\n    padding: 0px 20px 0px 20px; }\n  .navbar .dropdown-menu {\n    padding: 0;\n    border: 0;\n    border-bottom-left-radius: 2px;\n    border-bottom-right-radius: 2px;\n    animation-duration: 0.4s;\n    -webkit-animation-duration: 0.4s;\n    z-index: -1;\n    position: absolute; }\n    .navbar .dropdown-menu .title {\n      font-family: 'Roboto Condensed', sans-serif;\n      padding: 5px 10px;\n      -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n      -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); }\n    .navbar .dropdown-menu .message {\n      font-family: 'Roboto Condensed', sans-serif;\n      text-align: center;\n      padding: 10px 20px; }\n    .navbar .dropdown-menu .notifications.list-group {\n      list-style: none;\n      padding: 0;\n      margin: 0; }\n      .navbar .dropdown-menu .notifications.list-group .list-group-item {\n        min-width: 250px;\n        padding: 8px;\n        border: 0;\n        border-bottom: 1px solid #EEE; }\n        .navbar .dropdown-menu .notifications.list-group .list-group-item .icon {\n          margin-right: 5px; }\n      .navbar .dropdown-menu .notifications.list-group .badge {\n        border-radius: 1em; }\n      .navbar .dropdown-menu .notifications.list-group .list-group-item:last-child {\n        border-bottom-right-radius: 0px;\n        border-bottom-left-radius: 0px; }\n      .navbar .dropdown-menu .notifications.list-group .list-group-item:first-child {\n        border-top-right-radius: 0px;\n        border-top-left-radius: 0px; }\n      .navbar .dropdown-menu .notifications.list-group a.list-group-item:hover {\n        cursor: pointer; }\n  .navbar .dropdown.profile .dropdown-menu {\n    width: 305px;\n    padding-bottom: 0px;\n    text-align: center; }\n    .navbar .dropdown.profile .dropdown-menu li.profile-img {\n      padding: 0px;\n      max-height: 300px;\n      overflow: hidden; }\n      .navbar .dropdown.profile .dropdown-menu li.profile-img img.profile-img {\n        width: 100%;\n        height: auto;\n        margin: 0px;\n        border: 0; }\n    .navbar .dropdown.profile .dropdown-menu .profile-info {\n      font-family: 'Roboto Condensed', sans-serif;\n      padding: 15px; }\n      .navbar .dropdown.profile .dropdown-menu .profile-info .username {\n        font-size: 1.8em; }\n\n.app-container {\n  min-height: 100%;\n  position: relative;\n  padding-bottom: 30px; }\n  .app-container .app-footer {\n    display: block;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    left: 65px;\n    -webkit-transition: all 0.25s;\n    transition: all 0.25s;\n    font-size: 12px;\n    font-family: 'Roboto Condensed', sans-serif; }\n    .app-container .app-footer .wrapper {\n      padding: 10px 35px;\n      padding-left: 25px;\n      height: 50px;\n      line-height: 50px;\n      vertical-align: middle; }\n  .app-container .content-container {\n    margin-right: 0;\n    margin-left: 0; }\n    .app-container .content-container .side-menu {\n      overflow-y: auto;\n      z-index: 100000;\n      position: fixed;\n      width: 60px;\n      height: 100%;\n      -webkit-transition: all 0.25s;\n      transition: all 0.25s; }\n      .app-container .content-container .side-menu .navbar-header {\n        width: 100%;\n        border-bottom: 0px solid #e7e7e7; }\n        .app-container .content-container .side-menu .navbar-header .navbar-brand {\n          width: 455px;\n          line-height: 60px;\n          height: 60px;\n          padding: 0;\n          width: 100%;\n          overflow: hidden;\n          font-family: 'Roboto Condensed', sans-serif; }\n          .app-container .content-container .side-menu .navbar-header .navbar-brand .icon {\n            width: 60px;\n            text-align: center;\n            display: inline-block; }\n          .app-container .content-container .side-menu .navbar-header .navbar-brand .title {\n            margin-left: -10px;\n            display: none; }\n        .app-container .content-container .side-menu .navbar-header .navbar-expand-toggle {\n          position: absolute;\n          right: 0;\n          width: 60px;\n          height: 60px;\n          background-color: transparent;\n          border: 0px;\n          -moz-transition: all 0.25s linear;\n          -webkit-transition: all 0.25s linear;\n          transition: all 0.25s linear;\n          opacity: 0.75; }\n      .app-container .content-container .side-menu .navbar {\n        border: none;\n        padding-left: 0px; }\n      .app-container .content-container .side-menu .navbar-nav li {\n        display: block;\n        width: 100%;\n        overflow: hidden; }\n        .app-container .content-container .side-menu .navbar-nav li a {\n          font-family: 'Roboto Condensed', sans-serif;\n          padding: 0 10px 0 10px;\n          height: 46px;\n          line-height: 46px;\n          display: block;\n          white-space: nowrap; }\n          .app-container .content-container .side-menu .navbar-nav li a .icon {\n            margin-left: 0px;\n            width: 38px;\n            text-align: center;\n            font-size: 1.1em;\n            display: inline-block; }\n          .app-container .content-container .side-menu .navbar-nav li a .title {\n            width: 0px;\n            white-space: nowrap;\n            padding-left: 6px;\n            display: none; }\n      .app-container .content-container .side-menu .navbar-nav li.dropdown {\n        border: 0;\n        margin-bottom: 0;\n        border-radius: 0;\n        box-shadow: none; }\n        .app-container .content-container .side-menu .navbar-nav li.dropdown ul li a {\n          height: 44px;\n          line-height: 44px;\n          vertical-align: middle;\n          padding: 0em 1.2em; }\n        .app-container .content-container .side-menu .navbar-nav li.dropdown > a:after {\n          content: \"\";\n          position: absolute;\n          right: 1em; }\n      .app-container .content-container .side-menu .navbar-nav .panel-collapse.in {\n        display: none; }\n    .app-container .content-container .side-menu:hover {\n      width: 250px; }\n      .app-container .content-container .side-menu:hover .navbar-header .navbar-brand .title {\n        display: inline-block; }\n      .app-container .content-container .side-menu:hover .navbar-nav li a .title {\n        width: 192px;\n        display: inline-block; }\n      .app-container .content-container .side-menu:hover .navbar-nav li.dropdown > a:after {\n        font-family: FontAwesome;\n        content: \"\\F107\";\n        position: absolute;\n        right: 1em; }\n      .app-container .content-container .side-menu:hover .panel-collapse.in {\n        display: block; }\n    .app-container .content-container .side-body {\n      padding-top: 70px; }\n    .app-container .content-container .side-body.padding-top {\n      padding-top: 84px; }\n\n.app-container.expanded .app-footer {\n  left: 250px; }\n  .app-container.expanded .app-footer .wrapper {\n    padding-left: 25px; }\n\n.app-container.expanded .content-container .navbar-top {\n  padding-left: 250px; }\n\n.app-container.expanded .content-container .side-menu {\n  width: 250px; }\n  .app-container.expanded .content-container .side-menu .navbar-header .navbar-brand .title {\n    display: inline-block; }\n  .app-container.expanded .content-container .side-menu .navbar-nav li a .title {\n    display: inline-block; }\n  .app-container.expanded .content-container .side-menu .navbar-nav li .panel-collapse.in {\n    display: block; }\n  .app-container.expanded .content-container .side-menu .navbar-nav li.dropdown > a:after {\n    font-family: FontAwesome;\n    content: \"\\F107\";\n    position: absolute;\n    right: 1em; }\n\n.container-fluid > .navbar-collapse, .container-fluid > .navbar-header, .container > .navbar-collapse, .container > .navbar-header {\n  margin-left: -15px;\n  margin-right: -15px; }\n\n.page-title {\n  font-family: 'Roboto Condensed', sans-serif;\n  margin-left: -10px;\n  margin-right: -10px;\n  padding: 15px 10px;\n  margin-bottom: 0px;\n  height: auto; }\n  .page-title .title {\n    font-size: 2em; }\n  .page-title .page-action {\n    float: right;\n    height: 40px;\n    line-height: 40px;\n    vertical-align: middle; }\n\n.sub-title {\n  font-family: 'Roboto Condensed', sans-serif; }\n  .sub-title > * {\n    display: inline-block; }\n  .sub-title h3 {\n    margin-right: 10px; }\n  .sub-title .description {\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 0.9em; }\n  .sub-title .action .btn {\n    padding: 0 0.5em; }\n\n/* Main body section */\n.app-container .side-body {\n  margin-left: 75px;\n  margin-right: 15px;\n  -webkit-transition: all 0.25s;\n  transition: all 0.25s; }\n\n.app-container.expanded .side-body {\n  margin-left: 260px; }\n\n/* small screen */\n@media (max-width: 768px) {\n  .navbar {\n    padding-left: 0; }\n    .navbar .navbar-header {\n      width: auto;\n      display: block; }\n    .navbar .navbar-nav {\n      width: auto;\n      margin: 0; }\n      .navbar .navbar-nav > li {\n        display: inline-block; }\n    .navbar .navbar-right {\n      position: absolute;\n      top: 0;\n      right: -100%;\n      height: 100%;\n      width: 100%;\n      -moz-transition: all 0.25s linear;\n      -webkit-transition: all 0.25s linear;\n      transition: all 0.25s linear; }\n      .navbar .navbar-right .open .dropdown-menu {\n        position: absolute; }\n    .navbar .navbar-right.expanded {\n      right: 0; }\n  .app-container .navbar-top {\n    min-width: 300px; }\n  .app-container .content-container .side-menu {\n    margin-left: -250px;\n    width: 0px; }\n  .app-container .content-container .side-body {\n    margin-left: 10px; }\n  .app-container.expanded .navbar-top {\n    min-width: 480px;\n    padding-left: 0px; }\n  .app-container.expanded .side-menu {\n    margin-left: 0px;\n    width: 250px; }\n  .app-container.expanded .side-body {\n    margin-left: 10px; }\n  .app-container .app-footer .wrapper, .app-container.expanded .app-footer .wrapper {\n    padding-left: 25px; } }\n\n/* Card */\n.card {\n  background-color: #FFF;\n  border-radius: 1px;\n  overflow: hidden;\n  position: relative; }\n  .card .card-body {\n    padding: 25px; }\n    .card .card-body .sub-title {\n      font-size: 1.2em;\n      padding: 1.2em 0em 0.4em 0em;\n      margin-bottom: 25px; }\n      .card .card-body .sub-title .description {\n        padding-left: 0.4em;\n        font-size: 0.8em;\n        opacity: 0.8; }\n  .card .card-body.half-padding {\n    padding: 12.5px; }\n  .card .card-header .card-title {\n    padding: 1.2em 25px;\n    float: left; }\n    .card .card-header .card-title .title {\n      font-family: 'Roboto Condensed', sans-serif;\n      font-size: 1.5em;\n      text-decoration: none; }\n  .card .card-header .pull-right {\n    padding: 0.5em 1em; }\n  .card .card-header:after {\n    content: '';\n    display: block;\n    clear: both; }\n  .card .card-profile-img img {\n    width: 100%;\n    height: auto; }\n  .card .card-jumbotron {\n    padding: 1.5em 1.5em; }\n\n.card:hover .card-header .title {\n  text-decoration: none !important; }\n\n.card.summary-inline .card-body {\n  padding: 20px; }\n  .card.summary-inline .card-body .content {\n    float: right; }\n    .card.summary-inline .card-body .content .title {\n      font-family: 'Lato', sans-serif;\n      margin-top: -0.3em;\n      font-size: 3.5em;\n      text-align: right; }\n    .card.summary-inline .card-body .content .sub-title {\n      font-family: 'Lato', sans-serif;\n      font-size: 0.9em;\n      text-align: right;\n      margin-top: -10px;\n      margin-bottom: 0;\n      padding: 0;\n      border-bottom: 0; }\n\n.card.profile .card-body {\n  padding: 0.5em 0.8em; }\n\n.card.profile .card-footer {\n  padding: 0.5em 0.8em; }\n\n.panel {\n  border-radius: 1px; }\n  .panel .panel-heading {\n    border-top-left-radius: 2px;\n    border-top-right-radius: 2px; }\n\n.chart {\n  padding: 15px; }\n\n.chart.no-padding {\n  padding: 0;\n  margin-bottom: -5px; }\n\n.btn {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-radius: 1px;\n  border-width: 1px;\n  font-family: 'Roboto Condensed', sans-serif; }\n\n.btn-group-lg > .btn, .btn-group-lg > .btn-lg {\n  border-radius: 1px; }\n\n.progress {\n  border-radius: 1px;\n  box-shadow: none; }\n  .progress .progress-bar {\n    box-shadow: none; }\n\n.pagination {\n  margin-top: 5px;\n  margin-bottom: 5px; }\n  .pagination li:first-child > a, .pagination li:first-child span {\n    border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px; }\n  .pagination li:last-child > a, .pagination li:last-child span {\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px; }\n\n.form-control {\n  border-radius: 1px;\n  box-shadow: none; }\n\n.bs-example-modal .modal {\n  z-index: 100;\n  position: relative;\n  display: block; }\n\n.modal {\n  z-index: 100001; }\n  .modal .modal-dialog .modal-header {\n    font-family: 'Roboto Condensed', sans-serif; }\n  .modal .modal-dialog .modal-content {\n    border-radius: 1px;\n    box-shadow: none; }\n  .modal .modal-dialog .modal-footer .btn {\n    margin-top: 0;\n    margin-bottom: 0; }\n\n.modal-backdrop {\n  z-index: 100000; }\n\n.modal-backdrop.in {\n  opacity: 0.8; }\n\n.alert {\n  border-width: 0px;\n  border-radius: 1px; }\n\n.list-group .badge {\n  border-radius: 1px; }\n\n.list-group .list-group-item:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n\n.list-group .list-group-item:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n\n.checkbox3, .radio3 {\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.checkbox-inline {\n  margin-bottom: 5px; }\n\n.checkbox3 label, .radio3 label {\n  padding: 8px 0 8px 30px; }\n\n.checkbox3 label::before, .radio3 label::before {\n  top: 5px; }\n\n.checkbox3 label::after, .radio3 label::after {\n  top: 5px; }\n\n.checkbox3 label, .radio3 label, .checkbox-inline, .radio-inline {\n  font-weight: normal; }\n\n.bootstrap-switch {\n  border-radius: 1px; }\n\n.thumbnail {\n  border-radius: 1px;\n  padding: 0; }\n  .thumbnail .caption {\n    padding: 0.5em 1.2em; }\n    .thumbnail .caption .h1, .thumbnail .caption .h2, .thumbnail .caption .h3, .thumbnail .caption h1, .thumbnail .caption h2, .thumbnail .caption h3 {\n      margin-top: 15px; }\n\nbody.login-page {\n  background: url(\"/img/huaweiOffice.jpg\")no-repeat center center fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover; }\n  body.login-page .login-box {\n    width: 100%;\n    max-width: 320px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 0; }\n    body.login-page .login-box > .title {\n      margin-bottom: 1em; }\n    body.login-page .login-box > .row {\n      margin-left: 0;\n      margin-right: 0;\n      margin-bottom: 0; }\n  body.login-page .login-form {\n    padding: 0em; }\n    body.login-page .login-form .login-header {\n      margin-bottom: 1.2em;\n      font-size: 1.5em; }\n    body.login-page .login-form .login-body {\n      padding: 1.5em;\n      border-radius: 1px; }\n    body.login-page .login-form input {\n      margin-bottom: 0.8em;\n      margin-top: 0.5em;\n      padding: 1.2em 1em;\n      font-size: 1.1em;\n      border-radius: 1px; }\n  body.login-page .login-button .btn {\n    padding: 0.5em 2em;\n    font-size: 1.1em;\n    border-radius: 1px;\n    margin-bottom: 0; }\n  body.login-page .login-footer {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    width: 100%;\n    text-align: center;\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px; }\n\n@media (max-width: 768px) {\n  body.login-page .login-form .login-header {\n    margin-bottom: 1em; }\n  body.login-page .login-box {\n    width: 100%;\n    max-width: 260px; } }\n\n.dataTables_wrapper .row {\n  margin-bottom: 0.5em; }\n\n.dataTables_wrapper .top {\n  margin-bottom: 6px;\n  position: relative; }\n\n.dataTables_wrapper .bottom {\n  margin-top: 6px; }\n\n.dataTables_wrapper .top:after, .dataTables_wrapper .bottom:after {\n  position: relative;\n  clear: both;\n  display: block;\n  content: ''; }\n\n.dataTables_wrapper .dataTables_paginate .paginate_button {\n  padding: 0;\n  margin-left: 0;\n  border: 0; }\n\n.dataTables_wrapper .dataTables_paginate .paginate_button:hover, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active {\n  border: 0; }\n\n.dataTables_wrapper tfoot {\n  display: none; }\n\n.code-preview {\n  width: 100%;\n  min-height: 400px; }\n\n.nav-tabs > li {\n  margin-bottom: -1px; }\n  .nav-tabs > li > a {\n    border-radius: 0;\n    border: 0; }\n\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {\n  border-radius: 0;\n  border-top: 0; }\n\n.tab-content > div {\n  padding: 20px; }\n\n.tabs-below > .nav-tabs,\n.tabs-right > .nav-tabs,\n.tabs-left > .nav-tabs {\n  border-bottom: 0; }\n\n.tab-content > .tab-pane,\n.pill-content > .pill-pane {\n  display: none; }\n\n.tab-content > .active,\n.pill-content > .active {\n  display: block; }\n\n.tabs-below > .nav-tabs > li {\n  margin-top: -1px;\n  margin-bottom: 0; }\n\n.tabs-below > .nav-tabs > li > a:hover,\n.tabs-below > .nav-tabs > li > a:focus {\n  border-bottom-color: transparent; }\n\n.tabs-left > .nav-tabs > li,\n.tabs-right > .nav-tabs > li {\n  float: none; }\n\n.tabs-left > .nav-tabs > li > a,\n.tabs-right > .nav-tabs > li > a {\n  min-width: 74px;\n  margin-right: 0;\n  margin-bottom: 3px; }\n\n.tabs-left, .tabs-right {\n  display: table; }\n\n.tabs-left > .nav-tabs {\n  display: table-cell;\n  margin-right: 19px; }\n\n.tabs-left > .nav-tabs > li > a {\n  margin-right: -1px; }\n\n.tabs-right > .nav-tabs {\n  display: table-cell;\n  margin-left: 19px; }\n\n.tabs-right > .nav-tabs > li > a {\n  margin-left: -1px; }\n\n.tab:after {\n  content: '';\n  display: block;\n  clear: both; }\n\n.step .nav-tabs {\n  border-bottom: 0px;\n  margin-left: 0;\n  margin-right: 0;\n  margin-bottom: 20px; }\n  .step .nav-tabs > li[class^=\"col-\"] {\n    padding-left: 0;\n    padding-right: 0; }\n  .step .nav-tabs > li:first-child {\n    border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px; }\n  .step .nav-tabs > li {\n    border-right: 0; }\n    .step .nav-tabs > li > a {\n      margin-right: 0;\n      display: block;\n      width: 100%;\n      padding: 1em;\n      padding-left: 2em;\n      vertical-align: middle;\n      white-space: nowrap;\n      overflow: hidden;\n      text-align: left;\n      border-bottom: 0; }\n      .step .nav-tabs > li > a .icon {\n        font-size: 2.5em;\n        display: inline-block;\n        margin-right: 0.25em;\n        vertical-align: middle; }\n      .step .nav-tabs > li > a .step-title {\n        width: auto;\n        display: inline-block;\n        vertical-align: middle;\n        text-align: left; }\n        .step .nav-tabs > li > a .step-title .title {\n          font-weight: bold;\n          font-size: 1.1em; }\n        .step .nav-tabs > li > a .step-title .description {\n          font-size: 0.9em; }\n    .step .nav-tabs > li > a:hover {\n      border-bottom: 0; }\n  .step .nav-tabs > li:after {\n    content: \"\";\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: 50%;\n    right: -15px;\n    transform: translate(0%, -50%);\n    z-index: 100001; }\n  .step .nav-tabs > li:before {\n    content: \"\";\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: 50%;\n    right: -16px;\n    transform: translate(0%, -50%);\n    z-index: 100000; }\n  .step .nav-tabs > li.active > a, .step .nav-tabs > li.active > a:focus, .step .nav-tabs > li.active > a:hover {\n    border: 0;\n    border-radius: 0;\n    border-bottom: 0; }\n  .step .nav-tabs > li:last-child {\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px; }\n  .step .nav-tabs > li:last-child:before, .step .nav-tabs > li:last-child:after {\n    display: none; }\n\n.step .tab-content > div {\n  padding: 0; }\n\n.step.card-no-padding .nav-tabs {\n  margin-bottom: 0px; }\n  .step.card-no-padding .nav-tabs > li {\n    border-radius: 0; }\n\n.step.card-no-padding .tab-content > div {\n  padding: 20px; }\n\n.step.tabs-left .tab-content {\n  padding: 5px 15px;\n  display: table-cell;\n  vertical-align: top; }\n  .step.tabs-left .tab-content > div {\n    padding: 20px; }\n\n.step.tabs-left .nav-tabs {\n  border-bottom: 0px;\n  margin-left: 0;\n  margin-right: 0;\n  margin-bottom: 0; }\n  .step.tabs-left .nav-tabs > li[class^=\"col-\"] {\n    padding-left: 0;\n    padding-right: 0; }\n  .step.tabs-left .nav-tabs > li:first-child {\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px; }\n  .step.tabs-left .nav-tabs > li {\n    border-right: 0px;\n    min-width: 250px;\n    display: table;\n    width: 250px; }\n    .step.tabs-left .nav-tabs > li > a {\n      margin-right: 0;\n      display: table-cell;\n      width: 100%;\n      padding: 1em;\n      padding-left: 2em;\n      vertical-align: middle;\n      table-layout: fixed;\n      white-space: nowrap;\n      overflow: hidden; }\n      .step.tabs-left .nav-tabs > li > a .icon {\n        font-size: 2.5em;\n        display: inline-block;\n        margin-right: 0.25em;\n        vertical-align: middle; }\n      .step.tabs-left .nav-tabs > li > a .step-title {\n        width: auto;\n        display: inline-block;\n        vertical-align: middle; }\n        .step.tabs-left .nav-tabs > li > a .step-title .title {\n          font-weight: bold;\n          font-size: 1.1em; }\n        .step.tabs-left .nav-tabs > li > a .step-title .description {\n          font-size: 0.9em; }\n    .step.tabs-left .nav-tabs > li > a:hover {\n      border-bottom: 0; }\n  .step.tabs-left .nav-tabs > li:after {\n    content: \"\";\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: 50%;\n    transform: translate(0%, -50%);\n    z-index: 10000;\n    display: none; }\n  .step.tabs-left .nav-tabs > li:before {\n    content: \"\";\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: 50%;\n    right: -16px;\n    transform: translate(0%, -50%);\n    z-index: 10000;\n    display: none; }\n  .step.tabs-left .nav-tabs > li.active > a, .step.tabs-left .nav-tabs > li.active > a:focus, .step.tabs-left .nav-tabs > li.active > a:hover {\n    border: 0;\n    border-radius: 0;\n    border-bottom: 0; }\n  .step.tabs-left .nav-tabs > li.active:after, .step.tabs-left .nav-tabs > li.active:before {\n    display: block; }\n  .step.tabs-left .nav-tabs > li:last-child {\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px; }\n\n@media (max-width: 768px) {\n  .step .nav-tabs > li:after {\n    display: none; }\n  .step .nav-tabs > li:before {\n    display: none; } }\n\n.loader-container {\n  display: none; }\n\n.loader .loader-container {\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1003; }\n\n.loader:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.9);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1001;\n  border-radius: 1px; }\n\n.pricing-table .pt-header {\n  text-align: center;\n  padding: 1em; }\n  .pricing-table .pt-header .plan-pricing .pricing {\n    font-size: 2.5em; }\n  .pricing-table .pt-header .plan-pricing .pricing-type {\n    opacity: 0.9; }\n\n.pricing-table .pt-body {\n  padding: 1em;\n  text-align: center; }\n  .pricing-table .pt-body .plan-detail {\n    padding: 0;\n    margin: 0;\n    list-style: none; }\n\n.pricing-table .pt-footer {\n  padding: 0.75em;\n  text-align: center; }\n\n.icons-list {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n  .icons-list > li {\n    float: left;\n    text-align: center;\n    width: 100px;\n    height: 100px;\n    padding: 8px; }\n    .icons-list > li span {\n      display: block; }\n    .icons-list > li .glyphicon {\n      font-size: 1.5em; }\n    .icons-list > li .glyphicon-class {\n      margin-top: 8px;\n      font-size: 0.75em; }\n\n.icons-list:after {\n  content: '';\n  display: block;\n  position: relative;\n  clear: both; }\n\n.row.example > [class*='col-'] > div {\n  background-color: #EEE;\n  padding: 10px;\n  border: 1px solid #DDD; }\n\n.breadcrumb {\n  margin-bottom: 0; }\n  .breadcrumb > li + li:before {\n    font-family: FontAwesome;\n    content: '\\F105';\n    margin-right: 3px; }\n\n.message-list {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n  .message-list > a > li {\n    border-bottom: 1px dotted #EEE;\n    padding: 8px; }\n    .message-list > a > li > .message-block {\n      padding-left: 70px;\n      min-height: 60px; }\n      .message-list > a > li > .message-block .username {\n        font-size: 12px;\n        font-weight: bold; }\n      .message-list > a > li > .message-block .message-datetime {\n        font-size: 10px;\n        color: #AAA; }\n      .message-list > a > li > .message-block .message {\n        font-size: 12px; }\n    .message-list > a > li .profile-img {\n      width: 60px;\n      height: 60px; }\n  .message-list > a:hover li {\n    background-color: rgba(0, 0, 0, 0.01); }\n\n.bs-example > * {\n  margin-bottom: 20px; }\n\n.bs-example > *:last-child {\n  margin-bottom: 5px; }\n\n.landing-page {\n  font-family: 'Roboto Condensed', sans-serif; }\n  .landing-page .navbar .navbar-toggle {\n    position: absolute;\n    right: 0;\n    border-radius: 0;\n    border: 0;\n    height: 44px;\n    padding: 0 15px; }\n  .landing-page .app-header {\n    padding-top: 100px;\n    background-repeat: no-repeat;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    background-position: center;\n    margin-bottom: 0; }\n    .landing-page .app-header .app-logo {\n      margin-bottom: 20px; }\n    .landing-page .app-header .app-description {\n      margin-bottom: 40px; }\n  .landing-page .app-content-a, .landing-page .app-content-b {\n    padding-top: 50px;\n    padding-bottom: 20px; }\n  .landing-page .app-content-b.feature-1 {\n    background-repeat: no-repeat;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    background-position: center;\n    margin-bottom: 0; }\n  .landing-page .app-content-b.contact-us {\n    padding-top: 60px;\n    padding-bottom: 60px;\n    background-repeat: no-repeat;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    background-position: center;\n    margin-bottom: 0; }\n    .landing-page .app-content-b.contact-us .contact-us-header {\n      font-weight: 300;\n      font-size: 46px; }\n    .landing-page .app-content-b.contact-us .contact-us-description {\n      font-weight: 300;\n      font-size: 18px;\n      opacity: 0.9;\n      text-indent: 40px; }\n    .landing-page .app-content-b.contact-us form {\n      margin-top: 20px; }\n      .landing-page .app-content-b.contact-us form input {\n        padding: 10px;\n        width: 100%;\n        border: 0px; }\n  .landing-page .app-content-header {\n    font-weight: 300;\n    font-size: 46px; }\n  .landing-page .app-content-description {\n    font-weight: 300;\n    font-size: 18px; }\n  .landing-page .app-footer {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    margin-bottom: 0; }\n    .landing-page .app-footer p {\n      margin: 0; }\n  .landing-page .navbar-affix {\n    width: 100%;\n    height: 60px;\n    border-top: 2px rgba(78, 205, 196, 0.8);\n    -webkit-transition: all 0.2s ease-in;\n    transition: all 0.2s ease-in;\n    position: fixed;\n    -webkit-box-shadow: 0px 0px 6px 0px rgba(96, 100, 109, 0.4);\n    box-shadow: 0px 0px 6px 0px rgba(96, 100, 109, 0.4); }\n  .landing-page .navbar.affix {\n    z-index: 4000;\n    background-color: rgba(255, 255, 255, 0.95) !important;\n    height: 60px;\n    opacity: 1;\n    margin-top: 0px; }\n  .landing-page .navbar-affix.affix li a {\n    height: 60px;\n    line-height: 60px; }\n  .landing-page .navbar-affix.affix .navbar-nav > li > a {\n    background-color: transparent;\n    font-weight: 400;\n    color: #333; }\n  .landing-page .navbar {\n    padding-left: 0px;\n    background-color: transparent;\n    box-shadow: none; }\n    .landing-page .navbar .navbar-right {\n      position: relative;\n      right: 0; }\n    .landing-page .navbar .navbar-header {\n      border-bottom: 0px solid #e7e7e7; }\n      .landing-page .navbar .navbar-header .navbar-brand {\n        width: 45px;\n        line-height: 60px;\n        height: 60px;\n        padding: 0;\n        width: 100%;\n        overflow: hidden;\n        padding-left: 0px;\n        font-family: 'Roboto Condensed', sans-serif; }\n        .landing-page .navbar .navbar-header .navbar-brand .icon {\n          width: 50px;\n          text-align: center;\n          display: inline-block; }\n        .landing-page .navbar .navbar-header .navbar-brand .title {\n          margin-left: -10px;\n          display: inline-block; }\n      .landing-page .navbar .navbar-header .navbar-expand-toggle {\n        position: absolute;\n        right: 0;\n        width: 60px;\n        height: 60px;\n        background-color: transparent;\n        border: 0px;\n        -moz-transition: all 0.25s linear;\n        -webkit-transition: all 0.25s linear;\n        transition: all 0.25s linear;\n        opacity: 0.75; }\n\n@media only screen and (max-width: 768px) {\n  .landing-page .navbar .navbar-header .navbar-brand {\n    padding-left: 15px; } }\n\n.row-example > [class*=\"col-\"] {\n  margin-bottom: 0px; }\n\n/* CUSTOMIZE THE NAVBAR\n-------------------------------------------------- */\n/* Special class on .container surrounding .navbar, used for positioning it into place. */\n.navbar-wrapper {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 20; }\n\n/* Flip around the padding for proper display in narrow viewports */\n.navbar-wrapper > .container {\n  padding-right: 0;\n  padding-left: 0; }\n\n.navbar-wrapper .navbar {\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.navbar-wrapper .navbar .container {\n  width: auto; }\n\n/* CUSTOMIZE THE CAROUSEL\n-------------------------------------------------- */\n/* Carousel base class */\n.carousel {\n  height: 500px;\n  margin-bottom: 60px; }\n\n/* Since positioning the image, we need to help out the caption */\n.carousel-caption {\n  z-index: 10; }\n\n/* Declare heights because of positioning of img element */\n.carousel .item {\n  height: 500px;\n  background-color: #777; }\n\n.carousel-inner > .item > img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  height: 500px; }\n\n/* MARKETING CONTENT\n-------------------------------------------------- */\n/* Center align the text within the three columns below the carousel */\n.marketing .col-lg-4 {\n  margin-bottom: 20px;\n  text-align: center; }\n\n.marketing h2 {\n  font-weight: normal; }\n\n.marketing .col-lg-4 p {\n  margin-right: 10px;\n  margin-left: 10px; }\n\n/* Featurettes\n------------------------- */\n.featurette-divider {\n  margin: 80px 0;\n  /* Space out the Bootstrap <hr> more */ }\n\n/* Thin out the marketing headings */\n.featurette-heading {\n  font-weight: 300;\n  line-height: 1;\n  letter-spacing: -1px; }\n\n/* RESPONSIVE CSS\n-------------------------------------------------- */\n@media (min-width: 768px) {\n  /* Navbar positioning foo */\n  .navbar-wrapper .container {\n    padding-right: 15px;\n    padding-left: 15px; }\n  .navbar-wrapper .navbar {\n    padding-right: 0;\n    padding-left: 0; }\n  /* The navbar becomes detached from the top, so we round the corners */\n  .navbar-wrapper .navbar {\n    border-radius: 4px; }\n  /* Bump up size of carousel content */\n  .carousel-caption p {\n    margin-bottom: 20px;\n    font-size: 21px;\n    line-height: 1.4; }\n  .featurette-heading {\n    font-size: 50px; } }\n\n@media (min-width: 992px) {\n  .featurette-heading {\n    margin-top: 100px;\n    margin-bottom: 20px; } }\n", ""]);

// exports


/***/ }),
/* 35 */
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
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, $) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_flat_blue_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_flat_blue_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__css_flat_blue_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_style_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__css_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_custom_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_custom_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__css_custom_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_checkbox_radioStyles_css__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_checkbox_radioStyles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__css_checkbox_radioStyles_css__);






let visits = __webpack_require__(18);
let reports = __webpack_require__(15);
let smartEngine = __webpack_require__(16);
let templates = __webpack_require__(6);
let indexDb = __webpack_require__(2);
let message = __webpack_require__(1);
let notification = __webpack_require__(13);
let sites = __webpack_require__(5);
let uidGenerator = __webpack_require__(17);
let reportsImg = __webpack_require__(14);
let login = __webpack_require__(12);

(function () {
    let smartDocsOffline = {
        "registerSW": function () {
            let reference = this;
            navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
                .then(function (reg) {
                    console.log("Yes, it did.", reg.scope);
                    reference.showInstallationBanner();
                }).catch(function (err) {
                    console.log("No it didn't. This happened: ", err)
                });
        },
        "showInstallationBanner": function () {
            /*window.addEventListener('beforeinstallprompt', function (e) {
                // beforeinstallprompt Event fired
                e.userChoice.then(function (choiceResult) {
                    console.log(choiceResult.outcome);
                    if (choiceResult.outcome == 'dismissed') {
                        console.log('User cancelled home screen install');
                    }
                    else {
                        console.log('User added to home screen');
                    }
                });
                e.preventDefault();
                return false;
            });
            */
        },
        "startEventsLoginPage": function () {
            let reference = this;
            jQuery.migrateMute = true;
            console.log("Start Login Page");
            /*if (navigator.onLine) {
                reference.registerSW();
            }
            */

            if (!localStorage.getItem("user")) {
                console.log("User not found in Cache");
                $("#loginButton").click(function () {
                    let username = $("#username").val();
                    let password = $("#userpassword").val();
                    if (username.length != 0 && password.length != 0) {
                        login.signin(username, password).then(function (userInformation) {
                            reference.userInformation = userInformation;
                            reference.initApplication();
                        });
                    }
                });
            }
            else {
                reference.userInformation = JSON.parse(localStorage.getItem("user"));
                reference.initApplication();
            }
        },
        "userInformation": "",
        "verifyUser": function () {
            let reference = this;
            return new Promise(function (resolve, reject) {
                indexDb.deleteAllVisitsByAuthor(reference.userInformation.userId).then(function () {
                    console.log("The visits remove process was finish");
                    return indexDb.deleteAllReportsByAuthor(reference.userInformation.userId);
                }).then(function () {
                    return indexDb.deleteAllReportsImageByAuthor(reference.userInformation.userId);
                })
                    .then(function () {
                        resolve();
                    })
                    .catch(function (err) {
                        reject(err);
                    });
            });

        },
        "loadIndex": function () {
            let reference = this;
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: '/views/index.html',
                    type: 'GET',
                    statusCode: {
                        500: function (msgRes) {
                            message.launchErrorModal(msgRes.responseJSON.title, msgRes.responseJSON.message, " Revisa tus credenciales");
                        }
                    },
                    error: function () {
                        reject();
                    },
                    complete: function (data) {
                        console.log("Index Loaded", data);
                        $(".container").remove();
                        $("body").removeClass("login-page");
                        $("body").append(data.responseText);
                        $("#userFirstName").html(reference.userInformation.fullname + "<span class='caret'></span>");
                        $("#username").text(reference.userInformation.username);
                        $("#userRole").text(reference.userInformation.role);
                        $("#userCompany").text(reference.userInformation.company);
                        $("#userEmail").text(reference.userInformation.email);
                        reference.loadEventButtonCloseApp();
                        resolve();
                    }
                })
            });
        },
        loadEventButtonCloseApp: function () {
            $("#btnLogout").click(function () {
                console.log("Click Logout");
                localStorage.clear();
                window.location.replace("https://smart-docs.herokuapp.com");
            });
        },
        initApplication: function () {
            let reference = this;
            reference.disabledBackButton();
            reference.promptRefreshMessage();
            message.addMessageLoder("loaderMessage", ".container");
            message.changeMessageLoader("loaderMessage", "Cargando Aplicacion");
            reference.verifyUser().then(function () {
                reference.loadIndex().then(function () {
                    message.removeMessageLoader(".container");
                    $.get("/views/dashboard.html", function (page) {
                        $("#mainContent2").html(page);
                        //notification.sendNotification("Bievenido a Smart Docs", "Registra visitas para poder agregar reportes");
                        message.addMessageLoder("loaderMessage", "#mainContent2");
                        message.changeMessageLoader("Solicitando Acceso a Red")
                        reference.addEventsToMenu();
                        reference.loadNavBar();
                        reference.grantPermissionPosition().then(function () {
                            notification.sendNotification("Bienvenido a Smart Docs ", "Registra una visita para agregar reportes");

                            if (navigator.onLine == true) {
                                message.launchChooseConnection().then(function (userChoiceConnection) {
                                    switch (userChoiceConnection) {
                                        case true:
                                            let userLogged = localStorage.getItem("userLogged");
                                            let diff = Math.abs(new Date(userLogged) - new Date()) / 3600000;
                                            if (diff > 1) {
                                                message.launchErrorNotAuthenthicateModal("La sesion ha caducado", "El token de seguridad que se te ha asignado ya no es valido", "Solucion: Inicia de nuevo Sesion");
                                                localStorage.clear();
                                            }
                                            else {
                                                $("#userStatus").html(" Estado: Online ");
                                                $("#userStatus").css("color", "green");
                                                reference.updateInformation();
                                            }
                                            break;
                                        case false:
                                            $("#userStatus").html(" Estado: Offline ");
                                            $("#userStatus").css("color", "red");
                                            reference.noUpdateInformation();
                                            break;
                                    }

                                });
                            }
                            else {
                                reference.noUpdateInformation();
                            }
                        });
                    });
                });
            });
        },
        "updateInformation": function () {
            let reference = this;
            let visitsLocal = [];
            let visitsCloud = [];
            let reportsLocal = [];
            let reportsCloud = [];
            message.launchSyncModal();
            message.changeSyncModalText("Obteniendo Visitas Almacenados");
            message.changeMessageLoader("loaderMessage", "Sincronizacion en curso");
            visits.getVisits().then(function (visitsLocalResponse) {
                visitsLocal = visitsLocalResponse;
                message.changeSyncModalText("Obteniendo Visitas Almacenadas");
                return visits.uploadVisitsToCloud();
            }).then(function () {
                message.changeSyncModalText("Obteniendo Visitas Cloud");
                return visits.getVisitsSaveonCloud();
            }).then(function (visitsCloudResponse) {
                visitsCloud = visitsCloudResponse;
                message.changeSyncModalText("Sincronizando Visitas Almacenadas");
                return visits.validateVisitLocally(visitsCloud, visitsLocal);
            }).then(function () {
                message.changeSyncModalText("Obteniendo Reportes Almacenados");
                return reports.getReports();
            })
                .then(function (reportsResponse) {
                    reportsLocal = reportsResponse;
                    message.changeSyncModalText("Subiendo Reportes Almacenados");
                    return reports.uploadReportToCloud(reportsResponse);
                })
                .then(function () {
                    message.changeSyncModalText("Obteniendo Reportes Cloud");
                    return reports.getReportsSaveonCloud();
                })
                .then(function (reportsOnCloud) {
                    message.changeSyncModalText("Sincronizando Reportes");
                    return reports.validateReportsLocally(reportsOnCloud, reportsLocal);
                })
                .then(function () {
                    return reports.changeStatistic();
                })
                .then(function () {
                    message.changeSyncModalText("Obteniendo Imagenes Localmente");
                    return reportsImg.getReportsImages();
                })
                .then(function (reportImagesResponse) {
                    message.changeSyncModalText("Subiendo Imagenes 1 / 2");
                    return reportsImg.uploadReportsImages(reportImagesResponse);
                })
                .then(function () {
                    message.changeSyncModalText("Subiendo Imagenes 2 / 2");
                    return reportsImg.uploadReportsImages1();
                })
                /*
                .then(function () {
                    return reportsImg.deleteReportsImg();
                })
                .then(function () {
                    return reportsImg.getReportsImgSaveonCloud();
                })
                */
                .then(function () {
                    message.changeSyncModalText("Obteniendo Sitios Cloud Total: ");
                    return sites.getSitesOnCloudByUserPreferences();
                })
                .then(function (sitesOnCloud) {
                    console.log("SitesOnCloud", sitesOnCloud);
                    localStorage.setItem('totalSitesSM', sitesOnCloud.total);
                    message.changeSyncModalText("Total Sitios Recibidos: " + sitesOnCloud.total);
                    return reference.updateSiteExternal(sitesOnCloud.sites);
                }).then(function () {
                    message.changeSyncModalText("Obteniendo Plantillas Cloud");
                    return templates.getTemplatesOnCloud();
                })
                .then(function (templatesOnCloud) {
                    message.changeSyncModalText("Actualizando Plantillas Almacenadas");
                    return reference.updateTemplatesLocally(templatesOnCloud);
                })
                .then(function () {
                    message.changeSyncModalText("Obteniendo Plantillas Almacenadas");
                    return indexDb.getTemplates();
                })
                .then(function () {
                    message.removeSyncModal();
                    message.removeMessageLoader("#mainContent2");
                    reference.loadResources('dashboard');
                });
        },
        "noUpdateInformation": function () {
            let reference = this;
            message.changeMessageLoader("Obteniendo Informacion Almacenada");

            //message.launchSyncModal();
            //message.changeSyncModalText("Obteniendo Sitios Almacenados");
            /*
            indexDb.getSites().then(function (resolve, reject) {
                message.changeSyncModalText("Obteniendo Plantillas Almacenadas");
                return indexDb.getTemplates();
            })
                .then(function () {
                    return reports.changeStatistic();
                })
                .then(function () {
                    
                });
                */
            message.removeMessageLoader("#mainContent2");
            reference.loadResources("dashboard");
        },
        disabledBackButton: function () {
            window.location.hash = "no-back-button";
            window.location.hash = "Again-No-back-button";//again because google chrome don't insert first hash into history
            window.onhashchange = function () { window.location.hash = "no-back-button"; }
        },
        promptRefreshMessage: function () {
            if (location.protocol != 'https:') {
                location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
            }
            else {
                window.onbeforeunload = function () {
                    return "";
                };
            }
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
        hideNavBar: function () {
            $(".app-container").removeClass("expanded");
            $(".navbar-expand-toggle").removeClass("fa-rotate-90");
        },
        launchUserModal: function () {
            let reference = this;
            $("#userModal").remove();
            $("body").append("<div class='fade modal modal-info'aria-hidden=true aria-labelledby=myModalLabel1 id=userModal role=dialog style=display:none tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel8>Ingresa el usuario</h4></div><div class=modal-body><input type='text' class='form-control' placeholder='Ingresa el usuario de Huawei Smart Docs @OWS' id='username'/></div><div class=modal-footer><button id='btnOpenApp'class='btn btn-info' disabled>Ingresar</button></div></div></div></div>");
            $("#userModal").modal({ backdrop: 'static', keyboard: false });

            $("#username").on("input", function () {
                let usernameval = $("#username").val();
                if (usernameval.length > 5) {
                    localStorage.setItem("username", usernameval);
                    $("#btnOpenApp").attr("disabled", false);
                } else {
                    $("#btnOpenApp").attr("disabled", true);
                }
            });

            $("#btnOpenApp").click(function () {
                $("#userModal").modal('hide');
                reference.initApplication();
            });
        },
        grantPermissionPosition: function () {
            let reference = this;
            let options = {
                enableHighAccuracy: false,
                timeout: 50000,
                maximumAge: 50000
            };
            return new Promise(function (resolve, reject) {
                navigator.geolocation.getCurrentPosition(function success(pos) {
                    let crd = pos.coords;
                    console.log('Your current position is:');
                    console.log('Latitude : ' + crd.latitude);
                    console.log('Longitude: ' + crd.longitude);
                    console.log('More or less ' + crd.accuracy + ' meters.');
                    resolve();
                },
                    function error(err) {

                        switch (err.code) {
                            case 0:
                                reference.launchErrorPosition("There was an error while retrieving your location: " +
                                    err.message);
                                reject("There was an error while retrieving your location: " +
                                    err.message);
                                break;
                            case 1:
                                reference.launchErrorPosition("The user prevented the app from retrieving a location.");
                                reject("The user prevented this page from retrieving a location.");
                                break;
                            case 2:
                                reference.launchErrorPosition("The browser was unable to determine your location: " +
                                    err.message);
                                reject("The browser was unable to determine your location: " +
                                    err.message);
                                break;
                            case 3:
                                reference.launchErrorPosition("The browser timed out before retrieving the location.");
                                reject("The browser timed out before retrieving the location.");
                                break;
                        }
                        console.warn('ERROR(' + err.code + '): ' + err.message);
                    }, options);
            });
        },
        launchErrorPosition: function (message) {
            $("#errorPosition").remove();
            $("body").append("<div class='fade modal modal-danger'aria-hidden=true aria-labelledby=myModalLabel2 id=errorPosition role=dialog style=display:block tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel13>No has permitido el acceso a tu localizacion </h4></div><div class=modal-body><img src='https://cdn4.iconfinder.com/data/icons/flatified/128/map.png' style=margin-left:auto;margin-right:auto;display:block width=150px><h4 style=text-align:center> Por favor, configura tu dispositivo correctamente </h4><h5 style=text-align:center>Error : " + message + "<br> <b> Solucion> </b> Ingresa a la configuracion del navegador y modifica los permisos de localizacion </h5><div class='text-center'></div></div></div></div></div>");
            $("#errorPosition").modal('show');
        },
        updateTemplatesLocally: function (templatesOnCloud) {
            let templatesToUpdate = [];
            for (let template of templatesOnCloud) {
                templatesToUpdate.push(indexDb.addTemplate(template.templateId, template.name, template.project, template.taskType, template.icon, template.content));
            }
            return new Promise(function (resolve, reject) {
                Promise.all(templatesToUpdate).then(function () {
                    resolve();
                }).catch(function (err) {
                    reject(err);
                });
            });
        },
        updateSiteExternal: function (sitesOnCloud) {
            return new Promise(function (resolve, reject) {
                for (let site of sitesOnCloud) {
                    indexDb.addSite(site.siteId, site.name, site.fmOffice, site.project, site.portafolio, site.anchorTenant, site.region, site.city);
                }
                resolve();
                /* indexDb.getSites().then(function () {
                    resolve();
                });
                */
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
                    reference.hideNavBar();
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
        getChromeVersion: function () {
            var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
            return raw ? parseInt(raw[2], 10) : false;
        },
        sitesRetrieved: [],
        loadResources: function (page_route) {
            let reference = this;
            switch (page_route) {
                case "dashboard":
                    message.addMessageLoder("loaderMessage", "#mainContent2");
                    message.changeMessageLoader("Consultando Sitios Almacenados");
                    reports.changeStatistic().then(function () {
                        indexDb.getSites().then(function (sitesRetrieved) {
                            reference.sitesRetrieved = sitesRetrieved;
                            message.removeMessageLoader("#mainContent2");
                        });
                    });
                    break;
                case "allVisits":
                    message.addMessageLoder("loaderMessage", "#mainContent2");
                    message.changeMessageLoader("Consultando Sitios Almacenados");
                    indexDb.getSites().then(function () {
                        message.changeMessageLoader("Consultando Visitas Almacenadas");
                        return visits.getVisits();
                    }).then(function () {

                        reference.fillVisitsPage();
                        reference.loadEventNewVisit();
                        message.removeMessageLoader("#mainContent2");
                    });
                    break;
                case "allReportsRelated":
                    message.addMessageLoder("loaderMessage", "#mainContent2");
                    message.changeMessageLoader("Consultando Plantillas Almacenadas");
                    indexDb.getTemplates().then(function () {
                        message.changeMessageLoader("Consultando Reportes Relacionados");
                        return reports.getReports();
                    }).then(function (reportsReponse) {
                        let reportsFiltered = reportsReponse.filter(function (report) {
                            return report.visitId == visits.visitSelected.visitId;
                        });
                        console.log("Reports Filtered", reportsFiltered);
                        reference.fillBoxesReportsRelated(reportsFiltered);
                        message.removeMessageLoader("#mainContent2");
                    })
                    reference.addEventsReportRelated();
                    break;
                case "allTemplatesBoxes":
                    message.addMessageLoder("loaderMessage", "#mainContent2");
                    message.changeMessageLoader("Consultando Plantillas Almacenadas");
                    reference.getAllTemplates();
                    message.removeMessageLoader("#mainContent2");
                    break;
                case "newReport":
                    message.addMessageLoder("loaderMessage", "#mainContent2");
                    message.changeMessageLoader("Cargando Plantilla Seleccionada");
                    reference.showTemplate();
                    reference.saveAnswerEvent();
                    if (Object.keys(reports.reportSelected).length != 0) {
                        message.changeMessageLoader("Cargando Reporte Almacenado");
                        reference.fillAnswer();
                        message.removeMessageLoader("#mainContent2");
                    }
                    else {
                        let siteSearched = reference.sitesRetrieved.filter(function (site) {
                            return site.siteId == visits.visitSelected.siteId
                        });
                        smartEngine.fillDefaultValues(reference.userInformation, siteSearched[0]);
                        message.removeMessageLoader("#mainContent2");
                    }
                    break;
                case "myReports":
                    message.addMessageLoder("loaderMessage", "#mainContent2");
                    message.changeMessageLoader("Cargando Plantilla Seleccionada");
                    console.log("Start Fill Reports");
                    indexDb.getReports().then(function (reportsResponse) {
                        reference.fillReportsPage(reportsResponse);
                        message.removeMessageLoader("#mainContent2");
                    });
                    break;
                case "myReportsLog":
                    message.addMessageLoder("loaderMessage", "#mainContent2");
                    message.changeMessageLoader("Consultando Logger");
                    indexDb.getReportsLog().then(function (reportsLog) {
                        reference.fillReportsLogPage(reportsLog);
                        message.removeMessageLoader("#mainContent2");
                    });
                    break;
            }
        },
        "siteOptSelected": "",
        loadEventNewVisit() {
            let reference = this;
            $("#new_VisitBtn").click(function () {
                $("#new_visit_modal").remove();
                $("body").append("<div class='fade modal modal-info'aria-hidden=true aria-labelledby=myModalLabel1 id=new_visit_modal role=dialog style=display:block tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel13> Registra una nueva visita </h4></div><div class='modal-body'><label class='text-right'>Nombre Sitio : </label><input id='site_list_register' list='sitesList' class='form-control' placeholder='La funcion de autocompletado funciona cuando escribes mas de 3 caracteres'> <datalist id='sitesList'></datalist><br><p style='text-align: center'><b>Nota:</b> Debes registrar una visita para poder crear reportes del sitio </p></div><div class='modal-footer'><button id='new_visit_register_btn' class='btn btn-info' disabled> Registrar </button> </div> </div></div></div>");
                for (let siteElement of reference.sitesRetrieved) {
                    $("#sitesList").append("<option value='" + siteElement.siteId + "' > " + siteElement.name + " </option>");
                }

                $("#new_visit_modal").modal('show');

                $("input[id='site_list_register']").on('focusout', function (e) {
                    var opt = $('option[value="' + $(this).val() + '"]');
                    if (opt.length) {
                        console.log(opt.attr('value'));
                        reference.siteOptSelected = opt.attr('value');
                        $("#new_visit_register_btn").attr("disabled", false);
                    } else {
                        $("input[id='site_list_register']").val("");
                        console.log("Invalid Option");
                        //$("#invalidOpt").modal('show');
                        $("#new_visit_register_btn").attr("disabled", true);
                    }
                });

                $("#new_visit_register_btn").click(function () {
                    let siteFilter = reference.sitesRetrieved.filter(function (siteEle) {
                        return siteEle.siteId == reference.siteOptSelected;
                    });
                    console.log("Site Filter ", siteFilter);

                    $("#new_visit_modal").modal('hide');
                    let keyGenerateVisit = uidGenerator.uidGen() + "-" + JSON.parse(localStorage.getItem("user")).userId;
                    indexDb.addVisit(keyGenerateVisit, siteFilter[0].siteId, siteFilter[0].name + " - " + siteFilter[0].project + " - " + new Date().toDateString(), JSON.parse(localStorage.getItem("user")).userId, false).then(function () {
                        indexDb.getVisitByVisitId(keyGenerateVisit).then(function (visitResponse) {
                            visits.visitSelected = visitResponse;
                            reference.changePage("allTemplatesBoxes");
                        });
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
            /*if (navigator.onLine) {
                $.get("https://smart-docs.herokuapp.com/templates/", function (templatesResponse) {
                    templates.templates = templatesResponse;
                    for (let template of templates.templates) {
                        indexDb.addTemplate(template.templateId, template.name, template.project, template.taskType, template.icon, template.content);
                    }
                    reference.fillTemplatesPage();
                })
            } */
            indexDb.getTemplates().then(function () {
                reference.fillTemplatesPage({});
            });
        },
        fillVisitsPage: function () {
            let reference = this;
            let visitsResponse = visits.visits;
            let cont = 0;
            for (let visit of visitsResponse) {
                $("#visitsNotFound").remove();
                let syncronizedColor = (visit.cloud == true) ? 'green' : 'red';
                let syncronizedText = (visit.cloud == true) ? 'Sincronizado ' : 'Falta Sincronizar';
                $("#allVisitsDiv").append("<div class='col-sm-12 col-md-6 col-lg-6'><div class=pricing-table><div class=pt-header style=background-color:#fff><div class=plan-pricing><div class=pricing style=font-size:1.5em>" + visit.name + "</div><img style='width:100px' src='/img/visitIcon.svg' style=padding:10px><div class=pricing-type style='color:" + syncronizedColor + "'> <i class='fa fa-refresh' aria-hidden='true'></i> Estado : " + syncronizedText + " <!--<b>Id:</b>" + visit.visitId + "!--></div></div></div><div class=pt-footer><button id='attachReports" + cont + "' class='btn btn-primary' style='margin-right:5px;box-shadow: 2px 2px 2px #888888;' type=button>Ver Visita</button></div></div></div>");
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
                let syncronizedColor = (report.cloud == true) ? 'green' : 'red';
                let syncronizedText = (report.cloud == true) ? 'Sincronizado ' : 'Falta Sincronizar';
                $("#allReportsRelatedDiv").append("<div class='col-sm-12 col-md-6 col-lg-6'><div class='pricing-table " + report.status_background + "'><div class=pt-header><div class=plan-pricing><div class=pricing style=font-size:1.5em>" + templateFilter.name + "</div><div class=pricing-type> Ultima Modificacion: " + report.lastModification.split("GMT")[0] + "</div></div></div><div class=pt-body><h4>" + report.status_name + "</h4><ul class=plan-detail><li><b>Report Id:<br></b>" + report.reportId + "</ul></div><div class=pt-footer><div style='color: " + syncronizedColor + "'> <i class='fa fa-refresh' aria-hidden='true'></i> Estado: " + syncronizedText + "</div> <button id='viewReport_" + cont + "' class='btn btn-" + report.status_class + "'type=button>Ver Detalles</button></div></div></div>");
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
            let cont = 0;
            for (let template of templatesResponse) {
                $("#templatesNotFound").remove();
                $("#allTemplatesDiv").append("<div class='col-sm-12 col-md-6 col-lg-6'><div class=pricing-table><div class=pt-header style=background-color:#fff><div class=plan-pricing><div class=pricing style=font-size:1.5em>" + template.name + "</div><img src='" + template.icon + "'style=padding:10px><div class=pricing-type><!--<b>Id:</b>" + template.templateId + "!--></div></div></div><div class=pt-footer><p><b>Ultima Actualizacion: </b> " + template.lastModification.split("GMT")[0] + " </p><button id='createTemplate" + cont + "'class='btn btn-primary' style='margin-right:5px;box-shadow: 2px 2px 2px #888888;' type=button>Crear Reporte</button></div></div></div>");
                $("#createTemplate" + cont).on("click", function (event) {
                    reports.reportSelected = {};
                    templates.templateSelected = template;
                    reference.changePage("newReport");
                });
                cont += 1;
            }
        },
        showTemplate: function () {
            let reference = this;
            let ref = this;
            let indexActiveTab = 0;
            let totalTab;
            smartEngine.executeEngine(templates.templateSelected.content);
            let totalTabs = parseInt($('.nav-tabs > li ').length) - 1;
            $('#templateNavTabs a:first').tab('show');
            $('.nav-tabs > li > a ').click(function (e) {
                e.preventDefault();
                indexActiveTab = $($(this).attr('href')).index();
                if (indexActiveTab > 0) {
                    $("#menu-previous").css("display", "");
                }
            });

            $("#menu-previous").css("display", "none");
            $("#menu-previous").click(function () {
                $("#menu-next").css("display", "");
                if (indexActiveTab - 1 == 0) {
                    indexActiveTab -= 1;
                    $("#templateNavTabs li:eq(" + indexActiveTab + ") a").tab('show');
                    $("#menu-previous").css("display", "none");
                }
                else {
                    indexActiveTab -= 1;
                    $("#templateNavTabs li:eq(" + indexActiveTab + ") a").tab('show');
                }
            });

            $("#menu-next").click(function () {
                $("#menu-previous").css("display", "");
                console.log("Total Tabs", totalTabs);
                if (indexActiveTab + 1 == totalTabs) {
                    $("#menu-next").css("display", "none");
                    indexActiveTab += 1;
                    $("#templateNavTabs li:eq(" + indexActiveTab + ") a").tab('show');
                }
                else {
                    indexActiveTab += 1;
                    $("#templateNavTabs li:eq(" + indexActiveTab + ") a").tab('show');
                }
            });
            $('#templateNavTabs a:first').tab('show');
            totalTabs = $('#templateNavTabs li a').length;
            $("#btnBefore").prop("disabled", true);
            $("#btnBefore").click(function () {
                if (indexTab - 1 == 0) {
                    $("#btnBefore").prop("disabled", true);
                    indexTab -= 1;
                    $("#templateNavTabs li:eq(" + indexTab + ") a").tab('show');
                }
                else {
                    $("#btnNext").prop("disabled", false);
                    indexTab -= 1;
                    $("#templateNavTabs li:eq(" + indexTab + ") a").tab('show');
                }
            });
            $("#btnNext").click(function () {
                //Disabled when the indexTab is the last
                if (indexTab + 1 == totalTabs) {
                    $("#btnNext").prop("disabled", true);
                    indexTab += 1;
                    $("#templateNavTabs li:eq(" + indexTab + ") a").tab('show');
                }
                else {
                    //Go to the next Tab
                    $("#btnBefore").prop("disabled", false);
                    indexTab += 1;
                    $("#templateNavTabs li:eq(" + indexTab + ") a").tab('show');
                }
            });
        },
        fillAnswer: function () {
            let reference = this;
            let checkAnswers = ["checkbox_answer", "date_answer", "datetime_answer", "list_answer", "month_answer", "multiselect_answer",
                "number_answer", "radio_answer", "select_answer", "table_answer", "text_answer", "textarea_answer",
                "time_answer"];
            for (let check of checkAnswers) {
                if (Array.isArray(reports.reportSelected[check][0])) {
                    smartEngine.matchAnswers(reports.reportSelected[check][0]);
                }
            }
            indexDb.getReportImagesByReportId(reports.reportSelected.reportId).then(function (reportImagesResponse) {
                for (let reportImgRes of reportImagesResponse) {
                    if (Array.isArray(reportImgRes.images)) {
                        smartEngine.matchAnswers(reportImgRes.images);
                    }
                    if (Array.isArray(reportImgRes.image_1)) {
                        smartEngine.matchAnswers(reportImgRes.image_1);
                    }
                }
            });
        },
        launchAnswerCompletedModal: function () {
            $("#completedReport").remove();
            $("body").append("<div class='fade modal modal-info'aria-hidden=true aria-labelledby=myModalLabel1 id=completedReport role=dialog style=display:none tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel8>Todos los campos fueron completados</h4></div><div class=modal-body><img src='/img/completed.png' style=margin-left:auto;margin-right:auto;display:block width=150px><h4 style=text-align:center>Todos los campos obligatorios fueron completados.</h4></div><div class=modal-footer><input class='btn btn-info'data-dismiss=modal type=button value='Guardar el reporte'></div></div></div></div>");
            $("#completedReport").modal({ backdrop: 'static', keyboard: false });
        },
        launchAnswerInCompleteModal: function (emptyFields) {
            $("#incompleteReport").remove();
            $("body").append("<div class='fade modal modal-info'aria-hidden=true aria-labelledby=myModalLabel1 id=incompleteReport role=dialog style=display:none tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel7>Algunos campos no fueron completados</h4></div><div class=modal-body><img src='/img/incompleted.png' style=margin-left:auto;margin-right:auto;display:block width=150px><h4 style=text-align:center>Todos los campos obligatorios no fueron completados</h4><h5 id=emptyFieldsText style=text-align:center></h5></div><div class=modal-footer><input class='btn btn-info'data-dismiss=modal type=button value=Entendido></div></div></div></div>");
            $("#emptyFieldsText").text(emptyFields);
            $("#incompleteReport").modal({ backdrop: 'static', keyboard: false });
        },
        userAnswer: "",
        keyGenerated: "",
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

                reference.userAnswer = JSON.parse(answer.userAnswer);

                let answerDate; let answerDateTime; let answerTime; let answerWeek; let answerMonth;
                let answerText; let answerTextArea; let answerNumber; let answerRadio; let answerCheckbox;
                let answerSelect; let answerMultiSelect; let answerList; let answerTable; let answerImages;
                let contImages; let total_images_saved;

                answerDate = reference.filterByAnswerType('date');
                answerDateTime = reference.filterByAnswerType('datetime');
                answerTime = reference.filterByAnswerType('time');
                answerWeek = reference.filterByAnswerType('week');
                answerMonth = reference.filterByAnswerType('month');
                answerText = reference.filterByAnswerType('text');
                answerTextArea = reference.filterByAnswerType('textArea');
                answerNumber = reference.filterByAnswerType('number');
                answerRadio = reference.filterByAnswerType('radio');
                answerCheckbox = reference.filterByAnswerType('checkbox');
                answerSelect = reference.filterByAnswerType('select');
                answerMultiSelect = reference.filterByAnswerType('multiSelect');
                answerList = reference.filterByAnswerType('list');
                answerTable = reference.filterByAnswerType('table');

                if (Object.keys(reports.reportSelected).length == 0) {

                    let keyGenerated = uidGenerator.uidGen() + "-" + JSON.parse(localStorage.getItem("user")).userId;
                    reference.keyGenerated = keyGenerated;

                    indexDb.addReport(keyGenerated, templates.templateSelected.templateId, visits.visitSelected.visitId,
                        status, JSON.parse(localStorage.getItem("user")).userId).then(function () {

                            let saveAnswerDate = indexDb.updateReport(keyGenerated, "date_answer", JSON.parse(answerDate));
                            let saveAnswerDateTime = indexDb.updateReport(keyGenerated, "datetime_answer", JSON.parse(answerDateTime));
                            let saveAnswerTime = indexDb.updateReport(keyGenerated, "time_answer", JSON.parse(answerTime));
                            let saveAnswerWeek = indexDb.updateReport(keyGenerated, "week_answer", JSON.parse(answerWeek));
                            let saveAnswerMonth = indexDb.updateReport(keyGenerated, "month_answer", JSON.parse(answerMonth));
                            let saveAnswerText = indexDb.updateReport(keyGenerated, "text_answer", JSON.parse(answerText));
                            let saveAnswerTextArea = indexDb.updateReport(keyGenerated, "textarea_answer", JSON.parse(answerTextArea));
                            let saveAnswerNumber = indexDb.updateReport(keyGenerated, "number_answer", JSON.parse(answerNumber));
                            let saveAnswerRadio = indexDb.updateReport(keyGenerated, "radio_answer", JSON.parse(answerRadio));
                            let saveAnswerCheckBox = indexDb.updateReport(keyGenerated, "checkbox_answer", JSON.parse(answerCheckbox));
                            let saveAnswerSelect = indexDb.updateReport(keyGenerated, "select_answer", JSON.parse(answerSelect));
                            let saveAnswerMultiSelect = indexDb.updateReport(keyGenerated, "multiselect_answer", JSON.parse(answerMultiSelect));
                            let saveAnswerList = indexDb.updateReport(keyGenerated, "list_answer", JSON.parse(answerList));
                            let saveAnswerTable = indexDb.updateReport(keyGenerated, "table_answer", JSON.parse(answerTable));

                            Promise.all([saveAnswerDate, saveAnswerDateTime, saveAnswerTime, saveAnswerWeek, saveAnswerMonth, saveAnswerText, saveAnswerTextArea, saveAnswerNumber, saveAnswerRadio, answerCheckbox, saveAnswerSelect, saveAnswerMultiSelect, saveAnswerList, saveAnswerTable]).then(values => {
                                message.addMessageLoder("loaderMessage", "#mainContent2");
                                message.changeMessageLoader("loaderMessage", "Guardando Reporte");

                                reference.saveImageLocally().then(function () {
                                    reference.updateImageLocally().then(function () {
                                        if (answer.completed) {
                                            reference.launchAnswerCompletedModal();
                                        } else {
                                            reference.launchAnswerInCompleteModal(answer.fieldsEmpty);
                                        }
                                        //notification.sendNotification("Smart Docs", "Se ha creado un nuevo reporte para la visita " + visits.visitSelected.visitId + " /n Estado: " + status);
                                        reference.changePage("allVisits");
                                    });
                                });
                            });
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
                }
                else {
                    indexDb.addReport(reports.reportSelected.reportId, reports.reportSelected.templateId, reports.reportSelected.visitId,
                        status, JSON.parse(localStorage.getItem("user")).userId).then(function () {
                            reference.keyGenerated = reports.reportSelected.reportId;
                            let saveAnswerDate = indexDb.updateReport(reports.reportSelected.reportId, "date_answer", JSON.parse(answerDate));
                            let saveAnswerDateTime = indexDb.updateReport(reports.reportSelected.reportId, "datetime_answer", JSON.parse(answerDateTime));
                            let saveAnswerTime = indexDb.updateReport(reports.reportSelected.reportId, "time_answer", JSON.parse(answerTime));
                            let saveAnswerWeek = indexDb.updateReport(reports.reportSelected.reportId, "week_answer", JSON.parse(answerWeek));
                            let saveAnswerMonth = indexDb.updateReport(reports.reportSelected.reportId, "month_answer", JSON.parse(answerMonth));
                            let saveAnswerText = indexDb.updateReport(reports.reportSelected.reportId, "text_answer", JSON.parse(answerText));
                            let saveAnswerTextArea = indexDb.updateReport(reports.reportSelected.reportId, "textarea_answer", JSON.parse(answerTextArea));
                            let saveAnswerNumber = indexDb.updateReport(reports.reportSelected.reportId, "number_answer", JSON.parse(answerNumber));
                            let saveAnswerRadio = indexDb.updateReport(reports.reportSelected.reportId, "radio_answer", JSON.parse(answerRadio));
                            let saveAnswerCheckBox = indexDb.updateReport(reports.reportSelected.reportId, "checkbox_answer", JSON.parse(answerCheckbox));
                            let saveAnswerSelect = indexDb.updateReport(reports.reportSelected.reportId, "select_answer", JSON.parse(answerSelect));
                            let saveAnswerMultiSelect = indexDb.updateReport(reports.reportSelected.reportId, "multiselect_answer", JSON.parse(answerMultiSelect));
                            let saveAnswerList = indexDb.updateReport(reports.reportSelected.reportId, "list_answer", JSON.parse(answerList));
                            let saveAnswerTable = indexDb.updateReport(reports.reportSelected.reportId, "table_answer", JSON.parse(answerTable));

                            Promise.all([saveAnswerDate, saveAnswerDateTime, saveAnswerTime, saveAnswerWeek, saveAnswerMonth, saveAnswerText, saveAnswerTextArea, saveAnswerNumber, saveAnswerRadio, answerCheckbox, saveAnswerSelect, saveAnswerMultiSelect, saveAnswerList, saveAnswerTable]).then(values => {
                                message.addMessageLoder("loaderMessage", "#mainContent2");
                                message.changeMessageLoader("loaderMessage", "Guardando Reporte");

                                reference.saveImageLocally().then(function () {
                                    reference.updateImageLocally().then(function () {
                                        if (answer.completed) {
                                            reference.launchAnswerCompletedModal();
                                        } else {
                                            reference.launchAnswerInCompleteModal(answer.fieldsEmpty);
                                        }
                                        //notification.sendNotification("Smart Docs", "Se ha creado un nuevo reporte para la visita " + visits.visitSelected.visitId + " /n Estado: " + status);
                                        reference.changePage("allVisits");
                                    });
                                });
                            });
                        })
                        .catch(function (err) {
                            console.log(err);
                        });

                    /*indexDb.addReport(reports.reportSelected.reportId, status, answerObj).then(function () {
                        reports.reportSelected = {};
                        reference.changePage("allVisits");
                    });
                    */
                }
            });
        },
        saveImageLocally: function () {
            let reference = this;
            let answerImages;
            let contImages; let total_images_saved;
            answerImages = reference.filterByAnswerTypeImage();
            contImages = 0;
            do {
                this["answerImages_" + contImages] = answerImages.splice(0, 1);
                contImages++;
            }
            while (answerImages.length > 0);
            total_images_saved = 0;

            let contProImg = 0; let subIdNumber = 0; let subId = "-SB";
            let promisesSaveImg = []
            do {
                if (contProImg % 2 == 0) {
                    this["saveAnswerImage_" + contProImg] = indexDb.addReportImages(reference.keyGenerated + subId + subIdNumber, reference.keyGenerated, this["answerImages_" + contProImg], JSON.parse(localStorage.getItem("user")).userId);
                    promisesSaveImg.push(this["saveAnswerImage_" + contProImg]);
                    subIdNumber++;
                }
                console.log(contProImg);
                contProImg++;
            }
            while (contProImg <= contImages - 1);

            return new Promise(function (resolve, reject) {
                Promise.all(promisesSaveImg).then(function () {
                    resolve();
                }).catch(function (err) {
                    reject(err);
                })
            });

        },
        updateImageLocally: function () {
            let reference = this;
            let answerImages;
            let contImages; let total_images_saved;
            answerImages = reference.filterByAnswerTypeImage();
            
            reference.generateBackupJSON(reference.userAnswer);
            
            var zip = new JSZip();
            var img = zip.folder("imagenes");
            for (let image of answerImages) {
                console.log("Imagen Mostrada"+ image);
                if (Array.isArray(image.image_1)) {
                    img.file("smile.png", image.image_1[0].val.replace("data:image/png;base64,", ""), { base64: true });
                }
                if (Array.isArray(image.images)) {
                    img.file("smile.png", image.images[0].val.replace("data:image/png;base64,", ""), { base64: true });
                }
            }

            zip.generateAsync({ type: "blob" })
                .then(function (content) {
                    // see FileSaver.js
                    saveAs(content, visits.visitSelected.name + " - Imagenes.zip");
                });

            contImages = 0;
            do {
                this["answerImages_" + contImages] = answerImages.splice(0, 1);
                contImages++;
            }
            while (answerImages.length > 0);


            /** Generate the zip File
             * 
             */

            let contProImg = 0; let subIdNumber = 0; let subId = "-SB";
            let promisesUpdateImg = [];
            do {
                console.log(this["answerImages_" + contProImg]);
                if (contProImg % 2 != 0) {
                    this["saveAnswerImage_" + contProImg] = indexDb.updateReportImages(reference.keyGenerated + subId + subIdNumber, "image_1", this["answerImages_" + contProImg]);
                    promisesUpdateImg.push(this["saveAnswerImage_" + contProImg]);
                    subIdNumber++;
                }
                console.log(contProImg);
                contProImg++;
            }
            while (contProImg <= contImages - 1);

            return new Promise(function (resolve, reject) {
                Promise.all(promisesUpdateImg).then(function () {
                    resolve();
                });
            });
        },
        previewPDF: function (template, template_name, watermark, answers) {
            return new Promise(function (resolve, reject) {
                var worker = new Worker(URL.createObjectURL(blob));

                worker.addEventListener('message', function (e) {
                    resolve(e.data);
                }, false);

                worker.addEventListener("error", function (error) {
                    //console.log("Se ha producido un error : " + error);
                }
                    , false);

                worker.postMessage({ "template": JSON.stringify(template), "template_name": template_name, "watermark": watermark, "answers": JSON.stringify(answers), "username": username }); // Send data to our worker.

            });
        },
        generateBackupJSON: function (answers) {

            var saveData = (function () {
                var a = document.createElement("a");
                document.body.appendChild(a);
                a.style = "display: none";
                return function (data, fileName) {
                    var json = JSON.stringify(data),
                        blob = new Blob([json], { type: "octet/stream" }),
                        url = window.URL.createObjectURL(blob);
                    a.href = url;
                    a.download = fileName;
                    a.click();
                    window.URL.revokeObjectURL(url);
                };
            }());

            var fileName = "Answers BACKUP.json";
            saveData(answers, fileName);
        },
        generatePDF: function (template) {
            let ref = this;
            ref.previewPDF().then(function (loadPdfResponse) {
                let preview_pdf = JSON.parse(loadPdfResponse);
                preview_pdf.footer = function (currentPage, pageCount) {
                    var text = {};
                    text["text"] = "Este reporte fue generado en Smart Docs Lite App - " + new Date().toString().split("GMT")[0] + " Pag " + currentPage + " de " + pageCount;
                    text["alignment"] = "center";
                    text["fontSize"] = 6;
                    text["link"] = "https://www.smart-docs.co";
                    return text;
                };

                let export_pdf_name = templateExportPDFName;

                pdfMake.createPdf(preview_pdf).download(templateExportPDFName + ".pdf");
            });
        },
        filterByAnswerType: function (type) {
            let reference = this;
            var answerFiltered = reference.userAnswer.filter(function (e, index) {
                if (e.type == type) {
                    //reference.userAnswer.splice(index, 1);
                    return e;
                }
            });
            return (answerFiltered.length == 0) ? JSON.stringify(answerFiltered) : "[" + JSON.stringify(answerFiltered) + "]";

        },
        filterByAnswerTypeImage: function () {
            let reference = this;
            var answerFiltered = reference.userAnswer.filter(function (e, index) {
                if (e.type == 'image1Label' || e.type == "image2Labels") {
                    //reference.userAnswer.splice(index, 1);
                    return e;
                }
            });
            return answerFiltered;
        },
        fillReportsPage: function (reportsResponse) {
            let reference = this;
            console.log("Reports Response", reportsResponse);
            let cont = 0;
            for (let report of reportsResponse) {
                $("#dataTableAllReport > tbody").append("<tr><td style='cursor:pointer' id='allReports" + cont + "'>" + report.reportId + "</td><td> " + report.name + "</td><td>" + report.status + "</td><td>" + report.lastModification.split("GMT")[0] + "</td><td><input id='allReports" + cont + "Details' type='image' name='image' src='/img/eyeIcon.png'></td></tr>");
                $('#allReports' + cont).add('#allReports' + cont + "Details").on("click", { "report": report }, function (event) {
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
        fillReportsLogPage: function (reportsLogResponse) {
            let reference = this;
            //let templatesResponse = templates.getTemplates();
            let cont = 0;
            for (let reportLog of reportsLogResponse) {
                let background_status;
                let status;
                switch (reportLog.status) {
                    case "SM-Status001":
                        background_status = "warning";
                        status = "DRAFT";

                        break;
                    case "SM-Status002":
                        background_status = "info";
                        status = "COMPLETED";
                        break;
                }
                $("#dataTableAllReportLog > tbody").append("<tr class= '" + background_status + "' ><td>" + reportLog.reportId + "</td><td> " + reportLog.operation + "</td><td>" + status + "</td><td>" + reportLog.operationDate.split("GMT")[0] + "</td></tr>");
            }
        }
    }

    /*navigator.serviceWorker.getRegistrations().then(function (registrations) {
                    for (let registration of registrations) {
                        registration.unregister()
                    }
                })
                */

    indexDb.startIndexedDB().then(function () {
        message.removeMessageLoader("#mainContent2");
        //smartDocsOffline.registerSW();
        smartDocsOffline.startEventsLoginPage();
        /*
        if (JSON.parse(localStorage.getItem("user")).userId == null) {
            smartDocsOffline.launchUserModal();
        } else {
            smartDocsOffline.initApplication();
        }
        */
    });
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0), __webpack_require__(0)))

/***/ })
/******/ ]);