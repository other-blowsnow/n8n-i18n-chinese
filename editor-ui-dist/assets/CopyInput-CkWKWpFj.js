import { $ as openBlock, C as createBaseVNode, E as createElementBlock, N as defineComponent, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, j as createVNode, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { at as useI18n } from "./core-BYwHXEXE.js";
import { dt as N8nInputLabel_default } from "./src-BvkWedrz.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useToast } from "./useToast-DwpLkaYu.js";
import { t as useClipboard } from "./useClipboard-Dbvpl364.js";
//#region src/app/components/CopyInput.vue?vue&type=script&setup=true&lang.ts
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
	copyText: "_copyText_1cbd0_125",
	noHover: "_noHover_1cbd0_145",
	large: "_large_1cbd0_149",
	medium: "_medium_1cbd0_154",
	collapsed: "_collapsed_1cbd0_159",
	copyButton: "_copyButton_1cbd0_164",
	hint: "_hint_1cbd0_180"
};
var CopyInput_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CopyInput_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CopyInput_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { CopyInput_default as t };
