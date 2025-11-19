import { C as computed, D as createElementBlock, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, W as mergeProps, Z as onMounted, _ as Fragment, _n as normalizeClass, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, ot as resolveComponent, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { A as N8nMenuItem_default, In as N8nText_default, mt as N8nLink_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter } from "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./empty-RTEMfF4N.js";
import { Bo as useSettingsStore, Gn as hasPermission, Ni as useUIStore, Qs as useRootStore, i as usePostHog, ur as isRouteLocationRaw } from "./useTelemetry-C2EhNQhN.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { Rs as SSO_JUST_IN_TIME_PROVSIONING_EXPERIMENT, ho as ABOUT_MODAL_KEY, mo as VIEWS } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
function useUserHelpers(router) {
	const canUserAccessRouteByName = (name) => {
		return canUserAccessRoute(router.resolve({ name }));
	};
	const canUserAccessRoute = (route) => {
		const middleware = route.meta?.middleware;
		const middlewareOptions = route.meta?.middlewareOptions;
		if (!middleware) return true;
		return hasPermission(middleware, middlewareOptions);
	};
	return { canUserAccessRouteByName };
}
var SettingsSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsSidebar",
	emits: ["return"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const router = useRouter();
		const i18n = useI18n();
		const { canUserAccessRouteByName } = useUserHelpers(router);
		const rootStore = useRootStore();
		const settingsStore = useSettingsStore();
		const posthogStore = usePostHog();
		const uiStore = useUIStore();
		const sidebarMenuItems = computed(() => {
			const menuItems = [
				{
					id: "settings-usage-and-plan",
					icon: "chart-column-decreasing",
					label: i18n.baseText("settings.usageAndPlan.title"),
					position: "top",
					available: canUserAccessRouteByName(VIEWS.USAGE),
					route: { to: { name: VIEWS.USAGE } }
				},
				{
					id: "settings-personal",
					icon: "circle-user-round",
					label: i18n.baseText("settings.personal"),
					position: "top",
					available: canUserAccessRouteByName(VIEWS.PERSONAL_SETTINGS),
					route: { to: { name: VIEWS.PERSONAL_SETTINGS } }
				},
				{
					id: "settings-users",
					icon: "user-round",
					label: i18n.baseText("settings.users"),
					position: "top",
					available: canUserAccessRouteByName(VIEWS.USERS_SETTINGS),
					route: { to: { name: VIEWS.USERS_SETTINGS } }
				},
				{
					id: "settings-project-roles",
					icon: "user-round",
					label: i18n.baseText("settings.projectRoles"),
					position: "top",
					available: canUserAccessRouteByName(VIEWS.PROJECT_ROLES_SETTINGS),
					route: { to: { name: VIEWS.PROJECT_ROLES_SETTINGS } }
				},
				{
					id: "settings-api",
					icon: "plug",
					label: i18n.baseText("settings.n8napi"),
					position: "top",
					available: settingsStore.isPublicApiEnabled && canUserAccessRouteByName(VIEWS.API_SETTINGS),
					route: { to: { name: VIEWS.API_SETTINGS } }
				},
				{
					id: "settings-external-secrets",
					icon: "vault",
					label: i18n.baseText("settings.externalSecrets.title"),
					position: "top",
					available: canUserAccessRouteByName(VIEWS.EXTERNAL_SECRETS_SETTINGS),
					route: { to: { name: VIEWS.EXTERNAL_SECRETS_SETTINGS } }
				},
				{
					id: "settings-source-control",
					icon: "git-branch",
					label: i18n.baseText("settings.sourceControl.title"),
					position: "top",
					available: canUserAccessRouteByName(VIEWS.SOURCE_CONTROL),
					route: { to: { name: VIEWS.SOURCE_CONTROL } }
				},
				{
					id: "settings-sso",
					icon: "user-lock",
					label: i18n.baseText("settings.sso"),
					position: "top",
					available: canUserAccessRouteByName(VIEWS.SSO_SETTINGS),
					route: { to: { name: VIEWS.SSO_SETTINGS } }
				},
				{
					id: "settings-ldap",
					icon: "network",
					label: i18n.baseText("settings.ldap"),
					position: "top",
					available: canUserAccessRouteByName(VIEWS.LDAP_SETTINGS),
					route: { to: { name: VIEWS.LDAP_SETTINGS } }
				},
				{
					id: "settings-provisioning",
					icon: "toolbox",
					label: i18n.baseText("settings.provisioning.title"),
					position: "top",
					available: canUserAccessRouteByName(VIEWS.PROVISIONING_SETTINGS) && posthogStore.isFeatureEnabled(SSO_JUST_IN_TIME_PROVSIONING_EXPERIMENT.name),
					route: { to: { name: VIEWS.PROVISIONING_SETTINGS } }
				},
				{
					id: "settings-workersview",
					icon: "waypoints",
					label: i18n.baseText("mainSidebar.workersView"),
					position: "top",
					available: settingsStore.isQueueModeEnabled && hasPermission(["rbac"], { rbac: { scope: "workersView:manage" } }),
					route: { to: { name: VIEWS.WORKER_VIEW } }
				}
			];
			menuItems.push({
				id: "settings-log-streaming",
				icon: "log-in",
				label: i18n.baseText("settings.log-streaming"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.LOG_STREAMING_SETTINGS),
				route: { to: { name: VIEWS.LOG_STREAMING_SETTINGS } }
			});
			menuItems.push({
				id: "settings-community-nodes",
				icon: "box",
				label: i18n.baseText("settings.communityNodes"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.COMMUNITY_NODES),
				route: { to: { name: VIEWS.COMMUNITY_NODES } }
			});
			const moduleItems = uiStore.settingsSidebarItems;
			return menuItems.concat(moduleItems.filter((item) => !menuItems.some((m) => m.id === item.id)));
		});
		const visibleItems = computed(() => sidebarMenuItems.value.filter((item) => item.available));
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
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.items) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleItems.value, (item) => {
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
