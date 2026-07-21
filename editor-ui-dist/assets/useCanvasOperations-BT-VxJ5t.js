import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, I as h, It as ref, N as defineComponent, R as inject, S as computed, T as createCommentVNode, U as mergeProps, W as nextTick, _ as Fragment, bt as withCtx, it as renderSlot, j as createVNode, jt as isRef, rt as renderList, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock, zt as shallowRef } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { c as useClipboard, ot as useI18n$1, v as useLocalStorage } from "./core-Cb7jeMu8.js";
import { Ct as useRoute, Yi as require_markdown_it_link_attributes, wt as useRouter } from "./src-DAbbz2gO.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useToast } from "./useToast-BAwEZJlf.js";
import { Aa as LOCAL_STORAGE_LOGS_SYNC_SELECTION, Bc as getConnectionTypes, Da as LOCAL_STORAGE_LOGS_PANEL_DETAILS_PANEL, Dl as deepCopy, Hc as getNodeOutputs, Ic as generateNodesGraph, Jc as getSubworkflowId, Ls as validateNodeSelectionForExtraction, Ns as require_cloneDeep, Oa as LOCAL_STORAGE_LOGS_PANEL_DETAILS_PANEL_SUB_NODE, Ol as isCommunityPackageName, Qc as isHitlToolType, Qd as EnterpriseEditionFeature, Rs as validateNodeSelectionForGrouping, Rt as CHAT_TRIGGER_NODE_TYPE, Uc as getNodeParameters, Vc as getNodeInputs, Vd as NDV_IN_FOCUS_PANEL_EXPERIMENT, _d as CANVAS_ZOOMED_VIEW_EXPERIMENT, bl as NodeConnectionTypes, fu as v4, gr as UPDATE_WEBHOOK_ID_NODE_TYPES, hi as VIEWS, ka as LOCAL_STORAGE_LOGS_PANEL_OPEN, kl as isObjectEmpty, sl as resolveNodeWebhookId, ur as STICKY_NODE_TYPE, wn as MANUAL_CHAT_TRIGGER_NODE_TYPE } from "./constants-BG93cxLW.js";
import { Ar as mapLegacyConnectionToCanvasConnection, Br as PUSH_NODES_OFFSET, Cr as createCanvasConnectionHandleString, Fi as isValidNodeConnectionType, Hi as CanvasConnectionMode, Hr as doRectsOverlap, Ir as CONFIGURABLE_NODE_SIZE, Jr as getNewNodePosition, Kt as useNDVStore, Lr as CONFIGURATION_NODE_SIZE, Mr as parseCanvasConnectionHandleString, Pt as useWorkflowHelpers, Rr as DEFAULT_NODE_SIZE, Rt as useTagsStore, Ur as generateOffsets, Vt as sanitizeConnections, Wi as CanvasNodeRenderType, Xi as pinDataToExecutionData, Xr as getNodesGroupSize, Yt as useWorkflowExecutionStateStore, _ as useNodeTypesStore, _t as useDataSchema, a as injectWorkflowDocumentStore, dn as useWorkflowsStore, g as require_uniq, h as serializeNode, in as getExecutionErrorToastConfiguration, jr as mapLegacyConnectionsToCanvasConnections, kr as mapCanvasConnectionToLegacyConnection, qt as disposeWorkflowExecutionStateStore, r as createWorkflowDocumentId, s as useWorkflowDocumentStore, st as useCredentialsStore, wn as useProjectsStore, z as removePreviewToken, zr as DEFAULT_VIEWPORT_BOUNDARIES, zt as ensureNodePosition } from "./workflowDocument.store-CUnvofeB.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-e_Vi8Kjn.js";
import { t as useSettingsStore } from "./settings.store-BzvY0ZlK.js";
import { f as useUIStore, g as usePostHog, p as useTelemetry } from "./users.store-ChwfO1rT.js";
import { O as tryToParseNumber, S as isPresent, o as getNewWorkflowData } from "./workflowsList.store-DkXPd7t_.js";
import { t as useExternalHooks } from "./useExternalHooks-DPz0452Z.js";
import { t as useBuilderStore } from "./builder.store-Bm2VwHy4.js";
import { _ as useCanvasStore, a as AddNodeGroupCommand, d as RemoveNodeCommand, f as RemoveNodeGroupCommand, h as UpdateNodeGroupCommand, i as AddNodeCommand, l as MoveNodeCommand, m as ReplaceNodeParametersCommand, n as useHistoryStore, p as RenameNodeCommand, r as AddConnectionCommand, t as useNodeHelpers, u as RemoveConnectionCommand } from "./useNodeHelpers-3rodwsta.js";
import { t as useTemplatesStore } from "./templates.store-7J22K-me.js";
import { t as useFocusPanelStore } from "./focusPanel.store-u2y8ESH4.js";
import { t as useExecutionsStore } from "./executions.store-IwFf09OL.js";
import { t as usePinnedData } from "./usePinnedData-CRd3cm1e.js";
import { n as useNodeCreatorStore, t as canvasEventBus } from "./canvas.eventBus-BMc4oG8r.js";
import { t as core_default } from "./core-BMbouP5r.js";
import { a as bash, i as javascript, n as typescript, r as python, t as xml } from "./xml-BVzDSG_x.js";
import { t as VueMarkdown } from "./VueMarkdown-HyGWMciE.js";
import { t as useSetupPanelStore } from "./setupPanel.store-sAaQ7E3R.js";
import { t as clearAllNodeResourceLocatorValues } from "./templateTransforms-e8Z1Il6Q.js";
//#region src/app/composables/canvasConnectionReplacement.utils.ts
var import_uniq = /* @__PURE__ */ __toESM(require_uniq(), 1);
function createInputConnectionHandle(type) {
	return createCanvasConnectionHandleString({
		type,
		index: 0,
		mode: CanvasConnectionMode.Input
	});
}
function createMainOutputConnectionHandle() {
	return createCanvasConnectionHandleString({
		type: NodeConnectionTypes.Main,
		index: 0,
		mode: CanvasConnectionMode.Output
	});
}
function getPrimaryConnectionForNewNode(node, lastInteractedWithNodeId, lastInteractedWithNodeHandle) {
	if (!lastInteractedWithNodeHandle) return {
		source: lastInteractedWithNodeId,
		sourceHandle: createMainOutputConnectionHandle(),
		target: node.id,
		targetHandle: createInputConnectionHandle(NodeConnectionTypes.Main)
	};
	const { type: connectionType, mode } = parseCanvasConnectionHandleString(lastInteractedWithNodeHandle);
	const nodeHandle = createInputConnectionHandle(connectionType);
	if (mode === CanvasConnectionMode.Input) return {
		source: node.id,
		sourceHandle: nodeHandle,
		target: lastInteractedWithNodeId,
		targetHandle: lastInteractedWithNodeHandle
	};
	return {
		source: lastInteractedWithNodeId,
		sourceHandle: lastInteractedWithNodeHandle,
		target: node.id,
		targetHandle: nodeHandle
	};
}
function getNodeConnectionReplacements({ previousNode, newNode, connectionPairs, getNodeByName, isConnectionAllowed }) {
	const connectionsToRemove = [];
	const connectionsToAdd = [];
	for (const pair of connectionPairs) {
		const sourceNode = getNodeByName(pair[0].node);
		const targetNode = getNodeByName(pair[1].node);
		if (!sourceNode || !targetNode) continue;
		connectionsToRemove.push(mapLegacyConnectionToCanvasConnection(sourceNode, targetNode, pair));
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
		connectionsToAdd.push(mapLegacyConnectionToCanvasConnection(newSourceNode, newTargetNode, [newSourceIConnection, newTargetIConnection]));
	}
	return {
		connectionsToRemove,
		connectionsToAdd
	};
}
function mapCanvasConnectionsToLegacyConnections(connections, workflowDocumentStore) {
	return getMappedCanvasConnections(connections, workflowDocumentStore)?.map(({ mappedConnection }) => mappedConnection);
}
function replaceCanvasConnection({ workflowDocumentStore, createConnection, deleteConnection, isConnectionAllowed, enforceNodeGroupConnectionPolicy, connectionToRemove, addBeforeRemoval, addAfterRemoval, trackHistory = false }) {
	const removal = getMappedCanvasConnection(connectionToRemove, workflowDocumentStore);
	if (!removal) return false;
	const additions = getMappedCanvasConnections([...addBeforeRemoval, ...addAfterRemoval], workflowDocumentStore);
	if (!additions) return false;
	if (!additions.every(({ sourceNode, targetNode, mappedConnection: [sourceConnection, targetConnection] }) => isConnectionAllowed(sourceNode, targetNode, sourceConnection, targetConnection))) return false;
	if (!enforceNodeGroupConnectionPolicy({
		nodeIds: (0, import_uniq.default)([
			removal.sourceNode.id,
			removal.targetNode.id,
			...additions.flatMap(({ sourceNode, targetNode }) => [sourceNode.id, targetNode.id])
		]),
		connectionsToRemove: [removal.mappedConnection],
		connectionsToAdd: additions.map(({ mappedConnection }) => mappedConnection),
		trackHistory
	})) return false;
	for (const connection of addBeforeRemoval) createConnection(connection, {
		trackHistory,
		validateNodeGroups: false
	});
	deleteConnection(connectionToRemove, {
		trackHistory,
		trackBulk: false,
		validateNodeGroups: false
	});
	for (const connection of addAfterRemoval) createConnection(connection, {
		trackHistory,
		validateNodeGroups: false
	});
	return true;
}
function getMappedCanvasConnection(connection, workflowDocumentStore) {
	const sourceNode = workflowDocumentStore.getNodeById(connection.source);
	const targetNode = workflowDocumentStore.getNodeById(connection.target);
	if (!sourceNode || !targetNode) return void 0;
	return {
		sourceNode,
		targetNode,
		mappedConnection: mapCanvasConnectionToLegacyConnection(sourceNode, targetNode, connection)
	};
}
function getMappedCanvasConnections(connections, workflowDocumentStore) {
	const mappedConnections = [];
	for (const connection of connections) {
		const mappedConnection = getMappedCanvasConnection(connection, workflowDocumentStore);
		if (!mappedConnection) return void 0;
		mappedConnections.push(mappedConnection);
	}
	return mappedConnections;
}
//#endregion
//#region src/app/composables/useWorkflowNormalization.ts
/**
* Node and connection normalization shared by every surface that hydrates a
* workflow document store from raw workflow data (editor workspace
* initialization, execution preview, ...).
*
* Reads from the node types and credentials stores but never writes global
* workflow state — safe to use against any document store instance.
*/
function useWorkflowNormalization() {
	const nodeTypesStore = useNodeTypesStore();
	const nodeHelpers = useNodeHelpers();
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
	function resolveNodeParameters(node, nodeTypeDescription) {
		node.parameters = getNodeParameters(nodeTypeDescription?.properties ?? [], node.parameters, true, false, node, nodeTypeDescription) ?? {};
	}
	function resolveNodeWebhook(node, nodeTypeDescription) {
		resolveNodeWebhookId(node, nodeTypeDescription);
		if ([
			"n8n-nodes-base.webhook",
			"n8n-nodes-base.formTrigger",
			"@n8n/n8n-nodes-langchain.mcpTrigger"
		].includes(node.type) && node.parameters.path === "") node.parameters.path = node.webhookId;
	}
	/**
	* Normalizes raw workflow data for rendering: drops nodes with a missing
	* type, coerces node positions, matches credentials, resolves parameters
	* and webhook ids for installed node types, and sanitizes connections
	* against the surviving node names.
	*/
	function normalizeWorkflowData(data) {
		const validNodes = data.nodes.filter((node) => !!node.type).map((node) => ({
			...node,
			position: ensureNodePosition(node.position)
		}));
		const validNodeNames = validNodes.map((node) => node.name);
		validNodes.forEach((node) => {
			const nodeTypeDescription = requireNodeTypeDescription(node.type, node.typeVersion);
			const isInstalledNode = nodeTypesStore.getIsNodeInstalled(node.type);
			nodeHelpers.matchCredentials(node);
			if (isInstalledNode) {
				resolveNodeParameters(node, nodeTypeDescription);
				resolveNodeWebhook(node, nodeTypeDescription);
			}
		});
		return {
			nodes: validNodes,
			connections: sanitizeConnections(data.connections, validNodeNames)
		};
	}
	return {
		requireNodeTypeDescription,
		resolveNodeParameters,
		resolveNodeWebhook,
		normalizeWorkflowData
	};
}
//#endregion
//#region src/app/composables/useUniqueNodeName.ts
function useUniqueNodeName() {
	const workflowDocumentStore = injectWorkflowDocumentStore();
	/**
	* All in-store node name defaults ending with a number, e.g.
	* `AWS S3`, `Magento 2`, `MSG91`, `S3`, `SIGNL4`, `sms77`
	*/
	function numberSuffixedNames() {
		return useNodeTypesStore().allNodeTypes.reduce((acc, nodeType) => {
			if (typeof nodeType.defaults.name !== "string") throw new Error("Expected node name default to be a string");
			if (/\d$/.test(nodeType.defaults.name)) acc.push(nodeType.defaults.name);
			return acc;
		}, []);
	}
	/**
	* Create a unique node name from an original name, based on the names of
	* all nodes on canvas and any extra names that cannot be used.
	*/
	function uniqueNodeName(originalName, extraNames = []) {
		if (!workflowDocumentStore.value.canvasNames.has(originalName) && !extraNames.includes(originalName)) return originalName;
		const nsn = numberSuffixedNames().find((nsn) => originalName.startsWith(nsn));
		if (nsn) {
			let unique = "";
			let index = 1;
			const remainder = originalName.split(nsn).pop();
			const lastChar = remainder?.[remainder.length - 1];
			if (lastChar && Number.isInteger(Number(lastChar))) {
				index = parseInt(lastChar, 10);
				originalName = originalName.slice(0, -1);
			}
			unique = originalName;
			while (workflowDocumentStore.value.canvasNames.has(unique) || extraNames.includes(unique)) unique = originalName + index++;
			return unique;
		}
		if (/^\d+-?\d*$/.test(originalName)) {
			let unique = "";
			let index = 1;
			const match = originalName.match(/(?<base>\d+)-?(?<suffix>\d*)/);
			if (!match?.groups) throw new Error("Failed to find match for unique name");
			if (match?.groups?.suffix !== "") index = parseInt(match.groups.suffix, 10);
			unique = match.groups.base;
			while (workflowDocumentStore.value.canvasNames.has(unique) || extraNames.includes(unique)) unique = match.groups.base + "-" + index++;
			return unique;
		}
		let unique = "";
		let index = 1;
		const match = originalName.match(/(?<base>.*\D+)(?<suffix>\d*)/);
		if (!match?.groups) throw new Error("Failed to find match for unique name");
		let { base, suffix } = match.groups;
		if (suffix !== "" && /\d\.$/.test(base)) {
			base += suffix;
			suffix = "";
		}
		if (suffix !== "") index = parseInt(suffix, 10);
		unique = base;
		while (workflowDocumentStore.value.canvasNames.has(unique) || extraNames.includes(unique)) unique = base + index++;
		return unique;
	}
	return { uniqueNodeName };
}
//#endregion
//#region ../@n8n/chat/src/utils/event-bus.ts
function createEventBus() {
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
//#endregion
//#region ../@n8n/chat/src/composables/useChat.ts
function useChat() {
	return inject(ChatSymbol);
}
//#endregion
//#region ../@n8n/chat/src/composables/useOptions.ts
function useOptions() {
	return { options: inject(ChatOptionsSymbol) };
}
//#endregion
//#region ../@n8n/chat/src/composables/useI18n.ts
function useI18n() {
	const { options } = useOptions();
	const language = options?.defaultLanguage ?? "en";
	function t(key) {
		const val = options?.i18n?.[language]?.[key];
		if (isRef(val)) return val.value;
		return val ?? key;
	}
	function te(key) {
		return !!options?.i18n?.[language]?.[key];
	}
	return {
		t,
		te
	};
}
//#endregion
//#region ../@n8n/chat/src/components/Button.vue
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
//#endregion
//#region ../@n8n/chat/src/components/MarkdownRenderer.vue?vue&type=script&setup=true&lang.ts
var import_markdown_it_link_attributes = /* @__PURE__ */ __toESM(require_markdown_it_link_attributes());
//#endregion
//#region ../@n8n/chat/src/components/MarkdownRenderer.vue
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
			return openBlock(), createBlock(unref(VueMarkdown), {
				class: "n8n-markdown chat-message-markdown",
				source: __props.text,
				options: markdownOptions,
				plugins: [linksNewTabPlugin]
			}, null, 8, ["source", "plugins"]);
		};
	}
});
//#endregion
//#region ../@n8n/chat/src/components/MessageWithButtons.vue?vue&type=script&setup=true&lang.ts
var MessageWithButtons_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MessageWithButtons",
	props: {
		text: {},
		buttons: {}
	},
	setup(__props) {
		const chatOptions = useOptions();
		const clickedButtonIndex = ref(null);
		const isButtonVisible = (link, index) => {
			try {
				const validOrigin = new URL(chatOptions.options.webhookUrl).origin;
				if (new URL(link, window.location.href).origin !== validOrigin) return false;
				return clickedButtonIndex.value === null || index === clickedButtonIndex.value;
			} catch {
				return false;
			}
		};
		const onClick = async (link, index) => {
			if (clickedButtonIndex.value !== null) return;
			if ((await fetch(link)).ok) clickedButtonIndex.value = index;
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(MarkdownRenderer_default, { text: __props.text }, null, 8, ["text"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.buttons) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.buttons, (button, index) => {
				return openBlock(), createElementBlock(Fragment, { key: button.text }, [isButtonVisible(button.link, index) ? (openBlock(), createBlock(Button_default, {
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
var MessageWithButtons_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MessageWithButtons_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MessageWithButtons_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/chat/src/constants/messageComponents.ts
var MessageComponentKey = { WITH_BUTTONS: "with-buttons" };
MessageComponentKey.WITH_BUTTONS;
var localStorageSessionIdKey = `n8n-chat/sessionId`;
//#endregion
//#region ../@n8n/chat/src/constants/symbols.ts
var ChatSymbol = "Chat";
var ChatOptionsSymbol = "ChatOptions";
//#endregion
//#region ../@n8n/chat/src/utils/utils.ts
var CHAT_NODE_MESSAGE_WITH_BUTTONS_TYPE = "with-buttons";
function constructChatWebsocketUrl(url, executionId, sessionId, isPublic, token) {
	const baseUrl = new URL(url).origin;
	const wsProtocol = baseUrl.startsWith("https") ? "wss" : "ws";
	let wsFullUrl = `${baseUrl.replace(/^https?/, wsProtocol)}/chat?sessionId=${sessionId}&executionId=${executionId}`;
	if (isPublic) wsFullUrl += "&isPublic=true";
	if (token) wsFullUrl += `&token=${token}`;
	return wsFullUrl;
}
function parseBotChatMessageContent(message) {
	const id = v4();
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
//#endregion
//#region ../@n8n/chat/src/event-buses/chatEventBus.ts
var chatEventBus = createEventBus();
//#endregion
//#region src/features/execution/logs/logs.constants.ts
var LOCAL_STORAGE_PANEL_HEIGHT = "N8N_CANVAS_CHAT_HEIGHT";
var LOCAL_STORAGE_PANEL_WIDTH = "N8N_CANVAS_CHAT_WIDTH";
var LOCAL_STORAGE_OVERVIEW_PANEL_WIDTH = "N8N_LOGS_OVERVIEW_PANEL_WIDTH";
var LOGS_PANEL_STATE = {
	CLOSED: "closed",
	ATTACHED: "attached",
	FLOATING: "floating"
};
var LOG_DETAILS_PANEL_STATE = {
	INPUT: "input",
	OUTPUT: "output",
	BOTH: "both"
};
//#endregion
//#region src/app/stores/logs.store.ts
var useLogsStore = defineStore("logs", () => {
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
		return v4().replace(/-/g, "");
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
//#endregion
//#region src/app/utils/aiUtils.ts
var fallbackParser = (execData) => ({
	type: "json",
	data: execData,
	parsed: false
});
function isMemoryMessage(message) {
	if (typeof message !== "object" || message === null || Array.isArray(message)) return false;
	if (!("lc" in message) || typeof message.lc !== "number") return false;
	if (!("type" in message) || typeof message.type !== "string") return false;
	if (!("id" in message) || !Array.isArray(message.id) || !message.id.every((item) => typeof item === "string")) return false;
	return true;
}
var outputTypeParsers = {
	[NodeConnectionTypes.AiLanguageModel](execData) {
		const response = execData.response ?? execData;
		if (!response) throw new Error("No response from Language Model");
		if (Array.isArray(response?.messages) && response?.messages.length === 1 && typeof response?.messages[0] === "string") return {
			type: "text",
			data: response.messages[0],
			parsed: true
		};
		if (response.messages && Array.isArray(response.messages)) return outputTypeParsers[NodeConnectionTypes.AiMemory](execData);
		if (response.generations) return {
			type: "json",
			data: response.generations.map((generation) => {
				if (generation?.text) return generation.text;
				if (Array.isArray(generation)) return generation.map((item) => item.text ?? item).join("\n\n").trim();
				return generation;
			}),
			parsed: true
		};
		return {
			type: "json",
			data: response,
			parsed: true
		};
	},
	[NodeConnectionTypes.AiTool]: fallbackParser,
	[NodeConnectionTypes.AiAgent]: fallbackParser,
	[NodeConnectionTypes.AiMemory](execData) {
		const chatHistory = execData.chatHistory ?? execData.messages ?? (execData?.response)?.chat_history;
		if (Array.isArray(chatHistory)) {
			const responseText = chatHistory.filter(isMemoryMessage).map((content) => {
				if (content.type === "constructor" && content.id.includes("messages") && content.kwargs) {
					let message = String(content.kwargs.content);
					if (Array.isArray(message)) message = message.map((item) => {
						const { type, image_url } = item;
						if (type === "image_url" && typeof image_url === "object" && typeof image_url.url === "string") return `![Input image](${image_url.url})`;
						else if (typeof image_url === "string") return `![Input image](${image_url})`;
						return item.text;
					}).join("\n");
					if (content.kwargs.additional_kwargs && Object.keys(content.kwargs.additional_kwargs).length) message += ` (${JSON.stringify(content.kwargs.additional_kwargs)})`;
					if (content.id.includes("HumanMessage")) message = `**Human:** ${String(message).trim()}`;
					else if (content.id.includes("AIMessage")) message = `**AI:** ${message}`;
					else if (content.id.includes("SystemMessage")) message = `**System Message:** ${message}`;
					return message;
				}
				return "";
			}).join("\n\n");
			if (responseText.length === 0) return fallbackParser(execData);
			return {
				type: "markdown",
				data: responseText,
				parsed: true
			};
		}
		return fallbackParser(execData);
	},
	[NodeConnectionTypes.AiOutputParser]: fallbackParser,
	[NodeConnectionTypes.AiRetriever]: fallbackParser,
	[NodeConnectionTypes.AiReranker]: fallbackParser,
	[NodeConnectionTypes.AiVectorStore](execData) {
		if (execData.documents) return {
			type: "json",
			data: execData.documents,
			parsed: true
		};
		return fallbackParser(execData);
	},
	[NodeConnectionTypes.AiEmbedding](execData) {
		if (execData.documents) return {
			type: "json",
			data: execData.documents,
			parsed: true
		};
		return fallbackParser(execData);
	},
	[NodeConnectionTypes.AiDocument](execData) {
		if (execData.documents) return {
			type: "json",
			data: execData.documents,
			parsed: true
		};
		return fallbackParser(execData);
	},
	[NodeConnectionTypes.AiTextSplitter](execData) {
		return {
			type: "text",
			data: (Array.isArray(execData.response) ? execData.response : [execData.textSplitter]).join("\n\n"),
			parsed: true
		};
	}
};
function parseAiContent(executionData, endpointType) {
	if ([NodeConnectionTypes.AiChain, NodeConnectionTypes.Main].includes(endpointType)) return executionData.map((data) => ({
		raw: data.json,
		parsedContent: null
	}));
	const contentJson = executionData.map((node) => {
		return !isObjectEmpty(node.binary) ? node.binary : node.json;
	});
	const parser = outputTypeParsers[endpointType];
	if (!parser) return [{
		raw: contentJson.filter((item) => item !== void 0),
		parsedContent: null
	}];
	return contentJson.filter((c) => c !== void 0).map((c) => ({
		raw: c,
		parsedContent: parser(c)
	}));
}
var emptyTokenUsageData = {
	completionTokens: 0,
	promptTokens: 0,
	totalTokens: 0,
	isEstimate: false
};
function addTokenUsageData(one, another) {
	return {
		completionTokens: one.completionTokens + another.completionTokens,
		promptTokens: one.promptTokens + another.promptTokens,
		totalTokens: one.totalTokens + another.totalTokens,
		isEstimate: one.isEstimate || another.isEstimate
	};
}
function formatTokenUsageCount(usage, field) {
	const count = field === "total" ? usage.totalTokens : field === "completion" ? usage.completionTokens : usage.promptTokens;
	return usage.isEstimate ? `~${count}` : count.toLocaleString();
}
function isChatNode(node) {
	return [CHAT_TRIGGER_NODE_TYPE, MANUAL_CHAT_TRIGGER_NODE_TYPE].includes(node.type);
}
//#endregion
//#region src/features/workflows/canvas/experimental/experimentalNdv.store.ts
var useExperimentalNdvStore = defineStore("experimentalNdv", () => {
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
	function collapseAllNodes(allNodes) {
		collapsedNodes.value = allNodes.reduce((acc, node) => {
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
//#endregion
//#region src/app/composables/useSelectionValidation.ts
function useSelectionValidation() {
	const nodeTypesStore = useNodeTypesStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	/**
	* Expands a selection of node ids to include all sub-nodes (memory, tools,
	* models, etc.) attached to any selected node via non-main connections.
	*
	* Sub-nodes connect to their parent as graph parents via `ai_*` edges, so we
	* walk `getParentNodes(name, 'ALL_NON_MAIN', -1)` for each selection member
	* and unify the results. Sub-sub-nodes are captured by the recursive walk.
	*/
	function expandSelectionWithSubNodes(nodeIds) {
		const store = workflowDocumentStore.value;
		if (!store) return [...nodeIds];
		const expanded = new Set(nodeIds);
		for (const id of nodeIds) {
			const node = store.getNodeById(id);
			if (!node) continue;
			for (const subNodeName of store.getParentNodes(node.name, "ALL_NON_MAIN", -1)) {
				const subNode = store.getNodeByName(subNodeName);
				if (subNode) expanded.add(subNode.id);
			}
		}
		return Array.from(expanded);
	}
	function isSelectionExtractable(nodeIds, connectionsBySourceNode) {
		return validateNodeSelectionForExtraction(getValidationInput(nodeIds, connectionsBySourceNode));
	}
	function isSelectionGroupable(nodeIds, connectionsBySourceNode, options = {}) {
		const store = workflowDocumentStore.value;
		const ignoredNodeGroupIds = new Set(options.ignoredNodeGroupIds ?? []);
		const existingNodeGroups = (store?.allGroups ?? []).filter((group) => !ignoredNodeGroupIds.has(group.id));
		return validateNodeSelectionForGrouping({
			...getValidationInput(nodeIds, connectionsBySourceNode),
			existingNodeGroups
		});
	}
	/**
	* Resolves a prospective group selection: drops ids that don't resolve to a
	* node, expands the rest with their attached sub-nodes, and validates the
	* result. Returns the expanded member ids when groupable, null otherwise.
	*
	* Group creation eligibility and execution must both go through this so the
	* checked selection and the created group can't diverge (e.g. stale ids
	* being validated away but still persisted as group members).
	*/
	function resolveGroupableNodeIds(nodeIds) {
		const store = workflowDocumentStore.value;
		const resolvedIds = nodeIds.filter((id) => store?.getNodeById(id));
		if (resolvedIds.length === 0) return null;
		const expandedIds = expandSelectionWithSubNodes(resolvedIds);
		return isSelectionGroupable(expandedIds).valid ? expandedIds : null;
	}
	function getValidationInput(nodeIds, connectionsBySourceNode) {
		const store = workflowDocumentStore.value;
		const expression = store?.getExpressionHandler();
		const workflow = expression ? { expression } : null;
		const input = {
			nodes: nodeIds.flatMap((id) => store?.getNodeById(id) ?? []),
			connectionsBySourceNode: connectionsBySourceNode ?? store?.connectionsBySourceNode ?? {},
			getNodeType: (node) => nodeTypesStore.getNodeType(node.type, node.typeVersion)
		};
		if (!workflow) return input;
		return {
			...input,
			getNodeInputs: (node, nodeType) => getNodeInputs(workflow, node, nodeType),
			getNodeOutputs: (node, nodeType) => getNodeOutputs(workflow, node, nodeType)
		};
	}
	return {
		isSelectionExtractable,
		isSelectionGroupable,
		expandSelectionWithSubNodes,
		resolveGroupableNodeIds
	};
}
//#endregion
//#region src/features/workflows/canvas/composables/useCanvasNodeGroupTelemetry.ts
/**
* Telemetry for canvas node groups: capturing how users
* group, ungroup, collapse and expand groups.
*/
function useCanvasNodeGroupTelemetry() {
	const telemetry = useTelemetry();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const rootStore = useRootStore();
	function buildProperties(group, source) {
		return {
			workflow_id: workflowDocumentStore.value.workflowId,
			group_id: group.id,
			node_ids: group.nodeIds,
			node_count: group.nodeIds.length,
			group_title: group.name,
			source,
			push_ref: rootStore.pushRef
		};
	}
	return {
		trackGrouped(group, source) {
			telemetry.track("User grouped nodes", buildProperties(group, source));
		},
		trackUngrouped(group, source) {
			telemetry.track("User ungrouped nodes", buildProperties(group, source));
		},
		trackCollapsed(group, source) {
			telemetry.track("User collapsed group", buildProperties(group, source));
		},
		trackExpanded(group, source) {
			telemetry.track("User expanded group", buildProperties(group, source));
		}
	};
}
//#endregion
//#region src/features/workflows/canvas/composables/useCanvasNodeGroupOperationGuards.ts
var import_cloneDeep = /* @__PURE__ */ __toESM(require_cloneDeep(), 1);
var BLOCKED_TITLE_KEY = {
	add: "canvas.nodeGroup.connectionAddBlocked.title",
	remove: "canvas.nodeGroup.connectionRemoveBlocked.title"
};
var MESSAGE_KEY_BY_ERROR_CODE = {
	"Multiple Input Nodes": "canvas.nodeGroup.connectionChangeBlocked.multipleInputNodes",
	"Input Edge To Non-Root Node": "canvas.nodeGroup.connectionChangeBlocked.inputEdgeToNonRoot",
	"Multiple Output Nodes": "canvas.nodeGroup.connectionChangeBlocked.multipleOutputNodes",
	"Output Edge From Non-Leaf Node": "canvas.nodeGroup.connectionChangeBlocked.outputEdgeFromNonLeaf",
	"No Continuous Path From Root To Leaf In Selection": "canvas.nodeGroup.connectionChangeBlocked.noContinuousPathFromRootToLeaf"
};
var FALLBACK_MESSAGE_KEY = "canvas.nodeGroup.connectionChangeBlocked.message";
function useCanvasNodeGroupOperationGuards() {
	const workflowsStore = useWorkflowsStore();
	const workflowDocumentStore = computed(() => useWorkflowDocumentStore(createWorkflowDocumentId(workflowsStore.workflowId)));
	const historyStore = useHistoryStore();
	const i18n = useI18n$1();
	const toast = useToast();
	const groupTelemetry = useCanvasNodeGroupTelemetry();
	const { isSelectionGroupable } = useSelectionValidation();
	function applyAddConnection(candidateConnections, connection) {
		const [sourceData, destinationData] = connection;
		candidateConnections[sourceData.node] = candidateConnections[sourceData.node] ?? {};
		const sourceNodeConnections = candidateConnections[sourceData.node];
		sourceNodeConnections[sourceData.type] = sourceNodeConnections[sourceData.type] ?? [];
		const outputConnections = sourceNodeConnections[sourceData.type];
		while (outputConnections.length <= sourceData.index) outputConnections.push([]);
		outputConnections[sourceData.index] = outputConnections[sourceData.index] ?? [];
		outputConnections[sourceData.index]?.push(destinationData);
	}
	function applyRemoveConnection(candidateConnections, connection) {
		const [sourceData, destinationData] = connection;
		const outputConnections = candidateConnections[sourceData.node]?.[sourceData.type];
		const targetConnections = outputConnections?.[sourceData.index];
		if (!outputConnections || !targetConnections) return;
		outputConnections[sourceData.index] = targetConnections.filter((connectionData) => connectionData.node !== destinationData.node || connectionData.type !== destinationData.type || connectionData.index !== destinationData.index);
	}
	function applyConnectionChangesToCandidate({ connectionsBySourceNode, connectionsToRemove = [], connectionsToAdd = [] }) {
		const candidateConnections = (0, import_cloneDeep.default)(connectionsBySourceNode);
		for (const connection of connectionsToRemove) applyRemoveConnection(candidateConnections, connection);
		for (const connection of connectionsToAdd) applyAddConnection(candidateConnections, connection);
		return candidateConnections;
	}
	function getAffectedNodeGroups(nodeIds) {
		const affectedGroups = /* @__PURE__ */ new Map();
		for (const nodeId of nodeIds) {
			const group = workflowDocumentStore.value.getGroupForNode(nodeId);
			if (group) affectedGroups.set(group.id, group);
		}
		return Array.from(affectedGroups.values());
	}
	function findInvalidGroup(affectedGroups, connectionsBySourceNode, getNodeIdsForGroup = (group) => group.nodeIds) {
		for (const group of affectedGroups) {
			const result = isSelectionGroupable(getNodeIdsForGroup(group), connectionsBySourceNode, { ignoredNodeGroupIds: [group.id] });
			if (!result.valid) return {
				group,
				result
			};
		}
	}
	function getConnectionChangeBlockedMessage(group, result) {
		const groupInterpolation = { group: group.name };
		if (result.reason === "non-main-boundary") return i18n.baseText("canvas.nodeGroup.connectionChangeBlocked.nonMainBoundary", { interpolate: {
			...groupInterpolation,
			source: result.connection.source,
			target: result.connection.target
		} });
		const key = (result.reason === "invalid-subgraph" && result.errors[0] ? MESSAGE_KEY_BY_ERROR_CODE[result.errors[0].errorCode] : void 0) ?? FALLBACK_MESSAGE_KEY;
		return i18n.baseText(key, { interpolate: groupInterpolation });
	}
	function getConnectionChangeBlockedMessageWithAction(group, result) {
		let notification;
		return {
			message: h("span", [
				getConnectionChangeBlockedMessage(group, result),
				" ",
				h("a", {
					href: "#",
					class: "primary-color",
					onClick: (event) => {
						event.preventDefault();
						event.stopPropagation();
						const snapshot = {
							...group,
							nodeIds: [...group.nodeIds]
						};
						workflowDocumentStore.value.deleteGroup(group.id);
						historyStore.pushCommandToUndo(new RemoveNodeGroupCommand(snapshot, Date.now()));
						groupTelemetry.trackUngrouped(group, "update-blocked-toast");
						notification?.close();
					}
				}, i18n.baseText("canvas.selection.toolbar.ungroup"))
			]),
			setNotification: (value) => {
				notification = value;
			}
		};
	}
	function showConnectionChangeBlockedToast(titleKey, invalidAffectedGroup) {
		const { message, setNotification } = getConnectionChangeBlockedMessageWithAction(invalidAffectedGroup.group, invalidAffectedGroup.result);
		setNotification(toast.showToast({
			title: i18n.baseText(titleKey),
			message,
			type: "error",
			duration: 5e3
		}));
	}
	function getAutoExtendCandidate({ failingGroup, endpointIds, connectionsBySourceNode }) {
		const memberSet = new Set(failingGroup.nodeIds);
		const offGroupEndpoints = endpointIds.filter((id) => !memberSet.has(id));
		if (offGroupEndpoints.length !== 1) return void 0;
		const [candidateId] = offGroupEndpoints;
		if (workflowDocumentStore.value.getGroupForNode(candidateId)) return void 0;
		if (!isSelectionGroupable([...failingGroup.nodeIds, candidateId], connectionsBySourceNode, { ignoredNodeGroupIds: [failingGroup.id] }).valid) return void 0;
		return candidateId;
	}
	function showAutoExtendedToast(group, candidateId) {
		const candidateName = workflowDocumentStore.value.getNodeById(candidateId)?.name ?? candidateId;
		toast.showToast({
			title: i18n.baseText("canvas.nodeGroup.autoExtended.title", { interpolate: { group: group.name } }),
			message: i18n.baseText("canvas.nodeGroup.autoExtended.message", { interpolate: {
				node: candidateName,
				group: group.name
			} }),
			type: "info",
			duration: 5e3
		});
	}
	function applyNodeGroupAutoExtend({ group, candidateId }) {
		workflowDocumentStore.value.addNodesToGroup(group.id, [candidateId]);
		showAutoExtendedToast(group, candidateId);
	}
	function isConnectionReplacementAllowedForNodeGroups({ nodeIds, connectionsToRemove, connectionsToAdd, connectionsBySourceNode, allowAutoExtend = true, blockedTitleKey = BLOCKED_TITLE_KEY.add }) {
		const affectedGroups = getAffectedNodeGroups(nodeIds);
		if (affectedGroups.length === 0) return { outcome: "proceed" };
		const candidateConnections = applyConnectionChangesToCandidate({
			connectionsBySourceNode,
			connectionsToRemove,
			connectionsToAdd
		});
		const invalidAffectedGroup = findInvalidGroup(affectedGroups, candidateConnections);
		if (!invalidAffectedGroup) return { outcome: "proceed" };
		if (allowAutoExtend) {
			const candidateId = getAutoExtendCandidate({
				failingGroup: invalidAffectedGroup.group,
				endpointIds: nodeIds,
				connectionsBySourceNode: candidateConnections
			});
			if (candidateId !== void 0) return {
				outcome: "auto-extend",
				autoExtend: {
					group: invalidAffectedGroup.group,
					candidateId
				}
			};
		}
		showConnectionChangeBlockedToast(blockedTitleKey, invalidAffectedGroup);
		return { outcome: "abort" };
	}
	function isConnectionRemovalAllowedForNodeGroups({ nodeIds, connection, connectionsBySourceNode }) {
		return isConnectionReplacementAllowedForNodeGroups({
			nodeIds,
			connectionsToRemove: [connection],
			connectionsToAdd: [],
			connectionsBySourceNode,
			allowAutoExtend: false,
			blockedTitleKey: BLOCKED_TITLE_KEY.remove
		}).outcome === "proceed";
	}
	function isNodeReplacementAllowedForNodeGroups({ previousNodeId, newNodeId, nodeIds, connectionsToRemove, connectionsToAdd, connectionsBySourceNode }) {
		const previousGroup = workflowDocumentStore.value.getGroupForNode(previousNodeId);
		if (!previousGroup) return true;
		const newNodeGroup = workflowDocumentStore.value.getGroupForNode(newNodeId);
		if (newNodeGroup && newNodeGroup.id !== previousGroup.id) {
			showConnectionChangeBlockedToast(BLOCKED_TITLE_KEY.add, {
				group: previousGroup,
				result: {
					valid: false,
					reason: "invalid-subgraph",
					errors: []
				}
			});
			return false;
		}
		const affectedGroups = getAffectedNodeGroups([
			...nodeIds,
			previousNodeId,
			newNodeId
		]);
		if (affectedGroups.length === 0) return true;
		const candidateConnections = applyConnectionChangesToCandidate({
			connectionsBySourceNode,
			connectionsToRemove,
			connectionsToAdd
		});
		const swappedPreviousGroupNodeIds = (0, import_uniq.default)(previousGroup.nodeIds.map((nodeId) => nodeId === previousNodeId ? newNodeId : nodeId));
		const getNodeIdsForGroup = (group) => group.id === previousGroup.id ? swappedPreviousGroupNodeIds : group.nodeIds;
		const invalidAffectedGroup = findInvalidGroup(affectedGroups, candidateConnections, getNodeIdsForGroup);
		if (!invalidAffectedGroup) return true;
		showConnectionChangeBlockedToast(BLOCKED_TITLE_KEY.add, invalidAffectedGroup);
		return false;
	}
	return {
		isConnectionRemovalAllowedForNodeGroups,
		isConnectionReplacementAllowedForNodeGroups,
		isNodeReplacementAllowedForNodeGroups,
		applyNodeGroupAutoExtend
	};
}
//#endregion
//#region src/app/composables/useCanvasOperations.ts
function useCanvasOperations() {
	const rootStore = useRootStore();
	const workflowsStore = useWorkflowsStore();
	const credentialsStore = useCredentialsStore();
	const historyStore = useHistoryStore();
	const uiStore = useUIStore();
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
	const setupPanelStore = useSetupPanelStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const ndvStore = computed(() => useNDVStore(workflowDocumentStore.value.documentId));
	const i18n = useI18n$1();
	const toast = useToast();
	const workflowHelpers = useWorkflowHelpers();
	const nodeHelpers = useNodeHelpers();
	const { requireNodeTypeDescription, resolveNodeParameters, resolveNodeWebhook, normalizeWorkflowData } = useWorkflowNormalization();
	const telemetry = useTelemetry();
	const externalHooks = useExternalHooks();
	const clipboard = useClipboard();
	const { uniqueNodeName } = useUniqueNodeName();
	const { isConnectionRemovalAllowedForNodeGroups, isConnectionReplacementAllowedForNodeGroups, isNodeReplacementAllowedForNodeGroups, applyNodeGroupAutoExtend } = useCanvasNodeGroupOperationGuards();
	const router = useRouter();
	const route = useRoute();
	const lastClickPosition = ref([0, 0]);
	const preventOpeningNDV = !!localStorage.getItem("NodeView.preventOpeningNDV");
	const editableWorkflowObject = computed(() => workflowDocumentStore.value ? workflowDocumentStore.value.getWorkflowObjectAccessorSnapshot() : void 0);
	const triggerNodes = computed(() => {
		return workflowDocumentStore.value.workflowTriggerNodes;
	});
	const lastInteractedWithNode = computed(() => uiStore.lastInteractedWithNodeId ? workflowDocumentStore.value.getNodeById(uiStore.lastInteractedWithNodeId) : null);
	/**
	* Node operations
	*/
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
		const node = workflowDocumentStore.value.getNodeById(id);
		if (!node) return;
		const oldPosition = [...node.position];
		const newPosition = [position.x, position.y];
		workflowDocumentStore.value.setNodePositionById(id, newPosition);
		if (trackHistory) historyStore.pushCommandToUndo(new MoveNodeCommand(node.name, oldPosition, newPosition, Date.now()));
	}
	function revertUpdateNodePosition(nodeName, position) {
		const node = workflowDocumentStore.value.getNodeByName(nodeName);
		if (!node) return;
		updateNodePosition(node.id, position);
	}
	function replaceNodeParameters(nodeId, currentParameters, newParameters, { trackHistory = false, trackBulk = true } = {}) {
		const node = workflowDocumentStore.value.getNodeById(nodeId);
		if (!node) return;
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		workflowDocumentStore.value.setNodeParameters({
			name: node.name,
			value: newParameters
		});
		if (trackHistory) historyStore.pushCommandToUndo(new ReplaceNodeParametersCommand(nodeId, currentParameters, newParameters, Date.now()));
		if (trackHistory && trackBulk) historyStore.stopRecordingUndo();
	}
	async function revertReplaceNodeParameters(nodeId, currentParameters, newParameters) {
		replaceNodeParameters(nodeId, newParameters, currentParameters);
	}
	/**
	* Rename a node and update all references (connections, expressions, pinData, etc.)
	* @returns The actual new name used (after uniquification) if rename succeeded, `false` if it failed or was skipped
	*/
	async function renameNode(currentName, newName, { trackHistory = false, trackBulk = true, showErrorToast = true } = {}) {
		if (currentName === newName) return false;
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		newName = uniqueNodeName(newName);
		const workflow = workflowDocumentStore.value.cloneWorkflowObject();
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
		useWorkflowExecutionStateStore(workflowDocumentStore.value.documentId).renameActiveExecutionNode({
			old: currentName,
			new: newName
		});
		workflowDocumentStore.value.setNodes(Object.values(workflow.nodes));
		workflowDocumentStore.value.setConnections(workflow.connectionsBySourceNode);
		if (ndvStore.value.activeNodeName === currentName) ndvStore.value.setActiveNodeName(newName, "other");
		if (trackHistory && trackBulk) historyStore.stopRecordingUndo();
		return newName;
	}
	async function revertRenameNode(currentName, previousName) {
		await renameNode(currentName, previousName);
	}
	function connectAdjacentNodes(id, { trackHistory = false, validateNodeGroups = true } = {}) {
		const node = workflowDocumentStore.value.getNodeById(id);
		if (!node) return;
		const outputConnectionsByType = workflowDocumentStore.value.outgoingConnectionsByNodeName(node.name);
		const incomingConnectionsByType = workflowDocumentStore.value.incomingConnectionsByNodeName(node.name);
		for (const [type, incomingConnectionsByInputIndex] of Object.entries(incomingConnectionsByType)) for (const incomingConnection of incomingConnectionsByInputIndex.at(0) ?? []) {
			const incomingNodeId = workflowDocumentStore.value.getNodeByName(incomingConnection.node)?.id;
			if (!incomingNodeId) continue;
			for (const outgoingConnection of outputConnectionsByType[type]?.at(0) ?? []) {
				const outgoingNodeId = workflowDocumentStore.value.getNodeByName(outgoingConnection.node)?.id;
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
				}, { validateNodeGroups });
			}
		}
	}
	function deleteNode(id, { trackHistory = false, trackBulk = true } = {}) {
		const node = workflowDocumentStore.value.getNodeById(id);
		if (!node) return;
		const wasTrigger = nodeTypesStore.isTriggerNode(node.type);
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		if (uiStore.lastInteractedWithNodeId === id) uiStore.lastInteractedWithNodeId = void 0;
		connectAdjacentNodes(id, {
			trackHistory,
			validateNodeGroups: false
		});
		deleteConnectionsByNodeId(id, {
			trackHistory,
			trackBulk: false
		});
		const groupBeforeDelete = trackHistory ? workflowDocumentStore.value.getGroupForNode(id) : void 0;
		const groupSnapshot = groupBeforeDelete ? {
			...groupBeforeDelete,
			nodeIds: [...groupBeforeDelete.nodeIds]
		} : void 0;
		useWorkflowExecutionStateStore(workflowDocumentStore.value.documentId).clearActiveNodeExecutionData(node.name);
		workflowDocumentStore.value.removeNodeById(id);
		if (groupSnapshot) {
			const groupAfterDelete = workflowDocumentStore.value.getGroupById(groupSnapshot.id);
			if (!groupAfterDelete) historyStore.pushCommandToUndo(new RemoveNodeGroupCommand(groupSnapshot, Date.now()));
			else historyStore.pushCommandToUndo(new UpdateNodeGroupCommand(groupSnapshot, {
				...groupAfterDelete,
				nodeIds: [...groupAfterDelete.nodeIds]
			}, Date.now()));
		}
		if (trackHistory) {
			historyStore.pushCommandToUndo(new RemoveNodeCommand(node, Date.now()));
			if (trackBulk) historyStore.stopRecordingUndo();
		}
		if (wasTrigger) nodeHelpers.updateNodesCredentialsIssues();
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
		workflowDocumentStore.value.addNode(node);
		uiStore.markStateDirty();
	}
	function trackDeleteNode(id) {
		const node = workflowDocumentStore.value.getNodeById(id);
		if (!node) return;
		if (node.type === "n8n-nodes-base.stickyNote") telemetry.track("User deleted workflow note", { workflow_id: workflowDocumentStore.value.workflowId });
		else {
			externalHooks.run("node.deleteNode", { node });
			telemetry.track("User deleted node", {
				node_type: node.type,
				workflow_id: workflowDocumentStore.value.workflowId
			});
		}
	}
	function getNodeConnectionPairs(previousNode, { replaceInputs = true, replaceOutputs = true } = {}) {
		const inputNodeNames = replaceInputs ? (0, import_uniq.default)(workflowDocumentStore.value.getParentNodes(previousNode.name, "ALL", 1)) : [];
		const outputNodeNames = replaceOutputs ? (0, import_uniq.default)(workflowDocumentStore.value.getChildNodes(previousNode.name, "ALL", 1)) : [];
		return [...workflowDocumentStore.value.getConnectionsBetweenNodes(inputNodeNames, [previousNode.name]) ?? [], ...workflowDocumentStore.value.getConnectionsBetweenNodes([previousNode.name], outputNodeNames) ?? []];
	}
	function replaceNodeConnections(previousId, newId, { trackHistory = false, trackBulk = true, replaceInputs = true, replaceOutputs = true, validateNodeGroups = true } = {}) {
		const previousNode = workflowDocumentStore.value.getNodeById(previousId);
		const newNode = workflowDocumentStore.value.getNodeById(newId);
		if (!previousNode || !newNode) return;
		const connectionPairs = getNodeConnectionPairs(previousNode, {
			replaceInputs,
			replaceOutputs
		});
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		for (const pair of connectionPairs) {
			const sourceNode = workflowDocumentStore.value.getNodeByName(pair[0].node);
			const targetNode = workflowDocumentStore.value.getNodeByName(pair[1].node);
			if (!sourceNode || !targetNode) continue;
			const oldCanvasConnection = mapLegacyConnectionToCanvasConnection(sourceNode, targetNode, pair);
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
			if (!isConnectionAllowed(newSourceNode, newTargetNode, newSourceIConnection, newTargetIConnection)) {
				deleteConnection(oldCanvasConnection, {
					trackHistory,
					trackBulk: false,
					validateNodeGroups
				});
				continue;
			}
			const newCanvasConnection = mapLegacyConnectionToCanvasConnection(newSourceNode, newTargetNode, [newSourceIConnection, newTargetIConnection]);
			let didReplace = false;
			if (validateNodeGroups) didReplace = replaceConnectionWithConnections({
				connectionToRemove: oldCanvasConnection,
				addBeforeRemoval: [],
				addAfterRemoval: [newCanvasConnection],
				trackHistory
			});
			else {
				deleteConnection(oldCanvasConnection, {
					trackHistory,
					trackBulk: false,
					validateNodeGroups: false
				});
				createConnection(newCanvasConnection, {
					trackHistory,
					validateNodeGroups: false
				});
				didReplace = true;
			}
			if (!didReplace) continue;
			revalidateNodeInputConnections(newCanvasConnection.target);
			revalidateNodeOutputConnections(newCanvasConnection.source);
		}
		if (trackHistory && trackBulk) historyStore.stopRecordingUndo();
	}
	function replaceGroupedNodeConnections(previousNode, newNode, { trackHistory = false } = {}) {
		const group = workflowDocumentStore.value.getGroupForNode(previousNode.id);
		if (!group) return false;
		const replacement = getNodeConnectionReplacements({
			previousNode,
			newNode,
			connectionPairs: getNodeConnectionPairs(previousNode),
			getNodeByName: workflowDocumentStore.value.getNodeByName,
			isConnectionAllowed
		});
		const connectionsToRemove = mapCanvasConnectionsToLegacyConnections(replacement.connectionsToRemove, workflowDocumentStore.value);
		const connectionsToAdd = mapCanvasConnectionsToLegacyConnections(replacement.connectionsToAdd, workflowDocumentStore.value);
		if (!connectionsToRemove || !connectionsToAdd) return false;
		const nodeIds = (0, import_uniq.default)([
			previousNode.id,
			newNode.id,
			...replacement.connectionsToRemove.flatMap(({ source, target }) => [source, target]),
			...replacement.connectionsToAdd.flatMap(({ source, target }) => [source, target])
		]);
		if (!isNodeReplacementAllowedForNodeGroups({
			previousNodeId: previousNode.id,
			newNodeId: newNode.id,
			nodeIds,
			connectionsToRemove,
			connectionsToAdd,
			connectionsBySourceNode: workflowDocumentStore.value.connectionsBySourceNode
		})) return false;
		const groupBeforeReplace = {
			...group,
			nodeIds: [...group.nodeIds]
		};
		workflowDocumentStore.value.replaceNodeInGroup(group.id, previousNode.id, newNode.id);
		if (trackHistory) {
			const groupAfterReplace = workflowDocumentStore.value.getGroupById(group.id);
			if (groupAfterReplace) historyStore.pushCommandToUndo(new UpdateNodeGroupCommand(groupBeforeReplace, {
				...groupAfterReplace,
				nodeIds: [...groupAfterReplace.nodeIds]
			}, Date.now()));
		}
		for (const connection of replacement.connectionsToRemove) deleteConnection(connection, {
			trackHistory,
			trackBulk: false,
			validateNodeGroups: false
		});
		for (const connection of replacement.connectionsToAdd) {
			createConnection(connection, {
				trackHistory,
				validateNodeGroups: false
			});
			revalidateNodeInputConnections(connection.target);
			revalidateNodeOutputConnections(connection.source);
		}
		return true;
	}
	function setNodeActive(id, source) {
		const node = workflowDocumentStore.value.getNodeById(id);
		if (!node) return;
		workflowDocumentStore.value.setNodePristine(node.name, false);
		setNodeActiveByName(node.name, source);
	}
	function setNodeActiveByName(name, source) {
		ndvStore.value.setActiveNodeName(name, source);
	}
	function clearNodeActive() {
		ndvStore.value.unsetActiveNodeName();
	}
	function setNodeParameters(id, parameters) {
		const node = workflowDocumentStore.value.getNodeById(id);
		if (!node) return;
		workflowDocumentStore.value.setNodeParameters({
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
		const node = workflowDocumentStore.value.getNodeById(id);
		if (!node) return;
		uiStore.lastInteractedWithNodeId = id;
		uiStore.lastSelectedNode = node.name;
	}
	function toggleNodesDisabled(ids, { trackHistory = true, trackBulk = true } = {}) {
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		const nodes = workflowDocumentStore.value.getNodesByIds(ids);
		nodeHelpers.disableNodes(nodes, {
			trackHistory,
			trackBulk: false
		});
		if (trackHistory && trackBulk) historyStore.stopRecordingUndo();
	}
	function revertToggleNodeDisabled(nodeName) {
		const node = workflowDocumentStore.value.getNodeByName(nodeName);
		if (node) nodeHelpers.disableNodes([node]);
	}
	function toggleNodesPinned(ids, source, { trackHistory = true, trackBulk = true } = {}) {
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		const pinnableNodesWithPinnedData = workflowDocumentStore.value.getNodesByIds(ids).map((node) => ({
			node,
			pinnedData: usePinnedData(node)
		})).filter(({ pinnedData }) => pinnedData.canPinNode(true));
		const nextStatePinned = pinnableNodesWithPinnedData.some(({ pinnedData }) => !pinnedData.hasData.value);
		for (const { node, pinnedData: pinnedDataForNode } of pinnableNodesWithPinnedData) if (nextStatePinned) {
			const dataToPin = useDataSchema().getInputDataWithPinned(node);
			if (dataToPin.length !== 0) pinnedDataForNode.setData(dataToPin, source);
		} else pinnedDataForNode.unsetData(source);
		if (trackHistory && trackBulk) historyStore.stopRecordingUndo();
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
			const { isAutoAdd, placeholder, openDetail: openNDV, actionName, positionOffset, ...node } = nodeAddData;
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
				if (nodeAddData.placeholder) newNode.placeholder = true;
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
		const inputNodes = workflowDocumentStore.value.getParentNodesByDepth(node.name, 1);
		if (inputNodes.length > 1) inputNodes.slice(1).forEach((inputNode, index) => {
			const nodeUi = workflowDocumentStore.value.getNodeByName(inputNode.name);
			if (!nodeUi) return;
			updateNodePosition(nodeUi.id, {
				x: nodeUi.position[0],
				y: nodeUi.position[1] + 100 * (index + 1)
			});
		});
	}
	/**
	* Check if maximum allowed number of this type of node has been reached
	*/
	function checkMaxNodesOfTypeReached(nodeTypeDescription) {
		if (nodeTypeDescription.maxNodes !== void 0 && workflowHelpers.getNodeTypeCount(nodeTypeDescription.name) >= nodeTypeDescription.maxNodes) throw new Error(i18n.baseText("nodeView.showMessage.showMaxNodeTypeError.message", {
			adjustToNumber: nodeTypeDescription.maxNodes,
			interpolate: { nodeTypeDataDisplayName: nodeTypeDescription.displayName }
		}));
	}
	function showMaxNodeTypeErrorToast(nodeTypeDescription) {
		toast.showMessage({
			type: "error",
			title: i18n.baseText("nodeView.showMessage.showMaxNodeTypeError.title"),
			message: i18n.baseText("nodeView.showMessage.showMaxNodeTypeError.message", {
				adjustToNumber: nodeTypeDescription.maxNodes,
				interpolate: { nodeTypeDataDisplayName: nodeTypeDescription.displayName }
			})
		});
	}
	function addNode(node, nodeTypeDescription, options = {}) {
		checkMaxNodesOfTypeReached(nodeTypeDescription);
		const nodeData = resolveNodeData(node, nodeTypeDescription, { viewport: options.viewport });
		if (!nodeData) throw new Error(i18n.baseText("nodeViewV2.showError.failedToCreateNode"));
		workflowDocumentStore.value.addNode(nodeData);
		if (options.trackHistory) historyStore.pushCommandToUndo(new AddNodeCommand(nodeData, Date.now()));
		if (!options.isAutoAdd) createConnectionToLastInteractedWithNode(nodeData, options);
		nextTick(() => {
			if (!options.keepPristine) uiStore.markStateDirty();
			workflowDocumentStore.value.setNodePristine(nodeData.name, true);
			nodeHelpers.matchCredentials(nodeData);
			nodeHelpers.updateNodeParameterIssues(nodeData);
			nodeHelpers.updateNodeCredentialIssues(nodeData);
			nodeHelpers.updateNodeInputIssues(nodeData);
			if (nodeTypesStore.isTriggerNode(nodeData.type)) nodeHelpers.updateNodesCredentialsIssues();
			const isStickyNode = nodeData.type === STICKY_NODE_TYPE;
			const nextView = isStickyNode || !options.openNDV || preventOpeningNDV ? void 0 : experimentalNdvStore.isNdvInFocusPanelEnabled && focusPanelStore.focusPanelActive && focusPanelStore.resolvedParameter === void 0 ? "focus_panel" : experimentalNdvStore.isZoomedViewEnabled ? "zoomed_view" : "ndv";
			if (options.telemetry) trackAddNode(nodeData, options, nextView);
			if (!isStickyNode) {
				externalHooks.run("nodeView.addNodeButton", { nodeTypeName: nodeData.type });
				if (nextView === "focus_panel") {} else if (nextView === "zoomed_view") experimentalNdvStore.setNodeNameToBeFocused(nodeData.name);
				else if (nextView === "ndv") ndvStore.value.setActiveNodeName(nodeData.name, "added_new_node");
			}
		});
		return nodeData;
	}
	async function revertAddNode(nodeName) {
		const node = workflowDocumentStore.value.getNodeByName(nodeName);
		if (!node) return;
		deleteNode(node.id);
	}
	function replaceConnectionWithConnections(replacement) {
		return replaceCanvasConnection({
			...replacement,
			workflowDocumentStore: workflowDocumentStore.value,
			createConnection,
			deleteConnection,
			isConnectionAllowed,
			enforceNodeGroupConnectionPolicy
		});
	}
	function createConnectionToLastInteractedWithNode(node, options = {}) {
		if (!lastInteractedWithNode.value) return;
		const isNewHitlToolNode = isHitlToolType(node.type);
		const lastInteractedWithNodeId = lastInteractedWithNode.value.id;
		const lastInteractedWithNodeConnection = uiStore.lastInteractedWithNodeConnection;
		const lastInteractedWithNodeHandle = uiStore.lastInteractedWithNodeHandle;
		if (isNewHitlToolNode && lastInteractedWithNodeConnection) {
			const { type: connectionType } = parseCanvasConnectionHandleString(lastInteractedWithNodeHandle);
			const nodeId = node.id;
			const nodeHandle = createInputConnectionHandle(connectionType);
			const connectionFromHitlToTarget = {
				target: lastInteractedWithNodeConnection.target,
				targetHandle: lastInteractedWithNodeConnection.targetHandle,
				source: nodeId,
				sourceHandle: nodeHandle
			};
			const connectionFromSourceToHitl = {
				source: lastInteractedWithNodeConnection.source,
				sourceHandle: lastInteractedWithNodeConnection.sourceHandle,
				target: nodeId,
				targetHandle: nodeHandle
			};
			replaceConnectionWithConnections({
				connectionToRemove: lastInteractedWithNodeConnection,
				addBeforeRemoval: [connectionFromHitlToTarget],
				addAfterRemoval: [connectionFromSourceToHitl],
				trackHistory: options.trackHistory
			});
			return;
		}
		const trackOptions = {
			trackHistory: options.trackHistory,
			trackBulk: false
		};
		const primaryConnection = getPrimaryConnectionForNewNode(node, lastInteractedWithNodeId, lastInteractedWithNodeHandle);
		if (lastInteractedWithNodeConnection) {
			if (workflowDocumentStore.value.getNodeById(lastInteractedWithNodeConnection.target)) {
				replaceConnectionWithConnections({
					connectionToRemove: lastInteractedWithNodeConnection,
					addBeforeRemoval: [primaryConnection],
					addAfterRemoval: [{
						source: node.id,
						sourceHandle: createInputConnectionHandle(NodeConnectionTypes.Main),
						target: lastInteractedWithNodeConnection.target,
						targetHandle: lastInteractedWithNodeConnection.targetHandle
					}],
					trackHistory: trackOptions.trackHistory
				});
				return;
			}
		}
		createConnection(primaryConnection, trackOptions);
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
		telemetry.track("User inserted workflow note", { workflow_id: workflowDocumentStore.value.workflowId });
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
			workflow_id: workflowDocumentStore.value.workflowId,
			drag_and_drop: options.dragAndDrop,
			input_node_type: lastInteractedWithNode.value?.type,
			resource,
			operation,
			action: options.actionName,
			next_view_shown: nextView
		});
	}
	/**
	* Resolves the data for a new node
	*/
	function resolveNodeData(node, nodeTypeDescription, options = {}) {
		const id = node.id ?? nodeHelpers.assignNodeId(node);
		const name = node.name ?? nodeHelpers.getDefaultNodeName(node) ?? nodeTypeDescription.defaults.name;
		const type = node.type ?? nodeTypeDescription.name;
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
			parameters,
			placeholder: node.placeholder
		};
		resolveNodeName(nodeData);
		if (nodeTypesStore.getIsNodeInstalled(nodeData.type)) {
			resolveNodeParameters(nodeData, nodeTypeDescription);
			resolveNodeWebhook(nodeData, nodeTypeDescription);
		}
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
	function resolveNodePosition(node, nodeTypeDescription, options = {}) {
		const lastInteractedWithNodeConnection = uiStore.lastInteractedWithNodeConnection;
		const lastInteractedWithNodeHandle = uiStore.lastInteractedWithNodeHandle;
		const { type: connectionType, index: connectionIndex } = parseCanvasConnectionHandleString(lastInteractedWithNodeHandle ?? lastInteractedWithNodeConnection?.sourceHandle ?? "");
		const nodeSize = connectionType === NodeConnectionTypes.Main ? DEFAULT_NODE_SIZE : CONFIGURATION_NODE_SIZE;
		const pushOffsets = [nodeSize[0] / 2, nodeSize[1] / 2];
		let position = node.position;
		if (position) return getNewNodePosition(workflowDocumentStore.value.allNodes, position, {
			offset: pushOffsets,
			size: nodeSize,
			viewport: options.viewport,
			normalize: false
		});
		if (lastInteractedWithNode.value) {
			const lastInteractedWithNodeTypeDescription = nodeTypesStore.getNodeType(lastInteractedWithNode.value.type, lastInteractedWithNode.value.typeVersion);
			const lastInteractedWithNodeObject = workflowDocumentStore.value.getNodeByName(lastInteractedWithNode.value.name);
			const newNodeInsertPosition = uiStore.lastCancelledConnectionPosition;
			if (newNodeInsertPosition) {
				const xOffset = connectionType === NodeConnectionTypes.Main ? 0 : -nodeSize[0] / 2;
				const yOffset = connectionType === NodeConnectionTypes.Main ? -nodeSize[1] / 2 : 0;
				position = [newNodeInsertPosition[0] + xOffset, newNodeInsertPosition[1] + yOffset];
				uiStore.lastCancelledConnectionPosition = void 0;
			} else if (lastInteractedWithNodeTypeDescription && lastInteractedWithNodeObject) {
				if (isHitlToolType(node.type) && lastInteractedWithNodeConnection && connectionType === NodeConnectionTypes.AiTool) {
					const toolUserNode = workflowDocumentStore.value.getNodeById(lastInteractedWithNodeConnection.target);
					if (toolUserNode) {
						const sourceY = toolUserNode.position[1];
						const targetY = lastInteractedWithNode.value.position[1];
						const yDiff = (targetY - sourceY) / 2;
						const middleY = sourceY + yDiff;
						position = [lastInteractedWithNode.value.position[0] - CONFIGURABLE_NODE_SIZE[0] / 2, middleY];
						if (Math.abs(middleY - targetY) < PUSH_NODES_OFFSET) {
							const verticalOffset = PUSH_NODES_OFFSET / 2;
							updateNodePosition(lastInteractedWithNode.value.id, {
								x: lastInteractedWithNode.value.position[0],
								y: lastInteractedWithNode.value.position[1] + (yDiff > 0 ? verticalOffset : -verticalOffset)
							}, { trackHistory: true });
						}
						return getNewNodePosition(workflowDocumentStore.value.allNodes, position, {
							offset: pushOffsets,
							size: nodeSize,
							viewport: options.viewport
						});
					}
				}
				const expression = workflowDocumentStore.value.getExpressionHandler();
				const lastInteractedWithNodeInputTypes = getConnectionTypes(expression ? getNodeInputs({ expression }, lastInteractedWithNodeObject, lastInteractedWithNodeTypeDescription) : []);
				const lastInteractedWithNodeScopedInputTypes = (lastInteractedWithNodeInputTypes || []).filter((input) => input !== NodeConnectionTypes.Main);
				const lastInteractedWithNodeMainOutputs = getConnectionTypes(expression ? getNodeOutputs({ expression }, lastInteractedWithNodeObject, lastInteractedWithNodeTypeDescription) : []).filter((output) => output === NodeConnectionTypes.Main);
				let yOffset = 0;
				if (lastInteractedWithNodeConnection) {
					let isNewNodeConfigurable = false;
					if (typeof nodeTypeDescription.inputs === "string") isNewNodeConfigurable = true;
					else if (Array.isArray(nodeTypeDescription.inputs)) isNewNodeConfigurable = getConnectionTypes(nodeTypeDescription.inputs).filter((input) => input !== NodeConnectionTypes.Main).length > 0;
					const newNodeSize = isNewNodeConfigurable ? CONFIGURABLE_NODE_SIZE : DEFAULT_NODE_SIZE;
					const shiftMargin = PUSH_NODES_OFFSET + (isNewNodeConfigurable ? CONFIGURABLE_NODE_SIZE[0] - DEFAULT_NODE_SIZE[0] : 0);
					shiftDownstreamNodesPosition(lastInteractedWithNode.value.name, shiftMargin, {
						trackHistory: true,
						nodeSize: newNodeSize
					});
				}
				if (lastInteractedWithNodeMainOutputs.length > 1) yOffset = generateOffsets(lastInteractedWithNodeMainOutputs.length, DEFAULT_NODE_SIZE[1], 16)[connectionIndex];
				let outputs = [];
				try {
					outputs = expression ? getNodeOutputs({ expression }, node, nodeTypeDescription) : [];
				} catch (e) {}
				const outputTypes = getConnectionTypes(outputs);
				const customOffset = {
					[NodeConnectionTypes.AiLanguageModel]: nodeSize[0] * 2,
					[NodeConnectionTypes.AiMemory]: nodeSize[0]
				}[connectionType] ?? 0;
				if (outputTypes.length > 0 && outputTypes.every((outputName) => outputName !== NodeConnectionTypes.Main)) {
					const scopedConnectionIndex = lastInteractedWithNodeScopedInputTypes.findIndex((inputType) => outputs[0] === inputType);
					const lastInteractedWithNodeWidthDivisions = Math.max(lastInteractedWithNodeScopedInputTypes.length + 1, 1);
					position = [lastInteractedWithNode.value.position[0] + CONFIGURABLE_NODE_SIZE[0] / lastInteractedWithNodeWidthDivisions * (scopedConnectionIndex + 1) - nodeSize[0] / 2 - customOffset, lastInteractedWithNode.value.position[1] + PUSH_NODES_OFFSET];
				} else {
					let pushOffset = PUSH_NODES_OFFSET;
					if (lastInteractedWithNodeInputTypes.find((input) => input !== NodeConnectionTypes.Main)) pushOffset += 140;
					position = [lastInteractedWithNode.value.position[0] + pushOffset, lastInteractedWithNode.value.position[1] + yOffset];
					if (lastInteractedWithNodeConnection) position = [position[0], lastInteractedWithNode.value.position[1]];
				}
			}
		}
		if (!position) if (nodeTypesStore.isTriggerNode(node.type) && triggerNodes.value.length === 0) position = [0, 0];
		else position = lastClickPosition.value;
		return getNewNodePosition(workflowDocumentStore.value.allNodes, position, {
			offset: pushOffsets,
			size: nodeSize,
			viewport: options.viewport
		});
	}
	function resolveNodeName(node) {
		node.name = uniqueNodeName(i18n.localizeNodeName(rootStore.defaultLocale, node.name, node.type));
	}
	/**
	* Gets the bounding rectangle of a node including its size
	*/
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
	/**
	* Check if there's enough space for a new node at the insertion position.
	* Uses a margin to account for nodes that are touching (edge-to-edge)
	* which should still be considered as blocking the insertion.
	*/
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
	/**
	* Determines which nodes and sticky notes need to be moved or stretched when inserting a new node.
	*
	* Algorithm:
	* 1. Find regular nodes that overlap with or are to the right of insertion area
	* 2. Add downstream connected nodes
	* 3. Classify sticky notes based on:
	*    - Whether they contain the source node (anchored = stretch only)
	*    - Whether they contain nodes that will move
	*    - Their position relative to insertion point
	*
	* @returns Classification of nodes and stickies with their associated nodes for stretching
	*/
	function getNodesToShift(insertPosition, sourceNodeName, nodeSize = DEFAULT_NODE_SIZE) {
		const allNodes = workflowDocumentStore.value.allNodes;
		const insertX = insertPosition[0];
		const insertY = insertPosition[1];
		const yTolerance = DEFAULT_NODE_SIZE[1] * 2;
		const getNodeCenter = (node) => ({
			x: node.position[0] + DEFAULT_NODE_SIZE[0] / 2,
			y: node.position[1] + DEFAULT_NODE_SIZE[1] / 2
		});
		const isSimilarY = (node) => Math.abs(node.position[1] - insertY) <= yTolerance;
		const overlapsInsertX = (node) => {
			return node.position[0] + DEFAULT_NODE_SIZE[0] > insertX || node.position[0] >= insertX;
		};
		/** Checks if a node is fully contained within a sticky note's bounds */
		const isNodeInsideSticky = (node, sticky, stickyRect) => {
			return node.position[0] >= sticky.position[0] && node.position[0] + DEFAULT_NODE_SIZE[0] <= sticky.position[0] + stickyRect.width && node.position[1] >= sticky.position[1] && node.position[1] + DEFAULT_NODE_SIZE[1] <= sticky.position[1] + stickyRect.height;
		};
		/** Checks if two centers are within threshold distance (used for node-sticky association) */
		const areCentersClose = (nodeCenter, stickyCenter, threshold) => {
			return Math.abs(nodeCenter.x - stickyCenter.x) <= threshold.x && Math.abs(nodeCenter.y - stickyCenter.y) <= threshold.y;
		};
		/** Determines if a node is associated with a sticky (inside it or centers are close) */
		const isNodeAssociatedWithSticky = (node, sticky, stickyRect, stickyCenter, threshold) => {
			return isNodeInsideSticky(node, sticky, stickyRect) || areCentersClose(getNodeCenter(node), stickyCenter, threshold);
		};
		/** Returns all nodes from the given list that are associated with the sticky */
		const getAssociatedNodes = (sticky, stickyRect, stickyCenter, threshold, nodesToCheck) => {
			return nodesToCheck.filter((node) => isNodeAssociatedWithSticky(node, sticky, stickyRect, stickyCenter, threshold));
		};
		const initialCandidates = allNodes.filter((node) => {
			if (node.type === "n8n-nodes-base.stickyNote") return false;
			if (node.name === sourceNodeName) return false;
			return isSimilarY(node) && overlapsInsertX(node);
		});
		const candidateNames = new Set(initialCandidates.map((node) => node.name));
		for (const candidate of initialCandidates) workflowDocumentStore.value.getConnectedNodes("downstream", candidate.name).filter((name) => {
			const node = workflowDocumentStore.value.getNodeByName(name);
			if (!node) return false;
			return overlapsInsertX(node);
		}).forEach((name) => candidateNames.add(name));
		const regularNodesToMove = allNodes.filter((node) => {
			if (node.type === "n8n-nodes-base.stickyNote") return false;
			return candidateNames.has(node.name);
		});
		const stickiesToStretch = [];
		const stickiesToMove = [];
		const stickiesToMoveAndStretch = [];
		const stickyAssociatedNodes = /* @__PURE__ */ new Map();
		const stickyNodes = allNodes.filter((node) => node.type === STICKY_NODE_TYPE);
		const affectedMinY = Math.min(insertY, ...regularNodesToMove.map((n) => n.position[1]));
		const affectedMaxY = Math.max(insertY + nodeSize[1], ...regularNodesToMove.map((n) => n.position[1] + DEFAULT_NODE_SIZE[1]));
		const sourceNode = workflowDocumentStore.value.getNodeByName(sourceNodeName);
		const nodeCenterThreshold = {
			x: nodeSize[0] / 2,
			y: nodeSize[1] / 2
		};
		for (const sticky of stickyNodes) {
			const stickyRect = getNodeRect(sticky);
			const stickyLeftEdge = sticky.position[0];
			const stickyRightEdge = stickyLeftEdge + stickyRect.width;
			const stickyTop = sticky.position[1];
			const overlapsVertically = !(stickyTop + stickyRect.height <= affectedMinY || stickyTop >= affectedMaxY);
			const isInsertionInsideSticky = insertX >= stickyLeftEdge && insertX <= stickyRightEdge;
			const stickyCenter = {
				x: sticky.position[0] + stickyRect.width / 2,
				y: sticky.position[1] + stickyRect.height / 2
			};
			if (sourceNode && isNodeAssociatedWithSticky(sourceNode, sticky, stickyRect, stickyCenter, nodeCenterThreshold) && isInsertionInsideSticky) {
				const associatedNodes = getAssociatedNodes(sticky, stickyRect, stickyCenter, nodeCenterThreshold, regularNodesToMove);
				stickyAssociatedNodes.set(sticky.id, associatedNodes);
				stickiesToStretch.push(sticky);
				continue;
			}
			const associatedNodes = getAssociatedNodes(sticky, stickyRect, stickyCenter, nodeCenterThreshold, regularNodesToMove);
			if (associatedNodes.length > 0) stickyAssociatedNodes.set(sticky.id, associatedNodes);
			const associatedWithMovedNode = associatedNodes.length > 0;
			if (!overlapsVertically) continue;
			if (associatedWithMovedNode) if (insertX + nodeSize[0] > stickyLeftEdge + 2 * PUSH_NODES_OFFSET / 3) stickiesToMoveAndStretch.push(sticky);
			else stickiesToMove.push(sticky);
			else if (isInsertionInsideSticky) stickiesToStretch.push(sticky);
			else if (stickyLeftEdge >= insertX) stickiesToMove.push(sticky);
		}
		return {
			nodesToMove: [
				...regularNodesToMove,
				...stickiesToMove,
				...stickiesToMoveAndStretch
			],
			stickiesToStretch,
			stickiesToMoveAndStretch,
			stickyAssociatedNodes
		};
	}
	/**
	* Stretches a sticky note horizontally to ensure it surrounds the inserted node
	* and all associated nodes with padding.
	*/
	function stretchStickyNote(sticky, insertPosition, nodeSize, associatedNodes, { trackHistory = false }) {
		const padding = 20;
		const stickyRect = getNodeRect(sticky);
		const currentLeft = sticky.position[0];
		const currentRight = currentLeft + stickyRect.width;
		let targetLeft = insertPosition[0] - padding;
		let targetRight = insertPosition[0] + nodeSize[0] + padding;
		for (const node of associatedNodes) {
			const updatedNode = workflowDocumentStore.value.getNodeById(node.id);
			if (!updatedNode) continue;
			const nodeLeft = updatedNode.position[0] - padding;
			const nodeRight = updatedNode.position[0] + DEFAULT_NODE_SIZE[0] + padding;
			targetLeft = Math.min(targetLeft, nodeLeft);
			targetRight = Math.max(targetRight, nodeRight);
		}
		const newLeft = Math.min(currentLeft, targetLeft);
		const newWidth = Math.max(currentRight, targetRight) - newLeft;
		const newParameters = {
			...sticky.parameters,
			width: newWidth
		};
		replaceNodeParameters(sticky.id, sticky.parameters, newParameters, {
			trackHistory,
			trackBulk: false
		});
		if (newLeft !== currentLeft) updateNodePosition(sticky.id, {
			x: newLeft,
			y: sticky.position[1]
		}, { trackHistory });
	}
	/**
	* Moves downstream nodes when inserting a node between existing nodes.
	* Only moves nodes if there isn't enough space for the new node.
	* Sticky notes that overlap the insertion area are stretched instead of moved.
	* Stickies at the insertion point are repositioned behind the new node.
	*/
	function shiftDownstreamNodesPosition(sourceNodeName, margin, { trackHistory = false, nodeSize = DEFAULT_NODE_SIZE }) {
		const sourceNode = workflowDocumentStore.value.getNodeByName(sourceNodeName);
		if (!sourceNode) return;
		const insertPosition = [sourceNode.position[0] + PUSH_NODES_OFFSET, sourceNode.position[1]];
		if (hasSpaceForInsertion(insertPosition, nodeSize, workflowDocumentStore.value.allNodes.filter((n) => n.name !== sourceNodeName && n.type !== "n8n-nodes-base.stickyNote"))) return;
		const { nodesToMove, stickiesToStretch, stickiesToMoveAndStretch, stickyAssociatedNodes } = getNodesToShift(insertPosition, sourceNodeName, nodeSize);
		for (const node of nodesToMove) updateNodePosition(node.id, {
			x: node.position[0] + margin,
			y: node.position[1]
		}, { trackHistory });
		for (const sticky of stickiesToMoveAndStretch) {
			const updatedSticky = workflowDocumentStore.value.getNodeById(sticky.id);
			if (!updatedSticky) continue;
			stretchStickyNote(updatedSticky, insertPosition, nodeSize, stickyAssociatedNodes.get(sticky.id) ?? [], { trackHistory });
		}
		for (const sticky of stickiesToStretch) stretchStickyNote(sticky, insertPosition, nodeSize, stickyAssociatedNodes.get(sticky.id) ?? [], { trackHistory });
	}
	/**
	* Connection operations
	*/
	function enforceNodeGroupConnectionPolicy(params) {
		const decision = isConnectionReplacementAllowedForNodeGroups({
			nodeIds: params.nodeIds,
			connectionsToRemove: params.connectionsToRemove ?? [],
			connectionsToAdd: params.connectionsToAdd ?? [],
			connectionsBySourceNode: workflowDocumentStore.value.connectionsBySourceNode
		});
		switch (decision.outcome) {
			case "abort": return false;
			case "auto-extend": {
				const { group } = decision.autoExtend;
				const groupBeforeExtend = {
					...group,
					nodeIds: [...group.nodeIds]
				};
				applyNodeGroupAutoExtend(decision.autoExtend);
				if (params.trackHistory) {
					const groupAfterExtend = workflowDocumentStore.value.getGroupById(group.id);
					if (groupAfterExtend) historyStore.pushCommandToUndo(new UpdateNodeGroupCommand(groupBeforeExtend, {
						...groupAfterExtend,
						nodeIds: [...groupAfterExtend.nodeIds]
					}, Date.now()));
				}
				return true;
			}
			case "proceed": return true;
		}
	}
	function createConnection(connection, { trackHistory = false, keepPristine = false, validateNodeGroups = true } = {}) {
		const sourceNode = workflowDocumentStore.value.getNodeById(connection.source);
		const targetNode = workflowDocumentStore.value.getNodeById(connection.target);
		if (!sourceNode || !targetNode) return;
		const mappedConnection = mapCanvasConnectionToLegacyConnection(sourceNode, targetNode, connection);
		if (!isConnectionAllowed(sourceNode, targetNode, mappedConnection[0], mappedConnection[1])) return;
		const ownsBulk = trackHistory && validateNodeGroups && historyStore.currentBulkAction === null;
		if (ownsBulk) historyStore.startRecordingUndo();
		if (validateNodeGroups && !enforceNodeGroupConnectionPolicy({
			nodeIds: [sourceNode.id, targetNode.id],
			connectionsToAdd: [mappedConnection],
			trackHistory
		})) {
			if (ownsBulk) historyStore.stopRecordingUndo();
			return;
		}
		if (trackHistory) historyStore.pushCommandToUndo(new AddConnectionCommand(mappedConnection, Date.now()));
		workflowDocumentStore.value.addConnection({ connection: mappedConnection });
		if (ownsBulk) historyStore.stopRecordingUndo();
		nextTick(() => {
			nodeHelpers.updateNodeInputIssues(sourceNode);
			nodeHelpers.updateNodeInputIssues(targetNode);
		});
		if (!keepPristine) uiStore.markStateDirty();
	}
	function revertCreateConnection(connection) {
		const sourceNodeName = connection[0].node;
		const sourceNode = workflowDocumentStore.value.getNodeByName(sourceNodeName);
		const targetNodeName = connection[1].node;
		const targetNode = workflowDocumentStore.value.getNodeByName(targetNodeName);
		if (!sourceNode || !targetNode) return;
		deleteConnection(mapLegacyConnectionToCanvasConnection(sourceNode, targetNode, connection), { validateNodeGroups: false });
	}
	function deleteConnectionsByNodeId(targetNodeId, { trackHistory = false, trackBulk = true } = {}) {
		const targetNode = workflowDocumentStore.value.getNodeById(targetNodeId);
		if (!targetNode) return;
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		const connections = (0, import_cloneDeep.default)(workflowDocumentStore.value.connectionsBySourceNode);
		for (const nodeName of Object.keys(connections)) {
			const node = workflowDocumentStore.value.getNodeByName(nodeName);
			if (!node) continue;
			for (const type of Object.keys(connections[nodeName])) for (const index of Object.keys(connections[nodeName][type])) {
				const connectionsToDelete = connections[nodeName][type][parseInt(index, 10)] ?? [];
				for (const connectionIndex of Object.keys(connectionsToDelete)) {
					const connectionData = connectionsToDelete[parseInt(connectionIndex, 10)];
					if (!connectionData) continue;
					const connectionDataNode = workflowDocumentStore.value.getNodeByName(connectionData.node);
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
						trackBulk: false,
						validateNodeGroups: false
					});
				}
			}
		}
		workflowDocumentStore.value.removeAllNodeConnection(targetNode);
		if (trackHistory && trackBulk) historyStore.stopRecordingUndo();
	}
	function deleteConnection(connection, { trackHistory = false, trackBulk = true, validateNodeGroups = true } = {}) {
		const sourceNode = workflowDocumentStore.value.getNodeById(connection.source);
		const targetNode = workflowDocumentStore.value.getNodeById(connection.target);
		if (!sourceNode || !targetNode) return;
		const mappedConnection = mapCanvasConnectionToLegacyConnection(sourceNode, targetNode, connection);
		if (validateNodeGroups && !isConnectionRemovalAllowedForNodeGroups({
			nodeIds: [sourceNode.id, targetNode.id],
			connection: mappedConnection,
			connectionsBySourceNode: workflowDocumentStore.value.connectionsBySourceNode
		})) return;
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		workflowDocumentStore.value.removeConnection({ connection: mappedConnection });
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
		const sourceNode = workflowDocumentStore.value.getNodeByName(connection[0].node);
		const targetNode = workflowDocumentStore.value.getNodeByName(connection[1].node);
		if (!sourceNode || !targetNode) return;
		createConnection(mapLegacyConnectionToCanvasConnection(sourceNode, targetNode, connection), { validateNodeGroups: false });
	}
	function revalidateNodeConnections(id, connectionMode) {
		const node = workflowDocumentStore.value.getNodeById(id);
		const isInput = connectionMode === CanvasConnectionMode.Input;
		if (!node) return;
		if (!nodeTypesStore.getNodeType(node.type, node.typeVersion)) return;
		mapLegacyConnectionsToCanvasConnections(workflowDocumentStore.value.connectionsBySourceNode, workflowDocumentStore.value.allNodes).forEach((connection) => {
			if (isInput ? connection.target === id : connection.source === id) {
				const otherNodeId = isInput ? connection.source : connection.target;
				const otherNode = workflowDocumentStore.value.getNodeById(otherNodeId);
				if (!otherNode || !connection.data) return;
				const [firstNode, secondNode] = isInput ? [otherNode, node] : [node, otherNode];
				if (!isConnectionAllowed(firstNode, secondNode, connection.data.source, connection.data.target)) nextTick(() => deleteConnection(connection, { validateNodeGroups: false }));
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
		const sourceWorkflowNode = workflowDocumentStore.value.getNodeByName(sourceNode.name);
		if (!sourceWorkflowNode) return false;
		let sourceNodeOutputs = [];
		if (sourceNodeType) sourceNodeOutputs = workflowDocumentStore.value ? getNodeOutputs({ expression: workflowDocumentStore.value.getExpressionHandler() }, sourceWorkflowNode, sourceNodeType) || [] : [];
		const sourceOutputsOfType = filterConnectionsByType(sourceNodeOutputs, sourceConnection.type);
		const sourceNodeHasOutputConnectionOfType = sourceOutputsOfType.length > 0;
		const sourceNodeHasOutputConnectionPortOfType = sourceConnection.index < sourceOutputsOfType.length;
		const sourceConnectionFilter = getConnectionFilter(sourceNodeHasOutputConnectionPortOfType ? sourceOutputsOfType[sourceConnection.index] : void 0);
		if ((!sourceNodeHasOutputConnectionOfType || !sourceNodeHasOutputConnectionPortOfType) && !isSourceNotInstalled) return false;
		const targetNodeType = getNodeType(targetNode);
		const targetWorkflowNode = workflowDocumentStore.value.getNodeByName(targetNode.name);
		if (!targetWorkflowNode) return false;
		let targetNodeInputs = [];
		if (targetNodeType) targetNodeInputs = workflowDocumentStore.value ? getNodeInputs({ expression: workflowDocumentStore.value.getExpressionHandler() }, targetWorkflowNode, targetNodeType) || [] : [];
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
	/**
	* Workspace operations
	*/
	function resetWorkspace(outgoingWorkflowId) {
		const workflowId = outgoingWorkflowId ?? workflowsStore.workflowId;
		nodeCreatorStore.setNodeCreatorState({
			workflowId,
			createNodeActive: false
		});
		const executionStateStore = useWorkflowExecutionStateStore(createWorkflowDocumentId(workflowId));
		if (executionStateStore.executionWaitingForWebhook) try {
			workflowsStore.removeTestWebhook(workflowId);
		} catch (error) {}
		executionStateStore.resetExecutionState();
		disposeWorkflowExecutionStateStore(executionStateStore);
		useBuilderStore().resetManualExecutionStats();
		workflowsStore.resetWorkflow(workflowId);
		uiStore.resetLastInteractedWith();
		uiStore.markStateClean();
		executionsStore.activeExecution = null;
		nodeHelpers.credentialsUpdated.value = false;
	}
	async function initializeWorkspace(data) {
		const { workflowDocumentStore: initializedDocumentStore } = await workflowHelpers.initState(data);
		const { nodes, connections } = normalizeWorkflowData(data);
		initializedDocumentStore.setNodes(nodes);
		initializedDocumentStore.setConnections(connections);
		return { workflowDocumentStore: initializedDocumentStore };
	}
	const initializeUnknownNodes = (nodes) => {
		nodes.forEach((node) => {
			const nodeTypeDescription = requireNodeTypeDescription(removePreviewToken(node.type), node.typeVersion);
			nodeHelpers.matchCredentials(node);
			resolveNodeParameters(node, nodeTypeDescription);
			resolveNodeWebhook(node, nodeTypeDescription);
			const existingNode = workflowDocumentStore.value.getNodeByName(node.name);
			if (existingNode) workflowDocumentStore.value.updateNodeById(existingNode.id, {
				...node,
				type: removePreviewToken(node.type)
			});
		});
	};
	/**
	* Import operations
	*/
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
	async function addImportedNodesToWorkflow(data, { trackHistory = false, viewport = DEFAULT_VIEWPORT_BOUNDARIES, setStateDirty = true, showMaxNodeTypeError = false } = {}) {
		const nodeNameTable = {};
		const newNodeNames = new Set((data.nodes ?? []).map((node) => node.name));
		if (!data.nodes) throw new Error(i18n.baseText("nodeView.noNodesGivenToAdd"));
		const nodeTypesCount = workflowHelpers.getNodeTypesMaxCount();
		let oldName;
		let newName;
		const createNodes = [];
		const skippedMaxNodeTypes = /* @__PURE__ */ new Map();
		await nodeHelpers.loadNodesProperties(data.nodes.map((node) => ({
			name: node.type,
			version: node.typeVersion
		})));
		data.nodes.forEach((node) => {
			if (nodeTypesCount[node.type] !== void 0) if (nodeTypesCount[node.type].exist >= nodeTypesCount[node.type].max) {
				nodeNameTable[node.name] = nodeTypesCount[node.type].nodeNames[0];
				if (showMaxNodeTypeError) {
					const nodeTypeDescription = nodeTypesStore.getNodeType(node.type, node.typeVersion);
					if (nodeTypeDescription) skippedMaxNodeTypes.set(node.type, nodeTypeDescription);
				}
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
		if (showMaxNodeTypeError) skippedMaxNodeTypes.forEach(showMaxNodeTypeErrorToast);
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
		const tempWorkflow = workflowDocumentStore.value.createWorkflowObject(createNodes, newConnections, true);
		for (const nodeName of Object.keys(tempWorkflow.nodes)) {
			const node = tempWorkflow.nodes[nodeName];
			if (!nodeTypesStore.getIsNodeInstalled(node.type)) node.parameters = createNodes.find((n) => n.name === nodeName)?.parameters ?? node.parameters;
		}
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
		if (setStateDirty) uiStore.markStateDirty();
		else uiStore.markStateClean();
		return {
			nodes: Object.values(tempWorkflow.nodes),
			connections: tempWorkflow.connectionsBySourceNode
		};
	}
	async function importWorkflowData(workflowData, source, { importTags = true, trackBulk = true, trackHistory = true, viewport, regenerateIds = true, trackEvents = true, setStateDirty = true } = {}) {
		uiStore.resetLastInteractedWith();
		if (!workflowData.hasOwnProperty("nodes") || !workflowData.hasOwnProperty("connections")) {
			toast.showError(new Error(i18n.baseText("nodeView.showError.importWorkflowData.invalidStructure")), i18n.baseText("nodeView.showError.importWorkflowData.title"));
			return {};
		}
		if (workflowData.nodes) {
			const invalidNodes = workflowData.nodes.filter((node) => !node.type);
			if (invalidNodes.length > 0) {
				toast.showError(new Error(i18n.baseText("nodeView.showError.importWorkflowData.invalidNodes", { interpolate: { count: String(invalidNodes.length) } })), i18n.baseText("nodeView.showError.importWorkflowData.title"));
				workflowData.nodes = workflowData.nodes.filter((node) => !!node.type);
			}
		}
		if (workflowData.nodes) workflowData.nodes = workflowData.nodes.map((node) => ({
			...node,
			position: ensureNodePosition(node.position)
		}));
		if (workflowData.connections) {
			const validNodeNames = workflowData.nodes?.map((node) => node.name);
			workflowData.connections = sanitizeConnections(workflowData.connections, validNodeNames);
		}
		const ownsImportBulk = trackBulk && trackHistory;
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
						const previousWebhookId = node.webhookId;
						const pathMatchedWebhookId = node.parameters.path === previousWebhookId;
						const optionsPathMatchedWebhookId = node.parameters.options?.path === previousWebhookId;
						nodeHelpers.assignWebhookId(node);
						if (pathMatchedWebhookId) node.parameters.path = node.webhookId;
						else if (optionsPathMatchedWebhookId) node.parameters.options.path = node.webhookId;
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
			if (regenerateIds && workflowData.nodeGroups?.length) {
				const oldToNewIdMap = new Map(Object.entries(nodeIdMap).map(([newId, previousId]) => [previousId, newId]));
				workflowData.nodeGroups = workflowData.nodeGroups.map((group) => ({
					...group,
					nodeIds: group.nodeIds.map((id) => oldToNewIdMap.get(id) ?? id)
				}));
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
						workflow_id: workflowDocumentStore.value.workflowId,
						node_graph_string: nodeGraph
					});
					else if (source === "duplicate") telemetry.track("User duplicated nodes", {
						workflow_id: workflowDocumentStore.value.workflowId,
						node_graph_string: nodeGraph
					});
					else telemetry.track("User imported workflow", {
						source,
						workflow_id: workflowDocumentStore.value.workflowId,
						node_graph_string: nodeGraph
					});
				}
			} catch {}
			workflowHelpers.updateNodePositions(workflowData, getNewNodePosition(workflowDocumentStore.value.allNodes, lastClickPosition.value, {
				...workflowData.nodes && workflowData.nodes.length > 1 ? { size: getNodesGroupSize(workflowData.nodes) } : {},
				viewport
			}));
			if (ownsImportBulk) historyStore.startRecordingUndo();
			const importResult = await addImportedNodesToWorkflow(workflowData, {
				trackHistory,
				viewport,
				setStateDirty,
				showMaxNodeTypeError: source === "paste" || source === "duplicate"
			});
			applyImportedNodeGroups(workflowData.nodeGroups, new Set(importResult.nodes?.map((node) => node.id).filter(isPresent) ?? []), {
				setStateDirty,
				trackHistory
			});
			if (ownsImportBulk) historyStore.stopRecordingUndo();
			if (importTags && settingsStore.areTagsEnabled && Array.isArray(workflowData.tags)) await importWorkflowTags(workflowData);
			if (workflowData.name) {
				workflowDocumentStore.value.setName(workflowData.name);
				if (setStateDirty) uiStore.markStateDirty("metadata");
			}
			return workflowData;
		} catch (error) {
			if (ownsImportBulk) historyStore.stopRecordingUndo();
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
		const results = await Promise.allSettled(notFound.map(async (tag) => await tagsStore.create(tag.name)));
		for (const result of results) if (result.status === "fulfilled") allTags.push(result.value);
		if (results.some((result) => result.status === "rejected")) toast.showToast({
			title: i18n.baseText("nodeView.showMessage.importWorkflowTags.title"),
			message: i18n.baseText("nodeView.showMessage.importWorkflowTags.message"),
			type: "warning"
		});
		const tagIds = workflowTags.reduce((accu, imported) => {
			const tag = allTags.find((t) => t.name === imported.name);
			if (tag) accu.push(tag.id);
			return accu;
		}, []);
		workflowDocumentStore.value.addTags(tagIds);
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
	function getNodeGroupsFullyContainedInSelection(nodeIds, groups) {
		return groups.filter((group) => group.nodeIds.length > 0 && group.nodeIds.every((nodeId) => nodeIds.has(nodeId))).map((group) => ({
			...group,
			nodeIds: [...group.nodeIds]
		}));
	}
	function applyImportedNodeGroups(nodeGroups, importedNodeIds, { setStateDirty = true, trackHistory = false } = {}) {
		if (!nodeGroups?.length || importedNodeIds.size === 0 || !workflowDocumentStore.value) return;
		const groupsToImport = getNodeGroupsFullyContainedInSelection(importedNodeIds, nodeGroups);
		const existingGroupNames = new Set(workflowDocumentStore.value.allGroups.map((group) => group.name));
		for (const group of groupsToImport) {
			const name = existingGroupNames.has(group.name) ? workflowDocumentStore.value.getNextDefaultName(group.name) : group.name;
			const createdGroup = workflowDocumentStore.value.createGroup(group.nodeIds, name, {
				markDirty: setStateDirty,
				startCollapsed: true
			});
			if (trackHistory) historyStore.pushCommandToUndo(new AddNodeGroupCommand(createdGroup, Date.now()));
			existingGroupNames.add(name);
		}
	}
	function getNodesToSave(nodes) {
		if (!workflowDocumentStore.value) throw new Error("Cannot serialize nodes: workflow document store is unavailable");
		const exportedPinData = {};
		const data = {
			nodes: [],
			connections: {},
			pinData: exportedPinData
		};
		const exportedNodeIds = new Set(nodes.map((node) => node.id));
		const exportedNodeNames = /* @__PURE__ */ new Set();
		for (const node of nodes) {
			const nodeSaveData = serializeNode(nodeTypesStore, node);
			const pinDataForNode = pinDataToExecutionData(workflowDocumentStore.value.pinnedDataByNodeName)[node.name];
			if (pinDataForNode) exportedPinData[node.name] = pinDataForNode;
			if (nodeSaveData.credentials && settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Sharing]) nodeSaveData.credentials = filterAllowedCredentials(nodeSaveData.credentials, workflowDocumentStore.value.usedCredentials);
			data.nodes.push(nodeSaveData);
			exportedNodeNames.add(node.name);
		}
		data.connections = getConnectionsForNodes(data.nodes, exportedNodeNames);
		const nodeGroups = getNodeGroupsFullyContainedInSelection(exportedNodeIds, workflowDocumentStore.value.allGroups);
		if (nodeGroups.length > 0) data.nodeGroups = nodeGroups;
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
			const outgoingConnections = workflowDocumentStore.value.outgoingConnectionsByNodeName(node.name);
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
		return (await importWorkflowData(deepCopy(getNodesToSave(workflowDocumentStore.value.getNodesByIds(ids))), "duplicate", {
			viewport: options.viewport,
			importTags: false
		})).nodes?.map((node) => node.id).filter(isPresent) ?? [];
	}
	async function copyNodes(ids) {
		const workflowData = deepCopy(getNodesToSave(workflowDocumentStore.value.getNodesByIds(ids)));
		workflowData.meta = {
			...workflowData.meta,
			...workflowDocumentStore.value.meta,
			instanceId: rootStore.instanceId
		};
		await clipboard.copy(JSON.stringify(workflowData, null, 2));
		telemetry.track("User copied nodes", {
			node_types: workflowData.nodes.map((node) => node.type),
			workflow_id: workflowDocumentStore.value.workflowId
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
		const { workflowDocumentStore: openedDocumentStore } = await initializeWorkspace(data.workflowData);
		useWorkflowExecutionStateStore(openedDocumentStore.documentId).setWorkflowExecutionData(data);
		if (!["manual", "evaluation"].includes(data.mode)) openedDocumentStore.setPinData({});
		if (nodeId) {
			const node = workflowDocumentStore.value.getNodeById(nodeId);
			if (node) ndvStore.value.setActiveNodeName(node.name, "other");
			else toast.showError(/* @__PURE__ */ new Error(`Node with id "${nodeId}" could not be found!`), i18n.baseText("nodeView.showError.openExecution.node"));
		}
		uiStore.markStateClean();
		return data;
	}
	function startChat(source) {
		if (!workflowDocumentStore.value.allNodes.some(isChatNode)) return;
		logsStore.toggleOpen(true);
		const payload = {
			workflow_id: workflowDocumentStore.value.workflowId,
			button_type: source
		};
		externalHooks.run("nodeView.onOpenChat", payload);
		telemetry.track("User clicked chat open button", payload);
		setTimeout(() => {
			chatEventBus.emit("focusInput");
		}, 0);
	}
	async function importTemplate({ name, workflow }) {
		let convertedNodes = workflow.nodes?.map(workflowsStore.convertTemplateNodeToNodeUi);
		if (setupPanelStore.isFeatureEnabled && convertedNodes) convertedNodes = clearAllNodeResourceLocatorValues(convertedNodes);
		if (workflow.connections) workflowDocumentStore.value.setConnections(workflow.connections);
		await addNodes(convertedNodes ?? [], { keepPristine: true });
		const workflowData = await getNewWorkflowData(rootStore.restApiContext, name, projectsStore.currentProjectId);
		workflowDocumentStore.value.setName(workflowData.name);
	}
	async function tryToOpenSubworkflowInNewTab(nodeId) {
		const node = workflowDocumentStore.value.getNodeById(nodeId);
		if (!node) return false;
		let subWorkflowId = getSubworkflowId(node);
		if (!subWorkflowId) return false;
		if (subWorkflowId.startsWith("=")) try {
			const resolved = await workflowHelpers.resolveExpression(subWorkflowId, {}, { contextNodeName: node.name });
			if (typeof resolved !== "string" || !resolved) return false;
			subWorkflowId = resolved;
		} catch {
			return false;
		}
		window.open(`${rootStore.baseUrl}workflow/${subWorkflowId}`, "_blank");
		return true;
	}
	function replaceNode(previousId, newId, { trackHistory = true, trackBulk = true } = {}) {
		const previousNode = workflowDocumentStore.value.getNodeById(previousId);
		const newNode = workflowDocumentStore.value.getNodeById(newId);
		if (!previousNode || !newNode) return;
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		const moveNewNodeToPreviousPosition = () => {
			const [x, y] = previousNode.position;
			updateNodePosition(newId, {
				x,
				y
			}, { trackHistory });
		};
		if (workflowDocumentStore.value.getGroupForNode(previousId)) {
			if (!replaceGroupedNodeConnections(previousNode, newNode, { trackHistory })) {
				if (trackHistory && trackBulk) historyStore.stopRecordingUndo();
				return;
			}
			moveNewNodeToPreviousPosition();
		} else {
			moveNewNodeToPreviousPosition();
			replaceNodeConnections(previousId, newId, {
				trackBulk: false,
				trackHistory
			});
		}
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
		const allNodes = workflowDocumentStore.value.allNodes;
		const offsetIndex = allNodes.length - nodes.length;
		await addConnections(addedConnections.map(({ from, to }) => {
			const fromNode = allNodes[offsetIndex + from.nodeIndex];
			const toNode = allNodes[offsetIndex + to.nodeIndex];
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
	function openSetupPanelIfEnabled() {
		if (setupPanelStore.isFeatureEnabled) {
			focusPanelStore.openFocusPanel();
			focusPanelStore.setSelectedTab("setup");
		}
	}
	async function openWorkflowTemplate(templateId) {
		resetWorkspace();
		canvasStore.startLoading();
		canvasStore.setLoadingText(i18n.baseText("nodeView.loadingTemplate"));
		useWorkflowExecutionStateStore(createWorkflowDocumentId(workflowsStore.workflowId)).clearCurrentWorkflowExecutions();
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
		if (typeof route.params.workflowId === "string") workflowsStore.setWorkflowId(route.params.workflowId);
		await importTemplate({
			name: data.name,
			workflow: data.workflow
		});
		workflowDocumentStore.value.addToMeta({ templateId: `${templateId}` });
		openSetupPanelIfEnabled();
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
		useWorkflowExecutionStateStore(createWorkflowDocumentId(workflowsStore.workflowId)).clearCurrentWorkflowExecutions();
		executionsStore.activeExecution = null;
		uiStore.isBlankRedirect = true;
		const templateId = workflow.meta.templateId;
		const parentFolderId = route.query.parentFolderId;
		await projectsStore.refreshCurrentProject();
		await router.replace({
			name: VIEWS.NEW_WORKFLOW,
			query: {
				templateId,
				parentFolderId,
				projectId: projectsStore.currentProjectId
			}
		});
		if (typeof route.params.workflowId === "string") workflowsStore.setWorkflowId(route.params.workflowId);
		await importTemplate({
			name: workflow.name,
			workflow
		});
		workflowDocumentStore.value.addToMeta({ templateId: `${templateId}` });
		openSetupPanelIfEnabled();
		canvasStore.stopLoading();
		fitView();
	}
	return {
		lastClickPosition,
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
//#endregion
export { useWorkflowNormalization as A, MessageComponentKey as C, useI18n as D, Button_default as E, useOptions as O, localStorageSessionIdKey as S, MarkdownRenderer_default as T, constructChatWebsocketUrl as _, addTokenUsageData as a, ChatOptionsSymbol as b, isChatNode as c, LOCAL_STORAGE_OVERVIEW_PANEL_WIDTH as d, LOCAL_STORAGE_PANEL_HEIGHT as f, chatEventBus as g, LOG_DETAILS_PANEL_STATE as h, useExperimentalNdvStore as i, useChat as k, parseAiContent as l, LOGS_PANEL_STATE as m, useCanvasNodeGroupTelemetry as n, emptyTokenUsageData as o, LOCAL_STORAGE_PANEL_WIDTH as p, useSelectionValidation as r, formatTokenUsageCount as s, useCanvasOperations as t, useLogsStore as u, parseBotChatMessageContent as v, MessageWithButtons_default as w, ChatSymbol as x, shouldBlockUserInput as y };
