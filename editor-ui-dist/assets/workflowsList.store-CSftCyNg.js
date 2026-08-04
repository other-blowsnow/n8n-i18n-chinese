import { It as ref, S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { i as defineStore } from "./constants-CdtkjduR.js";
import { t as STORES } from "./constants2-D6qsHKVK.js";
import { fi as deepCopy } from "./src-CYAJL8H-.js";
import { Xn as makeRestApiRequest, Yn as getFullApiResponse, t as useRootStore } from "./useRootStore-G5KSjJVg.js";
import { r as DEFAULT_SETTINGS } from "./constants-B41t77fU.js";
import { n as useTelemetry } from "./posthog.store-D9oFJCkF.js";
import { f as isPresent, l as isEmpty } from "./typesUtils-Del-Chhd.js";
//#region src/app/api/workflows.ts
async function getNewWorkflow(context, data) {
	const response = await makeRestApiRequest(context, "GET", "/workflows/new", data);
	return {
		name: response.name,
		settings: response.defaultSettings
	};
}
async function getNewWorkflowData(context, name, projectId, parentFolderId) {
	let workflowData = {
		name: "",
		settings: { ...DEFAULT_SETTINGS }
	};
	try {
		const data = {
			name,
			projectId,
			parentFolderId
		};
		workflowData = await getNewWorkflow(context, isEmpty(data) ? void 0 : data);
	} catch (e) {
		workflowData.name = name || "My workflow";
	}
	return workflowData;
}
async function getWorkflow(context, id) {
	return await makeRestApiRequest(context, "GET", `/workflows/${id}`);
}
async function workflowExists(context, id) {
	return await makeRestApiRequest(context, "GET", `/workflows/${id}/exists`);
}
async function getWorkflows(context, filter, options, select) {
	return await getFullApiResponse(context, "GET", "/workflows", {
		includeScopes: true,
		...filter ? { filter } : {},
		...options ? options : {},
		...select ? { select: JSON.stringify(select) } : {}
	});
}
async function getWorkflowsWithNodesIncluded(context, nodeTypes) {
	return await getFullApiResponse(context, "POST", "/workflows/with-node-types", { nodeTypes });
}
async function getWorkflowsAndFolders(context, filter, options, includeFolders, onlySharedWithMe) {
	return await getFullApiResponse(context, "GET", "/workflows", {
		includeScopes: true,
		includeFolders,
		onlySharedWithMe,
		...filter ? { filter } : {},
		...options ? options : {}
	});
}
async function getActiveWorkflows(context) {
	return await makeRestApiRequest(context, "GET", "/active-workflows");
}
async function getExecutionData(context, executionId, queryParams) {
	return await makeRestApiRequest(context, "GET", `/executions/${executionId}`, queryParams);
}
async function getLastSuccessfulExecution(context, workflowId) {
	return await makeRestApiRequest(context, "GET", `/workflows/${workflowId}/executions/last-successful`);
}
async function getWorkflowWriteLock(context, workflowId) {
	return await makeRestApiRequest(context, "GET", `/workflows/${workflowId}/collaboration/write-lock`);
}
//#endregion
//#region src/app/api/favorites.ts
async function getFavorites(context) {
	return await makeRestApiRequest(context, "GET", "/favorites");
}
async function addFavorite(context, resourceId, resourceType) {
	return await makeRestApiRequest(context, "POST", "/favorites", {
		resourceId,
		resourceType
	});
}
async function removeFavorite(context, resourceId, resourceType) {
	return await makeRestApiRequest(context, "DELETE", `/favorites/${resourceType}/${resourceId}`);
}
//#endregion
//#region src/app/stores/favorites.store.ts
var useFavoritesStore = defineStore(STORES.FAVORITES, () => {
	const rootStore = useRootStore();
	const telemetry = useTelemetry();
	const favorites = ref([]);
	const initialized = ref(false);
	const workflowFavoriteIds = computed(() => favorites.value.filter((f) => f.resourceType === "workflow").map((f) => f.resourceId));
	const projectFavoriteIds = computed(() => favorites.value.filter((f) => f.resourceType === "project").map((f) => f.resourceId));
	const dataTableFavoriteIds = computed(() => favorites.value.filter((f) => f.resourceType === "dataTable").map((f) => f.resourceId));
	const folderFavoriteIds = computed(() => favorites.value.filter((f) => f.resourceType === "folder").map((f) => f.resourceId));
	const agentFavoriteIds = computed(() => favorites.value.filter((f) => f.resourceType === "agent").map((f) => f.resourceId));
	async function fetchFavorites() {
		if (initialized.value) return;
		const currentPushRef = rootStore.restApiContext.pushRef;
		const result = await getFavorites(rootStore.restApiContext);
		if (currentPushRef !== rootStore.restApiContext.pushRef) return;
		favorites.value = result;
		initialized.value = true;
	}
	function isFavorite(resourceId, resourceType) {
		return favorites.value.some((f) => f.resourceId === resourceId && f.resourceType === resourceType);
	}
	function renameFavorite(resourceId, resourceType, newName) {
		const favorite = favorites.value.find((f) => f.resourceId === resourceId && f.resourceType === resourceType);
		if (favorite) favorite.resourceName = newName;
	}
	async function toggleFavorite(resourceId, resourceType) {
		if (isFavorite(resourceId, resourceType)) {
			try {
				await removeFavorite(rootStore.restApiContext, resourceId, resourceType);
			} catch (e) {
				if (e.httpStatusCode !== 404) throw e;
			}
			favorites.value = favorites.value.filter((f) => !(f.resourceId === resourceId && f.resourceType === resourceType));
			telemetry.track("User toggled favorite", {
				action: "removed",
				resource_type: resourceType
			});
		} else {
			await addFavorite(rootStore.restApiContext, resourceId, resourceType);
			favorites.value = await getFavorites(rootStore.restApiContext);
			telemetry.track("User toggled favorite", {
				action: "added",
				resource_type: resourceType
			});
		}
	}
	function removeFavoriteLocally(resourceId, resourceType) {
		favorites.value = favorites.value.filter((f) => !(f.resourceId === resourceId && f.resourceType === resourceType));
	}
	function reset() {
		favorites.value = [];
		initialized.value = false;
	}
	return {
		favorites,
		workflowFavoriteIds,
		projectFavoriteIds,
		dataTableFavoriteIds,
		folderFavoriteIds,
		agentFavoriteIds,
		fetchFavorites,
		isFavorite,
		renameFavorite,
		toggleFavorite,
		removeFavoriteLocally,
		reset
	};
});
//#endregion
//#region src/app/stores/workflowsList.store.ts
var ALL_PROJECTS_KEY = "__all_projects__";
var useWorkflowsListStore = defineStore(STORES.WORKFLOWS_LIST, () => {
	const rootStore = useRootStore();
	const totalWorkflowCount = ref(0);
	const workflowsById = ref({});
	const activeWorkflows = ref([]);
	const allWorkflowsFetched = ref(false);
	const allWorkflowsFetchedByProjectKey = ref({});
	const allWorkflows = computed(() => Object.values(workflowsById.value).sort((a, b) => a.name.localeCompare(b.name)));
	function getWorkflowById(id) {
		return workflowsById.value[id];
	}
	function setWorkflows(workflows) {
		workflowsById.value = workflows.reduce((acc, workflow) => {
			if (workflow.id) acc[workflow.id] = workflow;
			return acc;
		}, {});
	}
	function addWorkflow(workflow) {
		workflowsById.value = {
			...workflowsById.value,
			[workflow.id]: {
				...workflowsById.value[workflow.id],
				...deepCopy(workflow)
			}
		};
	}
	function removeWorkflow(id) {
		const { [id]: _, ...workflows } = workflowsById.value;
		workflowsById.value = workflows;
	}
	function updateWorkflowInCache(id, updates) {
		if (workflowsById.value[id]) workflowsById.value[id] = {
			...workflowsById.value[id],
			...updates
		};
	}
	function getAllWorkflowsFetchedKey(projectId) {
		return projectId ?? ALL_PROJECTS_KEY;
	}
	function markAllWorkflowsFetched(projectId) {
		allWorkflowsFetchedByProjectKey.value = {
			...allWorkflowsFetchedByProjectKey.value,
			[getAllWorkflowsFetchedKey(projectId)]: true
		};
	}
	function hasFetchedAllWorkflows(projectId) {
		return Boolean(allWorkflowsFetchedByProjectKey.value[getAllWorkflowsFetchedKey(projectId)]);
	}
	function setWorkflowActiveInCache(targetWorkflowId, activeVersion) {
		if (activeWorkflows.value.indexOf(targetWorkflowId) === -1) activeWorkflows.value.push(targetWorkflowId);
		const cachedWorkflow = workflowsById.value[targetWorkflowId];
		if (cachedWorkflow) {
			cachedWorkflow.active = true;
			cachedWorkflow.activeVersionId = activeVersion.versionId;
			cachedWorkflow.activeVersion = activeVersion;
		}
	}
	function setWorkflowInactiveInCache(targetWorkflowId) {
		const index = activeWorkflows.value.indexOf(targetWorkflowId);
		if (index !== -1) activeWorkflows.value.splice(index, 1);
		const targetWorkflow = workflowsById.value[targetWorkflowId];
		if (targetWorkflow) {
			targetWorkflow.active = false;
			targetWorkflow.activeVersionId = null;
			targetWorkflow.activeVersion = null;
		}
	}
	async function fetchWorkflowsPageWithCount(projectId, page = 1, pageSize = 50, sortBy, filters = {}, includeFolders = false, onlySharedWithMe = false) {
		const filter = {
			...filters,
			projectId
		};
		const options = {
			skip: (page - 1) * pageSize,
			take: pageSize,
			sortBy
		};
		const { count, data } = await getWorkflowsAndFolders(rootStore.restApiContext, Object.keys(filter).length ? filter : void 0, Object.keys(options).length ? options : void 0, includeFolders ? includeFolders : void 0, onlySharedWithMe ? onlySharedWithMe : void 0);
		totalWorkflowCount.value = count;
		data.filter((item) => item.resource !== "folder").forEach((item) => {
			addWorkflow({
				...item,
				nodes: [],
				connections: {},
				versionId: ""
			});
		});
		return {
			data,
			count
		};
	}
	async function fetchWorkflowsPage(projectId, page = 1, pageSize = 50, sortBy, filters = {}, includeFolders = false, onlySharedWithMe = false) {
		const { data } = await fetchWorkflowsPageWithCount(projectId, page, pageSize, sortBy, filters, includeFolders, onlySharedWithMe);
		return data;
	}
	async function searchWorkflows({ projectId, query, nodeTypes, tags, select, isArchived, triggerNodeTypes }) {
		const filter = {
			projectId,
			query,
			nodeTypes,
			tags,
			isArchived,
			triggerNodeTypes
		};
		const hasFilter = Object.values(filter).some((v) => isPresent(v) && (Array.isArray(v) ? v.length > 0 : v !== ""));
		const { data: workflows } = await getWorkflows(rootStore.restApiContext, hasFilter ? filter : void 0, void 0, select);
		return workflows;
	}
	async function fetchAllWorkflows(projectId) {
		const workflows = await searchWorkflows({ projectId });
		setWorkflows(workflows);
		allWorkflowsFetched.value = true;
		markAllWorkflowsFetched(projectId);
		return workflows;
	}
	async function fetchWorkflow(id) {
		const workflowData = await getWorkflow(rootStore.restApiContext, id);
		addWorkflow(workflowData);
		return workflowData;
	}
	async function fetchWorkflowsWithNodesIncluded(nodeTypes) {
		return await getWorkflowsWithNodesIncluded(rootStore.restApiContext, nodeTypes);
	}
	async function fetchActiveWorkflows() {
		const data = await getActiveWorkflows(rootStore.restApiContext);
		activeWorkflows.value = data;
		return data;
	}
	async function checkWorkflowExists(id) {
		return (await workflowExists(rootStore.restApiContext, id)).exists;
	}
	async function deleteWorkflow(id) {
		await makeRestApiRequest(rootStore.restApiContext, "DELETE", `/workflows/${id}`);
		removeWorkflow(id);
		useFavoritesStore().removeFavoriteLocally(id, "workflow");
	}
	async function archiveWorkflowInList(id, expectedChecksum) {
		const updatedWorkflow = await makeRestApiRequest(rootStore.restApiContext, "POST", `/workflows/${id}/archive`, { expectedChecksum });
		if (!updatedWorkflow.checksum) throw new Error("Failed to archive workflow");
		if (workflowsById.value[id]) {
			workflowsById.value[id].isArchived = true;
			workflowsById.value[id].versionId = updatedWorkflow.versionId;
		}
		setWorkflowInactiveInCache(id);
		return updatedWorkflow;
	}
	async function unarchiveWorkflowInList(id) {
		const updatedWorkflow = await makeRestApiRequest(rootStore.restApiContext, "POST", `/workflows/${id}/unarchive`);
		if (!updatedWorkflow.checksum) throw new Error("Failed to unarchive workflow");
		if (workflowsById.value[id]) {
			workflowsById.value[id].isArchived = false;
			workflowsById.value[id].versionId = updatedWorkflow.versionId;
		}
		return updatedWorkflow;
	}
	return {
		totalWorkflowCount,
		workflowsById,
		activeWorkflows,
		allWorkflowsFetched,
		allWorkflows,
		getWorkflowById,
		setWorkflows,
		addWorkflow,
		removeWorkflow,
		updateWorkflowInCache,
		hasFetchedAllWorkflows,
		setWorkflowActiveInCache,
		setWorkflowInactiveInCache,
		fetchWorkflowsPageWithCount,
		fetchWorkflowsPage,
		searchWorkflows,
		fetchAllWorkflows,
		fetchWorkflow,
		fetchWorkflowsWithNodesIncluded,
		fetchActiveWorkflows,
		checkWorkflowExists,
		deleteWorkflow,
		archiveWorkflowInList,
		unarchiveWorkflowInList
	};
});
//#endregion
export { getNewWorkflow as a, getWorkflowWriteLock as c, getLastSuccessfulExecution as i, getWorkflows as l, useFavoritesStore as n, getNewWorkflowData as o, getExecutionData as r, getWorkflow as s, useWorkflowsListStore as t, getWorkflowsAndFolders as u };
