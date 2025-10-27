import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, _n as normalizeClass, et as openBlock, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-CMopfp37.js";
import { Fn as N8nIcon_default, nt as N8nKeyboardShortcut_default } from "./src-B9lyFNPE.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-D09te2fm.js";
import { t as useMessage } from "./useMessage-CzSaXdHQ.js";
import { Ai as nodeViewEventBus, An as useProjectsStore, Ht as useCredentialsStore, Js as useRootStore, Li as useUIStore, Mn as ProjectTypes, X as executionRetryMessage, _n as useTagsStore, i as usePostHog, it as useActionsGenerator, jn as useSourceControlStore, mn as useWorkflowHelpers, o as useWorkflowsStore, rt as useNodeTypesStore, t as useTelemetry, zo as useSettingsStore } from "./useTelemetry-BnWkdL5v.js";
import { t as useToast } from "./useToast-CYEyObML.js";
import { La as DATA_TABLE_VIEW, Ma as DATA_TABLE_DETAILS, Ya as PROJECT_DATA_TABLES, Zt as EXECUTE_WORKFLOW_NODE_TYPE, gs as isResourceLocatorValue, kr as MODAL_CONFIRM, la as WHATS_NEW_MODAL_KEY, oa as VIEWS, on as EnterpriseEditionFeature, oo as getResourcePermissions, st as COMMAND_BAR_EXPERIMENT, t as ABOUT_MODAL_KEY, wn as IMPORT_WORKFLOW_URL_MODAL_KEY, ya as WORKFLOW_SETTINGS_MODAL_KEY, zt as DUPLICATE_MODAL_KEY } from "./constants-7lEZpYki.js";
import { n as require_debounce } from "./useDebounce-BSVJx8HC.js";
import { t as useWorkflowSaving } from "./useWorkflowSaving-ClsTd_Kb.js";
import { t as useRunWorkflow } from "./useRunWorkflow-Bd2-68As.js";
import { t as useExecutionsStore } from "./executions.store-D5Bo0447.js";
import { r as canvasEventBus, t as useCanvasOperations } from "./useCanvasOperations-txv-wr0L.js";
import { t as useFoldersStore } from "./folders.store-CrkPMTTZ.js";
import { t as NodeIcon_default } from "./NodeIcon-CDBCK2ja.js";
import { t as useDataTableStore } from "./dataTable.store-D2c_HVY6.js";
import { n as EXTERNAL_LINKS, r as useGlobalEntityCreation, t as useBugReporting } from "./useBugReporting-B6XzJ-zx.js";
import { t as require_uniqBy } from "./uniqBy-CMy6VD1M.js";
import { n as isIconOrEmoji, t as ProjectIcon_default } from "./ProjectIcon-C6xTYnp5.js";
import { t as CredentialIcon_default } from "./CredentialIcon-BtCDxBgj.js";
import { t as require_FileSaver_min } from "./FileSaver.min-D8bnhVIu.js";
import { t as useRecentResources } from "./useRecentResources-uuK4-f4a.js";
import { t as useWorkflowActivate } from "./useWorkflowActivate-D4jUzTuM.js";
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
var ITEM_ID$7 = {
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
	const addNodeCommands = computed(() => {
		if (!hasPermission("update")) return [];
		const httpOnlyCredentials = credentialsStore.httpOnlyCredentialTypes;
		const nodeTypes = nodeTypesStore.visibleNodeTypes;
		const { mergedNodes } = generateMergedNodesAndActions(nodeTypes, httpOnlyCredentials);
		return mergedNodes.map((node) => {
			const { name, displayName } = node;
			return {
				id: name,
				title: {
					component: CommandBarItemTitle_default,
					props: {
						title: displayName,
						actionText: i18n.baseText("generic.add")
					}
				},
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
		});
	});
	const rootAddNodeCommandItems = computed(() => {
		if (lastQuery.value.length <= 2) return [];
		return addNodeCommands.value;
	});
	const openNodeCommands = computed(() => {
		return editableWorkflow.value.nodes.map((node) => {
			const { id, name, type } = node;
			const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
			return {
				id,
				title: {
					component: CommandBarItemTitle_default,
					props: {
						title: name,
						actionText: i18n.baseText("generic.open")
					}
				},
				section: i18n.baseText("commandBar.sections.nodes"),
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
		});
	});
	const rootOpenNodeCommandItems = computed(() => {
		if (lastQuery.value.length <= 2) return [];
		return openNodeCommands.value;
	});
	return { commands: computed(() => {
		return [
			...hasPermission("update") ? [{
				id: ITEM_ID$7.ADD_NODE,
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
				id: ITEM_ID$7.OPEN_NODE,
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
				id: ITEM_ID$7.ADD_STICKY,
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
var ITEM_ID$6 = {
	OPEN_CREDENTIAL: "open-credential",
	OPEN_SUB_WORKFLOW: "open-sub-workflow",
	TEST_WORKFLOW: "test-workflow",
	SAVE_WORKFLOW: "save-workflow",
	ACTIVATE_WORKFLOW: "activate-workflow",
	DEACTIVATE_WORKFLOW: "deactivate-workflow",
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
	DELETE_WORKFLOW: "delete-workflow"
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
	const workflowActivate = useWorkflowActivate();
	const isReadOnly = computed(() => sourceControlStore.preferences.branchReadOnly);
	const isWorkflowSaving = computed(() => uiStore.isActionActive.workflowSaving);
	const isArchived = computed(() => workflowsStore.workflow.isArchived);
	const workflowPermissions = computed(() => getResourcePermissions(workflowsStore.workflow.scopes).workflow);
	const hasPermission = (permission) => workflowPermissions.value[permission] === true && !isReadOnly.value || workflowsStore.isNewWorkflow;
	const credentialCommands = computed(() => {
		const credentials = (0, import_uniqBy.default)(editableWorkflow.value.nodes.map((node) => Object.values(node.credentials ?? {})).flat(), (cred) => cred.id);
		if (credentials.length === 0) return [];
		return [{
			id: ITEM_ID$6.OPEN_CREDENTIAL,
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
				id: ITEM_ID$6.SAVE_WORKFLOW,
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
				id: ITEM_ID$6.TEST_WORKFLOW,
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
				id: ITEM_ID$6.TIDY_UP_WORKFLOW,
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
				id: ITEM_ID$6.RENAME_WORKFLOW,
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
				id: ITEM_ID$6.ADD_TAG,
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
			id: ITEM_ID$6.SELECT_ALL,
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
			id: ITEM_ID$6.OPEN_WORKFLOW_SETTINGS,
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
			id: ITEM_ID$6.DUPLICATE_WORKFLOW,
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
	const activateCommands = computed(() => {
		if (!hasPermission("update") || isArchived.value) return [];
		return workflowsStore.isWorkflowActive ? [{
			id: ITEM_ID$6.DEACTIVATE_WORKFLOW,
			title: i18n.baseText("commandBar.workflow.deactivate"),
			section: i18n.baseText("commandBar.sections.workflow"),
			handler: () => {
				workflowActivate.updateWorkflowActivation(workflowsStore.workflowId, false);
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "power-off" }
			}
		}] : [{
			id: ITEM_ID$6.ACTIVATE_WORKFLOW,
			title: i18n.baseText("commandBar.workflow.activate"),
			section: i18n.baseText("commandBar.sections.workflow"),
			handler: () => {
				workflowActivate.updateWorkflowActivation(workflowsStore.workflowId, true);
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "power" }
			}
		}];
	});
	const subworkflowCommands = computed(() => {
		const subworkflows = editableWorkflow.value.nodes.filter((node) => node.type === EXECUTE_WORKFLOW_NODE_TYPE).map((node) => node?.parameters?.workflowId).filter((rlValue) => isResourceLocatorValue(rlValue) && typeof rlValue.value === "string" && typeof rlValue.cachedResultName === "string").map(({ value, cachedResultName }) => ({
			id: value,
			name: cachedResultName
		}));
		if (subworkflows.length === 0) return [];
		return [{
			id: ITEM_ID$6.OPEN_SUB_WORKFLOW,
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
			id: ITEM_ID$6.DOWNLOAD_WORKFLOW,
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
			id: ITEM_ID$6.IMPORT_WORKFLOW_FROM_URL,
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
			id: ITEM_ID$6.IMPORT_WORKFLOW_FROM_FILE,
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
			id: ITEM_ID$6.ARCHIVE_WORKFLOW,
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
			id: ITEM_ID$6.UNARCHIVE_WORKFLOW,
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
			id: ITEM_ID$6.DELETE_WORKFLOW,
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
			...activateCommands.value,
			...subworkflowCommands.value,
			...exportCommands.value,
			...importCommands.value,
			...lifecycleCommands.value
		];
	});
	return { commands: computed(() => [...workflowCommands.value, ...credentialCommands.value]) };
}
var import_debounce$2 = /* @__PURE__ */ __toESM(require_debounce());
var ITEM_ID$5 = {
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
				name: trimmed,
				select: [
					"id",
					"name",
					"active",
					"ownedBy",
					"parentFolder",
					"isArchived"
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
					"isArchived"
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
					"isArchived"
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
	const createWorkflowCommand = (workflow) => {
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
		if (workflow.tags && workflow.tags.length > 0) keywords = [...keywords, ...workflow.tags.map((tag) => typeof tag === "string" ? tag : tag.name)];
		const suffix$1 = getWorkflowProjectSuffix(workflow);
		return {
			id: workflow.id,
			title: {
				component: CommandBarItemTitle_default,
				props: {
					title: workflow.name || i18n.baseText("commandBar.workflows.unnamed"),
					suffix: suffix$1,
					...suffix$1 ? { suffixIcon: getProjectIcon(workflow) } : {},
					actionText: i18n.baseText("generic.open")
				}
			},
			section: i18n.baseText("commandBar.sections.workflows"),
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
		return workflowResults.value.map((workflow) => createWorkflowCommand(workflow));
	});
	const rootWorkflowItems = computed(() => {
		if (lastQuery.value.length <= 2) return [];
		return workflowResults.value.map((workflow) => createWorkflowCommand(workflow));
	});
	const workflowNavigationCommands = computed(() => {
		const hasCreatePermission = !sourceControlStore.preferences.branchReadOnly && getResourcePermissions(homeProject.value?.scopes).workflow.create;
		const newWorkflowCommand = {
			id: ITEM_ID$5.CREATE_WORKFLOW,
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
			{
				id: ITEM_ID$5.OPEN_WORKFLOW,
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
			},
			...rootWorkflowItems.value
		];
	});
	function onCommandBarChange(query) {
		const trimmed = query.trim();
		const isInWorkflowParent = activeNodeId.value === ITEM_ID$5.OPEN_WORKFLOW;
		const isRootWithQuery = activeNodeId.value === null && trimmed.length > 2;
		if (isInWorkflowParent || isRootWithQuery) {
			isLoading.value = isInWorkflowParent;
			fetchWorkflowsDebounced(trimmed);
		}
	}
	function onCommandBarNavigateTo(to) {
		activeNodeId.value = to;
		if (to === ITEM_ID$5.OPEN_WORKFLOW) {
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
var ITEM_ID$4 = {
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
	const createDataTableCommand = (dataTable) => {
		const keywords = [dataTable.name];
		return {
			id: dataTable.id,
			title: {
				component: CommandBarItemTitle_default,
				props: {
					title: dataTable.name,
					suffix: getDataTableProjectSuffix(dataTable),
					actionText: i18n.baseText("generic.open")
				}
			},
			section: i18n.baseText("commandBar.sections.dataTables"),
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
		return dataTableResults.value.map((dataTable) => createDataTableCommand(dataTable));
	});
	const rootDataTableItems = computed(() => {
		if (lastQuery.value.length <= 2) return [];
		return dataTableResults.value.map((dataTable) => createDataTableCommand(dataTable));
	});
	const dataTableNavigationCommands = computed(() => {
		const hasCreatePermission = !sourceControlStore.preferences.branchReadOnly && getResourcePermissions(homeProject.value?.scopes).dataTable.create;
		const newDataTableCommand = {
			id: ITEM_ID$4.CREATE_DATA_TABLE,
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
			{
				id: ITEM_ID$4.OPEN_DATA_TABLE,
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
			},
			...rootDataTableItems.value
		];
	});
	function onCommandBarChange(query) {
		const trimmed = query.trim();
		const isInDataTableParent = activeNodeId.value === ITEM_ID$4.OPEN_DATA_TABLE;
		const isRootWithQuery = activeNodeId.value === null && trimmed.length > 2;
		if (isInDataTableParent || isRootWithQuery) {
			isLoading.value = isInDataTableParent;
			fetchDataTablesDebounced(trimmed);
		}
	}
	function onCommandBarNavigateTo(to) {
		activeNodeId.value = to;
		if (to === ITEM_ID$4.OPEN_DATA_TABLE) {
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
var ITEM_ID$3 = {
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
	const createCredentialCommand = (credential) => {
		const keywords = [credential.name];
		return {
			id: credential.id,
			title: {
				component: CommandBarItemTitle_default,
				props: {
					title: credential.name,
					suffix: getCredentialProjectSuffix(credential),
					actionText: i18n.baseText("generic.open")
				}
			},
			section: i18n.baseText("commandBar.sections.credentials"),
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
		return credentialResults.value.map((credential) => createCredentialCommand(credential));
	});
	const rootCredentialItems = computed(() => {
		if (lastQuery.value.length <= 2) return [];
		return credentialResults.value.map((credential) => createCredentialCommand(credential));
	});
	const credentialNavigationCommands = computed(() => {
		const hasCreatePermission = !sourceControlStore.preferences.branchReadOnly && getResourcePermissions(homeProject.value?.scopes).credential.create;
		const newCredentialCommand = {
			id: ITEM_ID$3.CREATE_CREDENTIAL,
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
				id: ITEM_ID$3.OPEN_CREDENTIAL,
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
		const isInCredentialParent = activeNodeId.value === ITEM_ID$3.OPEN_CREDENTIAL;
		const isRootWithQuery = activeNodeId.value === null && trimmed.length > 2;
		if (isInCredentialParent || isRootWithQuery) {
			isLoading.value = isInCredentialParent;
			fetchCredentialsDebounced(trimmed);
		}
	}
	function onCommandBarNavigateTo(to) {
		activeNodeId.value = to;
		if (to === ITEM_ID$3.OPEN_CREDENTIAL) {
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
	const router = useRouter();
	const route = useRoute();
	const personalProjectId = computed(() => {
		return projectsStore.myProjects.find((p) => p.type === "personal")?.id;
	});
	const currentProjectId = computed(() => {
		return typeof route.params.projectId === "string" ? route.params.projectId : personalProjectId.value;
	});
	return { commands: computed(() => {
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
var ITEM_ID$2 = {
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
	const createProjectCommand = (project) => {
		const title$1 = project.type === "personal" ? i18n.baseText("projects.menu.personal") : project.name ? project.name : i18n.baseText("commandBar.projects.unnamed");
		return {
			id: project.id,
			title: {
				component: CommandBarItemTitle_default,
				props: {
					title: title$1,
					actionText: i18n.baseText("generic.open")
				}
			},
			section: i18n.baseText("commandBar.sections.projects"),
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
		if (!(activeNodeId.value === ITEM_ID$2.OPEN_PROJECT)) return [];
		return filteredProjects.value.map((project) => createProjectCommand(project));
	});
	const rootProjectItems = computed(() => {
		if (!(activeNodeId.value === null && lastQuery.value.trim().length > 2)) return [];
		return filteredProjects.value.map((project) => createProjectCommand(project));
	});
	const projectNavigationCommands = computed(() => {
		const commands = [];
		if (projectsStore.hasPermissionToCreateProjects && projectsStore.canCreateProjects) commands.push({
			id: ITEM_ID$2.CREATE_PROJECT,
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
		if (projectsStore.availableProjects.length > 0) commands.push({
			id: ITEM_ID$2.OPEN_PROJECT,
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
var ITEM_ID$1 = {
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
				id: ITEM_ID$1.DEBUG_EXECUTION,
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
				id: ITEM_ID$1.RETRY_CURRENT_WORKFLOW,
				title: i18n.baseText("executionsList.retryWithCurrentlySavedWorkflow"),
				section: i18n.baseText("commandBar.sections.execution"),
				handler: async () => await handleRetryExecution(true),
				icon: {
					component: N8nIcon_default,
					props: { icon: "redo-2" }
				}
			});
			commands.push({
				id: ITEM_ID$1.RETRY_ORIGINAL_WORKFLOW,
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
			id: ITEM_ID$1.STOP_EXECUTION,
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
				id: ITEM_ID$1.VOTE_UP,
				title: vote.value === "up" ? i18n.baseText("executionAnnotationView.vote.removeUp") : i18n.baseText("executionAnnotationView.vote.up"),
				section: i18n.baseText("commandBar.sections.execution"),
				handler: async () => await handleVoteClick("up"),
				icon: {
					component: N8nIcon_default,
					props: { icon: "thumbs-up" }
				}
			});
			commands.push({
				id: ITEM_ID$1.VOTE_DOWN,
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
			id: ITEM_ID$1.DELETE_EXECUTION,
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
var ITEM_ID = {
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
	const { getReportingURL } = useBugReporting();
	return { commands: computed(() => [
		{
			id: ITEM_ID.WHATS_NEW,
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
		{
			id: ITEM_ID.TEMPLATES,
			title: i18n.baseText("mainSidebar.templates"),
			section: i18n.baseText("commandBar.sections.general"),
			handler: () => {
				router.push({ name: VIEWS.PRE_BUILT_AGENT_TEMPLATES });
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "package-open" }
			},
			keywords: [i18n.baseText("mainSidebar.templates").toLowerCase()]
		},
		{
			id: ITEM_ID.VARIABLES,
			title: i18n.baseText("mainSidebar.variables"),
			section: i18n.baseText("commandBar.sections.general"),
			handler: () => {
				router.push({ name: VIEWS.VARIABLES });
			},
			icon: {
				component: N8nIcon_default,
				props: { icon: "variable" }
			},
			keywords: [i18n.baseText("mainSidebar.variables").toLowerCase()]
		},
		{
			id: ITEM_ID.INSIGHTS,
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
		},
		{
			id: ITEM_ID.QUICKSTART,
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
			id: ITEM_ID.DOCUMENTATION,
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
			id: ITEM_ID.FORUM,
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
			id: ITEM_ID.COURSE,
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
			id: ITEM_ID.REPORT_BUG,
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
			id: ITEM_ID.ABOUT,
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
			id: ITEM_ID.SETTINGS,
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
			id: ITEM_ID.SIGN_OUT,
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
export { useCommandBar as t };
