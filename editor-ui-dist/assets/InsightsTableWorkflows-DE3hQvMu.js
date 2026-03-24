const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/InsightsPaywall-DnkVW_wb.js","assets/_plugin-vue_export-helper-DltO58Gh.js","assets/src-Bnic0IZ0.js","assets/CalendarDate-DpJ94D5y.js","assets/_MapCache-D5rots3X.js","assets/vue.runtime.esm-bundler-dg1EVmSK.js","assets/chunk-r2Y0G7H8.js","assets/sanitize-html-JHjOJhXQ.js","assets/en-BhOiEPR8.js","assets/src-BOSx_UDi.css","assets/constants-CvheVn3c.js","assets/merge-BnWpgTIL.js","assets/expression-runtime-stub-n6GAY33T.js","assets/users.store-CzbeKDa-.js","assets/_baseOrderBy-B6NURhS_.js","assets/dateformat-CIyrhJiH.js","assets/useDebounce-BPQ7Jg24.js","assets/versions.store-D_4t3Xlu.js","assets/usePageRedirectionHelper-CVdBgnFq.js","assets/InsightsPaywall-BgF1_jwg.css"])))=>i.map(i=>d[i]);
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, F as guardReactiveProps, Ft as ref, H as mergeModels, M as defineAsyncComponent, N as defineComponent, O as createSlots, S as computed, Sn as toDisplayString, Wt as unref, _ as Fragment, _n as normalizeClass, dt as useModel, gt as watch, j as createVNode, st as resolveDynamicComponent, vn as normalizeProps, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-D5rots3X.js";
import { Mi as N8nTooltip_default, Yi as N8nHeading_default, _ as N8nDataTableServer_default, na as __vitePreload, ut as RouterLink } from "./src-Bnic0IZ0.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import { en as useTelemetry } from "./users.store-CzbeKDa-.js";
import { ms as VIEWS } from "./constants-CvheVn3c.js";
import "./merge-BnWpgTIL.js";
import "./_baseOrderBy-B6NURhS_.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BPQ7Jg24.js";
import { a as INSIGHTS_UNIT_MAPPING } from "./insights.constants-C04mDAF4.js";
import { l as transformInsightsTimeSaved, o as transformInsightsAverageRunTime, s as transformInsightsFailureRate } from "./insights.utils-Br-wW773.js";
import { t as smartDecimal } from "./smartDecimal-Dgs1DTzw.js";
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
		const InsightsPaywall = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsPaywall-DnkVW_wb.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])));
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
			params: { name: item.workflowId },
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
	ellipsis: "_ellipsis_14mui_125",
	link: "_link_14mui_134",
	blurryCover: "_blurryCover_14mui_146"
};
var InsightsTableWorkflows_default = /* @__PURE__ */ __plugin_vue_export_helper_default(InsightsTableWorkflows_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InsightsTableWorkflows_vue_vue_type_style_index_0_lang_module_default }]]);
export { InsightsTableWorkflows_default as default };
