import { It as ref, S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ot as useI18n } from "./core-CPznNyVT.js";
import { Ct as useRoute, wt as useRouter } from "./src-bSQwfFcX.js";
import { t as useToast } from "./useToast-B3_HjF9W.js";
import { Cs as safeParseWorkflowStructure, Qd as EnterpriseEditionFeature, Ss as WorkflowStructureValidationError, hi as VIEWS, ud as WorkflowDocumentStoreKey } from "./constants-CSBjw1Ht.js";
import { Fr as injectStrict, It as useWorkflowId, J as getSampleWorkflowByTemplateId, Kt as useNDVStore, Ut as disposeNDVStore, Yt as useWorkflowExecutionStateStore, _ as useNodeTypesStore, dn as useWorkflowsStore, i as disposeWorkflowDocumentStore, r as createWorkflowDocumentId, s as useWorkflowDocumentStore, st as useCredentialsStore, vn as useEnvironmentsStore, wn as useProjectsStore } from "./workflowDocument.store-DWj92T8C.js";
import { t as useRootStore } from "./useRootStore-hyBq4XlJ.js";
import { t as useSettingsStore } from "./settings.store-C5bX9q6f.js";
import { f as useUIStore, p as useTelemetry } from "./users.store-CsyV7tYv.js";
import { o as getNewWorkflowData, t as useWorkflowsListStore } from "./workflowsList.store-BBdSrTS3.js";
import { t as useDocumentTitle } from "./useDocumentTitle-BaE0TfJz.js";
import { t as useExternalHooks } from "./useExternalHooks-CC7glPJO.js";
import { t as useBuilderStore } from "./builder.store-B8MoplEq.js";
import { n as useHistoryStore } from "./useNodeHelpers-Cu8j3KZn.js";
import { t as useCanvasOperations } from "./useCanvasOperations-Cp6aXFic.js";
import { t as useFoldersStore } from "./folders.store-B1XmhzVw.js";
import { t as useExecutionDebugging } from "./useExecutionDebugging-CXCW51d6.js";
import { t as useAITemplatesStarterCollectionStore } from "./aiTemplatesStarterCollection.store-DxPeLhxL.js";
import { t as useReadyToRunWorkflowsStore } from "./readyToRunWorkflows.store-C3XJucQv.js";
//#region src/features/core/folders/composables/useParentFolder.ts
function useParentFolder() {
	const foldersStore = useFoldersStore();
	const projectsStore = useProjectsStore();
	const fetchParentFolder = async (folderId) => {
		if (!folderId) return null;
		let folder = foldersStore.getCachedFolder(folderId);
		if (!folder && projectsStore.currentProjectId) {
			await foldersStore.getFolderPath(projectsStore.currentProjectId, folderId);
			folder = foldersStore.getCachedFolder(folderId);
		}
		if (!folder) return null;
		return {
			id: folder.id,
			name: folder.name,
			parentFolderId: folder.parentFolder ?? null
		};
	};
	return { fetchParentFolder };
}
//#endregion
//#region src/app/composables/useWorkflowInitialization.ts
function useWorkflowInitialization() {
	const route = useRoute();
	const router = useRouter();
	const i18n = useI18n();
	const toast = useToast();
	const documentTitle = useDocumentTitle();
	const externalHooks = useExternalHooks();
	const rootStore = useRootStore();
	const workflowsStore = useWorkflowsStore();
	const workflowsListStore = useWorkflowsListStore();
	const uiStore = useUIStore();
	const nodeTypesStore = useNodeTypesStore();
	const credentialsStore = useCredentialsStore();
	const environmentsStore = useEnvironmentsStore();
	const settingsStore = useSettingsStore();
	const projectsStore = useProjectsStore();
	const historyStore = useHistoryStore();
	const builderStore = useBuilderStore();
	const aiTemplatesStarterCollectionStore = useAITemplatesStarterCollectionStore();
	const readyToRunWorkflowsStore = useReadyToRunWorkflowsStore();
	const telemetry = useTelemetry();
	const workflowId = useWorkflowId();
	const currentWorkflowDocumentStore = injectStrict(WorkflowDocumentStoreKey);
	const DEMO_ROUTES = [VIEWS.DEMO, VIEWS.DEMO_DIFF];
	const { resetWorkspace, initializeWorkspace, fitView, openWorkflowTemplate, openWorkflowTemplateFromJSON } = useCanvasOperations();
	const { applyExecutionData } = useExecutionDebugging();
	const isLoading = ref(true);
	const initializedWorkflowId = ref();
	const { fetchParentFolder } = useParentFolder();
	function disposeCurrentWorkflowDocumentStore() {
		const workflowDocumentStore = currentWorkflowDocumentStore.value;
		if (workflowDocumentStore) {
			disposeNDVStore(useNDVStore(workflowDocumentStore.documentId));
			disposeWorkflowDocumentStore(workflowDocumentStore);
		}
		currentWorkflowDocumentStore.value = null;
	}
	const isNewWorkflowRoute = computed(() => route.query.new === "true");
	const isDemoRoute = computed(() => DEMO_ROUTES.includes(route.name));
	const isTemplateRoute = computed(() => route.name === VIEWS.TEMPLATE_IMPORT);
	const isOnboardingRoute = computed(() => route.name === VIEWS.WORKFLOW_ONBOARDING);
	const isDebugRoute = computed(() => route.name === VIEWS.EXECUTION_DEBUG);
	async function loadCredentials() {
		let options;
		if (workflowId.value && !isNewWorkflowRoute.value) options = { workflowId: workflowId.value };
		else {
			const projectId = (typeof route.query?.projectId === "string" ? route.query?.projectId : void 0) ?? projectsStore.personalProject?.id;
			if (projectId === void 0) throw new Error("Could not find projectId in the query nor could I find the personal project in the project store");
			options = { projectId };
		}
		await credentialsStore.fetchAllCredentialsForWorkflow(options);
	}
	/**
	* Handle template import route (VIEWS.TEMPLATE_IMPORT)
	* Returns true if template was handled, false otherwise
	*/
	async function handleTemplateImportRoute() {
		if (!isTemplateRoute.value) return false;
		const templateId = route.params.id;
		if (!templateId) return false;
		disposeCurrentWorkflowDocumentStore();
		try {
			await Promise.all([loadCredentials(), credentialsStore.fetchCredentialTypes(true)]);
		} catch (error) {
			toast.showError(error, i18n.baseText("nodeView.showError.mounted1.title"), { message: i18n.baseText("nodeView.showError.mounted1.message") + ":" });
		}
		if (route.query.fromJson === "true") {
			const workflow = getSampleWorkflowByTemplateId(templateId.toString());
			if (!workflow) {
				toast.showError(new Error(i18n.baseText("nodeView.couldntLoadWorkflow.invalidWorkflowObject")), i18n.baseText("nodeView.couldntImportWorkflow"));
				await router.replace({ name: VIEWS.NEW_WORKFLOW });
				return true;
			}
			const templateValidation = safeParseWorkflowStructure({
				nodes: workflow.nodes,
				connections: workflow.connections
			});
			if (!templateValidation.success) {
				toast.showError(new WorkflowStructureValidationError(templateValidation.issues), i18n.baseText("nodeView.showError.openWorkflow.title"), { message: i18n.baseText("openWorkflow.workflowDataInvalidError") });
				return true;
			}
			await openWorkflowTemplateFromJSON(workflow);
		} else await openWorkflowTemplate(templateId.toString());
		const currentWorkflowId = workflowId.value;
		if (currentWorkflowId) {
			currentWorkflowDocumentStore.value = useWorkflowDocumentStore(createWorkflowDocumentId(currentWorkflowId));
			documentTitle.setDocumentTitle(currentWorkflowDocumentStore.value.name, "IDLE");
		}
		return true;
	}
	/**
	* Handle debug mode route (VIEWS.EXECUTION_DEBUG)
	* Loads execution data for debugging
	*/
	async function handleDebugModeRoute() {
		if (!isDebugRoute.value) return;
		documentTitle.setDocumentTitle(currentWorkflowDocumentStore.value?.name ?? "", "DEBUG");
		const executionStateStore = useWorkflowExecutionStateStore(createWorkflowDocumentId(workflowId.value));
		if (!executionStateStore.isInDebugMode) {
			const executionId = route.params.executionId;
			if (typeof executionId === "string") {
				await applyExecutionData(executionId);
				executionStateStore.setIsInDebugMode(true);
			}
		}
	}
	async function initializeData() {
		const isPreviewPage = settingsStore.isPreviewMode && isDemoRoute.value;
		const loadPromises = (() => {
			if (isPreviewPage) return [];
			const promises = [
				workflowsListStore.fetchActiveWorkflows(),
				credentialsStore.fetchCredentialTypes(true),
				loadCredentials()
			];
			if (settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables]) promises.push(environmentsStore.fetchAllVariables());
			return promises;
		})();
		if (nodeTypesStore.allNodeTypes.length === 0) loadPromises.push(nodeTypesStore.getNodeTypes());
		try {
			if (isPreviewPage) loadPromises.push(nodeTypesStore.fetchCommunityNodePreviews());
			else nodeTypesStore.fetchCommunityNodePreviews();
			await Promise.all(loadPromises);
		} catch (error) {
			toast.showError(error, i18n.baseText("nodeView.showError.mounted1.title"), { message: i18n.baseText("nodeView.showError.mounted1.message") + ":" });
		}
	}
	async function openWorkflow(data) {
		const validationResult = safeParseWorkflowStructure({
			nodes: data.nodes,
			connections: data.connections
		});
		if (!validationResult.success) toast.showError(new WorkflowStructureValidationError(validationResult.issues), i18n.baseText("nodeView.showError.openWorkflow.title"), { message: i18n.baseText("openWorkflow.workflowDataInvalidError") });
		const outgoingWorkflowId = currentWorkflowDocumentStore.value?.workflowId;
		disposeCurrentWorkflowDocumentStore();
		resetWorkspace(outgoingWorkflowId);
		if (builderStore.streaming) documentTitle.setDocumentTitle(data.name, "AI_BUILDING");
		else documentTitle.setDocumentTitle(data.name, "IDLE");
		try {
			const { workflowDocumentStore } = await initializeWorkspace(data);
			currentWorkflowDocumentStore.value = workflowDocumentStore;
		} catch (error) {
			console.error("Failed to initialize workspace for workflow", {
				workflowId: data.id,
				error
			});
			toast.showError(error, i18n.baseText("nodeView.showError.openWorkflow.title"));
			workflowsStore.setWorkflowId(data.id);
			currentWorkflowDocumentStore.value = useWorkflowDocumentStore(createWorkflowDocumentId(data.id));
			currentWorkflowDocumentStore.value.setName(data.name);
			currentWorkflowDocumentStore.value.setHomeProject(data.homeProject ?? null);
			currentWorkflowDocumentStore.value.setScopes(data.scopes ?? []);
			return;
		}
		externalHooks.run("workflow.open", {
			workflowId: data.id,
			workflowName: data.name
		});
		fitView();
	}
	async function initializeWorkspaceForNewWorkflow() {
		const outgoingWorkflowId = currentWorkflowDocumentStore.value?.workflowId;
		disposeCurrentWorkflowDocumentStore();
		resetWorkspace(outgoingWorkflowId);
		const parentFolderId = route.query.parentFolderId;
		workflowsStore.setWorkflowId(workflowId.value);
		currentWorkflowDocumentStore.value = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId.value));
		currentWorkflowDocumentStore.value.onNameChange(({ payload }) => {
			workflowsListStore.updateWorkflowInCache(workflowId.value, { name: payload.name });
		});
		const workflowData = await getNewWorkflowData(rootStore.restApiContext, void 0, projectsStore.currentProjectId, parentFolderId);
		currentWorkflowDocumentStore.value.setName(workflowData.name);
		documentTitle.setDocumentTitle(workflowData.name, "IDLE");
		const homeProject = projectsStore.currentProject ?? projectsStore.personalProject ?? null;
		currentWorkflowDocumentStore.value.setHomeProject(homeProject);
		await projectsStore.refreshCurrentProject();
		const { currentProject, personalProject } = projectsStore;
		currentWorkflowDocumentStore.value.setScopes(currentProject?.scopes ?? personalProject?.scopes ?? []);
		const parentFolder = await fetchParentFolder(parentFolderId);
		currentWorkflowDocumentStore.value?.setParentFolder(parentFolder);
		uiStore.nodeViewInitialized = true;
		initializedWorkflowId.value = workflowId.value;
		fitView();
	}
	async function initializeWorkspaceForExistingWorkflow(id) {
		try {
			const workflowData = await workflowsListStore.fetchWorkflow(id);
			await openWorkflow(workflowData);
			if (workflowData.meta?.onboardingId) telemetry.track(`User opened workflow from onboarding template with ID ${workflowData.meta.onboardingId}`, { workflow_id: id });
			if (workflowData.meta?.templateId?.startsWith("035_template_onboarding")) aiTemplatesStarterCollectionStore.trackUserOpenedWorkflow(workflowData.meta.templateId.split("-").pop() ?? "");
			if (workflowData.meta?.templateId?.startsWith("37_onboarding_experiments_batch_aug11")) readyToRunWorkflowsStore.trackOpenWorkflow(workflowData.meta.templateId.split("-").pop() ?? "");
			await projectsStore.setProjectNavActiveIdByWorkflowHomeProject(workflowData.homeProject, workflowData.sharedWithProjects);
			workflowsStore.fetchLastSuccessfulExecution();
		} catch (error) {
			if (error.httpStatusCode === 404) return await router.replace({
				name: VIEWS.ENTITY_NOT_FOUND,
				params: { entityType: "workflow" }
			});
			if (error.httpStatusCode === 403) return await router.replace({
				name: VIEWS.ENTITY_UNAUTHORIZED,
				params: { entityType: "workflow" }
			});
			toast.showError(error, i18n.baseText("openWorkflow.workflowNotFoundError"));
			router.push({ name: VIEWS.NEW_WORKFLOW });
		} finally {
			uiStore.nodeViewInitialized = true;
			initializedWorkflowId.value = workflowId.value;
		}
	}
	async function initializeWorkflow(force = false) {
		if (uiStore.isBlankRedirect) {
			uiStore.isBlankRedirect = false;
			isLoading.value = false;
			return;
		}
		if (await handleTemplateImportRoute()) {
			isLoading.value = false;
			return;
		}
		if (!workflowId.value) {
			isLoading.value = false;
			return;
		}
		if (!force && initializedWorkflowId.value && initializedWorkflowId.value === workflowId.value) {
			await handleDebugModeRoute();
			isLoading.value = false;
			return;
		}
		isLoading.value = true;
		try {
			historyStore.reset();
			if (isDemoRoute.value) {
				await initializeWorkspaceForNewWorkflow();
				return;
			}
			if (isNewWorkflowRoute.value) if (!await workflowsListStore.checkWorkflowExists(workflowId.value) && route.meta?.nodeView === true) {
				await initializeWorkspaceForNewWorkflow();
				return;
			} else await router.replace({
				...route,
				query: {
					...route.query,
					new: void 0
				}
			});
			await initializeWorkspaceForExistingWorkflow(workflowId.value);
			await handleDebugModeRoute();
		} finally {
			isLoading.value = false;
		}
	}
	function cleanup() {
		const outgoingWorkflowId = currentWorkflowDocumentStore.value?.workflowId;
		disposeCurrentWorkflowDocumentStore();
		resetWorkspace(outgoingWorkflowId);
		uiStore.nodeViewInitialized = false;
	}
	return {
		isLoading,
		initializedWorkflowId,
		workflowId,
		currentWorkflowDocumentStore,
		isNewWorkflowRoute,
		isDemoRoute,
		isTemplateRoute,
		isOnboardingRoute,
		isDebugRoute,
		loadCredentials,
		initializeData,
		openWorkflow,
		initializeWorkspaceForNewWorkflow,
		initializeWorkspaceForExistingWorkflow,
		handleTemplateImportRoute,
		handleDebugModeRoute,
		initializeWorkflow,
		cleanup
	};
}
//#endregion
export { useWorkflowInitialization as t };
