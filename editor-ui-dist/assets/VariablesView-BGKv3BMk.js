import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { Bt as toRaw, C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Pt as reactive, Sn as toDisplayString, T as createBlock, W as mergeProps, Z as onMounted, bt as withCtx, et as openBlock, j as createTextVNode, k as createSlots, mt as useTemplateRef, st as resolveDirective, vn as normalizeProps, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n, x as useAsyncState } from "./_MapCache-It4eafc2.js";
import { B as N8nFormInput_default, In as N8nButton_default, J as N8nCheckbox_default, Nn as N8nHeading_default, Tt as N8nActionBox_default, Y as N8nInputLabel_default, ht as N8nTooltip_default, it as N8nBadge_default, xt as uid } from "./src-CrJGxD3z.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-DHb0OvjC.js";
import "./icon-Bx8huFc-.js";
import "./overlay-DM1TXj1b.js";
import "./empty-BuGRxzl4.js";
import { t as useMessage } from "./useMessage-CpBf605K.js";
import { Li as useUIStore, bn as useEnvironmentsStore, ir as useUsersStore, jn as useSourceControlStore, kn as useDocumentTitle, t as useTelemetry, zo as useSettingsStore } from "./useTelemetry-D6pZULgL.js";
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
import "./versions.store-DrTKQrUg.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DiFcELQQ.js";
import "./ProjectIcon-b_BDsXEn.js";
import "./EnterpriseEdition.ee-DwcZ35wK.js";
import "./orderBy-BcYAMhFM.js";
import "./ProjectSharing-DroW3nOI.js";
import "./useProjectPages-Byl1L7T-.js";
import "./PageViewLayout-CCwb27rd.js";
import { t as ResourcesListLayout_default } from "./ResourcesListLayout-B02IM2RY.js";
import { t as require_pickBy } from "./pickBy-BZh3MYkr.js";
import { t as VariablesUsageBadge_default } from "./VariablesUsageBadge-6Ja0ZIe2.js";
var _hoisted_1$1 = { class: "key-cell" };
var _hoisted_2$1 = {
	class: "value-cell",
	width: "100%"
};
var _hoisted_3$1 = { align: "right" };
var VALUE_MAX_LENGTH = 220;
var VariablesForm_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "VariablesForm",
	props: { variable: {} },
	emits: ["submit", "cancel"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const keyValidationRules = [
			{ name: "REQUIRED" },
			{
				name: "MAX_LENGTH",
				config: { maximum: 50 }
			},
			{
				name: "MATCH_REGEX",
				config: {
					regex: /^[A-Za-z0-9_]+$/,
					message: i18n.baseText("variables.editing.key.error.regex")
				}
			}
		];
		const valueValidationRules = [{
			name: "MAX_LENGTH",
			config: { maximum: VALUE_MAX_LENGTH }
		}];
		const form = reactive(structuredClone(toRaw(props.variable)));
		const formValidation = reactive({
			key: false,
			value: false
		});
		const isValid = computed(() => Object.values(formValidation).every((value) => value));
		const handleCancel = () => emit("cancel");
		const validateOnBlur = ref(false);
		const handleSubmit = () => {
			validateOnBlur.value = true;
			if (isValid.value) emit("submit", form);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("tr", null, [
				createBaseVNode("td", _hoisted_1$1, [createVNode(unref(N8nFormInput_default), {
					modelValue: form.key,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.key = $event),
					label: "",
					name: "key",
					"data-test-id": "variable-row-key-input",
					placeholder: unref(i18n).baseText("variables.editing.key.placeholder"),
					required: "",
					"validate-on-blur": validateOnBlur.value,
					"validation-rules": keyValidationRules,
					"focus-initially": "",
					onValidate: _cache[1] || (_cache[1] = (value) => formValidation.key = value)
				}, null, 8, [
					"modelValue",
					"placeholder",
					"validate-on-blur"
				])]),
				createBaseVNode("td", _hoisted_2$1, [createVNode(unref(N8nFormInput_default), {
					modelValue: form.value,
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value = $event),
					class: "key-input",
					label: "",
					name: "value",
					"data-test-id": "variable-row-value-input",
					placeholder: unref(i18n).baseText("variables.editing.value.placeholder"),
					type: "textarea",
					autosize: {
						minRows: 1,
						maxRows: 6
					},
					size: "medium",
					maxlength: VALUE_MAX_LENGTH,
					"validate-on-blur": validateOnBlur.value,
					"validation-rules": valueValidationRules,
					onValidate: _cache[3] || (_cache[3] = (value) => formValidation.value = value)
				}, null, 8, [
					"modelValue",
					"placeholder",
					"validate-on-blur"
				])]),
				createBaseVNode("td", null, [formValidation.key ? (openBlock(), createBlock(VariablesUsageBadge_default, {
					key: 0,
					name: form.key
				}, null, 8, ["name"])) : createCommentVNode("", true)]),
				createBaseVNode("td", _hoisted_3$1, [createVNode(unref(N8nButton_default), {
					"data-test-id": "variable-row-cancel-button",
					type: "tertiary",
					class: "mr-xs",
					onClick: handleCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					"data-test-id": "variable-row-save-button",
					type: "primary",
					onClick: handleSubmit
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.save")), 1)]),
					_: 1
				})])
			]);
		};
	}
}), [["__scopeId", "data-v-e5c39d8c"]]);
var import_pickBy = /* @__PURE__ */ __toESM(require_pickBy());
var _hoisted_1 = { key: 0 };
var _hoisted_2 = { key: 1 };
var _hoisted_3 = { class: "mb-s" };
var _hoisted_4 = {
	key: 1,
	"data-test-id": "variables-row"
};
var _hoisted_5 = { key: 0 };
var _hoisted_6 = {
	key: 0,
	align: "right"
};
var _hoisted_7 = { class: "action-buttons" };
var TEMPORARY_VARIABLE_UID_BASE = "@tmpvar";
var VariablesView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "VariablesView",
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
		const layoutRef = useTemplateRef("layoutRef");
		const { showError } = useToast();
		const permissions = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).variable);
		const { isLoading, execute } = useAsyncState(environmentsStore.fetchAllVariables, [], { immediate: true });
		const isFeatureEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables]);
		const variableForms = ref(/* @__PURE__ */ new Map());
		const editableVariables = ref([]);
		const addToEditableVariables = (variableId) => editableVariables.value.push(variableId);
		const removeEditableVariable = (variableId) => {
			editableVariables.value = editableVariables.value.filter((id) => id !== variableId);
			variableForms.value.delete(variableId);
		};
		const addEmptyVariableForm = () => {
			const variable = {
				id: uid(TEMPORARY_VARIABLE_UID_BASE),
				key: "",
				value: ""
			};
			variableForms.value.set(variable.id, variable);
			if (layoutRef.value?.currentPage !== 1) layoutRef.value?.setCurrentPage(1);
			addToEditableVariables(variable.id);
			telemetry.track("User clicked add variable button");
		};
		const variables = computed(() => [...variableForms.value.values(), ...environmentsStore.variables].map((variable) => ({
			resourceType: "variable",
			id: variable.id,
			name: variable.key,
			key: variable.key,
			value: variable.value
		})));
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
			if (!isFeatureEnabled.value) return cols;
			return cols.concat({
				id: 3,
				path: "actions",
				label: "",
				classes: ["variables-actions-column"]
			});
		});
		const handleSubmit = async (variable) => {
			try {
				const { id } = variable;
				if (id.startsWith(TEMPORARY_VARIABLE_UID_BASE)) await environmentsStore.createVariable({
					value: variable.value,
					key: variable.key
				});
				else await environmentsStore.updateVariable({
					id: variable.id,
					value: variable.value,
					key: variable.key
				});
				removeEditableVariable(id);
			} catch (error) {
				showError(error, i18n.baseText("variables.errors.save"));
			}
		};
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
				removeEditableVariable(variable.id);
			} catch (error) {
				showError(error, i18n.baseText("variables.errors.delete"));
			}
		};
		const updateFilter = (state) => {
			router.replace({ query: (0, import_pickBy.default)(state) });
		};
		const onSearchUpdated = (search) => {
			updateFilter({
				...filters.value,
				search
			});
		};
		const filters = ref({
			...route.query,
			incomplete: route.query.incomplete?.toString() === "true"
		});
		const handleFilter = (resource, newFilters, matches) => {
			const Resource = resource;
			if (newFilters.incomplete) matches = matches && !Resource.value;
			return matches;
		};
		const nameSortFn = (a, b, direction) => {
			if (`${a.id}`.startsWith(TEMPORARY_VARIABLE_UID_BASE)) return -1;
			else if (`${b.id}`.startsWith(TEMPORARY_VARIABLE_UID_BASE)) return 1;
			return direction === "asc" ? displayName(a).trim().localeCompare(displayName(b).trim()) : displayName(b).trim().localeCompare(displayName(a).trim());
		};
		const sortFns = {
			nameAsc: (a, b) => nameSortFn(a, b, "asc"),
			nameDesc: (a, b) => nameSortFn(a, b, "desc")
		};
		const unavailableNoticeProps = computed(() => ({
			emoji: "👋",
			heading: i18n.baseText(uiStore.contextBasedTranslationKeys.variables.unavailable.title),
			description: i18n.baseText(uiStore.contextBasedTranslationKeys.variables.unavailable.description),
			buttonText: i18n.baseText(uiStore.contextBasedTranslationKeys.variables.unavailable.button),
			buttonType: "secondary",
			"onClick:button": goToUpgrade,
			"data-test-id": "unavailable-resources-list"
		}));
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
		onMounted(() => {
			useDocumentTitle().set(i18n.baseText("variables.heading"));
		});
		return (_ctx, _cache) => {
			const _directive_n8n_truncate = resolveDirective("n8n-truncate");
			return openBlock(), createBlock(ResourcesListLayout_default, {
				ref_key: "layoutRef",
				ref: layoutRef,
				filters: filters.value,
				"onUpdate:filters": [_cache[0] || (_cache[0] = ($event) => filters.value = $event), updateFilter],
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
				"onClick:add": addEmptyVariableForm
			}, createSlots({
				header: withCtx(() => [createVNode(unref(N8nHeading_default), {
					size: "2xlarge",
					class: "mb-m"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("variables.heading")), 1)]),
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
						onClick: addEmptyVariableForm
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
				}, null, 8, ["model-value", "onUpdate:modelValue"])])]),
				default: withCtx(({ data }) => [editableVariables.value.includes(data.id) ? (openBlock(), createBlock(VariablesForm_default, {
					key: data.id,
					"data-test-id": "variables-row",
					variable: data,
					onSubmit: handleSubmit,
					onCancel: ($event) => removeEditableVariable(data.id)
				}, null, 8, ["variable", "onCancel"])) : (openBlock(), createElementBlock("tr", _hoisted_4, [
					createBaseVNode("td", null, toDisplayString(data.key), 1),
					createBaseVNode("td", null, [data.value ? withDirectives((openBlock(), createElementBlock("span", _hoisted_5, null, 512)), [[
						_directive_n8n_truncate,
						data.value,
						"20"
					]]) : (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 1,
						theme: "warning"
					}, {
						default: withCtx(() => _cache[1] || (_cache[1] = [createTextVNode(" Value missing ")])),
						_: 1
					}))]),
					createBaseVNode("td", null, [data.key ? (openBlock(), createBlock(VariablesUsageBadge_default, {
						key: 0,
						name: data.key
					}, null, 8, ["name"])) : createCommentVNode("", true)]),
					isFeatureEnabled.value ? (openBlock(), createElementBlock("td", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createVNode(unref(N8nTooltip_default), {
						disabled: permissions.value.update,
						placement: "top"
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.edit.onlyRoleCanEdit")), 1)]),
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							"data-test-id": "variable-row-edit-button",
							type: "tertiary",
							class: "mr-xs",
							disabled: !permissions.value.update,
							onClick: ($event) => addToEditableVariables(data.id)
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
				]))]),
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
}), [["__scopeId", "data-v-9e356612"]]);
export { VariablesView_default as default };
