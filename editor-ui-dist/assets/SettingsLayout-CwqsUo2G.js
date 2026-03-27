import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, at as resolveComponent, j as createVNode, rt as renderList, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-65UNw25j.js";
import { $i as N8nIcon_default, X as N8nMenuItem_default, Zi as N8nText_default, _t as useRouter, lt as N8nLink_default } from "./src-BushEFrD.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import { ii as isRouteLocationRaw, r as useUIStore } from "./users.store-buY8IFeq.js";
import { t as BaseLayout_default } from "./BaseLayout-DhKrLKTx.js";
import { hs as ABOUT_MODAL_KEY, ms as VIEWS } from "./constants-DgFYHRsp.js";
import "./merge-BTwzEvFa.js";
import { r as useRootStore } from "./_baseOrderBy-C-vNG9pj.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DMBVth9W.js";
import { t as useSettingsItems } from "./useSettingsItems-D6uX2WFZ.js";
var SettingsSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsSidebar",
	emits: ["return"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const rootStore = useRootStore();
		const uiStore = useUIStore();
		const { settingsItems } = useSettingsItems();
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
var SettingsSidebar_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsSidebar_vue_vue_type_style_index_0_lang_module_default }]]);
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
var SettingsLayout_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsLayout_vue_vue_type_style_index_0_lang_module_default }]]);
export { SettingsLayout_default as default };
