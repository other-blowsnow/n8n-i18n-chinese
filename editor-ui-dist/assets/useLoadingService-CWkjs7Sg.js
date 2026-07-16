import "./chunk-CC9Q-vWm.js";
import { Ht as toRefs, I as h, It as ref, N as defineComponent, Pt as reactive, S as computed, W as nextTick, bt as withCtx, cn as isObject, en as hyphenate, i as createApp, j as createVNode, jt as isRef, mn as isString, n as Transition, p as vShow, tn as init_shared_esm_bundler, xt as withDirectives } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-CEUyFjtd.js";
import { Si as isClient, _n as useGlobalComponentSettings, fr as addClass, gr as removeClass, mr as getStyle } from "./src-XWsjz-dU.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/loading/src/loading.mjs
function createLoadingComponent(options) {
	let afterLeaveTimer;
	const afterLeaveFlag = ref(false);
	const data = reactive({
		...options,
		originalPosition: "",
		originalOverflow: "",
		visible: false
	});
	function setText(text) {
		data.text = text;
	}
	function destroySelf() {
		const target = data.parent;
		const ns = vm.ns;
		if (!target.vLoadingAddClassList) {
			let loadingNumber = target.getAttribute("loading-number");
			loadingNumber = Number.parseInt(loadingNumber) - 1;
			if (!loadingNumber) {
				removeClass(target, ns.bm("parent", "relative"));
				target.removeAttribute("loading-number");
			} else target.setAttribute("loading-number", loadingNumber.toString());
			removeClass(target, ns.bm("parent", "hidden"));
		}
		removeElLoadingChild();
		loadingInstance.unmount();
	}
	function removeElLoadingChild() {
		var _a, _b;
		(_b = (_a = vm.$el) == null ? void 0 : _a.parentNode) == null || _b.removeChild(vm.$el);
	}
	function close() {
		var _a;
		if (options.beforeClose && !options.beforeClose()) return;
		afterLeaveFlag.value = true;
		clearTimeout(afterLeaveTimer);
		afterLeaveTimer = window.setTimeout(handleAfterLeave, 400);
		data.visible = false;
		(_a = options.closed) == null || _a.call(options);
	}
	function handleAfterLeave() {
		if (!afterLeaveFlag.value) return;
		const target = data.parent;
		afterLeaveFlag.value = false;
		target.vLoadingAddClassList = void 0;
		destroySelf();
	}
	const loadingInstance = createApp(defineComponent({
		name: "ElLoading",
		setup(_, { expose }) {
			const { ns, zIndex } = useGlobalComponentSettings("loading");
			expose({
				ns,
				zIndex
			});
			return () => {
				const svg = data.spinner || data.svg;
				const spinner = h("svg", {
					class: "circular",
					viewBox: data.svgViewBox ? data.svgViewBox : "0 0 50 50",
					...svg ? { innerHTML: svg } : {}
				}, [h("circle", {
					class: "path",
					cx: "25",
					cy: "25",
					r: "20",
					fill: "none"
				})]);
				const spinnerText = data.text ? h("p", { class: ns.b("text") }, [data.text]) : void 0;
				return h(Transition, {
					name: ns.b("fade"),
					onAfterLeave: handleAfterLeave
				}, { default: withCtx(() => [withDirectives(createVNode("div", {
					style: { backgroundColor: data.background || "" },
					class: [
						ns.b("mask"),
						data.customClass,
						data.fullscreen ? "is-fullscreen" : ""
					]
				}, [h("div", { class: ns.b("spinner") }, [spinner, spinnerText])]), [[vShow, data.visible]])]) });
			};
		}
	}));
	const vm = loadingInstance.mount(document.createElement("div"));
	return {
		...toRefs(data),
		setText,
		removeElLoadingChild,
		close,
		handleAfterLeave,
		vm,
		get $el() {
			return vm.$el;
		}
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/loading/src/service.mjs
init_shared_esm_bundler();
var fullscreenInstance = void 0;
var Loading = function(options = {}) {
	if (!isClient) return void 0;
	const resolved = resolveOptions(options);
	if (resolved.fullscreen && fullscreenInstance) return fullscreenInstance;
	const instance = createLoadingComponent({
		...resolved,
		closed: () => {
			var _a;
			(_a = resolved.closed) == null || _a.call(resolved);
			if (resolved.fullscreen) fullscreenInstance = void 0;
		}
	});
	addStyle(resolved, resolved.parent, instance);
	addClassList(resolved, resolved.parent, instance);
	resolved.parent.vLoadingAddClassList = () => addClassList(resolved, resolved.parent, instance);
	let loadingNumber = resolved.parent.getAttribute("loading-number");
	if (!loadingNumber) loadingNumber = "1";
	else loadingNumber = `${Number.parseInt(loadingNumber) + 1}`;
	resolved.parent.setAttribute("loading-number", loadingNumber);
	resolved.parent.appendChild(instance.$el);
	nextTick(() => instance.visible.value = resolved.visible);
	if (resolved.fullscreen) fullscreenInstance = instance;
	return instance;
};
var resolveOptions = (options) => {
	var _a, _b, _c, _d;
	let target;
	if (isString(options.target)) target = (_a = document.querySelector(options.target)) != null ? _a : document.body;
	else target = options.target || document.body;
	return {
		parent: target === document.body || options.body ? document.body : target,
		background: options.background || "",
		svg: options.svg || "",
		svgViewBox: options.svgViewBox || "",
		spinner: options.spinner || false,
		text: options.text || "",
		fullscreen: target === document.body && ((_b = options.fullscreen) != null ? _b : true),
		lock: (_c = options.lock) != null ? _c : false,
		customClass: options.customClass || "",
		visible: (_d = options.visible) != null ? _d : true,
		target
	};
};
var addStyle = async (options, parent, instance) => {
	const { nextZIndex } = instance.vm.zIndex || instance.vm._.exposed.zIndex;
	const maskStyle = {};
	if (options.fullscreen) {
		instance.originalPosition.value = getStyle(document.body, "position");
		instance.originalOverflow.value = getStyle(document.body, "overflow");
		maskStyle.zIndex = nextZIndex();
	} else if (options.parent === document.body) {
		instance.originalPosition.value = getStyle(document.body, "position");
		await nextTick();
		for (const property of ["top", "left"]) {
			const scroll = property === "top" ? "scrollTop" : "scrollLeft";
			maskStyle[property] = `${options.target.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] - Number.parseInt(getStyle(document.body, `margin-${property}`), 10)}px`;
		}
		for (const property of ["height", "width"]) maskStyle[property] = `${options.target.getBoundingClientRect()[property]}px`;
	} else instance.originalPosition.value = getStyle(parent, "position");
	for (const [key, value] of Object.entries(maskStyle)) instance.$el.style[key] = value;
};
var addClassList = (options, parent, instance) => {
	const ns = instance.vm.ns || instance.vm._.exposed.ns;
	if (![
		"absolute",
		"fixed",
		"sticky"
	].includes(instance.originalPosition.value)) addClass(parent, ns.bm("parent", "relative"));
	else removeClass(parent, ns.bm("parent", "relative"));
	if (options.fullscreen && options.lock) addClass(parent, ns.bm("parent", "hidden"));
	else removeClass(parent, ns.bm("parent", "hidden"));
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/loading/src/directive.mjs
init_shared_esm_bundler();
var INSTANCE_KEY = Symbol("ElLoading");
var createInstance = (el, binding) => {
	var _a, _b, _c, _d;
	const vm = binding.instance;
	const getBindingProp = (key) => isObject(binding.value) ? binding.value[key] : void 0;
	const resolveExpression = (key) => {
		const data = isString(key) && (vm == null ? void 0 : vm[key]) || key;
		if (data) return ref(data);
		else return data;
	};
	const getProp = (name) => resolveExpression(getBindingProp(name) || el.getAttribute(`element-loading-${hyphenate(name)}`));
	const fullscreen = (_a = getBindingProp("fullscreen")) != null ? _a : binding.modifiers.fullscreen;
	const options = {
		text: getProp("text"),
		svg: getProp("svg"),
		svgViewBox: getProp("svgViewBox"),
		spinner: getProp("spinner"),
		background: getProp("background"),
		customClass: getProp("customClass"),
		fullscreen,
		target: (_b = getBindingProp("target")) != null ? _b : fullscreen ? void 0 : el,
		body: (_c = getBindingProp("body")) != null ? _c : binding.modifiers.body,
		lock: (_d = getBindingProp("lock")) != null ? _d : binding.modifiers.lock
	};
	el[INSTANCE_KEY] = {
		options,
		instance: Loading(options)
	};
};
var updateOptions = (newOptions, originalOptions) => {
	for (const key of Object.keys(originalOptions)) if (isRef(originalOptions[key])) originalOptions[key].value = newOptions[key];
};
var vLoading = {
	mounted(el, binding) {
		if (binding.value) createInstance(el, binding);
	},
	updated(el, binding) {
		const instance = el[INSTANCE_KEY];
		if (binding.oldValue !== binding.value) if (binding.value && !binding.oldValue) createInstance(el, binding);
		else if (binding.value && binding.oldValue) {
			if (isObject(binding.value)) updateOptions(binding.value, instance.options);
		} else instance?.instance.close();
	},
	unmounted(el) {
		var _a;
		(_a = el[INSTANCE_KEY]) == null || _a.instance.close();
	}
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/loading/index.mjs
var ElLoading = {
	install(app) {
		app.directive("loading", vLoading);
		app.config.globalProperties.$loading = Loading;
	},
	directive: vLoading,
	service: Loading
};
//#endregion
//#region src/app/composables/useLoadingService.ts
function useLoadingService() {
	const i18n = useI18n();
	const loadingService = ref(null);
	function startLoading(text) {
		if (loadingService.value !== null) return;
		loadingService.value = ElLoading.service({
			lock: true,
			text: text || i18n.baseText("genericHelpers.loading"),
			background: "var(--dialog--overlay--color--background)"
		});
	}
	function setLoadingText(text) {
		if (loadingService.value) loadingService.value.text = text;
	}
	function stopLoading() {
		if (loadingService.value) {
			loadingService.value.close();
			loadingService.value = null;
		}
	}
	return {
		loadingService,
		isLoading: computed(() => loadingService.value !== null),
		startLoading,
		setLoadingText,
		stopLoading
	};
}
//#endregion
export { ElLoading as n, useLoadingService as t };
