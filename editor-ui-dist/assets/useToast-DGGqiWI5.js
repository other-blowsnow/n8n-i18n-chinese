import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, B as isVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bn as normalizeStyle, bt as withCtx, h as withModifiers, it as renderSlot, j as createVNode, mn as isString, n as Transition, o as render, p as vShow, st as resolveDynamicComponent, tn as init_shared_esm_bundler, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { s as useI18n } from "./src-2bgghuOQ.js";
import { Ci as useTimeoutFn, Cr as isElement, Gn as buildProps, In as EVENT_CODE, Kn as definePropType, Si as isClient, Un as TypeComponentsMap, Vn as CloseComponents, Wn as iconPropType, _i as useEventListener, _n as useGlobalComponentSettings, _r as debugWarn, gn as _export_sfc, hn as ElIcon, zn as withInstallFunction } from "./src-BwN8TeVO.js";
import { ui as VIEWS } from "./constants-BiYlbN9Z.js";
import { Ui as sanitizeHtml, t as useWorkflowsStore } from "./workflows.store-B-Pu_sWP.js";
import { f as useUIStore, p as useTelemetry } from "./users.store-CUZkGc51.js";
import { t as useExternalHooks } from "./useExternalHooks-C7u6628A.js";
import { t as useStyles } from "./useStyles-CBXZLAO5.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/notification/src/notification.mjs
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
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/notification/src/notification2.mjs
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
				if (visible.value) close();
			}, props.duration));
		}
		function clearTimer() {
			timer?.();
		}
		function close() {
			visible.value = false;
		}
		function onKeydown({ code }) {
			if (code === EVENT_CODE.delete || code === EVENT_CODE.backspace) clearTimer();
			else if (code === EVENT_CODE.esc) {
				if (visible.value) close();
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
			close
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
						onClick: withModifiers(close, ["stop"])
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
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/notification/src/notify.mjs
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
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/notification/index.mjs
var ElNotification = withInstallFunction(notify, "$notify");
//#endregion
//#region src/app/composables/useToast.ts
var stickyNotificationQueue = [];
function useToast() {
	const telemetry = useTelemetry();
	const workflowsStore = useWorkflowsStore();
	const uiStore = useUIStore();
	const externalHooks = useExternalHooks();
	const i18n = useI18n();
	const { APP_Z_INDEXES } = useStyles();
	function showMessage(messageData, track = true) {
		const suppressed = uiStore.areNotificationsSuppressed;
		const allowErrors = uiStore.allowErrorNotificationsWhenSuppressed;
		if (suppressed && !(allowErrors && messageData.type === "error")) return { close: () => {} };
		const messageDefaults = {
			dangerouslyUseHTMLString: true,
			position: "bottom-right",
			zIndex: APP_Z_INDEXES.TOASTS,
			appendTo: "#n8n-app",
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
		if (params.type === "error" && track) {
			let messageForTelemetry;
			if (typeof params.message === "string") messageForTelemetry = params.message;
			else if (params.message && typeof params.message === "object" && "props" in params.message && params.message.props) {
				const props = params.message.props;
				const hasErrorMessage = typeof props === "object" && props !== null && "errorMessage" in props;
				const hasMessage = typeof props === "object" && props !== null && "message" in props;
				if (hasErrorMessage) messageForTelemetry = String(props.errorMessage);
				else if (hasMessage) messageForTelemetry = String(props.message);
				else messageForTelemetry = "Unknown error";
			} else messageForTelemetry = "Unknown error";
			telemetry.track("Instance FE emitted error", {
				error_title: params.title,
				error_message: messageForTelemetry,
				caused_by_credential: causedByCredential(messageForTelemetry),
				workflow_id: workflowsStore.workflowId
			});
		}
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
	function collapsableDetails(description) {
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
					<p>${errorDescription}</p>
				</details>
			`;
	}
	function showError(e, title, options) {
		const error = e;
		const message = options?.message;
		const description = options?.description ?? error.description;
		showMessage({
			title,
			message: `
					${message ? `${message}<br/>` : ""}
					<i>${error.message}</i>
					${description ? collapsableDetails(description) : ""}`,
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
		const notifications = [];
		views.forEach((view) => {
			notifications.push(...uiStore.pendingNotificationsForViews[view] ?? []);
		});
		if (notifications.length) {
			notifications.forEach(async (notification) => {
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
//#endregion
export { useToast as t };
