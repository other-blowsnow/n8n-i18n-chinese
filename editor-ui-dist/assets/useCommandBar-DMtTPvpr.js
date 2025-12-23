import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { Gn as N8nIcon_default, Kn as updatedIconSet, ct as useDeviceSupport, st as N8nKeyboardShortcut_default } from "./src-j4VKDieO.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { v as useRoute, y as useRouter } from "./truncate-BlCeUq7F.js";
import { t as useMessage } from "./useMessage-LAVj4VkL.js";
import { $o as useSettingsStore, Fn as useSourceControlStore, In as ProjectTypes, Li as nodeViewEventBus, Pn as useProjectsStore, Sn as useWorkflowHelpers, Tn as useTagsStore, Wi as useUIStore, _t as useNodeTypesStore, en as useCredentialsStore, g as usePostHog, n as useToast, p as useTelemetry, ut as executionRetryMessage, v as useWorkflowsStore, vt as useActionsGenerator } from "./builder.store-BjWbk2Wl.js";
import { Ho as ABOUT_MODAL_KEY, Ir as DATA_TABLE_VIEW, Jr as PROJECT_DATA_TABLES, Ts as WORKFLOW_SETTINGS_MODAL_KEY, Vo as VIEWS, Yo as DUPLICATE_MODAL_KEY, fc as COMMAND_BAR_EXPERIMENT, hs as WHATS_NEW_MODAL_KEY, jo as getResourcePermissions, jr as DATA_TABLE_DETAILS, ns as IMPORT_WORKFLOW_URL_MODAL_KEY, sn as EXECUTE_WORKFLOW_NODE_TYPE, ss as MODAL_CONFIRM, wc as EnterpriseEditionFeature, xa as isResourceLocatorValue } from "./constants-ksa9xIxI.js";
import { r as useRootStore } from "./_baseOrderBy-B2FQHwl_.js";
import { n as require_debounce } from "./useDebounce-Cb7xvwM5.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-2sNk8KGc.js";
import { t as useWorkflowSaving } from "./useWorkflowSaving-Cw6HTOE_.js";
import { t as useExecutionsStore } from "./executions.store-C5l19MhO.js";
import { t as useRunWorkflow } from "./useRunWorkflow-XIsejmpa.js";
import { r as canvasEventBus, t as useCanvasOperations } from "./useCanvasOperations-DMjr_djE.js";
import { t as useFoldersStore } from "./folders.store-BHgrqAL-.js";
import { t as NodeIcon_default } from "./NodeIcon-BDiqVc0r.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DuL7b4l7.js";
import { t as useDataTableStore } from "./dataTable.store-DZQFcsqE.js";
import { t as require_uniqBy } from "./uniqBy-BVnXCFIn.js";
import { n as isIconOrEmoji, t as ProjectIcon_default } from "./ProjectIcon-DTrnRNdg.js";
import { t as CredentialIcon_default } from "./CredentialIcon-CHvZKgl9.js";
import { t as require_FileSaver_min } from "./FileSaver.min--9uV1QmK.js";
import { t as sortByProperty } from "./sortByProperty-DAqnDMg7.js";
import { a as CHAT_PERSONAL_AGENTS_VIEW, l as CHAT_VIEW, n as CHAT_CONVERSATION_VIEW, p as providerDisplayNames, u as CHAT_WORKFLOW_AGENTS_VIEW } from "./constants-qk3hx0l8.js";
import { t as useRecentResources } from "./useRecentResources-JcD1xHVW.js";
import { f as stringifyModel, l as isLlmProvider, s as getAgentRoute, t as useChatStore } from "./chat.store-DnJwLoWK.js";
function useDebugInfo() {
	const settingsStore = useSettingsStore();
	const rootStore = useRootStore();
	const { isTouchDevice, userAgent } = useDeviceSupport();
	const coreInfo = (skipSensitive) => {
		const info = {
			n8nVersion: rootStore.versionCli,
			platform: settingsStore.isDocker && settingsStore.deploymentType === "cloud" ? "docker (cloud)" : settingsStore.isDocker ? "docker (self-hosted)" : "npm",
			nodeJsVersion: settingsStore.nodeJsVersion,
			nodeEnv: settingsStore.nodeEnv,
			database: settingsStore.databaseType === "postgresdb" ? "postgres" : settingsStore.databaseType === "mysqldb" ? "mysql" : settingsStore.databaseType,
			executionMode: settingsStore.isQueueModeEnabled ? settingsStore.isMultiMain ? "scaling (multi-main)" : "scaling (single-main)" : "regular",
			concurrency: settingsStore.settings.concurrency,
			license: settingsStore.isCommunityPlan || !settingsStore.settings.license ? "community" : settingsStore.settings.license.environment === "production" ? "enterprise (production)" : "enterprise (sandbox)"
		};
		if (!skipSensitive) return {
			...info,
			consumerId: !skipSensitive ? settingsStore.consumerId : void 0
		};
		return info;
	};
	const storageInfo = () => {
		return {
			success: settingsStore.saveDataSuccessExecution,
			error: settingsStore.saveDataErrorExecution,
			progress: settingsStore.saveDataProgressExecution,
			manual: settingsStore.saveManualExecutions,
			binaryMode: settingsStore.binaryDataMode === "default" ? "memory" : settingsStore.binaryDataMode
		};
	};
	const pruningInfo = () => {
		if (!settingsStore.pruning?.isEnabled) return { enabled: false };
		return {
			enabled: true,
			maxAge: `${settingsStore.pruning?.maxAge} hours`,
			maxCount: `${settingsStore.pruning?.maxCount} executions`
		};
	};
	const securityInfo = () => {
		const info = {};
		if (!settingsStore.security.blockFileAccessToN8nFiles) info.blockFileAccessToN8nFiles = false;
		if (!settingsStore.security.secureCookie) info.secureCookie = false;
		if (Object.keys(info).length === 0) return;
		return info;
	};
	const client = () => {
		return {
			userAgent,
			isTouchDevice
		};
	};
	const gatherDebugInfo = (skipSensitive) => {
		const debugInfo = {
			core: coreInfo(skipSensitive),
			storage: storageInfo(),
			pruning: pruningInfo(),
			client: client()
		};
		const security = securityInfo();
		if (security) debugInfo.security = security;
		return debugInfo;
	};
	const toMarkdown = (debugInfo, { secondaryHeader }) => {
		const extraLevel = secondaryHeader ? "#" : "";
		let markdown = `${extraLevel}# Debug info\n\n`;
		for (const sectionKey in debugInfo) {
			markdown += `${extraLevel}## ${sectionKey}\n\n`;
			const section = debugInfo[sectionKey];
			if (!section) continue;
			for (const itemKey in section) {
				const itemValue = section[itemKey];
				markdown += `- ${itemKey}: ${itemValue}\n`;
			}
			markdown += "\n";
		}
		return markdown;
	};
	const appendTimestamp = (markdown) => {
		return `${markdown}Generated at: ${(/* @__PURE__ */ new Date()).toISOString()}`;
	};
	const generateDebugInfo = ({ skipSensitive, secondaryHeader } = {}) => {
		return appendTimestamp(toMarkdown(gatherDebugInfo(skipSensitive), { secondaryHeader }));
	};
	return { generateDebugInfo };
}
var CommandBarItemTitle_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CommandBarItemTitle",
	props: {
		title: {},
		suffix: {},
		suffixIcon: {},
		actionText: {},
		shortcut: {},
		isSelected: { type: Boolean },
		isHovered: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", { class: normalizeClass(_ctx.$style.container) }, [
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.title) }, toDisplayString(_ctx.title), 3),
				_ctx.suffix ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.suffix)
				}, [_ctx.suffixIcon ? (openBlock(), createBlock(ProjectIcon_default, {
					key: 0,
					icon: _ctx.suffixIcon,
					size: "mini",
					"border-less": true
				}, null, 8, ["icon"])) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(_ctx.suffix), 1)], 2)) : createCommentVNode("", true),
				_ctx.actionText && (_ctx.isSelected || _ctx.isHovered) ? (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass(_ctx.$style.action)
				}, toDisplayString(_ctx.actionText), 3)) : createCommentVNode("", true),
				_ctx.shortcut ? (openBlock(), createElementBlock("span", {
					key: 2,
					class: normalizeClass(_ctx.$style.shortcut)
				}, [createVNode(unref(N8nKeyboardShortcut_default), {
					keys: _ctx.shortcut.keys,
					"meta-key": _ctx.shortcut.metaKey,
					"alt-key": _ctx.shortcut.altKey,
					"shift-key": _ctx.shortcut.shiftKey
				}, null, 8, [
					"keys",
					"meta-key",
					"alt-key",
					"shift-key"
				])], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var CommandBarItemTitle_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_16jtl_123",
	title: "_title_16jtl_130",
	suffix: "_suffix_16jtl_139",
	action: "_action_16jtl_150",
	shortcut: "_shortcut_16jtl_156"
};
var CommandBarItemTitle_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CommandBarItemTitle_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CommandBarItemTitle_vue_vue_type_style_index_0_lang_module_default }]]);
var ITEM_ID$8 = {
	ADD_NODE: "add-node",
	OPEN_NODE: "open-node",
	ADD_STICKY: "add-sticky"
};
function useNodeCommands(options) {
	const i18n = useI18n();
	const { lastQuery } = options;
	const { addNodes, setNodeActive, editableWorkflow } = useCanvasOperations();
	const nodeTypesStore = useNodeTypesStore();
	const credentialsStore = useCredentialsStore();
	const sourceControlStore = useSourceControlStore();
	const workflowsStore = useWorkflowsStore();
	const { generateMergedNodesAndActions } = useActionsGenerator();
	const isReadOnly = computed(() => sourceControlStore.preferences.branchReadOnly);
	const isArchived = computed(() => workflowsStore.workflow.isArchived);
	const workflowPermissions = computed(() => getResourcePermissions(workflowsStore.workflow.scopes).workflow);
	const hasPermission = (permission) => workflowPermissions.value[permission] === true && !isReadOnly.value && !isArchived.value || workflowsStore.isNewWorkflow;
	const mergedNodes = computed(() => {
		const httpOnlyCredentials = credentialsStore.httpOnlyCredentialTypes;
		const nodeTypes = nodeTypesStore.visibleNodeTypes;
		return generateMergedNodesAndActions(nodeTypes, httpOnlyCredentials).mergedNodes;
	});
	const buildAddNodeCommand = (node, isRoot) => {
		const { name, displayName } = node;
		return {
			id: name,
			title: isRoot ? `${i18n.baseText("generic.add")} ${displayName}` : displayName,
			section: isRoot ? i18n.baseText("commandBar.sections.nodes") : i18n.baseText("commandBar.nodes.addNode"),
			keywords: [displayName],
			icon: {
				component: NodeIcon_default,
				props: {
					nodeType: node,
					size: 16
				}
			},
			handler: async () => {
				const nodes = await addNodes([{ type: name }]);
				if (nodes && nodes.length > 0) canvasEventBus.emit("nodes:select", { ids: [nodes[0].id] });
			}
		};
	};
	const addNodeCommands = computed(() => {
		if (!hasPermission("update")) return [];
		return mergedNodes.value.map((node) => buildAddNodeCommand(node, false));
	});
	const rootAddNodeCommandItems = computed(() => {
		if (lastQuery.value.length <= 2 || !hasPermission("update")) return [];
		return mergedNodes.value.map((node) => buildAddNodeCommand(node, true));
	});
	const buildOpenNodeCommand = (node, isRoot) => {
		const { id, name, type } = node;
		const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
		return {
			id,
			title: isRoot ? i18n.baseText("generic.openResource", { interpolate: { resource: name } }) : name,
			section: isRoot ? i18n.baseText("commandBar.sections.nodes") : i18n.baseText("commandBar.nodes.openNode"),
			keywords: [name, type],
			icon: {
				component: NodeIcon_default,
				props: {
					nodeType,
					size: 16
				}
			},
			handler: () => {
				setNodeActive(id, "command_bar");
			},
			placeholder: i18n.baseText("commandBar.nodes.searchPlaceholder")
		};
	};
	const openNodeCommands = computed(() => {
		return editableWorkflow.value.nodes.map((node) => buildOpenNodeCommand(node, false));
	});
	const rootOpenNodeCommandItems = computed(() => {
		if (lastQuery.value.length <= 2) return [];
		return editableWorkflow.value.nodes.map((node) => buildOpenNodeCommand(node, true));
	});
	return { commands: computed(() => {
		return [
			...hasPermission("update") ? [{
				id: ITEM_ID$8.ADD_NODE,
				title: {
					component: CommandBarItemTitle_default,
					props: {
						title: i18n.baseText("commandBar.nodes.addNode"),
						shortcut: { keys: ["tab"] }
					}
				},
				keywords: [i18n.baseText("commandBar.nodes.addNode")],
				section: i18n.baseText("commandBar.sections.nodes"),
				placeholder: i18n.baseText("commandBar.nodes.searchPlaceholder"),
				children: [...addNodeCommands.value],
				icon: {
					component: N8nIcon_default,
					props: { icon: "plus" }
				}
			}] : [],
			...rootAddNodeCommandItems.value,
			{
				id: ITEM_ID$8.OPEN_NODE,
				title: i18n.baseText("commandBar.nodes.openNode"),
				section: i18n.baseText("commandBar.sections.nodes"),
				children: [...openNodeCommands.value],
				placeholder: i18n.baseText("commandBar.nodes.searchPlaceholder"),
				icon: {
					component: N8nIcon_default,
					props: { icon: "columns-3-cog" }
				}
			},
			...rootOpenNodeCommandItems.value,
			...hasPermission("update") ? [{
				id: ITEM_ID$8.ADD_STICKY,
				title: {
					component: CommandBarItemTitle_default,
					props: {
						title: i18n.baseText("commandBar.nodes.addStickyNote"),
						shortcut: {
							shiftKey: true,
							keys: ["s"]
						}
					}
				},
				section: i18n.baseText("commandBar.sections.nodes"),
				handler: () => {
					canvasEventBus.emit("create:sticky");
				},
				icon: {
					component: N8nIcon_default,
					props: { icon: "sticky-note" }
				}
			}] : []
		];
	}) };
}
var import_FileSaver_min = /* @__PURE__ */ __toESM(require_FileSaver_min());
var import_uniqBy = /* @__PURE__ */ __toESM(require_uniqBy());
var ITEM_ID$7 = {
	OPEN_CREDENTIAL: "open-credential",
	OPEN_SUB_WORKFLOW: "open-sub-workflow",
	TEST_WORKFLOW: "test-workflow",
	SAVE_WORKFLOW: "save-workflow",
	SELECT_ALL: "select-all",
	OPEN_WORKFLOW_SETTINGS: "open-workflow-settings",
	TIDY_UP_WORKFLOW: "tidy-up-workflow",
	RENAME_WORKFLOW: "rename-workflow",
	ADD_TAG: "add-tag",
	DUPLICATE_WORKFLOW: "duplicate-workflow",
	DOWNLOAD_WORKFLOW: "download-workflow",
	IMPORT_WORKFLOW_FROM_URL: "import-workflow-from-url",
	IMPORT_WORKFLOW_FROM_FILE: "import-workflow-from-file",
	ARCHIVE_WORKFLOW: "archive-workflow",
	UNARCHIVE_WORKFLOW: "unarchive-workflow",
	DELETE_WORKFLOW: "delete-workflow",
	PUBLISH_WORKFLOW: "publish-workflow",
	UNPUBLISH_WORKFLOW: "unpublish-workflow"
};
function useWorkflowCommands() {
	const i18n = useI18n();
	const { editableWorkflow } = useCanvasOperations();
	const rootStore = useRootStore();
	const uiStore = useUIStore();
	const tagsStore = useTagsStore();
	const workflowsStore = useWorkflowsStore();
	const sourceControlStore = useSourceControlStore();
	const router = useRouter();
	const runWorkflow = useRunWorkflow({ router });
	const workflowHelpers = useWorkflowHelpers();
	const telemetry = useTelemetry();
	const workflowSaving = useWorkflowSaving({ router });
	const isReadOnly = computed(() => sourceControlStore.preferences.branchReadOnly);
	const isWorkflowSaving = computed(() => uiStore.isActionActive.workflowSaving);
	const isArchived = computed(() => workflowsStore.workflow.isArchived);
	const workflowPermissions = computed(() => getResourcePermissions(workflowsStore.workflow.scopes).workflow);
	const hasPermission = (permission) => workflowPermissions.value[permission] === true && !isReadOnly.value || workflowsStore.isNewWorkflow;
	const credentialCommands = computed(() => {
		const credentials = (0, import_uniqBy.default)(editableWorkflow.value.nodes.map((node) => Object.values(node.credentials ?? {})).flat(), (cred) => cred.id);
		if (credentials.length === 0) return [];
		return [{
			id: ITEM_ID$7.OPEN_CREDENTIAL,
			title: i18n.baseText("commandBar.workflow.openCredential"),
			section: i18n.baseText("commandBar.sections.credentials"),
			children: [...credentials.map((credential) => ({
				id: credential.id,
				title: credential.name,
				handler: () => {
					if (typeof credential.id === "string") uiStore.openExistingCredential(credential.id);
				}
			}))],
			icon: {
				component: N8nIcon_default,
				props: { icon: "arrow-right" }
			}
		}];
	});
	const canvasActions = computed(() => [
		...hasPermission("update") && !isArchived.value ? [
			...!isWorkflowSaving.value ? [{
				id: ITEM_ID$7.SAVE_WORKFLOW,
				title: {
					component: CommandBarItemTitle_default,
					props: {
						title: i18n.baseText("commandBar.workflow.save"),
						shortcut: {
							metaKey: true,
							keys: ["s"]
						}
					}
				},
				keywords: [i18n.baseText("commandBar.workflow.save")],
				section: i18n.baseText("commandBar.sections.workflow"),
				handler: async () => {
					if (await workflowSaving.saveCurrentWorkflow()) canvasEventBus.emit("saved:workflow");
				},
				icon: {
					component: N8nIcon_default,
					props: { icon: "save" }
				}
			}] : [],
			{
				id: ITEM_ID$7.PUBLISH_WORKFLOW,
				title: i18n.baseText("commandBar.workflow.publish"),
				section: i18n.baseText("commandBar.sections.workflow"),
				handler: () => {
					nodeViewEventBus.emit("publishWorkflow");
				},
				icon: {
					component: N8nIcon_default,
					props: { icon: "circle-check" }
				}
			},
			{
				id: ITEM_ID$7.UNPUBLISH_WORKFLOW,
				title: i18n.baseText("commandBar.workflow.unpublish"),
				section: i18n.baseText("commandBar.sections.workflow"),
				handler: () => {
					nodeViewEventBus.emit("unpublishWorkflow");
				},
				icon: {
					component: N8nIcon_default,
					props: { icon: "circle-minus" }
				}
			},
			{
				id: ITEM_ID$7.TEST_WORKFLOW,
				title: {
					component: CommandBarItemTitle_default,
					props: {
						title: i18n.baseText("commandBar.workflow.test"),
						shortcut: {
							metaKey: true,
							keys: ["enter"]
						}
					}
				},
				section: i18n.baseText("commandBar.sections.workflow"),
				keywords: [
					i18n.baseText("commandBar.workflow.test"),
					i18n.baseText("commandBar.workflow.keywords.test"),
					i18n.baseText("commandBar.workflow.keywords.execute"),
					i18n.baseText("commandBar.workflow.keywords.run"),
					i18n.baseText("commandBar.workflow.keywords.workflow")
				],
				handler: () => {
					runWorkflow.runEntireWorkflow("main");
				},
				icon: {
					component: N8nIcon_default,
					props: { icon: "flask-conical" }
				}
			},
			{
				id: ITEM_ID$7.TIDY_UP_WORKFLOW,
				title: {
					component: CommandBarItemTitle_default,
					props: {
						title: i18n.baseText("commandBar.workflow.tidyUp"),
						shortcut: {
							shiftKey: true,
							altKey: true,
							keys: ["t"]
						}
					}
				},
				keywords: [i18n.baseText("commandBar.workflow.tidyUp")],
				section: i18n.baseText("commandBar.sections.workflow"),
				handler: () => {
					canvasEventBus.emit("tidyUp", { source: "command-bar" });
				},
				icon: {
					component: N8nIcon_default,
					props: { icon: "wand-sparkles" }
				}
			},
			{
				id: ITEM_ID$7.RENAME_WORKFLOW,
				title: i18n.baseText("commandBar.workflow.rename"),
				section: i18n.baseText("commandBar.sections.workflow"),
				handler: () => {
					nodeViewEventBus.emit("renameWorkflow");
				},
				icon: {
					component: N8nIcon_default,
					props: { icon: "pencil-alt" }
				}
			},
			{
				id: ITEM_ID$7.ADD_TAG,
				title: i18n.baseText("workflowDetails.addTag"),
				section: i18n.baseText("commandBar.sections.workflow"),
				handler: () => {
					nodeViewEventBus.emit("addTag");
				},
				icon: {
					component: N8nIcon_default,
					props: { icon: "tags" }
				}
			}
		] : [],
		{
			id: ITEM_ID$7.SELECT_ALL,
			title: {
				component: CommandBarItemTitle_default,
				props: {
					title: i18n.baseText("commandBar.workflow.selectAll"),
					shortcut: {
						metaKey: true,
						keys: ["a"]
					}
				}
			},
			section: i18n.baseText("commandBar.sections.workflow"),
			keywords: [i18n.baseText("commandBar.workflow.selectAll")],
			handler: () => {
				canvasEventBus.emit("nodes:selectAll");
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "list-checks" }
			}
		},
		{
			id: ITEM_ID$7.OPEN_WORKFLOW_SETTINGS,
			title: i18n.baseText("commandBar.workflow.openSettings"),
			section: i18n.baseText("commandBar.sections.workflow"),
			handler: () => {
				uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "cog" }
			}
		},
		...hasPermission("create") ? [{
			id: ITEM_ID$7.DUPLICATE_WORKFLOW,
			title: i18n.baseText("commandBar.workflow.duplicate"),
			section: i18n.baseText("commandBar.sections.workflow"),
			handler: () => {
				uiStore.openModalWithData({
					name: DUPLICATE_MODAL_KEY,
					data: {
						id: workflowsStore.workflowId,
						name: editableWorkflow.value.name,
						tags: editableWorkflow.value.tags
					}
				});
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "copy" }
			}
		}] : []
	]);
	const subworkflowCommands = computed(() => {
		const subworkflows = editableWorkflow.value.nodes.filter((node) => node.type === EXECUTE_WORKFLOW_NODE_TYPE).map((node) => node?.parameters?.workflowId).filter((rlValue) => isResourceLocatorValue(rlValue) && typeof rlValue.value === "string" && typeof rlValue.cachedResultName === "string").map(({ value, cachedResultName }) => ({
			id: value,
			name: cachedResultName
		}));
		if (subworkflows.length === 0) return [];
		return [{
			id: ITEM_ID$7.OPEN_SUB_WORKFLOW,
			title: i18n.baseText("commandBar.workflow.openSubworkflow"),
			section: i18n.baseText("commandBar.sections.workflow"),
			children: [...subworkflows.map((workflow) => ({
				id: workflow.id,
				title: workflow.name,
				handler: () => {
					const { href } = router.resolve({
						name: VIEWS.WORKFLOW,
						params: { name: workflow.id }
					});
					window.open(href, "_blank", "noreferrer");
				}
			}))],
			icon: {
				component: N8nIcon_default,
				props: { icon: "sign-in-alt" }
			}
		}];
	});
	const exportCommands = computed(() => {
		return [{
			id: ITEM_ID$7.DOWNLOAD_WORKFLOW,
			title: i18n.baseText("commandBar.workflow.download"),
			section: i18n.baseText("commandBar.sections.workflow"),
			handler: async () => {
				const workflowData = await workflowHelpers.getWorkflowDataToSave();
				const { tags,...data } = workflowData;
				const exportData = {
					...data,
					meta: {
						...workflowData.meta,
						instanceId: rootStore.instanceId
					},
					tags: (tags ?? []).map((tagId) => {
						return tagsStore.tagsById[tagId];
					})
				};
				const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json;charset=utf-8" });
				let name = editableWorkflow.value.name || "unsaved_workflow";
				name = name.replace(/[^a-z0-9]/gi, "_");
				telemetry.track("User exported workflow", { workflow_id: workflowData.id });
				(0, import_FileSaver_min.saveAs)(blob, name + ".json");
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "download" }
			},
			keywords: [i18n.baseText("commandBar.workflow.keywords.download"), i18n.baseText("commandBar.workflow.keywords.export")]
		}];
	});
	const importCommands = computed(() => {
		return [{
			id: ITEM_ID$7.IMPORT_WORKFLOW_FROM_URL,
			title: i18n.baseText("commandBar.workflow.importFromURL"),
			section: i18n.baseText("commandBar.sections.workflow"),
			icon: {
				component: N8nIcon_default,
				props: { icon: "link" }
			},
			handler: () => {
				uiStore.openModal(IMPORT_WORKFLOW_URL_MODAL_KEY);
			}
		}, {
			id: ITEM_ID$7.IMPORT_WORKFLOW_FROM_FILE,
			title: i18n.baseText("commandBar.workflow.importFromFile"),
			section: i18n.baseText("commandBar.sections.workflow"),
			icon: {
				component: N8nIcon_default,
				props: { icon: "file-import" }
			},
			handler: () => {
				nodeViewEventBus.emit("importWorkflowFromFile");
			}
		}];
	});
	const lifecycleCommands = computed(() => {
		if (!hasPermission("delete")) return [];
		return !isArchived.value ? [{
			id: ITEM_ID$7.ARCHIVE_WORKFLOW,
			title: i18n.baseText("commandBar.workflow.archive"),
			section: i18n.baseText("commandBar.sections.workflow"),
			keywords: [i18n.baseText("commandBar.workflow.keywords.delete")],
			icon: {
				component: N8nIcon_default,
				props: { icon: "trash" }
			},
			handler: () => {
				nodeViewEventBus.emit("archiveWorkflow");
			}
		}] : [{
			id: ITEM_ID$7.UNARCHIVE_WORKFLOW,
			title: i18n.baseText("commandBar.workflow.unarchive"),
			section: i18n.baseText("commandBar.sections.workflow"),
			keywords: [i18n.baseText("commandBar.workflow.keywords.restore")],
			icon: {
				component: N8nIcon_default,
				props: { icon: "archive-restore" }
			},
			handler: () => {
				nodeViewEventBus.emit("unarchiveWorkflow");
			}
		}, {
			id: ITEM_ID$7.DELETE_WORKFLOW,
			title: i18n.baseText("commandBar.workflow.delete"),
			section: i18n.baseText("commandBar.sections.workflow"),
			icon: {
				component: N8nIcon_default,
				props: { icon: "trash" }
			},
			handler: () => {
				nodeViewEventBus.emit("deleteWorkflow");
			}
		}];
	});
	const workflowCommands = computed(() => {
		return [
			...canvasActions.value,
			...subworkflowCommands.value,
			...exportCommands.value,
			...importCommands.value,
			...lifecycleCommands.value
		];
	});
	return { commands: computed(() => [...workflowCommands.value, ...credentialCommands.value]) };
}
var import_debounce$2 = /* @__PURE__ */ __toESM(require_debounce());
var ITEM_ID$6 = {
	CREATE_WORKFLOW: "create-workflow",
	OPEN_WORKFLOW: "open-workflow"
};
function useWorkflowNavigationCommands(options) {
	const i18n = useI18n();
	const { lastQuery, activeNodeId, currentProjectName } = options;
	const nodeTypesStore = useNodeTypesStore();
	const credentialsStore = useCredentialsStore();
	const workflowsStore = useWorkflowsStore();
	const projectsStore = useProjectsStore();
	const tagsStore = useTagsStore();
	const sourceControlStore = useSourceControlStore();
	const foldersStore = useFoldersStore();
	const router = useRouter();
	const route = useRoute();
	const { generateMergedNodesAndActions } = useActionsGenerator();
	const workflowResults = ref([]);
	const workflowKeywords = ref(/* @__PURE__ */ new Map());
	const workflowMatchedNodeTypes = ref(/* @__PURE__ */ new Map());
	const isLoading = ref(false);
	const homeProject = computed(() => projectsStore.currentProject ?? projectsStore.personalProject);
	function orderResultByCurrentProjectFirst(results) {
		return results.sort((a, b) => {
			if (a.homeProject?.id === projectsStore.currentProjectId) return -1;
			if (b.homeProject?.id === projectsStore.currentProjectId) return 1;
			return 0;
		});
	}
	const fetchWorkflowsImpl = async (query) => {
		try {
			const trimmed = (query || "").trim();
			const trimmedLower = trimmed.toLowerCase();
			const httpOnlyCredentials = credentialsStore.httpOnlyCredentialTypes;
			const visibleNodeTypes = nodeTypesStore.allNodeTypes;
			const { mergedNodes } = generateMergedNodesAndActions(visibleNodeTypes, httpOnlyCredentials);
			const matchedNodes = mergedNodes.filter((node) => node.displayName?.toLowerCase() === trimmedLower);
			const matchedNodeTypeNames = Array.from(new Set(matchedNodes.map((node) => node.name)));
			const matchedTag = tagsStore.allTags.find((tag) => tag.name.toLowerCase() === trimmedLower);
			const nameSearchPromise = workflowsStore.searchWorkflows({
				query: trimmed,
				select: [
					"id",
					"name",
					"active",
					"ownedBy",
					"parentFolder",
					"isArchived",
					"description"
				]
			});
			const nodeTypeSearchPromise = matchedNodeTypeNames.length > 0 ? workflowsStore.searchWorkflows({
				nodeTypes: matchedNodeTypeNames,
				select: [
					"id",
					"name",
					"active",
					"nodes",
					"ownedBy",
					"parentFolder",
					"isArchived",
					"description"
				]
			}) : Promise.resolve([]);
			const tagSearchPromise = matchedTag ? workflowsStore.searchWorkflows({
				tags: [matchedTag.name],
				select: [
					"id",
					"name",
					"active",
					"ownedBy",
					"tags",
					"parentFolder",
					"isArchived",
					"description"
				]
			}) : Promise.resolve([]);
			const [byName, byNodeTypes, byTags] = await Promise.all([
				nameSearchPromise,
				nodeTypeSearchPromise,
				tagSearchPromise
			]);
			const keywordsMap = /* @__PURE__ */ new Map();
			const nodeTypesMap = /* @__PURE__ */ new Map();
			const matchedNodeDisplayNames = new Map(matchedNodes.map((node) => [node.name, node.displayName]));
			byNodeTypes.forEach((workflow) => {
				if (!workflow.nodes) return;
				const matchedWorkflowNodes = workflow.nodes.filter((node) => matchedNodeTypeNames.includes(node.type));
				if (matchedWorkflowNodes.length === 0) return;
				nodeTypesMap.set(workflow.id, matchedWorkflowNodes[0].type);
				const matchedDisplayNames = matchedWorkflowNodes.map((node) => matchedNodeDisplayNames.get(node.type)).filter((name) => !!name);
				if (matchedDisplayNames.length > 0) keywordsMap.set(workflow.id, matchedDisplayNames);
			});
			workflowKeywords.value = keywordsMap;
			workflowMatchedNodeTypes.value = nodeTypesMap;
			const merged = [
				...byName,
				...byNodeTypes,
				...byTags
			];
			const nonArchivedWorkflows = Array.from(new Map(merged.map((w) => [w.id, w])).values()).filter((w) => !w.isArchived);
			workflowResults.value = orderResultByCurrentProjectFirst(nonArchivedWorkflows);
			const parentFolders = nonArchivedWorkflows.map((w) => w.parentFolder).filter((pf) => pf !== void 0 && pf !== null);
			if (parentFolders.length > 0) foldersStore.cacheFolders(parentFolders.map((pf) => ({
				id: pf.id,
				name: pf.name,
				parentFolder: void 0
			})));
		} catch {
			workflowResults.value = [];
			workflowKeywords.value.clear();
			workflowMatchedNodeTypes.value.clear();
		} finally {
			isLoading.value = false;
		}
	};
	const fetchWorkflowsDebounced = (0, import_debounce$2.default)(fetchWorkflowsImpl, 300);
	const buildFolderPath = (folderId) => {
		const path = [];
		let currentFolderId = folderId;
		while (currentFolderId) {
			const folder = foldersStore.getCachedFolder(currentFolderId);
			if (!folder) break;
			path.unshift(folder.name);
			currentFolderId = folder.parentFolder;
		}
		return path;
	};
	const getProjectIcon = (workflow) => {
		if (workflow.homeProject?.type === ProjectTypes.Personal) return {
			type: "icon",
			value: "user"
		};
		if (workflow.homeProject?.name) return isIconOrEmoji(workflow.homeProject.icon) ? workflow.homeProject.icon : {
			type: "icon",
			value: "layers"
		};
		return {
			type: "icon",
			value: "house"
		};
	};
	const getWorkflowProjectSuffix = (workflow) => {
		const parts = [];
		if (workflow.homeProject && workflow.homeProject.type === ProjectTypes.Personal) parts.push(i18n.baseText("projects.menu.personal"));
		else if (workflow.homeProject?.name) parts.push(workflow.homeProject.name);
		if (workflow.parentFolder?.id) {
			const folderPath = buildFolderPath(workflow.parentFolder.id);
			if (folderPath.length > 2) parts.push(folderPath[0], "...", folderPath[folderPath.length - 1]);
			else parts.push(...folderPath);
		}
		return parts.join(" / ");
	};
	const openWorkflowCommand = (workflow, isRoot) => {
		let keywords = workflowKeywords.value.get(workflow.id) ?? [];
		const matchedNodeType = workflowMatchedNodeTypes.value.get(workflow.id);
		let icon;
		if (matchedNodeType) {
			const nodeType = nodeTypesStore.getNodeType(matchedNodeType);
			if (nodeType) icon = {
				component: NodeIcon_default,
				props: {
					nodeType,
					size: 24
				}
			};
		}
		const workflowName = workflow.name;
		keywords = [...keywords, workflowName];
		if (workflow.description) keywords = [...keywords, workflow.description];
		if (workflow.tags && workflow.tags.length > 0) keywords = [...keywords, ...workflow.tags.map((tag) => typeof tag === "string" ? tag : tag.name)];
		const suffix$1 = getWorkflowProjectSuffix(workflow);
		const name = workflow.name || i18n.baseText("commandBar.workflows.unnamed");
		const title$1 = isRoot ? i18n.baseText("generic.openResource", { interpolate: { resource: name } }) : name;
		const section = isRoot ? i18n.baseText("commandBar.sections.workflows") : i18n.baseText("commandBar.workflows.open");
		return {
			id: workflow.id,
			matchAnySearchTerm: !isRoot,
			title: {
				component: CommandBarItemTitle_default,
				props: {
					title: title$1,
					suffix: suffix$1,
					...suffix$1 ? { suffixIcon: getProjectIcon(workflow) } : {}
				}
			},
			section,
			...keywords.length > 0 ? { keywords } : {},
			...icon ? { icon } : {},
			handler: () => {
				const targetRoute = router.resolve({
					name: VIEWS.WORKFLOW,
					params: { name: workflow.id }
				});
				window.location.href = targetRoute.fullPath;
			}
		};
	};
	const openWorkflowCommands = computed(() => {
		return workflowResults.value.map((workflow) => openWorkflowCommand(workflow, false));
	});
	const rootWorkflowItems = computed(() => {
		if (lastQuery.value.length <= 2 || !workflowsStore.canViewWorkflows) return [];
		return workflowResults.value.map((workflow) => openWorkflowCommand(workflow, true));
	});
	const workflowNavigationCommands = computed(() => {
		const hasCreatePermission = !sourceControlStore.preferences.branchReadOnly && getResourcePermissions(homeProject.value?.scopes).workflow.create;
		const newWorkflowCommand = {
			id: ITEM_ID$6.CREATE_WORKFLOW,
			title: i18n.baseText("commandBar.workflows.create", { interpolate: { projectName: currentProjectName.value } }),
			keywords: [i18n.baseText("workflows.add")],
			section: i18n.baseText("commandBar.sections.workflows"),
			icon: {
				component: N8nIcon_default,
				props: {
					icon: "plus",
					color: "text-light"
				}
			},
			handler: () => {
				const targetRoute = router.resolve({
					name: VIEWS.NEW_WORKFLOW,
					query: {
						projectId: projectsStore.currentProjectId,
						parentFolderId: route.params.folderId
					}
				});
				window.location.href = targetRoute.fullPath;
			}
		};
		return [
			...hasCreatePermission ? [newWorkflowCommand] : [],
			...workflowsStore.canViewWorkflows ? [{
				id: ITEM_ID$6.OPEN_WORKFLOW,
				title: i18n.baseText("commandBar.workflows.open"),
				section: i18n.baseText("commandBar.sections.workflows"),
				placeholder: i18n.baseText("commandBar.workflows.searchPlaceholder"),
				children: openWorkflowCommands.value,
				icon: {
					component: N8nIcon_default,
					props: {
						icon: "arrow-right",
						color: "text-light"
					}
				}
			}] : [],
			...rootWorkflowItems.value
		];
	});
	function onCommandBarChange(query) {
		const trimmed = query.trim();
		const isInWorkflowParent = activeNodeId.value === ITEM_ID$6.OPEN_WORKFLOW;
		const isRootWithQuery = activeNodeId.value === null && trimmed.length > 2;
		if (isInWorkflowParent || isRootWithQuery) {
			isLoading.value = isInWorkflowParent;
			fetchWorkflowsDebounced(trimmed);
		}
	}
	function onCommandBarNavigateTo(to) {
		activeNodeId.value = to;
		if (to === ITEM_ID$6.OPEN_WORKFLOW) {
			isLoading.value = true;
			fetchWorkflowsImpl("");
		} else if (to === null) {
			workflowResults.value = [];
			workflowKeywords.value.clear();
			workflowMatchedNodeTypes.value.clear();
		}
	}
	async function initialize() {
		await tagsStore.fetchAll();
	}
	return {
		commands: workflowNavigationCommands,
		handlers: {
			onCommandBarChange,
			onCommandBarNavigateTo
		},
		isLoading,
		initialize
	};
}
var import_debounce$1 = /* @__PURE__ */ __toESM(require_debounce());
var ITEM_ID$5 = {
	OPEN_DATA_TABLE: "open-data-table",
	CREATE_DATA_TABLE: "create-data-table"
};
function useDataTableNavigationCommands(options) {
	const i18n = useI18n();
	const { lastQuery, activeNodeId, currentProjectName } = options;
	const dataTableStore = useDataTableStore();
	const projectsStore = useProjectsStore();
	const sourceControlStore = useSourceControlStore();
	const router = useRouter();
	const route = useRoute();
	const dataTableResults = ref([]);
	const isLoading = ref(false);
	const hasDataFetched = ref(false);
	const currentProjectId = computed(() => {
		return typeof route.params.projectId === "string" ? route.params.projectId : personalProjectId.value;
	});
	const homeProject = computed(() => projectsStore.currentProject ?? projectsStore.personalProject);
	const personalProjectId = computed(() => {
		return projectsStore.myProjects.find((p) => p.type === "personal")?.id;
	});
	function orderResultByCurrentProjectFirst(results) {
		return results.sort((a, b) => {
			if (a.project?.id === currentProjectId.value) return -1;
			if (b.project?.id === currentProjectId.value) return 1;
			return 0;
		});
	}
	const fetchDataTablesImpl = async (query) => {
		try {
			const trimmed = (query || "").trim();
			if (!hasDataFetched.value) {
				await dataTableStore.fetchDataTables("", 1, 1e3);
				hasDataFetched.value = true;
			}
			const trimmedLower = trimmed.toLowerCase();
			dataTableResults.value = orderResultByCurrentProjectFirst(dataTableStore.dataTables.filter((dataTable) => dataTable.name.toLowerCase().includes(trimmedLower)));
		} catch {
			dataTableResults.value = [];
		} finally {
			isLoading.value = false;
		}
	};
	const fetchDataTablesDebounced = (0, import_debounce$1.default)(fetchDataTablesImpl, 300);
	const getDataTableProjectSuffix = (dataTable) => {
		if (dataTable.project && dataTable.project.type === "personal") return i18n.baseText("projects.menu.personal");
		return dataTable.project?.name ?? "";
	};
	const createDataTableCommand = (dataTable, isRoot) => {
		const keywords = [dataTable.name];
		const title$1 = isRoot ? i18n.baseText("generic.openResource", { interpolate: { resource: dataTable.name } }) : dataTable.name;
		const section = isRoot ? i18n.baseText("commandBar.sections.dataTables") : i18n.baseText("commandBar.dataTables.open");
		return {
			id: dataTable.id,
			title: {
				component: CommandBarItemTitle_default,
				props: {
					title: title$1,
					suffix: getDataTableProjectSuffix(dataTable)
				}
			},
			section,
			keywords,
			handler: () => {
				router.push({
					name: DATA_TABLE_DETAILS,
					params: {
						projectId: dataTable.projectId,
						id: dataTable.id
					}
				});
			}
		};
	};
	const openDataTableCommands = computed(() => {
		return dataTableResults.value.map((dataTable) => createDataTableCommand(dataTable, false));
	});
	const rootDataTableItems = computed(() => {
		if (lastQuery.value.length <= 2 || !dataTableStore.canViewDataTables) return [];
		return dataTableResults.value.map((dataTable) => createDataTableCommand(dataTable, true));
	});
	const dataTableNavigationCommands = computed(() => {
		const hasCreatePermission = !sourceControlStore.preferences.branchReadOnly && getResourcePermissions(homeProject.value?.scopes).dataTable.create;
		const newDataTableCommand = {
			id: ITEM_ID$5.CREATE_DATA_TABLE,
			title: i18n.baseText("commandBar.dataTables.create", { interpolate: { projectName: currentProjectName.value } }),
			section: i18n.baseText("commandBar.sections.dataTables"),
			icon: {
				component: N8nIcon_default,
				props: {
					icon: "table",
					color: "text-light"
				}
			},
			handler: () => {
				if (!currentProjectId.value) return;
				router.push({
					name: PROJECT_DATA_TABLES,
					params: {
						projectId: currentProjectId.value,
						new: "new"
					}
				});
			}
		};
		return [
			...hasCreatePermission ? [newDataTableCommand] : [],
			...dataTableStore.canViewDataTables ? [{
				id: ITEM_ID$5.OPEN_DATA_TABLE,
				title: i18n.baseText("commandBar.dataTables.open"),
				section: i18n.baseText("commandBar.sections.dataTables"),
				placeholder: i18n.baseText("commandBar.dataTables.searchPlaceholder"),
				icon: {
					component: N8nIcon_default,
					props: {
						icon: "table",
						color: "text-light"
					}
				},
				children: openDataTableCommands.value
			}] : [],
			...rootDataTableItems.value
		];
	});
	function onCommandBarChange(query) {
		if (!dataTableStore.canViewDataTables) return;
		const trimmed = query.trim();
		const isInDataTableParent = activeNodeId.value === ITEM_ID$5.OPEN_DATA_TABLE;
		const isRootWithQuery = activeNodeId.value === null && trimmed.length > 2;
		if (isInDataTableParent || isRootWithQuery) {
			isLoading.value = isInDataTableParent;
			fetchDataTablesDebounced(trimmed);
		}
	}
	function onCommandBarNavigateTo(to) {
		activeNodeId.value = to;
		if (to === ITEM_ID$5.OPEN_DATA_TABLE) {
			isLoading.value = true;
			fetchDataTablesImpl("");
		} else if (to === null) {
			dataTableResults.value = [];
			hasDataFetched.value = false;
		}
	}
	return {
		commands: dataTableNavigationCommands,
		handlers: {
			onCommandBarChange,
			onCommandBarNavigateTo
		},
		isLoading
	};
}
var import_debounce = /* @__PURE__ */ __toESM(require_debounce());
var ITEM_ID$4 = {
	CREATE_CREDENTIAL: "create-credential",
	OPEN_CREDENTIAL: "open-credential"
};
function useCredentialNavigationCommands(options) {
	const i18n = useI18n();
	const { lastQuery, activeNodeId, currentProjectName } = options;
	const credentialsStore = useCredentialsStore();
	const projectsStore = useProjectsStore();
	const uiStore = useUIStore();
	const sourceControlStore = useSourceControlStore();
	const route = useRoute();
	const router = useRouter();
	const credentialResults = ref([]);
	const isLoading = ref(false);
	const personalProjectId = computed(() => {
		return projectsStore.myProjects.find((p) => p.type === "personal")?.id;
	});
	const homeProject = computed(() => projectsStore.currentProject ?? projectsStore.personalProject);
	function orderResultByCurrentProjectFirst(results) {
		const currentProjectId = typeof route.params.projectId === "string" ? route.params.projectId : personalProjectId.value;
		return results.sort((a, b) => {
			if (a.homeProject?.id === currentProjectId) return -1;
			if (b.homeProject?.id === currentProjectId) return 1;
			return 0;
		});
	}
	const fetchCredentialsImpl = async (query) => {
		try {
			const trimmed = (query || "").trim();
			await credentialsStore.fetchAllCredentials();
			const trimmedLower = trimmed.toLowerCase();
			credentialResults.value = orderResultByCurrentProjectFirst(credentialsStore.allCredentials.filter((credential) => credential.name.toLowerCase().includes(trimmedLower)));
		} catch {
			credentialResults.value = [];
		} finally {
			isLoading.value = false;
		}
	};
	const fetchCredentialsDebounced = (0, import_debounce.default)(fetchCredentialsImpl, 300);
	const getCredentialProjectSuffix = (credential) => {
		if (credential.homeProject && credential.homeProject.type === "personal") return i18n.baseText("projects.menu.personal");
		return credential.homeProject?.name ?? "";
	};
	const createCredentialCommand = (credential, isRoot) => {
		const keywords = [credential.name];
		const title$1 = isRoot ? i18n.baseText("generic.openResource", { interpolate: { resource: credential.name } }) : credential.name;
		const section = isRoot ? i18n.baseText("commandBar.sections.credentials") : i18n.baseText("commandBar.credentials.open");
		return {
			id: credential.id,
			title: {
				component: CommandBarItemTitle_default,
				props: {
					title: title$1,
					suffix: getCredentialProjectSuffix(credential)
				}
			},
			section,
			keywords,
			icon: {
				component: CredentialIcon_default,
				props: { credentialTypeName: credential.type }
			},
			handler: () => {
				uiStore.openExistingCredential(credential.id);
			}
		};
	};
	const openCredentialCommands = computed(() => {
		return credentialResults.value.map((credential) => createCredentialCommand(credential, false));
	});
	const rootCredentialItems = computed(() => {
		if (lastQuery.value.length <= 2) return [];
		return credentialResults.value.map((credential) => createCredentialCommand(credential, true));
	});
	const credentialNavigationCommands = computed(() => {
		const hasCreatePermission = !sourceControlStore.preferences.branchReadOnly && getResourcePermissions(homeProject.value?.scopes).credential.create;
		const newCredentialCommand = {
			id: ITEM_ID$4.CREATE_CREDENTIAL,
			title: i18n.baseText("commandBar.credentials.create", { interpolate: { projectName: currentProjectName.value } }),
			section: i18n.baseText("commandBar.sections.credentials"),
			keywords: [i18n.baseText("credentials.add")],
			icon: {
				component: N8nIcon_default,
				props: {
					icon: "lock",
					color: "text-light"
				}
			},
			handler: () => {
				const currentProjectId = typeof route.params.projectId === "string" ? route.params.projectId : personalProjectId.value;
				const routeName = route.name === VIEWS.SHARED_CREDENTIALS ? VIEWS.SHARED_CREDENTIALS : route.name === VIEWS.CREDENTIALS ? VIEWS.CREDENTIALS : VIEWS.PROJECTS_CREDENTIALS;
				router.push({
					name: routeName,
					params: {
						projectId: currentProjectId,
						credentialId: "create"
					}
				});
			}
		};
		return [
			...hasCreatePermission ? [newCredentialCommand] : [],
			{
				id: ITEM_ID$4.OPEN_CREDENTIAL,
				title: i18n.baseText("commandBar.credentials.open"),
				section: i18n.baseText("commandBar.sections.credentials"),
				placeholder: i18n.baseText("commandBar.credentials.searchPlaceholder"),
				children: openCredentialCommands.value,
				icon: {
					component: N8nIcon_default,
					props: {
						icon: "lock",
						color: "text-light"
					}
				}
			},
			...rootCredentialItems.value
		];
	});
	function onCommandBarChange(query) {
		const trimmed = query.trim();
		const isInCredentialParent = activeNodeId.value === ITEM_ID$4.OPEN_CREDENTIAL;
		const isRootWithQuery = activeNodeId.value === null && trimmed.length > 2;
		if (isInCredentialParent || isRootWithQuery) {
			isLoading.value = isInCredentialParent;
			fetchCredentialsDebounced(trimmed);
		}
	}
	function onCommandBarNavigateTo(to) {
		activeNodeId.value = to;
		if (to === ITEM_ID$4.OPEN_CREDENTIAL) {
			isLoading.value = true;
			fetchCredentialsImpl("");
		} else if (to === null) credentialResults.value = [];
	}
	async function initialize() {
		await credentialsStore.fetchCredentialTypes(false);
	}
	return {
		commands: credentialNavigationCommands,
		handlers: {
			onCommandBarChange,
			onCommandBarNavigateTo
		},
		isLoading,
		initialize
	};
}
function useExecutionNavigationCommands() {
	const i18n = useI18n();
	const projectsStore = useProjectsStore();
	const workflowsStore = useWorkflowsStore();
	const router = useRouter();
	const route = useRoute();
	const personalProjectId = computed(() => {
		return projectsStore.myProjects.find((p) => p.type === "personal")?.id;
	});
	const currentProjectId = computed(() => {
		return typeof route.params.projectId === "string" ? route.params.projectId : personalProjectId.value;
	});
	return { commands: computed(() => {
		if (!workflowsStore.canViewWorkflows) return [];
		return [{
			id: "open-executions",
			title: i18n.baseText("commandBar.executions.open"),
			section: i18n.baseText("commandBar.sections.executions"),
			icon: {
				component: N8nIcon_default,
				props: { icon: "arrow-right" }
			},
			handler: () => {
				if (currentProjectId.value === personalProjectId.value) router.push({ name: VIEWS.EXECUTIONS });
				else router.push({
					name: VIEWS.PROJECTS_EXECUTIONS,
					params: { projectId: currentProjectId.value }
				});
			}
		}];
	}) };
}
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
var ITEM_ID$3 = {
	CREATE_PROJECT: "create-project",
	OPEN_PROJECT: "open-project"
};
function useProjectNavigationCommands(options) {
	const i18n = useI18n();
	const { lastQuery, activeNodeId } = options;
	const projectsStore = useProjectsStore();
	const globalEntityCreation = useGlobalEntityCreation();
	const router = useRouter();
	const filteredProjects = computed(() => {
		const trimmed = (lastQuery.value || "").trim().toLowerCase();
		const allProjects = projectsStore.availableProjects;
		if (!trimmed) return allProjects;
		return allProjects.filter((project) => project.name?.toLowerCase().includes(trimmed) || project.id?.toLowerCase().includes(trimmed));
	});
	const openProjectCommand = (project, isRoot) => {
		let title$1 = project.type === "personal" ? i18n.baseText("projects.menu.personal") : project.name ? project.name : i18n.baseText("commandBar.projects.unnamed");
		if (isRoot) title$1 = i18n.baseText("generic.openResource", { interpolate: { resource: title$1 } });
		const section = isRoot ? i18n.baseText("commandBar.sections.projects") : i18n.baseText("commandBar.projects.open");
		return {
			id: project.id,
			title: title$1,
			section,
			keywords: [title$1],
			handler: () => {
				router.push({
					name: VIEWS.PROJECTS_WORKFLOWS,
					params: { projectId: project.id }
				});
			}
		};
	};
	const openProjectCommands = computed(() => {
		if (!(activeNodeId.value === ITEM_ID$3.OPEN_PROJECT)) return [];
		return filteredProjects.value.map((project) => openProjectCommand(project, false));
	});
	const rootProjectItems = computed(() => {
		if (!(activeNodeId.value === null && lastQuery.value.trim().length > 2) || !projectsStore.canViewProjects) return [];
		return filteredProjects.value.map((project) => openProjectCommand(project, true));
	});
	const projectNavigationCommands = computed(() => {
		const commands = [];
		if (projectsStore.hasPermissionToCreateProjects && projectsStore.canCreateProjects) commands.push({
			id: ITEM_ID$3.CREATE_PROJECT,
			title: i18n.baseText("commandBar.projects.create"),
			section: i18n.baseText("commandBar.sections.projects"),
			icon: {
				component: N8nIcon_default,
				props: {
					icon: "layers",
					color: "text-light"
				}
			},
			handler: () => {
				globalEntityCreation.createProject("command_bar");
			}
		});
		if (projectsStore.availableProjects.length > 0 && projectsStore.canViewProjects) commands.push({
			id: ITEM_ID$3.OPEN_PROJECT,
			title: i18n.baseText("commandBar.projects.open"),
			section: i18n.baseText("commandBar.sections.projects"),
			placeholder: i18n.baseText("commandBar.projects.searchPlaceholder"),
			children: openProjectCommands.value,
			icon: {
				component: N8nIcon_default,
				props: {
					icon: "layers",
					color: "text-light"
				}
			}
		});
		return [...commands, ...rootProjectItems.value];
	});
	function onCommandBarChange(query) {
		lastQuery.value = query;
	}
	function onCommandBarNavigateTo(to) {
		activeNodeId.value = to;
	}
	return {
		commands: projectNavigationCommands,
		handlers: {
			onCommandBarChange,
			onCommandBarNavigateTo
		}
	};
}
var ITEM_ID$2 = {
	DELETE_EXECUTION: "delete-execution",
	RETRY_CURRENT_WORKFLOW: "retry-current-workflow",
	RETRY_ORIGINAL_WORKFLOW: "retry-original-workflow",
	STOP_EXECUTION: "stop-execution",
	DEBUG_EXECUTION: "debug-execution",
	VOTE_UP: "vote-up",
	VOTE_DOWN: "vote-down"
};
function useExecutionCommands() {
	const i18n = useI18n();
	const router = useRouter();
	const route = useRoute();
	const executionsStore = useExecutionsStore();
	const workflowsStore = useWorkflowsStore();
	const settingsStore = useSettingsStore();
	const toast = useToast();
	const message = useMessage();
	const telemetry = useTelemetry();
	const workflowId = computed(() => route.params.name);
	const activeExecution = computed(() => {
		return executionsStore.activeExecution;
	});
	const workflowPermissions = computed(() => getResourcePermissions(workflowsStore.getWorkflowById(workflowId.value)?.scopes).workflow);
	const isAnnotationEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedExecutionFilters]);
	const hasAnnotation = computed(() => !!activeExecution.value?.annotation && (activeExecution.value?.annotation.vote || activeExecution.value?.annotation.tags.length > 0));
	const vote = computed(() => activeExecution.value?.annotation?.vote || null);
	const executions = computed(() => workflowId.value ? [...executionsStore.currentExecutionsByWorkflowId[workflowId.value] ?? [], ...executionsStore.executionsByWorkflowId[workflowId.value] ?? []] : []);
	const isRetriable = computed(() => {
		if (!activeExecution.value) return false;
		const status = activeExecution.value.status;
		return status === "error" || status === "crashed" || status === "canceled";
	});
	const isRunning = computed(() => {
		if (!activeExecution.value) return false;
		return activeExecution.value.status === "running" || activeExecution.value.status === "new";
	});
	async function handleDeleteExecution() {
		const confirmationText = [hasAnnotation.value && i18n.baseText("executionDetails.confirmMessage.annotationsNote"), i18n.baseText("executionDetails.confirmMessage.message")].filter(Boolean).join(" ");
		if (await message.confirm(confirmationText, i18n.baseText("executionDetails.confirmMessage.headline"), {
			type: "warning",
			confirmButtonText: i18n.baseText("executionDetails.confirmMessage.confirmButtonText"),
			cancelButtonText: ""
		}) !== "confirm") return;
		try {
			const executionId = activeExecution.value.id;
			const executionIndex = executions.value.findIndex((e) => e.id === executionId);
			const nextExecution = executions.value[executionIndex + 1] || executions.value[executionIndex - 1] || executions.value[0];
			await executionsStore.deleteExecutions({ ids: [executionId] });
			if (executions.value.length > 0) await router.replace({
				name: VIEWS.EXECUTION_PREVIEW,
				params: {
					name: workflowId.value,
					executionId: nextExecution.id
				}
			}).catch(() => {});
			else await router.replace({
				name: VIEWS.EXECUTION_HOME,
				params: { name: workflowId.value }
			});
			toast.showMessage({
				title: i18n.baseText("executionsList.showMessage.handleDeleteSelected.title"),
				type: "success"
			});
		} catch (error) {
			toast.showError(error, i18n.baseText("executionsList.showError.handleDeleteSelected.title"));
		}
	}
	async function handleRetryExecution(loadWorkflow) {
		toast.showMessage({
			title: i18n.baseText("executionDetails.runningMessage"),
			type: "info",
			duration: 2e3
		});
		try {
			const retryMessage = executionRetryMessage((await executionsStore.retryExecution(activeExecution.value.id, loadWorkflow)).status);
			if (retryMessage) toast.showMessage(retryMessage);
			telemetry.track("User clicked retry execution button", {
				workflow_id: workflowId.value,
				execution_id: activeExecution.value.id,
				retry_type: loadWorkflow ? "current" : "original"
			});
		} catch (error) {
			toast.showError(error, i18n.baseText("executionsList.showError.retryExecution.title"));
		}
	}
	async function handleStopExecution() {
		try {
			await executionsStore.stopCurrentExecution(activeExecution.value.id);
			toast.showMessage({
				title: i18n.baseText("executionsList.showMessage.stopExecution.title"),
				message: i18n.baseText("executionsList.showMessage.stopExecution.message", { interpolate: { activeExecutionId: activeExecution.value.id } }),
				type: "success"
			});
		} catch (error) {
			toast.showError(error, i18n.baseText("executionsList.showError.stopExecution.title"));
		}
	}
	function handleDebugExecution() {
		router.push({
			name: VIEWS.EXECUTION_DEBUG,
			params: {
				name: activeExecution.value.workflowId,
				executionId: activeExecution.value.id
			}
		});
	}
	async function handleVoteClick(voteValue) {
		const voteToSet = voteValue === vote.value ? null : voteValue;
		try {
			await executionsStore.annotateExecution(activeExecution.value.id, { vote: voteToSet });
		} catch (e) {
			toast.showError(e, "executionAnnotationView.vote.error");
		}
	}
	return { commands: computed(() => {
		if (!activeExecution.value) return [];
		const commands = [];
		if (workflowPermissions.value.update) {
			const isSuccess = activeExecution.value.status === "success";
			commands.push({
				id: ITEM_ID$2.DEBUG_EXECUTION,
				title: isSuccess ? i18n.baseText("executionsList.debug.button.copyToEditor") : i18n.baseText("executionsList.debug.button.debugInEditor"),
				section: i18n.baseText("commandBar.sections.execution"),
				handler: handleDebugExecution,
				icon: {
					component: N8nIcon_default,
					props: { icon: isSuccess ? "copy" : "bug" }
				}
			});
		}
		if (isRetriable.value && workflowPermissions.value.update) {
			commands.push({
				id: ITEM_ID$2.RETRY_CURRENT_WORKFLOW,
				title: i18n.baseText("executionsList.retryWithCurrentlySavedWorkflow"),
				section: i18n.baseText("commandBar.sections.execution"),
				handler: async () => await handleRetryExecution(true),
				icon: {
					component: N8nIcon_default,
					props: { icon: "redo-2" }
				}
			});
			commands.push({
				id: ITEM_ID$2.RETRY_ORIGINAL_WORKFLOW,
				title: i18n.baseText("executionsList.retryWithOriginalWorkflow"),
				section: i18n.baseText("commandBar.sections.execution"),
				handler: async () => await handleRetryExecution(false),
				icon: {
					component: N8nIcon_default,
					props: { icon: "redo" }
				}
			});
		}
		if (isRunning.value && workflowPermissions.value.execute) commands.push({
			id: ITEM_ID$2.STOP_EXECUTION,
			title: i18n.baseText("executionsList.stopExecution"),
			section: i18n.baseText("commandBar.sections.execution"),
			handler: handleStopExecution,
			icon: {
				component: N8nIcon_default,
				props: { icon: "stop" }
			}
		});
		if (isAnnotationEnabled.value) {
			commands.push({
				id: ITEM_ID$2.VOTE_UP,
				title: vote.value === "up" ? i18n.baseText("executionAnnotationView.vote.removeUp") : i18n.baseText("executionAnnotationView.vote.up"),
				section: i18n.baseText("commandBar.sections.execution"),
				handler: async () => await handleVoteClick("up"),
				icon: {
					component: N8nIcon_default,
					props: { icon: "thumbs-up" }
				}
			});
			commands.push({
				id: ITEM_ID$2.VOTE_DOWN,
				title: vote.value === "down" ? i18n.baseText("executionAnnotationView.vote.removeDown") : i18n.baseText("executionAnnotationView.vote.down"),
				section: i18n.baseText("commandBar.sections.execution"),
				handler: async () => await handleVoteClick("down"),
				icon: {
					component: N8nIcon_default,
					props: { icon: "thumbs-down" }
				}
			});
		}
		if (workflowPermissions.value.update) commands.push({
			id: ITEM_ID$2.DELETE_EXECUTION,
			title: i18n.baseText("executionDetails.deleteExecution"),
			section: i18n.baseText("commandBar.sections.execution"),
			handler: handleDeleteExecution,
			icon: {
				component: N8nIcon_default,
				props: { icon: "trash-2" }
			}
		});
		return commands;
	}) };
}
const EXTERNAL_LINKS = {
	QUICKSTART_VIDEO: "https://www.youtube.com/watch?v=4cQWJViybAQ",
	DOCUMENTATION: "https://docs.n8n.io?utm_source=n8n_app&utm_medium=app_sidebar",
	FORUM: "https://community.n8n.io?utm_source=n8n_app&utm_medium=app_sidebar",
	COURSES: "https://docs.n8n.io/courses/"
};
var BASE_FORUM_URL = "https://github.com/n8n-io/n8n/issues/new?labels=bug-report";
var REPORT_TEMPLATE = `
<!-- Please follow the template below. Skip the questions that are not relevant to you. -->

## Describe the problem/error/question


## What is the error message (if any)?


## Please share your workflow/screenshots/recording

\`\`\`
(Select the nodes on your canvas and use the keyboard shortcuts CMD+C/CTRL+C and CMD+V/CTRL+V to copy and paste the workflow.)
⚠️ WARNING ⚠️ If you have sensitive data in your workflow (like API keys), please remove it before sharing.
\`\`\`


## Share the output returned by the last node
<!-- If you need help with data transformations, please also share your expected output. -->

`;
function useBugReporting() {
	const debugInfo = useDebugInfo();
	const getReportingURL = () => {
		const url = new URL(BASE_FORUM_URL);
		const report = `${REPORT_TEMPLATE}\n${debugInfo.generateDebugInfo({
			skipSensitive: true,
			secondaryHeader: true
		})}}`;
		url.searchParams.append("body", report);
		return url.toString();
	};
	return { getReportingURL };
}
var ITEM_ID$1 = {
	CHAT_HUB: "chat-hub",
	WHATS_NEW: "whats-new",
	SETTINGS: "settings",
	SIGN_OUT: "sign-out",
	TEMPLATES: "templates",
	VARIABLES: "variables",
	INSIGHTS: "insights",
	QUICKSTART: "quickstart",
	DOCUMENTATION: "documentation",
	FORUM: "forum",
	COURSE: "course",
	REPORT_BUG: "report-bug",
	ABOUT: "about"
};
function useGenericCommands() {
	const i18n = useI18n();
	const uiStore = useUIStore();
	const router = useRouter();
	const settingsStore = useSettingsStore();
	const projectsStore = useProjectsStore();
	const { getReportingURL } = useBugReporting();
	return { commands: computed(() => [
		{
			id: ITEM_ID$1.WHATS_NEW,
			title: i18n.baseText("mainSidebar.whatsNew"),
			section: i18n.baseText("commandBar.sections.general"),
			handler: () => {
				uiStore.openModal(WHATS_NEW_MODAL_KEY);
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "bell" }
			},
			keywords: [i18n.baseText("mainSidebar.whatsNew").toLowerCase(), i18n.baseText("mainSidebar.whatsNew.fullChangelog").toLowerCase()]
		},
		...settingsStore.isChatFeatureEnabled ? [{
			id: ITEM_ID$1.CHAT_HUB,
			title: i18n.baseText("projects.menu.chat"),
			section: i18n.baseText("commandBar.sections.general"),
			handler: () => {
				router.push({
					name: CHAT_VIEW,
					force: true
				});
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "message-circle" }
			},
			keywords: [
				"chat",
				"open chat",
				i18n.baseText("projects.menu.chat").toLowerCase()
			]
		}] : [],
		...projectsStore.canViewProjects ? [{
			id: ITEM_ID$1.TEMPLATES,
			title: i18n.baseText("generic.templates"),
			section: i18n.baseText("commandBar.sections.general"),
			handler: () => {
				router.push({ name: VIEWS.PRE_BUILT_AGENT_TEMPLATES });
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "package-open" }
			},
			keywords: [i18n.baseText("generic.templates").toLowerCase()]
		}] : [],
		...projectsStore.canViewProjects ? [{
			id: ITEM_ID$1.VARIABLES,
			title: i18n.baseText("mainSidebar.variables"),
			section: i18n.baseText("commandBar.sections.general"),
			handler: () => {
				router.push({ name: VIEWS.HOME_VARIABLES });
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "variable" }
			},
			keywords: [i18n.baseText("mainSidebar.variables").toLowerCase()]
		}] : [],
		...projectsStore.canViewProjects ? [{
			id: ITEM_ID$1.INSIGHTS,
			title: "Insights",
			section: i18n.baseText("commandBar.sections.general"),
			handler: () => {
				router.push({ name: VIEWS.INSIGHTS });
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "chart-column-decreasing" }
			},
			keywords: ["insights"]
		}] : [],
		{
			id: ITEM_ID$1.QUICKSTART,
			title: i18n.baseText("mainSidebar.helpMenuItems.quickstart"),
			section: i18n.baseText("mainSidebar.help"),
			handler: () => {
				window.open(EXTERNAL_LINKS.QUICKSTART_VIDEO, "_blank", "noreferrer");
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "video" }
			},
			keywords: [i18n.baseText("mainSidebar.helpMenuItems.quickstart").toLowerCase()]
		},
		{
			id: ITEM_ID$1.DOCUMENTATION,
			title: i18n.baseText("mainSidebar.helpMenuItems.documentation"),
			section: i18n.baseText("mainSidebar.help"),
			handler: () => {
				window.open(EXTERNAL_LINKS.DOCUMENTATION, "_blank", "noreferrer");
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "book" }
			},
			keywords: [i18n.baseText("mainSidebar.helpMenuItems.documentation").toLowerCase()]
		},
		{
			id: ITEM_ID$1.FORUM,
			title: i18n.baseText("mainSidebar.helpMenuItems.forum"),
			section: i18n.baseText("mainSidebar.help"),
			handler: () => {
				window.open(EXTERNAL_LINKS.FORUM, "_blank", "noreferrer");
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "users" }
			},
			keywords: [i18n.baseText("mainSidebar.helpMenuItems.forum").toLowerCase()]
		},
		{
			id: ITEM_ID$1.COURSE,
			title: i18n.baseText("mainSidebar.helpMenuItems.course"),
			section: i18n.baseText("mainSidebar.help"),
			handler: () => {
				window.open(EXTERNAL_LINKS.COURSES, "_blank", "noreferrer");
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "graduation-cap" }
			},
			keywords: [i18n.baseText("mainSidebar.helpMenuItems.course").toLowerCase()]
		},
		{
			id: ITEM_ID$1.REPORT_BUG,
			title: i18n.baseText("mainSidebar.helpMenuItems.reportBug"),
			section: i18n.baseText("mainSidebar.help"),
			handler: () => {
				window.open(getReportingURL(), "_blank", "noreferrer");
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "bug" }
			},
			keywords: [i18n.baseText("mainSidebar.helpMenuItems.reportBug").toLowerCase()]
		},
		{
			id: ITEM_ID$1.ABOUT,
			title: i18n.baseText("mainSidebar.aboutN8n"),
			section: i18n.baseText("mainSidebar.help"),
			handler: () => {
				uiStore.openModal(ABOUT_MODAL_KEY);
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "info" }
			},
			keywords: [i18n.baseText("mainSidebar.aboutN8n").toLowerCase()]
		},
		{
			id: ITEM_ID$1.SETTINGS,
			title: i18n.baseText("settings"),
			section: i18n.baseText("commandBar.sections.general"),
			handler: () => {
				router.push({ name: VIEWS.SETTINGS });
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "cog" }
			},
			keywords: [i18n.baseText("settings").toLowerCase()]
		},
		{
			id: ITEM_ID$1.SIGN_OUT,
			title: i18n.baseText("auth.signout"),
			section: i18n.baseText("commandBar.sections.general"),
			handler: () => {
				router.push({ name: VIEWS.SIGNOUT });
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "sign-out-alt" }
			},
			keywords: [i18n.baseText("auth.signout").toLowerCase()]
		}
	]) };
}
var ITEM_ID = {
	NEW_SESSION: "new-session",
	NEW_SESSION_WITH_MODEL: "new-session-with-model",
	OPEN_SESSION: "open-session",
	DELETE_SESSION: "delete-session",
	STOP_MESSAGE_GENERATION: "stop-message-generation"
};
function useChatHubCommands(options) {
	const i18n = useI18n();
	const { lastQuery } = options;
	const router = useRouter();
	const route = useRoute();
	const chatStore = useChatStore();
	const settingsStore = useSettingsStore();
	const toast = useToast();
	const message = useMessage();
	const currentSessionId = computed(() => (route.name === "chat" || route.name === "chat-conversation") && typeof route.params.id === "string" ? route.params.id : null);
	const isResponding = computed(() => {
		if (!currentSessionId.value) return false;
		return chatStore.isResponding(currentSessionId.value);
	});
	async function handleDeleteSession(sessionId) {
		if (await message.confirm(i18n.baseText("chatHub.session.delete.confirm.message"), i18n.baseText("chatHub.session.delete.confirm.title"), {
			confirmButtonText: i18n.baseText("chatHub.session.delete.confirm.button"),
			cancelButtonText: i18n.baseText("chatHub.session.delete.cancel.button")
		}) !== "confirm") return;
		try {
			await chatStore.deleteSession(sessionId);
			toast.showMessage({
				type: "success",
				title: i18n.baseText("chatHub.session.delete.success")
			});
			if (sessionId === currentSessionId.value) router.push({ name: CHAT_VIEW });
		} catch (error) {
			toast.showError(error, i18n.baseText("chatHub.session.delete.error"));
		}
	}
	const filteredSesssions = computed(() => {
		const trimmed = (lastQuery.value || "").trim().toLowerCase();
		const allSesssions = Object.values(chatStore.sessions.byId) ?? [];
		if (!trimmed) return allSesssions.filter((session) => !!session);
		return allSesssions.filter((session) => !!session && (session.title?.toLowerCase().includes(trimmed) ?? false));
	});
	const filteredModels = computed(() => {
		const trimmed = (lastQuery.value || "").trim().toLowerCase();
		const allModels = Object.values(chatStore.agents).flatMap((available) => available.models);
		if (!trimmed) return allModels;
		return allModels.filter((model) => {
			if (!model.metadata.available) return false;
			const provider = model.model.provider;
			if (isLlmProvider(provider)) {
				const settings = settingsStore.moduleSettings?.["chat-hub"]?.providers[provider];
				if (settings && !settings.enabled) return false;
			}
			return model.name?.toLowerCase().includes(trimmed) || model.model.provider?.toLowerCase().includes(trimmed) || providerDisplayNames[model.model.provider]?.toLowerCase().includes(trimmed);
		});
	});
	const openSessionCommand = (session, isRoot) => {
		let title$1 = session.title;
		if (isRoot) title$1 = i18n.baseText("generic.openResource", { interpolate: { resource: title$1 } });
		const section = isRoot ? i18n.baseText("commandBar.sections.chat") : i18n.baseText("commandBar.chat.open");
		return {
			id: session.id,
			title: title$1,
			section,
			keywords: [title$1],
			handler: () => {
				router.push({
					name: CHAT_CONVERSATION_VIEW,
					params: { id: session.id }
				});
			}
		};
	};
	const openSessionCommands = computed(() => {
		return filteredSesssions.value.map((session) => openSessionCommand(session, false));
	});
	const deleteSessionCommand = (session, isRoot) => {
		let title$1 = session.title;
		if (isRoot) title$1 = i18n.baseText("commandBar.chat.deleteSession", { interpolate: { title: title$1 } });
		const section = isRoot ? i18n.baseText("commandBar.sections.chat") : i18n.baseText("commandBar.chat.delete");
		return {
			id: session.id,
			title: title$1,
			section,
			handler: () => {
				handleDeleteSession(session.id);
			}
		};
	};
	const deleteSessionCommands = computed(() => {
		return filteredSesssions.value.map((session) => deleteSessionCommand(session, false));
	});
	const newSessionWithModelCommand = (model) => {
		return {
			id: stringifyModel(model.model),
			title: {
				component: CommandBarItemTitle_default,
				props: {
					title: providerDisplayNames[model.model.provider],
					suffix: model.name
				}
			},
			section: i18n.baseText("commandBar.chat.newWithModel"),
			keywords: [model.name, providerDisplayNames[model.model.provider]],
			handler: () => {
				router.push({
					...getAgentRoute(model.model),
					force: true
				});
			}
		};
	};
	const newSessionWithCommands = computed(() => {
		return filteredModels.value.map((model) => newSessionWithModelCommand(model));
	});
	return { commands: computed(() => {
		const commands = [
			{
				id: ITEM_ID.NEW_SESSION,
				title: i18n.baseText("commandBar.chat.new"),
				section: i18n.baseText("commandBar.sections.chat"),
				handler: () => {
					router.push({
						name: CHAT_VIEW,
						force: true
					});
				},
				icon: {
					component: N8nIcon_default,
					props: { icon: "square-pen" }
				},
				keywords: [
					i18n.baseText("commandBar.chat.new"),
					i18n.baseText("commandBar.sections.chat"),
					i18n.baseText("generic.create"),
					i18n.baseText("generic.start")
				]
			},
			{
				id: ITEM_ID.NEW_SESSION_WITH_MODEL,
				title: i18n.baseText("commandBar.chat.newWithModel"),
				section: i18n.baseText("commandBar.sections.chat"),
				children: newSessionWithCommands.value,
				icon: {
					component: N8nIcon_default,
					props: { icon: "robot" }
				},
				keywords: [
					i18n.baseText("commandBar.chat.new"),
					i18n.baseText("commandBar.sections.chat"),
					i18n.baseText("generic.create"),
					i18n.baseText("generic.start")
				]
			},
			{
				id: ITEM_ID.OPEN_SESSION,
				title: i18n.baseText("commandBar.chat.open"),
				section: i18n.baseText("commandBar.sections.chat"),
				placeholder: i18n.baseText("commandBar.chat.open.searchPlaceholder"),
				children: openSessionCommands.value,
				icon: {
					component: N8nIcon_default,
					props: {
						icon: "layers",
						color: "text-light"
					}
				}
			},
			{
				id: ITEM_ID.DELETE_SESSION,
				title: i18n.baseText("commandBar.chat.delete"),
				section: i18n.baseText("commandBar.sections.chat"),
				placeholder: i18n.baseText("commandBar.chat.open.searchPlaceholder"),
				children: deleteSessionCommands.value,
				icon: {
					component: N8nIcon_default,
					props: {
						icon: "trash-2",
						color: "text-light"
					}
				}
			}
		];
		if (isResponding.value && currentSessionId.value) commands.push({
			id: ITEM_ID.STOP_MESSAGE_GENERATION,
			title: i18n.baseText("commandBar.chat.stop"),
			section: i18n.baseText("commandBar.sections.chat"),
			handler: async () => {
				if (!currentSessionId.value) return;
				await chatStore.stopStreamingMessage(currentSessionId.value);
			}
		});
		return commands;
	}) };
}
function useCommandBar() {
	const nodeTypesStore = useNodeTypesStore();
	const projectsStore = useProjectsStore();
	const workflowStore = useWorkflowsStore();
	const router = useRouter();
	const route = useRoute();
	const postHog = usePostHog();
	const i18n = useI18n();
	const telemetry = useTelemetry();
	const placeholder = i18n.baseText("commandBar.placeholder");
	const isEnabled = computed(() => postHog.isVariantEnabled(COMMAND_BAR_EXPERIMENT.name, COMMAND_BAR_EXPERIMENT.variant));
	const activeNodeId = ref(null);
	const lastQuery = ref("");
	const currentProjectName = computed(() => {
		const projectId = route.params.projectId || projectsStore.currentProjectId;
		if (projectId === projectsStore.personalProject?.id) return "Personal";
		return projectsStore.myProjects.find((p) => p.id === projectId)?.name ?? "Personal";
	});
	const nodeCommandGroup = useNodeCommands({
		lastQuery,
		activeNodeId
	});
	const workflowCommandGroup = useWorkflowCommands();
	const executionCommandGroup = useExecutionCommands();
	const workflowNavigationGroup = useWorkflowNavigationCommands({
		lastQuery,
		activeNodeId,
		currentProjectName
	});
	const dataTableNavigationGroup = useDataTableNavigationCommands({
		lastQuery,
		activeNodeId,
		currentProjectName
	});
	const credentialNavigationGroup = useCredentialNavigationCommands({
		lastQuery,
		activeNodeId,
		currentProjectName
	});
	const executionNavigationGroup = useExecutionNavigationCommands();
	const projectNavigationGroup = useProjectNavigationCommands({
		lastQuery,
		activeNodeId
	});
	const genericCommandGroup = useGenericCommands();
	const recentResourcesGroup = useRecentResources();
	const chatHubCommandGroup = useChatHubCommands({ lastQuery });
	const canvasViewGroups = [
		recentResourcesGroup,
		nodeCommandGroup,
		workflowCommandGroup,
		workflowNavigationGroup,
		genericCommandGroup
	];
	const executionViewGroups = [
		recentResourcesGroup,
		executionCommandGroup,
		workflowNavigationGroup,
		projectNavigationGroup,
		credentialNavigationGroup,
		dataTableNavigationGroup,
		executionNavigationGroup,
		genericCommandGroup
	];
	const workflowsListViewGroups = [
		recentResourcesGroup,
		workflowNavigationGroup,
		projectNavigationGroup,
		credentialNavigationGroup,
		dataTableNavigationGroup,
		executionNavigationGroup,
		genericCommandGroup
	];
	const credentialsListViewGroups = [
		recentResourcesGroup,
		credentialNavigationGroup,
		projectNavigationGroup,
		workflowNavigationGroup,
		dataTableNavigationGroup,
		executionNavigationGroup,
		genericCommandGroup
	];
	const executionsListViewGroups = [
		recentResourcesGroup,
		workflowNavigationGroup,
		projectNavigationGroup,
		credentialNavigationGroup,
		dataTableNavigationGroup,
		genericCommandGroup
	];
	const dataStoresListViewGroups = [
		recentResourcesGroup,
		dataTableNavigationGroup,
		projectNavigationGroup,
		workflowNavigationGroup,
		credentialNavigationGroup,
		executionNavigationGroup,
		genericCommandGroup
	];
	const evaluationViewGroups = [
		recentResourcesGroup,
		workflowNavigationGroup,
		projectNavigationGroup,
		credentialNavigationGroup,
		dataTableNavigationGroup,
		executionNavigationGroup,
		genericCommandGroup
	];
	const chatHubViewGroups = [
		chatHubCommandGroup,
		recentResourcesGroup,
		genericCommandGroup,
		projectNavigationGroup,
		workflowNavigationGroup,
		credentialNavigationGroup,
		dataTableNavigationGroup,
		executionNavigationGroup
	];
	const fallbackViewCommands = [
		recentResourcesGroup,
		projectNavigationGroup,
		workflowNavigationGroup,
		credentialNavigationGroup,
		dataTableNavigationGroup,
		executionNavigationGroup,
		genericCommandGroup
	];
	const activeCommandGroups = computed(() => {
		switch (router.currentRoute.value.name) {
			case VIEWS.WORKFLOW:
			case VIEWS.NEW_WORKFLOW: return canvasViewGroups;
			case VIEWS.EXECUTION_PREVIEW:
			case VIEWS.EXECUTION_DEBUG: return executionViewGroups;
			case VIEWS.WORKFLOWS:
			case VIEWS.PROJECTS_WORKFLOWS: return workflowsListViewGroups;
			case VIEWS.CREDENTIALS:
			case VIEWS.PROJECTS_CREDENTIALS: return credentialsListViewGroups;
			case VIEWS.EXECUTIONS:
			case VIEWS.PROJECTS_EXECUTIONS: return executionsListViewGroups;
			case PROJECT_DATA_TABLES:
			case DATA_TABLE_VIEW: return dataStoresListViewGroups;
			case VIEWS.EVALUATION:
			case VIEWS.EVALUATION_EDIT:
			case VIEWS.EVALUATION_RUNS_DETAIL: return evaluationViewGroups;
			case CHAT_VIEW:
			case CHAT_CONVERSATION_VIEW:
			case CHAT_PERSONAL_AGENTS_VIEW:
			case CHAT_WORKFLOW_AGENTS_VIEW: return chatHubViewGroups;
			default: return fallbackViewCommands;
		}
	});
	const context = computed(() => {
		switch (router.currentRoute.value.name) {
			case VIEWS.WORKFLOW:
			case VIEWS.NEW_WORKFLOW: return workflowStore.workflow.name ? i18n.baseText("commandBar.sections.workflow") + " ⋅ " + workflowStore.workflow.name : "";
			case VIEWS.EXECUTION_PREVIEW:
			case VIEWS.EXECUTION_DEBUG: return workflowStore.workflow.name ? i18n.baseText("commandBar.sections.execution") + " ⋅ " + workflowStore.workflow.name : "";
			case VIEWS.EVALUATION:
			case VIEWS.EVALUATION_EDIT:
			case VIEWS.EVALUATION_RUNS_DETAIL: return workflowStore.workflow.name ? " ⋅ " + workflowStore.workflow.name : "";
			default: return "";
		}
	});
	const trackCommand = (item, view, parentItem) => {
		telemetry.track("User executed command bar command", {
			command_id: item.id,
			command_section: item.section,
			view,
			parent_command_id: parentItem?.id
		});
	};
	const wrapItemWithTelemetry = (item) => {
		const wrappedItem = { ...item };
		const routeName = (router.currentRoute.value.name ?? "").toString();
		if (item.handler) {
			const originalHandler = item.handler;
			wrappedItem.handler = async () => {
				trackCommand(item, routeName);
				return await originalHandler();
			};
		}
		if (item.children) wrappedItem.children = item.children.map((child) => {
			if (child.handler) {
				const originalChildHandler = child.handler;
				return {
					...child,
					handler: async () => {
						trackCommand(child, routeName, item);
						return await originalChildHandler();
					}
				};
			}
			return child;
		});
		return wrappedItem;
	};
	const items = computed(() => {
		return activeCommandGroups.value.flatMap((group) => group.commands.value).map(wrapItemWithTelemetry);
	});
	const isLoading = computed(() => {
		return activeCommandGroups.value.some((group) => group.isLoading?.value === true);
	});
	function onCommandBarChange(query) {
		lastQuery.value = query;
		for (const group of activeCommandGroups.value) if (group.handlers?.onCommandBarChange) group.handlers.onCommandBarChange(query);
	}
	function onCommandBarNavigateTo(to) {
		for (const group of activeCommandGroups.value) if (group.handlers?.onCommandBarNavigateTo) group.handlers.onCommandBarNavigateTo(to);
	}
	async function initialize() {
		await nodeTypesStore.loadNodeTypesIfNotLoaded();
		const initPromises = activeCommandGroups.value.map(async (group) => {
			if (group.initialize) await group.initialize();
		});
		await Promise.all(initPromises);
	}
	return {
		isEnabled,
		items,
		initialize,
		onCommandBarChange,
		onCommandBarNavigateTo,
		placeholder,
		context,
		isLoading
	};
}
export { useDebugInfo as a, useGlobalEntityCreation as i, useBugReporting as n, EXTERNAL_LINKS as r, useCommandBar as t };
