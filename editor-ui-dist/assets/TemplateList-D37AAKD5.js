import { d as defineComponent, x as computed, eI as filterTemplateNodes, h as createElementBlock, g as openBlock, n as normalizeClass, f as createCommentVNode, F as Fragment, A as renderList, i as createVNode, c2 as NodeIcon, t as toDisplayString, _ as _export_sfc, dK as N8nLoading, w as withCtx, k as createTextVNode, m as N8nHeading, e as createBlock, N as N8nIcon, l as unref, eL as abbreviateNumber, p as N8nText, eK as _sfc_main$3, c as useI18n, q as N8nButton, B as withModifiers, r as ref, o as onMounted, P as onBeforeUnmount, j as createBaseVNode } from "./index-BsWH3eYA.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NodeList",
  props: {
    nodes: {},
    limit: { default: 4 },
    size: { default: "sm" }
  },
  setup(__props) {
    const props = __props;
    const filteredCoreNodes = computed(() => {
      return filterTemplateNodes(props.nodes);
    });
    const hiddenNodes = computed(() => {
      return filteredCoreNodes.value.length - countNodesToBeSliced(filteredCoreNodes.value);
    });
    const slicedNodes = computed(() => {
      return filteredCoreNodes.value.slice(0, countNodesToBeSliced(filteredCoreNodes.value));
    });
    const countNodesToBeSliced = (nodes2) => {
      if (nodes2.length > props.limit) {
        return props.limit - 1;
      } else {
        return props.limit;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.list)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(slicedNodes.value, (node) => {
          return openBlock(), createElementBlock("div", {
            key: node.name,
            class: normalizeClass([_ctx.$style.container, _ctx.$style[_ctx.size]])
          }, [
            createVNode(NodeIcon, {
              "node-type": node,
              size: _ctx.size === "md" ? 24 : 18,
              "show-tooltip": true
            }, null, 8, ["node-type", "size"])
          ], 2);
        }), 128)),
        filteredCoreNodes.value.length > _ctx.limit + 1 ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([_ctx.$style.button, _ctx.size === "md" ? _ctx.$style.buttonMd : _ctx.$style.buttonSm])
        }, " +" + toDisplayString(hiddenNodes.value), 3)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const list = "_list_1szy0_123";
