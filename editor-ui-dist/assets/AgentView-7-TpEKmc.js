import { $ as openBlock, E as createElementBlock, N as defineComponent, X as onMounted, at as resolveComponent, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-B1khmGvj.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useDocumentTitle } from "./useDocumentTitle-DpX7vWN0.js";
//#region src/features/agents/views/AgentView.vue?vue&type=script&setup=true&lang.ts
var AgentView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentView",
	setup(__props) {
		const documentTitle = useDocumentTitle();
		const locale = useI18n();
		onMounted(async () => {
			documentTitle.set(locale.baseText("agents.heading"));
		});
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.agentView) }, [createVNode(_component_RouterView)], 2);
		};
	}
});
var AgentView_vue_vue_type_style_index_0_lang_module_default = { agentView: "_agentView_1rlmu_2" };
var AgentView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentView_default as default };
