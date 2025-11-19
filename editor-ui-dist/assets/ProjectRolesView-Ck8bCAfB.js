import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _ as Fragment, _n as normalizeClass, bt as withCtx, c as useCssModule, et as openBlock, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { $ as N8nActionToggle_default, Dt as N8nActionBox_default, In as N8nText_default, Ln as N8nButton_default, Pn as N8nHeading_default, s as N8nDataTableServer_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter } from "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./overlay-DxjKgl5T.js";
import "./empty-RTEMfF4N.js";
import { t as useMessage } from "./useMessage-HzD9OyTZ.js";
import { Bo as useSettingsStore, Tn as useDocumentTitle, t as useTelemetry } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { No as MODAL_CONFIRM, mo as VIEWS } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import { t as require_dateformat } from "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import "./cloudPlan.store-Dw9c9iy4.js";
import "./versions.store-DbkVHo9d.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-BOaFWroN.js";
import { t as useRolesStore } from "./roles.store-Cht5fHcq.js";
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat());
var _hoisted_1 = { class: "pb-xl" };
var ProjectRolesView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectRolesView",
	setup(__props) {
		const { showError, showMessage } = useToast();
		const rolesStore = useRolesStore();
		const router = useRouter();
		const message = useMessage();
		const i18n = useI18n();
		const $style = useCssModule();
		const settingsStore = useSettingsStore();
		const { goToUpgrade } = usePageRedirectionHelper();
		const telemetry = useTelemetry();
		onMounted(() => {
			useDocumentTitle().set(i18n.baseText("settings.projectRoles"));
		});
		const headers = ref([
			{
				title: i18n.baseText("projectRoles.sourceControl.table.name"),
				key: "displayName",
				width: 400,
				disableSort: true,
				resize: false
			},
			{
				title: i18n.baseText("projectRoles.sourceControl.table.type"),
				key: "systemRole",
				disableSort: true,
				resize: false
			},
			{
				title: i18n.baseText("projectRoles.sourceControl.table.assignedTo"),
				key: "usedByUsers",
				disableSort: true,
				align: "end",
				value: (item) => item.usedByUsers ?? 0,
				width: 75,
				resize: false
			},
			{
				title: i18n.baseText("projectRoles.sourceControl.table.lastEdited"),
				key: "updatedAt",
				value: (item) => item.updatedAt && !item.systemRole ? (0, import_dateformat.default)(item.updatedAt, "d mmm, yyyy") : "—",
				disableSort: true,
				resize: false
			},
			{
				title: "",
				key: "actions",
				value: () => "",
				width: 50,
				minWidth: 50,
				disableSort: true,
				align: "center",
				resize: false
			}
		]);
		async function deleteRole(item) {
			i18n.baseText("projectRoles.action.delete.text", { interpolate: { roleName: item.displayName } });
			if (await message.confirm(i18n.baseText("projectRoles.action.delete.text", { interpolate: { roleName: item.displayName } }), i18n.baseText("projectRoles.action.delete.title", { interpolate: { roleName: item.displayName } }), {
				type: "warning",
				confirmButtonText: i18n.baseText("projectRoles.action.delete"),
				cancelButtonText: i18n.baseText("projectRoles.action.cancel")
			}) !== "confirm") return;
			try {
				await rolesStore.deleteProjectRole(item.slug);
				const index = rolesStore.roles.project.findIndex((role) => role.slug === item.slug);
				if (index !== -1) rolesStore.roles.project.splice(index, 1);
				showMessage({
					title: i18n.baseText("projectRoles.action.delete.success"),
					type: "success"
				});
			} catch (error) {
				showError(error, i18n.baseText("projectRoles.action.delete.error"));
				return;
			}
		}
		async function duplicateRole(item) {
			try {
				const displayName = i18n.baseText("projectRoles.action.duplicate.name", { interpolate: { roleName: item.displayName } });
				const role = await rolesStore.createProjectRole({
					displayName,
					description: item.description ?? void 0,
					roleType: "project",
					scopes: item.scopes
				});
				rolesStore.roles.project.push(role);
				rolesStore.fetchRoles();
				telemetry.track("User duplicated role", {
					role_id: item.slug,
					role_name: item.displayName,
					permissions: item.scopes
				});
				showMessage({
					type: "success",
					message: i18n.baseText("projectRoles.action.duplicate.success", { interpolate: {
						roleName: item.displayName,
						roleDuplicateName: displayName
					} })
				});
				return role;
			} catch (error) {
				showError(error, i18n.baseText("projectRoles.action.duplicate.error"));
				return;
			}
		}
		const actions = {
			duplicate: duplicateRole,
			delete: deleteRole
		};
		function rowProps(row) {
			const className = [$style.tallRow];
			if (!row.systemRole) className.push($style.clickableRow);
			return { class: className };
		}
		function rowActions(item) {
			return [{
				label: i18n.baseText("projectRoles.action.duplicate"),
				value: "duplicate"
			}, {
				label: i18n.baseText("projectRoles.action.delete"),
				value: "delete",
				disabled: item.usedByUsers !== 0
			}];
		}
		function handleAction(action, item) {
			actions[action](item);
		}
		function handleRowClick(item) {
			if (item.systemRole) return;
			router.push({
				name: VIEWS.PROJECT_ROLE_SETTINGS,
				params: { roleSlug: item.slug }
			});
		}
		function addRole() {
			telemetry.track("User clicked add role");
			router.push({ name: VIEWS.PROJECT_NEW_ROLE });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", { class: normalizeClass(["mb-xl", unref($style).headerContainer]) }, [createVNode(unref(N8nHeading_default), {
				tag: "h1",
				size: "2xlarge"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.projectRoles")), 1)]),
				_: 1
			}), unref(settingsStore).isCustomRolesFeatureEnabled ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 0,
				type: "secondary",
				onClick: addRole
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.addRole")), 1)]),
				_: 1
			})) : createCommentVNode("", true)], 2), !unref(settingsStore).isCustomRolesFeatureEnabled ? (openBlock(), createBlock(unref(N8nActionBox_default), {
				key: 0,
				class: "mt-2xl mb-l",
				"button-text": unref(i18n).baseText("settings.externalSecrets.actionBox.buttonText"),
				description: "yes",
				onClick: _cache[0] || (_cache[0] = ($event) => unref(goToUpgrade)("custom-roles", "upgrade-custom-roles"))
			}, {
				heading: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("projectRoles.manageRoles.paywall.title")), 1)]),
				description: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.manageRoles.paywall.text")), 1)]),
				_: 1
			}, 8, ["button-text"])) : (openBlock(), createBlock(unref(N8nDataTableServer_default), {
				key: 1,
				items: unref(rolesStore).processedProjectRoles,
				headers: headers.value,
				"items-length": unref(rolesStore).processedProjectRoles.length,
				"items-per-page": unref(rolesStore).processedProjectRoles.length,
				"page-sizes": [unref(rolesStore).processedProjectRoles.length],
				"row-props": rowProps,
				"onClick:row": _cache[1] || (_cache[1] = (_event, { item }) => handleRowClick(item))
			}, {
				[`item.displayName`]: withCtx(({ item }) => [createVNode(unref(N8nText_default), {
					tag: "div",
					class: "mb-4xs"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.displayName), 1)]),
					_: 2
				}, 1024), createVNode(unref(N8nText_default), {
					tag: "div",
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.description), 1)]),
					_: 2
				}, 1024)]),
				[`item.systemRole`]: withCtx(({ item }) => [item.systemRole ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nIcon_default), { icon: "lock" }), createTextVNode(" " + toDisplayString(unref(i18n).baseText("projectRoles.literal.system")), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.literal.custom")), 1)], 64))]),
				[`item.actions`]: withCtx(({ item }) => [!item.systemRole ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
					key: 0,
					actions: rowActions(item),
					onAction: ($event) => handleAction($event, item)
				}, null, 8, ["actions", "onAction"])) : createCommentVNode("", true)]),
				_: 2
			}, 1032, [
				"items",
				"headers",
				"items-length",
				"items-per-page",
				"page-sizes"
			]))]);
		};
	}
});
var ProjectRolesView_vue_vue_type_style_index_0_lang_module_default = {
	headerContainer: "_headerContainer_106p4_2",
	clickableRow: "_clickableRow_106p4_8",
	tallRow: "_tallRow_106p4_12"
};
var ProjectRolesView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectRolesView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectRolesView_vue_vue_type_style_index_0_lang_module_default }]]);
export { ProjectRolesView_default as default };
