import { $ as openBlock, A as createTextVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { at as useI18n } from "./core-CbSPiy-O.js";
import { Mt as N8nLoading_default, Yi as N8nHeading_default } from "./src-BEPXK8RZ.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useRootStore } from "./useRootStore-D8wbz-kO.js";
import { $t as getClusterInfo } from "./settings.store-BOIB94F8.js";
import { t as useDocumentTitle } from "./useDocumentTitle-B-RS21z3.js";
//#region src/features/settings/instanceRegistry/views/SettingsInstanceRegistryView.vue?vue&type=script&setup=true&lang.ts
var SettingsInstanceRegistryView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsInstanceRegistryView",
	setup(__props) {
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const rootStore = useRootStore();
		const loading = ref(true);
		const clusterInfo = ref(null);
		const error = ref(null);
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.instanceRegistry.title"));
			try {
				clusterInfo.value = await getClusterInfo(rootStore.restApiContext);
			} catch (e) {
				console.error("Failed to load instance registry", e);
				error.value = i18n.baseText("settings.instanceRegistry.error");
			} finally {
				loading.value = false;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(unref(N8nHeading_default), {
				size: "2xlarge",
				class: normalizeClass(_ctx.$style.heading)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.instanceRegistry.title")), 1)]),
				_: 1
			}, 8, ["class"]), loading.value ? (openBlock(), createBlock(unref(N8nLoading_default), {
				key: 0,
				rows: 4
			})) : error.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.error)
			}, toDisplayString(error.value), 3)) : (openBlock(), createElementBlock("pre", {
				key: 2,
				class: normalizeClass(_ctx.$style.json)
			}, toDisplayString(JSON.stringify(clusterInfo.value, null, 2)), 3))], 2);
		};
	}
});
var SettingsInstanceRegistryView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_w3bpb_125",
	heading: "_heading_w3bpb_129",
	json: "_json_w3bpb_133",
	error: "_error_w3bpb_145"
};
var SettingsInstanceRegistryView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsInstanceRegistryView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsInstanceRegistryView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsInstanceRegistryView_default as default };
