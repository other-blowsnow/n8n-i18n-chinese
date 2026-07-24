import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ot as useI18n } from "./core-CPznNyVT.js";
import { Ji as N8nTooltip_default, ro as N8nIcon_default } from "./src-bSQwfFcX.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
//#region src/features/resolvers/components/PrivateCredentialIcon.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 0 };
var PrivateCredentialIcon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "PrivateCredentialIcon",
	props: {
		tooltip: {
			type: Boolean,
			default: true
		},
		tooltipTitle: { default: void 0 },
		tooltipText: { default: void 0 }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const body = computed(() => props.tooltipText ?? i18n.baseText("credentials.private.tooltip"));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				"as-child": "",
				disabled: !__props.tooltip,
				placement: "top"
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [__props.tooltipTitle ? (openBlock(), createElementBlock("strong", _hoisted_1, toDisplayString(__props.tooltipTitle), 1)) : createCommentVNode("", true), createBaseVNode("span", null, toDisplayString(body.value), 1)], 2)]),
				default: withCtx(() => [createVNode(unref(N8nIcon_default), mergeProps(_ctx.$attrs, {
					"data-test-id": "private-credential-icon",
					icon: "user-round-key"
				}), null, 16)]),
				_: 1
			}, 8, ["disabled"]);
		};
	}
});
var PrivateCredentialIcon_vue_vue_type_style_index_0_lang_module_default = { content: "_content_10fle_125" };
var PrivateCredentialIcon_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PrivateCredentialIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PrivateCredentialIcon_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { PrivateCredentialIcon_default as t };
