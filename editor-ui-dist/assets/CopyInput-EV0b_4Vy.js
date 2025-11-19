import { D as createElementBlock, E as createCommentVNode, Gt as unref, M as createVNode, P as defineComponent, Sn as toDisplayString, _n as normalizeClass, bt as withCtx, et as openBlock, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { Y as N8nInputLabel_default } from "./src-BmrdBtCN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import { t as useClipboard } from "./useClipboard-CDW2KXIc.js";
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
			return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nInputLabel_default), { label: _ctx.label }, {
				default: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass({
						[_ctx.$style.copyText]: true,
						[_ctx.$style[_ctx.size]]: true,
						[_ctx.$style.collapsed]: _ctx.collapse,
						[_ctx.$style.noHover]: _ctx.disableCopy,
						"ph-no-capture": _ctx.redactValue
					}),
					"data-test-id": "copy-input",
					onClick: copy
				}, [createBaseVNode("span", { ref: "copyInputValue" }, toDisplayString(_ctx.value), 513), !_ctx.disableCopy ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.copyButton)
				}, [createBaseVNode("span", null, toDisplayString(_ctx.copyButtonText), 1)], 2)) : createCommentVNode("", true)], 2)]),
				_: 1
			}, 8, ["label"]), _ctx.hint ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.hint)
			}, toDisplayString(_ctx.hint), 3)) : createCommentVNode("", true)]);
		};
	}
});
var CopyInput_vue_vue_type_style_index_0_lang_module_default = {
	copyText: "_copyText_ih6nn_123",
	noHover: "_noHover_ih6nn_143",
	large: "_large_ih6nn_147",
	medium: "_medium_ih6nn_152",
	collapsed: "_collapsed_ih6nn_157",
	copyButton: "_copyButton_ih6nn_162",
	hint: "_hint_ih6nn_178"
};
var CopyInput_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CopyInput_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CopyInput_vue_vue_type_style_index_0_lang_module_default }]]);
export { CopyInput_default as t };
