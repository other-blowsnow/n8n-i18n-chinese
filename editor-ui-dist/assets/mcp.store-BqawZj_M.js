import { $ as openBlock, C as createBaseVNode, E as createElementBlock, It as ref, S as computed, k as createStaticVNode } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { J as i18n } from "./dist-EhQ9PC87.js";
import { Bi as isWorkflowListItem, r as createWorkflowDocumentId, s as useWorkflowDocumentStore } from "./workflowDocument.store-D_ncq8GX.js";
import { T as defineStore, c as makeRestApiRequest, s as getFullApiResponse, t as useRootStore } from "./useRootStore-H_HdEClX.js";
import { t as useSettingsStore } from "./settings.store-CQqpFn-s.js";
import { Qo as MCP_CLIENT_BRAND_MATCHERS, ts as MCP_INSTANCE_SCOPES } from "./constants-BzyjfRY2.js";
import { t as useWorkflowsListStore } from "./workflowsList.store-Rrtw3K3s.js";
import "./mcp.constants-D-fL2-wC.js";
//#region src/features/ai/mcpAccess/mcp.api.ts
async function updateMcpSettings(context, enabled) {
	return await makeRestApiRequest(context, "PATCH", "/mcp/settings", { mcpAccessEnabled: enabled });
}
async function fetchApiKey(context) {
	return await makeRestApiRequest(context, "GET", "/mcp/api-key");
}
async function rotateApiKey(context) {
	return await makeRestApiRequest(context, "POST", "/mcp/api-key/rotate");
}
async function getAllowedRedirectUris(context) {
	return await makeRestApiRequest(context, "GET", "/mcp/oauth/allowed-redirect-uris");
}
async function updateAllowedRedirectUris(context, uris) {
	return await makeRestApiRequest(context, "PATCH", "/mcp/oauth/allowed-redirect-uris", { uris });
}
/**
* Bulk-toggles MCP availability for a set of workflows scoped by either an
* explicit id list, a project, a folder (+ its descendants), or all
* workflows the user can update.
*/
async function toggleWorkflowsMcpAccessApi(context, target, availableInMCP) {
	return await makeRestApiRequest(context, "PATCH", "/mcp/workflows/toggle-access", {
		availableInMCP,
		...target
	});
}
async function fetchOAuthClients(context, options = {}) {
	const params = Object.fromEntries(Object.entries(options).filter(([, value]) => value !== void 0));
	return await makeRestApiRequest(context, "GET", "/mcp/oauth-clients", Object.keys(params).length > 0 ? params : void 0);
}
async function fetchInstanceMcpClientStats(context) {
	return await makeRestApiRequest(context, "GET", "/mcp/oauth-clients/instance-stats");
}
async function deleteOAuthClient(context, clientId, userId) {
	return await makeRestApiRequest(context, "DELETE", `/mcp/oauth-clients/${encodeURIComponent(clientId)}`, userId ? { userId } : void 0);
}
async function fetchMcpEligibleWorkflows(context, options) {
	const params = {};
	if (options?.take !== void 0) params.take = options.take;
	if (options?.skip !== void 0) params.skip = options.skip;
	if (options?.query) params.filter = JSON.stringify({ query: options.query });
	return await getFullApiResponse(context, "GET", "/mcp/workflows", params);
}
//#endregion
//#region src/features/ai/mcpAccess/assets/client-icons/claude.svg?component
var _hoisted_1$3 = {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "#D97757",
	viewBox: "0 0 24 24"
};
function render$3(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "m4.714 15.956 4.718-2.648.079-.23-.08-.128h-.23l-.79-.048-2.695-.073-2.337-.097-2.265-.122-.57-.121-.535-.704.055-.353.48-.321.685.06 1.518.104 2.277.157 1.651.098 2.447.255h.389l.054-.158-.133-.097-.103-.098-2.356-1.596-2.55-1.688-1.336-.972-.722-.491L2 6.223l-.158-1.008.656-.722.88.06.224.061.893.686 1.906 1.476 2.49 1.833.364.304.146-.104.018-.072-.164-.274-1.354-2.446-1.445-2.49-.644-1.032-.17-.619a3 3 0 0 1-.103-.729L6.287.133 6.7 0l.995.134.42.364.619 1.415L9.735 4.14l1.555 3.03.455.898.243.832.09.255h.159V9.01l.127-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.583.28.48.685-.067.444-.286 1.851-.558 2.903-.365 1.942h.213l.243-.242.983-1.306 1.652-2.064.728-.82.85-.904.547-.431h1.032l.759 1.129-.34 1.166-1.063 1.347-.88 1.142-1.263 1.7-.79 1.36.074.11.188-.02 2.853-.606 1.542-.28 1.84-.315.832.388.09.395-.327.807-1.967.486-2.307.462-3.436.813-.043.03.049.061 1.548.146.662.036h1.62l3.018.225.79.522.473.638-.08.485-1.213.62-1.64-.389-3.825-.91-1.31-.329h-.183v.11l1.093 1.068 2.003 1.81 2.508 2.33.127.578-.321.455-.34-.049-2.204-1.657-.85-.747-1.925-1.62h-.127v.17l.443.649 2.343 3.521.122 1.08-.17.353-.607.213-.668-.122-1.372-1.924-1.415-2.168-1.141-1.943-.14.08-.674 7.254-.316.37-.728.28-.607-.461-.322-.747.322-1.476.388-1.924.316-1.53.285-1.9.17-.632-.012-.042-.14.018-1.432 1.967-2.18 2.945-1.724 1.845-.413.164-.716-.37.066-.662.401-.589 2.386-3.036 1.439-1.882.929-1.086-.006-.158h-.055L4.138 18.56l-1.13.146-.485-.456.06-.746.231-.243 1.907-1.312Z" }, null, -1)])]);
}
var claude_default = { render: render$3 };
//#endregion
//#region src/features/ai/mcpAccess/assets/client-icons/cursor.svg?component
var _hoisted_1$2 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24"
};
function render$2(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" }, null, -1)])]);
}
var cursor_default = { render: render$2 };
//#endregion
//#region src/features/ai/mcpAccess/assets/client-icons/openai.svg?component
var _hoisted_1$1 = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "40",
	height: "40",
	fill: "none",
	viewBox: "0 0 40 40"
};
function render$1(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "#000",
		d: "M36.867 16.372a9.96 9.96 0 0 0-.856-8.185 10.08 10.08 0 0 0-10.855-4.835A9.97 9.97 0 0 0 17.639 0a10.08 10.08 0 0 0-9.614 6.978 9.97 9.97 0 0 0-6.664 4.834 10.08 10.08 0 0 0 1.24 11.817 9.96 9.96 0 0 0 .857 8.186 10.08 10.08 0 0 0 10.855 4.835A9.96 9.96 0 0 0 21.829 40a10.08 10.08 0 0 0 9.618-6.983 9.97 9.97 0 0 0 6.664-4.834 10.08 10.08 0 0 0-1.243-11.814zM21.832 37.386a7.47 7.47 0 0 1-4.8-1.735c.062-.033.168-.091.237-.134l7.965-4.6c.408-.231.658-.665.655-1.134V18.554l3.367 1.944c.036.018.06.053.065.093v9.299a7.505 7.505 0 0 1-7.49 7.496M5.726 30.507a7.46 7.46 0 0 1-.893-5.023c.058.035.162.1.236.142l7.965 4.6c.404.236.904.236 1.309 0l9.724-5.615v3.887a.12.12 0 0 1-.048.104l-8.051 4.649a7.505 7.505 0 0 1-10.24-2.744zM3.63 13.121a7.47 7.47 0 0 1 3.901-3.287l-.003.275v9.202c-.003.467.247.9.653 1.132l9.724 5.614-3.366 1.944a.12.12 0 0 1-.114.01l-8.052-4.653a7.505 7.505 0 0 1-2.744-10.236zm27.658 6.436-9.724-5.615 3.367-1.943a.12.12 0 0 1 .113-.01l8.053 4.649a7.499 7.499 0 0 1-1.158 13.528v-9.477c.004-.467-.244-.9-.65-1.132m3.35-5.043-.236-.141-7.965-4.6a1.3 1.3 0 0 0-1.309 0l-9.724 5.615V11.5a.12.12 0 0 1 .048-.103l8.051-4.645a7.495 7.495 0 0 1 11.133 7.762zm-21.064 6.93-3.367-1.945a.12.12 0 0 1-.066-.092v-9.3A7.498 7.498 0 0 1 22.437 4.35a6 6 0 0 0-.237.134l-7.965 4.6a1.29 1.29 0 0 0-.655 1.133l-.005 11.224zm1.829-3.943 4.331-2.502 4.331 2.5v5.002l-4.33 2.5-4.332-2.5z"
	}, null, -1)])]);
}
var openai_default = { render: render$1 };
//#endregion
//#region src/features/ai/mcpAccess/assets/client-icons/vscode.svg?component
var _hoisted_1 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 128 128"
};
function render(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [createStaticVNode("<mask id=\"a\" width=\"128\" height=\"128\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:alpha;\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M90.767 127.126a7.97 7.97 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.33 5.33 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.33 5.33 0 0 0 6.807.303l21.974-16.68 50.45 46.025a8 8 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z\" clip-rule=\"evenodd\"></path></mask><g mask=\"url(#a)\"><path fill=\"#0065A9\" d=\"M123.471 13.82 97.097 1.12A7.97 7.97 0 0 0 88 2.668L1.662 81.387a5.333 5.333 0 0 0 .006 7.887l7.052 6.411a5.33 5.33 0 0 0 6.811.303l103.971-78.875c3.488-2.646 8.498-.158 8.498 4.22v-.306a8 8 0 0 0-4.529-7.208Z\"></path><g filter=\"url(#b)\"><path fill=\"#007ACC\" d=\"m123.471 114.181-26.374 12.698A7.97 7.97 0 0 1 88 125.333L1.662 46.613a5.333 5.333 0 0 1 .006-7.887l7.052-6.411a5.33 5.33 0 0 1 6.811-.303l103.971 78.874c3.488 2.647 8.498.159 8.498-4.219v.306a8 8 0 0 1-4.529 7.208\"></path></g><g filter=\"url(#c)\"><path fill=\"#1F9CF0\" d=\"M97.098 126.882A7.98 7.98 0 0 1 88 125.333c2.952 2.952 8 .861 8-3.314V5.98c0-4.175-5.048-6.266-8-3.313a7.98 7.98 0 0 1 9.098-1.549L123.467 13.8A8 8 0 0 1 128 21.01v85.982a8 8 0 0 1-4.533 7.21z\"></path></g><path fill=\"url(#d)\" fill-rule=\"evenodd\" d=\"M90.69 127.126a7.97 7.97 0 0 0 6.349-.244l26.353-12.681a8 8 0 0 0 4.53-7.21V21.009a8 8 0 0 0-4.53-7.21L97.039 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026-21.974-16.68a5.33 5.33 0 0 0-6.807.302l-7.048 6.411a5.336 5.336 0 0 0-.006 7.888L20.718 64 1.662 81.386a5.335 5.335 0 0 0 .006 7.888l7.048 6.411a5.33 5.33 0 0 0 6.807.303l21.975-16.681 50.45 46.026a8 8 0 0 0 2.742 1.793m5.252-92.184L57.662 64l38.28 29.057z\" clip-rule=\"evenodd\" opacity=\".25\" style=\"mix-blend-mode:overlay;\"></path></g><defs><filter id=\"b\" width=\"144.744\" height=\"113.408\" x=\"-8.411\" y=\"22.594\" color-interpolation-filters=\"sRGB\" filterUnits=\"userSpaceOnUse\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feColorMatrix in=\"SourceAlpha\" result=\"hardAlpha\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=\"4.167\"></feGaussianBlur><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\"></feColorMatrix><feBlend in2=\"BackgroundImageFix\" mode=\"overlay\" result=\"effect1_dropShadow_1_36\"></feBlend><feBlend in=\"SourceGraphic\" in2=\"effect1_dropShadow_1_36\" result=\"shape\"></feBlend></filter><filter id=\"c\" width=\"56.667\" height=\"144.007\" x=\"79.667\" y=\"-8.004\" color-interpolation-filters=\"sRGB\" filterUnits=\"userSpaceOnUse\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feColorMatrix in=\"SourceAlpha\" result=\"hardAlpha\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=\"4.167\"></feGaussianBlur><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\"></feColorMatrix><feBlend in2=\"BackgroundImageFix\" mode=\"overlay\" result=\"effect1_dropShadow_1_36\"></feBlend><feBlend in=\"SourceGraphic\" in2=\"effect1_dropShadow_1_36\" result=\"shape\"></feBlend></filter><linearGradient id=\"d\" x1=\"63.922\" x2=\"63.922\" y1=\".33\" y2=\"127.67\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#fff\"></stop><stop offset=\"1\" stop-color=\"#fff\" stop-opacity=\"0\"></stop></linearGradient></defs>", 3)])]);
}
var vscode_default = { render };
//#endregion
//#region src/features/ai/mcpAccess/clients.utils.ts
/** Logos for the brands recognized by the shared name-pattern matchers. */
var BRAND_ICONS = {
	claude: claude_default,
	cursor: cursor_default,
	vscode: vscode_default,
	openai: openai_default
};
var brandCache = /* @__PURE__ */ new Map();
function getClientBrand(clientName) {
	let brand = brandCache.get(clientName);
	if (!brand) {
		const match = MCP_CLIENT_BRAND_MATCHERS.find(({ pattern }) => pattern.test(clientName));
		brand = match ? {
			icon: BRAND_ICONS[match.brand],
			type: match.type
		} : {
			icon: null,
			type: null
		};
		brandCache.set(clientName, brand);
	}
	return brand;
}
/**
* i18n key suffix for a granted scope's human label, e.g. `workflow:read` →
* `workflow.read`. Unknown scopes have no label and are rendered verbatim.
*/
function scopeLabelKeySuffix(scope) {
	return scope.replace(":", ".");
}
/**
* Human label for a granted scope. Unknown scopes have no i18n entry and render
* verbatim.
*/
function scopeLabel(i18n, scope) {
	const key = `settings.mcp.oAuthClients.scope.${scopeLabelKeySuffix(scope)}`;
	const label = i18n.baseText(key);
	return label === key ? scope : label;
}
/**
* Whether a grant covers every scope the instance offers. Pre-scoping grants
* are backfilled to the full launch scope set, so they surface as a single
* "Full access" label rather than an enumeration of every scope.
*/
function isFullAccessGrant(scopes) {
	return scopes.length > 0 && MCP_INSTANCE_SCOPES.every((scope) => scopes.includes(scope));
}
var EMPTY_OAUTH_CLIENT_FILTERS = {
	search: "",
	type: null,
	ownerId: null,
	connected: null
};
//#endregion
//#region src/features/ai/mcpAccess/mcp.store.ts
var useMCPStore = defineStore("mcp", () => {
	const workflowsListStore = useWorkflowsListStore();
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const currentUserMCPKey = ref(null);
	const oauthClients = ref([]);
	const oauthClientScopeTools = ref(void 0);
	const oauthClientsOwnership = ref("mine");
	const oauthClientTotals = ref({ mine: 0 });
	const oauthClientsPage = ref(0);
	const oauthClientsPageSize = ref(10);
	const oauthClientsFilters = ref({ ...EMPTY_OAUTH_CLIENT_FILTERS });
	/** Total rows matching the filters (across all pages) for the current ownership. */
	const oauthClientsCount = ref(0);
	/** Distinct consent owners for the "Connected by" filter (managers only). */
	const oauthClientOwners = ref([]);
	/** Monotonic token so a slow in-flight list fetch can't overwrite a newer one. */
	let oauthClientsRequestSeq = 0;
	const allowedRedirectUris = ref([]);
	const instanceClientStats = ref(null);
	const connectPopoverOpen = ref(false);
	const mcpAccessEnabled = computed(() => !!settingsStore.moduleSettings.mcp?.mcpAccessEnabled);
	const mcpManagedByEnv = computed(() => !!settingsStore.moduleSettings.mcp?.mcpManagedByEnv);
	const serverUrl = computed(() => settingsStore.moduleSettings.mcp?.serverUrl ?? `${rootStore.urlBaseEditor}mcp-server/http`);
	async function fetchWorkflowsAvailableForMCP(page = 1, pageSize = 50) {
		const { data, count } = await workflowsListStore.fetchWorkflowsPageWithCount(void 0, page, pageSize, "updatedAt:desc", {
			isArchived: false,
			availableInMCP: true
		}, false, false);
		return {
			data: data.filter(isWorkflowListItem),
			count
		};
	}
	async function setMcpAccessEnabled(enabled) {
		const { mcpAccessEnabled: updated } = await updateMcpSettings(rootStore.restApiContext, enabled);
		settingsStore.moduleSettings.mcp = {
			mcpManagedByEnv: false,
			...settingsStore.moduleSettings.mcp ?? {},
			mcpAccessEnabled: updated
		};
		return updated;
	}
	function applyAvailableInMCPToLocalStores(workflowId, availableInMCP) {
		const existing = workflowsListStore.workflowsById[workflowId];
		if (existing) if (existing.settings) existing.settings.availableInMCP = availableInMCP;
		else existing.settings = { availableInMCP };
		useWorkflowDocumentStore(createWorkflowDocumentId(workflowId)).mergeSettings({ availableInMCP });
	}
	async function toggleWorkflowMcpAccess(workflowId, availableInMCP) {
		const response = await toggleWorkflowsMcpAccessApi(rootStore.restApiContext, { workflowIds: [workflowId] }, availableInMCP);
		if (!new Set([...response.updatedIds ?? [], ...response.unchangedIds ?? []]).has(workflowId)) throw new Error(i18n.baseText("workflowSettings.toggleMCP.updateSkippedError", { interpolate: { workflowId } }));
		applyAvailableInMCPToLocalStores(workflowId, availableInMCP);
		return response;
	}
	/**
	* Bulk-toggle MCP availability, scoped by an id list, a project,
	* or a folder (+ descendants)
	*/
	async function toggleWorkflowsMcpAccess(target, availableInMCP) {
		const response = await toggleWorkflowsMcpAccessApi(rootStore.restApiContext, target, availableInMCP);
		const confirmedIds = new Set([...response.updatedIds ?? [], ...response.unchangedIds ?? []]);
		for (const id of confirmedIds) applyAvailableInMCPToLocalStores(id, availableInMCP);
		return response;
	}
	async function getOrCreateApiKey() {
		const apiKey = await fetchApiKey(rootStore.restApiContext);
		currentUserMCPKey.value = apiKey;
		return apiKey;
	}
	async function generateNewApiKey() {
		const apiKey = await rotateApiKey(rootStore.restApiContext);
		currentUserMCPKey.value = apiKey;
		return apiKey;
	}
	function resetCurrentUserMCPKey() {
		currentUserMCPKey.value = null;
	}
	async function getAllOAuthClients() {
		const seq = ++oauthClientsRequestSeq;
		const filters = oauthClientsFilters.value;
		const response = await fetchOAuthClients(rootStore.restApiContext, {
			ownership: oauthClientsOwnership.value,
			skip: oauthClientsPage.value * oauthClientsPageSize.value,
			take: oauthClientsPageSize.value,
			name: filters.search.trim() || void 0,
			ownerId: filters.ownerId ?? void 0,
			type: filters.type ?? void 0,
			connected: filters.connected ?? void 0
		});
		if (seq !== oauthClientsRequestSeq) return response.data;
		if (response.data.length === 0 && response.count > 0 && oauthClientsPage.value > 0) {
			oauthClientsPage.value = Math.max(0, Math.ceil(response.count / oauthClientsPageSize.value) - 1);
			return await getAllOAuthClients();
		}
		oauthClients.value = response.data;
		oauthClientScopeTools.value = response.scopeTools;
		oauthClientTotals.value = response.totals;
		oauthClientsCount.value = response.count;
		oauthClientOwners.value = response.owners ?? [];
		return response.data;
	}
	async function setOAuthClientsOwnership(ownership) {
		oauthClientsOwnership.value = ownership;
		oauthClientsPage.value = 0;
		oauthClientsFilters.value = { ...EMPTY_OAUTH_CLIENT_FILTERS };
		await getAllOAuthClients();
	}
	async function setOAuthClientsFilters(filters) {
		oauthClientsFilters.value = filters;
		oauthClientsPage.value = 0;
		await getAllOAuthClients();
	}
	async function setOAuthClientsPagination(page, pageSize) {
		oauthClientsPage.value = pageSize === oauthClientsPageSize.value ? page : 0;
		oauthClientsPageSize.value = pageSize;
		await getAllOAuthClients();
	}
	async function getInstanceClientStats() {
		try {
			const stats = await fetchInstanceMcpClientStats(rootStore.restApiContext);
			instanceClientStats.value = stats;
			return stats;
		} catch {
			instanceClientStats.value = null;
			return null;
		}
	}
	async function removeOAuthClient(clientId, userId) {
		const response = await deleteOAuthClient(rootStore.restApiContext, clientId, userId);
		try {
			await getAllOAuthClients();
		} catch {}
		return response;
	}
	async function getMcpEligibleWorkflows(options) {
		return await fetchMcpEligibleWorkflows(rootStore.restApiContext, options);
	}
	function openConnectPopover() {
		connectPopoverOpen.value = true;
	}
	function closeConnectPopover() {
		connectPopoverOpen.value = false;
	}
	async function fetchAllowedRedirectUris() {
		const response = await getAllowedRedirectUris(rootStore.restApiContext);
		allowedRedirectUris.value = response.uris;
		return response.uris;
	}
	async function setAllowedRedirectUris(uris) {
		await updateAllowedRedirectUris(rootStore.restApiContext, uris);
		allowedRedirectUris.value = uris;
	}
	return {
		mcpAccessEnabled,
		mcpManagedByEnv,
		serverUrl,
		fetchWorkflowsAvailableForMCP,
		setMcpAccessEnabled,
		toggleWorkflowMcpAccess,
		toggleWorkflowsMcpAccess,
		currentUserMCPKey,
		getOrCreateApiKey,
		generateNewApiKey,
		resetCurrentUserMCPKey,
		oauthClients,
		oauthClientsOwnership,
		oauthClientTotals,
		oauthClientOwners,
		oauthClientsPage,
		oauthClientsPageSize,
		oauthClientsFilters,
		oauthClientsCount,
		setOAuthClientsOwnership,
		setOAuthClientsFilters,
		setOAuthClientsPagination,
		instanceClientStats,
		getAllOAuthClients,
		oauthClientScopeTools,
		getInstanceClientStats,
		removeOAuthClient,
		getMcpEligibleWorkflows,
		allowedRedirectUris,
		fetchAllowedRedirectUris,
		setAllowedRedirectUris,
		connectPopoverOpen,
		openConnectPopover,
		closeConnectPopover
	};
});
//#endregion
export { scopeLabel as a, cursor_default as c, isFullAccessGrant as i, claude_default as l, EMPTY_OAUTH_CLIENT_FILTERS as n, vscode_default as o, getClientBrand as r, openai_default as s, useMCPStore as t };
