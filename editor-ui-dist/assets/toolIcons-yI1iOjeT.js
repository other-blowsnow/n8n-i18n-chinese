import { It as ref, Pt as reactive, S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { i as i18n } from "./src-B1khmGvj.js";
import { t as useToast } from "./useToast-DkJJVsDy.js";
import { T as defineStore, c as makeRestApiRequest, t as useRootStore } from "./useRootStore-DORNi26-.js";
import "./settings.store-BSo6Wkgz.js";
//#region src/features/ai/instanceAi/instanceAi.mcp.api.ts
async function fetchMcpRegistryServers(context) {
	return await makeRestApiRequest(context, "GET", "/mcp-registry/servers");
}
async function fetchMcpConnections(context) {
	return await makeRestApiRequest(context, "GET", "/instance-ai/mcp/connections");
}
async function fetchMcpConnectionTools(context, id) {
	return await makeRestApiRequest(context, "GET", `/instance-ai/mcp/connections/${encodeURIComponent(id)}/tools`);
}
async function createMcpConnection(context, body) {
	return await makeRestApiRequest(context, "POST", "/instance-ai/mcp/connections", body);
}
async function updateMcpConnection(context, id, body) {
	return await makeRestApiRequest(context, "PATCH", `/instance-ai/mcp/connections/${encodeURIComponent(id)}`, body);
}
async function deleteMcpConnection(context, id) {
	await makeRestApiRequest(context, "DELETE", `/instance-ai/mcp/connections/${encodeURIComponent(id)}`);
}
//#endregion
//#region src/features/ai/instanceAi/instanceAiMcp.store.ts
var useInstanceAiMcpStore = defineStore("instanceAiMcp", () => {
	const rootStore = useRootStore();
	const toast = useToast();
	const connections = ref([]);
	const catalog = ref(null);
	const connectionToolsById = reactive(/* @__PURE__ */ new Map());
	const isLoadingConnections = ref(false);
	const isLoadingCatalog = ref(false);
	const inFlightConnectionToolsById = /* @__PURE__ */ new Map();
	const connectionsByServerSlug = computed(() => {
		const map = /* @__PURE__ */ new Map();
		for (const connection of connections.value) {
			const list = map.get(connection.serverSlug) ?? [];
			list.push(connection);
			map.set(connection.serverSlug, list);
		}
		return map;
	});
	async function fetchConnections() {
		isLoadingConnections.value = true;
		try {
			connections.value = await fetchMcpConnections(rootStore.restApiContext);
		} catch (error) {
			toast.showError(error, i18n.baseText("instanceAi.mcp.error.fetchConnections"));
		} finally {
			isLoadingConnections.value = false;
		}
	}
	async function fetchCatalogLazy() {
		if (catalog.value !== null) return;
		isLoadingCatalog.value = true;
		try {
			catalog.value = await fetchMcpRegistryServers(rootStore.restApiContext);
		} catch (error) {
			toast.showError(error, i18n.baseText("instanceAi.mcp.error.fetchCatalog"));
		} finally {
			isLoadingCatalog.value = false;
		}
	}
	function clearConnectionTools(id) {
		connectionToolsById.delete(id);
		inFlightConnectionToolsById.delete(id);
	}
	async function fetchConnectionToolsLazy(id) {
		if (connectionToolsById.has(id)) return;
		const inFlight = inFlightConnectionToolsById.get(id);
		if (inFlight) {
			await inFlight.catch(() => void 0);
			return;
		}
		const promise = fetchMcpConnectionTools(rootStore.restApiContext, id);
		const isCurrent = () => inFlightConnectionToolsById.get(id) === promise;
		inFlightConnectionToolsById.set(id, promise);
		try {
			const tools = await promise;
			if (isCurrent()) connectionToolsById.set(id, tools);
		} catch (error) {
			if (isCurrent()) toast.showError(error, i18n.baseText("instanceAi.mcp.error.fetchTools"));
		} finally {
			if (isCurrent()) inFlightConnectionToolsById.delete(id);
		}
	}
	async function connect(body) {
		try {
			const created = await createMcpConnection(rootStore.restApiContext, body);
			connections.value = [...connections.value, created];
			return created;
		} catch (error) {
			toast.showError(error, i18n.baseText("instanceAi.mcp.error.connect"));
			return null;
		}
	}
	async function updateConnection(id, body) {
		try {
			const updated = await updateMcpConnection(rootStore.restApiContext, id, body);
			connections.value = connections.value.map((c) => c.id === id ? updated : c);
			if (body.credentialId) {
				clearConnectionTools(id);
				fetchConnectionToolsLazy(id);
			}
			return updated;
		} catch (error) {
			toast.showError(error, i18n.baseText("instanceAi.mcp.error.updateSettings"));
			return null;
		}
	}
	async function disconnect(id) {
		try {
			await deleteMcpConnection(rootStore.restApiContext, id);
			connections.value = connections.value.filter((c) => c.id !== id);
			clearConnectionTools(id);
			return true;
		} catch (error) {
			toast.showError(error, i18n.baseText("instanceAi.mcp.error.disconnect"));
			return false;
		}
	}
	function reset() {
		connections.value = [];
		catalog.value = null;
		connectionToolsById.clear();
		inFlightConnectionToolsById.clear();
	}
	return {
		connections,
		catalog,
		connectionToolsById,
		isLoadingConnections,
		isLoadingCatalog,
		connectionsByServerSlug,
		fetchConnections,
		fetchCatalogLazy,
		fetchConnectionToolsLazy,
		connect,
		updateConnection,
		disconnect,
		reset
	};
});
//#endregion
//#region src/features/ai/instanceAi/toolIcons.ts
function pickIconForTheme(icons, appliedTheme) {
	if (icons.length === 0) return null;
	const themed = icons.find((i) => i.theme === appliedTheme);
	if (themed) return themed.src;
	return (icons.find((i) => i.theme === void 0) ?? icons[0]).src;
}
function iconForTool(icons, appliedTheme) {
	const src = pickIconForTheme(icons, appliedTheme);
	return src ? {
		type: "file",
		src
	} : {
		type: "icon",
		name: "mcp"
	};
}
//#endregion
export { useInstanceAiMcpStore as n, iconForTool as t };
