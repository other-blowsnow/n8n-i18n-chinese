import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, M as createVNode, P as defineComponent, Pt as reactive, Q as onUnmounted, T as createBlock, Z as onMounted, _ as Fragment, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as I18nT, yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Bi as N8nButton_default, Pi as truncateBeforeLast, Rt as useRouter, St as N8nActionDropdown_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { C as useNodeTypesStore, Cn as PUSH_NODES_OFFSET, Nt as useTelemetry, ca as globalLinkActionsEventBus, d as isChatNode, hr as useToast, kr as v4_default, ni as useHistoryStore, r as useUIStore, s as useWorkflowsStore } from "./users.store-qBZsmf9-.js";
import { Ci as extractReferencesInNodeExpressions, Do as require_isEqual, Os as WORKFLOW_EXTRACTION_NAME_MODAL_KEY, Sa as nodeAcceptsInputType, Xo as VIEWS, _i as buildAdjacencyList, aa as getNodeOutputs, ia as getNodeInputs, po as EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE, vi as parseExtractableSubgraphSelection } from "./constants-Cyrg9Nbl.js";
import { t as useCanvasOperations } from "./useCanvasOperations-01naG_2v.js";
import { t as NodeIcon_default } from "./NodeIcon-HdSkOCP-.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-Dvjl2Kjb.js";
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual(), 1);
var CANVAS_HISTORY_OPTIONS = {
	trackBulk: false,
	trackHistory: true
};
function useWorkflowExtraction() {
	const uiStore = useUIStore();
	const workflowsStore = useWorkflowsStore();
	const nodeTypesStore = useNodeTypesStore();
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
			projectId: workflowsStore.workflow.homeProject?.id,
			parentFolderId: workflowsStore.workflow.parentFolder?.id ?? void 0
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
		const createdWorkflow = await tryCreateWorkflow(makeSubworkflow(newWorkflowName, selection, nodes, workflowsStore.workflow.connections, variables, afterVariables, startNodeName, returnNodeName));
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
					class: normalizeClass(_ctx.$style.button),
					loading: __props.executing,
					disabled: __props.disabled,
					size: __props.size ?? "large",
					icon: "flask-conical",
					type: "primary",
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
					type: "primary",
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
	component: "_component_1p67v_125",
	split: "_split_1p67v_131",
	button: "_button_1p67v_131",
	divider: "_divider_1p67v_139",
	chevron: "_chevron_1p67v_144",
	menu: "_menu_1p67v_150",
	menuPopper: "_menuPopper_1p67v_154",
	menuItem: "_menuItem_1p67v_158",
	disabled: "_disabled_1p67v_164",
	menuIcon: "_menuIcon_1p67v_164",
	buttonContent: "_buttonContent_1p67v_168",
	subText: "_subText_1p67v_175"
};
var CanvasRunWorkflowButton_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CanvasRunWorkflowButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CanvasRunWorkflowButton_vue_vue_type_style_index_0_lang_module_default }]]);
export { useGlobalLinkActions as n, useWorkflowExtraction as r, CanvasRunWorkflowButton_default as t };
