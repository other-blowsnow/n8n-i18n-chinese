import { It as ref, S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ot as useI18n } from "./core-Cb7jeMu8.js";
import { oo as updatedIconSet, wt as useRouter } from "./src-DAbbz2gO.js";
import { t as useToast } from "./useToast-BAwEZJlf.js";
import { Ou as getResourcePermissions, Qd as EnterpriseEditionFeature, Ur as AGENTS_MODULE_NAME, Vr as PROJECT_DATA_TABLES, ci as NEW_AGENT_VIEW, hi as VIEWS } from "./constants-BG93cxLW.js";
import { Tn as useSourceControlStore, wn as useProjectsStore } from "./workflowDocument.store-CUnvofeB.js";
import { t as useSettingsStore } from "./settings.store-BzvY0ZlK.js";
import { W as VARIABLE_MODAL_KEY, f as useUIStore, n as hasPermission, p as useTelemetry, t as useUsersStore } from "./users.store-ChwfO1rT.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-Dm7aC_b3.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-BFaVWb3H.js";
import { o as INSTANCE_AI_VIEW } from "./constants-C9r3Ljxi.js";
import { t as sortByProperty } from "./sort-by-property-B16VujaG.js";
//#region src/app/composables/useGlobalEntityCreation.ts
var isIconName = (icon) => typeof icon === "string" && Object.keys(updatedIconSet).includes(icon);
var isProjectIcon = (icon) => isIconName(icon) || typeof icon === "object" && icon !== null && "value" in icon && typeof icon.value === "string" && "type" in icon && (icon.type === "emoji" || icon.type === "icon" && isIconName(icon.value));
var useGlobalEntityCreation = () => {
	const CREATE_PROJECT_ID = "create-project";
	const WORKFLOWS_MENU_ID = "workflow";
	const CREDENTIALS_MENU_ID = "credential";
	const VARIABLE_MENU_ID = "variable";
	const DATA_TABLE_MENU_ID = "data-table";
	const AGENTS_MENU_ID = "agent";
	const INSTANCE_AI_THREAD_MENU_ID = "instance-ai-thread";
	const DEFAULT_ICON = "layers";
	const settingsStore = useSettingsStore();
	const cloudPlanStore = useCloudPlanStore();
	const projectsStore = useProjectsStore();
	const sourceControlStore = useSourceControlStore();
	const usersStore = useUsersStore();
	const uiStore = useUIStore();
	const router = useRouter();
	const i18n = useI18n();
	const toast = useToast();
	const telemetry = useTelemetry();
	const isCreatingProject = ref(false);
	const displayProjects = computed(() => sortByProperty("name", projectsStore.myProjects.filter((p) => p.type === "team")));
	const disabledWorkflow = (scopes = []) => sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(scopes).workflow.create;
	const disabledCredential = (scopes = []) => sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(scopes).credential.create;
	const disabledAgent = (scopes = []) => sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(scopes).agent?.create;
	const isAgentsModuleActive = computed(() => settingsStore.isModuleActive(AGENTS_MODULE_NAME));
	const isInstanceAiAvailable = computed(() => settingsStore.isModuleActive("instance-ai") && settingsStore.moduleSettings["instance-ai"]?.enabled !== false && hasPermission(["rbac"], { rbac: { scope: "instanceAi:message" } }));
	const instanceAiThreadItem = computed(() => isInstanceAiAvailable.value ? {
		id: INSTANCE_AI_THREAD_MENU_ID,
		title: i18n.baseText("projects.menu.create.instanceAiThread"),
		route: { name: INSTANCE_AI_VIEW }
	} : null);
	const disabledDataTable = (scopes = []) => sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(scopes).dataTable?.create;
	const variableScopeSubmenu = computed(() => {
		const readOnly = sourceControlStore.preferences.branchReadOnly;
		return [
			{
				id: "variable-title",
				title: "Create in",
				disabled: true
			},
			{
				id: "variable-global",
				title: i18n.baseText("variables.modal.scope.global"),
				icon: "database",
				disabled: readOnly || !getResourcePermissions(usersStore.currentUser?.globalScopes).variable?.create
			},
			{
				id: "variable-personal",
				title: i18n.baseText("projects.menu.personal"),
				icon: "user",
				disabled: readOnly || !getResourcePermissions(projectsStore.personalProject?.scopes).projectVariable?.create
			},
			...displayProjects.value.map((project) => ({
				id: `variable-${project.id}`,
				title: project.name,
				icon: isProjectIcon(project.icon) ? project.icon : DEFAULT_ICON,
				disabled: readOnly || !getResourcePermissions(project.scopes).projectVariable?.create
			}))
		];
	});
	const variableItem = computed(() => {
		if (!settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables]) return null;
		const readOnly = sourceControlStore.preferences.branchReadOnly;
		return {
			id: VARIABLE_MENU_ID,
			title: i18n.baseText("projects.menu.create.variable"),
			disabled: readOnly,
			...!readOnly && { submenu: variableScopeSubmenu.value }
		};
	});
	const dataTableScopeSubmenu = computed(() => [
		{
			id: "data-table-title",
			title: "Create in",
			disabled: true
		},
		{
			id: "data-table-personal",
			title: i18n.baseText("projects.menu.personal"),
			icon: "user",
			disabled: disabledDataTable(projectsStore.personalProject?.scopes),
			route: {
				name: PROJECT_DATA_TABLES,
				params: {
					projectId: projectsStore.personalProject?.id,
					new: "new"
				}
			}
		},
		...displayProjects.value.map((project) => ({
			id: `data-table-${project.id}`,
			title: project.name,
			icon: isProjectIcon(project.icon) ? project.icon : DEFAULT_ICON,
			disabled: disabledDataTable(project.scopes),
			route: {
				name: PROJECT_DATA_TABLES,
				params: {
					projectId: project.id,
					new: "new"
				}
			}
		}))
	]);
	const dataTableItem = computed(() => {
		if (!settingsStore.isDataTableFeatureEnabled) return null;
		const readOnly = sourceControlStore.preferences.branchReadOnly;
		if (displayProjects.value.length === 0) return {
			id: DATA_TABLE_MENU_ID,
			title: i18n.baseText("projects.menu.create.dataTable"),
			disabled: disabledDataTable(projectsStore.personalProject?.scopes),
			route: {
				name: PROJECT_DATA_TABLES,
				params: {
					projectId: projectsStore.personalProject?.id,
					new: "new"
				}
			}
		};
		return {
			id: DATA_TABLE_MENU_ID,
			title: i18n.baseText("projects.menu.create.dataTable"),
			disabled: readOnly,
			...!readOnly && { submenu: dataTableScopeSubmenu.value }
		};
	});
	const menu = computed(() => {
		const workflowTitle = i18n.baseText("projects.menu.create.workflow");
		const credentialTitle = i18n.baseText("projects.menu.create.credential");
		const agentTitle = i18n.baseText("projects.menu.create.agent");
		const projectTitle = i18n.baseText("projects.menu.create.project");
		const instanceAiTrailing = instanceAiThreadItem.value ? [instanceAiThreadItem.value] : [];
		const variableTrailing = variableItem.value ? [variableItem.value] : [];
		const dataTableTrailing = dataTableItem.value ? [dataTableItem.value] : [];
		if (!projectsStore.isTeamProjectFeatureEnabled) return [
			{
				id: "workflow",
				title: workflowTitle,
				route: {
					name: VIEWS.NEW_WORKFLOW,
					query: { projectId: projectsStore.personalProject?.id }
				}
			},
			{
				id: "credential",
				title: credentialTitle,
				route: {
					name: VIEWS.CREDENTIALS,
					params: {
						projectId: projectsStore.personalProject?.id,
						credentialId: "create"
					}
				}
			},
			...variableTrailing,
			...dataTableTrailing,
			...isAgentsModuleActive.value ? [{
				id: AGENTS_MENU_ID,
				title: agentTitle,
				route: {
					name: NEW_AGENT_VIEW,
					query: { projectId: projectsStore.personalProject?.id }
				}
			}] : [],
			{
				id: CREATE_PROJECT_ID,
				title: projectTitle,
				disabled: true
			},
			...instanceAiTrailing
		];
		if (displayProjects.value.length === 0) return [
			{
				id: WORKFLOWS_MENU_ID,
				title: workflowTitle,
				disabled: sourceControlStore.preferences.branchReadOnly || disabledWorkflow(projectsStore.personalProject?.scopes),
				route: {
					name: VIEWS.NEW_WORKFLOW,
					query: { projectId: projectsStore.personalProject?.id }
				}
			},
			{
				id: CREDENTIALS_MENU_ID,
				title: credentialTitle,
				disabled: sourceControlStore.preferences.branchReadOnly || disabledCredential(projectsStore.personalProject?.scopes),
				route: {
					name: VIEWS.PROJECTS_CREDENTIALS,
					params: {
						projectId: projectsStore.personalProject?.id,
						credentialId: "create"
					}
				}
			},
			...variableTrailing,
			...dataTableTrailing,
			...isAgentsModuleActive.value ? [{
				id: AGENTS_MENU_ID,
				title: agentTitle,
				disabled: disabledAgent(projectsStore.personalProject?.scopes),
				route: {
					name: NEW_AGENT_VIEW,
					query: { projectId: projectsStore.personalProject?.id }
				}
			}] : [],
			{
				id: CREATE_PROJECT_ID,
				title: projectTitle,
				disabled: !projectsStore.canCreateProjects || !projectsStore.hasPermissionToCreateProjects
			},
			...instanceAiTrailing
		];
		return [
			{
				id: WORKFLOWS_MENU_ID,
				title: workflowTitle,
				disabled: sourceControlStore.preferences.branchReadOnly,
				...!sourceControlStore.preferences.branchReadOnly && { submenu: [
					{
						id: "workflow-title",
						title: "Create in",
						disabled: true
					},
					{
						id: "workflow-personal",
						title: i18n.baseText("projects.menu.personal"),
						icon: "user",
						disabled: disabledWorkflow(projectsStore.personalProject?.scopes),
						route: {
							name: VIEWS.NEW_WORKFLOW,
							query: { projectId: projectsStore.personalProject?.id }
						}
					},
					...displayProjects.value.map((project) => ({
						id: `workflow-${project.id}`,
						title: project.name,
						icon: isProjectIcon(project.icon) ? project.icon : DEFAULT_ICON,
						disabled: disabledWorkflow(project.scopes),
						route: {
							name: VIEWS.NEW_WORKFLOW,
							query: { projectId: project.id }
						}
					}))
				] }
			},
			{
				id: CREDENTIALS_MENU_ID,
				title: credentialTitle,
				disabled: sourceControlStore.preferences.branchReadOnly,
				...!sourceControlStore.preferences.branchReadOnly && { submenu: [
					{
						id: "credential-title",
						title: "Create in",
						disabled: true
					},
					{
						id: "credential-personal",
						title: i18n.baseText("projects.menu.personal"),
						icon: "user",
						disabled: disabledCredential(projectsStore.personalProject?.scopes),
						route: {
							name: VIEWS.PROJECTS_CREDENTIALS,
							params: {
								projectId: projectsStore.personalProject?.id,
								credentialId: "create"
							}
						}
					},
					...displayProjects.value.map((project) => ({
						id: `credential-${project.id}`,
						title: project.name,
						icon: isProjectIcon(project.icon) ? project.icon : DEFAULT_ICON,
						disabled: disabledCredential(project.scopes),
						route: {
							name: VIEWS.PROJECTS_CREDENTIALS,
							params: {
								projectId: project.id,
								credentialId: "create"
							}
						}
					}))
				] }
			},
			...variableTrailing,
			...dataTableTrailing,
			...isAgentsModuleActive.value ? [{
				id: AGENTS_MENU_ID,
				title: agentTitle,
				disabled: sourceControlStore.preferences.branchReadOnly,
				...!sourceControlStore.preferences.branchReadOnly && { submenu: [
					{
						id: "agent-title",
						title: "Create in",
						disabled: true
					},
					{
						id: "agent-personal",
						title: i18n.baseText("projects.menu.personal"),
						icon: "user",
						disabled: disabledAgent(projectsStore.personalProject?.scopes),
						route: {
							name: "NewAgentView",
							query: { projectId: projectsStore.personalProject?.id }
						}
					},
					...displayProjects.value.map((project) => ({
						id: `agent-${project.id}`,
						title: project.name,
						icon: isProjectIcon(project.icon) ? project.icon : DEFAULT_ICON,
						disabled: disabledAgent(project.scopes),
						route: {
							name: "NewAgentView",
							query: { projectId: project.id }
						}
					}))
				] }
			}] : [],
			{
				id: CREATE_PROJECT_ID,
				title: projectTitle,
				disabled: !projectsStore.canCreateProjects || !projectsStore.hasPermissionToCreateProjects
			},
			...instanceAiTrailing
		];
	});
	const createProject = async (uiContext) => {
		isCreatingProject.value = true;
		try {
			const newProject = await projectsStore.createProject({
				name: i18n.baseText("projects.settings.newProjectName"),
				icon: {
					type: "icon",
					value: DEFAULT_ICON
				},
				uiContext
			});
			await router.push({
				name: VIEWS.PROJECT_SETTINGS,
				params: { projectId: newProject.id }
			});
			toast.showMessage({
				title: i18n.baseText("projects.settings.save.successful.title", { interpolate: { projectName: newProject.name } }),
				type: "success"
			});
		} catch (error) {
			toast.showError(error, i18n.baseText("projects.error.title"));
		} finally {
			isCreatingProject.value = false;
		}
	};
	const handleSelect = (id) => {
		if (id.startsWith("variable-") && id !== "variable-title") {
			const projectId = id === "variable-global" ? "" : id === "variable-personal" ? projectsStore.personalProject?.id ?? "" : id.slice(9);
			uiStore.openModalWithData({
				name: VARIABLE_MODAL_KEY,
				data: {
					mode: "new",
					projectId
				}
			});
			telemetry.track("User clicked sidebar add variable button");
			return;
		}
		if (id.startsWith(DATA_TABLE_MENU_ID) && id !== "data-table-title") {
			telemetry.track("User clicked sidebar add data table button");
			return;
		}
		if (id !== CREATE_PROJECT_ID) return;
		if (projectsStore.canCreateProjects && projectsStore.hasPermissionToCreateProjects) {
			createProject("universal_button");
			return;
		}
		usePageRedirectionHelper().goToUpgrade("rbac", "upgrade-rbac");
	};
	const projectsLimitReachedMessage = computed(() => {
		if (!projectsStore.hasPermissionToCreateProjects) return i18n.baseText("projects.create.permissionDenied");
		if (settingsStore.isCloudDeployment) return i18n.baseText("projects.create.limitReached.cloud", { interpolate: {
			planName: cloudPlanStore.currentPlanData?.displayName ?? "",
			limit: projectsStore.teamProjectsLimit
		} });
		if (!projectsStore.isTeamProjectFeatureEnabled) return i18n.baseText("projects.create.limitReached.self");
		return i18n.baseText("projects.create.limitReached", { interpolate: { limit: projectsStore.teamProjectsLimit } });
	});
	return {
		menu,
		handleSelect,
		createProjectAppendSlotName: computed(() => `item.append.${CREATE_PROJECT_ID}`),
		createWorkflowsAppendSlotName: computed(() => `item.append.${WORKFLOWS_MENU_ID}`),
		createCredentialsAppendSlotName: computed(() => `item.append.${CREDENTIALS_MENU_ID}`),
		projectsLimitReachedMessage,
		hasPermissionToCreateProjects: projectsStore.hasPermissionToCreateProjects,
		upgradeLabel: computed(() => {
			if (settingsStore.isCloudDeployment) return i18n.baseText("generic.upgrade");
			if (!projectsStore.isTeamProjectFeatureEnabled) return i18n.baseText("generic.enterprise");
			return i18n.baseText("generic.upgrade");
		}),
		createProject,
		isCreatingProject,
		displayProjects
	};
};
//#endregion
export { useGlobalEntityCreation as t };
