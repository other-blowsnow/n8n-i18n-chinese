import { Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, M as createVNode, P as defineComponent, bt as withCtx, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { it as N8nInputLabel_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { hr as useToast } from "./users.store-qBZsmf9-.js";
import { t as useClipboard } from "./useClipboard-D9AU0bV9.js";
var CopyInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CopyInput",
	props: {
		label: { default: "" },
		hint: { default: "" },
		value: { default: "" },
		copyButtonText: { default: useI18n().baseText("generic.copy") },
		toastTitle: { default: useI18n().baseText("generic.copiedToClipboard") },
		toastMessage: {},
		size: { default: "medium" },
		collapse: { type: Boolean },
		redactValue: { type: Boolean },
		disableCopy: {
			type: Boolean,
			default: false
		}
	},
	emits: ["copy"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const clipboard = useClipboard();
		const { showMessage } = useToast();
		function copy() {
			if (props.disableCopy) return;
			emit("copy");
			clipboard.copy(props.value ?? "");
			showMessage({
				title: props.toastTitle,
				message: props.toastMessage,
				type: "success"
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nInputLabel_default), { label: __props.label }, {
				default: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass({
						[_ctx.$style.copyText]: true,
						[_ctx.$style[__props.size]]: true,
						[_ctx.$style.collapsed]: __props.collapse,
						[_ctx.$style.noHover]: __props.disableCopy,
						"ph-no-capture": __props.redactValue
					}),
					"data-test-id": "copy-input",
					onClick: copy
				}, [createBaseVNode("span", { ref: "copyInputValue" }, toDisplayString(__props.value), 513), !__props.disableCopy ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.copyButton)
				}, [createBaseVNode("span", null, toDisplayString(__props.copyButtonText), 1)], 2)) : createCommentVNode("", true)], 2)]),
				_: 1
			}, 8, ["label"]), __props.hint ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.hint)
			}, toDisplayString(__props.hint), 3)) : createCommentVNode("", true)]);
		};
	}
});
var CopyInput_vue_vue_type_style_index_0_lang_module_default = {
	copyText: "_copyText_nv2o2_125",
	noHover: "_noHover_nv2o2_145",
	large: "_large_nv2o2_149",
	medium: "_medium_nv2o2_154",
	collapsed: "_collapsed_nv2o2_159",
	copyButton: "_copyButton_nv2o2_164",
	hint: "_hint_nv2o2_180"
};
var CopyInput_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CopyInput_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CopyInput_vue_vue_type_style_index_0_lang_module_default }]]);
export { CopyInput_default as t };
