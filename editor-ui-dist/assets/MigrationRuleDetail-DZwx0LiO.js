import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, h as withModifiers, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-AzCpuecL.js";
import { Ai as N8nText_default, C as N8nDataTableServer_default, Et as N8nInputLabel_default, It as N8nOption_default, Li as N8nIcon_default, Pi as Input_default, Pt as N8nSelect_default, Tt as N8nLink_default, ft as N8nTag_default, nn as N8nLoading_default, rt as SettingsLayout_default } from "./src-DidBXlm8.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { B as useDebounceFn, c as useAsyncState } from "./dist-CmlFwYoT.js";
import { _ as useRouter } from "./htmlUtils-y-zflQYZ.js";
import { t as useRootStore } from "./useRootStore-CffNiZQF.js";
import "./constants-CJQKNI-b.js";
import { t as DEBOUNCE_TIME } from "./durations-CNO5pC2_.js";
import { t as VIEWS } from "./views-4JHVC4Nc.js";
import { t as getDebounceTime } from "./useDebounce-B7RJD4JN.js";
import { t as useDocumentTitle } from "./useDocumentTitle-3grEV59C.js";
import { t as TimeAgo_default } from "./TimeAgo-eJt3qajo.js";
import { t as require_orderBy } from "./orderBy-BeC2qcqz.js";
import { t as ResourceFiltersDropdown_default } from "./ResourceFiltersDropdown-u-J9P7ir.js";
import { r as getReportForRule, t as SeverityTag_default } from "./SeverityTag-DNTolww1.js";
//#region src/features/settings/migrationReport/MigrationRuleDetail.vue?vue&type=script&setup=true&lang.ts
var import_orderBy = /* @__PURE__ */ __toESM(require_orderBy(), 1);
var _hoisted_1 = { class: "mb-2xs" };
var _hoisted_2 = { style: {
	"white-space": "nowrap",
	"overflow": "hidden",
	"text-overflow": "ellipsis"
} };
var _hoisted_3 = { key: 1 };
var MigrationRuleDetail_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MigrationRuleDetail",
	props: { migrationRuleId: {} },
	setup(__props) {
		const i18n = useI18n();
		useDocumentTitle().set(i18n.baseText("settings.migrationReport"));
		const props = __props;
		const router = useRouter();
		const { state, isLoading } = useAsyncState(async () => {
			return await getReportForRule(useRootStore().restApiContext, props.migrationRuleId);
		}, {
			ruleId: "",
			ruleTitle: "",
			ruleDescription: "",
			ruleSeverity: "low",
			affectedWorkflows: [],
			recommendations: []
		});
		const tableHeaders = ref([
			{
				title: i18n.baseText("settings.migrationReport.detail.table.name"),
				key: "name",
				width: 200
			},
			{
				title: i18n.baseText("settings.migrationReport.detail.table.status"),
				key: "active",
				value: (row) => row.active ? i18n.baseText("settings.migrationReport.detail.table.active") : i18n.baseText("settings.migrationReport.detail.table.deactivated"),
				width: 40
			},
			{
				title: i18n.baseText("settings.migrationReport.detail.table.nodesAffected"),
				key: "issues"
			},
			{
				title: i18n.baseText("settings.migrationReport.detail.table.numberOfExecutions"),
				key: "numberOfExecutions",
				width: 40
			},
			{
				title: i18n.baseText("settings.migrationReport.detail.table.lastExecuted"),
				key: "lastExecutedAt",
				width: 40
			},
			{
				title: i18n.baseText("settings.migrationReport.detail.table.lastUpdated"),
				key: "lastUpdatedAt",
				width: 40
			}
		]);
		function handleRowClick(_event, { item }) {
			window.open(router.resolve({
				name: VIEWS.WORKFLOW,
				params: { workflowId: item.id }
			}).href, "_blank");
		}
		const sortBy = ref([{
			id: "numberOfExecutions",
			desc: true
		}]);
		const searchInput = ref("");
		const searchQuery = ref("");
		const statusFilter = ref("");
		const debouncedSearch = useDebounceFn((value) => {
			searchQuery.value = value;
		}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		const onSearchInput = (value) => {
			searchInput.value = value;
			debouncedSearch(value);
		};
		const statusOptions = computed(() => [
			{
				value: "",
				label: i18n.baseText("settings.migrationReport.detail.filter.status.all")
			},
			{
				value: "active",
				label: i18n.baseText("settings.migrationReport.detail.filter.status.active")
			},
			{
				value: "deactivated",
				label: i18n.baseText("settings.migrationReport.detail.filter.status.deactivated")
			}
		]);
		const filters = computed(() => ({
			search: searchInput.value,
			status: statusFilter.value
		}));
		const filterKeys = computed(() => ["status"]);
		const wasJustReset = ref(false);
		const resetFilters = () => {
			statusFilter.value = "";
			wasJustReset.value = true;
		};
		const onUpdateFilters = (newFilters) => {
			if (wasJustReset.value) {
				wasJustReset.value = false;
				return;
			}
			statusFilter.value = newFilters.status || "";
		};
		const filteredWorkflows = computed(() => {
			let workflows = state.value.affectedWorkflows;
			if (searchQuery.value) {
				const query = searchQuery.value.toLowerCase();
				workflows = workflows.filter((workflow) => workflow.name.toLowerCase().includes(query));
			}
			if (statusFilter.value !== "") workflows = workflows.filter((workflow) => {
				if (statusFilter.value === "active") return workflow.active;
				else if (statusFilter.value === "deactivated") return !workflow.active;
				return true;
			});
			return workflows;
		});
		const sortedWorkflows = computed(() => {
			if (!sortBy.value.length) return filteredWorkflows.value;
			return (0, import_orderBy.default)(filteredWorkflows.value, [sortBy.value[0].id], [sortBy.value[0].desc ? "desc" : "asc"]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), {
				"full-width": "",
				"show-back": "",
				"back-label": unref(i18n).baseText("generic.back"),
				onBack: _cache[3] || (_cache[3] = ($event) => unref(router).push({ name: unref(VIEWS).MIGRATION_REPORT }))
			}, {
				default: withCtx(() => [
					createBaseVNode("header", { class: normalizeClass(_ctx.$style.pageHeader) }, [unref(isLoading) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nLoading_default), { variant: "h1" })]), createBaseVNode("div", null, [createVNode(unref(N8nLoading_default), {
						variant: "p",
						rows: 2
					})])], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nText_default), {
						tag: "h2",
						size: "xlarge",
						color: "text-dark",
						class: "mb-2xs",
						style: {
							"display": "flex",
							"align-items": "center",
							"gap": "4px"
						}
					}, {
						default: withCtx(() => [
							createTextVNode(toDisplayString(unref(state).ruleTitle) + " ", 1),
							createVNode(SeverityTag_default, { severity: unref(state).ruleSeverity }, null, 8, ["severity"]),
							createVNode(unref(N8nTag_default), {
								text: unref(i18n).baseText("settings.migrationReport.detail.affectedTag", { interpolate: { count: String(unref(state).affectedWorkflows.length) } }),
								clickable: false
							}, null, 8, ["text"])
						]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						tag: "p",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(state).ruleDescription) + toDisplayString(unref(state).ruleDescription.endsWith(".") ? "" : ".") + " ", 1), unref(state).ruleDocumentationUrl ? (openBlock(), createBlock(unref(N8nLink_default), {
							key: 0,
							theme: "text",
							href: unref(state).ruleDocumentationUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							class: normalizeClass(_ctx.$style.NoLineBreak)
						}, {
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.UnderlinedText) }, toDisplayString(unref(i18n).baseText("settings.migrationReport.documentation")), 3), _cache[4] || (_cache[4] = createTextVNode(" ↗ ", -1))]),
							_: 1
						}, 8, ["href", "class"])) : createCommentVNode("", true)]),
						_: 1
					})], 64))], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.filterControls) }, [createVNode(unref(Input_default), {
						"model-value": filters.value.search,
						placeholder: unref(i18n).baseText("settings.migrationReport.detail.search.placeholder"),
						size: "small",
						clearable: "",
						"data-test-id": "migration-rule-search",
						"onUpdate:modelValue": onSearchInput
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
						_: 1
					}, 8, ["model-value", "placeholder"]), createVNode(ResourceFiltersDropdown_default, {
						keys: filterKeys.value,
						reset: resetFilters,
						"model-value": filters.value,
						shareable: false,
						"data-test-id": "migration-rule-filters",
						"onUpdate:modelValue": onUpdateFilters
					}, {
						default: withCtx(() => [createVNode(unref(N8nInputLabel_default), {
							label: unref(i18n).baseText("settings.migrationReport.detail.filter.status.label"),
							bold: false,
							size: "small",
							color: "text-base",
							class: "mb-3xs"
						}, null, 8, ["label"]), createVNode(unref(N8nSelect_default), {
							modelValue: statusFilter.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => statusFilter.value = $event),
							size: "small",
							"data-test-id": "migration-rule-status-filter"
						}, {
							default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(statusOptions.value, (option) => {
								return openBlock(), createBlock(unref(N8nOption_default), {
									key: option.value,
									value: option.value,
									label: option.label
								}, null, 8, ["value", "label"]);
							}), 128))]),
							_: 1
						}, 8, ["modelValue"])]),
						_: 1
					}, 8, ["keys", "model-value"])], 2),
					createVNode(unref(N8nDataTableServer_default), {
						"sort-by": sortBy.value,
						"onUpdate:sortBy": _cache[2] || (_cache[2] = ($event) => sortBy.value = $event),
						"items-per-page": sortedWorkflows.value.length + 1,
						items: sortedWorkflows.value,
						"items-length": sortedWorkflows.value.length,
						headers: tableHeaders.value,
						"row-props": { class: _ctx.$style.clickableRow },
						loading: unref(isLoading),
						"onClick:row": handleRowClick
					}, {
						[`item.issues`]: withCtx(({ item }) => [createBaseVNode("div", _hoisted_2, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.issues, (issue, index) => {
							return openBlock(), createElementBlock(Fragment, { key: issue.nodeId }, [createVNode(unref(N8nLink_default), {
								theme: "text",
								to: `/workflow/${item.id}/${issue.nodeId}`,
								"new-window": "",
								onClickCapture: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(issue.nodeName), 1)]),
								_: 2
							}, 1032, ["to"]), index < item.issues.length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(", ")], 64)) : createCommentVNode("", true)], 64);
						}), 128))])]),
						[`item.lastExecutedAt`]: withCtx(({ item }) => [item.lastExecutedAt ? (openBlock(), createBlock(TimeAgo_default, {
							key: 0,
							date: item.lastExecutedAt.toString()
						}, null, 8, ["date"])) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.table.never")), 1))]),
						[`item.lastUpdatedAt`]: withCtx(({ item }) => [createVNode(TimeAgo_default, { date: item.lastUpdatedAt.toString() }, null, 8, ["date"])]),
						_: 2
					}, 1032, [
						"sort-by",
						"items-per-page",
						"items",
						"items-length",
						"headers",
						"row-props",
						"loading"
					])
				]),
				_: 1
			}, 8, ["back-label"]);
		};
	}
});
var MigrationRuleDetail_vue_vue_type_style_index_0_lang_module_default = {
	pageHeader: "_pageHeader_wd5rq_4",
	clickableRow: "_clickableRow_wd5rq_10",
	filterControls: "_filterControls_wd5rq_14",
	NoLineBreak: "_NoLineBreak_wd5rq_27",
	UnderlinedText: "_UnderlinedText_wd5rq_31"
};
var MigrationRuleDetail_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MigrationRuleDetail_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MigrationRuleDetail_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { MigrationRuleDetail_default as default };
