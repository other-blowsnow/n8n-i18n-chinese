import { d as defineComponent, h as createElementBlock, g as openBlock, n as normalizeClass, j as createBaseVNode, J as renderSlot, _ as _export_sfc, a4 as useWorkflowsStore, bG as useNodeTypesStore, di as usePostHog, x as computed, dl as NDV_UI_OVERHAUL_EXPERIMENT, bo as NodeConnectionTypes, o as onMounted, I as onBeforeUnmount, F as Fragment, y as renderList, e as createBlock, f as createCommentVNode, $ as N8nTooltip, w as withCtx, i as createVNode, bP as _sfc_main$c, k as createTextVNode, t as toDisplayString, iw as convertToDisplayDateComponents, c4 as resolveDirective, l as unref, f6 as InfoTip, aS as withDirectives, c as useI18n, p as N8nText, bJ as getDefaultExportFromCjs, ix as requireCapitalize, r as ref, gF as parseAiContent, N as N8nIcon, H as N8nRadioButtons, bI as formatTokenUsageCount, aa as watch, iy as ElTree, P as normalizeStyle, aM as useNDVStore, fy as storeToRefs, v as useSettingsStore, dW as useNodeDirtiness, gz as useNodeType, bz as usePinnedData, cV as CanvasNodeDirtiness, O as resolveComponent, bf as createSlots, c5 as waitingNodeTooltip, dd as _sfc_main$f, aT as vShow, ay as useTelemetry, cy as isPresent, fi as N8nSelect, fj as _sfc_main$g, iz as truncate, gV as createStaticVNode, bH as START_NODE_TYPE, i6 as MANUAL_TRIGGER_NODE_TYPE, iA as CRON_NODE_TYPE, iB as INTERVAL_NODE_TYPE, dc as getNodeInputs, dZ as getNodeOutputs, iC as uniqBy, bY as resolveDynamicComponent, bO as withModifiers, T as useUIStore, b as useRouter, ak as useWorkflowHelpers, iD as isTriggerPanelObject, d_ as getTriggerNodeServiceName, bx as CHAT_TRIGGER_NODE_TYPE, ic as WEBHOOK_NODE_TYPE, d4 as FORM_TRIGGER_NODE_TYPE, g5 as CopyInput, q as N8nButton, eV as _sfc_main$h, m as N8nHeading, a1 as N8nLink, Q as createEventBus, dK as Transition, V as VIEWS, aC as WORKFLOW_SETTINGS_MODAL_KEY } from "./index-BSyItHSy.js";
import { b as _sfc_main$d, c as ViewSubExecution, _ as _sfc_main$e, R as RunData } from "./RunData-DYp1JF8T.js";
import { R as RunDataAi$1, g as getConsumedTokens, c as createAiData, a as getTreeNodeData, b as getReferencedData } from "./RunDataParsedAiContent-ivCbchOM.js";
import { N as N8nInfoAccordion } from "./InfoAccordion-OBPmwlN-.js";
const _sfc_main$b = /* @__PURE__ */ defineComponent({
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
const style0$a = {
  pulseContainer,
  pulse,
  pulse2
};
const cssModules$a = {
  "$style": style0$a
};
const N8nPulse = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__cssModules", cssModules$a]]);
const _hoisted_1$5 = ["data-node-name", "data-node-placement", "onClick"];
const _sfc_main$a = /* @__PURE__ */ defineComponent({
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
        const node2 = workflowsStore.getNodeByName(name);
        if (node2) {
          const nodeType = nodeTypesStore.getNodeType(node2.type);
          if (nodeType) {
            return { node: node2, nodeType };
          }
        }
        return null;
      }).filter((n) => n !== null);
    }
    const connectedNodes = computed(() => {
      const workflow = workflowsStore.getCurrentWorkflow();
      const rootName = props.rootNode.name;
      return {
        [
          "outputSub"
          /* top */
        ]: getINodesFromNames(
          workflow.getChildNodes(rootName, "ALL_NON_MAIN")
        ),
        [
          "outputMain"
          /* right */
        ]: getINodesFromNames(
          workflow.getChildNodes(rootName, NodeConnectionTypes.Main, 1)
        ).reverse(),
        [
          "inputMain"
          /* left */
        ]: getINodesFromNames(
          workflow.getParentNodes(rootName, NodeConnectionTypes.Main, 1)
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
            (openBlock(true), createElementBlock(Fragment, null, renderList(connectedNodes.value[connectionGroup], ({ node: node2, nodeType }) => {
              return openBlock(), createElementBlock(Fragment, null, [
                node2 && nodeType ? (openBlock(), createBlock(_component_n8n_tooltip, {
                  key: node2.name,
                  placement: tooltipPositionMapper[connectionGroup],
                  teleported: false,
                  offset: isNDVV2.value ? 16 : 60
                }, {
                  content: withCtx(() => [
                    createTextVNode(toDisplayString(node2.name), 1)
                  ]),
                  default: withCtx(() => [
                    createBaseVNode("li", {
                      class: normalizeClass(_ctx.$style.connectedNode),
                      "data-test-id": "floating-node",
                      "data-node-name": node2.name,
                      "data-node-placement": connectionGroup,
                      onClick: ($event) => emit("switchSelectedNode", node2.name)
                    }, [
                      createVNode(_sfc_main$c, {
                        "node-type": nodeType,
                        "node-name": node2.name,
                        "tooltip-position": tooltipPositionMapper[connectionGroup],
                        size: isNDVV2.value ? 24 : 35,
                        circle: ""
                      }, null, 8, ["node-type", "node-name", "tooltip-position", "size"])
                    ], 10, _hoisted_1$5)
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
const floatingNodes = "_floatingNodes_1o49e_123";
const nodesList = "_nodesList_1o49e_137";
const inputSub = "_inputSub_1o49e_151";
const outputSub = "_outputSub_1o49e_151";
const outputMain = "_outputMain_1o49e_162";
const inputMain = "_inputMain_1o49e_162";
const connectedNode = "_connectedNode_1o49e_185";
const v2 = "_v2_1o49e_233";
const style0$9 = {
  floatingNodes,
  nodesList,
  inputSub,
  outputSub,
  outputMain,
  inputMain,
  connectedNode,
  v2
};
const cssModules$9 = {
  "$style": style0$9
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__cssModules", cssModules$9]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "NDVEmptyState",
  props: {
    title: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("article", {
        class: normalizeClass(_ctx.$style.empty)
      }, [
        renderSlot(_ctx.$slots, "icon"),
        createBaseVNode("h1", {
          class: normalizeClass(_ctx.$style.title)
        }, toDisplayString(_ctx.title), 3),
        createBaseVNode("p", {
          class: normalizeClass(_ctx.$style.description)
        }, [
          renderSlot(_ctx.$slots, "description")
        ], 2)
      ], 2);
    };
  }
});
const empty$1 = "_empty_1x72k_2";
const title$5 = "_title_1x72k_13";
const description = "_description_1x72k_20";
const style0$8 = {
  empty: empty$1,
  title: title$5,
  description
};
const cssModules$8 = {
  "$style": style0$8
};
const NDVEmptyState = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__cssModules", cssModules$8]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
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
const style0$7 = {
  tooltipRow
};
const cssModules$7 = {
  "$style": style0$7
};
const RunInfo = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__cssModules", cssModules$7]]);
var capitalizeExports = requireCapitalize();
const capitalize = /* @__PURE__ */ getDefaultExportFromCjs(capitalizeExports);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
      const _component_NodeErrorView = _sfc_main$d;
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
const style0$6 = {
  block,
  blockContent,
  blockContentExpanded,
  rawSwitch,
  blockHeader,
  blockTitle,
  blockToggle,
  error
};
const cssModules$6 = {
  "$style": style0$6
};
const AiRunContentBlock = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__cssModules", cssModules$6]]);
const _hoisted_1$4 = { key: 0 };
const _hoisted_2$2 = { key: 1 };
const _hoisted_3$2 = { key: 2 };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
          runMeta.value?.node ? (openBlock(), createBlock(_sfc_main$c, {
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
              runMeta.value?.startTimeMs ? (openBlock(), createElementBlock("li", _hoisted_1$4, toDisplayString(runMeta.value?.executionTimeMs) + "ms", 1)) : createCommentVNode("", true),
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
                    createVNode(_sfc_main$e, { "consumed-tokens": consumedTokensSum.value }, null, 8, ["consumed-tokens"])
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
const title$4 = "_title_dypaw_18";
const meta = "_meta_dypaw_25";
const tokensUsage = "_tokensUsage_dypaw_41";
const style0$5 = {
  container: container$2,
  nodeIcon: nodeIcon$1,
  header: header$1,
  headerWrap,
  title: title$4,
  meta,
  tokensUsage
};
const cssModules$5 = {
  "$style": style0$5
};
const RunDataAiContent = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__cssModules", cssModules$5]]);
const _hoisted_1$3 = ["data-tree-depth"];
const _hoisted_2$1 = ["onClick"];
const _hoisted_3$1 = ["textContent"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
    const aiData = computed(
      () => createAiData(props.node.name, props.workflow, workflowsStore.getWorkflowResultDataByNodeName)
    );
    const executionTree = computed(
      () => getTreeNodeData(props.node.name, props.workflow, aiData.value, props.runIndex)
    );
    function isTreeNodeSelected(node2) {
      return selectedRun.value.some((run) => run.node === node2.node && run.runIndex === node2.runIndex);
    }
    function toggleTreeItem(node2) {
      node2.expanded = !node2.expanded;
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
      const node2 = workflowsStore.getNodeByName(nodeName);
      if (!node2) {
        return null;
      }
      const nodeType = nodeTypesStore.getNodeType(node2?.type);
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
                        createVNode(_sfc_main$c, {
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
                ], 14, _hoisted_1$3)
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
const title$3 = "_title_1qaq4_149";
const tree = "_tree_1qaq4_123";
const slim = "_slim_1qaq4_161";
const runData$2 = "_runData_1qaq4_165";
const container$1 = "_container_1qaq4_171";
const nodeIcon = "_nodeIcon_1qaq4_198";
const isSelected = "_isSelected_1qaq4_204";
const treeNode = "_treeNode_1qaq4_208";
const style0$4 = {
  treeToggle,
  leafLabel,
  noData,
  empty,
  title: title$3,
  tree,
  slim,
  runData: runData$2,
  container: container$1,
  nodeIcon,
  isSelected,
  treeNode
};
const cssModules$4 = {
  "$style": style0$4
};
const RunDataAi = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__cssModules", cssModules$4]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "OutputPanel",
  props: {
    workflow: {},
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
    const node2 = computed(() => {
      return ndvStore.activeNode ?? void 0;
    });
    const isTriggerNode = computed(() => {
      return !!node2.value && nodeTypesStore.isTriggerNode(node2.value.type);
    });
    const hasAiMetadata = computed(() => {
      if (isNodeRunning.value || !workflowRunData.value) {
        return false;
      }
      if (node2.value) {
        const connectedSubNodes = props.workflow.getParentNodes(node2.value.name, "ALL_NON_MAIN");
        const resultData = connectedSubNodes.map(workflowsStore.getWorkflowResultDataByNodeName);
        return resultData && Array.isArray(resultData) && resultData.length > 0;
      }
      return false;
    });
    const hasError = computed(
      () => Boolean(
        workflowRunData.value && node2.value && workflowRunData.value[node2.value.name]?.[props.runIndex]?.error
      )
    );
    const defaultOutputMode = computed(() => {
      return hasError.value && hasAiMetadata.value ? OUTPUT_TYPE.LOGS : OUTPUT_TYPE.REGULAR;
    });
    const isNodeRunning = computed(() => {
      return workflowRunning.value && !!node2.value && workflowsStore.isNodeExecuting(node2.value.name);
    });
    const workflowRunning = computed(() => workflowsStore.isWorkflowRunning);
    const workflowExecution = computed(() => {
      return workflowsStore.getWorkflowExecution;
    });
    const workflowRunData = computed(() => {
      if (workflowExecution.value === null) {
        return null;
      }
      const executionData = workflowExecution.value.data;
      if (!executionData?.resultData?.runData) {
        return null;
      }
      return executionData.resultData.runData;
    });
    const hasNodeRun = computed(() => {
      if (workflowsStore.subWorkflowExecutionError) return true;
      return Boolean(
        node2.value && workflowRunData.value && workflowRunData.value.hasOwnProperty(node2.value.name)
      );
    });
    const runTaskData = computed(() => {
      if (!node2.value || workflowExecution.value === null) {
        return null;
      }
      const runData2 = workflowRunData.value;
      if (!runData2?.hasOwnProperty(node2.value.name)) {
        return null;
      }
      if (runData2[node2.value.name].length <= props.runIndex) {
        return null;
      }
      return runData2[node2.value.name][props.runIndex];
    });
    const runsCount = computed(() => {
      if (node2.value === null) {
        return 0;
      }
      const runData2 = workflowRunData.value;
      if (runData2 === null || node2.value && !runData2.hasOwnProperty(node2.value.name)) {
        return 0;
      }
      if (node2.value && runData2[node2.value.name].length) {
        return runData2[node2.value.name].length;
      }
      return 0;
    });
    const staleData = computed(() => {
      if (!node2.value) {
        return false;
      }
      if (settings.partialExecutionVersion === 2) {
        return dirtinessByName.value[node2.value.name] === CanvasNodeDirtiness.PARAMETERS_UPDATED;
      }
      const updatedAt = workflowsStore.getParametersLastUpdate(node2.value.name);
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
      if (!node2.value || runsCount.value === 0 || hasError.value) return void 0;
      if (pinnedData.hasData.value) return void 0;
      const toolsAvailable = props.workflow.getParentNodes(
        node2.value.name,
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
        node_type: node2.value?.type,
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
        node_type: node2.value?.type,
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
      const _component_NodeExecuteButton = _sfc_main$f;
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_NDVEmptyState = NDVEmptyState;
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createBlock(RunData, {
        ref_key: "runDataRef",
        ref: runDataRef,
        class: normalizeClass(_ctx.$style.runData),
        node: node2.value,
        workflow: _ctx.workflow,
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
            hasNodeRun.value && !unref(pinnedData).hasData.value && (runsCount.value === 1 || runsCount.value > 0 && staleData.value) ? withDirectives((openBlock(), createBlock(RunInfo, {
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
              createVNode(_component_i18n_t, {
                tag: "span",
                keypath: unref(isSubNodeType) ? "ndv.output.runNodeHintSubNode" : "ndv.output.noOutputData.v2.description"
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
            [_directive_n8n_html, unref(waitingNodeTooltip)(node2.value)]
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
        outputMode.value === "logs" && node2.value ? {
          name: "content",
          fn: withCtx(() => [
            createVNode(RunDataAi, {
              node: node2.value,
              "run-index": _ctx.runIndex,
              workflow: _ctx.workflow
            }, null, 8, ["node", "run-index", "workflow"])
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
      ]), 1032, ["class", "node", "workflow", "run-index", "linked-runs", "can-link-runs", "too-much-data-title", "no-data-in-branch-message", "is-executing", "executing-message", "push-ref", "block-u-i", "is-production-execution-preview", "is-pane-active", "hide-pagination", "data-output-type", "callout-message", "display-mode", "collapsing-table-column-name"]);
    };
  }
});
const runData$1 = "_runData_16mi2_128";
const outputTypeSelect = "_outputTypeSelect_16mi2_132";
const titleSection$1 = "_titleSection_16mi2_137";
const titleSectionV2$1 = "_titleSectionV2_16mi2_145";
const title$2 = "_title_16mi2_137";
const titleV2$1 = "_titleV2_16mi2_157";
const noOutputData$1 = "_noOutputData_16mi2_162";
const recoveredOutputData$1 = "_recoveredOutputData_16mi2_172";
const link = "_link_16mi2_181";
const style0$3 = {
  runData: runData$1,
  outputTypeSelect,
  titleSection: titleSection$1,
  titleSectionV2: titleSectionV2$1,
  title: title$2,
  titleV2: titleV2$1,
  noOutputData: noOutputData$1,
  recoveredOutputData: recoveredOutputData$1,
  link
};
const cssModules$3 = {
  "$style": style0$3
};
const OutputPanel = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__cssModules", cssModules$3]]);
const _hoisted_1$2 = { key: 0 };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "InputNodeSelect",
  props: {
    nodes: {},
    workflow: {},
    modelValue: {}
  },
  emits: ["update:model-value"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const i18n = useI18n();
    const workflowsStore = useWorkflowsStore();
    const nodeTypesStore = useNodeTypesStore();
    const ndvStore = useNDVStore();
    const selectedInputNode = computed(() => workflowsStore.getNodeByName(props.modelValue ?? ""));
    const selectedInputNodeType = computed(() => {
      const node2 = selectedInputNode.value;
      if (!node2) return null;
      return nodeTypesStore.getNodeType(node2.type, node2.typeVersion);
    });
    const inputNodes = computed(
      () => props.nodes?.map((node2) => {
        const fullNode = workflowsStore.getNodeByName(node2.name);
        if (!fullNode) return null;
        return {
          node: fullNode,
          type: nodeTypesStore.getNodeType(fullNode.type, fullNode.typeVersion),
          depth: node2.depth
        };
      }).filter(isPresent) ?? []
    );
    const activeNode = computed(() => ndvStore.activeNode);
    const activeNodeType = computed(() => {
      const node2 = activeNode.value;
      if (!node2) return null;
      return nodeTypesStore.getNodeType(node2.type, node2.typeVersion);
    });
    const isMultiInputNode = computed(() => {
      const nodeType = activeNodeType.value;
      return nodeType !== null && nodeType.inputs.length > 1;
    });
    const connectedTo = (nodeName) => {
      const connections = ndvStore.ndvNodeInputNumber[nodeName];
      if (!connections) return "";
      if (connections.length === 1) {
        return `Input ${ndvStore.ndvNodeInputNumber[nodeName]}`;
      }
      return `Inputs ${ndvStore.ndvNodeInputNumber[nodeName].join(", ")}`;
    };
    function getMultipleNodesText(nodeName) {
      if (!nodeName || !isMultiInputNode.value || !activeNode.value || !activeNodeType.value?.inputNames)
        return "";
      const activeNodeConnections = props.workflow.connectionsByDestinationNode[activeNode.value.name].main || [];
      const connectedInputIndexes = activeNodeConnections.reduce((acc, node2, index) => {
        if (node2?.[0] && node2[0].node === nodeName) return [...acc, index];
        return acc;
      }, []);
      const connectedInputs = connectedInputIndexes.map(
        (inputIndex) => activeNodeType.value?.inputNames?.[inputIndex]
      );
      if (connectedInputs.length === 0) return "";
      return `(${connectedInputs.join(" & ")})`;
    }
    function title2(nodeName, length = 30) {
      return truncate(nodeName, length);
    }
    function subtitle2(nodeName, depth) {
      const multipleNodesText = getMultipleNodesText(nodeName);
      if (multipleNodesText) return multipleNodesText;
      return i18n.baseText("ndv.input.nodeDistance", { adjustToNumber: depth });
    }
    function onInputNodeChange(value) {
      emit("update:model-value", value);
    }
    return (_ctx, _cache) => {
      const _component_n8n_option = _sfc_main$g;
      const _component_n8n_select = N8nSelect;
      return openBlock(), createBlock(_component_n8n_select, {
        "model-value": _ctx.modelValue,
        "no-data-text": unref(i18n).baseText("ndv.input.noNodesFound"),
        placeholder: unref(i18n).baseText("ndv.input.parentNodes"),
        class: normalizeClass(_ctx.$style.select),
        teleported: "",
        size: "small",
        filterable: "",
        "data-test-id": "ndv-input-select",
        "onUpdate:modelValue": onInputNodeChange
      }, {
        prefix: withCtx(() => [
          createVNode(_sfc_main$c, {
            disabled: selectedInputNode.value?.disabled,
            "node-type": selectedInputNodeType.value,
            size: 14,
            shrink: false
          }, null, 8, ["disabled", "node-type"])
        ]),
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(inputNodes.value, ({ node: node2, type, depth }) => {
            return openBlock(), createBlock(_component_n8n_option, {
              key: node2.name,
              value: node2.name,
              class: normalizeClass([_ctx.$style.node, { [_ctx.$style.disabled]: node2.disabled }]),
              label: `${title2(node2.name)} ${getMultipleNodesText(node2.name)}`,
              "data-test-id": "ndv-input-option"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$c, {
                  disabled: node2.disabled,
                  "node-type": type,
                  size: 14,
                  shrink: false,
                  class: normalizeClass(_ctx.$style.icon)
                }, null, 8, ["disabled", "node-type", "class"]),
                createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.title)
                }, [
                  createTextVNode(toDisplayString(title2(node2.name)) + " ", 1),
                  node2.disabled ? (openBlock(), createElementBlock("span", _hoisted_1$2, "(" + toDisplayString(unref(i18n).baseText("node.disabled")) + ")", 1)) : createCommentVNode("", true)
                ], 2),
                createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.subtitle)
                }, toDisplayString(connectedTo(node2.name) ? connectedTo(node2.name) : subtitle2(node2.name, depth)), 3)
              ]),
              _: 2
            }, 1032, ["value", "class", "label"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["model-value", "no-data-text", "placeholder", "class"]);
    };
  }
});
const select = "_select_wv0ev_123";
const node = "_node_wv0ev_132";
const icon = "_icon_wv0ev_140";
const title$1 = "_title_wv0ev_144";
const disabled = "_disabled_wv0ev_153";
const subtitle = "_subtitle_wv0ev_157";
const style0$2 = {
  select,
  node,
  icon,
  title: title$1,
  disabled,
  subtitle
};
const cssModules$2 = {
  "$style": style0$2
};
const InputNodeSelect = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$2]]);
const _sfc_main$2 = {};
const _hoisted_1$1 = {
  width: "112",
  height: "80",
  viewBox: "0 0 112 80",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    createStaticVNode('<mask id="mask0_489_46042" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="0" y="0" width="112" height="80"><rect width="112" height="80" fill="url(#paint0_linear_489_46042)"></rect></mask><g mask="url(#mask0_489_46042)"><rect x="-0.5" width="112" height="80" fill="url(#pattern0)" fill-opacity="0.6"></rect></g><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_489_46042" transform="scale(0.00357143 0.005)"></use></pattern><linearGradient id="paint0_linear_489_46042" x1="90.5" y1="40.4494" x2="112.5" y2="40.4494" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient><image id="image0_489_46042" width="280" height="200" xlink:href="data:image/png;base64,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"></image></defs>', 3)
  ]));
}
const WireMeUp = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InputPanel",
  props: {
    runIndex: {},
    workflow: {},
    pushRef: {},
    currentNodeName: { default: "" },
    canLinkRuns: { type: Boolean, default: false },
    linkedRuns: { type: Boolean },
    readOnly: { type: Boolean, default: false },
    isProductionExecutionPreview: { type: Boolean, default: false },
    isPaneActive: { type: Boolean, default: false },
    displayMode: {}
  },
  emits: ["itemHover", "tableMounted", "linkRun", "unlinkRun", "runChange", "search", "changeInputNode", "execute", "activatePane", "displayModeChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const showDraggableHintWithDelay = ref(false);
    const draggableHintShown = ref(false);
    const mappedNode2 = ref(null);
    const collapsingColumnName = ref(null);
    const inputModes = [
      { value: "mapping", label: i18n.baseText("ndv.input.mapping") },
      { value: "debugging", label: i18n.baseText("ndv.input.fromAI") }
    ];
    const nodeTypesStore = useNodeTypesStore();
    const ndvStore = useNDVStore();
    const workflowsStore = useWorkflowsStore();
    const posthogStore = usePostHog();
    const {
      activeNode,
      focusedMappableInput,
      isMappingOnboarded: isUserOnboarded
    } = storeToRefs(ndvStore);
    const rootNode = computed(() => {
      if (!activeNode.value) return null;
      return props.workflow.getChildNodes(activeNode.value.name, "ALL").at(0) ?? null;
    });
    const hasRootNodeRun = computed(() => {
      return !!(rootNode.value && workflowsStore.getWorkflowExecution?.data?.resultData.runData[rootNode.value]);
    });
    const inputMode = ref(
      // Show debugging mode by default only when the node has already run
      activeNode.value && workflowsStore.getWorkflowExecution?.data?.resultData.runData[activeNode.value.name] ? "debugging" : "mapping"
    );
    const isMappingMode = computed(() => isActiveNodeConfig.value && inputMode.value === "mapping");
    const showDraggableHint = computed(() => {
      const toIgnore = [START_NODE_TYPE, MANUAL_TRIGGER_NODE_TYPE, CRON_NODE_TYPE, INTERVAL_NODE_TYPE];
      if (!currentNode.value || toIgnore.includes(currentNode.value.type)) {
        return false;
      }
      return !!focusedMappableInput.value && !isUserOnboarded.value;
    });
    const isActiveNodeConfig = computed(() => {
      let inputs = activeNodeType.value?.inputs ?? [];
      let outputs = activeNodeType.value?.outputs ?? [];
      if (props.workflow && activeNode.value) {
        const node2 = props.workflow.getNode(activeNode.value.name);
        if (node2 && activeNodeType.value) {
          inputs = getNodeInputs(props.workflow, node2, activeNodeType.value);
          outputs = getNodeOutputs(props.workflow, node2, activeNodeType.value);
        }
      }
      if (!Array.isArray(inputs)) {
        inputs = [];
      }
      if (!Array.isArray(outputs)) {
        outputs = [];
      }
      return inputs.length === 0 || inputs.every((input) => filterOutConnectionType(input, NodeConnectionTypes.Main)) && outputs.find((output) => filterOutConnectionType(output, NodeConnectionTypes.Main));
    });
    const isMappingEnabled = computed(() => {
      if (props.readOnly) return false;
      if (isActiveNodeConfig.value) return isMappingMode.value && mappedNode2.value !== null;
      return true;
    });
    const isExecutingPrevious = computed(() => {
      if (!workflowsStore.isWorkflowRunning) {
        return false;
      }
      const triggeredNode = workflowsStore.executedNode;
      const executingNode = workflowsStore.executingNode;
      if (activeNode.value && triggeredNode === activeNode.value.name && workflowsStore.isNodeExecuting(props.currentNodeName)) {
        return true;
      }
      if (executingNode.length || triggeredNode) {
        return !!parentNodes.value.find(
          (node2) => workflowsStore.isNodeExecuting(node2.name) || node2.name === triggeredNode
        );
      }
      return false;
    });
    const rootNodesParents = computed(() => {
      if (!rootNode.value) return [];
      return props.workflow.getParentNodesByDepth(rootNode.value);
    });
    const currentNode = computed(() => {
      if (isActiveNodeConfig.value) {
        if (mappedNode2.value) {
          return workflowsStore.getNodeByName(mappedNode2.value);
        }
        return activeNode.value;
      }
      return workflowsStore.getNodeByName(props.currentNodeName ?? "");
    });
    const connectedCurrentNodeOutputs = computed(() => {
      const search = parentNodes.value.find(({ name }) => name === props.currentNodeName);
      return search?.indicies;
    });
    const parentNodes = computed(() => {
      if (!activeNode.value) {
        return [];
      }
      const parents = props.workflow.getParentNodesByDepth(activeNode.value.name).filter((parent) => parent.name !== activeNode.value?.name);
      return uniqBy(parents, (parent) => parent.name);
    });
    const currentNodeDepth = computed(() => {
      const node2 = parentNodes.value.find(
        (parent) => currentNode.value && parent.name === currentNode.value.name
      );
      return node2?.depth ?? -1;
    });
    const activeNodeType = computed(() => {
      if (!activeNode.value) return null;
      return nodeTypesStore.getNodeType(activeNode.value.type, activeNode.value.typeVersion);
    });
    const waitingMessage = computed(() => {
      const parentNode = parentNodes.value[0];
      return parentNode && waitingNodeTooltip(workflowsStore.getNodeByName(parentNode.name));
    });
    const isNDVV2 = computed(
      () => posthogStore.isVariantEnabled(
        NDV_UI_OVERHAUL_EXPERIMENT.name,
        NDV_UI_OVERHAUL_EXPERIMENT.variant
      )
    );
    watch(
      inputMode,
      (mode) => {
        onRunIndexChange(-1);
        if (mode === "mapping") {
          onUnlinkRun();
          mappedNode2.value = rootNodesParents.value[0]?.name ?? null;
        } else {
          mappedNode2.value = null;
        }
      },
      { immediate: true }
    );
    watch(showDraggableHint, (curr, prev) => {
      if (curr && !prev) {
        setTimeout(() => {
          if (draggableHintShown.value) {
            return;
          }
          showDraggableHintWithDelay.value = showDraggableHint.value;
          if (showDraggableHintWithDelay.value) {
            draggableHintShown.value = true;
            telemetry.track("User viewed data mapping tooltip", {
              type: "unexecuted input pane"
            });
          }
        }, 1e3);
      } else if (!curr) {
        showDraggableHintWithDelay.value = false;
      }
    });
    function filterOutConnectionType(item, type) {
      if (!item) return false;
      return typeof item === "string" ? item !== type : item.type !== type;
    }
    function onInputModeChange(val) {
      inputMode.value = val;
    }
    function onMappedNodeSelected(val) {
      mappedNode2.value = val;
      onRunIndexChange(0);
      onUnlinkRun();
    }
    function onNodeExecute() {
      emit("execute");
      if (activeNode.value) {
        telemetry.track("User clicked ndv button", {
          node_type: activeNode.value.type,
          workflow_id: workflowsStore.workflowId,
          push_ref: props.pushRef,
          pane: "input",
          type: "executePrevious"
        });
      }
    }
    function onRunIndexChange(run) {
      emit("runChange", run);
    }
    function onLinkRun() {
      emit("linkRun");
    }
    function onUnlinkRun() {
      emit("unlinkRun");
    }
    function onSearch(search) {
      emit("search", search);
    }
    function onItemHover(item) {
      emit("itemHover", item);
    }
    function onTableMounted(event) {
      emit("tableMounted", event);
    }
    function onInputNodeChange(value) {
      const index = parentNodes.value.findIndex((node2) => node2.name === value) + 1;
      emit("changeInputNode", value, index);
    }
    function onConnectionHelpClick() {
      if (activeNode.value) {
        telemetry.track("User clicked ndv link", {
          node_type: activeNode.value.type,
          workflow_id: workflowsStore.workflowId,
          push_ref: props.pushRef,
          pane: "input",
          type: "not-connected-help"
        });
      }
    }
    function activatePane() {
      emit("activatePane");
    }
    function handleChangeCollapsingColumn(columnName) {
      collapsingColumnName.value = columnName;
    }
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createBlock(RunData, {
        class: normalizeClass(_ctx.$style.runData),
        node: currentNode.value,
        nodes: isMappingMode.value ? rootNodesParents.value : parentNodes.value,
        workflow: _ctx.workflow,
        "run-index": isMappingMode.value ? 0 : _ctx.runIndex,
        "linked-runs": _ctx.linkedRuns,
        "can-link-runs": !mappedNode2.value && _ctx.canLinkRuns,
        "too-much-data-title": unref(i18n).baseText("ndv.input.tooMuchData.title"),
        "no-data-in-branch-message": unref(i18n).baseText("ndv.input.noOutputDataInBranch"),
        "is-executing": isExecutingPrevious.value,
        "executing-message": unref(i18n).baseText("ndv.input.executingPrevious"),
        "push-ref": _ctx.pushRef,
        "override-outputs": connectedCurrentNodeOutputs.value,
        "mapping-enabled": isMappingEnabled.value,
        "distance-from-active": currentNodeDepth.value,
        "is-production-execution-preview": _ctx.isProductionExecutionPreview,
        "is-pane-active": _ctx.isPaneActive,
        "display-mode": _ctx.displayMode,
        "pane-type": "input",
        "data-test-id": "ndv-input-panel",
        "disable-ai-content": true,
        "collapsing-table-column-name": collapsingColumnName.value,
        onActivatePane: activatePane,
        onItemHover,
        onLinkRun,
        onUnlinkRun,
        onRunChange: onRunIndexChange,
        onTableMounted,
        onSearch,
        onDisplayModeChange: _cache[2] || (_cache[2] = ($event) => emit("displayModeChange", $event)),
        onCollapsingTableColumnChanged: handleChangeCollapsingColumn
      }, createSlots({
        header: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass([_ctx.$style.titleSection, { [_ctx.$style.titleSectionV2]: isNDVV2.value }])
          }, [
            createBaseVNode("span", {
              class: normalizeClass([_ctx.$style.title, { [_ctx.$style.titleV2]: isNDVV2.value }])
            }, toDisplayString(unref(i18n).baseText("ndv.input")), 3),
            isActiveNodeConfig.value && !_ctx.readOnly ? (openBlock(), createBlock(unref(N8nRadioButtons), {
              key: 0,
              "data-test-id": "input-panel-mode",
              options: inputModes,
              "model-value": inputMode.value,
              "onUpdate:modelValue": onInputModeChange
            }, null, 8, ["model-value"])) : createCommentVNode("", true)
          ], 2)
        ]),
        "input-select": withCtx(() => [
          parentNodes.value.length && _ctx.currentNodeName ? (openBlock(), createBlock(InputNodeSelect, {
            key: 0,
            "model-value": _ctx.currentNodeName,
            workflow: _ctx.workflow,
            nodes: parentNodes.value,
            "onUpdate:modelValue": onInputNodeChange
          }, null, 8, ["model-value", "workflow", "nodes"])) : createCommentVNode("", true)
        ]),
        "node-not-run": withCtx(() => [
          isActiveNodeConfig.value && rootNode.value || parentNodes.value.length ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.noOutputData)
          }, [
            isNDVV2.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              isMappingEnabled.value || hasRootNodeRun.value ? (openBlock(), createBlock(NDVEmptyState, {
                key: 0,
                title: unref(i18n).baseText("ndv.input.noOutputData.v2.title")
              }, {
                icon: withCtx(() => [
                  createVNode(unref(N8nIcon), {
                    icon: "arrow-right-to-line",
                    size: "xlarge"
                  })
                ]),
                description: withCtx(() => [
                  createVNode(_component_i18n_t, {
                    tag: "span",
                    keypath: "ndv.input.noOutputData.v2.description"
                  }, {
                    link: withCtx(() => [
                      createVNode(_sfc_main$f, {
                        "hide-icon": "",
                        transparent: "",
                        type: "secondary",
                        "node-name": (isActiveNodeConfig.value ? rootNode.value : unref(activeNode)?.name) ?? "",
                        label: unref(i18n).baseText("ndv.input.noOutputData.v2.action"),
                        tooltip: unref(i18n).baseText("ndv.input.noOutputData.v2.tooltip"),
                        "tooltip-placement": "bottom",
                        "telemetry-source": "inputs",
                        "data-test-id": "execute-previous-node",
                        onExecute: onNodeExecute
                      }, null, 8, ["node-name", "label", "tooltip"]),
                      _cache[4] || (_cache[4] = createBaseVNode("br", null, null, -1))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : (openBlock(), createBlock(NDVEmptyState, {
                key: 1,
                title: unref(i18n).baseText("ndv.input.rootNodeHasNotRun.title")
              }, {
                icon: withCtx(() => _cache[5] || (_cache[5] = [
                  createBaseVNode("svg", {
                    width: "16px",
                    viewBox: "0 0 16 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createBaseVNode("path", {
                      d: "M11 2C10.4375 2 10 1.5625 10 1C10 0.46875 10.4375 0 11 0H13C14.6562 0 16 1.34375 16 3V11C16 12.6562 14.6562 14 13 14H11C10.4375 14 10 13.5625 10 13C10 12.4688 10.4375 12 11 12H13C13.5312 12 14 11.5625 14 11V3C14 2.46875 13.5312 2 13 2H11ZM10.6875 7.71875L6.6875 11.7188C6.3125 12.125 5.65625 12.125 5.28125 11.7188C4.875 11.3438 4.875 10.6875 5.28125 10.3125L7.5625 8H1C0.4375 8 0 7.5625 0 7C0 6.46875 0.4375 6 1 6H7.5625L5.28125 3.71875C4.875 3.34375 4.875 2.6875 5.28125 2.3125C5.65625 1.90625 6.3125 1.90625 6.6875 2.3125L10.6875 6.3125C11.0938 6.6875 11.0938 7.34375 10.6875 7.71875Z",
                      fill: "currentColor"
                    })
                  ], -1)
                ])),
                description: withCtx(() => [
                  createVNode(_component_i18n_t, {
                    tag: "span",
                    keypath: "ndv.input.rootNodeHasNotRun.description"
                  }, {
                    link: withCtx(() => [
                      createBaseVNode("a", {
                        href: "#",
                        "data-test-id": "switch-to-mapping-mode-link",
                        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => onInputModeChange("mapping"), ["prevent"]))
                      }, toDisplayString(unref(i18n).baseText("ndv.input.rootNodeHasNotRun.description.link")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"]))
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              isMappingEnabled.value || hasRootNodeRun.value ? (openBlock(), createBlock(unref(N8nText), {
                key: 0,
                tag: "div",
                bold: true,
                color: "text-dark",
                size: "large"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.noOutputData.title")), 1)
                ]),
                _: 1
              })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createVNode(unref(N8nText), {
                  tag: "div",
                  bold: true,
                  color: "text-dark",
                  size: "large"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.rootNodeHasNotRun.title")), 1)
                  ]),
                  _: 1
                }),
                createVNode(unref(N8nText), {
                  tag: "div",
                  color: "text-dark",
                  size: "medium"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_i18n_t, {
                      tag: "span",
                      keypath: "ndv.input.rootNodeHasNotRun.description"
                    }, {
                      link: withCtx(() => [
                        createBaseVNode("a", {
                          href: "#",
                          "data-test-id": "switch-to-mapping-mode-link",
                          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => onInputModeChange("mapping"), ["prevent"]))
                        }, toDisplayString(unref(i18n).baseText("ndv.input.rootNodeHasNotRun.description.link")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ], 64)),
              !_ctx.readOnly ? (openBlock(), createBlock(unref(N8nTooltip), {
                key: 2,
                visible: showDraggableHint.value && showDraggableHintWithDelay.value
              }, {
                content: withCtx(() => [
                  withDirectives(createBaseVNode("div", null, null, 512), [
                    [
                      _directive_n8n_html,
                      unref(i18n).baseText("dataMapping.dragFromPreviousHint", {
                        interpolate: { name: unref(focusedMappableInput) }
                      })
                    ]
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(_sfc_main$f, {
                    type: "secondary",
                    "hide-icon": "",
                    transparent: true,
                    "node-name": (isActiveNodeConfig.value ? rootNode.value : unref(activeNode)?.name) ?? "",
                    label: unref(i18n).baseText("ndv.input.noOutputData.executePrevious"),
                    class: "mt-m",
                    "telemetry-source": "inputs",
                    "data-test-id": "execute-previous-node",
                    onExecute: onNodeExecute
                  }, null, 8, ["node-name", "label"])
                ]),
                _: 1
              }, 8, ["visible"])) : createCommentVNode("", true),
              !_ctx.readOnly ? (openBlock(), createBlock(unref(N8nText), {
                key: 3,
                tag: "div",
                size: "small"
              }, {
                default: withCtx(() => [
                  createVNode(_component_i18n_t, { keypath: "ndv.input.noOutputData.hint" }, {
                    info: withCtx(() => [
                      createVNode(unref(N8nTooltip), { placement: "bottom" }, {
                        content: withCtx(() => [
                          createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.noOutputData.hint.tooltip")), 1)
                        ]),
                        default: withCtx(() => [
                          createVNode(unref(N8nIcon), { icon: "circle-help" })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ], 64))
          ], 2)) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(_ctx.$style.notConnected)
          }, [
            isNDVV2.value ? (openBlock(), createBlock(NDVEmptyState, {
              key: 0,
              title: unref(i18n).baseText("ndv.input.notConnected.v2.title")
            }, {
              icon: withCtx(() => [
                createVNode(WireMeUp)
              ]),
              description: withCtx(() => [
                createVNode(_component_i18n_t, {
                  tag: "span",
                  keypath: "ndv.input.notConnected.v2.description"
                }, {
                  link: withCtx(() => [
                    createBaseVNode("a", {
                      href: "https://docs.n8n.io/workflows/connections/",
                      target: "_blank",
                      onClick: onConnectionHelpClick
                    }, toDisplayString(unref(i18n).baseText("ndv.input.notConnected.learnMore")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createBaseVNode("div", null, [
                createVNode(WireMeUp)
              ]),
              createVNode(unref(N8nText), {
                tag: "div",
                bold: true,
                color: "text-dark",
                size: "large"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.notConnected.title")), 1)
                ]),
                _: 1
              }),
              createVNode(unref(N8nText), { tag: "div" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.notConnected.message")) + " ", 1),
                  createBaseVNode("a", {
                    href: "https://docs.n8n.io/workflows/connections/",
                    target: "_blank",
                    onClick: onConnectionHelpClick
                  }, toDisplayString(unref(i18n).baseText("ndv.input.notConnected.learnMore")), 1)
                ]),
                _: 1
              })
            ], 64))
          ], 2))
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
            [_directive_n8n_html, waitingMessage.value]
          ])
        ]),
        "no-output-data": withCtx(() => [
          createVNode(unref(N8nText), {
            tag: "div",
            bold: true,
            color: "text-dark",
            size: "large"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.noOutputData")), 1)
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
        isMappingMode.value ? {
          name: "before-data",
          fn: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent("style"), null, {
              default: withCtx(() => _cache[3] || (_cache[3] = [
                createTextVNode("button.linkRun { display: none }")
              ])),
              _: 1
            })),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.mappedNode)
            }, [
              createVNode(InputNodeSelect, {
                "model-value": mappedNode2.value,
                workflow: _ctx.workflow,
                nodes: rootNodesParents.value,
                "onUpdate:modelValue": onMappedNodeSelected
              }, null, 8, ["model-value", "workflow", "nodes"])
            ], 2)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["class", "node", "nodes", "workflow", "run-index", "linked-runs", "can-link-runs", "too-much-data-title", "no-data-in-branch-message", "is-executing", "executing-message", "push-ref", "override-outputs", "mapping-enabled", "distance-from-active", "is-production-execution-preview", "is-pane-active", "display-mode", "collapsing-table-column-name"]);
    };
  }
});
const runData = "_runData_1mdum_123";
const mappedNode = "_mappedNode_1mdum_127";
const titleSection = "_titleSection_1mdum_131";
const titleSectionV2 = "_titleSectionV2_1mdum_140";
const inputModeTab = "_inputModeTab_1mdum_144";
const noOutputData = "_noOutputData_1mdum_148";
const recoveredOutputData = "_recoveredOutputData_1mdum_155";
const notConnected = "_notConnected_1mdum_164";
const title = "_title_1mdum_131";
const titleV2 = "_titleV2_1mdum_182";
const style0$1 = {
  runData,
  mappedNode,
  titleSection,
  titleSectionV2,
  inputModeTab,
  noOutputData,
  recoveredOutputData,
  notConnected,
  title,
  titleV2
};
const cssModules$1 = {
  "$style": style0$1
};
const InputPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
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
    const node2 = computed(() => workflowsStore.getNodeByName(props.nodeName));
    const nodeType = computed(() => {
      if (node2.value) {
        return nodesTypeStore.getNodeType(node2.value.type, node2.value.typeVersion);
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
      if (node2.value) {
        const hideContentValue = workflowHelpers.getCurrentWorkflow().expression.getSimpleParameterValue(node2.value, hideContent2, "internal", {});
        if (typeof hideContentValue === "boolean") {
          return hideContentValue;
        }
      }
      return false;
    });
    const hasIssues = computed(() => {
      return Boolean(
        node2.value?.issues && (node2.value.issues.parameters ?? node2.value.issues.credentials)
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
        node2.value && node2.value.type === CHAT_TRIGGER_NODE_TYPE && node2.value.parameters.mode !== "webhook"
      );
    });
    const isWebhookNode = computed(() => {
      return Boolean(node2.value && node2.value.type === WEBHOOK_NODE_TYPE);
    });
    const webhookHttpMethod = computed(() => {
      if (!node2.value || !nodeType.value?.webhooks?.length) {
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
      if (!node2.value || !nodeType.value?.webhooks?.length) {
        return void 0;
      }
      return workflowHelpers.getWebhookUrl(nodeType.value.webhooks[0], node2.value, "test");
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
      return !!node2.value && !node2.value.disabled && isWebhookBasedNode.value && waitingOnWebhook && (!executedNode || executedNode === props.nodeName);
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
      const _component_n8n_spinner = _sfc_main$h;
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
                  createVNode(_sfc_main$c, {
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
                createVNode(_sfc_main$f, {
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
                createVNode(_sfc_main$f, {
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
                createVNode(_sfc_main$f, {
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
const TriggerPanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules], ["__scopeId", "data-v-a321aff2"]]);
export {
  InputPanel as I,
  OutputPanel as O,
  TriggerPanel as T,
  __unplugin_components_0 as _
};
