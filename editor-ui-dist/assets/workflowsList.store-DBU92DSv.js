import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { It as ref, S as computed } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { Ic as jsonParse, Nc as deepCopy, r as DEFAULT_SETTINGS } from "./constants-DzzWpyjZ.js";
import { T as defineStore, c as makeRestApiRequest, s as getFullApiResponse, t as useRootStore } from "./useRootStore-C7jLo3fI.js";
import { zn as STORES } from "./settings.store-DmallR-B.js";
import { p as useTelemetry } from "./users.store-CUxYM5yQ.js";
import { t as require_dateformat } from "./dateformat-9ZHpj92n.js";
//#region src/app/utils/objectUtils.ts
function isDateObject(maybeDate) {
	return maybeDate instanceof Date;
}
function isObjectOrArray(maybeObject) {
	return typeof maybeObject === "object" && maybeObject !== null && !isDateObject(maybeObject);
}
function isObject(maybeObject) {
	return isObjectOrArray(maybeObject) && !Array.isArray(maybeObject);
}
function isStringArray(maybeArray) {
	return Array.isArray(maybeArray) && maybeArray.every((item) => typeof item === "string");
}
function isStringArrayRecord(value) {
	return isObject(value) && Object.values(value).every(isStringArray);
}
var searchInObject = (obj, searchString) => (Array.isArray(obj) ? obj : Object.entries(obj)).some((entry) => isObjectOrArray(entry) ? searchInObject(entry, searchString) : entry?.toString().toLowerCase().includes(searchString.toLowerCase()));
/**
* Calculate the size of a stringified object in KB.
* @param {unknown} obj - The object to calculate the size of
* @returns {number} The size of the object in KB
* @throws {Error} If the object is not serializable
*/
var getObjectSizeInKB = (obj) => {
	if (obj === null || obj === void 0) return 0;
	if (typeof obj === "object" && Object.keys(obj).length === 0 || Array.isArray(obj) && obj.length === 0) return Number((2 / 1024).toFixed(2));
	try {
		const str = JSON.stringify(obj);
		const kb = new TextEncoder().encode(str).length / 1024;
		return Number(kb.toFixed(2));
	} catch (error) {
		throw new Error(`Failed to calculate object size: ${error instanceof Error ? error.message : "Unknown error"}`);
	}
};
function omitKey(obj, key) {
	return Object.fromEntries(Object.entries(obj).filter(([k]) => k !== key));
}
//#endregion
//#region src/app/utils/typesUtils.ts
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var SI_SYMBOL = [
	"",
	"k",
	"M",
	"G",
	"T",
	"P",
	"E"
];
var omit = (keyToOmit, { [keyToOmit]: _, ...remainder }) => remainder;
function isJsonKeyObject(item) {
	if (!isObject(item)) return false;
	return Object.keys(item).includes("json");
}
var isEmpty = (value) => {
	if (!value && value !== 0) return true;
	if (Array.isArray(value)) return !value.length || value.every(isEmpty);
	if (typeof value === "object") return !Object.keys(value).length || Object.values(value).every(isEmpty);
	return false;
};
function abbreviateNumber(num) {
	const tier = Math.log10(Math.abs(num)) / 3 | 0;
	if (tier === 0) return num;
	const suffix = SI_SYMBOL[tier];
	const scaled = num / Math.pow(10, tier * 3);
	return Number(scaled.toFixed(1)) + suffix;
}
function convertToDisplayDate(epochTime) {
	return (0, import_dateformat.default)(epochTime, "yyyy-mm-dd HH:MM:ss");
}
function convertToHumanReadableDate(epochTime) {
	return (0, import_dateformat.default)(epochTime, "d mmmm, yyyy @ HH:MM Z");
}
function stringSizeInBytes(input) {
	if (input === void 0) return 0;
	return new Blob([typeof input === "string" ? input : JSON.stringify(input)]).size;
}
function toMegaBytes(bytes, decimalPlaces = 2) {
	const megabytes = bytes / 1024 / 1024;
	return parseFloat(megabytes.toFixed(decimalPlaces));
}
function formatBytes(sizeInBytes) {
	if (sizeInBytes < 1024) return `${sizeInBytes}B`;
	if (sizeInBytes < 1024 * 1024) return `${Math.round(sizeInBytes / 1024)}KB`;
	return `${Math.round(sizeInBytes / (1024 * 1024))}MB`;
}
function shorten(s, limit, keep) {
	if (s.length <= limit) return s;
	return `${s.slice(0, limit - keep)}...${s.slice(s.length - keep, s.length)}`;
}
var convertPath = (path) => {
	const placeholder = "*___~#^#~___*";
	let inBrackets = path.match(/\[(.*?)]/g) ?? [];
	inBrackets = inBrackets.map((item) => item.slice(1, -1)).map((item) => {
		if (item.startsWith("\"") && item.endsWith("\"")) return item.slice(1, -1);
		return item;
	});
	const pathParts = path.replace(/\[(.*?)]/g, placeholder).split(".");
	const allParts = [];
	pathParts.forEach((part) => {
		let index = part.indexOf(placeholder);
		while (index !== -1) {
			if (index === 0) {
				allParts.push(inBrackets.shift() ?? "");
				part = part.substr(13);
			} else {
				allParts.push(part.substr(0, index));
				part = part.substr(index);
			}
			index = part.indexOf(placeholder);
		}
		if (part !== "") allParts.push(part);
	});
	return "[\"" + allParts.join("\"][\"") + "\"]";
};
var clearJsonKey = (userInput) => {
	const parsedUserInput = typeof userInput === "string" ? jsonParse(userInput) : userInput;
	if (!Array.isArray(parsedUserInput)) return parsedUserInput;
	return parsedUserInput.map((item) => isJsonKeyObject(item) ? item.json : item);
};
/**
* Converts a string to a number if possible. If not it returns the original string.
* For a string to be converted to a number it has to contain only digits.
* @param value The value to convert to a number
*/
var tryToParseNumber = (value) => {
	return isNaN(+value) ? value : +value;
};
function isPresent(arg) {
	return arg !== null && arg !== void 0;
}
function isFocusableEl(el) {
	return typeof el === "object" && el !== null && "focus" in el && typeof el.focus === "function";
}
function isBlurrableEl(el) {
	return typeof el === "object" && el !== null && "blur" in el && typeof el.blur === "function";
}
function isSelectableEl(el) {
	return typeof el === "object" && el !== null && "select" in el && typeof el.select === "function";
}
function hasFocusOnInput(el) {
	return typeof el === "object" && el !== null && "focusOnInput" in el && typeof el.focusOnInput === "function";
}
//#endregion
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
var useWorkflowsListStore = defineStore(STORES.WORKFLOWS_LIST, () => {
	const rootStore = useRootStore();
	const totalWorkflowCount = ref(0);
	const workflowsById = ref({});
	const activeWorkflows = ref([]);
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
		allWorkflows,
		getWorkflowById,
		setWorkflows,
		addWorkflow,
		removeWorkflow,
		updateWorkflowInCache,
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
export { isObject as A, isSelectableEl as C, toMegaBytes as D, stringSizeInBytes as E, omitKey as M, searchInObject as N, tryToParseNumber as O, isPresent as S, shorten as T, hasFocusOnInput as _, getNewWorkflow as a, isFocusableEl as b, getWorkflowWriteLock as c, abbreviateNumber as d, clearJsonKey as f, formatBytes as g, convertToHumanReadableDate as h, getLastSuccessfulExecution as i, isStringArrayRecord as j, getObjectSizeInKB as k, getWorkflows as l, convertToDisplayDate as m, useFavoritesStore as n, getNewWorkflowData as o, convertPath as p, getExecutionData as r, getWorkflow as s, useWorkflowsListStore as t, getWorkflowsAndFolders as u, isBlurrableEl as v, omit as w, isJsonKeyObject as x, isEmpty as y };
