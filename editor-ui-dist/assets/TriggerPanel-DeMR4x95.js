import { d as defineComponent, h as createElementBlock, g as openBlock, n as normalizeClass, j as createBaseVNode, Q as renderSlot, _ as _export_sfc, a9 as useWorkflowsStore, ah as useNodeTypesStore, df as usePostHog, x as computed, dj as NDV_UI_OVERHAUL_EXPERIMENT, bF as NodeConnectionTypes, o as onMounted, P as onBeforeUnmount, F as Fragment, A as renderList, e as createBlock, f as createCommentVNode, a4 as N8nTooltip, w as withCtx, i as createVNode, c2 as NodeIcon, k as createTextVNode, t as toDisplayString, hd as convertToDisplayDateComponents, ci as resolveDirective, l as unref, cS as InfoTip, b4 as withDirectives, c as useI18n, p as N8nText, bZ as getDefaultExportFromCjs, he as requireCapitalize, r as ref, hf as parseAiContent, N as N8nIcon, O as N8nRadioButtons, hg as _sfc_main$8, hh as ViewSubExecution, bY as formatTokenUsageCount, af as watch, hi as ElTree, U as normalizeStyle, a_ as useNDVStore, et as storeToRefs, v as useSettingsStore, hj as useNodeDirtiness, hk as useNodeType, bQ as usePinnedData, hl as CanvasNodeDirtiness, cj as RunData, bu as createSlots, ck as waitingNodeTooltip, hm as __unplugin_components_2, cR as _sfc_main$a, a6 as I18nT, b5 as vShow, ap as useTelemetry, Z as useUIStore, b as useRouter, aA as useWorkflowHelpers, hn as isTriggerPanelObject, fb as getTriggerNodeServiceName, bO as CHAT_TRIGGER_NODE_TYPE, ho as WEBHOOK_NODE_TYPE, hp as FORM_TRIGGER_NODE_TYPE, f3 as CopyInput, q as N8nButton, dJ as _sfc_main$b, m as N8nHeading, C as N8nLink, W as createEventBus, hq as Transition, V as VIEWS, ao as WORKFLOW_SETTINGS_MODAL_KEY } from "./index-BsWH3eYA.js";
import { R as RunDataAi$1, g as getConsumedTokens, c as createAiData, a as getTreeNodeData, b as getReferencedData } from "./RunDataParsedAiContent-CtPHlln6.js";
import { _ as _sfc_main$9 } from "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-C_ibue-c.js";
import { u as useExecutionData } from "./NodeView-D_jgon9p.js";
import { N as N8nInfoAccordion } from "./InfoAccordion-CLjAr6Sq.js";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...{ name: "N8nPulse" },
  __name: "Pulse",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["pulse", _ctx.$style.pulseContainer])
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.pulse)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.pulse2)
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
const pulseContainer = "_pulseContainer_1w2uc_123";
const pulse = "_pulse_1w2uc_123";
const pulse2 = "_pulse2_1w2uc_139";
const style0$7 = {
  pulseContainer,
  pulse,
  pulse2
};
const cssModules$7 = {
  "$style": style0$7
};
const N8nPulse = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__cssModules", cssModules$7]]);
const _hoisted_1$3 = ["data-node-name", "data-node-placement", "onClick"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "NDVFloatingNodes",
  props: {
    rootNode: {}
  },
  emits: ["switchSelectedNode"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const workflowsStore = useWorkflowsStore();
    const nodeTypesStore = useNodeTypesStore();
    const posthogStore = usePostHog();
    const emit = __emit;
    const isNDVV2 = computed(
      () => posthogStore.isVariantEnabled(
        NDV_UI_OVERHAUL_EXPERIMENT.name,
        NDV_UI_OVERHAUL_EXPERIMENT.variant
      )
    );
    function moveNodeDirection(direction) {
      const matchedDirectionNode = connectedNodes.value[direction][0];
      if (matchedDirectionNode) {
        emit("switchSelectedNode", matchedDirectionNode.node.name);
      }
    }
    function onKeyDown(e) {
      if (e.shiftKey && e.altKey && (e.ctrlKey || e.metaKey)) {
        const mapper = {
          ArrowUp: "outputSub",
          ArrowRight: "outputMain",
          ArrowLeft: "inputMain"
          /* left */
        };
        const matchingDirection = mapper[e.key] || null;
        if (matchingDirection) {
          moveNodeDirection(matchingDirection);
        }
      }
    }
    function getINodesFromNames(names) {
      return names.map((name) => {
        const node = workflowsStore.getNodeByName(name);
        if (node) {
          const nodeType = nodeTypesStore.getNodeType(node.type);
          if (nodeType) {
            return { node, nodeType };
          }
        }
        return null;
      }).filter((n) => n !== null);
    }
    const connectedNodes = computed(() => {
      const workflowObject = workflowsStore.workflowObject;
      const rootName = props.rootNode.name;
      return {
        [
          "outputSub"
          /* top */
        ]: getINodesFromNames(
          workflowObject.getChildNodes(rootName, "ALL_NON_MAIN")
        ),
        [
          "outputMain"
          /* right */
        ]: getINodesFromNames(
          workflowObject.getChildNodes(rootName, NodeConnectionTypes.Main, 1)
        ).reverse(),
        [
          "inputMain"
          /* left */
        ]: getINodesFromNames(
          workflowObject.getParentNodes(rootName, NodeConnectionTypes.Main, 1)
        ).reverse()
      };
    });
    const connectionGroups = [
      "outputSub",
      "outputMain",
      "inputMain"
      /* left */
    ];
    const tooltipPositionMapper = {
      [
        "outputSub"
        /* top */
      ]: "bottom",
      [
        "outputMain"
        /* right */
      ]: "left",
      [
        "inputMain"
        /* left */
      ]: "right"
    };
    onMounted(() => {
      document.addEventListener("keydown", onKeyDown, true);
    });
    onBeforeUnmount(() => {
      document.removeEventListener("keydown", onKeyDown, true);
    });
    __expose({
      moveNodeDirection
    });
    return (_ctx, _cache) => {
      const _component_n8n_tooltip = N8nTooltip;
      return openBlock(), createElementBlock("aside", {
        class: normalizeClass([_ctx.$style.floatingNodes, { [_ctx.$style.v2]: isNDVV2.value }]),
        "data-test-id": "floating-nodes"
      }, [
        (openBlock(), createElementBlock(Fragment, null, renderList(connectionGroups, (connectionGroup) => {
          return createBaseVNode("ul", {
            key: connectionGroup,
            class: normalizeClass([_ctx.$style.nodesList, _ctx.$style[connectionGroup]])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(connectedNodes.value[connectionGroup], ({ node, nodeType }) => {
              return openBlock(), createElementBlock(Fragment, null, [
                node && nodeType ? (openBlock(), createBlock(_component_n8n_tooltip, {
                  key: node.name,
                  placement: tooltipPositionMapper[connectionGroup],
                  teleported: false,
                  offset: isNDVV2.value ? 16 : 60
                }, {
                  content: withCtx(() => [
                    createTextVNode(toDisplayString(node.name), 1)
                  ]),
                  default: withCtx(() => [
                    createBaseVNode("li", {
                      class: normalizeClass(_ctx.$style.connectedNode),
                      "data-test-id": "floating-node",
                      "data-node-name": node.name,
                      "data-node-placement": connectionGroup,
                      onClick: ($event) => emit("switchSelectedNode", node.name)
                    }, [
                      createVNode(NodeIcon, {
                        "node-type": nodeType,
                        "node-name": node.name,
                        "tooltip-position": tooltipPositionMapper[connectionGroup],
                        size: isNDVV2.value ? 24 : 35,
                        circle: ""
                      }, null, 8, ["node-type", "node-name", "tooltip-position", "size"])
                    ], 10, _hoisted_1$3)
                  ]),
                  _: 2
                }, 1032, ["placement", "offset"])) : createCommentVNode("", true)
              ], 64);
            }), 256))
          ], 2);
        }), 64))
      ], 2);
    };
  }
});
const floatingNodes = "_floatingNodes_mldmm_123";
const nodesList = "_nodesList_mldmm_133";
const inputSub = "_inputSub_mldmm_147";
const outputSub = "_outputSub_mldmm_147";
const outputMain = "_outputMain_mldmm_160";
const inputMain = "_inputMain_mldmm_160";
const connectedNode = "_connectedNode_mldmm_173";
const v2 = "_v2_mldmm_214";
const style0$6 = {
  floatingNodes,
  nodesList,
  inputSub,
  outputSub,
  outputMain,
  inputMain,
  connectedNode,
  v2
};
const cssModules$6 = {
  "$style": style0$6
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__cssModules", cssModules$6]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RunInfo",
  props: {
    taskData: {},
    hasStaleData: { type: Boolean },
    hasPinData: { type: Boolean }
  },
  setup(__props) {
    const i18n = useI18n();
    const props = __props;
    const runTaskData = computed(() => {
      return props.taskData;
    });
    const theme = computed(() => {
      return props.taskData?.error ? "danger" : "success";
    });
    const runMetadata = computed(() => {
      if (!runTaskData.value) {
        return null;
      }
      const { date, time } = convertToDisplayDateComponents(runTaskData.value.startTime);
      return {
        executionTime: runTaskData.value.executionTime,
        startTime: `${date} at ${time}`
      };
    });
    return (_ctx, _cache) => {
      const _component_n8n_text = N8nText;
      const _directive_n8n_html = resolveDirective("n8n-html");
      return _ctx.hasStaleData ? (openBlock(), createBlock(unref(InfoTip), {
        key: 0,
        theme: "warning-light",
        type: "tooltip",
        "tooltip-placement": "right",
        "data-test-id": "node-run-info-stale"
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("span", null, null, 512), [
            [
              _directive_n8n_html,
              unref(i18n).baseText(
                _ctx.hasPinData ? "ndv.output.staleDataWarning.pinData" : "ndv.output.staleDataWarning.regular"
              )
            ]
          ])
        ]),
        _: 1
      })) : runMetadata.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(_ctx.$style.tooltipRow)
      }, [
        createVNode(unref(InfoTip), {
          type: "note",
          theme: theme.value,
          "data-test-id": `node-run-status-${theme.value}`,
          size: "large"
        }, null, 8, ["theme", "data-test-id"]),
        createVNode(unref(InfoTip), {
          type: "tooltip",
          theme: "info",
          "data-test-id": `node-run-info`,
          "tooltip-placement": "right"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", null, [
              createVNode(_component_n8n_text, {
                bold: true,
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(runTaskData.value?.error ? unref(i18n).baseText("runData.executionStatus.failed") : unref(i18n).baseText("runData.executionStatus.success")), 1)
                ]),
                _: 1
              }),
              _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
              createVNode(_component_n8n_text, {
                bold: true,
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("runData.startTime") + ":"), 1)
                ]),
                _: 1
              }),
              createTextVNode(" " + toDisplayString(runMetadata.value.startTime), 1),
              _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
              createVNode(_component_n8n_text, {
                bold: true,
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("runData.executionTime") + ":"), 1)
                ]),
                _: 1
              }),
              createTextVNode(" " + toDisplayString(runMetadata.value.executionTime) + " " + toDisplayString(unref(i18n).baseText("runData.ms")), 1)
            ])
          ]),
          _: 1
        })
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const tooltipRow = "_tooltipRow_14r7d_123";
const style0$5 = {
  tooltipRow
};
const cssModules$5 = {
  "$style": style0$5
};
const RunInfo = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__cssModules", cssModules$5]]);
var capitalizeExports = requireCapitalize();
const capitalize = /* @__PURE__ */ getDefaultExportFromCjs(capitalizeExports);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
      const _component_N8nIcon = N8nIcon;
      const _component_NodeErrorView = _sfc_main$8;
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
            createVNode(_component_N8nIcon, {
              icon: isExpanded.value ? "chevron-down" : "chevron-right",
              size: "large"
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
const style0$4 = {
  block,
  blockContent,
  blockContentExpanded,
  rawSwitch,
  blockHeader,
  blockTitle,
  blockToggle,
  error
};
const cssModules$4 = {
  "$style": style0$4
};
const AiRunContentBlock = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__cssModules", cssModules$4]]);
const _hoisted_1$2 = { key: 0 };
const _hoisted_2$2 = { key: 1 };
const _hoisted_3$2 = { key: 2 };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
      const _component_n8n_tooltip = N8nTooltip;
      const _component_n8n_info_tip = InfoTip;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createBaseVNode("header", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          runMeta.value?.node ? (openBlock(), createBlock(NodeIcon, {
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
              runMeta.value?.startTimeMs ? (openBlock(), createElementBlock("li", _hoisted_1$2, toDisplayString(runMeta.value?.executionTimeMs) + "ms", 1)) : createCommentVNode("", true),
              runMeta.value?.startTimeMs ? (openBlock(), createElementBlock("li", _hoisted_2$2, [
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
              runMeta.value ? (openBlock(), createElementBlock("li", _hoisted_3$2, [
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
                    createVNode(_sfc_main$9, { "consumed-tokens": consumedTokensSum.value }, null, 8, ["consumed-tokens"])
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
const container$2 = "_container_dypaw_2";
const nodeIcon$1 = "_nodeIcon_dypaw_5";
const header$1 = "_header_dypaw_8";
const headerWrap = "_headerWrap_dypaw_14";
const title$2 = "_title_dypaw_18";
const meta = "_meta_dypaw_25";
const tokensUsage = "_tokensUsage_dypaw_41";
const style0$3 = {
  container: container$2,
  nodeIcon: nodeIcon$1,
  header: header$1,
  headerWrap,
  title: title$2,
  meta,
  tokensUsage
};
const cssModules$3 = {
  "$style": style0$3
};
const RunDataAiContent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$3]]);
const _hoisted_1$1 = ["data-tree-depth"];
const _hoisted_2$1 = ["onClick"];
const _hoisted_3$1 = ["textContent"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RunDataAi",
  props: {
    node: {},
    runIndex: { default: 0 },
    slim: { type: Boolean },
    workflowObject: {}
  },
  setup(__props) {
    const props = __props;
    const workflowsStore = useWorkflowsStore();
    const nodeTypesStore = useNodeTypesStore();
    const selectedRun = ref([]);
    const i18n = useI18n();
    const aiData = computed(
      () => createAiData(
        props.node.name,
        props.workflowObject.connectionsBySourceNode,
        workflowsStore.getWorkflowResultDataByNodeName
      )
    );
    const executionTree = computed(
      () => getTreeNodeData(
        props.node.name,
        props.workflowObject.connectionsBySourceNode,
        aiData.value,
        props.runIndex
      )
    );
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
    watch(() => props.runIndex, selectFirst, { immediate: true });
    return (_ctx, _cache) => {
      const _component_n8n_icon = N8nIcon;
      const _component_n8n_tooltip = N8nTooltip;
      const _component_n8n_text = N8nText;
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
              default: withCtx(({ node: currentNode, data }) => [
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
                    onClick: ($event) => toggleTreeItem(currentNode)
                  }, [
                    createVNode(_component_n8n_icon, {
                      icon: currentNode.expanded ? "chevron-down" : "chevron-right"
                    }, null, 8, ["icon"])
                  ], 10, _hoisted_2$1)) : createCommentVNode("", true),
                  createVNode(_component_n8n_tooltip, {
                    disabled: !_ctx.slim,
                    placement: "right"
                  }, {
                    content: withCtx(() => [
                      createTextVNode(toDisplayString(currentNode.label), 1)
                    ]),
                    default: withCtx(() => [
                      createBaseVNode("span", {
                        class: normalizeClass(_ctx.$style.leafLabel)
                      }, [
                        createVNode(NodeIcon, {
                          "node-type": getNodeType(data.node),
                          size: 17,
                          class: normalizeClass(_ctx.$style.nodeIcon)
                        }, null, 8, ["node-type", "class"]),
                        !_ctx.slim ? (openBlock(), createElementBlock("span", {
                          key: 0,
                          textContent: toDisplayString(currentNode.label)
                        }, null, 8, _hoisted_3$1)) : createCommentVNode("", true)
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["disabled"])
                ], 14, _hoisted_1$1)
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
const title$1 = "_title_1qaq4_149";
const tree = "_tree_1qaq4_123";
const slim = "_slim_1qaq4_161";
const runData$1 = "_runData_1qaq4_165";
const container$1 = "_container_1qaq4_171";
const nodeIcon = "_nodeIcon_1qaq4_198";
const isSelected = "_isSelected_1qaq4_204";
const treeNode = "_treeNode_1qaq4_208";
const style0$2 = {
  treeToggle,
  leafLabel,
  noData,
  empty,
  title: title$1,
  tree,
  slim,
  runData: runData$1,
  container: container$1,
  nodeIcon,
  isSelected,
  treeNode
};
const cssModules$2 = {
  "$style": style0$2
};
const RunDataAi = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OutputPanel",
  props: {
    workflowObject: {},
    runIndex: {},
    isReadOnly: { type: Boolean },
    linkedRuns: { type: Boolean },
    canLinkRuns: { type: Boolean },
    pushRef: {},
    blockUI: { type: Boolean, default: false },
    isProductionExecutionPreview: { type: Boolean, default: false },
    isPaneActive: { type: Boolean, default: false },
    displayMode: {}
  },
  emits: ["linkRun", "unlinkRun", "runChange", "activatePane", "tableMounted", "itemHover", "search", "openSettings", "execute", "displayModeChange"],
  setup(__props, { emit: __emit }) {
    const OUTPUT_TYPE = {
      REGULAR: "regular",
      LOGS: "logs"
    };
    const props = __props;
    const emit = __emit;
    const ndvStore = useNDVStore();
    const nodeTypesStore = useNodeTypesStore();
    const workflowsStore = useWorkflowsStore();
    const posthogStore = usePostHog();
    const telemetry = useTelemetry();
    const i18n = useI18n();
    const { activeNode } = storeToRefs(ndvStore);
    const settings = useSettingsStore();
    const { dirtinessByName } = useNodeDirtiness();
    const { isSubNodeType } = useNodeType({
      node: activeNode
    });
    const pinnedData = usePinnedData(activeNode, {
      runIndex: props.runIndex,
      displayMode: props.displayMode
    });
    const outputMode = ref(OUTPUT_TYPE.REGULAR);
    const outputTypes = ref([
      { label: i18n.baseText("ndv.output.outType.regular"), value: OUTPUT_TYPE.REGULAR },
      { label: i18n.baseText("ndv.output.outType.logs"), value: OUTPUT_TYPE.LOGS }
    ]);
    const runDataRef = ref();
    const collapsingColumnName = ref(null);
    const node = computed(() => {
      return ndvStore.activeNode ?? void 0;
    });
    const { hasNodeRun, workflowExecution, workflowRunData } = useExecutionData({ node });
    const isTriggerNode = computed(() => {
      return !!node.value && nodeTypesStore.isTriggerNode(node.value.type);
    });
    const hasAiMetadata = computed(() => {
      if (isNodeRunning.value || !workflowRunData.value) {
        return false;
      }
      if (node.value) {
        const connectedSubNodes = props.workflowObject.getParentNodes(node.value.name, "ALL_NON_MAIN");
        const resultData = connectedSubNodes.map(workflowsStore.getWorkflowResultDataByNodeName);
        return resultData && Array.isArray(resultData) && resultData.length > 0;
      }
      return false;
    });
    const hasError = computed(
      () => Boolean(
        workflowRunData.value && node.value && workflowRunData.value[node.value.name]?.[props.runIndex]?.error
      )
    );
    const defaultOutputMode = computed(() => {
      return hasError.value && hasAiMetadata.value ? OUTPUT_TYPE.LOGS : OUTPUT_TYPE.REGULAR;
    });
    const isNodeRunning = computed(() => {
      return workflowRunning.value && !!node.value && workflowsStore.isNodeExecuting(node.value.name);
    });
    const workflowRunning = computed(() => workflowsStore.isWorkflowRunning);
    const runTaskData = computed(() => {
      if (!node.value || workflowExecution.value === null) {
        return null;
      }
      const runData2 = workflowRunData.value;
      if (!runData2?.hasOwnProperty(node.value.name)) {
        return null;
      }
      if (runData2[node.value.name].length <= props.runIndex) {
        return null;
      }
      return runData2[node.value.name][props.runIndex];
    });
    const runsCount = computed(() => {
      if (node.value === null) {
        return 0;
      }
      const runData2 = workflowRunData.value;
      if (runData2 === null || node.value && !runData2.hasOwnProperty(node.value.name)) {
        return 0;
      }
      if (node.value && runData2[node.value.name].length) {
        return runData2[node.value.name].length;
      }
      return 0;
    });
    const staleData = computed(() => {
      if (!node.value) {
        return false;
      }
      if (settings.partialExecutionVersion === 2) {
        return dirtinessByName.value[node.value.name] === CanvasNodeDirtiness.PARAMETERS_UPDATED;
      }
      const updatedAt = workflowsStore.getParametersLastUpdate(node.value.name);
      if (!updatedAt || !runTaskData.value) {
        return false;
      }
      const runAt = runTaskData.value.startTime;
      return updatedAt > runAt;
    });
    const outputPanelEditMode = computed(() => {
      return ndvStore.outputPanelEditMode;
    });
    const canPinData = computed(() => {
      return pinnedData.isValidNodeType.value && !props.isReadOnly;
    });
    const allToolsWereUnusedNotice = computed(() => {
      if (!node.value || runsCount.value === 0 || hasError.value) return void 0;
      if (pinnedData.hasData.value) return void 0;
      const toolsAvailable = props.workflowObject.getParentNodes(
        node.value.name,
        NodeConnectionTypes.AiTool,
        1
      );
      const toolsUsedInLatestRun = toolsAvailable.filter(
        (tool) => !!workflowRunData.value?.[tool]?.[props.runIndex]
      );
      if (toolsAvailable.length > 0 && toolsUsedInLatestRun.length === 0) {
        return i18n.baseText("ndv.output.noToolUsedInfo");
      } else {
        return void 0;
      }
    });
    const isNDVV2 = computed(
      () => posthogStore.isVariantEnabled(
        NDV_UI_OVERHAUL_EXPERIMENT.name,
        NDV_UI_OVERHAUL_EXPERIMENT.variant
      )
    );
    const insertTestData = () => {
      if (!runDataRef.value) return;
      runDataRef.value.enterEditMode({
        origin: "insertTestDataLink"
      });
      telemetry.track("User clicked ndv link", {
        workflow_id: workflowsStore.workflowId,
        push_ref: props.pushRef,
        node_type: node.value?.type,
        pane: "output",
        type: "insert-test-data"
      });
    };
    const onLinkRun = () => {
      emit("linkRun");
    };
    const onUnlinkRun = () => {
      emit("unlinkRun");
    };
    const openSettings = () => {
      emit("openSettings");
      telemetry.track("User clicked ndv link", {
        node_type: node.value?.type,
        workflow_id: workflowsStore.workflowId,
        push_ref: props.pushRef,
        pane: "output",
        type: "settings"
      });
    };
    const onRunIndexChange = (run) => {
      emit("runChange", run);
    };
    onMounted(() => {
      outputMode.value = defaultOutputMode.value;
    });
    watch(defaultOutputMode, (newValue, oldValue) => {
      if (newValue === OUTPUT_TYPE.LOGS && oldValue === OUTPUT_TYPE.REGULAR && hasNodeRun.value) {
        outputMode.value = defaultOutputMode.value;
      }
    });
    const activatePane = () => {
      emit("activatePane");
    };
    function handleChangeCollapsingColumn(columnName) {
      collapsingColumnName.value = columnName;
    }
    return (_ctx, _cache) => {
      const _component_N8nIcon = N8nIcon;
      const _component_NodeExecuteButton = _sfc_main$a;
      const _component_NDVEmptyState = __unplugin_components_2;
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createBlock(RunData, {
        ref_key: "runDataRef",
        ref: runDataRef,
        class: normalizeClass([_ctx.$style.runData, { [_ctx.$style.runDataV2]: isNDVV2.value }]),
        node: node.value,
        "workflow-object": _ctx.workflowObject,
        "run-index": _ctx.runIndex,
        "linked-runs": _ctx.linkedRuns,
        "can-link-runs": _ctx.canLinkRuns,
        "too-much-data-title": unref(i18n).baseText("ndv.output.tooMuchData.title"),
        "no-data-in-branch-message": unref(i18n).baseText("ndv.output.noOutputDataInBranch"),
        "is-executing": isNodeRunning.value,
        "executing-message": unref(i18n).baseText("ndv.output.executing"),
        "push-ref": _ctx.pushRef,
        "block-u-i": _ctx.blockUI,
        "is-production-execution-preview": _ctx.isProductionExecutionPreview,
        "is-pane-active": _ctx.isPaneActive,
        "hide-pagination": outputMode.value === "logs",
        "pane-type": "output",
        "data-output-type": outputMode.value,
        "callout-message": allToolsWereUnusedNotice.value,
        "display-mode": _ctx.displayMode,
        "disable-ai-content": true,
        "collapsing-table-column-name": collapsingColumnName.value,
        "data-test-id": "ndv-output-panel",
        onActivatePane: activatePane,
        onRunChange: onRunIndexChange,
        onLinkRun,
        onUnlinkRun,
        onTableMounted: _cache[2] || (_cache[2] = ($event) => emit("tableMounted", $event)),
        onItemHover: _cache[3] || (_cache[3] = ($event) => emit("itemHover", $event)),
        onSearch: _cache[4] || (_cache[4] = ($event) => emit("search", $event)),
        onDisplayModeChange: _cache[5] || (_cache[5] = ($event) => emit("displayModeChange", $event)),
        onCollapsingTableColumnChanged: handleChangeCollapsingColumn
      }, createSlots({
        header: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass([_ctx.$style.titleSection, { [_ctx.$style.titleSectionV2]: isNDVV2.value }])
          }, [
            hasAiMetadata.value ? (openBlock(), createBlock(unref(N8nRadioButtons), {
              key: 0,
              modelValue: outputMode.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => outputMode.value = $event),
              "data-test-id": "ai-output-mode-select",
              options: outputTypes.value
            }, null, 8, ["modelValue", "options"])) : (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass([_ctx.$style.title, { [_ctx.$style.titleV2]: isNDVV2.value }])
            }, toDisplayString(unref(i18n).baseText(outputPanelEditMode.value.enabled ? "ndv.output.edit" : "ndv.output")), 3)),
            unref(hasNodeRun) && !unref(pinnedData).hasData.value && (runsCount.value === 1 || runsCount.value > 0 && staleData.value) ? withDirectives((openBlock(), createBlock(RunInfo, {
              key: 2,
              "task-data": runTaskData.value,
              "has-stale-data": staleData.value,
              "has-pin-data": unref(pinnedData).hasData.value
            }, null, 8, ["task-data", "has-stale-data", "has-pin-data"])), [
              [vShow, !outputPanelEditMode.value.enabled]
            ]) : createCommentVNode("", true)
          ], 2)
        ]),
        "node-not-run": withCtx(() => [
          isNDVV2.value ? (openBlock(), createBlock(_component_NDVEmptyState, {
            key: 0,
            title: unref(i18n).baseText(
              isTriggerNode.value ? "ndv.output.noOutputData.trigger.title" : "ndv.output.noOutputData.v2.title"
            )
          }, createSlots({
            description: withCtx(() => [
              createVNode(unref(I18nT), {
                tag: "span",
                keypath: unref(isSubNodeType) ? "ndv.output.runNodeHintSubNode" : "ndv.output.noOutputData.v2.description",
                scope: "global"
              }, {
                link: withCtx(() => [
                  createVNode(_component_NodeExecuteButton, {
                    "hide-icon": "",
                    transparent: "",
                    type: "secondary",
                    "node-name": unref(activeNode)?.name ?? "",
                    label: unref(i18n).baseText(
                      isTriggerNode.value ? "ndv.output.noOutputData.trigger.action" : "ndv.output.noOutputData.v2.action"
                    ),
                    "telemetry-source": "inputs",
                    onExecute: _cache[1] || (_cache[1] = ($event) => emit("execute"))
                  }, null, 8, ["node-name", "label"]),
                  _cache[7] || (_cache[7] = createBaseVNode("br", null, null, -1))
                ]),
                _: 1
              }, 8, ["keypath"])
            ]),
            _: 2
          }, [
            isTriggerNode.value ? {
              name: "icon",
              fn: withCtx(() => [
                _cache[6] || (_cache[6] = createBaseVNode("svg", {
                  width: "16",
                  viewBox: "0 0 14 18",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createBaseVNode("path", {
                    d: "M10.9062 2.40625L8.5 8.03125H12C12.4062 8.03125 12.7812 8.28125 12.9375 8.65625C13.0625 9.0625 12.9688 9.5 12.6562 9.78125L4.65625 16.7812C4.28125 17.0625 3.78125 17.0938 3.40625 16.8125C3.03125 16.5625 2.875 16.0625 3.0625 15.625L5.46875 10H2C1.5625 10 1.1875 9.75 1.0625 9.375C0.90625 8.96875 1 8.53125 1.3125 8.25L9.3125 1.25C9.6875 0.96875 10.1875 0.9375 10.5625 1.21875C10.9375 1.46875 11.0938 1.96875 10.9062 2.40625Z",
                    fill: "currentColor"
                  })
                ], -1))
              ]),
              key: "0"
            } : {
              name: "icon",
              fn: withCtx(() => [
                createVNode(_component_N8nIcon, {
                  icon: "arrow-right-from-line",
                  size: "xlarge"
                })
              ]),
              key: "1"
            }
          ]), 1032, ["title"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            workflowRunning.value && !isTriggerNode.value ? (openBlock(), createBlock(unref(N8nText), {
              key: 0,
              "data-test-id": "ndv-output-waiting"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.waitingToRun")), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            !workflowRunning.value ? (openBlock(), createBlock(unref(N8nText), {
              key: 1,
              "data-test-id": "ndv-output-run-node-hint"
            }, {
              default: withCtx(() => [
                unref(isSubNodeType) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.runNodeHintSubNode")), 1)
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.runNodeHint")) + " ", 1),
                  canPinData.value ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    onClick: insertTestData
                  }, [
                    _cache[8] || (_cache[8] = createBaseVNode("br", null, null, -1)),
                    createTextVNode(" " + toDisplayString(unref(i18n).baseText("generic.or")) + " ", 1),
                    createVNode(unref(N8nText), {
                      tag: "a",
                      size: "medium",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.insertTestData")), 1)
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true)
                ], 64))
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ], 64))
        ]),
        "node-waiting": withCtx(() => [
          createVNode(unref(N8nText), {
            bold: true,
            color: "text-dark",
            size: "large"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.waitNodeWaiting.title")), 1)
            ]),
            _: 1
          }),
          withDirectives(createVNode(unref(N8nText), null, null, 512), [
            [_directive_n8n_html, unref(waitingNodeTooltip)(node.value)]
          ])
        ]),
        "no-output-data": withCtx(() => [
          createVNode(unref(N8nText), {
            bold: true,
            color: "text-dark",
            size: "large"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.title")), 1)
            ]),
            _: 1
          }),
          createVNode(unref(N8nText), null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.message")) + " ", 1),
              createBaseVNode("a", { onClick: openSettings }, toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.message.settings")), 1),
              createTextVNode(" " + toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.message.settingsOption")), 1)
            ]),
            _: 1
          })
        ]),
        "recovered-artificial-output-data": withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.recoveredOutputData)
          }, [
            createVNode(unref(N8nText), {
              tag: "div",
              bold: true,
              color: "text-dark",
              size: "large"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("executionDetails.executionFailed.recoveredNodeTitle")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nText), null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("executionDetails.executionFailed.recoveredNodeMessage")), 1)
              ]),
              _: 1
            })
          ], 2)
        ]),
        _: 2
      }, [
        outputMode.value === "logs" && node.value ? {
          name: "content",
          fn: withCtx(() => [
            createVNode(RunDataAi, {
              node: node.value,
              "run-index": _ctx.runIndex,
              "workflow-object": _ctx.workflowObject
            }, null, 8, ["node", "run-index", "workflow-object"])
          ]),
          key: "0"
        } : void 0,
        !unref(pinnedData).hasData.value && runsCount.value > 1 ? {
          name: "run-info",
          fn: withCtx(() => [
            createVNode(RunInfo, { "task-data": runTaskData.value }, null, 8, ["task-data"])
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["class", "node", "workflow-object", "run-index", "linked-runs", "can-link-runs", "too-much-data-title", "no-data-in-branch-message", "is-executing", "executing-message", "push-ref", "block-u-i", "is-production-execution-preview", "is-pane-active", "hide-pagination", "data-output-type", "callout-message", "display-mode", "collapsing-table-column-name"]);
    };
  }
});
const runData = "_runData_exq69_128";
const runDataV2 = "_runDataV2_exq69_132";
const outputTypeSelect = "_outputTypeSelect_exq69_136";
const titleSection = "_titleSection_exq69_141";
const titleSectionV2 = "_titleSectionV2_exq69_149";
const title = "_title_exq69_141";
const titleV2 = "_titleV2_exq69_161";
const noOutputData = "_noOutputData_exq69_166";
const recoveredOutputData = "_recoveredOutputData_exq69_176";
const link = "_link_exq69_185";
const style0$1 = {
  runData,
  runDataV2,
  outputTypeSelect,
  titleSection,
  titleSectionV2,
  title,
  titleV2,
  noOutputData,
  recoveredOutputData,
  link
};
const cssModules$1 = {
  "$style": style0$1
};
const OutputPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _hoisted_1 = { key: "empty" };
const _hoisted_2 = { key: "listening" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: "default" };
const _hoisted_7 = {
  key: 0,
  class: "mb-xl"
};
const _hoisted_8 = ["textContent"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TriggerPanel",
  props: {
    nodeName: {},
    pushRef: { default: "" }
  },
  emits: ["activate", "execute"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const nodesTypeStore = useNodeTypesStore();
    const uiStore = useUIStore();
    const workflowsStore = useWorkflowsStore();
    const ndvStore = useNDVStore();
    const router = useRouter();
    const workflowHelpers = useWorkflowHelpers();
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const executionsHelpEventBus = createEventBus();
    const help = ref(null);
    const node = computed(() => workflowsStore.getNodeByName(props.nodeName));
    const nodeType = computed(() => {
      if (node.value) {
        return nodesTypeStore.getNodeType(node.value.type, node.value.typeVersion);
      }
      return null;
    });
    const triggerPanel = computed(() => {
      const panel = nodeType.value?.triggerPanel;
      if (isTriggerPanelObject(panel)) {
        return panel;
      }
      return void 0;
    });
    const hideContent = computed(() => {
      const hideContent2 = triggerPanel.value?.hideContent;
      if (typeof hideContent2 === "boolean") {
        return hideContent2;
      }
      if (node.value) {
        const hideContentValue = workflowsStore.workflowObject.expression.getSimpleParameterValue(
          node.value,
          hideContent2,
          "internal",
          {}
        );
        if (typeof hideContentValue === "boolean") {
          return hideContentValue;
        }
      }
      return false;
    });
    const hasIssues = computed(() => {
      return Boolean(
        node.value?.issues && (node.value.issues.parameters ?? node.value.issues.credentials)
      );
    });
    const serviceName = computed(() => {
      if (nodeType.value) {
        return getTriggerNodeServiceName(nodeType.value);
      }
      return "";
    });
    const displayChatButton = computed(() => {
      return Boolean(
        node.value && node.value.type === CHAT_TRIGGER_NODE_TYPE && node.value.parameters.mode !== "webhook"
      );
    });
    const isWebhookNode = computed(() => {
      return Boolean(node.value && node.value.type === WEBHOOK_NODE_TYPE);
    });
    const webhookHttpMethod = computed(() => {
      if (!node.value || !nodeType.value?.webhooks?.length) {
        return void 0;
      }
      const httpMethod = workflowHelpers.getWebhookExpressionValue(
        nodeType.value.webhooks[0],
        "httpMethod",
        false
      );
      if (Array.isArray(httpMethod)) {
        return httpMethod.join(", ");
      }
      return httpMethod;
    });
    const webhookTestUrl = computed(() => {
      if (!node.value || !nodeType.value?.webhooks?.length) {
        return void 0;
      }
      return workflowHelpers.getWebhookUrl(nodeType.value.webhooks[0], node.value, "test");
    });
    const isWebhookBasedNode = computed(() => {
      return Boolean(nodeType.value?.webhooks?.length);
    });
    const isPollingNode = computed(() => {
      return Boolean(nodeType.value?.polling);
    });
    const isListeningForEvents = computed(() => {
      const waitingOnWebhook = workflowsStore.executionWaitingForWebhook;
      const executedNode = workflowsStore.executedNode;
      return !!node.value && !node.value.disabled && isWebhookBasedNode.value && waitingOnWebhook && (!executedNode || executedNode === props.nodeName);
    });
    const workflowRunning = computed(() => workflowsStore.isWorkflowRunning);
    const isActivelyPolling = computed(() => {
      const triggeredNode = workflowsStore.executedNode;
      return workflowRunning.value && isPollingNode.value && props.nodeName === triggeredNode;
    });
    const isWorkflowActive = computed(() => {
      return workflowsStore.isWorkflowActive;
    });
    const listeningTitle = computed(() => {
      return nodeType.value?.name === FORM_TRIGGER_NODE_TYPE ? i18n.baseText("ndv.trigger.webhookNode.formTrigger.listening") : i18n.baseText("ndv.trigger.webhookNode.listening");
    });
    const listeningHint = computed(() => {
      switch (nodeType.value?.name) {
        case CHAT_TRIGGER_NODE_TYPE:
          return i18n.baseText("ndv.trigger.webhookBasedNode.chatTrigger.serviceHint");
        case FORM_TRIGGER_NODE_TYPE:
          return i18n.baseText("ndv.trigger.webhookBasedNode.formTrigger.serviceHint");
        default:
          return i18n.baseText("ndv.trigger.webhookBasedNode.serviceHint", {
            interpolate: { service: serviceName.value }
          });
      }
    });
    const header2 = computed(() => {
      if (isActivelyPolling.value) {
        return i18n.baseText("ndv.trigger.pollingNode.fetchingEvent");
      }
      if (triggerPanel.value?.header) {
        return triggerPanel.value.header;
      }
      if (isWebhookBasedNode.value) {
        return i18n.baseText("ndv.trigger.webhookBasedNode.action", {
          interpolate: { name: serviceName.value }
        });
      }
      return "";
    });
    const subheader = computed(() => {
      if (isActivelyPolling.value) {
        return i18n.baseText("ndv.trigger.pollingNode.fetchingHint", {
          interpolate: { name: serviceName.value }
        });
      }
      return "";
    });
    const executionsHelp = computed(() => {
      if (triggerPanel.value?.executionsHelp) {
        if (typeof triggerPanel.value.executionsHelp === "string") {
          return triggerPanel.value.executionsHelp;
        }
        if (!isWorkflowActive.value && triggerPanel.value.executionsHelp.inactive) {
          return triggerPanel.value.executionsHelp.inactive;
        }
        if (isWorkflowActive.value && triggerPanel.value.executionsHelp.active) {
          return triggerPanel.value.executionsHelp.active;
        }
      }
      if (isWebhookBasedNode.value) {
        if (isWorkflowActive.value) {
          return i18n.baseText("ndv.trigger.webhookBasedNode.executionsHelp.active", {
            interpolate: { service: serviceName.value }
          });
        } else {
          return i18n.baseText("ndv.trigger.webhookBasedNode.executionsHelp.inactive", {
            interpolate: { service: serviceName.value }
          });
        }
      }
      if (isPollingNode.value) {
        if (isWorkflowActive.value) {
          return i18n.baseText("ndv.trigger.pollingNode.executionsHelp.active", {
            interpolate: { service: serviceName.value }
          });
        } else {
          return i18n.baseText("ndv.trigger.pollingNode.executionsHelp.inactive", {
            interpolate: { service: serviceName.value }
          });
        }
      }
      return "";
    });
    const activationHint = computed(() => {
      if (isActivelyPolling.value || !triggerPanel.value) {
        return "";
      }
      if (triggerPanel.value.activationHint) {
        if (typeof triggerPanel.value.activationHint === "string") {
          return triggerPanel.value.activationHint;
        }
        if (!isWorkflowActive.value && typeof triggerPanel.value.activationHint.inactive === "string") {
          return triggerPanel.value.activationHint.inactive;
        }
        if (isWorkflowActive.value && typeof triggerPanel.value.activationHint.active === "string") {
          return triggerPanel.value.activationHint.active;
        }
      }
      if (isWebhookBasedNode.value) {
        if (isWorkflowActive.value) {
          return i18n.baseText("ndv.trigger.webhookBasedNode.activationHint.active", {
            interpolate: { service: serviceName.value }
          });
        } else {
          return i18n.baseText("ndv.trigger.webhookBasedNode.activationHint.inactive", {
            interpolate: { service: serviceName.value }
          });
        }
      }
      if (isPollingNode.value) {
        if (isWorkflowActive.value) {
          return i18n.baseText("ndv.trigger.pollingNode.activationHint.active", {
            interpolate: { service: serviceName.value }
          });
        } else {
          return i18n.baseText("ndv.trigger.pollingNode.activationHint.inactive", {
            interpolate: { service: serviceName.value }
          });
        }
      }
      return "";
    });
    const expandExecutionHelp = () => {
      if (help.value) {
        executionsHelpEventBus.emit("expand");
      }
    };
    const openWebhookUrl = () => {
      telemetry.track("User clicked ndv link", {
        workflow_id: workflowsStore.workflowId,
        push_ref: props.pushRef,
        pane: "input",
        type: "open-chat"
      });
      window.open(webhookTestUrl.value, "_blank", "noreferrer");
    };
    const onLinkClick = (e) => {
      if (!e.target) {
        return;
      }
      const target = e.target;
      if (target.localName !== "a") return;
      if (target.dataset?.key) {
        e.stopPropagation();
        e.preventDefault();
        if (target.dataset.key === "activate") {
          emit("activate");
        } else if (target.dataset.key === "executions") {
          telemetry.track("User clicked ndv link", {
            workflow_id: workflowsStore.workflowId,
            push_ref: props.pushRef,
            pane: "input",
            type: "open-executions-log"
          });
          ndvStore.activeNodeName = null;
          void router.push({
            name: VIEWS.EXECUTIONS
          });
        } else if (target.dataset.key === "settings") {
          uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
        }
      }
    };
    const onTestLinkCopied = () => {
      telemetry.track("User copied webhook URL", {
        pane: "inputs",
        type: "test url"
      });
    };
    const onNodeExecute = () => {
      emit("execute");
    };
    return (_ctx, _cache) => {
      const _component_n8n_pulse = N8nPulse;
      const _component_n8n_text = N8nText;
      const _component_n8n_button = N8nButton;
      const _component_n8n_spinner = _sfc_main$b;
      const _component_n8n_heading = N8nHeading;
      const _component_n8n_link = N8nLink;
      const _component_n8n_info_accordion = N8nInfoAccordion;
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(Transition, {
          name: "fade",
          mode: "out-in"
        }, {
          default: withCtx(() => [
            hasIssues.value || hideContent.value ? (openBlock(), createElementBlock("div", _hoisted_1)) : isListeningForEvents.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createVNode(_component_n8n_pulse, null, {
                default: withCtx(() => [
                  createVNode(NodeIcon, {
                    "node-type": nodeType.value,
                    size: 40
                  }, null, 8, ["node-type"])
                ]),
                _: 1
              }),
              isWebhookNode.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
                createVNode(_component_n8n_text, {
                  tag: "div",
                  size: "large",
                  color: "text-dark",
                  class: "mb-2xs",
                  bold: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.webhookNode.listening")), 1)
                  ]),
                  _: 1
                }),
                createBaseVNode("div", {
                  class: normalizeClass([_ctx.$style.shake, "mb-xs"])
                }, [
                  createVNode(_component_n8n_text, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.webhookNode.requestHint", {
                        interpolate: { type: webhookHttpMethod.value ?? "" }
                      })), 1)
                    ]),
                    _: 1
                  })
                ], 2),
                createVNode(CopyInput, {
                  value: webhookTestUrl.value,
                  "toast-title": unref(i18n).baseText("ndv.trigger.copiedTestUrl"),
                  class: "mb-2xl",
                  size: "medium",
                  collapse: true,
                  "copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
                  onCopy: onTestLinkCopied
                }, null, 8, ["value", "toast-title", "copy-button-text"]),
                createVNode(_sfc_main$a, {
                  "data-test-id": "trigger-execute-button",
                  "node-name": _ctx.nodeName,
                  size: "medium",
                  "telemetry-source": "inputs",
                  onExecute: onNodeExecute
                }, null, 8, ["node-name"])
              ])) : (openBlock(), createElementBlock("div", _hoisted_4, [
                createVNode(_component_n8n_text, {
                  tag: "div",
                  size: "large",
                  color: "text-dark",
                  class: "mb-2xs",
                  bold: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(listeningTitle.value), 1)
                  ]),
                  _: 1
                }),
                createBaseVNode("div", {
                  class: normalizeClass([_ctx.$style.shake, "mb-xs"])
                }, [
                  createVNode(_component_n8n_text, { tag: "div" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(listeningHint.value), 1)
                    ]),
                    _: 1
                  })
                ], 2),
                displayChatButton.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
                  createVNode(_component_n8n_button, {
                    class: "mb-xl",
                    onClick: _cache[0] || (_cache[0] = ($event) => openWebhookUrl())
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.chatTrigger.openChat")), 1)
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true),
                createVNode(_sfc_main$a, {
                  "data-test-id": "trigger-execute-button",
                  "node-name": _ctx.nodeName,
                  size: "medium",
                  "telemetry-source": "inputs",
                  onExecute: onNodeExecute
                }, null, 8, ["node-name"])
              ]))
            ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
              isActivelyPolling.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
                createVNode(_component_n8n_spinner, { type: "ring" })
              ])) : createCommentVNode("", true),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.action)
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.header)
                }, [
                  header2.value ? (openBlock(), createBlock(_component_n8n_heading, {
                    key: 0,
                    tag: "h1",
                    bold: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(header2.value), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  subheader.value ? (openBlock(), createBlock(_component_n8n_text, { key: 1 }, {
                    default: withCtx(() => [
                      createBaseVNode("span", {
                        textContent: toDisplayString(subheader.value)
                      }, null, 8, _hoisted_8)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ], 2),
                createVNode(_sfc_main$a, {
                  "data-test-id": "trigger-execute-button",
                  "node-name": _ctx.nodeName,
                  size: "medium",
                  "telemetry-source": "inputs",
                  onExecute: onNodeExecute
                }, null, 8, ["node-name"])
              ], 2),
              activationHint.value ? (openBlock(), createBlock(_component_n8n_text, {
                key: 1,
                size: "small",
                onClick: onLinkClick
              }, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("span", null, null, 512), [
                    [_directive_n8n_html, activationHint.value]
                  ]),
                  _cache[1] || (_cache[1] = createTextVNode("  "))
                ]),
                _: 1
              })) : createCommentVNode("", true),
              activationHint.value && executionsHelp.value ? (openBlock(), createBlock(_component_n8n_link, {
                key: 2,
                size: "small",
                onClick: expandExecutionHelp
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.moreInfo")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              executionsHelp.value ? (openBlock(), createBlock(_component_n8n_info_accordion, {
                key: 3,
                ref_key: "help",
                ref: help,
                class: normalizeClass(_ctx.$style.accordion),
                title: unref(i18n).baseText("ndv.trigger.executionsHint.question"),
                description: executionsHelp.value,
                "event-bus": unref(executionsHelpEventBus),
                "onClick:body": onLinkClick
              }, null, 8, ["class", "title", "description", "event-bus"])) : createCommentVNode("", true)
            ]))
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const container = "_container_1mcl9_123";
const header = "_header_1mcl9_140";
const action = "_action_1mcl9_147";
const shake = "_shake_1mcl9_151";
const accordion = "_accordion_1mcl9_172";
const style0 = {
  container,
  header,
  action,
  shake,
  accordion
};
const cssModules = {
  "$style": style0
};
const TriggerPanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules], ["__scopeId", "data-v-3f9ddfbe"]]);
export {
  OutputPanel as O,
  TriggerPanel as T,
  __unplugin_components_0 as _
};
