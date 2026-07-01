import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, bt as withCtx, gt as watch, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { s as useI18n } from "./src-DaQgCvnv.js";
import { Ga as N8nHeading_default, Ja as N8nButton_default, X as N8nTag_default, _t as useRouter, gt as useRoute, k as N8nTabs_default, lt as N8nLink_default, qa as N8nText_default } from "./src-BVC_ZvSs.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useMessage } from "./useMessage-Bw3OcMmP.js";
import { t as useToast } from "./useToast-BvHrF3GC.js";
import { u as CUSTOM_ROLES_DOCS_URL, ui as VIEWS } from "./constants-Xm8Zfd-h.js";
import { t as useSettingsStore } from "./settings.store-DKCHFcby.js";
import { p as useTelemetry } from "./users.store-B52ADdpG.js";
import { t as useDocumentTitle } from "./useDocumentTitle-CMi1STqd.js";
import { t as useRolesStore } from "./roles.store-C06NLxLU.js";
import { n as RolesTable_default, t as ProjectRolesView_default } from "./ProjectRolesView-BCcX50lk.js";
//#endregion
//#region src/features/project-roles/InstanceRolesView.vue
var InstanceRolesView_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceRolesView",
	setup(__props) {
		const { showError, showMessage } = useToast();
		const rolesStore = useRolesStore();
		const message = useMessage();
		const i18n = useI18n();
		const settingsStore = useSettingsStore();
		const telemetry = useTelemetry();
		async function deleteRole(item) {
			if (await message.confirm(i18n.baseText("roles.action.delete.text", { interpolate: { roleName: item.displayName } }), i18n.baseText("roles.action.delete.title", { interpolate: { roleName: item.displayName } }), {
				type: "warning",
				confirmButtonText: i18n.baseText("roles.action.delete"),
				cancelButtonText: i18n.baseText("roles.action.cancel")
			}) !== "confirm") return;
			try {
				await rolesStore.deleteRole(item.slug);
				const index = rolesStore.roles.global.findIndex((role) => role.slug === item.slug);
				if (index !== -1) rolesStore.roles.global.splice(index, 1);
				showMessage({
					title: i18n.baseText("roles.action.delete.success"),
					type: "success"
				});
			} catch (error) {
				showError(error, i18n.baseText("roles.action.delete.error"));
			}
		}
		async function duplicateRole(item) {
			try {
				const displayName = i18n.baseText("roles.action.duplicate.name", { interpolate: { roleName: item.displayName } });
				const role = await rolesStore.createRole({
					displayName,
					description: item.description ?? void 0,
					roleType: "global",
					scopes: item.scopes
				});
				rolesStore.roles.global.push(role);
				rolesStore.fetchRoles();
				telemetry.track("User duplicated role", {
					role_id: item.slug,
					role_name: item.displayName,
					permissions: item.scopes
				});
				showMessage({
					type: "success",
					message: i18n.baseText("roles.action.duplicate.success", { interpolate: {
						roleName: item.displayName,
						roleDuplicateName: displayName
					} })
				});
			} catch (error) {
				showError(error, i18n.baseText("roles.action.duplicate.error"));
			}
		}
		const actions = {
			duplicate: duplicateRole,
			delete: deleteRole
		};
		function rowActions(_item) {
			return [{
				label: i18n.baseText("roles.action.duplicate"),
				value: "duplicate"
			}, {
				label: i18n.baseText("roles.action.delete"),
				value: "delete"
			}];
		}
		function handleAction(action, item) {
			actions[action](item);
		}
		function handleRowClick(_item) {}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(RolesTable_default, {
				roles: unref(rolesStore).processedInstanceRoles,
				"show-paywall": !unref(settingsStore).isCustomRolesFeatureEnabled,
				"count-column-title": unref(i18n).baseText("instanceRoles.table.membersAssigned"),
				"count-column-key": "usedByUsers",
				"row-actions": rowActions,
				onAction: handleAction,
				onRowClick: handleRowClick
			}, null, 8, [
				"roles",
				"show-paywall",
				"count-column-title"
			])]);
		};
	}
});
//#endregion
//#region src/features/project-roles/RolesView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "pb-xl" };
var DEFAULT_TAB = "instance";
var RolesView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RolesView",
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const i18n = useI18n();
		const rolesStore = useRolesStore();
		const settingsStore = useSettingsStore();
		const { showError } = useToast();
		function normalizeTab(value) {
			return value === "project" ? "project" : DEFAULT_TAB;
		}
		const activeTab = ref(normalizeTab(route.query.tab));
		function addRole() {
			if (activeTab.value === "project") router.push({ name: VIEWS.PROJECT_NEW_ROLE });
		}
		const tabOptions = computed(() => [{
			label: i18n.baseText("roles.tab.instance"),
			value: "instance"
		}, {
			label: i18n.baseText("roles.tab.project"),
			value: "project"
		}]);
		watch(activeTab, (tab) => {
			if (normalizeTab(route.query.tab) !== tab) router.replace({ query: {
				...route.query,
				tab
			} });
		});
		watch(() => route.query.tab, (tab) => {
			activeTab.value = normalizeTab(tab);
		});
		onMounted(async () => {
			useDocumentTitle().set(i18n.baseText("settings.roles"));
			try {
				await rolesStore.fetchRoles();
			} catch (error) {
				showError(error, i18n.baseText("roles.fetch.error"));
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", { class: normalizeClass(["mb-m", _ctx.$style.headerTitle]) }, [createVNode(unref(N8nHeading_default), {
					tag: "h1",
					size: "2xlarge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.roles")), 1)]),
					_: 1
				}), createVNode(unref(N8nTag_default), {
					clickable: false,
					text: "New",
					class: normalizeClass(_ctx.$style.newTag)
				}, null, 8, ["class"])], 2),
				createVNode(unref(N8nText_default), {
					color: "text-base",
					class: "mb-xl",
					tag: "p"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.description")) + " ", 1), createVNode(unref(N8nLink_default), {
						href: unref(CUSTOM_ROLES_DOCS_URL),
						target: "_blank",
						"new-window": ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.description.docsLink")), 1)]),
						_: 1
					}, 8, ["href"])]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass([_ctx.$style.tabsRow, "mb-l"]) }, [createVNode(unref(N8nTabs_default), {
					modelValue: activeTab.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeTab.value = $event),
					options: tabOptions.value,
					"data-test-id": "roles-tabs"
				}, null, 8, ["modelValue", "options"]), unref(settingsStore).isCustomRolesFeatureEnabled ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "solid",
					icon: "plus",
					onClick: addRole
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.addRole")), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 2),
				activeTab.value === "instance" ? (openBlock(), createBlock(InstanceRolesView_default, { key: 0 })) : (openBlock(), createBlock(ProjectRolesView_default, {
					key: 1,
					embedded: ""
				}))
			]);
		};
	}
});
var RolesView_vue_vue_type_style_index_0_lang_module_default = {
	headerTitle: "_headerTitle_1z0lv_2",
	tabsRow: "_tabsRow_1z0lv_8",
	newTag: "_newTag_1z0lv_14"
};
var RolesView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RolesView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RolesView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { RolesView_default as default };
