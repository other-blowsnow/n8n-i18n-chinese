import { n as __esmMin, r as __export, t as __commonJSMin } from "./chunk-r2Y0G7H8.js";
var require___vite_browser_external = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {};
}));
var require_path_browserify = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function assertPath(path) {
		if (typeof path !== "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
	}
	function normalizeStringPosix(path, allowAboveRoot) {
		var res = "";
		var lastSegmentLength = 0;
		var lastSlash = -1;
		var dots = 0;
		var code;
		for (var i = 0; i <= path.length; ++i) {
			if (i < path.length) code = path.charCodeAt(i);
			else if (code === 47) break;
			else code = 47;
			if (code === 47) {
				if (lastSlash === i - 1 || dots === 1) {} else if (lastSlash !== i - 1 && dots === 2) {
					if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
						if (res.length > 2) {
							var lastSlashIndex = res.lastIndexOf("/");
							if (lastSlashIndex !== res.length - 1) {
								if (lastSlashIndex === -1) {
									res = "";
									lastSegmentLength = 0;
								} else {
									res = res.slice(0, lastSlashIndex);
									lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
								}
								lastSlash = i;
								dots = 0;
								continue;
							}
						} else if (res.length === 2 || res.length === 1) {
							res = "";
							lastSegmentLength = 0;
							lastSlash = i;
							dots = 0;
							continue;
						}
					}
					if (allowAboveRoot) {
						if (res.length > 0) res += "/..";
						else res = "..";
						lastSegmentLength = 2;
					}
				} else {
					if (res.length > 0) res += "/" + path.slice(lastSlash + 1, i);
					else res = path.slice(lastSlash + 1, i);
					lastSegmentLength = i - lastSlash - 1;
				}
				lastSlash = i;
				dots = 0;
			} else if (code === 46 && dots !== -1) ++dots;
			else dots = -1;
		}
		return res;
	}
	function _format(sep, pathObject) {
		var dir = pathObject.dir || pathObject.root;
		var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
		if (!dir) return base;
		if (dir === pathObject.root) return dir + base;
		return dir + sep + base;
	}
	var posix = {
		resolve: function resolve() {
			var resolvedPath = "";
			var resolvedAbsolute = false;
			var cwd;
			for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
				var path;
				if (i >= 0) path = arguments[i];
				else {
					if (cwd === void 0) cwd = process.cwd();
					path = cwd;
				}
				assertPath(path);
				if (path.length === 0) continue;
				resolvedPath = path + "/" + resolvedPath;
				resolvedAbsolute = path.charCodeAt(0) === 47;
			}
			resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
			if (resolvedAbsolute) if (resolvedPath.length > 0) return "/" + resolvedPath;
			else return "/";
			else if (resolvedPath.length > 0) return resolvedPath;
			else return ".";
		},
		normalize: function normalize(path) {
			assertPath(path);
			if (path.length === 0) return ".";
			var isAbsolute = path.charCodeAt(0) === 47;
			var trailingSeparator = path.charCodeAt(path.length - 1) === 47;
			path = normalizeStringPosix(path, !isAbsolute);
			if (path.length === 0 && !isAbsolute) path = ".";
			if (path.length > 0 && trailingSeparator) path += "/";
			if (isAbsolute) return "/" + path;
			return path;
		},
		isAbsolute: function isAbsolute(path) {
			assertPath(path);
			return path.length > 0 && path.charCodeAt(0) === 47;
		},
		join: function join() {
			if (arguments.length === 0) return ".";
			var joined;
			for (var i = 0; i < arguments.length; ++i) {
				var arg = arguments[i];
				assertPath(arg);
				if (arg.length > 0) if (joined === void 0) joined = arg;
				else joined += "/" + arg;
			}
			if (joined === void 0) return ".";
			return posix.normalize(joined);
		},
		relative: function relative(from, to) {
			assertPath(from);
			assertPath(to);
			if (from === to) return "";
			from = posix.resolve(from);
			to = posix.resolve(to);
			if (from === to) return "";
			var fromStart = 1;
			for (; fromStart < from.length; ++fromStart) if (from.charCodeAt(fromStart) !== 47) break;
			var fromEnd = from.length;
			var fromLen = fromEnd - fromStart;
			var toStart = 1;
			for (; toStart < to.length; ++toStart) if (to.charCodeAt(toStart) !== 47) break;
			var toLen = to.length - toStart;
			var length = fromLen < toLen ? fromLen : toLen;
			var lastCommonSep = -1;
			var i = 0;
			for (; i <= length; ++i) {
				if (i === length) {
					if (toLen > length) {
						if (to.charCodeAt(toStart + i) === 47) return to.slice(toStart + i + 1);
						else if (i === 0) return to.slice(toStart + i);
					} else if (fromLen > length) {
						if (from.charCodeAt(fromStart + i) === 47) lastCommonSep = i;
						else if (i === 0) lastCommonSep = 0;
					}
					break;
				}
				var fromCode = from.charCodeAt(fromStart + i);
				if (fromCode !== to.charCodeAt(toStart + i)) break;
				else if (fromCode === 47) lastCommonSep = i;
			}
			var out = "";
			for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) if (i === fromEnd || from.charCodeAt(i) === 47) if (out.length === 0) out += "..";
			else out += "/..";
			if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
			else {
				toStart += lastCommonSep;
				if (to.charCodeAt(toStart) === 47) ++toStart;
				return to.slice(toStart);
			}
		},
		_makeLong: function _makeLong(path) {
			return path;
		},
		dirname: function dirname(path) {
			assertPath(path);
			if (path.length === 0) return ".";
			var code = path.charCodeAt(0);
			var hasRoot = code === 47;
			var end = -1;
			var matchedSlash = true;
			for (var i = path.length - 1; i >= 1; --i) {
				code = path.charCodeAt(i);
				if (code === 47) {
					if (!matchedSlash) {
						end = i;
						break;
					}
				} else matchedSlash = false;
			}
			if (end === -1) return hasRoot ? "/" : ".";
			if (hasRoot && end === 1) return "//";
			return path.slice(0, end);
		},
		basename: function basename(path, ext) {
			if (ext !== void 0 && typeof ext !== "string") throw new TypeError("\"ext\" argument must be a string");
			assertPath(path);
			var start = 0;
			var end = -1;
			var matchedSlash = true;
			var i;
			if (ext !== void 0 && ext.length > 0 && ext.length <= path.length) {
				if (ext.length === path.length && ext === path) return "";
				var extIdx = ext.length - 1;
				var firstNonSlashEnd = -1;
				for (i = path.length - 1; i >= 0; --i) {
					var code = path.charCodeAt(i);
					if (code === 47) {
						if (!matchedSlash) {
							start = i + 1;
							break;
						}
					} else {
						if (firstNonSlashEnd === -1) {
							matchedSlash = false;
							firstNonSlashEnd = i + 1;
						}
						if (extIdx >= 0) if (code === ext.charCodeAt(extIdx)) {
							if (--extIdx === -1) end = i;
						} else {
							extIdx = -1;
							end = firstNonSlashEnd;
						}
					}
				}
				if (start === end) end = firstNonSlashEnd;
				else if (end === -1) end = path.length;
				return path.slice(start, end);
			} else {
				for (i = path.length - 1; i >= 0; --i) if (path.charCodeAt(i) === 47) {
					if (!matchedSlash) {
						start = i + 1;
						break;
					}
				} else if (end === -1) {
					matchedSlash = false;
					end = i + 1;
				}
				if (end === -1) return "";
				return path.slice(start, end);
			}
		},
		extname: function extname(path) {
			assertPath(path);
			var startDot = -1;
			var startPart = 0;
			var end = -1;
			var matchedSlash = true;
			var preDotState = 0;
			for (var i = path.length - 1; i >= 0; --i) {
				var code = path.charCodeAt(i);
				if (code === 47) {
					if (!matchedSlash) {
						startPart = i + 1;
						break;
					}
					continue;
				}
				if (end === -1) {
					matchedSlash = false;
					end = i + 1;
				}
				if (code === 46) {
					if (startDot === -1) startDot = i;
					else if (preDotState !== 1) preDotState = 1;
				} else if (startDot !== -1) preDotState = -1;
			}
			if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return "";
			return path.slice(startDot, end);
		},
		format: function format(pathObject) {
			if (pathObject === null || typeof pathObject !== "object") throw new TypeError("The \"pathObject\" argument must be of type Object. Received type " + typeof pathObject);
			return _format("/", pathObject);
		},
		parse: function parse(path) {
			assertPath(path);
			var ret = {
				root: "",
				dir: "",
				base: "",
				ext: "",
				name: ""
			};
			if (path.length === 0) return ret;
			var code = path.charCodeAt(0);
			var isAbsolute = code === 47;
			var start;
			if (isAbsolute) {
				ret.root = "/";
				start = 1;
			} else start = 0;
			var startDot = -1;
			var startPart = 0;
			var end = -1;
			var matchedSlash = true;
			var i = path.length - 1;
			var preDotState = 0;
			for (; i >= start; --i) {
				code = path.charCodeAt(i);
				if (code === 47) {
					if (!matchedSlash) {
						startPart = i + 1;
						break;
					}
					continue;
				}
				if (end === -1) {
					matchedSlash = false;
					end = i + 1;
				}
				if (code === 46) {
					if (startDot === -1) startDot = i;
					else if (preDotState !== 1) preDotState = 1;
				} else if (startDot !== -1) preDotState = -1;
			}
			if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
				if (end !== -1) if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
				else ret.base = ret.name = path.slice(startPart, end);
			} else {
				if (startPart === 0 && isAbsolute) {
					ret.name = path.slice(1, startDot);
					ret.base = path.slice(1, end);
				} else {
					ret.name = path.slice(startPart, startDot);
					ret.base = path.slice(startPart, end);
				}
				ret.ext = path.slice(startDot, end);
			}
			if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
			else if (isAbsolute) ret.dir = "/";
			return ret;
		},
		sep: "/",
		delimiter: ":",
		win32: null,
		posix: null
	};
	posix.posix = posix;
	module.exports = posix;
}));
var require_type = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = TypeError;
}));
var require_es_object_atoms = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Object;
}));
var require_es_errors = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Error;
}));
var require_eval = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = EvalError;
}));
var require_range = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = RangeError;
}));
var require_ref = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = ReferenceError;
}));
var require_syntax = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = SyntaxError;
}));
var require_uri = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = URIError;
}));
var require_abs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Math.abs;
}));
var require_floor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Math.floor;
}));
var require_max = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Math.max;
}));
var require_min = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Math.min;
}));
var require_pow = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Math.pow;
}));
var require_round = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Math.round;
}));
var require_isNaN = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Number.isNaN || function isNaN$1(a) {
		return a !== a;
	};
}));
var require_sign = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var $isNaN = require_isNaN();
	module.exports = function sign$1(number) {
		if ($isNaN(number) || number === 0) return number;
		return number < 0 ? -1 : 1;
	};
}));
var require_gOPD = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Object.getOwnPropertyDescriptor;
}));
var require_gopd = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var $gOPD$1 = require_gOPD();
	if ($gOPD$1) try {
		$gOPD$1([], "length");
	} catch (e) {
		$gOPD$1 = null;
	}
	module.exports = $gOPD$1;
}));
var require_es_define_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var $defineProperty$1 = Object.defineProperty || false;
	if ($defineProperty$1) try {
		$defineProperty$1({}, "a", { value: 1 });
	} catch (e) {
		$defineProperty$1 = false;
	}
	module.exports = $defineProperty$1;
}));
var require_shams = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function hasSymbols$1() {
		if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return false;
		if (typeof Symbol.iterator === "symbol") return true;
		var obj = {};
		var sym = Symbol("test");
		var symObj = Object(sym);
		if (typeof sym === "string") return false;
		if (Object.prototype.toString.call(sym) !== "[object Symbol]") return false;
		if (Object.prototype.toString.call(symObj) !== "[object Symbol]") return false;
		var symVal = 42;
		obj[sym] = symVal;
		for (var _ in obj) return false;
		if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) return false;
		if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) return false;
		var syms = Object.getOwnPropertySymbols(obj);
		if (syms.length !== 1 || syms[0] !== sym) return false;
		if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
		if (typeof Object.getOwnPropertyDescriptor === "function") {
			var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
			if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
		}
		return true;
	};
}));
var require_has_symbols = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var origSymbol = typeof Symbol !== "undefined" && Symbol;
	var hasSymbolSham = require_shams();
	module.exports = function hasNativeSymbols() {
		if (typeof origSymbol !== "function") return false;
		if (typeof Symbol !== "function") return false;
		if (typeof origSymbol("foo") !== "symbol") return false;
		if (typeof Symbol("bar") !== "symbol") return false;
		return hasSymbolSham();
	};
}));
var require_Reflect_getPrototypeOf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
}));
var require_Object_getPrototypeOf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_es_object_atoms().getPrototypeOf || null;
}));
var require_implementation = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
	var toStr = Object.prototype.toString;
	var max$1 = Math.max;
	var funcType = "[object Function]";
	var concatty = function concatty$1(a, b) {
		var arr = [];
		for (var i = 0; i < a.length; i += 1) arr[i] = a[i];
		for (var j = 0; j < b.length; j += 1) arr[j + a.length] = b[j];
		return arr;
	};
	var slicy = function slicy$1(arrLike, offset) {
		var arr = [];
		for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) arr[j] = arrLike[i];
		return arr;
	};
	var joiny = function(arr, joiner) {
		var str = "";
		for (var i = 0; i < arr.length; i += 1) {
			str += arr[i];
			if (i + 1 < arr.length) str += joiner;
		}
		return str;
	};
	module.exports = function bind$4(that) {
		var target = this;
		if (typeof target !== "function" || toStr.apply(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
		var args = slicy(arguments, 1);
		var bound;
		var binder = function() {
			if (this instanceof bound) {
				var result = target.apply(this, concatty(args, arguments));
				if (Object(result) === result) return result;
				return this;
			}
			return target.apply(that, concatty(args, arguments));
		};
		var boundLength = max$1(0, target.length - args.length);
		var boundArgs = [];
		for (var i = 0; i < boundLength; i++) boundArgs[i] = "$" + i;
		bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
		if (target.prototype) {
			var Empty = function Empty$1() {};
			Empty.prototype = target.prototype;
			bound.prototype = new Empty();
			Empty.prototype = null;
		}
		return bound;
	};
}));
var require_function_bind = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var implementation = require_implementation();
	module.exports = Function.prototype.bind || implementation;
}));
var require_functionCall = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Function.prototype.call;
}));
var require_functionApply = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Function.prototype.apply;
}));
var require_reflectApply = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
}));
var require_actualApply = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var bind$3 = require_function_bind();
	var $apply$1 = require_functionApply();
	var $call$2 = require_functionCall();
	module.exports = require_reflectApply() || bind$3.call($call$2, $apply$1);
}));
var require_call_bind_apply_helpers = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var bind$2 = require_function_bind();
	var $TypeError$1 = require_type();
	var $call$1 = require_functionCall();
	var $actualApply = require_actualApply();
	module.exports = function callBindBasic$1(args) {
		if (args.length < 1 || typeof args[0] !== "function") throw new $TypeError$1("a function is required");
		return $actualApply(bind$2, $call$1, args);
	};
}));
var require_get = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var callBind = require_call_bind_apply_helpers();
	var gOPD = require_gopd();
	var hasProtoAccessor;
	try {
		hasProtoAccessor = [].__proto__ === Array.prototype;
	} catch (e) {
		if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") throw e;
	}
	var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, "__proto__");
	var $Object$1 = Object;
	var $getPrototypeOf = $Object$1.getPrototypeOf;
	module.exports = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? function getDunder(value) {
		return $getPrototypeOf(value == null ? value : $Object$1(value));
	} : false;
}));
var require_get_proto = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var reflectGetProto = require_Reflect_getPrototypeOf();
	var originalGetProto = require_Object_getPrototypeOf();
	var getDunderProto = require_get();
	module.exports = reflectGetProto ? function getProto$1(O) {
		return reflectGetProto(O);
	} : originalGetProto ? function getProto$1(O) {
		if (!O || typeof O !== "object" && typeof O !== "function") throw new TypeError("getProto: not an object");
		return originalGetProto(O);
	} : getDunderProto ? function getProto$1(O) {
		return getDunderProto(O);
	} : null;
}));
var require_hasown = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var call = Function.prototype.call;
	var $hasOwn = Object.prototype.hasOwnProperty;
	module.exports = require_function_bind().call(call, $hasOwn);
}));
var require_get_intrinsic = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var undefined$1;
	var $Object = require_es_object_atoms();
	var $Error = require_es_errors();
	var $EvalError = require_eval();
	var $RangeError = require_range();
	var $ReferenceError = require_ref();
	var $SyntaxError = require_syntax();
	var $TypeError = require_type();
	var $URIError = require_uri();
	var abs = require_abs();
	var floor = require_floor();
	var max = require_max();
	var min = require_min();
	var pow = require_pow();
	var round = require_round();
	var sign = require_sign();
	var $Function = Function;
	var getEvalledConstructor = function(expressionSyntax) {
		try {
			return $Function("\"use strict\"; return (" + expressionSyntax + ").constructor;")();
		} catch (e) {}
	};
	var $gOPD = require_gopd();
	var $defineProperty = require_es_define_property();
	var throwTypeError = function() {
		throw new $TypeError();
	};
	var ThrowTypeError = $gOPD ? function() {
		try {
			arguments.callee;
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				return $gOPD(arguments, "callee").get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}() : throwTypeError;
	var hasSymbols = require_has_symbols()();
	var getProto = require_get_proto();
	var $ObjectGPO = require_Object_getPrototypeOf();
	var $ReflectGPO = require_Reflect_getPrototypeOf();
	var $apply = require_functionApply();
	var $call = require_functionCall();
	var needsEval = {};
	var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined$1 : getProto(Uint8Array);
	var INTRINSICS = {
		__proto__: null,
		"%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
		"%Array%": Array,
		"%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
		"%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined$1,
		"%AsyncFromSyncIteratorPrototype%": undefined$1,
		"%AsyncFunction%": needsEval,
		"%AsyncGenerator%": needsEval,
		"%AsyncGeneratorFunction%": needsEval,
		"%AsyncIteratorPrototype%": needsEval,
		"%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
		"%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
		"%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined$1 : BigInt64Array,
		"%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined$1 : BigUint64Array,
		"%Boolean%": Boolean,
		"%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
		"%Date%": Date,
		"%decodeURI%": decodeURI,
		"%decodeURIComponent%": decodeURIComponent,
		"%encodeURI%": encodeURI,
		"%encodeURIComponent%": encodeURIComponent,
		"%Error%": $Error,
		"%eval%": eval,
		"%EvalError%": $EvalError,
		"%Float16Array%": typeof Float16Array === "undefined" ? undefined$1 : Float16Array,
		"%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
		"%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
		"%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
		"%Function%": $Function,
		"%GeneratorFunction%": needsEval,
		"%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
		"%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
		"%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
		"%isFinite%": isFinite,
		"%isNaN%": isNaN,
		"%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
		"%JSON%": typeof JSON === "object" ? JSON : undefined$1,
		"%Map%": typeof Map === "undefined" ? undefined$1 : Map,
		"%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined$1 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
		"%Math%": Math,
		"%Number%": Number,
		"%Object%": $Object,
		"%Object.getOwnPropertyDescriptor%": $gOPD,
		"%parseFloat%": parseFloat,
		"%parseInt%": parseInt,
		"%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
		"%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
		"%RangeError%": $RangeError,
		"%ReferenceError%": $ReferenceError,
		"%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
		"%RegExp%": RegExp,
		"%Set%": typeof Set === "undefined" ? undefined$1 : Set,
		"%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined$1 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
		"%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
		"%String%": String,
		"%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined$1,
		"%Symbol%": hasSymbols ? Symbol : undefined$1,
		"%SyntaxError%": $SyntaxError,
		"%ThrowTypeError%": ThrowTypeError,
		"%TypedArray%": TypedArray,
		"%TypeError%": $TypeError,
		"%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
		"%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
		"%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
		"%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
		"%URIError%": $URIError,
		"%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
		"%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
		"%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet,
		"%Function.prototype.call%": $call,
		"%Function.prototype.apply%": $apply,
		"%Object.defineProperty%": $defineProperty,
		"%Object.getPrototypeOf%": $ObjectGPO,
		"%Math.abs%": abs,
		"%Math.floor%": floor,
		"%Math.max%": max,
		"%Math.min%": min,
		"%Math.pow%": pow,
		"%Math.round%": round,
		"%Math.sign%": sign,
		"%Reflect.getPrototypeOf%": $ReflectGPO
	};
	if (getProto) try {
		null.error;
	} catch (e) {
		INTRINSICS["%Error.prototype%"] = getProto(getProto(e));
	}
	var doEval = function doEval$1(name) {
		var value;
		if (name === "%AsyncFunction%") value = getEvalledConstructor("async function () {}");
		else if (name === "%GeneratorFunction%") value = getEvalledConstructor("function* () {}");
		else if (name === "%AsyncGeneratorFunction%") value = getEvalledConstructor("async function* () {}");
		else if (name === "%AsyncGenerator%") {
			var fn = doEval$1("%AsyncGeneratorFunction%");
			if (fn) value = fn.prototype;
		} else if (name === "%AsyncIteratorPrototype%") {
			var gen = doEval$1("%AsyncGenerator%");
			if (gen && getProto) value = getProto(gen.prototype);
		}
		INTRINSICS[name] = value;
		return value;
	};
	var LEGACY_ALIASES = {
		__proto__: null,
		"%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
		"%ArrayPrototype%": ["Array", "prototype"],
		"%ArrayProto_entries%": [
			"Array",
			"prototype",
			"entries"
		],
		"%ArrayProto_forEach%": [
			"Array",
			"prototype",
			"forEach"
		],
		"%ArrayProto_keys%": [
			"Array",
			"prototype",
			"keys"
		],
		"%ArrayProto_values%": [
			"Array",
			"prototype",
			"values"
		],
		"%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
		"%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
		"%AsyncGeneratorPrototype%": [
			"AsyncGeneratorFunction",
			"prototype",
			"prototype"
		],
		"%BooleanPrototype%": ["Boolean", "prototype"],
		"%DataViewPrototype%": ["DataView", "prototype"],
		"%DatePrototype%": ["Date", "prototype"],
		"%ErrorPrototype%": ["Error", "prototype"],
		"%EvalErrorPrototype%": ["EvalError", "prototype"],
		"%Float32ArrayPrototype%": ["Float32Array", "prototype"],
		"%Float64ArrayPrototype%": ["Float64Array", "prototype"],
		"%FunctionPrototype%": ["Function", "prototype"],
		"%Generator%": ["GeneratorFunction", "prototype"],
		"%GeneratorPrototype%": [
			"GeneratorFunction",
			"prototype",
			"prototype"
		],
		"%Int8ArrayPrototype%": ["Int8Array", "prototype"],
		"%Int16ArrayPrototype%": ["Int16Array", "prototype"],
		"%Int32ArrayPrototype%": ["Int32Array", "prototype"],
		"%JSONParse%": ["JSON", "parse"],
		"%JSONStringify%": ["JSON", "stringify"],
		"%MapPrototype%": ["Map", "prototype"],
		"%NumberPrototype%": ["Number", "prototype"],
		"%ObjectPrototype%": ["Object", "prototype"],
		"%ObjProto_toString%": [
			"Object",
			"prototype",
			"toString"
		],
		"%ObjProto_valueOf%": [
			"Object",
			"prototype",
			"valueOf"
		],
		"%PromisePrototype%": ["Promise", "prototype"],
		"%PromiseProto_then%": [
			"Promise",
			"prototype",
			"then"
		],
		"%Promise_all%": ["Promise", "all"],
		"%Promise_reject%": ["Promise", "reject"],
		"%Promise_resolve%": ["Promise", "resolve"],
		"%RangeErrorPrototype%": ["RangeError", "prototype"],
		"%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
		"%RegExpPrototype%": ["RegExp", "prototype"],
		"%SetPrototype%": ["Set", "prototype"],
		"%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
		"%StringPrototype%": ["String", "prototype"],
		"%SymbolPrototype%": ["Symbol", "prototype"],
		"%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
		"%TypedArrayPrototype%": ["TypedArray", "prototype"],
		"%TypeErrorPrototype%": ["TypeError", "prototype"],
		"%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
		"%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
		"%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
		"%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
		"%URIErrorPrototype%": ["URIError", "prototype"],
		"%WeakMapPrototype%": ["WeakMap", "prototype"],
		"%WeakSetPrototype%": ["WeakSet", "prototype"]
	};
	var bind = require_function_bind();
	var hasOwn = require_hasown();
	var $concat = bind.call($call, Array.prototype.concat);
	var $spliceApply = bind.call($apply, Array.prototype.splice);
	var $replace = bind.call($call, String.prototype.replace);
	var $strSlice = bind.call($call, String.prototype.slice);
	var $exec = bind.call($call, RegExp.prototype.exec);
	var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
	var reEscapeChar = /\\(\\)?/g;
	var stringToPath = function stringToPath$1(string) {
		var first = $strSlice(string, 0, 1);
		var last = $strSlice(string, -1);
		if (first === "%" && last !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
		else if (last === "%" && first !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
		var result = [];
		$replace(string, rePropName, function(match, number, quote, subString) {
			result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
		});
		return result;
	};
	var getBaseIntrinsic = function getBaseIntrinsic$1(name, allowMissing) {
		var intrinsicName = name;
		var alias;
		if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
			alias = LEGACY_ALIASES[intrinsicName];
			intrinsicName = "%" + alias[0] + "%";
		}
		if (hasOwn(INTRINSICS, intrinsicName)) {
			var value = INTRINSICS[intrinsicName];
			if (value === needsEval) value = doEval(intrinsicName);
			if (typeof value === "undefined" && !allowMissing) throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
			return {
				alias,
				name: intrinsicName,
				value
			};
		}
		throw new $SyntaxError("intrinsic " + name + " does not exist!");
	};
	module.exports = function GetIntrinsic$1(name, allowMissing) {
		if (typeof name !== "string" || name.length === 0) throw new $TypeError("intrinsic name must be a non-empty string");
		if (arguments.length > 1 && typeof allowMissing !== "boolean") throw new $TypeError("\"allowMissing\" argument must be a boolean");
		if ($exec(/^%?[^%]*%?$/, name) === null) throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
		var parts = stringToPath(name);
		var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
		var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
		var intrinsicRealName = intrinsic.name;
		var value = intrinsic.value;
		var skipFurtherCaching = false;
		var alias = intrinsic.alias;
		if (alias) {
			intrinsicBaseName = alias[0];
			$spliceApply(parts, $concat([0, 1], alias));
		}
		for (var i = 1, isOwn = true; i < parts.length; i += 1) {
			var part = parts[i];
			var first = $strSlice(part, 0, 1);
			var last = $strSlice(part, -1);
			if ((first === "\"" || first === "'" || first === "`" || last === "\"" || last === "'" || last === "`") && first !== last) throw new $SyntaxError("property names with quotes must have matching quotes");
			if (part === "constructor" || !isOwn) skipFurtherCaching = true;
			intrinsicBaseName += "." + part;
			intrinsicRealName = "%" + intrinsicBaseName + "%";
			if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
			else if (value != null) {
				if (!(part in value)) {
					if (!allowMissing) throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
					return;
				}
				if ($gOPD && i + 1 >= parts.length) {
					var desc$1 = $gOPD(value, part);
					isOwn = !!desc$1;
					if (isOwn && "get" in desc$1 && !("originalValue" in desc$1.get)) value = desc$1.get;
					else value = value[part];
				} else {
					isOwn = hasOwn(value, part);
					value = value[part];
				}
				if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
			}
		}
		return value;
	};
}));
var require_call_bound = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var GetIntrinsic = require_get_intrinsic();
	var callBindBasic = require_call_bind_apply_helpers();
	var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
	module.exports = function callBoundIntrinsic(name, allowMissing) {
		var intrinsic = GetIntrinsic(name, !!allowMissing);
		if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) return callBindBasic([intrinsic]);
		return intrinsic;
	};
}));
var empty_exports = /* @__PURE__ */ __export({ default: () => null }, 1);
var init_empty = __esmMin((() => {}));
export { require_es_object_atoms as _, require_hasown as a, require___vite_browser_external as b, require_actualApply as c, require_has_symbols as d, require_shams as f, require_range as g, require_syntax as h, require_get_intrinsic as i, require_functionApply as l, require_gopd as m, init_empty as n, require_get_proto as o, require_es_define_property as p, require_call_bound as r, require_call_bind_apply_helpers as s, empty_exports as t, require_function_bind as u, require_type as v, require_path_browserify as y };
