import { o as __toESM, t as __commonJSMin } from "./chunk-r2Y0G7H8.js";
import { Ft as ref, S as computed, W as nextTick } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-14clFqm4.js";
import { At as createEventBus, C as require__arrayMap, S as require_toString, v as require_get } from "./src-jV4M2fcN.js";
import { A as getAiTemplatesCallout, B as searchNodes, Br as CanvasConnectionMode, E as useEvaluationStore, H as sortNodeCreateElements, I as mapToolSubcategoryIcon, Ji as getThemedValue, Jt as useTemplatesStore, L as nodeTypesToCreateElements, N as groupItemsInSections, Ns as useSettingsStore, O as finalizeItems, P as isAINode, R as prepareCommunityNodeDetailsViewStack, Rr as isVueFlowConnection, U as subcategorizeItems, W as transformNodeType, _r as useNDVStore, aa as createWorkflowDocumentId, ca as useWorkflowDocumentStore, dl as STORES, dr as useCanvasStore, k as flattenCreateElements, pr as useTelemetry, r as useUIStore, rt as require__createCompounder, s as useWorkflowsStore, tt as require_upperFirst, w as useNodeTypesStore, zn as useExternalHooks } from "./users.store-DNsxOyr9.js";
import { $ as AI_CATEGORY_LANGUAGE_MODELS, $t as CRYPTO_NODE_TYPE, Ar as XML_NODE_TYPE, At as TEMPLATE_CATEGORY_AI, Cn as IF_NODE_TYPE, Co as AI_TRANSFORM_NODE_TYPE, Ct as HUMAN_IN_THE_LOOP_CATEGORY, Ei as require__baseFlatten, Et as OTHER_TRIGGER_NODES_SUBCATEGORY, Fn as MERGE_NODE_TYPE, Ft as AGGREGATE_NODE_TYPE, Gt as CHAT_TRIGGER_NODE_TYPE, I as CUSTOM_API_CALL_KEY, It as AI_CODE_NODE_TYPE, J as AI_CATEGORY_AGENTS, Jt as COMPRESSION_NODE_TYPE, Mn as MANUAL_TRIGGER_NODE_TYPE, Mt as TRIGGER_NODE_CREATOR_VIEW, Nn as MARKDOWN_NODE_TYPE, Nt as AGENT_NODE_TYPE, Ot as REGULAR_NODE_CREATOR_VIEW, Pt as AGENT_TOOL_NODE_TYPE, Qa as isCommunityPackageName, Qi as require__arrayIncludes, Rt as AI_TRANSFORM_NODE_TYPE$1, St as HITL_SUBCATEGORY, Tt as NODE_CREATOR_OPEN_SOURCES, Wo as v4_default, X as AI_CATEGORY_DOCUMENT_LOADERS, Xo as require__cacheHas, Y as AI_CATEGORY_CHAINS, Yt as CONVERT_TO_FILE_NODE_TYPE, Z as AI_CATEGORY_EMBEDDING, Zi as require__arrayIncludesWith, Zo as require__SetCache, _r as SUMMARIZE_NODE_TYPE, ar as SCHEDULE_TRIGGER_NODE_TYPE, at as AI_CATEGORY_ROOT_NODES, bn as HTTP_REQUEST_NODE_TYPE, bt as FLOWS_CONTROL_SUBCATEGORY, cr as SET_NODE_TYPE, ct as AI_CATEGORY_VECTOR_STORES, dt as AI_NODE_CREATOR_VIEW, et as AI_CATEGORY_MCP_NODES, fn as EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE, ft as AI_OTHERS_NODE_CREATOR_VIEW, gn as FORM_TRIGGER_NODE_TYPE, go as NodeConnectionTypes, gt as AI_WORKFLOW_TOOL_LANGCHAIN_NODE_TYPE, ht as AI_UNCATEGORIZED_CATEGORY, in as EDIT_IMAGE_NODE_TYPE, it as AI_CATEGORY_RETRIEVERS, jo as EVALUATION_TRIGGER_NODE_TYPE, jt as TRANSFORM_DATA_SUBCATEGORY, ka as isHitlToolType, kn as LIMIT_NODE_TYPE, lt as AI_CODE_TOOL_LANGCHAIN_NODE_TYPE, mn as FILTER_NODE_TYPE, mr as SPLIT_OUT_NODE_TYPE, mt as AI_SUBCATEGORY, nn as DATETIME_NODE_TYPE, on as EMAIL_IMAP_NODE_TYPE, ot as AI_CATEGORY_TEXT_SPLITTERS, pn as EXTRACT_FROM_FILE_NODE_TYPE, pr as SPLIT_IN_BATCHES_NODE_TYPE, pt as AI_SECTION_RECOMMENDED_TOOLS, qt as CODE_NODE_TYPE, rr as RSS_READ_NODE_TYPE, rt as AI_CATEGORY_OUTPUTPARSER, sn as EMAIL_SEND_NODE_TYPE, st as AI_CATEGORY_TOOLS, tn as DATA_TABLE_NODE_TYPE, tr as REMOVE_DUPLICATES_NODE_TYPE, tt as AI_CATEGORY_MEMORY, va as getNodeInputs, vt as CORE_NODES_CATEGORY, wr as WEBHOOK_NODE_TYPE, wt as NEW_TOOL_CATEGORIES, xt as HELPERS_SUBCATEGORY, yn as HTML_NODE_TYPE, yt as DEFAULT_SUBCATEGORY } from "./constants-DkMVfvP4.js";
import { E as require__baseUnary, d as require_isArrayLikeObject, r as require__baseRest } from "./merge-C-A6wl8-.js";
import { j as defineStore } from "./_baseOrderBy-CeJ-xzyO.js";
import { t as getNodeIconSource } from "./nodeIcon-BECwfvAM.js";
import { c as parseCanvasConnectionHandleString, n as createCanvasConnectionHandleString } from "./canvas.utils-DpVKjWUr.js";
function useGetNodeCreatorFilter() {
	const workflowStore = useWorkflowsStore();
	const nodeTypesStore = useNodeTypesStore();
	const workflowObject = computed(() => workflowStore.workflowObject);
	function getNodeCreatorFilter(nodeName, outputType, sourceNode) {
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
	const aiTransformNode = nodeTypesStore.getNodeType(AI_TRANSFORM_NODE_TYPE$1);
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
					iconData: {
						type: "icon",
						icon: "webhook"
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
						type: "icon",
						icon: "form"
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
		DATA_TABLE_NODE_TYPE,
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
const WATCHED_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"Enter",
	"Escape"
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
		"popularity": .932
	},
	{
		"id": "n8n-nodes-base.webhook",
		"popularity": .929
	},
	{
		"id": "n8n-nodes-base.code",
		"popularity": 1
	},
	{
		"id": "n8n-nodes-base.set",
		"popularity": .968
	},
	{
		"id": "n8n-nodes-base.if",
		"popularity": .949
	},
	{
		"id": "n8n-nodes-base.scheduleTrigger",
		"popularity": .892
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
		"popularity": .911
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryBufferWindow",
		"popularity": .896
	},
	{
		"id": "n8n-nodes-base.googleSheets",
		"popularity": .934
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGoogleGemini",
		"popularity": .889
	},
	{
		"id": "@n8n/n8n-nodes-langchain.openAi",
		"popularity": .863
	},
	{
		"id": "n8n-nodes-base.gmail",
		"popularity": .874
	},
	{
		"id": "n8n-nodes-base.noOp",
		"popularity": .871
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainLlm",
		"popularity": .838
	},
	{
		"id": "n8n-nodes-base.merge",
		"popularity": .865
	},
	{
		"id": "n8n-nodes-base.telegramTrigger",
		"popularity": .833
	},
	{
		"id": "n8n-nodes-base.switch",
		"popularity": .843
	},
	{
		"id": "n8n-nodes-base.splitInBatches",
		"popularity": .839
	},
	{
		"id": "n8n-nodes-base.telegram",
		"popularity": .872
	},
	{
		"id": "n8n-nodes-base.wait",
		"popularity": .833
	},
	{
		"id": "n8n-nodes-base.formTrigger",
		"popularity": .835
	},
	{
		"id": "n8n-nodes-base.respondToWebhook",
		"popularity": .827
	},
	{
		"id": "n8n-nodes-base.filter",
		"popularity": .814
	},
	{
		"id": "@n8n/n8n-nodes-langchain.agentTool",
		"popularity": .792
	},
	{
		"id": "n8n-nodes-base.splitOut",
		"popularity": .815
	},
	{
		"id": "n8n-nodes-base.googleDrive",
		"popularity": .829
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatOpenRouter",
		"popularity": .812
	},
	{
		"id": "n8n-nodes-base.readWriteFile",
		"popularity": .792
	},
	{
		"id": "n8n-nodes-base.httpRequestTool",
		"popularity": .769
	},
	{
		"id": "n8n-nodes-base.extractFromFile",
		"popularity": .791
	},
	{
		"id": "n8n-nodes-base.aggregate",
		"popularity": .777
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chat",
		"popularity": .769
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserStructured",
		"popularity": .778
	},
	{
		"id": "n8n-nodes-base.convertToFile",
		"popularity": .762
	},
	{
		"id": "n8n-nodes-base.googleSheetsTool",
		"popularity": .793
	},
	{
		"id": "n8n-nodes-base.gmailTrigger",
		"popularity": .75
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAnthropic",
		"popularity": .747
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatOllama",
		"popularity": .776
	},
	{
		"id": "n8n-nodes-base.dataTable",
		"popularity": .818
	},
	{
		"id": "n8n-nodes-base.whatsApp",
		"popularity": .746
	},
	{
		"id": "n8n-nodes-base.emailSend",
		"popularity": .736
	},
	{
		"id": "n8n-nodes-base.executeWorkflow",
		"popularity": .777
	},
	{
		"id": "n8n-nodes-base.executeWorkflowTrigger",
		"popularity": .757
	},
	{
		"id": "n8n-nodes-base.postgres",
		"popularity": .808
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatDeepSeek",
		"popularity": .73
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGroq",
		"popularity": .77
	},
	{
		"id": "n8n-nodes-base.limit",
		"popularity": .732
	},
	{
		"id": "n8n-nodes-base.gmailTool",
		"popularity": .728
	},
	{
		"id": "n8n-nodes-base.whatsAppTrigger",
		"popularity": .721
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryPostgresChat",
		"popularity": .707
	},
	{
		"id": "n8n-nodes-base.googleSheetsTrigger",
		"popularity": .73
	},
	{
		"id": "@n8n/n8n-nodes-langchain.mcpClientTool",
		"popularity": .707
	},
	{
		"id": "n8n-nodes-base.html",
		"popularity": .702
	},
	{
		"id": "n8n-nodes-base.supabase",
		"popularity": .769
	},
	{
		"id": "n8n-nodes-base.googleCalendarTool",
		"popularity": .74
	},
	{
		"id": "n8n-nodes-base.slack",
		"popularity": .719
	},
	{
		"id": "@n8n/n8n-nodes-langchain.ollama",
		"popularity": .694
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolCode",
		"popularity": .689
	},
	{
		"id": "@n8n/n8n-nodes-langchain.mcpTrigger",
		"popularity": .673
	},
	{
		"id": "n8n-nodes-base.rssFeedRead",
		"popularity": .715
	},
	{
		"id": "@n8n/n8n-nodes-langchain.anthropic",
		"popularity": .675
	},
	{
		"id": "n8n-nodes-base.googleDriveTrigger",
		"popularity": .684
	},
	{
		"id": "n8n-nodes-base.googleCalendar",
		"popularity": .696
	},
	{
		"id": "@n8n/n8n-nodes-langchain.informationExtractor",
		"popularity": .66
	},
	{
		"id": "n8n-nodes-base.emailReadImap",
		"popularity": .665
	},
	{
		"id": "@n8n/n8n-nodes-langchain.documentDefaultDataLoader",
		"popularity": .7
	},
	{
		"id": "n8n-nodes-base.form",
		"popularity": .684
	},
	{
		"id": "n8n-nodes-base.gmailHitlTool",
		"popularity": .672
	},
	{
		"id": "n8n-nodes-base.airtable",
		"popularity": .739
	},
	{
		"id": "n8n-nodes-base.executionData",
		"popularity": .645
	},
	{
		"id": "n8n-nodes-base.microsoftOutlook",
		"popularity": .69
	},
	{
		"id": "n8n-nodes-base.googleDocs",
		"popularity": .704
	},
	{
		"id": "n8n-nodes-base.errorTrigger",
		"popularity": .639
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolSerpApi",
		"popularity": .652
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsOpenAi",
		"popularity": .699
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textClassifier",
		"popularity": .628
	},
	{
		"id": "@n8n/n8n-nodes-langchain.agent",
		"popularity": .961
	},
	{
		"id": "n8n-nodes-base.httpRequest",
		"popularity": .985
	},
	{
		"id": "n8n-nodes-base.notion",
		"popularity": .703
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreInMemory",
		"popularity": .669
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryRedisChat",
		"popularity": .642
	},
	{
		"id": "n8n-nodes-base.dateTime",
		"popularity": .636
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmOllama",
		"popularity": .619
	},
	{
		"id": "@n8n/n8n-nodes-langchain.modelSelector",
		"popularity": .606
	},
	{
		"id": "n8n-nodes-base.summarize",
		"popularity": .635
	},
	{
		"id": "n8n-nodes-base.executeCommand",
		"popularity": .677
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStorePinecone",
		"popularity": .663
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsGoogleGemini",
		"popularity": .658
	},
	{
		"id": "n8n-nodes-base.ssh",
		"popularity": .642
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainRetrievalQa",
		"popularity": .594
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserItemList",
		"popularity": .608
	},
	{
		"id": "n8n-nodes-base.facebookGraphApi",
		"popularity": .62
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryManager",
		"popularity": .598
	},
	{
		"id": "n8n-nodes-base.mySql",
		"popularity": .682
	},
	{
		"id": "@n8n/n8n-nodes-langchain.mcpClient",
		"popularity": .606
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatXAiGrok",
		"popularity": .604
	},
	{
		"id": "n8n-nodes-base.youTube",
		"popularity": .618
	},
	{
		"id": "n8n-nodes-base.aiTransform",
		"popularity": .595
	},
	{
		"id": "n8n-nodes-base.microsoftOutlookTrigger",
		"popularity": .6
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolThink",
		"popularity": .587
	},
	{
		"id": "n8n-nodes-base.stopAndError",
		"popularity": .625
	},
	{
		"id": "n8n-nodes-base.redis",
		"popularity": .677
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAzureOpenAi",
		"popularity": .624
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWikipedia",
		"popularity": .584
	},
	{
		"id": "n8n-nodes-base.rssFeedReadTrigger",
		"popularity": .612
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryMongoDbChat",
		"popularity": .594
	},
	{
		"id": "n8n-nodes-base.removeDuplicates",
		"popularity": .613
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter",
		"popularity": .607
	},
	{
		"id": "n8n-nodes-base.sort",
		"popularity": .577
	},
	{
		"id": "n8n-nodes-base.slackTrigger",
		"popularity": .613
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatMistralCloud",
		"popularity": .594
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGoogleVertex",
		"popularity": .581
	},
	{
		"id": "n8n-nodes-base.microsoftTeams",
		"popularity": .612
	},
	{
		"id": "n8n-nodes-base.dataTableTool",
		"popularity": .599
	},
	{
		"id": "n8n-nodes-base.openWeatherMap",
		"popularity": .557
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolVectorStore",
		"popularity": .581
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryMotorhead",
		"popularity": 0
	},
	{
		"id": "@apify/n8n-nodes-apify.apify",
		"popularity": .617
	},
	{
		"id": "n8n-nodes-base.markdown",
		"popularity": .594
	},
	{
		"id": "n8n-nodes-base.editImage",
		"popularity": .576
	},
	{
		"id": "n8n-nodes-base.linkedIn",
		"popularity": .556
	},
	{
		"id": "n8n-nodes-base.googleDriveTool",
		"popularity": .599
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsOllama",
		"popularity": .606
	},
	{
		"id": "n8n-nodes-base.googleDocsTool",
		"popularity": .599
	},
	{
		"id": "n8n-nodes-base.facebookTrigger",
		"popularity": .564
	},
	{
		"id": "n8n-nodes-base.xml",
		"popularity": .567
	},
	{
		"id": "n8n-nodes-base.n8n",
		"popularity": .572
	},
	{
		"id": "n8n-nodes-base.dateTimeTool",
		"popularity": .562
	},
	{
		"id": "n8n-nodes-base.telegramTool",
		"popularity": .555
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainSummarization",
		"popularity": .516
	},
	{
		"id": "n8n-nodes-base.microsoftSharePoint",
		"popularity": .602
	},
	{
		"id": "n8n-nodes-base.supabaseTool",
		"popularity": .594
	},
	{
		"id": "n8n-nodes-base.compareDatasets",
		"popularity": .525
	},
	{
		"id": "n8n-nodes-base.jira",
		"popularity": .583
	},
	{
		"id": "n8n-nodes-base.postgresTool",
		"popularity": .567
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStorePGVector",
		"popularity": .592
	},
	{
		"id": "n8n-nodes-base.crypto",
		"popularity": .543
	},
	{
		"id": "n8n-nodes-base.airtableTrigger",
		"popularity": .539
	},
	{
		"id": "n8n-nodes-base.github",
		"popularity": .558
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolCalculator",
		"popularity": .634
	},
	{
		"id": "@elevenlabs/n8n-nodes-elevenlabs.elevenLabs",
		"popularity": .546
	},
	{
		"id": "n8n-nodes-base.wordpress",
		"popularity": .57
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreQdrant",
		"popularity": .607
	},
	{
		"id": "@mookielianhd/n8n-nodes-instagram.instagram",
		"popularity": .54
	},
	{
		"id": "n8n-nodes-base.evaluationTrigger",
		"popularity": .528
	},
	{
		"id": "n8n-nodes-base.openWeatherMapTool",
		"popularity": .538
	},
	{
		"id": "n8n-nodes-base.hubspot",
		"popularity": .574
	},
	{
		"id": "@n8n/n8n-nodes-langchain.sentimentAnalysis",
		"popularity": .519
	},
	{
		"id": "n8n-nodes-base.perplexity",
		"popularity": .516
	},
	{
		"id": "n8n-nodes-base.twilio",
		"popularity": .566
	},
	{
		"id": "n8n-nodes-base.microsoftOneDrive",
		"popularity": .599
	},
	{
		"id": "@tavily/n8n-nodes-tavily.tavily",
		"popularity": .483
	},
	{
		"id": "n8n-nodes-base.airtableTool",
		"popularity": .53
	},
	{
		"id": "n8n-nodes-base.whatsAppTool",
		"popularity": .486
	},
	{
		"id": "n8n-nodes-base.microsoftExcel",
		"popularity": .676
	},
	{
		"id": "@n8n/n8n-nodes-langchain.guardrails",
		"popularity": .519
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverVectorStore",
		"popularity": .541
	},
	{
		"id": "n8n-nodes-base.googleChat",
		"popularity": .532
	},
	{
		"id": "n8n-nodes-base.ftp",
		"popularity": .522
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryXata",
		"popularity": .501
	},
	{
		"id": "n8n-nodes-base.hackerNews",
		"popularity": .491
	},
	{
		"id": "n8n-nodes-base.microsoftExcelTool",
		"popularity": .481
	},
	{
		"id": "n8n-nodes-base.notionTool",
		"popularity": .527
	},
	{
		"id": "n8n-nodes-base.microsoftTeamsTrigger",
		"popularity": .495
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAwsBedrock",
		"popularity": .531
	},
	{
		"id": "n8n-nodes-base.twitter",
		"popularity": .517
	},
	{
		"id": "n8n-nodes-base.line",
		"popularity": .514
	},
	{
		"id": "n8n-nodes-base.postgresTrigger",
		"popularity": .49
	},
	{
		"id": "n8n-nodes-base.nasa",
		"popularity": .472
	},
	{
		"id": "@mendable/n8n-nodes-firecrawl.firecrawl",
		"popularity": .496
	},
	{
		"id": "n8n-nodes-base.n8nTrainingCustomerDatastore",
		"popularity": .497
	},
	{
		"id": "n8n-nodes-base.compression",
		"popularity": .502
	},
	{
		"id": "n8n-nodes-base.perplexityTool",
		"popularity": .479
	},
	{
		"id": "n8n-nodes-base.debugHelper",
		"popularity": .462
	},
	{
		"id": "n8n-nodes-serpapi.serpApi",
		"popularity": .478
	},
	{
		"id": "n8n-nodes-base.emailSendHitlTool",
		"popularity": .485
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter",
		"popularity": .491
	},
	{
		"id": "n8n-nodes-base.evaluation",
		"popularity": .522
	},
	{
		"id": "n8n-nodes-base.mongoDb",
		"popularity": .562
	},
	{
		"id": "n8n-nodes-base.rssFeedReadTool",
		"popularity": .462
	},
	{
		"id": "n8n-nodes-base.facebookLeadAdsTrigger",
		"popularity": .484
	},
	{
		"id": "n8n-nodes-base.s3",
		"popularity": .518
	},
	{
		"id": "n8n-nodes-base.jiraTrigger",
		"popularity": .458
	},
	{
		"id": "n8n-nodes-base.mistralAi",
		"popularity": .456
	},
	{
		"id": "n8n-nodes-base.microsoftOneDriveTrigger",
		"popularity": .43
	},
	{
		"id": "@brave/n8n-nodes-brave-search.braveSearch",
		"popularity": .447
	},
	{
		"id": "n8n-nodes-base.renameKeys",
		"popularity": .468
	},
	{
		"id": "n8n-nodes-base.notionTrigger",
		"popularity": .493
	},
	{
		"id": "n8n-nodes-base.awsS3",
		"popularity": .506
	},
	{
		"id": "n8n-nodes-base.clickUp",
		"popularity": .576
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverContextualCompression",
		"popularity": .407
	},
	{
		"id": "n8n-nodes-base.marketstackTool",
		"popularity": .483
	},
	{
		"id": "n8n-nodes-base.microsoftOutlookHitlTool",
		"popularity": .44
	},
	{
		"id": "n8n-nodes-base.salesforce",
		"popularity": .494
	},
	{
		"id": "n8n-nodes-base.sendInBlue",
		"popularity": .463
	},
	{
		"id": "n8n-nodes-base.twilioTrigger",
		"popularity": .456
	},
	{
		"id": "n8n-nodes-base.homeAssistant",
		"popularity": .462
	},
	{
		"id": "n8n-nodes-base.wooCommerce",
		"popularity": .484
	},
	{
		"id": "n8n-nodes-base.calendlyTrigger",
		"popularity": .403
	},
	{
		"id": "n8n-nodes-base.jiraTool",
		"popularity": .486
	},
	{
		"id": "n8n-nodes-base.todoist",
		"popularity": .461
	},
	{
		"id": "n8n-nodes-base.formIoTrigger",
		"popularity": .422
	},
	{
		"id": "n8n-nodes-base.googleTasks",
		"popularity": .426
	},
	{
		"id": "n8n-nodes-base.githubTool",
		"popularity": .439
	},
	{
		"id": "n8n-nodes-base.googleTasksTool",
		"popularity": .433
	},
	{
		"id": "n8n-nodes-base.googleChatHitlTool",
		"popularity": .411
	},
	{
		"id": "n8n-nodes-cloudinary.cloudinary",
		"popularity": .453
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterTokenSplitter",
		"popularity": .438
	},
	{
		"id": "n8n-nodes-base.baserow",
		"popularity": .523
	},
	{
		"id": "n8n-nodes-base.pipedrive",
		"popularity": .522
	},
	{
		"id": "n8n-nodes-cronlytic.cronlyticTrigger",
		"popularity": .445
	},
	{
		"id": "n8n-nodes-base.postBin",
		"popularity": .447
	},
	{
		"id": "n8n-nodes-base.googleContacts",
		"popularity": .431
	},
	{
		"id": "n8n-nodes-tallyforms.tallyTrigger",
		"popularity": .423
	},
	{
		"id": "n8n-nodes-base.trello",
		"popularity": .471
	},
	{
		"id": "n8n-nodes-base.googleAds",
		"popularity": .417
	},
	{
		"id": "@searchapi/n8n-nodes-searchapi.searchApi",
		"popularity": .418
	},
	{
		"id": "n8n-nodes-qdrant.qdrant",
		"popularity": .492
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsCohere",
		"popularity": .454
	},
	{
		"id": "n8n-nodes-base.timeSaved",
		"popularity": .464
	},
	{
		"id": "n8n-nodes-base.hubspotTrigger",
		"popularity": .46
	},
	{
		"id": "n8n-nodes-base.linkedInTool",
		"popularity": .41
	},
	{
		"id": "n8n-nodes-base.quickChart",
		"popularity": .398
	},
	{
		"id": "n8n-nodes-base.mondayCom",
		"popularity": .513
	},
	{
		"id": "@blotato/n8n-nodes-blotato.blotato",
		"popularity": .478
	},
	{
		"id": "n8n-nodes-base.hunter",
		"popularity": .373
	},
	{
		"id": "n8n-nodes-base.calTrigger",
		"popularity": .421
	},
	{
		"id": "n8n-nodes-base.googleSlides",
		"popularity": .431
	},
	{
		"id": "n8n-nodes-base.asana",
		"popularity": .416
	},
	{
		"id": "n8n-nodes-pdfco.PDFco Api",
		"popularity": .413
	},
	{
		"id": "n8n-nodes-base.zohoCrm",
		"popularity": .406
	},
	{
		"id": "n8n-nodes-base.microsoftSql",
		"popularity": .578
	},
	{
		"id": "n8n-nodes-base.googleCalendarTrigger",
		"popularity": .519
	},
	{
		"id": "n8n-nodes-base.odoo",
		"popularity": .572
	},
	{
		"id": "@n8n/n8n-nodes-langchain.rerankerCohere",
		"popularity": .461
	},
	{
		"id": "n8n-nodes-base.youTubeTool",
		"popularity": .448
	},
	{
		"id": "n8n-nodes-base.dropbox",
		"popularity": .491
	},
	{
		"id": "@n8n/n8n-nodes-langchain.microsoftAgent365Trigger",
		"popularity": .345
	},
	{
		"id": "n8n-nodes-base.microsoftOutlookTool",
		"popularity": .462
	},
	{
		"id": "n8n-nodes-base.nocoDb",
		"popularity": .549
	},
	{
		"id": "n8n-nodes-base.sseTrigger",
		"popularity": .438
	},
	{
		"id": "n8n-nodes-base.filemaker",
		"popularity": .435
	},
	{
		"id": "n8n-nodes-base.mySqlTool",
		"popularity": .482
	},
	{
		"id": "n8n-nodes-base.n8nTrigger",
		"popularity": .437
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsHuggingFaceInference",
		"popularity": .47
	},
	{
		"id": "n8n-nodes-base.highLevel",
		"popularity": .492
	},
	{
		"id": "n8n-nodes-base.slackTool",
		"popularity": .439
	},
	{
		"id": "n8n-nodes-base.reddit",
		"popularity": .438
	},
	{
		"id": "n8n-nodes-base.emailSendTool",
		"popularity": .422
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatCohere",
		"popularity": .436
	},
	{
		"id": "n8n-nodes-base.googleBigQuery",
		"popularity": .469
	},
	{
		"id": "n8n-nodes-base.typeformTrigger",
		"popularity": .395
	},
	{
		"id": "n8n-nodes-base.executeCommandTool",
		"popularity": .4
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreRedis",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-base.redditTool",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.ldap",
		"popularity": .374
	},
	{
		"id": "n8n-nodes-base.awsLambda",
		"popularity": .341
	},
	{
		"id": "@fal-ai/n8n-nodes-fal.falAi",
		"popularity": .337
	},
	{
		"id": "n8n-nodes-base.matrix",
		"popularity": .381
	},
	{
		"id": "n8n-nodes-base.box",
		"popularity": .355
	},
	{
		"id": "n8n-nodes-dataforseo.dataForSeo",
		"popularity": .345
	},
	{
		"id": "n8n-nodes-base.mistralAiTool",
		"popularity": .288
	},
	{
		"id": "n8n-nodes-base.quickbooksTool",
		"popularity": .292
	},
	{
		"id": "n8n-nodes-pdfmonkey.pdfMonkey",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.awsSes",
		"popularity": .362
	},
	{
		"id": "n8n-nodes-base.agileCrm",
		"popularity": .305
	},
	{
		"id": "n8n-nodes-base.coinGecko",
		"popularity": .284
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsLemonade",
		"popularity": .239
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreZep",
		"popularity": .284
	},
	{
		"id": "n8n-nodes-base.webflow",
		"popularity": .347
	},
	{
		"id": "n8n-nodes-base.bubble",
		"popularity": .272
	},
	{
		"id": "n8n-nodes-documentero.documentero",
		"popularity": .299
	},
	{
		"id": "n8n-nodes-base.googleAnalyticsTool",
		"popularity": .284
	},
	{
		"id": "n8n-nodes-base.jinaAiTool",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-base.awsDynamoDb",
		"popularity": .239
	},
	{
		"id": "n8n-nodes-base.nextCloudTool",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.baserowTool",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.awsTranscribe",
		"popularity": .246
	},
	{
		"id": "n8n-nodes-base.affinity",
		"popularity": .299
	},
	{
		"id": "n8n-nodes-base.awsTextract",
		"popularity": .292
	},
	{
		"id": "n8n-nodes-base.nocoDbTool",
		"popularity": .355
	},
	{
		"id": "n8n-nodes-base.urlScanIo",
		"popularity": .292
	},
	{
		"id": "n8n-nodes-base.kafka",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.googleAdsTool",
		"popularity": .276
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreMilvus",
		"popularity": .327
	},
	{
		"id": "n8n-nodes-base.cloudflare",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-base.webflowTrigger",
		"popularity": .246
	},
	{
		"id": "n8n-nodes-base.linearTrigger",
		"popularity": .292
	},
	{
		"id": "n8n-nodes-autocalls.autocalls",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.apiTemplateIo",
		"popularity": .284
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreWeaviate",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-postfast.postFast",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-base.adalo",
		"popularity": .217
	},
	{
		"id": "@brightdata/n8n-nodes-brightdata.brightData",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.gitlabTool",
		"popularity": .284
	},
	{
		"id": "n8n-nodes-base.webflowTool",
		"popularity": .217
	},
	{
		"id": "n8n-nodes-base.pipedriveTool",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-base.strava",
		"popularity": .288
	},
	{
		"id": "@nskha/n8n-nodes-scrappey.scrappey",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-scrapingbee.ScrapingBee",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-aimlapi.aimlApi",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-scrape-creators.scrapeCreators",
		"popularity": .308
	},
	{
		"id": "n8n-nodes-base.zendeskTrigger",
		"popularity": .239
	},
	{
		"id": "n8n-nodes-base.vonage",
		"popularity": .209
	},
	{
		"id": "n8n-nodes-base.humanticAiTool",
		"popularity": .199
	},
	{
		"id": "n8n-nodes-base.emailReadImapTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-postiz.postiz",
		"popularity": .288
	},
	{
		"id": "n8n-nodes-outscraper.outscraper",
		"popularity": .217
	},
	{
		"id": "n8n-nodes-base.oracleDatabaseTool",
		"popularity": .308
	},
	{
		"id": "n8n-nodes-base.dropboxTool",
		"popularity": .251
	},
	{
		"id": "@aotoki/n8n-nodes-line-messaging.lineMessaging",
		"popularity": .559
	},
	{
		"id": "n8n-nodes-base.githubTrigger",
		"popularity": .495
	},
	{
		"id": "n8n-nodes-base.redisTrigger",
		"popularity": .374
	},
	{
		"id": "n8n-nodes-base.togglTrigger",
		"popularity": .376
	},
	{
		"id": "n8n-nodes-base.localFileTrigger",
		"popularity": .398
	},
	{
		"id": "n8n-nodes-base.jinaAi",
		"popularity": .398
	},
	{
		"id": "n8n-nodes-base.googleAnalytics",
		"popularity": .406
	},
	{
		"id": "n8n-nodes-base.nextCloud",
		"popularity": .431
	},
	{
		"id": "n8n-nodes-base.discordTool",
		"popularity": .401
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreMongoDBAtlas",
		"popularity": .407
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolSearXng",
		"popularity": .402
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatVercelAiGateway",
		"popularity": .385
	},
	{
		"id": "n8n-nodes-base.oracleDatabase",
		"popularity": .441
	},
	{
		"id": "n8n-nodes-base.actionNetwork",
		"popularity": .376
	},
	{
		"id": "n8n-nodes-base.git",
		"popularity": .446
	},
	{
		"id": "n8n-nodes-base.jwt",
		"popularity": .391
	},
	{
		"id": "n8n-nodes-base.googleFirebaseCloudFirestore",
		"popularity": .484
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverMultiQuery",
		"popularity": .368
	},
	{
		"id": "n8n-nodes-base.spotify",
		"popularity": .436
	},
	{
		"id": "n8n-nodes-base.pushover",
		"popularity": .411
	},
	{
		"id": "n8n-nodes-upload-post.uploadPost",
		"popularity": .411
	},
	{
		"id": "n8n-nodes-base.gitlab",
		"popularity": .406
	},
	{
		"id": "n8n-nodes-base.googleContactsTool",
		"popularity": .381
	},
	{
		"id": "n8n-nodes-base.clickUpTrigger",
		"popularity": .424
	},
	{
		"id": "n8n-nodes-base.facebookGraphApiTool",
		"popularity": .384
	},
	{
		"id": "n8n-nodes-base.zoom",
		"popularity": .39
	},
	{
		"id": "n8n-nodes-base.mqttTrigger",
		"popularity": .4
	},
	{
		"id": "n8n-nodes-base.redisTool",
		"popularity": .376
	},
	{
		"id": "n8n-nodes-base.googleCloudStorage",
		"popularity": .432
	},
	{
		"id": "n8n-nodes-syncmate.whatsAuto",
		"popularity": .337
	},
	{
		"id": "n8n-nodes-base.microsoftOneDriveTool",
		"popularity": .353
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfile",
		"popularity": .381
	},
	{
		"id": "n8n-nodes-base.stripeTrigger",
		"popularity": .365
	},
	{
		"id": "n8n-nodes-base.snowflake",
		"popularity": .445
	},
	{
		"id": "n8n-nodes-base.sendGrid",
		"popularity": .416
	},
	{
		"id": "n8n-nodes-base.trelloTrigger",
		"popularity": .334
	},
	{
		"id": "n8n-nodes-base.microsoftSqlTool",
		"popularity": .393
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatLemonade",
		"popularity": .389
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsMistralCloud",
		"popularity": .395
	},
	{
		"id": "@cloudconvert/n8n-nodes-cloudconvert.cloudConvert",
		"popularity": .389
	},
	{
		"id": "n8n-nodes-base.pushoverTool",
		"popularity": .396
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverWorkflow",
		"popularity": .371
	},
	{
		"id": "n8n-nodes-base.hackerNewsTool",
		"popularity": .337
	},
	{
		"id": "n8n-nodes-base.gitlabTrigger",
		"popularity": .416
	},
	{
		"id": "n8n-nodes-base.zendesk",
		"popularity": .374
	},
	{
		"id": "n8n-nodes-base.clickUpTool",
		"popularity": .394
	},
	{
		"id": "n8n-nodes-base.microsoftTeamsHitlTool",
		"popularity": .355
	},
	{
		"id": "n8n-nodes-base.jotFormTrigger",
		"popularity": .397
	},
	{
		"id": "n8n-nodes-base.mqtt",
		"popularity": .386
	},
	{
		"id": "n8n-nodes-base.shopifyTool",
		"popularity": .402
	},
	{
		"id": "n8n-nodes-base.philipsHueTool",
		"popularity": .38
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsAzureOpenAi",
		"popularity": .409
	},
	{
		"id": "n8n-nodes-base.salesforceTrigger",
		"popularity": .339
	},
	{
		"id": "n8n-nodes-base.quickbooks",
		"popularity": .449
	},
	{
		"id": "n8n-nodes-base.dhl",
		"popularity": .339
	},
	{
		"id": "n8n-nodes-powerbi.powerBi",
		"popularity": .383
	},
	{
		"id": "@pdfgeneratorapi/n8n-nodes-pdf-generator-api.pdfGeneratorApi",
		"popularity": .341
	},
	{
		"id": "n8n-nodes-base.totp",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-base.wooCommerceTrigger",
		"popularity": .389
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmLemonade",
		"popularity": .355
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreAzureAISearch",
		"popularity": .356
	},
	{
		"id": "n8n-nodes-base.hubspotTool",
		"popularity": .356
	},
	{
		"id": "n8n-nodes-base.mailgun",
		"popularity": .358
	},
	{
		"id": "n8n-nodes-base.airtop",
		"popularity": .421
	},
	{
		"id": "n8n-nodes-base.twilioTool",
		"popularity": .322
	},
	{
		"id": "n8n-nodes-base.deepL",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-base.wordpressTool",
		"popularity": .351
	},
	{
		"id": "n8n-nodes-base.googleTranslate",
		"popularity": .386
	},
	{
		"id": "n8n-nodes-base.activeCampaign",
		"popularity": .368
	},
	{
		"id": "n8n-nodes-base.twitterTool",
		"popularity": .327
	},
	{
		"id": "n8n-nodes-base.microsoftSharePointTool",
		"popularity": .41
	},
	{
		"id": "n8n-nodes-google-search-console.googleSearchConsole",
		"popularity": .351
	},
	{
		"id": "n8n-nodes-base.stripe",
		"popularity": .363
	},
	{
		"id": "n8n-nodes-base.microsoftTeamsTool",
		"popularity": .322
	},
	{
		"id": "n8n-nodes-base.mongoDbTool",
		"popularity": .355
	},
	{
		"id": "n8n-nodes-pdf4me.PDF4me",
		"popularity": .355
	},
	{
		"id": "n8n-nodes-base.graphql",
		"popularity": .449
	},
	{
		"id": "n8n-nodes-aiscraper.aiScraper",
		"popularity": .339
	},
	{
		"id": "@n8n/n8n-nodes-langchain.code",
		"popularity": .401
	},
	{
		"id": "n8n-nodes-base.serviceNow",
		"popularity": .377
	},
	{
		"id": "n8n-nodes-base.lineTool",
		"popularity": .276
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsAwsBedrock",
		"popularity": .356
	},
	{
		"id": "n8n-nodes-base.trelloTool",
		"popularity": .381
	},
	{
		"id": "n8n-nodes-base.metabase",
		"popularity": .376
	},
	{
		"id": "n8n-nodes-base.grist",
		"popularity": .345
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfileTrigger",
		"popularity": .288
	},
	{
		"id": "n8n-nodes-base.homeAssistantTool",
		"popularity": .365
	},
	{
		"id": "n8n-nodes-base.microsoftEntra",
		"popularity": .343
	},
	{
		"id": "@firefliesai/n8n-nodes-fireflies.fireflies",
		"popularity": .347
	},
	{
		"id": "@apify/n8n-nodes-apify.apifyTrigger",
		"popularity": .337
	},
	{
		"id": "n8n-nodes-base.microsoftToDoTool",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-base.grafana",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.todoistTool",
		"popularity": .425
	},
	{
		"id": "n8n-nodes-linkupapi.linkup",
		"popularity": .292
	},
	{
		"id": "n8n-nodes-base.pipedriveTrigger",
		"popularity": .299
	},
	{
		"id": "n8n-nodes-base.customerIoTool",
		"popularity": .317
	},
	{
		"id": "n8n-nodes-base.freshdesk",
		"popularity": .367
	},
	{
		"id": "n8n-nodes-base.rabbitmq",
		"popularity": .365
	},
	{
		"id": "n8n-nodes-base.linear",
		"popularity": .317
	},
	{
		"id": "n8n-nodes-base.gSuiteAdmin",
		"popularity": .332
	},
	{
		"id": "n8n-nodes-base.formstackTrigger",
		"popularity": .288
	},
	{
		"id": "n8n-nodes-base.googleTranslateTool",
		"popularity": .327
	},
	{
		"id": "n8n-nodes-base.messageBird",
		"popularity": .292
	},
	{
		"id": "n8n-nodes-base.asanaTrigger",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.mailchimp",
		"popularity": .33
	},
	{
		"id": "n8n-nodes-base.figmaTrigger",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-assemblyai.assemblyAi",
		"popularity": .356
	},
	{
		"id": "n8n-nodes-base.cryptoTool",
		"popularity": .246
	},
	{
		"id": "n8n-nodes-base.highLevelTool",
		"popularity": .325
	},
	{
		"id": "n8n-nodes-base.wooCommerceTool",
		"popularity": .391
	},
	{
		"id": "n8n-nodes-base.googleChatTool",
		"popularity": .302
	},
	{
		"id": "n8n-nodes-base.gotify",
		"popularity": .302
	},
	{
		"id": "n8n-nodes-pdfvector.pdfVector",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-base.bitbucketTrigger",
		"popularity": .305
	},
	{
		"id": "n8n-nodes-anchorbrowser.anchorBrowser",
		"popularity": .284
	},
	{
		"id": "n8n-nodes-base.microsoftToDo",
		"popularity": .288
	},
	{
		"id": "n8n-nodes-base.xero",
		"popularity": .322
	},
	{
		"id": "n8n-nodes-base.elasticsearch",
		"popularity": .327
	},
	{
		"id": "n8n-nodes-base.odooTool",
		"popularity": .337
	},
	{
		"id": "n8n-nodes-base.gong",
		"popularity": .209
	},
	{
		"id": "n8n-nodes-htmlcsstoimage.htmlCssToImage",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-instantly.instantly",
		"popularity": .339
	},
	{
		"id": "n8n-nodes-veed.veed",
		"popularity": .302
	},
	{
		"id": "n8n-nodes-base.erpNext",
		"popularity": .377
	},
	{
		"id": "n8n-nodes-base.azureStorage",
		"popularity": .345
	},
	{
		"id": "@custom-js/n8n-nodes-pdf-toolkit-v2.pdfToolkit",
		"popularity": .32
	},
	{
		"id": "n8n-nodes-base.stravaTrigger",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.seaTable",
		"popularity": .341
	},
	{
		"id": "n8n-nodes-browseract.browserAct",
		"popularity": .345
	},
	{
		"id": "n8n-nodes-base.googleSlidesTool",
		"popularity": .337
	},
	{
		"id": "n8n-nodes-base.spotifyTool",
		"popularity": .339
	},
	{
		"id": "n8n-nodes-base.elasticsearchTool",
		"popularity": .251
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmCohere",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-base.quickChartTool",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-get-transcribe.getTranscribe",
		"popularity": .189
	},
	{
		"id": "n8n-nodes-base.salesforceTool",
		"popularity": .272
	},
	{
		"id": "n8n-nodes-base.acuitySchedulingTrigger",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.airtopTool",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-ticktick.tickTick",
		"popularity": .284
	},
	{
		"id": "n8n-nodes-base.googleBigQueryTool",
		"popularity": .299
	},
	{
		"id": "n8n-nodes-base.mailerLite",
		"popularity": .246
	},
	{
		"id": "n8n-nodes-base.rocketchat",
		"popularity": .272
	},
	{
		"id": "n8n-nodes-base.phantombuster",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-base.zohoCrmTool",
		"popularity": .246
	},
	{
		"id": "n8n-nodes-base.actionNetworkTool",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-olostep.olostepScrape",
		"popularity": .209
	},
	{
		"id": "n8n-nodes-docugenerate.docuGenerate",
		"popularity": .225
	},
	{
		"id": "@2chat/n8n-nodes-twochat.twoChat",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-base.googleCloudNaturalLanguageTool",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-base.travisCiTool",
		"popularity": .189
	},
	{
		"id": "n8n-nodes-llmlayer.llmLayer",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-avatartalk.avatarTalk",
		"popularity": .225
	},
	{
		"id": "@videodb/n8n-nodes-videodb.videoDb",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-botnoi-voice.botnoitts",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-base.microsoftGraphSecurityTool",
		"popularity": .199
	},
	{
		"id": "n8n-nodes-browserbase.browserbase",
		"popularity": .358
	},
	{
		"id": "n8n-nodes-base.payPal",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.rabbitmqTrigger",
		"popularity": .358
	},
	{
		"id": "n8n-nodes-base.ghost",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-triggercmd.triggercmd",
		"popularity": .272
	},
	{
		"id": "n8n-nodes-base.eventbriteTrigger",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-base.splunk",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.googleFirebaseRealtimeDatabaseTool",
		"popularity": .209
	},
	{
		"id": "n8n-nodes-screenshotbase.screenshotBase",
		"popularity": .199
	},
	{
		"id": "n8n-nodes-base.asanaTool",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-base.lemlist",
		"popularity": .302
	},
	{
		"id": "n8n-nodes-base.strapi",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.hunterTool",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-base.bannerbear",
		"popularity": .288
	},
	{
		"id": "@cloudsway-ai/n8n-nodes-cloudsway.smartSearch",
		"popularity": .239
	},
	{
		"id": "n8n-nodes-base.cloudflareTool",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-base.affinityTool",
		"popularity": .257
	},
	{
		"id": "n8n-nodes-base.serviceNowTool",
		"popularity": .393
	},
	{
		"id": "n8n-nodes-base.ciscoWebex",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-base.sendInBlueTool",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-base.mailjet",
		"popularity": .246
	},
	{
		"id": "n8n-nodes-base.stravaTool",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-base.mautic",
		"popularity": .308
	},
	{
		"id": "n8n-nodes-templated.templated",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.phantombusterTool",
		"popularity": .189
	},
	{
		"id": "n8n-nodes-verifiemail.verifiEmail",
		"popularity": .209
	},
	{
		"id": "n8n-nodes-base.convertKit",
		"popularity": .209
	},
	{
		"id": "n8n-nodes-base.affinityTrigger",
		"popularity": .189
	},
	{
		"id": "n8n-nodes-base.bambooHr",
		"popularity": .217
	},
	{
		"id": "n8n-nodes-base.awsS3Tool",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-base.invoiceNinjaTool",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.postHog",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.googleFirebaseCloudFirestoreTool",
		"popularity": .299
	},
	{
		"id": "n8n-nodes-base.freshserviceTool",
		"popularity": .146
	},
	{
		"id": "@respond-io/n8n-nodes-respond-io.respondio",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.zammad",
		"popularity": .272
	},
	{
		"id": "n8n-nodes-base.mailchimpTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.microsoftDynamicsCrmTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-tmpfiles.tmpfiles",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.getResponseTool",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.compressionTool",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-base.dhlTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.snowflakeTool",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-zohozeptomail.zohoZeptomail",
		"popularity": .257
	},
	{
		"id": "n8n-nodes-base.awsTextractTool",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-base.awsSnsTrigger",
		"popularity": .189
	},
	{
		"id": "n8n-nodes-base.microsoftEntraTool",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.wise",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-onenote.onenote",
		"popularity": .189
	},
	{
		"id": "n8n-nodes-base.googleCloudNaturalLanguage",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-base.nasaTool",
		"popularity": .189
	},
	{
		"id": "n8n-nodes-base.amqpTrigger",
		"popularity": .239
	},
	{
		"id": "n8n-nodes-scrapegraphai.scrapegraphAi",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-base.azureCosmosDb",
		"popularity": .246
	},
	{
		"id": "n8n-nodes-unstract.llmWhisperer",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.customerIo",
		"popularity": .189
	},
	{
		"id": "@servicem8/n8n-nodes-servicem8.serviceM8",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-sourcegeek.sourcegeek",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.mailchimpTrigger",
		"popularity": .176
	},
	{
		"id": "@urlbox/n8n-nodes-urlbox.urlbox",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.amqp",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.lemlistTrigger",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.sendInBlueTrigger",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-fullenrich.fullEnrich",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-human-in-the-loop.hitlNode",
		"popularity": .189
	},
	{
		"id": "n8n-nodes-base.metabaseTool",
		"popularity": .305
	},
	{
		"id": "n8n-nodes-base.npm",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.googleFirebaseRealtimeDatabase",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.graphqlTool",
		"popularity": .239
	},
	{
		"id": "n8n-nodes-base.bitly",
		"popularity": .189
	},
	{
		"id": "@razorpay/n8n-nodes-razorpay.razorpay",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-softr.softr",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.pushbullet",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-vikunja.vikunja",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-wpforms.wpformsTrigger",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.convertKitTool",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.sms77",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-placid.placid",
		"popularity": .246
	},
	{
		"id": "n8n-nodes-pdforge.pdforge",
		"popularity": .246
	},
	{
		"id": "n8n-nodes-base.okta",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.jenkins",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-base.medium",
		"popularity": .276
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfileTool",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-base.flow",
		"popularity": .199
	},
	{
		"id": "n8n-nodes-base.mindee",
		"popularity": .257
	},
	{
		"id": "n8n-nodes-base.oneSimpleApiTool",
		"popularity": .199
	},
	{
		"id": "n8n-nodes-base.stripeTool",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-base.philipsHue",
		"popularity": .217
	},
	{
		"id": "n8n-nodes-opnform.opnformTrigger",
		"popularity": .209
	},
	{
		"id": "@lusha-org/n8n-nodes-lusha.lusha",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-base.zoomTool",
		"popularity": .276
	},
	{
		"id": "n8n-nodes-base.clockify",
		"popularity": .317
	},
	{
		"id": "n8n-nodes-base.coda",
		"popularity": .257
	},
	{
		"id": "n8n-nodes-base.bitwarden",
		"popularity": .199
	},
	{
		"id": "n8n-nodes-base.activeCampaignTool",
		"popularity": .199
	},
	{
		"id": "n8n-nodes-exa-official.exa",
		"popularity": .217
	},
	{
		"id": "n8n-nodes-base.marketstack",
		"popularity": .284
	},
	{
		"id": "n8n-nodes-oxylabs-ai-studio.oxylabsAiStudio",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-base.getResponse",
		"popularity": .209
	},
	{
		"id": "n8n-nodes-base.freshservice",
		"popularity": .217
	},
	{
		"id": "n8n-nodes-base.gumroadTrigger",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-fillout.filloutTrigger",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-base.awsSqs",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-base.awsTranscribeTool",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-base.seaTableTool",
		"popularity": .209
	},
	{
		"id": "n8n-nodes-base.zendeskTool",
		"popularity": .199
	},
	{
		"id": "n8n-nodes-late.late",
		"popularity": .217
	},
	{
		"id": "n8n-nodes-pdf-api-hub.pdfSplitMerge",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-base.misp",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-1shot.oneShot",
		"popularity": .209
	},
	{
		"id": "n8n-nodes-base.microsoftGraphSecurity",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-heyreach.heyReach",
		"popularity": .32
	},
	{
		"id": "n8n-nodes-converthub.converthub",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.surveyMonkeyTrigger",
		"popularity": .189
	},
	{
		"id": "n8n-nodes-base.linearTool",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.coinGeckoTool",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-base.grafanaTool",
		"popularity": .217
	},
	{
		"id": "n8n-nodes-base.gSuiteAdminTool",
		"popularity": .189
	},
	{
		"id": "n8n-nodes-parallel.parallel",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.apiTemplateIoTool",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-base.microsoftDynamicsCrm",
		"popularity": .217
	},
	{
		"id": "n8n-nodes-base.oneSimpleApi",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-chat-data.chatData",
		"popularity": .199
	},
	{
		"id": "n8n-nodes-base.pushcut",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-base.sentryIo",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-base.magento2",
		"popularity": .199
	},
	{
		"id": "n8n-nodes-base.filemakerTool",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-base.deepLTool",
		"popularity": .199
	},
	{
		"id": "n8n-nodes-base.messageBirdTool",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-supadata.supadata",
		"popularity": .288
	},
	{
		"id": "@directus/n8n-nodes-directus.directus",
		"popularity": .332
	},
	{
		"id": "@promptlayer/n8n-nodes-promptlayer-runagent.promptLayerRunAgent",
		"popularity": .199
	},
	{
		"id": "n8n-nodes-base.uproc",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.urlScanIoTool",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.gitTool",
		"popularity": .189
	},
	{
		"id": "n8n-nodes-base.rundeck",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.intercom",
		"popularity": .189
	},
	{
		"id": "@scrapeops/n8n-nodes-scrapeops.ScrapeOps",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.contentful",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.jwtTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-nimbasms.nimbaSMS",
		"popularity": 0
	},
	{
		"id": "@infobip/n8n-nodes-infobip-api.infobipApi",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.invoiceNinja",
		"popularity": .272
	},
	{
		"id": "n8n-nodes-base.clockifyTrigger",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.googleBooksTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-abyssale.abyssale",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.ciscoWebexTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.msg91",
		"popularity": .063
	},
	{
		"id": "@serphouse/n8n-nodes-serphouse.serphouse",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-scraperapi-official.scraperApi",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.xeroTool",
		"popularity": .1
	},
	{
		"id": "@docuseal/n8n-nodes-docuseal.docuseal",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.contentfulTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.amqpTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.ciscoWebexTrigger",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.oura",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.payPalTrigger",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.Brandfetch",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.mediumTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.zammadTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.mondayComTool",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-solapi.solapi",
		"popularity": .199
	},
	{
		"id": "n8n-nodes-base.sendGridTool",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-base.freshworksCrm",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.awsComprehend",
		"popularity": .146
	},
	{
		"id": "@cometapi-dev/n8n-nodes-cometapi.cometApi",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-ada.ada",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.freshdeskTool",
		"popularity": .1
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWolframAlpha",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.boxTrigger",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.loneScaleTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.rabbitmqTool",
		"popularity": .199
	},
	{
		"id": "n8n-nodes-base.netlify",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-scrapeless.scrapeless",
		"popularity": .209
	},
	{
		"id": "n8n-nodes-base.awsRekognition",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-ipgeolocation.ipgeolocation",
		"popularity": .199
	},
	{
		"id": "n8n-nodes-base.awsLambdaTool",
		"popularity": .199
	},
	{
		"id": "@datafix/n8n-nodes-exact-online.exactOnline",
		"popularity": .295
	},
	{
		"id": "@solution25/n8n-nodes-shopware.shopware",
		"popularity": .272
	},
	{
		"id": "n8n-nodes-kipps.kippsAiChatbot",
		"popularity": .189
	},
	{
		"id": "n8n-nodes-base.seaTableTrigger",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.mailgunTool",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.zulip",
		"popularity": .246
	},
	{
		"id": "n8n-nodes-base.autopilot",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.keap",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.pagerDuty",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-base.harvest",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.raindrop",
		"popularity": .217
	},
	{
		"id": "n8n-nodes-craftmypdf.craftMyPdf",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.mattermostTool",
		"popularity": .199
	},
	{
		"id": "n8n-nodes-base.bubbleTool",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.freshworksCrmTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.jenkinsTool",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-chat-data.chatDataTrigger",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.bitwardenTool",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.iterable",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-mallabe-images.mallabeImages",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.autopilotTool",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.bambooHrTool",
		"popularity": .063
	},
	{
		"id": "@zerobounce/n8n-nodes-zerobounce.zeroBounce",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.yourls",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectDatacenterTool",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-emailvalidation.emailValidation",
		"popularity": .189
	},
	{
		"id": "n8n-nodes-base.npmTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.openThesaurus",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.adaloTool",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.agileCrmTool",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.awsIam",
		"popularity": .199
	},
	{
		"id": "n8n-nodes-base.postmarkTrigger",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.theHiveProject",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-docuwriter-ai.docuWriter",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.uptimeRobot",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.ldapTool",
		"popularity": .189
	},
	{
		"id": "n8n-nodes-base.splunkTool",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.awsSns",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.clockifyTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-docuprox.docuProx",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.rocketchatTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.magento2Tool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-airparser.airparser",
		"popularity": .176
	},
	{
		"id": "@telnyx/n8n-nodes-telnyx-ai.telnyxAi",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.haloPSA",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.matrixTool",
		"popularity": .1
	},
	{
		"id": "@wix/n8n-nodes-wix.wix",
		"popularity": .233
	},
	{
		"id": "n8n-nodes-base.mailerLiteTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.intercomTool",
		"popularity": .1
	},
	{
		"id": "@globalping/n8n-nodes-globalping.globalping",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-addtowallet.addToWallet",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-shortio.Shortio",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-base.workableTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.upleadTool",
		"popularity": .063
	},
	{
		"id": "@decodo/n8n-nodes-decodo.decodo",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-clipboardgenie.clipboardGenie",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.clearbit",
		"popularity": .199
	},
	{
		"id": "n8n-nodes-carbone.carbone",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-parsio.parsio",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-smstools.smstools",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-alive5.alive5",
		"popularity": 0
	},
	{
		"id": "@seranking/n8n-nodes-seranking.seRanking",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.activeCampaignTrigger",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-base.humanticAi",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-awork.awork",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.dropcontact",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.wufooTrigger",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.segmentTool",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.awsCognito",
		"popularity": .1
	},
	{
		"id": "@jetbrains/n8n-nodes-youtrack.youtrack",
		"popularity": .189
	},
	{
		"id": "n8n-nodes-base.invoiceNinjaTrigger",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-vikunja.vikunjaTrigger",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.codaTool",
		"popularity": .199
	},
	{
		"id": "@picsart/n8n-nodes-picsart-creative-apis.picsartImage",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-base.gristTool",
		"popularity": .176
	},
	{
		"id": "@deutschlandgpt/n8n-nodes-deutschlandgpt.deutschlandgpt",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.cortex",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.elasticSecurity",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.helpScout",
		"popularity": .239
	},
	{
		"id": "n8n-nodes-base.BrandfetchTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.customerIoTrigger",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-dust.dust",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-inoreader.inoreader",
		"popularity": .063
	},
	{
		"id": "@sendpulse/n8n-nodes-sendpulse.sendPulseA360",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-parseur.parseurTrigger",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.erpNextTool",
		"popularity": .308
	},
	{
		"id": "@picsart/n8n-nodes-picsart-creative-apis.picsartVideo",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.wekanTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-infranodus.infranodus",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-yepcode.yepCode",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.zulipTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.mailcheckTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-jetapi.jetapi",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-anytype.anytype",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-contextualai.contextualAi",
		"popularity": .1
	},
	{
		"id": "@nuelink/n8n-nodes-nuelink.nuelink",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.sendy",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-tubelab.tubeLab",
		"popularity": 0
	},
	{
		"id": "@tehw0lf/n8n-nodes-toon.toon",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.salesmate",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.mailerLiteTool",
		"popularity": .1
	},
	{
		"id": "@digitalocean/n8n-nodes-digitalocean-gradient-serverless-inference.digitalOceanGradientServerlessInference",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-templatefox.templateFox",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-supermetrics.supermetrics",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.mailjetTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-nele-ai.neleAi",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.manualTrigger",
		"popularity": .99
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWorkflow",
		"popularity": .748
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserAutofixing",
		"popularity": .636
	},
	{
		"id": "n8n-nodes-base.discord",
		"popularity": .676
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreSupabase",
		"popularity": .656
	},
	{
		"id": "n8n-nodes-base.telegramHitlTool",
		"popularity": .56
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmOpenHuggingFaceInference",
		"popularity": .509
	},
	{
		"id": "n8n-nodes-base.googleCloudStorageTool",
		"popularity": .272
	},
	{
		"id": "@langfuse/n8n-nodes-langfuse.langfuse",
		"popularity": .217
	},
	{
		"id": "@gammatech/n8n-nodes-gamma.gamma",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.strapiTool",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-mailtrap.mailtrap",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-base.awsCertificateManager",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-skyvern.skyvern",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-screenshotone.screenshotOne",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-fluentc.fluentCTranslate",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-agencii.agencii",
		"popularity": .146
	},
	{
		"id": "@ainoflow/n8n-nodes-ainoflow.ainoflowConvert",
		"popularity": .1
	},
	{
		"id": "@paloaltonetworks/n8n-nodes-prisma-airs.prismaAirs",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.mqttTool",
		"popularity": .189
	},
	{
		"id": "@enginemailer/n8n-nodes-enginemailer.enginemailer",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-extruct.extruct",
		"popularity": .1
	},
	{
		"id": "@netgsm/n8n-nodes-netgsm.netgsm",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.mandrill",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.monicaCrmTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-fishaudio.fishaudio",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-base.theHiveTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-trackingtime.trackingtimeTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.discourseTool",
		"popularity": 0
	},
	{
		"id": "@flarelight/n8n-nodes-flarelight.flarelight",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-murf.murf",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-docsautomator.docsAutomator",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-klicktipp.klicktipp",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.plivo",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-mallabe-barcodes.mallabeBarcodes",
		"popularity": .146
	},
	{
		"id": "@thelifeofrishi/n8n-nodes-orshot.orshot",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.uptimeRobotTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.iterableTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.googleBooks",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.uplead",
		"popularity": .1
	},
	{
		"id": "@postpulse/n8n-nodes-postpulse.postPulse",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.peekalink",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.sentryIoTool",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-base.peekalinkTool",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.circleCi",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.googlePerspectiveTool",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.googlePerspective",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.timescaleDb",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.chargebeeTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.yourlsTool",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.paddleTool",
		"popularity": 0
	},
	{
		"id": "@nvoip/n8n-nodes-nvoip.nvoip",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.lemlistTool",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-blooio.blooioMessaging",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.sms77Tool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.flowTrigger",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-straico-official.straicoOfficial",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.currents",
		"popularity": .209
	},
	{
		"id": "@zohomail/n8n-nodes-zohocalendar.zohoCalendar",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.postHogTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-parseur.parseur",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.ghostTool",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-csvbox.csvboxTrigger",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectCloudTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.netlifyTrigger",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.chargebee",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.autopilotTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.chargebeeTrigger",
		"popularity": .1
	},
	{
		"id": "@local-falcon/n8n-nodes-localfalcon.localFalcon",
		"popularity": 0
	},
	{
		"id": "@woztell-sanuker/n8n-nodes-woztell-sanuker.woztellTrigger",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-gleanclient.gleanClient",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.storyblok",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-cyberpulse-compliance-dev.cyberPulseCompliance",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.helpScoutTool",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.dropcontactTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-jsonpost.jsonPostTrigger",
		"popularity": .126
	},
	{
		"id": "@apaleo/n8n-nodes-apaleo-official.apaleo",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-mrscraper.mrscraper",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-base.totpTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.timescaleDbTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.wiseTrigger",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-aimfox.aimfox",
		"popularity": .332
	},
	{
		"id": "n8n-nodes-base.securityScorecardTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.gongTool",
		"popularity": .1
	},
	{
		"id": "@neosapience/n8n-nodes-typecast.typecast",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-dumplingai.dumplingAi",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.stackby",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-bookstack.bookstack",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-bookoly.bookoly",
		"popularity": .1
	},
	{
		"id": "@oregister/n8n-nodes-openregister.openRegister",
		"popularity": .063
	},
	{
		"id": "@decisionrules/n8n-nodes-decisionrules.decisionRules",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.driftTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.openThesaurusTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.awsSesTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.pagerDutyTool",
		"popularity": .063
	},
	{
		"id": "@fibery/n8n-nodes-fibery.fibery",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.mauticTrigger",
		"popularity": 0
	},
	{
		"id": "@exploriumai/n8n-nodes-explorium-ai.exploriumApiNode",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.unleashedSoftwareTool",
		"popularity": .063
	},
	{
		"id": "@nexlev/n8n-nodes-nexlev.nexlev",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-pushinator.pushinator",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.koBoToolbox",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.monicaCrm",
		"popularity": .063
	},
	{
		"id": "@onlyfansapi/n8n-nodes-onlyfansapi.onlyFans",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.copper",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.clearbitTool",
		"popularity": 0
	},
	{
		"id": "@thingsboard/n8n-nodes-thingsboard.thingsBoard",
		"popularity": .32
	},
	{
		"id": "n8n-nodes-base.helpScoutTrigger",
		"popularity": .199
	},
	{
		"id": "@musixmatch/n8n-nodes-musixmatch.musixmatch",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.syncroMspTool",
		"popularity": 0
	},
	{
		"id": "@reportei/n8n-nodes-reportei.reportei",
		"popularity": .126
	},
	{
		"id": "@xano/n8n-nodes-xano.xano",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.harvestTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-checkmk.checkmk",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.elasticSecurityTool",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-scraping-dog.scrapingDog",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.syncroMsp",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-seo-content-machine.seoContentMachine",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.wekan",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-digital-ocean.digitalOcean",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.crateDbTool",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-outgrow.outgrowTrigger",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.keapTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.lingvaNex",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.circleCiTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-businessmap.businessmap",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-binalyze-air.air",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-contentdrips.contentdrips",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.gotifyTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.demio",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.plivoTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-pagepixels-screenshots.pagePixelsScreenshots",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-peek-pro.peekPro",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.signl4Tool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.getResponseTrigger",
		"popularity": .063
	},
	{
		"id": "@wizaco/n8n-nodes-wiza.wiza",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.vonageTool",
		"popularity": 0
	},
	{
		"id": "@alipeople/n8n-nodes-sendon.sendon",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.cockpitTool",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.theHiveProjectTrigger",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.bitlyTool",
		"popularity": 0
	},
	{
		"id": "@vlm-run/n8n-nodes-vlmrun.vlmRun",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.questDb",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-groner.groner",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.taiga",
		"popularity": .162
	},
	{
		"id": "n8n-nodes-base.crateDb",
		"popularity": .063
	},
	{
		"id": "@handelsregister/n8n-nodes-handelsregister-ai.handelsregisterAi",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.mauticTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.netlifyTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-hedy.hedy",
		"popularity": .176
	},
	{
		"id": "n8n-nodes-videotoblog.videoToBlog",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-chartmogul.chartmogul",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.twist",
		"popularity": 0
	},
	{
		"id": "@waapi/n8n-nodes-waalaxy.waalaxy",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.pushbulletTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.segment",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.quickbase",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-diviup-connect.diviUpConnect",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.emeliaTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.questDbTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-pubnub.pubNub",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-bounceban.bounceban",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-base.goToWebinar",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.convertKitTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-atriomail-email.atriomail",
		"popularity": 0
	},
	{
		"id": "@securevector/n8n-nodes-securevector.secureVector",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-itop.iTop",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-meetgeek.meetGeek",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-pagbank-connect.pagBank",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.unleashedSoftware",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.oktaTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-dart.dart",
		"popularity": 0
	},
	{
		"id": "@copicake/n8n-nodes-copicake.copicake",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.ouraTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.discourse",
		"popularity": .176
	},
	{
		"id": "@klardaten/n8n-nodes-datevconnect.masterData",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.sendyTool",
		"popularity": .063
	},
	{
		"id": "@predictleads/n8n-nodes-predictleads.predictLeads",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.signl4",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.paddle",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.twake",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-raia.raia",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-zohoteaminbox.zohoTeamInbox",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.koBoToolboxTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-caspioofficial.caspio",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-zenlayer.zenlayer",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.awsElb",
		"popularity": .126
	},
	{
		"id": "n8n-nodes-featherless.featherless",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-ikas.ikas",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-presenton.presenton",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.profitWell",
		"popularity": 0
	},
	{
		"id": "@reka-ai/n8n-nodes-reka.rekaVision",
		"popularity": .189
	},
	{
		"id": "n8n-nodes-base.goToWebinarTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectCloudTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-belakeai.belakeAi",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-anny.anny",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectCloud",
		"popularity": 0
	},
	{
		"id": "@asyncai/n8n-nodes-asyncai.asyncAi",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.tapfiliateTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-craft.craft",
		"popularity": .146
	},
	{
		"id": "n8n-nodes-base.citrixAdc",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.egoi",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.taigaTool",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-base.theHiveTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-velatir.velatir",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.cockpit",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.beeminder",
		"popularity": .063
	},
	{
		"id": "@socradar/n8n-nodes-socradar.socradar",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-dalil-ai.dalilAi",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.keapTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-openmic.openMicAi",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.raindropTool",
		"popularity": 0
	},
	{
		"id": "@basalt-ai/n8n-nodes-basalt.basalt",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-winston-ai.winstonAi",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.theHive",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.haloPSATool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-logsnag.LogSnag",
		"popularity": 0
	},
	{
		"id": "@actaport/n8n-nodes-actaport.actaport",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.copperTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.vero",
		"popularity": 0
	},
	{
		"id": "@bedrijfsdatanl/n8n-nodes-bedrijfsdata.bedrijfsdata",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-mfr.mfr",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.storyblokTool",
		"popularity": .1
	},
	{
		"id": "@port-labs/n8n-nodes-portio-experimental.portApiAi",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.postBinTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-base.emelia",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.twistTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.copperTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-blue.blue",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.salesmateTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-deeptagger.deepTagger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.quickbaseTool",
		"popularity": .063
	},
	{
		"id": "@bedrijfsdatanl/n8n-nodes-prospectpro.prospectpro",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-teamupcalendar.teamup",
		"popularity": .1
	},
	{
		"id": "n8n-nodes-joggai.joggAiNode",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.loneScaleTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.rundeckTool",
		"popularity": 0
	},
	{
		"id": "@simplesat/n8n-nodes-simplesat.simplesat",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-roam.roam",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-yourtextguru.yourtextGuru",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-air.air",
		"popularity": 0
	},
	{
		"id": "@starhunter/n8n-nodes-graphql.starhunter",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.pushcutTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.emeliaTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.veroTool",
		"popularity": .063
	},
	{
		"id": "n8n-nodes-jaasai.jaasai",
		"popularity": 0
	},
	{
		"id": "@goperigon/n8n-nodes-perigon.perigon",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.pushcutTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.taigaTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.msg91Tool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.twakeTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.currentsTrigger",
		"popularity": 0
	}
];
var import_difference = /* @__PURE__ */ __toESM(require_difference(), 1);
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
		getAllNodeCreateElements,
		isHitlSubcategoryView
	};
});
var import_get = /* @__PURE__ */ __toESM(require_get(), 1);
const useNodeCreatorStore = defineStore(STORES.NODE_CREATOR, () => {
	const workflowsStore = useWorkflowsStore();
	const workflowDocumentStore = computed(() => workflowsStore.workflowId ? useWorkflowDocumentStore(createWorkflowDocumentId(workflowsStore.workflowId)) : void 0);
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
		const nodeData = nodeName ? workflowDocumentStore.value?.getNodeByName(nodeName) ?? null : null;
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
		const sourceNode = workflowDocumentStore.value?.getNodeById(connection.source);
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
		const nodeData = nodeName ? workflowDocumentStore.value?.getNodeByName(nodeName) ?? null : null;
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
const canvasEventBus = createEventBus();
export { useKeyboardNavigation as a, HitlToolView as c, require_camelCase as d, require_capitalize as f, __virtual_node_popularity_data_default as i, RegularView as l, useNodeCreatorStore as n, AINodesView as o, useViewStacks as r, AIView as s, canvasEventBus as t, TriggerView as u };
