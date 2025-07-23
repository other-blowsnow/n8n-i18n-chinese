import { d as defineComponent, cR as mergeModels, x as computed, r as ref, c as useI18n, iK as transformInsightsFailureRate, iL as INSIGHTS_UNIT_MAPPING, iN as transformInsightsTimeSaved, iO as transformInsightsAverageRunTime, cS as useModel, aa as watch, O as resolveComponent, h as createElementBlock, g as openBlock, i as createVNode, w as withCtx, k as createTextVNode, m as N8nHeading, e as createBlock, l as unref, $ as N8nTooltip, j as createBaseVNode, t as toDisplayString, F as Fragment, V as VIEWS, ay as useTelemetry, _ as _export_sfc } from "./index-BSyItHSy.js";
import { N as N8nDataTableServer } from "./N8nDataTableServer-DOeFdKyg.js";
import { s as smartDecimal } from "./InsightsSummary-CJbVMJnW.js";
const _hoisted_1 = { class: "ellipsis" };
const _hoisted_2 = { class: "ellipsis" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InsightsTableWorkflows",
  props: /* @__PURE__ */ mergeModels({
    data: {},
    loading: { type: Boolean }
  }, {
    "sortBy": {},
    "sortByModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:options"], ["update:sortBy"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const rows = computed(() => props.data.data);
    const headers = ref([
      {
        title: "Name",
        key: "workflowName",
        width: 400
      },
      {
        title: i18n.baseText("insights.banner.title.total"),
        key: "total",
        value(row) {
          return row.total.toLocaleString("en-US");
        }
      },
      {
        title: i18n.baseText("insights.banner.title.failed"),
        key: "failed",
        value(row) {
          return row.failed.toLocaleString("en-US");
        }
      },
      {
        title: i18n.baseText("insights.banner.title.failureRate"),
        key: "failureRate",
        value(row) {
          return smartDecimal(transformInsightsFailureRate(row.failureRate)) + INSIGHTS_UNIT_MAPPING.failureRate(row.failureRate);
        }
      },
      {
        title: i18n.baseText("insights.banner.title.timeSaved"),
        key: "timeSaved",
        value(row) {
          return smartDecimal(transformInsightsTimeSaved(row.timeSaved)) + INSIGHTS_UNIT_MAPPING.timeSaved(row.timeSaved);
        }
      },
      {
        title: i18n.baseText("insights.banner.title.averageRunTime"),
        key: "averageRunTime",
        value(row) {
          return smartDecimal(transformInsightsAverageRunTime(row.averageRunTime)) + INSIGHTS_UNIT_MAPPING.averageRunTime(row.averageRunTime);
        }
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
          default: withCtx(() => _cache[4] || (_cache[4] = [
            createTextVNode("Workflow insights")
          ])),
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
          "items-length": _ctx.data.count,
          "onUpdate:options": _cache[3] || (_cache[3] = ($event) => emit("update:options", $event))
        }, {
          [`item.workflowName`]: withCtx(({ item }) => [
            createVNode(_component_router_link, {
              to: getWorkflowLink(item),
              class: "link",
              onClick: ($event) => trackWorkflowClick(item)
            }, {
              default: withCtx(() => [
                createVNode(unref(N8nTooltip), {
                  content: item.workflowName,
                  placement: "top"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1, toDisplayString(item.workflowName), 1)
                  ]),
                  _: 2
                }, 1032, ["content"])
              ]),
              _: 2
            }, 1032, ["to", "onClick"])
          ]),
          [`item.timeSaved`]: withCtx(({ item, value }) => [
            !item.timeSaved ? (openBlock(), createBlock(_component_router_link, {
              key: 0,
              to: getWorkflowLink(item, { settings: "true" }),
              class: "link"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.table.estimate")), 1)
              ]),
              _: 2
            }, 1032, ["to"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
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
                createBaseVNode("div", _hoisted_2, toDisplayString(item.projectName), 1)
              ]),
              _: 2
            }, 1032, ["content"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(" - ")
            ], 64))
          ]),
          _: 2
        }, 1032, ["sort-by", "page", "items-per-page", "items", "headers", "items-length"])
      ]);
    };
  }
});
const InsightsTableWorkflows = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ae79bb59"]]);
export {
  InsightsTableWorkflows as default
};
