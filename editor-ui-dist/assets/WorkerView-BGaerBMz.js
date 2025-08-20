import { d as defineComponent, r as ref, h as createElementBlock, g as openBlock, n as normalizeClass, j as createBaseVNode, f as createCommentVNode, i as createVNode, N as N8nIcon, p as N8nText, w as withCtx, Q as renderSlot, _ as _export_sfc, e as createBlock, F as Fragment, A as renderList, t as toDisplayString, k as createTextVNode, l as unref, c as useI18n, cg as useClipboard, a as useToast, x as computed, bk as sortByProperty, o as onMounted, P as onBeforeUnmount, s as N8nCard, m as N8nHeading, b as useRouter, ay as useDocumentTitle, at as useRootStore, a8 as usePushConnectionStore, ap as useTelemetry, b3 as onBeforeMount, dJ as _sfc_main$8, v as useSettingsStore, aB as usePageRedirectionHelper, dY as N8nActionBox } from "./index-BsWH3eYA.js";
import { _ as _sfc_main$7 } from "./PushConnectionTracker.vue_vue_type_script_setup_true_lang-BBhQwtrA.js";
import { a as useOrchestrationStore, W as WORKER_HISTORY_LENGTH, u as usePushConnection } from "./usePushConnection-BHljF_sm.js";
import { C as Chart } from "./index-D1iGXxLc.js";
import "./global-link-actions-BfMXCg-D.js";
import "./readyToRunWorkflows.store-SI6MsPeC.js";
function averageWorkerLoadFromLoads(loads) {
  return loads.reduce((prev, curr) => prev + curr, 0) / loads.length;
}
function averageWorkerLoadFromLoadsAsString(loads) {
  return averageWorkerLoadFromLoads(loads).toFixed(2);
}
function memAsGb(mem) {
  return mem / 1024 / 1024 / 1024;
}
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "WorkerAccordion.ee",
  props: {
    icon: { default: "list-checks" },
    iconColor: { default: "text-dark" },
    initialExpanded: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const expanded2 = ref(props.initialExpanded);
    function toggle() {
      expanded2.value = !expanded2.value;
    }
    return (_ctx, _cache) => {
      const _component_n8n_icon = N8nIcon;
      const _component_n8n_text = N8nText;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["accordion", _ctx.$style.container])
      }, [
        createBaseVNode("div", {
          class: normalizeClass({ [_ctx.$style.header]: true, [_ctx.$style.expanded]: expanded2.value }),
          onClick: toggle
        }, [
          createVNode(_component_n8n_icon, {
            icon: _ctx.icon,
            color: _ctx.iconColor,
            size: "small",
            class: "mr-2xs"
          }, null, 8, ["icon", "color"]),
          createVNode(_component_n8n_text, {
            class: normalizeClass(_ctx.$style.headerText),
            color: "text-base",
            size: "small",
            align: "left",
            bold: ""
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "title")
            ]),
            _: 3
          }, 8, ["class"]),
          createVNode(_component_n8n_icon, {
            icon: expanded2.value ? "chevron-up" : "chevron-down",
            bold: ""
          }, null, 8, ["icon"])
        ], 2),
        expanded2.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass({ [_ctx.$style.description]: true, [_ctx.$style.collapsed]: !expanded2.value })
        }, [
          renderSlot(_ctx.$slots, "content")
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const container$1 = "_container_b0suh_123";
const header = "_header_b0suh_127";
const headerText = "_headerText_b0suh_133";
const expanded = "_expanded_b0suh_137";
const description = "_description_b0suh_141";
const style0$6 = {
  container: container$1,
  header,
  headerText,
  expanded,
  description
};
const cssModules$6 = {
  "$style": style0$6
};
const WorkerAccordion = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__cssModules", cssModules$6]]);
const _hoisted_1$3 = ["href"];
const _hoisted_2$1 = ["href"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "WorkerJobAccordion.ee",
  props: {
    items: {}
  },
  setup(__props) {
    const props = __props;
    const i18n = useI18n();
    function runningSince(started) {
      let seconds = Math.floor(((/* @__PURE__ */ new Date()).getTime() - started.getTime()) / 1e3);
      const hrs = Math.floor(seconds / 3600);
      seconds -= hrs * 3600;
      const mnts = Math.floor(seconds / 60);
      seconds -= mnts * 60;
      return `${hrs}h ${mnts}m ${Math.floor(seconds)}s`;
    }
    return (_ctx, _cache) => {
      const _component_n8n_text = N8nText;
      return openBlock(), createBlock(WorkerAccordion, {
        icon: "list-checks",
        "icon-color": "text-dark",
        "initial-expanded": true
      }, {
        title: withCtx(() => [
          createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.jobListTitle")) + " (" + toDisplayString(_ctx.items.length) + ") ", 1)
        ]),
        content: withCtx(() => [
          props.items.length > 0 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.accordionItems)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.items, (item) => {
              return openBlock(), createElementBlock("div", {
                key: item.executionId,
                class: normalizeClass(_ctx.$style.accordionItem)
              }, [
                createBaseVNode("a", {
                  href: "/workflow/" + item.workflowId + "/executions/" + item.executionId
                }, " Execution " + toDisplayString(item.executionId) + " - " + toDisplayString(item.workflowName), 9, _hoisted_1$3),
                createVNode(_component_n8n_text, {
                  color: "text-base",
                  size: "small",
                  align: "left"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" | Started at: " + toDisplayString(new Date(item.startedAt)?.toLocaleTimeString()) + " | Running for " + toDisplayString(runningSince(new Date(item.startedAt))) + " " + toDisplayString(item.retryOf ? `| Retry of: ${item.retryOf}` : "") + " | ", 1)
                  ]),
                  _: 2
                }, 1024),
                createBaseVNode("a", {
                  target: "_blank",
                  href: "/workflow/" + item.workflowId
                }, " (Open workflow)", 8, _hoisted_2$1)
              ], 2);
            }), 128))
          ], 2)) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(_ctx.$style.accordionItems)
          }, [
            createBaseVNode("span", {
              class: normalizeClass(_ctx.$style.empty)
            }, toDisplayString(unref(i18n).baseText("workerList.item.jobList.empty")), 3)
          ], 2))
        ]),
        _: 1
      });
    };
  }
});
const accordionItems$2 = "_accordionItems_15crm_123";
const accordionItem$2 = "_accordionItem_15crm_123";
const empty = "_empty_15crm_136";
const style0$5 = {
  accordionItems: accordionItems$2,
  accordionItem: accordionItem$2,
  empty
};
const cssModules$5 = {
  "$style": style0$5
};
const WorkerJobAccordion = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__cssModules", cssModules$5]]);
const _hoisted_1$2 = ["onClick"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "WorkerNetAccordion.ee",
  props: {
    items: {}
  },
  setup(__props) {
    const props = __props;
    const i18n = useI18n();
    const clipboard = useClipboard();
    const { showMessage } = useToast();
    function onCopyToClipboard(content) {
      try {
        void clipboard.copy(content);
        showMessage({
          title: i18n.baseText("workerList.item.copyAddressToClipboard"),
          type: "success"
        });
      } catch {
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(WorkerAccordion, {
        icon: "list-checks",
        "icon-color": "text-dark",
        "initial-expanded": false
      }, {
        title: withCtx(() => [
          createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.netListTitle")) + " (" + toDisplayString(_ctx.items.length) + ") ", 1)
        ]),
        content: withCtx(() => [
          props.items.length > 0 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.accordionItems)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.items, (item) => {
              return openBlock(), createElementBlock("div", {
                key: item.address,
                class: normalizeClass(_ctx.$style.accordionItem),
                onClick: ($event) => onCopyToClipboard(item.address)
              }, [
                createTextVNode(toDisplayString(item.family) + ": ", 1),
                createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.clickable)
                }, toDisplayString(item.address), 3),
                createTextVNode(" " + toDisplayString(item.internal ? "(internal)" : ""), 1)
              ], 10, _hoisted_1$2);
            }), 128))
          ], 2)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const accordionItems$1 = "_accordionItems_1vfy6_123";
