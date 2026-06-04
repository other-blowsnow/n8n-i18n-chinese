import { At as isRef, Bt as toRef$1, En as init_dist, Et as getCurrentScope, Ft as ref, Mt as onScopeDispose, Nt as reactive, P as getCurrentInstance, Pt as readonly, R as inject, Rt as shallowRef, S as computed, Tn as global, Vt as toRefs$1, W as nextTick, Wt as unref, X as onMounted, _t as watchEffect, gt as watch, tt as provide, wt as customRef } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import "./_MapCache-Cl68hVFF.js";
//#region ../../../node_modules/.pnpm/@vueuse+shared@10.11.0_vue@3.5.26_typescript@6.0.2_/node_modules/@vueuse/shared/index.mjs
function tryOnScopeDispose(fn) {
	if (getCurrentScope()) {
		onScopeDispose(fn);
		return true;
	}
	return false;
}
function createEventHook() {
	const fns = /* @__PURE__ */ new Set();
	const off = (fn) => {
		fns.delete(fn);
	};
	const on = (fn) => {
		fns.add(fn);
		const offFn = () => off(fn);
		tryOnScopeDispose(offFn);
		return { off: offFn };
	};
	const trigger = (...args) => {
		return Promise.all(Array.from(fns).map((fn) => fn(...args)));
	};
	return {
		on,
		off,
		trigger
	};
}
var localProvidedStateMap = /* @__PURE__ */ new WeakMap();
var provideLocal = (key, value) => {
	var _a;
	const instance = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
	if (instance == null) throw new Error("provideLocal must be called in setup");
	if (!localProvidedStateMap.has(instance)) localProvidedStateMap.set(instance, /* @__PURE__ */ Object.create(null));
	const localProvidedState = localProvidedStateMap.get(instance);
	localProvidedState[key] = value;
	provide(key, value);
};
var injectLocal = (...args) => {
	var _a;
	const key = args[0];
	const instance = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
	if (instance == null) throw new Error("injectLocal must be called in setup");
	if (localProvidedStateMap.has(instance) && key in localProvidedStateMap.get(instance)) return localProvidedStateMap.get(instance)[key];
	return inject(...args);
};
function createInjectionState(composable, options) {
	const key = (options == null ? void 0 : options.injectionKey) || Symbol(composable.name || "InjectionState");
	const defaultValue = options == null ? void 0 : options.defaultValue;
	const useProvidingState = (...args) => {
		const state = composable(...args);
		provideLocal(key, state);
		return state;
	};
	const useInjectedState = () => injectLocal(key, defaultValue);
	return [useProvidingState, useInjectedState];
}
function toValue(r) {
	return typeof r === "function" ? r() : unref(r);
}
var isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var notNullish = (val) => val != null;
var toString = Object.prototype.toString;
var isObject = (val) => toString.call(val) === "[object Object]";
var timestamp = () => +Date.now();
var noop = () => {};
var hasOwn = (val, key) => Object.prototype.hasOwnProperty.call(val, key);
var isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
	var _a, _b;
	return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function createFilterWrapper(filter, fn) {
	function wrapper(...args) {
		return new Promise((resolve, reject) => {
			Promise.resolve(filter(() => fn.apply(this, args), {
				fn,
				thisArg: this,
				args
			})).then(resolve).catch(reject);
		});
	}
	return wrapper;
}
var bypassFilter = (invoke) => {
	return invoke();
};
function debounceFilter(ms, options = {}) {
	let timer;
	let maxTimer;
	let lastRejector = noop;
	const _clearTimeout = (timer2) => {
		clearTimeout(timer2);
		lastRejector();
		lastRejector = noop;
	};
	const filter = (invoke) => {
		const duration = toValue(ms);
		const maxDuration = toValue(options.maxWait);
		if (timer) _clearTimeout(timer);
		if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
			if (maxTimer) {
				_clearTimeout(maxTimer);
				maxTimer = null;
			}
			return Promise.resolve(invoke());
		}
		return new Promise((resolve, reject) => {
			lastRejector = options.rejectOnCancel ? reject : resolve;
			if (maxDuration && !maxTimer) maxTimer = setTimeout(() => {
				if (timer) _clearTimeout(timer);
				maxTimer = null;
				resolve(invoke());
			}, maxDuration);
			timer = setTimeout(() => {
				if (maxTimer) _clearTimeout(maxTimer);
				maxTimer = null;
				resolve(invoke());
			}, duration);
		});
	};
	return filter;
}
function throttleFilter(...args) {
	let lastExec = 0;
	let timer;
	let isLeading = true;
	let lastRejector = noop;
	let lastValue;
	let ms;
	let trailing;
	let leading;
	let rejectOnCancel;
	if (!isRef(args[0]) && typeof args[0] === "object") ({delay: ms, trailing = true, leading = true, rejectOnCancel = false} = args[0]);
	else [ms, trailing = true, leading = true, rejectOnCancel = false] = args;
	const clear = () => {
		if (timer) {
			clearTimeout(timer);
			timer = void 0;
			lastRejector();
			lastRejector = noop;
		}
	};
	const filter = (_invoke) => {
		const duration = toValue(ms);
		const elapsed = Date.now() - lastExec;
		const invoke = () => {
			return lastValue = _invoke();
		};
		clear();
		if (duration <= 0) {
			lastExec = Date.now();
			return invoke();
		}
		if (elapsed > duration && (leading || !isLeading)) {
			lastExec = Date.now();
			invoke();
		} else if (trailing) lastValue = new Promise((resolve, reject) => {
			lastRejector = rejectOnCancel ? reject : resolve;
			timer = setTimeout(() => {
				lastExec = Date.now();
				isLeading = true;
				resolve(invoke());
				clear();
			}, Math.max(0, duration - elapsed));
		});
		if (!leading && !timer) timer = setTimeout(() => isLeading = true, duration);
		isLeading = false;
		return lastValue;
	};
	return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
	const isActive = ref(true);
	function pause() {
		isActive.value = false;
	}
	function resume() {
		isActive.value = true;
	}
	const eventFilter = (...args) => {
		if (isActive.value) extendFilter(...args);
	};
	return {
		isActive: readonly(isActive),
		pause,
		resume,
		eventFilter
	};
}
var directiveHooks = {
	mounted: "mounted",
	updated: "updated",
	unmounted: "unmounted"
};
function cacheStringFunction(fn) {
	const cache = /* @__PURE__ */ Object.create(null);
	return (str) => {
		return cache[str] || (cache[str] = fn(str));
	};
}
var hyphenateRE = /\B([A-Z])/g;
cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var camelizeRE = /-(\w)/g;
cacheStringFunction((str) => {
	return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
function promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
	return new Promise((resolve, reject) => {
		if (throwOnTimeout) setTimeout(() => reject(reason), ms);
		else setTimeout(resolve, ms);
	});
}
function createSingletonPromise(fn) {
	let _promise;
	function wrapper() {
		if (!_promise) _promise = fn();
		return _promise;
	}
	wrapper.reset = async () => {
		const _prev = _promise;
		_promise = void 0;
		if (_prev) await _prev;
	};
	return wrapper;
}
function getLifeCycleTarget(target) {
	return target || getCurrentInstance();
}
function toRef(...args) {
	if (args.length !== 1) return toRef$1(...args);
	const r = args[0];
	return typeof r === "function" ? readonly(customRef(() => ({
		get: r,
		set: noop
	}))) : ref(r);
}
function useDebounceFn(fn, ms = 200, options = {}) {
	return createFilterWrapper(debounceFilter(ms, options), fn);
}
function refDebounced(value, ms = 200, options = {}) {
	const debounced = ref(value.value);
	const updater = useDebounceFn(() => {
		debounced.value = value.value;
	}, ms, options);
	watch(value, () => updater());
	return debounced;
}
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
	return createFilterWrapper(throttleFilter(ms, trailing, leading, rejectOnCancel), fn);
}
function refThrottled(value, delay = 200, trailing = true, leading = true) {
	if (delay <= 0) return value;
	const throttled = ref(value.value);
	const updater = useThrottleFn(() => {
		throttled.value = value.value;
	}, delay, trailing, leading);
	watch(value, () => updater());
	return throttled;
}
function watchWithFilter(source, cb, options = {}) {
	const { eventFilter = bypassFilter, ...watchOptions } = options;
	return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
function watchPausable(source, cb, options = {}) {
	const { eventFilter: filter, ...watchOptions } = options;
	const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
	return {
		stop: watchWithFilter(source, cb, {
			...watchOptions,
			eventFilter
		}),
		pause,
		resume,
		isActive
	};
}
function toRefs(objectRef, options = {}) {
	if (!isRef(objectRef)) return toRefs$1(objectRef);
	const result = Array.isArray(objectRef.value) ? Array.from({ length: objectRef.value.length }) : {};
	for (const key in objectRef.value) result[key] = customRef(() => ({
		get() {
			return objectRef.value[key];
		},
		set(v) {
			var _a;
			if ((_a = toValue(options.replaceRef)) != null ? _a : true) if (Array.isArray(objectRef.value)) {
				const copy = [...objectRef.value];
				copy[key] = v;
				objectRef.value = copy;
			} else {
				const newObject = {
					...objectRef.value,
					[key]: v
				};
				Object.setPrototypeOf(newObject, Object.getPrototypeOf(objectRef.value));
				objectRef.value = newObject;
			}
			else objectRef.value[key] = v;
		}
	}));
	return result;
}
function tryOnMounted(fn, sync = true, target) {
	if (getLifeCycleTarget()) onMounted(fn, target);
	else if (sync) fn();
	else nextTick(fn);
}
function createUntil(r, isNot = false) {
	function toMatch(condition, { flush = "sync", deep = false, timeout, throwOnTimeout } = {}) {
		let stop = null;
		const promises = [new Promise((resolve) => {
			stop = watch(r, (v) => {
				if (condition(v) !== isNot) {
					stop?.();
					resolve(v);
				}
			}, {
				flush,
				deep,
				immediate: true
			});
		})];
		if (timeout != null) promises.push(promiseTimeout(timeout, throwOnTimeout).then(() => toValue(r)).finally(() => stop == null ? void 0 : stop()));
		return Promise.race(promises);
	}
	function toBe(value, options) {
		if (!isRef(value)) return toMatch((v) => v === value, options);
		const { flush = "sync", deep = false, timeout, throwOnTimeout } = options != null ? options : {};
		let stop = null;
		const promises = [new Promise((resolve) => {
			stop = watch([r, value], ([v1, v2]) => {
				if (isNot !== (v1 === v2)) {
					stop?.();
					resolve(v1);
				}
			}, {
				flush,
				deep,
				immediate: true
			});
		})];
		if (timeout != null) promises.push(promiseTimeout(timeout, throwOnTimeout).then(() => toValue(r)).finally(() => {
			stop?.();
			return toValue(r);
		}));
		return Promise.race(promises);
	}
	function toBeTruthy(options) {
		return toMatch((v) => Boolean(v), options);
	}
	function toBeNull(options) {
		return toBe(null, options);
	}
	function toBeUndefined(options) {
		return toBe(void 0, options);
	}
	function toBeNaN(options) {
		return toMatch(Number.isNaN, options);
	}
	function toContains(value, options) {
		return toMatch((v) => {
			const array = Array.from(v);
			return array.includes(value) || array.includes(toValue(value));
		}, options);
	}
	function changed(options) {
		return changedTimes(1, options);
	}
	function changedTimes(n = 1, options) {
		let count = -1;
		return toMatch(() => {
			count += 1;
			return count >= n;
		}, options);
	}
	if (Array.isArray(toValue(r))) return {
		toMatch,
		toContains,
		changed,
		changedTimes,
		get not() {
			return createUntil(r, !isNot);
		}
	};
	else return {
		toMatch,
		toBe,
		toBeTruthy,
		toBeNull,
		toBeNaN,
		toBeUndefined,
		changed,
		changedTimes,
		get not() {
			return createUntil(r, !isNot);
		}
	};
}
function until(r) {
	return createUntil(r);
}
function useIntervalFn(cb, interval = 1e3, options = {}) {
	const { immediate = true, immediateCallback = false } = options;
	let timer = null;
	const isActive = ref(false);
	function clean() {
		if (timer) {
			clearInterval(timer);
			timer = null;
		}
	}
	function pause() {
		isActive.value = false;
		clean();
	}
	function resume() {
		const intervalValue = toValue(interval);
		if (intervalValue <= 0) return;
		isActive.value = true;
		if (immediateCallback) cb();
		clean();
		timer = setInterval(cb, intervalValue);
	}
	if (immediate && isClient) resume();
	if (isRef(interval) || typeof interval === "function") tryOnScopeDispose(watch(interval, () => {
		if (isActive.value && isClient) resume();
	}));
	tryOnScopeDispose(pause);
	return {
		isActive,
		pause,
		resume
	};
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
		}, toValue(interval));
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
function watchDebounced(source, cb, options = {}) {
	const { debounce = 0, maxWait = void 0, ...watchOptions } = options;
	return watchWithFilter(source, cb, {
		...watchOptions,
		eventFilter: debounceFilter(debounce, { maxWait })
	});
}
function watchOnce(source, cb, options) {
	const stop = watch(source, (...args) => {
		nextTick(() => stop());
		return cb(...args);
	}, options);
	return stop;
}
function watchThrottled(source, cb, options = {}) {
	const { throttle = 0, trailing = true, leading = true, ...watchOptions } = options;
	return watchWithFilter(source, cb, {
		...watchOptions,
		eventFilter: throttleFilter(throttle, trailing, leading)
	});
}
//#endregion
//#region ../../../node_modules/.pnpm/@vueuse+core@10.11.0_vue@3.5.26_typescript@6.0.2_/node_modules/@vueuse/core/index.mjs
init_dist();
function computedAsync(evaluationCallback, initialState, optionsOrRef) {
	let options;
	if (isRef(optionsOrRef)) options = { evaluating: optionsOrRef };
	else options = optionsOrRef || {};
	const { lazy = false, evaluating = void 0, shallow = true, onError = noop } = options;
	const started = ref(!lazy);
	const current = shallow ? shallowRef(initialState) : ref(initialState);
	let counter = 0;
	watchEffect(async (onInvalidate) => {
		if (!started.value) return;
		counter++;
		const counterAtBeginning = counter;
		let hasFinished = false;
		if (evaluating) Promise.resolve().then(() => {
			evaluating.value = true;
		});
		try {
			const result = await evaluationCallback((cancelCallback) => {
				onInvalidate(() => {
					if (evaluating) evaluating.value = false;
					if (!hasFinished) cancelCallback();
				});
			});
			if (counterAtBeginning === counter) current.value = result;
		} catch (e) {
			onError(e);
		} finally {
			if (evaluating && counterAtBeginning === counter) evaluating.value = false;
			hasFinished = true;
		}
	});
	if (lazy) return computed(() => {
		started.value = true;
		return current.value;
	});
	else return current;
}
function unrefElement(elRef) {
	var _a;
	const plain = toValue(elRef);
	return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
var defaultWindow = isClient ? window : void 0;
var defaultDocument = isClient ? window.document : void 0;
var defaultNavigator = isClient ? window.navigator : void 0;
isClient && window.location;
function useEventListener(...args) {
	let target;
	let events;
	let listeners;
	let options;
	if (typeof args[0] === "string" || Array.isArray(args[0])) {
		[events, listeners, options] = args;
		target = defaultWindow;
	} else [target, events, listeners, options] = args;
	if (!target) return noop;
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
	const stopWatch = watch(() => [unrefElement(target), toValue(options)], ([el, options2]) => {
		cleanup();
		if (!el) return;
		const optionsClone = isObject(options2) ? { ...options2 } : options2;
		cleanups.push(...events.flatMap((event) => {
			return listeners.map((listener) => register(el, event, listener, optionsClone));
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
	const { window = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
	if (!window) return noop;
	if (isIOS && !_iOSWorkaround) {
		_iOSWorkaround = true;
		Array.from(window.document.body.children).forEach((el) => el.addEventListener("click", noop));
		window.document.documentElement.addEventListener("click", noop);
	}
	let shouldListen = true;
	const shouldIgnore = (event) => {
		return ignore.some((target2) => {
			if (typeof target2 === "string") return Array.from(window.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
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
		useEventListener(window, "click", listener, {
			passive: true,
			capture
		}),
		useEventListener(window, "pointerdown", (e) => {
			const el = unrefElement(target);
			shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
		}, { passive: true }),
		detectIframe && useEventListener(window, "blur", (event) => {
			setTimeout(() => {
				var _a;
				const el = unrefElement(target);
				if (((_a = window.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window.document.activeElement))) handler(event);
			}, 0);
		})
	].filter(Boolean);
	const stop = () => cleanup.forEach((fn) => fn());
	return stop;
}
function createKeyPredicate(keyFilter) {
	if (typeof keyFilter === "function") return keyFilter;
	else if (typeof keyFilter === "string") return (event) => event.key === keyFilter;
	else if (Array.isArray(keyFilter)) return (event) => keyFilter.includes(event.key);
	return () => true;
}
function onKeyStroke(...args) {
	let key;
	let handler;
	let options = {};
	if (args.length === 3) {
		key = args[0];
		handler = args[1];
		options = args[2];
	} else if (args.length === 2) if (typeof args[1] === "object") {
		key = true;
		handler = args[0];
		options = args[1];
	} else {
		key = args[0];
		handler = args[1];
	}
	else {
		key = true;
		handler = args[0];
	}
	const { target = defaultWindow, eventName = "keydown", passive = false, dedupe = false } = options;
	const predicate = createKeyPredicate(key);
	const listener = (e) => {
		if (e.repeat && toValue(dedupe)) return;
		if (predicate(e)) handler(e);
	};
	return useEventListener(target, eventName, listener, passive);
}
function onKeyDown(key, handler, options = {}) {
	return onKeyStroke(key, handler, {
		...options,
		eventName: "keydown"
	});
}
function onKeyUp(key, handler, options = {}) {
	return onKeyStroke(key, handler, {
		...options,
		eventName: "keyup"
	});
}
function useMounted() {
	const isMounted = ref(false);
	const instance = getCurrentInstance();
	if (instance) onMounted(() => {
		isMounted.value = true;
	}, instance);
	return isMounted;
}
function useSupported(callback) {
	const isMounted = useMounted();
	return computed(() => {
		isMounted.value;
		return Boolean(callback());
	});
}
function useMutationObserver(target, callback, options = {}) {
	const { window = defaultWindow, ...mutationOptions } = options;
	let observer;
	const isSupported = useSupported(() => window && "MutationObserver" in window);
	const cleanup = () => {
		if (observer) {
			observer.disconnect();
			observer = void 0;
		}
	};
	const targets = computed(() => {
		const value = toValue(target);
		const items = (Array.isArray(value) ? value : [value]).map(unrefElement).filter(notNullish);
		return new Set(items);
	});
	const stopWatch = watch(() => targets.value, (targets2) => {
		cleanup();
		if (isSupported.value && targets2.size) {
			observer = new MutationObserver(callback);
			targets2.forEach((el) => observer.observe(el, mutationOptions));
		}
	}, {
		immediate: true,
		flush: "post"
	});
	const takeRecords = () => {
		return observer == null ? void 0 : observer.takeRecords();
	};
	const stop = () => {
		cleanup();
		stopWatch();
	};
	tryOnScopeDispose(stop);
	return {
		isSupported,
		stop,
		takeRecords
	};
}
function useActiveElement(options = {}) {
	var _a;
	const { window = defaultWindow, deep = true, triggerOnRemoval = false } = options;
	const document = (_a = options.document) != null ? _a : window == null ? void 0 : window.document;
	const getDeepActiveElement = () => {
		var _a2;
		let element = document == null ? void 0 : document.activeElement;
		if (deep) while (element == null ? void 0 : element.shadowRoot) element = (_a2 = element == null ? void 0 : element.shadowRoot) == null ? void 0 : _a2.activeElement;
		return element;
	};
	const activeElement = ref();
	const trigger = () => {
		activeElement.value = getDeepActiveElement();
	};
	if (window) {
		useEventListener(window, "blur", (event) => {
			if (event.relatedTarget !== null) return;
			trigger();
		}, true);
		useEventListener(window, "focus", trigger, true);
	}
	if (triggerOnRemoval) useMutationObserver(document, (mutations) => {
		mutations.filter((m) => m.removedNodes.length).map((n) => Array.from(n.removedNodes)).flat().forEach((node) => {
			if (node === activeElement.value) trigger();
		});
	}, {
		childList: true,
		subtree: true
	});
	trigger();
	return activeElement;
}
function useRafFn(fn, options = {}) {
	const { immediate = true, fpsLimit = void 0, window = defaultWindow } = options;
	const isActive = ref(false);
	const intervalLimit = fpsLimit ? 1e3 / fpsLimit : null;
	let previousFrameTimestamp = 0;
	let rafId = null;
	function loop(timestamp) {
		if (!isActive.value || !window) return;
		if (!previousFrameTimestamp) previousFrameTimestamp = timestamp;
		const delta = timestamp - previousFrameTimestamp;
		if (intervalLimit && delta < intervalLimit) {
			rafId = window.requestAnimationFrame(loop);
			return;
		}
		previousFrameTimestamp = timestamp;
		fn({
			delta,
			timestamp
		});
		rafId = window.requestAnimationFrame(loop);
	}
	function resume() {
		if (!isActive.value && window) {
			isActive.value = true;
			previousFrameTimestamp = 0;
			rafId = window.requestAnimationFrame(loop);
		}
	}
	function pause() {
		isActive.value = false;
		if (rafId != null && window) {
			window.cancelAnimationFrame(rafId);
			rafId = null;
		}
	}
	if (immediate) resume();
	tryOnScopeDispose(pause);
	return {
		isActive: readonly(isActive),
		pause,
		resume
	};
}
function useAsyncState(promise, initialState, options) {
	const { immediate = true, delay = 0, onError = noop, onSuccess = noop, resetOnExecute = true, shallow = true, throwError } = options != null ? options : {};
	const state = shallow ? shallowRef(initialState) : ref(initialState);
	const isReady = ref(false);
	const isLoading = ref(false);
	const error = shallowRef(void 0);
	async function execute(delay2 = 0, ...args) {
		if (resetOnExecute) state.value = initialState;
		error.value = void 0;
		isReady.value = false;
		isLoading.value = true;
		if (delay2 > 0) await promiseTimeout(delay2);
		const _promise = typeof promise === "function" ? promise(...args) : promise;
		try {
			const data = await _promise;
			state.value = data;
			isReady.value = true;
			onSuccess(data);
		} catch (e) {
			error.value = e;
			onError(e);
			if (throwError) throw e;
		} finally {
			isLoading.value = false;
		}
		return state.value;
	}
	if (immediate) execute(delay);
	const shell = {
		state,
		isReady,
		isLoading,
		error,
		execute
	};
	function waitUntilIsLoaded() {
		return new Promise((resolve, reject) => {
			until(isLoading).toBe(false).then(() => resolve(shell)).catch(reject);
		});
	}
	return {
		...shell,
		then(onFulfilled, onRejected) {
			return waitUntilIsLoaded().then(onFulfilled, onRejected);
		}
	};
}
function useMediaQuery(query, options = {}) {
	const { window = defaultWindow } = options;
	const isSupported = useSupported(() => window && "matchMedia" in window && typeof window.matchMedia === "function");
	let mediaQuery;
	const matches = ref(false);
	const handler = (event) => {
		matches.value = event.matches;
	};
	const cleanup = () => {
		if (!mediaQuery) return;
		if ("removeEventListener" in mediaQuery) mediaQuery.removeEventListener("change", handler);
		else mediaQuery.removeListener(handler);
	};
	const stopWatch = watchEffect(() => {
		if (!isSupported.value) return;
		cleanup();
		mediaQuery = window.matchMedia(toValue(query));
		if ("addEventListener" in mediaQuery) mediaQuery.addEventListener("change", handler);
		else mediaQuery.addListener(handler);
		matches.value = mediaQuery.matches;
	});
	tryOnScopeDispose(() => {
		stopWatch();
		cleanup();
		mediaQuery = void 0;
	});
	return matches;
}
function usePermission(permissionDesc, options = {}) {
	const { controls = false, navigator = defaultNavigator } = options;
	const isSupported = useSupported(() => navigator && "permissions" in navigator);
	let permissionStatus;
	const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
	const state = ref();
	const onChange = () => {
		if (permissionStatus) state.value = permissionStatus.state;
	};
	const query = createSingletonPromise(async () => {
		if (!isSupported.value) return;
		if (!permissionStatus) try {
			permissionStatus = await navigator.permissions.query(desc);
			useEventListener(permissionStatus, "change", onChange);
			onChange();
		} catch (e) {
			state.value = "prompt";
		}
		return permissionStatus;
	});
	query();
	if (controls) return {
		state,
		isSupported,
		query
	};
	else return state;
}
function useClipboard(options = {}) {
	const { navigator = defaultNavigator, read = false, source, copiedDuring = 1500, legacy = false } = options;
	const isClipboardApiSupported = useSupported(() => navigator && "clipboard" in navigator);
	const permissionRead = usePermission("clipboard-read");
	const permissionWrite = usePermission("clipboard-write");
	const isSupported = computed(() => isClipboardApiSupported.value || legacy);
	const text = ref("");
	const copied = ref(false);
	const timeout = useTimeoutFn(() => copied.value = false, copiedDuring);
	function updateText() {
		if (isClipboardApiSupported.value && isAllowed(permissionRead.value)) navigator.clipboard.readText().then((value) => {
			text.value = value;
		});
		else text.value = legacyRead();
	}
	if (isSupported.value && read) useEventListener(["copy", "cut"], updateText);
	async function copy(value = toValue(source)) {
		if (isSupported.value && value != null) {
			if (isClipboardApiSupported.value && isAllowed(permissionWrite.value)) await navigator.clipboard.writeText(value);
			else legacyCopy(value);
			text.value = value;
			copied.value = true;
			timeout.start();
		}
	}
	function legacyCopy(value) {
		const ta = document.createElement("textarea");
		ta.value = value != null ? value : "";
		ta.style.position = "absolute";
		ta.style.opacity = "0";
		document.body.appendChild(ta);
		ta.select();
		document.execCommand("copy");
		ta.remove();
	}
	function legacyRead() {
		var _a, _b, _c;
		return (_c = (_b = (_a = document == null ? void 0 : document.getSelection) == null ? void 0 : _a.call(document)) == null ? void 0 : _b.toString()) != null ? _c : "";
	}
	function isAllowed(status) {
		return status === "granted" || status === "prompt";
	}
	return {
		isSupported,
		text,
		copied,
		copy
	};
}
var _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__vueuse_ssr_handlers__";
var handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
	if (!(globalKey in _global)) _global[globalKey] = _global[globalKey] || {};
	return _global[globalKey];
}
function getSSRHandler(key, fallback) {
	return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
	return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
var StorageSerializers = {
	boolean: {
		read: (v) => v === "true",
		write: (v) => String(v)
	},
	object: {
		read: (v) => JSON.parse(v),
		write: (v) => JSON.stringify(v)
	},
	number: {
		read: (v) => Number.parseFloat(v),
		write: (v) => String(v)
	},
	any: {
		read: (v) => v,
		write: (v) => String(v)
	},
	string: {
		read: (v) => v,
		write: (v) => String(v)
	},
	map: {
		read: (v) => new Map(JSON.parse(v)),
		write: (v) => JSON.stringify(Array.from(v.entries()))
	},
	set: {
		read: (v) => new Set(JSON.parse(v)),
		write: (v) => JSON.stringify(Array.from(v))
	},
	date: {
		read: (v) => new Date(v),
		write: (v) => v.toISOString()
	}
};
var customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
	var _a;
	const { flush = "pre", deep = true, listenToStorageChanges = true, writeDefaults = true, mergeDefaults = false, shallow, window = defaultWindow, eventFilter, onError = (e) => {
		console.error(e);
	}, initOnMounted } = options;
	const data = (shallow ? shallowRef : ref)(typeof defaults === "function" ? defaults() : defaults);
	if (!storage) try {
		storage = getSSRHandler("getDefaultStorage", () => {
			var _a2;
			return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
		})();
	} catch (e) {
		onError(e);
	}
	if (!storage) return data;
	const rawInit = toValue(defaults);
	const type = guessSerializerType(rawInit);
	const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
	const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, () => write(data.value), {
		flush,
		deep,
		eventFilter
	});
	if (window && listenToStorageChanges) tryOnMounted(() => {
		useEventListener(window, "storage", update);
		useEventListener(window, customStorageEventName, updateFromCustomEvent);
		if (initOnMounted) update();
	});
	if (!initOnMounted) update();
	function dispatchWriteEvent(oldValue, newValue) {
		if (window) window.dispatchEvent(new CustomEvent(customStorageEventName, { detail: {
			key,
			oldValue,
			newValue,
			storageArea: storage
		} }));
	}
	function write(v) {
		try {
			const oldValue = storage.getItem(key);
			if (v == null) {
				dispatchWriteEvent(oldValue, null);
				storage.removeItem(key);
			} else {
				const serialized = serializer.write(v);
				if (oldValue !== serialized) {
					storage.setItem(key, serialized);
					dispatchWriteEvent(oldValue, serialized);
				}
			}
		} catch (e) {
			onError(e);
		}
	}
	function read(event) {
		const rawValue = event ? event.newValue : storage.getItem(key);
		if (rawValue == null) {
			if (writeDefaults && rawInit != null) storage.setItem(key, serializer.write(rawInit));
			return rawInit;
		} else if (!event && mergeDefaults) {
			const value = serializer.read(rawValue);
			if (typeof mergeDefaults === "function") return mergeDefaults(value, rawInit);
			else if (type === "object" && !Array.isArray(value)) return {
				...rawInit,
				...value
			};
			return value;
		} else if (typeof rawValue !== "string") return rawValue;
		else return serializer.read(rawValue);
	}
	function update(event) {
		if (event && event.storageArea !== storage) return;
		if (event && event.key == null) {
			data.value = rawInit;
			return;
		}
		if (event && event.key !== key) return;
		pauseWatch();
		try {
			if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value)) data.value = read(event);
		} catch (e) {
			onError(e);
		} finally {
			if (event) nextTick(resumeWatch);
			else resumeWatch();
		}
	}
	function updateFromCustomEvent(event) {
		update(event.detail);
	}
	return data;
}
function useCssVar(prop, target, options = {}) {
	const { window = defaultWindow, initialValue = "", observe = false } = options;
	const variable = ref(initialValue);
	const elRef = computed(() => {
		var _a;
		return unrefElement(target) || ((_a = window == null ? void 0 : window.document) == null ? void 0 : _a.documentElement);
	});
	function updateCssVar() {
		var _a;
		const key = toValue(prop);
		const el = toValue(elRef);
		if (el && window) variable.value = ((_a = window.getComputedStyle(el).getPropertyValue(key)) == null ? void 0 : _a.trim()) || initialValue;
	}
	if (observe) useMutationObserver(elRef, updateCssVar, {
		attributeFilter: ["style", "class"],
		window
	});
	watch([elRef, () => toValue(prop)], updateCssVar, { immediate: true });
	watch(variable, (val) => {
		var _a;
		if ((_a = elRef.value) == null ? void 0 : _a.style) elRef.value.style.setProperty(toValue(prop), val);
	});
	return variable;
}
function useDocumentVisibility(options = {}) {
	const { document = defaultDocument } = options;
	if (!document) return ref("visible");
	const visibility = ref(document.visibilityState);
	useEventListener(document, "visibilitychange", () => {
		visibility.value = document.visibilityState;
	});
	return visibility;
}
function useResizeObserver(target, callback, options = {}) {
	const { window = defaultWindow, ...observerOptions } = options;
	let observer;
	const isSupported = useSupported(() => window && "ResizeObserver" in window);
	const cleanup = () => {
		if (observer) {
			observer.disconnect();
			observer = void 0;
		}
	};
	const stopWatch = watch(computed(() => Array.isArray(target) ? target.map((el) => unrefElement(el)) : [unrefElement(target)]), (els) => {
		cleanup();
		if (isSupported.value && window) {
			observer = new ResizeObserver(callback);
			for (const _el of els) _el && observer.observe(_el, observerOptions);
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
function useElementBounding(target, options = {}) {
	const { reset = true, windowResize = true, windowScroll = true, immediate = true } = options;
	const height = ref(0);
	const bottom = ref(0);
	const left = ref(0);
	const right = ref(0);
	const top = ref(0);
	const width = ref(0);
	const x = ref(0);
	const y = ref(0);
	function update() {
		const el = unrefElement(target);
		if (!el) {
			if (reset) {
				height.value = 0;
				bottom.value = 0;
				left.value = 0;
				right.value = 0;
				top.value = 0;
				width.value = 0;
				x.value = 0;
				y.value = 0;
			}
			return;
		}
		const rect = el.getBoundingClientRect();
		height.value = rect.height;
		bottom.value = rect.bottom;
		left.value = rect.left;
		right.value = rect.right;
		top.value = rect.top;
		width.value = rect.width;
		x.value = rect.x;
		y.value = rect.y;
	}
	useResizeObserver(target, update);
	watch(() => unrefElement(target), (ele) => !ele && update());
	useMutationObserver(target, update, { attributeFilter: ["style", "class"] });
	if (windowScroll) useEventListener("scroll", update, {
		capture: true,
		passive: true
	});
	if (windowResize) useEventListener("resize", update, { passive: true });
	tryOnMounted(() => {
		if (immediate) update();
	});
	return {
		height,
		bottom,
		left,
		right,
		top,
		width,
		x,
		y,
		update
	};
}
function useElementHover(el, options = {}) {
	const { delayEnter = 0, delayLeave = 0, window = defaultWindow } = options;
	const isHovered = ref(false);
	let timer;
	const toggle = (entering) => {
		const delay = entering ? delayEnter : delayLeave;
		if (timer) {
			clearTimeout(timer);
			timer = void 0;
		}
		if (delay) timer = setTimeout(() => isHovered.value = entering, delay);
		else isHovered.value = entering;
	};
	if (!window) return isHovered;
	useEventListener(el, "mouseenter", () => toggle(true), { passive: true });
	useEventListener(el, "mouseleave", () => toggle(false), { passive: true });
	return isHovered;
}
function useElementSize(target, initialSize = {
	width: 0,
	height: 0
}, options = {}) {
	const { window = defaultWindow, box = "content-box" } = options;
	const isSVG = computed(() => {
		var _a, _b;
		return (_b = (_a = unrefElement(target)) == null ? void 0 : _a.namespaceURI) == null ? void 0 : _b.includes("svg");
	});
	const width = ref(initialSize.width);
	const height = ref(initialSize.height);
	const { stop: stop1 } = useResizeObserver(target, ([entry]) => {
		const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
		if (window && isSVG.value) {
			const $elem = unrefElement(target);
			if ($elem) {
				const rect = $elem.getBoundingClientRect();
				width.value = rect.width;
				height.value = rect.height;
			}
		} else if (boxSize) {
			const formatBoxSize = Array.isArray(boxSize) ? boxSize : [boxSize];
			width.value = formatBoxSize.reduce((acc, { inlineSize }) => acc + inlineSize, 0);
			height.value = formatBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0);
		} else {
			width.value = entry.contentRect.width;
			height.value = entry.contentRect.height;
		}
	}, options);
	tryOnMounted(() => {
		const ele = unrefElement(target);
		if (ele) {
			width.value = "offsetWidth" in ele ? ele.offsetWidth : initialSize.width;
			height.value = "offsetHeight" in ele ? ele.offsetHeight : initialSize.height;
		}
	});
	const stop2 = watch(() => unrefElement(target), (ele) => {
		width.value = ele ? initialSize.width : 0;
		height.value = ele ? initialSize.height : 0;
	});
	function stop() {
		stop1();
		stop2();
	}
	return {
		width,
		height,
		stop
	};
}
function useIntersectionObserver(target, callback, options = {}) {
	const { root, rootMargin = "0px", threshold = .1, window = defaultWindow, immediate = true } = options;
	const isSupported = useSupported(() => window && "IntersectionObserver" in window);
	const targets = computed(() => {
		const _target = toValue(target);
		return (Array.isArray(_target) ? _target : [_target]).map(unrefElement).filter(notNullish);
	});
	let cleanup = noop;
	const isActive = ref(immediate);
	const stopWatch = isSupported.value ? watch(() => [
		targets.value,
		unrefElement(root),
		isActive.value
	], ([targets2, root2]) => {
		cleanup();
		if (!isActive.value) return;
		if (!targets2.length) return;
		const observer = new IntersectionObserver(callback, {
			root: unrefElement(root2),
			rootMargin,
			threshold
		});
		targets2.forEach((el) => el && observer.observe(el));
		cleanup = () => {
			observer.disconnect();
			cleanup = noop;
		};
	}, {
		immediate,
		flush: "post"
	}) : noop;
	const stop = () => {
		cleanup();
		stopWatch();
		isActive.value = false;
	};
	tryOnScopeDispose(stop);
	return {
		isSupported,
		isActive,
		pause() {
			cleanup();
			isActive.value = false;
		},
		resume() {
			isActive.value = true;
		},
		stop
	};
}
var DEFAULT_OPTIONS = {
	multiple: true,
	accept: "*",
	reset: false,
	directory: false
};
function useFileDialog(options = {}) {
	const { document = defaultDocument } = options;
	const files = ref(null);
	const { on: onChange, trigger } = createEventHook();
	let input;
	if (document) {
		input = document.createElement("input");
		input.type = "file";
		input.onchange = (event) => {
			files.value = event.target.files;
			trigger(files.value);
		};
	}
	const reset = () => {
		files.value = null;
		if (input && input.value) {
			input.value = "";
			trigger(null);
		}
	};
	const open = (localOptions) => {
		if (!input) return;
		const _options = {
			...DEFAULT_OPTIONS,
			...options,
			...localOptions
		};
		input.multiple = _options.multiple;
		input.accept = _options.accept;
		input.webkitdirectory = _options.directory;
		if (hasOwn(_options, "capture")) input.capture = _options.capture;
		if (_options.reset) reset();
		input.click();
	};
	return {
		files: readonly(files),
		open,
		reset,
		onChange
	};
}
var ARRIVED_STATE_THRESHOLD_PIXELS = 1;
function useScroll(element, options = {}) {
	const { throttle = 0, idle = 200, onStop = noop, onScroll = noop, offset = {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0
	}, eventListenerOptions = {
		capture: false,
		passive: true
	}, behavior = "auto", window = defaultWindow, onError = (e) => {
		console.error(e);
	} } = options;
	const internalX = ref(0);
	const internalY = ref(0);
	const x = computed({
		get() {
			return internalX.value;
		},
		set(x2) {
			scrollTo(x2, void 0);
		}
	});
	const y = computed({
		get() {
			return internalY.value;
		},
		set(y2) {
			scrollTo(void 0, y2);
		}
	});
	function scrollTo(_x, _y) {
		var _a, _b, _c, _d;
		if (!window) return;
		const _element = toValue(element);
		if (!_element) return;
		(_c = _element instanceof Document ? window.document.body : _element) == null || _c.scrollTo({
			top: (_a = toValue(_y)) != null ? _a : y.value,
			left: (_b = toValue(_x)) != null ? _b : x.value,
			behavior: toValue(behavior)
		});
		const scrollContainer = ((_d = _element == null ? void 0 : _element.document) == null ? void 0 : _d.documentElement) || (_element == null ? void 0 : _element.documentElement) || _element;
		if (x != null) internalX.value = scrollContainer.scrollLeft;
		if (y != null) internalY.value = scrollContainer.scrollTop;
	}
	const isScrolling = ref(false);
	const arrivedState = reactive({
		left: true,
		right: false,
		top: true,
		bottom: false
	});
	const directions = reactive({
		left: false,
		right: false,
		top: false,
		bottom: false
	});
	const onScrollEnd = (e) => {
		if (!isScrolling.value) return;
		isScrolling.value = false;
		directions.left = false;
		directions.right = false;
		directions.top = false;
		directions.bottom = false;
		onStop(e);
	};
	const onScrollEndDebounced = useDebounceFn(onScrollEnd, throttle + idle);
	const setArrivedState = (target) => {
		var _a;
		if (!window) return;
		const el = ((_a = target == null ? void 0 : target.document) == null ? void 0 : _a.documentElement) || (target == null ? void 0 : target.documentElement) || unrefElement(target);
		const { display, flexDirection } = getComputedStyle(el);
		const scrollLeft = el.scrollLeft;
		directions.left = scrollLeft < internalX.value;
		directions.right = scrollLeft > internalX.value;
		const left = Math.abs(scrollLeft) <= (offset.left || 0);
		const right = Math.abs(scrollLeft) + el.clientWidth >= el.scrollWidth - (offset.right || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
		if (display === "flex" && flexDirection === "row-reverse") {
			arrivedState.left = right;
			arrivedState.right = left;
		} else {
			arrivedState.left = left;
			arrivedState.right = right;
		}
		internalX.value = scrollLeft;
		let scrollTop = el.scrollTop;
		if (target === window.document && !scrollTop) scrollTop = window.document.body.scrollTop;
		directions.top = scrollTop < internalY.value;
		directions.bottom = scrollTop > internalY.value;
		const top = Math.abs(scrollTop) <= (offset.top || 0);
		const bottom = Math.abs(scrollTop) + el.clientHeight >= el.scrollHeight - (offset.bottom || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
		if (display === "flex" && flexDirection === "column-reverse") {
			arrivedState.top = bottom;
			arrivedState.bottom = top;
		} else {
			arrivedState.top = top;
			arrivedState.bottom = bottom;
		}
		internalY.value = scrollTop;
	};
	const onScrollHandler = (e) => {
		var _a;
		if (!window) return;
		setArrivedState((_a = e.target.documentElement) != null ? _a : e.target);
		isScrolling.value = true;
		onScrollEndDebounced(e);
		onScroll(e);
	};
	useEventListener(element, "scroll", throttle ? useThrottleFn(onScrollHandler, throttle, true, false) : onScrollHandler, eventListenerOptions);
	tryOnMounted(() => {
		try {
			const _element = toValue(element);
			if (!_element) return;
			setArrivedState(_element);
		} catch (e) {
			onError(e);
		}
	});
	useEventListener(element, "scrollend", onScrollEnd, eventListenerOptions);
	return {
		x,
		y,
		isScrolling,
		arrivedState,
		directions,
		measure() {
			const _element = toValue(element);
			if (window && _element) setArrivedState(_element);
		}
	};
}
function useLocalStorage(key, initialValue, options = {}) {
	const { window = defaultWindow } = options;
	return useStorage(key, initialValue, window == null ? void 0 : window.localStorage, options);
}
function useSessionStorage(key, initialValue, options = {}) {
	const { window = defaultWindow } = options;
	return useStorage(key, initialValue, window == null ? void 0 : window.sessionStorage, options);
}
function useSpeechRecognition(options = {}) {
	const { interimResults = true, continuous = true, window = defaultWindow } = options;
	const lang = toRef(options.lang || "en-US");
	const isListening = ref(false);
	const isFinal = ref(false);
	const result = ref("");
	const error = shallowRef(void 0);
	const toggle = (value = !isListening.value) => {
		isListening.value = value;
	};
	const start = () => {
		isListening.value = true;
	};
	const stop = () => {
		isListening.value = false;
	};
	const SpeechRecognition = window && (window.SpeechRecognition || window.webkitSpeechRecognition);
	const isSupported = useSupported(() => SpeechRecognition);
	let recognition;
	if (isSupported.value) {
		recognition = new SpeechRecognition();
		recognition.continuous = continuous;
		recognition.interimResults = interimResults;
		recognition.lang = toValue(lang);
		recognition.onstart = () => {
			isFinal.value = false;
		};
		watch(lang, (lang2) => {
			if (recognition && !isListening.value) recognition.lang = lang2;
		});
		recognition.onresult = (event) => {
			const currentResult = event.results[event.resultIndex];
			const { transcript } = currentResult[0];
			isFinal.value = currentResult.isFinal;
			result.value = transcript;
			error.value = void 0;
		};
		recognition.onerror = (event) => {
			error.value = event;
		};
		recognition.onend = () => {
			isListening.value = false;
			recognition.lang = toValue(lang);
		};
		watch(isListening, () => {
			if (isListening.value) recognition.start();
			else recognition.stop();
		});
	}
	tryOnScopeDispose(() => {
		isListening.value = false;
	});
	return {
		isSupported,
		isListening,
		isFinal,
		recognition,
		result,
		error,
		toggle,
		start,
		stop
	};
}
function useSpeechSynthesis(text, options = {}) {
	const { pitch = 1, rate = 1, volume = 1, window = defaultWindow } = options;
	const synth = window && window.speechSynthesis;
	const isSupported = useSupported(() => synth);
	const isPlaying = ref(false);
	const status = ref("init");
	const spokenText = toRef(text || "");
	const lang = toRef(options.lang || "en-US");
	const error = shallowRef(void 0);
	const toggle = (value = !isPlaying.value) => {
		isPlaying.value = value;
	};
	const bindEventsForUtterance = (utterance2) => {
		utterance2.lang = toValue(lang);
		utterance2.voice = toValue(options.voice) || null;
		utterance2.pitch = toValue(pitch);
		utterance2.rate = toValue(rate);
		utterance2.volume = volume;
		utterance2.onstart = () => {
			isPlaying.value = true;
			status.value = "play";
		};
		utterance2.onpause = () => {
			isPlaying.value = false;
			status.value = "pause";
		};
		utterance2.onresume = () => {
			isPlaying.value = true;
			status.value = "play";
		};
		utterance2.onend = () => {
			isPlaying.value = false;
			status.value = "end";
		};
		utterance2.onerror = (event) => {
			error.value = event;
		};
	};
	const utterance = computed(() => {
		isPlaying.value = false;
		status.value = "init";
		const newUtterance = new SpeechSynthesisUtterance(spokenText.value);
		bindEventsForUtterance(newUtterance);
		return newUtterance;
	});
	const speak = () => {
		synth.cancel();
		utterance && synth.speak(utterance.value);
	};
	const stop = () => {
		synth.cancel();
		isPlaying.value = false;
	};
	if (isSupported.value) {
		bindEventsForUtterance(utterance.value);
		watch(lang, (lang2) => {
			if (utterance.value && !isPlaying.value) utterance.value.lang = lang2;
		});
		if (options.voice) watch(options.voice, () => {
			synth.cancel();
		});
		watch(isPlaying, () => {
			if (isPlaying.value) synth.resume();
			else synth.pause();
		});
	}
	tryOnScopeDispose(() => {
		isPlaying.value = false;
	});
	return {
		isSupported,
		isPlaying,
		status,
		utterance,
		error,
		stop,
		toggle,
		speak
	};
}
Number.POSITIVE_INFINITY;
function useTimeoutPoll(fn, interval, timeoutPollOptions) {
	const { start } = useTimeoutFn(loop, interval, { immediate: false });
	const isActive = ref(false);
	async function loop() {
		if (!isActive.value) return;
		await fn();
		start();
	}
	function resume() {
		if (!isActive.value) {
			isActive.value = true;
			loop();
		}
	}
	function pause() {
		isActive.value = false;
	}
	if (timeoutPollOptions == null ? void 0 : timeoutPollOptions.immediate) resume();
	tryOnScopeDispose(pause);
	return {
		isActive,
		pause,
		resume
	};
}
function useTimestamp(options = {}) {
	const { controls: exposeControls = false, offset = 0, immediate = true, interval = "requestAnimationFrame", callback } = options;
	const ts = ref(timestamp() + offset);
	const update = () => ts.value = timestamp() + offset;
	const cb = callback ? () => {
		update();
		callback(ts.value);
	} : update;
	const controls = interval === "requestAnimationFrame" ? useRafFn(cb, { immediate }) : useIntervalFn(cb, interval, { immediate });
	if (exposeControls) return {
		timestamp: ts,
		...controls
	};
	else return ts;
}
function useVirtualList(list, options) {
	const { containerStyle, wrapperProps, scrollTo, calculateRange, currentList, containerRef } = "itemHeight" in options ? useVerticalVirtualList(options, list) : useHorizontalVirtualList(options, list);
	return {
		list: currentList,
		scrollTo,
		containerProps: {
			ref: containerRef,
			onScroll: () => {
				calculateRange();
			},
			style: containerStyle
		},
		wrapperProps
	};
}
function useVirtualListResources(list) {
	const containerRef = ref(null);
	const size = useElementSize(containerRef);
	const currentList = ref([]);
	const source = shallowRef(list);
	return {
		state: ref({
			start: 0,
			end: 10
		}),
		source,
		currentList,
		size,
		containerRef
	};
}
function createGetViewCapacity(state, source, itemSize) {
	return (containerSize) => {
		if (typeof itemSize === "number") return Math.ceil(containerSize / itemSize);
		const { start = 0 } = state.value;
		let sum = 0;
		let capacity = 0;
		for (let i = start; i < source.value.length; i++) {
			const size = itemSize(i);
			sum += size;
			capacity = i;
			if (sum > containerSize) break;
		}
		return capacity - start;
	};
}
function createGetOffset(source, itemSize) {
	return (scrollDirection) => {
		if (typeof itemSize === "number") return Math.floor(scrollDirection / itemSize) + 1;
		let sum = 0;
		let offset = 0;
		for (let i = 0; i < source.value.length; i++) {
			const size = itemSize(i);
			sum += size;
			if (sum >= scrollDirection) {
				offset = i;
				break;
			}
		}
		return offset + 1;
	};
}
function createCalculateRange(type, overscan, getOffset, getViewCapacity, { containerRef, state, currentList, source }) {
	return () => {
		const element = containerRef.value;
		if (element) {
			const offset = getOffset(type === "vertical" ? element.scrollTop : element.scrollLeft);
			const viewCapacity = getViewCapacity(type === "vertical" ? element.clientHeight : element.clientWidth);
			const from = offset - overscan;
			const to = offset + viewCapacity + overscan;
			state.value = {
				start: from < 0 ? 0 : from,
				end: to > source.value.length ? source.value.length : to
			};
			currentList.value = source.value.slice(state.value.start, state.value.end).map((ele, index) => ({
				data: ele,
				index: index + state.value.start
			}));
		}
	};
}
function createGetDistance(itemSize, source) {
	return (index) => {
		if (typeof itemSize === "number") return index * itemSize;
		return source.value.slice(0, index).reduce((sum, _, i) => sum + itemSize(i), 0);
	};
}
function useWatchForSizes(size, list, containerRef, calculateRange) {
	watch([
		size.width,
		size.height,
		list,
		containerRef
	], () => {
		calculateRange();
	});
}
function createComputedTotalSize(itemSize, source) {
	return computed(() => {
		if (typeof itemSize === "number") return source.value.length * itemSize;
		return source.value.reduce((sum, _, index) => sum + itemSize(index), 0);
	});
}
var scrollToDictionaryForElementScrollKey = {
	horizontal: "scrollLeft",
	vertical: "scrollTop"
};
function createScrollTo(type, calculateRange, getDistance, containerRef) {
	return (index) => {
		if (containerRef.value) {
			containerRef.value[scrollToDictionaryForElementScrollKey[type]] = getDistance(index);
			calculateRange();
		}
	};
}
function useHorizontalVirtualList(options, list) {
	const resources = useVirtualListResources(list);
	const { state, source, currentList, size, containerRef } = resources;
	const containerStyle = { overflowX: "auto" };
	const { itemWidth, overscan = 5 } = options;
	const getViewCapacity = createGetViewCapacity(state, source, itemWidth);
	const calculateRange = createCalculateRange("horizontal", overscan, createGetOffset(source, itemWidth), getViewCapacity, resources);
	const getDistanceLeft = createGetDistance(itemWidth, source);
	const offsetLeft = computed(() => getDistanceLeft(state.value.start));
	const totalWidth = createComputedTotalSize(itemWidth, source);
	useWatchForSizes(size, list, containerRef, calculateRange);
	return {
		scrollTo: createScrollTo("horizontal", calculateRange, getDistanceLeft, containerRef),
		calculateRange,
		wrapperProps: computed(() => {
			return { style: {
				height: "100%",
				width: `${totalWidth.value - offsetLeft.value}px`,
				marginLeft: `${offsetLeft.value}px`,
				display: "flex"
			} };
		}),
		containerStyle,
		currentList,
		containerRef
	};
}
function useVerticalVirtualList(options, list) {
	const resources = useVirtualListResources(list);
	const { state, source, currentList, size, containerRef } = resources;
	const containerStyle = { overflowY: "auto" };
	const { itemHeight, overscan = 5 } = options;
	const getViewCapacity = createGetViewCapacity(state, source, itemHeight);
	const calculateRange = createCalculateRange("vertical", overscan, createGetOffset(source, itemHeight), getViewCapacity, resources);
	const getDistanceTop = createGetDistance(itemHeight, source);
	const offsetTop = computed(() => getDistanceTop(state.value.start));
	const totalHeight = createComputedTotalSize(itemHeight, source);
	useWatchForSizes(size, list, containerRef, calculateRange);
	return {
		calculateRange,
		scrollTo: createScrollTo("vertical", calculateRange, getDistanceTop, containerRef),
		containerStyle,
		wrapperProps: computed(() => {
			return { style: {
				width: "100%",
				height: `${totalHeight.value - offsetTop.value}px`,
				marginTop: `${offsetTop.value}px`
			} };
		}),
		currentList,
		containerRef
	};
}
function useWindowSize(options = {}) {
	const { window = defaultWindow, initialWidth = Number.POSITIVE_INFINITY, initialHeight = Number.POSITIVE_INFINITY, listenOrientation = true, includeScrollbar = true } = options;
	const width = ref(initialWidth);
	const height = ref(initialHeight);
	const update = () => {
		if (window) if (includeScrollbar) {
			width.value = window.innerWidth;
			height.value = window.innerHeight;
		} else {
			width.value = window.document.documentElement.clientWidth;
			height.value = window.document.documentElement.clientHeight;
		}
	};
	update();
	tryOnMounted(update);
	useEventListener("resize", update, { passive: true });
	if (listenOrientation) watch(useMediaQuery("(orientation: portrait)"), () => update());
	return {
		width,
		height
	};
}
//#endregion
export { createInjectionState as A, toRefs as B, useSpeechSynthesis as C, useVirtualList as D, useTimestamp as E, noop as F, useDebounceFn as G, tryOnMounted as H, notNullish as I, watchOnce as J, useThrottleFn as K, refDebounced as L, isClient as M, isIOS as N, useWindowSize as O, isObject as P, refThrottled as R, useSpeechRecognition as S, useTimeoutPoll as T, tryOnScopeDispose as U, toValue as V, until as W, watchThrottled as Y, useLocalStorage as _, onKeyUp as a, useScroll as b, useClipboard as c, useElementBounding as d, useElementHover as f, useIntersectionObserver as g, useFileDialog as h, onKeyStroke as i, directiveHooks as j, createEventHook as k, useCssVar as l, useEventListener as m, onClickOutside as n, useActiveElement as o, useElementSize as p, watchDebounced as q, onKeyDown as r, useAsyncState as s, computedAsync as t, useDocumentVisibility as u, useMediaQuery as v, useStorage as w, useSessionStorage as x, useResizeObserver as y, toRef as z };
