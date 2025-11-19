import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _ as Fragment, _n as normalizeClass, at as renderSlot, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, q as onBeforeMount, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { Dt as N8nActionBox_default, In as N8nText_default, Pn as N8nHeading_default, Rn as N8nSpinner_default, X as N8nCard_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter } from "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./overlay-DxjKgl5T.js";
import "./empty-RTEMfF4N.js";
import "./useMessage-HzD9OyTZ.js";
import { Bo as useSettingsStore, Qs as useRootStore, Tn as useDocumentTitle, t as useTelemetry } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./assistant.store-CKoUz8Lx.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import "./npsSurvey.store-Csg2H1Od.js";
import "./cloudPlan.store-Dw9c9iy4.js";
import "./templates.store-CFt_GGxU.js";
import "./focusPanel.store-Ce3wvzmP.js";
import "./useWorkflowSaving-eHdXvbOs.js";
import "./retry-sDkwzrPY.js";
import "./executions.store-a34D3haB.js";
import { i as usePushConnectionStore } from "./useRunWorkflow-CekP-uxB.js";
import "./usePinnedData-CxyLm90h.js";
import "./nodeCreator.store-BXjpGwrk.js";
import "./nodeIcon-BWTKM7V3.js";
import { t as useClipboard } from "./useClipboard-CDW2KXIc.js";
import "./useCanvasOperations-CA0dp-vn.js";
import "./folders.store-Cwp_DTVT.js";
import "./versions.store-DbkVHo9d.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-BOaFWroN.js";
import "./schemaPreview.store-C5btNE_R.js";
import { t as sortByProperty } from "./sortByProperty-CUhVU03p.js";
import "./chart-CE3HWIkr.js";
import { t as PushConnectionTracker_default } from "./PushConnectionTracker-DiBH5u21.js";
import { n as WORKER_HISTORY_LENGTH, r as useOrchestrationStore, t as usePushConnection } from "./usePushConnection-BDiczpJQ.js";
import "./readyToRunWorkflows.store-FlEk_nDy.js";
import "./readyToRunWorkflowsV2.store-DpzmixIa.js";
import { n as Chart } from "./dist-D33xoYUY.js";
function averageWorkerLoadFromLoads(loads) {
	return loads.reduce((prev, curr) => prev + curr, 0) / loads.length;
}
function averageWorkerLoadFromLoadsAsString(loads) {
	return averageWorkerLoadFromLoads(loads).toFixed(2);
}
function memAsGb(mem) {
	return mem / 1024 / 1024 / 1024;
}
var WorkerAccordion_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkerAccordion",
	props: {
		icon: { default: "list-checks" },
		iconColor: { default: "text-dark" },
		initialExpanded: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		const expanded$1 = ref(__props.initialExpanded);
		function toggle() {
			expanded$1.value = !expanded$1.value;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["accordion", _ctx.$style.container]) }, [createBaseVNode("div", {
				class: normalizeClass({
					[_ctx.$style.header]: true,
					[_ctx.$style.expanded]: expanded$1.value
				}),
				onClick: toggle
			}, [
				createVNode(unref(N8nIcon_default), {
					icon: _ctx.icon,
					color: _ctx.iconColor,
					size: "small",
					class: "mr-2xs"
				}, null, 8, ["icon", "color"]),
				createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.headerText),
					color: "text-base",
					size: "small",
					align: "left",
					bold: ""
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "title")]),
					_: 3
				}, 8, ["class"]),
				createVNode(unref(N8nIcon_default), {
					icon: expanded$1.value ? "chevron-up" : "chevron-down",
					bold: ""
				}, null, 8, ["icon"])
			], 2), expanded$1.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass({
					[_ctx.$style.description]: true,
					[_ctx.$style.collapsed]: !expanded$1.value
				})
			}, [renderSlot(_ctx.$slots, "content")], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
