import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, _ as Fragment, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { ot as useDebounceFn, x as useAsyncState, yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { At as N8nLink_default, Bi as N8nButton_default, Hi as N8nIcon_default, Kt as N8nInput_default, Rt as useRouter, d as N8nDataTableServer_default, dt as N8nOption_default, it as N8nInputLabel_default, j as N8nTag_default, ut as N8nSelect_default, xt as N8nLoading_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-qBZsmf9-.js";
import { Fc as DEBOUNCE_TIME, Uc as getDebounceTime, Xo as VIEWS } from "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import { r as useRootStore } from "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import "./ProjectIcon-B_2Zohal.js";
import "./EnterpriseEdition.ee-BtSNB8sY.js";
import { t as TimeAgo_default } from "./TimeAgo-DjW9pnWX.js";
import { t as require_orderBy } from "./orderBy-CwY3H7Zi.js";
import "./ProjectSharing--NgC8ekl.js";
import { t as ResourceFiltersDropdown_default } from "./ResourceFiltersDropdown-DtqPKZUd.js";
import { r as getReportForRule, t as SeverityTag_default } from "./SeverityTag-DVceXEib.js";
var import_orderBy = /* @__PURE__ */ __toESM(require_orderBy(), 1);
var _hoisted_1 = { class: "mb-2xs" };
var _hoisted_2 = { class: "mb-2xl" };
var _hoisted_3 = { style: {
	"white-space": "nowrap",
	"overflow": "hidden",
	"text-overflow": "ellipsis"
} };
var _hoisted_4 = { key: 1 };
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
			return openBlock(), createElementBlock("div", null, [
				createVNode(unref(N8nButton_default), {
					class: normalizeClass([_ctx.$style.backButton, "mb-xs"]),
					type: "secondary",
					text: "",
					icon: "arrow-left",
					label: unref(i18n).baseText("generic.back"),
					onClick: _cache[0] || (_cache[0] = ($event) => unref(router).push({ name: unref(VIEWS).MIGRATION_REPORT }))
				}, null, 8, ["class", "label"]),
				unref(isLoading) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nLoading_default), { variant: "h1" })]), createBaseVNode("div", _hoisted_2, [createVNode(unref(N8nLoading_default), {
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
					color: "text-base",
					class: "mb-2xl"
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
				})], 64)),
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
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => statusFilter.value = $event),
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
					"onUpdate:sortBy": _cache[3] || (_cache[3] = ($event) => sortBy.value = $event),
					"items-per-page": sortedWorkflows.value.length + 1,
					items: sortedWorkflows.value,
					"items-length": sortedWorkflows.value.length,
					headers: tableHeaders.value,
					"row-props": { class: _ctx.$style.clickableRow },
					loading: unref(isLoading),
					"onClick:row": handleRowClick
				}, {
					[`item.issues`]: withCtx(({ item }) => [createBaseVNode("div", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.issues, (issue, index) => {
						return openBlock(), createElementBlock(Fragment, { key: issue.nodeId }, [createVNode(unref(N8nLink_default), {
							theme: "text",
							to: `/workflow/${item.id}/${issue.nodeId}`,
							"new-window": "",
							onClickCapture: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(issue.nodeName), 1)]),
							_: 2
						}, 1032, ["to"]), index < item.issues.length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(", ")], 64)) : createCommentVNode("", true)], 64);
					}), 128))])]),
					[`item.lastExecutedAt`]: withCtx(({ item }) => [item.lastExecutedAt ? (openBlock(), createBlock(TimeAgo_default, {
						key: 0,
						date: item.lastExecutedAt.toString()
					}, null, 8, ["date"])) : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.table.never")), 1))]),
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
	backButton: "_backButton_1kw04_2",
	clickableRow: "_clickableRow_1kw04_6",
	filterControls: "_filterControls_1kw04_10",
	NoLineBreak: "_NoLineBreak_1kw04_23",
	UnderlinedText: "_UnderlinedText_1kw04_27"
};
var MigrationRuleDetail_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MigrationRuleDetail_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MigrationRuleDetail_vue_vue_type_style_index_0_lang_module_default }]]);
export { MigrationRuleDetail_default as default };
