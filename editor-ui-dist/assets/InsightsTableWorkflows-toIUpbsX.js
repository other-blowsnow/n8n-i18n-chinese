const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/InsightsPaywall-DMqrtW69.js","assets/_plugin-vue_export-helper-Da88TEg1.js","assets/src-BwN8TeVO.js","assets/chunk-CC9Q-vWm.js","assets/get-CKIAFyM1.js","assets/_MapCache-BrrIbInV.js","assets/vue.runtime.esm-bundler-CiTcVoZc.js","assets/CalendarDate-DaCb8yxn.js","assets/sanitize-html-Bn3Bp1_e.js","assets/empty-CSot38mi.js","assets/en-DjyScucC.js","assets/src-DBATLjRH.css","assets/src-2bgghuOQ.js","assets/usePageRedirectionHelper-CdoBPlRt.js","assets/constants-BiYlbN9Z.js","assets/merge-Bzll_Q9n.js","assets/expression-runtime-stub-9w2ZHVM3.js","assets/settings.store-DROe9gro.js","assets/useRootStore-DbgDMM5M.js","assets/useMessage-cXq94uYo.js","assets/workflows.store-B-Pu_sWP.js","assets/core-BemUAWor.js","assets/_baseOrderBy-B0YMGGOQ.js","assets/useDebounce-CoPo6zc6.js","assets/useDocumentTitle-B687jMRp.js","assets/users.store-CUZkGc51.js","assets/workflowsList.store-CHLmHbKZ.js","assets/dateformat-9ZHpj92n.js","assets/overlay-BtaF4G28.js","assets/builder.store-C4xo9wCF.js","assets/useToast-DGGqiWI5.js","assets/useExternalHooks-C7u6628A.js","assets/useStyles-CBXZLAO5.js","assets/FileSaver.min-CSQj3WGy.js","assets/dist-C5au1DeO.js","assets/useCodeDiff-Cf60QdxF.js","assets/event-bus-D26CxQSb.js","assets/useNodeHelpers-B5CB98oo.js","assets/useLoadingService-B2qlen_A.js","assets/usePrivateCredentials-BSSk8lkV.js","assets/focusPanel.store-DKP1qeUy.js","assets/templates.store-5k3t8DyP.js","assets/cloudPlan.store--EUkFAAu.js","assets/utils-DqeHVjye.js","assets/versions.store-DfHucDCm.js","assets/InsightsPaywall-BgF1_jwg.css"])))=>i.map(i=>d[i]);
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, F as guardReactiveProps, Gt as unref, H as mergeModels, It as ref, M as defineAsyncComponent, N as defineComponent, O as createSlots, S as computed, _ as Fragment, bt as withCtx, dt as useModel, gt as watch, j as createVNode, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { s as useI18n } from "./src-2bgghuOQ.js";
import { Ga as N8nHeading_default, b as N8nDataTableServer_default, lt as RouterLink, zi as N8nTooltip_default } from "./src-BwN8TeVO.js";
import { d as __vitePreload } from "./get-CKIAFyM1.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { ui as VIEWS } from "./constants-BiYlbN9Z.js";
import { p as useTelemetry } from "./users.store-CUZkGc51.js";
import { a as INSIGHTS_UNIT_MAPPING } from "./insights.constants-B7aXbgxr.js";
import { l as transformInsightsTimeSaved, o as transformInsightsAverageRunTime, s as transformInsightsFailureRate } from "./insights.utils-CJiKfDH8.js";
import { t as smartDecimal } from "./smartDecimal-DsFoEGht.js";
//#region src/features/execution/insights/components/tables/InsightsTableWorkflows.vue?vue&type=script&setup=true&lang.ts
var InsightsTableWorkflows_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsTableWorkflows",
	props: /* @__PURE__ */ mergeModels({
		data: {},
		loading: { type: Boolean },
		isDashboardEnabled: { type: Boolean }
	}, {
		"sortBy": {},
		"sortByModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["update:options"], ["update:sortBy"]),
	setup(__props, { emit: __emit }) {
		const InsightsPaywall = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsPaywall-DMqrtW69.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45])));
		const props = __props;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const sampleWorkflows = Array.from({ length: 10 }, (_, i) => ({
			workflowId: `sample-workflow-${i + 1}`,
			workflowName: `Sample Workflow ${i + 1}`,
			total: Math.floor(Math.random() * 2e3) + 500,
			failed: Math.floor(Math.random() * 100) + 20,
			failureRate: Math.random() * 100,
			timeSaved: Math.floor(Math.random() * 3e5) + 6e4,
			averageRunTime: Math.floor(Math.random() * 6e4) + 15e3,
			projectName: `Sample Project ${i + 1}`,
			projectId: `sample-project-${i + 1}`,
			succeeded: Math.floor(Math.random() * 2e3) + 500,
			runTime: Math.floor(Math.random() * 6e4) + 15e3
		}));
		const sampleData = {
			data: sampleWorkflows,
			count: sampleWorkflows.length
		};
		const tableData = computed(() => props.isDashboardEnabled ? props.data : sampleData);
		const rows = computed(() => tableData.value.data);
		const headers = ref([
			{
				title: "Name",
				key: "workflowName",
				width: 400,
				disableSort: !props.isDashboardEnabled
			},
			{
				title: i18n.baseText("insights.banner.title.total"),
				key: "total",
				value(row) {
					return row.total.toLocaleString("en-US");
				},
				disableSort: !props.isDashboardEnabled
			},
			{
				title: i18n.baseText("insights.banner.title.failed"),
				key: "failed",
				value(row) {
					return row.failed.toLocaleString("en-US");
				},
				disableSort: !props.isDashboardEnabled
			},
			{
				title: i18n.baseText("insights.banner.title.failureRate"),
				key: "failureRate",
				value(row) {
					return smartDecimal(transformInsightsFailureRate(row.failureRate)) + INSIGHTS_UNIT_MAPPING.failureRate(row.failureRate);
				},
				disableSort: !props.isDashboardEnabled
			},
			{
				title: i18n.baseText("insights.banner.title.timeSaved"),
				key: "timeSaved",
				value(row) {
					return smartDecimal(transformInsightsTimeSaved(row.timeSaved)) + INSIGHTS_UNIT_MAPPING.timeSaved(row.timeSaved);
				},
				disableSort: !props.isDashboardEnabled
			},
			{
				title: i18n.baseText("insights.banner.title.averageRunTime"),
				key: "averageRunTime",
				value(row) {
					return smartDecimal(transformInsightsAverageRunTime(row.averageRunTime)) + INSIGHTS_UNIT_MAPPING.averageRunTime(row.averageRunTime);
				},
				disableSort: !props.isDashboardEnabled
			},
			{
				title: i18n.baseText("insights.dashboard.table.projectName"),
				key: "projectName",
				disableSort: true
			}
		]);
		const sortBy = useModel(__props, "sortBy");
		const currentPage = ref(0);
		const itemsPerPage = ref(25);
		const emit = __emit;
		const getWorkflowLink = (item, query) => ({
			name: VIEWS.WORKFLOW,
			params: { workflowId: item.workflowId },
			query
		});
		const trackWorkflowClick = (item) => {
			telemetry.track("User clicked on workflow from insights table", { workflow_id: item.workflowId });
		};
		watch(sortBy, (newValue) => {
			telemetry.track("User sorted insights table", { sorted_by: (newValue ?? []).map((item) => ({
				...item,
				label: headers.value.find((header) => header.key === item.id)?.title
			})) });
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nHeading_default), {
				bold: "",
				tag: "h3",
				size: "medium",
				class: "mb-s"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.table.title")), 1)]),
				_: 1
			}), createVNode(unref(N8nDataTableServer_default), {
				"sort-by": sortBy.value,
				"onUpdate:sortBy": _cache[0] || (_cache[0] = ($event) => sortBy.value = $event),
				page: currentPage.value,
				"onUpdate:page": _cache[1] || (_cache[1] = ($event) => currentPage.value = $event),
				"items-per-page": itemsPerPage.value,
				"onUpdate:itemsPerPage": _cache[2] || (_cache[2] = ($event) => itemsPerPage.value = $event),
				items: rows.value,
				headers: headers.value,
				"items-length": tableData.value.count,
				"onUpdate:options": _cache[3] || (_cache[3] = ($event) => emit("update:options", $event))
			}, createSlots({
				[`item.workflowName`]: withCtx(({ item }) => [(openBlock(), createBlock(resolveDynamicComponent(item.workflowId ? unref(RouterLink) : "div"), normalizeProps(guardReactiveProps(item.workflowId ? {
					to: getWorkflowLink(item),
					class: _ctx.$style.link,
					onClick: () => trackWorkflowClick(item)
				} : {})), {
					default: withCtx(() => [createVNode(unref(N8nTooltip_default), {
						content: item.workflowName,
						placement: "top"
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.ellipsis) }, toDisplayString(item.workflowName), 3)]),
						_: 2
					}, 1032, ["content"])]),
					_: 2
				}, 1040))]),
				[`item.timeSaved`]: withCtx(({ item, value }) => [!item.timeSaved && item.workflowId ? (openBlock(), createBlock(unref(RouterLink), {
					key: 0,
					to: getWorkflowLink(item, { settings: "true" }),
					class: normalizeClass(_ctx.$style.link)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.table.estimate")), 1)]),
					_: 1
				}, 8, ["to", "class"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(value), 1)], 64))]),
				[`item.projectName`]: withCtx(({ item }) => [item.projectName ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: item.projectName,
					placement: "top"
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.ellipsis) }, toDisplayString(item.projectName), 3)]),
					_: 2
				}, 1032, ["content"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(" - ")], 64))]),
				_: 2
			}, [!__props.isDashboardEnabled ? {
				name: "cover",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.blurryCover) }, [createVNode(unref(InsightsPaywall))], 2)]),
				key: "0"
			} : void 0]), 1032, [
				"sort-by",
				"page",
				"items-per-page",
				"items",
				"headers",
				"items-length"
			])]);
		};
	}
});
var InsightsTableWorkflows_vue_vue_type_style_index_0_lang_module_default = {
	ellipsis: "_ellipsis_xypxd_125",
	link: "_link_xypxd_133",
	blurryCover: "_blurryCover_xypxd_151"
};
var InsightsTableWorkflows_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InsightsTableWorkflows_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InsightsTableWorkflows_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InsightsTableWorkflows_default as default };
