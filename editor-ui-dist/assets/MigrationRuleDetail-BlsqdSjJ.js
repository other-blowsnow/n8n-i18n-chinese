import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, _ as Fragment, _n as normalizeClass, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n, rt as useDebounceFn, x as useAsyncState } from "./_MapCache-DxwXn8uM.js";
import { Bn as N8nIcon_default, G as N8nSelect_default, K as N8nOption_default, Ln as N8nText_default, X as N8nInputLabel_default, ht as N8nLink_default, s as N8nDataTableServer_default, v as N8nTag_default, wt as N8nInput_default } from "./src-BcrqaOXg.js";
import "./en-DicIYhdb.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter } from "./truncate-D8k4BuhS.js";
import "./icon-4QNDuHkC.js";
import "./empty-BuGRxzl4.js";
import "./useTelemetry-Ct6_U3iA.js";
import "./sanitize-html-D_cgmpAf.js";
import "./path-browserify-DsmB_HMK.js";
import { Oo as VIEWS } from "./constants-C-5XMlPK.js";
import "./merge-JOo1y2yJ.js";
import { t as useRootStore } from "./useRootStore-B7yZgeot.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-B-oRGfxZ.js";
import "./ProjectIcon-DqMmi3e-.js";
import "./EnterpriseEdition.ee-Bs5i8kWM.js";
import { t as TimeAgo_default } from "./TimeAgo-CUer7nKo.js";
import { t as require_orderBy } from "./orderBy-DaTcD9tK.js";
import "./ProjectSharing-BDwf4scT.js";
import { t as ResourceFiltersDropdown_default } from "./ResourceFiltersDropdown-BjnksGVt.js";
import { r as getReportForRule, t as SeverityTag_default } from "./SeverityTag-PI80Lhgn.js";
var import_orderBy = /* @__PURE__ */ __toESM(require_orderBy());
var _hoisted_1 = { style: {
	"white-space": "nowrap",
	"overflow": "hidden",
	"text-overflow": "ellipsis"
} };
var _hoisted_2 = { key: 1 };
var MigrationRuleDetail_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MigrationRuleDetail",
	props: { migrationRuleId: {} },
	setup(__props) {
		const i18n = useI18n();
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
				title: i18n.baseText("settings.migrationReport.detail.table.issue"),
				key: "active",
				value: (row) => row.active ? i18n.baseText("settings.migrationReport.detail.table.active") : i18n.baseText("settings.migrationReport.detail.table.deactivated"),
				width: 40
			},
			{
				title: i18n.baseText("settings.migrationReport.detail.table.nodeAffected"),
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
				params: { name: item.id }
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
		}, 300);
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
			return openBlock(), createElementBlock("div", null, [
				createVNode(unref(N8nText_default), {
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
				}),
				createVNode(unref(N8nText_default), {
					tag: "p",
					color: "text-base",
					class: "mb-2xl"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(state).ruleDescription) + " ", 1), unref(state).ruleDocumentationUrl ? (openBlock(), createBlock(unref(N8nLink_default), {
						key: 0,
						theme: "text",
						underline: "",
						href: unref(state).ruleDocumentationUrl,
						target: "_blank",
						rel: "noopener noreferrer"
					}, {
						default: withCtx(() => [createBaseVNode("u", { class: normalizeClass(_ctx.$style.NoLineBreak) }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.documentation")) + " ", 1), createVNode(unref(N8nIcon_default), { icon: "external-link" })], 2)]),
						_: 1
					}, 8, ["href"])) : createCommentVNode("", true)]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.filterControls) }, [createVNode(unref(N8nInput_default), {
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
					[`item.issues`]: withCtx(({ item }) => [createBaseVNode("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.issues, (issue, index) => {
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
					}, null, 8, ["date"])) : (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.table.never")), 1))]),
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
			]);
		};
	}
});
var MigrationRuleDetail_vue_vue_type_style_index_0_lang_module_default = {
	clickableRow: "_clickableRow_smt9p_2",
	filterControls: "_filterControls_smt9p_6",
	NoLineBreak: "_NoLineBreak_smt9p_19"
};
var MigrationRuleDetail_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MigrationRuleDetail_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MigrationRuleDetail_vue_vue_type_style_index_0_lang_module_default }]]);
export { MigrationRuleDetail_default as default };
