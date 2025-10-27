import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, Ct as withScopeId, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, I as guardReactiveProps, It as ref, L as h, Lt as shallowReactive, M as createVNode, Mt as markRaw, P as defineComponent, Sn as toDisplayString, T as createBlock, W as mergeProps, _ as Fragment, _n as normalizeClass, _t as watch, at as renderSlot, bt as withCtx, ct as resolveDynamicComponent, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, l as useCssVars, lt as toHandlers, ot as resolveComponent, pt as useSlots, rt as pushScopeId, st as resolveDirective, tt as popScopeId, vn as normalizeProps, w as createBaseVNode, xt as withDirectives, yn as normalizeStyle } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { _t as I18nT, gt as useI18n, h as computedAsync } from "./_MapCache-CMopfp37.js";
import { Fn as N8nIcon_default, Mn as N8nText_default, Nn as N8nButton_default, ft as N8nTooltip_default, lt as N8nLink_default } from "./src-B9lyFNPE.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter } from "./truncate-D09te2fm.js";
import { t as useMessage } from "./useMessage-CzSaXdHQ.js";
import { Ai as nodeViewEventBus, Gt as generateCodeForPrompt, Js as useRootStore, Li as useUIStore, Qt as useFlattenSchema, Sn as injectWorkflowState, Tn as require_pick, Ur as executionDataToJson, Zt as useDataSchema, a as useNDVStore, bi as isEmpty, o as useWorkflowsStore, rt as useNodeTypesStore, t as useTelemetry, xn as useNodeHelpers, yn as environments_store_default, zo as useSettingsStore } from "./useTelemetry-BnWkdL5v.js";
import { t as useToast } from "./useToast-CYEyObML.js";
import { Bs as AI_TRANSFORM_NODE_TYPE, Ci as SCHEMA_PREVIEW_DOCS_URL, Do as createResultError, Fs as ApplicationError, Ms as DateTime, Ns as NodeConnectionTypes, Rs as AI_TRANSFORM_CODE_GENERATED_FOR_PROMPT, ca as WEBHOOK_NODE_TYPE, dn as FORM_TRIGGER_NODE_TYPE, fn as FROM_AI_PARAMETERS_MODAL_KEY, ii as PLACEHOLDER_FILLED_AT_EXECUTION_TIME, kr as MODAL_CONFIRM, nt as CHAT_TRIGGER_NODE_TYPE, on as EnterpriseEditionFeature, or as MANUAL_TRIGGER_NODE_TYPE, zs as AI_TRANSFORM_JS_CODE } from "./constants-7lEZpYki.js";
import { t as useExternalHooks } from "./useExternalHooks-BhwArgDu.js";
import { t as useRunWorkflow } from "./useRunWorkflow-Bd2-68As.js";
import { t as usePinnedData } from "./usePinnedData-en44HETZ.js";
import { t as NodeIcon_default } from "./NodeIcon-CDBCK2ja.js";
import { i as Ln, o as gu, r as estree_exports, t as NDVEmptyState_default } from "./NDVEmptyState-DXP-2qHk.js";
import { t as Draggable_default } from "./Draggable-Dx1WUTsP.js";
import { t as TextWithHighlights_default } from "./TextWithHighlights-4Fm26J2a.js";
import { n as MappingPill_default, t as useTelemetryContext } from "./useTelemetryContext-UPqMtM_b.js";
import { t as useSchemaPreviewStore } from "./schemaPreview.store-CLfCgUB5.js";
import { a as needsAgentInput } from "./nodeTransforms-idgabZjR.js";
var _hoisted_1$3 = { class: "schema-header-wrapper" };
var _hoisted_2$2 = {
	class: "schema-header",
	"data-test-id": "run-data-schema-header"
};
var _hoisted_3 = { class: "title" };
var _hoisted_4 = {
	key: 0,
	class: "info"
};
var _hoisted_5 = {
	key: 2,
	class: "extra-info",
	"data-test-id": "run-data-schema-node-item-count"
};
var _hoisted_6 = {
	key: 3,
	class: "extra-info"
};
var VirtualSchemaHeader_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "VirtualSchemaHeader",
	props: {
		title: {},
		collapsable: { type: Boolean },
		collapsed: { type: Boolean },
		itemCount: {},
		info: {},
		nodeType: {},
		preview: { type: Boolean }
	},
	emits: ["click:toggle"],
	setup(__props, { emit: __emit }) {
		const props$1 = __props;
		const i18n = useI18n();
		const isTrigger = computed(() => Boolean(props$1.nodeType?.group.includes("trigger")));
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$3, [createBaseVNode("div", _hoisted_2$2, [
				createBaseVNode("div", {
					class: "toggle",
					onClickCapture: _cache[0] || (_cache[0] = withModifiers(($event) => emit("click:toggle"), ["stop"]))
				}, [createVNode(unref(N8nIcon_default), {
					size: "medium",
					icon: "chevron-down",
					class: normalizeClass({
						"collapse-icon": true,
						collapsed: _ctx.collapsed
					})
				}, null, 8, ["class"])], 32),
				_ctx.nodeType ? (openBlock(), createBlock(NodeIcon_default, {
					key: 0,
					class: normalizeClass(["icon", { ["icon-trigger"]: isTrigger.value }]),
					"node-type": _ctx.nodeType,
					size: 12
				}, null, 8, ["class", "node-type"])) : createCommentVNode("", true),
				createBaseVNode("div", _hoisted_3, [createTextVNode(toDisplayString(_ctx.title) + " ", 1), _ctx.info ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(_ctx.info), 1)) : createCommentVNode("", true)]),
				isTrigger.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					class: "trigger-icon",
					icon: "bolt-filled",
					size: "xsmall"
				})) : createCommentVNode("", true),
				_ctx.itemCount ? (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString(unref(i18n).baseText("ndv.output.items", { interpolate: { count: _ctx.itemCount } })), 1)) : _ctx.preview ? (openBlock(), createElementBlock("div", _hoisted_6, toDisplayString(unref(i18n).baseText("dataMapping.schemaView.previewNode")), 1)) : createCommentVNode("", true)
			]), _ctx.preview && !_ctx.collapsed ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: "notice",
				"data-test-id": "schema-preview-warning",
				onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
			}, [createVNode(unref(I18nT), {
				keypath: "dataMapping.schemaView.preview",
				scope: "global"
			}, {
				link: withCtx(() => [createVNode(unref(N8nLink_default), {
					to: unref(SCHEMA_PREVIEW_DOCS_URL),
					size: "small",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.learnMore")), 1)]),
					_: 1
				}, 8, ["to"])]),
				_: 1
			})])) : createCommentVNode("", true)]);
		};
	}
}), [["__scopeId", "data-v-bd5ef0d2"]]);
var _hoisted_1$2 = { class: "toggle-container" };
var _hoisted_2$1 = [
	"data-name",
	"data-path",
	"data-depth",
	"data-nest-level",
	"data-value",
	"data-node-type",
	"data-target",
	"data-node-name",
	"data-run-index"
];
var VirtualSchemaItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "VirtualSchemaItem",
	props: {
		title: {},
		path: {},
		level: {},
		depth: {},
		expression: {},
		value: {},
		id: {},
		icon: {},
		collapsable: { type: Boolean },
		nodeName: {},
		nodeType: {},
		highlight: { type: Boolean },
		draggable: { type: Boolean },
		collapsed: { type: Boolean },
		search: {},
		preview: { type: Boolean },
		locked: { type: Boolean },
		lockedTooltip: {},
		runIndex: {}
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		useCssVars((_ctx) => ({ "8a795c8a": _ctx.level }));
		const props$1 = __props;
		const emit = __emit;
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(["schema-item", { draggable: _ctx.draggable }]),
				"data-test-id": "run-data-schema-item"
			}, [
				createBaseVNode("div", _hoisted_1$2, [_ctx.collapsable ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: "toggle",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("click"))
				}, [createVNode(unref(N8nIcon_default), {
					icon: "chevron-down",
					class: normalizeClass({
						"collapse-icon": true,
						collapsed: _ctx.collapsed
					})
				}, null, 8, ["class"])])) : createCommentVNode("", true)]),
				_ctx.title ? (openBlock(), createElementBlock("div", {
					key: 0,
					"data-name": _ctx.title,
					"data-path": _ctx.path,
					"data-depth": _ctx.depth,
					"data-nest-level": _ctx.level,
					"data-value": _ctx.expression,
					"data-node-type": _ctx.nodeType,
					"data-target": !_ctx.locked && "mappable",
					"data-node-name": _ctx.nodeName,
					"data-run-index": _ctx.runIndex,
					class: normalizeClass(["pill", {
						"pill--highlight": _ctx.highlight,
						"pill--preview": _ctx.preview,
						"pill--locked": _ctx.locked
					}]),
					"data-test-id": "run-data-schema-node-name"
				}, [createVNode(unref(N8nIcon_default), {
					class: "type-icon",
					icon: _ctx.icon,
					size: "small"
				}, null, 8, ["icon"]), createVNode(TextWithHighlights_default, {
					class: "title",
					content: _ctx.title,
					search: props$1.search
				}, null, 8, ["content", "search"])], 10, _hoisted_2$1)) : createCommentVNode("", true),
				_ctx.locked ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					disabled: !_ctx.lockedTooltip,
					"popper-class": _ctx.$style.tooltip
				}, {
					content: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, _ctx.lockedTooltip]])]),
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						class: "locked-icon",
						icon: "lock",
						size: "small"
					})]),
					_: 1
				}, 8, ["disabled", "popper-class"])) : createCommentVNode("", true),
				createVNode(TextWithHighlights_default, {
					"data-test-id": "run-data-schema-item-value",
					class: "text",
					content: _ctx.value,
					search: props$1.search
				}, null, 8, ["content", "search"])
			], 2);
		};
	}
});
var VirtualSchemaItem_vue_vue_type_style_index_1_lang_module_default = { tooltip: "_tooltip_1e5yq_2" };
var VirtualSchemaItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(VirtualSchemaItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": VirtualSchemaItem_vue_vue_type_style_index_1_lang_module_default }], ["__scopeId", "data-v-ea0c3249"]]);
function getInternetExplorerVersion() {
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");
	if (msie > 0) return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
	if (ua.indexOf("Trident/") > 0) {
		var rv = ua.indexOf("rv:");
		return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
	}
	var edge = ua.indexOf("Edge/");
	if (edge > 0) return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
	return -1;
}
var isIE;
function initCompat() {
	if (!initCompat.init) {
		initCompat.init = true;
		isIE = getInternetExplorerVersion() !== -1;
	}
}
var script$2 = {
	name: "ResizeObserver",
	props: {
		emitOnMount: {
			type: Boolean,
			default: false
		},
		ignoreWidth: {
			type: Boolean,
			default: false
		},
		ignoreHeight: {
			type: Boolean,
			default: false
		}
	},
	emits: ["notify"],
	mounted() {
		initCompat();
		nextTick(() => {
			this._w = this.$el.offsetWidth;
			this._h = this.$el.offsetHeight;
			if (this.emitOnMount) this.emitSize();
		});
		const object = document.createElement("object");
		this._resizeObject = object;
		object.setAttribute("aria-hidden", "true");
		object.setAttribute("tabindex", -1);
		object.onload = this.addResizeHandlers;
		object.type = "text/html";
		if (isIE) this.$el.appendChild(object);
		object.data = "about:blank";
		if (!isIE) this.$el.appendChild(object);
	},
	beforeUnmount() {
		this.removeResizeHandlers();
	},
	methods: {
		compareAndNotify() {
			if (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) {
				this._w = this.$el.offsetWidth;
				this._h = this.$el.offsetHeight;
				this.emitSize();
			}
		},
		emitSize() {
			this.$emit("notify", {
				width: this._w,
				height: this._h
			});
		},
		addResizeHandlers() {
			this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify);
			this.compareAndNotify();
		},
		removeResizeHandlers() {
			if (this._resizeObject && this._resizeObject.onload) {
				if (!isIE && this._resizeObject.contentDocument) this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify);
				this.$el.removeChild(this._resizeObject);
				this._resizeObject.onload = null;
				this._resizeObject = null;
			}
		}
	}
};
var _withId = /* @__PURE__ */ withScopeId("data-v-b329ee4c");
pushScopeId("data-v-b329ee4c");
var _hoisted_1$1 = {
	class: "resize-observer",
	tabindex: "-1"
};
popScopeId();
script$2.render = /* @__PURE__ */ _withId((_ctx, _cache, $props, $setup, $data, $options) => {
	return openBlock(), createBlock("div", _hoisted_1$1);
});
script$2.__scopeId = "data-v-b329ee4c";
script$2.__file = "src/components/ResizeObserver.vue";
function _typeof$1(obj) {
	"@babel/helpers - typeof";
	if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof$1 = function(obj$1) {
		return typeof obj$1;
	};
	else _typeof$1 = function(obj$1) {
		return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
	};
	return _typeof$1(obj);
}
function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props$1) {
	for (var i = 0; i < props$1.length; i++) {
		var descriptor = props$1[i];
		descriptor.enumerable = descriptor.enumerable || false;
		descriptor.configurable = true;
		if ("value" in descriptor) descriptor.writable = true;
		Object.defineProperty(target, descriptor.key, descriptor);
	}
}
function _createClass(Constructor, protoProps, staticProps) {
	if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	if (staticProps) _defineProperties(Constructor, staticProps);
	return Constructor;
}
function _toConsumableArray(arr) {
	return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
	if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
	if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
	if (!o) return;
	if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	var n = Object.prototype.toString.call(o).slice(8, -1);
	if (n === "Object" && o.constructor) n = o.constructor.name;
	if (n === "Map" || n === "Set") return Array.from(o);
	if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
	if (len == null || len > arr.length) len = arr.length;
	for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	return arr2;
}
function _nonIterableSpread() {
	throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function processOptions(value) {
	var options;
	if (typeof value === "function") options = { callback: value };
	else options = value;
	return options;
}
function throttle(callback, delay) {
	var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	var timeout;
	var lastState;
	var currentArgs;
	var throttled = function throttled$1(state) {
		for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
		currentArgs = args;
		if (timeout && state === lastState) return;
		var leading = options.leading;
		if (typeof leading === "function") leading = leading(state, lastState);
		if ((!timeout || state !== lastState) && leading) callback.apply(void 0, [state].concat(_toConsumableArray(currentArgs)));
		lastState = state;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			callback.apply(void 0, [state].concat(_toConsumableArray(currentArgs)));
			timeout = 0;
		}, delay);
	};
	throttled._clear = function() {
		clearTimeout(timeout);
		timeout = null;
	};
	return throttled;
}
function deepEqual(val1, val2) {
	if (val1 === val2) return true;
	if (_typeof$1(val1) === "object") {
		for (var key in val1) if (!deepEqual(val1[key], val2[key])) return false;
		return true;
	}
	return false;
}
var VisibilityState = /* @__PURE__ */ function() {
	function VisibilityState$1(el, options, vnode) {
		_classCallCheck(this, VisibilityState$1);
		this.el = el;
		this.observer = null;
		this.frozen = false;
		this.createObserver(options, vnode);
	}
	_createClass(VisibilityState$1, [
		{
			key: "createObserver",
			value: function createObserver(options, vnode) {
				var _this = this;
				if (this.observer) this.destroyObserver();
				if (this.frozen) return;
				this.options = processOptions(options);
				this.callback = function(result, entry) {
					_this.options.callback(result, entry);
					if (result && _this.options.once) {
						_this.frozen = true;
						_this.destroyObserver();
					}
				};
				if (this.callback && this.options.throttle) {
					var _leading = (this.options.throttleOptions || {}).leading;
					this.callback = throttle(this.callback, this.options.throttle, { leading: function leading(state) {
						return _leading === "both" || _leading === "visible" && state || _leading === "hidden" && !state;
					} });
				}
				this.oldResult = void 0;
				this.observer = new IntersectionObserver(function(entries) {
					var entry = entries[0];
					if (entries.length > 1) {
						var intersectingEntry = entries.find(function(e) {
							return e.isIntersecting;
						});
						if (intersectingEntry) entry = intersectingEntry;
					}
					if (_this.callback) {
						var result = entry.isIntersecting && entry.intersectionRatio >= _this.threshold;
						if (result === _this.oldResult) return;
						_this.oldResult = result;
						_this.callback(result, entry);
					}
				}, this.options.intersection);
				nextTick(function() {
					if (_this.observer) _this.observer.observe(_this.el);
				});
			}
		},
		{
			key: "destroyObserver",
			value: function destroyObserver() {
				if (this.observer) {
					this.observer.disconnect();
					this.observer = null;
				}
				if (this.callback && this.callback._clear) {
					this.callback._clear();
					this.callback = null;
				}
			}
		},
		{
			key: "threshold",
			get: function get() {
				return this.options.intersection && typeof this.options.intersection.threshold === "number" ? this.options.intersection.threshold : 0;
			}
		}
	]);
	return VisibilityState$1;
}();
function beforeMount(el, _ref2, vnode) {
	var value = _ref2.value;
	if (!value) return;
	if (typeof IntersectionObserver === "undefined") console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
	else el._vue_visibilityState = new VisibilityState(el, value, vnode);
}
function updated(el, _ref3, vnode) {
	var value = _ref3.value, oldValue = _ref3.oldValue;
	if (deepEqual(value, oldValue)) return;
	var state = el._vue_visibilityState;
	if (!value) {
		unmounted(el);
		return;
	}
	if (state) state.createObserver(value, vnode);
	else beforeMount(el, { value }, vnode);
}
function unmounted(el) {
	var state = el._vue_visibilityState;
	if (state) {
		state.destroyObserver();
		delete el._vue_visibilityState;
	}
}
var ObserveVisibility = {
	beforeMount,
	updated,
	unmounted
};
function mitt_es_default(n) {
	return {
		all: n = n || /* @__PURE__ */ new Map(),
		on: function(t, e) {
			var i = n.get(t);
			i && i.push(e) || n.set(t, [e]);
		},
		off: function(t, e) {
			var i = n.get(t);
			i && i.splice(i.indexOf(e) >>> 0, 1);
		},
		emit: function(t, e) {
			(n.get(t) || []).slice().map(function(n$1) {
				n$1(e);
			}), (n.get("*") || []).slice().map(function(n$1) {
				n$1(t, e);
			});
		}
	};
}
var config = { itemsLimit: 1e3 };
var regex = /(auto|scroll)/;
function parents(node, ps) {
	if (node.parentNode === null) return ps;
	return parents(node.parentNode, ps.concat([node]));
}
var style = function style$1(node, prop) {
	return getComputedStyle(node, null).getPropertyValue(prop);
};
var overflow = function overflow$1(node) {
	return style(node, "overflow") + style(node, "overflow-y") + style(node, "overflow-x");
};
var scroll = function scroll$1(node) {
	return regex.test(overflow(node));
};
function getScrollParent(node) {
	if (!(node instanceof HTMLElement || node instanceof SVGElement)) return;
	var ps = parents(node.parentNode, []);
	for (var i = 0; i < ps.length; i += 1) if (scroll(ps[i])) return ps[i];
	return document.scrollingElement || document.documentElement;
}
function _typeof(obj) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj$1) {
		return typeof obj$1;
	} : function(obj$1) {
		return obj$1 && "function" == typeof Symbol && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
	}, _typeof(obj);
}
var props = {
	items: {
		type: Array,
		required: true
	},
	keyField: {
		type: String,
		default: "id"
	},
	direction: {
		type: String,
		default: "vertical",
		validator: function validator(value) {
			return ["vertical", "horizontal"].includes(value);
		}
	},
	listTag: {
		type: String,
		default: "div"
	},
	itemTag: {
		type: String,
		default: "div"
	}
};
function simpleArray() {
	return this.items.length && _typeof(this.items[0]) !== "object";
}
var supportsPassive = false;
if (typeof window !== "undefined") {
	supportsPassive = false;
	try {
		var opts = Object.defineProperty({}, "passive", { get: function get() {
			supportsPassive = true;
		} });
		window.addEventListener("test", null, opts);
	} catch (e) {}
}
var uid = 0;
var script$2$1 = {
	name: "RecycleScroller",
	components: { ResizeObserver: script$2 },
	directives: { ObserveVisibility },
	props: {
		...props,
		itemSize: {
			type: Number,
			default: null
		},
		gridItems: {
			type: Number,
			default: void 0
		},
		itemSecondarySize: {
			type: Number,
			default: void 0
		},
		minItemSize: {
			type: [Number, String],
			default: null
		},
		sizeField: {
			type: String,
			default: "size"
		},
		typeField: {
			type: String,
			default: "type"
		},
		buffer: {
			type: Number,
			default: 200
		},
		pageMode: {
			type: Boolean,
			default: false
		},
		prerender: {
			type: Number,
			default: 0
		},
		emitUpdate: {
			type: Boolean,
			default: false
		},
		updateInterval: {
			type: Number,
			default: 0
		},
		skipHover: {
			type: Boolean,
			default: false
		},
		listTag: {
			type: String,
			default: "div"
		},
		itemTag: {
			type: String,
			default: "div"
		},
		listClass: {
			type: [
				String,
				Object,
				Array
			],
			default: ""
		},
		itemClass: {
			type: [
				String,
				Object,
				Array
			],
			default: ""
		}
	},
	emits: [
		"resize",
		"visible",
		"hidden",
		"update",
		"scroll-start",
		"scroll-end"
	],
	data() {
		return {
			pool: [],
			totalSize: 0,
			ready: false,
			hoverKey: null
		};
	},
	computed: {
		sizes() {
			if (this.itemSize === null) {
				const sizes = { "-1": { accumulator: 0 } };
				const items = this.items;
				const field = this.sizeField;
				const minItemSize = this.minItemSize;
				let computedMinSize = 1e4;
				let accumulator = 0;
				let current;
				for (let i = 0, l = items.length; i < l; i++) {
					current = items[i][field] || minItemSize;
					if (current < computedMinSize) computedMinSize = current;
					accumulator += current;
					sizes[i] = {
						accumulator,
						size: current
					};
				}
				this.$_computedMinItemSize = computedMinSize;
				return sizes;
			}
			return [];
		},
		simpleArray,
		itemIndexByKey() {
			const { keyField, items } = this;
			const result = {};
			for (let i = 0, l = items.length; i < l; i++) result[items[i][keyField]] = i;
			return result;
		}
	},
	watch: {
		items() {
			this.updateVisibleItems(true);
		},
		pageMode() {
			this.applyPageMode();
			this.updateVisibleItems(false);
		},
		sizes: {
			handler() {
				this.updateVisibleItems(false);
			},
			deep: true
		},
		gridItems() {
			this.updateVisibleItems(true);
		},
		itemSecondarySize() {
			this.updateVisibleItems(true);
		}
	},
	created() {
		this.$_startIndex = 0;
		this.$_endIndex = 0;
		this.$_views = /* @__PURE__ */ new Map();
		this.$_unusedViews = /* @__PURE__ */ new Map();
		this.$_scrollDirty = false;
		this.$_lastUpdateScrollPosition = 0;
		if (this.prerender) {
			this.$_prerender = true;
			this.updateVisibleItems(false);
		}
		if (this.gridItems && !this.itemSize) console.error("[vue-recycle-scroller] You must provide an itemSize when using gridItems");
	},
	mounted() {
		this.applyPageMode();
		this.$nextTick(() => {
			this.$_prerender = false;
			this.updateVisibleItems(true);
			this.ready = true;
		});
	},
	activated() {
		const lastPosition = this.$_lastUpdateScrollPosition;
		if (typeof lastPosition === "number") this.$nextTick(() => {
			this.scrollToPosition(lastPosition);
		});
	},
	beforeUnmount() {
		this.removeListeners();
	},
	methods: {
		addView(pool, index, item, key, type) {
			const view = shallowReactive({
				item,
				position: 0,
				nr: markRaw({
					id: uid++,
					index,
					used: true,
					key,
					type
				})
			});
			pool.push(view);
			return view;
		},
		unuseView(view, fake = false) {
			const unusedViews = this.$_unusedViews;
			const type = view.nr.type;
			let unusedPool = unusedViews.get(type);
			if (!unusedPool) {
				unusedPool = [];
				unusedViews.set(type, unusedPool);
			}
			unusedPool.push(view);
			if (!fake) {
				view.nr.used = false;
				view.position = -9999;
			}
		},
		handleResize() {
			this.$emit("resize");
			if (this.ready) this.updateVisibleItems(false);
		},
		handleScroll(event) {
			if (!this.$_scrollDirty) {
				this.$_scrollDirty = true;
				if (this.$_updateTimeout) return;
				const requestUpdate = () => requestAnimationFrame(() => {
					this.$_scrollDirty = false;
					const { continuous } = this.updateVisibleItems(false, true);
					if (!continuous) {
						clearTimeout(this.$_refreshTimout);
						this.$_refreshTimout = setTimeout(this.handleScroll, this.updateInterval + 100);
					}
				});
				requestUpdate();
				if (this.updateInterval) this.$_updateTimeout = setTimeout(() => {
					this.$_updateTimeout = 0;
					if (this.$_scrollDirty) requestUpdate();
				}, this.updateInterval);
			}
		},
		handleVisibilityChange(isVisible, entry) {
			if (this.ready) if (isVisible || entry.boundingClientRect.width !== 0 || entry.boundingClientRect.height !== 0) {
				this.$emit("visible");
				requestAnimationFrame(() => {
					this.updateVisibleItems(false);
				});
			} else this.$emit("hidden");
		},
		updateVisibleItems(checkItem, checkPositionDiff = false) {
			const itemSize = this.itemSize;
			const gridItems = this.gridItems || 1;
			const itemSecondarySize = this.itemSecondarySize || itemSize;
			const minItemSize = this.$_computedMinItemSize;
			const typeField = this.typeField;
			const keyField = this.simpleArray ? null : this.keyField;
			const items = this.items;
			const count = items.length;
			const sizes = this.sizes;
			const views = this.$_views;
			const unusedViews = this.$_unusedViews;
			const pool = this.pool;
			const itemIndexByKey = this.itemIndexByKey;
			let startIndex, endIndex;
			let totalSize;
			let visibleStartIndex, visibleEndIndex;
			if (!count) startIndex = endIndex = visibleStartIndex = visibleEndIndex = totalSize = 0;
			else if (this.$_prerender) {
				startIndex = visibleStartIndex = 0;
				endIndex = visibleEndIndex = Math.min(this.prerender, items.length);
				totalSize = null;
			} else {
				const scroll$1 = this.getScroll();
				if (checkPositionDiff) {
					let positionDiff = scroll$1.start - this.$_lastUpdateScrollPosition;
					if (positionDiff < 0) positionDiff = -positionDiff;
					if (itemSize === null && positionDiff < minItemSize || positionDiff < itemSize) return { continuous: true };
				}
				this.$_lastUpdateScrollPosition = scroll$1.start;
				const buffer = this.buffer;
				scroll$1.start -= buffer;
				scroll$1.end += buffer;
				let beforeSize = 0;
				if (this.$refs.before) {
					beforeSize = this.$refs.before.scrollHeight;
					scroll$1.start -= beforeSize;
				}
				if (this.$refs.after) {
					const afterSize = this.$refs.after.scrollHeight;
					scroll$1.end += afterSize;
				}
				if (itemSize === null) {
					let h$1;
					let a = 0;
					let b = count - 1;
					let i = ~~(count / 2);
					let oldI;
					do {
						oldI = i;
						h$1 = sizes[i].accumulator;
						if (h$1 < scroll$1.start) a = i;
						else if (i < count - 1 && sizes[i + 1].accumulator > scroll$1.start) b = i;
						i = ~~((a + b) / 2);
					} while (i !== oldI);
					i < 0 && (i = 0);
					startIndex = i;
					totalSize = sizes[count - 1].accumulator;
					for (endIndex = i; endIndex < count && sizes[endIndex].accumulator < scroll$1.end; endIndex++);
					if (endIndex === -1) endIndex = items.length - 1;
					else {
						endIndex++;
						endIndex > count && (endIndex = count);
					}
					for (visibleStartIndex = startIndex; visibleStartIndex < count && beforeSize + sizes[visibleStartIndex].accumulator < scroll$1.start; visibleStartIndex++);
					for (visibleEndIndex = visibleStartIndex; visibleEndIndex < count && beforeSize + sizes[visibleEndIndex].accumulator < scroll$1.end; visibleEndIndex++);
				} else {
					startIndex = ~~(scroll$1.start / itemSize * gridItems);
					const remainer = startIndex % gridItems;
					startIndex -= remainer;
					endIndex = Math.ceil(scroll$1.end / itemSize * gridItems);
					visibleStartIndex = Math.max(0, Math.floor((scroll$1.start - beforeSize) / itemSize * gridItems));
					visibleEndIndex = Math.floor((scroll$1.end - beforeSize) / itemSize * gridItems);
					startIndex < 0 && (startIndex = 0);
					endIndex > count && (endIndex = count);
					visibleStartIndex < 0 && (visibleStartIndex = 0);
					visibleEndIndex > count && (visibleEndIndex = count);
					totalSize = Math.ceil(count / gridItems) * itemSize;
				}
			}
			if (endIndex - startIndex > config.itemsLimit) this.itemsLimitError();
			this.totalSize = totalSize;
			let view;
			const continuous = startIndex <= this.$_endIndex && endIndex >= this.$_startIndex;
			if (continuous) for (let i = 0, l = pool.length; i < l; i++) {
				view = pool[i];
				if (view.nr.used) {
					if (checkItem) view.nr.index = itemIndexByKey[view.item[keyField]];
					if (view.nr.index == null || view.nr.index < startIndex || view.nr.index >= endIndex) this.unuseView(view);
				}
			}
			const unusedIndex = continuous ? null : /* @__PURE__ */ new Map();
			let item, type;
			let v;
			for (let i = startIndex; i < endIndex; i++) {
				item = items[i];
				const key = keyField ? item[keyField] : item;
				if (key == null) throw new Error(`Key is ${key} on item (keyField is '${keyField}')`);
				view = views.get(key);
				if (!itemSize && !sizes[i].size) {
					if (view) this.unuseView(view);
					continue;
				}
				type = item[typeField];
				let unusedPool = unusedViews.get(type);
				let newlyUsedView = false;
				if (!view) {
					if (continuous) if (unusedPool && unusedPool.length) view = unusedPool.pop();
					else view = this.addView(pool, i, item, key, type);
					else {
						v = unusedIndex.get(type) || 0;
						if (!unusedPool || v >= unusedPool.length) {
							view = this.addView(pool, i, item, key, type);
							this.unuseView(view, true);
							unusedPool = unusedViews.get(type);
						}
						view = unusedPool[v];
						unusedIndex.set(type, v + 1);
					}
					views.delete(view.nr.key);
					view.nr.used = true;
					view.nr.index = i;
					view.nr.key = key;
					view.nr.type = type;
					views.set(key, view);
					newlyUsedView = true;
				} else if (!view.nr.used) {
					view.nr.used = true;
					newlyUsedView = true;
					if (unusedPool) {
						const index = unusedPool.indexOf(view);
						if (index !== -1) unusedPool.splice(index, 1);
					}
				}
				view.item = item;
				if (newlyUsedView) {
					if (i === items.length - 1) this.$emit("scroll-end");
					if (i === 0) this.$emit("scroll-start");
				}
				if (itemSize === null) {
					view.position = sizes[i - 1].accumulator;
					view.offset = 0;
				} else {
					view.position = Math.floor(i / gridItems) * itemSize;
					view.offset = i % gridItems * itemSecondarySize;
				}
			}
			this.$_startIndex = startIndex;
			this.$_endIndex = endIndex;
			if (this.emitUpdate) this.$emit("update", startIndex, endIndex, visibleStartIndex, visibleEndIndex);
			clearTimeout(this.$_sortTimer);
			this.$_sortTimer = setTimeout(this.sortViews, this.updateInterval + 300);
			return { continuous };
		},
		getListenerTarget() {
			let target = getScrollParent(this.$el);
			if (window.document && (target === window.document.documentElement || target === window.document.body)) target = window;
			return target;
		},
		getScroll() {
			const { $el: el, direction } = this;
			const isVertical = direction === "vertical";
			let scrollState;
			if (this.pageMode) {
				const bounds = el.getBoundingClientRect();
				const boundsSize = isVertical ? bounds.height : bounds.width;
				let start = -(isVertical ? bounds.top : bounds.left);
				let size = isVertical ? window.innerHeight : window.innerWidth;
				if (start < 0) {
					size += start;
					start = 0;
				}
				if (start + size > boundsSize) size = boundsSize - start;
				scrollState = {
					start,
					end: start + size
				};
			} else if (isVertical) scrollState = {
				start: el.scrollTop,
				end: el.scrollTop + el.clientHeight
			};
			else scrollState = {
				start: el.scrollLeft,
				end: el.scrollLeft + el.clientWidth
			};
			return scrollState;
		},
		applyPageMode() {
			if (this.pageMode) this.addListeners();
			else this.removeListeners();
		},
		addListeners() {
			this.listenerTarget = this.getListenerTarget();
			this.listenerTarget.addEventListener("scroll", this.handleScroll, supportsPassive ? { passive: true } : false);
			this.listenerTarget.addEventListener("resize", this.handleResize);
		},
		removeListeners() {
			if (!this.listenerTarget) return;
			this.listenerTarget.removeEventListener("scroll", this.handleScroll);
			this.listenerTarget.removeEventListener("resize", this.handleResize);
			this.listenerTarget = null;
		},
		scrollToItem(index) {
			let scroll$1;
			const gridItems = this.gridItems || 1;
			if (this.itemSize === null) scroll$1 = index > 0 ? this.sizes[index - 1].accumulator : 0;
			else scroll$1 = Math.floor(index / gridItems) * this.itemSize;
			this.scrollToPosition(scroll$1);
		},
		scrollToPosition(position) {
			const direction = this.direction === "vertical" ? {
				scroll: "scrollTop",
				start: "top"
			} : {
				scroll: "scrollLeft",
				start: "left"
			};
			let viewport;
			let scrollDirection;
			let scrollDistance;
			if (this.pageMode) {
				const viewportEl = getScrollParent(this.$el);
				const scrollTop = viewportEl.tagName === "HTML" ? 0 : viewportEl[direction.scroll];
				const bounds = viewportEl.getBoundingClientRect();
				const scrollerPosition = this.$el.getBoundingClientRect()[direction.start] - bounds[direction.start];
				viewport = viewportEl;
				scrollDirection = direction.scroll;
				scrollDistance = position + scrollTop + scrollerPosition;
			} else {
				viewport = this.$el;
				scrollDirection = direction.scroll;
				scrollDistance = position;
			}
			viewport[scrollDirection] = scrollDistance;
		},
		itemsLimitError() {
			setTimeout(() => {
				console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", this.$el);
				console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.");
			});
			throw new Error("Rendered items limit reached");
		},
		sortViews() {
			this.pool.sort((viewA, viewB) => viewA.nr.index - viewB.nr.index);
		}
	}
};
var _hoisted_1 = {
	key: 0,
	ref: "before",
	class: "vue-recycle-scroller__slot"
};
var _hoisted_2 = {
	key: 1,
	ref: "after",
	class: "vue-recycle-scroller__slot"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_ResizeObserver = resolveComponent("ResizeObserver");
	const _directive_observe_visibility = resolveDirective("observe-visibility");
	return withDirectives((openBlock(), createElementBlock("div", {
		class: normalizeClass(["vue-recycle-scroller", {
			ready: $data.ready,
			"page-mode": $props.pageMode,
			[`direction-${_ctx.direction}`]: true
		}]),
		onScrollPassive: _cache[0] || (_cache[0] = (...args) => $options.handleScroll && $options.handleScroll(...args))
	}, [
		_ctx.$slots.before ? (openBlock(), createElementBlock("div", _hoisted_1, [renderSlot(_ctx.$slots, "before")], 512)) : createCommentVNode("v-if", true),
		(openBlock(), createBlock(resolveDynamicComponent($props.listTag), {
			ref: "wrapper",
			style: normalizeStyle({ [_ctx.direction === "vertical" ? "minHeight" : "minWidth"]: $data.totalSize + "px" }),
			class: normalizeClass(["vue-recycle-scroller__item-wrapper", $props.listClass])
		}, {
			default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList($data.pool, (view) => {
				return openBlock(), createBlock(resolveDynamicComponent($props.itemTag), mergeProps({
					key: view.nr.id,
					style: $data.ready ? {
						transform: `translate${_ctx.direction === "vertical" ? "Y" : "X"}(${view.position}px) translate${_ctx.direction === "vertical" ? "X" : "Y"}(${view.offset}px)`,
						width: $props.gridItems ? `${_ctx.direction === "vertical" ? $props.itemSecondarySize || $props.itemSize : $props.itemSize}px` : void 0,
						height: $props.gridItems ? `${_ctx.direction === "horizontal" ? $props.itemSecondarySize || $props.itemSize : $props.itemSize}px` : void 0
					} : null,
					class: ["vue-recycle-scroller__item-view", [$props.itemClass, { hover: !$props.skipHover && $data.hoverKey === view.nr.key }]]
				}, toHandlers($props.skipHover ? {} : {
					mouseenter: () => {
						$data.hoverKey = view.nr.key;
					},
					mouseleave: () => {
						$data.hoverKey = null;
					}
				})), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
						item: view.item,
						index: view.nr.index,
						active: view.nr.used
					})]),
					_: 2
				}, 1040, ["style", "class"]);
			}), 128)), renderSlot(_ctx.$slots, "empty")]),
			_: 3
		}, 8, ["style", "class"])),
		_ctx.$slots.after ? (openBlock(), createElementBlock("div", _hoisted_2, [renderSlot(_ctx.$slots, "after")], 512)) : createCommentVNode("v-if", true),
		createVNode(_component_ResizeObserver, { onNotify: $options.handleResize }, null, 8, ["onNotify"])
	], 34)), [[_directive_observe_visibility, $options.handleVisibilityChange]]);
}
script$2$1.render = render$1;
script$2$1.__file = "src/components/RecycleScroller.vue";
var script$1 = {
	name: "DynamicScroller",
	components: { RecycleScroller: script$2$1 },
	provide() {
		if (typeof ResizeObserver !== "undefined") this.$_resizeObserver = new ResizeObserver((entries) => {
			requestAnimationFrame(() => {
				if (!Array.isArray(entries)) return;
				for (const entry of entries) if (entry.target && entry.target.$_vs_onResize) {
					let width, height;
					if (entry.borderBoxSize) {
						const resizeObserverSize = entry.borderBoxSize[0];
						width = resizeObserverSize.inlineSize;
						height = resizeObserverSize.blockSize;
					} else {
						width = entry.contentRect.width;
						height = entry.contentRect.height;
					}
					entry.target.$_vs_onResize(entry.target.$_vs_id, width, height);
				}
			});
		});
		return {
			vscrollData: this.vscrollData,
			vscrollParent: this,
			vscrollResizeObserver: this.$_resizeObserver
		};
	},
	inheritAttrs: false,
	props: {
		...props,
		minItemSize: {
			type: [Number, String],
			required: true
		}
	},
	emits: ["resize", "visible"],
	data() {
		return { vscrollData: {
			active: true,
			sizes: {},
			keyField: this.keyField,
			simpleArray: false
		} };
	},
	computed: {
		simpleArray,
		itemsWithSize() {
			const result = [];
			const { items, keyField, simpleArray: simpleArray$1 } = this;
			const sizes = this.vscrollData.sizes;
			const l = items.length;
			for (let i = 0; i < l; i++) {
				const item = items[i];
				const id = simpleArray$1 ? i : item[keyField];
				let size = sizes[id];
				if (typeof size === "undefined" && !this.$_undefinedMap[id]) size = 0;
				result.push({
					item,
					id,
					size
				});
			}
			return result;
		}
	},
	watch: {
		items() {
			this.forceUpdate();
		},
		simpleArray: {
			handler(value) {
				this.vscrollData.simpleArray = value;
			},
			immediate: true
		},
		direction(value) {
			this.forceUpdate(true);
		},
		itemsWithSize(next, prev) {
			const scrollTop = this.$el.scrollTop;
			let prevActiveTop = 0;
			let activeTop = 0;
			const length = Math.min(next.length, prev.length);
			for (let i = 0; i < length; i++) {
				if (prevActiveTop >= scrollTop) break;
				prevActiveTop += prev[i].size || this.minItemSize;
				activeTop += next[i].size || this.minItemSize;
			}
			const offset = activeTop - prevActiveTop;
			if (offset === 0) return;
			this.$el.scrollTop += offset;
		}
	},
	beforeCreate() {
		this.$_updates = [];
		this.$_undefinedSizes = 0;
		this.$_undefinedMap = {};
		this.$_events = mitt_es_default();
	},
	activated() {
		this.vscrollData.active = true;
	},
	deactivated() {
		this.vscrollData.active = false;
	},
	unmounted() {
		this.$_events.all.clear();
	},
	methods: {
		onScrollerResize() {
			if (this.$refs.scroller) this.forceUpdate();
			this.$emit("resize");
		},
		onScrollerVisible() {
			this.$_events.emit("vscroll:update", { force: false });
			this.$emit("visible");
		},
		forceUpdate(clear = false) {
			if (clear || this.simpleArray) this.vscrollData.sizes = {};
			this.$_events.emit("vscroll:update", { force: true });
		},
		scrollToItem(index) {
			const scroller = this.$refs.scroller;
			if (scroller) scroller.scrollToItem(index);
		},
		getItemSize(item, index = void 0) {
			const id = this.simpleArray ? index != null ? index : this.items.indexOf(item) : item[this.keyField];
			return this.vscrollData.sizes[id] || 0;
		},
		scrollToBottom() {
			if (this.$_scrollingToBottom) return;
			this.$_scrollingToBottom = true;
			const el = this.$el;
			this.$nextTick(() => {
				el.scrollTop = el.scrollHeight + 5e3;
				const cb = () => {
					el.scrollTop = el.scrollHeight + 5e3;
					requestAnimationFrame(() => {
						el.scrollTop = el.scrollHeight + 5e3;
						if (this.$_undefinedSizes === 0) this.$_scrollingToBottom = false;
						else requestAnimationFrame(cb);
					});
				};
				requestAnimationFrame(cb);
			});
		}
	}
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RecycleScroller = resolveComponent("RecycleScroller");
	return openBlock(), createBlock(_component_RecycleScroller, mergeProps({
		ref: "scroller",
		items: $options.itemsWithSize,
		"min-item-size": $props.minItemSize,
		direction: _ctx.direction,
		"key-field": "id",
		"list-tag": _ctx.listTag,
		"item-tag": _ctx.itemTag
	}, _ctx.$attrs, {
		onResize: $options.onScrollerResize,
		onVisible: $options.onScrollerVisible
	}), {
		default: withCtx(({ item: itemWithSize, index, active }) => [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({
			item: itemWithSize.item,
			index,
			active,
			itemWithSize
		})))]),
		before: withCtx(() => [renderSlot(_ctx.$slots, "before")]),
		after: withCtx(() => [renderSlot(_ctx.$slots, "after")]),
		empty: withCtx(() => [renderSlot(_ctx.$slots, "empty")]),
		_: 3
	}, 16, [
		"items",
		"min-item-size",
		"direction",
		"list-tag",
		"item-tag",
		"onResize",
		"onVisible"
	]);
}
script$1.render = render;
script$1.__file = "src/components/DynamicScroller.vue";
var script = {
	name: "DynamicScrollerItem",
	inject: [
		"vscrollData",
		"vscrollParent",
		"vscrollResizeObserver"
	],
	props: {
		item: { required: true },
		watchData: {
			type: Boolean,
			default: false
		},
		active: {
			type: Boolean,
			required: true
		},
		index: {
			type: Number,
			default: void 0
		},
		sizeDependencies: {
			type: [Array, Object],
			default: null
		},
		emitResize: {
			type: Boolean,
			default: false
		},
		tag: {
			type: String,
			default: "div"
		}
	},
	emits: ["resize"],
	computed: {
		id() {
			if (this.vscrollData.simpleArray) return this.index;
			if (this.vscrollData.keyField in this.item) return this.item[this.vscrollData.keyField];
			throw new Error(`keyField '${this.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`);
		},
		size() {
			return this.vscrollData.sizes[this.id] || 0;
		},
		finalActive() {
			return this.active && this.vscrollData.active;
		}
	},
	watch: {
		watchData: "updateWatchData",
		id(value, oldValue) {
			this.$el.$_vs_id = this.id;
			if (!this.size) this.onDataUpdate();
			if (this.$_sizeObserved) {
				const oldSize = this.vscrollData.sizes[oldValue];
				const size = this.vscrollData.sizes[value];
				if (oldSize != null && oldSize !== size) this.applySize(oldSize);
			}
		},
		finalActive(value) {
			if (!this.size) {
				if (value) {
					if (!this.vscrollParent.$_undefinedMap[this.id]) {
						this.vscrollParent.$_undefinedSizes++;
						this.vscrollParent.$_undefinedMap[this.id] = true;
					}
				} else if (this.vscrollParent.$_undefinedMap[this.id]) {
					this.vscrollParent.$_undefinedSizes--;
					this.vscrollParent.$_undefinedMap[this.id] = false;
				}
			}
			if (this.vscrollResizeObserver) if (value) this.observeSize();
			else this.unobserveSize();
			else if (value && this.$_pendingVScrollUpdate === this.id) this.updateSize();
		}
	},
	created() {
		if (this.$isServer) return;
		this.$_forceNextVScrollUpdate = null;
		this.updateWatchData();
		if (!this.vscrollResizeObserver) {
			for (const k in this.sizeDependencies) this.$watch(() => this.sizeDependencies[k], this.onDataUpdate);
			this.vscrollParent.$_events.on("vscroll:update", this.onVscrollUpdate);
		}
	},
	mounted() {
		if (this.finalActive) {
			this.updateSize();
			this.observeSize();
		}
	},
	beforeUnmount() {
		this.vscrollParent.$_events.off("vscroll:update", this.onVscrollUpdate);
		this.unobserveSize();
	},
	methods: {
		updateSize() {
			if (this.finalActive) {
				if (this.$_pendingSizeUpdate !== this.id) {
					this.$_pendingSizeUpdate = this.id;
					this.$_forceNextVScrollUpdate = null;
					this.$_pendingVScrollUpdate = null;
					this.computeSize(this.id);
				}
			} else this.$_forceNextVScrollUpdate = this.id;
		},
		updateWatchData() {
			if (this.watchData && !this.vscrollResizeObserver) this.$_watchData = this.$watch("item", () => {
				this.onDataUpdate();
			}, { deep: true });
			else if (this.$_watchData) {
				this.$_watchData();
				this.$_watchData = null;
			}
		},
		onVscrollUpdate({ force }) {
			if (!this.finalActive && force) this.$_pendingVScrollUpdate = this.id;
			if (this.$_forceNextVScrollUpdate === this.id || force || !this.size) this.updateSize();
		},
		onDataUpdate() {
			this.updateSize();
		},
		computeSize(id) {
			this.$nextTick(() => {
				if (this.id === id) {
					const width = this.$el.offsetWidth;
					const height = this.$el.offsetHeight;
					this.applyWidthHeight(width, height);
				}
				this.$_pendingSizeUpdate = null;
			});
		},
		applyWidthHeight(width, height) {
			const size = ~~(this.vscrollParent.direction === "vertical" ? height : width);
			if (size && this.size !== size) this.applySize(size);
		},
		applySize(size) {
			if (this.vscrollParent.$_undefinedMap[this.id]) {
				this.vscrollParent.$_undefinedSizes--;
				this.vscrollParent.$_undefinedMap[this.id] = void 0;
			}
			this.vscrollData.sizes[this.id] = size;
			if (this.emitResize) this.$emit("resize", this.id);
		},
		observeSize() {
			if (!this.vscrollResizeObserver) return;
			if (this.$_sizeObserved) return;
			this.vscrollResizeObserver.observe(this.$el);
			this.$el.$_vs_id = this.id;
			this.$el.$_vs_onResize = this.onResize;
			this.$_sizeObserved = true;
		},
		unobserveSize() {
			if (!this.vscrollResizeObserver) return;
			if (!this.$_sizeObserved) return;
			this.vscrollResizeObserver.unobserve(this.$el);
			this.$el.$_vs_onResize = void 0;
			this.$_sizeObserved = false;
		},
		onResize(id, width, height) {
			if (this.id === id) this.applyWidthHeight(width, height);
		}
	},
	render() {
		return h(this.tag, this.$slots.default());
	}
};
script.__file = "src/components/DynamicScrollerItem.vue";
function getParentNodes() {
	const activeNode = useNDVStore().activeNode;
	const { workflowObject, getNodeByName } = useWorkflowsStore();
	if (!activeNode || !workflowObject) return [];
	return workflowObject.getParentNodesByDepth(activeNode?.name).filter(({ name }, i, nodes) => {
		return name !== activeNode.name && nodes.findIndex((node) => node.name === name) === i;
	}).map((n) => getNodeByName(n.name)).filter((n) => n !== null);
}
function getSchemas() {
	const parentNodes = getParentNodes();
	const parentNodesNames = parentNodes.map((node) => node?.name);
	const { getSchemaForExecutionData, getInputDataWithPinned } = useDataSchema();
	const parentNodesSchemas = parentNodes.map((node) => {
		const inputData = getInputDataWithPinned(node);
		return {
			nodeName: node?.name || "",
			schema: getSchemaForExecutionData(executionDataToJson(inputData), false)
		};
	}).filter((node) => node.schema?.value.length > 0);
	return {
		parentNodesNames,
		inputSchema: parentNodesSchemas.shift(),
		parentNodesSchemas
	};
}
var estimateNumberOfTokens = (item, averageTokenLength) => {
	if (typeof item === "object") return Math.ceil(JSON.stringify(item).length / averageTokenLength);
	return 0;
};
var calculateRemainingTokens = (error) => {
	const tokens = error.message.match(/\d+/g);
	if (!tokens || tokens.length < 2) throw error;
	const maxTokens = parseInt(tokens[0], 10);
	return parseInt(tokens[1], 10) - maxTokens;
};
var trimParentNodesSchema = (payload, remainingTokensToReduce, averageTokenLength) => {
	let parentNodesTokenCount = estimateNumberOfTokens(payload.context.schema, averageTokenLength);
	if (remainingTokensToReduce > parentNodesTokenCount) {
		remainingTokensToReduce -= parentNodesTokenCount;
		payload.context.schema = [];
	}
	if (payload.context.schema.length) {
		const nodes = [...payload.context.schema];
		for (let nodeIndex = 0; nodeIndex < nodes.length; nodeIndex++) {
			if (payload.question.includes(nodes[nodeIndex].nodeName)) continue;
			const nodeTokens = estimateNumberOfTokens(nodes[nodeIndex], averageTokenLength);
			remainingTokensToReduce -= nodeTokens;
			parentNodesTokenCount -= nodeTokens;
			payload.context.schema.splice(nodeIndex, 1);
			if (remainingTokensToReduce <= 0) break;
		}
	}
	return [remainingTokensToReduce, parentNodesTokenCount];
};
var trimInputSchemaProperties = (payload, remainingTokensToReduce, averageTokenLength, parentNodesTokenCount) => {
	if (remainingTokensToReduce <= 0) return remainingTokensToReduce;
	if (Array.isArray(payload.context.inputSchema.schema.value)) {
		const props$1 = [...payload.context.inputSchema.schema.value];
		for (let index = 0; index < props$1.length; index++) {
			const key = props$1[index].key;
			if (key && payload.question.includes(key)) continue;
			const propTokens = estimateNumberOfTokens(props$1[index], averageTokenLength);
			remainingTokensToReduce -= propTokens;
			payload.context.inputSchema.schema.value.splice(index, 1);
			if (remainingTokensToReduce <= 0) break;
		}
	}
	if (remainingTokensToReduce > 0) {
		payload.context.schema = [];
		remainingTokensToReduce -= parentNodesTokenCount;
	}
	return remainingTokensToReduce;
};
function reducePayloadSizeOrThrow(payload, error, averageTokenLength = 4) {
	let remainingTokensToReduce = calculateRemainingTokens(error);
	const [remaining, parentNodesTokenCount] = trimParentNodesSchema(payload, remainingTokensToReduce, averageTokenLength);
	remainingTokensToReduce = remaining;
	remainingTokensToReduce = trimInputSchemaProperties(payload, remainingTokensToReduce, averageTokenLength, parentNodesTokenCount);
	if (remainingTokensToReduce > 0) throw error;
}
async function generateCodeForAiTransform(prompt$1, path, retries = 1) {
	const schemas = getSchemas();
	const payload = {
		question: prompt$1,
		context: {
			schema: schemas.parentNodesSchemas,
			inputSchema: schemas.inputSchema,
			ndvPushRef: useNDVStore().pushRef,
			pushRef: useRootStore().pushRef
		},
		forNode: "transform"
	};
	let value;
	if (useSettingsStore().isAskAiEnabled) {
		const { restApiContext } = useRootStore();
		let code = "";
		while (retries > 0) try {
			const { code: generatedCode } = await generateCodeForPrompt(restApiContext, payload);
			code = generatedCode;
			break;
		} catch (e) {
			if (typeof e.message === "string" && e.message.includes("maximum context length")) {
				reducePayloadSizeOrThrow(payload, e);
				continue;
			}
			retries--;
			if (!retries) throw e;
		}
		value = code;
	} else throw new ApplicationError("AI code generation is not enabled");
	if (value === void 0) return;
	return {
		name: path,
		value: await gu(String(value), {
			parser: "babel",
			plugins: [Ln, estree_exports]
		})
	};
}
function splitText(textarea, textareaRowsData) {
	if (textareaRowsData) return textareaRowsData;
	const rows = [];
	const linesToRowsMap = [];
	const style$1 = window.getComputedStyle(textarea);
	const padding = parseFloat(style$1.paddingLeft) + parseFloat(style$1.paddingRight);
	const border = parseFloat(style$1.borderLeftWidth) + parseFloat(style$1.borderRightWidth);
	const textareaWidth = textarea.clientWidth - padding - border;
	const context = createTextContext(style$1);
	const lines = textarea.value.split("\n");
	lines.forEach((_) => {
		linesToRowsMap.push([]);
	});
	lines.forEach((line, index) => {
		if (line === "") {
			rows.push(line);
			linesToRowsMap[index].push(rows.length - 1);
			return;
		}
		let currentLine = "";
		line.split(/(\s+)/).forEach((word) => {
			const testLine = currentLine + word;
			if (context.measureText(testLine).width <= textareaWidth) currentLine = testLine;
			else {
				rows.push(currentLine.trimEnd());
				linesToRowsMap[index].push(rows.length - 1);
				currentLine = word;
			}
		});
		if (currentLine) {
			rows.push(currentLine.trimEnd());
			linesToRowsMap[index].push(rows.length - 1);
		}
	});
	return {
		rows,
		linesToRowsMap
	};
}
function createTextContext(style$1) {
	const context = document.createElement("canvas").getContext("2d");
	context.font = `${style$1.fontWeight} ${style$1.fontSize} ${style$1.fontFamily}`;
	return context;
}
var getRowIndex = (textareaY, lineHeight) => {
	const rowHeight = parseInt(lineHeight, 10);
	const snapPosition = textareaY - rowHeight / 2 - 1;
	return Math.floor(snapPosition / rowHeight);
};
var getColumnIndex = (rowText, textareaX, font) => {
	const span = document.createElement("span");
	span.style.font = font;
	span.style.visibility = "hidden";
	span.style.position = "absolute";
	span.style.whiteSpace = "pre";
	document.body.appendChild(span);
	let left = 0;
	let right = rowText.length;
	let col = 0;
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		span.textContent = rowText.substring(0, mid);
		if (span.getBoundingClientRect().width <= textareaX) {
			col = mid;
			left = mid + 1;
		} else right = mid - 1;
	}
	document.body.removeChild(span);
	return rowText.length === col ? col : col - 1;
};
function getUpdatedTextareaValue(event, textareaRowsData, value) {
	const textarea = event.target;
	const rect = textarea.getBoundingClientRect();
	const textareaX = event.clientX - rect.left;
	const textareaY = event.clientY - rect.top;
	const { lineHeight, font } = window.getComputedStyle(textarea);
	const rowIndex = getRowIndex(textareaY, lineHeight);
	const rowsData = splitText(textarea, textareaRowsData);
	let newText = value;
	if (rowsData.rows[rowIndex] === void 0) newText = `${textarea.value} ${value}`;
	const { rows, linesToRowsMap } = rowsData;
	const rowText = rows[rowIndex];
	if (rowText === "") rows[rowIndex] = value;
	else {
		const col = getColumnIndex(rowText, textareaX, font);
		rows[rowIndex] = [
			rows[rowIndex].slice(0, col).trim(),
			value,
			rows[rowIndex].slice(col).trim()
		].join(" ").trim();
	}
	newText = linesToRowsMap.map((lineMap) => {
		return lineMap.map((index) => rows[index]).join(" ");
	}).join("\n");
	return newText;
}
function getTextareaCursorPosition(textarea, textareaRowsData, clientX, clientY) {
	const rect = textarea.getBoundingClientRect();
	const textareaX = clientX - rect.left;
	const textareaY = clientY - rect.top;
	const { lineHeight, font } = window.getComputedStyle(textarea);
	const rowIndex = getRowIndex(textareaY, lineHeight);
	const { rows } = splitText(textarea, textareaRowsData);
	if (rowIndex < 0 || rowIndex >= rows.length) return textarea.value.length;
	const rowText = rows[rowIndex];
	const col = getColumnIndex(rowText, textareaX, font);
	return rows.slice(0, rowIndex).reduce((acc, curr) => acc + curr.length + 1, 0) + col;
}
var NODE_TEST_STEP_POPUP_COUNT_KEY = "N8N_NODE_TEST_STEP_POPUP_COUNT";
var MAX_POPUP_COUNT = 10;
var POPUP_UPDATE_DELAY = 3e3;
var NodeExecuteButton_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "NodeExecuteButton",
	props: {
		nodeName: {},
		telemetrySource: {},
		disabled: {
			type: Boolean,
			default: false
		},
		label: {},
		type: {},
		size: {},
		icon: {},
		square: {
			type: Boolean,
			default: false
		},
		transparent: {
			type: Boolean,
			default: false
		},
		hideIcon: { type: Boolean },
		hideLabel: { type: Boolean },
		tooltip: {},
		tooltipPlacement: {},
		showLoadingSpinner: {
			type: Boolean,
			default: true
		}
	},
	emits: [
		"stopExecution",
		"execute",
		"valueChanged"
	],
	setup(__props, { emit: __emit }) {
		const props$1 = __props;
		const emit = __emit;
		const slots = useSlots();
		const lastPopupCountUpdate = ref(0);
		const codeGenerationInProgress = ref(false);
		const { runWorkflow, stopCurrentExecution } = useRunWorkflow({ router: useRouter() });
		const workflowsStore = useWorkflowsStore();
		const workflowState = injectWorkflowState();
		const externalHooks = useExternalHooks();
		const toast = useToast();
		const ndvStore = useNDVStore();
		const nodeTypesStore = useNodeTypesStore();
		const i18n = useI18n();
		const message = useMessage();
		const telemetry = useTelemetry();
		const uiStore = useUIStore();
		const node = computed(() => workflowsStore.getNodeByName(props$1.nodeName));
		const pinnedData = usePinnedData(node);
		const nodeType = computed(() => {
			return node.value ? nodeTypesStore.getNodeType(node.value.type, node.value.typeVersion) : null;
		});
		const isNodeRunning = computed(() => {
			if (!workflowsStore.isWorkflowRunning || codeGenerationInProgress.value) return false;
			const triggeredNode = workflowsStore.executedNode;
			return workflowState.executingNode.isNodeExecuting(node.value?.name ?? "") || triggeredNode === node.value?.name;
		});
		const isTriggerNode = computed(() => {
			return node.value ? nodeTypesStore.isTriggerNode(node.value.type) : false;
		});
		const isManualTriggerNode = computed(() => nodeType.value ? nodeType.value.name === MANUAL_TRIGGER_NODE_TYPE : false);
		const isChatNode = computed(() => nodeType.value ? nodeType.value.name === CHAT_TRIGGER_NODE_TYPE : false);
		const isChatChild = computed(() => workflowsStore.checkIfNodeHasChatParent(props$1.nodeName));
		const isFormTriggerNode = computed(() => nodeType.value ? nodeType.value.name === FORM_TRIGGER_NODE_TYPE : false);
		const isPollingTypeNode = computed(() => !!nodeType.value?.polling);
		const isScheduleTrigger = computed(() => !!nodeType.value?.group.includes("schedule"));
		const isWebhookNode = computed(() => nodeType.value ? nodeType.value.name === WEBHOOK_NODE_TYPE : false);
		const isListeningForEvents = computed(() => {
			const waitingOnWebhook = workflowsStore.executionWaitingForWebhook;
			const executedNode = workflowsStore.executedNode;
			return !!node.value && !node.value.disabled && isTriggerNode.value && waitingOnWebhook && (!executedNode || executedNode === props$1.nodeName);
		});
		const isListeningForWorkflowEvents = computed(() => {
			return isNodeRunning.value && isTriggerNode.value && !isScheduleTrigger.value && !isManualTriggerNode.value;
		});
		const hasIssues = computed(() => Boolean(node.value?.issues && (node.value.issues.parameters || node.value.issues.credentials)));
		const disabledHint = computed(() => {
			if (isListeningForEvents.value) return "";
			if (codeGenerationInProgress.value) return i18n.baseText("ndv.execute.generatingCode");
			if (node?.value?.disabled) return i18n.baseText("ndv.execute.nodeIsDisabled");
			if (isTriggerNode.value && hasIssues.value) {
				const activeNode = ndvStore.activeNode;
				if (activeNode && activeNode.name !== props$1.nodeName) return i18n.baseText("ndv.execute.fixPrevious");
				return i18n.baseText("ndv.execute.requiredFieldsMissing");
			}
			if (workflowsStore.isWorkflowRunning && !isNodeRunning.value) return i18n.baseText("ndv.execute.workflowAlreadyRunning");
			return "";
		});
		const tooltipText = computed(() => {
			if (shouldGenerateCode.value) return i18n.baseText("ndv.execute.generateCodeAndTestNode.description");
			if (disabledHint.value) return disabledHint.value;
			if (props$1.tooltip && !isLoading.value && testStepButtonPopupCount() < MAX_POPUP_COUNT) return props$1.tooltip;
			return "";
		});
		const buttonLabel = computed(() => {
			if (props$1.hideLabel) return "";
			if (isListeningForEvents.value || isListeningForWorkflowEvents.value) return i18n.baseText("ndv.execute.stopListening");
			if (props$1.label) return props$1.label;
			if (isChatNode.value) return i18n.baseText("ndv.execute.testChat");
			if (isWebhookNode.value) return i18n.baseText("ndv.execute.listenForTestEvent");
			if (isFormTriggerNode.value) return i18n.baseText("ndv.execute.testStep");
			if (isPollingTypeNode.value || nodeType.value?.mockManualExecution) return i18n.baseText("ndv.execute.fetchEvent");
			return i18n.baseText("ndv.execute.testNode");
		});
		const isLoading = computed(() => codeGenerationInProgress.value || isNodeRunning.value && !isListeningForEvents.value && !isListeningForWorkflowEvents.value);
		const buttonIcon = computed(() => {
			if (props$1.icon) return props$1.icon;
			if (shouldGenerateCode.value) return "terminal";
			if (!isListeningForEvents.value && !props$1.hideIcon) return "flask-conical";
		});
		const shouldGenerateCode = computed(() => {
			if (node.value?.type !== "n8n-nodes-base.aiTransform") return false;
			if (!node.value?.parameters?.instructions) return false;
			if (!node.value?.parameters?.jsCode) return true;
			if (node.value?.parameters["codeGeneratedForPrompt"] && (node.value?.parameters?.instructions).trim() !== (node.value?.parameters?.["codeGeneratedForPrompt"]).trim()) return true;
			return false;
		});
		async function stopWaitingForWebhook() {
			try {
				await workflowsStore.removeTestWebhook(workflowsStore.workflowId);
			} catch (error) {
				toast.showError(error, "Error stopping webhook");
			}
		}
		function testStepButtonPopupCount() {
			return Number(localStorage.getItem(NODE_TEST_STEP_POPUP_COUNT_KEY));
		}
		function onMouseOver() {
			const count = testStepButtonPopupCount();
			if (count < MAX_POPUP_COUNT && !disabledHint.value && tooltipText.value) {
				const now = Date.now();
				if (!lastPopupCountUpdate.value || now - lastPopupCountUpdate.value >= POPUP_UPDATE_DELAY) {
					localStorage.setItem(NODE_TEST_STEP_POPUP_COUNT_KEY, `${count + 1}`);
					lastPopupCountUpdate.value = now;
				}
			}
		}
		async function onClick() {
			if (shouldGenerateCode.value) {
				codeGenerationInProgress.value = true;
				try {
					toast.showMessage({
						title: i18n.baseText("ndv.execute.generateCode.title"),
						message: i18n.baseText("ndv.execute.generateCode.message", { interpolate: { nodeName: node.value?.name } }),
						type: "success"
					});
					const prompt$1 = node.value?.parameters?.instructions;
					const updateInformation = await generateCodeForAiTransform(prompt$1, `parameters.${AI_TRANSFORM_JS_CODE}`, 5);
					if (!updateInformation) return;
					emit("valueChanged", updateInformation);
					emit("valueChanged", {
						name: `parameters.${AI_TRANSFORM_CODE_GENERATED_FOR_PROMPT}`,
						value: prompt$1
					});
					useTelemetry().trackAiTransform("generationFinished", {
						prompt: prompt$1,
						code: updateInformation.value
					});
				} catch (error) {
					useTelemetry().trackAiTransform("generationFinished", {
						prompt,
						code: "",
						hasError: true
					});
					toast.showMessage({
						type: "error",
						title: i18n.baseText("codeNodeEditor.askAi.generationFailed"),
						message: error.message
					});
				}
				codeGenerationInProgress.value = false;
			}
			if (isChatNode.value || isChatChild.value && ndvStore.isInputPanelEmpty) {
				ndvStore.unsetActiveNodeName();
				workflowsStore.chatPartialExecutionDestinationNode = props$1.nodeName;
				nodeViewEventBus.emit("openChat");
			} else if (isListeningForEvents.value) await stopWaitingForWebhook();
			else if (isListeningForWorkflowEvents.value) {
				await stopCurrentExecution();
				emit("stopExecution");
			} else {
				let shouldUnpinAndExecute = false;
				if (pinnedData.hasData.value) {
					shouldUnpinAndExecute = await message.confirm(i18n.baseText("ndv.pinData.unpinAndExecute.description"), i18n.baseText("ndv.pinData.unpinAndExecute.title"), {
						confirmButtonText: i18n.baseText("ndv.pinData.unpinAndExecute.confirm"),
						cancelButtonText: i18n.baseText("ndv.pinData.unpinAndExecute.cancel")
					}) === MODAL_CONFIRM;
					if (shouldUnpinAndExecute && node.value) pinnedData.unsetData("unpin-and-execute-modal");
				}
				if (!pinnedData.hasData.value || shouldUnpinAndExecute) if (node.value && needsAgentInput(node.value)) uiStore.openModalWithData({
					name: FROM_AI_PARAMETERS_MODAL_KEY,
					data: { nodeName: props$1.nodeName }
				});
				else {
					const telemetryPayload = {
						node_type: nodeType.value ? nodeType.value.name : null,
						workflow_id: workflowsStore.workflowId,
						source: props$1.telemetrySource,
						push_ref: ndvStore.pushRef
					};
					telemetry.track("User clicked execute node button", telemetryPayload);
					await externalHooks.run("nodeExecuteButton.onClick", telemetryPayload);
					await runWorkflow({
						destinationNode: props$1.nodeName,
						source: "RunData.ExecuteNodeButton"
					});
					emit("execute");
				}
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				placement: _ctx.tooltipPlacement ?? "right",
				disabled: !tooltipText.value && !slots.persistentTooltipContent,
				visible: slots.persistentTooltipContent ? true : void 0
			}, {
				content: withCtx(() => [renderSlot(_ctx.$slots, "persistentTooltipContent", {}, () => [createTextVNode(toDisplayString(tooltipText.value), 1)])]),
				default: withCtx(() => [createVNode(unref(N8nButton_default), mergeProps(_ctx.$attrs, {
					loading: isLoading.value && _ctx.showLoadingSpinner,
					disabled: _ctx.disabled || !!disabledHint.value || isLoading.value && !_ctx.showLoadingSpinner,
					label: buttonLabel.value,
					type: _ctx.type,
					size: _ctx.size,
					icon: buttonIcon.value,
					square: _ctx.square,
					"transparent-background": _ctx.transparent,
					title: !isTriggerNode.value && !tooltipText.value ? unref(i18n).baseText("ndv.execute.testNode.description") : "",
					onMouseover: onMouseOver,
					onClick
				}), null, 16, [
					"loading",
					"disabled",
					"label",
					"type",
					"size",
					"icon",
					"square",
					"transparent-background",
					"title"
				])]),
				_: 3
			}, 8, [
				"placement",
				"disabled",
				"visible"
			]);
		};
	}
});
var import_pick = /* @__PURE__ */ __toESM(require_pick());
var VirtualSchema_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "VirtualSchema",
	props: {
		nodes: { default: () => [] },
		node: { default: null },
		data: { default: () => [] },
		mappingEnabled: {
			type: Boolean,
			default: false
		},
		paneType: {},
		connectionType: { default: NodeConnectionTypes.Main },
		search: { default: "" },
		compact: {
			type: Boolean,
			default: false
		},
		outputIndex: { default: void 0 },
		truncateLimit: { default: 600 }
	},
	emits: ["clear:search"],
	setup(__props, { emit: __emit }) {
		const props$1 = __props;
		const telemetry = useTelemetry();
		const telemetryContext = useTelemetryContext();
		const i18n = useI18n();
		const ndvStore = useNDVStore();
		const nodeTypesStore = useNodeTypesStore();
		const workflowsStore = useWorkflowsStore();
		const schemaPreviewStore = useSchemaPreviewStore();
		const environmentsStore = environments_store_default();
		const settingsStore = useSettingsStore();
		const { getSchemaForExecutionData, getSchemaForJsonSchema, getSchema, filterSchema } = useDataSchema();
		const { closedNodes, flattenSchema, flattenMultipleSchemas, toggleNode } = useFlattenSchema();
		const { getNodeInputData, getLastRunIndexWithData, hasNodeExecuted } = useNodeHelpers();
		const emit = __emit;
		const scroller = ref();
		const closedNodesBeforeSearch = ref(/* @__PURE__ */ new Set());
		const canDraggableDrop = computed(() => ndvStore.canDraggableDrop);
		const draggableStickyPosition = computed(() => ndvStore.draggableStickyPos);
		const toggleNodeExclusiveAndScrollTop = (id) => {
			if (closedNodes.value.has(id)) closedNodes.value = new Set(items.value.map((item) => item.id));
			toggleNode(id);
			scroller.value?.scrollToItem(0);
		};
		const getNodeSchema = async (fullNode, connectedNode) => {
			const pinData = workflowsStore.pinDataByNodeName(connectedNode.name);
			const isNodeExecuted = (pinData ? pinData.length > 0 : false) || hasNodeExecuted(connectedNode.name);
			const connectedOutputIndexes = connectedNode.indicies.length > 0 ? connectedNode.indicies : [0];
			const connectedOutputsWithData = connectedOutputIndexes.map((outputIndex) => ({
				outputIndex,
				runIndex: getLastRunIndexWithData(fullNode.name, outputIndex, props$1.connectionType)
			})).filter(({ runIndex }) => runIndex !== -1);
			let filteredOutputsWithData = connectedOutputsWithData;
			if (props$1.outputIndex !== void 0 && connectedOutputIndexes.length > 1 && connectedOutputIndexes.includes(props$1.outputIndex)) filteredOutputsWithData = connectedOutputsWithData.filter(({ outputIndex }) => outputIndex === props$1.outputIndex);
			const nodeData = filteredOutputsWithData.map(({ outputIndex, runIndex }) => getNodeInputData(fullNode, runIndex, outputIndex, props$1.paneType, props$1.connectionType)).flat();
			const hasBinary = nodeData.some((data$1) => !isEmpty(data$1.binary));
			const data = pinData ?? executionDataToJson(nodeData);
			const isDataEmpty = data.length === 0;
			let schema = getSchemaForExecutionData(data);
			let preview = false;
			if (data.length === 0) {
				const previewSchema = await getSchemaPreview(fullNode);
				if (previewSchema.ok) {
					schema = getSchemaForJsonSchema(previewSchema.result);
					preview = true;
				}
			}
			return {
				schema,
				connectedOutputIndexes,
				itemsCount: data.length,
				runIndex: connectedOutputsWithData[0]?.runIndex ?? 0,
				preview,
				hasBinary,
				isNodeExecuted,
				isDataEmpty
			};
		};
		const isVariablesEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables]);
		const contextSchema = computed(() => {
			const $vars = environmentsStore.variablesAsObject;
			return filterSchema(getSchema({
				$now: DateTime.now().toISO(),
				$today: DateTime.now().set({
					hour: 0,
					minute: 0,
					second: 0,
					millisecond: 0
				}).toISO(),
				$vars,
				$execution: {
					id: PLACEHOLDER_FILLED_AT_EXECUTION_TIME,
					mode: "test",
					resumeUrl: i18n.baseText("dataMapping.schemaView.execution.resumeUrl")
				},
				$workflow: (0, import_pick.default)(workflowsStore.workflow, [
					"id",
					"name",
					"active"
				])
			}), props$1.search);
		});
		const contextItems = computed(() => {
			const header = {
				id: "variables",
				type: "header",
				title: i18n.baseText("dataMapping.schemaView.variablesContextTitle"),
				collapsable: true,
				itemCount: null
			};
			if (closedNodes.value.has(header.id)) return [header];
			const schema = contextSchema.value;
			if (!schema) return [];
			const fields = flattenSchema({
				schema,
				depth: 1,
				isDataEmpty: false,
				truncateLimit: props$1.truncateLimit
			}).flatMap((renderItem) => {
				if (renderItem.type === "item" && renderItem.depth === 1 && renderItem.title === "$vars") {
					const isVarsOpen = !closedNodes.value.has(renderItem.id);
					if (!isVariablesEnabled.value) {
						renderItem.collapsable = false;
						renderItem.locked = true;
						renderItem.lockedTooltip = i18n.baseText("dataMapping.schemaView.variablesUpgrade");
						return renderItem;
					}
					if (isVarsOpen && environmentsStore.scopedVariables.length === 0) return [renderItem, {
						type: "notice",
						id: "notice-variablesEmpty",
						level: renderItem.level ?? 0,
						message: i18n.baseText("dataMapping.schemaView.variablesEmpty")
					}];
				}
				return renderItem;
			});
			return [header].concat(fields);
		});
		const nodeSchema = computedAsync(async () => {
			const search = props$1.search;
			if (props$1.data.length === 0) {
				const previewSchema = await getSchemaPreview(props$1.node);
				if (previewSchema.ok) return filterSchema(getSchemaForJsonSchema(previewSchema.result), search);
			}
			return filterSchema(getSchemaForExecutionData(props$1.data), search);
		}, null);
		async function getSchemaPreview(node) {
			if (!node) return createResultError(/* @__PURE__ */ new Error());
			const { type, typeVersion, parameters: { resource, operation } } = node;
			return await schemaPreviewStore.getSchemaPreview({
				nodeType: type,
				version: typeVersion,
				resource,
				operation
			});
		}
		const nodesSchemas = computedAsync(async () => {
			const result = [];
			const search = props$1.search;
			for (const node of props$1.nodes) {
				const fullNode = workflowsStore.getNodeByName(node.name);
				if (!fullNode) continue;
				const nodeType = nodeTypesStore.getNodeType(fullNode.type, fullNode.typeVersion);
				if (!nodeType) continue;
				const { schema, connectedOutputIndexes, itemsCount, preview, hasBinary, isNodeExecuted, isDataEmpty, runIndex } = await getNodeSchema(fullNode, node);
				const filteredSchema = filterSchema(schema, search);
				if (!filteredSchema) continue;
				result.push({
					node: fullNode,
					connectedOutputIndexes,
					depth: node.depth,
					itemsCount,
					nodeType,
					schema: filteredSchema,
					preview,
					hasBinary,
					isNodeExecuted,
					isDataEmpty,
					runIndex
				});
			}
			return result;
		}, []);
		const nodeAdditionalInfo = (node) => {
			const returnData = [];
			if (node.disabled) returnData.push(i18n.baseText("node.disabled"));
			const connections = ndvStore.ndvNodeInputNumber[node.name];
			if (connections) if (connections.length === 1) returnData.push(`Input ${connections}`);
			else returnData.push(`Inputs ${connections.join(", ")}`);
			return returnData.length ? `(${returnData.join(" | ")})` : "";
		};
		const flattenedNodes = computed(() => flattenMultipleSchemas(nodesSchemas.value, nodeAdditionalInfo, props$1.truncateLimit));
		const flattenNodeSchema = computed(() => nodeSchema.value ? flattenSchema({
			schema: nodeSchema.value,
			depth: 0,
			level: -1,
			isDataEmpty: props$1.data.length === 0,
			truncateLimit: props$1.truncateLimit
		}) : []);
		const isDebugging = computed(() => !props$1.nodes.length);
		const items = computed(() => {
			if (isDebugging.value || props$1.paneType === "output") return flattenNodeSchema.value;
			return flattenedNodes.value.concat(contextItems.value);
		});
		const noSearchResults = computed(() => {
			return Boolean(props$1.search.trim()) && !items.value.length;
		});
		watch(() => Boolean(props$1.search), (hasSearch) => {
			if (hasSearch) {
				closedNodesBeforeSearch.value = new Set(closedNodes.value);
				closedNodes.value.clear();
			} else if (closedNodes.value.size === 0) closedNodes.value = closedNodesBeforeSearch.value;
		});
		const unwatchItems = watch(items, (newItems) => {
			if (newItems.length < 2) return;
			closedNodes.value = new Set(newItems.filter((item) => item.type === "header").slice(1).map((item) => item.id));
			unwatchItems();
		});
		const onDragStart = (el, data) => {
			ndvStore.draggableStartDragging({
				type: "mapping",
				data: data ?? "",
				dimensions: el?.getBoundingClientRect() ?? null
			});
			ndvStore.resetMappingTelemetry();
		};
		const onDragEnd = (el) => {
			ndvStore.draggableStopDragging();
			setTimeout(() => {
				const mappingTelemetry = ndvStore.mappingTelemetry;
				const parentNode = nodesSchemas.value.find(({ node }) => node.name === el.dataset.nodeName);
				const isPreview = parentNode?.preview ?? false;
				const hasCredential = !isEmpty(parentNode?.node.credentials);
				const runIndex = Number(el.dataset.runIndex);
				const telemetryPayload = {
					src_node_type: el.dataset.nodeType,
					src_field_name: el.dataset.name ?? "",
					src_nodes_back: el.dataset.depth,
					src_run_index: runIndex,
					src_runs_total: runIndex,
					src_field_nest_level: el.dataset.level ?? 0,
					src_view: isPreview ? "schema_preview" : "schema",
					src_has_credential: hasCredential,
					src_element: el,
					success: false,
					view_shown: telemetryContext.view_shown,
					...mappingTelemetry
				};
				useExternalHooks().run("runDataJson.onDragEnd", telemetryPayload);
				telemetry.track("User dragged data for mapping", telemetryPayload);
			}, 250);
		};
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", { class: normalizeClass([
				"run-data-schema",
				"full-height",
				{
					compact: props$1.compact,
					"no-search-results": noSearchResults.value
				}
			]) }, [noSearchResults.value ? (openBlock(), createBlock(NDVEmptyState_default, {
				key: 0,
				title: unref(i18n).baseText("ndv.search.noNodeMatch.title")
			}, {
				default: withCtx(() => [createVNode(unref(I18nT), {
					keypath: "ndv.search.noMatchSchema.description",
					tag: "span",
					scope: "global"
				}, {
					link: withCtx(() => [createBaseVNode("a", {
						href: "#",
						onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("clear:search"), ["prevent"]))
					}, toDisplayString(unref(i18n).baseText("ndv.search.noMatchSchema.description.link")), 1)]),
					_: 1
				})]),
				_: 1
			}, 8, ["title"])) : createCommentVNode("", true), items.value.length ? (openBlock(), createBlock(Draggable_default, {
				key: 1,
				class: "full-height",
				type: "mapping",
				"target-data-key": "mappable",
				disabled: !_ctx.mappingEnabled,
				"can-drop": canDraggableDrop.value,
				"sticky-position": draggableStickyPosition.value,
				onDragstart: onDragStart,
				onDragend: onDragEnd
			}, {
				preview: withCtx(({ canDrop, el }) => [el ? (openBlock(), createBlock(MappingPill_default, {
					key: 0,
					html: el.outerHTML,
					"can-drop": canDrop
				}, null, 8, ["html", "can-drop"])) : createCommentVNode("", true)]),
				default: withCtx(() => [createVNode(unref(script$1), {
					ref_key: "scroller",
					ref: scroller,
					items: items.value,
					"min-item-size": 38,
					class: "full-height scroller"
				}, {
					default: withCtx(({ item, index, active }) => [createVNode(unref(script), {
						item,
						active,
						"size-dependencies": [item],
						"data-index": index
					}, {
						default: withCtx(() => [item.type === "header" ? (openBlock(), createBlock(VirtualSchemaHeader_default, mergeProps({ key: 0 }, item, {
							collapsed: unref(closedNodes).has(item.id),
							"onClick:toggle": ($event) => unref(toggleNode)(item.id),
							onClick: ($event) => toggleNodeExclusiveAndScrollTop(item.id)
						}), null, 16, [
							"collapsed",
							"onClick:toggle",
							"onClick"
						])) : item.type === "item" ? (openBlock(), createBlock(VirtualSchemaItem_default, mergeProps({ key: 1 }, item, {
							search: _ctx.search,
							draggable: _ctx.mappingEnabled,
							collapsed: unref(closedNodes).has(item.id),
							highlight: unref(ndvStore).highlightDraggables,
							onClick: ($event) => unref(toggleNode)(item.id)
						}), null, 16, [
							"search",
							"draggable",
							"collapsed",
							"highlight",
							"onClick"
						])) : item.type === "icon" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 2,
							content: item.tooltip,
							placement: "top"
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								size: "small",
								icon: item.icon,
								class: "icon"
							}, null, 8, ["icon"])]),
							_: 2
						}, 1032, ["content"])) : item.type === "notice" ? withDirectives((openBlock(), createElementBlock("div", {
							key: 3,
							class: "notice",
							style: normalizeStyle({ "--schema-level": item.level })
						}, null, 4)), [[_directive_n8n_html, item.message]]) : item.type === "empty" ? (openBlock(), createElementBlock("div", {
							key: 4,
							class: "empty-schema",
							style: normalizeStyle({ "--schema-level": item.level })
						}, [createVNode(unref(N8nText_default), {
							tag: "div",
							size: "small"
						}, {
							default: withCtx(() => [item.key === "executeSchema" ? (openBlock(), createBlock(unref(I18nT), {
								key: 0,
								tag: "span",
								keypath: "dataMapping.schemaView.executeSchema",
								scope: "global"
							}, {
								link: withCtx(() => [unref(ndvStore).activeNodeName ? (openBlock(), createBlock(NodeExecuteButton_default, {
									key: 0,
									"node-name": unref(ndvStore).activeNodeName,
									label: unref(i18n).baseText("ndv.input.noOutputData.executePrevious"),
									text: "",
									"telemetry-source": "inputs",
									"hide-icon": "",
									size: "small",
									class: normalizeClass(_ctx.$style.executeButton)
								}, null, 8, [
									"node-name",
									"label",
									"class"
								])) : createCommentVNode("", true)]),
								_: 1
							})) : (openBlock(), createBlock(unref(I18nT), {
								key: 1,
								tag: "span",
								keypath: `dataMapping.schemaView.${item.key}`,
								scope: "global"
							}, null, 8, ["keypath"]))]),
							_: 2
						}, 1024)], 4)) : createCommentVNode("", true)]),
						_: 2
					}, 1032, [
						"item",
						"active",
						"size-dependencies",
						"data-index"
					])]),
					_: 1
				}, 8, ["items"])]),
				_: 1
			}, 8, [
				"disabled",
				"can-drop",
				"sticky-position"
			])) : createCommentVNode("", true)], 2);
		};
	}
});
var VirtualSchema_vue_vue_type_style_index_0_lang_module_default = { executeButton: "_executeButton_107ze_2" };
var VirtualSchema_default = /* @__PURE__ */ __plugin_vue_export_helper_default(VirtualSchema_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": VirtualSchema_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-a0b79edb"]]);
export { getTextareaCursorPosition as a, script$1 as c, getParentNodes as i, NodeExecuteButton_default as n, getUpdatedTextareaValue as o, generateCodeForAiTransform as r, script as s, VirtualSchema_default as t };
