import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, W as mergeProps, _n as normalizeClass, _t as watch, at as renderSlot, bt as withCtx, et as openBlock, j as createTextVNode, mt as useTemplateRef, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { E as useElementSize, N as useResizeObserver, gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { $ as N8nActionToggle_default, In as N8nText_default, Ln as N8nButton_default, Pn as N8nHeading_default, Tt as N8nIconButton_default, g as N8nTabs_default, vt as N8nTooltip_default } from "./src-BmrdBtCN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-1c7Iwk7N.js";
import { Bo as useSettingsStore, Dn as useSourceControlStore, Do as VARIABLE_MODAL_KEY, En as useProjectsStore, Ni as useUIStore, On as ProjectTypes, er as useUsersStore, t as useTelemetry } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import { Hs as EnterpriseEditionFeature, _r as getResourcePermissions, ir as PROJECT_DATA_TABLES, mo as VIEWS } from "./constants-C_oOJnqT.js";
import { t as useFoldersStore } from "./folders.store-Cwp_DTVT.js";
import { n as isIconOrEmoji, t as ProjectIcon_default } from "./ProjectIcon-BYB-pK6e.js";
import { n as useProjectPages, t as useReadyToRunWorkflowsV2Store } from "./readyToRunWorkflowsV2.store-DpzmixIa.js";
function processDynamicTab(tab, projectId) {
	if (!tab.dynamicRoute) return tab;
	const tabRoute = { name: tab.dynamicRoute.name };
	if (tab.dynamicRoute.includeProjectId && projectId) tabRoute.params = { projectId };
	const { dynamicRoute,...tabWithoutDynamic } = tab;
	return {
		...tabWithoutDynamic,
		to: tabRoute
	};
}
function processDynamicTabs(tabs, projectId) {
	return tabs.map((tab) => processDynamicTab(tab, projectId));
}
var ProjectTabs_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectTabs",
	props: {
		showSettings: {
			type: Boolean,
			default: false
		},
		showExecutions: {
			type: Boolean,
			default: true
		},
		pageType: { default: "project" },
		additionalTabs: { default: () => [] }
	},
	setup(__props) {
		const props = __props;
		const locale = useI18n();
		const route = useRoute();
		const projectStore = useProjectsStore();
		const telemetry = useTelemetry();
		const selectedTab = ref("");
		const selectedTabLabel = computed(() => selectedTab.value ? String(selectedTab.value) : "");
		const projectId = computed(() => {
			return Array.isArray(route?.params?.projectId) ? route.params.projectId[0] : route?.params?.projectId;
		});
		const isTeamProject = computed(() => projectStore.currentProject?.type === ProjectTypes.Team);
		const getRouteConfigs = () => {
			if (projectId.value) return {
				workflows: {
					name: VIEWS.PROJECTS_WORKFLOWS,
					params: { projectId: projectId.value }
				},
				credentials: {
					name: VIEWS.PROJECTS_CREDENTIALS,
					params: { projectId: projectId.value }
				},
				executions: {
					name: VIEWS.PROJECTS_EXECUTIONS,
					params: { projectId: projectId.value }
				},
				variables: {
					name: VIEWS.PROJECTS_VARIABLES,
					params: { projectId: projectId.value }
				}
			};
			if (props.pageType === "shared") return {
				workflows: { name: VIEWS.SHARED_WORKFLOWS },
				credentials: { name: VIEWS.SHARED_CREDENTIALS },
				executions: { name: VIEWS.NOT_FOUND },
				variables: { name: VIEWS.NOT_FOUND }
			};
			return {
				workflows: { name: VIEWS.WORKFLOWS },
				credentials: { name: VIEWS.CREDENTIALS },
				executions: { name: VIEWS.EXECUTIONS },
				variables: { name: VIEWS.HOME_VARIABLES }
			};
		};
		const createTab = (label, routeKey, routes) => {
			return {
				label: locale.baseText(label),
				value: routes[routeKey].name,
				to: routes[routeKey]
			};
		};
		const options = computed(() => {
			const routes = getRouteConfigs();
			const tabs = [createTab("mainSidebar.workflows", "workflows", routes), createTab("mainSidebar.credentials", "credentials", routes)];
			if (props.showExecutions) tabs.push(createTab("mainSidebar.executions", "executions", routes));
			if (props.pageType === "overview" || isTeamProject.value) tabs.push(createTab("mainSidebar.variables", "variables", routes));
			if (props.additionalTabs?.length) {
				const processedAdditionalTabs = processDynamicTabs(props.additionalTabs, projectId.value);
				tabs.push(...processedAdditionalTabs);
			}
			if (props.showSettings) tabs.push({
				label: locale.baseText("projects.settings"),
				value: VIEWS.PROJECT_SETTINGS,
				to: {
					name: VIEWS.PROJECT_SETTINGS,
					params: { projectId: projectId.value }
				}
			});
			return tabs;
		});
		watch(() => route?.name, () => {
			selectedTab.value = route.name === VIEWS.PROJECTS_FOLDERS ? VIEWS.PROJECTS_WORKFLOWS : route.name;
		}, { immediate: true });
		function onSelectTab(value) {
			if (selectedTab.value === "variables") telemetry.track("User clicked project variables tab", { project_id: projectId.value });
			selectedTab.value = value;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTabs_default), {
				"model-value": selectedTabLabel.value,
				options: options.value,
				"data-test-id": "project-tabs",
				"onUpdate:modelValue": onSelectTab
			}, null, 8, ["model-value", "options"]);
		};
	}
});
var ProjectCreateResource_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectCreateResource",
	props: {
		actions: {},
		disabled: { type: Boolean },
		type: {}
	},
	emits: ["action"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const actionToggleRef = useTemplateRef("actionToggleRef");
		__expose({ openActionToggle: (isOpen) => actionToggleRef.value?.openActionToggle(isOpen) });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.buttonGroup]) }, [renderSlot(_ctx.$slots, "default"), createVNode(unref(N8nActionToggle_default), {
				ref_key: "actionToggleRef",
				ref: actionToggleRef,
				"data-test-id": "add-resource",
				actions: _ctx.actions,
				placement: "bottom-end",
				teleported: false,
				onAction: _cache[0] || (_cache[0] = ($event) => emit("action", $event))
			}, {
				default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					disabled: _ctx.disabled,
					class: normalizeClass([_ctx.$style.buttonGroupDropdown]),
					icon: "chevron-down",
					type: _ctx.type ?? "primary"
				}, null, 8, [
					"disabled",
					"class",
					"type"
				])]),
				_: 1
			}, 8, ["actions"])], 2);
		};
	}
});
var ProjectCreateResource_vue_vue_type_style_index_0_lang_module_default = {
	buttonGroup: "_buttonGroup_1ofs3_123",
	buttonGroupDropdown: "_buttonGroupDropdown_1ofs3_137"
};
var ProjectCreateResource_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectCreateResource_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectCreateResource_vue_vue_type_style_index_0_lang_module_default }]]);
const truncateTextToFitWidth = (text, availableWidth, fontSizeInPixels) => {
	if (!text || availableWidth <= 0) return "";
	const averageCharWidth = .55 * fontSizeInPixels;
	const maxLengthToDisplay = Math.floor(availableWidth / averageCharWidth);
	if (text.length <= maxLengthToDisplay) return "";
	const truncated = text.slice(0, maxLengthToDisplay);
	const lastSpaceIndex = truncated.lastIndexOf(" ");
	return truncated.slice(0, lastSpaceIndex === -1 ? maxLengthToDisplay : lastSpaceIndex) + "...";
};
var ReadyToRunV2Button_default = /* @__PURE__ */ defineComponent({
	__name: "ReadyToRunV2Button",
	props: { hasActiveCallouts: { type: Boolean } },
	setup(__props) {
		const props = __props;
		const route = useRoute();
		const i18n = useI18n();
		const toast = useToast();
		const projectPages = useProjectPages();
		const projectsStore = useProjectsStore();
		const sourceControlStore = useSourceControlStore();
		const foldersStore = useFoldersStore();
		const readyToRunWorkflowsV2Store = useReadyToRunWorkflowsV2Store();
		const projectPermissions = computed(() => {
			return getResourcePermissions(projectsStore.currentProject?.scopes ?? projectsStore.personalProject?.scopes);
		});
		const showButton = computed(() => {
			return readyToRunWorkflowsV2Store.getButtonVisibility(foldersStore.totalWorkflowCount > 0, projectPermissions.value.workflow.create, sourceControlStore.preferences.branchReadOnly) && !props.hasActiveCallouts;
		});
		const handleClick = async () => {
			const projectId = projectPages.isOverviewSubPage ? projectsStore.personalProject?.id : route.params.projectId;
			try {
				await readyToRunWorkflowsV2Store.claimCreditsAndOpenWorkflow("button", route.params.folderId, projectId);
			} catch (error) {
				toast.showError(error, i18n.baseText("generic.error"));
			}
		};
		return (_ctx, _cache) => {
			return showButton.value ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 0,
				"data-test-id": "ready-to-run-v2-button",
				type: "secondary",
				icon: "sparkles",
				loading: unref(readyToRunWorkflowsV2Store).claimingCredits,
				disabled: unref(sourceControlStore).preferences.branchReadOnly || unref(readyToRunWorkflowsV2Store).claimingCredits,
				onClick: handleClick
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.empty.readyToRunV2")), 1)]),
				_: 1
			}, 8, ["loading", "disabled"])) : createCommentVNode("", true);
		};
	}
});
var _hoisted_1 = { style: {
	"display": "flex",
	"gap": "var(--spacing--xs)",
	"align-items": "center"
} };
var ProjectHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectHeader",
	props: {
		hasActiveCallouts: { type: Boolean },
		mainButton: {}
	},
	emits: ["createFolder"],
	setup(__props, { emit: __emit }) {
		const route = useRoute();
		const router = useRouter();
		const i18n = useI18n();
		const projectsStore = useProjectsStore();
		const sourceControlStore = useSourceControlStore();
		const settingsStore = useSettingsStore();
		const uiStore = useUIStore();
		const telemetry = useTelemetry();
		const usersStore = useUsersStore();
		const projectPages = useProjectPages();
		const props = __props;
		const emit = __emit;
		const headerIcon = computed(() => {
			if (projectsStore.currentProject?.type === ProjectTypes.Personal) return {
				type: "icon",
				value: "user"
			};
			else if (projectsStore.currentProject?.name) return isIconOrEmoji(projectsStore.currentProject.icon) ? projectsStore.currentProject.icon : {
				type: "icon",
				value: "layers"
			};
			else return {
				type: "icon",
				value: "house"
			};
		});
		const projectName = computed(() => {
			if (!projectsStore.currentProject) {
				if (projectPages.isSharedSubPage) return i18n.baseText("projects.header.shared.title");
				else if (projectPages.isOverviewSubPage) return i18n.baseText("projects.menu.overview");
				return null;
			} else if (projectsStore.currentProject.type === ProjectTypes.Personal) return i18n.baseText("projects.menu.personal");
			else return projectsStore.currentProject.name;
		});
		const projectPermissions = computed(() => getResourcePermissions(projectsStore.currentProject?.scopes).project);
		const projectVariablePermissions = computed(() => getResourcePermissions(projectsStore.currentProject?.scopes).projectVariable);
		const globalVariablesPermissions = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).variable);
		const showSettings = computed(() => !!route?.params?.projectId && !!projectPermissions.value.update && projectsStore.currentProject?.type === ProjectTypes.Team);
		const homeProject = computed(() => projectsStore.currentProject ?? projectsStore.personalProject);
		const isPersonalProject = computed(() => {
			return homeProject.value?.type === ProjectTypes.Personal;
		});
		const showFolders = computed(() => {
			return settingsStore.isFoldersFeatureEnabled && [VIEWS.PROJECTS_WORKFLOWS, VIEWS.PROJECTS_FOLDERS].includes(route.name);
		});
		const customProjectTabs = computed(() => {
			let tabType;
			if (projectPages.isSharedSubPage) tabType = "shared";
			else if (projectPages.isOverviewSubPage) tabType = "overview";
			else tabType = "project";
			return Object.keys(uiStore.moduleTabs[tabType]).filter(settingsStore.isModuleActive).flatMap((module) => uiStore.moduleTabs[tabType][module]);
		});
		const ACTION_TYPES = {
			WORKFLOW: "workflow",
			CREDENTIAL: "credential",
			FOLDER: "folder",
			DATA_TABLE: "dataTable",
			VARIABLE: "variable"
		};
		const createWorkflowButton = computed(() => ({
			value: ACTION_TYPES.WORKFLOW,
			label: i18n.baseText("projects.header.create.workflow"),
			icon: sourceControlStore.preferences.branchReadOnly ? "lock" : void 0,
			size: "mini",
			disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).workflow.create
		}));
		const createCredentialButton = computed(() => ({
			value: ACTION_TYPES.CREDENTIAL,
			label: i18n.baseText("projects.header.create.credential"),
			icon: sourceControlStore.preferences.branchReadOnly ? "lock" : void 0,
			size: "mini",
			disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).credential.create
		}));
		const createDataTableButton = computed(() => ({
			value: ACTION_TYPES.DATA_TABLE,
			label: i18n.baseText("dataTable.add.button.label"),
			icon: sourceControlStore.preferences.branchReadOnly ? "lock" : void 0,
			size: "mini",
			disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes)?.dataTable?.create
		}));
		const createVariableButton = computed(() => ({
			value: ACTION_TYPES.VARIABLE,
			label: i18n.baseText("variables.add.button.label"),
			icon: sourceControlStore.preferences.branchReadOnly ? "lock" : void 0,
			size: "mini",
			disabled: sourceControlStore.preferences.branchReadOnly || !projectVariablePermissions.value.create && !globalVariablesPermissions.value.create
		}));
		const selectedMainButtonType = computed(() => props.mainButton ?? ACTION_TYPES.WORKFLOW);
		const mainButtonConfig = computed(() => {
			switch (selectedMainButtonType.value) {
				case ACTION_TYPES.CREDENTIAL: return createCredentialButton.value;
				case ACTION_TYPES.DATA_TABLE: return createDataTableButton.value;
				case ACTION_TYPES.VARIABLE: return createVariableButton.value;
				case ACTION_TYPES.WORKFLOW:
				default: return createWorkflowButton.value;
			}
		});
		const menu = computed(() => {
			const items = [];
			if (selectedMainButtonType.value !== ACTION_TYPES.WORKFLOW) items.push({
				value: ACTION_TYPES.WORKFLOW,
				label: i18n.baseText("projects.header.create.workflow"),
				disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).workflow.create
			});
			if (selectedMainButtonType.value !== ACTION_TYPES.CREDENTIAL) items.push({
				value: ACTION_TYPES.CREDENTIAL,
				label: i18n.baseText("projects.header.create.credential"),
				disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).credential.create
			});
			if (selectedMainButtonType.value !== ACTION_TYPES.VARIABLE && settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables]) items.push({
				value: ACTION_TYPES.VARIABLE,
				label: i18n.baseText("variables.add.button.label"),
				disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).projectVariable.create
			});
			if (showFolders.value) items.push({
				value: ACTION_TYPES.FOLDER,
				label: i18n.baseText("projects.header.create.folder"),
				disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).folder.create
			});
			if (settingsStore.isDataTableFeatureEnabled && selectedMainButtonType.value !== ACTION_TYPES.DATA_TABLE) items.push({
				value: ACTION_TYPES.DATA_TABLE,
				label: i18n.baseText("dataTable.add.button.label"),
				disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes)?.dataTable?.create
			});
			return items;
		});
		const showProjectIcon = computed(() => {
			return !projectPages.isOverviewSubPage && !projectPages.isSharedSubPage && !isPersonalProject.value;
		});
		function isCredentialsListView(routeName) {
			return [
				VIEWS.PROJECTS_CREDENTIALS,
				VIEWS.CREDENTIALS,
				VIEWS.SHARED_CREDENTIALS
			].includes(routeName);
		}
		function isWorkflowListView(routeName) {
			return [
				VIEWS.PROJECTS_WORKFLOWS,
				VIEWS.WORKFLOWS,
				VIEWS.SHARED_WORKFLOWS,
				VIEWS.PROJECTS_FOLDERS
			].includes(routeName);
		}
		function getUIContext(routeName) {
			if (isCredentialsListView(routeName)) return "credentials_list";
			else if (isWorkflowListView(routeName)) return "workflow_list";
			else return;
		}
		const actions$1 = {
			[ACTION_TYPES.WORKFLOW]: (projectId) => {
				router.push({
					name: VIEWS.NEW_WORKFLOW,
					query: {
						projectId,
						parentFolderId: route.params.folderId,
						uiContext: getUIContext(route.name?.toString() ?? "")
					}
				});
			},
			[ACTION_TYPES.CREDENTIAL]: (projectId) => {
				router.push({
					name: VIEWS.PROJECTS_CREDENTIALS,
					params: {
						projectId,
						credentialId: "create"
					},
					query: { uiContext: getUIContext(route.name?.toString() ?? "") }
				});
			},
			[ACTION_TYPES.FOLDER]: () => {
				emit("createFolder");
			},
			[ACTION_TYPES.DATA_TABLE]: (projectId) => {
				router.push({
					name: PROJECT_DATA_TABLES,
					params: {
						projectId,
						new: "new"
					}
				});
			},
			[ACTION_TYPES.VARIABLE]: () => {
				uiStore.openModalWithData({
					name: VARIABLE_MODAL_KEY,
					data: { mode: "new" }
				});
				telemetry.track("User clicked header add variable button");
			}
		};
		const pageType = computed(() => {
			if (projectPages.isSharedSubPage) return "shared";
			else if (projectPages.isOverviewSubPage) return "overview";
			else return "project";
		});
		const sectionDescription = computed(() => {
			if (projectPages.isSharedSubPage) return i18n.baseText("projects.header.shared.subtitle");
			else if (projectPages.isOverviewSubPage) return i18n.baseText(settingsStore.isDataTableFeatureEnabled ? "projects.header.overview.subtitleWithDataTables" : "projects.header.overview.subtitle");
			else if (isPersonalProject.value) return i18n.baseText(settingsStore.isDataTableFeatureEnabled ? "projects.header.personal.subtitleWithDataTables" : "projects.header.personal.subtitle");
			return null;
		});
		const projectDescription = computed(() => {
			if (projectPages.isProjectsSubPage) return projectsStore.currentProject?.description;
			return null;
		});
		const projectHeaderRef = ref(null);
		const { width: projectHeaderWidth } = useElementSize(projectHeaderRef);
		const headerActionsRef = ref(null);
		const { width: headerActionsWidth } = useElementSize(headerActionsRef);
		const projectSubtitleFontSizeInPxs = ref(null);
		useResizeObserver(projectHeaderRef, () => {
			if (!projectHeaderRef.value) return;
			const projectSubtitleEl = projectHeaderRef.value.querySelector("span[data-test-id=\"project-subtitle\"]");
			if (projectSubtitleEl) {
				const computedStyle = window.getComputedStyle(projectSubtitleEl);
				projectSubtitleFontSizeInPxs.value = parseFloat(computedStyle.fontSize);
			}
		});
		const projectDescriptionTruncated = computed(() => {
			if (!projectDescription.value) return "";
			const availableTextWidth = projectHeaderWidth.value - headerActionsWidth.value;
			const fontSizeInPixels = projectSubtitleFontSizeInPxs.value ?? 14;
			return truncateTextToFitWidth(projectDescription.value, availableTextWidth, fontSizeInPixels);
		});
		const onSelect = (action) => {
			const executableAction = actions$1[action];
			if (!homeProject.value) return;
			executableAction(homeProject.value.id);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createBaseVNode("div", {
					ref_key: "projectHeaderRef",
					ref: projectHeaderRef,
					class: normalizeClass(_ctx.$style.projectHeader)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.projectDetails) }, [showProjectIcon.value ? (openBlock(), createBlock(ProjectIcon_default, {
					key: 0,
					icon: headerIcon.value,
					"border-less": true,
					size: "medium"
				}, null, 8, ["icon"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerActions) }, [projectName.value ? (openBlock(), createBlock(unref(N8nHeading_default), {
					key: 0,
					bold: "",
					tag: "h2",
					size: "xlarge",
					"data-test-id": "project-name"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(projectName.value), 1)]),
					_: 1
				})) : createCommentVNode("", true), sectionDescription.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					color: "text-light",
					"data-test-id": "project-subtitle"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(sectionDescription.value), 1)]),
					_: 1
				})) : projectDescription.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.projectDescriptionWrapper)
				}, [createVNode(unref(N8nText_default), {
					color: "text-light",
					"data-test-id": "project-subtitle"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(projectDescriptionTruncated.value || projectDescription.value), 1)]),
					_: 1
				}), projectDescriptionTruncated.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.tooltip)
				}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(projectDescription.value), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)], 2)], 2), unref(route).name !== unref(VIEWS).PROJECT_SETTINGS ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref_key: "headerActionsRef",
					ref: headerActionsRef,
					class: normalizeClass([_ctx.$style.headerActions])
				}, [createVNode(unref(N8nTooltip_default), {
					disabled: !unref(sourceControlStore).preferences.branchReadOnly,
					content: unref(i18n).baseText("readOnlyEnv.cantAdd.any")
				}, {
					default: withCtx(() => [createBaseVNode("div", _hoisted_1, [createVNode(ReadyToRunV2Button_default, { "has-active-callouts": props.hasActiveCallouts }, null, 8, ["has-active-callouts"]), createVNode(ProjectCreateResource_default, {
						"data-test-id": "add-resource-buttons",
						actions: menu.value,
						disabled: unref(sourceControlStore).preferences.branchReadOnly,
						onAction: onSelect
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), mergeProps({ "data-test-id": `add-resource-${selectedMainButtonType.value}` }, mainButtonConfig.value, { onClick: _cache[0] || (_cache[0] = ($event) => onSelect(selectedMainButtonType.value)) }), null, 16, ["data-test-id"])]),
						_: 1
					}, 8, ["actions", "disabled"])])]),
					_: 1
				}, 8, ["disabled", "content"])], 2)) : createCommentVNode("", true)], 2),
				renderSlot(_ctx.$slots, "default"),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(ProjectTabs_default, {
					"page-type": pageType.value,
					"show-executions": !unref(projectPages).isSharedSubPage,
					"show-settings": showSettings.value,
					"additional-tabs": customProjectTabs.value
				}, null, 8, [
					"page-type",
					"show-executions",
					"show-settings",
					"additional-tabs"
				])], 2)
			]);
		};
	}
});
var ProjectHeader_vue_vue_type_style_index_0_lang_module_default = {
	projectHeader: "_projectHeader_ckjzo_123",
	projectDetails: "_projectDetails_ckjzo_131",
	actions: "_actions_ckjzo_136",
	projectDescriptionWrapper: "_projectDescriptionWrapper_ckjzo_140",
	tooltip: "_tooltip_ckjzo_144",
	headerActions: "_headerActions_ckjzo_167"
};
var ProjectHeader_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectHeader_vue_vue_type_style_index_0_lang_module_default }]]);
export { ProjectHeader_default as t };
