import { I as h, It as ref, S as computed, q as onBeforeUnmount } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-H3H6Z9UB.js";
import { d as useMessage } from "./src-D0J2qzpK.js";
import { f as __vitePreload } from "./get-BjwPXRmI.js";
import { c as sanitizeHtml } from "./htmlUtils-FADs2so2.js";
import { t as useToast } from "./useToast-CL5w_AIp.js";
import { dn as useProjectsStore, vt as useCredentialsStore, w as injectWorkflowDocumentStore } from "./workflows.store-WmGfSEo0.js";
import { Xn as makeRestApiRequest, t as useRootStore } from "./useRootStore-G5KSjJVg.js";
import { t as useSettingsStore } from "./settings.store-i6-hO8_O.js";
import "./settings.store-BA5qZE9o.js";
import { t as useUsersStore } from "./users.store-BqJZ4Qgp.js";
import "./constants-B41t77fU.js";
import { n as useTelemetry } from "./posthog.store-D9oFJCkF.js";
import "./useMessage-Sby-LxGy.js";
import { t as useCredentialOAuth } from "./useCredentialOAuth-eUcEJ5Lj.js";
import { E as listAgentsPage, d as getAgent } from "./useAgentApi-yjeRrdO9.js";
//#region src/features/credentials/quickConnect/quickConnect.api.ts
async function getQuickConnectApiKey(context, { quickConnectType }) {
	return await makeRestApiRequest(context, "POST", "/quick-connect", { quickConnectType });
}
//#endregion
//#region src/features/credentials/quickConnect/composables/useQuickConnect.ts
function useQuickConnect() {
	const settingsStore = useSettingsStore();
	const telemetry = useTelemetry();
	const message = useMessage();
	const toast = useToast();
	const i18n = useI18n();
	const credentialsStore = useCredentialsStore();
	const projectsStore = useProjectsStore();
	const rootStore = useRootStore();
	const usersStore = useUsersStore();
	const loading = ref(false);
	const { isOAuthCredentialType, createAndAuthorize, cancelAuthorize } = useCredentialOAuth();
	const cleanUpHandlers = [];
	const optionsByCredentialType = computed(() => {
		const map = /* @__PURE__ */ new Map();
		for (const option of settingsStore.moduleSettings["quick-connect"]?.options ?? []) map.set(option.credentialType, option);
		return map;
	});
	const optionsByPackageName = computed(() => {
		const map = /* @__PURE__ */ new Map();
		for (const option of settingsStore.moduleSettings["quick-connect"]?.options ?? []) if (!map.has(option.packageName)) map.set(option.packageName, option);
		return map;
	});
	function getQuickConnectOption(credentialType, nodeType) {
		if (optionsByCredentialType.value.size === 0) return;
		const option = optionsByCredentialType.value.get(credentialType);
		if (!option) return void 0;
		const pkg = nodeType.split(".")[0];
		return option.packageName.split(".")[0] === pkg ? option : void 0;
	}
	function getQuickConnectOptionByPackageName(packageName) {
		if (optionsByPackageName.value.size === 0) return;
		return optionsByPackageName.value.get(packageName);
	}
	function getQuickConnectOptionByCredentialTypes(credentialTypes) {
		if (optionsByCredentialType.value.size === 0) return;
		for (const type of credentialTypes) {
			const option = optionsByCredentialType.value.get(type);
			if (option) return option;
		}
	}
	async function connectToPinecone(quickConnectOption) {
		const { ConnectPopup } = await __vitePreload(async () => {
			const { ConnectPopup } = await import("./dist-ByrqpQXk.js");
			return { ConnectPopup };
		}, []);
		return await new Promise((resolve) => {
			const popup = ConnectPopup({
				onConnect: ({ key }) => resolve({ apiKey: key }),
				onCancel: () => resolve(null),
				integrationId: String(quickConnectOption.config.integrationId)
			});
			popup.open();
			cleanUpHandlers.push(() => popup.cleanup());
		});
	}
	async function connectViaBackendFlow(quickConnectOption) {
		loading.value = true;
		return await getQuickConnectApiKey(rootStore.restApiContext, quickConnectOption);
	}
	async function getCredentialData(quickConnectOption) {
		switch (quickConnectOption.quickConnectType) {
			case "pinecone": return await connectToPinecone(quickConnectOption);
			case "firecrawl": return await connectViaBackendFlow(quickConnectOption);
			default: throw new Error(`Quick connect for type ${quickConnectOption.quickConnectType} is not implemented`);
		}
	}
	function cleanUpDanglingHandlers() {
		cleanUpHandlers.splice(0, cleanUpHandlers.length).forEach((handler) => {
			try {
				handler();
			} catch {}
		});
	}
	onBeforeUnmount(cleanUpDanglingHandlers);
	function replaceUserData(text) {
		const currentUser = usersStore.currentUser;
		if (currentUser) return [
			"email",
			"firstName",
			"fullName",
			"lastName"
		].reduce((result, key) => {
			return result.replaceAll(`{user.${key}}`, currentUser[key] ?? "");
		}, text);
		return text;
	}
	async function connect(connectParams) {
		cleanUpDanglingHandlers();
		const { credentialTypeName, nodeType, source } = connectParams;
		telemetry.track("User clicked quick connect button", {
			source,
			credential_type: credentialTypeName,
			node_type: nodeType
		});
		if (isOAuthCredentialType(credentialTypeName)) return await createAndAuthorize(credentialTypeName, nodeType);
		const quickConnectOption = getQuickConnectOption(credentialTypeName, nodeType);
		if (quickConnectOption) {
			const credentialType = credentialsStore.getCredentialTypeByName(credentialTypeName);
			if (!credentialType) return null;
			try {
				if (quickConnectOption.consentText) {
					if (await message.confirm(h("span", { innerHTML: sanitizeHtml(replaceUserData(quickConnectOption.consentText)) }), i18n.baseText("nodeCredentials.quickConnect.connectTo", { interpolate: { provider: connectParams.serviceName } }), {
						customClass: "wide",
						confirmButtonText: i18n.baseText("nodeCredentials.quickConnect.consent.confirm"),
						cancelButtonText: i18n.baseText("nodeCredentials.quickConnect.consent.cancel"),
						confirmationCheckboxMessage: quickConnectOption.consentCheckbox ? h("span", { innerHTML: sanitizeHtml(quickConnectOption.consentCheckbox) }) : void 0
					}) !== "confirm") return null;
				}
				const credentialData = await getCredentialData(quickConnectOption);
				if (!credentialData) return null;
				return await credentialsStore.createNewCredential({
					id: "",
					name: credentialType.displayName,
					type: credentialTypeName,
					data: {
						...credentialData,
						allowedHttpRequestDomains: "none"
					}
				}, projectsStore.currentProject?.id);
			} catch (error) {
				toast.showError(error, i18n.baseText("credentialEdit.credentialEdit.showError.createCredential.title"));
				return null;
			} finally {
				loading.value = false;
				cleanUpDanglingHandlers();
			}
		}
		return null;
	}
	return {
		loading,
		getQuickConnectOption,
		getQuickConnectOptionByPackageName,
		getQuickConnectOptionByCredentialTypes,
		connect,
		cancelConnect: cancelAuthorize
	};
}
//#endregion
//#region src/features/ndv/parameters/composables/useAgentResourcesLocator.ts
var PAGE_SIZE = 40;
/**
* Paged, searchable agent catalog for the NDV agent picker. Scoped to the
* workflow's project via `listAgentsPage` so the picker only lists agents that
* execution can resolve. Caches display names so a selected agent that isn't on
* the current page still renders by name.
*/
function useAgentResourcesLocator(projectId, resolveProjectName) {
	const rootStore = useRootStore();
	const agentsResources = ref([]);
	const isLoadingResources = ref(true);
	const loadError = ref(null);
	const searchFilter = ref("");
	const currentPage = ref(0);
	const totalCount = ref(0);
	const nameCache = /* @__PURE__ */ new Map();
	let loadGeneration = 0;
	const hasMoreAgentsToLoad = computed(() => totalCount.value > agentsResources.value.length);
	function constructName(agent) {
		const projectName = resolveProjectName(agent.projectId);
		return projectName ? `${projectName} — ${agent.name}` : agent.name;
	}
	function agentToResourceMapper(agent) {
		const name = constructName(agent);
		nameCache.set(agent.id, name);
		return {
			name,
			value: agent.id,
			personalisation: agent.schema?.personalisation ?? null
		};
	}
	function getAgentName(id) {
		return nameCache.get(id) ?? id;
	}
	async function fetchPage(skip) {
		const options = {
			skip,
			take: PAGE_SIZE,
			sortBy: "updatedAt:desc"
		};
		if (searchFilter.value) options.filter = { query: searchFilter.value };
		return await listAgentsPage(rootStore.restApiContext, projectId.value, options);
	}
	async function loadPage(reset) {
		if (reset) {
			currentPage.value = 0;
			loadGeneration++;
			isLoadingResources.value = true;
			loadError.value = null;
		}
		const generation = loadGeneration;
		if (!projectId.value) {
			if (reset) {
				agentsResources.value = [];
				totalCount.value = 0;
				isLoadingResources.value = false;
			}
			return;
		}
		const skip = currentPage.value * PAGE_SIZE;
		currentPage.value++;
		try {
			const { count, data } = await fetchPage(skip);
			if (generation !== loadGeneration) return;
			loadError.value = null;
			totalCount.value = count;
			const mapped = data.map(agentToResourceMapper);
			if (reset) agentsResources.value = mapped;
			else agentsResources.value.push(...mapped);
		} catch (error) {
			if (generation !== loadGeneration) return;
			if (!reset) currentPage.value--;
			loadError.value = error;
		} finally {
			if (reset && generation === loadGeneration) isLoadingResources.value = false;
		}
	}
	async function setAgentsResources() {
		await loadPage(true);
	}
	async function refreshAgentName(id) {
		if (!projectId.value) return null;
		try {
			return agentToResourceMapper(await getAgent(rootStore.restApiContext, projectId.value, id)).name;
		} catch {
			return null;
		}
	}
	async function onSearchFilter(filter) {
		searchFilter.value = filter;
		await loadPage(true);
	}
	async function loadMore() {
		await loadPage(false);
	}
	return {
		agentsResources,
		isLoadingResources,
		loadError,
		hasMoreAgentsToLoad,
		searchFilter,
		onSearchFilter,
		getAgentName,
		loadMore,
		setAgentsResources,
		refreshAgentName
	};
}
//#endregion
//#region src/features/agents/composables/useAgentProjectNameResolver.ts
/**
* Resolves a project's display name from the stores agent surfaces already
* have loaded, so per-agent project subtitles stay consistent with the
* project scope the agent catalog is queried against.
*/
function useAgentProjectNameResolver() {
	const projectStore = useProjectsStore();
	function findProject(id) {
		if (!id) return null;
		if (projectStore.currentProject?.id === id) return projectStore.currentProject;
		if (projectStore.personalProject?.id === id) return projectStore.personalProject;
		return projectStore.myProjects.find((candidate) => candidate.id === id) ?? null;
	}
	function resolveProjectName(id) {
		if (!projectStore.isTeamProjectFeatureEnabled) return null;
		const project = findProject(id);
		if (!project || project.type === "personal") return null;
		return project.name ?? null;
	}
	return { resolveProjectName };
}
//#endregion
//#region src/features/agents/composables/useAgentScopeProjectId.ts
/**
* Project scope for reading/writing the agent referenced from a workflow.
*
* Every surface that touches the referenced agent (the picker, the canvas
* agent card, the NDV orchestrator) MUST resolve the same project so they all
* read/write the same agent record. Falls back to the workflow's home project
* (shared personal workflows have no `currentProject`) and finally the
* personal project, mirroring how execution resolves the agent's owning
* project.
*/
function useAgentScopeProjectId() {
	const projectsStore = useProjectsStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	return computed(() => projectsStore.currentProjectId ?? workflowDocumentStore.value?.homeProject?.id ?? projectsStore.personalProject?.id ?? "");
}
//#endregion
export { useQuickConnect as i, useAgentProjectNameResolver as n, useAgentResourcesLocator as r, useAgentScopeProjectId as t };
