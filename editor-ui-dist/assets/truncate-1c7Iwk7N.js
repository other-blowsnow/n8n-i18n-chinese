import { t as __commonJSMin } from "./chunk-6z4oVpB-.js";
import { $t as hasOwn, C as computed, Dt as getCurrentScope, En as init_dist, F as getCurrentInstance, Ft as readonly, G as nextTick, Gt as unref, It as ref, K as onActivated, L as h, Lt as shallowReactive, Nt as onScopeDispose, P as defineComponent, Pt as reactive, Q as onUnmounted, Tn as global, Xt as capitalize, Y as onDeactivated, Yt as camelize, Z as onMounted, _t as watch, cn as isObject, gt as warn, jt as isRef, nn as isArray$4, nt as provide, pn as isString, tn as init_shared_esm_bundler, vt as watchEffect, z as inject, zt as shallowRef } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { d as require__Symbol, l as require_isObjectLike, m as require_isArray, t as require__MapCache, u as require__baseGetTag } from "./_MapCache-pT3vKw8Z.js";
var __defProp$9 = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
	for (var prop in b || (b = {})) if (__hasOwnProp$b.call(b, prop)) __defNormalProp$9(a, prop, b[prop]);
	if (__getOwnPropSymbols$b) {
		for (var prop of __getOwnPropSymbols$b(b)) if (__propIsEnum$b.call(b, prop)) __defNormalProp$9(a, prop, b[prop]);
	}
	return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
