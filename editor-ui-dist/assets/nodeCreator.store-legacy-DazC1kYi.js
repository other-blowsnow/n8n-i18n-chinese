;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./truncate-legacy-Bk9bFklR.js", "./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./templates.store-legacy-BHiM3N7j.js", "./nodeIcon-legacy-7NxDDHQi.js"], function (_export, _context) {
    "use strict";

    var __toESM, __commonJS, computed, nextTick, ref, useI18n, useRouter, require__arrayMap, require_get, require_toString, useRoute, isPrebuiltAgentTemplateId, useSettingsStore, require__createCompounder, STORES, transformNodeType, getRagStarterWorkflowJson, useProjectsStore, getPrebuiltAgents, v4_default, updateCurrentUserSettings, useUIStore, getSampleWorkflowByTemplateId, useRootStore, require_upperFirst, subcategorizeItems, useCanvasStore, getThemedValue, prepareCommunityNodeDetailsViewStack, useNDVStore, useEvaluationStore, CanvasConnectionMode, flattenCreateElements, useUsersStore, getPreBuiltAgentsCalloutWithDivider, isValidNodeConnectionType, isAINode, usePostHog, isTutorialTemplateId, getTutorialTemplates, isValidCanvasConnectionMode, groupItemsInSections, useWorkflowsStore, extendItemsWithUUID, useNodeTypesStore, useTelemetry, getAiTemplatesCallout, isVueFlowConnection, SampleTemplates, defineStore, sortNodeCreateElements, searchNodes, DEFAULT_SUBCATEGORY, require__arrayIncludesWith, require__SetCache, AI_CATEGORY_RETRIEVERS, MERGE_NODE_TYPE, NODE_MIN_INPUT_ITEMS_COUNT, HTTP_REQUEST_NODE_TYPE, AI_CATEGORY_LANGUAGE_MODELS, AGGREGATE_NODE_TYPE, AI_CODE_TOOL_LANGCHAIN_NODE_TYPE, AI_CATEGORY_TEXT_SPLITTERS, CUSTOM_API_CALL_KEY, AI_CATEGORY_MCP_NODES, PRE_BUILT_AGENTS_EXPERIMENT, AI_TRANSFORM_NODE_TYPE$1, AI_OTHERS_NODE_CREATOR_VIEW, AI_CODE_NODE_TYPE, AI_CATEGORY_MEMORY, PRE_BUILT_AGENTS_MODAL_KEY, MANUAL_TRIGGER_NODE_TYPE, AI_CATEGORY_CHAINS, AI_CATEGORY_DOCUMENT_LOADERS, WEBHOOK_NODE_TYPE, require__baseFlatten, IF_NODE_TYPE, AI_CATEGORY_EMBEDDING, XML_NODE_TYPE, LIMIT_NODE_TYPE, CHAT_TRIGGER_NODE_TYPE, CORE_NODES_CATEGORY, MARKDOWN_NODE_TYPE, SUMMARIZE_NODE_TYPE, FORM_TRIGGER_NODE_TYPE, HTML_NODE_TYPE, AI_CATEGORY_TOOLS, isCommunityPackageName, AI_CATEGORY_ROOT_NODES, AI_CATEGORY_VECTOR_STORES, AI_UNCATEGORIZED_CATEGORY, AI_SUBCATEGORY, AI_WORKFLOW_TOOL_LANGCHAIN_NODE_TYPE, getNodeInputs, SPLIT_IN_BATCHES_NODE_TYPE, OTHER_TRIGGER_NODES_SUBCATEGORY, FILTER_NODE_TYPE, DATETIME_NODE_TYPE, TRIGGER_NODE_CREATOR_VIEW, NodeConnectionTypes, require__arrayIncludes, FLOWS_CONTROL_SUBCATEGORY, CODE_NODE_TYPE, EVALUATION_TRIGGER_NODE_TYPE, SET_NODE_TYPE, EMAIL_IMAP_NODE_TYPE, NODE_CREATOR_OPEN_SOURCES, AI_CATEGORY_AGENTS, require__cacheHas, SCHEDULE_TRIGGER_NODE_TYPE, TEMPLATE_CATEGORY_AI, VIEWS, HITL_SUBCATEGORY, CONVERT_TO_FILE_NODE_TYPE, REMOVE_DUPLICATES_NODE_TYPE, CRYPTO_NODE_TYPE, EMAIL_SEND_NODE_TYPE, AI_NODE_CREATOR_VIEW, HUMAN_IN_THE_LOOP_CATEGORY, AI_TRANSFORM_NODE_TYPE, RSS_READ_NODE_TYPE, REGULAR_NODE_CREATOR_VIEW, HELPERS_SUBCATEGORY, COMPRESSION_NODE_TYPE, TRANSFORM_DATA_SUBCATEGORY, EDIT_IMAGE_NODE_TYPE, SPLIT_OUT_NODE_TYPE, EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE, EXTRACT_FROM_FILE_NODE_TYPE, AI_CATEGORY_OUTPUTPARSER, require__baseUnary, require__baseRest, require_isArrayLikeObject, useExternalHooks, useTemplatesStore, getNodeIconSource, require__baseDifference, require_difference, require_capitalize, require_camelCase, import_camelCase, KEYBOARD_ID_ATTR, WATCHED_KEYS, useKeyboardNavigation, __virtual_node_popularity_data_default, import_difference, nodePopularityMap, useViewStacks, import_get, useNodeCreatorStore;
    //#endregion
    //#region src/app/composables/useCalloutHelpers.ts
    function useCalloutHelpers() {
      const route = useRoute();
      const router = useRouter();
      const telemetry = useTelemetry();
      const postHog = usePostHog();
      const i18n = useI18n();
      const rootStore = useRootStore();
      const workflowsStore = useWorkflowsStore();
      const usersStore = useUsersStore();
      const ndvStore = useNDVStore();
      const nodeCreatorStore = useNodeCreatorStore();
      const viewStacks = useViewStacks();
      const nodeTypesStore = useNodeTypesStore();
      const uiStore = useUIStore();
      const projectsStore = useProjectsStore();
      const isRagStarterCalloutVisible = computed(() => {
        const template = getRagStarterWorkflowJson();
        const routeTemplateId = route.query.templateId;
        const workflowObject = workflowsStore.workflowObject;
        const workflow = workflowsStore.getWorkflowById(workflowObject.id);
        if ((routeTemplateId ?? workflow?.meta?.templateId) === template.meta.templateId) return false;
        return true;
      });
      const getPreBuiltAgentNodeCreatorItems = () => {
        return getPrebuiltAgents().map(template => {
          return {
            key: template.template.meta.templateId,
            type: "openTemplate",
            properties: {
              templateId: template.template.meta.templateId,
              title: template.name,
              description: template.description,
              nodes: template.nodes.flatMap(node => {
                const nodeType = nodeTypesStore.getNodeType(node.name, node.version);
                if (!nodeType) return [];
                return nodeType;
              })
            }
          };
        });
      };
      const getTutorialTemplatesNodeCreatorItems = () => {
        return getTutorialTemplates().map(template => {
          return {
            key: template.template.meta.templateId,
            type: "openTemplate",
            properties: {
              templateId: template.template.meta.templateId,
              title: template.name,
              description: template.description,
              nodes: template.nodes.flatMap(node => {
                const nodeType = nodeTypesStore.getNodeType(node.name, node.version);
                if (!nodeType) return [];
                return nodeType;
              })
            }
          };
        });
      };
      const openPreBuiltAgentsModal = async source => {
        telemetry.track("User opened pre-built Agents collection", {
          source,
          node_type: null,
          section: null
        });
        await nodeTypesStore.loadNodeTypesIfNotLoaded();
        uiStore.openModal(PRE_BUILT_AGENTS_MODAL_KEY);
      };
      const openPreBuiltAgentsCollection = async options => {
        telemetry.track("User opened pre-built Agents collection", {
          source: options.telemetry.source,
          node_type: options.telemetry.nodeType ?? null,
          section: options.telemetry.section ?? null
        });
        await nodeTypesStore.loadNodeTypesIfNotLoaded();
        const items = getPreBuiltAgentNodeCreatorItems();
        ndvStore.unsetActiveNodeName();
        nodeCreatorStore.setNodeCreatorState({
          source: NODE_CREATOR_OPEN_SOURCES.TEMPLATES_CALLOUT,
          createNodeActive: true,
          nodeCreatorView: void 0,
          connectionType: void 0
        });
        await nextTick();
        viewStacks.pushViewStack({
          title: i18n.baseText("nodeCreator.preBuiltAgents.title"),
          rootView: REGULAR_NODE_CREATOR_VIEW,
          activeIndex: 0,
          transitionDirection: "in",
          hasSearch: false,
          preventBack: false,
          items,
          baselineItems: items,
          mode: "nodes",
          hideActions: false
        }, {
          resetStacks: options.resetStacks ?? false
        });
      };
      const openSampleWorkflowTemplate = (templateId, options) => {
        if (templateId === SampleTemplates.RagStarterTemplate) telemetry.track("User clicked on RAG callout", {
          node_type: options.telemetry.nodeType ?? null
        });else if (isPrebuiltAgentTemplateId(templateId)) telemetry.track("User inserted pre-built Agent", {
          template: templateId,
          source: options.telemetry.source,
          node_type: options.telemetry.nodeType ?? null,
          section: options.telemetry.section ?? null
        });else if (isTutorialTemplateId(templateId)) telemetry.track("User inserted tutorial template", {
          template: templateId,
          source: options.telemetry.source,
          node_type: options.telemetry.nodeType ?? null,
          section: options.telemetry.section ?? null
        });
        const template = getSampleWorkflowByTemplateId(templateId);
        if (!template) return;
        const {
          href
        } = router.resolve({
          name: VIEWS.TEMPLATE_IMPORT,
          params: {
            id: template.meta.templateId
          },
          query: {
            fromJson: "true",
            parentFolderId: route.params.folderId,
            projectId: projectsStore.currentProjectId
          }
        });
        window.open(href, "_blank");
      };
      const isPreBuiltAgentsExperimentEnabled = computed(() => {
        return postHog.isVariantEnabled(PRE_BUILT_AGENTS_EXPERIMENT.name, PRE_BUILT_AGENTS_EXPERIMENT.variant);
      });
      const isPreBuiltAgentsCalloutVisible = computed(() => {
        return isPreBuiltAgentsExperimentEnabled.value;
      });
      const isCalloutDismissed = callout => {
        return usersStore.isCalloutDismissed(callout);
      };
      const dismissCallout = async callout => {
        usersStore.setCalloutDismissed(callout);
        await updateCurrentUserSettings(rootStore.restApiContext, {
          dismissedCallouts: {
            ...usersStore.currentUser?.settings?.dismissedCallouts,
            [callout]: true
          }
        });
      };
      return {
        openSampleWorkflowTemplate,
        openPreBuiltAgentsModal,
        openPreBuiltAgentsCollection,
        getPreBuiltAgentNodeCreatorItems,
        getTutorialTemplatesNodeCreatorItems,
        isRagStarterCalloutVisible,
        isPreBuiltAgentsCalloutVisible,
        isCalloutDismissed,
        dismissCallout
      };
    }

    //#endregion
    //#region src/features/shared/nodeCreator/views/viewsData.ts

    function getNodeView(node) {
      return {
        key: node.name,
        type: "node",
        properties: {
          group: [],
          name: node.name,
          displayName: node.displayName,
          title: node.displayName,
          description: node.description,
          icon: node.icon,
          iconUrl: node.iconUrl
        }
      };
    }
    function getAiNodesBySubcategory(nodes, subcategory) {
      return nodes.filter(node => !node.hidden && node.codex?.subcategories?.["AI"]?.includes(subcategory)).map(getNodeView).sort((a, b) => a.properties.displayName.localeCompare(b.properties.displayName));
    }
    function getEvaluationNode(nodeTypesStore, isEvaluationVariantEnabled) {
      const evaluationNodeStore = nodeTypesStore.getNodeType("n8n-nodes-base.evaluation");
      if (!isEvaluationVariantEnabled || !evaluationNodeStore) return [];
      const evaluationNode = getNodeView(evaluationNodeStore);
      return [{
        ...evaluationNode,
        properties: {
          ...evaluationNode.properties,
          defaults: {
            name: "Evaluation",
            color: "#c3c9d5"
          }
        }
      }];
    }
    function AIView(_nodes) {
      const i18n = useI18n();
      const nodeTypesStore = useNodeTypesStore();
      const templatesStore = useTemplatesStore();
      const evaluationStore = useEvaluationStore();
      const calloutHelpers = useCalloutHelpers();
      const isEvaluationEnabled = evaluationStore.isEvaluationEnabled;
      const evaluationNode = getEvaluationNode(nodeTypesStore, isEvaluationEnabled);
      const chainNodes = getAiNodesBySubcategory(nodeTypesStore.allLatestNodeTypes, AI_CATEGORY_CHAINS);
      const agentNodes = getAiNodesBySubcategory(nodeTypesStore.allLatestNodeTypes, AI_CATEGORY_AGENTS);
      const websiteCategoryURLParams = templatesStore.websiteTemplateRepositoryParameters;
      websiteCategoryURLParams.append("utm_user_role", "AdvancedAI");
      const aiTemplatesURL = templatesStore.constructTemplateRepositoryURL(websiteCategoryURLParams, TEMPLATE_CATEGORY_AI);
      const askAiEnabled = useSettingsStore().isAskAiEnabled;
      const aiTransformNode = nodeTypesStore.getNodeType(AI_TRANSFORM_NODE_TYPE$1);
      const transformNode = askAiEnabled && aiTransformNode ? [getNodeView(aiTransformNode)] : [];
      const callouts = !calloutHelpers.isPreBuiltAgentsCalloutVisible.value ? [getAiTemplatesCallout(aiTemplatesURL)] : [getPreBuiltAgentsCalloutWithDivider()];
      return {
        value: "AI",
        title: i18n.baseText("nodeCreator.aiPanel.aiNodes"),
        subtitle: i18n.baseText("nodeCreator.aiPanel.selectAiNode"),
        items: [...callouts, ...agentNodes, ...chainNodes, ...transformNode, ...evaluationNode, {
          key: AI_OTHERS_NODE_CREATOR_VIEW,
          type: "view",
          properties: {
            title: i18n.baseText("nodeCreator.aiPanel.aiOtherNodes"),
            icon: "robot",
            description: i18n.baseText("nodeCreator.aiPanel.aiOtherNodesDescription")
          }
        }]
      };
    }
    function AINodesView(_nodes) {
      const i18n = useI18n();
      function getAISubcategoryProperties(nodeConnectionType) {
        return {
          connectionType: nodeConnectionType,
          iconProps: {
            color: `var(--node-type-${nodeConnectionType}-color)`
          },
          panelClass: `nodes-list-panel-${nodeConnectionType}`
        };
      }
      function getSubcategoryInfo(subcategory) {
        const localeKey = `nodeCreator.subcategoryInfos.${(0, import_camelCase.default)(subcategory)}`;
        const info = i18n.baseText(localeKey);
        if (info === localeKey) return void 0;
        return info;
      }
      return {
        value: AI_OTHERS_NODE_CREATOR_VIEW,
        title: i18n.baseText("nodeCreator.aiPanel.aiOtherNodes"),
        subtitle: i18n.baseText("nodeCreator.aiPanel.selectAiNode"),
        items: [{
          key: AI_CATEGORY_DOCUMENT_LOADERS,
          type: "subcategory",
          properties: {
            title: AI_CATEGORY_DOCUMENT_LOADERS,
            info: getSubcategoryInfo(AI_CATEGORY_DOCUMENT_LOADERS),
            icon: "file-input",
            ...getAISubcategoryProperties(NodeConnectionTypes.AiDocument)
          }
        }, {
          key: AI_CATEGORY_LANGUAGE_MODELS,
          type: "subcategory",
          properties: {
            title: AI_CATEGORY_LANGUAGE_MODELS,
            info: getSubcategoryInfo(AI_CATEGORY_LANGUAGE_MODELS),
            icon: "language",
            ...getAISubcategoryProperties(NodeConnectionTypes.AiLanguageModel)
          }
        }, {
          key: AI_CATEGORY_MEMORY,
          type: "subcategory",
          properties: {
            title: AI_CATEGORY_MEMORY,
            info: getSubcategoryInfo(AI_CATEGORY_MEMORY),
            icon: "brain",
            ...getAISubcategoryProperties(NodeConnectionTypes.AiMemory)
          }
        }, {
          key: AI_CATEGORY_OUTPUTPARSER,
          type: "subcategory",
          properties: {
            title: AI_CATEGORY_OUTPUTPARSER,
            info: getSubcategoryInfo(AI_CATEGORY_OUTPUTPARSER),
            icon: "list",
            ...getAISubcategoryProperties(NodeConnectionTypes.AiOutputParser)
          }
        }, {
          key: AI_CATEGORY_RETRIEVERS,
          type: "subcategory",
          properties: {
            title: AI_CATEGORY_RETRIEVERS,
            info: getSubcategoryInfo(AI_CATEGORY_RETRIEVERS),
            icon: "search",
            ...getAISubcategoryProperties(NodeConnectionTypes.AiRetriever)
          }
        }, {
          key: AI_CATEGORY_TEXT_SPLITTERS,
          type: "subcategory",
          properties: {
            title: AI_CATEGORY_TEXT_SPLITTERS,
            info: getSubcategoryInfo(AI_CATEGORY_TEXT_SPLITTERS),
            icon: "grip-lines-vertical",
            ...getAISubcategoryProperties(NodeConnectionTypes.AiTextSplitter)
          }
        }, {
          type: "subcategory",
          key: AI_CATEGORY_TOOLS,
          category: CORE_NODES_CATEGORY,
          properties: {
            title: AI_CATEGORY_TOOLS,
            info: getSubcategoryInfo(AI_CATEGORY_TOOLS),
            icon: "tools",
            ...getAISubcategoryProperties(NodeConnectionTypes.AiTool),
            sections: [{
              key: "popular",
              title: i18n.baseText("nodeCreator.sectionNames.popular"),
              items: [AI_WORKFLOW_TOOL_LANGCHAIN_NODE_TYPE, AI_CODE_TOOL_LANGCHAIN_NODE_TYPE]
            }]
          }
        }, {
          key: AI_CATEGORY_EMBEDDING,
          type: "subcategory",
          properties: {
            title: AI_CATEGORY_EMBEDDING,
            info: getSubcategoryInfo(AI_CATEGORY_EMBEDDING),
            icon: "vector-square",
            ...getAISubcategoryProperties(NodeConnectionTypes.AiEmbedding)
          }
        }, {
          key: AI_CATEGORY_VECTOR_STORES,
          type: "subcategory",
          properties: {
            title: AI_CATEGORY_VECTOR_STORES,
            info: getSubcategoryInfo(AI_CATEGORY_VECTOR_STORES),
            icon: "waypoints",
            ...getAISubcategoryProperties(NodeConnectionTypes.AiVectorStore)
          }
        }, {
          key: AI_UNCATEGORIZED_CATEGORY,
          type: "subcategory",
          properties: {
            title: AI_UNCATEGORIZED_CATEGORY,
            icon: "code"
          }
        }]
      };
    }
    function TriggerView() {
      const i18n = useI18n();
      const evaluationTriggerNode = useEvaluationStore().isEvaluationEnabled ? {
        key: EVALUATION_TRIGGER_NODE_TYPE,
        type: "node",
        category: [CORE_NODES_CATEGORY],
        properties: {
          group: [],
          name: EVALUATION_TRIGGER_NODE_TYPE,
          displayName: "When running evaluation",
          description: "Run a dataset through your workflow to test performance",
          icon: "fa:check-double",
          defaults: {
            name: "Evaluation",
            color: "#c3c9d5"
          }
        }
      } : null;
      return {
        value: TRIGGER_NODE_CREATOR_VIEW,
        title: i18n.baseText("nodeCreator.triggerHelperPanel.selectATrigger"),
        subtitle: i18n.baseText("nodeCreator.triggerHelperPanel.selectATriggerDescription"),
        items: [{
          key: MANUAL_TRIGGER_NODE_TYPE,
          type: "node",
          category: [CORE_NODES_CATEGORY],
          properties: {
            group: [],
            name: MANUAL_TRIGGER_NODE_TYPE,
            displayName: i18n.baseText("nodeCreator.triggerHelperPanel.manualTriggerDisplayName"),
            description: i18n.baseText("nodeCreator.triggerHelperPanel.manualTriggerDescription"),
            icon: "fa:mouse-pointer"
          }
        }, {
          key: "*",
          type: "subcategory",
          properties: {
            forceIncludeNodes: [WEBHOOK_NODE_TYPE, EMAIL_IMAP_NODE_TYPE],
            title: "App Trigger Nodes",
            icon: "satellite-dish"
          }
        }, {
          key: SCHEDULE_TRIGGER_NODE_TYPE,
          type: "node",
          category: [CORE_NODES_CATEGORY],
          properties: {
            group: [],
            name: SCHEDULE_TRIGGER_NODE_TYPE,
            displayName: i18n.baseText("nodeCreator.triggerHelperPanel.scheduleTriggerDisplayName"),
            description: i18n.baseText("nodeCreator.triggerHelperPanel.scheduleTriggerDescription"),
            icon: "fa:clock"
          }
        }, {
          key: WEBHOOK_NODE_TYPE,
          type: "node",
          category: [CORE_NODES_CATEGORY],
          properties: {
            group: [],
            name: WEBHOOK_NODE_TYPE,
            displayName: i18n.baseText("nodeCreator.triggerHelperPanel.webhookTriggerDisplayName"),
            description: i18n.baseText("nodeCreator.triggerHelperPanel.webhookTriggerDescription"),
            iconData: {
              type: "file",
              fileBuffer: "/static/webhook-icon.svg"
            }
          }
        }, {
          key: FORM_TRIGGER_NODE_TYPE,
          type: "node",
          category: [CORE_NODES_CATEGORY],
          properties: {
            group: [],
            name: FORM_TRIGGER_NODE_TYPE,
            displayName: i18n.baseText("nodeCreator.triggerHelperPanel.formTriggerDisplayName"),
            description: i18n.baseText("nodeCreator.triggerHelperPanel.formTriggerDescription"),
            iconData: {
              type: "file",
              fileBuffer: "/static/form-grey.svg"
            }
          }
        }, {
          key: EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE,
          type: "node",
          category: [CORE_NODES_CATEGORY],
          properties: {
            group: [],
            name: EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE,
            displayName: i18n.baseText("nodeCreator.triggerHelperPanel.workflowTriggerDisplayName"),
            description: i18n.baseText("nodeCreator.triggerHelperPanel.workflowTriggerDescription"),
            icon: "fa:sign-out-alt"
          }
        }, {
          key: CHAT_TRIGGER_NODE_TYPE,
          type: "node",
          category: [CORE_NODES_CATEGORY],
          properties: {
            group: [],
            name: CHAT_TRIGGER_NODE_TYPE,
            displayName: i18n.baseText("nodeCreator.triggerHelperPanel.chatTriggerDisplayName"),
            description: i18n.baseText("nodeCreator.triggerHelperPanel.chatTriggerDescription"),
            icon: "fa:comments"
          }
        }, ...(evaluationTriggerNode ? [evaluationTriggerNode] : []), {
          type: "subcategory",
          key: OTHER_TRIGGER_NODES_SUBCATEGORY,
          category: CORE_NODES_CATEGORY,
          properties: {
            title: OTHER_TRIGGER_NODES_SUBCATEGORY,
            icon: "folder-open"
          }
        }]
      };
    }
    function RegularView(nodes) {
      const i18n = useI18n();
      const popularItemsSubcategory = [SET_NODE_TYPE, CODE_NODE_TYPE, DATETIME_NODE_TYPE, AI_TRANSFORM_NODE_TYPE$1];
      const getSendAndWaitNodes = nodes$1 => {
        return (nodes$1 ?? []).filter(node => node.codex?.categories?.includes(HUMAN_IN_THE_LOOP_CATEGORY)).map(node => node.name);
      };
      const view = {
        value: REGULAR_NODE_CREATOR_VIEW,
        title: i18n.baseText("nodeCreator.triggerHelperPanel.whatHappensNext"),
        items: [{
          key: "*",
          type: "subcategory",
          properties: {
            title: "App Regular Nodes",
            icon: "globe",
            forceIncludeNodes: [RSS_READ_NODE_TYPE, EMAIL_SEND_NODE_TYPE]
          }
        }, {
          type: "subcategory",
          key: TRANSFORM_DATA_SUBCATEGORY,
          category: CORE_NODES_CATEGORY,
          properties: {
            title: TRANSFORM_DATA_SUBCATEGORY,
            icon: "pen",
            sections: [{
              key: "popular",
              title: i18n.baseText("nodeCreator.sectionNames.popular"),
              items: popularItemsSubcategory
            }, {
              key: "addOrRemove",
              title: i18n.baseText("nodeCreator.sectionNames.transform.addOrRemove"),
              items: [FILTER_NODE_TYPE, REMOVE_DUPLICATES_NODE_TYPE, SPLIT_OUT_NODE_TYPE, LIMIT_NODE_TYPE]
            }, {
              key: "combine",
              title: i18n.baseText("nodeCreator.sectionNames.transform.combine"),
              items: [SUMMARIZE_NODE_TYPE, AGGREGATE_NODE_TYPE, MERGE_NODE_TYPE]
            }, {
              key: "convert",
              title: i18n.baseText("nodeCreator.sectionNames.transform.convert"),
              items: [HTML_NODE_TYPE, MARKDOWN_NODE_TYPE, XML_NODE_TYPE, CRYPTO_NODE_TYPE, EXTRACT_FROM_FILE_NODE_TYPE, CONVERT_TO_FILE_NODE_TYPE, COMPRESSION_NODE_TYPE, EDIT_IMAGE_NODE_TYPE]
            }]
          }
        }, {
          type: "subcategory",
          key: FLOWS_CONTROL_SUBCATEGORY,
          category: CORE_NODES_CATEGORY,
          properties: {
            title: FLOWS_CONTROL_SUBCATEGORY,
            icon: "git-branch",
            sections: [{
              key: "popular",
              title: i18n.baseText("nodeCreator.sectionNames.popular"),
              items: [FILTER_NODE_TYPE, IF_NODE_TYPE, SPLIT_IN_BATCHES_NODE_TYPE, MERGE_NODE_TYPE]
            }]
          }
        }, {
          type: "subcategory",
          key: HELPERS_SUBCATEGORY,
          category: CORE_NODES_CATEGORY,
          properties: {
            title: HELPERS_SUBCATEGORY,
            icon: "toolbox",
            sections: [{
              key: "popular",
              title: i18n.baseText("nodeCreator.sectionNames.popular"),
              items: [HTTP_REQUEST_NODE_TYPE, WEBHOOK_NODE_TYPE, CODE_NODE_TYPE]
            }]
          }
        }, {
          type: "subcategory",
          key: HITL_SUBCATEGORY,
          category: HUMAN_IN_THE_LOOP_CATEGORY,
          properties: {
            title: HITL_SUBCATEGORY,
            icon: "user-check",
            sections: [{
              key: "sendAndWait",
              title: i18n.baseText("nodeCreator.sectionNames.sendAndWait"),
              items: getSendAndWaitNodes(nodes)
            }]
          }
        }]
      };
      if ((nodes ?? []).some(node => node.codex?.categories?.includes("AI"))) view.items.unshift({
        key: "AI",
        type: "view",
        properties: {
          title: i18n.baseText("nodeCreator.aiPanel.langchainAiNodes"),
          icon: "robot",
          description: i18n.baseText("nodeCreator.aiPanel.nodesForAi"),
          borderless: true
        }
      });
      view.items.push({
        key: TRIGGER_NODE_CREATOR_VIEW,
        type: "view",
        properties: {
          title: i18n.baseText("nodeCreator.triggerHelperPanel.addAnotherTrigger"),
          icon: "bolt-filled",
          description: i18n.baseText("nodeCreator.triggerHelperPanel.addAnotherTriggerDescription")
        }
      });
      return view;
    }

    //#endregion
    //#region src/features/shared/nodeCreator/composables/useKeyboardNavigation.ts

    //#endregion
    //#region src/features/workflows/canvas/canvas.utils.ts
    /**
    * Maps multiple legacy n8n connections to VueFlow connections
    */
    function mapLegacyConnectionsToCanvasConnections(legacyConnections, nodes) {
      const mappedConnections = [];
      Object.keys(legacyConnections).forEach(fromNodeName => {
        const fromId = nodes.find(node => node.name === fromNodeName)?.id ?? "";
        Object.keys(legacyConnections[fromNodeName]).forEach(fromConnectionType => {
          legacyConnections[fromNodeName][fromConnectionType]?.forEach((toPorts, fromIndex) => {
            toPorts?.forEach(toPort => {
              const toNodeName = toPort.node;
              const toId = nodes.find(node => node.name === toNodeName)?.id ?? "";
              const toConnectionType = toPort.type;
              const toIndex = toPort.index;
              const sourceHandle = createCanvasConnectionHandleString({
                mode: CanvasConnectionMode.Output,
                type: fromConnectionType,
                index: fromIndex
              });
              const targetHandle = createCanvasConnectionHandleString({
                mode: CanvasConnectionMode.Input,
                type: toConnectionType,
                index: toIndex
              });
              const connectionId = createCanvasConnectionId({
                source: fromId,
                sourceHandle,
                target: toId,
                targetHandle
              });
              if (fromId && toId) mappedConnections.push({
                id: connectionId,
                source: fromId,
                target: toId,
                sourceHandle,
                targetHandle,
                data: {
                  source: {
                    node: fromNodeName,
                    index: fromIndex,
                    type: fromConnectionType
                  },
                  target: {
                    node: toNodeName,
                    index: toIndex,
                    type: toConnectionType
                  }
                }
              });
            });
          });
        });
      });
      return mappedConnections;
    }
    /**
    * Maps a single legacy n8n connection to a VueFlow connection
    */
    function mapLegacyConnectionToCanvasConnection(sourceNode, targetNode, legacyConnection) {
      return {
        source: sourceNode.id,
        sourceHandle: createCanvasConnectionHandleString({
          mode: CanvasConnectionMode.Output,
          type: legacyConnection[0].type,
          index: legacyConnection[0].index
        }),
        target: targetNode.id,
        targetHandle: createCanvasConnectionHandleString({
          mode: CanvasConnectionMode.Input,
          type: legacyConnection[1].type,
          index: legacyConnection[1].index
        })
      };
    }
    /**
    * Parses a canvas connection handle string into its parts:
    * - mode
    * - type
    * - index
    */
    function parseCanvasConnectionHandleString(handle) {
      const [mode, type, index] = (handle ?? "").split("/");
      const resolvedMode = isValidCanvasConnectionMode(mode) ? mode : CanvasConnectionMode.Output;
      const resolvedType = isValidNodeConnectionType(type) ? type : NodeConnectionTypes.Main;
      let resolvedIndex = parseInt(index, 10);
      if (isNaN(resolvedIndex)) resolvedIndex = 0;
      return {
        mode: resolvedMode,
        type: resolvedType,
        index: resolvedIndex
      };
    }
    /**
    * Creates a canvas connection handle string from its parts
    */
    function createCanvasConnectionHandleString({
      mode,
      type = NodeConnectionTypes.Main,
      index = 0
    }) {
      return `${mode}/${type}/${index}`;
    }
    /**
    * Creates a canvas connection ID from a connection
    */
    function createCanvasConnectionId(connection) {
      return `[${connection.source}/${connection.sourceHandle}][${connection.target}/${connection.targetHandle}]`;
    }
    /**
    * Maps a VueFlow connection to a legacy n8n connection
    */
    function mapCanvasConnectionToLegacyConnection(sourceNode, targetNode, connection) {
      const sourceNodeName = sourceNode?.name ?? "";
      const {
        type: sourceType,
        index: sourceIndex
      } = parseCanvasConnectionHandleString(connection.sourceHandle);
      const targetNodeName = targetNode?.name ?? "";
      const {
        type: targetType,
        index: targetIndex
      } = parseCanvasConnectionHandleString(connection.targetHandle);
      return [{
        node: sourceNodeName,
        type: sourceType,
        index: sourceIndex
      }, {
        node: targetNodeName,
        type: targetType,
        index: targetIndex
      }];
    }
    /**
    * Maps legacy n8n node inputs to VueFlow connection handles
    */
    function mapLegacyEndpointsToCanvasConnectionPort(endpoints, endpointNames = []) {
      if (typeof endpoints === "string") {
        console.warn("Node endpoints have not been evaluated", endpoints);
        return [];
      }
      return endpoints.map((endpoint, endpointIndex) => {
        const typeValue = typeof endpoint === "string" ? endpoint : endpoint.type;
        const type = isValidNodeConnectionType(typeValue) ? typeValue : NodeConnectionTypes.Main;
        const label = typeof endpoint === "string" ? endpointNames[endpointIndex] : endpoint.displayName;
        const index = endpoints.slice(0, endpointIndex + 1).filter(e => (typeof e === "string" ? e : e.type) === type).length - 1;
        const required = typeof endpoint === "string" ? false : endpoint.required;
        const maxConnections = typeof endpoint === "string" ? void 0 : endpoint.maxConnections;
        return {
          type,
          index,
          label,
          ...(maxConnections ? {
            maxConnections
          } : {}),
          ...(required ? {
            required
          } : {})
        };
      });
    }
    /**
    * Checks if two bounding boxes overlap
    */
    function checkOverlap(node1, node2) {
      return !(node1.x + node1.width <= node2.x || node2.x + node2.width <= node1.x || node1.y + node1.height <= node2.y || node2.y + node2.height <= node1.y);
    }
    /**
    * Inserts spacers between endpoints to visually separate them
    */
    function insertSpacersBetweenEndpoints(endpoints, requiredEndpointsCount = 0) {
      const endpointsWithSpacers = [...endpoints];
      const optionalNonMainInputsCount = endpointsWithSpacers.length - requiredEndpointsCount;
      const spacerCount = 4 - requiredEndpointsCount - optionalNonMainInputsCount;
      if (endpointsWithSpacers.length < 4) for (let i = 0; i < spacerCount; i++) endpointsWithSpacers.splice(requiredEndpointsCount + i, 0, null);
      return endpointsWithSpacers;
    }
    function shouldIgnoreCanvasShortcut(el) {
      return ["INPUT", "TEXTAREA"].includes(el.tagName) || el.closest("[contenteditable]") !== null || el.closest(".ignore-key-press-canvas") !== null;
    }

    //#endregion
    //#region src/features/shared/nodeCreator/nodeCreator.store.ts
    _export({
      _: useCalloutHelpers,
      a: mapCanvasConnectionToLegacyConnection,
      c: mapLegacyEndpointsToCanvasConnectionPort,
      g: TriggerView,
      h: RegularView,
      i: insertSpacersBetweenEndpoints,
      l: parseCanvasConnectionHandleString,
      m: AIView,
      n: checkOverlap,
      o: mapLegacyConnectionToCanvasConnection,
      p: AINodesView,
      r: createCanvasConnectionHandleString,
      s: mapLegacyConnectionsToCanvasConnections,
      u: shouldIgnoreCanvasShortcut
    });
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
        __commonJS = _chunkLegacy001Js.t;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        require__arrayMap = _truncateLegacy00hJs.c;
        require_get = _truncateLegacy00hJs.r;
        require_toString = _truncateLegacy00hJs.s;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_useTelemetryLegacy00FJs) {
        isPrebuiltAgentTemplateId = _useTelemetryLegacy00FJs.At;
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        require__createCompounder = _useTelemetryLegacy00FJs.Bt;
        STORES = _useTelemetryLegacy00FJs.Cc;
        transformNodeType = _useTelemetryLegacy00FJs.Ct;
        getRagStarterWorkflowJson = _useTelemetryLegacy00FJs.Dt;
        useProjectsStore = _useTelemetryLegacy00FJs.En;
        getPrebuiltAgents = _useTelemetryLegacy00FJs.Et;
        v4_default = _useTelemetryLegacy00FJs.Io;
        updateCurrentUserSettings = _useTelemetryLegacy00FJs.Ko;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        getSampleWorkflowByTemplateId = _useTelemetryLegacy00FJs.Ot;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        require_upperFirst = _useTelemetryLegacy00FJs.Rt;
        subcategorizeItems = _useTelemetryLegacy00FJs.St;
        useCanvasStore = _useTelemetryLegacy00FJs.Un;
        getThemedValue = _useTelemetryLegacy00FJs.Zr;
        prepareCommunityNodeDetailsViewStack = _useTelemetryLegacy00FJs._t;
        useNDVStore = _useTelemetryLegacy00FJs.a;
        useEvaluationStore = _useTelemetryLegacy00FJs.at;
        CanvasConnectionMode = _useTelemetryLegacy00FJs.br;
        flattenCreateElements = _useTelemetryLegacy00FJs.ct;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        getPreBuiltAgentsCalloutWithDivider = _useTelemetryLegacy00FJs.ft;
        isValidNodeConnectionType = _useTelemetryLegacy00FJs.gr;
        isAINode = _useTelemetryLegacy00FJs.ht;
        usePostHog = _useTelemetryLegacy00FJs.i;
        isTutorialTemplateId = _useTelemetryLegacy00FJs.jt;
        getTutorialTemplates = _useTelemetryLegacy00FJs.kt;
        isValidCanvasConnectionMode = _useTelemetryLegacy00FJs.mr;
        groupItemsInSections = _useTelemetryLegacy00FJs.mt;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        extendItemsWithUUID = _useTelemetryLegacy00FJs.ot;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        getAiTemplatesCallout = _useTelemetryLegacy00FJs.ut;
        isVueFlowConnection = _useTelemetryLegacy00FJs.vr;
        SampleTemplates = _useTelemetryLegacy00FJs.wt;
        defineStore = _useTelemetryLegacy00FJs.xc;
        sortNodeCreateElements = _useTelemetryLegacy00FJs.xt;
        searchNodes = _useTelemetryLegacy00FJs.yt;
      }, function (_constantsLegacy00NJs) {
        DEFAULT_SUBCATEGORY = _constantsLegacy00NJs.$a;
        require__arrayIncludesWith = _constantsLegacy00NJs.$r;
        require__SetCache = _constantsLegacy00NJs.Aa;
        AI_CATEGORY_RETRIEVERS = _constantsLegacy00NJs.Ba;
        MERGE_NODE_TYPE = _constantsLegacy00NJs.Bt;
        NODE_MIN_INPUT_ITEMS_COUNT = _constantsLegacy00NJs.Cr;
        HTTP_REQUEST_NODE_TYPE = _constantsLegacy00NJs.Et;
        AI_CATEGORY_LANGUAGE_MODELS = _constantsLegacy00NJs.Fa;
        AGGREGATE_NODE_TYPE = _constantsLegacy00NJs.G;
        AI_CODE_TOOL_LANGCHAIN_NODE_TYPE = _constantsLegacy00NJs.Ga;
        AI_CATEGORY_TEXT_SPLITTERS = _constantsLegacy00NJs.Ha;
        CUSTOM_API_CALL_KEY = _constantsLegacy00NJs.I;
        AI_CATEGORY_MCP_NODES = _constantsLegacy00NJs.Ia;
        PRE_BUILT_AGENTS_EXPERIMENT = _constantsLegacy00NJs.Is;
        AI_TRANSFORM_NODE_TYPE$1 = _constantsLegacy00NJs.J;
        AI_OTHERS_NODE_CREATOR_VIEW = _constantsLegacy00NJs.Ja;
        AI_CODE_NODE_TYPE = _constantsLegacy00NJs.K;
        AI_CATEGORY_MEMORY = _constantsLegacy00NJs.La;
        PRE_BUILT_AGENTS_MODAL_KEY = _constantsLegacy00NJs.Lo;
        MANUAL_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.Lt;
        AI_CATEGORY_CHAINS = _constantsLegacy00NJs.Ma;
        AI_CATEGORY_DOCUMENT_LOADERS = _constantsLegacy00NJs.Na;
        WEBHOOK_NODE_TYPE = _constantsLegacy00NJs.On;
        require__baseFlatten = _constantsLegacy00NJs.Or;
        IF_NODE_TYPE = _constantsLegacy00NJs.Ot;
        AI_CATEGORY_EMBEDDING = _constantsLegacy00NJs.Pa;
        XML_NODE_TYPE = _constantsLegacy00NJs.Pn;
        LIMIT_NODE_TYPE = _constantsLegacy00NJs.Pt;
        CHAT_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.Q;
        CORE_NODES_CATEGORY = _constantsLegacy00NJs.Qa;
        MARKDOWN_NODE_TYPE = _constantsLegacy00NJs.Rt;
        SUMMARIZE_NODE_TYPE = _constantsLegacy00NJs.Sn;
        FORM_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.St;
        HTML_NODE_TYPE = _constantsLegacy00NJs.Tt;
        AI_CATEGORY_TOOLS = _constantsLegacy00NJs.Ua;
        isCommunityPackageName = _constantsLegacy00NJs.Ui;
        AI_CATEGORY_ROOT_NODES = _constantsLegacy00NJs.Va;
        AI_CATEGORY_VECTOR_STORES = _constantsLegacy00NJs.Wa;
        AI_UNCATEGORIZED_CATEGORY = _constantsLegacy00NJs.Xa;
        AI_SUBCATEGORY = _constantsLegacy00NJs.Ya;
        AI_WORKFLOW_TOOL_LANGCHAIN_NODE_TYPE = _constantsLegacy00NJs.Za;
        getNodeInputs = _constantsLegacy00NJs._i;
        SPLIT_IN_BATCHES_NODE_TYPE = _constantsLegacy00NJs._n;
        OTHER_TRIGGER_NODES_SUBCATEGORY = _constantsLegacy00NJs.ao;
        FILTER_NODE_TYPE = _constantsLegacy00NJs.bt;
        DATETIME_NODE_TYPE = _constantsLegacy00NJs.ct;
        TRIGGER_NODE_CREATOR_VIEW = _constantsLegacy00NJs.do;
        NodeConnectionTypes = _constantsLegacy00NJs.ea;
        require__arrayIncludes = _constantsLegacy00NJs.ei;
        FLOWS_CONTROL_SUBCATEGORY = _constantsLegacy00NJs.eo;
        CODE_NODE_TYPE = _constantsLegacy00NJs.et;
        EVALUATION_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.fa;
        SET_NODE_TYPE = _constantsLegacy00NJs.fn;
        EMAIL_IMAP_NODE_TYPE = _constantsLegacy00NJs.ft;
        NODE_CREATOR_OPEN_SOURCES = _constantsLegacy00NJs.io;
        AI_CATEGORY_AGENTS = _constantsLegacy00NJs.ja;
        require__cacheHas = _constantsLegacy00NJs.ka;
        SCHEDULE_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.ln;
        TEMPLATE_CATEGORY_AI = _constantsLegacy00NJs.lo;
        VIEWS = _constantsLegacy00NJs.mo;
        HITL_SUBCATEGORY = _constantsLegacy00NJs.no;
        CONVERT_TO_FILE_NODE_TYPE = _constantsLegacy00NJs.nt;
        REMOVE_DUPLICATES_NODE_TYPE = _constantsLegacy00NJs.on;
        CRYPTO_NODE_TYPE = _constantsLegacy00NJs.ot;
        EMAIL_SEND_NODE_TYPE = _constantsLegacy00NJs.pt;
        AI_NODE_CREATOR_VIEW = _constantsLegacy00NJs.qa;
        HUMAN_IN_THE_LOOP_CATEGORY = _constantsLegacy00NJs.ro;
        AI_TRANSFORM_NODE_TYPE = _constantsLegacy00NJs.sa;
        RSS_READ_NODE_TYPE = _constantsLegacy00NJs.sn;
        REGULAR_NODE_CREATOR_VIEW = _constantsLegacy00NJs.so;
        HELPERS_SUBCATEGORY = _constantsLegacy00NJs.to;
        COMPRESSION_NODE_TYPE = _constantsLegacy00NJs.tt;
        TRANSFORM_DATA_SUBCATEGORY = _constantsLegacy00NJs.uo;
        EDIT_IMAGE_NODE_TYPE = _constantsLegacy00NJs.ut;
        SPLIT_OUT_NODE_TYPE = _constantsLegacy00NJs.vn;
        EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.vt;
        EXTRACT_FROM_FILE_NODE_TYPE = _constantsLegacy00NJs.yt;
        AI_CATEGORY_OUTPUTPARSER = _constantsLegacy00NJs.za;
      }, function (_mergeLegacy00PJs) {
        require__baseUnary = _mergeLegacy00PJs.T;
        require__baseRest = _mergeLegacy00PJs.r;
        require_isArrayLikeObject = _mergeLegacy00PJs.u;
      }, function (_useExternalHooksLegacy00XJs) {
        useExternalHooks = _useExternalHooksLegacy00XJs.t;
      }, function (_templatesStoreLegacy015Js) {
        useTemplatesStore = _templatesStoreLegacy015Js.t;
      }, function (_nodeIconLegacy01lJs) {
        getNodeIconSource = _nodeIconLegacy01lJs.t;
      }],
      execute: function () {
        //#region ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseDifference.js
        require__baseDifference = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseDifference.js": (exports, module) => {
            var SetCache = require__SetCache(),
              arrayIncludes = require__arrayIncludes(),
              arrayIncludesWith = require__arrayIncludesWith(),
              arrayMap = require__arrayMap(),
              baseUnary = require__baseUnary(),
              cacheHas = require__cacheHas();
            /** Used as the size to enable large array optimizations. */
            var LARGE_ARRAY_SIZE = 200;
            /**
            * The base implementation of methods like `_.difference` without support
            * for excluding multiple arrays or iteratee shorthands.
            *
            * @private
            * @param {Array} array The array to inspect.
            * @param {Array} values The values to exclude.
            * @param {Function} [iteratee] The iteratee invoked per element.
            * @param {Function} [comparator] The comparator invoked per element.
            * @returns {Array} Returns the new array of filtered values.
            */
            function baseDifference$1(array, values, iteratee, comparator) {
              var index = -1,
                includes = arrayIncludes,
                isCommon = true,
                length = array.length,
                result = [],
                valuesLength = values.length;
              if (!length) return result;
              if (iteratee) values = arrayMap(values, baseUnary(iteratee));
              if (comparator) {
                includes = arrayIncludesWith;
                isCommon = false;
              } else if (values.length >= LARGE_ARRAY_SIZE) {
                includes = cacheHas;
                isCommon = false;
                values = new SetCache(values);
              }
              outer: while (++index < length) {
                var value = array[index],
                  computed$1 = iteratee == null ? value : iteratee(value);
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed$1 === computed$1) {
                  var valuesIndex = valuesLength;
                  while (valuesIndex--) if (values[valuesIndex] === computed$1) continue outer;
                  result.push(value);
                } else if (!includes(values, computed$1, comparator)) result.push(value);
              }
              return result;
            }
            module.exports = baseDifference$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/difference.js
        require_difference = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/difference.js": (exports, module) => {
            var baseDifference = require__baseDifference(),
              baseFlatten = require__baseFlatten(),
              baseRest = require__baseRest(),
              isArrayLikeObject = require_isArrayLikeObject();
            /**
            * Creates an array of `array` values not included in the other given arrays
            * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
            * for equality comparisons. The order and references of result values are
            * determined by the first array.
            *
            * **Note:** Unlike `_.pullAll`, this method returns a new array.
            *
            * @static
            * @memberOf _
            * @since 0.1.0
            * @category Array
            * @param {Array} array The array to inspect.
            * @param {...Array} [values] The values to exclude.
            * @returns {Array} Returns the new array of filtered values.
            * @see _.without, _.xor
            * @example
            *
            * _.difference([2, 1], [2, 3]);
            * // => [1]
            */
            var difference$1 = baseRest(function (array, values) {
              return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
            });
            module.exports = difference$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/capitalize.js
        _export("y", require_capitalize = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/capitalize.js": (exports, module) => {
            var toString = require_toString(),
              upperFirst = require_upperFirst();
            /**
            * Converts the first character of `string` to upper case and the remaining
            * to lower case.
            *
            * @static
            * @memberOf _
            * @since 3.0.0
            * @category String
            * @param {string} [string=''] The string to capitalize.
            * @returns {string} Returns the capitalized string.
            * @example
            *
            * _.capitalize('FRED');
            * // => 'Fred'
            */
            function capitalize$1(string) {
              return upperFirst(toString(string).toLowerCase());
            }
            module.exports = capitalize$1;
          }
        })); //#endregion
        //#region ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/camelCase.js
        _export("v", require_camelCase = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/camelCase.js": (exports, module) => {
            var capitalize = require_capitalize();
            /**
            * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
            *
            * @static
            * @memberOf _
            * @since 3.0.0
            * @category String
            * @param {string} [string=''] The string to convert.
            * @returns {string} Returns the camel cased string.
            * @example
            *
            * _.camelCase('Foo Bar');
            * // => 'fooBar'
            *
            * _.camelCase('--foo-bar--');
            * // => 'fooBar'
            *
            * _.camelCase('__FOO_BAR__');
            * // => 'fooBar'
            */
            var camelCase$1 = require__createCompounder()(function (result, word, index) {
              word = word.toLowerCase();
              return result + (index ? capitalize(word) : word);
            });
            module.exports = camelCase$1;
          }
        }));
        import_camelCase = /* @__PURE__ */__toESM(require_camelCase());
        KEYBOARD_ID_ATTR = "data-keyboard-nav-id";
        WATCHED_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter", "Escape", "Tab"];
        _export("f", useKeyboardNavigation = defineStore("nodeCreatorKeyboardNavigation", () => {
          const selectableItems = ref([]);
          const activeItemId = ref(null);
          const keysHooks = ref({});
          function shouldAllowNativeInputBehavior(target, key) {
            if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) return false;
            const hasContent = target.value.length > 0;
            if (key === "ArrowLeft" && hasContent) return true;
            if (key === "ArrowRight" && hasContent) return !((target.selectionStart || 0) >= target.value.length);
            return false;
          }
          function getItemType(element) {
            return element?.getAttribute("data-keyboard-nav-type");
          }
          function getElementId(element) {
            return element?.getAttribute("data-keyboard-nav-id") || void 0;
          }
          async function refreshSelectableItems() {
            return await new Promise(resolve => {
              cleanupSelectableItems();
              setTimeout(() => {
                selectableItems.value = Array.from(document.querySelectorAll("[data-keyboard-nav-type]")).map(el => new WeakRef(el));
                resolve();
              }, 0);
            });
          }
          function executeKeyHooks(keyboardKey, activeItem) {
            Object.values(keysHooks.value).filter(hook => hook.keyboardKeys.includes(keyboardKey)).forEach(hook => {
              if (!activeItemId.value) return;
              if ((hook.condition === void 0 || hook.condition(getItemType(activeItem) || "", activeItemId.value)) && activeItemId.value) hook.handler(activeItemId.value, keyboardKey);
            });
          }
          async function onKeyDown(e) {
            if (e.target instanceof Element && e.target.classList.contains("ignore-key-press-node-creator")) return;
            const pressedKey = e.key;
            if (!WATCHED_KEYS.includes(pressedKey)) return;
            if (shouldAllowNativeInputBehavior(e.target, pressedKey)) return;
            e.preventDefault();
            e.stopPropagation();
            await refreshSelectableItems();
            const activeItemIndex = selectableItems.value.findIndex(item => getElementId(item?.deref()) === activeItemId.value);
            const activeItem = selectableItems.value[activeItemIndex]?.deref();
            const isArrowDown = pressedKey === "ArrowDown";
            const isArrowUp = pressedKey === "ArrowUp";
            if (!activeItem) return;
            if (isArrowDown) {
              const nextItemIndex = activeItemIndex < selectableItems.value.length - 1 ? activeItemIndex + 1 : 0;
              setActiveItem(selectableItems.value[nextItemIndex]?.deref());
            }
            if (isArrowUp) {
              const previousIndex = activeItemIndex > 0 ? activeItemIndex - 1 : selectableItems.value.length - 1;
              setActiveItem(selectableItems.value[previousIndex]?.deref());
            }
            executeKeyHooks(pressedKey, activeItem);
          }
          function setActiveItemId(id) {
            activeItemId.value = id;
          }
          function setActiveItem(item) {
            const itemId = getElementId(item);
            if (!itemId) return;
            setActiveItemId(itemId);
            if (item?.scrollIntoView) item?.scrollIntoView({
              block: "center"
            });
          }
          async function setActiveItemIndex(index) {
            await refreshSelectableItems();
            setActiveItem(selectableItems.value[index]?.deref());
          }
          function attachKeydownEvent() {
            document.addEventListener("keydown", onKeyDown, {
              capture: true
            });
          }
          function detachKeydownEvent() {
            cleanupSelectableItems();
            document.removeEventListener("keydown", onKeyDown, {
              capture: true
            });
          }
          function registerKeyHook(name, hook) {
            hook.keyboardKeys.forEach(keyboardKey => {
              if (WATCHED_KEYS.includes(keyboardKey)) keysHooks.value = {
                ...keysHooks.value,
                [name]: hook
              };else throw new Error(`Key ${keyboardKey} is not supported`);
            });
          }
          function cleanupSelectableItems() {
            selectableItems.value = [];
          }
          function getActiveItemIndex() {
            return selectableItems.value.findIndex(item => getElementId(item?.deref()) === activeItemId.value);
          }
          return {
            activeItemId,
            attachKeydownEvent,
            refreshSelectableItems,
            detachKeydownEvent,
            registerKeyHook,
            getActiveItemIndex,
            setActiveItemId,
            setActiveItemIndex
          };
        })); //#endregion
        //#region \0virtual:node-popularity-data
        __virtual_node_popularity_data_default = [{
          "id": "n8n-nodes-base.httpRequest",
          "popularity": .984
        }, {
          "id": "n8n-nodes-base.code",
          "popularity": 1
        }, {
          "id": "@n8n/n8n-nodes-langchain.memoryBufferWindow",
          "popularity": .943
        }, {
          "id": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
          "popularity": .949
        }, {
          "id": "n8n-nodes-base.scheduleTrigger",
          "popularity": .91
        }, {
          "id": "n8n-nodes-base.webhook",
          "popularity": .941
        }, {
          "id": "n8n-nodes-base.set",
          "popularity": .978
        }, {
          "id": "n8n-nodes-base.if",
          "popularity": .95
        }, {
          "id": "@n8n/n8n-nodes-langchain.lmChatGoogleGemini",
          "popularity": .915
        }, {
          "id": "@n8n/n8n-nodes-langchain.openAi",
          "popularity": .904
        }, {
          "id": "n8n-nodes-base.gmail",
          "popularity": .905
        }, {
          "id": "n8n-nodes-base.noOp",
          "popularity": .907
        }, {
          "id": "n8n-nodes-base.formTrigger",
          "popularity": .871
        }, {
          "id": "n8n-nodes-base.merge",
          "popularity": .896
        }, {
          "id": "n8n-nodes-base.telegramTrigger",
          "popularity": .876
        }, {
          "id": "n8n-nodes-base.splitInBatches",
          "popularity": .883
        }, {
          "id": "n8n-nodes-base.switch",
          "popularity": .876
        }, {
          "id": "n8n-nodes-base.telegram",
          "popularity": .906
        }, {
          "id": "@n8n/n8n-nodes-langchain.chainLlm",
          "popularity": .857
        }, {
          "id": "n8n-nodes-base.wait",
          "popularity": .863
        }, {
          "id": "@n8n/n8n-nodes-langchain.googleGemini",
          "popularity": .855
        }, {
          "id": "n8n-nodes-base.splitOut",
          "popularity": .86
        }, {
          "id": "n8n-nodes-base.googleDrive",
          "popularity": .874
        }, {
          "id": "n8n-nodes-base.respondToWebhook",
          "popularity": .85
        }, {
          "id": "n8n-nodes-base.filter",
          "popularity": .845
        }, {
          "id": "n8n-nodes-base.extractFromFile",
          "popularity": .838
        }, {
          "id": "n8n-nodes-base.googleSheetsTool",
          "popularity": .858
        }, {
          "id": "@n8n/n8n-nodes-langchain.outputParserStructured",
          "popularity": .84
        }, {
          "id": "n8n-nodes-base.httpRequestTool",
          "popularity": .824
        }, {
          "id": "n8n-nodes-base.aggregate",
          "popularity": .833
        }, {
          "id": "n8n-nodes-base.convertToFile",
          "popularity": .812
        }, {
          "id": "n8n-nodes-base.gmailTrigger",
          "popularity": .798
        }, {
          "id": "@n8n/n8n-nodes-langchain.toolWorkflow",
          "popularity": .811
        }, {
          "id": "n8n-nodes-base.googleCalendarTool",
          "popularity": .835
        }, {
          "id": "n8n-nodes-base.whatsApp",
          "popularity": .808
        }, {
          "id": "n8n-nodes-base.executeWorkflowTrigger",
          "popularity": .804
        }, {
          "id": "n8n-nodes-base.gmailTool",
          "popularity": .808
        }, {
          "id": "n8n-nodes-base.emailSend",
          "popularity": .784
        }, {
          "id": "n8n-nodes-base.readWriteFile",
          "popularity": .806
        }, {
          "id": "n8n-nodes-base.whatsAppTrigger",
          "popularity": .793
        }, {
          "id": "@n8n/n8n-nodes-langchain.lmChatDeepSeek",
          "popularity": .799
        }, {
          "id": "n8n-nodes-base.dataTable",
          "popularity": .853
        }, {
          "id": "@n8n/n8n-nodes-langchain.lmChatOllama",
          "popularity": .803
        }, {
          "id": "@n8n/n8n-nodes-langchain.lmChatAnthropic",
          "popularity": .777
        }, {
          "id": "n8n-nodes-base.googleSheetsTrigger",
          "popularity": .786
        }, {
          "id": "n8n-nodes-base.executeWorkflow",
          "popularity": .811
        }, {
          "id": "@n8n/n8n-nodes-langchain.mcpClientTool",
          "popularity": .789
        }, {
          "id": "@n8n/n8n-nodes-langchain.informationExtractor",
          "popularity": .759
        }, {
          "id": "@n8n/n8n-nodes-langchain.memoryPostgresChat",
          "popularity": .771
        }, {
          "id": "@n8n/n8n-nodes-langchain.toolCode",
          "popularity": .758
        }, {
          "id": "@n8n/n8n-nodes-langchain.agentTool",
          "popularity": .767
        }, {
          "id": "n8n-nodes-base.executeCommand",
          "popularity": .782
        }, {
          "id": "n8n-nodes-base.limit",
          "popularity": .774
        }, {
          "id": "n8n-nodes-base.slack",
          "popularity": .778
        }, {
          "id": "n8n-nodes-base.html",
          "popularity": .766
        }, {
          "id": "n8n-nodes-base.postgres",
          "popularity": .82
        }, {
          "id": "@n8n/n8n-nodes-langchain.embeddingsOpenAi",
          "popularity": .78
        }, {
          "id": "@n8n/n8n-nodes-langchain.chat",
          "popularity": .758
        }, {
          "id": "n8n-nodes-base.googleDriveTrigger",
          "popularity": .76
        }, {
          "id": "@n8n/n8n-nodes-langchain.mcpTrigger",
          "popularity": .746
        }, {
          "id": "n8n-nodes-base.googleDocs",
          "popularity": .771
        }, {
          "id": "n8n-nodes-base.supabase",
          "popularity": .81
        }, {
          "id": "n8n-nodes-base.rssFeedRead",
          "popularity": .759
        }, {
          "id": "n8n-nodes-base.googleCalendar",
          "popularity": .759
        }, {
          "id": "n8n-nodes-base.airtable",
          "popularity": .8
        }, {
          "id": "@n8n/n8n-nodes-langchain.lmChatGroq",
          "popularity": .76
        }, {
          "id": "@n8n/n8n-nodes-langchain.textClassifier",
          "popularity": .724
        }, {
          "id": "n8n-nodes-base.emailReadImap",
          "popularity": .718
        }, {
          "id": "@n8n/n8n-nodes-langchain.toolCalculator",
          "popularity": .722
        }, {
          "id": "n8n-nodes-base.microsoftExcel",
          "popularity": .738
        }, {
          "id": "n8n-nodes-base.form",
          "popularity": .75
        }, {
          "id": "n8n-nodes-base.discord",
          "popularity": .749
        }, {
          "id": "n8n-nodes-base.aiTransform",
          "popularity": .707
        }, {
          "id": "n8n-nodes-base.microsoftOutlook",
          "popularity": .747
        }, {
          "id": "@n8n/n8n-nodes-langchain.agent",
          "popularity": .986
        }, {
          "id": "@n8n/n8n-nodes-langchain.chatTrigger",
          "popularity": .955
        }, {
          "id": "@n8n/n8n-nodes-langchain.toolSerpApi",
          "popularity": .726
        }, {
          "id": "@n8n/n8n-nodes-langchain.toolThink",
          "popularity": .724
        }, {
          "id": "n8n-nodes-base.notion",
          "popularity": .771
        }, {
          "id": "@n8n/n8n-nodes-langchain.outputParserAutofixing",
          "popularity": .705
        }, {
          "id": "@n8n/n8n-nodes-langchain.vectorStorePinecone",
          "popularity": .745
        }, {
          "id": "@n8n/n8n-nodes-langchain.vectorStoreInMemory",
          "popularity": .727
        }, {
          "id": "n8n-nodes-base.dateTime",
          "popularity": .724
        }, {
          "id": "n8n-nodes-base.youTube",
          "popularity": .707
        }, {
          "id": "@n8n/n8n-nodes-langchain.memoryMongoDbChat",
          "popularity": .686
        }, {
          "id": "n8n-nodes-base.markdown",
          "popularity": .694
        }, {
          "id": "n8n-nodes-base.googleDriveTool",
          "popularity": .708
        }, {
          "id": "n8n-nodes-base.stopAndError",
          "popularity": .693
        }, {
          "id": "n8n-nodes-base.errorTrigger",
          "popularity": .683
        }, {
          "id": "@n8n/n8n-nodes-langchain.memoryRedisChat",
          "popularity": .697
        }, {
          "id": "n8n-nodes-base.executionData",
          "popularity": .675
        }, {
          "id": "@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter",
          "popularity": .69
        }, {
          "id": "n8n-nodes-base.telegramTool",
          "popularity": .691
        }, {
          "id": "n8n-nodes-base.googleDocsTool",
          "popularity": .701
        }, {
          "id": "@n8n/n8n-nodes-langchain.toolWikipedia",
          "popularity": .682
        }, {
          "id": "n8n-nodes-base.facebookGraphApi",
          "popularity": .697
        }, {
          "id": "@n8n/n8n-nodes-langchain.lmChatAzureOpenAi",
          "popularity": .693
        }, {
          "id": "@n8n/n8n-nodes-langchain.anthropic",
          "popularity": .684
        }, {
          "id": "@n8n/n8n-nodes-langchain.embeddingsGoogleGemini",
          "popularity": .715
        }, {
          "id": "@n8n/n8n-nodes-langchain.modelSelector",
          "popularity": .659
        }, {
          "id": "n8n-nodes-base.microsoftOutlookTrigger",
          "popularity": .674
        }, {
          "id": "n8n-nodes-base.mySql",
          "popularity": .735
        }, {
          "id": "@n8n/n8n-nodes-langchain.chainRetrievalQa",
          "popularity": .655
        }, {
          "id": "n8n-nodes-base.dataTableTool",
          "popularity": .7
        }, {
          "id": "@n8n/n8n-nodes-langchain.lmChatXAiGrok",
          "popularity": .673
        }, {
          "id": "n8n-nodes-base.whatsAppTool",
          "popularity": .662
        }, {
          "id": "@n8n/n8n-nodes-langchain.memoryManager",
          "popularity": .675
        }, {
          "id": "n8n-nodes-base.perplexity",
          "popularity": .668
        }, {
          "id": "n8n-nodes-base.supabaseTool",
          "popularity": .695
        }, {
          "id": "n8n-nodes-base.removeDuplicates",
          "popularity": .682
        }, {
          "id": "n8n-nodes-base.rssFeedReadTrigger",
          "popularity": .672
        }, {
          "id": "n8n-nodes-base.slackTrigger",
          "popularity": .685
        }, {
          "id": "n8n-nodes-base.redis",
          "popularity": .73
        }, {
          "id": "@apify/n8n-nodes-apify.apify",
          "popularity": .697
        }, {
          "id": "n8n-nodes-base.microsoftTeams",
          "popularity": .675
        }, {
          "id": "n8n-nodes-base.facebookTrigger",
          "popularity": .654
        }, {
          "id": "@n8n/n8n-nodes-langchain.lmChatGoogleVertex",
          "popularity": .653
        }, {
          "id": "n8n-nodes-base.sort",
          "popularity": .658
        }, {
          "id": "@n8n/n8n-nodes-langchain.vectorStorePGVector",
          "popularity": .678
        }, {
          "id": "n8n-nodes-base.n8n",
          "popularity": .664
        }, {
          "id": "n8n-nodes-base.dateTimeTool",
          "popularity": .653
        }, {
          "id": "n8n-nodes-base.localFileTrigger",
          "popularity": .65
        }, {
          "id": "n8n-nodes-base.evaluationTrigger",
          "popularity": .638
        }, {
          "id": "n8n-nodes-base.editImage",
          "popularity": .662
        }, {
          "id": "n8n-nodes-base.linkedIn",
          "popularity": .662
        }, {
          "id": "n8n-nodes-base.twilio",
          "popularity": .665
        }, {
          "id": "n8n-nodes-base.ssh",
          "popularity": .66
        }, {
          "id": "@n8n/n8n-nodes-langchain.sentimentAnalysis",
          "popularity": .638
        }, {
          "id": "@n8n/n8n-nodes-langchain.chainSummarization",
          "popularity": .639
        }, {
          "id": "n8n-nodes-base.airtableTool",
          "popularity": .671
        }, {
          "id": "n8n-nodes-whatsable.whatsAble",
          "popularity": .631
        }, {
          "id": "n8n-nodes-base.perplexityTool",
          "popularity": .654
        }, {
          "id": "n8n-nodes-base.openWeatherMapTool",
          "popularity": .641
        }, {
          "id": "n8n-nodes-base.openWeatherMap",
          "popularity": .647
        }, {
          "id": "n8n-nodes-base.xml",
          "popularity": .65
        }, {
          "id": "@n8n/n8n-nodes-langchain.embeddingsOllama",
          "popularity": .662
        }, {
          "id": "n8n-nodes-base.postgresTool",
          "popularity": .668
        }, {
          "id": "@n8n/n8n-nodes-langchain.vectorStoreQdrant",
          "popularity": .677
        }, {
          "id": "n8n-nodes-base.compareDatasets",
          "popularity": .631
        }, {
          "id": "n8n-nodes-base.airtableTrigger",
          "popularity": .629
        }, {
          "id": "n8n-nodes-base.twitter",
          "popularity": .64
        }, {
          "id": "n8n-nodes-base.microsoftOneDrive",
          "popularity": .685
        }, {
          "id": "n8n-nodes-base.crypto",
          "popularity": .63
        }, {
          "id": "n8n-nodes-base.microsoftOutlookTool",
          "popularity": .646
        }, {
          "id": "n8n-nodes-base.wordpress",
          "popularity": .645
        }, {
          "id": "n8n-nodes-base.evaluation",
          "popularity": .636
        }, {
          "id": "n8n-nodes-base.microsoftExcelTool",
          "popularity": .626
        }, {
          "id": "n8n-nodes-base.notionTool",
          "popularity": .655
        }, {
          "id": "n8n-nodes-base.summarize",
          "popularity": .721
        }, {
          "id": "@n8n/n8n-nodes-langchain.vectorStoreSupabase",
          "popularity": .753
        }, {
          "id": "@n8n/n8n-nodes-langchain.lmOpenHuggingFaceInference",
          "popularity": .622
        }, {
          "id": "n8n-nodes-base.github",
          "popularity": .635
        }, {
          "id": "n8n-nodes-base.ftp",
          "popularity": .626
        }, {
          "id": "n8n-nodes-base.microsoftSql",
          "popularity": .653
        }, {
          "id": "n8n-nodes-base.microsoftSharePoint",
          "popularity": .657
        }, {
          "id": "n8n-nodes-base.debugHelper",
          "popularity": .602
        }, {
          "id": "n8n-nodes-base.n8nTrainingCustomerMessenger",
          "popularity": .564
        }, {
          "id": "@n8n/n8n-nodes-langchain.lmChatAwsBedrock",
          "popularity": .621
        }, {
          "id": "@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter",
          "popularity": .598
        }, {
          "id": "n8n-nodes-base.hubspot",
          "popularity": .662
        }, {
          "id": "@n8n/n8n-nodes-langchain.retrieverVectorStore",
          "popularity": .601
        }, {
          "id": "n8n-nodes-base.googleChat",
          "popularity": .615
        }, {
          "id": "n8n-nodes-base.googleSlides",
          "popularity": .594
        }, {
          "id": "n8n-nodes-cronlytic.cronlyticTrigger",
          "popularity": .584
        }, {
          "id": "n8n-nodes-base.hackerNews",
          "popularity": .585
        }, {
          "id": "n8n-nodes-base.notionTrigger",
          "popularity": .609
        }, {
          "id": "n8n-nodes-base.googleCalendarTrigger",
          "popularity": .6
        }, {
          "id": "n8n-nodes-base.mongoDb",
          "popularity": .651
        }, {
          "id": "n8n-nodes-base.line",
          "popularity": .581
        }, {
          "id": "n8n-nodes-base.rssFeedReadTool",
          "popularity": .595
        }, {
          "id": "n8n-nodes-base.clickUp",
          "popularity": .647
        }, {
          "id": "n8n-nodes-base.awsS3",
          "popularity": .6
        }, {
          "id": "n8n-nodes-base.nasa",
          "popularity": .559
        }, {
          "id": "@n8n/n8n-nodes-langchain.memoryXata",
          "popularity": .548
        }, {
          "id": "n8n-nodes-base.n8nTrigger",
          "popularity": .558
        }, {
          "id": "n8n-nodes-base.s3",
          "popularity": .605
        }, {
          "id": "@searchapi/n8n-nodes-searchapi.searchApi",
          "popularity": .543
        }, {
          "id": "@blotato/n8n-nodes-blotato.blotato",
          "popularity": .625
        }, {
          "id": "n8n-nodes-base.githubTrigger",
          "popularity": .566
        }, {
          "id": "@n8n/n8n-nodes-langchain.textSplitterTokenSplitter",
          "popularity": .558
        }, {
          "id": "n8n-nodes-base.filemaker",
          "popularity": .553
        }, {
          "id": "n8n-nodes-base.shopify",
          "popularity": .601
        }, {
          "id": "n8n-nodes-serpapi.serpApi",
          "popularity": .589
        }, {
          "id": "@n8n/n8n-nodes-langchain.code",
          "popularity": .556
        }, {
          "id": "n8n-nodes-base.postgresTrigger",
          "popularity": .562
        }, {
          "id": "n8n-nodes-base.executeCommandTool",
          "popularity": .565
        }, {
          "id": "@n8n/n8n-nodes-langchain.embeddingsHuggingFaceInference",
          "popularity": .567
        }, {
          "id": "n8n-nodes-base.trello",
          "popularity": .606
        }, {
          "id": "n8n-nodes-pdfco.PDFco Api",
          "popularity": .578
        }, {
          "id": "n8n-nodes-base.nocoDb",
          "popularity": .631
        }, {
          "id": "n8n-nodes-base.salesforce",
          "popularity": .617
        }, {
          "id": "n8n-nodes-base.calTrigger",
          "popularity": .56
        }, {
          "id": "n8n-nodes-base.homeAssistant",
          "popularity": .582
        }, {
          "id": "n8n-nodes-base.jiraTool",
          "popularity": .575
        }, {
          "id": "n8n-nodes-base.emailReadImapTool",
          "popularity": .539
        }, {
          "id": "n8n-nodes-base.quickChart",
          "popularity": .553
        }, {
          "id": "n8n-nodes-base.discordTool",
          "popularity": .574
        }, {
          "id": "@n8n/n8n-nodes-langchain.lmChatCohere",
          "popularity": .553
        }, {
          "id": "n8n-nodes-base.githubTool",
          "popularity": .564
        }, {
          "id": "@brave/n8n-nodes-brave-search.braveSearch",
          "popularity": .538
        }, {
          "id": "n8n-nodes-base.odoo",
          "popularity": .606
        }, {
          "id": "@n8n/n8n-nodes-langchain.vectorStoreMongoDBAtlas",
          "popularity": .552
        }, {
          "id": "n8n-nodes-aiscraper.aiScraper",
          "popularity": .537
        }, {
          "id": "n8n-nodes-base.actionNetwork",
          "popularity": .527
        }, {
          "id": "@mendable/n8n-nodes-firecrawl.firecrawl",
          "popularity": .645
        }, {
          "id": "@n8n/n8n-nodes-langchain.embeddingsCohere",
          "popularity": .548
        }, {
          "id": "n8n-nodes-base.highLevel",
          "popularity": .589
        }, {
          "id": "@n8n/n8n-nodes-langchain.retrieverContextualCompression",
          "popularity": .531
        }, {
          "id": "n8n-nodes-base.sseTrigger",
          "popularity": .521
        }, {
          "id": "n8n-nodes-base.postBin",
          "popularity": .564
        }, {
          "id": "n8n-nodes-base.googleBigQuery",
          "popularity": .578
        }, {
          "id": "n8n-nodes-base.jiraTrigger",
          "popularity": .542
        }, {
          "id": "n8n-nodes-base.googleTranslate",
          "popularity": .525
        }, {
          "id": "n8n-nodes-base.facebookGraphApiTool",
          "popularity": .529
        }, {
          "id": "n8n-nodes-base.baserow",
          "popularity": .612
        }, {
          "id": "n8n-nodes-base.googleContacts",
          "popularity": .547
        }, {
          "id": "n8n-nodes-base.shopifyTrigger",
          "popularity": .558
        }, {
          "id": "n8n-nodes-base.googleContactsTool",
          "popularity": .554
        }, {
          "id": "n8n-nodes-base.hubspotTrigger",
          "popularity": .556
        }, {
          "id": "n8n-nodes-base.formIoTrigger",
          "popularity": .489
        }, {
          "id": "@n8n/n8n-nodes-langchain.documentGithubLoader",
          "popularity": .51
        }, {
          "id": "n8n-nodes-base.googleTasks",
          "popularity": .554
        }, {
          "id": "n8n-nodes-base.microsoftTeamsTool",
          "popularity": .526
        }, {
          "id": "n8n-nodes-base.jira",
          "popularity": .649
        }, {
          "id": "n8n-nodes-base.compression",
          "popularity": .597
        }, {
          "id": "n8n-nodes-base.mySqlTool",
          "popularity": .623
        }, {
          "id": "n8n-nodes-base.renameKeys",
          "popularity": .589
        }, {
          "id": "@n8n/n8n-nodes-langchain.rerankerCohere",
          "popularity": .594
        }, {
          "id": "n8n-nodes-base.youTubeTool",
          "popularity": .584
        }, {
          "id": "@tavily/n8n-nodes-tavily.tavily",
          "popularity": .595
        }, {
          "id": "n8n-nodes-base.reddit",
          "popularity": .608
        }, {
          "id": "n8n-nodes-base.twilioTrigger",
          "popularity": .583
        }, {
          "id": "n8n-nodes-base.slackTool",
          "popularity": .59
        }, {
          "id": "n8n-nodes-base.mistralAi",
          "popularity": .584
        }, {
          "id": "n8n-nodes-base.dropbox",
          "popularity": .611
        }, {
          "id": "n8n-nodes-base.microsoftTeamsTrigger",
          "popularity": .589
        }, {
          "id": "@aotoki/n8n-nodes-line-messaging.lineMessaging",
          "popularity": .585
        }, {
          "id": "n8n-nodes-base.philipsHueTool",
          "popularity": .509
        }, {
          "id": "@n8n/n8n-nodes-langchain.embeddingsAzureOpenAi",
          "popularity": .521
        }, {
          "id": "n8n-nodes-powerbi.powerBi",
          "popularity": .531
        }, {
          "id": "n8n-nodes-base.zendesk",
          "popularity": .543
        }, {
          "id": "n8n-nodes-base.twilioTool",
          "popularity": .507
        }, {
          "id": "n8n-nodes-base.zoom",
          "popularity": .5
        }, {
          "id": "n8n-nodes-base.trelloTrigger",
          "popularity": .482
        }, {
          "id": "n8n-nodes-base.salesforceTrigger",
          "popularity": .498
        }, {
          "id": "n8n-nodes-base.googleBusinessProfile",
          "popularity": .503
        }, {
          "id": "n8n-nodes-base.rabbitmq",
          "popularity": .497
        }, {
          "id": "n8n-nodes-base.redditTool",
          "popularity": .483
        }, {
          "id": "@n8n/n8n-nodes-langchain.vectorStoreZep",
          "popularity": .472
        }, {
          "id": "n8n-nodes-base.snowflake",
          "popularity": .513
        }, {
          "id": "n8n-nodes-base.redisTrigger",
          "popularity": .47
        }, {
          "id": "n8n-nodes-base.formstackTrigger",
          "popularity": .464
        }, {
          "id": "n8n-nodes-scrapegraphai.scrapegraphAi",
          "popularity": .465
        }, {
          "id": "n8n-nodes-base.totp",
          "popularity": .461
        }, {
          "id": "n8n-nodes-base.azureStorage",
          "popularity": .496
        }, {
          "id": "n8n-nodes-browserflow.browserflow",
          "popularity": .481
        }, {
          "id": "n8n-nodes-base.googleSlidesTool",
          "popularity": .461
        }, {
          "id": "n8n-nodes-base.quickbooks",
          "popularity": .52
        }, {
          "id": "n8n-nodes-base.wooCommerceTrigger",
          "popularity": .498
        }, {
          "id": "n8n-nodes-base.awsLambda",
          "popularity": .472
        }, {
          "id": "n8n-nodes-base.rabbitmqTrigger",
          "popularity": .486
        }, {
          "id": "n8n-nodes-base.coinGecko",
          "popularity": .476
        }, {
          "id": "n8n-nodes-base.microsoftToDo",
          "popularity": .48
        }, {
          "id": "n8n-nodes-base.pushover",
          "popularity": .456
        }, {
          "id": "n8n-nodes-base.jinaAiTool",
          "popularity": .43
        }, {
          "id": "n8n-nodes-base.actionNetworkTool",
          "popularity": .434
        }, {
          "id": "n8n-nodes-base.trelloTool",
          "popularity": .486
        }, {
          "id": "n8n-nodes-base.airtopTool",
          "popularity": .507
        }, {
          "id": "n8n-nodes-base.awsSes",
          "popularity": .44
        }, {
          "id": "n8n-nodes-base.bitbucketTrigger",
          "popularity": .448
        }, {
          "id": "n8n-nodes-aimlapi.aimlApi",
          "popularity": .443
        }, {
          "id": "n8n-nodes-base.zendeskTrigger",
          "popularity": .439
        }, {
          "id": "n8n-nodes-base.mondayComTool",
          "popularity": .446
        }, {
          "id": "n8n-nodes-base.googleCloudNaturalLanguageTool",
          "popularity": .401
        }, {
          "id": "n8n-nodes-base.dhlTool",
          "popularity": .377
        }, {
          "id": "n8n-nodes-base.eventbriteTrigger",
          "popularity": .407
        }, {
          "id": "n8n-nodes-base.rocketchat",
          "popularity": .421
        }, {
          "id": "n8n-nodes-base.awsTextractTool",
          "popularity": .387
        }, {
          "id": "n8n-nodes-base.awsTranscribeTool",
          "popularity": .39
        }, {
          "id": "n8n-nodes-base.payPal",
          "popularity": .399
        }, {
          "id": "n8n-nodes-base.s3Tool",
          "popularity": .398
        }, {
          "id": "n8n-nodes-base.stripeTool",
          "popularity": .406
        }, {
          "id": "n8n-nodes-base.pipedriveTool",
          "popularity": .435
        }, {
          "id": "n8n-nodes-base.box",
          "popularity": .458
        }, {
          "id": "n8n-nodes-base.mailjet",
          "popularity": .403
        }, {
          "id": "@2chat/n8n-nodes-twochat.twoChat",
          "popularity": .399
        }, {
          "id": "n8n-nodes-base.microsoftGraphSecurityTool",
          "popularity": .389
        }, {
          "id": "n8n-nodes-base.strava",
          "popularity": .436
        }, {
          "id": "n8n-nodes-base.graphqlTool",
          "popularity": .401
        }, {
          "id": "n8n-nodes-base.vonage",
          "popularity": .412
        }, {
          "id": "n8n-nodes-base.matrix",
          "popularity": .444
        }, {
          "id": "n8n-nodes-base.filemakerTool",
          "popularity": .387
        }, {
          "id": "n8n-nodes-base.amqpTrigger",
          "popularity": .367
        }, {
          "id": "n8n-nodes-base.grist",
          "popularity": .43
        }, {
          "id": "n8n-nodes-base.philipsHue",
          "popularity": .405
        }, {
          "id": "n8n-nodes-base.stravaTrigger",
          "popularity": .412
        }, {
          "id": "n8n-nodes-base.emailSendTool",
          "popularity": .597
        }, {
          "id": "n8n-nodes-base.jenkins",
          "popularity": .409
        }, {
          "id": "n8n-nodes-base.linearTrigger",
          "popularity": .392
        }, {
          "id": "n8n-nodes-base.seaTable",
          "popularity": .458
        }, {
          "id": "n8n-nodes-base.linkedInTool",
          "popularity": .595
        }, {
          "id": "n8n-nodes-base.graphql",
          "popularity": .533
        }, {
          "id": "n8n-nodes-base.wooCommerce",
          "popularity": .576
        }, {
          "id": "n8n-nodes-base.googleAds",
          "popularity": .53
        }, {
          "id": "n8n-nodes-base.microsoftSqlTool",
          "popularity": .549
        }, {
          "id": "n8n-nodes-base.googleTasksTool",
          "popularity": .559
        }, {
          "id": "n8n-nodes-base.wordpressTool",
          "popularity": .516
        }, {
          "id": "n8n-nodes-base.nextCloud",
          "popularity": .572
        }, {
          "id": "n8n-nodes-base.mongoDbTool",
          "popularity": .553
        }, {
          "id": "@n8n/n8n-nodes-langchain.vectorStoreMilvus",
          "popularity": .532
        }, {
          "id": "n8n-nodes-base.mondayCom",
          "popularity": .605
        }, {
          "id": "@n8n/n8n-nodes-langchain.retrieverWorkflow",
          "popularity": .503
        }, {
          "id": "n8n-nodes-base.googleCloudStorage",
          "popularity": .548
        }, {
          "id": "n8n-nodes-base.googleAnalytics",
          "popularity": .513
        }, {
          "id": "n8n-nodes-base.microsoftOneDriveTool",
          "popularity": .53
        }, {
          "id": "n8n-nodes-base.hackerNewsTool",
          "popularity": .506
        }, {
          "id": "n8n-nodes-pdf4me.PDF4me",
          "popularity": .521
        }, {
          "id": "n8n-nodes-base.sendInBlue",
          "popularity": .551
        }, {
          "id": "@n8n/n8n-nodes-langchain.retrieverMultiQuery",
          "popularity": .5
        }, {
          "id": "n8n-nodes-base.quickbooksTool",
          "popularity": .497
        }, {
          "id": "n8n-nodes-base.googleChatTool",
          "popularity": .492
        }, {
          "id": "n8n-nodes-base.asana",
          "popularity": .572
        }, {
          "id": "n8n-nodes-pdfvector.pdfVector",
          "popularity": .492
        }, {
          "id": "n8n-nodes-base.spotify",
          "popularity": .551
        }, {
          "id": "n8n-nodes-base.twitterTool",
          "popularity": .501
        }, {
          "id": "n8n-nodes-base.shopifyTool",
          "popularity": .534
        }, {
          "id": "n8n-nodes-upload-post.uploadPost",
          "popularity": .53
        }, {
          "id": "n8n-nodes-base.zohoCrm",
          "popularity": .563
        }, {
          "id": "n8n-nodes-base.pipedrive",
          "popularity": .605
        }, {
          "id": "@n8n/n8n-nodes-langchain.lmChatVercelAiGateway",
          "popularity": .501
        }, {
          "id": "n8n-nodes-base.deepL",
          "popularity": .486
        }, {
          "id": "@n8n/n8n-nodes-langchain.toolSearXng",
          "popularity": .508
        }, {
          "id": "n8n-nodes-base.mqttTrigger",
          "popularity": .507
        }, {
          "id": "n8n-nodes-base.jwt",
          "popularity": .512
        }, {
          "id": "n8n-nodes-base.dhl",
          "popularity": .486
        }, {
          "id": "n8n-nodes-base.redisTool",
          "popularity": .51
        }, {
          "id": "n8n-nodes-base.airtop",
          "popularity": .578
        }, {
          "id": "n8n-nodes-base.googleFirebaseCloudFirestore",
          "popularity": .563
        }, {
          "id": "n8n-nodes-base.microsoftSharePointTool",
          "popularity": .508
        }, {
          "id": "n8n-nodes-base.clickUpTrigger",
          "popularity": .532
        }, {
          "id": "n8n-nodes-base.stripe",
          "popularity": .524
        }, {
          "id": "n8n-nodes-base.homeAssistantTool",
          "popularity": .525
        }, {
          "id": "n8n-nodes-base.mailgun",
          "popularity": .488
        }, {
          "id": "n8n-nodes-base.jotFormTrigger",
          "popularity": .515
        }, {
          "id": "n8n-nodes-cloudinary.cloudinary",
          "popularity": .514
        }, {
          "id": "n8n-nodes-base.jinaAi",
          "popularity": .501
        }, {
          "id": "n8n-nodes-base.gitlabTrigger",
          "popularity": .485
        }, {
          "id": "n8n-nodes-base.sendGrid",
          "popularity": .504
        }, {
          "id": "n8n-nodes-base.spotifyTool",
          "popularity": .518
        }, {
          "id": "n8n-nodes-base.stripeTrigger",
          "popularity": .509
        }, {
          "id": "n8n-nodes-base.togglTrigger",
          "popularity": .478
        }, {
          "id": "n8n-nodes-base.gitlab",
          "popularity": .515
        }, {
          "id": "@cloudconvert/n8n-nodes-cloudconvert.cloudConvert",
          "popularity": .5
        }, {
          "id": "n8n-nodes-htmlcsstoimage.htmlCssToImage",
          "popularity": .49
        }, {
          "id": "n8n-nodes-base.mqtt",
          "popularity": .498
        }, {
          "id": "n8n-nodes-base.hubspotTool",
          "popularity": .507
        }, {
          "id": "n8n-nodes-base.todoist",
          "popularity": .533
        }, {
          "id": "n8n-nodes-base.googleTranslateTool",
          "popularity": .482
        }, {
          "id": "n8n-nodes-base.activeCampaign",
          "popularity": .524
        }, {
          "id": "@n8n/n8n-nodes-langchain.embeddingsMistralCloud",
          "popularity": .508
        }, {
          "id": "@nskha/n8n-nodes-scrappey.scrappey",
          "popularity": .463
        }, {
          "id": "n8n-nodes-base.cryptoTool",
          "popularity": .447
        }, {
          "id": "n8n-nodes-base.git",
          "popularity": .512
        }, {
          "id": "n8n-nodes-base.mattermost",
          "popularity": .495
        }, {
          "id": "n8n-nodes-instantly.instantly",
          "popularity": .509
        }, {
          "id": "n8n-nodes-base.elasticsearch",
          "popularity": .467
        }, {
          "id": "n8n-nodes-base.phantombuster",
          "popularity": .486
        }, {
          "id": "n8n-nodes-base.odooTool",
          "popularity": .493
        }, {
          "id": "n8n-nodes-base.calendlyTrigger",
          "popularity": .595
        }, {
          "id": "n8n-nodes-base.wooCommerceTool",
          "popularity": .487
        }, {
          "id": "n8n-nodes-base.figmaTrigger",
          "popularity": .451
        }, {
          "id": "n8n-nodes-base.todoistTool",
          "popularity": .502
        }, {
          "id": "n8n-nodes-base.webflow",
          "popularity": .481
        }, {
          "id": "n8n-nodes-scrape-creators.scrapeCreators",
          "popularity": .485
        }, {
          "id": "n8n-nodes-base.googleAdsTool",
          "popularity": .437
        }, {
          "id": "n8n-nodes-base.baserowTool",
          "popularity": .472
        }, {
          "id": "@n8n/n8n-nodes-langchain.embeddingsGoogleVertex",
          "popularity": .524
        }, {
          "id": "n8n-nodes-base.mistralAiTool",
          "popularity": .45
        }, {
          "id": "n8n-nodes-base.kafka",
          "popularity": .459
        }, {
          "id": "n8n-nodes-base.microsoftEntra",
          "popularity": .478
        }, {
          "id": "n8n-nodes-base.deepLTool",
          "popularity": .425
        }, {
          "id": "n8n-nodes-autocalls.autocalls",
          "popularity": .44
        }, {
          "id": "n8n-nodes-base.salesforceTool",
          "popularity": .48
        }, {
          "id": "@n8n/n8n-nodes-langchain.vectorStoreWeaviate",
          "popularity": .469
        }, {
          "id": "n8n-nodes-base.kafkaTrigger",
          "popularity": .453
        }, {
          "id": "n8n-nodes-base.coinGeckoTool",
          "popularity": .458
        }, {
          "id": "n8n-nodes-base.nocoDbTool",
          "popularity": .485
        }, {
          "id": "n8n-nodes-base.awsS3Tool",
          "popularity": .436
        }, {
          "id": "@apify/n8n-nodes-apify.apifyTrigger",
          "popularity": .442
        }, {
          "id": "n8n-nodes-base.apiTemplateIo",
          "popularity": .444
        }, {
          "id": "n8n-nodes-base.adalo",
          "popularity": .421
        }, {
          "id": "n8n-nodes-base.mailcheck",
          "popularity": .428
        }, {
          "id": "n8n-nodes-base.grafana",
          "popularity": .449
        }, {
          "id": "n8n-nodes-base.quickChartTool",
          "popularity": .448
        }, {
          "id": "n8n-nodes-base.gitlabTool",
          "popularity": .462
        }, {
          "id": "n8n-nodes-base.urlScanIo",
          "popularity": .441
        }, {
          "id": "n8n-nodes-base.nextCloudTool",
          "popularity": .45
        }, {
          "id": "n8n-nodes-base.metabase",
          "popularity": .454
        }, {
          "id": "n8n-nodes-base.dropboxTool",
          "popularity": .453
        }, {
          "id": "n8n-nodes-documentero.documentero",
          "popularity": .448
        }, {
          "id": "n8n-nodes-base.hunter",
          "popularity": .451
        }, {
          "id": "n8n-nodes-base.asanaTrigger",
          "popularity": .474
        }, {
          "id": "n8n-nodes-base.elasticsearchTool",
          "popularity": .447
        }, {
          "id": "n8n-nodes-base.awsTextract",
          "popularity": .447
        }, {
          "id": "n8n-nodes-base.mailchimp",
          "popularity": .489
        }, {
          "id": "@n8n/n8n-nodes-langchain.lmCohere",
          "popularity": .433
        }, {
          "id": "n8n-nodes-base.webflowTool",
          "popularity": .424
        }, {
          "id": "n8n-nodes-base.googleBigQueryTool",
          "popularity": .45
        }, {
          "id": "n8n-nodes-postiz.postiz",
          "popularity": .482
        }, {
          "id": "n8n-nodes-base.linear",
          "popularity": .472
        }, {
          "id": "n8n-nodes-base.pipedriveTrigger",
          "popularity": .446
        }, {
          "id": "n8n-nodes-pdforge.pdforge",
          "popularity": .426
        }, {
          "id": "n8n-nodes-base.zohoCrmTool",
          "popularity": .47
        }, {
          "id": "n8n-nodes-base.awsTranscribe",
          "popularity": .424
        }, {
          "id": "n8n-nodes-base.googleBusinessProfileTrigger",
          "popularity": .466
        }, {
          "id": "n8n-nodes-base.googleFirebaseCloudFirestoreTool",
          "popularity": .447
        }, {
          "id": "n8n-nodes-base.googleFirebaseRealtimeDatabase",
          "popularity": .428
        }, {
          "id": "n8n-nodes-base.serviceNow",
          "popularity": .469
        }, {
          "id": "n8n-nodes-base.ldap",
          "popularity": .464
        }, {
          "id": "n8n-nodes-base.gSuiteAdmin",
          "popularity": .468
        }, {
          "id": "n8n-nodes-base.xero",
          "popularity": .474
        }, {
          "id": "n8n-nodes-base.lineTool",
          "popularity": .419
        }, {
          "id": "n8n-nodes-base.bubble",
          "popularity": .491
        }, {
          "id": "n8n-nodes-base.asanaTool",
          "popularity": .454
        }, {
          "id": "n8n-nodes-base.zoomTool",
          "popularity": .416
        }, {
          "id": "n8n-nodes-base.oneSimpleApiTool",
          "popularity": .4
        }, {
          "id": "@brightdata/n8n-nodes-brightdata.brightData",
          "popularity": .456
        }, {
          "id": "n8n-nodes-base.googleCloudStorageTool",
          "popularity": .407
        }, {
          "id": "n8n-nodes-base.webflowTrigger",
          "popularity": .433
        }, {
          "id": "n8n-nodes-base.acuitySchedulingTrigger",
          "popularity": .415
        }, {
          "id": "n8n-nodes-base.cloudflareTool",
          "popularity": .403
        }, {
          "id": "n8n-nodes-base.microsoftToDoTool",
          "popularity": .431
        }, {
          "id": "n8n-nodes-base.agileCrm",
          "popularity": .401
        }, {
          "id": "n8n-nodes-base.awsDynamoDb",
          "popularity": .455
        }, {
          "id": "n8n-nodes-base.googleBusinessProfileTool",
          "popularity": .406
        }, {
          "id": "n8n-nodes-base.cloudflare",
          "popularity": .386
        }, {
          "id": "n8n-nodes-base.marketstack",
          "popularity": .332
        }, {
          "id": "n8n-nodes-base.affinity",
          "popularity": .406
        }, {
          "id": "n8n-nodes-base.gotify",
          "popularity": .432
        }, {
          "id": "n8n-nodes-base.gitTool",
          "popularity": .414
        }, {
          "id": "n8n-nodes-base.grafanaTool",
          "popularity": .408
        }, {
          "id": "n8n-nodes-base.erpNext",
          "popularity": .455
        }, {
          "id": "n8n-nodes-base.awsSnsTrigger",
          "popularity": .37
        }, {
          "id": "n8n-nodes-chat-data.chatData",
          "popularity": .388
        }, {
          "id": "n8n-nodes-base.medium",
          "popularity": .399
        }, {
          "id": "n8n-nodes-base.sms77",
          "popularity": .375
        }, {
          "id": "n8n-nodes-base.activeCampaignTrigger",
          "popularity": .393
        }, {
          "id": "n8n-nodes-base.pushbullet",
          "popularity": .347
        }, {
          "id": "n8n-nodes-base.wise",
          "popularity": .358
        }, {
          "id": "n8n-nodes-base.messageBird",
          "popularity": .439
        }, {
          "id": "n8n-nodes-base.splunk",
          "popularity": .364
        }, {
          "id": "n8n-nodes-base.urlScanIoTool",
          "popularity": .3
        }, {
          "id": "n8n-nodes-base.highLevelTool",
          "popularity": .477
        }, {
          "id": "n8n-nodes-base.bitwardenTool",
          "popularity": .379
        }, {
          "id": "n8n-nodes-base.convertKitTool",
          "popularity": .361
        }, {
          "id": "n8n-nodes-base.lemlist",
          "popularity": .426
        }, {
          "id": "n8n-nodes-base.messageBirdTool",
          "popularity": .368
        }, {
          "id": "n8n-nodes-base.microsoftDynamicsCrm",
          "popularity": .404
        }, {
          "id": "n8n-nodes-base.getResponseTool",
          "popularity": .357
        }, {
          "id": "n8n-nodes-base.gSuiteAdminTool",
          "popularity": .382
        }, {
          "id": "n8n-nodes-base.compressionTool",
          "popularity": .37
        }, {
          "id": "n8n-nodes-base.googleCloudNaturalLanguage",
          "popularity": .374
        }, {
          "id": "n8n-nodes-base.bitwarden",
          "popularity": .388
        }, {
          "id": "n8n-nodes-base.affinityTool",
          "popularity": .371
        }, {
          "id": "n8n-nodes-base.invoiceNinja",
          "popularity": .413
        }, {
          "id": "n8n-nodes-base.mailerLite",
          "popularity": .406
        }, {
          "id": "n8n-nodes-base.activeCampaignTool",
          "popularity": .367
        }, {
          "id": "n8n-nodes-superchat.superchat",
          "popularity": .435
        }, {
          "id": "@gotohuman/n8n-nodes-gotohuman.gotoHuman",
          "popularity": .38
        }, {
          "id": "n8n-nodes-base.nasaTool",
          "popularity": .374
        }, {
          "id": "n8n-nodes-base.stravaTool",
          "popularity": .382
        }, {
          "id": "n8n-nodes-scrapeless.scrapeless",
          "popularity": .362
        }, {
          "id": "n8n-nodes-mallabe-images.mallabeImages",
          "popularity": .36
        }, {
          "id": "n8n-nodes-base.mailchimpTool",
          "popularity": .354
        }, {
          "id": "n8n-nodes-base.awsSqs",
          "popularity": .371
        }, {
          "id": "n8n-nodes-base.snowflakeTool",
          "popularity": .392
        }, {
          "id": "n8n-nodes-base.freshserviceTool",
          "popularity": .371
        }, {
          "id": "n8n-nodes-base.zammad",
          "popularity": .426
        }, {
          "id": "n8n-nodes-base.bubbleTool",
          "popularity": .377
        }, {
          "id": "n8n-nodes-base.microsoftDynamicsCrmTool",
          "popularity": .351
        }, {
          "id": "n8n-nodes-base.freshservice",
          "popularity": .415
        }, {
          "id": "n8n-nodes-base.strapi",
          "popularity": .403
        }, {
          "id": "n8n-nodes-base.microsoftGraphSecurity",
          "popularity": .367
        }, {
          "id": "n8n-nodes-base.autopilotTool",
          "popularity": .366
        }, {
          "id": "n8n-nodes-fillout.filloutTrigger",
          "popularity": .382
        }, {
          "id": "n8n-nodes-base.metabaseTool",
          "popularity": .371
        }, {
          "id": "n8n-nodes-supadata.supadata",
          "popularity": .395
        }, {
          "id": "n8n-nodes-base.humanticAiTool",
          "popularity": .351
        }, {
          "id": "@n8n/n8n-nodes-langchain.toolWolframAlpha",
          "popularity": .362
        }, {
          "id": "n8n-nodes-base.mautic",
          "popularity": .443
        }, {
          "id": "n8n-nodes-base.microsoftEntraTool",
          "popularity": .377
        }, {
          "id": "n8n-nodes-base.getResponse",
          "popularity": .357
        }, {
          "id": "n8n-nodes-base.bitly",
          "popularity": .36
        }, {
          "id": "n8n-nodes-base.serviceNowTool",
          "popularity": .371
        }, {
          "id": "@langfuse/n8n-nodes-langfuse.langfuse",
          "popularity": .412
        }, {
          "id": "n8n-nodes-ticktick.tickTick",
          "popularity": .399
        }, {
          "id": "n8n-nodes-base.awsLambdaTool",
          "popularity": .364
        }, {
          "id": "n8n-nodes-base.clockify",
          "popularity": .408
        }, {
          "id": "n8n-nodes-craftmypdf.craftMyPdf",
          "popularity": .359
        }, {
          "id": "n8n-nodes-base.flow",
          "popularity": .348
        }, {
          "id": "n8n-nodes-base.clockifyTool",
          "popularity": .346
        }, {
          "id": "n8n-nodes-base.linearTool",
          "popularity": .395
        }, {
          "id": "n8n-nodes-base.customerIoTool",
          "popularity": .349
        }, {
          "id": "n8n-nodes-base.zendeskTool",
          "popularity": .395
        }, {
          "id": "n8n-nodes-base.phantombusterTool",
          "popularity": .349
        }, {
          "id": "n8n-nodes-scraping-dog.scrapingDog",
          "popularity": .354
        }, {
          "id": "n8n-nodes-base.invoiceNinjaTool",
          "popularity": .338
        }, {
          "id": "n8n-nodes-base.bambooHr",
          "popularity": .373
        }, {
          "id": "n8n-nodes-base.agileCrmTool",
          "popularity": .343
        }, {
          "id": "n8n-nodes-heyreach.heyReach",
          "popularity": .42
        }, {
          "id": "n8n-nodes-base.mqttTool",
          "popularity": .366
        }, {
          "id": "n8n-nodes-base.mindee",
          "popularity": .361
        }, {
          "id": "n8n-nodes-base.amqp",
          "popularity": .345
        }, {
          "id": "n8n-nodes-base.coda",
          "popularity": .432
        }, {
          "id": "n8n-nodes-base.clearbit",
          "popularity": .332
        }, {
          "id": "n8n-nodes-base.sendInBlueTool",
          "popularity": .362
        }, {
          "id": "n8n-nodes-base.freshdeskTool",
          "popularity": .334
        }, {
          "id": "n8n-nodes-base.pushoverTool",
          "popularity": .354
        }, {
          "id": "n8n-nodes-base.magento2",
          "popularity": .395
        }, {
          "id": "n8n-nodes-base.payPalTrigger",
          "popularity": .383
        }, {
          "id": "n8n-nodes-base.bannerbear",
          "popularity": .389
        }, {
          "id": "n8n-nodes-base.googleBooksTool",
          "popularity": .336
        }, {
          "id": "n8n-nodes-base.affinityTrigger",
          "popularity": .324
        }, {
          "id": "n8n-nodes-inoreader.inoreader",
          "popularity": .375
        }, {
          "id": "n8n-nodes-base.jwtTool",
          "popularity": .328
        }, {
          "id": "n8n-nodes-base.intercom",
          "popularity": .37
        }, {
          "id": "n8n-nodes-base.jenkinsTool",
          "popularity": .342
        }, {
          "id": "n8n-nodes-base.ghost",
          "popularity": .367
        }, {
          "id": "n8n-nodes-anchorbrowser.anchorBrowser",
          "popularity": .511
        }, {
          "id": "n8n-nodes-base.gumroadTrigger",
          "popularity": .383
        }, {
          "id": "n8n-nodes-base.ciscoWebex",
          "popularity": .404
        }, {
          "id": "n8n-nodes-base.gong",
          "popularity": .375
        }, {
          "id": "n8n-nodes-base.erpNextTool",
          "popularity": .366
        }, {
          "id": "n8n-nodes-outscraper.outscraper",
          "popularity": .368
        }, {
          "id": "n8n-nodes-1shot.oneShot",
          "popularity": .316
        }, {
          "id": "n8n-nodes-base.venafiTlsProtectDatacenterTool",
          "popularity": .345
        }, {
          "id": "n8n-nodes-base.marketstackTool",
          "popularity": .327
        }, {
          "id": "n8n-nodes-softr.softr",
          "popularity": .442
        }, {
          "id": "n8n-nodes-base.azureCosmosDb",
          "popularity": .376
        }, {
          "id": "n8n-nodes-base.upleadTool",
          "popularity": .315
        }, {
          "id": "n8n-nodes-base.uptimeRobot",
          "popularity": .302
        }, {
          "id": "n8n-nodes-base.mediumTool",
          "popularity": .325
        }, {
          "id": "n8n-nodes-base.sentryIo",
          "popularity": .4
        }, {
          "id": "n8n-nodes-base.uproc",
          "popularity": .313
        }, {
          "id": "n8n-nodes-base.convertKit",
          "popularity": .355
        }, {
          "id": "@scrapeops/n8n-nodes-scrapeops.ScrapeOps",
          "popularity": .312
        }, {
          "id": "n8n-nodes-base.xeroTool",
          "popularity": .328
        }, {
          "id": "n8n-nodes-base.autopilot",
          "popularity": .312
        }, {
          "id": "n8n-nodes-base.googlePerspectiveTool",
          "popularity": .281
        }, {
          "id": "n8n-nodes-base.netlify",
          "popularity": .308
        }, {
          "id": "n8n-nodes-base.contentfulTool",
          "popularity": .33
        }, {
          "id": "n8n-nodes-base.boxTrigger",
          "popularity": .335
        }, {
          "id": "n8n-nodes-yepcode.yepCode",
          "popularity": .31
        }, {
          "id": "n8n-nodes-base.adaloTool",
          "popularity": .309
        }, {
          "id": "n8n-nodes-base.sendInBlueTrigger",
          "popularity": .353
        }, {
          "id": "n8n-nodes-base.haloPSA",
          "popularity": .368
        }, {
          "id": "n8n-nodes-base.matrixTool",
          "popularity": .291
        }, {
          "id": "n8n-nodes-base.ldapTool",
          "popularity": .321
        }, {
          "id": "n8n-nodes-base.googleBooks",
          "popularity": .277
        }, {
          "id": "n8n-nodes-base.dropcontact",
          "popularity": .322
        }, {
          "id": "n8n-nodes-base.npm",
          "popularity": .312
        }, {
          "id": "n8n-nodes-base.openThesaurus",
          "popularity": .265
        }, {
          "id": "n8n-nodes-base.mattermostTool",
          "popularity": .342
        }, {
          "id": "n8n-nodes-base.npmTool",
          "popularity": .292
        }, {
          "id": "n8n-nodes-base.timescaleDb",
          "popularity": .331
        }, {
          "id": "n8n-nodes-base.wufooTrigger",
          "popularity": .272
        }, {
          "id": "n8n-nodes-base.awsCertificateManager",
          "popularity": .254
        }, {
          "id": "n8n-nodes-base.harvest",
          "popularity": .355
        }, {
          "id": "n8n-nodes-base.travisCiTool",
          "popularity": .328
        }, {
          "id": "n8n-nodes-base.mailgunTool",
          "popularity": .277
        }, {
          "id": "n8n-nodes-base.magento2Tool",
          "popularity": .341
        }, {
          "id": "n8n-nodes-visualping.visualpingTrigger",
          "popularity": .256
        }, {
          "id": "n8n-nodes-base.peekalink",
          "popularity": .251
        }, {
          "id": "n8n-nodes-base.uptimeRobotTool",
          "popularity": .259
        }, {
          "id": "n8n-nodes-base.ouraTool",
          "popularity": .277
        }, {
          "id": "n8n-nodes-base.crateDb",
          "popularity": .249
        }, {
          "id": "n8n-nodes-base.getResponseTrigger",
          "popularity": .202
        }, {
          "id": "n8n-nodes-base.pushcut",
          "popularity": .315
        }, {
          "id": "n8n-nodes-base.discourse",
          "popularity": .302
        }, {
          "id": "n8n-nodes-base.strapiTool",
          "popularity": .281
        }, {
          "id": "n8n-nodes-base.rundeck",
          "popularity": .259
        }, {
          "id": "n8n-nodes-base.awsSesTool",
          "popularity": .263
        }, {
          "id": "@telnyx/n8n-nodes-telnyx-ai.telnyxAi",
          "popularity": .275
        }, {
          "id": "n8n-nodes-base.discourseTool",
          "popularity": .272
        }, {
          "id": "n8n-nodes-base.freshworksCrmTool",
          "popularity": .265
        }, {
          "id": "n8n-nodes-base.invoiceNinjaTrigger",
          "popularity": .261
        }, {
          "id": "n8n-nodes-base.mandrill",
          "popularity": .272
        }, {
          "id": "n8n-nodes-base.cortex",
          "popularity": .246
        }, {
          "id": "n8n-nodes-base.lemlistTool",
          "popularity": .277
        }, {
          "id": "n8n-nodes-base.circleCi",
          "popularity": .251
        }, {
          "id": "n8n-nodes-base.helpScoutTrigger",
          "popularity": .27
        }, {
          "id": "@alipeople/n8n-nodes-sendon.sendon",
          "popularity": .249
        }, {
          "id": "@decodo/n8n-nodes-decodo.decodo",
          "popularity": .339
        }, {
          "id": "n8n-nodes-base.plivo",
          "popularity": .261
        }, {
          "id": "n8n-nodes-base.crateDbTool",
          "popularity": .254
        }, {
          "id": "n8n-nodes-base.theHiveProject",
          "popularity": .316
        }, {
          "id": "n8n-nodes-base.cockpitTool",
          "popularity": .251
        }, {
          "id": "n8n-nodes-screenshotbase.screenshotBase",
          "popularity": .374
        }, {
          "id": "n8n-nodes-base.autopilotTrigger",
          "popularity": .22
        }, {
          "id": "n8n-nodes-base.signl4",
          "popularity": .202
        }, {
          "id": "n8n-nodes-base.elasticSecurityTool",
          "popularity": .246
        }, {
          "id": "n8n-nodes-base.theHiveTool",
          "popularity": .237
        }, {
          "id": "n8n-nodes-base.wiseTrigger",
          "popularity": .282
        }, {
          "id": "n8n-nodes-base.securityScorecardTool",
          "popularity": .275
        }, {
          "id": "n8n-nodes-base.storyblok",
          "popularity": .24
        }, {
          "id": "n8n-nodes-base.paddleTool",
          "popularity": .234
        }, {
          "id": "@cloudsway-ai/n8n-nodes-cloudsway.smartSearch",
          "popularity": .344
        }, {
          "id": "n8n-nodes-base.ghostTool",
          "popularity": .339
        }, {
          "id": "n8n-nodes-base.timescaleDbTool",
          "popularity": .345
        }, {
          "id": "n8n-nodes-base.hunterTool",
          "popularity": .325
        }, {
          "id": "n8n-nodes-base.codaTool",
          "popularity": .33
        }, {
          "id": "n8n-nodes-base.oneSimpleApi",
          "popularity": .304
        }, {
          "id": "n8n-nodes-base.lemlistTrigger",
          "popularity": .373
        }, {
          "id": "n8n-nodes-base.sendGridTool",
          "popularity": .319
        }, {
          "id": "n8n-nodes-base.BrandfetchTool",
          "popularity": .296
        }, {
          "id": "n8n-nodes-base.splunkTool",
          "popularity": .316
        }, {
          "id": "n8n-nodes-base.pagerDuty",
          "popularity": .379
        }, {
          "id": "n8n-nodes-base.rabbitmqTool",
          "popularity": .316
        }, {
          "id": "n8n-nodes-base.mailchimpTrigger",
          "popularity": .32
        }, {
          "id": "n8n-nodes-base.ciscoWebexTrigger",
          "popularity": .352
        }, {
          "id": "n8n-nodes-base.msg91",
          "popularity": .3
        }, {
          "id": "n8n-nodes-base.ciscoWebexTool",
          "popularity": .317
        }, {
          "id": "n8n-nodes-base.seaTableTool",
          "popularity": .331
        }, {
          "id": "n8n-nodes-templated.templated",
          "popularity": .336
        }, {
          "id": "n8n-nodes-fullenrich.fullEnrich",
          "popularity": .316
        }, {
          "id": "n8n-nodes-fluentc.fluentCTranslate",
          "popularity": .298
        }, {
          "id": "n8n-nodes-mailtrap.mailtrap",
          "popularity": .327
        }, {
          "id": "n8n-nodes-base.awsIam",
          "popularity": .312
        }, {
          "id": "n8n-nodes-base.gongTool",
          "popularity": .267
        }, {
          "id": "n8n-nodes-kipps.kippsAiChatbot",
          "popularity": .3
        }, {
          "id": "n8n-nodes-base.awsComprehend",
          "popularity": .284
        }, {
          "id": "n8n-nodes-parseur.parseur",
          "popularity": .282
        }, {
          "id": "n8n-nodes-vikunja.vikunja",
          "popularity": .383
        }, {
          "id": "@globalping/n8n-nodes-globalping.globalping",
          "popularity": .291
        }, {
          "id": "@zohomail/n8n-nodes-zohocalendar.zohoCalendar",
          "popularity": .308
        }, {
          "id": "n8n-nodes-base.Brandfetch",
          "popularity": .291
        }, {
          "id": "n8n-nodes-base.intercomTool",
          "popularity": .286
        }, {
          "id": "n8n-nodes-base.customerIo",
          "popularity": .33
        }, {
          "id": "n8n-nodes-base.postHog",
          "popularity": .321
        }, {
          "id": "n8n-nodes-base.kafkaTool",
          "popularity": .293
        }, {
          "id": "n8n-nodes-chat-data.chatDataTrigger",
          "popularity": .256
        }, {
          "id": "n8n-nodes-base.helpScout",
          "popularity": .333
        }, {
          "id": "n8n-nodes-base.surveyMonkeyTrigger",
          "popularity": .293
        }, {
          "id": "n8n-nodes-base.loneScaleTool",
          "popularity": .259
        }, {
          "id": "n8n-nodes-base.raindrop",
          "popularity": .364
        }, {
          "id": "n8n-nodes-docuwriter-ai.docuWriter",
          "popularity": .263
        }, {
          "id": "n8n-nodes-base.contentful",
          "popularity": .304
        }, {
          "id": "n8n-nodes-base.mailerLiteTrigger",
          "popularity": .295
        }, {
          "id": "n8n-nodes-base.clockifyTrigger",
          "popularity": .291
        }, {
          "id": "n8n-nodes-shortio.Shortio",
          "popularity": .295
        }, {
          "id": "n8n-nodes-skyvern.skyvern",
          "popularity": .323
        }, {
          "id": "n8n-nodes-awork.awork",
          "popularity": .313
        }, {
          "id": "n8n-nodes-base.postHogTool",
          "popularity": .273
        }, {
          "id": "n8n-nodes-base.flowTrigger",
          "popularity": .256
        }, {
          "id": "n8n-nodes-base.awsRekognition",
          "popularity": .272
        }, {
          "id": "n8n-nodes-base.totpTool",
          "popularity": .267
        }, {
          "id": "n8n-nodes-base.bitlyTool",
          "popularity": .263
        }, {
          "id": "n8n-nodes-base.gotifyTool",
          "popularity": .263
        }, {
          "id": "n8n-nodes-base.zulip",
          "popularity": .338
        }, {
          "id": "n8n-nodes-base.postmarkTrigger",
          "popularity": .277
        }, {
          "id": "n8n-nodes-base.bambooHrTool",
          "popularity": .293
        }, {
          "id": "n8n-nodes-base.humanticAi",
          "popularity": .254
        }, {
          "id": "n8n-nodes-base.iterableTool",
          "popularity": .263
        }, {
          "id": "n8n-nodes-base.freshworksCrm",
          "popularity": .351
        }, {
          "id": "n8n-nodes-base.yourls",
          "popularity": .306
        }, {
          "id": "n8n-nodes-base.yourlsTool",
          "popularity": .227
        }, {
          "id": "n8n-nodes-base.oura",
          "popularity": .296
        }, {
          "id": "n8n-nodes-pushinator.pushinator",
          "popularity": .328
        }, {
          "id": "n8n-nodes-base.iterable",
          "popularity": .281
        }, {
          "id": "n8n-nodes-base.chargebeeTool",
          "popularity": .281
        }, {
          "id": "n8n-nodes-base.awsCognito",
          "popularity": .296
        }, {
          "id": "n8n-nodes-base.crowdDevTool",
          "popularity": .249
        }, {
          "id": "n8n-nodes-base.mailcheckTool",
          "popularity": .254
        }, {
          "id": "n8n-nodes-base.gristTool",
          "popularity": .277
        }, {
          "id": "n8n-nodes-mallabe-barcodes.mallabeBarcodes",
          "popularity": .277
        }, {
          "id": "n8n-nodes-straico-official.straicoOfficial",
          "popularity": .348
        }, {
          "id": "n8n-nodes-base.mailerLiteTool",
          "popularity": .275
        }, {
          "id": "n8n-nodes-base.mauticTrigger",
          "popularity": .303
        }, {
          "id": "n8n-nodes-base.harvestTool",
          "popularity": .259
        }, {
          "id": "n8n-nodes-extruct.extruct",
          "popularity": .207
        }, {
          "id": "n8n-nodes-base.awsSns",
          "popularity": .329
        }, {
          "id": "n8n-nodes-base.okta",
          "popularity": .354
        }, {
          "id": "n8n-nodes-base.rocketchatTool",
          "popularity": .325
        }, {
          "id": "n8n-nodes-base.dropcontactTool",
          "popularity": .251
        }, {
          "id": "n8n-nodes-base.oktaTool",
          "popularity": .251
        }, {
          "id": "n8n-nodes-base.segment",
          "popularity": .259
        }, {
          "id": "n8n-nodes-base.koBoToolbox",
          "popularity": .286
        }, {
          "id": "n8n-nodes-seo-content-machine.seoContentMachine",
          "popularity": .273
        }, {
          "id": "n8n-nodes-base.awsSnsTool",
          "popularity": .246
        }, {
          "id": "n8n-nodes-base.taiga",
          "popularity": .313
        }, {
          "id": "n8n-nodes-zohoteaminbox.zohoTeamInbox",
          "popularity": .24
        }, {
          "id": "n8n-nodes-base.securityScorecard",
          "popularity": .231
        }, {
          "id": "n8n-nodes-base.spontit",
          "popularity": .256
        }, {
          "id": "n8n-nodes-base.quickbase",
          "popularity": .292
        }, {
          "id": "n8n-nodes-base.lingvaNex",
          "popularity": .207
        }, {
          "id": "n8n-nodes-base.questDbTool",
          "popularity": .254
        }, {
          "id": "@apaleo/n8n-nodes-apaleo-official.apaleo",
          "popularity": .352
        }, {
          "id": "n8n-nodes-base.syncroMspTool",
          "popularity": .243
        }, {
          "id": "@handelsregister/n8n-nodes-handelsregister-ai.handelsregisterAi",
          "popularity": .24
        }, {
          "id": "n8n-nodes-base.zulipTool",
          "popularity": .231
        }, {
          "id": "n8n-nodes-base.mispTool",
          "popularity": .216
        }, {
          "id": "n8n-nodes-base.monicaCrm",
          "popularity": .259
        }, {
          "id": "n8n-nodes-base.postBinTool",
          "popularity": .227
        }, {
          "id": "n8n-nodes-base.monicaCrmTool",
          "popularity": .282
        }, {
          "id": "n8n-nodes-base.openThesaurusTool",
          "popularity": .234
        }, {
          "id": "n8n-nodes-base.netlifyTrigger",
          "popularity": .231
        }, {
          "id": "n8n-nodes-base.questDb",
          "popularity": .22
        }, {
          "id": "n8n-nodes-base.taigaTool",
          "popularity": .22
        }, {
          "id": "@nuelink/n8n-nodes-nuelink.nuelink",
          "popularity": .202
        }, {
          "id": "n8n-nodes-swiftgum-trigger.swiftgumTrigger",
          "popularity": .172
        }, {
          "id": "n8n-nodes-base.signl4Tool",
          "popularity": .164
        }, {
          "id": "n8n-nodes-base.salesmate",
          "popularity": .179
        }, {
          "id": "n8n-nodes-base.koBoToolboxTrigger",
          "popularity": .243
        }, {
          "id": "n8n-nodes-base.unleashedSoftware",
          "popularity": .227
        }, {
          "id": "n8n-nodes-base.stackby",
          "popularity": .273
        }, {
          "id": "n8n-nodes-base.egoiTool",
          "popularity": .172
        }, {
          "id": "n8n-nodes-base.elasticSecurity",
          "popularity": .279
        }, {
          "id": "n8n-nodes-base.wekan",
          "popularity": .207
        }, {
          "id": "@bedrijfsdatanl/n8n-nodes-bedrijfsdata.bedrijfsdata",
          "popularity": .256
        }, {
          "id": "n8n-nodes-klicktipp.klicktipp",
          "popularity": .22
        }, {
          "id": "n8n-nodes-base.theHiveProjectTool",
          "popularity": .191
        }, {
          "id": "@ekyte/n8n-nodes-ekyte.eKyteAction",
          "popularity": .287
        }, {
          "id": "n8n-nodes-base.kitemakerTool",
          "popularity": .145
        }, {
          "id": "n8n-nodes-base.paddle",
          "popularity": .191
        }, {
          "id": "n8n-nodes-base.raindropTool",
          "popularity": .227
        }, {
          "id": "n8n-nodes-base.keapTrigger",
          "popularity": .216
        }, {
          "id": "n8n-nodes-base.rundeckTool",
          "popularity": .211
        }, {
          "id": "n8n-nodes-base.theHive",
          "popularity": .207
        }, {
          "id": "n8n-nodes-base.customerIoTrigger",
          "popularity": .179
        }, {
          "id": "n8n-nodes-base.convertKitTrigger",
          "popularity": .207
        }, {
          "id": "@netgsm/n8n-nodes-netgsm.netgsm",
          "popularity": .207
        }, {
          "id": "n8n-nodes-base.pushbulletTool",
          "popularity": .185
        }, {
          "id": "@copicake/n8n-nodes-copicake.copicake",
          "popularity": .197
        }, {
          "id": "n8n-nodes-base.syncroMsp",
          "popularity": .265
        }, {
          "id": "n8n-nodes-vikunja.vikunjaTrigger",
          "popularity": .279
        }, {
          "id": "@vlm-run/n8n-nodes-vlmrun.vlmRun",
          "popularity": .224
        }, {
          "id": "n8n-nodes-base.netlifyTool",
          "popularity": .179
        }, {
          "id": "@orisma/n8n-nodes-taximail.taximail",
          "popularity": .185
        }, {
          "id": "n8n-nodes-logsnag.LogSnag",
          "popularity": .22
        }, {
          "id": "n8n-nodes-base.storyblokTool",
          "popularity": .211
        }, {
          "id": "n8n-nodes-base.pushcutTool",
          "popularity": .191
        }, {
          "id": "n8n-nodes-base.mailjetTrigger",
          "popularity": .216
        }, {
          "id": "n8n-nodes-businessmap.businessmap",
          "popularity": .216
        }, {
          "id": "n8n-nodes-base.disqus",
          "popularity": .12
        }, {
          "id": "n8n-nodes-base.cockpit",
          "popularity": .197
        }, {
          "id": "n8n-nodes-joggai.joggAiNode",
          "popularity": .211
        }, {
          "id": "@paloaltonetworks/n8n-nodes-prisma-airs.prismaAirs",
          "popularity": .267
        }, {
          "id": "n8n-nodes-base.twist",
          "popularity": .179
        }, {
          "id": "n8n-nodes-base.taigaTrigger",
          "popularity": .202
        }, {
          "id": "n8n-nodes-streak-crm.streak",
          "popularity": .202
        }, {
          "id": "n8n-nodes-base.goToWebinar",
          "popularity": .134
        }, {
          "id": "n8n-nodes-krispcall.krispcall",
          "popularity": .12
        }, {
          "id": "n8n-nodes-base.koBoToolboxTool",
          "popularity": .155
        }, {
          "id": "n8n-nodes-base.mandrillTool",
          "popularity": .172
        }, {
          "id": "n8n-nodes-base.wekanTool",
          "popularity": .134
        }, {
          "id": "n8n-nodes-dalil-ai.dalilAi",
          "popularity": .052
        }, {
          "id": "n8n-nodes-taddy.taddyApi",
          "popularity": .12
        }, {
          "id": "n8n-nodes-base.driftTool",
          "popularity": .267
        }, {
          "id": "n8n-nodes-triggercmd.triggercmd",
          "popularity": .329
        }, {
          "id": "n8n-nodes-digital-ocean.digitalOcean",
          "popularity": .31
        }, {
          "id": "n8n-nodes-base.segmentTool",
          "popularity": .249
        }, {
          "id": "n8n-nodes-exa-official.exa",
          "popularity": .367
        }, {
          "id": "n8n-nodes-base.sms77Tool",
          "popularity": .256
        }, {
          "id": "n8n-nodes-base.copper",
          "popularity": .284
        }, {
          "id": "n8n-nodes-base.uplead",
          "popularity": .243
        }, {
          "id": "n8n-nodes-base.helpScoutTool",
          "popularity": .249
        }, {
          "id": "n8n-nodes-base.amqpTool",
          "popularity": .24
        }, {
          "id": "n8n-nodes-base.beeminderTool",
          "popularity": .224
        }, {
          "id": "n8n-nodes-twittershots.twitterShots",
          "popularity": .22
        }, {
          "id": "n8n-nodes-base.mailjetTool",
          "popularity": .234
        }, {
          "id": "n8n-nodes-base.sentryIoTool",
          "popularity": .251
        }, {
          "id": "n8n-nodes-parallel.parallel",
          "popularity": .279
        }, {
          "id": "n8n-nodes-base.workableTrigger",
          "popularity": .256
        }, {
          "id": "n8n-nodes-base.goToWebinarTool",
          "popularity": .211
        }, {
          "id": "n8n-nodes-base.circleCiTool",
          "popularity": .224
        }, {
          "id": "n8n-nodes-velatir.velatir",
          "popularity": .231
        }, {
          "id": "n8n-nodes-base.haloPSATool",
          "popularity": .261
        }, {
          "id": "n8n-nodes-base.mauticTool",
          "popularity": .261
        }, {
          "id": "n8n-nodes-base.sendyTool",
          "popularity": .185
        }, {
          "id": "n8n-nodes-base.keap",
          "popularity": .303
        }, {
          "id": "n8n-nodes-base.venafiTlsProtectCloudTool",
          "popularity": .227
        }, {
          "id": "n8n-nodes-base.seaTableTrigger",
          "popularity": .246
        }, {
          "id": "n8n-nodes-base.sendy",
          "popularity": .207
        }, {
          "id": "n8n-nodes-base.chargebee",
          "popularity": .22
        }, {
          "id": "n8n-nodes-base.demioTool",
          "popularity": .234
        }, {
          "id": "n8n-nodes-base.clearbitTool",
          "popularity": .24
        }, {
          "id": "n8n-nodes-base.theHiveProjectTrigger",
          "popularity": .164
        }, {
          "id": "n8n-nodes-base.copperTool",
          "popularity": .216
        }, {
          "id": "n8n-nodes-base.chargebeeTrigger",
          "popularity": .231
        }, {
          "id": "n8n-nodes-base.misp",
          "popularity": .254
        }, {
          "id": "n8n-nodes-base.drift",
          "popularity": .211
        }, {
          "id": "n8n-nodes-authentica.authentica",
          "popularity": .164
        }, {
          "id": "n8n-nodes-base.quickbaseTool",
          "popularity": .211
        }, {
          "id": "n8n-nodes-base.awsElb",
          "popularity": .249
        }, {
          "id": "n8n-nodes-base.demio",
          "popularity": .261
        }, {
          "id": "n8n-nodes-beyondpresence.beyondPresence",
          "popularity": .231
        }, {
          "id": "n8n-nodes-base.egoi",
          "popularity": .246
        }, {
          "id": "n8n-nodes-base.tapfiliateTool",
          "popularity": .216
        }, {
          "id": "n8n-nodes-base.plivoTool",
          "popularity": .207
        }, {
          "id": "@enginemailer/n8n-nodes-enginemailer.enginemailer",
          "popularity": .227
        }, {
          "id": "n8n-nodes-base.unleashedSoftwareTool",
          "popularity": .191
        }, {
          "id": "n8n-nodes-parseur.parseurTrigger",
          "popularity": .216
        }, {
          "id": "n8n-nodes-autobound.autobound",
          "popularity": .185
        }, {
          "id": "n8n-nodes-base.stackbyTool",
          "popularity": .172
        }, {
          "id": "n8n-nodes-deeptagger.deepTagger",
          "popularity": .202
        }, {
          "id": "n8n-nodes-base.emelia",
          "popularity": .227
        }, {
          "id": "n8n-nodes-base.emeliaTool",
          "popularity": .172
        }, {
          "id": "n8n-nodes-blue.blue",
          "popularity": .251
        }, {
          "id": "n8n-nodes-base.pagerDutyTool",
          "popularity": .211
        }, {
          "id": "n8n-nodes-klicktipp.klicktippTrigger",
          "popularity": .082
        }, {
          "id": "n8n-nodes-straker-verify.strakerVerify",
          "popularity": .12
        }, {
          "id": "n8n-nodes-dart.dart",
          "popularity": .249
        }, {
          "id": "n8n-nodes-gainium.Gainium",
          "popularity": .279
        }, {
          "id": "n8n-nodes-base.vonageTool",
          "popularity": .224
        }, {
          "id": "n8n-nodes-base.pushcutTrigger",
          "popularity": .179
        }, {
          "id": "n8n-nodes-base.tapfiliate",
          "popularity": .12
        }, {
          "id": "n8n-nodes-simplified.simplified",
          "popularity": .155
        }, {
          "id": "n8n-nodes-base.venafiTlsProtectDatacenter",
          "popularity": .145
        }, {
          "id": "n8n-nodes-base.twistTool",
          "popularity": .12
        }, {
          "id": "n8n-nodes-apex.apex",
          "popularity": .179
        }, {
          "id": "n8n-nodes-raia.raia",
          "popularity": .145
        }, {
          "id": "n8n-nodes-outgrow.outgrowTrigger",
          "popularity": .12
        }, {
          "id": "n8n-nodes-matrix42.matrix42",
          "popularity": .082
        }, {
          "id": "n8n-nodes-understandtechchat.understandTechChat",
          "popularity": .164
        }, {
          "id": "n8n-nodes-webmetic.webmetic",
          "popularity": .082
        }, {
          "id": "n8n-nodes-base.travisCi",
          "popularity": .082
        }, {
          "id": "n8n-nodes-base.beeminder",
          "popularity": .155
        }, {
          "id": "n8n-nodes-base.theHiveTrigger",
          "popularity": .145
        }, {
          "id": "n8n-nodes-base.salesmateTool",
          "popularity": .179
        }, {
          "id": "n8n-nodes-base.uprocTool",
          "popularity": .145
        }, {
          "id": "n8n-nodes-base.msg91Tool",
          "popularity": .164
        }, {
          "id": "n8n-nodes-base.crowdDev",
          "popularity": .164
        }, {
          "id": "n8n-nodes-base.onfleet",
          "popularity": .164
        }, {
          "id": "@n8n/n8n-nodes-langchain.lmChatLemonade",
          "popularity": .477
        }, {
          "id": "n8n-nodes-base.oracleDatabaseTool",
          "popularity": .437
        }, {
          "id": "n8n-nodes-pdf4me.pdf4me",
          "popularity": .155
        }, {
          "id": "n8n-nodes-base.vero",
          "popularity": .164
        }, {
          "id": "n8n-nodes-base.onfleetTrigger",
          "popularity": .134
        }, {
          "id": "n8n-nodes-base.keapTool",
          "popularity": .134
        }, {
          "id": "n8n-nodes-signifycrm.signifyCrm",
          "popularity": .052
        }, {
          "id": "n8n-nodes-base.profitWellTool",
          "popularity": .103
        }, {
          "id": "n8n-nodes-zigpoll.zigpollTrigger",
          "popularity": .103
        }, {
          "id": "n8n-nodes-base.dsSearchTool",
          "popularity": .103
        }, {
          "id": "@geocapture/n8n-nodes-geocapture.geocapture",
          "popularity": .185
        }, {
          "id": "n8n-nodes-base.copperTrigger",
          "popularity": .145
        }, {
          "id": "@n8n/n8n-nodes-langchain.lmGooglePalm",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.emeliaTrigger",
          "popularity": .134
        }, {
          "id": "n8n-nodes-base.profitWell",
          "popularity": .12
        }, {
          "id": "n8n-nodes-base.crewAiTool",
          "popularity": 0
        }, {
          "id": "@bedrijfsdatanl/n8n-nodes-prospectpro.prospectpro",
          "popularity": .231
        }, {
          "id": "n8n-nodes-base.twakeTool",
          "popularity": .12
        }, {
          "id": "n8n-nodes-base.moceanTool",
          "popularity": .134
        }, {
          "id": "n8n-nodes-referral-factory.referralFactory",
          "popularity": .103
        }, {
          "id": "n8n-nodes-winston-ai.winstonAi",
          "popularity": .134
        }, {
          "id": "n8n-nodes-jigsawstack.jigsawStack",
          "popularity": .145
        }, {
          "id": "n8n-nodes-hookdeck.hookdeck",
          "popularity": .052
        }, {
          "id": "n8n-nodes-base.linkedinNodeTool",
          "popularity": .155
        }, {
          "id": "n8n-nodes-base.venafiTlsProtectCloudTrigger",
          "popularity": .052
        }, {
          "id": "n8n-nodes-base.spontitTool",
          "popularity": .052
        }, {
          "id": "n8n-nodes-base.jimengAiTool",
          "popularity": 0
        }, {
          "id": "@orq-ai/n8n-nodes-orq.orqDeployment",
          "popularity": .082
        }, {
          "id": "n8n-nodes-base.lingvaNexTool",
          "popularity": .12
        }, {
          "id": "n8n-nodes-ikas.ikas",
          "popularity": .12
        }, {
          "id": "n8n-nodes-reachkit.reachkit",
          "popularity": .052
        }, {
          "id": "n8n-nodes-base.fortinetTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.kitemaker",
          "popularity": .103
        }, {
          "id": "@n8n/n8n-nodes-langchain.openAiAssistant",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.cron",
          "popularity": 0
        }, {
          "id": "n8n-nodes-omnara.omnara",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.arubaCentralv4Tool",
          "popularity": 0
        }, {
          "id": "@droidrun/n8n-nodes-droidrun.droidrun",
          "popularity": .082
        }, {
          "id": "n8n-nodes-base.writeBinaryFile",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.aimsArticlesTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-payfunnels.payfunnels",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.spreadsheetFile",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.wakebAipTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.workflowTrigger",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.youTubeSearchTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.splunkFdjTool",
          "popularity": 0
        }, {
          "id": "@n8n/n8n-nodes-langchain.toolHttpRequest",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.loneScaleTrigger",
          "popularity": 0
        }, {
          "id": "@thelifeofrishi/n8n-nodes-orshot.orshot",
          "popularity": .256
        }, {
          "id": "@steuerboard/n8n-nodes-steuerboard.steuerboard",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.function",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.setTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.readPDF",
          "popularity": 0
        }, {
          "id": "@n8n/n8n-nodes-langchain.vectorStoreSupabaseLoad",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.olhoVivoTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.htmlExtract",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.orbit",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.tfusionGenerateTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.stickyNote",
          "popularity": 0
        }, {
          "id": "@n8n/n8n-nodes-langchain.memoryChatRetriever",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.comfyUITool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-targetare.targetareRo",
          "popularity": 0
        }, {
          "id": "@n8n/n8n-nodes-langchain.lmOpenAi",
          "popularity": 0
        }, {
          "id": "@n8n/n8n-nodes-langchain.lmChatGooglePalm",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.libreNmsTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.wakebDvsTool",
          "popularity": 0
        }, {
          "id": "@datafix/n8n-nodes-anthias.anthias",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.odooCustomToolTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.customSshTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.e2eTest",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.squareTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.mcpClientTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.influxDbTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.smsItTool",
          "popularity": 0
        }, {
          "id": "@n8n/n8n-nodes-langchain.documentBinaryInputLoader",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.crowdDevTrigger",
          "popularity": 0
        }, {
          "id": "n8n-nodes-crossmint.crossmintWallets",
          "popularity": .237
        }, {
          "id": "n8n-nodes-simla.simlaTrigger",
          "popularity": .052
        }, {
          "id": "n8n-nodes-binalyze-air.air",
          "popularity": .103
        }, {
          "id": "n8n-nodes-base.onfleetTool",
          "popularity": .082
        }, {
          "id": "n8n-nodes-featherless.featherless",
          "popularity": .191
        }, {
          "id": "n8n-nodes-base.loneScale",
          "popularity": .082
        }, {
          "id": "n8n-nodes-base.veroTool",
          "popularity": .145
        }, {
          "id": "@n8n/n8n-nodes-langchain.vectorStorePineconeLoad",
          "popularity": 0
        }, {
          "id": "n8n-nodes-octagon.octagonAgents",
          "popularity": .082
        }, {
          "id": "n8n-nodes-base.venafiTlsProtectCloud",
          "popularity": .052
        }, {
          "id": "n8n-nodes-octavehq.octave",
          "popularity": .155
        }, {
          "id": "n8n-nodes-base.cywareConnectorTool",
          "popularity": 0
        }, {
          "id": "@n8n/n8n-nodes-langchain.vectorStorePineconeInsert",
          "popularity": 0
        }, {
          "id": "@n8n/n8n-nodes-langchain.documentDefaultDataLoader",
          "popularity": .758
        }, {
          "id": "@n8n/n8n-nodes-langchain.ollama",
          "popularity": .727
        }, {
          "id": "@n8n/n8n-nodes-langchain.lmOllama",
          "popularity": .674
        }, {
          "id": "@n8n/n8n-nodes-langchain.outputParserItemList",
          "popularity": .705
        }, {
          "id": "@n8n/n8n-nodes-langchain.toolVectorStore",
          "popularity": .658
        }, {
          "id": "@n8n/n8n-nodes-langchain.lmChatMistralCloud",
          "popularity": .655
        }, {
          "id": "@elevenlabs/n8n-nodes-elevenlabs.elevenLabs",
          "popularity": .639
        }, {
          "id": "@n8n/n8n-nodes-langchain.memoryMotorhead",
          "popularity": .596
        }, {
          "id": "@pdfgeneratorapi/n8n-nodes-pdf-generator-api.pdfGeneratorApi",
          "popularity": .524
        }, {
          "id": "n8n-nodes-base.oracleDatabase",
          "popularity": .531
        }, {
          "id": "@n8n/n8n-nodes-langchain.vectorStoreRedis",
          "popularity": .492
        }, {
          "id": "n8n-nodes-scrapingbee.ScrapingBee",
          "popularity": .444
        }, {
          "id": "n8n-nodes-base.clickUpTool",
          "popularity": .521
        }, {
          "id": "n8n-nodes-base.googleAnalyticsTool",
          "popularity": .452
        }, {
          "id": "n8n-nodes-tallyforms.tallyTrigger",
          "popularity": .445
        }, {
          "id": "n8n-nodes-base.googleFirebaseRealtimeDatabaseTool",
          "popularity": .409
        }, {
          "id": "n8n-nodes-browseract.browserAct",
          "popularity": .411
        }, {
          "id": "@n8n/n8n-nodes-langchain.embeddingsLemonade",
          "popularity": .36
        }, {
          "id": "n8n-nodes-emailvalidation.emailValidation",
          "popularity": .349
        }, {
          "id": "@razorpay/n8n-nodes-razorpay.razorpay",
          "popularity": .374
        }, {
          "id": "n8n-nodes-verifiemail.verifiEmail",
          "popularity": .303
        }, {
          "id": "n8n-nodes-base.googlePerspective",
          "popularity": .243
        }, {
          "id": "@exploriumai/n8n-nodes-explorium-ai.exploriumApiNode",
          "popularity": .306
        }, {
          "id": "n8n-nodes-human-in-the-loop.hitlNode",
          "popularity": .24
        }, {
          "id": "n8n-nodes-infranodus.infranodus",
          "popularity": .254
        }, {
          "id": "n8n-nodes-blank.githubIssues",
          "popularity": .227
        }, {
          "id": "@xano/n8n-nodes-xano.xano",
          "popularity": .287
        }, {
          "id": "@rogerrogerio/n8n-nodes-rogerroger.rogerRoger",
          "popularity": 0
        }, {
          "id": "@lnkbio/n8n-nodes-lnkbio.lnkBio",
          "popularity": .155
        }, {
          "id": "@nvoip/n8n-nodes-nvoip.nvoip",
          "popularity": .145
        }, {
          "id": "n8n-nodes-nele-ai.neleAi",
          "popularity": .265
        }, {
          "id": "n8n-nodes-base.mocean",
          "popularity": .082
        }, {
          "id": "@socradar/n8n-nodes-socradar.socradar",
          "popularity": .052
        }, {
          "id": "@n8n/n8n-nodes-langchain.documentJsonInputLoader",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.upGuardTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.manualTrigger",
          "popularity": .994
        }, {
          "id": "n8n-nodes-htmlcsstopdf.htmlcsstopdf",
          "popularity": .55
        }, {
          "id": "n8n-nodes-base.microsoftOneDriveTrigger",
          "popularity": .558
        }, {
          "id": "n8n-nodes-google-search-console.googleSearchConsole",
          "popularity": .453
        }, {
          "id": "n8n-nodes-base.freshdesk",
          "popularity": .467
        }, {
          "id": "n8n-nodes-pdfmonkey.pdfMonkey",
          "popularity": .417
        }, {
          "id": "n8n-nodes-olostep.olostepScrape",
          "popularity": .394
        }, {
          "id": "@promptlayer/n8n-nodes-promptlayer-runagent.promptLayerRunAgent",
          "popularity": .366
        }, {
          "id": "n8n-nodes-llmlayer.llmLayer",
          "popularity": .345
        }, {
          "id": "n8n-nodes-sourcegeek.sourcegeek",
          "popularity": .326
        }, {
          "id": "@respond-io/n8n-nodes-respond-io.respondio",
          "popularity": .422
        }, {
          "id": "@servicem8/n8n-nodes-servicem8.serviceM8",
          "popularity": .433
        }, {
          "id": "@easysoftware/n8n-nodes-easy-redmine.easyRedmine",
          "popularity": .317
        }, {
          "id": "n8n-nodes-base.peekalinkTool",
          "popularity": .261
        }, {
          "id": "n8n-nodes-csvbox.csvboxTrigger",
          "popularity": .24
        }, {
          "id": "@reportei/n8n-nodes-reportei.reportei",
          "popularity": .249
        }, {
          "id": "n8n-nodes-dumplingai.dumplingAi",
          "popularity": .224
        }, {
          "id": "@deutschlandgpt/n8n-nodes-deutschlandgpt.deutschlandgpt",
          "popularity": .211
        }, {
          "id": "@decisionrules/n8n-nodes-decisionrules.decisionRules",
          "popularity": .202
        }, {
          "id": "@infobip/n8n-nodes-infobip-api.infobipApi",
          "popularity": .207
        }, {
          "id": "n8n-nodes-meetgeek.meetGeek",
          "popularity": .224
        }, {
          "id": "n8n-nodes-memara.memara",
          "popularity": .172
        }, {
          "id": "@ledgers/n8n-nodes-ledgers-cloud.ledgers",
          "popularity": .052
        }, {
          "id": "n8n-nodes-base.twake",
          "popularity": .082
        }, {
          "id": "n8n-nodes-base.onlyofficeTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.waitTool",
          "popularity": .052
        }, {
          "id": "n8n-nodes-telli.telli",
          "popularity": .082
        }, {
          "id": "n8n-nodes-base.playwrightPageTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-sinergiacrm.sinergiaCrm",
          "popularity": .082
        }, {
          "id": "n8n-nodes-phacet-official.phacet",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.arubaCentralNextGenTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.functionItem",
          "popularity": 0
        }, {
          "id": "@n8n/n8n-nodes-langchain.vectorStoreZepInsert",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.interval",
          "popularity": 0
        }, {
          "id": "n8n-nodes-hubbi.hubbi",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.arubaCentralTool",
          "popularity": 0
        }, {
          "id": "@n8n/n8n-nodes-langchain.vectorStoreInMemoryLoad",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.coachLmsTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.hapTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.aimsTokenGenTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.zohoCalendarTool",
          "popularity": 0
        }, {
          "id": "n8n-nodes-base.start",
          "popularity": 0
        }, {
          "id": "@n8n/n8n-nodes-langchain.memoryZep",
          "popularity": 0
        }]; //#endregion
        //#region src/features/shared/nodeCreator/composables/useViewStacks.ts
        import_difference = /* @__PURE__ */__toESM(require_difference());
        nodePopularityMap = Object.values(__virtual_node_popularity_data_default).reduce((acc, node) => {
          return {
            ...acc,
            [node.id]: node.popularity * 100
          };
        }, {});
        _export("d", useViewStacks = defineStore("nodeCreatorViewStacks", () => {
          const nodeCreatorStore = useNodeCreatorStore();
          const {
            getActiveItemIndex
          } = useKeyboardNavigation();
          const i18n = useI18n();
          const settingsStore = useSettingsStore();
          const viewStacks = ref([]);
          const activeStackItems = computed(() => {
            const stack = getLastActiveStack();
            if (!stack?.baselineItems) return stack.items ? extendItemsWithUUID(stack.items) : [];
            if (stack.search && searchBaseItems.value) {
              let searchBase = searchBaseItems.value;
              const canvasHasAINodes = useCanvasStore().aiNodes.length > 0;
              if (searchBaseItems.value.length === 0) searchBase = flattenCreateElements(stack.baselineItems ?? []);
              if (!(isAiRootView(stack) || canvasHasAINodes) || ["plus_endpoint", "node_connection_drop"].includes(nodeCreatorStore.openSource) && !isAiSubcategoryView(stack)) searchBase = filterOutAiNodes(searchBase);
              const searchResults = extendItemsWithUUID(searchNodes(stack.search || "", searchBase, {
                popularity: nodePopularityMap
              }));
              const groupedNodes = groupIfAiNodes(searchResults, stack.title, false) ?? searchResults;
              stack.activeIndex = groupedNodes.some(node => node.type === "section") ? 1 : 0;
              return groupedNodes;
            }
            return extendItemsWithUUID(groupIfAiNodes(stack.baselineItems, stack.title, true));
          });
          const activeViewStack = computed(() => {
            const stack = getLastActiveStack();
            if (!stack) return {};
            const flatBaselineItems = flattenCreateElements(stack.baselineItems ?? []);
            return {
              ...stack,
              items: activeStackItems.value,
              hasSearch: flatBaselineItems.length > 8 || stack?.hasSearch
            };
          });
          const activeViewStackMode = computed(() => activeViewStack.value.mode ?? "Trigger");
          const searchBaseItems = computed(() => {
            const stack = getLastActiveStack();
            if (!stack?.searchItems) return [];
            return stack.searchItems.map(item => transformNodeType(item, stack.subcategory));
          });
          function isAiSubcategoryView(stack) {
            return stack.rootView === AI_OTHERS_NODE_CREATOR_VIEW;
          }
          function getLastActiveStack() {
            return viewStacks.value[viewStacks.value.length - 1];
          }
          function getAllNodeCreateElements() {
            return nodeCreatorStore.mergedNodes.map(item => transformNodeType(item));
          }
          const globalSearchItemsDiff = computed(() => {
            const stack = getLastActiveStack();
            if (!stack?.search || isAiSubcategoryView(stack)) return [];
            const allNodes = getAllNodeCreateElements();
            const filteredNodes = isAiRootView(stack) ? allNodes : filterOutAiNodes(allNodes);
            let globalSearchResult = extendItemsWithUUID(searchNodes(stack.search || "", filteredNodes, {
              popularity: nodePopularityMap
            }));
            if (isAiRootView(stack)) globalSearchResult = groupIfAiNodes(globalSearchResult, stack.title, false);
            return globalSearchResult.filter(item => {
              return !activeStackItems.value.find(activeItem => {
                if (activeItem.type === "section") return activeItem.children.some(sectionItem => sectionItem.key === item.key);
                return activeItem.key === item.key;
              });
            }).filter(item => {
              if (item.type === "section") return item.children.some(child => activeStackItems.value.some(filteredItem => filteredItem.key === child.key));
              return true;
            });
          });
          const itemsBySubcategory = computed(() => subcategorizeItems(nodeCreatorStore.mergedNodes));
          function isAiRootView(stack) {
            return stack.rootView === "AI";
          }
          function filterAiRootNodes(items) {
            return items.filter(node => {
              if (node.type !== "node") return false;
              const subcategories = node.properties.codex?.subcategories?.["AI"] ?? [];
              return subcategories.includes("Root Nodes") && !subcategories?.includes("Tools");
            });
          }
          function groupIfAiNodes(items, stackCategory, sortAlphabetically) {
            const aiNodes = items.filter(node => isAINode(node));
            const canvasHasAINodes = useCanvasStore().aiNodes.length > 0;
            const isVectorStoresCategory = stackCategory === AI_CATEGORY_VECTOR_STORES;
            if (aiNodes.length > 0 && (canvasHasAINodes || isAiRootView(getLastActiveStack()) || isVectorStoresCategory)) {
              const sectionsMap = /* @__PURE__ */new Map();
              const aiRootNodes = filterAiRootNodes(aiNodes);
              const aiSubNodes = (0, import_difference.default)(aiNodes, aiRootNodes);
              aiSubNodes.forEach(node => {
                const subcategories = node.properties.codex?.subcategories ?? {};
                const section = subcategories["AI"]?.[0];
                if (section) {
                  const subSection = section === "Vector Stores" && stackCategory === "Tools" ? void 0 : subcategories[section]?.[0];
                  const sectionKey = subSection ?? section;
                  const currentItems = sectionsMap.get(sectionKey)?.items ?? [];
                  const isSubnodesSection = !(subcategories["AI"].includes("Root Nodes") || subcategories["AI"].includes("Model Context Protocol"));
                  let title = section;
                  if (isSubnodesSection) title = `${section} (${i18n.baseText("nodeCreator.subnodes")})`;
                  if (subSection) title = subSection;
                  sectionsMap.set(sectionKey, {
                    key: sectionKey,
                    title,
                    items: [...currentItems, node.key]
                  });
                }
              });
              const nonAiNodes = (0, import_difference.default)(items, aiNodes);
              const sections = Array.from(sectionsMap.values());
              return [...nonAiNodes, ...aiRootNodes, ...groupItemsInSections(aiSubNodes, sections, sortAlphabetically)];
            }
            return items;
          }
          function filterOutAiNodes(items) {
            return items.filter(item => {
              if (item.type === "node") {
                if (!(item.properties.codex?.categories?.includes("AI") === true)) return true;
                return item.properties.codex?.subcategories?.["AI"]?.includes(AI_CATEGORY_ROOT_NODES);
              }
              return true;
            });
          }
          async function gotoCompatibleConnectionView(connectionType, isOutput, filter) {
            let nodesByConnectionType;
            let relatedAIView;
            if (isOutput === true) {
              nodesByConnectionType = useNodeTypesStore().visibleNodeTypesByInputConnectionTypeNames;
              relatedAIView = {
                properties: {
                  title: i18n.baseText("nodeCreator.aiPanel.aiNodes"),
                  icon: "robot"
                }
              };
            } else {
              nodesByConnectionType = useNodeTypesStore().visibleNodeTypesByOutputConnectionTypeNames;
              relatedAIView = AINodesView([]).items.find(item => item.properties.connectionType === connectionType);
            }
            let extendedInfo = {};
            if (!filter?.nodes?.length && relatedAIView?.properties.info) extendedInfo = {
              info: relatedAIView?.properties.info
            };
            await nextTick();
            const iconName = getThemedValue(relatedAIView?.properties.icon, useUIStore().appliedTheme);
            pushViewStack({
              title: relatedAIView?.properties.title,
              ...extendedInfo,
              rootView: AI_OTHERS_NODE_CREATOR_VIEW,
              mode: "nodes",
              items: nodeCreatorStore.allNodeCreatorNodes,
              nodeIcon: iconName ? {
                type: "icon",
                name: iconName,
                color: relatedAIView?.properties.iconProps?.color
              } : void 0,
              panelClass: relatedAIView?.properties.panelClass,
              baseFilter: i => {
                if (i.key === "@n8n/n8n-nodes-langchain.code") return false;
                const displayNode = nodesByConnectionType[connectionType].includes(i.key);
                if (displayNode && filter?.nodes?.length) return filter.nodes.includes(i.key);
                if (displayNode && filter?.excludedNodes?.length) return !filter.excludedNodes.includes(i.key);
                return displayNode;
              },
              itemsMapper(item) {
                return {
                  ...item,
                  subcategory: connectionType
                };
              },
              actionsFilter: items => {
                if (items.some(item => item.outputConnectionType)) return items.filter(item => item.outputConnectionType === connectionType);
                return items;
              },
              hideActions: true,
              preventBack: true
            }, {
              resetStacks: true
            });
          }
          function setStackBaselineItems() {
            const stack = getLastActiveStack();
            if (!stack || !activeViewStack.value.uuid) return;
            let stackItems = stack?.items ?? [];
            if (!stack?.items) {
              const subcategory = stack?.subcategory ?? "*";
              let itemsInSubcategory = itemsBySubcategory.value[subcategory];
              if (!settingsStore.isAskAiEnabled) itemsInSubcategory = itemsInSubcategory.filter(item => item.key !== AI_TRANSFORM_NODE_TYPE);
              const sections = stack.sections;
              if (sections) stackItems = groupItemsInSections(itemsInSubcategory, sections);else stackItems = itemsInSubcategory;
            }
            if ((stack.forceIncludeNodes ?? []).length > 0) {
              const matchedNodes = nodeCreatorStore.mergedNodes.filter(item => stack.forceIncludeNodes?.includes(item.name)).map(item => transformNodeType(item, stack.subcategory));
              stackItems.push(...matchedNodes);
            }
            if (stack.baseFilter) stackItems = stackItems.filter(stack.baseFilter);
            if (stack.itemsMapper) stackItems = stackItems.map(stack.itemsMapper);
            if (!stack.items) stackItems = sortNodeCreateElements(stackItems);
            updateCurrentViewStack({
              baselineItems: stackItems
            });
          }
          function pushViewStack(stack, options = {}) {
            if (options.resetStacks) resetViewStacks();
            if (activeViewStack.value.uuid) updateCurrentViewStack({
              activeIndex: getActiveItemIndex()
            });
            const newStackUuid = v4_default();
            viewStacks.value.push({
              ...stack,
              uuid: newStackUuid,
              transitionDirection: options.transitionDirection ?? "in",
              activeIndex: 0
            });
            setStackBaselineItems();
          }
          function popViewStack() {
            if (activeViewStack.value.uuid) {
              viewStacks.value.pop();
              updateCurrentViewStack({
                transitionDirection: "out"
              });
            }
          }
          function updateCurrentViewStack(stack) {
            const currentStack = getLastActiveStack();
            const matchedIndex = viewStacks.value.findIndex(s => s.uuid === currentStack.uuid);
            if (!currentStack) return;
            Object.keys(stack).forEach(key => {
              const typedKey = key;
              viewStacks.value[matchedIndex] = {
                ...viewStacks.value[matchedIndex],
                [key]: stack[typedKey]
              };
            });
          }
          function resetViewStacks() {
            viewStacks.value = [];
          }
          return {
            viewStacks,
            activeViewStack,
            activeViewStackMode,
            globalSearchItemsDiff,
            isAiSubcategoryView,
            gotoCompatibleConnectionView,
            resetViewStacks,
            updateCurrentViewStack,
            pushViewStack,
            popViewStack,
            getAllNodeCreateElements
          };
        }));
        import_get = /* @__PURE__ */__toESM(require_get());
        _export("t", useNodeCreatorStore = defineStore(STORES.NODE_CREATOR, () => {
          const workflowsStore = useWorkflowsStore();
          const ndvStore = useNDVStore();
          const uiStore = useUIStore();
          const nodeTypesStore = useNodeTypesStore();
          const telemetry = useTelemetry();
          const externalHooks = useExternalHooks();
          const selectedView = ref(TRIGGER_NODE_CREATOR_VIEW);
          const mergedNodes = ref([]);
          const actions = ref({});
          const showScrim = ref(false);
          const openSource = ref("");
          const isCreateNodeActive = ref(false);
          const nodePanelSessionId = ref("");
          const allNodeCreatorNodes = computed(() => Object.values(mergedNodes.value).map(i => transformNodeType(i)));
          const workflowObject = computed(() => workflowsStore.workflowObject);
          function setMergeNodes(nodes) {
            mergedNodes.value = nodes;
          }
          function removeNodeFromMergedNodes(nodeName) {
            mergedNodes.value = mergedNodes.value.filter(n => n.name !== nodeName);
          }
          function setActions(nodes) {
            actions.value = nodes;
          }
          function setShowScrim(isVisible) {
            showScrim.value = isVisible;
          }
          function setSelectedView(view) {
            selectedView.value = view;
          }
          function setOpenSource(view) {
            openSource.value = view;
          }
          function openSelectiveNodeCreator({
            connectionType,
            node,
            creatorView,
            connectionIndex = 0
          }) {
            const nodeName = node ?? ndvStore.activeNodeName;
            const nodeData = nodeName ? workflowsStore.getNodeByName(nodeName) : null;
            ndvStore.unsetActiveNodeName();
            setTimeout(() => {
              if (creatorView) setNodeCreatorState({
                createNodeActive: true,
                nodeCreatorView: creatorView,
                connectionType
              });else if (connectionType && nodeData) openNodeCreatorForConnectingNode({
                connection: {
                  source: nodeData.id,
                  sourceHandle: createCanvasConnectionHandleString({
                    mode: "inputs",
                    type: connectionType,
                    index: connectionIndex
                  })
                },
                eventSource: NODE_CREATOR_OPEN_SOURCES.NOTICE_ERROR_MESSAGE
              });
            });
          }
          function setNodeCreatorState({
            source,
            createNodeActive,
            nodeCreatorView,
            connectionType
          }) {
            if (!nodeCreatorView) nodeCreatorView = workflowsStore.workflowTriggerNodes.length > 0 ? REGULAR_NODE_CREATOR_VIEW : TRIGGER_NODE_CREATOR_VIEW;
            setSelectedView(nodeCreatorView);
            isCreateNodeActive.value = createNodeActive;
            if (createNodeActive && source) setOpenSource(source);
            externalHooks.run("nodeView.createNodeActiveChanged", {
              source,
              mode: getMode(nodeCreatorView),
              connectionType,
              createNodeActive
            });
            if (createNodeActive) onCreatorOpened({
              source,
              mode: getMode(nodeCreatorView),
              connectionType,
              workflow_id: workflowsStore.workflowId
            });
          }
          function openNodeCreatorForConnectingNode({
            connection,
            eventSource,
            nodeCreatorView
          }) {
            const sourceNode = workflowsStore.getNodeById(connection.source);
            if (!sourceNode) return;
            const {
              type,
              mode
            } = parseCanvasConnectionHandleString(connection.sourceHandle);
            uiStore.lastSelectedNode = sourceNode.name;
            if (isVueFlowConnection(connection)) uiStore.lastInteractedWithNodeConnection = connection;
            uiStore.lastInteractedWithNodeHandle = connection.sourceHandle ?? null;
            uiStore.lastInteractedWithNodeId = sourceNode.id;
            const isOutput = mode === CanvasConnectionMode.Output;
            const isScopedConnection = type !== NodeConnectionTypes.Main;
            setNodeCreatorState({
              source: eventSource,
              createNodeActive: true,
              nodeCreatorView: isScopedConnection ? AI_UNCATEGORIZED_CATEGORY : nodeCreatorView,
              connectionType: type
            });
            if (isScopedConnection) useViewStacks().gotoCompatibleConnectionView(type, isOutput, getNodeCreatorFilter(sourceNode.name, type)).catch(() => {});
          }
          async function openNodeCreatorWithNode(nodeName) {
            const nodeData = nodeName ? workflowsStore.getNodeByName(nodeName) : null;
            if (!nodeData) return;
            ndvStore.unsetActiveNodeName();
            const nodeType = nodeTypesStore.getNodeType(nodeData?.type) ?? nodeTypesStore.communityNodeType(nodeData?.type)?.nodeDescription;
            if (!nodeType) return;
            setNodeCreatorState({
              createNodeActive: true
            });
            await nextTick();
            const nodeActions = actions.value[nodeType.name];
            const viewStack = prepareCommunityNodeDetailsViewStack({
              key: nodeType.name,
              properties: nodeType,
              type: "node",
              subcategory: "*"
            }, getNodeIconSource(nodeType.name), "Regular", nodeActions ?? []);
            useViewStacks().pushViewStack(viewStack, {
              resetStacks: true
            });
          }
          function openNodeCreatorForTriggerNodes(source) {
            ndvStore.unsetActiveNodeName();
            setSelectedView(TRIGGER_NODE_CREATOR_VIEW);
            setShowScrim(true);
            setNodeCreatorState({
              source,
              createNodeActive: true,
              nodeCreatorView: TRIGGER_NODE_CREATOR_VIEW
            });
          }
          function openNodeCreatorForRegularNodes(source) {
            ndvStore.unsetActiveNodeName();
            setSelectedView(REGULAR_NODE_CREATOR_VIEW);
            setShowScrim(true);
            setNodeCreatorState({
              source,
              createNodeActive: true,
              nodeCreatorView: REGULAR_NODE_CREATOR_VIEW
            });
          }
          function openNodeCreatorForActions(node, eventSource) {
            const actionNode = allNodeCreatorNodes.value.find(i => i.key === node);
            if (!actionNode) return;
            const transformedActions = actions.value[actionNode.key]?.map(a => transformNodeType(a, actionNode.properties.displayName, "action"));
            ndvStore.unsetActiveNodeName();
            setSelectedView(REGULAR_NODE_CREATOR_VIEW);
            setNodeCreatorState({
              source: eventSource,
              createNodeActive: true,
              nodeCreatorView: REGULAR_NODE_CREATOR_VIEW
            });
            setTimeout(() => {
              useViewStacks().pushViewStack({
                subcategory: "*",
                title: actionNode.properties.displayName,
                nodeIcon: {
                  type: "icon",
                  name: "check-check"
                },
                rootView: "Regular",
                mode: "actions",
                items: transformedActions
              }, {
                resetStacks: true
              });
            });
          }
          function getNodeCreatorFilter(nodeName, outputType) {
            let filter;
            const workflowNode = workflowObject.value.getNode(nodeName);
            if (!workflowNode) return {
              nodes: []
            };
            const nodeType = nodeTypesStore.getNodeType(workflowNode?.type, workflowNode.typeVersion) ?? nodeTypesStore.communityNodeType(workflowNode?.type)?.nodeDescription;
            if (nodeType) {
              const filterFound = getNodeInputs(workflowObject.value, workflowNode, nodeType).filter(input => {
                if (typeof input === "string" || input.type !== outputType || !input.filter) return false;
                return true;
              });
              if (filterFound.length) filter = filterFound[0].filter;
            }
            return filter;
          }
          function resetNodesPanelSession() {
            nodePanelSessionId.value = `nodes_panel_session_${(/* @__PURE__ */new Date()).valueOf()}`;
          }
          function trackNodeCreatorEvent(event, properties = {}) {
            telemetry.track(event, {
              ...properties,
              nodes_panel_session_id: nodePanelSessionId.value
            });
          }
          function onCreatorOpened({
            source,
            mode,
            connectionType,
            workflow_id
          }) {
            resetNodesPanelSession();
            trackNodeCreatorEvent("User opened nodes panel", {
              source,
              mode,
              connectionType,
              workflow_id
            });
          }
          function onNodeFilterChanged({
            newValue,
            filteredNodes,
            filterMode,
            subcategory,
            title
          }) {
            if (!newValue.length) return;
            const {
              results_count,
              trigger_count,
              regular_count,
              community_count
            } = filteredNodes.reduce((accu, node) => {
              if (!("properties" in node)) return accu;
              if ("actionKey" in node.properties && node.properties.actionKey === "__CUSTOM_API_CALL__") return accu;
              const isTrigger = node.key.includes("Trigger");
              const nodeName = (0, import_get.default)(node, "properties.name", null);
              const isCommunityNode = nodeName && isCommunityPackageName(nodeName);
              return {
                results_count: accu.results_count + 1,
                trigger_count: accu.trigger_count + (isTrigger ? 1 : 0),
                regular_count: accu.regular_count + (isTrigger ? 0 : 1),
                community_count: accu.community_count + (isCommunityNode ? 1 : 0)
              };
            }, {
              results_count: 0,
              trigger_count: 0,
              regular_count: 0,
              community_count: 0
            });
            trackNodeCreatorEvent("User entered nodes panel search term", {
              search_string: newValue,
              filter_mode: getMode(filterMode),
              category_name: subcategory,
              results_count,
              trigger_count,
              regular_count,
              community_count,
              title
            });
          }
          function onCategoryExpanded(properties) {
            trackNodeCreatorEvent("User viewed node category", {
              ...properties,
              is_subcategory: false
            });
          }
          function onViewActions(properties) {
            trackNodeCreatorEvent("User viewed node actions", properties);
          }
          function onActionsCustomAPIClicked(properties) {
            trackNodeCreatorEvent("User clicked custom API from node actions", properties);
          }
          function onSubcategorySelected(properties) {
            trackNodeCreatorEvent("User viewed node category", {
              category_name: properties.subcategory,
              is_subcategory: true
            });
          }
          function onNodeAddedToCanvas(properties) {
            trackNodeCreatorEvent("User added node to workflow canvas", properties);
          }
          function getMode(mode) {
            if (mode === "AI" || mode === "AI Other") return "ai";
            if (mode === "Trigger") return "trigger";
            return "regular";
          }
          return {
            isCreateNodeActive,
            openSource,
            selectedView,
            showScrim,
            mergedNodes,
            actions,
            allNodeCreatorNodes,
            setShowScrim,
            setSelectedView,
            setOpenSource,
            setActions,
            setMergeNodes,
            removeNodeFromMergedNodes,
            setNodeCreatorState,
            openSelectiveNodeCreator,
            openNodeCreatorForConnectingNode,
            openNodeCreatorForTriggerNodes,
            openNodeCreatorForRegularNodes,
            openNodeCreatorForActions,
            onCreatorOpened,
            onNodeFilterChanged,
            onCategoryExpanded,
            onActionsCustomAPIClicked,
            onViewActions,
            onSubcategorySelected,
            onNodeAddedToCanvas,
            openNodeCreatorWithNode
          };
        })); //#endregion
      }
    };
  });
})();