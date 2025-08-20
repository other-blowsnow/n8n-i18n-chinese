const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/InsightsPaywall-Diny1wN-.js","assets/index-BsWH3eYA.js","assets/index-BFyMw9-0.css","assets/InsightsPaywall-CE5W3W4m.css","assets/InsightsChartTotal-DSqw4iBr.js","assets/chartjs.utils-Cpi8kgvL.js","assets/InsightsSummary-gyLfjHkG.js","assets/InsightsSummary-DTFIhBF3.css","assets/index-D1iGXxLc.js","assets/InsightsChartFailed-CBGB3lNx.js","assets/InsightsChartFailureRate-DONVapw8.js","assets/InsightsChartTimeSaved-BCzAFJ2G.js","assets/InsightsChartAverageRuntime-Bwm34qkj.js","assets/InsightsTableWorkflows-DjQARiDy.js","assets/InsightsTableWorkflows-BTHSCwX8.css"])))=>i.map(i=>d[i]);
import { d as defineComponent, eg as useModel, g6 as useInsightsStore, r as ref, gD as UNLICENSED_TIME_RANGE, gf as TIME_RANGE_LABELS, e as createBlock, g as openBlock, w as withCtx, h as createElementBlock, F as Fragment, A as renderList, l as unref, e9 as _sfc_main$3, k as createTextVNode, f as createCommentVNode, t as toDisplayString, j as createBaseVNode, e8 as N8nSelect, x as computed, c as useI18n, i as createVNode, p as N8nText, q as N8nButton, gE as ElDialog, aB as usePageRedirectionHelper, _ as _export_sfc, aa as useRoute, gF as INSIGHT_TYPES, du as defineAsyncComponent, af as watch, o as onMounted, ay as useDocumentTitle, m as N8nHeading, n as normalizeClass, dJ as _sfc_main$4, ca as resolveDynamicComponent, aW as __vitePreload, ap as useTelemetry, gG as TELEMETRY_TIME_RANGE } from "./index-BsWH3eYA.js";
import { I as InsightsSummary } from "./InsightsSummary-gyLfjHkG.js";
const _hoisted_1$2 = {
  key: 0,
  width: "16",
  height: "17",
  viewBox: "0 0 16 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: { "margin-left": "auto" }
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "InsightsDateRangeSelect",
  props: {
    "modelValue": {
      required: true
    },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const insightsStore = useInsightsStore();
    const timeOptions = ref(
      insightsStore.dateRanges.map((option) => {
        return {
          key: option.key,
          label: TIME_RANGE_LABELS[option.key],
          value: option.licensed ? option.key : UNLICENSED_TIME_RANGE,
          licensed: option.licensed
        };
      })
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(N8nSelect), {
        modelValue: model.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
        size: "small"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(timeOptions.value, (item) => {
            return openBlock(), createBlock(unref(_sfc_main$3), {
              key: item.key,
              value: item.value,
              label: item.label
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(item.label) + " ", 1),
                !item.licensed ? (openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[1] || (_cache[1] = [
                  createBaseVNode("path", {
                    d: "M12.6667 7.83337H3.33333C2.59695 7.83337 2 8.43033 2 9.16671V13.8334C2 14.5698 2.59695 15.1667 3.33333 15.1667H12.6667C13.403 15.1667 14 14.5698 14 13.8334V9.16671C14 8.43033 13.403 7.83337 12.6667 7.83337Z",
                    stroke: "#9A9A9A",
                    "stroke-width": "1.33333",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, null, -1),
                  createBaseVNode("path", {
                    d: "M4.66681 7.83337V5.16671C4.66681 4.28265 5.018 3.43481 5.64312 2.80968C6.26824 2.18456 7.11609 1.83337 8.00014 1.83337C8.8842 1.83337 9.73204 2.18456 10.3572 2.80968C10.9823 3.43481 11.3335 4.28265 11.3335 5.16671V7.83337",
                    stroke: "#9A9A9A",
                    "stroke-width": "1.33333",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, null, -1)
                ]))) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1032, ["value", "label"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const _hoisted_1$1 = { class: "perks-list" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InsightsUpgradeModal",
  props: {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const i18n = useI18n();
    function goToUpgrade() {
      model.value = false;
      void usePageRedirectionHelper().goToUpgrade("insights", "upgrade-insights");
    }
    const perks = computed(
      () => [...Array(3).keys()].map(
        (index) => i18n.baseText(`insights.upgradeModal.perks.${index}`)
      )
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElDialog), {
        modelValue: model.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.value = $event),
        title: unref(i18n).baseText("insights.upgradeModal.title"),
        width: "500"
      }, {
        footer: withCtx(() => [
          createBaseVNode("div", null, [
            createVNode(unref(N8nButton), {
              type: "secondary",
              onClick: _cache[0] || (_cache[0] = ($event) => model.value = false)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("insights.upgradeModal.button.dismiss")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nButton), {
              type: "primary",
              onClick: goToUpgrade
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", null, [
            createVNode(unref(N8nText), {
              tag: "p",
              class: "mb-s"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("insights.upgradeModal.content")), 1)
              ]),
              _: 1
            }),
            createBaseVNode("ul", _hoisted_1$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(perks.value, (perk) => {
                return openBlock(), createBlock(unref(N8nText), {
                  key: perk,
                  color: "text-dark",
                  tag: "li"
                }, {
                  default: withCtx(() => [
                    _cache[2] || (_cache[2] = createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 16 16",
                      width: "16px",
                      height: "16px"
                    }, [
                      createBaseVNode("path", {
                        d: "M 16 8 C 16 12.418 12.418 16 8 16 C 3.582 16 0 12.418 0 8 C 0 3.582 3.582 0 8 0 C 12.418 0 16 3.582 16 8 Z M 3.97 9.03 L 5.97 11.03 L 6.5 11.561 L 7.03 11.03 L 12.53 5.53 L 11.47 4.47 L 6.5 9.439 L 5.03 7.97 L 3.97 9.03 Z",
                        fill: "currentColor"
                      })
                    ], -1)),
                    createTextVNode(" " + toDisplayString(perk), 1)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
const InsightsUpgradeModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f995e7d0"]]);
const _hoisted_1 = { class: "mt-s" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InsightsDashboard",
  props: {
    insightType: {}
  },
  setup(__props) {
    const InsightsPaywall = defineAsyncComponent(
      async () => await __vitePreload(() => import("./InsightsPaywall-Diny1wN-.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0)
    );
    const InsightsChartTotal = defineAsyncComponent(
      async () => await __vitePreload(() => import("./InsightsChartTotal-DSqw4iBr.js"), true ? __vite__mapDeps([4,1,2,5,6,7,8]) : void 0)
    );
    const InsightsChartFailed = defineAsyncComponent(
      async () => await __vitePreload(() => import("./InsightsChartFailed-CBGB3lNx.js"), true ? __vite__mapDeps([9,1,2,5,6,7,8]) : void 0)
    );
    const InsightsChartFailureRate = defineAsyncComponent(
      async () => await __vitePreload(() => import("./InsightsChartFailureRate-DONVapw8.js"), true ? __vite__mapDeps([10,1,2,5,6,7,8]) : void 0)
    );
    const InsightsChartTimeSaved = defineAsyncComponent(
      async () => await __vitePreload(() => import("./InsightsChartTimeSaved-BCzAFJ2G.js"), true ? __vite__mapDeps([11,1,2,5,6,7,8]) : void 0)
    );
    const InsightsChartAverageRuntime = defineAsyncComponent(
      async () => await __vitePreload(() => import("./InsightsChartAverageRuntime-Bwm34qkj.js"), true ? __vite__mapDeps([12,1,2,5,6,7,8]) : void 0)
    );
    const InsightsTableWorkflows = defineAsyncComponent(
      async () => await __vitePreload(() => import("./InsightsTableWorkflows-DjQARiDy.js"), true ? __vite__mapDeps([13,1,2,6,7,14]) : void 0)
    );
    const props = __props;
    const route = useRoute();
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const insightsStore = useInsightsStore();
    const isTimeSavedRoute = computed(() => route.params.insightType === INSIGHT_TYPES.TIME_SAVED);
    const chartComponents = computed(() => ({
      total: InsightsChartTotal,
      failed: InsightsChartFailed,
      failureRate: InsightsChartFailureRate,
      timeSaved: InsightsChartTimeSaved,
      averageRunTime: InsightsChartAverageRuntime
    }));
    const transformFilter = ({ id, desc }) => {
      const key = id;
      const order = desc ? "desc" : "asc";
      return `${key}:${order}`;
    };
    const fetchPaginatedTableData = ({
      page = 0,
      itemsPerPage = 25,
      sortBy,
      dateRange = selectedDateRange.value
    }) => {
      const skip = page * itemsPerPage;
      const take = itemsPerPage;
      const sortKey = sortBy.length ? transformFilter(sortBy[0]) : void 0;
      void insightsStore.table.execute(0, {
        skip,
        take,
        sortBy: sortKey,
        dateRange
      });
    };
    const sortTableBy = ref([{ id: props.insightType, desc: true }]);
    const upgradeModalVisible = ref(false);
    const selectedDateRange = ref("week");
    const granularity = computed(
      () => insightsStore.dateRanges.find((item) => item.key === selectedDateRange.value)?.granularity ?? "day"
    );
    function handleTimeChange(value) {
      if (value === UNLICENSED_TIME_RANGE) {
        upgradeModalVisible.value = true;
        return;
      }
      selectedDateRange.value = value;
      telemetry.track("User updated insights time range", { range: TELEMETRY_TIME_RANGE[value] });
    }
    watch(
      () => [props.insightType, selectedDateRange.value],
      () => {
        sortTableBy.value = [{ id: props.insightType, desc: true }];
        if (insightsStore.isSummaryEnabled) {
          void insightsStore.summary.execute(0, { dateRange: selectedDateRange.value });
        }
        void insightsStore.charts.execute(0, { dateRange: selectedDateRange.value });
        if (insightsStore.isDashboardEnabled) {
          fetchPaginatedTableData({ sortBy: sortTableBy.value, dateRange: selectedDateRange.value });
        }
      },
      {
        immediate: true
      }
    );
    onMounted(() => {
      useDocumentTitle().set(i18n.baseText("insights.heading"));
    });
    return (_ctx, _cache) => {
      const _component_N8nHeading = N8nHeading;
      const _component_N8nSpinner = _sfc_main$4;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.insightsView)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.insightsContainer)
        }, [
          createVNode(_component_N8nHeading, {
            bold: "",
            tag: "h2",
            size: "xlarge"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.title")), 1)
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_1, [
            createVNode(_sfc_main$2, {
              "model-value": selectedDateRange.value,
              style: { "width": "173px" },
              "data-test-id": "range-select",
              "onUpdate:modelValue": handleTimeChange
            }, null, 8, ["model-value"]),
            createVNode(InsightsUpgradeModal, {
              modelValue: upgradeModalVisible.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => upgradeModalVisible.value = $event)
            }, null, 8, ["modelValue"])
          ]),
          unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(InsightsSummary, {
            key: 0,
            summary: unref(insightsStore).summary.state,
            loading: unref(insightsStore).summary.isLoading,
            "time-range": selectedDateRange.value,
            class: normalizeClass(_ctx.$style.insightsBanner)
          }, null, 8, ["summary", "loading", "time-range", "class"])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.insightsContent)
          }, [
            unref(insightsStore).isDashboardEnabled || isTimeSavedRoute.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.$style.insightsContentWrapper)
            }, [
              createBaseVNode("div", {
                class: normalizeClass([
                  _ctx.$style.dataLoader,
                  {
                    [_ctx.$style.isDataLoading]: unref(insightsStore).charts.isLoading || unref(insightsStore).table.isLoading
                  }
                ])
              }, [
                createVNode(_component_N8nSpinner),
                createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("insights.chart.loading")), 1)
              ], 2),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.insightsChartWrapper)
              }, [
                (openBlock(), createBlock(resolveDynamicComponent(chartComponents.value[props.insightType]), {
                  type: props.insightType,
                  data: unref(insightsStore).charts.state,
                  granularity: granularity.value
                }, null, 8, ["type", "data", "granularity"]))
              ], 2),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.insightsTableWrapper)
              }, [
                createVNode(unref(InsightsTableWorkflows), {
                  "sort-by": sortTableBy.value,
                  "onUpdate:sortBy": _cache[1] || (_cache[1] = ($event) => sortTableBy.value = $event),
                  data: unref(insightsStore).table.state,
                  loading: unref(insightsStore).table.isLoading,
                  "is-dashboard-enabled": unref(insightsStore).isDashboardEnabled,
                  "onUpdate:options": fetchPaginatedTableData
                }, null, 8, ["sort-by", "data", "loading", "is-dashboard-enabled"])
              ], 2)
            ], 2)) : (openBlock(), createBlock(unref(InsightsPaywall), { key: 1 }))
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
const insightsView = "_insightsView_8g4zl_123";
const insightsContainer = "_insightsContainer_8g4zl_131";
const insightsBanner = "_insightsBanner_8g4zl_138";
const insightsContent = "_insightsContent_8g4zl_146";
const insightsContentWrapper = "_insightsContentWrapper_8g4zl_155";
const insightsChartWrapper = "_insightsChartWrapper_8g4zl_160";
const insightsTableWrapper = "_insightsTableWrapper_8g4zl_167";
const dataLoader = "_dataLoader_8g4zl_173";
const isDataLoading = "_isDataLoading_8g4zl_186";
const style0 = {
  insightsView,
  insightsContainer,
  insightsBanner,
  insightsContent,
  insightsContentWrapper,
  insightsChartWrapper,
  insightsTableWrapper,
  dataLoader,
  isDataLoading
};
const cssModules = {
  "$style": style0
};
const InsightsDashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  InsightsDashboard as default
};