function computedEager(fn, options) {
	var _a$1;
	const result = shallowRef();
	watchEffect(() => {
		result.value = fn();
	}, __spreadProps$6(__spreadValues$9({}, options), { flush: (_a$1 = options == null ? void 0 : options.flush) != null ? _a$1 : "sync" }));
	return readonly(result);
}
var _a;
var isClient = typeof window !== "undefined";
var isString$1 = (val) => typeof val === "string";
var noop$1 = () => {};
var isIOS = isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function resolveUnref(r) {
	return typeof r === "function" ? r() : unref(r);
}
function identity(arg) {
	return arg;
}
function tryOnScopeDispose(fn) {
	if (getCurrentScope()) {
		onScopeDispose(fn);
		return true;
	}
	return false;
}
function tryOnMounted(fn, sync = true) {
	if (getCurrentInstance()) onMounted(fn);
	else if (sync) fn();
	else nextTick(fn);
}
function useTimeoutFn(cb, interval, options = {}) {
	const { immediate = true } = options;
	const isPending = ref(false);
	let timer = null;
	function clear() {
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
	}
	function stop() {
		isPending.value = false;
		clear();
	}
	function start(...args) {
		clear();
		isPending.value = true;
		timer = setTimeout(() => {
			isPending.value = false;
			timer = null;
			cb(...args);
		}, resolveUnref(interval));
	}
	if (immediate) {
		isPending.value = true;
		if (isClient) start();
	}
	tryOnScopeDispose(stop);
	return {
		isPending: readonly(isPending),
		start,
		stop
	};
}
init_dist();
function unrefElement(elRef) {
	var _a$1;
	const plain = resolveUnref(elRef);
	return (_a$1 = plain == null ? void 0 : plain.$el) != null ? _a$1 : plain;
}
var defaultWindow = isClient ? window : void 0;
var defaultDocument = isClient ? window.document : void 0;
isClient && window.navigator;
isClient && window.location;
function useEventListener(...args) {
	let target;
	let events;
	let listeners;
	let options;
	if (isString$1(args[0]) || Array.isArray(args[0])) {
		[events, listeners, options] = args;
		target = defaultWindow;
	} else [target, events, listeners, options] = args;
	if (!target) return noop$1;
	if (!Array.isArray(events)) events = [events];
	if (!Array.isArray(listeners)) listeners = [listeners];
	const cleanups = [];
	const cleanup = () => {
		cleanups.forEach((fn) => fn());
		cleanups.length = 0;
	};
	const register = (el, event, listener, options2) => {
		el.addEventListener(event, listener, options2);
		return () => el.removeEventListener(event, listener, options2);
	};
	const stopWatch = watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
		cleanup();
		if (!el) return;
		cleanups.push(...events.flatMap((event) => {
			return listeners.map((listener) => register(el, event, listener, options2));
		}));
	}, {
		immediate: true,
		flush: "post"
	});
	const stop = () => {
		stopWatch();
		cleanup();
	};
	tryOnScopeDispose(stop);
	return stop;
}
var _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
	const { window: window$1 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
	if (!window$1) return;
	if (isIOS && !_iOSWorkaround) {
		_iOSWorkaround = true;
		Array.from(window$1.document.body.children).forEach((el) => el.addEventListener("click", noop$1));
	}
	let shouldListen = true;
	const shouldIgnore = (event) => {
		return ignore.some((target2) => {
			if (typeof target2 === "string") return Array.from(window$1.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
			else {
				const el = unrefElement(target2);
				return el && (event.target === el || event.composedPath().includes(el));
			}
		});
	};
	const listener = (event) => {
		const el = unrefElement(target);
		if (!el || el === event.target || event.composedPath().includes(el)) return;
		if (event.detail === 0) shouldListen = !shouldIgnore(event);
		if (!shouldListen) {
			shouldListen = true;
			return;
		}
		handler(event);
	};
	const cleanup = [
		useEventListener(window$1, "click", listener, {
			passive: true,
			capture
		}),
		useEventListener(window$1, "pointerdown", (e) => {
			const el = unrefElement(target);
			if (el) shouldListen = !e.composedPath().includes(el) && !shouldIgnore(e);
		}, { passive: true }),
		detectIframe && useEventListener(window$1, "blur", (event) => {
			var _a$1;
			const el = unrefElement(target);
			if (((_a$1 = window$1.document.activeElement) == null ? void 0 : _a$1.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window$1.document.activeElement))) handler(event);
		})
	].filter(Boolean);
	const stop = () => cleanup.forEach((fn) => fn());
	return stop;
}
function useSupported(callback, sync = false) {
	const isSupported = ref();
	const update = () => isSupported.value = Boolean(callback());
	update();
	tryOnMounted(update, sync);
	return isSupported;
}
var _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
function useDocumentVisibility({ document: document$1 = defaultDocument } = {}) {
	if (!document$1) return ref("visible");
	const visibility = ref(document$1.visibilityState);
	useEventListener(document$1, "visibilitychange", () => {
		visibility.value = document$1.visibilityState;
	});
	return visibility;
}
var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
var __hasOwnProp$g = Object.prototype.hasOwnProperty;
var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
	var target = {};
	for (var prop in source) if (__hasOwnProp$g.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
	if (source != null && __getOwnPropSymbols$g) {
		for (var prop of __getOwnPropSymbols$g(source)) if (exclude.indexOf(prop) < 0 && __propIsEnum$g.call(source, prop)) target[prop] = source[prop];
	}
	return target;
};
function useResizeObserver(target, callback, options = {}) {
	const _a$1 = options, { window: window$1 = defaultWindow } = _a$1, observerOptions = __objRest$2(_a$1, ["window"]);
	let observer;
	const isSupported = useSupported(() => window$1 && "ResizeObserver" in window$1);
	const cleanup = () => {
		if (observer) {
			observer.disconnect();
			observer = void 0;
		}
	};
	const stopWatch = watch(() => unrefElement(target), (el) => {
		cleanup();
		if (isSupported.value && window$1 && el) {
			observer = new ResizeObserver(callback);
			observer.observe(el, observerOptions);
		}
	}, {
		immediate: true,
		flush: "post"
	});
	const stop = () => {
		cleanup();
		stopWatch();
	};
	tryOnScopeDispose(stop);
	return {
		isSupported,
		stop
	};
}
var SwipeDirection;
(function(SwipeDirection2) {
	SwipeDirection2["UP"] = "UP";
	SwipeDirection2["RIGHT"] = "RIGHT";
	SwipeDirection2["DOWN"] = "DOWN";
	SwipeDirection2["LEFT"] = "LEFT";
	SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
	for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
	if (__getOwnPropSymbols) {
		for (var prop of __getOwnPropSymbols(b)) if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
	}
	return a;
};
__spreadValues({ linear: identity }, {
	easeInSine: [
		.12,
		0,
		.39,
		0
	],
	easeOutSine: [
		.61,
		1,
		.88,
		1
	],
	easeInOutSine: [
		.37,
		0,
		.63,
		1
	],
	easeInQuad: [
		.11,
		0,
		.5,
		0
	],
	easeOutQuad: [
		.5,
		1,
		.89,
		1
	],
	easeInOutQuad: [
		.45,
		0,
		.55,
		1
	],
	easeInCubic: [
		.32,
		0,
		.67,
		0
	],
	easeOutCubic: [
		.33,
		1,
		.68,
		1
	],
	easeInOutCubic: [
		.65,
		0,
		.35,
		1
	],
	easeInQuart: [
		.5,
		0,
		.75,
		0
	],
	easeOutQuart: [
		.25,
		1,
		.5,
		1
	],
	easeInOutQuart: [
		.76,
		0,
		.24,
		1
	],
	easeInQuint: [
		.64,
		0,
		.78,
		0
	],
	easeOutQuint: [
		.22,
		1,
		.36,
		1
	],
	easeInOutQuint: [
		.83,
		0,
		.17,
		1
	],
	easeInExpo: [
		.7,
		0,
		.84,
		0
	],
	easeOutExpo: [
		.16,
		1,
		.3,
		1
	],
	easeInOutExpo: [
		.87,
		0,
		.13,
		1
	],
	easeInCirc: [
		.55,
		0,
		1,
		.45
	],
	easeOutCirc: [
		0,
		.55,
		.45,
		1
	],
	easeInOutCirc: [
		.85,
		0,
		.15,
		1
	],
	easeInBack: [
		.36,
		0,
		.66,
		-.56
	],
	easeOutBack: [
		.34,
		1.56,
		.64,
		1
	],
	easeInOutBack: [
		.68,
		-.6,
		.32,
		1.6
	]
});
function useWindowFocus({ window: window$1 = defaultWindow } = {}) {
	if (!window$1) return ref(false);
	const focused = ref(window$1.document.hasFocus());
	useEventListener(window$1, "blur", () => {
		focused.value = false;
	});
	useEventListener(window$1, "focus", () => {
		focused.value = true;
	});
	return focused;
}
var isFirefox = () => isClient && /firefox/i.test(window.navigator.userAgent);
init_dist();
var _freeGlobal_default = typeof global == "object" && global && global.Object === Object && global;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var _root_default = _freeGlobal_default || freeSelf || Function("return this")();
var _Symbol_default = _root_default.Symbol;
var objectProto$1 = Object.prototype;
var hasOwnProperty$4 = objectProto$1.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1.toString;
var symToStringTag$1 = _Symbol_default ? _Symbol_default.toStringTag : void 0;
function getRawTag(value) {
	var isOwn = hasOwnProperty$4.call(value, symToStringTag$1), tag = value[symToStringTag$1];
	try {
		value[symToStringTag$1] = void 0;
		var unmasked = true;
	} catch (e) {}
	var result = nativeObjectToString$1.call(value);
	if (unmasked) if (isOwn) value[symToStringTag$1] = tag;
	else delete value[symToStringTag$1];
	return result;
}
var _getRawTag_default = getRawTag;
var nativeObjectToString = Object.prototype.toString;
function objectToString(value) {
	return nativeObjectToString.call(value);
}
var _objectToString_default = objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = _Symbol_default ? _Symbol_default.toStringTag : void 0;
function baseGetTag$1(value) {
	if (value == null) return value === void 0 ? undefinedTag : nullTag;
	return symToStringTag && symToStringTag in Object(value) ? _getRawTag_default(value) : _objectToString_default(value);
}
var _baseGetTag_default = baseGetTag$1;
function isObjectLike$1(value) {
	return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike$1;
var symbolTag$1 = "[object Symbol]";
function isSymbol$4(value) {
	return typeof value == "symbol" || isObjectLike_default(value) && _baseGetTag_default(value) == symbolTag$1;
}
var isSymbol_default = isSymbol$4;
function arrayMap$2(array, iteratee) {
	var index = -1, length = array == null ? 0 : array.length, result = Array(length);
	while (++index < length) result[index] = iteratee(array[index], index, array);
	return result;
}
var _arrayMap_default = arrayMap$2;
var isArray_default = Array.isArray;
var INFINITY$3 = Infinity;
var symbolProto$1 = _Symbol_default ? _Symbol_default.prototype : void 0, symbolToString$1 = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString$2(value) {
	if (typeof value == "string") return value;
	if (isArray_default(value)) return _arrayMap_default(value, baseToString$2) + "";
	if (isSymbol_default(value)) return symbolToString$1 ? symbolToString$1.call(value) : "";
	var result = value + "";
	return result == "0" && 1 / value == -INFINITY$3 ? "-0" : result;
}
var _baseToString_default = baseToString$2;
function isObject$1(value) {
	var type = typeof value;
	return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject$1;
var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
	if (!isObject_default(value)) return false;
	var tag = _baseGetTag_default(value);
	return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;
var _coreJsData_default = _root_default["__core-js_shared__"];
var maskSrcKey = function() {
	var uid = /[^.]+$/.exec(_coreJsData_default && _coreJsData_default.keys && _coreJsData_default.keys.IE_PROTO || "");
	return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
	return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked_default = isMasked;
var funcToString$1 = Function.prototype.toString;
function toSource(func) {
	if (func != null) {
		try {
			return funcToString$1.call(func);
		} catch (e) {}
		try {
			return func + "";
		} catch (e) {}
	}
	return "";
}
var _toSource_default = toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$3 = objectProto.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$3).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value) {
	if (!isObject_default(value) || _isMasked_default(value)) return false;
	return (isFunction_default(value) ? reIsNative : reIsHostCtor).test(_toSource_default(value));
}
var _baseIsNative_default = baseIsNative;
function getValue(object, key) {
	return object == null ? void 0 : object[key];
}
var _getValue_default = getValue;
function getNative(object, key) {
	var value = _getValue_default(object, key);
	return _baseIsNative_default(value) ? value : void 0;
}
var _getNative_default = getNative;
var _defineProperty_default = function() {
	try {
		var func = _getNative_default(Object, "defineProperty");
		func({}, "", {});
		return func;
	} catch (e) {}
}();
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
	var type = typeof value;
	length = length == null ? MAX_SAFE_INTEGER : length;
	return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
var _isIndex_default = isIndex;
function baseAssignValue(object, key, value) {
	if (key == "__proto__" && _defineProperty_default) _defineProperty_default(object, key, {
		"configurable": true,
		"enumerable": true,
		"value": value,
		"writable": true
	});
	else object[key] = value;
}
var _baseAssignValue_default = baseAssignValue;
function eq(value, other) {
	return value === other || value !== value && other !== other;
}
var eq_default = eq;
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function assignValue(object, key, value) {
	var objValue = object[key];
	if (!(hasOwnProperty$2.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) _baseAssignValue_default(object, key, value);
}
var _assignValue_default = assignValue;
var reIsDeepProp$1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp$1 = /^\w*$/;
function isKey$2(value, object) {
	if (isArray_default(value)) return false;
	var type = typeof value;
	if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) return true;
	return reIsPlainProp$1.test(value) || !reIsDeepProp$1.test(value) || object != null && value in Object(object);
}
var _isKey_default = isKey$2;
var _nativeCreate_default = _getNative_default(Object, "create");
function hashClear() {
	this.__data__ = _nativeCreate_default ? _nativeCreate_default(null) : {};
	this.size = 0;
}
var _hashClear_default = hashClear;
function hashDelete(key) {
	var result = this.has(key) && delete this.__data__[key];
	this.size -= result ? 1 : 0;
	return result;
}
var _hashDelete_default = hashDelete;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function hashGet(key) {
	var data = this.__data__;
	if (_nativeCreate_default) {
		var result = data[key];
		return result === HASH_UNDEFINED$1 ? void 0 : result;
	}
	return hasOwnProperty$1.call(data, key) ? data[key] : void 0;
}
var _hashGet_default = hashGet;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hashHas(key) {
	var data = this.__data__;
	return _nativeCreate_default ? data[key] !== void 0 : hasOwnProperty.call(data, key);
}
var _hashHas_default = hashHas;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet(key, value) {
	var data = this.__data__;
	this.size += this.has(key) ? 0 : 1;
	data[key] = _nativeCreate_default && value === void 0 ? HASH_UNDEFINED : value;
	return this;
}
var _hashSet_default = hashSet;
function Hash(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
Hash.prototype.clear = _hashClear_default;
Hash.prototype["delete"] = _hashDelete_default;
Hash.prototype.get = _hashGet_default;
Hash.prototype.has = _hashHas_default;
Hash.prototype.set = _hashSet_default;
var _Hash_default = Hash;
function listCacheClear() {
	this.__data__ = [];
	this.size = 0;
}
var _listCacheClear_default = listCacheClear;
function assocIndexOf(array, key) {
	var length = array.length;
	while (length--) if (eq_default(array[length][0], key)) return length;
	return -1;
}
var _assocIndexOf_default = assocIndexOf;
var splice = Array.prototype.splice;
function listCacheDelete(key) {
	var data = this.__data__, index = _assocIndexOf_default(data, key);
	if (index < 0) return false;
	if (index == data.length - 1) data.pop();
	else splice.call(data, index, 1);
	--this.size;
	return true;
}
var _listCacheDelete_default = listCacheDelete;
function listCacheGet(key) {
	var data = this.__data__, index = _assocIndexOf_default(data, key);
	return index < 0 ? void 0 : data[index][1];
}
var _listCacheGet_default = listCacheGet;
function listCacheHas(key) {
	return _assocIndexOf_default(this.__data__, key) > -1;
}
var _listCacheHas_default = listCacheHas;
function listCacheSet(key, value) {
	var data = this.__data__, index = _assocIndexOf_default(data, key);
	if (index < 0) {
		++this.size;
		data.push([key, value]);
	} else data[index][1] = value;
	return this;
}
var _listCacheSet_default = listCacheSet;
function ListCache(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
ListCache.prototype.clear = _listCacheClear_default;
ListCache.prototype["delete"] = _listCacheDelete_default;
ListCache.prototype.get = _listCacheGet_default;
ListCache.prototype.has = _listCacheHas_default;
ListCache.prototype.set = _listCacheSet_default;
var _ListCache_default = ListCache;
var _Map_default = _getNative_default(_root_default, "Map");
function mapCacheClear() {
	this.size = 0;
	this.__data__ = {
		"hash": new _Hash_default(),
		"map": new (_Map_default || _ListCache_default)(),
		"string": new _Hash_default()
	};
}
var _mapCacheClear_default = mapCacheClear;
function isKeyable(value) {
	var type = typeof value;
	return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable_default = isKeyable;
function getMapData(map, key) {
	var data = map.__data__;
	return _isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData_default = getMapData;
function mapCacheDelete(key) {
	var result = _getMapData_default(this, key)["delete"](key);
	this.size -= result ? 1 : 0;
	return result;
}
var _mapCacheDelete_default = mapCacheDelete;
function mapCacheGet(key) {
	return _getMapData_default(this, key).get(key);
}
var _mapCacheGet_default = mapCacheGet;
function mapCacheHas(key) {
	return _getMapData_default(this, key).has(key);
}
var _mapCacheHas_default = mapCacheHas;
function mapCacheSet(key, value) {
	var data = _getMapData_default(this, key), size = data.size;
	data.set(key, value);
	this.size += data.size == size ? 0 : 1;
	return this;
}
var _mapCacheSet_default = mapCacheSet;
function MapCache$1(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
MapCache$1.prototype.clear = _mapCacheClear_default;
MapCache$1.prototype["delete"] = _mapCacheDelete_default;
MapCache$1.prototype.get = _mapCacheGet_default;
MapCache$1.prototype.has = _mapCacheHas_default;
MapCache$1.prototype.set = _mapCacheSet_default;
var _MapCache_default = MapCache$1;
var FUNC_ERROR_TEXT$1 = "Expected a function";
function memoize$2(func, resolver) {
	if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT$1);
	var memoized = function() {
		var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
		if (cache.has(key)) return cache.get(key);
		var result = func.apply(this, args);
		memoized.cache = cache.set(key, result) || cache;
		return result;
	};
	memoized.cache = new (memoize$2.Cache || _MapCache_default)();
	return memoized;
}
memoize$2.Cache = _MapCache_default;
var memoize_default = memoize$2;
var MAX_MEMOIZE_SIZE$1 = 500;
function memoizeCapped$2(func) {
	var result = memoize_default(func, function(key) {
		if (cache.size === MAX_MEMOIZE_SIZE$1) cache.clear();
		return key;
	});
	var cache = result.cache;
	return result;
}
var _memoizeCapped_default = memoizeCapped$2;
var rePropName$1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar$1 = /\\(\\)?/g;
var _stringToPath_default = _memoizeCapped_default(function(string) {
	var result = [];
	if (string.charCodeAt(0) === 46) result.push("");
	string.replace(rePropName$1, function(match, number, quote, subString) {
		result.push(quote ? subString.replace(reEscapeChar$1, "$1") : number || match);
	});
	return result;
});
function toString$2(value) {
	return value == null ? "" : _baseToString_default(value);
}
var toString_default = toString$2;
function castPath$2(value, object) {
	if (isArray_default(value)) return value;
	return _isKey_default(value, object) ? [value] : _stringToPath_default(toString_default(value));
}
var _castPath_default = castPath$2;
var INFINITY$2 = Infinity;
function toKey$2(value) {
	if (typeof value == "string" || isSymbol_default(value)) return value;
	var result = value + "";
	return result == "0" && 1 / value == -INFINITY$2 ? "-0" : result;
}
var _toKey_default = toKey$2;
function baseGet$2(object, path) {
	path = _castPath_default(path, object);
	var index = 0, length = path.length;
	while (object != null && index < length) object = object[_toKey_default(path[index++])];
	return index && index == length ? object : void 0;
}
var _baseGet_default = baseGet$2;
function get$1(object, path, defaultValue) {
	var result = object == null ? void 0 : _baseGet_default(object, path);
	return result === void 0 ? defaultValue : result;
}
var get_default = get$1;
function fromPairs(pairs) {
	var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
	while (++index < length) {
		var pair = pairs[index];
		result[pair[0]] = pair[1];
	}
	return result;
}
var fromPairs_default = fromPairs;
function baseSet(object, path, value, customizer) {
	if (!isObject_default(object)) return object;
	path = _castPath_default(path, object);
	var index = -1, length = path.length, lastIndex = length - 1, nested = object;
	while (nested != null && ++index < length) {
		var key = _toKey_default(path[index]), newValue = value;
		if (key === "__proto__" || key === "constructor" || key === "prototype") return object;
		if (index != lastIndex) {
			var objValue = nested[key];
			newValue = customizer ? customizer(objValue, key, nested) : void 0;
			if (newValue === void 0) newValue = isObject_default(objValue) ? objValue : _isIndex_default(path[index + 1]) ? [] : {};
		}
		_assignValue_default(nested, key, newValue);
		nested = nested[key];
	}
	return object;
}
var _baseSet_default = baseSet;
function set(object, path, value) {
	return object == null ? object : _baseSet_default(object, path, value);
}
var set_default = set;
init_shared_esm_bundler();
var isUndefined = (val) => val === void 0;
var isBoolean = (val) => typeof val === "boolean";
var isNumber = (val) => typeof val === "number";
var isEmpty = (val) => !val && val !== 0 || isArray$4(val) && val.length === 0 || isObject(val) && !Object.keys(val).length;
var isElement = (e) => {
	if (typeof Element === "undefined") return false;
	return e instanceof Element;
};
var isStringNumber = (val) => {
	if (!isString(val)) return false;
	return !Number.isNaN(Number(val));
};
init_shared_esm_bundler();
var escapeStringRegexp = (string = "") => string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
var capitalize$1 = (str) => capitalize(str);
var keysOf = (arr) => Object.keys(arr);
var getProp = (obj, path, defaultValue) => {
	return {
		get value() {
			return get_default(obj, path, defaultValue);
		},
		set value(val) {
			set_default(obj, path, val);
		}
	};
};
var ElementPlusError = class extends Error {
	constructor(m) {
		super(m);
		this.name = "ElementPlusError";
	}
};
function throwError(scope, m) {
	throw new ElementPlusError(`[${scope}] ${m}`);
}
function debugWarn(scope, message) {}
init_shared_esm_bundler();
var SCOPE = "utils/dom/style";
var classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());
var hasClass = (el, cls) => {
	if (!el || !cls) return false;
	if (cls.includes(" ")) throw new Error("className should not contain space.");
	return el.classList.contains(cls);
};
var addClass = (el, cls) => {
	if (!el || !cls.trim()) return;
	el.classList.add(...classNameToArray(cls));
};
var removeClass = (el, cls) => {
	if (!el || !cls.trim()) return;
	el.classList.remove(...classNameToArray(cls));
};
var getStyle = (element, styleName) => {
	var _a$1;
	if (!isClient || !element || !styleName) return "";
	let key = camelize(styleName);
	if (key === "float") key = "cssFloat";
	try {
		const style = element.style[key];
		if (style) return style;
		const computed$1 = (_a$1 = document.defaultView) == null ? void 0 : _a$1.getComputedStyle(element, "");
		return computed$1 ? computed$1[key] : "";
	} catch (e) {
		return element.style[key];
	}
};
function addUnit(value, defaultUnit = "px") {
	if (!value) return "";
	if (isNumber(value) || isStringNumber(value)) return `${value}${defaultUnit}`;
	else if (isString(value)) return value;
	debugWarn(SCOPE, "binding value must be a string or number");
}
init_shared_esm_bundler();
var epPropKey = "__epPropKey";
var definePropType = (val) => val;
var isEpProp = (val) => isObject(val) && !!val["__epPropKey"];
var buildProp = (prop, key) => {
	if (!isObject(prop) || isEpProp(prop)) return prop;
	const { values, required, default: defaultValue, type, validator } = prop;
	const epProp = {
		type,
		required: !!required,
		validator: values || validator ? (val) => {
			let valid = false;
			let allowedValues = [];
			if (values) {
				allowedValues = Array.from(values);
				if (hasOwn(prop, "default")) allowedValues.push(defaultValue);
				valid || (valid = allowedValues.includes(val));
			}
			if (validator) valid || (valid = validator(val));
			if (!valid && allowedValues.length > 0) {
				const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
				warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
			}
			return valid;
		} : void 0,
		[epPropKey]: true
	};
	if (hasOwn(prop, "default")) epProp.default = defaultValue;
	return epProp;
};
var buildProps = (props) => fromPairs_default(Object.entries(props).map(([key, option]) => [key, buildProp(option, key)]));
var componentSizes = [
	"",
	"default",
	"small",
	"large"
];
var componentSizeMap = {
	large: 40,
	default: 32,
	small: 24
};
var English = {
	name: "en",
	el: {
		colorpicker: {
			confirm: "OK",
			clear: "Clear",
			defaultLabel: "color picker",
			description: "current color is {color}. press enter to select a new color."
		},
		datepicker: {
			now: "Now",
			today: "Today",
			cancel: "Cancel",
			clear: "Clear",
			confirm: "OK",
			dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
			monthTablePrompt: "Use the arrow keys and enter to select the month",
			yearTablePrompt: "Use the arrow keys and enter to select the year",
			selectedDate: "Selected date",
			selectDate: "Select date",
			selectTime: "Select time",
			startDate: "Start Date",
			startTime: "Start Time",
			endDate: "End Date",
			endTime: "End Time",
			prevYear: "Previous Year",
			nextYear: "Next Year",
			prevMonth: "Previous Month",
			nextMonth: "Next Month",
			year: "",
			month1: "January",
			month2: "February",
			month3: "March",
			month4: "April",
			month5: "May",
			month6: "June",
			month7: "July",
			month8: "August",
			month9: "September",
			month10: "October",
			month11: "November",
			month12: "December",
			week: "week",
			weeks: {
				sun: "Sun",
				mon: "Mon",
				tue: "Tue",
				wed: "Wed",
				thu: "Thu",
				fri: "Fri",
				sat: "Sat"
			},
			weeksFull: {
				sun: "Sunday",
				mon: "Monday",
				tue: "Tuesday",
				wed: "Wednesday",
				thu: "Thursday",
				fri: "Friday",
				sat: "Saturday"
			},
			months: {
				jan: "Jan",
				feb: "Feb",
				mar: "Mar",
				apr: "Apr",
				may: "May",
				jun: "Jun",
				jul: "Jul",
				aug: "Aug",
				sep: "Sep",
				oct: "Oct",
				nov: "Nov",
				dec: "Dec"
			}
		},
		inputNumber: {
			decrease: "decrease number",
			increase: "increase number"
		},
		select: {
			loading: "Loading",
			noMatch: "No matching data",
			noData: "No data",
			placeholder: "Select"
		},
		dropdown: { toggleDropdown: "Toggle Dropdown" },
		cascader: {
			noMatch: "No matching data",
			loading: "Loading",
			placeholder: "Select",
			noData: "No data"
		},
		pagination: {
			goto: "Go to",
			pagesize: "/page",
			total: "Total {total}",
			pageClassifier: "",
			page: "Page",
			prev: "Go to previous page",
			next: "Go to next page",
			currentPage: "page {pager}",
			prevPages: "Previous {pager} pages",
			nextPages: "Next {pager} pages",
			deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
		},
		dialog: { close: "Close this dialog" },
		drawer: { close: "Close this dialog" },
		messagebox: {
			title: "Message",
			confirm: "OK",
			cancel: "Cancel",
			error: "Illegal input",
			close: "Close this dialog"
		},
		upload: {
			deleteTip: "press delete to remove",
			delete: "Delete",
			preview: "Preview",
			continue: "Continue"
		},
		slider: {
			defaultLabel: "slider between {min} and {max}",
			defaultRangeStartLabel: "pick start value",
			defaultRangeEndLabel: "pick end value"
		},
		table: {
			emptyText: "No Data",
			confirmFilter: "Confirm",
			resetFilter: "Reset",
			clearFilter: "All",
			sumText: "Sum"
		},
		tree: { emptyText: "No Data" },
		transfer: {
			noMatch: "No matching data",
			noData: "No data",
			titles: ["List 1", "List 2"],
			filterPlaceholder: "Enter keyword",
			noCheckedFormat: "{total} items",
			hasCheckedFormat: "{checked}/{total} checked"
		},
		image: { error: "FAILED" },
		pageHeader: { title: "Back" },
		popconfirm: {
			confirmButtonText: "Yes",
			cancelButtonText: "No"
		}
	}
};
var buildTranslator = (locale) => (path, option) => translate(path, option, unref(locale));
var translate = (path, option, locale) => get_default(locale, path, path).replace(/\{(\w+)\}/g, (_$4, key) => {
	var _a$1;
	return `${(_a$1 = option == null ? void 0 : option[key]) != null ? _a$1 : `{${key}}`}`;
});
var buildLocaleContext = (locale) => {
	return {
		lang: computed(() => unref(locale).name),
		locale: isRef(locale) ? locale : ref(locale),
		t: buildTranslator(locale)
	};
};
var localeContextKey = Symbol("localeContextKey");
var useLocale = (localeOverrides) => {
	const locale = localeOverrides || inject(localeContextKey, ref());
	return buildLocaleContext(computed(() => locale.value || English));
};
var defaultNamespace = "el";
var statePrefix = "is-";
var _bem = (namespace, block, blockSuffix, element, modifier) => {
	let cls = `${namespace}-${block}`;
	if (blockSuffix) cls += `-${blockSuffix}`;
	if (element) cls += `__${element}`;
	if (modifier) cls += `--${modifier}`;
	return cls;
};
var namespaceContextKey = Symbol("namespaceContextKey");
var useGetDerivedNamespace = (namespaceOverrides) => {
	const derivedNamespace = namespaceOverrides || (getCurrentInstance() ? inject(namespaceContextKey, ref("el")) : ref("el"));
	return computed(() => {
		return unref(derivedNamespace) || "el";
	});
};
var useNamespace = (block, namespaceOverrides) => {
	const namespace = useGetDerivedNamespace(namespaceOverrides);
	const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
	const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
	const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
	const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
	const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
	const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
	const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
	const is = (name, ...args) => {
		const state = args.length >= 1 ? args[0] : true;
		return name && state ? `${statePrefix}${name}` : "";
	};
	const cssVar = (object) => {
		const styles = {};
		for (const key in object) if (object[key]) styles[`--${namespace.value}-${key}`] = object[key];
		return styles;
	};
	const cssVarBlock = (object) => {
		const styles = {};
		for (const key in object) if (object[key]) styles[`--${namespace.value}-${block}-${key}`] = object[key];
		return styles;
	};
	const cssVarName = (name) => `--${namespace.value}-${name}`;
	const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
	return {
		namespace,
		b,
		e,
		m,
		be,
		em,
		bm,
		bem,
		is,
		cssVar,
		cssVarName,
		cssVarBlock,
		cssVarBlockName
	};
};
var zIndex = ref(0);
var defaultInitialZIndex = 2e3;
var zIndexContextKey = Symbol("zIndexContextKey");
var useZIndex = (zIndexOverrides) => {
	const zIndexInjection = zIndexOverrides || (getCurrentInstance() ? inject(zIndexContextKey, void 0) : void 0);
	const initialZIndex = computed(() => {
		const zIndexFromInjection = unref(zIndexInjection);
		return isNumber(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex;
	});
	const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
	const nextZIndex = () => {
		zIndex.value++;
		return currentZIndex.value;
	};
	return {
		initialZIndex,
		currentZIndex,
		nextZIndex
	};
};
var useSizeProp = buildProp({
	type: String,
	values: componentSizes,
	required: false
});
var SIZE_INJECTION_KEY = Symbol("size");
var useGlobalSize = () => {
	const injectedSize = inject(SIZE_INJECTION_KEY, {});
	return computed(() => {
		return unref(injectedSize.size) || "";
	});
};
var configProviderContextKey = Symbol();
var globalConfig = ref();
function useGlobalConfig(key, defaultValue = void 0) {
	const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
	if (key) return computed(() => {
		var _a$1, _b;
		return (_b = (_a$1 = config.value) == null ? void 0 : _a$1[key]) != null ? _b : defaultValue;
	});
	else return config;
}
function useGlobalComponentSettings(block, sizeFallback) {
	const config = useGlobalConfig();
	const ns = useNamespace(block, computed(() => {
		var _a$1;
		return ((_a$1 = config.value) == null ? void 0 : _a$1.namespace) || "el";
	}));
	const locale = useLocale(computed(() => {
		var _a$1;
		return (_a$1 = config.value) == null ? void 0 : _a$1.locale;
	}));
	const zIndex$1 = useZIndex(computed(() => {
		var _a$1;
		return ((_a$1 = config.value) == null ? void 0 : _a$1.zIndex) || 2e3;
	}));
	const size = computed(() => {
		var _a$1;
		return unref(sizeFallback) || ((_a$1 = config.value) == null ? void 0 : _a$1.size) || "";
	});
	provideGlobalConfig(computed(() => unref(config) || {}));
	return {
		ns,
		locale,
		zIndex: zIndex$1,
		size
	};
}
var provideGlobalConfig = (config, app, global$1 = false) => {
	var _a$1;
	const inSetup = !!getCurrentInstance();
	const oldConfig = inSetup ? useGlobalConfig() : void 0;
	const provideFn = (_a$1 = app == null ? void 0 : app.provide) != null ? _a$1 : inSetup ? provide : void 0;
	if (!provideFn) {
		debugWarn("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
		return;
	}
	const context = computed(() => {
		const cfg = unref(config);
		if (!(oldConfig == null ? void 0 : oldConfig.value)) return cfg;
		return mergeConfig(oldConfig.value, cfg);
	});
	provideFn(configProviderContextKey, context);
	provideFn(localeContextKey, computed(() => context.value.locale));
	provideFn(namespaceContextKey, computed(() => context.value.namespace));
	provideFn(zIndexContextKey, computed(() => context.value.zIndex));
	provideFn(SIZE_INJECTION_KEY, { size: computed(() => context.value.size || "") });
	if (global$1 || !globalConfig.value) globalConfig.value = context.value;
	return context;
};
var mergeConfig = (a, b) => {
	var _a$1;
	const keys = [.../* @__PURE__ */ new Set([...keysOf(a), ...keysOf(b)])];
	const obj = {};
	for (const key of keys) obj[key] = (_a$1 = b[key]) != null ? _a$1 : a[key];
	return obj;
};
function createEventBus() {
	const handlers$1 = /* @__PURE__ */ new Map();
	return {
		on(eventName, fn) {
			let eventFns = handlers$1.get(eventName);
			if (!eventFns) eventFns = [fn];
			else eventFns.push(fn);
			handlers$1.set(eventName, eventFns);
		},
		once(eventName, fn) {
			const handler = (payload) => {
				this.off(eventName, handler);
				fn(payload);
			};
			this.on(eventName, handler);
		},
		off(eventName, fn) {
			const eventFns = handlers$1.get(eventName);
			if (eventFns) eventFns.splice(eventFns.indexOf(fn) >>> 0, 1);
		},
		emit(eventName, event) {
			const eventFns = handlers$1.get(eventName);
			if (eventFns) eventFns.slice().forEach((handler) => {
				handler(event);
			});
		}
	};
}
var isBrowser = typeof document !== "undefined";
function isRouteComponent(component) {
	return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function isESModule(obj) {
	return obj.__esModule || obj[Symbol.toStringTag] === "Module" || obj.default && isRouteComponent(obj.default);
}
var assign = Object.assign;
function applyToParams(fn, params) {
	const newParams = {};
	for (const key in params) {
		const value = params[key];
		newParams[key] = isArray$3(value) ? value.map(fn) : fn(value);
	}
	return newParams;
}
var noop = () => {};
var isArray$3 = Array.isArray;
var HASH_RE = /#/g;
var AMPERSAND_RE = /&/g;
var SLASH_RE = /\//g;
var EQUAL_RE = /=/g;
var IM_RE = /\?/g;
var PLUS_RE = /\+/g;
var ENC_BRACKET_OPEN_RE = /%5B/g;
var ENC_BRACKET_CLOSE_RE = /%5D/g;
var ENC_CARET_RE = /%5E/g;
var ENC_BACKTICK_RE = /%60/g;
var ENC_CURLY_OPEN_RE = /%7B/g;
var ENC_PIPE_RE = /%7C/g;
var ENC_CURLY_CLOSE_RE = /%7D/g;
var ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
	return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
	return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
	return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
	return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
	return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
	return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
	try {
		return decodeURIComponent("" + text);
	} catch (err) {}
	return "" + text;
}
var TRAILING_SLASH_RE = /\/$/;
var removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery$1, location$1, currentLocation = "/") {
	let path, query = {}, searchString = "", hash = "";
	const hashPos = location$1.indexOf("#");
	let searchPos = location$1.indexOf("?");
	if (hashPos < searchPos && hashPos >= 0) searchPos = -1;
	if (searchPos > -1) {
		path = location$1.slice(0, searchPos);
		searchString = location$1.slice(searchPos + 1, hashPos > -1 ? hashPos : location$1.length);
		query = parseQuery$1(searchString);
	}
	if (hashPos > -1) {
		path = path || location$1.slice(0, hashPos);
		hash = location$1.slice(hashPos, location$1.length);
	}
	path = resolveRelativePath(path != null ? path : location$1, currentLocation);
	return {
		fullPath: path + (searchString && "?") + searchString + hash,
		path,
		query,
		hash: decode(hash)
	};
}
function stringifyURL(stringifyQuery$1, location$1) {
	const query = location$1.query ? stringifyQuery$1(location$1.query) : "";
	return location$1.path + (query && "?") + query + (location$1.hash || "");
}
function stripBase(pathname, base) {
	if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase())) return pathname;
	return pathname.slice(base.length) || "/";
}
function isSameRouteLocation(stringifyQuery$1, a, b) {
	const aLastIndex = a.matched.length - 1;
	const bLastIndex = b.matched.length - 1;
	return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery$1(a.query) === stringifyQuery$1(b.query) && a.hash === b.hash;
}
function isSameRouteRecord(a, b) {
	return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
	if (Object.keys(a).length !== Object.keys(b).length) return false;
	for (const key in a) if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
	return true;
}
function isSameRouteLocationParamsValue(a, b) {
	return isArray$3(a) ? isEquivalentArray(a, b) : isArray$3(b) ? isEquivalentArray(b, a) : a === b;
}
function isEquivalentArray(a, b) {
	return isArray$3(b) ? a.length === b.length && a.every((value, i$1) => value === b[i$1]) : a.length === 1 && a[0] === b;
}
function resolveRelativePath(to, from) {
	if (to.startsWith("/")) return to;
	if (!to) return from;
	const fromSegments = from.split("/");
	const toSegments = to.split("/");
	const lastToSegment = toSegments[toSegments.length - 1];
	if (lastToSegment === ".." || lastToSegment === ".") toSegments.push("");
	let position = fromSegments.length - 1;
	let toPosition;
	let segment;
	for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
		segment = toSegments[toPosition];
		if (segment === ".") continue;
		if (segment === "..") {
			if (position > 1) position--;
		} else break;
	}
	return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition).join("/");
}
var START_LOCATION_NORMALIZED = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
};
var NavigationType;
(function(NavigationType$1) {
	NavigationType$1["pop"] = "pop";
	NavigationType$1["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection$1) {
	NavigationDirection$1["back"] = "back";
	NavigationDirection$1["forward"] = "forward";
	NavigationDirection$1["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
function normalizeBase(base) {
	if (!base) if (isBrowser) {
		const baseEl = document.querySelector("base");
		base = baseEl && baseEl.getAttribute("href") || "/";
		base = base.replace(/^\w+:\/\/[^\/]+/, "");
	} else base = "/";
	if (base[0] !== "/" && base[0] !== "#") base = "/" + base;
	return removeTrailingSlash(base);
}
var BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location$1) {
	return base.replace(BEFORE_HASH_RE, "#") + location$1;
}
function getElementPosition(el, offset) {
	const docRect = document.documentElement.getBoundingClientRect();
	const elRect = el.getBoundingClientRect();
	return {
		behavior: offset.behavior,
		left: elRect.left - docRect.left - (offset.left || 0),
		top: elRect.top - docRect.top - (offset.top || 0)
	};
}
var computeScrollPosition = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function scrollToPosition(position) {
	let scrollToOptions;
	if ("el" in position) {
		const positionEl = position.el;
		const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
		const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
		if (!el) return;
		scrollToOptions = getElementPosition(el, position);
	} else scrollToOptions = position;
	if ("scrollBehavior" in document.documentElement.style) window.scrollTo(scrollToOptions);
	else window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
}
function getScrollKey(path, delta) {
	return (history.state ? history.state.position - delta : -1) + path;
}
var scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
	scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
	const scroll = scrollPositions.get(key);
	scrollPositions.delete(key);
	return scroll;
}
var createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base, location$1) {
	const { pathname, search, hash } = location$1;
	const hashPos = base.indexOf("#");
	if (hashPos > -1) {
		let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
		let pathFromHash = hash.slice(slicePos);
		if (pathFromHash[0] !== "/") pathFromHash = "/" + pathFromHash;
		return stripBase(pathFromHash, "");
	}
	return stripBase(pathname, base) + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
	let listeners = [];
	let teardowns = [];
	let pauseState = null;
	const popStateHandler = ({ state }) => {
		const to = createCurrentLocation(base, location);
		const from = currentLocation.value;
		const fromState = historyState.value;
		let delta = 0;
		if (state) {
			currentLocation.value = to;
			historyState.value = state;
			if (pauseState && pauseState === from) {
				pauseState = null;
				return;
			}
			delta = fromState ? state.position - fromState.position : 0;
		} else replace(to);
		listeners.forEach((listener) => {
			listener(currentLocation.value, from, {
				delta,
				type: NavigationType.pop,
				direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
			});
		});
	};
	function pauseListeners() {
		pauseState = currentLocation.value;
	}
	function listen(callback) {
		listeners.push(callback);
		const teardown = () => {
			const index = listeners.indexOf(callback);
			if (index > -1) listeners.splice(index, 1);
		};
		teardowns.push(teardown);
		return teardown;
	}
	function beforeUnloadListener() {
		const { history: history$1 } = window;
		if (!history$1.state) return;
		history$1.replaceState(assign({}, history$1.state, { scroll: computeScrollPosition() }), "");
	}
	function destroy() {
		for (const teardown of teardowns) teardown();
		teardowns = [];
		window.removeEventListener("popstate", popStateHandler);
		window.removeEventListener("beforeunload", beforeUnloadListener);
	}
	window.addEventListener("popstate", popStateHandler);
	window.addEventListener("beforeunload", beforeUnloadListener, { passive: true });
	return {
		pauseListeners,
		listen,
		destroy
	};
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
	return {
		back,
		current,
		forward,
		replaced,
		position: window.history.length,
		scroll: computeScroll ? computeScrollPosition() : null
	};
}
function useHistoryStateNavigation(base) {
	const { history: history$1, location: location$1 } = window;
	const currentLocation = { value: createCurrentLocation(base, location$1) };
	const historyState = { value: history$1.state };
	if (!historyState.value) changeLocation(currentLocation.value, {
		back: null,
		current: currentLocation.value,
		forward: null,
		position: history$1.length - 1,
		replaced: true,
		scroll: null
	}, true);
	function changeLocation(to, state, replace$1) {
		const hashIndex = base.indexOf("#");
		const url = hashIndex > -1 ? (location$1.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
		try {
			history$1[replace$1 ? "replaceState" : "pushState"](state, "", url);
			historyState.value = state;
		} catch (err) {
			console.error(err);
			location$1[replace$1 ? "replace" : "assign"](url);
		}
	}
	function replace(to, data) {
		changeLocation(to, assign({}, history$1.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position }), true);
		currentLocation.value = to;
	}
	function push(to, data) {
		const currentState = assign({}, historyState.value, history$1.state, {
			forward: to,
			scroll: computeScrollPosition()
		});
		changeLocation(currentState.current, currentState, true);
		changeLocation(to, assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data), false);
		currentLocation.value = to;
	}
	return {
		location: currentLocation,
		state: historyState,
		push,
		replace
	};
}
function createWebHistory(base) {
	base = normalizeBase(base);
	const historyNavigation = useHistoryStateNavigation(base);
	const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
	function go(delta, triggerListeners = true) {
		if (!triggerListeners) historyListeners.pauseListeners();
		history.go(delta);
	}
	const routerHistory = assign({
		location: "",
		base,
		go,
		createHref: createHref.bind(null, base)
	}, historyNavigation, historyListeners);
	Object.defineProperty(routerHistory, "location", {
		enumerable: true,
		get: () => historyNavigation.location.value
	});
	Object.defineProperty(routerHistory, "state", {
		enumerable: true,
		get: () => historyNavigation.state.value
	});
	return routerHistory;
}
function isRouteLocation(route) {
	return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
	return typeof name === "string" || typeof name === "symbol";
}
var NavigationFailureSymbol = Symbol("");
var NavigationFailureType;
(function(NavigationFailureType$1) {
	NavigationFailureType$1[NavigationFailureType$1["aborted"] = 4] = "aborted";
	NavigationFailureType$1[NavigationFailureType$1["cancelled"] = 8] = "cancelled";
	NavigationFailureType$1[NavigationFailureType$1["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
function createRouterError(type, params) {
	return assign(/* @__PURE__ */ new Error(), {
		type,
		[NavigationFailureSymbol]: true
	}, params);
}
function isNavigationFailure(error, type) {
	return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
var BASE_PARAM_PATTERN = "[^/]+?";
var BASE_PATH_PARSER_OPTIONS = {
	sensitive: false,
	strict: false,
	start: true,
	end: true
};
var REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
	const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
	const score = [];
	let pattern = options.start ? "^" : "";
	const keys = [];
	for (const segment of segments) {
		const segmentScores = segment.length ? [] : [90];
		if (options.strict && !segment.length) pattern += "/";
		for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
			const token = segment[tokenIndex];
			let subSegmentScore = 40 + (options.sensitive ? .25 : 0);
			if (token.type === 0) {
				if (!tokenIndex) pattern += "/";
				pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
				subSegmentScore += 40;
			} else if (token.type === 1) {
				const { value, repeatable, optional, regexp } = token;
				keys.push({
					name: value,
					repeatable,
					optional
				});
				const re$1 = regexp ? regexp : BASE_PARAM_PATTERN;
				if (re$1 !== BASE_PARAM_PATTERN) {
					subSegmentScore += 10;
					try {
						`${re$1}`;
					} catch (err) {
						throw new Error(`Invalid custom RegExp for param "${value}" (${re$1}): ` + err.message);
					}
				}
				let subPattern = repeatable ? `((?:${re$1})(?:/(?:${re$1}))*)` : `(${re$1})`;
				if (!tokenIndex) subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
				if (optional) subPattern += "?";
				pattern += subPattern;
				subSegmentScore += 20;
				if (optional) subSegmentScore += -8;
				if (repeatable) subSegmentScore += -20;
				if (re$1 === ".*") subSegmentScore += -50;
			}
			segmentScores.push(subSegmentScore);
		}
		score.push(segmentScores);
	}
	if (options.strict && options.end) {
		const i$1 = score.length - 1;
		score[i$1][score[i$1].length - 1] += .7000000000000001;
	}
	if (!options.strict) pattern += "/?";
	if (options.end) pattern += "$";
	else if (options.strict && !pattern.endsWith("/")) pattern += "(?:/|$)";
	const re = new RegExp(pattern, options.sensitive ? "" : "i");
	function parse(path) {
		const match = path.match(re);
		const params = {};
		if (!match) return null;
		for (let i$1 = 1; i$1 < match.length; i$1++) {
			const value = match[i$1] || "";
			const key = keys[i$1 - 1];
			params[key.name] = value && key.repeatable ? value.split("/") : value;
		}
		return params;
	}
	function stringify(params) {
		let path = "";
		let avoidDuplicatedSlash = false;
		for (const segment of segments) {
			if (!avoidDuplicatedSlash || !path.endsWith("/")) path += "/";
			avoidDuplicatedSlash = false;
			for (const token of segment) if (token.type === 0) path += token.value;
			else if (token.type === 1) {
				const { value, repeatable, optional } = token;
				const param = value in params ? params[value] : "";
				if (isArray$3(param) && !repeatable) throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
				const text = isArray$3(param) ? param.join("/") : param;
				if (!text) if (optional) {
					if (segment.length < 2) if (path.endsWith("/")) path = path.slice(0, -1);
					else avoidDuplicatedSlash = true;
				} else throw new Error(`Missing required param "${value}"`);
				path += text;
			}
		}
		return path || "/";
	}
	return {
		re,
		score,
		keys,
		parse,
		stringify
	};
}
function compareScoreArray(a, b) {
	let i$1 = 0;
	while (i$1 < a.length && i$1 < b.length) {
		const diff = b[i$1] - a[i$1];
		if (diff) return diff;
		i$1++;
	}
	if (a.length < b.length) return a.length === 1 && a[0] === 80 ? -1 : 1;
	else if (a.length > b.length) return b.length === 1 && b[0] === 80 ? 1 : -1;
	return 0;
}
function comparePathParserScore(a, b) {
	let i$1 = 0;
	const aScore = a.score;
	const bScore = b.score;
	while (i$1 < aScore.length && i$1 < bScore.length) {
		const comp = compareScoreArray(aScore[i$1], bScore[i$1]);
		if (comp) return comp;
		i$1++;
	}
	if (Math.abs(bScore.length - aScore.length) === 1) {
		if (isLastScoreNegative(aScore)) return 1;
		if (isLastScoreNegative(bScore)) return -1;
	}
	return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
	const last = score[score.length - 1];
	return score.length > 0 && last[last.length - 1] < 0;
}
var ROOT_TOKEN = {
	type: 0,
	value: ""
};
var VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
	if (!path) return [[]];
	if (path === "/") return [[ROOT_TOKEN]];
	if (!path.startsWith("/")) throw new Error(`Invalid path "${path}"`);
	function crash(message) {
		throw new Error(`ERR (${state})/"${buffer}": ${message}`);
	}
	let state = 0;
	let previousState = state;
	const tokens = [];
	let segment;
	function finalizeSegment() {
		if (segment) tokens.push(segment);
		segment = [];
	}
	let i$1 = 0;
	let char;
	let buffer = "";
	let customRe = "";
	function consumeBuffer() {
		if (!buffer) return;
		if (state === 0) segment.push({
			type: 0,
			value: buffer
		});
		else if (state === 1 || state === 2 || state === 3) {
			if (segment.length > 1 && (char === "*" || char === "+")) crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
			segment.push({
				type: 1,
				value: buffer,
				regexp: customRe,
				repeatable: char === "*" || char === "+",
				optional: char === "*" || char === "?"
			});
		} else crash("Invalid state to consume buffer");
		buffer = "";
	}
	function addCharToBuffer() {
		buffer += char;
	}
	while (i$1 < path.length) {
		char = path[i$1++];
		if (char === "\\" && state !== 2) {
			previousState = state;
			state = 4;
			continue;
		}
		switch (state) {
			case 0:
				if (char === "/") {
					if (buffer) consumeBuffer();
					finalizeSegment();
				} else if (char === ":") {
					consumeBuffer();
					state = 1;
				} else addCharToBuffer();
				break;
			case 4:
				addCharToBuffer();
				state = previousState;
				break;
			case 1:
				if (char === "(") state = 2;
				else if (VALID_PARAM_RE.test(char)) addCharToBuffer();
				else {
					consumeBuffer();
					state = 0;
					if (char !== "*" && char !== "?" && char !== "+") i$1--;
				}
				break;
			case 2:
				if (char === ")") if (customRe[customRe.length - 1] == "\\") customRe = customRe.slice(0, -1) + char;
				else state = 3;
				else customRe += char;
				break;
			case 3:
				consumeBuffer();
				state = 0;
				if (char !== "*" && char !== "?" && char !== "+") i$1--;
				customRe = "";
				break;
			default:
				crash("Unknown state");
				break;
		}
	}
	if (state === 2) crash(`Unfinished custom RegExp for param "${buffer}"`);
	consumeBuffer();
	finalizeSegment();
	return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
	const matcher = assign(tokensToParser(tokenizePath(record.path), options), {
		record,
		parent,
		children: [],
		alias: []
	});
	if (parent) {
		if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
	}
	return matcher;
}
function createRouterMatcher(routes, globalOptions) {
	const matchers = [];
	const matcherMap = /* @__PURE__ */ new Map();
	globalOptions = mergeOptions({
		strict: false,
		end: true,
		sensitive: false
	}, globalOptions);
	function getRecordMatcher(name) {
		return matcherMap.get(name);
	}
	function addRoute(record, parent, originalRecord) {
		const isRootAdd = !originalRecord;
		const mainNormalizedRecord = normalizeRouteRecord(record);
		mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
		const options = mergeOptions(globalOptions, record);
		const normalizedRecords = [mainNormalizedRecord];
		if ("alias" in record) {
			const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
			for (const alias of aliases) normalizedRecords.push(normalizeRouteRecord(assign({}, mainNormalizedRecord, {
				components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
				path: alias,
				aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
			})));
		}
		let matcher;
		let originalMatcher;
		for (const normalizedRecord of normalizedRecords) {
			const { path } = normalizedRecord;
			if (parent && path[0] !== "/") {
				const parentPath = parent.record.path;
				const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
				normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
			}
			matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
			if (originalRecord) originalRecord.alias.push(matcher);
			else {
				originalMatcher = originalMatcher || matcher;
				if (originalMatcher !== matcher) originalMatcher.alias.push(matcher);
				if (isRootAdd && record.name && !isAliasRecord(matcher)) removeRoute(record.name);
			}
			if (isMatchable(matcher)) insertMatcher(matcher);
			if (mainNormalizedRecord.children) {
				const children = mainNormalizedRecord.children;
				for (let i$1 = 0; i$1 < children.length; i$1++) addRoute(children[i$1], matcher, originalRecord && originalRecord.children[i$1]);
			}
			originalRecord = originalRecord || matcher;
		}
		return originalMatcher ? () => {
			removeRoute(originalMatcher);
		} : noop;
	}
	function removeRoute(matcherRef) {
		if (isRouteName(matcherRef)) {
			const matcher = matcherMap.get(matcherRef);
			if (matcher) {
				matcherMap.delete(matcherRef);
				matchers.splice(matchers.indexOf(matcher), 1);
				matcher.children.forEach(removeRoute);
				matcher.alias.forEach(removeRoute);
			}
		} else {
			const index = matchers.indexOf(matcherRef);
			if (index > -1) {
				matchers.splice(index, 1);
				if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
				matcherRef.children.forEach(removeRoute);
				matcherRef.alias.forEach(removeRoute);
			}
		}
	}
	function getRoutes() {
		return matchers;
	}
	function insertMatcher(matcher) {
		const index = findInsertionIndex(matcher, matchers);
		matchers.splice(index, 0, matcher);
		if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
	}
	function resolve(location$1, currentLocation) {
		let matcher;
		let params = {};
		let path;
		let name;
		if ("name" in location$1 && location$1.name) {
			matcher = matcherMap.get(location$1.name);
			if (!matcher) throw createRouterError(1, { location: location$1 });
			name = matcher.record.name;
			params = assign(paramsFromLocation(currentLocation.params, matcher.keys.filter((k) => !k.optional).concat(matcher.parent ? matcher.parent.keys.filter((k) => k.optional) : []).map((k) => k.name)), location$1.params && paramsFromLocation(location$1.params, matcher.keys.map((k) => k.name)));
			path = matcher.stringify(params);
		} else if (location$1.path != null) {
			path = location$1.path;
			matcher = matchers.find((m) => m.re.test(path));
			if (matcher) {
				params = matcher.parse(path);
				name = matcher.record.name;
			}
		} else {
			matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
			if (!matcher) throw createRouterError(1, {
				location: location$1,
				currentLocation
			});
			name = matcher.record.name;
			params = assign({}, currentLocation.params, location$1.params);
			path = matcher.stringify(params);
		}
		const matched = [];
		let parentMatcher = matcher;
		while (parentMatcher) {
			matched.unshift(parentMatcher.record);
			parentMatcher = parentMatcher.parent;
		}
		return {
			name,
			path,
			params,
			matched,
			meta: mergeMetaFields(matched)
		};
	}
	routes.forEach((route) => addRoute(route));
	function clearRoutes() {
		matchers.length = 0;
		matcherMap.clear();
	}
	return {
		addRoute,
		resolve,
		removeRoute,
		clearRoutes,
		getRoutes,
		getRecordMatcher
	};
}
function paramsFromLocation(params, keys) {
	const newParams = {};
	for (const key of keys) if (key in params) newParams[key] = params[key];
	return newParams;
}
function normalizeRouteRecord(record) {
	const normalized = {
		path: record.path,
		redirect: record.redirect,
		name: record.name,
		meta: record.meta || {},
		aliasOf: record.aliasOf,
		beforeEnter: record.beforeEnter,
		props: normalizeRecordProps(record),
		children: record.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in record ? record.components || null : record.component && { default: record.component }
	};
	Object.defineProperty(normalized, "mods", { value: {} });
	return normalized;
}
function normalizeRecordProps(record) {
	const propsObject = {};
	const props = record.props || false;
	if ("component" in record) propsObject.default = props;
	else for (const name in record.components) propsObject[name] = typeof props === "object" ? props[name] : props;
	return propsObject;
}
function isAliasRecord(record) {
	while (record) {
		if (record.record.aliasOf) return true;
		record = record.parent;
	}
	return false;
}
function mergeMetaFields(matched) {
	return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
	const options = {};
	for (const key in defaults) options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
	return options;
}
function findInsertionIndex(matcher, matchers) {
	let lower = 0;
	let upper = matchers.length;
	while (lower !== upper) {
		const mid = lower + upper >> 1;
		if (comparePathParserScore(matcher, matchers[mid]) < 0) upper = mid;
		else lower = mid + 1;
	}
	const insertionAncestor = getInsertionAncestor(matcher);
	if (insertionAncestor) upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
	return upper;
}
function getInsertionAncestor(matcher) {
	let ancestor = matcher;
	while (ancestor = ancestor.parent) if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) return ancestor;
}
function isMatchable({ record }) {
	return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
}
function parseQuery(search) {
	const query = {};
	if (search === "" || search === "?") return query;
	const searchParams = (search[0] === "?" ? search.slice(1) : search).split("&");
	for (let i$1 = 0; i$1 < searchParams.length; ++i$1) {
		const searchParam = searchParams[i$1].replace(PLUS_RE, " ");
		const eqPos = searchParam.indexOf("=");
		const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
		const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
		if (key in query) {
			let currentValue = query[key];
			if (!isArray$3(currentValue)) currentValue = query[key] = [currentValue];
			currentValue.push(value);
		} else query[key] = value;
	}
	return query;
}
function stringifyQuery(query) {
	let search = "";
	for (let key in query) {
		const value = query[key];
		key = encodeQueryKey(key);
		if (value == null) {
			if (value !== void 0) search += (search.length ? "&" : "") + key;
			continue;
		}
		(isArray$3(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)]).forEach((value$1) => {
			if (value$1 !== void 0) {
				search += (search.length ? "&" : "") + key;
				if (value$1 != null) search += "=" + value$1;
			}
		});
	}
	return search;
}
function normalizeQuery(query) {
	const normalizedQuery = {};
	for (const key in query) {
		const value = query[key];
		if (value !== void 0) normalizedQuery[key] = isArray$3(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
	}
	return normalizedQuery;
}
var matchedRouteKey = Symbol("");
var viewDepthKey = Symbol("");
var routerKey = Symbol("");
var routeLocationKey = Symbol("");
var routerViewLocationKey = Symbol("");
function useCallbacks() {
	let handlers$1 = [];
	function add(handler) {
		handlers$1.push(handler);
		return () => {
			const i$1 = handlers$1.indexOf(handler);
			if (i$1 > -1) handlers$1.splice(i$1, 1);
		};
	}
	function reset() {
		handlers$1 = [];
	}
	return {
		add,
		list: () => handlers$1.slice(),
		reset
	};
}
function registerGuard(record, name, guard) {
	const removeFromList = () => {
		record[name].delete(guard);
	};
	onUnmounted(removeFromList);
	onDeactivated(removeFromList);
	onActivated(() => {
		record[name].add(guard);
	});
	record[name].add(guard);
}
function onBeforeRouteLeave(leaveGuard) {
	const activeRecord = inject(matchedRouteKey, {}).value;
	if (!activeRecord) return;
	registerGuard(activeRecord, "leaveGuards", leaveGuard);
}
function guardToPromiseFn(guard, to, from, record, name, runWithContext = (fn) => fn()) {
	const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
	return () => new Promise((resolve, reject) => {
		const next = (valid) => {
			if (valid === false) reject(createRouterError(4, {
				from,
				to
			}));
			else if (valid instanceof Error) reject(valid);
			else if (isRouteLocation(valid)) reject(createRouterError(2, {
				from: to,
				to: valid
			}));
			else {
				if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") enterCallbackArray.push(valid);
				resolve();
			}
		};
		const guardReturn = runWithContext(() => guard.call(record && record.instances[name], to, from, next));
		let guardCall = Promise.resolve(guardReturn);
		if (guard.length < 3) guardCall = guardCall.then(next);
		guardCall.catch((err) => reject(err));
	});
}
function extractComponentsGuards(matched, guardType, to, from, runWithContext = (fn) => fn()) {
	const guards = [];
	for (const record of matched) for (const name in record.components) {
		let rawComponent = record.components[name];
		if (guardType !== "beforeRouteEnter" && !record.instances[name]) continue;
		if (isRouteComponent(rawComponent)) {
			const guard = (rawComponent.__vccOpts || rawComponent)[guardType];
			guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
		} else {
			let componentPromise = rawComponent();
			guards.push(() => componentPromise.then((resolved) => {
				if (!resolved) throw new Error(`Couldn't resolve component "${name}" at "${record.path}"`);
				const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
				record.mods[name] = resolved;
				record.components[name] = resolvedComponent;
				const guard = (resolvedComponent.__vccOpts || resolvedComponent)[guardType];
				return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
			}));
		}
	}
	return guards;
}
function useLink(props) {
	const router = inject(routerKey);
	const currentRoute = inject(routeLocationKey);
	const route = computed(() => {
		const to = unref(props.to);
		return router.resolve(to);
	});
	const activeRecordIndex = computed(() => {
		const { matched } = route.value;
		const { length } = matched;
		const routeMatched = matched[length - 1];
		const currentMatched = currentRoute.matched;
		if (!routeMatched || !currentMatched.length) return -1;
		const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
		if (index > -1) return index;
		const parentRecordPath = getOriginalPath(matched[length - 2]);
		return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
	});
	const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
	const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
	function navigate(e = {}) {
		if (guardEvent(e)) {
			const p = router[unref(props.replace) ? "replace" : "push"](unref(props.to)).catch(noop);
			if (props.viewTransition && typeof document !== "undefined" && "startViewTransition" in document) document.startViewTransition(() => p);
			return p;
		}
		return Promise.resolve();
	}
	return {
		route,
		href: computed(() => route.value.href),
		isActive,
		isExactActive,
		navigate
	};
}
function preferSingleVNode(vnodes) {
	return vnodes.length === 1 ? vnodes[0] : vnodes;
}
var RouterLink = /* @__PURE__ */ defineComponent({
	name: "RouterLink",
	compatConfig: { MODE: 3 },
	props: {
		to: {
			type: [String, Object],
			required: true
		},
		replace: Boolean,
		activeClass: String,
		exactActiveClass: String,
		custom: Boolean,
		ariaCurrentValue: {
			type: String,
			default: "page"
		}
	},
	useLink,
	setup(props, { slots }) {
		const link = reactive(useLink(props));
		const { options } = inject(routerKey);
		const elClass = computed(() => ({
			[getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
			[getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
		}));
		return () => {
			const children = slots.default && preferSingleVNode(slots.default(link));
			return props.custom ? children : h("a", {
				"aria-current": link.isExactActive ? props.ariaCurrentValue : null,
				href: link.href,
				onClick: link.navigate,
				class: elClass.value
			}, children);
		};
	}
});
function guardEvent(e) {
	if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
	if (e.defaultPrevented) return;
	if (e.button !== void 0 && e.button !== 0) return;
	if (e.currentTarget && e.currentTarget.getAttribute) {
		const target = e.currentTarget.getAttribute("target");
		if (/\b_blank\b/i.test(target)) return;
	}
	if (e.preventDefault) e.preventDefault();
	return true;
}
function includesParams(outer, inner) {
	for (const key in inner) {
		const innerValue = inner[key];
		const outerValue = outer[key];
		if (typeof innerValue === "string") {
			if (innerValue !== outerValue) return false;
		} else if (!isArray$3(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i$1) => value !== outerValue[i$1])) return false;
	}
	return true;
}
function getOriginalPath(record) {
	return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
var getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
var RouterViewImpl = /* @__PURE__ */ defineComponent({
	name: "RouterView",
	inheritAttrs: false,
	props: {
		name: {
			type: String,
			default: "default"
		},
		route: Object
	},
	compatConfig: { MODE: 3 },
	setup(props, { attrs, slots }) {
		const injectedRoute = inject(routerViewLocationKey);
		const routeToDisplay = computed(() => props.route || injectedRoute.value);
		const injectedDepth = inject(viewDepthKey, 0);
		const depth = computed(() => {
			let initialDepth = unref(injectedDepth);
			const { matched } = routeToDisplay.value;
			let matchedRoute;
			while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) initialDepth++;
			return initialDepth;
		});
		const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
		provide(viewDepthKey, computed(() => depth.value + 1));
		provide(matchedRouteKey, matchedRouteRef);
		provide(routerViewLocationKey, routeToDisplay);
		const viewRef = ref();
		watch(() => [
			viewRef.value,
			matchedRouteRef.value,
			props.name
		], ([instance, to, name], [oldInstance, from, oldName]) => {
			if (to) {
				to.instances[name] = instance;
				if (from && from !== to && instance && instance === oldInstance) {
					if (!to.leaveGuards.size) to.leaveGuards = from.leaveGuards;
					if (!to.updateGuards.size) to.updateGuards = from.updateGuards;
				}
			}
			if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
		}, { flush: "post" });
		return () => {
			const route = routeToDisplay.value;
			const currentName = props.name;
			const matchedRoute = matchedRouteRef.value;
			const ViewComponent = matchedRoute && matchedRoute.components[currentName];
			if (!ViewComponent) return normalizeSlot(slots.default, {
				Component: ViewComponent,
				route
			});
			const routePropsOption = matchedRoute.props[currentName];
			const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
			const onVnodeUnmounted = (vnode) => {
				if (vnode.component.isUnmounted) matchedRoute.instances[currentName] = null;
			};
			const component = h(ViewComponent, assign({}, routeProps, attrs, {
				onVnodeUnmounted,
				ref: viewRef
			}));
			return normalizeSlot(slots.default, {
				Component: component,
				route
			}) || component;
		};
	}
});
function normalizeSlot(slot, data) {
	if (!slot) return null;
	const slotContent = slot(data);
	return slotContent.length === 1 ? slotContent[0] : slotContent;
}
var RouterView = RouterViewImpl;
function createRouter(options) {
	const matcher = createRouterMatcher(options.routes, options);
	const parseQuery$1 = options.parseQuery || parseQuery;
	const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
	const routerHistory = options.history;
	const beforeGuards = useCallbacks();
	const beforeResolveGuards = useCallbacks();
	const afterGuards = useCallbacks();
	const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
	let pendingLocation = START_LOCATION_NORMALIZED;
	if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) history.scrollRestoration = "manual";
	const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
	const encodeParams = applyToParams.bind(null, encodeParam);
	const decodeParams = applyToParams.bind(null, decode);
	function addRoute(parentOrRoute, route) {
		let parent;
		let record;
		if (isRouteName(parentOrRoute)) {
			parent = matcher.getRecordMatcher(parentOrRoute);
			record = route;
		} else record = parentOrRoute;
		return matcher.addRoute(record, parent);
	}
	function removeRoute(name) {
		const recordMatcher = matcher.getRecordMatcher(name);
		if (recordMatcher) matcher.removeRoute(recordMatcher);
	}
	function getRoutes() {
		return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
	}
	function hasRoute(name) {
		return !!matcher.getRecordMatcher(name);
	}
	function resolve(rawLocation, currentLocation) {
		currentLocation = assign({}, currentLocation || currentRoute.value);
		if (typeof rawLocation === "string") {
			const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
			const matchedRoute$1 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
			const href$1 = routerHistory.createHref(locationNormalized.fullPath);
			return assign(locationNormalized, matchedRoute$1, {
				params: decodeParams(matchedRoute$1.params),
				hash: decode(locationNormalized.hash),
				redirectedFrom: void 0,
				href: href$1
			});
		}
		let matcherLocation;
		if (rawLocation.path != null) matcherLocation = assign({}, rawLocation, { path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path });
		else {
			const targetParams = assign({}, rawLocation.params);
			for (const key in targetParams) if (targetParams[key] == null) delete targetParams[key];
			matcherLocation = assign({}, rawLocation, { params: encodeParams(targetParams) });
			currentLocation.params = encodeParams(currentLocation.params);
		}
		const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
		const hash = rawLocation.hash || "";
		matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
		const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
			hash: encodeHash(hash),
			path: matchedRoute.path
		}));
		const href = routerHistory.createHref(fullPath);
		return assign({
			fullPath,
			hash,
			query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
		}, matchedRoute, {
			redirectedFrom: void 0,
			href
		});
	}
	function locationAsObject(to) {
		return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
	}
	function checkCanceledNavigation(to, from) {
		if (pendingLocation !== to) return createRouterError(8, {
			from,
			to
		});
	}
	function push(to) {
		return pushWithRedirect(to);
	}
	function replace(to) {
		return push(assign(locationAsObject(to), { replace: true }));
	}
	function handleRedirectRecord(to) {
		const lastMatched = to.matched[to.matched.length - 1];
		if (lastMatched && lastMatched.redirect) {
			const { redirect } = lastMatched;
			let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
			if (typeof newTargetLocation === "string") {
				newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
				newTargetLocation.params = {};
			}
			return assign({
				query: to.query,
				hash: to.hash,
				params: newTargetLocation.path != null ? {} : to.params
			}, newTargetLocation);
		}
	}
	function pushWithRedirect(to, redirectedFrom) {
		const targetLocation = pendingLocation = resolve(to);
		const from = currentRoute.value;
		const data = to.state;
		const force = to.force;
		const replace$1 = to.replace === true;
		const shouldRedirect = handleRedirectRecord(targetLocation);
		if (shouldRedirect) return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
			state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
			force,
			replace: replace$1
		}), redirectedFrom || targetLocation);
		const toLocation = targetLocation;
		toLocation.redirectedFrom = redirectedFrom;
		let failure;
		if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
			failure = createRouterError(16, {
				to: toLocation,
				from
			});
			handleScroll(from, from, true, false);
		}
		return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure$1) => {
			if (failure$1) {
				if (isNavigationFailure(failure$1, 2)) return pushWithRedirect(assign({ replace: replace$1 }, locationAsObject(failure$1.to), {
					state: typeof failure$1.to === "object" ? assign({}, data, failure$1.to.state) : data,
					force
				}), redirectedFrom || toLocation);
			} else failure$1 = finalizeNavigation(toLocation, from, true, replace$1, data);
			triggerAfterEach(toLocation, from, failure$1);
			return failure$1;
		});
	}
	function checkCanceledNavigationAndReject(to, from) {
		const error = checkCanceledNavigation(to, from);
		return error ? Promise.reject(error) : Promise.resolve();
	}
	function runWithContext(fn) {
		const app = installedApps.values().next().value;
		return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
	}
	function navigate(to, from) {
		let guards;
		const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
		guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
		for (const record of leavingRecords) record.leaveGuards.forEach((guard) => {
			guards.push(guardToPromiseFn(guard, to, from));
		});
		const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
		guards.push(canceledNavigationCheck);
		return runGuardQueue(guards).then(() => {
			guards = [];
			for (const guard of beforeGuards.list()) guards.push(guardToPromiseFn(guard, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
			for (const record of updatingRecords) record.updateGuards.forEach((guard) => {
				guards.push(guardToPromiseFn(guard, to, from));
			});
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = [];
			for (const record of enteringRecords) if (record.beforeEnter) if (isArray$3(record.beforeEnter)) for (const beforeEnter of record.beforeEnter) guards.push(guardToPromiseFn(beforeEnter, to, from));
			else guards.push(guardToPromiseFn(record.beforeEnter, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			to.matched.forEach((record) => record.enterCallbacks = {});
			guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from, runWithContext);
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = [];
			for (const guard of beforeResolveGuards.list()) guards.push(guardToPromiseFn(guard, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
	}
	function triggerAfterEach(to, from, failure) {
		afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
	}
	function finalizeNavigation(toLocation, from, isPush, replace$1, data) {
		const error = checkCanceledNavigation(toLocation, from);
		if (error) return error;
		const isFirstNavigation = from === START_LOCATION_NORMALIZED;
		const state = !isBrowser ? {} : history.state;
		if (isPush) if (replace$1 || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign({ scroll: isFirstNavigation && state && state.scroll }, data));
		else routerHistory.push(toLocation.fullPath, data);
		currentRoute.value = toLocation;
		handleScroll(toLocation, from, isPush, isFirstNavigation);
		markAsReady();
	}
	let removeHistoryListener;
	function setupListeners() {
		if (removeHistoryListener) return;
		removeHistoryListener = routerHistory.listen((to, _from, info) => {
			if (!router.listening) return;
			const toLocation = resolve(to);
			const shouldRedirect = handleRedirectRecord(toLocation);
			if (shouldRedirect) {
				pushWithRedirect(assign(shouldRedirect, {
					replace: true,
					force: true
				}), toLocation).catch(noop);
				return;
			}
			pendingLocation = toLocation;
			const from = currentRoute.value;
			if (isBrowser) saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
			navigate(toLocation, from).catch((error) => {
				if (isNavigationFailure(error, 12)) return error;
				if (isNavigationFailure(error, 2)) {
					pushWithRedirect(assign(locationAsObject(error.to), { force: true }), toLocation).then((failure) => {
						if (isNavigationFailure(failure, 20) && !info.delta && info.type === NavigationType.pop) routerHistory.go(-1, false);
					}).catch(noop);
					return Promise.reject();
				}
				if (info.delta) routerHistory.go(-info.delta, false);
				return triggerError(error, toLocation, from);
			}).then((failure) => {
				failure = failure || finalizeNavigation(toLocation, from, false);
				if (failure) {
					if (info.delta && !isNavigationFailure(failure, 8)) routerHistory.go(-info.delta, false);
					else if (info.type === NavigationType.pop && isNavigationFailure(failure, 20)) routerHistory.go(-1, false);
				}
				triggerAfterEach(toLocation, from, failure);
			}).catch(noop);
		});
	}
	let readyHandlers = useCallbacks();
	let errorListeners = useCallbacks();
	let ready;
	function triggerError(error, to, from) {
		markAsReady(error);
		const list = errorListeners.list();
		if (list.length) list.forEach((handler) => handler(error, to, from));
		else console.error(error);
		return Promise.reject(error);
	}
	function isReady() {
		if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
		return new Promise((resolve$1, reject) => {
			readyHandlers.add([resolve$1, reject]);
		});
	}
	function markAsReady(err) {
		if (!ready) {
			ready = !err;
			setupListeners();
			readyHandlers.list().forEach(([resolve$1, reject]) => err ? reject(err) : resolve$1());
			readyHandlers.reset();
		}
		return err;
	}
	function handleScroll(to, from, isPush, isFirstNavigation) {
		const { scrollBehavior } = options;
		if (!isBrowser || !scrollBehavior) return Promise.resolve();
		const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
		return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
	}
	const go = (delta) => routerHistory.go(delta);
	let started;
	const installedApps = /* @__PURE__ */ new Set();
	const router = {
		currentRoute,
		listening: true,
		addRoute,
		removeRoute,
		clearRoutes: matcher.clearRoutes,
		hasRoute,
		getRoutes,
		resolve,
		options,
		push,
		replace,
		go,
		back: () => go(-1),
		forward: () => go(1),
		beforeEach: beforeGuards.add,
		beforeResolve: beforeResolveGuards.add,
		afterEach: afterGuards.add,
		onError: errorListeners.add,
		isReady,
		install(app) {
			const router$1 = this;
			app.component("RouterLink", RouterLink);
			app.component("RouterView", RouterView);
			app.config.globalProperties.$router = router$1;
			Object.defineProperty(app.config.globalProperties, "$route", {
				enumerable: true,
				get: () => unref(currentRoute)
			});
			if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
				started = true;
				push(routerHistory.location).catch((err) => {});
			}
			const reactiveRoute = {};
			for (const key in START_LOCATION_NORMALIZED) Object.defineProperty(reactiveRoute, key, {
				get: () => currentRoute.value[key],
				enumerable: true
			});
			app.provide(routerKey, router$1);
			app.provide(routeLocationKey, shallowReactive(reactiveRoute));
			app.provide(routerViewLocationKey, currentRoute);
			const unmountApp = app.unmount;
			installedApps.add(app);
			app.unmount = function() {
				installedApps.delete(app);
				if (installedApps.size < 1) {
					pendingLocation = START_LOCATION_NORMALIZED;
					removeHistoryListener && removeHistoryListener();
					removeHistoryListener = null;
					currentRoute.value = START_LOCATION_NORMALIZED;
					started = false;
					ready = false;
				}
				unmountApp();
			};
		}
	};
	function runGuardQueue(guards) {
		return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
	}
	return router;
}
function extractChangingRecords(to, from) {
	const leavingRecords = [];
	const updatingRecords = [];
	const enteringRecords = [];
	const len = Math.max(from.matched.length, to.matched.length);
	for (let i$1 = 0; i$1 < len; i$1++) {
		const recordFrom = from.matched[i$1];
		if (recordFrom) if (to.matched.find((record) => isSameRouteRecord(record, recordFrom))) updatingRecords.push(recordFrom);
		else leavingRecords.push(recordFrom);
		const recordTo = to.matched[i$1];
		if (recordTo) {
			if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) enteringRecords.push(recordTo);
		}
	}
	return [
		leavingRecords,
		updatingRecords,
		enteringRecords
	];
}
function useRouter() {
	return inject(routerKey);
}
function useRoute(_name) {
	return inject(routeLocationKey);
}
var require_default$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	function getDefaultWhiteList$1() {
		var whiteList = {};
		whiteList["align-content"] = false;
		whiteList["align-items"] = false;
		whiteList["align-self"] = false;
		whiteList["alignment-adjust"] = false;
		whiteList["alignment-baseline"] = false;
		whiteList["all"] = false;
		whiteList["anchor-point"] = false;
		whiteList["animation"] = false;
		whiteList["animation-delay"] = false;
		whiteList["animation-direction"] = false;
		whiteList["animation-duration"] = false;
		whiteList["animation-fill-mode"] = false;
		whiteList["animation-iteration-count"] = false;
		whiteList["animation-name"] = false;
		whiteList["animation-play-state"] = false;
		whiteList["animation-timing-function"] = false;
		whiteList["azimuth"] = false;
		whiteList["backface-visibility"] = false;
		whiteList["background"] = true;
		whiteList["background-attachment"] = true;
		whiteList["background-clip"] = true;
		whiteList["background-color"] = true;
		whiteList["background-image"] = true;
		whiteList["background-origin"] = true;
		whiteList["background-position"] = true;
		whiteList["background-repeat"] = true;
		whiteList["background-size"] = true;
		whiteList["baseline-shift"] = false;
		whiteList["binding"] = false;
		whiteList["bleed"] = false;
		whiteList["bookmark-label"] = false;
		whiteList["bookmark-level"] = false;
		whiteList["bookmark-state"] = false;
		whiteList["border"] = true;
		whiteList["border-bottom"] = true;
		whiteList["border-bottom-color"] = true;
		whiteList["border-bottom-left-radius"] = true;
		whiteList["border-bottom-right-radius"] = true;
		whiteList["border-bottom-style"] = true;
		whiteList["border-bottom-width"] = true;
		whiteList["border-collapse"] = true;
		whiteList["border-color"] = true;
		whiteList["border-image"] = true;
		whiteList["border-image-outset"] = true;
		whiteList["border-image-repeat"] = true;
		whiteList["border-image-slice"] = true;
		whiteList["border-image-source"] = true;
		whiteList["border-image-width"] = true;
		whiteList["border-left"] = true;
		whiteList["border-left-color"] = true;
		whiteList["border-left-style"] = true;
		whiteList["border-left-width"] = true;
		whiteList["border-radius"] = true;
		whiteList["border-right"] = true;
		whiteList["border-right-color"] = true;
		whiteList["border-right-style"] = true;
		whiteList["border-right-width"] = true;
		whiteList["border-spacing"] = true;
		whiteList["border-style"] = true;
		whiteList["border-top"] = true;
		whiteList["border-top-color"] = true;
		whiteList["border-top-left-radius"] = true;
		whiteList["border-top-right-radius"] = true;
		whiteList["border-top-style"] = true;
		whiteList["border-top-width"] = true;
		whiteList["border-width"] = true;
		whiteList["bottom"] = false;
		whiteList["box-decoration-break"] = true;
		whiteList["box-shadow"] = true;
		whiteList["box-sizing"] = true;
		whiteList["box-snap"] = true;
		whiteList["box-suppress"] = true;
		whiteList["break-after"] = true;
		whiteList["break-before"] = true;
		whiteList["break-inside"] = true;
		whiteList["caption-side"] = false;
		whiteList["chains"] = false;
		whiteList["clear"] = true;
		whiteList["clip"] = false;
		whiteList["clip-path"] = false;
		whiteList["clip-rule"] = false;
		whiteList["color"] = true;
		whiteList["color-interpolation-filters"] = true;
		whiteList["column-count"] = false;
		whiteList["column-fill"] = false;
		whiteList["column-gap"] = false;
		whiteList["column-rule"] = false;
		whiteList["column-rule-color"] = false;
		whiteList["column-rule-style"] = false;
		whiteList["column-rule-width"] = false;
		whiteList["column-span"] = false;
		whiteList["column-width"] = false;
		whiteList["columns"] = false;
		whiteList["contain"] = false;
		whiteList["content"] = false;
		whiteList["counter-increment"] = false;
		whiteList["counter-reset"] = false;
		whiteList["counter-set"] = false;
		whiteList["crop"] = false;
		whiteList["cue"] = false;
		whiteList["cue-after"] = false;
		whiteList["cue-before"] = false;
		whiteList["cursor"] = false;
		whiteList["direction"] = false;
		whiteList["display"] = true;
		whiteList["display-inside"] = true;
		whiteList["display-list"] = true;
		whiteList["display-outside"] = true;
		whiteList["dominant-baseline"] = false;
		whiteList["elevation"] = false;
		whiteList["empty-cells"] = false;
		whiteList["filter"] = false;
		whiteList["flex"] = false;
		whiteList["flex-basis"] = false;
		whiteList["flex-direction"] = false;
		whiteList["flex-flow"] = false;
		whiteList["flex-grow"] = false;
		whiteList["flex-shrink"] = false;
		whiteList["flex-wrap"] = false;
		whiteList["float"] = false;
		whiteList["float-offset"] = false;
		whiteList["flood-color"] = false;
		whiteList["flood-opacity"] = false;
		whiteList["flow-from"] = false;
		whiteList["flow-into"] = false;
		whiteList["font"] = true;
		whiteList["font-family"] = true;
		whiteList["font-feature-settings"] = true;
		whiteList["font-kerning"] = true;
		whiteList["font-language-override"] = true;
		whiteList["font-size"] = true;
		whiteList["font-size-adjust"] = true;
		whiteList["font-stretch"] = true;
		whiteList["font-style"] = true;
		whiteList["font-synthesis"] = true;
		whiteList["font-variant"] = true;
		whiteList["font-variant-alternates"] = true;
		whiteList["font-variant-caps"] = true;
		whiteList["font-variant-east-asian"] = true;
		whiteList["font-variant-ligatures"] = true;
		whiteList["font-variant-numeric"] = true;
		whiteList["font-variant-position"] = true;
		whiteList["font-weight"] = true;
		whiteList["grid"] = false;
		whiteList["grid-area"] = false;
		whiteList["grid-auto-columns"] = false;
		whiteList["grid-auto-flow"] = false;
		whiteList["grid-auto-rows"] = false;
		whiteList["grid-column"] = false;
		whiteList["grid-column-end"] = false;
		whiteList["grid-column-start"] = false;
		whiteList["grid-row"] = false;
		whiteList["grid-row-end"] = false;
		whiteList["grid-row-start"] = false;
		whiteList["grid-template"] = false;
		whiteList["grid-template-areas"] = false;
		whiteList["grid-template-columns"] = false;
		whiteList["grid-template-rows"] = false;
		whiteList["hanging-punctuation"] = false;
		whiteList["height"] = true;
		whiteList["hyphens"] = false;
		whiteList["icon"] = false;
		whiteList["image-orientation"] = false;
		whiteList["image-resolution"] = false;
		whiteList["ime-mode"] = false;
		whiteList["initial-letters"] = false;
		whiteList["inline-box-align"] = false;
		whiteList["justify-content"] = false;
		whiteList["justify-items"] = false;
		whiteList["justify-self"] = false;
		whiteList["left"] = false;
		whiteList["letter-spacing"] = true;
		whiteList["lighting-color"] = true;
		whiteList["line-box-contain"] = false;
		whiteList["line-break"] = false;
		whiteList["line-grid"] = false;
		whiteList["line-height"] = false;
		whiteList["line-snap"] = false;
		whiteList["line-stacking"] = false;
		whiteList["line-stacking-ruby"] = false;
		whiteList["line-stacking-shift"] = false;
		whiteList["line-stacking-strategy"] = false;
		whiteList["list-style"] = true;
		whiteList["list-style-image"] = true;
		whiteList["list-style-position"] = true;
		whiteList["list-style-type"] = true;
		whiteList["margin"] = true;
		whiteList["margin-bottom"] = true;
		whiteList["margin-left"] = true;
		whiteList["margin-right"] = true;
		whiteList["margin-top"] = true;
		whiteList["marker-offset"] = false;
		whiteList["marker-side"] = false;
		whiteList["marks"] = false;
		whiteList["mask"] = false;
		whiteList["mask-box"] = false;
		whiteList["mask-box-outset"] = false;
		whiteList["mask-box-repeat"] = false;
		whiteList["mask-box-slice"] = false;
		whiteList["mask-box-source"] = false;
		whiteList["mask-box-width"] = false;
		whiteList["mask-clip"] = false;
		whiteList["mask-image"] = false;
		whiteList["mask-origin"] = false;
		whiteList["mask-position"] = false;
		whiteList["mask-repeat"] = false;
		whiteList["mask-size"] = false;
		whiteList["mask-source-type"] = false;
		whiteList["mask-type"] = false;
		whiteList["max-height"] = true;
		whiteList["max-lines"] = false;
		whiteList["max-width"] = true;
		whiteList["min-height"] = true;
		whiteList["min-width"] = true;
		whiteList["move-to"] = false;
		whiteList["nav-down"] = false;
		whiteList["nav-index"] = false;
		whiteList["nav-left"] = false;
		whiteList["nav-right"] = false;
		whiteList["nav-up"] = false;
		whiteList["object-fit"] = false;
		whiteList["object-position"] = false;
		whiteList["opacity"] = false;
		whiteList["order"] = false;
		whiteList["orphans"] = false;
		whiteList["outline"] = false;
		whiteList["outline-color"] = false;
		whiteList["outline-offset"] = false;
		whiteList["outline-style"] = false;
		whiteList["outline-width"] = false;
		whiteList["overflow"] = false;
		whiteList["overflow-wrap"] = false;
		whiteList["overflow-x"] = false;
		whiteList["overflow-y"] = false;
		whiteList["padding"] = true;
		whiteList["padding-bottom"] = true;
		whiteList["padding-left"] = true;
		whiteList["padding-right"] = true;
		whiteList["padding-top"] = true;
		whiteList["page"] = false;
		whiteList["page-break-after"] = false;
		whiteList["page-break-before"] = false;
		whiteList["page-break-inside"] = false;
		whiteList["page-policy"] = false;
		whiteList["pause"] = false;
		whiteList["pause-after"] = false;
		whiteList["pause-before"] = false;
		whiteList["perspective"] = false;
		whiteList["perspective-origin"] = false;
		whiteList["pitch"] = false;
		whiteList["pitch-range"] = false;
		whiteList["play-during"] = false;
		whiteList["position"] = false;
		whiteList["presentation-level"] = false;
		whiteList["quotes"] = false;
		whiteList["region-fragment"] = false;
		whiteList["resize"] = false;
		whiteList["rest"] = false;
		whiteList["rest-after"] = false;
		whiteList["rest-before"] = false;
		whiteList["richness"] = false;
		whiteList["right"] = false;
		whiteList["rotation"] = false;
		whiteList["rotation-point"] = false;
		whiteList["ruby-align"] = false;
		whiteList["ruby-merge"] = false;
		whiteList["ruby-position"] = false;
		whiteList["shape-image-threshold"] = false;
		whiteList["shape-outside"] = false;
		whiteList["shape-margin"] = false;
		whiteList["size"] = false;
		whiteList["speak"] = false;
		whiteList["speak-as"] = false;
		whiteList["speak-header"] = false;
		whiteList["speak-numeral"] = false;
		whiteList["speak-punctuation"] = false;
		whiteList["speech-rate"] = false;
		whiteList["stress"] = false;
		whiteList["string-set"] = false;
		whiteList["tab-size"] = false;
		whiteList["table-layout"] = false;
		whiteList["text-align"] = true;
		whiteList["text-align-last"] = true;
		whiteList["text-combine-upright"] = true;
		whiteList["text-decoration"] = true;
		whiteList["text-decoration-color"] = true;
		whiteList["text-decoration-line"] = true;
		whiteList["text-decoration-skip"] = true;
		whiteList["text-decoration-style"] = true;
		whiteList["text-emphasis"] = true;
		whiteList["text-emphasis-color"] = true;
		whiteList["text-emphasis-position"] = true;
		whiteList["text-emphasis-style"] = true;
		whiteList["text-height"] = true;
		whiteList["text-indent"] = true;
		whiteList["text-justify"] = true;
		whiteList["text-orientation"] = true;
		whiteList["text-overflow"] = true;
		whiteList["text-shadow"] = true;
		whiteList["text-space-collapse"] = true;
		whiteList["text-transform"] = true;
		whiteList["text-underline-position"] = true;
		whiteList["text-wrap"] = true;
		whiteList["top"] = false;
		whiteList["transform"] = false;
		whiteList["transform-origin"] = false;
		whiteList["transform-style"] = false;
		whiteList["transition"] = false;
		whiteList["transition-delay"] = false;
		whiteList["transition-duration"] = false;
		whiteList["transition-property"] = false;
		whiteList["transition-timing-function"] = false;
		whiteList["unicode-bidi"] = false;
		whiteList["vertical-align"] = false;
		whiteList["visibility"] = false;
		whiteList["voice-balance"] = false;
		whiteList["voice-duration"] = false;
		whiteList["voice-family"] = false;
		whiteList["voice-pitch"] = false;
		whiteList["voice-range"] = false;
		whiteList["voice-rate"] = false;
		whiteList["voice-stress"] = false;
		whiteList["voice-volume"] = false;
		whiteList["volume"] = false;
		whiteList["white-space"] = false;
		whiteList["widows"] = false;
		whiteList["width"] = true;
		whiteList["will-change"] = false;
		whiteList["word-break"] = true;
		whiteList["word-spacing"] = true;
		whiteList["word-wrap"] = true;
		whiteList["wrap-flow"] = false;
		whiteList["wrap-through"] = false;
		whiteList["writing-mode"] = false;
		whiteList["z-index"] = false;
		return whiteList;
	}
	function onAttr(name, value, options) {}
	function onIgnoreAttr(name, value, options) {}
	var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/gim;
	function safeAttrValue$1(name, value) {
		if (REGEXP_URL_JAVASCRIPT.test(value)) return "";
		return value;
	}
	exports.whiteList = getDefaultWhiteList$1();
	exports.getDefaultWhiteList = getDefaultWhiteList$1;
	exports.onAttr = onAttr;
	exports.onIgnoreAttr = onIgnoreAttr;
	exports.safeAttrValue = safeAttrValue$1;
}));
var require_util$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		indexOf: function(arr, item) {
			var i$1, j;
			if (Array.prototype.indexOf) return arr.indexOf(item);
			for (i$1 = 0, j = arr.length; i$1 < j; i$1++) if (arr[i$1] === item) return i$1;
			return -1;
		},
		forEach: function(arr, fn, scope) {
			var i$1, j;
			if (Array.prototype.forEach) return arr.forEach(fn, scope);
			for (i$1 = 0, j = arr.length; i$1 < j; i$1++) fn.call(scope, arr[i$1], i$1, arr);
		},
		trim: function(str) {
			if (String.prototype.trim) return str.trim();
			return str.replace(/(^\s*)|(\s*$)/g, "");
		},
		trimRight: function(str) {
			if (String.prototype.trimRight) return str.trimRight();
			return str.replace(/(\s*$)/g, "");
		}
	};
}));
var require_parser$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var _$3 = require_util$1();
	function parseStyle$1(css, onAttr$1) {
		css = _$3.trimRight(css);
		if (css[css.length - 1] !== ";") css += ";";
		var cssLength = css.length;
		var isParenthesisOpen = false;
		var lastPos = 0;
		var i$1 = 0;
		var retCSS = "";
		function addNewAttr() {
			if (!isParenthesisOpen) {
				var source = _$3.trim(css.slice(lastPos, i$1));
				var j$1 = source.indexOf(":");
				if (j$1 !== -1) {
					var name = _$3.trim(source.slice(0, j$1));
					var value = _$3.trim(source.slice(j$1 + 1));
					if (name) {
						var ret = onAttr$1(lastPos, retCSS.length, name, value, source);
						if (ret) retCSS += ret + "; ";
					}
				}
			}
			lastPos = i$1 + 1;
		}
		for (; i$1 < cssLength; i$1++) {
			var c = css[i$1];
			if (c === "/" && css[i$1 + 1] === "*") {
				var j = css.indexOf("*/", i$1 + 2);
				if (j === -1) break;
				i$1 = j + 1;
				lastPos = i$1 + 1;
				isParenthesisOpen = false;
			} else if (c === "(") isParenthesisOpen = true;
			else if (c === ")") isParenthesisOpen = false;
			else if (c === ";") if (isParenthesisOpen) {} else addNewAttr();
			else if (c === "\n") addNewAttr();
		}
		return _$3.trim(retCSS);
	}
	module.exports = parseStyle$1;
}));
var require_css = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var DEFAULT$3 = require_default$1();
	var parseStyle = require_parser$1();
	require_util$1();
	function isNull$1(obj) {
		return obj === void 0 || obj === null;
	}
	function shallowCopyObject$1(obj) {
		var ret = {};
		for (var i$1 in obj) ret[i$1] = obj[i$1];
		return ret;
	}
	function FilterCSS$3(options) {
		options = shallowCopyObject$1(options || {});
		options.whiteList = options.whiteList || DEFAULT$3.whiteList;
		options.onAttr = options.onAttr || DEFAULT$3.onAttr;
		options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT$3.onIgnoreAttr;
		options.safeAttrValue = options.safeAttrValue || DEFAULT$3.safeAttrValue;
		this.options = options;
	}
	FilterCSS$3.prototype.process = function(css) {
		css = css || "";
		css = css.toString();
		if (!css) return "";
		var options = this.options;
		var whiteList = options.whiteList;
		var onAttr$1 = options.onAttr;
		var onIgnoreAttr$1 = options.onIgnoreAttr;
		var safeAttrValue$2 = options.safeAttrValue;
		return parseStyle(css, function(sourcePosition, position, name, value, source) {
			var check = whiteList[name];
			var isWhite = false;
			if (check === true) isWhite = check;
			else if (typeof check === "function") isWhite = check(value);
			else if (check instanceof RegExp) isWhite = check.test(value);
			if (isWhite !== true) isWhite = false;
			value = safeAttrValue$2(name, value);
			if (!value) return;
			var opts = {
				position,
				sourcePosition,
				source,
				isWhite
			};
			if (isWhite) {
				var ret = onAttr$1(name, value, opts);
				if (isNull$1(ret)) return name + ":" + value;
				else return ret;
			} else {
				var ret = onIgnoreAttr$1(name, value, opts);
				if (!isNull$1(ret)) return ret;
			}
		});
	};
	module.exports = FilterCSS$3;
}));
var require_lib$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var DEFAULT$2 = require_default$1();
	var FilterCSS$2 = require_css();
	function filterCSS(html, options) {
		return new FilterCSS$2(options).process(html);
	}
	exports = module.exports = filterCSS;
	exports.FilterCSS = FilterCSS$2;
	for (var i in DEFAULT$2) exports[i] = DEFAULT$2[i];
	if (typeof window !== "undefined") window.filterCSS = module.exports;
}));
var require_util = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		indexOf: function(arr, item) {
			var i$1, j;
			if (Array.prototype.indexOf) return arr.indexOf(item);
			for (i$1 = 0, j = arr.length; i$1 < j; i$1++) if (arr[i$1] === item) return i$1;
			return -1;
		},
		forEach: function(arr, fn, scope) {
			var i$1, j;
			if (Array.prototype.forEach) return arr.forEach(fn, scope);
			for (i$1 = 0, j = arr.length; i$1 < j; i$1++) fn.call(scope, arr[i$1], i$1, arr);
		},
		trim: function(str) {
			if (String.prototype.trim) return str.trim();
			return str.replace(/(^\s*)|(\s*$)/g, "");
		},
		spaceIndex: function(str) {
			var match = /\s|\n|\t/.exec(str);
			return match ? match.index : -1;
		}
	};
}));
var require_default = /* @__PURE__ */ __commonJSMin(((exports) => {
	var FilterCSS$1 = require_lib$1().FilterCSS;
	var getDefaultCSSWhiteList = require_lib$1().getDefaultWhiteList;
	var _$2 = require_util();
	function getDefaultWhiteList() {
		return {
			a: [
				"target",
				"href",
				"title"
			],
			abbr: ["title"],
			address: [],
			area: [
				"shape",
				"coords",
				"href",
				"alt"
			],
			article: [],
			aside: [],
			audio: [
				"autoplay",
				"controls",
				"crossorigin",
				"loop",
				"muted",
				"preload",
				"src"
			],
			b: [],
			bdi: ["dir"],
			bdo: ["dir"],
			big: [],
			blockquote: ["cite"],
			br: [],
			caption: [],
			center: [],
			cite: [],
			code: [],
			col: [
				"align",
				"valign",
				"span",
				"width"
			],
			colgroup: [
				"align",
				"valign",
				"span",
				"width"
			],
			dd: [],
			del: ["datetime"],
			details: ["open"],
			div: [],
			dl: [],
			dt: [],
			em: [],
			figcaption: [],
			figure: [],
			font: [
				"color",
				"size",
				"face"
			],
			footer: [],
			h1: [],
			h2: [],
			h3: [],
			h4: [],
			h5: [],
			h6: [],
			header: [],
			hr: [],
			i: [],
			img: [
				"src",
				"alt",
				"title",
				"width",
				"height",
				"loading"
			],
			ins: ["datetime"],
			kbd: [],
			li: [],
			mark: [],
			nav: [],
			ol: [],
			p: [],
			pre: [],
			s: [],
			section: [],
			small: [],
			span: [],
			sub: [],
			summary: [],
			sup: [],
			strong: [],
			strike: [],
			table: [
				"width",
				"border",
				"align",
				"valign"
			],
			tbody: ["align", "valign"],
			td: [
				"width",
				"rowspan",
				"colspan",
				"align",
				"valign"
			],
			tfoot: ["align", "valign"],
			th: [
				"width",
				"rowspan",
				"colspan",
				"align",
				"valign"
			],
			thead: ["align", "valign"],
			tr: [
				"rowspan",
				"align",
				"valign"
			],
			tt: [],
			u: [],
			ul: [],
			video: [
				"autoplay",
				"controls",
				"crossorigin",
				"loop",
				"muted",
				"playsinline",
				"poster",
				"preload",
				"src",
				"height",
				"width"
			]
		};
	}
	var defaultCSSFilter = new FilterCSS$1();
	function onTag(tag, html, options) {}
	function onIgnoreTag(tag, html, options) {}
	function onTagAttr(tag, name, value) {}
	function onIgnoreTagAttr(tag, name, value) {}
	function escapeHtml(html) {
		return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
	}
	function safeAttrValue(tag, name, value, cssFilter) {
		value = friendlyAttrValue(value);
		if (name === "href" || name === "src") {
			value = _$2.trim(value);
			if (value === "#") return "#";
			if (!(value.substr(0, 7) === "http://" || value.substr(0, 8) === "https://" || value.substr(0, 7) === "mailto:" || value.substr(0, 4) === "tel:" || value.substr(0, 11) === "data:image/" || value.substr(0, 6) === "ftp://" || value.substr(0, 2) === "./" || value.substr(0, 3) === "../" || value[0] === "#" || value[0] === "/")) return "";
		} else if (name === "background") {
			REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
			if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) return "";
		} else if (name === "style") {
			REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
			if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) return "";
			REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
			if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
				REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
				if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) return "";
			}
			if (cssFilter !== false) {
				cssFilter = cssFilter || defaultCSSFilter;
				value = cssFilter.process(value);
			}
		}
		value = escapeAttrValue(value);
		return value;
	}
	var REGEXP_LT = /</g;
	var REGEXP_GT = />/g;
	var REGEXP_QUOTE = /"/g;
	var REGEXP_QUOTE_2 = /&quot;/g;
	var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
	var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
	var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
	var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi;
	var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
	var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;
	function escapeQuote(str) {
		return str.replace(REGEXP_QUOTE, "&quot;");
	}
	function unescapeQuote(str) {
		return str.replace(REGEXP_QUOTE_2, "\"");
	}
	function escapeHtmlEntities(str) {
		return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str$1, code) {
			return code[0] === "x" || code[0] === "X" ? String.fromCharCode(parseInt(code.substr(1), 16)) : String.fromCharCode(parseInt(code, 10));
		});
	}
	function escapeDangerHtml5Entities(str) {
		return str.replace(REGEXP_ATTR_VALUE_COLON, ":").replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
	}
	function clearNonPrintableCharacter(str) {
		var str2 = "";
		for (var i$1 = 0, len = str.length; i$1 < len; i$1++) str2 += str.charCodeAt(i$1) < 32 ? " " : str.charAt(i$1);
		return _$2.trim(str2);
	}
	function friendlyAttrValue(str) {
		str = unescapeQuote(str);
		str = escapeHtmlEntities(str);
		str = escapeDangerHtml5Entities(str);
		str = clearNonPrintableCharacter(str);
		return str;
	}
	function escapeAttrValue(str) {
		str = escapeQuote(str);
		str = escapeHtml(str);
		return str;
	}
	function onIgnoreTagStripAll() {
		return "";
	}
	function StripTagBody(tags, next) {
		if (typeof next !== "function") next = function() {};
		var isRemoveAllTag = !Array.isArray(tags);
		function isRemoveTag(tag) {
			if (isRemoveAllTag) return true;
			return _$2.indexOf(tags, tag) !== -1;
		}
		var removeList = [];
		var posStart = false;
		return {
			onIgnoreTag: function(tag, html, options) {
				if (isRemoveTag(tag)) if (options.isClosing) {
					var ret = "[/removed]";
					var end = options.position + ret.length;
					removeList.push([posStart !== false ? posStart : options.position, end]);
					posStart = false;
					return ret;
				} else {
					if (!posStart) posStart = options.position;
					return "[removed]";
				}
				else return next(tag, html, options);
			},
			remove: function(html) {
				var rethtml = "";
				var lastPos = 0;
				_$2.forEach(removeList, function(pos) {
					rethtml += html.slice(lastPos, pos[0]);
					lastPos = pos[1];
				});
				rethtml += html.slice(lastPos);
				return rethtml;
			}
		};
	}
	function stripCommentTag(html) {
		var retHtml = "";
		var lastPos = 0;
		while (lastPos < html.length) {
			var i$1 = html.indexOf("<!--", lastPos);
			if (i$1 === -1) {
				retHtml += html.slice(lastPos);
				break;
			}
			retHtml += html.slice(lastPos, i$1);
			var j = html.indexOf("-->", i$1);
			if (j === -1) break;
			lastPos = j + 3;
		}
		return retHtml;
	}
	function stripBlankChar(html) {
		var chars = html.split("");
		chars = chars.filter(function(char) {
			var c = char.charCodeAt(0);
			if (c === 127) return false;
			if (c <= 31) {
				if (c === 10 || c === 13) return true;
				return false;
			}
			return true;
		});
		return chars.join("");
	}
	exports.whiteList = getDefaultWhiteList();
	exports.getDefaultWhiteList = getDefaultWhiteList;
	exports.onTag = onTag;
	exports.onIgnoreTag = onIgnoreTag;
	exports.onTagAttr = onTagAttr;
	exports.onIgnoreTagAttr = onIgnoreTagAttr;
	exports.safeAttrValue = safeAttrValue;
	exports.escapeHtml = escapeHtml;
	exports.escapeQuote = escapeQuote;
	exports.unescapeQuote = unescapeQuote;
	exports.escapeHtmlEntities = escapeHtmlEntities;
	exports.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
	exports.clearNonPrintableCharacter = clearNonPrintableCharacter;
	exports.friendlyAttrValue = friendlyAttrValue;
	exports.escapeAttrValue = escapeAttrValue;
	exports.onIgnoreTagStripAll = onIgnoreTagStripAll;
	exports.StripTagBody = StripTagBody;
	exports.stripCommentTag = stripCommentTag;
	exports.stripBlankChar = stripBlankChar;
	exports.attributeWrapSign = "\"";
	exports.cssFilter = defaultCSSFilter;
	exports.getDefaultCSSWhiteList = getDefaultCSSWhiteList;
}));
var require_parser = /* @__PURE__ */ __commonJSMin(((exports) => {
	var _$1 = require_util();
	function getTagName(html) {
		var i$1 = _$1.spaceIndex(html);
		var tagName;
		if (i$1 === -1) tagName = html.slice(1, -1);
		else tagName = html.slice(1, i$1 + 1);
		tagName = _$1.trim(tagName).toLowerCase();
		if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
		if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
		return tagName;
	}
	function isClosing(html) {
		return html.slice(0, 2) === "</";
	}
	function parseTag$1(html, onTag$1, escapeHtml$1) {
		var rethtml = "";
		var lastPos = 0;
		var tagStart = false;
		var quoteStart = false;
		var currentPos = 0;
		var len = html.length;
		var currentTagName = "";
		var currentHtml = "";
		chariterator: for (currentPos = 0; currentPos < len; currentPos++) {
			var c = html.charAt(currentPos);
			if (tagStart === false) {
				if (c === "<") {
					tagStart = currentPos;
					continue;
				}
			} else if (quoteStart === false) {
				if (c === "<") {
					rethtml += escapeHtml$1(html.slice(lastPos, currentPos));
					tagStart = currentPos;
					lastPos = currentPos;
					continue;
				}
				if (c === ">" || currentPos === len - 1) {
					rethtml += escapeHtml$1(html.slice(lastPos, tagStart));
					currentHtml = html.slice(tagStart, currentPos + 1);
					currentTagName = getTagName(currentHtml);
					rethtml += onTag$1(tagStart, rethtml.length, currentTagName, currentHtml, isClosing(currentHtml));
					lastPos = currentPos + 1;
					tagStart = false;
					continue;
				}
				if (c === "\"" || c === "'") {
					var i$1 = 1;
					var ic = html.charAt(currentPos - i$1);
					while (ic.trim() === "" || ic === "=") {
						if (ic === "=") {
							quoteStart = c;
							continue chariterator;
						}
						ic = html.charAt(currentPos - ++i$1);
					}
				}
			} else if (c === quoteStart) {
				quoteStart = false;
				continue;
			}
		}
		if (lastPos < len) rethtml += escapeHtml$1(html.substr(lastPos));
		return rethtml;
	}
	var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9\\_:.-]/gim;
	function parseAttr$1(html, onAttr$1) {
		var lastPos = 0;
		var lastMarkPos = 0;
		var retAttrs = [];
		var tmpName = false;
		var len = html.length;
		function addAttr(name, value) {
			name = _$1.trim(name);
			name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
			if (name.length < 1) return;
			var ret = onAttr$1(name, value || "");
			if (ret) retAttrs.push(ret);
		}
		for (var i$1 = 0; i$1 < len; i$1++) {
			var c = html.charAt(i$1);
			var v, j;
			if (tmpName === false && c === "=") {
				tmpName = html.slice(lastPos, i$1);
				lastPos = i$1 + 1;
				lastMarkPos = html.charAt(lastPos) === "\"" || html.charAt(lastPos) === "'" ? lastPos : findNextQuotationMark(html, i$1 + 1);
				continue;
			}
			if (tmpName !== false) {
				if (i$1 === lastMarkPos) {
					j = html.indexOf(c, i$1 + 1);
					if (j === -1) break;
					else {
						v = _$1.trim(html.slice(lastMarkPos + 1, j));
						addAttr(tmpName, v);
						tmpName = false;
						i$1 = j;
						lastPos = i$1 + 1;
						continue;
					}
				}
			}
			if (/\s|\n|\t/.test(c)) {
				html = html.replace(/\s|\n|\t/g, " ");
				if (tmpName === false) {
					j = findNextEqual(html, i$1);
					if (j === -1) {
						v = _$1.trim(html.slice(lastPos, i$1));
						addAttr(v);
						tmpName = false;
						lastPos = i$1 + 1;
						continue;
					} else {
						i$1 = j - 1;
						continue;
					}
				} else {
					j = findBeforeEqual(html, i$1 - 1);
					if (j === -1) {
						v = _$1.trim(html.slice(lastPos, i$1));
						v = stripQuoteWrap(v);
						addAttr(tmpName, v);
						tmpName = false;
						lastPos = i$1 + 1;
						continue;
					} else continue;
				}
			}
		}
		if (lastPos < html.length) if (tmpName === false) addAttr(html.slice(lastPos));
		else addAttr(tmpName, stripQuoteWrap(_$1.trim(html.slice(lastPos))));
		return _$1.trim(retAttrs.join(" "));
	}
	function findNextEqual(str, i$1) {
		for (; i$1 < str.length; i$1++) {
			var c = str[i$1];
			if (c === " ") continue;
			if (c === "=") return i$1;
			return -1;
		}
	}
	function findNextQuotationMark(str, i$1) {
		for (; i$1 < str.length; i$1++) {
			var c = str[i$1];
			if (c === " ") continue;
			if (c === "'" || c === "\"") return i$1;
			return -1;
		}
	}
	function findBeforeEqual(str, i$1) {
		for (; i$1 > 0; i$1--) {
			var c = str[i$1];
			if (c === " ") continue;
			if (c === "=") return i$1;
			return -1;
		}
	}
	function isQuoteWrapString(text) {
		if (text[0] === "\"" && text[text.length - 1] === "\"" || text[0] === "'" && text[text.length - 1] === "'") return true;
		else return false;
	}
	function stripQuoteWrap(text) {
		if (isQuoteWrapString(text)) return text.substr(1, text.length - 2);
		else return text;
	}
	exports.parseTag = parseTag$1;
	exports.parseAttr = parseAttr$1;
}));
var require_xss = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var FilterCSS = require_lib$1().FilterCSS;
	var DEFAULT$1 = require_default();
	var parser$1 = require_parser();
	var parseTag = parser$1.parseTag;
	var parseAttr = parser$1.parseAttr;
	var _ = require_util();
	function isNull(obj) {
		return obj === void 0 || obj === null;
	}
	function getAttrs(html) {
		var i$1 = _.spaceIndex(html);
		if (i$1 === -1) return {
			html: "",
			closing: html[html.length - 2] === "/"
		};
		html = _.trim(html.slice(i$1 + 1, -1));
		var isClosing$1 = html[html.length - 1] === "/";
		if (isClosing$1) html = _.trim(html.slice(0, -1));
		return {
			html,
			closing: isClosing$1
		};
	}
	function shallowCopyObject(obj) {
		var ret = {};
		for (var i$1 in obj) ret[i$1] = obj[i$1];
		return ret;
	}
	function keysToLowerCase(obj) {
		var ret = {};
		for (var i$1 in obj) if (Array.isArray(obj[i$1])) ret[i$1.toLowerCase()] = obj[i$1].map(function(item) {
			return item.toLowerCase();
		});
		else ret[i$1.toLowerCase()] = obj[i$1];
		return ret;
	}
	function FilterXSS$1(options) {
		options = shallowCopyObject(options || {});
		if (options.stripIgnoreTag) {
			if (options.onIgnoreTag) console.error("Notes: cannot use these two options \"stripIgnoreTag\" and \"onIgnoreTag\" at the same time");
			options.onIgnoreTag = DEFAULT$1.onIgnoreTagStripAll;
		}
		if (options.whiteList || options.allowList) options.whiteList = keysToLowerCase(options.whiteList || options.allowList);
		else options.whiteList = DEFAULT$1.whiteList;
		this.attributeWrapSign = options.singleQuotedAttributeValue === true ? "'" : DEFAULT$1.attributeWrapSign;
		options.onTag = options.onTag || DEFAULT$1.onTag;
		options.onTagAttr = options.onTagAttr || DEFAULT$1.onTagAttr;
		options.onIgnoreTag = options.onIgnoreTag || DEFAULT$1.onIgnoreTag;
		options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT$1.onIgnoreTagAttr;
		options.safeAttrValue = options.safeAttrValue || DEFAULT$1.safeAttrValue;
		options.escapeHtml = options.escapeHtml || DEFAULT$1.escapeHtml;
		this.options = options;
		if (options.css === false) this.cssFilter = false;
		else {
			options.css = options.css || {};
			this.cssFilter = new FilterCSS(options.css);
		}
	}
	FilterXSS$1.prototype.process = function(html) {
		html = html || "";
		html = html.toString();
		if (!html) return "";
		var me = this;
		var options = me.options;
		var whiteList = options.whiteList;
		var onTag$1 = options.onTag;
		var onIgnoreTag$1 = options.onIgnoreTag;
		var onTagAttr$1 = options.onTagAttr;
		var onIgnoreTagAttr$1 = options.onIgnoreTagAttr;
		var safeAttrValue$2 = options.safeAttrValue;
		var escapeHtml$1 = options.escapeHtml;
		var attributeWrapSign = me.attributeWrapSign;
		var cssFilter = me.cssFilter;
		if (options.stripBlankChar) html = DEFAULT$1.stripBlankChar(html);
		if (!options.allowCommentTag) html = DEFAULT$1.stripCommentTag(html);
		var stripIgnoreTagBody = false;
		if (options.stripIgnoreTagBody) {
			stripIgnoreTagBody = DEFAULT$1.StripTagBody(options.stripIgnoreTagBody, onIgnoreTag$1);
			onIgnoreTag$1 = stripIgnoreTagBody.onIgnoreTag;
		}
		var retHtml = parseTag(html, function(sourcePosition, position, tag, html$1, isClosing$1) {
			var info = {
				sourcePosition,
				position,
				isClosing: isClosing$1,
				isWhite: Object.prototype.hasOwnProperty.call(whiteList, tag)
			};
			var ret = onTag$1(tag, html$1, info);
			if (!isNull(ret)) return ret;
			if (info.isWhite) {
				if (info.isClosing) return "</" + tag + ">";
				var attrs = getAttrs(html$1);
				var whiteAttrList = whiteList[tag];
				var attrsHtml = parseAttr(attrs.html, function(name, value) {
					var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
					var ret$1 = onTagAttr$1(tag, name, value, isWhiteAttr);
					if (!isNull(ret$1)) return ret$1;
					if (isWhiteAttr) {
						value = safeAttrValue$2(tag, name, value, cssFilter);
						if (value) return name + "=" + attributeWrapSign + value + attributeWrapSign;
						else return name;
					} else {
						ret$1 = onIgnoreTagAttr$1(tag, name, value, isWhiteAttr);
						if (!isNull(ret$1)) return ret$1;
						return;
					}
				});
				html$1 = "<" + tag;
				if (attrsHtml) html$1 += " " + attrsHtml;
				if (attrs.closing) html$1 += " /";
				html$1 += ">";
				return html$1;
			} else {
				ret = onIgnoreTag$1(tag, html$1, info);
				if (!isNull(ret)) return ret;
				return escapeHtml$1(html$1);
			}
		}, escapeHtml$1);
		if (stripIgnoreTagBody) retHtml = stripIgnoreTagBody.remove(retHtml);
		return retHtml;
	};
	module.exports = FilterXSS$1;
}));
var require_lib = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var DEFAULT = require_default();
	var parser = require_parser();
	var FilterXSS = require_xss();
	function filterXSS(html, options) {
		return new FilterXSS(options).process(html);
	}
	exports = module.exports = filterXSS;
	exports.filterXSS = filterXSS;
	exports.FilterXSS = FilterXSS;
	(function() {
		for (var i$1 in DEFAULT) exports[i$1] = DEFAULT[i$1];
		for (var j in parser) exports[j] = parser[j];
	})();
	if (typeof window !== "undefined") window.filterXSS = module.exports;
	function isWorkerEnv() {
		return typeof self !== "undefined" && typeof DedicatedWorkerGlobalScope !== "undefined" && self instanceof DedicatedWorkerGlobalScope;
	}
	if (isWorkerEnv()) self.filterXSS = module.exports;
}));
var require_isSymbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag(), isObjectLike = require_isObjectLike();
	var symbolTag = "[object Symbol]";
	function isSymbol$3(value) {
		return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
	}
	module.exports = isSymbol$3;
}));
var require__isKey = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isArray$2 = require_isArray(), isSymbol$2 = require_isSymbol();
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
	function isKey$1(value, object) {
		if (isArray$2(value)) return false;
		var type = typeof value;
		if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$2(value)) return true;
		return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
	}
	module.exports = isKey$1;
}));
var require_memoize = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var MapCache = require__MapCache();
	var FUNC_ERROR_TEXT = "Expected a function";
	function memoize$1(func, resolver) {
		if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
		var memoized = function() {
			var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
			if (cache.has(key)) return cache.get(key);
			var result = func.apply(this, args);
			memoized.cache = cache.set(key, result) || cache;
			return result;
		};
		memoized.cache = new (memoize$1.Cache || MapCache)();
		return memoized;
	}
	memoize$1.Cache = MapCache;
	module.exports = memoize$1;
}));
var require__memoizeCapped = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var memoize = require_memoize();
	var MAX_MEMOIZE_SIZE = 500;
	function memoizeCapped$1(func) {
		var result = memoize(func, function(key) {
			if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
			return key;
		});
		var cache = result.cache;
		return result;
	}
	module.exports = memoizeCapped$1;
}));
var require__stringToPath = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var memoizeCapped = require__memoizeCapped();
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	var reEscapeChar = /\\(\\)?/g;
	module.exports = memoizeCapped(function(string) {
		var result = [];
		if (string.charCodeAt(0) === 46) result.push("");
		string.replace(rePropName, function(match, number, quote, subString) {
			result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
		});
		return result;
	});
}));
var require__arrayMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function arrayMap$1(array, iteratee) {
		var index = -1, length = array == null ? 0 : array.length, result = Array(length);
		while (++index < length) result[index] = iteratee(array[index], index, array);
		return result;
	}
	module.exports = arrayMap$1;
}));
var require__baseToString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol$1 = require__Symbol(), arrayMap = require__arrayMap(), isArray$1 = require_isArray(), isSymbol$1 = require_isSymbol();
	var INFINITY$1 = Infinity;
	var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
	function baseToString$1(value) {
		if (typeof value == "string") return value;
		if (isArray$1(value)) return arrayMap(value, baseToString$1) + "";
		if (isSymbol$1(value)) return symbolToString ? symbolToString.call(value) : "";
		var result = value + "";
		return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
	}
	module.exports = baseToString$1;
}));
var require_toString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseToString = require__baseToString();
	function toString$1(value) {
		return value == null ? "" : baseToString(value);
	}
	module.exports = toString$1;
}));
var require__castPath = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isArray = require_isArray(), isKey = require__isKey(), stringToPath = require__stringToPath(), toString = require_toString();
	function castPath$1(value, object) {
		if (isArray(value)) return value;
		return isKey(value, object) ? [value] : stringToPath(toString(value));
	}
	module.exports = castPath$1;
}));
var require__toKey = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isSymbol = require_isSymbol();
	var INFINITY = Infinity;
	function toKey$1(value) {
		if (typeof value == "string" || isSymbol(value)) return value;
		var result = value + "";
		return result == "0" && 1 / value == -INFINITY ? "-0" : result;
	}
	module.exports = toKey$1;
}));
var require__baseGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var castPath = require__castPath(), toKey = require__toKey();
	function baseGet$1(object, path) {
		path = castPath(path, object);
		var index = 0, length = path.length;
		while (object != null && index < length) object = object[toKey(path[index++])];
		return index && index == length ? object : void 0;
	}
	module.exports = baseGet$1;
}));
var require_get = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGet = require__baseGet();
	function get(object, path, defaultValue) {
		var result = object == null ? void 0 : baseGet(object, path);
		return result === void 0 ? defaultValue : result;
	}
	module.exports = get;
}));
const truncate = (text, length = 30) => text.length > length ? text.slice(0, length) + "..." : text;
function truncateBeforeLast(text, maxLength) {
	const chars = [];
	const segmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
	for (const { segment } of segmenter.segment(text)) chars.push(segment);
	if (chars.length <= maxLength) return text;
	const lastWordIndex = chars.findLastIndex((ch) => ch.match(/^\s+$/)) + 1;
	const lastWord = chars.slice(lastWordIndex);
	const ellipsis = "…";
	const ellipsisLength = 1;
	if (lastWord.length < 15) {
		const charsToRemove = chars.length - maxLength + ellipsisLength;
		const indexBeforeLastWord = lastWordIndex;
		const keepLength = indexBeforeLastWord - charsToRemove;
		if (keepLength > 0) return chars.slice(0, keepLength).join("") + ellipsis + chars.slice(indexBeforeLastWord).join("");
	}
	return chars.slice(0, maxLength - 5 - ellipsisLength).join("") + ellipsis + chars.slice(-5).join("");
}
export { get_default as $, useLocale as A, useWindowFocus as At, removeClass as B, useGlobalConfig as C, _freeGlobal_default as Ct, defaultNamespace as D, useDocumentVisibility as Dt, useZIndex as E, unrefElement as Et, definePropType as F, useTimeoutFn as Ft, escapeStringRegexp as G, throwError as H, addClass as I, isEmpty as J, isBoolean as K, addUnit as L, componentSizes as M, isClient as Mt, buildProp as N, isIOS as Nt, useGetDerivedNamespace as O, useEventListener as Ot, buildProps as P, tryOnScopeDispose as Pt, fromPairs_default as Q, getStyle as R, useGlobalComponentSettings as S, _root_default as St, useSizeProp as T, onClickOutside as Tt, getProp as U, debugWarn as V, capitalize$1 as W, isUndefined as X, isNumber as Y, _baseSet_default as Z, isNavigationFailure as _, _arrayMap_default as _t, require__toKey as a, _ListCache_default as at, useRouter as b, _baseGetTag_default as bt, require__arrayMap as c, eq_default as ct, require_isSymbol as d, _defineProperty_default as dt, _baseGet_default as et, require_lib as f, _getNative_default as ft, createWebHistory as g, isArray_default as gt, createRouter as h, isObject_default as ht, require__baseGet as i, _Map_default as it, componentSizeMap as j, computedEager as jt, useNamespace as k, useResizeObserver as kt, require_memoize as l, _baseAssignValue_default as lt, RouterView as m, isFunction_default as mt, truncateBeforeLast as n, _castPath_default as nt, require__castPath as o, _isKey_default as ot, RouterLink as p, _toSource_default as pt, isElement as q, require_get as r, _MapCache_default as rt, require_toString as s, _assignValue_default as st, truncate as t, _toKey_default as tt, require__isKey as u, _isIndex_default as ut, onBeforeRouteLeave as v, isSymbol_default as vt, useGlobalSize as w, isFirefox as wt, createEventBus as x, _Symbol_default as xt, useRoute as y, isObjectLike_default as yt, hasClass as z };
