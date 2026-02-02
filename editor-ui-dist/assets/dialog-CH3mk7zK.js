import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, F as getCurrentInstance, G as nextTick, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, W as mergeProps, Z as onMounted, _t as watch, at as renderSlot, b as Teleport, bn as normalizeStyle, bt as withCtx, ct as resolveDynamicComponent, et as openBlock, k as createSlots, n as Transition, nt as provide, p as vShow, pt as useSlots, vn as normalizeClass, w as createBaseVNode, xt as withDirectives, z as inject } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { An as defaultNamespace, Di as isClient, Dr as isBoolean, En as useZIndex, Hn as composeRefs, Kn as CloseComponents, Mn as useLocale, Nn as useDeprecated, Nr as isUndefined_default, Oi as useTimeoutFn, On as useId, Sn as _export_sfc, Un as withInstall, Xn as buildProps, Yn as iconPropType, Zn as definePropType, jn as useNamespace, mn as FOCUS_TRAP_INJECTION_KEY, pn as ElFocusTrap, vr as addUnit, wn as useGlobalConfig, xn as ElIcon, zn as UPDATE_MODEL_EVENT } from "./src-Cq27d_Gp.js";
import { Ac as ElOverlay, Mc as useLockscreen, Nc as useDraggable, jc as useSameTarget } from "./users.store-qBZsmf9-.js";
var dialogInjectionKey = Symbol("dialogInjectionKey");
var dialogContentProps = buildProps({
	center: Boolean,
	alignCenter: Boolean,
	closeIcon: { type: iconPropType },
	customClass: {
		type: String,
		default: ""
	},
	draggable: Boolean,
	fullscreen: Boolean,
	showClose: {
		type: Boolean,
		default: true
	},
	title: {
		type: String,
		default: ""
	},
	ariaLevel: {
		type: String,
		default: "2"
	}
});
var dialogContentEmits = { close: () => true };
var _hoisted_1$1 = ["aria-level"];
var _hoisted_2 = ["aria-label"];
var _hoisted_3 = ["id"];
var ElDialogContent = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElDialogContent" }),
	props: dialogContentProps,
	emits: dialogContentEmits,
	setup(__props) {
		const props = __props;
		const { t } = useLocale();
		const { Close } = CloseComponents;
		const { dialogRef, headerRef, bodyId, ns, style } = inject(dialogInjectionKey);
		const { focusTrapRef } = inject(FOCUS_TRAP_INJECTION_KEY);
		const dialogKls = computed(() => [
			ns.b(),
			ns.is("fullscreen", props.fullscreen),
			ns.is("draggable", props.draggable),
			ns.is("align-center", props.alignCenter),
			{ [ns.m("center")]: props.center },
			props.customClass
		]);
		const composedDialogRef = composeRefs(focusTrapRef, dialogRef);
		useDraggable(dialogRef, headerRef, computed(() => props.draggable));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref: unref(composedDialogRef),
				class: normalizeClass(unref(dialogKls)),
				style: normalizeStyle(unref(style)),
				tabindex: "-1"
			}, [
				createBaseVNode("header", {
					ref_key: "headerRef",
					ref: headerRef,
					class: normalizeClass(unref(ns).e("header"))
				}, [renderSlot(_ctx.$slots, "header", {}, () => [createBaseVNode("span", {
					role: "heading",
					"aria-level": _ctx.ariaLevel,
					class: normalizeClass(unref(ns).e("title"))
				}, toDisplayString(_ctx.title), 11, _hoisted_1$1)]), _ctx.showClose ? (openBlock(), createElementBlock("button", {
					key: 0,
					"aria-label": unref(t)("el.dialog.close"),
					class: normalizeClass(unref(ns).e("headerbtn")),
					type: "button",
					onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
				}, [createVNode(unref(ElIcon), { class: normalizeClass(unref(ns).e("close")) }, {
					default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIcon || unref(Close))))]),
					_: 1
				}, 8, ["class"])], 10, _hoisted_2)) : createCommentVNode("v-if", true)], 2),
				createBaseVNode("div", {
					id: unref(bodyId),
					class: normalizeClass(unref(ns).e("body"))
				}, [renderSlot(_ctx.$slots, "default")], 10, _hoisted_3),
				_ctx.$slots.footer ? (openBlock(), createElementBlock("footer", {
					key: 0,
					class: normalizeClass(unref(ns).e("footer"))
				}, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("v-if", true)
			], 6);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);