var WorkerAccordion_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1nnt5_123",
	header: "_header_1nnt5_127",
	headerText: "_headerText_1nnt5_133",
	expanded: "_expanded_1nnt5_137",
	description: "_description_1nnt5_141"
};
var WorkerAccordion_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkerAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkerAccordion_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$3 = ["href"];
var _hoisted_2$1 = ["href"];
var WorkerJobAccordion_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkerJobAccordion",
	props: { items: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		function runningSince(started) {
			let seconds = Math.floor((/* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime() - started.getTime()) / 1e3);
			const hrs = Math.floor(seconds / 3600);
			seconds -= hrs * 3600;
			const mnts = Math.floor(seconds / 60);
			seconds -= mnts * 60;
			return `${hrs}h ${mnts}m ${Math.floor(seconds)}s`;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WorkerAccordion_default, {
				icon: "list-checks",
				"icon-color": "text-dark",
				"initial-expanded": true
			}, {
				title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.jobListTitle")) + " (" + toDisplayString(_ctx.items.length) + ") ", 1)]),
				content: withCtx(() => [props.items.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.accordionItems)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.items, (item) => {
					return openBlock(), createElementBlock("div", {
						key: item.executionId,
						class: normalizeClass(_ctx.$style.accordionItem)
					}, [
						createBaseVNode("a", { href: "/workflow/" + item.workflowId + "/executions/" + item.executionId }, " Execution " + toDisplayString(item.executionId) + " - " + toDisplayString(item.workflowName), 9, _hoisted_1$3),
						createVNode(unref(N8nText_default), {
							color: "text-base",
							size: "small",
							align: "left"
						}, {
							default: withCtx(() => [createTextVNode(" | Started at: " + toDisplayString(new Date(item.startedAt)?.toLocaleTimeString()) + " | Running for " + toDisplayString(runningSince(new Date(item.startedAt))) + " " + toDisplayString(item.retryOf ? `| Retry of: ${item.retryOf}` : "") + " | ", 1)]),
							_: 2
						}, 1024),
						createBaseVNode("a", {
							target: "_blank",
							href: "/workflow/" + item.workflowId
						}, " (Open workflow)", 8, _hoisted_2$1)
					], 2);
				}), 128))], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.accordionItems)
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.empty) }, toDisplayString(unref(i18n).baseText("workerList.item.jobList.empty")), 3)], 2))]),
				_: 1
			});
		};
	}
});
var WorkerJobAccordion_vue_vue_type_style_index_0_lang_module_default = {
	accordionItems: "_accordionItems_pocpt_123",
	accordionItem: "_accordionItem_pocpt_123",
	empty: "_empty_pocpt_136"
};
var WorkerJobAccordion_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkerJobAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkerJobAccordion_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$2 = ["onClick"];
var WorkerNetAccordion_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkerNetAccordion",
	props: { items: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const clipboard = useClipboard();
		const { showMessage } = useToast();
		function onCopyToClipboard(content) {
			try {
				clipboard.copy(content);
				showMessage({
					title: i18n.baseText("workerList.item.copyAddressToClipboard"),
					type: "success"
				});
			} catch {}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WorkerAccordion_default, {
				icon: "list-checks",
				"icon-color": "text-dark",
				"initial-expanded": false
			}, {
				title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.netListTitle")) + " (" + toDisplayString(_ctx.items.length) + ") ", 1)]),
				content: withCtx(() => [props.items.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.accordionItems)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.items, (item) => {
					return openBlock(), createElementBlock("div", {
						key: item.address,
						class: normalizeClass(_ctx.$style.accordionItem),
						onClick: ($event) => onCopyToClipboard(item.address)
					}, [
						createTextVNode(toDisplayString(item.family) + ": ", 1),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.clickable) }, toDisplayString(item.address), 3),
						createTextVNode(" " + toDisplayString(item.internal ? "(internal)" : ""), 1)
					], 10, _hoisted_1$2);
				}), 128))], 2)) : createCommentVNode("", true)]),
				_: 1
			});
		};
	}
});
var WorkerNetAccordion_vue_vue_type_style_index_0_lang_module_default = {
	accordionItems: "_accordionItems_blrmp_123",
	accordionItem: "_accordionItem_blrmp_123",
	clickable: "_clickable_blrmp_137"
};
var WorkerNetAccordion_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkerNetAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkerNetAccordion_vue_vue_type_style_index_0_lang_module_default }]]);
var WorkerChartsAccordion_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkerChartsAccordion",
	props: { workerId: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const blankDataSet = (label, color, prefill = 0) => ({
			datasets: [{
				label,
				backgroundColor: color,
				data: prefill ? Array(Math.min(100, prefill)).fill(0) : []
			}],
			labels: Array(Math.min(100, prefill)).fill("")
		});
		const orchestrationStore = useOrchestrationStore();
		const chartRefJobs = ref(void 0);
		const chartRefCPU = ref(void 0);
		const chartRefMemory = ref(void 0);
		const optionsBase = () => ({
			responsive: true,
			maintainAspectRatio: true,
			scales: { y: {
				type: "linear",
				display: true,
				position: "left",
				min: 0,
				suggestedMax: 5
			} }
		});
		const optionsJobs = optionsBase();
		const optionsCPU = optionsBase();
		if (optionsCPU.scales?.y) optionsCPU.scales.y.suggestedMax = 100;
		const maxMemory = memAsGb(orchestrationStore.workers[props.workerId]?.totalMem) ?? 1;
		const optionsMemory = optionsBase();
		if (optionsMemory.scales?.y) optionsMemory.scales.y.suggestedMax = maxMemory;
		const dataJobs = ref(blankDataSet("Job Count", "rgb(255, 111, 92)", 100));
		const dataCPU = ref(blankDataSet("Processor Usage", "rgb(19, 205, 103)", 100));
		const dataMemory = ref(blankDataSet("Memory Usage", "rgb(244, 216, 174)", 100));
		orchestrationStore.$onAction(({ name, store }) => {
			if (name === "updateWorkerStatus") {
				const prefillCount = 100 - (store.workersHistory[props.workerId]?.length ?? 0);
				const newDataJobs = blankDataSet("Job Count", "rgb(255, 111, 92)", prefillCount);
				const newDataCPU = blankDataSet("Processor Usage", "rgb(19, 205, 103)", prefillCount);
				const newDataMemory = blankDataSet("Memory Usage", "rgb(244, 216, 174)", prefillCount);
				store.workersHistory[props.workerId]?.forEach((item) => {
					newDataJobs.datasets[0].data.push(item.data.runningJobsSummary.length);
					newDataJobs.labels?.push(new Date(item.timestamp).toLocaleTimeString());
					newDataCPU.datasets[0].data.push(averageWorkerLoadFromLoads(item.data.loadAvg));
					newDataCPU.labels = newDataJobs.labels;
					newDataMemory.datasets[0].data.push(maxMemory - memAsGb(item.data.freeMem));
					newDataMemory.labels = newDataJobs.labels;
				});
				dataJobs.value = newDataJobs;
				dataCPU.value = newDataCPU;
				dataMemory.value = newDataMemory;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WorkerAccordion_default, {
				icon: "list-checks",
				"icon-color": "text-dark",
				"initial-expanded": false
			}, {
				title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.chartsTitle")), 1)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.charts) }, [
					createVNode(unref(Chart), {
						ref_key: "chartRefJobs",
						ref: chartRefJobs,
						type: "line",
						data: dataJobs.value,
						options: unref(optionsJobs),
						class: normalizeClass(_ctx.$style.chart)
					}, null, 8, [
						"data",
						"options",
						"class"
					]),
					createVNode(unref(Chart), {
						ref_key: "chartRefCPU",
						ref: chartRefCPU,
						type: "line",
						data: dataCPU.value,
						options: unref(optionsCPU),
						class: normalizeClass(_ctx.$style.chart)
					}, null, 8, [
						"data",
						"options",
						"class"
					]),
					createVNode(unref(Chart), {
						ref_key: "chartRefMemory",
						ref: chartRefMemory,
						type: "line",
						data: dataMemory.value,
						options: unref(optionsMemory),
						class: normalizeClass(_ctx.$style.chart)
					}, null, 8, [
						"data",
						"options",
						"class"
					])
				], 2)]),
				_: 1
			});
		};
	}
});
var WorkerChartsAccordion_vue_vue_type_style_index_0_lang_module_default = {
	accordionItems: "_accordionItems_rnm37_123",
	accordionItem: "_accordionItem_rnm37_123",
	charts: "_charts_rnm37_136",
	chart: "_chart_rnm37_136"
};
var WorkerChartsAccordion_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkerChartsAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkerChartsAccordion_vue_vue_type_style_index_0_lang_module_default }]]);
var WorkerCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkerCard",
	props: { workerId: {} },
	setup(__props) {
		let interval;
		const orchestrationStore = useOrchestrationStore();
		const i18n = useI18n();
		const props = __props;
		const secondsSinceLastUpdateString = ref("0");
		const stale$1 = ref(false);
		const worker = computed(() => {
			return orchestrationStore.getWorkerStatus(props.workerId);
		});
		const sortedWorkerInterfaces = computed(() => sortByProperty("family", worker.value?.interfaces.slice() ?? []));
		function upTime(seconds) {
			const days = Math.floor(seconds / (3600 * 24));
			seconds -= days * 3600 * 24;
			const hrs = Math.floor(seconds / 3600);
			seconds -= hrs * 3600;
			const mnts = Math.floor(seconds / 60);
			seconds -= mnts * 60;
			return `${days}d ${hrs}h ${mnts}m ${Math.floor(seconds)}s`;
		}
		onMounted(() => {
			interval = setInterval(() => {
				const lastUpdated = orchestrationStore.getWorkerLastUpdated(props.workerId);
				if (!lastUpdated) return;
				const secondsSinceLastUpdate = Math.ceil((Date.now() - lastUpdated) / 1e3);
				stale$1.value = secondsSinceLastUpdate > 10;
				secondsSinceLastUpdateString.value = secondsSinceLastUpdate.toFixed(0);
			}, 500);
		});
		onBeforeUnmount(() => {
			clearInterval(interval);
		});
		return (_ctx, _cache) => {
			return worker.value ? (openBlock(), createBlock(unref(N8nCard_default), {
				key: 0,
				class: normalizeClass(_ctx.$style.cardLink)
			}, {
				header: withCtx(() => [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					bold: "",
					class: normalizeClass(stale$1.value ? [_ctx.$style.cardHeading, _ctx.$style.stale] : [_ctx.$style.cardHeading]),
					"data-test-id": "worker-card-name"
				}, {
					default: withCtx(() => [
						createTextVNode(" Name: " + toDisplayString(worker.value.senderId) + " (" + toDisplayString(worker.value.hostname) + ") ", 1),
						_cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
						createTextVNode(" Average Load: " + toDisplayString(unref(averageWorkerLoadFromLoadsAsString)(worker.value.loadAvg ?? [0])) + " | Free Memory: " + toDisplayString(unref(memAsGb)(worker.value.freeMem).toFixed(2)) + "GB / " + toDisplayString(unref(memAsGb)(worker.value.totalMem).toFixed(2)) + "GB " + toDisplayString(stale$1.value ? " (stale)" : ""), 1)
					]),
					_: 1
				}, 8, ["class"])]),
				append: withCtx(() => [createBaseVNode("div", {
					ref: "cardActions",
					class: normalizeClass(_ctx.$style.cardActions)
				}, null, 2)]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardDescription) }, [createVNode(unref(N8nText_default), {
					color: "text-light",
					size: "small",
					class: normalizeClass(_ctx.$style.container)
				}, {
					default: withCtx(() => [
						createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("workerList.item.lastUpdated")) + " " + toDisplayString(secondsSinceLastUpdateString.value) + "s ago | n8n-Version: " + toDisplayString(worker.value.version) + " | Architecture: " + toDisplayString(worker.value.arch) + " ( " + toDisplayString(worker.value.platform) + ") | Uptime: " + toDisplayString(upTime(worker.value.uptime)), 1),
						createVNode(WorkerJobAccordion_default, { items: worker.value.runningJobsSummary }, null, 8, ["items"]),
						createVNode(WorkerNetAccordion_default, { items: sortedWorkerInterfaces.value }, null, 8, ["items"]),
						createVNode(WorkerChartsAccordion_default, { "worker-id": worker.value.senderId }, null, 8, ["worker-id"])
					]),
					_: 1
				}, 8, ["class"])], 2)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true);
		};
	}
});
var WorkerCard_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1ejgw_123",
	cardLink: "_cardLink_1ejgw_127",
	cardHeading: "_cardHeading_1ejgw_137",
	stale: "_stale_1ejgw_143",
	cardDescription: "_cardDescription_1ejgw_147",
	cardActions: "_cardActions_1ejgw_154"
};
var WorkerCard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkerCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkerCard_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$1 = { key: 0 };
var _hoisted_2 = { key: 1 };
var _hoisted_3 = { key: 0 };
var _hoisted_4 = { key: 1 };
var WorkerList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkerList",
	props: { autoRefreshEnabled: {
		type: Boolean,
		default: true
	} },
	setup(__props) {
		const router = useRouter();
		const i18n = useI18n();
		const pushConnection = usePushConnection({ router });
		const documentTitle = useDocumentTitle();
		const telemetry = useTelemetry();
		const orchestrationManagerStore = useOrchestrationStore();
		const rootStore = useRootStore();
		const pushStore = usePushConnectionStore();
		const initialStatusReceived = computed(() => orchestrationManagerStore.initialStatusReceived);
		const workerIds = computed(() => Object.keys(orchestrationManagerStore.workers));
		const pageTitle = computed(() => i18n.baseText("workerList.pageTitle"));
		onMounted(() => {
			documentTitle.set(pageTitle.value);
			telemetry.track("User viewed worker view", { instance_id: rootStore.instanceId });
		});
		onBeforeMount(() => {
			pushConnection.initialize();
			pushStore.pushConnect();
			orchestrationManagerStore.startWorkerStatusPolling();
		});
		onBeforeUnmount(() => {
			orchestrationManagerStore.stopWorkerStatusPolling();
			pushStore.pushDisconnect();
			pushConnection.terminate();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createVNode(PushConnectionTracker_default, { class: "actions" }),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.workerListHeader) }, [createVNode(unref(N8nHeading_default), {
					tag: "h1",
					size: "2xlarge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(pageTitle.value), 1)]),
					_: 1
				})], 2),
				!initialStatusReceived.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nSpinner_default))])) : (openBlock(), createElementBlock("div", _hoisted_2, [workerIds.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(unref(i18n).baseText("workerList.empty")), 1)) : (openBlock(), createElementBlock("div", _hoisted_4, [(openBlock(true), createElementBlock(Fragment, null, renderList(workerIds.value, (workerId) => {
					return openBlock(), createElementBlock("div", {
						key: workerId,
						class: normalizeClass(_ctx.$style.card)
					}, [createVNode(WorkerCard_default, {
						"worker-id": workerId,
						"data-test-id": "worker-card"
					}, null, 8, ["worker-id"])], 2);
				}), 128))]))]))
			]);
		};
	}
});
var WorkerList_vue_vue_type_style_index_0_lang_module_default = {
	workerListHeader: "_workerListHeader_1k6ao_123",
	card: "_card_1k6ao_130",
	tableLoader: "_tableLoader_1k6ao_134"
};
var WorkerList_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkerList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkerList_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = ["href"];
var WorkerView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkerView",
	setup(__props) {
		const settingsStore = useSettingsStore();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const i18n = useI18n();
		const goToUpgrade = () => {
			pageRedirectionHelper.goToUpgrade("worker-view", "upgrade-worker-view");
		};
		return (_ctx, _cache) => {
			return unref(settingsStore).isQueueModeEnabled && unref(settingsStore).isWorkerViewAvailable ? (openBlock(), createBlock(WorkerList_default, {
				key: 0,
				"data-test-id": "worker-view-licensed"
			})) : (openBlock(), createBlock(unref(N8nActionBox_default), {
				key: 1,
				"data-test-id": "worker-view-unlicensed",
				class: normalizeClass(_ctx.$style.actionBox),
				description: unref(i18n).baseText("workerList.actionBox.description"),
				"button-text": unref(i18n).baseText("workerList.actionBox.buttonText"),
				"onClick:button": goToUpgrade
			}, {
				heading: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("workerList.actionBox.title")), 1)]),
				description: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.actionBox.description")) + " ", 1), createBaseVNode("a", {
					href: unref(i18n).baseText("workerList.docs.url"),
					target: "_blank"
				}, toDisplayString(unref(i18n).baseText("workerList.actionBox.description.link")), 9, _hoisted_1)]),
				_: 1
			}, 8, [
				"class",
				"description",
				"button-text"
			]));
		};
	}
});
var WorkerView_vue_vue_type_style_index_0_lang_module_default = { actionBox: "_actionBox_185wr_123" };
var WorkerView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkerView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkerView_vue_vue_type_style_index_0_lang_module_default }]]);
export { WorkerView_default as default };
