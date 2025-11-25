import { n as __esmMin, r as __export, t as __commonJSMin } from "./chunk-6z4oVpB-.js";
function getDefaultExportFromCjs(x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function defaultSetTimout() {
	throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
	throw new Error("clearTimeout has not been defined");
}
function runTimeout(fun) {
	if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
	if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
		cachedSetTimeout = setTimeout;
		return setTimeout(fun, 0);
	}
	try {
		return cachedSetTimeout(fun, 0);
	} catch (e) {
		try {
			return cachedSetTimeout.call(null, fun, 0);
		} catch (e$1) {
			return cachedSetTimeout.call(this, fun, 0);
		}
	}
}
function runClearTimeout(marker) {
	if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
	if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
		cachedClearTimeout = clearTimeout;
		return clearTimeout(marker);
	}
	try {
		return cachedClearTimeout(marker);
	} catch (e) {
		try {
			return cachedClearTimeout.call(null, marker);
		} catch (e$1) {
			return cachedClearTimeout.call(this, marker);
		}
	}
}
function cleanUpNextTick() {
	if (!draining || !currentQueue) return;
	draining = false;
	if (currentQueue.length) queue = currentQueue.concat(queue);
	else queueIndex = -1;
	if (queue.length) drainQueue();
}
function drainQueue() {
	if (draining) return;
	var timeout = runTimeout(cleanUpNextTick);
	draining = true;
	var len$1 = queue.length;
	while (len$1) {
		currentQueue = queue;
		queue = [];
		while (++queueIndex < len$1) if (currentQueue) currentQueue[queueIndex].run();
		queueIndex = -1;
		len$1 = queue.length;
	}
	currentQueue = null;
	draining = false;
	runClearTimeout(timeout);
}
function Item(fun, array) {
	this.fun = fun;
	this.array = array;
}
function noop() {}
var browser, process, cachedSetTimeout, cachedClearTimeout, queue, draining, currentQueue, queueIndex, browserExports, process$1;
var init_dist$1 = __esmMin((() => {
	browser = { exports: {} };
	process = browser.exports = {};
	(function() {
		try {
			if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
			else cachedSetTimeout = defaultSetTimout;
		} catch (e) {
			cachedSetTimeout = defaultSetTimout;
		}
		try {
			if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
			else cachedClearTimeout = defaultClearTimeout;
		} catch (e) {
			cachedClearTimeout = defaultClearTimeout;
		}
	})();
	queue = [];
	draining = false;
	queueIndex = -1;
	process.nextTick = function(fun) {
		var args = new Array(arguments.length - 1);
		if (arguments.length > 1) for (var i$1 = 1; i$1 < arguments.length; i$1++) args[i$1 - 1] = arguments[i$1];
		queue.push(new Item(fun, args));
		if (queue.length === 1 && !draining) runTimeout(drainQueue);
	};
	Item.prototype.run = function() {
		this.fun.apply(null, this.array);
	};
	process.title = "browser";
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = "";
	process.versions = {};
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	process.listeners = function(name) {
		return [];
	};
	process.binding = function(name) {
		throw new Error("process.binding is not supported");
	};
	process.cwd = function() {
		return "/";
	};
	process.chdir = function(dir) {
		throw new Error("process.chdir is not supported");
	};
	process.umask = function() {
		return 0;
	};
	browserExports = browser.exports;
	process$1 = /* @__PURE__ */ getDefaultExportFromCjs(browserExports);
}));
var require___vite_browser_external = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {};
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
var require_type = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = TypeError;
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
	var $defineProperty$4 = Object.defineProperty || false;
	if ($defineProperty$4) try {
		$defineProperty$4({}, "a", { value: 1 });
	} catch (e) {
		$defineProperty$4 = false;
	}
	module.exports = $defineProperty$4;
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
		for (var i$1 = 0; i$1 < a.length; i$1 += 1) arr[i$1] = a[i$1];
		for (var j = 0; j < b.length; j += 1) arr[j + a.length] = b[j];
		return arr;
	};
	var slicy = function slicy$1(arrLike, offset) {
		var arr = [];
		for (var i$1 = offset || 0, j = 0; i$1 < arrLike.length; i$1 += 1, j += 1) arr[j] = arrLike[i$1];
		return arr;
	};
	var joiny = function(arr, joiner) {
		var str = "";
		for (var i$1 = 0; i$1 < arr.length; i$1 += 1) {
			str += arr[i$1];
			if (i$1 + 1 < arr.length) str += joiner;
		}
		return str;
	};
	module.exports = function bind$5(that) {
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
		for (var i$1 = 0; i$1 < boundLength; i$1++) boundArgs[i$1] = "$" + i$1;
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
	var bind$4 = require_function_bind();
	var $apply$2 = require_functionApply();
	var $call$3 = require_functionCall();
	module.exports = require_reflectApply() || bind$4.call($call$3, $apply$2);
}));
var require_call_bind_apply_helpers = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var bind$3 = require_function_bind();
	var $TypeError$4 = require_type();
	var $call$2 = require_functionCall();
	var $actualApply = require_actualApply();
	module.exports = function callBindBasic(args) {
		if (args.length < 1 || typeof args[0] !== "function") throw new $TypeError$4("a function is required");
		return $actualApply(bind$3, $call$2, args);
	};
}));
var require_get = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var callBind$1 = require_call_bind_apply_helpers();
	var gOPD$1 = require_gopd();
	var hasProtoAccessor;
	try {
		hasProtoAccessor = [].__proto__ === Array.prototype;
	} catch (e) {
		if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") throw e;
	}
	var desc = !!hasProtoAccessor && gOPD$1 && gOPD$1(Object.prototype, "__proto__");
	var $Object$1 = Object;
	var $getPrototypeOf = $Object$1.getPrototypeOf;
	module.exports = desc && typeof desc.get === "function" ? callBind$1([desc.get]) : typeof $getPrototypeOf === "function" ? function getDunder(value) {
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
	var $SyntaxError$1 = require_syntax();
	var $TypeError$3 = require_type();
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
	var $defineProperty$3 = require_es_define_property();
	var throwTypeError = function() {
		throw new $TypeError$3();
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
	var $apply$1 = require_functionApply();
	var $call$1 = require_functionCall();
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
		"%SyntaxError%": $SyntaxError$1,
		"%ThrowTypeError%": ThrowTypeError,
		"%TypedArray%": TypedArray,
		"%TypeError%": $TypeError$3,
		"%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
		"%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
		"%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
		"%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
		"%URIError%": $URIError,
		"%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
		"%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
		"%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet,
		"%Function.prototype.call%": $call$1,
		"%Function.prototype.apply%": $apply$1,
		"%Object.defineProperty%": $defineProperty$3,
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
	var bind$1 = require_function_bind();
	var hasOwn = require_hasown();
	var $concat = bind$1.call($call$1, Array.prototype.concat);
	var $spliceApply = bind$1.call($apply$1, Array.prototype.splice);
	var $replace = bind$1.call($call$1, String.prototype.replace);
	var $strSlice = bind$1.call($call$1, String.prototype.slice);
	var $exec = bind$1.call($call$1, RegExp.prototype.exec);
	var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
	var reEscapeChar = /\\(\\)?/g;
	var stringToPath = function stringToPath$1(string) {
		var first = $strSlice(string, 0, 1);
		var last = $strSlice(string, -1);
		if (first === "%" && last !== "%") throw new $SyntaxError$1("invalid intrinsic syntax, expected closing `%`");
		else if (last === "%" && first !== "%") throw new $SyntaxError$1("invalid intrinsic syntax, expected opening `%`");
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
			if (typeof value === "undefined" && !allowMissing) throw new $TypeError$3("intrinsic " + name + " exists, but is not available. Please file an issue!");
			return {
				alias,
				name: intrinsicName,
				value
			};
		}
		throw new $SyntaxError$1("intrinsic " + name + " does not exist!");
	};
	module.exports = function GetIntrinsic$3(name, allowMissing) {
		if (typeof name !== "string" || name.length === 0) throw new $TypeError$3("intrinsic name must be a non-empty string");
		if (arguments.length > 1 && typeof allowMissing !== "boolean") throw new $TypeError$3("\"allowMissing\" argument must be a boolean");
		if ($exec(/^%?[^%]*%?$/, name) === null) throw new $SyntaxError$1("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
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
		for (var i$1 = 1, isOwn = true; i$1 < parts.length; i$1 += 1) {
			var part = parts[i$1];
			var first = $strSlice(part, 0, 1);
			var last = $strSlice(part, -1);
			if ((first === "\"" || first === "'" || first === "`" || last === "\"" || last === "'" || last === "`") && first !== last) throw new $SyntaxError$1("property names with quotes must have matching quotes");
			if (part === "constructor" || !isOwn) skipFurtherCaching = true;
			intrinsicBaseName += "." + part;
			intrinsicRealName = "%" + intrinsicBaseName + "%";
			if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
			else if (value != null) {
				if (!(part in value)) {
					if (!allowMissing) throw new $TypeError$3("base intrinsic for " + name + " exists, but the property is not available.");
					return;
				}
				if ($gOPD && i$1 + 1 >= parts.length) {
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
var require_define_data_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var $defineProperty$2 = require_es_define_property();
	var $SyntaxError = require_syntax();
	var $TypeError$2 = require_type();
	var gopd = require_gopd();
	module.exports = function defineDataProperty(obj, property, value) {
		if (!obj || typeof obj !== "object" && typeof obj !== "function") throw new $TypeError$2("`obj` must be an object or a function`");
		if (typeof property !== "string" && typeof property !== "symbol") throw new $TypeError$2("`property` must be a string or a symbol`");
		if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) throw new $TypeError$2("`nonEnumerable`, if provided, must be a boolean or null");
		if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) throw new $TypeError$2("`nonWritable`, if provided, must be a boolean or null");
		if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) throw new $TypeError$2("`nonConfigurable`, if provided, must be a boolean or null");
		if (arguments.length > 6 && typeof arguments[6] !== "boolean") throw new $TypeError$2("`loose`, if provided, must be a boolean");
		var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
		var nonWritable = arguments.length > 4 ? arguments[4] : null;
		var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
		var loose = arguments.length > 6 ? arguments[6] : false;
		var desc$1 = !!gopd && gopd(obj, property);
		if ($defineProperty$2) $defineProperty$2(obj, property, {
			configurable: nonConfigurable === null && desc$1 ? desc$1.configurable : !nonConfigurable,
			enumerable: nonEnumerable === null && desc$1 ? desc$1.enumerable : !nonEnumerable,
			value,
			writable: nonWritable === null && desc$1 ? desc$1.writable : !nonWritable
		});
		else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) obj[property] = value;
		else throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
	};
}));
var require_has_property_descriptors = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var $defineProperty$1 = require_es_define_property();
	var hasPropertyDescriptors = function hasPropertyDescriptors$1() {
		return !!$defineProperty$1;
	};
	hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
		if (!$defineProperty$1) return null;
		try {
			return $defineProperty$1([], "length", { value: 1 }).length !== 1;
		} catch (e) {
			return true;
		}
	};
	module.exports = hasPropertyDescriptors;
}));
var require_set_function_length = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var GetIntrinsic$2 = require_get_intrinsic();
	var define = require_define_data_property();
	var hasDescriptors = require_has_property_descriptors()();
	var gOPD = require_gopd();
	var $TypeError$1 = require_type();
	var $floor = GetIntrinsic$2("%Math.floor%");
	module.exports = function setFunctionLength$1(fn, length) {
		if (typeof fn !== "function") throw new $TypeError$1("`fn` is not a function");
		if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) throw new $TypeError$1("`length` must be a positive 32-bit integer");
		var loose = arguments.length > 2 && !!arguments[2];
		var functionLengthIsConfigurable = true;
		var functionLengthIsWritable = true;
		if ("length" in fn && gOPD) {
			var desc$1 = gOPD(fn, "length");
			if (desc$1 && !desc$1.configurable) functionLengthIsConfigurable = false;
			if (desc$1 && !desc$1.writable) functionLengthIsWritable = false;
		}
		if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) if (hasDescriptors) define(fn, "length", length, true, true);
		else define(fn, "length", length);
		return fn;
	};
}));
var require_call_bind = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var bind = require_function_bind();
	var GetIntrinsic$1 = require_get_intrinsic();
	var setFunctionLength = require_set_function_length();
	var $TypeError = require_type();
	var $apply = GetIntrinsic$1("%Function.prototype.apply%");
	var $call = GetIntrinsic$1("%Function.prototype.call%");
	var $reflectApply = GetIntrinsic$1("%Reflect.apply%", true) || bind.call($call, $apply);
	var $defineProperty = require_es_define_property();
	var $max = GetIntrinsic$1("%Math.max%");
	module.exports = function callBind$2(originalFunction) {
		if (typeof originalFunction !== "function") throw new $TypeError("a function is required");
		return setFunctionLength($reflectApply(bind, $call, arguments), 1 + $max(0, originalFunction.length - (arguments.length - 1)), true);
	};
	var applyBind = function applyBind$1() {
		return $reflectApply(bind, $apply, arguments);
	};
	if ($defineProperty) $defineProperty(module.exports, "apply", { value: applyBind });
	else module.exports.apply = applyBind;
}));
var require_callBound = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var GetIntrinsic = require_get_intrinsic();
	var callBind = require_call_bind();
	var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
	module.exports = function callBoundIntrinsic(name, allowMissing) {
		var intrinsic = GetIntrinsic(name, !!allowMissing);
		if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) return callBind(intrinsic);
		return intrinsic;
	};
}));
function getLens(b64) {
	var len$1 = b64.length;
	if (len$1 % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
	var validLen = b64.indexOf("=");
	if (validLen === -1) validLen = len$1;
	var placeHoldersLen = validLen === len$1 ? 0 : 4 - validLen % 4;
	return [validLen, placeHoldersLen];
}
function byteLength(b64) {
	var lens = getLens(b64);
	var validLen = lens[0];
	var placeHoldersLen = lens[1];
	return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
	return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
	var tmp;
	var lens = getLens(b64);
	var validLen = lens[0];
	var placeHoldersLen = lens[1];
	var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
	var curByte = 0;
	var len$1 = placeHoldersLen > 0 ? validLen - 4 : validLen;
	var i$1;
	for (i$1 = 0; i$1 < len$1; i$1 += 4) {
		tmp = revLookup[b64.charCodeAt(i$1)] << 18 | revLookup[b64.charCodeAt(i$1 + 1)] << 12 | revLookup[b64.charCodeAt(i$1 + 2)] << 6 | revLookup[b64.charCodeAt(i$1 + 3)];
		arr[curByte++] = tmp >> 16 & 255;
		arr[curByte++] = tmp >> 8 & 255;
		arr[curByte++] = tmp & 255;
	}
	if (placeHoldersLen === 2) {
		tmp = revLookup[b64.charCodeAt(i$1)] << 2 | revLookup[b64.charCodeAt(i$1 + 1)] >> 4;
		arr[curByte++] = tmp & 255;
	}
	if (placeHoldersLen === 1) {
		tmp = revLookup[b64.charCodeAt(i$1)] << 10 | revLookup[b64.charCodeAt(i$1 + 1)] << 4 | revLookup[b64.charCodeAt(i$1 + 2)] >> 2;
		arr[curByte++] = tmp >> 8 & 255;
		arr[curByte++] = tmp & 255;
	}
	return arr;
}
function tripletToBase64(num) {
	return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
	var tmp;
	var output = [];
	for (var i$1 = start; i$1 < end; i$1 += 3) {
		tmp = (uint8[i$1] << 16 & 16711680) + (uint8[i$1 + 1] << 8 & 65280) + (uint8[i$1 + 2] & 255);
		output.push(tripletToBase64(tmp));
	}
	return output.join("");
}
function fromByteArray(uint8) {
	var tmp;
	var len$1 = uint8.length;
	var extraBytes = len$1 % 3;
	var parts = [];
	var maxChunkLength = 16383;
	for (var i$1 = 0, len2 = len$1 - extraBytes; i$1 < len2; i$1 += maxChunkLength) parts.push(encodeChunk(uint8, i$1, i$1 + maxChunkLength > len2 ? len2 : i$1 + maxChunkLength));
	if (extraBytes === 1) {
		tmp = uint8[len$1 - 1];
		parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
	} else if (extraBytes === 2) {
		tmp = (uint8[len$1 - 2] << 8) + uint8[len$1 - 1];
		parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
	}
	return parts.join("");
}
var buffer, base64Js, lookup, revLookup, Arr, code, i, len, ieee754, Buffer;
var init_dist = __esmMin((() => {
	buffer = {};
	base64Js = {};
	base64Js.byteLength = byteLength;
	base64Js.toByteArray = toByteArray;
	base64Js.fromByteArray = fromByteArray;
	lookup = [];
	revLookup = [];
	Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
	code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	for (i = 0, len = code.length; i < len; ++i) {
		lookup[i] = code[i];
		revLookup[code.charCodeAt(i)] = i;
	}
	revLookup["-".charCodeAt(0)] = 62;
	revLookup["_".charCodeAt(0)] = 63;
	ieee754 = {};
	/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
	ieee754.read = function(buffer$1, offset, isLE, mLen, nBytes) {
		var e, m;
		var eLen = nBytes * 8 - mLen - 1;
		var eMax = (1 << eLen) - 1;
		var eBias = eMax >> 1;
		var nBits = -7;
		var i$1 = isLE ? nBytes - 1 : 0;
		var d = isLE ? -1 : 1;
		var s = buffer$1[offset + i$1];
		i$1 += d;
		e = s & (1 << -nBits) - 1;
		s >>= -nBits;
		nBits += eLen;
		for (; nBits > 0; e = e * 256 + buffer$1[offset + i$1], i$1 += d, nBits -= 8);
		m = e & (1 << -nBits) - 1;
		e >>= -nBits;
		nBits += mLen;
		for (; nBits > 0; m = m * 256 + buffer$1[offset + i$1], i$1 += d, nBits -= 8);
		if (e === 0) e = 1 - eBias;
		else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
		else {
			m = m + Math.pow(2, mLen);
			e = e - eBias;
		}
		return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	};
	ieee754.write = function(buffer$1, value, offset, isLE, mLen, nBytes) {
		var e, m, c;
		var eLen = nBytes * 8 - mLen - 1;
		var eMax = (1 << eLen) - 1;
		var eBias = eMax >> 1;
		var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
		var i$1 = isLE ? 0 : nBytes - 1;
		var d = isLE ? 1 : -1;
		var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
		value = Math.abs(value);
		if (isNaN(value) || value === Infinity) {
			m = isNaN(value) ? 1 : 0;
			e = eMax;
		} else {
			e = Math.floor(Math.log(value) / Math.LN2);
			if (value * (c = Math.pow(2, -e)) < 1) {
				e--;
				c *= 2;
			}
			if (e + eBias >= 1) value += rt / c;
			else value += rt * Math.pow(2, 1 - eBias);
			if (value * c >= 2) {
				e++;
				c /= 2;
			}
			if (e + eBias >= eMax) {
				m = 0;
				e = eMax;
			} else if (e + eBias >= 1) {
				m = (value * c - 1) * Math.pow(2, mLen);
				e = e + eBias;
			} else {
				m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
				e = 0;
			}
		}
		for (; mLen >= 8; buffer$1[offset + i$1] = m & 255, i$1 += d, m /= 256, mLen -= 8);
		e = e << mLen | m;
		eLen += mLen;
		for (; eLen > 0; buffer$1[offset + i$1] = e & 255, i$1 += d, e /= 256, eLen -= 8);
		buffer$1[offset + i$1 - d] |= s * 128;
	};
	/*!
	* The buffer module from node.js, for the browser.
	*
	* @author   Feross Aboukhadijeh <https://feross.org>
	* @license  MIT
	*/
	(function(exports) {
		const base64 = base64Js;
		const ieee754$1 = ieee754;
		const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
		exports.Buffer = Buffer$2;
		exports.SlowBuffer = SlowBuffer$1;
		exports.INSPECT_MAX_BYTES = 50;
		const K_MAX_LENGTH = 2147483647;
		exports.kMaxLength = K_MAX_LENGTH;
		const { Uint8Array: GlobalUint8Array, ArrayBuffer: GlobalArrayBuffer, SharedArrayBuffer: GlobalSharedArrayBuffer } = globalThis;
		Buffer$2.TYPED_ARRAY_SUPPORT = typedArraySupport();
		if (!Buffer$2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
		function typedArraySupport() {
			try {
				const arr = new GlobalUint8Array(1);
				const proto = { foo: function() {
					return 42;
				} };
				Object.setPrototypeOf(proto, GlobalUint8Array.prototype);
				Object.setPrototypeOf(arr, proto);
				return arr.foo() === 42;
			} catch (e) {
				return false;
			}
		}
		Object.defineProperty(Buffer$2.prototype, "parent", {
			enumerable: true,
			get: function() {
				if (!Buffer$2.isBuffer(this)) return void 0;
				return this.buffer;
			}
		});
		Object.defineProperty(Buffer$2.prototype, "offset", {
			enumerable: true,
			get: function() {
				if (!Buffer$2.isBuffer(this)) return void 0;
				return this.byteOffset;
			}
		});
		function createBuffer(length) {
			if (length > K_MAX_LENGTH) throw new RangeError("The value \"" + length + "\" is invalid for option \"size\"");
			const buf = new GlobalUint8Array(length);
			Object.setPrototypeOf(buf, Buffer$2.prototype);
			return buf;
		}
		function Buffer$2(arg, encodingOrOffset, length) {
			if (typeof arg === "number") {
				if (typeof encodingOrOffset === "string") throw new TypeError("The \"string\" argument must be of type string. Received type number");
				return allocUnsafe(arg);
			}
			return from(arg, encodingOrOffset, length);
		}
		Buffer$2.poolSize = 8192;
		function from(value, encodingOrOffset, length) {
			if (typeof value === "string") return fromString(value, encodingOrOffset);
			if (GlobalArrayBuffer.isView(value)) return fromArrayView(value);
			if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
			if (isInstance(value, GlobalArrayBuffer) || value && isInstance(value.buffer, GlobalArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
			if (typeof GlobalSharedArrayBuffer !== "undefined" && (isInstance(value, GlobalSharedArrayBuffer) || value && isInstance(value.buffer, GlobalSharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
			if (typeof value === "number") throw new TypeError("The \"value\" argument must not be of type number. Received type number");
			const valueOf = value.valueOf && value.valueOf();
			if (valueOf != null && valueOf !== value) return Buffer$2.from(valueOf, encodingOrOffset, length);
			const b = fromObject(value);
			if (b) return b;
			if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer$2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
			throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
		}
		Buffer$2.from = function(value, encodingOrOffset, length) {
			return from(value, encodingOrOffset, length);
		};
		Object.setPrototypeOf(Buffer$2.prototype, GlobalUint8Array.prototype);
		Object.setPrototypeOf(Buffer$2, GlobalUint8Array);
		function assertSize(size) {
			if (typeof size !== "number") throw new TypeError("\"size\" argument must be of type number");
			else if (size < 0) throw new RangeError("The value \"" + size + "\" is invalid for option \"size\"");
		}
		function alloc(size, fill, encoding) {
			assertSize(size);
			if (size <= 0) return createBuffer(size);
			if (fill !== void 0) return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
			return createBuffer(size);
		}
		Buffer$2.alloc = function(size, fill, encoding) {
			return alloc(size, fill, encoding);
		};
		function allocUnsafe(size) {
			assertSize(size);
			return createBuffer(size < 0 ? 0 : checked(size) | 0);
		}
		Buffer$2.allocUnsafe = function(size) {
			return allocUnsafe(size);
		};
		Buffer$2.allocUnsafeSlow = function(size) {
			return allocUnsafe(size);
		};
		function fromString(string, encoding) {
			if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
			if (!Buffer$2.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
			const length = byteLength$1(string, encoding) | 0;
			let buf = createBuffer(length);
			const actual = buf.write(string, encoding);
			if (actual !== length) buf = buf.slice(0, actual);
			return buf;
		}
		function fromArrayLike(array) {
			const length = array.length < 0 ? 0 : checked(array.length) | 0;
			const buf = createBuffer(length);
			for (let i$1 = 0; i$1 < length; i$1 += 1) buf[i$1] = array[i$1] & 255;
			return buf;
		}
		function fromArrayView(arrayView) {
			if (isInstance(arrayView, GlobalUint8Array)) {
				const copy = new GlobalUint8Array(arrayView);
				return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
			}
			return fromArrayLike(arrayView);
		}
		function fromArrayBuffer(array, byteOffset, length) {
			if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError("\"offset\" is outside of buffer bounds");
			if (array.byteLength < byteOffset + (length || 0)) throw new RangeError("\"length\" is outside of buffer bounds");
			let buf;
			if (byteOffset === void 0 && length === void 0) buf = new GlobalUint8Array(array);
			else if (length === void 0) buf = new GlobalUint8Array(array, byteOffset);
			else buf = new GlobalUint8Array(array, byteOffset, length);
			Object.setPrototypeOf(buf, Buffer$2.prototype);
			return buf;
		}
		function fromObject(obj) {
			if (Buffer$2.isBuffer(obj)) {
				const len$1 = checked(obj.length) | 0;
				const buf = createBuffer(len$1);
				if (buf.length === 0) return buf;
				obj.copy(buf, 0, 0, len$1);
				return buf;
			}
			if (obj.length !== void 0) {
				if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
				return fromArrayLike(obj);
			}
			if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
		}
		function checked(length) {
			if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
			return length | 0;
		}
		function SlowBuffer$1(length) {
			if (+length != length) length = 0;
			return Buffer$2.alloc(+length);
		}
		Buffer$2.isBuffer = function isBuffer(b) {
			return b != null && b._isBuffer === true && b !== Buffer$2.prototype;
		};
		Buffer$2.compare = function compare(a, b) {
			if (isInstance(a, GlobalUint8Array)) a = Buffer$2.from(a, a.offset, a.byteLength);
			if (isInstance(b, GlobalUint8Array)) b = Buffer$2.from(b, b.offset, b.byteLength);
			if (!Buffer$2.isBuffer(a) || !Buffer$2.isBuffer(b)) throw new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
			if (a === b) return 0;
			let x = a.length;
			let y = b.length;
			for (let i$1 = 0, len$1 = Math.min(x, y); i$1 < len$1; ++i$1) if (a[i$1] !== b[i$1]) {
				x = a[i$1];
				y = b[i$1];
				break;
			}
			if (x < y) return -1;
			if (y < x) return 1;
			return 0;
		};
		Buffer$2.isEncoding = function isEncoding(encoding) {
			switch (String(encoding).toLowerCase()) {
				case "hex":
				case "utf8":
				case "utf-8":
				case "ascii":
				case "latin1":
				case "binary":
				case "base64":
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return true;
				default: return false;
			}
		};
		Buffer$2.concat = function concat(list, length) {
			if (!Array.isArray(list)) throw new TypeError("\"list\" argument must be an Array of Buffers");
			if (list.length === 0) return Buffer$2.alloc(0);
			let i$1;
			if (length === void 0) {
				length = 0;
				for (i$1 = 0; i$1 < list.length; ++i$1) length += list[i$1].length;
			}
			const buffer$1 = Buffer$2.allocUnsafe(length);
			let pos = 0;
			for (i$1 = 0; i$1 < list.length; ++i$1) {
				let buf = list[i$1];
				if (isInstance(buf, GlobalUint8Array)) if (pos + buf.length > buffer$1.length) {
					if (!Buffer$2.isBuffer(buf)) buf = Buffer$2.from(buf);
					buf.copy(buffer$1, pos);
				} else GlobalUint8Array.prototype.set.call(buffer$1, buf, pos);
				else if (!Buffer$2.isBuffer(buf)) throw new TypeError("\"list\" argument must be an Array of Buffers");
				else buf.copy(buffer$1, pos);
				pos += buf.length;
			}
			return buffer$1;
		};
		function byteLength$1(string, encoding) {
			if (Buffer$2.isBuffer(string)) return string.length;
			if (GlobalArrayBuffer.isView(string) || isInstance(string, GlobalArrayBuffer)) return string.byteLength;
			if (typeof string !== "string") throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof string);
			const len$1 = string.length;
			const mustMatch = arguments.length > 2 && arguments[2] === true;
			if (!mustMatch && len$1 === 0) return 0;
			let loweredCase = false;
			for (;;) switch (encoding) {
				case "ascii":
				case "latin1":
				case "binary": return len$1;
				case "utf8":
				case "utf-8": return utf8ToBytes(string).length;
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return len$1 * 2;
				case "hex": return len$1 >>> 1;
				case "base64": return base64ToBytes(string).length;
				default:
					if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length;
					encoding = ("" + encoding).toLowerCase();
					loweredCase = true;
			}
		}
		Buffer$2.byteLength = byteLength$1;
		function slowToString(encoding, start, end) {
			let loweredCase = false;
			if (start === void 0 || start < 0) start = 0;
			if (start > this.length) return "";
			if (end === void 0 || end > this.length) end = this.length;
			if (end <= 0) return "";
			end >>>= 0;
			start >>>= 0;
			if (end <= start) return "";
			if (!encoding) encoding = "utf8";
			while (true) switch (encoding) {
				case "hex": return hexSlice(this, start, end);
				case "utf8":
				case "utf-8": return utf8Slice(this, start, end);
				case "ascii": return asciiSlice(this, start, end);
				case "latin1":
				case "binary": return latin1Slice(this, start, end);
				case "base64": return base64Slice(this, start, end);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return utf16leSlice(this, start, end);
				default:
					if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
					encoding = (encoding + "").toLowerCase();
					loweredCase = true;
			}
		}
		Buffer$2.prototype._isBuffer = true;
		function swap(b, n, m) {
			const i$1 = b[n];
			b[n] = b[m];
			b[m] = i$1;
		}
		Buffer$2.prototype.swap16 = function swap16() {
			const len$1 = this.length;
			if (len$1 % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
			for (let i$1 = 0; i$1 < len$1; i$1 += 2) swap(this, i$1, i$1 + 1);
			return this;
		};
		Buffer$2.prototype.swap32 = function swap32() {
			const len$1 = this.length;
			if (len$1 % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
			for (let i$1 = 0; i$1 < len$1; i$1 += 4) {
				swap(this, i$1, i$1 + 3);
				swap(this, i$1 + 1, i$1 + 2);
			}
			return this;
		};
		Buffer$2.prototype.swap64 = function swap64() {
			const len$1 = this.length;
			if (len$1 % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
			for (let i$1 = 0; i$1 < len$1; i$1 += 8) {
				swap(this, i$1, i$1 + 7);
				swap(this, i$1 + 1, i$1 + 6);
				swap(this, i$1 + 2, i$1 + 5);
				swap(this, i$1 + 3, i$1 + 4);
			}
			return this;
		};
		Buffer$2.prototype.toString = function toString() {
			const length = this.length;
			if (length === 0) return "";
			if (arguments.length === 0) return utf8Slice(this, 0, length);
			return slowToString.apply(this, arguments);
		};
		Buffer$2.prototype.toLocaleString = Buffer$2.prototype.toString;
		Buffer$2.prototype.equals = function equals(b) {
			if (!Buffer$2.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
			if (this === b) return true;
			return Buffer$2.compare(this, b) === 0;
		};
		Buffer$2.prototype.inspect = function inspect() {
			let str = "";
			const max$2 = exports.INSPECT_MAX_BYTES;
			str = this.toString("hex", 0, max$2).replace(/(.{2})/g, "$1 ").trim();
			if (this.length > max$2) str += " ... ";
			return "<Buffer " + str + ">";
		};
		if (customInspectSymbol) Buffer$2.prototype[customInspectSymbol] = Buffer$2.prototype.inspect;
		Buffer$2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
			if (isInstance(target, GlobalUint8Array)) target = Buffer$2.from(target, target.offset, target.byteLength);
			if (!Buffer$2.isBuffer(target)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof target);
			if (start === void 0) start = 0;
			if (end === void 0) end = target ? target.length : 0;
			if (thisStart === void 0) thisStart = 0;
			if (thisEnd === void 0) thisEnd = this.length;
			if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
			if (thisStart >= thisEnd && start >= end) return 0;
			if (thisStart >= thisEnd) return -1;
			if (start >= end) return 1;
			start >>>= 0;
			end >>>= 0;
			thisStart >>>= 0;
			thisEnd >>>= 0;
			if (this === target) return 0;
			let x = thisEnd - thisStart;
			let y = end - start;
			const len$1 = Math.min(x, y);
			const thisCopy = this.slice(thisStart, thisEnd);
			const targetCopy = target.slice(start, end);
			for (let i$1 = 0; i$1 < len$1; ++i$1) if (thisCopy[i$1] !== targetCopy[i$1]) {
				x = thisCopy[i$1];
				y = targetCopy[i$1];
				break;
			}
			if (x < y) return -1;
			if (y < x) return 1;
			return 0;
		};
		function bidirectionalIndexOf(buffer$1, val, byteOffset, encoding, dir) {
			if (buffer$1.length === 0) return -1;
			if (typeof byteOffset === "string") {
				encoding = byteOffset;
				byteOffset = 0;
			} else if (byteOffset > 2147483647) byteOffset = 2147483647;
			else if (byteOffset < -2147483648) byteOffset = -2147483648;
			byteOffset = +byteOffset;
			if (numberIsNaN(byteOffset)) byteOffset = dir ? 0 : buffer$1.length - 1;
			if (byteOffset < 0) byteOffset = buffer$1.length + byteOffset;
			if (byteOffset >= buffer$1.length) if (dir) return -1;
			else byteOffset = buffer$1.length - 1;
			else if (byteOffset < 0) if (dir) byteOffset = 0;
			else return -1;
			if (typeof val === "string") val = Buffer$2.from(val, encoding);
			if (Buffer$2.isBuffer(val)) {
				if (val.length === 0) return -1;
				return arrayIndexOf(buffer$1, val, byteOffset, encoding, dir);
			} else if (typeof val === "number") {
				val = val & 255;
				if (typeof GlobalUint8Array.prototype.indexOf === "function") if (dir) return GlobalUint8Array.prototype.indexOf.call(buffer$1, val, byteOffset);
				else return GlobalUint8Array.prototype.lastIndexOf.call(buffer$1, val, byteOffset);
				return arrayIndexOf(buffer$1, [val], byteOffset, encoding, dir);
			}
			throw new TypeError("val must be string, number or Buffer");
		}
		function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
			let indexSize = 1;
			let arrLength = arr.length;
			let valLength = val.length;
			if (encoding !== void 0) {
				encoding = String(encoding).toLowerCase();
				if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
					if (arr.length < 2 || val.length < 2) return -1;
					indexSize = 2;
					arrLength /= 2;
					valLength /= 2;
					byteOffset /= 2;
				}
			}
			function read(buf, i$2) {
				if (indexSize === 1) return buf[i$2];
				else return buf.readUInt16BE(i$2 * indexSize);
			}
			let i$1;
			if (dir) {
				let foundIndex = -1;
				for (i$1 = byteOffset; i$1 < arrLength; i$1++) if (read(arr, i$1) === read(val, foundIndex === -1 ? 0 : i$1 - foundIndex)) {
					if (foundIndex === -1) foundIndex = i$1;
					if (i$1 - foundIndex + 1 === valLength) return foundIndex * indexSize;
				} else {
					if (foundIndex !== -1) i$1 -= i$1 - foundIndex;
					foundIndex = -1;
				}
			} else {
				if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
				for (i$1 = byteOffset; i$1 >= 0; i$1--) {
					let found = true;
					for (let j = 0; j < valLength; j++) if (read(arr, i$1 + j) !== read(val, j)) {
						found = false;
						break;
					}
					if (found) return i$1;
				}
			}
			return -1;
		}
		Buffer$2.prototype.includes = function includes(val, byteOffset, encoding) {
			return this.indexOf(val, byteOffset, encoding) !== -1;
		};
		Buffer$2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
			return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
		};
		Buffer$2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
			return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
		};
		function hexWrite(buf, string, offset, length) {
			offset = Number(offset) || 0;
			const remaining = buf.length - offset;
			if (!length) length = remaining;
			else {
				length = Number(length);
				if (length > remaining) length = remaining;
			}
			const strLen = string.length;
			if (length > strLen / 2) length = strLen / 2;
			let i$1;
			for (i$1 = 0; i$1 < length; ++i$1) {
				const parsed = parseInt(string.substr(i$1 * 2, 2), 16);
				if (numberIsNaN(parsed)) return i$1;
				buf[offset + i$1] = parsed;
			}
			return i$1;
		}
		function utf8Write(buf, string, offset, length) {
			return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
		}
		function asciiWrite(buf, string, offset, length) {
			return blitBuffer(asciiToBytes(string), buf, offset, length);
		}
		function base64Write(buf, string, offset, length) {
			return blitBuffer(base64ToBytes(string), buf, offset, length);
		}
		function ucs2Write(buf, string, offset, length) {
			return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
		}
		Buffer$2.prototype.write = function write(string, offset, length, encoding) {
			if (offset === void 0) {
				encoding = "utf8";
				length = this.length;
				offset = 0;
			} else if (length === void 0 && typeof offset === "string") {
				encoding = offset;
				length = this.length;
				offset = 0;
			} else if (isFinite(offset)) {
				offset = offset >>> 0;
				if (isFinite(length)) {
					length = length >>> 0;
					if (encoding === void 0) encoding = "utf8";
				} else {
					encoding = length;
					length = void 0;
				}
			} else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
			const remaining = this.length - offset;
			if (length === void 0 || length > remaining) length = remaining;
			if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
			if (!encoding) encoding = "utf8";
			let loweredCase = false;
			for (;;) switch (encoding) {
				case "hex": return hexWrite(this, string, offset, length);
				case "utf8":
				case "utf-8": return utf8Write(this, string, offset, length);
				case "ascii":
				case "latin1":
				case "binary": return asciiWrite(this, string, offset, length);
				case "base64": return base64Write(this, string, offset, length);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return ucs2Write(this, string, offset, length);
				default:
					if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
					encoding = ("" + encoding).toLowerCase();
					loweredCase = true;
			}
		};
		Buffer$2.prototype.toJSON = function toJSON() {
			return {
				type: "Buffer",
				data: Array.prototype.slice.call(this._arr || this, 0)
			};
		};
		function base64Slice(buf, start, end) {
			if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
			else return base64.fromByteArray(buf.slice(start, end));
		}
		function utf8Slice(buf, start, end) {
			end = Math.min(buf.length, end);
			const res = [];
			let i$1 = start;
			while (i$1 < end) {
				const firstByte = buf[i$1];
				let codePoint = null;
				let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
				if (i$1 + bytesPerSequence <= end) {
					let secondByte, thirdByte, fourthByte, tempCodePoint;
					switch (bytesPerSequence) {
						case 1:
							if (firstByte < 128) codePoint = firstByte;
							break;
						case 2:
							secondByte = buf[i$1 + 1];
							if ((secondByte & 192) === 128) {
								tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
								if (tempCodePoint > 127) codePoint = tempCodePoint;
							}
							break;
						case 3:
							secondByte = buf[i$1 + 1];
							thirdByte = buf[i$1 + 2];
							if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
								tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
								if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
							}
							break;
						case 4:
							secondByte = buf[i$1 + 1];
							thirdByte = buf[i$1 + 2];
							fourthByte = buf[i$1 + 3];
							if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
								tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
								if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
							}
					}
				}
				if (codePoint === null) {
					codePoint = 65533;
					bytesPerSequence = 1;
				} else if (codePoint > 65535) {
					codePoint -= 65536;
					res.push(codePoint >>> 10 & 1023 | 55296);
					codePoint = 56320 | codePoint & 1023;
				}
				res.push(codePoint);
				i$1 += bytesPerSequence;
			}
			return decodeCodePointsArray(res);
		}
		const MAX_ARGUMENTS_LENGTH = 4096;
		function decodeCodePointsArray(codePoints) {
			const len$1 = codePoints.length;
			if (len$1 <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints);
			let res = "";
			let i$1 = 0;
			while (i$1 < len$1) res += String.fromCharCode.apply(String, codePoints.slice(i$1, i$1 += MAX_ARGUMENTS_LENGTH));
			return res;
		}
		function asciiSlice(buf, start, end) {
			let ret = "";
			end = Math.min(buf.length, end);
			for (let i$1 = start; i$1 < end; ++i$1) ret += String.fromCharCode(buf[i$1] & 127);
			return ret;
		}
		function latin1Slice(buf, start, end) {
			let ret = "";
			end = Math.min(buf.length, end);
			for (let i$1 = start; i$1 < end; ++i$1) ret += String.fromCharCode(buf[i$1]);
			return ret;
		}
		function hexSlice(buf, start, end) {
			const len$1 = buf.length;
			if (!start || start < 0) start = 0;
			if (!end || end < 0 || end > len$1) end = len$1;
			let out = "";
			for (let i$1 = start; i$1 < end; ++i$1) out += hexSliceLookupTable[buf[i$1]];
			return out;
		}
		function utf16leSlice(buf, start, end) {
			const bytes = buf.slice(start, end);
			let res = "";
			for (let i$1 = 0; i$1 < bytes.length - 1; i$1 += 2) res += String.fromCharCode(bytes[i$1] + bytes[i$1 + 1] * 256);
			return res;
		}
		Buffer$2.prototype.slice = function slice(start, end) {
			const len$1 = this.length;
			start = ~~start;
			end = end === void 0 ? len$1 : ~~end;
			if (start < 0) {
				start += len$1;
				if (start < 0) start = 0;
			} else if (start > len$1) start = len$1;
			if (end < 0) {
				end += len$1;
				if (end < 0) end = 0;
			} else if (end > len$1) end = len$1;
			if (end < start) end = start;
			const newBuf = this.subarray(start, end);
			Object.setPrototypeOf(newBuf, Buffer$2.prototype);
			return newBuf;
		};
		function checkOffset(offset, ext, length) {
			if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
			if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
		}
		Buffer$2.prototype.readUintLE = Buffer$2.prototype.readUIntLE = function readUIntLE(offset, byteLength$2, noAssert) {
			offset = offset >>> 0;
			byteLength$2 = byteLength$2 >>> 0;
			if (!noAssert) checkOffset(offset, byteLength$2, this.length);
			let val = this[offset];
			let mul = 1;
			let i$1 = 0;
			while (++i$1 < byteLength$2 && (mul *= 256)) val += this[offset + i$1] * mul;
			return val;
		};
		Buffer$2.prototype.readUintBE = Buffer$2.prototype.readUIntBE = function readUIntBE(offset, byteLength$2, noAssert) {
			offset = offset >>> 0;
			byteLength$2 = byteLength$2 >>> 0;
			if (!noAssert) checkOffset(offset, byteLength$2, this.length);
			let val = this[offset + --byteLength$2];
			let mul = 1;
			while (byteLength$2 > 0 && (mul *= 256)) val += this[offset + --byteLength$2] * mul;
			return val;
		};
		Buffer$2.prototype.readUint8 = Buffer$2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 1, this.length);
			return this[offset];
		};
		Buffer$2.prototype.readUint16LE = Buffer$2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 2, this.length);
			return this[offset] | this[offset + 1] << 8;
		};
		Buffer$2.prototype.readUint16BE = Buffer$2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 2, this.length);
			return this[offset] << 8 | this[offset + 1];
		};
		Buffer$2.prototype.readUint32LE = Buffer$2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 4, this.length);
			return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
		};
		Buffer$2.prototype.readUint32BE = Buffer$2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 4, this.length);
			return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
		};
		Buffer$2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
			offset = offset >>> 0;
			validateNumber(offset, "offset");
			const first = this[offset];
			const last = this[offset + 7];
			if (first === void 0 || last === void 0) boundsError(offset, this.length - 8);
			const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
			const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
			return BigInt(lo) + (BigInt(hi) << BigInt(32));
		});
		Buffer$2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
			offset = offset >>> 0;
			validateNumber(offset, "offset");
			const first = this[offset];
			const last = this[offset + 7];
			if (first === void 0 || last === void 0) boundsError(offset, this.length - 8);
			const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
			const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
			return (BigInt(hi) << BigInt(32)) + BigInt(lo);
		});
		Buffer$2.prototype.readIntLE = function readIntLE(offset, byteLength$2, noAssert) {
			offset = offset >>> 0;
			byteLength$2 = byteLength$2 >>> 0;
			if (!noAssert) checkOffset(offset, byteLength$2, this.length);
			let val = this[offset];
			let mul = 1;
			let i$1 = 0;
			while (++i$1 < byteLength$2 && (mul *= 256)) val += this[offset + i$1] * mul;
			mul *= 128;
			if (val >= mul) val -= Math.pow(2, 8 * byteLength$2);
			return val;
		};
		Buffer$2.prototype.readIntBE = function readIntBE(offset, byteLength$2, noAssert) {
			offset = offset >>> 0;
			byteLength$2 = byteLength$2 >>> 0;
			if (!noAssert) checkOffset(offset, byteLength$2, this.length);
			let i$1 = byteLength$2;
			let mul = 1;
			let val = this[offset + --i$1];
			while (i$1 > 0 && (mul *= 256)) val += this[offset + --i$1] * mul;
			mul *= 128;
			if (val >= mul) val -= Math.pow(2, 8 * byteLength$2);
			return val;
		};
		Buffer$2.prototype.readInt8 = function readInt8(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 1, this.length);
			if (!(this[offset] & 128)) return this[offset];
			return (255 - this[offset] + 1) * -1;
		};
		Buffer$2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 2, this.length);
			const val = this[offset] | this[offset + 1] << 8;
			return val & 32768 ? val | 4294901760 : val;
		};
		Buffer$2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 2, this.length);
			const val = this[offset + 1] | this[offset] << 8;
			return val & 32768 ? val | 4294901760 : val;
		};
		Buffer$2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 4, this.length);
			return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
		};
		Buffer$2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 4, this.length);
			return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
		};
		Buffer$2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
			offset = offset >>> 0;
			validateNumber(offset, "offset");
			const first = this[offset];
			const last = this[offset + 7];
			if (first === void 0 || last === void 0) boundsError(offset, this.length - 8);
			const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
			return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
		});
		Buffer$2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
			offset = offset >>> 0;
			validateNumber(offset, "offset");
			const first = this[offset];
			const last = this[offset + 7];
			if (first === void 0 || last === void 0) boundsError(offset, this.length - 8);
			const val = (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
			return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
		});
		Buffer$2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 4, this.length);
			return ieee754$1.read(this, offset, true, 23, 4);
		};
		Buffer$2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 4, this.length);
			return ieee754$1.read(this, offset, false, 23, 4);
		};
		Buffer$2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 8, this.length);
			return ieee754$1.read(this, offset, true, 52, 8);
		};
		Buffer$2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
			offset = offset >>> 0;
			if (!noAssert) checkOffset(offset, 8, this.length);
			return ieee754$1.read(this, offset, false, 52, 8);
		};
		function checkInt(buf, value, offset, ext, max$2, min$1) {
			if (!Buffer$2.isBuffer(buf)) throw new TypeError("\"buffer\" argument must be a Buffer instance");
			if (value > max$2 || value < min$1) throw new RangeError("\"value\" argument is out of bounds");
			if (offset + ext > buf.length) throw new RangeError("Index out of range");
		}
		Buffer$2.prototype.writeUintLE = Buffer$2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength$2, noAssert) {
			value = +value;
			offset = offset >>> 0;
			byteLength$2 = byteLength$2 >>> 0;
			if (!noAssert) {
				const maxBytes = Math.pow(2, 8 * byteLength$2) - 1;
				checkInt(this, value, offset, byteLength$2, maxBytes, 0);
			}
			let mul = 1;
			let i$1 = 0;
			this[offset] = value & 255;
			while (++i$1 < byteLength$2 && (mul *= 256)) this[offset + i$1] = value / mul & 255;
			return offset + byteLength$2;
		};
		Buffer$2.prototype.writeUintBE = Buffer$2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength$2, noAssert) {
			value = +value;
			offset = offset >>> 0;
			byteLength$2 = byteLength$2 >>> 0;
			if (!noAssert) {
				const maxBytes = Math.pow(2, 8 * byteLength$2) - 1;
				checkInt(this, value, offset, byteLength$2, maxBytes, 0);
			}
			let i$1 = byteLength$2 - 1;
			let mul = 1;
			this[offset + i$1] = value & 255;
			while (--i$1 >= 0 && (mul *= 256)) this[offset + i$1] = value / mul & 255;
			return offset + byteLength$2;
		};
		Buffer$2.prototype.writeUint8 = Buffer$2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
			this[offset] = value & 255;
			return offset + 1;
		};
		Buffer$2.prototype.writeUint16LE = Buffer$2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
			this[offset] = value & 255;
			this[offset + 1] = value >>> 8;
			return offset + 2;
		};
		Buffer$2.prototype.writeUint16BE = Buffer$2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
			this[offset] = value >>> 8;
			this[offset + 1] = value & 255;
			return offset + 2;
		};
		Buffer$2.prototype.writeUint32LE = Buffer$2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
			this[offset + 3] = value >>> 24;
			this[offset + 2] = value >>> 16;
			this[offset + 1] = value >>> 8;
			this[offset] = value & 255;
			return offset + 4;
		};
		Buffer$2.prototype.writeUint32BE = Buffer$2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
			this[offset] = value >>> 24;
			this[offset + 1] = value >>> 16;
			this[offset + 2] = value >>> 8;
			this[offset + 3] = value & 255;
			return offset + 4;
		};
		function wrtBigUInt64LE(buf, value, offset, min$1, max$2) {
			checkIntBI(value, min$1, max$2, buf, offset, 7);
			let lo = Number(value & BigInt(4294967295));
			buf[offset++] = lo;
			lo = lo >> 8;
			buf[offset++] = lo;
			lo = lo >> 8;
			buf[offset++] = lo;
			lo = lo >> 8;
			buf[offset++] = lo;
			let hi = Number(value >> BigInt(32) & BigInt(4294967295));
			buf[offset++] = hi;
			hi = hi >> 8;
			buf[offset++] = hi;
			hi = hi >> 8;
			buf[offset++] = hi;
			hi = hi >> 8;
			buf[offset++] = hi;
			return offset;
		}
		function wrtBigUInt64BE(buf, value, offset, min$1, max$2) {
			checkIntBI(value, min$1, max$2, buf, offset, 7);
			let lo = Number(value & BigInt(4294967295));
			buf[offset + 7] = lo;
			lo = lo >> 8;
			buf[offset + 6] = lo;
			lo = lo >> 8;
			buf[offset + 5] = lo;
			lo = lo >> 8;
			buf[offset + 4] = lo;
			let hi = Number(value >> BigInt(32) & BigInt(4294967295));
			buf[offset + 3] = hi;
			hi = hi >> 8;
			buf[offset + 2] = hi;
			hi = hi >> 8;
			buf[offset + 1] = hi;
			hi = hi >> 8;
			buf[offset] = hi;
			return offset + 8;
		}
		Buffer$2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
			return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
		});
		Buffer$2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
			return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
		});
		Buffer$2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength$2, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) {
				const limit = Math.pow(2, 8 * byteLength$2 - 1);
				checkInt(this, value, offset, byteLength$2, limit - 1, -limit);
			}
			let i$1 = 0;
			let mul = 1;
			let sub = 0;
			this[offset] = value & 255;
			while (++i$1 < byteLength$2 && (mul *= 256)) {
				if (value < 0 && sub === 0 && this[offset + i$1 - 1] !== 0) sub = 1;
				this[offset + i$1] = (value / mul >> 0) - sub & 255;
			}
			return offset + byteLength$2;
		};
		Buffer$2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength$2, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) {
				const limit = Math.pow(2, 8 * byteLength$2 - 1);
				checkInt(this, value, offset, byteLength$2, limit - 1, -limit);
			}
			let i$1 = byteLength$2 - 1;
			let mul = 1;
			let sub = 0;
			this[offset + i$1] = value & 255;
			while (--i$1 >= 0 && (mul *= 256)) {
				if (value < 0 && sub === 0 && this[offset + i$1 + 1] !== 0) sub = 1;
				this[offset + i$1] = (value / mul >> 0) - sub & 255;
			}
			return offset + byteLength$2;
		};
		Buffer$2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
			if (value < 0) value = 255 + value + 1;
			this[offset] = value & 255;
			return offset + 1;
		};
		Buffer$2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
			this[offset] = value & 255;
			this[offset + 1] = value >>> 8;
			return offset + 2;
		};
		Buffer$2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
			this[offset] = value >>> 8;
			this[offset + 1] = value & 255;
			return offset + 2;
		};
		Buffer$2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
			this[offset] = value & 255;
			this[offset + 1] = value >>> 8;
			this[offset + 2] = value >>> 16;
			this[offset + 3] = value >>> 24;
			return offset + 4;
		};
		Buffer$2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
			if (value < 0) value = 4294967295 + value + 1;
			this[offset] = value >>> 24;
			this[offset + 1] = value >>> 16;
			this[offset + 2] = value >>> 8;
			this[offset + 3] = value & 255;
			return offset + 4;
		};
		Buffer$2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
			return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
		});
		Buffer$2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
			return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
		});
		function checkIEEE754(buf, value, offset, ext, max$2, min$1) {
			if (offset + ext > buf.length) throw new RangeError("Index out of range");
			if (offset < 0) throw new RangeError("Index out of range");
		}
		function writeFloat(buf, value, offset, littleEndian, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkIEEE754(buf, value, offset, 4);
			ieee754$1.write(buf, value, offset, littleEndian, 23, 4);
			return offset + 4;
		}
		Buffer$2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
			return writeFloat(this, value, offset, true, noAssert);
		};
		Buffer$2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
			return writeFloat(this, value, offset, false, noAssert);
		};
		function writeDouble(buf, value, offset, littleEndian, noAssert) {
			value = +value;
			offset = offset >>> 0;
			if (!noAssert) checkIEEE754(buf, value, offset, 8);
			ieee754$1.write(buf, value, offset, littleEndian, 52, 8);
			return offset + 8;
		}
		Buffer$2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
			return writeDouble(this, value, offset, true, noAssert);
		};
		Buffer$2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
			return writeDouble(this, value, offset, false, noAssert);
		};
		Buffer$2.prototype.copy = function copy(target, targetStart, start, end) {
			if (!Buffer$2.isBuffer(target)) throw new TypeError("argument should be a Buffer");
			if (!start) start = 0;
			if (!end && end !== 0) end = this.length;
			if (targetStart >= target.length) targetStart = target.length;
			if (!targetStart) targetStart = 0;
			if (end > 0 && end < start) end = start;
			if (end === start) return 0;
			if (target.length === 0 || this.length === 0) return 0;
			if (targetStart < 0) throw new RangeError("targetStart out of bounds");
			if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
			if (end < 0) throw new RangeError("sourceEnd out of bounds");
			if (end > this.length) end = this.length;
			if (target.length - targetStart < end - start) end = target.length - targetStart + start;
			const len$1 = end - start;
			if (this === target && typeof GlobalUint8Array.prototype.copyWithin === "function") this.copyWithin(targetStart, start, end);
			else GlobalUint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
			return len$1;
		};
		Buffer$2.prototype.fill = function fill(val, start, end, encoding) {
			if (typeof val === "string") {
				if (typeof start === "string") {
					encoding = start;
					start = 0;
					end = this.length;
				} else if (typeof end === "string") {
					encoding = end;
					end = this.length;
				}
				if (encoding !== void 0 && typeof encoding !== "string") throw new TypeError("encoding must be a string");
				if (typeof encoding === "string" && !Buffer$2.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
				if (val.length === 1) {
					const code$1 = val.charCodeAt(0);
					if (encoding === "utf8" && code$1 < 128 || encoding === "latin1") val = code$1;
				}
			} else if (typeof val === "number") val = val & 255;
			else if (typeof val === "boolean") val = Number(val);
			if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
			if (end <= start) return this;
			start = start >>> 0;
			end = end === void 0 ? this.length : end >>> 0;
			if (!val) val = 0;
			let i$1;
			if (typeof val === "number") for (i$1 = start; i$1 < end; ++i$1) this[i$1] = val;
			else {
				const bytes = Buffer$2.isBuffer(val) ? val : Buffer$2.from(val, encoding);
				const len$1 = bytes.length;
				if (len$1 === 0) throw new TypeError("The value \"" + val + "\" is invalid for argument \"value\"");
				for (i$1 = 0; i$1 < end - start; ++i$1) this[i$1 + start] = bytes[i$1 % len$1];
			}
			return this;
		};
		const errors = {};
		function E(sym, getMessage, Base) {
			errors[sym] = class NodeError extends Base {
				constructor() {
					super();
					Object.defineProperty(this, "message", {
						value: getMessage.apply(this, arguments),
						writable: true,
						configurable: true
					});
					this.name = `${this.name} [${sym}]`;
					this.stack;
					delete this.name;
				}
				get code() {
					return sym;
				}
				set code(value) {
					Object.defineProperty(this, "code", {
						configurable: true,
						enumerable: true,
						value,
						writable: true
					});
				}
				toString() {
					return `${this.name} [${sym}]: ${this.message}`;
				}
			};
		}
		E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
			if (name) return `${name} is outside of buffer bounds`;
			return "Attempt to access memory outside buffer bounds";
		}, RangeError);
		E("ERR_INVALID_ARG_TYPE", function(name, actual) {
			return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
		}, TypeError);
		E("ERR_OUT_OF_RANGE", function(str, range, input) {
			let msg = `The value of "${str}" is out of range.`;
			let received = input;
			if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
			else if (typeof input === "bigint") {
				received = String(input);
				if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
				received += "n";
			}
			msg += ` It must be ${range}. Received ${received}`;
			return msg;
		}, RangeError);
		function addNumericalSeparator(val) {
			let res = "";
			let i$1 = val.length;
			const start = val[0] === "-" ? 1 : 0;
			for (; i$1 >= start + 4; i$1 -= 3) res = `_${val.slice(i$1 - 3, i$1)}${res}`;
			return `${val.slice(0, i$1)}${res}`;
		}
		function checkBounds(buf, offset, byteLength$2) {
			validateNumber(offset, "offset");
			if (buf[offset] === void 0 || buf[offset + byteLength$2] === void 0) boundsError(offset, buf.length - (byteLength$2 + 1));
		}
		function checkIntBI(value, min$1, max$2, buf, offset, byteLength$2) {
			if (value > max$2 || value < min$1) {
				const n = typeof min$1 === "bigint" ? "n" : "";
				let range;
				if (byteLength$2 > 3) if (min$1 === 0 || min$1 === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength$2 + 1) * 8}${n}`;
				else range = `>= -(2${n} ** ${(byteLength$2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength$2 + 1) * 8 - 1}${n}`;
				else range = `>= ${min$1}${n} and <= ${max$2}${n}`;
				throw new errors.ERR_OUT_OF_RANGE("value", range, value);
			}
			checkBounds(buf, offset, byteLength$2);
		}
		function validateNumber(value, name) {
			if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
		}
		function boundsError(value, length, type) {
			if (Math.floor(value) !== value) {
				validateNumber(value, type);
				throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
			}
			if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
			throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
		}
		const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
		function base64clean(str) {
			str = str.split("=")[0];
			str = str.trim().replace(INVALID_BASE64_RE, "");
			if (str.length < 2) return "";
			while (str.length % 4 !== 0) str = str + "=";
			return str;
		}
		function utf8ToBytes(string, units) {
			units = units || Infinity;
			let codePoint;
			const length = string.length;
			let leadSurrogate = null;
			const bytes = [];
			for (let i$1 = 0; i$1 < length; ++i$1) {
				codePoint = string.charCodeAt(i$1);
				if (codePoint > 55295 && codePoint < 57344) {
					if (!leadSurrogate) {
						if (codePoint > 56319) {
							if ((units -= 3) > -1) bytes.push(239, 191, 189);
							continue;
						} else if (i$1 + 1 === length) {
							if ((units -= 3) > -1) bytes.push(239, 191, 189);
							continue;
						}
						leadSurrogate = codePoint;
						continue;
					}
					if (codePoint < 56320) {
						if ((units -= 3) > -1) bytes.push(239, 191, 189);
						leadSurrogate = codePoint;
						continue;
					}
					codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
				} else if (leadSurrogate) {
					if ((units -= 3) > -1) bytes.push(239, 191, 189);
				}
				leadSurrogate = null;
				if (codePoint < 128) {
					if ((units -= 1) < 0) break;
					bytes.push(codePoint);
				} else if (codePoint < 2048) {
					if ((units -= 2) < 0) break;
					bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
				} else if (codePoint < 65536) {
					if ((units -= 3) < 0) break;
					bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
				} else if (codePoint < 1114112) {
					if ((units -= 4) < 0) break;
					bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
				} else throw new Error("Invalid code point");
			}
			return bytes;
		}
		function asciiToBytes(str) {
			const byteArray = [];
			for (let i$1 = 0; i$1 < str.length; ++i$1) byteArray.push(str.charCodeAt(i$1) & 255);
			return byteArray;
		}
		function utf16leToBytes(str, units) {
			let c, hi, lo;
			const byteArray = [];
			for (let i$1 = 0; i$1 < str.length; ++i$1) {
				if ((units -= 2) < 0) break;
				c = str.charCodeAt(i$1);
				hi = c >> 8;
				lo = c % 256;
				byteArray.push(lo);
				byteArray.push(hi);
			}
			return byteArray;
		}
		function base64ToBytes(str) {
			return base64.toByteArray(base64clean(str));
		}
		function blitBuffer(src, dst, offset, length) {
			let i$1;
			for (i$1 = 0; i$1 < length; ++i$1) {
				if (i$1 + offset >= dst.length || i$1 >= src.length) break;
				dst[i$1 + offset] = src[i$1];
			}
			return i$1;
		}
		function isInstance(obj, type) {
			return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
		}
		function numberIsNaN(obj) {
			return obj !== obj;
		}
		const hexSliceLookupTable = (function() {
			const alphabet = "0123456789abcdef";
			const table = new Array(256);
			for (let i$1 = 0; i$1 < 16; ++i$1) {
				const i16 = i$1 * 16;
				for (let j = 0; j < 16; ++j) table[i16 + j] = alphabet[i$1] + alphabet[j];
			}
			return table;
		})();
		function defineBigIntMethod(fn) {
			return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
		}
		function BufferBigIntNotDefined() {
			throw new Error("BigInt not supported");
		}
	})(buffer);
	Buffer = buffer.Buffer;
	buffer.Blob;
	buffer.BlobOptions;
	buffer.Buffer;
	buffer.File;
	buffer.FileOptions;
	buffer.INSPECT_MAX_BYTES;
	buffer.SlowBuffer;
	buffer.TranscodeEncoding;
	buffer.atob;
	buffer.btoa;
	buffer.constants;
	buffer.isAscii;
	buffer.isUtf8;
	buffer.kMaxLength;
	buffer.kStringMaxLength;
	buffer.resolveObjectURL;
	buffer.transcode;
}));
var empty_exports = /* @__PURE__ */ __export({ default: () => null });
var init_empty = __esmMin((() => {}));
export { require_range as C, process$1 as D, init_dist$1 as E, require_syntax as S, require___vite_browser_external as T, require_has_symbols as _, require_callBound as a, require_gopd as b, require_has_property_descriptors as c, require_hasown as d, require_get_proto as f, require_function_bind as g, require_functionApply as h, init_dist as i, require_define_data_property as l, require_actualApply as m, init_empty as n, require_call_bind as o, require_call_bind_apply_helpers as p, Buffer as r, require_set_function_length as s, empty_exports as t, require_get_intrinsic as u, require_shams as v, require_es_object_atoms as w, require_type as x, require_es_define_property as y };
