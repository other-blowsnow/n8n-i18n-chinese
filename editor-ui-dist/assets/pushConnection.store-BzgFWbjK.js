import { Ft as ref, S as computed, gt as watch } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { hl as getDebounceTime, sl as DEBOUNCE_TIME, ua as createHeartbeatMessage } from "./constants-c-L9DE1I.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-CCt5xa74.js";
import { In as STORES, t as useSettingsStore } from "./settings.store-CN5kyBJf.js";
//#region src/app/push-connection/useHeartbeat.ts
/**
* Creates a heartbeat timer using the given interval. The timer needs
* to be started and stopped manually.
*/
var useHeartbeat = (options) => {
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
//#endregion
//#region src/app/push-connection/useReconnectTimer.ts
/**
* A timer for exponential backoff reconnect attempts.
*/
var useReconnectTimer = ({ onAttempt, onAttemptScheduled }) => {
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
	/** Stops the reconnect timer. NOTE: This does not reset the reconnect attempts. */
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
//#endregion
//#region src/app/push-connection/useWebSocketClient.ts
/**
* Creates a WebSocket connection to the server. Uses reconnection logic
* to reconnect if the connection is lost.
*/
var useWebSocketClient = (options) => {
	const isConnected = ref(false);
	const socket = ref(null);
	/**
	* Heartbeat timer to keep the connection alive. This is an additional
	* mechanism to the protocol level ping/pong mechanism the server sends.
	* This is used the ensure the client notices connection issues.
	*/
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
//#endregion
//#region src/app/push-connection/useEventSourceClient.ts
/**
* Creates an EventSource connection to the server. Uses reconnection logic
* to reconnect if the connection is lost.
*/
var useEventSourceClient = (options) => {
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
//#endregion
//#region src/app/stores/pushConnection.store.ts
/**
* Store for managing a push connection to the server
*/
var usePushConnectionStore = defineStore(STORES.PUSH, () => {
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	/**
	* Queue of messages to be sent to the server. Messages are queued if
	* the connection is down.
	*/
	const outgoingQueue = ref([]);
	/** Whether the connection has been requested */
	const isConnectionRequested = ref(false);
	/** Whether the connection is currently being established */
	const isConnecting = ref(false);
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
		const url = `/push?pushRef=${rootStore.pushRef}`;
		if (useWebSockets.value) {
			const { protocol, host } = window.location;
			return `${restUrl.startsWith("http") ? restUrl.replace(/^http/, "ws") : `${protocol === "https:" ? "wss" : "ws"}://${host + restUrl}`}${url}`;
		} else return `${restUrl}${url}`;
	};
	/**
	* Process a newly received message
	*/
	async function onMessage(data) {
		if (data instanceof ArrayBuffer) data = new TextDecoder("utf-8").decode(new Uint8Array(data));
		let parsedData;
		try {
			parsedData = JSON.parse(data);
		} catch (error) {
			return;
		}
		onMessageReceivedHandlers.value.forEach((handler) => {
			handler(parsedData);
		});
	}
	const url = computed(() => getConnectionUrl());
	const client = computed(() => useWebSockets.value ? useWebSocketClient({
		url: url.value,
		onMessage
	}) : useEventSourceClient({
		url: url.value,
		onMessage
	}));
	function serializeAndSend(message) {
		if (client.value.isConnected.value) client.value.sendMessage(JSON.stringify(message));
		else outgoingQueue.value.push(message);
	}
	/**
	* Debounce window in ms for disconnect. If pushConnect is called within this
	* window (before or after pushDisconnect), the connection is kept.
	*/
	const getDisconnectDebounceMs = () => getDebounceTime(DEBOUNCE_TIME.CONNECTION.WEBSOCKET_DISCONNECT);
	/**
	* Tracks whether a connect was recently requested. Used to handle race conditions
	* during route transitions where disconnect/connect may be called in quick succession.
	* Connect always wins within the debounce window.
	*/
	let recentConnectIntent = false;
	/**
	* Timeout to reset recentConnectIntent after the debounce window.
	*/
	let connectIntentTimeout = null;
	/**
	* Timeout for debounced disconnect.
	*/
	let disconnectTimeout = null;
	const pushConnect = () => {
		recentConnectIntent = true;
		if (connectIntentTimeout) clearTimeout(connectIntentTimeout);
		connectIntentTimeout = setTimeout(() => {
			recentConnectIntent = false;
			connectIntentTimeout = null;
		}, getDisconnectDebounceMs());
		if (disconnectTimeout) {
			clearTimeout(disconnectTimeout);
			disconnectTimeout = null;
		}
		isConnectionRequested.value = true;
		isConnecting.value = true;
		client.value.connect();
	};
	const pushDisconnect = () => {
		if (recentConnectIntent) return;
		if (disconnectTimeout) clearTimeout(disconnectTimeout);
		disconnectTimeout = setTimeout(() => {
			if (recentConnectIntent) {
				disconnectTimeout = null;
				return;
			}
			isConnectionRequested.value = false;
			isConnecting.value = false;
			client.value.disconnect();
			disconnectTimeout = null;
		}, getDisconnectDebounceMs());
	};
	watch(() => client.value.isConnected.value, (didConnect) => {
		if (didConnect) isConnecting.value = false;
		if (!didConnect) return;
		if (outgoingQueue.value.length) {
			for (const message of outgoingQueue.value) serializeAndSend(message);
			outgoingQueue.value = [];
		}
	});
	/** Removes all buffered messages from the sent queue */
	const clearQueue = () => {
		outgoingQueue.value = [];
	};
	return {
		isConnected: computed(() => client.value.isConnected.value),
		isConnecting,
		isConnectionRequested,
		onMessageReceivedHandlers,
		addEventListener,
		pushConnect,
		pushDisconnect,
		send: serializeAndSend,
		clearQueue
	};
});
//#endregion
export { useHeartbeat as n, usePushConnectionStore as t };
