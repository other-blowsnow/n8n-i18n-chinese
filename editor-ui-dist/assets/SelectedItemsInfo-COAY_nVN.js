import { D as createElementBlock, E as createCommentVNode, Gt as unref, M as createVNode, P as defineComponent, Sn as toDisplayString, _n as normalizeClass, et as openBlock, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { Ln as N8nButton_default } from "./src-BmrdBtCN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
var SelectedItemsInfo_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SelectedItemsInfo",
	props: { selectedCount: {} },
	emits: ["deleteSelected", "clearSelection"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const getSelectedText = () => {
			return i18n.baseText("generic.list.selected", {
				adjustToNumber: props.selectedCount,
				interpolate: { count: `${props.selectedCount}` }
			});
		};
		const getClearSelectionText = () => {
			return i18n.baseText("generic.list.clearSelection");
		};
		const handleDeleteSelected = () => {
			emit("deleteSelected");
		};
		const handleClearSelection = () => {
			emit("clearSelection");
		};
		return (_ctx, _cache) => {
			return _ctx.selectedCount > 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.selectionOptions),
				"data-test-id": `selected-items-info`
			}, [
				createBaseVNode("span", null, toDisplayString(getSelectedText()), 1),
				createVNode(unref(N8nButton_default), {
					type: "tertiary",
					"data-test-id": "delete-selected-button",
					label: unref(i18n).baseText("generic.delete"),
					class: normalizeClass(_ctx.$style.button),
					onClick: handleDeleteSelected
				}, null, 8, ["label", "class"]),
				createVNode(unref(N8nButton_default), {
					type: "tertiary",
					"data-test-id": "clear-selection-button",
					label: getClearSelectionText(),
					class: normalizeClass(_ctx.$style.button),
					onClick: handleClearSelection
				}, null, 8, ["label", "class"])
			], 2)) : createCommentVNode("", true);
		};
	}
});
var SelectedItemsInfo_vue_vue_type_style_index_0_lang_module_default = {
	selectionOptions: "_selectionOptions_1rr85_123",
	button: "_button_1rr85_139"
};
var SelectedItemsInfo_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SelectedItemsInfo_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SelectedItemsInfo_vue_vue_type_style_index_0_lang_module_default }]]);
export { SelectedItemsInfo_default as t };
