/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const proxyMarker = Symbol("Comlink.proxy");
const createEndpoint = Symbol("Comlink.endpoint");
const releaseProxy = Symbol("Comlink.releaseProxy");
const finalizer = Symbol("Comlink.finalizer");
const throwMarker = Symbol("Comlink.thrown");
const isObject = (val) => typeof val === "object" && val !== null || typeof val === "function";
const transferHandlers = new Map([["proxy", {
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
const proxyCounter = /* @__PURE__ */ new WeakMap();
const proxyFinalizers = "FinalizationRegistry" in globalThis && new FinalizationRegistry((ep) => {
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
const transferCache = /* @__PURE__ */ new WeakMap();
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
function generateTabId() {
	return `tab-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
function getActiveDataWorker(state$1) {
	if (!state$1.activeTabId) return null;
	return state$1.tabs.get(state$1.activeTabId)?.dataWorker ?? null;
}
function getRequiredActiveDataWorker(state$1) {
	const worker = getActiveDataWorker(state$1);
	if (!worker) throw new Error("[Coordinator] No active data worker available");
	return worker;
}
async function selectNewActiveTab(state$1) {
	for (const [tabId, tab] of state$1.tabs) if (tab.dataWorker) {
		console.log("[Coordinator] Selecting new active tab:", tabId);
		state$1.activeTabId = tabId;
		tab.isActive = true;
		try {
			if (!state$1.version) throw new Error("[Coordinator] Cannot initialize without version");
			await tab.dataWorker.initialize({ version: state$1.version });
			state$1.initialized = true;
			console.log(`[Coordinator] New active tab ${tabId} initialized`);
		} catch (error) {
			console.error("[Coordinator] Failed to initialize new active tab:", error);
			tab.isActive = false;
			state$1.activeTabId = null;
			continue;
		}
		return;
	}
	console.log("[Coordinator] No tabs available to become active");
	state$1.activeTabId = null;
	state$1.initialized = false;
}
function handleTabDisconnect(state$1, tabId) {
	console.log(`[Coordinator] Tab disconnected: ${tabId}`);
	if (state$1.tabs.get(tabId)) {
		state$1.tabs.delete(tabId);
		if (state$1.activeTabId === tabId) {
			state$1.activeTabId = null;
			state$1.initialized = false;
			selectNewActiveTab(state$1).catch(console.error);
		}
	}
}
function registerTab(state$1, dataWorkerPort) {
	const tabId = generateTabId();
	console.log(`[Coordinator] Registering tab: ${tabId}`);
	const tabConnection = {
		id: tabId,
		port: dataWorkerPort,
		dataWorker: wrap(dataWorkerPort),
		isActive: false
	};
	state$1.tabs.set(tabId, tabConnection);
	if (!state$1.activeTabId) {
		console.log(`[Coordinator] Making tab ${tabId} the active tab`);
		state$1.activeTabId = tabId;
		tabConnection.isActive = true;
	}
	return tabId;
}
function unregisterTab(state$1, tabId) {
	handleTabDisconnect(state$1, tabId);
}
async function ensureInitialized(state$1) {
	if (!state$1.initialized) {
		if (!state$1.version) throw new Error("[Coordinator] Cannot auto-initialize without version. Call initialize({ version }) first.");
		await initialize(state$1, { version: state$1.version });
	}
}
async function initialize(state$1, { version }) {
	console.log("[Coordinator] Initialize requested");
	state$1.version = version;
	if (state$1.initialized) {
		console.log("[Coordinator] Already initialized");
		return;
	}
	await getRequiredActiveDataWorker(state$1).initialize({ version });
	state$1.initialized = true;
	console.log("[Coordinator] Initialization complete");
}
function withActiveWorker(action) {
	return async (state$1, ...args) => {
		await ensureInitialized(state$1);
		return await action(getRequiredActiveDataWorker(state$1), ...args);
	};
}
const exec = withActiveWorker(async (worker, sql) => await worker.exec(sql));
const query = withActiveWorker(async (worker, sql) => await worker.query(sql));
const queryWithParams = withActiveWorker(async (worker, sql, params = []) => await worker.queryWithParams(sql, params));
function isInitialized(state$1) {
	return state$1.initialized;
}
function getActiveTabId(state$1) {
	return state$1.activeTabId;
}
function getTabCount(state$1) {
	return state$1.tabs.size;
}
const loadNodeTypes = withActiveWorker(async (worker, baseUrl) => {
	console.log("[Coordinator] loadNodeTypes");
	return await worker.loadNodeTypes(baseUrl);
});
const storeVersion = withActiveWorker(async (worker, version) => {
	console.log("[Coordinator] storeVersion:", version);
	return await worker.storeVersion(version);
});
const getStoredVersion = withActiveWorker(async (worker) => {
	console.log("[Coordinator] getStoredVersion");
	return await worker.getStoredVersion();
});
const state = {
	tabs: /* @__PURE__ */ new Map(),
	activeTabId: null,
	initialized: false,
	version: null
};
const coordinatorApi = {
	async registerTab(dataWorkerPort) {
		return registerTab(state, dataWorkerPort);
	},
	async unregisterTab(tabId) {
		unregisterTab(state, tabId);
	},
	async initialize({ version }) {
		await initialize(state, { version });
	},
	async exec(sql) {
		await exec(state, sql);
	},
	async query(sql) {
		return await query(state, sql);
	},
	async queryWithParams(sql, params = []) {
		return await queryWithParams(state, sql, params);
	},
	isInitialized() {
		return isInitialized(state);
	},
	getActiveTabId() {
		return getActiveTabId(state);
	},
	getTabCount() {
		return getTabCount(state);
	},
	async loadNodeTypes(baseUrl) {
		await loadNodeTypes(state, baseUrl);
	},
	async storeVersion(version) {
		await storeVersion(state, version);
	},
	async getStoredVersion() {
		return await getStoredVersion(state);
	}
};
const ports = /* @__PURE__ */ new Set();
self.onconnect = (e) => {
	const port = e.ports[0];
	ports.add(port);
	let connectedTabId = null;
	const wrappedApi = {
		...coordinatorApi,
		async registerTab(dataWorkerPort) {
			connectedTabId = await coordinatorApi.registerTab(dataWorkerPort);
			return connectedTabId;
		}
	};
	port.onmessageerror = () => {
		ports.delete(port);
		if (connectedTabId) handleTabDisconnect(state, connectedTabId);
	};
	expose(wrappedApi, port);
};
