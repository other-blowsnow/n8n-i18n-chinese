import { o as __toESM, t as __commonJSMin } from "./chunk-CC9Q-vWm.js";
import { Ft as ref, S as computed, W as nextTick } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { at as useI18n } from "./core-C2YcDNFD.js";
import { Ct as createEventBus } from "./src-_SF6v8wU.js";
import { a as require_toString, o as require__arrayMap, t as require_get } from "./get-Den8eczo.js";
import { $t as createWorkflowDocumentId, A as getAiTemplatesCallout, B as searchNodes, E as useEvaluationStore, Ei as getThemedValue, H as sortNodeCreateElements, I as mapToolSubcategoryIcon, L as nodeTypesToCreateElements, Mn as isVueFlowConnection, N as groupItemsInSections, O as finalizeItems, P as isAINode, Pn as CanvasConnectionMode, Qt as useNDVStore, R as prepareCommunityNodeDetailsViewStack, U as subcategorizeItems, W as transformNodeType, dn as useCanvasStore, k as flattenCreateElements, nn as useWorkflowDocumentStore, nt as require_upperFirst, qt as useTelemetry, r as useUIStore, s as useWorkflowsStore, w as useNodeTypesStore } from "./users.store-BgtmQtHf.js";
import { $ as AI_CATEGORY_TOOLS, B as AI_CATEGORY_AGENTS, Dt as AI_TRANSFORM_NODE_TYPE, G as AI_CATEGORY_LANGUAGE_MODELS, Ga as require__createCompounder, Gt as DATETIME_NODE_TYPE, H as AI_CATEGORY_DOCUMENT_LOADERS, Ht as CRYPTO_NODE_TYPE, Io as isHitlToolType, It as CODE_NODE_TYPE, Jn as SCHEDULE_TRIGGER_NODE_TYPE, Kn as RSS_READ_NODE_TYPE, Lt as COMPRESSION_NODE_TYPE, Ma as require__baseFlatten, Pt as CHAT_TRIGGER_NODE_TYPE, Q as AI_CATEGORY_TEXT_SPLITTERS, Rs as EVALUATION_TRIGGER_NODE_TYPE, Rt as CONVERT_TO_FILE_NODE_TYPE, Sn as MARKDOWN_NODE_TYPE, To as getNodeInputs, U as AI_CATEGORY_EMBEDDING, V as AI_CATEGORY_CHAINS, Wn as REMOVE_DUPLICATES_NODE_TYPE, Wt as DATA_TABLE_NODE_TYPE, X as AI_CATEGORY_RETRIEVERS, Xs as v4, Xt as EMAIL_SEND_NODE_TYPE, Y as AI_CATEGORY_OUTPUTPARSER, Yt as EMAIL_IMAP_NODE_TYPE, Z as AI_CATEGORY_ROOT_NODES, Zn as SET_NODE_TYPE, _t as REGULAR_NODE_CREATOR_VIEW, an as FORM_TRIGGER_NODE_TYPE, ao as require__arrayIncludesWith, as as isCommunityPackageName, at as AI_UNCATEGORIZED_CATEGORY, bt as TRANSFORM_DATA_SUBCATEGORY, cn as HTML_NODE_TYPE, ct as CORE_NODES_CATEGORY, dt as HITL_SUBCATEGORY, et as AI_CATEGORY_VECTOR_STORES, fn as IF_NODE_TYPE, ft as HUMAN_IN_THE_LOOP_CATEGORY, ht as OTHER_TRIGGER_NODES_SUBCATEGORY, ln as HTTP_REQUEST_NODE_TYPE, lt as FLOWS_CONTROL_SUBCATEGORY, mt as NODE_CREATOR_OPEN_SOURCES, nc as require__cacheHas, nn as EXTRACT_FROM_FILE_NODE_TYPE, nr as SPLIT_IN_BATCHES_NODE_TYPE, oo as require__arrayIncludes, or as SUMMARIZE_NODE_TYPE, ot as AI_WORKFLOW_TOOL_LANGCHAIN_NODE_TYPE, pr as WEBHOOK_NODE_TYPE, pt as NEW_TOOL_CATEGORIES, q as AI_CATEGORY_MEMORY, qt as EDIT_IMAGE_NODE_TYPE, rc as require__SetCache, rn as FILTER_NODE_TYPE, rr as SPLIT_OUT_NODE_TYPE, rt as AI_OTHERS_NODE_CREATOR_VIEW, tn as EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE, tt as AI_CODE_TOOL_LANGCHAIN_NODE_TYPE, ut as HELPERS_SUBCATEGORY, vn as LIMIT_NODE_TYPE, wn as MERGE_NODE_TYPE, ws as NodeConnectionTypes, wt as AGGREGATE_NODE_TYPE, xn as MANUAL_TRIGGER_NODE_TYPE, xt as TRIGGER_NODE_CREATOR_VIEW, yr as XML_NODE_TYPE, yt as TEMPLATE_CATEGORY_AI } from "./constants-ixIyBnRU.js";
import { E as require__baseUnary, d as require_isArrayLikeObject, r as require__baseRest } from "./merge-yNpRmDfK.js";
import { T as defineStore } from "./useRootStore-Cj92_BSw.js";
import { In as STORES, t as useSettingsStore } from "./settings.store-VsmHBYo6.js";
import { t as useExternalHooks } from "./useExternalHooks-Di-unYAa.js";
import { t as useTemplatesStore } from "./templates.store-DLFiL_Up.js";
import { n as getNodeIconSource } from "./nodeIcon-Ckzc6Ye7.js";
import { c as parseCanvasConnectionHandleString, n as createCanvasConnectionHandleString } from "./canvas.utils-B4Ekmbr_.js";
//#region src/features/shared/nodeCreator/composables/useGetNodeCreatorFilter.ts
function useGetNodeCreatorFilter() {
	const workflowStore = useWorkflowsStore();
	const nodeTypesStore = useNodeTypesStore();
	const workflowDocumentStore = computed(() => useWorkflowDocumentStore(createWorkflowDocumentId(workflowStore.workflowId)));
	function getNodeCreatorFilter(nodeName, outputType, sourceNode) {
		let filter;
		const workflowNode = workflowDocumentStore.value.getNodeByName(nodeName);
		if (!workflowNode) return { nodes: [] };
		const nodeType = nodeTypesStore.getNodeType(workflowNode?.type, workflowNode.typeVersion) ?? nodeTypesStore.communityNodeType(workflowNode?.type)?.nodeDescription;
		const expression = workflowDocumentStore.value.getExpressionHandler();
		if (nodeType && expression) {
			const filterFound = getNodeInputs({ expression }, workflowNode, nodeType).filter((input) => {
				if (typeof input === "string" || input.type !== outputType || !input.filter) return false;
				return true;
			});
			if (filterFound.length) filter = filterFound[0].filter;
		}
		if (outputType === NodeConnectionTypes.AiTool) {
			const isConnectionToAgent = sourceNode.type === "@n8n/n8n-nodes-langchain.agent" || sourceNode.type === "@n8n/n8n-nodes-langchain.agentTool";
			const conditions = [(node) => isConnectionToAgent ? true : !isHitlToolType(node.key)];
			filter = {
				...filter,
				conditions
			};
		}
		return filter;
	}
	return { getNodeCreatorFilter };
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseDifference.js
var require__baseDifference = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var SetCache = require__SetCache(), arrayIncludes = require__arrayIncludes(), arrayIncludesWith = require__arrayIncludesWith(), arrayMap = require__arrayMap(), baseUnary = require__baseUnary(), cacheHas = require__cacheHas();
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
	function baseDifference(array, values, iteratee, comparator) {
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
			var value = array[index], computed = iteratee == null ? value : iteratee(value);
			value = comparator || value !== 0 ? value : 0;
			if (isCommon && computed === computed) {
				var valuesIndex = valuesLength;
				while (valuesIndex--) if (values[valuesIndex] === computed) continue outer;
				result.push(value);
			} else if (!includes(values, computed, comparator)) result.push(value);
		}
		return result;
	}
	module.exports = baseDifference;
}));
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/difference.js
var require_difference = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseDifference = require__baseDifference(), baseFlatten = require__baseFlatten(), baseRest = require__baseRest(), isArrayLikeObject = require_isArrayLikeObject();
	module.exports = baseRest(function(array, values) {
		return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
	});
}));
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/capitalize.js
var require_capitalize = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var toString = require_toString(), upperFirst = require_upperFirst();
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
	function capitalize(string) {
		return upperFirst(toString(string).toLowerCase());
	}
	module.exports = capitalize;
}));
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/camelCase.js
var require_camelCase = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var capitalize = require_capitalize();
	module.exports = require__createCompounder()(function(result, word, index) {
		word = word.toLowerCase();
		return result + (index ? capitalize(word) : word);
	});
}));
//#endregion
//#region src/features/shared/nodeCreator/views/viewsData.ts
var import_camelCase = /* @__PURE__ */ __toESM(require_camelCase(), 1);
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
	const isEvaluationEnabled = useEvaluationStore().isEvaluationEnabled;
	const evaluationNode = getEvaluationNode(nodeTypesStore, isEvaluationEnabled);
	const chainNodes = getAiNodesBySubcategory(nodeTypesStore.allLatestNodeTypes, AI_CATEGORY_CHAINS);
	const agentNodes = getAiNodesBySubcategory(nodeTypesStore.allLatestNodeTypes, AI_CATEGORY_AGENTS);
	const websiteCategoryURLParams = templatesStore.websiteTemplateRepositoryParameters;
	websiteCategoryURLParams.append("utm_user_role", "AdvancedAI");
	const aiTemplatesURL = templatesStore.constructTemplateRepositoryURL(websiteCategoryURLParams, TEMPLATE_CATEGORY_AI);
	const askAiEnabled = useSettingsStore().isAskAiEnabled;
	const aiTransformNode = nodeTypesStore.getNodeType(AI_TRANSFORM_NODE_TYPE);
	const transformNode = askAiEnabled && aiTransformNode ? [getNodeView(aiTransformNode)] : [];
	const callouts = [getAiTemplatesCallout(aiTemplatesURL)];
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
					icon: "node:webhook"
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
					icon: "node:form-trigger"
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
		DATA_TABLE_NODE_TYPE,
		DATETIME_NODE_TYPE,
		AI_TRANSFORM_NODE_TYPE
	];
	const getSendAndWaitNodes = (nodes) => {
		return (nodes ?? []).filter((node) => node.codex?.categories?.includes(HUMAN_IN_THE_LOOP_CATEGORY)).map((node) => node.name);
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
							CODE_NODE_TYPE,
							DATA_TABLE_NODE_TYPE
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
					icon: "badge-check",
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
function HitlToolView(nodes) {
	const i18n = useI18n();
	const hitlToolNodes = nodes.filter((node) => isHitlToolType(node.name)).map(getNodeView).sort((a, b) => a.properties.displayName.localeCompare(b.properties.displayName));
	return {
		value: HUMAN_IN_THE_LOOP_CATEGORY,
		title: i18n.baseText("nodeCreator.subcategoryNames.humanInTheLoop"),
		items: hitlToolNodes,
		nodeIcon: {
			type: "icon",
			name: "badge-check"
		}
	};
}
var WATCHED_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"Enter",
	"Escape"
];
var useKeyboardNavigation = defineStore("nodeCreatorKeyboardNavigation", () => {
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
//#endregion
//#region \0virtual:node-popularity-data
var _virtual_node_popularity_data_default = [
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
		"popularity": .928
	},
	{
		"id": "n8n-nodes-base.googleSheets",
		"popularity": .953
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGoogleGemini",
		"popularity": .911
	},
	{
		"id": "n8n-nodes-base.gmail",
		"popularity": .91
	},
	{
		"id": "n8n-nodes-base.telegram",
		"popularity": .902
	},
	{
		"id": "@n8n/n8n-nodes-langchain.openAi",
		"popularity": .882
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainLlm",
		"popularity": .868
	},
	{
		"id": "n8n-nodes-base.formTrigger",
		"popularity": .861
	},
	{
		"id": "n8n-nodes-base.switch",
		"popularity": .856
	},
	{
		"id": "n8n-nodes-base.wait",
		"popularity": .854
	},
	{
		"id": "n8n-nodes-base.splitInBatches",
		"popularity": .848
	},
	{
		"id": "n8n-nodes-base.merge",
		"popularity": .869
	},
	{
		"id": "n8n-nodes-base.filter",
		"popularity": .832
	},
	{
		"id": "n8n-nodes-base.googleDrive",
		"popularity": .851
	},
	{
		"id": "n8n-nodes-base.respondToWebhook",
		"popularity": .851
	},
	{
		"id": "n8n-nodes-base.splitOut",
		"popularity": .818
	},
	{
		"id": "@n8n/n8n-nodes-langchain.agentTool",
		"popularity": .813
	},
	{
		"id": "n8n-nodes-base.googleSheetsTool",
		"popularity": .847
	},
	{
		"id": "n8n-nodes-base.telegramTrigger",
		"popularity": .868
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAnthropic",
		"popularity": .807
	},
	{
		"id": "n8n-nodes-base.noOp",
		"popularity": .872
	},
	{
		"id": "n8n-nodes-base.gmailTrigger",
		"popularity": .801
	},
	{
		"id": "n8n-nodes-base.httpRequestTool",
		"popularity": .792
	},
	{
		"id": "n8n-nodes-base.readWriteFile",
		"popularity": .805
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGroq",
		"popularity": .815
	},
	{
		"id": "n8n-nodes-base.extractFromFile",
		"popularity": .807
	},
	{
		"id": "n8n-nodes-base.whatsAppTrigger",
		"popularity": .768
	},
	{
		"id": "n8n-nodes-base.gmailTool",
		"popularity": .77
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatDeepSeek",
		"popularity": .751
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatOpenRouter",
		"popularity": .826
	},
	{
		"id": "n8n-nodes-base.googleSheetsTrigger",
		"popularity": .774
	},
	{
		"id": "n8n-nodes-base.aggregate",
		"popularity": .79
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatOllama",
		"popularity": .798
	},
	{
		"id": "n8n-nodes-base.limit",
		"popularity": .754
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserStructured",
		"popularity": .793
	},
	{
		"id": "n8n-nodes-base.executeWorkflowTrigger",
		"popularity": .781
	},
	{
		"id": "n8n-nodes-base.emailSend",
		"popularity": .776
	},
	{
		"id": "@n8n/n8n-nodes-langchain.anthropic",
		"popularity": .753
	},
	{
		"id": "n8n-nodes-base.dataTable",
		"popularity": .825
	},
	{
		"id": "n8n-nodes-base.googleCalendarTool",
		"popularity": .765
	},
	{
		"id": "n8n-nodes-base.whatsApp",
		"popularity": .777
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chat",
		"popularity": .786
	},
	{
		"id": "n8n-nodes-base.executeWorkflow",
		"popularity": .794
	},
	{
		"id": "@n8n/n8n-nodes-langchain.mcpClientTool",
		"popularity": .724
	},
	{
		"id": "n8n-nodes-base.airtable",
		"popularity": .797
	},
	{
		"id": "n8n-nodes-base.slack",
		"popularity": .762
	},
	{
		"id": "n8n-nodes-base.convertToFile",
		"popularity": .772
	},
	{
		"id": "n8n-nodes-base.rssFeedRead",
		"popularity": .755
	},
	{
		"id": "n8n-nodes-base.postgres",
		"popularity": .815
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolCode",
		"popularity": .723
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryPostgresChat",
		"popularity": .733
	},
	{
		"id": "n8n-nodes-base.errorTrigger",
		"popularity": .685
	},
	{
		"id": "n8n-nodes-base.supabase",
		"popularity": .786
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsOpenAi",
		"popularity": .738
	},
	{
		"id": "@n8n/n8n-nodes-langchain.ollama",
		"popularity": .729
	},
	{
		"id": "n8n-nodes-base.googleDriveTrigger",
		"popularity": .725
	},
	{
		"id": "n8n-nodes-base.html",
		"popularity": .726
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolSerpApi",
		"popularity": .71
	},
	{
		"id": "n8n-nodes-base.microsoftOutlook",
		"popularity": .729
	},
	{
		"id": "@n8n/n8n-nodes-langchain.documentDefaultDataLoader",
		"popularity": .733
	},
	{
		"id": "@n8n/n8n-nodes-langchain.mcpTrigger",
		"popularity": .703
	},
	{
		"id": "n8n-nodes-base.gmailHitlTool",
		"popularity": .729
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textClassifier",
		"popularity": .702
	},
	{
		"id": "n8n-nodes-base.httpRequest",
		"popularity": .991
	},
	{
		"id": "n8n-nodes-base.googleCalendar",
		"popularity": .731
	},
	{
		"id": "n8n-nodes-base.code",
		"popularity": 1
	},
	{
		"id": "@n8n/n8n-nodes-langchain.informationExtractor",
		"popularity": .696
	},
	{
		"id": "n8n-nodes-base.googleDocs",
		"popularity": .739
	},
	{
		"id": "n8n-nodes-base.set",
		"popularity": .963
	},
	{
		"id": "n8n-nodes-base.emailReadImap",
		"popularity": .706
	},
	{
		"id": "n8n-nodes-base.form",
		"popularity": .715
	},
	{
		"id": "@n8n/n8n-nodes-langchain.agent",
		"popularity": .974
	},
	{
		"id": "n8n-nodes-base.webhook",
		"popularity": .938
	},
	{
		"id": "n8n-nodes-base.executionData",
		"popularity": .666
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chatTrigger",
		"popularity": .948
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryBufferWindow",
		"popularity": .919
	},
	{
		"id": "n8n-nodes-base.if",
		"popularity": .952
	},
	{
		"id": "n8n-nodes-base.scheduleTrigger",
		"popularity": .911
	},
	{
		"id": "@n8n/n8n-nodes-langchain.modelSelector",
		"popularity": .65
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsGoogleGemini",
		"popularity": .68
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatXAiGrok",
		"popularity": .658
	},
	{
		"id": "n8n-nodes-base.aiTransform",
		"popularity": .655
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserItemList",
		"popularity": .645
	},
	{
		"id": "n8n-nodes-base.removeDuplicates",
		"popularity": .648
	},
	{
		"id": "n8n-nodes-base.dateTime",
		"popularity": .665
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatMistralCloud",
		"popularity": .647
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryRedisChat",
		"popularity": .659
	},
	{
		"id": "n8n-nodes-base.evaluationTrigger",
		"popularity": .591
	},
	{
		"id": "n8n-nodes-base.dataTableTool",
		"popularity": .639
	},
	{
		"id": "n8n-nodes-base.googleDocsTool",
		"popularity": .664
	},
	{
		"id": "n8n-nodes-base.rssFeedReadTrigger",
		"popularity": .661
	},
	{
		"id": "n8n-nodes-base.ssh",
		"popularity": .676
	},
	{
		"id": "n8n-nodes-base.slackTrigger",
		"popularity": .652
	},
	{
		"id": "n8n-nodes-base.twilio",
		"popularity": .659
	},
	{
		"id": "n8n-nodes-base.openWeatherMap",
		"popularity": .635
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGoogleVertex",
		"popularity": .641
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainRetrievalQa",
		"popularity": .641
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWikipedia",
		"popularity": .645
	},
	{
		"id": "@n8n/n8n-nodes-langchain.mcpClient",
		"popularity": .643
	},
	{
		"id": "n8n-nodes-base.telegramTool",
		"popularity": .615
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter",
		"popularity": .651
	},
	{
		"id": "n8n-nodes-base.dateTimeTool",
		"popularity": .606
	},
	{
		"id": "n8n-nodes-base.microsoftOutlookTrigger",
		"popularity": .649
	},
	{
		"id": "n8n-nodes-base.facebookTrigger",
		"popularity": .621
	},
	{
		"id": "n8n-nodes-base.youTube",
		"popularity": .669
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryManager",
		"popularity": .637
	},
	{
		"id": "@apify/n8n-nodes-apify.apify",
		"popularity": .682
	},
	{
		"id": "n8n-nodes-base.executeCommand",
		"popularity": .684
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAzureOpenAi",
		"popularity": .646
	},
	{
		"id": "n8n-nodes-base.summarize",
		"popularity": .672
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStorePGVector",
		"popularity": .61
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolVectorStore",
		"popularity": .607
	},
	{
		"id": "n8n-nodes-base.googleDriveTool",
		"popularity": .652
	},
	{
		"id": "n8n-nodes-base.airtableTool",
		"popularity": .64
	},
	{
		"id": "n8n-nodes-base.postgresTool",
		"popularity": .609
	},
	{
		"id": "n8n-nodes-base.microsoftTeams",
		"popularity": .635
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryMongoDbChat",
		"popularity": .662
	},
	{
		"id": "n8n-nodes-base.linkedIn",
		"popularity": .645
	},
	{
		"id": "n8n-nodes-base.mySql",
		"popularity": .696
	},
	{
		"id": "n8n-nodes-base.redis",
		"popularity": .687
	},
	{
		"id": "n8n-nodes-base.markdown",
		"popularity": .63
	},
	{
		"id": "@n8n/n8n-nodes-langchain.sentimentAnalysis",
		"popularity": .583
	},
	{
		"id": "@tavily/n8n-nodes-tavily.tavily",
		"popularity": .56
	},
	{
		"id": "n8n-nodes-base.sort",
		"popularity": .625
	},
	{
		"id": "n8n-nodes-base.microsoftOneDrive",
		"popularity": .646
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolThink",
		"popularity": .613
	},
	{
		"id": "n8n-nodes-base.hubspot",
		"popularity": .652
	},
	{
		"id": "n8n-nodes-base.compareDatasets",
		"popularity": .579
	},
	{
		"id": "n8n-nodes-base.openWeatherMapTool",
		"popularity": .614
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStorePinecone",
		"popularity": .714
	},
	{
		"id": "n8n-nodes-base.editImage",
		"popularity": .607
	},
	{
		"id": "n8n-nodes-base.airtableTrigger",
		"popularity": .602
	},
	{
		"id": "n8n-nodes-base.xml",
		"popularity": .613
	},
	{
		"id": "n8n-nodes-base.jira",
		"popularity": .628
	},
	{
		"id": "n8n-nodes-base.whatsAppTool",
		"popularity": .541
	},
	{
		"id": "n8n-nodes-base.microsoftSharePoint",
		"popularity": .625
	},
	{
		"id": "n8n-nodes-base.notion",
		"popularity": .745
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreQdrant",
		"popularity": .633
	},
	{
		"id": "n8n-nodes-base.wordpress",
		"popularity": .602
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmOllama",
		"popularity": .657
	},
	{
		"id": "n8n-nodes-base.github",
		"popularity": .604
	},
	{
		"id": "n8n-nodes-base.crypto",
		"popularity": .577
	},
	{
		"id": "n8n-nodes-base.perplexity",
		"popularity": .503
	},
	{
		"id": "n8n-nodes-base.microsoftExcel",
		"popularity": .703
	},
	{
		"id": "@mookielianhd/n8n-nodes-instagram.instagram",
		"popularity": .595
	},
	{
		"id": "n8n-nodes-base.supabaseTool",
		"popularity": .621
	},
	{
		"id": "n8n-nodes-base.n8n",
		"popularity": .61
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainSummarization",
		"popularity": .554
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsOllama",
		"popularity": .643
	},
	{
		"id": "@elevenlabs/n8n-nodes-elevenlabs.elevenLabs",
		"popularity": .616
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolCalculator",
		"popularity": .678
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryMotorhead",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-base.stopAndError",
		"popularity": .667
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreInMemory",
		"popularity": .701
	},
	{
		"id": "n8n-nodes-base.facebookGraphApi",
		"popularity": .662
	},
	{
		"id": "n8n-nodes-base.ftp",
		"popularity": .58
	},
	{
		"id": "n8n-nodes-base.clickUp",
		"popularity": .617
	},
	{
		"id": "n8n-nodes-base.emailSendHitlTool",
		"popularity": .56
	},
	{
		"id": "n8n-nodes-base.facebookLeadAdsTrigger",
		"popularity": .562
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverVectorStore",
		"popularity": .568
	},
	{
		"id": "n8n-nodes-base.googleChat",
		"popularity": .569
	},
	{
		"id": "n8n-nodes-base.linkedInTool",
		"popularity": .563
	},
	{
		"id": "n8n-nodes-base.microsoftTeamsTrigger",
		"popularity": .528
	},
	{
		"id": "n8n-nodes-base.awsS3",
		"popularity": .541
	},
	{
		"id": "n8n-nodes-base.nasa",
		"popularity": .536
	},
	{
		"id": "@n8n/n8n-nodes-langchain.guardrails",
		"popularity": .567
	},
	{
		"id": "n8n-nodes-base.s3",
		"popularity": .557
	},
	{
		"id": "n8n-nodes-base.postgresTrigger",
		"popularity": .533
	},
	{
		"id": "n8n-nodes-base.salesforce",
		"popularity": .605
	},
	{
		"id": "n8n-nodes-base.pipedrive",
		"popularity": .583
	},
	{
		"id": "n8n-nodes-base.compression",
		"popularity": .553
	},
	{
		"id": "n8n-nodes-base.evaluation",
		"popularity": .57
	},
	{
		"id": "n8n-nodes-base.perplexityTool",
		"popularity": .547
	},
	{
		"id": "n8n-nodes-base.hubspotTrigger",
		"popularity": .527
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter",
		"popularity": .534
	},
	{
		"id": "n8n-nodes-base.twilioTrigger",
		"popularity": .536
	},
	{
		"id": "n8n-nodes-base.hackerNews",
		"popularity": .567
	},
	{
		"id": "n8n-nodes-base.line",
		"popularity": .551
	},
	{
		"id": "n8n-nodes-base.mondayCom",
		"popularity": .576
	},
	{
		"id": "n8n-nodes-base.googleSlides",
		"popularity": .515
	},
	{
		"id": "n8n-nodes-base.notionTool",
		"popularity": .581
	},
	{
		"id": "n8n-nodes-serpapi.serpApi",
		"popularity": .551
	},
	{
		"id": "n8n-nodes-base.googleChatHitlTool",
		"popularity": .497
	},
	{
		"id": "n8n-nodes-base.trello",
		"popularity": .567
	},
	{
		"id": "n8n-nodes-tallyforms.tallyTrigger",
		"popularity": .527
	},
	{
		"id": "n8n-nodes-base.googleContacts",
		"popularity": .505
	},
	{
		"id": "n8n-nodes-base.todoist",
		"popularity": .499
	},
	{
		"id": "n8n-nodes-base.googleCalendarTrigger",
		"popularity": .548
	},
	{
		"id": "n8n-nodes-base.mistralAi",
		"popularity": .53
	},
	{
		"id": "n8n-nodes-base.mongoDb",
		"popularity": .588
	},
	{
		"id": "n8n-nodes-base.twitter",
		"popularity": .577
	},
	{
		"id": "n8n-nodes-base.microsoftOneDriveTrigger",
		"popularity": .494
	},
	{
		"id": "n8n-nodes-cloudinary.cloudinary",
		"popularity": .508
	},
	{
		"id": "n8n-nodes-base.debugHelper",
		"popularity": .523
	},
	{
		"id": "n8n-nodes-base.calendlyTrigger",
		"popularity": .508
	},
	{
		"id": "n8n-nodes-base.renameKeys",
		"popularity": .508
	},
	{
		"id": "n8n-nodes-base.baserow",
		"popularity": .586
	},
	{
		"id": "n8n-nodes-base.asana",
		"popularity": .537
	},
	{
		"id": "n8n-nodes-base.calTrigger",
		"popularity": .526
	},
	{
		"id": "@brave/n8n-nodes-brave-search.braveSearch",
		"popularity": .51
	},
	{
		"id": "n8n-nodes-base.notionTrigger",
		"popularity": .571
	},
	{
		"id": "n8n-nodes-base.quickChart",
		"popularity": .49
	},
	{
		"id": "n8n-nodes-base.sendInBlue",
		"popularity": .536
	},
	{
		"id": "n8n-nodes-base.timeSaved",
		"popularity": .508
	},
	{
		"id": "n8n-nodes-base.microsoftSql",
		"popularity": .636
	},
	{
		"id": "n8n-nodes-base.googleTasks",
		"popularity": .503
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverContextualCompression",
		"popularity": .482
	},
	{
		"id": "n8n-nodes-base.jiraTool",
		"popularity": .527
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsCohere",
		"popularity": .513
	},
	{
		"id": "n8n-nodes-base.homeAssistant",
		"popularity": .51
	},
	{
		"id": "@searchapi/n8n-nodes-searchapi.searchApi",
		"popularity": .481
	},
	{
		"id": "n8n-nodes-cronlytic.cronlyticTrigger",
		"popularity": .385
	},
	{
		"id": "n8n-nodes-base.wooCommerce",
		"popularity": .517
	},
	{
		"id": "n8n-nodes-base.formIoTrigger",
		"popularity": .486
	},
	{
		"id": "n8n-nodes-base.marketstackTool",
		"popularity": .549
	},
	{
		"id": "n8n-nodes-pdfco.PDFco Api",
		"popularity": .48
	},
	{
		"id": "@blotato/n8n-nodes-blotato.blotato",
		"popularity": .522
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterTokenSplitter",
		"popularity": .468
	},
	{
		"id": "n8n-nodes-base.googleTasksTool",
		"popularity": .5
	},
	{
		"id": "n8n-nodes-base.zohoCrm",
		"popularity": .53
	},
	{
		"id": "n8n-nodes-qdrant.qdrant",
		"popularity": .526
	},
	{
		"id": "n8n-nodes-base.rssFeedReadTool",
		"popularity": .557
	},
	{
		"id": "n8n-nodes-base.postBin",
		"popularity": .529
	},
	{
		"id": "n8n-nodes-base.googleAds",
		"popularity": .496
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryXata",
		"popularity": .573
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAwsBedrock",
		"popularity": .582
	},
	{
		"id": "n8n-nodes-base.jiraTrigger",
		"popularity": .515
	},
	{
		"id": "n8n-nodes-base.hunter",
		"popularity": .463
	},
	{
		"id": "n8n-nodes-base.githubTool",
		"popularity": .507
	},
	{
		"id": "n8n-nodes-base.n8nTrainingCustomerDatastore",
		"popularity": .596
	},
	{
		"id": "@mendable/n8n-nodes-firecrawl.firecrawl",
		"popularity": .618
	},
	{
		"id": "n8n-nodes-base.microsoftExcelTool",
		"popularity": .569
	},
	{
		"id": "n8n-nodes-base.microsoftOutlookHitlTool",
		"popularity": .524
	},
	{
		"id": "@aotoki/n8n-nodes-line-messaging.lineMessaging",
		"popularity": .54
	},
	{
		"id": "n8n-nodes-base.highLevel",
		"popularity": .528
	},
	{
		"id": "@fal-ai/n8n-nodes-fal.falAi",
		"popularity": .438
	},
	{
		"id": "n8n-nodes-base.webflow",
		"popularity": .411
	},
	{
		"id": "n8n-nodes-base.awsDynamoDb",
		"popularity": .376
	},
	{
		"id": "n8n-nodes-base.mySqlTool",
		"popularity": .537
	},
	{
		"id": "n8n-nodes-base.matrix",
		"popularity": .435
	},
	{
		"id": "n8n-nodes-base.slackTool",
		"popularity": .505
	},
	{
		"id": "n8n-nodes-base.reddit",
		"popularity": .504
	},
	{
		"id": "n8n-nodes-base.emailSendTool",
		"popularity": .502
	},
	{
		"id": "n8n-nodes-base.dropbox",
		"popularity": .553
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatCohere",
		"popularity": .535
	},
	{
		"id": "@n8n/n8n-nodes-langchain.microsoftAgent365Trigger",
		"popularity": .404
	},
	{
		"id": "n8n-nodes-base.filemaker",
		"popularity": .488
	},
	{
		"id": "n8n-nodes-base.microsoftOutlookTool",
		"popularity": .535
	},
	{
		"id": "n8n-nodes-base.oracleDatabaseTool",
		"popularity": .421
	},
	{
		"id": "n8n-nodes-base.googleBigQuery",
		"popularity": .545
	},
	{
		"id": "n8n-nodes-base.sseTrigger",
		"popularity": .506
	},
	{
		"id": "n8n-nodes-base.awsLambda",
		"popularity": .408
	},
	{
		"id": "n8n-nodes-dataforseo.dataForSeo",
		"popularity": .408
	},
	{
		"id": "n8n-nodes-base.linearTrigger",
		"popularity": .374
	},
	{
		"id": "n8n-nodes-base.webflowTool",
		"popularity": .316
	},
	{
		"id": "n8n-nodes-base.coinGecko",
		"popularity": .361
	},
	{
		"id": "n8n-nodes-base.ldap",
		"popularity": .426
	},
	{
		"id": "n8n-nodes-base.agileCrm",
		"popularity": .367
	},
	{
		"id": "n8n-nodes-base.adalo",
		"popularity": .352
	},
	{
		"id": "n8n-nodes-base.nocoDbTool",
		"popularity": .366
	},
	{
		"id": "n8n-nodes-autocalls.autocalls",
		"popularity": .333
	},
	{
		"id": "n8n-nodes-base.bubble",
		"popularity": .405
	},
	{
		"id": "n8n-nodes-base.executeCommandTool",
		"popularity": .41
	},
	{
		"id": "n8n-nodes-base.pipedriveTool",
		"popularity": .398
	},
	{
		"id": "n8n-nodes-scrapingbee.ScrapingBee",
		"popularity": .32
	},
	{
		"id": "n8n-nodes-postiz.postiz",
		"popularity": .399
	},
	{
		"id": "@brightdata/n8n-nodes-brightdata.brightData",
		"popularity": .36
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsHuggingFaceInference",
		"popularity": .572
	},
	{
		"id": "n8n-nodes-base.affinity",
		"popularity": .357
	},
	{
		"id": "n8n-nodes-base.gitlabTool",
		"popularity": .362
	},
	{
		"id": "n8n-nodes-pdfmonkey.pdfMonkey",
		"popularity": .376
	},
	{
		"id": "n8n-nodes-postfast.postFast",
		"popularity": .318
	},
	{
		"id": "n8n-nodes-base.dropboxTool",
		"popularity": .356
	},
	{
		"id": "n8n-nodes-base.box",
		"popularity": .352
	},
	{
		"id": "n8n-nodes-base.cloudflare",
		"popularity": .344
	},
	{
		"id": "n8n-nodes-outscraper.outscraper",
		"popularity": .331
	},
	{
		"id": "n8n-nodes-base.mistralAiTool",
		"popularity": .346
	},
	{
		"id": "n8n-nodes-base.redditTool",
		"popularity": .361
	},
	{
		"id": "n8n-nodes-base.jinaAiTool",
		"popularity": .353
	},
	{
		"id": "n8n-nodes-base.awsTextract",
		"popularity": .35
	},
	{
		"id": "n8n-nodes-scrape-creators.scrapeCreators",
		"popularity": .368
	},
	{
		"id": "n8n-nodes-base.zendeskTrigger",
		"popularity": .394
	},
	{
		"id": "n8n-nodes-base.kafka",
		"popularity": .375
	},
	{
		"id": "n8n-nodes-base.nextCloudTool",
		"popularity": .371
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreZep",
		"popularity": .346
	},
	{
		"id": "n8n-nodes-base.vonage",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-aimlapi.aimlApi",
		"popularity": .302
	},
	{
		"id": "n8n-nodes-documentero.documentero",
		"popularity": .35
	},
	{
		"id": "n8n-nodes-base.googleAdsTool",
		"popularity": .369
	},
	{
		"id": "n8n-nodes-base.apiTemplateIo",
		"popularity": .364
	},
	{
		"id": "n8n-nodes-base.urlScanIo",
		"popularity": .33
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreMilvus",
		"popularity": .347
	},
	{
		"id": "n8n-nodes-base.emailReadImapTool",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-base.strava",
		"popularity": .398
	},
	{
		"id": "n8n-nodes-base.googleAnalyticsTool",
		"popularity": .356
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreRedis",
		"popularity": .387
	},
	{
		"id": "n8n-nodes-base.awsTranscribe",
		"popularity": .311
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreWeaviate",
		"popularity": .358
	},
	{
		"id": "@nskha/n8n-nodes-scrappey.scrappey",
		"popularity": .34
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsLemonade",
		"popularity": .316
	},
	{
		"id": "n8n-nodes-base.odoo",
		"popularity": .591
	},
	{
		"id": "n8n-nodes-base.awsSes",
		"popularity": .388
	},
	{
		"id": "n8n-nodes-base.nocoDb",
		"popularity": .583
	},
	{
		"id": "n8n-nodes-base.youTubeTool",
		"popularity": .505
	},
	{
		"id": "@n8n/n8n-nodes-langchain.rerankerCohere",
		"popularity": .511
	},
	{
		"id": "n8n-nodes-base.n8nTrigger",
		"popularity": .503
	},
	{
		"id": "n8n-nodes-base.humanticAiTool",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.typeformTrigger",
		"popularity": .535
	},
	{
		"id": "n8n-nodes-base.webflowTrigger",
		"popularity": .354
	},
	{
		"id": "n8n-nodes-base.baserowTool",
		"popularity": .366
	},
	{
		"id": "n8n-nodes-base.githubTrigger",
		"popularity": .521
	},
	{
		"id": "n8n-nodes-base.quickbooksTool",
		"popularity": .417
	},
	{
		"id": "n8n-nodes-base.nextCloud",
		"popularity": .537
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsMistralCloud",
		"popularity": .466
	},
	{
		"id": "n8n-nodes-base.pushover",
		"popularity": .49
	},
	{
		"id": "n8n-nodes-base.jwt",
		"popularity": .455
	},
	{
		"id": "n8n-nodes-base.pushoverTool",
		"popularity": .464
	},
	{
		"id": "n8n-nodes-base.wooCommerceTrigger",
		"popularity": .43
	},
	{
		"id": "n8n-nodes-base.sendGrid",
		"popularity": .454
	},
	{
		"id": "n8n-nodes-base.gitlab",
		"popularity": .457
	},
	{
		"id": "n8n-nodes-base.mqttTrigger",
		"popularity": .462
	},
	{
		"id": "n8n-nodes-base.microsoftSqlTool",
		"popularity": .479
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatLemonade",
		"popularity": .463
	},
	{
		"id": "n8n-nodes-base.microsoftTeamsHitlTool",
		"popularity": .433
	},
	{
		"id": "n8n-nodes-base.googleFirebaseCloudFirestore",
		"popularity": .507
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreAzureAISearch",
		"popularity": .414
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatVercelAiGateway",
		"popularity": .466
	},
	{
		"id": "n8n-nodes-base.trelloTrigger",
		"popularity": .451
	},
	{
		"id": "n8n-nodes-base.microsoftOneDriveTool",
		"popularity": .436
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverWorkflow",
		"popularity": .442
	},
	{
		"id": "n8n-nodes-base.googleTranslate",
		"popularity": .456
	},
	{
		"id": "n8n-nodes-base.oracleDatabase",
		"popularity": .488
	},
	{
		"id": "n8n-nodes-base.gitlabTrigger",
		"popularity": .448
	},
	{
		"id": "n8n-nodes-base.actionNetwork",
		"popularity": .458
	},
	{
		"id": "n8n-nodes-upload-post.uploadPost",
		"popularity": .481
	},
	{
		"id": "n8n-nodes-base.jinaAi",
		"popularity": .417
	},
	{
		"id": "n8n-nodes-base.microsoftTeamsTool",
		"popularity": .394
	},
	{
		"id": "@pdfgeneratorapi/n8n-nodes-pdf-generator-api.pdfGeneratorApi",
		"popularity": .36
	},
	{
		"id": "n8n-nodes-base.twilioTool",
		"popularity": .428
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolSearXng",
		"popularity": .482
	},
	{
		"id": "n8n-nodes-base.twitterTool",
		"popularity": .408
	},
	{
		"id": "n8n-nodes-base.salesforceTrigger",
		"popularity": .443
	},
	{
		"id": "n8n-nodes-base.mongoDbTool",
		"popularity": .437
	},
	{
		"id": "n8n-nodes-base.googleContactsTool",
		"popularity": .46
	},
	{
		"id": "n8n-nodes-base.spotify",
		"popularity": .488
	},
	{
		"id": "n8n-nodes-base.redisTool",
		"popularity": .415
	},
	{
		"id": "n8n-nodes-base.mqtt",
		"popularity": .425
	},
	{
		"id": "n8n-nodes-base.wordpressTool",
		"popularity": .446
	},
	{
		"id": "@cloudconvert/n8n-nodes-cloudconvert.cloudConvert",
		"popularity": .462
	},
	{
		"id": "n8n-nodes-google-search-console.googleSearchConsole",
		"popularity": .459
	},
	{
		"id": "n8n-nodes-base.redisTrigger",
		"popularity": .404
	},
	{
		"id": "n8n-nodes-base.zendesk",
		"popularity": .488
	},
	{
		"id": "n8n-nodes-base.mailgun",
		"popularity": .405
	},
	{
		"id": "n8n-nodes-base.airtop",
		"popularity": .458
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreMongoDBAtlas",
		"popularity": .438
	},
	{
		"id": "n8n-nodes-base.stripe",
		"popularity": .456
	},
	{
		"id": "n8n-nodes-base.shopifyTool",
		"popularity": .474
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmLemonade",
		"popularity": .454
	},
	{
		"id": "n8n-nodes-base.googleCloudStorage",
		"popularity": .444
	},
	{
		"id": "n8n-nodes-base.clickUpTool",
		"popularity": .423
	},
	{
		"id": "n8n-nodes-base.facebookGraphApiTool",
		"popularity": .459
	},
	{
		"id": "n8n-nodes-base.git",
		"popularity": .461
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfile",
		"popularity": .444
	},
	{
		"id": "@n8n/n8n-nodes-langchain.code",
		"popularity": .429
	},
	{
		"id": "n8n-nodes-base.clickUpTrigger",
		"popularity": .501
	},
	{
		"id": "n8n-nodes-base.googleAnalytics",
		"popularity": .477
	},
	{
		"id": "n8n-nodes-base.snowflake",
		"popularity": .503
	},
	{
		"id": "n8n-nodes-base.localFileTrigger",
		"popularity": .483
	},
	{
		"id": "n8n-nodes-base.philipsHueTool",
		"popularity": .515
	},
	{
		"id": "n8n-nodes-syncmate.whatsAuto",
		"popularity": .444
	},
	{
		"id": "n8n-nodes-base.dhl",
		"popularity": .377
	},
	{
		"id": "n8n-nodes-base.togglTrigger",
		"popularity": .447
	},
	{
		"id": "n8n-nodes-base.deepL",
		"popularity": .393
	},
	{
		"id": "n8n-nodes-base.microsoftSharePointTool",
		"popularity": .423
	},
	{
		"id": "n8n-nodes-aiscraper.aiScraper",
		"popularity": .426
	},
	{
		"id": "n8n-nodes-base.quickbooks",
		"popularity": .485
	},
	{
		"id": "n8n-nodes-base.graphql",
		"popularity": .475
	},
	{
		"id": "n8n-nodes-base.hubspotTool",
		"popularity": .447
	},
	{
		"id": "n8n-nodes-base.stripeTrigger",
		"popularity": .472
	},
	{
		"id": "n8n-nodes-powerbi.powerBi",
		"popularity": .449
	},
	{
		"id": "n8n-nodes-base.discordTool",
		"popularity": .477
	},
	{
		"id": "n8n-nodes-base.hackerNewsTool",
		"popularity": .407
	},
	{
		"id": "n8n-nodes-base.jotFormTrigger",
		"popularity": .484
	},
	{
		"id": "n8n-nodes-base.totp",
		"popularity": .382
	},
	{
		"id": "n8n-nodes-base.zoom",
		"popularity": .441
	},
	{
		"id": "n8n-nodes-pdf4me.PDF4me",
		"popularity": .425
	},
	{
		"id": "n8n-nodes-base.activeCampaign",
		"popularity": .476
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsAzureOpenAi",
		"popularity": .458
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverMultiQuery",
		"popularity": .451
	},
	{
		"id": "n8n-nodes-base.elasticsearch",
		"popularity": .387
	},
	{
		"id": "n8n-nodes-base.cryptoTool",
		"popularity": .268
	},
	{
		"id": "n8n-nodes-base.freshdesk",
		"popularity": .41
	},
	{
		"id": "n8n-nodes-base.trelloTool",
		"popularity": .424
	},
	{
		"id": "n8n-nodes-base.metabase",
		"popularity": .428
	},
	{
		"id": "n8n-nodes-base.actionNetworkTool",
		"popularity": .302
	},
	{
		"id": "n8n-nodes-linkupapi.linkup",
		"popularity": .388
	},
	{
		"id": "n8n-nodes-base.spotifyTool",
		"popularity": .44
	},
	{
		"id": "n8n-nodes-avatartalk.avatarTalk",
		"popularity": .308
	},
	{
		"id": "n8n-nodes-pdfvector.pdfVector",
		"popularity": .35
	},
	{
		"id": "n8n-nodes-base.erpNext",
		"popularity": .398
	},
	{
		"id": "n8n-nodes-docugenerate.docuGenerate",
		"popularity": .272
	},
	{
		"id": "n8n-nodes-browseract.browserAct",
		"popularity": .345
	},
	{
		"id": "n8n-nodes-base.highLevelTool",
		"popularity": .396
	},
	{
		"id": "n8n-nodes-base.grafana",
		"popularity": .362
	},
	{
		"id": "n8n-nodes-base.microsoftToDo",
		"popularity": .419
	},
	{
		"id": "n8n-nodes-base.wooCommerceTool",
		"popularity": .411
	},
	{
		"id": "n8n-nodes-base.mailchimp",
		"popularity": .427
	},
	{
		"id": "n8n-nodes-instantly.instantly",
		"popularity": .45
	},
	{
		"id": "n8n-nodes-base.phantombuster",
		"popularity": .439
	},
	{
		"id": "n8n-nodes-assemblyai.assemblyAi",
		"popularity": .449
	},
	{
		"id": "n8n-nodes-base.salesforceTool",
		"popularity": .402
	},
	{
		"id": "n8n-nodes-base.googleSlidesTool",
		"popularity": .379
	},
	{
		"id": "n8n-nodes-llmlayer.llmLayer",
		"popularity": .318
	},
	{
		"id": "n8n-nodes-base.zohoCrmTool",
		"popularity": .366
	},
	{
		"id": "n8n-nodes-base.xero",
		"popularity": .412
	},
	{
		"id": "n8n-nodes-base.rocketchat",
		"popularity": .366
	},
	{
		"id": "n8n-nodes-veed.veed",
		"popularity": .344
	},
	{
		"id": "n8n-nodes-base.bitbucketTrigger",
		"popularity": .379
	},
	{
		"id": "n8n-nodes-base.pipedriveTrigger",
		"popularity": .394
	},
	{
		"id": "n8n-nodes-base.odooTool",
		"popularity": .438
	},
	{
		"id": "n8n-nodes-base.asanaTrigger",
		"popularity": .415
	},
	{
		"id": "n8n-nodes-base.airtopTool",
		"popularity": .368
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmCohere",
		"popularity": .391
	},
	{
		"id": "n8n-nodes-base.formstackTrigger",
		"popularity": .377
	},
	{
		"id": "n8n-nodes-base.quickChartTool",
		"popularity": .325
	},
	{
		"id": "n8n-nodes-base.azureStorage",
		"popularity": .412
	},
	{
		"id": "n8n-nodes-base.customerIoTool",
		"popularity": .402
	},
	{
		"id": "n8n-nodes-base.serviceNow",
		"popularity": .427
	},
	{
		"id": "n8n-nodes-base.messageBird",
		"popularity": .345
	},
	{
		"id": "n8n-nodes-base.microsoftGraphSecurityTool",
		"popularity": .244
	},
	{
		"id": "n8n-nodes-base.acuitySchedulingTrigger",
		"popularity": .398
	},
	{
		"id": "n8n-nodes-base.gSuiteAdmin",
		"popularity": .43
	},
	{
		"id": "n8n-nodes-browserbase.browserbase",
		"popularity": .42
	},
	{
		"id": "n8n-nodes-base.rabbitmqTrigger",
		"popularity": .409
	},
	{
		"id": "@2chat/n8n-nodes-twochat.twoChat",
		"popularity": .367
	},
	{
		"id": "n8n-nodes-base.rabbitmq",
		"popularity": .421
	},
	{
		"id": "n8n-nodes-base.microsoftToDoTool",
		"popularity": .335
	},
	{
		"id": "n8n-nodes-ticktick.tickTick",
		"popularity": .37
	},
	{
		"id": "n8n-nodes-base.gotify",
		"popularity": .378
	},
	{
		"id": "n8n-nodes-base.todoistTool",
		"popularity": .416
	},
	{
		"id": "n8n-nodes-base.googleBigQueryTool",
		"popularity": .356
	},
	{
		"id": "n8n-nodes-base.payPal",
		"popularity": .311
	},
	{
		"id": "n8n-nodes-base.stravaTrigger",
		"popularity": .357
	},
	{
		"id": "n8n-nodes-anchorbrowser.anchorBrowser",
		"popularity": .312
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfileTrigger",
		"popularity": .386
	},
	{
		"id": "n8n-nodes-base.googleTranslateTool",
		"popularity": .378
	},
	{
		"id": "n8n-nodes-base.figmaTrigger",
		"popularity": .375
	},
	{
		"id": "n8n-nodes-botnoi-voice.botnoitts",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.grist",
		"popularity": .385
	},
	{
		"id": "n8n-nodes-olostep.olostepScrape",
		"popularity": .285
	},
	{
		"id": "n8n-nodes-base.microsoftEntra",
		"popularity": .414
	},
	{
		"id": "n8n-nodes-base.lineTool",
		"popularity": .325
	},
	{
		"id": "n8n-nodes-base.googleChatTool",
		"popularity": .362
	},
	{
		"id": "n8n-nodes-base.mailerLite",
		"popularity": .37
	},
	{
		"id": "n8n-nodes-base.seaTable",
		"popularity": .419
	},
	{
		"id": "n8n-nodes-get-transcribe.getTranscribe",
		"popularity": .285
	},
	{
		"id": "n8n-nodes-htmlcsstoimage.htmlCssToImage",
		"popularity": .427
	},
	{
		"id": "n8n-nodes-base.gong",
		"popularity": .333
	},
	{
		"id": "n8n-nodes-base.travisCiTool",
		"popularity": .216
	},
	{
		"id": "@apify/n8n-nodes-apify.apifyTrigger",
		"popularity": .4
	},
	{
		"id": "n8n-nodes-base.googleCloudNaturalLanguageTool",
		"popularity": .289
	},
	{
		"id": "n8n-nodes-base.elasticsearchTool",
		"popularity": .315
	},
	{
		"id": "@firefliesai/n8n-nodes-fireflies.fireflies",
		"popularity": .423
	},
	{
		"id": "@videodb/n8n-nodes-videodb.videoDb",
		"popularity": .287
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsAwsBedrock",
		"popularity": .414
	},
	{
		"id": "n8n-nodes-base.linear",
		"popularity": .443
	},
	{
		"id": "n8n-nodes-base.microsoftEntraTool",
		"popularity": .254
	},
	{
		"id": "n8n-nodes-base.medium",
		"popularity": .323
	},
	{
		"id": "n8n-nodes-base.jenkins",
		"popularity": .345
	},
	{
		"id": "n8n-nodes-base.splunk",
		"popularity": .318
	},
	{
		"id": "n8n-nodes-base.ciscoWebex",
		"popularity": .3
	},
	{
		"id": "n8n-nodes-base.mailjet",
		"popularity": .347
	},
	{
		"id": "@razorpay/n8n-nodes-razorpay.razorpay",
		"popularity": .305
	},
	{
		"id": "n8n-nodes-base.cloudflareTool",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-wpforms.wpformsTrigger",
		"popularity": .265
	},
	{
		"id": "n8n-nodes-softr.softr",
		"popularity": .346
	},
	{
		"id": "n8n-nodes-base.affinityTool",
		"popularity": .244
	},
	{
		"id": "n8n-nodes-base.strapi",
		"popularity": .291
	},
	{
		"id": "n8n-nodes-base.asanaTool",
		"popularity": .357
	},
	{
		"id": "n8n-nodes-base.getResponseTool",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-sourcegeek.sourcegeek",
		"popularity": .293
	},
	{
		"id": "n8n-nodes-base.nasaTool",
		"popularity": .221
	},
	{
		"id": "n8n-nodes-tmpfiles.tmpfiles",
		"popularity": .26
	},
	{
		"id": "n8n-nodes-base.phantombusterTool",
		"popularity": .257
	},
	{
		"id": "n8n-nodes-base.sms77",
		"popularity": .244
	},
	{
		"id": "n8n-nodes-base.freshserviceTool",
		"popularity": .281
	},
	{
		"id": "@urlbox/n8n-nodes-urlbox.urlbox",
		"popularity": .179
	},
	{
		"id": "n8n-nodes-base.convertKit",
		"popularity": .343
	},
	{
		"id": "n8n-nodes-base.metabaseTool",
		"popularity": .287
	},
	{
		"id": "n8n-nodes-fullenrich.fullEnrich",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-base.snowflakeTool",
		"popularity": .329
	},
	{
		"id": "n8n-nodes-base.amqp",
		"popularity": .275
	},
	{
		"id": "n8n-nodes-base.bitly",
		"popularity": .248
	},
	{
		"id": "@respond-io/n8n-nodes-respond-io.respondio",
		"popularity": .453
	},
	{
		"id": "n8n-nodes-base.convertKitTool",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-base.googleFirebaseRealtimeDatabaseTool",
		"popularity": .312
	},
	{
		"id": "n8n-nodes-base.stravaTool",
		"popularity": .281
	},
	{
		"id": "n8n-nodes-base.graphqlTool",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-scrapegraphai.scrapegraphAi",
		"popularity": .3
	},
	{
		"id": "n8n-nodes-verifiemail.verifiEmail",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-base.dhlTool",
		"popularity": .221
	},
	{
		"id": "n8n-nodes-base.awsSnsTrigger",
		"popularity": .237
	},
	{
		"id": "n8n-nodes-base.invoiceNinjaTool",
		"popularity": .229
	},
	{
		"id": "n8n-nodes-base.awsTextractTool",
		"popularity": .27
	},
	{
		"id": "n8n-nodes-base.eventbriteTrigger",
		"popularity": .332
	},
	{
		"id": "n8n-nodes-base.pushbullet",
		"popularity": .265
	},
	{
		"id": "n8n-nodes-vikunja.vikunja",
		"popularity": .361
	},
	{
		"id": "n8n-nodes-pdforge.pdforge",
		"popularity": .283
	},
	{
		"id": "n8n-nodes-base.zammad",
		"popularity": .403
	},
	{
		"id": "n8n-nodes-base.npm",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.okta",
		"popularity": .308
	},
	{
		"id": "n8n-nodes-base.amqpTrigger",
		"popularity": .277
	},
	{
		"id": "n8n-nodes-base.ghost",
		"popularity": .328
	},
	{
		"id": "@servicem8/n8n-nodes-servicem8.serviceM8",
		"popularity": .389
	},
	{
		"id": "n8n-nodes-base.azureCosmosDb",
		"popularity": .305
	},
	{
		"id": "n8n-nodes-base.bannerbear",
		"popularity": .352
	},
	{
		"id": "n8n-nodes-unstract.llmWhisperer",
		"popularity": .305
	},
	{
		"id": "n8n-nodes-onenote.onenote",
		"popularity": .308
	},
	{
		"id": "n8n-nodes-base.hunterTool",
		"popularity": .26
	},
	{
		"id": "n8n-nodes-base.googleFirebaseCloudFirestoreTool",
		"popularity": .305
	},
	{
		"id": "n8n-nodes-placid.placid",
		"popularity": .33
	},
	{
		"id": "n8n-nodes-base.lemlistTrigger",
		"popularity": .285
	},
	{
		"id": "n8n-nodes-zohozeptomail.zohoZeptomail",
		"popularity": .354
	},
	{
		"id": "n8n-nodes-templated.templated",
		"popularity": .285
	},
	{
		"id": "n8n-nodes-base.microsoftDynamicsCrmTool",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.compressionTool",
		"popularity": .241
	},
	{
		"id": "n8n-nodes-triggercmd.triggercmd",
		"popularity": .352
	},
	{
		"id": "@cloudsway-ai/n8n-nodes-cloudsway.smartSearch",
		"popularity": .302
	},
	{
		"id": "n8n-nodes-screenshotbase.screenshotBase",
		"popularity": .206
	},
	{
		"id": "n8n-nodes-base.affinityTrigger",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-base.wise",
		"popularity": .275
	},
	{
		"id": "n8n-nodes-base.sendInBlueTool",
		"popularity": .297
	},
	{
		"id": "n8n-nodes-base.sendInBlueTrigger",
		"popularity": .3
	},
	{
		"id": "n8n-nodes-base.lemlist",
		"popularity": .355
	},
	{
		"id": "n8n-nodes-base.mailchimpTrigger",
		"popularity": .277
	},
	{
		"id": "n8n-nodes-base.postHog",
		"popularity": .277
	},
	{
		"id": "n8n-nodes-base.awsS3Tool",
		"popularity": .308
	},
	{
		"id": "n8n-nodes-human-in-the-loop.hitlNode",
		"popularity": .395
	},
	{
		"id": "n8n-nodes-base.googleCloudNaturalLanguage",
		"popularity": .26
	},
	{
		"id": "n8n-nodes-base.customerIo",
		"popularity": .265
	},
	{
		"id": "n8n-nodes-base.mailchimpTool",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-base.mautic",
		"popularity": .401
	},
	{
		"id": "n8n-nodes-base.serviceNowTool",
		"popularity": .285
	},
	{
		"id": "n8n-nodes-base.bambooHr",
		"popularity": .329
	},
	{
		"id": "n8n-nodes-base.googleFirebaseRealtimeDatabase",
		"popularity": .335
	},
	{
		"id": "n8n-nodes-chat-data.chatData",
		"popularity": .308
	},
	{
		"id": "n8n-nodes-base.getResponse",
		"popularity": .32
	},
	{
		"id": "n8n-nodes-base.magento2",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.stripeTool",
		"popularity": .329
	},
	{
		"id": "n8n-nodes-base.ciscoWebexTool",
		"popularity": .194
	},
	{
		"id": "n8n-nodes-base.contentfulTool",
		"popularity": .187
	},
	{
		"id": "n8n-nodes-base.intercom",
		"popularity": .333
	},
	{
		"id": "@lusha-org/n8n-nodes-lusha.lusha",
		"popularity": .316
	},
	{
		"id": "n8n-nodes-base.activeCampaignTool",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.flow",
		"popularity": .336
	},
	{
		"id": "n8n-nodes-base.coinGeckoTool",
		"popularity": .277
	},
	{
		"id": "n8n-nodes-exa-official.exa",
		"popularity": .336
	},
	{
		"id": "n8n-nodes-base.misp",
		"popularity": .289
	},
	{
		"id": "n8n-nodes-base.gitTool",
		"popularity": .329
	},
	{
		"id": "n8n-nodes-base.xeroTool",
		"popularity": .27
	},
	{
		"id": "n8n-nodes-base.zammadTool",
		"popularity": .303
	},
	{
		"id": "n8n-nodes-base.linearTool",
		"popularity": .325
	},
	{
		"id": "n8n-nodes-heyreach.heyReach",
		"popularity": .386
	},
	{
		"id": "n8n-nodes-base.messageBirdTool",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.clockify",
		"popularity": .335
	},
	{
		"id": "n8n-nodes-base.mondayComTool",
		"popularity": .339
	},
	{
		"id": "n8n-nodes-base.marketstack",
		"popularity": .338
	},
	{
		"id": "@infobip/n8n-nodes-infobip-api.infobipApi",
		"popularity": .187
	},
	{
		"id": "n8n-nodes-late.late",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-base.bitwarden",
		"popularity": .297
	},
	{
		"id": "n8n-nodes-base.mindee",
		"popularity": .311
	},
	{
		"id": "n8n-nodes-supadata.supadata",
		"popularity": .358
	},
	{
		"id": "n8n-nodes-base.googleBooksTool",
		"popularity": .211
	},
	{
		"id": "@docuseal/n8n-nodes-docuseal.docuseal",
		"popularity": .285
	},
	{
		"id": "n8n-nodes-base.freshservice",
		"popularity": .334
	},
	{
		"id": "n8n-nodes-nimbasms.nimbaSMS",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfileTool",
		"popularity": .297
	},
	{
		"id": "n8n-nodes-oxylabs-ai-studio.oxylabsAiStudio",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.awsSqs",
		"popularity": .293
	},
	{
		"id": "n8n-nodes-base.microsoftDynamicsCrm",
		"popularity": .322
	},
	{
		"id": "n8n-nodes-base.seaTableTool",
		"popularity": .237
	},
	{
		"id": "n8n-nodes-base.ciscoWebexTrigger",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-base.zoomTool",
		"popularity": .297
	},
	{
		"id": "n8n-nodes-base.invoiceNinja",
		"popularity": .348
	},
	{
		"id": "n8n-nodes-base.awsTranscribeTool",
		"popularity": .291
	},
	{
		"id": "n8n-nodes-converthub.converthub",
		"popularity": .241
	},
	{
		"id": "n8n-nodes-opnform.opnformTrigger",
		"popularity": .312
	},
	{
		"id": "n8n-nodes-base.filemakerTool",
		"popularity": .283
	},
	{
		"id": "n8n-nodes-base.zendeskTool",
		"popularity": .305
	},
	{
		"id": "n8n-nodes-base.mediumTool",
		"popularity": .152
	},
	{
		"id": "n8n-nodes-base.surveyMonkeyTrigger",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-base.philipsHue",
		"popularity": .298
	},
	{
		"id": "n8n-nodes-base.gumroadTrigger",
		"popularity": .272
	},
	{
		"id": "n8n-nodes-base.sentryIo",
		"popularity": .333
	},
	{
		"id": "n8n-nodes-base.pushcut",
		"popularity": .187
	},
	{
		"id": "n8n-nodes-base.gSuiteAdminTool",
		"popularity": .324
	},
	{
		"id": "n8n-nodes-base.microsoftGraphSecurity",
		"popularity": .272
	},
	{
		"id": "n8n-nodes-base.amqpTool",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-base.msg91",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-scraperapi-official.scraperApi",
		"popularity": .356
	},
	{
		"id": "n8n-nodes-base.oneSimpleApi",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-pdf-api-hub.pdfSplitMerge",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-1shot.oneShot",
		"popularity": .334
	},
	{
		"id": "@scrapeops/n8n-nodes-scrapeops.ScrapeOps",
		"popularity": .237
	},
	{
		"id": "@directus/n8n-nodes-directus.directus",
		"popularity": .413
	},
	{
		"id": "n8n-nodes-base.urlScanIoTool",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.payPalTrigger",
		"popularity": .291
	},
	{
		"id": "n8n-nodes-base.Brandfetch",
		"popularity": .281
	},
	{
		"id": "n8n-nodes-base.rundeck",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-parallel.parallel",
		"popularity": .206
	},
	{
		"id": "n8n-nodes-abyssale.abyssale",
		"popularity": .287
	},
	{
		"id": "@serphouse/n8n-nodes-serphouse.serphouse",
		"popularity": .241
	},
	{
		"id": "@promptlayer/n8n-nodes-promptlayer-runagent.promptLayerRunAgent",
		"popularity": .303
	},
	{
		"id": "n8n-nodes-fillout.filloutTrigger",
		"popularity": .42
	},
	{
		"id": "n8n-nodes-base.clockifyTrigger",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-base.oneSimpleApiTool",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-base.jwtTool",
		"popularity": .206
	},
	{
		"id": "n8n-nodes-base.uproc",
		"popularity": .125
	},
	{
		"id": "n8n-nodes-base.coda",
		"popularity": .366
	},
	{
		"id": "n8n-nodes-base.oura",
		"popularity": .275
	},
	{
		"id": "n8n-nodes-base.contentful",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-base.deepLTool",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-base.apiTemplateIoTool",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-base.grafanaTool",
		"popularity": .293
	},
	{
		"id": "@solution25/n8n-nodes-shopware.shopware",
		"popularity": .268
	},
	{
		"id": "n8n-nodes-docuwriter-ai.docuWriter",
		"popularity": .206
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWolframAlpha",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-base.freshworksCrm",
		"popularity": .277
	},
	{
		"id": "n8n-nodes-chat-data.chatDataTrigger",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.ldapTool",
		"popularity": .14
	},
	{
		"id": "n8n-nodes-base.matrixTool",
		"popularity": .287
	},
	{
		"id": "n8n-nodes-base.jenkinsTool",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-kipps.kippsAiChatbot",
		"popularity": .237
	},
	{
		"id": "n8n-nodes-base.mailerLiteTrigger",
		"popularity": .237
	},
	{
		"id": "n8n-nodes-base.rocketchatTool",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-clipboardgenie.clipboardGenie",
		"popularity": .125
	},
	{
		"id": "n8n-nodes-base.agileCrmTool",
		"popularity": .194
	},
	{
		"id": "n8n-nodes-base.awsLambdaTool",
		"popularity": .237
	},
	{
		"id": "n8n-nodes-base.raindrop",
		"popularity": .328
	},
	{
		"id": "n8n-nodes-addtowallet.addToWallet",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-airparser.airparser",
		"popularity": .216
	},
	{
		"id": "n8n-nodes-docuprox.docuProx",
		"popularity": .265
	},
	{
		"id": "n8n-nodes-craftmypdf.craftMyPdf",
		"popularity": .268
	},
	{
		"id": "@wix/n8n-nodes-wix.wix",
		"popularity": .206
	},
	{
		"id": "n8n-nodes-base.awsSns",
		"popularity": .187
	},
	{
		"id": "n8n-nodes-base.adaloTool",
		"popularity": .26
	},
	{
		"id": "n8n-nodes-base.bitwardenTool",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-base.upleadTool",
		"popularity": .194
	},
	{
		"id": "@datafix/n8n-nodes-exact-online.exactOnline",
		"popularity": .302
	},
	{
		"id": "n8n-nodes-base.freshworksCrmTool",
		"popularity": .152
	},
	{
		"id": "@seranking/n8n-nodes-seranking.seRanking",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-mallabe-images.mallabeImages",
		"popularity": .179
	},
	{
		"id": "n8n-nodes-scrapeless.scrapeless",
		"popularity": .152
	},
	{
		"id": "n8n-nodes-base.postmarkTrigger",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-alive5.alive5",
		"popularity": .187
	},
	{
		"id": "n8n-nodes-base.clearbit",
		"popularity": .254
	},
	{
		"id": "n8n-nodes-base.yourls",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-base.freshdeskTool",
		"popularity": .297
	},
	{
		"id": "n8n-nodes-shortio.Shortio",
		"popularity": .26
	},
	{
		"id": "@globalping/n8n-nodes-globalping.globalping",
		"popularity": .171
	},
	{
		"id": "n8n-nodes-base.harvest",
		"popularity": .277
	},
	{
		"id": "@decodo/n8n-nodes-decodo.decodo",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-base.seaTableTrigger",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-base.boxTrigger",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-emailvalidation.emailValidation",
		"popularity": .303
	},
	{
		"id": "@cometapi-dev/n8n-nodes-cometapi.cometApi",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-carbone.carbone",
		"popularity": .285
	},
	{
		"id": "n8n-nodes-solapi.solapi",
		"popularity": .254
	},
	{
		"id": "n8n-nodes-base.openThesaurus",
		"popularity": .171
	},
	{
		"id": "n8n-nodes-base.awsIam",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-ada.ada",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-base.mattermostTool",
		"popularity": .241
	},
	{
		"id": "n8n-nodes-base.autopilotTool",
		"popularity": .229
	},
	{
		"id": "n8n-nodes-base.iterable",
		"popularity": .14
	},
	{
		"id": "n8n-nodes-base.rabbitmqTool",
		"popularity": .179
	},
	{
		"id": "n8n-nodes-base.netlify",
		"popularity": .241
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectDatacenterTool",
		"popularity": .187
	},
	{
		"id": "n8n-nodes-base.haloPSA",
		"popularity": .351
	},
	{
		"id": "n8n-nodes-base.loneScaleTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.zulip",
		"popularity": .298
	},
	{
		"id": "n8n-nodes-base.magento2Tool",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-smstools.smstools",
		"popularity": .315
	},
	{
		"id": "@telnyx/n8n-nodes-telnyx-ai.telnyxAi",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-base.theHiveProject",
		"popularity": .331
	},
	{
		"id": "n8n-nodes-base.awsComprehend",
		"popularity": .26
	},
	{
		"id": "n8n-nodes-ipgeolocation.ipgeolocation",
		"popularity": .265
	},
	{
		"id": "n8n-nodes-base.intercomTool",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-base.bubbleTool",
		"popularity": .216
	},
	{
		"id": "n8n-nodes-base.splunkTool",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-base.pagerDuty",
		"popularity": .26
	},
	{
		"id": "n8n-nodes-parsio.parsio",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.autopilot",
		"popularity": .216
	},
	{
		"id": "n8n-nodes-base.uptimeRobot",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-base.clockifyTool",
		"popularity": .229
	},
	{
		"id": "n8n-nodes-base.awsRekognition",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-base.sendGridTool",
		"popularity": .179
	},
	{
		"id": "n8n-nodes-base.workableTrigger",
		"popularity": .179
	},
	{
		"id": "@zerobounce/n8n-nodes-zerobounce.zeroBounce",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-base.keap",
		"popularity": .254
	},
	{
		"id": "n8n-nodes-base.npmTool",
		"popularity": .152
	},
	{
		"id": "n8n-nodes-base.mailgunTool",
		"popularity": .152
	},
	{
		"id": "n8n-nodes-base.bambooHrTool",
		"popularity": .179
	},
	{
		"id": "n8n-nodes-base.helpScout",
		"popularity": .26
	},
	{
		"id": "n8n-nodes-base.elasticSecurity",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.wekanTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.zulipTool",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-jetapi.jetapi",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-awork.awork",
		"popularity": .233
	},
	{
		"id": "@picsart/n8n-nodes-picsart-creative-apis.picsartVideo",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-base.mailerLiteTool",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-tubelab.tubeLab",
		"popularity": .125
	},
	{
		"id": "n8n-nodes-murf.murf",
		"popularity": .162
	},
	{
		"id": "@enginemailer/n8n-nodes-enginemailer.enginemailer",
		"popularity": .206
	},
	{
		"id": "@tehw0lf/n8n-nodes-toon.toon",
		"popularity": .152
	},
	{
		"id": "@paloaltonetworks/n8n-nodes-prisma-airs.prismaAirs",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.discord",
		"popularity": .714
	},
	{
		"id": "n8n-nodes-base.mqttTool",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.mailjetTrigger",
		"popularity": .194
	},
	{
		"id": "n8n-nodes-infranodus.infranodus",
		"popularity": .171
	},
	{
		"id": "n8n-nodes-base.invoiceNinjaTrigger",
		"popularity": .206
	},
	{
		"id": "n8n-nodes-base.strapiTool",
		"popularity": .187
	},
	{
		"id": "n8n-nodes-base.BrandfetchTool",
		"popularity": .194
	},
	{
		"id": "n8n-nodes-base.erpNextTool",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-base.monicaCrmTool",
		"popularity": 0
	},
	{
		"id": "@nuelink/n8n-nodes-nuelink.nuelink",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-base.segmentTool",
		"popularity": .152
	},
	{
		"id": "n8n-nodes-base.theHiveTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.codaTool",
		"popularity": .171
	},
	{
		"id": "@sendpulse/n8n-nodes-sendpulse.sendPulseA360",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-templatefox.templateFox",
		"popularity": .152
	},
	{
		"id": "n8n-nodes-fluentc.fluentCTranslate",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-parseur.parseurTrigger",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-base.manualTrigger",
		"popularity": .987
	},
	{
		"id": "n8n-nodes-base.sendy",
		"popularity": .14
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreSupabase",
		"popularity": .69
	},
	{
		"id": "n8n-nodes-base.salesmate",
		"popularity": .14
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserAutofixing",
		"popularity": .68
	},
	{
		"id": "n8n-nodes-base.awsCognito",
		"popularity": .26
	},
	{
		"id": "@flarelight/n8n-nodes-flarelight.flarelight",
		"popularity": 0
	},
	{
		"id": "@jetbrains/n8n-nodes-youtrack.youtrack",
		"popularity": .265
	},
	{
		"id": "n8n-nodes-contextualai.contextualAi",
		"popularity": .171
	},
	{
		"id": "@netgsm/n8n-nodes-netgsm.netgsm",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-supermetrics.supermetrics",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-base.mailcheckTool",
		"popularity": .171
	},
	{
		"id": "n8n-nodes-base.gristTool",
		"popularity": .171
	},
	{
		"id": "@gammatech/n8n-nodes-gamma.gamma",
		"popularity": .388
	},
	{
		"id": "n8n-nodes-base.googleCloudStorageTool",
		"popularity": .315
	},
	{
		"id": "n8n-nodes-fishaudio.fishaudio",
		"popularity": .348
	},
	{
		"id": "@picsart/n8n-nodes-picsart-creative-apis.picsartImage",
		"popularity": .329
	},
	{
		"id": "n8n-nodes-mailtrap.mailtrap",
		"popularity": .287
	},
	{
		"id": "n8n-nodes-screenshotone.screenshotOne",
		"popularity": .343
	},
	{
		"id": "@langfuse/n8n-nodes-langfuse.langfuse",
		"popularity": .388
	},
	{
		"id": "n8n-nodes-base.dropcontact",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-base.activeCampaignTrigger",
		"popularity": .32
	},
	{
		"id": "n8n-nodes-dust.dust",
		"popularity": .298
	},
	{
		"id": "n8n-nodes-agencii.agencii",
		"popularity": .125
	},
	{
		"id": "n8n-nodes-nele-ai.neleAi",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-inoreader.inoreader",
		"popularity": .279
	},
	{
		"id": "@digitalocean/n8n-nodes-digitalocean-gradient-serverless-inference.digitalOceanGradientServerlessInference",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-base.discourseTool",
		"popularity": .054
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmOpenHuggingFaceInference",
		"popularity": .573
	},
	{
		"id": "n8n-nodes-base.cortex",
		"popularity": .257
	},
	{
		"id": "n8n-nodes-vikunja.vikunjaTrigger",
		"popularity": .277
	},
	{
		"id": "n8n-nodes-yepcode.yepCode",
		"popularity": .187
	},
	{
		"id": "@ainoflow/n8n-nodes-ainoflow.ainoflowConvert",
		"popularity": .187
	},
	{
		"id": "n8n-nodes-docsautomator.docsAutomator",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-trackingtime.trackingtimeTrigger",
		"popularity": .187
	},
	{
		"id": "n8n-nodes-base.mandrill",
		"popularity": .229
	},
	{
		"id": "n8n-nodes-skyvern.skyvern",
		"popularity": .254
	},
	{
		"id": "n8n-nodes-base.humanticAi",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-anytype.anytype",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-base.wufooTrigger",
		"popularity": .237
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWorkflow",
		"popularity": .766
	},
	{
		"id": "n8n-nodes-extruct.extruct",
		"popularity": .108
	},
	{
		"id": "@deutschlandgpt/n8n-nodes-deutschlandgpt.deutschlandgpt",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.telegramHitlTool",
		"popularity": .614
	},
	{
		"id": "n8n-nodes-base.customerIoTrigger",
		"popularity": .152
	},
	{
		"id": "n8n-nodes-base.awsCertificateManager",
		"popularity": .187
	},
	{
		"id": "n8n-nodes-base.timescaleDbTool",
		"popularity": .162
	},
	{
		"id": "@apaleo/n8n-nodes-apaleo-official.apaleo",
		"popularity": .281
	},
	{
		"id": "n8n-nodes-base.helpScoutTrigger",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-base.helpScoutTool",
		"popularity": .125
	},
	{
		"id": "n8n-nodes-base.storyblok",
		"popularity": .171
	},
	{
		"id": "n8n-nodes-bookstack.bookstack",
		"popularity": .3
	},
	{
		"id": "@oregister/n8n-nodes-openregister.openRegister",
		"popularity": .216
	},
	{
		"id": "n8n-nodes-base.clearbitTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectCloudTool",
		"popularity": .14
	},
	{
		"id": "n8n-nodes-base.ghostTool",
		"popularity": .257
	},
	{
		"id": "n8n-nodes-base.dropcontactTool",
		"popularity": .108
	},
	{
		"id": "@thingsboard/n8n-nodes-thingsboard.thingsBoard",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-mallabe-barcodes.mallabeBarcodes",
		"popularity": .14
	},
	{
		"id": "n8n-nodes-base.unleashedSoftwareTool",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-aimfox.aimfox",
		"popularity": .206
	},
	{
		"id": "n8n-nodes-base.uptimeRobotTool",
		"popularity": .14
	},
	{
		"id": "n8n-nodes-base.uplead",
		"popularity": .194
	},
	{
		"id": "@local-falcon/n8n-nodes-localfalcon.localFalcon",
		"popularity": .108
	},
	{
		"id": "@thelifeofrishi/n8n-nodes-orshot.orshot",
		"popularity": .162
	},
	{
		"id": "@decisionrules/n8n-nodes-decisionrules.decisionRules",
		"popularity": .187
	},
	{
		"id": "n8n-nodes-base.googleBooks",
		"popularity": .171
	},
	{
		"id": "n8n-nodes-base.paddleTool",
		"popularity": .152
	},
	{
		"id": "n8n-nodes-base.chargebee",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-base.peekalinkTool",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-base.yourlsTool",
		"popularity": .179
	},
	{
		"id": "n8n-nodes-base.koBoToolbox",
		"popularity": .14
	},
	{
		"id": "n8n-nodes-base.wiseTrigger",
		"popularity": .179
	},
	{
		"id": "n8n-nodes-blooio.blooioMessaging",
		"popularity": .14
	},
	{
		"id": "n8n-nodes-base.postHogTool",
		"popularity": .179
	},
	{
		"id": "n8n-nodes-parseur.parseur",
		"popularity": .194
	},
	{
		"id": "@exploriumai/n8n-nodes-explorium-ai.exploriumApiNode",
		"popularity": .221
	},
	{
		"id": "n8n-nodes-base.totpTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.googlePerspective",
		"popularity": .187
	},
	{
		"id": "n8n-nodes-base.lemlistTool",
		"popularity": .152
	},
	{
		"id": "@neosapience/n8n-nodes-typecast.typecast",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.chargebeeTool",
		"popularity": .14
	},
	{
		"id": "n8n-nodes-csvbox.csvboxTrigger",
		"popularity": .152
	},
	{
		"id": "n8n-nodes-base.netlifyTrigger",
		"popularity": .241
	},
	{
		"id": "n8n-nodes-base.sms77Tool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-bookoly.bookoly",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-base.autopilotTrigger",
		"popularity": .171
	},
	{
		"id": "n8n-nodes-base.circleCi",
		"popularity": .125
	},
	{
		"id": "n8n-nodes-klicktipp.klicktipp",
		"popularity": .221
	},
	{
		"id": "n8n-nodes-base.copper",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-gleanclient.gleanClient",
		"popularity": .2
	},
	{
		"id": "@postpulse/n8n-nodes-postpulse.postPulse",
		"popularity": .268
	},
	{
		"id": "n8n-nodes-base.currents",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-jsonpost.jsonPostTrigger",
		"popularity": .108
	},
	{
		"id": "@fibery/n8n-nodes-fibery.fibery",
		"popularity": .358
	},
	{
		"id": "n8n-nodes-base.sentryIoTool",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.iterableTool",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.securityScorecardTool",
		"popularity": .14
	},
	{
		"id": "n8n-nodes-pushinator.pushinator",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-base.mauticTrigger",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-base.plivo",
		"popularity": .194
	},
	{
		"id": "n8n-nodes-base.flowTrigger",
		"popularity": .244
	},
	{
		"id": "n8n-nodes-base.monicaCrm",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-base.chargebeeTrigger",
		"popularity": .206
	},
	{
		"id": "n8n-nodes-base.googlePerspectiveTool",
		"popularity": .179
	},
	{
		"id": "n8n-nodes-straico-official.straicoOfficial",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.peekalink",
		"popularity": .179
	},
	{
		"id": "@zohomail/n8n-nodes-zohocalendar.zohoCalendar",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-mrscraper.mrscraper",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-base.awsSesTool",
		"popularity": .14
	},
	{
		"id": "@nexlev/n8n-nodes-nexlev.nexlev",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-cyberpulse-compliance-dev.cyberPulseCompliance",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.stackby",
		"popularity": .125
	},
	{
		"id": "@onlyfansapi/n8n-nodes-onlyfansapi.onlyFans",
		"popularity": .179
	},
	{
		"id": "n8n-nodes-base.openThesaurusTool",
		"popularity": 0
	},
	{
		"id": "@nvoip/n8n-nodes-nvoip.nvoip",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-dumplingai.dumplingAi",
		"popularity": .108
	},
	{
		"id": "@woztell-sanuker/n8n-nodes-woztell-sanuker.woztellTrigger",
		"popularity": .171
	},
	{
		"id": "n8n-nodes-base.timescaleDb",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-base.driftTool",
		"popularity": .206
	},
	{
		"id": "n8n-nodes-base.pagerDutyTool",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-base.gongTool",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-pubnub.pubNub",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.circleCiTool",
		"popularity": .054
	},
	{
		"id": "@alipeople/n8n-nodes-sendon.sendon",
		"popularity": .14
	},
	{
		"id": "@securevector/n8n-nodes-securevector.secureVector",
		"popularity": 0
	},
	{
		"id": "@waapi/n8n-nodes-waalaxy.waalaxy",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-base.crateDb",
		"popularity": .152
	},
	{
		"id": "n8n-nodes-base.netlifyTool",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-base.harvestTool",
		"popularity": .221
	},
	{
		"id": "n8n-nodes-base.signl4Tool",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.pushbulletTool",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-zenlayer.zenlayer",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.crateDbTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.syncroMsp",
		"popularity": .125
	},
	{
		"id": "n8n-nodes-outgrow.outgrowTrigger",
		"popularity": .14
	},
	{
		"id": "n8n-nodes-base.syncroMspTool",
		"popularity": .152
	},
	{
		"id": "n8n-nodes-base.bitlyTool",
		"popularity": .171
	},
	{
		"id": "n8n-nodes-base.questDb",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-chartmogul.chartmogul",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-pagbank-connect.pagBank",
		"popularity": .171
	},
	{
		"id": "n8n-nodes-base.getResponseTrigger",
		"popularity": .152
	},
	{
		"id": "n8n-nodes-groner.groner",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-hedy.hedy",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.segment",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-pagepixels-screenshots.pagePixelsScreenshots",
		"popularity": .194
	},
	{
		"id": "n8n-nodes-base.plivoTool",
		"popularity": 0
	},
	{
		"id": "@copicake/n8n-nodes-copicake.copicake",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.theHiveProjectTrigger",
		"popularity": .108
	},
	{
		"id": "@reportei/n8n-nodes-reportei.reportei",
		"popularity": .125
	},
	{
		"id": "n8n-nodes-meetgeek.meetGeek",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.gotifyTool",
		"popularity": .152
	},
	{
		"id": "n8n-nodes-base.quickbase",
		"popularity": .187
	},
	{
		"id": "@handelsregister/n8n-nodes-handelsregister-ai.handelsregisterAi",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-digital-ocean.digitalOcean",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-atriomail-email.atriomail",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.paddle",
		"popularity": .125
	},
	{
		"id": "n8n-nodes-businessmap.businessmap",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-base.twake",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.cockpitTool",
		"popularity": .125
	},
	{
		"id": "@vlm-run/n8n-nodes-vlmrun.vlmRun",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.signl4",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-base.convertKitTrigger",
		"popularity": .171
	},
	{
		"id": "n8n-nodes-base.awsElb",
		"popularity": .125
	},
	{
		"id": "n8n-nodes-diviup-connect.diviUpConnect",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-zohoteaminbox.zohoTeamInbox",
		"popularity": .125
	},
	{
		"id": "n8n-nodes-videotoblog.videoToBlog",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-checkmk.checkmk",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-base.questDbTool",
		"popularity": .125
	},
	{
		"id": "n8n-nodes-base.unleashedSoftware",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-bounceban.bounceban",
		"popularity": .125
	},
	{
		"id": "n8n-nodes-base.koBoToolboxTrigger",
		"popularity": .2
	},
	{
		"id": "@predictleads/n8n-nodes-predictleads.predictLeads",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.keapTrigger",
		"popularity": .125
	},
	{
		"id": "n8n-nodes-base.oktaTool",
		"popularity": .179
	},
	{
		"id": "n8n-nodes-base.ouraTool",
		"popularity": .179
	},
	{
		"id": "n8n-nodes-contentdrips.contentdrips",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.wekan",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.emeliaTool",
		"popularity": .125
	},
	{
		"id": "@xano/n8n-nodes-xano.xano",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-peek-pro.peekPro",
		"popularity": .229
	},
	{
		"id": "@musixmatch/n8n-nodes-musixmatch.musixmatch",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-base.sendyTool",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.goToWebinar",
		"popularity": .179
	},
	{
		"id": "@wizaco/n8n-nodes-wiza.wiza",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.lingvaNex",
		"popularity": .171
	},
	{
		"id": "n8n-nodes-scraping-dog.scrapingDog",
		"popularity": .152
	},
	{
		"id": "n8n-nodes-caspioofficial.caspio",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-itop.iTop",
		"popularity": .125
	},
	{
		"id": "n8n-nodes-base.twist",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-raia.raia",
		"popularity": .152
	},
	{
		"id": "n8n-nodes-binalyze-air.air",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.demio",
		"popularity": .14
	},
	{
		"id": "n8n-nodes-base.taiga",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-base.discourse",
		"popularity": .211
	},
	{
		"id": "n8n-nodes-seo-content-machine.seoContentMachine",
		"popularity": .14
	},
	{
		"id": "n8n-nodes-dart.dart",
		"popularity": .086
	},
	{
		"id": "@klardaten/n8n-nodes-datevconnect.masterData",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.elasticSecurityTool",
		"popularity": .179
	},
	{
		"id": "n8n-nodes-base.mauticTool",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.vonageTool",
		"popularity": .086
	},
	{
		"id": "@goperigon/n8n-nodes-perigon.perigon",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectCloudTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.storyblokTool",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-dalil-ai.dalilAi",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-air.air",
		"popularity": .211
	},
	{
		"id": "@port-labs/n8n-nodes-portio-experimental.portApiAi",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-famulor.famulor",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-deliverect.deliverect",
		"popularity": .194
	},
	{
		"id": "n8n-nodes-base.profitWellTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-jaasai.jaasai",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.emeliaTrigger",
		"popularity": .171
	},
	{
		"id": "@asyncai/n8n-nodes-asyncai.asyncAi",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectCloud",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-winston-ai.winstonAi",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.msg91Tool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-docutray.docutray",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-base.tapfiliateTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.profitWell",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.beeminder",
		"popularity": .125
	},
	{
		"id": "n8n-nodes-base.copperTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.salesmateTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.theHiveTrigger",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.quickbaseTool",
		"popularity": .108
	},
	{
		"id": "@drwally/n8n-nodes-integration.drwally",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-twittershots.twitterShots",
		"popularity": .14
	},
	{
		"id": "n8n-nodes-base.vero",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.currentsTrigger",
		"popularity": 0
	},
	{
		"id": "@reka-ai/n8n-nodes-reka.rekaVision",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.rundeckTool",
		"popularity": .108
	},
	{
		"id": "@bedrijfsdatanl/n8n-nodes-prospectpro.prospectpro",
		"popularity": .14
	},
	{
		"id": "n8n-nodes-yourtextguru.yourtextGuru",
		"popularity": .054
	},
	{
		"id": "@socradar/n8n-nodes-socradar.socradar",
		"popularity": .14
	},
	{
		"id": "@basalt-ai/n8n-nodes-basalt.basalt",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.pushcutTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-roam.roam",
		"popularity": .171
	},
	{
		"id": "n8n-nodes-base.veroTool",
		"popularity": 0
	},
	{
		"id": "@bedrijfsdatanl/n8n-nodes-bedrijfsdata.bedrijfsdata",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-base.postBinTool",
		"popularity": .125
	},
	{
		"id": "n8n-nodes-base.copperTrigger",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-deeptagger.deepTagger",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-authentica.authentica",
		"popularity": .108
	},
	{
		"id": "n8n-nodes-presenton.presenton",
		"popularity": .125
	},
	{
		"id": "n8n-nodes-base.haloPSATool",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-anny.anny",
		"popularity": .125
	},
	{
		"id": "n8n-nodes-featherless.featherless",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-teamupcalendar.teamup",
		"popularity": .216
	},
	{
		"id": "n8n-nodes-itglue.iTGlue",
		"popularity": .125
	},
	{
		"id": "n8n-nodes-beyondpresence.beyondPresence",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-base.twistTool",
		"popularity": .054
	},
	{
		"id": "@algolia/n8n-nodes-algolia.algolia",
		"popularity": .171
	},
	{
		"id": "@starhunter/n8n-nodes-graphql.starhunter",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.theHiveProjectTool",
		"popularity": .14
	},
	{
		"id": "n8n-nodes-base.raindropTool",
		"popularity": .179
	},
	{
		"id": "n8n-nodes-openmic.openMicAi",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-belakeai.belakeAi",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.taigaTrigger",
		"popularity": .179
	},
	{
		"id": "n8n-nodes-blue.blue",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.loneScaleTrigger",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.goToWebinarTool",
		"popularity": .14
	},
	{
		"id": "n8n-nodes-velatir.velatir",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.taigaTool",
		"popularity": .14
	},
	{
		"id": "n8n-nodes-base.theHive",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.egoi",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.pushcutTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-mfr.mfr",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-craft.craft",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.emelia",
		"popularity": .125
	}
];
//#endregion
//#region src/features/shared/nodeCreator/composables/useViewStacks.ts
var import_difference = /* @__PURE__ */ __toESM(require_difference(), 1);
var nodePopularityMap = Object.values(_virtual_node_popularity_data_default).reduce((acc, node) => {
	return {
		...acc,
		[node.id]: node.popularity * 100
	};
}, {});
var useViewStacks = defineStore("nodeCreatorViewStacks", () => {
	const nodeCreatorStore = useNodeCreatorStore();
	const { getActiveItemIndex } = useKeyboardNavigation();
	const i18n = useI18n();
	const settingsStore = useSettingsStore();
	const viewStacks = ref([]);
	const activeStackItems = computed(() => {
		const stack = getLastActiveStack();
		if (!stack?.baselineItems) return stack.items ? finalizeItems(stack.items) : [];
		if (stack.search && searchBaseItems.value) {
			let searchBase = searchBaseItems.value;
			const canvasHasAINodes = useCanvasStore().aiNodes.length > 0;
			if (searchBaseItems.value.length === 0) searchBase = flattenCreateElements(stack.baselineItems ?? []);
			if (!(isAiRootView(stack) || canvasHasAINodes) || ["plus_endpoint", "node_connection_drop"].includes(nodeCreatorStore.openSource) && !isAiSubcategoryView(stack)) searchBase = filterOutAiNodes(searchBase);
			const searchResults = finalizeItems(searchNodes(stack.search || "", searchBase, { popularity: nodePopularityMap }));
			const groupedNodes = groupIfAiNodes(searchResults, stack, false) ?? searchResults;
			stack.activeIndex = groupedNodes.some((node) => node.type === "section") ? 1 : 0;
			return groupedNodes;
		}
		return finalizeItems(groupIfAiNodes(stack.baselineItems, stack, true));
	});
	const activeViewStack = computed(() => {
		const stack = getLastActiveStack();
		if (!stack) return {};
		const flatBaselineItems = flattenCreateElements(stack.baselineItems ?? []);
		return {
			...stack,
			items: activeStackItems.value,
			hasSearch: stack?.hasSearch ?? flatBaselineItems.length > 8
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
	function isHitlSubcategoryView(stack) {
		return stack.rootView === HUMAN_IN_THE_LOOP_CATEGORY;
	}
	function getLastActiveStack() {
		return viewStacks.value[viewStacks.value.length - 1];
	}
	function getAllNodeCreateElements() {
		return nodeCreatorStore.mergedNodes.map((item) => transformNodeType(item));
	}
	const globalSearchItemsDiff = computed(() => {
		const stack = getLastActiveStack();
		if (!stack?.search || isAiSubcategoryView(stack) || isHitlSubcategoryView(stack)) return [];
		const allNodes = getAllNodeCreateElements();
		const filteredNodes = isAiRootView(stack) ? allNodes : filterOutAiNodes(allNodes);
		let globalSearchResult = finalizeItems(searchNodes(stack.search || "", filteredNodes, { popularity: nodePopularityMap }));
		if (isAiRootView(stack)) globalSearchResult = groupIfAiNodes(globalSearchResult, stack, false);
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
	const createActionFilter = computed(() => (connectionType) => {
		return (items) => {
			if (items.some((item) => item.outputConnectionType)) return items.filter((item) => item.outputConnectionType === connectionType);
			return items;
		};
	});
	function groupIfAiNodes(items, stack, sortAlphabetically) {
		const aiNodes = items.filter((node) => isAINode(node));
		const canvasHasAINodes = useCanvasStore().aiNodes.length > 0;
		const isVectorStoresCategory = stack?.title === AI_CATEGORY_VECTOR_STORES;
		const isToolsCategory = stack?.title === AI_CATEGORY_TOOLS;
		if (aiNodes.length > 0 && (canvasHasAINodes || isAiRootView(getLastActiveStack()) || isVectorStoresCategory)) {
			const sectionsMap = /* @__PURE__ */ new Map();
			const aiRootNodes = filterAiRootNodes(aiNodes);
			const aiSubNodes = (0, import_difference.default)(aiNodes, aiRootNodes);
			aiSubNodes.forEach((node) => {
				const subcategories = node.properties.codex?.subcategories ?? {};
				const section = subcategories["AI"]?.[0];
				if (section) {
					const subSection = section === "Vector Stores" && stack?.title === "Tools" ? void 0 : subcategories[section]?.[0];
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
			if (isToolsCategory && !stack?.search) {
				const actionsFilter = createActionFilter.value(NodeConnectionTypes.AiTool);
				return sections.map((section) => {
					if (section.key === "Recommended Tools") return {
						type: "section",
						key: section.key,
						title: section.title,
						children: nodeTypesToCreateElements(section.items, aiSubNodes),
						showSeparator: true
					};
					return {
						type: "subcategory",
						key: section.key,
						properties: {
							title: section.title,
							icon: mapToolSubcategoryIcon(section.key),
							items: nodeTypesToCreateElements(section.items, aiSubNodes),
							new: NEW_TOOL_CATEGORIES.includes(section.key),
							actionsFilter,
							hideActions: true
						}
					};
				}).sort((a, b) => {
					if (a.type === "section") return -1;
					if (b.type === "section") return 1;
					return 0;
				});
			}
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
			connectionType,
			baseFilter: (i) => {
				if (i.key === "@n8n/n8n-nodes-langchain.code") return false;
				const displayNode = nodesByConnectionType[connectionType].includes(i.key);
				if (displayNode) {
					const isIncluded = filter?.nodes?.length ? filter?.nodes?.includes(i.key) : true;
					const isExcluded = filter?.excludedNodes?.length ? filter?.excludedNodes?.includes(i.key) : false;
					const isConditionMet = filter?.conditions?.length ? filter?.conditions?.every((condition) => condition(i)) : true;
					return isIncluded && !isExcluded && isConditionMet;
				}
				return displayNode;
			},
			itemsMapper(item) {
				return {
					...item,
					subcategory: connectionType
				};
			},
			actionsFilter: createActionFilter.value(connectionType),
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
			if (!settingsStore.isAskAiEnabled) itemsInSubcategory = itemsInSubcategory?.filter((item) => item.key !== "n8n-nodes-base.aiTransform") ?? [];
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
		const newStackUuid = v4();
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
		getAllNodeCreateElements,
		isHitlSubcategoryView
	};
});
//#endregion
//#region src/features/shared/nodeCreator/nodeCreator.store.ts
var import_get = /* @__PURE__ */ __toESM(require_get(), 1);
var useNodeCreatorStore = defineStore(STORES.NODE_CREATOR, () => {
	const workflowsStore = useWorkflowsStore();
	const workflowDocumentStore = computed(() => useWorkflowDocumentStore(createWorkflowDocumentId(workflowsStore.workflowId)));
	const ndvStore = useNDVStore();
	const uiStore = useUIStore();
	const nodeTypesStore = useNodeTypesStore();
	const telemetry = useTelemetry();
	const externalHooks = useExternalHooks();
	const { getNodeCreatorFilter } = useGetNodeCreatorFilter();
	const selectedView = ref(TRIGGER_NODE_CREATOR_VIEW);
	const mergedNodes = ref([]);
	const actions = ref({});
	const openSource = ref("");
	const isCreateNodeActive = ref(false);
	const openingContext = ref(null);
	const nodePanelSessionId = ref("");
	const allNodeCreatorNodes = computed(() => Object.values(mergedNodes.value).map((i) => transformNodeType(i)));
	function setMergeNodes(nodes) {
		mergedNodes.value = nodes;
	}
	function removeNodeFromMergedNodes(nodeName) {
		mergedNodes.value = mergedNodes.value.filter((n) => n.name !== nodeName);
	}
	function setActions(nodes) {
		actions.value = nodes;
	}
	function setSelectedView(view) {
		selectedView.value = view;
	}
	function setOpenSource(view) {
		openSource.value = view;
	}
	function openSelectiveNodeCreator({ connectionType, node, creatorView, connectionIndex = 0 }) {
		const nodeName = node ?? ndvStore.activeNodeName;
		const nodeData = nodeName ? workflowDocumentStore.value.getNodeByName(nodeName) ?? null : null;
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
		const sourceNode = workflowDocumentStore.value.getNodeById(connection.source);
		if (!sourceNode) return;
		const { type, mode } = parseCanvasConnectionHandleString(connection.sourceHandle);
		uiStore.lastSelectedNode = sourceNode.name;
		if (isVueFlowConnection(connection)) uiStore.lastInteractedWithNodeConnection = connection;
		uiStore.lastInteractedWithNodeHandle = connection.sourceHandle ?? null;
		uiStore.lastInteractedWithNodeId = sourceNode.id;
		const isOutput = mode === CanvasConnectionMode.Output;
		const isScopedConnection = type !== NodeConnectionTypes.Main && !nodeCreatorView;
		setNodeCreatorState({
			source: eventSource,
			createNodeActive: true,
			nodeCreatorView: isScopedConnection ? AI_UNCATEGORIZED_CATEGORY : nodeCreatorView,
			connectionType: type
		});
		if (isScopedConnection) useViewStacks().gotoCompatibleConnectionView(type, isOutput, getNodeCreatorFilter(sourceNode.name, type, sourceNode)).catch(() => {});
	}
	async function openNodeCreatorWithNode(nodeName) {
		const nodeData = nodeName ? workflowDocumentStore.value.getNodeByName(nodeName) ?? null : null;
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
		}, getNodeIconSource(nodeType.name, null, workflowDocumentStore.value.getExpressionHandler()), "Regular", nodeActions ?? []);
		useViewStacks().pushViewStack(viewStack, { resetStacks: true });
	}
	function openNodeCreatorForTriggerNodes(source) {
		ndvStore.unsetActiveNodeName();
		setSelectedView(TRIGGER_NODE_CREATOR_VIEW);
		setNodeCreatorState({
			source,
			createNodeActive: true,
			nodeCreatorView: TRIGGER_NODE_CREATOR_VIEW
		});
	}
	function openNodeCreatorForRegularNodes(source) {
		ndvStore.unsetActiveNodeName();
		setSelectedView(REGULAR_NODE_CREATOR_VIEW);
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
		openingContext,
		openSource,
		selectedView,
		mergedNodes,
		actions,
		allNodeCreatorNodes,
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
//#endregion
//#region src/features/workflows/canvas/canvas.eventBus.ts
var canvasEventBus = createEventBus();
//#endregion
export { useKeyboardNavigation as a, HitlToolView as c, require_camelCase as d, require_capitalize as f, _virtual_node_popularity_data_default as i, RegularView as l, useNodeCreatorStore as n, AINodesView as o, useViewStacks as r, AIView as s, canvasEventBus as t, TriggerView as u };
