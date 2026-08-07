import { Bt as toRaw, Dt as getCurrentScope, Ft as readonly, Gt as unref, Ht as toRefs$1, It as ref, L as hasInjectionContext, Nt as onScopeDispose, P as getCurrentInstance, Pt as reactive, R as inject, Rt as shallowReadonly, S as computed, Tt as customRef, Ut as toValue, Vt as toRef$1, W as nextTick, X as onMounted, _t as watchEffect, gt as watch, jt as isRef, tt as provide, zt as shallowRef } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
//#region ../../../node_modules/.pnpm/@vueuse+shared@14.3.0_vue@3.5.26_typescript@6.0.2_/node_modules/@vueuse/shared/dist/index.js
/**
* Call onScopeDispose() if it's inside an effect scope lifecycle, if not, do nothing
*
* @param fn
*/
function tryOnScopeDispose(fn, failSilently) {
	if (getCurrentScope()) {
		onScopeDispose(fn, failSilently);
		return true;
	}
	return false;
}
/**
* Utility for creating event hooks
*
* @see https://vueuse.org/createEventHook
*
* @__NO_SIDE_EFFECTS__
*/
function createEventHook() {
	const fns = /* @__PURE__ */ new Set();
	const off = (fn) => {
		fns.delete(fn);
	};
	const clear = () => {
		fns.clear();
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
		trigger,
		clear
	};
}
var localProvidedStateMap = /* @__PURE__ */ new WeakMap();
/**
* On the basis of `inject`, it is allowed to directly call inject to obtain the value after call provide in the same component.
*
* @example
* ```ts
* injectLocal('MyInjectionKey', 1)
* const injectedValue = injectLocal('MyInjectionKey') // injectedValue === 1
* ```
*
* @__NO_SIDE_EFFECTS__
*/
var injectLocal = (...args) => {
	var _getCurrentInstance;
	const key = args[0];
	const instance = (_getCurrentInstance = getCurrentInstance()) === null || _getCurrentInstance === void 0 ? void 0 : _getCurrentInstance.proxy;
	const owner = instance !== null && instance !== void 0 ? instance : getCurrentScope();
	if (owner == null && !hasInjectionContext()) throw new Error("injectLocal must be called in setup");
	if (owner && localProvidedStateMap.has(owner) && key in localProvidedStateMap.get(owner)) return localProvidedStateMap.get(owner)[key];
	return inject(...args);
};
/**
* On the basis of `provide`, it is allowed to directly call inject to obtain the value after call provide in the same component.
*
* @example
* ```ts
* provideLocal('MyInjectionKey', 1)
* const injectedValue = injectLocal('MyInjectionKey') // injectedValue === 1
* ```
*/
function provideLocal(key, value) {
	var _getCurrentInstance;
	const instance = (_getCurrentInstance = getCurrentInstance()) === null || _getCurrentInstance === void 0 ? void 0 : _getCurrentInstance.proxy;
	const owner = instance !== null && instance !== void 0 ? instance : getCurrentScope();
	if (owner == null) throw new Error("provideLocal must be called in setup");
	if (!localProvidedStateMap.has(owner)) localProvidedStateMap.set(owner, Object.create(null));
	const localProvidedState = localProvidedStateMap.get(owner);
	localProvidedState[key] = value;
	return provide(key, value);
}
function createInjectionState(composable, options) {
	const key = (options === null || options === void 0 ? void 0 : options.injectionKey) || Symbol(composable.name || "InjectionState");
	const defaultValue = options === null || options === void 0 ? void 0 : options.defaultValue;
	const useProvidingState = (...args) => {
		const state = composable(...args);
		provideLocal(key, state);
		return state;
	};
	const useInjectedState = () => injectLocal(key, defaultValue);
	return [useProvidingState, useInjectedState];
}
var isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var notNullish = (val) => val != null;
var toString = Object.prototype.toString;
var isObject = (val) => toString.call(val) === "[object Object]";
var timestamp = () => +Date.now();
var noop = () => {};
var hasOwn = (val, key) => Object.hasOwn(val, key);
var isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
	var _window, _window2, _window3;
	return isClient && !!((_window = window) === null || _window === void 0 || (_window = _window.navigator) === null || _window === void 0 ? void 0 : _window.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.navigator) === null || _window2 === void 0 ? void 0 : _window2.maxTouchPoints) > 2 && /iPad|Macintosh/.test((_window3 = window) === null || _window3 === void 0 ? void 0 : _window3.navigator.userAgent));
}
function toRef(...args) {
	if (args.length !== 1) return toRef$1(...args);
	const r = args[0];
	return typeof r === "function" ? readonly(customRef(() => ({
		get: r,
		set: noop
	}))) : ref(r);
}
/**
* @internal
*/
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
/**
* Create an EventFilter that debounce the events
*/
function debounceFilter(ms, options = {}) {
	let timer;
	let maxTimer;
	let lastRejector = noop;
	const _clearTimeout = (timer) => {
		clearTimeout(timer);
		lastRejector();
		lastRejector = noop;
	};
	let lastInvoker;
	const filter = (invoke) => {
		const duration = toValue(ms);
		const maxDuration = toValue(options.maxWait);
		if (timer) _clearTimeout(timer);
		if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
			if (maxTimer) {
				_clearTimeout(maxTimer);
				maxTimer = void 0;
			}
			return Promise.resolve(invoke());
		}
		return new Promise((resolve, reject) => {
			lastRejector = options.rejectOnCancel ? reject : resolve;
			lastInvoker = invoke;
			if (maxDuration && !maxTimer) maxTimer = setTimeout(() => {
				if (timer) _clearTimeout(timer);
				maxTimer = void 0;
				resolve(lastInvoker());
			}, maxDuration);
			timer = setTimeout(() => {
				if (maxTimer) _clearTimeout(maxTimer);
				maxTimer = void 0;
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
		if (elapsed > duration) {
			lastExec = Date.now();
			if (leading || !isLeading) invoke();
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
/**
* EventFilter that gives extra controls to pause and resume the filter
*
* @param extendFilter  Extra filter to apply when the PausableFilter is active, default to none
* @param options Options to configure the filter
*/
function pausableFilter(extendFilter = bypassFilter, options = {}) {
	const { initialState = "active" } = options;
	const isActive = toRef(initialState === "active");
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
		isActive: shallowReadonly(isActive),
		pause,
		resume,
		eventFilter
	};
}
function promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
	return new Promise((resolve, reject) => {
		if (throwOnTimeout) setTimeout(reject, ms, reason);
		else setTimeout(resolve, ms);
	});
}
/**
* Create singleton promise function
*
* @example
* ```
* const promise = createSingletonPromise(async () => { ... })
*
* await promise()
* await promise() // all of them will be bind to a single promise instance
* await promise() // and be resolved together
* ```
*/
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
/**
* Get a px value for SSR use, do not rely on this method outside of SSR as REM unit is assumed at 16px, which might not be the case on the client
*/
function pxValue(px) {
	return px.endsWith("rem") ? Number.parseFloat(px) * 16 : Number.parseFloat(px);
}
function toArray(value) {
	return Array.isArray(value) ? value : [value];
}
function cacheStringFunction(fn) {
	const cache = Object.create(null);
	return ((str) => {
		return cache[str] || (cache[str] = fn(str));
	});
}
var hyphenateRE = /\B([A-Z])/g;
cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var camelizeRE = /-(\w)/g;
cacheStringFunction((str) => {
	return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
function getLifeCycleTarget(target) {
	return target || getCurrentInstance();
}
/**
* Converts ref to reactive.
*
* @see https://vueuse.org/toReactive
* @param objectRef A ref of object
*/
function toReactive(objectRef) {
	if (!isRef(objectRef)) return reactive(objectRef);
	return reactive(new Proxy({}, {
		get(_, p, receiver) {
			return unref(Reflect.get(objectRef.value, p, receiver));
		},
		set(_, p, value) {
			if (isRef(objectRef.value[p]) && !isRef(value)) objectRef.value[p].value = value;
			else objectRef.value[p] = value;
			return true;
		},
		deleteProperty(_, p) {
			return Reflect.deleteProperty(objectRef.value, p);
		},
		has(_, p) {
			return Reflect.has(objectRef.value, p);
		},
		ownKeys() {
			return Object.keys(objectRef.value);
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: true,
				configurable: true
			};
		}
	}));
}
/**
* Computed reactive object.
*/
function reactiveComputed(fn) {
	return toReactive(computed(fn));
}
/**
* Reactively omit fields from a reactive object
*
* @see https://vueuse.org/reactiveOmit
*/
function reactiveOmit(obj, ...keys) {
	const flatKeys = keys.flat();
	const predicate = flatKeys[0];
	return reactiveComputed(() => typeof predicate === "function" ? Object.fromEntries(Object.entries(toRefs$1(obj)).filter(([k, v]) => !predicate(toValue(v), k))) : Object.fromEntries(Object.entries(toRefs$1(obj)).filter((e) => !flatKeys.includes(e[0]))));
}
/**
* Reactively pick fields from a reactive object
*
* @see https://vueuse.org/reactivePick
*/
function reactivePick(obj, ...keys) {
	const flatKeys = keys.flat();
	const predicate = flatKeys[0];
	return reactiveComputed(() => typeof predicate === "function" ? Object.fromEntries(Object.entries(toRefs$1(obj)).filter(([k, v]) => predicate(toValue(v), k))) : Object.fromEntries(flatKeys.map((k) => [k, toRef(obj, k)])));
}
/**
* Debounce execution of a function.
*
* @see https://vueuse.org/useDebounceFn
* @param  fn          A function to be executed after delay milliseconds debounced.
* @param  ms          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
* @param  options     Options
*
* @return A new, debounce, function.
*
* @__NO_SIDE_EFFECTS__
*/
function useDebounceFn(fn, ms = 200, options = {}) {
	return createFilterWrapper(debounceFilter(ms, options), fn);
}
/**
* Debounce updates of a ref.
*
* @return A new debounced ref.
*/
function refDebounced(value, ms = 200, options = {}) {
	const debounced = ref(toValue(value));
	const updater = useDebounceFn(() => {
		debounced.value = value.value;
	}, ms, options);
	watch(value, () => updater());
	return shallowReadonly(debounced);
}
/**
* Throttle execution of a function. Especially useful for rate limiting
* execution of handlers on events like resize and scroll.
*
* @param   fn             A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
*                                    to `callback` when the throttled-function is executed.
* @param   ms             A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
*                                    (default value: 200)
*
* @param [trailing] if true, call fn again after the time is up (default value: false)
*
* @param [leading] if true, call fn on the leading edge of the ms timeout (default value: true)
*
* @param [rejectOnCancel] if true, reject the last call if it's been cancel (default value: false)
*
* @return  A new, throttled, function.
*
* @__NO_SIDE_EFFECTS__
*/
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
	return createFilterWrapper(throttleFilter(ms, trailing, leading, rejectOnCancel), fn);
}
/**
* Throttle execution of a function. Especially useful for rate limiting
* execution of handlers on events like resize and scroll.
*
* @param value Ref value to be watched with throttle effect
* @param  delay  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
* @param trailing if true, update the value again after the delay time is up
* @param leading if true, update the value on the leading edge of the ms timeout
*/
function refThrottled(value, delay = 200, trailing = true, leading = true) {
	if (delay <= 0) return value;
	const throttled = ref(toValue(value));
	const updater = useThrottleFn(() => {
		throttled.value = value.value;
	}, delay, trailing, leading);
	watch(value, () => updater());
	return throttled;
}
/** @deprecated use `refThrottled` instead */
var throttledRef = refThrottled;
function watchWithFilter(source, cb, options = {}) {
	const { eventFilter = bypassFilter, ...watchOptions } = options;
	return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
/** @deprecated Use Vue's built-in `watch` instead. This function will be removed in future version. */
function watchPausable(source, cb, options = {}) {
	const { eventFilter: filter, initialState = "active", ...watchOptions } = options;
	const { eventFilter, pause, resume, isActive } = pausableFilter(filter, { initialState });
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
/**
* Extended `toRefs` that also accepts refs of an object.
*
* @see https://vueuse.org/toRefs
* @param objectRef A ref or normal object or array.
* @param options Options
*/
function toRefs(objectRef, options = {}) {
	if (!isRef(objectRef)) return toRefs$1(objectRef);
	const result = Array.isArray(objectRef.value) ? Array.from({ length: objectRef.value.length }) : {};
	for (const key in objectRef.value) result[key] = customRef(() => ({
		get() {
			return objectRef.value[key];
		},
		set(v) {
			var _toValue;
			if ((_toValue = toValue(options.replaceRef)) !== null && _toValue !== void 0 ? _toValue : true) if (Array.isArray(objectRef.value)) {
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
/**
* Call onMounted() if it's inside a component lifecycle, if not, just call the function
*
* @param fn
* @param sync if set to false, it will run in the nextTick() of Vue
* @param target
*/
function tryOnMounted(fn, sync = true, target) {
	if (getLifeCycleTarget(target)) onMounted(fn, target);
	else if (sync) fn();
	else nextTick(fn);
}
function createUntil(r, isNot = false) {
	function toMatch(condition, { flush = "sync", deep = false, timeout, throwOnTimeout } = {}) {
		let stop = null;
		const promises = [new Promise((resolve) => {
			stop = watch(r, (v) => {
				if (condition(v) !== isNot) {
					if (stop) stop();
					else nextTick(() => stop === null || stop === void 0 ? void 0 : stop());
					resolve(v);
				}
			}, {
				flush,
				deep,
				immediate: true
			});
		})];
		if (timeout != null) promises.push(promiseTimeout(timeout, throwOnTimeout).then(() => toValue(r)).finally(() => stop === null || stop === void 0 ? void 0 : stop()));
		return Promise.race(promises);
	}
	function toBe(value, options) {
		if (!isRef(value)) return toMatch((v) => v === value, options);
		const { flush = "sync", deep = false, timeout, throwOnTimeout } = options !== null && options !== void 0 ? options : {};
		let stop = null;
		const promises = [new Promise((resolve) => {
			stop = watch([r, value], ([v1, v2]) => {
				if (isNot !== (v1 === v2)) {
					if (stop) stop();
					else nextTick(() => stop === null || stop === void 0 ? void 0 : stop());
					resolve(v1);
				}
			}, {
				flush,
				deep,
				immediate: true
			});
		})];
		if (timeout != null) promises.push(promiseTimeout(timeout, throwOnTimeout).then(() => toValue(r)).finally(() => {
			stop === null || stop === void 0 || stop();
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
/**
* Wrapper for `setInterval` with controls
*
* @see https://vueuse.org/useIntervalFn
* @param cb
* @param interval
* @param options
*/
function useIntervalFn(cb, interval = 1e3, options = {}) {
	const { immediate = true, immediateCallback = false } = options;
	let timer = null;
	const isActive = shallowRef(false);
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
		if (isActive.value) timer = setInterval(cb, intervalValue);
	}
	if (immediate && isClient) resume();
	if (isRef(interval) || typeof interval === "function") tryOnScopeDispose(watch(interval, () => {
		if (isActive.value && isClient) resume();
	}));
	tryOnScopeDispose(pause);
	return {
		isActive: shallowReadonly(isActive),
		pause,
		resume
	};
}
/**
* Wrapper for `setTimeout` with controls.
*
* @param cb
* @param interval
* @param options
*/
function useTimeoutFn(cb, interval, options = {}) {
	const { immediate = true, immediateCallback = false } = options;
	const isPending = shallowRef(false);
	let timer;
	function clear() {
		if (timer) {
			clearTimeout(timer);
			timer = void 0;
		}
	}
	function stop() {
		isPending.value = false;
		clear();
	}
	function start(...args) {
		if (immediateCallback) cb();
		clear();
		isPending.value = true;
		timer = setTimeout(() => {
			isPending.value = false;
			timer = void 0;
			cb(...args);
		}, toValue(interval));
	}
	if (immediate) {
		isPending.value = true;
		if (isClient) start();
	}
	tryOnScopeDispose(stop);
	return {
		isPending: shallowReadonly(isPending),
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
/**
* Shorthand for watching value with {immediate: true}
*
* @see https://vueuse.org/watchImmediate
*/
function watchImmediate(source, cb, options) {
	return watch(source, cb, {
		...options,
		immediate: true
	});
}
/**
* Shorthand for watching value with { once: true }
*
* @see https://vueuse.org/watchOnce
*/
function watchOnce(source, cb, options) {
	return watch(source, cb, {
		...options,
		once: true
	});
}
function watchThrottled(source, cb, options = {}) {
	const { throttle = 0, trailing = true, leading = true, ...watchOptions } = options;
	return watchWithFilter(source, cb, {
		...watchOptions,
		eventFilter: throttleFilter(throttle, trailing, leading)
	});
}
/** @deprecated use `watchThrottled` instead */
var throttledWatch = watchThrottled;
//#endregion
//#region ../../../node_modules/.pnpm/@vueuse+core@14.3.0_vue@3.5.26_typescript@6.0.2_/node_modules/@vueuse/core/dist/index.js
function computedAsync(evaluationCallback, initialState, optionsOrRef) {
	var _globalThis$reportErr;
	let options;
	if (isRef(optionsOrRef)) options = { evaluating: optionsOrRef };
	else options = optionsOrRef || {};
	const { lazy = false, flush = "sync", evaluating = void 0, shallow = true, onError = (_globalThis$reportErr = globalThis.reportError) !== null && _globalThis$reportErr !== void 0 ? _globalThis$reportErr : noop } = options;
	const started = shallowRef(!lazy);
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
	}, { flush });
	if (lazy) return computed(() => {
		started.value = true;
		return current.value;
	});
	else return current;
}
/** @deprecated use `computedAsync` instead */
var asyncComputed = computedAsync;
var defaultWindow = isClient ? window : void 0;
var defaultDocument = isClient ? window.document : void 0;
var defaultNavigator = isClient ? window.navigator : void 0;
isClient && window.location;
/**
* Get the dom element of a ref of element or Vue component instance
*
* @param elRef
*/
function unrefElement(elRef) {
	var _$el;
	const plain = toValue(elRef);
	return (_$el = plain === null || plain === void 0 ? void 0 : plain.$el) !== null && _$el !== void 0 ? _$el : plain;
}
function useEventListener(...args) {
	const register = (el, event, listener, options) => {
		el.addEventListener(event, listener, options);
		return () => el.removeEventListener(event, listener, options);
	};
	const firstParamTargets = computed(() => {
		const test = toArray(toValue(args[0])).filter((e) => e != null);
		return test.every((e) => typeof e !== "string") ? test : void 0;
	});
	return watchImmediate(() => {
		var _firstParamTargets$va, _firstParamTargets$va2;
		return [
			(_firstParamTargets$va = (_firstParamTargets$va2 = firstParamTargets.value) === null || _firstParamTargets$va2 === void 0 ? void 0 : _firstParamTargets$va2.map((e) => unrefElement(e))) !== null && _firstParamTargets$va !== void 0 ? _firstParamTargets$va : [defaultWindow].filter((e) => e != null),
			toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
			toArray(unref(firstParamTargets.value ? args[2] : args[1])),
			toValue(firstParamTargets.value ? args[3] : args[2])
		];
	}, ([raw_targets, raw_events, raw_listeners, raw_options], _, onCleanup) => {
		if (!(raw_targets === null || raw_targets === void 0 ? void 0 : raw_targets.length) || !(raw_events === null || raw_events === void 0 ? void 0 : raw_events.length) || !(raw_listeners === null || raw_listeners === void 0 ? void 0 : raw_listeners.length)) return;
		const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
		const cleanups = raw_targets.flatMap((el) => raw_events.flatMap((event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))));
		onCleanup(() => {
			cleanups.forEach((fn) => fn());
		});
	}, { flush: "post" });
}
var _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
	const { window = defaultWindow, ignore = [], capture = true, detectIframe = false, controls = false } = options;
	if (!window) return controls ? {
		stop: noop,
		cancel: noop,
		trigger: noop
	} : noop;
	if (isIOS && !_iOSWorkaround) {
		_iOSWorkaround = true;
		const listenerOptions = { passive: true };
		Array.from(window.document.body.children).forEach((el) => el.addEventListener("click", noop, listenerOptions));
		window.document.documentElement.addEventListener("click", noop, listenerOptions);
	}
	let shouldListen = true;
	const shouldIgnore = (event) => {
		return toValue(ignore).some((target) => {
			if (typeof target === "string") return Array.from(window.document.querySelectorAll(target)).some((el) => el === event.target || event.composedPath().includes(el));
			else {
				const el = unrefElement(target);
				return el && (event.target === el || event.composedPath().includes(el));
			}
		});
	};
	/**
	* Determines if the given target has multiple root elements.
	* Referenced from: https://github.com/vuejs/test-utils/blob/ccb460be55f9f6be05ab708500a41ec8adf6f4bc/src/vue-wrapper.ts#L21
	*/
	function hasMultipleRoots(target) {
		const vm = toValue(target);
		return vm && vm.$.subTree.shapeFlag === 16;
	}
	function checkMultipleRoots(target, event) {
		const vm = toValue(target);
		const children = vm.$.subTree && vm.$.subTree.children;
		if (children == null || !Array.isArray(children)) return false;
		return children.some((child) => child.el === event.target || event.composedPath().includes(child.el));
	}
	const listener = (event) => {
		const el = unrefElement(target);
		if (event.target == null) return;
		if (!(el instanceof Element) && hasMultipleRoots(target) && checkMultipleRoots(target, event)) return;
		if (!el || el === event.target || event.composedPath().includes(el)) return;
		if ("detail" in event && event.detail === 0) shouldListen = !shouldIgnore(event);
		if (!shouldListen) {
			shouldListen = true;
			return;
		}
		handler(event);
	};
	let isProcessingClick = false;
	const cleanup = [
		useEventListener(window, "click", (event) => {
			if (!isProcessingClick) {
				isProcessingClick = true;
				setTimeout(() => {
					isProcessingClick = false;
				}, 0);
				listener(event);
			}
		}, {
			passive: true,
			capture
		}),
		useEventListener(window, "pointerdown", (e) => {
			const el = unrefElement(target);
			shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
		}, { passive: true }),
		detectIframe && useEventListener(window, "blur", (event) => {
			setTimeout(() => {
				const el = unrefElement(target);
				let activeEl = window.document.activeElement;
				while (activeEl === null || activeEl === void 0 ? void 0 : activeEl.shadowRoot) activeEl = activeEl.shadowRoot.activeElement;
				if ((activeEl === null || activeEl === void 0 ? void 0 : activeEl.tagName) === "IFRAME" && !(el === null || el === void 0 ? void 0 : el.contains(window.document.activeElement))) handler(event);
			}, 0);
		}, { passive: true })
	].filter(Boolean);
	const stop = () => cleanup.forEach((fn) => fn());
	if (controls) return {
		stop,
		cancel: () => {
			shouldListen = false;
		},
		trigger: (event) => {
			shouldListen = true;
			listener(event);
			shouldListen = false;
		}
	};
	return stop;
}
/**
* Mounted state in ref.
*
* @see https://vueuse.org/useMounted
*
* @__NO_SIDE_EFFECTS__
*/
function useMounted() {
	const isMounted = shallowRef(false);
	const instance = getCurrentInstance();
	if (instance) onMounted(() => {
		isMounted.value = true;
	}, instance);
	return isMounted;
}
/* @__NO_SIDE_EFFECTS__ */
function useSupported(callback) {
	const isMounted = useMounted();
	return computed(() => {
		isMounted.value;
		return Boolean(callback());
	});
}
/**
* Watch for changes being made to the DOM tree.
*
* @see https://vueuse.org/useMutationObserver
* @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver MutationObserver MDN
* @param target
* @param callback
* @param options
*/
function useMutationObserver(target, callback, options = {}) {
	const { window = defaultWindow, ...mutationOptions } = options;
	let observer;
	const isSupported = /* @__PURE__ */ useSupported(() => window && "MutationObserver" in window);
	const cleanup = () => {
		if (observer) {
			observer.disconnect();
			observer = void 0;
		}
	};
	const stopWatch = watch(computed(() => {
		const items = toArray(toValue(target)).map(unrefElement).filter(notNullish);
		return new Set(items);
	}), (newTargets) => {
		cleanup();
		if (isSupported.value && newTargets.size) {
			observer = new MutationObserver(callback);
			newTargets.forEach((el) => observer.observe(el, mutationOptions));
		}
	}, {
		immediate: true,
		flush: "post"
	});
	const takeRecords = () => {
		return observer === null || observer === void 0 ? void 0 : observer.takeRecords();
	};
	const stop = () => {
		stopWatch();
		cleanup();
	};
	tryOnScopeDispose(stop);
	return {
		isSupported,
		stop,
		takeRecords
	};
}
/**
* Fires when the element or any element containing it is removed.
*
* @param target
* @param callback
* @param options
*/
function onElementRemoval(target, callback, options = {}) {
	const { window = defaultWindow, document = window === null || window === void 0 ? void 0 : window.document, flush = "sync" } = options;
	if (!window || !document) return noop;
	let stopFn;
	const cleanupAndUpdate = (fn) => {
		stopFn === null || stopFn === void 0 || stopFn();
		stopFn = fn;
	};
	const stopWatch = watchEffect(() => {
		const el = unrefElement(target);
		if (el) {
			const { stop } = useMutationObserver(document, (mutationsList) => {
				if (mutationsList.map((mutation) => [...mutation.removedNodes]).flat().some((node) => node === el || node.contains(el))) callback(mutationsList);
			}, {
				window,
				childList: true,
				subtree: true
			});
			cleanupAndUpdate(stop);
		}
	}, { flush });
	const stopHandle = () => {
		stopWatch();
		cleanupAndUpdate();
	};
	tryOnScopeDispose(stopHandle);
	return stopHandle;
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
/**
* Listen to the keydown event of the given key.
*
* @see https://vueuse.org/onKeyStroke
* @param key
* @param handler
* @param options
*/
function onKeyDown(key, handler, options = {}) {
	return onKeyStroke(key, handler, {
		...options,
		eventName: "keydown"
	});
}
/**
* Listen to the keyup event of the given key.
*
* @see https://vueuse.org/onKeyStroke
* @param key
* @param handler
* @param options
*/
function onKeyUp(key, handler, options = {}) {
	return onKeyStroke(key, handler, {
		...options,
		eventName: "keyup"
	});
}
/**
* Reactive `document.activeElement`
*
* @see https://vueuse.org/useActiveElement
* @param options
*
* @__NO_SIDE_EFFECTS__
*/
function useActiveElement(options = {}) {
	var _options$document;
	const { window = defaultWindow, deep = true, triggerOnRemoval = false } = options;
	const document = (_options$document = options.document) !== null && _options$document !== void 0 ? _options$document : window === null || window === void 0 ? void 0 : window.document;
	const getDeepActiveElement = () => {
		let element = document === null || document === void 0 ? void 0 : document.activeElement;
		if (deep) {
			var _element$shadowRoot;
			while (element === null || element === void 0 ? void 0 : element.shadowRoot) element = element === null || element === void 0 || (_element$shadowRoot = element.shadowRoot) === null || _element$shadowRoot === void 0 ? void 0 : _element$shadowRoot.activeElement;
		}
		return element;
	};
	const activeElement = shallowRef();
	const trigger = () => {
		activeElement.value = getDeepActiveElement();
	};
	if (window) {
		const listenerOptions = {
			capture: true,
			passive: true
		};
		useEventListener(window, "blur", (event) => {
			if (event.relatedTarget !== null) return;
			trigger();
		}, listenerOptions);
		useEventListener(window, "focus", trigger, listenerOptions);
	}
	if (triggerOnRemoval) onElementRemoval(activeElement, trigger, { document });
	trigger();
	return activeElement;
}
/**
* Call function on every `requestAnimationFrame`. With controls of pausing and resuming.
*
* @see https://vueuse.org/useRafFn
* @param fn
* @param options
*/
function useRafFn(fn, options = {}) {
	const { immediate = true, fpsLimit = null, window = defaultWindow, once = false } = options;
	const isActive = shallowRef(false);
	const intervalLimit = computed(() => {
		const limit = toValue(fpsLimit);
		return limit ? 1e3 / limit : null;
	});
	let previousFrameTimestamp = 0;
	let rafId = null;
	function loop(timestamp) {
		if (!isActive.value || !window) return;
		if (!previousFrameTimestamp) previousFrameTimestamp = timestamp;
		const delta = timestamp - previousFrameTimestamp;
		if (intervalLimit.value && delta < intervalLimit.value) {
			rafId = window.requestAnimationFrame(loop);
			return;
		}
		previousFrameTimestamp = timestamp;
		fn({
			delta,
			timestamp
		});
		if (once) {
			isActive.value = false;
			rafId = null;
			return;
		}
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
		isActive: shallowReadonly(isActive),
		pause,
		resume
	};
}
/**
* Reactive async state. Will not block your setup function and will trigger changes once
* the promise is ready.
*
* @see https://vueuse.org/useAsyncState
* @param promise         The promise / async function to be resolved
* @param initialState    The initial state, used until the first evaluation finishes
* @param options
*/
function useAsyncState(promise, initialState, options) {
	var _globalThis$reportErr;
	const { immediate = true, delay = 0, onError = (_globalThis$reportErr = globalThis.reportError) !== null && _globalThis$reportErr !== void 0 ? _globalThis$reportErr : noop, onSuccess = noop, resetOnExecute = true, shallow = true, throwError } = options !== null && options !== void 0 ? options : {};
	const state = shallow ? shallowRef(initialState) : ref(initialState);
	const isReady = shallowRef(false);
	const isLoading = shallowRef(false);
	const error = shallowRef(void 0);
	let executionsCount = 0;
	async function execute(delay = 0, ...args) {
		const executionId = executionsCount += 1;
		if (resetOnExecute) state.value = toValue(initialState);
		error.value = void 0;
		isReady.value = false;
		isLoading.value = true;
		if (delay > 0) await promiseTimeout(delay);
		const _promise = typeof promise === "function" ? promise(...args) : promise;
		try {
			const data = await _promise;
			if (executionId === executionsCount) {
				state.value = data;
				isReady.value = true;
			}
			onSuccess(data);
			return data;
		} catch (e) {
			if (executionId === executionsCount) error.value = e;
			onError(e);
			if (throwError) throw e;
		} finally {
			if (executionId === executionsCount) isLoading.value = false;
		}
	}
	if (immediate) execute(delay);
	const shell = {
		state,
		isReady,
		isLoading,
		error,
		execute,
		executeImmediate: (...args) => execute(0, ...args)
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
var ssrWidthSymbol = Symbol("vueuse-ssr-width");
/* @__NO_SIDE_EFFECTS__ */
function useSSRWidth() {
	const ssrWidth = hasInjectionContext() ? injectLocal(ssrWidthSymbol, null) : null;
	return typeof ssrWidth === "number" ? ssrWidth : void 0;
}
/**
* Reactive Media Query.
*
* @see https://vueuse.org/useMediaQuery
* @param query
* @param options
*/
function useMediaQuery(query, options = {}) {
	const { window = defaultWindow, ssrWidth = /* @__PURE__ */ useSSRWidth() } = options;
	const isSupported = /* @__PURE__ */ useSupported(() => window && "matchMedia" in window && typeof window.matchMedia === "function");
	const ssrSupport = shallowRef(typeof ssrWidth === "number");
	const mediaQuery = shallowRef();
	const matches = shallowRef(false);
	const handler = (event) => {
		matches.value = event.matches;
	};
	watchEffect(() => {
		if (ssrSupport.value) {
			ssrSupport.value = !isSupported.value;
			matches.value = toValue(query).split(",").some((queryString) => {
				const not = queryString.includes("not all");
				const minWidth = queryString.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
				const maxWidth = queryString.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
				let res = Boolean(minWidth || maxWidth);
				if (minWidth && res) res = ssrWidth >= pxValue(minWidth[1]);
				if (maxWidth && res) res = ssrWidth <= pxValue(maxWidth[1]);
				return not ? !res : res;
			});
			return;
		}
		if (!isSupported.value) return;
		mediaQuery.value = window.matchMedia(toValue(query));
		matches.value = mediaQuery.value.matches;
	});
	useEventListener(mediaQuery, "change", handler, { passive: true });
	return computed(() => matches.value);
}
/**
* Reactive Permissions API.
*
* @see https://vueuse.org/usePermission
*
* @__NO_SIDE_EFFECTS__
*/
function usePermission(permissionDesc, options = {}) {
	const { controls = false, navigator = defaultNavigator } = options;
	const isSupported = /* @__PURE__ */ useSupported(() => navigator && "permissions" in navigator);
	const permissionStatus = shallowRef();
	const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
	const state = shallowRef();
	const update = () => {
		var _permissionStatus$val, _permissionStatus$val2;
		state.value = (_permissionStatus$val = (_permissionStatus$val2 = permissionStatus.value) === null || _permissionStatus$val2 === void 0 ? void 0 : _permissionStatus$val2.state) !== null && _permissionStatus$val !== void 0 ? _permissionStatus$val : "prompt";
	};
	useEventListener(permissionStatus, "change", update, { passive: true });
	const query = createSingletonPromise(async () => {
		if (!isSupported.value) return;
		if (!permissionStatus.value) try {
			permissionStatus.value = await navigator.permissions.query(desc);
		} catch (_unused) {
			permissionStatus.value = void 0;
		} finally {
			update();
		}
		if (controls) return toRaw(permissionStatus.value);
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
	const isClipboardApiSupported = /* @__PURE__ */ useSupported(() => navigator && "clipboard" in navigator);
	const permissionRead = usePermission("clipboard-read");
	const permissionWrite = usePermission("clipboard-write");
	const isSupported = computed(() => isClipboardApiSupported.value || legacy);
	const text = shallowRef("");
	const copied = shallowRef(false);
	const copyPending = shallowRef(false);
	const timeout = useTimeoutFn(() => copied.value = false, copiedDuring, { immediate: false });
	let lastLegacyId = 0;
	async function updateText() {
		let useLegacy = !(isClipboardApiSupported.value && isAllowed(permissionRead.value));
		if (!useLegacy) try {
			text.value = await navigator.clipboard.readText();
		} catch (_unused) {
			useLegacy = true;
		}
		if (useLegacy) text.value = legacyRead();
	}
	if (isSupported.value && read) useEventListener(["copy", "cut"], updateText, { passive: true });
	async function copy(value) {
		const resolvedValue = value !== null && value !== void 0 ? value : toValue(source);
		if (isSupported.value && resolvedValue != null) {
			copyPending.value = true;
			let useLegacy = !(isClipboardApiSupported.value && isAllowed(permissionWrite.value));
			if (!useLegacy) try {
				const clipboardItem = createClipboardItem(resolvedValue);
				await navigator.clipboard.write([clipboardItem]);
			} catch (_unused2) {
				useLegacy = true;
			}
			if (useLegacy) if (typeof resolvedValue === "string") {
				text.value = resolvedValue;
				legacyCopy(resolvedValue);
			} else {
				const currentId = ++lastLegacyId;
				const resolvedText = await resolvedValue();
				if (resolvedText != null && currentId === lastLegacyId) {
					text.value = resolvedText;
					legacyCopy(resolvedText);
				}
			}
			copied.value = true;
			timeout.start();
			copyPending.value = false;
		}
	}
	function createClipboardItem(value) {
		if (typeof value === "string") {
			text.value = value;
			return new ClipboardItem({ "text/plain": value });
		} else return new ClipboardItem({ "text/plain": value().then((resolvedText = "") => {
			text.value = resolvedText;
			return new Blob([resolvedText], { type: "text/plain" });
		}) });
	}
	function legacyCopy(value) {
		const ta = document.createElement("textarea");
		ta.value = value;
		ta.style.position = "absolute";
		ta.style.opacity = "0";
		ta.setAttribute("readonly", "");
		document.body.appendChild(ta);
		ta.select();
		document.execCommand("copy");
		ta.remove();
	}
	function legacyRead() {
		var _document$getSelectio, _document, _document$getSelectio2;
		return (_document$getSelectio = (_document = document) === null || _document === void 0 || (_document$getSelectio2 = _document.getSelection) === null || _document$getSelectio2 === void 0 || (_document$getSelectio2 = _document$getSelectio2.call(_document)) === null || _document$getSelectio2 === void 0 ? void 0 : _document$getSelectio2.toString()) !== null && _document$getSelectio !== void 0 ? _document$getSelectio : "";
	}
	function isAllowed(status) {
		return status === "granted" || status === "prompt";
	}
	return {
		copyPending: shallowReadonly(copyPending),
		isSupported,
		text: shallowReadonly(text),
		copied: shallowReadonly(copied),
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
/**
* Reactive LocalStorage/SessionStorage.
*
* @see https://vueuse.org/useStorage
*/
function useStorage(key, defaults, storage, options = {}) {
	var _options$serializer;
	const { flush = "pre", deep = true, listenToStorageChanges = true, writeDefaults = true, mergeDefaults = false, shallow, window = defaultWindow, eventFilter, onError = (e) => {
		console.error(e);
	}, initOnMounted } = options;
	const data = (shallow ? shallowRef : ref)(typeof defaults === "function" ? defaults() : defaults);
	const keyComputed = computed(() => toValue(key));
	if (!storage) try {
		storage = getSSRHandler("getDefaultStorage", () => defaultWindow === null || defaultWindow === void 0 ? void 0 : defaultWindow.localStorage)();
	} catch (e) {
		onError(e);
	}
	if (!storage) return data;
	const rawInit = toValue(defaults);
	const type = guessSerializerType(rawInit);
	const serializer = (_options$serializer = options.serializer) !== null && _options$serializer !== void 0 ? _options$serializer : StorageSerializers[type];
	const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, (newValue) => write(newValue), {
		flush,
		deep,
		eventFilter
	});
	watch(keyComputed, () => update(), { flush });
	let firstMounted = false;
	const onStorageEvent = (ev) => {
		if (initOnMounted && !firstMounted) return;
		update(ev);
	};
	const onStorageCustomEvent = (ev) => {
		if (initOnMounted && !firstMounted) return;
		updateFromCustomEvent(ev);
	};
	/**
	* The custom event is needed for same-document syncing when using custom
	* storage backends, but it doesn't work across different documents.
	*
	* TODO: Consider implementing a BroadcastChannel-based solution that fixes this.
	*/
	if (window && listenToStorageChanges) if (storage instanceof Storage) useEventListener(window, "storage", onStorageEvent, { passive: true });
	else useEventListener(window, customStorageEventName, onStorageCustomEvent);
	if (initOnMounted) tryOnMounted(() => {
		firstMounted = true;
		update();
	});
	else update();
	function dispatchWriteEvent(oldValue, newValue) {
		if (window) {
			const payload = {
				key: keyComputed.value,
				oldValue,
				newValue,
				storageArea: storage
			};
			window.dispatchEvent(storage instanceof Storage ? new StorageEvent("storage", payload) : new CustomEvent(customStorageEventName, { detail: payload }));
		}
	}
	function write(v) {
		try {
			const oldValue = storage.getItem(keyComputed.value);
			if (v == null) {
				dispatchWriteEvent(oldValue, null);
				storage.removeItem(keyComputed.value);
			} else {
				const serialized = serializer.write(v);
				if (oldValue !== serialized) {
					storage.setItem(keyComputed.value, serialized);
					dispatchWriteEvent(oldValue, serialized);
				}
			}
		} catch (e) {
			onError(e);
		}
	}
	function read(event) {
		const rawValue = event ? event.newValue : storage.getItem(keyComputed.value);
		if (rawValue == null) {
			if (writeDefaults && rawInit != null) storage.setItem(keyComputed.value, serializer.write(rawInit));
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
		if (event && event.key !== keyComputed.value) return;
		pauseWatch();
		try {
			const serializedData = serializer.write(data.value);
			if (event === void 0 || (event === null || event === void 0 ? void 0 : event.newValue) !== serializedData) data.value = read(event);
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
/**
* Manipulate CSS variables.
*
* @see https://vueuse.org/useCssVar
* @param prop
* @param target
* @param options
*/
function useCssVar(prop, target, options = {}) {
	const { window = defaultWindow, initialValue, observe = false } = options;
	const variable = shallowRef(initialValue);
	const elRef = computed(() => {
		var _window$document;
		return unrefElement(target) || (window === null || window === void 0 || (_window$document = window.document) === null || _window$document === void 0 ? void 0 : _window$document.documentElement);
	});
	function updateCssVar() {
		const key = toValue(prop);
		const el = toValue(elRef);
		if (el && window && key) {
			var _window$getComputedSt;
			variable.value = ((_window$getComputedSt = window.getComputedStyle(el).getPropertyValue(key)) === null || _window$getComputedSt === void 0 ? void 0 : _window$getComputedSt.trim()) || variable.value || initialValue;
		}
	}
	if (observe) useMutationObserver(elRef, updateCssVar, {
		attributeFilter: ["style", "class"],
		window
	});
	watch([elRef, () => toValue(prop)], (_, old) => {
		if (old[0] && old[1]) old[0].style.removeProperty(old[1]);
		updateCssVar();
	}, { immediate: true });
	watch([variable, elRef], ([val, el]) => {
		const raw_prop = toValue(prop);
		if ((el === null || el === void 0 ? void 0 : el.style) && raw_prop) if (val == null) el.style.removeProperty(raw_prop);
		else el.style.setProperty(raw_prop, val);
	}, { immediate: true });
	return variable;
}
/**
* Reactively track `document.visibilityState`.
*
* @see https://vueuse.org/useDocumentVisibility
*
* @__NO_SIDE_EFFECTS__
*/
function useDocumentVisibility(options = {}) {
	const { document = defaultDocument } = options;
	if (!document) return shallowRef("visible");
	const visibility = shallowRef(document.visibilityState);
	useEventListener(document, "visibilitychange", () => {
		visibility.value = document.visibilityState;
	}, { passive: true });
	return visibility;
}
/**
* Reports changes to the dimensions of an Element's content or the border-box
*
* @see https://vueuse.org/useResizeObserver
* @param target
* @param callback
* @param options
*/
function useResizeObserver(target, callback, options = {}) {
	const { window = defaultWindow, ...observerOptions } = options;
	let observer;
	const isSupported = /* @__PURE__ */ useSupported(() => window && "ResizeObserver" in window);
	const cleanup = () => {
		if (observer) {
			observer.disconnect();
			observer = void 0;
		}
	};
	const stopWatch = watch(computed(() => {
		const _targets = toValue(target);
		return Array.isArray(_targets) ? _targets.map((el) => unrefElement(el)) : [unrefElement(_targets)];
	}), (els) => {
		cleanup();
		if (isSupported.value && window) {
			observer = new ResizeObserver(callback);
			for (const _el of els) if (_el) observer.observe(_el, observerOptions);
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
/**
* Reactive bounding box of an HTML element.
*
* @see https://vueuse.org/useElementBounding
* @param target
*/
function useElementBounding(target, options = {}) {
	const { reset = true, windowResize = true, windowScroll = true, immediate = true, updateTiming = "sync" } = options;
	const height = shallowRef(0);
	const bottom = shallowRef(0);
	const left = shallowRef(0);
	const right = shallowRef(0);
	const top = shallowRef(0);
	const width = shallowRef(0);
	const x = shallowRef(0);
	const y = shallowRef(0);
	function recalculate() {
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
	function update() {
		if (updateTiming === "sync") recalculate();
		else if (updateTiming === "next-frame") requestAnimationFrame(() => recalculate());
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
	const { delayEnter = 0, delayLeave = 0, triggerOnRemoval = false, window = defaultWindow } = options;
	const isHovered = shallowRef(false);
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
	if (triggerOnRemoval) onElementRemoval(computed(() => unrefElement(el)), () => toggle(false));
	return isHovered;
}
/**
* Reactive size of an HTML element.
*
* @see https://vueuse.org/useElementSize
*/
function useElementSize(target, initialSize = {
	width: 0,
	height: 0
}, options = {}) {
	const { window = defaultWindow, box = "content-box" } = options;
	const isSVG = computed(() => {
		var _unrefElement;
		return (_unrefElement = unrefElement(target)) === null || _unrefElement === void 0 || (_unrefElement = _unrefElement.namespaceURI) === null || _unrefElement === void 0 ? void 0 : _unrefElement.includes("svg");
	});
	const width = shallowRef(initialSize.width);
	const height = shallowRef(initialSize.height);
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
			const formatBoxSize = toArray(boxSize);
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
/**
* Detects changes to a target element's visibility.
*
* @see https://vueuse.org/useIntersectionObserver
* @param target
* @param callback
* @param options
*/
function useIntersectionObserver(target, callback, options = {}) {
	const { root, rootMargin, threshold = 0, window = defaultWindow, immediate = true } = options;
	const isSupported = /* @__PURE__ */ useSupported(() => window && "IntersectionObserver" in window);
	const targets = computed(() => {
		return toArray(toValue(target)).map(unrefElement).filter(notNullish);
	});
	let cleanup = noop;
	const isActive = shallowRef(immediate);
	const stopWatch = isSupported.value ? watch(() => [
		targets.value,
		unrefElement(root),
		toValue(rootMargin),
		isActive.value
	], ([targets, root, rootMargin]) => {
		cleanup();
		if (!isActive.value) return;
		if (!targets.length) return;
		const observer = new IntersectionObserver(callback, {
			root: unrefElement(root),
			rootMargin,
			threshold
		});
		targets.forEach((el) => el && observer.observe(el));
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
function useFavicon(newIcon = null, options = {}) {
	const { baseUrl = "", rel = "icon", document = defaultDocument } = options;
	const favicon = toRef(newIcon);
	const applyIcon = (icon) => {
		const elements = document === null || document === void 0 ? void 0 : document.head.querySelectorAll(`link[rel*="${rel}"]`);
		if (!elements || elements.length === 0) {
			const link = document === null || document === void 0 ? void 0 : document.createElement("link");
			if (link) {
				link.rel = rel;
				link.href = `${baseUrl}${icon}`;
				link.type = `image/${icon.split(".").pop()}`;
				document === null || document === void 0 || document.head.append(link);
			}
			return;
		}
		elements === null || elements === void 0 || elements.forEach((el) => el.href = `${baseUrl}${icon}`);
	};
	watch(favicon, (i, o) => {
		if (typeof i === "string" && i !== o) applyIcon(i);
	}, { immediate: true });
	return favicon;
}
var DEFAULT_OPTIONS = {
	multiple: true,
	accept: "*",
	reset: false,
	directory: false
};
function prepareInitialFiles(files) {
	if (!files) return null;
	if (files instanceof FileList) return files;
	const dt = new DataTransfer();
	for (const file of files) dt.items.add(file);
	return dt.files;
}
/**
* Open file dialog with ease.
*
* @see https://vueuse.org/useFileDialog
* @param options
*/
function useFileDialog(options = {}) {
	const { document = defaultDocument } = options;
	const files = ref(prepareInitialFiles(options.initialFiles));
	const { on: onChange, trigger: changeTrigger } = createEventHook();
	const { on: onCancel, trigger: cancelTrigger } = createEventHook();
	const inputRef = computed(() => {
		var _unrefElement;
		const input = (_unrefElement = unrefElement(options.input)) !== null && _unrefElement !== void 0 ? _unrefElement : document ? document.createElement("input") : void 0;
		if (input) {
			input.type = "file";
			input.onchange = (event) => {
				files.value = event.target.files;
				changeTrigger(files.value);
			};
			input.oncancel = () => {
				cancelTrigger();
			};
		}
		return input;
	});
	const reset = () => {
		files.value = null;
		if (inputRef.value && inputRef.value.value) {
			inputRef.value.value = "";
			changeTrigger(null);
		}
	};
	const applyOptions = (options) => {
		const el = inputRef.value;
		if (!el) return;
		el.multiple = toValue(options.multiple);
		el.accept = toValue(options.accept);
		el.webkitdirectory = toValue(options.directory);
		if (hasOwn(options, "capture")) el.capture = toValue(options.capture);
	};
	const open = (localOptions) => {
		const el = inputRef.value;
		if (!el) return;
		const mergedOptions = {
			...DEFAULT_OPTIONS,
			...options,
			...localOptions
		};
		applyOptions(mergedOptions);
		if (toValue(mergedOptions.reset)) reset();
		el.click();
	};
	watchEffect(() => {
		applyOptions(options);
	});
	return {
		files: readonly(files),
		open,
		reset,
		onCancel,
		onChange
	};
}
/**
* We have to check if the scroll amount is close enough to some threshold in order to
* more accurately calculate arrivedState. This is because scrollTop/scrollLeft are non-rounded
* numbers, while scrollHeight/scrollWidth and clientHeight/clientWidth are rounded.
* https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#determine_if_an_element_has_been_totally_scrolled
*/
var ARRIVED_STATE_THRESHOLD_PIXELS = 1;
/**
* Reactive scroll.
*
* @see https://vueuse.org/useScroll
* @param element
* @param options
*/
function useScroll(element, options = {}) {
	const { throttle = 0, idle = 200, onStop = noop, onScroll = noop, offset = {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0
	}, observe: _observe = { mutation: false }, eventListenerOptions = {
		capture: false,
		passive: true
	}, behavior = "auto", window = defaultWindow, onError = (e) => {
		console.error(e);
	} } = options;
	const observe = typeof _observe === "boolean" ? { mutation: _observe } : _observe;
	const internalX = shallowRef(0);
	const internalY = shallowRef(0);
	const x = computed({
		get() {
			return internalX.value;
		},
		set(x) {
			scrollTo(x, void 0);
		}
	});
	const y = computed({
		get() {
			return internalY.value;
		},
		set(y) {
			scrollTo(void 0, y);
		}
	});
	function scrollTo(_x, _y) {
		var _ref, _toValue, _toValue2, _document;
		if (!window) return;
		const _element = toValue(element);
		if (!_element) return;
		(_ref = _element instanceof Document ? window.document.body : _element) === null || _ref === void 0 || _ref.scrollTo({
			top: (_toValue = toValue(_y)) !== null && _toValue !== void 0 ? _toValue : y.value,
			left: (_toValue2 = toValue(_x)) !== null && _toValue2 !== void 0 ? _toValue2 : x.value,
			behavior: toValue(behavior)
		});
		const scrollContainer = (_element === null || _element === void 0 || (_document = _element.document) === null || _document === void 0 ? void 0 : _document.documentElement) || (_element === null || _element === void 0 ? void 0 : _element.documentElement) || _element;
		if (x != null) internalX.value = scrollContainer.scrollLeft;
		if (y != null) internalY.value = scrollContainer.scrollTop;
	}
	const isScrolling = shallowRef(false);
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
		var _document2;
		if (!window) return;
		const el = (target === null || target === void 0 || (_document2 = target.document) === null || _document2 === void 0 ? void 0 : _document2.documentElement) || (target === null || target === void 0 ? void 0 : target.documentElement) || unrefElement(target);
		const { display, flexDirection, direction } = window.getComputedStyle(el);
		const directionMultipler = direction === "rtl" ? -1 : 1;
		const scrollLeft = el.scrollLeft;
		directions.left = scrollLeft < internalX.value;
		directions.right = scrollLeft > internalX.value;
		const left = Math.abs(scrollLeft * directionMultipler) <= (offset.left || 0);
		const right = Math.abs(scrollLeft * directionMultipler) + el.clientWidth >= el.scrollWidth - (offset.right || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
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
		/**
		* reverse columns and rows behave exactly the other way around,
		* bottom is treated as top and top is treated as the negative version of bottom
		*/
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
		var _documentElement;
		if (!window) return;
		setArrivedState((_documentElement = e.target.documentElement) !== null && _documentElement !== void 0 ? _documentElement : e.target);
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
	if ((observe === null || observe === void 0 ? void 0 : observe.mutation) && element != null && element !== window && element !== document) useMutationObserver(element, () => {
		const _element = toValue(element);
		if (!_element) return;
		setArrivedState(_element);
	}, {
		attributes: true,
		childList: true,
		subtree: true
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
/**
* Reactive LocalStorage.
*
* @see https://vueuse.org/useLocalStorage
* @param key
* @param initialValue
* @param options
*/
function useLocalStorage(key, initialValue, options = {}) {
	const { window = defaultWindow } = options;
	return useStorage(key, initialValue, window === null || window === void 0 ? void 0 : window.localStorage, options);
}
/**
* Reactive SessionStorage.
*
* @see https://vueuse.org/useSessionStorage
* @param key
* @param initialValue
* @param options
*/
function useSessionStorage(key, initialValue, options = {}) {
	const { window = defaultWindow } = options;
	return useStorage(key, initialValue, window === null || window === void 0 ? void 0 : window.sessionStorage, options);
}
/**
* Reactive SpeechRecognition.
*
* @see https://vueuse.org/useSpeechRecognition
* @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition SpeechRecognition
* @param options
*/
function useSpeechRecognition(options = {}) {
	const { interimResults = true, continuous = true, maxAlternatives = 1, window = defaultWindow } = options;
	const lang = toRef(options.lang || "en-US");
	const isListening = shallowRef(false);
	const isFinal = shallowRef(false);
	const result = shallowRef("");
	const error = shallowRef(void 0);
	let recognition;
	const start = () => {
		isListening.value = true;
	};
	const stop = () => {
		isListening.value = false;
	};
	const toggle = (value = !isListening.value) => {
		if (value) start();
		else stop();
	};
	const SpeechRecognition = window && (window.SpeechRecognition || window.webkitSpeechRecognition);
	const isSupported = /* @__PURE__ */ useSupported(() => SpeechRecognition);
	if (isSupported.value) {
		recognition = new SpeechRecognition();
		recognition.continuous = continuous;
		recognition.interimResults = interimResults;
		recognition.lang = toValue(lang);
		recognition.maxAlternatives = maxAlternatives;
		recognition.onstart = () => {
			isListening.value = true;
			isFinal.value = false;
		};
		watch(lang, (lang) => {
			if (recognition && !isListening.value) recognition.lang = lang;
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
		watch(isListening, (newValue, oldValue) => {
			if (newValue === oldValue) return;
			try {
				if (newValue) recognition.start();
				else recognition.stop();
			} catch (err) {
				error.value = err;
			}
		});
	}
	tryOnScopeDispose(() => {
		stop();
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
/**
* Reactive SpeechSynthesis.
*
* @see https://vueuse.org/useSpeechSynthesis
* @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis SpeechSynthesis
*/
function useSpeechSynthesis(text, options = {}) {
	const { pitch = 1, rate = 1, volume = 1, window = defaultWindow, onBoundary } = options;
	const synth = window && window.speechSynthesis;
	const isSupported = /* @__PURE__ */ useSupported(() => synth);
	const isPlaying = shallowRef(false);
	const status = shallowRef("init");
	const spokenText = toRef(text || "");
	const lang = toRef(options.lang || "en-US");
	const error = shallowRef(void 0);
	const toggle = (value = !isPlaying.value) => {
		isPlaying.value = value;
	};
	const bindEventsForUtterance = (utterance) => {
		utterance.lang = toValue(lang);
		utterance.voice = toValue(options.voice) || null;
		utterance.pitch = toValue(pitch);
		utterance.rate = toValue(rate);
		utterance.volume = toValue(volume);
		utterance.onstart = () => {
			isPlaying.value = true;
			status.value = "play";
		};
		utterance.onpause = () => {
			isPlaying.value = false;
			status.value = "pause";
		};
		utterance.onresume = () => {
			isPlaying.value = true;
			status.value = "play";
		};
		utterance.onend = () => {
			isPlaying.value = false;
			status.value = "end";
		};
		utterance.onerror = (event) => {
			error.value = event;
		};
		utterance.onboundary = (event) => {
			onBoundary === null || onBoundary === void 0 || onBoundary(event);
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
		if (utterance) synth.speak(utterance.value);
	};
	const stop = () => {
		synth.cancel();
		isPlaying.value = false;
	};
	if (isSupported.value) {
		bindEventsForUtterance(utterance.value);
		watch(lang, (lang) => {
			if (utterance.value && !isPlaying.value) utterance.value.lang = lang;
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
function useTimeoutPoll(fn, interval, options = {}) {
	const { immediate = true, immediateCallback = false } = options;
	const { start } = useTimeoutFn(loop, interval, { immediate });
	const isActive = shallowRef(false);
	async function loop() {
		if (!isActive.value) return;
		await fn();
		start();
	}
	function resume() {
		if (!isActive.value) {
			isActive.value = true;
			if (immediateCallback) fn();
			start();
		}
	}
	function pause() {
		isActive.value = false;
	}
	if (immediate && isClient) resume();
	tryOnScopeDispose(pause);
	return {
		isActive,
		pause,
		resume
	};
}
function getDefaultScheduler$2(options) {
	if ("interval" in options || "immediate" in options) {
		const { interval = "requestAnimationFrame", immediate = true } = options;
		return interval === "requestAnimationFrame" ? (cb) => useRafFn(cb, { immediate }) : (cb) => useIntervalFn(cb, interval, { immediate });
	}
	return useRafFn;
}
function useTimestamp(options = {}) {
	const { controls: exposeControls = false, offset = 0, scheduler = getDefaultScheduler$2(options), callback } = options;
	const ts = shallowRef(timestamp() + offset);
	const update = () => ts.value = timestamp() + offset;
	const controls = scheduler(callback ? () => {
		update();
		callback(ts.value);
	} : update);
	if (exposeControls) return {
		timestamp: ts,
		...controls
	};
	else return ts;
}
/**
* Please consider using [`vue-virtual-scroller`](https://github.com/Akryum/vue-virtual-scroller) if you are looking for more features.
*/
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
	const containerRef = shallowRef(null);
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
function useWatchForSizes(size, listRef, containerRef, calculateRange) {
	watch([
		size.width,
		size.height,
		listRef,
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
	useWatchForSizes(size, source, containerRef, calculateRange);
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
	useWatchForSizes(size, source, containerRef, calculateRange);
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
/**
* Reactive window size.
*
* @see https://vueuse.org/useWindowSize
* @param options
*
* @__NO_SIDE_EFFECTS__
*/
function useWindowSize(options = {}) {
	const { window = defaultWindow, initialWidth = Number.POSITIVE_INFINITY, initialHeight = Number.POSITIVE_INFINITY, listenOrientation = true, includeScrollbar = true, type = "inner" } = options;
	const width = shallowRef(initialWidth);
	const height = shallowRef(initialHeight);
	const update = () => {
		if (window) if (type === "outer") {
			width.value = window.outerWidth;
			height.value = window.outerHeight;
		} else if (type === "visual" && window.visualViewport) {
			const { width: visualViewportWidth, height: visualViewportHeight, scale } = window.visualViewport;
			width.value = Math.round(visualViewportWidth * scale);
			height.value = Math.round(visualViewportHeight * scale);
		} else if (includeScrollbar) {
			width.value = window.innerWidth;
			height.value = window.innerHeight;
		} else {
			width.value = window.document.documentElement.clientWidth;
			height.value = window.document.documentElement.clientHeight;
		}
	};
	update();
	tryOnMounted(update);
	const listenerOptions = { passive: true };
	useEventListener("resize", update, listenerOptions);
	if (window && type === "visual" && window.visualViewport) useEventListener(window.visualViewport, "resize", update, listenerOptions);
	if (listenOrientation) watch(useMediaQuery("(orientation: portrait)"), () => update());
	return {
		width,
		height
	};
}
//#endregion
export { useWindowSize as A, useDebounceFn as B, useSessionStorage as C, useTimeoutPoll as D, useStorage as E, refDebounced as F, useThrottleFn as H, throttledRef as I, throttledWatch as L, createInjectionState as M, reactiveOmit as N, useTimestamp as O, reactivePick as P, toRefs as R, useScroll as S, useSpeechSynthesis as T, watchDebounced as U, useIntervalFn as V, watchOnce as W, useFileDialog as _, onKeyStroke as a, useMediaQuery as b, useAsyncState as c, useDocumentVisibility as d, useElementBounding as f, useFavicon as g, useEventListener as h, onKeyDown as i, createEventHook as j, useVirtualList as k, useClipboard as l, useElementSize as m, computedAsync as n, onKeyUp as o, useElementHover as p, onClickOutside as r, useActiveElement as s, asyncComputed as t, useCssVar as u, useIntersectionObserver as v, useSpeechRecognition as w, useResizeObserver as x, useLocalStorage as y, until as z };
