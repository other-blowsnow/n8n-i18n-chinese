import { r as __export, t as __commonJSMin } from "./chunk-r2Y0G7H8.js";
import { At as isReactive, Bt as toRaw, C as computed, Dt as getCurrentScope, Et as effectScope, G as nextTick, Ht as toRefs, It as ref, Mt as markRaw, Nt as onScopeDispose, Pt as reactive, R as hasInjectionContext, Vt as toRef, _t as watch, jt as isRef, z as inject } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { dt as isVue2, ft as set, m as require_isArray } from "./_MapCache-8-eqnC2S.js";
import { _ as require__arrayMap, b as require_isSymbol, p as require__baseGet } from "./src-Cq27d_Gp.js";
import { Ba as randomString, La as jsonParse, No as ApplicationError, Ti as require__baseForOwn, Yi as setGlobalState, wi as require__baseIteratee } from "./constants-Cyrg9Nbl.js";
import { T as require__baseUnary, o as require_identity, y as require_isArrayLike } from "./merge-O0QrB7po.js";
var activePinia;
var setActivePinia = (pinia) => activePinia = pinia;
var piniaSymbol = Symbol();
function isPlainObject$1(o) {
	return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType$1) {
	MutationType$1["direct"] = "direct";
	MutationType$1["patchObject"] = "patch object";
	MutationType$1["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
var IS_CLIENT = typeof window !== "undefined";
var _global$1 = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
function bom(blob, { autoBom = false } = {}) {
	if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
	return blob;
}
function download(url, name, opts) {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	xhr.responseType = "blob";
	xhr.onload = function() {
		saveAs(xhr.response, name, opts);
	};
	xhr.onerror = function() {
		console.error("could not download file");
	};
	xhr.send();
}
function corsEnabled(url) {
	const xhr = new XMLHttpRequest();
	xhr.open("HEAD", url, false);
	try {
		xhr.send();
	} catch (e) {}
	return xhr.status >= 200 && xhr.status <= 299;
}
function click(node) {
	try {
		node.dispatchEvent(new MouseEvent("click"));
	} catch (e) {
		const evt = document.createEvent("MouseEvents");
		evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
		node.dispatchEvent(evt);
	}
}
var _navigator$1 = typeof navigator === "object" ? navigator : { userAgent: "" };
var isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator$1.userAgent) && /AppleWebKit/.test(_navigator$1.userAgent) && !/Safari/.test(_navigator$1.userAgent))();
var saveAs = !IS_CLIENT ? () => {} : typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : "msSaveOrOpenBlob" in _navigator$1 ? msSaveAs : fileSaverSaveAs;
function downloadSaveAs(blob, name = "download", opts) {
	const a = document.createElement("a");
	a.download = name;
	a.rel = "noopener";
	if (typeof blob === "string") {
		a.href = blob;
		if (a.origin !== location.origin) if (corsEnabled(a.href)) download(blob, name, opts);
		else {
			a.target = "_blank";
			click(a);
		}
		else click(a);
	} else {
		a.href = URL.createObjectURL(blob);
		setTimeout(function() {
			URL.revokeObjectURL(a.href);
		}, 4e4);
		setTimeout(function() {
			click(a);
		}, 0);
	}
}
function msSaveAs(blob, name = "download", opts) {
	if (typeof blob === "string") if (corsEnabled(blob)) download(blob, name, opts);
	else {
		const a = document.createElement("a");
		a.href = blob;
		a.target = "_blank";
		setTimeout(function() {
			click(a);
		});
	}
	else navigator.msSaveOrOpenBlob(bom(blob, opts), name);
}
function fileSaverSaveAs(blob, name, opts, popup) {
	popup = popup || open("", "_blank");
	if (popup) popup.document.title = popup.document.body.innerText = "downloading...";
	if (typeof blob === "string") return download(blob, name, opts);
	const force = blob.type === "application/octet-stream";
	const isSafari = /constructor/i.test(String(_global$1.HTMLElement)) || "safari" in _global$1;
	const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
		const reader = new FileReader();
		reader.onloadend = function() {
			let url = reader.result;
			if (typeof url !== "string") {
				popup = null;
				throw new Error("Wrong reader.result type");
			}
			url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
			if (popup) popup.location.href = url;
			else location.assign(url);
			popup = null;
		};
		reader.readAsDataURL(blob);
	} else {
		const url = URL.createObjectURL(blob);
		if (popup) popup.location.assign(url);
		else location.href = url;
		popup = null;
		setTimeout(function() {
			URL.revokeObjectURL(url);
		}, 4e4);
	}
}
var { assign: assign$1 } = Object;
function createPinia() {
	const scope = effectScope(true);
	const state = scope.run(() => ref({}));
	let _p = [];
	let toBeInstalled = [];
	const pinia = markRaw({
		install(app) {
			setActivePinia(pinia);
			pinia._a = app;
			app.provide(piniaSymbol, pinia);
			app.config.globalProperties.$pinia = pinia;
			toBeInstalled.forEach((plugin) => _p.push(plugin));
			toBeInstalled = [];
		},
		use(plugin) {
			if (!this._a && true) toBeInstalled.push(plugin);
			else _p.push(plugin);
			return this;
		},
		_p,
		_a: null,
		_e: scope,
		_s: /* @__PURE__ */ new Map(),
		state
	});
	return pinia;
}
var noop$1 = () => {};
function addSubscription(subscriptions, callback, detached, onCleanup = noop$1) {
	subscriptions.push(callback);
	const removeSubscription = () => {
		const idx = subscriptions.indexOf(callback);
		if (idx > -1) {
			subscriptions.splice(idx, 1);
			onCleanup();
		}
	};
	if (!detached && getCurrentScope()) onScopeDispose(removeSubscription);
	return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
	subscriptions.slice().forEach((callback) => {
		callback(...args);
	});
}
var fallbackRunWithContext = (fn) => fn();
var ACTION_MARKER = Symbol();
var ACTION_NAME = Symbol();
function mergeReactiveObjects(target, patchToApply) {
	if (target instanceof Map && patchToApply instanceof Map) patchToApply.forEach((value, key) => target.set(key, value));
	else if (target instanceof Set && patchToApply instanceof Set) patchToApply.forEach(target.add, target);
	for (const key in patchToApply) {
		if (!patchToApply.hasOwnProperty(key)) continue;
		const subPatch = patchToApply[key];
		const targetValue = target[key];
		if (isPlainObject$1(targetValue) && isPlainObject$1(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) target[key] = mergeReactiveObjects(targetValue, subPatch);
		else target[key] = subPatch;
	}
	return target;
}
var skipHydrateSymbol = Symbol();
function shouldHydrate(obj) {
	return !isPlainObject$1(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
var { assign } = Object;
function isComputed(o) {
	return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
	const { state, actions, getters } = options;
	const initialState = pinia.state.value[id];
	let store;
	function setup() {
		if (!initialState && true) pinia.state.value[id] = state ? state() : {};
		return assign(toRefs(pinia.state.value[id]), actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
			computedGetters[name] = markRaw(computed(() => {
				setActivePinia(pinia);
				const store$1 = pinia._s.get(id);
				return getters[name].call(store$1, store$1);
			}));
			return computedGetters;
		}, {}));
	}
	store = createSetupStore(id, setup, options, pinia, hot, true);
	return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
	let scope;
	const optionsForPlugin = assign({ actions: {} }, options);
	const $subscribeOptions = { deep: true };
	let isListening;
	let isSyncListening;
	let subscriptions = [];
	let actionSubscriptions = [];
	let debuggerEvents;
	const initialState = pinia.state.value[$id];
	if (!isOptionsStore && !initialState && true) pinia.state.value[$id] = {};
	ref({});
	let activeListener;
	function $patch(partialStateOrMutator) {
		let subscriptionMutation;
		isListening = isSyncListening = false;
		if (typeof partialStateOrMutator === "function") {
			partialStateOrMutator(pinia.state.value[$id]);
			subscriptionMutation = {
				type: MutationType.patchFunction,
				storeId: $id,
				events: debuggerEvents
			};
		} else {
			mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
			subscriptionMutation = {
				type: MutationType.patchObject,
				payload: partialStateOrMutator,
				storeId: $id,
				events: debuggerEvents
			};
		}
		const myListenerId = activeListener = Symbol();
		nextTick().then(() => {
			if (activeListener === myListenerId) isListening = true;
		});
		isSyncListening = true;
		triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
	}
	const $reset = isOptionsStore ? function $reset$1() {
		const { state } = options;
		const newState = state ? state() : {};
		this.$patch(($state) => {
			assign($state, newState);
		});
	} : noop$1;
	function $dispose() {
		scope.stop();
		subscriptions = [];
		actionSubscriptions = [];
		pinia._s.delete($id);
	}
	const action = (fn, name = "") => {
		if (ACTION_MARKER in fn) {
			fn[ACTION_NAME] = name;
			return fn;
		}
		const wrappedAction = function() {
			setActivePinia(pinia);
			const args = Array.from(arguments);
			const afterCallbackList = [];
			const onErrorCallbackList = [];
			function after(callback) {
				afterCallbackList.push(callback);
			}
			function onError(callback) {
				onErrorCallbackList.push(callback);
			}
			triggerSubscriptions(actionSubscriptions, {
				args,
				name: wrappedAction[ACTION_NAME],
				store,
				after,
				onError
			});
			let ret;
			try {
				ret = fn.apply(this && this.$id === $id ? this : store, args);
			} catch (error) {
				triggerSubscriptions(onErrorCallbackList, error);
				throw error;
			}
			if (ret instanceof Promise) return ret.then((value) => {
				triggerSubscriptions(afterCallbackList, value);
				return value;
			}).catch((error) => {
				triggerSubscriptions(onErrorCallbackList, error);
				return Promise.reject(error);
			});
			triggerSubscriptions(afterCallbackList, ret);
			return ret;
		};
		wrappedAction[ACTION_MARKER] = true;
		wrappedAction[ACTION_NAME] = name;
		return wrappedAction;
	};
	const store = reactive({
		_p: pinia,
		$id,
		$onAction: addSubscription.bind(null, actionSubscriptions),
		$patch,
		$reset,
		$subscribe(callback, options$1 = {}) {
			const removeSubscription = addSubscription(subscriptions, callback, options$1.detached, () => stopWatcher());
			const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
				if (options$1.flush === "sync" ? isSyncListening : isListening) callback({
					storeId: $id,
					type: MutationType.direct,
					events: debuggerEvents
				}, state);
			}, assign({}, $subscribeOptions, options$1)));
			return removeSubscription;
		},
		$dispose
	});
	pinia._s.set($id, store);
	const setupStore = (pinia._a && pinia._a.runWithContext || fallbackRunWithContext)(() => pinia._e.run(() => (scope = effectScope()).run(() => setup({ action }))));
	for (const key in setupStore) {
		const prop = setupStore[key];
		if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
			if (!isOptionsStore) {
				if (initialState && shouldHydrate(prop)) if (isRef(prop)) prop.value = initialState[key];
				else mergeReactiveObjects(prop, initialState[key]);
				pinia.state.value[$id][key] = prop;
			}
		} else if (typeof prop === "function") {
			setupStore[key] = action(prop, key);
			optionsForPlugin.actions[key] = prop;
		}
	}
	assign(store, setupStore);
	assign(toRaw(store), setupStore);
	Object.defineProperty(store, "$state", {
		get: () => pinia.state.value[$id],
		set: (state) => {
			$patch(($state) => {
				assign($state, state);
			});
		}
	});
	pinia._p.forEach((extender) => {
		assign(store, scope.run(() => extender({
			store,
			app: pinia._a,
			pinia,
			options: optionsForPlugin
		})));
	});
	if (initialState && isOptionsStore && options.hydrate) options.hydrate(store.$state, initialState);
	isListening = true;
	isSyncListening = true;
	return store;
}
/* @__NO_SIDE_EFFECTS__ */
function defineStore(idOrOptions, setup, setupOptions) {
	let id;
	let options;
	const isSetupStore = typeof setup === "function";
	if (typeof idOrOptions === "string") {
		id = idOrOptions;
		options = isSetupStore ? setupOptions : setup;
	} else {
		options = idOrOptions;
		id = idOrOptions.id;
	}
	function useStore(pinia, hot) {
		const hasContext = hasInjectionContext();
		pinia = pinia || (hasContext ? inject(piniaSymbol, null) : null);
		if (pinia) setActivePinia(pinia);
		pinia = activePinia;
		if (!pinia._s.has(id)) if (isSetupStore) createSetupStore(id, setup, options, pinia);
		else createOptionsStore(id, options, pinia);
		return pinia._s.get(id);
	}
	useStore.$id = id;
	return useStore;
}
function storeToRefs(store) {
	{
		store = toRaw(store);
		const refs = {};
		for (const key in store) {
			const value = store[key];
			if (isRef(value) || isReactive(value)) refs[key] = toRef(store, key);
		}
		return refs;
	}
}
var PiniaVuePlugin = function(_Vue) {
	_Vue.mixin({
		beforeCreate() {
			const options = this.$options;
			if (options.pinia) {
				const pinia = options.pinia;
				/* istanbul ignore else */
				if (!this._provided) {
					const provideCache = {};
					Object.defineProperty(this, "_provided", {
						get: () => provideCache,
						set: (v) => Object.assign(provideCache, v)
					});
				}
				this._provided[piniaSymbol] = pinia;
				/* istanbul ignore else */
				if (!this.$pinia) this.$pinia = pinia;
				pinia._a = this;
				if (IS_CLIENT) setActivePinia(pinia);
			} else if (!this.$pinia && options.parent && options.parent.$pinia) this.$pinia = options.parent.$pinia;
		},
		destroyed() {
			delete this._pStores;
		}
	});
};
const N8N_IO_BASE_URL = "https://api.n8n.io/api/";
const BROWSER_ID_STORAGE_KEY = "n8n-browserId";
const NPM_COMMUNITY_NODE_SEARCH_API_URL = "https://api.npms.io/v2/";
const INSTANCE_ID_HEADER = "n8n-instance-id";
const INSTANCE_VERSION_HEADER = "n8n-version";
const TOOL_EXECUTOR_NODE_NAME = "PartialExecutionToolExecutor";
const Time = {
	milliseconds: {
		toHours: 1 / (3600 * 1e3),
		toMinutes: 1 / (60 * 1e3),
		toSeconds: 1 / 1e3
	},
	seconds: { toMilliseconds: 1e3 },
	minutes: { toMilliseconds: 60 * 1e3 },
	hours: {
		toMilliseconds: 3600 * 1e3,
		toSeconds: 3600
	},
	days: {
		toSeconds: 1440 * 60,
		toMilliseconds: 1440 * 60 * 1e3
	}
};
const LOGSTREAMING_DEFAULT_MAX_FREE_SOCKETS = 5;
const LOGSTREAMING_DEFAULT_MAX_SOCKETS = 50;
5 * Time.seconds.toMilliseconds;
3 * Time.minutes.toMilliseconds;
const LOGSTREAMING_CB_DEFAULT_MAX_FAILURES = 5;
const LOGSTREAMING_CB_DEFAULT_FAILURE_WINDOW_MS = 1 * Time.minutes.toMilliseconds;
function assert(condition, message) {
	if (!condition) throw new Error(message ?? "Assertion failed");
}
function bind(fn, thisArg) {
	return function wrap() {
		return fn.apply(thisArg, arguments);
	};
}
var { toString } = Object.prototype;
var { getPrototypeOf } = Object;
var { iterator, toStringTag } = Symbol;
var kindOf = ((cache) => (thing) => {
	const str = toString.call(thing);
	return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));
