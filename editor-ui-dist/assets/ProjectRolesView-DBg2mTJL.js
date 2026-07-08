import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, c as useCssModule, h as withModifiers, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-Cx-W4qgg.js";
import { Ga as N8nHeading_default, Ja as N8nButton_default, Lt as N8nActionToggle_default, St as N8nDatatable_default, X as N8nTag_default, Ya as N8nIcon_default, _t as useRouter, qa as N8nText_default, ut as RouterLink } from "./src-CSWS3PCK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useMessage } from "./useMessage-By7-feNY.js";
import { t as useToast } from "./useToast-BSzM4LgJ.js";
import { u as CUSTOM_ROLES_DOCS_URL, ui as VIEWS } from "./constants-ZSgQBvyG.js";
import { t as useSettingsStore } from "./settings.store-fzkHYqQC.js";
import { p as useTelemetry } from "./users.store-DlXqF6lz.js";
import { t as require_dateformat } from "./dateformat-9ZHpj92n.js";
import { t as useDocumentTitle } from "./useDocumentTitle-CSw5LcXz.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DtWPu5uu.js";
import { t as useRolesStore } from "./roles.store-Bf3EI4g0.js";
//#region src/features/roles/components/RolesTable.vue?vue&type=script&setup=true&lang.ts
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var _hoisted_1$1 = ["onClick"];
var RolesTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RolesTable",
	props: {
		roles: {},
		showPaywall: { type: Boolean },
		countColumnTitle: {},
		countColumnKey: {},
		rowActions: { type: Function },
		getCountRoute: { type: Function }
	},
	emits: ["action", "row-click"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const $style = useCssModule();
		const settingsStore = useSettingsStore();
		const { goToUpgrade } = usePageRedirectionHelper();
		const columns = computed(() => [
			{
				id: "displayName",
				path: "displayName",
				label: i18n.baseText("roles.table.name"),
				width: "400px"
			},
			{
				id: "systemRole",
				path: "systemRole",
				label: i18n.baseText("roles.table.type")
			},
			{
				id: props.countColumnKey,
				path: props.countColumnKey,
				label: props.countColumnTitle
			},
			{
				id: "updatedAt",
				path: "updatedAt",
				label: i18n.baseText("roles.table.lastEdited")
			},
			{
				id: "actions",
				path: "actions",
				label: "",
				width: "50px"
			}
		]);
		const rows = computed(() => props.roles.map((r) => ({
			...r,
			id: r.slug
		})));
		function resolveCountRoute(row) {
			return props.getCountRoute?.(row) ?? "";
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [__props.showPaywall ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref($style).paywallContainer)
			}, [
				createBaseVNode("div", { class: normalizeClass(unref($style).paywallIcons) }, [
					createBaseVNode("div", { class: normalizeClass([unref($style).iconBox, unref($style).iconBoxLeft]) }, [createVNode(unref(N8nIcon_default), {
						icon: "eye-off",
						size: 20,
						color: "foreground-xdark"
					})], 2),
					createBaseVNode("div", { class: normalizeClass([unref($style).iconBox, unref($style).iconBoxCenter]) }, [createVNode(unref(N8nIcon_default), {
						icon: "shield-user",
						size: 20,
						color: "foreground-xdark"
					})], 2),
					createBaseVNode("div", { class: normalizeClass([unref($style).iconBox, unref($style).iconBoxRight]) }, [createVNode(unref(N8nIcon_default), {
						icon: "pencil-off",
						size: 20,
						color: "foreground-xdark"
					})], 2)
				], 2),
				createBaseVNode("div", { class: normalizeClass(unref($style).paywallText) }, [createVNode(unref(N8nText_default), {
					tag: "p",
					size: "medium",
					bold: true,
					align: "center"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.paywall.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					tag: "p",
					color: "text-light",
					align: "center"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.paywall.description")), 1)]),
					_: 1
				})], 2),
				createBaseVNode("div", { class: normalizeClass(unref($style).paywallActions) }, [createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "medium",
					href: unref(CUSTOM_ROLES_DOCS_URL),
					target: "_blank"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.learnMore")) + " ", 1), createVNode(unref(N8nIcon_default), {
						icon: "external-link",
						size: "small"
					})]),
					_: 1
				}, 8, ["href"]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "medium",
					onClick: _cache[0] || (_cache[0] = ($event) => unref(goToUpgrade)("custom-roles-list", "upgrade-custom-roles"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(settingsStore).isCloudDeployment ? unref(i18n).baseText("roles.paywall.viewPlans") : unref(i18n).baseText("generic.upgrade")), 1)]),
					_: 1
				})], 2)
			], 2)) : (openBlock(), createBlock(unref(N8nDatatable_default), {
				key: 1,
				columns: columns.value,
				rows: rows.value,
				pagination: false
			}, {
				row: withCtx(({ row }) => [createBaseVNode("tr", {
					class: normalizeClass([unref($style).tallRow, unref($style).clickableRow]),
					onClick: ($event) => emit("row-click", row)
				}, [
					createBaseVNode("td", null, [createVNode(unref(N8nText_default), {
						tag: "div",
						class: "mb-4xs"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(row.displayName), 1)]),
						_: 2
					}, 1024), createVNode(unref(N8nText_default), {
						tag: "div",
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(row.description), 1)]),
						_: 2
					}, 1024)]),
					createBaseVNode("td", null, [row.systemRole ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nIcon_default), { icon: "lock" }), createTextVNode(" " + toDisplayString(unref(i18n).baseText("roles.literal.system")), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nIcon_default), { icon: "user-pen" }), createTextVNode(" " + toDisplayString(unref(i18n).baseText("roles.literal.custom")), 1)], 64))]),
					createBaseVNode("td", { class: normalizeClass(unref($style).countCell) }, [(row[__props.countColumnKey] ?? 0) > 0 && resolveCountRoute(row) ? (openBlock(), createBlock(unref(RouterLink), {
						key: 0,
						to: resolveCountRoute(row),
						class: normalizeClass(unref($style).countLink),
						onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(row[__props.countColumnKey]), 1)]),
						_: 2
					}, 1032, ["to", "class"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(row[__props.countColumnKey] ?? 0), 1)], 64))], 2),
					createBaseVNode("td", null, toDisplayString(row.updatedAt && !row.systemRole ? unref(import_dateformat.default)(row.updatedAt, "d mmm, yyyy") : "—"), 1),
					createBaseVNode("td", { class: normalizeClass(unref($style).actionsCell) }, [!row.systemRole ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
						key: 0,
						actions: __props.rowActions(row),
						onAction: ($event) => emit("action", $event, row)
					}, null, 8, ["actions", "onAction"])) : createCommentVNode("", true)], 2)
				], 10, _hoisted_1$1)]),
				_: 1
			}, 8, ["columns", "rows"]))]);
		};
	}
});
var RolesTable_vue_vue_type_style_index_0_lang_module_default = {
	paywallContainer: "_paywallContainer_1n7d2_2",
	paywallIcons: "_paywallIcons_1n7d2_12",
	iconBox: "_iconBox_1n7d2_18",
	iconBoxLeft: "_iconBoxLeft_1n7d2_33",
	iconBoxCenter: "_iconBoxCenter_1n7d2_38",
	iconBoxRight: "_iconBoxRight_1n7d2_47",
	paywallText: "_paywallText_1n7d2_52",
	paywallActions: "_paywallActions_1n7d2_59",
	clickableRow: "_clickableRow_1n7d2_65",
	tallRow: "_tallRow_1n7d2_69",
	countCell: "_countCell_1n7d2_73",
	actionsCell: "_actionsCell_1n7d2_78",
	countLink: "_countLink_1n7d2_83"
};
var RolesTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RolesTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RolesTable_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-4fce0a97"]]);
//#endregion
//#region src/features/roles/composables/useRolesListActions.ts
function useRolesListActions({ roleType, views, onBeforeDelete }) {
	const { showError, showMessage } = useToast();
	const rolesStore = useRolesStore();
	const message = useMessage();
	const i18n = useI18n();
	const telemetry = useTelemetry();
	const router = useRouter();
	const storeKey = roleType === "project" ? "project" : "global";
	async function duplicateRole(item) {
		try {
			const displayName = i18n.baseText("roles.action.duplicate.name", { interpolate: { roleName: item.displayName } });
			const role = await rolesStore.createRole({
				displayName,
				description: item.description ?? void 0,
				roleType,
				scopes: item.scopes
			});
			rolesStore.roles[storeKey].push(role);
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
			return role;
		} catch (error) {
			showError(error, i18n.baseText("roles.action.duplicate.error"));
			return;
		}
	}
	async function deleteRole(item) {
		if (onBeforeDelete) {
			if (!await onBeforeDelete(item)) return;
		}
		if (await message.confirm(i18n.baseText("roles.action.delete.text", { interpolate: { roleName: item.displayName } }), i18n.baseText("roles.action.delete.title", { interpolate: { roleName: item.displayName } }), {
			type: "warning",
			confirmButtonText: i18n.baseText("roles.action.delete"),
			cancelButtonText: i18n.baseText("roles.action.cancel")
		}) !== "confirm") return;
		try {
			await rolesStore.deleteRole(item.slug);
			const index = rolesStore.roles[storeKey].findIndex((r) => r.slug === item.slug);
			if (index !== -1) rolesStore.roles[storeKey].splice(index, 1);
			showMessage({
				title: i18n.baseText("roles.action.delete.success"),
				type: "success"
			});
		} catch (error) {
			showError(error, i18n.baseText("roles.action.delete.error"));
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
	function handleRowClick(item) {
		router.push({
			name: item.systemRole ? views.viewRoute : views.editRoute,
			params: { roleSlug: item.slug }
		});
	}
	return {
		duplicateRole,
		deleteRole,
		actions,
		rowActions,
		handleAction,
		handleRowClick
	};
}
//#endregion
//#region src/features/roles/project/ProjectRolesView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "pb-xl" };
var ProjectRolesView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectRolesView",
	props: { embedded: { type: Boolean } },
	setup(__props) {
		const props = __props;
		const { showError } = useToast();
		const rolesStore = useRolesStore();
		const router = useRouter();
		const message = useMessage();
		const i18n = useI18n();
		const $style = useCssModule();
		const settingsStore = useSettingsStore();
		const telemetry = useTelemetry();
		onMounted(async () => {
			if (!props.embedded) {
				useDocumentTitle().set(i18n.baseText("settings.projectRoles"));
				try {
					await rolesStore.fetchRoles();
				} catch (error) {
					showError(error, i18n.baseText("roles.fetch.error"));
				}
			}
		});
		function projectAssignmentsRoute(item) {
			return {
				name: item.systemRole ? VIEWS.PROJECT_ROLE_VIEW : VIEWS.PROJECT_ROLE_SETTINGS,
				params: { roleSlug: item.slug },
				query: { tab: "assignments" }
			};
		}
		async function onBeforeDelete(item) {
			if (!item.usedByProjects || item.usedByProjects === 0) return true;
			const inUseText = [i18n.baseText("projectRoles.action.delete.useWarning.before"), i18n.baseText("projectRoles.action.delete.useWarning.linkText", {
				adjustToNumber: item.usedByProjects,
				interpolate: { count: item.usedByProjects }
			})].join(" ") + ". " + i18n.baseText("projectRoles.action.delete.useWarning.after");
			if (await message.confirm(inUseText, i18n.baseText("projectRoles.action.delete.inUse.title", { interpolate: { roleName: item.displayName } }), {
				type: "warning",
				confirmButtonText: i18n.baseText("projectRoles.action.delete.inUse.goToAssignments"),
				cancelButtonText: i18n.baseText("roles.action.cancel")
			}) === "confirm") router.push({
				name: item.systemRole ? VIEWS.PROJECT_ROLE_VIEW : VIEWS.PROJECT_ROLE_SETTINGS,
				params: { roleSlug: item.slug },
				query: { tab: "assignments" }
			});
			return false;
		}
		const { rowActions, handleAction, handleRowClick } = useRolesListActions({
			roleType: "project",
			views: {
				viewRoute: VIEWS.PROJECT_ROLE_VIEW,
				editRoute: VIEWS.PROJECT_ROLE_SETTINGS
			},
			onBeforeDelete
		});
		function addRole() {
			telemetry.track("User clicked add role");
			router.push({ name: VIEWS.PROJECT_NEW_ROLE });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [!__props.embedded ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(["mb-xl", unref($style).headerContainer])
			}, [createBaseVNode("div", { class: normalizeClass(unref($style).headerTitle) }, [createVNode(unref(N8nHeading_default), {
				tag: "h1",
				size: "2xlarge"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.projectRoles")), 1)]),
				_: 1
			}), createVNode(unref(N8nTag_default), {
				clickable: false,
				text: "New",
				class: normalizeClass(unref($style).newTag)
			}, null, 8, ["class"])], 2), unref(settingsStore).isCustomRolesFeatureEnabled ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 0,
				variant: "solid",
				icon: "plus",
				onClick: addRole
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.addRole")), 1)]),
				_: 1
			})) : createCommentVNode("", true)], 2)) : createCommentVNode("", true), createVNode(RolesTable_default, {
				roles: unref(rolesStore).processedProjectRoles,
				"show-paywall": !unref(settingsStore).isCustomRolesFeatureEnabled,
				"count-column-title": unref(i18n).baseText("projectRoles.sourceControl.table.projectsAssigned"),
				"count-column-key": "usedByProjects",
				"row-actions": unref(rowActions),
				"get-count-route": projectAssignmentsRoute,
				onAction: unref(handleAction),
				onRowClick: unref(handleRowClick)
			}, null, 8, [
				"roles",
				"show-paywall",
				"count-column-title",
				"row-actions",
				"onAction",
				"onRowClick"
			])]);
		};
	}
});
var ProjectRolesView_vue_vue_type_style_index_0_lang_module_default = {
	headerContainer: "_headerContainer_1d4v1_2",
	headerTitle: "_headerTitle_1d4v1_8",
	newTag: "_newTag_1d4v1_14"
};
var ProjectRolesView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ProjectRolesView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectRolesView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { useRolesListActions as n, RolesTable_default as r, ProjectRolesView_default as t };
