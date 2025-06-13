import { p as parseAiContent, l as _sfc_main$3, n as getConsumedTokens, o as ViewSubExecution, f as formatTokenUsageCount, _ as _sfc_main$5, q as createAiData, r as getTreeNodeData, s as getReferencedData } from "./RunData-BdvMIiLG.js";
import { d as defineComponent, r as ref, q as computed, by as NodeConnectionTypes, i as createElementBlock, g as openBlock, n as normalizeClass, k as createBaseVNode, e as createBlock, f as createCommentVNode, j as createVNode, m as unref, fz as FontAwesomeIcon, t as toDisplayString, fA as capitalize, bM as N8nRadioButtons, _ as _export_sfc, bz as useNodeTypesStore, Q as useWorkflowsStore, h as resolveComponent, bH as _sfc_main$4, w as withCtx, l as createTextVNode, c as useI18n, F as Fragment, D as renderList, X as watch, fB as ElTree, B as normalizeStyle } from "./index-CkuwrFdE.js";
import RunDataAi$1 from "./RunDataParsedAiContent-ps3SSytp.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AiRunContentBlock",
  props: {
    runData: {},
    error: {}
  },
  setup(__props) {
    const props = __props;
    const isExpanded = ref(getInitialExpandedState());
    const renderType = ref("rendered");
    const parsedRun = computed(() => parseAiContent(props.runData.data ?? [], props.runData.type));
    const contentParsed = computed(
      () => parsedRun.value.some((item) => item.parsedContent?.parsed === true)
    );
    function getInitialExpandedState() {
      const collapsedTypes = {
        input: [
          NodeConnectionTypes.AiDocument,
          NodeConnectionTypes.AiTextSplitter
        ],
        output: [
          NodeConnectionTypes.AiDocument,
          NodeConnectionTypes.AiEmbedding,
          NodeConnectionTypes.AiTextSplitter,
          NodeConnectionTypes.AiVectorStore
        ]
      };
      return !collapsedTypes[props.runData.inOut].includes(props.runData.type);
    }
    function onBlockHeaderClick() {
      isExpanded.value = !isExpanded.value;
    }
    function onRenderTypeChange(value) {
      renderType.value = value;
    }
    return (_ctx, _cache) => {
      const _component_NodeErrorView = _sfc_main$3;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.block)
      }, [
        createBaseVNode("header", {
          class: normalizeClass(_ctx.$style.blockHeader),
          onClick: onBlockHeaderClick
        }, [
          createBaseVNode("button", {
            class: normalizeClass(_ctx.$style.blockToggle)
          }, [
            createVNode(unref(FontAwesomeIcon), {
              icon: isExpanded.value ? "angle-down" : "angle-right",
              size: "lg"
            }, null, 8, ["icon"])
          ], 2),
          createBaseVNode("p", {
            class: normalizeClass(_ctx.$style.blockTitle)
          }, toDisplayString(unref(capitalize)(_ctx.runData.inOut)), 3),
          contentParsed.value && !_ctx.error && isExpanded.value ? (openBlock(), createBlock(unref(N8nRadioButtons), {
            key: 0,
            size: "small",
            "model-value": renderType.value,
            class: normalizeClass(_ctx.$style.rawSwitch),
            options: [
              { label: "Rendered", value: "rendered" },
              { label: "JSON", value: "json" }
            ],
            "onUpdate:modelValue": onRenderTypeChange
          }, null, 8, ["model-value", "class"])) : createCommentVNode("", true)
        ], 2),
        createBaseVNode("main", {
          class: normalizeClass({
            [_ctx.$style.blockContent]: true,
            [_ctx.$style.blockContentExpanded]: isExpanded.value
          })
        }, [
          _ctx.error ? (openBlock(), createBlock(_component_NodeErrorView, {
            key: 0,
            error: _ctx.error,
            class: normalizeClass(_ctx.$style.error),
            "show-details": ""
          }, null, 8, ["error", "class"])) : (openBlock(), createBlock(RunDataAi$1, {
            key: 1,
            data: _ctx.runData.data,
            type: _ctx.runData.type,
            content: parsedRun.value,
            "render-type": renderType.value
          }, null, 8, ["data", "type", "content", "render-type"]))
        ], 2)
      ], 2);
    };
  }
});
const block = "_block_wafm4_123";
const blockContent = "_blockContent_wafm4_130";
const blockContentExpanded = "_blockContentExpanded_wafm4_134";
const rawSwitch = "_rawSwitch_wafm4_138";
const blockHeader = "_blockHeader_wafm4_148";
const blockTitle = "_blockTitle_wafm4_161";
const blockToggle = "_blockToggle_wafm4_168";
const error = "_error_wafm4_176";
const style0$2 = {
  block,
  blockContent,
  blockContentExpanded,
  rawSwitch,
  blockHeader,
  blockTitle,
  blockToggle,
  error
};
const cssModules$2 = {
  "$style": style0$2
};
const AiRunContentBlock = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _hoisted_1$1 = { key: 0 };
const _hoisted_2$1 = { key: 1 };
const _hoisted_3$1 = { key: 2 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RunDataAiContent",
  props: {
    inputData: {},
    contentIndex: {}
  },
  setup(__props) {
    const props = __props;
    const nodeTypesStore = useNodeTypesStore();
    const workflowsStore = useWorkflowsStore();
    const i18n = useI18n();
    const consumedTokensSum = computed(() => {
      return getConsumedTokens(outputRun.value);
    });
    function extractRunMeta(run) {
      const uiNode = workflowsStore.getNodeByName(props.inputData.node);
      const nodeType = nodeTypesStore.getNodeType(uiNode?.type ?? "");
      const runMeta2 = {
        startTimeMs: run.metadata.startTime,
        executionTimeMs: run.metadata.executionTime,
        node: nodeType,
        type: run.inOut,
        connectionType: run.type,
        subExecution: run.metadata?.subExecution
      };
      return runMeta2;
    }
    const outputRun = computed(() => {
      return props.inputData.data.find((r) => r.inOut === "output");
    });
    const runMeta = computed(() => {
      if (outputRun.value === void 0) {
        return;
      }
      return extractRunMeta(outputRun.value);
    });
    const executionRunData = computed(() => {
      return workflowsStore.getWorkflowExecution?.data?.resultData?.runData;
    });
    const outputError = computed(() => {
      return executionRunData.value?.[props.inputData.node]?.[props.inputData.runIndex]?.error;
    });
    return (_ctx, _cache) => {
      const _component_n8n_tooltip = resolveComponent("n8n-tooltip");
      const _component_n8n_info_tip = resolveComponent("n8n-info-tip");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createBaseVNode("header", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          runMeta.value?.node ? (openBlock(), createBlock(_sfc_main$4, {
            key: 0,
            class: normalizeClass(_ctx.$style.nodeIcon),
            "node-type": runMeta.value.node,
            size: 20
          }, null, 8, ["class", "node-type"])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.headerWrap)
          }, [
            createBaseVNode("p", {
              class: normalizeClass(_ctx.$style.title)
            }, toDisplayString(_ctx.inputData.node), 3),
            createBaseVNode("ul", {
              class: normalizeClass(_ctx.$style.meta)
            }, [
              runMeta.value?.startTimeMs ? (openBlock(), createElementBlock("li", _hoisted_1$1, toDisplayString(runMeta.value?.executionTimeMs) + "ms", 1)) : createCommentVNode("", true),
              runMeta.value?.startTimeMs ? (openBlock(), createElementBlock("li", _hoisted_2$1, [
                createVNode(_component_n8n_tooltip, null, {
                  content: withCtx(() => [
                    createTextVNode(toDisplayString(new Date(runMeta.value?.startTimeMs).toLocaleString()), 1)
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" " + toDisplayString(unref(i18n).baseText("runData.aiContentBlock.startedAt", {
                      interpolate: {
                        startTime: new Date(runMeta.value?.startTimeMs).toLocaleTimeString()
                      }
                    })), 1)
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true),
              runMeta.value ? (openBlock(), createElementBlock("li", _hoisted_3$1, [
                createVNode(ViewSubExecution, {
                  "task-metadata": runMeta.value,
                  "display-mode": "ai",
                  inline: true
                }, null, 8, ["task-metadata"])
              ])) : createCommentVNode("", true),
              (consumedTokensSum.value?.totalTokens ?? 0) > 0 ? (openBlock(), createElementBlock("li", {
                key: 3,
                class: normalizeClass(_ctx.$style.tokensUsage)
              }, [
                createTextVNode(toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens", {
                  interpolate: {
                    count: unref(formatTokenUsageCount)(consumedTokensSum.value, "total")
                  }
                })) + " ", 1),
                createVNode(_component_n8n_info_tip, {
                  type: "tooltip",
                  theme: "info-light",
                  "tooltip-placement": "right"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$5, { "consumed-tokens": consumedTokensSum.value }, null, 8, ["consumed-tokens"])
                  ]),
                  _: 1
                })
              ], 2)) : createCommentVNode("", true)
            ], 2)
          ], 2)
        ], 2),
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.inputData.data, (run, index) => {
          return openBlock(), createElementBlock("main", {
            key: index,
            class: normalizeClass(_ctx.$style.content)
          }, [
            createVNode(AiRunContentBlock, {
              "run-data": run,
              error: run.inOut === "output" ? outputError.value : void 0
            }, null, 8, ["run-data", "error"])
          ], 2);
        }), 128))
      ], 2);
    };
  }
});
const container$1 = "_container_dypaw_2";
const nodeIcon$1 = "_nodeIcon_dypaw_5";
const header = "_header_dypaw_8";
const headerWrap = "_headerWrap_dypaw_14";
const title$1 = "_title_dypaw_18";
const meta = "_meta_dypaw_25";
const tokensUsage = "_tokensUsage_dypaw_41";
const style0$1 = {
  container: container$1,
  nodeIcon: nodeIcon$1,
  header,
  headerWrap,
  title: title$1,
  meta,
  tokensUsage
};
const cssModules$1 = {
  "$style": style0$1
};
const RunDataAiContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _hoisted_1 = ["data-tree-depth"];
const _hoisted_2 = ["onClick"];
const _hoisted_3 = ["textContent"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RunDataAi",
  props: {
    node: {},
    runIndex: { default: 0 },
    slim: { type: Boolean },
    workflow: {}
  },
  setup(__props) {
    const props = __props;
    const workflowsStore = useWorkflowsStore();
    const nodeTypesStore = useNodeTypesStore();
    const selectedRun = ref([]);
    const i18n = useI18n();
    function isTreeNodeSelected(node) {
      return selectedRun.value.some((run) => run.node === node.node && run.runIndex === node.runIndex);
    }
    function toggleTreeItem(node) {
      node.expanded = !node.expanded;
    }
    function onItemClick(data) {
      const matchingRun = aiData.value?.find(
        (run) => run.node === data.node && run.runIndex === data.runIndex
      );
      if (!matchingRun) {
        selectedRun.value = [];
        return;
      }
      const selectedNodeRun = workflowsStore.getWorkflowResultDataByNodeName(data.node)?.[data.runIndex];
      if (!selectedNodeRun) {
        return;
      }
      selectedRun.value = [
        {
          node: data.node,
          runIndex: data.runIndex,
          data: getReferencedData(selectedNodeRun, true)
        }
      ];
    }
    function getNodeType(nodeName) {
      const node = workflowsStore.getNodeByName(nodeName);
      if (!node) {
        return null;
      }
      const nodeType = nodeTypesStore.getNodeType(node?.type);
      return nodeType;
    }
    function selectFirst() {
      if (executionTree.value.length && executionTree.value[0].children.length) {
        onItemClick(executionTree.value[0].children[0]);
      }
    }
    const aiData = computed(
      () => createAiData(props.node.name, props.workflow, workflowsStore.getWorkflowResultDataByNodeName)
    );
    const executionTree = computed(
      () => getTreeNodeData(props.node.name, props.workflow, aiData.value)
    );
    watch(() => props.runIndex, selectFirst, { immediate: true });
    return (_ctx, _cache) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_n8n_tooltip = resolveComponent("n8n-tooltip");
      const _component_n8n_text = resolveComponent("n8n-text");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        aiData.value.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", {
            class: normalizeClass({ [_ctx.$style.tree]: true, [_ctx.$style.slim]: _ctx.slim })
          }, [
            createVNode(unref(ElTree), {
              data: executionTree.value,
              props: { label: "node" },
              "default-expand-all": "",
              indent: 12,
              "expand-on-click-node": false,
              "data-test-id": "lm-chat-logs-tree",
              onNodeClick: onItemClick
            }, {
              default: withCtx(({ node, data }) => [
                createBaseVNode("div", {
                  class: normalizeClass({
                    [_ctx.$style.treeNode]: true,
                    [_ctx.$style.isSelected]: isTreeNodeSelected(data)
                  }),
                  "data-tree-depth": data.depth,
                  style: normalizeStyle({ "--item-depth": data.depth })
                }, [
                  data.children.length ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    class: normalizeClass(_ctx.$style.treeToggle),
                    onClick: ($event) => toggleTreeItem(node)
                  }, [
                    createVNode(_component_font_awesome_icon, {
                      icon: node.expanded ? "angle-down" : "angle-right"
                    }, null, 8, ["icon"])
                  ], 10, _hoisted_2)) : createCommentVNode("", true),
                  createVNode(_component_n8n_tooltip, {
                    disabled: !_ctx.slim,
                    placement: "right"
                  }, {
                    content: withCtx(() => [
                      createTextVNode(toDisplayString(node.label), 1)
                    ]),
                    default: withCtx(() => [
                      createBaseVNode("span", {
                        class: normalizeClass(_ctx.$style.leafLabel)
                      }, [
                        createVNode(_sfc_main$4, {
                          "node-type": getNodeType(data.node),
                          size: 17,
                          class: normalizeClass(_ctx.$style.nodeIcon)
                        }, null, 8, ["node-type", "class"]),
                        !_ctx.slim ? (openBlock(), createElementBlock("span", {
                          key: 0,
                          textContent: toDisplayString(node.label)
                        }, null, 8, _hoisted_3)) : createCommentVNode("", true)
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["disabled"])
                ], 14, _hoisted_1)
              ]),
              _: 1
            }, 8, ["data"])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.runData)
          }, [
            selectedRun.value.length === 0 ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.$style.empty)
            }, [
              createVNode(_component_n8n_text, { size: "large" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.ai.empty", {
                    interpolate: {
                      node: props.node.name
                    }
                  })), 1)
                ]),
                _: 1
              })
            ], 2)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(selectedRun.value, (data, index) => {
              return openBlock(), createElementBlock("div", {
                key: `${data.node}__${data.runIndex}__index`,
                "data-test-id": "lm-chat-logs-entry"
              }, [
                createVNode(RunDataAiContent, {
                  "input-data": data,
                  "content-index": index
                }, null, 8, ["input-data", "content-index"])
              ]);
            }), 128))
          ], 2)
        ], 64)) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.$style.noData)
        }, toDisplayString(unref(i18n).baseText("ndv.output.ai.waiting")), 3))
      ], 2);
    };
  }
});
const treeToggle = "_treeToggle_1qaq4_123";
const leafLabel = "_leafLabel_1qaq4_131";
const noData = "_noData_1qaq4_137";
const empty = "_empty_1qaq4_145";
const title = "_title_1qaq4_149";
const tree = "_tree_1qaq4_123";
const slim = "_slim_1qaq4_161";
const runData = "_runData_1qaq4_165";
const container = "_container_1qaq4_171";
const nodeIcon = "_nodeIcon_1qaq4_198";
const isSelected = "_isSelected_1qaq4_204";
const treeNode = "_treeNode_1qaq4_208";
const style0 = {
  treeToggle,
  leafLabel,
  noData,
  empty,
  title,
  tree,
  slim,
  runData,
  container,
  nodeIcon,
  isSelected,
  treeNode
};
const cssModules = {
  "$style": style0
};
const RunDataAi = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  RunDataAi as R
};
