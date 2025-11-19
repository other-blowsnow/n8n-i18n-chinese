import { o as __toESM, t as __commonJSMin } from "./chunk-6z4oVpB-.js";
import { C as computed, G as nextTick, It as ref, zt as shallowRef } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n, j as useLocalStorage } from "./_MapCache-pT3vKw8Z.js";
import { b as useRouter, x as createEventBus, y as useRoute } from "./truncate-1c7Iwk7N.js";
import { $ as getExecutionErrorToastConfiguration, Ar as RemoveConnectionCommand, Bo as useSettingsStore, Ci as tryToParseNumber, Cr as useHistoryStore, En as useProjectsStore, G as isChatNode, Ht as useCredentialsStore, Io as v4_default, Mr as RenameNodeCommand, Ni as useUIStore, Nr as ReplaceNodeParametersCommand, Qs as useRootStore, S as getNodesGroupSize, Sn as injectWorkflowState, Sr as CanvasNodeRenderType, Tr as AddNodeCommand, Un as useCanvasStore, Zt as useDataSchema, _n as useTagsStore, a as useNDVStore, b as getNewNodePosition, br as CanvasConnectionMode, d as DEFAULT_VIEWPORT_BOUNDARIES, f as GRID_SIZE, gr as isValidNodeConnectionType, h as generateOffsets, i as usePostHog, jr as RemoveNodeCommand, kr as MoveNodeCommand, l as CONFIGURATION_NODE_SIZE, mn as useWorkflowHelpers, o as useWorkflowsStore, p as PUSH_NODES_OFFSET, rt as useNodeTypesStore, s as CONFIGURABLE_NODE_SIZE, t as useTelemetry, u as DEFAULT_NODE_SIZE, vi as isPresent, wr as AddConnectionCommand, xc as defineStore, xn as useNodeHelpers } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import { Br as require_cloneDeep, En as UPDATE_WEBHOOK_ID_NODE_TYPES, Hi as deepCopy, Hs as EnterpriseEditionFeature, Ns as NDV_IN_FOCUS_PANEL_EXPERIMENT, On as WEBHOOK_NODE_TYPE, Qr as require__baseUniq, St as FORM_TRIGGER_NODE_TYPE, Ui as isCommunityPackageName, _i as getNodeInputs, as as LOCAL_STORAGE_LOGS_PANEL_DETAILS_PANEL_SUB_NODE, ea as NodeConnectionTypes, gi as getConnectionTypes, is as LOCAL_STORAGE_LOGS_PANEL_DETAILS_PANEL, ks as CANVAS_ZOOMED_VIEW_EXPERIMENT, mo as VIEWS, os as LOCAL_STORAGE_LOGS_PANEL_OPEN, pi as generateNodesGraph, ss as LOCAL_STORAGE_LOGS_SYNC_SELECTION, vi as getNodeOutputs, wi as getSubworkflowId, xn as STICKY_NODE_TYPE, yi as getNodeParameters, zt as MCP_TRIGGER_NODE_TYPE } from "./constants-C_oOJnqT.js";
import { t as useExternalHooks } from "./useExternalHooks-CE2Rdzfk.js";
import { t as useTemplatesStore } from "./templates.store-CFt_GGxU.js";
import { t as useFocusPanelStore } from "./focusPanel.store-Ce3wvzmP.js";
import { t as useExecutionsStore } from "./executions.store-a34D3haB.js";
import { t as usePinnedData } from "./usePinnedData-CxyLm90h.js";
import { a as mapCanvasConnectionToLegacyConnection, l as parseCanvasConnectionHandleString, o as mapLegacyConnectionToCanvasConnection, r as createCanvasConnectionHandleString, s as mapLegacyConnectionsToCanvasConnections, t as useNodeCreatorStore } from "./nodeCreator.store-BXjpGwrk.js";
import { t as useClipboard } from "./useClipboard-CDW2KXIc.js";
import { t as useFoldersStore } from "./folders.store-Cwp_DTVT.js";
function useUniqueNodeName() {
	function numberSuffixedNames() {
		return useNodeTypesStore().allNodeTypes.reduce((acc, nodeType) => {
			if (typeof nodeType.defaults.name !== "string") throw new Error("Expected node name default to be a string");
			if (/\d$/.test(nodeType.defaults.name)) acc.push(nodeType.defaults.name);
			return acc;
		}, []);
	}
	function uniqueNodeName(originalName, extraNames = []) {
		const { canvasNames } = useWorkflowsStore();
		if (!canvasNames.has(originalName) && !extraNames.includes(originalName)) return originalName;
		const nsn = numberSuffixedNames().find((nsn$1) => originalName.startsWith(nsn$1));
		if (nsn) {
			let unique$1 = "";
			let index$1 = 1;
			const remainder = originalName.split(nsn).pop();
			const lastChar = remainder?.[remainder.length - 1];
			if (lastChar && Number.isInteger(Number(lastChar))) {
				index$1 = parseInt(lastChar, 10);
				originalName = originalName.slice(0, -1);
			}
			unique$1 = originalName;
			while (canvasNames.has(unique$1) || extraNames.includes(unique$1)) unique$1 = originalName + index$1++;
			return unique$1;
		}
		if (/^\d+-?\d*$/.test(originalName)) {
			let unique$1 = "";
			let index$1 = 1;
			const match$1 = originalName.match(/(?<base>\d+)-?(?<suffix>\d*)/);
			if (!match$1?.groups) throw new Error("Failed to find match for unique name");
			if (match$1?.groups?.suffix !== "") index$1 = parseInt(match$1.groups.suffix, 10);
			unique$1 = match$1.groups.base;
			while (canvasNames.has(unique$1) || extraNames.includes(unique$1)) unique$1 = match$1.groups.base + "-" + index$1++;
			return unique$1;
		}
		let unique = "";
		let index = 1;
		const match = originalName.match(/(?<base>.*\D+)(?<suffix>\d*)/);
		if (!match?.groups) throw new Error("Failed to find match for unique name");
		if (match?.groups?.suffix !== "") index = parseInt(match.groups.suffix, 10);
		unique = match.groups.base;
		while (canvasNames.has(unique) || extraNames.includes(unique)) unique = match.groups.base + index++;
		return unique;
	}
	return { uniqueNodeName };
}
function createEventBus$1() {
	const handlers = /* @__PURE__ */ new Map();
	function off(eventName, fn) {
		const eventFns = handlers.get(eventName);
		if (eventFns) eventFns.splice(eventFns.indexOf(fn) >>> 0, 1);
	}
	function on(eventName, fn) {
		let eventFns = handlers.get(eventName);
		if (!eventFns) eventFns = [fn];
		else eventFns.push(fn);
		handlers.set(eventName, eventFns);
		return () => off(eventName, fn);
	}
	function emit(eventName, event) {
		const eventFns = handlers.get(eventName);
		if (eventFns) eventFns.slice().forEach(async (handler) => {
			await handler(event);
		});
	}
	return {
		on,
		off,
		emit
	};
}
const chatEventBus = createEventBus$1();
const LOCAL_STORAGE_PANEL_HEIGHT = "N8N_CANVAS_CHAT_HEIGHT";
const LOCAL_STORAGE_PANEL_WIDTH = "N8N_CANVAS_CHAT_WIDTH";
const LOCAL_STORAGE_OVERVIEW_PANEL_WIDTH = "N8N_LOGS_OVERVIEW_PANEL_WIDTH";
const LOGS_PANEL_STATE = {
	CLOSED: "closed",
	ATTACHED: "attached",
	FLOATING: "floating"
};
const LOG_DETAILS_PANEL_STATE = {
	INPUT: "input",
	OUTPUT: "output",
	BOTH: "both"
};
const useLogsStore = defineStore("logs", () => {
	const isOpen = useLocalStorage(LOCAL_STORAGE_LOGS_PANEL_OPEN, false);
	const preferPoppedOut = ref(false);
	const state = computed(() => isOpen.value ? preferPoppedOut.value ? LOGS_PANEL_STATE.FLOATING : LOGS_PANEL_STATE.ATTACHED : LOGS_PANEL_STATE.CLOSED);
	const height = ref(0);
	const detailsState = useLocalStorage(LOCAL_STORAGE_LOGS_PANEL_DETAILS_PANEL, LOG_DETAILS_PANEL_STATE.OUTPUT, { writeDefaults: false });
	const detailsStateSubNode = useLocalStorage(LOCAL_STORAGE_LOGS_PANEL_DETAILS_PANEL_SUB_NODE, LOG_DETAILS_PANEL_STATE.BOTH, { writeDefaults: false });
	const isLogSelectionSyncedWithCanvas = useLocalStorage(LOCAL_STORAGE_LOGS_SYNC_SELECTION, true, { writeDefaults: false });
	const isSubNodeSelected = ref(false);
	const telemetry = useTelemetry();
	const chatSessionId = ref(getNewSessionId());
	const chatSessionMessages = ref([]);
	function setHeight(value) {
		height.value = value;
	}
	function getNewSessionId() {
		return v4_default().replace(/-/g, "");
	}
	function resetChatSessionId() {
		chatSessionId.value = getNewSessionId();
	}
	function resetMessages() {
		chatSessionMessages.value = [];
	}
	function toggleOpen(value) {
		isOpen.value = value ?? !isOpen.value;
	}
	function setPreferPoppedOut(value) {
		preferPoppedOut.value = value;
	}
	function setSubNodeSelected(value) {
		isSubNodeSelected.value = value;
	}
	function toggleInputOpen(open) {
		const statesWithInput = [LOG_DETAILS_PANEL_STATE.INPUT, LOG_DETAILS_PANEL_STATE.BOTH];
		const stateRef = isSubNodeSelected.value ? detailsStateSubNode : detailsState;
		const wasOpen = statesWithInput.includes(stateRef.value);
		if (open === wasOpen) return;
		stateRef.value = wasOpen ? LOG_DETAILS_PANEL_STATE.OUTPUT : LOG_DETAILS_PANEL_STATE.BOTH;
		telemetry.track("User toggled log view sub pane", {
			pane: "input",
			newState: wasOpen ? "hidden" : "visible",
			isSubNode: isSubNodeSelected.value
		});
	}
	function toggleOutputOpen(open) {
		const statesWithOutput = [LOG_DETAILS_PANEL_STATE.OUTPUT, LOG_DETAILS_PANEL_STATE.BOTH];
		const stateRef = isSubNodeSelected.value ? detailsStateSubNode : detailsState;
		const wasOpen = statesWithOutput.includes(stateRef.value);
		if (open === wasOpen) return;
		stateRef.value = wasOpen ? LOG_DETAILS_PANEL_STATE.INPUT : LOG_DETAILS_PANEL_STATE.BOTH;
		telemetry.track("User toggled log view sub pane", {
			pane: "output",
			newState: wasOpen ? "hidden" : "visible",
			isSubNode: isSubNodeSelected.value
		});
	}
	function toggleLogSelectionSync(value) {
		isLogSelectionSyncedWithCanvas.value = value ?? !isLogSelectionSyncedWithCanvas.value;
	}
	function addChatMessage(message) {
		chatSessionMessages.value.push(message);
	}
	return {
		state,
		isOpen: computed(() => state.value !== LOGS_PANEL_STATE.CLOSED),
		detailsState: computed(() => isSubNodeSelected.value ? detailsStateSubNode.value : detailsState.value),
		height: computed(() => height.value),
		isLogSelectionSyncedWithCanvas: computed(() => isLogSelectionSyncedWithCanvas.value),
		chatSessionId: computed(() => chatSessionId.value),
		chatSessionMessages: computed(() => chatSessionMessages.value),
		addChatMessage,
		setHeight,
		toggleOpen,
		setPreferPoppedOut,
		setSubNodeSelected,
		toggleInputOpen,
		toggleOutputOpen,
		toggleLogSelectionSync,
		resetChatSessionId,
		resetMessages
	};
});
var require_uniq = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseUniq = require__baseUniq();
	function uniq$1(array) {
		return array && array.length ? baseUniq(array) : [];
	}
	module.exports = uniq$1;
}));
const useExperimentalNdvStore = defineStore("experimentalNdv", () => {
	const workflowStore = useWorkflowsStore();
	const postHogStore = usePostHog();
	const isZoomedViewEnabled = computed(() => postHogStore.getVariant(CANVAS_ZOOMED_VIEW_EXPERIMENT.name) === CANVAS_ZOOMED_VIEW_EXPERIMENT.variant);
	const isNdvInFocusPanelEnabled = computed(() => postHogStore.getVariant(NDV_IN_FOCUS_PANEL_EXPERIMENT.name) === NDV_IN_FOCUS_PANEL_EXPERIMENT.variant);
	const maxCanvasZoom = computed(() => isZoomedViewEnabled.value ? 2 : 4);
	const previousViewport = ref();
	const collapsedNodes = shallowRef({});
	const nodeNameToBeFocused = ref();
	const isMapperOpen = ref(false);
	function setNodeExpanded(nodeId, isExpanded) {
		collapsedNodes.value = {
			...collapsedNodes.value,
			[nodeId]: isExpanded === void 0 ? !collapsedNodes.value[nodeId] : !isExpanded
		};
	}
	function collapseAllNodes() {
		collapsedNodes.value = workflowStore.allNodes.reduce((acc, node) => {
			acc[node.id] = true;
			return acc;
		}, {});
	}
	function expandAllNodes() {
		collapsedNodes.value = {};
	}
	function isActive(canvasZoom) {
		return isZoomedViewEnabled.value && Math.abs(canvasZoom - maxCanvasZoom.value) < 1e-6;
	}
	function setNodeNameToBeFocused(nodeName) {
		nodeNameToBeFocused.value = nodeName;
	}
	function setMapperOpen(value) {
		isMapperOpen.value = value;
	}
	function focusNode(node, { canvasDimensions, canvasViewport, setCenter }) {
		collapsedNodes.value = {
			...collapsedNodes.value,
			[node.id]: false
		};
		const topMargin = 80;
		const nodeWidth = node.dimensions.width * (isActive(canvasViewport.zoom) ? 1 : 1.5);
		if (nodeNameToBeFocused.value === node.data.name) nodeNameToBeFocused.value = void 0;
		setCenter(node.position.x + nodeWidth / 2, node.position.y + (canvasDimensions.height * (1 / 2) - topMargin) / maxCanvasZoom.value, {
			duration: 200,
			zoom: maxCanvasZoom.value,
			interpolate: "linear"
		});
	}
	function toggleZoomMode(options) {
		if (isActive(options.canvasViewport.zoom)) {
			if (previousViewport.value === void 0) {
				options.fitView({
					duration: 200,
					interpolate: "linear"
				});
				return;
			}
			options.setViewport(previousViewport.value, {
				duration: 200,
				interpolate: "linear"
			});
			return;
		}
		previousViewport.value = options.canvasViewport;
		const toFocus = options.selectedNodes.filter((node) => node.data.render.type === CanvasNodeRenderType.Default).toSorted((a, b) => a.position.y === b.position.y ? a.position.x - b.position.x : a.position.y - b.position.y)[0];
		if (toFocus) {
			focusNode(toFocus, options);
			return;
		}
		options.zoomTo(maxCanvasZoom.value, {
			duration: 200,
			interpolate: "linear"
		});
	}
	return {
		isZoomedViewEnabled,
		isNdvInFocusPanelEnabled,
		maxCanvasZoom,
		previousZoom: computed(() => previousViewport.value),
		collapsedNodes: computed(() => collapsedNodes.value),
		nodeNameToBeFocused: computed(() => nodeNameToBeFocused.value),
		isMapperOpen: computed(() => isMapperOpen.value),
		isActive,
		setNodeExpanded,
		expandAllNodes,
		collapseAllNodes,
		toggleZoomMode,
		focusNode,
		setNodeNameToBeFocused,
		setMapperOpen
	};
});
const canvasEventBus = createEventBus();
function useParentFolder() {
	const foldersStore = useFoldersStore();
	const projectsStore = useProjectsStore();
	const workflowsStore = useWorkflowsStore();
	const fetchAndSetParentFolder = async (folderId) => {
		if (!folderId) return;
		let parentFolder = foldersStore.getCachedFolder(folderId);
		if (!parentFolder && projectsStore.currentProjectId) {
			await foldersStore.getFolderPath(projectsStore.currentProjectId, folderId);
			parentFolder = foldersStore.getCachedFolder(folderId);
		}
		if (parentFolder) workflowsStore.setParentFolder({
			...parentFolder,
			parentFolderId: parentFolder.parentFolder ?? null
		});
		return parentFolder ?? null;
	};
	return { fetchAndSetParentFolder };
}
var import_cloneDeep = /* @__PURE__ */ __toESM(require_cloneDeep());
var import_uniq = /* @__PURE__ */ __toESM(require_uniq());
function useCanvasOperations() {
	const rootStore = useRootStore();
	const workflowsStore = useWorkflowsStore();
	const workflowState = injectWorkflowState();
	const credentialsStore = useCredentialsStore();
	const historyStore = useHistoryStore();
	const uiStore = useUIStore();
	const ndvStore = useNDVStore();
	const nodeTypesStore = useNodeTypesStore();
	const canvasStore = useCanvasStore();
	const settingsStore = useSettingsStore();
	const tagsStore = useTagsStore();
	const nodeCreatorStore = useNodeCreatorStore();
	const executionsStore = useExecutionsStore();
	const projectsStore = useProjectsStore();
	const logsStore = useLogsStore();
	const experimentalNdvStore = useExperimentalNdvStore();
	const templatesStore = useTemplatesStore();
	const focusPanelStore = useFocusPanelStore();
	const i18n = useI18n();
	const toast = useToast();
	const workflowHelpers = useWorkflowHelpers();
	const nodeHelpers = useNodeHelpers();
	const telemetry = useTelemetry();
	const externalHooks = useExternalHooks();
	const clipboard = useClipboard();
	const { uniqueNodeName } = useUniqueNodeName();
	const { fetchAndSetParentFolder } = useParentFolder();
	const router = useRouter();
	const route = useRoute();
	const lastClickPosition = ref([0, 0]);
	const preventOpeningNDV = !!localStorage.getItem("NodeView.preventOpeningNDV");
	const editableWorkflow = computed(() => workflowsStore.workflow);
	const editableWorkflowObject = computed(() => workflowsStore.workflowObject);
	const triggerNodes = computed(() => {
		return workflowsStore.workflowTriggerNodes;
	});
	function tidyUp({ result, source, target }, { trackEvents = true } = {}) {
		updateNodesPosition(result.nodes.map(({ id, x, y }) => ({
			id,
			position: {
				x,
				y
			}
		})), {
			trackBulk: true,
			trackHistory: true
		});
		if (trackEvents) trackTidyUp({
			result,
			source,
			target
		});
	}
	function trackTidyUp({ result, source, target }) {
		telemetry.track("User tidied up canvas", {
			source,
			target,
			nodes_count: result.nodes.length
		});
	}
	function updateNodesPosition(events, { trackHistory = false, trackBulk = true } = {}) {
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		events.forEach(({ id, position }) => {
			updateNodePosition(id, position, { trackHistory });
		});
		if (trackHistory && trackBulk) historyStore.stopRecordingUndo();
	}
	function updateNodePosition(id, position, { trackHistory = false } = {}) {
		const node = workflowsStore.getNodeById(id);
		if (!node) return;
		const oldPosition = [...node.position];
		const newPosition = [position.x, position.y];
		workflowState.setNodePositionById(id, newPosition);
		if (trackHistory) historyStore.pushCommandToUndo(new MoveNodeCommand(node.name, oldPosition, newPosition, Date.now()));
	}
	function revertUpdateNodePosition(nodeName, position) {
		const node = workflowsStore.getNodeByName(nodeName);
		if (!node) return;
		updateNodePosition(node.id, position);
	}
	function replaceNodeParameters(nodeId, currentParameters, newParameters, { trackHistory = false, trackBulk = true } = {}) {
		const node = workflowsStore.getNodeById(nodeId);
		if (!node) return;
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		workflowState.setNodeParameters({
			name: node.name,
			value: newParameters
		});
		if (trackHistory) historyStore.pushCommandToUndo(new ReplaceNodeParametersCommand(nodeId, currentParameters, newParameters, Date.now()));
		if (trackHistory && trackBulk) historyStore.stopRecordingUndo();
	}
	async function revertReplaceNodeParameters(nodeId, currentParameters, newParameters) {
		replaceNodeParameters(nodeId, newParameters, currentParameters);
	}
	async function renameNode(currentName, newName, { trackHistory = false, trackBulk = true } = {}) {
		if (currentName === newName) return;
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		newName = uniqueNodeName(newName);
		const workflow = workflowsStore.cloneWorkflowObject();
		try {
			workflow.renameNode(currentName, newName);
		} catch (error) {
			toast.showMessage({
				type: "error",
				title: error.message,
				message: error.description
			});
			return;
		}
		if (trackHistory) historyStore.pushCommandToUndo(new RenameNodeCommand(currentName, newName, Date.now()));
		workflowsStore.renameNodeSelectedAndExecution({
			old: currentName,
			new: newName
		});
		workflowsStore.setNodes(Object.values(workflow.nodes));
		workflowsStore.setConnections(workflow.connectionsBySourceNode);
		if (ndvStore.activeNodeName === currentName) ndvStore.setActiveNodeName(newName, "other");
		if (trackHistory && trackBulk) historyStore.stopRecordingUndo();
	}
	async function revertRenameNode(currentName, previousName) {
		await renameNode(currentName, previousName);
	}
	function connectAdjacentNodes(id, { trackHistory = false } = {}) {
		const node = workflowsStore.getNodeById(id);
		if (!node) return;
		const outputConnectionsByType = workflowsStore.outgoingConnectionsByNodeName(node.name);
		const incomingConnectionsByType = workflowsStore.incomingConnectionsByNodeName(node.name);
		for (const [type, incomingConnectionsByInputIndex] of Object.entries(incomingConnectionsByType)) for (const incomingConnection of incomingConnectionsByInputIndex.at(0) ?? []) {
			const incomingNodeId = workflowsStore.getNodeByName(incomingConnection.node)?.id;
			if (!incomingNodeId) continue;
			for (const outgoingConnection of outputConnectionsByType[type]?.at(0) ?? []) {
				const outgoingNodeId = workflowsStore.getNodeByName(outgoingConnection.node)?.id;
				if (!outgoingNodeId) continue;
				if (trackHistory) historyStore.pushCommandToUndo(new AddConnectionCommand([{
					node: incomingConnection.node,
					type,
					index: incomingConnection.index
				}, {
					node: outgoingConnection.node,
					type,
					index: outgoingConnection.index
				}], Date.now()));
				createConnection({
					source: incomingNodeId,
					sourceHandle: createCanvasConnectionHandleString({
						mode: CanvasConnectionMode.Output,
						type,
						index: incomingConnection.index
					}),
					target: outgoingNodeId,
					targetHandle: createCanvasConnectionHandleString({
						mode: CanvasConnectionMode.Input,
						type,
						index: outgoingConnection.index
					})
				});
			}
		}
	}
	function deleteNode(id, { trackHistory = false, trackBulk = true } = {}) {
		const node = workflowsStore.getNodeById(id);
		if (!node) return;
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		if (uiStore.lastInteractedWithNodeId === id) uiStore.lastInteractedWithNodeId = void 0;
		connectAdjacentNodes(id, { trackHistory });
		deleteConnectionsByNodeId(id, {
			trackHistory,
			trackBulk: false
		});
		workflowsStore.removeNodeExecutionDataById(id);
		workflowsStore.removeNodeById(id);
		if (trackHistory) {
			historyStore.pushCommandToUndo(new RemoveNodeCommand(node, Date.now()));
			if (trackBulk) historyStore.stopRecordingUndo();
		}
		trackDeleteNode(id);
	}
	function deleteNodes(ids, { trackHistory = true, trackBulk = true } = {}) {
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		ids.forEach((id) => deleteNode(id, {
			trackHistory,
			trackBulk: false
		}));
		if (trackHistory && trackBulk) historyStore.stopRecordingUndo();
	}
	function revertDeleteNode(node) {
		workflowsStore.addNode(node);
		uiStore.stateIsDirty = true;
	}
	function trackDeleteNode(id) {
		const node = workflowsStore.getNodeById(id);
		if (!node) return;
		if (node.type === "n8n-nodes-base.stickyNote") telemetry.track("User deleted workflow note", { workflow_id: workflowsStore.workflowId });
		else {
			externalHooks.run("node.deleteNode", { node });
			telemetry.track("User deleted node", {
				node_type: node.type,
				workflow_id: workflowsStore.workflowId
			});
		}
	}
	function replaceNodeConnections(previousId, newId, { trackHistory = false, trackBulk = true, replaceInputs = true, replaceOutputs = true } = {}) {
		const previousNode = workflowsStore.getNodeById(previousId);
		const newNode = workflowsStore.getNodeById(newId);
		if (!previousNode || !newNode) return;
		const workflowObject = workflowsStore.workflowObject;
		const inputNodeNames = replaceInputs ? (0, import_uniq.default)(workflowObject.getParentNodes(previousNode.name, "ALL", 1)) : [];
		const outputNodeNames = replaceOutputs ? (0, import_uniq.default)(workflowObject.getChildNodes(previousNode.name, "ALL", 1)) : [];
		const connectionPairs = [...workflowObject.getConnectionsBetweenNodes(inputNodeNames, [previousNode.name]), ...workflowObject.getConnectionsBetweenNodes([previousNode.name], outputNodeNames)];
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		for (const pair of connectionPairs) {
			const sourceNode = workflowsStore.getNodeByName(pair[0].node);
			const targetNode = workflowsStore.getNodeByName(pair[1].node);
			if (!sourceNode || !targetNode) continue;
			deleteConnection(mapLegacyConnectionToCanvasConnection(sourceNode, targetNode, pair), {
				trackHistory,
				trackBulk: false
			});
			const newSourceIConnection = {
				...pair[0],
				node: pair[0].node === previousNode.name ? newNode.name : pair[0].node
			};
			const newTargetIConnection = {
				...pair[1],
				node: pair[1].node === previousNode.name ? newNode.name : pair[1].node
			};
			const newSourceNode = sourceNode.name === previousNode.name ? newNode : sourceNode;
			const newTargetNode = targetNode.name === previousNode.name ? newNode : targetNode;
			if (!isConnectionAllowed(newSourceNode, newTargetNode, newSourceIConnection, newTargetIConnection)) continue;
			const newCanvasConnection = mapLegacyConnectionToCanvasConnection(newSourceNode, newTargetNode, [newSourceIConnection, newTargetIConnection]);
			createConnection(newCanvasConnection, { trackHistory });
			revalidateNodeInputConnections(newCanvasConnection.target);
			revalidateNodeOutputConnections(newCanvasConnection.source);
		}
		if (trackHistory && trackBulk) historyStore.stopRecordingUndo();
	}
	function setNodeActive(id, source) {
		const node = workflowsStore.getNodeById(id);
		if (!node) return;
		workflowsStore.setNodePristine(node.name, false);
		setNodeActiveByName(node.name, source);
	}
	function setNodeActiveByName(name, source) {
		ndvStore.setActiveNodeName(name, source);
	}
	function clearNodeActive() {
		ndvStore.unsetActiveNodeName();
	}
	function setNodeParameters(id, parameters) {
		const node = workflowsStore.getNodeById(id);
		if (!node) return;
		workflowState.setNodeParameters({
			name: node.name,
			value: parameters
		}, true);
	}
	function setNodeSelected(id) {
		if (!id) {
			uiStore.lastInteractedWithNodeId = void 0;
			uiStore.lastSelectedNode = "";
			return;
		}
		const node = workflowsStore.getNodeById(id);
		if (!node) return;
		uiStore.lastInteractedWithNodeId = id;
		uiStore.lastSelectedNode = node.name;
	}
	function toggleNodesDisabled(ids, { trackHistory = true, trackBulk = true } = {}) {
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		const nodes = workflowsStore.getNodesByIds(ids);
		nodeHelpers.disableNodes(nodes, {
			trackHistory,
			trackBulk: false
		});
		if (trackHistory && trackBulk) historyStore.stopRecordingUndo();
	}
	function revertToggleNodeDisabled(nodeName) {
		const node = workflowsStore.getNodeByName(nodeName);
		if (node) nodeHelpers.disableNodes([node]);
	}
	function toggleNodesPinned(ids, source, { trackHistory = true, trackBulk = true } = {}) {
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		const nodes = workflowsStore.getNodesByIds(ids);
		const nextStatePinned = nodes.some((node) => !workflowsStore.pinDataByNodeName(node.name));
		for (const node of nodes) {
			const pinnedDataForNode = usePinnedData(node);
			if (nextStatePinned) {
				const dataToPin = useDataSchema().getInputDataWithPinned(node);
				if (dataToPin.length !== 0) pinnedDataForNode.setData(dataToPin, source);
			} else pinnedDataForNode.unsetData(source);
		}
		if (trackHistory && trackBulk) historyStore.stopRecordingUndo();
	}
	function requireNodeTypeDescription(type, version) {
		return nodeTypesStore.getNodeType(type, version) ?? nodeTypesStore.communityNodeType(type)?.nodeDescription ?? {
			properties: [],
			displayName: type,
			name: type,
			group: [],
			description: "",
			version: version ?? 1,
			defaults: {},
			inputs: [],
			outputs: []
		};
	}
	async function addNodes(nodes, { viewport,...options } = {}) {
		let insertPosition = options.position;
		let lastAddedNode;
		const addedNodes = [];
		const nodesWithTypeVersion = nodes.map((node) => {
			const typeVersion = node.typeVersion ?? resolveNodeVersion(requireNodeTypeDescription(node.type));
			return {
				...node,
				typeVersion
			};
		});
		await loadNodeTypesProperties(nodesWithTypeVersion);
		if (options.trackHistory && options.trackBulk) historyStore.startRecordingUndo();
		for (const [index, nodeAddData] of nodesWithTypeVersion.entries()) {
			const { isAutoAdd, openDetail: openNDV, actionName,...node } = nodeAddData;
			const position = node.position ?? insertPosition;
			const nodeTypeDescription = requireNodeTypeDescription(node.type, node.typeVersion);
			try {
				const newNode = addNode({
					...node,
					position
				}, nodeTypeDescription, {
					...options,
					...index === 0 ? { viewport } : {},
					openNDV,
					isAutoAdd,
					actionName
				});
				lastAddedNode = newNode;
				addedNodes.push(newNode);
			} catch (error) {
				toast.showError(error, i18n.baseText("error"));
				console.error(error);
				continue;
			}
			insertPosition = [lastAddedNode.position[0] + DEFAULT_NODE_SIZE[0] * 2 + 16, lastAddedNode.position[1]];
		}
		if (lastAddedNode) updatePositionForNodeWithMultipleInputs(lastAddedNode);
		if (options.trackHistory && options.trackBulk) historyStore.stopRecordingUndo();
		if (!options.keepPristine) uiStore.stateIsDirty = true;
		return addedNodes;
	}
	function updatePositionForNodeWithMultipleInputs(node) {
		const inputNodes = editableWorkflowObject.value.getParentNodesByDepth(node.name, 1);
		if (inputNodes.length > 1) inputNodes.slice(1).forEach((inputNode, index) => {
			const nodeUi = workflowsStore.getNodeByName(inputNode.name);
			if (!nodeUi) return;
			updateNodePosition(nodeUi.id, {
				x: nodeUi.position[0],
				y: nodeUi.position[1] + 100 * (index + 1)
			});
		});
	}
	function checkMaxNodesOfTypeReached(nodeTypeDescription) {
		if (nodeTypeDescription.maxNodes !== void 0 && workflowHelpers.getNodeTypeCount(nodeTypeDescription.name) >= nodeTypeDescription.maxNodes) throw new Error(i18n.baseText("nodeView.showMessage.showMaxNodeTypeError.message", {
			adjustToNumber: nodeTypeDescription.maxNodes,
			interpolate: { nodeTypeDataDisplayName: nodeTypeDescription.displayName }
		}));
	}
	function addNode(node, nodeTypeDescription, options = {}) {
		checkMaxNodesOfTypeReached(nodeTypeDescription);
		const nodeData = resolveNodeData(node, nodeTypeDescription, { viewport: options.viewport });
		if (!nodeData) throw new Error(i18n.baseText("nodeViewV2.showError.failedToCreateNode"));
		workflowsStore.addNode(nodeData);
		if (options.trackHistory) historyStore.pushCommandToUndo(new AddNodeCommand(nodeData, Date.now()));
		if (!options.isAutoAdd) createConnectionToLastInteractedWithNode(nodeData, options);
		nextTick(() => {
			if (!options.keepPristine) uiStore.stateIsDirty = true;
			workflowsStore.setNodePristine(nodeData.name, true);
			nodeHelpers.matchCredentials(nodeData);
			nodeHelpers.updateNodeParameterIssues(nodeData);
			nodeHelpers.updateNodeCredentialIssues(nodeData);
			nodeHelpers.updateNodeInputIssues(nodeData);
			const isStickyNode = nodeData.type === STICKY_NODE_TYPE;
			const nextView = isStickyNode || !options.openNDV || preventOpeningNDV ? void 0 : experimentalNdvStore.isNdvInFocusPanelEnabled && focusPanelStore.focusPanelActive && focusPanelStore.resolvedParameter === void 0 ? "focus_panel" : experimentalNdvStore.isZoomedViewEnabled ? "zoomed_view" : "ndv";
			if (options.telemetry) trackAddNode(nodeData, options, nextView);
			if (!isStickyNode) {
				externalHooks.run("nodeView.addNodeButton", { nodeTypeName: nodeData.type });
				if (nextView === "focus_panel") {} else if (nextView === "zoomed_view") experimentalNdvStore.setNodeNameToBeFocused(nodeData.name);
				else if (nextView === "ndv") ndvStore.setActiveNodeName(nodeData.name, "added_new_node");
			}
		});
		return nodeData;
	}
	async function revertAddNode(nodeName) {
		const node = workflowsStore.getNodeByName(nodeName);
		if (!node) return;
		deleteNode(node.id);
	}
	function createConnectionToLastInteractedWithNode(node, options = {}) {
		const lastInteractedWithNode = uiStore.lastInteractedWithNode;
		if (!lastInteractedWithNode) return;
		const lastInteractedWithNodeId = lastInteractedWithNode.id;
		const lastInteractedWithNodeConnection = uiStore.lastInteractedWithNodeConnection;
		const lastInteractedWithNodeHandle = uiStore.lastInteractedWithNodeHandle;
		if (lastInteractedWithNodeHandle) {
			const { type: connectionType, mode } = parseCanvasConnectionHandleString(lastInteractedWithNodeHandle);
			const nodeId = node.id;
			const nodeHandle = createCanvasConnectionHandleString({
				mode: CanvasConnectionMode.Input,
				type: connectionType,
				index: 0
			});
			if (mode === CanvasConnectionMode.Input) createConnection({
				source: nodeId,
				sourceHandle: nodeHandle,
				target: lastInteractedWithNodeId,
				targetHandle: lastInteractedWithNodeHandle
			});
			else createConnection({
				source: lastInteractedWithNodeId,
				sourceHandle: lastInteractedWithNodeHandle,
				target: nodeId,
				targetHandle: nodeHandle
			});
		} else createConnection({
			source: lastInteractedWithNodeId,
			sourceHandle: createCanvasConnectionHandleString({
				mode: CanvasConnectionMode.Output,
				type: NodeConnectionTypes.Main,
				index: 0
			}),
			target: node.id,
			targetHandle: createCanvasConnectionHandleString({
				mode: CanvasConnectionMode.Input,
				type: NodeConnectionTypes.Main,
				index: 0
			})
		});
		if (lastInteractedWithNodeConnection) {
			deleteConnection(lastInteractedWithNodeConnection, { trackHistory: options.trackHistory });
			if (workflowsStore.getNodeById(lastInteractedWithNodeConnection.target)) createConnection({
				source: node.id,
				sourceHandle: createCanvasConnectionHandleString({
					mode: CanvasConnectionMode.Input,
					type: NodeConnectionTypes.Main,
					index: 0
				}),
				target: lastInteractedWithNodeConnection.target,
				targetHandle: lastInteractedWithNodeConnection.targetHandle
			});
		}
	}
	function trackAddNode(nodeData, options, nextView) {
		switch (nodeData.type) {
			case STICKY_NODE_TYPE:
				trackAddStickyNoteNode();
				break;
			default: trackAddDefaultNode(nodeData, options, nextView);
		}
	}
	function trackAddStickyNoteNode() {
		telemetry.track("User inserted workflow note", { workflow_id: workflowsStore.workflowId });
	}
	function trackAddDefaultNode(nodeData, options, nextView) {
		const nodeParameters = nodeData.parameters;
		const resource = typeof nodeParameters?.resource === "string" ? nodeParameters.resource : void 0;
		const operation = typeof nodeParameters?.operation === "string" ? nodeParameters.operation : void 0;
		nodeCreatorStore.onNodeAddedToCanvas({
			node_id: nodeData.id,
			node_type: nodeData.type,
			node_version: nodeData.typeVersion,
			is_auto_add: options.isAutoAdd,
			workflow_id: workflowsStore.workflowId,
			drag_and_drop: options.dragAndDrop,
			input_node_type: uiStore.lastInteractedWithNode ? uiStore.lastInteractedWithNode.type : void 0,
			resource,
			operation,
			action: options.actionName,
			next_view_shown: nextView
		});
	}
	function resolveNodeData(node, nodeTypeDescription, options = {}) {
		const id = node.id ?? nodeHelpers.assignNodeId(node);
		const name = node.name ?? nodeHelpers.getDefaultNodeName(node) ?? nodeTypeDescription.defaults.name;
		const type = nodeTypeDescription.name;
		const typeVersion = node.typeVersion;
		const position = options.forcePosition && node.position ? node.position : resolveNodePosition(node, nodeTypeDescription, { viewport: options.viewport });
		const disabled = node.disabled ?? false;
		const parameters = node.parameters ?? {};
		const nodeData = {
			...node,
			id,
			name,
			type,
			typeVersion,
			position,
			disabled,
			parameters
		};
		resolveNodeName(nodeData);
		resolveNodeParameters(nodeData, nodeTypeDescription);
		resolveNodeWebhook(nodeData, nodeTypeDescription);
		return nodeData;
	}
	async function loadNodeTypesProperties(nodes) {
		const allNodeTypeDescriptions = nodeTypesStore.allNodeTypes;
		const nodesToBeFetched = [];
		allNodeTypeDescriptions.forEach((nodeTypeDescription) => {
			const nodeVersions = Array.isArray(nodeTypeDescription.version) ? nodeTypeDescription.version : [nodeTypeDescription.version];
			if (!!nodes.find((n) => n.type === nodeTypeDescription.name && nodeVersions.includes(n.typeVersion)) && !nodeTypeDescription.hasOwnProperty("properties")) nodesToBeFetched.push({
				name: nodeTypeDescription.name,
				version: Array.isArray(nodeTypeDescription.version) ? nodeTypeDescription.version.slice(-1)[0] : nodeTypeDescription.version
			});
		});
		if (nodesToBeFetched.length > 0) await nodeTypesStore.getNodesInformation(nodesToBeFetched);
	}
	function resolveNodeVersion(nodeTypeDescription) {
		let nodeVersion = nodeTypeDescription.defaultVersion;
		if (typeof nodeVersion === "undefined") nodeVersion = Array.isArray(nodeTypeDescription.version) ? nodeTypeDescription.version.slice(-1)[0] : nodeTypeDescription.version;
		return nodeVersion;
	}
	function resolveNodeParameters(node, nodeTypeDescription) {
		node.parameters = getNodeParameters(nodeTypeDescription?.properties ?? [], node.parameters, true, false, node, nodeTypeDescription) ?? {};
	}
	function resolveNodePosition(node, nodeTypeDescription, options = {}) {
		const lastInteractedWithNode = uiStore.lastInteractedWithNode;
		const lastInteractedWithNodeConnection = uiStore.lastInteractedWithNodeConnection;
		const lastInteractedWithNodeHandle = uiStore.lastInteractedWithNodeHandle;
		const { type: connectionType, index: connectionIndex } = parseCanvasConnectionHandleString(lastInteractedWithNodeHandle ?? lastInteractedWithNodeConnection?.sourceHandle ?? "");
		const nodeSize = connectionType === NodeConnectionTypes.Main ? DEFAULT_NODE_SIZE : CONFIGURATION_NODE_SIZE;
		const pushOffsets = [nodeSize[0] / 2, nodeSize[1] / 2];
		let position = node.position;
		if (position) return getNewNodePosition(workflowsStore.allNodes, position, {
			offset: pushOffsets,
			size: nodeSize,
			viewport: options.viewport,
			normalize: false
		});
		if (lastInteractedWithNode) {
			const lastInteractedWithNodeTypeDescription = nodeTypesStore.getNodeType(lastInteractedWithNode.type, lastInteractedWithNode.typeVersion);
			const lastInteractedWithNodeObject = editableWorkflowObject.value.getNode(lastInteractedWithNode.name);
			const newNodeInsertPosition = uiStore.lastCancelledConnectionPosition;
			if (newNodeInsertPosition) {
				const xOffset = connectionType === NodeConnectionTypes.Main ? 0 : -nodeSize[0] / 2;
				const yOffset = connectionType === NodeConnectionTypes.Main ? -nodeSize[1] / 2 : 0;
				position = [newNodeInsertPosition[0] + xOffset, newNodeInsertPosition[1] + yOffset];
				uiStore.lastCancelledConnectionPosition = void 0;
			} else if (lastInteractedWithNodeTypeDescription && lastInteractedWithNodeObject) {
				const lastInteractedWithNodeInputTypes = getConnectionTypes(getNodeInputs(editableWorkflowObject.value, lastInteractedWithNodeObject, lastInteractedWithNodeTypeDescription));
				const lastInteractedWithNodeScopedInputTypes = (lastInteractedWithNodeInputTypes || []).filter((input) => input !== NodeConnectionTypes.Main);
				const lastInteractedWithNodeMainOutputs = getConnectionTypes(getNodeOutputs(editableWorkflowObject.value, lastInteractedWithNodeObject, lastInteractedWithNodeTypeDescription)).filter((output) => output === NodeConnectionTypes.Main);
				let yOffset = 0;
				if (lastInteractedWithNodeConnection) shiftDownstreamNodesPosition(lastInteractedWithNode.name, PUSH_NODES_OFFSET, { trackHistory: true });
				if (lastInteractedWithNodeMainOutputs.length > 1) yOffset = generateOffsets(lastInteractedWithNodeMainOutputs.length, DEFAULT_NODE_SIZE[1], 16)[connectionIndex];
				let outputs = [];
				try {
					outputs = getNodeOutputs(editableWorkflowObject.value, node, nodeTypeDescription);
				} catch (e) {}
				const outputTypes = getConnectionTypes(outputs);
				const customOffset = {
					[NodeConnectionTypes.AiLanguageModel]: nodeSize[0] * 2,
					[NodeConnectionTypes.AiMemory]: nodeSize[0]
				}[connectionType] ?? 0;
				if (outputTypes.length > 0 && outputTypes.every((outputName) => outputName !== NodeConnectionTypes.Main)) {
					const scopedConnectionIndex = lastInteractedWithNodeScopedInputTypes.findIndex((inputType) => outputs[0] === inputType);
					const lastInteractedWithNodeWidthDivisions = Math.max(lastInteractedWithNodeScopedInputTypes.length + 1, 1);
					position = [lastInteractedWithNode.position[0] + CONFIGURABLE_NODE_SIZE[0] / lastInteractedWithNodeWidthDivisions * (scopedConnectionIndex + 1) - nodeSize[0] / 2 - customOffset, lastInteractedWithNode.position[1] + PUSH_NODES_OFFSET];
				} else {
					let pushOffset = PUSH_NODES_OFFSET;
					if (lastInteractedWithNodeInputTypes.find((input) => input !== NodeConnectionTypes.Main)) pushOffset += 140;
					position = [lastInteractedWithNode.position[0] + pushOffset, lastInteractedWithNode.position[1] + yOffset];
				}
			}
		}
		if (!position) if (nodeTypesStore.isTriggerNode(node.type) && triggerNodes.value.length === 0) position = [0, 0];
		else position = lastClickPosition.value;
		return getNewNodePosition(workflowsStore.allNodes, position, {
			offset: pushOffsets,
			size: nodeSize,
			viewport: options.viewport
		});
	}
	function resolveNodeName(node) {
		node.name = uniqueNodeName(i18n.localizeNodeName(rootStore.defaultLocale, node.name, node.type));
	}
	function resolveNodeWebhook(node, nodeTypeDescription) {
		if (nodeTypeDescription.webhooks?.length && !node.webhookId) nodeHelpers.assignWebhookId(node);
		if ([
			"n8n-nodes-base.webhook",
			"n8n-nodes-base.formTrigger",
			"@n8n/n8n-nodes-langchain.mcpTrigger"
		].includes(node.type) && node.parameters.path === "") node.parameters.path = node.webhookId;
	}
	function shiftDownstreamNodesPosition(sourceNodeName, margin, { trackHistory = false }) {
		const sourceNode = workflowsStore.nodesByName[sourceNodeName];
		const checkNodes = workflowHelpers.getConnectedNodes("downstream", editableWorkflowObject.value, sourceNodeName);
		for (const nodeName of checkNodes) {
			const node = workflowsStore.nodesByName[nodeName];
			if (!node || !sourceNode || node.position[0] < sourceNode.position[0]) continue;
			updateNodePosition(node.id, {
				x: node.position[0] + margin,
				y: node.position[1]
			}, { trackHistory });
		}
	}
	function createConnection(connection, { trackHistory = false, keepPristine = false } = {}) {
		const sourceNode = workflowsStore.getNodeById(connection.source);
		const targetNode = workflowsStore.getNodeById(connection.target);
		if (!sourceNode || !targetNode) return;
		if (trackHistory) historyStore.pushCommandToUndo(new AddConnectionCommand(mapCanvasConnectionToLegacyConnection(sourceNode, targetNode, connection), Date.now()));
		const mappedConnection = mapCanvasConnectionToLegacyConnection(sourceNode, targetNode, connection);
		if (!isConnectionAllowed(sourceNode, targetNode, mappedConnection[0], mappedConnection[1])) return;
		workflowsStore.addConnection({ connection: mappedConnection });
		nextTick(() => {
			nodeHelpers.updateNodeInputIssues(sourceNode);
			nodeHelpers.updateNodeInputIssues(targetNode);
		});
		if (!keepPristine) uiStore.stateIsDirty = true;
	}
	function revertCreateConnection(connection) {
		const sourceNodeName = connection[0].node;
		const sourceNode = workflowsStore.getNodeByName(sourceNodeName);
		const targetNodeName = connection[1].node;
		const targetNode = workflowsStore.getNodeByName(targetNodeName);
		if (!sourceNode || !targetNode) return;
		deleteConnection(mapLegacyConnectionToCanvasConnection(sourceNode, targetNode, connection));
	}
	function deleteConnectionsByNodeId(targetNodeId, { trackHistory = false, trackBulk = true } = {}) {
		const targetNode = workflowsStore.getNodeById(targetNodeId);
		if (!targetNode) return;
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		const connections = (0, import_cloneDeep.default)(workflowsStore.workflow.connections);
		for (const nodeName of Object.keys(connections)) {
			const node = workflowsStore.getNodeByName(nodeName);
			if (!node) continue;
			for (const type of Object.keys(connections[nodeName])) for (const index of Object.keys(connections[nodeName][type])) {
				const connectionsToDelete = connections[nodeName][type][parseInt(index, 10)] ?? [];
				for (const connectionIndex of Object.keys(connectionsToDelete)) {
					const connectionData = connectionsToDelete[parseInt(connectionIndex, 10)];
					if (!connectionData) continue;
					const connectionDataNode = workflowsStore.getNodeByName(connectionData.node);
					if (connectionDataNode && (connectionDataNode.id === targetNode.id || node.name === targetNode.name)) deleteConnection({
						source: node.id,
						sourceHandle: createCanvasConnectionHandleString({
							mode: CanvasConnectionMode.Output,
							type,
							index: parseInt(index, 10)
						}),
						target: connectionDataNode.id,
						targetHandle: createCanvasConnectionHandleString({
							mode: CanvasConnectionMode.Input,
							type: connectionData.type,
							index: connectionData.index
						})
					}, {
						trackHistory,
						trackBulk: false
					});
				}
			}
		}
		delete workflowsStore.workflow.connections[targetNode.name];
		if (trackHistory && trackBulk) historyStore.stopRecordingUndo();
	}
	function deleteConnection(connection, { trackHistory = false, trackBulk = true } = {}) {
		const sourceNode = workflowsStore.getNodeById(connection.source);
		const targetNode = workflowsStore.getNodeById(connection.target);
		if (!sourceNode || !targetNode) return;
		const mappedConnection = mapCanvasConnectionToLegacyConnection(sourceNode, targetNode, connection);
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		workflowsStore.removeConnection({ connection: mappedConnection });
		if (trackHistory) {
			historyStore.pushCommandToUndo(new RemoveConnectionCommand(mappedConnection, Date.now()));
			if (trackBulk) historyStore.stopRecordingUndo();
		}
	}
	function revertDeleteConnection(connection) {
		workflowsStore.addConnection({ connection });
	}
	function revalidateNodeConnections(id, connectionMode) {
		const node = workflowsStore.getNodeById(id);
		const isInput = connectionMode === CanvasConnectionMode.Input;
		if (!node) return;
		if (!nodeTypesStore.getNodeType(node.type, node.typeVersion)) return;
		mapLegacyConnectionsToCanvasConnections(workflowsStore.workflow.connections, workflowsStore.workflow.nodes).forEach((connection) => {
			if (isInput ? connection.target === id : connection.source === id) {
				const otherNodeId = isInput ? connection.source : connection.target;
				const otherNode = workflowsStore.getNodeById(otherNodeId);
				if (!otherNode || !connection.data) return;
				const [firstNode, secondNode] = isInput ? [otherNode, node] : [node, otherNode];
				if (!isConnectionAllowed(firstNode, secondNode, connection.data.source, connection.data.target)) nextTick(() => deleteConnection(connection));
			}
		});
	}
	function revalidateNodeInputConnections(id) {
		return revalidateNodeConnections(id, CanvasConnectionMode.Input);
	}
	function revalidateNodeOutputConnections(id) {
		return revalidateNodeConnections(id, CanvasConnectionMode.Output);
	}
	function isConnectionAllowed(sourceNode, targetNode, sourceConnection, targetConnection) {
		const blocklist = [STICKY_NODE_TYPE];
		const checkIsNotInstalledCommunityNode = (node) => isCommunityPackageName(node.type) && !useNodeTypesStore().getIsNodeInstalled(node.type);
		const isSourceNotInstalled = checkIsNotInstalledCommunityNode(sourceNode);
		const isTargetNotInstalled = checkIsNotInstalledCommunityNode(targetNode);
		const getNodeType = (node) => {
			return nodeTypesStore.getNodeType(node.type, node.typeVersion) ?? nodeTypesStore.communityNodeType(node.type)?.nodeDescription;
		};
		if (sourceConnection.type !== targetConnection.type) return false;
		if (blocklist.includes(sourceNode.type) || blocklist.includes(targetNode.type)) return false;
		const sourceNodeType = getNodeType(sourceNode);
		const sourceWorkflowNode = editableWorkflowObject.value.getNode(sourceNode.name);
		if (!sourceWorkflowNode) return false;
		let sourceNodeOutputs = [];
		if (sourceNodeType) sourceNodeOutputs = getNodeOutputs(editableWorkflowObject.value, sourceWorkflowNode, sourceNodeType) || [];
		const sourceNodeHasOutputConnectionOfType = !!sourceNodeOutputs.find((output) => {
			return (typeof output === "string" ? output : output.type) === sourceConnection.type;
		});
		const sourceNodeHasOutputConnectionPortOfType = sourceConnection.index < sourceNodeOutputs.length;
		if ((!sourceNodeHasOutputConnectionOfType || !sourceNodeHasOutputConnectionPortOfType) && !isSourceNotInstalled) return false;
		const targetNodeType = getNodeType(targetNode);
		const targetWorkflowNode = editableWorkflowObject.value.getNode(targetNode.name);
		if (!targetWorkflowNode) return false;
		let targetNodeInputs = [];
		if (targetNodeType) targetNodeInputs = getNodeInputs(editableWorkflowObject.value, targetWorkflowNode, targetNodeType) || [];
		const targetNodeHasInputConnectionOfType = !!targetNodeInputs.find((input) => {
			if ((typeof input === "string" ? input : input.type) !== targetConnection.type) return false;
			const filter = typeof input === "object" && "filter" in input ? input.filter : void 0;
			if (filter?.nodes?.length && !filter.nodes?.includes(sourceNode.type) || filter?.excludedNodes?.length && filter.excludedNodes?.includes(sourceNode.type)) {
				toast.showToast({
					title: i18n.baseText("nodeView.showError.nodeNodeCompatible.title"),
					message: i18n.baseText("nodeView.showError.nodeNodeCompatible.message", { interpolate: {
						sourceNodeName: sourceNode.name,
						targetNodeName: targetNode.name
					} }),
					type: "error",
					duration: 5e3
				});
				return false;
			}
			return true;
		});
		const targetNodeHasInputConnectionPortOfType = targetConnection.index < targetNodeInputs.length;
		if ((!targetNodeHasInputConnectionOfType || !targetNodeHasInputConnectionPortOfType) && !isTargetNotInstalled) return false;
		return true;
	}
	async function addConnections(connections, { trackBulk = true, trackHistory = false, keepPristine = false } = {}) {
		await nextTick();
		if (trackBulk && trackHistory) historyStore.startRecordingUndo();
		for (const connection of connections) createConnection(connection, {
			trackHistory,
			keepPristine
		});
		if (trackBulk && trackHistory) historyStore.stopRecordingUndo();
		if (!keepPristine) uiStore.stateIsDirty = true;
	}
	function resetWorkspace() {
		nodeCreatorStore.setNodeCreatorState({ createNodeActive: false });
		nodeCreatorStore.setShowScrim(false);
		if (workflowsStore.executionWaitingForWebhook) try {
			workflowsStore.removeTestWebhook(workflowsStore.workflowId);
		} catch (error) {}
		workflowsStore.resetWorkflow();
		workflowState.resetState();
		workflowsStore.currentWorkflowExecutions = [];
		workflowState.setActiveExecutionId(void 0);
		workflowsStore.lastSuccessfulExecution = null;
		uiStore.resetLastInteractedWith();
		uiStore.stateIsDirty = false;
		executionsStore.activeExecution = null;
		nodeHelpers.credentialsUpdated.value = false;
	}
	function initializeWorkspace(data) {
		workflowHelpers.initState(data);
		data.nodes.forEach((node) => {
			const nodeTypeDescription = requireNodeTypeDescription(node.type, node.typeVersion);
			const isUnknownNode = !nodeTypesStore.getNodeType(node.type, node.typeVersion) && !nodeTypesStore.communityNodeType(node.type)?.nodeDescription;
			nodeHelpers.matchCredentials(node);
			if (!isUnknownNode) {
				resolveNodeParameters(node, nodeTypeDescription);
				resolveNodeWebhook(node, nodeTypeDescription);
			}
		});
		workflowsStore.setNodes(data.nodes);
		workflowsStore.setConnections(data.connections);
	}
	const initializeUnknownNodes = (nodes) => {
		nodes.forEach((node) => {
			const nodeTypeDescription = requireNodeTypeDescription(node.type, node.typeVersion);
			nodeHelpers.matchCredentials(node);
			resolveNodeParameters(node, nodeTypeDescription);
			resolveNodeWebhook(node, nodeTypeDescription);
			const nodeIndex = workflowsStore.workflow.nodes.findIndex((n) => {
				return n.name === node.name;
			});
			workflowState.updateNodeAtIndex(nodeIndex, node);
		});
	};
	function removeUnknownCredentials(workflow) {
		if (!workflow?.nodes) return;
		for (const node of workflow.nodes) {
			if (!node.credentials) continue;
			for (const [name, credential] of Object.entries(node.credentials)) {
				if (typeof credential === "string" || credential.id === null) continue;
				if (!credentialsStore.getCredentialById(credential.id)) delete node.credentials[name];
			}
		}
	}
	async function addImportedNodesToWorkflow(data, { trackBulk = true, trackHistory = false, viewport = DEFAULT_VIEWPORT_BOUNDARIES } = {}) {
		const nodeNameTable = {};
		const newNodeNames = new Set((data.nodes ?? []).map((node) => node.name));
		if (!data.nodes) throw new Error(i18n.baseText("nodeView.noNodesGivenToAdd"));
		const nodeTypesCount = workflowHelpers.getNodeTypesMaxCount();
		let oldName;
		let newName;
		const createNodes = [];
		await nodeHelpers.loadNodesProperties(data.nodes.map((node) => ({
			name: node.type,
			version: node.typeVersion
		})));
		data.nodes.forEach((node) => {
			if (nodeTypesCount[node.type] !== void 0) if (nodeTypesCount[node.type].exist >= nodeTypesCount[node.type].max) {
				nodeNameTable[node.name] = nodeTypesCount[node.type].nodeNames[0];
				return;
			} else nodeTypesCount[node.type].exist += 1;
			oldName = node.name;
			const localized = i18n.localizeNodeName(rootStore.defaultLocale, node.name, node.type);
			newNodeNames.delete(oldName);
			newName = uniqueNodeName(localized, Array.from(newNodeNames));
			newNodeNames.add(newName);
			nodeNameTable[oldName] = newName;
			createNodes.push(node);
		});
		const newConnections = {};
		const currentConnections = data.connections ?? {};
		const createNodeNames = createNodes.map((node) => node.name);
		let sourceNode, type, sourceIndex, connectionIndex, connectionData;
		for (sourceNode of Object.keys(currentConnections)) {
			if (!createNodeNames.includes(sourceNode)) continue;
			const connection = {};
			for (type of Object.keys(currentConnections[sourceNode])) {
				connection[type] = [];
				for (sourceIndex = 0; sourceIndex < currentConnections[sourceNode][type].length; sourceIndex++) {
					const nodeSourceConnections = [];
					const connectionsToCheck = currentConnections[sourceNode][type][sourceIndex];
					if (connectionsToCheck) for (connectionIndex = 0; connectionIndex < connectionsToCheck.length; connectionIndex++) {
						connectionData = connectionsToCheck[connectionIndex];
						if (!createNodeNames.includes(connectionData.node)) continue;
						nodeSourceConnections.push(connectionData);
					}
					connection[type].push(nodeSourceConnections);
				}
			}
			newConnections[sourceNode] = connection;
		}
		const tempWorkflow = workflowsStore.createWorkflowObject(createNodes, newConnections);
		for (oldName in nodeNameTable) {
			if (oldName === nodeNameTable[oldName]) continue;
			tempWorkflow.renameNode(oldName, nodeNameTable[oldName]);
		}
		if (data.pinData) {
			let pinDataSuccess = true;
			for (const nodeName of Object.keys(data.pinData)) {
				if (!pinDataSuccess) {
					toast.showError(new Error(i18n.baseText("ndv.pinData.error.tooLarge.description")), i18n.baseText("ndv.pinData.error.tooLarge.title"));
					continue;
				}
				const node = tempWorkflow.nodes[nodeNameTable[nodeName]];
				try {
					usePinnedData(node).setData(data.pinData[nodeName], "add-nodes");
					pinDataSuccess = true;
				} catch (error) {
					pinDataSuccess = false;
					console.error(error);
				}
			}
		}
		if (trackBulk && trackHistory) historyStore.startRecordingUndo();
		await addNodes(Object.values(tempWorkflow.nodes), {
			trackBulk: false,
			trackHistory,
			viewport
		});
		await addConnections(mapLegacyConnectionsToCanvasConnections(tempWorkflow.connectionsBySourceNode, Object.values(tempWorkflow.nodes)), {
			trackBulk: false,
			trackHistory
		});
		if (trackBulk && trackHistory) historyStore.stopRecordingUndo();
		uiStore.stateIsDirty = true;
		return {
			nodes: Object.values(tempWorkflow.nodes),
			connections: tempWorkflow.connectionsBySourceNode
		};
	}
	async function importWorkflowData(workflowData, source, { importTags = true, trackBulk = true, trackHistory = true, viewport, regenerateIds = true, trackEvents = true } = {}) {
		uiStore.resetLastInteractedWith();
		if (!workflowData.hasOwnProperty("nodes") || !workflowData.hasOwnProperty("connections")) return {};
		try {
			const nodeIdMap = {};
			if (workflowData.nodes) {
				const nodeNames = new Set(workflowData.nodes.map((node) => node.name));
				workflowData.nodes.forEach((node) => {
					if (!node.name) {
						const newName = uniqueNodeName(nodeTypesStore.getNodeType(node.type)?.displayName ?? node.type, Array.from(nodeNames));
						node.name = newName;
						nodeNames.add(newName);
					}
					if (node.webhookId && UPDATE_WEBHOOK_ID_NODE_TYPES.includes(node.type)) {
						if (Object.values(workflowsStore.workflowObject.nodes).some((n) => n.webhookId === node.webhookId)) {
							nodeHelpers.assignWebhookId(node);
							if (node.parameters.path) node.parameters.path = node.webhookId;
							else if (node.parameters.options.path) node.parameters.options.path = node.webhookId;
						}
					}
					if (node.id) {
						const previousId = node.id;
						if (regenerateIds) {
							const newId = nodeHelpers.assignNodeId(node);
							nodeIdMap[newId] = previousId;
						}
					} else nodeHelpers.assignNodeId(node);
				});
			}
			removeUnknownCredentials(workflowData);
			try {
				if (trackEvents) {
					const nodeGraph = JSON.stringify(generateNodesGraph(workflowData, workflowHelpers.getNodeTypes(), {
						nodeIdMap,
						sourceInstanceId: workflowData.meta && workflowData.meta.instanceId !== rootStore.instanceId ? workflowData.meta.instanceId : "",
						isCloudDeployment: settingsStore.isCloudDeployment
					}).nodeGraph);
					if (source === "paste") telemetry.track("User pasted nodes", {
						workflow_id: workflowsStore.workflowId,
						node_graph_string: nodeGraph
					});
					else if (source === "duplicate") telemetry.track("User duplicated nodes", {
						workflow_id: workflowsStore.workflowId,
						node_graph_string: nodeGraph
					});
					else telemetry.track("User imported workflow", {
						source,
						workflow_id: workflowsStore.workflowId,
						node_graph_string: nodeGraph
					});
				}
			} catch {}
			workflowHelpers.updateNodePositions(workflowData, getNewNodePosition(editableWorkflow.value.nodes, lastClickPosition.value, {
				...workflowData.nodes && workflowData.nodes.length > 1 ? { size: getNodesGroupSize(workflowData.nodes) } : {},
				viewport
			}));
			await addImportedNodesToWorkflow(workflowData, {
				trackBulk,
				trackHistory,
				viewport
			});
			if (importTags && settingsStore.areTagsEnabled && Array.isArray(workflowData.tags)) await importWorkflowTags(workflowData);
			if (workflowData.name) workflowState.setWorkflowName({
				newName: workflowData.name,
				setStateDirty: true
			});
			return workflowData;
		} catch (error) {
			toast.showError(error, i18n.baseText("nodeView.showError.importWorkflowData.title"));
			return {};
		}
	}
	async function importWorkflowTags(workflowData) {
		const allTags = await tagsStore.fetchAll();
		const tagNames = new Set(allTags.map((tag) => tag.name));
		const workflowTags = workflowData.tags;
		const notFound = workflowTags.filter((tag) => !tagNames.has(tag.name));
		const creatingTagPromises = [];
		for (const tag of notFound) {
			const creationPromise = tagsStore.create(tag.name).then((newTag) => {
				allTags.push(newTag);
				return newTag;
			});
			creatingTagPromises.push(creationPromise);
		}
		await Promise.all(creatingTagPromises);
		const tagIds = workflowTags.reduce((accu, imported) => {
			const tag = allTags.find((t) => t.name === imported.name);
			if (tag) accu.push(tag.id);
			return accu;
		}, []);
		workflowsStore.addWorkflowTagIds(tagIds);
	}
	async function fetchWorkflowDataFromUrl(url) {
		let workflowData;
		canvasStore.startLoading();
		try {
			workflowData = await workflowsStore.getWorkflowFromUrl(url);
		} catch (error) {
			toast.showError(error, i18n.baseText("nodeView.showError.getWorkflowDataFromUrl.title"));
			return;
		} finally {
			canvasStore.stopLoading();
		}
		return workflowData;
	}
	function getNodesToSave(nodes) {
		const data = {
			nodes: [],
			connections: {},
			pinData: {}
		};
		const exportedNodeNames = /* @__PURE__ */ new Set();
		for (const node of nodes) {
			const nodeSaveData = workflowHelpers.getNodeDataToSave(node);
			const pinDataForNode = workflowsStore.pinDataByNodeName(node.name);
			if (pinDataForNode) data.pinData[node.name] = pinDataForNode;
			if (nodeSaveData.credentials && settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Sharing]) nodeSaveData.credentials = filterAllowedCredentials(nodeSaveData.credentials, workflowsStore.usedCredentials);
			data.nodes.push(nodeSaveData);
			exportedNodeNames.add(node.name);
		}
		data.connections = getConnectionsForNodes(data.nodes, exportedNodeNames);
		workflowHelpers.removeForeignCredentialsFromWorkflow(data, credentialsStore.allCredentials);
		return data;
	}
	function filterAllowedCredentials(credentials, usedCredentials) {
		return Object.fromEntries(Object.entries(credentials).filter(([, credential]) => {
			return credential.id && (!usedCredentials[credential.id] || usedCredentials[credential.id]?.currentUserHasAccess);
		}));
	}
	function getConnectionsForNodes(nodes, includeNodeNames) {
		const connections = {};
		for (const node of nodes) {
			const outgoingConnections = workflowsStore.outgoingConnectionsByNodeName(node.name);
			if (!Object.keys(outgoingConnections).length) continue;
			const filteredConnections = filterConnectionsByNodes(outgoingConnections, includeNodeNames);
			if (Object.keys(filteredConnections).length) connections[node.name] = filteredConnections;
		}
		return connections;
	}
	function filterConnectionsByNodes(connections, includeNodeNames) {
		const filteredConnections = {};
		for (const [type, typeConnections] of Object.entries(connections)) {
			const validConnections = typeConnections.map((sourceConnections) => (sourceConnections ?? []).filter((connection) => includeNodeNames.has(connection.node)));
			if (validConnections.length) filteredConnections[type] = validConnections;
		}
		return filteredConnections;
	}
	async function duplicateNodes(ids, options = {}) {
		return (await importWorkflowData(deepCopy(getNodesToSave(workflowsStore.getNodesByIds(ids))), "duplicate", {
			viewport: options.viewport,
			importTags: false
		})).nodes?.map((node) => node.id).filter(isPresent) ?? [];
	}
	async function copyNodes(ids) {
		const workflowData = deepCopy(getNodesToSave(workflowsStore.getNodesByIds(ids)));
		workflowData.meta = {
			...workflowData.meta,
			...workflowsStore.workflow.meta,
			instanceId: rootStore.instanceId
		};
		await clipboard.copy(JSON.stringify(workflowData, null, 2));
		telemetry.track("User copied nodes", {
			node_types: workflowData.nodes.map((node) => node.type),
			workflow_id: workflowsStore.workflowId
		});
	}
	async function cutNodes(ids) {
		await copyNodes(ids);
		deleteNodes(ids);
	}
	async function openExecution(executionId, nodeId) {
		let data;
		try {
			data = await workflowsStore.getExecution(executionId);
		} catch (error) {
			toast.showError(error, i18n.baseText("nodeView.showError.openExecution.title"));
			return;
		}
		if (data === void 0) throw new Error(`Execution with id "${executionId}" could not be found!`);
		if (data.status === "error" && data.data?.resultData.error) {
			const { title, message } = getExecutionErrorToastConfiguration({
				error: data.data.resultData.error,
				lastNodeExecuted: data.data.resultData.lastNodeExecuted
			});
			toast.showMessage({
				title,
				message,
				type: "error",
				duration: 0
			});
		}
		initializeWorkspace(data.workflowData);
		workflowState.setWorkflowExecutionData(data);
		if (!["manual", "evaluation"].includes(data.mode)) workflowsStore.setWorkflowPinData({});
		if (nodeId) {
			const node = workflowsStore.getNodeById(nodeId);
			if (node) ndvStore.setActiveNodeName(node.name, "other");
			else toast.showError(/* @__PURE__ */ new Error(`Node with id "${nodeId}" could not be found!`), i18n.baseText("nodeView.showError.openExecution.node"));
		}
		uiStore.stateIsDirty = false;
		return data;
	}
	function startChat(source) {
		if (!workflowsStore.allNodes.some(isChatNode)) return;
		const workflowObject = workflowsStore.workflowObject;
		logsStore.toggleOpen(true);
		const payload = {
			workflow_id: workflowObject.id,
			button_type: source
		};
		externalHooks.run("nodeView.onOpenChat", payload);
		telemetry.track("User clicked chat open button", payload);
		setTimeout(() => {
			chatEventBus.emit("focusInput");
		}, 0);
	}
	async function importTemplate({ id, name, workflow }) {
		const convertedNodes = workflow.nodes?.map(workflowsStore.convertTemplateNodeToNodeUi);
		if (workflow.connections) workflowsStore.setConnections(workflow.connections);
		await addNodes(convertedNodes ?? []);
		await workflowState.getNewWorkflowDataAndMakeShareable(name, projectsStore.currentProjectId);
		workflowsStore.addToWorkflowMetadata({ templateId: `${id}` });
	}
	function tryToOpenSubworkflowInNewTab(nodeId) {
		const node = workflowsStore.getNodeById(nodeId);
		if (!node) return false;
		const subWorkflowId = getSubworkflowId(node);
		if (!subWorkflowId) return false;
		window.open(`${rootStore.baseUrl}workflow/${subWorkflowId}`, "_blank");
		return true;
	}
	function replaceNode(previousId, newId, { trackHistory = true, trackBulk = true } = {}) {
		const previousNode = workflowsStore.getNodeById(previousId);
		const newNode = workflowsStore.getNodeById(newId);
		if (!previousNode || !newNode) return;
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		const [x, y] = previousNode.position;
		updateNodePosition(newId, {
			x,
			y
		}, { trackHistory });
		replaceNodeConnections(previousId, newId, {
			trackBulk: false,
			trackHistory
		});
		deleteNode(previousId, {
			trackHistory,
			trackBulk: false
		});
		uiStore.stateIsDirty = true;
		if (trackHistory && trackBulk) historyStore.stopRecordingUndo();
	}
	async function addNodesAndConnections(nodes, addedConnections, { trackBulk = true, trackHistory = true,...options }) {
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		const addedNodes = await addNodes(nodes, {
			...options,
			trackHistory,
			trackBulk: false,
			telemetry: true
		});
		const offsetIndex = editableWorkflow.value.nodes.length - nodes.length;
		await addConnections(addedConnections.map(({ from, to }) => {
			const fromNode = editableWorkflow.value.nodes[offsetIndex + from.nodeIndex];
			const toNode = editableWorkflow.value.nodes[offsetIndex + to.nodeIndex];
			const type = from.type ?? to.type ?? NodeConnectionTypes.Main;
			return {
				source: fromNode.id,
				sourceHandle: createCanvasConnectionHandleString({
					mode: CanvasConnectionMode.Output,
					type: isValidNodeConnectionType(type) ? type : NodeConnectionTypes.Main,
					index: from.outputIndex ?? 0
				}),
				target: toNode.id,
				targetHandle: createCanvasConnectionHandleString({
					mode: CanvasConnectionMode.Input,
					type: isValidNodeConnectionType(type) ? type : NodeConnectionTypes.Main,
					index: to.inputIndex ?? 0
				}),
				data: {
					source: {
						index: from.outputIndex ?? 0,
						type
					},
					target: {
						index: to.inputIndex ?? 0,
						type
					}
				}
			};
		}), {
			trackHistory,
			trackBulk: false
		});
		uiStore.resetLastInteractedWith();
		if (addedNodes.length > 0 && options.replaceNodeId) {
			const lastAddedNodeId = addedNodes[addedNodes.length - 1].id;
			replaceNode(options.replaceNodeId, lastAddedNodeId, {
				trackHistory,
				trackBulk: false
			});
		}
		if (trackHistory && trackBulk) historyStore.stopRecordingUndo();
		return { addedNodes };
	}
	function fitView() {
		setTimeout(() => canvasEventBus.emit("fitView"));
	}
	function trackOpenWorkflowTemplate(templateId) {
		telemetry.track("User inserted workflow template", {
			source: "workflow",
			template_id: tryToParseNumber(templateId),
			wf_template_repo_session_id: templatesStore.previousSessionId
		});
	}
	async function openWorkflowTemplate(templateId) {
		resetWorkspace();
		canvasStore.startLoading();
		canvasStore.setLoadingText(i18n.baseText("nodeView.loadingTemplate"));
		workflowsStore.currentWorkflowExecutions = [];
		executionsStore.activeExecution = null;
		let data;
		try {
			externalHooks.run("template.requested", { templateId });
			data = await templatesStore.getFixedWorkflowTemplate(templateId);
			if (!data) throw new Error(i18n.baseText("nodeView.workflowTemplateWithIdCouldNotBeFound", { interpolate: { templateId } }));
		} catch (error) {
			toast.showError(error, i18n.baseText("nodeView.couldntImportWorkflow"));
			await router.replace({ name: VIEWS.NEW_WORKFLOW });
			return;
		}
		trackOpenWorkflowTemplate(templateId);
		uiStore.isBlankRedirect = true;
		await router.replace({
			name: VIEWS.NEW_WORKFLOW,
			query: { templateId }
		});
		await importTemplate({
			id: templateId,
			name: data.name,
			workflow: data.workflow
		});
		uiStore.stateIsDirty = true;
		canvasStore.stopLoading();
		externalHooks.run("template.open", {
			templateId,
			templateName: data.name,
			workflow: data.workflow
		});
		fitView();
	}
	async function openWorkflowTemplateFromJSON(workflow) {
		if (!workflow.nodes || !workflow.connections) {
			toast.showError(new Error(i18n.baseText("nodeView.couldntLoadWorkflow.invalidWorkflowObject")), i18n.baseText("nodeView.couldntImportWorkflow"));
			await router.replace({ name: VIEWS.NEW_WORKFLOW });
			return;
		}
		resetWorkspace();
		canvasStore.startLoading();
		canvasStore.setLoadingText(i18n.baseText("nodeView.loadingTemplate"));
		workflowsStore.currentWorkflowExecutions = [];
		executionsStore.activeExecution = null;
		uiStore.isBlankRedirect = true;
		const templateId = workflow.meta.templateId;
		const parentFolderId = route.query.parentFolderId;
		await projectsStore.refreshCurrentProject();
		await fetchAndSetParentFolder(parentFolderId);
		await router.replace({
			name: VIEWS.NEW_WORKFLOW,
			query: {
				templateId,
				parentFolderId,
				projectId: projectsStore.currentProjectId
			}
		});
		await importTemplate({
			id: templateId,
			name: workflow.name,
			workflow
		});
		uiStore.stateIsDirty = true;
		canvasStore.stopLoading();
		fitView();
	}
	return {
		lastClickPosition,
		editableWorkflow,
		editableWorkflowObject,
		triggerNodes,
		requireNodeTypeDescription,
		addNodes,
		addNode,
		resolveNodePosition,
		revertAddNode,
		updateNodesPosition,
		updateNodePosition,
		tidyUp,
		revertUpdateNodePosition,
		setNodeActive,
		setNodeActiveByName,
		clearNodeActive,
		setNodeSelected,
		toggleNodesDisabled,
		revertToggleNodeDisabled,
		toggleNodesPinned,
		setNodeParameters,
		renameNode,
		revertRenameNode,
		replaceNodeParameters,
		revertReplaceNodeParameters,
		deleteNode,
		deleteNodes,
		copyNodes,
		cutNodes,
		duplicateNodes,
		getNodesToSave,
		revertDeleteNode,
		addConnections,
		createConnection,
		revertCreateConnection,
		deleteConnection,
		revertDeleteConnection,
		deleteConnectionsByNodeId,
		revalidateNodeInputConnections,
		revalidateNodeOutputConnections,
		isConnectionAllowed,
		filterConnectionsByNodes,
		connectAdjacentNodes,
		importWorkflowData,
		fetchWorkflowDataFromUrl,
		resetWorkspace,
		initializeWorkspace,
		resolveNodeWebhook,
		openExecution,
		startChat,
		importTemplate,
		replaceNodeConnections,
		tryToOpenSubworkflowInNewTab,
		initializeUnknownNodes,
		replaceNode,
		addNodesAndConnections,
		fitView,
		openWorkflowTemplate,
		openWorkflowTemplateFromJSON
	};
}
export { useLogsStore as a, LOCAL_STORAGE_PANEL_WIDTH as c, chatEventBus as d, useExperimentalNdvStore as i, LOGS_PANEL_STATE as l, useParentFolder as n, LOCAL_STORAGE_OVERVIEW_PANEL_WIDTH as o, canvasEventBus as r, LOCAL_STORAGE_PANEL_HEIGHT as s, useCanvasOperations as t, LOG_DETAILS_PANEL_STATE as u };
