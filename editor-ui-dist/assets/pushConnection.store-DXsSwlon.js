import { C as computed, It as ref, _t as watch } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { M as useLocalStorage } from "./_MapCache-nsH9LP_7.js";
import { ls as useSettingsStore, vc as STORES } from "./users.store-DmlY2Qk6.js";
import { Vs as LOCAL_STORAGE_RUN_DATA_WORKER, qr as createHeartbeatMessage } from "./constants-D1rOdsyc.js";
import { k as defineStore, r as useRootStore } from "./_baseOrderBy-BQpO5lC4.js";
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
const runDataWorker = wrap(new Worker(new URL(
	/* @vite-ignore */
	"/%7B%7BBASE_PATH%7D%7D/assets/worker-BnP12nj7.js",
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
export { proxy as n, wrap as r, usePushConnectionStore as t };
