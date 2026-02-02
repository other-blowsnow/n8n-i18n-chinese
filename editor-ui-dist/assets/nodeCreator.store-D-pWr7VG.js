import { o as __toESM, t as __commonJSMin } from "./chunk-r2Y0G7H8.js";
import { C as computed, G as nextTick, It as ref } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { _ as require__arrayMap, f as require_get, g as require_toString } from "./src-Cq27d_Gp.js";
import { $ as require_upperFirst, $r as CanvasConnectionMode, Ai as getThemedValue, C as useNodeTypesStore, D as finalizeItems, F as mapToolSubcategoryIcon, H as subcategorizeItems, I as nodeTypesToCreateElements, It as useNDVStore, L as prepareCommunityNodeDetailsViewStack, M as groupItemsInSections, N as isAINode, Nt as useTelemetry, O as flattenCreateElements, T as useEvaluationStore, U as transformNodeType, V as sortNodeCreateElements, Zr as isVueFlowConnection, _r as useExternalHooks, fs as useSettingsStore, gn as useTemplatesStore, k as getAiTemplatesCallout, kr as v4_default, r as useUIStore, s as useWorkflowsStore, tt as require__createCompounder, vr as useCanvasStore, xc as STORES, z as searchNodes } from "./users.store-qBZsmf9-.js";
import { $ as AI_CATEGORY_MCP_NODES, $a as NodeConnectionTypes, $t as DATA_TABLE_NODE_TYPE, An as MARKDOWN_NODE_TYPE, At as TRANSFORM_DATA_SUBCATEGORY, Ct as NEW_TOOL_CATEGORIES, Dr as XML_NODE_TYPE, Dt as REGULAR_NODE_CREATOR_VIEW, En as LIMIT_NODE_TYPE, F as CUSTOM_API_CALL_KEY, Fa as isCommunityPackageName, Ft as AI_CODE_NODE_TYPE, Gt as CODE_NODE_TYPE, Ii as require__arrayIncludesWith, J as AI_CATEGORY_CHAINS, Kt as COMPRESSION_NODE_TYPE, Li as require__arrayIncludes, Lt as AI_TRANSFORM_NODE_TYPE$1, Mn as MERGE_NODE_TYPE, Mo as require__SetCache, Mt as AGENT_NODE_TYPE, Nt as AGENT_TOOL_NODE_TYPE, Pt as AGGREGATE_NODE_TYPE, Q as AI_CATEGORY_LANGUAGE_MODELS, Qn as REMOVE_DUPLICATES_NODE_TYPE, St as HUMAN_IN_THE_LOOP_CATEGORY, Tt as OTHER_TRIGGER_NODES_SUBCATEGORY, Ut as CHAT_TRIGGER_NODE_TYPE, X as AI_CATEGORY_EMBEDDING, Y as AI_CATEGORY_DOCUMENT_LOADERS, Zt as CRYPTO_NODE_TYPE, _n as HTML_NODE_TYPE, _t as CORE_NODES_CATEGORY, an as EMAIL_SEND_NODE_TYPE, ao as AI_TRANSFORM_NODE_TYPE, ar as SET_NODE_TYPE, at as AI_CATEGORY_TEXT_SPLITTERS, bn as IF_NODE_TYPE, bt as HELPERS_SUBCATEGORY, ct as AI_CODE_TOOL_LANGCHAIN_NODE_TYPE, dn as EXTRACT_FROM_FILE_NODE_TYPE, dr as SPLIT_OUT_NODE_TYPE, dt as AI_OTHERS_NODE_CREATOR_VIEW, en as DATETIME_NODE_TYPE, er as RSS_READ_NODE_TYPE, et as AI_CATEGORY_MEMORY, fi as require__baseFlatten, fn as FILTER_NODE_TYPE, fo as EVALUATION_TRIGGER_NODE_TYPE, ft as AI_SECTION_RECOMMENDED_TOOLS, ha as isHitlToolType, ht as AI_WORKFLOW_TOOL_LANGCHAIN_NODE_TYPE, ia as getNodeInputs, in as EMAIL_IMAP_NODE_TYPE, it as AI_CATEGORY_ROOT_NODES, jo as require__cacheHas, jt as TRIGGER_NODE_CREATOR_VIEW, kn as MANUAL_TRIGGER_NODE_TYPE, kt as TEMPLATE_CATEGORY_AI, mn as FORM_TRIGGER_NODE_TYPE, mr as SUMMARIZE_NODE_TYPE, mt as AI_UNCATEGORIZED_CATEGORY, nn as EDIT_IMAGE_NODE_TYPE, nr as SCHEDULE_TRIGGER_NODE_TYPE, nt as AI_CATEGORY_OUTPUTPARSER, ot as AI_CATEGORY_TOOLS, pt as AI_SUBCATEGORY, q as AI_CATEGORY_AGENTS, qt as CONVERT_TO_FILE_NODE_TYPE, rt as AI_CATEGORY_RETRIEVERS, st as AI_CATEGORY_VECTOR_STORES, un as EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE, ur as SPLIT_IN_BATCHES_NODE_TYPE, ut as AI_NODE_CREATOR_VIEW, vn as HTTP_REQUEST_NODE_TYPE, vt as DEFAULT_SUBCATEGORY, wt as NODE_CREATOR_OPEN_SOURCES, xr as WEBHOOK_NODE_TYPE, xt as HITL_SUBCATEGORY, yt as FLOWS_CONTROL_SUBCATEGORY } from "./constants-Cyrg9Nbl.js";
import { T as require__baseUnary, r as require__baseRest, u as require_isArrayLikeObject } from "./merge-O0QrB7po.js";
import { A as defineStore } from "./_baseOrderBy-3Uh8XZv3.js";
import { t as getNodeIconSource } from "./nodeIcon-p8UmtDus.js";
import { c as parseCanvasConnectionHandleString, n as createCanvasConnectionHandleString } from "./canvas.utils-BvLPDYAs.js";
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
		"id": "@n8n/n8n-nodes-langchain.lmChatGoogleGemini",
		"popularity": .919
	},
	{
		"id": "n8n-nodes-base.webhook",
		"popularity": .94
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryBufferWindow",
		"popularity": .926
	},
	{
		"id": "n8n-nodes-base.formTrigger",
		"popularity": .871
	},
	{
		"id": "n8n-nodes-base.telegram",
		"popularity": .903
	},
	{
		"id": "n8n-nodes-base.splitOut",
		"popularity": .85
	},
	{
		"id": "@n8n/n8n-nodes-langchain.openAi",
		"popularity": .897
	},
	{
		"id": "n8n-nodes-base.gmail",
		"popularity": .899
	},
	{
		"id": "@n8n/n8n-nodes-langchain.googleGemini",
		"popularity": .864
	},
	{
		"id": "n8n-nodes-base.merge",
		"popularity": .89
	},
	{
		"id": "n8n-nodes-base.splitInBatches",
		"popularity": .873
	},
	{
		"id": "n8n-nodes-base.switch",
		"popularity": .872
	},
	{
		"id": "n8n-nodes-base.executeCommand",
		"popularity": .724
	},
	{
		"id": "n8n-nodes-base.telegramTrigger",
		"popularity": .871
	},
	{
		"id": "n8n-nodes-base.googleDrive",
		"popularity": .867
	},
	{
		"id": "n8n-nodes-base.aggregate",
		"popularity": .822
	},
	{
		"id": "n8n-nodes-base.wait",
		"popularity": .862
	},
	{
		"id": "n8n-nodes-base.filter",
		"popularity": .839
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserStructured",
		"popularity": .832
	},
	{
		"id": "n8n-nodes-base.extractFromFile",
		"popularity": .824
	},
	{
		"id": "n8n-nodes-base.googleDocs",
		"popularity": .76
	},
	{
		"id": "n8n-nodes-base.readWriteFile",
		"popularity": .818
	},
	{
		"id": "n8n-nodes-base.executeWorkflowTrigger",
		"popularity": .8
	},
	{
		"id": "n8n-nodes-base.httpRequestTool",
		"popularity": .799
	},
	{
		"id": "n8n-nodes-base.gmailTrigger",
		"popularity": .791
	},
	{
		"id": "n8n-nodes-base.gmailTool",
		"popularity": .794
	},
	{
		"id": "n8n-nodes-base.discord",
		"popularity": .742
	},
	{
		"id": "n8n-nodes-base.executeWorkflow",
		"popularity": .818
	},
	{
		"id": "n8n-nodes-base.dataTable",
		"popularity": .846
	},
	{
		"id": "n8n-nodes-base.convertToFile",
		"popularity": .802
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatDeepSeek",
		"popularity": .793
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWorkflow",
		"popularity": .806
	},
	{
		"id": "n8n-nodes-base.whatsApp",
		"popularity": .798
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGroq",
		"popularity": .787
	},
	{
		"id": "n8n-nodes-base.aiTransform",
		"popularity": .672
	},
	{
		"id": "n8n-nodes-base.limit",
		"popularity": .773
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chatTrigger",
		"popularity": .953
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatOllama",
		"popularity": .798
	},
	{
		"id": "n8n-nodes-base.whatsAppTrigger",
		"popularity": .793
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolCalculator",
		"popularity": .698
	},
	{
		"id": "n8n-nodes-base.googleSheetsTrigger",
		"popularity": .781
	},
	{
		"id": "n8n-nodes-base.emailSend",
		"popularity": .775
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chat",
		"popularity": .751
	},
	{
		"id": "n8n-nodes-base.rssFeedRead",
		"popularity": .76
	},
	{
		"id": "n8n-nodes-base.googleCalendarTool",
		"popularity": .791
	},
	{
		"id": "n8n-nodes-base.postgres",
		"popularity": .828
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryPostgresChat",
		"popularity": .747
	},
	{
		"id": "@n8n/n8n-nodes-langchain.mcpClientTool",
		"popularity": .756
	},
	{
		"id": "n8n-nodes-base.slack",
		"popularity": .764
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textClassifier",
		"popularity": .714
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAnthropic",
		"popularity": .762
	},
	{
		"id": "n8n-nodes-base.html",
		"popularity": .756
	},
	{
		"id": "@n8n/n8n-nodes-langchain.informationExtractor",
		"popularity": .731
	},
	{
		"id": "n8n-nodes-base.googleDriveTrigger",
		"popularity": .753
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolCode",
		"popularity": .74
	},
	{
		"id": "n8n-nodes-base.airtable",
		"popularity": .803
	},
	{
		"id": "@n8n/n8n-nodes-langchain.agentTool",
		"popularity": .745
	},
	{
		"id": "n8n-nodes-base.form",
		"popularity": .738
	},
	{
		"id": "n8n-nodes-base.emailReadImap",
		"popularity": .709
	},
	{
		"id": "n8n-nodes-base.supabase",
		"popularity": .802
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsOpenAi",
		"popularity": .761
	},
	{
		"id": "n8n-nodes-base.microsoftExcel",
		"popularity": .719
	},
	{
		"id": "@n8n/n8n-nodes-langchain.mcpTrigger",
		"popularity": .734
	},
	{
		"id": "n8n-nodes-base.googleCalendar",
		"popularity": .744
	},
	{
		"id": "n8n-nodes-base.microsoftOutlook",
		"popularity": .726
	},
	{
		"id": "n8n-nodes-base.httpRequest",
		"popularity": .984
	},
	{
		"id": "n8n-nodes-base.respondToWebhook",
		"popularity": .855
	},
	{
		"id": "n8n-nodes-base.code",
		"popularity": 1
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
		"popularity": .94
	},
	{
		"id": "n8n-nodes-base.set",
		"popularity": .979
	},
	{
		"id": "n8n-nodes-base.scheduleTrigger",
		"popularity": .912
	},
	{
		"id": "n8n-nodes-base.googleSheetsTool",
		"popularity": .851
	},
	{
		"id": "n8n-nodes-base.noOp",
		"popularity": .895
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainLlm",
		"popularity": .86
	},
	{
		"id": "n8n-nodes-base.if",
		"popularity": .953
	},
	{
		"id": "n8n-nodes-base.dateTime",
		"popularity": .704
	},
	{
		"id": "n8n-nodes-base.microsoftOutlookTool",
		"popularity": .598
	},
	{
		"id": "n8n-nodes-base.notion",
		"popularity": .77
	},
	{
		"id": "n8n-nodes-base.removeDuplicates",
		"popularity": .669
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreSupabase",
		"popularity": .725
	},
	{
		"id": "n8n-nodes-base.markdown",
		"popularity": .681
	},
	{
		"id": "n8n-nodes-base.notionTool",
		"popularity": .626
	},
	{
		"id": "n8n-nodes-base.airtableTool",
		"popularity": .661
	},
	{
		"id": "n8n-nodes-base.errorTrigger",
		"popularity": .689
	},
	{
		"id": "n8n-nodes-base.microsoftTeams",
		"popularity": .648
	},
	{
		"id": "n8n-nodes-base.compareDatasets",
		"popularity": .609
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreQdrant",
		"popularity": .668
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainRetrievalQa",
		"popularity": .659
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolSerpApi",
		"popularity": .715
	},
	{
		"id": "n8n-nodes-base.microsoftExcelTool",
		"popularity": .597
	},
	{
		"id": "n8n-nodes-base.summarize",
		"popularity": .699
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolThink",
		"popularity": .695
	},
	{
		"id": "n8n-nodes-base.openWeatherMap",
		"popularity": .641
	},
	{
		"id": "n8n-nodes-base.airtableTrigger",
		"popularity": .625
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsOllama",
		"popularity": .656
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStorePinecone",
		"popularity": .73
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryRedisChat",
		"popularity": .67
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreInMemory",
		"popularity": .712
	},
	{
		"id": "n8n-nodes-base.telegramTool",
		"popularity": .672
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatXAiGrok",
		"popularity": .672
	},
	{
		"id": "n8n-nodes-base.facebookGraphApi",
		"popularity": .691
	},
	{
		"id": "n8n-nodes-base.crypto",
		"popularity": .624
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsGoogleGemini",
		"popularity": .7
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainSummarization",
		"popularity": .607
	},
	{
		"id": "n8n-nodes-base.perplexity",
		"popularity": .663
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter",
		"popularity": .676
	},
	{
		"id": "n8n-nodes-base.sort",
		"popularity": .657
	},
	{
		"id": "@apify/n8n-nodes-apify.apify",
		"popularity": .695
	},
	{
		"id": "n8n-nodes-base.ssh",
		"popularity": .714
	},
	{
		"id": "n8n-nodes-base.localFileTrigger",
		"popularity": .505
	},
	{
		"id": "n8n-nodes-base.rssFeedReadTrigger",
		"popularity": .665
	},
	{
		"id": "@n8n/n8n-nodes-langchain.anthropic",
		"popularity": .681
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWikipedia",
		"popularity": .655
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGoogleVertex",
		"popularity": .664
	},
	{
		"id": "@n8n/n8n-nodes-langchain.sentimentAnalysis",
		"popularity": .611
	},
	{
		"id": "n8n-nodes-base.facebookTrigger",
		"popularity": .646
	},
	{
		"id": "n8n-nodes-base.googleDriveTool",
		"popularity": .684
	},
	{
		"id": "@n8n/n8n-nodes-langchain.modelSelector",
		"popularity": .651
	},
	{
		"id": "n8n-nodes-base.googleDocsTool",
		"popularity": .672
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAzureOpenAi",
		"popularity": .671
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryManager",
		"popularity": .663
	},
	{
		"id": "n8n-nodes-base.twitter",
		"popularity": .623
	},
	{
		"id": "n8n-nodes-base.microsoftOutlookTrigger",
		"popularity": .649
	},
	{
		"id": "n8n-nodes-base.openWeatherMapTool",
		"popularity": .612
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryMongoDbChat",
		"popularity": .659
	},
	{
		"id": "n8n-nodes-base.evaluationTrigger",
		"popularity": .615
	},
	{
		"id": "n8n-nodes-base.supabaseTool",
		"popularity": .662
	},
	{
		"id": "n8n-nodes-base.slackTrigger",
		"popularity": .674
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserAutofixing",
		"popularity": .714
	},
	{
		"id": "n8n-nodes-base.postgresTool",
		"popularity": .647
	},
	{
		"id": "n8n-nodes-base.redis",
		"popularity": .714
	},
	{
		"id": "n8n-nodes-base.editImage",
		"popularity": .657
	},
	{
		"id": "n8n-nodes-base.wordpress",
		"popularity": .648
	},
	{
		"id": "n8n-nodes-base.evaluation",
		"popularity": .614
	},
	{
		"id": "n8n-nodes-base.n8n",
		"popularity": .656
	},
	{
		"id": "n8n-nodes-base.dataTableTool",
		"popularity": .675
	},
	{
		"id": "n8n-nodes-base.twilio",
		"popularity": .657
	},
	{
		"id": "n8n-nodes-base.mySql",
		"popularity": .721
	},
	{
		"id": "n8n-nodes-base.stopAndError",
		"popularity": .687
	},
	{
		"id": "n8n-nodes-base.dateTimeTool",
		"popularity": .621
	},
	{
		"id": "n8n-nodes-whatsable.whatsAble",
		"popularity": .6
	},
	{
		"id": "n8n-nodes-base.microsoftOneDrive",
		"popularity": .667
	},
	{
		"id": "n8n-nodes-base.youTube",
		"popularity": .723
	},
	{
		"id": "n8n-nodes-base.xml",
		"popularity": .636
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStorePGVector",
		"popularity": .659
	},
	{
		"id": "n8n-nodes-base.executionData",
		"popularity": .693
	},
	{
		"id": "n8n-nodes-base.whatsAppTool",
		"popularity": .641
	},
	{
		"id": "n8n-nodes-base.linkedIn",
		"popularity": .651
	},
	{
		"id": "@brave/n8n-nodes-brave-search.braveSearch",
		"popularity": .497
	},
	{
		"id": "n8n-nodes-base.shopifyTrigger",
		"popularity": .547
	},
	{
		"id": "n8n-nodes-base.debugHelper",
		"popularity": .571
	},
	{
		"id": "n8n-nodes-base.notionTrigger",
		"popularity": .601
	},
	{
		"id": "n8n-nodes-base.microsoftSql",
		"popularity": .637
	},
	{
		"id": "n8n-nodes-base.highLevel",
		"popularity": .58
	},
	{
		"id": "n8n-nodes-base.executeCommandTool",
		"popularity": .438
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterTokenSplitter",
		"popularity": .528
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreMongoDBAtlas",
		"popularity": .519
	},
	{
		"id": "n8n-nodes-base.facebookGraphApiTool",
		"popularity": .513
	},
	{
		"id": "n8n-nodes-base.github",
		"popularity": .632
	},
	{
		"id": "n8n-nodes-base.jiraTool",
		"popularity": .531
	},
	{
		"id": "n8n-nodes-base.hubspotTrigger",
		"popularity": .534
	},
	{
		"id": "n8n-nodes-base.trello",
		"popularity": .577
	},
	{
		"id": "n8n-nodes-base.formIoTrigger",
		"popularity": .506
	},
	{
		"id": "n8n-nodes-base.postBin",
		"popularity": .557
	},
	{
		"id": "n8n-nodes-base.jira",
		"popularity": .619
	},
	{
		"id": "n8n-nodes-base.actionNetwork",
		"popularity": .512
	},
	{
		"id": "@mendable/n8n-nodes-firecrawl.firecrawl",
		"popularity": .624
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverVectorStore",
		"popularity": .588
	},
	{
		"id": "n8n-nodes-base.quickChart",
		"popularity": .533
	},
	{
		"id": "n8n-nodes-base.googleSlides",
		"popularity": .562
	},
	{
		"id": "n8n-nodes-pdfco.PDFco Api",
		"popularity": .532
	},
	{
		"id": "n8n-nodes-base.googleChat",
		"popularity": .594
	},
	{
		"id": "n8n-nodes-base.microsoftTeamsTool",
		"popularity": .472
	},
	{
		"id": "n8n-nodes-base.postgresTrigger",
		"popularity": .566
	},
	{
		"id": "n8n-nodes-base.googleTranslate",
		"popularity": .51
	},
	{
		"id": "n8n-nodes-base.hubspot",
		"popularity": .64
	},
	{
		"id": "n8n-nodes-base.n8nTrainingCustomerMessenger",
		"popularity": .564
	},
	{
		"id": "n8n-nodes-base.emailReadImapTool",
		"popularity": .515
	},
	{
		"id": "n8n-nodes-base.microsoftSharePoint",
		"popularity": .633
	},
	{
		"id": "n8n-nodes-base.odoo",
		"popularity": .599
	},
	{
		"id": "n8n-nodes-base.googleBigQuery",
		"popularity": .554
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmOpenHuggingFaceInference",
		"popularity": .616
	},
	{
		"id": "n8n-nodes-base.hackerNews",
		"popularity": .581
	},
	{
		"id": "@n8n/n8n-nodes-langchain.code",
		"popularity": .528
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter",
		"popularity": .573
	},
	{
		"id": "n8n-nodes-base.calTrigger",
		"popularity": .534
	},
	{
		"id": "n8n-nodes-serpapi.serpApi",
		"popularity": .573
	},
	{
		"id": "n8n-nodes-base.salesforce",
		"popularity": .585
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsHuggingFaceInference",
		"popularity": .557
	},
	{
		"id": "n8n-nodes-base.filemaker",
		"popularity": .549
	},
	{
		"id": "n8n-nodes-base.clickUp",
		"popularity": .636
	},
	{
		"id": "n8n-nodes-base.n8nTrigger",
		"popularity": .535
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryXata",
		"popularity": .521
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAwsBedrock",
		"popularity": .591
	},
	{
		"id": "n8n-nodes-base.s3",
		"popularity": .609
	},
	{
		"id": "n8n-nodes-base.sseTrigger",
		"popularity": .524
	},
	{
		"id": "n8n-nodes-base.jiraTrigger",
		"popularity": .512
	},
	{
		"id": "n8n-nodes-base.rssFeedReadTool",
		"popularity": .58
	},
	{
		"id": "n8n-nodes-base.mongoDb",
		"popularity": .627
	},
	{
		"id": "n8n-nodes-base.awsS3",
		"popularity": .582
	},
	{
		"id": "n8n-nodes-base.googleContacts",
		"popularity": .542
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatCohere",
		"popularity": .553
	},
	{
		"id": "n8n-nodes-base.line",
		"popularity": .573
	},
	{
		"id": "n8n-nodes-base.nocoDb",
		"popularity": .637
	},
	{
		"id": "n8n-nodes-base.discordTool",
		"popularity": .548
	},
	{
		"id": "n8n-nodes-base.googleContactsTool",
		"popularity": .533
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsCohere",
		"popularity": .533
	},
	{
		"id": "n8n-nodes-base.githubTool",
		"popularity": .543
	},
	{
		"id": "n8n-nodes-base.githubTrigger",
		"popularity": .54
	},
	{
		"id": "@n8n/n8n-nodes-langchain.documentGithubLoader",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.ftp",
		"popularity": .619
	},
	{
		"id": "n8n-nodes-base.shopify",
		"popularity": .59
	},
	{
		"id": "@blotato/n8n-nodes-blotato.blotato",
		"popularity": .606
	},
	{
		"id": "n8n-nodes-aiscraper.aiScraper",
		"popularity": .494
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverContextualCompression",
		"popularity": .518
	},
	{
		"id": "n8n-nodes-base.nasa",
		"popularity": .546
	},
	{
		"id": "n8n-nodes-base.baserow",
		"popularity": .617
	},
	{
		"id": "n8n-nodes-base.homeAssistant",
		"popularity": .584
	},
	{
		"id": "n8n-nodes-base.googleTasks",
		"popularity": .549
	},
	{
		"id": "n8n-nodes-cronlytic.cronlyticTrigger",
		"popularity": .571
	},
	{
		"id": "@searchapi/n8n-nodes-searchapi.searchApi",
		"popularity": .507
	},
	{
		"id": "n8n-nodes-base.googleCalendarTrigger",
		"popularity": .585
	},
	{
		"id": "@aotoki/n8n-nodes-line-messaging.lineMessaging",
		"popularity": .563
	},
	{
		"id": "n8n-nodes-base.rocketchat",
		"popularity": .385
	},
	{
		"id": "n8n-nodes-base.renameKeys",
		"popularity": .564
	},
	{
		"id": "n8n-nodes-base.linkedInTool",
		"popularity": .582
	},
	{
		"id": "n8n-nodes-base.philipsHue",
		"popularity": .359
	},
	{
		"id": "n8n-nodes-base.youTubeTool",
		"popularity": .574
	},
	{
		"id": "n8n-nodes-base.totp",
		"popularity": .448
	},
	{
		"id": "n8n-nodes-powerbi.powerBi",
		"popularity": .473
	},
	{
		"id": "n8n-nodes-base.bitbucketTrigger",
		"popularity": .402
	},
	{
		"id": "n8n-nodes-base.philipsHueTool",
		"popularity": .498
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreZep",
		"popularity": .439
	},
	{
		"id": "n8n-nodes-base.microsoftTeamsTrigger",
		"popularity": .559
	},
	{
		"id": "n8n-nodes-base.s3Tool",
		"popularity": .382
	},
	{
		"id": "n8n-nodes-base.quickbooks",
		"popularity": .503
	},
	{
		"id": "n8n-nodes-base.jinaAiTool",
		"popularity": .44
	},
	{
		"id": "n8n-nodes-base.vonage",
		"popularity": .389
	},
	{
		"id": "n8n-nodes-base.microsoftToDo",
		"popularity": .47
	},
	{
		"id": "n8n-nodes-base.zoom",
		"popularity": .459
	},
	{
		"id": "n8n-nodes-base.twilioTool",
		"popularity": .467
	},
	{
		"id": "n8n-nodes-base.eventbriteTrigger",
		"popularity": .374
	},
	{
		"id": "n8n-nodes-base.googleCloudNaturalLanguageTool",
		"popularity": .363
	},
	{
		"id": "n8n-nodes-base.pushover",
		"popularity": .484
	},
	{
		"id": "n8n-nodes-base.grist",
		"popularity": .405
	},
	{
		"id": "n8n-nodes-base.payPal",
		"popularity": .372
	},
	{
		"id": "n8n-nodes-base.graphqlTool",
		"popularity": .364
	},
	{
		"id": "n8n-nodes-browserflow.browserflow",
		"popularity": .386
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfile",
		"popularity": .496
	},
	{
		"id": "@2chat/n8n-nodes-twochat.twoChat",
		"popularity": .345
	},
	{
		"id": "n8n-nodes-base.awsSes",
		"popularity": .435
	},
	{
		"id": "n8n-nodes-base.redditTool",
		"popularity": .425
	},
	{
		"id": "n8n-nodes-base.mailjet",
		"popularity": .389
	},
	{
		"id": "n8n-nodes-base.trelloTrigger",
		"popularity": .461
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsAzureOpenAi",
		"popularity": .49
	},
	{
		"id": "n8n-nodes-base.amqpTrigger",
		"popularity": .326
	},
	{
		"id": "n8n-nodes-scrapegraphai.scrapegraphAi",
		"popularity": .393
	},
	{
		"id": "n8n-nodes-base.wooCommerceTrigger",
		"popularity": .471
	},
	{
		"id": "n8n-nodes-base.redisTrigger",
		"popularity": .447
	},
	{
		"id": "n8n-nodes-base.compression",
		"popularity": .589
	},
	{
		"id": "n8n-nodes-base.dhlTool",
		"popularity": .352
	},
	{
		"id": "n8n-nodes-base.trelloTool",
		"popularity": .459
	},
	{
		"id": "n8n-nodes-base.snowflake",
		"popularity": .475
	},
	{
		"id": "n8n-nodes-base.seaTable",
		"popularity": .448
	},
	{
		"id": "n8n-nodes-base.azureStorage",
		"popularity": .455
	},
	{
		"id": "n8n-nodes-base.salesforceTrigger",
		"popularity": .459
	},
	{
		"id": "n8n-nodes-base.microsoftGraphSecurityTool",
		"popularity": .349
	},
	{
		"id": "n8n-nodes-base.formstackTrigger",
		"popularity": .42
	},
	{
		"id": "n8n-nodes-base.filemakerTool",
		"popularity": .356
	},
	{
		"id": "n8n-nodes-base.stravaTrigger",
		"popularity": .405
	},
	{
		"id": "n8n-nodes-base.rabbitmq",
		"popularity": .442
	},
	{
		"id": "n8n-nodes-base.mondayComTool",
		"popularity": .384
	},
	{
		"id": "n8n-nodes-base.twilioTrigger",
		"popularity": .567
	},
	{
		"id": "n8n-nodes-base.pipedriveTool",
		"popularity": .386
	},
	{
		"id": "n8n-nodes-base.strava",
		"popularity": .455
	},
	{
		"id": "n8n-nodes-base.emailSendTool",
		"popularity": .564
	},
	{
		"id": "n8n-nodes-base.airtopTool",
		"popularity": .461
	},
	{
		"id": "n8n-nodes-base.zendesk",
		"popularity": .479
	},
	{
		"id": "n8n-nodes-aimlapi.aimlApi",
		"popularity": .389
	},
	{
		"id": "n8n-nodes-base.awsLambda",
		"popularity": .437
	},
	{
		"id": "n8n-nodes-base.matrix",
		"popularity": .469
	},
	{
		"id": "n8n-nodes-base.stripeTool",
		"popularity": .372
	},
	{
		"id": "n8n-nodes-base.box",
		"popularity": .418
	},
	{
		"id": "n8n-nodes-base.rabbitmqTrigger",
		"popularity": .442
	},
	{
		"id": "n8n-nodes-base.actionNetworkTool",
		"popularity": .401
	},
	{
		"id": "n8n-nodes-base.awsTranscribeTool",
		"popularity": .353
	},
	{
		"id": "n8n-nodes-base.linearTrigger",
		"popularity": .386
	},
	{
		"id": "n8n-nodes-base.googleSlidesTool",
		"popularity": .43
	},
	{
		"id": "n8n-nodes-base.zendeskTrigger",
		"popularity": .395
	},
	{
		"id": "n8n-nodes-base.dropbox",
		"popularity": .598
	},
	{
		"id": "n8n-nodes-base.reddit",
		"popularity": .57
	},
	{
		"id": "@n8n/n8n-nodes-langchain.rerankerCohere",
		"popularity": .566
	},
	{
		"id": "n8n-nodes-base.awsTextractTool",
		"popularity": .354
	},
	{
		"id": "n8n-nodes-base.mistralAi",
		"popularity": .569
	},
	{
		"id": "n8n-nodes-base.coinGecko",
		"popularity": .443
	},
	{
		"id": "@tavily/n8n-nodes-tavily.tavily",
		"popularity": .578
	},
	{
		"id": "n8n-nodes-base.mySqlTool",
		"popularity": .581
	},
	{
		"id": "n8n-nodes-base.jenkins",
		"popularity": .375
	},
	{
		"id": "n8n-nodes-cloudinary.cloudinary",
		"popularity": .548
	},
	{
		"id": "n8n-nodes-base.odooTool",
		"popularity": .458
	},
	{
		"id": "n8n-nodes-base.googleChatTool",
		"popularity": .447
	},
	{
		"id": "n8n-nodes-base.deepL",
		"popularity": .45
	},
	{
		"id": "n8n-nodes-base.calendlyTrigger",
		"popularity": .53
	},
	{
		"id": "n8n-nodes-base.homeAssistantTool",
		"popularity": .511
	},
	{
		"id": "n8n-nodes-base.stripe",
		"popularity": .511
	},
	{
		"id": "n8n-nodes-base.googleCloudStorage",
		"popularity": .54
	},
	{
		"id": "@cloudconvert/n8n-nodes-cloudconvert.cloudConvert",
		"popularity": .512
	},
	{
		"id": "n8n-nodes-base.mattermost",
		"popularity": .474
	},
	{
		"id": "n8n-nodes-scrape-creators.scrapeCreators",
		"popularity": .449
	},
	{
		"id": "n8n-nodes-base.pipedrive",
		"popularity": .565
	},
	{
		"id": "n8n-nodes-base.elasticsearch",
		"popularity": .433
	},
	{
		"id": "n8n-nodes-base.jotFormTrigger",
		"popularity": .486
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverMultiQuery",
		"popularity": .485
	},
	{
		"id": "n8n-nodes-base.webflow",
		"popularity": .456
	},
	{
		"id": "n8n-nodes-base.wooCommerce",
		"popularity": .555
	},
	{
		"id": "n8n-nodes-base.figmaTrigger",
		"popularity": .422
	},
	{
		"id": "n8n-nodes-base.git",
		"popularity": .499
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreMilvus",
		"popularity": .475
	},
	{
		"id": "n8n-nodes-base.hubspotTool",
		"popularity": .487
	},
	{
		"id": "n8n-nodes-base.quickbooksTool",
		"popularity": .446
	},
	{
		"id": "n8n-nodes-base.zohoCrm",
		"popularity": .547
	},
	{
		"id": "n8n-nodes-base.phantombuster",
		"popularity": .461
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverWorkflow",
		"popularity": .481
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatVercelAiGateway",
		"popularity": .498
	},
	{
		"id": "n8n-nodes-base.googleTasksTool",
		"popularity": .54
	},
	{
		"id": "n8n-nodes-base.googleFirebaseCloudFirestore",
		"popularity": .55
	},
	{
		"id": "n8n-nodes-base.clickUpTrigger",
		"popularity": .525
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolSearXng",
		"popularity": .497
	},
	{
		"id": "n8n-nodes-base.togglTrigger",
		"popularity": .467
	},
	{
		"id": "n8n-nodes-base.spotify",
		"popularity": .531
	},
	{
		"id": "n8n-nodes-base.shopifyTool",
		"popularity": .506
	},
	{
		"id": "n8n-nodes-base.wooCommerceTool",
		"popularity": .466
	},
	{
		"id": "n8n-nodes-base.hackerNewsTool",
		"popularity": .476
	},
	{
		"id": "n8n-nodes-base.baserowTool",
		"popularity": .449
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsGoogleVertex",
		"popularity": .512
	},
	{
		"id": "n8n-nodes-base.mqttTrigger",
		"popularity": .486
	},
	{
		"id": "n8n-nodes-base.nextCloud",
		"popularity": .566
	},
	{
		"id": "n8n-nodes-base.stripeTrigger",
		"popularity": .515
	},
	{
		"id": "n8n-nodes-base.gitlab",
		"popularity": .492
	},
	{
		"id": "n8n-nodes-base.gitlabTrigger",
		"popularity": .452
	},
	{
		"id": "n8n-nodes-base.cryptoTool",
		"popularity": .41
	},
	{
		"id": "@nskha/n8n-nodes-scrappey.scrappey",
		"popularity": .408
	},
	{
		"id": "n8n-nodes-base.microsoftSharePointTool",
		"popularity": .46
	},
	{
		"id": "n8n-nodes-base.asana",
		"popularity": .551
	},
	{
		"id": "n8n-nodes-pdfvector.pdfVector",
		"popularity": .451
	},
	{
		"id": "n8n-nodes-base.wordpressTool",
		"popularity": .504
	},
	{
		"id": "n8n-nodes-base.twitterTool",
		"popularity": .461
	},
	{
		"id": "n8n-nodes-base.dhl",
		"popularity": .462
	},
	{
		"id": "n8n-nodes-base.mqtt",
		"popularity": .481
	},
	{
		"id": "n8n-nodes-base.mongoDbTool",
		"popularity": .48
	},
	{
		"id": "n8n-nodes-pdf4me.PDF4me",
		"popularity": .463
	},
	{
		"id": "n8n-nodes-base.mondayCom",
		"popularity": .583
	},
	{
		"id": "n8n-nodes-base.activeCampaign",
		"popularity": .493
	},
	{
		"id": "n8n-nodes-base.googleAds",
		"popularity": .505
	},
	{
		"id": "n8n-nodes-base.graphql",
		"popularity": .511
	},
	{
		"id": "n8n-nodes-base.todoist",
		"popularity": .541
	},
	{
		"id": "n8n-nodes-base.microsoftSqlTool",
		"popularity": .505
	},
	{
		"id": "n8n-nodes-base.jwt",
		"popularity": .506
	},
	{
		"id": "n8n-nodes-base.jinaAi",
		"popularity": .493
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsMistralCloud",
		"popularity": .489
	},
	{
		"id": "n8n-nodes-base.googleAdsTool",
		"popularity": .407
	},
	{
		"id": "n8n-nodes-base.todoistTool",
		"popularity": .482
	},
	{
		"id": "n8n-nodes-upload-post.uploadPost",
		"popularity": .527
	},
	{
		"id": "n8n-nodes-base.googleTranslateTool",
		"popularity": .447
	},
	{
		"id": "n8n-nodes-base.spotifyTool",
		"popularity": .483
	},
	{
		"id": "n8n-nodes-base.microsoftOneDriveTool",
		"popularity": .49
	},
	{
		"id": "n8n-nodes-htmlcsstoimage.htmlCssToImage",
		"popularity": .451
	},
	{
		"id": "n8n-nodes-base.mailgun",
		"popularity": .465
	},
	{
		"id": "n8n-nodes-base.sendGrid",
		"popularity": .475
	},
	{
		"id": "n8n-nodes-base.redisTool",
		"popularity": .477
	},
	{
		"id": "n8n-nodes-base.sendInBlue",
		"popularity": .544
	},
	{
		"id": "n8n-nodes-instantly.instantly",
		"popularity": .48
	},
	{
		"id": "n8n-nodes-base.airtop",
		"popularity": .546
	},
	{
		"id": "n8n-nodes-base.awsDynamoDb",
		"popularity": .435
	},
	{
		"id": "n8n-nodes-base.asanaTool",
		"popularity": .435
	},
	{
		"id": "n8n-nodes-base.nocoDbTool",
		"popularity": .461
	},
	{
		"id": "n8n-nodes-base.googleFirebaseRealtimeDatabase",
		"popularity": .395
	},
	{
		"id": "n8n-nodes-base.lineTool",
		"popularity": .395
	},
	{
		"id": "n8n-nodes-base.kafka",
		"popularity": .418
	},
	{
		"id": "n8n-nodes-base.microsoftEntra",
		"popularity": .458
	},
	{
		"id": "n8n-nodes-base.cloudflareTool",
		"popularity": .402
	},
	{
		"id": "n8n-nodes-base.gitlabTool",
		"popularity": .422
	},
	{
		"id": "n8n-nodes-base.sms77",
		"popularity": .348
	},
	{
		"id": "n8n-nodes-base.asanaTrigger",
		"popularity": .434
	},
	{
		"id": "n8n-nodes-documentero.documentero",
		"popularity": .419
	},
	{
		"id": "n8n-nodes-base.linear",
		"popularity": .452
	},
	{
		"id": "n8n-nodes-base.dropboxTool",
		"popularity": .417
	},
	{
		"id": "n8n-nodes-base.adalo",
		"popularity": .401
	},
	{
		"id": "n8n-nodes-base.salesforceTool",
		"popularity": .409
	},
	{
		"id": "n8n-nodes-base.grafana",
		"popularity": .42
	},
	{
		"id": "n8n-nodes-base.ldap",
		"popularity": .431
	},
	{
		"id": "n8n-nodes-base.awsTextract",
		"popularity": .4
	},
	{
		"id": "n8n-nodes-base.gotify",
		"popularity": .408
	},
	{
		"id": "n8n-nodes-base.apiTemplateIo",
		"popularity": .44
	},
	{
		"id": "n8n-nodes-base.awsTranscribe",
		"popularity": .384
	},
	{
		"id": "n8n-nodes-base.zohoCrmTool",
		"popularity": .432
	},
	{
		"id": "n8n-nodes-base.xero",
		"popularity": .421
	},
	{
		"id": "n8n-nodes-base.pipedriveTrigger",
		"popularity": .405
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfileTool",
		"popularity": .39
	},
	{
		"id": "n8n-nodes-base.urlScanIo",
		"popularity": .418
	},
	{
		"id": "n8n-nodes-base.quickChartTool",
		"popularity": .41
	},
	{
		"id": "n8n-nodes-base.gSuiteAdmin",
		"popularity": .448
	},
	{
		"id": "n8n-nodes-base.serviceNow",
		"popularity": .406
	},
	{
		"id": "n8n-nodes-base.bubble",
		"popularity": .435
	},
	{
		"id": "n8n-nodes-base.kafkaTrigger",
		"popularity": .41
	},
	{
		"id": "n8n-nodes-base.deepLTool",
		"popularity": .379
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreWeaviate",
		"popularity": .434
	},
	{
		"id": "n8n-nodes-base.acuitySchedulingTrigger",
		"popularity": .404
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmCohere",
		"popularity": .425
	},
	{
		"id": "n8n-nodes-base.googleBigQueryTool",
		"popularity": .417
	},
	{
		"id": "n8n-nodes-base.mistralAiTool",
		"popularity": .409
	},
	{
		"id": "n8n-nodes-base.pushbullet",
		"popularity": .327
	},
	{
		"id": "n8n-nodes-base.webflowTrigger",
		"popularity": .397
	},
	{
		"id": "n8n-nodes-base.googleFirebaseCloudFirestoreTool",
		"popularity": .414
	},
	{
		"id": "n8n-nodes-base.erpNext",
		"popularity": .44
	},
	{
		"id": "n8n-nodes-base.oneSimpleApiTool",
		"popularity": .373
	},
	{
		"id": "n8n-nodes-base.elasticsearchTool",
		"popularity": .398
	},
	{
		"id": "n8n-nodes-base.cloudflare",
		"popularity": .385
	},
	{
		"id": "n8n-nodes-base.splunk",
		"popularity": .341
	},
	{
		"id": "n8n-nodes-base.urlScanIoTool",
		"popularity": .277
	},
	{
		"id": "n8n-nodes-base.awsS3Tool",
		"popularity": .38
	},
	{
		"id": "@apify/n8n-nodes-apify.apifyTrigger",
		"popularity": .427
	},
	{
		"id": "n8n-nodes-base.mailchimp",
		"popularity": .466
	},
	{
		"id": "n8n-nodes-base.nextCloudTool",
		"popularity": .439
	},
	{
		"id": "n8n-nodes-base.hunter",
		"popularity": .442
	},
	{
		"id": "n8n-nodes-base.metabase",
		"popularity": .434
	},
	{
		"id": "n8n-nodes-postiz.postiz",
		"popularity": .493
	},
	{
		"id": "n8n-nodes-base.grafanaTool",
		"popularity": .382
	},
	{
		"id": "n8n-nodes-autocalls.autocalls",
		"popularity": .418
	},
	{
		"id": "n8n-nodes-base.coinGeckoTool",
		"popularity": .418
	},
	{
		"id": "n8n-nodes-base.gitTool",
		"popularity": .385
	},
	{
		"id": "n8n-nodes-base.affinity",
		"popularity": .409
	},
	{
		"id": "n8n-nodes-base.zoomTool",
		"popularity": .379
	},
	{
		"id": "n8n-nodes-base.webflowTool",
		"popularity": .385
	},
	{
		"id": "n8n-nodes-base.agileCrm",
		"popularity": .385
	},
	{
		"id": "n8n-nodes-base.messageBird",
		"popularity": .433
	},
	{
		"id": "@brightdata/n8n-nodes-brightdata.brightData",
		"popularity": .447
	},
	{
		"id": "n8n-nodes-base.mailcheck",
		"popularity": .393
	},
	{
		"id": "n8n-nodes-base.microsoftToDoTool",
		"popularity": .414
	},
	{
		"id": "n8n-nodes-base.medium",
		"popularity": .396
	},
	{
		"id": "n8n-nodes-base.wise",
		"popularity": .354
	},
	{
		"id": "n8n-nodes-base.marketstack",
		"popularity": .303
	},
	{
		"id": "n8n-nodes-pdforge.pdforge",
		"popularity": .362
	},
	{
		"id": "n8n-nodes-base.highLevelTool",
		"popularity": .438
	},
	{
		"id": "n8n-nodes-base.googleCloudStorageTool",
		"popularity": .403
	},
	{
		"id": "n8n-nodes-base.activeCampaignTrigger",
		"popularity": .371
	},
	{
		"id": "n8n-nodes-base.awsSnsTrigger",
		"popularity": .306
	},
	{
		"id": "n8n-nodes-chat-data.chatData",
		"popularity": .329
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfileTrigger",
		"popularity": .441
	},
	{
		"id": "n8n-nodes-heyreach.heyReach",
		"popularity": .375
	},
	{
		"id": "n8n-nodes-base.ghost",
		"popularity": .383
	},
	{
		"id": "n8n-nodes-base.compressionTool",
		"popularity": .338
	},
	{
		"id": "n8n-nodes-base.gumroadTrigger",
		"popularity": .345
	},
	{
		"id": "n8n-nodes-base.flow",
		"popularity": .344
	},
	{
		"id": "n8n-nodes-base.autopilotTool",
		"popularity": .33
	},
	{
		"id": "n8n-nodes-fillout.filloutTrigger",
		"popularity": .359
	},
	{
		"id": "n8n-nodes-base.clockifyTool",
		"popularity": .305
	},
	{
		"id": "n8n-nodes-base.lemlist",
		"popularity": .368
	},
	{
		"id": "n8n-nodes-base.coda",
		"popularity": .391
	},
	{
		"id": "n8n-nodes-base.awsSqs",
		"popularity": .345
	},
	{
		"id": "n8n-nodes-base.nasaTool",
		"popularity": .341
	},
	{
		"id": "n8n-nodes-base.strapi",
		"popularity": .354
	},
	{
		"id": "n8n-nodes-base.gSuiteAdminTool",
		"popularity": .373
	},
	{
		"id": "n8n-nodes-base.agileCrmTool",
		"popularity": .318
	},
	{
		"id": "n8n-nodes-base.getResponse",
		"popularity": .353
	},
	{
		"id": "n8n-nodes-base.serviceNowTool",
		"popularity": .334
	},
	{
		"id": "n8n-nodes-base.intercom",
		"popularity": .353
	},
	{
		"id": "@gotohuman/n8n-nodes-gotohuman.gotoHuman",
		"popularity": .309
	},
	{
		"id": "n8n-nodes-base.amqp",
		"popularity": .333
	},
	{
		"id": "n8n-nodes-base.bitwarden",
		"popularity": .342
	},
	{
		"id": "n8n-nodes-base.jenkinsTool",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.payPalTrigger",
		"popularity": .348
	},
	{
		"id": "n8n-nodes-base.clockify",
		"popularity": .397
	},
	{
		"id": "n8n-nodes-base.getResponseTool",
		"popularity": .312
	},
	{
		"id": "n8n-nodes-base.microsoftDynamicsCrm",
		"popularity": .35
	},
	{
		"id": "n8n-nodes-base.zammad",
		"popularity": .417
	},
	{
		"id": "@langfuse/n8n-nodes-langfuse.langfuse",
		"popularity": .365
	},
	{
		"id": "n8n-nodes-base.stravaTool",
		"popularity": .363
	},
	{
		"id": "n8n-nodes-base.mindee",
		"popularity": .34
	},
	{
		"id": "n8n-nodes-base.sendInBlueTool",
		"popularity": .371
	},
	{
		"id": "n8n-nodes-base.bitwardenTool",
		"popularity": .328
	},
	{
		"id": "n8n-nodes-craftmypdf.craftMyPdf",
		"popularity": .326
	},
	{
		"id": "n8n-nodes-superchat.superchat",
		"popularity": .394
	},
	{
		"id": "n8n-nodes-base.microsoftEntraTool",
		"popularity": .311
	},
	{
		"id": "n8n-nodes-base.microsoftGraphSecurity",
		"popularity": .317
	},
	{
		"id": "n8n-nodes-base.googleBooksTool",
		"popularity": .311
	},
	{
		"id": "n8n-nodes-base.jwtTool",
		"popularity": .307
	},
	{
		"id": "n8n-nodes-base.bannerbear",
		"popularity": .373
	},
	{
		"id": "n8n-nodes-base.affinityTrigger",
		"popularity": .315
	},
	{
		"id": "n8n-nodes-base.messageBirdTool",
		"popularity": .352
	},
	{
		"id": "n8n-nodes-inoreader.inoreader",
		"popularity": .339
	},
	{
		"id": "n8n-nodes-supadata.supadata",
		"popularity": .403
	},
	{
		"id": "n8n-nodes-base.bitly",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-base.phantombusterTool",
		"popularity": .329
	},
	{
		"id": "n8n-nodes-base.bubbleTool",
		"popularity": .31
	},
	{
		"id": "n8n-nodes-base.bambooHr",
		"popularity": .323
	},
	{
		"id": "n8n-nodes-base.freshservice",
		"popularity": .354
	},
	{
		"id": "n8n-nodes-scraping-dog.scrapingDog",
		"popularity": .275
	},
	{
		"id": "n8n-nodes-base.snowflakeTool",
		"popularity": .327
	},
	{
		"id": "n8n-nodes-base.mailerLite",
		"popularity": .398
	},
	{
		"id": "n8n-nodes-base.clearbit",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.googleCloudNaturalLanguage",
		"popularity": .336
	},
	{
		"id": "n8n-nodes-base.microsoftDynamicsCrmTool",
		"popularity": .286
	},
	{
		"id": "n8n-nodes-base.freshdeskTool",
		"popularity": .306
	},
	{
		"id": "n8n-nodes-base.awsLambdaTool",
		"popularity": .329
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWolframAlpha",
		"popularity": .336
	},
	{
		"id": "n8n-nodes-base.metabaseTool",
		"popularity": .322
	},
	{
		"id": "n8n-nodes-mallabe-images.mallabeImages",
		"popularity": .332
	},
	{
		"id": "n8n-nodes-base.freshserviceTool",
		"popularity": .31
	},
	{
		"id": "n8n-nodes-base.mailchimpTool",
		"popularity": .343
	},
	{
		"id": "n8n-nodes-base.mqttTool",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-ticktick.tickTick",
		"popularity": .422
	},
	{
		"id": "n8n-nodes-base.magento2",
		"popularity": .359
	},
	{
		"id": "n8n-nodes-scrapeless.scrapeless",
		"popularity": .312
	},
	{
		"id": "n8n-nodes-base.affinityTool",
		"popularity": .363
	},
	{
		"id": "n8n-nodes-anchorbrowser.anchorBrowser",
		"popularity": .478
	},
	{
		"id": "n8n-nodes-base.zendeskTool",
		"popularity": .339
	},
	{
		"id": "n8n-nodes-base.mautic",
		"popularity": .435
	},
	{
		"id": "n8n-nodes-base.linearTool",
		"popularity": .375
	},
	{
		"id": "n8n-nodes-base.activeCampaignTool",
		"popularity": .348
	},
	{
		"id": "n8n-nodes-base.convertKitTool",
		"popularity": .322
	},
	{
		"id": "n8n-nodes-base.pushoverTool",
		"popularity": .402
	},
	{
		"id": "n8n-nodes-base.invoiceNinja",
		"popularity": .392
	},
	{
		"id": "n8n-nodes-base.humanticAiTool",
		"popularity": .3
	},
	{
		"id": "n8n-nodes-base.invoiceNinjaTool",
		"popularity": .305
	},
	{
		"id": "n8n-nodes-base.storyblok",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-base.marketstackTool",
		"popularity": .478
	},
	{
		"id": "n8n-nodes-base.openThesaurus",
		"popularity": .281
	},
	{
		"id": "n8n-nodes-base.gong",
		"popularity": .317
	},
	{
		"id": "n8n-nodes-base.cortex",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-base.signl4",
		"popularity": .241
	},
	{
		"id": "n8n-nodes-base.autopilot",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.peekalink",
		"popularity": .234
	},
	{
		"id": "n8n-nodes-base.adaloTool",
		"popularity": .299
	},
	{
		"id": "n8n-nodes-base.mediumTool",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.matrixTool",
		"popularity": .309
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectDatacenterTool",
		"popularity": .277
	},
	{
		"id": "n8n-nodes-base.awsSesTool",
		"popularity": .223
	},
	{
		"id": "n8n-nodes-base.azureCosmosDb",
		"popularity": .341
	},
	{
		"id": "@decodo/n8n-nodes-decodo.decodo",
		"popularity": .31
	},
	{
		"id": "n8n-nodes-base.netlify",
		"popularity": .32
	},
	{
		"id": "n8n-nodes-base.crateDbTool",
		"popularity": .23
	},
	{
		"id": "n8n-nodes-base.strapiTool",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-base.wiseTrigger",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-base.paddleTool",
		"popularity": .21
	},
	{
		"id": "n8n-nodes-base.ciscoWebex",
		"popularity": .35
	},
	{
		"id": "n8n-nodes-base.googleBooks",
		"popularity": .252
	},
	{
		"id": "n8n-nodes-base.discourseTool",
		"popularity": .166
	},
	{
		"id": "n8n-nodes-base.uptimeRobot",
		"popularity": .288
	},
	{
		"id": "n8n-nodes-base.invoiceNinjaTrigger",
		"popularity": .234
	},
	{
		"id": "n8n-nodes-base.magento2Tool",
		"popularity": .252
	},
	{
		"id": "n8n-nodes-base.npm",
		"popularity": .291
	},
	{
		"id": "n8n-nodes-base.mattermostTool",
		"popularity": .322
	},
	{
		"id": "n8n-nodes-base.upleadTool",
		"popularity": .306
	},
	{
		"id": "n8n-nodes-base.ldapTool",
		"popularity": .26
	},
	{
		"id": "n8n-nodes-base.timescaleDb",
		"popularity": .269
	},
	{
		"id": "n8n-nodes-base.mandrill",
		"popularity": .249
	},
	{
		"id": "n8n-nodes-base.dropcontact",
		"popularity": .298
	},
	{
		"id": "n8n-nodes-visualping.visualpingTrigger",
		"popularity": .194
	},
	{
		"id": "n8n-nodes-screenshotbase.screenshotBase",
		"popularity": .353
	},
	{
		"id": "n8n-nodes-1shot.oneShot",
		"popularity": .332
	},
	{
		"id": "n8n-nodes-base.awsCertificateManager",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-yepcode.yepCode",
		"popularity": .296
	},
	{
		"id": "@cloudsway-ai/n8n-nodes-cloudsway.smartSearch",
		"popularity": .29
	},
	{
		"id": "n8n-nodes-base.wufooTrigger",
		"popularity": .244
	},
	{
		"id": "n8n-nodes-base.securityScorecardTool",
		"popularity": .257
	},
	{
		"id": "n8n-nodes-base.getResponseTrigger",
		"popularity": .188
	},
	{
		"id": "n8n-nodes-base.convertKit",
		"popularity": .335
	},
	{
		"id": "n8n-nodes-base.lemlistTool",
		"popularity": .249
	},
	{
		"id": "n8n-nodes-softr.softr",
		"popularity": .429
	},
	{
		"id": "n8n-nodes-base.googlePerspectiveTool",
		"popularity": .23
	},
	{
		"id": "n8n-nodes-base.helpScoutTrigger",
		"popularity": .205
	},
	{
		"id": "n8n-nodes-base.discourse",
		"popularity": .325
	},
	{
		"id": "n8n-nodes-base.haloPSA",
		"popularity": .373
	},
	{
		"id": "n8n-nodes-base.circleCi",
		"popularity": .237
	},
	{
		"id": "n8n-nodes-base.uproc",
		"popularity": .3
	},
	{
		"id": "n8n-nodes-base.boxTrigger",
		"popularity": .293
	},
	{
		"id": "n8n-nodes-base.harvest",
		"popularity": .346
	},
	{
		"id": "n8n-nodes-base.freshworksCrmTool",
		"popularity": .252
	},
	{
		"id": "n8n-nodes-base.npmTool",
		"popularity": .247
	},
	{
		"id": "n8n-nodes-base.elasticSecurityTool",
		"popularity": .21
	},
	{
		"id": "n8n-nodes-base.pushcut",
		"popularity": .288
	},
	{
		"id": "@scrapeops/n8n-nodes-scrapeops.ScrapeOps",
		"popularity": .298
	},
	{
		"id": "n8n-nodes-base.theHiveTool",
		"popularity": .249
	},
	{
		"id": "n8n-nodes-base.theHiveProject",
		"popularity": .352
	},
	{
		"id": "n8n-nodes-base.ouraTool",
		"popularity": .237
	},
	{
		"id": "n8n-nodes-base.sendInBlueTrigger",
		"popularity": .309
	},
	{
		"id": "n8n-nodes-base.erpNextTool",
		"popularity": .324
	},
	{
		"id": "@alipeople/n8n-nodes-sendon.sendon",
		"popularity": .214
	},
	{
		"id": "n8n-nodes-base.xeroTool",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.contentfulTool",
		"popularity": .288
	},
	{
		"id": "n8n-nodes-base.uptimeRobotTool",
		"popularity": .205
	},
	{
		"id": "n8n-nodes-base.crateDb",
		"popularity": .237
	},
	{
		"id": "n8n-nodes-base.travisCiTool",
		"popularity": .358
	},
	{
		"id": "n8n-nodes-base.autopilotTrigger",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-base.cockpitTool",
		"popularity": .205
	},
	{
		"id": "n8n-nodes-base.mailgunTool",
		"popularity": .252
	},
	{
		"id": "@telnyx/n8n-nodes-telnyx-ai.telnyxAi",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-base.sentryIo",
		"popularity": .348
	},
	{
		"id": "n8n-nodes-base.rundeck",
		"popularity": .298
	},
	{
		"id": "n8n-nodes-base.plivo",
		"popularity": .279
	},
	{
		"id": "n8n-nodes-base.hunterTool",
		"popularity": .275
	},
	{
		"id": "n8n-nodes-templated.templated",
		"popularity": .334
	},
	{
		"id": "n8n-nodes-base.awsCognito",
		"popularity": .305
	},
	{
		"id": "n8n-nodes-base.codaTool",
		"popularity": .271
	},
	{
		"id": "n8n-nodes-base.clockifyTrigger",
		"popularity": .29
	},
	{
		"id": "n8n-nodes-fullenrich.fullEnrich",
		"popularity": .277
	},
	{
		"id": "n8n-nodes-base.awsIam",
		"popularity": .26
	},
	{
		"id": "n8n-nodes-base.gristTool",
		"popularity": .241
	},
	{
		"id": "n8n-nodes-base.harvestTool",
		"popularity": .194
	},
	{
		"id": "n8n-nodes-base.seaTableTool",
		"popularity": .324
	},
	{
		"id": "n8n-nodes-base.intercomTool",
		"popularity": .273
	},
	{
		"id": "n8n-nodes-base.totpTool",
		"popularity": .23
	},
	{
		"id": "n8n-nodes-base.rocketchatTool",
		"popularity": .285
	},
	{
		"id": "n8n-nodes-mailtrap.mailtrap",
		"popularity": .279
	},
	{
		"id": "n8n-nodes-base.humanticAi",
		"popularity": .26
	},
	{
		"id": "n8n-nodes-base.ciscoWebexTool",
		"popularity": .265
	},
	{
		"id": "n8n-nodes-base.awsComprehend",
		"popularity": .277
	},
	{
		"id": "@zohomail/n8n-nodes-zohocalendar.zohoCalendar",
		"popularity": .244
	},
	{
		"id": "n8n-nodes-vikunja.vikunja",
		"popularity": .393
	},
	{
		"id": "n8n-nodes-base.mailcheckTool",
		"popularity": .205
	},
	{
		"id": "n8n-nodes-base.kafkaTool",
		"popularity": .234
	},
	{
		"id": "n8n-nodes-base.sendGridTool",
		"popularity": .252
	},
	{
		"id": "n8n-nodes-extruct.extruct",
		"popularity": .205
	},
	{
		"id": "n8n-nodes-base.bambooHrTool",
		"popularity": .279
	},
	{
		"id": "n8n-nodes-base.oneSimpleApi",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-base.postmarkTrigger",
		"popularity": .247
	},
	{
		"id": "n8n-nodes-base.iterableTool",
		"popularity": .237
	},
	{
		"id": "n8n-nodes-base.rabbitmqTool",
		"popularity": .249
	},
	{
		"id": "n8n-nodes-chat-data.chatDataTrigger",
		"popularity": .188
	},
	{
		"id": "n8n-nodes-pushinator.pushinator",
		"popularity": .249
	},
	{
		"id": "@globalping/n8n-nodes-globalping.globalping",
		"popularity": .296
	},
	{
		"id": "n8n-nodes-base.ghostTool",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-base.bitlyTool",
		"popularity": .223
	},
	{
		"id": "n8n-nodes-fluentc.fluentCTranslate",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-mallabe-barcodes.mallabeBarcodes",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-base.mailerLiteTrigger",
		"popularity": .273
	},
	{
		"id": "n8n-nodes-base.contentful",
		"popularity": .273
	},
	{
		"id": "n8n-nodes-straico-official.straicoOfficial",
		"popularity": .349
	},
	{
		"id": "n8n-nodes-base.Brandfetch",
		"popularity": .255
	},
	{
		"id": "n8n-nodes-base.msg91",
		"popularity": .309
	},
	{
		"id": "n8n-nodes-base.mailchimpTrigger",
		"popularity": .291
	},
	{
		"id": "n8n-nodes-base.okta",
		"popularity": .285
	},
	{
		"id": "n8n-nodes-base.iterable",
		"popularity": .244
	},
	{
		"id": "n8n-nodes-base.gongTool",
		"popularity": .252
	},
	{
		"id": "n8n-nodes-awork.awork",
		"popularity": .341
	},
	{
		"id": "n8n-nodes-base.oura",
		"popularity": .302
	},
	{
		"id": "n8n-nodes-docuwriter-ai.docuWriter",
		"popularity": .214
	},
	{
		"id": "n8n-nodes-kipps.kippsAiChatbot",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.flowTrigger",
		"popularity": .234
	},
	{
		"id": "n8n-nodes-base.timescaleDbTool",
		"popularity": .194
	},
	{
		"id": "n8n-nodes-shortio.Shortio",
		"popularity": .249
	},
	{
		"id": "n8n-nodes-base.yourlsTool",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-base.zulip",
		"popularity": .291
	},
	{
		"id": "n8n-nodes-base.mauticTrigger",
		"popularity": .255
	},
	{
		"id": "n8n-nodes-base.awsRekognition",
		"popularity": .277
	},
	{
		"id": "n8n-nodes-base.chargebeeTool",
		"popularity": .23
	},
	{
		"id": "n8n-nodes-parseur.parseur",
		"popularity": .214
	},
	{
		"id": "n8n-nodes-base.surveyMonkeyTrigger",
		"popularity": .273
	},
	{
		"id": "n8n-nodes-base.yourls",
		"popularity": .275
	},
	{
		"id": "n8n-nodes-base.freshworksCrm",
		"popularity": .3
	},
	{
		"id": "n8n-nodes-skyvern.skyvern",
		"popularity": .299
	},
	{
		"id": "n8n-nodes-base.helpScout",
		"popularity": .277
	},
	{
		"id": "n8n-nodes-base.pagerDuty",
		"popularity": .296
	},
	{
		"id": "n8n-nodes-base.postHog",
		"popularity": .302
	},
	{
		"id": "n8n-nodes-base.mailerLiteTool",
		"popularity": .188
	},
	{
		"id": "n8n-nodes-base.BrandfetchTool",
		"popularity": .237
	},
	{
		"id": "n8n-nodes-base.awsSns",
		"popularity": .302
	},
	{
		"id": "n8n-nodes-base.raindrop",
		"popularity": .403
	},
	{
		"id": "n8n-nodes-base.ciscoWebexTrigger",
		"popularity": .257
	},
	{
		"id": "n8n-nodes-base.splunkTool",
		"popularity": .249
	},
	{
		"id": "n8n-nodes-base.gotifyTool",
		"popularity": .21
	},
	{
		"id": "n8n-nodes-base.loneScaleTool",
		"popularity": .249
	},
	{
		"id": "n8n-nodes-base.lemlistTrigger",
		"popularity": .327
	},
	{
		"id": "n8n-nodes-base.crowdDevTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.customerIo",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-base.postHogTool",
		"popularity": .23
	},
	{
		"id": "n8n-nodes-base.netlifyTrigger",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-base.koBoToolbox",
		"popularity": .247
	},
	{
		"id": "n8n-nodes-base.signl4Tool",
		"popularity": .105
	},
	{
		"id": "n8n-nodes-base.wekan",
		"popularity": .21
	},
	{
		"id": "n8n-nodes-base.spontit",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-base.questDb",
		"popularity": .157
	},
	{
		"id": "n8n-nodes-base.storyblokTool",
		"popularity": .194
	},
	{
		"id": "n8n-nodes-logsnag.LogSnag",
		"popularity": .157
	},
	{
		"id": "n8n-nodes-base.customerIoTrigger",
		"popularity": .166
	},
	{
		"id": "n8n-nodes-base.koBoToolboxTrigger",
		"popularity": .205
	},
	{
		"id": "n8n-nodes-base.monicaCrm",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-base.zulipTool",
		"popularity": .241
	},
	{
		"id": "n8n-nodes-base.paddle",
		"popularity": .174
	},
	{
		"id": "n8n-nodes-base.quickbase",
		"popularity": .234
	},
	{
		"id": "@apaleo/n8n-nodes-apaleo-official.apaleo",
		"popularity": .223
	},
	{
		"id": "n8n-nodes-base.keapTrigger",
		"popularity": .241
	},
	{
		"id": "@netgsm/n8n-nodes-netgsm.netgsm",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-base.disqus",
		"popularity": .122
	},
	{
		"id": "n8n-nodes-base.mailjetTrigger",
		"popularity": .166
	},
	{
		"id": "n8n-nodes-base.taiga",
		"popularity": .249
	},
	{
		"id": "n8n-nodes-taddy.taddyApi",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.openThesaurusTool",
		"popularity": .205
	},
	{
		"id": "n8n-nodes-base.postBinTool",
		"popularity": .205
	},
	{
		"id": "n8n-nodes-base.questDbTool",
		"popularity": .255
	},
	{
		"id": "n8n-nodes-base.pushcutTool",
		"popularity": .105
	},
	{
		"id": "n8n-nodes-seo-content-machine.seoContentMachine",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-base.stackby",
		"popularity": .247
	},
	{
		"id": "@ekyte/n8n-nodes-ekyte.eKyteAction",
		"popularity": .288
	},
	{
		"id": "n8n-nodes-base.salesmate",
		"popularity": .174
	},
	{
		"id": "n8n-nodes-base.syncroMspTool",
		"popularity": .21
	},
	{
		"id": "@vlm-run/n8n-nodes-vlmrun.vlmRun",
		"popularity": .174
	},
	{
		"id": "n8n-nodes-base.taigaTrigger",
		"popularity": .122
	},
	{
		"id": "n8n-nodes-base.convertKitTrigger",
		"popularity": .223
	},
	{
		"id": "n8n-nodes-base.goToWebinar",
		"popularity": .23
	},
	{
		"id": "n8n-nodes-base.securityScorecard",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-base.elasticSecurity",
		"popularity": .257
	},
	{
		"id": "n8n-nodes-base.dropcontactTool",
		"popularity": .23
	},
	{
		"id": "@orisma/n8n-nodes-taximail.taximail",
		"popularity": .147
	},
	{
		"id": "n8n-nodes-base.koBoToolboxTool",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-krispcall.krispcall",
		"popularity": .122
	},
	{
		"id": "@bedrijfsdatanl/n8n-nodes-bedrijfsdata.bedrijfsdata",
		"popularity": .122
	},
	{
		"id": "n8n-nodes-base.segment",
		"popularity": .194
	},
	{
		"id": "n8n-nodes-base.kitemakerTool",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-base.taigaTool",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-joggai.joggAiNode",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-base.monicaCrmTool",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-swiftgum-trigger.swiftgumTrigger",
		"popularity": .122
	},
	{
		"id": "n8n-nodes-base.twist",
		"popularity": .174
	},
	{
		"id": "n8n-nodes-base.cockpit",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-zohoteaminbox.zohoTeamInbox",
		"popularity": .247
	},
	{
		"id": "n8n-nodes-base.lingvaNex",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-base.mandrillTool",
		"popularity": .122
	},
	{
		"id": "@handelsregister/n8n-nodes-handelsregister-ai.handelsregisterAi",
		"popularity": .105
	},
	{
		"id": "n8n-nodes-base.awsSnsTool",
		"popularity": .219
	},
	{
		"id": "n8n-nodes-base.theHive",
		"popularity": .194
	},
	{
		"id": "n8n-nodes-base.oktaTool",
		"popularity": .147
	},
	{
		"id": "n8n-nodes-base.pushbulletTool",
		"popularity": .181
	},
	{
		"id": "@copicake/n8n-nodes-copicake.copicake",
		"popularity": .157
	},
	{
		"id": "n8n-nodes-base.egoiTool",
		"popularity": .105
	},
	{
		"id": "n8n-nodes-base.driftTool",
		"popularity": .23
	},
	{
		"id": "n8n-nodes-base.raindropTool",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-vikunja.vikunjaTrigger",
		"popularity": .257
	},
	{
		"id": "@nuelink/n8n-nodes-nuelink.nuelink",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-dalil-ai.dalilAi",
		"popularity": .083
	},
	{
		"id": "n8n-nodes-base.netlifyTool",
		"popularity": .157
	},
	{
		"id": "n8n-nodes-streak-crm.streak",
		"popularity": .205
	},
	{
		"id": "@paloaltonetworks/n8n-nodes-prisma-airs.prismaAirs",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-base.unleashedSoftware",
		"popularity": .157
	},
	{
		"id": "n8n-nodes-base.theHiveProjectTool",
		"popularity": .286
	},
	{
		"id": "n8n-nodes-businessmap.businessmap",
		"popularity": .166
	},
	{
		"id": "n8n-nodes-klicktipp.klicktipp",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-base.rundeckTool",
		"popularity": .166
	},
	{
		"id": "n8n-nodes-base.wekanTool",
		"popularity": .147
	},
	{
		"id": "n8n-nodes-base.mispTool",
		"popularity": .166
	},
	{
		"id": "n8n-nodes-base.syncroMsp",
		"popularity": .257
	},
	{
		"id": "n8n-nodes-base.demioTool",
		"popularity": .21
	},
	{
		"id": "n8n-nodes-base.crowdDev",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.goToWebinarTool",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-base.drift",
		"popularity": .136
	},
	{
		"id": "n8n-nodes-base.plivoTool",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-base.tapfiliateTool",
		"popularity": .166
	},
	{
		"id": "n8n-nodes-simplified.simplified",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-base.quickbaseTool",
		"popularity": .136
	},
	{
		"id": "n8n-nodes-base.copper",
		"popularity": .157
	},
	{
		"id": "n8n-nodes-base.tapfiliate",
		"popularity": .083
	},
	{
		"id": "n8n-nodes-base.misp",
		"popularity": .286
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectDatacenter",
		"popularity": .122
	},
	{
		"id": "n8n-nodes-matrix42.matrix42",
		"popularity": .083
	},
	{
		"id": "n8n-nodes-base.emeliaTool",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-base.vonageTool",
		"popularity": .214
	},
	{
		"id": "n8n-nodes-base.keap",
		"popularity": .323
	},
	{
		"id": "n8n-nodes-base.circleCiTool",
		"popularity": .147
	},
	{
		"id": "n8n-nodes-base.egoi",
		"popularity": .147
	},
	{
		"id": "n8n-nodes-triggercmd.triggercmd",
		"popularity": .34
	},
	{
		"id": "n8n-nodes-base.emelia",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-base.clearbitTool",
		"popularity": .219
	},
	{
		"id": "n8n-nodes-twittershots.twitterShots",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-deeptagger.deepTagger",
		"popularity": .136
	},
	{
		"id": "n8n-nodes-base.chargebeeTrigger",
		"popularity": .223
	},
	{
		"id": "n8n-nodes-base.mailjetTool",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-outgrow.outgrowTrigger",
		"popularity": .166
	},
	{
		"id": "@enginemailer/n8n-nodes-enginemailer.enginemailer",
		"popularity": .21
	},
	{
		"id": "n8n-nodes-raia.raia",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectCloudTool",
		"popularity": .174
	},
	{
		"id": "n8n-nodes-base.travisCi",
		"popularity": .122
	},
	{
		"id": "n8n-nodes-base.beeminderTool",
		"popularity": .174
	},
	{
		"id": "n8n-nodes-base.sentryIoTool",
		"popularity": .23
	},
	{
		"id": "n8n-nodes-base.segmentTool",
		"popularity": .23
	},
	{
		"id": "n8n-nodes-base.workableTrigger",
		"popularity": .194
	},
	{
		"id": "n8n-nodes-base.msg91Tool",
		"popularity": .2
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatLemonade",
		"popularity": .487
	},
	{
		"id": "n8n-nodes-base.twistTool",
		"popularity": .083
	},
	{
		"id": "n8n-nodes-base.copperTool",
		"popularity": .136
	},
	{
		"id": "n8n-nodes-apex.apex",
		"popularity": .105
	},
	{
		"id": "n8n-nodes-base.amqpTool",
		"popularity": .237
	},
	{
		"id": "n8n-nodes-base.pushcutTrigger",
		"popularity": .147
	},
	{
		"id": "n8n-nodes-blue.blue",
		"popularity": .083
	},
	{
		"id": "n8n-nodes-base.pagerDutyTool",
		"popularity": .205
	},
	{
		"id": "n8n-nodes-base.seaTableTrigger",
		"popularity": .275
	},
	{
		"id": "n8n-nodes-beyondpresence.beyondPresence",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.sendy",
		"popularity": .205
	},
	{
		"id": "n8n-nodes-base.helpScoutTool",
		"popularity": .23
	},
	{
		"id": "n8n-nodes-base.salesmateTool",
		"popularity": .105
	},
	{
		"id": "n8n-nodes-base.unleashedSoftwareTool",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-base.theHiveProjectTrigger",
		"popularity": .136
	},
	{
		"id": "n8n-nodes-exa-official.exa",
		"popularity": .389
	},
	{
		"id": "n8n-nodes-dart.dart",
		"popularity": .194
	},
	{
		"id": "n8n-nodes-understandtechchat.understandTechChat",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-autobound.autobound",
		"popularity": .166
	},
	{
		"id": "n8n-nodes-parseur.parseurTrigger",
		"popularity": .122
	},
	{
		"id": "n8n-nodes-base.beeminder",
		"popularity": .181
	},
	{
		"id": "n8n-nodes-webmetic.webmetic",
		"popularity": .083
	},
	{
		"id": "n8n-nodes-velatir.velatir",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.oracleDatabaseTool",
		"popularity": .405
	},
	{
		"id": "n8n-nodes-base.sms77Tool",
		"popularity": .234
	},
	{
		"id": "n8n-nodes-klicktipp.klicktippTrigger",
		"popularity": .136
	},
	{
		"id": "n8n-nodes-base.haloPSATool",
		"popularity": .219
	},
	{
		"id": "n8n-nodes-gainium.Gainium",
		"popularity": .105
	},
	{
		"id": "n8n-nodes-parallel.parallel",
		"popularity": .26
	},
	{
		"id": "n8n-nodes-base.awsElb",
		"popularity": .188
	},
	{
		"id": "n8n-nodes-base.onfleet",
		"popularity": .122
	},
	{
		"id": "n8n-nodes-authentica.authentica",
		"popularity": .174
	},
	{
		"id": "n8n-nodes-base.uprocTool",
		"popularity": .147
	},
	{
		"id": "n8n-nodes-base.stackbyTool",
		"popularity": .122
	},
	{
		"id": "n8n-nodes-base.mauticTool",
		"popularity": .249
	},
	{
		"id": "n8n-nodes-base.theHiveTrigger",
		"popularity": .136
	},
	{
		"id": "n8n-nodes-base.demio",
		"popularity": .194
	},
	{
		"id": "n8n-nodes-base.chargebee",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-base.sendyTool",
		"popularity": .147
	},
	{
		"id": "n8n-nodes-straker-verify.strakerVerify",
		"popularity": .083
	},
	{
		"id": "n8n-nodes-base.uplead",
		"popularity": .281
	},
	{
		"id": "n8n-nodes-base.htmlExtract",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGooglePalm",
		"popularity": .105
	},
	{
		"id": "n8n-nodes-zigpoll.zigpollTrigger",
		"popularity": .105
	},
	{
		"id": "n8n-nodes-jigsawstack.jigsawStack",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-base.stickyNote",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.twakeTool",
		"popularity": .083
	},
	{
		"id": "n8n-nodes-base.writeBinaryFile",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-pdf4me.pdf4me",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.olhoVivoTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.moceanTool",
		"popularity": .083
	},
	{
		"id": "n8n-nodes-base.comfyUITool",
		"popularity": 0
	},
	{
		"id": "@droidrun/n8n-nodes-droidrun.droidrun",
		"popularity": .122
	},
	{
		"id": "n8n-nodes-base.spontitTool",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreSupabaseLoad",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.profitWellTool",
		"popularity": .147
	},
	{
		"id": "n8n-nodes-base.linkedinNodeTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.arubaCentralv4Tool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-signifycrm.signifyCrm",
		"popularity": .083
	},
	{
		"id": "n8n-nodes-base.workflowTrigger",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryChatRetriever",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.crewAiTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.setTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.cron",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.smsItTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.kitemaker",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.odooCustomToolTool",
		"popularity": 0
	},
	{
		"id": "@orq-ai/n8n-nodes-orq.orqDeployment",
		"popularity": .105
	},
	{
		"id": "n8n-nodes-hookdeck.hookdeck",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-base.aimsArticlesTool",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.documentBinaryInputLoader",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.orbit",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-targetare.targetareRo",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-base.function",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.libreNmsTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.lingvaNexTool",
		"popularity": .105
	},
	{
		"id": "n8n-nodes-base.wakebDvsTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-ikas.ikas",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.emeliaTrigger",
		"popularity": .052
	},
	{
		"id": "@n8n/n8n-nodes-langchain.openAiAssistant",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmOpenAi",
		"popularity": 0
	},
	{
		"id": "@thelifeofrishi/n8n-nodes-orshot.orshot",
		"popularity": .21
	},
	{
		"id": "n8n-nodes-base.youTubeSearchTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.readPDF",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.vero",
		"popularity": .083
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmGooglePalm",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.profitWell",
		"popularity": .105
	},
	{
		"id": "n8n-nodes-base.loneScaleTrigger",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-base.spreadsheetFile",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.e2eTest",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-reachkit.reachkit",
		"popularity": .052
	},
	{
		"id": "@steuerboard/n8n-nodes-steuerboard.steuerboard",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.splunkFdjTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-crossmint.crossmintWallets",
		"popularity": .247
	},
	{
		"id": "n8n-nodes-base.customSshTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.keapTool",
		"popularity": .122
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectCloudTrigger",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-referral-factory.referralFactory",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-base.mcpClientTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.jimengAiTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.copperTrigger",
		"popularity": .122
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolHttpRequest",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.fortinetTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-payfunnels.payfunnels",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.wakebAipTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.influxDbTool",
		"popularity": 0
	},
	{
		"id": "@datafix/n8n-nodes-anthias.anthias",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-base.squareTool",
		"popularity": 0
	},
	{
		"id": "@bedrijfsdatanl/n8n-nodes-prospectpro.prospectpro",
		"popularity": .083
	},
	{
		"id": "n8n-nodes-base.tfusionGenerateTool",
		"popularity": 0
	},
	{
		"id": "@geocapture/n8n-nodes-geocapture.geocapture",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-base.crowdDevTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-winston-ai.winstonAi",
		"popularity": .136
	},
	{
		"id": "n8n-nodes-base.dsSearchTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.onfleetTrigger",
		"popularity": .205
	},
	{
		"id": "n8n-nodes-blank.githubIssues",
		"popularity": 0
	},
	{
		"id": "@lnkbio/n8n-nodes-lnkbio.lnkBio",
		"popularity": .105
	},
	{
		"id": "@socradar/n8n-nodes-socradar.socradar",
		"popularity": .166
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStorePineconeLoad",
		"popularity": 0
	},
	{
		"id": "@elevenlabs/n8n-nodes-elevenlabs.elevenLabs",
		"popularity": .647
	},
	{
		"id": "n8n-nodes-octagon.octagonAgents",
		"popularity": .083
	},
	{
		"id": "n8n-nodes-dumplingai.dumplingAi",
		"popularity": .157
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmOllama",
		"popularity": .662
	},
	{
		"id": "n8n-nodes-meetgeek.meetGeek",
		"popularity": .214
	},
	{
		"id": "@n8n/n8n-nodes-langchain.documentJsonInputLoader",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.manualTrigger",
		"popularity": .993
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatMistralCloud",
		"popularity": .654
	},
	{
		"id": "n8n-nodes-google-search-console.googleSearchConsole",
		"popularity": .489
	},
	{
		"id": "n8n-nodes-base.freshdesk",
		"popularity": .439
	},
	{
		"id": "n8n-nodes-htmlcsstopdf.htmlcsstopdf",
		"popularity": .575
	},
	{
		"id": "@promptlayer/n8n-nodes-promptlayer-runagent.promptLayerRunAgent",
		"popularity": .347
	},
	{
		"id": "n8n-nodes-tallyforms.tallyTrigger",
		"popularity": .504
	},
	{
		"id": "n8n-nodes-llmlayer.llmLayer",
		"popularity": .358
	},
	{
		"id": "n8n-nodes-emailvalidation.emailValidation",
		"popularity": .29
	},
	{
		"id": "n8n-nodes-browseract.browserAct",
		"popularity": .418
	},
	{
		"id": "@pdfgeneratorapi/n8n-nodes-pdf-generator-api.pdfGeneratorApi",
		"popularity": .461
	},
	{
		"id": "@decisionrules/n8n-nodes-decisionrules.decisionRules",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-olostep.olostepScrape",
		"popularity": .368
	},
	{
		"id": "n8n-nodes-base.googleAnalyticsTool",
		"popularity": .42
	},
	{
		"id": "n8n-nodes-human-in-the-loop.hitlNode",
		"popularity": .288
	},
	{
		"id": "n8n-nodes-pdfmonkey.pdfMonkey",
		"popularity": .417
	},
	{
		"id": "n8n-nodes-scrapingbee.ScrapingBee",
		"popularity": .421
	},
	{
		"id": "@infobip/n8n-nodes-infobip-api.infobipApi",
		"popularity": .223
	},
	{
		"id": "@servicem8/n8n-nodes-servicem8.serviceM8",
		"popularity": .378
	},
	{
		"id": "n8n-nodes-simla.simlaTrigger",
		"popularity": .122
	},
	{
		"id": "n8n-nodes-base.mocean",
		"popularity": .083
	},
	{
		"id": "n8n-nodes-sourcegeek.sourcegeek",
		"popularity": .307
	},
	{
		"id": "@xano/n8n-nodes-xano.xano",
		"popularity": .343
	},
	{
		"id": "n8n-nodes-verifiemail.verifiEmail",
		"popularity": .302
	},
	{
		"id": "@deutschlandgpt/n8n-nodes-deutschlandgpt.deutschlandgpt",
		"popularity": .166
	},
	{
		"id": "n8n-nodes-binalyze-air.air",
		"popularity": .105
	},
	{
		"id": "@n8n/n8n-nodes-langchain.documentDefaultDataLoader",
		"popularity": .749
	},
	{
		"id": "n8n-nodes-base.cywareConnectorTool",
		"popularity": 0
	},
	{
		"id": "@nvoip/n8n-nodes-nvoip.nvoip",
		"popularity": .122
	},
	{
		"id": "n8n-nodes-nele-ai.neleAi",
		"popularity": .052
	},
	{
		"id": "@rogerrogerio/n8n-nodes-rogerroger.rogerRoger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-infranodus.infranodus",
		"popularity": .188
	},
	{
		"id": "n8n-nodes-base.microsoftOneDriveTrigger",
		"popularity": .527
	},
	{
		"id": "@n8n/n8n-nodes-langchain.ollama",
		"popularity": .728
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryMotorhead",
		"popularity": .571
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserItemList",
		"popularity": .689
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolVectorStore",
		"popularity": .643
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreRedis",
		"popularity": .464
	},
	{
		"id": "n8n-nodes-base.oracleDatabase",
		"popularity": .517
	},
	{
		"id": "n8n-nodes-base.clickUpTool",
		"popularity": .483
	},
	{
		"id": "n8n-nodes-base.googleFirebaseRealtimeDatabaseTool",
		"popularity": .381
	},
	{
		"id": "@ledgers/n8n-nodes-ledgers-cloud.ledgers",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsLemonade",
		"popularity": .355
	},
	{
		"id": "@respond-io/n8n-nodes-respond-io.respondio",
		"popularity": .428
	},
	{
		"id": "@razorpay/n8n-nodes-razorpay.razorpay",
		"popularity": .358
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStorePineconeInsert",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.veroTool",
		"popularity": .105
	},
	{
		"id": "n8n-nodes-featherless.featherless",
		"popularity": .166
	},
	{
		"id": "n8n-nodes-base.googlePerspective",
		"popularity": .26
	},
	{
		"id": "@exploriumai/n8n-nodes-explorium-ai.exploriumApiNode",
		"popularity": .283
	},
	{
		"id": "n8n-nodes-csvbox.csvboxTrigger",
		"popularity": .205
	},
	{
		"id": "n8n-nodes-base.onfleetTool",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-base.peekalinkTool",
		"popularity": .219
	},
	{
		"id": "@easysoftware/n8n-nodes-easy-redmine.easyRedmine",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-octavehq.octave",
		"popularity": .052
	},
	{
		"id": "n8n-nodes-base.loneScale",
		"popularity": .122
	},
	{
		"id": "@reportei/n8n-nodes-reportei.reportei",
		"popularity": .214
	},
	{
		"id": "n8n-nodes-memara.memara",
		"popularity": .083
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectCloud",
		"popularity": .083
	},
	{
		"id": "n8n-nodes-base.upGuardTool",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolExecutor",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.playwrightScreenshotTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-orshot.orshot",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.googleSheets",
		"popularity": .951
	},
	{
		"id": "n8n-nodes-base.functionItem",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.hapTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-phacet-official.phacet",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryZep",
		"popularity": 0
	},
	{
		"id": "@joai/n8n-nodes-joai.joai",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.fortimanagerTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.arubaCentralNextGenTool",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmLemonade",
		"popularity": .47
	},
	{
		"id": "n8n-nodes-base.simulate",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreInMemoryLoad",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.zohoCalendarTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-lavatop.lavatop",
		"popularity": .083
	},
	{
		"id": "n8n-nodes-base.ciscoFirepowerThreatDefenceTool",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatOpenRouter",
		"popularity": .839
	},
	{
		"id": "n8n-nodes-base.arubaCentralTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.robloxCodeCenterTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-hubbi.hubbi",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.waitTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.moveBinaryData",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.loneScaleList",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.automizy",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.interval",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.typeformTrigger",
		"popularity": .542
	},
	{
		"id": "n8n-nodes-base.facebookLeadAdsTrigger",
		"popularity": .574
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
	const ndvStore = useNDVStore();
	const uiStore = useUIStore();
	const nodeTypesStore = useNodeTypesStore();
	const telemetry = useTelemetry();
	const externalHooks = useExternalHooks();
	const { getNodeCreatorFilter } = useGetNodeCreatorFilter();
	const selectedView = ref(TRIGGER_NODE_CREATOR_VIEW);
	const mergedNodes = ref([]);
	const actions = ref({});
	const showScrim = ref(false);
	const openSource = ref("");
	const isCreateNodeActive = ref(false);
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
export { AIView as a, TriggerView as c, AINodesView as i, require_camelCase as l, useViewStacks as n, HitlToolView as o, useKeyboardNavigation as r, RegularView as s, useNodeCreatorStore as t, require_capitalize as u };
