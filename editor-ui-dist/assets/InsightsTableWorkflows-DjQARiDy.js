const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/InsightsPaywall-Diny1wN-.js","assets/index-BsWH3eYA.js","assets/index-BFyMw9-0.css","assets/InsightsPaywall-CE5W3W4m.css"])))=>i.map(i=>d[i]);
import { d as defineComponent, ef as mergeModels, x as computed, r as ref, c as useI18n, hB as transformInsightsFailureRate, hC as INSIGHTS_UNIT_MAPPING, hE as transformInsightsTimeSaved, hF as transformInsightsAverageRunTime, eg as useModel, af as watch, T as resolveComponent, h as createElementBlock, g as openBlock, i as createVNode, w as withCtx, k as createTextVNode, t as toDisplayString, l as unref, m as N8nHeading, bu as createSlots, j as createBaseVNode, n as normalizeClass, du as defineAsyncComponent, e as createBlock, a4 as N8nTooltip, F as Fragment, V as VIEWS, eh as N8nDataTableServer, aW as __vitePreload, ap as useTelemetry, _ as _export_sfc } from "./index-BsWH3eYA.js";
import { s as smartDecimal } from "./InsightsSummary-gyLfjHkG.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const InsightsPaywall = defineAsyncComponent(
      async () => await __vitePreload(() => import("./InsightsPaywall-Diny1wN-.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0)
    );
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
      params: {
        name: item.workflowId
      },
      query
    });
    const trackWorkflowClick = (item) => {
      telemetry.track("User clicked on workflow from insights table", {
        workflow_id: item.workflowId
      });
    };
    watch(sortBy, (newValue) => {
      telemetry.track("User sorted insights table", {
        sorted_by: (newValue ?? []).map((item) => ({
          ...item,
          label: headers.value.find((header) => header.key === item.id)?.title
        }))
      });
    });
    return (_ctx, _cache) => {
      const _component_N8nHeading = N8nHeading;
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_N8nHeading, {
          bold: "",
          tag: "h3",
          size: "medium",
          class: "mb-s"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.table.title")), 1)
          ]),
          _: 1
        }),
        createVNode(unref(N8nDataTableServer), {
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
          [`item.workflowName`]: withCtx(({ item }) => [
            createVNode(_component_router_link, {
              to: getWorkflowLink(item),
              class: normalizeClass(_ctx.$style.link),
              onClick: ($event) => trackWorkflowClick(item)
            }, {
              default: withCtx(() => [
                createVNode(unref(N8nTooltip), {
                  content: item.workflowName,
                  placement: "top"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", {
                      class: normalizeClass(_ctx.$style.ellipsis)
                    }, toDisplayString(item.workflowName), 3)
                  ]),
                  _: 2
                }, 1032, ["content"])
              ]),
              _: 2
            }, 1032, ["to", "class", "onClick"])
          ]),
          [`item.timeSaved`]: withCtx(({ item, value }) => [
            !item.timeSaved ? (openBlock(), createBlock(_component_router_link, {
              key: 0,
              to: getWorkflowLink(item, { settings: "true" }),
              class: normalizeClass(_ctx.$style.link)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.table.estimate")), 1)
              ]),
              _: 2
            }, 1032, ["to", "class"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(value), 1)
            ], 64))
          ]),
          [`item.projectName`]: withCtx(({ item }) => [
            item.projectName ? (openBlock(), createBlock(unref(N8nTooltip), {
              key: 0,
              content: item.projectName,
              placement: "top"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.ellipsis)
                }, toDisplayString(item.projectName), 3)
              ]),
              _: 2
            }, 1032, ["content"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(" - ")
            ], 64))
          ]),
          _: 2
        }, [
          !_ctx.isDashboardEnabled ? {
            name: "cover",
            fn: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.blurryCover)
              }, [
                createVNode(unref(InsightsPaywall))
              ], 2)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["sort-by", "page", "items-per-page", "items", "headers", "items-length"])
      ]);
    };
  }
});
const ellipsis = "_ellipsis_1sfih_123";
const link = "_link_1sfih_132";
const blurryCover = "_blurryCover_1sfih_144";
const style0 = {
  ellipsis,
  link,
  blurryCover
};
const cssModules = {
  "$style": style0
};
const InsightsTableWorkflows = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  InsightsTableWorkflows as default
};
