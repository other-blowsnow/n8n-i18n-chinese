import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, N as defineComponent, O as createSlots, S as computed, Sn as toDisplayString, T as createCommentVNode, U as mergeProps, Wt as unref, X as onMounted, _n as normalizeClass, h as withModifiers, it as renderSlot, j as createVNode, m as withKeys, q as onBeforeUnmount, vn as normalizeProps, w as createBlock, yn as normalizeStyle, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { Hi as N8nHeading_default, R as N8nSpinner_default } from "./src-r-l70KdD.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { Er as useStyles, r as useUIStore } from "./users.store-BVdi4rdu.js";
import { t as ElDialog } from "./dialog-CSQrJEph.js";
import { D as APP_MODALS_ELEMENT_ID } from "./constants-O8ayp6Ax.js";
var _hoisted_1 = { key: 0 };
var Modal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Modal",
	props: {
		name: {},
		title: { default: "" },
		subtitle: { default: "" },
		eventBus: {},
		showClose: {
			type: Boolean,
			default: true
		},
		loading: {
			type: Boolean,
			default: false
		},
		classic: {
			type: Boolean,
			default: false
		},
		beforeClose: {},
		customClass: { default: "" },
		center: {
			type: Boolean,
			default: true
		},
		width: { default: "50%" },
		minWidth: {},
		maxWidth: {},
		height: {},
		minHeight: {},
		maxHeight: {},
		scrollable: {
			type: Boolean,
			default: false
		},
		centerTitle: {
			type: Boolean,
			default: false
		},
		closeOnClickModal: {
			type: Boolean,
			default: true
		},
		closeOnPressEscape: {
			type: Boolean,
			default: true
		},
		appendToBody: {
			type: Boolean,
			default: false
		},
		lockScroll: {
			type: Boolean,
			default: true
		}
	},
	emits: ["enter"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const { APP_Z_INDEXES } = useStyles();
		const styles = computed(() => {
			const styles$1 = {};
			if (props.height) styles$1["--dialog--height"] = props.height;
			if (props.minHeight) styles$1["--dialog--min-height"] = props.minHeight;
			if (props.maxHeight) styles$1["--dialog--max-height"] = props.maxHeight;
			if (props.maxWidth) styles$1["--dialog--max-width"] = props.maxWidth;
			if (props.minWidth) styles$1["--dialog--min-width"] = props.minWidth;
			return styles$1;
		});
		const appModalsId = `#${APP_MODALS_ELEMENT_ID}`;
		onMounted(() => {
			window.addEventListener("keydown", onWindowKeydown);
			props.eventBus?.on("close", closeDialog);
			const activeElement = document.activeElement;
			if (activeElement && uiStore.modalsById[props.name]?.open) activeElement.blur();
		});
		onBeforeUnmount(() => {
			props.eventBus?.off("close", closeDialog);
			window.removeEventListener("keydown", onWindowKeydown);
		});
		const uiStore = useUIStore();
		function handleEnter() {
			if (!uiStore.isModalActiveById[props.name]) return;
			emit("enter");
		}
		function onOpened() {
			props.eventBus?.emit("opened");
		}
		function onWindowKeydown(event) {
			if (event?.keyCode === 13) handleEnter();
		}
		async function closeDialog(returnData) {
			if (props.beforeClose) {
				if (await props.beforeClose() === false) return;
			}
			uiStore.closeModal(props.name);
			props.eventBus?.emit("closed", returnData);
		}
		async function onCloseDialog() {
			await closeDialog();
		}
		function getCustomClass() {
			let classes = props.customClass || "";
			if (props.classic) classes = `${classes} classic`;
			return classes;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElDialog), {
				"model-value": unref(uiStore).modalsById[__props.name]?.open,
				"before-close": onCloseDialog,
				class: normalizeClass({
					"dialog-wrapper": true,
					scrollable: __props.scrollable,
					[getCustomClass()]: true
				}),
				center: __props.center,
				width: __props.width,
				"show-close": __props.showClose,
				"close-on-click-modal": __props.closeOnClickModal,
				"close-on-press-escape": __props.closeOnPressEscape,
				style: normalizeStyle(styles.value),
				"append-to": __props.appendToBody ? void 0 : appModalsId,
				"lock-scroll": __props.lockScroll,
				"append-to-body": __props.appendToBody,
				"data-test-id": `${__props.name}-modal`,
				"modal-class": __props.center ? _ctx.$style.center : "",
				"z-index": unref(APP_Z_INDEXES).MODALS,
				onOpened
			}, createSlots({
				default: withCtx(() => [createBaseVNode("div", {
					class: "modal-content",
					onKeydown: [
						_cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])),
						withKeys(handleEnter, ["enter"]),
						withKeys(onCloseDialog, ["esc"])
					]
				}, [!__props.loading ? renderSlot(_ctx.$slots, "content", { key: 0 }) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.loader)
				}, [createVNode(unref(N8nSpinner_default))], 2))], 32), !__props.loading && _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.footer)
				}, [renderSlot(_ctx.$slots, "footer", { close: closeDialog })], 2)) : createCommentVNode("", true)]),
				_: 2
			}, [_ctx.$slots.header ? {
				name: "header",
				fn: withCtx(() => [!__props.loading ? renderSlot(_ctx.$slots, "header", normalizeProps(mergeProps({ key: 0 }, { closeDialog }))) : createCommentVNode("", true)]),
				key: "0"
			} : __props.title ? {
				name: "title",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(__props.centerTitle ? _ctx.$style.centerTitle : "") }, [__props.title ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nHeading_default), {
					tag: "h1",
					size: "xlarge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
					_: 1
				})])) : createCommentVNode("", true), __props.subtitle ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.subtitle)
				}, [createVNode(unref(N8nHeading_default), {
					tag: "h3",
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.subtitle), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true)], 2)]),
				key: "1"
			} : void 0]), 1032, [
				"model-value",
				"class",
				"center",
				"width",
				"show-close",
				"close-on-click-modal",
				"close-on-press-escape",
				"style",
				"append-to",
				"lock-scroll",
				"append-to-body",
				"data-test-id",
				"modal-class",
				"z-index"
			]);
		};
	}
});
var Modal_vue_vue_type_style_index_1_lang_module_default = {
	center: "_center_rhxla_125",
	loader: "_loader_rhxla_129",
	centerTitle: "_centerTitle_rhxla_138",
	subtitle: "_subtitle_rhxla_142",
	footer: "_footer_rhxla_146"
};
var Modal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(Modal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Modal_vue_vue_type_style_index_1_lang_module_default }]]);
export { Modal_default as t };
