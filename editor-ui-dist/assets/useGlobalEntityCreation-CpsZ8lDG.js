import { Ft as ref, S as computed } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { s as useI18n } from "./src-DQKWamAF.js";
import { gt as useRouter, ja as updatedIconSet } from "./src-DFOx8N22.js";
import { bn as useSourceControlStore, yn as useProjectsStore } from "./workflows.store-BKfEj1aG.js";
import { t as useToast } from "./useToast-fCpp7iAn.js";
import { cl as getResourcePermissions, ni as NEW_AGENT_VIEW, si as VIEWS, zr as AGENTS_MODULE_NAME } from "./constants-DIP3enMx.js";
import { t as useSettingsStore } from "./settings.store-B-RgkKfn.js";
import { n as hasPermission } from "./users.store-0wV1ayWS.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-D136cKhi.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DcTMehDT.js";
import { r as INSTANCE_AI_VIEW } from "./constants-DlgrjQNI.js";
import { t as sortByProperty } from "./sortByProperty-CPMmCv5V.js";
//#region src/app/composables/useGlobalEntityCreation.ts
var isIconName = (icon) => typeof icon === "string" && Object.keys(updatedIconSet).includes(icon);
var isProjectIcon = (icon) => isIconName(icon) || typeof icon === "object" && icon !== null && "value" in icon && typeof icon.value === "string" && "type" in icon && (icon.type === "emoji" || icon.type === "icon" && isIconName(icon.value));
var useGlobalEntityCreation = () => {
	const CREATE_PROJECT_ID = "create-project";
	const WORKFLOWS_MENU_ID = "workflow";
	const CREDENTIALS_MENU_ID = "credential";
	const AGENTS_MENU_ID = "agent";
	const INSTANCE_AI_THREAD_MENU_ID = "instance-ai-thread";
	const DEFAULT_ICON = "layers";
	const settingsStore = useSettingsStore();
	const cloudPlanStore = useCloudPlanStore();
	const projectsStore = useProjectsStore();
	const sourceControlStore = useSourceControlStore();
	const router = useRouter();
	const i18n = useI18n();
	const toast = useToast();
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
	const menu = computed(() => {
		const workflowTitle = i18n.baseText("projects.menu.create.workflow");
		const credentialTitle = i18n.baseText("projects.menu.create.credential");
		const agentTitle = i18n.baseText("projects.menu.create.agent");
		const projectTitle = i18n.baseText("projects.menu.create.project");
		const instanceAiTrailing = instanceAiThreadItem.value ? [instanceAiThreadItem.value] : [];
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
