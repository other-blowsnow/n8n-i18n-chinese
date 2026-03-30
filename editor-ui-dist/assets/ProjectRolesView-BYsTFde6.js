import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, c as useCssModule, h as withModifiers, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-14clFqm4.js";
import { $i as N8nIcon_default, Qi as N8nButton_default, Rt as N8nActionToggle_default, Yi as N8nHeading_default, Z as N8nTag_default, Zi as N8nText_default, _ as N8nDataTableServer_default, _t as useRouter, ut as RouterLink } from "./src-jV4M2fcN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Bn as useMessage, Ln as useToast, Ns as useSettingsStore, pr as useTelemetry, zt as useDocumentTitle } from "./users.store-DNsxOyr9.js";
import { Fs as MODAL_CONFIRM, f as CUSTOM_ROLES_DOCS_URL, hs as VIEWS } from "./constants-DkMVfvP4.js";
import "./merge-C-A6wl8-.js";
import "./_baseOrderBy-CeJ-xzyO.js";
import { t as require_dateformat } from "./dateformat-BPRsPKQE.js";
import "./useDebounce-f84ZK-I5.js";
import "./versions.store-Cwz3Wqlv.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-H79gLsnv.js";
import { t as useRolesStore } from "./roles.store-B6csVR3x.js";
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
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
				title: i18n.baseText("projectRoles.sourceControl.table.projectsAssigned"),
				key: "usedByProjects",
				disableSort: true,
				align: "end",
				value: (item) => item.usedByProjects ?? 0,
				width: 120,
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
			if (item.usedByProjects && item.usedByProjects > 0) {
				const inUseText = [i18n.baseText("projectRoles.action.delete.useWarning.before"), i18n.baseText("projectRoles.action.delete.useWarning.linkText", {
					adjustToNumber: item.usedByProjects,
					interpolate: { count: item.usedByProjects }
				})].join(" ") + ". " + i18n.baseText("projectRoles.action.delete.useWarning.after");
				if (await message.confirm(inUseText, i18n.baseText("projectRoles.action.delete.inUse.title", { interpolate: { roleName: item.displayName } }), {
					type: "warning",
					confirmButtonText: i18n.baseText("projectRoles.action.delete.inUse.goToAssignments"),
					cancelButtonText: i18n.baseText("projectRoles.action.cancel")
				}) === "confirm") router.push({
					name: item.systemRole ? VIEWS.PROJECT_ROLE_VIEW : VIEWS.PROJECT_ROLE_SETTINGS,
					params: { roleSlug: item.slug },
					query: { tab: "assignments" }
				});
				return;
			}
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
		function rowProps(_row) {
			return { class: [$style.tallRow, $style.clickableRow] };
		}
		function rowActions(_item) {
			return [{
				label: i18n.baseText("projectRoles.action.duplicate"),
				value: "duplicate"
			}, {
				label: i18n.baseText("projectRoles.action.delete"),
				value: "delete"
			}];
		}
		function handleAction(action, item) {
			actions[action](item);
		}
		function handleRowClick(item) {
			router.push({
				name: item.systemRole ? VIEWS.PROJECT_ROLE_VIEW : VIEWS.PROJECT_ROLE_SETTINGS,
				params: { roleSlug: item.slug }
			});
		}
		function addRole() {
			telemetry.track("User clicked add role");
			router.push({ name: VIEWS.PROJECT_NEW_ROLE });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", { class: normalizeClass(["mb-xl", unref($style).headerContainer]) }, [createBaseVNode("div", { class: normalizeClass(unref($style).headerTitle) }, [createVNode(unref(N8nHeading_default), {
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
				variant: "subtle",
				onClick: addRole
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.addRole")), 1)]),
				_: 1
			})) : createCommentVNode("", true)], 2), !unref(settingsStore).isCustomRolesFeatureEnabled ? (openBlock(), createElementBlock("div", {
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
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.paywall.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					tag: "p",
					color: "text-light",
					align: "center"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.paywall.description")), 1)]),
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
					default: withCtx(() => [createTextVNode(toDisplayString(unref(settingsStore).isCloudDeployment ? unref(i18n).baseText("projectRoles.paywall.viewPlans") : unref(i18n).baseText("generic.upgrade")), 1)]),
					_: 1
				})], 2)
			], 2)) : (openBlock(), createBlock(unref(N8nDataTableServer_default), {
				key: 1,
				items: unref(rolesStore).processedProjectRoles,
				headers: headers.value,
				"items-length": unref(rolesStore).processedProjectRoles.length,
				"items-per-page": unref(rolesStore).processedProjectRoles.length,
				"page-sizes": [unref(rolesStore).processedProjectRoles.length],
				"row-props": rowProps,
				"onClick:row": _cache[2] || (_cache[2] = (_event, { item }) => handleRowClick(item))
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
				[`item.systemRole`]: withCtx(({ item }) => [item.systemRole ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nIcon_default), { icon: "lock" }), createTextVNode(" " + toDisplayString(unref(i18n).baseText("projectRoles.literal.system")), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nIcon_default), { icon: "user-pen" }), createTextVNode(" " + toDisplayString(unref(i18n).baseText("projectRoles.literal.custom")), 1)], 64))]),
				[`item.usedByProjects`]: withCtx(({ item }) => [(item.usedByProjects ?? 0) > 0 ? (openBlock(), createBlock(unref(RouterLink), {
					key: 0,
					to: {
						name: item.systemRole ? unref(VIEWS).PROJECT_ROLE_VIEW : unref(VIEWS).PROJECT_ROLE_SETTINGS,
						params: { roleSlug: item.slug },
						query: { tab: "assignments" }
					},
					class: normalizeClass(unref($style).projectCountLink),
					onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.usedByProjects), 1)]),
					_: 2
				}, 1032, ["to", "class"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode("0")], 64))]),
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
	headerContainer: "_headerContainer_cwn8u_2",
	headerTitle: "_headerTitle_cwn8u_8",
	newTag: "_newTag_cwn8u_14",
	paywallContainer: "_paywallContainer_cwn8u_27",
	paywallIcons: "_paywallIcons_cwn8u_37",
	iconBox: "_iconBox_cwn8u_43",
	iconBoxLeft: "_iconBoxLeft_cwn8u_58",
	iconBoxCenter: "_iconBoxCenter_cwn8u_63",
	iconBoxRight: "_iconBoxRight_cwn8u_72",
	paywallText: "_paywallText_cwn8u_77",
	paywallActions: "_paywallActions_cwn8u_84",
	clickableRow: "_clickableRow_cwn8u_90",
	tallRow: "_tallRow_cwn8u_94",
	projectCountLink: "_projectCountLink_cwn8u_98"
};
var ProjectRolesView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectRolesView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectRolesView_vue_vue_type_style_index_0_lang_module_default }]]);
export { ProjectRolesView_default as default };