const container = "_container_1szy0_131";
const sm = "_sm_1szy0_136";
const md = "_md_1szy0_140";
const button$1 = "_button_1szy0_144";
const buttonSm = "_buttonSm_1szy0_158";
const buttonMd = "_buttonMd_1szy0_165";
const style0$2 = {
  list,
  container,
  sm,
  md,
  button: button$1,
  buttonSm,
  buttonMd
};
const cssModules$2 = {
  "$style": style0$2
};
const NodeList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _hoisted_1$1 = { key: 1 };
const _hoisted_2$1 = { key: 0 };
const nodesToBeShown = 5;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TemplateCard",
  props: {
    workflow: {},
    lastItem: { type: Boolean, default: false },
    firstItem: { type: Boolean, default: false },
    useWorkflowButton: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    simpleView: { type: Boolean, default: false }
  },
  emits: ["useWorkflow", "click"],
  setup(__props, { emit: __emit }) {
    const i18n = useI18n();
    const emit = __emit;
    function onUseWorkflowClick(e) {
      emit("useWorkflow", e);
    }
    function onCardClick(e) {
      emit("click", e);
    }
    return (_ctx, _cache) => {
      const _component_n8n_loading = N8nLoading;
      const _component_n8n_heading = N8nHeading;
      const _component_n8n_icon = N8nIcon;
      const _component_n8n_text = N8nText;
      const _component_n8n_button = N8nButton;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          _ctx.$style.card,
          _ctx.lastItem && _ctx.$style.last,
          _ctx.firstItem && _ctx.$style.first,
          !_ctx.loading && _ctx.$style.loaded
        ]),
        "data-test-id": "template-card",
        onClick: onCardClick
      }, [
        _ctx.loading ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.loading)
        }, [
          createVNode(_component_n8n_loading, {
            rows: 2,
            "shrink-last": false,
            loading: _ctx.loading
          }, null, 8, ["loading"])
        ], 2)) : _ctx.workflow ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
          createVNode(_component_n8n_heading, {
            bold: true,
            size: "small"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.workflow.name), 1)
            ]),
            _: 1
          }),
          !_ctx.simpleView ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.content)
          }, [
            _ctx.workflow.totalViews ? (openBlock(), createElementBlock("span", _hoisted_2$1, [
              createVNode(_component_n8n_text, {
                size: "small",
                color: "text-light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n8n_icon, {
                    icon: "eye",
                    size: "xsmall"
                  }),
                  createTextVNode(" " + toDisplayString(unref(abbreviateNumber)(_ctx.workflow.totalViews)), 1)
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            _ctx.workflow.totalViews ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(_ctx.$style.line),
              textContent: "|"
            }, null, 2)) : createCommentVNode("", true),
            createVNode(_component_n8n_text, {
              size: "small",
              color: "text-light"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$3, {
                  date: _ctx.workflow.createdAt
                }, null, 8, ["date"])
              ]),
              _: 1
            }),
            _ctx.workflow.user ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass(_ctx.$style.line),
              textContent: "|"
            }, null, 2)) : createCommentVNode("", true),
            _ctx.workflow.user ? (openBlock(), createBlock(_component_n8n_text, {
              key: 3,
              size: "small",
              color: "text-light"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("template.byAuthor", {
                  interpolate: { name: _ctx.workflow.user.username }
                })), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ], 2)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        !_ctx.loading && _ctx.workflow ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass([_ctx.$style.nodesContainer, _ctx.useWorkflowButton && _ctx.$style.hideOnHover])
        }, [
          _ctx.workflow.nodes ? (openBlock(), createBlock(NodeList, {
            key: 0,
            nodes: _ctx.workflow.nodes,
            limit: nodesToBeShown,
            size: "md"
          }, null, 8, ["nodes"])) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true),
        _ctx.useWorkflowButton ? (openBlock(), createElementBlock("div", {
          key: 3,
          class: normalizeClass(_ctx.$style.buttonContainer)
        }, [
          _ctx.useWorkflowButton ? (openBlock(), createBlock(_component_n8n_button, {
            key: 0,
            outline: "",
            label: "Use workflow",
            "data-test-id": "use-workflow-button",
            onClick: withModifiers(onUseWorkflowClick, ["stop"])
          })) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const nodes$1 = "_nodes_1xbou_123";
const icon = "_icon_1xbou_130";
const card = "_card_1xbou_134";
const hideOnHover = "_hideOnHover_1xbou_146";
const buttonContainer = "_buttonContainer_1xbou_149";
const loaded = "_loaded_1xbou_160";
const first = "_first_1xbou_164";
const last = "_last_1xbou_170";
const content = "_content_1xbou_175";
const line = "_line_1xbou_180";
const loading = "_loading_1xbou_186";
const nodesContainer = "_nodesContainer_1xbou_191";
const style0$1 = {
  nodes: nodes$1,
  icon,
  card,
  hideOnHover,
  buttonContainer,
  loaded,
  first,
  last,
  content,
  line,
  loading,
  nodesContainer
};
const cssModules$1 = {
  "$style": style0$1
};
const TemplateCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _hoisted_1 = {
  key: 0,
  "data-test-id": "template-count-label"
};
const _hoisted_2 = ["textContent"];
const _hoisted_3 = {
  key: 1,
  "data-test-id": "templates-loading-container"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TemplateList",
  props: {
    workflows: { default: () => [] },
    infiniteScrollEnabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    useWorkflowButton: { type: Boolean, default: false },
    totalWorkflows: { default: 0 },
    simpleView: { type: Boolean, default: false },
    totalCount: { default: 0 }
  },
  emits: ["loadMore", "openTemplate", "useWorkflow"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const i18n = useI18n();
    const loader = ref(null);
    onMounted(() => {
      if (props.infiniteScrollEnabled) {
        const content2 = document.getElementById("content");
        if (content2) {
          content2.addEventListener("scroll", onScroll);
        }
      }
    });
    onBeforeUnmount(() => {
      const content2 = document.getElementById("content");
      if (content2) {
        content2.removeEventListener("scroll", onScroll);
      }
    });
    function onScroll() {
      const loaderRef = loader.value;
      if (!loaderRef || props.loading) {
        return;
      }
      const rect = loaderRef.getBoundingClientRect();
      const inView = rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
      if (inView) {
        emit("loadMore");
      }
    }
    function onCardClick(event, id) {
      emit("openTemplate", { event, id });
    }
    function onUseWorkflow(event, id) {
      emit("useWorkflow", { event, id });
    }
    return (_ctx, _cache) => {
      const _component_n8n_heading = N8nHeading;
      return _ctx.loading || _ctx.workflows.length ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.$style.list)
      }, [
        !_ctx.simpleView ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.header)
        }, [
          createVNode(_component_n8n_heading, {
            bold: true,
            size: "medium",
            color: "text-light"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("templates.workflows")) + " ", 1),
              _ctx.totalCount > 0 ? (openBlock(), createElementBlock("span", _hoisted_1, "(" + toDisplayString(_ctx.totalCount) + ")", 1)) : createCommentVNode("", true),
              !_ctx.loading && _ctx.totalWorkflows ? (openBlock(), createElementBlock("span", {
                key: 1,
                textContent: toDisplayString(`(${_ctx.totalWorkflows})`)
              }, null, 8, _hoisted_2)) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.container)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.workflows, (workflow, index) => {
            return openBlock(), createBlock(TemplateCard, {
              key: workflow.id,
              workflow,
              "first-item": index === 0,
              "simple-view": _ctx.simpleView,
              "last-item": index === _ctx.workflows.length - 1 && !_ctx.loading,
              "use-workflow-button": _ctx.useWorkflowButton,
              onClick: (e) => onCardClick(e, workflow.id),
              onUseWorkflow: (e) => onUseWorkflow(e, workflow.id)
            }, null, 8, ["workflow", "first-item", "simple-view", "last-item", "use-workflow-button", "onClick", "onUseWorkflow"]);
          }), 128)),
          _ctx.infiniteScrollEnabled ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref_key: "loader",
            ref: loader
          }, null, 512)) : createCommentVNode("", true),
          _ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_3, [
            (openBlock(), createElementBlock(Fragment, null, renderList(4, (n) => {
              return createVNode(TemplateCard, {
                key: "index-" + n,
                loading: true,
                "first-item": _ctx.workflows.length === 0 && n === 1,
                "last-item": n === 4
              }, null, 8, ["first-item", "last-item"]);
            }), 64))
          ])) : createCommentVNode("", true)
        ], 2)
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const header = "_header_ryymc_123";
const workflowButton = "_workflowButton_ryymc_127";
const button = "_button_ryymc_127";
const nodes = "_nodes_ryymc_130";
const style0 = {
  header,
  workflowButton,
  button,
  nodes
};
const cssModules = {
  "$style": style0
};
const TemplateList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  NodeList as N,
  TemplateList as T
};
