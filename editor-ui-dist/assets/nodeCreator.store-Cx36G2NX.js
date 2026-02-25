import { o as __toESM, t as __commonJSMin } from "./chunk-r2Y0G7H8.js";
import { C as computed, G as nextTick, It as ref } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-D28pXLlm.js";
import { m as require_get, v as require_toString, y as require__arrayMap } from "./src-6rUDOvr2.js";
import { $ as require_upperFirst, Bi as getThemedValue, Bt as useNDVStore, C as useNodeTypesStore, D as finalizeItems, F as mapToolSubcategoryIcon, H as subcategorizeItems, I as nodeTypesToCreateElements, L as prepareCommunityNodeDetailsViewStack, Lt as useTelemetry, M as groupItemsInSections, N as isAINode, O as flattenCreateElements, Sr as useCanvasStore, T as useEvaluationStore, U as transformNodeType, V as sortNodeCreateElements, Wc as STORES, k as getAiTemplatesCallout, li as CanvasConnectionMode, r as useUIStore, s as useWorkflowsStore, si as isVueFlowConnection, tt as require__createCompounder, ws as useSettingsStore, xn as useTemplatesStore, xr as useExternalHooks, z as searchNodes, zr as v4_default } from "./users.store-B-dhu6_V.js";
import { $ as AI_CATEGORY_LANGUAGE_MODELS, $t as CRYPTO_NODE_TYPE, At as TEMPLATE_CATEGORY_AI, Cr as WEBHOOK_NODE_TYPE, Ct as HUMAN_IN_THE_LOOP_CATEGORY, Et as OTHER_TRIGGER_NODES_SUBCATEGORY, Ft as AGGREGATE_NODE_TYPE, Gt as CHAT_TRIGGER_NODE_TYPE, I as CUSTOM_API_CALL_KEY, It as AI_CODE_NODE_TYPE, J as AI_CATEGORY_AGENTS, Jt as COMPRESSION_NODE_TYPE, Mn as MARKDOWN_NODE_TYPE, Mt as TRIGGER_NODE_CREATOR_VIEW, Nt as AGENT_NODE_TYPE, On as LIMIT_NODE_TYPE, Ot as REGULAR_NODE_CREATOR_VIEW, Pn as MERGE_NODE_TYPE, Pt as AGENT_TOOL_NODE_TYPE, Ro as require__cacheHas, Rt as AI_TRANSFORM_NODE_TYPE$1, Sn as IF_NODE_TYPE, St as HITL_SUBCATEGORY, Tt as NODE_CREATOR_OPEN_SOURCES, Ua as isCommunityPackageName, Ui as require__arrayIncludesWith, Wi as require__arrayIncludes, X as AI_CATEGORY_DOCUMENT_LOADERS, Y as AI_CATEGORY_CHAINS, Yt as CONVERT_TO_FILE_NODE_TYPE, Z as AI_CATEGORY_EMBEDDING, at as AI_CATEGORY_ROOT_NODES, bn as HTTP_REQUEST_NODE_TYPE, bt as FLOWS_CONTROL_SUBCATEGORY, ct as AI_CATEGORY_VECTOR_STORES, dt as AI_NODE_CREATOR_VIEW, er as REMOVE_DUPLICATES_NODE_TYPE, et as AI_CATEGORY_MCP_NODES, fn as EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE, fr as SPLIT_IN_BATCHES_NODE_TYPE, ft as AI_OTHERS_NODE_CREATOR_VIEW, gn as FORM_TRIGGER_NODE_TYPE, gr as SUMMARIZE_NODE_TYPE, gt as AI_WORKFLOW_TOOL_LANGCHAIN_NODE_TYPE, ht as AI_UNCATEGORIZED_CATEGORY, in as EDIT_IMAGE_NODE_TYPE, ir as SCHEDULE_TRIGGER_NODE_TYPE, it as AI_CATEGORY_RETRIEVERS, jn as MANUAL_TRIGGER_NODE_TYPE, jt as TRANSFORM_DATA_SUBCATEGORY, kr as XML_NODE_TYPE, lt as AI_CODE_TOOL_LANGCHAIN_NODE_TYPE, mn as FILTER_NODE_TYPE, mo as AI_TRANSFORM_NODE_TYPE, mt as AI_SUBCATEGORY, nn as DATETIME_NODE_TYPE, nr as RSS_READ_NODE_TYPE, on as EMAIL_IMAP_NODE_TYPE, ot as AI_CATEGORY_TEXT_SPLITTERS, pn as EXTRACT_FROM_FILE_NODE_TYPE, pr as SPLIT_OUT_NODE_TYPE, pt as AI_SECTION_RECOMMENDED_TOOLS, qt as CODE_NODE_TYPE, rt as AI_CATEGORY_OUTPUTPARSER, sn as EMAIL_SEND_NODE_TYPE, so as NodeConnectionTypes, sr as SET_NODE_TYPE, st as AI_CATEGORY_TOOLS, tn as DATA_TABLE_NODE_TYPE, tt as AI_CATEGORY_MEMORY, ua as getNodeInputs, vt as CORE_NODES_CATEGORY, wt as NEW_TOOL_CATEGORIES, xa as isHitlToolType, xo as EVALUATION_TRIGGER_NODE_TYPE, xt as HELPERS_SUBCATEGORY, yi as require__baseFlatten, yn as HTML_NODE_TYPE, yt as DEFAULT_SUBCATEGORY, zo as require__SetCache } from "./constants-DM6W84kp.js";
import { T as require__baseUnary, r as require__baseRest, u as require_isArrayLikeObject } from "./merge-PRabpGkI.js";
import { j as defineStore } from "./_baseOrderBy-B5_tDn8L.js";
import { t as getNodeIconSource } from "./nodeIcon-DLD1xNLV.js";
import { c as parseCanvasConnectionHandleString, n as createCanvasConnectionHandleString } from "./canvas.utils-DQc-Akl3.js";
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
		"id": "n8n-nodes-base.code",
		"popularity": 1
	},
	{
		"id": "n8n-nodes-base.set",
		"popularity": .98
	},
	{
		"id": "n8n-nodes-base.webhook",
		"popularity": .942
	},
	{
		"id": "n8n-nodes-base.if",
		"popularity": .959
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
		"popularity": .936
	},
	{
		"id": "n8n-nodes-base.merge",
		"popularity": .895
	},
	{
		"id": "n8n-nodes-base.scheduleTrigger",
		"popularity": .91
	},
	{
		"id": "n8n-nodes-base.noOp",
		"popularity": .899
	},
	{
		"id": "n8n-nodes-base.telegram",
		"popularity": .899
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainLlm",
		"popularity": .86
	},
	{
		"id": "n8n-nodes-base.googleDrive",
		"popularity": .869
	},
	{
		"id": "n8n-nodes-base.formTrigger",
		"popularity": .87
	},
	{
		"id": "n8n-nodes-base.switch",
		"popularity": .873
	},
	{
		"id": "n8n-nodes-base.respondToWebhook",
		"popularity": .858
	},
	{
		"id": "n8n-nodes-base.splitInBatches",
		"popularity": .876
	},
	{
		"id": "n8n-nodes-base.filter",
		"popularity": .85
	},
	{
		"id": "@n8n/n8n-nodes-langchain.googleGemini",
		"popularity": .864
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryBufferWindow",
		"popularity": .922
	},
	{
		"id": "n8n-nodes-base.wait",
		"popularity": .866
	},
	{
		"id": "n8n-nodes-base.aggregate",
		"popularity": .829
	},
	{
		"id": "n8n-nodes-base.dataTable",
		"popularity": .854
	},
	{
		"id": "n8n-nodes-base.googleSheetsTool",
		"popularity": .852
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserStructured",
		"popularity": .83
	},
	{
		"id": "n8n-nodes-base.gmailTrigger",
		"popularity": .801
	},
	{
		"id": "n8n-nodes-base.httpRequestTool",
		"popularity": .801
	},
	{
		"id": "n8n-nodes-base.googleCalendar",
		"popularity": .751
	},
	{
		"id": "n8n-nodes-base.readWriteFile",
		"popularity": .817
	},
	{
		"id": "n8n-nodes-base.executeWorkflow",
		"popularity": .816
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWorkflow",
		"popularity": .804
	},
	{
		"id": "n8n-nodes-base.emailSend",
		"popularity": .785
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatOllama",
		"popularity": .795
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolCalculator",
		"popularity": .698
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAnthropic",
		"popularity": .772
	},
	{
		"id": "n8n-nodes-base.whatsApp",
		"popularity": .795
	},
	{
		"id": "n8n-nodes-base.gmailTool",
		"popularity": .798
	},
	{
		"id": "n8n-nodes-base.googleSheetsTrigger",
		"popularity": .786
	},
	{
		"id": "n8n-nodes-base.whatsAppTrigger",
		"popularity": .789
	},
	{
		"id": "n8n-nodes-base.executeWorkflowTrigger",
		"popularity": .802
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolCode",
		"popularity": .739
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chat",
		"popularity": .763
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGoogleGemini",
		"popularity": .918
	},
	{
		"id": "n8n-nodes-base.limit",
		"popularity": .783
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatDeepSeek",
		"popularity": .784
	},
	{
		"id": "n8n-nodes-docuwriter-ai.docuWriter",
		"popularity": .246
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGroq",
		"popularity": .794
	},
	{
		"id": "@n8n/n8n-nodes-langchain.agentTool",
		"popularity": .761
	},
	{
		"id": "n8n-nodes-base.airtable",
		"popularity": .805
	},
	{
		"id": "n8n-nodes-base.supabase",
		"popularity": .812
	},
	{
		"id": "n8n-nodes-base.googleCalendarTool",
		"popularity": .791
	},
	{
		"id": "n8n-nodes-base.html",
		"popularity": .758
	},
	{
		"id": "n8n-nodes-base.googleDocs",
		"popularity": .765
	},
	{
		"id": "@n8n/n8n-nodes-langchain.mcpClientTool",
		"popularity": .748
	},
	{
		"id": "@n8n/n8n-nodes-langchain.informationExtractor",
		"popularity": .733
	},
	{
		"id": "n8n-nodes-base.microsoftExcel",
		"popularity": .732
	},
	{
		"id": "n8n-nodes-base.slack",
		"popularity": .777
	},
	{
		"id": "n8n-nodes-base.rssFeedRead",
		"popularity": .769
	},
	{
		"id": "@n8n/n8n-nodes-langchain.mcpTrigger",
		"popularity": .732
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryPostgresChat",
		"popularity": .75
	},
	{
		"id": "n8n-nodes-base.googleDriveTrigger",
		"popularity": .757
	},
	{
		"id": "n8n-nodes-base.postgres",
		"popularity": .831
	},
	{
		"id": "n8n-nodes-base.form",
		"popularity": .741
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textClassifier",
		"popularity": .712
	},
	{
		"id": "n8n-nodes-base.aiTransform",
		"popularity": .681
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsOpenAi",
		"popularity": .765
	},
	{
		"id": "n8n-nodes-base.microsoftOutlook",
		"popularity": .746
	},
	{
		"id": "n8n-nodes-base.executeCommand",
		"popularity": .713
	},
	{
		"id": "n8n-nodes-base.emailReadImap",
		"popularity": .716
	},
	{
		"id": "n8n-nodes-base.discord",
		"popularity": .743
	},
	{
		"id": "@n8n/n8n-nodes-langchain.openAi",
		"popularity": .897
	},
	{
		"id": "n8n-nodes-base.gmail",
		"popularity": .903
	},
	{
		"id": "n8n-nodes-base.extractFromFile",
		"popularity": .83
	},
	{
		"id": "n8n-nodes-base.telegramTrigger",
		"popularity": .869
	},
	{
		"id": "n8n-nodes-base.splitOut",
		"popularity": .854
	},
	{
		"id": "n8n-nodes-base.convertToFile",
		"popularity": .806
	},
	{
		"id": "n8n-nodes-base.goToWebinar",
		"popularity": .265
	},
	{
		"id": "n8n-nodes-base.httpRequest",
		"popularity": .983
	},
	{
		"id": "n8n-nodes-base.errorTrigger",
		"popularity": .7
	},
	{
		"id": "n8n-nodes-base.notion",
		"popularity": .773
	},
	{
		"id": "n8n-nodes-base.summarize",
		"popularity": .707
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolSerpApi",
		"popularity": .711
	},
	{
		"id": "n8n-nodes-base.dateTime",
		"popularity": .711
	},
	{
		"id": "@n8n/n8n-nodes-langchain.anthropic",
		"popularity": .698
	},
	{
		"id": "n8n-nodes-base.youTube",
		"popularity": .714
	},
	{
		"id": "n8n-nodes-base.n8n",
		"popularity": .659
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter",
		"popularity": .68
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryRedisChat",
		"popularity": .686
	},
	{
		"id": "@n8n/n8n-nodes-langchain.sentimentAnalysis",
		"popularity": .614
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStorePinecone",
		"popularity": .735
	},
	{
		"id": "n8n-nodes-base.openWeatherMap",
		"popularity": .639
	},
	{
		"id": "n8n-nodes-base.twitter",
		"popularity": .621
	},
	{
		"id": "n8n-nodes-base.postgresTool",
		"popularity": .647
	},
	{
		"id": "n8n-nodes-base.googleDriveTool",
		"popularity": .686
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreInMemory",
		"popularity": .719
	},
	{
		"id": "@seranking/n8n-nodes-seranking.seRanking",
		"popularity": .343
	},
	{
		"id": "n8n-nodes-base.stopAndError",
		"popularity": .697
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolThink",
		"popularity": .685
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsOllama",
		"popularity": .661
	},
	{
		"id": "n8n-nodes-base.airtableTool",
		"popularity": .65
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainSummarization",
		"popularity": .605
	},
	{
		"id": "n8n-nodes-base.markdown",
		"popularity": .676
	},
	{
		"id": "n8n-nodes-base.googleDocsTool",
		"popularity": .682
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreSupabase",
		"popularity": .726
	},
	{
		"id": "n8n-nodes-base.facebookGraphApi",
		"popularity": .691
	},
	{
		"id": "n8n-nodes-base.sort",
		"popularity": .664
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatXAiGrok",
		"popularity": .673
	},
	{
		"id": "n8n-nodes-base.compareDatasets",
		"popularity": .622
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryMongoDbChat",
		"popularity": .659
	},
	{
		"id": "n8n-nodes-base.evaluation",
		"popularity": .625
	},
	{
		"id": "n8n-nodes-base.microsoftTeams",
		"popularity": .672
	},
	{
		"id": "n8n-nodes-base.mySql",
		"popularity": .727
	},
	{
		"id": "n8n-nodes-base.redis",
		"popularity": .723
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGoogleVertex",
		"popularity": .666
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainRetrievalQa",
		"popularity": .664
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsGoogleGemini",
		"popularity": .709
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWikipedia",
		"popularity": .658
	},
	{
		"id": "@apify/n8n-nodes-apify.apify",
		"popularity": .705
	},
	{
		"id": "n8n-nodes-base.microsoftOutlookTrigger",
		"popularity": .67
	},
	{
		"id": "n8n-nodes-base.removeDuplicates",
		"popularity": .681
	},
	{
		"id": "n8n-nodes-base.dateTimeTool",
		"popularity": .636
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryManager",
		"popularity": .667
	},
	{
		"id": "n8n-nodes-base.ssh",
		"popularity": .704
	},
	{
		"id": "n8n-nodes-base.rssFeedReadTrigger",
		"popularity": .667
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAzureOpenAi",
		"popularity": .682
	},
	{
		"id": "n8n-nodes-base.slackTrigger",
		"popularity": .68
	},
	{
		"id": "n8n-nodes-base.telegramTool",
		"popularity": .664
	},
	{
		"id": "n8n-nodes-base.microsoftOutlookTool",
		"popularity": .606
	},
	{
		"id": "n8n-nodes-base.whatsAppTool",
		"popularity": .637
	},
	{
		"id": "n8n-nodes-base.microsoftExcelTool",
		"popularity": .599
	},
	{
		"id": "@n8n/n8n-nodes-langchain.modelSelector",
		"popularity": .659
	},
	{
		"id": "n8n-nodes-base.crypto",
		"popularity": .629
	},
	{
		"id": "n8n-nodes-base.dataTableTool",
		"popularity": .67
	},
	{
		"id": "n8n-nodes-base.linkedIn",
		"popularity": .655
	},
	{
		"id": "n8n-nodes-base.facebookTrigger",
		"popularity": .649
	},
	{
		"id": "n8n-nodes-base.notionTool",
		"popularity": .627
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreQdrant",
		"popularity": .675
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStorePGVector",
		"popularity": .658
	},
	{
		"id": "n8n-nodes-whatsable.whatsAble",
		"popularity": .61
	},
	{
		"id": "n8n-nodes-base.localFileTrigger",
		"popularity": .506
	},
	{
		"id": "n8n-nodes-base.supabaseTool",
		"popularity": .673
	},
	{
		"id": "n8n-nodes-base.xml",
		"popularity": .643
	},
	{
		"id": "n8n-nodes-base.editImage",
		"popularity": .657
	},
	{
		"id": "n8n-nodes-base.twilio",
		"popularity": .667
	},
	{
		"id": "n8n-nodes-base.perplexity",
		"popularity": .65
	},
	{
		"id": "n8n-nodes-base.openWeatherMapTool",
		"popularity": .615
	},
	{
		"id": "n8n-nodes-base.wordpress",
		"popularity": .64
	},
	{
		"id": "n8n-nodes-base.airtableTrigger",
		"popularity": .634
	},
	{
		"id": "n8n-nodes-base.evaluationTrigger",
		"popularity": .622
	},
	{
		"id": "n8n-nodes-base.microsoftOneDrive",
		"popularity": .684
	},
	{
		"id": "n8n-nodes-base.executionData",
		"popularity": .706
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserAutofixing",
		"popularity": .715
	},
	{
		"id": "n8n-nodes-base.microsoftSql",
		"popularity": .652
	},
	{
		"id": "n8n-nodes-base.hackerNews",
		"popularity": .596
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmOpenHuggingFaceInference",
		"popularity": .615
	},
	{
		"id": "n8n-nodes-base.github",
		"popularity": .636
	},
	{
		"id": "n8n-nodes-base.hubspot",
		"popularity": .668
	},
	{
		"id": "n8n-nodes-base.jira",
		"popularity": .647
	},
	{
		"id": "n8n-nodes-base.baserow",
		"popularity": .617
	},
	{
		"id": "n8n-nodes-base.clickUp",
		"popularity": .655
	},
	{
		"id": "@mendable/n8n-nodes-firecrawl.firecrawl",
		"popularity": .626
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAwsBedrock",
		"popularity": .602
	},
	{
		"id": "n8n-nodes-base.jiraTool",
		"popularity": .55
	},
	{
		"id": "n8n-nodes-base.microsoftSharePoint",
		"popularity": .658
	},
	{
		"id": "n8n-nodes-base.homeAssistant",
		"popularity": .562
	},
	{
		"id": "n8n-nodes-base.microsoftTeamsTool",
		"popularity": .504
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreMongoDBAtlas",
		"popularity": .52
	},
	{
		"id": "n8n-nodes-base.ftp",
		"popularity": .627
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverContextualCompression",
		"popularity": .521
	},
	{
		"id": "n8n-nodes-base.facebookGraphApiTool",
		"popularity": .508
	},
	{
		"id": "n8n-nodes-base.quickChart",
		"popularity": .54
	},
	{
		"id": "n8n-nodes-base.actionNetwork",
		"popularity": .525
	},
	{
		"id": "n8n-nodes-base.emailReadImapTool",
		"popularity": .516
	},
	{
		"id": "n8n-nodes-base.googleChat",
		"popularity": .611
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsCohere",
		"popularity": .542
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverVectorStore",
		"popularity": .602
	},
	{
		"id": "n8n-nodes-base.debugHelper",
		"popularity": .577
	},
	{
		"id": "n8n-nodes-base.googleSlides",
		"popularity": .57
	},
	{
		"id": "n8n-nodes-base.nasa",
		"popularity": .551
	},
	{
		"id": "@searchapi/n8n-nodes-searchapi.searchApi",
		"popularity": .508
	},
	{
		"id": "n8n-nodes-base.mongoDb",
		"popularity": .63
	},
	{
		"id": "n8n-nodes-base.sseTrigger",
		"popularity": .534
	},
	{
		"id": "n8n-nodes-base.googleTranslate",
		"popularity": .509
	},
	{
		"id": "n8n-nodes-base.googleCalendarTrigger",
		"popularity": .591
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter",
		"popularity": .581
	},
	{
		"id": "n8n-nodes-base.formIoTrigger",
		"popularity": .514
	},
	{
		"id": "n8n-nodes-base.notionTrigger",
		"popularity": .605
	},
	{
		"id": "n8n-nodes-base.odoo",
		"popularity": .619
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterTokenSplitter",
		"popularity": .538
	},
	{
		"id": "n8n-nodes-cronlytic.cronlyticTrigger",
		"popularity": .577
	},
	{
		"id": "n8n-nodes-base.rssFeedReadTool",
		"popularity": .595
	},
	{
		"id": "n8n-nodes-base.trello",
		"popularity": .594
	},
	{
		"id": "n8n-nodes-base.shopify",
		"popularity": .604
	},
	{
		"id": "n8n-nodes-base.googleContacts",
		"popularity": .542
	},
	{
		"id": "n8n-nodes-base.postgresTrigger",
		"popularity": .567
	},
	{
		"id": "n8n-nodes-base.jiraTrigger",
		"popularity": .543
	},
	{
		"id": "n8n-nodes-base.googleTasks",
		"popularity": .554
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsHuggingFaceInference",
		"popularity": .573
	},
	{
		"id": "n8n-nodes-base.awsS3",
		"popularity": .593
	},
	{
		"id": "n8n-nodes-base.hubspotTrigger",
		"popularity": .558
	},
	{
		"id": "n8n-nodes-base.githubTool",
		"popularity": .55
	},
	{
		"id": "n8n-nodes-base.line",
		"popularity": .578
	},
	{
		"id": "n8n-nodes-serpapi.serpApi",
		"popularity": .578
	},
	{
		"id": "n8n-nodes-base.discordTool",
		"popularity": .548
	},
	{
		"id": "n8n-nodes-base.googleContactsTool",
		"popularity": .526
	},
	{
		"id": "n8n-nodes-base.filemaker",
		"popularity": .552
	},
	{
		"id": "n8n-nodes-base.n8nTrainingCustomerMessenger",
		"popularity": .561
	},
	{
		"id": "n8n-nodes-base.s3",
		"popularity": .607
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryXata",
		"popularity": .547
	},
	{
		"id": "n8n-nodes-base.googleBigQuery",
		"popularity": .577
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatCohere",
		"popularity": .555
	},
	{
		"id": "@blotato/n8n-nodes-blotato.blotato",
		"popularity": .61
	},
	{
		"id": "n8n-nodes-base.salesforce",
		"popularity": .619
	},
	{
		"id": "@brave/n8n-nodes-brave-search.braveSearch",
		"popularity": .543
	},
	{
		"id": "n8n-nodes-base.postBin",
		"popularity": .559
	},
	{
		"id": "@n8n/n8n-nodes-langchain.code",
		"popularity": .512
	},
	{
		"id": "n8n-nodes-base.calTrigger",
		"popularity": .54
	},
	{
		"id": "n8n-nodes-base.githubTrigger",
		"popularity": .556
	},
	{
		"id": "n8n-nodes-base.n8nTrigger",
		"popularity": .541
	},
	{
		"id": "n8n-nodes-base.nocoDb",
		"popularity": .641
	},
	{
		"id": "n8n-nodes-base.highLevel",
		"popularity": .586
	},
	{
		"id": "n8n-nodes-pdfco.PDFco Api",
		"popularity": .567
	},
	{
		"id": "n8n-nodes-aiscraper.aiScraper",
		"popularity": .5
	},
	{
		"id": "n8n-nodes-base.shopifyTrigger",
		"popularity": .547
	},
	{
		"id": "n8n-nodes-base.executeCommandTool",
		"popularity": .425
	},
	{
		"id": "n8n-nodes-base.renameKeys",
		"popularity": .573
	},
	{
		"id": "n8n-nodes-base.emailSendTool",
		"popularity": .57
	},
	{
		"id": "n8n-nodes-base.mistralAi",
		"popularity": .574
	},
	{
		"id": "n8n-nodes-base.youTubeTool",
		"popularity": .563
	},
	{
		"id": "@n8n/n8n-nodes-langchain.rerankerCohere",
		"popularity": .567
	},
	{
		"id": "n8n-nodes-base.pushover",
		"popularity": .54
	},
	{
		"id": "n8n-nodes-base.awsTranscribeTool",
		"popularity": .354
	},
	{
		"id": "n8n-nodes-base.reddit",
		"popularity": .562
	},
	{
		"id": "n8n-nodes-base.mySqlTool",
		"popularity": .586
	},
	{
		"id": "n8n-nodes-autobound.autobound",
		"popularity": .103
	},
	{
		"id": "n8n-nodes-base.microsoftTeamsTrigger",
		"popularity": .578
	},
	{
		"id": "n8n-nodes-base.azureStorage",
		"popularity": .473
	},
	{
		"id": "n8n-nodes-base.microsoftToDo",
		"popularity": .476
	},
	{
		"id": "n8n-nodes-base.eventbriteTrigger",
		"popularity": .388
	},
	{
		"id": "n8n-nodes-base.snowflake",
		"popularity": .525
	},
	{
		"id": "n8n-nodes-base.jinaAiTool",
		"popularity": .44
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsAzureOpenAi",
		"popularity": .517
	},
	{
		"id": "n8n-nodes-base.s3Tool",
		"popularity": .366
	},
	{
		"id": "n8n-nodes-base.quickbooks",
		"popularity": .516
	},
	{
		"id": "n8n-nodes-base.rabbitmq",
		"popularity": .466
	},
	{
		"id": "n8n-nodes-base.seaTable",
		"popularity": .448
	},
	{
		"id": "n8n-nodes-base.matrix",
		"popularity": .455
	},
	{
		"id": "n8n-nodes-base.totp",
		"popularity": .452
	},
	{
		"id": "n8n-nodes-base.zendesk",
		"popularity": .522
	},
	{
		"id": "n8n-nodes-base.zendeskTrigger",
		"popularity": .433
	},
	{
		"id": "n8n-nodes-base.microsoftGraphSecurityTool",
		"popularity": .379
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfile",
		"popularity": .499
	},
	{
		"id": "n8n-nodes-base.graphqlTool",
		"popularity": .367
	},
	{
		"id": "n8n-nodes-contextualai.contextualAi",
		"popularity": .269
	},
	{
		"id": "n8n-nodes-base.philipsHue",
		"popularity": .362
	},
	{
		"id": "n8n-nodes-base.filemakerTool",
		"popularity": .361
	},
	{
		"id": "n8n-nodes-base.wooCommerceTrigger",
		"popularity": .492
	},
	{
		"id": "n8n-nodes-browserflow.browserflow",
		"popularity": .393
	},
	{
		"id": "n8n-nodes-base.bitbucketTrigger",
		"popularity": .423
	},
	{
		"id": "n8n-nodes-base.payPal",
		"popularity": .384
	},
	{
		"id": "n8n-nodes-base.redisTrigger",
		"popularity": .454
	},
	{
		"id": "n8n-nodes-base.zoom",
		"popularity": .481
	},
	{
		"id": "@tavily/n8n-nodes-tavily.tavily",
		"popularity": .595
	},
	{
		"id": "n8n-nodes-base.mailjet",
		"popularity": .393
	},
	{
		"id": "n8n-nodes-powerbi.powerBi",
		"popularity": .491
	},
	{
		"id": "n8n-nodes-base.rabbitmqTrigger",
		"popularity": .463
	},
	{
		"id": "n8n-nodes-base.dropbox",
		"popularity": .602
	},
	{
		"id": "n8n-nodes-base.amqpTrigger",
		"popularity": .353
	},
	{
		"id": "n8n-nodes-base.awsSes",
		"popularity": .432
	},
	{
		"id": "n8n-nodes-base.formstackTrigger",
		"popularity": .434
	},
	{
		"id": "n8n-nodes-base.stripeTool",
		"popularity": .382
	},
	{
		"id": "n8n-nodes-base.trelloTool",
		"popularity": .473
	},
	{
		"id": "n8n-nodes-base.salesforceTrigger",
		"popularity": .488
	},
	{
		"id": "n8n-nodes-base.dhlTool",
		"popularity": .349
	},
	{
		"id": "n8n-nodes-base.twilioTrigger",
		"popularity": .575
	},
	{
		"id": "n8n-nodes-base.actionNetworkTool",
		"popularity": .411
	},
	{
		"id": "n8n-nodes-base.grist",
		"popularity": .426
	},
	{
		"id": "n8n-nodes-base.redditTool",
		"popularity": .426
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreZep",
		"popularity": .422
	},
	{
		"id": "n8n-nodes-base.awsTextractTool",
		"popularity": .373
	},
	{
		"id": "@aotoki/n8n-nodes-line-messaging.lineMessaging",
		"popularity": .578
	},
	{
		"id": "@2chat/n8n-nodes-twochat.twoChat",
		"popularity": .381
	},
	{
		"id": "n8n-nodes-base.coinGecko",
		"popularity": .418
	},
	{
		"id": "n8n-nodes-base.philipsHueTool",
		"popularity": .497
	},
	{
		"id": "n8n-nodes-base.airtopTool",
		"popularity": .457
	},
	{
		"id": "n8n-nodes-base.trelloTrigger",
		"popularity": .474
	},
	{
		"id": "n8n-nodes-scrapegraphai.scrapegraphAi",
		"popularity": .393
	},
	{
		"id": "n8n-nodes-base.awsLambda",
		"popularity": .458
	},
	{
		"id": "n8n-nodes-base.strava",
		"popularity": .435
	},
	{
		"id": "n8n-nodes-base.stravaTrigger",
		"popularity": .404
	},
	{
		"id": "n8n-nodes-base.mondayComTool",
		"popularity": .41
	},
	{
		"id": "n8n-nodes-base.googleSlidesTool",
		"popularity": .451
	},
	{
		"id": "n8n-nodes-base.vonage",
		"popularity": .395
	},
	{
		"id": "n8n-nodes-base.rocketchat",
		"popularity": .398
	},
	{
		"id": "n8n-nodes-base.jenkins",
		"popularity": .397
	},
	{
		"id": "n8n-nodes-base.pipedriveTool",
		"popularity": .448
	},
	{
		"id": "n8n-nodes-aimlapi.aimlApi",
		"popularity": .398
	},
	{
		"id": "n8n-nodes-base.twilioTool",
		"popularity": .479
	},
	{
		"id": "n8n-nodes-base.linearTrigger",
		"popularity": .414
	},
	{
		"id": "n8n-nodes-base.googleCloudNaturalLanguageTool",
		"popularity": .376
	},
	{
		"id": "n8n-nodes-base.box",
		"popularity": .436
	},
	{
		"id": "n8n-nodes-base.linkedInTool",
		"popularity": .594
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsGoogleVertex",
		"popularity": .525
	},
	{
		"id": "n8n-nodes-base.googleAds",
		"popularity": .528
	},
	{
		"id": "n8n-nodes-base.sendInBlue",
		"popularity": .558
	},
	{
		"id": "n8n-nodes-base.mondayCom",
		"popularity": .613
	},
	{
		"id": "n8n-nodes-base.pipedrive",
		"popularity": .615
	},
	{
		"id": "n8n-nodes-base.asana",
		"popularity": .581
	},
	{
		"id": "n8n-nodes-base.todoistTool",
		"popularity": .456
	},
	{
		"id": "n8n-nodes-base.dhl",
		"popularity": .461
	},
	{
		"id": "n8n-nodes-base.jwt",
		"popularity": .5
	},
	{
		"id": "n8n-nodes-base.clickUpTrigger",
		"popularity": .557
	},
	{
		"id": "n8n-nodes-base.git",
		"popularity": .509
	},
	{
		"id": "n8n-nodes-base.togglTrigger",
		"popularity": .479
	},
	{
		"id": "n8n-nodes-base.microsoftSqlTool",
		"popularity": .515
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverMultiQuery",
		"popularity": .487
	},
	{
		"id": "n8n-nodes-base.graphql",
		"popularity": .529
	},
	{
		"id": "n8n-nodes-base.odooTool",
		"popularity": .472
	},
	{
		"id": "n8n-nodes-base.zohoCrm",
		"popularity": .55
	},
	{
		"id": "n8n-nodes-upload-post.uploadPost",
		"popularity": .526
	},
	{
		"id": "n8n-nodes-base.hackerNewsTool",
		"popularity": .472
	},
	{
		"id": "n8n-nodes-base.stripe",
		"popularity": .521
	},
	{
		"id": "n8n-nodes-base.phantombuster",
		"popularity": .475
	},
	{
		"id": "n8n-nodes-base.wooCommerce",
		"popularity": .56
	},
	{
		"id": "@nskha/n8n-nodes-scrappey.scrappey",
		"popularity": .41
	},
	{
		"id": "n8n-nodes-base.hubspotTool",
		"popularity": .5
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreMilvus",
		"popularity": .472
	},
	{
		"id": "n8n-nodes-base.microsoftSharePointTool",
		"popularity": .481
	},
	{
		"id": "n8n-nodes-instantly.instantly",
		"popularity": .499
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverWorkflow",
		"popularity": .487
	},
	{
		"id": "n8n-nodes-base.elasticsearch",
		"popularity": .441
	},
	{
		"id": "n8n-nodes-base.deepL",
		"popularity": .475
	},
	{
		"id": "@cloudconvert/n8n-nodes-cloudconvert.cloudConvert",
		"popularity": .518
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatVercelAiGateway",
		"popularity": .497
	},
	{
		"id": "n8n-nodes-base.googleTasksTool",
		"popularity": .547
	},
	{
		"id": "n8n-nodes-base.googleFirebaseCloudFirestore",
		"popularity": .556
	},
	{
		"id": "n8n-nodes-base.twitterTool",
		"popularity": .464
	},
	{
		"id": "n8n-nodes-base.sendGrid",
		"popularity": .499
	},
	{
		"id": "n8n-nodes-base.shopifyTool",
		"popularity": .519
	},
	{
		"id": "n8n-nodes-base.jinaAi",
		"popularity": .496
	},
	{
		"id": "n8n-nodes-base.baserowTool",
		"popularity": .453
	},
	{
		"id": "n8n-nodes-base.todoist",
		"popularity": .538
	},
	{
		"id": "n8n-nodes-base.wooCommerceTool",
		"popularity": .458
	},
	{
		"id": "n8n-nodes-base.wordpressTool",
		"popularity": .504
	},
	{
		"id": "n8n-nodes-base.mailgun",
		"popularity": .482
	},
	{
		"id": "n8n-nodes-base.stripeTrigger",
		"popularity": .52
	},
	{
		"id": "n8n-nodes-base.nextCloud",
		"popularity": .575
	},
	{
		"id": "n8n-nodes-base.webflow",
		"popularity": .478
	},
	{
		"id": "n8n-nodes-base.quickbooksTool",
		"popularity": .451
	},
	{
		"id": "n8n-nodes-base.googleAdsTool",
		"popularity": .421
	},
	{
		"id": "n8n-nodes-base.graphDbTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.figmaTrigger",
		"popularity": .429
	},
	{
		"id": "n8n-nodes-base.googleCloudStorage",
		"popularity": .538
	},
	{
		"id": "n8n-nodes-base.mattermost",
		"popularity": .491
	},
	{
		"id": "n8n-nodes-base.spotify",
		"popularity": .52
	},
	{
		"id": "n8n-nodes-base.googleChatTool",
		"popularity": .461
	},
	{
		"id": "n8n-nodes-base.activeCampaign",
		"popularity": .515
	},
	{
		"id": "n8n-nodes-base.gitlab",
		"popularity": .502
	},
	{
		"id": "n8n-nodes-base.gitlabTrigger",
		"popularity": .474
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolSearXng",
		"popularity": .49
	},
	{
		"id": "n8n-nodes-base.jotFormTrigger",
		"popularity": .5
	},
	{
		"id": "n8n-nodes-pdfvector.pdfVector",
		"popularity": .462
	},
	{
		"id": "n8n-nodes-base.redisTool",
		"popularity": .495
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsMistralCloud",
		"popularity": .503
	},
	{
		"id": "n8n-nodes-base.microsoftOneDriveTool",
		"popularity": .492
	},
	{
		"id": "n8n-nodes-base.mqttTrigger",
		"popularity": .485
	},
	{
		"id": "n8n-nodes-base.mongoDbTool",
		"popularity": .492
	},
	{
		"id": "n8n-nodes-base.airtop",
		"popularity": .557
	},
	{
		"id": "n8n-nodes-base.homeAssistantTool",
		"popularity": .491
	},
	{
		"id": "n8n-nodes-scrape-creators.scrapeCreators",
		"popularity": .445
	},
	{
		"id": "n8n-nodes-htmlcsstoimage.htmlCssToImage",
		"popularity": .453
	},
	{
		"id": "n8n-nodes-pdf4me.PDF4me",
		"popularity": .477
	},
	{
		"id": "n8n-nodes-base.spotifyTool",
		"popularity": .466
	},
	{
		"id": "n8n-nodes-base.mqtt",
		"popularity": .484
	},
	{
		"id": "n8n-nodes-base.googleTranslateTool",
		"popularity": .451
	},
	{
		"id": "n8n-nodes-base.cryptoTool",
		"popularity": .4
	},
	{
		"id": "n8n-nodes-base.appIconTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.calendlyTrigger",
		"popularity": .538
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfileTrigger",
		"popularity": .449
	},
	{
		"id": "@apify/n8n-nodes-apify.apifyTrigger",
		"popularity": .444
	},
	{
		"id": "n8n-nodes-base.mailchimp",
		"popularity": .497
	},
	{
		"id": "n8n-nodes-base.messageBird",
		"popularity": .44
	},
	{
		"id": "n8n-nodes-base.linear",
		"popularity": .466
	},
	{
		"id": "n8n-nodes-base.activeCampaignTrigger",
		"popularity": .369
	},
	{
		"id": "n8n-nodes-base.coinGeckoTool",
		"popularity": .398
	},
	{
		"id": "n8n-nodes-base.grafana",
		"popularity": .427
	},
	{
		"id": "n8n-nodes-base.grafanaTool",
		"popularity": .357
	},
	{
		"id": "n8n-nodes-base.zoomTool",
		"popularity": .376
	},
	{
		"id": "n8n-nodes-base.dropboxTool",
		"popularity": .425
	},
	{
		"id": "n8n-nodes-base.gSuiteAdmin",
		"popularity": .482
	},
	{
		"id": "n8n-nodes-base.awsTextract",
		"popularity": .419
	},
	{
		"id": "n8n-nodes-base.awsTranscribe",
		"popularity": .385
	},
	{
		"id": "@n8n/n8n-nodes-langchain.documentGithubLoader",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.asanaTrigger",
		"popularity": .47
	},
	{
		"id": "n8n-nodes-postiz.postiz",
		"popularity": .469
	},
	{
		"id": "n8n-nodes-base.googleBigQueryTool",
		"popularity": .442
	},
	{
		"id": "n8n-nodes-base.ldap",
		"popularity": .468
	},
	{
		"id": "n8n-nodes-base.xero",
		"popularity": .472
	},
	{
		"id": "n8n-nodes-base.adalo",
		"popularity": .412
	},
	{
		"id": "n8n-nodes-base.kafkaTrigger",
		"popularity": .428
	},
	{
		"id": "n8n-nodes-base.salesforceTool",
		"popularity": .441
	},
	{
		"id": "n8n-nodes-autocalls.autocalls",
		"popularity": .413
	},
	{
		"id": "n8n-nodes-base.bubble",
		"popularity": .46
	},
	{
		"id": "n8n-nodes-base.acuitySchedulingTrigger",
		"popularity": .426
	},
	{
		"id": "n8n-nodes-base.nextCloudTool",
		"popularity": .409
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreWeaviate",
		"popularity": .436
	},
	{
		"id": "n8n-nodes-base.deepLTool",
		"popularity": .383
	},
	{
		"id": "n8n-nodes-base.affinity",
		"popularity": .414
	},
	{
		"id": "n8n-nodes-base.nocoDbTool",
		"popularity": .455
	},
	{
		"id": "n8n-nodes-base.metabase",
		"popularity": .453
	},
	{
		"id": "n8n-nodes-base.awsDynamoDb",
		"popularity": .438
	},
	{
		"id": "n8n-nodes-base.elasticsearchTool",
		"popularity": .408
	},
	{
		"id": "@brightdata/n8n-nodes-brightdata.brightData",
		"popularity": .441
	},
	{
		"id": "n8n-nodes-pdforge.pdforge",
		"popularity": .367
	},
	{
		"id": "n8n-nodes-base.serviceNow",
		"popularity": .459
	},
	{
		"id": "n8n-nodes-base.cloudflare",
		"popularity": .382
	},
	{
		"id": "n8n-nodes-base.webflowTrigger",
		"popularity": .415
	},
	{
		"id": "n8n-nodes-base.highLevelTool",
		"popularity": .448
	},
	{
		"id": "n8n-nodes-base.gitlabTool",
		"popularity": .438
	},
	{
		"id": "n8n-nodes-base.googleFirebaseCloudFirestoreTool",
		"popularity": .414
	},
	{
		"id": "n8n-nodes-base.mistralAiTool",
		"popularity": .426
	},
	{
		"id": "n8n-nodes-base.quickChartTool",
		"popularity": .402
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfileTool",
		"popularity": .379
	},
	{
		"id": "n8n-nodes-base.cloudflareTool",
		"popularity": .397
	},
	{
		"id": "n8n-nodes-base.marketstack",
		"popularity": .372
	},
	{
		"id": "n8n-nodes-base.lineTool",
		"popularity": .398
	},
	{
		"id": "n8n-nodes-base.agileCrm",
		"popularity": .394
	},
	{
		"id": "n8n-nodes-base.urlScanIoTool",
		"popularity": .283
	},
	{
		"id": "n8n-nodes-base.asanaTool",
		"popularity": .443
	},
	{
		"id": "n8n-nodes-base.mailcheck",
		"popularity": .408
	},
	{
		"id": "n8n-nodes-documentero.documentero",
		"popularity": .414
	},
	{
		"id": "n8n-nodes-base.zohoCrmTool",
		"popularity": .443
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmCohere",
		"popularity": .424
	},
	{
		"id": "n8n-nodes-base.webflowTool",
		"popularity": .396
	},
	{
		"id": "n8n-nodes-base.pipedriveTrigger",
		"popularity": .445
	},
	{
		"id": "n8n-nodes-base.pushbullet",
		"popularity": .356
	},
	{
		"id": "n8n-nodes-base.kafka",
		"popularity": .432
	},
	{
		"id": "n8n-nodes-base.awsS3Tool",
		"popularity": .41
	},
	{
		"id": "n8n-nodes-base.apiTemplateIo",
		"popularity": .428
	},
	{
		"id": "n8n-nodes-base.gitTool",
		"popularity": .399
	},
	{
		"id": "n8n-nodes-base.urlScanIo",
		"popularity": .419
	},
	{
		"id": "n8n-nodes-base.sms77",
		"popularity": .334
	},
	{
		"id": "n8n-nodes-base.oneSimpleApiTool",
		"popularity": .382
	},
	{
		"id": "n8n-nodes-base.googleCloudStorageTool",
		"popularity": .397
	},
	{
		"id": "n8n-nodes-base.erpNext",
		"popularity": .431
	},
	{
		"id": "n8n-nodes-base.microsoftToDoTool",
		"popularity": .405
	},
	{
		"id": "n8n-nodes-base.googleFirebaseRealtimeDatabase",
		"popularity": .393
	},
	{
		"id": "n8n-nodes-base.medium",
		"popularity": .383
	},
	{
		"id": "n8n-nodes-base.gotify",
		"popularity": .406
	},
	{
		"id": "n8n-nodes-base.awsSnsTrigger",
		"popularity": .315
	},
	{
		"id": "n8n-nodes-base.splunk",
		"popularity": .357
	},
	{
		"id": "n8n-nodes-chat-data.chatData",
		"popularity": .341
	},
	{
		"id": "n8n-nodes-base.wise",
		"popularity": .355
	},
	{
		"id": "n8n-nodes-base.microsoftEntra",
		"popularity": .471
	},
	{
		"id": "n8n-nodes-base.hunter",
		"popularity": .476
	},
	{
		"id": "n8n-nodes-base.bannerbear",
		"popularity": .407
	},
	{
		"id": "n8n-nodes-base.zammad",
		"popularity": .441
	},
	{
		"id": "n8n-nodes-base.microsoftDynamicsCrm",
		"popularity": .391
	},
	{
		"id": "n8n-nodes-base.mautic",
		"popularity": .458
	},
	{
		"id": "n8n-nodes-base.lemlist",
		"popularity": .418
	},
	{
		"id": "n8n-nodes-base.amqp",
		"popularity": .343
	},
	{
		"id": "n8n-nodes-heyreach.heyReach",
		"popularity": .428
	},
	{
		"id": "n8n-nodes-mallabe-images.mallabeImages",
		"popularity": .326
	},
	{
		"id": "n8n-nodes-base.linearTool",
		"popularity": .382
	},
	{
		"id": "n8n-nodes-base.flow",
		"popularity": .348
	},
	{
		"id": "n8n-nodes-craftmypdf.craftMyPdf",
		"popularity": .329
	},
	{
		"id": "n8n-nodes-base.zendeskTool",
		"popularity": .372
	},
	{
		"id": "n8n-nodes-scrapeless.scrapeless",
		"popularity": .31
	},
	{
		"id": "n8n-nodes-base.coda",
		"popularity": .414
	},
	{
		"id": "n8n-nodes-base.awsSqs",
		"popularity": .383
	},
	{
		"id": "n8n-nodes-base.affinityTrigger",
		"popularity": .338
	},
	{
		"id": "n8n-nodes-base.ghost",
		"popularity": .373
	},
	{
		"id": "n8n-nodes-base.freshserviceTool",
		"popularity": .338
	},
	{
		"id": "n8n-nodes-supadata.supadata",
		"popularity": .406
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWolframAlpha",
		"popularity": .34
	},
	{
		"id": "n8n-nodes-base.microsoftGraphSecurity",
		"popularity": .359
	},
	{
		"id": "n8n-nodes-base.bambooHr",
		"popularity": .382
	},
	{
		"id": "n8n-nodes-base.freshdeskTool",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-base.bubbleTool",
		"popularity": .325
	},
	{
		"id": "n8n-nodes-base.mindee",
		"popularity": .362
	},
	{
		"id": "n8n-nodes-base.microsoftDynamicsCrmTool",
		"popularity": .335
	},
	{
		"id": "n8n-nodes-base.clockifyTool",
		"popularity": .305
	},
	{
		"id": "n8n-nodes-base.affinityTool",
		"popularity": .346
	},
	{
		"id": "n8n-nodes-base.gumroadTrigger",
		"popularity": .35
	},
	{
		"id": "n8n-nodes-base.jwtTool",
		"popularity": .3
	},
	{
		"id": "n8n-nodes-ticktick.tickTick",
		"popularity": .419
	},
	{
		"id": "n8n-nodes-fillout.filloutTrigger",
		"popularity": .385
	},
	{
		"id": "n8n-nodes-base.invoiceNinja",
		"popularity": .398
	},
	{
		"id": "n8n-nodes-base.humanticAiTool",
		"popularity": .348
	},
	{
		"id": "n8n-nodes-base.autopilotTool",
		"popularity": .329
	},
	{
		"id": "n8n-nodes-base.strapi",
		"popularity": .369
	},
	{
		"id": "@langfuse/n8n-nodes-langfuse.langfuse",
		"popularity": .371
	},
	{
		"id": "n8n-nodes-base.getResponseTool",
		"popularity": .303
	},
	{
		"id": "n8n-nodes-base.jenkinsTool",
		"popularity": .303
	},
	{
		"id": "n8n-nodes-base.googleBooksTool",
		"popularity": .313
	},
	{
		"id": "n8n-nodes-base.mailchimpTool",
		"popularity": .33
	},
	{
		"id": "n8n-nodes-base.awsLambdaTool",
		"popularity": .338
	},
	{
		"id": "n8n-nodes-base.phantombusterTool",
		"popularity": .359
	},
	{
		"id": "n8n-nodes-base.metabaseTool",
		"popularity": .31
	},
	{
		"id": "n8n-nodes-base.messageBirdTool",
		"popularity": .358
	},
	{
		"id": "n8n-nodes-superchat.superchat",
		"popularity": .419
	},
	{
		"id": "n8n-nodes-base.gSuiteAdminTool",
		"popularity": .371
	},
	{
		"id": "n8n-nodes-base.agileCrmTool",
		"popularity": .311
	},
	{
		"id": "n8n-nodes-base.googleCloudNaturalLanguage",
		"popularity": .362
	},
	{
		"id": "@infobip/n8n-nodes-infobip-api.infobipApi",
		"popularity": .289
	},
	{
		"id": "n8n-nodes-inoreader.inoreader",
		"popularity": .327
	},
	{
		"id": "n8n-nodes-base.convertKitTool",
		"popularity": .342
	},
	{
		"id": "n8n-nodes-base.compressionTool",
		"popularity": .353
	},
	{
		"id": "n8n-nodes-base.bitly",
		"popularity": .321
	},
	{
		"id": "n8n-nodes-base.clockify",
		"popularity": .416
	},
	{
		"id": "n8n-nodes-base.microsoftEntraTool",
		"popularity": .331
	},
	{
		"id": "n8n-nodes-base.magento2",
		"popularity": .369
	},
	{
		"id": "n8n-nodes-base.serviceNowTool",
		"popularity": .345
	},
	{
		"id": "n8n-nodes-base.freshservice",
		"popularity": .407
	},
	{
		"id": "n8n-nodes-base.clearbit",
		"popularity": .305
	},
	{
		"id": "n8n-nodes-base.stravaTool",
		"popularity": .353
	},
	{
		"id": "n8n-nodes-base.intercom",
		"popularity": .385
	},
	{
		"id": "n8n-nodes-base.snowflakeTool",
		"popularity": .353
	},
	{
		"id": "n8n-nodes-base.getResponse",
		"popularity": .357
	},
	{
		"id": "n8n-nodes-base.bitwardenTool",
		"popularity": .338
	},
	{
		"id": "n8n-nodes-base.payPalTrigger",
		"popularity": .355
	},
	{
		"id": "n8n-nodes-base.mailerLite",
		"popularity": .42
	},
	{
		"id": "n8n-nodes-anchorbrowser.anchorBrowser",
		"popularity": .453
	},
	{
		"id": "n8n-nodes-base.activeCampaignTool",
		"popularity": .341
	},
	{
		"id": "n8n-nodes-base.nasaTool",
		"popularity": .338
	},
	{
		"id": "n8n-nodes-base.invoiceNinjaTool",
		"popularity": .343
	},
	{
		"id": "n8n-nodes-base.bitwarden",
		"popularity": .352
	},
	{
		"id": "@gotohuman/n8n-nodes-gotohuman.gotoHuman",
		"popularity": .341
	},
	{
		"id": "n8n-nodes-base.sendInBlueTool",
		"popularity": .367
	},
	{
		"id": "n8n-nodes-base.mqttTool",
		"popularity": .322
	},
	{
		"id": "n8n-nodes-base.pushoverTool",
		"popularity": .501
	},
	{
		"id": "n8n-nodes-scraping-dog.scrapingDog",
		"popularity": .254
	},
	{
		"id": "n8n-nodes-base.uptimeRobot",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.theHiveProject",
		"popularity": .326
	},
	{
		"id": "n8n-nodes-base.npmTool",
		"popularity": .265
	},
	{
		"id": "n8n-nodes-base.ldapTool",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.xeroTool",
		"popularity": .271
	},
	{
		"id": "n8n-nodes-base.googleBooks",
		"popularity": .269
	},
	{
		"id": "n8n-nodes-base.dropcontact",
		"popularity": .278
	},
	{
		"id": "n8n-nodes-base.plivo",
		"popularity": .263
	},
	{
		"id": "n8n-nodes-base.openThesaurus",
		"popularity": .252
	},
	{
		"id": "n8n-nodes-yepcode.yepCode",
		"popularity": .259
	},
	{
		"id": "n8n-nodes-base.discourse",
		"popularity": .294
	},
	{
		"id": "n8n-nodes-base.compression",
		"popularity": .603
	},
	{
		"id": "n8n-nodes-cloudinary.cloudinary",
		"popularity": .558
	},
	{
		"id": "n8n-nodes-base.marketstackTool",
		"popularity": .58
	},
	{
		"id": "@pinecone-database/n8n-nodes-pinecone-assistant.pineconeAssistant",
		"popularity": .426
	},
	{
		"id": "n8n-nodes-base.travisCiTool",
		"popularity": .383
	},
	{
		"id": "n8n-nodes-base.gong",
		"popularity": .383
	},
	{
		"id": "n8n-nodes-base.sentryIo",
		"popularity": .362
	},
	{
		"id": "n8n-nodes-screenshotbase.screenshotBase",
		"popularity": .341
	},
	{
		"id": "n8n-nodes-base.sendInBlueTrigger",
		"popularity": .358
	},
	{
		"id": "n8n-nodes-1shot.oneShot",
		"popularity": .329
	},
	{
		"id": "n8n-nodes-base.ciscoWebex",
		"popularity": .348
	},
	{
		"id": "n8n-nodes-base.azureCosmosDb",
		"popularity": .394
	},
	{
		"id": "n8n-nodes-base.upleadTool",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-base.npm",
		"popularity": .323
	},
	{
		"id": "@cloudsway-ai/n8n-nodes-cloudsway.smartSearch",
		"popularity": .31
	},
	{
		"id": "n8n-nodes-base.adaloTool",
		"popularity": .309
	},
	{
		"id": "n8n-nodes-base.haloPSA",
		"popularity": .384
	},
	{
		"id": "n8n-nodes-base.convertKit",
		"popularity": .341
	},
	{
		"id": "n8n-nodes-softr.softr",
		"popularity": .409
	},
	{
		"id": "n8n-nodes-base.mattermostTool",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-base.mediumTool",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.contentfulTool",
		"popularity": .299
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectDatacenterTool",
		"popularity": .288
	},
	{
		"id": "@decodo/n8n-nodes-decodo.decodo",
		"popularity": .317
	},
	{
		"id": "@scrapeops/n8n-nodes-scrapeops.ScrapeOps",
		"popularity": .303
	},
	{
		"id": "n8n-nodes-base.harvest",
		"popularity": .344
	},
	{
		"id": "n8n-nodes-base.rundeck",
		"popularity": .299
	},
	{
		"id": "n8n-nodes-base.matrixTool",
		"popularity": .306
	},
	{
		"id": "n8n-nodes-base.uproc",
		"popularity": .303
	},
	{
		"id": "n8n-nodes-base.cortex",
		"popularity": .276
	},
	{
		"id": "n8n-nodes-base.awsCertificateManager",
		"popularity": .238
	},
	{
		"id": "n8n-nodes-base.boxTrigger",
		"popularity": .318
	},
	{
		"id": "n8n-nodes-base.mailgunTool",
		"popularity": .288
	},
	{
		"id": "n8n-nodes-base.netlify",
		"popularity": .303
	},
	{
		"id": "n8n-nodes-base.freshworksCrmTool",
		"popularity": .241
	},
	{
		"id": "n8n-nodes-base.securityScorecardTool",
		"popularity": .229
	},
	{
		"id": "n8n-nodes-base.getResponseTrigger",
		"popularity": .222
	},
	{
		"id": "n8n-nodes-base.autopilot",
		"popularity": .283
	},
	{
		"id": "n8n-nodes-base.pushcut",
		"popularity": .289
	},
	{
		"id": "n8n-nodes-base.mailchimpTrigger",
		"popularity": .327
	},
	{
		"id": "n8n-nodes-base.postHog",
		"popularity": .321
	},
	{
		"id": "n8n-nodes-base.awsRekognition",
		"popularity": .31
	},
	{
		"id": "n8n-nodes-fullenrich.fullEnrich",
		"popularity": .304
	},
	{
		"id": "n8n-nodes-kipps.kippsAiChatbot",
		"popularity": .304
	},
	{
		"id": "n8n-nodes-mailtrap.mailtrap",
		"popularity": .305
	},
	{
		"id": "n8n-nodes-base.bitlyTool",
		"popularity": .276
	},
	{
		"id": "n8n-nodes-base.splunkTool",
		"popularity": .285
	},
	{
		"id": "n8n-nodes-base.awsCognito",
		"popularity": .306
	},
	{
		"id": "n8n-nodes-base.ciscoWebexTool",
		"popularity": .305
	},
	{
		"id": "n8n-nodes-base.surveyMonkeyTrigger",
		"popularity": .296
	},
	{
		"id": "n8n-nodes-base.contentful",
		"popularity": .316
	},
	{
		"id": "n8n-nodes-base.bambooHrTool",
		"popularity": .254
	},
	{
		"id": "n8n-nodes-base.ciscoWebexTrigger",
		"popularity": .306
	},
	{
		"id": "n8n-nodes-base.mauticTrigger",
		"popularity": .282
	},
	{
		"id": "n8n-nodes-skyvern.skyvern",
		"popularity": .302
	},
	{
		"id": "n8n-nodes-base.awsComprehend",
		"popularity": .265
	},
	{
		"id": "n8n-nodes-fluentc.fluentCTranslate",
		"popularity": .261
	},
	{
		"id": "n8n-nodes-base.sendGridTool",
		"popularity": .275
	},
	{
		"id": "n8n-nodes-shortio.Shortio",
		"popularity": .283
	},
	{
		"id": "n8n-nodes-base.msg91",
		"popularity": .296
	},
	{
		"id": "n8n-nodes-base.awsSns",
		"popularity": .298
	},
	{
		"id": "n8n-nodes-addtowallet.addToWallet",
		"popularity": .256
	},
	{
		"id": "n8n-nodes-base.postmarkTrigger",
		"popularity": .249
	},
	{
		"id": "n8n-nodes-base.rocketchatTool",
		"popularity": .278
	},
	{
		"id": "n8n-nodes-base.rabbitmqTool",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.postHogTool",
		"popularity": .259
	},
	{
		"id": "n8n-nodes-base.seaTableTool",
		"popularity": .306
	},
	{
		"id": "@globalping/n8n-nodes-globalping.globalping",
		"popularity": .232
	},
	{
		"id": "n8n-nodes-base.totpTool",
		"popularity": .246
	},
	{
		"id": "n8n-nodes-base.oura",
		"popularity": .304
	},
	{
		"id": "@urlbox/n8n-nodes-urlbox.urlbox",
		"popularity": .271
	},
	{
		"id": "n8n-nodes-base.oneSimpleApi",
		"popularity": .229
	},
	{
		"id": "n8n-nodes-base.zulip",
		"popularity": .315
	},
	{
		"id": "@local-falcon/n8n-nodes-localfalcon.localFalcon",
		"popularity": .222
	},
	{
		"id": "n8n-nodes-base.freshworksCrm",
		"popularity": .31
	},
	{
		"id": "n8n-nodes-base.yourlsTool",
		"popularity": .232
	},
	{
		"id": "n8n-nodes-base.chargebeeTool",
		"popularity": .222
	},
	{
		"id": "n8n-nodes-base.loneScaleTool",
		"popularity": .244
	},
	{
		"id": "@digitalocean/n8n-nodes-digitalocean-gradient-serverless-inference.digitalOceanGradientServerlessInference",
		"popularity": .252
	},
	{
		"id": "n8n-nodes-base.customerIo",
		"popularity": .346
	},
	{
		"id": "n8n-nodes-base.mailerLiteTrigger",
		"popularity": .306
	},
	{
		"id": "n8n-nodes-vikunja.vikunja",
		"popularity": .416
	},
	{
		"id": "n8n-nodes-base.hunterTool",
		"popularity": .322
	},
	{
		"id": "n8n-nodes-templated.templated",
		"popularity": .348
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreChromaDB",
		"popularity": .363
	},
	{
		"id": "n8n-nodes-base.clockifyTrigger",
		"popularity": .305
	},
	{
		"id": "n8n-nodes-base.ghostTool",
		"popularity": .333
	},
	{
		"id": "n8n-nodes-base.awsIam",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-docugenerate.docuGenerate",
		"popularity": .31
	},
	{
		"id": "n8n-nodes-base.lemlistTrigger",
		"popularity": .392
	},
	{
		"id": "n8n-nodes-base.raindrop",
		"popularity": .359
	},
	{
		"id": "n8n-nodes-base.intercomTool",
		"popularity": .292
	},
	{
		"id": "n8n-nodes-base.yourls",
		"popularity": .291
	},
	{
		"id": "n8n-nodes-base.Brandfetch",
		"popularity": .292
	},
	{
		"id": "n8n-nodes-base.okta",
		"popularity": .35
	},
	{
		"id": "n8n-nodes-base.pagerDuty",
		"popularity": .341
	},
	{
		"id": "n8n-nodes-base.codaTool",
		"popularity": .282
	},
	{
		"id": "n8n-nodes-base.BrandfetchTool",
		"popularity": .252
	},
	{
		"id": "n8n-nodes-ipgeolocation.ipgeolocation",
		"popularity": .249
	},
	{
		"id": "@zohomail/n8n-nodes-zohocalendar.zohoCalendar",
		"popularity": .244
	},
	{
		"id": "n8n-nodes-cyberpulse-compliance-dev.cyberPulseCompliance",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-alive5.alive5",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-diviup-connect.diviUpConnect",
		"popularity": .19
	},
	{
		"id": "n8n-nodes-mrscraper.mrscraper",
		"popularity": .184
	},
	{
		"id": "n8n-nodes-nedzo.nedzo",
		"popularity": .177
	},
	{
		"id": "@port-labs/n8n-nodes-portio-experimental.portApiAi",
		"popularity": .214
	},
	{
		"id": "n8n-nodes-pubnub.pubNub",
		"popularity": .17
	},
	{
		"id": "@securevector/n8n-nodes-securevector.secureVector",
		"popularity": .144
	},
	{
		"id": "n8n-nodes-craft.craft",
		"popularity": .195
	},
	{
		"id": "n8n-nodes-base.crowdDevTool",
		"popularity": 0
	},
	{
		"id": "@bedrijfsdatanl/n8n-nodes-bedrijfsdata.bedrijfsdata",
		"popularity": .241
	},
	{
		"id": "n8n-nodes-base.koBoToolboxTool",
		"popularity": .17
	},
	{
		"id": "n8n-nodes-base.pushcutTool",
		"popularity": .133
	},
	{
		"id": "@handelsregister/n8n-nodes-handelsregister-ai.handelsregisterAi",
		"popularity": .205
	},
	{
		"id": "n8n-nodes-base.signl4Tool",
		"popularity": .133
	},
	{
		"id": "n8n-nodes-base.salesmate",
		"popularity": .17
	},
	{
		"id": "n8n-nodes-base.mandrillTool",
		"popularity": .119
	},
	{
		"id": "n8n-nodes-base.disqus",
		"popularity": .119
	},
	{
		"id": "n8n-nodes-base.egoiTool",
		"popularity": .103
	},
	{
		"id": "n8n-nodes-dalil-ai.dalilAi",
		"popularity": .081
	},
	{
		"id": "n8n-nodes-streak-crm.streak",
		"popularity": .205
	},
	{
		"id": "n8n-nodes-taddy.taddyApi",
		"popularity": .103
	},
	{
		"id": "n8n-nodes-base.spontit",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.kitemakerTool",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chatTrigger",
		"popularity": .948
	},
	{
		"id": "n8n-nodes-base.whatsAppHitlTool",
		"popularity": .452
	},
	{
		"id": "n8n-nodes-base.driftTool",
		"popularity": .276
	},
	{
		"id": "n8n-nodes-vikunja.vikunjaTrigger",
		"popularity": .296
	},
	{
		"id": "n8n-nodes-base.elasticSecurity",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-base.stackby",
		"popularity": .261
	},
	{
		"id": "@apaleo/n8n-nodes-apaleo-official.apaleo",
		"popularity": .291
	},
	{
		"id": "n8n-nodes-base.wekan",
		"popularity": .261
	},
	{
		"id": "n8n-nodes-base.netlifyTool",
		"popularity": .195
	},
	{
		"id": "@nuelink/n8n-nodes-nuelink.nuelink",
		"popularity": .229
	},
	{
		"id": "n8n-nodes-base.taigaTool",
		"popularity": .21
	},
	{
		"id": "n8n-nodes-krispcall.krispcall",
		"popularity": .177
	},
	{
		"id": "n8n-nodes-base.twist",
		"popularity": .205
	},
	{
		"id": "n8n-nodes-businessmap.businessmap",
		"popularity": .269
	},
	{
		"id": "n8n-nodes-joggai.joggAiNode",
		"popularity": .235
	},
	{
		"id": "@copicake/n8n-nodes-copicake.copicake",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-base.theHiveProjectTool",
		"popularity": .154
	},
	{
		"id": "n8n-nodes-logsnag.LogSnag",
		"popularity": .144
	},
	{
		"id": "n8n-nodes-base.pushcutTrigger",
		"popularity": .119
	},
	{
		"id": "n8n-nodes-base.twistTool",
		"popularity": .119
	},
	{
		"id": "n8n-nodes-base.salesmateTool",
		"popularity": .119
	},
	{
		"id": "n8n-nodes-base.travisCi",
		"popularity": .103
	},
	{
		"id": "n8n-nodes-klicktipp.klicktippTrigger",
		"popularity": .144
	},
	{
		"id": "n8n-nodes-blue.blue",
		"popularity": .144
	},
	{
		"id": "n8n-nodes-straker-verify.strakerVerify",
		"popularity": .119
	},
	{
		"id": "n8n-nodes-understandtechchat.understandTechChat",
		"popularity": .133
	},
	{
		"id": "n8n-nodes-webmetic.webmetic",
		"popularity": .051
	},
	{
		"id": "n8n-nodes-base.uprocTool",
		"popularity": .051
	},
	{
		"id": "n8n-nodes-base.microsoftOutlookHitlTool",
		"popularity": .392
	},
	{
		"id": "n8n-nodes-apex.apex",
		"popularity": .051
	},
	{
		"id": "n8n-nodes-base.googleChatHitlTool",
		"popularity": .377
	},
	{
		"id": "n8n-nodes-triggercmd.triggercmd",
		"popularity": .373
	},
	{
		"id": "n8n-nodes-exa-official.exa",
		"popularity": .386
	},
	{
		"id": "n8n-nodes-parallel.parallel",
		"popularity": .282
	},
	{
		"id": "n8n-nodes-base.uplead",
		"popularity": .254
	},
	{
		"id": "n8n-nodes-base.seaTableTrigger",
		"popularity": .273
	},
	{
		"id": "n8n-nodes-base.keap",
		"popularity": .294
	},
	{
		"id": "n8n-nodes-beyondpresence.beyondPresence",
		"popularity": .291
	},
	{
		"id": "n8n-nodes-base.segmentTool",
		"popularity": .214
	},
	{
		"id": "n8n-nodes-base.demioTool",
		"popularity": .214
	},
	{
		"id": "n8n-nodes-base.copperTool",
		"popularity": .238
	},
	{
		"id": "n8n-nodes-base.stackbyTool",
		"popularity": .19
	},
	{
		"id": "n8n-nodes-base.drift",
		"popularity": .184
	},
	{
		"id": "n8n-nodes-dart.dart",
		"popularity": .21
	},
	{
		"id": "n8n-nodes-base.quickbaseTool",
		"popularity": .19
	},
	{
		"id": "n8n-nodes-parseur.parseurTrigger",
		"popularity": .154
	},
	{
		"id": "n8n-nodes-base.theHiveProjectTrigger",
		"popularity": .195
	},
	{
		"id": "n8n-nodes-matrix42.matrix42",
		"popularity": .238
	},
	{
		"id": "n8n-nodes-gainium.Gainium",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-base.tapfiliateTool",
		"popularity": .144
	},
	{
		"id": "n8n-nodes-authentica.authentica",
		"popularity": .154
	},
	{
		"id": "n8n-nodes-base.theHiveTrigger",
		"popularity": .214
	},
	{
		"id": "n8n-nodes-velatir.velatir",
		"popularity": .195
	},
	{
		"id": "n8n-nodes-base.emelia",
		"popularity": .154
	},
	{
		"id": "n8n-nodes-raia.raia",
		"popularity": .195
	},
	{
		"id": "n8n-nodes-outgrow.outgrowTrigger",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-base.egoi",
		"popularity": .133
	},
	{
		"id": "n8n-nodes-base.crowdDev",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-simplified.simplified",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatLemonade",
		"popularity": .482
	},
	{
		"id": "n8n-nodes-base.oracleDatabaseTool",
		"popularity": .414
	},
	{
		"id": "n8n-nodes-base.tapfiliate",
		"popularity": .119
	},
	{
		"id": "n8n-nodes-ikas.ikas",
		"popularity": .232
	},
	{
		"id": "@geocapture/n8n-nodes-geocapture.geocapture",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-pdf4me.pdf4me",
		"popularity": .119
	},
	{
		"id": "n8n-nodes-base.copperTrigger",
		"popularity": .184
	},
	{
		"id": "@orq-ai/n8n-nodes-orq.orqDeployment",
		"popularity": .184
	},
	{
		"id": "n8n-nodes-base.libreNmsTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.keapTool",
		"popularity": .119
	},
	{
		"id": "@bedrijfsdatanl/n8n-nodes-prospectpro.prospectpro",
		"popularity": .177
	},
	{
		"id": "@n8n/n8n-nodes-langchain.documentBinaryInputLoader",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.fortinetTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-jigsawstack.jigsawStack",
		"popularity": .244
	},
	{
		"id": "n8n-nodes-base.e2eTest",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.youTubeSearchTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.odooCustomToolTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.twakeTool",
		"popularity": .081
	},
	{
		"id": "n8n-nodes-base.orbit",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.htmlExtract",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.squareTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.wakebDvsTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.loneScaleTrigger",
		"popularity": .103
	},
	{
		"id": "n8n-nodes-base.olhoVivoTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.mcpClientTool",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGooglePalm",
		"popularity": .103
	},
	{
		"id": "n8n-nodes-base.vero",
		"popularity": .081
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolHttpRequest",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreSupabaseLoad",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-signifycrm.signifyCrm",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.linkedinNodeTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-reachkit.reachkit",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.profitWell",
		"popularity": .081
	},
	{
		"id": "n8n-nodes-zigpoll.zigpollTrigger",
		"popularity": .103
	},
	{
		"id": "n8n-nodes-base.arubaCentralv4Tool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.tfusionGenerateTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.setTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.spontitTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.emeliaTrigger",
		"popularity": .081
	},
	{
		"id": "@datafix/n8n-nodes-anthias.anthias",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.kitemaker",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.writeBinaryFile",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.moceanTool",
		"popularity": .081
	},
	{
		"id": "n8n-nodes-base.microsoftTeamsHitlTool",
		"popularity": .33
	},
	{
		"id": "n8n-nodes-payfunnels.payfunnels",
		"popularity": .081
	},
	{
		"id": "n8n-nodes-winston-ai.winstonAi",
		"popularity": .081
	},
	{
		"id": "n8n-nodes-base.dsSearchTool",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.openAiAssistant",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmOpenAi",
		"popularity": .081
	},
	{
		"id": "n8n-nodes-base.spreadsheetFile",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmGooglePalm",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-nimbasms.nimbaSMS",
		"popularity": .21
	},
	{
		"id": "n8n-nodes-base.stickyNote",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.crowdDevTrigger",
		"popularity": .051
	},
	{
		"id": "n8n-nodes-base.profitWellTool",
		"popularity": .051
	},
	{
		"id": "n8n-nodes-targetare.targetareRo",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.jimengAiTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.aimsArticlesTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.lingvaNexTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-referral-factory.referralFactory",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.comfyUITool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.function",
		"popularity": 0
	},
	{
		"id": "@droidrun/n8n-nodes-droidrun.droidrun",
		"popularity": .051
	},
	{
		"id": "n8n-nodes-base.crewAiTool",
		"popularity": 0
	},
	{
		"id": "@steuerboard/n8n-nodes-steuerboard.steuerboard",
		"popularity": .154
	},
	{
		"id": "n8n-nodes-base.smsItTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.workflowTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-hookdeck.hookdeck",
		"popularity": .119
	},
	{
		"id": "n8n-nodes-base.wakebAipTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectCloudTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.influxDbTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.splunkFdjTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.cron",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryChatRetriever",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.customSshTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.readPDF",
		"popularity": 0
	},
	{
		"id": "@thelifeofrishi/n8n-nodes-orshot.orshot",
		"popularity": .263
	},
	{
		"id": "n8n-nodes-carbone.carbone",
		"popularity": .218
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmOllama",
		"popularity": .669
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolVectorStore",
		"popularity": .652
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatMistralCloud",
		"popularity": .66
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryMotorhead",
		"popularity": .622
	},
	{
		"id": "n8n-nodes-base.microsoftOneDriveTrigger",
		"popularity": .544
	},
	{
		"id": "n8n-nodes-tallyforms.tallyTrigger",
		"popularity": .531
	},
	{
		"id": "n8n-nodes-base.oracleDatabase",
		"popularity": .537
	},
	{
		"id": "n8n-nodes-google-search-console.googleSearchConsole",
		"popularity": .505
	},
	{
		"id": "@n8n/n8n-nodes-langchain.documentJsonInputLoader",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-nele-ai.neleAi",
		"popularity": .154
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStorePineconeInsert",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.clickUpTool",
		"popularity": .498
	},
	{
		"id": "n8n-nodes-base.cywareConnectorTool",
		"popularity": 0
	},
	{
		"id": "@pdfgeneratorapi/n8n-nodes-pdf-generator-api.pdfGeneratorApi",
		"popularity": .465
	},
	{
		"id": "@ledgers/n8n-nodes-ledgers-cloud.ledgers",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreRedis",
		"popularity": .452
	},
	{
		"id": "n8n-nodes-featherless.featherless",
		"popularity": .133
	},
	{
		"id": "n8n-nodes-base.googleAnalyticsTool",
		"popularity": .426
	},
	{
		"id": "n8n-nodes-base.guiScriptTool",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-htmlcsstopdf.htmlcsstopdf",
		"popularity": .593
	},
	{
		"id": "n8n-nodes-browseract.browserAct",
		"popularity": .428
	},
	{
		"id": "n8n-nodes-scrapingbee.ScrapingBee",
		"popularity": .43
	},
	{
		"id": "n8n-nodes-pdfmonkey.pdfMonkey",
		"popularity": .426
	},
	{
		"id": "@respond-io/n8n-nodes-respond-io.respondio",
		"popularity": .473
	},
	{
		"id": "n8n-nodes-base.freshdesk",
		"popularity": .461
	},
	{
		"id": "n8n-nodes-human-in-the-loop.hitlNode",
		"popularity": .31
	},
	{
		"id": "n8n-nodes-base.googleFirebaseRealtimeDatabaseTool",
		"popularity": .393
	},
	{
		"id": "@easysoftware/n8n-nodes-easy-redmine.easyRedmine",
		"popularity": .353
	},
	{
		"id": "n8n-nodes-base.onfleetTool",
		"popularity": .119
	},
	{
		"id": "n8n-nodes-base.peekalinkTool",
		"popularity": .252
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsLemonade",
		"popularity": .377
	},
	{
		"id": "@lnkbio/n8n-nodes-lnkbio.lnkBio",
		"popularity": .103
	},
	{
		"id": "@razorpay/n8n-nodes-razorpay.razorpay",
		"popularity": .356
	},
	{
		"id": "n8n-nodes-llmlayer.llmLayer",
		"popularity": .377
	},
	{
		"id": "@exploriumai/n8n-nodes-explorium-ai.exploriumApiNode",
		"popularity": .292
	},
	{
		"id": "@servicem8/n8n-nodes-servicem8.serviceM8",
		"popularity": .422
	},
	{
		"id": "n8n-nodes-sourcegeek.sourcegeek",
		"popularity": .308
	},
	{
		"id": "n8n-nodes-base.mocean",
		"popularity": .081
	},
	{
		"id": "@nvoip/n8n-nodes-nvoip.nvoip",
		"popularity": .222
	},
	{
		"id": "@n8n/n8n-nodes-langchain.documentDefaultDataLoader",
		"popularity": .756
	},
	{
		"id": "n8n-nodes-octavehq.octave",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-meetgeek.meetGeek",
		"popularity": .249
	},
	{
		"id": "@rogerrogerio/n8n-nodes-rogerroger.rogerRoger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-crossmint.crossmintWallets",
		"popularity": .19
	},
	{
		"id": "@n8n/n8n-nodes-langchain.ollama",
		"popularity": .733
	},
	{
		"id": "n8n-nodes-base.veroTool",
		"popularity": .103
	},
	{
		"id": "n8n-nodes-olostep.olostepScrape",
		"popularity": .372
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserItemList",
		"popularity": .692
	},
	{
		"id": "@promptlayer/n8n-nodes-promptlayer-runagent.promptLayerRunAgent",
		"popularity": .348
	},
	{
		"id": "n8n-nodes-base.upGuardTool",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStorePineconeLoad",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-verifiemail.verifiEmail",
		"popularity": .318
	},
	{
		"id": "n8n-nodes-octagon.octagonAgents",
		"popularity": .154
	},
	{
		"id": "n8n-nodes-emailvalidation.emailValidation",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.googlePerspective",
		"popularity": .225
	},
	{
		"id": "n8n-nodes-pagbank-connect.pagBank",
		"popularity": .229
	},
	{
		"id": "n8n-nodes-binalyze-air.air",
		"popularity": .144
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectCloud",
		"popularity": .144
	},
	{
		"id": "@socradar/n8n-nodes-socradar.socradar",
		"popularity": .177
	},
	{
		"id": "n8n-nodes-base.loneScale",
		"popularity": .119
	},
	{
		"id": "n8n-nodes-simla.simlaTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.manualTrigger",
		"popularity": .992
	},
	{
		"id": "@elevenlabs/n8n-nodes-elevenlabs.elevenLabs",
		"popularity": .657
	},
	{
		"id": "n8n-nodes-memara.memara",
		"popularity": .133
	},
	{
		"id": "n8n-nodes-blank.githubIssues",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.n8nTrainingCustomerDatastore",
		"popularity": .616
	},
	{
		"id": "n8n-nodes-base.facebookLeadAdsTrigger",
		"popularity": .593
	},
	{
		"id": "n8n-nodes-base.typeformTrigger",
		"popularity": .551
	},
	{
		"id": "n8n-nodes-qdrant.qdrant",
		"popularity": .585
	},
	{
		"id": "n8n-nodes-base.playwrightBrowserTool",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmLemonade",
		"popularity": .476
	},
	{
		"id": "n8n-nodes-base.httpRequestSignTool",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsAwsBedrock",
		"popularity": .452
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreInMemoryLoad",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.arubaCentralNextGenTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.n8nTrainingCustomeMessenger",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolExecutor",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.simulate",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreSupabaseInsert",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatOpenRouter",
		"popularity": .831
	},
	{
		"id": "n8n-nodes-zohozeptomail.zohoZeptomail",
		"popularity": .39
	},
	{
		"id": "n8n-nodes-base.functionItem",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreInMemoryInsert",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.onlyofficeTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-hubbi.hubbi",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsTensorFlow",
		"popularity": 0
	},
	{
		"id": "@firefliesai/n8n-nodes-fireflies.fireflies",
		"popularity": .489
	},
	{
		"id": "n8n-nodes-base.ciscoFirepowerThreatDefenceTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.apiTemplateIoTool",
		"popularity": .368
	},
	{
		"id": "n8n-nodes-base.coachLmsTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.googleSheets",
		"popularity": .953
	},
	{
		"id": "n8n-nodes-base.serperTool",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreZepLoad",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.arubaCentralTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.loneScaleList",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.arubaClearPassTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-oxylabs-ai-studio.oxylabsAiStudio",
		"popularity": .342
	},
	{
		"id": "n8n-nodes-base.zammadTool",
		"popularity": .275
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreZepInsert",
		"popularity": 0
	},
	{
		"id": "@cometapi-dev/n8n-nodes-cometapi.cometApi",
		"popularity": .269
	},
	{
		"id": "n8n-nodes-base.aimsTokenGenTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.twake",
		"popularity": .154
	},
	{
		"id": "n8n-nodes-jsonpost.jsonPostTrigger",
		"popularity": .256
	},
	{
		"id": "n8n-nodes-base.vkteamsTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.interval",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-orshot.orshot",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.netBoxTool",
		"popularity": 0
	},
	{
		"id": "@joai/n8n-nodes-joai.joai",
		"popularity": .081
	},
	{
		"id": "n8n-nodes-base.springTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.readBinaryFiles",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.start",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-sinergiacrm.sinergiaCrm",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.hapTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.zohoCalendarTool",
		"popularity": 0
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsGooglePalm",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.evaluationMetrics",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.moveBinaryData",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.playwrightScreenshotTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.openAi",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.itemLists",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.gravityApiTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.databricksTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.simulateTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.activationTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.robloxCodeCenterTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.fortimanagerTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-lavatop.lavatop",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-magnetite.magnetite",
		"popularity": .133
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryZep",
		"popularity": .051
	},
	{
		"id": "n8n-nodes-telli.telli",
		"popularity": .144
	},
	{
		"id": "n8n-nodes-base.automizy",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.drapiCalendarTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.waitTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.robloxRosTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.readBinaryFile",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.playwrightPageTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.iCal",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-phacet-official.phacet",
		"popularity": .2
	},
	{
		"id": "n8n-nodes-base.executeWorkflowTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-yourtextguru.yourtextGuru",
		"popularity": .19
	},
	{
		"id": "n8n-nodes-docutray.docutray",
		"popularity": .184
	},
	{
		"id": "n8n-nodes-tubelab.tubeLab",
		"popularity": .235
	},
	{
		"id": "n8n-nodes-base.citrixAdc",
		"popularity": .144
	},
	{
		"id": "n8n-nodes-peliqan.peliqan",
		"popularity": .103
	},
	{
		"id": "@postnitro/n8n-nodes-postnitro-ai.postNitro",
		"popularity": .103
	},
	{
		"id": "n8n-nodes-kargo-entegrator.kargoEntegrator",
		"popularity": .103
	},
	{
		"id": "n8n-nodes-camino.camino",
		"popularity": .051
	},
	{
		"id": "@n8n/n8n-nodes-langchain.guardrails",
		"popularity": .625
	},
	{
		"id": "n8n-nodes-scrapfly.Scrapfly",
		"popularity": .401
	},
	{
		"id": "n8n-nodes-base.slackHitlTool",
		"popularity": .375
	},
	{
		"id": "n8n-nodes-get-transcribe.getTranscribe",
		"popularity": .368
	},
	{
		"id": "@zerobounce/n8n-nodes-zerobounce.zeroBounce",
		"popularity": .304
	},
	{
		"id": "n8n-nodes-groner.groner",
		"popularity": .241
	},
	{
		"id": "n8n-nodes-unstract.llmWhisperer",
		"popularity": .351
	},
	{
		"id": "n8n-nodes-base.genericConnectorTool",
		"popularity": 0
	},
	{
		"id": "@musixmatch/n8n-nodes-musixmatch.musixmatch",
		"popularity": .21
	},
	{
		"id": "n8n-nodes-hedy.hedy",
		"popularity": .214
	},
	{
		"id": "n8n-nodes-bounceban.bounceban",
		"popularity": .17
	},
	{
		"id": "@videodb/n8n-nodes-videodb.videoDb",
		"popularity": .415
	},
	{
		"id": "n8n-nodes-docsautomator.docsAutomator",
		"popularity": .306
	},
	{
		"id": "n8n-nodes-botnoi-voice.botnoitts",
		"popularity": .364
	},
	{
		"id": "n8n-nodes-late.late",
		"popularity": .399
	},
	{
		"id": "@notainc/n8n-nodes-gyazo.gyazo",
		"popularity": .051
	},
	{
		"id": "n8n-nodes-onenote.onenote",
		"popularity": .323
	},
	{
		"id": "n8n-nodes-base.perplexityTool",
		"popularity": .617
	},
	{
		"id": "@serphouse/n8n-nodes-serphouse.serphouse",
		"popularity": .291
	},
	{
		"id": "n8n-nodes-wpforms.wpformsTrigger",
		"popularity": .347
	},
	{
		"id": "@tehw0lf/n8n-nodes-toon.toon",
		"popularity": .312
	},
	{
		"id": "n8n-nodes-placid.placid",
		"popularity": .36
	},
	{
		"id": "n8n-nodes-dust.dust",
		"popularity": .327
	},
	{
		"id": "@docuseal/n8n-nodes-docuseal.docuseal",
		"popularity": .296
	},
	{
		"id": "n8n-nodes-hostinger-api.hostingerApi",
		"popularity": .338
	},
	{
		"id": "n8n-nodes-solapi.solapi",
		"popularity": .304
	},
	{
		"id": "n8n-nodes-bookoly.bookoly",
		"popularity": .303
	},
	{
		"id": "@datafix/n8n-nodes-exact-online.exactOnline",
		"popularity": .296
	},
	{
		"id": "@postpulse/n8n-nodes-postpulse.postPulse",
		"popularity": .306
	},
	{
		"id": "n8n-nodes-sms-advert.smsAdvert",
		"popularity": .195
	},
	{
		"id": "n8n-nodes-syncmate.whatsAuto",
		"popularity": .453
	},
	{
		"id": "@permitio/n8n-nodes-permitio.permit",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-veed.veed",
		"popularity": .44
	},
	{
		"id": "n8n-nodes-famulor.famulor",
		"popularity": .144
	},
	{
		"id": "n8n-nodes-assemblyai.assemblyAi",
		"popularity": .49
	},
	{
		"id": "@markupai/n8n-nodes-markupai.markupai",
		"popularity": .119
	},
	{
		"id": "n8n-nodes-greip.greip",
		"popularity": .103
	},
	{
		"id": "@basalt-ai/n8n-nodes-basalt.basalt",
		"popularity": .144
	},
	{
		"id": "n8n-nodes-linkupapi.linkup",
		"popularity": .435
	},
	{
		"id": "n8n-nodes-jetapi.jetapi",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-postfast.postFast",
		"popularity": .415
	},
	{
		"id": "n8n-nodes-kylas.kylas",
		"popularity": .119
	},
	{
		"id": "n8n-nodes-kinderpedia.kinderpedia",
		"popularity": 0
	},
	{
		"id": "@wizaco/n8n-nodes-wiza.wiza",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-tomba.tomba",
		"popularity": .163
	},
	{
		"id": "n8n-nodes-tazzoai.tazzoAi",
		"popularity": .051
	},
	{
		"id": "@meistrari/n8n-nodes-tela.tela",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.paytmPiPlatformTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-moorcheh.moorcheh",
		"popularity": .081
	},
	{
		"id": "n8n-nodes-deliverect.deliverect",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-tmpfiles.tmpfiles",
		"popularity": .393
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
export { AINodesView as a, RegularView as c, require_capitalize as d, useKeyboardNavigation as i, TriggerView as l, useViewStacks as n, AIView as o, __virtual_node_popularity_data_default as r, HitlToolView as s, useNodeCreatorStore as t, require_camelCase as u };
