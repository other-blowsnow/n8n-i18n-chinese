import { n as transfer, r as wrap } from "./comlink-DA2utiRU.js";
const sharedWorker = new SharedWorker(new URL(
	/* @vite-ignore */
	"/%7B%7BBASE_PATH%7D%7D/assets/worker-BF6uUMeA.js",
	"" + import.meta.url
), {
	type: "module",
	name: "n8n-coordinator"
});
sharedWorker.port.start();
const dataWorker = new Worker(new URL(
	/* @vite-ignore */
	"/%7B%7BBASE_PATH%7D%7D/assets/worker-C1kDTKxv.js",
	"" + import.meta.url
), {
	type: "module",
	name: "n8n-data"
});
const coordinator = wrap(sharedWorker.port);
var tabState = {
	tabId: null,
	isRegistered: false
};
async function registerTab() {
	if (tabState.isRegistered && tabState.tabId) return tabState.tabId;
	console.log("[Coordinator] Registering tab...");
	const channel = new MessageChannel();
	dataWorker.postMessage({
		type: "connect",
		port: channel.port1
	}, [channel.port1]);
	const newTabId = await coordinator.registerTab(transfer(channel.port2, [channel.port2]));
	tabState.tabId = newTabId;
	tabState.isRegistered = true;
	console.log(`[Coordinator] Registered as tab: ${newTabId}`);
	setupCleanupHandlers();
	return newTabId;
}
function unregisterCurrentTab() {
	if (tabState.tabId) {
		coordinator.unregisterTab(tabState.tabId).catch(console.error);
		tabState.isRegistered = false;
		tabState.tabId = null;
	}
}
function setupCleanupHandlers() {
	window.addEventListener("beforeunload", unregisterCurrentTab);
	window.addEventListener("pagehide", unregisterCurrentTab);
	window.addEventListener("pageshow", (event) => {
		if (event.persisted && !tabState.isRegistered) {
			console.log("[Coordinator] Page restored from bfcache, re-registering...");
			registerTab().catch(console.error);
		}
	});
	document.addEventListener("visibilitychange", () => {
		if (document.visibilityState === "visible" && !tabState.isRegistered) {
			console.log("[Coordinator] Page became visible, re-registering...");
			registerTab().catch(console.error);
		}
	});
}
async function ensureRegistered() {
	await registerTab();
}
async function initialize({ version }) {
	await ensureRegistered();
	await coordinator.initialize({ version });
}
async function exec(sql) {
	await ensureRegistered();
	await coordinator.exec(sql);
}
async function query(sql) {
	await ensureRegistered();
	return await coordinator.query(sql);
}
async function queryWithParams(sql, params) {
	await ensureRegistered();
	return await coordinator.queryWithParams(sql, params);
}
async function isInitialized() {
	return await coordinator.isInitialized();
}
async function loadNodeTypes(baseUrl) {
	await ensureRegistered();
	await coordinator.loadNodeTypes(baseUrl);
}
async function storeVersion(version) {
	await ensureRegistered();
	await coordinator.storeVersion(version);
}
async function getStoredVersion() {
	await ensureRegistered();
	return await coordinator.getStoredVersion();
}
export { exec, getStoredVersion, initialize, isInitialized, loadNodeTypes, query, queryWithParams, storeVersion };
