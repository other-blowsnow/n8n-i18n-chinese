import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, It as ref, _t as watch } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n, j as useLocalStorage } from "./_MapCache-pT3vKw8Z.js";
import { r as require_get } from "./truncate-1c7Iwk7N.js";
import { Ar as RemoveConnectionCommand, Bo as useSettingsStore, Cc as STORES, Cr as useHistoryStore, Er as BulkCommand, J as displayForm, Or as EnableNodeToggleCommand, Qs as useRootStore, Sn as injectWorkflowState, Tn as useDocumentTitle, Tr as AddNodeCommand, gi as isEmpty, jr as RemoveNodeCommand, mn as useWorkflowHelpers, o as useWorkflowsStore, t as useTelemetry, wr as AddConnectionCommand, xc as defineStore, xn as useNodeHelpers, xr as CanvasNodeDirtiness } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import { N as IN_PROGRESS_EXECUTION_ID, Q as CHAT_TRIGGER_NODE_TYPE, ea as NodeConnectionTypes, fs as LOCAL_STORAGE_RUN_DATA_WORKER, hn as SINGLE_WEBHOOK_TRIGGERS, pi as generateNodesGraph, sr as createHeartbeatMessage } from "./constants-C_oOJnqT.js";
import { t as useExternalHooks } from "./useExternalHooks-CE2Rdzfk.js";
import { t as useWorkflowSaving } from "./useWorkflowSaving-eHdXvbOs.js";
import { t as retry } from "./retry-sDkwzrPY.js";
import { t as useExecutionsStore } from "./executions.store-a34D3haB.js";
import { t as useCanvasOperations } from "./useCanvasOperations-CA0dp-vn.js";
const useHeartbeat = (options) => {
	const { interval, onHeartbeat } = options;
	const heartbeatTimer = ref(null);
	const startHeartbeat = () => {
		heartbeatTimer.value = setInterval(onHeartbeat, interval);
	};
	const stopHeartbeat = () => {
		if (heartbeatTimer.value) {
			clearInterval(heartbeatTimer.value);
			heartbeatTimer.value = null;
		}
	};
	return {
		startHeartbeat,
		stopHeartbeat
	};
};
const useReconnectTimer = ({ onAttempt, onAttemptScheduled }) => {
	const initialReconnectDelay = 1e3;
	const maxReconnectDelay = 15e3;
	const reconnectTimer = ref(null);
	const reconnectAttempts = ref(0);
	const scheduleReconnect = () => {
		const delay = Math.min(initialReconnectDelay * 2 ** reconnectAttempts.value, maxReconnectDelay);
		reconnectAttempts.value++;
		onAttemptScheduled(delay);
		reconnectTimer.value = setTimeout(() => {
			onAttempt();
		}, delay);
	};
	const stopReconnectTimer = () => {
		if (reconnectTimer.value) {
			clearTimeout(reconnectTimer.value);
			reconnectTimer.value = null;
		}
	};
	const resetConnectionAttempts = () => {
		reconnectAttempts.value = 0;
	};
	return {
		scheduleReconnect,
		stopReconnectTimer,
		resetConnectionAttempts
	};
};
const useWebSocketClient = (options) => {
	const isConnected = ref(false);
	const socket = ref(null);
	const { startHeartbeat, stopHeartbeat } = useHeartbeat({
		interval: 3e4,
		onHeartbeat: () => {
			socket.value?.send(JSON.stringify(createHeartbeatMessage()));
		}
	});
	const onConnected = () => {
		socket.value?.removeEventListener("open", onConnected);
		isConnected.value = true;
		startHeartbeat();
		reconnectTimer.resetConnectionAttempts();
	};
	const onConnectionLost = (event) => {
		console.warn(`[WebSocketClient] Connection lost, code=${event.code ?? "unknown"}`);
		disconnect();
		reconnectTimer.scheduleReconnect();
	};
	const onMessage = (event) => {
		options.onMessage(event.data);
	};
	const onError = (error) => {
		console.warn("[WebSocketClient] Connection error:", error);
	};
	const disconnect = () => {
		if (socket.value) {
			stopHeartbeat();
			reconnectTimer.stopReconnectTimer();
			socket.value.removeEventListener("message", onMessage);
			socket.value.removeEventListener("error", onError);
			socket.value.removeEventListener("close", onConnectionLost);
			socket.value.close(1e3);
			socket.value = null;
		}
		isConnected.value = false;
	};
	const connect = () => {
		disconnect();
		socket.value = new WebSocket(options.url);
		socket.value.addEventListener("open", onConnected);
		socket.value.addEventListener("message", onMessage);
		socket.value.addEventListener("error", onError);
		socket.value.addEventListener("close", onConnectionLost);
		socket.value.binaryType = "arraybuffer";
	};
	const reconnectTimer = useReconnectTimer({
		onAttempt: connect,
		onAttemptScheduled: (delay) => {
			console.log(`[WebSocketClient] Attempting to reconnect in ${delay}ms`);
		}
	});
	const sendMessage = (serializedMessage) => {
		if (!isConnected.value || !socket.value) throw new Error("Not connected to the server");
		socket.value.send(serializedMessage);
	};
	return {
		isConnected,
		connect,
		disconnect,
		sendMessage
	};
};
const useEventSourceClient = (options) => {
	const isConnected = ref(false);
	const eventSource = ref(null);
	const onConnected = () => {
		isConnected.value = true;
		reconnectTimer.resetConnectionAttempts();
	};
	const onConnectionLost = () => {
		console.warn("[EventSourceClient] Connection lost");
		isConnected.value = false;
		reconnectTimer.scheduleReconnect();
	};
	const onMessage = (event) => {
		options.onMessage(event.data);
	};
	const disconnect = () => {
		if (eventSource.value) {
			reconnectTimer.stopReconnectTimer();
			eventSource.value.close();
			eventSource.value = null;
		}
		isConnected.value = false;
	};
	const connect = () => {
		disconnect();
		eventSource.value = new EventSource(options.url, { withCredentials: true });
		eventSource.value.addEventListener("open", onConnected);
		eventSource.value.addEventListener("message", onMessage);
		eventSource.value.addEventListener("close", onConnectionLost);
	};
	const reconnectTimer = useReconnectTimer({
		onAttempt: connect,
		onAttemptScheduled: (delay) => {
			console.log(`[EventSourceClient] Attempting to reconnect in ${delay}ms`);
		}
	});
	const sendMessage = (_) => {};
	return {
		isConnected,
		connect,
		disconnect,
		sendMessage
	};
};
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
var proxyMarker = Symbol("Comlink.proxy");
var createEndpoint = Symbol("Comlink.endpoint");
var releaseProxy = Symbol("Comlink.releaseProxy");
var finalizer = Symbol("Comlink.finalizer");
var throwMarker = Symbol("Comlink.thrown");
var isObject = (val) => typeof val === "object" && val !== null || typeof val === "function";
var transferHandlers = new Map([["proxy", {
	canHandle: (val) => isObject(val) && val[proxyMarker],
	serialize(obj) {
		const { port1, port2 } = new MessageChannel();
		expose(obj, port1);
		return [port2, [port2]];
	},
	deserialize(port) {
		port.start();
		return wrap(port);
	}
}], ["throw", {
	canHandle: (value) => isObject(value) && throwMarker in value,
	serialize({ value }) {
		let serialized;
		if (value instanceof Error) serialized = {
			isError: true,
			value: {
				message: value.message,
				name: value.name,
				stack: value.stack
			}
		};
		else serialized = {
			isError: false,
			value
		};
		return [serialized, []];
	},
	deserialize(serialized) {
		if (serialized.isError) throw Object.assign(new Error(serialized.value.message), serialized.value);
		throw serialized.value;
	}
}]]);
function isAllowedOrigin(allowedOrigins, origin) {
	for (const allowedOrigin of allowedOrigins) {
		if (origin === allowedOrigin || allowedOrigin === "*") return true;
		if (allowedOrigin instanceof RegExp && allowedOrigin.test(origin)) return true;
	}
	return false;
}
function expose(obj, ep = globalThis, allowedOrigins = ["*"]) {
	ep.addEventListener("message", function callback(ev) {
		if (!ev || !ev.data) return;
		if (!isAllowedOrigin(allowedOrigins, ev.origin)) {
			console.warn(`Invalid origin '${ev.origin}' for comlink proxy`);
			return;
		}
		const { id, type, path } = Object.assign({ path: [] }, ev.data);
		const argumentList = (ev.data.argumentList || []).map(fromWireValue);
		let returnValue;
		try {
			const parent = path.slice(0, -1).reduce((obj$1, prop) => obj$1[prop], obj);
			const rawValue = path.reduce((obj$1, prop) => obj$1[prop], obj);
			switch (type) {
				case "GET":
					returnValue = rawValue;
					break;
				case "SET":
					parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
					returnValue = true;
					break;
				case "APPLY":
					returnValue = rawValue.apply(parent, argumentList);
					break;
				case "CONSTRUCT":
					returnValue = proxy(new rawValue(...argumentList));
					break;
				case "ENDPOINT":
					{
						const { port1, port2 } = new MessageChannel();
						expose(obj, port2);
						returnValue = transfer(port1, [port1]);
					}
					break;
				case "RELEASE":
					returnValue = void 0;
					break;
				default: return;
			}
		} catch (value) {
			returnValue = {
				value,
				[throwMarker]: 0
			};
		}
		Promise.resolve(returnValue).catch((value) => {
			return {
				value,
				[throwMarker]: 0
			};
		}).then((returnValue$1) => {
			const [wireValue, transferables] = toWireValue(returnValue$1);
			ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
			if (type === "RELEASE") {
				ep.removeEventListener("message", callback);
				closeEndPoint(ep);
				if (finalizer in obj && typeof obj[finalizer] === "function") obj[finalizer]();
			}
		}).catch((error) => {
			const [wireValue, transferables] = toWireValue({
				value: /* @__PURE__ */ new TypeError("Unserializable return value"),
				[throwMarker]: 0
			});
			ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
		});
	});
	if (ep.start) ep.start();
}
function isMessagePort(endpoint) {
	return endpoint.constructor.name === "MessagePort";
}
function closeEndPoint(endpoint) {
	if (isMessagePort(endpoint)) endpoint.close();
}
function wrap(ep, target) {
	return createProxy(ep, [], target);
}
function throwIfProxyReleased(isReleased) {
	if (isReleased) throw new Error("Proxy has been released and is not useable");
}
function releaseEndpoint(ep) {
	return requestResponseMessage(ep, { type: "RELEASE" }).then(() => {
		closeEndPoint(ep);
	});
}
var proxyCounter = /* @__PURE__ */ new WeakMap();
var proxyFinalizers = "FinalizationRegistry" in globalThis && new FinalizationRegistry((ep) => {
	const newCount = (proxyCounter.get(ep) || 0) - 1;
	proxyCounter.set(ep, newCount);
	if (newCount === 0) releaseEndpoint(ep);
});
function registerProxy(proxy$1, ep) {
	const newCount = (proxyCounter.get(ep) || 0) + 1;
	proxyCounter.set(ep, newCount);
	if (proxyFinalizers) proxyFinalizers.register(proxy$1, ep, proxy$1);
}
function unregisterProxy(proxy$1) {
	if (proxyFinalizers) proxyFinalizers.unregister(proxy$1);
}
function createProxy(ep, path = [], target = function() {}) {
	let isProxyReleased = false;
	const proxy$1 = new Proxy(target, {
		get(_target, prop) {
			throwIfProxyReleased(isProxyReleased);
			if (prop === releaseProxy) return () => {
				unregisterProxy(proxy$1);
				releaseEndpoint(ep);
				isProxyReleased = true;
			};
			if (prop === "then") {
				if (path.length === 0) return { then: () => proxy$1 };
				const r = requestResponseMessage(ep, {
					type: "GET",
					path: path.map((p) => p.toString())
				}).then(fromWireValue);
				return r.then.bind(r);
			}
			return createProxy(ep, [...path, prop]);
		},
		set(_target, prop, rawValue) {
			throwIfProxyReleased(isProxyReleased);
			const [value, transferables] = toWireValue(rawValue);
			return requestResponseMessage(ep, {
				type: "SET",
				path: [...path, prop].map((p) => p.toString()),
				value
			}, transferables).then(fromWireValue);
		},
		apply(_target, _thisArg, rawArgumentList) {
			throwIfProxyReleased(isProxyReleased);
			const last = path[path.length - 1];
			if (last === createEndpoint) return requestResponseMessage(ep, { type: "ENDPOINT" }).then(fromWireValue);
			if (last === "bind") return createProxy(ep, path.slice(0, -1));
			const [argumentList, transferables] = processArguments(rawArgumentList);
			return requestResponseMessage(ep, {
				type: "APPLY",
				path: path.map((p) => p.toString()),
				argumentList
			}, transferables).then(fromWireValue);
		},
		construct(_target, rawArgumentList) {
			throwIfProxyReleased(isProxyReleased);
			const [argumentList, transferables] = processArguments(rawArgumentList);
			return requestResponseMessage(ep, {
				type: "CONSTRUCT",
				path: path.map((p) => p.toString()),
				argumentList
			}, transferables).then(fromWireValue);
		}
	});
	registerProxy(proxy$1, ep);
	return proxy$1;
}
function myFlat(arr) {
	return Array.prototype.concat.apply([], arr);
}
function processArguments(argumentList) {
	const processed = argumentList.map(toWireValue);
	return [processed.map((v) => v[0]), myFlat(processed.map((v) => v[1]))];
}
var transferCache = /* @__PURE__ */ new WeakMap();
function transfer(obj, transfers) {
	transferCache.set(obj, transfers);
	return obj;
}
function proxy(obj) {
	return Object.assign(obj, { [proxyMarker]: true });
}
function toWireValue(value) {
	for (const [name, handler] of transferHandlers) if (handler.canHandle(value)) {
		const [serializedValue, transferables] = handler.serialize(value);
		return [{
			type: "HANDLER",
			name,
			value: serializedValue
		}, transferables];
	}
	return [{
		type: "RAW",
		value
	}, transferCache.get(value) || []];
}
function fromWireValue(value) {
	switch (value.type) {
		case "HANDLER": return transferHandlers.get(value.name).deserialize(value.value);
		case "RAW": return value.value;
	}
}
function requestResponseMessage(ep, msg, transfers) {
	return new Promise((resolve) => {
		const id = generateUUID();
		ep.addEventListener("message", function l(ev) {
			if (!ev.data || !ev.data.id || ev.data.id !== id) return;
			ep.removeEventListener("message", l);
			resolve(ev.data);
		});
		if (ep.start) ep.start();
		ep.postMessage(Object.assign({ id }, msg), transfers);
	});
}
function generateUUID() {
	return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const runDataWorker = wrap(new Worker(new URL(
	/* @vite-ignore */
	"/%7B%7BBASE_PATH%7D%7D/assets/worker-CIvWfg3a.js",
	"" + import.meta.url
), { type: "module" }));
const usePushConnectionStore = defineStore(STORES.PUSH, () => {
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const isRunDataWorkerEnabled = useLocalStorage(LOCAL_STORAGE_RUN_DATA_WORKER, false);
	const outgoingQueue = ref([]);
	const isConnectionRequested = ref(false);
	const onMessageReceivedHandlers = ref([]);
	const addEventListener = (handler) => {
		onMessageReceivedHandlers.value.push(handler);
		return () => {
			const index = onMessageReceivedHandlers.value.indexOf(handler);
			if (index !== -1) onMessageReceivedHandlers.value.splice(index, 1);
		};
	};
	const useWebSockets = computed(() => settingsStore.pushBackend === "websocket");
	const getConnectionUrl = () => {
		const restUrl = rootStore.restUrl;
		const url$1 = `/push?pushRef=${rootStore.pushRef}`;
		if (useWebSockets.value) {
			const { protocol, host } = window.location;
			return `${restUrl.startsWith("http") ? restUrl.replace(/^http/, "ws") : `${protocol === "https:" ? "wss" : "ws"}://${host + restUrl}`}${url$1}`;
		} else return `${restUrl}${url$1}`;
	};
	async function onMessage(data) {
		if (data instanceof ArrayBuffer) if (isRunDataWorkerEnabled.value) {
			await runDataWorker.onNodeExecuteAfterData(data);
			return;
		} else data = new TextDecoder("utf-8").decode(new Uint8Array(data));
		let parsedData;
		try {
			parsedData = JSON.parse(data);
		} catch (error) {
			return;
		}
		onMessageReceivedHandlers.value.forEach((handler) => handler(parsedData));
	}
	const url = getConnectionUrl();
	const client = computed(() => useWebSockets.value ? useWebSocketClient({
		url,
		onMessage
	}) : useEventSourceClient({
		url,
		onMessage
	}));
	function serializeAndSend(message) {
		if (client.value.isConnected.value) client.value.sendMessage(JSON.stringify(message));
		else outgoingQueue.value.push(message);
	}
	const pushConnect = () => {
		isConnectionRequested.value = true;
		client.value.connect();
	};
	const pushDisconnect = () => {
		isConnectionRequested.value = false;
		client.value.disconnect();
	};
	watch(() => client.value.isConnected.value, (didConnect) => {
		if (!didConnect) return;
		if (outgoingQueue.value.length) {
			for (const message of outgoingQueue.value) serializeAndSend(message);
			outgoingQueue.value = [];
		}
	});
	const clearQueue = () => {
		outgoingQueue.value = [];
	};
	return {
		isConnected: computed(() => client.value.isConnected.value),
		isConnectionRequested,
		onMessageReceivedHandlers,
		addEventListener,
		pushConnect,
		pushDisconnect,
		send: serializeAndSend,
		clearQueue
	};
});
function shouldCommandMarkDirty(command, nodeName, siblingCommands, getIncomingConnections, getOutgoingConnectors) {
	if (command instanceof BulkCommand) return command.commands.some((cmd) => shouldCommandMarkDirty(cmd, nodeName, command.commands, getIncomingConnections, getOutgoingConnectors));
	if (command instanceof AddConnectionCommand) return command.connectionData[1]?.node === nodeName;
	if (command instanceof RemoveConnectionCommand) {
		const [from, to] = command.connectionData;
		if (to.node !== nodeName) return false;
		return siblingCommands.some((sibling) => sibling instanceof RemoveNodeCommand && sibling.node.name === from.node);
	}
	const incomingNodes = Object.values(getIncomingConnections(nodeName)).flat().flat().filter((connection) => connection !== null).map((connection) => connection.node);
	if (command instanceof AddNodeCommand) return incomingNodes.includes(command.node.name);
	if (command instanceof EnableNodeToggleCommand) return incomingNodes.includes(command.nodeName) && (command.newState || Object.keys(getOutgoingConnectors(command.nodeName)).some((type) => type !== NodeConnectionTypes.Main));
	return false;
}
function findLoop(nodeName, visited, getIncomingConnections) {
	const index = visited.indexOf(nodeName);
	if (index >= 0) return visited.slice(index);
	const newVisited = [...visited, nodeName];
	for (const [type, typeConnections] of Object.entries(getIncomingConnections(nodeName))) {
		if (type !== NodeConnectionTypes.Main) continue;
		for (const connections of typeConnections) for (const { node } of connections ?? []) {
			const loop = findLoop(node, newVisited, getIncomingConnections);
			if (loop) return loop;
		}
	}
}
function useNodeDirtiness() {
	const historyStore = useHistoryStore();
	const workflowsStore = useWorkflowsStore();
	function getParentSubNodes(nodeName) {
		return Object.entries(workflowsStore.incomingConnectionsByNodeName(nodeName)).filter(([type]) => type !== NodeConnectionTypes.Main).flatMap(([, typeConnections]) => typeConnections.flat().filter((conn) => conn !== null));
	}
	function getDirtinessByParametersUpdate(nodeName, after) {
		if ((workflowsStore.getParametersLastUpdate(nodeName) ?? 0) > after) return CanvasNodeDirtiness.PARAMETERS_UPDATED;
		for (const connection of getParentSubNodes(nodeName)) if (getDirtinessByParametersUpdate(connection.node, after) !== void 0) return CanvasNodeDirtiness.UPSTREAM_DIRTY;
	}
	function getDirtinessByConnectionsUpdate(nodeName, after) {
		for (let i = historyStore.undoStack.length - 1; i >= 0; i--) {
			const command = historyStore.undoStack[i];
			if (command.getTimestamp() < after) break;
			if (shouldCommandMarkDirty(command, nodeName, [], workflowsStore.incomingConnectionsByNodeName, workflowsStore.outgoingConnectionsByNodeName)) return CanvasNodeDirtiness.INCOMING_CONNECTIONS_UPDATED;
		}
		for (const connection of getParentSubNodes(nodeName)) if (getDirtinessByConnectionsUpdate(connection.node, after) !== void 0) return CanvasNodeDirtiness.UPSTREAM_DIRTY;
	}
	const depthByName = computed(() => {
		const depth = {};
		function setDepthRecursively(nodeName, current, visited) {
			if (visited.has(nodeName)) return;
			const myVisited = new Set(visited);
			myVisited.add(nodeName);
			for (const [type, typeConnections] of Object.entries(workflowsStore.outgoingConnectionsByNodeName(nodeName))) {
				if (type !== NodeConnectionTypes.Main) continue;
				for (const connections of typeConnections) for (const { node } of connections ?? []) {
					if (!depth[node] || depth[node] > current) depth[node] = current;
					setDepthRecursively(node, current + 1, myVisited);
				}
			}
		}
		for (const startNode of workflowsStore.allNodes) {
			if (Object.keys(workflowsStore.incomingConnectionsByNodeName(startNode.name)).length > 0) continue;
			depth[startNode.name] = 0;
			setDepthRecursively(startNode.name, 1, /* @__PURE__ */ new Set());
		}
		return depth;
	});
	return { dirtinessByName: computed(() => {
		const dirtiness = {};
		const runDataByNode = workflowsStore.getWorkflowRunData ?? {};
		function setDirtiness(nodeName, value) {
			dirtiness[nodeName] = dirtiness[nodeName] ?? value;
			const loop = findLoop(nodeName, [], workflowsStore.incomingConnectionsByNodeName);
			if (!loop) return;
			const loopEntryNodeName = [...loop].sort((a, b) => (depthByName.value[a] ?? Number.MAX_SAFE_INTEGER) - (depthByName.value[b] ?? Number.MAX_SAFE_INTEGER))?.[0];
			if (loopEntryNodeName && depthByName.value[loopEntryNodeName]) dirtiness[loopEntryNodeName] = dirtiness[loopEntryNodeName] ?? CanvasNodeDirtiness.UPSTREAM_DIRTY;
		}
		for (const [nodeName, runData] of Object.entries(runDataByNode)) {
			const runAt = runData[0]?.startTime ?? 0;
			if (!runAt) continue;
			const parameterUpdate = getDirtinessByParametersUpdate(nodeName, runAt);
			if (parameterUpdate) {
				setDirtiness(nodeName, parameterUpdate);
				continue;
			}
			const connectionUpdate = getDirtinessByConnectionsUpdate(nodeName, runAt);
			if (connectionUpdate) {
				setDirtiness(nodeName, connectionUpdate);
				continue;
			}
			if (Object.values(workflowsStore.incomingConnectionsByNodeName(nodeName)).flat().flat().filter((connection) => connection !== null).some((connection) => {
				return (workflowsStore.getPinnedDataLastUpdate(connection.node) ?? 0) > runAt;
			})) {
				setDirtiness(nodeName, CanvasNodeDirtiness.PINNED_DATA_UPDATED);
				continue;
			}
			if ((workflowsStore.getPinnedDataLastRemovedAt(nodeName) ?? 0) > runAt) {
				setDirtiness(nodeName, CanvasNodeDirtiness.PINNED_DATA_UPDATED);
				continue;
			}
		}
		return dirtiness;
	}) };
}
var LOCAL_STORAGE_AGENT_REQUESTS = "N8N_AGENT_REQUESTS";
const useAgentRequestStore = defineStore("agentRequest", () => {
	const agentRequests = useLocalStorage(LOCAL_STORAGE_AGENT_REQUESTS, {});
	const ensureWorkflowAndNodeExist = (workflowId, nodeId) => {
		if (!agentRequests.value[workflowId]) agentRequests.value[workflowId] = {};
		if (!agentRequests.value[workflowId][nodeId]) agentRequests.value[workflowId][nodeId] = { query: {} };
	};
	const getAgentRequests = (workflowId, nodeId) => {
		return agentRequests.value[workflowId]?.[nodeId]?.query || {};
	};
	const getQueryValue = (workflowId, nodeId, paramName) => {
		const query = agentRequests.value[workflowId]?.[nodeId]?.query;
		if (typeof query === "string") return;
		return query?.[paramName];
	};
	const setAgentRequestForNode = (workflowId, nodeId, request) => {
		ensureWorkflowAndNodeExist(workflowId, nodeId);
		agentRequests.value[workflowId][nodeId] = {
			...request,
			query: typeof request.query === "string" ? request.query : { ...request.query }
		};
	};
	const clearAgentRequests = (workflowId, nodeId) => {
		if (agentRequests.value[workflowId]) agentRequests.value[workflowId][nodeId] = { query: {} };
	};
	const clearAllAgentRequests = (workflowId) => {
		if (workflowId) agentRequests.value[workflowId] = {};
		else agentRequests.value = {};
	};
	const getAgentRequest = (workflowId, nodeId) => {
		if (agentRequests.value[workflowId]) return agentRequests.value[workflowId]?.[nodeId];
	};
	return {
		agentRequests,
		getAgentRequests,
		getQueryValue,
		setAgentRequestForNode,
		clearAgentRequests,
		clearAllAgentRequests,
		getAgentRequest
	};
});
var import_get = /* @__PURE__ */ __toESM(require_get());
function useRunWorkflow(useRunWorkflowOpts) {
	const workflowHelpers = useWorkflowHelpers();
	const i18n = useI18n();
	const toast = useToast();
	const telemetry = useTelemetry();
	const externalHooks = useExternalHooks();
	const settingsStore = useSettingsStore();
	const agentRequestStore = useAgentRequestStore();
	const rootStore = useRootStore();
	const pushConnectionStore = usePushConnectionStore();
	const workflowsStore = useWorkflowsStore();
	const workflowState = useRunWorkflowOpts.workflowState ?? injectWorkflowState();
	const nodeHelpers = useNodeHelpers({ workflowState });
	const workflowSaving = useWorkflowSaving({
		router: useRunWorkflowOpts.router,
		workflowState
	});
	const executionsStore = useExecutionsStore();
	const { dirtinessByName } = useNodeDirtiness();
	const { startChat } = useCanvasOperations();
	const workflowObject = computed(() => workflowsStore.workflowObject);
	function sortNodesByYPosition(nodes) {
		return [...nodes].sort((a, b) => {
			const nodeA = workflowsStore.getNodeByName(a)?.position ?? [0, 0];
			const nodeB = workflowsStore.getNodeByName(b)?.position ?? [0, 0];
			const nodeAYPosition = nodeA[1];
			const nodeBYPosition = nodeB[1];
			if (nodeAYPosition === nodeBYPosition) return 0;
			return nodeAYPosition > nodeBYPosition ? 1 : -1;
		});
	}
	async function runWorkflowApi(runData) {
		if (!pushConnectionStore.isConnected) throw new Error(i18n.baseText("workflowRun.noActiveConnectionToTheServer"));
		workflowsStore.subWorkflowExecutionError = null;
		workflowState.setActiveExecutionId(null);
		let response;
		try {
			response = await workflowsStore.runWorkflow(runData);
		} catch (error) {
			workflowState.setActiveExecutionId(void 0);
			throw error;
		}
		const workflowExecutionIdIsNew = workflowsStore.previousExecutionId !== response.executionId;
		const workflowExecutionIdIsPending = workflowsStore.activeExecutionId === null;
		if (response.executionId && workflowExecutionIdIsNew && workflowExecutionIdIsPending) workflowState.setActiveExecutionId(response.executionId);
		if (response.waitingForWebhook === true && workflowsStore.nodesIssuesExist) {
			workflowState.setActiveExecutionId(void 0);
			throw new Error(i18n.baseText("workflowRun.showError.resolveOutstandingIssues"));
		}
		if (response.waitingForWebhook === true) workflowsStore.executionWaitingForWebhook = true;
		return response;
	}
	async function runWorkflow(options) {
		if (workflowsStore.activeExecutionId) return;
		toast.clearAllStickyNotifications();
		try {
			let directParentNodes = [];
			if (options.destinationNode !== void 0) directParentNodes = workflowObject.value.getParentNodes(options.destinationNode, NodeConnectionTypes.Main, -1);
			const runData = workflowsStore.getWorkflowRunData;
			if (workflowsStore.isNewWorkflow) await workflowSaving.saveCurrentWorkflow();
			const workflowData = await workflowHelpers.getWorkflowDataToSave();
			const { startNodeNames } = consolidateRunDataAndStartNodes(directParentNodes, runData, workflowData.pinData, workflowObject.value);
			const destinationNodeType = options.destinationNode ? workflowsStore.getNodeByName(options.destinationNode)?.type : "";
			let executedNode;
			let triggerToStartFrom;
			if (startNodeNames.length === 0 && directParentNodes.length === 0 && "destinationNode" in options && options.destinationNode !== void 0) {
				executedNode = options.destinationNode;
				startNodeNames.push(options.destinationNode);
			} else if (options.triggerNode && options.nodeData && !options.rerunTriggerNode) startNodeNames.push(...workflowObject.value.getChildNodes(options.triggerNode, NodeConnectionTypes.Main, 1));
			else if (options.destinationNode) executedNode = options.destinationNode;
			if (options.triggerNode) triggerToStartFrom = {
				name: options.triggerNode,
				data: options.nodeData
			};
			if (options.destinationNode && (workflowsStore.checkIfNodeHasChatParent(options.destinationNode) || destinationNodeType === "@n8n/n8n-nodes-langchain.chatTrigger") && options.source !== "RunData.ManualChatMessage") {
				const startNode = workflowObject.value.getStartNode(options.destinationNode);
				if (startNode && startNode.type === "@n8n/n8n-nodes-langchain.chatTrigger") {
					const chatHasInputData = nodeHelpers.getNodeInputData(startNode, 0, 0, "input")?.length > 0;
					const chatHasPinData = !!workflowData.pinData?.[startNode.name];
					if (!chatHasInputData && !chatHasPinData) {
						workflowsStore.chatPartialExecutionDestinationNode = options.destinationNode;
						startChat();
						return;
					}
				}
			}
			const triggers = workflowData.nodes.filter((node) => node.type.toLowerCase().includes("trigger") && !node.disabled);
			if (!options.destinationNode && options.source !== "RunData.ManualChatMessage" && workflowData.nodes.some((node) => node.type === "@n8n/n8n-nodes-langchain.chatTrigger")) {
				if (triggers.filter((node) => node.type !== "@n8n/n8n-nodes-langchain.chatTrigger").length) {
					const chatTriggerNode = workflowData.nodes.find((node) => node.type === CHAT_TRIGGER_NODE_TYPE);
					if (chatTriggerNode) chatTriggerNode.disabled = true;
				}
			}
			const isPartialExecution = options.destinationNode !== void 0;
			const startNodes = sortNodesByYPosition(startNodeNames).map((name) => {
				let sourceData = (0, import_get.default)(runData, [
					name,
					0,
					"source",
					0
				], null);
				if (sourceData === null) {
					const parentNodes = workflowObject.value.getParentNodes(name, NodeConnectionTypes.Main, 1);
					sourceData = (0, import_get.default)(workflowHelpers.executeData(workflowObject.value.connectionsBySourceNode, parentNodes, name, NodeConnectionTypes.Main, 0), [
						"source",
						NodeConnectionTypes.Main,
						0
					], null);
				}
				return {
					name,
					sourceData
				};
			}).filter((node) => {
				if (options.destinationNode && workflowsStore.checkIfNodeHasChatParent(options.destinationNode)) return node.name !== options.destinationNode;
				return true;
			});
			const singleWebhookTrigger = options.triggerNode === void 0 ? triggers.find((node) => SINGLE_WEBHOOK_TRIGGERS.includes(node.type)) : workflowData.nodes.find((node) => node.name === options.triggerNode && SINGLE_WEBHOOK_TRIGGERS.includes(node.type));
			if (singleWebhookTrigger && workflowsStore.isWorkflowActive && !workflowData.pinData?.[singleWebhookTrigger.name]) {
				toast.showMessage({
					title: i18n.baseText("workflowRun.showError.deactivate"),
					message: i18n.baseText("workflowRun.showError.productionActive", { interpolate: { nodeName: singleWebhookTrigger.name } }),
					type: "error"
				});
				return;
			}
			const startRunData = {
				workflowData,
				runData: isPartialExecution ? runData ?? void 0 : void 0,
				startNodes,
				triggerToStartFrom
			};
			if ("destinationNode" in options) {
				startRunData.destinationNode = options.destinationNode;
				const nodeId = workflowsStore.getNodeByName(options.destinationNode)?.id;
				if (workflowObject.value.id && nodeId) {
					const agentRequest = agentRequestStore.getAgentRequest(workflowObject.value.id, nodeId);
					if (agentRequest) startRunData.agentRequest = {
						query: agentRequest.query ?? {},
						tool: { name: agentRequest.toolName ?? "" }
					};
				}
			}
			if (startRunData.runData) {
				const nodeNames = Object.entries(dirtinessByName.value).flatMap(([nodeName, dirtiness]) => dirtiness ? [nodeName] : []);
				startRunData.dirtyNodeNames = nodeNames.length > 0 ? nodeNames : void 0;
			}
			const executionData = {
				id: IN_PROGRESS_EXECUTION_ID,
				finished: false,
				mode: "manual",
				status: "running",
				createdAt: /* @__PURE__ */ new Date(),
				startedAt: /* @__PURE__ */ new Date(),
				stoppedAt: void 0,
				workflowId: workflowObject.value.id,
				executedNode,
				triggerNode: triggerToStartFrom?.name,
				data: { resultData: {
					runData: startRunData.runData ?? {},
					pinData: workflowData.pinData,
					workflowData
				} },
				workflowData: {
					id: workflowsStore.workflowId,
					name: workflowData.name,
					active: workflowData.active,
					createdAt: 0,
					updatedAt: 0,
					...workflowData
				}
			};
			workflowState.setWorkflowExecutionData(executionData);
			nodeHelpers.updateNodesExecutionIssues();
			useDocumentTitle().setDocumentTitle(workflowObject.value.name, "EXECUTING");
			const runWorkflowApiResponse = await runWorkflowApi(startRunData);
			const pinData = workflowData.pinData ?? {};
			const getTestUrl = (() => {
				return (node) => {
					const path = node.parameters.path || node.parameters.options?.path || node.webhookId;
					return `${rootStore.formTestUrl}/${path}`;
				};
			})();
			try {
				await displayForm({
					nodes: workflowData.nodes,
					runData: workflowsStore.getWorkflowExecution?.data?.resultData?.runData,
					destinationNode: options.destinationNode,
					triggerNode: options.triggerNode,
					pinData,
					directParentNodes,
					source: options.source,
					getTestUrl
				});
			} catch (error) {}
			await externalHooks.run("workflowRun.runWorkflow", {
				nodeName: options.destinationNode,
				source: options.source
			});
			return runWorkflowApiResponse;
		} catch (error) {
			workflowState.setWorkflowExecutionData(null);
			useDocumentTitle().setDocumentTitle(workflowObject.value.name, "ERROR");
			toast.showError(error, i18n.baseText("workflowRun.showError.title"));
			return;
		}
	}
	function consolidateRunDataAndStartNodes(directParentNodes, runData, pinData, workflow) {
		const startNodeNames = /* @__PURE__ */ new Set();
		let newRunData;
		if (runData !== null && Object.keys(runData).length !== 0) {
			newRunData = {};
			for (const directParentNode of directParentNodes) {
				const parentNodes = workflow.getParentNodes(directParentNode, NodeConnectionTypes.Main);
				if (workflow.nodes[directParentNode].disabled) continue;
				parentNodes.push(directParentNode);
				for (const parentNode of parentNodes) {
					if (!runData[parentNode]?.length && !pinData?.[parentNode]?.length || runData[parentNode]?.[0]?.error !== void 0) {
						startNodeNames.add(parentNode);
						break;
					}
					if (runData[parentNode] && !runData[parentNode]?.[0]?.error) newRunData[parentNode] = runData[parentNode]?.slice(0, 1);
				}
			}
			if (isEmpty(newRunData)) newRunData = void 0;
		}
		return {
			runData: newRunData,
			startNodeNames: [...startNodeNames]
		};
	}
	async function stopCurrentExecution() {
		const executionId = workflowsStore.activeExecutionId;
		let stopData;
		if (!executionId) return;
		try {
			stopData = await executionsStore.stopCurrentExecution(executionId);
		} catch (error) {
			const execution = await workflowsStore.getExecution(executionId);
			if (execution === void 0) toast.showMessage({
				title: i18n.baseText("nodeView.showMessage.stopExecutionCatch.unsaved.title"),
				message: i18n.baseText("nodeView.showMessage.stopExecutionCatch.unsaved.message"),
				type: "success"
			});
			else if (execution?.finished) {
				const executedData = {
					data: execution.data,
					workflowData: workflowsStore.workflow,
					finished: execution.finished,
					mode: execution.mode,
					startedAt: execution.startedAt,
					stoppedAt: execution.stoppedAt
				};
				workflowState.setWorkflowExecutionData(executedData);
				toast.showMessage({
					title: i18n.baseText("nodeView.showMessage.stopExecutionCatch.title"),
					message: i18n.baseText("nodeView.showMessage.stopExecutionCatch.message"),
					type: "success"
				});
			} else toast.showError(error, i18n.baseText("nodeView.showError.stopExecution.title"));
		} finally {
			if (!await retry(async () => {
				const execution = await workflowsStore.getExecution(executionId);
				if (!["running", "waiting"].includes(execution?.status)) {
					workflowState.markExecutionAsStopped(stopData);
					return true;
				}
				return false;
			}, 250, 20)) workflowState.markExecutionAsStopped(stopData);
		}
	}
	async function stopWaitingForWebhook() {
		try {
			await workflowsStore.removeTestWebhook(workflowsStore.workflowId);
		} catch (error) {
			toast.showError(error, i18n.baseText("nodeView.showError.stopWaitingForWebhook.title"));
			return;
		}
	}
	async function runEntireWorkflow(source, triggerNode) {
		workflowHelpers.getWorkflowDataToSave().then((workflowData) => {
			const telemetryPayload = {
				workflow_id: workflowObject.value.id,
				node_graph_string: JSON.stringify(generateNodesGraph(workflowData, workflowHelpers.getNodeTypes(), { isCloudDeployment: settingsStore.isCloudDeployment }).nodeGraph),
				button_type: source
			};
			telemetry.track("User clicked execute workflow button", telemetryPayload);
			externalHooks.run("nodeView.onRunWorkflow", telemetryPayload);
		});
		runWorkflow({ triggerNode: triggerNode ?? workflowsStore.selectedTriggerNodeName });
	}
	return {
		consolidateRunDataAndStartNodes,
		runEntireWorkflow,
		runWorkflow,
		runWorkflowApi,
		stopCurrentExecution,
		stopWaitingForWebhook,
		sortNodesByYPosition
	};
}
export { proxy as a, usePushConnectionStore as i, useAgentRequestStore as n, wrap as o, useNodeDirtiness as r, useRunWorkflow as t };
