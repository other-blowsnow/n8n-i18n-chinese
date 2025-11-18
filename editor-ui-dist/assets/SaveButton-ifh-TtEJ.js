import { C as computed, D as createElementBlock, Gt as unref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, _ as Fragment, _n as normalizeClass, bt as withCtx, et as openBlock, h as withModifiers } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { Ln as N8nButton_default } from "./src-BmrdBtCN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-DOaNiBZG.js";
var SaveButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SaveButton",
	props: {
		saved: { type: Boolean },
		isSaving: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		type: { default: "primary" },
		withShortcut: {
			type: Boolean,
			default: false
		},
		shortcutTooltip: {},
		savingLabel: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const saveButtonLabel = computed(() => {
			return props.isSaving ? props.savingLabel ?? i18n.baseText("saveButton.saving") : i18n.baseText("saveButton.save");
		});
		const shortcutTooltipLabel = computed(() => {
			return props.shortcutTooltip ?? i18n.baseText("saveButton.save");
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "save-button"
			}, [_ctx.saved ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(_ctx.$style.saved),
				onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["prevent", "stop"]))
			}, toDisplayString(unref(i18n).baseText("saveButton.saved")), 3)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [_ctx.withShortcut ? (openBlock(), createBlock(KeyboardShortcutTooltip_default, {
				key: 0,
				label: shortcutTooltipLabel.value,
				shortcut: {
					keys: ["s"],
					metaKey: true
				},
				placement: "bottom"
			}, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					label: saveButtonLabel.value,
					loading: _ctx.isSaving,
					disabled: _ctx.disabled,
					class: normalizeClass(_ctx.$style.button),
					type: _ctx.type
				}, null, 8, [
					"label",
					"loading",
					"disabled",
					"class",
					"type"
				])]),
				_: 1
			}, 8, ["label"])) : (openBlock(), createBlock(unref(N8nButton_default), {
				key: 1,
				label: saveButtonLabel.value,
				loading: _ctx.isSaving,
				disabled: _ctx.disabled,
				class: normalizeClass(_ctx.$style.button),
				type: _ctx.type
			}, null, 8, [
				"label",
				"loading",
				"disabled",
				"class",
				"type"
			]))], 64))], 2);
		};
	}
});
var SaveButton_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_cqvm4_123",
	button: "_button_cqvm4_130",
	saved: "_saved_cqvm4_134"
};
var SaveButton_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SaveButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SaveButton_vue_vue_type_style_index_0_lang_module_default }]]);
export { SaveButton_default as t };
