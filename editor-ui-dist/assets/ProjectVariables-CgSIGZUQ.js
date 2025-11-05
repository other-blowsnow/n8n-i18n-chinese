import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, W as mergeProps, Z as onMounted, _ as Fragment, _n as normalizeClass, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, k as createSlots, mt as useTemplateRef, st as resolveDirective, vn as normalizeProps, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n, x as useAsyncState } from "./_MapCache-It4eafc2.js";
import { Fn as N8nText_default, G as N8nOption_default, In as N8nButton_default, J as N8nCheckbox_default, Rn as N8nIcon_default, Tt as N8nActionBox_default, W as N8nSelect_default, Y as N8nInputLabel_default, ft as N8nLink_default, ht as N8nTooltip_default, it as N8nBadge_default } from "./src-CrJGxD3z.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-DHb0OvjC.js";
import "./icon-Bx8huFc-.js";
import "./overlay-DM1TXj1b.js";
import "./empty-BuGRxzl4.js";
import { t as useMessage } from "./useMessage-CpBf605K.js";
import { An as useProjectsStore, Li as useUIStore, bn as useEnvironmentsStore, ir as useUsersStore, jn as useSourceControlStore, jo as VARIABLE_MODAL_KEY, kn as useDocumentTitle, t as useTelemetry, xr as isVariableResource, zo as useSettingsStore } from "./useTelemetry-D6pZULgL.js";
import { t as useToast } from "./useToast-BabYcC1S.js";
import "./sanitize-html-BuXr7o4T.js";
import "./path-browserify-DsmB_HMK.js";
import { Do as MODAL_CONFIRM, Fs as EnterpriseEditionFeature, hr as getResourcePermissions } from "./constants-UStNMe6H.js";
import "./merge-D5iNo-Qh.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-SobFYd6D.js";
import "./useExternalHooks-D1vL2UOW.js";
import "./cloudPlan.store-CNTnzOJi.js";
import "./useClipboard-ZySm1Yx-.js";
import "./folders.store-1odl9d9k.js";
import "./versions.store-DrTKQrUg.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DiFcELQQ.js";
import "./ProjectIcon-b_BDsXEn.js";
import "./EnterpriseEdition.ee-DwcZ35wK.js";
import "./orderBy-BcYAMhFM.js";
import "./ProjectSharing-DroW3nOI.js";
import { t as useInsightsStore } from "./insights.store-Bi72UXCR.js";
import "./insights.constants-DK2g3nnD.js";
import "./insights.utils-DfH13a9J.js";
import { t as useProjectPages } from "./useProjectPages-Byl1L7T-.js";
import "./readyToRunWorkflowsV2.store-Tq6BgEp-.js";
import { t as ProjectHeader_default } from "./ProjectHeader-DdJO3VCM.js";
import "./PageViewLayout-CCwb27rd.js";
import { t as ResourcesListLayout_default } from "./ResourcesListLayout-B02IM2RY.js";
import { t as require_pickBy } from "./pickBy-BZh3MYkr.js";
import "./smartDecimal-BitNC0jz.js";
import { t as InsightsSummary_default } from "./InsightsSummary-BBAyIJZP.js";
import { t as VariablesUsageBadge_default } from "./VariablesUsageBadge-6Ja0ZIe2.js";
var import_pickBy = /* @__PURE__ */ __toESM(require_pickBy());
var _hoisted_1 = { key: 0 };
var _hoisted_2 = { key: 1 };
var _hoisted_3 = { class: "mb-s" };
var _hoisted_4 = {
	key: 0,
	class: "mb-s"
};
var _hoisted_5 = { "data-test-id": "variables-row" };
var _hoisted_6 = { key: 0 };
var _hoisted_7 = { key: 0 };
var _hoisted_8 = {
	class: "scope-badge",
	style: {
		"display": "flex",
		"align-items": "center",
		"gap": "4px"
	}
};
var _hoisted_9 = {
	key: 1,
	align: "right"
};
var _hoisted_10 = { class: "action-buttons" };
var _hoisted_11 = {
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
		const permissions = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).variable);
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
		const canCreateVariables = computed(() => isFeatureEnabled.value && permissions.value.create);
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
				header: withCtx(() => [createVNode(ProjectHeader_default, null, {
					default: withCtx(() => [unref(overview).isOverviewSubPage && unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(InsightsSummary_default, {
						key: 0,
						loading: unref(insightsStore).weeklySummary.isLoading,
						summary: unref(insightsStore).weeklySummary.state,
						"time-range": "week"
					}, null, 8, ["loading", "summary"])) : createCommentVNode("", true)]),
					_: 1
				})]),
				"add-button": withCtx(() => [createVNode(unref(N8nTooltip_default), {
					placement: "top",
					disabled: canCreateVariables.value
				}, {
					content: withCtx(() => [!isFeatureEnabled.value ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(unref(i18n).baseText(`variables.add.unavailable${variables.value.length === 0 ? ".empty" : ""}`)), 1)) : (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(unref(i18n).baseText("variables.add.onlyOwnerCanCreate")), 1))]),
					default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nButton_default), {
						size: "medium",
						block: "",
						disabled: !canCreateVariables.value,
						"data-test-id": "resources-list-add",
						onClick: openCreateVariableModal
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`variables.add`)), 1)]),
						_: 1
					}, 8, ["disabled"])])]),
					_: 1
				}, 8, ["disabled"])]),
				filters: withCtx(({ setKeyValue }) => [createBaseVNode("div", _hoisted_3, [createVNode(unref(N8nInputLabel_default), {
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
				}, null, 8, ["model-value", "onUpdate:modelValue"])]), !unref(projectId) ? (openBlock(), createElementBlock("div", _hoisted_4, [createVNode(unref(N8nInputLabel_default), {
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
				default: withCtx(({ data }) => [createBaseVNode("tr", _hoisted_5, [
					createBaseVNode("td", null, toDisplayString(data.key), 1),
					createBaseVNode("td", null, [data.value ? withDirectives((openBlock(), createElementBlock("span", _hoisted_6, null, 512)), [[
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
					!unref(projectId) ? (openBlock(), createElementBlock("td", _hoisted_7, [createVNode(unref(N8nBadge_default), null, {
						default: withCtx(() => [createBaseVNode("div", _hoisted_8, [data.project ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: "layers"
						})) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(data.project?.name ?? unref(i18n).baseText("variables.table.scope.global")), 1)])]),
						_: 2
					}, 1024)])) : createCommentVNode("", true),
					isFeatureEnabled.value ? (openBlock(), createElementBlock("td", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createVNode(unref(N8nTooltip_default), {
						disabled: permissions.value.update,
						placement: "top"
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.edit.onlyRoleCanEdit")), 1)]),
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							"data-test-id": "variable-row-edit-button",
							type: "tertiary",
							class: "mr-xs",
							disabled: !permissions.value.update,
							onClick: ($event) => openEditVariableModal(data)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.edit")), 1)]),
							_: 2
						}, 1032, ["disabled", "onClick"])]),
						_: 2
					}, 1032, ["disabled"]), createVNode(unref(N8nTooltip_default), {
						disabled: permissions.value.delete,
						placement: "top"
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.delete.onlyRoleCanDelete")), 1)]),
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							"data-test-id": "variable-row-delete-button",
							type: "tertiary",
							disabled: !permissions.value.delete,
							onClick: ($event) => handleDeleteVariable(data)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.delete")), 1)]),
							_: 2
						}, 1032, ["disabled", "onClick"])]),
						_: 2
					}, 1032, ["disabled"])])])) : createCommentVNode("", true)
				])]),
				postdata: withCtx(() => [unref(projectId) && globalVariables.value.length ? (openBlock(), createElementBlock("div", _hoisted_11, [unref(projectId) ? (openBlock(), createBlock(unref(N8nText_default), {
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
					description: unref(i18n).baseText("variables.empty.notAllowedToCreate.description"),
					onClick: goToUpgrade
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
var ProjectVariables_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectVariables_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectVariables_vue_vue_type_style_index_1_lang_module_default }], ["__scopeId", "data-v-067bdbda"]]);
export { ProjectVariables_default as default };
