import { C as computed, It as ref } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Rt as useRouter, Ui as updatedIconSet } from "./src-Cq27d_Gp.js";
import { Vt as useProjectsStore, br as useSourceControlStore, fs as useSettingsStore, hr as useToast, ir as useCloudPlanStore } from "./users.store-qBZsmf9-.js";
import { Bo as getResourcePermissions, Xo as VIEWS } from "./constants-Cyrg9Nbl.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjPq0E7w.js";
import { t as sortByProperty } from "./sortByProperty-lyxMqa8q.js";
var isIconName = (icon) => typeof icon === "string" && Object.keys(updatedIconSet).includes(icon);
var isProjectIcon = (icon) => isIconName(icon) || typeof icon === "object" && icon !== null && "value" in icon && typeof icon.value === "string" && "type" in icon && (icon.type === "emoji" || icon.type === "icon" && isIconName(icon.value));
const useGlobalEntityCreation = () => {
	const CREATE_PROJECT_ID = "create-project";
	const WORKFLOWS_MENU_ID = "workflow";
	const CREDENTIALS_MENU_ID = "credential";
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
	const menu = computed(() => {
		if (!projectsStore.isTeamProjectFeatureEnabled) return [
			{
				id: "workflow",
				title: "Workflow",
				route: {
					name: VIEWS.NEW_WORKFLOW,
					query: { projectId: projectsStore.personalProject?.id }
				}
			},
			{
				id: "credential",
				title: "Credential",
				route: {
					name: VIEWS.CREDENTIALS,
					params: {
						projectId: projectsStore.personalProject?.id,
						credentialId: "create"
					}
				}
			},
			{
				id: CREATE_PROJECT_ID,
				title: "Project",
				disabled: true
			}
		];
		return [
			{
				id: WORKFLOWS_MENU_ID,
				title: "Workflow",
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
				title: "Credential",
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
			{
				id: CREATE_PROJECT_ID,
				title: "Project",
				disabled: !projectsStore.canCreateProjects || !projectsStore.hasPermissionToCreateProjects
			}
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
		if (settingsStore.isCloudDeployment) return i18n.baseText("projects.create.limitReached.cloud", { interpolate: {
			planName: cloudPlanStore.currentPlanData?.displayName ?? "",
			limit: projectsStore.teamProjectsLimit
		} });
		if (!projectsStore.isTeamProjectFeatureEnabled) return i18n.baseText("projects.create.limitReached.self");
		if (!projectsStore.hasPermissionToCreateProjects) return i18n.baseText("projects.create.permissionDenied");
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
export { useGlobalEntityCreation as t };
