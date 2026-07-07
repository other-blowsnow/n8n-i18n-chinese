import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, T as createCommentVNode, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-BqnE5xyQ.js";
import { Ja as N8nButton_default } from "./src-CSWS3PCK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
//#region src/app/components/common/SelectedItemsInfo.vue?vue&type=script&setup=true&lang.ts
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
			return __props.selectedCount > 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.selectionOptions),
				"data-test-id": `selected-items-info`
			}, [
				createBaseVNode("span", null, toDisplayString(getSelectedText()), 1),
				createVNode(unref(N8nButton_default), {
					variant: "subtle",
					"data-test-id": "delete-selected-button",
					label: unref(i18n).baseText("generic.delete"),
					class: normalizeClass(_ctx.$style.button),
					onClick: handleDeleteSelected
				}, null, 8, ["label", "class"]),
				createVNode(unref(N8nButton_default), {
					variant: "subtle",
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
	selectionOptions: "_selectionOptions_udl3r_125",
	button: "_button_udl3r_141"
};
var SelectedItemsInfo_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SelectedItemsInfo_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SelectedItemsInfo_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SelectedItemsInfo_default as t };
