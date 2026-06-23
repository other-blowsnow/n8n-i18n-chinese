import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, O as createSlots, Pt as reactive, S as computed, T as createCommentVNode, Ut as toValue, X as onMounted, Z as onUnmounted, _ as Fragment, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, rt as renderList, tt as provide, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { c as I18nT, s as useI18n } from "./src-D8xRy2J0.js";
import { Ja as N8nButton_default, Ji as truncateBeforeLast, Lt as N8nActionDropdown_default, Ya as N8nIcon_default, ct as N8nLink_default, en as ElCollapseTransition, gt as useRouter, qa as N8nText_default, zi as N8nTooltip_default } from "./src-BwN8TeVO.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { l as useExpressionResolveCtx } from "./useWorkflowDocumentRenderData-DTcljtAM.js";
import { t as ParameterInputList_default } from "./ParameterInputList-CQZ1qkqk.js";
import { t as useToast } from "./useToast-DAdCVdhz.js";
import { Is as getNodeParameters, Ls as getNodeParametersIssues$1, P as PLACEHOLDER_FILLED_AT_EXECUTION_TIME, Qs as nodeAcceptsInputType, Xc as EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE, Yi as WORKFLOW_EXTRACTION_NAME_MODAL_KEY, Yo as extractReferencesInNodeExpressions, dl as require_isEqual, hc as isExpression, js as displayParameter, ll as v4, pc as NodeConnectionTypes, ql as ExpressionLocalResolveContextSymbol, uc as isResourceLocatorValue, ui as VIEWS, wn as MANUAL_TRIGGER_NODE_TYPE } from "./constants-BiYlbN9Z.js";
import { $t as injectNDVStore, D as getNodeTypeDisplayableCredentials, Gt as useWorkflowHelpers, M as useNodeTypesStore, Sr as PUSH_NODES_OFFSET, Un as getTriggerNodeServiceName, Xt as sanitizeConnections, Zt as sortNodesByExecutionOrder, _t as listenForCredentialChanges, j as require_uniq, nn as useEnvironmentsStore, oi as checkExhaustive, t as useWorkflowsStore, v as useWorkflowExecutionStateStore, vt as useCredentialsStore, x as injectWorkflowDocumentStore } from "./workflows.store-Cb_U1DcB.js";
import { t as computedAsync } from "./core-BemUAWor.js";
import { f as useUIStore, p as useTelemetry } from "./users.store-CUZkGc51.js";
import "./builder.store-CtNK1dxn.js";
import { i as isPlaceholderValue, n as findPlaceholderDetails } from "./dist-C5au1DeO.js";
import { n as useHistoryStore, t as useNodeHelpers } from "./useNodeHelpers-1JmJdsk0.js";
import { t as useTemplatesStore } from "./templates.store-CLOWjb7T.js";
import { i as globalLinkActionsEventBus } from "./event-bus-D26CxQSb.js";
import { t as useClipboard } from "./useClipboard-BG-Pv4tW.js";
import { l as useLogsStore, n as useSelectionValidation, s as isChatNode, t as useCanvasOperations } from "./useCanvasOperations-B7hvlwMm.js";
import { t as NodeCredentials_default } from "./NodeCredentials-DzS40uLi.js";
import { t as NodeIcon_default } from "./NodeIcon-DSeDnvam2.js";
import { r as useNodeExecution } from "./VirtualSchema-DNp1eA4E.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-CYHtGMxe.js";
//#region src/app/composables/useWorkflowExtraction.ts
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual(), 1);
var import_uniq = /* @__PURE__ */ __toESM(require_uniq(), 1);
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
	const { isSelectionExtractable } = useSelectionValidation();
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
					id: v4(),
					name: x[0],
					value: `={{ ${x[1]} }}`,
					type: "string"
				}))] },
				options: {}
			},
			type: "n8n-nodes-base.set",
			typeVersion: 3.4,
			position: endNodePosition,
			id: v4(),
			name: returnNodeName
		}] : [];
		const triggerParameters = selectionVariables.size === 0 ? { inputSource: "passthrough" } : { workflowInputs: { values: [...selectionVariables.keys().map((k) => ({
			name: k,
			type: "any"
		}))] } };
		const triggerNode = {
			id: v4(),
			typeVersion: 1.1,
			name: startNodeName,
			type: EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE,
			position: startNodePosition,
			parameters: triggerParameters
		};
		const result = {
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
			projectId: workflowDocumentStore.value.homeProject?.id,
			parentFolderId: workflowDocumentStore.value.parentFolder?.id ?? void 0
		};
		result.connections = sanitizeConnections(result.connections, result.nodes?.map((x) => x.name));
		return result;
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
				params: { workflowId: createdWorkflow.id }
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
	async function replaceSelectionWithNode(executeWorkflowNodeData, startId, endId, selection, selectionChildNodes) {
		historyStore.startRecordingUndo();
		uiStore.resetLastInteractedWith();
		const executeWorkflowNode = (await canvasOperations.addNodes([executeWorkflowNodeData], {
			...CANVAS_HISTORY_OPTIONS,
			forcePosition: true
		}))[0];
		addReplacementNodeToSelectionGroup(selection.map((node) => node.id), executeWorkflowNode.id);
		if (endId) canvasOperations.replaceNodeConnections(endId, executeWorkflowNode.id, {
			...CANVAS_HISTORY_OPTIONS,
			replaceInputs: false,
			validateNodeGroups: false
		});
		if (startId) canvasOperations.replaceNodeConnections(startId, executeWorkflowNode.id, {
			...CANVAS_HISTORY_OPTIONS,
			replaceOutputs: false,
			validateNodeGroups: false
		});
		canvasOperations.deleteNodes(selection.map((x) => x.id), CANVAS_HISTORY_OPTIONS);
		for (const node of selectionChildNodes) {
			const currentNode = workflowDocumentStore.value.allNodes.find((x) => x.id === node.id);
			if ((0, import_isEqual.default)(node, currentNode)) continue;
			canvasOperations.replaceNodeParameters(node.id, { ...currentNode?.parameters }, { ...node.parameters }, CANVAS_HISTORY_OPTIONS);
		}
		uiStore.markStateDirty();
		historyStore.stopRecordingUndo();
	}
	function addReplacementNodeToSelectionGroup(selectionIds, replacementNodeId) {
		const affectedGroupIds = (0, import_uniq.default)(selectionIds.map((nodeId) => workflowDocumentStore.value.getGroupForNode(nodeId)?.id).filter((id) => id !== void 0));
		if (affectedGroupIds.length !== 1) return;
		workflowDocumentStore.value.addNodesToGroup(affectedGroupIds[0], [replacementNodeId]);
	}
	function tryExtractNodesIntoSubworkflow(nodeIds) {
		const result = isSelectionExtractable(nodeIds);
		if (!result.valid) {
			switch (result.reason) {
				case "trigger-selected":
					showError(i18n.baseText("workflowExtraction.error.triggerSelected", { interpolate: { nodes: result.triggers.map((name) => `'${name}'`).join(", ") } }));
					break;
				case "invalid-subgraph":
					showError(i18n.baseText("workflowExtraction.error.selectionGraph.listHeader", { interpolate: { body: result.errors.map(extractableErrorResultToMessage).map((x) => `- ${x}`).join("<br>") } }));
					break;
				case "multiple-input-branches":
					showError(i18n.baseText("workflowExtraction.error.inputNodeHasMultipleInputBranches", { interpolate: { node: result.node } }));
					break;
				case "multiple-output-branches":
					showError(i18n.baseText("workflowExtraction.error.outputNodeHasMultipleOutputBranches", { interpolate: { node: result.node } }));
					break;
				default: checkExhaustive(result);
			}
			return false;
		}
		uiStore.openModalWithData({
			name: WORKFLOW_EXTRACTION_NAME_MODAL_KEY,
			data: {
				subGraph: result.subGraph,
				selection: result.subGraphData
			}
		});
		return true;
	}
	async function doExtractNodesIntoSubworkflow(selection, subGraph, newWorkflowName) {
		const { start, end } = selection;
		const allNodeNames = workflowDocumentStore.value.allNodes.map((x) => x.name) ?? [];
		let startNodeName = "Start";
		const subGraphNames = subGraph.map((x) => x.name);
		while (subGraphNames.includes(startNodeName)) startNodeName += "_1";
		let returnNodeName = "Return";
		while (subGraphNames.includes(returnNodeName)) returnNodeName += "_1";
		const directAfterEndNodeNames = end ? workflowDocumentStore.value.getChildNodes(end, "main", 1).map((x) => workflowDocumentStore.value.getNodeByName(x)?.name).filter((x) => x !== void 0) ?? [] : [];
		const allAfterEndNodes = end ? workflowDocumentStore.value.getChildNodes(end, "ALL").map((x) => workflowDocumentStore.value.getNodeByName(x) ?? null).filter((x) => x !== null) ?? [] : [];
		const { nodes, variables } = extractReferencesInNodeExpressions(subGraph, allNodeNames, startNodeName, start ? [start] : void 0);
		let executeWorkflowNodeName = `Call ${newWorkflowName}`;
		while (allNodeNames.includes(executeWorkflowNodeName)) executeWorkflowNodeName += "_1";
		const { nodes: afterNodes, variables: afterVariables } = extractReferencesInNodeExpressions(allAfterEndNodes, allAfterEndNodes.map((x) => x.name).concat(subGraphNames), executeWorkflowNodeName, directAfterEndNodeNames);
		const createdWorkflow = await tryCreateWorkflow(makeSubworkflow(newWorkflowName, selection, nodes, workflowDocumentStore.value?.connectionsBySourceNode, variables, afterVariables, startNodeName, returnNodeName));
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
	/**
	* This mutates the current workflow and creates a new one.
	* Intended to be called from @WorkflowExtractionNameModal spawned
	* by @tryExtractNodesIntoSubworkflow
	*/
	async function extractNodesIntoSubworkflow(selection, subGraph, newWorkflowName) {
		const success = await doExtractNodesIntoSubworkflow(selection, subGraph, newWorkflowName);
		trackExtractWorkflow(subGraph.length, success);
	}
	/**
	* This starts the extraction process by checking whether the selection is extractable
	* and spawning a pop up asking for a sub-workflow name.
	* If confirmed, the modal calls @extractNodesIntoSubworkflow to handle the actual mutation
	*
	* @param nodeIds the ids to be extracted from the current workflow into a sub-workflow
	*/
	function extractWorkflow(nodeIds) {
		if (nodeIds.length === 0) return;
		const success = tryExtractNodesIntoSubworkflow(nodeIds);
		trackStartExtractWorkflow(nodeIds.length, success);
	}
	return {
		extractWorkflow,
		tryExtractNodesIntoSubworkflow,
		extractNodesIntoSubworkflow
	};
}
//#endregion
//#region src/app/composables/useGlobalLinkActions.ts
/**
* Creates event listeners for `data-action` attribute to allow for actions to be called from locale without using
* unsafe onclick attribute
*/
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
//#endregion
//#region src/features/setupPanel/components/TriggerExecuteButton.vue?vue&type=script&setup=true&lang.ts
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
var TriggerExecuteButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TriggerExecuteButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TriggerExecuteButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/setupPanel/components/WebhookUrlPreview.vue?vue&type=script&setup=true&lang.ts
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
//#endregion
//#region src/features/setupPanel/components/WebhookUrlPreview.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_1w8i0_125";
var header = "_header_1w8i0_129";
var expanded = "_expanded_1w8i0_141";
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
var WebhookUrlPreview_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WebhookUrlPreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WebhookUrlPreview_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/setupPanel/components/cards/SetupCardSection.vue
var SetupCardSection_default = /* @__PURE__ */ defineComponent({
	__name: "SetupCardSection",
	props: { state: {} },
	setup(__props) {
		const props = __props;
		provide(ExpressionLocalResolveContextSymbol, useExpressionResolveCtx(computed(() => props.state.node)));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [renderSlot(_ctx.$slots, "default")]);
		};
	}
});
//#endregion
//#region src/features/setupPanel/setupPanel.utils.ts
var isHttpRequestNodeType = (nodeType) => nodeType === "n8n-nodes-base.httpRequest" || nodeType === "n8n-nodes-base.httpRequestTool";
/**
* Collects all credential types that a node requires from three sources:
* 1. Node type definition — standard credentials with displayOptions
* 2. Node issues — dynamic credentials (e.g. in HTTP Request node) that are missing or invalid
* 3. Assigned credentials — dynamic credentials already properly set
*/
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
	const paramsWithDefaults = getNodeParameters(nodeType.properties, node.parameters, true, false, node, nodeType) ?? node.parameters;
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
/**
* Groups credential requirements across all nodes by credential type.
* Returns one CredentialTypeSetupState per unique credential type.
*
* For HTTP Request nodes, grouping is by credential type + URL. When the URL is an expression,
* the optional resolveExpressionUrl callback attempts to resolve it. If resolution succeeds
* (e.g. static expressions or those using only environment variables), the resolved value
* is used for grouping. Otherwise each node gets its own card.
*/
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
	for (const state of map.values()) state.isComplete = !!state.selectedCredentialId && state.issues.length === 0;
	return Array.from(map.values());
}
/**
* Single source of truth for whether a per-node setup card is complete.
* Handles credential, parameter, and trigger checks uniformly.
*/
function isNodeSetupComplete(state, ctx) {
	if (state.credentialType) {
		if (!state.selectedCredentialId || (state.issues?.length ?? 0) > 0) return false;
		if (ctx.isCredentialTestedOk && state.selectedCredentialId && !ctx.isCredentialTestedOk(state.selectedCredentialId)) return false;
	}
	if (Object.keys(state.parameterIssues).length > 0 || ctx.hasUnfilledTemplateParams(state.node)) return false;
	if (state.isTrigger && state.node.name === ctx.firstTriggerName && !ctx.hasTriggerExecuted(state.node.name)) return false;
	return true;
}
/**
* Checks whether a grouped credential card is fully complete.
* For cards with embedded triggers, complete = credential set + no issues + test ok + all first-triggers executed.
*/
function isCredentialCardComplete(credState, ctx) {
	if (!(!!credState.selectedCredentialId && credState.issues.length === 0)) return false;
	if (ctx.isCredentialTestedOk && credState.selectedCredentialId && !ctx.isCredentialTestedOk(credState.selectedCredentialId)) return false;
	return credState.nodes.filter((node) => ctx.isTriggerNode(node.type) && node.name === ctx.firstTriggerName).every((node) => ctx.hasTriggerExecuted(node.name));
}
/**
* Builds the setup state for a standalone trigger card.
* Complete when: trigger has been executed AND all its credential types are satisfied.
*/
function buildTriggerSetupState(node, triggerCredentialTypes, credentialTypeStates, hasTriggerExecuted) {
	return {
		node,
		isComplete: triggerCredentialTypes.every((credType) => {
			const credState = credentialTypeStates.find((s) => s.credentialType === credType);
			return credState ? !!credState.selectedCredentialId && credState.issues.length === 0 : true;
		}) && hasTriggerExecuted
	};
}
function isCardComplete(card) {
	if (card.nodeGroup) {
		const { parentState, subnodeCards } = card.nodeGroup;
		return (!parentState || parentState.isComplete) && subnodeCards.every((c) => c.isComplete);
	}
	return card.state.isComplete;
}
function isNodeGroupCard(card) {
	return !!card.nodeGroup;
}
//#endregion
//#region src/features/setupPanel/components/cards/SetupCardBody.vue?vue&type=script&setup=true&lang.ts
var SetupCardBody_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SetupCardBody",
	props: {
		state: {},
		stickyParameters: {},
		isWizard: { type: Boolean }
	},
	emits: [
		"credentialSelected",
		"credentialDeselected",
		"valueChanged",
		"interacted",
		"parametersDiscovered"
	],
	setup(__props, { emit: __emit }) {
		const NESTED_PARAM_TYPES = new Set([
			"collection",
			"fixedCollection",
			"resourceMapper",
			"filter",
			"assignmentCollection"
		]);
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const nodeHelpers = useNodeHelpers();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const ndvStore = injectNDVStore();
		const nodeType = computed(() => nodeTypesStore.getNodeType(props.state.node.type, props.state.node.typeVersion));
		const isHttpRequestNode = computed(() => isHttpRequestNodeType(props.state.node.type));
		const isNestedParam = (p) => NESTED_PARAM_TYPES.has(p.type) || p.typeOptions?.multipleValues === true;
		/**
		* Computes displayable parameters whose names appear in parameterIssues or
		* additionalParameterNames, filtered by displayOptions.
		*/
		const discoveredParameters = computed(() => {
			if (!nodeType.value?.properties) return [];
			const issueParamNames = Object.keys(props.state.parameterIssues);
			const additionalParamNames = props.state.additionalParameterNames ?? [];
			const allParamNames = new Set([...issueParamNames, ...additionalParamNames]);
			return nodeType.value.properties.filter((prop) => allParamNames.has(prop.name) && displayParameter(props.state.node.parameters, prop, props.state.node, nodeType.value));
		});
		/**
		* Emit newly discovered parameters so the parent can accumulate them
		* in its own sticky array. This keeps the prop read-only.
		*/
		watch(discoveredParameters, (params) => {
			if (!props.stickyParameters) return;
			const newParams = params.filter((p) => !props.stickyParameters.includes(p));
			if (newParams.length > 0) emit("parametersDiscovered", newParams);
		}, { immediate: true });
		/** Parameters to render: sticky list in panel mode, discovered list in wizard mode. */
		const allParameters = computed(() => props.stickyParameters ?? discoveredParameters.value);
		const simpleParameters = computed(() => allParameters.value.filter((p) => !isNestedParam(p)));
		const nestedParameterCount = computed(() => allParameters.value.filter(isNestedParam).length);
		const nodeNames = computed(() => (props.state.allNodesUsingCredential ?? []).map((n) => n.name));
		const nodeNamesTooltip = computed(() => nodeNames.value.join(", "));
		const openNdv = () => {
			ndvStore.value.setActiveNodeName(props.state.node.name, "other");
		};
		const hideIssuesMap = ref(/* @__PURE__ */ new Map());
		watch(simpleParameters, (params) => {
			for (const p of params) if (!hideIssuesMap.value.has(p.name)) hideIssuesMap.value.set(p.name, true);
		}, { immediate: true });
		const hiddenIssuesInputs = computed(() => [...hideIssuesMap.value.entries()].filter(([, hidden]) => hidden).map(([name]) => name));
		const revealParameterIssues = (parameterName) => {
			hideIssuesMap.value.set(parameterName, false);
		};
		const onCredentialSelected = (updateInfo) => {
			if (!props.state.credentialType) return;
			emit("interacted");
			const credentialData = updateInfo.properties.credentials?.[props.state.credentialType];
			const credentialId = typeof credentialData === "string" ? void 0 : credentialData?.id;
			if (credentialId) emit("credentialSelected", {
				credentialType: props.state.credentialType,
				credentialId,
				nodeName: props.state.node.name
			});
			else emit("credentialDeselected", {
				credentialType: props.state.credentialType,
				nodeName: props.state.node.name
			});
		};
		const onValueChanged = (parameterData) => {
			emit("interacted");
			const paramName = props.isWizard ? parameterData.name.replace(/^parameters\./, "") : parameterData.name;
			revealParameterIssues(paramName);
			workflowDocumentStore.value.updateNodeProperties({
				name: props.state.node.name,
				properties: { parameters: {
					...props.state.node.parameters,
					[paramName]: parameterData.value
				} }
			});
			nodeHelpers.updateNodesParameterIssues();
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.body) }, [
				__props.state.showCredentialPicker ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.credentialContainer)
				}, [createVNode(NodeCredentials_default, {
					node: __props.state.node,
					"override-cred-type": __props.state.credentialType ?? "",
					"skip-auto-select": isHttpRequestNode.value,
					"hide-issues": "",
					onCredentialSelected
				}, createSlots({ _: 2 }, [nodeNames.value.length > 1 ? {
					name: "label-postfix",
					fn: withCtx(() => [createVNode(unref(N8nTooltip_default), { placement: "top" }, {
						content: withCtx(() => [createTextVNode(toDisplayString(nodeNamesTooltip.value), 1)]),
						default: withCtx(() => [__props.isWizard ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							"data-test-id": "builder-setup-card-nodes-hint",
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("setupPanel.usedInNodes", { interpolate: { count: String(nodeNames.value.length) } })), 1)]),
							_: 1
						})) : (openBlock(), createElementBlock("span", {
							key: 1,
							"data-test-id": "node-setup-card-nodes-hint",
							class: normalizeClass(_ctx.$style.nodesHint)
						}, toDisplayString(unref(i18n).baseText("setupPanel.usedInNodes", { interpolate: { count: String(nodeNames.value.length) } })), 3))]),
						_: 1
					})]),
					key: "0"
				} : void 0]), 1032, [
					"node",
					"override-cred-type",
					"skip-auto-select"
				])], 2)) : createCommentVNode("", true),
				simpleParameters.value.length > 0 ? (openBlock(), createBlock(ParameterInputList_default, {
					key: 1,
					parameters: simpleParameters.value,
					"node-values": __props.isWizard ? { parameters: __props.state.node.parameters } : __props.state.node.parameters,
					"remove-first-parameter-margin": true,
					"remove-last-parameter-margin": true,
					node: __props.state.node,
					"hide-delete": true,
					"hidden-issues-inputs": hiddenIssuesInputs.value,
					path: __props.isWizard ? "parameters" : void 0,
					"options-overrides": {
						hideExpressionSelector: true,
						hideFocusPanelButton: true
					},
					onValueChanged,
					onParameterBlur: revealParameterIssues
				}, null, 8, [
					"parameters",
					"node-values",
					"node",
					"hidden-issues-inputs",
					"path"
				])) : createCommentVNode("", true),
				nestedParameterCount.value > 0 ? (openBlock(), createBlock(unref(N8nLink_default), {
					key: 2,
					"data-test-id": "builder-setup-card-configure-link",
					underline: true,
					theme: "text",
					size: "medium",
					onClick: openNdv
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.builder.setupWizard.configureParameters", {
						adjustToNumber: nestedParameterCount.value,
						interpolate: { count: String(nestedParameterCount.value) }
					})), 1)]),
					_: 1
				})) : createCommentVNode("", true)
			], 2);
		};
	}
});
var SetupCardBody_vue_vue_type_style_index_0_lang_module_default = {
	body: "_body_flk4k_125",
	credentialContainer: "_credentialContainer_flk4k_131",
	nodesHint: "_nodesHint_flk4k_139"
};
var SetupCardBody_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SetupCardBody_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SetupCardBody_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/setupPanel/composables/useTriggerExecution.ts
/**
* Wraps `useNodeExecution` with listening-hint logic for setup-panel cards.
* Returns everything a card needs: execution state for the button + listening
* hint text for the callout.
*/
function useTriggerExecution(node, options) {
	const i18n = useI18n();
	const nodeTypesStore = useNodeTypesStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const logsStore = useLogsStore();
	const { isExecuting, isListening, isListeningForWorkflowEvents, buttonLabel, buttonIcon, disabledReason, hasIssues, execute } = useNodeExecution(node, options);
	const nodeValue = computed(() => toValue(node));
	const nodeType = computed(() => nodeValue.value ? nodeTypesStore.getNodeType(nodeValue.value.type, nodeValue.value.typeVersion) : null);
	const isInListeningState = computed(() => {
		if (isListening.value || isListeningForWorkflowEvents.value) return true;
		return nodeType.value?.name === "@n8n/n8n-nodes-langchain.chatTrigger" && logsStore.isOpen && useWorkflowExecutionStateStore(workflowDocumentStore.value.documentId).chatPartialExecutionDestinationNode === nodeValue.value?.name;
	});
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
		return (workflowDocumentStore.value?.getParentNodes(nodeValue.value.name, "ALL") ?? []).some((name) => {
			const parentNode = workflowDocumentStore.value?.getNodeByName(name);
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
//#endregion
//#region src/features/setupPanel/composables/useWebhookUrls.ts
/**
* Resolves visible webhook test URLs for a given node.
* Used by setup-panel cards to display copiable webhook URLs
* while the trigger is in a listening state.
*/
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
		if (nodeType.value?.name === "@n8n/n8n-nodes-langchain.chatTrigger") return [];
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
//#endregion
//#region src/features/setupPanel/composables/useNodeGroupSections.ts
/**
* Returns true when a section has required parameters (issues or additional parameter names).
* Sections with parameters stay expanded so the user isn't interrupted mid-input.
*/
var sectionHasParameters = (section) => Object.keys(section.parameterIssues).length > 0 || (section.additionalParameterNames?.length ?? 0) > 0;
/**
* Shared composable for node-group section management.
* Used by both `BuilderNodeGroupCard` (wizard) and `NodeGroupSetupCard` (panel).
*/
function useNodeGroupSections(nodeGroup) {
	const nodeTypesStore = useNodeTypesStore();
	const parentNodeType = computed(() => nodeTypesStore.getNodeType(nodeGroup.value.parentNode.type, nodeGroup.value.parentNode.typeVersion));
	const subnodeSections = computed(() => nodeGroup.value.subnodeCards);
	/** All sections including parent state — used for completion tracking */
	const allSections = computed(() => {
		const sections = [];
		if (nodeGroup.value.parentState) sections.push(nodeGroup.value.parentState);
		sections.push(...subnodeSections.value);
		return sections;
	});
	const stickyParametersMap = reactive({});
	function getStickyParameters(nodeId) {
		if (!stickyParametersMap[nodeId]) stickyParametersMap[nodeId] = [];
		return stickyParametersMap[nodeId];
	}
	function addStickyParameters(nodeId, params) {
		getStickyParameters(nodeId).push(...params);
	}
	const expandedSections = reactive({});
	function initExpandState() {
		for (const section of allSections.value) if (!(section.node.id in expandedSections)) expandedSections[section.node.id] = false;
		const firstIncomplete = allSections.value.find((s) => !s.isComplete);
		if (firstIncomplete) expandedSections[firstIncomplete.node.id] = true;
	}
	initExpandState();
	function toggleSection(nodeId) {
		expandedSections[nodeId] = !expandedSections[nodeId];
	}
	const prevSectionComplete = /* @__PURE__ */ new Map();
	watch(allSections, (sections) => {
		for (const section of sections) {
			const wasComplete = prevSectionComplete.get(section.node.id) ?? false;
			if (section.isComplete && !wasComplete && !sectionHasParameters(section)) {
				expandedSections[section.node.id] = false;
				const nextIncomplete = sections.find((s) => !s.isComplete && s.node.id !== section.node.id);
				if (nextIncomplete) expandedSections[nextIncomplete.node.id] = true;
			}
		}
		prevSectionComplete.clear();
		for (const section of sections) prevSectionComplete.set(section.node.id, section.isComplete);
	}, { deep: true });
	const hoveredSection = ref(null);
	function onSectionMouseEnter(section) {
		hoveredSection.value = section;
	}
	function onSectionMouseLeave() {
		hoveredSection.value = null;
	}
	function getSectionNodeType(section) {
		return nodeTypesStore.getNodeType(section.node.type, section.node.typeVersion);
	}
	return {
		parentNodeType,
		subnodeSections,
		allSections,
		getStickyParameters,
		addStickyParameters,
		expandedSections,
		toggleSection,
		hoveredSection,
		onSectionMouseEnter,
		onSectionMouseLeave,
		getSectionNodeType
	};
}
//#endregion
//#region src/features/setupPanel/composables/groupSetupCards.ts
/**
* Builds a map of parent node name → direct sub-node names by inspecting
* non-Main connections (AI connections like ai_languageModel, ai_tool, etc.).
*/
function getDirectSubnodes(nodes, connectionsByDestination) {
	const directSubnodes = /* @__PURE__ */ new Map();
	for (const node of nodes) {
		const destConns = connectionsByDestination[node.name];
		if (!destConns) continue;
		const subs = /* @__PURE__ */ new Set();
		for (const connType of Object.keys(destConns)) {
			if (connType === NodeConnectionTypes.Main) continue;
			for (const inputSlot of destConns[connType] ?? []) for (const conn of inputSlot ?? []) subs.add(conn.node);
		}
		if (subs.size > 0) directSubnodes.set(node.name, subs);
	}
	return directSubnodes;
}
/**
* Recursively collects all transitive sub-nodes reachable from a parent,
* using the direct sub-node map.
*/
function collectTransitiveSubnodes(parentName, directSubnodes, visited) {
	const result = /* @__PURE__ */ new Set();
	const direct = directSubnodes.get(parentName);
	if (!direct) return result;
	for (const subName of direct) {
		if (visited.has(subName)) continue;
		visited.add(subName);
		result.add(subName);
		const nested = collectTransitiveSubnodes(subName, directSubnodes, visited);
		for (const n of nested) result.add(n);
	}
	return result;
}
/**
* Groups flat setup cards into node groups based on non-Main (parent/child) connections.
*
* Algorithm:
* 1. Build a direct sub-node map from non-Main connections
* 2. Find root parents (nodes with sub-nodes that aren't sub-nodes themselves)
* 3. Recursively collect transitive sub-nodes for each root parent
* 4. Replace individual cards with grouped entries in the final list
*
* Returns the original flat list unchanged if no groupable connections exist.
*/
function groupSetupCards(flatCards, nodes, connectionsByDestination, executionOrder) {
	const directSubnodes = getDirectSubnodes(nodes, connectionsByDestination);
	if (directSubnodes.size === 0) return flatCards;
	const allSubnodeNames = /* @__PURE__ */ new Set();
	for (const subs of directSubnodes.values()) for (const name of subs) allSubnodeNames.add(name);
	const rootParentNames = [];
	for (const parentName of directSubnodes.keys()) if (!allSubnodeNames.has(parentName)) rootParentNames.push(parentName);
	if (rootParentNames.length === 0) return flatCards;
	const claimedNodeNames = /* @__PURE__ */ new Set();
	const nodeGroups = /* @__PURE__ */ new Map();
	const sortedRootParents = [...rootParentNames].sort((a, b) => executionOrder.indexOf(a) - executionOrder.indexOf(b));
	for (const rootParentName of sortedRootParents) {
		const rootParentNode = nodes.find((n) => n.name === rootParentName);
		if (!rootParentNode) continue;
		const subnodeNames = collectTransitiveSubnodes(rootParentName, directSubnodes, /* @__PURE__ */ new Set());
		for (const name of [...subnodeNames]) if (claimedNodeNames.has(name)) subnodeNames.delete(name);
		const subnodeCards = [];
		let parentState;
		for (const card of flatCards) {
			if (!card.state) continue;
			const nodeName = card.state.node.name;
			if (subnodeNames.has(nodeName) && !claimedNodeNames.has(nodeName)) subnodeCards.push(card.state);
			if (nodeName === rootParentName && !claimedNodeNames.has(nodeName)) parentState = card.state;
		}
		if (subnodeCards.length === 0) continue;
		for (const s of subnodeCards) claimedNodeNames.add(s.node.name);
		if (parentState) claimedNodeNames.add(rootParentNode.name);
		nodeGroups.set(rootParentName, {
			parentNode: rootParentNode,
			parentState,
			subnodeCards
		});
	}
	if (nodeGroups.size === 0) return flatCards;
	const result = [];
	const insertedNodeGroups = /* @__PURE__ */ new Set();
	for (const card of flatCards) {
		const nodeName = card.state.node.name;
		if (claimedNodeNames.has(nodeName)) {
			const group = nodeGroups.get(nodeName);
			if (group && !insertedNodeGroups.has(nodeName)) {
				result.push({ nodeGroup: group });
				insertedNodeGroups.add(nodeName);
			}
			if (!group) {
				for (const [parentName, nodeGroup] of nodeGroups) if (!insertedNodeGroups.has(parentName) && (nodeGroup.subnodeCards.some((s) => s.node.name === nodeName) || nodeGroup.parentState?.node.name === nodeName)) {
					result.push({ nodeGroup });
					insertedNodeGroups.add(parentName);
					break;
				}
			}
			continue;
		}
		result.push(card);
	}
	return result;
}
//#endregion
//#region src/features/credentials/composables/useCredentialTestInBackground.ts
function useCredentialTestInBackground() {
	const credentialsStore = useCredentialsStore();
	/**
	* Checks whether a credential type has a test mechanism defined.
	* Returns true if either the credential type itself defines a `test` block
	* or any node with access declares `testedBy` for it.
	*/
	const isCredentialTypeTestable = (credentialTypeName) => {
		if (credentialsStore.getCredentialTypeByName(credentialTypeName)?.test) return true;
		return credentialsStore.getNodesWithAccess(credentialTypeName).some((node) => node.credentials?.some((cred) => cred.name === credentialTypeName && cred.testedBy));
	};
	/**
	* Tests a saved credential in the background.
	* Fetches the credential's redacted data first so the backend can unredact and test.
	* Skips if the credential is already tested OK or has a test in flight.
	* The result is tracked automatically in the credentials store as a side effect of testCredential.
	*/
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
	function hydrateCredentialTestResults(results) {
		for (const { id, success } of results) credentialsStore.credentialTestResults.set(id, success ? "success" : "error");
	}
	return {
		isCredentialTypeTestable,
		testCredentialInBackground,
		hydrateCredentialTestResults
	};
}
//#endregion
//#region src/features/setupPanel/composables/useWorkflowSetupState.ts
/**
* Composable that manages workflow setup state for credential configuration.
* Cards are grouped by credential type (one card per unique credential type)
* with trigger nodes getting their own dedicated cards (test button only).
* @param nodes Optional sub-set of nodes to check (defaults to full workflow)
*/
var useWorkflowSetupState = (nodes, options) => {
	const workflowsStore = useWorkflowsStore();
	const credentialsStore = useCredentialsStore();
	const nodeTypesStore = useNodeTypesStore();
	const nodeHelpers = useNodeHelpers();
	const environmentsStore = useEnvironmentsStore();
	const templatesStore = useTemplatesStore();
	const { isCredentialTypeTestable, testCredentialInBackground } = useCredentialTestInBackground();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const sourceNodes = computed(() => nodes?.value ?? workflowDocumentStore.value.allNodes);
	/**
	* Synchronous: detects resource locator parameters from the current workflow
	* nodes using node type definitions and current parameter values.
	* Only active for template-based workflows (templateId is set).
	*/
	const resourceLocatorsByNode = computed(() => {
		if (!workflowDocumentStore.value.meta?.templateId) return /* @__PURE__ */ new Map();
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
	/**
	* Async supplement: additional parameter names from the upstream template
	* (required parameters that were missing in the template).
	*/
	const templateMissingParams = ref(/* @__PURE__ */ new Map());
	/**
	* Combined map of node name → parameter names that should always be shown.
	* Merges synchronous resource locator detection, async template results,
	* and any additional parameters (e.g., placeholder params from the builder).
	*/
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
	/**
	* Checks if a node has any unfilled resource locator template parameters.
	* Recursively searches the node's parameters for resource locators matching
	* the template parameter names and returns true if any have empty values.
	*/
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
		const templateId = workflowDocumentStore.value.meta?.templateId;
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
	const isTriggerNode = (node) => {
		return nodeTypesStore.isTriggerNode(node.type);
	};
	const hasTriggerExecutedSuccessfully = (nodeName) => {
		const runData = workflowsStore.getWorkflowResultDataByNodeName(nodeName);
		return runData !== null && runData.length > 0;
	};
	/**
	* Credential IDs that were auto-applied on initial load (not manually selected by the user).
	* Auto-applied credentials require node execution before being marked complete.
	*/
	const autoAppliedCredentialIds = ref(/* @__PURE__ */ new Set());
	/**
	* Attempts to resolve an expression URL synchronously.
	* Succeeds for static expressions (e.g. `={{ "https://example.com" }}`) and
	* expressions using only environment variables (e.g. `={{ $vars.BASE_URL + '/api' }}`).
	* Returns null when the expression requires run data that isn't available.
	*/
	const resolveExpressionUrl = (expressionUrl, nodeName) => {
		try {
			const result = workflowDocumentStore.value?.getExpressionHandler().getParameterValue(expressionUrl, null, 0, 0, nodeName, [], "manual", {
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
	/**
	* Tracks parameter names that have appeared in parameterIssues per node (keyed by node name).
	* Once a parameter name is recorded, it persists even after the user fills it in
	* (which resolves the issue). Merged into `templateParametersByNode` so the existing
	* infrastructure (nodeHasTemplateParams, hasUnfilledTemplateParams, additionalParameterNames)
	* all work consistently.
	*/
	const stickyIssueParamNames = ref(/* @__PURE__ */ new Map());
	/**
	* Get nodes that require setup:
	* - Nodes with credential requirements
	* - Trigger nodes (regardless of credentials)
	* - Nodes previously shown (sticky)
	* Sorted by execution order (grouped by trigger, DFS through connections).
	*/
	const nodesRequiringSetup = computed(() => {
		const nodesForSetup = sourceNodes.value.filter((node) => !node.disabled).map((node) => ({
			node,
			credentialTypes: getNodeCredentialTypes(nodeTypesStore, node),
			parameterIssues: getNodeParametersIssues(nodeTypesStore, node),
			isTrigger: isTriggerNode(node)
		})).filter(({ credentialTypes, isTrigger, parameterIssues, node }) => stickyNodeIds.value.has(node.id) || credentialTypes.length > 0 || isTrigger || Object.keys(parameterIssues).length > 0 || nodeHasTemplateParams(node.name));
		const allNodeTypes = {};
		for (const node of sourceNodes.value) allNodeTypes[node.name] = node.type;
		return sortNodesByExecutionOrder(nodesForSetup, workflowDocumentStore.value.connectionsBySourceNode, workflowDocumentStore.value.connectionsByDestinationNode, allNodeTypes);
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
	/**
	* The name of the first (leftmost) trigger in the workflow.
	* Only this trigger can be executed from setup cards; others are treated as regular nodes.
	*/
	const firstTriggerName = computed(() => {
		return nodesRequiringSetup.value.find(({ isTrigger }) => isTrigger)?.node.name ?? null;
	});
	/**
	* All nodes that have credential requirements (includes both triggers and regular nodes).
	*/
	const nodesWithCredentials = computed(() => nodesRequiringSetup.value.filter(({ credentialTypes }) => credentialTypes.length > 0));
	const nodesWithMissingParameters = computed(() => nodesRequiringSetup.value.filter(({ parameterIssues, node }) => stickyParamNodeIds.value.has(node.id) || Object.keys(parameterIssues).length > 0 || nodeHasTemplateParams(node.name)));
	watch(nodesWithMissingParameters, (entries) => {
		for (const { node } of entries) stickyParamNodeIds.value.add(node.id);
	}, { immediate: true });
	/**
	* Shared classification: which credential types require per-node cards?
	* A credential type is per-node when ANY of its nodes have parameter issues or template params.
	* Also includes historically-seen types to prevent cards from re-grouping.
	*/
	const perNodeCredTypes = computed(() => {
		const result = new Set(stickyCredTypesWithParams.value);
		for (const { credentialTypes, parameterIssues, node } of nodesRequiringSetup.value) if (Object.keys(parameterIssues).length > 0 || nodeHasTemplateParams(node.name)) for (const credType of credentialTypes) result.add(credType);
		return result;
	});
	watch(perNodeCredTypes, (types) => {
		for (const credType of types) stickyCredTypesWithParams.value.add(credType);
	}, { immediate: true });
	/**
	* Builds a CompletionContext. When credentialType is provided and testable,
	* includes the credential test check; otherwise omits it.
	*/
	const buildCompletionContext = (credentialType) => ({
		firstTriggerName: firstTriggerName.value,
		hasTriggerExecuted: hasTriggerExecutedSuccessfully,
		isTriggerNode: (nodeType) => nodeTypesStore.isTriggerNode(nodeType),
		isCredentialTestedOk: credentialType && isCredentialTypeTestable(credentialType) ? credentialsStore.isCredentialTestedOk : void 0,
		hasUnfilledTemplateParams
	});
	/**
	* Credential type states — one entry per unique credential type.
	* Only includes credential types where NONE of the nodes have parameter issues.
	* When nodes have both credentials and parameters, they're handled by nodeStates instead.
	* Uses shared `perNodeCredTypes` for the grouping decision.
	*/
	const credentialTypeStates = computed(() => {
		return groupCredentialsByType(nodesWithCredentials.value.filter(({ credentialTypes }) => !credentialTypes.some((credType) => perNodeCredTypes.value.has(credType))).map(({ node, credentialTypes }) => ({
			node,
			credentialTypes
		})), getCredentialDisplayName, resolveExpressionUrl).map((state) => {
			const isAutoApplied = !!state.selectedCredentialId && autoAppliedCredentialIds.value.has(state.selectedCredentialId);
			return {
				...state,
				isComplete: isCredentialCardComplete(state, buildCompletionContext(state.credentialType)),
				isAutoApplied
			};
		});
	});
	/**
	* Trigger states — one entry per trigger node that is NOT already covered
	* by a credential card or a node card.
	* Uses `perNodeCredTypes` to check node-card coverage without depending on `nodeStates`.
	*/
	const triggerStates = computed(() => {
		if (!firstTriggerName.value) return [];
		const triggerEntry = nodesRequiringSetup.value.find(({ isTrigger, node }) => isTrigger && node.name === firstTriggerName.value);
		if (!triggerEntry) return [];
		if (credentialTypeStates.value.some((credState) => credState.nodes.some((node) => isTriggerNode(node) && node.name === firstTriggerName.value))) return [];
		const { credentialTypes, parameterIssues, node } = triggerEntry;
		const hasParams = Object.keys(parameterIssues).length > 0 || nodeHasTemplateParams(node.name);
		if (credentialTypes.length > 0 && credentialTypes.some((ct) => perNodeCredTypes.value.has(ct)) || hasParams) return [];
		const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
		if (!nodeType?.webhooks?.length && !nodeType?.polling && !nodeType?.triggerPanel) return [];
		return [buildTriggerSetupState(node, credentialTypes, credentialTypeStates.value, hasTriggerExecutedSuccessfully(node.name))];
	});
	/**
	* Per-node setup states — handles both parameter-only nodes and credential+parameter nodes.
	*
	* Parameter-only entries: nodes with parameter issues but NO credentials.
	* Credential entries: nodes with credentials whose type is in `perNodeCredTypes`.
	* Only the first node per credential type shows the credential picker.
	
	*/
	const nodeStates = computed(() => {
		const result = [];
		for (const entry of nodesWithMissingParameters.value) {
			if (entry.credentialTypes.length > 0) continue;
			const { node, parameterIssues, isTrigger } = entry;
			const state = {
				node,
				parameterIssues,
				additionalParameterNames: templateParametersByNode.value.get(node.name),
				isTrigger,
				isComplete: false
			};
			state.isComplete = isNodeSetupComplete(state, buildCompletionContext());
			result.push(state);
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
				const state = {
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
				state.isComplete = isNodeSetupComplete(state, buildCompletionContext(credType));
				result.push(state);
				isFirstNode = false;
			}
		}
		return result;
	});
	watch(nodeStates, (states) => {
		for (const state of states) if (state.credentialType) stickyNodeCredentials.value.add(`${state.credentialType}:${state.node.id}`);
	}, { immediate: true });
	/**
	* Ordered list of all setup cards, sorted by the position of each card's
	* primary node in the execution order.
	* All card types are normalized to NodeSetupState.
	*/
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
		const flatCards = [
			...credentialCards,
			...triggerCards,
			...nodeStates.value
		].filter((state) => state.node.type !== MANUAL_TRIGGER_NODE_TYPE).map((state) => ({ state }));
		const executionOrder = nodesRequiringSetup.value.map(({ node }) => node.name);
		flatCards.sort((a, b) => executionOrder.indexOf(a.state.node.name) - executionOrder.indexOf(b.state.node.name));
		return groupSetupCards(flatCards, sourceNodes.value, workflowDocumentStore.value.connectionsByDestinationNode, executionOrder);
	});
	const totalCredentialsMissing = computed(() => {
		return credentialTypeStates.value.filter((s) => !s.isComplete).length;
	});
	const totalCardsRequiringSetup = computed(() => {
		return setupCards.value.length;
	});
	const isAllComplete = computed(() => {
		return setupCards.value.length > 0 && setupCards.value.every((card) => isCardComplete(card));
	});
	/**
	* Resolves the node names affected by a credential operation.
	* Checks credentialTypeStates first (grouped cards), then falls back to
	* nodeStates (per-node cards with parameter issues).
	* Snapshots credentialTypeStates to avoid reactivity issues during mutations.
	*/
	const getAffectedNodeNames = (credentialType, sourceNodeName) => {
		const allCredStates = credentialTypeStates.value;
		const credState = sourceNodeName ? allCredStates.find((s) => s.credentialType === credentialType && s.nodes.some((n) => n.name === sourceNodeName)) : allCredStates.find((s) => s.credentialType === credentialType);
		if (credState) return credState.nodes.map((n) => n.name);
		if (!sourceNodeName) return [];
		const sourceEntry = nodeStates.value.find((s) => s.credentialType === credentialType && s.node.name === sourceNodeName);
		if (sourceEntry?.allNodesUsingCredential) return sourceEntry.allNodesUsingCredential.map((n) => n.name);
		return [sourceNodeName];
	};
	/**
	* Sets a credential for nodes.
	* When sourceNodeName is provided, it first tries to find the matching credential card
	* (needed when multiple HTTP Request nodes produce separate cards with the same credential type).
	* If the node isn't in credentialTypeStates (e.g. it's in nodeStates due to parameter issues),
	* falls back to updating that specific node directly.
	*/
	const setCredential = (credentialType, credentialId, sourceNodeName, skipHttpRequestType = false) => {
		const credential = credentialsStore.getCredentialById(credentialId);
		if (!credential) return;
		const credentialDetails = {
			id: credentialId,
			name: credential.name
		};
		testCredentialInBackground(credentialId, credential.name, credentialType);
		for (const nodeName of getAffectedNodeNames(credentialType, sourceNodeName)) {
			const node = workflowDocumentStore.value.getNodeByName(nodeName);
			if (!node) continue;
			if (skipHttpRequestType && isHttpRequestNodeType(node.type)) continue;
			const prevCred = node.credentials?.[credentialType];
			const prevId = typeof prevCred === "string" ? void 0 : prevCred?.id;
			if (prevId) autoAppliedCredentialIds.value.delete(prevId);
			workflowDocumentStore.value.updateNodeProperties({
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
	/**
	* Unsets a credential from nodes.
	* When sourceNodeName is provided, it first tries to find the matching credential card.
	* If the node isn't in credentialTypeStates (e.g. it's in nodeStates due to parameter issues),
	* falls back to updating that specific node directly.
	*/
	const unsetCredential = (credentialType, sourceNodeName) => {
		for (const nodeName of getAffectedNodeNames(credentialType, sourceNodeName)) {
			const node = workflowDocumentStore.value.getNodeByName(nodeName);
			if (!node) continue;
			const updatedCredentials = { ...node.credentials };
			delete updatedCredentials[credentialType];
			workflowDocumentStore.value.updateNodeProperties({
				name: nodeName,
				properties: { credentials: updatedCredentials }
			});
		}
		nodeHelpers.updateNodesCredentialsIssues();
		useUIStore().markStateDirty();
	};
	/**
	* Auto-select the most recently updated credential for each credential type
	* that doesn't already have one assigned.
	* Runs once on initial load to pre-fill credential pickers.
	*/
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
	/**
	* On initial load: auto-select credentials then auto-test them.
	* Runs once when nodes become available so checkmarks reflect actual validity.
	* Deduplicates by credential ID so shared credentials are only tested once.
	*/
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
	/**
	* When a credential is deleted, unset it from ALL nodes that reference it.
	* This is the symmetric counterpart to setCredential's auto-assignment.
	*/
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
//#endregion
//#region src/features/workflows/canvas/components/elements/buttons/CanvasRunWorkflowButton.vue?vue&type=script&setup=true&lang.ts
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
		embedded: {
			type: Boolean,
			default: false
		},
		getNodeType: {}
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
		const buttonVariant = computed(() => props.embedded ? "subtle" : "solid");
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
					variant: buttonVariant.value,
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
					"variant",
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
					variant: buttonVariant.value,
					"icon-size": "large",
					disabled: __props.disabled,
					class: normalizeClass(_ctx.$style.chevron),
					"aria-label": "Select trigger node",
					icon: "chevron-down"
				}, null, 8, [
					"variant",
					"disabled",
					"class"
				])]),
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
var CanvasRunWorkflowButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CanvasRunWorkflowButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CanvasRunWorkflowButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { useNodeGroupSections as a, SetupCardBody_default as c, isNodeGroupCard as d, SetupCardSection_default as f, useWorkflowExtraction as g, useGlobalLinkActions as h, sectionHasParameters as i, isCardComplete as l, TriggerExecuteButton_default as m, useWorkflowSetupState as n, useWebhookUrls as o, WebhookUrlPreview_default as p, useCredentialTestInBackground as r, useTriggerExecution as s, CanvasRunWorkflowButton_default as t, isHttpRequestNodeType as u };
