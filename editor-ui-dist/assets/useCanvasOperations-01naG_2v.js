import { o as __toESM, t as __commonJSMin } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, W as mergeProps, _ as Fragment, at as renderSlot, bt as withCtx, ct as resolveDynamicComponent, et as openBlock, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode, zt as shallowRef } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { M as useLocalStorage, S as useClipboard, yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Lt as useRoute, Rt as useRouter, Ut as require_markdown_it_link_attributes, Yt as createEventBus } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { $r as CanvasConnectionMode, C as useNodeTypesStore, Cn as PUSH_NODES_OFFSET, En as generateOffsets, Er as usePostHog, It as useNDVStore, Lt as injectWorkflowState, Mt as useNodeHelpers, Nn as getNodesGroupSize, Nt as useTelemetry, Ot as useTagsStore, Rt as useWorkflowState, Sn as GRID_SIZE, Tn as doRectsOverlap, Tt as useWorkflowHelpers, Vt as useProjectsStore, Yr as isValidNodeConnectionType, Zi as isPresent, _n as CONFIGURABLE_NODE_SIZE, _r as useExternalHooks, bn as DEFAULT_NODE_SIZE, ci as MoveNodeCommand, ct as useDataSchema, d as isChatNode, di as RenameNodeCommand, dn as useFocusPanelStore, fi as ReplaceNodeParametersCommand, fs as useSettingsStore, gn as useTemplatesStore, hr as useToast, ii as AddNodeCommand, jn as getNewNodePosition, kr as v4_default, li as RemoveConnectionCommand, na as tryToParseNumber, ni as useHistoryStore, r as useUIStore, ri as AddConnectionCommand, rt as useCredentialsStore, s as useWorkflowsStore, ti as CanvasNodeRenderType, ui as RemoveNodeCommand, vr as useCanvasStore, xn as DEFAULT_VIEWPORT_BOUNDARIES, y as getExecutionErrorToastConfiguration, yn as CONFIGURATION_NODE_SIZE } from "./users.store-qBZsmf9-.js";
import { $a as NodeConnectionTypes, Ei as require_cloneDeep, Fa as isCommunityPackageName, Fi as require__baseUniq, Js as LOCAL_STORAGE_LOGS_PANEL_DETAILS_PANEL_SUB_NODE, Mc as EnterpriseEditionFeature, Pa as deepCopy, Xo as VIEWS, Xs as LOCAL_STORAGE_LOGS_SYNC_SELECTION, Ys as LOCAL_STORAGE_LOGS_PANEL_OPEN, aa as getNodeOutputs, da as getSubworkflowId, ea as generateNodesGraph, ha as isHitlToolType, ia as getNodeInputs, jn as MCP_TRIGGER_NODE_TYPE, mn as FORM_TRIGGER_NODE_TYPE, oa as getNodeParameters, pr as STICKY_NODE_TYPE, qs as LOCAL_STORAGE_LOGS_PANEL_DETAILS_PANEL, ra as getConnectionTypes, wc as NDV_IN_FOCUS_PANEL_EXPERIMENT, xr as WEBHOOK_NODE_TYPE, yc as CANVAS_ZOOMED_VIEW_EXPERIMENT, yr as UPDATE_WEBHOOK_ID_NODE_TYPES } from "./constants-Cyrg9Nbl.js";
import { A as defineStore, r as useRootStore } from "./_baseOrderBy-3Uh8XZv3.js";
import { t as useExecutionsStore } from "./executions.store-nTCUYDJR.js";
import { t as usePinnedData } from "./usePinnedData-B4FHq9FM.js";
import { a as mapLegacyConnectionToCanvasConnection, c as parseCanvasConnectionHandleString, i as mapCanvasConnectionToLegacyConnection, n as createCanvasConnectionHandleString, o as mapLegacyConnectionsToCanvasConnections } from "./canvas.utils-BvLPDYAs.js";
import { t as useNodeCreatorStore } from "./nodeCreator.store-D-pWr7VG.js";
import { t as core_default } from "./core-DtHcbiEh.js";
import { a as bash, i as javascript, n as typescript, r as python, t as xml } from "./xml-DMSvkJ3u.js";
import { t as VueMarkdown_default } from "./VueMarkdown-DGZ05_F-.js";
import { t as useFoldersStore } from "./folders.store-B29vIVJe.js";
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
var Button_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "Button",
	props: {
		type: { default: "primary" },
		element: { default: "button" },
		disabled: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const buttonTypeClass = computed(() => {
			return `chat-button-${props.type}${props.disabled ? "-disabled" : ""}`;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", { class: normalizeClass({ "chat-button-wrapper-disabled": props.disabled }) }, [(openBlock(), createBlock(resolveDynamicComponent(__props.element), mergeProps({ class: ["chat-button", buttonTypeClass.value] }, _ctx.$attrs), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["class"]))], 2);
		};
	}
});
var import_markdown_it_link_attributes = /* @__PURE__ */ __toESM(require_markdown_it_link_attributes());
var MarkdownRenderer_default = /* @__PURE__ */ defineComponent({
	__name: "MarkdownRenderer",
	props: { text: {} },
	setup(__props) {
		core_default.registerLanguage("javascript", javascript);
		core_default.registerLanguage("typescript", typescript);
		core_default.registerLanguage("python", python);
		core_default.registerLanguage("xml", xml);
		core_default.registerLanguage("bash", bash);
		const linksNewTabPlugin = (vueMarkdownItInstance) => {
			vueMarkdownItInstance.use(import_markdown_it_link_attributes.default, { attrs: {
				target: "_blank",
				rel: "noopener"
			} });
		};
		const markdownOptions = { highlight(str, lang) {
			if (lang && core_default.getLanguage(lang)) try {
				return core_default.highlight(str, { language: lang }).value;
			} catch {}
			return "";
		} };
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(VueMarkdown_default), {
				class: "chat-message-markdown",
				source: __props.text,
				options: markdownOptions,
				plugins: [linksNewTabPlugin]
			}, null, 8, ["source", "plugins"]);
		};
	}
});
var MessageWithButtons_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MessageWithButtons",
	props: {
		text: {},
		buttons: {}
	},
	setup(__props) {
		const clickedButtonIndex = ref(null);
		const onClick = async (link, index) => {
			if (clickedButtonIndex.value !== null) return;
			if ((await fetch(link)).ok) clickedButtonIndex.value = index;
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(MarkdownRenderer_default, { text: __props.text }, null, 8, ["text"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.buttons) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.buttons, (button, index) => {
				return openBlock(), createElementBlock(Fragment, { key: button.text }, [clickedButtonIndex.value === null || index === clickedButtonIndex.value ? (openBlock(), createBlock(Button_default, {
					key: 0,
					element: "button",
					type: button.type,
					disabled: index === clickedButtonIndex.value,
					onClick: ($event) => onClick(button.link, index)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(button.text), 1)]),
					_: 2
				}, 1032, [
					"type",
					"disabled",
					"onClick"
				])) : createCommentVNode("", true)], 64);
			}), 128))], 2)]);
		};
	}
});
var MessageWithButtons_vue_vue_type_style_index_0_lang_module_default = { buttons: "_buttons_1hb9q_125" };
var MessageWithButtons_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MessageWithButtons_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MessageWithButtons_vue_vue_type_style_index_0_lang_module_default }]]);
const MessageComponentKey = { WITH_BUTTONS: "with-buttons" };
MessageComponentKey.WITH_BUTTONS;
const ChatSymbol = "Chat";
const ChatOptionsSymbol = "ChatOptions";
var CHAT_NODE_MESSAGE_WITH_BUTTONS_TYPE = "with-buttons";
function constructChatWebsocketUrl(url, executionId, sessionId, isPublic) {
	const baseUrl = new URL(url).origin;
	const wsProtocol = baseUrl.startsWith("https") ? "wss" : "ws";
	return `${baseUrl.replace(/^https?/, wsProtocol)}/chat?sessionId=${sessionId}&executionId=${executionId}${isPublic ? "&isPublic=true" : ""}`;
}
function parseBotChatMessageContent(message) {
	const id = v4_default();
	let chatMessage = {
		id,
		sender: "bot",
		text: message
	};
	try {
		const parsed = JSON.parse(message);
		if (parsed.type === CHAT_NODE_MESSAGE_WITH_BUTTONS_TYPE) chatMessage = {
			id,
			sender: "bot",
			type: "component",
			key: MessageComponentKey.WITH_BUTTONS,
			arguments: {
				text: parsed.text,
				buttons: parsed.buttons,
				blockUserInput: parsed.blockUserInput
			}
		};
	} catch {}
	return chatMessage;
}
function shouldBlockUserInput(message) {
	if (message.type === "component" && message.key === MessageComponentKey.WITH_BUTTONS && typeof message.arguments?.blockUserInput === "boolean") return message.arguments?.blockUserInput;
	return false;
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
var import_cloneDeep = /* @__PURE__ */ __toESM(require_cloneDeep(), 1);
var import_uniq = /* @__PURE__ */ __toESM(require_uniq(), 1);
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
	function tidyUp({ result, source, target }, { trackEvents = true, trackHistory = true, trackBulk = true } = {}) {
		updateNodesPosition(result.nodes.map(({ id, x, y }) => ({
			id,
			position: {
				x,
				y
			}
		})), {
			trackBulk,
			trackHistory
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
	async function renameNode(currentName, newName, { trackHistory = false, trackBulk = true, showErrorToast = true } = {}) {
		if (currentName === newName) return false;
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		newName = uniqueNodeName(newName);
		const workflow = workflowsStore.cloneWorkflowObject();
		try {
			workflow.renameNode(currentName, newName);
		} catch (error) {
			if (showErrorToast) toast.showMessage({
				type: "error",
				title: error.message,
				message: error.description
			});
			return false;
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
		return true;
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
		uiStore.markStateDirty();
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
		const pinnableNodes = workflowsStore.getNodesByIds(ids).filter((node) => {
			return usePinnedData(node).canPinNode(true);
		});
		const nextStatePinned = pinnableNodes.some((node) => !workflowsStore.pinDataByNodeName(node.name));
		for (const node of pinnableNodes) {
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
	async function addNodes(nodes, { viewport, ...options } = {}) {
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
			const { isAutoAdd, openDetail: openNDV, actionName, positionOffset, ...node } = nodeAddData;
			const rawPosition = node.position ?? insertPosition;
			const position = rawPosition && positionOffset ? [rawPosition[0] + positionOffset[0], rawPosition[1] + positionOffset[1]] : rawPosition;
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
		if (!options.keepPristine) uiStore.markStateDirty();
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
			if (!options.keepPristine) uiStore.markStateDirty();
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
		const isNewHitlToolNode = isHitlToolType(node.type);
		const lastInteractedWithNodeId = lastInteractedWithNode.id;
		const lastInteractedWithNodeConnection = uiStore.lastInteractedWithNodeConnection;
		const lastInteractedWithNodeHandle = uiStore.lastInteractedWithNodeHandle;
		if (isNewHitlToolNode && lastInteractedWithNodeConnection) {
			const { type: connectionType } = parseCanvasConnectionHandleString(lastInteractedWithNodeHandle);
			const nodeId = node.id;
			const nodeHandle = createCanvasConnectionHandleString({
				mode: CanvasConnectionMode.Input,
				type: connectionType,
				index: 0
			});
			createConnection({
				target: lastInteractedWithNodeConnection.target,
				targetHandle: lastInteractedWithNodeConnection.targetHandle,
				source: nodeId,
				sourceHandle: nodeHandle
			});
			deleteConnection(lastInteractedWithNodeConnection);
			createConnection({
				source: lastInteractedWithNodeConnection.source,
				sourceHandle: lastInteractedWithNodeConnection.sourceHandle,
				target: nodeId,
				targetHandle: nodeHandle
			});
			return;
		}
		const trackOptions = {
			trackHistory: options.trackHistory,
			trackBulk: false
		};
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
			}, trackOptions);
			else createConnection({
				source: lastInteractedWithNodeId,
				sourceHandle: lastInteractedWithNodeHandle,
				target: nodeId,
				targetHandle: nodeHandle
			}, trackOptions);
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
		}, trackOptions);
		if (lastInteractedWithNodeConnection) {
			deleteConnection(lastInteractedWithNodeConnection, trackOptions);
			if (workflowsStore.getNodeById(lastInteractedWithNodeConnection.target)) createConnection({
				source: node.id,
				sourceHandle: createCanvasConnectionHandleString({
					mode: CanvasConnectionMode.Input,
					type: NodeConnectionTypes.Main,
					index: 0
				}),
				target: lastInteractedWithNodeConnection.target,
				targetHandle: lastInteractedWithNodeConnection.targetHandle
			}, trackOptions);
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
				if (isHitlToolType(node.type) && lastInteractedWithNodeConnection && connectionType === NodeConnectionTypes.AiTool) {
					const toolUserNode = workflowsStore.getNodeById(lastInteractedWithNodeConnection.target);
					if (toolUserNode) {
						const sourceY = toolUserNode.position[1];
						const targetY = lastInteractedWithNode.position[1];
						const yDiff = (targetY - sourceY) / 2;
						const middleY = sourceY + yDiff;
						position = [lastInteractedWithNode.position[0] - CONFIGURABLE_NODE_SIZE[0] / 2, middleY];
						if (Math.abs(middleY - targetY) < PUSH_NODES_OFFSET) {
							const verticalOffset = PUSH_NODES_OFFSET / 2;
							updateNodePosition(lastInteractedWithNode.id, {
								x: lastInteractedWithNode.position[0],
								y: lastInteractedWithNode.position[1] + (yDiff > 0 ? verticalOffset : -verticalOffset)
							}, { trackHistory: true });
						}
						return getNewNodePosition(workflowsStore.allNodes, position, {
							offset: pushOffsets,
							size: nodeSize,
							viewport: options.viewport
						});
					}
				}
				const lastInteractedWithNodeInputTypes = getConnectionTypes(getNodeInputs(editableWorkflowObject.value, lastInteractedWithNodeObject, lastInteractedWithNodeTypeDescription));
				const lastInteractedWithNodeScopedInputTypes = (lastInteractedWithNodeInputTypes || []).filter((input) => input !== NodeConnectionTypes.Main);
				const lastInteractedWithNodeMainOutputs = getConnectionTypes(getNodeOutputs(editableWorkflowObject.value, lastInteractedWithNodeObject, lastInteractedWithNodeTypeDescription)).filter((output) => output === NodeConnectionTypes.Main);
				let yOffset = 0;
				if (lastInteractedWithNodeConnection) {
					let isNewNodeConfigurable = false;
					if (typeof nodeTypeDescription.inputs === "string") isNewNodeConfigurable = true;
					else if (Array.isArray(nodeTypeDescription.inputs)) isNewNodeConfigurable = getConnectionTypes(nodeTypeDescription.inputs).filter((input) => input !== NodeConnectionTypes.Main).length > 0;
					const newNodeSize = isNewNodeConfigurable ? CONFIGURABLE_NODE_SIZE : DEFAULT_NODE_SIZE;
					const shiftMargin = PUSH_NODES_OFFSET + (isNewNodeConfigurable ? CONFIGURABLE_NODE_SIZE[0] - DEFAULT_NODE_SIZE[0] : 0);
					shiftDownstreamNodesPosition(lastInteractedWithNode.name, shiftMargin, {
						trackHistory: true,
						nodeSize: newNodeSize
					});
				}
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
					if (lastInteractedWithNodeConnection) {
						const adjustedY = getYPositionForStickyOverlap(position, nodeSize);
						if (adjustedY !== null) position = [position[0], adjustedY];
					}
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
	function getNodeRect(node) {
		if (node.type === "n8n-nodes-base.stickyNote") return {
			x: node.position[0],
			y: node.position[1],
			width: node.parameters.width || DEFAULT_NODE_SIZE[0],
			height: node.parameters.height || DEFAULT_NODE_SIZE[1]
		};
		return {
			x: node.position[0],
			y: node.position[1],
			width: DEFAULT_NODE_SIZE[0],
			height: DEFAULT_NODE_SIZE[1]
		};
	}
	function hasSpaceForInsertion(insertPosition, nodeSize, nodesToCheck) {
		const insertRect = {
			x: insertPosition[0],
			y: insertPosition[1],
			width: nodeSize[0] + 16,
			height: nodeSize[1]
		};
		for (const node of nodesToCheck) {
			if (node.type === "n8n-nodes-base.stickyNote") continue;
			if (doRectsOverlap(insertRect, getNodeRect(node))) return false;
		}
		return true;
	}
	function getNodesToShift(insertPosition, sourceNodeName) {
		const allNodes = Object.values(workflowsStore.nodesByName);
		const insertX = insertPosition[0];
		const insertY = insertPosition[1];
		const yTolerance = DEFAULT_NODE_SIZE[1] * 2;
		const initialCandidates = allNodes.filter((node) => {
			if (node.type === "n8n-nodes-base.stickyNote") return false;
			if (node.name === sourceNodeName) return false;
			const isSimilarY = Math.abs(node.position[1] - insertY) <= yTolerance;
			const overlapsOrIsToTheRight = node.position[0] + DEFAULT_NODE_SIZE[0] > insertX || node.position[0] >= insertX;
			return isSimilarY && overlapsOrIsToTheRight;
		});
		const candidateNames = new Set(initialCandidates.map((n) => n.name));
		for (const candidate of initialCandidates) workflowHelpers.getConnectedNodes("downstream", editableWorkflowObject.value, candidate.name).filter((name) => {
			const node = workflowsStore.getNodeByName(name);
			if (!node) return false;
			return node.position[0] + DEFAULT_NODE_SIZE[0] > insertX || node.position[0] >= insertX;
		}).forEach((name) => candidateNames.add(name));
		const regularNodesToMove = allNodes.filter((node) => {
			if (node.type === "n8n-nodes-base.stickyNote") return false;
			return candidateNames.has(node.name);
		});
		const stickiesToStretch = [];
		const stickiesToMove = [];
		const stickyNodes = allNodes.filter((node) => node.type === STICKY_NODE_TYPE);
		const affectedMinY = Math.min(insertY, ...regularNodesToMove.map((n) => n.position[1]));
		const affectedMaxY = Math.max(insertY + DEFAULT_NODE_SIZE[1], ...regularNodesToMove.map((n) => n.position[1] + DEFAULT_NODE_SIZE[1]));
		for (const sticky of stickyNodes) {
			const stickyRect = getNodeRect(sticky);
			const stickyLeftEdge = sticky.position[0];
			const stickyRightEdge = stickyLeftEdge + stickyRect.width;
			const stickyTop = sticky.position[1];
			const overlapsVertically = !(stickyTop + stickyRect.height <= affectedMinY || stickyTop >= affectedMaxY);
			if (stickyLeftEdge >= insertX && overlapsVertically) stickiesToMove.push(sticky);
			else if (stickyLeftEdge < insertX && stickyRightEdge >= insertX && overlapsVertically) stickiesToStretch.push(sticky);
		}
		return {
			nodesToMove: [...regularNodesToMove, ...stickiesToMove],
			stickiesToStretch
		};
	}
	function getYPositionForStickyOverlap(insertPosition, nodeSize) {
		const allNodes = Object.values(workflowsStore.nodesByName);
		const stickyNodes = allNodes.filter((node) => node.type === STICKY_NODE_TYPE);
		const regularNodes = allNodes.filter((node) => node.type !== STICKY_NODE_TYPE);
		const insertRect = {
			x: insertPosition[0],
			y: insertPosition[1],
			width: nodeSize[0] + 16,
			height: nodeSize[1]
		};
		for (const node of regularNodes) if (doRectsOverlap(insertRect, getNodeRect(node))) return null;
		for (const sticky of stickyNodes) {
			const stickyRect = getNodeRect(sticky);
			if (doRectsOverlap(insertRect, stickyRect)) {
				const stickyContentTop = sticky.position[1] + 40;
				const centeredY = stickyContentTop + (sticky.position[1] + stickyRect.height - 16 - stickyContentTop - nodeSize[1]) / 2;
				return Math.round(centeredY / 16) * 16;
			}
		}
		return null;
	}
	function stretchStickyNote(sticky, stretchAmount, { trackHistory = false }) {
		const newWidth = (sticky.parameters.width || DEFAULT_NODE_SIZE[0]) + stretchAmount;
		const newParameters = {
			...sticky.parameters,
			width: newWidth
		};
		replaceNodeParameters(sticky.id, sticky.parameters, newParameters, {
			trackHistory,
			trackBulk: false
		});
	}
	function shiftDownstreamNodesPosition(sourceNodeName, margin, { trackHistory = false, nodeSize = DEFAULT_NODE_SIZE }) {
		const sourceNode = workflowsStore.nodesByName[sourceNodeName];
		if (!sourceNode) return;
		const insertPosition = [sourceNode.position[0] + PUSH_NODES_OFFSET, sourceNode.position[1]];
		if (hasSpaceForInsertion(insertPosition, nodeSize, Object.values(workflowsStore.nodesByName).filter((n) => n.name !== sourceNodeName && n.type !== "n8n-nodes-base.stickyNote"))) return;
		const { nodesToMove, stickiesToStretch } = getNodesToShift(insertPosition, sourceNodeName);
		for (const node of nodesToMove) updateNodePosition(node.id, {
			x: node.position[0] + margin,
			y: node.position[1]
		}, { trackHistory });
		for (const sticky of stickiesToStretch) stretchStickyNote(sticky, margin, { trackHistory });
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
		if (!keepPristine) uiStore.markStateDirty();
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
		nextTick(() => {
			nodeHelpers.updateNodeInputIssues(sourceNode);
			nodeHelpers.updateNodeInputIssues(targetNode);
		});
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
		const filterConnectionsByType = (connections, type) => connections.filter((connection) => {
			return (typeof connection === "string" ? connection : connection.type) === type;
		});
		const getConnectionFilter = (connection) => {
			if (connection && typeof connection === "object" && "filter" in connection) return connection.filter;
		};
		if (sourceConnection.type !== targetConnection.type) return false;
		if (blocklist.includes(sourceNode.type) || blocklist.includes(targetNode.type)) return false;
		const sourceNodeType = getNodeType(sourceNode);
		const sourceWorkflowNode = editableWorkflowObject.value.getNode(sourceNode.name);
		if (!sourceWorkflowNode) return false;
		let sourceNodeOutputs = [];
		if (sourceNodeType) sourceNodeOutputs = getNodeOutputs(editableWorkflowObject.value, sourceWorkflowNode, sourceNodeType) || [];
		const sourceOutputsOfType = filterConnectionsByType(sourceNodeOutputs, sourceConnection.type);
		const sourceNodeHasOutputConnectionOfType = sourceOutputsOfType.length > 0;
		const sourceNodeHasOutputConnectionPortOfType = sourceConnection.index < sourceOutputsOfType.length;
		const sourceConnectionFilter = getConnectionFilter(sourceNodeHasOutputConnectionPortOfType ? sourceOutputsOfType[sourceConnection.index] : void 0);
		if ((!sourceNodeHasOutputConnectionOfType || !sourceNodeHasOutputConnectionPortOfType) && !isSourceNotInstalled) return false;
		const targetNodeType = getNodeType(targetNode);
		const targetWorkflowNode = editableWorkflowObject.value.getNode(targetNode.name);
		if (!targetWorkflowNode) return false;
		let targetNodeInputs = [];
		if (targetNodeType) targetNodeInputs = getNodeInputs(editableWorkflowObject.value, targetWorkflowNode, targetNodeType) || [];
		const targetInputsOfType = filterConnectionsByType(targetNodeInputs, targetConnection.type);
		const targetNodeHasInputConnectionOfType = targetInputsOfType.length > 0;
		const targetNodeHasInputConnectionPortOfType = targetConnection.index < targetInputsOfType.length;
		const targetConnectionFilter = getConnectionFilter(targetNodeHasInputConnectionPortOfType ? targetInputsOfType[targetConnection.index] : void 0);
		function isConnectionFiltered(filter, nodeType) {
			const isNotIncluded = !!filter?.nodes?.length && !filter.nodes.includes(nodeType);
			const isExcluded = !!filter?.excludedNodes?.length && filter.excludedNodes.includes(nodeType);
			return isNotIncluded || isExcluded;
		}
		const isFilteredByTarget = isConnectionFiltered(targetConnectionFilter, sourceNode.type);
		const isFilteredBySource = isConnectionFiltered(sourceConnectionFilter, targetNode.type);
		if (isFilteredByTarget || isFilteredBySource) {
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
		if (!keepPristine) uiStore.markStateDirty();
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
		uiStore.markStateClean();
		executionsStore.activeExecution = null;
		nodeHelpers.credentialsUpdated.value = false;
	}
	async function initializeWorkspace(data) {
		await workflowHelpers.initState(data, useWorkflowState());
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
		workflowState.setWorkflowProperty("createdAt", data.createdAt);
		workflowState.setWorkflowProperty("updatedAt", data.updatedAt);
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
	async function addImportedNodesToWorkflow(data, { trackBulk = true, trackHistory = false, viewport = DEFAULT_VIEWPORT_BOUNDARIES, setStateDirty = true } = {}) {
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
			const nameToChangeTo = nodeNameTable[oldName];
			if (!nameToChangeTo || oldName === nameToChangeTo) continue;
			tempWorkflow.renameNode(oldName, nameToChangeTo);
		}
		if (data.pinData) {
			let pinDataSuccess = true;
			for (const nodeName of Object.keys(data.pinData)) {
				if (!pinDataSuccess) {
					toast.showError(new Error(i18n.baseText("ndv.pinData.error.tooLarge.description")), i18n.baseText("ndv.pinData.error.tooLarge.title"));
					continue;
				}
				const node = tempWorkflow.nodes[nodeNameTable[nodeName] ?? nodeName];
				if (node) try {
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
			viewport,
			keepPristine: true
		});
		await addConnections(mapLegacyConnectionsToCanvasConnections(tempWorkflow.connectionsBySourceNode, Object.values(tempWorkflow.nodes)), {
			trackBulk: false,
			trackHistory,
			keepPristine: true
		});
		if (trackBulk && trackHistory) historyStore.stopRecordingUndo();
		if (setStateDirty) uiStore.markStateDirty();
		else uiStore.markStateClean();
		return {
			nodes: Object.values(tempWorkflow.nodes),
			connections: tempWorkflow.connectionsBySourceNode
		};
	}
	async function importWorkflowData(workflowData, source, { importTags = true, trackBulk = true, trackHistory = true, viewport, regenerateIds = true, trackEvents = true, setStateDirty = true } = {}) {
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
						if (node.webhookId) {
							nodeHelpers.assignWebhookId(node);
							if (node.parameters.path) node.parameters.path = node.webhookId;
							else if (node.parameters.options?.path) node.parameters.options.path = node.webhookId;
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
				viewport,
				setStateDirty
			});
			if (importTags && settingsStore.areTagsEnabled && Array.isArray(workflowData.tags)) await importWorkflowTags(workflowData);
			if (workflowData.name) workflowState.setWorkflowName({
				newName: workflowData.name,
				setStateDirty
			});
			return workflowData;
		} catch (error) {
			console.error(error);
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
		workflowState.addWorkflowTagIds(tagIds);
	}
	async function fetchWorkflowDataFromUrl(url) {
		let workflowData;
		const projectId = projectsStore.currentProjectId ?? projectsStore.personalProject?.id;
		if (!projectId) throw new Error("No project selected");
		canvasStore.startLoading();
		try {
			workflowData = await workflowsStore.getWorkflowFromUrl(url, projectId);
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
		await initializeWorkspace(data.workflowData);
		workflowState.setWorkflowExecutionData(data);
		if (!["manual", "evaluation"].includes(data.mode)) workflowState.setWorkflowPinData({});
		if (nodeId) {
			const node = workflowsStore.getNodeById(nodeId);
			if (node) ndvStore.setActiveNodeName(node.name, "other");
			else toast.showError(/* @__PURE__ */ new Error(`Node with id "${nodeId}" could not be found!`), i18n.baseText("nodeView.showError.openExecution.node"));
		}
		uiStore.markStateClean();
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
		await addNodes(convertedNodes ?? [], { keepPristine: true });
		await workflowState.getNewWorkflowDataAndMakeShareable(name, projectsStore.currentProjectId);
		workflowState.addToWorkflowMetadata({ templateId: `${id}` });
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
		uiStore.markStateDirty();
		if (trackHistory && trackBulk) historyStore.stopRecordingUndo();
	}
	async function addNodesAndConnections(nodes, addedConnections, { trackBulk = true, trackHistory = true, ...options }) {
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
		if (typeof route.params.name === "string") workflowState.setWorkflowId(route.params.name);
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
		getNodesToShift,
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
export { MessageComponentKey as _, useLogsStore as a, LOCAL_STORAGE_PANEL_WIDTH as c, chatEventBus as d, constructChatWebsocketUrl as f, ChatSymbol as g, ChatOptionsSymbol as h, useExperimentalNdvStore as i, LOGS_PANEL_STATE as l, shouldBlockUserInput as m, useParentFolder as n, LOCAL_STORAGE_OVERVIEW_PANEL_WIDTH as o, parseBotChatMessageContent as p, canvasEventBus as r, LOCAL_STORAGE_PANEL_HEIGHT as s, useCanvasOperations as t, LOG_DETAILS_PANEL_STATE as u, MessageWithButtons_default as v, MarkdownRenderer_default as y };
