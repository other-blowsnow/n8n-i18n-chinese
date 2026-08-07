const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/InsightsPaywall-CVwW3K37.js","assets/_plugin-vue_export-helper-Da88TEg1.js","assets/src-C5Kc3_kG.js","assets/chunk-CC9Q-vWm.js","assets/get-BDIJP53P.js","assets/_MapCache-Cdnara8G.js","assets/vue.runtime.esm-bundler-Bs4WIMNP.js","assets/htmlUtils-6WNyAs6s.js","assets/CalendarDate-DwzQ3MAK.js","assets/dist-CmlFwYoT.js","assets/sanitize-html-Z9mSNZC_.js","assets/__vite-browser-external-Byz2CIkm.js","assets/event-bus-DAq0yaAJ.js","assets/en-B10_Mv1Q.js","assets/src-B5Sx86vL.css","assets/usePageRedirectionHelper-Ba0mKFd3.js","assets/settings.store-BlV3VFh0.js","assets/src-CwQD7B26.js","assets/merge-DDqGZb2k.js","assets/expression-runtime-stub-DPCJd7RV.js","assets/useRootStore-BGtY9ILv.js","assets/constants-XpttQcgc.js","assets/assert-Cfjx80o8.js","assets/posthog.store-CHWQ6Zed.js","assets/useDebounce-BKOtjfwb.js","assets/useTelemetry-ByPVpSRb.js","assets/views-4JHVC4Nc.js","assets/users.store-wn2qSsCl.js","assets/constants2-D6qsHKVK.js","assets/constants-BcmmCDkE.js","assets/durations-CNO5pC2_.js","assets/settings.store-CYihJKMA.js","assets/builder.store-DEST6SJ_.js","assets/workflows.store-CqcYpj8n.js","assets/dist-CluHQ3LF.js","assets/evaluation.store-CxKAcGOL.js","assets/sortBy-hN2e7umO.js","assets/_baseOrderBy-ClkkdtFR.js","assets/useDocumentTitle-BRfXEVwP.js","assets/workflowsList.store-CAz8GLQI.js","assets/typesUtils-BrjmQte0.js","assets/dateformat-BBH_bLAf.js","assets/permissions-Cdv0urea.js","assets/rbac.store-CwnFKJ81.js","assets/useToast-DazLbRYs.js","assets/useExternalHooks-B4Dw9Thn.js","assets/z-indexes-BpR3Iam_.js","assets/FileSaver.min-DG6ioNTL.js","assets/useCodeDiff-QlhMZ8f0.js","assets/event-bus-CoPgZ15W.js","assets/useExternalHooks-BQLN-lhv.js","assets/useMessage-DHjKpktn.js","assets/useNodeHelpers-CPE61O3-.js","assets/useLoadingService-Be0KrGRb.js","assets/usePrivateCredentials-BShLD_46.js","assets/focusPanel.store-k0ZoKxUc.js","assets/templates.store-Ksz1zTJt.js","assets/cloudPlan.store-DR1F2ryw.js","assets/utils-D6owfx95.js","assets/useInstanceAiAvailability-CiJ8OYJT.js","assets/versions.store-DLD1W4__.js","assets/InsightsPaywall-BgF1_jwg.css"])))=>i.map(i=>d[i]);
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, M as defineAsyncComponent, N as defineComponent, O as createSlots, S as computed, U as mergeProps, _ as Fragment, bt as withCtx, dt as useModel, gt as watch, j as createVNode, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-Cdnara8G.js";
import { C as N8nDataTableServer_default, jr as N8nTooltip_default, jt as N8nHeading_default } from "./src-C5Kc3_kG.js";
import { f as __vitePreload } from "./get-BDIJP53P.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { u as RouterLink } from "./htmlUtils-6WNyAs6s.js";
import "./constants-BcmmCDkE.js";
import { t as VIEWS } from "./views-4JHVC4Nc.js";
import { n as useTelemetry } from "./posthog.store-CHWQ6Zed.js";
import { a as INSIGHTS_UNIT_MAPPING } from "./insights.constants-120-BYPt.js";
import { l as transformInsightsTimeSaved, o as transformInsightsAverageRunTime, s as transformInsightsFailureRate } from "./insights.utils-9ufCkpu9.js";
import { t as smartDecimal } from "./smart-decimal-BO5hC0U1.js";
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
		const InsightsPaywall = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsPaywall-CVwW3K37.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61])));
		const props = __props;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const sampleWorkflows = Array.from({ length: 10 }, (_, i) => ({
			workflowId: `sample-workflow-${i + 1}`,
			workflowName: `Sample Workflow ${i + 1}`,
			hasReadAccess: true,
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
				[`item.workflowName`]: withCtx(({ item }) => [(openBlock(), createBlock(resolveDynamicComponent(item.workflowId && item.hasReadAccess ? unref(RouterLink) : "span"), mergeProps({ class: [_ctx.$style.nameCell, { [_ctx.$style.link]: item.workflowId && item.hasReadAccess }] }, item.workflowId && item.hasReadAccess ? {
					to: getWorkflowLink(item),
					onClick: () => trackWorkflowClick(item)
				} : {}), {
					default: withCtx(() => [createVNode(unref(N8nTooltip_default), {
						content: item.hasReadAccess ? item.workflowName : unref(i18n).baseText("insights.dashboard.table.noAccess"),
						placement: "top"
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.ellipsis) }, toDisplayString(item.workflowName), 3)]),
						_: 2
					}, 1032, ["content"])]),
					_: 2
				}, 1040, ["class"]))]),
				[`item.timeSaved`]: withCtx(({ item, value }) => [!item.timeSaved && item.workflowId && item.hasReadAccess ? (openBlock(), createBlock(unref(RouterLink), {
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
	ellipsis: "_ellipsis_13q97_125",
	nameCell: "_nameCell_13q97_133",
	link: "_link_13q97_146",
	blurryCover: "_blurryCover_13q97_154"
};
var InsightsTableWorkflows_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InsightsTableWorkflows_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InsightsTableWorkflows_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InsightsTableWorkflows_default as default };
