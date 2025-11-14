import { o as __toESM, t as __commonJSMin } from "./chunk-6z4oVpB-.js";
import { C as computed, G as nextTick, It as ref } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-CGDCbL4z.js";
import { b as useRouter, c as require__arrayMap, r as require_get, s as require_toString, y as useRoute } from "./truncate-CU7tM1AH.js";
import { At as isPrebuiltAgentTemplateId, Bt as require__createCompounder, Ct as transformNodeType, Dt as getRagStarterWorkflowJson, En as useProjectsStore, Et as getPrebuiltAgents, Ni as useUIStore, Ot as getSampleWorkflowByTemplateId, Ro as useSettingsStore, Rt as require_upperFirst, St as subcategorizeItems, Un as useCanvasStore, Uo as updateCurrentUserSettings, Ys as useRootStore, Zr as getThemedValue, _t as prepareCommunityNodeDetailsViewStack, a as useNDVStore, at as useEvaluationStore, bc as STORES, br as CanvasConnectionMode, ct as flattenCreateElements, er as useUsersStore, ft as getPreBuiltAgentsCalloutWithDivider, gr as isValidNodeConnectionType, ht as isAINode, i as usePostHog, jt as isTutorialTemplateId, kt as getTutorialTemplates, mr as isValidCanvasConnectionMode, mt as groupItemsInSections, o as useWorkflowsStore, ot as extendItemsWithUUID, rt as useNodeTypesStore, t as useTelemetry, ut as getAiTemplatesCallout, vc as defineStore, vr as isVueFlowConnection, wt as SampleTemplates, xc as v4_default, xt as sortNodeCreateElements, yt as searchNodes } from "./useTelemetry-DDk4UBtV.js";
import { $a as DEFAULT_SUBCATEGORY, $r as require__arrayIncludesWith, Aa as require__SetCache, Ba as AI_CATEGORY_RETRIEVERS, Bt as MERGE_NODE_TYPE, Cr as NODE_MIN_INPUT_ITEMS_COUNT, Et as HTTP_REQUEST_NODE_TYPE, Fa as AI_CATEGORY_LANGUAGE_MODELS, Fs as PRE_BUILT_AGENTS_EXPERIMENT, G as AGGREGATE_NODE_TYPE, Ga as AI_CODE_TOOL_LANGCHAIN_NODE_TYPE, Ha as AI_CATEGORY_TEXT_SPLITTERS, I as CUSTOM_API_CALL_KEY, Ia as AI_CATEGORY_MCP_NODES, J as AI_TRANSFORM_NODE_TYPE$1, Ja as AI_OTHERS_NODE_CREATOR_VIEW, K as AI_CODE_NODE_TYPE, La as AI_CATEGORY_MEMORY, Lo as PRE_BUILT_AGENTS_MODAL_KEY, Lt as MANUAL_TRIGGER_NODE_TYPE, Ma as AI_CATEGORY_CHAINS, Na as AI_CATEGORY_DOCUMENT_LOADERS, On as WEBHOOK_NODE_TYPE, Or as require__baseFlatten, Ot as IF_NODE_TYPE, Pa as AI_CATEGORY_EMBEDDING, Pn as XML_NODE_TYPE, Pt as LIMIT_NODE_TYPE, Q as CHAT_TRIGGER_NODE_TYPE, Qa as CORE_NODES_CATEGORY, Rt as MARKDOWN_NODE_TYPE, Sn as SUMMARIZE_NODE_TYPE, St as FORM_TRIGGER_NODE_TYPE, Tt as HTML_NODE_TYPE, Ua as AI_CATEGORY_TOOLS, Ui as isCommunityPackageName, Va as AI_CATEGORY_ROOT_NODES, Wa as AI_CATEGORY_VECTOR_STORES, Xa as AI_UNCATEGORIZED_CATEGORY, Ya as AI_SUBCATEGORY, Za as AI_WORKFLOW_TOOL_LANGCHAIN_NODE_TYPE, _i as getNodeInputs, _n as SPLIT_IN_BATCHES_NODE_TYPE, ao as OTHER_TRIGGER_NODES_SUBCATEGORY, bt as FILTER_NODE_TYPE, ct as DATETIME_NODE_TYPE, do as TRIGGER_NODE_CREATOR_VIEW, ea as NodeConnectionTypes, ei as require__arrayIncludes, eo as FLOWS_CONTROL_SUBCATEGORY, et as CODE_NODE_TYPE, fa as EVALUATION_TRIGGER_NODE_TYPE, fn as SET_NODE_TYPE, ft as EMAIL_IMAP_NODE_TYPE, io as NODE_CREATOR_OPEN_SOURCES, ja as AI_CATEGORY_AGENTS, ka as require__cacheHas, ln as SCHEDULE_TRIGGER_NODE_TYPE, lo as TEMPLATE_CATEGORY_AI, mo as VIEWS, no as HITL_SUBCATEGORY, nt as CONVERT_TO_FILE_NODE_TYPE, on as REMOVE_DUPLICATES_NODE_TYPE, ot as CRYPTO_NODE_TYPE, pt as EMAIL_SEND_NODE_TYPE, qa as AI_NODE_CREATOR_VIEW, ro as HUMAN_IN_THE_LOOP_CATEGORY, sa as AI_TRANSFORM_NODE_TYPE, sn as RSS_READ_NODE_TYPE, so as REGULAR_NODE_CREATOR_VIEW, to as HELPERS_SUBCATEGORY, tt as COMPRESSION_NODE_TYPE, uo as TRANSFORM_DATA_SUBCATEGORY, ut as EDIT_IMAGE_NODE_TYPE, vn as SPLIT_OUT_NODE_TYPE, vt as EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE, yt as EXTRACT_FROM_FILE_NODE_TYPE, za as AI_CATEGORY_OUTPUTPARSER } from "./constants-Icf9Jupj.js";
import { T as require__baseUnary, r as require__baseRest, u as require_isArrayLikeObject } from "./merge-qpXyOahO.js";
import { t as useExternalHooks } from "./useExternalHooks-DIeHOYfe.js";
import { t as useTemplatesStore } from "./templates.store-3mu721hU.js";
import { t as getNodeIconSource } from "./nodeIcon-VTkVy9x0.js";
var require__baseDifference = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var SetCache = require__SetCache(), arrayIncludes = require__arrayIncludes(), arrayIncludesWith = require__arrayIncludesWith(), arrayMap = require__arrayMap(), baseUnary = require__baseUnary(), cacheHas = require__cacheHas();
	var LARGE_ARRAY_SIZE = 200;
	function baseDifference$1(array, values, iteratee, comparator) {
		var index = -1, includes = arrayIncludes, isCommon = true, length = array.length, result = [], valuesLength = values.length;
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
			var value = array[index], computed$1 = iteratee == null ? value : iteratee(value);
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
}));
var require_difference = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseDifference = require__baseDifference(), baseFlatten = require__baseFlatten(), baseRest = require__baseRest(), isArrayLikeObject = require_isArrayLikeObject();
	module.exports = baseRest(function(array, values) {
		return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
	});
}));
var require_capitalize = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var toString = require_toString(), upperFirst = require_upperFirst();
	function capitalize$1(string) {
		return upperFirst(toString(string).toLowerCase());
	}
	module.exports = capitalize$1;
}));
var require_camelCase = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var capitalize = require_capitalize();
	module.exports = require__createCompounder()(function(result, word, index) {
		word = word.toLowerCase();
		return result + (index ? capitalize(word) : word);
	});
}));
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
		return getPrebuiltAgents().map((template) => {
			return {
				key: template.template.meta.templateId,
				type: "openTemplate",
				properties: {
					templateId: template.template.meta.templateId,
					title: template.name,
					description: template.description,
					nodes: template.nodes.flatMap((node) => {
						const nodeType = nodeTypesStore.getNodeType(node.name, node.version);
						if (!nodeType) return [];
						return nodeType;
					})
				}
			};
		});
	};
	const getTutorialTemplatesNodeCreatorItems = () => {
		return getTutorialTemplates().map((template) => {
			return {
				key: template.template.meta.templateId,
				type: "openTemplate",
				properties: {
					templateId: template.template.meta.templateId,
					title: template.name,
					description: template.description,
					nodes: template.nodes.flatMap((node) => {
						const nodeType = nodeTypesStore.getNodeType(node.name, node.version);
						if (!nodeType) return [];
						return nodeType;
					})
				}
			};
		});
	};
	const openPreBuiltAgentsModal = async (source) => {
		telemetry.track("User opened pre-built Agents collection", {
			source,
			node_type: null,
			section: null
		});
		await nodeTypesStore.loadNodeTypesIfNotLoaded();
		uiStore.openModal(PRE_BUILT_AGENTS_MODAL_KEY);
	};
	const openPreBuiltAgentsCollection = async (options) => {
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
		}, { resetStacks: options.resetStacks ?? false });
	};
	const openSampleWorkflowTemplate = (templateId, options) => {
		if (templateId === SampleTemplates.RagStarterTemplate) telemetry.track("User clicked on RAG callout", { node_type: options.telemetry.nodeType ?? null });
		else if (isPrebuiltAgentTemplateId(templateId)) telemetry.track("User inserted pre-built Agent", {
			template: templateId,
			source: options.telemetry.source,
			node_type: options.telemetry.nodeType ?? null,
			section: options.telemetry.section ?? null
		});
		else if (isTutorialTemplateId(templateId)) telemetry.track("User inserted tutorial template", {
			template: templateId,
			source: options.telemetry.source,
			node_type: options.telemetry.nodeType ?? null,
			section: options.telemetry.section ?? null
		});
		const template = getSampleWorkflowByTemplateId(templateId);
		if (!template) return;
		const { href } = router.resolve({
			name: VIEWS.TEMPLATE_IMPORT,
			params: { id: template.meta.templateId },
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
	const isCalloutDismissed = (callout) => {
		return usersStore.isCalloutDismissed(callout);
	};
	const dismissCallout = async (callout) => {
		usersStore.setCalloutDismissed(callout);
		await updateCurrentUserSettings(rootStore.restApiContext, { dismissedCallouts: {
			...usersStore.currentUser?.settings?.dismissedCallouts,
			[callout]: true
		} });
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
var import_camelCase = /* @__PURE__ */ __toESM(require_camelCase());
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
	return nodes.filter((node) => !node.hidden && node.codex?.subcategories?.["AI"]?.includes(subcategory)).map(getNodeView).sort((a, b) => a.properties.displayName.localeCompare(b.properties.displayName));
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
		items: [
			...callouts,
			...agentNodes,
			...chainNodes,
			...transformNode,
			...evaluationNode,
			{
				key: AI_OTHERS_NODE_CREATOR_VIEW,
				type: "view",
				properties: {
					title: i18n.baseText("nodeCreator.aiPanel.aiOtherNodes"),
					icon: "robot",
					description: i18n.baseText("nodeCreator.aiPanel.aiOtherNodesDescription")
				}
			}
		]
	};
}
function AINodesView(_nodes) {
	const i18n = useI18n();
	function getAISubcategoryProperties(nodeConnectionType) {
		return {
			connectionType: nodeConnectionType,
			iconProps: { color: `var(--node-type-${nodeConnectionType}-color)` },
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
		items: [
			{
				key: AI_CATEGORY_DOCUMENT_LOADERS,
				type: "subcategory",
				properties: {
					title: AI_CATEGORY_DOCUMENT_LOADERS,
					info: getSubcategoryInfo(AI_CATEGORY_DOCUMENT_LOADERS),
					icon: "file-input",
					...getAISubcategoryProperties(NodeConnectionTypes.AiDocument)
				}
			},
			{
				key: AI_CATEGORY_LANGUAGE_MODELS,
				type: "subcategory",
				properties: {
					title: AI_CATEGORY_LANGUAGE_MODELS,
					info: getSubcategoryInfo(AI_CATEGORY_LANGUAGE_MODELS),
					icon: "language",
					...getAISubcategoryProperties(NodeConnectionTypes.AiLanguageModel)
				}
			},
			{
				key: AI_CATEGORY_MEMORY,
				type: "subcategory",
				properties: {
					title: AI_CATEGORY_MEMORY,
					info: getSubcategoryInfo(AI_CATEGORY_MEMORY),
					icon: "brain",
					...getAISubcategoryProperties(NodeConnectionTypes.AiMemory)
				}
			},
			{
				key: AI_CATEGORY_OUTPUTPARSER,
				type: "subcategory",
				properties: {
					title: AI_CATEGORY_OUTPUTPARSER,
					info: getSubcategoryInfo(AI_CATEGORY_OUTPUTPARSER),
					icon: "list",
					...getAISubcategoryProperties(NodeConnectionTypes.AiOutputParser)
				}
			},
			{
				key: AI_CATEGORY_RETRIEVERS,
				type: "subcategory",
				properties: {
					title: AI_CATEGORY_RETRIEVERS,
					info: getSubcategoryInfo(AI_CATEGORY_RETRIEVERS),
					icon: "search",
					...getAISubcategoryProperties(NodeConnectionTypes.AiRetriever)
				}
			},
			{
				key: AI_CATEGORY_TEXT_SPLITTERS,
				type: "subcategory",
				properties: {
					title: AI_CATEGORY_TEXT_SPLITTERS,
					info: getSubcategoryInfo(AI_CATEGORY_TEXT_SPLITTERS),
					icon: "grip-lines-vertical",
					...getAISubcategoryProperties(NodeConnectionTypes.AiTextSplitter)
				}
			},
			{
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
			},
			{
				key: AI_CATEGORY_EMBEDDING,
				type: "subcategory",
				properties: {
					title: AI_CATEGORY_EMBEDDING,
					info: getSubcategoryInfo(AI_CATEGORY_EMBEDDING),
					icon: "vector-square",
					...getAISubcategoryProperties(NodeConnectionTypes.AiEmbedding)
				}
			},
			{
				key: AI_CATEGORY_VECTOR_STORES,
				type: "subcategory",
				properties: {
					title: AI_CATEGORY_VECTOR_STORES,
					info: getSubcategoryInfo(AI_CATEGORY_VECTOR_STORES),
					icon: "waypoints",
					...getAISubcategoryProperties(NodeConnectionTypes.AiVectorStore)
				}
			},
			{
				key: AI_UNCATEGORIZED_CATEGORY,
				type: "subcategory",
				properties: {
					title: AI_UNCATEGORIZED_CATEGORY,
					icon: "code"
				}
			}
		]
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
		items: [
			{
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
			},
			{
				key: "*",
				type: "subcategory",
				properties: {
					forceIncludeNodes: [WEBHOOK_NODE_TYPE, EMAIL_IMAP_NODE_TYPE],
					title: "App Trigger Nodes",
					icon: "satellite-dish"
				}
			},
			{
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
			},
			{
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
			},
			{
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
			},
			{
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
			},
			{
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
			},
			...evaluationTriggerNode ? [evaluationTriggerNode] : [],
			{
				type: "subcategory",
				key: OTHER_TRIGGER_NODES_SUBCATEGORY,
				category: CORE_NODES_CATEGORY,
				properties: {
					title: OTHER_TRIGGER_NODES_SUBCATEGORY,
					icon: "folder-open"
				}
			}
		]
	};
}
function RegularView(nodes) {
	const i18n = useI18n();
	const popularItemsSubcategory = [
		SET_NODE_TYPE,
		CODE_NODE_TYPE,
		DATETIME_NODE_TYPE,
		AI_TRANSFORM_NODE_TYPE$1
	];
	const getSendAndWaitNodes = (nodes$1) => {
		return (nodes$1 ?? []).filter((node) => node.codex?.categories?.includes(HUMAN_IN_THE_LOOP_CATEGORY)).map((node) => node.name);
	};
	const view = {
		value: REGULAR_NODE_CREATOR_VIEW,
		title: i18n.baseText("nodeCreator.triggerHelperPanel.whatHappensNext"),
		items: [
			{
				key: "*",
				type: "subcategory",
				properties: {
					title: "App Regular Nodes",
					icon: "globe",
					forceIncludeNodes: [RSS_READ_NODE_TYPE, EMAIL_SEND_NODE_TYPE]
				}
			},
			{
				type: "subcategory",
				key: TRANSFORM_DATA_SUBCATEGORY,
				category: CORE_NODES_CATEGORY,
				properties: {
					title: TRANSFORM_DATA_SUBCATEGORY,
					icon: "pen",
					sections: [
						{
							key: "popular",
							title: i18n.baseText("nodeCreator.sectionNames.popular"),
							items: popularItemsSubcategory
						},
						{
							key: "addOrRemove",
							title: i18n.baseText("nodeCreator.sectionNames.transform.addOrRemove"),
							items: [
								FILTER_NODE_TYPE,
								REMOVE_DUPLICATES_NODE_TYPE,
								SPLIT_OUT_NODE_TYPE,
								LIMIT_NODE_TYPE
							]
						},
						{
							key: "combine",
							title: i18n.baseText("nodeCreator.sectionNames.transform.combine"),
							items: [
								SUMMARIZE_NODE_TYPE,
								AGGREGATE_NODE_TYPE,
								MERGE_NODE_TYPE
							]
						},
						{
							key: "convert",
							title: i18n.baseText("nodeCreator.sectionNames.transform.convert"),
							items: [
								HTML_NODE_TYPE,
								MARKDOWN_NODE_TYPE,
								XML_NODE_TYPE,
								CRYPTO_NODE_TYPE,
								EXTRACT_FROM_FILE_NODE_TYPE,
								CONVERT_TO_FILE_NODE_TYPE,
								COMPRESSION_NODE_TYPE,
								EDIT_IMAGE_NODE_TYPE
							]
						}
					]
				}
			},
			{
				type: "subcategory",
				key: FLOWS_CONTROL_SUBCATEGORY,
				category: CORE_NODES_CATEGORY,
				properties: {
					title: FLOWS_CONTROL_SUBCATEGORY,
					icon: "git-branch",
					sections: [{
						key: "popular",
						title: i18n.baseText("nodeCreator.sectionNames.popular"),
						items: [
							FILTER_NODE_TYPE,
							IF_NODE_TYPE,
							SPLIT_IN_BATCHES_NODE_TYPE,
							MERGE_NODE_TYPE
						]
					}]
				}
			},
			{
				type: "subcategory",
				key: HELPERS_SUBCATEGORY,
				category: CORE_NODES_CATEGORY,
				properties: {
					title: HELPERS_SUBCATEGORY,
					icon: "toolbox",
					sections: [{
						key: "popular",
						title: i18n.baseText("nodeCreator.sectionNames.popular"),
						items: [
							HTTP_REQUEST_NODE_TYPE,
							WEBHOOK_NODE_TYPE,
							CODE_NODE_TYPE
						]
					}]
				}
			},
			{
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
			}
		]
	};
	if ((nodes ?? []).some((node) => node.codex?.categories?.includes("AI"))) view.items.unshift({
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
const WATCHED_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"Enter",
	"Escape",
	"Tab"
];
const useKeyboardNavigation = defineStore("nodeCreatorKeyboardNavigation", () => {
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
		return await new Promise((resolve) => {
			cleanupSelectableItems();
			setTimeout(() => {
				selectableItems.value = Array.from(document.querySelectorAll("[data-keyboard-nav-type]")).map((el) => new WeakRef(el));
				resolve();
			}, 0);
		});
	}
	function executeKeyHooks(keyboardKey, activeItem) {
		Object.values(keysHooks.value).filter((hook) => hook.keyboardKeys.includes(keyboardKey)).forEach((hook) => {
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
		const activeItemIndex = selectableItems.value.findIndex((item) => getElementId(item?.deref()) === activeItemId.value);
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
		if (item?.scrollIntoView) item?.scrollIntoView({ block: "center" });
	}
	async function setActiveItemIndex(index) {
		await refreshSelectableItems();
		setActiveItem(selectableItems.value[index]?.deref());
	}
	function attachKeydownEvent() {
		document.addEventListener("keydown", onKeyDown, { capture: true });
	}
	function detachKeydownEvent() {
		cleanupSelectableItems();
		document.removeEventListener("keydown", onKeyDown, { capture: true });
	}
	function registerKeyHook(name, hook) {
		hook.keyboardKeys.forEach((keyboardKey) => {
			if (WATCHED_KEYS.includes(keyboardKey)) keysHooks.value = {
				...keysHooks.value,
				[name]: hook
			};
			else throw new Error(`Key ${keyboardKey} is not supported`);
		});
	}
	function cleanupSelectableItems() {
		selectableItems.value = [];
	}
	function getActiveItemIndex() {
		return selectableItems.value.findIndex((item) => getElementId(item?.deref()) === activeItemId.value);
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
});
var __virtual_node_popularity_data_default = [
	{
		"id": "@n8n/n8n-nodes-langchain.chatTrigger",
		"popularity": .957
	},
	{
		"id": "n8n-nodes-base.httpRequest",
		"popularity": .985
	},
	{
		"id": "n8n-nodes-base.code",
		"popularity": 1
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryBufferWindow",
		"popularity": .944
	},
	{
		"id": "n8n-nodes-base.webhook",
		"popularity": .942
	},
	{
		"id": "n8n-nodes-base.set",
		"popularity": .978
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
		"popularity": .948
	},
	{
		"id": "n8n-nodes-base.scheduleTrigger",
		"popularity": .91
	},
	{
		"id": "n8n-nodes-base.if",
		"popularity": .95
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGoogleGemini",
		"popularity": .914
	},
	{
		"id": "@n8n/n8n-nodes-langchain.openAi",
		"popularity": .903
	},
	{
		"id": "n8n-nodes-base.gmail",
		"popularity": .903
	},
	{
		"id": "n8n-nodes-base.noOp",
		"popularity": .908
	},
	{
		"id": "n8n-nodes-base.formTrigger",
		"popularity": .869
	},
	{
		"id": "n8n-nodes-base.merge",
		"popularity": .897
	},
	{
		"id": "n8n-nodes-base.telegram",
		"popularity": .907
	},
	{
		"id": "n8n-nodes-base.telegramTrigger",
		"popularity": .876
	},
	{
		"id": "n8n-nodes-base.switch",
		"popularity": .875
	},
	{
		"id": "n8n-nodes-base.splitInBatches",
		"popularity": .884
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainLlm",
		"popularity": .859
	},
	{
		"id": "n8n-nodes-base.wait",
		"popularity": .864
	},
	{
		"id": "@n8n/n8n-nodes-langchain.googleGemini",
		"popularity": .854
	},
	{
		"id": "n8n-nodes-base.splitOut",
		"popularity": .861
	},
	{
		"id": "n8n-nodes-base.googleDrive",
		"popularity": .874
	},
	{
		"id": "n8n-nodes-base.respondToWebhook",
		"popularity": .851
	},
	{
		"id": "n8n-nodes-base.filter",
		"popularity": .846
	},
	{
		"id": "n8n-nodes-base.extractFromFile",
		"popularity": .839
	},
	{
		"id": "n8n-nodes-base.googleSheetsTool",
		"popularity": .858
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserStructured",
		"popularity": .842
	},
	{
		"id": "n8n-nodes-base.httpRequestTool",
		"popularity": .826
	},
	{
		"id": "n8n-nodes-base.aggregate",
		"popularity": .834
	},
	{
		"id": "n8n-nodes-base.convertToFile",
		"popularity": .816
	},
	{
		"id": "n8n-nodes-base.googleCalendarTool",
		"popularity": .84
	},
	{
		"id": "n8n-nodes-base.gmailTrigger",
		"popularity": .796
	},
	{
		"id": "n8n-nodes-base.dataTable",
		"popularity": .857
	},
	{
		"id": "n8n-nodes-base.gmailTool",
		"popularity": .807
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWorkflow",
		"popularity": .812
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatDeepSeek",
		"popularity": .801
	},
	{
		"id": "n8n-nodes-base.whatsAppTrigger",
		"popularity": .795
	},
	{
		"id": "n8n-nodes-base.whatsApp",
		"popularity": .81
	},
	{
		"id": "n8n-nodes-base.readWriteFile",
		"popularity": .808
	},
	{
		"id": "n8n-nodes-base.executeWorkflowTrigger",
		"popularity": .805
	},
	{
		"id": "n8n-nodes-base.emailSend",
		"popularity": .783
	},
	{
		"id": "@n8n/n8n-nodes-langchain.mcpClientTool",
		"popularity": .795
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatOllama",
		"popularity": .807
	},
	{
		"id": "n8n-nodes-base.googleSheetsTrigger",
		"popularity": .786
	},
	{
		"id": "n8n-nodes-base.executeWorkflow",
		"popularity": .81
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAnthropic",
		"popularity": .777
	},
	{
		"id": "@n8n/n8n-nodes-langchain.informationExtractor",
		"popularity": .761
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryPostgresChat",
		"popularity": .773
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolCode",
		"popularity": .76
	},
	{
		"id": "@n8n/n8n-nodes-langchain.agentTool",
		"popularity": .769
	},
	{
		"id": "n8n-nodes-base.executeCommand",
		"popularity": .784
	},
	{
		"id": "n8n-nodes-base.html",
		"popularity": .769
	},
	{
		"id": "n8n-nodes-base.limit",
		"popularity": .776
	},
	{
		"id": "n8n-nodes-base.slack",
		"popularity": .781
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chat",
		"popularity": .762
	},
	{
		"id": "n8n-nodes-base.googleDriveTrigger",
		"popularity": .762
	},
	{
		"id": "n8n-nodes-base.postgres",
		"popularity": .82
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsOpenAi",
		"popularity": .783
	},
	{
		"id": "@n8n/n8n-nodes-langchain.mcpTrigger",
		"popularity": .753
	},
	{
		"id": "n8n-nodes-base.googleDocs",
		"popularity": .771
	},
	{
		"id": "n8n-nodes-base.supabase",
		"popularity": .811
	},
	{
		"id": "n8n-nodes-base.rssFeedRead",
		"popularity": .763
	},
	{
		"id": "n8n-nodes-base.googleCalendar",
		"popularity": .762
	},
	{
		"id": "n8n-nodes-base.airtable",
		"popularity": .803
	},
	{
		"id": "n8n-nodes-base.form",
		"popularity": .748
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolCalculator",
		"popularity": .721
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textClassifier",
		"popularity": .725
	},
	{
		"id": "n8n-nodes-base.discord",
		"popularity": .753
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGroq",
		"popularity": .759
	},
	{
		"id": "n8n-nodes-base.microsoftOutlook",
		"popularity": .75
	},
	{
		"id": "n8n-nodes-base.microsoftExcel",
		"popularity": .741
	},
	{
		"id": "n8n-nodes-base.emailReadImap",
		"popularity": .717
	},
	{
		"id": "n8n-nodes-base.aiTransform",
		"popularity": .709
	},
	{
		"id": "@n8n/n8n-nodes-langchain.agent",
		"popularity": .986
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolThink",
		"popularity": .727
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserAutofixing",
		"popularity": .706
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreInMemory",
		"popularity": .731
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreSupabase",
		"popularity": .754
	},
	{
		"id": "n8n-nodes-base.notion",
		"popularity": .773
	},
	{
		"id": "n8n-nodes-base.dateTime",
		"popularity": .73
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolSerpApi",
		"popularity": .722
	},
	{
		"id": "n8n-nodes-base.markdown",
		"popularity": .699
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStorePinecone",
		"popularity": .749
	},
	{
		"id": "n8n-nodes-base.googleDriveTool",
		"popularity": .712
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryMongoDbChat",
		"popularity": .686
	},
	{
		"id": "n8n-nodes-base.errorTrigger",
		"popularity": .684
	},
	{
		"id": "n8n-nodes-base.youTube",
		"popularity": .706
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter",
		"popularity": .695
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryRedisChat",
		"popularity": .7
	},
	{
		"id": "n8n-nodes-base.telegramTool",
		"popularity": .693
	},
	{
		"id": "n8n-nodes-base.stopAndError",
		"popularity": .692
	},
	{
		"id": "n8n-nodes-base.executionData",
		"popularity": .678
	},
	{
		"id": "n8n-nodes-base.googleDocsTool",
		"popularity": .701
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsGoogleGemini",
		"popularity": .718
	},
	{
		"id": "n8n-nodes-base.mySql",
		"popularity": .74
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWikipedia",
		"popularity": .682
	},
	{
		"id": "@n8n/n8n-nodes-langchain.anthropic",
		"popularity": .684
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAzureOpenAi",
		"popularity": .695
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainRetrievalQa",
		"popularity": .659
	},
	{
		"id": "n8n-nodes-base.facebookGraphApi",
		"popularity": .7
	},
	{
		"id": "n8n-nodes-base.dataTableTool",
		"popularity": .708
	},
	{
		"id": "@n8n/n8n-nodes-langchain.modelSelector",
		"popularity": .662
	},
	{
		"id": "n8n-nodes-base.microsoftOutlookTrigger",
		"popularity": .677
	},
	{
		"id": "n8n-nodes-base.perplexity",
		"popularity": .67
	},
	{
		"id": "n8n-nodes-base.rssFeedReadTrigger",
		"popularity": .677
	},
	{
		"id": "n8n-nodes-base.removeDuplicates",
		"popularity": .684
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryManager",
		"popularity": .677
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatXAiGrok",
		"popularity": .672
	},
	{
		"id": "n8n-nodes-base.whatsAppTool",
		"popularity": .663
	},
	{
		"id": "n8n-nodes-base.supabaseTool",
		"popularity": .698
	},
	{
		"id": "n8n-nodes-base.facebookTrigger",
		"popularity": .658
	},
	{
		"id": "n8n-nodes-base.redis",
		"popularity": .735
	},
	{
		"id": "n8n-nodes-base.sort",
		"popularity": .661
	},
	{
		"id": "n8n-nodes-base.slackTrigger",
		"popularity": .69
	},
	{
		"id": "n8n-nodes-base.microsoftTeams",
		"popularity": .681
	},
	{
		"id": "@apify/n8n-nodes-apify.apify",
		"popularity": .692
	},
	{
		"id": "n8n-nodes-base.linkedIn",
		"popularity": .665
	},
	{
		"id": "n8n-nodes-base.twilio",
		"popularity": .665
	},
	{
		"id": "n8n-nodes-base.n8n",
		"popularity": .665
	},
	{
		"id": "n8n-nodes-base.evaluationTrigger",
		"popularity": .64
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStorePGVector",
		"popularity": .681
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainSummarization",
		"popularity": .643
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGoogleVertex",
		"popularity": .655
	},
	{
		"id": "n8n-nodes-base.localFileTrigger",
		"popularity": .65
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsOllama",
		"popularity": .667
	},
	{
		"id": "n8n-nodes-base.perplexityTool",
		"popularity": .656
	},
	{
		"id": "n8n-nodes-base.xml",
		"popularity": .652
	},
	{
		"id": "n8n-nodes-base.openWeatherMap",
		"popularity": .648
	},
	{
		"id": "n8n-nodes-base.dateTimeTool",
		"popularity": .652
	},
	{
		"id": "n8n-nodes-whatsable.whatsAble",
		"popularity": .631
	},
	{
		"id": "n8n-nodes-base.airtableTool",
		"popularity": .678
	},
	{
		"id": "n8n-nodes-base.editImage",
		"popularity": .66
	},
	{
		"id": "@n8n/n8n-nodes-langchain.sentimentAnalysis",
		"popularity": .636
	},
	{
		"id": "n8n-nodes-base.compareDatasets",
		"popularity": .634
	},
	{
		"id": "n8n-nodes-base.openWeatherMapTool",
		"popularity": .64
	},
	{
		"id": "n8n-nodes-base.ssh",
		"popularity": .664
	},
	{
		"id": "n8n-nodes-base.postgresTool",
		"popularity": .671
	},
	{
		"id": "n8n-nodes-base.twitter",
		"popularity": .648
	},
	{
		"id": "n8n-nodes-base.crypto",
		"popularity": .632
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreQdrant",
		"popularity": .676
	},
	{
		"id": "n8n-nodes-base.microsoftOneDrive",
		"popularity": .686
	},
	{
		"id": "n8n-nodes-base.microsoftExcelTool",
		"popularity": .633
	},
	{
		"id": "n8n-nodes-base.airtableTrigger",
		"popularity": .632
	},
	{
		"id": "n8n-nodes-base.notionTool",
		"popularity": .66
	},
	{
		"id": "n8n-nodes-base.microsoftOutlookTool",
		"popularity": .655
	},
	{
		"id": "n8n-nodes-base.evaluation",
		"popularity": .637
	},
	{
		"id": "n8n-nodes-base.wordpress",
		"popularity": .648
	},
	{
		"id": "n8n-nodes-base.summarize",
		"popularity": .722
	},
	{
		"id": "n8n-nodes-base.jira",
		"popularity": .655
	},
	{
		"id": "n8n-nodes-base.ftp",
		"popularity": .63
	},
	{
		"id": "n8n-nodes-base.microsoftSharePoint",
		"popularity": .661
	},
	{
		"id": "@mendable/n8n-nodes-firecrawl.firecrawl",
		"popularity": .643
	},
	{
		"id": "n8n-nodes-base.debugHelper",
		"popularity": .603
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmOpenHuggingFaceInference",
		"popularity": .622
	},
	{
		"id": "n8n-nodes-base.line",
		"popularity": .588
	},
	{
		"id": "n8n-nodes-base.github",
		"popularity": .634
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverVectorStore",
		"popularity": .603
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAwsBedrock",
		"popularity": .621
	},
	{
		"id": "n8n-nodes-base.hubspot",
		"popularity": .661
	},
	{
		"id": "n8n-nodes-base.notionTrigger",
		"popularity": .612
	},
	{
		"id": "n8n-nodes-base.hackerNews",
		"popularity": .592
	},
	{
		"id": "n8n-nodes-base.googleChat",
		"popularity": .621
	},
	{
		"id": "n8n-nodes-base.googleCalendarTrigger",
		"popularity": .608
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter",
		"popularity": .599
	},
	{
		"id": "n8n-nodes-base.mongoDb",
		"popularity": .651
	},
	{
		"id": "n8n-nodes-cronlytic.cronlyticTrigger",
		"popularity": .581
	},
	{
		"id": "n8n-nodes-serpapi.serpApi",
		"popularity": .587
	},
	{
		"id": "n8n-nodes-base.n8nTrainingCustomerMessenger",
		"popularity": .564
	},
	{
		"id": "n8n-nodes-base.awsS3",
		"popularity": .602
	},
	{
		"id": "n8n-nodes-base.rssFeedReadTool",
		"popularity": .588
	},
	{
		"id": "n8n-nodes-base.clickUp",
		"popularity": .652
	},
	{
		"id": "@blotato/n8n-nodes-blotato.blotato",
		"popularity": .623
	},
	{
		"id": "n8n-nodes-base.nasa",
		"popularity": .562
	},
	{
		"id": "n8n-nodes-base.filemaker",
		"popularity": .556
	},
	{
		"id": "n8n-nodes-base.calTrigger",
		"popularity": .57
	},
	{
		"id": "n8n-nodes-base.s3",
		"popularity": .605
	},
	{
		"id": "n8n-nodes-base.postgresTrigger",
		"popularity": .567
	},
	{
		"id": "n8n-nodes-base.executeCommandTool",
		"popularity": .57
	},
	{
		"id": "n8n-nodes-base.n8nTrigger",
		"popularity": .561
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryXata",
		"popularity": .551
	},
	{
		"id": "n8n-nodes-base.googleSlides",
		"popularity": .587
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterTokenSplitter",
		"popularity": .558
	},
	{
		"id": "n8n-nodes-base.discordTool",
		"popularity": .576
	},
	{
		"id": "n8n-nodes-base.githubTrigger",
		"popularity": .569
	},
	{
		"id": "n8n-nodes-base.quickChart",
		"popularity": .562
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverContextualCompression",
		"popularity": .534
	},
	{
		"id": "n8n-nodes-base.jiraTool",
		"popularity": .585
	},
	{
		"id": "n8n-nodes-base.homeAssistant",
		"popularity": .584
	},
	{
		"id": "n8n-nodes-base.nocoDb",
		"popularity": .639
	},
	{
		"id": "@n8n/n8n-nodes-langchain.code",
		"popularity": .552
	},
	{
		"id": "@searchapi/n8n-nodes-searchapi.searchApi",
		"popularity": .543
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsHuggingFaceInference",
		"popularity": .573
	},
	{
		"id": "n8n-nodes-base.githubTool",
		"popularity": .567
	},
	{
		"id": "n8n-nodes-base.salesforce",
		"popularity": .618
	},
	{
		"id": "n8n-nodes-base.shopify",
		"popularity": .6
	},
	{
		"id": "@brave/n8n-nodes-brave-search.braveSearch",
		"popularity": .541
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatCohere",
		"popularity": .551
	},
	{
		"id": "n8n-nodes-pdfco.PDFco Api",
		"popularity": .582
	},
	{
		"id": "n8n-nodes-base.emailReadImapTool",
		"popularity": .538
	},
	{
		"id": "n8n-nodes-base.odoo",
		"popularity": .609
	},
	{
		"id": "n8n-nodes-base.actionNetwork",
		"popularity": .532
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreMongoDBAtlas",
		"popularity": .556
	},
	{
		"id": "n8n-nodes-aiscraper.aiScraper",
		"popularity": .54
	},
	{
		"id": "n8n-nodes-base.googleContacts",
		"popularity": .555
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsCohere",
		"popularity": .552
	},
	{
		"id": "n8n-nodes-base.shopifyTrigger",
		"popularity": .557
	},
	{
		"id": "n8n-nodes-base.googleBigQuery",
		"popularity": .58
	},
	{
		"id": "n8n-nodes-base.sseTrigger",
		"popularity": .526
	},
	{
		"id": "n8n-nodes-base.baserow",
		"popularity": .617
	},
	{
		"id": "n8n-nodes-base.jiraTrigger",
		"popularity": .55
	},
	{
		"id": "n8n-nodes-base.postBin",
		"popularity": .564
	},
	{
		"id": "n8n-nodes-base.facebookGraphApiTool",
		"popularity": .532
	},
	{
		"id": "n8n-nodes-base.trello",
		"popularity": .605
	},
	{
		"id": "n8n-nodes-base.highLevel",
		"popularity": .588
	},
	{
		"id": "n8n-nodes-base.hubspotTrigger",
		"popularity": .562
	},
	{
		"id": "n8n-nodes-base.googleTranslate",
		"popularity": .527
	},
	{
		"id": "@n8n/n8n-nodes-langchain.documentGithubLoader",
		"popularity": .516
	},
	{
		"id": "n8n-nodes-base.microsoftTeamsTool",
		"popularity": .536
	},
	{
		"id": "n8n-nodes-base.googleContactsTool",
		"popularity": .556
	},
	{
		"id": "n8n-nodes-base.googleTasks",
		"popularity": .553
	},
	{
		"id": "n8n-nodes-base.formIoTrigger",
		"popularity": .504
	},
	{
		"id": "n8n-nodes-base.microsoftSql",
		"popularity": .662
	},
	{
		"id": "n8n-nodes-base.mySqlTool",
		"popularity": .625
	},
	{
		"id": "n8n-nodes-base.linkedInTool",
		"popularity": .599
	},
	{
		"id": "@n8n/n8n-nodes-langchain.rerankerCohere",
		"popularity": .601
	},
	{
		"id": "n8n-nodes-base.compression",
		"popularity": .597
	},
	{
		"id": "n8n-nodes-base.renameKeys",
		"popularity": .594
	},
	{
		"id": "n8n-nodes-base.youTubeTool",
		"popularity": .588
	},
	{
		"id": "@tavily/n8n-nodes-tavily.tavily",
		"popularity": .599
	},
	{
		"id": "n8n-nodes-base.slackTool",
		"popularity": .595
	},
	{
		"id": "n8n-nodes-base.reddit",
		"popularity": .618
	},
	{
		"id": "n8n-nodes-base.twilioTrigger",
		"popularity": .587
	},
	{
		"id": "n8n-nodes-base.microsoftTeamsTrigger",
		"popularity": .596
	},
	{
		"id": "n8n-nodes-base.mistralAi",
		"popularity": .587
	},
	{
		"id": "n8n-nodes-base.dropbox",
		"popularity": .612
	},
	{
		"id": "@aotoki/n8n-nodes-line-messaging.lineMessaging",
		"popularity": .563
	},
	{
		"id": "n8n-nodes-base.philipsHueTool",
		"popularity": .51
	},
	{
		"id": "n8n-nodes-base.zendesk",
		"popularity": .543
	},
	{
		"id": "n8n-nodes-base.twilioTool",
		"popularity": .514
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsAzureOpenAi",
		"popularity": .528
	},
	{
		"id": "n8n-nodes-powerbi.powerBi",
		"popularity": .524
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreZep",
		"popularity": .485
	},
	{
		"id": "n8n-nodes-base.zoom",
		"popularity": .499
	},
	{
		"id": "n8n-nodes-base.redditTool",
		"popularity": .489
	},
	{
		"id": "n8n-nodes-base.redisTrigger",
		"popularity": .472
	},
	{
		"id": "n8n-nodes-base.wooCommerceTrigger",
		"popularity": .496
	},
	{
		"id": "n8n-nodes-base.snowflake",
		"popularity": .517
	},
	{
		"id": "n8n-nodes-base.rabbitmqTrigger",
		"popularity": .491
	},
	{
		"id": "n8n-nodes-base.totp",
		"popularity": .467
	},
	{
		"id": "n8n-nodes-base.salesforceTrigger",
		"popularity": .498
	},
	{
		"id": "n8n-nodes-browserflow.browserflow",
		"popularity": .486
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfile",
		"popularity": .497
	},
	{
		"id": "n8n-nodes-base.awsLambda",
		"popularity": .484
	},
	{
		"id": "n8n-nodes-base.quickbooks",
		"popularity": .528
	},
	{
		"id": "n8n-nodes-base.coinGecko",
		"popularity": .482
	},
	{
		"id": "n8n-nodes-base.trelloTrigger",
		"popularity": .491
	},
	{
		"id": "n8n-nodes-base.formstackTrigger",
		"popularity": .46
	},
	{
		"id": "n8n-nodes-scrapegraphai.scrapegraphAi",
		"popularity": .465
	},
	{
		"id": "n8n-nodes-base.rabbitmq",
		"popularity": .498
	},
	{
		"id": "n8n-nodes-base.azureStorage",
		"popularity": .503
	},
	{
		"id": "n8n-nodes-base.googleSlidesTool",
		"popularity": .464
	},
	{
		"id": "n8n-nodes-base.airtopTool",
		"popularity": .514
	},
	{
		"id": "n8n-nodes-aimlapi.aimlApi",
		"popularity": .439
	},
	{
		"id": "n8n-nodes-base.microsoftToDo",
		"popularity": .484
	},
	{
		"id": "n8n-nodes-base.bitbucketTrigger",
		"popularity": .453
	},
	{
		"id": "n8n-nodes-base.actionNetworkTool",
		"popularity": .439
	},
	{
		"id": "n8n-nodes-base.jinaAiTool",
		"popularity": .432
	},
	{
		"id": "n8n-nodes-base.pushover",
		"popularity": .463
	},
	{
		"id": "n8n-nodes-base.trelloTool",
		"popularity": .487
	},
	{
		"id": "n8n-nodes-base.googleCloudNaturalLanguageTool",
		"popularity": .408
	},
	{
		"id": "n8n-nodes-base.box",
		"popularity": .466
	},
	{
		"id": "n8n-nodes-base.awsSes",
		"popularity": .446
	},
	{
		"id": "n8n-nodes-base.s3Tool",
		"popularity": .409
	},
	{
		"id": "n8n-nodes-base.pipedriveTool",
		"popularity": .436
	},
	{
		"id": "n8n-nodes-base.zendeskTrigger",
		"popularity": .435
	},
	{
		"id": "n8n-nodes-base.stripeTool",
		"popularity": .418
	},
	{
		"id": "n8n-nodes-base.strava",
		"popularity": .442
	},
	{
		"id": "n8n-nodes-base.mondayComTool",
		"popularity": .449
	},
	{
		"id": "n8n-nodes-base.stravaTrigger",
		"popularity": .417
	},
	{
		"id": "@2chat/n8n-nodes-twochat.twoChat",
		"popularity": .41
	},
	{
		"id": "n8n-nodes-base.rocketchat",
		"popularity": .425
	},
	{
		"id": "n8n-nodes-base.eventbriteTrigger",
		"popularity": .404
	},
	{
		"id": "n8n-nodes-base.seaTable",
		"popularity": .497
	},
	{
		"id": "n8n-nodes-base.matrix",
		"popularity": .437
	},
	{
		"id": "n8n-nodes-base.vonage",
		"popularity": .418
	},
	{
		"id": "n8n-nodes-base.payPal",
		"popularity": .41
	},
	{
		"id": "n8n-nodes-base.microsoftGraphSecurityTool",
		"popularity": .398
	},
	{
		"id": "n8n-nodes-base.awsTextractTool",
		"popularity": .391
	},
	{
		"id": "n8n-nodes-base.filemakerTool",
		"popularity": .387
	},
	{
		"id": "n8n-nodes-base.awsTranscribeTool",
		"popularity": .396
	},
	{
		"id": "n8n-nodes-base.linearTrigger",
		"popularity": .403
	},
	{
		"id": "n8n-nodes-base.amqpTrigger",
		"popularity": .378
	},
	{
		"id": "n8n-nodes-base.jenkins",
		"popularity": .408
	},
	{
		"id": "n8n-nodes-base.graphqlTool",
		"popularity": .398
	},
	{
		"id": "n8n-nodes-base.mailjet",
		"popularity": .408
	},
	{
		"id": "n8n-nodes-base.philipsHue",
		"popularity": .415
	},
	{
		"id": "n8n-nodes-base.dhlTool",
		"popularity": .379
	},
	{
		"id": "n8n-nodes-base.grist",
		"popularity": .431
	},
	{
		"id": "n8n-nodes-base.emailSendTool",
		"popularity": .596
	},
	{
		"id": "n8n-nodes-base.wooCommerce",
		"popularity": .574
	},
	{
		"id": "n8n-nodes-base.googleTasksTool",
		"popularity": .561
	},
	{
		"id": "n8n-nodes-base.graphql",
		"popularity": .539
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsGoogleVertex",
		"popularity": .525
	},
	{
		"id": "n8n-nodes-base.microsoftSqlTool",
		"popularity": .555
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverWorkflow",
		"popularity": .507
	},
	{
		"id": "n8n-nodes-base.wordpressTool",
		"popularity": .523
	},
	{
		"id": "n8n-nodes-base.sendInBlue",
		"popularity": .558
	},
	{
		"id": "n8n-nodes-base.mondayCom",
		"popularity": .608
	},
	{
		"id": "n8n-nodes-base.googleAds",
		"popularity": .529
	},
	{
		"id": "n8n-nodes-pdf4me.PDF4me",
		"popularity": .526
	},
	{
		"id": "n8n-nodes-base.microsoftOneDriveTool",
		"popularity": .531
	},
	{
		"id": "n8n-nodes-base.asana",
		"popularity": .581
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreMilvus",
		"popularity": .531
	},
	{
		"id": "n8n-nodes-base.nextCloud",
		"popularity": .57
	},
	{
		"id": "n8n-nodes-base.googleCloudStorage",
		"popularity": .55
	},
	{
		"id": "n8n-nodes-base.spotify",
		"popularity": .557
	},
	{
		"id": "n8n-nodes-base.googleAnalytics",
		"popularity": .523
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolSearXng",
		"popularity": .517
	},
	{
		"id": "n8n-nodes-base.shopifyTool",
		"popularity": .541
	},
	{
		"id": "n8n-nodes-base.zohoCrm",
		"popularity": .568
	},
	{
		"id": "n8n-nodes-base.microsoftSharePointTool",
		"popularity": .524
	},
	{
		"id": "n8n-nodes-base.hackerNewsTool",
		"popularity": .498
	},
	{
		"id": "n8n-nodes-base.airtop",
		"popularity": .587
	},
	{
		"id": "n8n-nodes-base.redisTool",
		"popularity": .517
	},
	{
		"id": "n8n-nodes-base.pipedrive",
		"popularity": .607
	},
	{
		"id": "n8n-nodes-base.mongoDbTool",
		"popularity": .546
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatVercelAiGateway",
		"popularity": .501
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverMultiQuery",
		"popularity": .499
	},
	{
		"id": "n8n-nodes-base.jwt",
		"popularity": .516
	},
	{
		"id": "n8n-nodes-base.googleChatTool",
		"popularity": .493
	},
	{
		"id": "n8n-nodes-base.homeAssistantTool",
		"popularity": .532
	},
	{
		"id": "n8n-nodes-htmlcsstoimage.htmlCssToImage",
		"popularity": .498
	},
	{
		"id": "n8n-nodes-base.mqttTrigger",
		"popularity": .514
	},
	{
		"id": "n8n-nodes-base.twitterTool",
		"popularity": .502
	},
	{
		"id": "n8n-nodes-upload-post.uploadPost",
		"popularity": .521
	},
	{
		"id": "n8n-nodes-pdfvector.pdfVector",
		"popularity": .492
	},
	{
		"id": "n8n-nodes-base.dhl",
		"popularity": .483
	},
	{
		"id": "n8n-nodes-cloudinary.cloudinary",
		"popularity": .515
	},
	{
		"id": "n8n-nodes-base.togglTrigger",
		"popularity": .488
	},
	{
		"id": "n8n-nodes-base.jotFormTrigger",
		"popularity": .518
	},
	{
		"id": "n8n-nodes-base.jinaAi",
		"popularity": .502
	},
	{
		"id": "n8n-nodes-base.quickbooksTool",
		"popularity": .496
	},
	{
		"id": "n8n-nodes-base.stripeTrigger",
		"popularity": .511
	},
	{
		"id": "n8n-nodes-base.mqtt",
		"popularity": .506
	},
	{
		"id": "n8n-nodes-base.git",
		"popularity": .521
	},
	{
		"id": "n8n-nodes-base.googleTranslateTool",
		"popularity": .483
	},
	{
		"id": "n8n-nodes-base.gitlab",
		"popularity": .515
	},
	{
		"id": "n8n-nodes-base.googleFirebaseCloudFirestore",
		"popularity": .559
	},
	{
		"id": "@cloudconvert/n8n-nodes-cloudconvert.cloudConvert",
		"popularity": .503
	},
	{
		"id": "n8n-nodes-base.todoist",
		"popularity": .539
	},
	{
		"id": "n8n-nodes-base.deepL",
		"popularity": .487
	},
	{
		"id": "n8n-nodes-base.clickUpTrigger",
		"popularity": .539
	},
	{
		"id": "n8n-nodes-base.sendGrid",
		"popularity": .508
	},
	{
		"id": "n8n-nodes-base.activeCampaign",
		"popularity": .529
	},
	{
		"id": "n8n-nodes-base.hubspotTool",
		"popularity": .516
	},
	{
		"id": "n8n-nodes-base.stripe",
		"popularity": .524
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsMistralCloud",
		"popularity": .514
	},
	{
		"id": "n8n-nodes-base.mailgun",
		"popularity": .486
	},
	{
		"id": "n8n-nodes-base.gitlabTrigger",
		"popularity": .487
	},
	{
		"id": "@nskha/n8n-nodes-scrappey.scrappey",
		"popularity": .468
	},
	{
		"id": "n8n-nodes-base.spotifyTool",
		"popularity": .52
	},
	{
		"id": "n8n-nodes-base.webflow",
		"popularity": .481
	},
	{
		"id": "n8n-nodes-base.mattermost",
		"popularity": .498
	},
	{
		"id": "n8n-nodes-base.odooTool",
		"popularity": .498
	},
	{
		"id": "n8n-nodes-base.todoistTool",
		"popularity": .509
	},
	{
		"id": "n8n-nodes-base.wooCommerceTool",
		"popularity": .498
	},
	{
		"id": "n8n-nodes-base.figmaTrigger",
		"popularity": .455
	},
	{
		"id": "n8n-nodes-scrape-creators.scrapeCreators",
		"popularity": .49
	},
	{
		"id": "n8n-nodes-instantly.instantly",
		"popularity": .505
	},
	{
		"id": "n8n-nodes-base.googleAdsTool",
		"popularity": .442
	},
	{
		"id": "n8n-nodes-base.cryptoTool",
		"popularity": .44
	},
	{
		"id": "n8n-nodes-base.phantombuster",
		"popularity": .499
	},
	{
		"id": "n8n-nodes-base.baserowTool",
		"popularity": .488
	},
	{
		"id": "n8n-nodes-base.elasticsearch",
		"popularity": .469
	},
	{
		"id": "n8n-nodes-base.calendlyTrigger",
		"popularity": .58
	},
	{
		"id": "n8n-nodes-base.asanaTrigger",
		"popularity": .478
	},
	{
		"id": "n8n-nodes-autocalls.autocalls",
		"popularity": .439
	},
	{
		"id": "n8n-nodes-base.kafka",
		"popularity": .453
	},
	{
		"id": "n8n-nodes-base.hunter",
		"popularity": .476
	},
	{
		"id": "n8n-nodes-base.highLevelTool",
		"popularity": .483
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreWeaviate",
		"popularity": .477
	},
	{
		"id": "n8n-nodes-base.awsTextract",
		"popularity": .45
	},
	{
		"id": "n8n-nodes-base.mistralAiTool",
		"popularity": .451
	},
	{
		"id": "n8n-nodes-base.salesforceTool",
		"popularity": .487
	},
	{
		"id": "n8n-nodes-base.microsoftEntra",
		"popularity": .48
	},
	{
		"id": "n8n-nodes-pdforge.pdforge",
		"popularity": .437
	},
	{
		"id": "n8n-nodes-base.nocoDbTool",
		"popularity": .496
	},
	{
		"id": "n8n-nodes-base.elasticsearchTool",
		"popularity": .449
	},
	{
		"id": "n8n-nodes-base.zohoCrmTool",
		"popularity": .48
	},
	{
		"id": "n8n-nodes-base.grafana",
		"popularity": .45
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmCohere",
		"popularity": .436
	},
	{
		"id": "n8n-nodes-base.dropboxTool",
		"popularity": .453
	},
	{
		"id": "n8n-nodes-base.mailchimp",
		"popularity": .482
	},
	{
		"id": "n8n-nodes-base.kafkaTrigger",
		"popularity": .452
	},
	{
		"id": "n8n-nodes-base.gitlabTool",
		"popularity": .469
	},
	{
		"id": "n8n-nodes-base.ldap",
		"popularity": .46
	},
	{
		"id": "n8n-nodes-base.googleBigQueryTool",
		"popularity": .454
	},
	{
		"id": "n8n-nodes-base.urlScanIo",
		"popularity": .443
	},
	{
		"id": "n8n-nodes-base.adalo",
		"popularity": .427
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfileTrigger",
		"popularity": .462
	},
	{
		"id": "n8n-nodes-base.coinGeckoTool",
		"popularity": .458
	},
	{
		"id": "n8n-nodes-documentero.documentero",
		"popularity": .449
	},
	{
		"id": "n8n-nodes-base.deepLTool",
		"popularity": .428
	},
	{
		"id": "n8n-nodes-base.quickChartTool",
		"popularity": .448
	},
	{
		"id": "n8n-nodes-base.metabase",
		"popularity": .463
	},
	{
		"id": "n8n-nodes-base.apiTemplateIo",
		"popularity": .441
	},
	{
		"id": "n8n-nodes-base.linear",
		"popularity": .481
	},
	{
		"id": "n8n-nodes-base.serviceNow",
		"popularity": .473
	},
	{
		"id": "n8n-nodes-base.asanaTool",
		"popularity": .468
	},
	{
		"id": "n8n-nodes-base.xero",
		"popularity": .474
	},
	{
		"id": "n8n-nodes-base.mailcheck",
		"popularity": .426
	},
	{
		"id": "n8n-nodes-base.googleFirebaseRealtimeDatabase",
		"popularity": .429
	},
	{
		"id": "@apify/n8n-nodes-apify.apifyTrigger",
		"popularity": .436
	},
	{
		"id": "n8n-nodes-base.acuitySchedulingTrigger",
		"popularity": .421
	},
	{
		"id": "n8n-nodes-base.awsS3Tool",
		"popularity": .439
	},
	{
		"id": "n8n-nodes-base.webflowTool",
		"popularity": .421
	},
	{
		"id": "n8n-nodes-base.nextCloudTool",
		"popularity": .443
	},
	{
		"id": "@brightdata/n8n-nodes-brightdata.brightData",
		"popularity": .468
	},
	{
		"id": "n8n-nodes-postiz.postiz",
		"popularity": .501
	},
	{
		"id": "n8n-nodes-base.googleFirebaseCloudFirestoreTool",
		"popularity": .445
	},
	{
		"id": "n8n-nodes-base.pipedriveTrigger",
		"popularity": .446
	},
	{
		"id": "n8n-nodes-base.gSuiteAdmin",
		"popularity": .476
	},
	{
		"id": "n8n-nodes-base.cloudflareTool",
		"popularity": .407
	},
	{
		"id": "n8n-nodes-base.webflowTrigger",
		"popularity": .439
	},
	{
		"id": "n8n-nodes-base.awsTranscribe",
		"popularity": .428
	},
	{
		"id": "n8n-nodes-base.lineTool",
		"popularity": .423
	},
	{
		"id": "n8n-nodes-base.agileCrm",
		"popularity": .41
	},
	{
		"id": "n8n-nodes-base.bubble",
		"popularity": .493
	},
	{
		"id": "n8n-nodes-base.microsoftToDoTool",
		"popularity": .447
	},
	{
		"id": "n8n-nodes-base.affinity",
		"popularity": .423
	},
	{
		"id": "n8n-nodes-base.awsDynamoDb",
		"popularity": .458
	},
	{
		"id": "n8n-nodes-base.googleCloudStorageTool",
		"popularity": .407
	},
	{
		"id": "n8n-nodes-base.gitTool",
		"popularity": .42
	},
	{
		"id": "n8n-nodes-base.activeCampaignTrigger",
		"popularity": .404
	},
	{
		"id": "n8n-nodes-base.wise",
		"popularity": .37
	},
	{
		"id": "n8n-nodes-base.oneSimpleApiTool",
		"popularity": .407
	},
	{
		"id": "n8n-nodes-base.erpNext",
		"popularity": .465
	},
	{
		"id": "n8n-nodes-base.zoomTool",
		"popularity": .427
	},
	{
		"id": "n8n-nodes-base.medium",
		"popularity": .41
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfileTool",
		"popularity": .408
	},
	{
		"id": "n8n-nodes-base.sms77",
		"popularity": .395
	},
	{
		"id": "n8n-nodes-base.grafanaTool",
		"popularity": .406
	},
	{
		"id": "n8n-nodes-base.gotify",
		"popularity": .435
	},
	{
		"id": "n8n-nodes-base.cloudflare",
		"popularity": .39
	},
	{
		"id": "n8n-nodes-chat-data.chatData",
		"popularity": .386
	},
	{
		"id": "n8n-nodes-base.awsSnsTrigger",
		"popularity": .365
	},
	{
		"id": "n8n-nodes-base.splunk",
		"popularity": .372
	},
	{
		"id": "n8n-nodes-base.urlScanIoTool",
		"popularity": .327
	},
	{
		"id": "n8n-nodes-base.pushbullet",
		"popularity": .35
	},
	{
		"id": "n8n-nodes-base.marketstack",
		"popularity": .338
	},
	{
		"id": "n8n-nodes-base.messageBird",
		"popularity": .447
	},
	{
		"id": "n8n-nodes-base.googleCloudNaturalLanguage",
		"popularity": .379
	},
	{
		"id": "n8n-nodes-base.activeCampaignTool",
		"popularity": .38
	},
	{
		"id": "n8n-nodes-base.bitwarden",
		"popularity": .389
	},
	{
		"id": "n8n-nodes-base.autopilotTool",
		"popularity": .374
	},
	{
		"id": "n8n-nodes-base.gSuiteAdminTool",
		"popularity": .379
	},
	{
		"id": "n8n-nodes-base.microsoftEntraTool",
		"popularity": .393
	},
	{
		"id": "n8n-nodes-base.zendeskTool",
		"popularity": .403
	},
	{
		"id": "n8n-nodes-base.messageBirdTool",
		"popularity": .374
	},
	{
		"id": "n8n-nodes-base.microsoftDynamicsCrm",
		"popularity": .394
	},
	{
		"id": "n8n-nodes-base.affinityTool",
		"popularity": .363
	},
	{
		"id": "n8n-nodes-supadata.supadata",
		"popularity": .403
	},
	{
		"id": "n8n-nodes-base.mautic",
		"popularity": .445
	},
	{
		"id": "n8n-nodes-base.agileCrmTool",
		"popularity": .355
	},
	{
		"id": "n8n-nodes-base.compressionTool",
		"popularity": .379
	},
	{
		"id": "n8n-nodes-base.convertKitTool",
		"popularity": .361
	},
	{
		"id": "n8n-nodes-base.freshservice",
		"popularity": .413
	},
	{
		"id": "n8n-nodes-base.bitwardenTool",
		"popularity": .378
	},
	{
		"id": "n8n-nodes-mallabe-images.mallabeImages",
		"popularity": .362
	},
	{
		"id": "n8n-nodes-base.metabaseTool",
		"popularity": .402
	},
	{
		"id": "n8n-nodes-base.awsLambdaTool",
		"popularity": .368
	},
	{
		"id": "n8n-nodes-base.coda",
		"popularity": .431
	},
	{
		"id": "n8n-nodes-ticktick.tickTick",
		"popularity": .406
	},
	{
		"id": "n8n-nodes-base.amqp",
		"popularity": .358
	},
	{
		"id": "n8n-nodes-base.zammad",
		"popularity": .427
	},
	{
		"id": "n8n-nodes-base.microsoftGraphSecurity",
		"popularity": .37
	},
	{
		"id": "n8n-nodes-base.mailchimpTool",
		"popularity": .358
	},
	{
		"id": "n8n-nodes-base.serviceNowTool",
		"popularity": .378
	},
	{
		"id": "@langfuse/n8n-nodes-langfuse.langfuse",
		"popularity": .411
	},
	{
		"id": "n8n-nodes-base.payPalTrigger",
		"popularity": .391
	},
	{
		"id": "n8n-nodes-base.getResponseTool",
		"popularity": .354
	},
	{
		"id": "n8n-nodes-base.lemlist",
		"popularity": .421
	},
	{
		"id": "@gotohuman/n8n-nodes-gotohuman.gotoHuman",
		"popularity": .386
	},
	{
		"id": "n8n-nodes-base.customerIoTool",
		"popularity": .354
	},
	{
		"id": "n8n-nodes-base.nasaTool",
		"popularity": .357
	},
	{
		"id": "n8n-nodes-base.stravaTool",
		"popularity": .386
	},
	{
		"id": "n8n-nodes-base.sendInBlueTool",
		"popularity": .371
	},
	{
		"id": "n8n-nodes-base.strapi",
		"popularity": .403
	},
	{
		"id": "n8n-nodes-fillout.filloutTrigger",
		"popularity": .377
	},
	{
		"id": "n8n-nodes-base.clockifyTool",
		"popularity": .364
	},
	{
		"id": "n8n-nodes-craftmypdf.craftMyPdf",
		"popularity": .373
	},
	{
		"id": "n8n-nodes-scrapeless.scrapeless",
		"popularity": .379
	},
	{
		"id": "n8n-nodes-superchat.superchat",
		"popularity": .43
	},
	{
		"id": "n8n-nodes-base.bubbleTool",
		"popularity": .384
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWolframAlpha",
		"popularity": .363
	},
	{
		"id": "n8n-nodes-base.humanticAiTool",
		"popularity": .356
	},
	{
		"id": "n8n-nodes-base.mqttTool",
		"popularity": .358
	},
	{
		"id": "n8n-nodes-base.pushoverTool",
		"popularity": .36
	},
	{
		"id": "n8n-nodes-base.mailerLite",
		"popularity": .41
	},
	{
		"id": "n8n-nodes-base.clockify",
		"popularity": .419
	},
	{
		"id": "n8n-nodes-base.phantombusterTool",
		"popularity": .365
	},
	{
		"id": "n8n-nodes-base.gumroadTrigger",
		"popularity": .373
	},
	{
		"id": "n8n-nodes-base.getResponse",
		"popularity": .352
	},
	{
		"id": "n8n-nodes-base.microsoftDynamicsCrmTool",
		"popularity": .352
	},
	{
		"id": "n8n-nodes-base.intercom",
		"popularity": .378
	},
	{
		"id": "n8n-nodes-base.magento2",
		"popularity": .399
	},
	{
		"id": "n8n-nodes-base.snowflakeTool",
		"popularity": .397
	},
	{
		"id": "n8n-nodes-base.ghost",
		"popularity": .373
	},
	{
		"id": "n8n-nodes-scraping-dog.scrapingDog",
		"popularity": .37
	},
	{
		"id": "n8n-nodes-base.jenkinsTool",
		"popularity": .353
	},
	{
		"id": "n8n-nodes-base.bannerbear",
		"popularity": .379
	},
	{
		"id": "n8n-nodes-base.linearTool",
		"popularity": .397
	},
	{
		"id": "n8n-nodes-inoreader.inoreader",
		"popularity": .378
	},
	{
		"id": "n8n-nodes-base.invoiceNinja",
		"popularity": .396
	},
	{
		"id": "n8n-nodes-base.clearbit",
		"popularity": .345
	},
	{
		"id": "n8n-nodes-base.awsSqs",
		"popularity": .374
	},
	{
		"id": "n8n-nodes-heyreach.heyReach",
		"popularity": .409
	},
	{
		"id": "n8n-nodes-base.freshserviceTool",
		"popularity": .359
	},
	{
		"id": "n8n-nodes-base.flow",
		"popularity": .341
	},
	{
		"id": "n8n-nodes-base.bitly",
		"popularity": .36
	},
	{
		"id": "n8n-nodes-base.jwtTool",
		"popularity": .335
	},
	{
		"id": "n8n-nodes-base.affinityTrigger",
		"popularity": .329
	},
	{
		"id": "n8n-nodes-base.freshdeskTool",
		"popularity": .363
	},
	{
		"id": "n8n-nodes-base.mindee",
		"popularity": .358
	},
	{
		"id": "n8n-nodes-base.bambooHr",
		"popularity": .368
	},
	{
		"id": "n8n-nodes-base.invoiceNinjaTool",
		"popularity": .339
	},
	{
		"id": "n8n-nodes-base.googleBooksTool",
		"popularity": .334
	},
	{
		"id": "n8n-nodes-anchorbrowser.anchorBrowser",
		"popularity": .499
	},
	{
		"id": "n8n-nodes-base.gong",
		"popularity": .378
	},
	{
		"id": "n8n-nodes-outscraper.outscraper",
		"popularity": .37
	},
	{
		"id": "n8n-nodes-base.ciscoWebex",
		"popularity": .361
	},
	{
		"id": "n8n-nodes-base.sendInBlueTrigger",
		"popularity": .352
	},
	{
		"id": "n8n-nodes-base.adaloTool",
		"popularity": .325
	},
	{
		"id": "n8n-nodes-base.sentryIo",
		"popularity": .393
	},
	{
		"id": "@scrapeops/n8n-nodes-scrapeops.ScrapeOps",
		"popularity": .343
	},
	{
		"id": "n8n-nodes-base.mattermostTool",
		"popularity": .351
	},
	{
		"id": "n8n-nodes-base.mediumTool",
		"popularity": .328
	},
	{
		"id": "n8n-nodes-base.azureCosmosDb",
		"popularity": .379
	},
	{
		"id": "n8n-nodes-base.boxTrigger",
		"popularity": .349
	},
	{
		"id": "n8n-nodes-base.contentfulTool",
		"popularity": .326
	},
	{
		"id": "n8n-nodes-screenshotbase.screenshotBase",
		"popularity": .353
	},
	{
		"id": "n8n-nodes-base.marketstackTool",
		"popularity": .338
	},
	{
		"id": "n8n-nodes-base.autopilot",
		"popularity": .319
	},
	{
		"id": "n8n-nodes-softr.softr",
		"popularity": .428
	},
	{
		"id": "n8n-nodes-1shot.oneShot",
		"popularity": .341
	},
	{
		"id": "n8n-nodes-base.upleadTool",
		"popularity": .318
	},
	{
		"id": "n8n-nodes-base.dropcontact",
		"popularity": .315
	},
	{
		"id": "n8n-nodes-base.matrixTool",
		"popularity": .309
	},
	{
		"id": "n8n-nodes-base.travisCiTool",
		"popularity": .328
	},
	{
		"id": "n8n-nodes-base.ldapTool",
		"popularity": .325
	},
	{
		"id": "n8n-nodes-base.npmTool",
		"popularity": .296
	},
	{
		"id": "n8n-nodes-base.haloPSA",
		"popularity": .373
	},
	{
		"id": "@cloudsway-ai/n8n-nodes-cloudsway.smartSearch",
		"popularity": .315
	},
	{
		"id": "n8n-nodes-base.magento2Tool",
		"popularity": .341
	},
	{
		"id": "n8n-nodes-base.googlePerspectiveTool",
		"popularity": .294
	},
	{
		"id": "n8n-nodes-base.npm",
		"popularity": .324
	},
	{
		"id": "n8n-nodes-base.awsSesTool",
		"popularity": .274
	},
	{
		"id": "n8n-nodes-yepcode.yepCode",
		"popularity": .321
	},
	{
		"id": "n8n-nodes-base.xeroTool",
		"popularity": .339
	},
	{
		"id": "n8n-nodes-base.wufooTrigger",
		"popularity": .285
	},
	{
		"id": "n8n-nodes-base.convertKit",
		"popularity": .366
	},
	{
		"id": "n8n-nodes-base.harvest",
		"popularity": .35
	},
	{
		"id": "n8n-nodes-base.uptimeRobot",
		"popularity": .322
	},
	{
		"id": "n8n-nodes-base.mailgunTool",
		"popularity": .288
	},
	{
		"id": "n8n-nodes-base.discourse",
		"popularity": .307
	},
	{
		"id": "n8n-nodes-base.pushcut",
		"popularity": .307
	},
	{
		"id": "n8n-nodes-base.erpNextTool",
		"popularity": .369
	},
	{
		"id": "n8n-nodes-base.netlify",
		"popularity": .3
	},
	{
		"id": "n8n-nodes-base.uproc",
		"popularity": .315
	},
	{
		"id": "n8n-nodes-base.rundeck",
		"popularity": .26
	},
	{
		"id": "n8n-nodes-base.uptimeRobotTool",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.crateDbTool",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-base.cockpitTool",
		"popularity": .258
	},
	{
		"id": "n8n-nodes-base.freshworksCrmTool",
		"popularity": .278
	},
	{
		"id": "n8n-nodes-base.theHiveProject",
		"popularity": .349
	},
	{
		"id": "n8n-nodes-base.timescaleDb",
		"popularity": .288
	},
	{
		"id": "n8n-nodes-base.googleBooks",
		"popularity": .276
	},
	{
		"id": "n8n-nodes-base.securityScorecardTool",
		"popularity": .266
	},
	{
		"id": "n8n-nodes-base.mandrill",
		"popularity": .255
	},
	{
		"id": "@decodo/n8n-nodes-decodo.decodo",
		"popularity": .295
	},
	{
		"id": "@alipeople/n8n-nodes-sendon.sendon",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-base.helpScoutTrigger",
		"popularity": .268
	},
	{
		"id": "n8n-nodes-base.elasticSecurityTool",
		"popularity": .245
	},
	{
		"id": "n8n-nodes-base.wiseTrigger",
		"popularity": .283
	},
	{
		"id": "n8n-nodes-base.invoiceNinjaTrigger",
		"popularity": .266
	},
	{
		"id": "n8n-nodes-base.paddleTool",
		"popularity": .236
	},
	{
		"id": "n8n-nodes-base.awsCertificateManager",
		"popularity": .264
	},
	{
		"id": "n8n-nodes-base.cortex",
		"popularity": .25
	},
	{
		"id": "n8n-nodes-base.crateDb",
		"popularity": .255
	},
	{
		"id": "n8n-nodes-base.plivo",
		"popularity": .278
	},
	{
		"id": "n8n-nodes-base.strapiTool",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.signl4",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-base.ouraTool",
		"popularity": .268
	},
	{
		"id": "n8n-nodes-base.lemlistTool",
		"popularity": .281
	},
	{
		"id": "n8n-nodes-base.autopilotTrigger",
		"popularity": .236
	},
	{
		"id": "n8n-nodes-base.peekalink",
		"popularity": .258
	},
	{
		"id": "n8n-nodes-base.storyblok",
		"popularity": .266
	},
	{
		"id": "n8n-nodes-base.getResponseTrigger",
		"popularity": .23
	},
	{
		"id": "@telnyx/n8n-nodes-telnyx-ai.telnyxAi",
		"popularity": .312
	},
	{
		"id": "n8n-nodes-visualping.visualpingTrigger",
		"popularity": .26
	},
	{
		"id": "n8n-nodes-base.discourseTool",
		"popularity": .27
	},
	{
		"id": "n8n-nodes-base.openThesaurus",
		"popularity": .268
	},
	{
		"id": "n8n-nodes-base.circleCi",
		"popularity": .236
	},
	{
		"id": "n8n-nodes-base.theHiveTool",
		"popularity": .23
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectDatacenterTool",
		"popularity": .352
	},
	{
		"id": "n8n-nodes-base.okta",
		"popularity": .342
	},
	{
		"id": "n8n-nodes-base.codaTool",
		"popularity": .322
	},
	{
		"id": "n8n-nodes-base.seaTableTool",
		"popularity": .34
	},
	{
		"id": "n8n-nodes-base.lemlistTrigger",
		"popularity": .384
	},
	{
		"id": "n8n-nodes-base.customerIo",
		"popularity": .326
	},
	{
		"id": "n8n-nodes-base.rocketchatTool",
		"popularity": .325
	},
	{
		"id": "n8n-nodes-fullenrich.fullEnrich",
		"popularity": .321
	},
	{
		"id": "n8n-nodes-base.raindrop",
		"popularity": .373
	},
	{
		"id": "n8n-nodes-mailtrap.mailtrap",
		"popularity": .335
	},
	{
		"id": "n8n-nodes-base.ghostTool",
		"popularity": .332
	},
	{
		"id": "n8n-nodes-base.awsSns",
		"popularity": .333
	},
	{
		"id": "n8n-nodes-base.BrandfetchTool",
		"popularity": .296
	},
	{
		"id": "n8n-nodes-base.sendGridTool",
		"popularity": .324
	},
	{
		"id": "n8n-nodes-base.postHog",
		"popularity": .327
	},
	{
		"id": "n8n-nodes-base.hunterTool",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-templated.templated",
		"popularity": .342
	},
	{
		"id": "n8n-nodes-base.rabbitmqTool",
		"popularity": .307
	},
	{
		"id": "n8n-nodes-base.splunkTool",
		"popularity": .322
	},
	{
		"id": "n8n-nodes-base.mailchimpTrigger",
		"popularity": .327
	},
	{
		"id": "n8n-nodes-fluentc.fluentCTranslate",
		"popularity": .292
	},
	{
		"id": "n8n-nodes-pushinator.pushinator",
		"popularity": .329
	},
	{
		"id": "n8n-nodes-mallabe-barcodes.mallabeBarcodes",
		"popularity": .303
	},
	{
		"id": "n8n-nodes-base.ciscoWebexTool",
		"popularity": .323
	},
	{
		"id": "n8n-nodes-base.yourls",
		"popularity": .308
	},
	{
		"id": "n8n-nodes-base.postmarkTrigger",
		"popularity": .311
	},
	{
		"id": "n8n-nodes-base.oneSimpleApi",
		"popularity": .304
	},
	{
		"id": "n8n-nodes-base.clockifyTrigger",
		"popularity": .304
	},
	{
		"id": "n8n-nodes-base.mauticTrigger",
		"popularity": .303
	},
	{
		"id": "n8n-nodes-skyvern.skyvern",
		"popularity": .32
	},
	{
		"id": "n8n-nodes-awork.awork",
		"popularity": .334
	},
	{
		"id": "n8n-nodes-base.ciscoWebexTrigger",
		"popularity": .323
	},
	{
		"id": "n8n-nodes-vikunja.vikunja",
		"popularity": .371
	},
	{
		"id": "n8n-nodes-base.msg91",
		"popularity": .296
	},
	{
		"id": "n8n-nodes-base.crowdDevTool",
		"popularity": .274
	},
	{
		"id": "n8n-nodes-base.awsRekognition",
		"popularity": .307
	},
	{
		"id": "n8n-nodes-base.chargebeeTool",
		"popularity": .278
	},
	{
		"id": "n8n-nodes-base.helpScout",
		"popularity": .338
	},
	{
		"id": "n8n-nodes-base.awsIam",
		"popularity": .309
	},
	{
		"id": "n8n-nodes-base.gongTool",
		"popularity": .281
	},
	{
		"id": "n8n-nodes-base.bambooHrTool",
		"popularity": .288
	},
	{
		"id": "n8n-nodes-base.intercomTool",
		"popularity": .302
	},
	{
		"id": "@zohomail/n8n-nodes-zohocalendar.zohoCalendar",
		"popularity": .311
	},
	{
		"id": "n8n-nodes-base.loneScaleTool",
		"popularity": .281
	},
	{
		"id": "n8n-nodes-base.contentful",
		"popularity": .306
	},
	{
		"id": "n8n-nodes-base.oura",
		"popularity": .306
	},
	{
		"id": "@globalping/n8n-nodes-globalping.globalping",
		"popularity": .281
	},
	{
		"id": "n8n-nodes-base.mailcheckTool",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-base.bitlyTool",
		"popularity": .283
	},
	{
		"id": "n8n-nodes-base.iterable",
		"popularity": .278
	},
	{
		"id": "n8n-nodes-base.zulip",
		"popularity": .358
	},
	{
		"id": "n8n-nodes-base.humanticAi",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-docuwriter-ai.docuWriter",
		"popularity": .281
	},
	{
		"id": "n8n-nodes-base.awsCognito",
		"popularity": .288
	},
	{
		"id": "n8n-nodes-base.kafkaTool",
		"popularity": .288
	},
	{
		"id": "n8n-nodes-extruct.extruct",
		"popularity": .226
	},
	{
		"id": "n8n-nodes-chat-data.chatDataTrigger",
		"popularity": .245
	},
	{
		"id": "n8n-nodes-base.totpTool",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.mailerLiteTrigger",
		"popularity": .307
	},
	{
		"id": "n8n-nodes-base.surveyMonkeyTrigger",
		"popularity": .289
	},
	{
		"id": "n8n-nodes-base.harvestTool",
		"popularity": .286
	},
	{
		"id": "n8n-nodes-base.postHogTool",
		"popularity": .274
	},
	{
		"id": "n8n-nodes-kipps.kippsAiChatbot",
		"popularity": .286
	},
	{
		"id": "n8n-nodes-base.freshworksCrm",
		"popularity": .34
	},
	{
		"id": "n8n-nodes-base.Brandfetch",
		"popularity": .274
	},
	{
		"id": "n8n-nodes-base.awsComprehend",
		"popularity": .281
	},
	{
		"id": "n8n-nodes-straico-official.straicoOfficial",
		"popularity": .359
	},
	{
		"id": "n8n-nodes-shortio.Shortio",
		"popularity": .286
	},
	{
		"id": "n8n-nodes-base.gotifyTool",
		"popularity": .26
	},
	{
		"id": "n8n-nodes-base.mailerLiteTool",
		"popularity": .274
	},
	{
		"id": "n8n-nodes-base.flowTrigger",
		"popularity": .264
	},
	{
		"id": "n8n-nodes-base.iterableTool",
		"popularity": .281
	},
	{
		"id": "n8n-nodes-parseur.parseur",
		"popularity": .276
	},
	{
		"id": "n8n-nodes-base.gristTool",
		"popularity": .286
	},
	{
		"id": "n8n-nodes-base.yourlsTool",
		"popularity": .239
	},
	{
		"id": "n8n-nodes-base.timescaleDbTool",
		"popularity": .266
	},
	{
		"id": "n8n-nodes-base.pagerDuty",
		"popularity": .381
	},
	{
		"id": "n8n-nodes-seo-content-machine.seoContentMachine",
		"popularity": .278
	},
	{
		"id": "n8n-nodes-base.taiga",
		"popularity": .316
	},
	{
		"id": "n8n-nodes-base.openThesaurusTool",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-base.spontit",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-base.driftTool",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-vikunja.vikunjaTrigger",
		"popularity": .276
	},
	{
		"id": "n8n-nodes-base.awsSnsTool",
		"popularity": .258
	},
	{
		"id": "n8n-nodes-base.monicaCrm",
		"popularity": .281
	},
	{
		"id": "n8n-nodes-base.syncroMspTool",
		"popularity": .255
	},
	{
		"id": "n8n-nodes-base.questDbTool",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-base.stackby",
		"popularity": .268
	},
	{
		"id": "n8n-nodes-base.syncroMsp",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.dropcontactTool",
		"popularity": .242
	},
	{
		"id": "n8n-nodes-base.mispTool",
		"popularity": .226
	},
	{
		"id": "n8n-nodes-zohoteaminbox.zohoTeamInbox",
		"popularity": .25
	},
	{
		"id": "n8n-nodes-base.zulipTool",
		"popularity": .255
	},
	{
		"id": "n8n-nodes-base.rundeckTool",
		"popularity": .215
	},
	{
		"id": "n8n-nodes-base.unleashedSoftware",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-base.monicaCrmTool",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.elasticSecurity",
		"popularity": .274
	},
	{
		"id": "n8n-nodes-base.raindropTool",
		"popularity": .236
	},
	{
		"id": "n8n-nodes-base.oktaTool",
		"popularity": .236
	},
	{
		"id": "n8n-nodes-base.securityScorecard",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-base.lingvaNex",
		"popularity": .206
	},
	{
		"id": "@ekyte/n8n-nodes-ekyte.eKyteAction",
		"popularity": .288
	},
	{
		"id": "@orisma/n8n-nodes-taximail.taximail",
		"popularity": .215
	},
	{
		"id": "n8n-nodes-base.mailjetTrigger",
		"popularity": .26
	},
	{
		"id": "n8n-nodes-base.paddle",
		"popularity": .191
	},
	{
		"id": "n8n-nodes-base.theHive",
		"popularity": .226
	},
	{
		"id": "n8n-nodes-base.questDb",
		"popularity": .206
	},
	{
		"id": "n8n-nodes-logsnag.LogSnag",
		"popularity": .215
	},
	{
		"id": "n8n-nodes-base.segment",
		"popularity": .26
	},
	{
		"id": "@vlm-run/n8n-nodes-vlmrun.vlmRun",
		"popularity": .239
	},
	{
		"id": "n8n-nodes-base.quickbase",
		"popularity": .298
	},
	{
		"id": "n8n-nodes-base.pushbulletTool",
		"popularity": .191
	},
	{
		"id": "n8n-nodes-klicktipp.klicktipp",
		"popularity": .219
	},
	{
		"id": "n8n-nodes-base.storyblokTool",
		"popularity": .219
	},
	{
		"id": "n8n-nodes-base.keapTrigger",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-base.koBoToolboxTrigger",
		"popularity": .239
	},
	{
		"id": "n8n-nodes-joggai.joggAiNode",
		"popularity": .215
	},
	{
		"id": "@copicake/n8n-nodes-copicake.copicake",
		"popularity": .201
	},
	{
		"id": "n8n-nodes-base.postBinTool",
		"popularity": .226
	},
	{
		"id": "n8n-nodes-base.mandrillTool",
		"popularity": .178
	},
	{
		"id": "n8n-nodes-base.netlifyTrigger",
		"popularity": .223
	},
	{
		"id": "n8n-nodes-base.signl4Tool",
		"popularity": .201
	},
	{
		"id": "@netgsm/n8n-nodes-netgsm.netgsm",
		"popularity": .242
	},
	{
		"id": "n8n-nodes-base.taigaTool",
		"popularity": .264
	},
	{
		"id": "n8n-nodes-base.netlifyTool",
		"popularity": .196
	},
	{
		"id": "@paloaltonetworks/n8n-nodes-prisma-airs.prismaAirs",
		"popularity": .223
	},
	{
		"id": "n8n-nodes-swiftgum-trigger.swiftgumTrigger",
		"popularity": .185
	},
	{
		"id": "@apaleo/n8n-nodes-apaleo-official.apaleo",
		"popularity": .327
	},
	{
		"id": "n8n-nodes-base.koBoToolbox",
		"popularity": .258
	},
	{
		"id": "n8n-nodes-base.customerIoTrigger",
		"popularity": .236
	},
	{
		"id": "n8n-nodes-base.cockpit",
		"popularity": .196
	},
	{
		"id": "@bedrijfsdatanl/n8n-nodes-bedrijfsdata.bedrijfsdata",
		"popularity": .253
	},
	{
		"id": "@handelsregister/n8n-nodes-handelsregister-ai.handelsregisterAi",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-base.pushcutTool",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-base.convertKitTrigger",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-base.egoiTool",
		"popularity": .171
	},
	{
		"id": "n8n-nodes-base.salesmate",
		"popularity": .196
	},
	{
		"id": "n8n-nodes-base.goToWebinar",
		"popularity": .196
	},
	{
		"id": "n8n-nodes-dalil-ai.dalilAi",
		"popularity": .12
	},
	{
		"id": "n8n-nodes-base.taigaTrigger",
		"popularity": .191
	},
	{
		"id": "n8n-nodes-base.theHiveProjectTool",
		"popularity": .171
	},
	{
		"id": "@nuelink/n8n-nodes-nuelink.nuelink",
		"popularity": .219
	},
	{
		"id": "n8n-nodes-streak-crm.streak",
		"popularity": .239
	},
	{
		"id": "n8n-nodes-base.wekan",
		"popularity": .274
	},
	{
		"id": "n8n-nodes-base.kitemakerTool",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-base.twist",
		"popularity": .206
	},
	{
		"id": "n8n-nodes-base.koBoToolboxTool",
		"popularity": .171
	},
	{
		"id": "n8n-nodes-base.wekanTool",
		"popularity": .12
	},
	{
		"id": "n8n-nodes-businessmap.businessmap",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-base.disqus",
		"popularity": .133
	},
	{
		"id": "n8n-nodes-taddy.taddyApi",
		"popularity": .145
	},
	{
		"id": "n8n-nodes-krispcall.krispcall",
		"popularity": .145
	},
	{
		"id": "n8n-nodes-base.oracleDatabaseTool",
		"popularity": .398
	},
	{
		"id": "n8n-nodes-exa-official.exa",
		"popularity": .355
	},
	{
		"id": "n8n-nodes-parallel.parallel",
		"popularity": .302
	},
	{
		"id": "n8n-nodes-triggercmd.triggercmd",
		"popularity": .304
	},
	{
		"id": "n8n-nodes-digital-ocean.digitalOcean",
		"popularity": .307
	},
	{
		"id": "n8n-nodes-base.clearbitTool",
		"popularity": .255
	},
	{
		"id": "n8n-nodes-base.segmentTool",
		"popularity": .25
	},
	{
		"id": "n8n-nodes-base.amqpTool",
		"popularity": .242
	},
	{
		"id": "n8n-nodes-base.awsElb",
		"popularity": .264
	},
	{
		"id": "n8n-nodes-base.mauticTool",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.misp",
		"popularity": .25
	},
	{
		"id": "n8n-nodes-base.beeminderTool",
		"popularity": .242
	},
	{
		"id": "n8n-nodes-base.keap",
		"popularity": .298
	},
	{
		"id": "n8n-nodes-base.sms77Tool",
		"popularity": .264
	},
	{
		"id": "n8n-nodes-base.helpScoutTool",
		"popularity": .248
	},
	{
		"id": "@enginemailer/n8n-nodes-enginemailer.enginemailer",
		"popularity": .239
	},
	{
		"id": "n8n-nodes-base.mailjetTool",
		"popularity": .23
	},
	{
		"id": "n8n-nodes-base.seaTableTrigger",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-velatir.velatir",
		"popularity": .239
	},
	{
		"id": "n8n-nodes-base.copper",
		"popularity": .281
	},
	{
		"id": "n8n-nodes-base.emelia",
		"popularity": .226
	},
	{
		"id": "n8n-nodes-base.workableTrigger",
		"popularity": .268
	},
	{
		"id": "n8n-nodes-base.copperTool",
		"popularity": .236
	},
	{
		"id": "n8n-nodes-base.circleCiTool",
		"popularity": .226
	},
	{
		"id": "n8n-nodes-base.tapfiliateTool",
		"popularity": .226
	},
	{
		"id": "n8n-nodes-base.vonageTool",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-base.sentryIoTool",
		"popularity": .288
	},
	{
		"id": "n8n-nodes-base.demioTool",
		"popularity": .236
	},
	{
		"id": "n8n-nodes-authentica.authentica",
		"popularity": .223
	},
	{
		"id": "n8n-nodes-base.haloPSATool",
		"popularity": .285
	},
	{
		"id": "n8n-nodes-base.plivoTool",
		"popularity": .23
	},
	{
		"id": "n8n-nodes-base.drift",
		"popularity": .201
	},
	{
		"id": "n8n-nodes-base.goToWebinarTool",
		"popularity": .223
	},
	{
		"id": "n8n-nodes-base.stackbyTool",
		"popularity": .201
	},
	{
		"id": "n8n-nodes-base.pagerDutyTool",
		"popularity": .253
	},
	{
		"id": "n8n-nodes-base.uplead",
		"popularity": .23
	},
	{
		"id": "n8n-nodes-parseur.parseurTrigger",
		"popularity": .223
	},
	{
		"id": "n8n-nodes-base.chargebeeTrigger",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-gainium.Gainium",
		"popularity": .3
	},
	{
		"id": "n8n-nodes-twittershots.twitterShots",
		"popularity": .236
	},
	{
		"id": "n8n-nodes-base.sendy",
		"popularity": .206
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectCloudTool",
		"popularity": .23
	},
	{
		"id": "n8n-nodes-blue.blue",
		"popularity": .276
	},
	{
		"id": "n8n-nodes-base.quickbaseTool",
		"popularity": .242
	},
	{
		"id": "n8n-nodes-base.sendyTool",
		"popularity": .201
	},
	{
		"id": "n8n-nodes-base.emeliaTool",
		"popularity": .201
	},
	{
		"id": "n8n-nodes-apex.apex",
		"popularity": .191
	},
	{
		"id": "n8n-nodes-base.unleashedSoftwareTool",
		"popularity": .206
	},
	{
		"id": "n8n-nodes-deeptagger.deepTagger",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-base.demio",
		"popularity": .255
	},
	{
		"id": "n8n-nodes-base.chargebee",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-base.travisCi",
		"popularity": .103
	},
	{
		"id": "n8n-nodes-base.twistTool",
		"popularity": .219
	},
	{
		"id": "n8n-nodes-autobound.autobound",
		"popularity": .215
	},
	{
		"id": "n8n-nodes-base.msg91Tool",
		"popularity": .155
	},
	{
		"id": "n8n-nodes-beyondpresence.beyondPresence",
		"popularity": .196
	},
	{
		"id": "n8n-nodes-base.crowdDev",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-simplified.simplified",
		"popularity": .171
	},
	{
		"id": "n8n-nodes-understandtechchat.understandTechChat",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-base.uprocTool",
		"popularity": .155
	},
	{
		"id": "n8n-nodes-outgrow.outgrowTrigger",
		"popularity": .133
	},
	{
		"id": "n8n-nodes-base.salesmateTool",
		"popularity": .171
	},
	{
		"id": "n8n-nodes-straker-verify.strakerVerify",
		"popularity": .12
	},
	{
		"id": "n8n-nodes-base.theHiveTrigger",
		"popularity": .12
	},
	{
		"id": "n8n-nodes-webmetic.webmetic",
		"popularity": .191
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectDatacenter",
		"popularity": .178
	},
	{
		"id": "n8n-nodes-raia.raia",
		"popularity": .082
	},
	{
		"id": "n8n-nodes-matrix42.matrix42",
		"popularity": .155
	},
	{
		"id": "n8n-nodes-base.pushcutTrigger",
		"popularity": .133
	},
	{
		"id": "n8n-nodes-base.onfleet",
		"popularity": .178
	},
	{
		"id": "n8n-nodes-dart.dart",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-base.beeminder",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-base.theHiveProjectTrigger",
		"popularity": .178
	},
	{
		"id": "n8n-nodes-base.egoi",
		"popularity": .236
	},
	{
		"id": "n8n-nodes-base.tapfiliate",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-klicktipp.klicktippTrigger",
		"popularity": .12
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatLemonade",
		"popularity": .429
	},
	{
		"id": "@geocapture/n8n-nodes-geocapture.geocapture",
		"popularity": .201
	},
	{
		"id": "n8n-nodes-base.twakeTool",
		"popularity": .145
	},
	{
		"id": "n8n-nodes-base.profitWell",
		"popularity": .133
	},
	{
		"id": "n8n-nodes-base.emeliaTrigger",
		"popularity": .171
	},
	{
		"id": "n8n-nodes-reachkit.reachkit",
		"popularity": .133
	},
	{
		"id": "n8n-nodes-zigpoll.zigpollTrigger",
		"popularity": .145
	},
	{
		"id": "n8n-nodes-ikas.ikas",
		"popularity": .163
	},
	{
		"id": "@orq-ai/n8n-nodes-orq.orqDeployment",
		"popularity": .103
	},
	{
		"id": "n8n-nodes-crossmint.crossmintWallets",
		"popularity": .215
	},
	{
		"id": "n8n-nodes-pdf4me.pdf4me",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-targetare.targetareRo",
		"popularity": .145
	},
	{
		"id": "@bedrijfsdatanl/n8n-nodes-prospectpro.prospectpro",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-base.lingvaNexTool",
		"popularity": .12
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectCloudTrigger",
		"popularity": .082
	},
	{
		"id": "n8n-nodes-base.copperTrigger",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-base.onfleetTrigger",
		"popularity": .12
	},
	{
		"id": "n8n-nodes-base.profitWellTool",
		"popularity": .103
	},
	{
		"id": "n8n-nodes-jigsawstack.jigsawStack",
		"popularity": .155
	},
	{
		"id": "n8n-nodes-base.keapTool",
		"popularity": .103
	},
	{
		"id": "n8n-nodes-base.kitemaker",
		"popularity": .103
	},
	{
		"id": "n8n-nodes-base.spontitTool",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-base.moceanTool",
		"popularity": .12
	},
	{
		"id": "n8n-nodes-signifycrm.signifyCrm",
		"popularity": .082
	},
	{
		"id": "n8n-nodes-base.dsSearchTool",
		"popularity": .052
	},
	{
		"id": "@datafix/n8n-nodes-anthias.anthias",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-referral-factory.referralFactory",
		"popularity": .145
	},
	{
		"id": "n8n-nodes-winston-ai.winstonAi",
		"popularity": .103
	},
	{
		"id": "n8n-nodes-base.vero",
		"popularity": .163
	},
	{
		"id": "@droidrun/n8n-nodes-droidrun.droidrun",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-payfunnels.payfunnels",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-base.linkedinNodeTool",
		"popularity": .155
	},
	{
		"id": "n8n-nodes-base.function",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-omnara.omnara",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-base.odooCustomToolTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.crowdDevTrigger",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-hookdeck.hookdeck",
		"popularity": .103
	},
	{
		"id": "n8n-nodes-base.wakebAipTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.cron",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.writeBinaryFile",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.squareTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.libreNmsTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.wakebDvsTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.aimsArticlesTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.smsItTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.setTool",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGooglePalm",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.mcpClientTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.stickyNote",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.fortinetTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.comfyUITool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.workflowTrigger",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-base.crewAiTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.tfusionGenerateTool",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmGooglePalm",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.openAiAssistant",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.olhoVivoTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.orbit",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.splunkFdjTool",
		"popularity": 0
	},
	{
		"id": "@steuerboard/n8n-nodes-steuerboard.steuerboard",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreSupabaseLoad",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.readPDF",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmOpenAi",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.documentBinaryInputLoader",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.spreadsheetFile",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.loneScaleTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.youTubeSearchTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.influxDbTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.e2eTest",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolHttpRequest",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.customSshTool",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryChatRetriever",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.arubaCentralv4Tool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.htmlExtract",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.jimengAiTool",
		"popularity": 0
	},
	{
		"id": "@thelifeofrishi/n8n-nodes-orshot.orshot",
		"popularity": .248
	},
	{
		"id": "@xano/n8n-nodes-xano.xano",
		"popularity": .253
	},
	{
		"id": "@decisionrules/n8n-nodes-decisionrules.decisionRules",
		"popularity": .145
	},
	{
		"id": "n8n-nodes-base.mocean",
		"popularity": .145
	},
	{
		"id": "n8n-nodes-base.loneScale",
		"popularity": .103
	},
	{
		"id": "n8n-nodes-nele-ai.neleAi",
		"popularity": .215
	},
	{
		"id": "n8n-nodes-infranodus.infranodus",
		"popularity": .171
	},
	{
		"id": "n8n-nodes-memara.memara",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-octagon.octagonAgents",
		"popularity": .082
	},
	{
		"id": "n8n-nodes-featherless.featherless",
		"popularity": .171
	},
	{
		"id": "@rogerrogerio/n8n-nodes-rogerroger.rogerRoger",
		"popularity": .155
	},
	{
		"id": "n8n-nodes-base.onfleetTool",
		"popularity": .082
	},
	{
		"id": "@ledgers/n8n-nodes-ledgers-cloud.ledgers",
		"popularity": .103
	},
	{
		"id": "@nvoip/n8n-nodes-nvoip.nvoip",
		"popularity": .12
	},
	{
		"id": "@n8n/n8n-nodes-langchain.documentJsonInputLoader",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.upGuardTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.manualTrigger",
		"popularity": .995
	},
	{
		"id": "@n8n/n8n-nodes-langchain.documentDefaultDataLoader",
		"popularity": .762
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserItemList",
		"popularity": .708
	},
	{
		"id": "@n8n/n8n-nodes-langchain.ollama",
		"popularity": .694
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmOllama",
		"popularity": .691
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolVectorStore",
		"popularity": .664
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatMistralCloud",
		"popularity": .658
	},
	{
		"id": "@elevenlabs/n8n-nodes-elevenlabs.elevenLabs",
		"popularity": .64
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryMotorhead",
		"popularity": .594
	},
	{
		"id": "n8n-nodes-base.microsoftOneDriveTrigger",
		"popularity": .563
	},
	{
		"id": "@pdfgeneratorapi/n8n-nodes-pdf-generator-api.pdfGeneratorApi",
		"popularity": .543
	},
	{
		"id": "n8n-nodes-base.clickUpTool",
		"popularity": .532
	},
	{
		"id": "n8n-nodes-base.googleAnalyticsTool",
		"popularity": .46
	},
	{
		"id": "n8n-nodes-htmlcsstopdf.htmlcsstopdf",
		"popularity": .464
	},
	{
		"id": "n8n-nodes-base.oracleDatabase",
		"popularity": .492
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreRedis",
		"popularity": .463
	},
	{
		"id": "n8n-nodes-scrapingbee.ScrapingBee",
		"popularity": .453
	},
	{
		"id": "n8n-nodes-base.freshdesk",
		"popularity": .474
	},
	{
		"id": "n8n-nodes-base.googleFirebaseRealtimeDatabaseTool",
		"popularity": .415
	},
	{
		"id": "n8n-nodes-pdfmonkey.pdfMonkey",
		"popularity": .415
	},
	{
		"id": "@promptlayer/n8n-nodes-promptlayer-runagent.promptLayerRunAgent",
		"popularity": .361
	},
	{
		"id": "n8n-nodes-google-search-console.googleSearchConsole",
		"popularity": .382
	},
	{
		"id": "n8n-nodes-tallyforms.tallyTrigger",
		"popularity": .348
	},
	{
		"id": "n8n-nodes-emailvalidation.emailValidation",
		"popularity": .33
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsLemonade",
		"popularity": .309
	},
	{
		"id": "n8n-nodes-browseract.browserAct",
		"popularity": .33
	},
	{
		"id": "n8n-nodes-olostep.olostepScrape",
		"popularity": .304
	},
	{
		"id": "@digitalocean/n8n-nodes-digitalocean-gradient-serverless-inference.digitalOceanGradientServerlessInference",
		"popularity": .303
	},
	{
		"id": "@respond-io/n8n-nodes-respond-io.respondio",
		"popularity": .4
	},
	{
		"id": "@servicem8/n8n-nodes-servicem8.serviceM8",
		"popularity": .407
	},
	{
		"id": "n8n-nodes-base.peekalinkTool",
		"popularity": .283
	},
	{
		"id": "@easysoftware/n8n-nodes-easy-redmine.easyRedmine",
		"popularity": .33
	},
	{
		"id": "@reportei/n8n-nodes-reportei.reportei",
		"popularity": .27
	},
	{
		"id": "n8n-nodes-base.googlePerspective",
		"popularity": .253
	},
	{
		"id": "@exploriumai/n8n-nodes-explorium-ai.exploriumApiNode",
		"popularity": .315
	},
	{
		"id": "n8n-nodes-sourcegeek.sourcegeek",
		"popularity": .242
	},
	{
		"id": "n8n-nodes-llmlayer.llmLayer",
		"popularity": .23
	},
	{
		"id": "@razorpay/n8n-nodes-razorpay.razorpay",
		"popularity": .321
	},
	{
		"id": "@deutschlandgpt/n8n-nodes-deutschlandgpt.deutschlandgpt",
		"popularity": .219
	},
	{
		"id": "n8n-nodes-dumplingai.dumplingAi",
		"popularity": .206
	},
	{
		"id": "n8n-nodes-verifiemail.verifiEmail",
		"popularity": .248
	},
	{
		"id": "@infobip/n8n-nodes-infobip-api.infobipApi",
		"popularity": .163
	},
	{
		"id": "@socradar/n8n-nodes-socradar.socradar",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-octavehq.octave",
		"popularity": .178
	},
	{
		"id": "n8n-nodes-base.veroTool",
		"popularity": .145
	},
	{
		"id": "n8n-nodes-csvbox.csvboxTrigger",
		"popularity": .145
	},
	{
		"id": "n8n-nodes-meetgeek.meetGeek",
		"popularity": .191
	},
	{
		"id": "@lnkbio/n8n-nodes-lnkbio.lnkBio",
		"popularity": .145
	},
	{
		"id": "n8n-nodes-binalyze-air.air",
		"popularity": .196
	},
	{
		"id": "n8n-nodes-blank.githubIssues",
		"popularity": .12
	},
	{
		"id": "n8n-nodes-human-in-the-loop.hitlNode",
		"popularity": .12
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectCloud",
		"popularity": .082
	},
	{
		"id": "n8n-nodes-simla.simlaTrigger",
		"popularity": .052
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStorePineconeLoad",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.cywareConnectorTool",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStorePineconeInsert",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-telli.telli",
		"popularity": .12
	},
	{
		"id": "n8n-nodes-phacet-official.phacet",
		"popularity": .103
	},
	{
		"id": "n8n-nodes-magnetite.magnetite",
		"popularity": .12
	},
	{
		"id": "n8n-nodes-sinergiacrm.sinergiaCrm",
		"popularity": .103
	},
	{
		"id": "n8n-nodes-hubbi.hubbi",
		"popularity": .052
	},
	{
		"id": "@joai/n8n-nodes-joai.joai",
		"popularity": .12
	},
	{
		"id": "n8n-nodes-base.waitTool",
		"popularity": .052
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreZepInsert",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.onlyofficeTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.start",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.databricksTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.arubaClearPassTool",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreInMemoryInsert",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.drapiCalendarTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.ciscoFirepowerThreatDefenceTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.serperTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.vkteamsTool",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreInMemoryLoad",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.readBinaryFiles",
		"popularity": 0
	}
];
var import_difference = /* @__PURE__ */ __toESM(require_difference());
var nodePopularityMap = Object.values(__virtual_node_popularity_data_default).reduce((acc, node) => {
	return {
		...acc,
		[node.id]: node.popularity * 100
	};
}, {});
const useViewStacks = defineStore("nodeCreatorViewStacks", () => {
	const nodeCreatorStore = useNodeCreatorStore();
	const { getActiveItemIndex } = useKeyboardNavigation();
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
			const searchResults = extendItemsWithUUID(searchNodes(stack.search || "", searchBase, { popularity: nodePopularityMap }));
			const groupedNodes = groupIfAiNodes(searchResults, stack.title, false) ?? searchResults;
			stack.activeIndex = groupedNodes.some((node) => node.type === "section") ? 1 : 0;
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
		return stack.searchItems.map((item) => transformNodeType(item, stack.subcategory));
	});
	function isAiSubcategoryView(stack) {
		return stack.rootView === AI_OTHERS_NODE_CREATOR_VIEW;
	}
	function getLastActiveStack() {
		return viewStacks.value[viewStacks.value.length - 1];
	}
	function getAllNodeCreateElements() {
		return nodeCreatorStore.mergedNodes.map((item) => transformNodeType(item));
	}
	const globalSearchItemsDiff = computed(() => {
		const stack = getLastActiveStack();
		if (!stack?.search || isAiSubcategoryView(stack)) return [];
		const allNodes = getAllNodeCreateElements();
		const filteredNodes = isAiRootView(stack) ? allNodes : filterOutAiNodes(allNodes);
		let globalSearchResult = extendItemsWithUUID(searchNodes(stack.search || "", filteredNodes, { popularity: nodePopularityMap }));
		if (isAiRootView(stack)) globalSearchResult = groupIfAiNodes(globalSearchResult, stack.title, false);
		return globalSearchResult.filter((item) => {
			return !activeStackItems.value.find((activeItem) => {
				if (activeItem.type === "section") return activeItem.children.some((sectionItem) => sectionItem.key === item.key);
				return activeItem.key === item.key;
			});
		}).filter((item) => {
			if (item.type === "section") return item.children.some((child) => activeStackItems.value.some((filteredItem) => filteredItem.key === child.key));
			return true;
		});
	});
	const itemsBySubcategory = computed(() => subcategorizeItems(nodeCreatorStore.mergedNodes));
	function isAiRootView(stack) {
		return stack.rootView === "AI";
	}
	function filterAiRootNodes(items) {
		return items.filter((node) => {
			if (node.type !== "node") return false;
			const subcategories = node.properties.codex?.subcategories?.["AI"] ?? [];
			return subcategories.includes("Root Nodes") && !subcategories?.includes("Tools");
		});
	}
	function groupIfAiNodes(items, stackCategory, sortAlphabetically) {
		const aiNodes = items.filter((node) => isAINode(node));
		const canvasHasAINodes = useCanvasStore().aiNodes.length > 0;
		const isVectorStoresCategory = stackCategory === AI_CATEGORY_VECTOR_STORES;
		if (aiNodes.length > 0 && (canvasHasAINodes || isAiRootView(getLastActiveStack()) || isVectorStoresCategory)) {
			const sectionsMap = /* @__PURE__ */ new Map();
			const aiRootNodes = filterAiRootNodes(aiNodes);
			const aiSubNodes = (0, import_difference.default)(aiNodes, aiRootNodes);
			aiSubNodes.forEach((node) => {
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
			return [
				...nonAiNodes,
				...aiRootNodes,
				...groupItemsInSections(aiSubNodes, sections, sortAlphabetically)
			];
		}
		return items;
	}
	function filterOutAiNodes(items) {
		return items.filter((item) => {
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
			relatedAIView = { properties: {
				title: i18n.baseText("nodeCreator.aiPanel.aiNodes"),
				icon: "robot"
			} };
		} else {
			nodesByConnectionType = useNodeTypesStore().visibleNodeTypesByOutputConnectionTypeNames;
			relatedAIView = AINodesView([]).items.find((item) => item.properties.connectionType === connectionType);
		}
		let extendedInfo = {};
		if (!filter?.nodes?.length && relatedAIView?.properties.info) extendedInfo = { info: relatedAIView?.properties.info };
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
			baseFilter: (i) => {
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
			actionsFilter: (items) => {
				if (items.some((item) => item.outputConnectionType)) return items.filter((item) => item.outputConnectionType === connectionType);
				return items;
			},
			hideActions: true,
			preventBack: true
		}, { resetStacks: true });
	}
	function setStackBaselineItems() {
		const stack = getLastActiveStack();
		if (!stack || !activeViewStack.value.uuid) return;
		let stackItems = stack?.items ?? [];
		if (!stack?.items) {
			const subcategory = stack?.subcategory ?? "*";
			let itemsInSubcategory = itemsBySubcategory.value[subcategory];
			if (!settingsStore.isAskAiEnabled) itemsInSubcategory = itemsInSubcategory.filter((item) => item.key !== AI_TRANSFORM_NODE_TYPE);
			const sections = stack.sections;
			if (sections) stackItems = groupItemsInSections(itemsInSubcategory, sections);
			else stackItems = itemsInSubcategory;
		}
		if ((stack.forceIncludeNodes ?? []).length > 0) {
			const matchedNodes = nodeCreatorStore.mergedNodes.filter((item) => stack.forceIncludeNodes?.includes(item.name)).map((item) => transformNodeType(item, stack.subcategory));
			stackItems.push(...matchedNodes);
		}
		if (stack.baseFilter) stackItems = stackItems.filter(stack.baseFilter);
		if (stack.itemsMapper) stackItems = stackItems.map(stack.itemsMapper);
		if (!stack.items) stackItems = sortNodeCreateElements(stackItems);
		updateCurrentViewStack({ baselineItems: stackItems });
	}
	function pushViewStack(stack, options = {}) {
		if (options.resetStacks) resetViewStacks();
		if (activeViewStack.value.uuid) updateCurrentViewStack({ activeIndex: getActiveItemIndex() });
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
			updateCurrentViewStack({ transitionDirection: "out" });
		}
	}
	function updateCurrentViewStack(stack) {
		const currentStack = getLastActiveStack();
		const matchedIndex = viewStacks.value.findIndex((s) => s.uuid === currentStack.uuid);
		if (!currentStack) return;
		Object.keys(stack).forEach((key) => {
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
});
function mapLegacyConnectionsToCanvasConnections(legacyConnections, nodes) {
	const mappedConnections = [];
	Object.keys(legacyConnections).forEach((fromNodeName) => {
		const fromId = nodes.find((node) => node.name === fromNodeName)?.id ?? "";
		Object.keys(legacyConnections[fromNodeName]).forEach((fromConnectionType) => {
			legacyConnections[fromNodeName][fromConnectionType]?.forEach((toPorts, fromIndex) => {
				toPorts?.forEach((toPort) => {
					const toNodeName = toPort.node;
					const toId = nodes.find((node) => node.name === toNodeName)?.id ?? "";
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
function createCanvasConnectionHandleString({ mode, type = NodeConnectionTypes.Main, index = 0 }) {
	return `${mode}/${type}/${index}`;
}
function createCanvasConnectionId(connection) {
	return `[${connection.source}/${connection.sourceHandle}][${connection.target}/${connection.targetHandle}]`;
}
function mapCanvasConnectionToLegacyConnection(sourceNode, targetNode, connection) {
	const sourceNodeName = sourceNode?.name ?? "";
	const { type: sourceType, index: sourceIndex } = parseCanvasConnectionHandleString(connection.sourceHandle);
	const targetNodeName = targetNode?.name ?? "";
	const { type: targetType, index: targetIndex } = parseCanvasConnectionHandleString(connection.targetHandle);
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
function mapLegacyEndpointsToCanvasConnectionPort(endpoints, endpointNames = []) {
	if (typeof endpoints === "string") {
		console.warn("Node endpoints have not been evaluated", endpoints);
		return [];
	}
	return endpoints.map((endpoint, endpointIndex) => {
		const typeValue = typeof endpoint === "string" ? endpoint : endpoint.type;
		const type = isValidNodeConnectionType(typeValue) ? typeValue : NodeConnectionTypes.Main;
		const label = typeof endpoint === "string" ? endpointNames[endpointIndex] : endpoint.displayName;
		const index = endpoints.slice(0, endpointIndex + 1).filter((e) => (typeof e === "string" ? e : e.type) === type).length - 1;
		const required = typeof endpoint === "string" ? false : endpoint.required;
		const maxConnections = typeof endpoint === "string" ? void 0 : endpoint.maxConnections;
		return {
			type,
			index,
			label,
			...maxConnections ? { maxConnections } : {},
			...required ? { required } : {}
		};
	});
}
function checkOverlap(node1, node2) {
	return !(node1.x + node1.width <= node2.x || node2.x + node2.width <= node1.x || node1.y + node1.height <= node2.y || node2.y + node2.height <= node1.y);
}
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
var import_get = /* @__PURE__ */ __toESM(require_get());
const useNodeCreatorStore = defineStore(STORES.NODE_CREATOR, () => {
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
	const allNodeCreatorNodes = computed(() => Object.values(mergedNodes.value).map((i) => transformNodeType(i)));
	const workflowObject = computed(() => workflowsStore.workflowObject);
	function setMergeNodes(nodes) {
		mergedNodes.value = nodes;
	}
	function removeNodeFromMergedNodes(nodeName) {
		mergedNodes.value = mergedNodes.value.filter((n) => n.name !== nodeName);
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
	function openSelectiveNodeCreator({ connectionType, node, creatorView, connectionIndex = 0 }) {
		const nodeName = node ?? ndvStore.activeNodeName;
		const nodeData = nodeName ? workflowsStore.getNodeByName(nodeName) : null;
		ndvStore.unsetActiveNodeName();
		setTimeout(() => {
			if (creatorView) setNodeCreatorState({
				createNodeActive: true,
				nodeCreatorView: creatorView,
				connectionType
			});
			else if (connectionType && nodeData) openNodeCreatorForConnectingNode({
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
	function setNodeCreatorState({ source, createNodeActive, nodeCreatorView, connectionType }) {
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
	function openNodeCreatorForConnectingNode({ connection, eventSource, nodeCreatorView }) {
		const sourceNode = workflowsStore.getNodeById(connection.source);
		if (!sourceNode) return;
		const { type, mode } = parseCanvasConnectionHandleString(connection.sourceHandle);
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
		setNodeCreatorState({ createNodeActive: true });
		await nextTick();
		const nodeActions = actions.value[nodeType.name];
		const viewStack = prepareCommunityNodeDetailsViewStack({
			key: nodeType.name,
			properties: nodeType,
			type: "node",
			subcategory: "*"
		}, getNodeIconSource(nodeType.name), "Regular", nodeActions ?? []);
		useViewStacks().pushViewStack(viewStack, { resetStacks: true });
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
		const actionNode = allNodeCreatorNodes.value.find((i) => i.key === node);
		if (!actionNode) return;
		const transformedActions = actions.value[actionNode.key]?.map((a) => transformNodeType(a, actionNode.properties.displayName, "action"));
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
			}, { resetStacks: true });
		});
	}
	function getNodeCreatorFilter(nodeName, outputType) {
		let filter;
		const workflowNode = workflowObject.value.getNode(nodeName);
		if (!workflowNode) return { nodes: [] };
		const nodeType = nodeTypesStore.getNodeType(workflowNode?.type, workflowNode.typeVersion) ?? nodeTypesStore.communityNodeType(workflowNode?.type)?.nodeDescription;
		if (nodeType) {
			const filterFound = getNodeInputs(workflowObject.value, workflowNode, nodeType).filter((input) => {
				if (typeof input === "string" || input.type !== outputType || !input.filter) return false;
				return true;
			});
			if (filterFound.length) filter = filterFound[0].filter;
		}
		return filter;
	}
	function resetNodesPanelSession() {
		nodePanelSessionId.value = `nodes_panel_session_${(/* @__PURE__ */ new Date()).valueOf()}`;
	}
	function trackNodeCreatorEvent(event, properties = {}) {
		telemetry.track(event, {
			...properties,
			nodes_panel_session_id: nodePanelSessionId.value
		});
	}
	function onCreatorOpened({ source, mode, connectionType, workflow_id }) {
		resetNodesPanelSession();
		trackNodeCreatorEvent("User opened nodes panel", {
			source,
			mode,
			connectionType,
			workflow_id
		});
	}
	function onNodeFilterChanged({ newValue, filteredNodes, filterMode, subcategory, title }) {
		if (!newValue.length) return;
		const { results_count, trigger_count, regular_count, community_count } = filteredNodes.reduce((accu, node) => {
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
});
export { useCalloutHelpers as _, mapCanvasConnectionToLegacyConnection as a, mapLegacyEndpointsToCanvasConnectionPort as c, useViewStacks as d, useKeyboardNavigation as f, TriggerView as g, RegularView as h, insertSpacersBetweenEndpoints as i, parseCanvasConnectionHandleString as l, AIView as m, checkOverlap as n, mapLegacyConnectionToCanvasConnection as o, AINodesView as p, createCanvasConnectionHandleString as r, mapLegacyConnectionsToCanvasConnections as s, useNodeCreatorStore as t, shouldIgnoreCanvasShortcut as u, require_camelCase as v, require_capitalize as y };
