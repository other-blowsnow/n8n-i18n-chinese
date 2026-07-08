import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, X as onMounted, _ as Fragment, at as resolveComponent, bt as withCtx, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-Cx-W4qgg.js";
import { J as N8nMenuItem_default, Ya as N8nIcon_default, _t as useRouter, lt as N8nLink_default, qa as N8nText_default } from "./src-CSWS3PCK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as BaseLayout_default } from "./BaseLayout-BkrgWMgX.js";
import { ui as VIEWS } from "./constants-ZSgQBvyG.js";
import { Ei as isRouteLocationRaw } from "./workflowDocument.store-B_SrjkP6.js";
import { t as useRootStore } from "./useRootStore-BH7aCkdu.js";
import { f as useUIStore } from "./users.store-DlXqF6lz.js";
import { t as useAiGateway } from "./useAiGateway-wb28-05E.js";
import { t as useSettingsItems } from "./useSettingsItems-uzoQVKNY.js";
//#region src/app/components/SettingsSidebar.vue?vue&type=script&setup=true&lang.ts
var SettingsSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsSidebar",
	emits: ["return"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const rootStore = useRootStore();
		const uiStore = useUIStore();
		const { settingsItems } = useSettingsItems();
		const { fetchWallet, isEnabled } = useAiGateway();
		onMounted(() => {
			if (isEnabled.value) fetchWallet();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.returnButton),
					"data-test-id": "settings-back",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("return"))
				}, [createBaseVNode("i", null, [createVNode(unref(N8nIcon_default), { icon: "arrow-left" })]), createVNode(unref(N8nText_default), { bold: "" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings")), 1)]),
					_: 1
				})], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.items) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(settingsItems), (item) => {
					return openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: item.id,
						item
					}, null, 8, ["item"]);
				}), 128))], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.versionContainer) }, [createVNode(unref(N8nLink_default), {
					size: "small",
					onClick: _cache[1] || (_cache[1] = ($event) => unref(uiStore).openModal(unref("about")))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.version")) + " " + toDisplayString(unref(rootStore).versionCli), 1)]),
					_: 1
				})], 2)
			], 2);
		};
	}
});
var SettingsSidebar_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_ikjzi_125",
	returnButton: "_returnButton_ikjzi_134",
	items: "_items_ikjzi_145",
	versionContainer: "_versionContainer_ikjzi_151"
};
var SettingsSidebar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsSidebar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/layouts/SettingsLayout.vue?vue&type=script&setup=true&lang.ts
var SettingsLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsLayout",
	setup(__props) {
		const router = useRouter();
		const previousRoute = ref();
		function onReturn() {
			const resolvedSettingsRoute = router.resolve({ name: VIEWS.SETTINGS });
			const resolvedPreviousRoute = isRouteLocationRaw(previousRoute.value) ? router.resolve(previousRoute.value) : null;
			const backRoute = !resolvedPreviousRoute || resolvedPreviousRoute.path.startsWith(resolvedSettingsRoute.path) ? { name: VIEWS.HOMEPAGE } : resolvedPreviousRoute;
			router.push(backRoute);
		}
		onMounted(() => {
			previousRoute.value = router.options.history.state.back;
		});
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				sidebar: withCtx(() => [createVNode(SettingsSidebar_default, { onReturn })]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(_component_RouterView)], 2)], 2)]),
				_: 1
			});
		};
	}
});
var SettingsLayout_vue_vue_type_style_index_0_lang_module_default = {
	contentContainer: "_contentContainer_7wvpa_125",
	content: "_content_7wvpa_125"
};
var SettingsLayout_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsLayout_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsLayout_default as default };
