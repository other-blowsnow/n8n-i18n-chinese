import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, W as mergeProps, Z as onMounted, _ as Fragment, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, ot as resolveComponent, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { Gn as N8nIcon_default, Hn as N8nText_default, P as N8nMenuItem_default, mt as N8nLink_default } from "./src-j4VKDieO.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { y as useRouter } from "./truncate-BlCeUq7F.js";
import "./empty-BuGRxzl4.js";
import { Wi as useUIStore, xr as isRouteLocationRaw } from "./builder.store-BjWbk2Wl.js";
import "./sanitize-html-Cft-jOcY.js";
import "./CalendarDate-B-JEhNYg.js";
import "./path-browserify-BgjP7RyT.js";
import { Ho as ABOUT_MODAL_KEY, Vo as VIEWS } from "./constants-ksa9xIxI.js";
import "./merge-D6lLi7TL.js";
import { r as useRootStore } from "./_baseOrderBy-B2FQHwl_.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-Cb7xvwM5.js";
import { t as useSettingsItems } from "./useSettingsItems-Ck-M2q_A.js";
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
	container: "_container_189g8_123",
	returnButton: "_returnButton_189g8_132",
	items: "_items_189g8_143",
	versionContainer: "_versionContainer_189g8_149"
};
var SettingsSidebar_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsSidebar_vue_vue_type_style_index_0_lang_module_default }]]);
var SettingsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsView",
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
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(SettingsSidebar_default, { onReturn }), createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(_component_RouterView, mergeProps({ name: "settingsView" }, _ctx.$attrs), null, 16)], 2)], 2)], 2);
		};
	}
});
var SettingsView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_93ml1_123",
	contentContainer: "_contentContainer_93ml1_130 _container_93ml1_123",
	content: "_content_93ml1_130"
};
var SettingsView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsView_vue_vue_type_style_index_0_lang_module_default }]]);
export { SettingsView_default as default };
