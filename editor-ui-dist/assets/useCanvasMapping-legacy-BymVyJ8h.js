;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./ParameterInputList-legacy-DirG3aZ4.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./constants-legacy-B0GcWb62.js", "./chatPanel.store-legacy-NYceFr60.js", "./templates.store-legacy-BHiM3N7j.js", "./useRunWorkflow-legacy-6mzz_m9l.js", "./usePinnedData-legacy-rNpwQUsO.js", "./nodeCreator.store-legacy-DazC1kYi.js", "./nodeIcon-legacy-7NxDDHQi.js", "./useCanvasOperations-legacy-GAH95RK2.js", "./NodeIcon-legacy-B6aK_5Ny.js", "./KeyboardShortcutTooltip-legacy-ZyxuvJWt.js", "./useTelemetryContext-legacy-CJA6Osaa.js", "./NodeSettings-legacy-DU2oCttT.js", "./useKeybindings-legacy-BQ2atUdb.js"], function (_export, _context) {
    "use strict";

    var __toESM, __commonJS, computed, createElementBlock, createCommentVNode, nextTick, unref, guardReactiveProps, ref, onBeforeUnmount, h, createVNode, defineComponent, onUnmounted, toDisplayString, createBlock, mergeModels, toRef, mergeProps, onMounted, Fragment, normalizeClass, watch, renderSlot, Teleport, withCtx, useCssModule, resolveDynamicComponent, openBlock, useModel, withModifiers, renderList, createTextVNode, createSlots, useCssVars, Transition, provide, vShow, useSlots, useAttrs, normalizeProps, watchEffect, createBaseVNode, withDirectives, Suspense, normalizeStyle, inject, onKeyDown, I18nT, useI18n, useThrottleFn, watchOnce, watchThrottled, onKeyUp, N8nText_default, N8nButton_default, N8nIconButton_default, N8nLink_default, useDeviceSupport, N8nActionDropdown_default, N8nSticky_default, N8nTooltip_default, N8nPopover_default, N8nIcon_default, __plugin_vue_export_helper_default, useRouter, truncateBeforeLast, createEventBus, useRoute, TitledList_default, _sfc_main$1, useGetPointerPosition, useSettingsStore, useHistoryStore, PanelPosition, useSourceControlStore, NodeId, nodeViewEventBus, getBezierPath, isChatNode, getBoundsofRects, v4_default, getConnectedEdges, _sfc_main$d, _sfc_main$f, useUIStore, Position, clamp, getTriggerNodeServiceName, getRectOfNodes, injectWorkflowState, CanvasNodeRenderType, MarkerType, useVueFlow, useNDVStore, CanvasConnectionMode, CONFIGURATION_NODE_RADIUS, GRID_SIZE, isValidNodeConnectionType, _sfc_main$3, _sfc_main$4, calculateNodeSize, useWorkflowsStore, PUSH_NODES_OFFSET, useNodeTypesStore, useTelemetry, DEFAULT_NODE_SIZE, isPresent, updateViewportToContainNodes, useNodeHelpers, CanvasNodeDirtiness, getMousePosition, environments_store_default, getSmoothStepPath, sanitizeHtml, useStyles, isOutsideSelected, useToast, WAIT_INDEFINITELY, CanvasNodeKey, isExecutable, WAIT_NODE_TYPE, WORKFLOW_EXTRACTION_NAME_MODAL_KEY, CUSTOM_API_CALL_KEY, extractReferencesInNodeExpressions, buildAdjacencyList, isNodeWithWorkflowSelector, parseExtractableSubgraphSelection, CHAT_TRIGGER_NODE_TYPE, EXPERIMENT_TEMPLATES_DATA_QUALITY_KEY, CanvasNodeHandleKey, require_isEqual, isCommunityPackageName, CANVAS_EXECUTION_DATA_THROTTLE_DURATION, NOT_DUPLICATABLE_NODE_TYPES, getNodeInputs, getResourcePermissions, NodeConnectionTypes, NODE_CREATOR_OPEN_SOURCES, SIMULATE_TRIGGER_NODE_TYPE, VIEWS, EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE, SIMULATE_NODE_TYPE, mapConnectionsByDestination, getNodeOutputs, getSubworkflowId, ExpressionLocalResolveContextSymbol, SEND_AND_WAIT_OPERATION, STICKY_NODE_TYPE, CanvasKey, FORM_NODE_TYPE, useChatPanelStore, useTemplatesDataQualityStore, trackTemplatesClick, TemplateClickSource, isExtraTemplateLinksExperimentEnabled, useTemplatesStore, useNodeDirtiness, useRunWorkflow, usePinnedData, mapLegacyEndpointsToCanvasConnectionPort, insertSpacersBetweenEndpoints, parseCanvasConnectionHandleString, checkOverlap, createCanvasConnectionHandleString, mapLegacyConnectionsToCanvasConnections, useNodeCreatorStore, getNodeIconSource, useLogsStore, useExperimentalNdvStore, useCanvasOperations, NodeIcon_default, KeyboardShortcutTooltip_default, useTelemetryContext, NodeSettings_default, useKeybindings, __vite_style__, CanvasRunWorkflowButton_vue_vue_type_script_setup_true_lang_default, component$1, split, button$2, divider, chevron, menu, menuPopper, menuItem, disabled$3, menuIcon, buttonContent, subText, CanvasRunWorkflowButton_vue_vue_type_style_index_0_lang_module_default, cssModules$29, CanvasRunWorkflowButton_default, import_isEqual$1, CANVAS_HISTORY_OPTIONS, _hoisted_1$17, _hoisted_2$7, _hoisted_3$9, _hoisted_4$2, CanvasNodeStatusIcons_vue_vue_type_script_setup_true_lang_default, status, runData, waiting$1, pinnedData, running$1, absoluteSpinner, spinnerScrim, issues, count, warning$2, disabled$2, CanvasNodeStatusIcons_vue_vue_type_style_index_0_lang_module_default, cssModules$28, CanvasNodeStatusIcons_default, _hoisted_1$16, _hoisted_2$6, CanvasNodeStickyColorSelector_vue_vue_type_script_setup_true_lang_default, popover, content, color$1, selected$2, option$1, CanvasNodeStickyColorSelector_vue_vue_type_style_index_0_lang_module_default, cssModules$27, CanvasNodeStickyColorSelector_default, CanvasNodeToolbar_vue_vue_type_script_setup_true_lang_default, canvasNodeToolbar$1, isExperimentalNdvActive$2, canvasNodeToolbarItems$1, forceVisible, statusIcons$1, CanvasNodeToolbar_vue_vue_type_style_index_0_lang_module_default, cssModules$26, CanvasNodeToolbar_default, _hoisted_1$15, _hoisted_2$5, _hoisted_3$8, _hoisted_4$1, size, CanvasNodeSettingsIcons_vue_vue_type_script_setup_true_lang_default, settingsIcons, tooltipHeader, tooltipTitle, CanvasNodeSettingsIcons_vue_vue_type_style_index_0_lang_module_default, cssModules$25, CanvasNodeSettingsIcons_default, ExperimentalCanvasNodeSettings_vue_vue_type_script_setup_true_lang_default, ExperimentalCanvasNodeSettings_default, ExperimentalEmbeddedNdvActions_vue_vue_type_script_setup_true_lang_default, actions, ExperimentalEmbeddedNdvActions_vue_vue_type_style_index_0_lang_module_default, cssModules$24, ExperimentalEmbeddedNdvActions_default, ExperimentalEmbeddedNodeDetails_vue_vue_type_script_setup_true_lang_default, component, expanded, collapsed, collapsedContent, settingsView, disabled$1, collapsedNodeName, ExperimentalEmbeddedNodeDetails_vue_vue_type_style_index_0_lang_module_default, cssModules$23, ExperimentalEmbeddedNodeDetails_default, CanvasNodeTooltip_vue_vue_type_script_setup_true_lang_default, tooltipTrigger, popper, CanvasNodeTooltip_vue_vue_type_style_index_0_lang_module_default, cssModules$22, CanvasNodeTooltip_default, CanvasNodeDisabledStrikeThrough_vue_vue_type_script_setup_true_lang_default, disabledStrikeThrough, success$2, warning$1, CanvasNodeDisabledStrikeThrough_vue_vue_type_style_index_0_lang_module_default, cssModules$21, CanvasNodeDisabledStrikeThrough_default, _hoisted_1$14, CanvasNodeDefault_vue_vue_type_script_setup_true_lang_default, node, trigger$1, configuration, statusIcons, configurable, icon, description, label$6, subtitle, running, selected$1, success$1, warning, error, pinned, disabled, waiting, disabledLabel, CanvasNodeDefault_vue_vue_type_style_index_0_lang_module_default, cssModules$20, CanvasNodeDefault_default, xhtml$1, namespaces$1, find$1, filter$1, root$1, noop$1, nonpassive, nonpassivecapture$1, constant$3, ResizeControlVariant, DefaultPositions, StylingProperty, _sfc_main$1$9, _sfc_main$8, CanvasNodeStickyNote_vue_vue_type_script_setup_true_lang_default, sticky, selected, CanvasNodeStickyNote_vue_vue_type_style_index_0_lang_module_default, cssModules$19, CanvasNodeStickyNote_default, CanvasNodeAddNodes_vue_vue_type_script_setup_true_lang_default, addNodes, button$1, label$5, CanvasNodeAddNodes_vue_vue_type_style_index_0_lang_module_default, cssModules$18, CanvasNodeAddNodes_default, CanvasNodeChoicePrompt_vue_vue_type_script_setup_true_lang_default, choicePrompt, option, button, selectedButtonHighlight, highlighted, label$4, orDivider, orText, CanvasNodeChoicePrompt_vue_vue_type_style_index_0_lang_module_default, cssModules$17, CanvasNodeChoicePrompt_default, CanvasNodeRenderer_vue_vue_type_script_setup_true_lang_default, CanvasNodeRenderer_default, CanvasHandleRectangle_vue_vue_type_script_setup_true_lang_default, rectangle, CanvasHandleRectangle_vue_vue_type_style_index_0_lang_module_default, cssModules$16, CanvasHandleRectangle_default, handleClasses$3, CanvasHandleMainInput_vue_vue_type_script_setup_true_lang_default, handle$4, label$3, required$3, CanvasHandleMainInput_vue_vue_type_style_index_0_lang_module_default, cssModules$15, CanvasHandleMainInput_default, CanvasHandleDot_vue_vue_type_script_setup_true_lang_default, dot, CanvasHandleDot_vue_vue_type_style_index_0_lang_module_default, cssModules$14, CanvasHandleDot_default, _hoisted_1$13, _hoisted_2$4, _hoisted_3$7, CanvasHandlePlus_vue_vue_type_script_setup_true_lang_default, wrapper, right$1, bottom$1, secondary, line, plus, success, CanvasHandlePlus_vue_vue_type_style_index_0_lang_module_default, cssModules$13, CanvasHandlePlus_default, handleClasses$2, CanvasHandleMainOutput_vue_vue_type_script_setup_true_lang_default, handle$3, connected, label$2, required$2, outputLabel, runDataLabel, CanvasHandleMainOutput_vue_vue_type_style_index_0_lang_module_default, cssModules$12, CanvasHandleMainOutput_default, CanvasHandleDiamond_vue_vue_type_script_setup_true_lang_default, diamond, CanvasHandleDiamond_vue_vue_type_style_index_0_lang_module_default, cssModules$11, CanvasHandleDiamond_default, handleClasses$1, CanvasHandleNonMainInput_vue_vue_type_script_setup_true_lang_default, handle$2, label$1, required$1, CanvasHandleNonMainInput_vue_vue_type_style_index_0_lang_module_default, cssModules$10, CanvasHandleNonMainInput_default, handleClasses, CanvasHandleNonMainOutput_vue_vue_type_script_setup_true_lang_default, handle$1, label, required, CanvasHandleNonMainOutput_vue_vue_type_style_index_0_lang_module_default, cssModules$9, CanvasHandleNonMainOutput_default, CanvasHandleRenderer_vue_vue_type_script_setup_true_lang_default, handle, inputs, main, renderType, top, right, left, bottom, CanvasHandleRenderer_vue_vue_type_style_index_0_lang_module_default, cssModules$8, CanvasHandleRenderer_default, position$2, target, useContextMenu, CanvasNodeTrigger_vue_vue_type_script_setup_true_lang_default, container, interactive, hovered, isExperimentalNdvActive$1, bolt, CanvasNodeTrigger_vue_vue_type_style_index_0_lang_module_default, cssModules$7, CanvasNodeTrigger_default, import_isEqual, _hoisted_1$12, CanvasNode_vue_vue_type_script_setup_true_lang_default, canvasNode, canvasNodeToolbarItems, trigger, showToolbar, canvasNodeToolbar, CanvasNode_vue_vue_type_style_index_0_lang_module_default, cssModules$6, CanvasNode_default, _hoisted_1$11, _hoisted_2$3, CanvasBackgroundStripedPattern_vue_vue_type_script_setup_true_lang_default, CanvasBackgroundStripedPattern_default, BackgroundVariant, LinePattern, DotPattern, DefaultBgColors, _hoisted_1$9, _hoisted_2$2, _hoisted_3$6, _hoisted_4, _sfc_main$5, CanvasBackground_vue_vue_type_script_setup_true_lang_default, CanvasBackground_default, ContextMenu_vue_vue_type_script_setup_true_lang_default, contextMenu, activator, ContextMenu_vue_vue_type_style_index_0_lang_module_default, cssModules$5, ContextMenu_default, require_graph, require_version$1, require_lib, require_json, require_components, require_priority_queue, require_dijkstra, require_dijkstra_all, require_tarjan, require_find_cycles, require_floyd_warshall, require_topsort, require_is_acyclic, require_dfs, require_postorder, require_preorder, require_prim, require_alg, require_graphlib, require_list, require_greedy_fas, require_util$1, require_acyclic, require_normalize, require_util, require_feasible_tree, require_network_simplex, require_rank, require_parent_dummy_chains, require_nesting_graph, require_add_border_segments, require_coordinate_system, require_init_order, require_cross_count, require_barycenter, require_resolve_conflicts, require_sort, require_sort_subgraph, require_build_layer_graph, require_add_subgraph_constraints, require_order, require_bk, require_position, require_layout, require_debug, require_version, require_dagre, import_dagre, NODE_X_SPACING, NODE_Y_SPACING, SUBGRAPH_SPACING, AI_X_SPACING, AI_Y_SPACING, STICKY_BOTTOM_PADDING, noop, xhtml, namespaces, find, filter, root, nonpassivecapture, darker, brighter, reI, reN, reP, reHex, reRgbInteger, reRgbPercent, reRgbaInteger, reRgbaPercent, reHslPercent, reHslaPercent, named, constant$1, interpolateRgb, reA, reB, degrees, identity$1, svgNode, interpolateTransformCss, interpolateTransformSvg, epsilon2, interpolateZoom, frame, timeout$1, interval, pokeDelay, taskHead, taskTail, clockLast, clockNow, clockSkew, clock, setFrame, emptyOn, emptyTween, CREATED, SCHEDULED, STARTING, STARTED, RUNNING, ENDING, ENDED, Selection, id, selection_prototype, defaultTiming, constant, identity, Slots, _hoisted_1$1$9, _sfc_main$1$7, _hoisted_1$10, _hoisted_2$1, _hoisted_3$5, _sfc_main, _hoisted_1$8, CanvasArrowHeadMarker_vue_vue_type_script_setup_true_lang_default, CanvasArrowHeadMarker_default, EDGE_PADDING_BOTTOM, EDGE_PADDING_X, EDGE_BORDER_RADIUS, HANDLE_SIZE, isRightOfSourceHandle, CanvasConnectionLine_vue_vue_type_script_setup_true_lang_default, edge$1, visible, CanvasConnectionLine_vue_vue_type_style_index_0_lang_module_default, cssModules$4, CanvasConnectionLine_default, _sfc_main$6, _hoisted_1$7, TidyUpIcon_default, _sfc_main$1$5, _export_sfc, _hoisted_1$5, ControlButton, _hoisted_1$4, _hoisted_3$4, PlusIcon, _hoisted_1$3, _hoisted_3$3, MinusIcon, _hoisted_1$2, _hoisted_3$2, FitView, _hoisted_1$1, _hoisted_3$1, Lock, _hoisted_1$6, _hoisted_3, Unlock, _sfc_main$2, CanvasControlButtons_vue_vue_type_script_setup_true_lang_default, iconButton, CanvasControlButtons_vue_vue_type_style_index_0_lang_module_default, cssModules$3, CanvasControlButtons_default, CanvasEdgeToolbar_vue_vue_type_script_setup_true_lang_default, canvasEdgeToolbar, CanvasEdgeToolbar_vue_vue_type_style_index_0_lang_module_default, cssModules$2, CanvasEdgeToolbar_default, _hoisted_1, _hoisted_2, delayedHoveredTimeout, CanvasEdge_vue_vue_type_script_setup_true_lang_default, edge, edgeLabelWrapper, straight, edgeLabel, CanvasEdge_vue_vue_type_style_index_0_lang_module_default, cssModules$1, CanvasEdge_default, renameKeyCode, defaultZoom, minimapVisibilityDelay, Canvas_vue_vue_type_script_setup_true_lang_default, canvas, ready, isExperimentalNdvActive, Canvas_vue_vue_type_style_index_0_lang_module_default, cssModules, Canvas_default;
    function useWorkflowExtraction() {
      const uiStore = useUIStore();
      const workflowsStore = useWorkflowsStore();
      const toast = useToast();
      const router = useRouter();
      const historyStore = useHistoryStore();
      const canvasOperations = useCanvasOperations();
      const i18n = useI18n();
      const telemetry = useTelemetry();
      const adjacencyList = computed(() => buildAdjacencyList(workflowsStore.workflow.connections));
      const workflowObject = computed(() => workflowsStore.workflowObject);
      function showError(message) {
        toast.showMessage({
          type: "error",
          message,
          title: i18n.baseText("workflowExtraction.error.failure"),
          duration: 15 * 1e3
        });
      }
      function extractableErrorResultToMessage(result) {
        switch (result.errorCode) {
          case "Input Edge To Non-Root Node":
            return i18n.baseText("workflowExtraction.error.selectionGraph.inputEdgeToNonRoot", {
              interpolate: {
                node: result.node
              }
            });
          case "Output Edge From Non-Leaf Node":
            return i18n.baseText("workflowExtraction.error.selectionGraph.outputEdgeFromNonLeaf", {
              interpolate: {
                node: result.node
              }
            });
          case "Multiple Input Nodes":
            return i18n.baseText("workflowExtraction.error.selectionGraph.multipleInputNodes", {
              interpolate: {
                nodes: [...result.nodes].map(x => `'${x}'`).join(", ")
              }
            });
          case "Multiple Output Nodes":
            return i18n.baseText("workflowExtraction.error.selectionGraph.multipleOutputNodes", {
              interpolate: {
                nodes: [...result.nodes].map(x => `'${x}'`).join(", ")
              }
            });
          case "No Continuous Path From Root To Leaf In Selection":
            return i18n.baseText("workflowExtraction.error.selectionGraph.noContinuousPathFromRootToLeaf", {
              interpolate: {
                start: result.start,
                end: result.end
              }
            });
        }
      }
      function makeExecuteWorkflowNode(workflowId, name, position$3, variables) {
        return {
          parameters: {
            workflowId: {
              __rl: true,
              value: workflowId,
              mode: "list"
            },
            workflowInputs: {
              mappingMode: "defineBelow",
              value: Object.fromEntries(variables.entries().map(([k, v]) => [k, `={{ ${v} }}`])),
              matchingColumns: [...variables.keys()],
              schema: [...variables.keys().map(x => ({
                id: x,
                displayName: x,
                required: false,
                defaultMatch: false,
                display: true,
                canBeUsedToMatch: true,
                removed: false
              }))],
              attemptToConvertTypes: false,
              convertFieldsToString: true
            },
            options: {}
          },
          type: "n8n-nodes-base.executeWorkflow",
          typeVersion: 1.2,
          position: position$3,
          name
        };
      }
      function makeSubworkflow(newWorkflowName, {
        start: start$1,
        end
      }, nodes, connections, selectionVariables, selectionChildrenVariables, startNodeName, returnNodeName) {
        const newConnections = Object.fromEntries(Object.entries(connections).filter(([k]) => nodes.some(x => x.name === k)));
        if (end) delete newConnections[end];
        const startNodeTarget = nodes.find(x => x.name === start$1);
        const firstNode = startNodeTarget ?? nodes.sort((a, b) => a.position[1] - b.position[1])[0];
        const startNodePosition = [firstNode.position[0] - PUSH_NODES_OFFSET, firstNode.position[1]];
        const endNodeTarget = nodes.find(x => x.name === end);
        const lastNode = endNodeTarget ?? nodes.sort((a, b) => b.position[1] - a.position[1])[0];
        const endNodePosition = [lastNode.position[0] + PUSH_NODES_OFFSET, lastNode.position[1]];
        const shouldInsertReturnNode = selectionChildrenVariables.size > 0;
        const startNodeConnection = startNodeTarget ? {
          [startNodeName]: {
            main: [[{
              node: startNodeTarget.name,
              type: "main",
              index: 0
            }]]
          }
        } : {};
        const endNodeConnection = endNodeTarget && shouldInsertReturnNode ? {
          [endNodeTarget.name]: {
            main: [[{
              node: returnNodeName,
              type: "main",
              index: 0
            }]]
          }
        } : {};
        const returnNode = shouldInsertReturnNode ? [{
          parameters: {
            assignments: {
              assignments: [...selectionChildrenVariables.entries().map(x => ({
                id: v4_default(),
                name: x[0],
                value: `={{ ${x[1]} }}`,
                type: "string"
              }))]
            },
            options: {}
          },
          type: "n8n-nodes-base.set",
          typeVersion: 3.4,
          position: endNodePosition,
          id: v4_default(),
          name: returnNodeName
        }] : [];
        const triggerParameters = selectionVariables.size === 0 ? {
          inputSource: "passthrough"
        } : {
          workflowInputs: {
            values: [...selectionVariables.keys().map(k => ({
              name: k,
              type: "any"
            }))]
          }
        };
        const triggerNode = {
          id: v4_default(),
          typeVersion: 1.1,
          name: startNodeName,
          type: EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE,
          position: startNodePosition,
          parameters: triggerParameters
        };
        return {
          name: newWorkflowName,
          nodes: [...nodes, ...returnNode, triggerNode],
          connections: {
            ...newConnections,
            ...startNodeConnection,
            ...endNodeConnection
          },
          settings: {
            executionOrder: "v1"
          },
          projectId: workflowsStore.workflow.homeProject?.id,
          parentFolderId: workflowsStore.workflow.parentFolder?.id ?? void 0
        };
      }
      function computeAveragePosition(nodes) {
        const summedUp = nodes.reduce((acc, v) => [acc[0] + v.position[0], acc[1] + v.position[1], acc[2] + 1], [0, 0, 0]);
        return [summedUp[0] / summedUp[2], summedUp[1] / summedUp[2]];
      }
      async function tryCreateWorkflow(workflowData) {
        try {
          const createdWorkflow = await workflowsStore.createNewWorkflow(workflowData);
          const {
            href
          } = router.resolve({
            name: VIEWS.WORKFLOW,
            params: {
              name: createdWorkflow.id
            }
          });
          toast.showMessage({
            title: i18n.baseText("workflowExtraction.success.title"),
            message: i18n.baseText("workflowExtraction.success.message", {
              interpolate: {
                url: href
              }
            }),
            type: "success",
            duration: 10 * 1e3
          });
          return createdWorkflow;
        } catch (e) {
          toast.showError(e, i18n.baseText("workflowExtraction.error.subworkflowCreationFailed"));
          return null;
        }
      }
      function checkExtractableSelectionValidity(selection$1) {
        if (Array.isArray(selection$1)) {
          showError(i18n.baseText("workflowExtraction.error.selectionGraph.listHeader", {
            interpolate: {
              body: selection$1.map(extractableErrorResultToMessage).map(x => `- ${x}`).join("<br>")
            }
          }));
          return false;
        }
        const {
          start: start$1,
          end
        } = selection$1;
        const isSingleIO = (nodeName, getIOs) => {
          const node$1 = workflowsStore.getNodeByName(nodeName);
          if (!node$1) return true;
          const nodeType = useNodeTypesStore().getNodeType(node$1.type, node$1.typeVersion);
          if (!nodeType) return true;
          return getIOs(workflowObject.value, node$1, nodeType).filter(x => typeof x === "string" ? x === "main" : x.type === "main").length <= 1;
        };
        if (start$1 && !isSingleIO(start$1, getNodeInputs)) {
          showError(i18n.baseText("workflowExtraction.error.inputNodeHasMultipleInputBranches", {
            interpolate: {
              node: start$1
            }
          }));
          return false;
        }
        if (end && !isSingleIO(end, getNodeOutputs)) {
          showError(i18n.baseText("workflowExtraction.error.outputNodeHasMultipleOutputBranches", {
            interpolate: {
              node: end
            }
          }));
          return false;
        }
        return !Array.isArray(selection$1);
      }
      async function replaceSelectionWithNode(executeWorkflowNodeData, startId, endId, selection$1, selectionChildNodes) {
        historyStore.startRecordingUndo();
        uiStore.resetLastInteractedWith();
        const executeWorkflowNode = (await canvasOperations.addNodes([executeWorkflowNodeData], {
          ...CANVAS_HISTORY_OPTIONS,
          forcePosition: true
        }))[0];
        if (endId) canvasOperations.replaceNodeConnections(endId, executeWorkflowNode.id, {
          ...CANVAS_HISTORY_OPTIONS,
          replaceInputs: false
        });
        if (startId) canvasOperations.replaceNodeConnections(startId, executeWorkflowNode.id, {
          ...CANVAS_HISTORY_OPTIONS,
          replaceOutputs: false
        });
        canvasOperations.deleteNodes(selection$1.map(x => x.id), CANVAS_HISTORY_OPTIONS);
        for (const node$1 of selectionChildNodes) {
          const currentNode = workflowsStore.workflow.nodes.find(x => x.id === node$1.id);
          if ((0, import_isEqual$1.default)(node$1, currentNode)) continue;
          canvasOperations.replaceNodeParameters(node$1.id, {
            ...currentNode?.parameters
          }, {
            ...node$1.parameters
          }, CANVAS_HISTORY_OPTIONS);
        }
        uiStore.stateIsDirty = true;
        historyStore.stopRecordingUndo();
      }
      function tryExtractNodesIntoSubworkflow(nodeIds) {
        const subGraph = nodeIds.map(workflowsStore.getNodeById).filter(x => x !== void 0);
        const triggers = subGraph.filter(x => useNodeTypesStore().getNodeType(x.type, x.typeVersion)?.group.includes("trigger"));
        if (triggers.length > 0) {
          showError(i18n.baseText("workflowExtraction.error.triggerSelected", {
            interpolate: {
              nodes: triggers.map(x => `'${x.name}'`).join(", ")
            }
          }));
          return false;
        }
        const selection$1 = parseExtractableSubgraphSelection(new Set(subGraph.map(x => x.name)), adjacencyList.value);
        if (!checkExtractableSelectionValidity(selection$1)) return false;
        uiStore.openModalWithData({
          name: WORKFLOW_EXTRACTION_NAME_MODAL_KEY,
          data: {
            subGraph,
            selection: selection$1
          }
        });
        return true;
      }
      async function doExtractNodesIntoSubworkflow(selection$1, subGraph, newWorkflowName) {
        const {
          start: start$1,
          end
        } = selection$1;
        const allNodeNames = workflowsStore.workflow.nodes.map(x => x.name);
        let startNodeName = "Start";
        const subGraphNames = subGraph.map(x => x.name);
        while (subGraphNames.includes(startNodeName)) startNodeName += "_1";
        let returnNodeName = "Return";
        while (subGraphNames.includes(returnNodeName)) returnNodeName += "_1";
        const directAfterEndNodeNames = end ? workflowObject.value.getChildNodes(end, "main", 1).map(x => workflowObject.value.getNode(x)?.name).filter(x => x !== void 0) : [];
        const allAfterEndNodes = end ? workflowObject.value.getChildNodes(end, "ALL").map(x => workflowObject.value.getNode(x)).filter(x => x !== null) : [];
        const {
          nodes,
          variables
        } = extractReferencesInNodeExpressions(subGraph, allNodeNames, startNodeName, start$1 ? [start$1] : void 0);
        let executeWorkflowNodeName = `Call ${newWorkflowName}`;
        while (allNodeNames.includes(executeWorkflowNodeName)) executeWorkflowNodeName += "_1";
        const {
          nodes: afterNodes,
          variables: afterVariables
        } = extractReferencesInNodeExpressions(allAfterEndNodes, allAfterEndNodes.map(x => x.name).concat(subGraphNames), executeWorkflowNodeName, directAfterEndNodeNames);
        const createdWorkflow = await tryCreateWorkflow(makeSubworkflow(newWorkflowName, selection$1, nodes, workflowsStore.workflow.connections, variables, afterVariables, startNodeName, returnNodeName));
        if (createdWorkflow === null) return false;
        const executeWorkflowPosition = computeAveragePosition(subGraph);
        await replaceSelectionWithNode(makeExecuteWorkflowNode(createdWorkflow.id, executeWorkflowNodeName, executeWorkflowPosition, variables), subGraph.find(x => x.name === start$1)?.id, subGraph.find(x => x.name === end)?.id, subGraph, afterNodes);
        return true;
      }
      function trackStartExtractWorkflow(nodeCount, success$3) {
        telemetry.track("User started nodes to sub-workflow extraction", {
          node_count: nodeCount,
          success: success$3
        });
      }
      function trackExtractWorkflow(nodeCount, success$3) {
        telemetry.track("User extracted nodes to sub-workflow", {
          node_count: nodeCount,
          success: success$3
        });
      }
      /**
      * This mutates the current workflow and creates a new one.
      * Intended to be called from @WorkflowExtractionNameModal spawned
      * by @tryExtractNodesIntoSubworkflow
      */
      async function extractNodesIntoSubworkflow(selection$1, subGraph, newWorkflowName) {
        const success$3 = await doExtractNodesIntoSubworkflow(selection$1, subGraph, newWorkflowName);
        trackExtractWorkflow(subGraph.length, success$3);
      }
      /**
      * This starts the extraction process by checking whether the selection is extractable
      * and spawning a pop up asking for a sub-workflow name.
      * If confirmed, the modal calls @extractNodesIntoSubworkflow to handle the actual mutation
      *
      * @param nodeIds the ids to be extracted from the current workflow into a sub-workflow
      */
      function extractWorkflow(nodeIds) {
        const success$3 = tryExtractNodesIntoSubworkflow(nodeIds);
        trackStartExtractWorkflow(nodeIds.length, success$3);
      }
      return {
        adjacencyList,
        extractWorkflow,
        tryExtractNodesIntoSubworkflow,
        extractNodesIntoSubworkflow
      };
    }

    //#endregion
    //#region src/features/workflows/canvas/composables/useCanvasNode.ts
    function useCanvasNode() {
      const node$1 = inject(CanvasNodeKey);
      const data = computed(() => node$1?.data.value ?? {
        id: "",
        name: "",
        subtitle: "",
        type: "",
        typeVersion: 1,
        disabled: false,
        inputs: [],
        outputs: [],
        connections: {
          [CanvasConnectionMode.Input]: {},
          [CanvasConnectionMode.Output]: {}
        },
        issues: {
          execution: [],
          validation: [],
          visible: false
        },
        pinnedData: {
          count: 0,
          visible: false
        },
        execution: {
          running: false
        },
        runData: {
          iterations: 0,
          outputMap: {},
          visible: false
        },
        render: {
          type: CanvasNodeRenderType.Default,
          options: {}
        }
      });
      const id$1 = computed(() => node$1?.id.value ?? "");
      const label$7 = computed(() => node$1?.label.value ?? "");
      const subtitle$1 = computed(() => data.value.subtitle);
      const name = computed(() => data.value.name);
      const inputs$1 = computed(() => data.value.inputs);
      const outputs = computed(() => data.value.outputs);
      const connections = computed(() => data.value.connections);
      const isDisabled = computed(() => data.value.disabled);
      const isReadOnly = computed(() => node$1?.readOnly.value);
      const isSelected = computed(() => node$1?.selected.value);
      const pinnedDataCount = computed(() => data.value.pinnedData.count);
      const hasPinnedData = computed(() => data.value.pinnedData.count > 0);
      const issues$1 = computed(() => [...data.value.issues.execution, ...data.value.issues.validation]);
      const executionErrors = computed(() => data.value.issues.execution ?? []);
      const validationErrors = computed(() => data.value.issues.validation ?? []);
      const hasIssues = computed(() => data.value.issues.visible);
      const hasExecutionErrors = computed(() => data.value.issues.execution.length > 0);
      const hasValidationErrors = computed(() => data.value.issues.validation.length > 0);
      const executionStatus = computed(() => data.value.execution.status);
      const executionWaiting = computed(() => data.value.execution.waiting);
      const executionWaitingForNext = computed(() => data.value.execution.waitingForNext);
      const executionRunning = computed(() => data.value.execution.running);
      const runDataOutputMap = computed(() => data.value.runData.outputMap);
      return {
        node: node$1,
        id: id$1,
        name,
        label: label$7,
        subtitle: subtitle$1,
        inputs: inputs$1,
        outputs,
        connections,
        isDisabled,
        isReadOnly,
        isSelected,
        pinnedDataCount,
        hasPinnedData,
        runDataIterations: computed(() => data.value.runData.iterations),
        runDataOutputMap,
        hasRunData: computed(() => data.value.runData.visible),
        issues: issues$1,
        executionErrors,
        validationErrors,
        hasIssues,
        hasExecutionErrors,
        hasValidationErrors,
        executionStatus,
        executionWaiting,
        executionWaitingForNext,
        executionRunning,
        render: computed(() => data.value.render),
        eventBus: computed(() => node$1?.eventBus.value),
        isNotInstalledCommunityNode: computed(() => isCommunityPackageName(data.value.type) && !useNodeTypesStore().getIsNodeInstalled(data.value.type))
      };
    }

    //#endregion
    //#region src/app/utils/injectStrict.ts
    function injectStrict(key, fallback) {
      const resolved = inject(key, fallback);
      if (!resolved) throw new Error(`Could not resolve ${key.description}`);
      return resolved;
    }

    //#endregion
    //#region src/features/workflows/canvas/composables/useCanvas.ts
    function useCanvas() {
      return injectStrict(CanvasKey);
    }

    //#endregion
    //#region src/features/workflows/canvas/components/elements/nodes/render-types/parts/CanvasNodeStatusIcons.vue?vue&type=script&setup=true&lang.ts

    //#endregion
    //#region src/app/composables/useNodeConnections.ts
    function useNodeConnections({
      inputs: inputs$1,
      outputs,
      connections
    }) {
      /**
      * Inputs
      */
      const mainInputs = computed(() => unref(inputs$1).filter(input => input.type === NodeConnectionTypes.Main));
      const nonMainInputs = computed(() => unref(inputs$1).filter(input => input.type !== NodeConnectionTypes.Main));
      const requiredNonMainInputs = computed(() => nonMainInputs.value.filter(input => input.required));
      const mainInputConnections = computed(() => unref(connections)[CanvasConnectionMode.Input][NodeConnectionTypes.Main] ?? []);
      /**
      * Outputs
      */
      const mainOutputs = computed(() => unref(outputs).filter(output => output.type === NodeConnectionTypes.Main));
      const nonMainOutputs = computed(() => unref(outputs).filter(output => output.type !== NodeConnectionTypes.Main));
      const mainOutputConnections = computed(() => unref(connections)[CanvasConnectionMode.Output][NodeConnectionTypes.Main] ?? []);
      /**
      * Connection validation
      */
      function isValidConnection(connection) {
        const {
          type: sourceType,
          mode: sourceMode
        } = parseCanvasConnectionHandleString(connection.sourceHandle);
        const {
          type: targetType,
          mode: targetMode
        } = parseCanvasConnectionHandleString(connection.targetHandle);
        return !(sourceMode === targetMode) && sourceType === targetType;
      }
      return {
        mainInputs,
        nonMainInputs,
        requiredNonMainInputs,
        mainInputConnections,
        mainOutputs,
        nonMainOutputs,
        mainOutputConnections,
        isValidConnection
      };
    }

    //#endregion
    //#region src/features/workflows/canvas/components/elements/nodes/render-types/parts/CanvasNodeSettingsIcons.vue?vue&type=script&setup=true&lang.ts

    //#endregion
    //#region src/features/workflows/canvas/experimental/experimentalNdv.utils.ts
    function getNodeSubTitleText(node$1, nodeType, includeOperation, t) {
      if (node$1.disabled) return `(${t.baseText("node.disabled")})`;
      const displayName = nodeType.displayName ?? "";
      if (!includeOperation) return displayName;
      const selectedOperation = node$1.parameters.operation;
      const selectedOperationDisplayName = selectedOperation && nodeType.properties.find(p => p.name === "operation")?.options?.find(o => "value" in o && o.value === selectedOperation)?.name;
      if (!selectedOperationDisplayName) return displayName;
      return `${displayName}: ${selectedOperationDisplayName}`;
    }

    //#endregion
    //#region src/features/workflows/canvas/experimental/components/ExperimentalEmbeddedNdvActions.vue?vue&type=script&setup=true&lang.ts

    //#endregion
    //#region src/features/workflows/canvas/experimental/composables/useExpressionResolveCtx.ts
    function useExpressionResolveCtx(node$1) {
      const environmentsStore = environments_store_default();
      const workflowsStore = useWorkflowsStore();
      const workflowObject = computed(() => workflowsStore.workflowObject);
      return computed(() => {
        if (!node$1.value) return;
        const runIndex = 0;
        const execution = workflowsStore.workflowExecutionData;
        const nodeName = node$1.value.name;
        function findInputNode() {
          const source = (execution?.data?.resultData.runData[nodeName] ?? [])[runIndex]?.source[0];
          if (source) return {
            name: source.previousNode,
            branchIndex: source.previousNodeOutput ?? 0,
            runIndex: source.previousNodeRun ?? 0
          };
          const inputs$1 = workflowObject.value.getParentNodesByDepth(nodeName, 1);
          if (inputs$1.length > 0) return {
            name: inputs$1[0].name,
            branchIndex: inputs$1[0].indicies[0] ?? 0,
            runIndex: 0
          };
        }
        return {
          localResolve: true,
          envVars: environmentsStore.variablesAsObject,
          workflow: workflowObject.value,
          execution,
          nodeName,
          additionalKeys: {},
          inputNode: findInputNode(),
          connections: workflowsStore.connectionsBySourceNode
        };
      });
    }

    //#endregion
    //#region src/features/workflows/canvas/experimental/components/ExperimentalEmbeddedNodeDetails.vue?vue&type=script&setup=true&lang.ts

    function namespace$1(name) {
      var prefix = name += "",
        i = prefix.indexOf(":");
      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
      return namespaces$1.hasOwnProperty(prefix) ? {
        space: namespaces$1[prefix],
        local: name
      } : name;
    }
    function creatorInherit$1(name) {
      return function () {
        var document2 = this.ownerDocument,
          uri = this.namespaceURI;
        return uri === xhtml$1 && document2.documentElement.namespaceURI === xhtml$1 ? document2.createElement(name) : document2.createElementNS(uri, name);
      };
    }
    function creatorFixed$1(fullname) {
      return function () {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
      };
    }
    function creator$1(name) {
      var fullname = namespace$1(name);
      return (fullname.local ? creatorFixed$1 : creatorInherit$1)(fullname);
    }
    function none$1() {}
    function selector$1(selector2) {
      return selector2 == null ? none$1 : function () {
        return this.querySelector(selector2);
      };
    }
    function selection_select$1(select2) {
      if (typeof select2 !== "function") select2 = selector$1(select2);
      for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node$1, subnode, i = 0; i < n; ++i) if ((node$1 = group[i]) && (subnode = select2.call(node$1, node$1.__data__, i, group))) {
        if ("__data__" in node$1) subnode.__data__ = node$1.__data__;
        subgroup[i] = subnode;
      }
      return new Selection$2(subgroups, this._parents);
    }
    function array$1(x) {
      return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
    }
    function empty$1() {
      return [];
    }
    function selectorAll$1(selector2) {
      return selector2 == null ? empty$1 : function () {
        return this.querySelectorAll(selector2);
      };
    }
    function arrayAll$1(select2) {
      return function () {
        return array$1(select2.apply(this, arguments));
      };
    }
    function selection_selectAll$1(select2) {
      if (typeof select2 === "function") select2 = arrayAll$1(select2);else select2 = selectorAll$1(select2);
      for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) for (var group = groups[j], n = group.length, node$1, i = 0; i < n; ++i) if (node$1 = group[i]) {
        subgroups.push(select2.call(node$1, node$1.__data__, i, group));
        parents.push(node$1);
      }
      return new Selection$2(subgroups, parents);
    }
    function matcher$1(selector2) {
      return function () {
        return this.matches(selector2);
      };
    }
    function childMatcher$1(selector2) {
      return function (node$1) {
        return node$1.matches(selector2);
      };
    }
    function childFind$1(match) {
      return function () {
        return find$1.call(this.children, match);
      };
    }
    function childFirst$1() {
      return this.firstElementChild;
    }
    function selection_selectChild$1(match) {
      return this.select(match == null ? childFirst$1 : childFind$1(typeof match === "function" ? match : childMatcher$1(match)));
    }
    function children$1() {
      return Array.from(this.children);
    }
    function childrenFilter$1(match) {
      return function () {
        return filter$1.call(this.children, match);
      };
    }
    function selection_selectChildren$1(match) {
      return this.selectAll(match == null ? children$1 : childrenFilter$1(typeof match === "function" ? match : childMatcher$1(match)));
    }
    function selection_filter$1(match) {
      if (typeof match !== "function") match = matcher$1(match);
      for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node$1, i = 0; i < n; ++i) if ((node$1 = group[i]) && match.call(node$1, node$1.__data__, i, group)) subgroup.push(node$1);
      return new Selection$2(subgroups, this._parents);
    }
    function sparse$1(update) {
      return new Array(update.length);
    }
    function selection_enter$1() {
      return new Selection$2(this._enter || this._groups.map(sparse$1), this._parents);
    }
    function EnterNode$1(parent, datum2) {
      this.ownerDocument = parent.ownerDocument;
      this.namespaceURI = parent.namespaceURI;
      this._next = null;
      this._parent = parent;
      this.__data__ = datum2;
    }
    function constant$1$1(x) {
      return function () {
        return x;
      };
    }
    function bindIndex$1(parent, group, enter, update, exit, data) {
      var i = 0,
        node$1,
        groupLength = group.length,
        dataLength = data.length;
      for (; i < dataLength; ++i) if (node$1 = group[i]) {
        node$1.__data__ = data[i];
        update[i] = node$1;
      } else enter[i] = new EnterNode$1(parent, data[i]);
      for (; i < groupLength; ++i) if (node$1 = group[i]) exit[i] = node$1;
    }
    function bindKey$1(parent, group, enter, update, exit, data, key) {
      var i,
        node$1,
        nodeByKeyValue = /* @__PURE__ */new Map(),
        groupLength = group.length,
        dataLength = data.length,
        keyValues = new Array(groupLength),
        keyValue;
      for (i = 0; i < groupLength; ++i) if (node$1 = group[i]) {
        keyValues[i] = keyValue = key.call(node$1, node$1.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) exit[i] = node$1;else nodeByKeyValue.set(keyValue, node$1);
      }
      for (i = 0; i < dataLength; ++i) {
        keyValue = key.call(parent, data[i], i, data) + "";
        if (node$1 = nodeByKeyValue.get(keyValue)) {
          update[i] = node$1;
          node$1.__data__ = data[i];
          nodeByKeyValue.delete(keyValue);
        } else enter[i] = new EnterNode$1(parent, data[i]);
      }
      for (i = 0; i < groupLength; ++i) if ((node$1 = group[i]) && nodeByKeyValue.get(keyValues[i]) === node$1) exit[i] = node$1;
    }
    function datum$1(node$1) {
      return node$1.__data__;
    }
    function selection_data$1(value, key) {
      if (!arguments.length) return Array.from(this, datum$1);
      var bind = key ? bindKey$1 : bindIndex$1,
        parents = this._parents,
        groups = this._groups;
      if (typeof value !== "function") value = constant$1$1(value);
      for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
        var parent = parents[j],
          group = groups[j],
          groupLength = group.length,
          data = arraylike$1(value.call(parent, parent && parent.__data__, j, parents)),
          dataLength = data.length,
          enterGroup = enter[j] = new Array(dataLength),
          updateGroup = update[j] = new Array(dataLength);
        bind(parent, group, enterGroup, updateGroup, exit[j] = new Array(groupLength), data, key);
        for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) if (previous = enterGroup[i0]) {
          if (i0 >= i1) i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength);
          previous._next = next || null;
        }
      }
      update = new Selection$2(update, parents);
      update._enter = enter;
      update._exit = exit;
      return update;
    }
    function arraylike$1(data) {
      return typeof data === "object" && "length" in data ? data : Array.from(data);
    }
    function selection_exit$1() {
      return new Selection$2(this._exit || this._groups.map(sparse$1), this._parents);
    }
    function selection_join$1(onenter, onupdate, onexit) {
      var enter = this.enter(),
        update = this,
        exit = this.exit();
      if (typeof onenter === "function") {
        enter = onenter(enter);
        if (enter) enter = enter.selection();
      } else enter = enter.append(onenter + "");
      if (onupdate != null) {
        update = onupdate(update);
        if (update) update = update.selection();
      }
      if (onexit == null) exit.remove();else onexit(exit);
      return enter && update ? enter.merge(update).order() : update;
    }
    function selection_merge$1(context) {
      var selection$1 = context.selection ? context.selection() : context;
      for (var groups0 = this._groups, groups1 = selection$1._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node$1, i = 0; i < n; ++i) if (node$1 = group0[i] || group1[i]) merge[i] = node$1;
      for (; j < m0; ++j) merges[j] = groups0[j];
      return new Selection$2(merges, this._parents);
    }
    function selection_order$1() {
      for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) for (var group = groups[j], i = group.length - 1, next = group[i], node$1; --i >= 0;) if (node$1 = group[i]) {
        if (next && node$1.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node$1, next);
        next = node$1;
      }
      return this;
    }
    function selection_sort$1(compare) {
      if (!compare) compare = ascending$1;
      function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
      }
      for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node$1, i = 0; i < n; ++i) if (node$1 = group[i]) sortgroup[i] = node$1;
        sortgroup.sort(compareNode);
      }
      return new Selection$2(sortgroups, this._parents).order();
    }
    function ascending$1(a, b) {
      return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }
    function selection_call$1() {
      var callback = arguments[0];
      arguments[0] = this;
      callback.apply(null, arguments);
      return this;
    }
    function selection_nodes$1() {
      return Array.from(this);
    }
    function selection_node$1() {
      for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node$1 = group[i];
        if (node$1) return node$1;
      }
      return null;
    }
    function selection_size$1() {
      let size$1 = 0;
      for (const node$1 of this) ++size$1;
      return size$1;
    }
    function selection_empty$1() {
      return !this.node();
    }
    function selection_each$1(callback) {
      for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) for (var group = groups[j], i = 0, n = group.length, node$1; i < n; ++i) if (node$1 = group[i]) callback.call(node$1, node$1.__data__, i, group);
      return this;
    }
    function attrRemove$2(name) {
      return function () {
        this.removeAttribute(name);
      };
    }
    function attrRemoveNS$2(fullname) {
      return function () {
        this.removeAttributeNS(fullname.space, fullname.local);
      };
    }
    function attrConstant$2(name, value) {
      return function () {
        this.setAttribute(name, value);
      };
    }
    function attrConstantNS$2(fullname, value) {
      return function () {
        this.setAttributeNS(fullname.space, fullname.local, value);
      };
    }
    function attrFunction$2(name, value) {
      return function () {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
      };
    }
    function attrFunctionNS$2(fullname, value) {
      return function () {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
      };
    }
    function selection_attr$1(name, value) {
      var fullname = namespace$1(name);
      if (arguments.length < 2) {
        var node$1 = this.node();
        return fullname.local ? node$1.getAttributeNS(fullname.space, fullname.local) : node$1.getAttribute(fullname);
      }
      return this.each((value == null ? fullname.local ? attrRemoveNS$2 : attrRemove$2 : typeof value === "function" ? fullname.local ? attrFunctionNS$2 : attrFunction$2 : fullname.local ? attrConstantNS$2 : attrConstant$2)(fullname, value));
    }
    function defaultView$1(node$1) {
      return node$1.ownerDocument && node$1.ownerDocument.defaultView || node$1.document && node$1 || node$1.defaultView;
    }
    function styleRemove$2(name) {
      return function () {
        this.style.removeProperty(name);
      };
    }
    function styleConstant$2(name, value, priority) {
      return function () {
        this.style.setProperty(name, value, priority);
      };
    }
    function styleFunction$2(name, value, priority) {
      return function () {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
      };
    }
    function selection_style$1(name, value, priority) {
      return arguments.length > 1 ? this.each((value == null ? styleRemove$2 : typeof value === "function" ? styleFunction$2 : styleConstant$2)(name, value, priority == null ? "" : priority)) : styleValue$1(this.node(), name);
    }
    function styleValue$1(node$1, name) {
      return node$1.style.getPropertyValue(name) || defaultView$1(node$1).getComputedStyle(node$1, null).getPropertyValue(name);
    }
    function propertyRemove$1(name) {
      return function () {
        delete this[name];
      };
    }
    function propertyConstant$1(name, value) {
      return function () {
        this[name] = value;
      };
    }
    function propertyFunction$1(name, value) {
      return function () {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];else this[name] = v;
      };
    }
    function selection_property$1(name, value) {
      return arguments.length > 1 ? this.each((value == null ? propertyRemove$1 : typeof value === "function" ? propertyFunction$1 : propertyConstant$1)(name, value)) : this.node()[name];
    }
    function classArray$1(string) {
      return string.trim().split(/^|\s+/);
    }
    function classList$1(node$1) {
      return node$1.classList || new ClassList$1(node$1);
    }
    function ClassList$1(node$1) {
      this._node = node$1;
      this._names = classArray$1(node$1.getAttribute("class") || "");
    }
    function classedAdd$1(node$1, names) {
      var list = classList$1(node$1),
        i = -1,
        n = names.length;
      while (++i < n) list.add(names[i]);
    }
    function classedRemove$1(node$1, names) {
      var list = classList$1(node$1),
        i = -1,
        n = names.length;
      while (++i < n) list.remove(names[i]);
    }
    function classedTrue$1(names) {
      return function () {
        classedAdd$1(this, names);
      };
    }
    function classedFalse$1(names) {
      return function () {
        classedRemove$1(this, names);
      };
    }
    function classedFunction$1(names, value) {
      return function () {
        (value.apply(this, arguments) ? classedAdd$1 : classedRemove$1)(this, names);
      };
    }
    function selection_classed$1(name, value) {
      var names = classArray$1(name + "");
      if (arguments.length < 2) {
        var list = classList$1(this.node()),
          i = -1,
          n = names.length;
        while (++i < n) if (!list.contains(names[i])) return false;
        return true;
      }
      return this.each((typeof value === "function" ? classedFunction$1 : value ? classedTrue$1 : classedFalse$1)(names, value));
    }
    function textRemove$1() {
      this.textContent = "";
    }
    function textConstant$2(value) {
      return function () {
        this.textContent = value;
      };
    }
    function textFunction$2(value) {
      return function () {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
      };
    }
    function selection_text$1(value) {
      return arguments.length ? this.each(value == null ? textRemove$1 : (typeof value === "function" ? textFunction$2 : textConstant$2)(value)) : this.node().textContent;
    }
    function htmlRemove$1() {
      this.innerHTML = "";
    }
    function htmlConstant$1(value) {
      return function () {
        this.innerHTML = value;
      };
    }
    function htmlFunction$1(value) {
      return function () {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
      };
    }
    function selection_html$1(value) {
      return arguments.length ? this.each(value == null ? htmlRemove$1 : (typeof value === "function" ? htmlFunction$1 : htmlConstant$1)(value)) : this.node().innerHTML;
    }
    function raise$1() {
      if (this.nextSibling) this.parentNode.appendChild(this);
    }
    function selection_raise$1() {
      return this.each(raise$1);
    }
    function lower$1() {
      if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function selection_lower$1() {
      return this.each(lower$1);
    }
    function selection_append$1(name) {
      var create$1 = typeof name === "function" ? name : creator$1(name);
      return this.select(function () {
        return this.appendChild(create$1.apply(this, arguments));
      });
    }
    function constantNull$1() {
      return null;
    }
    function selection_insert$1(name, before) {
      var create$1 = typeof name === "function" ? name : creator$1(name),
        select2 = before == null ? constantNull$1 : typeof before === "function" ? before : selector$1(before);
      return this.select(function () {
        return this.insertBefore(create$1.apply(this, arguments), select2.apply(this, arguments) || null);
      });
    }
    function remove$1() {
      var parent = this.parentNode;
      if (parent) parent.removeChild(this);
    }
    function selection_remove$1() {
      return this.each(remove$1);
    }
    function selection_cloneShallow$1() {
      var clone = this.cloneNode(false),
        parent = this.parentNode;
      return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
    }
    function selection_cloneDeep$1() {
      var clone = this.cloneNode(true),
        parent = this.parentNode;
      return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
    }
    function selection_clone$1(deep) {
      return this.select(deep ? selection_cloneDeep$1 : selection_cloneShallow$1);
    }
    function selection_datum$1(value) {
      return arguments.length ? this.property("__data__", value) : this.node().__data__;
    }
    function contextListener$1(listener) {
      return function (event) {
        listener.call(this, event, this.__data__);
      };
    }
    function parseTypenames$1$1(typenames) {
      return typenames.trim().split(/^|\s+/).map(function (t) {
        var name = "",
          i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {
          type: t,
          name
        };
      });
    }
    function onRemove$1(typename) {
      return function () {
        var on = this.__on;
        if (!on) return;
        for (var j = 0, i = -1, m = on.length, o; j < m; ++j) if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) this.removeEventListener(o.type, o.listener, o.options);else on[++i] = o;
        if (++i) on.length = i;else delete this.__on;
      };
    }
    function onAdd$1(typename, value, options) {
      return function () {
        var on = this.__on,
          o,
          listener = contextListener$1(value);
        if (on) {
          for (var j = 0, m = on.length; j < m; ++j) if ((o = on[j]).type === typename.type && o.name === typename.name) {
            this.removeEventListener(o.type, o.listener, o.options);
            this.addEventListener(o.type, o.listener = listener, o.options = options);
            o.value = value;
            return;
          }
        }
        this.addEventListener(typename.type, listener, options);
        o = {
          type: typename.type,
          name: typename.name,
          value,
          listener,
          options
        };
        if (!on) this.__on = [o];else on.push(o);
      };
    }
    function selection_on$1(typename, value, options) {
      var typenames = parseTypenames$1$1(typename + ""),
        i,
        n = typenames.length,
        t;
      if (arguments.length < 2) {
        var on = this.node().__on;
        if (on) {
          for (var j = 0, m = on.length, o; j < m; ++j) for (i = 0, o = on[j]; i < n; ++i) if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value;
        }
        return;
      }
      on = value ? onAdd$1 : onRemove$1;
      for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
      return this;
    }
    function dispatchEvent$1(node$1, type, params) {
      var window$1 = defaultView$1(node$1),
        event = window$1.CustomEvent;
      if (typeof event === "function") event = new event(type, params);else {
        event = window$1.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
      }
      node$1.dispatchEvent(event);
    }
    function dispatchConstant$1(type, params) {
      return function () {
        return dispatchEvent$1(this, type, params);
      };
    }
    function dispatchFunction$1(type, params) {
      return function () {
        return dispatchEvent$1(this, type, params.apply(this, arguments));
      };
    }
    function selection_dispatch$1(type, params) {
      return this.each((typeof params === "function" ? dispatchFunction$1 : dispatchConstant$1)(type, params));
    }
    function* selection_iterator$1() {
      for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) for (var group = groups[j], i = 0, n = group.length, node$1; i < n; ++i) if (node$1 = group[i]) yield node$1;
    }
    function Selection$2(groups, parents) {
      this._groups = groups;
      this._parents = parents;
    }
    function selection_selection$1() {
      return this;
    }
    function select$1(selector2) {
      return typeof selector2 === "string" ? new Selection$2([[document.querySelector(selector2)]], [document.documentElement]) : new Selection$2([[selector2]], root$1);
    }
    function sourceEvent$1(event) {
      let sourceEvent2;
      while (sourceEvent2 = event.sourceEvent) event = sourceEvent2;
      return event;
    }
    function pointer$1(event, node$1) {
      event = sourceEvent$1(event);
      if (node$1 === void 0) node$1 = event.currentTarget;
      if (node$1) {
        var svg = node$1.ownerSVGElement || node$1;
        if (svg.createSVGPoint) {
          var point = svg.createSVGPoint();
          point.x = event.clientX, point.y = event.clientY;
          point = point.matrixTransform(node$1.getScreenCTM().inverse());
          return [point.x, point.y];
        }
        if (node$1.getBoundingClientRect) {
          var rect = node$1.getBoundingClientRect();
          return [event.clientX - rect.left - node$1.clientLeft, event.clientY - rect.top - node$1.clientTop];
        }
      }
      return [event.pageX, event.pageY];
    }
    function dispatch$1() {
      for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
        if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
      }
      return new Dispatch$1(_);
    }
    function Dispatch$1(_) {
      this._ = _;
    }
    function parseTypenames$2(typenames, types) {
      return typenames.trim().split(/^|\s+/).map(function (t) {
        var name = "",
          i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {
          type: t,
          name
        };
      });
    }
    function get$2(type, name) {
      for (var i = 0, n = type.length, c; i < n; ++i) if ((c = type[i]).name === name) return c.value;
    }
    function set$2(type, name, callback) {
      for (var i = 0, n = type.length; i < n; ++i) if (type[i].name === name) {
        type[i] = noop$1, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
      }
      if (callback != null) type.push({
        name,
        value: callback
      });
      return type;
    }
    function nopropagation$1(event) {
      event.stopImmediatePropagation();
    }
    function noevent$2(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    function nodrag(view) {
      var root2 = view.document.documentElement,
        selection$1 = select$1(view).on("dragstart.drag", noevent$2, nonpassivecapture$1);
      if ("onselectstart" in root2) selection$1.on("selectstart.drag", noevent$2, nonpassivecapture$1);else {
        root2.__noselect = root2.style.MozUserSelect;
        root2.style.MozUserSelect = "none";
      }
    }
    function yesdrag$1(view, noclick) {
      var root2 = view.document.documentElement,
        selection$1 = select$1(view).on("dragstart.drag", null);
      if (noclick) {
        selection$1.on("click.drag", noevent$2, nonpassivecapture$1);
        setTimeout(function () {
          selection$1.on("click.drag", null);
        }, 0);
      }
      if ("onselectstart" in root2) selection$1.on("selectstart.drag", null);else {
        root2.style.MozUserSelect = root2.__noselect;
        delete root2.__noselect;
      }
    }
    function DragEvent(type, {
      sourceEvent: sourceEvent2,
      subject,
      target: target$1,
      identifier,
      active,
      x,
      y,
      dx,
      dy,
      dispatch: dispatch2
    }) {
      Object.defineProperties(this, {
        type: {
          value: type,
          enumerable: true,
          configurable: true
        },
        sourceEvent: {
          value: sourceEvent2,
          enumerable: true,
          configurable: true
        },
        subject: {
          value: subject,
          enumerable: true,
          configurable: true
        },
        target: {
          value: target$1,
          enumerable: true,
          configurable: true
        },
        identifier: {
          value: identifier,
          enumerable: true,
          configurable: true
        },
        active: {
          value: active,
          enumerable: true,
          configurable: true
        },
        x: {
          value: x,
          enumerable: true,
          configurable: true
        },
        y: {
          value: y,
          enumerable: true,
          configurable: true
        },
        dx: {
          value: dx,
          enumerable: true,
          configurable: true
        },
        dy: {
          value: dy,
          enumerable: true,
          configurable: true
        },
        _: {
          value: dispatch2
        }
      });
    }
    function defaultFilter$1(event) {
      return !event.ctrlKey && !event.button;
    }
    function defaultContainer() {
      return this.parentNode;
    }
    function defaultSubject(event, d) {
      return d == null ? {
        x: event.x,
        y: event.y
      } : d;
    }
    function defaultTouchable$1() {
      return navigator.maxTouchPoints || "ontouchstart" in this;
    }
    function drag() {
      var filter2 = defaultFilter$1,
        container$1 = defaultContainer,
        subject = defaultSubject,
        touchable = defaultTouchable$1,
        gestures = {},
        listeners = dispatch$1("start", "drag", "end"),
        active = 0,
        mousedownx,
        mousedowny,
        mousemoving,
        touchending,
        clickDistance2 = 0;
      function drag2(selection$1) {
        selection$1.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
      }
      function mousedowned(event, d) {
        if (touchending || !filter2.call(this, event, d)) return;
        var gesture = beforestart(this, container$1.call(this, event, d), event, d, "mouse");
        if (!gesture) return;
        select$1(event.view).on("mousemove.drag", mousemoved, nonpassivecapture$1).on("mouseup.drag", mouseupped, nonpassivecapture$1);
        nodrag(event.view);
        nopropagation$1(event);
        mousemoving = false;
        mousedownx = event.clientX;
        mousedowny = event.clientY;
        gesture("start", event);
      }
      function mousemoved(event) {
        noevent$2(event);
        if (!mousemoving) {
          var dx = event.clientX - mousedownx,
            dy = event.clientY - mousedowny;
          mousemoving = dx * dx + dy * dy > clickDistance2;
        }
        gestures.mouse("drag", event);
      }
      function mouseupped(event) {
        select$1(event.view).on("mousemove.drag mouseup.drag", null);
        yesdrag$1(event.view, mousemoving);
        noevent$2(event);
        gestures.mouse("end", event);
      }
      function touchstarted(event, d) {
        if (!filter2.call(this, event, d)) return;
        var touches = event.changedTouches,
          c = container$1.call(this, event, d),
          n = touches.length,
          i,
          gesture;
        for (i = 0; i < n; ++i) if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
          nopropagation$1(event);
          gesture("start", event, touches[i]);
        }
      }
      function touchmoved(event) {
        var touches = event.changedTouches,
          n = touches.length,
          i,
          gesture;
        for (i = 0; i < n; ++i) if (gesture = gestures[touches[i].identifier]) {
          noevent$2(event);
          gesture("drag", event, touches[i]);
        }
      }
      function touchended(event) {
        var touches = event.changedTouches,
          n = touches.length,
          i,
          gesture;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function () {
          touchending = null;
        }, 500);
        for (i = 0; i < n; ++i) if (gesture = gestures[touches[i].identifier]) {
          nopropagation$1(event);
          gesture("end", event, touches[i]);
        }
      }
      function beforestart(that, container2, event, d, identifier, touch) {
        var dispatch2 = listeners.copy(),
          p = pointer$1(touch || event, container2),
          dx,
          dy,
          s;
        if ((s = subject.call(that, new DragEvent("beforestart", {
          sourceEvent: event,
          target: drag2,
          identifier,
          active,
          x: p[0],
          y: p[1],
          dx: 0,
          dy: 0,
          dispatch: dispatch2
        }), d)) == null) return;
        dx = s.x - p[0] || 0;
        dy = s.y - p[1] || 0;
        return function gesture(type, event2, touch2) {
          var p0 = p,
            n;
          switch (type) {
            case "start":
              gestures[identifier] = gesture, n = active++;
              break;
            case "end":
              delete gestures[identifier], --active;
            case "drag":
              p = pointer$1(touch2 || event2, container2), n = active;
              break;
          }
          dispatch2.call(type, that, new DragEvent(type, {
            sourceEvent: event2,
            subject: s,
            target: drag2,
            identifier,
            active: n,
            x: p[0] + dx,
            y: p[1] + dy,
            dx: p[0] - p0[0],
            dy: p[1] - p0[1],
            dispatch: dispatch2
          }), d);
        };
      }
      drag2.filter = function (_) {
        return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant$3(!!_), drag2) : filter2;
      };
      drag2.container = function (_) {
        return arguments.length ? (container$1 = typeof _ === "function" ? _ : constant$3(_), drag2) : container$1;
      };
      drag2.subject = function (_) {
        return arguments.length ? (subject = typeof _ === "function" ? _ : constant$3(_), drag2) : subject;
      };
      drag2.touchable = function (_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$3(!!_), drag2) : touchable;
      };
      drag2.on = function () {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? drag2 : value;
      };
      drag2.clickDistance = function (_) {
        return arguments.length ? (clickDistance2 = (_ = +_) * _, drag2) : Math.sqrt(clickDistance2);
      };
      return drag2;
    }
    function getDirection({
      width: width$1,
      prevWidth,
      height,
      prevHeight,
      invertX,
      invertY
    }) {
      const deltaWidth = width$1 - prevWidth;
      const deltaHeight = height - prevHeight;
      const direction = [deltaWidth > 0 ? 1 : deltaWidth < 0 ? -1 : 0, deltaHeight > 0 ? 1 : deltaHeight < 0 ? -1 : 0];
      if (deltaWidth && invertX) direction[0] = direction[0] * -1;
      if (deltaHeight && invertY) direction[1] = direction[1] * -1;
      return direction;
    }
    //#endregion
    //#region src/features/workflows/canvas/composables/useCanvasNodeHandle.ts
    function useCanvasNodeHandle() {
      const handle$5 = inject(CanvasNodeHandleKey);
      return {
        label: computed(() => handle$5?.label.value ?? ""),
        isConnected: computed(() => handle$5?.isConnected.value ?? false),
        isConnecting: computed(() => handle$5?.isConnecting.value ?? false),
        isReadOnly: computed(() => handle$5?.isReadOnly.value),
        isRequired: computed(() => handle$5?.isRequired.value),
        maxConnections: computed(() => handle$5?.maxConnections.value),
        type: computed(() => handle$5?.type.value ?? NodeConnectionTypes.Main),
        mode: computed(() => handle$5?.mode.value ?? CanvasConnectionMode.Input),
        index: computed(() => handle$5?.index.value ?? 0),
        runData: computed(() => handle$5?.runData.value)
      };
    }

    //#endregion
    //#region src/features/workflows/canvas/components/elements/handles/render-types/parts/CanvasHandleRectangle.vue?vue&type=script&setup=true&lang.ts

    //#endregion
    //#region src/features/shared/contextMenu/composables/useContextMenuItems.ts
    function useContextMenuItems(targetNodeIds) {
      const uiStore = useUIStore();
      const nodeTypesStore = useNodeTypesStore();
      const workflowsStore = useWorkflowsStore();
      const sourceControlStore = useSourceControlStore();
      const i18n = useI18n();
      const workflowObject = computed(() => workflowsStore.workflowObject);
      const workflowPermissions = computed(() => getResourcePermissions(workflowsStore.workflow.scopes).workflow);
      const isReadOnly = computed(() => sourceControlStore.preferences.branchReadOnly || uiStore.isReadOnlyView || !workflowPermissions.value.update || workflowsStore.workflow.isArchived);
      const canOpenSubworkflow = computed(() => {
        if (targetNodes.value.length !== 1) return false;
        const node$1 = targetNodes.value[0];
        if (!isNodeWithWorkflowSelector(node$1)) return false;
        return !!getSubworkflowId(node$1);
      });
      const targetNodes = computed(() => targetNodeIds.value.map(nodeId => workflowsStore.getNodeById(nodeId)).filter(isPresent));
      const canAddNodeOfType = nodeType => {
        const sameTypeNodes = workflowsStore.allNodes.filter(n => n.type === nodeType.name);
        return nodeType.maxNodes === void 0 || sameTypeNodes.length < nodeType.maxNodes;
      };
      const canDuplicateNode = node$1 => {
        const nodeType = nodeTypesStore.getNodeType(node$1.type, node$1.typeVersion);
        if (!nodeType) return false;
        if (NOT_DUPLICATABLE_NODE_TYPES.includes(nodeType.name)) return false;
        return canAddNodeOfType(nodeType);
      };
      const hasPinData = node$1 => {
        return !!workflowsStore.pinDataByNodeName(node$1.name);
      };
      const isExecutable$1 = node$1 => {
        const workflowNode = workflowObject.value.getNode(node$1.name);
        const nodeType = nodeTypesStore.getNodeType(workflowNode.type, workflowNode.typeVersion);
        return isExecutable(workflowObject.value, workflowNode, nodeType);
      };
      return computed(() => {
        const nodes = targetNodes.value;
        const onlyStickies = nodes.every(node$1 => node$1.type === STICKY_NODE_TYPE);
        const i18nOptions = {
          adjustToNumber: nodes.length,
          interpolate: {
            subject: onlyStickies ? i18n.baseText("contextMenu.sticky", {
              adjustToNumber: nodes.length
            }) : i18n.baseText("contextMenu.node", {
              adjustToNumber: nodes.length
            })
          }
        };
        const selectionActions = [{
          id: "select_all",
          divided: true,
          label: i18n.baseText("contextMenu.selectAll"),
          shortcut: {
            metaKey: true,
            keys: ["A"]
          },
          disabled: nodes.length === workflowsStore.allNodes.length
        }, {
          id: "deselect_all",
          label: i18n.baseText("contextMenu.deselectAll"),
          disabled: nodes.length === 0
        }];
        const extractionActions = [{
          id: "extract_sub_workflow",
          divided: true,
          label: i18n.baseText("contextMenu.extract", {
            adjustToNumber: nodes.length
          }),
          shortcut: {
            altKey: true,
            keys: ["X"]
          },
          disabled: isReadOnly.value
        }];
        const layoutActions = [{
          id: "tidy_up",
          divided: true,
          label: i18n.baseText(nodes.length < 2 ? "contextMenu.tidyUpWorkflow" : "contextMenu.tidyUpSelection"),
          shortcut: {
            shiftKey: true,
            altKey: true,
            keys: ["T"]
          },
          disabled: isReadOnly.value
        }];
        if (nodes.length === 0) return [{
          id: "add_node",
          shortcut: {
            keys: ["Tab"]
          },
          label: i18n.baseText("contextMenu.addNode"),
          disabled: isReadOnly.value
        }, {
          id: "add_sticky",
          shortcut: {
            shiftKey: true,
            keys: ["s"]
          },
          label: i18n.baseText("contextMenu.addSticky"),
          disabled: isReadOnly.value
        }, ...layoutActions, ...selectionActions];else {
          const menuActions = [!onlyStickies && {
            id: "toggle_activation",
            label: nodes.every(node$1 => node$1.disabled) ? i18n.baseText("contextMenu.activate", i18nOptions) : i18n.baseText("contextMenu.deactivate", i18nOptions),
            shortcut: {
              keys: ["D"]
            },
            disabled: isReadOnly.value
          }, !onlyStickies && {
            id: "toggle_pin",
            label: nodes.every(node$1 => hasPinData(node$1)) ? i18n.baseText("contextMenu.unpin", i18nOptions) : i18n.baseText("contextMenu.pin", i18nOptions),
            shortcut: {
              keys: ["p"]
            },
            disabled: isReadOnly.value || !nodes.every(n => usePinnedData(n).canPinNode(true))
          }, {
            id: "copy",
            label: i18n.baseText("contextMenu.copy", i18nOptions),
            shortcut: {
              metaKey: true,
              keys: ["C"]
            }
          }, {
            id: "duplicate",
            label: i18n.baseText("contextMenu.duplicate", i18nOptions),
            shortcut: {
              metaKey: true,
              keys: ["D"]
            },
            disabled: isReadOnly.value || !nodes.every(canDuplicateNode)
          }, ...layoutActions, ...extractionActions, ...selectionActions, {
            id: "delete",
            divided: true,
            label: i18n.baseText("contextMenu.delete", i18nOptions),
            shortcut: {
              keys: ["Del"]
            },
            disabled: isReadOnly.value
          }].filter(Boolean);
          if (nodes.length === 1) {
            const singleNodeActions = onlyStickies ? [{
              id: "open",
              label: i18n.baseText("contextMenu.editSticky"),
              shortcut: {
                keys: ["↵"]
              },
              disabled: isReadOnly.value
            }, {
              id: "change_color",
              label: i18n.baseText("contextMenu.changeColor"),
              disabled: isReadOnly.value
            }] : [{
              id: "open",
              label: i18n.baseText("contextMenu.open"),
              shortcut: {
                keys: ["↵"]
              }
            }, {
              id: "execute",
              label: i18n.baseText("contextMenu.test"),
              disabled: isReadOnly.value || !isExecutable$1(nodes[0])
            }, {
              id: "rename",
              label: i18n.baseText("contextMenu.rename"),
              shortcut: {
                keys: ["Space"]
              },
              disabled: isReadOnly.value
            }, {
              id: "replace",
              label: i18n.baseText("contextMenu.replace"),
              shortcut: {
                keys: ["R"]
              },
              disabled: isReadOnly.value
            }];
            if (isNodeWithWorkflowSelector(nodes[0])) singleNodeActions.push({
              id: "open_sub_workflow",
              label: i18n.baseText("contextMenu.openSubworkflow"),
              shortcut: {
                shiftKey: true,
                metaKey: true,
                keys: ["O"]
              },
              disabled: !canOpenSubworkflow.value
            });
            menuActions.unshift(...singleNodeActions);
          }
          return menuActions;
        }
      });
    }

    //#endregion
    //#region src/features/shared/contextMenu/composables/useContextMenu.ts

    function useCanvasLayout(canvasId, isEmbeddedNdvActive) {
      const {
        findNode,
        findEdge,
        getSelectedNodes,
        edges: allEdges,
        nodes: allNodes
      } = useVueFlow(canvasId);
      function getTargetData(target$1) {
        if (target$1 === "selection") return {
          nodes: getSelectedNodes.value,
          edges: allEdges.value
        };
        return {
          nodes: allNodes.value,
          edges: allEdges.value
        };
      }
      function sortByPosition(posA, posB) {
        const yDiff = posA.y - posB.y;
        return yDiff === 0 ? posA.x - posB.x : yDiff;
      }
      function sortNodesByPosition(nodeA, nodeB) {
        const hasEdgesA = allEdges.value.some(edge$2 => edge$2.target === nodeA.id);
        const hasEdgesB = allEdges.value.some(edge$2 => edge$2.target === nodeB.id);
        if (!hasEdgesA && hasEdgesB) return -1;
        if (hasEdgesA && !hasEdgesB) return 1;
        return sortByPosition(nodeA.position, nodeB.position);
      }
      function sortEdgesByPosition(edgeA, edgeB) {
        return sortByPosition(positionFromEdge(edgeA), positionFromEdge(edgeB));
      }
      function positionFromEdge(edge$2) {
        return {
          x: edge$2.targetX,
          y: edge$2.targetY
        };
      }
      function getNodeDimensions(node$1) {
        if (node$1.dimensions && typeof node$1.dimensions.width === "number" && typeof node$1.dimensions.height === "number" && node$1.dimensions.width > 0 && node$1.dimensions.height > 0) return {
          width: node$1.dimensions.width,
          height: node$1.dimensions.height
        };
        if (node$1.data && node$1.data.render) return calculateNodeSize(node$1.data.render.type === CanvasNodeRenderType.Default && node$1.data.render.options.configuration === true, node$1.data.render.type === CanvasNodeRenderType.Default && node$1.data.render.options.configurable === true, node$1.data.inputs.filter(input => input.type === "main").length || 1, node$1.data.outputs.filter(output => output.type === "main").length || 1, node$1.data.inputs.filter(input => input.type !== "main").length + node$1.data.outputs.filter(output => output.type !== "main").length, isEmbeddedNdvActive.value);
        return {
          width: DEFAULT_NODE_SIZE[0],
          height: DEFAULT_NODE_SIZE[1]
        };
      }
      function createDagreGraph({
        nodes,
        edges
      }) {
        const graph = new import_dagre.default.graphlib.Graph();
        graph.setDefaultEdgeLabel(() => ({}));
        const graphNodes = nodes.map(node$1 => findNode(node$1.id)).filter(isPresent).sort(sortNodesByPosition);
        const nodeIdSet = new Set(nodes.map(node$1 => node$1.id));
        graphNodes.forEach(node$1 => {
          const {
            width: width$1,
            height
          } = getNodeDimensions(node$1);
          const {
            x,
            y
          } = node$1.position;
          graph.setNode(node$1.id, {
            width: width$1,
            height,
            x,
            y
          });
        });
        edges.map(node$1 => findEdge(node$1.id)).filter(isPresent).filter(edge$2 => nodeIdSet.has(edge$2.source) && nodeIdSet.has(edge$2.target)).sort(sortEdgesByPosition).forEach(edge$2 => graph.setEdge(edge$2.source, edge$2.target));
        return graph;
      }
      function createDagreSubGraph({
        nodeIds,
        parent
      }) {
        const subGraph = new import_dagre.default.graphlib.Graph();
        subGraph.setGraph({
          rankdir: "LR",
          edgesep: NODE_Y_SPACING,
          nodesep: NODE_Y_SPACING,
          ranksep: NODE_X_SPACING
        });
        subGraph.setDefaultEdgeLabel(() => ({}));
        const nodeIdSet = new Set(nodeIds);
        parent.nodes().filter(nodeId => nodeIdSet.has(nodeId)).forEach(nodeId => {
          subGraph.setNode(nodeId, parent.node(nodeId));
        });
        parent.edges().filter(edge$2 => nodeIdSet.has(edge$2.v) && nodeIdSet.has(edge$2.w)).forEach(edge$2 => subGraph.setEdge(edge$2.v, edge$2.w, parent.edge(edge$2)));
        return subGraph;
      }
      function createDagreVerticalGraph({
        nodes
      }) {
        const subGraph = new import_dagre.default.graphlib.Graph();
        subGraph.setGraph({
          rankdir: "TB",
          align: "UL",
          edgesep: SUBGRAPH_SPACING,
          nodesep: SUBGRAPH_SPACING,
          ranksep: SUBGRAPH_SPACING
        });
        subGraph.setDefaultEdgeLabel(() => ({}));
        nodes.forEach(({
          id: id$1,
          box: {
            x,
            y,
            width: width$1,
            height
          }
        }) => subGraph.setNode(id$1, {
          x,
          y,
          width: width$1,
          height
        }));
        nodes.forEach((node$1, index) => {
          if (!nodes[index + 1]) return;
          subGraph.setEdge(node$1.id, nodes[index + 1].id);
        });
        return subGraph;
      }
      function createAiSubGraph({
        parent,
        nodeIds
      }) {
        const subGraph = new import_dagre.default.graphlib.Graph();
        subGraph.setGraph({
          rankdir: "TB",
          edgesep: AI_X_SPACING,
          nodesep: AI_X_SPACING,
          ranksep: AI_Y_SPACING
        });
        subGraph.setDefaultEdgeLabel(() => ({}));
        const nodeIdSet = new Set(nodeIds);
        parent.nodes().filter(nodeId => nodeIdSet.has(nodeId)).forEach(nodeId => {
          subGraph.setNode(nodeId, parent.node(nodeId));
        });
        parent.edges().filter(edge$2 => nodeIdSet.has(edge$2.v) && nodeIdSet.has(edge$2.w)).forEach(edge$2 => subGraph.setEdge(edge$2.w, edge$2.v));
        return subGraph;
      }
      function compositeBoundingBox(boxes) {
        const {
          minX,
          minY,
          maxX,
          maxY
        } = boxes.reduce((bbox, node$1) => {
          const {
            x,
            y,
            width: width$1,
            height
          } = node$1;
          return {
            minX: Math.min(bbox.minX, x),
            maxX: Math.max(bbox.maxX, x + width$1),
            minY: Math.min(bbox.minY, y),
            maxY: Math.max(bbox.maxY, y + height)
          };
        }, {
          minX: Infinity,
          minY: Infinity,
          maxX: -Infinity,
          maxY: -Infinity
        });
        return {
          x: minX,
          y: minY,
          width: maxX - minX,
          height: maxY - minY
        };
      }
      function boundingBoxFromCanvasNode(node$1) {
        const {
          width: width$1,
          height
        } = getNodeDimensions(node$1);
        return {
          x: node$1.position.x,
          y: node$1.position.y,
          width: width$1,
          height
        };
      }
      function boundingBoxFromDagreNode(node$1) {
        return {
          x: node$1.x - node$1.width / 2,
          y: node$1.y - node$1.height / 2,
          width: node$1.width,
          height: node$1.height
        };
      }
      function boundingBoxFromGraph(graph) {
        return compositeBoundingBox(graph.nodes().map(nodeId => boundingBoxFromDagreNode(graph.node(nodeId))));
      }
      function boundingBoxFromCanvasNodes(nodes) {
        return compositeBoundingBox(nodes.map(boundingBoxFromCanvasNode));
      }
      function isCoveredBy(parent, child) {
        const childRight = child.x + child.width;
        const childBottom = child.y + child.height;
        const parentRight = parent.x + parent.width;
        const parentBottom = parent.y + parent.height;
        return child.x >= parent.x && child.y >= parent.y && childRight <= parentRight && childBottom <= parentBottom;
      }
      function centerHorizontally(container$1, target$1) {
        return container$1.x + container$1.width / 2 - target$1.width / 2;
      }
      function intersects(container$1, target$1, padding = 0) {
        const targetWithPadding = {
          x: target$1.x - padding,
          y: target$1.y - padding,
          width: target$1.width + padding * 2,
          height: target$1.height + padding * 2
        };
        return !(targetWithPadding.x + targetWithPadding.width < container$1.x || targetWithPadding.x > container$1.x + container$1.width || targetWithPadding.y + targetWithPadding.height < container$1.y || targetWithPadding.y > container$1.y + container$1.height);
      }
      function isAiParentNode(node$1) {
        return node$1.render.type === CanvasNodeRenderType.Default && node$1.render.options.configurable && !node$1.render.options.configuration;
      }
      function isAiConfigNode(node$1) {
        return node$1.render.type === CanvasNodeRenderType.Default && node$1.render.options.configuration;
      }
      function getAllConnectedAiConfigNodes({
        graph,
        root: root$2,
        nodeById
      }) {
        return graph.predecessors(root$2.id).map(successor => nodeById[successor]).filter(node$1 => isAiConfigNode(node$1.data)).flatMap(node$1 => [node$1.id, ...getAllConnectedAiConfigNodes({
          graph,
          root: node$1.data,
          nodeById
        })]);
      }
      function layout$1(target$1) {
        const {
          nodes,
          edges
        } = getTargetData(target$1);
        const nonStickyNodes = nodes.filter(node$1 => node$1.data.type !== STICKY_NODE_TYPE).map(node$1 => findNode(node$1.id)).filter(isPresent);
        const boundingBoxBefore = boundingBoxFromCanvasNodes(nonStickyNodes);
        const parentGraph = createDagreGraph({
          nodes: nonStickyNodes,
          edges
        });
        const nodeById = nonStickyNodes.reduce((acc, node$1) => {
          acc[node$1.id] = node$1;
          return acc;
        }, {});
        const subgraphs = import_dagre.default.graphlib.alg.components(parentGraph).map(nodeIds => {
          const subgraph = createDagreSubGraph({
            nodeIds,
            parent: parentGraph
          });
          const aiGraphs = subgraph.nodes().map(nodeId => nodeById[nodeId].data).filter(isAiParentNode).map(aiParentNode => {
            const configNodeIds = getAllConnectedAiConfigNodes({
              graph: subgraph,
              nodeById,
              root: aiParentNode
            });
            const aiGraph = createAiSubGraph({
              parent: subgraph,
              nodeIds: configNodeIds.concat(aiParentNode.id)
            });
            configNodeIds.forEach(nodeId => subgraph.removeNode(nodeId));
            const rootEdges = subgraph.edges().filter(edge$2 => edge$2.v === aiParentNode.id || edge$2.w === aiParentNode.id);
            import_dagre.default.layout(aiGraph, {
              disableOptimalOrderHeuristic: true
            });
            const aiBoundingBox = boundingBoxFromGraph(aiGraph);
            subgraph.setNode(aiParentNode.id, {
              width: aiBoundingBox.width,
              height: aiBoundingBox.height
            });
            rootEdges.forEach(edge$2 => subgraph.setEdge(edge$2));
            return {
              graph: aiGraph,
              boundingBox: aiBoundingBox,
              aiParentNode
            };
          });
          import_dagre.default.layout(subgraph, {
            disableOptimalOrderHeuristic: true
          });
          return {
            graph: subgraph,
            aiGraphs,
            boundingBox: boundingBoxFromGraph(subgraph)
          };
        });
        const compositeGraph = createDagreVerticalGraph({
          nodes: subgraphs.map(({
            boundingBox
          }, index) => ({
            box: boundingBox,
            id: index.toString()
          }))
        });
        import_dagre.default.layout(compositeGraph, {
          disableOptimalOrderHeuristic: true
        });
        const boundingBoxByNodeId = subgraphs.flatMap(({
          graph,
          aiGraphs
        }, index) => {
          const subgraphPosition = compositeGraph.node(index.toString());
          const aiParentNodes = new Set(aiGraphs.map(({
            aiParentNode
          }) => aiParentNode.id));
          const offset = {
            x: 0,
            y: subgraphPosition.y - subgraphPosition.height / 2
          };
          return graph.nodes().flatMap(nodeId => {
            const {
              x,
              y,
              width: width$1,
              height
            } = graph.node(nodeId);
            const positionedNode = {
              id: nodeId,
              boundingBox: {
                x: x + offset.x - width$1 / 2,
                y: y + offset.y - height / 2,
                width: width$1,
                height
              }
            };
            if (aiParentNodes.has(nodeId)) {
              const aiGraph = aiGraphs.find(({
                aiParentNode
              }) => aiParentNode.id === nodeId);
              if (!aiGraph) return [];
              const aiParentNodeBox = positionedNode.boundingBox;
              const parentOffset = {
                x: aiParentNodeBox.x,
                y: aiParentNodeBox.y
              };
              return aiGraph.graph.nodes().map(aiNodeId => {
                const aiNode = aiGraph.graph.node(aiNodeId);
                return {
                  id: aiNodeId,
                  boundingBox: {
                    x: aiNode.x + parentOffset.x - aiNode.width / 2,
                    y: aiNode.y + parentOffset.y - aiNode.height / 2,
                    width: aiNode.width,
                    height: aiNode.height
                  }
                };
              });
            }
            return positionedNode;
          });
        }).reduce((acc, node$1) => {
          acc[node$1.id] = node$1.boundingBox;
          return acc;
        }, {});
        subgraphs.flatMap(({
          aiGraphs
        }) => aiGraphs).forEach(({
          graph
        }) => {
          const aiNodes = graph.nodes();
          const aiGraphBoundingBox = compositeBoundingBox(aiNodes.map(nodeId => boundingBoxByNodeId[nodeId]).filter(isPresent));
          const aiNodeVerticalCorrection = aiGraphBoundingBox.height / 2 - DEFAULT_NODE_SIZE[0] / 2;
          aiGraphBoundingBox.y += aiNodeVerticalCorrection;
          if (!Object.entries(boundingBoxByNodeId).filter(([id$1]) => !graph.hasNode(id$1)).some(([, nodeBoundingBox]) => intersects(aiGraphBoundingBox, nodeBoundingBox, NODE_Y_SPACING))) for (const aiNode of aiNodes) boundingBoxByNodeId[aiNode].y += aiNodeVerticalCorrection;
        });
        const positionedNodes = Object.entries(boundingBoxByNodeId).map(([id$1, boundingBox]) => ({
          id: id$1,
          boundingBox
        }));
        const boundingBoxAfter = compositeBoundingBox(positionedNodes.map(node$1 => node$1.boundingBox));
        const anchor = {
          x: boundingBoxAfter.x - boundingBoxBefore.x,
          y: boundingBoxAfter.y - boundingBoxBefore.y
        };
        const positionedStickies = nodes.filter(node$1 => node$1.data.type === STICKY_NODE_TYPE).map(node$1 => findNode(node$1.id)).filter(isPresent).map(sticky$1 => {
          const stickyBox = boundingBoxFromCanvasNode(sticky$1);
          const coveredNodes = nonStickyNodes.filter(node$1 => isCoveredBy(boundingBoxFromCanvasNode(sticky$1), boundingBoxFromCanvasNode(node$1)));
          if (coveredNodes.length === 0) return null;
          const coveredNodesBoxAfter = compositeBoundingBox(positionedNodes.filter(node$1 => coveredNodes.some(covered => covered.id === node$1.id)).map(({
            boundingBox
          }) => boundingBox));
          return {
            id: sticky$1.id,
            boundingBox: {
              x: centerHorizontally(coveredNodesBoxAfter, stickyBox),
              y: coveredNodesBoxAfter.y + coveredNodesBoxAfter.height - stickyBox.height + STICKY_BOTTOM_PADDING,
              height: stickyBox.height,
              width: stickyBox.width
            }
          };
        }).filter(isPresent);
        return {
          boundingBox: boundingBoxAfter,
          nodes: positionedNodes.concat(positionedStickies).map(({
            id: id$1,
            boundingBox
          }) => {
            return {
              id: id$1,
              x: boundingBox.x - anchor.x,
              y: boundingBox.y - anchor.y
            };
          })
        };
      }
      return {
        layout: layout$1
      };
    }

    //#endregion
    //#region src/features/workflows/canvas/composables/useCanvasNodeHover.ts
    /**
    * From a given node list, finds a node that the mouse cursor is within its hit box.
    * If more than one node meets this condition, returns the closest one.
    */
    function useCanvasNodeHover(nodesRef, store, getHitBox) {
      const id$1 = ref();
      const recalculate = useThrottleFn(event => {
        const bounds = store.viewportRef.value?.getBoundingClientRect();
        if (!bounds) return;
        const eventCoord = store.project({
          x: event.clientX - bounds.x,
          y: event.clientY - bounds.y
        });
        id$1.value = nodesRef.value.flatMap(node$1 => {
          if (node$1.data?.disabled) return [];
          const vueFlowNode = store.nodeLookup.value.get(node$1.id);
          if (!vueFlowNode) return [];
          const nodeRect = getRectOfNodes([vueFlowNode]);
          const hitBox = getHitBox(nodeRect);
          if (hitBox.x > eventCoord.x || eventCoord.x > hitBox.x + hitBox.width || hitBox.y > eventCoord.y || eventCoord.y > hitBox.y + hitBox.height) return [];
          const dx = nodeRect.x + nodeRect.width / 2 - eventCoord.x;
          const dy = nodeRect.y + nodeRect.height / 2 - eventCoord.y;
          return [{
            id: node$1.id,
            squareDistance: dx ** 2 + dy ** 2
          }];
        }).toSorted((nodeA, nodeB) => nodeA.squareDistance - nodeB.squareDistance)[0]?.id;
      }, 200, true, true);
      onMounted(() => {
        store.vueFlowRef.value?.addEventListener("mousemove", recalculate);
      });
      onUnmounted(() => {
        store.vueFlowRef.value?.removeEventListener("mousemove", recalculate);
      });
      return {
        id: id$1
      };
    }

    //#endregion
    //#region src/features/workflows/canvas/composables/useCanvasTraversal.ts
    function useCanvasTraversal({
      getIncomers,
      getOutgoers
    }) {
      function sortNodesByVerticalPosition(nodes) {
        return nodes.sort((a, b) => a.position.y - b.position.y);
      }
      function getIncomingNodes(id$1) {
        return sortNodesByVerticalPosition(getIncomers(id$1));
      }
      function getOutgoingNodes(id$1) {
        return sortNodesByVerticalPosition(getOutgoers(id$1));
      }
      function getSiblingNodes(id$1) {
        const incomingSiblings = getIncomers(id$1).flatMap(incomingNode => getOutgoers(incomingNode.id));
        const outgoingSiblings = getOutgoers(id$1).flatMap(outgoingNode => getIncomers(outgoingNode.id));
        return sortNodesByVerticalPosition([...incomingSiblings, ...outgoingSiblings].filter((node$1, index, nodes) => nodes.findIndex(n => n.id === node$1.id) === index));
      }
      function getDownstreamNodes(id$1, visited = []) {
        if (visited.includes(id$1)) return [];
        visited.push(id$1);
        const downstreamNodes = getOutgoers(id$1);
        return [...downstreamNodes, ...downstreamNodes.flatMap(node$1 => getDownstreamNodes(node$1.id, visited))].filter((node$1, index, nodes) => nodes.findIndex(n => n.id === node$1.id) === index);
      }
      function getUpstreamNodes(id$1, visited = []) {
        if (visited.includes(id$1)) return [];
        visited.push(id$1);
        const upstreamNodes = getIncomers(id$1);
        return [...upstreamNodes, ...upstreamNodes.flatMap(node$1 => getUpstreamNodes(node$1.id, visited))].filter((node$1, index, nodes) => nodes.findIndex(n => n.id === node$1.id) === index);
      }
      return {
        sortNodesByVerticalPosition,
        getIncomingNodes,
        getOutgoingNodes,
        getSiblingNodes,
        getDownstreamNodes,
        getUpstreamNodes
      };
    }

    //#endregion
    //#region ../@n8n/composables/src/useShortKeyPress.ts
    function useShortKeyPress(key, fn, {
      dedupe = true,
      threshold = 300,
      disabled: disabled$4 = false
    }) {
      const keyDownTime = ref(null);
      onKeyDown(key, () => {
        if (unref(disabled$4)) return;
        keyDownTime.value = Date.now();
      }, {
        dedupe
      });
      onKeyUp(key, () => {
        if (unref(disabled$4) || !keyDownTime.value) return;
        if (Date.now() - keyDownTime.value < threshold) fn();
      });
    }

    //#endregion
    //#region ../../../node_modules/.pnpm/@vue-flow+minimap@1.5.2_@vue-flow+core@1.45.0_vue@3.5.13_typescript@5.9.2___vue@3.5.13_typescript@5.9.2_/node_modules/@vue-flow/minimap/dist/vue-flow-minimap.mjs

    function dispatch() {
      for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
        if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
      }
      return new Dispatch(_);
    }
    function Dispatch(_) {
      this._ = _;
    }
    function parseTypenames$1(typenames, types) {
      return typenames.trim().split(/^|\s+/).map(function (t) {
        var name = "",
          i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {
          type: t,
          name
        };
      });
    }
    function get$1(type, name) {
      for (var i = 0, n = type.length, c; i < n; ++i) if ((c = type[i]).name === name) return c.value;
    }
    function set$1(type, name, callback) {
      for (var i = 0, n = type.length; i < n; ++i) if (type[i].name === name) {
        type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
      }
      if (callback != null) type.push({
        name,
        value: callback
      });
      return type;
    }
    function namespace(name) {
      var prefix = name += "",
        i = prefix.indexOf(":");
      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
      return namespaces.hasOwnProperty(prefix) ? {
        space: namespaces[prefix],
        local: name
      } : name;
    }
    function creatorInherit(name) {
      return function () {
        var document2 = this.ownerDocument,
          uri = this.namespaceURI;
        return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
      };
    }
    function creatorFixed(fullname) {
      return function () {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
      };
    }
    function creator(name) {
      var fullname = namespace(name);
      return (fullname.local ? creatorFixed : creatorInherit)(fullname);
    }
    function none() {}
    function selector(selector2) {
      return selector2 == null ? none : function () {
        return this.querySelector(selector2);
      };
    }
    function selection_select(select2) {
      if (typeof select2 !== "function") select2 = selector(select2);
      for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node$1, subnode, i = 0; i < n; ++i) if ((node$1 = group[i]) && (subnode = select2.call(node$1, node$1.__data__, i, group))) {
        if ("__data__" in node$1) subnode.__data__ = node$1.__data__;
        subgroup[i] = subnode;
      }
      return new Selection$1(subgroups, this._parents);
    }
    function array(x) {
      return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
    }
    function empty() {
      return [];
    }
    function selectorAll(selector2) {
      return selector2 == null ? empty : function () {
        return this.querySelectorAll(selector2);
      };
    }
    function arrayAll(select2) {
      return function () {
        return array(select2.apply(this, arguments));
      };
    }
    function selection_selectAll(select2) {
      if (typeof select2 === "function") select2 = arrayAll(select2);else select2 = selectorAll(select2);
      for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) for (var group = groups[j], n = group.length, node$1, i = 0; i < n; ++i) if (node$1 = group[i]) {
        subgroups.push(select2.call(node$1, node$1.__data__, i, group));
        parents.push(node$1);
      }
      return new Selection$1(subgroups, parents);
    }
    function matcher(selector2) {
      return function () {
        return this.matches(selector2);
      };
    }
    function childMatcher(selector2) {
      return function (node$1) {
        return node$1.matches(selector2);
      };
    }
    function childFind(match) {
      return function () {
        return find.call(this.children, match);
      };
    }
    function childFirst() {
      return this.firstElementChild;
    }
    function selection_selectChild(match) {
      return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
    }
    function children() {
      return Array.from(this.children);
    }
    function childrenFilter(match) {
      return function () {
        return filter.call(this.children, match);
      };
    }
    function selection_selectChildren(match) {
      return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
    }
    function selection_filter(match) {
      if (typeof match !== "function") match = matcher(match);
      for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node$1, i = 0; i < n; ++i) if ((node$1 = group[i]) && match.call(node$1, node$1.__data__, i, group)) subgroup.push(node$1);
      return new Selection$1(subgroups, this._parents);
    }
    function sparse(update) {
      return new Array(update.length);
    }
    function selection_enter() {
      return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
    }
    function EnterNode(parent, datum2) {
      this.ownerDocument = parent.ownerDocument;
      this.namespaceURI = parent.namespaceURI;
      this._next = null;
      this._parent = parent;
      this.__data__ = datum2;
    }
    function constant$2(x) {
      return function () {
        return x;
      };
    }
    function bindIndex(parent, group, enter, update, exit, data) {
      var i = 0,
        node$1,
        groupLength = group.length,
        dataLength = data.length;
      for (; i < dataLength; ++i) if (node$1 = group[i]) {
        node$1.__data__ = data[i];
        update[i] = node$1;
      } else enter[i] = new EnterNode(parent, data[i]);
      for (; i < groupLength; ++i) if (node$1 = group[i]) exit[i] = node$1;
    }
    function bindKey(parent, group, enter, update, exit, data, key) {
      var i,
        node$1,
        nodeByKeyValue = /* @__PURE__ */new Map(),
        groupLength = group.length,
        dataLength = data.length,
        keyValues = new Array(groupLength),
        keyValue;
      for (i = 0; i < groupLength; ++i) if (node$1 = group[i]) {
        keyValues[i] = keyValue = key.call(node$1, node$1.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) exit[i] = node$1;else nodeByKeyValue.set(keyValue, node$1);
      }
      for (i = 0; i < dataLength; ++i) {
        keyValue = key.call(parent, data[i], i, data) + "";
        if (node$1 = nodeByKeyValue.get(keyValue)) {
          update[i] = node$1;
          node$1.__data__ = data[i];
          nodeByKeyValue.delete(keyValue);
        } else enter[i] = new EnterNode(parent, data[i]);
      }
      for (i = 0; i < groupLength; ++i) if ((node$1 = group[i]) && nodeByKeyValue.get(keyValues[i]) === node$1) exit[i] = node$1;
    }
    function datum(node$1) {
      return node$1.__data__;
    }
    function selection_data(value, key) {
      if (!arguments.length) return Array.from(this, datum);
      var bind = key ? bindKey : bindIndex,
        parents = this._parents,
        groups = this._groups;
      if (typeof value !== "function") value = constant$2(value);
      for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
        var parent = parents[j],
          group = groups[j],
          groupLength = group.length,
          data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
          dataLength = data.length,
          enterGroup = enter[j] = new Array(dataLength),
          updateGroup = update[j] = new Array(dataLength);
        bind(parent, group, enterGroup, updateGroup, exit[j] = new Array(groupLength), data, key);
        for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) if (previous = enterGroup[i0]) {
          if (i0 >= i1) i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength);
          previous._next = next || null;
        }
      }
      update = new Selection$1(update, parents);
      update._enter = enter;
      update._exit = exit;
      return update;
    }
    function arraylike(data) {
      return typeof data === "object" && "length" in data ? data : Array.from(data);
    }
    function selection_exit() {
      return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
    }
    function selection_join(onenter, onupdate, onexit) {
      var enter = this.enter(),
        update = this,
        exit = this.exit();
      if (typeof onenter === "function") {
        enter = onenter(enter);
        if (enter) enter = enter.selection();
      } else enter = enter.append(onenter + "");
      if (onupdate != null) {
        update = onupdate(update);
        if (update) update = update.selection();
      }
      if (onexit == null) exit.remove();else onexit(exit);
      return enter && update ? enter.merge(update).order() : update;
    }
    function selection_merge(context) {
      var selection2 = context.selection ? context.selection() : context;
      for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node$1, i = 0; i < n; ++i) if (node$1 = group0[i] || group1[i]) merge[i] = node$1;
      for (; j < m0; ++j) merges[j] = groups0[j];
      return new Selection$1(merges, this._parents);
    }
    function selection_order() {
      for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) for (var group = groups[j], i = group.length - 1, next = group[i], node$1; --i >= 0;) if (node$1 = group[i]) {
        if (next && node$1.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node$1, next);
        next = node$1;
      }
      return this;
    }
    function selection_sort(compare) {
      if (!compare) compare = ascending;
      function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
      }
      for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node$1, i = 0; i < n; ++i) if (node$1 = group[i]) sortgroup[i] = node$1;
        sortgroup.sort(compareNode);
      }
      return new Selection$1(sortgroups, this._parents).order();
    }
    function ascending(a, b) {
      return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }
    function selection_call() {
      var callback = arguments[0];
      arguments[0] = this;
      callback.apply(null, arguments);
      return this;
    }
    function selection_nodes() {
      return Array.from(this);
    }
    function selection_node() {
      for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node$1 = group[i];
        if (node$1) return node$1;
      }
      return null;
    }
    function selection_size() {
      let size$1 = 0;
      for (const node$1 of this) ++size$1;
      return size$1;
    }
    function selection_empty() {
      return !this.node();
    }
    function selection_each(callback) {
      for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) for (var group = groups[j], i = 0, n = group.length, node$1; i < n; ++i) if (node$1 = group[i]) callback.call(node$1, node$1.__data__, i, group);
      return this;
    }
    function attrRemove$1(name) {
      return function () {
        this.removeAttribute(name);
      };
    }
    function attrRemoveNS$1(fullname) {
      return function () {
        this.removeAttributeNS(fullname.space, fullname.local);
      };
    }
    function attrConstant$1(name, value) {
      return function () {
        this.setAttribute(name, value);
      };
    }
    function attrConstantNS$1(fullname, value) {
      return function () {
        this.setAttributeNS(fullname.space, fullname.local, value);
      };
    }
    function attrFunction$1(name, value) {
      return function () {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
      };
    }
    function attrFunctionNS$1(fullname, value) {
      return function () {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
      };
    }
    function selection_attr(name, value) {
      var fullname = namespace(name);
      if (arguments.length < 2) {
        var node$1 = this.node();
        return fullname.local ? node$1.getAttributeNS(fullname.space, fullname.local) : node$1.getAttribute(fullname);
      }
      return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
    }
    function defaultView(node$1) {
      return node$1.ownerDocument && node$1.ownerDocument.defaultView || node$1.document && node$1 || node$1.defaultView;
    }
    function styleRemove$1(name) {
      return function () {
        this.style.removeProperty(name);
      };
    }
    function styleConstant$1(name, value, priority) {
      return function () {
        this.style.setProperty(name, value, priority);
      };
    }
    function styleFunction$1(name, value, priority) {
      return function () {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
      };
    }
    function selection_style(name, value, priority) {
      return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
    }
    function styleValue(node$1, name) {
      return node$1.style.getPropertyValue(name) || defaultView(node$1).getComputedStyle(node$1, null).getPropertyValue(name);
    }
    function propertyRemove(name) {
      return function () {
        delete this[name];
      };
    }
    function propertyConstant(name, value) {
      return function () {
        this[name] = value;
      };
    }
    function propertyFunction(name, value) {
      return function () {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];else this[name] = v;
      };
    }
    function selection_property(name, value) {
      return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
    }
    function classArray(string) {
      return string.trim().split(/^|\s+/);
    }
    function classList(node$1) {
      return node$1.classList || new ClassList(node$1);
    }
    function ClassList(node$1) {
      this._node = node$1;
      this._names = classArray(node$1.getAttribute("class") || "");
    }
    function classedAdd(node$1, names) {
      var list = classList(node$1),
        i = -1,
        n = names.length;
      while (++i < n) list.add(names[i]);
    }
    function classedRemove(node$1, names) {
      var list = classList(node$1),
        i = -1,
        n = names.length;
      while (++i < n) list.remove(names[i]);
    }
    function classedTrue(names) {
      return function () {
        classedAdd(this, names);
      };
    }
    function classedFalse(names) {
      return function () {
        classedRemove(this, names);
      };
    }
    function classedFunction(names, value) {
      return function () {
        (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
      };
    }
    function selection_classed(name, value) {
      var names = classArray(name + "");
      if (arguments.length < 2) {
        var list = classList(this.node()),
          i = -1,
          n = names.length;
        while (++i < n) if (!list.contains(names[i])) return false;
        return true;
      }
      return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
    }
    function textRemove() {
      this.textContent = "";
    }
    function textConstant$1(value) {
      return function () {
        this.textContent = value;
      };
    }
    function textFunction$1(value) {
      return function () {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
      };
    }
    function selection_text(value) {
      return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
    }
    function htmlRemove() {
      this.innerHTML = "";
    }
    function htmlConstant(value) {
      return function () {
        this.innerHTML = value;
      };
    }
    function htmlFunction(value) {
      return function () {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
      };
    }
    function selection_html(value) {
      return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
    }
    function raise() {
      if (this.nextSibling) this.parentNode.appendChild(this);
    }
    function selection_raise() {
      return this.each(raise);
    }
    function lower() {
      if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function selection_lower() {
      return this.each(lower);
    }
    function selection_append(name) {
      var create2 = typeof name === "function" ? name : creator(name);
      return this.select(function () {
        return this.appendChild(create2.apply(this, arguments));
      });
    }
    function constantNull() {
      return null;
    }
    function selection_insert(name, before) {
      var create2 = typeof name === "function" ? name : creator(name),
        select2 = before == null ? constantNull : typeof before === "function" ? before : selector(before);
      return this.select(function () {
        return this.insertBefore(create2.apply(this, arguments), select2.apply(this, arguments) || null);
      });
    }
    function remove() {
      var parent = this.parentNode;
      if (parent) parent.removeChild(this);
    }
    function selection_remove() {
      return this.each(remove);
    }
    function selection_cloneShallow() {
      var clone = this.cloneNode(false),
        parent = this.parentNode;
      return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
    }
    function selection_cloneDeep() {
      var clone = this.cloneNode(true),
        parent = this.parentNode;
      return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
    }
    function selection_clone(deep) {
      return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
    }
    function selection_datum(value) {
      return arguments.length ? this.property("__data__", value) : this.node().__data__;
    }
    function contextListener(listener) {
      return function (event) {
        listener.call(this, event, this.__data__);
      };
    }
    function parseTypenames(typenames) {
      return typenames.trim().split(/^|\s+/).map(function (t) {
        var name = "",
          i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {
          type: t,
          name
        };
      });
    }
    function onRemove(typename) {
      return function () {
        var on = this.__on;
        if (!on) return;
        for (var j = 0, i = -1, m = on.length, o; j < m; ++j) if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) this.removeEventListener(o.type, o.listener, o.options);else on[++i] = o;
        if (++i) on.length = i;else delete this.__on;
      };
    }
    function onAdd(typename, value, options) {
      return function () {
        var on = this.__on,
          o,
          listener = contextListener(value);
        if (on) {
          for (var j = 0, m = on.length; j < m; ++j) if ((o = on[j]).type === typename.type && o.name === typename.name) {
            this.removeEventListener(o.type, o.listener, o.options);
            this.addEventListener(o.type, o.listener = listener, o.options = options);
            o.value = value;
            return;
          }
        }
        this.addEventListener(typename.type, listener, options);
        o = {
          type: typename.type,
          name: typename.name,
          value,
          listener,
          options
        };
        if (!on) this.__on = [o];else on.push(o);
      };
    }
    function selection_on(typename, value, options) {
      var typenames = parseTypenames(typename + ""),
        i,
        n = typenames.length,
        t;
      if (arguments.length < 2) {
        var on = this.node().__on;
        if (on) {
          for (var j = 0, m = on.length, o; j < m; ++j) for (i = 0, o = on[j]; i < n; ++i) if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value;
        }
        return;
      }
      on = value ? onAdd : onRemove;
      for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
      return this;
    }
    function dispatchEvent(node$1, type, params) {
      var window2 = defaultView(node$1),
        event = window2.CustomEvent;
      if (typeof event === "function") event = new event(type, params);else {
        event = window2.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
      }
      node$1.dispatchEvent(event);
    }
    function dispatchConstant(type, params) {
      return function () {
        return dispatchEvent(this, type, params);
      };
    }
    function dispatchFunction(type, params) {
      return function () {
        return dispatchEvent(this, type, params.apply(this, arguments));
      };
    }
    function selection_dispatch(type, params) {
      return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
    }
    function* selection_iterator() {
      for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) for (var group = groups[j], i = 0, n = group.length, node$1; i < n; ++i) if (node$1 = group[i]) yield node$1;
    }
    function Selection$1(groups, parents) {
      this._groups = groups;
      this._parents = parents;
    }
    function selection() {
      return new Selection$1([[document.documentElement]], root);
    }
    function selection_selection() {
      return this;
    }
    function select(selector2) {
      return typeof selector2 === "string" ? new Selection$1([[document.querySelector(selector2)]], [document.documentElement]) : new Selection$1([[selector2]], root);
    }
    function sourceEvent(event) {
      let sourceEvent2;
      while (sourceEvent2 = event.sourceEvent) event = sourceEvent2;
      return event;
    }
    function pointer(event, node$1) {
      event = sourceEvent(event);
      if (node$1 === void 0) node$1 = event.currentTarget;
      if (node$1) {
        var svg = node$1.ownerSVGElement || node$1;
        if (svg.createSVGPoint) {
          var point = svg.createSVGPoint();
          point.x = event.clientX, point.y = event.clientY;
          point = point.matrixTransform(node$1.getScreenCTM().inverse());
          return [point.x, point.y];
        }
        if (node$1.getBoundingClientRect) {
          var rect = node$1.getBoundingClientRect();
          return [event.clientX - rect.left - node$1.clientLeft, event.clientY - rect.top - node$1.clientTop];
        }
      }
      return [event.pageX, event.pageY];
    }
    function noevent$1(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    function dragDisable(view) {
      var root2 = view.document.documentElement,
        selection2 = select(view).on("dragstart.drag", noevent$1, nonpassivecapture);
      if ("onselectstart" in root2) selection2.on("selectstart.drag", noevent$1, nonpassivecapture);else {
        root2.__noselect = root2.style.MozUserSelect;
        root2.style.MozUserSelect = "none";
      }
    }
    function yesdrag(view, noclick) {
      var root2 = view.document.documentElement,
        selection2 = select(view).on("dragstart.drag", null);
      if (noclick) {
        selection2.on("click.drag", noevent$1, nonpassivecapture);
        setTimeout(function () {
          selection2.on("click.drag", null);
        }, 0);
      }
      if ("onselectstart" in root2) selection2.on("selectstart.drag", null);else {
        root2.style.MozUserSelect = root2.__noselect;
        delete root2.__noselect;
      }
    }
    function define(constructor, factory, prototype) {
      constructor.prototype = factory.prototype = prototype;
      prototype.constructor = constructor;
    }
    function extend(parent, definition) {
      var prototype = Object.create(parent.prototype);
      for (var key in definition) prototype[key] = definition[key];
      return prototype;
    }
    function Color() {}
    function color_formatHex() {
      return this.rgb().formatHex();
    }
    function color_formatHex8() {
      return this.rgb().formatHex8();
    }
    function color_formatHsl() {
      return hslConvert(this).formatHsl();
    }
    function color_formatRgb() {
      return this.rgb().formatRgb();
    }
    function color(format) {
      var m, l;
      format = (format + "").trim().toLowerCase();
      return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
    }
    function rgbn(n) {
      return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
    }
    function rgba(r, g, b, a) {
      if (a <= 0) r = g = b = NaN;
      return new Rgb(r, g, b, a);
    }
    function rgbConvert(o) {
      if (!(o instanceof Color)) o = color(o);
      if (!o) return new Rgb();
      o = o.rgb();
      return new Rgb(o.r, o.g, o.b, o.opacity);
    }
    function rgb(r, g, b, opacity) {
      return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
    }
    function Rgb(r, g, b, opacity) {
      this.r = +r;
      this.g = +g;
      this.b = +b;
      this.opacity = +opacity;
    }
    function rgb_formatHex() {
      return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
    }
    function rgb_formatHex8() {
      return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
    }
    function rgb_formatRgb() {
      const a = clampa(this.opacity);
      return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
    }
    function clampa(opacity) {
      return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
    }
    function clampi(value) {
      return Math.max(0, Math.min(255, Math.round(value) || 0));
    }
    function hex(value) {
      value = clampi(value);
      return (value < 16 ? "0" : "") + value.toString(16);
    }
    function hsla(h$1, s, l, a) {
      if (a <= 0) h$1 = s = l = NaN;else if (l <= 0 || l >= 1) h$1 = s = NaN;else if (s <= 0) h$1 = NaN;
      return new Hsl(h$1, s, l, a);
    }
    function hslConvert(o) {
      if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
      if (!(o instanceof Color)) o = color(o);
      if (!o) return new Hsl();
      if (o instanceof Hsl) return o;
      o = o.rgb();
      var r = o.r / 255,
        g = o.g / 255,
        b = o.b / 255,
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        h$1 = NaN,
        s = max - min,
        l = (max + min) / 2;
      if (s) {
        if (r === max) h$1 = (g - b) / s + (g < b) * 6;else if (g === max) h$1 = (b - r) / s + 2;else h$1 = (r - g) / s + 4;
        s /= l < .5 ? max + min : 2 - max - min;
        h$1 *= 60;
      } else s = l > 0 && l < 1 ? 0 : h$1;
      return new Hsl(h$1, s, l, o.opacity);
    }
    function hsl(h$1, s, l, opacity) {
      return arguments.length === 1 ? hslConvert(h$1) : new Hsl(h$1, s, l, opacity == null ? 1 : opacity);
    }
    function Hsl(h$1, s, l, opacity) {
      this.h = +h$1;
      this.s = +s;
      this.l = +l;
      this.opacity = +opacity;
    }
    function clamph(value) {
      value = (value || 0) % 360;
      return value < 0 ? value + 360 : value;
    }
    function clampt(value) {
      return Math.max(0, Math.min(1, value || 0));
    }
    function hsl2rgb(h$1, m1, m2) {
      return (h$1 < 60 ? m1 + (m2 - m1) * h$1 / 60 : h$1 < 180 ? m2 : h$1 < 240 ? m1 + (m2 - m1) * (240 - h$1) / 60 : m1) * 255;
    }
    function linear(a, d) {
      return function (t) {
        return a + t * d;
      };
    }
    function exponential(a, b, y) {
      return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
        return Math.pow(a + t * b, y);
      };
    }
    function gamma(y) {
      return (y = +y) === 1 ? nogamma : function (a, b) {
        return b - a ? exponential(a, b, y) : constant$1(isNaN(a) ? b : a);
      };
    }
    function nogamma(a, b) {
      var d = b - a;
      return d ? linear(a, d) : constant$1(isNaN(a) ? b : a);
    }
    function interpolateNumber(a, b) {
      return a = +a, b = +b, function (t) {
        return a * (1 - t) + b * t;
      };
    }
    function zero(b) {
      return function () {
        return b;
      };
    }
    function one(b) {
      return function (t) {
        return b(t) + "";
      };
    }
    function interpolateString(a, b) {
      var bi = reA.lastIndex = reB.lastIndex = 0,
        am,
        bm,
        bs,
        i = -1,
        s = [],
        q = [];
      a = a + "", b = b + "";
      while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
        if ((bs = bm.index) > bi) {
          bs = b.slice(bi, bs);
          if (s[i]) s[i] += bs;else s[++i] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) {
          if (s[i]) s[i] += bm;else s[++i] = bm;
        } else {
          s[++i] = null;
          q.push({
            i,
            x: interpolateNumber(am, bm)
          });
        }
        bi = reB.lastIndex;
      }
      if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i]) s[i] += bs;else s[++i] = bs;
      }
      return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
        for (var i2 = 0, o; i2 < b; ++i2) s[(o = q[i2]).i] = o.x(t);
        return s.join("");
      });
    }
    function decompose(a, b, c, d, e, f) {
      var scaleX, scaleY, skewX;
      if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
      if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
      if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
      if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
      return {
        translateX: e,
        translateY: f,
        rotate: Math.atan2(b, a) * degrees,
        skewX: Math.atan(skewX) * degrees,
        scaleX,
        scaleY
      };
    }
    function parseCss(value) {
      const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
      return m.isIdentity ? identity$1 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
    }
    function parseSvg(value) {
      if (value == null) return identity$1;
      if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
      svgNode.setAttribute("transform", value);
      if (!(value = svgNode.transform.baseVal.consolidate())) return identity$1;
      value = value.matrix;
      return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
    }
    function interpolateTransform(parse, pxComma, pxParen, degParen) {
      function pop(s) {
        return s.length ? s.pop() + " " : "";
      }
      function translate(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
          var i = s.push("translate(", null, pxComma, null, pxParen);
          q.push({
            i: i - 4,
            x: interpolateNumber(xa, xb)
          }, {
            i: i - 2,
            x: interpolateNumber(ya, yb)
          });
        } else if (xb || yb) s.push("translate(" + xb + pxComma + yb + pxParen);
      }
      function rotate(a, b, s, q) {
        if (a !== b) {
          if (a - b > 180) b += 360;else if (b - a > 180) a += 360;
          q.push({
            i: s.push(pop(s) + "rotate(", null, degParen) - 2,
            x: interpolateNumber(a, b)
          });
        } else if (b) s.push(pop(s) + "rotate(" + b + degParen);
      }
      function skewX(a, b, s, q) {
        if (a !== b) q.push({
          i: s.push(pop(s) + "skewX(", null, degParen) - 2,
          x: interpolateNumber(a, b)
        });else if (b) s.push(pop(s) + "skewX(" + b + degParen);
      }
      function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
          var i = s.push(pop(s) + "scale(", null, ",", null, ")");
          q.push({
            i: i - 4,
            x: interpolateNumber(xa, xb)
          }, {
            i: i - 2,
            x: interpolateNumber(ya, yb)
          });
        } else if (xb !== 1 || yb !== 1) s.push(pop(s) + "scale(" + xb + "," + yb + ")");
      }
      return function (a, b) {
        var s = [],
          q = [];
        a = parse(a), b = parse(b);
        translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
        rotate(a.rotate, b.rotate, s, q);
        skewX(a.skewX, b.skewX, s, q);
        scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
        a = b = null;
        return function (t) {
          var i = -1,
            n = q.length,
            o;
          while (++i < n) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        };
      };
    }
    function cosh(x) {
      return ((x = Math.exp(x)) + 1 / x) / 2;
    }
    function sinh(x) {
      return ((x = Math.exp(x)) - 1 / x) / 2;
    }
    function tanh(x) {
      return ((x = Math.exp(2 * x)) - 1) / (x + 1);
    }
    function now() {
      return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
    }
    function clearNow() {
      clockNow = 0;
    }
    function Timer() {
      this._call = this._time = this._next = null;
    }
    function timer(callback, delay, time$1) {
      var t = new Timer();
      t.restart(callback, delay, time$1);
      return t;
    }
    function timerFlush() {
      now();
      ++frame;
      var t = taskHead,
        e;
      while (t) {
        if ((e = clockNow - t._time) >= 0) t._call.call(void 0, e);
        t = t._next;
      }
      --frame;
    }
    function wake() {
      clockNow = (clockLast = clock.now()) + clockSkew;
      frame = timeout$1 = 0;
      try {
        timerFlush();
      } finally {
        frame = 0;
        nap();
        clockNow = 0;
      }
    }
    function poke() {
      var now2 = clock.now(),
        delay = now2 - clockLast;
      if (delay > pokeDelay) clockSkew -= delay, clockLast = now2;
    }
    function nap() {
      var t0,
        t1 = taskHead,
        t2,
        time$1 = Infinity;
      while (t1) if (t1._call) {
        if (time$1 > t1._time) time$1 = t1._time;
        t0 = t1, t1 = t1._next;
      } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : taskHead = t2;
      }
      taskTail = t0;
      sleep(time$1);
    }
    function sleep(time$1) {
      if (frame) return;
      if (timeout$1) timeout$1 = clearTimeout(timeout$1);
      if (time$1 - clockNow > 24) {
        if (time$1 < Infinity) timeout$1 = setTimeout(wake, time$1 - clock.now() - clockSkew);
        if (interval) interval = clearInterval(interval);
      } else {
        if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
        frame = 1, setFrame(wake);
      }
    }
    function timeout(callback, delay, time$1) {
      var t = new Timer();
      delay = delay == null ? 0 : +delay;
      t.restart(elapsed => {
        t.stop();
        callback(elapsed + delay);
      }, delay, time$1);
      return t;
    }
    function schedule(node$1, name, id2, index, group, timing) {
      var schedules = node$1.__transition;
      if (!schedules) node$1.__transition = {};else if (id2 in schedules) return;
      create(node$1, id2, {
        name,
        index,
        group,
        on: emptyOn,
        tween: emptyTween,
        time: timing.time,
        delay: timing.delay,
        duration: timing.duration,
        ease: timing.ease,
        timer: null,
        state: CREATED
      });
    }
    function init(node$1, id2) {
      var schedule2 = get(node$1, id2);
      if (schedule2.state > CREATED) throw new Error("too late; already scheduled");
      return schedule2;
    }
    function set(node$1, id2) {
      var schedule2 = get(node$1, id2);
      if (schedule2.state > STARTED) throw new Error("too late; already running");
      return schedule2;
    }
    function get(node$1, id2) {
      var schedule2 = node$1.__transition;
      if (!schedule2 || !(schedule2 = schedule2[id2])) throw new Error("transition not found");
      return schedule2;
    }
    function create(node$1, id2, self) {
      var schedules = node$1.__transition,
        tween;
      schedules[id2] = self;
      self.timer = timer(schedule2, 0, self.time);
      function schedule2(elapsed) {
        self.state = SCHEDULED;
        self.timer.restart(start2, self.delay, self.time);
        if (self.delay <= elapsed) start2(elapsed - self.delay);
      }
      function start2(elapsed) {
        var i, j, n, o;
        if (self.state !== SCHEDULED) return stop();
        for (i in schedules) {
          o = schedules[i];
          if (o.name !== self.name) continue;
          if (o.state === STARTED) return timeout(start2);
          if (o.state === RUNNING) {
            o.state = ENDED;
            o.timer.stop();
            o.on.call("interrupt", node$1, node$1.__data__, o.index, o.group);
            delete schedules[i];
          } else if (+i < id2) {
            o.state = ENDED;
            o.timer.stop();
            o.on.call("cancel", node$1, node$1.__data__, o.index, o.group);
            delete schedules[i];
          }
        }
        timeout(function () {
          if (self.state === STARTED) {
            self.state = RUNNING;
            self.timer.restart(tick, self.delay, self.time);
            tick(elapsed);
          }
        });
        self.state = STARTING;
        self.on.call("start", node$1, node$1.__data__, self.index, self.group);
        if (self.state !== STARTING) return;
        self.state = STARTED;
        tween = new Array(n = self.tween.length);
        for (i = 0, j = -1; i < n; ++i) if (o = self.tween[i].value.call(node$1, node$1.__data__, self.index, self.group)) tween[++j] = o;
        tween.length = j + 1;
      }
      function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
          i = -1,
          n = tween.length;
        while (++i < n) tween[i].call(node$1, t);
        if (self.state === ENDING) {
          self.on.call("end", node$1, node$1.__data__, self.index, self.group);
          stop();
        }
      }
      function stop() {
        self.state = ENDED;
        self.timer.stop();
        delete schedules[id2];
        for (var i in schedules) return;
        delete node$1.__transition;
      }
    }
    function interrupt(node$1, name) {
      var schedules = node$1.__transition,
        schedule2,
        active,
        empty2 = true,
        i;
      if (!schedules) return;
      name = name == null ? null : name + "";
      for (i in schedules) {
        if ((schedule2 = schedules[i]).name !== name) {
          empty2 = false;
          continue;
        }
        active = schedule2.state > STARTING && schedule2.state < ENDING;
        schedule2.state = ENDED;
        schedule2.timer.stop();
        schedule2.on.call(active ? "interrupt" : "cancel", node$1, node$1.__data__, schedule2.index, schedule2.group);
        delete schedules[i];
      }
      if (empty2) delete node$1.__transition;
    }
    function selection_interrupt(name) {
      return this.each(function () {
        interrupt(this, name);
      });
    }
    function tweenRemove(id2, name) {
      var tween0, tween1;
      return function () {
        var schedule2 = set(this, id2),
          tween = schedule2.tween;
        if (tween !== tween0) {
          tween1 = tween0 = tween;
          for (var i = 0, n = tween1.length; i < n; ++i) if (tween1[i].name === name) {
            tween1 = tween1.slice();
            tween1.splice(i, 1);
            break;
          }
        }
        schedule2.tween = tween1;
      };
    }
    function tweenFunction(id2, name, value) {
      var tween0, tween1;
      if (typeof value !== "function") throw new Error();
      return function () {
        var schedule2 = set(this, id2),
          tween = schedule2.tween;
        if (tween !== tween0) {
          tween1 = (tween0 = tween).slice();
          for (var t = {
              name,
              value
            }, i = 0, n = tween1.length; i < n; ++i) if (tween1[i].name === name) {
            tween1[i] = t;
            break;
          }
          if (i === n) tween1.push(t);
        }
        schedule2.tween = tween1;
      };
    }
    function transition_tween(name, value) {
      var id2 = this._id;
      name += "";
      if (arguments.length < 2) {
        var tween = get(this.node(), id2).tween;
        for (var i = 0, n = tween.length, t; i < n; ++i) if ((t = tween[i]).name === name) return t.value;
        return null;
      }
      return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
    }
    function tweenValue(transition, name, value) {
      var id2 = transition._id;
      transition.each(function () {
        var schedule2 = set(this, id2);
        (schedule2.value || (schedule2.value = {}))[name] = value.apply(this, arguments);
      });
      return function (node$1) {
        return get(node$1, id2).value[name];
      };
    }
    function interpolate(a, b) {
      var c;
      return (typeof b === "number" ? interpolateNumber : b instanceof color ? interpolateRgb : (c = color(b)) ? (b = c, interpolateRgb) : interpolateString)(a, b);
    }
    function attrRemove(name) {
      return function () {
        this.removeAttribute(name);
      };
    }
    function attrRemoveNS(fullname) {
      return function () {
        this.removeAttributeNS(fullname.space, fullname.local);
      };
    }
    function attrConstant(name, interpolate2, value1) {
      var string00,
        string1 = value1 + "",
        interpolate0;
      return function () {
        var string0 = this.getAttribute(name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
      };
    }
    function attrConstantNS(fullname, interpolate2, value1) {
      var string00,
        string1 = value1 + "",
        interpolate0;
      return function () {
        var string0 = this.getAttributeNS(fullname.space, fullname.local);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
      };
    }
    function attrFunction(name, interpolate2, value) {
      var string00, string10, interpolate0;
      return function () {
        var string0,
          value1 = value(this),
          string1;
        if (value1 == null) return void this.removeAttribute(name);
        string0 = this.getAttribute(name);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
      };
    }
    function attrFunctionNS(fullname, interpolate2, value) {
      var string00, string10, interpolate0;
      return function () {
        var string0,
          value1 = value(this),
          string1;
        if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
        string0 = this.getAttributeNS(fullname.space, fullname.local);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
      };
    }
    function transition_attr(name, value) {
      var fullname = namespace(name),
        i = fullname === "transform" ? interpolateTransformSvg : interpolate;
      return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
    }
    function attrInterpolate(name, i) {
      return function (t) {
        this.setAttribute(name, i.call(this, t));
      };
    }
    function attrInterpolateNS(fullname, i) {
      return function (t) {
        this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
      };
    }
    function attrTweenNS(fullname, value) {
      var t0, i0;
      function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
        return t0;
      }
      tween._value = value;
      return tween;
    }
    function attrTween(name, value) {
      var t0, i0;
      function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
        return t0;
      }
      tween._value = value;
      return tween;
    }
    function transition_attrTween(name, value) {
      var key = "attr." + name;
      if (arguments.length < 2) return (key = this.tween(key)) && key._value;
      if (value == null) return this.tween(key, null);
      if (typeof value !== "function") throw new Error();
      var fullname = namespace(name);
      return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
    }
    function delayFunction(id2, value) {
      return function () {
        init(this, id2).delay = +value.apply(this, arguments);
      };
    }
    function delayConstant(id2, value) {
      return value = +value, function () {
        init(this, id2).delay = value;
      };
    }
    function transition_delay(value) {
      var id2 = this._id;
      return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get(this.node(), id2).delay;
    }
    function durationFunction(id2, value) {
      return function () {
        set(this, id2).duration = +value.apply(this, arguments);
      };
    }
    function durationConstant(id2, value) {
      return value = +value, function () {
        set(this, id2).duration = value;
      };
    }
    function transition_duration(value) {
      var id2 = this._id;
      return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get(this.node(), id2).duration;
    }
    function easeConstant(id2, value) {
      if (typeof value !== "function") throw new Error();
      return function () {
        set(this, id2).ease = value;
      };
    }
    function transition_ease(value) {
      var id2 = this._id;
      return arguments.length ? this.each(easeConstant(id2, value)) : get(this.node(), id2).ease;
    }
    function easeVarying(id2, value) {
      return function () {
        var v = value.apply(this, arguments);
        if (typeof v !== "function") throw new Error();
        set(this, id2).ease = v;
      };
    }
    function transition_easeVarying(value) {
      if (typeof value !== "function") throw new Error();
      return this.each(easeVarying(this._id, value));
    }
    function transition_filter(match) {
      if (typeof match !== "function") match = matcher(match);
      for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node$1, i = 0; i < n; ++i) if ((node$1 = group[i]) && match.call(node$1, node$1.__data__, i, group)) subgroup.push(node$1);
      return new Transition$1(subgroups, this._parents, this._name, this._id);
    }
    function transition_merge(transition) {
      if (transition._id !== this._id) throw new Error();
      for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node$1, i = 0; i < n; ++i) if (node$1 = group0[i] || group1[i]) merge[i] = node$1;
      for (; j < m0; ++j) merges[j] = groups0[j];
      return new Transition$1(merges, this._parents, this._name, this._id);
    }
    function start(name) {
      return (name + "").trim().split(/^|\s+/).every(function (t) {
        var i = t.indexOf(".");
        if (i >= 0) t = t.slice(0, i);
        return !t || t === "start";
      });
    }
    function onFunction(id2, name, listener) {
      var on0,
        on1,
        sit = start(name) ? init : set;
      return function () {
        var schedule2 = sit(this, id2),
          on = schedule2.on;
        if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
        schedule2.on = on1;
      };
    }
    function transition_on(name, listener) {
      var id2 = this._id;
      return arguments.length < 2 ? get(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
    }
    function removeFunction(id2) {
      return function () {
        var parent = this.parentNode;
        for (var i in this.__transition) if (+i !== id2) return;
        if (parent) parent.removeChild(this);
      };
    }
    function transition_remove() {
      return this.on("end.remove", removeFunction(this._id));
    }
    function transition_select(select2) {
      var name = this._name,
        id2 = this._id;
      if (typeof select2 !== "function") select2 = selector(select2);
      for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node$1, subnode, i = 0; i < n; ++i) if ((node$1 = group[i]) && (subnode = select2.call(node$1, node$1.__data__, i, group))) {
        if ("__data__" in node$1) subnode.__data__ = node$1.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id2, i, subgroup, get(node$1, id2));
      }
      return new Transition$1(subgroups, this._parents, name, id2);
    }
    function transition_selectAll(select2) {
      var name = this._name,
        id2 = this._id;
      if (typeof select2 !== "function") select2 = selectorAll(select2);
      for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) for (var group = groups[j], n = group.length, node$1, i = 0; i < n; ++i) if (node$1 = group[i]) {
        for (var children2 = select2.call(node$1, node$1.__data__, i, group), child, inherit2 = get(node$1, id2), k = 0, l = children2.length; k < l; ++k) if (child = children2[k]) schedule(child, name, id2, k, children2, inherit2);
        subgroups.push(children2);
        parents.push(node$1);
      }
      return new Transition$1(subgroups, parents, name, id2);
    }
    function transition_selection() {
      return new Selection(this._groups, this._parents);
    }
    function styleNull(name, interpolate2) {
      var string00, string10, interpolate0;
      return function () {
        var string0 = styleValue(this, name),
          string1 = (this.style.removeProperty(name), styleValue(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, string10 = string1);
      };
    }
    function styleRemove(name) {
      return function () {
        this.style.removeProperty(name);
      };
    }
    function styleConstant(name, interpolate2, value1) {
      var string00,
        string1 = value1 + "",
        interpolate0;
      return function () {
        var string0 = styleValue(this, name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
      };
    }
    function styleFunction(name, interpolate2, value) {
      var string00, string10, interpolate0;
      return function () {
        var string0 = styleValue(this, name),
          value1 = value(this),
          string1 = value1 + "";
        if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
      };
    }
    function styleMaybeRemove(id2, name) {
      var on0,
        on1,
        listener0,
        key = "style." + name,
        event = "end." + key,
        remove2;
      return function () {
        var schedule2 = set(this, id2),
          on = schedule2.on,
          listener = schedule2.value[key] == null ? remove2 || (remove2 = styleRemove(name)) : void 0;
        if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
        schedule2.on = on1;
      };
    }
    function transition_style(name, value, priority) {
      var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
      return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
    }
    function styleInterpolate(name, i, priority) {
      return function (t) {
        this.style.setProperty(name, i.call(this, t), priority);
      };
    }
    function styleTween(name, value, priority) {
      var t, i0;
      function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
        return t;
      }
      tween._value = value;
      return tween;
    }
    function transition_styleTween(name, value, priority) {
      var key = "style." + (name += "");
      if (arguments.length < 2) return (key = this.tween(key)) && key._value;
      if (value == null) return this.tween(key, null);
      if (typeof value !== "function") throw new Error();
      return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
    }
    function textConstant(value) {
      return function () {
        this.textContent = value;
      };
    }
    function textFunction(value) {
      return function () {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
      };
    }
    function transition_text(value) {
      return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
    }
    function textInterpolate(i) {
      return function (t) {
        this.textContent = i.call(this, t);
      };
    }
    function textTween(value) {
      var t0, i0;
      function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
        return t0;
      }
      tween._value = value;
      return tween;
    }
    function transition_textTween(value) {
      var key = "text";
      if (arguments.length < 1) return (key = this.tween(key)) && key._value;
      if (value == null) return this.tween(key, null);
      if (typeof value !== "function") throw new Error();
      return this.tween(key, textTween(value));
    }
    function transition_transition() {
      var name = this._name,
        id0 = this._id,
        id1 = newId();
      for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) for (var group = groups[j], n = group.length, node$1, i = 0; i < n; ++i) if (node$1 = group[i]) {
        var inherit2 = get(node$1, id0);
        schedule(node$1, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
      return new Transition$1(groups, this._parents, name, id1);
    }
    function transition_end() {
      var on0,
        on1,
        that = this,
        id2 = that._id,
        size$1 = that.size();
      return new Promise(function (resolve, reject) {
        var cancel = {
            value: reject
          },
          end = {
            value: function () {
              if (--size$1 === 0) resolve();
            }
          };
        that.each(function () {
          var schedule2 = set(this, id2),
            on = schedule2.on;
          if (on !== on0) {
            on1 = (on0 = on).copy();
            on1._.cancel.push(cancel);
            on1._.interrupt.push(cancel);
            on1._.end.push(end);
          }
          schedule2.on = on1;
        });
        if (size$1 === 0) resolve();
      });
    }
    function Transition$1(groups, parents, name, id2) {
      this._groups = groups;
      this._parents = parents;
      this._name = name;
      this._id = id2;
    }
    function newId() {
      return ++id;
    }
    function cubicInOut(t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
    }
    function inherit(node$1, id2) {
      var timing;
      while (!(timing = node$1.__transition) || !(timing = timing[id2])) if (!(node$1 = node$1.parentNode)) throw new Error(`transition ${id2} not found`);
      return timing;
    }
    function selection_transition(name) {
      var id2, timing;
      if (name instanceof Transition$1) id2 = name._id, name = name._name;else id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
      for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) for (var group = groups[j], n = group.length, node$1, i = 0; i < n; ++i) if (node$1 = group[i]) schedule(node$1, name, id2, i, group, timing || inherit(node$1, id2));
      return new Transition$1(groups, this._parents, name, id2);
    }
    function ZoomEvent(type, {
      sourceEvent: sourceEvent2,
      target: target$1,
      transform,
      dispatch: dispatch2
    }) {
      Object.defineProperties(this, {
        type: {
          value: type,
          enumerable: true,
          configurable: true
        },
        sourceEvent: {
          value: sourceEvent2,
          enumerable: true,
          configurable: true
        },
        target: {
          value: target$1,
          enumerable: true,
          configurable: true
        },
        transform: {
          value: transform,
          enumerable: true,
          configurable: true
        },
        _: {
          value: dispatch2
        }
      });
    }
    function Transform(k, x, y) {
      this.k = k;
      this.x = x;
      this.y = y;
    }
    function nopropagation(event) {
      event.stopImmediatePropagation();
    }
    function noevent(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    function defaultFilter(event) {
      return (!event.ctrlKey || event.type === "wheel") && !event.button;
    }
    function defaultExtent() {
      var e = this;
      if (e instanceof SVGElement) {
        e = e.ownerSVGElement || e;
        if (e.hasAttribute("viewBox")) {
          e = e.viewBox.baseVal;
          return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
        }
        return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
      }
      return [[0, 0], [e.clientWidth, e.clientHeight]];
    }
    function defaultTransform() {
      return this.__zoom || identity;
    }
    function defaultWheelDelta(event) {
      return -event.deltaY * (event.deltaMode === 1 ? .05 : event.deltaMode ? 1 : .002) * (event.ctrlKey ? 10 : 1);
    }
    function defaultTouchable() {
      return navigator.maxTouchPoints || "ontouchstart" in this;
    }
    function defaultConstrain(transform, extent, translateExtent) {
      var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
        dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
        dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
        dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
      return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
    }
    function zoom() {
      var filter2 = defaultFilter,
        extent = defaultExtent,
        constrain = defaultConstrain,
        wheelDelta = defaultWheelDelta,
        touchable = defaultTouchable,
        scaleExtent = [0, Infinity],
        translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
        duration = 250,
        interpolate2 = interpolateZoom,
        listeners = dispatch("start", "zoom", "end"),
        touchstarting,
        touchfirst,
        touchending,
        touchDelay = 500,
        wheelDelay = 150,
        clickDistance2 = 0,
        tapDistance = 10;
      function zoom2(selection2) {
        selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, {
          passive: false
        }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
      }
      zoom2.transform = function (collection, transform, point, event) {
        var selection2 = collection.selection ? collection.selection() : collection;
        selection2.property("__zoom", defaultTransform);
        if (collection !== selection2) schedule2(collection, transform, point, event);else selection2.interrupt().each(function () {
          gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
        });
      };
      zoom2.scaleBy = function (selection2, k, p, event) {
        zoom2.scaleTo(selection2, function () {
          return this.__zoom.k * (typeof k === "function" ? k.apply(this, arguments) : k);
        }, p, event);
      };
      zoom2.scaleTo = function (selection2, k, p, event) {
        zoom2.transform(selection2, function () {
          var e = extent.apply(this, arguments),
            t0 = this.__zoom,
            p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
            p1 = t0.invert(p0),
            k1 = typeof k === "function" ? k.apply(this, arguments) : k;
          return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
        }, p, event);
      };
      zoom2.translateBy = function (selection2, x, y, event) {
        zoom2.transform(selection2, function () {
          return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments), translateExtent);
        }, null, event);
      };
      zoom2.translateTo = function (selection2, x, y, p, event) {
        zoom2.transform(selection2, function () {
          var e = extent.apply(this, arguments),
            t = this.__zoom,
            p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
          return constrain(identity.translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
        }, p, event);
      };
      function scale(transform, k) {
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
        return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
      }
      function translate(transform, p0, p1) {
        var x = p0[0] - p1[0] * transform.k,
          y = p0[1] - p1[1] * transform.k;
        return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
      }
      function centroid(extent2) {
        return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
      }
      function schedule2(transition, transform, point, event) {
        transition.on("start.zoom", function () {
          gesture(this, arguments).event(event).start();
        }).on("interrupt.zoom end.zoom", function () {
          gesture(this, arguments).event(event).end();
        }).tween("zoom", function () {
          var that = this,
            args = arguments,
            g = gesture(that, args).event(event),
            e = extent.apply(that, args),
            p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
            w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
            a = that.__zoom,
            b = typeof transform === "function" ? transform.apply(that, args) : transform,
            i = interpolate2(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function (t) {
            if (t === 1) t = b;else {
              var l = i(t),
                k = w / l[2];
              t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
            }
            g.zoom(null, t);
          };
        });
      }
      function gesture(that, args, clean) {
        return !clean && that.__zooming || new Gesture(that, args);
      }
      function Gesture(that, args) {
        this.that = that;
        this.args = args;
        this.active = 0;
        this.sourceEvent = null;
        this.extent = extent.apply(that, args);
        this.taps = 0;
      }
      Gesture.prototype = {
        event: function (event) {
          if (event) this.sourceEvent = event;
          return this;
        },
        start: function () {
          if (++this.active === 1) {
            this.that.__zooming = this;
            this.emit("start");
          }
          return this;
        },
        zoom: function (key, transform) {
          if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
          if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
          if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
          this.that.__zoom = transform;
          this.emit("zoom");
          return this;
        },
        end: function () {
          if (--this.active === 0) {
            delete this.that.__zooming;
            this.emit("end");
          }
          return this;
        },
        emit: function (type) {
          var d = select(this.that).datum();
          listeners.call(type, this.that, new ZoomEvent(type, {
            sourceEvent: this.sourceEvent,
            target: zoom2,
            type,
            transform: this.that.__zoom,
            dispatch: listeners
          }), d);
        }
      };
      function wheeled(event, ...args) {
        if (!filter2.apply(this, arguments)) return;
        var g = gesture(this, args).event(event),
          t = this.__zoom,
          k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
          p = pointer(event);
        if (g.wheel) {
          if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) g.mouse[1] = t.invert(g.mouse[0] = p);
          clearTimeout(g.wheel);
        } else if (t.k === k) return;else {
          g.mouse = [p, t.invert(p)];
          interrupt(this);
          g.start();
        }
        noevent(event);
        g.wheel = setTimeout(wheelidled, wheelDelay);
        g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
        function wheelidled() {
          g.wheel = null;
          g.end();
        }
      }
      function mousedowned(event, ...args) {
        if (touchending || !filter2.apply(this, arguments)) return;
        var currentTarget = event.currentTarget,
          g = gesture(this, args, true).event(event),
          v = select(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
          p = pointer(event, currentTarget),
          x0 = event.clientX,
          y0 = event.clientY;
        dragDisable(event.view);
        nopropagation(event);
        g.mouse = [p, this.__zoom.invert(p)];
        interrupt(this);
        g.start();
        function mousemoved(event2) {
          noevent(event2);
          if (!g.moved) {
            var dx = event2.clientX - x0,
              dy = event2.clientY - y0;
            g.moved = dx * dx + dy * dy > clickDistance2;
          }
          g.event(event2).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer(event2, currentTarget), g.mouse[1]), g.extent, translateExtent));
        }
        function mouseupped(event2) {
          v.on("mousemove.zoom mouseup.zoom", null);
          yesdrag(event2.view, g.moved);
          noevent(event2);
          g.event(event2).end();
        }
      }
      function dblclicked(event, ...args) {
        if (!filter2.apply(this, arguments)) return;
        var t0 = this.__zoom,
          p0 = pointer(event.changedTouches ? event.changedTouches[0] : event, this),
          p1 = t0.invert(p0),
          k1 = t0.k * (event.shiftKey ? .5 : 2),
          t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
        noevent(event);
        if (duration > 0) select(this).transition().duration(duration).call(schedule2, t1, p0, event);else select(this).call(zoom2.transform, t1, p0, event);
      }
      function touchstarted(event, ...args) {
        if (!filter2.apply(this, arguments)) return;
        var touches = event.touches,
          n = touches.length,
          g = gesture(this, args, event.changedTouches.length === n).event(event),
          started,
          i,
          t,
          p;
        nopropagation(event);
        for (i = 0; i < n; ++i) {
          t = touches[i], p = pointer(t, this);
          p = [p, this.__zoom.invert(p), t.identifier];
          if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
        }
        if (touchstarting) touchstarting = clearTimeout(touchstarting);
        if (started) {
          if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function () {
            touchstarting = null;
          }, touchDelay);
          interrupt(this);
          g.start();
        }
      }
      function touchmoved(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event),
          touches = event.changedTouches,
          n = touches.length,
          i,
          t,
          p,
          l;
        noevent(event);
        for (i = 0; i < n; ++i) {
          t = touches[i], p = pointer(t, this);
          if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
        }
        t = g.that.__zoom;
        if (g.touch1) {
          var p0 = g.touch0[0],
            l0 = g.touch0[1],
            p1 = g.touch1[0],
            l1 = g.touch1[1],
            dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
            dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
          t = scale(t, Math.sqrt(dp / dl));
          p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
          l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
        } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];else return;
        g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
      }
      function touchended(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event),
          touches = event.changedTouches,
          n = touches.length,
          i,
          t;
        nopropagation(event);
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function () {
          touchending = null;
        }, touchDelay);
        for (i = 0; i < n; ++i) {
          t = touches[i];
          if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
        }
        if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
        if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);else {
          g.end();
          if (g.taps === 2) {
            t = pointer(t, this);
            if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
              var p = select(this).on("dblclick.zoom");
              if (p) p.apply(this, arguments);
            }
          }
        }
      }
      zoom2.wheelDelta = function (_) {
        return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant(+_), zoom2) : wheelDelta;
      };
      zoom2.filter = function (_) {
        return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant(!!_), zoom2) : filter2;
      };
      zoom2.touchable = function (_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), zoom2) : touchable;
      };
      zoom2.extent = function (_) {
        return arguments.length ? (extent = typeof _ === "function" ? _ : constant([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom2) : extent;
      };
      zoom2.scaleExtent = function (_) {
        return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom2) : [scaleExtent[0], scaleExtent[1]];
      };
      zoom2.translateExtent = function (_) {
        return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom2) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
      };
      zoom2.constrain = function (_) {
        return arguments.length ? (constrain = _, zoom2) : constrain;
      };
      zoom2.duration = function (_) {
        return arguments.length ? (duration = +_, zoom2) : duration;
      };
      zoom2.interpolate = function (_) {
        return arguments.length ? (interpolate2 = _, zoom2) : interpolate2;
      };
      zoom2.on = function () {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? zoom2 : value;
      };
      zoom2.clickDistance = function (_) {
        return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom2) : Math.sqrt(clickDistance2);
      };
      zoom2.tapDistance = function (_) {
        return arguments.length ? (tapDistance = +_, zoom2) : tapDistance;
      };
      return zoom2;
    }
    //#endregion
    //#region src/features/workflows/canvas/composables/useViewportAutoAdjust.ts
    /**
    * When canvas is resized (via window resize or toggling logs panel), adjust viewport to maintain center
    */
    function useViewportAutoAdjust(viewportRef, viewport, setViewport) {
      const canvasRect = ref();
      watch(viewportRef, (vp, _, onCleanUp) => {
        if (!vp) return;
        const resizeObserver = new ResizeObserver(entries => {
          const entry = entries[0];
          if (entry) canvasRect.value = entry.contentRect;
        });
        canvasRect.value = {
          x: vp.offsetLeft,
          y: vp.offsetTop,
          width: vp.offsetWidth,
          height: vp.offsetHeight
        };
        resizeObserver.observe(vp);
        onCleanUp(() => resizeObserver.disconnect());
      }, {
        immediate: true
      });
      watch(canvasRect, async (newRect, oldRect) => {
        if (!newRect || !oldRect) return;
        await setViewport({
          x: viewport.value.x + (newRect.width - oldRect.width) / 2,
          y: viewport.value.y + (newRect.height - oldRect.height) / 2,
          zoom: viewport.value.zoom
        });
      });
    }

    //#endregion
    //#region src/features/workflows/canvas/components/elements/edges/CanvasArrowHeadMarker.vue?vue&type=script&setup=true&lang.ts

    function getEdgeRenderData(props, {
      connectionType = NodeConnectionTypes.Main
    } = {}) {
      const {
        targetX,
        targetY,
        sourceX,
        sourceY,
        sourcePosition,
        targetPosition
      } = props;
      const isConnectorStraight = sourceY === targetY;
      if (!isRightOfSourceHandle(sourceX, targetX) || connectionType !== NodeConnectionTypes.Main) {
        const segment = getBezierPath(props);
        return {
          segments: [segment],
          labelPosition: [segment[1], segment[2]],
          isConnectorStraight
        };
      }
      const firstSegmentTargetX = (sourceX + targetX) / 2;
      const firstSegmentTargetY = sourceY + EDGE_PADDING_BOTTOM;
      return {
        segments: [getSmoothStepPath({
          sourceX,
          sourceY,
          targetX: firstSegmentTargetX,
          targetY: firstSegmentTargetY,
          sourcePosition,
          targetPosition: Position.Right,
          borderRadius: EDGE_BORDER_RADIUS,
          offset: EDGE_PADDING_X
        }), getSmoothStepPath({
          sourceX: firstSegmentTargetX,
          sourceY: firstSegmentTargetY,
          targetX,
          targetY,
          sourcePosition: Position.Left,
          targetPosition,
          borderRadius: EDGE_BORDER_RADIUS,
          offset: EDGE_PADDING_X
        })],
        labelPosition: [firstSegmentTargetX, firstSegmentTargetY],
        isConnectorStraight
      };
    }

    //#endregion
    //#region src/features/workflows/canvas/components/elements/edges/CanvasConnectionLine.vue?vue&type=script&setup=true&lang.ts

    function _sfc_render$1(_ctx, _cache) {
      return openBlock(), createElementBlock("svg", _hoisted_1$7, _cache[0] || (_cache[0] = [createBaseVNode("path", {
        fill: "currentColor",
        d: "M1.6.13c-.18-.17-.47-.18-.62 0L.56.57.14.98c-.2.15-.18.44 0 .62l3.63 3.6c.1.1.1.27 0 .37-.2.2-.53.52-.93.94-.56.57-.12 1.62.22 2.11.05.07.12.1.2.1.05-.01.1-.04.15-.08l5.23-5.22c.1-.1.1-.26-.02-.34-.5-.34-1.55-.78-2.12-.22-.42.4-.75.73-.94.93-.1.1-.27.1-.37 0L1.6.13ZM9.5 3.9c.07-.09.2-.1.3-.04l6.07 3.44c.15.08.18.29.05.4l-1.21 1.22a.26.26 0 0 1-.26.07l-2.18-.64a.26.26 0 0 0-.32.33l.76 2.02c.04.1.01.2-.06.27L7.7 15.92a.26.26 0 0 1-.41-.05L3.83 9.8a.26.26 0 0 1 .04-.3l5.62-5.6Z"
      }, null, -1)]));
    }
    function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
      return openBlock(), createElementBlock("button", _hoisted_1$5, [renderSlot(_ctx.$slots, "default")]);
    }
    function render$4(_ctx, _cache) {
      return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
    }
    function render$3(_ctx, _cache) {
      return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
    }
    function render$2(_ctx, _cache) {
      return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
    }
    function render$1(_ctx, _cache) {
      return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
    }
    function render(_ctx, _cache) {
      return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3);
    }
    //#endregion
    //#region src/features/workflows/canvas/composables/useCanvasMapping.ts
    function useCanvasMapping({
      nodes,
      connections,
      workflowObject
    }) {
      const i18n = useI18n();
      const workflowsStore = useWorkflowsStore();
      const workflowState = injectWorkflowState();
      const nodeTypesStore = useNodeTypesStore();
      const nodeHelpers = useNodeHelpers();
      const {
        dirtinessByName
      } = useNodeDirtiness();
      function createStickyNoteRenderType(node$1) {
        return {
          type: CanvasNodeRenderType.StickyNote,
          options: {
            width: node$1.parameters.width,
            height: node$1.parameters.height,
            color: node$1.parameters.color,
            content: node$1.parameters.content
          }
        };
      }
      function createAddNodesRenderType() {
        return {
          type: CanvasNodeRenderType.AddNodes,
          options: {}
        };
      }
      function createChoicePromptRenderType() {
        return {
          type: CanvasNodeRenderType.ChoicePrompt,
          options: {}
        };
      }
      function createDefaultNodeRenderType(node$1) {
        const nodeType = nodeTypeDescriptionByNodeId.value[node$1.id];
        const icon$1 = getNodeIconSource(simulatedNodeTypeDescriptionByNodeId.value[node$1.id] ?? nodeType ?? node$1.type, node$1);
        return {
          type: CanvasNodeRenderType.Default,
          options: {
            trigger: isTriggerNodeById.value[node$1.id],
            configuration: nodeTypesStore.isConfigNode(workflowObject.value, node$1, node$1.type),
            configurable: nodeTypesStore.isConfigurableNode(workflowObject.value, node$1, node$1.type),
            inputs: {
              labelSize: nodeInputLabelSizeById.value[node$1.id]
            },
            outputs: {
              labelSize: nodeOutputLabelSizeById.value[node$1.id]
            },
            tooltip: nodeTooltipById.value[node$1.id],
            dirtiness: dirtinessByName.value[node$1.name],
            icon: icon$1
          }
        };
      }
      const renderTypeByNodeId = computed(() => nodes.value.reduce((acc, node$1) => {
        switch (node$1.type) {
          case `${CanvasNodeRenderType.StickyNote}`:
            acc[node$1.id] = createStickyNoteRenderType(node$1);
            break;
          case `${CanvasNodeRenderType.AddNodes}`:
            acc[node$1.id] = createAddNodesRenderType();
            break;
          case `${CanvasNodeRenderType.ChoicePrompt}`:
            acc[node$1.id] = createChoicePromptRenderType();
            break;
          default:
            acc[node$1.id] = createDefaultNodeRenderType(node$1);
        }
        return acc;
      }, {}) ?? {});
      const nodeTypeDescriptionByNodeId = computed(() => nodes.value.reduce((acc, node$1) => {
        acc[node$1.id] = nodeTypesStore.getNodeType(node$1.type, node$1.typeVersion) ?? nodeTypesStore.communityNodeType(node$1.type)?.nodeDescription ?? null;
        return acc;
      }, {}));
      const isTriggerNodeById = computed(() => nodes.value.reduce((acc, node$1) => {
        acc[node$1.id] = nodeTypesStore.isTriggerNode(node$1.type);
        return acc;
      }, {}));
      const nodeSubtitleById = computed(() => {
        return nodes.value.reduce((acc, node$1) => {
          try {
            const nodeTypeDescription = nodeTypeDescriptionByNodeId.value[node$1.id];
            if (!nodeTypeDescription) return acc;
            const nodeSubtitle = nodeHelpers.getNodeSubtitle(node$1, nodeTypeDescription, workflowObject.value) ?? "";
            if (nodeSubtitle.includes("__CUSTOM_API_CALL__")) return acc;
            acc[node$1.id] = nodeSubtitle;
          } catch (e) {}
          return acc;
        }, {});
      });
      const nodeInputsById = computed(() => nodes.value.reduce((acc, node$1) => {
        const nodeTypeDescription = nodeTypeDescriptionByNodeId.value[node$1.id];
        const workflowObjectNode = workflowObject.value.getNode(node$1.name);
        acc[node$1.id] = workflowObjectNode && nodeTypeDescription ? mapLegacyEndpointsToCanvasConnectionPort(getNodeInputs(workflowObject.value, workflowObjectNode, nodeTypeDescription), nodeTypeDescription.inputNames ?? []) : [];
        return acc;
      }, {}));
      function getLabelSize(label$7 = "") {
        if (label$7.length <= 2) return 0;else if (label$7.length <= 6) return 1;else return 2;
      }
      function getMaxNodePortsLabelSize(ports) {
        const labelSizes = ["small", "medium", "large"];
        const labelSizeIndexes = ports.reduce((sizeAcc, input) => {
          if (input.type === NodeConnectionTypes.Main) sizeAcc.push(getLabelSize(input.label ?? ""));
          return sizeAcc;
        }, [0]);
        return labelSizes[Math.max(...labelSizeIndexes)];
      }
      const nodeInputLabelSizeById = computed(() => nodes.value.reduce((acc, node$1) => {
        acc[node$1.id] = getMaxNodePortsLabelSize(nodeInputsById.value[node$1.id]);
        return acc;
      }, {}));
      const nodeOutputLabelSizeById = computed(() => nodes.value.reduce((acc, node$1) => {
        acc[node$1.id] = getMaxNodePortsLabelSize(nodeOutputsById.value[node$1.id]);
        return acc;
      }, {}));
      const nodeOutputsById = computed(() => nodes.value.reduce((acc, node$1) => {
        const nodeTypeDescription = nodeTypeDescriptionByNodeId.value[node$1.id];
        const workflowObjectNode = workflowObject.value.getNode(node$1.name);
        acc[node$1.id] = workflowObjectNode && nodeTypeDescription ? mapLegacyEndpointsToCanvasConnectionPort(getNodeOutputs(workflowObject.value, workflowObjectNode, nodeTypeDescription), nodeTypeDescription.outputNames ?? []) : [];
        return acc;
      }, {}));
      const nodePinnedDataById = computed(() => nodes.value.reduce((acc, node$1) => {
        acc[node$1.id] = workflowsStore.pinDataByNodeName(node$1.name);
        return acc;
      }, {}));
      const nodeTooltipById = computed(() => {
        if (!workflowsStore.isWorkflowRunning) return {};
        const activeTriggerNodeCount = nodes.value.filter(node$1 => isTriggerNodeById.value[node$1.id] && !node$1.disabled).length;
        const triggerNodeName = workflowsStore.getWorkflowExecution?.triggerNode;
        if (triggerNodeName === void 0 && activeTriggerNodeCount !== 1) return {};
        return nodes.value.reduce((acc, node$1) => {
          const nodeTypeDescription = nodeTypeDescriptionByNodeId.value[node$1.id];
          if (nodeTypeDescription && isTriggerNodeById.value[node$1.id]) {
            if (!!node$1.disabled || triggerNodeName !== void 0 && triggerNodeName !== node$1.name || !["new", "unknown", "waiting"].includes(nodeExecutionStatusById.value[node$1.id]) || nodePinnedDataById.value[node$1.id]) return acc;
            if (typeof nodeTypeDescription.eventTriggerDescription === "string") {
              const nodeName = i18n.shortNodeType(nodeTypeDescription.name);
              const {
                eventTriggerDescription
              } = nodeTypeDescription;
              acc[node$1.id] = i18n.nodeText(nodeTypeDescription.name).eventTriggerDescription(nodeName, eventTriggerDescription ?? "");
            } else acc[node$1.id] = i18n.baseText("node.waitingForYouToCreateAnEventIn", {
              interpolate: {
                nodeType: nodeTypeDescription ? getTriggerNodeServiceName(nodeTypeDescription) : ""
              }
            });
          }
          return acc;
        }, {});
      });
      const nodeExecutionRunningById = computed(() => nodes.value.reduce((acc, node$1) => {
        acc[node$1.id] = workflowState.executingNode.isNodeExecuting(node$1.name);
        return acc;
      }, {}));
      const nodeExecutionWaitingForNextById = computed(() => nodes.value.reduce((acc, node$1) => {
        acc[node$1.id] = node$1.name === workflowState.executingNode.lastAddedExecutingNode && workflowState.executingNode.executingNode.length === 0 && workflowsStore.isWorkflowRunning;
        return acc;
      }, {}));
      const nodeExecutionStatusById = computed(() => nodes.value.reduce((acc, node$1) => {
        const tasks = workflowsStore.getWorkflowRunData?.[node$1.name] ?? [];
        let lastExecutionStatus = tasks.at(-1)?.executionStatus;
        if (tasks.length > 1 && lastExecutionStatus === "canceled") lastExecutionStatus = tasks.at(-2)?.executionStatus;
        acc[node$1.id] = lastExecutionStatus ?? "new";
        return acc;
      }, {}));
      const nodeExecutionRunDataById = computed(() => nodes.value.reduce((acc, node$1) => {
        acc[node$1.id] = workflowsStore.getWorkflowResultDataByNodeName(node$1.name);
        return acc;
      }, {}));
      const nodeExecutionRunDataOutputMapById = ref({});
      watchThrottled(nodeExecutionRunDataById, value => {
        nodeExecutionRunDataOutputMapById.value = Object.keys(value).reduce((acc, nodeId) => {
          acc[nodeId] = {};
          const outputData = {
            iterations: 0,
            total: 0
          };
          for (const runIteration of nodeExecutionRunDataById.value[nodeId] ?? []) {
            const data = runIteration.data ?? {};
            for (const connectionType of Object.keys(data)) {
              const connectionTypeData = data[connectionType] ?? {};
              acc[nodeId][connectionType] = acc[nodeId][connectionType] ?? {};
              for (const outputIndex of Object.keys(connectionTypeData)) {
                const connectionTypeOutputIndexData = connectionTypeData[parseInt(outputIndex, 10)] ?? [];
                acc[nodeId][connectionType][outputIndex] = acc[nodeId][connectionType][outputIndex] ?? {
                  ...outputData
                };
                if (runIteration.executionStatus !== "canceled") acc[nodeId][connectionType][outputIndex].iterations += 1;
                acc[nodeId][connectionType][outputIndex].total += connectionTypeOutputIndexData.length;
              }
            }
          }
          return acc;
        }, {});
      }, {
        throttle: 500,
        immediate: true
      });
      const nodeExecutionErrorsById = computed(() => nodes.value.reduce((acc, node$1) => {
        const executionErrors = [];
        const nodeExecutionRunData = workflowsStore.getWorkflowRunData?.[node$1.name];
        if (nodeExecutionRunData) nodeExecutionRunData.forEach(executionRunData => {
          if (executionRunData?.error) {
            const {
              message,
              description: description$1
            } = executionRunData.error;
            const issue = `${message}${description$1 ? ` (${description$1})` : ""}`;
            executionErrors.push(sanitizeHtml(issue));
          }
        });
        acc[node$1.id] = executionErrors;
        return acc;
      }, {}));
      const nodeValidationErrorsById = computed(() => nodes.value.reduce((acc, node$1) => {
        const validationErrors = [];
        if (node$1?.issues !== void 0) validationErrors.push(...nodeHelpers.nodeIssuesToString(node$1.issues, node$1));
        acc[node$1.id] = validationErrors;
        return acc;
      }, {}));
      const nodeHasIssuesById = computed(() => nodes.value.reduce((acc, node$1) => {
        const hasExecutionErrors = nodeExecutionErrorsById.value[node$1.id]?.length > 0;
        const hasValidationErrors = nodeValidationErrorsById.value[node$1.id]?.length > 0;
        if (["crashed", "error"].includes(nodeExecutionStatusById.value[node$1.id])) acc[node$1.id] = true;else if (nodePinnedDataById.value[node$1.id]) acc[node$1.id] = false;else if (hasValidationErrors) acc[node$1.id] = true;else if (hasExecutionErrors) acc[node$1.id] = true;else {
          const tasks = workflowsStore.getWorkflowRunData?.[node$1.name] ?? [];
          acc[node$1.id] = Boolean(tasks.at(-1)?.error);
        }
        return acc;
      }, {}));
      const nodeExecutionWaitingById = computed(() => nodes.value.reduce((acc, node$1) => {
        const isExecutionSummary = execution => "waitTill" in execution;
        const workflowExecution = workflowsStore.getWorkflowExecution;
        const lastNodeExecuted = workflowExecution?.data?.resultData?.lastNodeExecuted;
        if (workflowExecution && lastNodeExecuted && isExecutionSummary(workflowExecution)) {
          if (node$1.name === workflowExecution.data?.resultData?.lastNodeExecuted && workflowExecution?.waitTill && !workflowExecution?.finished) {
            if (node$1 && node$1.type === "n8n-nodes-base.wait" && ["webhook", "form"].includes(node$1.parameters.resume)) {
              acc[node$1.id] = node$1.parameters.resume === "webhook" ? i18n.baseText("node.theNodeIsWaitingWebhookCall") : i18n.baseText("node.theNodeIsWaitingFormCall");
              return acc;
            }
            if (node$1?.parameters.operation === "sendAndWait") {
              acc[node$1.id] = i18n.baseText("node.theNodeIsWaitingUserInput");
              return acc;
            }
            if (node$1?.type === "n8n-nodes-base.form") {
              acc[node$1.id] = i18n.baseText("node.theNodeIsWaitingFormCall");
              return acc;
            }
            const waitDate = new Date(workflowExecution.waitTill);
            if (waitDate.getTime() === WAIT_INDEFINITELY.getTime()) {
              acc[node$1.id] = i18n.baseText("node.theNodeIsWaitingIndefinitelyForAnIncomingWebhookCall");
              return acc;
            }
            acc[node$1.id] = i18n.baseText("node.nodeIsWaitingTill", {
              interpolate: {
                date: waitDate.toLocaleDateString(),
                time: waitDate.toLocaleTimeString()
              }
            });
          }
        }
        return acc;
      }, {}));
      const additionalNodePropertiesById = computed(() => {
        const stickyNodeBaseZIndex = -100;
        const sortedStickyNodeBoundingBoxes = nodes.value.reduce((acc, node$1) => {
          if (node$1.type === "n8n-nodes-base.stickyNote") {
            const x = node$1.position[0];
            const y = node$1.position[1];
            const width$1 = node$1.parameters.width;
            const height = node$1.parameters.height;
            acc.push({
              id: node$1.id,
              x,
              y,
              width: width$1,
              height,
              area: width$1 * height,
              zIndex: stickyNodeBaseZIndex
            });
          }
          return acc;
        }, []).sort((a, b) => b.area - a.area);
        sortedStickyNodeBoundingBoxes.forEach((node$1, index) => {
          node$1.zIndex = stickyNodeBaseZIndex + index;
        });
        for (let i = 0; i < sortedStickyNodeBoundingBoxes.length; i++) {
          const node1 = sortedStickyNodeBoundingBoxes[i];
          for (let j = i + 1; j < sortedStickyNodeBoundingBoxes.length; j++) {
            const node2 = sortedStickyNodeBoundingBoxes[j];
            if (checkOverlap(node1, node2)) {
              if (node1.area < node2.area && node1.zIndex <= node2.zIndex) node1.zIndex = node2.zIndex + 1;else if (node2.area < node1.area && node2.zIndex <= node1.zIndex) node2.zIndex = node1.zIndex + 1;
            }
          }
        }
        return sortedStickyNodeBoundingBoxes.reduce((acc, node$1) => {
          acc[node$1.id] = {
            style: {
              zIndex: node$1.zIndex
            }
          };
          return acc;
        }, {});
      });
      const simulatedNodeTypeDescriptionByNodeId = computed(() => {
        return nodes.value.reduce((acc, node$1) => {
          if (["n8n-nodes-base.simulate", "n8n-nodes-base.simulateTrigger"].includes(node$1.type)) {
            const icon$1 = node$1.parameters?.icon;
            const iconValue = workflowObject.value.expression.getSimpleParameterValue(node$1, icon$1, "internal", {});
            if (iconValue && typeof iconValue === "string") acc[node$1.id] = nodeTypesStore.getNodeType(iconValue);
          }
          return acc;
        }, {});
      });
      function filterOutCanceled(tasks) {
        if (!tasks) return null;
        return tasks.filter(task => task.executionStatus !== "canceled");
      }
      const mappedNodes = computed(() => {
        const connectionsBySourceNode = connections.value;
        const connectionsByDestinationNode = mapConnectionsByDestination(connectionsBySourceNode);
        return [...nodes.value.map(node$1 => {
          const outputConnections = connectionsBySourceNode[node$1.name] ?? {};
          const inputConnections = connectionsByDestinationNode[node$1.name] ?? {};
          const data = {
            id: node$1.id,
            name: node$1.name,
            subtitle: nodeSubtitleById.value[node$1.id] ?? "",
            type: node$1.type,
            typeVersion: node$1.typeVersion,
            disabled: node$1.disabled,
            inputs: nodeInputsById.value[node$1.id] ?? [],
            outputs: nodeOutputsById.value[node$1.id] ?? [],
            connections: {
              [CanvasConnectionMode.Input]: inputConnections,
              [CanvasConnectionMode.Output]: outputConnections
            },
            issues: {
              execution: nodeExecutionErrorsById.value[node$1.id],
              validation: nodeValidationErrorsById.value[node$1.id],
              visible: nodeHasIssuesById.value[node$1.id]
            },
            pinnedData: {
              count: nodePinnedDataById.value[node$1.id]?.length ?? 0,
              visible: !!nodePinnedDataById.value[node$1.id]
            },
            execution: {
              status: nodeExecutionStatusById.value[node$1.id],
              waiting: nodeExecutionWaitingById.value[node$1.id],
              waitingForNext: nodeExecutionWaitingForNextById.value[node$1.id],
              running: nodeExecutionRunningById.value[node$1.id]
            },
            runData: {
              outputMap: nodeExecutionRunDataOutputMapById.value[node$1.id],
              iterations: filterOutCanceled(nodeExecutionRunDataById.value[node$1.id])?.length ?? 0,
              visible: !!nodeExecutionRunDataById.value[node$1.id]
            },
            render: renderTypeByNodeId.value[node$1.id] ?? {
              type: "default",
              options: {}
            }
          };
          return {
            id: node$1.id,
            label: node$1.name,
            type: "canvas-node",
            position: {
              x: node$1.position[0],
              y: node$1.position[1]
            },
            data,
            ...additionalNodePropertiesById.value[node$1.id],
            draggable: node$1.draggable ?? true
          };
        })];
      });
      const mappedConnections = computed(() => {
        return mapLegacyConnectionsToCanvasConnections(connections.value ?? [], nodes.value ?? []).map(connection => {
          const type = getConnectionType(connection);
          const label$7 = getConnectionLabel(connection);
          const data = getConnectionData(connection);
          return {
            ...connection,
            data,
            type,
            label: label$7,
            markerEnd: MarkerType.ArrowClosed
          };
        });
      });
      function getConnectionData(connection) {
        const {
          type,
          index
        } = parseCanvasConnectionHandleString(connection.sourceHandle);
        const runDataTotal = nodeExecutionRunDataOutputMapById.value[connection.source]?.[type]?.[index]?.total ?? 0;
        const sourceTasks = nodeExecutionRunDataById.value[connection.source] ?? [];
        let lastSourceTask = sourceTasks[sourceTasks.length - 1];
        if (lastSourceTask?.executionStatus === "canceled" && sourceTasks.length > 1) lastSourceTask = sourceTasks[sourceTasks.length - 2];
        let status$1;
        if (nodeExecutionRunningById.value[connection.source] && runDataTotal === 0) status$1 = "running";else if (nodePinnedDataById.value[connection.source] && nodeExecutionRunDataById.value[connection.source]) status$1 = "pinned";else if (nodeHasIssuesById.value[connection.source]) status$1 = "error";else if (runDataTotal > 0 && lastSourceTask?.executionStatus !== "canceled") status$1 = "success";
        const maxConnections = [...nodeInputsById.value[connection.source], ...nodeInputsById.value[connection.target]].filter(port => port.type === type).reduce((acc, port) => {
          if (port.maxConnections === void 0) return acc;
          return Math.min(acc ?? Infinity, port.maxConnections);
        }, void 0);
        return {
          ...connection.data,
          ...(maxConnections ? {
            maxConnections
          } : {}),
          status: status$1
        };
      }
      function getConnectionType(_) {
        return "canvas-edge";
      }
      function getConnectionLabel(connection) {
        const fromNode = nodes.value.find(node$1 => node$1.name === connection.data?.source.node);
        if (!fromNode) return "";
        if (nodePinnedDataById.value[fromNode.id]) {
          const pinnedDataCount = nodePinnedDataById.value[fromNode.id]?.length ?? 0;
          return pinnedDataCount > 0 ? i18n.baseText("ndv.output.items", {
            adjustToNumber: pinnedDataCount,
            interpolate: {
              count: String(pinnedDataCount)
            }
          }) : "";
        } else if (nodeExecutionRunDataById.value[fromNode.id]) {
          const {
            type,
            index
          } = parseCanvasConnectionHandleString(connection.sourceHandle);
          const runDataTotal = nodeExecutionRunDataOutputMapById.value[fromNode.id]?.[type]?.[index]?.total ?? 0;
          const hasMultipleRunDataIterations = (nodeExecutionRunDataOutputMapById.value[fromNode.id]?.[type]?.[index]?.iterations ?? 1) > 1;
          return runDataTotal > 0 ? i18n.baseText(hasMultipleRunDataIterations ? "ndv.output.itemsTotal" : "ndv.output.items", {
            adjustToNumber: runDataTotal,
            interpolate: {
              count: String(runDataTotal)
            }
          }) : "";
        }
        return "";
      }
      return {
        additionalNodePropertiesById,
        nodeExecutionRunDataOutputMapById,
        nodeExecutionWaitingForNextById,
        nodeHasIssuesById,
        connections: mappedConnections,
        nodes: mappedNodes
      };
    }

    //#endregion
    _export({
      l: useWorkflowExtraction,
      o: useContextMenuItems,
      s: useExpressionResolveCtx,
      t: useCanvasMapping
    });
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
        __commonJS = _chunkLegacy001Js.t;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        guardReactiveProps = _vueRuntimeEsmBundlerLegacy003Js.I;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        h = _vueRuntimeEsmBundlerLegacy003Js.L;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        onUnmounted = _vueRuntimeEsmBundlerLegacy003Js.Q;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        mergeModels = _vueRuntimeEsmBundlerLegacy003Js.U;
        toRef = _vueRuntimeEsmBundlerLegacy003Js.Vt;
        mergeProps = _vueRuntimeEsmBundlerLegacy003Js.W;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        Teleport = _vueRuntimeEsmBundlerLegacy003Js.b;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        useCssModule = _vueRuntimeEsmBundlerLegacy003Js.c;
        resolveDynamicComponent = _vueRuntimeEsmBundlerLegacy003Js.ct;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        useModel = _vueRuntimeEsmBundlerLegacy003Js.ft;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createSlots = _vueRuntimeEsmBundlerLegacy003Js.k;
        useCssVars = _vueRuntimeEsmBundlerLegacy003Js.l;
        Transition = _vueRuntimeEsmBundlerLegacy003Js.n;
        provide = _vueRuntimeEsmBundlerLegacy003Js.nt;
        vShow = _vueRuntimeEsmBundlerLegacy003Js.p;
        useSlots = _vueRuntimeEsmBundlerLegacy003Js.pt;
        useAttrs = _vueRuntimeEsmBundlerLegacy003Js.ut;
        normalizeProps = _vueRuntimeEsmBundlerLegacy003Js.vn;
        watchEffect = _vueRuntimeEsmBundlerLegacy003Js.vt;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
        Suspense = _vueRuntimeEsmBundlerLegacy003Js.y;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.yn;
        inject = _vueRuntimeEsmBundlerLegacy003Js.z;
      }, function (_MapCacheLegacy005Js) {
        onKeyDown = _MapCacheLegacy005Js._;
        I18nT = _MapCacheLegacy005Js._t;
        useI18n = _MapCacheLegacy005Js.gt;
        useThrottleFn = _MapCacheLegacy005Js.it;
        watchOnce = _MapCacheLegacy005Js.ot;
        watchThrottled = _MapCacheLegacy005Js.st;
        onKeyUp = _MapCacheLegacy005Js.y;
      }, function (_srcLegacy007Js) {
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nIconButton_default = _srcLegacy007Js.Tt;
        N8nLink_default = _srcLegacy007Js.mt;
        useDeviceSupport = _srcLegacy007Js.rt;
        N8nActionDropdown_default = _srcLegacy007Js.tt;
        N8nSticky_default = _srcLegacy007Js.v;
        N8nTooltip_default = _srcLegacy007Js.vt;
        N8nPopover_default = _srcLegacy007Js.w;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        truncateBeforeLast = _truncateLegacy00hJs.n;
        createEventBus = _truncateLegacy00hJs.x;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_ParameterInputListLegacy00rJs) {
        TitledList_default = _ParameterInputListLegacy00rJs.E;
      }, function (_useTelemetryLegacy00FJs) {
        _sfc_main$1 = _useTelemetryLegacy00FJs.A;
        useGetPointerPosition = _useTelemetryLegacy00FJs.B;
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useHistoryStore = _useTelemetryLegacy00FJs.Cr;
        PanelPosition = _useTelemetryLegacy00FJs.D;
        useSourceControlStore = _useTelemetryLegacy00FJs.Dn;
        NodeId = _useTelemetryLegacy00FJs.E;
        nodeViewEventBus = _useTelemetryLegacy00FJs.Ei;
        getBezierPath = _useTelemetryLegacy00FJs.F;
        isChatNode = _useTelemetryLegacy00FJs.G;
        getBoundsofRects = _useTelemetryLegacy00FJs.I;
        v4_default = _useTelemetryLegacy00FJs.Io;
        getConnectedEdges = _useTelemetryLegacy00FJs.L;
        _sfc_main$d = _useTelemetryLegacy00FJs.M;
        _sfc_main$f = _useTelemetryLegacy00FJs.N;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        Position = _useTelemetryLegacy00FJs.O;
        clamp = _useTelemetryLegacy00FJs.P;
        getTriggerNodeServiceName = _useTelemetryLegacy00FJs.Qr;
        getRectOfNodes = _useTelemetryLegacy00FJs.R;
        injectWorkflowState = _useTelemetryLegacy00FJs.Sn;
        CanvasNodeRenderType = _useTelemetryLegacy00FJs.Sr;
        MarkerType = _useTelemetryLegacy00FJs.T;
        useVueFlow = _useTelemetryLegacy00FJs.V;
        useNDVStore = _useTelemetryLegacy00FJs.a;
        CanvasConnectionMode = _useTelemetryLegacy00FJs.br;
        CONFIGURATION_NODE_RADIUS = _useTelemetryLegacy00FJs.c;
        GRID_SIZE = _useTelemetryLegacy00FJs.f;
        isValidNodeConnectionType = _useTelemetryLegacy00FJs.gr;
        _sfc_main$3 = _useTelemetryLegacy00FJs.j;
        _sfc_main$4 = _useTelemetryLegacy00FJs.k;
        calculateNodeSize = _useTelemetryLegacy00FJs.m;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        PUSH_NODES_OFFSET = _useTelemetryLegacy00FJs.p;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        DEFAULT_NODE_SIZE = _useTelemetryLegacy00FJs.u;
        isPresent = _useTelemetryLegacy00FJs.vi;
        updateViewportToContainNodes = _useTelemetryLegacy00FJs.w;
        useNodeHelpers = _useTelemetryLegacy00FJs.xn;
        CanvasNodeDirtiness = _useTelemetryLegacy00FJs.xr;
        getMousePosition = _useTelemetryLegacy00FJs.y;
        environments_store_default = _useTelemetryLegacy00FJs.yn;
        getSmoothStepPath = _useTelemetryLegacy00FJs.z;
      }, function (_useToastLegacy00HJs) {
        sanitizeHtml = _useToastLegacy00HJs.c;
        useStyles = _useToastLegacy00HJs.n;
        isOutsideSelected = _useToastLegacy00HJs.s;
        useToast = _useToastLegacy00HJs.t;
      }, function (_constantsLegacy00NJs) {
        WAIT_INDEFINITELY = _constantsLegacy00NJs.Ca;
        CanvasNodeKey = _constantsLegacy00NJs.Cs;
        isExecutable = _constantsLegacy00NJs.Di;
        WAIT_NODE_TYPE = _constantsLegacy00NJs.Dn;
        WORKFLOW_EXTRACTION_NAME_MODAL_KEY = _constantsLegacy00NJs.Go;
        CUSTOM_API_CALL_KEY = _constantsLegacy00NJs.I;
        extractReferencesInNodeExpressions = _constantsLegacy00NJs.Lr;
        buildAdjacencyList = _constantsLegacy00NJs.Nr;
        isNodeWithWorkflowSelector = _constantsLegacy00NJs.Oi;
        parseExtractableSubgraphSelection = _constantsLegacy00NJs.Pr;
        CHAT_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.Q;
        EXPERIMENT_TEMPLATES_DATA_QUALITY_KEY = _constantsLegacy00NJs.So;
        CanvasNodeHandleKey = _constantsLegacy00NJs.Ss;
        require_isEqual = _constantsLegacy00NJs.Ta;
        isCommunityPackageName = _constantsLegacy00NJs.Ui;
        CANVAS_EXECUTION_DATA_THROTTLE_DURATION = _constantsLegacy00NJs.Us;
        NOT_DUPLICATABLE_NODE_TYPES = _constantsLegacy00NJs.Yt;
        getNodeInputs = _constantsLegacy00NJs._i;
        getResourcePermissions = _constantsLegacy00NJs._r;
        NodeConnectionTypes = _constantsLegacy00NJs.ea;
        NODE_CREATOR_OPEN_SOURCES = _constantsLegacy00NJs.io;
        SIMULATE_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.mn;
        VIEWS = _constantsLegacy00NJs.mo;
        EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.pa;
        SIMULATE_NODE_TYPE = _constantsLegacy00NJs.pn;
        mapConnectionsByDestination = _constantsLegacy00NJs.ui;
        getNodeOutputs = _constantsLegacy00NJs.vi;
        getSubworkflowId = _constantsLegacy00NJs.wi;
        ExpressionLocalResolveContextSymbol = _constantsLegacy00NJs.ws;
        SEND_AND_WAIT_OPERATION = _constantsLegacy00NJs.xa;
        STICKY_NODE_TYPE = _constantsLegacy00NJs.xn;
        CanvasKey = _constantsLegacy00NJs.xs;
        FORM_NODE_TYPE = _constantsLegacy00NJs.xt;
      }, function (_chatPanelStoreLegacy00ZJs) {
        useChatPanelStore = _chatPanelStoreLegacy00ZJs.t;
      }, function (_templatesStoreLegacy015Js) {
        useTemplatesDataQualityStore = _templatesStoreLegacy015Js.a;
        trackTemplatesClick = _templatesStoreLegacy015Js.i;
        TemplateClickSource = _templatesStoreLegacy015Js.n;
        isExtraTemplateLinksExperimentEnabled = _templatesStoreLegacy015Js.r;
        useTemplatesStore = _templatesStoreLegacy015Js.t;
      }, function (_useRunWorkflowLegacy01fJs) {
        useNodeDirtiness = _useRunWorkflowLegacy01fJs.r;
        useRunWorkflow = _useRunWorkflowLegacy01fJs.t;
      }, function (_usePinnedDataLegacy01hJs) {
        usePinnedData = _usePinnedDataLegacy01hJs.t;
      }, function (_nodeCreatorStoreLegacy01jJs) {
        mapLegacyEndpointsToCanvasConnectionPort = _nodeCreatorStoreLegacy01jJs.c;
        insertSpacersBetweenEndpoints = _nodeCreatorStoreLegacy01jJs.i;
        parseCanvasConnectionHandleString = _nodeCreatorStoreLegacy01jJs.l;
        checkOverlap = _nodeCreatorStoreLegacy01jJs.n;
        createCanvasConnectionHandleString = _nodeCreatorStoreLegacy01jJs.r;
        mapLegacyConnectionsToCanvasConnections = _nodeCreatorStoreLegacy01jJs.s;
        useNodeCreatorStore = _nodeCreatorStoreLegacy01jJs.t;
      }, function (_nodeIconLegacy01lJs) {
        getNodeIconSource = _nodeIconLegacy01lJs.t;
      }, function (_useCanvasOperationsLegacy01pJs) {
        useLogsStore = _useCanvasOperationsLegacy01pJs.a;
        useExperimentalNdvStore = _useCanvasOperationsLegacy01pJs.i;
        useCanvasOperations = _useCanvasOperationsLegacy01pJs.t;
      }, function (_NodeIconLegacy01vJs) {
        NodeIcon_default = _NodeIconLegacy01vJs.t;
      }, function (_KeyboardShortcutTooltipLegacy01xJs) {
        KeyboardShortcutTooltip_default = _KeyboardShortcutTooltipLegacy01xJs.t;
      }, function (_useTelemetryContextLegacy02jJs) {
        useTelemetryContext = _useTelemetryContextLegacy02jJs.t;
      }, function (_NodeSettingsLegacy02FJs) {
        NodeSettings_default = _NodeSettingsLegacy02FJs.t;
      }, function (_useKeybindingsLegacy03tJs) {
        useKeybindings = _useKeybindingsLegacy03tJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._component_1dst5_123 {\n  position: relative;\n  display: flex;\n  align-items: stretch;\n}\n._split_1dst5_129 ._button_1dst5_129 {\n  height: var(--spacing--2xl);\n  padding-inline-start: var(--spacing--xs);\n  padding-block: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n._divider_1dst5_137 {\n  width: 1px;\n  background-color: var(--button--color--text, var(--button--color--text--primary));\n}\n._chevron_1dst5_142 {\n  width: 40px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n._menu_1dst5_148 .el-dropdown {\n  height: 100%;\n}\n._menuPopper_1dst5_152 {\n  max-width: none !important;\n}\n._menuItem_1dst5_156 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--2xs);\n}\n._menuItem_1dst5_156._disabled_1dst5_162 ._menuIcon_1dst5_162 {\n  opacity: 0.2;\n}\n._buttonContent_1dst5_166 {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start !important;\n  gap: var(--spacing--5xs);\n}\n._subText_1dst5_173 {\n  font-size: var(--font-size--2xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._status_ncm5n_123 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--5xs);\n  font-weight: var(--font-weight--bold);\n}\n._runData_ncm5n_130 {\n  color: var(--color--success);\n}\n._waiting_ncm5n_134 {\n  color: var(--color--secondary);\n}\n._pinnedData_ncm5n_138 {\n  color: var(--color--secondary);\n}\n._running_ncm5n_142 {\n  color: hsl(var(--color--primary--h), var(--color--primary--s), var(--color--primary--l));\n}\n._running_ncm5n_142._absoluteSpinner_ncm5n_145 {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3.75em;\n  color: hsla(var(--color--primary--h), var(--color--primary--s), var(--color--primary--l), 0.7);\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: var(--canvas-node--status-icons--margin);\n}\n._running_ncm5n_142._spinnerScrim_ncm5n_158 {\n  z-index: 10;\n  background-color: rgba(255, 255, 255, 0.82);\n  border-radius: var(--radius--lg);\n}\n._issues_ncm5n_164 {\n  color: var(--color--danger);\n  cursor: default;\n}\n._count_ncm5n_169 {\n  font-size: var(--font-size--sm);\n}\n._warning_ncm5n_173 {\n  color: var(--color--warning);\n}\n._disabled_ncm5n_177 {\n  color: var(--color--foreground--shade-2);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._popover_1wxso_123 {\n  min-width: 208px;\n  margin-bottom: -8px;\n  margin-left: -2px;\n}\n._content_1wxso_129 {\n  display: flex;\n  flex-direction: row;\n  width: -moz-fit-content;\n  width: fit-content;\n  gap: var(--spacing--2xs);\n}\n._color_1wxso_136 {\n  width: 20px;\n  height: 20px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--color--foreground--shade-2);\n  border-radius: 50%;\n  background: var(--sticky--color--background);\n}\n._color_1wxso_136:hover {\n  cursor: pointer;\n}\n._color_1wxso_136._selected_1wxso_148 {\n  box-shadow: 0 0 0 1px var(--sticky--color--background);\n}\n._color_1wxso_136._sticky-color-1_1wxso_151 {\n  --sticky--color--background: var(--sticky--color--background--variant-1);\n}\n._color_1wxso_136._sticky-color-2_1wxso_154 {\n  --sticky--color--background: var(--sticky--color--background--variant-2);\n}\n._color_1wxso_136._sticky-color-3_1wxso_157 {\n  --sticky--color--background: var(--sticky--color--background--variant-3);\n}\n._color_1wxso_136._sticky-color-4_1wxso_160 {\n  --sticky--color--background: var(--sticky--color--background--variant-4);\n}\n._color_1wxso_136._sticky-color-5_1wxso_163 {\n  --sticky--color--background: var(--sticky--color--background--variant-5);\n}\n._color_1wxso_136._sticky-color-6_1wxso_166 {\n  --sticky--color--background: var(--sticky--color--background--variant-6);\n}\n._color_1wxso_136._sticky-color-7_1wxso_169 {\n  --sticky--color--background: var(--sticky--color--background--variant-7);\n}\n._option_1wxso_173 {\n  display: inline-block;\n  padding: var(--spacing--3xs);\n  color: var(--color--text--tint-1);\n}\n._option_1wxso_173 svg {\n  width: var(--font-size--sm) !important;\n}\n._option_1wxso_173:hover {\n  color: var(--color--primary);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._canvasNodeToolbar_snt78_123 {\n  padding-bottom: var(--spacing--xs);\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  cursor: default;\n}\n._canvasNodeToolbar_snt78_123._isExperimentalNdvActive_snt78_130 {\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: var(--spacing--3xs);\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  zoom: var(--canvas-zoom-compensation-factor, 1);\n  margin-bottom: var(--spacing--2xs);\n}\n._canvasNodeToolbarItems_snt78_139 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--canvas--color--background);\n  border-radius: var(--radius);\n}\n._canvasNodeToolbarItems_snt78_139 .button {\n  --button--color--text: var(--color--text--tint-1);\n}\n._forceVisible_snt78_150 {\n  opacity: 1 !important;\n}\n._statusIcons_snt78_154 {\n  margin-inline-end: var(--spacing--3xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._settingsIcons_4xb9m_123 {\n  position: absolute;\n  top: var(--canvas-node--status-icons--margin);\n  right: var(--canvas-node--status-icons--margin);\n  display: flex;\n  flex-direction: row;\n}\n._tooltipHeader_4xb9m_131 {\n  display: flex;\n  gap: 2px;\n}\n._tooltipTitle_4xb9m_136 {\n  font-weight: 600;\n  font-size: inherit;\n  line-height: inherit;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._actions_1cmje_123 {\n  display: flex;\n  align-items: center;\n  color: var(--color--text);\n}\n._actions_1cmje_123 > button {\n  color: var(--color--text--tint-1);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._component_hvjba_123 {\n  align-items: flex-start !important;\n  justify-content: stretch;\n  border-width: 1px !important;\n  border-radius: var(--radius) !important;\n  overflow: hidden;\n  --canvas-node--border-color: var(--color--text--tint-2);\n  --embedded-ndv--max-height--expanded: min(\n  \tcalc(var(--canvas-node--height) * 2),\n  \tvar(--input--max-height--focus),\n  \t300px\n  );\n}\n._component_hvjba_123._expanded_hvjba_136 {\n  -webkit-user-select: text;\n          user-select: text;\n  cursor: auto;\n  height: auto;\n  max-height: var(--embedded-ndv--max-height--expanded);\n  min-height: var(--spacing--3xl);\n}\n.selected ._component_hvjba_123._expanded_hvjba_136 {\n  max-height: var(--input--max-height--focus);\n}\n._component_hvjba_123._collapsed_hvjba_146 {\n  overflow: hidden;\n  height: var(--spacing--2xl);\n}\n:root .vue-flow__node:has(._component_hvjba_123) {\n  z-index: 10;\n}\n.selected :root .vue-flow__node:has(._component_hvjba_123) {\n  z-index: 11;\n}\n._collapsedContent_hvjba_158,\n._settingsView_hvjba_159 {\n  z-index: 1000;\n  width: 100%;\n  height: auto;\n  max-height: calc(var(--embedded-ndv--max-height--expanded) - var(--border-width) * 2);\n  min-height: var(--spacing--2xl);\n}\n.selected ._collapsedContent_hvjba_158,\n.selected ._settingsView_hvjba_159 {\n  max-height: calc(var(--input--max-height--focus) - var(--border-width) * 2);\n}\n._collapsedContent_hvjba_158 {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--4xs);\n  background-color: white;\n  padding: var(--spacing--2xs) var(--spacing--4xs) var(--spacing--2xs) var(--spacing--2xs);\n  background-color: var(--color--background--light-3);\n  cursor: pointer;\n}\n._disabled_hvjba_181 ._collapsedContent_hvjba_158 {\n  background-color: var(--color--foreground--tint-1);\n}\n._collapsedContent_hvjba_158 > * {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  zoom: var(--canvas-zoom-compensation-factor, 1);\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n._collapsedNodeName_hvjba_191 {\n  width: 0;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--5xs);\n}\n._collapsedNodeName_hvjba_191 > * {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._settingsView_hvjba_159 > * {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  zoom: var(--canvas-zoom-compensation-factor, 1);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._tooltipTrigger_dauyi_123 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n._popper_dauyi_131 {\n  white-space: nowrap;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._disabledStrikeThrough_1byso_123 {\n  border: 1px solid var(--color--foreground--shade-1);\n  position: absolute;\n  top: calc(var(--canvas-node--height) / 2 - 1px);\n  left: -4px;\n  width: calc(100% + 12px);\n  pointer-events: none;\n}\n._success_1byso_132 {\n  border-color: var(--color--success--tint-1);\n}\n._warning_1byso_136 {\n  border-color: var(--color--warning--tint-1);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._node_199fc_123 {\n  --canvas-node--border-width: 2px;\n  --trigger-node--radius: 36px;\n  --canvas-node--status-icons--margin: var(--spacing--3xs);\n  --node--icon--color: var(--color--foreground--shade-1);\n  position: relative;\n  height: var(--canvas-node--height);\n  width: var(--canvas-node--width);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--canvas-node--color--background, var(--node--color--background));\n  border: var(--canvas-node--border-width) solid var(--canvas-node--border-color, var(--color--foreground--shade-2));\n  border-radius: var(--radius--lg);\n  /**\n   * Node types\n   */\n  /**\n   * State classes\n   * The reverse order defines the priority in case multiple states are active\n   */\n}\n._node_199fc_123._trigger_199fc_145 {\n  border-radius: var(--trigger-node--radius) var(--radius--lg) var(--radius--lg) var(--trigger-node--radius);\n}\n._node_199fc_123._configuration_199fc_148 {\n  background: var(--canvas-node--color--background, var(--node-type--supplemental--color--background));\n  border: var(--canvas-node--border-width) solid var(--canvas-node--border-color, var(--color--foreground--shade-1));\n  border-radius: calc(var(--canvas-node--height) / 2);\n}\n._node_199fc_123._configuration_199fc_148 ._statusIcons_199fc_153 {\n  right: unset;\n}\n._node_199fc_123._configurable_199fc_156 ._icon_199fc_156 {\n  margin-left: calc(40px - (var(--node--icon--size)) / 2 - var(--canvas-node--border-width));\n}\n._node_199fc_123._configurable_199fc_156 ._description_199fc_159 {\n  top: unset;\n  position: relative;\n  margin-top: 0;\n  margin-left: var(--spacing--sm);\n  margin-right: var(--spacing--sm);\n  width: auto;\n  min-width: unset;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n._node_199fc_123._configurable_199fc_156 ._label_199fc_172 {\n  text-align: left;\n}\n._node_199fc_123._configurable_199fc_156 ._subtitle_199fc_175 {\n  text-align: left;\n}\n._node_199fc_123._configurable_199fc_156._configuration_199fc_148 ._icon_199fc_156 {\n  margin-left: calc((var(--canvas-node--height) - var(--node--icon--size) - 4px) / 2);\n}\n._node_199fc_123._configurable_199fc_156._configuration_199fc_148:not(._running_199fc_181) ._statusIcons_199fc_153 {\n  position: static;\n  margin-right: var(--spacing--2xs);\n}\n._node_199fc_123._configurable_199fc_156._configuration_199fc_148 ._description_199fc_159 {\n  margin-right: var(--spacing--xs);\n}\n._node_199fc_123._selected_199fc_188 {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  box-shadow: 0 0 0 calc(8px * var(--canvas-zoom-compensation-factor, 1)) var(--canvas--color--selected-transparent);\n}\n._node_199fc_123._success_199fc_192 {\n  --canvas-node--border-color: var(\n  \t--color-canvas-node-success-border-color,\n  \tvar(--color--success)\n  );\n}\n._node_199fc_123._warning_199fc_198 {\n  --canvas-node--border-color: var(--color--warning);\n}\n._node_199fc_123._error_199fc_201 {\n  --canvas-node--border-color: var(--canvas-node--border-color--error, var(--color--danger));\n}\n._node_199fc_123._pinned_199fc_204 {\n  --canvas-node--border-color: var(\n  \t--color-canvas-node-pinned-border-color,\n  \tvar(--node--border-color--pinned)\n  );\n}\n._node_199fc_123._disabled_199fc_210 {\n  --canvas-node--border-color: var(\n  \t--color-canvas-node-disabled-border-color,\n  \tvar(--color--foreground)\n  );\n}\n._node_199fc_123._running_199fc_181 {\n  background-color: var(--node--color--background--executing);\n  --canvas-node--border-color: var(\n  \t--color-canvas-node-running-border-color,\n  \tvar(--node--border-color--running)\n  );\n}\n._node_199fc_123._waiting_199fc_223 {\n  --canvas-node--border-color: var(\n  \t--color-canvas-node-waiting-border-color,\n  \tvar(--color--secondary)\n  );\n}\n._description_199fc_159 {\n  top: 100%;\n  position: absolute;\n  width: 100%;\n  min-width: calc(var(--canvas-node--width) * 2);\n  margin-top: var(--spacing--2xs);\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--4xs);\n  pointer-events: none;\n}\n._label_199fc_172,\n._disabledLabel_199fc_243 {\n  font-size: var(--font-size--md);\n  text-align: center;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  overflow-wrap: anywhere;\n  font-weight: var(--font-weight--medium);\n  line-height: var(--line-height--sm);\n}\n._subtitle_199fc_175 {\n  width: 100%;\n  text-align: center;\n  color: var(--color--text--tint-1);\n  font-size: var(--font-size--xs);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: var(--line-height--sm);\n  font-weight: var(--font-weight--regular);\n}\n._statusIcons_199fc_153 {\n  position: absolute;\n  bottom: var(--canvas-node--status-icons--margin);\n  right: var(--canvas-node--status-icons--margin);\n}\n._icon_199fc_156 {\n  flex-grow: 0;\n  flex-shrink: 0;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._sticky_166fo_123 {\n  position: relative;\n  /**\n   * State classes\n   * The reverse order defines the priority in case multiple states are active\n   */\n}\n._sticky_166fo_123._selected_166fo_130 {\n  box-shadow: 0 0 0 4px var(--canvas--color--selected);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._addNodes_i8qus_123 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100px;\n  height: 100px;\n}\n._addNodes_i8qus_123:hover ._button_i8qus_131 svg path {\n  fill: var(--color--primary);\n}\n._button_i8qus_131 {\n  background: var(--color--foreground--tint-2);\n  border: 2px dashed var(--color--foreground--shade-2);\n  border-radius: 8px;\n  padding: 0;\n  min-width: 100px;\n  min-height: 100px;\n  cursor: pointer;\n}\n._label_i8qus_145 {\n  width: max-content;\n  font-weight: var(--font-weight--medium);\n  font-size: var(--font-size--md);\n  line-height: var(--line-height--xl);\n  color: var(--color--text--shade-1);\n  margin-top: var(--spacing--2xs);\n  display: flex;\n  flex-direction: column;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._choicePrompt_1wwbc_123 {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing--lg);\n}\n._option_1wwbc_131 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100px;\n}\n._button_1wwbc_138 {\n  background: var(--color--foreground--tint-2);\n  border: 2px dashed var(--color--foreground--shade-2);\n  border-radius: var(--radius--lg);\n  padding: 0;\n  min-width: 100px;\n  min-height: 100px;\n  cursor: pointer;\n}\n._selectedButtonHighlight_1wwbc_148 {\n  border-radius: var(--radius--lg);\n}\n._selectedButtonHighlight_1wwbc_148._highlighted_1wwbc_151 {\n  box-shadow: 0 0 0 7px var(--canvas--color--selected);\n}\n._label_1wwbc_155 {\n  width: max-content;\n  font-weight: var(--font-weight--medium);\n  font-size: var(--font-size--md);\n  line-height: var(--line-height--xl);\n  color: var(--color--text--shade-1);\n  margin-top: var(--spacing--2xs);\n  text-align: center;\n}\n._orDivider_1wwbc_165 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100px;\n  margin-bottom: calc(var(--line-height--xl) * 1em + var(--spacing--2xs));\n}\n._orText_1wwbc_173 {\n  font-size: var(--font-size--md);\n  color: var(--color--text);\n  font-weight: var(--font-weight--regular);\n  padding: 0 var(--spacing--xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._rectangle_1o69r_123 {\n  width: var(--handle--indicator--width);\n  height: var(--handle--indicator--height);\n  background: var(--color--foreground--shade-2);\n}\n._rectangle_1o69r_123:hover {\n  background: var(--color--primary);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._handle_7mf8f_123 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n._label_7mf8f_130 {\n  position: absolute;\n  top: 50%;\n  left: calc(var(--spacing--xs) * -1);\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  transform: translate(0, -50%) scale(var(--canvas-zoom-compensation-factor, 1)) translate(-100%, 0);\n  transform-origin: center left;\n  font-size: var(--font-size--2xs);\n  color: var(--color--foreground--shade-2);\n  background: var(--canvas--label--color--background);\n  z-index: 1;\n  text-align: center;\n  white-space: nowrap;\n}\n._required_7mf8f_145 ._label_7mf8f_130::after {\n  content: \"*\";\n  color: var(--color--danger);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._dot_mkl47_123 {\n  width: var(--handle--indicator--width);\n  height: var(--handle--indicator--height);\n  border-radius: 50%;\n  background: var(--color--foreground--shade-2);\n}\n._dot_mkl47_123:hover {\n  background: var(--color--primary);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._wrapper_1wtvd_123 {\n  position: relative;\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  transform: scale(var(--canvas-zoom-compensation-factor, 1));\n}\n._wrapper_1wtvd_123._right_1wtvd_128 {\n  transform-origin: center left;\n}\n._wrapper_1wtvd_123._bottom_1wtvd_131 {\n  transform-origin: top center;\n}\n._wrapper_1wtvd_123._secondary_1wtvd_134 ._line_1wtvd_134 {\n  stroke: var(--node-type--supplemental--color);\n}\n._wrapper_1wtvd_123._secondary_1wtvd_134 ._plus_1wtvd_137 path {\n  fill: var(--node-type--supplemental--color);\n}\n._wrapper_1wtvd_123._secondary_1wtvd_134 ._plus_1wtvd_137 rect {\n  stroke: var(--node-type--supplemental--color);\n}\n._wrapper_1wtvd_123._success_1wtvd_143 ._line_1wtvd_134 {\n  stroke: var(--color--success);\n}\n._wrapper_1wtvd_123 ._plus_1wtvd_137:hover {\n  cursor: pointer;\n}\n._wrapper_1wtvd_123 ._plus_1wtvd_137:hover path {\n  fill: var(--color--primary);\n}\n._wrapper_1wtvd_123 ._plus_1wtvd_137:hover rect {\n  stroke: var(--color--primary);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._handle_ca2iu_123 {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n._handle_ca2iu_123._connected_ca2iu_129 ._label_ca2iu_129 {\n  max-width: 96px;\n}\n._label_ca2iu_129 {\n  position: absolute;\n  background: var(--canvas--label--color--background);\n  z-index: 1;\n  max-width: calc(100% - var(--spacing--md) - 24px);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n._required_ca2iu_143 ._label_ca2iu_129::after {\n  content: \"*\";\n  color: var(--color--danger);\n}\n._outputLabel_ca2iu_148 {\n  top: 50%;\n  left: var(--spacing--md);\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  transform: translate(0, -50%) scale(var(--canvas-zoom-compensation-factor, 1));\n  transform-origin: center left;\n  font-size: var(--font-size--2xs);\n  color: var(--color--foreground--shade-2);\n}\n._runDataLabel_ca2iu_158 {\n  position: absolute;\n  top: 50%;\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  left: calc(50% * var(--canvas-zoom-compensation-factor, 1));\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  transform: translate(-50%, -50%) scale(var(--canvas-zoom-compensation-factor, 1)) translate(0, -100%);\n  font-size: var(--font-size--xs);\n  color: var(--color--text);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.canvas-node-handle-main-output-enter-active,\n.canvas-node-handle-main-output-leave-active {\n  transform-origin: 0 center;\n  transition-property: transform, opacity;\n  transition-duration: 0.2s;\n  transition-timing-function: ease;\n}\n.canvas-node-handle-main-output-enter-from,\n.canvas-node-handle-main-output-leave-to {\n  transform: scale(0);\n  opacity: 0;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._diamond_pdek7_123 {\n  width: var(--handle--indicator--width);\n  height: var(--handle--indicator--height);\n  background: var(--node-type--supplemental--color);\n  transform: rotate(45deg) scale(0.8);\n}\n._diamond_pdek7_123:hover {\n  background: var(--color--primary);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._handle_1q30k_123 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n._label_1q30k_130 {\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  transform: translate(-50%, 0) scale(var(--canvas-zoom-compensation-factor, 1));\n  font-size: var(--font-size--2xs);\n  color: var(--node-type--supplemental--color);\n  background: var(--canvas--label--color--background);\n  z-index: 1;\n  text-align: center;\n  white-space: nowrap;\n}\n._required_1q30k_144 ._label_1q30k_130::after {\n  content: \"*\";\n  color: var(--color--danger);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.canvas-node-handle-non-main-input-enter-active,\n.canvas-node-handle-non-main-input-leave-active {\n  transform-origin: center 0;\n  transition-property: transform, opacity;\n  transition-duration: 0.2s;\n  transition-timing-function: ease;\n}\n.canvas-node-handle-non-main-input-enter-from,\n.canvas-node-handle-non-main-input-leave-to {\n  transform: scale(0);\n  opacity: 0;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._handle_1argj_123 {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n._label_1argj_130 {\n  position: absolute;\n  top: -20px;\n  left: 50%;\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  transform: translate(-50%, 0) scale(var(--canvas-zoom-compensation-factor, 1));\n  font-size: var(--font-size--2xs);\n  color: var(--node-type--supplemental--color);\n  background: var(--canvas--label--color--background);\n  z-index: 0;\n  white-space: nowrap;\n}\n._required_1argj_143 ._label_1argj_130::after {\n  content: \"*\";\n  color: var(--color--danger);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._handle_1m3z7_123 {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  --handle--indicator--width: calc(16px * var(--canvas-zoom-compensation-factor, 1));\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  --handle--indicator--height: calc(16px * var(--canvas-zoom-compensation-factor, 1));\n  width: var(--handle--indicator--width);\n  height: var(--handle--indicator--height);\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  z-index: 1;\n  background: transparent;\n  border-radius: 0;\n}\n._handle_1m3z7_123._inputs_1m3z7_138._main_1m3z7_138 {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  --handle--indicator--width: calc(8px * var(--canvas-zoom-compensation-factor, 1));\n}\n._renderType_1m3z7_143._top_1m3z7_143 {\n  margin-bottom: calc(-1 * var(--handle--indicator--height));\n  transform: translate(0%, -50%);\n}\n._renderType_1m3z7_143._right_1m3z7_147 {\n  margin-left: calc(-1 * var(--handle--indicator--width));\n  transform: translate(50%, 0%);\n}\n._renderType_1m3z7_143._left_1m3z7_151 {\n  margin-right: calc(-1 * var(--handle--indicator--width));\n  transform: translate(-50%, 0%);\n}\n._renderType_1m3z7_143._bottom_1m3z7_155 {\n  margin-top: calc(-1 * var(--handle--indicator--height));\n  transform: translate(0%, 50%);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_19xnh_123 {\n  z-index: -1;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  right: 100%;\n  top: 0;\n  pointer-events: none;\n}\n._container_19xnh_123 > div {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n._container_19xnh_123 button {\n  margin-right: var(--spacing--sm);\n  opacity: 0;\n  translate: -12px 0;\n  transition: translate 0.1s ease-in, opacity 0.1s ease-in;\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  transform: scale(var(--canvas-zoom-compensation-factor, 1));\n  transform-origin: center right;\n}\n._container_19xnh_123._interactive_19xnh_147._hovered_19xnh_147 button {\n  opacity: 1;\n  translate: 0 0;\n  pointer-events: all;\n}\n._container_19xnh_123._isExperimentalNdvActive_19xnh_152 {\n  height: var(--spacing--2xl);\n}\n._bolt_19xnh_156 {\n  position: absolute;\n  right: 0;\n  color: var(--color--primary);\n  padding: var(--spacing--sm);\n  opacity: 1;\n  translate: 0 0;\n  transition: translate 0.1s ease-in, opacity 0.1s ease-in;\n}\n._container_19xnh_123._interactive_19xnh_147._hovered_19xnh_147 ._bolt_19xnh_156 {\n  translate: -12px 0;\n  opacity: 0;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._canvasNode_1k8iq_123 ._canvasNodeToolbarItems_1k8iq_123 {\n  transition: opacity 0.1s ease-in;\n  opacity: 0;\n}\n._canvasNode_1k8iq_123:hover:not(:has(> ._trigger_1k8iq_127:hover)) ._canvasNodeToolbarItems_1k8iq_123, ._canvasNode_1k8iq_123:focus-within ._canvasNodeToolbarItems_1k8iq_123, ._canvasNode_1k8iq_123._showToolbar_1k8iq_127 ._canvasNodeToolbarItems_1k8iq_123 {\n  opacity: 1;\n}\n._canvasNodeToolbar_1k8iq_123 {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  z-index: 1;\n}\npath[data-v-c74a9681] {\n\tstroke: var(--canvas--read-only-line--color);\n}\n/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._contextMenu_12fz3_123 {\n  position: fixed;\n}\n._activator_12fz3_127 {\n  pointer-events: none;\n  opacity: 0;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._edge_cbk94_123 {\n  transition-property: stroke, opacity;\n  transition-duration: 300ms;\n  transition-timing-function: ease;\n  opacity: 0;\n}\n._edge_cbk94_123._visible_cbk94_129 {\n  opacity: 1;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._iconButton_fx9xi_123 {\n  padding-left: 0;\n  padding-right: 0;\n}\n._iconButton_fx9xi_123 svg {\n  width: 16px;\n  height: 16px;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._canvasEdgeToolbar_1hcsv_123 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: var(--spacing--2xs);\n  pointer-events: all;\n  padding: var(--spacing--2xs);\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  transform: scale(var(--canvas-zoom-compensation-factor, 1));\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n@media (prefers-color-scheme: dark) {\nbody:not([data-theme]) .canvas-edge-toolbar-button {\n    --button--color--background: var(--color--background);\n    --button--color--background--hover: var(--color--background--light-2);\n}\n}\n[data-theme=dark] .canvas-edge-toolbar-button {\n  --button--color--background: var(--color--background);\n  --button--color--background--hover: var(--color--background--light-2);\n}\n.canvas-edge-toolbar-button {\n  border-width: 2px;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._edge_ahl09_123 {\n  transition: stroke 0.3s ease, fill 0.3s ease;\n  stroke: var(--canvas-edge--color, var(--5e8a20b0)) !important;\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  stroke-width: calc(2 * var(--canvas-zoom-compensation-factor, 1)) !important;\n  stroke-linecap: square;\n}\n._edgeLabelWrapper_ahl09_131 {\n  transform: translateY(calc(var(--spacing--xs) * -1));\n  position: absolute;\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  --label-translate-y: 0;\n}\n._edgeLabelWrapper_ahl09_131._straight_ahl09_137 {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  --label-translate-y: -100%;\n}\n._edgeLabel_ahl09_131 {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  transform: scale(var(--canvas-zoom-compensation-factor, 1)) translate(0, var(--label-translate-y));\n  color: var(--color--text);\n  font-size: var(--font-size--xs);\n  background-color: hsla(var(--canvas--color--background--h), var(--canvas--color--background--s), var(--canvas--color--background--l), 0.85);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._canvas_rygeb_123 {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 300ms ease;\n}\n._canvas_rygeb_123._ready_rygeb_129 {\n  opacity: 1;\n}\n._canvas_rygeb_123._isExperimentalNdvActive_rygeb_132 {\n  /* stylelint-disable-next-line @n8n/css-var-naming */\n  --canvas-zoom-compensation-factor: 0.5;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.minimap-enter-active[data-v-726dbe6e],\n.minimap-leave-active[data-v-726dbe6e] {\n  transition: opacity 0.3s ease;\n}\n.minimap-enter-from[data-v-726dbe6e],\n.minimap-leave-to[data-v-726dbe6e] {\n  opacity: 0;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/workflows/canvas/components/elements/buttons/CanvasRunWorkflowButton.vue?vue&type=script&setup=true&lang.ts
        CanvasRunWorkflowButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasRunWorkflowButton",
          props: {
            selectedTriggerNodeName: {},
            triggerNodes: {},
            waitingForWebhook: {
              type: Boolean
            },
            executing: {
              type: Boolean
            },
            disabled: {
              type: Boolean
            },
            hideTooltip: {
              type: Boolean
            },
            label: {},
            size: {},
            includeChatTrigger: {
              type: Boolean
            },
            getNodeType: {
              type: Function
            }
          },
          emits: ["mouseenter", "mouseleave", "execute", "selectTriggerNode"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const props = __props;
            const i18n = useI18n();
            const selectableTriggerNodes = computed(() => props.triggerNodes.filter(node$1 => !node$1.disabled && (props.includeChatTrigger ? true : !isChatNode(node$1))));
            const label$7 = computed(() => {
              if (!props.executing) return props.label ?? i18n.baseText("nodeView.runButtonText.executeWorkflow");
              if (props.waitingForWebhook) return i18n.baseText("nodeView.runButtonText.waitingForTriggerEvent");
              return i18n.baseText("nodeView.runButtonText.executingWorkflow");
            });
            const actions$1 = computed(() => props.triggerNodes.filter(node$1 => props.includeChatTrigger ? true : !isChatNode(node$1)).toSorted((a, b) => {
              const [aX, aY] = a.position;
              const [bX, bY] = b.position;
              return aY === bY ? aX - bX : aY - bY;
            }).map(node$1 => ({
              label: truncateBeforeLast(node$1.name, 50),
              disabled: !!node$1.disabled || props.executing,
              id: node$1.name,
              checked: props.selectedTriggerNodeName === node$1.name
            })));
            const isSplitButton = computed(() => selectableTriggerNodes.value.length > 1 && props.selectedTriggerNodeName !== void 0);
            function getNodeTypeByName(name) {
              const node$1 = props.triggerNodes.find(trigger$2 => trigger$2.name === name);
              if (!node$1) return null;
              return props.getNodeType(node$1.type, node$1.typeVersion);
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([_ctx.$style.component, isSplitButton.value ? _ctx.$style.split : ""])
              }, [createVNode(KeyboardShortcutTooltip_default, {
                label: label$7.value,
                shortcut: {
                  metaKey: true,
                  keys: ["↵"]
                },
                disabled: _ctx.executing || _ctx.hideTooltip
              }, {
                default: withCtx(() => [createVNode(unref(N8nButton_default), {
                  class: normalizeClass(_ctx.$style.button),
                  loading: _ctx.executing,
                  disabled: _ctx.disabled,
                  size: _ctx.size ?? "large",
                  icon: "flask-conical",
                  type: "primary",
                  "data-test-id": "execute-workflow-button",
                  onMouseenter: _cache[0] || (_cache[0] = $event => _ctx.$emit("mouseenter", $event)),
                  onMouseleave: _cache[1] || (_cache[1] = $event => _ctx.$emit("mouseleave", $event)),
                  onClick: _cache[2] || (_cache[2] = $event => emit("execute"))
                }, {
                  default: withCtx(() => [createBaseVNode("span", {
                    class: normalizeClass(_ctx.$style.buttonContent)
                  }, [createTextVNode(toDisplayString(label$7.value) + " ", 1), isSplitButton.value ? (openBlock(), createBlock(unref(N8nText_default), {
                    key: 0,
                    class: normalizeClass(_ctx.$style.subText),
                    bold: false
                  }, {
                    default: withCtx(() => [createVNode(unref(I18nT), {
                      keypath: "nodeView.runButtonText.from",
                      scope: "global"
                    }, {
                      nodeName: withCtx(() => [createVNode(unref(N8nText_default), {
                        bold: "",
                        size: "mini"
                      }, {
                        default: withCtx(() => [createTextVNode(toDisplayString(unref(truncateBeforeLast)(props.selectedTriggerNodeName ?? "", 25)), 1)]),
                        _: 1
                      })]),
                      _: 1
                    })]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("", true)], 2)]),
                  _: 1
                }, 8, ["class", "loading", "disabled", "size"])]),
                _: 1
              }, 8, ["label", "disabled"]), isSplitButton.value ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [createBaseVNode("div", {
                role: "presentation",
                class: normalizeClass(_ctx.$style.divider)
              }, null, 2), createVNode(unref(N8nActionDropdown_default), {
                class: normalizeClass(_ctx.$style.menu),
                items: actions$1.value,
                disabled: _ctx.disabled,
                placement: "top",
                "extra-popper-class": _ctx.$style.menuPopper,
                onSelect: _cache[3] || (_cache[3] = $event => emit("selectTriggerNode", $event))
              }, {
                activator: withCtx(() => [createVNode(unref(N8nButton_default), {
                  type: "primary",
                  "icon-size": "large",
                  disabled: _ctx.disabled,
                  class: normalizeClass(_ctx.$style.chevron),
                  "aria-label": "Select trigger node",
                  icon: "chevron-down"
                }, null, 8, ["disabled", "class"])]),
                menuItem: withCtx(item => [createBaseVNode("div", {
                  class: normalizeClass([_ctx.$style.menuItem, item.disabled ? _ctx.$style.disabled : ""])
                }, [createVNode(NodeIcon_default, {
                  class: normalizeClass(_ctx.$style.menuIcon),
                  size: 16,
                  "node-type": getNodeTypeByName(item.id)
                }, null, 8, ["class", "node-type"]), createBaseVNode("span", null, [createVNode(unref(I18nT), {
                  keypath: "nodeView.runButtonText.from",
                  scope: "global"
                }, {
                  nodeName: withCtx(() => [createVNode(unref(N8nText_default), {
                    bold: "",
                    size: "small"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
                    _: 2
                  }, 1024)]),
                  _: 2
                }, 1024)])], 2)]),
                _: 1
              }, 8, ["class", "items", "disabled", "extra-popper-class"])], 64)) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/buttons/CanvasRunWorkflowButton.vue?vue&type=style&index=0&lang.module.scss
        component$1 = "_component_1dst5_123";
        split = "_split_1dst5_129";
        button$2 = "_button_1dst5_129";
        divider = "_divider_1dst5_137";
        chevron = "_chevron_1dst5_142";
        menu = "_menu_1dst5_148";
        menuPopper = "_menuPopper_1dst5_152";
        menuItem = "_menuItem_1dst5_156";
        disabled$3 = "_disabled_1dst5_162";
        menuIcon = "_menuIcon_1dst5_162";
        buttonContent = "_buttonContent_1dst5_166";
        subText = "_subText_1dst5_173";
        CanvasRunWorkflowButton_vue_vue_type_style_index_0_lang_module_default = {
          component: component$1,
          split,
          button: button$2,
          divider,
          chevron,
          menu,
          menuPopper,
          menuItem,
          disabled: disabled$3,
          menuIcon,
          buttonContent,
          subText
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/buttons/CanvasRunWorkflowButton.vue
        cssModules$29 = {
          "$style": CanvasRunWorkflowButton_vue_vue_type_style_index_0_lang_module_default
        };
        _export("u", CanvasRunWorkflowButton_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasRunWorkflowButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$29]])); //#endregion
        //#region src/app/composables/useWorkflowExtraction.ts
        import_isEqual$1 = /* @__PURE__ */__toESM(require_isEqual());
        CANVAS_HISTORY_OPTIONS = {
          trackBulk: false,
          trackHistory: true
        };
        _hoisted_1$17 = {
          key: 0
        };
        _hoisted_2$7 = ["textContent"];
        _hoisted_3$9 = {
          key: 6
        };
        _hoisted_4$2 = {
          key: 8
        };
        CanvasNodeStatusIcons_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasNodeStatusIcons",
          props: {
            size: {
              default: "large"
            },
            spinnerScrim: {
              type: Boolean,
              default: false
            },
            spinnerLayout: {
              default: "absolute"
            }
          },
          setup(__props) {
            const nodeHelpers = useNodeHelpers();
            const i18n = useI18n();
            const $style = useCssModule();
            const {
              hasPinnedData,
              executionErrors,
              validationErrors,
              hasExecutionErrors,
              hasValidationErrors,
              executionStatus,
              executionWaiting,
              executionWaitingForNext,
              executionRunning,
              hasRunData,
              runDataIterations,
              isDisabled,
              render: render$5,
              isNotInstalledCommunityNode
            } = useCanvasNode();
            const route = useRoute();
            const {
              isExecuting
            } = useCanvas();
            const hideNodeIssues = computed(() => false);
            const isDemoRoute = computed(() => route.name === VIEWS.DEMO);
            const dirtiness = computed(() => render$5.value.type === CanvasNodeRenderType.Default ? render$5.value.options.dirtiness : void 0);
            const isNodeExecuting = computed(() => {
              if (!isExecuting.value) return false;
              return executionRunning.value || executionWaitingForNext.value || executionStatus.value === "running";
            });
            const commonClasses = computed(() => [$style.status, __props.spinnerScrim ? $style.spinnerScrim : "", __props.spinnerLayout === "absolute" ? $style.absoluteSpinner : ""]);
            return (_ctx, _cache) => {
              return unref(executionWaiting) || unref(executionStatus) === "waiting" ? (openBlock(), createElementBlock("div", _hoisted_1$17, [createBaseVNode("div", {
                class: normalizeClass([...commonClasses.value, unref($style).waiting])
              }, [createVNode(unref(N8nTooltip_default), {
                placement: "bottom"
              }, {
                content: withCtx(() => [createBaseVNode("div", {
                  textContent: toDisplayString(unref(executionWaiting))
                }, null, 8, _hoisted_2$7)]),
                default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                  icon: "clock",
                  size: _ctx.size
                }, null, 8, ["size"])]),
                _: 1
              })], 2)])) : unref(isNotInstalledCommunityNode) && !isDemoRoute.value ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass([...commonClasses.value, unref($style).issues]),
                "data-test-id": "node-not-installed"
              }, [createVNode(unref(N8nTooltip_default), {
                "show-after": 500,
                placement: "bottom"
              }, {
                content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("node.install-to-use")), 1)]),
                default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                  icon: "hard-drive-download",
                  size: _ctx.size
                }, null, 8, ["size"])]),
                _: 1
              })], 2)) : isNodeExecuting.value ? (openBlock(), createElementBlock("div", {
                key: 2,
                "data-test-id": "canvas-node-status-running",
                class: normalizeClass([...commonClasses.value, unref($style).running])
              }, [createVNode(unref(N8nIcon_default), {
                icon: "refresh-cw",
                spin: ""
              })], 2)) : unref(isDisabled) ? (openBlock(), createElementBlock("div", {
                key: 3,
                class: normalizeClass([...commonClasses.value, unref($style).disabled])
              }, [createVNode(unref(N8nIcon_default), {
                icon: "power",
                size: _ctx.size
              }, null, 8, ["size"])], 2)) : unref(hasExecutionErrors) && !hideNodeIssues.value ? (openBlock(), createElementBlock("div", {
                key: 4,
                class: normalizeClass([...commonClasses.value, unref($style).issues]),
                "data-test-id": "node-issues"
              }, [createVNode(unref(N8nTooltip_default), {
                "show-after": 500,
                placement: "bottom"
              }, {
                content: withCtx(() => [createVNode(TitledList_default, {
                  title: `${unref(i18n).baseText("node.issues")}:`,
                  items: unref(executionErrors)
                }, null, 8, ["title", "items"])]),
                default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                  icon: "node-execution-error",
                  size: _ctx.size
                }, null, 8, ["size"])]),
                _: 1
              })], 2)) : unref(hasValidationErrors) && !hideNodeIssues.value ? (openBlock(), createElementBlock("div", {
                key: 5,
                class: normalizeClass([...commonClasses.value, unref($style).issues]),
                "data-test-id": "node-issues"
              }, [createVNode(unref(N8nTooltip_default), {
                "show-after": 500,
                placement: "bottom"
              }, {
                content: withCtx(() => [createVNode(TitledList_default, {
                  title: `${unref(i18n).baseText("node.issues")}:`,
                  items: unref(validationErrors)
                }, null, 8, ["title", "items"])]),
                default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                  icon: "node-validation-error",
                  size: _ctx.size
                }, null, 8, ["size"])]),
                _: 1
              })], 2)) : unref(executionStatus) === "unknown" ? (openBlock(), createElementBlock("div", _hoisted_3$9)) : unref(hasPinnedData) && !unref(nodeHelpers).isProductionExecutionPreview.value ? (openBlock(), createElementBlock("div", {
                key: 7,
                "data-test-id": "canvas-node-status-pinned",
                class: normalizeClass([...commonClasses.value, unref($style).pinnedData])
              }, [createVNode(unref(N8nIcon_default), {
                icon: "node-pin",
                size: _ctx.size
              }, null, 8, ["size"])], 2)) : dirtiness.value !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_4$2, [createVNode(unref(N8nTooltip_default), {
                "show-after": 500,
                placement: "bottom"
              }, {
                content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(dirtiness.value === unref(CanvasNodeDirtiness).PARAMETERS_UPDATED ? "node.dirty" : "node.subjectToChange")), 1)]),
                default: withCtx(() => [createBaseVNode("div", {
                  "data-test-id": "canvas-node-status-warning",
                  class: normalizeClass([...commonClasses.value, unref($style).warning])
                }, [createVNode(unref(N8nIcon_default), {
                  icon: "node-dirty",
                  size: _ctx.size
                }, null, 8, ["size"]), unref(runDataIterations) > 1 ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(unref($style).count)
                }, toDisplayString(unref(runDataIterations)), 3)) : createCommentVNode("", true)], 2)]),
                _: 1
              })])) : unref(hasRunData) && unref(executionStatus) === "success" ? (openBlock(), createElementBlock("div", {
                key: 9,
                "data-test-id": "canvas-node-status-success",
                class: normalizeClass([...commonClasses.value, unref($style).runData])
              }, [createVNode(unref(N8nIcon_default), {
                icon: "node-success",
                size: _ctx.size
              }, null, 8, ["size"]), unref(runDataIterations) > 1 ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(unref($style).count)
              }, toDisplayString(unref(runDataIterations)), 3)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/parts/CanvasNodeStatusIcons.vue?vue&type=style&index=0&lang.module.scss
        status = "_status_ncm5n_123";
        runData = "_runData_ncm5n_130";
        waiting$1 = "_waiting_ncm5n_134";
        pinnedData = "_pinnedData_ncm5n_138";
        running$1 = "_running_ncm5n_142";
        absoluteSpinner = "_absoluteSpinner_ncm5n_145";
        spinnerScrim = "_spinnerScrim_ncm5n_158";
        issues = "_issues_ncm5n_164";
        count = "_count_ncm5n_169";
        warning$2 = "_warning_ncm5n_173";
        disabled$2 = "_disabled_ncm5n_177";
        CanvasNodeStatusIcons_vue_vue_type_style_index_0_lang_module_default = {
          status,
          runData,
          waiting: waiting$1,
          pinnedData,
          running: running$1,
          absoluteSpinner,
          spinnerScrim,
          issues,
          count,
          warning: warning$2,
          disabled: disabled$2
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/parts/CanvasNodeStatusIcons.vue
        cssModules$28 = {
          "$style": CanvasNodeStatusIcons_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasNodeStatusIcons_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasNodeStatusIcons_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$28]]); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/toolbar/CanvasNodeStickyColorSelector.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$16 = ["title"];
        _hoisted_2$6 = ["onClick"];
        CanvasNodeStickyColorSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasNodeStickyColorSelector",
          props: {
            "visible": {
              type: Boolean
            },
            "visibleModifiers": {}
          },
          emits: /* @__PURE__ */mergeModels(["update"], ["update:visible"]),
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const i18n = useI18n();
            const {
              render: render$5,
              eventBus
            } = useCanvasNode();
            const renderOptions = computed(() => render$5.value.options);
            const autoHideTimeout = ref(null);
            const colors = computed(() => Array.from({
              length: 7
            }).map((_, index) => index + 1));
            const isPopoverVisible = useModel(__props, "visible");
            function hidePopover() {
              isPopoverVisible.value = false;
            }
            function showPopover() {
              isPopoverVisible.value = true;
            }
            function changeColor(index) {
              emit("update", index);
              hidePopover();
            }
            function onMouseEnter() {
              if (autoHideTimeout.value) {
                clearTimeout(autoHideTimeout.value);
                autoHideTimeout.value = null;
              }
            }
            function onMouseLeave() {
              autoHideTimeout.value = setTimeout(() => {
                hidePopover();
              }, 1e3);
            }
            onMounted(() => {
              eventBus.value?.on("update:sticky:color", showPopover);
            });
            onBeforeUnmount(() => {
              eventBus.value?.off("update:sticky:color", showPopover);
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nPopover_default), {
                visible: isPopoverVisible.value,
                "onUpdate:visible": _cache[1] || (_cache[1] = $event => isPopoverVisible.value = $event),
                effect: "dark",
                trigger: "click",
                placement: "top",
                "popper-class": _ctx.$style.popover,
                "popper-style": {
                  width: "208px"
                },
                teleported: true,
                onBeforeEnter: onMouseEnter,
                onAfterLeave: onMouseLeave
              }, {
                reference: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.option),
                  "data-test-id": "change-sticky-color",
                  title: unref(i18n).baseText("node.changeColor"),
                  onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
                }, [createVNode(unref(N8nIcon_default), {
                  size: "small",
                  icon: "palette"
                })], 10, _hoisted_1$16)]),
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.content)
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(colors.value, color$2 => {
                  return openBlock(), createElementBlock("div", {
                    key: color$2,
                    "data-test-id": "color",
                    class: normalizeClass([_ctx.$style.color, _ctx.$style[`sticky-color-${color$2}`], renderOptions.value.color === color$2 ? _ctx.$style.selected : ""]),
                    onClick: $event => changeColor(color$2)
                  }, null, 10, _hoisted_2$6);
                }), 128))], 2)]),
                _: 1
              }, 8, ["visible", "popper-class"]);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/toolbar/CanvasNodeStickyColorSelector.vue?vue&type=style&index=0&lang.module.scss
        popover = "_popover_1wxso_123";
        content = "_content_1wxso_129";
        color$1 = "_color_1wxso_136";
        selected$2 = "_selected_1wxso_148";
        option$1 = "_option_1wxso_173";
        CanvasNodeStickyColorSelector_vue_vue_type_style_index_0_lang_module_default = {
          popover,
          content,
          color: color$1,
          selected: selected$2,
          "sticky-color-1": "_sticky-color-1_1wxso_151",
          "sticky-color-2": "_sticky-color-2_1wxso_154",
          "sticky-color-3": "_sticky-color-3_1wxso_157",
          "sticky-color-4": "_sticky-color-4_1wxso_160",
          "sticky-color-5": "_sticky-color-5_1wxso_163",
          "sticky-color-6": "_sticky-color-6_1wxso_166",
          "sticky-color-7": "_sticky-color-7_1wxso_169",
          option: option$1
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/toolbar/CanvasNodeStickyColorSelector.vue
        cssModules$27 = {
          "$style": CanvasNodeStickyColorSelector_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasNodeStickyColorSelector_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasNodeStickyColorSelector_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$27]]); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/CanvasNodeToolbar.vue?vue&type=script&setup=true&lang.ts
        CanvasNodeToolbar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasNodeToolbar",
          props: {
            readOnly: {
              type: Boolean
            },
            showStatusIcons: {
              type: Boolean
            },
            itemsClass: {}
          },
          emits: ["delete", "toggle", "run", "update", "open:contextmenu", "focus"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const props = __props;
            const $style = useCssModule();
            const i18n = useI18n();
            const {
              isExecuting,
              isExperimentalNdvActive: isExperimentalNdvActive$3
            } = useCanvas();
            const {
              isDisabled,
              render: render$5,
              name
            } = useCanvasNode();
            const workflowsStore = useWorkflowsStore();
            const nodeTypesStore = useNodeTypesStore();
            const experimentalNdvStore = useExperimentalNdvStore();
            const node$1 = computed(() => name.value ? workflowsStore.getNodeByName(name.value) : null);
            const isToolNode = computed(() => !!node$1.value && nodeTypesStore.isToolNode(node$1.value.type));
            const nodeDisabledTitle = computed(() => {
              return isDisabled.value ? i18n.baseText("node.enable") : i18n.baseText("node.disable");
            });
            const isStickyColorSelectorOpen = ref(false);
            const isHovered = ref(false);
            const classes = computed(() => ({
              [$style.canvasNodeToolbar]: true,
              [$style.readOnly]: props.readOnly,
              [$style.forceVisible]: isHovered.value || isStickyColorSelectorOpen.value,
              [$style.isExperimentalNdvActive]: isExperimentalNdvActive$3.value
            }));
            const isExecuteNodeVisible = computed(() => {
              return !props.readOnly && render$5.value.type === CanvasNodeRenderType.Default && "configuration" in render$5.value.options && (!render$5.value.options.configuration || isToolNode.value);
            });
            const isDisableNodeVisible = computed(() => {
              return !props.readOnly && render$5.value.type === CanvasNodeRenderType.Default;
            });
            const isDeleteNodeVisible = computed(() => !props.readOnly);
            const isFocusNodeVisible = computed(() => experimentalNdvStore.isZoomedViewEnabled);
            const isStickyNoteChangeColorVisible = computed(() => !props.readOnly && render$5.value.type === CanvasNodeRenderType.StickyNote);
            function executeNode() {
              emit("run");
            }
            function onToggleNode() {
              emit("toggle");
            }
            function onDeleteNode() {
              emit("delete");
            }
            function onChangeStickyColor(color$2) {
              emit("update", {
                color: color$2
              });
            }
            function onOpenContextMenu(event) {
              emit("open:contextmenu", event);
            }
            function onMouseEnter() {
              isHovered.value = true;
            }
            function onMouseLeave() {
              isHovered.value = false;
            }
            function onFocusNode() {
              if (node$1.value) emit("focus", node$1.value.id);
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                "data-test-id": "canvas-node-toolbar",
                class: normalizeClass(classes.value),
                onMouseenter: onMouseEnter,
                onMouseleave: onMouseLeave,
                onMousedown: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"])),
                onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
              }, [createBaseVNode("div", {
                class: normalizeClass([unref($style).canvasNodeToolbarItems, _ctx.itemsClass])
              }, [isExecuteNodeVisible.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 0,
                placement: "top",
                disabled: !unref(isDisabled),
                content: unref(i18n).baseText("ndv.execute.deactivated")
              }, {
                default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                  "data-test-id": "execute-node-button",
                  type: "tertiary",
                  text: "",
                  size: "small",
                  icon: "node-play",
                  disabled: unref(isExecuting) || unref(isDisabled),
                  title: unref(i18n).baseText("node.testStep"),
                  onClick: withModifiers(executeNode, ["stop"])
                }, null, 8, ["disabled", "title"])]),
                _: 1
              }, 8, ["disabled", "content"])) : createCommentVNode("", true), isDisableNodeVisible.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                key: 1,
                "data-test-id": "disable-node-button",
                type: "tertiary",
                text: "",
                size: "small",
                icon: "node-power",
                title: nodeDisabledTitle.value,
                onClick: withModifiers(onToggleNode, ["stop"])
              }, null, 8, ["title"])) : createCommentVNode("", true), isDeleteNodeVisible.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                key: 2,
                "data-test-id": "delete-node-button",
                type: "tertiary",
                size: "small",
                text: "",
                icon: "node-trash",
                title: unref(i18n).baseText("node.delete"),
                onClick: withModifiers(onDeleteNode, ["stop"])
              }, null, 8, ["title"])) : createCommentVNode("", true), isFocusNodeVisible.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                key: 3,
                type: "tertiary",
                size: "small",
                text: "",
                icon: "crosshair",
                onClick: withModifiers(onFocusNode, ["stop"])
              })) : createCommentVNode("", true), isStickyNoteChangeColorVisible.value ? (openBlock(), createBlock(CanvasNodeStickyColorSelector_default, {
                key: 4,
                visible: isStickyColorSelectorOpen.value,
                "onUpdate:visible": _cache[0] || (_cache[0] = $event => isStickyColorSelectorOpen.value = $event),
                onUpdate: onChangeStickyColor
              }, null, 8, ["visible"])) : createCommentVNode("", true), createVNode(unref(N8nIconButton_default), {
                "data-test-id": "overflow-node-button",
                type: "tertiary",
                size: "small",
                text: "",
                icon: "node-ellipsis",
                onClick: withModifiers(onOpenContextMenu, ["stop"])
              })], 2), _ctx.showStatusIcons ? (openBlock(), createBlock(CanvasNodeStatusIcons_default, {
                key: 0,
                class: normalizeClass(unref($style).statusIcons),
                "spinner-layout": "static"
              }, null, 8, ["class"])) : createCommentVNode("", true)], 34);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/CanvasNodeToolbar.vue?vue&type=style&index=0&lang.module.scss
        canvasNodeToolbar$1 = "_canvasNodeToolbar_snt78_123";
        isExperimentalNdvActive$2 = "_isExperimentalNdvActive_snt78_130";
        canvasNodeToolbarItems$1 = "_canvasNodeToolbarItems_snt78_139";
        forceVisible = "_forceVisible_snt78_150";
        statusIcons$1 = "_statusIcons_snt78_154";
        CanvasNodeToolbar_vue_vue_type_style_index_0_lang_module_default = {
          canvasNodeToolbar: canvasNodeToolbar$1,
          isExperimentalNdvActive: isExperimentalNdvActive$2,
          canvasNodeToolbarItems: canvasNodeToolbarItems$1,
          forceVisible,
          statusIcons: statusIcons$1
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/CanvasNodeToolbar.vue
        cssModules$26 = {
          "$style": CanvasNodeToolbar_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasNodeToolbar_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasNodeToolbar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$26]]);
        _hoisted_1$15 = {
          "data-test-id": "canvas-node-status-always-output-data"
        };
        _hoisted_2$5 = {
          "data-test-id": "canvas-node-status-execute-once"
        };
        _hoisted_3$8 = {
          "data-test-id": "canvas-node-status-retry-on-fail"
        };
        _hoisted_4$1 = {
          "data-test-id": "canvas-node-status-continue-on-error"
        };
        size = "medium";
        CanvasNodeSettingsIcons_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasNodeSettingsIcons",
          setup(__props) {
            const {
              name
            } = useCanvasNode();
            const i18n = useI18n();
            const workflowsStore = useWorkflowsStore();
            const node$1 = computed(() => workflowsStore.workflowObject.getNode(name.value));
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.settingsIcons)
              }, [node$1.value?.alwaysOutputData ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 0
              }, {
                content: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.tooltipHeader)
                }, [createVNode(unref(N8nIcon_default), {
                  icon: "always-output-data",
                  size
                }), createBaseVNode("strong", {
                  class: normalizeClass(_ctx.$style.tooltipTitle)
                }, toDisplayString(unref(i18n).baseText("nodeSettings.alwaysOutputData.displayName")), 3)], 2), createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("node.settings.alwaysOutputData")), 1)]),
                default: withCtx(() => [createBaseVNode("div", _hoisted_1$15, [createVNode(unref(N8nIcon_default), {
                  icon: "always-output-data",
                  size
                })])]),
                _: 1
              })) : createCommentVNode("", true), node$1.value?.executeOnce ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 1
              }, {
                content: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.tooltipHeader)
                }, [createVNode(unref(N8nIcon_default), {
                  icon: "execute-once",
                  size
                }), createBaseVNode("strong", {
                  class: normalizeClass(_ctx.$style.tooltipTitle)
                }, toDisplayString(unref(i18n).baseText("nodeSettings.executeOnce.displayName")), 3)], 2), createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("node.settings.executeOnce")), 1)]),
                default: withCtx(() => [createBaseVNode("div", _hoisted_2$5, [createVNode(unref(N8nIcon_default), {
                  icon: "execute-once",
                  size
                })])]),
                _: 1
              })) : createCommentVNode("", true), node$1.value?.retryOnFail ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 2
              }, {
                content: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.tooltipHeader)
                }, [createVNode(unref(N8nIcon_default), {
                  icon: "retry-on-fail",
                  size
                }), createBaseVNode("strong", {
                  class: normalizeClass(_ctx.$style.tooltipTitle)
                }, toDisplayString(unref(i18n).baseText("nodeSettings.retryOnFail.displayName")), 3)], 2), createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("node.settings.retriesOnFailure")), 1)]),
                default: withCtx(() => [createBaseVNode("div", _hoisted_3$8, [createVNode(unref(N8nIcon_default), {
                  icon: "retry-on-fail",
                  size
                })])]),
                _: 1
              })) : createCommentVNode("", true), node$1.value?.onError === "continueRegularOutput" || node$1.value?.onError === "continueErrorOutput" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 3
              }, {
                content: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.tooltipHeader)
                }, [createVNode(unref(N8nIcon_default), {
                  icon: "continue-on-error",
                  size
                }), createBaseVNode("strong", {
                  class: normalizeClass(_ctx.$style.tooltipTitle)
                }, toDisplayString(unref(i18n).baseText("node.settings.continuesOnError.title")), 3)], 2), createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("node.settings.continuesOnError")), 1)]),
                default: withCtx(() => [createBaseVNode("div", _hoisted_4$1, [createVNode(unref(N8nIcon_default), {
                  icon: "continue-on-error",
                  size
                })])]),
                _: 1
              })) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/parts/CanvasNodeSettingsIcons.vue?vue&type=style&index=0&lang.module.scss
        settingsIcons = "_settingsIcons_4xb9m_123";
        tooltipHeader = "_tooltipHeader_4xb9m_131";
        tooltipTitle = "_tooltipTitle_4xb9m_136";
        CanvasNodeSettingsIcons_vue_vue_type_style_index_0_lang_module_default = {
          settingsIcons,
          tooltipHeader,
          tooltipTitle
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/parts/CanvasNodeSettingsIcons.vue
        cssModules$25 = {
          "$style": CanvasNodeSettingsIcons_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasNodeSettingsIcons_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasNodeSettingsIcons_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$25]]); //#endregion
        //#region src/features/workflows/canvas/experimental/components/ExperimentalCanvasNodeSettings.vue?vue&type=script&setup=true&lang.ts
        ExperimentalCanvasNodeSettings_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ExperimentalCanvasNodeSettings",
          props: {
            nodeId: {},
            isReadOnly: {
              type: Boolean
            },
            subTitle: {},
            isEmbeddedInCanvas: {
              type: Boolean
            }
          },
          emits: ["dblclickHeader"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const workflowsStore = useWorkflowsStore();
            const uiStore = useUIStore();
            const {
              renameNode
            } = useCanvasOperations();
            const nodeHelpers = useNodeHelpers();
            const ndvStore = useNDVStore();
            const activeNode = computed(() => workflowsStore.getNodeById(__props.nodeId));
            const foreignCredentials = computed(() => nodeHelpers.getForeignCredentialsIfSharingEnabled(activeNode.value?.credentials));
            const isWorkflowRunning = computed(() => uiStore.isActionActive.workflowRunning);
            const isExecutionWaitingForWebhook = computed(() => workflowsStore.executionWaitingForWebhook);
            const blockUi = computed(() => isWorkflowRunning.value || isExecutionWaitingForWebhook.value);
            function handleValueChanged(parameterData) {
              if (parameterData.name === "name" && parameterData.oldValue) renameNode(parameterData.oldValue, parameterData.value);
            }
            function handleCaptureWheelEvent(event) {
              if (event.ctrlKey) return;
              if (event.currentTarget instanceof HTMLElement && event.currentTarget.scrollHeight <= event.currentTarget.offsetHeight) return;
              if (Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;
              event.stopImmediatePropagation();
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(NodeSettings_default, {
                dragging: false,
                "active-node": activeNode.value,
                "push-ref": unref(ndvStore).pushRef,
                "foreign-credentials": foreignCredentials.value,
                "read-only": _ctx.isReadOnly,
                "block-u-i": blockUi.value,
                executable: !_ctx.isReadOnly,
                "is-embedded-in-canvas": _ctx.isEmbeddedInCanvas,
                "sub-title": _ctx.subTitle,
                "extra-tabs-class-name": "nodrag",
                "extra-parameter-wrapper-class-name": "nodrag",
                "is-ndv-v2": "",
                "hide-execute": "",
                "hide-docs": false,
                "hide-sub-connections": "",
                onValueChanged: handleValueChanged,
                onCaptureWheelBody: handleCaptureWheelEvent,
                onDblclickHeader: _cache[0] || (_cache[0] = $event => emit("dblclickHeader", $event))
              }, {
                actions: withCtx(() => [renderSlot(_ctx.$slots, "actions")]),
                _: 3
              }, 8, ["active-node", "push-ref", "foreign-credentials", "read-only", "block-u-i", "executable", "is-embedded-in-canvas", "sub-title"]);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/experimental/components/ExperimentalCanvasNodeSettings.vue
        _export("c", ExperimentalCanvasNodeSettings_default = ExperimentalCanvasNodeSettings_vue_vue_type_script_setup_true_lang_default);
        ExperimentalEmbeddedNdvActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ExperimentalEmbeddedNdvActions",
          props: {
            isExpanded: {
              type: Boolean
            }
          },
          emits: ["openNdv", "toggleExpand"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.actions)
              }, [createVNode(unref(N8nIconButton_default), {
                icon: "expand",
                type: "secondary",
                text: "",
                size: "mini",
                "icon-size": "small",
                "aria-label": "Open...",
                onClick: _cache[0] || (_cache[0] = withModifiers($event => emit("openNdv"), ["stop"]))
              }), createVNode(unref(N8nIconButton_default), {
                icon: _ctx.isExpanded ? "chevron-down" : "chevron-up",
                type: "secondary",
                text: "",
                size: "mini",
                "icon-size": "medium",
                "aria-label": "Toggle expand",
                onClick: _cache[1] || (_cache[1] = withModifiers($event => emit("toggleExpand"), ["stop"]))
              }, null, 8, ["icon"])], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/experimental/components/ExperimentalEmbeddedNdvActions.vue?vue&type=style&index=0&lang.module.scss
        actions = "_actions_1cmje_123";
        ExperimentalEmbeddedNdvActions_vue_vue_type_style_index_0_lang_module_default = {
          actions
        }; //#endregion
        //#region src/features/workflows/canvas/experimental/components/ExperimentalEmbeddedNdvActions.vue
        cssModules$24 = {
          "$style": ExperimentalEmbeddedNdvActions_vue_vue_type_style_index_0_lang_module_default
        };
        ExperimentalEmbeddedNdvActions_default = /* @__PURE__ */__plugin_vue_export_helper_default(ExperimentalEmbeddedNdvActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$24]]);
        ExperimentalEmbeddedNodeDetails_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ExperimentalEmbeddedNodeDetails",
          props: {
            nodeId: {},
            isReadOnly: {
              type: Boolean
            }
          },
          setup(__props) {
            const i18n = useI18n();
            const ndvStore = useNDVStore();
            const experimentalNdvStore = useExperimentalNdvStore();
            const isExpanded = computed(() => !experimentalNdvStore.collapsedNodes[__props.nodeId]);
            const nodeTypesStore = useNodeTypesStore();
            const workflowsStore = useWorkflowsStore();
            useTelemetryContext({
              view_shown: "zoomed_view"
            });
            const node$1 = computed(() => workflowsStore.getNodeById(__props.nodeId) ?? null);
            const nodeType = computed(() => {
              if (node$1.value) return nodeTypesStore.getNodeType(node$1.value.type, node$1.value.typeVersion);
              return null;
            });
            const vf = useVueFlow();
            const {
              isPaneMoving
            } = useCanvas();
            const isVisible = computed(() => vf.isNodeIntersecting({
              id: __props.nodeId
            }, {
              x: -vf.viewport.value.x / vf.viewport.value.zoom,
              y: -vf.viewport.value.y / vf.viewport.value.zoom,
              width: vf.dimensions.value.width / vf.viewport.value.zoom,
              height: vf.dimensions.value.height / vf.viewport.value.zoom
            }));
            const isOnceVisible = ref(isVisible.value);
            const subTitle = computed(() => node$1.value && nodeType.value ? getNodeSubTitleText(node$1.value, nodeType.value, !isExpanded.value, i18n) : void 0);
            const maxHeightOnFocus = computed(() => vf.dimensions.value.height * .8);
            const expressionResolveCtx = useExpressionResolveCtx(node$1);
            function handleToggleExpand() {
              experimentalNdvStore.setNodeExpanded(__props.nodeId);
            }
            function handleOpenNdv() {
              if (node$1.value) ndvStore.setActiveNodeName(node$1.value.name, "canvas_zoomed_view");
            }
            provide(ExpressionLocalResolveContextSymbol, expressionResolveCtx);
            watchOnce(isVisible, visible$1 => {
              isOnceVisible.value = isOnceVisible.value || visible$1;
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([_ctx.$style.component, isExpanded.value ? _ctx.$style.expanded : _ctx.$style.collapsed, node$1.value?.disabled ? _ctx.$style.disabled : ""]),
                style: normalizeStyle({
                  "--input--max-height--focus": `${maxHeightOnFocus.value / unref(experimentalNdvStore).maxCanvasZoom}px`,
                  pointerEvents: unref(isPaneMoving) ? "none" : "auto"
                })
              }, [!node$1.value || !isOnceVisible.value ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [], 64)) : isExpanded.value ? (openBlock(), createBlock(ExperimentalCanvasNodeSettings_default, {
                key: 1,
                tabindex: "-1",
                "node-id": _ctx.nodeId,
                class: normalizeClass(_ctx.$style.settingsView),
                "is-read-only": _ctx.isReadOnly,
                "sub-title": subTitle.value,
                "input-node-name": unref(expressionResolveCtx)?.inputNode?.name,
                "is-embedded-in-canvas": "",
                onDblclickHeader: handleOpenNdv
              }, {
                actions: withCtx(() => [createVNode(ExperimentalEmbeddedNdvActions_default, {
                  "is-expanded": isExpanded.value,
                  onOpenNdv: handleOpenNdv,
                  onToggleExpand: handleToggleExpand
                }, null, 8, ["is-expanded"])]),
                _: 1
              }, 8, ["node-id", "class", "is-read-only", "sub-title", "input-node-name"])) : (openBlock(), createElementBlock("div", {
                key: 2,
                role: "button",
                class: normalizeClass(_ctx.$style.collapsedContent),
                onClick: handleToggleExpand
              }, [createVNode(NodeIcon_default, {
                "node-type": nodeType.value,
                size: 18
              }, null, 8, ["node-type"]), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.collapsedNodeName)
              }, [createVNode(unref(N8nText_default), {
                bold: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(node$1.value.name), 1)]),
                _: 1
              }), createVNode(unref(N8nText_default), {
                bold: "",
                size: "small",
                color: "text-light"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(subTitle.value), 1)]),
                _: 1
              })], 2), createVNode(ExperimentalEmbeddedNdvActions_default, {
                "is-expanded": isExpanded.value,
                onOpenNdv: handleOpenNdv,
                onToggleExpand: handleToggleExpand
              }, null, 8, ["is-expanded"])], 2))], 6);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/experimental/components/ExperimentalEmbeddedNodeDetails.vue?vue&type=style&index=0&lang.module.scss
        component = "_component_hvjba_123";
        expanded = "_expanded_hvjba_136";
        collapsed = "_collapsed_hvjba_146";
        collapsedContent = "_collapsedContent_hvjba_158";
        settingsView = "_settingsView_hvjba_159";
        disabled$1 = "_disabled_hvjba_181";
        collapsedNodeName = "_collapsedNodeName_hvjba_191";
        ExperimentalEmbeddedNodeDetails_vue_vue_type_style_index_0_lang_module_default = {
          component,
          expanded,
          collapsed,
          collapsedContent,
          settingsView,
          disabled: disabled$1,
          collapsedNodeName
        }; //#endregion
        //#region src/features/workflows/canvas/experimental/components/ExperimentalEmbeddedNodeDetails.vue
        cssModules$23 = {
          "$style": ExperimentalEmbeddedNodeDetails_vue_vue_type_style_index_0_lang_module_default
        };
        ExperimentalEmbeddedNodeDetails_default = /* @__PURE__ */__plugin_vue_export_helper_default(ExperimentalEmbeddedNodeDetails_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$23]]); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/parts/CanvasNodeTooltip.vue?vue&type=script&setup=true&lang.ts
        CanvasNodeTooltip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasNodeTooltip",
          props: {
            visible: {
              type: Boolean
            }
          },
          setup(__props) {
            const {
              render: render$5
            } = useCanvasNode();
            const renderOptions = computed(() => render$5.value.options);
            const popperOptions = {
              modifiers: [{
                name: "flip",
                enabled: false
              }]
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nTooltip_default), {
                placement: "top",
                "show-after": 500,
                visible: true,
                teleported: false,
                "popper-class": _ctx.$style.popper,
                "popper-options": popperOptions
              }, {
                content: withCtx(() => [createTextVNode(toDisplayString(renderOptions.value.tooltip), 1)]),
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.tooltipTrigger)
                }, null, 2)]),
                _: 1
              }, 8, ["popper-class"]);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/parts/CanvasNodeTooltip.vue?vue&type=style&index=0&lang.module.scss
        tooltipTrigger = "_tooltipTrigger_dauyi_123";
        popper = "_popper_dauyi_131";
        CanvasNodeTooltip_vue_vue_type_style_index_0_lang_module_default = {
          tooltipTrigger,
          popper
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/parts/CanvasNodeTooltip.vue
        cssModules$22 = {
          "$style": CanvasNodeTooltip_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasNodeTooltip_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasNodeTooltip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$22]]); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/parts/CanvasNodeDisabledStrikeThrough.vue?vue&type=script&setup=true&lang.ts
        CanvasNodeDisabledStrikeThrough_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasNodeDisabledStrikeThrough",
          setup(__props) {
            const $style = useCssModule();
            const {
              hasRunData,
              render: render$5
            } = useCanvasNode();
            const classes = computed(() => {
              return {
                [$style.disabledStrikeThrough]: true,
                [$style.success]: hasRunData.value,
                [$style.warning]: render$5.value.type === CanvasNodeRenderType.Default && render$5.value.options.dirtiness !== void 0
              };
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(classes.value)
              }, null, 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/parts/CanvasNodeDisabledStrikeThrough.vue?vue&type=style&index=0&lang.module.scss
        disabledStrikeThrough = "_disabledStrikeThrough_1byso_123";
        success$2 = "_success_1byso_132";
        warning$1 = "_warning_1byso_136";
        CanvasNodeDisabledStrikeThrough_vue_vue_type_style_index_0_lang_module_default = {
          disabledStrikeThrough,
          success: success$2,
          warning: warning$1
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/parts/CanvasNodeDisabledStrikeThrough.vue
        cssModules$21 = {
          "$style": CanvasNodeDisabledStrikeThrough_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasNodeDisabledStrikeThrough_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasNodeDisabledStrikeThrough_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$21]]); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/CanvasNodeDefault.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$14 = ["data-test-id"];
        CanvasNodeDefault_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasNodeDefault",
          emits: ["open:contextmenu", "activate"],
          setup(__props, {
            emit: __emit
          }) {
            const $style = useCssModule();
            const i18n = useI18n();
            const emit = __emit;
            const {
              initialized,
              viewport,
              isExperimentalNdvActive: isExperimentalNdvActive$3
            } = useCanvas();
            const route = useRoute();
            const {
              id: id$1,
              label: label$7,
              subtitle: subtitle$1,
              inputs: inputs$1,
              outputs,
              connections,
              isDisabled,
              isReadOnly,
              isSelected,
              hasPinnedData,
              executionStatus,
              executionWaiting,
              executionWaitingForNext,
              executionRunning,
              hasRunData,
              hasExecutionErrors,
              render: render$5,
              isNotInstalledCommunityNode
            } = useCanvasNode();
            const {
              mainOutputs,
              mainOutputConnections,
              mainInputs,
              mainInputConnections,
              nonMainInputs
            } = useNodeConnections({
              inputs: inputs$1,
              outputs,
              connections
            });
            const nodeHelpers = useNodeHelpers();
            const renderOptions = computed(() => render$5.value.options);
            const isDemoRoute = computed(() => route.name === VIEWS.DEMO);
            const classes = computed(() => {
              return {
                [$style.node]: true,
                [$style.selected]: isSelected.value,
                [$style.disabled]: isDisabled.value || isNotInstalledCommunityNode.value && !isDemoRoute.value,
                [$style.success]: hasRunData.value && executionStatus.value === "success",
                [$style.error]: hasExecutionErrors.value,
                [$style.pinned]: hasPinnedData.value,
                [$style.waiting]: executionWaiting.value ?? executionStatus.value === "waiting",
                [$style.running]: executionRunning.value || executionWaitingForNext.value,
                [$style.configurable]: renderOptions.value.configurable,
                [$style.configuration]: renderOptions.value.configuration,
                [$style.trigger]: renderOptions.value.trigger,
                [$style.warning]: renderOptions.value.dirtiness !== void 0
              };
            });
            const iconSize = computed(() => renderOptions.value.configuration ? 30 : 40);
            const nodeSize = computed(() => calculateNodeSize(renderOptions.value.configuration ?? false, renderOptions.value.configurable ?? false, mainInputs.value.length, mainOutputs.value.length, nonMainInputs.value.length, isExperimentalNdvActive$3.value));
            const styles = computed(() => ({
              "--canvas-node--width": `${nodeSize.value.width}px`,
              "--canvas-node--height": `${nodeSize.value.height}px`,
              "--node--icon--size": `${iconSize.value}px`
            }));
            const dataTestId = computed(() => {
              let type = "default";
              if (renderOptions.value.configurable) type = "configurable";else if (renderOptions.value.configuration) type = "configuration";else if (renderOptions.value.trigger) type = "trigger";
              return `canvas-${type}-node`;
            });
            const isStrikethroughVisible = computed(() => {
              const isSingleMainInputNode = mainInputs.value.length === 1 && mainInputConnections.value.length <= 1;
              const isSingleMainOutputNode = mainOutputs.value.length === 1 && mainOutputConnections.value.length <= 1;
              return isDisabled.value && isSingleMainInputNode && isSingleMainOutputNode;
            });
            const iconSource = computed(() => renderOptions.value.icon);
            const showTooltip = ref(false);
            watch(initialized, () => {
              if (initialized.value) showTooltip.value = true;
            });
            watch(viewport, () => {
              showTooltip.value = false;
              setTimeout(() => {
                showTooltip.value = true;
              }, 0);
            });
            function openContextMenu(event) {
              emit("open:contextmenu", event);
            }
            function onActivate(event) {
              emit("activate", id$1.value, event);
            }
            return (_ctx, _cache) => {
              return unref(isExperimentalNdvActive$3) ? (openBlock(), createBlock(ExperimentalEmbeddedNodeDetails_default, {
                key: 0,
                "node-id": unref(id$1),
                class: normalizeClass(classes.value),
                style: normalizeStyle(styles.value),
                "is-read-only": unref(isReadOnly),
                "is-configurable": renderOptions.value.configurable ?? false
              }, null, 8, ["node-id", "class", "style", "is-read-only", "is-configurable"])) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(classes.value),
                style: normalizeStyle(styles.value),
                "data-test-id": dataTestId.value,
                onContextmenu: openContextMenu,
                onDblclick: withModifiers(onActivate, ["stop"])
              }, [renderOptions.value.tooltip ? (openBlock(), createBlock(CanvasNodeTooltip_default, {
                key: 0,
                visible: showTooltip.value
              }, null, 8, ["visible"])) : createCommentVNode("", true), createVNode(NodeIcon_default, {
                "icon-source": iconSource.value,
                size: iconSize.value,
                shrink: false,
                disabled: unref(isDisabled),
                class: normalizeClass(unref($style).icon)
              }, null, 8, ["icon-source", "size", "disabled", "class"]), !renderOptions.value.configuration && !unref(isDisabled) && !(unref(hasPinnedData) && !unref(nodeHelpers).isProductionExecutionPreview.value) ? (openBlock(), createBlock(CanvasNodeSettingsIcons_default, {
                key: 1
              })) : createCommentVNode("", true), isStrikethroughVisible.value ? (openBlock(), createBlock(CanvasNodeDisabledStrikeThrough_default, {
                key: 2
              })) : createCommentVNode("", true), createBaseVNode("div", {
                class: normalizeClass(unref($style).description)
              }, [unref(label$7) ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref($style).label)
              }, toDisplayString(unref(label$7)), 3)) : createCommentVNode("", true), unref(isDisabled) ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(unref($style).disabledLabel)
              }, " (" + toDisplayString(unref(i18n).baseText("node.disabled")) + ") ", 3)) : createCommentVNode("", true), unref(subtitle$1) ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass(unref($style).subtitle)
              }, toDisplayString(unref(subtitle$1)), 3)) : createCommentVNode("", true)], 2), !unref(isDisabled) ? (openBlock(), createBlock(CanvasNodeStatusIcons_default, {
                key: 3,
                class: normalizeClass(unref($style).statusIcons)
              }, null, 8, ["class"])) : createCommentVNode("", true)], 46, _hoisted_1$14));
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/CanvasNodeDefault.vue?vue&type=style&index=0&lang.module.scss
        node = "_node_199fc_123";
        trigger$1 = "_trigger_199fc_145";
        configuration = "_configuration_199fc_148";
        statusIcons = "_statusIcons_199fc_153";
        configurable = "_configurable_199fc_156";
        icon = "_icon_199fc_156";
        description = "_description_199fc_159";
        label$6 = "_label_199fc_172";
        subtitle = "_subtitle_199fc_175";
        running = "_running_199fc_181";
        selected$1 = "_selected_199fc_188";
        success$1 = "_success_199fc_192";
        warning = "_warning_199fc_198";
        error = "_error_199fc_201";
        pinned = "_pinned_199fc_204";
        disabled = "_disabled_199fc_210";
        waiting = "_waiting_199fc_223";
        disabledLabel = "_disabledLabel_199fc_243";
        CanvasNodeDefault_vue_vue_type_style_index_0_lang_module_default = {
          node,
          trigger: trigger$1,
          configuration,
          statusIcons,
          configurable,
          icon,
          description,
          label: label$6,
          subtitle,
          running,
          selected: selected$1,
          success: success$1,
          warning,
          error,
          pinned,
          disabled,
          waiting,
          disabledLabel
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/CanvasNodeDefault.vue
        cssModules$20 = {
          "$style": CanvasNodeDefault_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasNodeDefault_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasNodeDefault_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$20]]); //#endregion
        //#region ../../../node_modules/.pnpm/@vue-flow+node-resizer@1.4.0_@vue-flow+core@1.45.0_vue@3.5.13_typescript@5.9.2___vue@3.5.13_typescript@5.9.2_/node_modules/@vue-flow/node-resizer/dist/vue-flow-node-resizer.mjs
        xhtml$1 = "http://www.w3.org/1999/xhtml";
        namespaces$1 = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: xhtml$1,
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/"
        };
        find$1 = Array.prototype.find;
        filter$1 = Array.prototype.filter;
        EnterNode$1.prototype = {
          constructor: EnterNode$1,
          appendChild: function (child) {
            return this._parent.insertBefore(child, this._next);
          },
          insertBefore: function (child, next) {
            return this._parent.insertBefore(child, next);
          },
          querySelector: function (selector2) {
            return this._parent.querySelector(selector2);
          },
          querySelectorAll: function (selector2) {
            return this._parent.querySelectorAll(selector2);
          }
        };
        ClassList$1.prototype = {
          add: function (name) {
            if (this._names.indexOf(name) < 0) {
              this._names.push(name);
              this._node.setAttribute("class", this._names.join(" "));
            }
          },
          remove: function (name) {
            var i = this._names.indexOf(name);
            if (i >= 0) {
              this._names.splice(i, 1);
              this._node.setAttribute("class", this._names.join(" "));
            }
          },
          contains: function (name) {
            return this._names.indexOf(name) >= 0;
          }
        };
        root$1 = [null];
        Selection$2.prototype = {
          constructor: Selection$2,
          select: selection_select$1,
          selectAll: selection_selectAll$1,
          selectChild: selection_selectChild$1,
          selectChildren: selection_selectChildren$1,
          filter: selection_filter$1,
          data: selection_data$1,
          enter: selection_enter$1,
          exit: selection_exit$1,
          join: selection_join$1,
          merge: selection_merge$1,
          selection: selection_selection$1,
          order: selection_order$1,
          sort: selection_sort$1,
          call: selection_call$1,
          nodes: selection_nodes$1,
          node: selection_node$1,
          size: selection_size$1,
          empty: selection_empty$1,
          each: selection_each$1,
          attr: selection_attr$1,
          style: selection_style$1,
          property: selection_property$1,
          classed: selection_classed$1,
          text: selection_text$1,
          html: selection_html$1,
          raise: selection_raise$1,
          lower: selection_lower$1,
          append: selection_append$1,
          insert: selection_insert$1,
          remove: selection_remove$1,
          clone: selection_clone$1,
          datum: selection_datum$1,
          on: selection_on$1,
          dispatch: selection_dispatch$1,
          [Symbol.iterator]: selection_iterator$1
        };
        noop$1 = {
          value: () => {}
        };
        Dispatch$1.prototype = dispatch$1.prototype = {
          constructor: Dispatch$1,
          on: function (typename, callback) {
            var _ = this._,
              T = parseTypenames$2(typename + "", _),
              t,
              i = -1,
              n = T.length;
            if (arguments.length < 2) {
              while (++i < n) if ((t = (typename = T[i]).type) && (t = get$2(_[t], typename.name))) return t;
              return;
            }
            if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
            while (++i < n) if (t = (typename = T[i]).type) _[t] = set$2(_[t], typename.name, callback);else if (callback == null) for (t in _) _[t] = set$2(_[t], typename.name, null);
            return this;
          },
          copy: function () {
            var copy = {},
              _ = this._;
            for (var t in _) copy[t] = _[t].slice();
            return new Dispatch$1(copy);
          },
          call: function (type, that) {
            if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
            if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
            for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
          },
          apply: function (type, that, args) {
            if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
            for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
          }
        };
        nonpassive = {
          passive: false
        };
        nonpassivecapture$1 = {
          capture: true,
          passive: false
        };
        constant$3 = x => () => x;
        DragEvent.prototype.on = function () {
          var value = this._.on.apply(this._, arguments);
          return value === this._ ? this : value;
        };
        ResizeControlVariant = /* @__PURE__ */(ResizeControlVariant2 => {
          ResizeControlVariant2["Line"] = "line";
          ResizeControlVariant2["Handle"] = "handle";
          return ResizeControlVariant2;
        })(ResizeControlVariant || {});
        DefaultPositions = {
          [ResizeControlVariant.Line]: "right",
          [ResizeControlVariant.Handle]: "bottom-right"
        };
        StylingProperty = {
          [ResizeControlVariant.Line]: "borderColor",
          [ResizeControlVariant.Handle]: "backgroundColor"
        };
        _sfc_main$1$9 = /* @__PURE__ */defineComponent({
          name: "ResizeControl",
          compatConfig: {
            MODE: 3
          },
          props: {
            nodeId: {},
            color: {},
            minWidth: {
              default: 10
            },
            minHeight: {
              default: 10
            },
            maxWidth: {
              default: Number.MAX_VALUE
            },
            maxHeight: {
              default: Number.MAX_VALUE
            },
            position: {},
            variant: {
              default: "handle"
            },
            shouldResize: {},
            keepAspectRatio: {
              type: [Boolean, Number],
              default: false
            }
          },
          emits: ["resizeStart", "resize", "resizeEnd"],
          setup(__props, {
            emit: emits
          }) {
            const props = __props;
            const initPrevValues = {
              width: 0,
              height: 0,
              x: 0,
              y: 0
            };
            const initStartValues = {
              ...initPrevValues,
              pointerX: 0,
              pointerY: 0,
              aspectRatio: 1
            };
            const {
              findNode,
              emits: triggerEmits
            } = useVueFlow();
            const getPointerPosition = useGetPointerPosition();
            const resizeControlRef = ref();
            let startValues = initStartValues;
            let prevValues = initPrevValues;
            const controlPosition = toRef(() => props.position ?? DefaultPositions[props.variant]);
            const positionClassNames = toRef(() => controlPosition.value.split("-"));
            const controlStyle = toRef(() => props.color ? {
              [StylingProperty[props.variant]]: props.color
            } : {});
            watchEffect(onCleanup => {
              if (!resizeControlRef.value || !props.nodeId) return;
              const selection$1 = select$1(resizeControlRef.value);
              const enableX = controlPosition.value.includes("right") || controlPosition.value.includes("left");
              const enableY = controlPosition.value.includes("bottom") || controlPosition.value.includes("top");
              const invertX = controlPosition.value.includes("left");
              const invertY = controlPosition.value.includes("top");
              const dragHandler = drag().on("start", event => {
                const node$1 = findNode(props.nodeId);
                const {
                  xSnapped,
                  ySnapped
                } = getPointerPosition(event);
                prevValues = {
                  width: (node$1 == null ? void 0 : node$1.dimensions.width) ?? 0,
                  height: (node$1 == null ? void 0 : node$1.dimensions.height) ?? 0,
                  x: (node$1 == null ? void 0 : node$1.position.x) ?? 0,
                  y: (node$1 == null ? void 0 : node$1.position.y) ?? 0
                };
                startValues = {
                  ...prevValues,
                  pointerX: xSnapped,
                  pointerY: ySnapped,
                  aspectRatio: prevValues.width / prevValues.height
                };
                emits("resizeStart", {
                  event,
                  params: prevValues
                });
              }).on("drag", event => {
                var _a;
                const {
                  xSnapped,
                  ySnapped
                } = getPointerPosition(event);
                const node$1 = findNode(props.nodeId);
                if (node$1) {
                  const changes = [];
                  const {
                    pointerX: startX,
                    pointerY: startY,
                    width: startWidth,
                    height: startHeight,
                    x: startNodeX,
                    y: startNodeY,
                    aspectRatio: startAspectRatio
                  } = startValues;
                  const {
                    x: prevX,
                    y: prevY,
                    width: prevWidth,
                    height: prevHeight
                  } = prevValues;
                  const distX = Math.floor(enableX ? xSnapped - startX : 0);
                  const distY = Math.floor(enableY ? ySnapped - startY : 0);
                  let width$1 = clamp(startWidth + (invertX ? -distX : distX), props.minWidth, props.maxWidth);
                  let height = clamp(startHeight + (invertY ? -distY : distY), props.minHeight, props.maxHeight);
                  if (props.keepAspectRatio) {
                    const nextAspectRatio = width$1 / height;
                    let aspectRatio = startAspectRatio;
                    if (typeof props.keepAspectRatio === "number" && nextAspectRatio !== props.keepAspectRatio) aspectRatio = props.keepAspectRatio;
                    const isDiagonal = enableX && enableY;
                    const isHorizontal = enableX && !enableY;
                    width$1 = nextAspectRatio <= aspectRatio && isDiagonal || enableY && !enableX ? height * aspectRatio : width$1;
                    height = nextAspectRatio > aspectRatio && isDiagonal || isHorizontal ? width$1 / aspectRatio : height;
                    if (width$1 >= props.maxWidth) {
                      width$1 = props.maxWidth;
                      height = props.maxWidth / aspectRatio;
                    } else if (width$1 <= props.minWidth) {
                      width$1 = props.minWidth;
                      height = props.minWidth / aspectRatio;
                    }
                    if (height >= props.maxHeight) {
                      height = props.maxHeight;
                      width$1 = props.maxHeight * aspectRatio;
                    } else if (height <= props.minHeight) {
                      height = props.minHeight;
                      width$1 = props.minHeight * aspectRatio;
                    }
                  }
                  const isWidthChange = width$1 !== prevWidth;
                  const isHeightChange = height !== prevHeight;
                  if (invertX || invertY) {
                    const x = invertX ? startNodeX - (width$1 - startWidth) : startNodeX;
                    const y = invertY ? startNodeY - (height - startHeight) : startNodeY;
                    const isXPosChange = x !== prevX && isWidthChange;
                    const isYPosChange = y !== prevY && isHeightChange;
                    if (isXPosChange || isYPosChange) {
                      const positionChange = {
                        id: node$1.id,
                        type: "position",
                        from: node$1.position,
                        position: {
                          x: isXPosChange ? x : prevX,
                          y: isYPosChange ? y : prevY
                        }
                      };
                      changes.push(positionChange);
                      prevValues.x = positionChange.position.x;
                      prevValues.y = positionChange.position.y;
                    }
                  }
                  if (props.nodeId && (isWidthChange || isHeightChange)) {
                    const dimensionChange = {
                      id: props.nodeId,
                      type: "dimensions",
                      updateStyle: true,
                      resizing: true,
                      dimensions: {
                        width: width$1,
                        height
                      }
                    };
                    changes.push(dimensionChange);
                    prevValues.width = width$1;
                    prevValues.height = height;
                  }
                  if (changes.length === 0) return;
                  const direction = getDirection({
                    width: prevValues.width,
                    prevWidth,
                    height: prevValues.height,
                    prevHeight,
                    invertX,
                    invertY
                  });
                  const nextValues = {
                    ...prevValues,
                    direction
                  };
                  if (((_a = props.shouldResize) == null ? void 0 : _a.call(props, event, nextValues)) === false) return;
                  emits("resize", {
                    event,
                    params: nextValues
                  });
                  triggerEmits.nodesChange(changes);
                }
              }).on("end", event => {
                if (props.nodeId) {
                  const dimensionChange = {
                    id: props.nodeId,
                    type: "dimensions",
                    resizing: false
                  };
                  emits("resizeEnd", {
                    event,
                    params: prevValues
                  });
                  triggerEmits.nodesChange([dimensionChange]);
                }
              });
              selection$1.call(dragHandler);
              onCleanup(() => {
                selection$1.on(".drag", null);
              });
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                ref_key: "resizeControlRef",
                ref: resizeControlRef,
                class: normalizeClass(["vue-flow__resize-control nodrag", [...positionClassNames.value, _ctx.variant]]),
                style: normalizeStyle(controlStyle.value)
              }, [renderSlot(_ctx.$slots, "default")], 6);
            };
          }
        });
        _sfc_main$8 = /* @__PURE__ */defineComponent({
          name: "NodeResizer",
          compatConfig: {
            MODE: 3
          },
          inheritAttrs: false,
          props: {
            nodeId: {},
            color: {},
            handleClassName: {},
            handleStyle: {},
            lineClassName: {},
            lineStyle: {},
            isVisible: {
              type: Boolean,
              default: true
            },
            minWidth: {},
            minHeight: {},
            maxWidth: {},
            maxHeight: {},
            shouldResize: {},
            keepAspectRatio: {
              type: [Boolean, Number]
            }
          },
          emits: ["resizeStart", "resize", "resizeEnd"],
          setup(__props, {
            emit: emits
          }) {
            const props = __props;
            const {
              findNode,
              emits: triggerEmits
            } = useVueFlow();
            const handleControls = ["top-left", "top-right", "bottom-left", "bottom-right"];
            const lineControls = ["top", "right", "bottom", "left"];
            const contextNodeId = inject(NodeId, null);
            const nodeId = toRef(() => typeof props.nodeId === "string" ? props.nodeId : contextNodeId);
            const node$1 = computed(() => findNode(nodeId.value));
            watch([() => props.minWidth, () => props.minHeight, () => props.maxWidth, () => props.maxHeight, () => {
              var _a;
              return !!((_a = node$1.value) == null ? void 0 : _a.dimensions.width) && !!node$1.value.dimensions.height;
            }], ([minWidth, minHeight, maxWidth, maxHeight, isInitialized]) => {
              const n = node$1.value;
              if (n && isInitialized) {
                const dimensionChange = {
                  id: n.id,
                  type: "dimensions",
                  updateStyle: true,
                  dimensions: {
                    width: n.dimensions.width,
                    height: n.dimensions.height
                  }
                };
                if (minWidth && n.dimensions.width < minWidth) dimensionChange.dimensions.width = minWidth;
                if (minHeight && n.dimensions.height < minHeight) dimensionChange.dimensions.height = minHeight;
                if (maxWidth && n.dimensions.width > maxWidth) dimensionChange.dimensions.width = maxWidth;
                if (maxHeight && n.dimensions.height > maxHeight) dimensionChange.dimensions.height = maxHeight;
                if (dimensionChange.dimensions.width !== n.dimensions.width || dimensionChange.dimensions.height !== n.dimensions.height) triggerEmits.nodesChange([dimensionChange]);
              }
            }, {
              flush: "post",
              immediate: true
            });
            return (_ctx, _cache) => {
              return _ctx.isVisible ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [(openBlock(), createElementBlock(Fragment, null, renderList(lineControls, c => {
                return createVNode(_sfc_main$1$9, {
                  key: c,
                  class: normalizeClass(_ctx.lineClassName),
                  style: normalizeStyle(_ctx.lineStyle),
                  "node-id": nodeId.value,
                  position: c,
                  variant: unref(ResizeControlVariant).Line,
                  "keep-aspect-ratio": _ctx.keepAspectRatio,
                  color: _ctx.color,
                  "min-width": _ctx.minWidth,
                  "min-height": _ctx.minHeight,
                  "max-width": _ctx.maxWidth,
                  "max-height": _ctx.maxHeight,
                  "should-resize": _ctx.shouldResize,
                  onResizeStart: _cache[0] || (_cache[0] = $event => emits("resizeStart", $event)),
                  onResize: _cache[1] || (_cache[1] = $event => emits("resize", $event)),
                  onResizeEnd: _cache[2] || (_cache[2] = $event => emits("resizeEnd", $event))
                }, null, 8, ["class", "style", "node-id", "position", "variant", "keep-aspect-ratio", "color", "min-width", "min-height", "max-width", "max-height", "should-resize"]);
              }), 64)), (openBlock(), createElementBlock(Fragment, null, renderList(handleControls, c => {
                return createVNode(_sfc_main$1$9, {
                  key: c,
                  class: normalizeClass(_ctx.handleClassName),
                  style: normalizeStyle(_ctx.handleStyle),
                  "node-id": nodeId.value,
                  position: c,
                  color: _ctx.color,
                  "min-width": _ctx.minWidth,
                  "min-height": _ctx.minHeight,
                  "max-width": _ctx.maxWidth,
                  "max-height": _ctx.maxHeight,
                  "should-resize": _ctx.shouldResize,
                  "keep-aspect-ratio": _ctx.keepAspectRatio,
                  onResizeStart: _cache[3] || (_cache[3] = $event => emits("resizeStart", $event)),
                  onResize: _cache[4] || (_cache[4] = $event => emits("resize", $event)),
                  onResizeEnd: _cache[5] || (_cache[5] = $event => emits("resizeEnd", $event))
                }, null, 8, ["class", "style", "node-id", "position", "color", "min-width", "min-height", "max-width", "max-height", "should-resize", "keep-aspect-ratio"]);
              }), 64))], 64)) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/CanvasNodeStickyNote.vue?vue&type=script&setup=true&lang.ts
        CanvasNodeStickyNote_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          inheritAttrs: false,
          __name: "CanvasNodeStickyNote",
          emits: ["update", "move", "activate", "deactivate", "open:contextmenu"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const $style = useCssModule();
            const {
              id: id$1,
              isSelected,
              isReadOnly,
              render: render$5,
              eventBus
            } = useCanvasNode();
            const renderOptions = computed(() => render$5.value.options);
            const classes = computed(() => ({
              [$style.sticky]: true,
              [$style.selected]: isSelected.value,
              ["sticky--active"]: isActive.value
            }));
            /**
            * Resizing
            */
            function onResize(event) {
              emit("move", {
                x: event.params.x,
                y: event.params.y
              });
              emit("update", {
                ...(event.params.width ? {
                  width: event.params.width
                } : {}),
                ...(event.params.height ? {
                  height: event.params.height
                } : {})
              });
            }
            /**
            * Content change
            */
            const isActive = ref(false);
            function onInputChange(value) {
              emit("update", {
                content: value
              });
            }
            function onSetActive(value) {
              if (isActive.value === value) return;
              isActive.value = value;
              if (value) emit("activate", id$1.value);else emit("deactivate", id$1.value);
            }
            function onActivate() {
              onSetActive(true);
            }
            /**
            * Context menu
            */
            function openContextMenu(event) {
              emit("open:contextmenu", event);
            }
            /**
            * Lifecycle
            */
            onMounted(() => {
              eventBus.value?.on("update:node:activated", onActivate);
            });
            onBeforeUnmount(() => {
              eventBus.value?.off("update:node:activated", onActivate);
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(_sfc_main$8), {
                "min-height": 80,
                "min-width": 150,
                height: renderOptions.value.height,
                width: renderOptions.value.width,
                "is-visible": !unref(isReadOnly),
                onResize
              }, null, 8, ["height", "width", "is-visible"]), createVNode(unref(N8nSticky_default), mergeProps(_ctx.$attrs, {
                id: unref(id$1),
                class: classes.value,
                "data-test-id": "sticky",
                height: renderOptions.value.height,
                width: renderOptions.value.width,
                "model-value": renderOptions.value.content,
                "background-color": renderOptions.value.color,
                "edit-mode": isActive.value,
                "read-only": unref(isReadOnly),
                onEdit: onSetActive,
                onDblclick: withModifiers(onActivate, ["stop"]),
                "onUpdate:modelValue": onInputChange,
                onContextmenu: openContextMenu
              }), null, 16, ["id", "class", "height", "width", "model-value", "background-color", "edit-mode", "read-only"])], 64);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/CanvasNodeStickyNote.vue?vue&type=style&index=0&lang.module.scss
        sticky = "_sticky_166fo_123";
        selected = "_selected_166fo_130";
        CanvasNodeStickyNote_vue_vue_type_style_index_0_lang_module_default = {
          sticky,
          selected
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/CanvasNodeStickyNote.vue
        cssModules$19 = {
          "$style": CanvasNodeStickyNote_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasNodeStickyNote_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasNodeStickyNote_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$19]]); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/CanvasNodeAddNodes.vue?vue&type=script&setup=true&lang.ts
        CanvasNodeAddNodes_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasNodeAddNodes",
          setup(__props) {
            const nodeCreatorStore = useNodeCreatorStore();
            const i18n = useI18n();
            const settingsStore = useSettingsStore();
            const templatesStore = useTemplatesStore();
            const router = useRouter();
            const uiStore = useUIStore();
            const templatesDataQualityStore = useTemplatesDataQualityStore();
            const isTooltipVisible = ref(false);
            const templatesLinkEnabled = computed(() => {
              return isExtraTemplateLinksExperimentEnabled() && settingsStore.isTemplatesEnabled;
            });
            onMounted(() => {
              nodeViewEventBus.on("runWorkflowButton:mouseenter", onShowTooltip);
              nodeViewEventBus.on("runWorkflowButton:mouseleave", onHideTooltip);
            });
            onBeforeUnmount(() => {
              nodeViewEventBus.off("runWorkflowButton:mouseenter", onShowTooltip);
              nodeViewEventBus.off("runWorkflowButton:mouseleave", onHideTooltip);
            });
            function onShowTooltip() {
              isTooltipVisible.value = true;
            }
            function onHideTooltip() {
              isTooltipVisible.value = false;
            }
            function onClick() {
              nodeCreatorStore.openNodeCreatorForTriggerNodes(NODE_CREATOR_OPEN_SOURCES.TRIGGER_PLACEHOLDER_BUTTON);
            }
            async function onClickTemplatesLink() {
              trackTemplatesClick(TemplateClickSource.emptyWorkflowLink);
              if (templatesStore.hasCustomTemplatesHost) {
                await router.push({
                  name: VIEWS.TEMPLATES
                });
                return;
              }
              if (templatesDataQualityStore.isFeatureEnabled()) {
                uiStore.openModal(EXPERIMENT_TEMPLATES_DATA_QUALITY_KEY);
                return;
              }
              window.open(templatesStore.websiteTemplateRepositoryURL, "_blank");
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                ref: "container",
                class: normalizeClass(_ctx.$style.addNodes),
                "data-test-id": "canvas-add-button"
              }, [createVNode(unref(N8nTooltip_default), {
                placement: "top",
                visible: isTooltipVisible.value,
                disabled: unref(nodeCreatorStore).showScrim,
                "popper-class": _ctx.$style.tooltip,
                "show-after": 700
              }, {
                content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeView.canvasAddButton.addATriggerNodeBeforeExecuting")), 1)]),
                default: withCtx(() => [createBaseVNode("button", {
                  class: normalizeClass(_ctx.$style.button),
                  "data-test-id": "canvas-plus-button",
                  onClick: withModifiers(onClick, ["stop"])
                }, [createVNode(unref(N8nIcon_default), {
                  icon: "plus",
                  color: "foreground-xdark",
                  size: 40
                })], 2)]),
                _: 1
              }, 8, ["visible", "disabled", "popper-class"]), createBaseVNode("p", {
                class: normalizeClass(_ctx.$style.label)
              }, [createTextVNode(toDisplayString(unref(i18n).baseText("nodeView.canvasAddButton.addFirstStep")) + " ", 1), templatesLinkEnabled.value ? (openBlock(), createBlock(unref(N8nLink_default), {
                key: 0,
                underline: true,
                size: "small",
                "data-test-id": "canvas-template-link",
                onClick: onClickTemplatesLink
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeView.templateLink")), 1)]),
                _: 1
              })) : createCommentVNode("", true)], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/CanvasNodeAddNodes.vue?vue&type=style&index=0&lang.module.scss
        addNodes = "_addNodes_i8qus_123";
        button$1 = "_button_i8qus_131";
        label$5 = "_label_i8qus_145";
        CanvasNodeAddNodes_vue_vue_type_style_index_0_lang_module_default = {
          addNodes,
          button: button$1,
          label: label$5
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/CanvasNodeAddNodes.vue
        cssModules$18 = {
          "$style": CanvasNodeAddNodes_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasNodeAddNodes_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasNodeAddNodes_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$18]]); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/CanvasNodeChoicePrompt.vue?vue&type=script&setup=true&lang.ts
        CanvasNodeChoicePrompt_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasNodeChoicePrompt",
          setup(__props) {
            const nodeCreatorStore = useNodeCreatorStore();
            const chatPanelStore = useChatPanelStore();
            const i18n = useI18n();
            const isChatWindowOpen = computed(() => chatPanelStore.isOpen && chatPanelStore.isBuilderModeActive);
            const onAddFirstStepClick = () => {
              if (nodeCreatorStore.isCreateNodeActive) nodeCreatorStore.isCreateNodeActive = false;else nodeCreatorStore.openNodeCreatorForTriggerNodes(NODE_CREATOR_OPEN_SOURCES.TRIGGER_PLACEHOLDER_BUTTON);
            };
            async function onBuildWithAIClick() {
              await chatPanelStore.toggle({
                mode: "builder"
              });
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.choicePrompt),
                "data-test-id": "canvas-choice-prompt",
                onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])),
                onMousedown: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.option)
              }, [createBaseVNode("div", {
                class: normalizeClass([_ctx.$style.selectedButtonHighlight, {
                  [_ctx.$style.highlighted]: unref(nodeCreatorStore).isCreateNodeActive
                }])
              }, [createBaseVNode("button", {
                class: normalizeClass(_ctx.$style.button),
                "data-test-id": "canvas-add-first-step-button",
                onMousedown: withModifiers(onAddFirstStepClick, ["stop", "prevent"])
              }, [createVNode(unref(N8nIcon_default), {
                icon: "plus",
                color: "foreground-xdark",
                size: 40
              })], 34)], 2), createBaseVNode("p", {
                class: normalizeClass(_ctx.$style.label)
              }, toDisplayString(unref(i18n).baseText("nodeView.canvasAddButton.addFirstStep")), 3)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.orDivider)
              }, [createBaseVNode("span", {
                class: normalizeClass(_ctx.$style.orText)
              }, toDisplayString(unref(i18n).baseText("generic.or")), 3)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.option)
              }, [createBaseVNode("div", {
                class: normalizeClass([_ctx.$style.selectedButtonHighlight, {
                  [_ctx.$style.highlighted]: isChatWindowOpen.value
                }])
              }, [createBaseVNode("button", {
                class: normalizeClass([_ctx.$style.button]),
                "data-test-id": "canvas-build-with-ai-button",
                onMousedown: withModifiers(onBuildWithAIClick, ["stop", "prevent"])
              }, [createVNode(unref(N8nIcon_default), {
                icon: "wand-sparkles",
                color: "foreground-xdark",
                size: 40
              })], 34)], 2), createBaseVNode("p", {
                class: normalizeClass(_ctx.$style.label)
              }, toDisplayString(unref(i18n).baseText("aiAssistant.builder.canvasPrompt.buildWithAI")), 3)], 2)], 34);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/CanvasNodeChoicePrompt.vue?vue&type=style&index=0&lang.module.scss
        choicePrompt = "_choicePrompt_1wwbc_123";
        option = "_option_1wwbc_131";
        button = "_button_1wwbc_138";
        selectedButtonHighlight = "_selectedButtonHighlight_1wwbc_148";
        highlighted = "_highlighted_1wwbc_151";
        label$4 = "_label_1wwbc_155";
        orDivider = "_orDivider_1wwbc_165";
        orText = "_orText_1wwbc_173";
        CanvasNodeChoicePrompt_vue_vue_type_style_index_0_lang_module_default = {
          choicePrompt,
          option,
          button,
          selectedButtonHighlight,
          highlighted,
          label: label$4,
          orDivider,
          orText
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/CanvasNodeChoicePrompt.vue
        cssModules$17 = {
          "$style": CanvasNodeChoicePrompt_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasNodeChoicePrompt_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasNodeChoicePrompt_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$17]]); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/CanvasNodeRenderer.vue?vue&type=script&setup=true&lang.ts
        CanvasNodeRenderer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasNodeRenderer",
          setup(__props) {
            const node$1 = inject(CanvasNodeKey);
            const Render = () => {
              const renderType$1 = node$1?.data.value.render.type ?? CanvasNodeRenderType.Default;
              let Component;
              switch (renderType$1) {
                case CanvasNodeRenderType.StickyNote:
                  Component = CanvasNodeStickyNote_default;
                  break;
                case CanvasNodeRenderType.AddNodes:
                  Component = CanvasNodeAddNodes_default;
                  break;
                case CanvasNodeRenderType.ChoicePrompt:
                  Component = CanvasNodeChoicePrompt_default;
                  break;
                default:
                  Component = CanvasNodeDefault_default;
              }
              return h(Component, {
                "data-canvas-node-render-type": renderType$1
              });
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(Render);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/CanvasNodeRenderer.vue
        CanvasNodeRenderer_default = CanvasNodeRenderer_vue_vue_type_script_setup_true_lang_default;
        CanvasHandleRectangle_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasHandleRectangle",
          props: {
            handleClasses: {
              default: void 0
            }
          },
          setup(__props) {
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([_ctx.$style.rectangle, _ctx.handleClasses])
              }, null, 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/parts/CanvasHandleRectangle.vue?vue&type=style&index=0&lang.module.scss
        rectangle = "_rectangle_1o69r_123";
        CanvasHandleRectangle_vue_vue_type_style_index_0_lang_module_default = {
          rectangle
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/parts/CanvasHandleRectangle.vue
        cssModules$16 = {
          "$style": CanvasHandleRectangle_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasHandleRectangle_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasHandleRectangle_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$16]]); //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/CanvasHandleMainInput.vue?vue&type=script&setup=true&lang.ts
        handleClasses$3 = "target";
        CanvasHandleMainInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasHandleMainInput",
          setup(__props) {
            const $style = useCssModule();
            const {
              label: label$7,
              isRequired
            } = useCanvasNodeHandle();
            const classes = computed(() => ({
              "canvas-node-handle-main-input": true,
              [$style.handle]: true,
              [$style.required]: isRequired.value
            }));
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(classes.value)
              }, [createBaseVNode("div", {
                class: normalizeClass([unref($style).label])
              }, toDisplayString(unref(label$7)), 3), createVNode(CanvasHandleRectangle_default, {
                "handle-classes": handleClasses$3
              })], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/CanvasHandleMainInput.vue?vue&type=style&index=0&lang.module.scss
        handle$4 = "_handle_7mf8f_123";
        label$3 = "_label_7mf8f_130";
        required$3 = "_required_7mf8f_145";
        CanvasHandleMainInput_vue_vue_type_style_index_0_lang_module_default = {
          handle: handle$4,
          label: label$3,
          required: required$3
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/CanvasHandleMainInput.vue
        cssModules$15 = {
          "$style": CanvasHandleMainInput_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasHandleMainInput_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasHandleMainInput_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$15]]); //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/parts/CanvasHandleDot.vue?vue&type=script&setup=true&lang.ts
        CanvasHandleDot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasHandleDot",
          props: {
            handleClasses: {
              default: void 0
            }
          },
          setup(__props) {
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([_ctx.$style.dot, _ctx.handleClasses])
              }, null, 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/parts/CanvasHandleDot.vue?vue&type=style&index=0&lang.module.scss
        dot = "_dot_mkl47_123";
        CanvasHandleDot_vue_vue_type_style_index_0_lang_module_default = {
          dot
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/parts/CanvasHandleDot.vue
        cssModules$14 = {
          "$style": CanvasHandleDot_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasHandleDot_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasHandleDot_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$14]]); //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/parts/CanvasHandlePlus.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$13 = ["viewBox"];
        _hoisted_2$4 = ["x1", "y1", "x2", "y2"];
        _hoisted_3$7 = ["transform"];
        CanvasHandlePlus_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasHandlePlus",
          props: {
            position: {
              default: "right"
            },
            handleClasses: {
              default: void 0
            },
            plusSize: {
              default: 24
            },
            lineSize: {
              default: 46
            },
            type: {
              default: "default"
            }
          },
          emits: ["click:plus"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const style = useCssModule();
            const classes = computed(() => ["canvas-handle-plus-wrapper", style.wrapper, style[props.position], style[props.type], props.handleClasses]);
            const viewBox = computed(() => {
              switch (props.position) {
                case "bottom":
                case "top":
                  return {
                    width: props.plusSize,
                    height: props.lineSize + props.plusSize
                  };
                default:
                  return {
                    width: props.lineSize + props.plusSize,
                    height: props.plusSize
                  };
              }
            });
            const styles = computed(() => ({
              width: `${viewBox.value.width}px`,
              height: `${viewBox.value.height}px`
            }));
            const linePosition = computed(() => {
              switch (props.position) {
                case "top":
                  return [[viewBox.value.width / 2, viewBox.value.height - props.lineSize + 1], [viewBox.value.width / 2, viewBox.value.height]];
                case "bottom":
                  return [[viewBox.value.width / 2, 0], [viewBox.value.width / 2, props.lineSize + 1]];
                case "left":
                  return [[viewBox.value.width - props.lineSize - 1, viewBox.value.height / 2], [viewBox.value.width, viewBox.value.height / 2]];
                default:
                  return [[0, viewBox.value.height / 2], [props.lineSize + 1, viewBox.value.height / 2]];
              }
            });
            const plusPosition = computed(() => {
              switch (props.position) {
                case "bottom":
                  return [0, viewBox.value.height - props.plusSize];
                case "top":
                  return [0, 0];
                case "left":
                  return [0, 0];
                default:
                  return [viewBox.value.width - props.plusSize, 0];
              }
            });
            function onClick(event) {
              emit("click:plus", event);
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("svg", {
                "data-test-id": "canvas-handle-plus-wrapper",
                class: normalizeClass(classes.value),
                viewBox: `0 0 ${viewBox.value.width} ${viewBox.value.height}`,
                style: normalizeStyle(styles.value)
              }, [createBaseVNode("line", {
                class: normalizeClass([_ctx.handleClasses, _ctx.$style.line]),
                x1: linePosition.value[0][0],
                y1: linePosition.value[0][1],
                x2: linePosition.value[1][0],
                y2: linePosition.value[1][1],
                stroke: "var(--color--foreground--shade-2)",
                "stroke-width": "2"
              }, null, 10, _hoisted_2$4), createBaseVNode("g", {
                "data-test-id": "canvas-handle-plus",
                class: normalizeClass([_ctx.$style.plus, _ctx.handleClasses, "clickable"]),
                transform: `translate(${plusPosition.value[0]}, ${plusPosition.value[1]})`,
                onClick: withModifiers(onClick, ["stop"])
              }, [createBaseVNode("rect", {
                class: normalizeClass([_ctx.handleClasses, "clickable"]),
                x: "2",
                y: "2",
                width: "20",
                height: "20",
                stroke: "var(--color--foreground--shade-2)",
                "stroke-width": "2",
                rx: "4",
                fill: "var(--color--foreground--tint-2)"
              }, null, 2), _cache[0] || (_cache[0] = createBaseVNode("path", {
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M8 12h8m-4-4v8",
                class: "source clickable"
              }, null, -1))], 10, _hoisted_3$7)], 14, _hoisted_1$13);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/parts/CanvasHandlePlus.vue?vue&type=style&index=0&lang.module.scss
        wrapper = "_wrapper_1wtvd_123";
        right$1 = "_right_1wtvd_128";
        bottom$1 = "_bottom_1wtvd_131";
        secondary = "_secondary_1wtvd_134";
        line = "_line_1wtvd_134";
        plus = "_plus_1wtvd_137";
        success = "_success_1wtvd_143";
        CanvasHandlePlus_vue_vue_type_style_index_0_lang_module_default = {
          wrapper,
          right: right$1,
          bottom: bottom$1,
          secondary,
          line,
          plus,
          success
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/parts/CanvasHandlePlus.vue
        cssModules$13 = {
          "$style": CanvasHandlePlus_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasHandlePlus_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasHandlePlus_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$13]]); //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/CanvasHandleMainOutput.vue?vue&type=script&setup=true&lang.ts
        handleClasses$2 = "source";
        CanvasHandleMainOutput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasHandleMainOutput",
          emits: ["add"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const $style = useCssModule();
            const i18n = useI18n();
            const {
              render: render$5
            } = useCanvasNode();
            const {
              label: label$7,
              isConnected,
              isConnecting,
              isReadOnly,
              isRequired,
              runData: runData$1
            } = useCanvasNodeHandle();
            const classes = computed(() => ({
              "canvas-node-handle-main-output": true,
              [$style.handle]: true,
              [$style.connected]: isConnected.value,
              [$style.required]: isRequired.value
            }));
            const isHovered = ref(false);
            const renderOptions = computed(() => render$5.value.options);
            const runDataTotal = computed(() => runData$1.value?.total ?? 0);
            const runDataLabel$1 = computed(() => !isConnected.value && runData$1.value && runData$1.value.total > 0 ? i18n.baseText("ndv.output.items", {
              adjustToNumber: runData$1.value.total,
              interpolate: {
                count: String(runData$1.value.total)
              }
            }) : "");
            const isHandlePlusVisible = computed(() => !isConnecting.value || isHovered.value);
            const plusType = computed(() => runDataTotal.value > 0 ? "success" : "default");
            const plusLineSize = computed(() => ({
              small: 46,
              medium: 66,
              large: 80
            })[(runDataTotal.value > 0 ? "large" : renderOptions.value.outputs?.labelSize) ?? "small"]);
            const outputLabelClasses = computed(() => ({
              [$style.label]: true,
              [$style.outputLabel]: true
            }));
            const runDataLabelClasses = computed(() => ({
              [$style.label]: true,
              [$style.runDataLabel]: true
            }));
            function onMouseEnter() {
              isHovered.value = true;
            }
            function onMouseLeave() {
              isHovered.value = false;
            }
            function onClickAdd() {
              emit("add");
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(classes.value)
              }, [unref(label$7) ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(outputLabelClasses.value)
              }, toDisplayString(unref(label$7)), 3)) : createCommentVNode("", true), unref(runData$1) ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(runDataLabelClasses.value)
              }, toDisplayString(runDataLabel$1.value), 3)) : createCommentVNode("", true), createVNode(CanvasHandleDot_default, {
                "handle-classes": handleClasses$2
              }), createVNode(Transition, {
                name: "canvas-node-handle-main-output"
              }, {
                default: withCtx(() => [!unref(isConnected) && !unref(isReadOnly) ? withDirectives((openBlock(), createBlock(CanvasHandlePlus_default, {
                  key: 0,
                  "data-plus-type": plusType.value,
                  "line-size": plusLineSize.value,
                  "handle-classes": handleClasses$2,
                  type: plusType.value,
                  onMouseenter: onMouseEnter,
                  onMouseleave: onMouseLeave,
                  "onClick:plus": onClickAdd
                }, null, 8, ["data-plus-type", "line-size", "type"])), [[vShow, isHandlePlusVisible.value]]) : createCommentVNode("", true)]),
                _: 1
              })], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/CanvasHandleMainOutput.vue?vue&type=style&index=0&lang.module.scss
        handle$3 = "_handle_ca2iu_123";
        connected = "_connected_ca2iu_129";
        label$2 = "_label_ca2iu_129";
        required$2 = "_required_ca2iu_143";
        outputLabel = "_outputLabel_ca2iu_148";
        runDataLabel = "_runDataLabel_ca2iu_158";
        CanvasHandleMainOutput_vue_vue_type_style_index_0_lang_module_default = {
          handle: handle$3,
          connected,
          label: label$2,
          required: required$2,
          outputLabel,
          runDataLabel
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/CanvasHandleMainOutput.vue
        cssModules$12 = {
          "$style": CanvasHandleMainOutput_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasHandleMainOutput_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasHandleMainOutput_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$12]]); //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/parts/CanvasHandleDiamond.vue?vue&type=script&setup=true&lang.ts
        CanvasHandleDiamond_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasHandleDiamond",
          props: {
            handleClasses: {
              default: void 0
            }
          },
          setup(__props) {
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([_ctx.$style.diamond, _ctx.handleClasses])
              }, null, 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/parts/CanvasHandleDiamond.vue?vue&type=style&index=0&lang.module.scss
        diamond = "_diamond_pdek7_123";
        CanvasHandleDiamond_vue_vue_type_style_index_0_lang_module_default = {
          diamond
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/parts/CanvasHandleDiamond.vue
        cssModules$11 = {
          "$style": CanvasHandleDiamond_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasHandleDiamond_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasHandleDiamond_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$11]]); //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/CanvasHandleNonMainInput.vue?vue&type=script&setup=true&lang.ts
        handleClasses$1 = "target";
        CanvasHandleNonMainInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasHandleNonMainInput",
          emits: ["add"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const $style = useCssModule();
            const {
              label: label$7,
              isConnected,
              isConnecting,
              isRequired,
              maxConnections
            } = useCanvasNodeHandle();
            const classes = computed(() => ({
              "canvas-node-handle-non-main-input": true,
              [$style.handle]: true,
              [$style.required]: isRequired.value
            }));
            const isHandlePlusAvailable = computed(() => !isConnected.value || !maxConnections.value || maxConnections.value > 1);
            const isHandlePlusVisible = computed(() => !isConnecting.value || isHovered.value || !maxConnections.value || maxConnections.value > 1);
            const isHovered = ref(false);
            function onMouseEnter() {
              isHovered.value = true;
            }
            function onMouseLeave() {
              isHovered.value = false;
            }
            function onClickAdd() {
              emit("add");
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(classes.value)
              }, [createBaseVNode("div", {
                class: normalizeClass([unref($style).label])
              }, toDisplayString(unref(label$7)), 3), createVNode(CanvasHandleDiamond_default, {
                "handle-classes": handleClasses$1
              }), createVNode(Transition, {
                name: "canvas-node-handle-non-main-input"
              }, {
                default: withCtx(() => [isHandlePlusAvailable.value ? withDirectives((openBlock(), createBlock(CanvasHandlePlus_default, {
                  key: 0,
                  "handle-classes": handleClasses$1,
                  type: "secondary",
                  position: "bottom",
                  onMouseenter: onMouseEnter,
                  onMouseleave: onMouseLeave,
                  "onClick:plus": onClickAdd
                }, null, 512)), [[vShow, isHandlePlusVisible.value]]) : createCommentVNode("", true)]),
                _: 1
              })], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/CanvasHandleNonMainInput.vue?vue&type=style&index=0&lang.module.scss
        handle$2 = "_handle_1q30k_123";
        label$1 = "_label_1q30k_130";
        required$1 = "_required_1q30k_144";
        CanvasHandleNonMainInput_vue_vue_type_style_index_0_lang_module_default = {
          handle: handle$2,
          label: label$1,
          required: required$1
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/CanvasHandleNonMainInput.vue
        cssModules$10 = {
          "$style": CanvasHandleNonMainInput_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasHandleNonMainInput_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasHandleNonMainInput_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$10]]); //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/CanvasHandleNonMainOutput.vue?vue&type=script&setup=true&lang.ts
        handleClasses = "source";
        CanvasHandleNonMainOutput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasHandleNonMainOutput",
          setup(__props) {
            const $style = useCssModule();
            const {
              label: label$7,
              isRequired
            } = useCanvasNodeHandle();
            const classes = computed(() => ({
              "canvas-node-handle-non-main-output": true,
              [$style.handle]: true,
              [$style.required]: isRequired.value
            }));
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(classes.value)
              }, [createBaseVNode("div", {
                class: normalizeClass(unref($style).label)
              }, toDisplayString(unref(label$7)), 3), createVNode(CanvasHandleDiamond_default, {
                "handle-classes": handleClasses
              })], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/CanvasHandleNonMainOutput.vue?vue&type=style&index=0&lang.module.scss
        handle$1 = "_handle_1argj_123";
        label = "_label_1argj_130";
        required = "_required_1argj_143";
        CanvasHandleNonMainOutput_vue_vue_type_style_index_0_lang_module_default = {
          handle: handle$1,
          label,
          required
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/render-types/CanvasHandleNonMainOutput.vue
        cssModules$9 = {
          "$style": CanvasHandleNonMainOutput_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasHandleNonMainOutput_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasHandleNonMainOutput_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$9]]); //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/CanvasHandleRenderer.vue?vue&type=script&setup=true&lang.ts
        CanvasHandleRenderer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          inheritAttrs: false,
          __name: "CanvasHandleRenderer",
          props: {
            handleId: {},
            connectionsCount: {},
            isConnecting: {
              type: Boolean
            },
            position: {},
            offset: {},
            node: {},
            type: {},
            index: {},
            required: {
              type: Boolean
            },
            maxConnections: {},
            label: {},
            mode: {},
            isReadOnly: {
              type: Boolean
            },
            isValidConnection: {
              type: Function
            }
          },
          emits: ["add"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const style = useCssModule();
            const handleType = computed(() => props.mode === CanvasConnectionMode.Input ? "target" : "source");
            const handleClasses$4 = computed(() => [style.handle, style[props.type], style[props.mode]]);
            /**
            * Connectable
            */
            const connectionsLimitReached = computed(() => {
              return props.maxConnections && props.connectionsCount >= props.maxConnections;
            });
            const isConnectableStart = computed(() => {
              if (connectionsLimitReached.value) return false;
              return props.mode === CanvasConnectionMode.Output || props.type !== NodeConnectionTypes.Main;
            });
            const isConnectableEnd = computed(() => {
              if (connectionsLimitReached.value) return false;
              return props.mode === CanvasConnectionMode.Input || props.type !== NodeConnectionTypes.Main;
            });
            const isConnected = computed(() => props.connectionsCount > 0);
            /**
            * Run data
            */
            const {
              runDataOutputMap
            } = useCanvasNode();
            const runData$1 = computed(() => props.mode === CanvasConnectionMode.Output ? runDataOutputMap.value?.[props.type]?.[props.index] : void 0);
            /**
            * Render additional elements
            */
            const renderTypeClasses = computed(() => [style.renderType, style[props.position]]);
            const RenderType = () => {
              let Component;
              if (props.mode === CanvasConnectionMode.Output) {
                if (props.type === NodeConnectionTypes.Main) Component = CanvasHandleMainOutput_default;else Component = CanvasHandleNonMainOutput_default;
              } else if (props.type === NodeConnectionTypes.Main) Component = CanvasHandleMainInput_default;else Component = CanvasHandleNonMainInput_default;
              return Component ? h(Component) : null;
            };
            /**
            * Event bindings
            */
            function onAdd$2() {
              emit("add", props.handleId);
            }
            /**
            * Provide
            */
            const label$7 = toRef(props, "label");
            const isConnecting = toRef(props, "isConnecting");
            const isReadOnly = toRef(props, "isReadOnly");
            const mode = toRef(props, "mode");
            const type = toRef(props, "type");
            const index = toRef(props, "index");
            const isRequired = toRef(props, "required");
            const maxConnections = toRef(props, "maxConnections");
            provide(CanvasNodeHandleKey, {
              label: label$7,
              mode,
              type,
              index,
              runData: runData$1,
              isRequired,
              isConnected,
              isConnecting,
              isReadOnly,
              maxConnections
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(_sfc_main$f), mergeProps(_ctx.$attrs, {
                id: _ctx.handleId,
                class: handleClasses$4.value,
                type: handleType.value,
                position: _ctx.position,
                style: _ctx.offset,
                "connectable-start": isConnectableStart.value,
                "connectable-end": isConnectableEnd.value,
                "is-valid-connection": _ctx.isValidConnection
              }), {
                default: withCtx(() => [createVNode(RenderType, {
                  class: normalizeClass(renderTypeClasses.value),
                  "is-connected": isConnected.value,
                  "max-connections": maxConnections.value,
                  style: normalizeStyle(_ctx.offset),
                  label: label$7.value,
                  onAdd: onAdd$2
                }, null, 8, ["class", "is-connected", "max-connections", "style", "label"])]),
                _: 1
              }, 16, ["id", "class", "type", "position", "style", "connectable-start", "connectable-end", "is-valid-connection"]);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/CanvasHandleRenderer.vue?vue&type=style&index=0&lang.module.scss
        handle = "_handle_1m3z7_123";
        inputs = "_inputs_1m3z7_138";
        main = "_main_1m3z7_138";
        renderType = "_renderType_1m3z7_143";
        top = "_top_1m3z7_143";
        right = "_right_1m3z7_147";
        left = "_left_1m3z7_151";
        bottom = "_bottom_1m3z7_155";
        CanvasHandleRenderer_vue_vue_type_style_index_0_lang_module_default = {
          handle,
          inputs,
          main,
          renderType,
          top,
          right,
          left,
          bottom
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/handles/CanvasHandleRenderer.vue
        cssModules$8 = {
          "$style": CanvasHandleRenderer_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasHandleRenderer_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasHandleRenderer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$8]]);
        position$2 = ref([0, 0]);
        target = ref();
        useContextMenu = () => {
          const uiStore = useUIStore();
          const isOpen = computed(() => target.value !== void 0);
          const targetNodeIds = computed(() => {
            if (!target.value) return [];
            const currentTarget = target.value;
            return currentTarget.source === "canvas" ? currentTarget.nodeIds : [currentTarget.nodeId];
          });
          const close = () => {
            target.value = void 0;
            position$2.value = [0, 0];
          };
          const open = (event, menuTarget) => {
            event.stopPropagation();
            if (isOpen.value && menuTarget.source === target.value?.source && menuTarget.nodeId === target.value?.nodeId) {
              close();
              return;
            }
            event.preventDefault();
            target.value = menuTarget;
            position$2.value = getMousePosition(event);
          };
          const actions$1 = useContextMenuItems(targetNodeIds);
          watch(() => uiStore.nodeViewOffsetPosition, close);
          return {
            isOpen,
            position: position$2,
            target,
            actions: computed(() => isOpen.value ? actions$1.value : []),
            targetNodeIds,
            open,
            close
          };
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/parts/CanvasNodeTrigger.vue?vue&type=script&setup=true&lang.ts
        CanvasNodeTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasNodeTrigger",
          props: {
            name: {},
            type: {},
            hovered: {
              type: Boolean
            },
            disabled: {
              type: Boolean
            },
            readOnly: {
              type: Boolean
            },
            class: {},
            isExperimentalNdvActive: {
              type: Boolean
            }
          },
          setup(__props) {
            const style = useCssModule();
            const containerClass = computed(() => ({
              [__props.class ?? ""]: true,
              [style.container]: true,
              [style.interactive]: !__props.disabled && !__props.readOnly,
              [style.hovered]: !!__props.hovered,
              [style.isExperimentalNdvActive]: __props.isExperimentalNdvActive
            }));
            const router = useRouter();
            const i18n = useI18n();
            const workflowsStore = useWorkflowsStore();
            const logsStore = useLogsStore();
            const {
              runEntireWorkflow
            } = useRunWorkflow({
              router
            });
            const {
              startChat
            } = useCanvasOperations();
            const isChatOpen = computed(() => logsStore.isOpen);
            const isExecuting = computed(() => workflowsStore.isWorkflowRunning);
            const testId = computed(() => `execute-workflow-button-${__props.name}`);
            async function handleClickExecute() {
              workflowsStore.setSelectedTriggerNodeName(__props.name);
              await runEntireWorkflow("node", __props.name);
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(containerClass.value),
                onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop", "prevent"])),
                onMousedown: _cache[3] || (_cache[3] = withModifiers(() => {}, ["stop", "prevent"]))
              }, [createBaseVNode("div", null, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.bolt)
              }, [createVNode(unref(N8nIcon_default), {
                icon: "bolt-filled",
                size: "large"
              })], 2), !_ctx.readOnly ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [_ctx.type === unref("@n8n/n8n-nodes-langchain.chatTrigger") ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [isChatOpen.value ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 0,
                type: "secondary",
                icon: "message-circle",
                size: "large",
                disabled: isExecuting.value,
                "data-test-id": testId.value,
                label: unref(i18n).baseText("chat.hide"),
                onClickCapture: _cache[0] || (_cache[0] = $event => unref(logsStore).toggleOpen(false))
              }, null, 8, ["disabled", "data-test-id", "label"])) : (openBlock(), createBlock(KeyboardShortcutTooltip_default, {
                key: 1,
                label: unref(i18n).baseText("chat.open"),
                shortcut: {
                  keys: ["c"]
                }
              }, {
                default: withCtx(() => [createVNode(unref(N8nButton_default), {
                  type: "primary",
                  icon: "message-circle",
                  size: "large",
                  disabled: isExecuting.value,
                  "data-test-id": testId.value,
                  label: unref(i18n).baseText("chat.open"),
                  onClickCapture: _cache[1] || (_cache[1] = $event => unref(startChat)("node"))
                }, null, 8, ["disabled", "data-test-id", "label"])]),
                _: 1
              }, 8, ["label"]))], 64)) : (openBlock(), createBlock(unref(N8nButton_default), {
                key: 1,
                type: "primary",
                icon: "flask-conical",
                size: "large",
                disabled: isExecuting.value,
                "data-test-id": testId.value,
                label: unref(i18n).baseText("nodeView.runButtonText.executeWorkflow"),
                onClickCapture: handleClickExecute
              }, null, 8, ["disabled", "data-test-id", "label"]))], 64)) : createCommentVNode("", true)])], 34);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/parts/CanvasNodeTrigger.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_19xnh_123";
        interactive = "_interactive_19xnh_147";
        hovered = "_hovered_19xnh_147";
        isExperimentalNdvActive$1 = "_isExperimentalNdvActive_19xnh_152";
        bolt = "_bolt_19xnh_156";
        CanvasNodeTrigger_vue_vue_type_style_index_0_lang_module_default = {
          container,
          interactive,
          hovered,
          isExperimentalNdvActive: isExperimentalNdvActive$1,
          bolt
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/render-types/parts/CanvasNodeTrigger.vue
        cssModules$7 = {
          "$style": CanvasNodeTrigger_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasNodeTrigger_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasNodeTrigger_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$7]]); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/CanvasNode.vue?vue&type=script&setup=true&lang.ts
        import_isEqual = /* @__PURE__ */__toESM(require_isEqual());
        _hoisted_1$12 = ["data-test-id", "data-node-name", "data-node-type"];
        CanvasNode_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasNode",
          props: {
            id: {},
            type: {},
            selected: {
              type: Boolean
            },
            connectable: {
              type: [Boolean, Number, String, Function]
            },
            position: {},
            dimensions: {},
            label: {},
            isValidTargetPos: {
              type: Function
            },
            isValidSourcePos: {
              type: Function
            },
            parent: {},
            parentNodeId: {},
            dragging: {
              type: Boolean
            },
            resizing: {
              type: Boolean
            },
            zIndex: {},
            targetPosition: {},
            sourcePosition: {},
            dragHandle: {},
            data: {},
            events: {},
            readOnly: {
              type: Boolean
            },
            eventBus: {},
            hovered: {
              type: Boolean
            },
            nearbyHovered: {
              type: Boolean
            }
          },
          emits: ["add", "delete", "run", "select", "toggle", "activate", "deactivate", "open:contextmenu", "update", "update:inputs", "update:outputs", "move", "focus"],
          setup(__props, {
            emit: __emit
          }) {
            const slots = useSlots();
            const emit = __emit;
            const style = useCssModule();
            const props = __props;
            const contextMenu$1 = useContextMenu();
            const {
              connectingHandle,
              isExperimentalNdvActive: isExperimentalNdvActive$3
            } = useCanvas();
            const nodeClasses = ref([]);
            const inputs$1 = computed(() => props.data.inputs);
            const outputs = computed(() => props.data.outputs);
            const connections = computed(() => props.data.connections);
            const {
              mainInputs,
              nonMainInputs,
              requiredNonMainInputs,
              mainOutputs,
              nonMainOutputs,
              isValidConnection
            } = useNodeConnections({
              inputs: inputs$1,
              outputs,
              connections
            });
            const isDisabled = computed(() => props.data.disabled);
            const classes = computed(() => ({
              [style.canvasNode]: true,
              [style.showToolbar]: showToolbar$1.value,
              hovered: props.hovered,
              selected: props.selected,
              ...Object.fromEntries([...nodeClasses.value].map(c => [c, true]))
            }));
            const renderType$1 = computed(() => props.data.render.type);
            const dataTestId = computed(() => [CanvasNodeRenderType.StickyNote, CanvasNodeRenderType.AddNodes, CanvasNodeRenderType.ChoicePrompt].includes(renderType$1.value) ? void 0 : "canvas-node");
            /**
            * Event bus
            */
            const canvasNodeEventBus = ref(createEventBus());
            function emitCanvasNodeEvent(event) {
              if (event.ids.includes(props.id) && canvasNodeEventBus.value) canvasNodeEventBus.value.emit(event.action, event.payload);
            }
            /**
            * Inputs
            */
            const nonMainInputsWithSpacer = computed(() => insertSpacersBetweenEndpoints(nonMainInputs.value, requiredNonMainInputs.value.length));
            const mappedInputs = computed(() => {
              return [...mainInputs.value.map(mainInputsMappingFn), ...nonMainInputsWithSpacer.value.map(nonMainInputsMappingFn)].filter(endpoint => !!endpoint);
            });
            /**
            * Outputs
            */
            const mappedOutputs = computed(() => {
              return [...mainOutputs.value.map(mainOutputsMappingFn), ...nonMainOutputs.value.map(nonMainOutputsMappingFn)].filter(endpoint => !!endpoint);
            });
            /**
            * Endpoints
            */
            const createEndpointMappingFn = ({
              mode,
              position: position$3,
              offsetAxis
            }) => (endpoint, index, endpoints) => {
              if (!endpoint) return;
              const handleId = createCanvasConnectionHandleString({
                mode,
                type: endpoint.type,
                index: endpoint.index
              });
              const handleType = mode === CanvasConnectionMode.Input ? "target" : "source";
              const connectionsCount = connections.value[mode][endpoint.type]?.[endpoint.index]?.length ?? 0;
              const isConnecting = connectingHandle.value?.nodeId === props.id && connectingHandle.value?.handleType === handleType && connectingHandle.value?.handleId === handleId;
              const offsetValue = position$3 === Position.Bottom ? `${40 + 16 * (3 * index)}px` : isExperimentalNdvActive$3.value && endpoints.length === 1 ? `${(1 + index) * (16 * 1.5)}px` : `${100 / (endpoints.length + 1) * (index + 1)}%`;
              return {
                ...endpoint,
                handleId,
                connectionsCount,
                isConnecting,
                position: position$3,
                offset: {
                  [offsetAxis]: offsetValue
                }
              };
            };
            const mainInputsMappingFn = createEndpointMappingFn({
              mode: CanvasConnectionMode.Input,
              position: Position.Left,
              offsetAxis: "top"
            });
            const nonMainInputsMappingFn = createEndpointMappingFn({
              mode: CanvasConnectionMode.Input,
              position: Position.Bottom,
              offsetAxis: "left"
            });
            const mainOutputsMappingFn = createEndpointMappingFn({
              mode: CanvasConnectionMode.Output,
              position: Position.Right,
              offsetAxis: "top"
            });
            const nonMainOutputsMappingFn = createEndpointMappingFn({
              mode: CanvasConnectionMode.Output,
              position: Position.Top,
              offsetAxis: "left"
            });
            /**
            * Events
            */
            function onAdd$2(handle$5) {
              emit("add", props.id, handle$5);
            }
            function onDelete() {
              emit("delete", props.id);
            }
            function onRun() {
              emit("run", props.id);
            }
            function onDisabledToggle() {
              emit("toggle", props.id);
            }
            function onActivate(id$2, event) {
              emit("activate", id$2, event);
            }
            function onDeactivate() {
              emit("deactivate", props.id);
            }
            function onOpenContextMenuFromToolbar(event) {
              emit("open:contextmenu", props.id, event, "node-button");
            }
            function onOpenContextMenuFromNode(event) {
              emit("open:contextmenu", props.id, event, "node-right-click");
            }
            function onUpdate(parameters) {
              emit("update", props.id, parameters);
            }
            function onMove(position$3) {
              emit("move", props.id, position$3);
            }
            function onFocus(id$2) {
              emit("focus", id$2);
            }
            function onUpdateClass({
              className,
              add = true
            }) {
              nodeClasses.value = add ? [...new Set([...nodeClasses.value, className])] : nodeClasses.value.filter(c => c !== className);
            }
            /**
            * Provide
            */
            const id$1 = toRef(props, "id");
            const data = toRef(props, "data");
            const label$7 = toRef(props, "label");
            const selected$3 = toRef(props, "selected");
            const readOnly = toRef(props, "readOnly");
            provide(CanvasNodeKey, {
              id: id$1,
              data,
              label: label$7,
              selected: selected$3,
              readOnly,
              eventBus: canvasNodeEventBus
            });
            const hasToolbar = computed(() => ![CanvasNodeRenderType.AddNodes, CanvasNodeRenderType.ChoicePrompt].includes(renderType$1.value));
            const showToolbar$1 = computed(() => {
              const target$1 = contextMenu$1.target.value;
              return contextMenu$1.isOpen && target$1?.source === "node-button" && target$1.nodeId === id$1.value;
            });
            /**
            * Lifecycle
            */
            watch(() => props.selected, value => {
              emit("select", props.id, value);
            });
            watch(inputs$1, (newValue, oldValue) => {
              if (!(0, import_isEqual.default)(newValue, oldValue)) emit("update:inputs", props.id);
            });
            watch(outputs, (newValue, oldValue) => {
              if (!(0, import_isEqual.default)(newValue, oldValue)) emit("update:outputs", props.id);
            });
            onMounted(() => {
              props.eventBus?.on("nodes:action", emitCanvasNodeEvent);
              canvasNodeEventBus.value?.on("update:node:class", onUpdateClass);
            });
            onBeforeUnmount(() => {
              props.eventBus?.off("nodes:action", emitCanvasNodeEvent);
              canvasNodeEventBus.value?.off("update:node:class", onUpdateClass);
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(classes.value),
                "data-test-id": dataTestId.value,
                "data-node-name": data.value.name,
                "data-node-type": data.value.type
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(mappedOutputs.value, source => {
                return openBlock(), createBlock(CanvasHandleRenderer_default, mergeProps({
                  key: `${source.handleId}(${source.index + 1}/${mappedOutputs.value.length})`,
                  ref_for: true
                }, source, {
                  mode: unref(CanvasConnectionMode).Output,
                  "is-read-only": readOnly.value,
                  "is-valid-connection": unref(isValidConnection),
                  "data-node-name": data.value.name,
                  "data-test-id": "canvas-node-output-handle",
                  "data-index": source.index,
                  "data-connection-type": source.type,
                  onAdd: onAdd$2
                }), null, 16, ["mode", "is-read-only", "is-valid-connection", "data-node-name", "data-index", "data-connection-type"]);
              }), 128)), (openBlock(true), createElementBlock(Fragment, null, renderList(mappedInputs.value, target$1 => {
                return openBlock(), createBlock(CanvasHandleRenderer_default, mergeProps({
                  key: `${target$1.handleId}(${target$1.index + 1}/${mappedInputs.value.length})`,
                  ref_for: true
                }, target$1, {
                  mode: unref(CanvasConnectionMode).Input,
                  "is-read-only": readOnly.value,
                  "is-valid-connection": unref(isValidConnection),
                  "data-test-id": "canvas-node-input-handle",
                  "data-index": target$1.index,
                  "data-connection-type": target$1.type,
                  "data-node-name": data.value.name,
                  onAdd: onAdd$2
                }), null, 16, ["mode", "is-read-only", "is-valid-connection", "data-index", "data-connection-type", "data-node-name"]);
              }), 128)), slots.toolbar ? renderSlot(_ctx.$slots, "toolbar", {
                key: 0,
                inputs: unref(mainInputs),
                outputs: unref(mainOutputs),
                data: data.value
              }) : hasToolbar.value ? (openBlock(), createBlock(CanvasNodeToolbar_default, {
                key: 1,
                "data-test-id": "canvas-node-toolbar",
                "read-only": readOnly.value,
                class: normalizeClass(_ctx.$style.canvasNodeToolbar),
                "show-status-icons": unref(isExperimentalNdvActive$3),
                "items-class": _ctx.$style.canvasNodeToolbarItems,
                onDelete,
                onToggle: onDisabledToggle,
                onRun,
                onUpdate,
                "onOpen:contextmenu": onOpenContextMenuFromToolbar,
                onFocus
              }, null, 8, ["read-only", "class", "show-status-icons", "items-class"])) : createCommentVNode("", true), createVNode(CanvasNodeRenderer_default, {
                onActivate,
                onDeactivate,
                onMove,
                onUpdate,
                "onOpen:contextmenu": onOpenContextMenuFromNode,
                onDelete
              }), props.data.render.type === unref(CanvasNodeRenderType).Default && props.data.render.options.trigger ? (openBlock(), createBlock(CanvasNodeTrigger_default, {
                key: 2,
                name: data.value.name,
                type: data.value.type,
                hovered: _ctx.nearbyHovered,
                disabled: isDisabled.value,
                "read-only": readOnly.value,
                class: normalizeClass(_ctx.$style.trigger),
                "is-experimental-ndv-active": unref(isExperimentalNdvActive$3)
              }, null, 8, ["name", "type", "hovered", "disabled", "read-only", "class", "is-experimental-ndv-active"])) : createCommentVNode("", true)], 10, _hoisted_1$12);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/CanvasNode.vue?vue&type=style&index=0&lang.module.scss
        canvasNode = "_canvasNode_1k8iq_123";
        canvasNodeToolbarItems = "_canvasNodeToolbarItems_1k8iq_123";
        trigger = "_trigger_1k8iq_127";
        showToolbar = "_showToolbar_1k8iq_127";
        canvasNodeToolbar = "_canvasNodeToolbar_1k8iq_123";
        CanvasNode_vue_vue_type_style_index_0_lang_module_default = {
          canvasNode,
          canvasNodeToolbarItems,
          trigger,
          showToolbar,
          canvasNodeToolbar
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/nodes/CanvasNode.vue
        cssModules$6 = {
          "$style": CanvasNode_vue_vue_type_style_index_0_lang_module_default
        };
        _export("a", CanvasNode_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasNode_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$6]])); //#endregion
        //#region src/features/workflows/canvas/components/elements/background/CanvasBackgroundStripedPattern.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$11 = ["id", "x", "y", "width", "height", "patternTransform"];
        _hoisted_2$3 = ["d", "stroke-width"];
        CanvasBackgroundStripedPattern_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasBackgroundStripedPattern",
          props: {
            id: {},
            x: {},
            y: {},
            zoom: {}
          },
          setup(__props) {
            /**
            * @see https://github.com/bcakmakoglu/vue-flow/blob/master/packages/background/src/Background.vue
            */
            const props = __props;
            const scaledGap = computed(() => 20 * props.zoom || 1);
            const patternOffset = computed(() => scaledGap.value / 2);
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("pattern", {
                id: _ctx.id,
                patternUnits: "userSpaceOnUse",
                x: _ctx.x % scaledGap.value,
                y: _ctx.y % scaledGap.value,
                width: scaledGap.value,
                height: scaledGap.value,
                patternTransform: `rotate(135) translate(-${patternOffset.value},-${patternOffset.value})`
              }, [createBaseVNode("path", {
                d: `M0 ${scaledGap.value / 2} H${scaledGap.value}`,
                "stroke-width": scaledGap.value / 2
              }, null, 8, _hoisted_2$3)], 8, _hoisted_1$11);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/background/CanvasBackgroundStripedPattern.vue
        CanvasBackgroundStripedPattern_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasBackgroundStripedPattern_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-c74a9681"]]); //#endregion
        //#region ../../../node_modules/.pnpm/@vue-flow+background@1.3.2_@vue-flow+core@1.45.0_vue@3.5.13_typescript@5.9.2___vue@3.5.13_typescript@5.9.2_/node_modules/@vue-flow/background/dist/vue-flow-background.mjs
        BackgroundVariant = /* @__PURE__ */(BackgroundVariant2 => {
          BackgroundVariant2["Lines"] = "lines";
          BackgroundVariant2["Dots"] = "dots";
          return BackgroundVariant2;
        })(BackgroundVariant || {});
        LinePattern = function ({
          dimensions,
          size: size$1,
          color: color$2
        }) {
          return h("path", {
            "stroke": color$2,
            "stroke-width": size$1,
            "d": `M${dimensions[0] / 2} 0 V${dimensions[1]} M0 ${dimensions[1] / 2} H${dimensions[0]}`
          });
        };
        DotPattern = function ({
          radius,
          color: color$2
        }) {
          return h("circle", {
            cx: radius,
            cy: radius,
            r: radius,
            fill: color$2
          });
        };
        BackgroundVariant.Lines, BackgroundVariant.Dots;
        DefaultBgColors = {
          [BackgroundVariant.Dots]: "#81818a",
          [BackgroundVariant.Lines]: "#eee"
        };
        _hoisted_1$9 = ["id", "x", "y", "width", "height", "patternTransform"];
        _hoisted_2$2 = {
          key: 2,
          height: "100",
          width: "100"
        };
        _hoisted_3$6 = ["fill"];
        _hoisted_4 = ["x", "y", "fill"];
        _sfc_main$5 = /* @__PURE__ */defineComponent({
          name: "Background",
          compatConfig: {
            MODE: 3
          },
          props: {
            id: {},
            variant: {
              default: () => BackgroundVariant.Dots
            },
            gap: {
              default: 20
            },
            size: {
              default: 1
            },
            lineWidth: {
              default: 1
            },
            patternColor: {},
            color: {},
            bgColor: {},
            height: {
              default: 100
            },
            width: {
              default: 100
            },
            x: {
              default: 0
            },
            y: {
              default: 0
            },
            offset: {
              default: 0
            }
          },
          setup(__props) {
            const {
              id: vueFlowId,
              viewport
            } = useVueFlow();
            const background = computed(() => {
              const zoom$1 = viewport.value.zoom;
              const [gapX, gapY] = Array.isArray(__props.gap) ? __props.gap : [__props.gap, __props.gap];
              const scaledGap = [gapX * zoom$1 || 1, gapY * zoom$1 || 1];
              const scaledSize = __props.size * zoom$1;
              const [offsetX, offsetY] = Array.isArray(__props.offset) ? __props.offset : [__props.offset, __props.offset];
              return {
                scaledGap,
                offset: [offsetX * zoom$1 || 1 + scaledGap[0] / 2, offsetY * zoom$1 || 1 + scaledGap[1] / 2],
                size: scaledSize
              };
            });
            const patternId = toRef(() => `pattern-${vueFlowId}${__props.id ? `-${__props.id}` : ""}`);
            const patternColor = toRef(() => __props.color || __props.patternColor || DefaultBgColors[__props.variant || BackgroundVariant.Dots]);
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("svg", {
                class: "vue-flow__background vue-flow__container",
                style: normalizeStyle({
                  height: `${_ctx.height > 100 ? 100 : _ctx.height}%`,
                  width: `${_ctx.width > 100 ? 100 : _ctx.width}%`
                })
              }, [renderSlot(_ctx.$slots, "pattern-container", {
                id: patternId.value
              }, () => [createBaseVNode("pattern", {
                id: patternId.value,
                x: unref(viewport).x % background.value.scaledGap[0],
                y: unref(viewport).y % background.value.scaledGap[1],
                width: background.value.scaledGap[0],
                height: background.value.scaledGap[1],
                patternTransform: `translate(-${background.value.offset[0]},-${background.value.offset[1]})`,
                patternUnits: "userSpaceOnUse"
              }, [renderSlot(_ctx.$slots, "pattern", {}, () => [_ctx.variant === unref(BackgroundVariant).Lines ? (openBlock(), createBlock(unref(LinePattern), {
                key: 0,
                size: _ctx.lineWidth,
                color: patternColor.value,
                dimensions: background.value.scaledGap
              }, null, 8, ["size", "color", "dimensions"])) : _ctx.variant === unref(BackgroundVariant).Dots ? (openBlock(), createBlock(unref(DotPattern), {
                key: 1,
                color: patternColor.value,
                radius: background.value.size / 2
              }, null, 8, ["color", "radius"])) : createCommentVNode("", true), _ctx.bgColor ? (openBlock(), createElementBlock("svg", _hoisted_2$2, [createBaseVNode("rect", {
                width: "100%",
                height: "100%",
                fill: _ctx.bgColor
              }, null, 8, _hoisted_3$6)])) : createCommentVNode("", true)])], 8, _hoisted_1$9)]), createBaseVNode("rect", {
                x: _ctx.x,
                y: _ctx.y,
                width: "100%",
                height: "100%",
                fill: `url(#${patternId.value})`
              }, null, 8, _hoisted_4), renderSlot(_ctx.$slots, "default", {
                id: patternId.value
              })], 4);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/background/CanvasBackground.vue?vue&type=script&setup=true&lang.ts
        CanvasBackground_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasBackground",
          props: {
            striped: {
              type: Boolean
            },
            viewport: {}
          },
          setup(__props) {
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(_sfc_main$5), {
                "data-test-id": "canvas-background",
                "pattern-color": "#aaa",
                gap: unref(16)
              }, createSlots({
                _: 2
              }, [_ctx.striped ? {
                name: "pattern-container",
                fn: withCtx(patternProps => [createVNode(CanvasBackgroundStripedPattern_default, {
                  id: patternProps.id,
                  "data-test-id": "canvas-background-striped-pattern",
                  x: _ctx.viewport.x,
                  y: _ctx.viewport.y,
                  zoom: _ctx.viewport.zoom
                }, null, 8, ["id", "x", "y", "zoom"])]),
                key: "0"
              } : void 0]), 1032, ["gap"]);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/background/CanvasBackground.vue
        _export("i", CanvasBackground_default = CanvasBackground_vue_vue_type_script_setup_true_lang_default); //#endregion
        //#region src/features/shared/contextMenu/components/ContextMenu.vue?vue&type=script&setup=true&lang.ts
        ContextMenu_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ContextMenu",
          emits: ["action"],
          setup(__props, {
            emit: __emit
          }) {
            const contextMenu$1 = useContextMenu();
            const {
              position: position$3,
              isOpen,
              actions: actions$1,
              target: target$1
            } = contextMenu$1;
            const dropdown = ref();
            const emit = __emit;
            const {
              APP_Z_INDEXES
            } = useStyles();
            watch(isOpen, () => {
              if (isOpen) dropdown.value?.open();else dropdown.value?.close();
            }, {
              flush: "post"
            });
            function onActionSelect(item) {
              emit("action", item, contextMenu$1.targetNodeIds.value);
            }
            function onVisibleChange(open) {
              if (!open) contextMenu$1.close();
            }
            return (_ctx, _cache) => {
              return unref(isOpen) ? (openBlock(), createBlock(Teleport, {
                key: 0,
                to: "body"
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.contextMenu),
                style: normalizeStyle({
                  left: `${unref(position$3)[0]}px`,
                  top: `${unref(position$3)[1]}px`,
                  zIndex: unref(APP_Z_INDEXES).CONTEXT_MENU
                })
              }, [createVNode(unref(N8nActionDropdown_default), {
                ref_key: "dropdown",
                ref: dropdown,
                items: unref(actions$1),
                placement: "bottom-start",
                "data-test-id": "context-menu",
                "hide-arrow": unref(target$1)?.source !== "node-button",
                teleported: false,
                onSelect: onActionSelect,
                onVisibleChange
              }, {
                activator: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.activator)
                }, null, 2)]),
                _: 1
              }, 8, ["items", "hide-arrow"])], 6)])) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/shared/contextMenu/components/ContextMenu.vue?vue&type=style&index=0&lang.module.scss
        contextMenu = "_contextMenu_12fz3_123";
        activator = "_activator_12fz3_127";
        ContextMenu_vue_vue_type_style_index_0_lang_module_default = {
          contextMenu,
          activator
        }; //#endregion
        //#region src/features/shared/contextMenu/components/ContextMenu.vue
        cssModules$5 = {
          "$style": ContextMenu_vue_vue_type_style_index_0_lang_module_default
        };
        ContextMenu_default = /* @__PURE__ */__plugin_vue_export_helper_default(ContextMenu_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$5]]); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/graph.js
        require_graph = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/graph.js": (exports, module) => {
            var DEFAULT_EDGE_NAME = "\0";
            var GRAPH_NODE = "\0";
            var EDGE_KEY_DELIM = "";
            var Graph$10 = class {
              _isDirected = true;
              _isMultigraph = false;
              _isCompound = false;
              _label;
              _defaultNodeLabelFn = () => void 0;
              _defaultEdgeLabelFn = () => void 0;
              _nodes = {};
              _in = {};
              _preds = {};
              _out = {};
              _sucs = {};
              _edgeObjs = {};
              _edgeLabels = {};
              _nodeCount = 0;
              _edgeCount = 0;
              _parent;
              _children;
              constructor(opts) {
                if (opts) {
                  this._isDirected = Object.hasOwn(opts, "directed") ? opts.directed : true;
                  this._isMultigraph = Object.hasOwn(opts, "multigraph") ? opts.multigraph : false;
                  this._isCompound = Object.hasOwn(opts, "compound") ? opts.compound : false;
                }
                if (this._isCompound) {
                  this._parent = {};
                  this._children = {};
                  this._children[GRAPH_NODE] = {};
                }
              }
              /**
              * Whether graph was created with 'directed' flag set to true or not.
              */
              isDirected() {
                return this._isDirected;
              }
              /**
              * Whether graph was created with 'multigraph' flag set to true or not.
              */
              isMultigraph() {
                return this._isMultigraph;
              }
              /**
              * Whether graph was created with 'compound' flag set to true or not.
              */
              isCompound() {
                return this._isCompound;
              }
              /**
              * Sets the label of the graph.
              */
              setGraph(label$7) {
                this._label = label$7;
                return this;
              }
              /**
              * Gets the graph label.
              */
              graph() {
                return this._label;
              }
              /**
              * Sets the default node label. If newDefault is a function, it will be
              * invoked ach time when setting a label for a node. Otherwise, this label
              * will be assigned as default label in case if no label was specified while
              * setting a node.
              * Complexity: O(1).
              */
              setDefaultNodeLabel(newDefault) {
                this._defaultNodeLabelFn = newDefault;
                if (typeof newDefault !== "function") this._defaultNodeLabelFn = () => newDefault;
                return this;
              }
              /**
              * Gets the number of nodes in the graph.
              * Complexity: O(1).
              */
              nodeCount() {
                return this._nodeCount;
              }
              /**
              * Gets all nodes of the graph. Note, the in case of compound graph subnodes are
              * not included in list.
              * Complexity: O(1).
              */
              nodes() {
                return Object.keys(this._nodes);
              }
              /**
              * Gets list of nodes without in-edges.
              * Complexity: O(|V|).
              */
              sources() {
                var self = this;
                return this.nodes().filter(v => Object.keys(self._in[v]).length === 0);
              }
              /**
              * Gets list of nodes without out-edges.
              * Complexity: O(|V|).
              */
              sinks() {
                var self = this;
                return this.nodes().filter(v => Object.keys(self._out[v]).length === 0);
              }
              /**
              * Invokes setNode method for each node in names list.
              * Complexity: O(|names|).
              */
              setNodes(vs, value) {
                var args = arguments;
                var self = this;
                vs.forEach(function (v) {
                  if (args.length > 1) self.setNode(v, value);else self.setNode(v);
                });
                return this;
              }
              /**
              * Creates or updates the value for the node v in the graph. If label is supplied
              * it is set as the value for the node. If label is not supplied and the node was
              * created by this call then the default node label will be assigned.
              * Complexity: O(1).
              */
              setNode(v, value) {
                if (Object.hasOwn(this._nodes, v)) {
                  if (arguments.length > 1) this._nodes[v] = value;
                  return this;
                }
                this._nodes[v] = arguments.length > 1 ? value : this._defaultNodeLabelFn(v);
                if (this._isCompound) {
                  this._parent[v] = GRAPH_NODE;
                  this._children[v] = {};
                  this._children[GRAPH_NODE][v] = true;
                }
                this._in[v] = {};
                this._preds[v] = {};
                this._out[v] = {};
                this._sucs[v] = {};
                ++this._nodeCount;
                return this;
              }
              /**
              * Gets the label of node with specified name.
              * Complexity: O(|V|).
              */
              node(v) {
                return this._nodes[v];
              }
              /**
              * Detects whether graph has a node with specified name or not.
              */
              hasNode(v) {
                return Object.hasOwn(this._nodes, v);
              }
              /**
              * Remove the node with the name from the graph or do nothing if the node is not in
              * the graph. If the node was removed this function also removes any incident
              * edges.
              * Complexity: O(1).
              */
              removeNode(v) {
                var self = this;
                if (Object.hasOwn(this._nodes, v)) {
                  var removeEdge = e => self.removeEdge(self._edgeObjs[e]);
                  delete this._nodes[v];
                  if (this._isCompound) {
                    this._removeFromParentsChildList(v);
                    delete this._parent[v];
                    this.children(v).forEach(function (child) {
                      self.setParent(child);
                    });
                    delete this._children[v];
                  }
                  Object.keys(this._in[v]).forEach(removeEdge);
                  delete this._in[v];
                  delete this._preds[v];
                  Object.keys(this._out[v]).forEach(removeEdge);
                  delete this._out[v];
                  delete this._sucs[v];
                  --this._nodeCount;
                }
                return this;
              }
              /**
              * Sets node p as a parent for node v if it is defined, or removes the
              * parent for v if p is undefined. Method throws an exception in case of
              * invoking it in context of noncompound graph.
              * Average-case complexity: O(1).
              */
              setParent(v, parent) {
                if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
                if (parent === void 0) parent = GRAPH_NODE;else {
                  parent += "";
                  for (var ancestor = parent; ancestor !== void 0; ancestor = this.parent(ancestor)) if (ancestor === v) throw new Error("Setting " + parent + " as parent of " + v + " would create a cycle");
                  this.setNode(parent);
                }
                this.setNode(v);
                this._removeFromParentsChildList(v);
                this._parent[v] = parent;
                this._children[parent][v] = true;
                return this;
              }
              _removeFromParentsChildList(v) {
                delete this._children[this._parent[v]][v];
              }
              /**
              * Gets parent node for node v.
              * Complexity: O(1).
              */
              parent(v) {
                if (this._isCompound) {
                  var parent = this._parent[v];
                  if (parent !== GRAPH_NODE) return parent;
                }
              }
              /**
              * Gets list of direct children of node v.
              * Complexity: O(1).
              */
              children(v = GRAPH_NODE) {
                if (this._isCompound) {
                  var children$2 = this._children[v];
                  if (children$2) return Object.keys(children$2);
                } else if (v === GRAPH_NODE) return this.nodes();else if (this.hasNode(v)) return [];
              }
              /**
              * Return all nodes that are predecessors of the specified node or undefined if node v is not in
              * the graph. Behavior is undefined for undirected graphs - use neighbors instead.
              * Complexity: O(|V|).
              */
              predecessors(v) {
                var predsV = this._preds[v];
                if (predsV) return Object.keys(predsV);
              }
              /**
              * Return all nodes that are successors of the specified node or undefined if node v is not in
              * the graph. Behavior is undefined for undirected graphs - use neighbors instead.
              * Complexity: O(|V|).
              */
              successors(v) {
                var sucsV = this._sucs[v];
                if (sucsV) return Object.keys(sucsV);
              }
              /**
              * Return all nodes that are predecessors or successors of the specified node or undefined if
              * node v is not in the graph.
              * Complexity: O(|V|).
              */
              neighbors(v) {
                var preds = this.predecessors(v);
                if (preds) {
                  const union = new Set(preds);
                  for (var succ of this.successors(v)) union.add(succ);
                  return Array.from(union.values());
                }
              }
              isLeaf(v) {
                var neighbors;
                if (this.isDirected()) neighbors = this.successors(v);else neighbors = this.neighbors(v);
                return neighbors.length === 0;
              }
              /**
              * Creates new graph with nodes filtered via filter. Edges incident to rejected node
              * are also removed. In case of compound graph, if parent is rejected by filter,
              * than all its children are rejected too.
              * Average-case complexity: O(|E|+|V|).
              */
              filterNodes(filter$2) {
                var copy = new this.constructor({
                  directed: this._isDirected,
                  multigraph: this._isMultigraph,
                  compound: this._isCompound
                });
                copy.setGraph(this.graph());
                var self = this;
                Object.entries(this._nodes).forEach(function ([v, value]) {
                  if (filter$2(v)) copy.setNode(v, value);
                });
                Object.values(this._edgeObjs).forEach(function (e) {
                  if (copy.hasNode(e.v) && copy.hasNode(e.w)) copy.setEdge(e, self.edge(e));
                });
                var parents = {};
                function findParent(v) {
                  var parent = self.parent(v);
                  if (parent === void 0 || copy.hasNode(parent)) {
                    parents[v] = parent;
                    return parent;
                  } else if (parent in parents) return parents[parent];else return findParent(parent);
                }
                if (this._isCompound) copy.nodes().forEach(v => copy.setParent(v, findParent(v)));
                return copy;
              }
              /**
              * Sets the default edge label or factory function. This label will be
              * assigned as default label in case if no label was specified while setting
              * an edge or this function will be invoked each time when setting an edge
              * with no label specified and returned value * will be used as a label for edge.
              * Complexity: O(1).
              */
              setDefaultEdgeLabel(newDefault) {
                this._defaultEdgeLabelFn = newDefault;
                if (typeof newDefault !== "function") this._defaultEdgeLabelFn = () => newDefault;
                return this;
              }
              /**
              * Gets the number of edges in the graph.
              * Complexity: O(1).
              */
              edgeCount() {
                return this._edgeCount;
              }
              /**
              * Gets edges of the graph. In case of compound graph subgraphs are not considered.
              * Complexity: O(|E|).
              */
              edges() {
                return Object.values(this._edgeObjs);
              }
              /**
              * Establish an edges path over the nodes in nodes list. If some edge is already
              * exists, it will update its label, otherwise it will create an edge between pair
              * of nodes with label provided or default label if no label provided.
              * Complexity: O(|nodes|).
              */
              setPath(vs, value) {
                var self = this;
                var args = arguments;
                vs.reduce(function (v, w) {
                  if (args.length > 1) self.setEdge(v, w, value);else self.setEdge(v, w);
                  return w;
                });
                return this;
              }
              /**
              * Creates or updates the label for the edge (v, w) with the optionally supplied
              * name. If label is supplied it is set as the value for the edge. If label is not
              * supplied and the edge was created by this call then the default edge label will
              * be assigned. The name parameter is only useful with multigraphs.
              */
              setEdge() {
                var v, w, name, value;
                var valueSpecified = false;
                var arg0 = arguments[0];
                if (typeof arg0 === "object" && arg0 !== null && "v" in arg0) {
                  v = arg0.v;
                  w = arg0.w;
                  name = arg0.name;
                  if (arguments.length === 2) {
                    value = arguments[1];
                    valueSpecified = true;
                  }
                } else {
                  v = arg0;
                  w = arguments[1];
                  name = arguments[3];
                  if (arguments.length > 2) {
                    value = arguments[2];
                    valueSpecified = true;
                  }
                }
                v = "" + v;
                w = "" + w;
                if (name !== void 0) name = "" + name;
                var e = edgeArgsToId(this._isDirected, v, w, name);
                if (Object.hasOwn(this._edgeLabels, e)) {
                  if (valueSpecified) this._edgeLabels[e] = value;
                  return this;
                }
                if (name !== void 0 && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
                this.setNode(v);
                this.setNode(w);
                this._edgeLabels[e] = valueSpecified ? value : this._defaultEdgeLabelFn(v, w, name);
                var edgeObj = edgeArgsToObj(this._isDirected, v, w, name);
                v = edgeObj.v;
                w = edgeObj.w;
                Object.freeze(edgeObj);
                this._edgeObjs[e] = edgeObj;
                incrementOrInitEntry(this._preds[w], v);
                incrementOrInitEntry(this._sucs[v], w);
                this._in[w][e] = edgeObj;
                this._out[v][e] = edgeObj;
                this._edgeCount++;
                return this;
              }
              /**
              * Gets the label for the specified edge.
              * Complexity: O(1).
              */
              edge(v, w, name) {
                var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
                return this._edgeLabels[e];
              }
              /**
              * Gets the label for the specified edge and converts it to an object.
              * Complexity: O(1)
              */
              edgeAsObj() {
                const edge$2 = this.edge(...arguments);
                if (typeof edge$2 !== "object") return {
                  label: edge$2
                };
                return edge$2;
              }
              /**
              * Detects whether the graph contains specified edge or not. No subgraphs are considered.
              * Complexity: O(1).
              */
              hasEdge(v, w, name) {
                var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
                return Object.hasOwn(this._edgeLabels, e);
              }
              /**
              * Removes the specified edge from the graph. No subgraphs are considered.
              * Complexity: O(1).
              */
              removeEdge(v, w, name) {
                var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
                var edge$2 = this._edgeObjs[e];
                if (edge$2) {
                  v = edge$2.v;
                  w = edge$2.w;
                  delete this._edgeLabels[e];
                  delete this._edgeObjs[e];
                  decrementOrRemoveEntry(this._preds[w], v);
                  decrementOrRemoveEntry(this._sucs[v], w);
                  delete this._in[w][e];
                  delete this._out[v][e];
                  this._edgeCount--;
                }
                return this;
              }
              /**
              * Return all edges that point to the node v. Optionally filters those edges down to just those
              * coming from node u. Behavior is undefined for undirected graphs - use nodeEdges instead.
              * Complexity: O(|E|).
              */
              inEdges(v, u) {
                var inV = this._in[v];
                if (inV) {
                  var edges = Object.values(inV);
                  if (!u) return edges;
                  return edges.filter(edge$2 => edge$2.v === u);
                }
              }
              /**
              * Return all edges that are pointed at by node v. Optionally filters those edges down to just
              * those point to w. Behavior is undefined for undirected graphs - use nodeEdges instead.
              * Complexity: O(|E|).
              */
              outEdges(v, w) {
                var outV = this._out[v];
                if (outV) {
                  var edges = Object.values(outV);
                  if (!w) return edges;
                  return edges.filter(edge$2 => edge$2.w === w);
                }
              }
              /**
              * Returns all edges to or from node v regardless of direction. Optionally filters those edges
              * down to just those between nodes v and w regardless of direction.
              * Complexity: O(|E|).
              */
              nodeEdges(v, w) {
                var inEdges = this.inEdges(v, w);
                if (inEdges) return inEdges.concat(this.outEdges(v, w));
              }
            };
            function incrementOrInitEntry(map, k) {
              if (map[k]) map[k]++;else map[k] = 1;
            }
            function decrementOrRemoveEntry(map, k) {
              if (! --map[k]) delete map[k];
            }
            function edgeArgsToId(isDirected, v_, w_, name) {
              var v = "" + v_;
              var w = "" + w_;
              if (!isDirected && v > w) {
                var tmp = v;
                v = w;
                w = tmp;
              }
              return v + EDGE_KEY_DELIM + w + EDGE_KEY_DELIM + (name === void 0 ? DEFAULT_EDGE_NAME : name);
            }
            function edgeArgsToObj(isDirected, v_, w_, name) {
              var v = "" + v_;
              var w = "" + w_;
              if (!isDirected && v > w) {
                var tmp = v;
                v = w;
                w = tmp;
              }
              var edgeObj = {
                v,
                w
              };
              if (name) edgeObj.name = name;
              return edgeObj;
            }
            function edgeObjToId(isDirected, edgeObj) {
              return edgeArgsToId(isDirected, edgeObj.v, edgeObj.w, edgeObj.name);
            }
            module.exports = Graph$10;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/version.js
        require_version$1 = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/version.js": (exports, module) => {
            module.exports = "2.2.4";
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/index.js
        require_lib = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/index.js": (exports, module) => {
            module.exports = {
              Graph: require_graph(),
              version: require_version$1()
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/json.js
        require_json = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/json.js": (exports, module) => {
            var Graph$9 = require_graph();
            module.exports = {
              write,
              read
            };
            /**
            * Creates a JSON representation of the graph that can be serialized to a string with
            * JSON.stringify. The graph can later be restored using json.read.
            */
            function write(g) {
              var json = {
                options: {
                  directed: g.isDirected(),
                  multigraph: g.isMultigraph(),
                  compound: g.isCompound()
                },
                nodes: writeNodes(g),
                edges: writeEdges(g)
              };
              if (g.graph() !== void 0) json.value = structuredClone(g.graph());
              return json;
            }
            function writeNodes(g) {
              return g.nodes().map(function (v) {
                var nodeValue = g.node(v);
                var parent = g.parent(v);
                var node$1 = {
                  v
                };
                if (nodeValue !== void 0) node$1.value = nodeValue;
                if (parent !== void 0) node$1.parent = parent;
                return node$1;
              });
            }
            function writeEdges(g) {
              return g.edges().map(function (e) {
                var edgeValue = g.edge(e);
                var edge$2 = {
                  v: e.v,
                  w: e.w
                };
                if (e.name !== void 0) edge$2.name = e.name;
                if (edgeValue !== void 0) edge$2.value = edgeValue;
                return edge$2;
              });
            }
            /**
            * Takes JSON as input and returns the graph representation.
            *
            * @example
            * var g2 = graphlib.json.read(JSON.parse(str));
            * g2.nodes();
            * // ['a', 'b']
            * g2.edges()
            * // [ { v: 'a', w: 'b' } ]
            */
            function read(json) {
              var g = new Graph$9(json.options).setGraph(json.value);
              json.nodes.forEach(function (entry) {
                g.setNode(entry.v, entry.value);
                if (entry.parent) g.setParent(entry.v, entry.parent);
              });
              json.edges.forEach(function (entry) {
                g.setEdge({
                  v: entry.v,
                  w: entry.w,
                  name: entry.name
                }, entry.value);
              });
              return g;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/components.js
        require_components = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/components.js": (exports, module) => {
            module.exports = components;
            function components(g) {
              var visited = {};
              var cmpts = [];
              var cmpt;
              function dfs$4(v) {
                if (Object.hasOwn(visited, v)) return;
                visited[v] = true;
                cmpt.push(v);
                g.successors(v).forEach(dfs$4);
                g.predecessors(v).forEach(dfs$4);
              }
              g.nodes().forEach(function (v) {
                cmpt = [];
                dfs$4(v);
                if (cmpt.length) cmpts.push(cmpt);
              });
              return cmpts;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/data/priority-queue.js
        require_priority_queue = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/data/priority-queue.js": (exports, module) => {
            /**
            * A min-priority queue data structure. This algorithm is derived from Cormen,
            * et al., "Introduction to Algorithms". The basic idea of a min-priority
            * queue is that you can efficiently (in O(1) time) get the smallest key in
            * the queue. Adding and removing elements takes O(log n) time. A key can
            * have its priority decreased in O(log n) time.
            */
            var PriorityQueue$2 = class {
              _arr = [];
              _keyIndices = {};
              /**
              * Returns the number of elements in the queue. Takes `O(1)` time.
              */
              size() {
                return this._arr.length;
              }
              /**
              * Returns the keys that are in the queue. Takes `O(n)` time.
              */
              keys() {
                return this._arr.map(function (x) {
                  return x.key;
                });
              }
              /**
              * Returns `true` if **key** is in the queue and `false` if not.
              */
              has(key) {
                return Object.hasOwn(this._keyIndices, key);
              }
              /**
              * Returns the priority for **key**. If **key** is not present in the queue
              * then this function returns `undefined`. Takes `O(1)` time.
              *
              * @param {Object} key
              */
              priority(key) {
                var index = this._keyIndices[key];
                if (index !== void 0) return this._arr[index].priority;
              }
              /**
              * Returns the key for the minimum element in this queue. If the queue is
              * empty this function throws an Error. Takes `O(1)` time.
              */
              min() {
                if (this.size() === 0) throw new Error("Queue underflow");
                return this._arr[0].key;
              }
              /**
              * Inserts a new key into the priority queue. If the key already exists in
              * the queue this function returns `false`; otherwise it will return `true`.
              * Takes `O(n)` time.
              *
              * @param {Object} key the key to add
              * @param {Number} priority the initial priority for the key
              */
              add(key, priority) {
                var keyIndices = this._keyIndices;
                key = String(key);
                if (!Object.hasOwn(keyIndices, key)) {
                  var arr = this._arr;
                  var index = arr.length;
                  keyIndices[key] = index;
                  arr.push({
                    key,
                    priority
                  });
                  this._decrease(index);
                  return true;
                }
                return false;
              }
              /**
              * Removes and returns the smallest key in the queue. Takes `O(log n)` time.
              */
              removeMin() {
                this._swap(0, this._arr.length - 1);
                var min = this._arr.pop();
                delete this._keyIndices[min.key];
                this._heapify(0);
                return min.key;
              }
              /**
              * Decreases the priority for **key** to **priority**. If the new priority is
              * greater than the previous priority, this function will throw an Error.
              *
              * @param {Object} key the key for which to raise priority
              * @param {Number} priority the new priority for the key
              */
              decrease(key, priority) {
                var index = this._keyIndices[key];
                if (priority > this._arr[index].priority) throw new Error("New priority is greater than current priority. Key: " + key + " Old: " + this._arr[index].priority + " New: " + priority);
                this._arr[index].priority = priority;
                this._decrease(index);
              }
              _heapify(i) {
                var arr = this._arr;
                var l = 2 * i;
                var r = l + 1;
                var largest = i;
                if (l < arr.length) {
                  largest = arr[l].priority < arr[largest].priority ? l : largest;
                  if (r < arr.length) largest = arr[r].priority < arr[largest].priority ? r : largest;
                  if (largest !== i) {
                    this._swap(i, largest);
                    this._heapify(largest);
                  }
                }
              }
              _decrease(index) {
                var arr = this._arr;
                var priority = arr[index].priority;
                var parent;
                while (index !== 0) {
                  parent = index >> 1;
                  if (arr[parent].priority < priority) break;
                  this._swap(index, parent);
                  index = parent;
                }
              }
              _swap(i, j) {
                var arr = this._arr;
                var keyIndices = this._keyIndices;
                var origArrI = arr[i];
                var origArrJ = arr[j];
                arr[i] = origArrJ;
                arr[j] = origArrI;
                keyIndices[origArrJ.key] = i;
                keyIndices[origArrI.key] = j;
              }
            };
            module.exports = PriorityQueue$2;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/dijkstra.js
        require_dijkstra = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/dijkstra.js": (exports, module) => {
            var PriorityQueue$1 = require_priority_queue();
            module.exports = dijkstra$1;
            var DEFAULT_WEIGHT_FUNC$1 = () => 1;
            function dijkstra$1(g, source, weightFn, edgeFn) {
              return runDijkstra(g, String(source), weightFn || DEFAULT_WEIGHT_FUNC$1, edgeFn || function (v) {
                return g.outEdges(v);
              });
            }
            function runDijkstra(g, source, weightFn, edgeFn) {
              var results = {};
              var pq = new PriorityQueue$1();
              var v, vEntry;
              var updateNeighbors = function (edge$2) {
                var w = edge$2.v !== v ? edge$2.v : edge$2.w;
                var wEntry = results[w];
                var weight = weightFn(edge$2);
                var distance = vEntry.distance + weight;
                if (weight < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + edge$2 + " Weight: " + weight);
                if (distance < wEntry.distance) {
                  wEntry.distance = distance;
                  wEntry.predecessor = v;
                  pq.decrease(w, distance);
                }
              };
              g.nodes().forEach(function (v$1) {
                var distance = v$1 === source ? 0 : Number.POSITIVE_INFINITY;
                results[v$1] = {
                  distance
                };
                pq.add(v$1, distance);
              });
              while (pq.size() > 0) {
                v = pq.removeMin();
                vEntry = results[v];
                if (vEntry.distance === Number.POSITIVE_INFINITY) break;
                edgeFn(v).forEach(updateNeighbors);
              }
              return results;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/dijkstra-all.js
        require_dijkstra_all = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/dijkstra-all.js": (exports, module) => {
            var dijkstra = require_dijkstra();
            module.exports = dijkstraAll;
            function dijkstraAll(g, weightFunc, edgeFunc) {
              return g.nodes().reduce(function (acc, v) {
                acc[v] = dijkstra(g, v, weightFunc, edgeFunc);
                return acc;
              }, {});
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/tarjan.js
        require_tarjan = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/tarjan.js": (exports, module) => {
            module.exports = tarjan$1;
            function tarjan$1(g) {
              var index = 0;
              var stack = [];
              var visited = {};
              var results = [];
              function dfs$4(v) {
                var entry = visited[v] = {
                  onStack: true,
                  lowlink: index,
                  index: index++
                };
                stack.push(v);
                g.successors(v).forEach(function (w$1) {
                  if (!Object.hasOwn(visited, w$1)) {
                    dfs$4(w$1);
                    entry.lowlink = Math.min(entry.lowlink, visited[w$1].lowlink);
                  } else if (visited[w$1].onStack) entry.lowlink = Math.min(entry.lowlink, visited[w$1].index);
                });
                if (entry.lowlink === entry.index) {
                  var cmpt = [];
                  var w;
                  do {
                    w = stack.pop();
                    visited[w].onStack = false;
                    cmpt.push(w);
                  } while (v !== w);
                  results.push(cmpt);
                }
              }
              g.nodes().forEach(function (v) {
                if (!Object.hasOwn(visited, v)) dfs$4(v);
              });
              return results;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/find-cycles.js
        require_find_cycles = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/find-cycles.js": (exports, module) => {
            var tarjan = require_tarjan();
            module.exports = findCycles;
            function findCycles(g) {
              return tarjan(g).filter(function (cmpt) {
                return cmpt.length > 1 || cmpt.length === 1 && g.hasEdge(cmpt[0], cmpt[0]);
              });
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/floyd-warshall.js
        require_floyd_warshall = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/floyd-warshall.js": (exports, module) => {
            module.exports = floydWarshall;
            var DEFAULT_WEIGHT_FUNC = () => 1;
            function floydWarshall(g, weightFn, edgeFn) {
              return runFloydWarshall(g, weightFn || DEFAULT_WEIGHT_FUNC, edgeFn || function (v) {
                return g.outEdges(v);
              });
            }
            function runFloydWarshall(g, weightFn, edgeFn) {
              var results = {};
              var nodes = g.nodes();
              nodes.forEach(function (v) {
                results[v] = {};
                results[v][v] = {
                  distance: 0
                };
                nodes.forEach(function (w) {
                  if (v !== w) results[v][w] = {
                    distance: Number.POSITIVE_INFINITY
                  };
                });
                edgeFn(v).forEach(function (edge$2) {
                  var w = edge$2.v === v ? edge$2.w : edge$2.v;
                  var d = weightFn(edge$2);
                  results[v][w] = {
                    distance: d,
                    predecessor: v
                  };
                });
              });
              nodes.forEach(function (k) {
                var rowK = results[k];
                nodes.forEach(function (i) {
                  var rowI = results[i];
                  nodes.forEach(function (j) {
                    var ik = rowI[k];
                    var kj = rowK[j];
                    var ij = rowI[j];
                    var altDistance = ik.distance + kj.distance;
                    if (altDistance < ij.distance) {
                      ij.distance = altDistance;
                      ij.predecessor = kj.predecessor;
                    }
                  });
                });
              });
              return results;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/topsort.js
        require_topsort = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/topsort.js": (exports, module) => {
            function topsort$1(g) {
              var visited = {};
              var stack = {};
              var results = [];
              function visit(node$1) {
                if (Object.hasOwn(stack, node$1)) throw new CycleException();
                if (!Object.hasOwn(visited, node$1)) {
                  stack[node$1] = true;
                  visited[node$1] = true;
                  g.predecessors(node$1).forEach(visit);
                  delete stack[node$1];
                  results.push(node$1);
                }
              }
              g.sinks().forEach(visit);
              if (Object.keys(visited).length !== g.nodeCount()) throw new CycleException();
              return results;
            }
            var CycleException = class extends Error {
              constructor() {
                super(...arguments);
              }
            };
            module.exports = topsort$1;
            topsort$1.CycleException = CycleException;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/is-acyclic.js
        require_is_acyclic = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/is-acyclic.js": (exports, module) => {
            var topsort = require_topsort();
            module.exports = isAcyclic;
            function isAcyclic(g) {
              try {
                topsort(g);
              } catch (e) {
                if (e instanceof topsort.CycleException) return false;
                throw e;
              }
              return true;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/dfs.js
        require_dfs = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/dfs.js": (exports, module) => {
            module.exports = dfs$3;
            function dfs$3(g, vs, order$2) {
              if (!Array.isArray(vs)) vs = [vs];
              var navigation = g.isDirected() ? v => g.successors(v) : v => g.neighbors(v);
              var orderFunc = order$2 === "post" ? postOrderDfs : preOrderDfs;
              var acc = [];
              var visited = {};
              vs.forEach(v => {
                if (!g.hasNode(v)) throw new Error("Graph does not have node: " + v);
                orderFunc(v, navigation, visited, acc);
              });
              return acc;
            }
            function postOrderDfs(v, navigation, visited, acc) {
              var stack = [[v, false]];
              while (stack.length > 0) {
                var curr = stack.pop();
                if (curr[1]) acc.push(curr[0]);else if (!Object.hasOwn(visited, curr[0])) {
                  visited[curr[0]] = true;
                  stack.push([curr[0], true]);
                  forEachRight(navigation(curr[0]), w => stack.push([w, false]));
                }
              }
            }
            function preOrderDfs(v, navigation, visited, acc) {
              var stack = [v];
              while (stack.length > 0) {
                var curr = stack.pop();
                if (!Object.hasOwn(visited, curr)) {
                  visited[curr] = true;
                  acc.push(curr);
                  forEachRight(navigation(curr), w => stack.push(w));
                }
              }
            }
            function forEachRight(array$2, iteratee) {
              var length = array$2.length;
              while (length--) iteratee(array$2[length], length, array$2);
              return array$2;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/postorder.js
        require_postorder = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/postorder.js": (exports, module) => {
            var dfs$2 = require_dfs();
            module.exports = postorder$2;
            function postorder$2(g, vs) {
              return dfs$2(g, vs, "post");
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/preorder.js
        require_preorder = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/preorder.js": (exports, module) => {
            var dfs$1 = require_dfs();
            module.exports = preorder$1;
            function preorder$1(g, vs) {
              return dfs$1(g, vs, "pre");
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/prim.js
        require_prim = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/prim.js": (exports, module) => {
            var Graph$8 = require_graph();
            var PriorityQueue = require_priority_queue();
            module.exports = prim;
            function prim(g, weightFunc) {
              var result = new Graph$8();
              var parents = {};
              var pq = new PriorityQueue();
              var v;
              function updateNeighbors(edge$2) {
                var w = edge$2.v === v ? edge$2.w : edge$2.v;
                var pri = pq.priority(w);
                if (pri !== void 0) {
                  var edgeWeight = weightFunc(edge$2);
                  if (edgeWeight < pri) {
                    parents[w] = v;
                    pq.decrease(w, edgeWeight);
                  }
                }
              }
              if (g.nodeCount() === 0) return result;
              g.nodes().forEach(function (v$1) {
                pq.add(v$1, Number.POSITIVE_INFINITY);
                result.setNode(v$1);
              });
              pq.decrease(g.nodes()[0], 0);
              var init$1 = false;
              while (pq.size() > 0) {
                v = pq.removeMin();
                if (Object.hasOwn(parents, v)) result.setEdge(v, parents[v]);else if (init$1) throw new Error("Input graph is not connected: " + g);else init$1 = true;
                g.nodeEdges(v).forEach(updateNeighbors);
              }
              return result;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/index.js
        require_alg = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/lib/alg/index.js": (exports, module) => {
            module.exports = {
              components: require_components(),
              dijkstra: require_dijkstra(),
              dijkstraAll: require_dijkstra_all(),
              findCycles: require_find_cycles(),
              floydWarshall: require_floyd_warshall(),
              isAcyclic: require_is_acyclic(),
              postorder: require_postorder(),
              preorder: require_preorder(),
              prim: require_prim(),
              tarjan: require_tarjan(),
              topsort: require_topsort()
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/index.js
        require_graphlib = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+graphlib@2.2.4/node_modules/@dagrejs/graphlib/index.js": (exports, module) => {
            /**
            * Copyright (c) 2014, Chris Pettitt
            * All rights reserved.
            *
            * Redistribution and use in source and binary forms, with or without
            * modification, are permitted provided that the following conditions are met:
            *
            * 1. Redistributions of source code must retain the above copyright notice, this
            * list of conditions and the following disclaimer.
            *
            * 2. Redistributions in binary form must reproduce the above copyright notice,
            * this list of conditions and the following disclaimer in the documentation
            * and/or other materials provided with the distribution.
            *
            * 3. Neither the name of the copyright holder nor the names of its contributors
            * may be used to endorse or promote products derived from this software without
            * specific prior written permission.
            *
            * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
            * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
            * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
            * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
            * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
            * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
            * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
            * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
            * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
            * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
            */
            var lib = require_lib();
            module.exports = {
              Graph: lib.Graph,
              json: require_json(),
              alg: require_alg(),
              version: lib.version
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/data/list.js
        require_list = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/data/list.js": (exports, module) => {
            var List$1 = class {
              constructor() {
                let sentinel = {};
                sentinel._next = sentinel._prev = sentinel;
                this._sentinel = sentinel;
              }
              dequeue() {
                let sentinel = this._sentinel;
                let entry = sentinel._prev;
                if (entry !== sentinel) {
                  unlink(entry);
                  return entry;
                }
              }
              enqueue(entry) {
                let sentinel = this._sentinel;
                if (entry._prev && entry._next) unlink(entry);
                entry._next = sentinel._next;
                sentinel._next._prev = entry;
                sentinel._next = entry;
                entry._prev = sentinel;
              }
              toString() {
                let strs = [];
                let sentinel = this._sentinel;
                let curr = sentinel._prev;
                while (curr !== sentinel) {
                  strs.push(JSON.stringify(curr, filterOutLinks));
                  curr = curr._prev;
                }
                return "[" + strs.join(", ") + "]";
              }
            };
            function unlink(entry) {
              entry._prev._next = entry._next;
              entry._next._prev = entry._prev;
              delete entry._next;
              delete entry._prev;
            }
            function filterOutLinks(k, v) {
              if (k !== "_next" && k !== "_prev") return v;
            }
            module.exports = List$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/greedy-fas.js
        require_greedy_fas = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/greedy-fas.js": (exports, module) => {
            var Graph$7 = require_graphlib().Graph;
            var List = require_list();
            module.exports = greedyFAS$1;
            var DEFAULT_WEIGHT_FN = () => 1;
            function greedyFAS$1(g, weightFn) {
              if (g.nodeCount() <= 1) return [];
              let state = buildState(g, weightFn || DEFAULT_WEIGHT_FN);
              return doGreedyFAS(state.graph, state.buckets, state.zeroIdx).flatMap(e => g.outEdges(e.v, e.w));
            }
            function doGreedyFAS(g, buckets, zeroIdx) {
              let results = [];
              let sources = buckets[buckets.length - 1];
              let sinks = buckets[0];
              let entry;
              while (g.nodeCount()) {
                while (entry = sinks.dequeue()) removeNode(g, buckets, zeroIdx, entry);
                while (entry = sources.dequeue()) removeNode(g, buckets, zeroIdx, entry);
                if (g.nodeCount()) for (let i = buckets.length - 2; i > 0; --i) {
                  entry = buckets[i].dequeue();
                  if (entry) {
                    results = results.concat(removeNode(g, buckets, zeroIdx, entry, true));
                    break;
                  }
                }
              }
              return results;
            }
            function removeNode(g, buckets, zeroIdx, entry, collectPredecessors) {
              let results = collectPredecessors ? [] : void 0;
              g.inEdges(entry.v).forEach(edge$2 => {
                let weight = g.edge(edge$2);
                let uEntry = g.node(edge$2.v);
                if (collectPredecessors) results.push({
                  v: edge$2.v,
                  w: edge$2.w
                });
                uEntry.out -= weight;
                assignBucket(buckets, zeroIdx, uEntry);
              });
              g.outEdges(entry.v).forEach(edge$2 => {
                let weight = g.edge(edge$2);
                let w = edge$2.w;
                let wEntry = g.node(w);
                wEntry["in"] -= weight;
                assignBucket(buckets, zeroIdx, wEntry);
              });
              g.removeNode(entry.v);
              return results;
            }
            function buildState(g, weightFn) {
              let fasGraph = new Graph$7();
              let maxIn = 0;
              let maxOut = 0;
              g.nodes().forEach(v => {
                fasGraph.setNode(v, {
                  v,
                  "in": 0,
                  out: 0
                });
              });
              g.edges().forEach(e => {
                let prevWeight = fasGraph.edge(e.v, e.w) || 0;
                let weight = weightFn(e);
                let edgeWeight = prevWeight + weight;
                fasGraph.setEdge(e.v, e.w, edgeWeight);
                maxOut = Math.max(maxOut, fasGraph.node(e.v).out += weight);
                maxIn = Math.max(maxIn, fasGraph.node(e.w)["in"] += weight);
              });
              let buckets = range$1(maxOut + maxIn + 3).map(() => new List());
              let zeroIdx = maxIn + 1;
              fasGraph.nodes().forEach(v => {
                assignBucket(buckets, zeroIdx, fasGraph.node(v));
              });
              return {
                graph: fasGraph,
                buckets,
                zeroIdx
              };
            }
            function assignBucket(buckets, zeroIdx, entry) {
              if (!entry.out) buckets[0].enqueue(entry);else if (!entry["in"]) buckets[buckets.length - 1].enqueue(entry);else buckets[entry.out - entry["in"] + zeroIdx].enqueue(entry);
            }
            function range$1(limit) {
              const range$2 = [];
              for (let i = 0; i < limit; i++) range$2.push(i);
              return range$2;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/util.js
        require_util$1 = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/util.js": (exports, module) => {
            var Graph$6 = require_graphlib().Graph;
            module.exports = {
              addBorderNode: addBorderNode$1,
              addDummyNode,
              applyWithChunking: applyWithChunking$1,
              asNonCompoundGraph,
              buildLayerMatrix,
              intersectRect,
              mapValues,
              maxRank,
              normalizeRanks: normalizeRanks$1,
              notime,
              partition,
              pick,
              predecessorWeights,
              range,
              removeEmptyRanks: removeEmptyRanks$1,
              simplify: simplify$1,
              successorWeights,
              time,
              uniqueId: uniqueId$1,
              zipObject: zipObject$1
            };
            function addDummyNode(g, type, attrs, name) {
              let v;
              do v = uniqueId$1(name); while (g.hasNode(v));
              attrs.dummy = type;
              g.setNode(v, attrs);
              return v;
            }
            function simplify$1(g) {
              let simplified = new Graph$6().setGraph(g.graph());
              g.nodes().forEach(v => simplified.setNode(v, g.node(v)));
              g.edges().forEach(e => {
                let simpleLabel = simplified.edge(e.v, e.w) || {
                  weight: 0,
                  minlen: 1
                };
                let label$7 = g.edge(e);
                simplified.setEdge(e.v, e.w, {
                  weight: simpleLabel.weight + label$7.weight,
                  minlen: Math.max(simpleLabel.minlen, label$7.minlen)
                });
              });
              return simplified;
            }
            function asNonCompoundGraph(g) {
              let simplified = new Graph$6({
                multigraph: g.isMultigraph()
              }).setGraph(g.graph());
              g.nodes().forEach(v => {
                if (!g.children(v).length) simplified.setNode(v, g.node(v));
              });
              g.edges().forEach(e => {
                simplified.setEdge(e, g.edge(e));
              });
              return simplified;
            }
            function successorWeights(g) {
              let weightMap = g.nodes().map(v => {
                let sucs = {};
                g.outEdges(v).forEach(e => {
                  sucs[e.w] = (sucs[e.w] || 0) + g.edge(e).weight;
                });
                return sucs;
              });
              return zipObject$1(g.nodes(), weightMap);
            }
            function predecessorWeights(g) {
              let weightMap = g.nodes().map(v => {
                let preds = {};
                g.inEdges(v).forEach(e => {
                  preds[e.v] = (preds[e.v] || 0) + g.edge(e).weight;
                });
                return preds;
              });
              return zipObject$1(g.nodes(), weightMap);
            }
            function intersectRect(rect, point) {
              let x = rect.x;
              let y = rect.y;
              let dx = point.x - x;
              let dy = point.y - y;
              let w = rect.width / 2;
              let h$1 = rect.height / 2;
              if (!dx && !dy) throw new Error("Not possible to find intersection inside of the rectangle");
              let sx, sy;
              if (Math.abs(dy) * w > Math.abs(dx) * h$1) {
                if (dy < 0) h$1 = -h$1;
                sx = h$1 * dx / dy;
                sy = h$1;
              } else {
                if (dx < 0) w = -w;
                sx = w;
                sy = w * dy / dx;
              }
              return {
                x: x + sx,
                y: y + sy
              };
            }
            function buildLayerMatrix(g) {
              let layering = range(maxRank(g) + 1).map(() => []);
              g.nodes().forEach(v => {
                let node$1 = g.node(v);
                let rank$2 = node$1.rank;
                if (rank$2 !== void 0) layering[rank$2][node$1.order] = v;
              });
              return layering;
            }
            function normalizeRanks$1(g) {
              let nodeRanks = g.nodes().map(v => {
                let rank$2 = g.node(v).rank;
                if (rank$2 === void 0) return Number.MAX_VALUE;
                return rank$2;
              });
              let min = applyWithChunking$1(Math.min, nodeRanks);
              g.nodes().forEach(v => {
                let node$1 = g.node(v);
                if (Object.hasOwn(node$1, "rank")) node$1.rank -= min;
              });
            }
            function removeEmptyRanks$1(g) {
              let nodeRanks = g.nodes().map(v => g.node(v).rank);
              let offset = applyWithChunking$1(Math.min, nodeRanks);
              let layers = [];
              g.nodes().forEach(v => {
                let rank$2 = g.node(v).rank - offset;
                if (!layers[rank$2]) layers[rank$2] = [];
                layers[rank$2].push(v);
              });
              let delta = 0;
              let nodeRankFactor = g.graph().nodeRankFactor;
              Array.from(layers).forEach((vs, i) => {
                if (vs === void 0 && i % nodeRankFactor !== 0) --delta;else if (vs !== void 0 && delta) vs.forEach(v => g.node(v).rank += delta);
              });
            }
            function addBorderNode$1(g, prefix, rank$2, order$2) {
              let node$1 = {
                width: 0,
                height: 0
              };
              if (arguments.length >= 4) {
                node$1.rank = rank$2;
                node$1.order = order$2;
              }
              return addDummyNode(g, "border", node$1, prefix);
            }
            function splitToChunks(array$2, chunkSize = CHUNKING_THRESHOLD) {
              const chunks = [];
              for (let i = 0; i < array$2.length; i += chunkSize) {
                const chunk = array$2.slice(i, i + chunkSize);
                chunks.push(chunk);
              }
              return chunks;
            }
            var CHUNKING_THRESHOLD = 65535;
            function applyWithChunking$1(fn, argsArray) {
              if (argsArray.length > CHUNKING_THRESHOLD) {
                const chunks = splitToChunks(argsArray);
                return fn.apply(null, chunks.map(chunk => fn.apply(null, chunk)));
              } else return fn.apply(null, argsArray);
            }
            function maxRank(g) {
              const nodeRanks = g.nodes().map(v => {
                let rank$2 = g.node(v).rank;
                if (rank$2 === void 0) return Number.MIN_VALUE;
                return rank$2;
              });
              return applyWithChunking$1(Math.max, nodeRanks);
            }
            function partition(collection, fn) {
              let result = {
                lhs: [],
                rhs: []
              };
              collection.forEach(value => {
                if (fn(value)) result.lhs.push(value);else result.rhs.push(value);
              });
              return result;
            }
            function time(name, fn) {
              let start$1 = Date.now();
              try {
                return fn();
              } finally {
                console.log(name + " time: " + (Date.now() - start$1) + "ms");
              }
            }
            function notime(name, fn) {
              return fn();
            }
            var idCounter = 0;
            function uniqueId$1(prefix) {
              var id$1 = ++idCounter;
              return toString(prefix) + id$1;
            }
            function range(start$1, limit, step = 1) {
              if (limit == null) {
                limit = start$1;
                start$1 = 0;
              }
              let endCon = i => i < limit;
              if (step < 0) endCon = i => limit < i;
              const range$2 = [];
              for (let i = start$1; endCon(i); i += step) range$2.push(i);
              return range$2;
            }
            function pick(source, keys) {
              const dest = {};
              for (const key of keys) if (source[key] !== void 0) dest[key] = source[key];
              return dest;
            }
            function mapValues(obj, funcOrProp) {
              let func = funcOrProp;
              if (typeof funcOrProp === "string") func = val => val[funcOrProp];
              return Object.entries(obj).reduce((acc, [k, v]) => {
                acc[k] = func(v, k);
                return acc;
              }, {});
            }
            function zipObject$1(props, values) {
              return props.reduce((acc, key, i) => {
                acc[key] = values[i];
                return acc;
              }, {});
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/acyclic.js
        require_acyclic = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/acyclic.js": (exports, module) => {
            var greedyFAS = require_greedy_fas();
            var uniqueId = require_util$1().uniqueId;
            module.exports = {
              run: run$2,
              undo: undo$2
            };
            function run$2(g) {
              (g.graph().acyclicer === "greedy" ? greedyFAS(g, weightFn(g)) : dfsFAS(g)).forEach(e => {
                let label$7 = g.edge(e);
                g.removeEdge(e);
                label$7.forwardName = e.name;
                label$7.reversed = true;
                g.setEdge(e.w, e.v, label$7, uniqueId("rev"));
              });
              function weightFn(g$1) {
                return e => {
                  return g$1.edge(e).weight;
                };
              }
            }
            function dfsFAS(g) {
              let fas = [];
              let stack = {};
              let visited = {};
              function dfs$4(v) {
                if (Object.hasOwn(visited, v)) return;
                visited[v] = true;
                stack[v] = true;
                g.outEdges(v).forEach(e => {
                  if (Object.hasOwn(stack, e.w)) fas.push(e);else dfs$4(e.w);
                });
                delete stack[v];
              }
              g.nodes().forEach(dfs$4);
              return fas;
            }
            function undo$2(g) {
              g.edges().forEach(e => {
                let label$7 = g.edge(e);
                if (label$7.reversed) {
                  g.removeEdge(e);
                  let forwardName = label$7.forwardName;
                  delete label$7.reversed;
                  delete label$7.forwardName;
                  g.setEdge(e.w, e.v, label$7, forwardName);
                }
              });
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/normalize.js
        require_normalize = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/normalize.js": (exports, module) => {
            var util$11 = require_util$1();
            module.exports = {
              run: run$1,
              undo: undo$1
            };
            function run$1(g) {
              g.graph().dummyChains = [];
              g.edges().forEach(edge$2 => normalizeEdge(g, edge$2));
            }
            function normalizeEdge(g, e) {
              let v = e.v;
              let vRank = g.node(v).rank;
              let w = e.w;
              let wRank = g.node(w).rank;
              let name = e.name;
              let edgeLabel$1 = g.edge(e);
              let labelRank = edgeLabel$1.labelRank;
              if (wRank === vRank + 1) return;
              g.removeEdge(e);
              let dummy, attrs, i;
              for (i = 0, ++vRank; vRank < wRank; ++i, ++vRank) {
                edgeLabel$1.points = [];
                attrs = {
                  width: 0,
                  height: 0,
                  edgeLabel: edgeLabel$1,
                  edgeObj: e,
                  rank: vRank
                };
                dummy = util$11.addDummyNode(g, "edge", attrs, "_d");
                if (vRank === labelRank) {
                  attrs.width = edgeLabel$1.width;
                  attrs.height = edgeLabel$1.height;
                  attrs.dummy = "edge-label";
                  attrs.labelpos = edgeLabel$1.labelpos;
                }
                g.setEdge(v, dummy, {
                  weight: edgeLabel$1.weight
                }, name);
                if (i === 0) g.graph().dummyChains.push(dummy);
                v = dummy;
              }
              g.setEdge(v, w, {
                weight: edgeLabel$1.weight
              }, name);
            }
            function undo$1(g) {
              g.graph().dummyChains.forEach(v => {
                let node$1 = g.node(v);
                let origLabel = node$1.edgeLabel;
                let w;
                g.setEdge(node$1.edgeObj, origLabel);
                while (node$1.dummy) {
                  w = g.successors(v)[0];
                  g.removeNode(v);
                  origLabel.points.push({
                    x: node$1.x,
                    y: node$1.y
                  });
                  if (node$1.dummy === "edge-label") {
                    origLabel.x = node$1.x;
                    origLabel.y = node$1.y;
                    origLabel.width = node$1.width;
                    origLabel.height = node$1.height;
                  }
                  v = w;
                  node$1 = g.node(v);
                }
              });
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/rank/util.js
        require_util = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/rank/util.js": (exports, module) => {
            var {
              applyWithChunking
            } = require_util$1();
            module.exports = {
              longestPath: longestPath$1,
              slack: slack$2
            };
            function longestPath$1(g) {
              var visited = {};
              function dfs$4(v) {
                var label$7 = g.node(v);
                if (Object.hasOwn(visited, v)) return label$7.rank;
                visited[v] = true;
                let outEdgesMinLens = g.outEdges(v).map(e => {
                  if (e == null) return Number.POSITIVE_INFINITY;
                  return dfs$4(e.w) - g.edge(e).minlen;
                });
                var rank$2 = applyWithChunking(Math.min, outEdgesMinLens);
                if (rank$2 === Number.POSITIVE_INFINITY) rank$2 = 0;
                return label$7.rank = rank$2;
              }
              g.sources().forEach(dfs$4);
            }
            function slack$2(g, e) {
              return g.node(e.w).rank - g.node(e.v).rank - g.edge(e).minlen;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/rank/feasible-tree.js
        require_feasible_tree = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/rank/feasible-tree.js": (exports, module) => {
            var Graph$5 = require_graphlib().Graph;
            var slack$1 = require_util().slack;
            module.exports = feasibleTree$2;
            function feasibleTree$2(g) {
              var t = new Graph$5({
                directed: false
              });
              var start$1 = g.nodes()[0];
              var size$1 = g.nodeCount();
              t.setNode(start$1, {});
              var edge$2, delta;
              while (tightTree(t, g) < size$1) {
                edge$2 = findMinSlackEdge(t, g);
                delta = t.hasNode(edge$2.v) ? slack$1(g, edge$2) : -slack$1(g, edge$2);
                shiftRanks(t, g, delta);
              }
              return t;
            }
            function tightTree(t, g) {
              function dfs$4(v) {
                g.nodeEdges(v).forEach(e => {
                  var edgeV = e.v,
                    w = v === edgeV ? e.w : edgeV;
                  if (!t.hasNode(w) && !slack$1(g, e)) {
                    t.setNode(w, {});
                    t.setEdge(v, w, {});
                    dfs$4(w);
                  }
                });
              }
              t.nodes().forEach(dfs$4);
              return t.nodeCount();
            }
            function findMinSlackEdge(t, g) {
              return g.edges().reduce((acc, edge$2) => {
                let edgeSlack = Number.POSITIVE_INFINITY;
                if (t.hasNode(edge$2.v) !== t.hasNode(edge$2.w)) edgeSlack = slack$1(g, edge$2);
                if (edgeSlack < acc[0]) return [edgeSlack, edge$2];
                return acc;
              }, [Number.POSITIVE_INFINITY, null])[1];
            }
            function shiftRanks(t, g, delta) {
              t.nodes().forEach(v => g.node(v).rank += delta);
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/rank/network-simplex.js
        require_network_simplex = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/rank/network-simplex.js": (exports, module) => {
            var feasibleTree$1 = require_feasible_tree();
            var slack = require_util().slack;
            var initRank = require_util().longestPath;
            var preorder = require_graphlib().alg.preorder;
            var postorder$1 = require_graphlib().alg.postorder;
            var simplify = require_util$1().simplify;
            module.exports = networkSimplex$1;
            networkSimplex$1.initLowLimValues = initLowLimValues;
            networkSimplex$1.initCutValues = initCutValues;
            networkSimplex$1.calcCutValue = calcCutValue;
            networkSimplex$1.leaveEdge = leaveEdge;
            networkSimplex$1.enterEdge = enterEdge;
            networkSimplex$1.exchangeEdges = exchangeEdges;
            function networkSimplex$1(g) {
              g = simplify(g);
              initRank(g);
              var t = feasibleTree$1(g);
              initLowLimValues(t);
              initCutValues(t, g);
              var e, f;
              while (e = leaveEdge(t)) {
                f = enterEdge(t, g, e);
                exchangeEdges(t, g, e, f);
              }
            }
            function initCutValues(t, g) {
              var vs = postorder$1(t, t.nodes());
              vs = vs.slice(0, vs.length - 1);
              vs.forEach(v => assignCutValue(t, g, v));
            }
            function assignCutValue(t, g, child) {
              var parent = t.node(child).parent;
              t.edge(child, parent).cutvalue = calcCutValue(t, g, child);
            }
            function calcCutValue(t, g, child) {
              var parent = t.node(child).parent;
              var childIsTail = true;
              var graphEdge = g.edge(child, parent);
              var cutValue = 0;
              if (!graphEdge) {
                childIsTail = false;
                graphEdge = g.edge(parent, child);
              }
              cutValue = graphEdge.weight;
              g.nodeEdges(child).forEach(e => {
                var isOutEdge = e.v === child,
                  other = isOutEdge ? e.w : e.v;
                if (other !== parent) {
                  var pointsToHead = isOutEdge === childIsTail,
                    otherWeight = g.edge(e).weight;
                  cutValue += pointsToHead ? otherWeight : -otherWeight;
                  if (isTreeEdge(t, child, other)) {
                    var otherCutValue = t.edge(child, other).cutvalue;
                    cutValue += pointsToHead ? -otherCutValue : otherCutValue;
                  }
                }
              });
              return cutValue;
            }
            function initLowLimValues(tree, root$2) {
              if (arguments.length < 2) root$2 = tree.nodes()[0];
              dfsAssignLowLim(tree, {}, 1, root$2);
            }
            function dfsAssignLowLim(tree, visited, nextLim, v, parent) {
              var low = nextLim;
              var label$7 = tree.node(v);
              visited[v] = true;
              tree.neighbors(v).forEach(w => {
                if (!Object.hasOwn(visited, w)) nextLim = dfsAssignLowLim(tree, visited, nextLim, w, v);
              });
              label$7.low = low;
              label$7.lim = nextLim++;
              if (parent) label$7.parent = parent;else delete label$7.parent;
              return nextLim;
            }
            function leaveEdge(tree) {
              return tree.edges().find(e => tree.edge(e).cutvalue < 0);
            }
            function enterEdge(t, g, edge$2) {
              var v = edge$2.v;
              var w = edge$2.w;
              if (!g.hasEdge(v, w)) {
                v = edge$2.w;
                w = edge$2.v;
              }
              var vLabel = t.node(v);
              var wLabel = t.node(w);
              var tailLabel = vLabel;
              var flip = false;
              if (vLabel.lim > wLabel.lim) {
                tailLabel = wLabel;
                flip = true;
              }
              return g.edges().filter(edge$3 => {
                return flip === isDescendant(t, t.node(edge$3.v), tailLabel) && flip !== isDescendant(t, t.node(edge$3.w), tailLabel);
              }).reduce((acc, edge$3) => {
                if (slack(g, edge$3) < slack(g, acc)) return edge$3;
                return acc;
              });
            }
            function exchangeEdges(t, g, e, f) {
              var v = e.v;
              var w = e.w;
              t.removeEdge(v, w);
              t.setEdge(f.v, f.w, {});
              initLowLimValues(t);
              initCutValues(t, g);
              updateRanks(t, g);
            }
            function updateRanks(t, g) {
              var vs = preorder(t, t.nodes().find(v => !g.node(v).parent));
              vs = vs.slice(1);
              vs.forEach(v => {
                var parent = t.node(v).parent,
                  edge$2 = g.edge(v, parent),
                  flipped = false;
                if (!edge$2) {
                  edge$2 = g.edge(parent, v);
                  flipped = true;
                }
                g.node(v).rank = g.node(parent).rank + (flipped ? edge$2.minlen : -edge$2.minlen);
              });
            }
            function isTreeEdge(tree, u, v) {
              return tree.hasEdge(u, v);
            }
            function isDescendant(tree, vLabel, rootLabel) {
              return rootLabel.low <= vLabel.lim && vLabel.lim <= rootLabel.lim;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/rank/index.js
        require_rank = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/rank/index.js": (exports, module) => {
            var longestPath = require_util().longestPath;
            var feasibleTree = require_feasible_tree();
            var networkSimplex = require_network_simplex();
            module.exports = rank$1;
            function rank$1(g) {
              switch (g.graph().ranker) {
                case "network-simplex":
                  networkSimplexRanker(g);
                  break;
                case "tight-tree":
                  tightTreeRanker(g);
                  break;
                case "longest-path":
                  longestPathRanker(g);
                  break;
                default:
                  networkSimplexRanker(g);
              }
            }
            var longestPathRanker = longestPath;
            function tightTreeRanker(g) {
              longestPath(g);
              feasibleTree(g);
            }
            function networkSimplexRanker(g) {
              networkSimplex(g);
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/parent-dummy-chains.js
        require_parent_dummy_chains = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/parent-dummy-chains.js": (exports, module) => {
            module.exports = parentDummyChains$1;
            function parentDummyChains$1(g) {
              let postorderNums = postorder(g);
              g.graph().dummyChains.forEach(v => {
                let node$1 = g.node(v);
                let edgeObj = node$1.edgeObj;
                let pathData = findPath(g, postorderNums, edgeObj.v, edgeObj.w);
                let path = pathData.path;
                let lca = pathData.lca;
                let pathIdx = 0;
                let pathV = path[pathIdx];
                let ascending$2 = true;
                while (v !== edgeObj.w) {
                  node$1 = g.node(v);
                  if (ascending$2) {
                    while ((pathV = path[pathIdx]) !== lca && g.node(pathV).maxRank < node$1.rank) pathIdx++;
                    if (pathV === lca) ascending$2 = false;
                  }
                  if (!ascending$2) {
                    while (pathIdx < path.length - 1 && g.node(pathV = path[pathIdx + 1]).minRank <= node$1.rank) pathIdx++;
                    pathV = path[pathIdx];
                  }
                  g.setParent(v, pathV);
                  v = g.successors(v)[0];
                }
              });
            }
            function findPath(g, postorderNums, v, w) {
              let vPath = [];
              let wPath = [];
              let low = Math.min(postorderNums[v].low, postorderNums[w].low);
              let lim = Math.max(postorderNums[v].lim, postorderNums[w].lim);
              let parent;
              let lca;
              parent = v;
              do {
                parent = g.parent(parent);
                vPath.push(parent);
              } while (parent && (postorderNums[parent].low > low || lim > postorderNums[parent].lim));
              lca = parent;
              parent = w;
              while ((parent = g.parent(parent)) !== lca) wPath.push(parent);
              return {
                path: vPath.concat(wPath.reverse()),
                lca
              };
            }
            function postorder(g) {
              let result = {};
              let lim = 0;
              function dfs$4(v) {
                let low = lim;
                g.children(v).forEach(dfs$4);
                result[v] = {
                  low,
                  lim: lim++
                };
              }
              g.children().forEach(dfs$4);
              return result;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/nesting-graph.js
        require_nesting_graph = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/nesting-graph.js": (exports, module) => {
            var util$10 = require_util$1();
            module.exports = {
              run,
              cleanup
            };
            function run(g) {
              let root$2 = util$10.addDummyNode(g, "root", {}, "_root");
              let depths = treeDepths(g);
              let depthsArr = Object.values(depths);
              let height = util$10.applyWithChunking(Math.max, depthsArr) - 1;
              let nodeSep = 2 * height + 1;
              g.graph().nestingRoot = root$2;
              g.edges().forEach(e => g.edge(e).minlen *= nodeSep);
              let weight = sumWeights(g) + 1;
              g.children().forEach(child => dfs(g, root$2, nodeSep, weight, height, depths, child));
              g.graph().nodeRankFactor = nodeSep;
            }
            function dfs(g, root$2, nodeSep, weight, height, depths, v) {
              let children$2 = g.children(v);
              if (!children$2.length) {
                if (v !== root$2) g.setEdge(root$2, v, {
                  weight: 0,
                  minlen: nodeSep
                });
                return;
              }
              let top$1 = util$10.addBorderNode(g, "_bt");
              let bottom$2 = util$10.addBorderNode(g, "_bb");
              let label$7 = g.node(v);
              g.setParent(top$1, v);
              label$7.borderTop = top$1;
              g.setParent(bottom$2, v);
              label$7.borderBottom = bottom$2;
              children$2.forEach(child => {
                dfs(g, root$2, nodeSep, weight, height, depths, child);
                let childNode = g.node(child);
                let childTop = childNode.borderTop ? childNode.borderTop : child;
                let childBottom = childNode.borderBottom ? childNode.borderBottom : child;
                let thisWeight = childNode.borderTop ? weight : 2 * weight;
                let minlen = childTop !== childBottom ? 1 : height - depths[v] + 1;
                g.setEdge(top$1, childTop, {
                  weight: thisWeight,
                  minlen,
                  nestingEdge: true
                });
                g.setEdge(childBottom, bottom$2, {
                  weight: thisWeight,
                  minlen,
                  nestingEdge: true
                });
              });
              if (!g.parent(v)) g.setEdge(root$2, top$1, {
                weight: 0,
                minlen: height + depths[v]
              });
            }
            function treeDepths(g) {
              var depths = {};
              function dfs$4(v, depth) {
                var children$2 = g.children(v);
                if (children$2 && children$2.length) children$2.forEach(child => dfs$4(child, depth + 1));
                depths[v] = depth;
              }
              g.children().forEach(v => dfs$4(v, 1));
              return depths;
            }
            function sumWeights(g) {
              return g.edges().reduce((acc, e) => acc + g.edge(e).weight, 0);
            }
            function cleanup(g) {
              var graphLabel = g.graph();
              g.removeNode(graphLabel.nestingRoot);
              delete graphLabel.nestingRoot;
              g.edges().forEach(e => {
                if (g.edge(e).nestingEdge) g.removeEdge(e);
              });
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/add-border-segments.js
        require_add_border_segments = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/add-border-segments.js": (exports, module) => {
            var util$9 = require_util$1();
            module.exports = addBorderSegments$1;
            function addBorderSegments$1(g) {
              function dfs$4(v) {
                let children$2 = g.children(v);
                let node$1 = g.node(v);
                if (children$2.length) children$2.forEach(dfs$4);
                if (Object.hasOwn(node$1, "minRank")) {
                  node$1.borderLeft = [];
                  node$1.borderRight = [];
                  for (let rank$2 = node$1.minRank, maxRank$1 = node$1.maxRank + 1; rank$2 < maxRank$1; ++rank$2) {
                    addBorderNode(g, "borderLeft", "_bl", v, node$1, rank$2);
                    addBorderNode(g, "borderRight", "_br", v, node$1, rank$2);
                  }
                }
              }
              g.children().forEach(dfs$4);
            }
            function addBorderNode(g, prop, prefix, sg, sgNode, rank$2) {
              let label$7 = {
                width: 0,
                height: 0,
                rank: rank$2,
                borderType: prop
              };
              let prev = sgNode[prop][rank$2 - 1];
              let curr = util$9.addDummyNode(g, "border", label$7, prefix);
              sgNode[prop][rank$2] = curr;
              g.setParent(curr, sg);
              if (prev) g.setEdge(prev, curr, {
                weight: 1
              });
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/coordinate-system.js
        require_coordinate_system = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/coordinate-system.js": (exports, module) => {
            module.exports = {
              adjust,
              undo
            };
            function adjust(g) {
              let rankDir = g.graph().rankdir.toLowerCase();
              if (rankDir === "lr" || rankDir === "rl") swapWidthHeight(g);
            }
            function undo(g) {
              let rankDir = g.graph().rankdir.toLowerCase();
              if (rankDir === "bt" || rankDir === "rl") reverseY(g);
              if (rankDir === "lr" || rankDir === "rl") {
                swapXY(g);
                swapWidthHeight(g);
              }
            }
            function swapWidthHeight(g) {
              g.nodes().forEach(v => swapWidthHeightOne(g.node(v)));
              g.edges().forEach(e => swapWidthHeightOne(g.edge(e)));
            }
            function swapWidthHeightOne(attrs) {
              let w = attrs.width;
              attrs.width = attrs.height;
              attrs.height = w;
            }
            function reverseY(g) {
              g.nodes().forEach(v => reverseYOne(g.node(v)));
              g.edges().forEach(e => {
                let edge$2 = g.edge(e);
                edge$2.points.forEach(reverseYOne);
                if (Object.hasOwn(edge$2, "y")) reverseYOne(edge$2);
              });
            }
            function reverseYOne(attrs) {
              attrs.y = -attrs.y;
            }
            function swapXY(g) {
              g.nodes().forEach(v => swapXYOne(g.node(v)));
              g.edges().forEach(e => {
                let edge$2 = g.edge(e);
                edge$2.points.forEach(swapXYOne);
                if (Object.hasOwn(edge$2, "x")) swapXYOne(edge$2);
              });
            }
            function swapXYOne(attrs) {
              let x = attrs.x;
              attrs.x = attrs.y;
              attrs.y = x;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/order/init-order.js
        require_init_order = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/order/init-order.js": (exports, module) => {
            var util$8 = require_util$1();
            module.exports = initOrder$1;
            function initOrder$1(g) {
              let visited = {};
              let simpleNodes = g.nodes().filter(v => !g.children(v).length);
              let simpleNodesRanks = simpleNodes.map(v => g.node(v).rank);
              let maxRank$1 = util$8.applyWithChunking(Math.max, simpleNodesRanks);
              let layers = util$8.range(maxRank$1 + 1).map(() => []);
              function dfs$4(v) {
                if (visited[v]) return;
                visited[v] = true;
                layers[g.node(v).rank].push(v);
                g.successors(v).forEach(dfs$4);
              }
              simpleNodes.sort((a, b) => g.node(a).rank - g.node(b).rank).forEach(dfs$4);
              return layers;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/order/cross-count.js
        require_cross_count = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/order/cross-count.js": (exports, module) => {
            var zipObject = require_util$1().zipObject;
            module.exports = crossCount$1;
            function crossCount$1(g, layering) {
              let cc = 0;
              for (let i = 1; i < layering.length; ++i) cc += twoLayerCrossCount(g, layering[i - 1], layering[i]);
              return cc;
            }
            function twoLayerCrossCount(g, northLayer, southLayer) {
              let southPos = zipObject(southLayer, southLayer.map((v, i) => i));
              let southEntries = northLayer.flatMap(v => {
                return g.outEdges(v).map(e => {
                  return {
                    pos: southPos[e.w],
                    weight: g.edge(e).weight
                  };
                }).sort((a, b) => a.pos - b.pos);
              });
              let firstIndex = 1;
              while (firstIndex < southLayer.length) firstIndex <<= 1;
              let treeSize = 2 * firstIndex - 1;
              firstIndex -= 1;
              let tree = new Array(treeSize).fill(0);
              let cc = 0;
              southEntries.forEach(entry => {
                let index = entry.pos + firstIndex;
                tree[index] += entry.weight;
                let weightSum = 0;
                while (index > 0) {
                  if (index % 2) weightSum += tree[index + 1];
                  index = index - 1 >> 1;
                  tree[index] += entry.weight;
                }
                cc += entry.weight * weightSum;
              });
              return cc;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/order/barycenter.js
        require_barycenter = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/order/barycenter.js": (exports, module) => {
            module.exports = barycenter$1;
            function barycenter$1(g, movable = []) {
              return movable.map(v => {
                let inV = g.inEdges(v);
                if (!inV.length) return {
                  v
                };else {
                  let result = inV.reduce((acc, e) => {
                    let edge$2 = g.edge(e),
                      nodeU = g.node(e.v);
                    return {
                      sum: acc.sum + edge$2.weight * nodeU.order,
                      weight: acc.weight + edge$2.weight
                    };
                  }, {
                    sum: 0,
                    weight: 0
                  });
                  return {
                    v,
                    barycenter: result.sum / result.weight,
                    weight: result.weight
                  };
                }
              });
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/order/resolve-conflicts.js
        require_resolve_conflicts = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/order/resolve-conflicts.js": (exports, module) => {
            var util$7 = require_util$1();
            module.exports = resolveConflicts$1;
            function resolveConflicts$1(entries, cg) {
              let mappedEntries = {};
              entries.forEach((entry, i) => {
                let tmp = mappedEntries[entry.v] = {
                  indegree: 0,
                  "in": [],
                  out: [],
                  vs: [entry.v],
                  i
                };
                if (entry.barycenter !== void 0) {
                  tmp.barycenter = entry.barycenter;
                  tmp.weight = entry.weight;
                }
              });
              cg.edges().forEach(e => {
                let entryV = mappedEntries[e.v];
                let entryW = mappedEntries[e.w];
                if (entryV !== void 0 && entryW !== void 0) {
                  entryW.indegree++;
                  entryV.out.push(mappedEntries[e.w]);
                }
              });
              return doResolveConflicts(Object.values(mappedEntries).filter(entry => !entry.indegree));
            }
            function doResolveConflicts(sourceSet) {
              let entries = [];
              function handleIn(vEntry) {
                return uEntry => {
                  if (uEntry.merged) return;
                  if (uEntry.barycenter === void 0 || vEntry.barycenter === void 0 || uEntry.barycenter >= vEntry.barycenter) mergeEntries(vEntry, uEntry);
                };
              }
              function handleOut(vEntry) {
                return wEntry => {
                  wEntry["in"].push(vEntry);
                  if (--wEntry.indegree === 0) sourceSet.push(wEntry);
                };
              }
              while (sourceSet.length) {
                let entry = sourceSet.pop();
                entries.push(entry);
                entry["in"].reverse().forEach(handleIn(entry));
                entry.out.forEach(handleOut(entry));
              }
              return entries.filter(entry => !entry.merged).map(entry => {
                return util$7.pick(entry, ["vs", "i", "barycenter", "weight"]);
              });
            }
            function mergeEntries(target$1, source) {
              let sum = 0;
              let weight = 0;
              if (target$1.weight) {
                sum += target$1.barycenter * target$1.weight;
                weight += target$1.weight;
              }
              if (source.weight) {
                sum += source.barycenter * source.weight;
                weight += source.weight;
              }
              target$1.vs = source.vs.concat(target$1.vs);
              target$1.barycenter = sum / weight;
              target$1.weight = weight;
              target$1.i = Math.min(source.i, target$1.i);
              source.merged = true;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/order/sort.js
        require_sort = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/order/sort.js": (exports, module) => {
            var util$6 = require_util$1();
            module.exports = sort$1;
            function sort$1(entries, biasRight) {
              let parts = util$6.partition(entries, entry => {
                return Object.hasOwn(entry, "barycenter");
              });
              let sortable = parts.lhs,
                unsortable = parts.rhs.sort((a, b) => b.i - a.i),
                vs = [],
                sum = 0,
                weight = 0,
                vsIndex = 0;
              sortable.sort(compareWithBias(!!biasRight));
              vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
              sortable.forEach(entry => {
                vsIndex += entry.vs.length;
                vs.push(entry.vs);
                sum += entry.barycenter * entry.weight;
                weight += entry.weight;
                vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
              });
              let result = {
                vs: vs.flat(true)
              };
              if (weight) {
                result.barycenter = sum / weight;
                result.weight = weight;
              }
              return result;
            }
            function consumeUnsortable(vs, unsortable, index) {
              let last;
              while (unsortable.length && (last = unsortable[unsortable.length - 1]).i <= index) {
                unsortable.pop();
                vs.push(last.vs);
                index++;
              }
              return index;
            }
            function compareWithBias(bias) {
              return (entryV, entryW) => {
                if (entryV.barycenter < entryW.barycenter) return -1;else if (entryV.barycenter > entryW.barycenter) return 1;
                return !bias ? entryV.i - entryW.i : entryW.i - entryV.i;
              };
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/order/sort-subgraph.js
        require_sort_subgraph = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/order/sort-subgraph.js": (exports, module) => {
            var barycenter = require_barycenter();
            var resolveConflicts = require_resolve_conflicts();
            var sort = require_sort();
            module.exports = sortSubgraph$1;
            function sortSubgraph$1(g, v, cg, biasRight) {
              let movable = g.children(v);
              let node$1 = g.node(v);
              let bl = node$1 ? node$1.borderLeft : void 0;
              let br = node$1 ? node$1.borderRight : void 0;
              let subgraphs = {};
              if (bl) movable = movable.filter(w => w !== bl && w !== br);
              let barycenters = barycenter(g, movable);
              barycenters.forEach(entry => {
                if (g.children(entry.v).length) {
                  let subgraphResult = sortSubgraph$1(g, entry.v, cg, biasRight);
                  subgraphs[entry.v] = subgraphResult;
                  if (Object.hasOwn(subgraphResult, "barycenter")) mergeBarycenters(entry, subgraphResult);
                }
              });
              let entries = resolveConflicts(barycenters, cg);
              expandSubgraphs(entries, subgraphs);
              let result = sort(entries, biasRight);
              if (bl) {
                result.vs = [bl, result.vs, br].flat(true);
                if (g.predecessors(bl).length) {
                  let blPred = g.node(g.predecessors(bl)[0]),
                    brPred = g.node(g.predecessors(br)[0]);
                  if (!Object.hasOwn(result, "barycenter")) {
                    result.barycenter = 0;
                    result.weight = 0;
                  }
                  result.barycenter = (result.barycenter * result.weight + blPred.order + brPred.order) / (result.weight + 2);
                  result.weight += 2;
                }
              }
              return result;
            }
            function expandSubgraphs(entries, subgraphs) {
              entries.forEach(entry => {
                entry.vs = entry.vs.flatMap(v => {
                  if (subgraphs[v]) return subgraphs[v].vs;
                  return v;
                });
              });
            }
            function mergeBarycenters(target$1, other) {
              if (target$1.barycenter !== void 0) {
                target$1.barycenter = (target$1.barycenter * target$1.weight + other.barycenter * other.weight) / (target$1.weight + other.weight);
                target$1.weight += other.weight;
              } else {
                target$1.barycenter = other.barycenter;
                target$1.weight = other.weight;
              }
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/order/build-layer-graph.js
        require_build_layer_graph = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/order/build-layer-graph.js": (exports, module) => {
            var Graph$4 = require_graphlib().Graph;
            var util$5 = require_util$1();
            module.exports = buildLayerGraph$1;
            function buildLayerGraph$1(g, rank$2, relationship) {
              let root$2 = createRootNode(g),
                result = new Graph$4({
                  compound: true
                }).setGraph({
                  root: root$2
                }).setDefaultNodeLabel(v => g.node(v));
              g.nodes().forEach(v => {
                let node$1 = g.node(v),
                  parent = g.parent(v);
                if (node$1.rank === rank$2 || node$1.minRank <= rank$2 && rank$2 <= node$1.maxRank) {
                  result.setNode(v);
                  result.setParent(v, parent || root$2);
                  g[relationship](v).forEach(e => {
                    let u = e.v === v ? e.w : e.v,
                      edge$2 = result.edge(u, v),
                      weight = edge$2 !== void 0 ? edge$2.weight : 0;
                    result.setEdge(u, v, {
                      weight: g.edge(e).weight + weight
                    });
                  });
                  if (Object.hasOwn(node$1, "minRank")) result.setNode(v, {
                    borderLeft: node$1.borderLeft[rank$2],
                    borderRight: node$1.borderRight[rank$2]
                  });
                }
              });
              return result;
            }
            function createRootNode(g) {
              var v;
              while (g.hasNode(v = util$5.uniqueId("_root")));
              return v;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/order/add-subgraph-constraints.js
        require_add_subgraph_constraints = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/order/add-subgraph-constraints.js": (exports, module) => {
            module.exports = addSubgraphConstraints$1;
            function addSubgraphConstraints$1(g, cg, vs) {
              let prev = {},
                rootPrev;
              vs.forEach(v => {
                let child = g.parent(v),
                  parent,
                  prevChild;
                while (child) {
                  parent = g.parent(child);
                  if (parent) {
                    prevChild = prev[parent];
                    prev[parent] = child;
                  } else {
                    prevChild = rootPrev;
                    rootPrev = child;
                  }
                  if (prevChild && prevChild !== child) {
                    cg.setEdge(prevChild, child);
                    return;
                  }
                  child = parent;
                }
              });
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/order/index.js
        require_order = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/order/index.js": (exports, module) => {
            var initOrder = require_init_order();
            var crossCount = require_cross_count();
            var sortSubgraph = require_sort_subgraph();
            var buildLayerGraph = require_build_layer_graph();
            var addSubgraphConstraints = require_add_subgraph_constraints();
            var Graph$3 = require_graphlib().Graph;
            var util$4 = require_util$1();
            module.exports = order$1;
            function order$1(g, opts) {
              if (opts && typeof opts.customOrder === "function") {
                opts.customOrder(g, order$1);
                return;
              }
              let maxRank$1 = util$4.maxRank(g),
                downLayerGraphs = buildLayerGraphs(g, util$4.range(1, maxRank$1 + 1), "inEdges"),
                upLayerGraphs = buildLayerGraphs(g, util$4.range(maxRank$1 - 1, -1, -1), "outEdges");
              let layering = initOrder(g);
              assignOrder(g, layering);
              if (opts && opts.disableOptimalOrderHeuristic) return;
              let bestCC = Number.POSITIVE_INFINITY,
                best;
              for (let i = 0, lastBest = 0; lastBest < 4; ++i, ++lastBest) {
                sweepLayerGraphs(i % 2 ? downLayerGraphs : upLayerGraphs, i % 4 >= 2);
                layering = util$4.buildLayerMatrix(g);
                let cc = crossCount(g, layering);
                if (cc < bestCC) {
                  lastBest = 0;
                  best = Object.assign({}, layering);
                  bestCC = cc;
                }
              }
              assignOrder(g, best);
            }
            function buildLayerGraphs(g, ranks, relationship) {
              return ranks.map(function (rank$2) {
                return buildLayerGraph(g, rank$2, relationship);
              });
            }
            function sweepLayerGraphs(layerGraphs, biasRight) {
              let cg = new Graph$3();
              layerGraphs.forEach(function (lg) {
                let root$2 = lg.graph().root;
                let sorted = sortSubgraph(lg, root$2, cg, biasRight);
                sorted.vs.forEach((v, i) => lg.node(v).order = i);
                addSubgraphConstraints(lg, cg, sorted.vs);
              });
            }
            function assignOrder(g, layering) {
              Object.values(layering).forEach(layer => layer.forEach((v, i) => g.node(v).order = i));
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/position/bk.js
        require_bk = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/position/bk.js": (exports, module) => {
            var Graph$2 = require_graphlib().Graph;
            var util$3 = require_util$1();
            module.exports = {
              positionX: positionX$1,
              findType1Conflicts,
              findType2Conflicts,
              addConflict,
              hasConflict,
              verticalAlignment,
              horizontalCompaction,
              alignCoordinates,
              findSmallestWidthAlignment,
              balance
            };
            function findType1Conflicts(g, layering) {
              let conflicts = {};
              function visitLayer(prevLayer, layer) {
                let k0 = 0,
                  scanPos = 0,
                  prevLayerLength = prevLayer.length,
                  lastNode = layer[layer.length - 1];
                layer.forEach((v, i) => {
                  let w = findOtherInnerSegmentNode(g, v),
                    k1 = w ? g.node(w).order : prevLayerLength;
                  if (w || v === lastNode) {
                    layer.slice(scanPos, i + 1).forEach(scanNode => {
                      g.predecessors(scanNode).forEach(u => {
                        let uLabel = g.node(u),
                          uPos = uLabel.order;
                        if ((uPos < k0 || k1 < uPos) && !(uLabel.dummy && g.node(scanNode).dummy)) addConflict(conflicts, u, scanNode);
                      });
                    });
                    scanPos = i + 1;
                    k0 = k1;
                  }
                });
                return layer;
              }
              layering.length && layering.reduce(visitLayer);
              return conflicts;
            }
            function findType2Conflicts(g, layering) {
              let conflicts = {};
              function scan(south, southPos, southEnd, prevNorthBorder, nextNorthBorder) {
                let v;
                util$3.range(southPos, southEnd).forEach(i => {
                  v = south[i];
                  if (g.node(v).dummy) g.predecessors(v).forEach(u => {
                    let uNode = g.node(u);
                    if (uNode.dummy && (uNode.order < prevNorthBorder || uNode.order > nextNorthBorder)) addConflict(conflicts, u, v);
                  });
                });
              }
              function visitLayer(north, south) {
                let prevNorthPos = -1,
                  nextNorthPos,
                  southPos = 0;
                south.forEach((v, southLookahead) => {
                  if (g.node(v).dummy === "border") {
                    let predecessors = g.predecessors(v);
                    if (predecessors.length) {
                      nextNorthPos = g.node(predecessors[0]).order;
                      scan(south, southPos, southLookahead, prevNorthPos, nextNorthPos);
                      southPos = southLookahead;
                      prevNorthPos = nextNorthPos;
                    }
                  }
                  scan(south, southPos, south.length, nextNorthPos, north.length);
                });
                return south;
              }
              layering.length && layering.reduce(visitLayer);
              return conflicts;
            }
            function findOtherInnerSegmentNode(g, v) {
              if (g.node(v).dummy) return g.predecessors(v).find(u => g.node(u).dummy);
            }
            function addConflict(conflicts, v, w) {
              if (v > w) {
                let tmp = v;
                v = w;
                w = tmp;
              }
              let conflictsV = conflicts[v];
              if (!conflictsV) conflicts[v] = conflictsV = {};
              conflictsV[w] = true;
            }
            function hasConflict(conflicts, v, w) {
              if (v > w) {
                let tmp = v;
                v = w;
                w = tmp;
              }
              return !!conflicts[v] && Object.hasOwn(conflicts[v], w);
            }
            function verticalAlignment(g, layering, conflicts, neighborFn) {
              let root$2 = {},
                align = {},
                pos = {};
              layering.forEach(layer => {
                layer.forEach((v, order$2) => {
                  root$2[v] = v;
                  align[v] = v;
                  pos[v] = order$2;
                });
              });
              layering.forEach(layer => {
                let prevIdx = -1;
                layer.forEach(v => {
                  let ws = neighborFn(v);
                  if (ws.length) {
                    ws = ws.sort((a, b) => pos[a] - pos[b]);
                    let mp = (ws.length - 1) / 2;
                    for (let i = Math.floor(mp), il = Math.ceil(mp); i <= il; ++i) {
                      let w = ws[i];
                      if (align[v] === v && prevIdx < pos[w] && !hasConflict(conflicts, v, w)) {
                        align[w] = v;
                        align[v] = root$2[v] = root$2[w];
                        prevIdx = pos[w];
                      }
                    }
                  }
                });
              });
              return {
                root: root$2,
                align
              };
            }
            function horizontalCompaction(g, layering, root$2, align, reverseSep) {
              let xs = {},
                blockG = buildBlockGraph(g, layering, root$2, reverseSep),
                borderType = reverseSep ? "borderLeft" : "borderRight";
              function iterate(setXsFunc, nextNodesFunc) {
                let stack = blockG.nodes();
                let elem = stack.pop();
                let visited = {};
                while (elem) {
                  if (visited[elem]) setXsFunc(elem);else {
                    visited[elem] = true;
                    stack.push(elem);
                    stack = stack.concat(nextNodesFunc(elem));
                  }
                  elem = stack.pop();
                }
              }
              function pass1(elem) {
                xs[elem] = blockG.inEdges(elem).reduce((acc, e) => {
                  return Math.max(acc, xs[e.v] + blockG.edge(e));
                }, 0);
              }
              function pass2(elem) {
                let min = blockG.outEdges(elem).reduce((acc, e) => {
                  return Math.min(acc, xs[e.w] - blockG.edge(e));
                }, Number.POSITIVE_INFINITY);
                let node$1 = g.node(elem);
                if (min !== Number.POSITIVE_INFINITY && node$1.borderType !== borderType) xs[elem] = Math.max(xs[elem], min);
              }
              iterate(pass1, blockG.predecessors.bind(blockG));
              iterate(pass2, blockG.successors.bind(blockG));
              Object.keys(align).forEach(v => xs[v] = xs[root$2[v]]);
              return xs;
            }
            function buildBlockGraph(g, layering, root$2, reverseSep) {
              let blockGraph = new Graph$2(),
                graphLabel = g.graph(),
                sepFn = sep(graphLabel.nodesep, graphLabel.edgesep, reverseSep);
              layering.forEach(layer => {
                let u;
                layer.forEach(v => {
                  let vRoot = root$2[v];
                  blockGraph.setNode(vRoot);
                  if (u) {
                    var uRoot = root$2[u],
                      prevMax = blockGraph.edge(uRoot, vRoot);
                    blockGraph.setEdge(uRoot, vRoot, Math.max(sepFn(g, v, u), prevMax || 0));
                  }
                  u = v;
                });
              });
              return blockGraph;
            }
            function findSmallestWidthAlignment(g, xss) {
              return Object.values(xss).reduce((currentMinAndXs, xs) => {
                let max = Number.NEGATIVE_INFINITY;
                let min = Number.POSITIVE_INFINITY;
                Object.entries(xs).forEach(([v, x]) => {
                  let halfWidth = width(g, v) / 2;
                  max = Math.max(x + halfWidth, max);
                  min = Math.min(x - halfWidth, min);
                });
                const newMin = max - min;
                if (newMin < currentMinAndXs[0]) currentMinAndXs = [newMin, xs];
                return currentMinAndXs;
              }, [Number.POSITIVE_INFINITY, null])[1];
            }
            function alignCoordinates(xss, alignTo) {
              let alignToVals = Object.values(alignTo),
                alignToMin = util$3.applyWithChunking(Math.min, alignToVals),
                alignToMax = util$3.applyWithChunking(Math.max, alignToVals);
              ["u", "d"].forEach(vert => {
                ["l", "r"].forEach(horiz => {
                  let alignment = vert + horiz,
                    xs = xss[alignment];
                  if (xs === alignTo) return;
                  let xsVals = Object.values(xs);
                  let delta = alignToMin - util$3.applyWithChunking(Math.min, xsVals);
                  if (horiz !== "l") delta = alignToMax - util$3.applyWithChunking(Math.max, xsVals);
                  if (delta) xss[alignment] = util$3.mapValues(xs, x => x + delta);
                });
              });
            }
            function balance(xss, align) {
              return util$3.mapValues(xss.ul, (num, v) => {
                if (align) return xss[align.toLowerCase()][v];else {
                  let xs = Object.values(xss).map(xs$1 => xs$1[v]).sort((a, b) => a - b);
                  return (xs[1] + xs[2]) / 2;
                }
              });
            }
            function positionX$1(g) {
              let layering = util$3.buildLayerMatrix(g);
              let conflicts = Object.assign(findType1Conflicts(g, layering), findType2Conflicts(g, layering));
              let xss = {};
              let adjustedLayering;
              ["u", "d"].forEach(vert => {
                adjustedLayering = vert === "u" ? layering : Object.values(layering).reverse();
                ["l", "r"].forEach(horiz => {
                  if (horiz === "r") adjustedLayering = adjustedLayering.map(inner => {
                    return Object.values(inner).reverse();
                  });
                  let neighborFn = (vert === "u" ? g.predecessors : g.successors).bind(g);
                  let align = verticalAlignment(g, adjustedLayering, conflicts, neighborFn);
                  let xs = horizontalCompaction(g, adjustedLayering, align.root, align.align, horiz === "r");
                  if (horiz === "r") xs = util$3.mapValues(xs, x => -x);
                  xss[vert + horiz] = xs;
                });
              });
              alignCoordinates(xss, findSmallestWidthAlignment(g, xss));
              return balance(xss, g.graph().align);
            }
            function sep(nodeSep, edgeSep, reverseSep) {
              return (g, v, w) => {
                let vLabel = g.node(v);
                let wLabel = g.node(w);
                let sum = 0;
                let delta;
                sum += vLabel.width / 2;
                if (Object.hasOwn(vLabel, "labelpos")) switch (vLabel.labelpos.toLowerCase()) {
                  case "l":
                    delta = -vLabel.width / 2;
                    break;
                  case "r":
                    delta = vLabel.width / 2;
                    break;
                }
                if (delta) sum += reverseSep ? delta : -delta;
                delta = 0;
                sum += (vLabel.dummy ? edgeSep : nodeSep) / 2;
                sum += (wLabel.dummy ? edgeSep : nodeSep) / 2;
                sum += wLabel.width / 2;
                if (Object.hasOwn(wLabel, "labelpos")) switch (wLabel.labelpos.toLowerCase()) {
                  case "l":
                    delta = wLabel.width / 2;
                    break;
                  case "r":
                    delta = -wLabel.width / 2;
                    break;
                }
                if (delta) sum += reverseSep ? delta : -delta;
                delta = 0;
                return sum;
              };
            }
            function width(g, v) {
              return g.node(v).width;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/position/index.js
        require_position = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/position/index.js": (exports, module) => {
            var util$2 = require_util$1();
            var positionX = require_bk().positionX;
            module.exports = position$1;
            function position$1(g) {
              g = util$2.asNonCompoundGraph(g);
              positionY(g);
              Object.entries(positionX(g)).forEach(([v, x]) => g.node(v).x = x);
            }
            function positionY(g) {
              let layering = util$2.buildLayerMatrix(g);
              let rankSep = g.graph().ranksep;
              let prevY = 0;
              layering.forEach(layer => {
                const maxHeight = layer.reduce((acc, v) => {
                  const height = g.node(v).height;
                  if (acc > height) return acc;else return height;
                }, 0);
                layer.forEach(v => g.node(v).y = prevY + maxHeight / 2);
                prevY += maxHeight + rankSep;
              });
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/layout.js
        require_layout = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/layout.js": (exports, module) => {
            var acyclic = require_acyclic();
            var normalize = require_normalize();
            var rank = require_rank();
            var normalizeRanks = require_util$1().normalizeRanks;
            var parentDummyChains = require_parent_dummy_chains();
            var removeEmptyRanks = require_util$1().removeEmptyRanks;
            var nestingGraph = require_nesting_graph();
            var addBorderSegments = require_add_border_segments();
            var coordinateSystem = require_coordinate_system();
            var order = require_order();
            var position = require_position();
            var util$1 = require_util$1();
            var Graph$1 = require_graphlib().Graph;
            module.exports = layout;
            function layout(g, opts) {
              let time$1 = opts && opts.debugTiming ? util$1.time : util$1.notime;
              time$1("layout", () => {
                let layoutGraph = time$1("  buildLayoutGraph", () => buildLayoutGraph(g));
                time$1("  runLayout", () => runLayout(layoutGraph, time$1, opts));
                time$1("  updateInputGraph", () => updateInputGraph(g, layoutGraph));
              });
            }
            function runLayout(g, time$1, opts) {
              time$1("    makeSpaceForEdgeLabels", () => makeSpaceForEdgeLabels(g));
              time$1("    removeSelfEdges", () => removeSelfEdges(g));
              time$1("    acyclic", () => acyclic.run(g));
              time$1("    nestingGraph.run", () => nestingGraph.run(g));
              time$1("    rank", () => rank(util$1.asNonCompoundGraph(g)));
              time$1("    injectEdgeLabelProxies", () => injectEdgeLabelProxies(g));
              time$1("    removeEmptyRanks", () => removeEmptyRanks(g));
              time$1("    nestingGraph.cleanup", () => nestingGraph.cleanup(g));
              time$1("    normalizeRanks", () => normalizeRanks(g));
              time$1("    assignRankMinMax", () => assignRankMinMax(g));
              time$1("    removeEdgeLabelProxies", () => removeEdgeLabelProxies(g));
              time$1("    normalize.run", () => normalize.run(g));
              time$1("    parentDummyChains", () => parentDummyChains(g));
              time$1("    addBorderSegments", () => addBorderSegments(g));
              time$1("    order", () => order(g, opts));
              time$1("    insertSelfEdges", () => insertSelfEdges(g));
              time$1("    adjustCoordinateSystem", () => coordinateSystem.adjust(g));
              time$1("    position", () => position(g));
              time$1("    positionSelfEdges", () => positionSelfEdges(g));
              time$1("    removeBorderNodes", () => removeBorderNodes(g));
              time$1("    normalize.undo", () => normalize.undo(g));
              time$1("    fixupEdgeLabelCoords", () => fixupEdgeLabelCoords(g));
              time$1("    undoCoordinateSystem", () => coordinateSystem.undo(g));
              time$1("    translateGraph", () => translateGraph(g));
              time$1("    assignNodeIntersects", () => assignNodeIntersects(g));
              time$1("    reversePoints", () => reversePointsForReversedEdges(g));
              time$1("    acyclic.undo", () => acyclic.undo(g));
            }
            function updateInputGraph(inputGraph, layoutGraph) {
              inputGraph.nodes().forEach(v => {
                let inputLabel = inputGraph.node(v);
                let layoutLabel = layoutGraph.node(v);
                if (inputLabel) {
                  inputLabel.x = layoutLabel.x;
                  inputLabel.y = layoutLabel.y;
                  inputLabel.rank = layoutLabel.rank;
                  if (layoutGraph.children(v).length) {
                    inputLabel.width = layoutLabel.width;
                    inputLabel.height = layoutLabel.height;
                  }
                }
              });
              inputGraph.edges().forEach(e => {
                let inputLabel = inputGraph.edge(e);
                let layoutLabel = layoutGraph.edge(e);
                inputLabel.points = layoutLabel.points;
                if (Object.hasOwn(layoutLabel, "x")) {
                  inputLabel.x = layoutLabel.x;
                  inputLabel.y = layoutLabel.y;
                }
              });
              inputGraph.graph().width = layoutGraph.graph().width;
              inputGraph.graph().height = layoutGraph.graph().height;
            }
            var graphNumAttrs = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"];
            var graphDefaults = {
              ranksep: 50,
              edgesep: 20,
              nodesep: 50,
              rankdir: "tb"
            };
            var graphAttrs = ["acyclicer", "ranker", "rankdir", "align"];
            var nodeNumAttrs = ["width", "height"];
            var nodeDefaults = {
              width: 0,
              height: 0
            };
            var edgeNumAttrs = ["minlen", "weight", "width", "height", "labeloffset"];
            var edgeDefaults = {
              minlen: 1,
              weight: 1,
              width: 0,
              height: 0,
              labeloffset: 10,
              labelpos: "r"
            };
            var edgeAttrs = ["labelpos"];
            function buildLayoutGraph(inputGraph) {
              let g = new Graph$1({
                multigraph: true,
                compound: true
              });
              let graph = canonicalize(inputGraph.graph());
              g.setGraph(Object.assign({}, graphDefaults, selectNumberAttrs(graph, graphNumAttrs), util$1.pick(graph, graphAttrs)));
              inputGraph.nodes().forEach(v => {
                const newNode = selectNumberAttrs(canonicalize(inputGraph.node(v)), nodeNumAttrs);
                Object.keys(nodeDefaults).forEach(k => {
                  if (newNode[k] === void 0) newNode[k] = nodeDefaults[k];
                });
                g.setNode(v, newNode);
                g.setParent(v, inputGraph.parent(v));
              });
              inputGraph.edges().forEach(e => {
                let edge$2 = canonicalize(inputGraph.edge(e));
                g.setEdge(e, Object.assign({}, edgeDefaults, selectNumberAttrs(edge$2, edgeNumAttrs), util$1.pick(edge$2, edgeAttrs)));
              });
              return g;
            }
            function makeSpaceForEdgeLabels(g) {
              let graph = g.graph();
              graph.ranksep /= 2;
              g.edges().forEach(e => {
                let edge$2 = g.edge(e);
                edge$2.minlen *= 2;
                if (edge$2.labelpos.toLowerCase() !== "c") if (graph.rankdir === "TB" || graph.rankdir === "BT") edge$2.width += edge$2.labeloffset;else edge$2.height += edge$2.labeloffset;
              });
            }
            function injectEdgeLabelProxies(g) {
              g.edges().forEach(e => {
                let edge$2 = g.edge(e);
                if (edge$2.width && edge$2.height) {
                  let v = g.node(e.v);
                  let label$7 = {
                    rank: (g.node(e.w).rank - v.rank) / 2 + v.rank,
                    e
                  };
                  util$1.addDummyNode(g, "edge-proxy", label$7, "_ep");
                }
              });
            }
            function assignRankMinMax(g) {
              let maxRank$1 = 0;
              g.nodes().forEach(v => {
                let node$1 = g.node(v);
                if (node$1.borderTop) {
                  node$1.minRank = g.node(node$1.borderTop).rank;
                  node$1.maxRank = g.node(node$1.borderBottom).rank;
                  maxRank$1 = Math.max(maxRank$1, node$1.maxRank);
                }
              });
              g.graph().maxRank = maxRank$1;
            }
            function removeEdgeLabelProxies(g) {
              g.nodes().forEach(v => {
                let node$1 = g.node(v);
                if (node$1.dummy === "edge-proxy") {
                  g.edge(node$1.e).labelRank = node$1.rank;
                  g.removeNode(v);
                }
              });
            }
            function translateGraph(g) {
              let minX = Number.POSITIVE_INFINITY;
              let maxX = 0;
              let minY = Number.POSITIVE_INFINITY;
              let maxY = 0;
              let graphLabel = g.graph();
              let marginX = graphLabel.marginx || 0;
              let marginY = graphLabel.marginy || 0;
              function getExtremes(attrs) {
                let x = attrs.x;
                let y = attrs.y;
                let w = attrs.width;
                let h$1 = attrs.height;
                minX = Math.min(minX, x - w / 2);
                maxX = Math.max(maxX, x + w / 2);
                minY = Math.min(minY, y - h$1 / 2);
                maxY = Math.max(maxY, y + h$1 / 2);
              }
              g.nodes().forEach(v => getExtremes(g.node(v)));
              g.edges().forEach(e => {
                let edge$2 = g.edge(e);
                if (Object.hasOwn(edge$2, "x")) getExtremes(edge$2);
              });
              minX -= marginX;
              minY -= marginY;
              g.nodes().forEach(v => {
                let node$1 = g.node(v);
                node$1.x -= minX;
                node$1.y -= minY;
              });
              g.edges().forEach(e => {
                let edge$2 = g.edge(e);
                edge$2.points.forEach(p => {
                  p.x -= minX;
                  p.y -= minY;
                });
                if (Object.hasOwn(edge$2, "x")) edge$2.x -= minX;
                if (Object.hasOwn(edge$2, "y")) edge$2.y -= minY;
              });
              graphLabel.width = maxX - minX + marginX;
              graphLabel.height = maxY - minY + marginY;
            }
            function assignNodeIntersects(g) {
              g.edges().forEach(e => {
                let edge$2 = g.edge(e);
                let nodeV = g.node(e.v);
                let nodeW = g.node(e.w);
                let p1, p2;
                if (!edge$2.points) {
                  edge$2.points = [];
                  p1 = nodeW;
                  p2 = nodeV;
                } else {
                  p1 = edge$2.points[0];
                  p2 = edge$2.points[edge$2.points.length - 1];
                }
                edge$2.points.unshift(util$1.intersectRect(nodeV, p1));
                edge$2.points.push(util$1.intersectRect(nodeW, p2));
              });
            }
            function fixupEdgeLabelCoords(g) {
              g.edges().forEach(e => {
                let edge$2 = g.edge(e);
                if (Object.hasOwn(edge$2, "x")) {
                  if (edge$2.labelpos === "l" || edge$2.labelpos === "r") edge$2.width -= edge$2.labeloffset;
                  switch (edge$2.labelpos) {
                    case "l":
                      edge$2.x -= edge$2.width / 2 + edge$2.labeloffset;
                      break;
                    case "r":
                      edge$2.x += edge$2.width / 2 + edge$2.labeloffset;
                      break;
                  }
                }
              });
            }
            function reversePointsForReversedEdges(g) {
              g.edges().forEach(e => {
                let edge$2 = g.edge(e);
                if (edge$2.reversed) edge$2.points.reverse();
              });
            }
            function removeBorderNodes(g) {
              g.nodes().forEach(v => {
                if (g.children(v).length) {
                  let node$1 = g.node(v);
                  let t = g.node(node$1.borderTop);
                  let b = g.node(node$1.borderBottom);
                  let l = g.node(node$1.borderLeft[node$1.borderLeft.length - 1]);
                  let r = g.node(node$1.borderRight[node$1.borderRight.length - 1]);
                  node$1.width = Math.abs(r.x - l.x);
                  node$1.height = Math.abs(b.y - t.y);
                  node$1.x = l.x + node$1.width / 2;
                  node$1.y = t.y + node$1.height / 2;
                }
              });
              g.nodes().forEach(v => {
                if (g.node(v).dummy === "border") g.removeNode(v);
              });
            }
            function removeSelfEdges(g) {
              g.edges().forEach(e => {
                if (e.v === e.w) {
                  var node$1 = g.node(e.v);
                  if (!node$1.selfEdges) node$1.selfEdges = [];
                  node$1.selfEdges.push({
                    e,
                    label: g.edge(e)
                  });
                  g.removeEdge(e);
                }
              });
            }
            function insertSelfEdges(g) {
              util$1.buildLayerMatrix(g).forEach(layer => {
                var orderShift = 0;
                layer.forEach((v, i) => {
                  var node$1 = g.node(v);
                  node$1.order = i + orderShift;
                  (node$1.selfEdges || []).forEach(selfEdge => {
                    util$1.addDummyNode(g, "selfedge", {
                      width: selfEdge.label.width,
                      height: selfEdge.label.height,
                      rank: node$1.rank,
                      order: i + ++orderShift,
                      e: selfEdge.e,
                      label: selfEdge.label
                    }, "_se");
                  });
                  delete node$1.selfEdges;
                });
              });
            }
            function positionSelfEdges(g) {
              g.nodes().forEach(v => {
                var node$1 = g.node(v);
                if (node$1.dummy === "selfedge") {
                  var selfNode = g.node(node$1.e.v);
                  var x = selfNode.x + selfNode.width / 2;
                  var y = selfNode.y;
                  var dx = node$1.x - x;
                  var dy = selfNode.height / 2;
                  g.setEdge(node$1.e, node$1.label);
                  g.removeNode(v);
                  node$1.label.points = [{
                    x: x + 2 * dx / 3,
                    y: y - dy
                  }, {
                    x: x + 5 * dx / 6,
                    y: y - dy
                  }, {
                    x: x + dx,
                    y
                  }, {
                    x: x + 5 * dx / 6,
                    y: y + dy
                  }, {
                    x: x + 2 * dx / 3,
                    y: y + dy
                  }];
                  node$1.label.x = node$1.x;
                  node$1.label.y = node$1.y;
                }
              });
            }
            function selectNumberAttrs(obj, attrs) {
              return util$1.mapValues(util$1.pick(obj, attrs), Number);
            }
            function canonicalize(attrs) {
              var newAttrs = {};
              if (attrs) Object.entries(attrs).forEach(([k, v]) => {
                if (typeof k === "string") k = k.toLowerCase();
                newAttrs[k] = v;
              });
              return newAttrs;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/debug.js
        require_debug = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/debug.js": (exports, module) => {
            var util = require_util$1();
            var Graph = require_graphlib().Graph;
            module.exports = {
              debugOrdering
            };
            /* istanbul ignore next */
            function debugOrdering(g) {
              let layerMatrix = util.buildLayerMatrix(g);
              let h$1 = new Graph({
                compound: true,
                multigraph: true
              }).setGraph({});
              g.nodes().forEach(v => {
                h$1.setNode(v, {
                  label: v
                });
                h$1.setParent(v, "layer" + g.node(v).rank);
              });
              g.edges().forEach(e => h$1.setEdge(e.v, e.w, {}, e.name));
              layerMatrix.forEach((layer, i) => {
                let layerV = "layer" + i;
                h$1.setNode(layerV, {
                  rank: "same"
                });
                layer.reduce((u, v) => {
                  h$1.setEdge(u, v, {
                    style: "invis"
                  });
                  return v;
                });
              });
              return h$1;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/version.js
        require_version = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/lib/version.js": (exports, module) => {
            module.exports = "1.1.4";
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/index.js
        require_dagre = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/@dagrejs+dagre@1.1.4/node_modules/@dagrejs/dagre/index.js": (exports, module) => {
            module.exports = {
              graphlib: require_graphlib(),
              layout: require_layout(),
              debug: require_debug(),
              util: {
                time: require_util$1().time,
                notime: require_util$1().notime
              },
              version: require_version()
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/composables/useCanvasLayout.ts
        import_dagre = /* @__PURE__ */__toESM(require_dagre());
        NODE_X_SPACING = 16 * 8;
        NODE_Y_SPACING = 16 * 6;
        SUBGRAPH_SPACING = 16 * 8;
        AI_X_SPACING = 16 * 3;
        AI_Y_SPACING = 16 * 8;
        STICKY_BOTTOM_PADDING = 16 * 4;
        noop = {
          value: () => {}
        };
        Dispatch.prototype = dispatch.prototype = {
          constructor: Dispatch,
          on: function (typename, callback) {
            var _ = this._,
              T = parseTypenames$1(typename + "", _),
              t,
              i = -1,
              n = T.length;
            if (arguments.length < 2) {
              while (++i < n) if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
              return;
            }
            if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
            while (++i < n) if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);else if (callback == null) for (t in _) _[t] = set$1(_[t], typename.name, null);
            return this;
          },
          copy: function () {
            var copy = {},
              _ = this._;
            for (var t in _) copy[t] = _[t].slice();
            return new Dispatch(copy);
          },
          call: function (type, that) {
            if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
            if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
            for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
          },
          apply: function (type, that, args) {
            if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
            for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
          }
        };
        xhtml = "http://www.w3.org/1999/xhtml";
        namespaces = {
          svg: "http://www.w3.org/2000/svg",
          xhtml,
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/"
        };
        find = Array.prototype.find;
        filter = Array.prototype.filter;
        EnterNode.prototype = {
          constructor: EnterNode,
          appendChild: function (child) {
            return this._parent.insertBefore(child, this._next);
          },
          insertBefore: function (child, next) {
            return this._parent.insertBefore(child, next);
          },
          querySelector: function (selector2) {
            return this._parent.querySelector(selector2);
          },
          querySelectorAll: function (selector2) {
            return this._parent.querySelectorAll(selector2);
          }
        };
        ClassList.prototype = {
          add: function (name) {
            if (this._names.indexOf(name) < 0) {
              this._names.push(name);
              this._node.setAttribute("class", this._names.join(" "));
            }
          },
          remove: function (name) {
            var i = this._names.indexOf(name);
            if (i >= 0) {
              this._names.splice(i, 1);
              this._node.setAttribute("class", this._names.join(" "));
            }
          },
          contains: function (name) {
            return this._names.indexOf(name) >= 0;
          }
        };
        root = [null];
        Selection$1.prototype = selection.prototype = {
          constructor: Selection$1,
          select: selection_select,
          selectAll: selection_selectAll,
          selectChild: selection_selectChild,
          selectChildren: selection_selectChildren,
          filter: selection_filter,
          data: selection_data,
          enter: selection_enter,
          exit: selection_exit,
          join: selection_join,
          merge: selection_merge,
          selection: selection_selection,
          order: selection_order,
          sort: selection_sort,
          call: selection_call,
          nodes: selection_nodes,
          node: selection_node,
          size: selection_size,
          empty: selection_empty,
          each: selection_each,
          attr: selection_attr,
          style: selection_style,
          property: selection_property,
          classed: selection_classed,
          text: selection_text,
          html: selection_html,
          raise: selection_raise,
          lower: selection_lower,
          append: selection_append,
          insert: selection_insert,
          remove: selection_remove,
          clone: selection_clone,
          datum: selection_datum,
          on: selection_on,
          dispatch: selection_dispatch,
          [Symbol.iterator]: selection_iterator
        };
        nonpassivecapture = {
          capture: true,
          passive: false
        };
        darker = .7;
        brighter = 1 / darker;
        reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = /* @__PURE__ */new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = /* @__PURE__ */new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = /* @__PURE__ */new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = /* @__PURE__ */new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = /* @__PURE__ */new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = /* @__PURE__ */new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
        named = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074
        };
        define(Color, color, {
          copy(channels) {
            return Object.assign(new this.constructor(), this, channels);
          },
          displayable() {
            return this.rgb().displayable();
          },
          hex: color_formatHex,
          formatHex: color_formatHex,
          formatHex8: color_formatHex8,
          formatHsl: color_formatHsl,
          formatRgb: color_formatRgb,
          toString: color_formatRgb
        });
        define(Rgb, rgb, extend(Color, {
          brighter(k) {
            k = k == null ? brighter : Math.pow(brighter, k);
            return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
          },
          darker(k) {
            k = k == null ? darker : Math.pow(darker, k);
            return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
          },
          rgb() {
            return this;
          },
          clamp() {
            return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
          },
          displayable() {
            return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
          },
          hex: rgb_formatHex,
          formatHex: rgb_formatHex,
          formatHex8: rgb_formatHex8,
          formatRgb: rgb_formatRgb,
          toString: rgb_formatRgb
        }));
        define(Hsl, hsl, extend(Color, {
          brighter(k) {
            k = k == null ? brighter : Math.pow(brighter, k);
            return new Hsl(this.h, this.s, this.l * k, this.opacity);
          },
          darker(k) {
            k = k == null ? darker : Math.pow(darker, k);
            return new Hsl(this.h, this.s, this.l * k, this.opacity);
          },
          rgb() {
            var h$1 = this.h % 360 + (this.h < 0) * 360,
              s = isNaN(h$1) || isNaN(this.s) ? 0 : this.s,
              l = this.l,
              m2 = l + (l < .5 ? l : 1 - l) * s,
              m1 = 2 * l - m2;
            return new Rgb(hsl2rgb(h$1 >= 240 ? h$1 - 240 : h$1 + 120, m1, m2), hsl2rgb(h$1, m1, m2), hsl2rgb(h$1 < 120 ? h$1 + 240 : h$1 - 120, m1, m2), this.opacity);
          },
          clamp() {
            return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
          },
          displayable() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
          },
          formatHsl() {
            const a = clampa(this.opacity);
            return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
          }
        }));
        constant$1 = x => () => x;
        interpolateRgb = function rgbGamma(y) {
          var color2 = gamma(y);
          function rgb$1(start2, end) {
            var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r),
              g = color2(start2.g, end.g),
              b = color2(start2.b, end.b),
              opacity = nogamma(start2.opacity, end.opacity);
            return function (t) {
              start2.r = r(t);
              start2.g = g(t);
              start2.b = b(t);
              start2.opacity = opacity(t);
              return start2 + "";
            };
          }
          rgb$1.gamma = rgbGamma;
          return rgb$1;
        }(1);
        reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
        degrees = 180 / Math.PI;
        identity$1 = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1
        };
        interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
        interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
        epsilon2 = 1e-12;
        interpolateZoom = function zoomRho(rho, rho2, rho4) {
          function zoom2(p0, p1) {
            var ux0 = p0[0],
              uy0 = p0[1],
              w0 = p0[2],
              ux1 = p1[0],
              uy1 = p1[1],
              w1 = p1[2],
              dx = ux1 - ux0,
              dy = uy1 - uy0,
              d2 = dx * dx + dy * dy,
              i,
              S;
            if (d2 < epsilon2) {
              S = Math.log(w1 / w0) / rho;
              i = function (t) {
                return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
              };
            } else {
              var d1 = Math.sqrt(d2),
                b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
                b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
                r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0);
              S = (Math.log(Math.sqrt(b1 * b1 + 1) - b1) - r0) / rho;
              i = function (t) {
                var s = t * S,
                  coshr0 = cosh(r0),
                  u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
                return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0)];
              };
            }
            i.duration = S * 1e3 * rho / Math.SQRT2;
            return i;
          }
          zoom2.rho = function (_) {
            var _1 = Math.max(.001, +_),
              _2 = _1 * _1;
            return zoomRho(_1, _2, _2 * _2);
          };
          return zoom2;
        }(Math.SQRT2, 2, 4);
        frame = 0, timeout$1 = 0, interval = 0, pokeDelay = 1e3, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) {
          setTimeout(f, 17);
        };
        Timer.prototype = timer.prototype = {
          constructor: Timer,
          restart: function (callback, delay, time$1) {
            if (typeof callback !== "function") throw new TypeError("callback is not a function");
            time$1 = (time$1 == null ? now() : +time$1) + (delay == null ? 0 : +delay);
            if (!this._next && taskTail !== this) {
              if (taskTail) taskTail._next = this;else taskHead = this;
              taskTail = this;
            }
            this._call = callback;
            this._time = time$1;
            sleep();
          },
          stop: function () {
            if (this._call) {
              this._call = null;
              this._time = Infinity;
              sleep();
            }
          }
        };
        emptyOn = dispatch("start", "end", "cancel", "interrupt");
        emptyTween = [];
        CREATED = 0;
        SCHEDULED = 1;
        STARTING = 2;
        STARTED = 3;
        RUNNING = 4;
        ENDING = 5;
        ENDED = 6;
        Selection = selection.prototype.constructor;
        id = 0;
        selection_prototype = selection.prototype;
        Transition$1.prototype = {
          constructor: Transition$1,
          select: transition_select,
          selectAll: transition_selectAll,
          selectChild: selection_prototype.selectChild,
          selectChildren: selection_prototype.selectChildren,
          filter: transition_filter,
          merge: transition_merge,
          selection: transition_selection,
          transition: transition_transition,
          call: selection_prototype.call,
          nodes: selection_prototype.nodes,
          node: selection_prototype.node,
          size: selection_prototype.size,
          empty: selection_prototype.empty,
          each: selection_prototype.each,
          on: transition_on,
          attr: transition_attr,
          attrTween: transition_attrTween,
          style: transition_style,
          styleTween: transition_styleTween,
          text: transition_text,
          textTween: transition_textTween,
          remove: transition_remove,
          tween: transition_tween,
          delay: transition_delay,
          duration: transition_duration,
          ease: transition_ease,
          easeVarying: transition_easeVarying,
          end: transition_end,
          [Symbol.iterator]: selection_prototype[Symbol.iterator]
        };
        defaultTiming = {
          time: null,
          delay: 0,
          duration: 250,
          ease: cubicInOut
        };
        selection.prototype.interrupt = selection_interrupt;
        selection.prototype.transition = selection_transition;
        constant = x => () => x;
        Transform.prototype = {
          constructor: Transform,
          scale: function (k) {
            return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
          },
          translate: function (x, y) {
            return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
          },
          apply: function (point) {
            return [point[0] * this.k + this.x, point[1] * this.k + this.y];
          },
          applyX: function (x) {
            return x * this.k + this.x;
          },
          applyY: function (y) {
            return y * this.k + this.y;
          },
          invert: function (location) {
            return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
          },
          invertX: function (x) {
            return (x - this.x) / this.k;
          },
          invertY: function (y) {
            return (y - this.y) / this.k;
          },
          rescaleX: function (x) {
            return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
          },
          rescaleY: function (y) {
            return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
          },
          toString: function () {
            return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
          }
        };
        identity = new Transform(1, 0, 0);
        Transform.prototype;
        Slots = Symbol("MiniMapSlots");
        _hoisted_1$1$9 = ["id", "x", "y", "rx", "ry", "width", "height", "fill", "stroke", "stroke-width", "shape-rendering"];
        _sfc_main$1$7 = /* @__PURE__ */defineComponent({
          name: "MiniMapNode",
          compatConfig: {
            MODE: 3
          },
          inheritAttrs: false,
          props: {
            id: {},
            type: {},
            selected: {
              type: Boolean
            },
            dragging: {
              type: Boolean
            },
            position: {},
            dimensions: {},
            borderRadius: {},
            color: {},
            shapeRendering: {},
            strokeColor: {},
            strokeWidth: {},
            hidden: {
              type: Boolean
            }
          },
          emits: ["click", "dblclick", "mouseenter", "mousemove", "mouseleave"],
          setup(__props, {
            emit: emits
          }) {
            const props = __props;
            const miniMapSlots = inject(Slots);
            const attrs = useAttrs();
            const style = toRef(() => attrs.style ?? {});
            function onClick(event) {
              emits("click", event);
            }
            function onDblclick(event) {
              emits("dblclick", event);
            }
            function onMouseEnter(event) {
              emits("mouseenter", event);
            }
            function onMouseMove(event) {
              emits("mousemove", event);
            }
            function onMouseLeave(event) {
              emits("mouseleave", event);
            }
            return (_ctx, _cache) => {
              return !_ctx.hidden && _ctx.dimensions.width !== 0 && _ctx.dimensions.height !== 0 ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [unref(miniMapSlots)[`node-${props.type}`] ? (openBlock(), createBlock(resolveDynamicComponent(unref(miniMapSlots)[`node-${props.type}`]), normalizeProps(mergeProps({
                key: 0
              }, {
                ...props,
                ..._ctx.$attrs
              })), null, 16)) : (openBlock(), createElementBlock("rect", mergeProps({
                key: 1,
                id: _ctx.id
              }, _ctx.$attrs, {
                class: ["vue-flow__minimap-node", {
                  selected: _ctx.selected,
                  dragging: _ctx.dragging
                }],
                x: _ctx.position.x,
                y: _ctx.position.y,
                rx: _ctx.borderRadius,
                ry: _ctx.borderRadius,
                width: _ctx.dimensions.width,
                height: _ctx.dimensions.height,
                fill: _ctx.color || style.value.background || style.value.backgroundColor,
                stroke: _ctx.strokeColor,
                "stroke-width": _ctx.strokeWidth,
                "shape-rendering": _ctx.shapeRendering,
                onClick,
                onDblclick,
                onMouseenter: onMouseEnter,
                onMousemove: onMouseMove,
                onMouseleave: onMouseLeave
              }), null, 16, _hoisted_1$1$9))], 64)) : createCommentVNode("", true);
            };
          }
        });
        _hoisted_1$10 = ["width", "height", "viewBox", "aria-labelledby"];
        _hoisted_2$1 = ["id"];
        _hoisted_3$5 = ["d", "fill", "stroke", "stroke-width"];
        _sfc_main = /* @__PURE__ */defineComponent({
          name: "MiniMap",
          compatConfig: {
            MODE: 3
          },
          props: {
            nodeColor: {
              type: [String, Function],
              default: "#e2e2e2"
            },
            nodeStrokeColor: {
              type: [String, Function],
              default: "transparent"
            },
            nodeClassName: {
              type: [String, Function]
            },
            nodeBorderRadius: {
              default: 5
            },
            nodeStrokeWidth: {
              default: 2
            },
            maskColor: {
              default: "rgb(240, 240, 240, 0.6)"
            },
            maskStrokeColor: {
              default: "none"
            },
            maskStrokeWidth: {
              default: 1
            },
            position: {
              default: "bottom-right"
            },
            pannable: {
              type: Boolean,
              default: false
            },
            zoomable: {
              type: Boolean,
              default: false
            },
            width: {},
            height: {},
            ariaLabel: {
              default: "Vue Flow mini map"
            },
            inversePan: {
              type: Boolean,
              default: false
            },
            zoomStep: {
              default: 10
            },
            offsetScale: {
              default: 5
            },
            maskBorderRadius: {
              default: 0
            }
          },
          emits: ["click", "nodeClick", "nodeDblclick", "nodeMouseenter", "nodeMousemove", "nodeMouseleave"],
          setup(__props, {
            emit
          }) {
            const slots = useSlots();
            const attrs = useAttrs();
            const defaultWidth = 200;
            const defaultHeight = 150;
            const {
              id: id2,
              edges,
              viewport,
              translateExtent,
              dimensions,
              emits,
              d3Selection,
              d3Zoom,
              getNodesInitialized
            } = useVueFlow();
            const el = ref();
            provide(Slots, slots);
            const elementWidth = toRef(() => {
              var _a;
              return __props.width ?? ((_a = attrs.style) == null ? void 0 : _a.width) ?? defaultWidth;
            });
            const elementHeight = toRef(() => {
              var _a;
              return __props.height ?? ((_a = attrs.style) == null ? void 0 : _a.height) ?? defaultHeight;
            });
            const shapeRendering = typeof window === "undefined" || !!window.chrome ? "crispEdges" : "geometricPrecision";
            const nodeColorFunc = computed(() => typeof __props.nodeColor === "string" ? () => __props.nodeColor : __props.nodeColor);
            const nodeStrokeColorFunc = computed(() => typeof __props.nodeStrokeColor === "string" ? () => __props.nodeStrokeColor : __props.nodeStrokeColor);
            const nodeClassNameFunc = computed(() => typeof __props.nodeClassName === "string" ? () => __props.nodeClassName : typeof __props.nodeClassName === "function" ? __props.nodeClassName : () => "");
            const bb = computed(() => getRectOfNodes(getNodesInitialized.value));
            const viewBB = computed(() => ({
              x: -viewport.value.x / viewport.value.zoom,
              y: -viewport.value.y / viewport.value.zoom,
              width: dimensions.value.width / viewport.value.zoom,
              height: dimensions.value.height / viewport.value.zoom
            }));
            const boundingRect = computed(() => getNodesInitialized.value && getNodesInitialized.value.length ? getBoundsofRects(bb.value, viewBB.value) : viewBB.value);
            const viewScale = computed(() => {
              const scaledWidth = boundingRect.value.width / elementWidth.value;
              const scaledHeight = boundingRect.value.height / elementHeight.value;
              return Math.max(scaledWidth, scaledHeight);
            });
            const viewBox = computed(() => {
              const viewWidth = viewScale.value * elementWidth.value;
              const viewHeight = viewScale.value * elementHeight.value;
              const offset = __props.offsetScale * viewScale.value;
              return {
                offset,
                x: boundingRect.value.x - (viewWidth - boundingRect.value.width) / 2 - offset,
                y: boundingRect.value.y - (viewHeight - boundingRect.value.height) / 2 - offset,
                width: viewWidth + offset * 2,
                height: viewHeight + offset * 2
              };
            });
            const d = computed(() => {
              if (!viewBox.value.x || !viewBox.value.y) return "";
              return `
    M${viewBox.value.x - viewBox.value.offset},${viewBox.value.y - viewBox.value.offset}
    h${viewBox.value.width + viewBox.value.offset * 2}
    v${viewBox.value.height + viewBox.value.offset * 2}
    h${-viewBox.value.width - viewBox.value.offset * 2}z
    M${viewBB.value.x + __props.maskBorderRadius},${viewBB.value.y}
    h${viewBB.value.width - 2 * __props.maskBorderRadius}
    a${__props.maskBorderRadius},${__props.maskBorderRadius} 0 0 1 ${__props.maskBorderRadius},${__props.maskBorderRadius}
    v${viewBB.value.height - 2 * __props.maskBorderRadius}
    a${__props.maskBorderRadius},${__props.maskBorderRadius} 0 0 1 -${__props.maskBorderRadius},${__props.maskBorderRadius}
    h${-(viewBB.value.width - 2 * __props.maskBorderRadius)}
    a${__props.maskBorderRadius},${__props.maskBorderRadius} 0 0 1 -${__props.maskBorderRadius},-${__props.maskBorderRadius}
    v${-(viewBB.value.height - 2 * __props.maskBorderRadius)}
    a${__props.maskBorderRadius},${__props.maskBorderRadius} 0 0 1 ${__props.maskBorderRadius},-${__props.maskBorderRadius}z`;
            });
            watchEffect(onCleanup => {
              if (el.value) {
                const selection2 = select(el.value);
                const zoomHandler = event => {
                  if (event.sourceEvent.type !== "wheel" || !d3Selection.value || !d3Zoom.value) return;
                  const pinchDelta = -event.sourceEvent.deltaY * (event.sourceEvent.deltaMode === 1 ? .05 : event.sourceEvent.deltaMode ? 1 : .002) * __props.zoomStep;
                  const zoom2 = viewport.value.zoom * 2 ** pinchDelta;
                  d3Zoom.value.scaleTo(d3Selection.value, zoom2);
                };
                const panHandler = event => {
                  if (event.sourceEvent.type !== "mousemove" || !d3Selection.value || !d3Zoom.value) return;
                  const moveScale = viewScale.value * Math.max(1, viewport.value.zoom) * (__props.inversePan ? -1 : 1);
                  const position$3 = {
                    x: viewport.value.x - event.sourceEvent.movementX * moveScale,
                    y: viewport.value.y - event.sourceEvent.movementY * moveScale
                  };
                  const extent = [[0, 0], [dimensions.value.width, dimensions.value.height]];
                  const nextTransform = identity.translate(position$3.x, position$3.y).scale(viewport.value.zoom);
                  const constrainedTransform = d3Zoom.value.constrain()(nextTransform, extent, translateExtent.value);
                  d3Zoom.value.transform(d3Selection.value, constrainedTransform);
                };
                const zoomAndPanHandler = zoom().on("zoom", __props.pannable ? panHandler : () => {}).on("zoom.wheel", __props.zoomable ? zoomHandler : () => {});
                selection2.call(zoomAndPanHandler);
                onCleanup(() => {
                  selection2.on("zoom", null);
                });
              }
            }, {
              flush: "post"
            });
            function onSvgClick(event) {
              const [x, y] = pointer(event);
              emit("click", {
                event,
                position: {
                  x,
                  y
                }
              });
            }
            function onNodeClick(event, node$1) {
              const param = {
                event,
                node: node$1,
                connectedEdges: getConnectedEdges([node$1], edges.value)
              };
              emits.miniMapNodeClick(param);
              emit("nodeClick", param);
            }
            function onNodeDblClick(event, node$1) {
              const param = {
                event,
                node: node$1,
                connectedEdges: getConnectedEdges([node$1], edges.value)
              };
              emits.miniMapNodeDoubleClick(param);
              emit("nodeDblclick", param);
            }
            function onNodeMouseEnter(event, node$1) {
              const param = {
                event,
                node: node$1,
                connectedEdges: getConnectedEdges([node$1], edges.value)
              };
              emits.miniMapNodeMouseEnter(param);
              emit("nodeMouseenter", param);
            }
            function onNodeMouseMove(event, node$1) {
              const param = {
                event,
                node: node$1,
                connectedEdges: getConnectedEdges([node$1], edges.value)
              };
              emits.miniMapNodeMouseMove(param);
              emit("nodeMousemove", param);
            }
            function onNodeMouseLeave(event, node$1) {
              const param = {
                event,
                node: node$1,
                connectedEdges: getConnectedEdges([node$1], edges.value)
              };
              emits.miniMapNodeMouseLeave(param);
              emit("nodeMouseleave", param);
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(_sfc_main$4), {
                position: _ctx.position,
                class: normalizeClass(["vue-flow__minimap", {
                  pannable: _ctx.pannable,
                  zoomable: _ctx.zoomable
                }])
              }, {
                default: withCtx(() => [(openBlock(), createElementBlock("svg", {
                  ref_key: "el",
                  ref: el,
                  width: elementWidth.value,
                  height: elementHeight.value,
                  viewBox: [viewBox.value.x, viewBox.value.y, viewBox.value.width, viewBox.value.height].join(" "),
                  role: "img",
                  "aria-labelledby": `vue-flow__minimap-${unref(id2)}`,
                  onClick: onSvgClick
                }, [_ctx.ariaLabel ? (openBlock(), createElementBlock("title", {
                  key: 0,
                  id: `vue-flow__minimap-${unref(id2)}`
                }, toDisplayString(_ctx.ariaLabel), 9, _hoisted_2$1)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(getNodesInitialized), node$1 => {
                  return openBlock(), createBlock(_sfc_main$1$7, {
                    id: node$1.id,
                    key: node$1.id,
                    position: node$1.computedPosition,
                    dimensions: node$1.dimensions,
                    selected: node$1.selected,
                    dragging: node$1.dragging,
                    style: normalizeStyle(node$1.style),
                    class: normalizeClass(nodeClassNameFunc.value(node$1)),
                    color: nodeColorFunc.value(node$1),
                    "border-radius": _ctx.nodeBorderRadius,
                    "stroke-color": nodeStrokeColorFunc.value(node$1),
                    "stroke-width": _ctx.nodeStrokeWidth,
                    "shape-rendering": unref(shapeRendering),
                    type: node$1.type,
                    hidden: node$1.hidden,
                    onClick: $event => onNodeClick($event, node$1),
                    onDblclick: $event => onNodeDblClick($event, node$1),
                    onMouseenter: $event => onNodeMouseEnter($event, node$1),
                    onMousemove: $event => onNodeMouseMove($event, node$1),
                    onMouseleave: $event => onNodeMouseLeave($event, node$1)
                  }, null, 8, ["id", "position", "dimensions", "selected", "dragging", "style", "class", "color", "border-radius", "stroke-color", "stroke-width", "shape-rendering", "type", "hidden", "onClick", "onDblclick", "onMouseenter", "onMousemove", "onMouseleave"]);
                }), 128)), createBaseVNode("path", {
                  class: "vue-flow__minimap-mask",
                  d: d.value,
                  fill: _ctx.maskColor,
                  stroke: _ctx.maskStrokeColor,
                  "stroke-width": _ctx.maskStrokeWidth,
                  "fill-rule": "evenodd"
                }, null, 8, _hoisted_3$5)], 8, _hoisted_1$10))]),
                _: 1
              }, 8, ["position", "class"]);
            };
          }
        });
        _hoisted_1$8 = ["id"];
        CanvasArrowHeadMarker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasArrowHeadMarker",
          props: {
            id: {}
          },
          setup(__props) {
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("svg", null, [createBaseVNode("defs", null, [createBaseVNode("marker", {
                id: _ctx.id,
                viewBox: "-10 -10 20 20",
                refX: "0",
                refY: "0",
                markerWidth: "12.5",
                markerHeight: "12.5",
                markerUnits: "strokeWidth",
                orient: "auto-start-reverse"
              }, _cache[0] || (_cache[0] = [createBaseVNode("polyline", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                points: "-5,-4 0,0 -5,4 -5,-4",
                "stroke-width": "2",
                stroke: "context-stroke",
                fill: "context-stroke"
              }, null, -1)]), 8, _hoisted_1$8)])]);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/edges/CanvasArrowHeadMarker.vue
        CanvasArrowHeadMarker_default = CanvasArrowHeadMarker_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/features/workflows/canvas/components/elements/edges/utils/getEdgeRenderData.ts
        EDGE_PADDING_BOTTOM = 130;
        EDGE_PADDING_X = 40;
        EDGE_BORDER_RADIUS = 16;
        HANDLE_SIZE = 20;
        isRightOfSourceHandle = (sourceX, targetX) => sourceX - HANDLE_SIZE > targetX;
        CanvasConnectionLine_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasConnectionLine",
          props: {
            sourceX: {},
            sourceY: {},
            sourcePosition: {},
            targetX: {},
            targetY: {},
            targetPosition: {},
            sourceNode: {},
            sourceHandle: {},
            targetNode: {},
            targetHandle: {},
            markerStart: {},
            markerEnd: {},
            connectionStatus: {}
          },
          setup(__props) {
            const props = __props;
            const $style = useCssModule();
            const {
              connectingHandle
            } = useCanvas();
            const connectionType = computed(() => parseCanvasConnectionHandleString(connectingHandle.value?.handleId).type);
            const classes = computed(() => {
              return {
                [$style.edge]: true,
                [$style.visible]: isVisible.value
              };
            });
            const edgeColor = computed(() => {
              if (connectionType.value !== NodeConnectionTypes.Main) return "var(--node-type--supplemental--color)";else return "var(--color--foreground--shade-2)";
            });
            const edgeStyle = computed(() => ({
              ...(connectionType.value === NodeConnectionTypes.Main ? {} : {
                strokeDasharray: "8,8"
              }),
              strokeWidth: 2,
              stroke: edgeColor.value
            }));
            const renderData = computed(() => getEdgeRenderData(props, {
              connectionType: connectionType.value
            }));
            const segments = computed(() => renderData.value.segments);
            /**
            * Used to delay the visibility of the connection line to prevent flickering
            * when the actual user intent is to click the plus button
            */
            const isVisible = ref(false);
            onMounted(() => {
              setTimeout(() => {
                isVisible.value = true;
              }, 300);
            });
            return (_ctx, _cache) => {
              return openBlock(true), createElementBlock(Fragment, null, renderList(segments.value, segment => {
                return openBlock(), createBlock(unref(_sfc_main$d), {
                  key: segment[0],
                  class: normalizeClass(classes.value),
                  style: normalizeStyle(edgeStyle.value),
                  path: segment[0],
                  "marker-end": _ctx.markerEnd
                }, null, 8, ["class", "style", "path", "marker-end"]);
              }), 128);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/edges/CanvasConnectionLine.vue?vue&type=style&index=0&lang.module.scss
        edge$1 = "_edge_cbk94_123";
        visible = "_visible_cbk94_129";
        CanvasConnectionLine_vue_vue_type_style_index_0_lang_module_default = {
          edge: edge$1,
          visible
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/edges/CanvasConnectionLine.vue
        cssModules$4 = {
          "$style": CanvasConnectionLine_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasConnectionLine_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasConnectionLine_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$4]]); //#endregion
        //#region src/app/components/TidyUpIcon.vue
        _sfc_main$6 = {};
        _hoisted_1$7 = {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16"
        };
        TidyUpIcon_default = /* @__PURE__ */__plugin_vue_export_helper_default(_sfc_main$6, [["render", _sfc_render$1]]); //#endregion
        //#region ../../../node_modules/.pnpm/@vue-flow+controls@1.1.2_@vue-flow+core@1.45.0_vue@3.5.13_typescript@5.9.2___vue@3.5.13_typescript@5.9.2_/node_modules/@vue-flow/controls/dist/vue-flow-controls.mjs
        _sfc_main$1$5 = {
          name: "ControlButton",
          compatConfig: {
            MODE: 3
          }
        };
        _export_sfc = (sfc, props) => {
          const target$1 = sfc.__vccOpts || sfc;
          for (const [key, val] of props) target$1[key] = val;
          return target$1;
        };
        _hoisted_1$5 = {
          class: "vue-flow__controls-button"
        };
        ControlButton = /* @__PURE__ */_export_sfc(_sfc_main$1$5, [["render", _sfc_render]]);
        _hoisted_1$4 = {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 32"
        };
        _hoisted_3$4 = [/* @__PURE__ */createBaseVNode("path", {
          d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"
        }, null, -1)];
        PlusIcon = {
          render: render$4
        };
        _hoisted_1$3 = {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 5"
        };
        _hoisted_3$3 = [/* @__PURE__ */createBaseVNode("path", {
          d: "M0 0h32v4.2H0z"
        }, null, -1)];
        MinusIcon = {
          render: render$3
        };
        _hoisted_1$2 = {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 30"
        };
        _hoisted_3$2 = [/* @__PURE__ */createBaseVNode("path", {
          d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0 0 27.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94a.919.919 0 0 1-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"
        }, null, -1)];
        FitView = {
          render: render$2
        };
        _hoisted_1$1 = {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 25 32"
        };
        _hoisted_3$1 = [/* @__PURE__ */createBaseVNode("path", {
          d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"
        }, null, -1)];
        Lock = {
          render: render$1
        };
        _hoisted_1$6 = {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 25 32"
        };
        _hoisted_3 = [/* @__PURE__ */createBaseVNode("path", {
          d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047z"
        }, null, -1)];
        Unlock = {
          render
        };
        _sfc_main$2 = /* @__PURE__ */defineComponent({
          name: "Controls",
          compatConfig: {
            MODE: 3
          },
          props: {
            showZoom: {
              type: Boolean,
              default: true
            },
            showFitView: {
              type: Boolean,
              default: true
            },
            showInteractive: {
              type: Boolean,
              default: true
            },
            fitViewParams: {},
            position: {
              default: () => PanelPosition.BottomLeft
            }
          },
          emits: ["zoomIn", "zoomOut", "fitView", "interactionChange"],
          setup(__props, {
            emit
          }) {
            const {
              nodesDraggable,
              nodesConnectable,
              elementsSelectable,
              setInteractive,
              zoomIn,
              zoomOut,
              fitView,
              viewport,
              minZoom,
              maxZoom
            } = useVueFlow();
            const isInteractive = toRef(() => nodesDraggable.value || nodesConnectable.value || elementsSelectable.value);
            const minZoomReached = toRef(() => viewport.value.zoom <= minZoom.value);
            const maxZoomReached = toRef(() => viewport.value.zoom >= maxZoom.value);
            function onZoomInHandler() {
              zoomIn();
              emit("zoomIn");
            }
            function onZoomOutHandler() {
              zoomOut();
              emit("zoomOut");
            }
            function onFitViewHandler() {
              fitView(__props.fitViewParams);
              emit("fitView");
            }
            function onInteractiveChangeHandler() {
              setInteractive(!isInteractive.value);
              emit("interactionChange", !isInteractive.value);
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(_sfc_main$4), {
                class: "vue-flow__controls",
                position: _ctx.position
              }, {
                default: withCtx(() => [renderSlot(_ctx.$slots, "top"), _ctx.showZoom ? (openBlock(), createElementBlock(Fragment, {
                  key: 0
                }, [renderSlot(_ctx.$slots, "control-zoom-in", {}, () => [createVNode(ControlButton, {
                  class: "vue-flow__controls-zoomin",
                  disabled: maxZoomReached.value,
                  onClick: onZoomInHandler
                }, {
                  default: withCtx(() => [renderSlot(_ctx.$slots, "icon-zoom-in", {}, () => [(openBlock(), createBlock(resolveDynamicComponent(unref(PlusIcon))))])]),
                  _: 3
                }, 8, ["disabled"])]), renderSlot(_ctx.$slots, "control-zoom-out", {}, () => [createVNode(ControlButton, {
                  class: "vue-flow__controls-zoomout",
                  disabled: minZoomReached.value,
                  onClick: onZoomOutHandler
                }, {
                  default: withCtx(() => [renderSlot(_ctx.$slots, "icon-zoom-out", {}, () => [(openBlock(), createBlock(resolveDynamicComponent(unref(MinusIcon))))])]),
                  _: 3
                }, 8, ["disabled"])])], 64)) : createCommentVNode("", true), _ctx.showFitView ? renderSlot(_ctx.$slots, "control-fit-view", {
                  key: 1
                }, () => [createVNode(ControlButton, {
                  class: "vue-flow__controls-fitview",
                  onClick: onFitViewHandler
                }, {
                  default: withCtx(() => [renderSlot(_ctx.$slots, "icon-fit-view", {}, () => [(openBlock(), createBlock(resolveDynamicComponent(unref(FitView))))])]),
                  _: 3
                })]) : createCommentVNode("", true), _ctx.showInteractive ? renderSlot(_ctx.$slots, "control-interactive", {
                  key: 2
                }, () => [_ctx.showInteractive ? (openBlock(), createBlock(ControlButton, {
                  key: 0,
                  class: "vue-flow__controls-interactive",
                  onClick: onInteractiveChangeHandler
                }, {
                  default: withCtx(() => [isInteractive.value ? renderSlot(_ctx.$slots, "icon-unlock", {
                    key: 0
                  }, () => [(openBlock(), createBlock(resolveDynamicComponent(unref(Unlock))))]) : createCommentVNode("", true), !isInteractive.value ? renderSlot(_ctx.$slots, "icon-lock", {
                    key: 1
                  }, () => [(openBlock(), createBlock(resolveDynamicComponent(unref(Lock))))]) : createCommentVNode("", true)]),
                  _: 3
                })) : createCommentVNode("", true)]) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default")]),
                _: 3
              }, 8, ["position"]);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/buttons/CanvasControlButtons.vue?vue&type=script&setup=true&lang.ts
        CanvasControlButtons_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasControlButtons",
          props: {
            zoom: {
              default: 1
            },
            readOnly: {
              type: Boolean,
              default: false
            }
          },
          emits: ["reset-zoom", "zoom-in", "zoom-out", "zoom-to-fit", "tidy-up", "toggle-zoom-mode"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const i18n = useI18n();
            const experimentalNdvStore = useExperimentalNdvStore();
            const isExperimentalNdvActive$3 = computed(() => experimentalNdvStore.isActive(props.zoom));
            const isToggleZoomVisible = computed(() => experimentalNdvStore.isZoomedViewEnabled);
            const isResetZoomVisible = computed(() => !isToggleZoomVisible.value && props.zoom !== 1);
            function onResetZoom() {
              emit("reset-zoom");
            }
            function onZoomIn() {
              emit("zoom-in");
            }
            function onZoomOut() {
              emit("zoom-out");
            }
            function onZoomToFit() {
              emit("zoom-to-fit");
            }
            function onTidyUp() {
              emit("tidy-up");
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(_sfc_main$2), {
                "show-zoom": false,
                "show-fit-view": false
              }, {
                default: withCtx(() => [createVNode(KeyboardShortcutTooltip_default, {
                  label: unref(i18n).baseText("nodeView.zoomToFit"),
                  shortcut: {
                    keys: ["1"]
                  }
                }, {
                  default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                    type: "tertiary",
                    size: "large",
                    icon: "maximize",
                    "data-test-id": "zoom-to-fit",
                    onClick: onZoomToFit
                  })]),
                  _: 1
                }, 8, ["label"]), createVNode(KeyboardShortcutTooltip_default, {
                  label: unref(i18n).baseText("nodeView.zoomIn"),
                  shortcut: {
                    keys: ["+"]
                  }
                }, {
                  default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                    type: "tertiary",
                    size: "large",
                    icon: "zoom-in",
                    "data-test-id": "zoom-in-button",
                    onClick: onZoomIn
                  })]),
                  _: 1
                }, 8, ["label"]), createVNode(KeyboardShortcutTooltip_default, {
                  label: unref(i18n).baseText("nodeView.zoomOut"),
                  shortcut: {
                    keys: ["-"]
                  }
                }, {
                  default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                    type: "tertiary",
                    size: "large",
                    icon: "zoom-out",
                    "data-test-id": "zoom-out-button",
                    onClick: onZoomOut
                  })]),
                  _: 1
                }, 8, ["label"]), isToggleZoomVisible.value ? (openBlock(), createBlock(KeyboardShortcutTooltip_default, {
                  key: 0,
                  label: unref(i18n).baseText(isExperimentalNdvActive$3.value ? "nodeView.leaveZoomMode" : "nodeView.enterZoomMode"),
                  shortcut: {
                    keys: ["Z"]
                  }
                }, {
                  default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                    square: "",
                    type: "tertiary",
                    size: "large",
                    class: normalizeClass(_ctx.$style.iconButton),
                    icon: isExperimentalNdvActive$3.value ? "undo-2" : "crosshair",
                    onClick: _cache[0] || (_cache[0] = $event => emit("toggle-zoom-mode"))
                  }, null, 8, ["class", "icon"])]),
                  _: 1
                }, 8, ["label"])) : createCommentVNode("", true), isResetZoomVisible.value ? (openBlock(), createBlock(KeyboardShortcutTooltip_default, {
                  key: 1,
                  label: unref(i18n).baseText("nodeView.resetZoom"),
                  shortcut: {
                    keys: ["0"]
                  }
                }, {
                  default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                    type: "tertiary",
                    size: "large",
                    icon: "undo-2",
                    "data-test-id": "reset-zoom-button",
                    onClick: onResetZoom
                  })]),
                  _: 1
                }, 8, ["label"])) : createCommentVNode("", true), !_ctx.readOnly ? (openBlock(), createBlock(KeyboardShortcutTooltip_default, {
                  key: 2,
                  label: unref(i18n).baseText("nodeView.tidyUp"),
                  shortcut: {
                    shiftKey: true,
                    altKey: true,
                    keys: ["T"]
                  }
                }, {
                  default: withCtx(() => [createVNode(unref(N8nButton_default), {
                    square: "",
                    type: "tertiary",
                    size: "large",
                    "data-test-id": "tidy-up-button",
                    class: normalizeClass(_ctx.$style.iconButton),
                    onClick: onTidyUp
                  }, {
                    default: withCtx(() => [createVNode(TidyUpIcon_default)]),
                    _: 1
                  }, 8, ["class"])]),
                  _: 1
                }, 8, ["label"])) : createCommentVNode("", true), isExperimentalNdvActive$3.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                  key: 3,
                  placement: "top",
                  content: unref(i18n).baseText("nodeView.expandAllNodes")
                }, {
                  default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                    type: "tertiary",
                    size: "large",
                    icon: "maximize-2",
                    onClick: unref(experimentalNdvStore).expandAllNodes
                  }, null, 8, ["onClick"])]),
                  _: 1
                }, 8, ["content"])) : createCommentVNode("", true), isExperimentalNdvActive$3.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                  key: 4,
                  placement: "top",
                  content: unref(i18n).baseText("nodeView.collapseAllNodes")
                }, {
                  default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                    type: "tertiary",
                    size: "large",
                    icon: "minimize-2",
                    onClick: unref(experimentalNdvStore).collapseAllNodes
                  }, null, 8, ["onClick"])]),
                  _: 1
                }, 8, ["content"])) : createCommentVNode("", true)]),
                _: 1
              });
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/buttons/CanvasControlButtons.vue?vue&type=style&index=0&lang.module.scss
        iconButton = "_iconButton_fx9xi_123";
        CanvasControlButtons_vue_vue_type_style_index_0_lang_module_default = {
          iconButton
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/buttons/CanvasControlButtons.vue
        cssModules$3 = {
          "$style": CanvasControlButtons_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasControlButtons_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasControlButtons_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$3]]); //#endregion
        //#region src/features/workflows/canvas/components/elements/edges/CanvasEdgeToolbar.vue?vue&type=script&setup=true&lang.ts
        CanvasEdgeToolbar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasEdgeToolbar",
          props: {
            type: {}
          },
          emits: ["add", "delete"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const props = __props;
            const $style = useCssModule();
            const i18n = useI18n();
            const classes = computed(() => ({
              [$style.canvasEdgeToolbar]: true
            }));
            const isAddButtonVisible = computed(() => props.type === NodeConnectionTypes.Main);
            function onAdd$2() {
              emit("add");
            }
            function onDelete() {
              emit("delete");
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(classes.value),
                "data-test-id": "canvas-edge-toolbar"
              }, [isAddButtonVisible.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                key: 0,
                class: "canvas-edge-toolbar-button",
                "data-test-id": "add-connection-button",
                type: "tertiary",
                size: "small",
                "icon-size": "medium",
                icon: "plus",
                title: unref(i18n).baseText("node.add"),
                onClick: onAdd$2
              }, null, 8, ["title"])) : createCommentVNode("", true), createVNode(unref(N8nIconButton_default), {
                "data-test-id": "delete-connection-button",
                class: "canvas-edge-toolbar-button",
                type: "tertiary",
                size: "small",
                "icon-size": "medium",
                icon: "trash-2",
                title: unref(i18n).baseText("node.delete"),
                onClick: onDelete
              }, null, 8, ["title"])], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/edges/CanvasEdgeToolbar.vue?vue&type=style&index=0&lang.module.scss
        canvasEdgeToolbar = "_canvasEdgeToolbar_1hcsv_123";
        CanvasEdgeToolbar_vue_vue_type_style_index_0_lang_module_default = {
          canvasEdgeToolbar
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/edges/CanvasEdgeToolbar.vue
        cssModules$2 = {
          "$style": CanvasEdgeToolbar_vue_vue_type_style_index_0_lang_module_default
        };
        CanvasEdgeToolbar_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasEdgeToolbar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/features/workflows/canvas/components/elements/edges/CanvasEdge.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = ["data-source-node-name", "data-target-node-name"];
        _hoisted_2 = ["data-source-node-name", "data-target-node-name", "data-edge-status"];
        delayedHoveredTimeout = 600;
        CanvasEdge_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CanvasEdge",
          props: {
            id: {},
            sourceNode: {},
            targetNode: {},
            source: {},
            target: {},
            type: {},
            label: {},
            style: {},
            selected: {
              type: Boolean
            },
            sourcePosition: {},
            targetPosition: {},
            sourceHandleId: {},
            targetHandleId: {},
            animated: {
              type: Boolean
            },
            updatable: {
              type: Boolean
            },
            markerStart: {},
            markerEnd: {},
            curvature: {},
            interactionWidth: {},
            data: {},
            events: {},
            labelStyle: {},
            labelShowBg: {
              type: Boolean
            },
            labelBgStyle: {},
            labelBgPadding: {},
            labelBgBorderRadius: {},
            sourceX: {},
            sourceY: {},
            targetX: {},
            targetY: {},
            readOnly: {
              type: Boolean
            },
            hovered: {
              type: Boolean
            },
            bringToFront: {
              type: Boolean
            }
          },
          emits: ["add", "delete", "update:label:hovered"],
          setup(__props, {
            emit: __emit
          }) {
            useCssVars(_ctx => ({
              "5e8a20b0": edgeStroke.value
            }));
            const emit = __emit;
            const props = __props;
            const data = toRef(props, "data");
            const $style = useCssModule();
            const connectionType = computed(() => isValidNodeConnectionType(props.data.source.type) ? props.data.source.type : NodeConnectionTypes.Main);
            const delayedHovered = ref(props.hovered);
            const delayedHoveredSetTimeoutRef = ref(null);
            watch(() => props.hovered, isHovered => {
              if (isHovered) {
                if (delayedHoveredSetTimeoutRef.value) clearTimeout(delayedHoveredSetTimeoutRef.value);
                delayedHovered.value = true;
              } else delayedHoveredSetTimeoutRef.value = setTimeout(() => {
                delayedHovered.value = false;
              }, delayedHoveredTimeout);
            }, {
              immediate: true
            });
            const renderToolbar = computed(() => (props.selected || delayedHovered.value) && !props.readOnly);
            const isMainConnection = computed(() => data.value.source.type === NodeConnectionTypes.Main);
            const status$1 = computed(() => props.data.status);
            const edgeColor = computed(() => {
              if (status$1.value === "success") return "var(--color--success)";else if (status$1.value === "pinned") return "var(--color--secondary)";else if (!isMainConnection.value) return "var(--node-type--supplemental--color)";else if (props.selected) return "var(--color--background--shade-2)";else return "var(--color--foreground--shade-2)";
            });
            const edgeStyle = computed(() => ({
              ...props.style,
              ...(isMainConnection.value ? {} : {
                strokeDasharray: "8,8"
              })
            }));
            const edgeStroke = computed(() => delayedHovered.value ? "var(--color--primary)" : edgeColor.value);
            const edgeClasses = computed(() => ({
              [$style.edge]: true,
              hovered: delayedHovered.value,
              "bring-to-front": props.bringToFront
            }));
            const edgeToolbarStyle = computed(() => ({
              transform: `translate(-50%, -50%) translate(${labelPosition.value[0]}px, ${labelPosition.value[1]}px)`,
              ...(delayedHovered.value ? {
                zIndex: 1
              } : {})
            }));
            const edgeToolbarClasses = computed(() => ({
              [$style.edgeLabelWrapper]: true,
              "vue-flow__edge-label": true,
              selected: props.selected,
              [$style.straight]: renderData.value.isConnectorStraight
            }));
            const renderData = computed(() => getEdgeRenderData(props, {
              connectionType: connectionType.value
            }));
            const segments = computed(() => renderData.value.segments);
            const labelPosition = computed(() => renderData.value.labelPosition);
            const connection = computed(() => ({
              source: props.source,
              target: props.target,
              sourceHandle: props.sourceHandleId,
              targetHandle: props.targetHandleId
            }));
            function onAdd$2() {
              emit("add", connection.value);
            }
            function onDelete() {
              emit("delete", connection.value);
            }
            function onEdgeLabelMouseEnter() {
              emit("update:label:hovered", true);
            }
            function onEdgeLabelMouseLeave() {
              emit("update:label:hovered", false);
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock(Fragment, null, [createBaseVNode("g", mergeProps({
                "data-test-id": "edge",
                "data-source-node-name": data.value.source?.node,
                "data-target-node-name": data.value.target?.node
              }, _ctx.$attrs), [renderSlot(_ctx.$slots, "highlight", normalizeProps(guardReactiveProps({
                segments: segments.value
              }))), (openBlock(true), createElementBlock(Fragment, null, renderList(segments.value, (segment, index) => {
                return openBlock(), createBlock(unref(_sfc_main$d), {
                  id: `${_ctx.id}-${index}`,
                  key: segment[0],
                  class: normalizeClass(edgeClasses.value),
                  style: normalizeStyle(edgeStyle.value),
                  path: segment[0],
                  "marker-end": _ctx.markerEnd,
                  "interaction-width": 40
                }, null, 8, ["id", "class", "style", "path", "marker-end"]);
              }), 128))], 16, _hoisted_1), createVNode(unref(_sfc_main$3), null, {
                default: withCtx(() => [createBaseVNode("div", {
                  "data-test-id": "edge-label",
                  "data-source-node-name": data.value.source?.node,
                  "data-target-node-name": data.value.target?.node,
                  "data-edge-status": status$1.value,
                  style: normalizeStyle(edgeToolbarStyle.value),
                  class: normalizeClass(edgeToolbarClasses.value),
                  onMouseenter: onEdgeLabelMouseEnter,
                  onMouseleave: onEdgeLabelMouseLeave
                }, [renderToolbar.value ? (openBlock(), createBlock(CanvasEdgeToolbar_default, {
                  key: 0,
                  type: connectionType.value,
                  onAdd: onAdd$2,
                  onDelete
                }, null, 8, ["type"])) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(unref($style).edgeLabel)
                }, toDisplayString(_ctx.label), 3))], 46, _hoisted_2)]),
                _: 1
              })], 64);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/elements/edges/CanvasEdge.vue?vue&type=style&index=0&lang.module.scss
        edge = "_edge_ahl09_123";
        edgeLabelWrapper = "_edgeLabelWrapper_ahl09_131";
        straight = "_straight_ahl09_137";
        edgeLabel = "_edgeLabel_ahl09_131";
        CanvasEdge_vue_vue_type_style_index_0_lang_module_default = {
          edge,
          edgeLabelWrapper,
          straight,
          edgeLabel
        }; //#endregion
        //#region src/features/workflows/canvas/components/elements/edges/CanvasEdge.vue
        cssModules$1 = {
          "$style": CanvasEdge_vue_vue_type_style_index_0_lang_module_default
        };
        _export("r", CanvasEdge_default = /* @__PURE__ */__plugin_vue_export_helper_default(CanvasEdge_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]])); //#endregion
        //#region src/features/workflows/canvas/components/Canvas.vue?vue&type=script&setup=true&lang.ts
        renameKeyCode = " ";
        defaultZoom = 1;
        minimapVisibilityDelay = 1e3;
        Canvas_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "Canvas",
          props: {
            id: {
              default: "canvas"
            },
            nodes: {
              default: () => []
            },
            connections: {
              default: () => []
            },
            controlsPosition: {
              default: PanelPosition.BottomLeft
            },
            eventBus: {
              default: () => createEventBus()
            },
            readOnly: {
              type: Boolean,
              default: false
            },
            executing: {
              type: Boolean,
              default: false
            },
            keyBindings: {
              type: Boolean,
              default: true
            },
            loading: {
              type: Boolean,
              default: false
            },
            suppressInteraction: {
              type: Boolean,
              default: false
            }
          },
          emits: ["update:modelValue", "update:node:position", "update:nodes:position", "update:node:activated", "update:node:deactivated", "update:node:enabled", "update:node:selected", "update:node:name", "update:node:parameters", "update:node:inputs", "update:node:outputs", "update:logs-open", "update:logs:input-open", "update:logs:output-open", "update:has-range-selection", "click:node", "click:node:add", "run:node", "delete:node", "replace:node", "create:node", "create:sticky", "delete:nodes", "update:nodes:enabled", "copy:nodes", "duplicate:nodes", "update:nodes:pin", "cut:nodes", "delete:connection", "create:connection:start", "create:connection", "create:connection:end", "create:connection:cancelled", "click:connection:add", "click:pane", "run:workflow", "save:workflow", "create:workflow", "drag-and-drop", "tidy-up", "toggle:focus-panel", "viewport:change", "selection:end", "open:sub-workflow", "start-chat", "extract-workflow"],
          setup(__props, {
            expose: __expose,
            emit: __emit
          }) {
            const $style = useCssModule();
            const emit = __emit;
            const props = __props;
            const {
              isMobileDevice,
              controlKeyCode
            } = useDeviceSupport();
            const experimentalNdvStore = useExperimentalNdvStore();
            const isExperimentalNdvActive$3 = computed(() => experimentalNdvStore.isActive(viewport.value.zoom));
            const vueFlow = useVueFlow(props.id);
            const {
              getSelectedNodes: selectedNodes,
              addSelectedNodes,
              removeSelectedNodes,
              viewportRef,
              fitView,
              fitBounds,
              zoomIn,
              zoomOut,
              zoomTo,
              setInteractive,
              elementsSelectable,
              project,
              nodes: graphNodes,
              onPaneReady,
              onNodesInitialized,
              findNode,
              viewport,
              dimensions,
              nodesSelectionActive,
              userSelectionRect,
              setViewport,
              setCenter,
              onEdgeMouseLeave,
              onEdgeMouseEnter,
              onEdgeMouseMove,
              onNodeMouseEnter,
              onNodeMouseLeave
            } = vueFlow;
            const {
              getIncomingNodes,
              getOutgoingNodes,
              getSiblingNodes,
              getDownstreamNodes,
              getUpstreamNodes
            } = useCanvasTraversal(vueFlow);
            const {
              layout: layout$1
            } = useCanvasLayout(props.id, isExperimentalNdvActive$3);
            const isPaneReady = ref(false);
            const classes = computed(() => ({
              [$style.canvas]: true,
              [$style.ready]: !props.loading && isPaneReady.value,
              [$style.isExperimentalNdvActive]: isExperimentalNdvActive$3.value
            }));
            /**
            * Panning and Selection key bindings
            */
            const panningKeyCode = ref(isMobileDevice ? true : [" ", controlKeyCode]);
            const panningMouseButton = ref(isMobileDevice ? true : [1]);
            const selectionKeyCode = ref(isMobileDevice ? "Shift" : true);
            const isInPanningMode = ref(false);
            function switchToPanningMode() {
              selectionKeyCode.value = null;
              panningMouseButton.value = [0, 1];
              isInPanningMode.value = true;
            }
            function switchToSelectionMode() {
              selectionKeyCode.value = true;
              panningMouseButton.value = [1];
              isInPanningMode.value = false;
            }
            onKeyDown(panningKeyCode.value, switchToPanningMode, {
              dedupe: true
            });
            onKeyUp(panningKeyCode.value, switchToSelectionMode);
            /**
            * Rename node key bindings
            * We differentiate between short and long press because the space key is also used for activating panning
            */
            useShortKeyPress(renameKeyCode, () => {
              if (lastSelectedNode.value) emit("update:node:name", lastSelectedNode.value.id);
            }, {
              disabled: toRef(props, "readOnly")
            });
            /**
            * Key bindings
            */
            const disableKeyBindings = computed(() => !props.keyBindings);
            function selectLeftNode(id$1) {
              const previousNode = getIncomingNodes(id$1)[0];
              if (previousNode) onSelectNodes({
                ids: [previousNode.id]
              });
            }
            function selectRightNode(id$1) {
              const nextNode = getOutgoingNodes(id$1)[0];
              if (nextNode) onSelectNodes({
                ids: [nextNode.id]
              });
            }
            function selectLowerSiblingNode(id$1) {
              const siblingNodes = getSiblingNodes(id$1);
              const nextNode = siblingNodes[siblingNodes.findIndex(n => n.id === id$1) + 1] ?? siblingNodes[0];
              if (nextNode) onSelectNodes({
                ids: [nextNode.id]
              });
            }
            function selectUpperSiblingNode(id$1) {
              const siblingNodes = getSiblingNodes(id$1);
              const previousNode = siblingNodes[siblingNodes.findIndex(n => n.id === id$1) - 1] ?? siblingNodes[siblingNodes.length - 1];
              if (previousNode) onSelectNodes({
                ids: [previousNode.id]
              });
            }
            function selectDownstreamNodes(id$1) {
              onSelectNodes({
                ids: [...getDownstreamNodes(id$1).map(node$1 => node$1.id), id$1]
              });
            }
            function selectUpstreamNodes(id$1) {
              onSelectNodes({
                ids: [...getUpstreamNodes(id$1).map(node$1 => node$1.id), id$1]
              });
            }
            function onToggleZoomMode() {
              experimentalNdvStore.toggleZoomMode({
                canvasViewport: viewport.value,
                canvasDimensions: dimensions.value,
                selectedNodes: selectedNodes.value,
                setViewport,
                fitView,
                zoomTo,
                setCenter
              });
            }
            useKeybindings(computed(() => {
              const readOnlyKeymap = {
                ctrl_shift_o: emitWithLastSelectedNode(id$1 => emit("open:sub-workflow", id$1)),
                ctrl_c: {
                  disabled: () => isOutsideSelected(viewportRef.value),
                  run: emitWithSelectedNodes(ids => emit("copy:nodes", ids))
                },
                enter: emitWithLastSelectedNode(id$1 => onSetNodeActivated(id$1)),
                ctrl_a: () => addSelectedNodes(graphNodes.value),
                "shift_+|+|=|shift_Equal|Equal": async () => await onZoomIn(),
                "shift+_|-|_|shift_Minus|Minus": async () => await onZoomOut(),
                0: async () => await onResetZoom(),
                1: async () => await onFitView(),
                ArrowUp: emitWithLastSelectedNode(selectUpperSiblingNode),
                ArrowDown: emitWithLastSelectedNode(selectLowerSiblingNode),
                ArrowLeft: emitWithLastSelectedNode(selectLeftNode),
                ArrowRight: emitWithLastSelectedNode(selectRightNode),
                shift_ArrowLeft: emitWithLastSelectedNode(selectUpstreamNodes),
                shift_ArrowRight: emitWithLastSelectedNode(selectDownstreamNodes),
                l: () => emit("update:logs-open"),
                i: () => emit("update:logs:input-open"),
                o: () => emit("update:logs:output-open"),
                z: onToggleZoomMode
              };
              if (props.readOnly) return readOnlyKeymap;
              return {
                ...readOnlyKeymap,
                ctrl_x: emitWithSelectedNodes(ids => emit("cut:nodes", ids)),
                "delete|backspace": emitWithSelectedNodes(ids => emit("delete:nodes", ids)),
                ctrl_d: emitWithSelectedNodes(ids => emit("duplicate:nodes", ids)),
                d: emitWithSelectedNodes(ids => emit("update:nodes:enabled", ids)),
                p: emitWithSelectedNodes(ids => emit("update:nodes:pin", ids, "keyboard-shortcut")),
                f2: emitWithLastSelectedNode(id$1 => emit("update:node:name", id$1)),
                tab: () => emit("create:node", "tab"),
                shift_s: () => emit("create:sticky"),
                shift_f: () => emit("toggle:focus-panel"),
                ctrl_alt_n: () => emit("create:workflow"),
                ctrl_enter: () => emit("run:workflow"),
                ctrl_s: () => emit("save:workflow"),
                shift_alt_t: async () => await onTidyUp({
                  source: "keyboard-shortcut"
                }),
                alt_x: emitWithSelectedNodes(ids => emit("extract-workflow", ids)),
                c: () => emit("start-chat"),
                r: emitWithLastSelectedNode(id$1 => emit("replace:node", id$1))
              };
            }), {
              disabled: disableKeyBindings
            });
            /**
            * Nodes
            */
            const hasSelection = computed(() => selectedNodes.value.length > 0);
            const selectedNodeIds = computed(() => selectedNodes.value.map(node$1 => node$1.id));
            const lastSelectedNode = ref();
            const hoveredTriggerNode = useCanvasNodeHover(computed(() => props.nodes.filter(node$1 => node$1.data?.render.type === CanvasNodeRenderType.Default && node$1.data.render.options.trigger)), vueFlow, nodeRect => ({
              x: nodeRect.x - nodeRect.width * 2,
              y: nodeRect.y - nodeRect.height,
              width: nodeRect.width * 4,
              height: nodeRect.height * 3
            }));
            watch(selectedNodes, nodes => {
              if (!lastSelectedNode.value || !nodes.find(node$1 => node$1.id === lastSelectedNode.value?.id)) lastSelectedNode.value = nodes[nodes.length - 1];
            });
            function onClickNodeAdd(id$1, handle$5) {
              emit("click:node:add", id$1, handle$5);
            }
            function onUpdateNodesPosition(events) {
              emit("update:nodes:position", events);
            }
            function onUpdateNodePosition(id$1, position$3) {
              emit("update:node:position", id$1, position$3);
            }
            function onNodeDragStop(event) {
              onUpdateNodesPosition(event.nodes.map(({
                id: id$1,
                position: position$3
              }) => ({
                id: id$1,
                position: position$3
              })));
            }
            function onNodeClick({
              event,
              node: node$1
            }) {
              emit("click:node", node$1.id, getProjectedPosition(event));
              if (event.ctrlKey || event.metaKey || selectedNodes.value.length < 2) return;
              onSelectNodes({
                ids: [node$1.id]
              });
            }
            function onSelectionDragStop(event) {
              onUpdateNodesPosition(event.nodes.map(({
                id: id$1,
                position: position$3
              }) => ({
                id: id$1,
                position: position$3
              })));
            }
            function onSelectionEnd(event) {
              if (selectedNodes.value.length === 1) nodesSelectionActive.value = false;
              emit("selection:end", getProjectedPosition(event));
            }
            function onSetNodeActivated(id$1, event) {
              props.eventBus.emit("nodes:action", {
                ids: [id$1],
                action: "update:node:activated"
              });
              emit("update:node:activated", id$1, event);
            }
            function onSetNodeDeactivated(id$1) {
              emit("update:node:deactivated", id$1);
            }
            function clearSelectedNodes() {
              removeSelectedNodes(selectedNodes.value);
            }
            function onSelectNode() {
              emit("update:node:selected", lastSelectedNode.value?.id);
            }
            function onSelectNodes({
              ids,
              panIntoView
            }) {
              clearSelectedNodes();
              addSelectedNodes(ids.map(findNode).filter(isPresent));
              if (panIntoView) {
                const nodes = ids.map(findNode).filter(isPresent);
                if (nodes.length === 0) return;
                setViewport(updateViewportToContainNodes(viewport.value, dimensions.value, nodes, 100), {
                  duration: 200,
                  interpolate: "linear"
                });
              }
            }
            function onToggleNodeEnabled(id$1) {
              emit("update:node:enabled", id$1);
            }
            function onDeleteNode(id$1) {
              emit("delete:node", id$1);
            }
            function onUpdateNodeParameters(id$1, parameters) {
              emit("update:node:parameters", id$1, parameters);
            }
            function onUpdateNodeInputs(id$1) {
              emit("update:node:inputs", id$1);
              nextTick(() => vueFlow.updateNodeInternals([id$1]));
            }
            function onUpdateNodeOutputs(id$1) {
              emit("update:node:outputs", id$1);
              nextTick(() => vueFlow.updateNodeInternals([id$1]));
            }
            function onFocusNode(id$1) {
              const node$1 = vueFlow.nodeLookup.value.get(id$1);
              if (node$1) {
                addSelectedNodes([node$1]);
                experimentalNdvStore.focusNode(node$1, {
                  canvasViewport: viewport.value,
                  canvasDimensions: dimensions.value,
                  setCenter
                });
              }
            }
            /**
            * Connections / Edges
            */
            const connectionCreated = ref(false);
            const connectingHandle = ref();
            const connectedHandle = ref();
            function onConnectStart(handle$5) {
              emit("create:connection:start", handle$5);
              connectingHandle.value = handle$5;
              connectionCreated.value = false;
            }
            function onConnect(connection) {
              emit("create:connection", connection);
              connectedHandle.value = connection;
              connectionCreated.value = true;
            }
            function onConnectEnd(event) {
              if (connectedHandle.value) emit("create:connection:end", connectedHandle.value, event);else if (connectingHandle.value) emit("create:connection:cancelled", connectingHandle.value, getProjectedPosition(event), event);
              connectedHandle.value = void 0;
              connectingHandle.value = void 0;
            }
            function onDeleteConnection(connection) {
              emit("delete:connection", connection);
            }
            function onClickConnectionAdd(connection) {
              emit("click:connection:add", connection);
            }
            const arrowHeadMarkerId = ref("custom-arrow-head");
            /**
            * Edge and Nodes Hovering
            */
            const edgesHoveredById = ref({});
            const edgesBringToFrontById = ref({});
            onEdgeMouseEnter(({
              edge: edge$2
            }) => {
              edgesBringToFrontById.value = {
                [edge$2.id]: true
              };
              edgesHoveredById.value = {
                [edge$2.id]: true
              };
            });
            onEdgeMouseMove(useThrottleFn(({
              edge: edge$2,
              event
            }) => {
              if (edge$2.data.source.type !== NodeConnectionTypes.AiTool) return;
              if (!edge$2.data.maxConnections || edge$2.data.maxConnections > 1) if (getProjectedPosition(event).y - edge$2.targetY < 4 * 16) edgesBringToFrontById.value = {
                [edge$2.id]: false
              };else edgesBringToFrontById.value = {
                [edge$2.id]: true
              };
            }, 100));
            onEdgeMouseLeave(({
              edge: edge$2
            }) => {
              edgesBringToFrontById.value = {
                [edge$2.id]: false
              };
              edgesHoveredById.value = {
                [edge$2.id]: false
              };
            });
            function onUpdateEdgeLabelHovered(id$1, hovered$1) {
              edgesBringToFrontById.value = {
                [id$1]: true
              };
              edgesHoveredById.value[id$1] = hovered$1;
            }
            const nodesHoveredById = ref({});
            onNodeMouseEnter(({
              node: node$1
            }) => {
              nodesHoveredById.value = {
                [node$1.id]: true
              };
            });
            onNodeMouseLeave(({
              node: node$1
            }) => {
              nodesHoveredById.value = {
                [node$1.id]: false
              };
            });
            /**
            * Executions
            */
            function onRunNode(id$1) {
              emit("run:node", id$1);
            }
            /**
            * Emit helpers
            */
            function emitWithSelectedNodes(emitFn) {
              return () => {
                if (hasSelection.value) emitFn(selectedNodeIds.value);
              };
            }
            function emitWithLastSelectedNode(emitFn) {
              return () => {
                if (lastSelectedNode.value) emitFn(lastSelectedNode.value.id);
              };
            }
            /**
            * View
            */
            const isPaneMoving = ref(false);
            useViewportAutoAdjust(viewportRef, viewport, setViewport);
            function getProjectedPosition(event) {
              const bounds = viewportRef.value?.getBoundingClientRect() ?? {
                left: 0,
                top: 0
              };
              const [offsetX, offsetY] = event ? getMousePosition(event) : [0, 0];
              return project({
                x: offsetX - bounds.left,
                y: offsetY - bounds.top
              });
            }
            function onClickPane(event) {
              emit("click:pane", getProjectedPosition(event));
            }
            async function onFitBounds(nodes) {
              await fitBounds(getRectOfNodes(nodes), {
                padding: 2
              });
            }
            async function onFitView() {
              await fitView({
                maxZoom: defaultZoom,
                padding: .2
              });
            }
            async function onZoomTo(zoomLevel) {
              await zoomTo(zoomLevel);
            }
            async function onZoomIn() {
              await zoomIn();
            }
            async function onZoomOut() {
              await zoomOut();
            }
            async function onResetZoom() {
              await onZoomTo(defaultZoom);
            }
            function onPaneMove({
              event
            }) {
              if (isInPanningMode.value || event instanceof WheelEvent) isPaneMoving.value = true;
            }
            function onPaneMoveEnd() {
              isPaneMoving.value = false;
            }
            function onViewportChange() {
              emit("viewport:change", viewport.value, dimensions.value);
            }
            const nodeDataById = computed(() => {
              return props.nodes.reduce((acc, node$1) => {
                acc[node$1.id] = node$1.data;
                return acc;
              }, {});
            });
            /**
            * Context menu
            */
            const contextMenu$1 = useContextMenu();
            function onOpenContextMenu(event, target$1) {
              contextMenu$1.open(event, {
                source: "canvas",
                nodeIds: selectedNodeIds.value,
                ...target$1
              });
            }
            function onOpenSelectionContextMenu({
              event
            }) {
              onOpenContextMenu(event);
            }
            function onOpenNodeContextMenu(id$1, event, source) {
              if (source === "node-button") contextMenu$1.open(event, {
                source,
                nodeId: id$1
              });else if (selectedNodeIds.value.length > 1 && selectedNodeIds.value.includes(id$1)) onOpenContextMenu(event, {
                nodeId: id$1
              });else {
                onSelectNodes({
                  ids: [id$1]
                });
                contextMenu$1.open(event, {
                  source,
                  nodeId: id$1
                });
              }
            }
            async function onContextMenuAction(action, nodeIds) {
              switch (action) {
                case "add_node":
                  return emit("create:node", "context_menu");
                case "add_sticky":
                  return emit("create:sticky");
                case "copy":
                  return emit("copy:nodes", nodeIds);
                case "delete":
                  return emit("delete:nodes", nodeIds);
                case "select_all":
                  return addSelectedNodes(graphNodes.value);
                case "deselect_all":
                  return clearSelectedNodes();
                case "duplicate":
                  return emit("duplicate:nodes", nodeIds);
                case "toggle_pin":
                  return emit("update:nodes:pin", nodeIds, "context-menu");
                case "execute":
                  return emit("run:node", nodeIds[0]);
                case "toggle_activation":
                  return emit("update:nodes:enabled", nodeIds);
                case "open":
                  return onSetNodeActivated(nodeIds[0]);
                case "rename":
                  return emit("update:node:name", nodeIds[0]);
                case "replace":
                  return emit("replace:node", nodeIds[0]);
                case "change_color":
                  return props.eventBus.emit("nodes:action", {
                    ids: nodeIds,
                    action: "update:sticky:color"
                  });
                case "tidy_up":
                  return await onTidyUp({
                    source: "context-menu"
                  });
                case "extract_sub_workflow":
                  return emit("extract-workflow", nodeIds);
                case "open_sub_workflow":
                  return emit("open:sub-workflow", nodeIds[0]);
              }
            }
            async function onTidyUp(payload) {
              if (payload.nodeIdsFilter && payload.nodeIdsFilter.length > 0) {
                clearSelectedNodes();
                addSelectedNodes(payload.nodeIdsFilter.map(findNode).filter(isPresent));
              }
              const applyOnSelection = selectedNodes.value.length > 1;
              const target$1 = applyOnSelection ? "selection" : "all";
              emit("tidy-up", {
                result: layout$1(target$1),
                target: target$1,
                source: payload.source
              }, {
                trackEvents: payload.trackEvents
              });
              await nextTick();
              if (applyOnSelection) await onFitBounds(selectedNodes.value);else await onFitView();
            }
            /**
            * Drag and drop
            */
            function onDragOver(event) {
              event.preventDefault();
            }
            function onDrop(event) {
              emit("drag-and-drop", getProjectedPosition(event), event);
            }
            /**
            * Minimap
            */
            const minimapHideTimeout = ref(null);
            const isMinimapVisible = ref(false);
            function minimapNodeClassnameFn(node$1) {
              return `minimap-node-${node$1.data?.render.type.replace(/\./g, "-") ?? "default"}`;
            }
            watch(isPaneMoving, value => {
              if (value) showMinimap();else hideMinimap();
            });
            function showMinimap() {
              if (minimapHideTimeout.value) {
                clearTimeout(minimapHideTimeout.value);
                minimapHideTimeout.value = null;
              }
              isMinimapVisible.value = true;
            }
            function hideMinimap() {
              minimapHideTimeout.value = setTimeout(() => {
                isMinimapVisible.value = false;
              }, minimapVisibilityDelay);
            }
            function onMinimapMouseEnter() {
              showMinimap();
            }
            function onMinimapMouseLeave() {
              hideMinimap();
            }
            /**
            * Window Events
            */
            function onWindowBlur() {
              switchToSelectionMode();
            }
            /**
            * Lifecycle
            */
            const initialized = ref(false);
            onMounted(() => {
              props.eventBus.on("fitView", onFitView);
              props.eventBus.on("nodes:select", onSelectNodes);
              props.eventBus.on("nodes:selectAll", () => addSelectedNodes(graphNodes.value));
              props.eventBus.on("tidyUp", onTidyUp);
              window.addEventListener("blur", onWindowBlur);
            });
            onUnmounted(() => {
              props.eventBus.off("fitView", onFitView);
              props.eventBus.off("nodes:select", onSelectNodes);
              props.eventBus.off("tidyUp", onTidyUp);
              window.removeEventListener("blur", onWindowBlur);
            });
            onPaneReady(async () => {
              await onFitView();
              isPaneReady.value = true;
            });
            onNodesInitialized(() => {
              initialized.value = true;
            });
            watch([() => props.readOnly, () => props.suppressInteraction], ([readOnly, suppressInteraction]) => {
              setInteractive(!readOnly && !suppressInteraction);
              elementsSelectable.value = !suppressInteraction;
            }, {
              immediate: true
            });
            watch([nodesSelectionActive, userSelectionRect], ([isActive, rect]) => emit("update:has-range-selection", isActive || (rect?.width ?? 0) > 0 || (rect?.height ?? 0) > 0));
            watch([vueFlow.nodes, () => experimentalNdvStore.nodeNameToBeFocused], ([nodes, toFocusName]) => {
              const toFocusNode = toFocusName && nodes.find(n => n.data.name === toFocusName);
              if (!toFocusNode) return;
              setTimeout(() => {
                experimentalNdvStore.focusNode(toFocusNode, {
                  canvasViewport: viewport.value,
                  canvasDimensions: dimensions.value,
                  setCenter
                });
              });
            });
            provide(CanvasKey, {
              connectingHandle,
              isExecuting: toRef(props, "executing"),
              initialized,
              viewport,
              isExperimentalNdvActive: isExperimentalNdvActive$3,
              isPaneMoving
            });
            __expose({
              executeContextMenuAction: onContextMenuAction
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(_sfc_main$1), {
                id: _ctx.id,
                nodes: _ctx.nodes,
                edges: _ctx.connections,
                class: normalizeClass(classes.value),
                "apply-changes": false,
                "connection-line-options": {
                  markerEnd: unref(MarkerType).ArrowClosed
                },
                "connection-radius": 60,
                "pan-on-drag": panningMouseButton.value,
                "pan-on-scroll": "",
                "snap-to-grid": "",
                "snap-grid": [unref(16), unref(16)],
                "min-zoom": 0,
                "max-zoom": unref(experimentalNdvStore).isZoomedViewEnabled ? unref(experimentalNdvStore).maxCanvasZoom : 4,
                "selection-key-code": selectionKeyCode.value,
                "zoom-activation-key-code": panningKeyCode.value,
                "pan-activation-key-code": panningKeyCode.value,
                "disable-keyboard-a11y": true,
                "delete-key-code": null,
                "data-test-id": "canvas",
                onConnectStart,
                onConnect,
                onConnectEnd,
                onPaneClick: onClickPane,
                onPaneContextMenu: onOpenContextMenu,
                onMove: onPaneMove,
                onMoveEnd: onPaneMoveEnd,
                onNodeDragStop,
                onNodeClick,
                onSelectionDragStop,
                onSelectionEnd,
                onSelectionContextMenu: onOpenSelectionContextMenu,
                onDragover: onDragOver,
                onDrop,
                onViewportChange
              }, {
                "node-canvas-node": withCtx(nodeProps => [renderSlot(_ctx.$slots, "node", normalizeProps(guardReactiveProps({
                  nodeProps
                })), () => [createVNode(CanvasNode_default, mergeProps(nodeProps, {
                  data: nodeDataById.value[nodeProps.id],
                  "read-only": _ctx.readOnly,
                  "event-bus": _ctx.eventBus,
                  hovered: nodesHoveredById.value[nodeProps.id],
                  "nearby-hovered": nodeProps.id === unref(hoveredTriggerNode).id.value,
                  onDelete: onDeleteNode,
                  onRun: onRunNode,
                  onSelect: onSelectNode,
                  onToggle: onToggleNodeEnabled,
                  onActivate: onSetNodeActivated,
                  onDeactivate: onSetNodeDeactivated,
                  "onOpen:contextmenu": onOpenNodeContextMenu,
                  onUpdate: onUpdateNodeParameters,
                  "onUpdate:inputs": onUpdateNodeInputs,
                  "onUpdate:outputs": onUpdateNodeOutputs,
                  onMove: onUpdateNodePosition,
                  onAdd: onClickNodeAdd,
                  onFocus: onFocusNode
                }), createSlots({
                  _: 2
                }, [_ctx.$slots.nodeToolbar ? {
                  name: "toolbar",
                  fn: withCtx(toolbarProps => [renderSlot(_ctx.$slots, "nodeToolbar", normalizeProps(guardReactiveProps(toolbarProps)), void 0, true)]),
                  key: "0"
                } : void 0]), 1040, ["data", "read-only", "event-bus", "hovered", "nearby-hovered"])], true)]),
                "edge-canvas-edge": withCtx(edgeProps => [renderSlot(_ctx.$slots, "edge", normalizeProps(guardReactiveProps({
                  edgeProps,
                  arrowHeadMarkerId: arrowHeadMarkerId.value
                })), () => [createVNode(CanvasEdge_default, mergeProps(edgeProps, {
                  "marker-end": `url(#${arrowHeadMarkerId.value})`,
                  "read-only": _ctx.readOnly,
                  hovered: edgesHoveredById.value[edgeProps.id],
                  "bring-to-front": edgesBringToFrontById.value[edgeProps.id],
                  onAdd: onClickConnectionAdd,
                  onDelete: onDeleteConnection,
                  "onUpdate:label:hovered": $event => onUpdateEdgeLabelHovered(edgeProps.id, $event)
                }), null, 16, ["marker-end", "read-only", "hovered", "bring-to-front", "onUpdate:label:hovered"])], true)]),
                "connection-line": withCtx(connectionLineProps => [createVNode(CanvasConnectionLine_default, normalizeProps(guardReactiveProps(connectionLineProps)), null, 16)]),
                default: withCtx(() => [createVNode(CanvasArrowHeadMarker_default, {
                  id: arrowHeadMarkerId.value
                }, null, 8, ["id"]), renderSlot(_ctx.$slots, "canvas-background", normalizeProps(guardReactiveProps({
                  viewport: unref(viewport)
                })), () => [createVNode(CanvasBackground_default, {
                  viewport: unref(viewport),
                  striped: _ctx.readOnly
                }, null, 8, ["viewport", "striped"])], true), createVNode(Transition, {
                  name: "minimap"
                }, {
                  default: withCtx(() => [withDirectives(createVNode(unref(_sfc_main), {
                    "data-test-id": "canvas-minimap",
                    "aria-label": "n8n Minimap",
                    height: 120,
                    width: 200,
                    position: unref(PanelPosition).BottomLeft,
                    pannable: "",
                    zoomable: "",
                    "node-class-name": minimapNodeClassnameFn,
                    "node-border-radius": 16,
                    onMouseenter: onMinimapMouseEnter,
                    onMouseleave: onMinimapMouseLeave
                  }, null, 8, ["position"]), [[vShow, isMinimapVisible.value]])]),
                  _: 1
                }), createVNode(CanvasControlButtons_default, {
                  "data-test-id": "canvas-controls",
                  class: normalizeClass(unref($style).canvasControls),
                  position: _ctx.controlsPosition,
                  "show-interactive": false,
                  zoom: unref(viewport).zoom,
                  "read-only": _ctx.readOnly,
                  "is-experimental-ndv-active": isExperimentalNdvActive$3.value,
                  onZoomToFit: onFitView,
                  onZoomIn,
                  onZoomOut,
                  onResetZoom,
                  onTidyUp: _cache[0] || (_cache[0] = $event => onTidyUp({
                    source: "canvas-button"
                  })),
                  onToggleZoomMode
                }, null, 8, ["class", "position", "zoom", "read-only", "is-experimental-ndv-active"]), (openBlock(), createBlock(Suspense, null, {
                  default: withCtx(() => [createVNode(ContextMenu_default, {
                    onAction: onContextMenuAction
                  })]),
                  _: 1
                }))]),
                _: 3
              }, 8, ["id", "nodes", "edges", "class", "connection-line-options", "pan-on-drag", "snap-grid", "max-zoom", "selection-key-code", "zoom-activation-key-code", "pan-activation-key-code"]);
            };
          }
        }); //#endregion
        //#region src/features/workflows/canvas/components/Canvas.vue?vue&type=style&index=0&lang.module.scss
        canvas = "_canvas_rygeb_123";
        ready = "_ready_rygeb_129";
        isExperimentalNdvActive = "_isExperimentalNdvActive_rygeb_132";
        Canvas_vue_vue_type_style_index_0_lang_module_default = {
          canvas,
          ready,
          isExperimentalNdvActive
        }; //#endregion
        //#region src/features/workflows/canvas/components/Canvas.vue
        cssModules = {
          "$style": Canvas_vue_vue_type_style_index_0_lang_module_default
        };
        _export("n", Canvas_default = /* @__PURE__ */__plugin_vue_export_helper_default(Canvas_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules], ["__scopeId", "data-v-726dbe6e"]]));
      }
    };
  });
})();