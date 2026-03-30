import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, Ht as toValue, N as defineComponent, Nt as reactive, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, Z as onUnmounted, _ as Fragment, _n as normalizeClass, gt as watch, j as createVNode, rt as renderList, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n, h as computedAsync, xt as I18nT } from "./_MapCache-14clFqm4.js";
import { $i as N8nIcon_default, Bi as truncateBeforeLast, Bt as N8nActionDropdown_default, Mi as N8nTooltip_default, Qi as N8nButton_default, Zi as N8nText_default, _t as useRouter, en as ElCollapseTransition } from "./src-jV4M2fcN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { Et as useWorkflowHelpers, Ft as globalLinkActionsEventBus, Gn as isPlaceholderValue, Jt as useTemplatesStore, Ln as useToast, Ur as useHistoryStore, Wn as findPlaceholderDetails, Yi as getTriggerNodeServiceName, aa as createWorkflowDocumentId, at as useCredentialsStore, ca as useWorkflowDocumentStore, d as isChatNode, ir as sortNodesByExecutionOrder, it as listenForCredentialChanges, lr as useEnvironmentsStore, pr as useTelemetry, r as useUIStore, s as useWorkflowsStore, sa as injectWorkflowDocumentStore, tn as PUSH_NODES_OFFSET, ur as useNodeHelpers, w as useNodeTypesStore } from "./users.store-DNsxOyr9.js";
import { Ia as nodeAcceptsInputType, Js as WORKFLOW_EXTRACTION_NAME_MODAL_KEY, Ko as require_isEqual, Mi as buildAdjacencyList, Mn as MANUAL_TRIGGER_NODE_TYPE, Mo as EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE, Ni as parseExtractableSubgraphSelection, P as PLACEHOLDER_FILLED_AT_EXECUTION_TIME, Wo as v4_default, bn as HTTP_REQUEST_NODE_TYPE, go as NodeConnectionTypes, ha as displayParameter, hs as VIEWS, qa as isResourceLocatorValue, va as getNodeInputs, vo as isExpression, xa as getNodeParametersIssues$1, xn as HTTP_REQUEST_TOOL_NODE_TYPE, ya as getNodeOutputs, zi as extractReferencesInNodeExpressions } from "./constants-DkMVfvP4.js";
import { t as useClipboard } from "./useClipboard-CRF4y00Y.js";
import { t as useCanvasOperations } from "./useCanvasOperations-CD8a88Wn.js";
import { i as getNodeTypeDisplayableCredentials } from "./nodeTransforms-CRDKuOIX.js";
import { t as NodeIcon_default } from "./NodeIcon-BCEWdXjI.js";
import { r as useNodeExecution } from "./VirtualSchema-dXzIVdUH.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-Oymux7s3.js";
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual(), 1);
var CANVAS_HISTORY_OPTIONS = {
	trackBulk: false,
	trackHistory: true
};
function useWorkflowExtraction() {
	const uiStore = useUIStore();
	const workflowsStore = useWorkflowsStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const nodeTypesStore = useNodeTypesStore();
	const toast = useToast();
	const router = useRouter();
	const historyStore = useHistoryStore();
	const canvasOperations = useCanvasOperations();
	const i18n = useI18n();
	const telemetry = useTelemetry();
	const adjacencyList = computed(() => buildAdjacencyList(workflowDocumentStore?.value?.connectionsBySourceNode ?? {}));
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
			case "Input Edge To Non-Root Node": return i18n.baseText("workflowExtraction.error.selectionGraph.inputEdgeToNonRoot", { interpolate: { node: result.node } });
			case "Output Edge From Non-Leaf Node": return i18n.baseText("workflowExtraction.error.selectionGraph.outputEdgeFromNonLeaf", { interpolate: { node: result.node } });
			case "Multiple Input Nodes": return i18n.baseText("workflowExtraction.error.selectionGraph.multipleInputNodes", { interpolate: { nodes: [...result.nodes].map((x) => `'${x}'`).join(", ") } });
			case "Multiple Output Nodes": return i18n.baseText("workflowExtraction.error.selectionGraph.multipleOutputNodes", { interpolate: { nodes: [...result.nodes].map((x) => `'${x}'`).join(", ") } });
			case "No Continuous Path From Root To Leaf In Selection": return i18n.baseText("workflowExtraction.error.selectionGraph.noContinuousPathFromRootToLeaf", { interpolate: {
				start: result.start,
				end: result.end
			} });
		}
	}
	function makeExecuteWorkflowNode(workflowId, name, position, variables) {
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
					schema: [...variables.keys().map((x) => ({
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
			position,
			name
		};
	}
	function makeSubworkflow(newWorkflowName, { start, end }, nodes, connections, selectionVariables, selectionChildrenVariables, startNodeName, returnNodeName) {
		const newConnections = Object.fromEntries(Object.entries(connections).filter(([k]) => nodes.some((x) => x.name === k)));
		if (end) delete newConnections[end];
		const startNodeTarget = nodes.find((x) => x.name === start);
		const firstNode = startNodeTarget ?? nodes.sort((a, b) => a.position[1] - b.position[1])[0];
		const startNodePosition = [firstNode.position[0] - PUSH_NODES_OFFSET, firstNode.position[1]];
		const endNodeTarget = nodes.find((x) => x.name === end);
		const lastNode = endNodeTarget ?? nodes.sort((a, b) => b.position[1] - a.position[1])[0];
		const endNodePosition = [lastNode.position[0] + PUSH_NODES_OFFSET, lastNode.position[1]];
		const shouldInsertReturnNode = selectionChildrenVariables.size > 0;
		const firstNodeType = nodeTypesStore.getNodeType(firstNode.type, firstNode.typeVersion);
		const startNodeConnection = startNodeTarget !== void 0 || firstNodeType && nodeAcceptsInputType(firstNodeType, "main") ? { [startNodeName]: { main: [[{
			node: firstNode.name,
			type: "main",
			index: 0
		}]] } } : {};
		const endNodeConnection = endNodeTarget && shouldInsertReturnNode ? { [endNodeTarget.name]: { main: [[{
			node: returnNodeName,
			type: "main",
			index: 0
		}]] } } : {};
		const returnNode = shouldInsertReturnNode ? [{
			parameters: {
				assignments: { assignments: [...selectionChildrenVariables.entries().map((x) => ({
					id: v4_default(),
					name: x[0],
					value: `={{ ${x[1]} }}`,
					type: "string"
				}))] },
				options: {}
			},
			type: "n8n-nodes-base.set",
			typeVersion: 3.4,
			position: endNodePosition,
			id: v4_default(),
			name: returnNodeName
		}] : [];
		const triggerParameters = selectionVariables.size === 0 ? { inputSource: "passthrough" } : { workflowInputs: { values: [...selectionVariables.keys().map((k) => ({
			name: k,
			type: "any"
		}))] } };
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
			nodes: [
				...nodes,
				...returnNode,
				triggerNode
			],
			connections: {
				...newConnections,
				...startNodeConnection,
				...endNodeConnection
			},
			settings: { executionOrder: "v1" },
			projectId: workflowDocumentStore?.value?.homeProject?.id,
			parentFolderId: workflowDocumentStore?.value?.parentFolder?.id ?? void 0
		};
	}
	function computeAveragePosition(nodes) {
		const summedUp = nodes.reduce((acc, v) => [
			acc[0] + v.position[0],
			acc[1] + v.position[1],
			acc[2] + 1
		], [
			0,
			0,
			0
		]);
		return [summedUp[0] / summedUp[2], summedUp[1] / summedUp[2]];
	}
	async function tryCreateWorkflow(workflowData) {
		try {
			const createdWorkflow = await workflowsStore.createNewWorkflow(workflowData);
			try {
				await workflowsStore.publishWorkflow(createdWorkflow.id, { versionId: createdWorkflow.versionId });
			} catch (activationError) {
				console.error("Failed to activate extracted sub-workflow:", activationError);
			}
			const { href } = router.resolve({
				name: VIEWS.WORKFLOW,
				params: { name: createdWorkflow.id }
			});
			toast.showMessage({
				title: i18n.baseText("workflowExtraction.success.title"),
				message: i18n.baseText("workflowExtraction.success.message", { interpolate: { url: href } }),
				type: "success",
				duration: 10 * 1e3
			});
			return createdWorkflow;
		} catch (e) {
			toast.showError(e, i18n.baseText("workflowExtraction.error.subworkflowCreationFailed"));
			return null;
		}
	}
	function checkExtractableSelectionValidity(selection) {
		if (Array.isArray(selection)) {
			showError(i18n.baseText("workflowExtraction.error.selectionGraph.listHeader", { interpolate: { body: selection.map(extractableErrorResultToMessage).map((x) => `- ${x}`).join("<br>") } }));
			return false;
		}
		const { start, end } = selection;
		const isSingleIO = (nodeName, getIOs) => {
			const node = workflowsStore.getNodeByName(nodeName);
			if (!node) return true;
			const nodeType = useNodeTypesStore().getNodeType(node.type, node.typeVersion);
			if (!nodeType) return true;
			return getIOs(workflowObject.value, node, nodeType).filter((x) => typeof x === "string" ? x === "main" : x.type === "main").length <= 1;
		};
		if (start && !isSingleIO(start, getNodeInputs)) {
			showError(i18n.baseText("workflowExtraction.error.inputNodeHasMultipleInputBranches", { interpolate: { node: start } }));
			return false;
		}
		if (end && !isSingleIO(end, getNodeOutputs)) {
			showError(i18n.baseText("workflowExtraction.error.outputNodeHasMultipleOutputBranches", { interpolate: { node: end } }));
			return false;
		}
		return !Array.isArray(selection);
	}
	async function replaceSelectionWithNode(executeWorkflowNodeData, startId, endId, selection, selectionChildNodes) {
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
		canvasOperations.deleteNodes(selection.map((x) => x.id), CANVAS_HISTORY_OPTIONS);
		for (const node of selectionChildNodes) {
			const currentNode = workflowsStore.workflow.nodes.find((x) => x.id === node.id);
			if ((0, import_isEqual.default)(node, currentNode)) continue;
			canvasOperations.replaceNodeParameters(node.id, { ...currentNode?.parameters }, { ...node.parameters }, CANVAS_HISTORY_OPTIONS);
		}
		uiStore.markStateDirty();
		historyStore.stopRecordingUndo();
	}
	function tryExtractNodesIntoSubworkflow(nodeIds) {
		const subGraph = nodeIds.map(workflowsStore.getNodeById).filter((x) => x !== void 0);
		const triggers = subGraph.filter((x) => useNodeTypesStore().getNodeType(x.type, x.typeVersion)?.group.includes("trigger"));
		if (triggers.length > 0) {
			showError(i18n.baseText("workflowExtraction.error.triggerSelected", { interpolate: { nodes: triggers.map((x) => `'${x.name}'`).join(", ") } }));
			return false;
		}
		const selection = parseExtractableSubgraphSelection(new Set(subGraph.map((x) => x.name)), adjacencyList.value);
		if (!checkExtractableSelectionValidity(selection)) return false;
		uiStore.openModalWithData({
			name: WORKFLOW_EXTRACTION_NAME_MODAL_KEY,
			data: {
				subGraph,
				selection
			}
		});
		return true;
	}
	async function doExtractNodesIntoSubworkflow(selection, subGraph, newWorkflowName) {
		const { start, end } = selection;
		const allNodeNames = workflowsStore.workflow.nodes.map((x) => x.name);
		let startNodeName = "Start";
		const subGraphNames = subGraph.map((x) => x.name);
		while (subGraphNames.includes(startNodeName)) startNodeName += "_1";
		let returnNodeName = "Return";
		while (subGraphNames.includes(returnNodeName)) returnNodeName += "_1";
		const directAfterEndNodeNames = end ? workflowObject.value.getChildNodes(end, "main", 1).map((x) => workflowObject.value.getNode(x)?.name).filter((x) => x !== void 0) : [];
		const allAfterEndNodes = end ? workflowObject.value.getChildNodes(end, "ALL").map((x) => workflowObject.value.getNode(x)).filter((x) => x !== null) : [];
		const { nodes, variables } = extractReferencesInNodeExpressions(subGraph, allNodeNames, startNodeName, start ? [start] : void 0);
		let executeWorkflowNodeName = `Call ${newWorkflowName}`;
		while (allNodeNames.includes(executeWorkflowNodeName)) executeWorkflowNodeName += "_1";
		const { nodes: afterNodes, variables: afterVariables } = extractReferencesInNodeExpressions(allAfterEndNodes, allAfterEndNodes.map((x) => x.name).concat(subGraphNames), executeWorkflowNodeName, directAfterEndNodeNames);
		const createdWorkflow = await tryCreateWorkflow(makeSubworkflow(newWorkflowName, selection, nodes, workflowDocumentStore?.value?.connectionsBySourceNode ?? {}, variables, afterVariables, startNodeName, returnNodeName));
		if (createdWorkflow === null) return false;
		const executeWorkflowPosition = computeAveragePosition(subGraph);
		await replaceSelectionWithNode(makeExecuteWorkflowNode(createdWorkflow.id, executeWorkflowNodeName, executeWorkflowPosition, variables), subGraph.find((x) => x.name === start)?.id, subGraph.find((x) => x.name === end)?.id, subGraph, afterNodes);
		return true;
	}
	function trackStartExtractWorkflow(nodeCount, success) {
		telemetry.track("User started nodes to sub-workflow extraction", {
			node_count: nodeCount,
			success
		});
	}
	function trackExtractWorkflow(nodeCount, success) {
		telemetry.track("User extracted nodes to sub-workflow", {
			node_count: nodeCount,
			success
		});
	}
	async function extractNodesIntoSubworkflow(selection, subGraph, newWorkflowName) {
		const success = await doExtractNodesIntoSubworkflow(selection, subGraph, newWorkflowName);
		trackExtractWorkflow(subGraph.length, success);
	}
	function extractWorkflow(nodeIds) {
		const success = tryExtractNodesIntoSubworkflow(nodeIds);
		trackStartExtractWorkflow(nodeIds.length, success);
	}
	return {
		adjacencyList,
		extractWorkflow,
		tryExtractNodesIntoSubworkflow,
		extractNodesIntoSubworkflow
	};
}
var state = reactive({
	customActions: {},
	delegatedClickHandler: null
});
function useGlobalLinkActions() {
	function registerCustomAction({ key, action }) {
		state.customActions[key] = action;
	}
	function unregisterCustomAction(key) {
		const { [key]: _, ...rest } = state.customActions;
		state.customActions = rest;
	}
	function getElementAttributes(element) {
		const attributesObject = {};
		for (let i = 0; i < element.attributes.length; i++) {
			const attr = element.attributes[i];
			if (attr.name.startsWith("data-action-parameter-")) attributesObject[attr.name.replace("data-action-parameter-", "")] = attr.value;
		}
		return attributesObject;
	}
	function delegateClick(e) {
		const clickedElement = e.target;
		if (!(clickedElement instanceof Element) || clickedElement.tagName !== "A") return;
		const actionAttribute = clickedElement.getAttribute("data-action");
		if (actionAttribute && typeof availableActions.value[actionAttribute] === "function") {
			e.preventDefault();
			const elementAttributes = getElementAttributes(clickedElement);
			availableActions.value[actionAttribute](elementAttributes);
		}
	}
	function reload() {
		if (window.top) window.top.location.reload();
		else window.location.reload();
	}
	const availableActions = computed(() => ({
		reload,
		...state.customActions
	}));
	onMounted(() => {
		if (state.delegatedClickHandler) return;
		state.delegatedClickHandler = delegateClick;
		window.addEventListener("click", delegateClick);
		globalLinkActionsEventBus.on("registerGlobalLinkAction", registerCustomAction);
	});
	onUnmounted(() => {
		window.removeEventListener("click", delegateClick);
		state.delegatedClickHandler = null;
		globalLinkActionsEventBus.off("registerGlobalLinkAction", registerCustomAction);
	});
	return {
		registerCustomAction,
		unregisterCustomAction
	};
}
var TriggerExecuteButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TriggerExecuteButton",
	props: {
		label: {},
		icon: {},
		disabled: { type: Boolean },
		loading: { type: Boolean },
		tooltipItems: {}
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const hasTooltip = computed(() => props.tooltipItems.length > 0);
		const onClick = async () => {
			emit("click");
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				disabled: !hasTooltip.value,
				placement: "top"
			}, {
				content: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.tooltipItems, (item, index) => {
					return openBlock(), createElementBlock("p", {
						key: index,
						class: normalizeClass(_ctx.$style.tooltipItem)
					}, toDisplayString(item), 3);
				}), 128))]),
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					"data-test-id": "trigger-execute-button",
					label: __props.label,
					disabled: __props.disabled,
					loading: __props.loading,
					icon: __props.icon,
					size: "small",
					onClick
				}, null, 8, [
					"label",
					"disabled",
					"loading",
					"icon"
				])]),
				_: 1
			}, 8, ["disabled"]);
		};
	}
});
var TriggerExecuteButton_vue_vue_type_style_index_0_lang_module_default = { tooltipItem: "_tooltipItem_jpymr_125" };
var TriggerExecuteButton_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TriggerExecuteButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TriggerExecuteButton_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = ["onClick"];
var WebhookUrlPreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WebhookUrlPreview",
	props: { urls: {} },
	setup(__props) {
		const i18n = useI18n();
		const clipboard = useClipboard();
		const toast = useToast();
		const isCollapsed = ref(false);
		function copyUrl(url) {
			clipboard.copy(url);
			toast.showMessage({
				title: i18n.baseText("setupPanel.webhookUrl.copied"),
				type: "success"
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				"data-test-id": "webhook-url-preview",
				class: normalizeClass(_ctx.$style.container)
			}, [createBaseVNode("div", {
				class: normalizeClass([_ctx.$style.header, { [_ctx.$style.expanded]: !isCollapsed.value }]),
				onClick: _cache[0] || (_cache[0] = ($event) => isCollapsed.value = !isCollapsed.value)
			}, [createVNode(unref(N8nIcon_default), {
				icon: "chevron-right",
				class: normalizeClass(_ctx.$style["chevron-icon"])
			}, null, 8, ["class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style["header-label"]) }, toDisplayString(unref(i18n).baseText("setupPanel.webhookUrl.title")), 3)], 2), createVNode(unref(ElCollapseTransition), null, {
				default: withCtx(() => [!isCollapsed.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style["url-list"])
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.urls, (item, index) => {
					return openBlock(), createBlock(unref(N8nTooltip_default), {
						key: index,
						content: unref(i18n).baseText("setupPanel.webhookUrl.clickToCopy"),
						placement: "top"
					}, {
						default: withCtx(() => [createBaseVNode("div", {
							"data-test-id": "webhook-url-item",
							class: normalizeClass(_ctx.$style["url-row"]),
							onClick: ($event) => copyUrl(item.url)
						}, [item.isMethodVisible ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style["method-badge"])
						}, toDisplayString(item.httpMethod), 3)) : createCommentVNode("", true), createBaseVNode("span", { class: normalizeClass(_ctx.$style["url-text"]) }, toDisplayString(item.url), 3)], 10, _hoisted_1)]),
						_: 2
					}, 1032, ["content"]);
				}), 128))], 2)) : createCommentVNode("", true)]),
				_: 1
			})], 2);
		};
	}
});
const container = "_container_1w8i0_125";
const header = "_header_1w8i0_129";
const expanded = "_expanded_1w8i0_141";
var WebhookUrlPreview_vue_vue_type_style_index_0_lang_module_default = {
	container,
	header,
	"chevron-icon": "_chevron-icon_1w8i0_137",
	expanded,
	"header-label": "_header-label_1w8i0_145",
	"url-list": "_url-list_1w8i0_149",
	"url-row": "_url-row_1w8i0_157",
	"method-badge": "_method-badge_1w8i0_167",
	"url-text": "_url-text_1w8i0_179"
};
var WebhookUrlPreview_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WebhookUrlPreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WebhookUrlPreview_vue_vue_type_style_index_0_lang_module_default }]]);
const isHttpRequestNodeType = (nodeType) => nodeType === "n8n-nodes-base.httpRequest" || nodeType === "n8n-nodes-base.httpRequestTool";
function getNodeCredentialTypes(nodeTypeProvider, node) {
	const credentialTypes = /* @__PURE__ */ new Set();
	const displayableCredentials = getNodeTypeDisplayableCredentials(nodeTypeProvider, node);
	for (const cred of displayableCredentials) credentialTypes.add(cred.name);
	const credentialIssues = node.issues?.credentials ?? {};
	for (const credType of Object.keys(credentialIssues)) credentialTypes.add(credType);
	if (node.credentials) for (const credType of Object.keys(node.credentials)) credentialTypes.add(credType);
	return Array.from(credentialTypes);
}
function getNodeParametersIssues(nodeTypesStore, node) {
	const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
	if (!nodeType) return {};
	const paramsWithDefaults = { ...node.parameters };
	for (const prop of nodeType.properties) if (!(prop.name in paramsWithDefaults) && prop.default !== void 0) paramsWithDefaults[prop.name] = prop.default;
	const nodeWithDefaults = {
		...node,
		parameters: paramsWithDefaults
	};
	const allIssues = getNodeParametersIssues$1(nodeType.properties, nodeWithDefaults, nodeType)?.parameters ?? {};
	const topLevelPropsByName = /* @__PURE__ */ new Map();
	for (const prop of nodeType.properties) {
		const existing = topLevelPropsByName.get(prop.name);
		if (existing) existing.push(prop);
		else topLevelPropsByName.set(prop.name, [prop]);
	}
	const filteredIssues = {};
	for (const [key, value] of Object.entries(allIssues)) {
		const props = topLevelPropsByName.get(key);
		if (!props) continue;
		if (!props.some((prop) => {
			if (prop.type === "hidden") return false;
			if (prop.displayOptions && !displayParameter(paramsWithDefaults, prop, nodeWithDefaults, nodeType)) return false;
			return true;
		})) continue;
		filteredIssues[key] = value;
	}
	return filteredIssues;
}
function groupCredentialsByType(nodesWithCredentials, getCredentialDisplayName, resolveExpressionUrl) {
	const map = /* @__PURE__ */ new Map();
	for (const { node, credentialTypes } of nodesWithCredentials) for (const credType of credentialTypes) {
		const isHttpRequest = isHttpRequestNodeType(node.type);
		const url = node.parameters.url;
		let mapKey;
		if (!isHttpRequest) mapKey = credType;
		else if (isExpression(url)) {
			const resolvedUrl = resolveExpressionUrl?.(url, node.name) ?? null;
			mapKey = resolvedUrl !== null ? `${credType}:http:${resolvedUrl}` : `${credType}:http:${node.name}`;
		} else mapKey = `${credType}:http:${String(url ?? "")}`;
		const existing = map.get(mapKey);
		if (existing) {
			existing.nodes.push(node);
			const nodeIssues = node.issues?.credentials?.[credType];
			if (nodeIssues) {
				const issueMessages = [nodeIssues].flat();
				for (const msg of issueMessages) if (!existing.issues.includes(msg)) existing.issues.push(msg);
			}
			if (!existing.selectedCredentialId) {
				const credValue = node.credentials?.[credType];
				if (typeof credValue !== "string" && credValue?.id) existing.selectedCredentialId = credValue.id;
			}
		} else {
			const credValue = node.credentials?.[credType];
			const selectedCredentialId = typeof credValue === "string" ? void 0 : credValue?.id ?? void 0;
			const issueMessages = [(node.issues?.credentials ?? {})[credType] ?? []].flat();
			map.set(mapKey, {
				credentialType: credType,
				credentialDisplayName: getCredentialDisplayName(credType),
				selectedCredentialId,
				issues: issueMessages,
				nodes: [node],
				isComplete: false
			});
		}
	}
	for (const state$1 of map.values()) state$1.isComplete = !!state$1.selectedCredentialId && state$1.issues.length === 0;
	return Array.from(map.values());
}
function isNodeSetupComplete(state$1, ctx) {
	if (state$1.credentialType) {
		if (!state$1.selectedCredentialId || (state$1.issues?.length ?? 0) > 0) return false;
		if (ctx.isCredentialTestedOk && state$1.selectedCredentialId && !ctx.isCredentialTestedOk(state$1.selectedCredentialId)) return false;
	}
	if (Object.keys(state$1.parameterIssues).length > 0 || ctx.hasUnfilledTemplateParams(state$1.node)) return false;
	if (state$1.isTrigger && state$1.node.name === ctx.firstTriggerName && !ctx.hasTriggerExecuted(state$1.node.name)) return false;
	return true;
}
function isCredentialCardComplete(credState, ctx) {
	if (!(!!credState.selectedCredentialId && credState.issues.length === 0)) return false;
	if (ctx.isCredentialTestedOk && credState.selectedCredentialId && !ctx.isCredentialTestedOk(credState.selectedCredentialId)) return false;
	return credState.nodes.filter((node) => ctx.isTriggerNode(node.type) && node.name === ctx.firstTriggerName).every((node) => ctx.hasTriggerExecuted(node.name));
}
function buildTriggerSetupState(node, triggerCredentialTypes, credentialTypeStates, hasTriggerExecuted) {
	return {
		node,
		isComplete: triggerCredentialTypes.every((credType) => {
			const credState = credentialTypeStates.find((s) => s.credentialType === credType);
			return credState ? !!credState.selectedCredentialId && credState.issues.length === 0 : true;
		}) && hasTriggerExecuted
	};
}
function useTriggerExecution(node, options) {
	const i18n = useI18n();
	const nodeTypesStore = useNodeTypesStore();
	const workflowsStore = useWorkflowsStore();
	const { isExecuting, isListening, isListeningForWorkflowEvents, buttonLabel, buttonIcon, disabledReason, hasIssues, execute } = useNodeExecution(node, options);
	const nodeValue = computed(() => toValue(node));
	const nodeType = computed(() => nodeValue.value ? nodeTypesStore.getNodeType(nodeValue.value.type, nodeValue.value.typeVersion) : null);
	const isInListeningState = computed(() => isListening.value || isListeningForWorkflowEvents.value);
	const listeningHint = computed(() => {
		if (!isInListeningState.value || !nodeType.value) return "";
		if (nodeType.value.eventTriggerDescription) return nodeType.value.eventTriggerDescription;
		const serviceName = getTriggerNodeServiceName(nodeType.value);
		return i18n.baseText("setupPanel.trigger.listeningHint", { interpolate: { service: serviceName } });
	});
	const label = computed(() => {
		if (isInListeningState.value) return i18n.baseText("ndv.execute.stopListening");
		return buttonLabel.value;
	});
	const hasUpstreamIssues = computed(() => {
		if (!nodeValue.value) return false;
		return workflowsStore.workflowObject.getParentNodes(nodeValue.value.name, NodeConnectionTypes.Main).some((name) => {
			const parentNode = workflowsStore.getNodeByName(name);
			return parentNode?.issues?.parameters || parentNode?.issues?.credentials;
		});
	});
	return {
		isExecuting,
		isButtonDisabled: computed(() => isExecuting.value || hasIssues.value || hasUpstreamIssues.value || !!disabledReason.value),
		label,
		buttonIcon,
		tooltipItems: computed(() => {
			if (!hasIssues.value && !hasUpstreamIssues.value) return disabledReason.value ? [disabledReason.value] : [];
			const messages = [];
			const issues = nodeValue.value?.issues;
			if (issues) messages.push(...Object.values(issues.credentials ?? {}).flat(), ...Object.values(issues.parameters ?? {}).flat());
			if (hasUpstreamIssues.value) messages.push(i18n.baseText("ndv.execute.upstreamNodeHasIssues"));
			return messages.length > 0 ? messages : [i18n.baseText("ndv.execute.requiredFieldsMissing")];
		}),
		execute,
		isInListeningState,
		listeningHint
	};
}
function useWebhookUrls(node) {
	const nodeTypesStore = useNodeTypesStore();
	const workflowHelpers = useWorkflowHelpers();
	const nodeValue = computed(() => toValue(node));
	const nodeType = computed(() => nodeValue.value ? nodeTypesStore.getNodeType(nodeValue.value.type, nodeValue.value.typeVersion) : null);
	const webhooks = computed(() => {
		if (!nodeType.value?.webhooks) return [];
		return nodeType.value.webhooks.filter((w) => w.restartWebhook !== true);
	});
	async function resolveHideFlag(webhook, field, nodeName) {
		const raw = webhook[field];
		if (typeof raw === "string") try {
			return !!await workflowHelpers.getWebhookExpressionValue(webhook, field, true, nodeName);
		} catch {
			return false;
		}
		return !!raw;
	}
	async function resolveHttpMethod(webhook, nodeName) {
		let isMethodVisible = !webhook.ndvHideMethod;
		let httpMethod = "";
		try {
			const method = await workflowHelpers.getWebhookExpressionValue(webhook, "httpMethod", false, nodeName);
			if (Array.isArray(method) && method.length !== 1) isMethodVisible = false;
			else {
				httpMethod = Array.isArray(method) ? method[0] : method;
				if (typeof webhook.ndvHideMethod === "string") isMethodVisible = !await resolveHideFlag(webhook, "ndvHideMethod", nodeName);
			}
		} catch {}
		return {
			httpMethod,
			isMethodVisible
		};
	}
	return { webhookUrls: computedAsync(async () => {
		const currentNode = nodeValue.value;
		if (!currentNode || webhooks.value.length === 0) return [];
		currentNode.parameters;
		const result = [];
		for (const webhook of webhooks.value) {
			const nodeName = currentNode.name;
			if (await resolveHideFlag(webhook, "ndvHideUrl", nodeName)) continue;
			const url = await workflowHelpers.getWebhookUrl(webhook, currentNode, "test");
			const { httpMethod, isMethodVisible } = await resolveHttpMethod(webhook, nodeName);
			result.push({
				url,
				httpMethod,
				isMethodVisible
			});
		}
		return result;
	}, []) };
}
const useWorkflowSetupState = (nodes, options) => {
	const workflowsStore = useWorkflowsStore();
	const credentialsStore = useCredentialsStore();
	const nodeTypesStore = useNodeTypesStore();
	const nodeHelpers = useNodeHelpers();
	const environmentsStore = useEnvironmentsStore();
	const templatesStore = useTemplatesStore();
	const workflowDocumentStore = computed(() => workflowsStore.workflowId ? useWorkflowDocumentStore(createWorkflowDocumentId(workflowsStore.workflowId)) : void 0);
	const sourceNodes = computed(() => nodes?.value ?? workflowDocumentStore.value?.allNodes ?? []);
	const resourceLocatorsByNode = computed(() => {
		if (!workflowDocumentStore?.value?.meta?.templateId) return /* @__PURE__ */ new Map();
		const paramMap = /* @__PURE__ */ new Map();
		for (const node of sourceNodes.value) {
			const paramNames = /* @__PURE__ */ new Set();
			const nodeTypeInfo = nodeTypesStore.getNodeType(node.type, node.typeVersion);
			if (nodeTypeInfo) {
				for (const prop of nodeTypeInfo.properties) if (prop.type === "resourceLocator") paramNames.add(prop.name);
			}
			const findResourceLocators = (obj) => {
				for (const [key, value] of Object.entries(obj)) if (isResourceLocatorValue(value)) paramNames.add(key);
				else if (value !== null && typeof value === "object" && !Array.isArray(value)) findResourceLocators(value);
			};
			findResourceLocators(node.parameters);
			if (paramNames.size > 0) paramMap.set(node.name, Array.from(paramNames));
		}
		return paramMap;
	});
	const templateMissingParams = ref(/* @__PURE__ */ new Map());
	const templateParametersByNode = computed(() => {
		const merged = /* @__PURE__ */ new Map();
		const mergeInto = (source) => {
			for (const [nodeName, params] of source) {
				const existing = merged.get(nodeName);
				if (existing) {
					const combined = new Set([...existing, ...params]);
					merged.set(nodeName, Array.from(combined));
				} else merged.set(nodeName, [...params]);
			}
		};
		for (const [nodeName, params] of resourceLocatorsByNode.value) merged.set(nodeName, [...params]);
		mergeInto(templateMissingParams.value);
		if (options?.additionalParametersByNode?.value) mergeInto(options.additionalParametersByNode.value);
		for (const [nodeName, paramNames] of stickyIssueParamNames.value) {
			const existing = merged.get(nodeName);
			if (existing) {
				const combined = new Set([...existing, ...paramNames]);
				merged.set(nodeName, Array.from(combined));
			} else merged.set(nodeName, Array.from(paramNames));
		}
		return merged;
	});
	const nodeHasTemplateParams = (nodeName) => (templateParametersByNode.value.get(nodeName)?.length ?? 0) > 0;
	const hasUnfilledTemplateParams = (node) => {
		const templateParams = templateParametersByNode.value.get(node.name);
		if (!templateParams || templateParams.length === 0) return false;
		const paramNamesToCheck = new Set(templateParams);
		const findUnfilled = (obj) => {
			for (const [key, value] of Object.entries(obj)) {
				if (paramNamesToCheck.has(key)) {
					if (isResourceLocatorValue(value)) {
						if (!value.value || isPlaceholderValue(value.value)) return true;
					} else if (value === "" || value === null || value === void 0 || isPlaceholderValue(value)) return true;
					else if (typeof value === "object" && value !== null) {
						if (findPlaceholderDetails(value).length > 0) return true;
					}
				}
				if (value !== null && typeof value === "object" && !Array.isArray(value)) {
					if (findUnfilled(value)) return true;
				}
			}
			return false;
		};
		return findUnfilled(node.parameters);
	};
	async function loadTemplateMissingParameters() {
		const templateId = workflowDocumentStore?.value?.meta?.templateId;
		if (!templateId) return;
		try {
			const template = templatesStore.getFullTemplateById(templateId) ?? await templatesStore.fetchTemplateById(templateId);
			if (!template?.workflow?.nodes) return;
			const paramMap = /* @__PURE__ */ new Map();
			for (const templateNode of template.workflow.nodes) {
				const issues = getNodeParametersIssues(nodeTypesStore, templateNode);
				const paramNames = Object.keys(issues);
				if (paramNames.length > 0) paramMap.set(templateNode.name, paramNames);
			}
			templateMissingParams.value = paramMap;
		} catch {}
	}
	loadTemplateMissingParameters();
	const getCredentialDisplayName = (credentialType) => {
		return credentialsStore.getCredentialTypeByName(credentialType)?.displayName ?? credentialType;
	};
	const isCredentialTypeTestable = (credentialTypeName) => {
		if (credentialsStore.getCredentialTypeByName(credentialTypeName)?.test) return true;
		return credentialsStore.getNodesWithAccess(credentialTypeName).some((node) => node.credentials?.some((cred) => cred.name === credentialTypeName && cred.testedBy));
	};
	const isTriggerNode = (node) => {
		return nodeTypesStore.isTriggerNode(node.type);
	};
	const hasTriggerExecutedSuccessfully = (nodeName) => {
		const runData = workflowsStore.getWorkflowResultDataByNodeName(nodeName);
		return runData !== null && runData.length > 0;
	};
	const autoAppliedCredentialIds = ref(/* @__PURE__ */ new Set());
	const resolveExpressionUrl = (expressionUrl, nodeName) => {
		try {
			const result = workflowsStore.workflowObject.expression.getParameterValue(expressionUrl, null, 0, 0, nodeName, [], "manual", {
				$execution: {
					id: PLACEHOLDER_FILLED_AT_EXECUTION_TIME,
					mode: "test",
					resumeUrl: PLACEHOLDER_FILLED_AT_EXECUTION_TIME,
					resumeFormUrl: PLACEHOLDER_FILLED_AT_EXECUTION_TIME
				},
				$vars: environmentsStore.variablesAsObject
			});
			return typeof result === "string" ? result : null;
		} catch {
			return null;
		}
	};
	const stickyNodeIds = ref(/* @__PURE__ */ new Set());
	const stickyParamNodeIds = ref(/* @__PURE__ */ new Set());
	const stickyNodeCredentials = ref(/* @__PURE__ */ new Set());
	const stickyCredTypesWithParams = ref(/* @__PURE__ */ new Set());
	const stickyIssueParamNames = ref(/* @__PURE__ */ new Map());
	const nodesRequiringSetup = computed(() => {
		const nodesForSetup = sourceNodes.value.filter((node) => !node.disabled).map((node) => ({
			node,
			credentialTypes: getNodeCredentialTypes(nodeTypesStore, node),
			parameterIssues: getNodeParametersIssues(nodeTypesStore, node),
			isTrigger: isTriggerNode(node)
		})).filter(({ credentialTypes, isTrigger, parameterIssues, node }) => stickyNodeIds.value.has(node.id) || credentialTypes.length > 0 || isTrigger || Object.keys(parameterIssues).length > 0 || nodeHasTemplateParams(node.name));
		const allNodeTypes = {};
		for (const node of sourceNodes.value) allNodeTypes[node.name] = node.type;
		return sortNodesByExecutionOrder(nodesForSetup, workflowsStore.connectionsBySourceNode, workflowsStore.connectionsByDestinationNode, allNodeTypes);
	});
	watch(nodesRequiringSetup, (entries) => {
		for (const { node, parameterIssues } of entries) {
			stickyNodeIds.value.add(node.id);
			const issueNames = Object.keys(parameterIssues);
			if (issueNames.length > 0) {
				const existing = stickyIssueParamNames.value.get(node.name);
				if (existing) for (const name of issueNames) existing.add(name);
				else stickyIssueParamNames.value.set(node.name, new Set(issueNames));
			}
		}
	}, { immediate: true });
	const firstTriggerName = computed(() => {
		return nodesRequiringSetup.value.find(({ isTrigger }) => isTrigger)?.node.name ?? null;
	});
	const nodesWithCredentials = computed(() => nodesRequiringSetup.value.filter(({ credentialTypes }) => credentialTypes.length > 0));
	const nodesWithMissingParameters = computed(() => nodesRequiringSetup.value.filter(({ parameterIssues, node }) => stickyParamNodeIds.value.has(node.id) || Object.keys(parameterIssues).length > 0 || nodeHasTemplateParams(node.name)));
	watch(nodesWithMissingParameters, (entries) => {
		for (const { node } of entries) stickyParamNodeIds.value.add(node.id);
	}, { immediate: true });
	const perNodeCredTypes = computed(() => {
		const result = new Set(stickyCredTypesWithParams.value);
		for (const { credentialTypes, parameterIssues, node } of nodesRequiringSetup.value) if (Object.keys(parameterIssues).length > 0 || nodeHasTemplateParams(node.name)) for (const credType of credentialTypes) result.add(credType);
		return result;
	});
	watch(perNodeCredTypes, (types) => {
		for (const credType of types) stickyCredTypesWithParams.value.add(credType);
	}, { immediate: true });
	const buildCompletionContext = (credentialType) => ({
		firstTriggerName: firstTriggerName.value,
		hasTriggerExecuted: hasTriggerExecutedSuccessfully,
		isTriggerNode: (nodeType) => nodeTypesStore.isTriggerNode(nodeType),
		isCredentialTestedOk: credentialType && isCredentialTypeTestable(credentialType) ? credentialsStore.isCredentialTestedOk : void 0,
		hasUnfilledTemplateParams
	});
	const credentialTypeStates = computed(() => {
		return groupCredentialsByType(nodesWithCredentials.value.filter(({ credentialTypes }) => !credentialTypes.some((credType) => perNodeCredTypes.value.has(credType))).map(({ node, credentialTypes }) => ({
			node,
			credentialTypes
		})), getCredentialDisplayName, resolveExpressionUrl).map((state$1) => {
			const isAutoApplied = !!state$1.selectedCredentialId && autoAppliedCredentialIds.value.has(state$1.selectedCredentialId);
			return {
				...state$1,
				isComplete: isCredentialCardComplete(state$1, buildCompletionContext(state$1.credentialType)),
				isAutoApplied
			};
		});
	});
	const triggerStates = computed(() => {
		if (!firstTriggerName.value) return [];
		const triggerEntry = nodesRequiringSetup.value.find(({ isTrigger, node: node$1 }) => isTrigger && node$1.name === firstTriggerName.value);
		if (!triggerEntry) return [];
		if (credentialTypeStates.value.some((credState) => credState.nodes.some((node$1) => isTriggerNode(node$1) && node$1.name === firstTriggerName.value))) return [];
		const { credentialTypes, parameterIssues, node } = triggerEntry;
		const hasParams = Object.keys(parameterIssues).length > 0 || nodeHasTemplateParams(node.name);
		if (credentialTypes.length > 0 && credentialTypes.some((ct) => perNodeCredTypes.value.has(ct)) || hasParams) return [];
		const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
		if (!nodeType?.webhooks?.length && !nodeType?.polling && !nodeType?.triggerPanel) return [];
		return [buildTriggerSetupState(node, credentialTypes, credentialTypeStates.value, hasTriggerExecutedSuccessfully(node.name))];
	});
	const nodeStates = computed(() => {
		const result = [];
		for (const entry of nodesWithMissingParameters.value) {
			if (entry.credentialTypes.length > 0) continue;
			const { node, parameterIssues, isTrigger } = entry;
			const state$1 = {
				node,
				parameterIssues,
				additionalParameterNames: templateParametersByNode.value.get(node.name),
				isTrigger,
				isComplete: false
			};
			state$1.isComplete = isNodeSetupComplete(state$1, buildCompletionContext());
			result.push(state$1);
		}
		const credTypeToAllNodes = /* @__PURE__ */ new Map();
		const credTypeToEntries = /* @__PURE__ */ new Map();
		for (const entry of nodesRequiringSetup.value) {
			const { node, credentialTypes, parameterIssues } = entry;
			if (credentialTypes.length === 0) continue;
			for (const credType of credentialTypes) {
				if (!perNodeCredTypes.value.has(credType)) continue;
				if (!credTypeToAllNodes.has(credType)) credTypeToAllNodes.set(credType, []);
				if (!credTypeToAllNodes.get(credType).some((n) => n.id === node.id)) credTypeToAllNodes.get(credType).push(node);
				const combinationKey = `${credType}:${node.id}`;
				const hasParameters = Object.keys(parameterIssues).length > 0;
				const hasTemplateParams = nodeHasTemplateParams(node.name);
				const alreadySeen = stickyNodeCredentials.value.has(combinationKey);
				if (hasParameters || hasTemplateParams || alreadySeen) {
					if (!credTypeToEntries.has(credType)) credTypeToEntries.set(credType, []);
					credTypeToEntries.get(credType).push(entry);
				}
			}
		}
		const seenCombinations = /* @__PURE__ */ new Set();
		for (const [credType, entries] of credTypeToEntries) {
			let isFirstNode = true;
			const allNodesUsingCredential = credTypeToAllNodes.get(credType) ?? [];
			for (const entry of entries) {
				const { node, parameterIssues, isTrigger } = entry;
				const combinationKey = `${credType}:${node.id}`;
				if (seenCombinations.has(combinationKey)) continue;
				seenCombinations.add(combinationKey);
				const credValue = node.credentials?.[credType];
				const selectedCredentialId = typeof credValue === "string" ? void 0 : credValue?.id ?? void 0;
				const issueMessages = [(node.issues?.credentials ?? {})[credType] ?? []].flat();
				const isAutoApplied = !!selectedCredentialId && autoAppliedCredentialIds.value.has(selectedCredentialId);
				const state$1 = {
					node,
					credentialType: credType,
					credentialDisplayName: getCredentialDisplayName(credType),
					selectedCredentialId,
					issues: issueMessages,
					parameterIssues,
					additionalParameterNames: templateParametersByNode.value.get(node.name),
					isTrigger,
					showCredentialPicker: isFirstNode,
					isComplete: false,
					allNodesUsingCredential,
					isAutoApplied
				};
				state$1.isComplete = isNodeSetupComplete(state$1, buildCompletionContext(credType));
				result.push(state$1);
				isFirstNode = false;
			}
		}
		return result;
	});
	watch(nodeStates, (states) => {
		for (const state$1 of states) if (state$1.credentialType) stickyNodeCredentials.value.add(`${state$1.credentialType}:${state$1.node.id}`);
	}, { immediate: true });
	const setupCards = computed(() => {
		const credentialCards = credentialTypeStates.value.map((credState) => ({
			node: credState.nodes[0],
			credentialType: credState.credentialType,
			credentialDisplayName: credState.credentialDisplayName,
			selectedCredentialId: credState.selectedCredentialId,
			issues: credState.issues,
			parameterIssues: {},
			isTrigger: isTriggerNode(credState.nodes[0]),
			showCredentialPicker: true,
			isComplete: credState.isComplete,
			isAutoApplied: credState.isAutoApplied,
			allNodesUsingCredential: credState.nodes
		}));
		const triggerCards = triggerStates.value.map((trigState) => ({
			node: trigState.node,
			parameterIssues: {},
			isTrigger: true,
			isComplete: trigState.isComplete
		}));
		const all = [
			...credentialCards,
			...triggerCards,
			...nodeStates.value
		].filter((state$1) => state$1.node.type !== MANUAL_TRIGGER_NODE_TYPE).map((state$1) => ({ state: state$1 }));
		const executionOrder = nodesRequiringSetup.value.map(({ node }) => node.name);
		return all.sort((a, b) => executionOrder.indexOf(a.state.node.name) - executionOrder.indexOf(b.state.node.name));
	});
	const totalCredentialsMissing = computed(() => {
		return credentialTypeStates.value.filter((s) => !s.isComplete).length;
	});
	const totalCardsRequiringSetup = computed(() => {
		return setupCards.value.length;
	});
	const isAllComplete = computed(() => {
		return setupCards.value.length > 0 && setupCards.value.every((card) => card.state.isComplete);
	});
	async function testCredentialInBackground(credentialId, credentialName, credentialType) {
		if (!isCredentialTypeTestable(credentialType)) return;
		if (credentialsStore.isCredentialTestedOk(credentialId) || credentialsStore.isCredentialTestPending(credentialId)) return;
		try {
			const credentialResponse = await credentialsStore.getCredentialData({ id: credentialId });
			if (!credentialResponse?.data || typeof credentialResponse.data === "string") return;
			if (credentialsStore.isCredentialTestedOk(credentialId) || credentialsStore.isCredentialTestPending(credentialId)) return;
			const { ownedBy, sharedWithProjects, oauthTokenData, ...data } = credentialResponse.data;
			if (oauthTokenData) {
				credentialsStore.credentialTestResults.set(credentialId, "success");
				return;
			}
			await credentialsStore.testCredential({
				id: credentialId,
				name: credentialName,
				type: credentialType,
				data
			});
		} catch {}
	}
	const getAffectedNodeNames = (credentialType, sourceNodeName) => {
		const allCredStates = credentialTypeStates.value;
		const credState = sourceNodeName ? allCredStates.find((s) => s.credentialType === credentialType && s.nodes.some((n) => n.name === sourceNodeName)) : allCredStates.find((s) => s.credentialType === credentialType);
		if (credState) return credState.nodes.map((n) => n.name);
		if (!sourceNodeName) return [];
		const sourceEntry = nodeStates.value.find((s) => s.credentialType === credentialType && s.node.name === sourceNodeName);
		if (sourceEntry?.allNodesUsingCredential) return sourceEntry.allNodesUsingCredential.map((n) => n.name);
		return [sourceNodeName];
	};
	const setCredential = (credentialType, credentialId, sourceNodeName, skipHttpRequestType = false) => {
		const credential = credentialsStore.getCredentialById(credentialId);
		if (!credential) return;
		const credentialDetails = {
			id: credentialId,
			name: credential.name
		};
		testCredentialInBackground(credentialId, credential.name, credentialType);
		for (const nodeName of getAffectedNodeNames(credentialType, sourceNodeName)) {
			const node = workflowDocumentStore?.value?.getNodeByName(nodeName);
			if (!node) continue;
			if (skipHttpRequestType && isHttpRequestNodeType(node.type)) continue;
			const prevCred = node.credentials?.[credentialType];
			const prevId = typeof prevCred === "string" ? void 0 : prevCred?.id;
			if (prevId) autoAppliedCredentialIds.value.delete(prevId);
			workflowDocumentStore?.value?.updateNodeProperties({
				name: nodeName,
				properties: { credentials: {
					...node.credentials,
					[credentialType]: credentialDetails
				} }
			});
		}
		nodeHelpers.updateNodesCredentialsIssues();
		useUIStore().markStateDirty();
	};
	const unsetCredential = (credentialType, sourceNodeName) => {
		for (const nodeName of getAffectedNodeNames(credentialType, sourceNodeName)) {
			const node = workflowDocumentStore?.value?.getNodeByName(nodeName);
			if (!node) continue;
			const updatedCredentials = { ...node.credentials };
			delete updatedCredentials[credentialType];
			workflowDocumentStore?.value?.updateNodeProperties({
				name: nodeName,
				properties: { credentials: updatedCredentials }
			});
		}
		nodeHelpers.updateNodesCredentialsIssues();
		useUIStore().markStateDirty();
	};
	const tryAutoApplyCredential = (credentialType, sourceNodeName) => {
		const available = credentialsStore.getCredentialsByType(credentialType);
		if (available.length === 0) return;
		const mostRecent = available.reduce((best, current) => best.updatedAt > current.updatedAt ? best : current, available[0]);
		autoAppliedCredentialIds.value.add(mostRecent.id);
		setCredential(credentialType, mostRecent.id, sourceNodeName, true);
	};
	const autoSelectCredentials = () => {
		const credStates = [...credentialTypeStates.value];
		const nStates = [...nodeStates.value];
		for (const credState of credStates) {
			if (credState.selectedCredentialId) continue;
			tryAutoApplyCredential(credState.credentialType);
		}
		for (const nodeState of nStates) {
			if (!nodeState.credentialType || nodeState.selectedCredentialId) continue;
			tryAutoApplyCredential(nodeState.credentialType, nodeState.node.name);
		}
	};
	const isInitialCredentialTestingDone = ref(false);
	let initialSetupDone = false;
	watch(nodesRequiringSetup, (entries) => {
		if (initialSetupDone || entries.length === 0) return;
		initialSetupDone = true;
		autoSelectCredentials();
		const credentialsToTest = /* @__PURE__ */ new Map();
		for (const { node, credentialTypes } of entries) for (const credType of credentialTypes) {
			const credValue = node.credentials?.[credType];
			const selectedId = typeof credValue === "string" ? void 0 : credValue?.id;
			if (!selectedId || credentialsToTest.has(selectedId)) continue;
			const cred = credentialsStore.getCredentialById(selectedId);
			if (!cred) continue;
			credentialsToTest.set(selectedId, {
				name: cred.name,
				type: credType
			});
		}
		const testPromises = [];
		for (const [id, { name, type }] of credentialsToTest) testPromises.push(testCredentialInBackground(id, name, type));
		if (testPromises.length === 0) isInitialCredentialTestingDone.value = true;
		else Promise.allSettled(testPromises).then(() => {
			isInitialCredentialTestingDone.value = true;
		});
	}, { immediate: true });
	listenForCredentialChanges({
		store: credentialsStore,
		onCredentialDeleted: (deletedCredentialId) => {
			for (const { node, credentialTypes } of nodesRequiringSetup.value) for (const credType of credentialTypes) {
				const credValue = node.credentials?.[credType];
				if ((typeof credValue === "string" ? void 0 : credValue?.id) === deletedCredentialId) unsetCredential(credType);
			}
		}
	});
	return {
		setupCards,
		credentialTypeStates,
		triggerStates,
		nodeStates,
		firstTriggerName,
		totalCredentialsMissing,
		totalCardsRequiringSetup,
		isAllComplete,
		isInitialCredentialTestingDone,
		nodesWithMissingParameters,
		autoAppliedCredentialIds,
		setCredential,
		unsetCredential
	};
};
var CanvasRunWorkflowButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CanvasRunWorkflowButton",
	props: {
		selectedTriggerNodeName: {},
		triggerNodes: {},
		waitingForWebhook: { type: Boolean },
		executing: { type: Boolean },
		disabled: { type: Boolean },
		hideTooltip: { type: Boolean },
		label: {},
		size: {},
		includeChatTrigger: { type: Boolean },
		getNodeType: { type: Function }
	},
	emits: [
		"mouseenter",
		"mouseleave",
		"execute",
		"selectTriggerNode"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const props = __props;
		const i18n = useI18n();
		const selectableTriggerNodes = computed(() => props.triggerNodes.filter((node) => !node.disabled && (props.includeChatTrigger ? true : !isChatNode(node))));
		const label = computed(() => {
			if (!props.executing) return props.label ?? i18n.baseText("nodeView.runButtonText.executeWorkflow");
			if (props.waitingForWebhook) return i18n.baseText("nodeView.runButtonText.waitingForTriggerEvent");
			return i18n.baseText("nodeView.runButtonText.executingWorkflow");
		});
		const actions = computed(() => props.triggerNodes.filter((node) => props.includeChatTrigger ? true : !isChatNode(node)).toSorted((a, b) => {
			const [aX, aY] = a.position;
			const [bX, bY] = b.position;
			return aY === bY ? aX - bX : aY - bY;
		}).map((node) => ({
			label: truncateBeforeLast(node.name, 50),
			disabled: !!node.disabled || props.executing,
			id: node.name,
			checked: props.selectedTriggerNodeName === node.name
		})));
		const isSplitButton = computed(() => selectableTriggerNodes.value.length > 1 && props.selectedTriggerNodeName !== void 0);
		function getNodeTypeByName(name) {
			const node = props.triggerNodes.find((trigger) => trigger.name === name);
			if (!node) return null;
			return props.getNodeType(node.type, node.typeVersion);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.component, isSplitButton.value ? _ctx.$style.split : ""]) }, [createVNode(KeyboardShortcutTooltip_default, {
				label: label.value,
				shortcut: {
					metaKey: true,
					keys: ["↵"]
				},
				disabled: __props.executing || __props.hideTooltip
			}, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "solid",
					class: normalizeClass(_ctx.$style.button),
					loading: __props.executing,
					iconOnly: __props.executing,
					"aria-label": unref(i18n).baseText("nodeView.runButtonText.executeWorkflow"),
					disabled: __props.disabled,
					size: __props.size ?? "large",
					icon: "flask-conical",
					"data-test-id": "execute-workflow-button",
					onMouseenter: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("mouseenter", $event)),
					onMouseleave: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("mouseleave", $event)),
					onClick: _cache[2] || (_cache[2] = ($event) => emit("execute"))
				}, {
					default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.buttonContent) }, [createTextVNode(toDisplayString(label.value) + " ", 1), isSplitButton.value ? (openBlock(), createBlock(unref(N8nText_default), {
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
				}, 8, [
					"class",
					"loading",
					"iconOnly",
					"aria-label",
					"disabled",
					"size"
				])]),
				_: 1
			}, 8, ["label", "disabled"]), isSplitButton.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", {
				role: "presentation",
				class: normalizeClass(_ctx.$style.divider)
			}, null, 2), createVNode(unref(N8nActionDropdown_default), {
				class: normalizeClass(_ctx.$style.menu),
				items: actions.value,
				disabled: __props.disabled,
				placement: "top",
				"extra-popper-class": _ctx.$style.menuPopper,
				onSelect: _cache[3] || (_cache[3] = ($event) => emit("selectTriggerNode", $event))
			}, {
				activator: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "solid",
					"icon-size": "large",
					disabled: __props.disabled,
					class: normalizeClass(_ctx.$style.chevron),
					"aria-label": "Select trigger node",
					icon: "chevron-down"
				}, null, 8, ["disabled", "class"])]),
				menuItem: withCtx((item) => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.menuItem, item.disabled ? _ctx.$style.disabled : ""]) }, [createVNode(NodeIcon_default, {
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
			}, 8, [
				"class",
				"items",
				"disabled",
				"extra-popper-class"
			])], 64)) : createCommentVNode("", true)], 2);
		};
	}
});
var CanvasRunWorkflowButton_vue_vue_type_style_index_0_lang_module_default = {
	component: "_component_bmdz8_125",
	split: "_split_bmdz8_131",
	button: "_button_bmdz8_131",
	divider: "_divider_bmdz8_143",
	chevron: "_chevron_bmdz8_148",
	menu: "_menu_bmdz8_155",
	menuPopper: "_menuPopper_bmdz8_159",
	menuItem: "_menuItem_bmdz8_163",
	disabled: "_disabled_bmdz8_169",
	menuIcon: "_menuIcon_bmdz8_169",
	buttonContent: "_buttonContent_bmdz8_173",
	subText: "_subText_bmdz8_180"
};
var CanvasRunWorkflowButton_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CanvasRunWorkflowButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CanvasRunWorkflowButton_vue_vue_type_style_index_0_lang_module_default }]]);
export { isHttpRequestNodeType as a, useGlobalLinkActions as c, useTriggerExecution as i, useWorkflowExtraction as l, useWorkflowSetupState as n, WebhookUrlPreview_default as o, useWebhookUrls as r, TriggerExecuteButton_default as s, CanvasRunWorkflowButton_default as t };
