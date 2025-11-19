import { o as __toESM, t as __commonJSMin } from "./chunk-6z4oVpB-.js";
import { $ as onUpdated, $t as hasOwn, C as computed, D as createElementBlock, E as createCommentVNode, F as getCurrentInstance, G as nextTick, Gt as unref, Ht as toRefs, It as ref, J as onBeforeUnmount, L as h, M as createVNode, P as defineComponent, Q as onUnmounted, Sn as toDisplayString, T as createBlock, Z as onMounted, _ as Fragment, _n as normalizeClass, _t as watch, at as renderSlot, bt as withCtx, cn as isObject, et as openBlock, g as Comment, it as renderList, j as createTextVNode, jt as isRef, nn as isArray, nt as provide, ot as resolveComponent, p as vShow, pn as isString, q as onBeforeMount, st as resolveDirective, tn as init_shared_esm_bundler, vt as watchEffect, w as createBaseVNode, xt as withDirectives, yn as normalizeStyle, z as inject } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { An as _overRest_default, Cn as _overArg_default, Dn as isArguments_default, En as isBuffer_default, Gt as ElTooltip, Mn as identity_default, On as _isPrototype_default, Sn as keys_default, Tn as isTypedArray_default, Ut as ClickOutside, Vt as ElCheckbox, Yt as ElScrollbar, _n as _baseIteratee_default, en as useFormSize, gn as debounce_default, jn as _setToString_default, kn as isArrayLike_default, rn as yn, tn as useDelayedToggle, vn as _Uint8Array_default, wn as _arrayLikeKeys_default, xn as _baseFlatten_default, yn as _Stack_default } from "./src-BmrdBtCN.js";
import { $ as get_default, A as useLocale, B as removeClass, E as useZIndex, H as throwError, I as addClass, K as isBoolean, Mt as isClient, Ot as useEventListener, St as _root_default, T as useSizeProp, U as getProp, V as debugWarn, X as isUndefined, Y as isNumber, _t as _arrayMap_default, bt as _baseGetTag_default, ct as eq_default, gt as isArray_default, ht as isObject_default, k as useNamespace, kt as useResizeObserver, lt as _baseAssignValue_default, mt as isFunction_default, q as isElement, st as _assignValue_default, ut as _isIndex_default, yt as isObjectLike_default, z as hasClass } from "./truncate-1c7Iwk7N.js";
import { g as arrow_up_default, h as arrow_right_default, i as withInstall, n as _export_sfc, p as arrow_down_default, s as withNoopInstall, t as ElIcon, w as loading_default } from "./icon-mgEZlgYz.js";
var objectCreate = Object.create;
var _baseCreate_default = function() {
	function object() {}
	return function(proto) {
		if (!isObject_default(proto)) return {};
		if (objectCreate) return objectCreate(proto);
		object.prototype = proto;
		var result = new object();
		object.prototype = void 0;
		return result;
	};
}();
function copyArray(source, array) {
	var index = -1, length = source.length;
	array || (array = Array(length));
	while (++index < length) array[index] = source[index];
	return array;
}
var _copyArray_default = copyArray;
function copyObject(source, props, object, customizer) {
	var isNew = !object;
	object || (object = {});
	var index = -1, length = props.length;
	while (++index < length) {
		var key = props[index];
		var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
		if (newValue === void 0) newValue = source[key];
		if (isNew) _baseAssignValue_default(object, key, newValue);
		else _assignValue_default(object, key, newValue);
	}
	return object;
}
var _copyObject_default = copyObject;
function baseRest(func, start) {
	return _setToString_default(_overRest_default(func, start, identity_default), func + "");
}
var _baseRest_default = baseRest;
function isIterateeCall(value, index, object) {
	if (!isObject_default(object)) return false;
	var type = typeof index;
	if (type == "number" ? isArrayLike_default(object) && _isIndex_default(index, object.length) : type == "string" && index in object) return eq_default(object[index], value);
	return false;
}
var _isIterateeCall_default = isIterateeCall;
function createAssigner(assigner) {
	return _baseRest_default(function(object, sources) {
		var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
		customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
		if (guard && _isIterateeCall_default(sources[0], sources[1], guard)) {
			customizer = length < 3 ? void 0 : customizer;
			length = 1;
		}
		object = Object(object);
		while (++index < length) {
			var source = sources[index];
			if (source) assigner(object, source, index, customizer);
		}
		return object;
	});
}
var _createAssigner_default = createAssigner;
function nativeKeysIn(object) {
	var result = [];
	if (object != null) for (var key in Object(object)) result.push(key);
	return result;
}
var _nativeKeysIn_default = nativeKeysIn;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function baseKeysIn(object) {
	if (!isObject_default(object)) return _nativeKeysIn_default(object);
	var isProto = _isPrototype_default(object), result = [];
	for (var key in object) if (!(key == "constructor" && (isProto || !hasOwnProperty$1.call(object, key)))) result.push(key);
	return result;
}
var _baseKeysIn_default = baseKeysIn;
function keysIn(object) {
	return isArrayLike_default(object) ? _arrayLikeKeys_default(object, true) : _baseKeysIn_default(object);
}
var keysIn_default = keysIn;
var _getPrototype_default = _overArg_default(Object.getPrototypeOf, Object);
var objectTag = "[object Object]";
var funcProto = Function.prototype, objectProto = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
	if (!isObjectLike_default(value) || _baseGetTag_default(value) != objectTag) return false;
	var proto = _getPrototype_default(value);
	if (proto === null) return true;
	var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
	return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_default = isPlainObject;
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var Buffer = freeModule && freeModule.exports === freeExports ? _root_default.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
	if (isDeep) return buffer.slice();
	var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	buffer.copy(result);
	return result;
}
var _cloneBuffer_default = cloneBuffer;
function cloneArrayBuffer(arrayBuffer) {
	var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	new _Uint8Array_default(result).set(new _Uint8Array_default(arrayBuffer));
	return result;
}
var _cloneArrayBuffer_default = cloneArrayBuffer;
function cloneTypedArray(typedArray, isDeep) {
	var buffer = isDeep ? _cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
	return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray_default = cloneTypedArray;
function initCloneObject(object) {
	return typeof object.constructor == "function" && !_isPrototype_default(object) ? _baseCreate_default(_getPrototype_default(object)) : {};
}
var _initCloneObject_default = initCloneObject;
function createBaseFor(fromRight) {
	return function(object, iteratee, keysFunc) {
		var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
		while (length--) {
			var key = props[fromRight ? length : ++index];
			if (iteratee(iterable[key], key, iterable) === false) break;
		}
		return object;
	};
}
var _baseFor_default = createBaseFor();
function baseForOwn(object, iteratee) {
	return object && _baseFor_default(object, iteratee, keys_default);
}
var _baseForOwn_default = baseForOwn;
function createBaseEach(eachFunc, fromRight) {
	return function(collection, iteratee) {
		if (collection == null) return collection;
		if (!isArrayLike_default(collection)) return eachFunc(collection, iteratee);
		var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
		while (fromRight ? index-- : ++index < length) if (iteratee(iterable[index], index, iterable) === false) break;
		return collection;
	};
}
var _baseEach_default = createBaseEach(_baseForOwn_default);
function assignMergeValue(object, key, value) {
	if (value !== void 0 && !eq_default(object[key], value) || value === void 0 && !(key in object)) _baseAssignValue_default(object, key, value);
}
var _assignMergeValue_default = assignMergeValue;
function isArrayLikeObject(value) {
	return isObjectLike_default(value) && isArrayLike_default(value);
}
var isArrayLikeObject_default = isArrayLikeObject;
function safeGet(object, key) {
	if (key === "constructor" && typeof object[key] === "function") return;
	if (key == "__proto__") return;
	return object[key];
}
var _safeGet_default = safeGet;
function toPlainObject(value) {
	return _copyObject_default(value, keysIn_default(value));
}
var toPlainObject_default = toPlainObject;
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	var objValue = _safeGet_default(object, key), srcValue = _safeGet_default(source, key), stacked = stack.get(srcValue);
	if (stacked) {
		_assignMergeValue_default(object, key, stacked);
		return;
	}
	var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
	var isCommon = newValue === void 0;
	if (isCommon) {
		var isArr = isArray_default(srcValue), isBuff = !isArr && isBuffer_default(srcValue), isTyped = !isArr && !isBuff && isTypedArray_default(srcValue);
		newValue = srcValue;
		if (isArr || isBuff || isTyped) if (isArray_default(objValue)) newValue = objValue;
		else if (isArrayLikeObject_default(objValue)) newValue = _copyArray_default(objValue);
		else if (isBuff) {
			isCommon = false;
			newValue = _cloneBuffer_default(srcValue, true);
		} else if (isTyped) {
			isCommon = false;
			newValue = _cloneTypedArray_default(srcValue, true);
		} else newValue = [];
		else if (isPlainObject_default(srcValue) || isArguments_default(srcValue)) {
			newValue = objValue;
			if (isArguments_default(objValue)) newValue = toPlainObject_default(objValue);
			else if (!isObject_default(objValue) || isFunction_default(objValue)) newValue = _initCloneObject_default(srcValue);
		} else isCommon = false;
	}
	if (isCommon) {
		stack.set(srcValue, newValue);
		mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
		stack["delete"](srcValue);
	}
	_assignMergeValue_default(object, key, newValue);
}
var _baseMergeDeep_default = baseMergeDeep;
function baseMerge(object, source, srcIndex, customizer, stack) {
	if (object === source) return;
	_baseFor_default(source, function(srcValue, key) {
		stack || (stack = new _Stack_default());
		if (isObject_default(srcValue)) _baseMergeDeep_default(object, source, key, srcIndex, baseMerge, customizer, stack);
		else {
			var newValue = customizer ? customizer(_safeGet_default(object, key), srcValue, key + "", object, source, stack) : void 0;
			if (newValue === void 0) newValue = srcValue;
			_assignMergeValue_default(object, key, newValue);
		}
	}, keysIn_default);
}
var _baseMerge_default = baseMerge;
function baseMap(collection, iteratee) {
	var index = -1, result = isArrayLike_default(collection) ? Array(collection.length) : [];
	_baseEach_default(collection, function(value, key, collection$1) {
		result[++index] = iteratee(value, key, collection$1);
	});
	return result;
}
var _baseMap_default = baseMap;
function map(collection, iteratee) {
	return (isArray_default(collection) ? _arrayMap_default : _baseMap_default)(collection, _baseIteratee_default(iteratee, 3));
}
var map_default = map;
function flatMap(collection, iteratee) {
	return _baseFlatten_default(map_default(collection, iteratee), 1);
}
var flatMap_default = flatMap;
var merge_default = _createAssigner_default(function(object, source, srcIndex) {
	_baseMerge_default(object, source, srcIndex);
});
var rAF = (fn) => isClient ? window.requestAnimationFrame(fn) : setTimeout(fn, 16);
var v = !1, o, f, s, u, d, N, l, p, m, w, D, x, E, M, F;
function a() {
	if (!v) {
		v = !0;
		var e = navigator.userAgent, n = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), i = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
		if (x = /\b(iPhone|iP[ao]d)/.exec(e), E = /\b(iP[ao]d)/.exec(e), w = /Android/i.exec(e), M = /FBAN\/\w+;/i.exec(e), F = /Mobile/i.exec(e), D = !!/Win64/.exec(e), n) {
			o = n[1] ? parseFloat(n[1]) : n[5] ? parseFloat(n[5]) : NaN, o && document && document.documentMode && (o = document.documentMode);
			var r = /(?:Trident\/(\d+.\d+))/.exec(e);
			N = r ? parseFloat(r[1]) + 4 : o, f = n[2] ? parseFloat(n[2]) : NaN, s = n[3] ? parseFloat(n[3]) : NaN, u = n[4] ? parseFloat(n[4]) : NaN, u ? (n = /(?:Chrome\/(\d+\.\d+))/.exec(e), d = n && n[1] ? parseFloat(n[1]) : NaN) : d = NaN;
		} else o = f = s = d = u = NaN;
		if (i) {
			if (i[1]) {
				var t = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
				l = t ? parseFloat(t[1].replace("_", ".")) : !0;
			} else l = !1;
			p = !!i[2], m = !!i[3];
		} else l = p = m = !1;
	}
}
var _ = {
	ie: function() {
		return a() || o;
	},
	ieCompatibilityMode: function() {
		return a() || N > o;
	},
	ie64: function() {
		return _.ie() && D;
	},
	firefox: function() {
		return a() || f;
	},
	opera: function() {
		return a() || s;
	},
	webkit: function() {
		return a() || u;
	},
	safari: function() {
		return _.webkit();
	},
	chrome: function() {
		return a() || d;
	},
	windows: function() {
		return a() || p;
	},
	osx: function() {
		return a() || l;
	},
	linux: function() {
		return a() || m;
	},
	iphone: function() {
		return a() || x;
	},
	mobile: function() {
		return a() || x || E || w || F;
	},
	nativeApp: function() {
		return a() || M;
	},
	android: function() {
		return a() || w;
	},
	ipad: function() {
		return a() || E;
	}
}, A = _;
var c = !!(typeof window < "u" && window.document && window.document.createElement), h$1 = {
	canUseDOM: c,
	canUseWorkers: typeof Worker < "u",
	canUseEventListeners: c && !!(window.addEventListener || window.attachEvent),
	canUseViewport: c && !!window.screen,
	isInWorker: !c
};
var X;
h$1.canUseDOM && (X = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
function S(e, n) {
	if (!h$1.canUseDOM || n && !("addEventListener" in document)) return !1;
	var i = "on" + e, r = i in document;
	if (!r) {
		var t = document.createElement("div");
		t.setAttribute(i, "return;"), r = typeof t[i] == "function";
	}
	return !r && X && e === "wheel" && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r;
}
var b = S;
var O = 10, I = 40, P = 800;
function T(e) {
	var n = 0, i = 0, r = 0, t = 0;
	return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (n = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (n = i, i = 0), r = n * O, t = i * O, "deltaY" in e && (t = e.deltaY), "deltaX" in e && (r = e.deltaX), (r || t) && e.deltaMode && (e.deltaMode == 1 ? (r *= I, t *= I) : (r *= P, t *= P)), r && !n && (n = r < 1 ? -1 : 1), t && !i && (i = t < 1 ? -1 : 1), {
		spinX: n,
		spinY: i,
		pixelX: r,
		pixelY: t
	};
}
T.getEventType = function() {
	return A.firefox() ? "DOMMouseScroll" : b("wheel") ? "wheel" : "mousewheel";
};
var Y = T;
/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/
var mousewheel = function(element, callback) {
	if (element && element.addEventListener) {
		const fn = function(event) {
			const normalized = Y(event);
			callback && Reflect.apply(callback, this, [event, normalized]);
		};
		element.addEventListener("wheel", fn, { passive: true });
	}
};
var Mousewheel = { beforeMount(el, binding) {
	mousewheel(el, binding.value);
} };
var import_escape_html = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var matchHtmlRegExp = /["'&<>]/;
	module.exports = escapeHtml$1;
	function escapeHtml$1(string) {
		var str = "" + string;
		var match = matchHtmlRegExp.exec(str);
		if (!match) return str;
		var escape;
		var html = "";
		var index = 0;
		var lastIndex = 0;
		for (index = match.index; index < str.length; index++) {
			switch (str.charCodeAt(index)) {
				case 34:
					escape = "&quot;";
					break;
				case 38:
					escape = "&amp;";
					break;
				case 39:
					escape = "&#39;";
					break;
				case 60:
					escape = "&lt;";
					break;
				case 62:
					escape = "&gt;";
					break;
				default: continue;
			}
			if (lastIndex !== index) html += str.substring(lastIndex, index);
			lastIndex = index + 1;
			html += escape;
		}
		return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
	}
})))(), 1);
init_shared_esm_bundler();
var getCell = function(event) {
	var _a;
	return (_a = event.target) == null ? void 0 : _a.closest("td");
};
var orderBy = function(array, sortKey, reverse, sortMethod, sortBy) {
	if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) return array;
	if (typeof reverse === "string") reverse = reverse === "descending" ? -1 : 1;
	else reverse = reverse && reverse < 0 ? -1 : 1;
	const getKey = sortMethod ? null : function(value, index) {
		if (sortBy) {
			if (!Array.isArray(sortBy)) sortBy = [sortBy];
			return sortBy.map((by) => {
				if (typeof by === "string") return get_default(value, by);
				else return by(value, index, array);
			});
		}
		if (sortKey !== "$key") {
			if (isObject(value) && "$value" in value) value = value.$value;
		}
		return [isObject(value) ? get_default(value, sortKey) : value];
	};
	const compare = function(a$1, b$1) {
		if (sortMethod) return sortMethod(a$1.value, b$1.value);
		for (let i = 0, len = a$1.key.length; i < len; i++) {
			if (a$1.key[i] < b$1.key[i]) return -1;
			if (a$1.key[i] > b$1.key[i]) return 1;
		}
		return 0;
	};
	return array.map((value, index) => {
		return {
			value,
			index,
			key: getKey ? getKey(value, index) : null
		};
	}).sort((a$1, b$1) => {
		let order = compare(a$1, b$1);
		if (!order) order = a$1.index - b$1.index;
		return order * +reverse;
	}).map((item) => item.value);
};
var getColumnById = function(table, columnId) {
	let column = null;
	table.columns.forEach((item) => {
		if (item.id === columnId) column = item;
	});
	return column;
};
var getColumnByKey = function(table, columnKey) {
	let column = null;
	for (let i = 0; i < table.columns.length; i++) {
		const item = table.columns[i];
		if (item.columnKey === columnKey) {
			column = item;
			break;
		}
	}
	if (!column) throwError("ElTable", `No column matching with column-key: ${columnKey}`);
	return column;
};
var getColumnByCell = function(table, cell, namespace) {
	const matches = (cell.className || "").match(new RegExp(`${namespace}-table_[^\\s]+`, "gm"));
	if (matches) return getColumnById(table, matches[0]);
	return null;
};
var getRowIdentity = (row, rowKey) => {
	if (!row) throw new Error("Row is required when get row identity");
	if (typeof rowKey === "string") {
		if (!rowKey.includes(".")) return `${row[rowKey]}`;
		const key = rowKey.split(".");
		let current = row;
		for (const element of key) current = current[element];
		return `${current}`;
	} else if (typeof rowKey === "function") return rowKey.call(null, row);
};
var getKeysMap = function(array, rowKey) {
	const arrayMap = {};
	(array || []).forEach((row, index) => {
		arrayMap[getRowIdentity(row, rowKey)] = {
			row,
			index
		};
	});
	return arrayMap;
};
function mergeOptions(defaults, config) {
	const options = {};
	let key;
	for (key in defaults) options[key] = defaults[key];
	for (key in config) if (hasOwn(config, key)) {
		const value = config[key];
		if (typeof value !== "undefined") options[key] = value;
	}
	return options;
}
function parseWidth(width) {
	if (width === "") return width;
	if (width !== void 0) {
		width = Number.parseInt(width, 10);
		if (Number.isNaN(width)) width = "";
	}
	return width;
}
function parseMinWidth(minWidth) {
	if (minWidth === "") return minWidth;
	if (minWidth !== void 0) {
		minWidth = parseWidth(minWidth);
		if (Number.isNaN(minWidth)) minWidth = 80;
	}
	return minWidth;
}
function parseHeight(height) {
	if (typeof height === "number") return height;
	if (typeof height === "string") if (/^\d+(?:px)?$/.test(height)) return Number.parseInt(height, 10);
	else return height;
	return null;
}
function compose(...funcs) {
	if (funcs.length === 0) return (arg) => arg;
	if (funcs.length === 1) return funcs[0];
	return funcs.reduce((a$1, b$1) => (...args) => a$1(b$1(...args)));
}
function toggleRowStatus(statusArr, row, newVal) {
	let changed = false;
	const index = statusArr.indexOf(row);
	const included = index !== -1;
	const toggleStatus = (type) => {
		if (type === "add") statusArr.push(row);
		else statusArr.splice(index, 1);
		changed = true;
		if (isArray(row.children)) row.children.forEach((item) => {
			toggleRowStatus(statusArr, item, newVal != null ? newVal : !included);
		});
	};
	if (isBoolean(newVal)) {
		if (newVal && !included) toggleStatus("add");
		else if (!newVal && included) toggleStatus("remove");
	} else included ? toggleStatus("remove") : toggleStatus("add");
	return changed;
}
function walkTreeNode(root, cb, childrenKey = "children", lazyKey = "hasChildren") {
	const isNil = (array) => !(Array.isArray(array) && array.length);
	function _walker(parent, children, level) {
		cb(parent, children, level);
		children.forEach((item) => {
			if (item[lazyKey]) {
				cb(item, null, level + 1);
				return;
			}
			const children2 = item[childrenKey];
			if (!isNil(children2)) _walker(item, children2, level + 1);
		});
	}
	root.forEach((item) => {
		if (item[lazyKey]) {
			cb(item, null, 0);
			return;
		}
		const children = item[childrenKey];
		if (!isNil(children)) _walker(item, children, 0);
	});
}
var removePopper;
function createTablePopper(parentNode, trigger, popperContent, nextZIndex, tooltipOptions) {
	tooltipOptions = merge_default({
		enterable: true,
		showArrow: true
	}, tooltipOptions);
	const ns = parentNode == null ? void 0 : parentNode.dataset.prefix;
	const scrollContainer = parentNode == null ? void 0 : parentNode.querySelector(`.${ns}-scrollbar__wrap`);
	function renderContent() {
		const isLight = tooltipOptions.effect === "light";
		const content2 = document.createElement("div");
		content2.className = [
			`${ns}-popper`,
			isLight ? "is-light" : "is-dark",
			tooltipOptions.popperClass || ""
		].join(" ");
		popperContent = (0, import_escape_html.default)(popperContent);
		content2.innerHTML = popperContent;
		content2.style.zIndex = String(nextZIndex());
		parentNode?.appendChild(content2);
		return content2;
	}
	function renderArrow() {
		const arrow = document.createElement("div");
		arrow.className = `${ns}-popper__arrow`;
		return arrow;
	}
	function showPopper() {
		popperInstance && popperInstance.update();
	}
	removePopper?.();
	removePopper = () => {
		try {
			popperInstance && popperInstance.destroy();
			content && parentNode?.removeChild(content);
			trigger.removeEventListener("mouseenter", onOpen);
			trigger.removeEventListener("mouseleave", onClose);
			scrollContainer?.removeEventListener("scroll", removePopper);
			removePopper = void 0;
		} catch (e) {}
	};
	let popperInstance = null;
	let onOpen = showPopper;
	let onClose = removePopper;
	if (tooltipOptions.enterable) ({onOpen, onClose} = useDelayedToggle({
		showAfter: tooltipOptions.showAfter,
		hideAfter: tooltipOptions.hideAfter,
		open: showPopper,
		close: removePopper
	}));
	const content = renderContent();
	content.onmouseenter = onOpen;
	content.onmouseleave = onClose;
	const modifiers = [];
	if (tooltipOptions.offset) modifiers.push({
		name: "offset",
		options: { offset: [0, tooltipOptions.offset] }
	});
	if (tooltipOptions.showArrow) {
		const arrow = content.appendChild(renderArrow());
		modifiers.push({
			name: "arrow",
			options: {
				element: arrow,
				padding: 10
			}
		});
	}
	const popperOptions = tooltipOptions.popperOptions || {};
	popperInstance = yn(trigger, content, {
		placement: tooltipOptions.placement || "top",
		strategy: "fixed",
		...popperOptions,
		modifiers: popperOptions.modifiers ? modifiers.concat(popperOptions.modifiers) : modifiers
	});
	trigger.addEventListener("mouseenter", onOpen);
	trigger.addEventListener("mouseleave", onClose);
	scrollContainer?.addEventListener("scroll", removePopper);
	return popperInstance;
}
function getCurrentColumns(column) {
	if (column.children) return flatMap_default(column.children, getCurrentColumns);
	else return [column];
}
function getColSpan(colSpan, column) {
	return colSpan + column.colSpan;
}
var isFixedColumn = (index, fixed, store, realColumns) => {
	let start = 0;
	let after = index;
	const columns = store.states.columns.value;
	if (realColumns) {
		const curColumns = getCurrentColumns(realColumns[index]);
		start = columns.slice(0, columns.indexOf(curColumns[0])).reduce(getColSpan, 0);
		after = start + curColumns.reduce(getColSpan, 0) - 1;
	} else start = index;
	let fixedLayout;
	switch (fixed) {
		case "left":
			if (after < store.states.fixedLeafColumnsLength.value) fixedLayout = "left";
			break;
		case "right":
			if (start >= columns.length - store.states.rightFixedLeafColumnsLength.value) fixedLayout = "right";
			break;
		default: if (after < store.states.fixedLeafColumnsLength.value) fixedLayout = "left";
		else if (start >= columns.length - store.states.rightFixedLeafColumnsLength.value) fixedLayout = "right";
	}
	return fixedLayout ? {
		direction: fixedLayout,
		start,
		after
	} : {};
};
var getFixedColumnsClass = (namespace, index, fixed, store, realColumns, offset = 0) => {
	const classes = [];
	const { direction, start, after } = isFixedColumn(index, fixed, store, realColumns);
	if (direction) {
		const isLeft = direction === "left";
		classes.push(`${namespace}-fixed-column--${direction}`);
		if (isLeft && after + offset === store.states.fixedLeafColumnsLength.value - 1) classes.push("is-last-column");
		else if (!isLeft && start - offset === store.states.columns.value.length - store.states.rightFixedLeafColumnsLength.value) classes.push("is-first-column");
	}
	return classes;
};
function getOffset(offset, column) {
	return offset + (column.realWidth === null || Number.isNaN(column.realWidth) ? Number(column.width) : column.realWidth);
}
var getFixedColumnOffset = (index, fixed, store, realColumns) => {
	const { direction, start = 0, after = 0 } = isFixedColumn(index, fixed, store, realColumns);
	if (!direction) return;
	const styles = {};
	const isLeft = direction === "left";
	const columns = store.states.columns.value;
	if (isLeft) styles.left = columns.slice(0, start).reduce(getOffset, 0);
	else styles.right = columns.slice(after + 1).reverse().reduce(getOffset, 0);
	return styles;
};
var ensurePosition = (style, key) => {
	if (!style) return;
	if (!Number.isNaN(style[key])) style[key] = `${style[key]}px`;
};
function useExpand(watcherData) {
	const instance = getCurrentInstance();
	const defaultExpandAll = ref(false);
	const expandRows = ref([]);
	const updateExpandRows = () => {
		const data = watcherData.data.value || [];
		const rowKey = watcherData.rowKey.value;
		if (defaultExpandAll.value) expandRows.value = data.slice();
		else if (rowKey) {
			const expandRowsMap = getKeysMap(expandRows.value, rowKey);
			expandRows.value = data.reduce((prev, row) => {
				if (expandRowsMap[getRowIdentity(row, rowKey)]) prev.push(row);
				return prev;
			}, []);
		} else expandRows.value = [];
	};
	const toggleRowExpansion = (row, expanded) => {
		if (toggleRowStatus(expandRows.value, row, expanded)) instance.emit("expand-change", row, expandRows.value.slice());
	};
	const setExpandRowKeys = (rowKeys) => {
		instance.store.assertRowKey();
		const data = watcherData.data.value || [];
		const rowKey = watcherData.rowKey.value;
		const keysMap = getKeysMap(data, rowKey);
		expandRows.value = rowKeys.reduce((prev, cur) => {
			const info = keysMap[cur];
			if (info) prev.push(info.row);
			return prev;
		}, []);
	};
	const isRowExpanded = (row) => {
		const rowKey = watcherData.rowKey.value;
		if (rowKey) return !!getKeysMap(expandRows.value, rowKey)[getRowIdentity(row, rowKey)];
		return expandRows.value.includes(row);
	};
	return {
		updateExpandRows,
		toggleRowExpansion,
		setExpandRowKeys,
		isRowExpanded,
		states: {
			expandRows,
			defaultExpandAll
		}
	};
}
function useCurrent(watcherData) {
	const instance = getCurrentInstance();
	const _currentRowKey = ref(null);
	const currentRow = ref(null);
	const setCurrentRowKey = (key) => {
		instance.store.assertRowKey();
		_currentRowKey.value = key;
		setCurrentRowByKey(key);
	};
	const restoreCurrentRowKey = () => {
		_currentRowKey.value = null;
	};
	const setCurrentRowByKey = (key) => {
		const { data, rowKey } = watcherData;
		let _currentRow = null;
		if (rowKey.value) _currentRow = (unref(data) || []).find((item) => getRowIdentity(item, rowKey.value) === key);
		currentRow.value = _currentRow;
		instance.emit("current-change", currentRow.value, null);
	};
	const updateCurrentRow = (_currentRow) => {
		const oldCurrentRow = currentRow.value;
		if (_currentRow && _currentRow !== oldCurrentRow) {
			currentRow.value = _currentRow;
			instance.emit("current-change", currentRow.value, oldCurrentRow);
			return;
		}
		if (!_currentRow && oldCurrentRow) {
			currentRow.value = null;
			instance.emit("current-change", null, oldCurrentRow);
		}
	};
	const updateCurrentRowData = () => {
		const rowKey = watcherData.rowKey.value;
		const data = watcherData.data.value || [];
		const oldCurrentRow = currentRow.value;
		if (!data.includes(oldCurrentRow) && oldCurrentRow) {
			if (rowKey) setCurrentRowByKey(getRowIdentity(oldCurrentRow, rowKey));
			else currentRow.value = null;
			if (currentRow.value === null) instance.emit("current-change", null, oldCurrentRow);
		} else if (_currentRowKey.value) {
			setCurrentRowByKey(_currentRowKey.value);
			restoreCurrentRowKey();
		}
	};
	return {
		setCurrentRowKey,
		restoreCurrentRowKey,
		setCurrentRowByKey,
		updateCurrentRow,
		updateCurrentRowData,
		states: {
			_currentRowKey,
			currentRow
		}
	};
}
function useTree(watcherData) {
	const expandRowKeys = ref([]);
	const treeData = ref({});
	const indent = ref(16);
	const lazy = ref(false);
	const lazyTreeNodeMap = ref({});
	const lazyColumnIdentifier = ref("hasChildren");
	const childrenColumnName = ref("children");
	const instance = getCurrentInstance();
	const normalizedData = computed(() => {
		if (!watcherData.rowKey.value) return {};
		return normalize(watcherData.data.value || []);
	});
	const normalizedLazyNode = computed(() => {
		const rowKey = watcherData.rowKey.value;
		const keys = Object.keys(lazyTreeNodeMap.value);
		const res = {};
		if (!keys.length) return res;
		keys.forEach((key) => {
			if (lazyTreeNodeMap.value[key].length) {
				const item = { children: [] };
				lazyTreeNodeMap.value[key].forEach((row) => {
					const currentRowKey = getRowIdentity(row, rowKey);
					item.children.push(currentRowKey);
					if (row[lazyColumnIdentifier.value] && !res[currentRowKey]) res[currentRowKey] = { children: [] };
				});
				res[key] = item;
			}
		});
		return res;
	});
	const normalize = (data) => {
		const rowKey = watcherData.rowKey.value;
		const res = {};
		walkTreeNode(data, (parent, children, level) => {
			const parentId = getRowIdentity(parent, rowKey);
			if (Array.isArray(children)) res[parentId] = {
				children: children.map((row) => getRowIdentity(row, rowKey)),
				level
			};
			else if (lazy.value) res[parentId] = {
				children: [],
				lazy: true,
				level
			};
		}, childrenColumnName.value, lazyColumnIdentifier.value);
		return res;
	};
	const updateTreeData = (ifChangeExpandRowKeys = false, ifExpandAll = ((_a) => (_a = instance.store) == null ? void 0 : _a.states.defaultExpandAll.value)()) => {
		var _a2;
		const nested = normalizedData.value;
		const normalizedLazyNode_ = normalizedLazyNode.value;
		const keys = Object.keys(nested);
		const newTreeData = {};
		if (keys.length) {
			const oldTreeData = unref(treeData);
			const rootLazyRowKeys = [];
			const getExpanded = (oldValue, key) => {
				if (ifChangeExpandRowKeys) if (expandRowKeys.value) return ifExpandAll || expandRowKeys.value.includes(key);
				else return !!(ifExpandAll || (oldValue == null ? void 0 : oldValue.expanded));
				else {
					const included = ifExpandAll || expandRowKeys.value && expandRowKeys.value.includes(key);
					return !!((oldValue == null ? void 0 : oldValue.expanded) || included);
				}
			};
			keys.forEach((key) => {
				const oldValue = oldTreeData[key];
				const newValue = { ...nested[key] };
				newValue.expanded = getExpanded(oldValue, key);
				if (newValue.lazy) {
					const { loaded = false, loading = false } = oldValue || {};
					newValue.loaded = !!loaded;
					newValue.loading = !!loading;
					rootLazyRowKeys.push(key);
				}
				newTreeData[key] = newValue;
			});
			const lazyKeys = Object.keys(normalizedLazyNode_);
			if (lazy.value && lazyKeys.length && rootLazyRowKeys.length) lazyKeys.forEach((key) => {
				const oldValue = oldTreeData[key];
				const lazyNodeChildren = normalizedLazyNode_[key].children;
				if (rootLazyRowKeys.includes(key)) {
					if (newTreeData[key].children.length !== 0) throw new Error("[ElTable]children must be an empty array.");
					newTreeData[key].children = lazyNodeChildren;
				} else {
					const { loaded = false, loading = false } = oldValue || {};
					newTreeData[key] = {
						lazy: true,
						loaded: !!loaded,
						loading: !!loading,
						expanded: getExpanded(oldValue, key),
						children: lazyNodeChildren,
						level: ""
					};
				}
			});
		}
		treeData.value = newTreeData;
		(_a2 = instance.store) == null || _a2.updateTableScrollY();
	};
	watch(() => expandRowKeys.value, () => {
		updateTreeData(true);
	});
	watch(() => normalizedData.value, () => {
		updateTreeData();
	});
	watch(() => normalizedLazyNode.value, () => {
		updateTreeData();
	});
	const updateTreeExpandKeys = (value) => {
		expandRowKeys.value = value;
		updateTreeData();
	};
	const toggleTreeExpansion = (row, expanded) => {
		instance.store.assertRowKey();
		const rowKey = watcherData.rowKey.value;
		const id = getRowIdentity(row, rowKey);
		const data = id && treeData.value[id];
		if (id && data && "expanded" in data) {
			const oldExpanded = data.expanded;
			expanded = typeof expanded === "undefined" ? !data.expanded : expanded;
			treeData.value[id].expanded = expanded;
			if (oldExpanded !== expanded) instance.emit("expand-change", row, expanded);
			instance.store.updateTableScrollY();
		}
	};
	const loadOrToggle = (row) => {
		instance.store.assertRowKey();
		const rowKey = watcherData.rowKey.value;
		const id = getRowIdentity(row, rowKey);
		const data = treeData.value[id];
		if (lazy.value && data && "loaded" in data && !data.loaded) loadData(row, id, data);
		else toggleTreeExpansion(row, void 0);
	};
	const loadData = (row, key, treeNode) => {
		const { load } = instance.props;
		if (load && !treeData.value[key].loaded) {
			treeData.value[key].loading = true;
			load(row, treeNode, (data) => {
				if (!Array.isArray(data)) throw new TypeError("[ElTable] data must be an array");
				treeData.value[key].loading = false;
				treeData.value[key].loaded = true;
				treeData.value[key].expanded = true;
				if (data.length) lazyTreeNodeMap.value[key] = data;
				instance.emit("expand-change", row, true);
			});
		}
	};
	return {
		loadData,
		loadOrToggle,
		toggleTreeExpansion,
		updateTreeExpandKeys,
		updateTreeData,
		normalize,
		states: {
			expandRowKeys,
			treeData,
			indent,
			lazy,
			lazyTreeNodeMap,
			lazyColumnIdentifier,
			childrenColumnName
		}
	};
}
init_shared_esm_bundler();
var sortData = (data, states) => {
	const sortingColumn = states.sortingColumn;
	if (!sortingColumn || typeof sortingColumn.sortable === "string") return data;
	return orderBy(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
};
var doFlattenColumns = (columns) => {
	const result = [];
	columns.forEach((column) => {
		if (column.children && column.children.length > 0) result.push.apply(result, doFlattenColumns(column.children));
		else result.push(column);
	});
	return result;
};
function useWatcher$1() {
	var _a;
	const instance = getCurrentInstance();
	const { size: tableSize } = toRefs((_a = instance.proxy) == null ? void 0 : _a.$props);
	const rowKey = ref(null);
	const data = ref([]);
	const _data = ref([]);
	const isComplex = ref(false);
	const _columns = ref([]);
	const originColumns = ref([]);
	const columns = ref([]);
	const fixedColumns = ref([]);
	const rightFixedColumns = ref([]);
	const leafColumns = ref([]);
	const fixedLeafColumns = ref([]);
	const rightFixedLeafColumns = ref([]);
	const updateOrderFns = [];
	const leafColumnsLength = ref(0);
	const fixedLeafColumnsLength = ref(0);
	const rightFixedLeafColumnsLength = ref(0);
	const isAllSelected = ref(false);
	const selection = ref([]);
	const reserveSelection = ref(false);
	const selectOnIndeterminate = ref(false);
	const selectable = ref(null);
	const filters = ref({});
	const filteredData = ref(null);
	const sortingColumn = ref(null);
	const sortProp = ref(null);
	const sortOrder = ref(null);
	const hoverRow = ref(null);
	watch(data, () => instance.state && scheduleLayout(false), { deep: true });
	const assertRowKey = () => {
		if (!rowKey.value) throw new Error("[ElTable] prop row-key is required");
	};
	const updateChildFixed = (column) => {
		var _a2;
		(_a2 = column.children) == null || _a2.forEach((childColumn) => {
			childColumn.fixed = column.fixed;
			updateChildFixed(childColumn);
		});
	};
	const updateColumns = () => {
		_columns.value.forEach((column) => {
			updateChildFixed(column);
		});
		fixedColumns.value = _columns.value.filter((column) => column.fixed === true || column.fixed === "left");
		rightFixedColumns.value = _columns.value.filter((column) => column.fixed === "right");
		if (fixedColumns.value.length > 0 && _columns.value[0] && _columns.value[0].type === "selection" && !_columns.value[0].fixed) {
			_columns.value[0].fixed = true;
			fixedColumns.value.unshift(_columns.value[0]);
		}
		const notFixedColumns = _columns.value.filter((column) => !column.fixed);
		originColumns.value = [].concat(fixedColumns.value).concat(notFixedColumns).concat(rightFixedColumns.value);
		const leafColumns2 = doFlattenColumns(notFixedColumns);
		const fixedLeafColumns2 = doFlattenColumns(fixedColumns.value);
		const rightFixedLeafColumns2 = doFlattenColumns(rightFixedColumns.value);
		leafColumnsLength.value = leafColumns2.length;
		fixedLeafColumnsLength.value = fixedLeafColumns2.length;
		rightFixedLeafColumnsLength.value = rightFixedLeafColumns2.length;
		columns.value = [].concat(fixedLeafColumns2).concat(leafColumns2).concat(rightFixedLeafColumns2);
		isComplex.value = fixedColumns.value.length > 0 || rightFixedColumns.value.length > 0;
	};
	const scheduleLayout = (needUpdateColumns, immediate = false) => {
		if (needUpdateColumns) updateColumns();
		if (immediate) instance.state.doLayout();
		else instance.state.debouncedUpdateLayout();
	};
	const isSelected = (row) => {
		return selection.value.includes(row);
	};
	const clearSelection = () => {
		isAllSelected.value = false;
		if (selection.value.length) {
			selection.value = [];
			instance.emit("selection-change", []);
		}
	};
	const cleanSelection = () => {
		let deleted;
		if (rowKey.value) {
			deleted = [];
			const selectedMap = getKeysMap(selection.value, rowKey.value);
			const dataMap = getKeysMap(data.value, rowKey.value);
			for (const key in selectedMap) if (hasOwn(selectedMap, key) && !dataMap[key]) deleted.push(selectedMap[key].row);
		} else deleted = selection.value.filter((item) => !data.value.includes(item));
		if (deleted.length) {
			const newSelection = selection.value.filter((item) => !deleted.includes(item));
			selection.value = newSelection;
			instance.emit("selection-change", newSelection.slice());
		}
	};
	const getSelectionRows = () => {
		return (selection.value || []).slice();
	};
	const toggleRowSelection = (row, selected = void 0, emitChange = true) => {
		if (toggleRowStatus(selection.value, row, selected)) {
			const newSelection = (selection.value || []).slice();
			if (emitChange) instance.emit("select", newSelection, row);
			instance.emit("selection-change", newSelection);
		}
	};
	const _toggleAllSelection = () => {
		var _a2, _b;
		const value = selectOnIndeterminate.value ? !isAllSelected.value : !(isAllSelected.value || selection.value.length);
		isAllSelected.value = value;
		let selectionChanged = false;
		let childrenCount = 0;
		const rowKey2 = (_b = (_a2 = instance == null ? void 0 : instance.store) == null ? void 0 : _a2.states) == null ? void 0 : _b.rowKey.value;
		data.value.forEach((row, index) => {
			const rowIndex = index + childrenCount;
			if (selectable.value) {
				if (selectable.value.call(null, row, rowIndex) && toggleRowStatus(selection.value, row, value)) selectionChanged = true;
			} else if (toggleRowStatus(selection.value, row, value)) selectionChanged = true;
			childrenCount += getChildrenCount(getRowIdentity(row, rowKey2));
		});
		if (selectionChanged) instance.emit("selection-change", selection.value ? selection.value.slice() : []);
		instance.emit("select-all", selection.value);
	};
	const updateSelectionByRowKey = () => {
		const selectedMap = getKeysMap(selection.value, rowKey.value);
		data.value.forEach((row) => {
			const rowInfo = selectedMap[getRowIdentity(row, rowKey.value)];
			if (rowInfo) selection.value[rowInfo.index] = row;
		});
	};
	const updateAllSelected = () => {
		var _a2, _b, _c;
		if (((_a2 = data.value) == null ? void 0 : _a2.length) === 0) {
			isAllSelected.value = false;
			return;
		}
		let selectedMap;
		if (rowKey.value) selectedMap = getKeysMap(selection.value, rowKey.value);
		const isSelected2 = function(row) {
			if (selectedMap) return !!selectedMap[getRowIdentity(row, rowKey.value)];
			else return selection.value.includes(row);
		};
		let isAllSelected_ = true;
		let selectedCount = 0;
		let childrenCount = 0;
		for (let i = 0, j = (data.value || []).length; i < j; i++) {
			const keyProp = (_c = (_b = instance == null ? void 0 : instance.store) == null ? void 0 : _b.states) == null ? void 0 : _c.rowKey.value;
			const rowIndex = i + childrenCount;
			const item = data.value[i];
			const isRowSelectable = selectable.value && selectable.value.call(null, item, rowIndex);
			if (!isSelected2(item)) {
				if (!selectable.value || isRowSelectable) {
					isAllSelected_ = false;
					break;
				}
			} else selectedCount++;
			childrenCount += getChildrenCount(getRowIdentity(item, keyProp));
		}
		if (selectedCount === 0) isAllSelected_ = false;
		isAllSelected.value = isAllSelected_;
	};
	const getChildrenCount = (rowKey2) => {
		var _a2;
		if (!instance || !instance.store) return 0;
		const { treeData } = instance.store.states;
		let count = 0;
		const children = (_a2 = treeData.value[rowKey2]) == null ? void 0 : _a2.children;
		if (children) {
			count += children.length;
			children.forEach((childKey) => {
				count += getChildrenCount(childKey);
			});
		}
		return count;
	};
	const updateFilters = (columns2, values) => {
		if (!Array.isArray(columns2)) columns2 = [columns2];
		const filters_ = {};
		columns2.forEach((col) => {
			filters.value[col.id] = values;
			filters_[col.columnKey || col.id] = values;
		});
		return filters_;
	};
	const updateSort = (column, prop, order) => {
		if (sortingColumn.value && sortingColumn.value !== column) sortingColumn.value.order = null;
		sortingColumn.value = column;
		sortProp.value = prop;
		sortOrder.value = order;
	};
	const execFilter = () => {
		let sourceData = unref(_data);
		Object.keys(filters.value).forEach((columnId) => {
			const values = filters.value[columnId];
			if (!values || values.length === 0) return;
			const column = getColumnById({ columns: columns.value }, columnId);
			if (column && column.filterMethod) sourceData = sourceData.filter((row) => {
				return values.some((value) => column.filterMethod.call(null, value, row, column));
			});
		});
		filteredData.value = sourceData;
	};
	const execSort = () => {
		data.value = sortData(filteredData.value, {
			sortingColumn: sortingColumn.value,
			sortProp: sortProp.value,
			sortOrder: sortOrder.value
		});
	};
	const execQuery = (ignore = void 0) => {
		if (!(ignore && ignore.filter)) execFilter();
		execSort();
	};
	const clearFilter = (columnKeys) => {
		const { tableHeaderRef } = instance.refs;
		if (!tableHeaderRef) return;
		const panels = Object.assign({}, tableHeaderRef.filterPanels);
		const keys = Object.keys(panels);
		if (!keys.length) return;
		if (typeof columnKeys === "string") columnKeys = [columnKeys];
		if (Array.isArray(columnKeys)) {
			const columns_ = columnKeys.map((key) => getColumnByKey({ columns: columns.value }, key));
			keys.forEach((key) => {
				const column = columns_.find((col) => col.id === key);
				if (column) column.filteredValue = [];
			});
			instance.store.commit("filterChange", {
				column: columns_,
				values: [],
				silent: true,
				multi: true
			});
		} else {
			keys.forEach((key) => {
				const column = columns.value.find((col) => col.id === key);
				if (column) column.filteredValue = [];
			});
			filters.value = {};
			instance.store.commit("filterChange", {
				column: {},
				values: [],
				silent: true
			});
		}
	};
	const clearSort = () => {
		if (!sortingColumn.value) return;
		updateSort(null, null, null);
		instance.store.commit("changeSortCondition", { silent: true });
	};
	const { setExpandRowKeys, toggleRowExpansion, updateExpandRows, states: expandStates, isRowExpanded } = useExpand({
		data,
		rowKey
	});
	const { updateTreeExpandKeys, toggleTreeExpansion, updateTreeData, loadOrToggle, states: treeStates } = useTree({
		data,
		rowKey
	});
	const { updateCurrentRowData, updateCurrentRow, setCurrentRowKey, states: currentData } = useCurrent({
		data,
		rowKey
	});
	const setExpandRowKeysAdapter = (val) => {
		setExpandRowKeys(val);
		updateTreeExpandKeys(val);
	};
	const toggleRowExpansionAdapter = (row, expanded) => {
		if (columns.value.some(({ type }) => type === "expand")) toggleRowExpansion(row, expanded);
		else toggleTreeExpansion(row, expanded);
	};
	return {
		assertRowKey,
		updateColumns,
		scheduleLayout,
		isSelected,
		clearSelection,
		cleanSelection,
		getSelectionRows,
		toggleRowSelection,
		_toggleAllSelection,
		toggleAllSelection: null,
		updateSelectionByRowKey,
		updateAllSelected,
		updateFilters,
		updateCurrentRow,
		updateSort,
		execFilter,
		execSort,
		execQuery,
		clearFilter,
		clearSort,
		toggleRowExpansion,
		setExpandRowKeysAdapter,
		setCurrentRowKey,
		toggleRowExpansionAdapter,
		isRowExpanded,
		updateExpandRows,
		updateCurrentRowData,
		loadOrToggle,
		updateTreeData,
		states: {
			tableSize,
			rowKey,
			data,
			_data,
			isComplex,
			_columns,
			originColumns,
			columns,
			fixedColumns,
			rightFixedColumns,
			leafColumns,
			fixedLeafColumns,
			rightFixedLeafColumns,
			updateOrderFns,
			leafColumnsLength,
			fixedLeafColumnsLength,
			rightFixedLeafColumnsLength,
			isAllSelected,
			selection,
			reserveSelection,
			selectOnIndeterminate,
			selectable,
			filters,
			filteredData,
			sortingColumn,
			sortProp,
			sortOrder,
			hoverRow,
			...expandStates,
			...treeStates,
			...currentData
		}
	};
}
function replaceColumn(array, column) {
	return array.map((item) => {
		var _a;
		if (item.id === column.id) return column;
		else if ((_a = item.children) == null ? void 0 : _a.length) item.children = replaceColumn(item.children, column);
		return item;
	});
}
function sortColumn(array) {
	array.forEach((item) => {
		var _a, _b;
		item.no = (_a = item.getColumnIndex) == null ? void 0 : _a.call(item);
		if ((_b = item.children) == null ? void 0 : _b.length) sortColumn(item.children);
	});
	array.sort((cur, pre) => cur.no - pre.no);
}
function useStore() {
	const instance = getCurrentInstance();
	const watcher = useWatcher$1();
	const ns = useNamespace("table");
	const mutations = {
		setData(states, data) {
			const dataInstanceChanged = unref(states._data) !== data;
			states.data.value = data;
			states._data.value = data;
			instance.store.execQuery();
			instance.store.updateCurrentRowData();
			instance.store.updateExpandRows();
			instance.store.updateTreeData(instance.store.states.defaultExpandAll.value);
			if (unref(states.reserveSelection)) {
				instance.store.assertRowKey();
				instance.store.updateSelectionByRowKey();
			} else if (dataInstanceChanged) instance.store.clearSelection();
			else instance.store.cleanSelection();
			instance.store.updateAllSelected();
			if (instance.$ready) instance.store.scheduleLayout();
		},
		insertColumn(states, column, parent, updateColumnOrder) {
			const array = unref(states._columns);
			let newColumns = [];
			if (!parent) {
				array.push(column);
				newColumns = array;
			} else {
				if (parent && !parent.children) parent.children = [];
				parent.children.push(column);
				newColumns = replaceColumn(array, parent);
			}
			sortColumn(newColumns);
			states._columns.value = newColumns;
			states.updateOrderFns.push(updateColumnOrder);
			if (column.type === "selection") {
				states.selectable.value = column.selectable;
				states.reserveSelection.value = column.reserveSelection;
			}
			if (instance.$ready) {
				instance.store.updateColumns();
				instance.store.scheduleLayout();
			}
		},
		updateColumnOrder(states, column) {
			var _a;
			if (((_a = column.getColumnIndex) == null ? void 0 : _a.call(column)) === column.no) return;
			sortColumn(states._columns.value);
			if (instance.$ready) instance.store.updateColumns();
		},
		removeColumn(states, column, parent, updateColumnOrder) {
			const array = unref(states._columns) || [];
			if (parent) {
				parent.children.splice(parent.children.findIndex((item) => item.id === column.id), 1);
				nextTick(() => {
					var _a;
					if (((_a = parent.children) == null ? void 0 : _a.length) === 0) delete parent.children;
				});
				states._columns.value = replaceColumn(array, parent);
			} else {
				const index = array.indexOf(column);
				if (index > -1) {
					array.splice(index, 1);
					states._columns.value = array;
				}
			}
			const updateFnIndex = states.updateOrderFns.indexOf(updateColumnOrder);
			updateFnIndex > -1 && states.updateOrderFns.splice(updateFnIndex, 1);
			if (instance.$ready) {
				instance.store.updateColumns();
				instance.store.scheduleLayout();
			}
		},
		sort(states, options) {
			const { prop, order, init } = options;
			if (prop) {
				const column = unref(states.columns).find((column2) => column2.property === prop);
				if (column) {
					column.order = order;
					instance.store.updateSort(column, prop, order);
					instance.store.commit("changeSortCondition", { init });
				}
			}
		},
		changeSortCondition(states, options) {
			const { sortingColumn, sortProp, sortOrder } = states;
			const columnValue = unref(sortingColumn), propValue = unref(sortProp), orderValue = unref(sortOrder);
			if (orderValue === null) {
				states.sortingColumn.value = null;
				states.sortProp.value = null;
			}
			instance.store.execQuery({ filter: true });
			if (!options || !(options.silent || options.init)) instance.emit("sort-change", {
				column: columnValue,
				prop: propValue,
				order: orderValue
			});
			instance.store.updateTableScrollY();
		},
		filterChange(_states, options) {
			const { column, values, silent } = options;
			const newFilters = instance.store.updateFilters(column, values);
			instance.store.execQuery();
			if (!silent) instance.emit("filter-change", newFilters);
			instance.store.updateTableScrollY();
		},
		toggleAllSelection() {
			instance.store.toggleAllSelection();
		},
		rowSelectedChanged(_states, row) {
			instance.store.toggleRowSelection(row);
			instance.store.updateAllSelected();
		},
		setHoverRow(states, row) {
			states.hoverRow.value = row;
		},
		setCurrentRow(_states, row) {
			instance.store.updateCurrentRow(row);
		}
	};
	const commit = function(name, ...args) {
		const mutations2 = instance.store.mutations;
		if (mutations2[name]) mutations2[name].apply(instance, [instance.store.states].concat(args));
		else throw new Error(`Action not found: ${name}`);
	};
	const updateTableScrollY = function() {
		nextTick(() => instance.layout.updateScrollY.apply(instance.layout));
	};
	return {
		ns,
		...watcher,
		mutations,
		commit,
		updateTableScrollY
	};
}
var InitialStateMap = {
	rowKey: "rowKey",
	defaultExpandAll: "defaultExpandAll",
	selectOnIndeterminate: "selectOnIndeterminate",
	indent: "indent",
	lazy: "lazy",
	data: "data",
	["treeProps.hasChildren"]: {
		key: "lazyColumnIdentifier",
		default: "hasChildren"
	},
	["treeProps.children"]: {
		key: "childrenColumnName",
		default: "children"
	}
};
function createStore(table, props) {
	if (!table) throw new Error("Table is required.");
	const store = useStore();
	store.toggleAllSelection = debounce_default(store._toggleAllSelection, 10);
	Object.keys(InitialStateMap).forEach((key) => {
		handleValue(getArrKeysValue(props, key), key, store);
	});
	proxyTableProps(store, props);
	return store;
}
function proxyTableProps(store, props) {
	Object.keys(InitialStateMap).forEach((key) => {
		watch(() => getArrKeysValue(props, key), (value) => {
			handleValue(value, key, store);
		});
	});
}
function handleValue(value, propsKey, store) {
	let newVal = value;
	let storeKey = InitialStateMap[propsKey];
	if (typeof InitialStateMap[propsKey] === "object") {
		storeKey = storeKey.key;
		newVal = newVal || InitialStateMap[propsKey].default;
	}
	store.states[storeKey].value = newVal;
}
function getArrKeysValue(props, keys) {
	if (keys.includes(".")) {
		const keyList = keys.split(".");
		let value = props;
		keyList.forEach((key) => {
			value = value[key];
		});
		return value;
	} else return props[keys];
}
init_shared_esm_bundler();
var TableLayout = class {
	constructor(options) {
		this.observers = [];
		this.table = null;
		this.store = null;
		this.columns = [];
		this.fit = true;
		this.showHeader = true;
		this.height = ref(null);
		this.scrollX = ref(false);
		this.scrollY = ref(false);
		this.bodyWidth = ref(null);
		this.fixedWidth = ref(null);
		this.rightFixedWidth = ref(null);
		this.gutterWidth = 0;
		for (const name in options) if (hasOwn(options, name)) if (isRef(this[name])) this[name].value = options[name];
		else this[name] = options[name];
		if (!this.table) throw new Error("Table is required for Table Layout");
		if (!this.store) throw new Error("Store is required for Table Layout");
	}
	updateScrollY() {
		if (this.height.value === null) return false;
		const scrollBarRef = this.table.refs.scrollBarRef;
		if (this.table.vnode.el && (scrollBarRef == null ? void 0 : scrollBarRef.wrapRef)) {
			let scrollY = true;
			const prevScrollY = this.scrollY.value;
			scrollY = scrollBarRef.wrapRef.scrollHeight > scrollBarRef.wrapRef.clientHeight;
			this.scrollY.value = scrollY;
			return prevScrollY !== scrollY;
		}
		return false;
	}
	setHeight(value, prop = "height") {
		if (!isClient) return;
		const el = this.table.vnode.el;
		value = parseHeight(value);
		this.height.value = Number(value);
		if (!el && (value || value === 0)) return nextTick(() => this.setHeight(value, prop));
		if (typeof value === "number") {
			el.style[prop] = `${value}px`;
			this.updateElsHeight();
		} else if (typeof value === "string") {
			el.style[prop] = value;
			this.updateElsHeight();
		}
	}
	setMaxHeight(value) {
		this.setHeight(value, "max-height");
	}
	getFlattenColumns() {
		const flattenColumns = [];
		this.table.store.states.columns.value.forEach((column) => {
			if (column.isColumnGroup) flattenColumns.push.apply(flattenColumns, column.columns);
			else flattenColumns.push(column);
		});
		return flattenColumns;
	}
	updateElsHeight() {
		this.updateScrollY();
		this.notifyObservers("scrollable");
	}
	headerDisplayNone(elm) {
		if (!elm) return true;
		let headerChild = elm;
		while (headerChild.tagName !== "DIV") {
			if (getComputedStyle(headerChild).display === "none") return true;
			headerChild = headerChild.parentElement;
		}
		return false;
	}
	updateColumnsWidth() {
		if (!isClient) return;
		const fit = this.fit;
		const bodyWidth = this.table.vnode.el.clientWidth;
		let bodyMinWidth = 0;
		const flattenColumns = this.getFlattenColumns();
		const flexColumns = flattenColumns.filter((column) => typeof column.width !== "number");
		flattenColumns.forEach((column) => {
			if (typeof column.width === "number" && column.realWidth) column.realWidth = null;
		});
		if (flexColumns.length > 0 && fit) {
			flattenColumns.forEach((column) => {
				bodyMinWidth += Number(column.width || column.minWidth || 80);
			});
			if (bodyMinWidth <= bodyWidth) {
				this.scrollX.value = false;
				const totalFlexWidth = bodyWidth - bodyMinWidth;
				if (flexColumns.length === 1) flexColumns[0].realWidth = Number(flexColumns[0].minWidth || 80) + totalFlexWidth;
				else {
					const flexWidthPerPixel = totalFlexWidth / flexColumns.reduce((prev, column) => prev + Number(column.minWidth || 80), 0);
					let noneFirstWidth = 0;
					flexColumns.forEach((column, index) => {
						if (index === 0) return;
						const flexWidth = Math.floor(Number(column.minWidth || 80) * flexWidthPerPixel);
						noneFirstWidth += flexWidth;
						column.realWidth = Number(column.minWidth || 80) + flexWidth;
					});
					flexColumns[0].realWidth = Number(flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
				}
			} else {
				this.scrollX.value = true;
				flexColumns.forEach((column) => {
					column.realWidth = Number(column.minWidth);
				});
			}
			this.bodyWidth.value = Math.max(bodyMinWidth, bodyWidth);
			this.table.state.resizeState.value.width = this.bodyWidth.value;
		} else {
			flattenColumns.forEach((column) => {
				if (!column.width && !column.minWidth) column.realWidth = 80;
				else column.realWidth = Number(column.width || column.minWidth);
				bodyMinWidth += column.realWidth;
			});
			this.scrollX.value = bodyMinWidth > bodyWidth;
			this.bodyWidth.value = bodyMinWidth;
		}
		const fixedColumns = this.store.states.fixedColumns.value;
		if (fixedColumns.length > 0) {
			let fixedWidth = 0;
			fixedColumns.forEach((column) => {
				fixedWidth += Number(column.realWidth || column.width);
			});
			this.fixedWidth.value = fixedWidth;
		}
		const rightFixedColumns = this.store.states.rightFixedColumns.value;
		if (rightFixedColumns.length > 0) {
			let rightFixedWidth = 0;
			rightFixedColumns.forEach((column) => {
				rightFixedWidth += Number(column.realWidth || column.width);
			});
			this.rightFixedWidth.value = rightFixedWidth;
		}
		this.notifyObservers("columns");
	}
	addObserver(observer) {
		this.observers.push(observer);
	}
	removeObserver(observer) {
		const index = this.observers.indexOf(observer);
		if (index !== -1) this.observers.splice(index, 1);
	}
	notifyObservers(event) {
		this.observers.forEach((observer) => {
			var _a, _b;
			switch (event) {
				case "columns":
					(_a = observer.state) == null || _a.onColumnsChange(this);
					break;
				case "scrollable":
					(_b = observer.state) == null || _b.onScrollableChange(this);
					break;
				default: throw new Error(`Table Layout don't have event ${event}.`);
			}
		});
	}
};
var { CheckboxGroup: ElCheckboxGroup } = ElCheckbox;
var _sfc_main$1 = defineComponent({
	name: "ElTableFilterPanel",
	components: {
		ElCheckbox,
		ElCheckboxGroup,
		ElScrollbar,
		ElTooltip,
		ElIcon,
		ArrowDown: arrow_down_default,
		ArrowUp: arrow_up_default
	},
	directives: { ClickOutside },
	props: {
		placement: {
			type: String,
			default: "bottom-start"
		},
		store: { type: Object },
		column: { type: Object },
		upDataColumn: { type: Function }
	},
	setup(props) {
		const instance = getCurrentInstance();
		const { t } = useLocale();
		const ns = useNamespace("table-filter");
		const parent = instance == null ? void 0 : instance.parent;
		if (!parent.filterPanels.value[props.column.id]) parent.filterPanels.value[props.column.id] = instance;
		const tooltipVisible = ref(false);
		const tooltip = ref(null);
		const filters = computed(() => {
			return props.column && props.column.filters;
		});
		const filterValue = computed({
			get: () => {
				var _a;
				return (((_a = props.column) == null ? void 0 : _a.filteredValue) || [])[0];
			},
			set: (value) => {
				if (filteredValue.value) if (typeof value !== "undefined" && value !== null) filteredValue.value.splice(0, 1, value);
				else filteredValue.value.splice(0, 1);
			}
		});
		const filteredValue = computed({
			get() {
				if (props.column) return props.column.filteredValue || [];
				return [];
			},
			set(value) {
				if (props.column) props.upDataColumn("filteredValue", value);
			}
		});
		const multiple = computed(() => {
			if (props.column) return props.column.filterMultiple;
			return true;
		});
		const isActive = (filter) => {
			return filter.value === filterValue.value;
		};
		const hidden = () => {
			tooltipVisible.value = false;
		};
		const showFilterPanel = (e) => {
			e.stopPropagation();
			tooltipVisible.value = !tooltipVisible.value;
		};
		const hideFilterPanel = () => {
			tooltipVisible.value = false;
		};
		const handleConfirm = () => {
			confirmFilter(filteredValue.value);
			hidden();
		};
		const handleReset = () => {
			filteredValue.value = [];
			confirmFilter(filteredValue.value);
			hidden();
		};
		const handleSelect = (_filterValue) => {
			filterValue.value = _filterValue;
			if (typeof _filterValue !== "undefined" && _filterValue !== null) confirmFilter(filteredValue.value);
			else confirmFilter([]);
			hidden();
		};
		const confirmFilter = (filteredValue2) => {
			props.store.commit("filterChange", {
				column: props.column,
				values: filteredValue2
			});
			props.store.updateAllSelected();
		};
		watch(tooltipVisible, (value) => {
			if (props.column) props.upDataColumn("filterOpened", value);
		}, { immediate: true });
		return {
			tooltipVisible,
			multiple,
			filteredValue,
			filterValue,
			filters,
			handleConfirm,
			handleReset,
			handleSelect,
			isActive,
			t,
			ns,
			showFilterPanel,
			hideFilterPanel,
			popperPaneRef: computed(() => {
				var _a, _b;
				return (_b = (_a = tooltip.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
			}),
			tooltip
		};
	}
});
var _hoisted_1$1 = { key: 0 };
var _hoisted_2$1 = ["disabled"];
var _hoisted_3 = ["label", "onClick"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_el_checkbox = resolveComponent("el-checkbox");
	const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
	const _component_el_scrollbar = resolveComponent("el-scrollbar");
	const _component_arrow_up = resolveComponent("arrow-up");
	const _component_arrow_down = resolveComponent("arrow-down");
	const _component_el_icon = resolveComponent("el-icon");
	const _component_el_tooltip = resolveComponent("el-tooltip");
	const _directive_click_outside = resolveDirective("click-outside");
	return openBlock(), createBlock(_component_el_tooltip, {
		ref: "tooltip",
		visible: _ctx.tooltipVisible,
		offset: 0,
		placement: _ctx.placement,
		"show-arrow": false,
		"stop-popper-mouse-event": false,
		teleported: "",
		effect: "light",
		pure: "",
		"popper-class": _ctx.ns.b(),
		persistent: ""
	}, {
		content: withCtx(() => [_ctx.multiple ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", { class: normalizeClass(_ctx.ns.e("content")) }, [createVNode(_component_el_scrollbar, { "wrap-class": _ctx.ns.e("wrap") }, {
			default: withCtx(() => [createVNode(_component_el_checkbox_group, {
				modelValue: _ctx.filteredValue,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.filteredValue = $event),
				class: normalizeClass(_ctx.ns.e("checkbox-group"))
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filters, (filter) => {
					return openBlock(), createBlock(_component_el_checkbox, {
						key: filter.value,
						label: filter.value
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(filter.text), 1)]),
						_: 2
					}, 1032, ["label"]);
				}), 128))]),
				_: 1
			}, 8, ["modelValue", "class"])]),
			_: 1
		}, 8, ["wrap-class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.ns.e("bottom")) }, [createBaseVNode("button", {
			class: normalizeClass({ [_ctx.ns.is("disabled")]: _ctx.filteredValue.length === 0 }),
			disabled: _ctx.filteredValue.length === 0,
			type: "button",
			onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleConfirm && _ctx.handleConfirm(...args))
		}, toDisplayString(_ctx.t("el.table.confirmFilter")), 11, _hoisted_2$1), createBaseVNode("button", {
			type: "button",
			onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleReset && _ctx.handleReset(...args))
		}, toDisplayString(_ctx.t("el.table.resetFilter")), 1)], 2)])) : (openBlock(), createElementBlock("ul", {
			key: 1,
			class: normalizeClass(_ctx.ns.e("list"))
		}, [createBaseVNode("li", {
			class: normalizeClass([_ctx.ns.e("list-item"), { [_ctx.ns.is("active")]: _ctx.filterValue === void 0 || _ctx.filterValue === null }]),
			onClick: _cache[3] || (_cache[3] = ($event) => _ctx.handleSelect(null))
		}, toDisplayString(_ctx.t("el.table.clearFilter")), 3), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filters, (filter) => {
			return openBlock(), createElementBlock("li", {
				key: filter.value,
				class: normalizeClass([_ctx.ns.e("list-item"), _ctx.ns.is("active", _ctx.isActive(filter))]),
				label: filter.value,
				onClick: ($event) => _ctx.handleSelect(filter.value)
			}, toDisplayString(filter.text), 11, _hoisted_3);
		}), 128))], 2))]),
		default: withCtx(() => [withDirectives((openBlock(), createElementBlock("span", {
			class: normalizeClass([`${_ctx.ns.namespace.value}-table__column-filter-trigger`, `${_ctx.ns.namespace.value}-none-outline`]),
			onClick: _cache[4] || (_cache[4] = (...args) => _ctx.showFilterPanel && _ctx.showFilterPanel(...args))
		}, [createVNode(_component_el_icon, null, {
			default: withCtx(() => [_ctx.column.filterOpened ? (openBlock(), createBlock(_component_arrow_up, { key: 0 })) : (openBlock(), createBlock(_component_arrow_down, { key: 1 }))]),
			_: 1
		})], 2)), [[
			_directive_click_outside,
			_ctx.hideFilterPanel,
			_ctx.popperPaneRef
		]])]),
		_: 1
	}, 8, [
		"visible",
		"placement",
		"popper-class"
	]);
}
var FilterPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function useLayoutObserver(root) {
	const instance = getCurrentInstance();
	onBeforeMount(() => {
		tableLayout.value.addObserver(instance);
	});
	onMounted(() => {
		onColumnsChange(tableLayout.value);
		onScrollableChange(tableLayout.value);
	});
	onUpdated(() => {
		onColumnsChange(tableLayout.value);
		onScrollableChange(tableLayout.value);
	});
	onUnmounted(() => {
		tableLayout.value.removeObserver(instance);
	});
	const tableLayout = computed(() => {
		const layout = root.layout;
		if (!layout) throw new Error("Can not find table layout.");
		return layout;
	});
	const onColumnsChange = (layout) => {
		var _a;
		const cols = ((_a = root.vnode.el) == null ? void 0 : _a.querySelectorAll("colgroup > col")) || [];
		if (!cols.length) return;
		const flattenColumns = layout.getFlattenColumns();
		const columnsMap = {};
		flattenColumns.forEach((column) => {
			columnsMap[column.id] = column;
		});
		for (let i = 0, j = cols.length; i < j; i++) {
			const col = cols[i];
			const column = columnsMap[col.getAttribute("name")];
			if (column) col.setAttribute("width", column.realWidth || column.width);
		}
	};
	const onScrollableChange = (layout) => {
		var _a, _b;
		const cols = ((_a = root.vnode.el) == null ? void 0 : _a.querySelectorAll("colgroup > col[name=gutter]")) || [];
		for (let i = 0, j = cols.length; i < j; i++) cols[i].setAttribute("width", layout.scrollY.value ? layout.gutterWidth : "0");
		const ths = ((_b = root.vnode.el) == null ? void 0 : _b.querySelectorAll("th.gutter")) || [];
		for (let i = 0, j = ths.length; i < j; i++) {
			const th = ths[i];
			th.style.width = layout.scrollY.value ? `${layout.gutterWidth}px` : "0";
			th.style.display = layout.scrollY.value ? "" : "none";
		}
	};
	return {
		tableLayout: tableLayout.value,
		onColumnsChange,
		onScrollableChange
	};
}
var TABLE_INJECTION_KEY = Symbol("ElTable");
function useEvent(props, emit) {
	const instance = getCurrentInstance();
	const parent = inject(TABLE_INJECTION_KEY);
	const handleFilterClick = (event) => {
		event.stopPropagation();
	};
	const handleHeaderClick = (event, column) => {
		if (!column.filters && column.sortable) handleSortClick(event, column, false);
		else if (column.filterable && !column.sortable) handleFilterClick(event);
		parent?.emit("header-click", column, event);
	};
	const handleHeaderContextMenu = (event, column) => {
		parent?.emit("header-contextmenu", column, event);
	};
	const draggingColumn = ref(null);
	const dragging = ref(false);
	const dragState = ref({});
	const handleMouseDown = (event, column) => {
		if (!isClient) return;
		if (column.children && column.children.length > 0) return;
		if (draggingColumn.value && props.border) {
			dragging.value = true;
			const table = parent;
			emit("set-drag-visible", true);
			const tableLeft = (table == null ? void 0 : table.vnode.el).getBoundingClientRect().left;
			const columnEl = instance.vnode.el.querySelector(`th.${column.id}`);
			const columnRect = columnEl.getBoundingClientRect();
			const minLeft = columnRect.left - tableLeft + 30;
			addClass(columnEl, "noclick");
			dragState.value = {
				startMouseLeft: event.clientX,
				startLeft: columnRect.right - tableLeft,
				startColumnLeft: columnRect.left - tableLeft,
				tableLeft
			};
			const resizeProxy = table == null ? void 0 : table.refs.resizeProxy;
			resizeProxy.style.left = `${dragState.value.startLeft}px`;
			document.onselectstart = function() {
				return false;
			};
			document.ondragstart = function() {
				return false;
			};
			const handleMouseMove2 = (event2) => {
				const deltaLeft = event2.clientX - dragState.value.startMouseLeft;
				const proxyLeft = dragState.value.startLeft + deltaLeft;
				resizeProxy.style.left = `${Math.max(minLeft, proxyLeft)}px`;
			};
			const handleMouseUp = () => {
				if (dragging.value) {
					const { startColumnLeft, startLeft } = dragState.value;
					column.width = column.realWidth = Number.parseInt(resizeProxy.style.left, 10) - startColumnLeft;
					table?.emit("header-dragend", column.width, startLeft - startColumnLeft, column, event);
					requestAnimationFrame(() => {
						props.store.scheduleLayout(false, true);
					});
					document.body.style.cursor = "";
					dragging.value = false;
					draggingColumn.value = null;
					dragState.value = {};
					emit("set-drag-visible", false);
				}
				document.removeEventListener("mousemove", handleMouseMove2);
				document.removeEventListener("mouseup", handleMouseUp);
				document.onselectstart = null;
				document.ondragstart = null;
				setTimeout(() => {
					removeClass(columnEl, "noclick");
				}, 0);
			};
			document.addEventListener("mousemove", handleMouseMove2);
			document.addEventListener("mouseup", handleMouseUp);
		}
	};
	const handleMouseMove = (event, column) => {
		if (column.children && column.children.length > 0) return;
		const el = event.target;
		if (!isElement(el)) return;
		const target = el == null ? void 0 : el.closest("th");
		if (!column || !column.resizable) return;
		if (!dragging.value && props.border) {
			const rect = target.getBoundingClientRect();
			const bodyStyle = document.body.style;
			if (rect.width > 12 && rect.right - event.pageX < 8) {
				bodyStyle.cursor = "col-resize";
				if (hasClass(target, "is-sortable")) target.style.cursor = "col-resize";
				draggingColumn.value = column;
			} else if (!dragging.value) {
				bodyStyle.cursor = "";
				if (hasClass(target, "is-sortable")) target.style.cursor = "pointer";
				draggingColumn.value = null;
			}
		}
	};
	const handleMouseOut = () => {
		if (!isClient) return;
		document.body.style.cursor = "";
	};
	const toggleOrder = ({ order, sortOrders }) => {
		if (order === "") return sortOrders[0];
		const index = sortOrders.indexOf(order || null);
		return sortOrders[index > sortOrders.length - 2 ? 0 : index + 1];
	};
	const handleSortClick = (event, column, givenOrder) => {
		var _a;
		event.stopPropagation();
		const order = column.order === givenOrder ? null : givenOrder || toggleOrder(column);
		const target = (_a = event.target) == null ? void 0 : _a.closest("th");
		if (target) {
			if (hasClass(target, "noclick")) {
				removeClass(target, "noclick");
				return;
			}
		}
		if (!column.sortable) return;
		const states = props.store.states;
		let sortProp = states.sortProp.value;
		let sortOrder;
		const sortingColumn = states.sortingColumn.value;
		if (sortingColumn !== column || sortingColumn === column && sortingColumn.order === null) {
			if (sortingColumn) sortingColumn.order = null;
			states.sortingColumn.value = column;
			sortProp = column.property;
		}
		if (!order) sortOrder = column.order = null;
		else sortOrder = column.order = order;
		states.sortProp.value = sortProp;
		states.sortOrder.value = sortOrder;
		parent?.store.commit("changeSortCondition");
	};
	return {
		handleHeaderClick,
		handleHeaderContextMenu,
		handleMouseDown,
		handleMouseMove,
		handleMouseOut,
		handleSortClick,
		handleFilterClick
	};
}
function useStyle$2(props) {
	const parent = inject(TABLE_INJECTION_KEY);
	const ns = useNamespace("table");
	const getHeaderRowStyle = (rowIndex) => {
		const headerRowStyle = parent == null ? void 0 : parent.props.headerRowStyle;
		if (typeof headerRowStyle === "function") return headerRowStyle.call(null, { rowIndex });
		return headerRowStyle;
	};
	const getHeaderRowClass = (rowIndex) => {
		const classes = [];
		const headerRowClassName = parent == null ? void 0 : parent.props.headerRowClassName;
		if (typeof headerRowClassName === "string") classes.push(headerRowClassName);
		else if (typeof headerRowClassName === "function") classes.push(headerRowClassName.call(null, { rowIndex }));
		return classes.join(" ");
	};
	const getHeaderCellStyle = (rowIndex, columnIndex, row, column) => {
		var _a;
		let headerCellStyles = (_a = parent == null ? void 0 : parent.props.headerCellStyle) != null ? _a : {};
		if (typeof headerCellStyles === "function") headerCellStyles = headerCellStyles.call(null, {
			rowIndex,
			columnIndex,
			row,
			column
		});
		const fixedStyle = getFixedColumnOffset(columnIndex, column.fixed, props.store, row);
		ensurePosition(fixedStyle, "left");
		ensurePosition(fixedStyle, "right");
		return Object.assign({}, headerCellStyles, fixedStyle);
	};
	const getHeaderCellClass = (rowIndex, columnIndex, row, column) => {
		const fixedClasses = getFixedColumnsClass(ns.b(), columnIndex, column.fixed, props.store, row);
		const classes = [
			column.id,
			column.order,
			column.headerAlign,
			column.className,
			column.labelClassName,
			...fixedClasses
		];
		if (!column.children) classes.push("is-leaf");
		if (column.sortable) classes.push("is-sortable");
		const headerCellClassName = parent == null ? void 0 : parent.props.headerCellClassName;
		if (typeof headerCellClassName === "string") classes.push(headerCellClassName);
		else if (typeof headerCellClassName === "function") classes.push(headerCellClassName.call(null, {
			rowIndex,
			columnIndex,
			row,
			column
		}));
		classes.push(ns.e("cell"));
		return classes.filter((className) => Boolean(className)).join(" ");
	};
	return {
		getHeaderRowStyle,
		getHeaderRowClass,
		getHeaderCellStyle,
		getHeaderCellClass
	};
}
var getAllColumns = (columns) => {
	const result = [];
	columns.forEach((column) => {
		if (column.children) {
			result.push(column);
			result.push.apply(result, getAllColumns(column.children));
		} else result.push(column);
	});
	return result;
};
var convertToRows = (originColumns) => {
	let maxLevel = 1;
	const traverse = (column, parent) => {
		if (parent) {
			column.level = parent.level + 1;
			if (maxLevel < column.level) maxLevel = column.level;
		}
		if (column.children) {
			let colSpan = 0;
			column.children.forEach((subColumn) => {
				traverse(subColumn, column);
				colSpan += subColumn.colSpan;
			});
			column.colSpan = colSpan;
		} else column.colSpan = 1;
	};
	originColumns.forEach((column) => {
		column.level = 1;
		traverse(column, void 0);
	});
	const rows = [];
	for (let i = 0; i < maxLevel; i++) rows.push([]);
	getAllColumns(originColumns).forEach((column) => {
		if (!column.children) column.rowSpan = maxLevel - column.level + 1;
		else {
			column.rowSpan = 1;
			column.children.forEach((col) => col.isSubColumn = true);
		}
		rows[column.level - 1].push(column);
	});
	return rows;
};
function useUtils$1(props) {
	const parent = inject(TABLE_INJECTION_KEY);
	const columnRows = computed(() => {
		return convertToRows(props.store.states.originColumns.value);
	});
	const isGroup = computed(() => {
		const result = columnRows.value.length > 1;
		if (result && parent) parent.state.isGroup.value = true;
		return result;
	});
	const toggleAllSelection = (event) => {
		event.stopPropagation();
		parent?.store.commit("toggleAllSelection");
	};
	return {
		isGroup,
		toggleAllSelection,
		columnRows
	};
}
var TableHeader = defineComponent({
	name: "ElTableHeader",
	components: { ElCheckbox },
	props: {
		fixed: {
			type: String,
			default: ""
		},
		store: {
			required: true,
			type: Object
		},
		border: Boolean,
		defaultSort: {
			type: Object,
			default: () => {
				return {
					prop: "",
					order: ""
				};
			}
		}
	},
	setup(props, { emit }) {
		const instance = getCurrentInstance();
		const parent = inject(TABLE_INJECTION_KEY);
		const ns = useNamespace("table");
		const filterPanels = ref({});
		const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent);
		onMounted(async () => {
			await nextTick();
			await nextTick();
			const { prop, order } = props.defaultSort;
			parent?.store.commit("sort", {
				prop,
				order,
				init: true
			});
		});
		const { handleHeaderClick, handleHeaderContextMenu, handleMouseDown, handleMouseMove, handleMouseOut, handleSortClick, handleFilterClick } = useEvent(props, emit);
		const { getHeaderRowStyle, getHeaderRowClass, getHeaderCellStyle, getHeaderCellClass } = useStyle$2(props);
		const { isGroup, toggleAllSelection, columnRows } = useUtils$1(props);
		instance.state = {
			onColumnsChange,
			onScrollableChange
		};
		instance.filterPanels = filterPanels;
		return {
			ns,
			filterPanels,
			onColumnsChange,
			onScrollableChange,
			columnRows,
			getHeaderRowClass,
			getHeaderRowStyle,
			getHeaderCellClass,
			getHeaderCellStyle,
			handleHeaderClick,
			handleHeaderContextMenu,
			handleMouseDown,
			handleMouseMove,
			handleMouseOut,
			handleSortClick,
			handleFilterClick,
			isGroup,
			toggleAllSelection
		};
	},
	render() {
		const { ns, isGroup, columnRows, getHeaderCellStyle, getHeaderCellClass, getHeaderRowClass, getHeaderRowStyle, handleHeaderClick, handleHeaderContextMenu, handleMouseDown, handleMouseMove, handleSortClick, handleMouseOut, store, $parent } = this;
		let rowSpan = 1;
		return h("thead", { class: { [ns.is("group")]: isGroup } }, columnRows.map((subColumns, rowIndex) => h("tr", {
			class: getHeaderRowClass(rowIndex),
			key: rowIndex,
			style: getHeaderRowStyle(rowIndex)
		}, subColumns.map((column, cellIndex) => {
			if (column.rowSpan > rowSpan) rowSpan = column.rowSpan;
			return h("th", {
				class: getHeaderCellClass(rowIndex, cellIndex, subColumns, column),
				colspan: column.colSpan,
				key: `${column.id}-thead`,
				rowspan: column.rowSpan,
				style: getHeaderCellStyle(rowIndex, cellIndex, subColumns, column),
				onClick: ($event) => handleHeaderClick($event, column),
				onContextmenu: ($event) => handleHeaderContextMenu($event, column),
				onMousedown: ($event) => handleMouseDown($event, column),
				onMousemove: ($event) => handleMouseMove($event, column),
				onMouseout: handleMouseOut
			}, [h("div", { class: ["cell", column.filteredValue && column.filteredValue.length > 0 ? "highlight" : ""] }, [
				column.renderHeader ? column.renderHeader({
					column,
					$index: cellIndex,
					store,
					_self: $parent
				}) : column.label,
				column.sortable && h("span", {
					onClick: ($event) => handleSortClick($event, column),
					class: "caret-wrapper"
				}, [h("i", {
					onClick: ($event) => handleSortClick($event, column, "ascending"),
					class: "sort-caret ascending"
				}), h("i", {
					onClick: ($event) => handleSortClick($event, column, "descending"),
					class: "sort-caret descending"
				})]),
				column.filterable && h(FilterPanel, {
					store,
					placement: column.filterPlacement || "bottom-start",
					column,
					upDataColumn: (key, value) => {
						column[key] = value;
					}
				})
			])]);
		}))));
	}
});
function useEvents(props) {
	const parent = inject(TABLE_INJECTION_KEY);
	const tooltipContent = ref("");
	const tooltipTrigger = ref(h("div"));
	const { nextZIndex } = useZIndex();
	const handleEvent = (event, row, name) => {
		var _a;
		const table = parent;
		const cell = getCell(event);
		let column;
		const namespace = (_a = table == null ? void 0 : table.vnode.el) == null ? void 0 : _a.dataset.prefix;
		if (cell) {
			column = getColumnByCell({ columns: props.store.states.columns.value }, cell, namespace);
			if (column) table?.emit(`cell-${name}`, row, column, cell, event);
		}
		table?.emit(`row-${name}`, row, column, event);
	};
	const handleDoubleClick = (event, row) => {
		handleEvent(event, row, "dblclick");
	};
	const handleClick = (event, row) => {
		props.store.commit("setCurrentRow", row);
		handleEvent(event, row, "click");
	};
	const handleContextMenu = (event, row) => {
		handleEvent(event, row, "contextmenu");
	};
	const handleMouseEnter = debounce_default((index) => {
		props.store.commit("setHoverRow", index);
	}, 30);
	const handleMouseLeave = debounce_default(() => {
		props.store.commit("setHoverRow", null);
	}, 30);
	const getPadding = (el) => {
		const style = window.getComputedStyle(el, null);
		return {
			left: Number.parseInt(style.paddingLeft, 10) || 0,
			right: Number.parseInt(style.paddingRight, 10) || 0,
			top: Number.parseInt(style.paddingTop, 10) || 0,
			bottom: Number.parseInt(style.paddingBottom, 10) || 0
		};
	};
	const handleCellMouseEnter = (event, row, tooltipOptions) => {
		var _a;
		const table = parent;
		const cell = getCell(event);
		const namespace = (_a = table == null ? void 0 : table.vnode.el) == null ? void 0 : _a.dataset.prefix;
		if (cell) {
			const hoverState = table.hoverState = {
				cell,
				column: getColumnByCell({ columns: props.store.states.columns.value }, cell, namespace),
				row
			};
			table?.emit("cell-mouse-enter", hoverState.row, hoverState.column, hoverState.cell, event);
		}
		if (!tooltipOptions) return;
		const cellChild = event.target.querySelector(".cell");
		if (!(hasClass(cellChild, `${namespace}-tooltip`) && cellChild.childNodes.length)) return;
		const range = document.createRange();
		range.setStart(cellChild, 0);
		range.setEnd(cellChild, cellChild.childNodes.length);
		let rangeWidth = range.getBoundingClientRect().width;
		let rangeHeight = range.getBoundingClientRect().height;
		if (rangeWidth - Math.floor(rangeWidth) < .001) rangeWidth = Math.floor(rangeWidth);
		if (rangeHeight - Math.floor(rangeHeight) < .001) rangeHeight = Math.floor(rangeHeight);
		const { top, left, right, bottom } = getPadding(cellChild);
		const horizontalPadding = left + right;
		const verticalPadding = top + bottom;
		if (rangeWidth + horizontalPadding > cellChild.offsetWidth || rangeHeight + verticalPadding > cellChild.offsetHeight || cellChild.scrollWidth > cellChild.offsetWidth) createTablePopper(parent == null ? void 0 : parent.refs.tableWrapper, cell, cell.innerText || cell.textContent, nextZIndex, tooltipOptions);
	};
	const handleCellMouseLeave = (event) => {
		if (!getCell(event)) return;
		const oldHoverState = parent == null ? void 0 : parent.hoverState;
		parent?.emit("cell-mouse-leave", oldHoverState == null ? void 0 : oldHoverState.row, oldHoverState == null ? void 0 : oldHoverState.column, oldHoverState == null ? void 0 : oldHoverState.cell, event);
	};
	return {
		handleDoubleClick,
		handleClick,
		handleContextMenu,
		handleMouseEnter,
		handleMouseLeave,
		handleCellMouseEnter,
		handleCellMouseLeave,
		tooltipContent,
		tooltipTrigger
	};
}
function useStyles(props) {
	const parent = inject(TABLE_INJECTION_KEY);
	const ns = useNamespace("table");
	const getRowStyle = (row, rowIndex) => {
		const rowStyle = parent == null ? void 0 : parent.props.rowStyle;
		if (typeof rowStyle === "function") return rowStyle.call(null, {
			row,
			rowIndex
		});
		return rowStyle || null;
	};
	const getRowClass = (row, rowIndex) => {
		const classes = [ns.e("row")];
		if ((parent == null ? void 0 : parent.props.highlightCurrentRow) && row === props.store.states.currentRow.value) classes.push("current-row");
		if (props.stripe && rowIndex % 2 === 1) classes.push(ns.em("row", "striped"));
		const rowClassName = parent == null ? void 0 : parent.props.rowClassName;
		if (typeof rowClassName === "string") classes.push(rowClassName);
		else if (typeof rowClassName === "function") classes.push(rowClassName.call(null, {
			row,
			rowIndex
		}));
		return classes;
	};
	const getCellStyle = (rowIndex, columnIndex, row, column) => {
		const cellStyle = parent == null ? void 0 : parent.props.cellStyle;
		let cellStyles = cellStyle != null ? cellStyle : {};
		if (typeof cellStyle === "function") cellStyles = cellStyle.call(null, {
			rowIndex,
			columnIndex,
			row,
			column
		});
		const fixedStyle = getFixedColumnOffset(columnIndex, props == null ? void 0 : props.fixed, props.store);
		ensurePosition(fixedStyle, "left");
		ensurePosition(fixedStyle, "right");
		return Object.assign({}, cellStyles, fixedStyle);
	};
	const getCellClass = (rowIndex, columnIndex, row, column, offset) => {
		const fixedClasses = getFixedColumnsClass(ns.b(), columnIndex, props == null ? void 0 : props.fixed, props.store, void 0, offset);
		const classes = [
			column.id,
			column.align,
			column.className,
			...fixedClasses
		];
		const cellClassName = parent == null ? void 0 : parent.props.cellClassName;
		if (typeof cellClassName === "string") classes.push(cellClassName);
		else if (typeof cellClassName === "function") classes.push(cellClassName.call(null, {
			rowIndex,
			columnIndex,
			row,
			column
		}));
		classes.push(ns.e("cell"));
		return classes.filter((className) => Boolean(className)).join(" ");
	};
	const getSpan = (row, column, rowIndex, columnIndex) => {
		let rowspan = 1;
		let colspan = 1;
		const fn = parent == null ? void 0 : parent.props.spanMethod;
		if (typeof fn === "function") {
			const result = fn({
				row,
				column,
				rowIndex,
				columnIndex
			});
			if (Array.isArray(result)) {
				rowspan = result[0];
				colspan = result[1];
			} else if (typeof result === "object") {
				rowspan = result.rowspan;
				colspan = result.colspan;
			}
		}
		return {
			rowspan,
			colspan
		};
	};
	const getColspanRealWidth = (columns, colspan, index) => {
		if (colspan < 1) return columns[index].realWidth;
		const widthArr = columns.map(({ realWidth, width }) => realWidth || width).slice(index, index + colspan);
		return Number(widthArr.reduce((acc, width) => Number(acc) + Number(width), -1));
	};
	return {
		getRowStyle,
		getRowClass,
		getCellStyle,
		getCellClass,
		getSpan,
		getColspanRealWidth
	};
}
function useRender$1(props) {
	const parent = inject(TABLE_INJECTION_KEY);
	const ns = useNamespace("table");
	const { handleDoubleClick, handleClick, handleContextMenu, handleMouseEnter, handleMouseLeave, handleCellMouseEnter, handleCellMouseLeave, tooltipContent, tooltipTrigger } = useEvents(props);
	const { getRowStyle, getRowClass, getCellStyle, getCellClass, getSpan, getColspanRealWidth } = useStyles(props);
	const firstDefaultColumnIndex = computed(() => {
		return props.store.states.columns.value.findIndex(({ type }) => type === "default");
	});
	const getKeyOfRow = (row, index) => {
		const rowKey = parent.props.rowKey;
		if (rowKey) return getRowIdentity(row, rowKey);
		return index;
	};
	const rowRender = (row, $index, treeRowData, expanded = false) => {
		const { tooltipEffect, tooltipOptions, store } = props;
		const { indent, columns } = store.states;
		const rowClasses = getRowClass(row, $index);
		let display = true;
		if (treeRowData) {
			rowClasses.push(ns.em("row", `level-${treeRowData.level}`));
			display = treeRowData.display;
		}
		return h("tr", {
			style: [display ? null : { display: "none" }, getRowStyle(row, $index)],
			class: rowClasses,
			key: getKeyOfRow(row, $index),
			onDblclick: ($event) => handleDoubleClick($event, row),
			onClick: ($event) => handleClick($event, row),
			onContextmenu: ($event) => handleContextMenu($event, row),
			onMouseenter: () => handleMouseEnter($index),
			onMouseleave: handleMouseLeave
		}, columns.value.map((column, cellIndex) => {
			const { rowspan, colspan } = getSpan(row, column, $index, cellIndex);
			if (!rowspan || !colspan) return null;
			const columnData = Object.assign({}, column);
			columnData.realWidth = getColspanRealWidth(columns.value, colspan, cellIndex);
			const data = {
				store: props.store,
				_self: props.context || parent,
				column: columnData,
				row,
				$index,
				cellIndex,
				expanded
			};
			if (cellIndex === firstDefaultColumnIndex.value && treeRowData) {
				data.treeNode = {
					indent: treeRowData.level * indent.value,
					level: treeRowData.level
				};
				if (typeof treeRowData.expanded === "boolean") {
					data.treeNode.expanded = treeRowData.expanded;
					if ("loading" in treeRowData) data.treeNode.loading = treeRowData.loading;
					if ("noLazyChildren" in treeRowData) data.treeNode.noLazyChildren = treeRowData.noLazyChildren;
				}
			}
			const baseKey = `${$index},${cellIndex}`;
			const patchKey = columnData.columnKey || columnData.rawColumnKey || "";
			const tdChildren = cellChildren(cellIndex, column, data);
			const mergedTooltipOptions = column.showOverflowTooltip && merge_default({ effect: tooltipEffect }, tooltipOptions, column.showOverflowTooltip);
			return h("td", {
				style: getCellStyle($index, cellIndex, row, column),
				class: getCellClass($index, cellIndex, row, column, colspan - 1),
				key: `${patchKey}${baseKey}`,
				rowspan,
				colspan,
				onMouseenter: ($event) => handleCellMouseEnter($event, row, mergedTooltipOptions),
				onMouseleave: handleCellMouseLeave
			}, [tdChildren]);
		}));
	};
	const cellChildren = (cellIndex, column, data) => {
		return column.renderCell(data);
	};
	const wrappedRowRender = (row, $index) => {
		const store = props.store;
		const { isRowExpanded, assertRowKey } = store;
		const { treeData, lazyTreeNodeMap, childrenColumnName, rowKey } = store.states;
		const columns = store.states.columns.value;
		if (columns.some(({ type }) => type === "expand")) {
			const expanded = isRowExpanded(row);
			const tr = rowRender(row, $index, void 0, expanded);
			const renderExpanded = parent.renderExpanded;
			if (expanded) {
				if (!renderExpanded) {
					console.error("[Element Error]renderExpanded is required.");
					return tr;
				}
				return [[tr, h("tr", { key: `expanded-row__${tr.key}` }, [h("td", {
					colspan: columns.length,
					class: `${ns.e("cell")} ${ns.e("expanded-cell")}`
				}, [renderExpanded({
					row,
					$index,
					store,
					expanded
				})])])]];
			} else return [[tr]];
		} else if (Object.keys(treeData.value).length) {
			assertRowKey();
			const key = getRowIdentity(row, rowKey.value);
			let cur = treeData.value[key];
			let treeRowData = null;
			if (cur) {
				treeRowData = {
					expanded: cur.expanded,
					level: cur.level,
					display: true
				};
				if (typeof cur.lazy === "boolean") {
					if (typeof cur.loaded === "boolean" && cur.loaded) treeRowData.noLazyChildren = !(cur.children && cur.children.length);
					treeRowData.loading = cur.loading;
				}
			}
			const tmp = [rowRender(row, $index, treeRowData)];
			if (cur) {
				let i = 0;
				const traverse = (children, parent2) => {
					if (!(children && children.length && parent2)) return;
					children.forEach((node) => {
						const innerTreeRowData = {
							display: parent2.display && parent2.expanded,
							level: parent2.level + 1,
							expanded: false,
							noLazyChildren: false,
							loading: false
						};
						const childKey = getRowIdentity(node, rowKey.value);
						if (childKey === void 0 || childKey === null) throw new Error("For nested data item, row-key is required.");
						cur = { ...treeData.value[childKey] };
						if (cur) {
							innerTreeRowData.expanded = cur.expanded;
							cur.level = cur.level || innerTreeRowData.level;
							cur.display = !!(cur.expanded && innerTreeRowData.display);
							if (typeof cur.lazy === "boolean") {
								if (typeof cur.loaded === "boolean" && cur.loaded) innerTreeRowData.noLazyChildren = !(cur.children && cur.children.length);
								innerTreeRowData.loading = cur.loading;
							}
						}
						i++;
						tmp.push(rowRender(node, $index + i, innerTreeRowData));
						if (cur) traverse(lazyTreeNodeMap.value[childKey] || node[childrenColumnName.value], cur);
					});
				};
				cur.display = true;
				traverse(lazyTreeNodeMap.value[key] || row[childrenColumnName.value], cur);
			}
			return tmp;
		} else return rowRender(row, $index, void 0);
	};
	return {
		wrappedRowRender,
		tooltipContent,
		tooltipTrigger
	};
}
var TableBody = defineComponent({
	name: "ElTableBody",
	props: {
		store: {
			required: true,
			type: Object
		},
		stripe: Boolean,
		tooltipEffect: String,
		tooltipOptions: { type: Object },
		context: {
			default: () => ({}),
			type: Object
		},
		rowClassName: [String, Function],
		rowStyle: [Object, Function],
		fixed: {
			type: String,
			default: ""
		},
		highlight: Boolean
	},
	setup(props) {
		const instance = getCurrentInstance();
		const parent = inject(TABLE_INJECTION_KEY);
		const ns = useNamespace("table");
		const { wrappedRowRender, tooltipContent, tooltipTrigger } = useRender$1(props);
		const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent);
		watch(props.store.states.hoverRow, (newVal, oldVal) => {
			if (!props.store.states.isComplex.value || !isClient) return;
			rAF(() => {
				const el = instance == null ? void 0 : instance.vnode.el;
				const rows = Array.from((el == null ? void 0 : el.children) || []).filter((e) => e == null ? void 0 : e.classList.contains(`${ns.e("row")}`));
				const oldRow = rows[oldVal];
				const newRow = rows[newVal];
				if (oldRow) removeClass(oldRow, "hover-row");
				if (newRow) addClass(newRow, "hover-row");
			});
		});
		onUnmounted(() => {
			var _a;
			(_a = removePopper) == null || _a();
		});
		return {
			ns,
			onColumnsChange,
			onScrollableChange,
			wrappedRowRender,
			tooltipContent,
			tooltipTrigger
		};
	},
	render() {
		const { wrappedRowRender, store } = this;
		return h("tbody", { tabIndex: -1 }, [(store.states.data.value || []).reduce((acc, row) => {
			return acc.concat(wrappedRowRender(row, acc.length));
		}, [])]);
	}
});
function useMapState() {
	const table = inject(TABLE_INJECTION_KEY);
	const store = table == null ? void 0 : table.store;
	return {
		leftFixedLeafCount: computed(() => {
			return store.states.fixedLeafColumnsLength.value;
		}),
		rightFixedLeafCount: computed(() => {
			return store.states.rightFixedColumns.value.length;
		}),
		columnsCount: computed(() => {
			return store.states.columns.value.length;
		}),
		leftFixedCount: computed(() => {
			return store.states.fixedColumns.value.length;
		}),
		rightFixedCount: computed(() => {
			return store.states.rightFixedColumns.value.length;
		}),
		columns: store.states.columns
	};
}
function useStyle$1(props) {
	const { columns } = useMapState();
	const ns = useNamespace("table");
	const getCellClasses = (columns2, cellIndex) => {
		const column = columns2[cellIndex];
		const classes = [
			ns.e("cell"),
			column.id,
			column.align,
			column.labelClassName,
			...getFixedColumnsClass(ns.b(), cellIndex, column.fixed, props.store)
		];
		if (column.className) classes.push(column.className);
		if (!column.children) classes.push(ns.is("leaf"));
		return classes;
	};
	const getCellStyles = (column, cellIndex) => {
		const fixedStyle = getFixedColumnOffset(cellIndex, column.fixed, props.store);
		ensurePosition(fixedStyle, "left");
		ensurePosition(fixedStyle, "right");
		return fixedStyle;
	};
	return {
		getCellClasses,
		getCellStyles,
		columns
	};
}
var TableFooter = defineComponent({
	name: "ElTableFooter",
	props: {
		fixed: {
			type: String,
			default: ""
		},
		store: {
			required: true,
			type: Object
		},
		summaryMethod: Function,
		sumText: String,
		border: Boolean,
		defaultSort: {
			type: Object,
			default: () => {
				return {
					prop: "",
					order: ""
				};
			}
		}
	},
	setup(props) {
		const { getCellClasses, getCellStyles, columns } = useStyle$1(props);
		return {
			ns: useNamespace("table"),
			getCellClasses,
			getCellStyles,
			columns
		};
	},
	render() {
		const { columns, getCellStyles, getCellClasses, summaryMethod, sumText } = this;
		const data = this.store.states.data.value;
		let sums = [];
		if (summaryMethod) sums = summaryMethod({
			columns,
			data
		});
		else columns.forEach((column, index) => {
			if (index === 0) {
				sums[index] = sumText;
				return;
			}
			const values = data.map((item) => Number(item[column.property]));
			const precisions = [];
			let notNumber = true;
			values.forEach((value) => {
				if (!Number.isNaN(+value)) {
					notNumber = false;
					const decimal = `${value}`.split(".")[1];
					precisions.push(decimal ? decimal.length : 0);
				}
			});
			const precision = Math.max.apply(null, precisions);
			if (!notNumber) sums[index] = values.reduce((prev, curr) => {
				const value = Number(curr);
				if (!Number.isNaN(+value)) return Number.parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
				else return prev;
			}, 0);
			else sums[index] = "";
		});
		return h(h("tfoot", [h("tr", {}, [...columns.map((column, cellIndex) => h("td", {
			key: cellIndex,
			colspan: column.colSpan,
			rowspan: column.rowSpan,
			class: getCellClasses(columns, cellIndex),
			style: getCellStyles(column, cellIndex)
		}, [h("div", { class: ["cell", column.labelClassName] }, [sums[cellIndex]])]))])]));
	}
});
function useUtils(store) {
	const setCurrentRow = (row) => {
		store.commit("setCurrentRow", row);
	};
	const getSelectionRows = () => {
		return store.getSelectionRows();
	};
	const toggleRowSelection = (row, selected) => {
		store.toggleRowSelection(row, selected, false);
		store.updateAllSelected();
	};
	const clearSelection = () => {
		store.clearSelection();
	};
	const clearFilter = (columnKeys) => {
		store.clearFilter(columnKeys);
	};
	const toggleAllSelection = () => {
		store.commit("toggleAllSelection");
	};
	const toggleRowExpansion = (row, expanded) => {
		store.toggleRowExpansionAdapter(row, expanded);
	};
	const clearSort = () => {
		store.clearSort();
	};
	const sort = (prop, order) => {
		store.commit("sort", {
			prop,
			order
		});
	};
	return {
		setCurrentRow,
		getSelectionRows,
		toggleRowSelection,
		clearSelection,
		clearFilter,
		toggleAllSelection,
		toggleRowExpansion,
		clearSort,
		sort
	};
}
function useStyle(props, layout, store, table) {
	const isHidden = ref(false);
	const renderExpanded = ref(null);
	const resizeProxyVisible = ref(false);
	const setDragVisible = (visible) => {
		resizeProxyVisible.value = visible;
	};
	const resizeState = ref({
		width: null,
		height: null,
		headerHeight: null
	});
	const isGroup = ref(false);
	const scrollbarViewStyle = {
		display: "inline-block",
		verticalAlign: "middle"
	};
	const tableWidth = ref();
	const tableScrollHeight = ref(0);
	const bodyScrollHeight = ref(0);
	const headerScrollHeight = ref(0);
	const footerScrollHeight = ref(0);
	const appendScrollHeight = ref(0);
	watchEffect(() => {
		layout.setHeight(props.height);
	});
	watchEffect(() => {
		layout.setMaxHeight(props.maxHeight);
	});
	watch(() => [props.currentRowKey, store.states.rowKey], ([currentRowKey, rowKey]) => {
		if (!unref(rowKey) || !unref(currentRowKey)) return;
		store.setCurrentRowKey(`${currentRowKey}`);
	}, { immediate: true });
	watch(() => props.data, (data) => {
		table.store.commit("setData", data);
	}, {
		immediate: true,
		deep: true
	});
	watchEffect(() => {
		if (props.expandRowKeys) store.setExpandRowKeysAdapter(props.expandRowKeys);
	});
	const handleMouseLeave = () => {
		table.store.commit("setHoverRow", null);
		if (table.hoverState) table.hoverState = null;
	};
	const handleHeaderFooterMousewheel = (event, data) => {
		const { pixelX, pixelY } = data;
		if (Math.abs(pixelX) >= Math.abs(pixelY)) table.refs.bodyWrapper.scrollLeft += data.pixelX / 5;
	};
	const shouldUpdateHeight = computed(() => {
		return props.height || props.maxHeight || store.states.fixedColumns.value.length > 0 || store.states.rightFixedColumns.value.length > 0;
	});
	const tableBodyStyles = computed(() => {
		return { width: layout.bodyWidth.value ? `${layout.bodyWidth.value}px` : "" };
	});
	const doLayout = () => {
		if (shouldUpdateHeight.value) layout.updateElsHeight();
		layout.updateColumnsWidth();
		requestAnimationFrame(syncPosition);
	};
	onMounted(async () => {
		await nextTick();
		store.updateColumns();
		bindEvents();
		requestAnimationFrame(doLayout);
		const el = table.vnode.el;
		const tableHeader = table.refs.headerWrapper;
		if (props.flexible && el && el.parentElement) el.parentElement.style.minWidth = "0";
		resizeState.value = {
			width: tableWidth.value = el.offsetWidth,
			height: el.offsetHeight,
			headerHeight: props.showHeader && tableHeader ? tableHeader.offsetHeight : null
		};
		store.states.columns.value.forEach((column) => {
			if (column.filteredValue && column.filteredValue.length) table.store.commit("filterChange", {
				column,
				values: column.filteredValue,
				silent: true
			});
		});
		table.$ready = true;
	});
	const setScrollClassByEl = (el, className) => {
		if (!el) return;
		const classList = Array.from(el.classList).filter((item) => !item.startsWith("is-scrolling-"));
		classList.push(layout.scrollX.value ? className : "is-scrolling-none");
		el.className = classList.join(" ");
	};
	const setScrollClass = (className) => {
		const { tableWrapper } = table.refs;
		setScrollClassByEl(tableWrapper, className);
	};
	const hasScrollClass = (className) => {
		const { tableWrapper } = table.refs;
		return !!(tableWrapper && tableWrapper.classList.contains(className));
	};
	const syncPosition = function() {
		if (!table.refs.scrollBarRef) return;
		if (!layout.scrollX.value) {
			const scrollingNoneClass = "is-scrolling-none";
			if (!hasScrollClass(scrollingNoneClass)) setScrollClass(scrollingNoneClass);
			return;
		}
		const scrollContainer = table.refs.scrollBarRef.wrapRef;
		if (!scrollContainer) return;
		const { scrollLeft, offsetWidth, scrollWidth } = scrollContainer;
		const { headerWrapper, footerWrapper } = table.refs;
		if (headerWrapper) headerWrapper.scrollLeft = scrollLeft;
		if (footerWrapper) footerWrapper.scrollLeft = scrollLeft;
		if (scrollLeft >= scrollWidth - offsetWidth - 1) setScrollClass("is-scrolling-right");
		else if (scrollLeft === 0) setScrollClass("is-scrolling-left");
		else setScrollClass("is-scrolling-middle");
	};
	const bindEvents = () => {
		if (!table.refs.scrollBarRef) return;
		if (table.refs.scrollBarRef.wrapRef) useEventListener(table.refs.scrollBarRef.wrapRef, "scroll", syncPosition, { passive: true });
		if (props.fit) useResizeObserver(table.vnode.el, resizeListener);
		else useEventListener(window, "resize", resizeListener);
		useResizeObserver(table.refs.bodyWrapper, () => {
			var _a, _b;
			resizeListener();
			(_b = (_a = table.refs) == null ? void 0 : _a.scrollBarRef) == null || _b.update();
		});
	};
	const resizeListener = () => {
		var _a, _b, _c, _d;
		const el = table.vnode.el;
		if (!table.$ready || !el) return;
		let shouldUpdateLayout = false;
		const { width: oldWidth, height: oldHeight, headerHeight: oldHeaderHeight } = resizeState.value;
		const width = tableWidth.value = el.offsetWidth;
		if (oldWidth !== width) shouldUpdateLayout = true;
		const height = el.offsetHeight;
		if ((props.height || shouldUpdateHeight.value) && oldHeight !== height) shouldUpdateLayout = true;
		const tableHeader = props.tableLayout === "fixed" ? table.refs.headerWrapper : (_a = table.refs.tableHeaderRef) == null ? void 0 : _a.$el;
		if (props.showHeader && (tableHeader == null ? void 0 : tableHeader.offsetHeight) !== oldHeaderHeight) shouldUpdateLayout = true;
		tableScrollHeight.value = ((_b = table.refs.tableWrapper) == null ? void 0 : _b.scrollHeight) || 0;
		headerScrollHeight.value = (tableHeader == null ? void 0 : tableHeader.scrollHeight) || 0;
		footerScrollHeight.value = ((_c = table.refs.footerWrapper) == null ? void 0 : _c.offsetHeight) || 0;
		appendScrollHeight.value = ((_d = table.refs.appendWrapper) == null ? void 0 : _d.offsetHeight) || 0;
		bodyScrollHeight.value = tableScrollHeight.value - headerScrollHeight.value - footerScrollHeight.value - appendScrollHeight.value;
		if (shouldUpdateLayout) {
			resizeState.value = {
				width,
				height,
				headerHeight: props.showHeader && (tableHeader == null ? void 0 : tableHeader.offsetHeight) || 0
			};
			doLayout();
		}
	};
	const tableSize = useFormSize();
	const bodyWidth = computed(() => {
		const { bodyWidth: bodyWidth_, scrollY, gutterWidth } = layout;
		return bodyWidth_.value ? `${bodyWidth_.value - (scrollY.value ? gutterWidth : 0)}px` : "";
	});
	const tableLayout = computed(() => {
		if (props.maxHeight) return "fixed";
		return props.tableLayout;
	});
	const emptyBlockStyle = computed(() => {
		if (props.data && props.data.length) return null;
		let height = "100%";
		if (props.height && bodyScrollHeight.value) height = `${bodyScrollHeight.value}px`;
		const width = tableWidth.value;
		return {
			width: width ? `${width}px` : "",
			height
		};
	});
	const tableInnerStyle = computed(() => {
		if (props.height) return { height: !Number.isNaN(Number(props.height)) ? `${props.height}px` : props.height };
		if (props.maxHeight) return { maxHeight: !Number.isNaN(Number(props.maxHeight)) ? `${props.maxHeight}px` : props.maxHeight };
		return {};
	});
	const scrollbarStyle = computed(() => {
		if (props.height) return { height: "100%" };
		if (props.maxHeight) if (!Number.isNaN(Number(props.maxHeight))) return { maxHeight: `${props.maxHeight - headerScrollHeight.value - footerScrollHeight.value}px` };
		else return { maxHeight: `calc(${props.maxHeight} - ${headerScrollHeight.value + footerScrollHeight.value}px)` };
		return {};
	});
	const handleFixedMousewheel = (event, data) => {
		const bodyWrapper = table.refs.bodyWrapper;
		if (Math.abs(data.spinY) > 0) {
			const currentScrollTop = bodyWrapper.scrollTop;
			if (data.pixelY < 0 && currentScrollTop !== 0) event.preventDefault();
			if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) event.preventDefault();
			bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
		} else bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
	};
	return {
		isHidden,
		renderExpanded,
		setDragVisible,
		isGroup,
		handleMouseLeave,
		handleHeaderFooterMousewheel,
		tableSize,
		emptyBlockStyle,
		handleFixedMousewheel,
		resizeProxyVisible,
		bodyWidth,
		resizeState,
		doLayout,
		tableBodyStyles,
		tableLayout,
		scrollbarViewStyle,
		tableInnerStyle,
		scrollbarStyle
	};
}
function useKeyRender(table) {
	const observer = ref();
	const initWatchDom = () => {
		const columnsWrapper = table.vnode.el.querySelector(".hidden-columns");
		const config = {
			childList: true,
			subtree: true
		};
		const updateOrderFns = table.store.states.updateOrderFns;
		observer.value = new MutationObserver(() => {
			updateOrderFns.forEach((fn) => fn());
		});
		observer.value.observe(columnsWrapper, config);
	};
	onMounted(() => {
		initWatchDom();
	});
	onUnmounted(() => {
		var _a;
		(_a = observer.value) == null || _a.disconnect();
	});
}
var defaultProps$1 = {
	data: {
		type: Array,
		default: () => []
	},
	size: useSizeProp,
	width: [String, Number],
	height: [String, Number],
	maxHeight: [String, Number],
	fit: {
		type: Boolean,
		default: true
	},
	stripe: Boolean,
	border: Boolean,
	rowKey: [String, Function],
	showHeader: {
		type: Boolean,
		default: true
	},
	showSummary: Boolean,
	sumText: String,
	summaryMethod: Function,
	rowClassName: [String, Function],
	rowStyle: [Object, Function],
	cellClassName: [String, Function],
	cellStyle: [Object, Function],
	headerRowClassName: [String, Function],
	headerRowStyle: [Object, Function],
	headerCellClassName: [String, Function],
	headerCellStyle: [Object, Function],
	highlightCurrentRow: Boolean,
	currentRowKey: [String, Number],
	emptyText: String,
	expandRowKeys: Array,
	defaultExpandAll: Boolean,
	defaultSort: Object,
	tooltipEffect: String,
	tooltipOptions: Object,
	spanMethod: Function,
	selectOnIndeterminate: {
		type: Boolean,
		default: true
	},
	indent: {
		type: Number,
		default: 16
	},
	treeProps: {
		type: Object,
		default: () => {
			return {
				hasChildren: "hasChildren",
				children: "children"
			};
		}
	},
	lazy: Boolean,
	load: Function,
	style: {
		type: Object,
		default: () => ({})
	},
	className: {
		type: String,
		default: ""
	},
	tableLayout: {
		type: String,
		default: "fixed"
	},
	scrollbarAlwaysOn: {
		type: Boolean,
		default: false
	},
	flexible: Boolean,
	showOverflowTooltip: [Boolean, Object]
};
function hColgroup(props) {
	const isAuto = props.tableLayout === "auto";
	let columns = props.columns || [];
	if (isAuto) {
		if (columns.every((column) => column.width === void 0)) columns = [];
	}
	const getPropsData = (column) => {
		const propsData = {
			key: `${props.tableLayout}_${column.id}`,
			style: {},
			name: void 0
		};
		if (isAuto) propsData.style = { width: `${column.width}px` };
		else propsData.name = column.id;
		return propsData;
	};
	return h("colgroup", {}, columns.map((column) => h("col", getPropsData(column))));
}
hColgroup.props = ["columns", "tableLayout"];
var useScrollbar = () => {
	const scrollBarRef = ref();
	const scrollTo = (options, yCoord) => {
		const scrollbar = scrollBarRef.value;
		if (scrollbar) scrollbar.scrollTo(options, yCoord);
	};
	const setScrollPosition = (position, offset) => {
		const scrollbar = scrollBarRef.value;
		if (scrollbar && isNumber(offset) && ["Top", "Left"].includes(position)) scrollbar[`setScroll${position}`](offset);
	};
	const setScrollTop = (top) => setScrollPosition("Top", top);
	const setScrollLeft = (left) => setScrollPosition("Left", left);
	return {
		scrollBarRef,
		scrollTo,
		setScrollTop,
		setScrollLeft
	};
};
var tableIdSeed = 1;
var _sfc_main = defineComponent({
	name: "ElTable",
	directives: { Mousewheel },
	components: {
		TableHeader,
		TableBody,
		TableFooter,
		ElScrollbar,
		hColgroup
	},
	props: defaultProps$1,
	emits: [
		"select",
		"select-all",
		"selection-change",
		"cell-mouse-enter",
		"cell-mouse-leave",
		"cell-contextmenu",
		"cell-click",
		"cell-dblclick",
		"row-click",
		"row-contextmenu",
		"row-dblclick",
		"header-click",
		"header-contextmenu",
		"sort-change",
		"filter-change",
		"current-change",
		"header-dragend",
		"expand-change"
	],
	setup(props) {
		const { t } = useLocale();
		const ns = useNamespace("table");
		const table = getCurrentInstance();
		provide(TABLE_INJECTION_KEY, table);
		const store = createStore(table, props);
		table.store = store;
		const layout = new TableLayout({
			store: table.store,
			table,
			fit: props.fit,
			showHeader: props.showHeader
		});
		table.layout = layout;
		const isEmpty = computed(() => (store.states.data.value || []).length === 0);
		const { setCurrentRow, getSelectionRows, toggleRowSelection, clearSelection, clearFilter, toggleAllSelection, toggleRowExpansion, clearSort, sort } = useUtils(store);
		const { isHidden, renderExpanded, setDragVisible, isGroup, handleMouseLeave, handleHeaderFooterMousewheel, tableSize, emptyBlockStyle, handleFixedMousewheel, resizeProxyVisible, bodyWidth, resizeState, doLayout, tableBodyStyles, tableLayout, scrollbarViewStyle, tableInnerStyle, scrollbarStyle } = useStyle(props, layout, store, table);
		const { scrollBarRef, scrollTo, setScrollLeft, setScrollTop } = useScrollbar();
		const debouncedUpdateLayout = debounce_default(doLayout, 50);
		const tableId = `${ns.namespace.value}-table_${tableIdSeed++}`;
		table.tableId = tableId;
		table.state = {
			isGroup,
			resizeState,
			doLayout,
			debouncedUpdateLayout
		};
		const computedSumText = computed(() => props.sumText || t("el.table.sumText"));
		const computedEmptyText = computed(() => {
			return props.emptyText || t("el.table.emptyText");
		});
		useKeyRender(table);
		return {
			ns,
			layout,
			store,
			handleHeaderFooterMousewheel,
			handleMouseLeave,
			tableId,
			tableSize,
			isHidden,
			isEmpty,
			renderExpanded,
			resizeProxyVisible,
			resizeState,
			isGroup,
			bodyWidth,
			tableBodyStyles,
			emptyBlockStyle,
			debouncedUpdateLayout,
			handleFixedMousewheel,
			setCurrentRow,
			getSelectionRows,
			toggleRowSelection,
			clearSelection,
			clearFilter,
			toggleAllSelection,
			toggleRowExpansion,
			clearSort,
			doLayout,
			sort,
			t,
			setDragVisible,
			context: table,
			computedSumText,
			computedEmptyText,
			tableLayout,
			scrollbarViewStyle,
			tableInnerStyle,
			scrollbarStyle,
			scrollBarRef,
			scrollTo,
			setScrollLeft,
			setScrollTop
		};
	}
});
var _hoisted_1 = ["data-prefix"];
var _hoisted_2 = {
	ref: "hiddenColumns",
	class: "hidden-columns"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_hColgroup = resolveComponent("hColgroup");
	const _component_table_header = resolveComponent("table-header");
	const _component_table_body = resolveComponent("table-body");
	const _component_table_footer = resolveComponent("table-footer");
	const _component_el_scrollbar = resolveComponent("el-scrollbar");
	const _directive_mousewheel = resolveDirective("mousewheel");
	return openBlock(), createElementBlock("div", {
		ref: "tableWrapper",
		class: normalizeClass([
			{
				[_ctx.ns.m("fit")]: _ctx.fit,
				[_ctx.ns.m("striped")]: _ctx.stripe,
				[_ctx.ns.m("border")]: _ctx.border || _ctx.isGroup,
				[_ctx.ns.m("hidden")]: _ctx.isHidden,
				[_ctx.ns.m("group")]: _ctx.isGroup,
				[_ctx.ns.m("fluid-height")]: _ctx.maxHeight,
				[_ctx.ns.m("scrollable-x")]: _ctx.layout.scrollX.value,
				[_ctx.ns.m("scrollable-y")]: _ctx.layout.scrollY.value,
				[_ctx.ns.m("enable-row-hover")]: !_ctx.store.states.isComplex.value,
				[_ctx.ns.m("enable-row-transition")]: (_ctx.store.states.data.value || []).length !== 0 && (_ctx.store.states.data.value || []).length < 100,
				"has-footer": _ctx.showSummary
			},
			_ctx.ns.m(_ctx.tableSize),
			_ctx.className,
			_ctx.ns.b(),
			_ctx.ns.m(`layout-${_ctx.tableLayout}`)
		]),
		style: normalizeStyle(_ctx.style),
		"data-prefix": _ctx.ns.namespace.value,
		onMouseleave: _cache[0] || (_cache[0] = (...args) => _ctx.handleMouseLeave && _ctx.handleMouseLeave(...args))
	}, [createBaseVNode("div", {
		class: normalizeClass(_ctx.ns.e("inner-wrapper")),
		style: normalizeStyle(_ctx.tableInnerStyle)
	}, [
		createBaseVNode("div", _hoisted_2, [renderSlot(_ctx.$slots, "default")], 512),
		_ctx.showHeader && _ctx.tableLayout === "fixed" ? withDirectives((openBlock(), createElementBlock("div", {
			key: 0,
			ref: "headerWrapper",
			class: normalizeClass(_ctx.ns.e("header-wrapper"))
		}, [createBaseVNode("table", {
			ref: "tableHeader",
			class: normalizeClass(_ctx.ns.e("header")),
			style: normalizeStyle(_ctx.tableBodyStyles),
			border: "0",
			cellpadding: "0",
			cellspacing: "0"
		}, [createVNode(_component_hColgroup, {
			columns: _ctx.store.states.columns.value,
			"table-layout": _ctx.tableLayout
		}, null, 8, ["columns", "table-layout"]), createVNode(_component_table_header, {
			ref: "tableHeaderRef",
			border: _ctx.border,
			"default-sort": _ctx.defaultSort,
			store: _ctx.store,
			onSetDragVisible: _ctx.setDragVisible
		}, null, 8, [
			"border",
			"default-sort",
			"store",
			"onSetDragVisible"
		])], 6)], 2)), [[_directive_mousewheel, _ctx.handleHeaderFooterMousewheel]]) : createCommentVNode("v-if", true),
		createBaseVNode("div", {
			ref: "bodyWrapper",
			class: normalizeClass(_ctx.ns.e("body-wrapper"))
		}, [createVNode(_component_el_scrollbar, {
			ref: "scrollBarRef",
			"view-style": _ctx.scrollbarViewStyle,
			"wrap-style": _ctx.scrollbarStyle,
			always: _ctx.scrollbarAlwaysOn
		}, {
			default: withCtx(() => [
				createBaseVNode("table", {
					ref: "tableBody",
					class: normalizeClass(_ctx.ns.e("body")),
					cellspacing: "0",
					cellpadding: "0",
					border: "0",
					style: normalizeStyle({
						width: _ctx.bodyWidth,
						tableLayout: _ctx.tableLayout
					})
				}, [
					createVNode(_component_hColgroup, {
						columns: _ctx.store.states.columns.value,
						"table-layout": _ctx.tableLayout
					}, null, 8, ["columns", "table-layout"]),
					_ctx.showHeader && _ctx.tableLayout === "auto" ? (openBlock(), createBlock(_component_table_header, {
						key: 0,
						ref: "tableHeaderRef",
						class: normalizeClass(_ctx.ns.e("body-header")),
						border: _ctx.border,
						"default-sort": _ctx.defaultSort,
						store: _ctx.store,
						onSetDragVisible: _ctx.setDragVisible
					}, null, 8, [
						"class",
						"border",
						"default-sort",
						"store",
						"onSetDragVisible"
					])) : createCommentVNode("v-if", true),
					createVNode(_component_table_body, {
						context: _ctx.context,
						highlight: _ctx.highlightCurrentRow,
						"row-class-name": _ctx.rowClassName,
						"tooltip-effect": _ctx.tooltipEffect,
						"tooltip-options": _ctx.tooltipOptions,
						"row-style": _ctx.rowStyle,
						store: _ctx.store,
						stripe: _ctx.stripe
					}, null, 8, [
						"context",
						"highlight",
						"row-class-name",
						"tooltip-effect",
						"tooltip-options",
						"row-style",
						"store",
						"stripe"
					]),
					_ctx.showSummary && _ctx.tableLayout === "auto" ? (openBlock(), createBlock(_component_table_footer, {
						key: 1,
						class: normalizeClass(_ctx.ns.e("body-footer")),
						border: _ctx.border,
						"default-sort": _ctx.defaultSort,
						store: _ctx.store,
						"sum-text": _ctx.computedSumText,
						"summary-method": _ctx.summaryMethod
					}, null, 8, [
						"class",
						"border",
						"default-sort",
						"store",
						"sum-text",
						"summary-method"
					])) : createCommentVNode("v-if", true)
				], 6),
				_ctx.isEmpty ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref: "emptyBlock",
					style: normalizeStyle(_ctx.emptyBlockStyle),
					class: normalizeClass(_ctx.ns.e("empty-block"))
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.ns.e("empty-text")) }, [renderSlot(_ctx.$slots, "empty", {}, () => [createTextVNode(toDisplayString(_ctx.computedEmptyText), 1)])], 2)], 6)) : createCommentVNode("v-if", true),
				_ctx.$slots.append ? (openBlock(), createElementBlock("div", {
					key: 1,
					ref: "appendWrapper",
					class: normalizeClass(_ctx.ns.e("append-wrapper"))
				}, [renderSlot(_ctx.$slots, "append")], 2)) : createCommentVNode("v-if", true)
			]),
			_: 3
		}, 8, [
			"view-style",
			"wrap-style",
			"always"
		])], 2),
		_ctx.showSummary && _ctx.tableLayout === "fixed" ? withDirectives((openBlock(), createElementBlock("div", {
			key: 1,
			ref: "footerWrapper",
			class: normalizeClass(_ctx.ns.e("footer-wrapper"))
		}, [createBaseVNode("table", {
			class: normalizeClass(_ctx.ns.e("footer")),
			cellspacing: "0",
			cellpadding: "0",
			border: "0",
			style: normalizeStyle(_ctx.tableBodyStyles)
		}, [createVNode(_component_hColgroup, {
			columns: _ctx.store.states.columns.value,
			"table-layout": _ctx.tableLayout
		}, null, 8, ["columns", "table-layout"]), createVNode(_component_table_footer, {
			border: _ctx.border,
			"default-sort": _ctx.defaultSort,
			store: _ctx.store,
			"sum-text": _ctx.computedSumText,
			"summary-method": _ctx.summaryMethod
		}, null, 8, [
			"border",
			"default-sort",
			"store",
			"sum-text",
			"summary-method"
		])], 6)], 2)), [[vShow, !_ctx.isEmpty], [_directive_mousewheel, _ctx.handleHeaderFooterMousewheel]]) : createCommentVNode("v-if", true),
		_ctx.border || _ctx.isGroup ? (openBlock(), createElementBlock("div", {
			key: 2,
			class: normalizeClass(_ctx.ns.e("border-left-patch"))
		}, null, 2)) : createCommentVNode("v-if", true)
	], 6), withDirectives(createBaseVNode("div", {
		ref: "resizeProxy",
		class: normalizeClass(_ctx.ns.e("column-resize-proxy"))
	}, null, 2), [[vShow, _ctx.resizeProxyVisible]])], 46, _hoisted_1);
}
var Table = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
var defaultClassNames = {
	selection: "table-column--selection",
	expand: "table__expand-column"
};
var cellStarts = {
	default: { order: "" },
	selection: {
		width: 48,
		minWidth: 48,
		realWidth: 48,
		order: ""
	},
	expand: {
		width: 48,
		minWidth: 48,
		realWidth: 48,
		order: ""
	},
	index: {
		width: 48,
		minWidth: 48,
		realWidth: 48,
		order: ""
	}
};
var getDefaultClassName = (type) => {
	return defaultClassNames[type] || "";
};
var cellForced = {
	selection: {
		renderHeader({ store, column }) {
			function isDisabled() {
				return store.states.data.value && store.states.data.value.length === 0;
			}
			return h(ElCheckbox, {
				disabled: isDisabled(),
				size: store.states.tableSize.value,
				indeterminate: store.states.selection.value.length > 0 && !store.states.isAllSelected.value,
				"onUpdate:modelValue": store.toggleAllSelection,
				modelValue: store.states.isAllSelected.value,
				ariaLabel: column.label
			});
		},
		renderCell({ row, column, store, $index }) {
			return h(ElCheckbox, {
				disabled: column.selectable ? !column.selectable.call(null, row, $index) : false,
				size: store.states.tableSize.value,
				onChange: () => {
					store.commit("rowSelectedChanged", row);
				},
				onClick: (event) => event.stopPropagation(),
				modelValue: store.isSelected(row),
				ariaLabel: column.label
			});
		},
		sortable: false,
		resizable: false
	},
	index: {
		renderHeader({ column }) {
			return column.label || "#";
		},
		renderCell({ column, $index }) {
			let i = $index + 1;
			const index = column.index;
			if (typeof index === "number") i = $index + index;
			else if (typeof index === "function") i = index($index);
			return h("div", {}, [i]);
		},
		sortable: false
	},
	expand: {
		renderHeader({ column }) {
			return column.label || "";
		},
		renderCell({ row, store, expanded }) {
			const { ns } = store;
			const classes = [ns.e("expand-icon")];
			if (expanded) classes.push(ns.em("expand-icon", "expanded"));
			const callback = function(e) {
				e.stopPropagation();
				store.toggleRowExpansion(row);
			};
			return h("div", {
				class: classes,
				onClick: callback
			}, { default: () => {
				return [h(ElIcon, null, { default: () => {
					return [h(arrow_right_default)];
				} })];
			} });
		},
		sortable: false,
		resizable: false
	}
};
function defaultRenderCell({ row, column, $index }) {
	var _a;
	const property = column.property;
	const value = property && getProp(row, property).value;
	if (column && column.formatter) return column.formatter(row, column, value, $index);
	return ((_a = value == null ? void 0 : value.toString) == null ? void 0 : _a.call(value)) || "";
}
function treeCellPrefix({ row, treeNode, store }, createPlaceholder = false) {
	const { ns } = store;
	if (!treeNode) {
		if (createPlaceholder) return [h("span", { class: ns.e("placeholder") })];
		return null;
	}
	const ele = [];
	const callback = function(e) {
		e.stopPropagation();
		if (treeNode.loading) return;
		store.loadOrToggle(row);
	};
	if (treeNode.indent) ele.push(h("span", {
		class: ns.e("indent"),
		style: { "padding-left": `${treeNode.indent}px` }
	}));
	if (typeof treeNode.expanded === "boolean" && !treeNode.noLazyChildren) {
		const expandClasses = [ns.e("expand-icon"), treeNode.expanded ? ns.em("expand-icon", "expanded") : ""];
		let icon = arrow_right_default;
		if (treeNode.loading) icon = loading_default;
		ele.push(h("div", {
			class: expandClasses,
			onClick: callback
		}, { default: () => {
			return [h(ElIcon, { class: { [ns.is("loading")]: treeNode.loading } }, { default: () => [h(icon)] })];
		} }));
	} else ele.push(h("span", { class: ns.e("placeholder") }));
	return ele;
}
init_shared_esm_bundler();
function getAllAliases(props, aliases) {
	return props.reduce((prev, cur) => {
		prev[cur] = cur;
		return prev;
	}, aliases);
}
function useWatcher(owner, props_) {
	const instance = getCurrentInstance();
	const registerComplexWatchers = () => {
		const props = ["fixed"];
		const aliases = {
			realWidth: "width",
			realMinWidth: "minWidth"
		};
		const allAliases = getAllAliases(props, aliases);
		Object.keys(allAliases).forEach((key) => {
			const columnKey = aliases[key];
			if (hasOwn(props_, columnKey)) watch(() => props_[columnKey], (newVal) => {
				let value = newVal;
				if (columnKey === "width" && key === "realWidth") value = parseWidth(newVal);
				if (columnKey === "minWidth" && key === "realMinWidth") value = parseMinWidth(newVal);
				instance.columnConfig.value[columnKey] = value;
				instance.columnConfig.value[key] = value;
				const updateColumns = columnKey === "fixed";
				owner.value.store.scheduleLayout(updateColumns);
			});
		});
	};
	const registerNormalWatchers = () => {
		const props = [
			"label",
			"filters",
			"filterMultiple",
			"filteredValue",
			"sortable",
			"index",
			"formatter",
			"className",
			"labelClassName",
			"showOverflowTooltip"
		];
		const aliases = {
			property: "prop",
			align: "realAlign",
			headerAlign: "realHeaderAlign"
		};
		const allAliases = getAllAliases(props, aliases);
		Object.keys(allAliases).forEach((key) => {
			const columnKey = aliases[key];
			if (hasOwn(props_, columnKey)) watch(() => props_[columnKey], (newVal) => {
				instance.columnConfig.value[key] = newVal;
			});
		});
	};
	return {
		registerComplexWatchers,
		registerNormalWatchers
	};
}
function useRender(props, slots, owner) {
	const instance = getCurrentInstance();
	const columnId = ref("");
	const isSubColumn = ref(false);
	const realAlign = ref();
	const realHeaderAlign = ref();
	const ns = useNamespace("table");
	watchEffect(() => {
		realAlign.value = props.align ? `is-${props.align}` : null;
		realAlign.value;
	});
	watchEffect(() => {
		realHeaderAlign.value = props.headerAlign ? `is-${props.headerAlign}` : realAlign.value;
		realHeaderAlign.value;
	});
	const columnOrTableParent = computed(() => {
		let parent = instance.vnode.vParent || instance.parent;
		while (parent && !parent.tableId && !parent.columnId) parent = parent.vnode.vParent || parent.parent;
		return parent;
	});
	const hasTreeColumn = computed(() => {
		const { store } = instance.parent;
		if (!store) return false;
		const { treeData } = store.states;
		const treeDataValue = treeData.value;
		return treeDataValue && Object.keys(treeDataValue).length > 0;
	});
	const realWidth = ref(parseWidth(props.width));
	const realMinWidth = ref(parseMinWidth(props.minWidth));
	const setColumnWidth = (column) => {
		if (realWidth.value) column.width = realWidth.value;
		if (realMinWidth.value) column.minWidth = realMinWidth.value;
		if (!realWidth.value && realMinWidth.value) column.width = void 0;
		if (!column.minWidth) column.minWidth = 80;
		column.realWidth = Number(column.width === void 0 ? column.minWidth : column.width);
		return column;
	};
	const setColumnForcedProps = (column) => {
		const type = column.type;
		const source = cellForced[type] || {};
		Object.keys(source).forEach((prop) => {
			const value = source[prop];
			if (prop !== "className" && value !== void 0) column[prop] = value;
		});
		const className = getDefaultClassName(type);
		if (className) {
			const forceClass = `${unref(ns.namespace)}-${className}`;
			column.className = column.className ? `${column.className} ${forceClass}` : forceClass;
		}
		return column;
	};
	const checkSubColumn = (children) => {
		if (Array.isArray(children)) children.forEach((child) => check(child));
		else check(children);
		function check(item) {
			var _a;
			if (((_a = item == null ? void 0 : item.type) == null ? void 0 : _a.name) === "ElTableColumn") item.vParent = instance;
		}
	};
	const setColumnRenders = (column) => {
		if (props.renderHeader) debugWarn("TableColumn", "Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.");
		else if (column.type !== "selection") column.renderHeader = (scope) => {
			instance.columnConfig.value["label"];
			const renderHeader = slots.header;
			return renderHeader ? renderHeader(scope) : column.label;
		};
		let originRenderCell = column.renderCell;
		if (column.type === "expand") {
			column.renderCell = (data) => h("div", { class: "cell" }, [originRenderCell(data)]);
			owner.value.renderExpanded = (data) => {
				return slots.default ? slots.default(data) : slots.default;
			};
		} else {
			originRenderCell = originRenderCell || defaultRenderCell;
			column.renderCell = (data) => {
				let children = null;
				if (slots.default) {
					const vnodes = slots.default(data);
					children = vnodes.some((v$1) => v$1.type !== Comment) ? vnodes : originRenderCell(data);
				} else children = originRenderCell(data);
				const { columns } = owner.value.store.states;
				const firstUserColumnIndex = columns.value.findIndex((item) => item.type === "default");
				const prefix = treeCellPrefix(data, hasTreeColumn.value && data.cellIndex === firstUserColumnIndex);
				const props2 = {
					class: "cell",
					style: {}
				};
				if (column.showOverflowTooltip) {
					props2.class = `${props2.class} ${unref(ns.namespace)}-tooltip`;
					props2.style = { width: `${(data.column.realWidth || Number(data.column.width)) - 1}px` };
				}
				checkSubColumn(children);
				return h("div", props2, [prefix, children]);
			};
		}
		return column;
	};
	const getPropsData = (...propsKey) => {
		return propsKey.reduce((prev, cur) => {
			if (Array.isArray(cur)) cur.forEach((key) => {
				prev[key] = props[key];
			});
			return prev;
		}, {});
	};
	const getColumnElIndex = (children, child) => {
		return Array.prototype.indexOf.call(children, child);
	};
	const updateColumnOrder = () => {
		owner.value.store.commit("updateColumnOrder", instance.columnConfig.value);
	};
	return {
		columnId,
		realAlign,
		isSubColumn,
		realHeaderAlign,
		columnOrTableParent,
		setColumnWidth,
		setColumnForcedProps,
		setColumnRenders,
		getPropsData,
		getColumnElIndex,
		updateColumnOrder
	};
}
var defaultProps = {
	type: {
		type: String,
		default: "default"
	},
	label: String,
	className: String,
	labelClassName: String,
	property: String,
	prop: String,
	width: {
		type: [String, Number],
		default: ""
	},
	minWidth: {
		type: [String, Number],
		default: ""
	},
	renderHeader: Function,
	sortable: {
		type: [Boolean, String],
		default: false
	},
	sortMethod: Function,
	sortBy: [
		String,
		Function,
		Array
	],
	resizable: {
		type: Boolean,
		default: true
	},
	columnKey: String,
	align: String,
	headerAlign: String,
	showOverflowTooltip: {
		type: [Boolean, Object],
		default: void 0
	},
	fixed: [Boolean, String],
	formatter: Function,
	selectable: Function,
	reserveSelection: Boolean,
	filterMethod: Function,
	filteredValue: Array,
	filters: Array,
	filterPlacement: String,
	filterMultiple: {
		type: Boolean,
		default: true
	},
	index: [Number, Function],
	sortOrders: {
		type: Array,
		default: () => {
			return [
				"ascending",
				"descending",
				null
			];
		},
		validator: (val) => {
			return val.every((order) => [
				"ascending",
				"descending",
				null
			].includes(order));
		}
	}
};
init_shared_esm_bundler();
var columnIdSeed = 1;
var ElTableColumn = defineComponent({
	name: "ElTableColumn",
	components: { ElCheckbox },
	props: defaultProps,
	setup(props, { slots }) {
		const instance = getCurrentInstance();
		const columnConfig = ref({});
		const owner = computed(() => {
			let parent2 = instance.parent;
			while (parent2 && !parent2.tableId) parent2 = parent2.parent;
			return parent2;
		});
		const { registerNormalWatchers, registerComplexWatchers } = useWatcher(owner, props);
		const { columnId, isSubColumn, realHeaderAlign, columnOrTableParent, setColumnWidth, setColumnForcedProps, setColumnRenders, getPropsData, getColumnElIndex, realAlign, updateColumnOrder } = useRender(props, slots, owner);
		const parent = columnOrTableParent.value;
		columnId.value = `${parent.tableId || parent.columnId}_column_${columnIdSeed++}`;
		onBeforeMount(() => {
			isSubColumn.value = owner.value !== parent;
			const type = props.type || "default";
			const sortable = props.sortable === "" ? true : props.sortable;
			const showOverflowTooltip = isUndefined(props.showOverflowTooltip) ? parent.props.showOverflowTooltip : props.showOverflowTooltip;
			const defaults = {
				...cellStarts[type],
				id: columnId.value,
				type,
				property: props.prop || props.property,
				align: realAlign,
				headerAlign: realHeaderAlign,
				showOverflowTooltip,
				filterable: props.filters || props.filterMethod,
				filteredValue: [],
				filterPlacement: "",
				isColumnGroup: false,
				isSubColumn: false,
				filterOpened: false,
				sortable,
				index: props.index,
				rawColumnKey: instance.vnode.key
			};
			let column = getPropsData([
				"columnKey",
				"label",
				"className",
				"labelClassName",
				"type",
				"renderHeader",
				"formatter",
				"fixed",
				"resizable"
			], [
				"sortMethod",
				"sortBy",
				"sortOrders"
			], ["selectable", "reserveSelection"], [
				"filterMethod",
				"filters",
				"filterMultiple",
				"filterOpened",
				"filteredValue",
				"filterPlacement"
			]);
			column = mergeOptions(defaults, column);
			column = compose(setColumnRenders, setColumnWidth, setColumnForcedProps)(column);
			columnConfig.value = column;
			registerNormalWatchers();
			registerComplexWatchers();
		});
		onMounted(() => {
			var _a;
			const parent2 = columnOrTableParent.value;
			const children = isSubColumn.value ? parent2.vnode.el.children : (_a = parent2.refs.hiddenColumns) == null ? void 0 : _a.children;
			const getColumnIndex = () => getColumnElIndex(children || [], instance.vnode.el);
			columnConfig.value.getColumnIndex = getColumnIndex;
			getColumnIndex() > -1 && owner.value.store.commit("insertColumn", columnConfig.value, isSubColumn.value ? parent2.columnConfig.value : null, updateColumnOrder);
		});
		onBeforeUnmount(() => {
			owner.value.store.commit("removeColumn", columnConfig.value, isSubColumn.value ? parent.columnConfig.value : null, updateColumnOrder);
		});
		instance.columnId = columnId.value;
		instance.columnConfig = columnConfig;
	},
	render() {
		var _a, _b, _c;
		try {
			const renderDefault = (_b = (_a = this.$slots).default) == null ? void 0 : _b.call(_a, {
				row: {},
				column: {},
				$index: -1
			});
			const children = [];
			if (Array.isArray(renderDefault)) {
				for (const childNode of renderDefault) if (((_c = childNode.type) == null ? void 0 : _c.name) === "ElTableColumn" || childNode.shapeFlag & 2) children.push(childNode);
				else if (childNode.type === Fragment && Array.isArray(childNode.children)) childNode.children.forEach((vnode2) => {
					if ((vnode2 == null ? void 0 : vnode2.patchFlag) !== 1024 && !isString(vnode2 == null ? void 0 : vnode2.children)) children.push(vnode2);
				});
			}
			return h("div", children);
		} catch (e) {
			return h("div", []);
		}
	}
});
var ElTable = withInstall(Table, { TableColumn: ElTableColumn });
var ElTableColumn$1 = withNoopInstall(ElTableColumn);
export { ElTableColumn$1 as n, ElTable as t };