var kindOfTest = (type) => {
	type = type.toLowerCase();
	return (thing) => kindOf(thing) === type;
};
var typeOfTest = (type) => (thing) => typeof thing === type;
var { isArray: isArray$1 } = Array;
var isUndefined = typeOfTest("undefined");
function isBuffer(val) {
	return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
	let result;
	if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
	else result = val && val.buffer && isArrayBuffer(val.buffer);
	return result;
}
var isString = typeOfTest("string");
var isFunction$1 = typeOfTest("function");
var isNumber = typeOfTest("number");
var isObject = (thing) => thing !== null && typeof thing === "object";
var isBoolean = (thing) => thing === true || thing === false;
var isPlainObject = (val) => {
	if (kindOf(val) !== "object") return false;
	const prototype$2 = getPrototypeOf(val);
	return (prototype$2 === null || prototype$2 === Object.prototype || Object.getPrototypeOf(prototype$2) === null) && !(toStringTag in val) && !(iterator in val);
};
var isEmptyObject = (val) => {
	if (!isObject(val) || isBuffer(val)) return false;
	try {
		return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
	} catch (e) {
		return false;
	}
};
var isDate = kindOfTest("Date");
var isFile = kindOfTest("File");
var isBlob = kindOfTest("Blob");
var isFileList = kindOfTest("FileList");
var isStream = (val) => isObject(val) && isFunction$1(val.pipe);
var isFormData = (thing) => {
	let kind;
	return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction$1(thing.append) && ((kind = kindOf(thing)) === "formdata" || kind === "object" && isFunction$1(thing.toString) && thing.toString() === "[object FormData]"));
};
var isURLSearchParams = kindOfTest("URLSearchParams");
var [isReadableStream, isRequest, isResponse, isHeaders] = [
	"ReadableStream",
	"Request",
	"Response",
	"Headers"
].map(kindOfTest);
var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = false } = {}) {
	if (obj === null || typeof obj === "undefined") return;
	let i;
	let l;
	if (typeof obj !== "object") obj = [obj];
	if (isArray$1(obj)) for (i = 0, l = obj.length; i < l; i++) fn.call(null, obj[i], i, obj);
	else {
		if (isBuffer(obj)) return;
		const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
		const len = keys.length;
		let key;
		for (i = 0; i < len; i++) {
			key = keys[i];
			fn.call(null, obj[key], key, obj);
		}
	}
}
function findKey(obj, key) {
	if (isBuffer(obj)) return null;
	key = key.toLowerCase();
	const keys = Object.keys(obj);
	let i = keys.length;
	let _key;
	while (i-- > 0) {
		_key = keys[i];
		if (key === _key.toLowerCase()) return _key;
	}
	return null;
}
var _global = (() => {
	if (typeof globalThis !== "undefined") return globalThis;
	return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
var isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
	const { caseless, skipUndefined } = isContextDefined(this) && this || {};
	const result = {};
	const assignValue = (val, key) => {
		const targetKey = caseless && findKey(result, key) || key;
		if (isPlainObject(result[targetKey]) && isPlainObject(val)) result[targetKey] = merge(result[targetKey], val);
		else if (isPlainObject(val)) result[targetKey] = merge({}, val);
		else if (isArray$1(val)) result[targetKey] = val.slice();
		else if (!skipUndefined || !isUndefined(val)) result[targetKey] = val;
	};
	for (let i = 0, l = arguments.length; i < l; i++) arguments[i] && forEach(arguments[i], assignValue);
	return result;
}
var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
	forEach(b, (val, key) => {
		if (thisArg && isFunction$1(val)) a[key] = bind(val, thisArg);
		else a[key] = val;
	}, { allOwnKeys });
	return a;
};
var stripBOM = (content) => {
	if (content.charCodeAt(0) === 65279) content = content.slice(1);
	return content;
};
var inherits = (constructor, superConstructor, props, descriptors$1) => {
	constructor.prototype = Object.create(superConstructor.prototype, descriptors$1);
	constructor.prototype.constructor = constructor;
	Object.defineProperty(constructor, "super", { value: superConstructor.prototype });
	props && Object.assign(constructor.prototype, props);
};
var toFlatObject = (sourceObj, destObj, filter, propFilter) => {
	let props;
	let i;
	let prop;
	const merged = {};
	destObj = destObj || {};
	if (sourceObj == null) return destObj;
	do {
		props = Object.getOwnPropertyNames(sourceObj);
		i = props.length;
		while (i-- > 0) {
			prop = props[i];
			if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
				destObj[prop] = sourceObj[prop];
				merged[prop] = true;
			}
		}
		sourceObj = filter !== false && getPrototypeOf(sourceObj);
	} while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
	return destObj;
};
var endsWith = (str, searchString, position) => {
	str = String(str);
	if (position === void 0 || position > str.length) position = str.length;
	position -= searchString.length;
	const lastIndex = str.indexOf(searchString, position);
	return lastIndex !== -1 && lastIndex === position;
};
var toArray = (thing) => {
	if (!thing) return null;
	if (isArray$1(thing)) return thing;
	let i = thing.length;
	if (!isNumber(i)) return null;
	const arr = new Array(i);
	while (i-- > 0) arr[i] = thing[i];
	return arr;
};
var isTypedArray = ((TypedArray) => {
	return (thing) => {
		return TypedArray && thing instanceof TypedArray;
	};
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
var forEachEntry = (obj, fn) => {
	const _iterator = (obj && obj[iterator]).call(obj);
	let result;
	while ((result = _iterator.next()) && !result.done) {
		const pair = result.value;
		fn.call(obj, pair[0], pair[1]);
	}
};
var matchAll = (regExp, str) => {
	let matches;
	const arr = [];
	while ((matches = regExp.exec(str)) !== null) arr.push(matches);
	return arr;
};
var isHTMLForm = kindOfTest("HTMLFormElement");
var toCamelCase = (str) => {
	return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
		return p1.toUpperCase() + p2;
	});
};
var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty$1 }) => (obj, prop) => hasOwnProperty$1.call(obj, prop))(Object.prototype);
var isRegExp = kindOfTest("RegExp");
var reduceDescriptors = (obj, reducer) => {
	const descriptors$1 = Object.getOwnPropertyDescriptors(obj);
	const reducedDescriptors = {};
	forEach(descriptors$1, (descriptor, name) => {
		let ret;
		if ((ret = reducer(descriptor, name, obj)) !== false) reducedDescriptors[name] = ret || descriptor;
	});
	Object.defineProperties(obj, reducedDescriptors);
};
var freezeMethods = (obj) => {
	reduceDescriptors(obj, (descriptor, name) => {
		if (isFunction$1(obj) && [
			"arguments",
			"caller",
			"callee"
		].indexOf(name) !== -1) return false;
		const value = obj[name];
		if (!isFunction$1(value)) return;
		descriptor.enumerable = false;
		if ("writable" in descriptor) {
			descriptor.writable = false;
			return;
		}
		if (!descriptor.set) descriptor.set = () => {
			throw Error("Can not rewrite read-only method '" + name + "'");
		};
	});
};
var toObjectSet = (arrayOrString, delimiter) => {
	const obj = {};
	const define = (arr) => {
		arr.forEach((value) => {
			obj[value] = true;
		});
	};
	isArray$1(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
	return obj;
};
var noop = () => {};
var toFiniteNumber = (value, defaultValue) => {
	return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
function isSpecCompliantForm(thing) {
	return !!(thing && isFunction$1(thing.append) && thing[toStringTag] === "FormData" && thing[iterator]);
}
var toJSONObject = (obj) => {
	const stack = new Array(10);
	const visit = (source, i) => {
		if (isObject(source)) {
			if (stack.indexOf(source) >= 0) return;
			if (isBuffer(source)) return source;
			if (!("toJSON" in source)) {
				stack[i] = source;
				const target = isArray$1(source) ? [] : {};
				forEach(source, (value, key) => {
					const reducedValue = visit(value, i + 1);
					!isUndefined(reducedValue) && (target[key] = reducedValue);
				});
				stack[i] = void 0;
				return target;
			}
		}
		return source;
	};
	return visit(obj, 0);
};
var isAsyncFn = kindOfTest("AsyncFunction");
var isThenable = (thing) => thing && (isObject(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);
var _setImmediate = ((setImmediateSupported, postMessageSupported) => {
	if (setImmediateSupported) return setImmediate;
	return postMessageSupported ? ((token, callbacks) => {
		_global.addEventListener("message", ({ source, data }) => {
			if (source === _global && data === token) callbacks.length && callbacks.shift()();
		}, false);
		return (cb) => {
			callbacks.push(cb);
			_global.postMessage(token, "*");
		};
	})(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(typeof setImmediate === "function", isFunction$1(_global.postMessage));
var asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
var isIterable = (thing) => thing != null && isFunction$1(thing[iterator]);
var utils_default = {
	isArray: isArray$1,
	isArrayBuffer,
	isBuffer,
	isFormData,
	isArrayBufferView,
	isString,
	isNumber,
	isBoolean,
	isObject,
	isPlainObject,
	isEmptyObject,
	isReadableStream,
	isRequest,
	isResponse,
	isHeaders,
	isUndefined,
	isDate,
	isFile,
	isBlob,
	isRegExp,
	isFunction: isFunction$1,
	isStream,
	isURLSearchParams,
	isTypedArray,
	isFileList,
	forEach,
	merge,
	extend,
	trim,
	stripBOM,
	inherits,
	toFlatObject,
	kindOf,
	kindOfTest,
	endsWith,
	toArray,
	forEachEntry,
	matchAll,
	isHTMLForm,
	hasOwnProperty,
	hasOwnProp: hasOwnProperty,
	reduceDescriptors,
	freezeMethods,
	toObjectSet,
	toCamelCase,
	noop,
	toFiniteNumber,
	findKey,
	global: _global,
	isContextDefined,
	isSpecCompliantForm,
	toJSONObject,
	isAsyncFn,
	isThenable,
	setImmediate: _setImmediate,
	asap,
	isIterable
};
function AxiosError$1(message, code, config, request$1, response) {
	Error.call(this);
	if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
	else this.stack = (/* @__PURE__ */ new Error()).stack;
	this.message = message;
	this.name = "AxiosError";
	code && (this.code = code);
	config && (this.config = config);
	request$1 && (this.request = request$1);
	if (response) {
		this.response = response;
		this.status = response.status ? response.status : null;
	}
}
utils_default.inherits(AxiosError$1, Error, { toJSON: function toJSON() {
	return {
		message: this.message,
		name: this.name,
		description: this.description,
		number: this.number,
		fileName: this.fileName,
		lineNumber: this.lineNumber,
		columnNumber: this.columnNumber,
		stack: this.stack,
		config: utils_default.toJSONObject(this.config),
		code: this.code,
		status: this.status
	};
} });
var prototype$1 = AxiosError$1.prototype;
var descriptors = {};
[
	"ERR_BAD_OPTION_VALUE",
	"ERR_BAD_OPTION",
	"ECONNABORTED",
	"ETIMEDOUT",
	"ERR_NETWORK",
	"ERR_FR_TOO_MANY_REDIRECTS",
	"ERR_DEPRECATED",
	"ERR_BAD_RESPONSE",
	"ERR_BAD_REQUEST",
	"ERR_CANCELED",
	"ERR_NOT_SUPPORT",
	"ERR_INVALID_URL"
].forEach((code) => {
	descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError$1, descriptors);
Object.defineProperty(prototype$1, "isAxiosError", { value: true });
AxiosError$1.from = (error, code, config, request$1, response, customProps) => {
	const axiosError = Object.create(prototype$1);
	utils_default.toFlatObject(error, axiosError, function filter(obj) {
		return obj !== Error.prototype;
	}, (prop) => {
		return prop !== "isAxiosError";
	});
	const msg = error && error.message ? error.message : "Error";
	const errCode = code == null && error ? error.code : code;
	AxiosError$1.call(axiosError, msg, errCode, config, request$1, response);
	if (error && axiosError.cause == null) Object.defineProperty(axiosError, "cause", {
		value: error,
		configurable: true
	});
	axiosError.name = error && error.name || "Error";
	customProps && Object.assign(axiosError, customProps);
	return axiosError;
};
var AxiosError_default = AxiosError$1;
function isVisitable(thing) {
	return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
}
function removeBrackets(key) {
	return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
	if (!path) return key;
	return path.concat(key).map(function each(token, i) {
		token = removeBrackets(token);
		return !dots && i ? "[" + token + "]" : token;
	}).join(dots ? "." : "");
}
function isFlatArray(arr) {
	return utils_default.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
	return /^is[A-Z]/.test(prop);
});
function toFormData$1(obj, formData, options) {
	if (!utils_default.isObject(obj)) throw new TypeError("target must be an object");
	formData = formData || new FormData();
	options = utils_default.toFlatObject(options, {
		metaTokens: true,
		dots: false,
		indexes: false
	}, false, function defined(option, source) {
		return !utils_default.isUndefined(source[option]);
	});
	const metaTokens = options.metaTokens;
	const visitor = options.visitor || defaultVisitor;
	const dots = options.dots;
	const indexes = options.indexes;
	const useBlob = (options.Blob || typeof Blob !== "undefined" && Blob) && utils_default.isSpecCompliantForm(formData);
	if (!utils_default.isFunction(visitor)) throw new TypeError("visitor must be a function");
	function convertValue(value) {
		if (value === null) return "";
		if (utils_default.isDate(value)) return value.toISOString();
		if (utils_default.isBoolean(value)) return value.toString();
		if (!useBlob && utils_default.isBlob(value)) throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
		if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
		return value;
	}
	function defaultVisitor(value, key, path) {
		let arr = value;
		if (value && !path && typeof value === "object") {
			if (utils_default.endsWith(key, "{}")) {
				key = metaTokens ? key : key.slice(0, -2);
				value = JSON.stringify(value);
			} else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
				key = removeBrackets(key);
				arr.forEach(function each(el, index) {
					!(utils_default.isUndefined(el) || el === null) && formData.append(indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
				});
				return false;
			}
		}
		if (isVisitable(value)) return true;
		formData.append(renderKey(path, key, dots), convertValue(value));
		return false;
	}
	const stack = [];
	const exposedHelpers = Object.assign(predicates, {
		defaultVisitor,
		convertValue,
		isVisitable
	});
	function build(value, path) {
		if (utils_default.isUndefined(value)) return;
		if (stack.indexOf(value) !== -1) throw Error("Circular reference detected in " + path.join("."));
		stack.push(value);
		utils_default.forEach(value, function each(el, key) {
			if ((!(utils_default.isUndefined(el) || el === null) && visitor.call(formData, el, utils_default.isString(key) ? key.trim() : key, path, exposedHelpers)) === true) build(el, path ? path.concat(key) : [key]);
		});
		stack.pop();
	}
	if (!utils_default.isObject(obj)) throw new TypeError("data must be an object");
	build(obj);
	return formData;
}
var toFormData_default = toFormData$1;
function encode$1(str) {
	const charMap = {
		"!": "%21",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"~": "%7E",
		"%20": "+",
		"%00": "\0"
	};
	return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
		return charMap[match];
	});
}
function AxiosURLSearchParams(params, options) {
	this._pairs = [];
	params && toFormData_default(params, this, options);
}
var prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
	this._pairs.push([name, value]);
};
prototype.toString = function toString$1(encoder) {
	const _encode = encoder ? function(value) {
		return encoder.call(this, value, encode$1);
	} : encode$1;
	return this._pairs.map(function each(pair) {
		return _encode(pair[0]) + "=" + _encode(pair[1]);
	}, "").join("&");
};
var AxiosURLSearchParams_default = AxiosURLSearchParams;
function encode(val) {
	return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function buildURL(url, params, options) {
	if (!params) return url;
	const _encode = options && options.encode || encode;
	if (utils_default.isFunction(options)) options = { serialize: options };
	const serializeFn = options && options.serialize;
	let serializedParams;
	if (serializeFn) serializedParams = serializeFn(params, options);
	else serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
	if (serializedParams) {
		const hashmarkIndex = url.indexOf("#");
		if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
		url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
	}
	return url;
}
var InterceptorManager = class {
	constructor() {
		this.handlers = [];
	}
	use(fulfilled, rejected, options) {
		this.handlers.push({
			fulfilled,
			rejected,
			synchronous: options ? options.synchronous : false,
			runWhen: options ? options.runWhen : null
		});
		return this.handlers.length - 1;
	}
	eject(id) {
		if (this.handlers[id]) this.handlers[id] = null;
	}
	clear() {
		if (this.handlers) this.handlers = [];
	}
	forEach(fn) {
		utils_default.forEach(this.handlers, function forEachHandler(h) {
			if (h !== null) fn(h);
		});
	}
};
var InterceptorManager_default = InterceptorManager;
var transitional_default = {
	silentJSONParsing: true,
	forcedJSONParsing: true,
	clarifyTimeoutError: false
};
var browser_default = {
	isBrowser: true,
	classes: {
		URLSearchParams: typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default,
		FormData: typeof FormData !== "undefined" ? FormData : null,
		Blob: typeof Blob !== "undefined" ? Blob : null
	},
	protocols: [
		"http",
		"https",
		"file",
		"blob",
		"url",
		"data"
	]
};
var utils_exports = /* @__PURE__ */ __export({
	hasBrowserEnv: () => hasBrowserEnv,
	hasStandardBrowserEnv: () => hasStandardBrowserEnv,
	hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv,
	navigator: () => _navigator,
	origin: () => origin
}, 1);
var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
var _navigator = typeof navigator === "object" && navigator || void 0;
var hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || [
	"ReactNative",
	"NativeScript",
	"NS"
].indexOf(_navigator.product) < 0);
var hasStandardBrowserWebWorkerEnv = (() => {
	return typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
var origin = hasBrowserEnv && window.location.href || "http://localhost";
var platform_default = {
	...utils_exports,
	...browser_default
};
function toURLEncodedForm(data, options) {
	return toFormData_default(data, new platform_default.classes.URLSearchParams(), {
		visitor: function(value, key, path, helpers) {
			if (platform_default.isNode && utils_default.isBuffer(value)) {
				this.append(key, value.toString("base64"));
				return false;
			}
			return helpers.defaultVisitor.apply(this, arguments);
		},
		...options
	});
}
function parsePropPath(name) {
	return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
		return match[0] === "[]" ? "" : match[1] || match[0];
	});
}
function arrayToObject(arr) {
	const obj = {};
	const keys = Object.keys(arr);
	let i;
	const len = keys.length;
	let key;
	for (i = 0; i < len; i++) {
		key = keys[i];
		obj[key] = arr[key];
	}
	return obj;
}
function formDataToJSON(formData) {
	function buildPath(path, value, target, index) {
		let name = path[index++];
		if (name === "__proto__") return true;
		const isNumericKey = Number.isFinite(+name);
		const isLast = index >= path.length;
		name = !name && utils_default.isArray(target) ? target.length : name;
		if (isLast) {
			if (utils_default.hasOwnProp(target, name)) target[name] = [target[name], value];
			else target[name] = value;
			return !isNumericKey;
		}
		if (!target[name] || !utils_default.isObject(target[name])) target[name] = [];
		if (buildPath(path, value, target[name], index) && utils_default.isArray(target[name])) target[name] = arrayToObject(target[name]);
		return !isNumericKey;
	}
	if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
		const obj = {};
		utils_default.forEachEntry(formData, (name, value) => {
			buildPath(parsePropPath(name), value, obj, 0);
		});
		return obj;
	}
	return null;
}
var formDataToJSON_default = formDataToJSON;
function stringifySafely(rawValue, parser, encoder) {
	if (utils_default.isString(rawValue)) try {
		(parser || JSON.parse)(rawValue);
		return utils_default.trim(rawValue);
	} catch (e) {
		if (e.name !== "SyntaxError") throw e;
	}
	return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
	transitional: transitional_default,
	adapter: [
		"xhr",
		"http",
		"fetch"
	],
	transformRequest: [function transformRequest(data, headers) {
		const contentType = headers.getContentType() || "";
		const hasJSONContentType = contentType.indexOf("application/json") > -1;
		const isObjectPayload = utils_default.isObject(data);
		if (isObjectPayload && utils_default.isHTMLForm(data)) data = new FormData(data);
		if (utils_default.isFormData(data)) return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
		if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data) || utils_default.isReadableStream(data)) return data;
		if (utils_default.isArrayBufferView(data)) return data.buffer;
		if (utils_default.isURLSearchParams(data)) {
			headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
			return data.toString();
		}
		let isFileList$1;
		if (isObjectPayload) {
			if (contentType.indexOf("application/x-www-form-urlencoded") > -1) return toURLEncodedForm(data, this.formSerializer).toString();
			if ((isFileList$1 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
				const _FormData = this.env && this.env.FormData;
				return toFormData_default(isFileList$1 ? { "files[]": data } : data, _FormData && new _FormData(), this.formSerializer);
			}
		}
		if (isObjectPayload || hasJSONContentType) {
			headers.setContentType("application/json", false);
			return stringifySafely(data);
		}
		return data;
	}],
	transformResponse: [function transformResponse(data) {
		const transitional = this.transitional || defaults.transitional;
		const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
		const JSONRequested = this.responseType === "json";
		if (utils_default.isResponse(data) || utils_default.isReadableStream(data)) return data;
		if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
			const strictJSONParsing = !(transitional && transitional.silentJSONParsing) && JSONRequested;
			try {
				return JSON.parse(data, this.parseReviver);
			} catch (e) {
				if (strictJSONParsing) {
					if (e.name === "SyntaxError") throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
					throw e;
				}
			}
		}
		return data;
	}],
	timeout: 0,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	maxContentLength: -1,
	maxBodyLength: -1,
	env: {
		FormData: platform_default.classes.FormData,
		Blob: platform_default.classes.Blob
	},
	validateStatus: function validateStatus(status) {
		return status >= 200 && status < 300;
	},
	headers: { common: {
		"Accept": "application/json, text/plain, */*",
		"Content-Type": void 0
	} }
};
utils_default.forEach([
	"delete",
	"get",
	"head",
	"post",
	"put",
	"patch"
], (method) => {
	defaults.headers[method] = {};
});
var defaults_default = defaults;
var ignoreDuplicateOf = utils_default.toObjectSet([
	"age",
	"authorization",
	"content-length",
	"content-type",
	"etag",
	"expires",
	"from",
	"host",
	"if-modified-since",
	"if-unmodified-since",
	"last-modified",
	"location",
	"max-forwards",
	"proxy-authorization",
	"referer",
	"retry-after",
	"user-agent"
]);
var parseHeaders_default = (rawHeaders) => {
	const parsed = {};
	let key;
	let val;
	let i;
	rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
		i = line.indexOf(":");
		key = line.substring(0, i).trim().toLowerCase();
		val = line.substring(i + 1).trim();
		if (!key || parsed[key] && ignoreDuplicateOf[key]) return;
		if (key === "set-cookie") if (parsed[key]) parsed[key].push(val);
		else parsed[key] = [val];
		else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
	});
	return parsed;
};
var $internals = Symbol("internals");
function normalizeHeader(header) {
	return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
	if (value === false || value == null) return value;
	return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
	const tokens = Object.create(null);
	const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
	let match;
	while (match = tokensRE.exec(str)) tokens[match[1]] = match[2];
	return tokens;
}
var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
	if (utils_default.isFunction(filter)) return filter.call(this, value, header);
	if (isHeaderNameFilter) value = header;
	if (!utils_default.isString(value)) return;
	if (utils_default.isString(filter)) return value.indexOf(filter) !== -1;
	if (utils_default.isRegExp(filter)) return filter.test(value);
}
function formatHeader(header) {
	return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
		return char.toUpperCase() + str;
	});
}
function buildAccessors(obj, header) {
	const accessorName = utils_default.toCamelCase(" " + header);
	[
		"get",
		"set",
		"has"
	].forEach((methodName) => {
		Object.defineProperty(obj, methodName + accessorName, {
			value: function(arg1, arg2, arg3) {
				return this[methodName].call(this, header, arg1, arg2, arg3);
			},
			configurable: true
		});
	});
}
var AxiosHeaders$1 = class {
	constructor(headers) {
		headers && this.set(headers);
	}
	set(header, valueOrRewrite, rewrite) {
		const self$1 = this;
		function setHeader(_value, _header, _rewrite) {
			const lHeader = normalizeHeader(_header);
			if (!lHeader) throw new Error("header name must be a non-empty string");
			const key = utils_default.findKey(self$1, lHeader);
			if (!key || self$1[key] === void 0 || _rewrite === true || _rewrite === void 0 && self$1[key] !== false) self$1[key || _header] = normalizeValue(_value);
		}
		const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
		if (utils_default.isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite);
		else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) setHeaders(parseHeaders_default(header), valueOrRewrite);
		else if (utils_default.isObject(header) && utils_default.isIterable(header)) {
			let obj = {}, dest, key;
			for (const entry of header) {
				if (!utils_default.isArray(entry)) throw TypeError("Object iterator must return a key-value pair");
				obj[key = entry[0]] = (dest = obj[key]) ? utils_default.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]] : entry[1];
			}
			setHeaders(obj, valueOrRewrite);
		} else header != null && setHeader(valueOrRewrite, header, rewrite);
		return this;
	}
	get(header, parser) {
		header = normalizeHeader(header);
		if (header) {
			const key = utils_default.findKey(this, header);
			if (key) {
				const value = this[key];
				if (!parser) return value;
				if (parser === true) return parseTokens(value);
				if (utils_default.isFunction(parser)) return parser.call(this, value, key);
				if (utils_default.isRegExp(parser)) return parser.exec(value);
				throw new TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(header, matcher) {
		header = normalizeHeader(header);
		if (header) {
			const key = utils_default.findKey(this, header);
			return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
		}
		return false;
	}
	delete(header, matcher) {
		const self$1 = this;
		let deleted = false;
		function deleteHeader(_header) {
			_header = normalizeHeader(_header);
			if (_header) {
				const key = utils_default.findKey(self$1, _header);
				if (key && (!matcher || matchHeaderValue(self$1, self$1[key], key, matcher))) {
					delete self$1[key];
					deleted = true;
				}
			}
		}
		if (utils_default.isArray(header)) header.forEach(deleteHeader);
		else deleteHeader(header);
		return deleted;
	}
	clear(matcher) {
		const keys = Object.keys(this);
		let i = keys.length;
		let deleted = false;
		while (i--) {
			const key = keys[i];
			if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
				delete this[key];
				deleted = true;
			}
		}
		return deleted;
	}
	normalize(format) {
		const self$1 = this;
		const headers = {};
		utils_default.forEach(this, (value, header) => {
			const key = utils_default.findKey(headers, header);
			if (key) {
				self$1[key] = normalizeValue(value);
				delete self$1[header];
				return;
			}
			const normalized = format ? formatHeader(header) : String(header).trim();
			if (normalized !== header) delete self$1[header];
			self$1[normalized] = normalizeValue(value);
			headers[normalized] = true;
		});
		return this;
	}
	concat(...targets) {
		return this.constructor.concat(this, ...targets);
	}
	toJSON(asStrings) {
		const obj = Object.create(null);
		utils_default.forEach(this, (value, header) => {
			value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
		});
		return obj;
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]();
	}
	toString() {
		return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
	}
	getSetCookie() {
		return this.get("set-cookie") || [];
	}
	get [Symbol.toStringTag]() {
		return "AxiosHeaders";
	}
	static from(thing) {
		return thing instanceof this ? thing : new this(thing);
	}
	static concat(first, ...targets) {
		const computed$1 = new this(first);
		targets.forEach((target) => computed$1.set(target));
		return computed$1;
	}
	static accessor(header) {
		const accessors = (this[$internals] = this[$internals] = { accessors: {} }).accessors;
		const prototype$2 = this.prototype;
		function defineAccessor(_header) {
			const lHeader = normalizeHeader(_header);
			if (!accessors[lHeader]) {
				buildAccessors(prototype$2, _header);
				accessors[lHeader] = true;
			}
		}
		utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
		return this;
	}
};
AxiosHeaders$1.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization"
]);
utils_default.reduceDescriptors(AxiosHeaders$1.prototype, ({ value }, key) => {
	let mapped = key[0].toUpperCase() + key.slice(1);
	return {
		get: () => value,
		set(headerValue) {
			this[mapped] = headerValue;
		}
	};
});
utils_default.freezeMethods(AxiosHeaders$1);
var AxiosHeaders_default = AxiosHeaders$1;
function transformData(fns, response) {
	const config = this || defaults_default;
	const context = response || config;
	const headers = AxiosHeaders_default.from(context.headers);
	let data = context.data;
	utils_default.forEach(fns, function transform(fn) {
		data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
	});
	headers.normalize();
	return data;
}
function isCancel$1(value) {
	return !!(value && value.__CANCEL__);
}
function CanceledError$1(message, config, request$1) {
	AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request$1);
	this.name = "CanceledError";
}
utils_default.inherits(CanceledError$1, AxiosError_default, { __CANCEL__: true });
var CanceledError_default = CanceledError$1;
function settle(resolve, reject, response) {
	const validateStatus = response.config.validateStatus;
	if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
	else reject(new AxiosError_default("Request failed with status code " + response.status, [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
}
function parseProtocol(url) {
	const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
	return match && match[1] || "";
}
function speedometer(samplesCount, min) {
	samplesCount = samplesCount || 10;
	const bytes = new Array(samplesCount);
	const timestamps = new Array(samplesCount);
	let head = 0;
	let tail = 0;
	let firstSampleTS;
	min = min !== void 0 ? min : 1e3;
	return function push(chunkLength) {
		const now = Date.now();
		const startedAt = timestamps[tail];
		if (!firstSampleTS) firstSampleTS = now;
		bytes[head] = chunkLength;
		timestamps[head] = now;
		let i = tail;
		let bytesCount = 0;
		while (i !== head) {
			bytesCount += bytes[i++];
			i = i % samplesCount;
		}
		head = (head + 1) % samplesCount;
		if (head === tail) tail = (tail + 1) % samplesCount;
		if (now - firstSampleTS < min) return;
		const passed = startedAt && now - startedAt;
		return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
	};
}
var speedometer_default = speedometer;
function throttle(fn, freq) {
	let timestamp = 0;
	let threshold = 1e3 / freq;
	let lastArgs;
	let timer;
	const invoke = (args, now = Date.now()) => {
		timestamp = now;
		lastArgs = null;
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
		fn(...args);
	};
	const throttled = (...args) => {
		const now = Date.now();
		const passed = now - timestamp;
		if (passed >= threshold) invoke(args, now);
		else {
			lastArgs = args;
			if (!timer) timer = setTimeout(() => {
				timer = null;
				invoke(lastArgs);
			}, threshold - passed);
		}
	};
	const flush = () => lastArgs && invoke(lastArgs);
	return [throttled, flush];
}
var throttle_default = throttle;
const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
	let bytesNotified = 0;
	const _speedometer = speedometer_default(50, 250);
	return throttle_default((e) => {
		const loaded = e.loaded;
		const total = e.lengthComputable ? e.total : void 0;
		const progressBytes = loaded - bytesNotified;
		const rate = _speedometer(progressBytes);
		const inRange = loaded <= total;
		bytesNotified = loaded;
		listener({
			loaded,
			total,
			progress: total ? loaded / total : void 0,
			bytes: progressBytes,
			rate: rate ? rate : void 0,
			estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
			event: e,
			lengthComputable: total != null,
			[isDownloadStream ? "download" : "upload"]: true
		});
	}, freq);
};
const progressEventDecorator = (total, throttled) => {
	const lengthComputable = total != null;
	return [(loaded) => throttled[0]({
		lengthComputable,
		total,
		loaded
	}), throttled[1]];
};
const asyncDecorator = (fn) => (...args) => utils_default.asap(() => fn(...args));
var isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? ((origin$1, isMSIE) => (url) => {
	url = new URL(url, platform_default.origin);
	return origin$1.protocol === url.protocol && origin$1.host === url.host && (isMSIE || origin$1.port === url.port);
})(new URL(platform_default.origin), platform_default.navigator && /(msie|trident)/i.test(platform_default.navigator.userAgent)) : () => true;
var cookies_default = platform_default.hasStandardBrowserEnv ? {
	write(name, value, expires, path, domain, secure) {
		const cookie = [name + "=" + encodeURIComponent(value)];
		utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
		utils_default.isString(path) && cookie.push("path=" + path);
		utils_default.isString(domain) && cookie.push("domain=" + domain);
		secure === true && cookie.push("secure");
		document.cookie = cookie.join("; ");
	},
	read(name) {
		const match = document.cookie.match(/* @__PURE__ */ new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
		return match ? decodeURIComponent(match[3]) : null;
	},
	remove(name) {
		this.write(name, "", Date.now() - 864e5);
	}
} : {
	write() {},
	read() {
		return null;
	},
	remove() {}
};
function isAbsoluteURL(url) {
	return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
function combineURLs(baseURL, relativeURL) {
	return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
	let isRelativeUrl = !isAbsoluteURL(requestedURL);
	if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) return combineURLs(baseURL, requestedURL);
	return requestedURL;
}
var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? { ...thing } : thing;
function mergeConfig$1(config1, config2) {
	config2 = config2 || {};
	const config = {};
	function getMergedValue(target, source, prop, caseless) {
		if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) return utils_default.merge.call({ caseless }, target, source);
		else if (utils_default.isPlainObject(source)) return utils_default.merge({}, source);
		else if (utils_default.isArray(source)) return source.slice();
		return source;
	}
	function mergeDeepProperties(a, b, prop, caseless) {
		if (!utils_default.isUndefined(b)) return getMergedValue(a, b, prop, caseless);
		else if (!utils_default.isUndefined(a)) return getMergedValue(void 0, a, prop, caseless);
	}
	function valueFromConfig2(a, b) {
		if (!utils_default.isUndefined(b)) return getMergedValue(void 0, b);
	}
	function defaultToConfig2(a, b) {
		if (!utils_default.isUndefined(b)) return getMergedValue(void 0, b);
		else if (!utils_default.isUndefined(a)) return getMergedValue(void 0, a);
	}
	function mergeDirectKeys(a, b, prop) {
		if (prop in config2) return getMergedValue(a, b);
		else if (prop in config1) return getMergedValue(void 0, a);
	}
	const mergeMap = {
		url: valueFromConfig2,
		method: valueFromConfig2,
		data: valueFromConfig2,
		baseURL: defaultToConfig2,
		transformRequest: defaultToConfig2,
		transformResponse: defaultToConfig2,
		paramsSerializer: defaultToConfig2,
		timeout: defaultToConfig2,
		timeoutMessage: defaultToConfig2,
		withCredentials: defaultToConfig2,
		withXSRFToken: defaultToConfig2,
		adapter: defaultToConfig2,
		responseType: defaultToConfig2,
		xsrfCookieName: defaultToConfig2,
		xsrfHeaderName: defaultToConfig2,
		onUploadProgress: defaultToConfig2,
		onDownloadProgress: defaultToConfig2,
		decompress: defaultToConfig2,
		maxContentLength: defaultToConfig2,
		maxBodyLength: defaultToConfig2,
		beforeRedirect: defaultToConfig2,
		transport: defaultToConfig2,
		httpAgent: defaultToConfig2,
		httpsAgent: defaultToConfig2,
		cancelToken: defaultToConfig2,
		socketPath: defaultToConfig2,
		responseEncoding: defaultToConfig2,
		validateStatus: mergeDirectKeys,
		headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
	};
	utils_default.forEach(Object.keys({
		...config1,
		...config2
	}), function computeConfigValue(prop) {
		const merge$1 = mergeMap[prop] || mergeDeepProperties;
		const configValue = merge$1(config1[prop], config2[prop], prop);
		utils_default.isUndefined(configValue) && merge$1 !== mergeDirectKeys || (config[prop] = configValue);
	});
	return config;
}
var resolveConfig_default = (config) => {
	const newConfig = mergeConfig$1({}, config);
	let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
	newConfig.headers = headers = AxiosHeaders_default.from(headers);
	newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);
	if (auth) headers.set("Authorization", "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : "")));
	if (utils_default.isFormData(data)) {
		if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv) headers.setContentType(void 0);
		else if (utils_default.isFunction(data.getHeaders)) {
			const formHeaders = data.getHeaders();
			const allowedHeaders = ["content-type", "content-length"];
			Object.entries(formHeaders).forEach(([key, val]) => {
				if (allowedHeaders.includes(key.toLowerCase())) headers.set(key, val);
			});
		}
	}
	if (platform_default.hasStandardBrowserEnv) {
		withXSRFToken && utils_default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
		if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin_default(newConfig.url)) {
			const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies_default.read(xsrfCookieName);
			if (xsrfValue) headers.set(xsrfHeaderName, xsrfValue);
		}
	}
	return newConfig;
};
var xhr_default = typeof XMLHttpRequest !== "undefined" && function(config) {
	return new Promise(function dispatchXhrRequest(resolve, reject) {
		const _config = resolveConfig_default(config);
		let requestData = _config.data;
		const requestHeaders = AxiosHeaders_default.from(_config.headers).normalize();
		let { responseType, onUploadProgress, onDownloadProgress } = _config;
		let onCanceled;
		let uploadThrottled, downloadThrottled;
		let flushUpload, flushDownload;
		function done() {
			flushUpload && flushUpload();
			flushDownload && flushDownload();
			_config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
			_config.signal && _config.signal.removeEventListener("abort", onCanceled);
		}
		let request$1 = new XMLHttpRequest();
		request$1.open(_config.method.toUpperCase(), _config.url, true);
		request$1.timeout = _config.timeout;
		function onloadend() {
			if (!request$1) return;
			const responseHeaders = AxiosHeaders_default.from("getAllResponseHeaders" in request$1 && request$1.getAllResponseHeaders());
			settle(function _resolve(value) {
				resolve(value);
				done();
			}, function _reject(err) {
				reject(err);
				done();
			}, {
				data: !responseType || responseType === "text" || responseType === "json" ? request$1.responseText : request$1.response,
				status: request$1.status,
				statusText: request$1.statusText,
				headers: responseHeaders,
				config,
				request: request$1
			});
			request$1 = null;
		}
		if ("onloadend" in request$1) request$1.onloadend = onloadend;
		else request$1.onreadystatechange = function handleLoad() {
			if (!request$1 || request$1.readyState !== 4) return;
			if (request$1.status === 0 && !(request$1.responseURL && request$1.responseURL.indexOf("file:") === 0)) return;
			setTimeout(onloadend);
		};
		request$1.onabort = function handleAbort() {
			if (!request$1) return;
			reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request$1));
			request$1 = null;
		};
		request$1.onerror = function handleError(event) {
			const err = new AxiosError_default(event && event.message ? event.message : "Network Error", AxiosError_default.ERR_NETWORK, config, request$1);
			err.event = event || null;
			reject(err);
			request$1 = null;
		};
		request$1.ontimeout = function handleTimeout() {
			let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
			const transitional = _config.transitional || transitional_default;
			if (_config.timeoutErrorMessage) timeoutErrorMessage = _config.timeoutErrorMessage;
			reject(new AxiosError_default(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED, config, request$1));
			request$1 = null;
		};
		requestData === void 0 && requestHeaders.setContentType(null);
		if ("setRequestHeader" in request$1) utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
			request$1.setRequestHeader(key, val);
		});
		if (!utils_default.isUndefined(_config.withCredentials)) request$1.withCredentials = !!_config.withCredentials;
		if (responseType && responseType !== "json") request$1.responseType = _config.responseType;
		if (onDownloadProgress) {
			[downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
			request$1.addEventListener("progress", downloadThrottled);
		}
		if (onUploadProgress && request$1.upload) {
			[uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
			request$1.upload.addEventListener("progress", uploadThrottled);
			request$1.upload.addEventListener("loadend", flushUpload);
		}
		if (_config.cancelToken || _config.signal) {
			onCanceled = (cancel) => {
				if (!request$1) return;
				reject(!cancel || cancel.type ? new CanceledError_default(null, config, request$1) : cancel);
				request$1.abort();
				request$1 = null;
			};
			_config.cancelToken && _config.cancelToken.subscribe(onCanceled);
			if (_config.signal) _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
		}
		const protocol = parseProtocol(_config.url);
		if (protocol && platform_default.protocols.indexOf(protocol) === -1) {
			reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
			return;
		}
		request$1.send(requestData || null);
	});
};
var composeSignals = (signals, timeout) => {
	const { length } = signals = signals ? signals.filter(Boolean) : [];
	if (timeout || length) {
		let controller = new AbortController();
		let aborted;
		const onabort = function(reason) {
			if (!aborted) {
				aborted = true;
				unsubscribe();
				const err = reason instanceof Error ? reason : this.reason;
				controller.abort(err instanceof AxiosError_default ? err : new CanceledError_default(err instanceof Error ? err.message : err));
			}
		};
		let timer = timeout && setTimeout(() => {
			timer = null;
			onabort(new AxiosError_default(`timeout ${timeout} of ms exceeded`, AxiosError_default.ETIMEDOUT));
		}, timeout);
		const unsubscribe = () => {
			if (signals) {
				timer && clearTimeout(timer);
				timer = null;
				signals.forEach((signal$1) => {
					signal$1.unsubscribe ? signal$1.unsubscribe(onabort) : signal$1.removeEventListener("abort", onabort);
				});
				signals = null;
			}
		};
		signals.forEach((signal$1) => signal$1.addEventListener("abort", onabort));
		const { signal } = controller;
		signal.unsubscribe = () => utils_default.asap(unsubscribe);
		return signal;
	}
};
var composeSignals_default = composeSignals;
const streamChunk = function* (chunk, chunkSize) {
	let len = chunk.byteLength;
	if (!chunkSize || len < chunkSize) {
		yield chunk;
		return;
	}
	let pos = 0;
	let end;
	while (pos < len) {
		end = pos + chunkSize;
		yield chunk.slice(pos, end);
		pos = end;
	}
};
const readBytes = async function* (iterable, chunkSize) {
	for await (const chunk of readStream(iterable)) yield* streamChunk(chunk, chunkSize);
};
var readStream = async function* (stream) {
	if (stream[Symbol.asyncIterator]) {
		yield* stream;
		return;
	}
	const reader = stream.getReader();
	try {
		for (;;) {
			const { done, value } = await reader.read();
			if (done) break;
			yield value;
		}
	} finally {
		await reader.cancel();
	}
};
const trackStream = (stream, chunkSize, onProgress, onFinish) => {
	const iterator$1 = readBytes(stream, chunkSize);
	let bytes = 0;
	let done;
	let _onFinish = (e) => {
		if (!done) {
			done = true;
			onFinish && onFinish(e);
		}
	};
	return new ReadableStream({
		async pull(controller) {
			try {
				const { done: done$1, value } = await iterator$1.next();
				if (done$1) {
					_onFinish();
					controller.close();
					return;
				}
				let len = value.byteLength;
				if (onProgress) onProgress(bytes += len);
				controller.enqueue(new Uint8Array(value));
			} catch (err) {
				_onFinish(err);
				throw err;
			}
		},
		cancel(reason) {
			_onFinish(reason);
			return iterator$1.return();
		}
	}, { highWaterMark: 2 });
};
var DEFAULT_CHUNK_SIZE = 64 * 1024;
var { isFunction } = utils_default;
var globalFetchAPI = (({ fetch: fetch$1, Request, Response }) => ({
	fetch: fetch$1,
	Request,
	Response
}))(utils_default.global);
var { ReadableStream: ReadableStream$1, TextEncoder } = utils_default.global;
var test = (fn, ...args) => {
	try {
		return !!fn(...args);
	} catch (e) {
		return false;
	}
};
var factory = (env) => {
	const { fetch: fetch$1, Request, Response } = Object.assign({}, globalFetchAPI, env);
	const isFetchSupported = isFunction(fetch$1);
	const isRequestSupported = isFunction(Request);
	const isResponseSupported = isFunction(Response);
	if (!isFetchSupported) return false;
	const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream$1);
	const encodeText = isFetchSupported && (typeof TextEncoder === "function" ? ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Request(str).arrayBuffer()));
	const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(() => {
		let duplexAccessed = false;
		const hasContentType = new Request(platform_default.origin, {
			body: new ReadableStream$1(),
			method: "POST",
			get duplex() {
				duplexAccessed = true;
				return "half";
			}
		}).headers.has("Content-Type");
		return duplexAccessed && !hasContentType;
	});
	const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(() => utils_default.isReadableStream(new Response("").body));
	const resolvers = { stream: supportsResponseStream && ((res) => res.body) };
	isFetchSupported && [
		"text",
		"arrayBuffer",
		"blob",
		"formData",
		"stream"
	].forEach((type) => {
		!resolvers[type] && (resolvers[type] = (res, config) => {
			let method = res && res[type];
			if (method) return method.call(res);
			throw new AxiosError_default(`Response type '${type}' is not supported`, AxiosError_default.ERR_NOT_SUPPORT, config);
		});
	});
	const getBodyLength = async (body) => {
		if (body == null) return 0;
		if (utils_default.isBlob(body)) return body.size;
		if (utils_default.isSpecCompliantForm(body)) return (await new Request(platform_default.origin, {
			method: "POST",
			body
		}).arrayBuffer()).byteLength;
		if (utils_default.isArrayBufferView(body) || utils_default.isArrayBuffer(body)) return body.byteLength;
		if (utils_default.isURLSearchParams(body)) body = body + "";
		if (utils_default.isString(body)) return (await encodeText(body)).byteLength;
	};
	const resolveBodyLength = async (headers, body) => {
		const length = utils_default.toFiniteNumber(headers.getContentLength());
		return length == null ? getBodyLength(body) : length;
	};
	return async (config) => {
		let { url, method, data, signal, cancelToken, timeout, onDownloadProgress, onUploadProgress, responseType, headers, withCredentials = "same-origin", fetchOptions } = resolveConfig_default(config);
		responseType = responseType ? (responseType + "").toLowerCase() : "text";
		let composedSignal = composeSignals_default([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
		let request$1 = null;
		const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
			composedSignal.unsubscribe();
		});
		let requestContentLength;
		try {
			if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
				let _request = new Request(url, {
					method: "POST",
					body: data,
					duplex: "half"
				});
				let contentTypeHeader;
				if (utils_default.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) headers.setContentType(contentTypeHeader);
				if (_request.body) {
					const [onProgress, flush] = progressEventDecorator(requestContentLength, progressEventReducer(asyncDecorator(onUploadProgress)));
					data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
				}
			}
			if (!utils_default.isString(withCredentials)) withCredentials = withCredentials ? "include" : "omit";
			const isCredentialsSupported = isRequestSupported && "credentials" in Request.prototype;
			const resolvedOptions = {
				...fetchOptions,
				signal: composedSignal,
				method: method.toUpperCase(),
				headers: headers.normalize().toJSON(),
				body: data,
				duplex: "half",
				credentials: isCredentialsSupported ? withCredentials : void 0
			};
			request$1 = isRequestSupported && new Request(url, resolvedOptions);
			let response = await (isRequestSupported ? fetch$1(request$1, fetchOptions) : fetch$1(url, resolvedOptions));
			const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
			if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
				const options = {};
				[
					"status",
					"statusText",
					"headers"
				].forEach((prop) => {
					options[prop] = response[prop];
				});
				const responseContentLength = utils_default.toFiniteNumber(response.headers.get("content-length"));
				const [onProgress, flush] = onDownloadProgress && progressEventDecorator(responseContentLength, progressEventReducer(asyncDecorator(onDownloadProgress), true)) || [];
				response = new Response(trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
					flush && flush();
					unsubscribe && unsubscribe();
				}), options);
			}
			responseType = responseType || "text";
			let responseData = await resolvers[utils_default.findKey(resolvers, responseType) || "text"](response, config);
			!isStreamResponse && unsubscribe && unsubscribe();
			return await new Promise((resolve, reject) => {
				settle(resolve, reject, {
					data: responseData,
					headers: AxiosHeaders_default.from(response.headers),
					status: response.status,
					statusText: response.statusText,
					config,
					request: request$1
				});
			});
		} catch (err) {
			unsubscribe && unsubscribe();
			if (err && err.name === "TypeError" && /Load failed|fetch/i.test(err.message)) throw Object.assign(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request$1), { cause: err.cause || err });
			throw AxiosError_default.from(err, err && err.code, config, request$1);
		}
	};
};
var seedCache = /* @__PURE__ */ new Map();
const getFetch = (config) => {
	let env = utils_default.merge.call({ skipUndefined: true }, globalFetchAPI, config ? config.env : null);
	const { fetch: fetch$1, Request, Response } = env;
	const seeds = [
		Request,
		Response,
		fetch$1
	];
	let i = seeds.length, seed, target, map = seedCache;
	while (i--) {
		seed = seeds[i];
		target = map.get(seed);
		target === void 0 && map.set(seed, target = i ? /* @__PURE__ */ new Map() : factory(env));
		map = target;
	}
	return target;
};
getFetch();
var knownAdapters = {
	http: null,
	xhr: xhr_default,
	fetch: { get: getFetch }
};
utils_default.forEach(knownAdapters, (fn, value) => {
	if (fn) {
		try {
			Object.defineProperty(fn, "name", { value });
		} catch (e) {}
		Object.defineProperty(fn, "adapterName", { value });
	}
});
var renderReason = (reason) => `- ${reason}`;
var isResolvedHandle = (adapter$1) => utils_default.isFunction(adapter$1) || adapter$1 === null || adapter$1 === false;
var adapters_default = {
	getAdapter: (adapters, config) => {
		adapters = utils_default.isArray(adapters) ? adapters : [adapters];
		const { length } = adapters;
		let nameOrAdapter;
		let adapter$1;
		const rejectedReasons = {};
		for (let i = 0; i < length; i++) {
			nameOrAdapter = adapters[i];
			let id;
			adapter$1 = nameOrAdapter;
			if (!isResolvedHandle(nameOrAdapter)) {
				adapter$1 = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
				if (adapter$1 === void 0) throw new AxiosError_default(`Unknown adapter '${id}'`);
			}
			if (adapter$1 && (utils_default.isFunction(adapter$1) || (adapter$1 = adapter$1.get(config)))) break;
			rejectedReasons[id || "#" + i] = adapter$1;
		}
		if (!adapter$1) {
			const reasons = Object.entries(rejectedReasons).map(([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build"));
			throw new AxiosError_default(`There is no suitable adapter to dispatch the request ` + (length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
		}
		return adapter$1;
	},
	adapters: knownAdapters
};
function throwIfCancellationRequested(config) {
	if (config.cancelToken) config.cancelToken.throwIfRequested();
	if (config.signal && config.signal.aborted) throw new CanceledError_default(null, config);
}
function dispatchRequest(config) {
	throwIfCancellationRequested(config);
	config.headers = AxiosHeaders_default.from(config.headers);
	config.data = transformData.call(config, config.transformRequest);
	if ([
		"post",
		"put",
		"patch"
	].indexOf(config.method) !== -1) config.headers.setContentType("application/x-www-form-urlencoded", false);
	return adapters_default.getAdapter(config.adapter || defaults_default.adapter, config)(config).then(function onAdapterResolution(response) {
		throwIfCancellationRequested(config);
		response.data = transformData.call(config, config.transformResponse, response);
		response.headers = AxiosHeaders_default.from(response.headers);
		return response;
	}, function onAdapterRejection(reason) {
		if (!isCancel$1(reason)) {
			throwIfCancellationRequested(config);
			if (reason && reason.response) {
				reason.response.data = transformData.call(config, config.transformResponse, reason.response);
				reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
			}
		}
		return Promise.reject(reason);
	});
}
const VERSION$1 = "1.12.0";
var validators$1 = {};
[
	"object",
	"boolean",
	"number",
	"function",
	"string",
	"symbol"
].forEach((type, i) => {
	validators$1[type] = function validator(thing) {
		return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
	};
});
var deprecatedWarnings = {};
validators$1.transitional = function transitional(validator, version, message) {
	function formatMessage(opt, desc) {
		return "[Axios v" + VERSION$1 + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
	}
	return (value, opt, opts) => {
		if (validator === false) throw new AxiosError_default(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), AxiosError_default.ERR_DEPRECATED);
		if (version && !deprecatedWarnings[opt]) {
			deprecatedWarnings[opt] = true;
			console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
		}
		return validator ? validator(value, opt, opts) : true;
	};
};
validators$1.spelling = function spelling(correctSpelling) {
	return (value, opt) => {
		console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
		return true;
	};
};
function assertOptions(options, schema, allowUnknown) {
	if (typeof options !== "object") throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
	const keys = Object.keys(options);
	let i = keys.length;
	while (i-- > 0) {
		const opt = keys[i];
		const validator = schema[opt];
		if (validator) {
			const value = options[opt];
			const result = value === void 0 || validator(value, opt, options);
			if (result !== true) throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (allowUnknown !== true) throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
	}
}
var validator_default = {
	assertOptions,
	validators: validators$1
};
var validators = validator_default.validators;
var Axios$1 = class {
	constructor(instanceConfig) {
		this.defaults = instanceConfig || {};
		this.interceptors = {
			request: new InterceptorManager_default(),
			response: new InterceptorManager_default()
		};
	}
	async request(configOrUrl, config) {
		try {
			return await this._request(configOrUrl, config);
		} catch (err) {
			if (err instanceof Error) {
				let dummy = {};
				Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = /* @__PURE__ */ new Error();
				const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
				try {
					if (!err.stack) err.stack = stack;
					else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) err.stack += "\n" + stack;
				} catch (e) {}
			}
			throw err;
		}
	}
	_request(configOrUrl, config) {
		if (typeof configOrUrl === "string") {
			config = config || {};
			config.url = configOrUrl;
		} else config = configOrUrl || {};
		config = mergeConfig$1(this.defaults, config);
		const { transitional, paramsSerializer, headers } = config;
		if (transitional !== void 0) validator_default.assertOptions(transitional, {
			silentJSONParsing: validators.transitional(validators.boolean),
			forcedJSONParsing: validators.transitional(validators.boolean),
			clarifyTimeoutError: validators.transitional(validators.boolean)
		}, false);
		if (paramsSerializer != null) if (utils_default.isFunction(paramsSerializer)) config.paramsSerializer = { serialize: paramsSerializer };
		else validator_default.assertOptions(paramsSerializer, {
			encode: validators.function,
			serialize: validators.function
		}, true);
		if (config.allowAbsoluteUrls !== void 0) {} else if (this.defaults.allowAbsoluteUrls !== void 0) config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
		else config.allowAbsoluteUrls = true;
		validator_default.assertOptions(config, {
			baseUrl: validators.spelling("baseURL"),
			withXsrfToken: validators.spelling("withXSRFToken")
		}, true);
		config.method = (config.method || this.defaults.method || "get").toLowerCase();
		let contextHeaders = headers && utils_default.merge(headers.common, headers[config.method]);
		headers && utils_default.forEach([
			"delete",
			"get",
			"head",
			"post",
			"put",
			"patch",
			"common"
		], (method) => {
			delete headers[method];
		});
		config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
		const requestInterceptorChain = [];
		let synchronousRequestInterceptors = true;
		this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
			if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
			synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
			requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
		});
		const responseInterceptorChain = [];
		this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
			responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
		});
		let promise;
		let i = 0;
		let len;
		if (!synchronousRequestInterceptors) {
			const chain = [dispatchRequest.bind(this), void 0];
			chain.unshift(...requestInterceptorChain);
			chain.push(...responseInterceptorChain);
			len = chain.length;
			promise = Promise.resolve(config);
			while (i < len) promise = promise.then(chain[i++], chain[i++]);
			return promise;
		}
		len = requestInterceptorChain.length;
		let newConfig = config;
		i = 0;
		while (i < len) {
			const onFulfilled = requestInterceptorChain[i++];
			const onRejected = requestInterceptorChain[i++];
			try {
				newConfig = onFulfilled(newConfig);
			} catch (error) {
				onRejected.call(this, error);
				break;
			}
		}
		try {
			promise = dispatchRequest.call(this, newConfig);
		} catch (error) {
			return Promise.reject(error);
		}
		i = 0;
		len = responseInterceptorChain.length;
		while (i < len) promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
		return promise;
	}
	getUri(config) {
		config = mergeConfig$1(this.defaults, config);
		return buildURL(buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls), config.params, config.paramsSerializer);
	}
};
utils_default.forEach([
	"delete",
	"get",
	"head",
	"options"
], function forEachMethodNoData(method) {
	Axios$1.prototype[method] = function(url, config) {
		return this.request(mergeConfig$1(config || {}, {
			method,
			url,
			data: (config || {}).data
		}));
	};
});
utils_default.forEach([
	"post",
	"put",
	"patch"
], function forEachMethodWithData(method) {
	function generateHTTPMethod(isForm) {
		return function httpMethod(url, data, config) {
			return this.request(mergeConfig$1(config || {}, {
				method,
				headers: isForm ? { "Content-Type": "multipart/form-data" } : {},
				url,
				data
			}));
		};
	}
	Axios$1.prototype[method] = generateHTTPMethod();
	Axios$1.prototype[method + "Form"] = generateHTTPMethod(true);
});
var Axios_default = Axios$1;
var CancelToken_default = class CancelToken$1 {
	constructor(executor) {
		if (typeof executor !== "function") throw new TypeError("executor must be a function.");
		let resolvePromise;
		this.promise = new Promise(function promiseExecutor(resolve) {
			resolvePromise = resolve;
		});
		const token = this;
		this.promise.then((cancel) => {
			if (!token._listeners) return;
			let i = token._listeners.length;
			while (i-- > 0) token._listeners[i](cancel);
			token._listeners = null;
		});
		this.promise.then = (onfulfilled) => {
			let _resolve;
			const promise = new Promise((resolve) => {
				token.subscribe(resolve);
				_resolve = resolve;
			}).then(onfulfilled);
			promise.cancel = function reject() {
				token.unsubscribe(_resolve);
			};
			return promise;
		};
		executor(function cancel(message, config, request$1) {
			if (token.reason) return;
			token.reason = new CanceledError_default(message, config, request$1);
			resolvePromise(token.reason);
		});
	}
	throwIfRequested() {
		if (this.reason) throw this.reason;
	}
	subscribe(listener) {
		if (this.reason) {
			listener(this.reason);
			return;
		}
		if (this._listeners) this._listeners.push(listener);
		else this._listeners = [listener];
	}
	unsubscribe(listener) {
		if (!this._listeners) return;
		const index = this._listeners.indexOf(listener);
		if (index !== -1) this._listeners.splice(index, 1);
	}
	toAbortSignal() {
		const controller = new AbortController();
		const abort = (err) => {
			controller.abort(err);
		};
		this.subscribe(abort);
		controller.signal.unsubscribe = () => this.unsubscribe(abort);
		return controller.signal;
	}
	static source() {
		let cancel;
		return {
			token: new CancelToken$1(function executor(c) {
				cancel = c;
			}),
			cancel
		};
	}
};
function spread$1(callback) {
	return function wrap(arr) {
		return callback.apply(null, arr);
	};
}
function isAxiosError$1(payload) {
	return utils_default.isObject(payload) && payload.isAxiosError === true;
}
var HttpStatusCode$1 = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode$1).forEach(([key, value]) => {
	HttpStatusCode$1[value] = key;
});
var HttpStatusCode_default = HttpStatusCode$1;
function createInstance(defaultConfig) {
	const context = new Axios_default(defaultConfig);
	const instance = bind(Axios_default.prototype.request, context);
	utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
	utils_default.extend(instance, context, null, { allOwnKeys: true });
	instance.create = function create(instanceConfig) {
		return createInstance(mergeConfig$1(defaultConfig, instanceConfig));
	};
	return instance;
}
var axios = createInstance(defaults_default);
axios.Axios = Axios_default;
axios.CanceledError = CanceledError_default;
axios.CancelToken = CancelToken_default;
axios.isCancel = isCancel$1;
axios.VERSION = VERSION$1;
axios.toFormData = toFormData_default;
axios.AxiosError = AxiosError_default;
axios.Cancel = axios.CanceledError;
axios.all = function all$1(promises) {
	return Promise.all(promises);
};
axios.spread = spread$1;
axios.isAxiosError = isAxiosError$1;
axios.mergeConfig = mergeConfig$1;
axios.AxiosHeaders = AxiosHeaders_default;
axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters_default.getAdapter;
axios.HttpStatusCode = HttpStatusCode_default;
axios.default = axios;
var axios_default = axios;
var { Axios, AxiosError, CanceledError, isCancel, CancelToken, VERSION, all, Cancel, isAxiosError, spread, toFormData, AxiosHeaders, HttpStatusCode, formToJSON, getAdapter, mergeConfig } = axios_default;
var getBrowserId = () => {
	let browserId = localStorage.getItem(BROWSER_ID_STORAGE_KEY);
	if (!browserId) {
		browserId = crypto.randomUUID();
		localStorage.setItem(BROWSER_ID_STORAGE_KEY, browserId);
	}
	return browserId;
};
var NO_NETWORK_ERROR_CODE = 999;
var STREAM_SEPARATOR = "⧉⇋⇋➽⌑⧉§§\n";
var MfaRequiredError = class extends ApplicationError {
	constructor() {
		super("MFA is required to access this resource. Please set up MFA in your user settings.");
		this.name = "MfaRequiredError";
	}
};
var ResponseError = class extends ApplicationError {
	httpStatusCode;
	errorCode;
	serverStackTrace;
	meta;
	hint;
	constructor(message, options = {}) {
		super(message);
		this.name = "ResponseError";
		const { errorCode, httpStatusCode, stack, meta, hint } = options;
		if (errorCode) this.errorCode = errorCode;
		if (httpStatusCode) this.httpStatusCode = httpStatusCode;
		if (stack) this.serverStackTrace = stack;
		if (meta) this.meta = meta;
		if (hint) this.hint = hint;
	}
};
var legacyParamSerializer = (params) => Object.keys(params).filter((key) => params[key] !== void 0).map((key) => {
	if (Array.isArray(params[key])) return params[key].map((v) => `${key}[]=${encodeURIComponent(v)}`).join("&");
	if (typeof params[key] === "object") params[key] = JSON.stringify(params[key]);
	return `${key}=${encodeURIComponent(params[key])}`;
}).join("&");
async function request(config) {
	const { method, baseURL, endpoint, headers, data } = config;
	const options = {
		method,
		url: endpoint,
		baseURL,
		headers: headers ?? {}
	};
	if (baseURL.startsWith("/")) options.headers["browser-id"] = getBrowserId();
	if (!baseURL.includes("api.n8n.io") && !baseURL.includes("n8n.cloud")) options.withCredentials = options.withCredentials ?? true;
	if ([
		"POST",
		"PATCH",
		"PUT"
	].includes(method)) options.data = data;
	else if (data) {
		options.params = data;
		options.paramsSerializer = legacyParamSerializer;
	}
	try {
		return (await axios_default.request(options)).data;
	} catch (error) {
		if (error.message === "Network Error") throw new ResponseError("Can't connect to n8n.", { errorCode: 999 });
		const errorResponseData = error.response?.data;
		if (errorResponseData?.mfaRequired === true) throw new MfaRequiredError();
		if (errorResponseData?.message !== void 0) {
			if (errorResponseData.name === "NodeApiError") {
				errorResponseData.httpStatusCode = error.response.status;
				throw errorResponseData;
			}
			throw new ResponseError(errorResponseData.message, {
				errorCode: errorResponseData.code,
				httpStatusCode: error.response.status,
				stack: errorResponseData.stack,
				meta: errorResponseData.meta,
				hint: errorResponseData.hint
			});
		}
		throw error;
	}
}
async function getFullApiResponse(context, method, endpoint, data) {
	return await request({
		method,
		baseURL: context.baseUrl,
		endpoint,
		headers: { "push-ref": context.pushRef },
		data
	});
}
async function makeRestApiRequest(context, method, endpoint, data) {
	return (await request({
		method,
		baseURL: context.baseUrl,
		endpoint,
		headers: { "push-ref": context.pushRef },
		data
	})).data;
}
async function get(baseURL, endpoint, params, headers) {
	return await request({
		method: "GET",
		baseURL,
		endpoint,
		headers,
		data: params
	});
}
async function post(baseURL, endpoint, params, headers) {
	return await request({
		method: "POST",
		baseURL,
		endpoint,
		headers,
		data: params
	});
}
async function streamRequest(context, apiEndpoint, payload, onChunk, onDone, onError, separator = STREAM_SEPARATOR, abortSignal) {
	let onErrorOnce = (e) => {
		onErrorOnce = void 0;
		onError?.(e);
	};
	const assistantRequest = {
		headers: {
			"browser-id": getBrowserId(),
			"Content-Type": "application/json"
		},
		method: "POST",
		credentials: "include",
		body: JSON.stringify(payload),
		signal: abortSignal
	};
	try {
		const response = await fetch(`${context.baseUrl}${apiEndpoint}`, assistantRequest);
		if (response.body) {
			const reader = response.body.getReader();
			const decoder = new TextDecoder("utf-8");
			let buffer = "";
			async function readStream$1() {
				const { done, value } = await reader.read();
				if (done) {
					if (response.ok) onDone?.();
					else onErrorOnce?.(new ResponseError(response.statusText, { httpStatusCode: response.status }));
					return;
				}
				const chunk = decoder.decode(value);
				buffer += chunk;
				const splitChunks = buffer.split(separator);
				buffer = "";
				for (const splitChunk of splitChunks) if (splitChunk) {
					let data;
					try {
						data = jsonParse(splitChunk, { errorMessage: "Invalid json" });
					} catch (e) {
						buffer += splitChunk;
						continue;
					}
					try {
						if (response.ok) onChunk?.(data);
						else {
							const message = "message" in data ? data.message : response.statusText;
							onErrorOnce?.(new ResponseError(String(message), { httpStatusCode: response.status }));
						}
					} catch (e) {
						if (e instanceof Error) onErrorOnce?.(e);
					}
				}
				await readStream$1();
			}
			await readStream$1();
		} else if (onErrorOnce) onErrorOnce(new Error(response.statusText));
	} catch (e) {
		assert(e instanceof Error);
		onErrorOnce?.(e);
	}
}
const STORES = {
	COMMUNITY_NODES: "communityNodes",
	ROOT: "root",
	SETTINGS: "settings",
	UI: "ui",
	USERS: "users",
	WORKFLOWS: "workflows",
	WORKFLOWS_V2: "workflowsV2",
	WORKFLOWS_EE: "workflowsEE",
	EXECUTIONS: "executions",
	NDV: "ndv",
	TEMPLATES: "templates",
	NODE_TYPES: "nodeTypes",
	CREDENTIALS: "credentials",
	TAGS: "tags",
	ANNOTATION_TAGS: "annotationTags",
	VERSIONS: "versions",
	NODE_CREATOR: "nodeCreator",
	WEBHOOKS: "webhooks",
	HISTORY: "history",
	CLOUD_PLAN: "cloudPlan",
	RBAC: "rbac",
	PUSH: "push",
	COLLABORATION: "collaboration",
	ASSISTANT: "assistant",
	BUILDER: "builder",
	CHAT_PANEL: "chatPanel",
	CHAT_PANEL_STATE: "chatPanelState",
	BECOME_TEMPLATE_CREATOR: "becomeTemplateCreator",
	PROJECTS: "projects",
	API_KEYS: "apiKeys",
	EVALUATION: "evaluation",
	FOLDERS: "folders",
	MODULES: "modules",
	FOCUS_PANEL: "focusPanel",
	WORKFLOW_STATE: "workflowState",
	AI_TEMPLATES_STARTER_COLLECTION: "aiTemplatesStarterCollection",
	PERSONALIZED_TEMPLATES: "personalizedTemplates",
	EXPERIMENT_READY_TO_RUN_WORKFLOWS: "readyToRunWorkflows",
	EXPERIMENT_READY_TO_RUN_WORKFLOWS_V2: "readyToRunWorkflowsV2",
	EXPERIMENT_TEMPLATE_RECO_V2: "templateRecoV2",
	PERSONALIZED_TEMPLATES_V3: "personalizedTemplatesV3",
	READY_TO_RUN: "readyToRun",
	TEMPLATES_DATA_QUALITY: "templatesDataQuality",
	BANNERS: "banners",
	CONSENT: "consent",
	CHAT_HUB: "chatHub"
};
function getTagName(configName) {
	return `n8n:config:${configName}`;
}
function getConfigFromMetaTag(configName) {
	const tagName = getTagName(configName);
	try {
		const metaTag = document.querySelector(`meta[name="${tagName}"]`);
		if (!metaTag) return null;
		const encodedContent = metaTag.getAttribute("content");
		if (!encodedContent) return null;
		return atob(encodedContent);
	} catch (error) {
		console.warn(`Failed to read n8n config for "${tagName}":`, error);
		return null;
	}
}
function getAndParseConfigFromMetaTag(configName) {
	const config = getConfigFromMetaTag(configName);
	if (!config) return null;
	try {
		return JSON.parse(config);
	} catch (error) {
		console.warn(`Failed to parse n8n config for "${getTagName(configName)}":`, error);
		return null;
	}
}
var { VUE_APP_URL_BASE_API } = {};
const useRootStore = /* @__PURE__ */ defineStore(STORES.ROOT, () => {
	const state = ref({
		baseUrl: VUE_APP_URL_BASE_API ?? window.BASE_PATH,
		restEndpoint: getConfigFromMetaTag("rest-endpoint") ?? "rest",
		defaultLocale: "en",
		endpointForm: "form",
		endpointFormTest: "form-test",
		endpointFormWaiting: "form-waiting",
		endpointMcp: "mcp",
		endpointMcpTest: "mcp-test",
		endpointWebhook: "webhook",
		endpointWebhookTest: "webhook-test",
		endpointWebhookWaiting: "webhook-waiting",
		timezone: "America/New_York",
		executionTimeout: -1,
		maxExecutionTimeout: Number.MAX_SAFE_INTEGER,
		versionCli: "0.0.0",
		oauthCallbackUrls: {},
		n8nMetadata: {},
		pushRef: randomString(10).toLowerCase(),
		urlBaseWebhook: "http://localhost:5678/",
		urlBaseEditor: "http://localhost:5678",
		instanceId: "",
		binaryDataMode: "default"
	});
	const baseUrl = computed(() => state.value.baseUrl);
	const formUrl = computed(() => `${state.value.urlBaseWebhook}${state.value.endpointForm}`);
	const formTestUrl = computed(() => `${state.value.urlBaseEditor}${state.value.endpointFormTest}`);
	const formWaitingUrl = computed(() => `${state.value.urlBaseEditor}${state.value.endpointFormWaiting}`);
	const webhookUrl = computed(() => `${state.value.urlBaseWebhook}${state.value.endpointWebhook}`);
	const webhookTestUrl = computed(() => `${state.value.urlBaseEditor}${state.value.endpointWebhookTest}`);
	const webhookWaitingUrl = computed(() => `${state.value.urlBaseEditor}${state.value.endpointWebhookWaiting}`);
	const mcpUrl = computed(() => `${state.value.urlBaseWebhook}${state.value.endpointMcp}`);
	const mcpTestUrl = computed(() => `${state.value.urlBaseEditor}${state.value.endpointMcpTest}`);
	const pushRef = computed(() => state.value.pushRef);
	const binaryDataMode = computed(() => state.value.binaryDataMode);
	const defaultLocale = computed(() => state.value.defaultLocale);
	const urlBaseEditor = computed(() => state.value.urlBaseEditor);
	const instanceId = computed(() => state.value.instanceId);
	const versionCli = computed(() => state.value.versionCli);
	const OAuthCallbackUrls = computed(() => state.value.oauthCallbackUrls);
	const restUrl = computed(() => `${state.value.baseUrl}${state.value.restEndpoint}`);
	const executionTimeout = computed(() => state.value.executionTimeout);
	const maxExecutionTimeout = computed(() => state.value.maxExecutionTimeout);
	const timezone = computed(() => state.value.timezone);
	const restApiContext = computed(() => ({
		baseUrl: restUrl.value,
		pushRef: state.value.pushRef
	}));
	const setUrlBaseWebhook = (value) => {
		const url = value.endsWith("/") ? value : `${value}/`;
		state.value.urlBaseWebhook = url;
	};
	const setUrlBaseEditor = (value) => {
		const url = value.endsWith("/") ? value : `${value}/`;
		state.value.urlBaseEditor = url;
	};
	const setEndpointForm = (value) => {
		state.value.endpointForm = value;
	};
	const setEndpointFormTest = (value) => {
		state.value.endpointFormTest = value;
	};
	const setEndpointFormWaiting = (value) => {
		state.value.endpointFormWaiting = value;
	};
	const setEndpointWebhook = (value) => {
		state.value.endpointWebhook = value;
	};
	const setEndpointWebhookTest = (value) => {
		state.value.endpointWebhookTest = value;
	};
	const setEndpointWebhookWaiting = (value) => {
		state.value.endpointWebhookWaiting = value;
	};
	const setEndpointMcp = (value) => {
		state.value.endpointMcp = value;
	};
	const setEndpointMcpTest = (value) => {
		state.value.endpointMcpTest = value;
	};
	const setTimezone = (value) => {
		state.value.timezone = value;
		setGlobalState({ defaultTimezone: value });
	};
	const setExecutionTimeout = (value) => {
		state.value.executionTimeout = value;
	};
	const setMaxExecutionTimeout = (value) => {
		state.value.maxExecutionTimeout = value;
	};
	const setVersionCli = (value) => {
		state.value.versionCli = value;
	};
	const setInstanceId = (value) => {
		state.value.instanceId = value;
	};
	const setOauthCallbackUrls = (value) => {
		state.value.oauthCallbackUrls = value;
	};
	const setN8nMetadata = (value) => {
		state.value.n8nMetadata = value;
	};
	const setDefaultLocale = (value) => {
		state.value.defaultLocale = value;
	};
	const setBinaryDataMode = (value) => {
		state.value.binaryDataMode = value;
	};
	return {
		baseUrl,
		formUrl,
		formTestUrl,
		formWaitingUrl,
		mcpUrl,
		mcpTestUrl,
		webhookUrl,
		webhookTestUrl,
		webhookWaitingUrl,
		restUrl,
		restApiContext,
		urlBaseEditor,
		versionCli,
		instanceId,
		pushRef,
		defaultLocale,
		binaryDataMode,
		OAuthCallbackUrls,
		executionTimeout,
		maxExecutionTimeout,
		timezone,
		setUrlBaseWebhook,
		setUrlBaseEditor,
		setEndpointForm,
		setEndpointFormTest,
		setEndpointFormWaiting,
		setEndpointWebhook,
		setEndpointWebhookTest,
		setEndpointWebhookWaiting,
		setEndpointMcp,
		setEndpointMcpTest,
		setTimezone,
		setExecutionTimeout,
		setMaxExecutionTimeout,
		setVersionCli,
		setInstanceId,
		setOauthCallbackUrls,
		setN8nMetadata,
		setDefaultLocale,
		setBinaryDataMode
	};
});
var require__createBaseEach = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isArrayLike$1 = require_isArrayLike();
	function createBaseEach(eachFunc, fromRight) {
		return function(collection, iteratee) {
			if (collection == null) return collection;
			if (!isArrayLike$1(collection)) return eachFunc(collection, iteratee);
			var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
			while (fromRight ? index-- : ++index < length) if (iteratee(iterable[index], index, iterable) === false) break;
			return collection;
		};
	}
	module.exports = createBaseEach;
}));
var require__baseEach = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseForOwn = require__baseForOwn();
	module.exports = require__createBaseEach()(baseForOwn);
}));
var require__baseMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseEach = require__baseEach(), isArrayLike = require_isArrayLike();
	function baseMap$1(collection, iteratee) {
		var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
		baseEach(collection, function(value, key, collection$1) {
			result[++index] = iteratee(value, key, collection$1);
		});
		return result;
	}
	module.exports = baseMap$1;
}));
var require__baseSortBy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function baseSortBy$1(array, comparer) {
		var length = array.length;
		array.sort(comparer);
		while (length--) array[length] = array[length].value;
		return array;
	}
	module.exports = baseSortBy$1;
}));
var require__compareAscending = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isSymbol = require_isSymbol();
	function compareAscending$1(value, other) {
		if (value !== other) {
			var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
			var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
			if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) return 1;
			if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) return -1;
		}
		return 0;
	}
	module.exports = compareAscending$1;
}));
var require__compareMultiple = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var compareAscending = require__compareAscending();
	function compareMultiple$1(object, other, orders) {
		var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
		while (++index < length) {
			var result = compareAscending(objCriteria[index], othCriteria[index]);
			if (result) {
				if (index >= ordersLength) return result;
				return result * (orders[index] == "desc" ? -1 : 1);
			}
		}
		return object.index - other.index;
	}
	module.exports = compareMultiple$1;
}));
var require__baseOrderBy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayMap = require__arrayMap(), baseGet = require__baseGet(), baseIteratee = require__baseIteratee(), baseMap = require__baseMap(), baseSortBy = require__baseSortBy(), baseUnary = require__baseUnary(), compareMultiple = require__compareMultiple(), identity = require_identity(), isArray = require_isArray();
	function baseOrderBy(collection, iteratees, orders) {
		if (iteratees.length) iteratees = arrayMap(iteratees, function(iteratee) {
			if (isArray(iteratee)) return function(value) {
				return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
			};
			return iteratee;
		});
		else iteratees = [identity];
		var index = -1;
		iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
		return baseSortBy(baseMap(collection, function(value, key, collection$1) {
			var criteria = arrayMap(iteratees, function(iteratee) {
				return iteratee(value);
			});
			return {
				"criteria": criteria,
				"index": ++index,
				"value": value
			};
		}), function(object, other) {
			return compareMultiple(object, other, orders);
		});
	}
	module.exports = baseOrderBy;
}));
export { defineStore as A, INSTANCE_ID_HEADER as C, N8N_IO_BASE_URL as D, BROWSER_ID_STORAGE_KEY as E, PiniaVuePlugin as O, TOOL_EXECUTOR_NODE_NAME as S, NPM_COMMUNITY_NODE_SEARCH_API_URL as T, assert as _, STORES as a, LOGSTREAMING_DEFAULT_MAX_FREE_SOCKETS as b, ResponseError as c, makeRestApiRequest as d, post as f, axios_default as g, AxiosError as h, getAndParseConfigFromMetaTag as i, storeToRefs as j, createPinia as k, get as l, streamRequest as m, require__baseEach as n, MfaRequiredError as o, request as p, useRootStore as r, NO_NETWORK_ERROR_CODE as s, require__baseOrderBy as t, getFullApiResponse as u, LOGSTREAMING_CB_DEFAULT_FAILURE_WINDOW_MS as v, INSTANCE_VERSION_HEADER as w, LOGSTREAMING_DEFAULT_MAX_SOCKETS as x, LOGSTREAMING_CB_DEFAULT_MAX_FAILURES as y };