var dialogProps = buildProps({
	...dialogContentProps,
	appendToBody: Boolean,
	appendTo: {
		type: definePropType(String),
		default: "body"
	},
	beforeClose: { type: definePropType(Function) },
	destroyOnClose: Boolean,
	closeOnClickModal: {
		type: Boolean,
		default: true
	},
	closeOnPressEscape: {
		type: Boolean,
		default: true
	},
	lockScroll: {
		type: Boolean,
		default: true
	},
	modal: {
		type: Boolean,
		default: true
	},
	openDelay: {
		type: Number,
		default: 0
	},
	closeDelay: {
		type: Number,
		default: 0
	},
	top: { type: String },
	modelValue: Boolean,
	modalClass: String,
	width: { type: [String, Number] },
	zIndex: { type: Number },
	trapFocus: {
		type: Boolean,
		default: false
	},
	headerAriaLevel: {
		type: String,
		default: "2"
	}
});
var dialogEmits = {
	open: () => true,
	opened: () => true,
	close: () => true,
	closed: () => true,
	[UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
	openAutoFocus: () => true,
	closeAutoFocus: () => true
};
var useDialog = (props, targetRef) => {
	var _a;
	const emit = getCurrentInstance().emit;
	const { nextZIndex } = useZIndex();
	let lastPosition = "";
	const titleId = useId();
	const bodyId = useId();
	const visible = ref(false);
	const closed = ref(false);
	const rendered = ref(false);
	const zIndex = ref((_a = props.zIndex) != null ? _a : nextZIndex());
	let openTimer = void 0;
	let closeTimer = void 0;
	const namespace = useGlobalConfig("namespace", "el");
	const style = computed(() => {
		const style2 = {};
		const varPrefix = `--${namespace.value}-dialog`;
		if (!props.fullscreen) {
			if (props.top) style2[`${varPrefix}-margin-top`] = props.top;
			if (props.width) style2[`${varPrefix}-width`] = addUnit(props.width);
		}
		return style2;
	});
	const overlayDialogStyle = computed(() => {
		if (props.alignCenter) return { display: "flex" };
		return {};
	});
	function afterEnter() {
		emit("opened");
	}
	function afterLeave() {
		emit("closed");
		emit(UPDATE_MODEL_EVENT, false);
		if (props.destroyOnClose) rendered.value = false;
	}
	function beforeLeave() {
		emit("close");
	}
	function open() {
		closeTimer?.();
		openTimer?.();
		if (props.openDelay && props.openDelay > 0) ({stop: openTimer} = useTimeoutFn(() => doOpen(), props.openDelay));
		else doOpen();
	}
	function close() {
		openTimer?.();
		closeTimer?.();
		if (props.closeDelay && props.closeDelay > 0) ({stop: closeTimer} = useTimeoutFn(() => doClose(), props.closeDelay));
		else doClose();
	}
	function handleClose() {
		function hide(shouldCancel) {
			if (shouldCancel) return;
			closed.value = true;
			visible.value = false;
		}
		if (props.beforeClose) props.beforeClose(hide);
		else close();
	}
	function onModalClick() {
		if (props.closeOnClickModal) handleClose();
	}
	function doOpen() {
		if (!isClient) return;
		visible.value = true;
	}
	function doClose() {
		visible.value = false;
	}
	function onOpenAutoFocus() {
		emit("openAutoFocus");
	}
	function onCloseAutoFocus() {
		emit("closeAutoFocus");
	}
	function onFocusoutPrevented(event) {
		var _a2;
		if (((_a2 = event.detail) == null ? void 0 : _a2.focusReason) === "pointer") event.preventDefault();
	}
	if (props.lockScroll) useLockscreen(visible);
	function onCloseRequested() {
		if (props.closeOnPressEscape) handleClose();
	}
	watch(() => props.modelValue, (val) => {
		if (val) {
			closed.value = false;
			open();
			rendered.value = true;
			zIndex.value = isUndefined_default(props.zIndex) ? nextZIndex() : zIndex.value++;
			nextTick(() => {
				emit("open");
				if (targetRef.value) targetRef.value.scrollTop = 0;
			});
		} else if (visible.value) close();
	});
	watch(() => props.fullscreen, (val) => {
		if (!targetRef.value) return;
		if (val) {
			lastPosition = targetRef.value.style.transform;
			targetRef.value.style.transform = "";
		} else targetRef.value.style.transform = lastPosition;
	});
	onMounted(() => {
		if (props.modelValue) {
			visible.value = true;
			rendered.value = true;
			open();
		}
	});
	return {
		afterEnter,
		afterLeave,
		beforeLeave,
		handleClose,
		onModalClick,
		close,
		doClose,
		onOpenAutoFocus,
		onCloseAutoFocus,
		onCloseRequested,
		onFocusoutPrevented,
		titleId,
		bodyId,
		closed,
		style,
		overlayDialogStyle,
		rendered,
		visible,
		zIndex
	};
};
var _hoisted_1 = [
	"aria-label",
	"aria-labelledby",
	"aria-describedby"
];
var ElDialog = withInstall(/* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({
		name: "ElDialog",
		inheritAttrs: false
	}),
	props: dialogProps,
	emits: dialogEmits,
	setup(__props, { expose }) {
		const props = __props;
		const slots = useSlots();
		useDeprecated({
			scope: "el-dialog",
			from: "the title slot",
			replacement: "the header slot",
			version: "3.0.0",
			ref: "https://element-plus.org/en-US/component/dialog.html#slots"
		}, computed(() => !!slots.title));
		useDeprecated({
			scope: "el-dialog",
			from: "custom-class",
			replacement: "class",
			version: "2.3.0",
			ref: "https://element-plus.org/en-US/component/dialog.html#attributes",
			type: "Attribute"
		}, computed(() => !!props.customClass));
		const ns = useNamespace("dialog");
		const dialogRef = ref();
		const headerRef = ref();
		const dialogContentRef = ref();
		const { visible, titleId, bodyId, style, overlayDialogStyle, rendered, zIndex, afterEnter, afterLeave, beforeLeave, handleClose, onModalClick, onOpenAutoFocus, onCloseAutoFocus, onCloseRequested, onFocusoutPrevented } = useDialog(props, dialogRef);
		provide(dialogInjectionKey, {
			dialogRef,
			headerRef,
			bodyId,
			ns,
			rendered,
			style
		});
		const overlayEvent = useSameTarget(onModalClick);
		const draggable = computed(() => props.draggable && !props.fullscreen);
		expose({
			visible,
			dialogContentRef
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Teleport, {
				to: _ctx.appendTo,
				disabled: _ctx.appendTo !== "body" ? false : !_ctx.appendToBody
			}, [createVNode(Transition, {
				name: "dialog-fade",
				onAfterEnter: unref(afterEnter),
				onAfterLeave: unref(afterLeave),
				onBeforeLeave: unref(beforeLeave),
				persisted: ""
			}, {
				default: withCtx(() => [withDirectives(createVNode(unref(ElOverlay), {
					"custom-mask-event": "",
					mask: _ctx.modal,
					"overlay-class": _ctx.modalClass,
					"z-index": unref(zIndex)
				}, {
					default: withCtx(() => [createBaseVNode("div", {
						role: "dialog",
						"aria-modal": "true",
						"aria-label": _ctx.title || void 0,
						"aria-labelledby": !_ctx.title ? unref(titleId) : void 0,
						"aria-describedby": unref(bodyId),
						class: normalizeClass(`${unref(ns).namespace.value}-overlay-dialog`),
						style: normalizeStyle(unref(overlayDialogStyle)),
						onClick: _cache[0] || (_cache[0] = (...args) => unref(overlayEvent).onClick && unref(overlayEvent).onClick(...args)),
						onMousedown: _cache[1] || (_cache[1] = (...args) => unref(overlayEvent).onMousedown && unref(overlayEvent).onMousedown(...args)),
						onMouseup: _cache[2] || (_cache[2] = (...args) => unref(overlayEvent).onMouseup && unref(overlayEvent).onMouseup(...args))
					}, [createVNode(unref(ElFocusTrap), {
						loop: "",
						trapped: unref(visible),
						"focus-start-el": "container",
						onFocusAfterTrapped: unref(onOpenAutoFocus),
						onFocusAfterReleased: unref(onCloseAutoFocus),
						onFocusoutPrevented: unref(onFocusoutPrevented),
						onReleaseRequested: unref(onCloseRequested)
					}, {
						default: withCtx(() => [unref(rendered) ? (openBlock(), createBlock(ElDialogContent, mergeProps({
							key: 0,
							ref_key: "dialogContentRef",
							ref: dialogContentRef
						}, _ctx.$attrs, {
							"custom-class": _ctx.customClass,
							center: _ctx.center,
							"align-center": _ctx.alignCenter,
							"close-icon": _ctx.closeIcon,
							draggable: unref(draggable),
							fullscreen: _ctx.fullscreen,
							"show-close": _ctx.showClose,
							title: _ctx.title,
							"aria-level": _ctx.headerAriaLevel,
							onClose: unref(handleClose)
						}), createSlots({
							header: withCtx(() => [!_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
								key: 0,
								close: unref(handleClose),
								titleId: unref(titleId),
								titleClass: unref(ns).e("title")
							}) : renderSlot(_ctx.$slots, "title", { key: 1 })]),
							default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
							_: 2
						}, [_ctx.$slots.footer ? {
							name: "footer",
							fn: withCtx(() => [renderSlot(_ctx.$slots, "footer")])
						} : void 0]), 1040, [
							"custom-class",
							"center",
							"align-center",
							"close-icon",
							"draggable",
							"fullscreen",
							"show-close",
							"title",
							"aria-level",
							"onClose"
						])) : createCommentVNode("v-if", true)]),
						_: 3
					}, 8, [
						"trapped",
						"onFocusAfterTrapped",
						"onFocusAfterReleased",
						"onFocusoutPrevented",
						"onReleaseRequested"
					])], 46, _hoisted_1)]),
					_: 3
				}, 8, [
					"mask",
					"overlay-class",
					"z-index"
				]), [[vShow, unref(visible)]])]),
				_: 3
			}, 8, [
				"onAfterEnter",
				"onAfterLeave",
				"onBeforeLeave"
			])], 8, ["to", "disabled"]);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]));
export { dialogProps as i, useDialog as n, dialogEmits as r, ElDialog as t };
