import { It as ref, S as computed } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { w as TEMPLATES_URLS } from "./constants-Xm8Zfd-h.js";
import { Kr as getNodesWithNormalizedPosition } from "./workflowDocument.store-mqNoI-h2.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-Crb5JJ4G.js";
import { Fn as getCollections, In as getTemplateById, Ln as getWorkflowTemplate, Nn as getCategories, Pn as getCollectionById, Rn as getWorkflows, t as useSettingsStore, zn as STORES } from "./settings.store-DKCHFcby.js";
import { t as useUsersStore } from "./users.store-B52ADdpG.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-CS9tCvfU.js";
import { t as useWorkflowsListStore } from "./workflowsList.store-DJoKe7hf.js";
import { r as getTemplatePathByRole } from "./utils-De5DacqU.js";
//#region src/features/workflows/templates/templates.store.ts
var TEMPLATES_PAGE_SIZE = 20;
function getSearchKey(query) {
	return JSON.stringify([query.search || "", [...query.categories].sort()]);
}
var useTemplatesStore = defineStore(STORES.TEMPLATES, () => {
	const categories = ref([]);
	const collections = ref({});
	const workflows = ref({});
	const workflowSearches = ref({});
	const collectionSearches = ref({});
	const currentSessionId = ref("");
	const previousSessionId = ref("");
	const currentN8nPath = ref(`${window.location.protocol}//${window.location.host}${window.BASE_PATH}`);
	const settingsStore = useSettingsStore();
	const rootStore = useRootStore();
	const userStore = useUsersStore();
	const cloudPlanStore = useCloudPlanStore();
	const workflowsListStore = useWorkflowsListStore();
	const allCategories = computed(() => {
		return categories.value.sort((a, b) => a.name > b.name ? 1 : -1);
	});
	const getTemplatesById = computed(() => {
		return (id) => workflows.value[id];
	});
	const getFullTemplateById = computed(() => {
		return (id) => {
			const template = workflows.value[id];
			return template && "full" in template && template.full ? template : null;
		};
	});
	const getCollectionById$1 = computed(() => collections.value);
	const getCategoryById = computed(() => {
		return (id) => categories.value[id];
	});
	const getSearchedCollections = computed(() => {
		return (query) => {
			const searchKey = getSearchKey(query);
			const search = collectionSearches.value[searchKey];
			if (!search) return null;
			return search.collectionIds.map((collectionId) => collections.value[collectionId]);
		};
	});
	const getSearchedWorkflows = computed(() => {
		return (query) => {
			const searchKey = getSearchKey(query);
			const search = workflowSearches.value[searchKey];
			if (!search) return null;
			return search.workflowIds.map((workflowId) => workflows.value[workflowId]);
		};
	});
	const getSearchedWorkflowsTotal = computed(() => {
		return (query) => {
			const searchKey = getSearchKey(query);
			const search = workflowSearches.value[searchKey];
			return search ? search.totalWorkflows : 0;
		};
	});
	const isSearchLoadingMore = computed(() => {
		return (query) => {
			const searchKey = getSearchKey(query);
			const search = workflowSearches.value[searchKey];
			return Boolean(search?.loadingMore);
		};
	});
	const isSearchFinished = computed(() => {
		return (query) => {
			const searchKey = getSearchKey(query);
			const search = workflowSearches.value[searchKey];
			return Boolean(search && !search.loadingMore && search.totalWorkflows === search.workflowIds.length);
		};
	});
	const hasCustomTemplatesHost = computed(() => {
		return settingsStore.templatesHost !== TEMPLATES_URLS.DEFAULT_API_HOST;
	});
	const userRole = computed(() => cloudPlanStore.currentUserCloudInfo?.role ?? (userStore.currentUser?.personalizationAnswers && "role" in userStore.currentUser.personalizationAnswers ? userStore.currentUser.personalizationAnswers.role : void 0));
	const websiteTemplateRepositoryParameters = computed(() => {
		const defaultParameters = {
			...TEMPLATES_URLS.UTM_QUERY,
			utm_instance: currentN8nPath.value,
			utm_n8n_version: rootStore.versionCli,
			utm_awc: String(workflowsListStore.activeWorkflows.length)
		};
		if (userRole.value) defaultParameters.utm_user_role = userRole.value;
		return new URLSearchParams({ ...defaultParameters });
	});
	const websiteTemplateRepositoryURL = computed(() => `${TEMPLATES_URLS.BASE_WEBSITE_URL}${getTemplatePathByRole(userRole.value)}?${websiteTemplateRepositoryParameters.value.toString()}`);
	const constructTemplateRepositoryURL = (params, category) => {
		return `${category ? `${TEMPLATES_URLS.BASE_WEBSITE_URL}${category}` : TEMPLATES_URLS.BASE_WEBSITE_URL}?${params.toString()}`;
	};
	const addCategories = (_categories) => {
		categories.value = _categories;
	};
	const addCollections = (_collections) => {
		_collections.forEach((collection) => {
			const workflows = (collection.workflows || []).map((workflow) => ({ id: workflow.id }));
			const cachedCollection = collections.value[collection.id] || {};
			collections.value[collection.id] = {
				...cachedCollection,
				...collection,
				workflows
			};
		});
	};
	const addWorkflows = (_workflows) => {
		_workflows.forEach((workflow) => {
			const cachedWorkflow = workflows.value[workflow.id] || {};
			workflows.value[workflow.id.toString()] = {
				...cachedWorkflow,
				...workflow
			};
		});
	};
	const addCollectionsSearch = (data) => {
		const collectionIds = data._collections.map((collection) => String(collection.id));
		const searchKey = getSearchKey(data.query);
		collectionSearches.value[searchKey] = { collectionIds };
	};
	const addWorkflowsSearch = (data) => {
		const workflowIds = data.workflows.map((workflow) => workflow.id);
		const searchKey = getSearchKey(data.query);
		const cachedResults = workflowSearches.value[searchKey];
		if (!cachedResults) {
			workflowSearches.value[searchKey] = {
				workflowIds,
				totalWorkflows: data.totalWorkflows,
				categories: categories.value
			};
			return;
		}
		workflowSearches.value[searchKey] = {
			workflowIds: [...cachedResults.workflowIds, ...workflowIds],
			totalWorkflows: data.totalWorkflows,
			categories: categories.value
		};
	};
	const setWorkflowSearchLoading = (query) => {
		const searchKey = getSearchKey(query);
		if (!workflowSearches.value[searchKey]) return;
		workflowSearches.value[searchKey] = {
			...workflowSearches.value[searchKey],
			loadingMore: true
		};
	};
	const setWorkflowSearchLoaded = (query) => {
		const searchKey = getSearchKey(query);
		if (!workflowSearches.value[searchKey]) return;
		workflowSearches.value[searchKey] = {
			...workflowSearches.value[searchKey],
			loadingMore: false
		};
	};
	const resetSessionId = () => {
		previousSessionId.value = currentSessionId.value;
		currentSessionId.value = "";
	};
	const setSessionId = () => {
		if (!currentSessionId.value) currentSessionId.value = `templates-${Date.now()}`;
	};
	const fetchTemplateById = async (templateId) => {
		const apiEndpoint = settingsStore.templatesHost;
		const versionCli = rootStore.versionCli;
		const template = {
			...(await getTemplateById(apiEndpoint, templateId, { "n8n-version": versionCli })).workflow,
			full: true
		};
		addWorkflows([template]);
		return template;
	};
	const fetchCollectionById = async (collectionId) => {
		const apiEndpoint = settingsStore.templatesHost;
		const versionCli = rootStore.versionCli;
		const response = await getCollectionById(apiEndpoint, collectionId, { "n8n-version": versionCli });
		addCollections([{
			...response.collection,
			full: true
		}]);
		addWorkflows(response.collection.workflows);
		return getCollectionById$1.value[collectionId];
	};
	const getCategories$1 = async () => {
		const cachedCategories = allCategories.value;
		if (cachedCategories.length) return cachedCategories;
		const apiEndpoint = settingsStore.templatesHost;
		const versionCli = rootStore.versionCli;
		const categories = (await getCategories(apiEndpoint, { "n8n-version": versionCli })).categories;
		addCategories(categories);
		return categories;
	};
	const getCollections$1 = async (query) => {
		const cachedResults = getSearchedCollections.value(query);
		if (cachedResults) return cachedResults;
		const apiEndpoint = settingsStore.templatesHost;
		const versionCli = rootStore.versionCli;
		const collections = (await getCollections(apiEndpoint, query, { "n8n-version": versionCli })).collections;
		addCollections(collections);
		addCollectionsSearch({
			query,
			_collections: collections
		});
		collections.forEach((collection) => addWorkflows(collection.workflows));
		return collections;
	};
	const getWorkflows$1 = async (query) => {
		const cachedResults = getSearchedWorkflows.value(query);
		if (cachedResults) {
			categories.value = workflowSearches.value[getSearchKey(query)].categories ?? [];
			return cachedResults;
		}
		const apiEndpoint = settingsStore.templatesHost;
		const versionCli = rootStore.versionCli;
		const payload = await getWorkflows(apiEndpoint, {
			...query,
			page: 1,
			limit: TEMPLATES_PAGE_SIZE
		}, { "n8n-version": versionCli });
		addWorkflows(payload.workflows);
		addWorkflowsSearch({
			...payload,
			query
		});
		return getSearchedWorkflows.value(query) || [];
	};
	const getMoreWorkflows = async (query) => {
		if (isSearchLoadingMore.value(query) && !isSearchFinished.value(query)) return [];
		const cachedResults = getSearchedWorkflows.value(query) || [];
		const apiEndpoint = settingsStore.templatesHost;
		setWorkflowSearchLoading(query);
		try {
			const payload = await getWorkflows(apiEndpoint, {
				...query,
				page: cachedResults.length / TEMPLATES_PAGE_SIZE + 1,
				limit: TEMPLATES_PAGE_SIZE
			});
			setWorkflowSearchLoaded(query);
			addWorkflows(payload.workflows);
			addWorkflowsSearch({
				...payload,
				query
			});
			return getSearchedWorkflows.value(query) || [];
		} catch (e) {
			setWorkflowSearchLoaded(query);
			throw e;
		}
	};
	const getWorkflowTemplate$1 = async (templateId) => {
		const apiEndpoint = settingsStore.templatesHost;
		const versionCli = rootStore.versionCli;
		return await getWorkflowTemplate(apiEndpoint, templateId, { "n8n-version": versionCli });
	};
	const getFixedWorkflowTemplate = async (templateId) => {
		const template = await getWorkflowTemplate$1(templateId);
		if (template?.workflow?.nodes) {
			template.workflow.nodes = getNodesWithNormalizedPosition(template.workflow.nodes);
			template.workflow.nodes?.forEach((node) => {
				if (node.credentials) delete node.credentials;
			});
		}
		return template;
	};
	return {
		categories,
		collections,
		workflows,
		workflowSearches,
		collectionSearches,
		currentSessionId,
		previousSessionId,
		currentN8nPath,
		allCategories,
		getTemplatesById,
		getFullTemplateById,
		getCollectionById: getCollectionById$1,
		getCategoryById,
		getSearchedCollections,
		getSearchedWorkflows,
		getSearchedWorkflowsTotal,
		isSearchLoadingMore,
		isSearchFinished,
		hasCustomTemplatesHost,
		websiteTemplateRepositoryURL,
		constructTemplateRepositoryURL,
		websiteTemplateRepositoryParameters,
		addCategories,
		addCollections,
		addWorkflows,
		addCollectionsSearch,
		addWorkflowsSearch,
		setWorkflowSearchLoading,
		setWorkflowSearchLoaded,
		resetSessionId,
		setSessionId,
		fetchTemplateById,
		fetchCollectionById,
		getCategories: getCategories$1,
		getCollections: getCollections$1,
		getWorkflows: getWorkflows$1,
		getMoreWorkflows,
		getWorkflowTemplate: getWorkflowTemplate$1,
		getFixedWorkflowTemplate
	};
});
//#endregion
export { useTemplatesStore as t };