const accordionItem$1 = "_accordionItem_1vfy6_123";
const clickable = "_clickable_1vfy6_137";
const style0$4 = {
  accordionItems: accordionItems$1,
  accordionItem: accordionItem$1,
  clickable
};
const cssModules$4 = {
  "$style": style0$4
};
const WorkerNetAccordion = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__cssModules", cssModules$4]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "WorkerChartsAccordion.ee",
  props: {
    workerId: {}
  },
  setup(__props) {
    const props = __props;
    const i18n = useI18n();
    const blankDataSet = (label, color, prefill = 0) => ({
      datasets: [
        {
          label,
          backgroundColor: color,
          data: prefill ? Array(Math.min(WORKER_HISTORY_LENGTH, prefill)).fill(0) : []
        }
      ],
      labels: Array(Math.min(WORKER_HISTORY_LENGTH, prefill)).fill("")
    });
    const orchestrationStore = useOrchestrationStore();
    const chartRefJobs = ref(void 0);
    const chartRefCPU = ref(void 0);
    const chartRefMemory = ref(void 0);
    const optionsBase = () => ({
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          type: "linear",
          display: true,
          position: "left",
          min: 0,
          suggestedMax: 5
        }
      }
      // uncomment to disable animation
      // animation: {
      // 	duration: 0,
      // },
    });
    const optionsJobs = optionsBase();
    const optionsCPU = optionsBase();
    if (optionsCPU.scales?.y) optionsCPU.scales.y.suggestedMax = 100;
    const maxMemory = memAsGb(orchestrationStore.workers[props.workerId]?.totalMem) ?? 1;
    const optionsMemory = optionsBase();
    if (optionsMemory.scales?.y) optionsMemory.scales.y.suggestedMax = maxMemory;
    const dataJobs = ref(
      blankDataSet("Job Count", "rgb(255, 111, 92)", WORKER_HISTORY_LENGTH)
    );
    const dataCPU = ref(
      blankDataSet("Processor Usage", "rgb(19, 205, 103)", WORKER_HISTORY_LENGTH)
    );
    const dataMemory = ref(
      blankDataSet("Memory Usage", "rgb(244, 216, 174)", WORKER_HISTORY_LENGTH)
    );
    orchestrationStore.$onAction(({ name, store }) => {
      if (name === "updateWorkerStatus") {
        const prefillCount = WORKER_HISTORY_LENGTH - (store.workersHistory[props.workerId]?.length ?? 0);
        const newDataJobs = blankDataSet("Job Count", "rgb(255, 111, 92)", prefillCount);
        const newDataCPU = blankDataSet(
          "Processor Usage",
          "rgb(19, 205, 103)",
          prefillCount
        );
        const newDataMemory = blankDataSet(
          "Memory Usage",
          "rgb(244, 216, 174)",
          prefillCount
        );
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
      return openBlock(), createBlock(WorkerAccordion, {
        icon: "list-checks",
        "icon-color": "text-dark",
        "initial-expanded": false
      }, {
        title: withCtx(() => [
          createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.chartsTitle")), 1)
        ]),
        content: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.charts)
          }, [
            createVNode(unref(Chart), {
              ref_key: "chartRefJobs",
              ref: chartRefJobs,
              type: "line",
              data: dataJobs.value,
              options: unref(optionsJobs),
              class: normalizeClass(_ctx.$style.chart)
            }, null, 8, ["data", "options", "class"]),
            createVNode(unref(Chart), {
              ref_key: "chartRefCPU",
              ref: chartRefCPU,
              type: "line",
              data: dataCPU.value,
              options: unref(optionsCPU),
              class: normalizeClass(_ctx.$style.chart)
            }, null, 8, ["data", "options", "class"]),
            createVNode(unref(Chart), {
              ref_key: "chartRefMemory",
              ref: chartRefMemory,
              type: "line",
              data: dataMemory.value,
              options: unref(optionsMemory),
              class: normalizeClass(_ctx.$style.chart)
            }, null, 8, ["data", "options", "class"])
          ], 2)
        ]),
        _: 1
      });
    };
  }
});
const accordionItems = "_accordionItems_1ud87_123";
const accordionItem = "_accordionItem_1ud87_123";
const charts = "_charts_1ud87_136";
const chart = "_chart_1ud87_136";
const style0$3 = {
  accordionItems,
  accordionItem,
  charts,
  chart
};
const cssModules$3 = {
  "$style": style0$3
};
const WorkerChartsAccordion = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$3]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "WorkerCard.ee",
  props: {
    workerId: {}
  },
  setup(__props) {
    let interval;
    const orchestrationStore = useOrchestrationStore();
    const i18n = useI18n();
    const props = __props;
    const secondsSinceLastUpdateString = ref("0");
    const stale2 = ref(false);
    const worker = computed(() => {
      return orchestrationStore.getWorkerStatus(props.workerId);
    });
    const sortedWorkerInterfaces = computed(
      () => sortByProperty("family", worker.value?.interfaces.slice() ?? [])
    );
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
        if (!lastUpdated) {
          return;
        }
        const secondsSinceLastUpdate = Math.ceil((Date.now() - lastUpdated) / 1e3);
        stale2.value = secondsSinceLastUpdate > 10;
        secondsSinceLastUpdateString.value = secondsSinceLastUpdate.toFixed(0);
      }, 500);
    });
    onBeforeUnmount(() => {
      clearInterval(interval);
    });
    return (_ctx, _cache) => {
      const _component_n8n_heading = N8nHeading;
      const _component_n8n_text = N8nText;
      const _component_n8n_card = N8nCard;
      return worker.value ? (openBlock(), createBlock(_component_n8n_card, {
        key: 0,
        class: normalizeClass(_ctx.$style.cardLink)
      }, {
        header: withCtx(() => [
          createVNode(_component_n8n_heading, {
            tag: "h2",
            bold: "",
            class: normalizeClass(stale2.value ? [_ctx.$style.cardHeading, _ctx.$style.stale] : [_ctx.$style.cardHeading]),
            "data-test-id": "worker-card-name"
          }, {
            default: withCtx(() => [
              createTextVNode(" Name: " + toDisplayString(worker.value.senderId) + " (" + toDisplayString(worker.value.hostname) + ") ", 1),
              _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
              createTextVNode(" Average Load: " + toDisplayString(unref(averageWorkerLoadFromLoadsAsString)(worker.value.loadAvg ?? [0])) + " | Free Memory: " + toDisplayString(unref(memAsGb)(worker.value.freeMem).toFixed(2)) + "GB / " + toDisplayString(unref(memAsGb)(worker.value.totalMem).toFixed(2)) + "GB " + toDisplayString(stale2.value ? " (stale)" : ""), 1)
            ]),
            _: 1
          }, 8, ["class"])
        ]),
        append: withCtx(() => [
          createBaseVNode("div", {
            ref: "cardActions",
            class: normalizeClass(_ctx.$style.cardActions)
          }, null, 2)
        ]),
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.cardDescription)
          }, [
            createVNode(_component_n8n_text, {
              color: "text-light",
              size: "small",
              class: normalizeClass(_ctx.$style.container)
            }, {
              default: withCtx(() => [
                createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("workerList.item.lastUpdated")) + " " + toDisplayString(secondsSinceLastUpdateString.value) + "s ago | n8n-Version: " + toDisplayString(worker.value.version) + " | Architecture: " + toDisplayString(worker.value.arch) + " ( " + toDisplayString(worker.value.platform) + ") | Uptime: " + toDisplayString(upTime(worker.value.uptime)), 1),
                createVNode(WorkerJobAccordion, {
                  items: worker.value.runningJobsSummary
                }, null, 8, ["items"]),
                createVNode(WorkerNetAccordion, { items: sortedWorkerInterfaces.value }, null, 8, ["items"]),
                createVNode(WorkerChartsAccordion, {
                  "worker-id": worker.value.senderId
                }, null, 8, ["worker-id"])
              ]),
              _: 1
            }, 8, ["class"])
          ], 2)
        ]),
        _: 1
      }, 8, ["class"])) : createCommentVNode("", true);
    };
  }
});
const container = "_container_14iv3_123";
const cardLink = "_cardLink_14iv3_127";
const cardHeading = "_cardHeading_14iv3_137";
const stale = "_stale_14iv3_143";
const cardDescription = "_cardDescription_14iv3_147";
const cardActions = "_cardActions_14iv3_154";
const style0$2 = {
  container,
  cardLink,
  cardHeading,
  stale,
  cardDescription,
  cardActions
};
const cssModules$2 = {
  "$style": style0$2
};
const WorkerCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _hoisted_1$1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WorkerList.ee",
  props: {
    autoRefreshEnabled: { type: Boolean, default: true }
  },
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
      telemetry.track("User viewed worker view", {
        instance_id: rootStore.instanceId
      });
    });
    onBeforeMount(() => {
      if (window.Cypress !== void 0) {
        return;
      }
      pushConnection.initialize();
      pushStore.pushConnect();
      orchestrationManagerStore.startWorkerStatusPolling();
    });
    onBeforeUnmount(() => {
      if (window.Cypress !== void 0) {
        return;
      }
      orchestrationManagerStore.stopWorkerStatusPolling();
      pushStore.pushDisconnect();
      pushConnection.terminate();
    });
    return (_ctx, _cache) => {
      const _component_PushConnectionTracker = _sfc_main$7;
      const _component_n8n_heading = N8nHeading;
      const _component_n8n_spinner = _sfc_main$8;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_PushConnectionTracker, { class: "actions" }),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.workerListHeader)
        }, [
          createVNode(_component_n8n_heading, {
            tag: "h1",
            size: "2xlarge"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(pageTitle.value), 1)
            ]),
            _: 1
          })
        ], 2),
        !initialStatusReceived.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
          createVNode(_component_n8n_spinner)
        ])) : (openBlock(), createElementBlock("div", _hoisted_2, [
          workerIds.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(unref(i18n).baseText("workerList.empty")), 1)) : (openBlock(), createElementBlock("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(workerIds.value, (workerId) => {
              return openBlock(), createElementBlock("div", {
                key: workerId,
                class: normalizeClass(_ctx.$style.card)
              }, [
                createVNode(WorkerCard, {
                  "worker-id": workerId,
                  "data-test-id": "worker-card"
                }, null, 8, ["worker-id"])
              ], 2);
            }), 128))
          ]))
        ]))
      ]);
    };
  }
});
const workerListHeader = "_workerListHeader_1wln3_123";
const card = "_card_1wln3_130";
const tableLoader = "_tableLoader_1wln3_134";
const style0$1 = {
  workerListHeader,
  card,
  tableLoader
};
const cssModules$1 = {
  "$style": style0$1
};
const WorkerList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _hoisted_1 = ["href"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WorkerView",
  setup(__props) {
    const settingsStore = useSettingsStore();
    const pageRedirectionHelper = usePageRedirectionHelper();
    const i18n = useI18n();
    const goToUpgrade = () => {
      void pageRedirectionHelper.goToUpgrade("worker-view", "upgrade-worker-view");
    };
    return (_ctx, _cache) => {
      const _component_n8n_action_box = N8nActionBox;
      return unref(settingsStore).isQueueModeEnabled && unref(settingsStore).isWorkerViewAvailable ? (openBlock(), createBlock(WorkerList, {
        key: 0,
        "data-test-id": "worker-view-licensed"
      })) : (openBlock(), createBlock(_component_n8n_action_box, {
        key: 1,
        "data-test-id": "worker-view-unlicensed",
        class: normalizeClass(_ctx.$style.actionBox),
        description: unref(i18n).baseText("workerList.actionBox.description"),
        "button-text": unref(i18n).baseText("workerList.actionBox.buttonText"),
        "onClick:button": goToUpgrade
      }, {
        heading: withCtx(() => [
          createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("workerList.actionBox.title")), 1)
        ]),
        description: withCtx(() => [
          createTextVNode(toDisplayString(unref(i18n).baseText("workerList.actionBox.description")) + " ", 1),
          createBaseVNode("a", {
            href: unref(i18n).baseText("workerList.docs.url"),
            target: "_blank"
          }, toDisplayString(unref(i18n).baseText("workerList.actionBox.description.link")), 9, _hoisted_1)
        ]),
        _: 1
      }, 8, ["class", "description", "button-text"]));
    };
  }
});
const actionBox = "_actionBox_12ttz_123";
const style0 = {
  actionBox
};
const cssModules = {
  "$style": style0
};
const WorkerView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  WorkerView as default
};
