import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, W as mergeProps, Z as onMounted, _ as Fragment, _n as normalizeClass, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, k as createSlots, mt as useTemplateRef, st as resolveDirective, vn as normalizeProps, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n, x as useAsyncState } from "./_MapCache-pT3vKw8Z.js";
import { Dt as N8nActionBox_default, G as N8nOption_default, In as N8nText_default, J as N8nCheckbox_default, Ln as N8nButton_default, W as N8nSelect_default, Y as N8nInputLabel_default, it as N8nBadge_default, mt as N8nLink_default, vt as N8nTooltip_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./overlay-DxjKgl5T.js";
import "./empty-RTEMfF4N.js";
import { t as useMessage } from "./useMessage-HzD9OyTZ.js";
import { Bo as useSettingsStore, Dn as useSourceControlStore, Do as VARIABLE_MODAL_KEY, En as useProjectsStore, Ni as useUIStore, Tn as useDocumentTitle, _r as isVariableResource, bn as useEnvironmentsStore, er as useUsersStore, t as useTelemetry } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { Hs as EnterpriseEditionFeature, No as MODAL_CONFIRM, _r as getResourcePermissions } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import "./cloudPlan.store-Dw9c9iy4.js";
import { t as useClipboard } from "./useClipboard-CDW2KXIc.js";
import "./folders.store-Cwp_DTVT.js";
import "./versions.store-DbkVHo9d.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-BOaFWroN.js";
import "./ProjectIcon-BYB-pK6e.js";
import "./EnterpriseEdition.ee-D8leMYEH.js";
import "./orderBy-BTQ4q55E.js";
import "./ProjectSharing-C7uZgDYB.js";
import { t as useInsightsStore } from "./insights.store-DHwsBBEe.js";
import "./insights.constants-DK2g3nnD.js";
import "./insights.utils-yRgER63l.js";
import { n as useProjectPages } from "./readyToRunWorkflowsV2.store-DpzmixIa.js";
import "./PageViewLayout-kj_BBPfv.js";
import { t as ResourcesListLayout_default } from "./ResourcesListLayout-CYMu4eeN.js";
import { t as ProjectHeader_default } from "./ProjectHeader-DEFzma1m.js";
import "./smartDecimal-e9uPsnJa.js";
import { t as InsightsSummary_default } from "./InsightsSummary-DrNhXF20.js";
import { t as require_pickBy } from "./pickBy-CBLHIRgo.js";
var import_pickBy = /* @__PURE__ */ __toESM(require_pickBy());
var VariablesUsageBadge_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "VariablesUsageBadge",
	props: { name: {} },
	setup(__props) {
		const i18n = useI18n();
		const clipboard = useClipboard();
		const { showMessage } = useToast();
		const props = __props;
		const usage = computed(() => `$vars.${props.name}`);
		const handleClick = () => {
			clipboard.copy(usage.value);
			showMessage({
				title: i18n.baseText("variables.row.usage.copiedToClipboard"),
				type: "success"
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), { placement: "top" }, {
				content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.usage.copyToClipboard")), 1)]),
				default: withCtx(() => [createBaseVNode("span", {
					class: "usageSyntax",
					onClick: handleClick
				}, toDisplayString(usage.value), 1)]),
				_: 1
			});
		};
	}
}), [["__scopeId", "data-v-b4930937"]]);
var _hoisted_1 = { class: "mb-s" };
var _hoisted_2 = {
	key: 0,
	class: "mb-s"
};
var _hoisted_3 = { "data-test-id": "variables-row" };
var _hoisted_4 = { key: 0 };
var _hoisted_5 = { key: 0 };
var _hoisted_6 = {
	class: "scope-badge",
	style: {
		"display": "flex",
		"align-items": "center",
		"gap": "4px"
	}
};
var _hoisted_7 = {
	key: 1,
	align: "right"
};
var _hoisted_8 = { class: "action-buttons" };
var _hoisted_9 = {
	key: 0,
	class: "mt-xs"
};
var ProjectVariables_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectVariables",
	setup(__props) {
		const settingsStore = useSettingsStore();
		const environmentsStore = useEnvironmentsStore();
		const usersStore = useUsersStore();
		const uiStore = useUIStore();
		const telemetry = useTelemetry();
		const i18n = useI18n();
		const message = useMessage();
		const sourceControlStore = useSourceControlStore();
		const route = useRoute();
		const router = useRouter();
		const insightsStore = useInsightsStore();
		const overview = useProjectPages();
		const projectsStore = useProjectsStore();
		const layoutRef = useTemplateRef("layoutRef");
		const { showError, showMessage } = useToast();
		const projectId = route.params.projectId;
		const globalPermissions = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).variable);
		const projectPermissions = computed(() => getResourcePermissions(projectsStore.currentProject?.scopes).projectVariable);
		const { isLoading, execute } = useAsyncState(environmentsStore.fetchAllVariables, [], { immediate: true });
		const isFeatureEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables]);
		const openCreateVariableModal = () => {
			uiStore.openModalWithData({
				name: VARIABLE_MODAL_KEY,
				data: { mode: "new" }
			});
			telemetry.track("User clicked add variable button");
		};
		const openEditVariableModal = (variable) => {
			uiStore.openModalWithData({
				name: VARIABLE_MODAL_KEY,
				data: {
					mode: "edit",
					variable
				}
			});
		};
		const variables = computed(() => environmentsStore.variables.filter((v) => !projectId || v.project?.id === projectId).map((variable) => ({
			resourceType: "variable",
			id: variable.id,
			name: variable.key,
			key: variable.key,
			value: variable.value,
			project: variable.project
		})));
		const globalVariables = computed(() => environmentsStore.variables.filter((v) => !v.project));
		const canCreateVariables = computed(() => isFeatureEnabled.value && (globalPermissions.value.create ?? projectPermissions.value.create));
		const columns = computed(() => {
			const cols = [
				{
					id: 0,
					path: "name",
					label: i18n.baseText("variables.table.key"),
					classes: ["variables-key-column"]
				},
				{
					id: 1,
					path: "value",
					label: i18n.baseText("variables.table.value"),
					classes: ["variables-value-column"]
				},
				{
					id: 2,
					path: "usage",
					label: i18n.baseText("variables.table.usage"),
					classes: ["variables-usage-column"]
				}
			];
			if (!projectId) cols.push({
				id: 3,
				path: "project",
				label: i18n.baseText("variables.table.scope"),
				classes: ["variables-scope-column"]
			});
			if (!isFeatureEnabled.value) return cols;
			return cols.concat({
				id: 4,
				path: "actions",
				label: "",
				classes: ["variables-actions-column"]
			});
		});
		const handleDeleteVariable = async (variable) => {
			try {
				if (await message.confirm(i18n.baseText("variables.modals.deleteConfirm.message", { interpolate: { name: variable.key } }), i18n.baseText("variables.modals.deleteConfirm.title"), {
					confirmButtonText: i18n.baseText("variables.modals.deleteConfirm.confirmButton"),
					cancelButtonText: i18n.baseText("variables.modals.deleteConfirm.cancelButton")
				}) !== "confirm") return;
				await environmentsStore.deleteVariable({
					id: variable.id,
					value: variable.value,
					key: variable.key
				});
				showMessage({
					title: i18n.baseText("variables.delete.successful.message", { interpolate: { variableName: variable.key } }),
					type: "success"
				});
			} catch (error) {
				showError(error, i18n.baseText("variables.errors.delete"));
			}
		};
		const updateFilter = (state) => {
			router.replace({ query: (0, import_pickBy.default)(state) });
		};
		const filters = ref({
			...route.query,
			incomplete: route.query.incomplete?.toString() === "true",
			projectId: route.query.projectId?.toString() || ""
		});
		const onSearchUpdated = (search) => {
			updateFilter({
				...filters.value,
				search
			});
		};
		const handleFilter = (resource, newFilters, matches) => {
			if (!isVariableResource(resource)) return false;
			const filtersToApply = newFilters;
			if (filtersToApply.incomplete) matches = matches && !resource.value;
			if (filtersToApply.projectId) if (filtersToApply.projectId === "global") matches = matches && !resource.project;
			else matches = matches && resource.project?.id === filtersToApply.projectId;
			return matches;
		};
		const nameSortFn = (a, b, direction) => {
			return direction === "asc" ? displayName(a).trim().localeCompare(displayName(b).trim()) : displayName(b).trim().localeCompare(displayName(a).trim());
		};
		const sortFns = {
			nameAsc: (a, b) => nameSortFn(a, b, "asc"),
			nameDesc: (a, b) => nameSortFn(a, b, "desc")
		};
		const projectOptions = computed(() => {
			const options = [{
				value: "global",
				label: i18n.baseText("variables.modal.scope.global"),
				icon: {
					type: "icon",
					value: "database"
				}
			}];
			options.push(...projectsStore.availableProjects.filter((project) => project.type !== "personal").map((project) => {
				const icon = project.icon ?? {
					type: "icon",
					value: "layer-group"
				};
				return {
					value: project.id,
					label: project.name ?? project.id,
					icon
				};
			}));
			return options;
		});
		const selectedProjectIcon = computed(() => {
			return projectOptions.value.find((option) => option.value === filters.value.projectId)?.icon ?? {
				type: "icon",
				value: "database"
			};
		});
		function goToUpgrade() {
			usePageRedirectionHelper().goToUpgrade("variables", "upgrade-variables");
		}
		function displayName(resource) {
			return resource.key;
		}
		sourceControlStore.$onAction(({ name, after }) => {
			if (name === "pullWorkfolder" && after) after(() => {
				execute();
			});
		});
		const unavailableNoticeProps = computed(() => ({
			emoji: "👋",
			heading: i18n.baseText(uiStore.contextBasedTranslationKeys.variables.unavailable.title),
			description: i18n.baseText(uiStore.contextBasedTranslationKeys.variables.unavailable.description),
			buttonText: i18n.baseText(uiStore.contextBasedTranslationKeys.variables.unavailable.button),
			buttonType: "secondary",
			"onClick:button": goToUpgrade,
			"data-test-id": "unavailable-resources-list"
		}));
		onMounted(() => {
			useDocumentTitle().set(i18n.baseText("variables.heading"));
		});
		return (_ctx, _cache) => {
			const _directive_n8n_truncate = resolveDirective("n8n-truncate");
			return openBlock(), createBlock(ResourcesListLayout_default, {
				ref_key: "layoutRef",
				ref: layoutRef,
				filters: filters.value,
				"onUpdate:filters": [_cache[1] || (_cache[1] = ($event) => filters.value = $event), updateFilter],
				"resource-key": "variables",
				disabled: !isFeatureEnabled.value,
				resources: variables.value,
				"additional-filters-handler": handleFilter,
				shareable: false,
				"display-name": displayName,
				"sort-fns": sortFns,
				"sort-options": ["nameAsc", "nameDesc"],
				type: "datatable",
				"type-props": { columns: columns.value },
				loading: unref(isLoading),
				"onUpdate:search": onSearchUpdated,
				"onClick:add": openCreateVariableModal
			}, createSlots({
				header: withCtx(() => [createVNode(ProjectHeader_default, { "main-button": "variable" }, {
					default: withCtx(() => [unref(overview).isOverviewSubPage && unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(InsightsSummary_default, {
						key: 0,
						loading: unref(insightsStore).weeklySummary.isLoading,
						summary: unref(insightsStore).weeklySummary.state,
						"time-range": "week"
					}, null, 8, ["loading", "summary"])) : createCommentVNode("", true)]),
					_: 1
				})]),
				filters: withCtx(({ setKeyValue }) => [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nInputLabel_default), {
					label: unref(i18n).baseText("credentials.filters.status"),
					bold: false,
					size: "small",
					color: "text-base",
					class: "mb-3xs"
				}, null, 8, ["label"]), createVNode(unref(N8nCheckbox_default), {
					label: "Value missing",
					"data-test-id": "variable-filter-incomplete",
					"model-value": filters.value.incomplete,
					"onUpdate:modelValue": ($event) => setKeyValue("incomplete", $event)
				}, null, 8, ["model-value", "onUpdate:modelValue"])]), !unref(projectId) ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nInputLabel_default), {
					label: unref(i18n).baseText("forms.resourceFiltersDropdown.owner"),
					bold: false,
					size: "small",
					color: "text-base",
					class: "mb-3xs"
				}, null, 8, ["label"]), createVNode(unref(N8nSelect_default), {
					modelValue: filters.value.projectId,
					"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => filters.value.projectId = $event), ($event) => setKeyValue("projectId", $event)],
					size: "large",
					filterable: "",
					"data-test-id": "variable-modal-scope-select"
				}, {
					prefix: withCtx(() => [selectedProjectIcon.value?.type === "emoji" ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.menuItemEmoji)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(selectedProjectIcon.value?.value), 1)]),
						_: 1
					}, 8, ["class"])) : selectedProjectIcon.value?.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						icon: selectedProjectIcon.value.value
					}, null, 8, ["icon"])) : createCommentVNode("", true)]),
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(projectOptions.value, (option) => {
						return openBlock(), createBlock(unref(N8nOption_default), {
							key: option.value || "global",
							value: option.value,
							label: option.label,
							class: normalizeClass({ [_ctx.$style.globalOption]: option.value === "global" })
						}, {
							default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.optionContent) }, [option.icon && option.icon?.type === "emoji" ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								class: normalizeClass(_ctx.$style.menuItemEmoji)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(option.icon.value), 1)]),
								_: 2
							}, 1032, ["class"])) : option.icon?.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 1,
								icon: option.icon.value
							}, null, 8, ["icon"])) : createCommentVNode("", true), createBaseVNode("span", null, toDisplayString(option.label), 1)], 2)]),
							_: 2
						}, 1032, [
							"value",
							"label",
							"class"
						]);
					}), 128))]),
					_: 2
				}, 1032, ["modelValue", "onUpdate:modelValue"])])) : createCommentVNode("", true)]),
				default: withCtx(({ data }) => [createBaseVNode("tr", _hoisted_3, [
					createBaseVNode("td", null, toDisplayString(data.key), 1),
					createBaseVNode("td", null, [data.value ? withDirectives((openBlock(), createElementBlock("span", _hoisted_4, null, 512)), [[
						_directive_n8n_truncate,
						data.value,
						"20"
					]]) : (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 1,
						theme: "warning"
					}, {
						default: withCtx(() => _cache[2] || (_cache[2] = [createTextVNode(" Value missing ")])),
						_: 1
					}))]),
					createBaseVNode("td", null, [data.key ? (openBlock(), createBlock(VariablesUsageBadge_default, {
						key: 0,
						name: data.key
					}, null, 8, ["name"])) : createCommentVNode("", true)]),
					!unref(projectId) ? (openBlock(), createElementBlock("td", _hoisted_5, [createVNode(unref(N8nBadge_default), null, {
						default: withCtx(() => [createBaseVNode("div", _hoisted_6, [data.project ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: "layers"
						})) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(data.project?.name ?? unref(i18n).baseText("variables.table.scope.global")), 1)])]),
						_: 2
					}, 1024)])) : createCommentVNode("", true),
					isFeatureEnabled.value ? (openBlock(), createElementBlock("td", _hoisted_7, [createBaseVNode("div", _hoisted_8, [createVNode(unref(N8nTooltip_default), {
						disabled: globalPermissions.value.update,
						placement: "top"
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.edit.onlyRoleCanEdit")), 1)]),
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							"data-test-id": "variable-row-edit-button",
							type: "tertiary",
							class: "mr-xs",
							disabled: !globalPermissions.value.update,
							onClick: ($event) => openEditVariableModal(data)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.edit")), 1)]),
							_: 2
						}, 1032, ["disabled", "onClick"])]),
						_: 2
					}, 1032, ["disabled"]), createVNode(unref(N8nTooltip_default), {
						disabled: globalPermissions.value.delete,
						placement: "top"
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.delete.onlyRoleCanDelete")), 1)]),
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							"data-test-id": "variable-row-delete-button",
							type: "tertiary",
							disabled: !globalPermissions.value.delete,
							onClick: ($event) => handleDeleteVariable(data)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.delete")), 1)]),
							_: 2
						}, 1032, ["disabled", "onClick"])]),
						_: 2
					}, 1032, ["disabled"])])])) : createCommentVNode("", true)
				])]),
				postdata: withCtx(() => [unref(projectId) && globalVariables.value.length ? (openBlock(), createElementBlock("div", _hoisted_9, [unref(projectId) ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small"
				}, {
					default: withCtx(() => [createVNode(unref(N8nLink_default), {
						href: "/home/variables",
						theme: "text",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(globalVariables.value.length) + " global variables ", 1)]),
						_: 1
					}), _cache[3] || (_cache[3] = createTextVNode(" available in this project "))]),
					_: 1
				})) : createCommentVNode("", true)])) : createCommentVNode("", true)]),
				_: 2
			}, [!isFeatureEnabled.value ? {
				name: "preamble",
				fn: withCtx(() => [createVNode(unref(N8nActionBox_default), mergeProps({ class: "mb-m" }, unavailableNoticeProps.value), null, 16)]),
				key: "0"
			} : void 0, !isFeatureEnabled.value || isFeatureEnabled.value && !canCreateVariables.value ? {
				name: "empty",
				fn: withCtx(() => [!isFeatureEnabled.value ? (openBlock(), createBlock(unref(N8nActionBox_default), normalizeProps(mergeProps({ key: 0 }, unavailableNoticeProps.value)), null, 16)) : !canCreateVariables.value ? (openBlock(), createBlock(unref(N8nActionBox_default), {
					key: 1,
					"data-test-id": "cannot-create-variables",
					emoji: "👋",
					heading: unref(i18n).baseText("variables.empty.notAllowedToCreate.heading", { interpolate: { name: unref(usersStore).currentUser?.firstName ?? "" } }),
					description: unref(i18n).baseText("variables.empty.notAllowedToCreate.description")
				}, null, 8, ["heading", "description"])) : createCommentVNode("", true)]),
				key: "1"
			} : void 0]), 1032, [
				"filters",
				"disabled",
				"resources",
				"type-props",
				"loading"
			]);
		};
	}
});
var ProjectVariables_vue_vue_type_style_index_1_lang_module_default = {
	optionContent: "_optionContent_3qxvq_123",
	menuItemEmoji: "_menuItemEmoji_3qxvq_129",
	globalOption: "_globalOption_3qxvq_134"
};
var ProjectVariables_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectVariables_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectVariables_vue_vue_type_style_index_1_lang_module_default }], ["__scopeId", "data-v-2a6895cc"]]);
export { ProjectVariables_default as default };
