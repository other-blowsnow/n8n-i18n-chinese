import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, at as renderSlot, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, q as onBeforeMount, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Hi as N8nIcon_default, Li as N8nHeading_default, Mi as N8nActionBox_default, Rt as useRouter, Vi as N8nSpinner_default, ht as N8nCard_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { Nt as useTelemetry, cn as useDocumentTitle, fs as useSettingsStore, hr as useToast } from "./users.store-qBZsmf9-.js";
import "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import { r as useRootStore } from "./_baseOrderBy-3Uh8XZv3.js";
import "./banners.store-DqcHprvX.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import "./versions.store-YehYbHFz.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjPq0E7w.js";
import { t as useClipboard } from "./useClipboard-D9AU0bV9.js";
import "./executions.store-nTCUYDJR.js";
import "./assistant.store-CT263qz_.js";
import "./usePinnedData-B4FHq9FM.js";
import "./nodeIcon-p8UmtDus.js";
import "./canvas.utils-BvLPDYAs.js";
import "./nodeCreator.store-D-pWr7VG.js";
import "./useCanvasOperations-01naG_2v.js";
import "./folders.store-B29vIVJe.js";
import "./useRunWorkflow-BfL7BCzH.js";
import { t as usePushConnectionStore } from "./pushConnection.store-Di8YtKvV.js";
import { t as sortByProperty } from "./sortByProperty-lyxMqa8q.js";
import "./readyToRun.store-jCsh7z8e.js";
import { t as PushConnectionTracker_default } from "./PushConnectionTracker-CIoWgsm9.js";
import { n as WORKER_HISTORY_LENGTH, r as useOrchestrationStore, t as usePushConnection } from "./usePushConnection-_wjXN1gv.js";
import "./aiTemplatesStarterCollection.store-CRipTpbb.js";
import { n as Chart } from "./dist-icm1uagS.js";
function averageWorkerLoadFromLoads(loads) {
	return loads.reduce((prev, curr) => prev + curr, 0) / loads.length;
}
function averageWorkerLoadFromLoadsAsString(loads) {
	return averageWorkerLoadFromLoads(loads).toFixed(2);
}
function memAsGb(mem, decimalPlaces = 2) {
	return Number((mem / 1024 / 1024 / 1024).toFixed(decimalPlaces));
}
function memAsMb(mem, decimalPlaces = 2) {
	return Number((mem / 1024 / 1024).toFixed(decimalPlaces));
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
					icon: __props.icon,
					color: __props.iconColor,
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
	container: "_container_k0ymr_125",
	header: "_header_k0ymr_129",
	headerText: "_headerText_k0ymr_135",
	expanded: "_expanded_k0ymr_139",
	description: "_description_k0ymr_143"
};
var WorkerAccordion_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkerAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkerAccordion_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$4 = ["href"];
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
				title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.jobListTitle")) + " (" + toDisplayString(__props.items.length) + ") ", 1)]),
				content: withCtx(() => [props.items.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.accordionItems)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.items, (item) => {
					return openBlock(), createElementBlock("div", {
						key: item.executionId,
						class: normalizeClass(_ctx.$style.accordionItem)
					}, [
						createBaseVNode("a", { href: "/workflow/" + item.workflowId + "/executions/" + item.executionId }, " Execution " + toDisplayString(item.executionId) + " - " + toDisplayString(item.workflowName), 9, _hoisted_1$4),
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
	accordionItems: "_accordionItems_1mb6o_125",
	accordionItem: "_accordionItem_1mb6o_125",
	empty: "_empty_1mb6o_138"
};
var WorkerJobAccordion_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkerJobAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkerJobAccordion_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$3 = ["onClick"];
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
				title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.netListTitle")) + " (" + toDisplayString(__props.items.length) + ") ", 1)]),
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
					], 10, _hoisted_1$3);
				}), 128))], 2)) : createCommentVNode("", true)]),
				_: 1
			});
		};
	}
});
var WorkerNetAccordion_vue_vue_type_style_index_0_lang_module_default = {
	accordionItems: "_accordionItems_tq3dn_125",
	accordionItem: "_accordionItem_tq3dn_125",
	clickable: "_clickable_tq3dn_139"
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
		const chartRefMemoryUsage = ref(void 0);
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
		const optionsMemory = optionsBase();
		if (optionsMemory.scales?.y) optionsMemory.scales.y.suggestedMax = 100;
		const dataJobs = ref(blankDataSet("Job Count", "rgb(255, 111, 92)", 100));
		const dataCPU = ref(blankDataSet("Processor Usage", "rgb(19, 205, 103)", 100));
		const dataMemoryUsage = ref(blankDataSet("Memory Usage (%)", "rgb(244, 216, 174)", 100));
		orchestrationStore.$onAction(({ name, store }) => {
			if (name === "updateWorkerStatus") {
				const prefillCount = 100 - (store.workersHistory[props.workerId]?.length ?? 0);
				const newDataJobs = blankDataSet("Job Count", "rgb(255, 111, 92)", prefillCount);
				const newDataCPU = blankDataSet("Processor Usage", "rgb(19, 205, 103)", prefillCount);
				const newDataMemoryUsage = blankDataSet("Memory Usage (%)", "rgb(244, 216, 174)", prefillCount);
				store.workersHistory[props.workerId]?.forEach((item) => {
					newDataJobs.datasets[0].data.push(item.data.runningJobsSummary.length);
					newDataJobs.labels?.push(new Date(item.timestamp).toLocaleTimeString());
					newDataCPU.datasets[0].data.push(averageWorkerLoadFromLoads(item.data.loadAvg));
					newDataCPU.labels = newDataJobs.labels;
					newDataMemoryUsage.labels = newDataJobs.labels;
					const totalMem = item.data.isInContainer ? item.data.process.memory.constraint : item.data.host.memory.total;
					const usage = (totalMem - item.data.process.memory.available) / totalMem * 100;
					newDataMemoryUsage.datasets[0].data.push(usage);
				});
				dataJobs.value = newDataJobs;
				dataCPU.value = newDataCPU;
				dataMemoryUsage.value = newDataMemoryUsage;
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
						ref_key: "chartRefMemoryUsage",
						ref: chartRefMemoryUsage,
						type: "line",
						data: dataMemoryUsage.value,
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
	accordionItems: "_accordionItems_16rh4_125",
	accordionItem: "_accordionItem_16rh4_125",
	charts: "_charts_16rh4_138",
	chart: "_chart_16rh4_138"
};
var WorkerChartsAccordion_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkerChartsAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkerChartsAccordion_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$2 = { key: 0 };
var WorkerMemoryMonitorAccordion_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkerMemoryMonitorAccordion",
	props: { worker: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WorkerAccordion_default, {
				icon: "list-checks",
				"icon-color": "text-dark",
				"initial-expanded": false
			}, {
				title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.memoryMonitorTitle")), 1)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["accordion-content"]) }, [
					_cache[7] || (_cache[7] = createBaseVNode("strong", null, "Host/OS Memory:", -1)),
					createBaseVNode("table", null, [createBaseVNode("tbody", null, [createBaseVNode("tr", null, [_cache[0] || (_cache[0] = createBaseVNode("th", null, "Total (os.totalmem)", -1)), createBaseVNode("td", null, toDisplayString(unref(memAsGb)(props.worker.host.memory.total)) + "GB", 1)]), createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("th", null, "Free (os.freemem)", -1)), createBaseVNode("td", null, toDisplayString(unref(memAsGb)(props.worker.host.memory.free)) + "GB", 1)])])]),
					_cache[8] || (_cache[8] = createBaseVNode("br", null, null, -1)),
					_cache[9] || (_cache[9] = createBaseVNode("strong", null, "Process Memory:", -1)),
					_cache[10] || (_cache[10] = createBaseVNode("br", null, null, -1)),
					createBaseVNode("table", null, [createBaseVNode("tbody", null, [
						__props.worker.isInContainer ? (openBlock(), createElementBlock("tr", _hoisted_1$2, [_cache[2] || (_cache[2] = createBaseVNode("th", null, "Constraint: (process.constrainedMemory)", -1)), createBaseVNode("td", null, toDisplayString(unref(memAsMb)(props.worker.process.memory.constraint)) + "MB", 1)])) : createCommentVNode("", true),
						createBaseVNode("tr", null, [_cache[3] || (_cache[3] = createBaseVNode("th", null, "Available: (process.availableMemory)", -1)), createBaseVNode("td", null, toDisplayString(unref(memAsMb)(props.worker.process.memory.available)) + "MB", 1)]),
						createBaseVNode("tr", null, [_cache[4] || (_cache[4] = createBaseVNode("th", null, "RSS: (process.memoryUsage().rss)", -1)), createBaseVNode("td", null, toDisplayString(unref(memAsMb)(props.worker.process.memory.rss)) + "MB", 1)]),
						createBaseVNode("tr", null, [_cache[5] || (_cache[5] = createBaseVNode("th", null, "Heap total: (process.memoryUsage().heapTotal)", -1)), createBaseVNode("td", null, toDisplayString(unref(memAsMb)(props.worker.process.memory.heapTotal)) + "MB", 1)]),
						createBaseVNode("tr", null, [_cache[6] || (_cache[6] = createBaseVNode("th", null, "Heap used: (process.memoryUsage().heapUsed)", -1)), createBaseVNode("td", null, toDisplayString(unref(memAsMb)(props.worker.process.memory.heapUsed)) + "MB", 1)])
					])])
				], 2)]),
				_: 1
			});
		};
	}
});
var WorkerMemoryMonitorAccordion_vue_vue_type_style_index_0_lang_module_default = { "accordion-content": "_accordion-content_1lqir_135" };
var WorkerMemoryMonitorAccordion_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkerMemoryMonitorAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkerMemoryMonitorAccordion_vue_vue_type_style_index_0_lang_module_default }]]);
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
						createTextVNode(" Average Load: " + toDisplayString(unref(averageWorkerLoadFromLoadsAsString)(worker.value.loadAvg ?? [0])) + " | Free memory: " + toDisplayString(unref(memAsGb)(worker.value.process.memory.available)) + "GB / " + toDisplayString(unref(memAsGb)(worker.value.isInContainer ? worker.value.process.memory.constraint : worker.value.host.memory.total)) + "GB " + toDisplayString(stale$1.value ? " (stale)" : ""), 1)
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
						_cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
						createVNode(WorkerJobAccordion_default, { items: worker.value.runningJobsSummary }, null, 8, ["items"]),
						createVNode(WorkerNetAccordion_default, { items: sortedWorkerInterfaces.value }, null, 8, ["items"]),
						createVNode(WorkerChartsAccordion_default, { "worker-id": worker.value.senderId }, null, 8, ["worker-id"]),
						createVNode(WorkerMemoryMonitorAccordion_default, { worker: worker.value }, null, 8, ["worker"])
					]),
					_: 1
				}, 8, ["class"])], 2)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true);
		};
	}
});
var WorkerCard_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_znmwg_125",
	cardLink: "_cardLink_znmwg_129",
	cardHeading: "_cardHeading_znmwg_139",
	stale: "_stale_znmwg_145",
	cardDescription: "_cardDescription_znmwg_149",
	cardActions: "_cardActions_znmwg_156"
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
	workerListHeader: "_workerListHeader_ifjfd_125",
	card: "_card_ifjfd_132",
	tableLoader: "_tableLoader_ifjfd_136"
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
var WorkerView_vue_vue_type_style_index_0_lang_module_default = { actionBox: "_actionBox_t24gt_125" };
var WorkerView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkerView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkerView_vue_vue_type_style_index_0_lang_module_default }]]);
export { WorkerView_default as default };
