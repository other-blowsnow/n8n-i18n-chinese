import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Ut as toValue, V as isVNode, Z as onMounted, _ as Fragment, _n as normalizeClass, at as renderSlot, bt as withCtx, ct as resolveDynamicComponent, et as openBlock, h as withModifiers, n as Transition, o as render, p as vShow, pn as isString, tn as init_shared_esm_bundler, w as createBaseVNode, xt as withDirectives, yn as normalizeStyle } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { F as definePropType, Ft as useTimeoutFn, Mt as isClient, Ot as useEventListener, P as buildProps, S as useGlobalComponentSettings, V as debugWarn, f as require_lib, q as isElement } from "./truncate-1c7Iwk7N.js";
import { c as CloseComponents, f as iconPropType, n as _export_sfc, o as withInstallFunction, r as EVENT_CODE, t as ElIcon, u as TypeComponentsMap } from "./icon-mgEZlgYz.js";
import { Ni as useUIStore, o as useWorkflowsStore, t as useTelemetry } from "./useTelemetry-C2EhNQhN.js";
import { A as ALLOWED_HTML_TAGS, k as ALLOWED_HTML_ATTRIBUTES, mo as VIEWS } from "./constants-C_oOJnqT.js";
import { t as useExternalHooks } from "./useExternalHooks-CE2Rdzfk.js";
var notificationTypes = [
	"success",
	"info",
	"warning",
	"error"
];
var notificationProps = buildProps({
	customClass: {
		type: String,
		default: ""
	},
	dangerouslyUseHTMLString: {
		type: Boolean,
		default: false
	},
	duration: {
		type: Number,
		default: 4500
	},
	icon: { type: iconPropType },
	id: {
		type: String,
		default: ""
	},
	message: {
		type: definePropType([String, Object]),
		default: ""
	},
	offset: {
		type: Number,
		default: 0
	},
	onClick: {
		type: definePropType(Function),
		default: () => void 0
	},
	onClose: {
		type: definePropType(Function),
		required: true
	},
	position: {
		type: String,
		values: [
			"top-right",
			"top-left",
			"bottom-right",
			"bottom-left"
		],
		default: "top-right"
	},
	showClose: {
		type: Boolean,
		default: true
	},
	title: {
		type: String,
		default: ""
	},
	type: {
		type: String,
		values: [...notificationTypes, ""],
		default: ""
	},
	zIndex: Number
});
var notificationEmits = { destroy: () => true };
var _hoisted_1 = ["id"];
var _hoisted_2 = ["textContent"];
var _hoisted_3 = { key: 0 };
var _hoisted_4 = ["innerHTML"];
var NotificationConstructor = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElNotification" }),
	props: notificationProps,
	emits: notificationEmits,
	setup(__props, { expose }) {
		const props = __props;
		const { ns, zIndex } = useGlobalComponentSettings("notification");
		const { nextZIndex, currentZIndex } = zIndex;
		const { Close } = CloseComponents;
		const visible = ref(false);
		let timer = void 0;
		const typeClass = computed(() => {
			const type = props.type;
			return type && TypeComponentsMap[props.type] ? ns.m(type) : "";
		});
		const iconComponent = computed(() => {
			if (!props.type) return props.icon;
			return TypeComponentsMap[props.type] || props.icon;
		});
		const horizontalClass = computed(() => props.position.endsWith("right") ? "right" : "left");
		const verticalProperty = computed(() => props.position.startsWith("top") ? "top" : "bottom");
		const positionStyle = computed(() => {
			var _a;
			return {
				[verticalProperty.value]: `${props.offset}px`,
				zIndex: (_a = props.zIndex) != null ? _a : currentZIndex.value
			};
		});
		function startTimer() {
			if (props.duration > 0) ({stop: timer} = useTimeoutFn(() => {
				if (visible.value) close$1();
			}, props.duration));
		}
		function clearTimer() {
			timer?.();
		}
		function close$1() {
			visible.value = false;
		}
		function onKeydown({ code }) {
			if (code === EVENT_CODE.delete || code === EVENT_CODE.backspace) clearTimer();
			else if (code === EVENT_CODE.esc) {
				if (visible.value) close$1();
			} else startTimer();
		}
		onMounted(() => {
			startTimer();
			nextZIndex();
			visible.value = true;
		});
		useEventListener(document, "keydown", onKeydown);
		expose({
			visible,
			close: close$1
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Transition, {
				name: unref(ns).b("fade"),
				onBeforeLeave: _ctx.onClose,
				onAfterLeave: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("destroy")),
				persisted: ""
			}, {
				default: withCtx(() => [withDirectives(createBaseVNode("div", {
					id: _ctx.id,
					class: normalizeClass([
						unref(ns).b(),
						_ctx.customClass,
						unref(horizontalClass)
					]),
					style: normalizeStyle(unref(positionStyle)),
					role: "alert",
					onMouseenter: clearTimer,
					onMouseleave: startTimer,
					onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
				}, [unref(iconComponent) ? (openBlock(), createBlock(unref(ElIcon), {
					key: 0,
					class: normalizeClass([unref(ns).e("icon"), unref(typeClass)])
				}, {
					default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(unref(iconComponent))))]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("v-if", true), createBaseVNode("div", { class: normalizeClass(unref(ns).e("group")) }, [
					createBaseVNode("h2", {
						class: normalizeClass(unref(ns).e("title")),
						textContent: toDisplayString(_ctx.title)
					}, null, 10, _hoisted_2),
					withDirectives(createBaseVNode("div", {
						class: normalizeClass(unref(ns).e("content")),
						style: normalizeStyle(!!_ctx.title ? void 0 : { margin: 0 })
					}, [renderSlot(_ctx.$slots, "default", {}, () => [!_ctx.dangerouslyUseHTMLString ? (openBlock(), createElementBlock("p", _hoisted_3, toDisplayString(_ctx.message), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createCommentVNode(" Caution here, message could've been compromised, never use user's input as message "), createBaseVNode("p", { innerHTML: _ctx.message }, null, 8, _hoisted_4)], 2112))])], 6), [[vShow, _ctx.message]]),
					_ctx.showClose ? (openBlock(), createBlock(unref(ElIcon), {
						key: 0,
						class: normalizeClass(unref(ns).e("closeBtn")),
						onClick: withModifiers(close$1, ["stop"])
					}, {
						default: withCtx(() => [createVNode(unref(Close))]),
						_: 1
					}, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
				], 2)], 46, _hoisted_1), [[vShow, visible.value]])]),
				_: 3
			}, 8, ["name", "onBeforeLeave"]);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/notification/src/notification.vue"]]);
init_shared_esm_bundler();
var notifications = {
	"top-left": [],
	"top-right": [],
	"bottom-left": [],
	"bottom-right": []
};
var GAP_SIZE = 16;
var seed = 1;
var notify = function(options = {}, context = null) {
	if (!isClient) return { close: () => void 0 };
	if (typeof options === "string" || isVNode(options)) options = { message: options };
	const position = options.position || "top-right";
	let verticalOffset = options.offset || 0;
	notifications[position].forEach(({ vm: vm2 }) => {
		var _a;
		verticalOffset += (((_a = vm2.el) == null ? void 0 : _a.offsetHeight) || 0) + GAP_SIZE;
	});
	verticalOffset += GAP_SIZE;
	const id = `notification_${seed++}`;
	const userOnClose = options.onClose;
	const props = {
		...options,
		offset: verticalOffset,
		id,
		onClose: () => {
			close(id, position, userOnClose);
		}
	};
	let appendTo = document.body;
	if (isElement(options.appendTo)) appendTo = options.appendTo;
	else if (isString(options.appendTo)) appendTo = document.querySelector(options.appendTo);
	if (!isElement(appendTo)) {
		debugWarn("ElNotification", "the appendTo option is not an HTMLElement. Falling back to document.body.");
		appendTo = document.body;
	}
	const container = document.createElement("div");
	const vm = createVNode(NotificationConstructor, props, isVNode(props.message) ? { default: () => props.message } : null);
	vm.appContext = context != null ? context : notify._context;
	vm.props.onDestroy = () => {
		render(null, container);
	};
	render(vm, container);
	notifications[position].push({ vm });
	appendTo.appendChild(container.firstElementChild);
	return { close: () => {
		vm.component.exposed.visible.value = false;
	} };
};
notificationTypes.forEach((type) => {
	notify[type] = (options = {}) => {
		if (typeof options === "string" || isVNode(options)) options = { message: options };
		return notify({
			...options,
			type
		});
	};
});
function close(id, position, userOnClose) {
	const orientedNotifications = notifications[position];
	const idx = orientedNotifications.findIndex(({ vm: vm2 }) => {
		var _a;
		return ((_a = vm2.component) == null ? void 0 : _a.props.id) === id;
	});
	if (idx === -1) return;
	const { vm } = orientedNotifications[idx];
	if (!vm) return;
	userOnClose?.(vm);
	const removedHeight = vm.el.offsetHeight;
	const verticalPos = position.split("-")[0];
	orientedNotifications.splice(idx, 1);
	const len = orientedNotifications.length;
	if (len < 1) return;
	for (let i = idx; i < len; i++) {
		const { el, component } = orientedNotifications[i].vm;
		const pos = Number.parseInt(el.style[verticalPos], 10) - removedHeight - GAP_SIZE;
		component.props.offset = pos;
	}
}
function closeAll() {
	for (const orientedNotifications of Object.values(notifications)) orientedNotifications.forEach(({ vm }) => {
		vm.component.exposed.visible.value = false;
	});
}
notify.closeAll = closeAll;
notify._context = null;
var ElNotification = withInstallFunction(notify, "$notify");
var import_lib = /* @__PURE__ */ __toESM(require_lib());
function sanitizeHtml(dirtyHtml) {
	return (0, import_lib.default)(dirtyHtml, {
		onTagAttr: (tag, name, value) => {
			if (tag === "img" && name === "src") {
				const isStaticImageFile = value.split("#")[0].match(/\.(jpeg|jpg|gif|png|webp)$/) !== null && value.startsWith("/static/");
				if (!value.startsWith("https://") && !isStaticImageFile) return "";
			}
			if (ALLOWED_HTML_ATTRIBUTES.includes(name) || name.startsWith("data-")) {
				if (name === "href" && !value.match(/^https?:\/\//gm) && !value.startsWith("/")) return "";
				return `${name}="${(0, import_lib.escapeAttrValue)(value)}"`;
			}
		},
		onTag: (tag) => {
			if (!ALLOWED_HTML_TAGS.includes(tag)) return "";
		}
	});
}
const sanitizeIfString = (message) => {
	if (typeof message === "string") return sanitizeHtml(message);
	return message;
};
const capitalizeFirstLetter = (text) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
};
const getBannerRowHeight = async () => {
	return await new Promise((resolve) => {
		setTimeout(() => {
			resolve(document.getElementById("banners")?.clientHeight ?? 0);
		}, 0);
	});
};
function isOutsideSelected(el) {
	const selection = document.getSelection();
	if (!selection?.anchorNode || !selection.focusNode || !el) return false;
	return !el.contains(selection.anchorNode) && !el.contains(selection.focusNode) && (selection.anchorNode !== selection.focusNode || selection.anchorOffset !== selection.focusOffset);
}
var scrollbarWidth;
function getScrollbarWidth() {
	if (scrollbarWidth !== void 0) return scrollbarWidth;
	const outer = document.createElement("div");
	const inner = document.createElement("div");
	outer.style.visibility = "hidden";
	outer.style.overflow = "scroll";
	document.body.appendChild(outer);
	outer.appendChild(inner);
	scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
	outer.parentElement?.removeChild(outer);
	return scrollbarWidth;
}
function isEventTargetContainedBy(eventTarget, maybeContainer) {
	return !!(eventTarget instanceof Node && toValue(maybeContainer)?.contains(eventTarget));
}
var APP_Z_INDEXES = {
	CONTEXT_MENU: 10,
	APP_HEADER: 99,
	SELECT_BOX: 100,
	CANVAS_ADD_BUTTON: 101,
	APP_SIDEBAR: 999,
	CANVAS_SELECT_BOX: 100,
	TOP_BANNERS: 999,
	NODE_CREATOR: 1700,
	ASK_ASSISTANT_CHAT: 1750,
	NDV: 1800,
	COMMAND_BAR: 1900,
	MODALS: 2e3,
	TOASTS: 2100,
	ASK_ASSISTANT_FLOATING_BUTTON: 3e3,
	ASK_ASSISTANT_FLOATING_BUTTON_TOOLTIP: 3e3,
	CODEMIRROR_TOOLTIP: 3e3,
	DRAGGABLE: 9999999,
	ACTIVE_STICKY: 9999999,
	WORKFLOW_PREVIEW_NDV: 9999999,
	NPS_SURVEY_MODAL: 3001
};
var setAppZIndexes = () => {
	Object.keys(APP_Z_INDEXES).forEach((key) => {
		const variableName = `--${key.toLowerCase().replaceAll("_", "-")}--z`;
		const value = APP_Z_INDEXES[key];
		document.documentElement.style.setProperty(variableName, `${value}`);
	});
};
const useStyles = () => ({
	APP_Z_INDEXES,
	setAppZIndexes
});
var stickyNotificationQueue = [];
function useToast() {
	const telemetry = useTelemetry();
	const workflowsStore = useWorkflowsStore();
	const uiStore = useUIStore();
	const externalHooks = useExternalHooks();
	const i18n = useI18n();
	const { APP_Z_INDEXES: APP_Z_INDEXES$1 } = useStyles();
	function showMessage(messageData, track = true) {
		const messageDefaults = {
			dangerouslyUseHTMLString: true,
			position: "bottom-right",
			zIndex: APP_Z_INDEXES$1.TOASTS,
			appendTo: "#app-grid",
			customClass: "content-toast"
		};
		const { message, title } = messageData;
		const params = {
			...messageDefaults,
			...messageData
		};
		if (typeof message === "string") params.message = sanitizeHtml(message);
		if (typeof title === "string") params.title = sanitizeHtml(title);
		const notification = ElNotification(params);
		if (params.duration === 0) stickyNotificationQueue.push(notification);
		if (params.type === "error" && track) telemetry.track("Instance FE emitted error", {
			error_title: params.title,
			error_message: params.message,
			caused_by_credential: causedByCredential(params.message),
			workflow_id: workflowsStore.workflowId
		});
		return notification;
	}
	function showToast(config) {
		let notification;
		if (config.closeOnClick) {
			const cb = config.onClick;
			config.onClick = () => {
				if (notification) notification.close();
				if (cb) cb();
			};
		}
		notification = showMessage({
			title: config.title,
			message: config.message,
			onClick: config.onClick,
			onClose: config.onClose,
			duration: config.duration,
			customClass: config.customClass,
			type: config.type
		});
		return notification;
	}
	function collapsableDetails({ description, node }) {
		if (!description) return "";
		const errorDescription = description.length > 500 ? `${description.slice(0, 500)}...` : description;
		return `
				<br>
				<br>
				<details>
					<summary
						style="color: #ff6d5a; font-weight: bold; cursor: pointer;"
					>
						${i18n.baseText("showMessage.showDetails")}
					</summary>
					<p>${node.name}: ${errorDescription}</p>
				</details>
			`;
	}
	function showError(e, title, message) {
		const error = e;
		showMessage({
			title,
			message: `
					${message ? `${message}<br/>` : ""}
					<i>${error.message}</i>
					${collapsableDetails(error)}`,
			type: "error",
			duration: 0
		}, false);
		externalHooks.run("showMessage.showError", {
			title,
			message,
			errorMessage: error.message
		});
		telemetry.track("Instance FE emitted error", {
			error_title: title,
			error_description: message,
			error_message: error.message,
			caused_by_credential: causedByCredential(error.message),
			workflow_id: workflowsStore.workflowId
		});
	}
	function causedByCredential(message) {
		if (!message || typeof message !== "string") return false;
		return message.includes("Credentials for") && message.includes("are not set");
	}
	function clearAllStickyNotifications() {
		stickyNotificationQueue.forEach((notification) => {
			if (notification) notification.close();
		});
		stickyNotificationQueue.length = 0;
	}
	function showNotificationForViews(views) {
		const notifications$1 = [];
		views.forEach((view) => {
			notifications$1.push(...uiStore.pendingNotificationsForViews[view] ?? []);
		});
		if (notifications$1.length) {
			notifications$1.forEach(async (notification) => {
				setTimeout(() => {
					showMessage(notification);
				}, 5);
			});
			uiStore.setNotificationsForView(VIEWS.WORKFLOW, []);
		}
	}
	return {
		showMessage,
		showToast,
		showError,
		clearAllStickyNotifications,
		showNotificationForViews
	};
}
export { getScrollbarWidth as a, sanitizeHtml as c, getBannerRowHeight as i, sanitizeIfString as l, useStyles as n, isEventTargetContainedBy as o, capitalizeFirstLetter as r, isOutsideSelected as s, useToast as t };
