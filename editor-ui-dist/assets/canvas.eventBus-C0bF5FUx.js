import { o as __toESM, t as __commonJSMin } from "./chunk-CC9Q-vWm.js";
import { It as ref, S as computed, W as nextTick } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-BT3CWEhN.js";
import { a as require_toString, o as require__arrayMap, t as require_get } from "./get-5RT6cRaC.js";
import { t as createEventBus } from "./event-bus-DAq0yaAJ.js";
import { $ as prepareCommunityNodeDetailsViewStack, B as extractAiGatewaySection, E as useWorkflowDocumentStore, Gn as getThemedValue, H as finalizeItems, J as groupItemsInSections, Kt as useRouteWorkflowId, L as useNodeTypesStore, Pi as isVueFlowConnection, Q as nodeTypesToCreateElements, S as createWorkflowDocumentId, U as flattenCreateElements, W as getAiTemplatesCallout, Y as isAINode, Z as mapToolSubcategoryIcon, at as subcategorizeItems, ht as useAiGatewayStore, it as sortNodeCreateElements, lr as createCanvasConnectionHandleString, ot as transformNodeType, q as getSendAndWaitNodes, rn as useNDVStore, rt as showsAiGatewaySection, tt as searchNodes, vr as parseCanvasConnectionHandleString, w as injectWorkflowDocumentStore, zi as CanvasConnectionMode } from "./workflows.store-D1yelibQ.js";
import { i as defineStore } from "./constants-B-Dofn0a.js";
import { t as STORES } from "./constants2-D6qsHKVK.js";
import { $i as v4, At as require__baseFlatten, Gt as require__createCompounder, Ir as isHitlToolType, Ri as EVALUATION_TRIGGER_NODE_TYPE, Tr as getNodeInputs, aa as require__cacheHas, ai as NodeConnectionTypes, cn as require__arrayIncludes, oa as require__SetCache, pi as isCommunityPackageName, sn as require__arrayIncludesWith } from "./src-CY9eW8M_.js";
import { E as require__baseUnary, d as require_isArrayLikeObject, r as require__baseRest } from "./merge-yfnHZ0-X.js";
import { t as useSettingsStore } from "./settings.store-CIaGjG2x.js";
import "./settings.store-BRQXrO-E.js";
import { $ as AI_CATEGORY_ROOT_NODES, $n as XML_NODE_TYPE, $t as EXTRACT_FROM_FILE_NODE_TYPE, Ct as TRIGGER_NODE_CREATOR_VIEW, Et as AGGREGATE_NODE_TYPE, Fn as SCHEDULE_TRIGGER_NODE_TYPE, Ft as CODE_NODE_TYPE, G as AI_CATEGORY_EMBEDDING, H as AI_CATEGORY_AGENTS, Hn as SPLIT_OUT_NODE_TYPE, In as SET_NODE_TYPE, It as COMPRESSION_NODE_TYPE, J as AI_CATEGORY_MCP_NODES, Jt as EMAIL_SEND_NODE_TYPE, Kt as EDIT_IMAGE_NODE_TYPE, Lt as CONVERT_TO_FILE_NODE_TYPE, Mn as REMOVE_DUPLICATES_NODE_TYPE, Ot as AI_MCP_TOOL_NODE_TYPE, Pn as RSS_READ_NODE_TYPE, Pt as CHAT_TRIGGER_NODE_TYPE, Q as AI_CATEGORY_RETRIEVERS, Qt as EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE, St as TRANSFORM_DATA_SUBCATEGORY, U as AI_CATEGORY_CHAINS, Ut as DATA_TABLE_NODE_TYPE, Vn as SPLIT_IN_BATCHES_NODE_TYPE, Vt as CRYPTO_NODE_TYPE, W as AI_CATEGORY_DOCUMENT_LOADERS, Wn as SUMMARIZE_NODE_TYPE, Wt as DATETIME_NODE_TYPE, X as AI_CATEGORY_OTHER_TOOLS, Xn as WEBHOOK_NODE_TYPE, Y as AI_CATEGORY_MEMORY, Z as AI_CATEGORY_OUTPUTPARSER, _t as OTHER_TRIGGER_NODES_SUBCATEGORY, at as AI_OTHERS_NODE_CREATOR_VIEW, ct as AI_WORKFLOW_TOOL_LANGCHAIN_NODE_TYPE, dt as FLOWS_CONTROL_SUBCATEGORY, en as FILTER_NODE_TYPE, et as AI_CATEGORY_TEXT_SPLITTERS, fn as MANUAL_TRIGGER_NODE_TYPE, ft as HELPERS_SUBCATEGORY, gn as MESSAGE_AN_AGENT_NODE_TYPE, gt as NODE_CREATOR_OPEN_SOURCES, hn as MERGE_NODE_TYPE, ht as NEW_TOOL_CATEGORIES, in as HTTP_REQUEST_NODE_TYPE, kt as AI_TRANSFORM_NODE_TYPE$1, ln as LIMIT_NODE_TYPE, mt as HUMAN_IN_THE_LOOP_CATEGORY, nn as FORM_TRIGGER_NODE_TYPE, nt as AI_CATEGORY_VECTOR_STORES, on as IF_NODE_TYPE, pn as MARKDOWN_NODE_TYPE, pt as HITL_SUBCATEGORY, q as AI_CATEGORY_LANGUAGE_MODELS, qt as EMAIL_IMAP_NODE_TYPE, rn as HTML_NODE_TYPE, rt as AI_CODE_TOOL_LANGCHAIN_NODE_TYPE, st as AI_UNCATEGORIZED_CATEGORY, tt as AI_CATEGORY_TOOLS, ut as CORE_NODES_CATEGORY, xt as TEMPLATE_CATEGORY_AI, yt as REGULAR_NODE_CREATOR_VIEW } from "./constants-Es0IMygd.js";
import { n as useTelemetry, o as useUIStore } from "./posthog.store-BIq4iaqJ.js";
import { s as require_upperFirst, t as useEvaluationStore } from "./evaluation.store-CAS5Z20o.js";
import { t as useExternalHooks } from "./useExternalHooks-Bcf1xfqg.js";
import { t as useTemplatesStore } from "./templates.store-paUJRH2d.js";
import { n as getNodeIconSource } from "./nodeIcon-8CIfUdke.js";
//#region src/features/shared/nodeCreator/composables/useGetNodeCreatorFilter.ts
function useGetNodeCreatorFilter() {
	const nodeTypesStore = useNodeTypesStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
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
//#region ../../../node_modules/.pnpm/lodash@4.18.1_patch_hash=81ead1b07fc8efda87bd2724dbd876ab49f4a0aa03f96c3770060b2ea47d9e0b/node_modules/lodash/_baseDifference.js
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
//#region ../../../node_modules/.pnpm/lodash@4.18.1_patch_hash=81ead1b07fc8efda87bd2724dbd876ab49f4a0aa03f96c3770060b2ea47d9e0b/node_modules/lodash/difference.js
var require_difference = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseDifference = require__baseDifference(), baseFlatten = require__baseFlatten(), baseRest = require__baseRest(), isArrayLikeObject = require_isArrayLikeObject();
	module.exports = baseRest(function(array, values) {
		return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
	});
}));
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1_patch_hash=81ead1b07fc8efda87bd2724dbd876ab49f4a0aa03f96c3770060b2ea47d9e0b/node_modules/lodash/capitalize.js
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
//#region ../../../node_modules/.pnpm/lodash@4.18.1_patch_hash=81ead1b07fc8efda87bd2724dbd876ab49f4a0aa03f96c3770060b2ea47d9e0b/node_modules/lodash/camelCase.js
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
function getMessageAnAgentNode(nodeTypesStore, settingsStore) {
	if (!settingsStore.isModuleActive("agents")) return [];
	const node = nodeTypesStore.getNodeType(MESSAGE_AN_AGENT_NODE_TYPE);
	if (!node) return [];
	return [getNodeView(node)];
}
function AIView(_nodes) {
	const i18n = useI18n();
	const nodeTypesStore = useNodeTypesStore();
	const settingsStore = useSettingsStore();
	const templatesStore = useTemplatesStore();
	const isEvaluationEnabled = useEvaluationStore().isEvaluationEnabled;
	const evaluationNode = getEvaluationNode(nodeTypesStore, isEvaluationEnabled);
	const chainNodes = getAiNodesBySubcategory(nodeTypesStore.allLatestNodeTypes, AI_CATEGORY_CHAINS);
	const agentNodes = getAiNodesBySubcategory(nodeTypesStore.allLatestNodeTypes, AI_CATEGORY_AGENTS);
	const messageAnAgentNode = getMessageAnAgentNode(nodeTypesStore, settingsStore);
	const websiteCategoryURLParams = new URLSearchParams(templatesStore.websiteTemplateRepositoryParameters);
	websiteCategoryURLParams.set("utm_user_role", "AdvancedAI");
	const aiTemplatesURL = templatesStore.constructTemplateRepositoryURL(websiteCategoryURLParams, TEMPLATE_CATEGORY_AI);
	const askAiEnabled = settingsStore.isAskAiEnabled;
	const aiTransformNode = nodeTypesStore.getNodeType(AI_TRANSFORM_NODE_TYPE$1);
	const transformNode = askAiEnabled && aiTransformNode ? [getNodeView(aiTransformNode)] : [];
	const callouts = [getAiTemplatesCallout(aiTemplatesURL)];
	return {
		value: "AI",
		title: i18n.baseText("nodeCreator.aiPanel.aiNodes"),
		subtitle: i18n.baseText("nodeCreator.aiPanel.selectAiNode"),
		items: [
			...callouts,
			...messageAnAgentNode,
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
		AI_TRANSFORM_NODE_TYPE$1
	];
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
		"id": "n8n-nodes-base.manualTrigger",
		"popularity": .995
	},
	{
		"id": "@n8n/n8n-nodes-langchain.agent",
		"popularity": .982
	},
	{
		"id": "n8n-nodes-base.httpRequest",
		"popularity": .987
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chatTrigger",
		"popularity": .954
	},
	{
		"id": "n8n-nodes-base.code",
		"popularity": 1
	},
	{
		"id": "n8n-nodes-base.set",
		"popularity": .971
	},
	{
		"id": "n8n-nodes-base.webhook",
		"popularity": .932
	},
	{
		"id": "n8n-nodes-base.if",
		"popularity": .956
	},
	{
		"id": "n8n-nodes-base.scheduleTrigger",
		"popularity": .91
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
		"popularity": .934
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryBufferWindow",
		"popularity": .922
	},
	{
		"id": "n8n-nodes-base.googleSheets",
		"popularity": .965
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGoogleGemini",
		"popularity": .919
	},
	{
		"id": "@n8n/n8n-nodes-langchain.openAi",
		"popularity": .879
	},
	{
		"id": "n8n-nodes-base.gmail",
		"popularity": .928
	},
	{
		"id": "n8n-nodes-base.noOp",
		"popularity": .866
	},
	{
		"id": "n8n-nodes-base.formTrigger",
		"popularity": .88
	},
	{
		"id": "n8n-nodes-base.merge",
		"popularity": .866
	},
	{
		"id": "n8n-nodes-base.telegram",
		"popularity": .9
	},
	{
		"id": "n8n-nodes-base.telegramTrigger",
		"popularity": .862
	},
	{
		"id": "n8n-nodes-base.switch",
		"popularity": .862
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainLlm",
		"popularity": .875
	},
	{
		"id": "n8n-nodes-base.splitInBatches",
		"popularity": .838
	},
	{
		"id": "@n8n/n8n-nodes-langchain.googleGemini",
		"popularity": .846
	},
	{
		"id": "n8n-nodes-base.wait",
		"popularity": .83
	},
	{
		"id": "n8n-nodes-base.respondToWebhook",
		"popularity": .849
	},
	{
		"id": "n8n-nodes-base.splitOut",
		"popularity": .814
	},
	{
		"id": "n8n-nodes-base.filter",
		"popularity": .833
	},
	{
		"id": "n8n-nodes-base.googleDrive",
		"popularity": .853
	},
	{
		"id": "@n8n/n8n-nodes-langchain.agentTool",
		"popularity": .809
	},
	{
		"id": "n8n-nodes-base.extractFromFile",
		"popularity": .807
	},
	{
		"id": "n8n-nodes-base.googleSheetsTool",
		"popularity": .855
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserStructured",
		"popularity": .812
	},
	{
		"id": "n8n-nodes-base.aggregate",
		"popularity": .789
	},
	{
		"id": "n8n-nodes-base.gmailTrigger",
		"popularity": .823
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatOpenRouter",
		"popularity": .826
	},
	{
		"id": "n8n-nodes-base.readWriteFile",
		"popularity": .801
	},
	{
		"id": "n8n-nodes-base.httpRequestTool",
		"popularity": .794
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chat",
		"popularity": .782
	},
	{
		"id": "n8n-nodes-base.dataTable",
		"popularity": .841
	},
	{
		"id": "n8n-nodes-base.convertToFile",
		"popularity": .772
	},
	{
		"id": "n8n-nodes-base.executeWorkflowTrigger",
		"popularity": .797
	},
	{
		"id": "n8n-nodes-base.emailSend",
		"popularity": .773
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAnthropic",
		"popularity": .794
	},
	{
		"id": "n8n-nodes-base.googleSheetsTrigger",
		"popularity": .782
	},
	{
		"id": "n8n-nodes-base.whatsApp",
		"popularity": .783
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatOllama",
		"popularity": .787
	},
	{
		"id": "n8n-nodes-base.whatsAppTrigger",
		"popularity": .785
	},
	{
		"id": "n8n-nodes-base.executeWorkflow",
		"popularity": .805
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWorkflow",
		"popularity": .774
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGroq",
		"popularity": .824
	},
	{
		"id": "n8n-nodes-base.limit",
		"popularity": .768
	},
	{
		"id": "n8n-nodes-base.gmailTool",
		"popularity": .797
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatDeepSeek",
		"popularity": .736
	},
	{
		"id": "n8n-nodes-base.postgres",
		"popularity": .826
	},
	{
		"id": "n8n-nodes-base.googleCalendarTool",
		"popularity": .778
	},
	{
		"id": "n8n-nodes-base.slack",
		"popularity": .753
	},
	{
		"id": "n8n-nodes-base.html",
		"popularity": .718
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryPostgresChat",
		"popularity": .713
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolCode",
		"popularity": .716
	},
	{
		"id": "n8n-nodes-base.rssFeedRead",
		"popularity": .763
	},
	{
		"id": "n8n-nodes-base.supabase",
		"popularity": .789
	},
	{
		"id": "n8n-nodes-base.googleDriveTrigger",
		"popularity": .729
	},
	{
		"id": "@n8n/n8n-nodes-langchain.mcpClientTool",
		"popularity": .681
	},
	{
		"id": "@n8n/n8n-nodes-langchain.documentDefaultDataLoader",
		"popularity": .742
	},
	{
		"id": "n8n-nodes-base.airtable",
		"popularity": .79
	},
	{
		"id": "n8n-nodes-base.googleDocs",
		"popularity": .734
	},
	{
		"id": "@n8n/n8n-nodes-langchain.informationExtractor",
		"popularity": .7
	},
	{
		"id": "@n8n/n8n-nodes-langchain.ollama",
		"popularity": .702
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsOpenAi",
		"popularity": .75
	},
	{
		"id": "@n8n/n8n-nodes-langchain.mcpTrigger",
		"popularity": .699
	},
	{
		"id": "n8n-nodes-base.googleCalendar",
		"popularity": .74
	},
	{
		"id": "n8n-nodes-base.form",
		"popularity": .726
	},
	{
		"id": "n8n-nodes-base.microsoftOutlook",
		"popularity": .721
	},
	{
		"id": "n8n-nodes-base.emailReadImap",
		"popularity": .701
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserAutofixing",
		"popularity": .672
	},
	{
		"id": "n8n-nodes-base.gmailHitlTool",
		"popularity": .745
	},
	{
		"id": "n8n-nodes-base.executionData",
		"popularity": .638
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolSerpApi",
		"popularity": .249
	},
	{
		"id": "@n8n/n8n-nodes-langchain.anthropic",
		"popularity": .728
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textClassifier",
		"popularity": .709
	},
	{
		"id": "n8n-nodes-base.errorTrigger",
		"popularity": .694
	},
	{
		"id": "n8n-nodes-base.microsoftExcel",
		"popularity": .7
	},
	{
		"id": "n8n-nodes-base.notion",
		"popularity": .741
	},
	{
		"id": "n8n-nodes-base.discord",
		"popularity": .715
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolCalculator",
		"popularity": .684
	},
	{
		"id": "n8n-nodes-base.summarize",
		"popularity": .668
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserItemList",
		"popularity": .612
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreInMemory",
		"popularity": .713
	},
	{
		"id": "n8n-nodes-base.stopAndError",
		"popularity": .662
	},
	{
		"id": "n8n-nodes-base.youTube",
		"popularity": .653
	},
	{
		"id": "n8n-nodes-base.aiTransform",
		"popularity": .641
	},
	{
		"id": "n8n-nodes-base.dateTime",
		"popularity": .676
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreSupabase",
		"popularity": .7
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStorePinecone",
		"popularity": .716
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryRedisChat",
		"popularity": .635
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatXAiGrok",
		"popularity": .631
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryMongoDbChat",
		"popularity": .648
	},
	{
		"id": "@n8n/n8n-nodes-langchain.modelSelector",
		"popularity": .623
	},
	{
		"id": "n8n-nodes-base.microsoftOutlookTrigger",
		"popularity": .642
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainRetrievalQa",
		"popularity": .623
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsGoogleGemini",
		"popularity": .7
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAzureOpenAi",
		"popularity": .616
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter",
		"popularity": .655
	},
	{
		"id": "n8n-nodes-base.markdown",
		"popularity": .621
	},
	{
		"id": "n8n-nodes-base.googleDocsTool",
		"popularity": .649
	},
	{
		"id": "@apify/n8n-nodes-apify.apify",
		"popularity": .68
	},
	{
		"id": "n8n-nodes-base.facebookGraphApi",
		"popularity": .655
	},
	{
		"id": "n8n-nodes-base.removeDuplicates",
		"popularity": .663
	},
	{
		"id": "n8n-nodes-base.rssFeedReadTrigger",
		"popularity": .645
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryManager",
		"popularity": .614
	},
	{
		"id": "n8n-nodes-base.slackTrigger",
		"popularity": .633
	},
	{
		"id": "n8n-nodes-base.googleDriveTool",
		"popularity": .639
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmOllama",
		"popularity": .637
	},
	{
		"id": "n8n-nodes-base.mySql",
		"popularity": .695
	},
	{
		"id": "@n8n/n8n-nodes-langchain.mcpClient",
		"popularity": .639
	},
	{
		"id": "n8n-nodes-base.ssh",
		"popularity": .644
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGoogleVertex",
		"popularity": .617
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolThink",
		"popularity": .58
	},
	{
		"id": "n8n-nodes-base.sort",
		"popularity": .641
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWikipedia",
		"popularity": .654
	},
	{
		"id": "n8n-nodes-base.executeCommand",
		"popularity": .686
	},
	{
		"id": "n8n-nodes-base.microsoftTeams",
		"popularity": .627
	},
	{
		"id": "n8n-nodes-base.twilio",
		"popularity": .633
	},
	{
		"id": "n8n-nodes-base.telegramTool",
		"popularity": .606
	},
	{
		"id": "n8n-nodes-base.linkedIn",
		"popularity": .634
	},
	{
		"id": "n8n-nodes-base.redis",
		"popularity": .66
	},
	{
		"id": "n8n-nodes-base.facebookTrigger",
		"popularity": .616
	},
	{
		"id": "n8n-nodes-base.xml",
		"popularity": .614
	},
	{
		"id": "n8n-nodes-base.dataTableTool",
		"popularity": .64
	},
	{
		"id": "n8n-nodes-base.n8n",
		"popularity": .586
	},
	{
		"id": "@tavily/n8n-nodes-tavily.tavily",
		"popularity": .574
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolVectorStore",
		"popularity": .584
	},
	{
		"id": "n8n-nodes-base.supabaseTool",
		"popularity": .62
	},
	{
		"id": "@elevenlabs/n8n-nodes-elevenlabs.elevenLabs",
		"popularity": .606
	},
	{
		"id": "n8n-nodes-base.evaluationTrigger",
		"popularity": .653
	},
	{
		"id": "n8n-nodes-base.perplexity",
		"popularity": .453
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryMotorhead",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-base.openWeatherMap",
		"popularity": .645
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatMistralCloud",
		"popularity": .651
	},
	{
		"id": "@mookielianhd/n8n-nodes-instagram.instagram",
		"popularity": .597
	},
	{
		"id": "n8n-nodes-base.editImage",
		"popularity": .613
	},
	{
		"id": "n8n-nodes-base.telegramHitlTool",
		"popularity": .612
	},
	{
		"id": "n8n-nodes-base.microsoftOneDrive",
		"popularity": .644
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsOllama",
		"popularity": .628
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStorePGVector",
		"popularity": .59
	},
	{
		"id": "n8n-nodes-whatsable.whatsAble",
		"popularity": .569
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreQdrant",
		"popularity": .658
	},
	{
		"id": "n8n-nodes-base.compareDatasets",
		"popularity": .57
	},
	{
		"id": "n8n-nodes-base.microsoftSharePoint",
		"popularity": .62
	},
	{
		"id": "n8n-nodes-base.hubspot",
		"popularity": .645
	},
	{
		"id": "@n8n/n8n-nodes-langchain.sentimentAnalysis",
		"popularity": .584
	},
	{
		"id": "n8n-nodes-base.jira",
		"popularity": .607
	},
	{
		"id": "n8n-nodes-base.crypto",
		"popularity": .581
	},
	{
		"id": "n8n-nodes-base.airtableTrigger",
		"popularity": .594
	},
	{
		"id": "n8n-nodes-base.wordpress",
		"popularity": .587
	},
	{
		"id": "n8n-nodes-base.dateTimeTool",
		"popularity": .636
	},
	{
		"id": "n8n-nodes-base.postgresTool",
		"popularity": .611
	},
	{
		"id": "n8n-nodes-base.openWeatherMapTool",
		"popularity": .608
	},
	{
		"id": "n8n-nodes-base.github",
		"popularity": .598
	},
	{
		"id": "n8n-nodes-base.airtableTool",
		"popularity": .655
	},
	{
		"id": "n8n-nodes-base.whatsAppTool",
		"popularity": .532
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainSummarization",
		"popularity": .542
	},
	{
		"id": "n8n-nodes-base.twitter",
		"popularity": .549
	},
	{
		"id": "@n8n/n8n-nodes-langchain.guardrails",
		"popularity": .563
	},
	{
		"id": "n8n-nodes-base.microsoftSql",
		"popularity": .635
	},
	{
		"id": "n8n-nodes-base.evaluation",
		"popularity": .565
	},
	{
		"id": "n8n-nodes-base.whatsAppHitlTool",
		"popularity": .555
	},
	{
		"id": "n8n-nodes-base.perplexityTool",
		"popularity": .523
	},
	{
		"id": "n8n-nodes-base.ftp",
		"popularity": .571
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmOpenHuggingFaceInference",
		"popularity": .541
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverVectorStore",
		"popularity": .568
	},
	{
		"id": "n8n-nodes-base.notionTrigger",
		"popularity": .552
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAwsBedrock",
		"popularity": .557
	},
	{
		"id": "n8n-nodes-base.compression",
		"popularity": .543
	},
	{
		"id": "n8n-nodes-base.googleChat",
		"popularity": .558
	},
	{
		"id": "n8n-nodes-base.n8nTrainingCustomerDatastore",
		"popularity": .632
	},
	{
		"id": "n8n-nodes-base.hackerNews",
		"popularity": .593
	},
	{
		"id": "@mendable/n8n-nodes-firecrawl.firecrawl",
		"popularity": .608
	},
	{
		"id": "n8n-nodes-htmlcsstopdf.htmlcsstopdf",
		"popularity": .532
	},
	{
		"id": "@blotato/n8n-nodes-blotato.blotato",
		"popularity": .46
	},
	{
		"id": "n8n-nodes-base.microsoftExcelTool",
		"popularity": .57
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryXata",
		"popularity": .55
	},
	{
		"id": "n8n-nodes-base.notionTool",
		"popularity": .537
	},
	{
		"id": "n8n-nodes-base.clickUp",
		"popularity": .585
	},
	{
		"id": "n8n-nodes-base.linkedInTool",
		"popularity": .52
	},
	{
		"id": "n8n-nodes-base.googleCalendarTrigger",
		"popularity": .543
	},
	{
		"id": "n8n-nodes-base.facebookLeadAdsTrigger",
		"popularity": .547
	},
	{
		"id": "n8n-nodes-cronlytic.cronlyticTrigger",
		"popularity": .274
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter",
		"popularity": .528
	},
	{
		"id": "n8n-nodes-serpapi.serpApi",
		"popularity": .57
	},
	{
		"id": "@brave/n8n-nodes-brave-search.braveSearch",
		"popularity": .5
	},
	{
		"id": "n8n-nodes-base.postgresTrigger",
		"popularity": .533
	},
	{
		"id": "n8n-nodes-base.mistralAi",
		"popularity": .526
	},
	{
		"id": "n8n-nodes-base.debugHelper",
		"popularity": .47
	},
	{
		"id": "n8n-nodes-base.emailSendHitlTool",
		"popularity": .553
	},
	{
		"id": "n8n-nodes-base.mongoDb",
		"popularity": .557
	},
	{
		"id": "n8n-nodes-base.renameKeys",
		"popularity": .551
	},
	{
		"id": "n8n-nodes-base.microsoftTeamsTrigger",
		"popularity": .513
	},
	{
		"id": "n8n-nodes-base.twilioTrigger",
		"popularity": .509
	},
	{
		"id": "n8n-nodes-base.line",
		"popularity": .542
	},
	{
		"id": "n8n-nodes-base.rssFeedReadTool",
		"popularity": .534
	},
	{
		"id": "n8n-nodes-base.shopify",
		"popularity": .541
	},
	{
		"id": "n8n-nodes-base.s3",
		"popularity": .541
	},
	{
		"id": "n8n-nodes-base.salesforce",
		"popularity": .589
	},
	{
		"id": "n8n-nodes-base.nasa",
		"popularity": .533
	},
	{
		"id": "n8n-nodes-base.awsS3",
		"popularity": .524
	},
	{
		"id": "n8n-nodes-base.n8nTrainingCustomerMessenger",
		"popularity": .458
	},
	{
		"id": "n8n-nodes-base.microsoftOutlookTool",
		"popularity": .527
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsHuggingFaceInference",
		"popularity": .542
	},
	{
		"id": "n8n-nodes-base.filemaker",
		"popularity": .461
	},
	{
		"id": "@n8n/n8n-nodes-langchain.rerankerCohere",
		"popularity": .495
	},
	{
		"id": "n8n-nodes-base.emailSendTool",
		"popularity": .492
	},
	{
		"id": "n8n-nodes-base.typeformTrigger",
		"popularity": .527
	},
	{
		"id": "n8n-nodes-base.odoo",
		"popularity": .577
	},
	{
		"id": "n8n-nodes-base.n8nTrigger",
		"popularity": .493
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatCohere",
		"popularity": .527
	},
	{
		"id": "n8n-nodes-base.mySqlTool",
		"popularity": .535
	},
	{
		"id": "n8n-nodes-base.youTubeTool",
		"popularity": .473
	},
	{
		"id": "n8n-nodes-base.githubTrigger",
		"popularity": .52
	},
	{
		"id": "n8n-nodes-base.slackTool",
		"popularity": .481
	},
	{
		"id": "n8n-nodes-base.sseTrigger",
		"popularity": .508
	},
	{
		"id": "n8n-nodes-base.nocoDb",
		"popularity": .594
	},
	{
		"id": "@aotoki/n8n-nodes-line-messaging.lineMessaging",
		"popularity": .557
	},
	{
		"id": "n8n-nodes-base.highLevel",
		"popularity": .513
	},
	{
		"id": "n8n-nodes-base.reddit",
		"popularity": .483
	},
	{
		"id": "n8n-nodes-base.googleBigQuery",
		"popularity": .539
	},
	{
		"id": "n8n-nodes-base.dropbox",
		"popularity": .537
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsGoogleVertex",
		"popularity": .465
	},
	{
		"id": "n8n-nodes-cloudinary.cloudinary",
		"popularity": .51
	},
	{
		"id": "n8n-nodes-base.timeSaved",
		"popularity": .476
	},
	{
		"id": "n8n-nodes-base.googleSlides",
		"popularity": .489
	},
	{
		"id": "n8n-nodes-base.quickChart",
		"popularity": .471
	},
	{
		"id": "n8n-nodes-base.jiraTool",
		"popularity": .503
	},
	{
		"id": "n8n-nodes-base.hubspotTrigger",
		"popularity": .506
	},
	{
		"id": "n8n-nodes-base.microsoftOneDriveTrigger",
		"popularity": .477
	},
	{
		"id": "n8n-nodes-base.jiraTrigger",
		"popularity": .485
	},
	{
		"id": "n8n-nodes-base.baserow",
		"popularity": .593
	},
	{
		"id": "n8n-nodes-base.googleTasks",
		"popularity": .494
	},
	{
		"id": "n8n-nodes-base.microsoftOutlookHitlTool",
		"popularity": .52
	},
	{
		"id": "n8n-nodes-base.trello",
		"popularity": .564
	},
	{
		"id": "n8n-nodes-base.mondayCom",
		"popularity": .552
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsCohere",
		"popularity": .541
	},
	{
		"id": "n8n-nodes-pdfco.PDFco Api",
		"popularity": .495
	},
	{
		"id": "n8n-nodes-tallyforms.tallyTrigger",
		"popularity": .532
	},
	{
		"id": "n8n-nodes-base.googleContacts",
		"popularity": .5
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterTokenSplitter",
		"popularity": .464
	},
	{
		"id": "n8n-nodes-base.formIoTrigger",
		"popularity": .637
	},
	{
		"id": "n8n-nodes-base.marketstackTool",
		"popularity": .64
	},
	{
		"id": "n8n-nodes-base.shopifyTrigger",
		"popularity": .501
	},
	{
		"id": "n8n-nodes-qdrant.qdrant",
		"popularity": .508
	},
	{
		"id": "n8n-nodes-base.calendlyTrigger",
		"popularity": .495
	},
	{
		"id": "n8n-nodes-base.pipedrive",
		"popularity": .593
	},
	{
		"id": "n8n-nodes-base.githubTool",
		"popularity": .502
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverContextualCompression",
		"popularity": .462
	},
	{
		"id": "n8n-nodes-base.todoist",
		"popularity": .471
	},
	{
		"id": "n8n-nodes-base.postBin",
		"popularity": .524
	},
	{
		"id": "n8n-nodes-base.sendInBlue",
		"popularity": .515
	},
	{
		"id": "n8n-nodes-base.homeAssistant",
		"popularity": .488
	},
	{
		"id": "@searchapi/n8n-nodes-searchapi.searchApi",
		"popularity": .48
	},
	{
		"id": "n8n-nodes-base.calTrigger",
		"popularity": .513
	},
	{
		"id": "n8n-nodes-base.googleChatHitlTool",
		"popularity": .512
	},
	{
		"id": "n8n-nodes-base.googleTasksTool",
		"popularity": .501
	},
	{
		"id": "n8n-nodes-base.hunter",
		"popularity": .439
	},
	{
		"id": "n8n-nodes-base.googleAds",
		"popularity": .461
	},
	{
		"id": "n8n-nodes-base.asana",
		"popularity": .522
	},
	{
		"id": "n8n-nodes-base.wooCommerce",
		"popularity": .524
	},
	{
		"id": "n8n-nodes-base.zohoCrm",
		"popularity": .531
	},
	{
		"id": "n8n-nodes-base.clickUpTrigger",
		"popularity": .474
	},
	{
		"id": "n8n-nodes-base.slackHitlTool",
		"popularity": .469
	},
	{
		"id": "n8n-nodes-base.actionNetwork",
		"popularity": .415
	},
	{
		"id": "n8n-nodes-base.graphql",
		"popularity": .453
	},
	{
		"id": "n8n-nodes-base.philipsHueTool",
		"popularity": .326
	},
	{
		"id": "n8n-nodes-base.discordTool",
		"popularity": .439
	},
	{
		"id": "n8n-nodes-base.googleTranslate",
		"popularity": .436
	},
	{
		"id": "n8n-nodes-base.nextCloud",
		"popularity": .525
	},
	{
		"id": "@cloudconvert/n8n-nodes-cloudconvert.cloudConvert",
		"popularity": .434
	},
	{
		"id": "n8n-nodes-base.stripeTrigger",
		"popularity": .456
	},
	{
		"id": "n8n-nodes-upload-post.uploadPost",
		"popularity": .473
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatVercelAiGateway",
		"popularity": .428
	},
	{
		"id": "n8n-nodes-base.jotFormTrigger",
		"popularity": .475
	},
	{
		"id": "n8n-nodes-base.facebookGraphApiTool",
		"popularity": .431
	},
	{
		"id": "n8n-nodes-base.googleAnalytics",
		"popularity": .461
	},
	{
		"id": "n8n-nodes-base.togglTrigger",
		"popularity": .378
	},
	{
		"id": "n8n-nodes-aiscraper.aiScraper",
		"popularity": .338
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsAzureOpenAi",
		"popularity": .453
	},
	{
		"id": "n8n-nodes-base.oracleDatabase",
		"popularity": .49
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmLemonade",
		"popularity": .415
	},
	{
		"id": "n8n-nodes-base.googleFirebaseCloudFirestore",
		"popularity": .474
	},
	{
		"id": "n8n-nodes-base.localFileTrigger",
		"popularity": .467
	},
	{
		"id": "n8n-nodes-base.spotify",
		"popularity": .463
	},
	{
		"id": "n8n-nodes-base.discordHitlTool",
		"popularity": .444
	},
	{
		"id": "n8n-nodes-base.stripe",
		"popularity": .425
	},
	{
		"id": "n8n-nodes-base.snowflake",
		"popularity": .497
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverWorkflow",
		"popularity": .427
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverMultiQuery",
		"popularity": .44
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreMongoDBAtlas",
		"popularity": .436
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatLemonade",
		"popularity": .423
	},
	{
		"id": "n8n-nodes-base.pushover",
		"popularity": .543
	},
	{
		"id": "@n8n/n8n-nodes-langchain.code",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.sendGrid",
		"popularity": .433
	},
	{
		"id": "n8n-nodes-base.jwt",
		"popularity": .446
	},
	{
		"id": "n8n-nodes-base.googleCloudStorage",
		"popularity": .401
	},
	{
		"id": "n8n-nodes-base.googleContactsTool",
		"popularity": .466
	},
	{
		"id": "n8n-nodes-base.microsoftSqlTool",
		"popularity": .451
	},
	{
		"id": "n8n-nodes-google-search-console.googleSearchConsole",
		"popularity": .454
	},
	{
		"id": "n8n-nodes-base.wordpressTool",
		"popularity": .412
	},
	{
		"id": "n8n-nodes-base.pushoverTool",
		"popularity": .53
	},
	{
		"id": "n8n-nodes-base.salesforceTrigger",
		"popularity": .431
	},
	{
		"id": "n8n-nodes-pdf4me.PDF4me",
		"popularity": .399
	},
	{
		"id": "n8n-nodes-base.shopifyTool",
		"popularity": .468
	},
	{
		"id": "n8n-nodes-base.microsoftSharePointTool",
		"popularity": .414
	},
	{
		"id": "n8n-nodes-base.jinaAi",
		"popularity": .409
	},
	{
		"id": "n8n-nodes-base.git",
		"popularity": .419
	},
	{
		"id": "n8n-nodes-base.hubspotTool",
		"popularity": .421
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsMistralCloud",
		"popularity": .509
	},
	{
		"id": "n8n-nodes-base.microsoftOneDriveTool",
		"popularity": .402
	},
	{
		"id": "n8n-nodes-base.zendesk",
		"popularity": .474
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreChromaDB",
		"popularity": .492
	},
	{
		"id": "n8n-nodes-syncmate.whatsAuto",
		"popularity": .39
	},
	{
		"id": "n8n-nodes-base.twilioTool",
		"popularity": .387
	},
	{
		"id": "n8n-nodes-base.gitlab",
		"popularity": .435
	},
	{
		"id": "n8n-nodes-linked-api.linkedApi",
		"popularity": .373
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreAzureAISearch",
		"popularity": .4
	},
	{
		"id": "n8n-nodes-base.mqttTrigger",
		"popularity": .432
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolSearXng",
		"popularity": .46
	},
	{
		"id": "n8n-nodes-base.dhl",
		"popularity": .341
	},
	{
		"id": "n8n-nodes-base.airtop",
		"popularity": .433
	},
	{
		"id": "n8n-nodes-base.redisTool",
		"popularity": .363
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfile",
		"popularity": .436
	},
	{
		"id": "n8n-nodes-base.quickbooks",
		"popularity": .477
	},
	{
		"id": "n8n-nodes-base.hackerNewsTool",
		"popularity": .383
	},
	{
		"id": "n8n-nodes-base.microsoftTeamsHitlTool",
		"popularity": .401
	},
	{
		"id": "n8n-nodes-base.mailgun",
		"popularity": .395
	},
	{
		"id": "n8n-nodes-base.mongoDbTool",
		"popularity": .44
	},
	{
		"id": "n8n-nodes-base.zoom",
		"popularity": .401
	},
	{
		"id": "n8n-nodes-base.gitlabTrigger",
		"popularity": .416
	},
	{
		"id": "n8n-nodes-base.wooCommerceTrigger",
		"popularity": .423
	},
	{
		"id": "n8n-nodes-base.microsoftTeamsTool",
		"popularity": .386
	},
	{
		"id": "n8n-nodes-base.twitterTool",
		"popularity": .368
	},
	{
		"id": "@pdfgeneratorapi/n8n-nodes-pdf-generator-api.pdfGeneratorApi",
		"popularity": .351
	},
	{
		"id": "n8n-nodes-base.deepL",
		"popularity": .342
	},
	{
		"id": "n8n-nodes-powerbi.powerBi",
		"popularity": .421
	},
	{
		"id": "n8n-nodes-base.activeCampaign",
		"popularity": .444
	},
	{
		"id": "n8n-nodes-base.mqtt",
		"popularity": .417
	},
	{
		"id": "n8n-nodes-base.redisTrigger",
		"popularity": .36
	},
	{
		"id": "n8n-nodes-base.clickUpTool",
		"popularity": .365
	},
	{
		"id": "n8n-nodes-base.trelloTrigger",
		"popularity": .434
	},
	{
		"id": "@pinecone-database/n8n-nodes-pinecone-assistant.pineconeAssistant",
		"popularity": .395
	},
	{
		"id": "n8n-nodes-base.totp",
		"popularity": .336
	},
	{
		"id": "@firefliesai/n8n-nodes-fireflies.fireflies",
		"popularity": .408
	},
	{
		"id": "n8n-nodes-htmlcsstoimage.htmlCssToImage",
		"popularity": .404
	},
	{
		"id": "n8n-nodes-instantly.instantly",
		"popularity": .417
	},
	{
		"id": "n8n-nodes-base.homeAssistantTool",
		"popularity": .387
	},
	{
		"id": "n8n-nodes-base.mattermost",
		"popularity": .425
	},
	{
		"id": "n8n-nodes-assemblyai.assemblyAi",
		"popularity": .413
	},
	{
		"id": "n8n-nodes-base.azureStorage",
		"popularity": .38
	},
	{
		"id": "n8n-nodes-base.mailchimp",
		"popularity": .395
	},
	{
		"id": "n8n-nodes-base.todoistTool",
		"popularity": .427
	},
	{
		"id": "n8n-nodes-base.microsoftEntra",
		"popularity": .392
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsAwsBedrock",
		"popularity": .414
	},
	{
		"id": "n8n-nodes-base.linear",
		"popularity": .404
	},
	{
		"id": "n8n-nodes-base.webflow",
		"popularity": .391
	},
	{
		"id": "n8n-nodes-base.awsLambda",
		"popularity": .4
	},
	{
		"id": "n8n-nodes-pdfvector.pdfVector",
		"popularity": .321
	},
	{
		"id": "n8n-nodes-base.rabbitmqTrigger",
		"popularity": .396
	},
	{
		"id": "n8n-nodes-base.asanaTrigger",
		"popularity": .447
	},
	{
		"id": "n8n-nodes-base.rabbitmq",
		"popularity": .4
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmCohere",
		"popularity": .353
	},
	{
		"id": "@apify/n8n-nodes-apify.apifyTrigger",
		"popularity": .416
	},
	{
		"id": "n8n-nodes-base.gSuiteAdmin",
		"popularity": .396
	},
	{
		"id": "n8n-nodes-base.formstackTrigger",
		"popularity": .428
	},
	{
		"id": "n8n-nodes-base.googleTranslateTool",
		"popularity": .341
	},
	{
		"id": "n8n-nodes-base.spotifyTool",
		"popularity": .42
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfileTrigger",
		"popularity": .38
	},
	{
		"id": "n8n-nodes-veed.veed",
		"popularity": .29
	},
	{
		"id": "n8n-nodes-base.acuitySchedulingTrigger",
		"popularity": .37
	},
	{
		"id": "n8n-nodes-base.metabase",
		"popularity": .419
	},
	{
		"id": "n8n-nodes-base.pipedriveTrigger",
		"popularity": .401
	},
	{
		"id": "n8n-nodes-base.phantombuster",
		"popularity": .4
	},
	{
		"id": "n8n-nodes-base.microsoftToDo",
		"popularity": .403
	},
	{
		"id": "n8n-nodes-base.kafkaTrigger",
		"popularity": .36
	},
	{
		"id": "n8n-nodes-base.serviceNow",
		"popularity": .402
	},
	{
		"id": "n8n-nodes-base.customerIoTool",
		"popularity": .45
	},
	{
		"id": "n8n-nodes-base.googleSlidesTool",
		"popularity": .346
	},
	{
		"id": "n8n-nodes-base.figmaTrigger",
		"popularity": .336
	},
	{
		"id": "n8n-nodes-base.zohoCrmTool",
		"popularity": .365
	},
	{
		"id": "n8n-nodes-base.wooCommerceTool",
		"popularity": .404
	},
	{
		"id": "n8n-nodes-browserbase.browserbase",
		"popularity": .414
	},
	{
		"id": "n8n-nodes-base.googleChatTool",
		"popularity": .366
	},
	{
		"id": "n8n-nodes-base.freshdesk",
		"popularity": .406
	},
	{
		"id": "n8n-nodes-base.highLevelTool",
		"popularity": .336
	},
	{
		"id": "n8n-nodes-base.trelloTool",
		"popularity": .417
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreRedis",
		"popularity": .351
	},
	{
		"id": "n8n-nodes-base.matrix",
		"popularity": .427
	},
	{
		"id": "n8n-nodes-base.ldap",
		"popularity": .422
	},
	{
		"id": "n8n-nodes-base.mistralAiTool",
		"popularity": .33
	},
	{
		"id": "n8n-nodes-base.quickbooksTool",
		"popularity": .369
	},
	{
		"id": "n8n-nodes-base.kafka",
		"popularity": .374
	},
	{
		"id": "n8n-nodes-base.messageBird",
		"popularity": .365
	},
	{
		"id": "n8n-nodes-linkupapi.linkup",
		"popularity": .34
	},
	{
		"id": "n8n-nodes-base.salesforceTool",
		"popularity": .36
	},
	{
		"id": "n8n-nodes-base.odooTool",
		"popularity": .361
	},
	{
		"id": "n8n-nodes-base.xero",
		"popularity": .421
	},
	{
		"id": "n8n-nodes-base.bitbucketTrigger",
		"popularity": .316
	},
	{
		"id": "@custom-js/n8n-nodes-pdf-toolkit-v2.pdfToolkit",
		"popularity": .315
	},
	{
		"id": "n8n-nodes-base.googleAnalyticsTool",
		"popularity": .35
	},
	{
		"id": "n8n-nodes-base.pipedriveTool",
		"popularity": .438
	},
	{
		"id": "n8n-nodes-base.mailcheck",
		"popularity": .32
	},
	{
		"id": "n8n-nodes-base.googleBigQueryTool",
		"popularity": .331
	},
	{
		"id": "n8n-nodes-base.elasticsearch",
		"popularity": .357
	},
	{
		"id": "n8n-nodes-base.actionNetworkTool",
		"popularity": .301
	},
	{
		"id": "n8n-nodes-browseract.browserAct",
		"popularity": .288
	},
	{
		"id": "n8n-nodes-base.grafana",
		"popularity": .361
	},
	{
		"id": "n8n-nodes-base.jinaAiTool",
		"popularity": .367
	},
	{
		"id": "n8n-nodes-base.linearTrigger",
		"popularity": .351
	},
	{
		"id": "n8n-nodes-base.awsTextract",
		"popularity": .309
	},
	{
		"id": "n8n-nodes-base.emailReadImapTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-autocalls.autocalls",
		"popularity": .293
	},
	{
		"id": "n8n-nodes-base.baserowTool",
		"popularity": .391
	},
	{
		"id": "n8n-nodes-base.awsSes",
		"popularity": .408
	},
	{
		"id": "n8n-nodes-base.gitlabTool",
		"popularity": .324
	},
	{
		"id": "n8n-nodes-postiz.postiz",
		"popularity": .392
	},
	{
		"id": "n8n-nodes-base.nocoDbTool",
		"popularity": .386
	},
	{
		"id": "n8n-nodes-base.redditTool",
		"popularity": .337
	},
	{
		"id": "n8n-nodes-base.affinity",
		"popularity": .333
	},
	{
		"id": "n8n-nodes-base.executeCommandTool",
		"popularity": .359
	},
	{
		"id": "n8n-nodes-pdfmonkey.pdfMonkey",
		"popularity": .359
	},
	{
		"id": "n8n-nodes-aimlapi.aimlApi",
		"popularity": .301
	},
	{
		"id": "n8n-nodes-documentero.documentero",
		"popularity": .346
	},
	{
		"id": "n8n-nodes-base.coinGecko",
		"popularity": .331
	},
	{
		"id": "n8n-nodes-base.apiTemplateIo",
		"popularity": .332
	},
	{
		"id": "n8n-nodes-base.adalo",
		"popularity": .321
	},
	{
		"id": "n8n-nodes-scrapfly.Scrapfly",
		"popularity": .27
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreMilvus",
		"popularity": .319
	},
	{
		"id": "n8n-nodes-base.zendeskTrigger",
		"popularity": .345
	},
	{
		"id": "n8n-nodes-base.googleAdsTool",
		"popularity": .324
	},
	{
		"id": "n8n-nodes-base.agileCrm",
		"popularity": .304
	},
	{
		"id": "n8n-nodes-base.strava",
		"popularity": .328
	},
	{
		"id": "@fal-ai/n8n-nodes-fal.falAi",
		"popularity": .412
	},
	{
		"id": "n8n-nodes-base.nextCloudTool",
		"popularity": .324
	},
	{
		"id": "@nskha/n8n-nodes-scrappey.scrappey",
		"popularity": .259
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreZep",
		"popularity": .354
	},
	{
		"id": "n8n-nodes-scrapingbee.ScrapingBee",
		"popularity": .291
	},
	{
		"id": "@brightdata/n8n-nodes-brightdata.brightData",
		"popularity": .32
	},
	{
		"id": "@n8n/n8n-nodes-langchain.microsoftAgent365Trigger",
		"popularity": .427
	},
	{
		"id": "n8n-nodes-base.oracleDatabaseTool",
		"popularity": .328
	},
	{
		"id": "n8n-nodes-base.bubble",
		"popularity": .331
	},
	{
		"id": "n8n-nodes-base.urlScanIo",
		"popularity": .315
	},
	{
		"id": "n8n-nodes-base.erpNext",
		"popularity": .391
	},
	{
		"id": "n8n-nodes-base.stravaTrigger",
		"popularity": .307
	},
	{
		"id": "n8n-nodes-base.awsTranscribe",
		"popularity": .256
	},
	{
		"id": "n8n-nodes-base.awsDynamoDb",
		"popularity": .329
	},
	{
		"id": "n8n-nodes-base.webflowTool",
		"popularity": .27
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreWeaviate",
		"popularity": .307
	},
	{
		"id": "n8n-nodes-base.dropboxTool",
		"popularity": .301
	},
	{
		"id": "n8n-nodes-postfast.postFast",
		"popularity": .288
	},
	{
		"id": "n8n-nodes-base.box",
		"popularity": .359
	},
	{
		"id": "n8n-nodes-outscraper.outscraper",
		"popularity": .29
	},
	{
		"id": "n8n-nodes-browserflow.browserflow",
		"popularity": .272
	},
	{
		"id": "n8n-nodes-base.webflowTrigger",
		"popularity": .346
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsLemonade",
		"popularity": .305
	},
	{
		"id": "n8n-nodes-dataforseo.dataForSeo",
		"popularity": .331
	},
	{
		"id": "n8n-nodes-base.cloudflare",
		"popularity": .329
	},
	{
		"id": "n8n-nodes-base.vonage",
		"popularity": .27
	},
	{
		"id": "n8n-nodes-scrape-creators.scrapeCreators",
		"popularity": .304
	},
	{
		"id": "n8n-nodes-base.humanticAiTool",
		"popularity": .188
	},
	{
		"id": "n8n-nodes-base.zammad",
		"popularity": .398
	},
	{
		"id": "n8n-nodes-tmpfiles.tmpfiles",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.eventbriteTrigger",
		"popularity": .317
	},
	{
		"id": "n8n-nodes-base.googleCloudStorageTool",
		"popularity": .246
	},
	{
		"id": "n8n-nodes-base.googleFirebaseCloudFirestoreTool",
		"popularity": .328
	},
	{
		"id": "n8n-nodes-base.lemlist",
		"popularity": .328
	},
	{
		"id": "n8n-nodes-base.awsS3Tool",
		"popularity": .279
	},
	{
		"id": "n8n-nodes-triggercmd.triggercmd",
		"popularity": .299
	},
	{
		"id": "n8n-nodes-base.awsTextractTool",
		"popularity": .231
	},
	{
		"id": "@respond-io/n8n-nodes-respond-io.respondio",
		"popularity": .434
	},
	{
		"id": "n8n-nodes-base.googleFirebaseRealtimeDatabaseTool",
		"popularity": .283
	},
	{
		"id": "n8n-nodes-resend.resend",
		"popularity": .476
	},
	{
		"id": "n8n-nodes-base.asanaTool",
		"popularity": .339
	},
	{
		"id": "n8n-nodes-zohozeptomail.zohoZeptomail",
		"popularity": .33
	},
	{
		"id": "n8n-nodes-base.bannerbear",
		"popularity": .307
	},
	{
		"id": "n8n-nodes-base.googleFirebaseRealtimeDatabase",
		"popularity": .293
	},
	{
		"id": "n8n-nodes-base.mautic",
		"popularity": .332
	},
	{
		"id": "n8n-nodes-pdforge.pdforge",
		"popularity": .243
	},
	{
		"id": "n8n-nodes-base.mailjet",
		"popularity": .299
	},
	{
		"id": "n8n-nodes-base.cloudflareTool",
		"popularity": .31
	},
	{
		"id": "n8n-nodes-base.jenkins",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.microsoftGraphSecurityTool",
		"popularity": .218
	},
	{
		"id": "n8n-nodes-olostep.olostepScrape",
		"popularity": .246
	},
	{
		"id": "n8n-nodes-base.quickChartTool",
		"popularity": .281
	},
	{
		"id": "n8n-nodes-base.microsoftToDoTool",
		"popularity": .319
	},
	{
		"id": "n8n-nodes-base.cryptoTool",
		"popularity": .235
	},
	{
		"id": "n8n-nodes-anchorbrowser.anchorBrowser",
		"popularity": .207
	},
	{
		"id": "n8n-nodes-base.payPal",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-base.activeCampaignTrigger",
		"popularity": .316
	},
	{
		"id": "n8n-nodes-base.gong",
		"popularity": .307
	},
	{
		"id": "@2chat/n8n-nodes-twochat.twoChat",
		"popularity": .374
	},
	{
		"id": "n8n-nodes-base.elasticsearchTool",
		"popularity": .291
	},
	{
		"id": "n8n-nodes-get-transcribe.getTranscribe",
		"popularity": .231
	},
	{
		"id": "n8n-nodes-base.airtopTool",
		"popularity": .32
	},
	{
		"id": "n8n-nodes-base.gotify",
		"popularity": .345
	},
	{
		"id": "n8n-nodes-avatartalk.avatarTalk",
		"popularity": .218
	},
	{
		"id": "n8n-nodes-scrapegraphai.scrapegraphAi",
		"popularity": .207
	},
	{
		"id": "n8n-nodes-base.medium",
		"popularity": .281
	},
	{
		"id": "n8n-nodes-base.mailerLite",
		"popularity": .347
	},
	{
		"id": "n8n-nodes-base.travisCiTool",
		"popularity": .264
	},
	{
		"id": "n8n-nodes-ticktick.tickTick",
		"popularity": .344
	},
	{
		"id": "n8n-nodes-base.rocketchat",
		"popularity": .305
	},
	{
		"id": "n8n-nodes-base.seaTable",
		"popularity": .41
	},
	{
		"id": "n8n-nodes-llmlayer.llmLayer",
		"popularity": .302
	},
	{
		"id": "n8n-nodes-docugenerate.docuGenerate",
		"popularity": .279
	},
	{
		"id": "n8n-nodes-base.lineTool",
		"popularity": .307
	},
	{
		"id": "n8n-nodes-base.googleCloudNaturalLanguageTool",
		"popularity": .256
	},
	{
		"id": "n8n-nodes-base.grist",
		"popularity": .38
	},
	{
		"id": "n8n-nodes-botnoi-voice.botnoitts",
		"popularity": .213
	},
	{
		"id": "@videodb/n8n-nodes-videodb.videoDb",
		"popularity": .299
	},
	{
		"id": "n8n-nodes-base.mondayComTool",
		"popularity": .29
	},
	{
		"id": "n8n-nodes-base.oneSimpleApiTool",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-base.intercom",
		"popularity": .304
	},
	{
		"id": "n8n-nodes-base.awsSqs",
		"popularity": .259
	},
	{
		"id": "n8n-nodes-base.zoomTool",
		"popularity": .31
	},
	{
		"id": "n8n-nodes-superchat.superchat",
		"popularity": .307
	},
	{
		"id": "@directus/n8n-nodes-directus.directus",
		"popularity": .323
	},
	{
		"id": "n8n-nodes-base.clockify",
		"popularity": .297
	},
	{
		"id": "n8n-nodes-base.googleCloudNaturalLanguage",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-opnform.opnformTrigger",
		"popularity": .329
	},
	{
		"id": "n8n-nodes-base.microsoftDynamicsCrm",
		"popularity": .309
	},
	{
		"id": "n8n-nodes-base.gSuiteAdminTool",
		"popularity": .305
	},
	{
		"id": "n8n-nodes-heyreach.heyReach",
		"popularity": .337
	},
	{
		"id": "n8n-nodes-base.freshservice",
		"popularity": .384
	},
	{
		"id": "n8n-nodes-scraperapi-official.scraperApi",
		"popularity": .372
	},
	{
		"id": "n8n-nodes-base.coinGeckoTool",
		"popularity": .231
	},
	{
		"id": "n8n-nodes-base.stripeTool",
		"popularity": .222
	},
	{
		"id": "n8n-nodes-base.deepLTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.filemakerTool",
		"popularity": .274
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfileTool",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-exa-official.exa",
		"popularity": .338
	},
	{
		"id": "n8n-nodes-fillout.filloutTrigger",
		"popularity": .365
	},
	{
		"id": "n8n-nodes-base.zendeskTool",
		"popularity": .264
	},
	{
		"id": "n8n-nodes-base.linearTool",
		"popularity": .195
	},
	{
		"id": "n8n-nodes-base.awsTranscribeTool",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-supadata.supadata",
		"popularity": .301
	},
	{
		"id": "n8n-nodes-base.messageBirdTool",
		"popularity": .253
	},
	{
		"id": "n8n-nodes-base.gitTool",
		"popularity": .283
	},
	{
		"id": "@langfuse/n8n-nodes-langfuse.langfuse",
		"popularity": .312
	},
	{
		"id": "n8n-nodes-base.payPalTrigger",
		"popularity": .272
	},
	{
		"id": "n8n-nodes-base.flow",
		"popularity": .313
	},
	{
		"id": "n8n-nodes-1shot.oneShot",
		"popularity": .361
	},
	{
		"id": "n8n-nodes-base.s3Tool",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-base.mindee",
		"popularity": .218
	},
	{
		"id": "n8n-nodes-base.coda",
		"popularity": .343
	},
	{
		"id": "n8n-nodes-base.sentryIo",
		"popularity": .283
	},
	{
		"id": "n8n-nodes-base.invoiceNinja",
		"popularity": .342
	},
	{
		"id": "n8n-nodes-base.apiTemplateIoTool",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-base.marketstack",
		"popularity": .365
	},
	{
		"id": "n8n-nodes-base.gumroadTrigger",
		"popularity": .249
	},
	{
		"id": "n8n-nodes-base.bitwarden",
		"popularity": .256
	},
	{
		"id": "@promptlayer/n8n-nodes-promptlayer-runagent.promptLayerRunAgent",
		"popularity": .201
	},
	{
		"id": "n8n-nodes-chat-data.chatData",
		"popularity": .304
	},
	{
		"id": "n8n-nodes-late.late",
		"popularity": .356
	},
	{
		"id": "n8n-nodes-base.microsoftGraphSecurity",
		"popularity": .253
	},
	{
		"id": "n8n-nodes-base.activeCampaignTool",
		"popularity": .264
	},
	{
		"id": "n8n-nodes-base.getResponse",
		"popularity": .239
	},
	{
		"id": "n8n-nodes-base.grafanaTool",
		"popularity": .246
	},
	{
		"id": "n8n-nodes-base.magento2",
		"popularity": .231
	},
	{
		"id": "@lusha-org/n8n-nodes-lusha.lusha",
		"popularity": .315
	},
	{
		"id": "n8n-nodes-oxylabs-ai-studio.oxylabsAiStudio",
		"popularity": .256
	},
	{
		"id": "n8n-nodes-base.philipsHue",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-pdf-api-hub.pdfSplitMerge",
		"popularity": .253
	},
	{
		"id": "n8n-nodes-base.sendInBlueTool",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-base.stravaTool",
		"popularity": .207
	},
	{
		"id": "n8n-nodes-templated.templated",
		"popularity": .274
	},
	{
		"id": "n8n-nodes-base.amqpTrigger",
		"popularity": .264
	},
	{
		"id": "n8n-nodes-base.amqp",
		"popularity": .256
	},
	{
		"id": "n8n-nodes-base.splunk",
		"popularity": .246
	},
	{
		"id": "n8n-nodes-vikunja.vikunja",
		"popularity": .365
	},
	{
		"id": "n8n-nodes-base.phantombusterTool",
		"popularity": .201
	},
	{
		"id": "@cloudsway-ai/n8n-nodes-cloudsway.smartSearch",
		"popularity": .259
	},
	{
		"id": "n8n-nodes-base.graphqlTool",
		"popularity": .249
	},
	{
		"id": "n8n-nodes-unstract.llmWhisperer",
		"popularity": .246
	},
	{
		"id": "@gotohuman/n8n-nodes-gotohuman.gotoHuman",
		"popularity": .195
	},
	{
		"id": "n8n-nodes-base.hunterTool",
		"popularity": .297
	},
	{
		"id": "n8n-nodes-human-in-the-loop.hitlNode",
		"popularity": .332
	},
	{
		"id": "n8n-nodes-base.mailchimpTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.microsoftEntraTool",
		"popularity": .231
	},
	{
		"id": "n8n-nodes-base.ciscoWebex",
		"popularity": .281
	},
	{
		"id": "n8n-nodes-base.affinityTrigger",
		"popularity": .222
	},
	{
		"id": "n8n-nodes-base.convertKitTool",
		"popularity": .222
	},
	{
		"id": "n8n-nodes-base.bambooHr",
		"popularity": .312
	},
	{
		"id": "n8n-nodes-base.dhlTool",
		"popularity": .172
	},
	{
		"id": "n8n-nodes-base.strapi",
		"popularity": .27
	},
	{
		"id": "n8n-nodes-base.sendInBlueTrigger",
		"popularity": .27
	},
	{
		"id": "@razorpay/n8n-nodes-razorpay.razorpay",
		"popularity": .293
	},
	{
		"id": "n8n-nodes-base.lemlistTrigger",
		"popularity": .307
	},
	{
		"id": "n8n-nodes-softr.softr",
		"popularity": .342
	},
	{
		"id": "n8n-nodes-base.okta",
		"popularity": .27
	},
	{
		"id": "@servicem8/n8n-nodes-servicem8.serviceM8",
		"popularity": .309
	},
	{
		"id": "n8n-nodes-base.wise",
		"popularity": .302
	},
	{
		"id": "n8n-nodes-base.customerIo",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-base.compressionTool",
		"popularity": .207
	},
	{
		"id": "n8n-nodes-screenshotbase.screenshotBase",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-base.azureCosmosDb",
		"popularity": .313
	},
	{
		"id": "n8n-nodes-base.bitly",
		"popularity": .222
	},
	{
		"id": "n8n-nodes-sourcegeek.sourcegeek",
		"popularity": .207
	},
	{
		"id": "n8n-nodes-base.getResponseTool",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-base.serviceNowTool",
		"popularity": .316
	},
	{
		"id": "n8n-nodes-base.snowflakeTool",
		"popularity": .302
	},
	{
		"id": "n8n-nodes-base.invoiceNinjaTool",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-base.metabaseTool",
		"popularity": .222
	},
	{
		"id": "n8n-nodes-base.freshserviceTool",
		"popularity": .207
	},
	{
		"id": "n8n-nodes-onenote.onenote",
		"popularity": .231
	},
	{
		"id": "n8n-nodes-base.affinityTool",
		"popularity": .231
	},
	{
		"id": "n8n-nodes-base.nasaTool",
		"popularity": .201
	},
	{
		"id": "n8n-nodes-hostinger-api.hostingerApi",
		"popularity": .305
	},
	{
		"id": "n8n-nodes-base.postHog",
		"popularity": .256
	},
	{
		"id": "n8n-nodes-base.sms77",
		"popularity": .307
	},
	{
		"id": "n8n-nodes-verifiemail.verifiEmail",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-placid.placid",
		"popularity": .325
	},
	{
		"id": "n8n-nodes-base.mailchimpTrigger",
		"popularity": .243
	},
	{
		"id": "@urlbox/n8n-nodes-urlbox.urlbox",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-base.convertKit",
		"popularity": .283
	},
	{
		"id": "n8n-nodes-base.pushbullet",
		"popularity": .256
	},
	{
		"id": "n8n-nodes-base.ghost",
		"popularity": .286
	},
	{
		"id": "n8n-nodes-base.microsoftDynamicsCrmTool",
		"popularity": .207
	},
	{
		"id": "n8n-nodes-base.awsSnsTrigger",
		"popularity": .246
	},
	{
		"id": "n8n-nodes-base.npm",
		"popularity": .235
	},
	{
		"id": "n8n-nodes-fullenrich.fullEnrich",
		"popularity": .207
	},
	{
		"id": "n8n-nodes-wpforms.wpformsTrigger",
		"popularity": .297
	},
	{
		"id": "n8n-nodes-emailvalidation.emailValidation",
		"popularity": .207
	},
	{
		"id": "n8n-nodes-base.boxTrigger",
		"popularity": .227
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWolframAlpha",
		"popularity": .213
	},
	{
		"id": "n8n-nodes-airparser.airparser",
		"popularity": .218
	},
	{
		"id": "n8n-nodes-base.jenkinsTool",
		"popularity": .172
	},
	{
		"id": "n8n-nodes-ada.ada",
		"popularity": .195
	},
	{
		"id": "n8n-nodes-chat-data.chatDataTrigger",
		"popularity": .274
	},
	{
		"id": "@zerobounce/n8n-nodes-zerobounce.zeroBounce",
		"popularity": .243
	},
	{
		"id": "n8n-nodes-scrapeless.scrapeless",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-base.upleadTool",
		"popularity": .213
	},
	{
		"id": "n8n-nodes-carbone.carbone",
		"popularity": .288
	},
	{
		"id": "n8n-nodes-craftmypdf.craftMyPdf",
		"popularity": .207
	},
	{
		"id": "n8n-nodes-base.freshworksCrm",
		"popularity": .259
	},
	{
		"id": "n8n-nodes-base.clearbit",
		"popularity": .195
	},
	{
		"id": "n8n-nodes-base.awsIam",
		"popularity": .243
	},
	{
		"id": "@easysoftware/n8n-nodes-easy-redmine.easyRedmine",
		"popularity": .218
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectDatacenterTool",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-base.matrixTool",
		"popularity": .231
	},
	{
		"id": "n8n-nodes-docuprox.docuProx",
		"popularity": .213
	},
	{
		"id": "n8n-nodes-base.haloPSA",
		"popularity": .338
	},
	{
		"id": "n8n-nodes-addtowallet.addToWallet",
		"popularity": .235
	},
	{
		"id": "n8n-nodes-base.awsLambdaTool",
		"popularity": .218
	},
	{
		"id": "n8n-nodes-mallabe-images.mallabeImages",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-kipps.kippsAiChatbot",
		"popularity": 0
	},
	{
		"id": "@solution25/n8n-nodes-shopware.shopware",
		"popularity": .249
	},
	{
		"id": "@heygenofficial/n8n-nodes-heygen-official.heygenNode",
		"popularity": .424
	},
	{
		"id": "n8n-nodes-base.autopilotTool",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-base.pagerDuty",
		"popularity": .259
	},
	{
		"id": "n8n-nodes-base.freshdeskTool",
		"popularity": .231
	},
	{
		"id": "n8n-nodes-base.mattermostTool",
		"popularity": .231
	},
	{
		"id": "n8n-nodes-base.raindrop",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-base.harvest",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-smstools.smstools",
		"popularity": .272
	},
	{
		"id": "n8n-nodes-ipgeolocation.ipgeolocation",
		"popularity": .188
	},
	{
		"id": "@decodo/n8n-nodes-decodo.decodo",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-base.awsRekognition",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-inoreader.inoreader",
		"popularity": .235
	},
	{
		"id": "n8n-nodes-base.agileCrmTool",
		"popularity": .207
	},
	{
		"id": "n8n-nodes-base.mailerLiteTrigger",
		"popularity": .172
	},
	{
		"id": "n8n-nodes-base.intercomTool",
		"popularity": .126
	},
	{
		"id": "@wix/n8n-nodes-wix.wix",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-shortio.Shortio",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.awsComprehend",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-base.bubbleTool",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-base.bitwardenTool",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-neverbounce-email-verification.nbEmailVerification",
		"popularity": .259
	},
	{
		"id": "n8n-nodes-base.zulip",
		"popularity": .218
	},
	{
		"id": "n8n-nodes-base.clockifyTool",
		"popularity": .253
	},
	{
		"id": "n8n-nodes-base.awsSns",
		"popularity": .201
	},
	{
		"id": "n8n-nodes-base.adaloTool",
		"popularity": .188
	},
	{
		"id": "n8n-nodes-base.rabbitmqTool",
		"popularity": .218
	},
	{
		"id": "n8n-nodes-base.theHiveProject",
		"popularity": .307
	},
	{
		"id": "n8n-nodes-base.msg91",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-base.googleBooksTool",
		"popularity": .246
	},
	{
		"id": "n8n-nodes-base.Brandfetch",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-base.rundeck",
		"popularity": .172
	},
	{
		"id": "n8n-nodes-base.clockifyTrigger",
		"popularity": .195
	},
	{
		"id": "@serphouse/n8n-nodes-serphouse.serphouse",
		"popularity": .277
	},
	{
		"id": "n8n-nodes-parallel.parallel",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-base.xeroTool",
		"popularity": .213
	},
	{
		"id": "n8n-nodes-base.urlScanIoTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.uproc",
		"popularity": .207
	},
	{
		"id": "n8n-nodes-base.mediumTool",
		"popularity": .153
	},
	{
		"id": "@docuseal/n8n-nodes-docuseal.docuseal",
		"popularity": .239
	},
	{
		"id": "@digitalocean/n8n-nodes-digitalocean-gradient-serverless-inference.digitalOceanGradientServerlessInference",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-abyssale.abyssale",
		"popularity": .218
	},
	{
		"id": "n8n-nodes-base.amqpTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.oura",
		"popularity": .141
	},
	{
		"id": "@infobip/n8n-nodes-infobip-api.infobipApi",
		"popularity": .153
	},
	{
		"id": "n8n-nodes-base.ciscoWebexTrigger",
		"popularity": .201
	},
	{
		"id": "n8n-nodes-base.zammadTool",
		"popularity": .188
	},
	{
		"id": "n8n-nodes-base.contentful",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-base.pushcut",
		"popularity": .207
	},
	{
		"id": "n8n-nodes-base.surveyMonkeyTrigger",
		"popularity": .218
	},
	{
		"id": "n8n-nodes-base.ciscoWebexTool",
		"popularity": .195
	},
	{
		"id": "n8n-nodes-base.oneSimpleApi",
		"popularity": .153
	},
	{
		"id": "n8n-nodes-base.misp",
		"popularity": .253
	},
	{
		"id": "n8n-nodes-base.contentfulTool",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-converthub.converthub",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-nimbasms.nimbaSMS",
		"popularity": .109
	},
	{
		"id": "@scrapeops/n8n-nodes-scrapeops.ScrapeOps",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.seaTableTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.jwtTool",
		"popularity": .235
	},
	{
		"id": "n8n-nodes-contextualai.contextualAi",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-base.invoiceNinjaTrigger",
		"popularity": .195
	},
	{
		"id": "n8n-nodes-skyvern.skyvern",
		"popularity": .249
	},
	{
		"id": "n8n-nodes-base.mandrill",
		"popularity": .153
	},
	{
		"id": "@jetbrains/n8n-nodes-youtrack.youtrack",
		"popularity": .207
	},
	{
		"id": "n8n-nodes-base.cortex",
		"popularity": .222
	},
	{
		"id": "n8n-nodes-base.mqttTool",
		"popularity": .153
	},
	{
		"id": "n8n-nodes-base.erpNextTool",
		"popularity": .195
	},
	{
		"id": "n8n-nodes-dust.dust",
		"popularity": .281
	},
	{
		"id": "n8n-nodes-base.helpScout",
		"popularity": .231
	},
	{
		"id": "n8n-nodes-base.wufooTrigger",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-docsautomator.docsAutomator",
		"popularity": .153
	},
	{
		"id": "n8n-nodes-base.awsCertificateManager",
		"popularity": .126
	},
	{
		"id": "@tehw0lf/n8n-nodes-toon.toon",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-vikunja.vikunjaTrigger",
		"popularity": .235
	},
	{
		"id": "n8n-nodes-base.strapiTool",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-base.gristTool",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-mailtrap.mailtrap",
		"popularity": .246
	},
	{
		"id": "n8n-nodes-base.mailcheckTool",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.codaTool",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-yepcode.yepCode",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-awork.awork",
		"popularity": .253
	},
	{
		"id": "n8n-nodes-base.BrandfetchTool",
		"popularity": .153
	},
	{
		"id": "n8n-nodes-base.dropcontact",
		"popularity": .246
	},
	{
		"id": "n8n-nodes-base.awsCognito",
		"popularity": .172
	},
	{
		"id": "n8n-nodes-murf.murf",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-base.humanticAi",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.autopilot",
		"popularity": .218
	},
	{
		"id": "n8n-nodes-clipboardgenie.clipboardGenie",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-base.mailgunTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.sendGridTool",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-base.workableTrigger",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.yourls",
		"popularity": .188
	},
	{
		"id": "@globalping/n8n-nodes-globalping.globalping",
		"popularity": .153
	},
	{
		"id": "@seranking/n8n-nodes-seranking.seRanking",
		"popularity": .231
	},
	{
		"id": "@datafix/n8n-nodes-exact-online.exactOnline",
		"popularity": .259
	},
	{
		"id": "n8n-nodes-docuwriter-ai.docuWriter",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-alive5.alive5",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-base.postmarkTrigger",
		"popularity": .195
	},
	{
		"id": "n8n-nodes-base.loneScaleTool",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.netlify",
		"popularity": .222
	},
	{
		"id": "n8n-nodes-base.splunkTool",
		"popularity": .201
	},
	{
		"id": "n8n-nodes-base.ldapTool",
		"popularity": .172
	},
	{
		"id": "n8n-nodes-fluentc.fluentCTranslate",
		"popularity": .054
	},
	{
		"id": "@cometapi-dev/n8n-nodes-cometapi.cometApi",
		"popularity": .213
	},
	{
		"id": "n8n-nodes-base.uptimeRobot",
		"popularity": .201
	},
	{
		"id": "n8n-nodes-base.magento2Tool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.keap",
		"popularity": .213
	},
	{
		"id": "n8n-nodes-base.rocketchatTool",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-base.openThesaurus",
		"popularity": .153
	},
	{
		"id": "n8n-nodes-base.seaTableTrigger",
		"popularity": .207
	},
	{
		"id": "@telnyx/n8n-nodes-telnyx-ai.telnyxAi",
		"popularity": .188
	},
	{
		"id": "n8n-nodes-parsio.parsio",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-base.bambooHrTool",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-base.iterable",
		"popularity": .195
	},
	{
		"id": "n8n-nodes-base.freshworksCrmTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.npmTool",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-solapi.solapi",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-base.postHogTool",
		"popularity": .126
	},
	{
		"id": "@onlyfansapi/n8n-nodes-onlyfansapi.onlyFans",
		"popularity": .181
	},
	{
		"id": "@fibery/n8n-nodes-fibery.fibery",
		"popularity": .291
	},
	{
		"id": "n8n-nodes-bookoly.bookoly",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.lemlistTool",
		"popularity": .188
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectCloudTool",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-base.totpTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-mallabe-barcodes.mallabeBarcodes",
		"popularity": .239
	},
	{
		"id": "n8n-nodes-base.gongTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-agencii.agencii",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-base.googleBooks",
		"popularity": .195
	},
	{
		"id": "n8n-nodes-base.chargebeeTrigger",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-pushinator.pushinator",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-base.googlePerspectiveTool",
		"popularity": .172
	},
	{
		"id": "@apaleo/n8n-nodes-apaleo-official.apaleo",
		"popularity": .279
	},
	{
		"id": "n8n-nodes-base.plivo",
		"popularity": .201
	},
	{
		"id": "n8n-nodes-base.kafkaTool",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-base.securityScorecardTool",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-jsonpost.jsonPostTrigger",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.pagerDutyTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.ghostTool",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-base.autopilotTrigger",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-aimfox.aimfox",
		"popularity": .243
	},
	{
		"id": "n8n-nodes-base.wiseTrigger",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-csvbox.csvboxTrigger",
		"popularity": .153
	},
	{
		"id": "n8n-nodes-base.elasticSecurity",
		"popularity": .054
	},
	{
		"id": "@neosapience/n8n-nodes-typecast.typecast",
		"popularity": .163
	},
	{
		"id": "@picsart/n8n-nodes-picsart-creative-apis.picsartImage",
		"popularity": .207
	},
	{
		"id": "n8n-nodes-base.copper",
		"popularity": .256
	},
	{
		"id": "n8n-nodes-base.circleCi",
		"popularity": .109
	},
	{
		"id": "@thingsboard/n8n-nodes-thingsboard.thingsBoard",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-base.sentryIoTool",
		"popularity": .153
	},
	{
		"id": "n8n-nodes-base.driftTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.uplead",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.mauticTrigger",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-base.flowTrigger",
		"popularity": .201
	},
	{
		"id": "n8n-nodes-base.storyblok",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-base.clearbitTool",
		"popularity": .054
	},
	{
		"id": "@nvoip/n8n-nodes-nvoip.nvoip",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.unleashedSoftwareTool",
		"popularity": .218
	},
	{
		"id": "@zohomail/n8n-nodes-zohocalendar.zohoCalendar",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-base.peekalinkTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.monicaCrm",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.helpScoutTrigger",
		"popularity": .163
	},
	{
		"id": "@thelifeofrishi/n8n-nodes-orshot.orshot",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-base.uptimeRobotTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.dropcontactTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.sms77Tool",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-klicktipp.klicktipp",
		"popularity": .213
	},
	{
		"id": "@postpulse/n8n-nodes-postpulse.postPulse",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-straico-official.straicoOfficial",
		"popularity": .086
	},
	{
		"id": "@nexlev/n8n-nodes-nexlev.nexlev",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-bookstack.bookstack",
		"popularity": .239
	},
	{
		"id": "n8n-nodes-gleanclient.gleanClient",
		"popularity": .201
	},
	{
		"id": "n8n-nodes-base.peekalink",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.googlePerspective",
		"popularity": .195
	},
	{
		"id": "@local-falcon/n8n-nodes-localfalcon.localFalcon",
		"popularity": .188
	},
	{
		"id": "n8n-nodes-base.koBoToolbox",
		"popularity": .207
	},
	{
		"id": "n8n-nodes-base.yourlsTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.paddleTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-parseur.parseur",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-base.timescaleDb",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-cyberpulse-compliance-dev.cyberPulseCompliance",
		"popularity": .207
	},
	{
		"id": "n8n-nodes-blooio.blooioMessaging",
		"popularity": .153
	},
	{
		"id": "n8n-nodes-base.chargebeeTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-dumplingai.dumplingAi",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.timescaleDbTool",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-base.netlifyTrigger",
		"popularity": .153
	},
	{
		"id": "n8n-nodes-base.chargebee",
		"popularity": .163
	},
	{
		"id": "@oregister/n8n-nodes-openregister.openRegister",
		"popularity": .188
	},
	{
		"id": "@exploriumai/n8n-nodes-explorium-ai.exploriumApiNode",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-base.iterableTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.openThesaurusTool",
		"popularity": .109
	},
	{
		"id": "@woztell-sanuker/n8n-nodes-woztell-sanuker.woztellTrigger",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.stackby",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-base.currents",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.helpScoutTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-mrscraper.mrscraper",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-base.awsSesTool",
		"popularity": 0
	},
	{
		"id": "@decisionrules/n8n-nodes-decisionrules.decisionRules",
		"popularity": .141
	},
	{
		"id": "@sendpulse/n8n-nodes-sendpulse.sendPulseA360",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.taiga",
		"popularity": .153
	},
	{
		"id": "n8n-nodes-base.segment",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-base.cockpitTool",
		"popularity": .054
	},
	{
		"id": "@reportei/n8n-nodes-reportei.reportei",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-base.oktaTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-scraping-dog.scrapingDog",
		"popularity": .172
	},
	{
		"id": "n8n-nodes-base.crateDb",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-digital-ocean.digitalOcean",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-base.pushbulletTool",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-base.mauticTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.awsElb",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-seo-content-machine.seoContentMachine",
		"popularity": .188
	},
	{
		"id": "n8n-nodes-zohoteaminbox.zohoTeamInbox",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.syncroMsp",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-base.goToWebinar",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-base.quickbase",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-outgrow.outgrowTrigger",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-videotoblog.videoToBlog",
		"popularity": .109
	},
	{
		"id": "@enginemailer/n8n-nodes-enginemailer.enginemailer",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.vonageTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.crateDbTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.lingvaNex",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-base.questDb",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-atriomail-email.atriomail",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.paddle",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-meetgeek.meetGeek",
		"popularity": .207
	},
	{
		"id": "n8n-nodes-base.signl4",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-itop.iTop",
		"popularity": .126
	},
	{
		"id": "@alipeople/n8n-nodes-sendon.sendon",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-pubnub.pubNub",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.emeliaTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-raia.raia",
		"popularity": .181
	},
	{
		"id": "@copicake/n8n-nodes-copicake.copicake",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-peek-pro.peekPro",
		"popularity": .256
	},
	{
		"id": "n8n-nodes-base.wekan",
		"popularity": .172
	},
	{
		"id": "n8n-nodes-caspioofficial.caspio",
		"popularity": 0
	},
	{
		"id": "@musixmatch/n8n-nodes-musixmatch.musixmatch",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.unleashedSoftware",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.keapTrigger",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-base.ouraTool",
		"popularity": 0
	},
	{
		"id": "@waapi/n8n-nodes-waalaxy.waalaxy",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-base.harvestTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.bitlyTool",
		"popularity": .201
	},
	{
		"id": "n8n-nodes-base.netlifyTool",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-base.demio",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.koBoToolboxTrigger",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-bounceban.bounceban",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-crossmint.crossmintWallets",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-diviup-connect.diviUpConnect",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.plivoTool",
		"popularity": .054
	},
	{
		"id": "@klardaten/n8n-nodes-datevconnect.masterData",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-dart.dart",
		"popularity": .086
	},
	{
		"id": "@securevector/n8n-nodes-securevector.secureVector",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.discourse",
		"popularity": .172
	},
	{
		"id": "@vlm-run/n8n-nodes-vlmrun.vlmRun",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-base.questDbTool",
		"popularity": .109
	},
	{
		"id": "@xano/n8n-nodes-xano.xano",
		"popularity": .141
	},
	{
		"id": "@predictleads/n8n-nodes-predictleads.predictLeads",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-tubelab.tubeLab",
		"popularity": .109
	},
	{
		"id": "@netgsm/n8n-nodes-netgsm.netgsm",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-base.theHiveTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.monicaCrmTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-parseur.parseurTrigger",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-infranodus.infranodus",
		"popularity": .054
	},
	{
		"id": "@paloaltonetworks/n8n-nodes-prisma-airs.prismaAirs",
		"popularity": .188
	},
	{
		"id": "n8n-nodes-extruct.extruct",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-base.customerIoTrigger",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.sendy",
		"popularity": .141
	},
	{
		"id": "@nuelink/n8n-nodes-nuelink.nuelink",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.mailjetTrigger",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-base.discourseTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.salesmate",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.mailerLiteTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.wekanTool",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-nedzo.nedzo",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.zulipTool",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.segmentTool",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-jetapi.jetapi",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-nele-ai.neleAi",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.convertKitTrigger",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.signl4Tool",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-zenlayer.zenlayer",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.sendyTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-businessmap.businessmap",
		"popularity": .222
	},
	{
		"id": "n8n-nodes-binalyze-air.air",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.theHiveProjectTrigger",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-hedy.hedy",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-chartmogul.chartmogul",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.twist",
		"popularity": 0
	},
	{
		"id": "@handelsregister/n8n-nodes-handelsregister-ai.handelsregisterAi",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.twake",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-pagepixels-screenshots.pagePixelsScreenshots",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-base.getResponseTrigger",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.circleCiTool",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.elasticSecurityTool",
		"popularity": .153
	},
	{
		"id": "n8n-nodes-base.demioTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-contentdrips.contentdrips",
		"popularity": .054
	},
	{
		"id": "@wizaco/n8n-nodes-wiza.wiza",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-visualping.visualpingTrigger",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-groner.groner",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-checkmk.checkmk",
		"popularity": .207
	},
	{
		"id": "n8n-nodes-pagbank-connect.pagBank",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.syncroMspTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.gotifyTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.securityScorecard",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-twittershots.twitterShots",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.goToWebinarTool",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-base.copperTrigger",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-base.theHive",
		"popularity": .126
	},
	{
		"id": "@port-labs/n8n-nodes-portio-experimental.portApiAi",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-anny.anny",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-air.air",
		"popularity": .172
	},
	{
		"id": "n8n-nodes-famulor.famulor",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.pushcutTool",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-craft.craft",
		"popularity": .126
	},
	{
		"id": "@algolia/n8n-nodes-algolia.algolia",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.taigaTrigger",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-beyondpresence.beyondPresence",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-joggai.joggAiNode",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-velatir.velatir",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-featherless.featherless",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-presenton.presenton",
		"popularity": .201
	},
	{
		"id": "@bedrijfsdatanl/n8n-nodes-prospectpro.prospectpro",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.copperTool",
		"popularity": .218
	},
	{
		"id": "n8n-nodes-base.beeminderTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.awsSnsTool",
		"popularity": .086
	},
	{
		"id": "@orq-ai/n8n-nodes-orq.orqDeployment",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-magnetite.magnetite",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-streak-crm.streak",
		"popularity": .201
	},
	{
		"id": "n8n-nodes-base.storyblokTool",
		"popularity": .141
	},
	{
		"id": "n8n-nodes-itglue.iTGlue",
		"popularity": .201
	},
	{
		"id": "n8n-nodes-base.raindropTool",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-roam.roam",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.cockpit",
		"popularity": .109
	},
	{
		"id": "n8n-nodes-base.tapfiliateTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectCloud",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-swiftgum-trigger.swiftgumTrigger",
		"popularity": .109
	},
	{
		"id": "@ekyte/n8n-nodes-ekyte.eKyteAction",
		"popularity": .141
	},
	{
		"id": "@starhunter/n8n-nodes-graphql.starhunter",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-logsnag.LogSnag",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.twistTool",
		"popularity": .054
	},
	{
		"id": "n8n-nodes-base.haloPSATool",
		"popularity": .153
	},
	{
		"id": "@bedrijfsdatanl/n8n-nodes-bedrijfsdata.bedrijfsdata",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.msg91Tool",
		"popularity": .126
	},
	{
		"id": "@goperigon/n8n-nodes-perigon.perigon",
		"popularity": .086
	},
	{
		"id": "@reka-ai/n8n-nodes-reka.rekaVision",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.beeminder",
		"popularity": .109
	},
	{
		"id": "@asyncai/n8n-nodes-asyncai.asyncAi",
		"popularity": .086
	},
	{
		"id": "n8n-nodes-docutray.docutray",
		"popularity": .126
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
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const { getActiveItemIndex } = useKeyboardNavigation();
	const i18n = useI18n();
	const settingsStore = useSettingsStore();
	const viewStacks = ref([]);
	const activeStackItems = computed(() => {
		const stack = getLastActiveStack();
		if (!stack?.baselineItems) return stack.items ? finalizeItems(stack.items) : [];
		if (stack.search && searchBaseItems.value) {
			let searchBase = searchBaseItems.value;
			const canvasHasAINodes = workflowDocumentStore.value.aiNodes.length > 0;
			if (searchBaseItems.value.length === 0) searchBase = flattenCreateElements(stack.baselineItems ?? []);
			if (!(isAiRootView(stack) || canvasHasAINodes) || ["plus_endpoint", "node_connection_drop"].includes(nodeCreatorStore.openSource) && !isAiSubcategoryView(stack)) searchBase = filterOutAiNodes(searchBase);
			const searchResults = finalizeItems(searchNodes(stack.search || "", searchBase, { popularity: nodePopularityMap }));
			const groupedNodes = groupIfAiNodes(searchResults, stack, false) ?? searchResults;
			stack.activeIndex = groupedNodes.some((node) => node.type === "section") ? 1 : 0;
			return groupedNodes;
		}
		if (showsAiGatewaySection(stack)) {
			const extracted = extractAiGatewaySection(stack.baselineItems);
			if (extracted) return finalizeItems([extracted.section, ...groupIfAiNodes(extracted.rest, stack, true)]);
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
	const TOOL_SUBCATEGORY_ORDER = [
		AI_CATEGORY_OTHER_TOOLS,
		AI_CATEGORY_MCP_NODES,
		AI_CATEGORY_VECTOR_STORES
	];
	function toolSubcategoryRank(item) {
		if (item.type === "section") return -1;
		const idx = TOOL_SUBCATEGORY_ORDER.indexOf(item.key);
		return idx === -1 ? TOOL_SUBCATEGORY_ORDER.length : idx;
	}
	function withMcpClientToolFirst(items) {
		const clientTool = items.find((item) => item.key === AI_MCP_TOOL_NODE_TYPE);
		if (!clientTool) return items;
		const rest = items.filter((item) => item.key !== AI_MCP_TOOL_NODE_TYPE);
		return [{
			type: "section",
			key: AI_MCP_TOOL_NODE_TYPE,
			title: "",
			children: [clientTool],
			showSeparator: true,
			hideHeader: true
		}, ...rest];
	}
	function groupIfAiNodes(items, stack, sortAlphabetically) {
		const aiNodes = items.filter((node) => isAINode(node));
		const canvasHasAINodes = workflowDocumentStore.value.aiNodes.length > 0;
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
					const subcategoryItems = nodeTypesToCreateElements(section.items, aiSubNodes);
					return {
						type: "subcategory",
						key: section.key,
						properties: {
							title: section.title,
							icon: mapToolSubcategoryIcon(section.key),
							items: section.key === "Model Context Protocol" ? withMcpClientToolFirst(subcategoryItems) : subcategoryItems,
							new: NEW_TOOL_CATEGORIES.includes(section.key),
							actionsFilter,
							hideActions: true
						}
					};
				}).sort((a, b) => toolSubcategoryRank(a) - toolSubcategoryRank(b));
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
	const routeWorkflowId = useRouteWorkflowId();
	const ndvStore = computed(() => useNDVStore(createWorkflowDocumentId(routeWorkflowId.value)));
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
	const pendingInitialViewStack = ref(null);
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
	function openSelectiveNodeCreator({ connectionType, node, creatorView, connectionIndex = 0, workflowId }) {
		const nodeName = node ?? ndvStore.value.activeNodeName;
		const nodeData = nodeName ? useWorkflowDocumentStore(createWorkflowDocumentId(workflowId)).getNodeByName(nodeName) ?? null : null;
		ndvStore.value.unsetActiveNodeName();
		setTimeout(() => {
			if (creatorView) setNodeCreatorState({
				createNodeActive: true,
				nodeCreatorView: creatorView,
				connectionType,
				workflowId
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
				eventSource: NODE_CREATOR_OPEN_SOURCES.NOTICE_ERROR_MESSAGE,
				workflowId
			});
		});
	}
	function setNodeCreatorState({ source, createNodeActive, nodeCreatorView, connectionType, workflowId }) {
		if (!nodeCreatorView) nodeCreatorView = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId)).workflowTriggerNodes.length > 0 ? REGULAR_NODE_CREATOR_VIEW : TRIGGER_NODE_CREATOR_VIEW;
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
			workflow_id: workflowId
		});
	}
	function openNodeCreatorForConnectingNode({ connection, eventSource, nodeCreatorView, workflowId }) {
		const sourceNode = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId)).getNodeById(connection.source);
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
			connectionType: type,
			workflowId
		});
		if (isScopedConnection) useViewStacks().gotoCompatibleConnectionView(type, isOutput, getNodeCreatorFilter(sourceNode.name, type, sourceNode)).catch(() => {});
	}
	async function openNodeCreatorWithNode(workflowId, nodeName) {
		const workflowDocumentStore = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId));
		const nodeData = nodeName ? workflowDocumentStore.getNodeByName(nodeName) ?? null : null;
		if (!nodeData) return;
		ndvStore.value.unsetActiveNodeName();
		const nodeType = nodeTypesStore.getNodeType(nodeData?.type) ?? nodeTypesStore.communityNodeType(nodeData?.type)?.nodeDescription;
		if (!nodeType) return;
		setNodeCreatorState({
			workflowId,
			createNodeActive: true
		});
		await nextTick();
		const nodeActions = actions.value[nodeType.name];
		const viewStack = prepareCommunityNodeDetailsViewStack({
			key: nodeType.name,
			properties: nodeType,
			type: "node",
			subcategory: "*"
		}, getNodeIconSource(nodeType.name, null, workflowDocumentStore.getExpressionHandler()), "Regular", nodeActions ?? []);
		useViewStacks().pushViewStack(viewStack, { resetStacks: true });
	}
	function openNodeCreatorForTriggerNodes(workflowId, source) {
		ndvStore.value.unsetActiveNodeName();
		setSelectedView(TRIGGER_NODE_CREATOR_VIEW);
		setNodeCreatorState({
			workflowId,
			source,
			createNodeActive: true,
			nodeCreatorView: TRIGGER_NODE_CREATOR_VIEW
		});
	}
	function openNodeCreatorForRegularNodes(workflowId, source) {
		ndvStore.value.unsetActiveNodeName();
		setSelectedView(REGULAR_NODE_CREATOR_VIEW);
		setNodeCreatorState({
			workflowId,
			source,
			createNodeActive: true,
			nodeCreatorView: REGULAR_NODE_CREATOR_VIEW
		});
	}
	function openNodeCreatorForActions(workflowId, node, eventSource) {
		const actionNode = allNodeCreatorNodes.value.find((i) => i.key === node);
		if (!actionNode) return;
		const transformedActions = actions.value[actionNode.key]?.map((a) => transformNodeType(a, actionNode.properties.displayName, "action"));
		ndvStore.value.unsetActiveNodeName();
		setSelectedView(REGULAR_NODE_CREATOR_VIEW);
		pendingInitialViewStack.value = {
			subcategory: "*",
			title: actionNode.properties.displayName,
			nodeIcon: {
				type: "icon",
				name: "check-check"
			},
			rootView: "Regular",
			mode: "actions",
			items: transformedActions
		};
		setNodeCreatorState({
			workflowId,
			source: eventSource,
			createNodeActive: true,
			nodeCreatorView: REGULAR_NODE_CREATOR_VIEW
		});
	}
	function consumePendingInitialViewStack() {
		const stack = pendingInitialViewStack.value;
		pendingInitialViewStack.value = null;
		return stack;
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
		if (useSettingsStore().isAiGatewayEnabled) useAiGatewayStore().fetchConfig();
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
	function onAgentPanelOptionSelected(properties) {
		trackNodeCreatorEvent("User selected agent in node creator panel", properties);
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
		consumePendingInitialViewStack,
		onCreatorOpened,
		onNodeFilterChanged,
		onCategoryExpanded,
		onActionsCustomAPIClicked,
		onViewActions,
		onSubcategorySelected,
		onAgentPanelOptionSelected,
		onNodeAddedToCanvas,
		openNodeCreatorWithNode
	};
});
//#endregion
//#region src/features/workflows/canvas/canvas.eventBus.ts
var canvasEventBus = createEventBus();
//#endregion
export { useKeyboardNavigation as a, HitlToolView as c, require_camelCase as d, require_capitalize as f, _virtual_node_popularity_data_default as i, RegularView as l, useNodeCreatorStore as n, AINodesView as o, useViewStacks as r, AIView as s, canvasEventBus as t, TriggerView as u };
