import { $ as openBlock, N as defineComponent, S as computed, Wt as unref, _n as normalizeClass, c as useCssModule, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { Z as N8nTag_default } from "./src-jV4M2fcN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { d as makeRestApiRequest, l as get } from "./_baseOrderBy-CeJ-xzyO.js";
async function getReport(context, query) {
	return (await get(context.baseUrl, "/breaking-changes/report", query)).data;
}
async function refreshReport(context, query) {
	return await makeRestApiRequest(context, "POST", query?.version ? `/breaking-changes/report/refresh?version=${query.version}` : "/breaking-changes/report/refresh");
}
async function getReportForRule(context, ruleId) {
	return (await get(context.baseUrl, `/breaking-changes/report/${ruleId}`)).data;
}
var SeverityTag_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nTag",
	__name: "SeverityTag",
	props: { severity: {} },
	setup(__props) {
		const $style = useCssModule();
		const tagsI18n = computed(() => ({
			critical: "Critical",
			medium: "Medium",
			low: "Low"
		}));
		const tagClasses = {
			critical: $style.TagCritical,
			medium: $style.TagMedium,
			low: $style.TagLow
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTag_default), {
				text: tagsI18n.value[__props.severity],
				clickable: false,
				class: normalizeClass(tagClasses[__props.severity])
			}, null, 8, ["text", "class"]);
		};
	}
});
var SeverityTag_vue_vue_type_style_index_0_lang_module_default = {
	TagCritical: "_TagCritical_1mw62_2",
	TagMedium: "_TagMedium_1mw62_8",
	TagLow: "_TagLow_1mw62_14"
};
var SeverityTag_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SeverityTag_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SeverityTag_vue_vue_type_style_index_0_lang_module_default }]]);
export { refreshReport as i, getReport as n, getReportForRule as r, SeverityTag_default as t };
