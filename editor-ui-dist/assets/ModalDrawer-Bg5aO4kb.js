import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, W as mergeProps, Z as onMounted, _n as normalizeClass, at as renderSlot, b as Teleport, bt as withCtx, et as openBlock, h as withModifiers, n as Transition, ot as resolveComponent, p as vShow, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { in as useDeprecated, qt as ElFocusTrap } from "./src-BmrdBtCN.js";
import { A as useLocale, L as addUnit, P as buildProps, k as useNamespace } from "./truncate-1c7Iwk7N.js";
import { b as close_default, i as withInstall, n as _export_sfc, t as ElIcon } from "./icon-mgEZlgYz.js";
import { t as ElOverlay } from "./overlay-DxjKgl5T.js";
import { i as dialogProps, n as useDialog, r as dialogEmits } from "./dialog-CzxM5dHR.js";
import { Ni as useUIStore } from "./useTelemetry-C2EhNQhN.js";
var drawerProps = buildProps({
	...dialogProps,
	direction: {
		type: String,
		default: "rtl",
		values: [
			"ltr",
			"rtl",
			"ttb",
			"btt"
		]
	},
	size: {
		type: [String, Number],
		default: "30%"
	},
	withHeader: {
		type: Boolean,
		default: true
	},
	modalFade: {
		type: Boolean,
		default: true
	},
	headerAriaLevel: {
		type: String,
		default: "2"
	}
});
var _sfc_main = defineComponent({
	name: "ElDrawer",
	components: {
		ElOverlay,
		ElFocusTrap,
		ElIcon,
		Close: close_default
	},
	inheritAttrs: false,
	props: drawerProps,
	emits: dialogEmits,
	setup(props, { slots }) {
		useDeprecated({
			scope: "el-drawer",
			from: "the title slot",
			replacement: "the header slot",
			version: "3.0.0",
			ref: "https://element-plus.org/en-US/component/drawer.html#slots"
		}, computed(() => !!slots.title));
		useDeprecated({
			scope: "el-drawer",
			from: "custom-class",
			replacement: "class",
			version: "2.3.0",
			ref: "https://element-plus.org/en-US/component/drawer.html#attributes",
			type: "Attribute"
		}, computed(() => !!props.customClass));
		const drawerRef = ref();
		const focusStartRef = ref();
		const ns = useNamespace("drawer");
		const { t } = useLocale();
		const isHorizontal = computed(() => props.direction === "rtl" || props.direction === "ltr");
		const drawerSize = computed(() => addUnit(props.size));
		return {
			...useDialog(props, drawerRef),
			drawerRef,
			focusStartRef,
			isHorizontal,
			drawerSize,
			ns,
			t
		};
	}
});
var _hoisted_1 = [
	"aria-label",
	"aria-labelledby",
	"aria-describedby"
];
var _hoisted_2 = ["id", "aria-level"];
var _hoisted_3 = ["aria-label"];
var _hoisted_4 = ["id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_close = resolveComponent("close");
	const _component_el_icon = resolveComponent("el-icon");
	const _component_el_focus_trap = resolveComponent("el-focus-trap");
	const _component_el_overlay = resolveComponent("el-overlay");
	return openBlock(), createBlock(Teleport, {
		to: "body",
		disabled: !_ctx.appendToBody
	}, [createVNode(Transition, {
		name: _ctx.ns.b("fade"),
		onAfterEnter: _ctx.afterEnter,
		onAfterLeave: _ctx.afterLeave,
		onBeforeLeave: _ctx.beforeLeave,
		persisted: ""
	}, {
		default: withCtx(() => [withDirectives(createVNode(_component_el_overlay, {
			mask: _ctx.modal,
			"overlay-class": _ctx.modalClass,
			"z-index": _ctx.zIndex,
			onClick: _ctx.onModalClick
		}, {
			default: withCtx(() => [createVNode(_component_el_focus_trap, {
				loop: "",
				trapped: _ctx.visible,
				"focus-trap-el": _ctx.drawerRef,
				"focus-start-el": _ctx.focusStartRef,
				onReleaseRequested: _ctx.onCloseRequested
			}, {
				default: withCtx(() => [createBaseVNode("div", mergeProps({
					ref: "drawerRef",
					"aria-modal": "true",
					"aria-label": _ctx.title || void 0,
					"aria-labelledby": !_ctx.title ? _ctx.titleId : void 0,
					"aria-describedby": _ctx.bodyId
				}, _ctx.$attrs, {
					class: [
						_ctx.ns.b(),
						_ctx.direction,
						_ctx.visible && "open",
						_ctx.customClass
					],
					style: _ctx.isHorizontal ? "width: " + _ctx.drawerSize : "height: " + _ctx.drawerSize,
					role: "dialog",
					onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
				}), [
					createBaseVNode("span", {
						ref: "focusStartRef",
						class: normalizeClass(_ctx.ns.e("sr-focus")),
						tabindex: "-1"
					}, null, 2),
					_ctx.withHeader ? (openBlock(), createElementBlock("header", {
						key: 0,
						class: normalizeClass(_ctx.ns.e("header"))
					}, [!_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
						key: 0,
						close: _ctx.handleClose,
						titleId: _ctx.titleId,
						titleClass: _ctx.ns.e("title")
					}, () => [!_ctx.$slots.title ? (openBlock(), createElementBlock("span", {
						key: 0,
						id: _ctx.titleId,
						role: "heading",
						"aria-level": _ctx.headerAriaLevel,
						class: normalizeClass(_ctx.ns.e("title"))
					}, toDisplayString(_ctx.title), 11, _hoisted_2)) : createCommentVNode("v-if", true)]) : renderSlot(_ctx.$slots, "title", { key: 1 }, () => [createCommentVNode(" DEPRECATED SLOT ")]), _ctx.showClose ? (openBlock(), createElementBlock("button", {
						key: 2,
						"aria-label": _ctx.t("el.drawer.close"),
						class: normalizeClass(_ctx.ns.e("close-btn")),
						type: "button",
						onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClose && _ctx.handleClose(...args))
					}, [createVNode(_component_el_icon, { class: normalizeClass(_ctx.ns.e("close")) }, {
						default: withCtx(() => [createVNode(_component_close)]),
						_: 1
					}, 8, ["class"])], 10, _hoisted_3)) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true),
					_ctx.rendered ? (openBlock(), createElementBlock("div", {
						key: 1,
						id: _ctx.bodyId,
						class: normalizeClass(_ctx.ns.e("body"))
					}, [renderSlot(_ctx.$slots, "default")], 10, _hoisted_4)) : createCommentVNode("v-if", true),
					_ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.ns.e("footer"))
					}, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("v-if", true)
				], 16, _hoisted_1)]),
				_: 3
			}, 8, [
				"trapped",
				"focus-trap-el",
				"focus-start-el",
				"onReleaseRequested"
			])]),
			_: 3
		}, 8, [
			"mask",
			"overlay-class",
			"z-index",
			"onClick"
		]), [[vShow, _ctx.visible]])]),
		_: 3
	}, 8, [
		"name",
		"onAfterEnter",
		"onAfterLeave",
		"onBeforeLeave"
	])], 8, ["disabled"]);
}
var ElDrawer = withInstall(/* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]));
var ModalDrawer_default = /* @__PURE__ */ defineComponent({
	__name: "ModalDrawer",
	props: {
		name: {},
		beforeClose: {},
		eventBus: {},
		direction: {},
		modal: {
			type: Boolean,
			default: true
		},
		width: {},
		wrapperClosable: {
			type: Boolean,
			default: true
		},
		closeOnClickModal: {
			type: Boolean,
			default: false
		},
		showClose: {
			type: Boolean,
			default: true
		},
		zIndex: {}
	},
	emits: ["enter"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const uiStore = useUIStore();
		const handleEnter = () => {
			if (uiStore.isModalActiveById[props.name]) emit("enter");
		};
		const onWindowKeydown = (event) => {
			if (!uiStore.isModalActiveById[props.name]) return;
			if (event && event.keyCode === 13) handleEnter();
		};
		const close = async () => {
			if (props.beforeClose) {
				if (await props.beforeClose() === false) return;
			}
			uiStore.closeModal(props.name);
		};
		onMounted(() => {
			window.addEventListener("keydown", onWindowKeydown);
			props.eventBus?.on("close", close);
			const activeElement = document.activeElement;
			if (activeElement) activeElement.blur();
		});
		onBeforeUnmount(() => {
			props.eventBus?.off("close", close);
			window.removeEventListener("keydown", onWindowKeydown);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElDrawer), {
				direction: _ctx.direction,
				"model-value": unref(uiStore).modalsById[_ctx.name]?.open ?? false,
				size: _ctx.width,
				"before-close": close,
				modal: _ctx.modal,
				"wrapper-closable": _ctx.wrapperClosable,
				"close-on-click-modal": _ctx.closeOnClickModal,
				"z-index": _ctx.zIndex,
				"show-close": _ctx.showClose
			}, {
				header: withCtx(() => [renderSlot(_ctx.$slots, "header")]),
				default: withCtx(() => [createBaseVNode("span", { onKeydown: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])) }, [renderSlot(_ctx.$slots, "content")], 32)]),
				_: 3
			}, 8, [
				"direction",
				"model-value",
				"size",
				"modal",
				"wrapper-closable",
				"close-on-click-modal",
				"z-index",
				"show-close"
			]);
		};
	}
});
export { ModalDrawer_default as t };
