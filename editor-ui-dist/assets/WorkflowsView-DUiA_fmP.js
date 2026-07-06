import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, Nt as onScopeDispose, O as createSlots, P as getCurrentInstance, S as computed, T as createCommentVNode, X as onMounted, Z as onUnmounted, _ as Fragment, at as resolveComponent, bn as normalizeStyle, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, m as withKeys, n as Transition, p as vShow, pt as useTemplateRef, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { s as useI18n } from "./src-CBtyHSh2.js";
import { Ga as N8nHeading_default, Ja as N8nButton_default, Ka as N8nCallout_default, Ki as N8nActionBox_default, Lt as N8nActionToggle_default, O as N8nTags_default, Ot as createEventBus, Ti as N8nBadge_default, Tt as N8nOption_default, Ui as Input_default, Ut as N8nLoading_default, Vt as DropdownMenu_default, Wi as N8nIconButton_default, Ya as N8nIcon_default, _t as useRouter, gt as useRoute, j as Switch_default, ji as N8nChatInput_default, jt as N8nCard_default, lt as N8nLink_default, qa as N8nText_default, tt as N8nInfoTip_default, vt as N8nInputLabel_default, wt as N8nSelect_default, x as N8nBreadcrumbs_default, y as N8nInlineTextEdit_default, yt as Checkbox_default, zi as N8nTooltip_default } from "./src-BVC_ZvSs.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useMessage } from "./useMessage-DCdqgkbP.js";
import { t as useToast } from "./useToast-CiwmCDeB.js";
import { Ci as DUPLICATE_MODAL_KEY, Dc as NodeConnectionTypes, Ju as TEMPLATE_ONBOARDING_EXPERIMENT, Lc as jsonParse, Ou as CREDENTIALS_APP_SELECTION_EXPERIMENT, Qu as EnterpriseEditionFeature, Ti as EXPERIMENT_TEMPLATE_RECO_V3_KEY, Ul as getResourcePermissions, Zu as WORKFLOW_CARD_MCP_TOGGLE_EXPERIMENT, _a as LOCAL_STORAGE_EXPERIMENTAL_DISMISSED_SUGGESTED_WORKFLOWS, aa as WORKFLOW_SHARE_MODAL_KEY, cd as getDebounceTime, ed as DEBOUNCE_TIME, ii as NEW_AGENT_VIEW, na as WORKFLOW_HISTORY_VERSION_UNPUBLISH, qu as SURFACE_MCP_TO_NEW_CLOUD_USERS_EXPERIMENT, ui as VIEWS, wi as EXPERIMENT_TEMPLATE_RECO_V2_KEY } from "./constants-Xm8Zfd-h.js";
import { Cn as ProjectTypes, It as useTagsStore, R as removePreviewToken, Sn as useSourceControlStore, _ as useNodeTypesStore, at as useCredentialsStore, cn as useWorkflowsStore, et as sublimeSearch, gn as ResourceType, hn as useEnvironmentsStore, xn as useProjectsStore } from "./workflowDocument.store-D5eYC1gP.js";
import { D as storeToRefs, T as defineStore } from "./useRootStore-Crb5JJ4G.js";
import { t as useSettingsStore, zn as STORES } from "./settings.store-DKCHFcby.js";
import { t as useBannersStore } from "./banners.store-CD56wUzC.js";
import { B as MCP_ACCESS_ACTIONS, H as CREDENTIAL_EDIT_MODAL_KEY, I as FOLDER_LIST_ITEM_ACTIONS, K as COMMUNITY_PLUS_ENROLLMENT_MODAL, L as FOLDER_NAME_ILLEGAL_CHARACTERS_REGEX, R as FOLDER_NAME_ONLY_DOTS_REGEX, _ as useStorage, f as useUIStore, g as usePostHog, n as hasPermission, p as useTelemetry, t as useUsersStore, z as ILLEGAL_FOLDER_CHARACTERS } from "./users.store-B52ADdpG.js";
import { n as require_debounce, t as useDebounce } from "./useDebounce-V_xhj117.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-CS9tCvfU.js";
import { t as require_dateformat } from "./dateformat-9ZHpj92n.js";
import { n as useFavoritesStore, t as useWorkflowsListStore } from "./workflowsList.store-DJoKe7hf.js";
import { t as useDocumentTitle } from "./useDocumentTitle-CMi1STqd.js";
import { t as usePrivateCredentials } from "./usePrivateCredentials-B8dZ8A2e.js";
import { a as trackTemplatesClick, t as TemplateClickSource } from "./utils-De5DacqU.js";
import { t as useTemplatesStore } from "./templates.store-gwSJpEn_.js";
import { t as useDataTableStore } from "./dataTable.store-KJo0cuzC.js";
import { t as Modal_default } from "./Modal-BW4kn_qP.js";
import { n as useInstallNode, t as ContactAdministratorToInstall_default } from "./ContactAdministratorToInstall-js7AsXu7.js";
import { t as ProjectCardBadge_default } from "./ProjectCardBadge-DJUw-JUb.js";
import { t as useUsageStore } from "./usage.store-CNdmQqkB.js";
import { t as Draggable_default } from "./Draggable-DzS3P3ux.js";
import { t as NodeIcon_default } from "./NodeIcon-_nU8y-XN.js";
import { t as TimeAgo_default } from "./TimeAgo-CnlGUsrz.js";
import { t as useFoldersStore } from "./folders.store-BjSHonIf.js";
import { t as WorkflowTagsDropdown_default } from "./WorkflowTagsDropdown-tLYEnvRy.js";
import { t as useInsightsStore } from "./insights.store-uHv8J50u.js";
import { n as SURFACE_MCP_ONBOARDING_MODAL_KEY } from "./constants-_ANzb2Tp.js";
import { a as MCP_SETTINGS_VIEW } from "./mcp.constants-BT39eBzp.js";
import { t as useMcp } from "./useMcp-C6k6Ahpg.js";
import { n as usePersonalizedTemplatesV3Store, r as usePersonalizedTemplatesV2Store, t as require_shuffle } from "./shuffle-CM9jINSA.js";
import { t as useWorkflowActivate } from "./useWorkflowActivate-BULagJuj.js";
import { i as useProjectPages, r as useEmptyStateDetection, t as useReadyToRunStore } from "./readyToRun.store-XQxOHfiJ.js";
import { t as useAITemplatesStarterCollectionStore } from "./aiTemplatesStarterCollection.store-vJkO9gBI.js";
import { t as useReadyToRunWorkflowsStore } from "./readyToRunWorkflows.store-JAIF22zj.js";
import { t as FolderBreadcrumbs_default } from "./FolderBreadcrumbs-BqNkLhhj.js";
import { t as useEmptyStateBuilderPromptStore } from "./emptyStateBuilderPrompt.store-i2b_yYDE.js";
import { t as EmptySharedSectionActionBox_default } from "./EmptySharedSectionActionBox-BjQgdF7q.js";
import { t as ResourcesListLayout_default } from "./ResourcesListLayout-Dshs6qXn.js";
import { n as ReadyToRunButton_default, t as ProjectHeader_default } from "./ProjectHeader-DtDKS7Z9.js";
import { t as useAgentPermissions } from "./useAgentPermissions-BSgvdG06.js";
import { t as useAgentTelemetry } from "./useAgentTelemetry-BlF2nPvH.js";
import { n as useDependencies, t as DependencyPill_default } from "./DependencyPill-BfT2e0tc.js";
import { t as useMCPStore } from "./mcp.store-BBH0QsFO.js";
import { n as useRecommendedTemplatesStore, t as RecommendedTemplateCard_default } from "./RecommendedTemplateCard-C8TD1jMO.js";
import { t as useSurfaceMcpToNewCloudUsersStore } from "./surfaceMcpToNewCloudUsers.store-Z7xanwKG.js";
import { n as verified_default, t as shield_alt_default } from "./shield-alt-CAuea6ae.js";
import { t as InsightsSummary_default } from "./InsightsSummary-_GCbCMUy.js";
//#region src/features/core/folders/components/FolderCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$7 = { "data-test-id": "folder-card" };
var _hoisted_2$1 = { key: 0 };
var _hoisted_3$1 = { "data-test-id": "folder-card-actions" };
var FolderCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "FolderCard",
	props: {
		data: {},
		personalProject: {},
		actions: { default: () => [] },
		readOnly: {
			type: Boolean,
			default: true
		},
		showOwnershipBadge: {
			type: Boolean,
			default: false
		},
		showMcpAccessActions: {
			type: Boolean,
			default: false
		}
	},
	emits: ["action", "folderOpened"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const i18n = useI18n();
		const route = useRoute();
		const router = useRouter();
		const foldersStore = useFoldersStore();
		const favoritesStore = useFavoritesStore();
		const emit = __emit;
		const dropdownId = `folder-card-actions-dropdown-${getCurrentInstance()?.uid ?? 0}`;
		const hiddenBreadcrumbsItemsAsync = ref(new Promise(() => {}));
		const cachedHiddenBreadcrumbsItems = ref([]);
		const resourceTypeLabel = computed(() => i18n.baseText("generic.folder").toLowerCase());
		const mcpAccessAction = computed(() => ({
			label: i18n.baseText("resourceActions.mcpAccess.manage"),
			value: MCP_ACCESS_ACTIONS.MANAGE,
			disabled: false,
			children: [{
				label: i18n.baseText("resourceActions.mcpAccess.enable"),
				value: MCP_ACCESS_ACTIONS.ENABLE,
				disabled: false,
				tooltip: i18n.baseText("resourceActions.mcpAccess.enable.tooltip", { interpolate: { scopeName: props.data.name } })
			}, {
				label: i18n.baseText("resourceActions.mcpAccess.disable"),
				value: MCP_ACCESS_ACTIONS.DISABLE,
				disabled: false,
				tooltip: i18n.baseText("resourceActions.mcpAccess.disable.tooltip", { interpolate: { scopeName: props.data.name } })
			}]
		}));
		const allActions = computed(() => {
			const favoriteAction = {
				label: favoritesStore.isFavorite(props.data.id, "folder") ? i18n.baseText("favorites.remove") : i18n.baseText("favorites.add"),
				value: FOLDER_LIST_ITEM_ACTIONS.TOGGLE_FAVORITE,
				disabled: false
			};
			const renameIndex = props.actions.findIndex((a) => a.value === FOLDER_LIST_ITEM_ACTIONS.RENAME);
			let result;
			if (renameIndex !== -1) {
				result = [...props.actions];
				result.splice(renameIndex, 0, favoriteAction);
			} else result = [...props.actions, favoriteAction];
			return props.showMcpAccessActions ? [...result, mcpAccessAction.value] : result;
		});
		function toMenuItem(action) {
			return {
				id: action.value,
				testId: `action-${action.value}`,
				label: action.label,
				disabled: action.disabled,
				children: action.children?.map(toMenuItem),
				data: action.tooltip ? { tooltip: action.tooltip } : void 0
			};
		}
		const menuItems = computed(() => allActions.value.map(toMenuItem));
		const cardUrl = computed(() => {
			return getFolderUrl(props.data.id);
		});
		const projectName = computed(() => {
			if (props.data.homeProject?.type === ProjectTypes.Personal) return i18n.baseText("projects.menu.personal");
			return props.data.homeProject?.name;
		});
		const cardBreadcrumbs = computed(() => {
			if (props.data.parentFolder) return [{
				id: props.data.parentFolder.id,
				name: props.data.parentFolder.name,
				label: props.data.parentFolder.name,
				href: router.resolve({
					name: VIEWS.PROJECTS_FOLDERS,
					params: {
						projectId: props.data.homeProject?.id,
						folderId: props.data.parentFolder.id
					}
				}).href
			}];
			return [];
		});
		const showCardBreadcrumbs = computed(() => {
			return props.showOwnershipBadge && cardBreadcrumbs.value.length;
		});
		const getFolderUrl = (folderId) => {
			return router.resolve({
				name: VIEWS.PROJECTS_FOLDERS,
				params: {
					projectId: route.params.projectId,
					folderId
				},
				query: route.query
			}).href;
		};
		const onAction = async (action) => {
			if (action === FOLDER_LIST_ITEM_ACTIONS.OPEN) {
				emit("folderOpened", { folder: props.data });
				await router.push(cardUrl.value);
				return;
			}
			if (action === FOLDER_LIST_ITEM_ACTIONS.TOGGLE_FAVORITE) {
				await favoritesStore.toggleFavorite(props.data.id, "folder");
				return;
			}
			emit("action", {
				action,
				folderId: props.data.id
			});
		};
		const fetchHiddenBreadCrumbsItems = async () => {
			if (!props.data.homeProject?.id || !projectName.value || !props.data.parentFolder) hiddenBreadcrumbsItemsAsync.value = Promise.resolve([]);
			else {
				if (cachedHiddenBreadcrumbsItems.value.length) {
					hiddenBreadcrumbsItemsAsync.value = Promise.resolve(cachedHiddenBreadcrumbsItems.value);
					return;
				}
				const loadedItem = foldersStore.getHiddenBreadcrumbsItems({
					id: props.data.homeProject.id,
					name: projectName.value
				}, props.data.parentFolder.id);
				hiddenBreadcrumbsItemsAsync.value = loadedItem;
				cachedHiddenBreadcrumbsItems.value = await loadedItem;
			}
		};
		const onBreadcrumbItemClick = async (item) => {
			if (item.href) await router.push(item.href);
		};
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createElementBlock("div", _hoisted_1$7, [createVNode(_component_RouterLink, {
				to: cardUrl.value,
				onClick: _cache[1] || (_cache[1] = () => emit("folderOpened", { folder: props.data }))
			}, {
				default: withCtx(() => [createVNode(unref(N8nCard_default), { class: normalizeClass(_ctx.$style.card) }, {
					prepend: withCtx(() => [createVNode(unref(N8nIcon_default), {
						"data-test-id": "folder-card-icon",
						class: normalizeClass(_ctx.$style["folder-icon"]),
						icon: "folder",
						size: "xlarge",
						"stroke-width": 1
					}, null, 8, ["class"])]),
					header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["card-header"]) }, [createVNode(unref(N8nHeading_default), {
						tag: "h2",
						bold: "",
						size: "small",
						"data-test-id": "folder-card-name"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.data.name), 1)]),
						_: 1
					}), __props.readOnly ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						class: "ml-3xs",
						theme: "tertiary",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.item.readonly")), 1)]),
						_: 1
					})) : createCommentVNode("", true)], 2)]),
					footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["card-footer"]) }, [
						__props.data.workflowCount > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "text-light",
							class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--workflow-count"]]),
							"data-test-id": "folder-card-folder-count"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.workflow", { interpolate: { count: __props.data.workflowCount } })), 1)]),
							_: 1
						}, 8, ["class"])) : createCommentVNode("", true),
						__props.data.subFolderCount > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "small",
							color: "text-light",
							class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--workflow-count"]]),
							"data-test-id": "folder-card-workflow-count"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.folderCount", { interpolate: { count: __props.data.subFolderCount } })), 1)]),
							_: 1
						}, 8, ["class"])) : createCommentVNode("", true),
						createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light",
							class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--updated"]]),
							"data-test-id": "folder-card-last-updated"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.lastUpdated")) + " ", 1), createVNode(TimeAgo_default, { date: String(__props.data.updatedAt) }, null, 8, ["date"])]),
							_: 1
						}, 8, ["class"]),
						createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light",
							class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--created"]]),
							"data-test-id": "folder-card-created"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.item.created")) + " ", 1), createVNode(TimeAgo_default, { date: String(__props.data.createdAt) }, null, 8, ["date"])]),
							_: 1
						}, 8, ["class"])
					], 2)]),
					append: withCtx(() => [createBaseVNode("div", {
						class: normalizeClass(_ctx.$style["card-actions"]),
						onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop", "prevent"]))
					}, [__props.data.homeProject && __props.showOwnershipBadge ? (openBlock(), createElementBlock("div", _hoisted_2$1, [createVNode(ProjectCardBadge_default, {
						class: normalizeClass({
							[_ctx.$style.cardBadge]: true,
							[_ctx.$style["with-breadcrumbs"]]: showCardBreadcrumbs.value
						}),
						resource: __props.data,
						"resource-type": unref(ResourceType).Workflow,
						"resource-type-label": resourceTypeLabel.value,
						"personal-project": __props.personalProject,
						"show-badge-border": false
					}, {
						default: withCtx(() => [showCardBreadcrumbs.value ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.breadcrumbs)
						}, [createVNode(unref(N8nBreadcrumbs_default), {
							items: cardBreadcrumbs.value,
							"hidden-items": __props.data.parentFolder?.parentFolderId !== null ? hiddenBreadcrumbsItemsAsync.value : void 0,
							"path-truncated": __props.data.parentFolder?.parentFolderId !== null,
							"highlight-last-item": false,
							"hidden-items-trigger": "hover",
							theme: "small",
							"data-test-id": "folder-card-breadcrumbs",
							onTooltipOpened: fetchHiddenBreadCrumbsItems,
							onItemSelected: onBreadcrumbItemClick
						}, {
							prepend: withCtx(() => [..._cache[2] || (_cache[2] = [])]),
							_: 1
						}, 8, [
							"items",
							"hidden-items",
							"path-truncated"
						])], 2)) : createCommentVNode("", true)]),
						_: 1
					}, 8, [
						"class",
						"resource",
						"resource-type",
						"resource-type-label",
						"personal-project"
					])])) : createCommentVNode("", true), createBaseVNode("span", _hoisted_3$1, [createVNode(unref(DropdownMenu_default), {
						id: dropdownId,
						items: menuItems.value,
						placement: "bottom-end",
						"extra-popper-class": _ctx.$style["actions-menu-dropdown"],
						onSelect: onAction
					}, {
						trigger: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							class: normalizeClass(["action-toggle", _ctx.$style["actions-menu"]]),
							variant: "ghost",
							icon: "ellipsis-vertical",
							size: "medium",
							role: "button",
							"aria-controls": dropdownId
						}, null, 8, ["class"])]),
						"item-label": withCtx(({ item, ui }) => [item.data?.tooltip ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 0,
							content: item.data.tooltip,
							placement: "left",
							"show-after": 300,
							teleported: false
						}, {
							default: withCtx(() => [createVNode(unref(N8nText_default), {
								class: normalizeClass(ui.class),
								size: "medium",
								color: item.disabled ? "text-light" : "text-dark"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
								_: 2
							}, 1032, ["class", "color"])]),
							_: 2
						}, 1032, ["content"])) : (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							class: normalizeClass(ui.class),
							size: "medium",
							color: item.disabled ? "text-light" : "text-dark"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
							_: 2
						}, 1032, ["class", "color"]))]),
						_: 1
					}, 8, ["items", "extra-popper-class"])])], 2)]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, ["to"])]);
		};
	}
});
//#endregion
//#region src/features/core/folders/components/FolderCard.vue?vue&type=style&index=0&lang.module.scss
var card$3 = "_card_12qpg_125";
var cardBadge$1 = "_cardBadge_12qpg_159";
var FolderCard_vue_vue_type_style_index_0_lang_module_default = {
	card: card$3,
	"folder-icon": "_folder-icon_12qpg_133",
	"card-header": "_card-header_12qpg_142",
	"card-footer": "_card-footer_12qpg_150",
	"info-cell": "_info-cell_12qpg_154",
	cardBadge: cardBadge$1,
	"with-breadcrumbs": "_with-breadcrumbs_12qpg_159",
	"card-actions": "_card-actions_12qpg_166",
	"actions-menu-dropdown": "_actions-menu-dropdown_12qpg_171",
	"info-cell--created": "_info-cell--created_12qpg_188"
};
var FolderCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(FolderCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": FolderCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/WorkflowCardMcpToggle.vue?vue&type=script&setup=true&lang.ts
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var WorkflowCardMcpToggle_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowCardMcpToggle",
	props: {
		workflowId: {},
		availableInMcp: { type: Boolean },
		canEdit: { type: Boolean },
		isMcpEnabled: { type: Boolean },
		isMcpModuleActive: { type: Boolean },
		canManageInstanceMcp: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const locale = useI18n();
		const toast = useToast();
		const uiStore = useUIStore();
		const mcpStore = useMCPStore();
		const mcp = useMcp();
		const optimisticAvailability = ref(null);
		const isAvailableInMCP = computed(() => optimisticAvailability.value ?? props.availableInMcp);
		const showToggle = computed(() => props.isMcpModuleActive && (props.canEdit || isAvailableInMCP.value));
		const switchModelValue = computed(() => props.isMcpEnabled && isAvailableInMCP.value);
		const blockedByMissingAdminScope = computed(() => !props.isMcpEnabled && !props.canManageInstanceMcp);
		const switchDisabled = computed(() => !props.canEdit || blockedByMissingAdminScope.value);
		const tooltipContent = computed(() => {
			if (!props.canEdit) return locale.baseText("workflows.item.availableInMCP");
			if (blockedByMissingAdminScope.value) return locale.baseText("workflows.item.mcpDisabledByInstance");
			return switchModelValue.value ? locale.baseText("workflows.item.disableMCPAccess") : locale.baseText("workflows.item.enableMCPAccess");
		});
		async function toggleMcpAccess(enabled) {
			try {
				await mcpStore.toggleWorkflowMcpAccess(props.workflowId, enabled);
				optimisticAvailability.value = enabled;
				if (enabled) mcp.trackMcpAccessEnabledForWorkflow(props.workflowId);
			} catch (error) {
				toast.showError(error, locale.baseText("workflowSettings.toggleMCP.error.title"));
			}
		}
		async function onSwitchChange(nextValue) {
			if (props.isMcpEnabled) {
				await toggleMcpAccess(nextValue);
				return;
			}
			uiStore.openModalWithData({
				name: SURFACE_MCP_ONBOARDING_MODAL_KEY,
				data: {
					surface: "workflow_card",
					onMcpAccessEnabled: () => {
						if (isAvailableInMCP.value) return;
						toggleMcpAccess(true);
					}
				}
			});
		}
		return (_ctx, _cache) => {
			return showToggle.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				placement: "top",
				content: tooltipContent.value
			}, {
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.container) }, [createVNode(unref(N8nIcon_default), {
					class: normalizeClass(_ctx.$style.icon),
					icon: "mcp",
					size: "medium"
				}, null, 8, ["class"]), createVNode(unref(Switch_default), {
					"model-value": switchModelValue.value,
					disabled: switchDisabled.value,
					size: "small",
					"aria-label": tooltipContent.value,
					"data-test-id": "workflow-card-mcp-toggle",
					"onUpdate:modelValue": onSwitchChange,
					onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, null, 8, [
					"model-value",
					"disabled",
					"aria-label"
				])], 2)]),
				_: 1
			}, 8, ["content"])) : createCommentVNode("", true);
		};
	}
});
var WorkflowCardMcpToggle_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1mpou_125",
	icon: "_icon_1mpou_131"
};
var WorkflowCardMcpToggle_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowCardMcpToggle_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowCardMcpToggle_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/components/WorkflowCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = { key: 0 };
var WorkflowCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowCard",
	props: {
		data: {},
		readOnly: {
			type: Boolean,
			default: false
		},
		workflowListEventBus: { default: void 0 },
		showOwnershipBadge: {
			type: Boolean,
			default: false
		},
		areTagsEnabled: {
			type: Boolean,
			default: true
		},
		isMcpEnabled: {
			type: Boolean,
			default: false
		},
		isMcpModuleActive: {
			type: Boolean,
			default: false
		},
		canManageInstanceMcp: {
			type: Boolean,
			default: false
		},
		isWorkflowCardMcpToggleEnabled: {
			type: Boolean,
			default: false
		},
		areFoldersEnabled: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"expand:tags",
		"click:tag",
		"workflow:deleted",
		"workflow:archived",
		"workflow:unarchived",
		"workflow:unpublished",
		"workflow:active-toggle",
		"action:move-to-folder"
	],
	setup(__props, { emit: __emit }) {
		const WORKFLOW_LIST_ITEM_ACTIONS = {
			OPEN: "open",
			SHARE: "share",
			DUPLICATE: "duplicate",
			DELETE: "delete",
			ARCHIVE: "archive",
			UNARCHIVE: "unarchive",
			MOVE_TO_FOLDER: "moveToFolder",
			ENABLE_MCP_ACCESS: "enableMCPAccess",
			REMOVE_MCP_ACCESS: "removeMCPAccess",
			UNPUBLISH: "unpublish",
			TOGGLE_FAVORITE: "toggleFavorite"
		};
		const props = __props;
		const emit = __emit;
		const toast = useToast();
		const message = useMessage();
		const locale = useI18n();
		const router = useRouter();
		const route = useRoute();
		const telemetry = useTelemetry();
		const { isEnabled: isPrivateCredentialsEnabled } = usePrivateCredentials();
		const { hasDependencies } = useDependencies();
		const uiStore = useUIStore();
		const usersStore = useUsersStore();
		const workflowsStore = useWorkflowsStore();
		const workflowsListStore = useWorkflowsListStore();
		const projectsStore = useProjectsStore();
		const foldersStore = useFoldersStore();
		const favoritesStore = useFavoritesStore();
		const mcpStore = useMCPStore();
		const mcp = useMcp();
		const workflowActivate = useWorkflowActivate();
		const hiddenBreadcrumbsItemsAsync = ref(new Promise(() => {}));
		const cachedHiddenBreadcrumbsItems = ref([]);
		const resourceTypeLabel = computed(() => locale.baseText("generic.workflow").toLowerCase());
		const currentUser = computed(() => usersStore.currentUser ?? {});
		const workflowPermissions = computed(() => getResourcePermissions(props.data.scopes).workflow);
		const globalPermissions = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).workflow);
		const projectPermissions = computed(() => getResourcePermissions(projectsStore.myProjects?.find((p) => props.data.homeProject?.id === p.id)?.scopes).workflow);
		const canCreateWorkflow = computed(() => globalPermissions.value.create ?? projectPermissions.value.create);
		const showCardBreadcrumbs = computed(() => {
			return props.showOwnershipBadge && !isSomeoneElsesWorkflow.value && cardBreadcrumbs.value.length;
		});
		const projectName = computed(() => {
			if (props.data.homeProject?.type === ProjectTypes.Personal) return locale.baseText("projects.menu.personal");
			return props.data.homeProject?.name;
		});
		const cardBreadcrumbs = computed(() => {
			if (props.data.parentFolder) return [{
				id: props.data.parentFolder.id,
				name: props.data.parentFolder.name,
				label: props.data.parentFolder.name,
				href: router.resolve({
					name: VIEWS.PROJECTS_FOLDERS,
					params: {
						projectId: props.data.homeProject?.id,
						folderId: props.data.parentFolder.id
					}
				}).href
			}];
			return [];
		});
		const actions = computed(() => {
			const items = [{
				label: locale.baseText("workflows.item.open"),
				value: WORKFLOW_LIST_ITEM_ACTIONS.OPEN
			}];
			if (workflowPermissions.value.share) items.push({
				label: locale.baseText("workflows.item.share"),
				value: WORKFLOW_LIST_ITEM_ACTIONS.SHARE
			});
			items.push({
				label: favoritesStore.isFavorite(props.data.id, "workflow") ? locale.baseText("favorites.remove") : locale.baseText("favorites.add"),
				value: WORKFLOW_LIST_ITEM_ACTIONS.TOGGLE_FAVORITE
			});
			if (workflowPermissions.value.read && canCreateWorkflow.value && !props.readOnly && !props.data.isArchived) items.push({
				label: locale.baseText("workflows.item.duplicate"),
				value: WORKFLOW_LIST_ITEM_ACTIONS.DUPLICATE
			});
			if (!props.readOnly && props.areFoldersEnabled && (workflowPermissions.value.update || workflowPermissions.value.move && projectsStore.isTeamProjectFeatureEnabled) && route.name !== VIEWS.SHARED_WORKFLOWS) items.push({
				label: locale.baseText("folders.actions.moveToFolder"),
				value: WORKFLOW_LIST_ITEM_ACTIONS.MOVE_TO_FOLDER
			});
			if (workflowPermissions.value.delete && !props.readOnly) if (!props.data.isArchived) items.push({
				label: locale.baseText("workflows.item.archive"),
				value: WORKFLOW_LIST_ITEM_ACTIONS.ARCHIVE
			});
			else {
				items.push({
					label: locale.baseText("workflows.item.delete"),
					value: WORKFLOW_LIST_ITEM_ACTIONS.DELETE
				});
				items.push({
					label: locale.baseText("workflows.item.unarchive"),
					value: WORKFLOW_LIST_ITEM_ACTIONS.UNARCHIVE
				});
			}
			if (isWorkflowPublished.value && workflowPermissions.value.unpublish && !props.readOnly && !props.data.isArchived) items.push({
				label: locale.baseText("menuActions.unpublish"),
				value: WORKFLOW_LIST_ITEM_ACTIONS.UNPUBLISH
			});
			if (!props.isWorkflowCardMcpToggleEnabled && props.isMcpEnabled && workflowPermissions.value.update && !props.readOnly && !props.data.isArchived) if (isAvailableInMCP.value) items.push({
				label: locale.baseText("workflows.item.disableMCPAccess"),
				value: WORKFLOW_LIST_ITEM_ACTIONS.REMOVE_MCP_ACCESS
			});
			else items.push({
				label: locale.baseText("workflows.item.enableMCPAccess"),
				value: WORKFLOW_LIST_ITEM_ACTIONS.ENABLE_MCP_ACCESS
			});
			return items;
		});
		const formattedCreatedAtDate = computed(() => {
			const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
			return (0, import_dateformat.default)(props.data.createdAt, `d mmmm${String(props.data.createdAt).startsWith(currentYear) ? "" : ", yyyy"}`);
		});
		const canEditMcp = computed(() => Boolean(workflowPermissions.value.update) && !props.readOnly && !props.data.isArchived);
		const mcpToggleStatus = ref(null);
		const isAvailableInMCP = computed(() => mcpToggleStatus.value ?? props.data.settings?.availableInMCP ?? false);
		const showLegacyMcpIndicator = computed(() => !props.isWorkflowCardMcpToggleEnabled && props.isMcpEnabled && isAvailableInMCP.value);
		const isSomeoneElsesWorkflow = computed(() => props.data.homeProject?.type !== ProjectTypes.Team && props.data.homeProject?.id !== projectsStore.personalProject?.id);
		const isWorkflowPublished = computed(() => {
			return props.data.activeVersionId !== null;
		});
		const hasDynamicCredentials = computed(() => {
			return isPrivateCredentialsEnabled.value && props.data.hasResolvableCredentials;
		});
		const workflowHasDependencies = computed(() => hasDependencies(props.data.id));
		async function onClick(event) {
			if (event?.ctrlKey || event?.metaKey) {
				const route = router.resolve({
					name: VIEWS.WORKFLOW,
					params: { workflowId: props.data.id }
				});
				window.open(route.href, "_blank");
				return;
			}
			await router.push({
				name: VIEWS.WORKFLOW,
				params: { workflowId: props.data.id }
			});
		}
		function onClickTag(tagId, event) {
			event.stopPropagation();
			emit("click:tag", tagId, event);
		}
		function onExpandTags() {
			emit("expand:tags");
		}
		async function onAction(action) {
			switch (action) {
				case WORKFLOW_LIST_ITEM_ACTIONS.OPEN:
					await onClick();
					break;
				case WORKFLOW_LIST_ITEM_ACTIONS.DUPLICATE:
					uiStore.openModalWithData({
						name: DUPLICATE_MODAL_KEY,
						data: {
							id: props.data.id,
							name: props.data.name,
							tags: (props.data.tags ?? []).map((tag) => typeof tag !== "string" && "id" in tag ? tag.id : tag),
							externalEventBus: props.workflowListEventBus,
							parentFolderId: props.data.parentFolder?.id
						}
					});
					break;
				case WORKFLOW_LIST_ITEM_ACTIONS.SHARE:
					uiStore.openModalWithData({
						name: WORKFLOW_SHARE_MODAL_KEY,
						data: { id: props.data.id }
					});
					telemetry.track("User opened sharing modal", {
						workflow_id: props.data.id,
						user_id_sharer: currentUser.value.id,
						sub_view: "Workflows listing"
					});
					break;
				case WORKFLOW_LIST_ITEM_ACTIONS.DELETE:
					await deleteWorkflow();
					break;
				case WORKFLOW_LIST_ITEM_ACTIONS.ARCHIVE:
					await archiveWorkflow();
					break;
				case WORKFLOW_LIST_ITEM_ACTIONS.UNARCHIVE:
					await unarchiveWorkflow();
					break;
				case WORKFLOW_LIST_ITEM_ACTIONS.MOVE_TO_FOLDER:
					emit("action:move-to-folder", {
						id: props.data.id,
						name: props.data.name,
						parentFolderId: props.data.parentFolder?.id,
						sharedWithProjects: props.data.sharedWithProjects,
						homeProjectId: props.data.homeProject?.id
					});
					break;
				case WORKFLOW_LIST_ITEM_ACTIONS.UNPUBLISH:
					await unpublishWorkflow();
					break;
				case WORKFLOW_LIST_ITEM_ACTIONS.ENABLE_MCP_ACCESS:
					await toggleMCPAccess(true);
					break;
				case WORKFLOW_LIST_ITEM_ACTIONS.REMOVE_MCP_ACCESS:
					await toggleMCPAccess(false);
					break;
				case WORKFLOW_LIST_ITEM_ACTIONS.TOGGLE_FAVORITE:
					await favoritesStore.toggleFavorite(props.data.id, "workflow");
					break;
			}
		}
		async function unpublishWorkflow() {
			if (!props.data.activeVersionId) {
				toast.showMessage({
					title: locale.baseText("workflowHistory.action.unpublish.notAvailable"),
					type: "warning"
				});
				return;
			}
			const unpublishEventBus = createEventBus();
			unpublishEventBus.once("unpublish", async () => {
				const success = await workflowActivate.unpublishWorkflowFromHistory(props.data.id);
				uiStore.closeModal(WORKFLOW_HISTORY_VERSION_UNPUBLISH);
				if (success) {
					emit("workflow:unpublished", { id: props.data.id });
					toast.showMessage({
						title: locale.baseText("workflowHistory.action.unpublish.success.title"),
						type: "success"
					});
				}
			});
			uiStore.openModalWithData({
				name: WORKFLOW_HISTORY_VERSION_UNPUBLISH,
				data: {
					versionName: props.data.name,
					eventBus: unpublishEventBus
				}
			});
		}
		async function toggleMCPAccess(enabled) {
			try {
				await mcpStore.toggleWorkflowMcpAccess(props.data.id, enabled);
				mcpToggleStatus.value = enabled;
				if (enabled) mcp.trackMcpAccessEnabledForWorkflow(props.data.id);
			} catch (error) {
				toast.showError(error, locale.baseText("workflowSettings.toggleMCP.error.title"));
			}
		}
		async function deleteWorkflow() {
			await deleteWorkflowById(props.data.id, props.data.name);
		}
		async function deleteWorkflowById(id, name) {
			if (await message.confirm(locale.baseText("mainSidebar.confirmMessage.workflowDelete.message", { interpolate: { workflowName: name } }), locale.baseText("mainSidebar.confirmMessage.workflowDelete.headline"), {
				type: "warning",
				confirmButtonText: locale.baseText("mainSidebar.confirmMessage.workflowDelete.confirmButtonText"),
				cancelButtonText: locale.baseText("mainSidebar.confirmMessage.workflowDelete.cancelButtonText")
			}) !== "confirm") return;
			try {
				await workflowsListStore.deleteWorkflow(id);
			} catch (error) {
				toast.showError(error, locale.baseText("generic.deleteWorkflowError"));
				return;
			}
			toast.showMessage({
				title: locale.baseText("mainSidebar.showMessage.handleSelect1.title", { interpolate: { workflowName: name } }),
				type: "success"
			});
			emit("workflow:deleted");
		}
		async function archiveWorkflow() {
			if (props.data.active) {
				if (await message.confirm(locale.baseText("mainSidebar.confirmMessage.workflowArchive.message", { interpolate: { workflowName: props.data.name } }), locale.baseText("mainSidebar.confirmMessage.workflowArchive.headline"), {
					type: "warning",
					confirmButtonText: locale.baseText("mainSidebar.confirmMessage.workflowArchive.confirmButtonText"),
					cancelButtonText: locale.baseText("mainSidebar.confirmMessage.workflowArchive.cancelButtonText")
				}) !== "confirm") return;
			}
			const archivedWorkflowId = props.data.id;
			const archivedWorkflowName = props.data.name;
			try {
				await workflowsStore.archiveWorkflow(archivedWorkflowId);
			} catch (error) {
				toast.showError(error, locale.baseText("generic.archiveWorkflowError"));
				return;
			}
			toast.showToast({
				title: locale.baseText("mainSidebar.showMessage.handleArchive.title", { interpolate: { workflowName: archivedWorkflowName } }),
				message: `<a href="#" data-test-id="archive-toast-delete-permanently-link">${locale.baseText("mainSidebar.showMessage.handleArchive.message")}</a>`,
				onClick: (event) => {
					if (event?.target instanceof HTMLAnchorElement) {
						event.preventDefault();
						deleteWorkflowById(archivedWorkflowId, archivedWorkflowName);
					}
				},
				type: "success"
			});
			emit("workflow:archived");
		}
		async function unarchiveWorkflow() {
			try {
				await workflowsStore.unarchiveWorkflow(props.data.id);
			} catch (error) {
				toast.showError(error, locale.baseText("generic.unarchiveWorkflowError"));
				return;
			}
			toast.showMessage({
				title: locale.baseText("mainSidebar.showMessage.handleUnarchive.title", { interpolate: { workflowName: props.data.name } }),
				type: "success"
			});
			emit("workflow:unarchived");
		}
		const fetchHiddenBreadCrumbsItems = async () => {
			if (!props.data.homeProject?.id || !projectName.value || !props.data.parentFolder) hiddenBreadcrumbsItemsAsync.value = Promise.resolve([]);
			else {
				if (cachedHiddenBreadcrumbsItems.value.length) {
					hiddenBreadcrumbsItemsAsync.value = Promise.resolve(cachedHiddenBreadcrumbsItems.value);
					return;
				}
				const loadedItem = foldersStore.getHiddenBreadcrumbsItems({
					id: props.data.homeProject.id,
					name: projectName.value
				}, props.data.parentFolder.id);
				hiddenBreadcrumbsItemsAsync.value = loadedItem;
				cachedHiddenBreadcrumbsItems.value = await loadedItem;
			}
		};
		const onBreadcrumbItemClick = async (item) => {
			if (item.href) await router.push(item.href);
		};
		const tags = computed(() => props.data.tags?.map((tag) => typeof tag === "string" ? {
			id: tag,
			name: tag
		} : tag) ?? []);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass({
					[_ctx.$style.cardLink]: true,
					[_ctx.$style.cardArchived]: __props.data.isArchived
				}),
				"data-test-id": "workflow-card",
				onClick
			}, {
				header: withCtx(() => [createVNode(unref(N8nText_default), {
					tag: "h2",
					bold: "",
					class: normalizeClass({
						[_ctx.$style.cardHeading]: true,
						[_ctx.$style.cardHeadingArchived]: __props.data.isArchived
					}),
					"data-test-id": "workflow-card-name"
				}, {
					default: withCtx(() => [
						createTextVNode(toDisplayString(__props.data.name) + " ", 1),
						!workflowPermissions.value.update ? (openBlock(), createBlock(unref(N8nBadge_default), {
							key: 0,
							class: "ml-3xs",
							theme: "tertiary",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("workflows.item.readonly")), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						hasDynamicCredentials.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 1,
							placement: "top"
						}, {
							content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tooltipContent) }, [createBaseVNode("strong", null, toDisplayString(unref(locale).baseText("workflows.dynamic.tooltipTitle")), 1), createBaseVNode("span", null, toDisplayString(unref(locale).baseText("workflows.dynamic.tooltip")), 1)], 2)]),
							default: withCtx(() => [createVNode(unref(N8nBadge_default), {
								theme: "tertiary",
								class: "ml-3xs pl-3xs pr-3xs",
								"data-test-id": "workflow-card-dynamic-credentials"
							}, {
								default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.dynamicBadgeText) }, [createVNode(unref(N8nIcon_default), {
									icon: "key-round",
									size: "medium"
								}), createTextVNode(" " + toDisplayString(unref(locale).baseText("credentials.private.badge")), 1)], 2)]),
								_: 1
							})]),
							_: 1
						})) : createCommentVNode("", true)
					]),
					_: 1
				}, 8, ["class"])]),
				append: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.cardActions),
					onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, [
					workflowHasDependencies.value ? (openBlock(), createBlock(DependencyPill_default, {
						key: 0,
						"resource-type": "workflow",
						"resource-id": __props.data.id,
						source: "workflow_card",
						"data-test-id": "workflow-card-dependencies"
					}, null, 8, ["resource-id"])) : createCommentVNode("", true),
					__props.showOwnershipBadge ? (openBlock(), createBlock(ProjectCardBadge_default, {
						key: 1,
						class: normalizeClass({
							[_ctx.$style.cardBadge]: true,
							[_ctx.$style["with-breadcrumbs"]]: showCardBreadcrumbs.value
						}),
						resource: __props.data,
						"resource-type": unref(ResourceType).Workflow,
						"resource-type-label": resourceTypeLabel.value,
						"personal-project": unref(projectsStore).personalProject,
						"show-badge-border": false
					}, {
						default: withCtx(() => [showCardBreadcrumbs.value ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.breadcrumbs)
						}, [createVNode(unref(N8nBreadcrumbs_default), {
							items: cardBreadcrumbs.value,
							"hidden-items": __props.data.parentFolder?.parentFolderId !== null ? hiddenBreadcrumbsItemsAsync.value : void 0,
							"path-truncated": __props.data.parentFolder?.parentFolderId !== null,
							"highlight-last-item": false,
							"hidden-items-trigger": "hover",
							theme: "small",
							"data-test-id": "workflow-card-breadcrumbs",
							onTooltipOpened: fetchHiddenBreadCrumbsItems,
							onItemSelected: onBreadcrumbItemClick
						}, {
							prepend: withCtx(() => [..._cache[2] || (_cache[2] = [])]),
							_: 1
						}, 8, [
							"items",
							"hidden-items",
							"path-truncated"
						])], 2)) : createCommentVNode("", true)]),
						_: 1
					}, 8, [
						"class",
						"resource",
						"resource-type",
						"resource-type-label",
						"personal-project"
					])) : createCommentVNode("", true),
					__props.data.isArchived ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 2,
						color: "text-light",
						size: "small",
						bold: "",
						class: "ml-s mr-s",
						"data-test-id": "workflow-card-archived"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("workflows.item.archived")), 1)]),
						_: 1
					})) : isWorkflowPublished.value ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.publishIndicator),
						"data-test-id": "workflow-card-publish-indicator"
					}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.publishIndicatorDot) }, null, 2), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("workflows.published")), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true),
					props.isWorkflowCardMcpToggleEnabled ? (openBlock(), createBlock(WorkflowCardMcpToggle_default, {
						key: 4,
						"workflow-id": __props.data.id,
						"available-in-mcp": __props.data.settings?.availableInMCP ?? false,
						"can-edit": canEditMcp.value,
						"is-mcp-enabled": props.isMcpEnabled,
						"is-mcp-module-active": props.isMcpModuleActive,
						"can-manage-instance-mcp": props.canManageInstanceMcp
					}, null, 8, [
						"workflow-id",
						"available-in-mcp",
						"can-edit",
						"is-mcp-enabled",
						"is-mcp-module-active",
						"can-manage-instance-mcp"
					])) : createCommentVNode("", true),
					createVNode(unref(N8nActionToggle_default), {
						actions: actions.value,
						placement: "bottom-end",
						theme: "dark",
						"data-test-id": "workflow-card-actions",
						onAction
					}, null, 8, ["actions"])
				], 2)]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardDescription) }, [
					withDirectives(createBaseVNode("span", null, [
						createTextVNode(toDisplayString(unref(locale).baseText("workflows.item.updated")) + " ", 1),
						createVNode(TimeAgo_default, { date: String(__props.data.updatedAt) }, null, 8, ["date"]),
						_cache[1] || (_cache[1] = createTextVNode(" | ", -1))
					], 512), [[vShow, __props.data]]),
					withDirectives(createBaseVNode("span", null, [createTextVNode(toDisplayString(unref(locale).baseText("workflows.item.created")) + " " + toDisplayString(formattedCreatedAtDate.value) + " ", 1), showLegacyMcpIndicator.value ? (openBlock(), createElementBlock("span", _hoisted_1$6, "|")) : createCommentVNode("", true)], 512), [[vShow, __props.data]]),
					withDirectives(createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.legacyMcpIndicator),
						"data-test-id": "workflow-card-mcp"
					}, [createVNode(unref(N8nTooltip_default), {
						placement: "right",
						content: unref(locale).baseText("workflows.item.availableInMCP")
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "mcp",
							size: "medium"
						})]),
						_: 1
					}, 8, ["content"])], 2), [[vShow, showLegacyMcpIndicator.value]]),
					props.areTagsEnabled && __props.data.tags && __props.data.tags.length > 0 ? withDirectives((openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.cardTags)
					}, [createVNode(unref(N8nTags_default), {
						tags: tags.value,
						"truncate-at": 3,
						truncate: "",
						"data-test-id": "workflow-card-tags",
						"onClick:tag": onClickTag,
						onExpand: onExpandTags
					}, null, 8, ["tags"])], 2)), [[vShow, __props.data]]) : createCommentVNode("", true)
				], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
//#endregion
//#region src/app/components/WorkflowCard.vue?vue&type=style&index=0&lang.module.scss
var cardLink = "_cardLink_1frep_125";
var cardHeading = "_cardHeading_1frep_135";
var cardHeadingArchived = "_cardHeadingArchived_1frep_143";
var cardDescription = "_cardDescription_1frep_151";
var cardTags = "_cardTags_1frep_161";
var legacyMcpIndicator = "_legacyMcpIndicator_1frep_166";
var cardActions = "_cardActions_1frep_171";
var cardBadge = "_cardBadge_1frep_182";
var cardArchived = "_cardArchived_1frep_193";
var dynamicBadgeText = "_dynamicBadgeText_1frep_199";
var tooltipContent = "_tooltipContent_1frep_207";
var publishIndicator = "_publishIndicator_1frep_213";
var publishIndicatorDot = "_publishIndicatorDot_1frep_225";
var breadcrumbs = "_breadcrumbs_1frep_244";
var WorkflowCard_vue_vue_type_style_index_0_lang_module_default = {
	cardLink,
	cardHeading,
	cardHeadingArchived,
	"description-popper": "_description-popper_1frep_147",
	cardDescription,
	cardTags,
	legacyMcpIndicator,
	cardActions,
	cardBadge,
	"with-breadcrumbs": "_with-breadcrumbs_1frep_186",
	cardArchived,
	dynamicBadgeText,
	tooltipContent,
	publishIndicator,
	publishIndicatorDot,
	breadcrumbs
};
var WorkflowCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/composables/useAutoScrollOnDrag.ts
var DEFAULT_EDGE = 80;
var DEFAULT_MAX_SPEED = 20;
function useAutoScrollOnDrag(options) {
	let frameId;
	let scrollStep = 0;
	const edgeSize = options.edgeSize ?? DEFAULT_EDGE;
	const maxSpeed = options.maxSpeed ?? DEFAULT_MAX_SPEED;
	const stopScrolling = () => {
		scrollStep = 0;
		if (frameId !== void 0) {
			cancelAnimationFrame(frameId);
			frameId = void 0;
		}
	};
	const step = () => {
		const container = options.container.value;
		if (!container || scrollStep === 0) {
			frameId = void 0;
			return;
		}
		container.scrollBy({ top: scrollStep });
		frameId = requestAnimationFrame(step);
	};
	const startScrolling = (delta) => {
		scrollStep = delta;
		frameId ??= requestAnimationFrame(step);
	};
	const handlePointerMove = (event) => {
		const container = options.container.value;
		if (!container) {
			stopScrolling();
			return;
		}
		const { scrollHeight, clientHeight } = container;
		if (scrollHeight <= clientHeight) {
			stopScrolling();
			return;
		}
		const rect = container.getBoundingClientRect();
		const pointerY = event.clientY;
		let direction = 0;
		let distanceIntoEdge = 0;
		if (pointerY < rect.top) {
			direction = -1;
			distanceIntoEdge = edgeSize;
		} else if (pointerY > rect.bottom) {
			direction = 1;
			distanceIntoEdge = edgeSize;
		} else {
			const distanceToTop = pointerY - rect.top;
			const distanceToBottom = rect.bottom - pointerY;
			const isNearTop = distanceToTop < edgeSize;
			const isNearBottom = distanceToBottom < edgeSize;
			if (isNearTop || isNearBottom) if (!isNearBottom || distanceToTop <= distanceToBottom) {
				direction = -1;
				distanceIntoEdge = edgeSize - Math.min(distanceToTop, edgeSize);
			} else {
				direction = 1;
				distanceIntoEdge = edgeSize - Math.min(distanceToBottom, edgeSize);
			}
		}
		if (direction === 0) {
			stopScrolling();
			return;
		}
		const intensity = Math.min(distanceIntoEdge / edgeSize, 1);
		startScrolling(direction * Math.max(2, intensity * maxSpeed));
	};
	const addListeners = () => {
		window.addEventListener("mousemove", handlePointerMove);
	};
	const removeListeners = () => {
		window.removeEventListener("mousemove", handlePointerMove);
	};
	watch([options.isActive, options.container], ([isActive, container], _prev, onCleanup) => {
		removeListeners();
		stopScrolling();
		if (isActive && container) addListeners();
		onCleanup(() => {
			removeListeners();
			stopScrolling();
		});
	}, { immediate: true });
	onScopeDispose(() => {
		removeListeners();
		stopScrolling();
	});
}
//#endregion
//#region src/app/composables/useLatestFetch.ts
function useLatestFetch() {
	let generation = 0;
	function next() {
		const thisGeneration = ++generation;
		return () => thisGeneration === generation;
	}
	return { next };
}
//#endregion
//#region src/features/core/folders/composables/useFolders.ts
function isDropTarget(target) {
	return target.type === "folder" || target.type === "project";
}
function isValidResourceType(value) {
	return [
		"folder",
		"workflow",
		"project"
	].includes(value);
}
function useFolders() {
	const i18n = useI18n();
	const foldersStore = useFoldersStore();
	const isDragging = computed(() => {
		return foldersStore.draggedElement !== null;
	});
	function validateFolderName(folderName) {
		if (FOLDER_NAME_ILLEGAL_CHARACTERS_REGEX.test(folderName)) return i18n.baseText("folders.invalidName.invalidCharacters.message", { interpolate: { illegalChars: ILLEGAL_FOLDER_CHARACTERS.join(" ") } });
		if (FOLDER_NAME_ONLY_DOTS_REGEX.test(folderName)) return i18n.baseText("folders.invalidName.only.dots.message");
		if (folderName.startsWith(".")) return i18n.baseText("folders.invalidName.starts.with.dot..message");
		if (folderName.trim() === "") return i18n.baseText("folders.invalidName.empty.message");
		if (folderName.length > 128) return i18n.baseText("folders.invalidName.tooLong.message", { interpolate: { maxLength: 128 } });
		return true;
	}
	/**
	* Drag and drop methods
	*/
	function onDragStart(el) {
		const eventTarget = el.closest("[data-target]");
		if (!eventTarget) return;
		const dragTarget = getDragAndDropTarget(eventTarget);
		if (!dragTarget) return;
		if (dragTarget.type === "folder" || dragTarget.type === "workflow") {
			foldersStore.draggedElement = {
				type: dragTarget.type,
				id: dragTarget.id,
				name: dragTarget.name
			};
			document.body.classList.add("dragging-resource");
		}
	}
	function onDragEnd() {
		foldersStore.draggedElement = null;
		foldersStore.activeDropTarget = null;
		document.body.classList.remove("dragging-resource");
	}
	function onDragEnter(event) {
		const eventTarget = event.target;
		if (!eventTarget || !isDragging.value) return;
		event.preventDefault();
		event.stopPropagation();
		const dragTarget = getDragAndDropTarget(eventTarget);
		if (!dragTarget || dragTarget.type !== "folder") return;
		foldersStore.activeDropTarget = {
			type: dragTarget.type,
			id: dragTarget.id,
			name: dragTarget.name
		};
	}
	function resetDropTarget() {
		foldersStore.activeDropTarget = null;
	}
	/**
	* Get the drag or drop target element from the event target
	* @param el
	*/
	function getDragAndDropTarget(el) {
		const dragTarget = el.closest("[data-target]");
		if (!dragTarget) return null;
		const targetResource = dragTarget.dataset.target;
		const targetId = dragTarget.dataset.resourceid;
		const targetName = dragTarget.dataset.resourcename;
		if (!targetResource || !targetId || !targetName || !isValidResourceType(targetResource)) return null;
		return {
			type: targetResource,
			id: targetId,
			name: targetName
		};
	}
	/**
	* Handle the drop event by getting the dragged resource and drop target
	* @param event
	*/
	function handleDrop(event) {
		const eventTarget = event.target;
		if (!eventTarget || !isDragging.value) return {};
		event.preventDefault();
		const draggedResourceId = foldersStore.draggedElement?.id;
		const draggedResourceType = foldersStore.draggedElement?.type;
		const draggedResourceName = foldersStore.draggedElement?.name;
		if (!draggedResourceId || !draggedResourceType || !draggedResourceName) return {};
		onDragEnd();
		const dropTarget = getDragAndDropTarget(eventTarget);
		if (!dropTarget || !isDropTarget(dropTarget)) return {};
		if (dropTarget.id === draggedResourceId && dropTarget.type === draggedResourceType) return {};
		return {
			draggedResource: {
				type: draggedResourceType,
				id: draggedResourceId,
				name: draggedResourceName
			},
			dropTarget: {
				type: dropTarget.type,
				id: dropTarget.id,
				name: dropTarget.name
			}
		};
	}
	return {
		validateFolderName,
		onDragStart,
		onDragEnd,
		onDragEnter,
		resetDropTarget,
		handleDrop
	};
}
//#endregion
//#region src/experiments/personalizedTemplates/stores/personalizedTemplates.store.ts
var SIMPLE_TEMPLATES = [
	6270,
	5271,
	2178
];
var PREDEFINED_TEMPLATES_BY_NODE = {
	"n8n-nodes-base.gmail": [
		5678,
		4722,
		5694
	],
	"n8n-nodes-base.googleSheets": [
		5694,
		5690,
		5906
	],
	"n8n-nodes-base.telegram": [
		5626,
		2114,
		4875
	],
	"@n8n/n8n-nodes-langchain.openAi": [
		2462,
		2722,
		2178
	],
	"@n8n/n8n-nodes-langchain.googleGemini": [
		5993,
		6270,
		5677
	],
	"n8n-nodes-base.googleCalendar": [
		2328,
		3393,
		2110
	],
	"n8n-nodes-base.youTube": [
		3188,
		4846,
		4506
	],
	"n8n-nodes-base.airtable": [
		3053,
		2700,
		2579
	]
};
function getPredefinedFromSelected(selectedApps) {
	return Object.keys(PREDEFINED_TEMPLATES_BY_NODE).filter((node) => selectedApps.includes(node)).reduce((acc, app) => [...acc, ...PREDEFINED_TEMPLATES_BY_NODE[app]], []);
}
function getSuggestedTemplatesForLowCodingSkill(selectedApps) {
	if (selectedApps.length === 0) return SIMPLE_TEMPLATES;
	const predefinedSelected = getPredefinedFromSelected(selectedApps);
	if (predefinedSelected.length > 0) return predefinedSelected;
	return [];
}
function keepTop3Templates(templates) {
	if (templates.length <= 3) return templates;
	return Array.from(new Map(templates.map((t) => [t.id, t])).values()).sort((a, b) => b.totalViews - a.totalViews).slice(0, 3);
}
var usePersonalizedTemplatesStore = defineStore(STORES.PERSONALIZED_TEMPLATES, () => {
	const telemetry = useTelemetry();
	const posthogStore = usePostHog();
	const cloudPlanStore = useCloudPlanStore();
	const templatesStore = useTemplatesStore();
	const allSuggestedWorkflows = ref([]);
	const dismissedSuggestedWorkflowsStorage = useStorage(LOCAL_STORAGE_EXPERIMENTAL_DISMISSED_SUGGESTED_WORKFLOWS);
	const dismissedSuggestedWorkflows = computed(() => {
		return dismissedSuggestedWorkflowsStorage.value ? jsonParse(dismissedSuggestedWorkflowsStorage.value, { fallbackValue: [] }) : [];
	});
	const suggestedWorkflows = computed(() => allSuggestedWorkflows.value.filter(({ id }) => !dismissedSuggestedWorkflows.value.includes(id)));
	const dismissSuggestedWorkflow = (id) => {
		dismissedSuggestedWorkflowsStorage.value = JSON.stringify([...dismissedSuggestedWorkflows.value ?? [], id]);
	};
	const isFeatureEnabled = () => {
		return posthogStore.getVariant(TEMPLATE_ONBOARDING_EXPERIMENT.name) === TEMPLATE_ONBOARDING_EXPERIMENT.variantSuggestedTemplates && cloudPlanStore.userIsTrialing;
	};
	const trackUserWasRecommendedTemplates = (templateIds) => {
		telemetry.track("User was recommended personalized templates", { templateIds });
	};
	const trackUserClickedOnPersonalizedTemplate = (templateId) => {
		telemetry.track("User clicked on personalized template callout", { templateId });
	};
	const trackUserDismissedCallout = (templateId) => {
		telemetry.track("User dismissed personalized template callout", { templateId });
	};
	const fetchSuggestedWorkflows = async (codingSkill, selectedApps) => {
		if (!isFeatureEnabled()) return;
		try {
			if (codingSkill === 1) {
				const predefinedSelected = getSuggestedTemplatesForLowCodingSkill(selectedApps);
				if (predefinedSelected.length > 0) {
					const suggestedWorkflowsPromises = predefinedSelected.map(async (id) => await templatesStore.fetchTemplateById(id.toString()));
					const top3Templates = keepTop3Templates(await Promise.all(suggestedWorkflowsPromises));
					allSuggestedWorkflows.value = top3Templates;
					trackUserWasRecommendedTemplates(top3Templates.map((t) => t.id));
					return;
				}
			}
			const suggestedWorkflowsPromises = (await templatesStore.getWorkflows({
				categories: [],
				search: "",
				sort: "rank:desc",
				nodes: selectedApps.length > 0 ? selectedApps : void 0,
				combineWith: "or"
			})).slice(0, 3).map((workflow) => workflow.id).map(async (id) => await templatesStore.fetchTemplateById(id.toString()));
			const top3Templates = keepTop3Templates(await Promise.all(suggestedWorkflowsPromises));
			allSuggestedWorkflows.value = top3Templates;
			trackUserWasRecommendedTemplates(top3Templates.map((t) => t.id));
		} catch (error) {}
	};
	const getTemplateRoute = (id) => {
		return {
			name: VIEWS.TEMPLATE,
			params: { id }
		};
	};
	watch(() => cloudPlanStore.currentUserCloudInfo, async (userInfo) => {
		if (!userInfo) return;
		const codingSkill = cloudPlanStore.codingSkill;
		await fetchSuggestedWorkflows(codingSkill, cloudPlanStore.selectedApps ?? []);
	});
	return {
		isFeatureEnabled,
		suggestedWorkflows,
		dismissSuggestedWorkflow,
		trackUserClickedOnPersonalizedTemplate,
		trackUserDismissedCallout,
		getTemplateRoute
	};
});
//#endregion
//#region src/experiments/personalizedTemplates/components/SuggestedWorkflowCard.vue?vue&type=script&setup=true&lang.ts
var SuggestedWorkflowCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SuggestedWorkflowCard",
	props: { data: {} },
	setup(__props) {
		const { data } = __props;
		const { dismissSuggestedWorkflow, getTemplateRoute, trackUserClickedOnPersonalizedTemplate, trackUserDismissedCallout } = usePersonalizedTemplatesStore();
		const locale = useI18n();
		const onDismissCallout = () => {
			trackUserDismissedCallout(data.id);
			dismissSuggestedWorkflow(data.id);
		};
		const onTryTemplate = () => {
			trackUserClickedOnPersonalizedTemplate(data.id);
			dismissSuggestedWorkflow(data.id);
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCallout_default), {
				theme: "secondary",
				iconless: true,
				class: normalizeClass(_ctx.$style["suggested-workflow-callout"]),
				slim: true
			}, {
				trailingContent: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["callout-trailing-content"]) }, [createVNode(unref(N8nLink_default), {
					"data-test-id": "suggested-workflow-button",
					size: "small",
					to: unref(getTemplateRoute)(unref(data).id),
					onClick: onTryTemplate
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("workflows.itemSuggestion.try")), 1)]),
					_: 1
				}, 8, ["to"]), createVNode(unref(N8nIcon_default), {
					size: "small",
					icon: "x",
					title: unref(locale).baseText("generic.dismiss"),
					class: "clickable",
					onClick: onDismissCallout
				}, null, 8, ["title"])], 2)]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["callout-content"]) }, toDisplayString(unref(data).name), 3)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
//#endregion
//#region src/experiments/personalizedTemplates/components/SuggestedWorkflowCard.vue?vue&type=style&index=0&lang.module.scss
var SuggestedWorkflowCard_vue_vue_type_style_index_0_lang_module_default = {
	"suggested-workflow-callout": "_suggested-workflow-callout_1wrxf_125",
	"callout-content": "_callout-content_1wrxf_131",
	"callout-trailing-content": "_callout-trailing-content_1wrxf_135"
};
var SuggestedWorkflowCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SuggestedWorkflowCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SuggestedWorkflowCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/personalizedTemplates/components/SuggestedWorkflows.vue?vue&type=style&index=0&lang.module.scss
var SuggestedWorkflows_vue_vue_type_style_index_0_lang_module_default = { "suggested-workflows": "_suggested-workflows_15lpu_125" };
//#endregion
//#region src/experiments/personalizedTemplates/components/SuggestedWorkflows.vue
var _sfc_main$1 = {};
var _hoisted_1$5 = {
	class: "suggested-workflows",
	"data-test-id": "suggested-workflows"
};
function _sfc_render$1(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$5, [renderSlot(_ctx.$slots, "default")]);
}
var SuggestedWorkflows_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$1, [["render", _sfc_render$1], ["__cssModules", { "$style": SuggestedWorkflows_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/templateRecoV2/components/NodeRecommendationCard.vue?vue&type=script&setup=true&lang.ts
var NodeRecommendationCard_vue_vue_type_script_setup_true_lang_default$1 = /* @__PURE__ */ defineComponent({
	__name: "NodeRecommendationCard",
	props: { nodeName: {} },
	setup(__props) {
		const props = __props;
		const uiStore = useUIStore();
		const nodeTypesStore = useNodeTypesStore();
		const { trackMinicardClick } = usePersonalizedTemplatesV2Store();
		const nodeType = computed(() => nodeTypesStore.getNodeType(props.nodeName));
		const openModal = () => {
			trackMinicardClick(nodeType.value?.displayName ?? props.nodeName);
			uiStore.openModalWithData({
				name: EXPERIMENT_TEMPLATE_RECO_V2_KEY,
				data: { nodeName: props.nodeName }
			});
		};
		onMounted(async () => {
			await nodeTypesStore.loadNodeTypesIfNotLoaded();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nCard_default), {
				class: normalizeClass(_ctx.$style.nodeCard),
				hoverable: "",
				onClick: openModal
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.emptyStateCardContent) }, [createVNode(NodeIcon_default, {
					"node-type": nodeType.value,
					class: normalizeClass(_ctx.$style.nodeIcon),
					"stroke-width": 1.5
				}, null, 8, ["node-type", "class"]), createVNode(unref(N8nText_default), {
					size: "xsmall",
					class: "mt-xs pl-2xs pr-2xs",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(nodeType.value?.displayName), 1)]),
					_: 1
				})], 2)]),
				_: 1
			}, 8, ["class"])]);
		};
	}
});
var NodeRecommendationCard_vue_vue_type_style_index_0_lang_module_default$1 = {
	nodeCard: "_nodeCard_tubis_125",
	nodeIcon: "_nodeIcon_tubis_135",
	emptyStateCardContent: "_emptyStateCardContent_tubis_139"
};
var NodeRecommendationCard_default$1 = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeRecommendationCard_vue_vue_type_script_setup_true_lang_default$1, [["__cssModules", { "$style": NodeRecommendationCard_vue_vue_type_style_index_0_lang_module_default$1 }]]);
//#endregion
//#region src/experiments/templateRecoV2/components/TemplateRecommendationV2.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = {
	key: 0,
	class: "text-center mt-3xl",
	"data-test-id": "list-empty-state"
};
var TemplateRecommendationV2_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplateRecommendationV2",
	setup(__props) {
		const templateRecoV2Store = usePersonalizedTemplatesV2Store();
		const locale = useI18n();
		return (_ctx, _cache) => {
			return unref(templateRecoV2Store).nodes.length ? (openBlock(), createElementBlock("div", _hoisted_1$4, [createVNode(unref(N8nHeading_default), {
				tag: "h2",
				size: "medium",
				class: "mb-2xs",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("workflows.templateRecoV2.exploreTemplates")), 1)]),
				_: 1
			}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.nodeCardsContainer) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(templateRecoV2Store).nodes, (node) => {
				return openBlock(), createBlock(NodeRecommendationCard_default$1, {
					key: node,
					"node-name": node
				}, null, 8, ["node-name"]);
			}), 128))], 2)])) : createCommentVNode("", true);
		};
	}
});
var TemplateRecommendationV2_vue_vue_type_style_index_0_lang_module_default = { nodeCardsContainer: "_nodeCardsContainer_1seru_125" };
var TemplateRecommendationV2_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TemplateRecommendationV2_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplateRecommendationV2_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/personalizedTemplatesV3/components/NodeRecommendationCard.vue?vue&type=script&setup=true&lang.ts
var NodeRecommendationCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeRecommendationCard",
	props: { nodeName: {} },
	setup(__props) {
		const props = __props;
		const uiStore = useUIStore();
		const nodeTypesStore = useNodeTypesStore();
		const { trackPersonalizationCardClick, markTemplateRecommendationInteraction } = usePersonalizedTemplatesV3Store();
		const nodeType = computed(() => nodeTypesStore.getNodeType(props.nodeName));
		const openModal = () => {
			trackPersonalizationCardClick();
			markTemplateRecommendationInteraction();
			uiStore.openModalWithData({
				name: EXPERIMENT_TEMPLATE_RECO_V3_KEY,
				data: { nodeName: props.nodeName }
			});
		};
		onMounted(async () => {
			await nodeTypesStore.loadNodeTypesIfNotLoaded();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nCard_default), {
				class: normalizeClass(_ctx.$style.nodeCard),
				hoverable: "",
				onClick: openModal
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.emptyStateCardContent) }, [createVNode(NodeIcon_default, {
					"node-type": nodeType.value,
					class: normalizeClass(_ctx.$style.nodeIcon),
					"stroke-width": 1.5
				}, null, 8, ["node-type", "class"]), createVNode(unref(N8nText_default), {
					size: "xsmall",
					class: "mt-xs pl-2xs pr-2xs",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(nodeType.value?.displayName), 1)]),
					_: 1
				})], 2)]),
				_: 1
			}, 8, ["class"])]);
		};
	}
});
var NodeRecommendationCard_vue_vue_type_style_index_0_lang_module_default = {
	nodeCard: "_nodeCard_tubis_125",
	nodeIcon: "_nodeIcon_tubis_135",
	emptyStateCardContent: "_emptyStateCardContent_tubis_139"
};
var NodeRecommendationCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeRecommendationCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeRecommendationCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/personalizedTemplatesV3/components/TemplateRecommendationV3.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = {
	key: 0,
	class: "text-center mt-3xl",
	"data-test-id": "list-empty-state"
};
var TemplateRecommendationV3_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplateRecommendationV3",
	setup(__props) {
		const personalizedTemplateStore = usePersonalizedTemplatesV3Store();
		const locale = useI18n();
		return (_ctx, _cache) => {
			return unref(personalizedTemplateStore).hasChosenHubSpot ? (openBlock(), createElementBlock("div", _hoisted_1$3, [createVNode(unref(N8nHeading_default), {
				tag: "h2",
				size: "medium",
				class: "mb-2xs",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("experiments.personalizedTemplatesV3.exploreTemplates")), 1)]),
				_: 1
			}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.nodeCardsContainer) }, [createVNode(NodeRecommendationCard_default, { "node-name": "n8n-nodes-base.hubspot" })], 2)])) : createCommentVNode("", true);
		};
	}
});
var TemplateRecommendationV3_vue_vue_type_style_index_0_lang_module_default = { nodeCardsContainer: "_nodeCardsContainer_1seru_125" };
var TemplateRecommendationV3_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TemplateRecommendationV3_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplateRecommendationV3_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflows/templates/recommendations/components/SkeletonTemplateCard.vue?vue&type=script&setup=true&lang.ts
var SkeletonTemplateCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SkeletonTemplateCard",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass(_ctx.$style.card),
				"aria-hidden": "true"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardContent) }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.widthRow) }, [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.widthBlock) }, null, 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.widthBlock) }, null, 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.widthBlock) }, null, 2)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.nodes) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.nodeIcon) }, [createVNode(unref(N8nLoading_default), { variant: "custom" })], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.nodeIcon) }, [createVNode(unref(N8nLoading_default), { variant: "custom" })], 2)], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.title) }, [createVNode(unref(N8nLoading_default), { variant: "custom" })], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.title) }, [createVNode(unref(N8nLoading_default), { variant: "custom" })], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.title) }, [createVNode(unref(N8nLoading_default), { variant: "custom" })], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.stats) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.statItem) }, [createVNode(unref(N8nLoading_default), { variant: "custom" })], 2)], 2)
				], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var SkeletonTemplateCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1pphi_125",
	widthRow: "_widthRow_1pphi_133",
	widthBlock: "_widthBlock_1pphi_140",
	cardContent: "_cardContent_1pphi_146",
	nodes: "_nodes_1pphi_153",
	nodeIcon: "_nodeIcon_1pphi_158",
	title: "_title_1pphi_168",
	stats: "_stats_1pphi_175",
	statItem: "_statItem_1pphi_179"
};
var SkeletonTemplateCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SkeletonTemplateCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SkeletonTemplateCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflows/templates/recommendations/components/RecommendedTemplatesSection.vue?vue&type=script&setup=true&lang.ts
var RecommendedTemplatesSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RecommendedTemplatesSection",
	setup(__props) {
		const locale = useI18n();
		const templatesStore = useRecommendedTemplatesStore();
		const { websiteTemplateRepositoryURL } = storeToRefs(useTemplatesStore());
		const templates = ref([]);
		const isLoadingTemplates = ref(false);
		onMounted(async () => {
			isLoadingTemplates.value = true;
			try {
				templates.value = await templatesStore.loadRecommendedTemplates();
			} finally {
				isLoadingTemplates.value = false;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "recommended-templates-section"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nText_default), {
				tag: "h2",
				size: "large",
				bold: true
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("workflows.empty.startWithTemplate")), 1)]),
				_: 1
			}), createVNode(unref(N8nLink_default), {
				href: unref(websiteTemplateRepositoryURL),
				class: normalizeClass(_ctx.$style.allTemplatesLink)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("templates.featured.seeMore")), 1)]),
				_: 1
			}, 8, ["href", "class"])], 2), isLoadingTemplates.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.suggestions)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(6), (i) => {
				return openBlock(), createBlock(SkeletonTemplateCard_default, { key: i });
			}), 128))], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.suggestions)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(templates.value, (template, index) => {
				return openBlock(), createBlock(RecommendedTemplateCard_default, {
					key: template.id,
					template,
					"tile-number": index + 1,
					clickable: true
				}, null, 8, ["template", "tile-number"]);
			}), 128))], 2))], 2);
		};
	}
});
var RecommendedTemplatesSection_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_d40wj_125",
	header: "_header_d40wj_131",
	allTemplatesLink: "_allTemplatesLink_d40wj_147",
	suggestions: "_suggestions_d40wj_151"
};
var RecommendedTemplatesSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RecommendedTemplatesSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RecommendedTemplatesSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/credentialsAppSelection/stores/credentialsAppSelection.store.ts
var APP_SELECTION_DISMISSED_KEY = "N8N_APP_SELECTION_DISMISSED";
var useCredentialsAppSelectionStore = defineStore(STORES.EXPERIMENT_CREDENTIALS_APP_SELECTION, () => {
	const posthogStore = usePostHog();
	const credentialsStore = useCredentialsStore();
	const cloudPlanStore = useCloudPlanStore();
	const telemetry = useTelemetry();
	const dismissedStorage = useStorage(APP_SELECTION_DISMISSED_KEY);
	const isDismissed = computed(() => dismissedStorage.value === "true");
	const currentVariant = computed(() => posthogStore.getVariant(CREDENTIALS_APP_SELECTION_EXPERIMENT.name));
	const isVariant = computed(() => currentVariant.value === CREDENTIALS_APP_SELECTION_EXPERIMENT.variant);
	const userIsTrialing = computed(() => cloudPlanStore.userIsTrialing);
	const isFeatureEnabled = computed(() => {
		if (isDismissed.value) return false;
		if (!isVariant.value || !userIsTrialing.value) return false;
		return true;
	});
	const connectedCount = computed(() => credentialsStore.allCredentials.length);
	const canContinue = computed(() => connectedCount.value > 0);
	function trackPageViewed() {
		telemetry.track("App selection page viewed");
	}
	function trackSearchPerformed(searchTerm, resultCount) {
		telemetry.track("App selection search performed", {
			search_term: searchTerm,
			result_count: resultCount
		});
	}
	function dismiss() {
		dismissedStorage.value = "true";
	}
	function trackCompleted(connectedApps) {
		telemetry.track("App selection completed", {
			connected_count: connectedCount.value,
			connected_apps: connectedApps
		});
		dismiss();
	}
	function reset() {
		dismissedStorage.value = null;
	}
	return {
		currentVariant,
		isFeatureEnabled,
		isDismissed,
		connectedCount,
		canContinue,
		trackPageViewed,
		trackSearchPerformed,
		trackCompleted,
		dismiss,
		reset
	};
});
//#endregion
//#region src/features/workflows/composables/useWorkflowsEmptyState.ts
/**
* Composable for managing workflows empty state display logic.
* Handles heading, description, and permission-based visibility
* for the empty state when no workflows exist.
*/
function useWorkflowsEmptyState() {
	const i18n = useI18n();
	const usersStore = useUsersStore();
	const projectsStore = useProjectsStore();
	const sourceControlStore = useSourceControlStore();
	const recommendedTemplatesStore = useRecommendedTemplatesStore();
	const emptyStateBuilderPromptStore = useEmptyStateBuilderPromptStore();
	const credentialsAppSelectionStore = useCredentialsAppSelectionStore();
	const currentUser = computed(() => usersStore.currentUser ?? {});
	const personalProject = computed(() => projectsStore.personalProject);
	const readOnlyEnv = computed(() => sourceControlStore.preferences.branchReadOnly);
	const projectPermissions = computed(() => {
		return getResourcePermissions(projectsStore.currentProject?.scopes ?? personalProject.value?.scopes);
	});
	const canCreateWorkflow = computed(() => !readOnlyEnv.value && projectPermissions.value.workflow.create);
	const showRecommendedTemplatesInline = computed(() => {
		return recommendedTemplatesStore.isFeatureEnabled && !readOnlyEnv.value && projectPermissions.value.workflow.create;
	});
	const showBuilderPrompt = computed(() => {
		return emptyStateBuilderPromptStore.isFeatureEnabled && !readOnlyEnv.value && projectPermissions.value.workflow.create;
	});
	return {
		showAppSelection: computed(() => {
			return credentialsAppSelectionStore.isFeatureEnabled && !readOnlyEnv.value && projectPermissions.value.workflow.create;
		}),
		showBuilderPrompt,
		showRecommendedTemplatesInline,
		builderHeading: computed(() => {
			const firstName = currentUser.value.firstName;
			if (firstName) return i18n.baseText("workflows.empty.heading.builder", { interpolate: { name: firstName } });
			return i18n.baseText("workflows.empty.heading.builder.userNotSetup");
		}),
		emptyStateHeading: computed(() => {
			const firstName = currentUser.value.firstName;
			if (showRecommendedTemplatesInline.value) {
				if (firstName) return i18n.baseText("workflows.empty.heading", { interpolate: { name: firstName } });
				return i18n.baseText("workflows.empty.heading.userNotSetup");
			} else {
				if (firstName) return i18n.baseText("workflows.empty.headingWithIcon", { interpolate: { name: firstName } });
				return i18n.baseText("workflows.empty.headingWithIcon.userNotSetup");
			}
		}),
		emptyStateDescription: computed(() => {
			if (readOnlyEnv.value) return i18n.baseText("workflows.empty.description.readOnlyEnv");
			else if (!projectPermissions.value.workflow.create) return i18n.baseText("workflows.empty.description.noPermission");
			else if (showRecommendedTemplatesInline.value) return i18n.baseText("workflows.empty.description");
			return "";
		}),
		canCreateWorkflow,
		readOnlyEnv,
		projectPermissions
	};
}
//#endregion
//#region src/experiments/surfaceMcpToNewCloudUsers/composables/useSurfaceMcpToNewCloudUsersEligibility.ts
function useSurfaceMcpToNewCloudUsersEligibility() {
	const usersStore = useUsersStore();
	const { isTrulyEmpty } = useEmptyStateDetection();
	const settingsStore = useSettingsStore();
	const cloudPlanStore = useCloudPlanStore();
	return { isEligible: computed(() => settingsStore.isCloudDeployment && cloudPlanStore.userIsTrialing && usersStore.isAdminOrOwner && isTrulyEmpty()) };
}
//#endregion
//#region src/experiments/surfaceMcpToNewCloudUsers/composables/useSurfaceMcpEmptyState.ts
function useSurfaceMcpEmptyState({ canCreateWorkflow, showAppSelection, showBuilderPrompt, showRecommendedTemplatesInline }) {
	const mcpStore = useMCPStore();
	const surfaceMcpStore = useSurfaceMcpToNewCloudUsersStore();
	const { isEligible } = useSurfaceMcpToNewCloudUsersEligibility();
	const hasTrackedEntryPointViewed = ref(false);
	const hasTrackedOpportunityViewed = ref(false);
	const showOpportunity = computed(() => isEligible.value && surfaceMcpStore.isEnabled);
	const suppressedBy = computed(() => {
		if (!showOpportunity.value) return null;
		if (!canCreateWorkflow.value) return "no_create_permission";
		if (showAppSelection.value) return "app_selection";
		if (showBuilderPrompt.value) return "builder_prompt";
		if (showRecommendedTemplatesInline.value) return "recommended_templates";
		return null;
	});
	const showTile = computed(() => showOpportunity.value && surfaceMcpStore.isTileVariant && suppressedBy.value === null);
	const showReminder = computed(() => isEligible.value && surfaceMcpStore.isFirstOpenModalVariant && surfaceMcpStore.hasDismissedFirstOpenModal);
	watch(showOpportunity, (value) => {
		if (value && !hasTrackedOpportunityViewed.value) {
			hasTrackedOpportunityViewed.value = true;
			surfaceMcpStore.trackOpportunityViewed("tile", "empty_state_tile", showTile.value, suppressedBy.value, mcpStore.mcpAccessEnabled);
		}
	}, { immediate: true });
	watch(showTile, (value, previousValue) => {
		if (value && !previousValue && !hasTrackedEntryPointViewed.value) {
			hasTrackedEntryPointViewed.value = true;
			surfaceMcpStore.trackEntryPointViewed("tile", "empty_state_tile", mcpStore.mcpAccessEnabled);
		}
	}, { immediate: true });
	return {
		showOpportunity,
		suppressedBy,
		showTile,
		showReminder
	};
}
//#endregion
//#region src/experiments/emptyStateBuilderPrompt/constants.ts
var WORKFLOW_SUGGESTIONS = [
	{
		id: "multi-agent-research",
		summary: "a multi-agent research workflow",
		prompt: "Create a multi-agent AI workflow using `gpt-4.1-mini` where several agents work together to research a topic, fact-check the findings, and write a report that's sent as an HTML email. One agent should gather recent, credible information about the topic. Another agent should verify the facts and only mark something as \"verified\" if it appears in at least two independent sources. A third agent should combine the verified information into a clear, well-written report under 1,000 words. A final agent should edit and format the report to make it look clean and professional in the body of the email. Use Gmail to send the report."
	},
	{
		id: "email-summary",
		summary: "an email summary workflow",
		prompt: "Create an automation that runs on Monday mornings. It reads my Gmail inbox from the weekend, analyzes them with `gpt-4.1-mini` to find action items and priorities, and emails me a structured email using Gmail."
	},
	{
		id: "ai-news-digest",
		summary: "a daily AI news digest workflow",
		prompt: "Build an automation that runs every night 8pm. Use the NewsAPI \"/everything\" endpoint to search for AI-related news from the day. Pick the top 5 articles and use OpenAI `gpt-4.1-mini` to summarize each in two sentences. Generate an image using OpenAI based on the top article's summary. Send a structured Telegram message."
	},
	{
		id: "daily-weather-report",
		summary: "a daily weather report workflow",
		prompt: "Create an automation that checks the weather for my location every morning at 5 a.m using OpenWeather. Send me a short weather report by email using Gmail. Use OpenAI `gpt-4.1-mini` to write a short, fun formatted email body by adding personality when describing the weather and how the day might feel. Include all details relevant to decide on my plans and clothes for the day."
	},
	{
		id: "invoice-pipeline",
		summary: "an invoice processing workflow",
		prompt: "Create an invoice processing workflow using an n8n Form. When a user submits an invoice file (PDF or image) with their email address, use OpenAI `gpt-4.1-mini` to extract invoice data. Then, validate the date format is correct, the currency is valid, and the total amount is greater than zero. If validation fails, email the user a clear error message that explains which check failed from my Gmail. If the data passes validation, store the structured result in a datatable plus email the user. Every Monday morning, generate a weekly spending report using `gpt-4.1-mini` based on stored invoices and send a clean email using Gmail."
	},
	{
		id: "rag-assistant",
		summary: "a RAG knowledge agent",
		prompt: "Build an automation that creates a document-to-chat RAG pipeline. The workflow starts with an n8n Form where a user uploads one or more files (PDF, CSV, or JSON). Each upload should trigger a process that reads the file, splits it into chunks, and generates embeddings using OpenAI `gpt-4.1-mini` model, saved in one Pinecone table. Add a second part of the workflow for querying: use a Chat Message Trigger to act as a chatbot interface. When a user sends a question, retrieve the top 5 most relevant chunks from Pinecone, pass them into `gpt-4.1-mini` as context, and have it answer naturally using only the retrieved information. If a question can't be answered confidently, the bot should respond with: \"I couldn't find that in the uploaded documents.\" Log each chat interaction in a Data Table with the user query, matched file(s), and timestamp. Send a daily summary email through Gmail showing total questions asked, top files referenced, and any failed lookups."
	},
	{
		id: "lead-qualification",
		summary: "a lead qualification workflow",
		prompt: "Create an n8n form with a lead generation form I can embed on my website homepage. Build an automation that processes form submissions, uses AI to qualify the lead, sends data to an n8n data table. For high-score leads, it should also email them to offer to schedule a 15-min call in a free slot in my calendar."
	},
	{
		id: "youtube-auto-chapters",
		summary: "a YouTube chapter generator workflow",
		prompt: "Build an n8n workflow that automatically generates YouTube chapter timestamps from video captions. Use the n8n chat trigger for me to enter the URL of the YouTube video. Use the YouTube Get a video node to get the video title, description, and existing metadata. Use the YouTube Captions API to download the transcript for the given video ID. Send the transcript to AI agent using Anthropic's Claude model. Prompt the model to identify topic shifts and return structured output in timestamp - chapter format. Append the generated chapter list to the existing video description. Use the YouTube Update a video node to update the video description. Respond back with the updates using the respond to chat node."
	}
];
//#endregion
//#region src/experiments/emptyStateBuilderPrompt/composables/useTypewriterPlaceholder.ts
var import_shuffle = /* @__PURE__ */ __toESM(require_shuffle(), 1);
var TYPING_SPEED_MS = 40;
var BACKSPACE_SPEED_MS = 25;
var PAUSE_AT_FULL_TEXT_MS = 1500;
var PAUSE_AFTER_BACKSPACE_MS = 300;
var PREFIX = "Build ";
function useTypewriterPlaceholder(suggestions, isInputEmpty) {
	const currentIndex = ref(0);
	const displayedSuffix = ref("");
	let timeoutId = null;
	const currentSuggestion = computed(() => {
		const list = suggestions.value;
		if (list.length === 0) return "";
		return list[currentIndex.value % list.length]?.summary ?? "";
	});
	const placeholder = computed(() => PREFIX + displayedSuffix.value);
	function clearTimer() {
		if (timeoutId !== null) {
			clearTimeout(timeoutId);
			timeoutId = null;
		}
	}
	function typeNextChar() {
		if (!isInputEmpty.value) return;
		if (suggestions.value.length === 0) return;
		const target = currentSuggestion.value;
		if (displayedSuffix.value.length < target.length) {
			displayedSuffix.value = target.slice(0, displayedSuffix.value.length + 1);
			timeoutId = setTimeout(typeNextChar, TYPING_SPEED_MS);
		} else timeoutId = setTimeout(startBackspace, PAUSE_AT_FULL_TEXT_MS);
	}
	function startBackspace() {
		backspaceChar();
	}
	function backspaceChar() {
		if (!isInputEmpty.value) return;
		if (suggestions.value.length === 0) return;
		if (displayedSuffix.value.length > 0) {
			displayedSuffix.value = displayedSuffix.value.slice(0, -1);
			timeoutId = setTimeout(backspaceChar, BACKSPACE_SPEED_MS);
		} else {
			currentIndex.value = (currentIndex.value + 1) % suggestions.value.length;
			timeoutId = setTimeout(typeNextChar, PAUSE_AFTER_BACKSPACE_MS);
		}
	}
	function startAnimation() {
		clearTimer();
		typeNextChar();
	}
	function stopAnimation() {
		clearTimer();
	}
	watch(isInputEmpty, (empty) => {
		if (empty) startAnimation();
		else stopAnimation();
	}, { immediate: true });
	onUnmounted(() => {
		clearTimer();
	});
	return { placeholder };
}
//#endregion
//#region src/experiments/emptyStateBuilderPrompt/components/EmptyStateBuilderPrompt.vue?vue&type=script&setup=true&lang.ts
var EmptyStateBuilderPrompt_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "EmptyStateBuilderPrompt",
	props: {
		projectId: {},
		parentFolderId: {}
	},
	emits: ["submit", "startFromScratch"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const router = useRouter();
		const toast = useToast();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const emptyStateBuilderPromptStore = useEmptyStateBuilderPromptStore();
		const emit = __emit;
		const textInputValue = ref("");
		const promptInputRef = ref();
		const importFileRef = ref(null);
		const { placeholder } = useTypewriterPlaceholder(computed(() => {
			return (0, import_shuffle.default)(WORKFLOW_SUGGESTIONS).slice(0, 6);
		}), computed(() => textInputValue.value.length === 0));
		function onSubmit() {
			if (!textInputValue.value.trim()) return;
			emit("submit", textInputValue.value);
		}
		function onFromScratch() {
			telemetry.track("User clicked from scratch in empty state");
			emit("startFromScratch");
		}
		function onTemplate() {
			trackTemplatesClick(TemplateClickSource.emptyStateBuilderPrompt);
			router.push({ name: VIEWS.TEMPLATES });
		}
		function onImportFromFile() {
			importFileRef.value?.click();
		}
		function handleFileImport() {
			const input = importFileRef.value;
			if (!input?.files?.length) return;
			const reader = new FileReader();
			reader.onload = async () => {
				const result = reader.result;
				if (typeof result !== "string") {
					input.value = "";
					return;
				}
				let workflowData;
				try {
					workflowData = JSON.parse(result);
				} catch {
					toast.showMessage({
						title: i18n.baseText("mainSidebar.showMessage.handleFileImport.title"),
						message: i18n.baseText("mainSidebar.showMessage.handleFileImport.message"),
						type: "error"
					});
					input.value = "";
					return;
				}
				try {
					await emptyStateBuilderPromptStore.createWorkflowFromImport(workflowData, props.projectId, props.parentFolderId);
				} catch {
					toast.showError(new Error(i18n.baseText("nodeView.couldntLoadWorkflow.invalidWorkflowObject")), i18n.baseText("nodeView.couldntImportWorkflow"));
				} finally {
					input.value = "";
				}
			};
			reader.readAsText(input.files[0]);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createBaseVNode("input", {
					ref_key: "importFileRef",
					ref: importFileRef,
					type: "file",
					accept: ".json",
					style: { "display": "none" },
					onChange: handleFileImport
				}, null, 544),
				createBaseVNode("p", { class: normalizeClass(_ctx.$style.subtitle) }, toDisplayString(unref(i18n).baseText("emptyStateBuilderPrompt.subtitle")), 3),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.promptInput) }, [createVNode(unref(N8nChatInput_default), {
					ref_key: "promptInputRef",
					ref: promptInputRef,
					modelValue: textInputValue.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => textInputValue.value = $event),
					placeholder: unref(placeholder),
					autosize: true,
					"button-label": unref(i18n).baseText("emptyStateBuilderPrompt.buildWorkflow"),
					"data-test-id": "empty-state-builder-chat-input",
					autofocus: "",
					onSubmit
				}, null, 8, [
					"modelValue",
					"placeholder",
					"button-label"
				])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.alternativeActions) }, [
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.startWithText) }, toDisplayString(unref(i18n).baseText("emptyStateBuilderPrompt.orStartWith")), 3),
					createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("emptyStateBuilderPrompt.fromScratchTooltip") }, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "subtle",
							size: "small",
							icon: "play",
							onClick: onFromScratch
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("emptyStateBuilderPrompt.fromScratch")), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["content"]),
					createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("emptyStateBuilderPrompt.templateTooltip") }, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "subtle",
							size: "small",
							icon: "layout-template",
							onClick: onTemplate
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("emptyStateBuilderPrompt.template")), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["content"]),
					createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("emptyStateBuilderPrompt.importFromFileTooltip") }, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "subtle",
							size: "small",
							icon: "upload",
							onClick: onImportFromFile
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("emptyStateBuilderPrompt.importFromFile")), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["content"])
				], 2)], 2)
			], 2);
		};
	}
});
//#endregion
//#region src/experiments/emptyStateBuilderPrompt/components/EmptyStateBuilderPrompt.vue?vue&type=style&index=0&lang.module.scss
var container$2 = "_container_1wank_125";
var subtitle = "_subtitle_1wank_133";
var promptInput = "_promptInput_1wank_139";
var footer$2 = "_footer_1wank_148";
var alternativeActions = "_alternativeActions_1wank_155";
var startWithText = "_startWithText_1wank_163";
var EmptyStateBuilderPrompt_vue_vue_type_style_index_0_lang_module_default = {
	container: container$2,
	subtitle,
	promptInput,
	"el-tooltip__trigger": "_el-tooltip__trigger_1wank_143",
	footer: footer$2,
	alternativeActions,
	startWithText
};
var EmptyStateBuilderPrompt_default = /* @__PURE__ */ _plugin_vue_export_helper_default(EmptyStateBuilderPrompt_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EmptyStateBuilderPrompt_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/credentialsAppSelection/composables/useAppCredentials.ts
var EXCLUDED_CREDENTIAL_TYPES = new Set([
	"oAuth2Api",
	"oAuth1Api",
	"httpBasicAuth",
	"httpDigestAuth",
	"httpHeaderAuth",
	"httpQueryAuth",
	"httpCustomAuth",
	"noAuth"
]);
var BUNDLED_APP_POPULARITY = {
	gmail: 1,
	googlesheets: 2,
	googledrive: 3,
	googlecalendar: 4,
	googledocs: 5,
	microsoftoutlook: 6,
	microsoftexcel: 7,
	microsoftonedrive: 8,
	microsoftteams: 9,
	slack: 10,
	discord: 11,
	telegram: 12,
	notion: 13,
	airtable: 14,
	trello: 15,
	asana: 16,
	todoist: 17,
	hubspot: 18,
	salesforce: 19,
	pipedrive: 20,
	github: 21,
	gitlab: 22,
	jira: 23,
	linear: 24,
	stripe: 25,
	shopify: 26,
	twilio: 27,
	sendgrid: 28,
	mailchimp: 29,
	dropbox: 30,
	zoom: 31,
	calendly: 32,
	typeform: 33,
	intercom: 34,
	zendesk: 35,
	freshdesk: 36,
	clickup: 37,
	mondaycom: 38,
	baserow: 39,
	supabase: 40
};
var EXCLUDED_NODE_NAMES = [
	"n8n-nodes-base.httpRequest",
	"n8n-nodes-base.webhook",
	"n8n-nodes-base.code",
	"n8n-nodes-base.scheduleTrigger",
	"n8n-nodes-base.emailSend",
	"n8n-nodes-base.set",
	"n8n-nodes-base.if",
	"n8n-nodes-base.switch",
	"n8n-nodes-base.merge",
	"n8n-nodes-base.splitInBatches",
	"n8n-nodes-base.noOp",
	"n8n-nodes-base.start",
	"n8n-nodes-base.stickyNote",
	"n8n-nodes-base.executeWorkflow",
	"n8n-nodes-base.executeWorkflowTrigger",
	"n8n-nodes-base.respondToWebhook",
	"n8n-nodes-base.manualTrigger",
	"n8n-nodes-base.errorTrigger",
	"n8n-nodes-base.function",
	"n8n-nodes-base.functionItem"
];
var isLangChainNode = (nodeName) => {
	return nodeName.startsWith("@n8n/n8n-nodes-langchain.");
};
var isExcludedNode = (nodeName) => {
	return EXCLUDED_NODE_NAMES.includes(nodeName) || isLangChainNode(nodeName);
};
var isTriggerNode = (nodeType) => {
	return nodeType.group?.includes("trigger") ?? false;
};
var isToolNode = (nodeType) => {
	if (!nodeType.outputs || !Array.isArray(nodeType.outputs)) return false;
	return nodeType.outputs.map((output) => typeof output === "string" ? output : output.type).includes(NodeConnectionTypes.AiTool);
};
function useAppCredentials() {
	const credentialsStore = useCredentialsStore();
	const nodeTypesStore = useNodeTypesStore();
	const isLoading = ref(true);
	const error = ref(null);
	nodeTypesStore.fetchCommunityNodePreviews();
	const isOAuthCredentialType = (credType) => {
		if (!credType.extends) return false;
		return credType.extends.includes("oAuth2Api") || credType.extends.includes("oAuth1Api") || credType.extends.includes("googleOAuth2Api") || credType.extends.includes("microsoftOAuth2Api");
	};
	const isGoogleOAuthType = (credType) => {
		if (!credType.extends) return false;
		return credType.extends.includes("googleOAuth2Api");
	};
	const isMicrosoftOAuthType = (credType) => {
		if (!credType.extends) return false;
		return credType.extends.includes("microsoftOAuth2Api");
	};
	const hasInstantOAuth = (credType) => {
		if (!isOAuthCredentialType(credType)) return false;
		if (isGoogleOAuthType(credType)) return true;
		if (isMicrosoftOAuthType(credType)) return true;
		const overwrittenProperties = credType.__overwrittenProperties;
		if (!overwrittenProperties || !Array.isArray(overwrittenProperties)) return false;
		return overwrittenProperties.includes("clientId") && overwrittenProperties.includes("clientSecret");
	};
	const getCredentialPriority = (credType) => {
		const isGoogle = isGoogleOAuthType(credType);
		const isMicrosoft = isMicrosoftOAuthType(credType);
		const isOAuth2 = credType.extends?.includes("oAuth2Api");
		const isOAuth1 = credType.extends?.includes("oAuth1Api");
		const hasInstant = hasInstantOAuth(credType);
		if (isGoogle || isMicrosoft) return 6;
		if (isOAuth2 && hasInstant) return 5;
		if (isOAuth1 && hasInstant) return 4;
		if (isOAuth2) return 3;
		if (isOAuth1) return 2;
		return 1;
	};
	const buildAppInfo = (nodeType) => {
		let icon;
		let iconDark;
		if (typeof nodeType.icon === "string") icon = nodeType.icon;
		else if (nodeType.icon && typeof nodeType.icon === "object" && "light" in nodeType.icon) {
			icon = nodeType.icon.light;
			iconDark = nodeType.icon.dark;
		}
		let iconUrl;
		let iconUrlDark;
		if (typeof nodeType.iconUrl === "string") iconUrl = nodeType.iconUrl;
		else if (nodeType.iconUrl && typeof nodeType.iconUrl === "object" && "light" in nodeType.iconUrl) {
			iconUrl = nodeType.iconUrl.light;
			iconUrlDark = nodeType.iconUrl.dark;
		}
		return {
			name: nodeType.name,
			displayName: nodeType.displayName,
			icon,
			iconDark,
			iconUrl,
			iconUrlDark,
			iconColor: nodeType.iconColor
		};
	};
	const findCredentialsForNode = (nodeType, allCredentialTypes) => {
		const nodeCredentialNames = nodeType.credentials?.map((c) => c.name) ?? [];
		return allCredentialTypes.filter((credType) => nodeCredentialNames.includes(credType.name) && !EXCLUDED_CREDENTIAL_TYPES.has(credType.name));
	};
	const appEntries = computed(() => {
		const allCredentialTypes = credentialsStore.allCredentialTypes;
		const visibleNodes = nodeTypesStore.visibleNodeTypes;
		if (allCredentialTypes.length === 0 || visibleNodes.length === 0) return [];
		const nodeToEntry = /* @__PURE__ */ new Map();
		const processNode = (nodeType, isInstalled, isBundled, packageName, communityDownloads, communityNodeInfo) => {
			if (isExcludedNode(nodeType.name)) return;
			if (isTriggerNode(nodeType)) return;
			if (isToolNode(nodeType)) return;
			const credentials = findCredentialsForNode(nodeType, allCredentialTypes);
			const hasCredentials = nodeType.credentials && nodeType.credentials.length > 0;
			if (isInstalled && !hasCredentials) return;
			if (isInstalled && credentials.length === 0) return;
			let bestCredential;
			if (credentials.length > 0) {
				credentials.sort((a, b) => getCredentialPriority(b) - getCredentialPriority(a));
				bestCredential = credentials[0];
			}
			const simpleName = nodeType.name.split(".").pop()?.replace(/V\d+$/, "").toLowerCase() ?? nodeType.name;
			const popularity = isBundled ? BUNDLED_APP_POPULARITY[simpleName] : communityDownloads;
			const existing = nodeToEntry.get(simpleName);
			if (!existing || bestCredential && (!existing.credentialType || getCredentialPriority(bestCredential) > getCredentialPriority(existing.credentialType))) nodeToEntry.set(simpleName, {
				app: buildAppInfo(nodeType),
				credentialType: bestCredential,
				supportsInstantOAuth: bestCredential ? hasInstantOAuth(bestCredential) : false,
				installed: isInstalled,
				isBundled,
				packageName,
				popularity,
				communityNodeInfo
			});
		};
		for (const nodeType of visibleNodes) {
			const communityInfo = nodeTypesStore.communityNodeType(nodeType.name) ?? nodeTypesStore.communityNodeType(removePreviewToken(nodeType.name));
			if (communityInfo && !communityInfo.isOfficialNode) continue;
			const isInstalled = nodeTypesStore.getIsNodeInstalled(nodeType.name);
			const isBundled = !communityInfo;
			const communityDownloads = communityInfo?.numberOfDownloads;
			const packageName = communityInfo?.packageName;
			processNode(nodeType, isInstalled, isBundled, packageName, communityDownloads, communityInfo);
		}
		const entries = Array.from(nodeToEntry.values());
		entries.sort((a, b) => {
			if (a.isBundled && !b.isBundled) return -1;
			if (!a.isBundled && b.isBundled) return 1;
			if (a.isBundled && b.isBundled) {
				const hasPopA = a.popularity !== void 0;
				const hasPopB = b.popularity !== void 0;
				if (hasPopA && !hasPopB) return -1;
				if (!hasPopA && hasPopB) return 1;
				if (hasPopA && hasPopB) return (a.popularity ?? 0) - (b.popularity ?? 0);
				return a.app.displayName.localeCompare(b.app.displayName);
			}
			const hasPopA = a.popularity !== void 0;
			const hasPopB = b.popularity !== void 0;
			if (hasPopA && !hasPopB) return -1;
			if (!hasPopA && hasPopB) return 1;
			if (hasPopA && hasPopB) return (b.popularity ?? 0) - (a.popularity ?? 0);
			return a.app.displayName.localeCompare(b.app.displayName);
		});
		return entries;
	});
	watch(() => ({
		nodeTypes: nodeTypesStore.visibleNodeTypes,
		credentialTypes: credentialsStore.allCredentialTypes
	}), ({ nodeTypes, credentialTypes }) => {
		if (nodeTypes.length > 0 && credentialTypes.length > 0) isLoading.value = false;
	}, { immediate: true });
	return {
		appEntries,
		isLoading,
		error
	};
}
//#endregion
//#region src/experiments/credentialsAppSelection/components/AppSelectionCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = [
	"data-test-id",
	"tabindex",
	"onKeydown"
];
var AppSelectionCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AppSelectionCard",
	props: {
		app: {},
		state: {},
		supportsInstantOAuth: { type: Boolean },
		skeleton: { type: Boolean },
		installed: { type: Boolean },
		showWarning: { type: Boolean },
		showBadge: { type: Boolean },
		isOwner: { type: Boolean }
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const nodeTypesStore = useNodeTypesStore();
		const i18n = useI18n();
		const isInstalled = computed(() => props.installed);
		const installBadgeTooltip = computed(() => {
			if (props.isOwner) return i18n.baseText("credentialsAppSelection.installToConnect");
			return i18n.baseText("credentialsAppSelection.askAdminToInstall");
		});
		const isClickable = computed(() => !props.skeleton && (props.state === "default" || props.state === "error" || props.state === "connected" || props.state === void 0));
		const handleClick = () => {
			if (isClickable.value) emit("click");
		};
		const nodeTypeForIcon = computed(() => {
			const { app } = props;
			if (!app) return null;
			const nodeType = nodeTypesStore.getNodeType(app.name);
			if (nodeType) return nodeType;
			const cleanedName = removePreviewToken(app.name);
			const communityNode = nodeTypesStore.communityNodeType(cleanedName);
			if (communityNode?.nodeDescription) return communityNode.nodeDescription;
			if (app.iconUrl || app.icon) return {
				name: app.name,
				displayName: app.displayName,
				iconUrl: app.iconUrl,
				icon: app.icon,
				iconColor: app.iconColor,
				group: [],
				outputs: [],
				defaults: { name: app.displayName },
				description: ""
			};
			return null;
		});
		return (_ctx, _cache) => {
			return __props.skeleton ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass([_ctx.$style.card, _ctx.$style.skeleton]),
				"data-test-id": "app-selection-card-skeleton"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.skeletonIcon) }, null, 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.skeletonText) }, null, 2)], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass([_ctx.$style.card, {
					[_ctx.$style.clickable]: isClickable.value,
					[_ctx.$style.connected]: __props.state === "connected" && !__props.showWarning,
					[_ctx.$style.warning]: __props.state === "connected" && __props.showWarning,
					[_ctx.$style.error]: __props.state === "error",
					[_ctx.$style.loading]: __props.state === "loading"
				}]),
				"data-test-id": `app-selection-card-${__props.app?.name}`,
				role: "button",
				tabindex: isClickable.value ? 0 : -1,
				onClick: handleClick,
				onKeydown: [withKeys(handleClick, ["enter"]), withKeys(withModifiers(handleClick, ["prevent"]), ["space"])]
			}, [
				createVNode(Transition, { name: "fade" }, {
					default: withCtx(() => [__props.showBadge && __props.showWarning && __props.state === "connected" ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.warningBadgeWrapper)
					}, [createVNode(unref(N8nTooltip_default), {
						placement: "top",
						"show-after": 300
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("credentialsAppSelection.credentialsNotValid")), 1)]),
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.warningBadge) }, [createVNode(unref(N8nIcon_default), {
							icon: "triangle-alert",
							class: normalizeClass(_ctx.$style.badgeIcon)
						}, null, 8, ["class"])], 2)]),
						_: 1
					})], 2)) : __props.showBadge && __props.state === "connected" ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.connectedBadge)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "check",
						class: normalizeClass(_ctx.$style.badgeIcon)
					}, null, 8, ["class"])], 2)) : createCommentVNode("", true)]),
					_: 1
				}),
				!isInstalled.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.installBadgeWrapper)
				}, [createVNode(unref(N8nTooltip_default), {
					placement: "top",
					"show-after": 300
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(installBadgeTooltip.value), 1)]),
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.installBadge) }, [createVNode(unref(N8nIcon_default), {
						icon: "download",
						class: normalizeClass(_ctx.$style.installBadgeIcon)
					}, null, 8, ["class"])], 2)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconContainer) }, [createVNode(NodeIcon_default, {
					"node-type": nodeTypeForIcon.value,
					size: 32,
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["node-type", "class"])], 2),
				createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.name),
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.app?.displayName), 1)]),
					_: 1
				}, 8, ["class"])
			], 42, _hoisted_1$2));
		};
	}
});
//#endregion
//#region src/experiments/credentialsAppSelection/components/AppSelectionCard.vue?vue&type=style&index=0&lang.module.scss
var card$1 = "_card_shhsm_341";
var clickable = "_clickable_shhsm_358";
var connected = "_connected_shhsm_368";
var warning = "_warning_shhsm_379";
var error = "_error_shhsm_390";
var loading = "_loading_shhsm_398";
var skeleton = "_skeleton_shhsm_403";
var skeletonIcon = "_skeletonIcon_shhsm_407";
var skeletonText = "_skeletonText_shhsm_423";
var iconContainer = "_iconContainer_shhsm_439";
var icon = "_icon_shhsm_439";
var connectedBadge = "_connectedBadge_shhsm_459";
var warningBadgeWrapper = "_warningBadgeWrapper_shhsm_472";
var warningBadge = "_warningBadge_shhsm_472";
var badgeIcon = "_badgeIcon_shhsm_486";
var name$1 = "_name_shhsm_496";
var installBadgeWrapper = "_installBadgeWrapper_shhsm_508";
var installBadge = "_installBadge_shhsm_508";
var installBadgeIcon = "_installBadgeIcon_shhsm_525";
var shimmer = "_shimmer_shhsm_1";
var spin = "_spin_shhsm_1";
var opacityPulse = "_opacityPulse_shhsm_1";
var popoverIn = "_popoverIn_shhsm_1";
var fadeIn = "_fadeIn_shhsm_1";
var collapsibleSlideDown = "_collapsibleSlideDown_shhsm_1";
var collapsibleSlideUp = "_collapsibleSlideUp_shhsm_1";
var pulseGlow = "_pulseGlow_shhsm_1";
var pulseGlowDelayed = "_pulseGlowDelayed_shhsm_1";
var fade = "_fade_shhsm_1";
var fadeInUp = "_fadeInUp_shhsm_1";
var fadeInDown = "_fadeInDown_shhsm_1";
var fadeInLeft = "_fadeInLeft_shhsm_1";
var fadeInRight = "_fadeInRight_shhsm_1";
var fadeOut = "_fadeOut_shhsm_1";
var fadeOutDown = "_fadeOutDown_shhsm_1";
var fadeOutUp = "_fadeOutUp_shhsm_1";
var fadeOutLeft = "_fadeOutLeft_shhsm_1";
var fadeOutRight = "_fadeOutRight_shhsm_1";
var ping = "_ping_shhsm_1";
var blinkBackground = "_blinkBackground_shhsm_1";
var typingBlink = "_typingBlink_shhsm_1";
var AppSelectionCard_vue_vue_type_style_index_0_lang_module_default = {
	card: card$1,
	clickable,
	connected,
	warning,
	error,
	loading,
	skeleton,
	skeletonIcon,
	"skeleton-pulse": "_skeleton-pulse_shhsm_1",
	skeletonText,
	iconContainer,
	icon,
	connectedBadge,
	warningBadgeWrapper,
	warningBadge,
	badgeIcon,
	name: name$1,
	installBadgeWrapper,
	installBadge,
	installBadgeIcon,
	shimmer,
	spin,
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var AppSelectionCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AppSelectionCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AppSelectionCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/credentialsAppSelection/components/AppSelectionGrid.vue?vue&type=script&setup=true&lang.ts
var SKELETON_COUNT = 20;
var ICONS_TO_PRELOAD = 20;
var MIN_SEARCH_SCORE = 0;
var AppSelectionGrid_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AppSelectionGrid",
	props: {
		appEntries: {},
		invalidCredentials: {},
		validatedCredentials: {},
		searchQuery: {},
		loading: { type: Boolean },
		isOwner: { type: Boolean }
	},
	emits: ["card-click"],
	setup(__props, { emit: __emit }) {
		const credentialsStore = useCredentialsStore();
		const nodeTypesStore = useNodeTypesStore();
		const SEARCH_KEYS = [{
			key: "app.displayName",
			weight: 1
		}];
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const hasCredential = (entry) => {
			if (!entry.credentialType) return false;
			return credentialsStore.allCredentials.some((c) => c.type === entry.credentialType?.name);
		};
		const sortConnectedFirst = (entries) => {
			return [...entries].sort((a, b) => {
				const aConnected = hasCredential(a);
				const bConnected = hasCredential(b);
				if (aConnected && !bConnected) return -1;
				if (!aConnected && bConnected) return 1;
				return 0;
			});
		};
		const filteredAppEntries = computed(() => {
			if (!props.searchQuery.trim()) return sortConnectedFirst(props.appEntries);
			return sortConnectedFirst(sublimeSearch(props.searchQuery, props.appEntries, SEARCH_KEYS).filter(({ score }) => score >= MIN_SEARCH_SCORE).map(({ item }) => item));
		});
		const getCardState = (entry) => {
			if (hasCredential(entry)) return "connected";
			return "default";
		};
		const isCredentialInvalid = (entry) => {
			const key = entry.credentialType?.name ?? entry.app.name;
			const hasExistingCredential = hasCredential(entry);
			if (props.invalidCredentials[key]) return true;
			if (hasExistingCredential && !props.validatedCredentials[key]) return true;
			return false;
		};
		const isCredentialValidated = (entry) => {
			const key = entry.credentialType?.name ?? entry.app.name;
			return props.validatedCredentials[key] || hasCredential(entry);
		};
		const handleCardClick = (entry) => {
			emit("card-click", entry);
		};
		const iconsLoaded = ref(false);
		const getIconUrl = (entry) => {
			const { app } = entry;
			const nodeType = nodeTypesStore.getNodeType(app.name);
			if (nodeType?.iconUrl) return typeof nodeType.iconUrl === "string" ? nodeType.iconUrl : nodeType.iconUrl.light;
			const cleanedName = removePreviewToken(app.name);
			const communityNode = nodeTypesStore.communityNodeType(cleanedName);
			if (communityNode?.nodeDescription?.iconUrl) {
				const iconUrl = communityNode.nodeDescription.iconUrl;
				return typeof iconUrl === "string" ? iconUrl : iconUrl.light;
			}
			if (app.iconUrl) return app.iconUrl;
			return null;
		};
		const preloadIcons = async (entries) => {
			const iconUrls = entries.slice(0, ICONS_TO_PRELOAD).map(getIconUrl).filter((url) => url !== null);
			if (iconUrls.length === 0) {
				iconsLoaded.value = true;
				return;
			}
			const loadPromises = iconUrls.map(async (url) => {
				await new Promise((resolve) => {
					const img = new Image();
					img.onload = () => resolve();
					img.onerror = () => resolve();
					img.src = url;
				});
			});
			await Promise.all(loadPromises);
			iconsLoaded.value = true;
		};
		watch(() => ({
			entries: props.appEntries,
			loading: props.loading
		}), async ({ entries, loading }, oldValue) => {
			if (oldValue && entries !== oldValue.entries) iconsLoaded.value = false;
			if (entries.length > 0 && !loading && !iconsLoaded.value) await preloadIcons(entries);
		}, { immediate: true });
		const isLoading = computed(() => props.loading || !iconsLoaded.value && props.appEntries.length > 0);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [isLoading.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.grid)
			}, [(openBlock(), createElementBlock(Fragment, null, renderList(SKELETON_COUNT, (i) => {
				return createVNode(AppSelectionCard_default, {
					key: `skeleton-${i}`,
					skeleton: ""
				});
			}), 64))], 2)) : filteredAppEntries.value.length === 0 ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.emptyState)
			}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("appSelection.noResults")), 1)]),
				_: 1
			})], 2)) : (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.grid)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredAppEntries.value, (entry) => {
				return openBlock(), createBlock(AppSelectionCard_default, {
					key: entry.app.name,
					app: entry.app,
					"supports-instant-o-auth": entry.supportsInstantOAuth,
					state: getCardState(entry),
					installed: entry.installed,
					"show-warning": isCredentialInvalid(entry),
					"show-badge": isCredentialValidated(entry),
					"is-owner": __props.isOwner,
					onClick: ($event) => handleCardClick(entry)
				}, null, 8, [
					"app",
					"supports-instant-o-auth",
					"state",
					"installed",
					"show-warning",
					"show-badge",
					"is-owner",
					"onClick"
				]);
			}), 128))], 2))], 2);
		};
	}
});
var AppSelectionGrid_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1egxm_125",
	grid: "_grid_1egxm_129",
	emptyState: "_emptyState_1egxm_146"
};
var AppSelectionGrid_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AppSelectionGrid_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AppSelectionGrid_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/credentialsAppSelection/components/AppInstallModal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["href"];
var APP_INSTALL_MODAL_KEY$1 = "appInstallModal";
var AppInstallModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AppInstallModal",
	props: {
		appEntry: {},
		modalName: {}
	},
	emits: ["close", "installed"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const usersStore = useUsersStore();
		const nodeTypesStore = useNodeTypesStore();
		const { installNode, loading } = useInstallNode();
		const isAdminOrOwner = computed(() => usersStore.isAdminOrOwner);
		const publisherName = ref(void 0);
		const downloads = ref(null);
		const isOfficial = ref(false);
		const description = ref("");
		const npmPackageUrl = computed(() => {
			if (!props.appEntry?.packageName) return void 0;
			return `https://www.npmjs.com/package/${props.appEntry.packageName}`;
		});
		const formatNumber = (number) => {
			if (!number) return null;
			return new Intl.NumberFormat("en-US").format(number);
		};
		const resetData = () => {
			publisherName.value = void 0;
			downloads.value = null;
			isOfficial.value = false;
			description.value = "";
		};
		const fetchCommunityNodeData = async () => {
			if (!props.appEntry) return;
			resetData();
			const nodeKey = removePreviewToken(props.appEntry.app.name);
			let cachedInfo = props.appEntry.communityNodeInfo;
			if (!cachedInfo) cachedInfo = nodeTypesStore.communityNodeType(nodeKey) ?? void 0;
			if (cachedInfo) {
				publisherName.value = cachedInfo.companyName ?? cachedInfo.authorName;
				downloads.value = formatNumber(cachedInfo.numberOfDownloads);
				isOfficial.value = cachedInfo.isOfficialNode;
				description.value = cachedInfo.description ?? "";
			}
			const attributes = await nodeTypesStore.getCommunityNodeAttributes(nodeKey);
			if (attributes) {
				publisherName.value = attributes.companyName ?? attributes.authorName;
				downloads.value = formatNumber(attributes.numberOfDownloads);
				isOfficial.value = attributes.isOfficialNode;
				description.value = attributes.description ?? description.value;
			}
		};
		const nodeTypeForIcon = computed(() => {
			if (!props.appEntry) return null;
			const { app } = props.appEntry;
			const nodeType = nodeTypesStore.getNodeType(app.name);
			if (nodeType) return nodeType;
			const cleanedName = removePreviewToken(app.name);
			const communityNode = nodeTypesStore.communityNodeType(cleanedName);
			if (communityNode?.nodeDescription) return communityNode.nodeDescription;
			if (app.iconUrl || app.icon) return {
				name: app.name,
				displayName: app.displayName,
				iconUrl: app.iconUrl,
				icon: app.icon,
				iconColor: app.iconColor,
				group: [],
				outputs: [],
				defaults: { name: app.displayName },
				description: ""
			};
			return null;
		});
		const handleInstall = async () => {
			if (!props.appEntry?.packageName || !isAdminOrOwner.value) return;
			if ((await installNode({
				type: "verified",
				packageName: props.appEntry.packageName,
				nodeType: props.appEntry.app.name
			})).success) {
				const installedNodeName = removePreviewToken(props.appEntry.app.name);
				const credentialTypeName = nodeTypesStore.getNodeType(installedNodeName)?.credentials?.[0]?.name;
				if (credentialTypeName) emit("installed", credentialTypeName);
				else emit("close");
			}
		};
		const handleClose = () => {
			if (loading.value) return;
			emit("close");
		};
		watch(() => props.appEntry, () => {
			if (props.appEntry) fetchCommunityNodeData();
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: __props.modalName ?? APP_INSTALL_MODAL_KEY$1,
				center: true,
				width: "520px",
				"close-on-click-modal": !unref(loading),
				"close-on-press-escape": !unref(loading),
				"data-test-id": "app-install-modal",
				onClose: handleClose
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [
					nodeTypeForIcon.value ? (openBlock(), createBlock(NodeIcon_default, {
						key: 0,
						class: normalizeClass(_ctx.$style.nodeIcon),
						"node-type": nodeTypeForIcon.value,
						size: 40,
						circle: false,
						"show-tooltip": false
					}, null, 8, ["class", "node-type"])) : createCommentVNode("", true),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.title) }, toDisplayString(__props.appEntry?.app.displayName), 3),
					isOfficial.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 1,
						placement: "bottom",
						"show-after": 500
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.officialNode.tooltip", { interpolate: { author: publisherName.value || __props.appEntry?.app.displayName || "" } })), 1)]),
						default: withCtx(() => [createVNode(unref(verified_default), { class: normalizeClass(_ctx.$style.officialIcon) }, null, 8, ["class"])]),
						_: 1
					})) : createCommentVNode("", true)
				], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
					description.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						color: "text-base",
						size: "medium",
						class: normalizeClass(_ctx.$style.description)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(description.value), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.separator) }, null, 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.info) }, [
						createVNode(unref(N8nTooltip_default), { placement: "top" }, {
							content: withCtx(() => [createTextVNode(toDisplayString(isOfficial.value ? unref(i18n).baseText("communityNodeInfo.officialApproved") : unref(i18n).baseText("communityNodeInfo.approved")), 1)]),
							default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.infoItem) }, [createVNode(unref(shield_alt_default), { class: normalizeClass(_ctx.$style.infoIcon) }, null, 8, ["class"]), createVNode(unref(N8nText_default), {
								color: "text-light",
								size: "small"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.approved.label")), 1)]),
								_: 1
							})], 2)]),
							_: 1
						}),
						downloads.value ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.infoItem)
						}, [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.infoIcon),
							icon: "hard-drive-download"
						}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.downloads", { interpolate: { downloads: downloads.value } })), 1)]),
							_: 1
						})], 2)) : createCommentVNode("", true),
						publisherName.value ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.infoItem)
						}, [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.infoIcon),
							icon: "user"
						}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.publishedBy", { interpolate: { publisherName: publisherName.value } })), 1)]),
							_: 1
						})], 2)) : createCommentVNode("", true),
						npmPackageUrl.value ? (openBlock(), createElementBlock("a", {
							key: 2,
							href: npmPackageUrl.value,
							target: "_blank",
							rel: "noopener noreferrer",
							class: normalizeClass([_ctx.$style.infoItem, _ctx.$style.docsLink])
						}, [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.infoIcon),
							icon: "external-link"
						}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.docs")), 1)]),
							_: 1
						})], 10, _hoisted_1$1)) : createCommentVNode("", true)
					], 2),
					!isAdminOrOwner.value ? (openBlock(), createBlock(ContactAdministratorToInstall_default, { key: 1 })) : createCommentVNode("", true)
				], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [isAdminOrOwner.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					label: unref(i18n).baseText("communityNodeDetails.install"),
					icon: "download",
					loading: unref(loading),
					class: normalizeClass(_ctx.$style.installButton),
					"data-test-id": "install-community-node-button",
					onClick: handleInstall
				}, null, 8, [
					"label",
					"loading",
					"class"
				])) : createCommentVNode("", true)], 2)]),
				_: 1
			}, 8, [
				"name",
				"close-on-click-modal",
				"close-on-press-escape"
			]);
		};
	}
});
var AppInstallModal_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_9o83z_125",
	nodeIcon: "_nodeIcon_9o83z_130",
	title: "_title_9o83z_135",
	officialIcon: "_officialIcon_9o83z_141",
	content: "_content_9o83z_149",
	description: "_description_9o83z_154",
	separator: "_separator_9o83z_160",
	info: "_info_9o83z_166",
	infoItem: "_infoItem_9o83z_174",
	infoIcon: "_infoIcon_9o83z_180",
	docsLink: "_docsLink_9o83z_186",
	footer: "_footer_9o83z_197",
	installButton: "_installButton_9o83z_202"
};
var AppInstallModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AppInstallModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AppInstallModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/credentialsAppSelection/components/AppSelectionPage.vue?vue&type=script&setup=true&lang.ts
var APP_INSTALL_MODAL_KEY = "appInstallModal";
var AppSelectionPage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AppSelectionPage",
	emits: ["continue"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const { debounce } = useDebounce();
		const credentialsStore = useCredentialsStore();
		const uiStore = useUIStore();
		const appSelectionStore = useCredentialsAppSelectionStore();
		const usersStore = useUsersStore();
		const { appEntries, isLoading } = useAppCredentials();
		const searchQuery = ref("");
		const invalidCredentials = ref({});
		const validatedCredentials = ref({});
		const isValidatingCredentials = ref(false);
		const credentialsFetched = ref(false);
		const pendingCredentialType = ref(null);
		const pendingCredentialId = ref(null);
		const appToInstall = ref(null);
		const firstName = computed(() => usersStore.currentUser?.firstName ?? "");
		const isOwner = computed(() => usersStore.isInstanceOwner);
		const gridLoading = computed(() => isLoading.value || !credentialsFetched.value || isValidatingCredentials.value);
		const heading = computed(() => {
			if (firstName.value) return i18n.baseText("appSelection.heading", { interpolate: { name: firstName.value } });
			return i18n.baseText("appSelection.heading.noName");
		});
		const continueButtonLabel = computed(() => {
			const count = appSelectionStore.connectedCount;
			if (count === 0) return i18n.baseText("appSelection.continue");
			return i18n.baseText("appSelection.continueWithCount", { interpolate: { count: String(count) } });
		});
		const trackSearch = (query) => {
			if (query.trim()) {
				const filteredCount = appEntries.value.filter((entry) => entry.app.displayName.toLowerCase().includes(query.toLowerCase())).length;
				appSelectionStore.trackSearchPerformed(query, filteredCount);
			}
		};
		const debouncedTrackSearch = debounce(trackSearch, { debounceTime: 500 });
		const handleSearchInput = (value) => {
			searchQuery.value = value;
			debouncedTrackSearch(value);
		};
		const handleCardClick = (appEntry) => {
			const { credentialType, installed } = appEntry;
			if (credentialType) {
				const existingCredential = credentialsStore.allCredentials.find((c) => c.type === credentialType.name);
				if (existingCredential) {
					pendingCredentialType.value = credentialType.name;
					pendingCredentialId.value = existingCredential.id;
					uiStore.openExistingCredential(existingCredential.id);
					return;
				}
			}
			if (!installed) {
				appToInstall.value = appEntry;
				uiStore.openModal(APP_INSTALL_MODAL_KEY);
				return;
			}
			if (!credentialType) return;
			openCredentialModal(credentialType.name);
		};
		const openCredentialModal = (credentialTypeName) => {
			credentialsCountBefore.value = credentialsStore.allCredentials.filter((c) => c.type === credentialTypeName).length;
			pendingCredentialType.value = credentialTypeName;
			pendingCredentialId.value = null;
			uiStore.openNewCredential(credentialTypeName, true);
		};
		const handleInstallModalClose = () => {
			uiStore.closeModal(APP_INSTALL_MODAL_KEY);
			appToInstall.value = null;
			document.activeElement?.blur();
		};
		const handleNodeInstalled = (credentialTypeName) => {
			uiStore.closeModal(APP_INSTALL_MODAL_KEY);
			appToInstall.value = null;
			openCredentialModal(credentialTypeName);
		};
		const handleContinue = () => {
			const connectedApps = credentialsStore.allCredentials.map((credential) => ({
				credential_type: credential.type,
				is_valid: !invalidCredentials.value[credential.type]
			}));
			appSelectionStore.trackCompleted(connectedApps);
			emit("continue");
		};
		const credentialsCountBefore = ref(0);
		watch(() => credentialsStore.allCredentials, (credentials) => {
			const existingTypes = new Set(credentials.map((c) => c.type));
			for (const typeName of Object.keys(invalidCredentials.value)) if (!existingTypes.has(typeName)) delete invalidCredentials.value[typeName];
			for (const typeName of Object.keys(validatedCredentials.value)) if (!existingTypes.has(typeName)) delete validatedCredentials.value[typeName];
		}, { deep: true });
		let wasModalOpenOnKeyDown = false;
		const handleKeyDownCapture = (event) => {
			if (event.key === "Escape") wasModalOpenOnKeyDown = Object.values(uiStore.isModalActiveById).some((isActive) => isActive);
		};
		const handleKeyDown = (event) => {
			if (event.key !== "Escape" || !searchQuery.value) return;
			if (wasModalOpenOnKeyDown) return;
			searchQuery.value = "";
		};
		const validateCredential = async (credentialId, credentialTypeName) => {
			try {
				const credentialData = await credentialsStore.getCredentialData({ id: credentialId });
				if (credentialData && typeof credentialData.data === "object") {
					const isOAuth = credentialsStore.getCredentialTypeByName(credentialTypeName)?.extends?.some((ext) => [
						"oAuth2Api",
						"oAuth1Api",
						"googleOAuth2Api",
						"microsoftOAuth2Api"
					].includes(ext));
					let isValid = false;
					if (isOAuth) isValid = Boolean(credentialData.data.oauthTokenData);
					else isValid = (await credentialsStore.testCredential(credentialData)).status === "OK";
					if (isValid) {
						const { [credentialTypeName]: _, ...rest } = invalidCredentials.value;
						invalidCredentials.value = rest;
					} else invalidCredentials.value = {
						...invalidCredentials.value,
						[credentialTypeName]: true
					};
				}
			} catch {
				invalidCredentials.value = {
					...invalidCredentials.value,
					[credentialTypeName]: true
				};
			} finally {
				validatedCredentials.value = {
					...validatedCredentials.value,
					[credentialTypeName]: true
				};
			}
		};
		const validateExistingCredentials = async () => {
			try {
				const credentials = credentialsStore.allCredentials;
				const appCredentialTypes = new Set(appEntries.value.map((entry) => entry.credentialType?.name).filter(Boolean));
				const seenTypes = /* @__PURE__ */ new Set();
				const credentialsToValidate = credentials.filter((c) => {
					if (!appCredentialTypes.has(c.type) || seenTypes.has(c.type)) return false;
					seenTypes.add(c.type);
					return true;
				});
				if (credentialsToValidate.length === 0) return;
				await Promise.all(credentialsToValidate.map(async (credential) => {
					await validateCredential(credential.id, credential.type);
				}));
			} finally {
				isValidatingCredentials.value = false;
			}
		};
		onMounted(async () => {
			appSelectionStore.trackPageViewed();
			document.addEventListener("keydown", handleKeyDownCapture, true);
			document.addEventListener("keydown", handleKeyDown);
			await credentialsStore.fetchAllCredentials();
			credentialsFetched.value = true;
		});
		const hasValidatedOnLoad = ref(false);
		watch(() => ({
			loading: isLoading.value,
			fetched: credentialsFetched.value
		}), async ({ loading, fetched }) => {
			if (!loading && fetched && !hasValidatedOnLoad.value) {
				hasValidatedOnLoad.value = true;
				isValidatingCredentials.value = true;
				try {
					await validateExistingCredentials();
				} catch {
					isValidatingCredentials.value = false;
				}
			}
		}, { immediate: true });
		onUnmounted(() => {
			document.removeEventListener("keydown", handleKeyDownCapture, true);
			document.removeEventListener("keydown", handleKeyDown);
		});
		watch(computed(() => uiStore.isModalActiveById[CREDENTIAL_EDIT_MODAL_KEY]), async (isOpen, wasOpen) => {
			if (!isOpen && wasOpen && pendingCredentialType.value) {
				if (pendingCredentialId.value) await validateCredential(pendingCredentialId.value, pendingCredentialType.value);
				else {
					const credentialsOfType = credentialsStore.allCredentials.filter((c) => c.type === pendingCredentialType.value);
					if (credentialsOfType.length > credentialsCountBefore.value) {
						const newCredential = credentialsOfType[credentialsOfType.length - 1];
						await validateCredential(newCredential.id, pendingCredentialType.value);
					}
				}
				pendingCredentialType.value = null;
				pendingCredentialId.value = null;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "app-selection-page"
			}, [createVNode(AppInstallModal_default, {
				"app-entry": appToInstall.value,
				"modal-name": APP_INSTALL_MODAL_KEY,
				onClose: handleInstallModalClose,
				onInstalled: handleNodeInstalled
			}, null, 8, ["app-entry"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
				createVNode(unref(N8nHeading_default), {
					tag: "h1",
					size: "xlarge",
					class: normalizeClass(_ctx.$style.heading)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(heading.value), 1)]),
					_: 1
				}, 8, ["class"]),
				createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.subheading),
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("appSelection.subheading")), 1)]),
					_: 1
				}, 8, ["class"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.searchContainer) }, [createVNode(unref(Input_default), {
					"model-value": searchQuery.value,
					placeholder: unref(i18n).baseText("appSelection.searchPlaceholder"),
					size: "large",
					"data-test-id": "app-selection-search",
					"onUpdate:modelValue": handleSearchInput
				}, {
					prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
					suffix: withCtx(() => [searchQuery.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: "x",
						class: normalizeClass(_ctx.$style.clearIcon),
						"data-test-id": "app-selection-search-clear",
						onClick: _cache[0] || (_cache[0] = ($event) => searchQuery.value = "")
					}, null, 8, ["class"])) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["model-value", "placeholder"])], 2),
				createVNode(AppSelectionGrid_default, {
					"app-entries": unref(appEntries),
					"invalid-credentials": invalidCredentials.value,
					"validated-credentials": validatedCredentials.value,
					"search-query": searchQuery.value,
					loading: gridLoading.value,
					"is-owner": isOwner.value,
					onCardClick: handleCardClick
				}, null, 8, [
					"app-entries",
					"invalid-credentials",
					"validated-credentials",
					"search-query",
					"loading",
					"is-owner"
				]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [unref(appSelectionStore).connectedCount > 0 ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					label: continueButtonLabel.value,
					size: "large",
					"data-test-id": "app-selection-continue",
					onClick: handleContinue
				}, null, 8, ["label"])) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					label: unref(i18n).baseText("appSelection.connectLater"),
					type: "tertiary",
					size: "large",
					"data-test-id": "app-selection-skip",
					onClick: handleContinue
				}, null, 8, ["label"]))], 2)
			], 2)], 2);
		};
	}
});
var AppSelectionPage_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1gzwc_125",
	content: "_content_1gzwc_135",
	heading: "_heading_1gzwc_143",
	subheading: "_subheading_1gzwc_148",
	searchContainer: "_searchContainer_1gzwc_153",
	clearIcon: "_clearIcon_1gzwc_159",
	footer: "_footer_1gzwc_168"
};
var AppSelectionPage_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AppSelectionPage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AppSelectionPage_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/surfaceMcpToNewCloudUsers/components/SurfaceMcpEmptyStateReminder.vue?vue&type=script&setup=true&lang.ts
var SurfaceMcpEmptyStateReminder_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SurfaceMcpEmptyStateReminder",
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nText_default), {
				size: "small",
				color: "text-light",
				"data-test-id": "mcp-onboarding-reminder",
				class: normalizeClass(_ctx.$style.reminder)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.emptyState.reminder")), 1)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var SurfaceMcpEmptyStateReminder_vue_vue_type_style_index_0_lang_module_default = { reminder: "_reminder_el04v_125" };
var SurfaceMcpEmptyStateReminder_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SurfaceMcpEmptyStateReminder_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SurfaceMcpEmptyStateReminder_vue_vue_type_style_index_0_lang_module_default }]]);
var SurfaceMcpTileLogos_vue_vue_type_style_index_0_lang_module_default = {
	logoRow: "_logoRow_1idvl_125",
	logoChip: "_logoChip_1idvl_132",
	claudeIcon: "_claudeIcon_1idvl_145",
	openAiIcon: "_openAiIcon_1idvl_146"
};
//#endregion
//#region src/experiments/surfaceMcpToNewCloudUsers/components/SurfaceMcpTileLogos.vue
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", {
		class: normalizeClass(_ctx.$style.logoRow),
		"data-test-id": "mcp-tile-logo-row",
		"aria-hidden": "true"
	}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.logoChip) }, [(openBlock(), createElementBlock("svg", {
		class: normalizeClass(_ctx.$style.claudeIcon),
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		"data-test-id": "mcp-tile-claude-logo"
	}, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		d: "M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 0 1-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z",
		fill: "#D97757"
	}, null, -1)])], 2))], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.logoChip) }, [(openBlock(), createElementBlock("svg", {
		class: normalizeClass(_ctx.$style.openAiIcon),
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"fill-rule": "evenodd",
		xmlns: "http://www.w3.org/2000/svg",
		"data-test-id": "mcp-tile-openai-logo"
	}, [..._cache[1] || (_cache[1] = [createBaseVNode("path", { d: "M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z" }, null, -1)])], 2))], 2)], 2);
}
var SurfaceMcpTileLogos_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": SurfaceMcpTileLogos_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/surfaceMcpToNewCloudUsers/components/SurfaceMcpEmptyStateTile.vue?vue&type=script&setup=true&lang.ts
var SurfaceMcpEmptyStateTile_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SurfaceMcpEmptyStateTile",
	setup(__props) {
		const i18n = useI18n();
		const uiStore = useUIStore();
		const mcpStore = useMCPStore();
		const surfaceMcpStore = useSurfaceMcpToNewCloudUsersStore();
		const ctaKey = computed(() => surfaceMcpStore.currentVariant === SURFACE_MCP_TO_NEW_CLOUD_USERS_EXPERIMENT.variant2 ? "experiments.surfaceMcpToNewCloudUsers.emptyState.tile.variant2.cta" : "experiments.surfaceMcpToNewCloudUsers.emptyState.tile.variant1.cta");
		const badgeKey = computed(() => mcpStore.mcpAccessEnabled ? "experiments.surfaceMcpToNewCloudUsers.emptyState.tile.badge.enabled" : "experiments.surfaceMcpToNewCloudUsers.emptyState.tile.badge.new");
		function openOnboarding() {
			surfaceMcpStore.trackOpened("tile", {
				entryPoint: "empty_state_tile",
				mcpAccessEnabled: mcpStore.mcpAccessEnabled
			});
			uiStore.openModalWithData({
				name: SURFACE_MCP_ONBOARDING_MODAL_KEY,
				data: { surface: "tile" }
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass(_ctx.$style.card),
				hoverable: "",
				"data-test-id": "mcp-onboarding-card",
				onClick: openOnboarding
			}, {
				default: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass([_ctx.$style.badge, { [_ctx.$style.badgeEnabled]: unref(mcpStore).mcpAccessEnabled }]),
					"data-test-id": "mcp-onboarding-badge"
				}, [unref(mcpStore).mcpAccessEnabled ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: "check",
					size: "xsmall",
					"stroke-width": 2.5
				})) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(unref(i18n).baseText(badgeKey.value)), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(SurfaceMcpTileLogos_default), createVNode(unref(N8nText_default), {
					size: "large",
					bold: true,
					class: normalizeClass(_ctx.$style.cta)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(ctaKey.value)), 1)]),
					_: 1
				}, 8, ["class"])], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var SurfaceMcpEmptyStateTile_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1yu0o_125",
	content: "_content_1yu0o_129",
	cta: "_cta_1yu0o_139",
	badge: "_badge_1yu0o_143",
	badgeEnabled: "_badgeEnabled_1yu0o_162"
};
var SurfaceMcpEmptyStateTile_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SurfaceMcpEmptyStateTile_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SurfaceMcpEmptyStateTile_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/components/layouts/EmptyStateLayout.vue?vue&type=script&setup=true&lang.ts
var EmptyStateLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "EmptyStateLayout",
	emits: ["click:add"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const route = useRoute();
		const router = useRouter();
		const bannersStore = useBannersStore();
		const projectsStore = useProjectsStore();
		const projectPages = useProjectPages();
		const emptyStateBuilderPromptStore = useEmptyStateBuilderPromptStore();
		const credentialsAppSelectionStore = useCredentialsAppSelectionStore();
		const readyToRunStore = useReadyToRunStore();
		const settingsStore = useSettingsStore();
		const agentTelemetry = useAgentTelemetry();
		const { showAppSelection, showBuilderPrompt, showRecommendedTemplatesInline, builderHeading, emptyStateHeading, emptyStateDescription, canCreateWorkflow } = useWorkflowsEmptyState();
		const { showTile: showMcpTile, showReminder: showMcpReminder } = useSurfaceMcpEmptyState({
			canCreateWorkflow: computed(() => Boolean(canCreateWorkflow.value)),
			showAppSelection: computed(() => Boolean(showAppSelection.value)),
			showBuilderPrompt: computed(() => Boolean(showBuilderPrompt.value)),
			showRecommendedTemplatesInline: computed(() => Boolean(showRecommendedTemplatesInline.value))
		});
		const addWorkflow = () => {
			emit("click:add");
		};
		const showReadyToRunCard = computed(() => {
			return readyToRunStore.userCanClaimOpenAiCredits && canCreateWorkflow.value && !showMcpTile.value;
		});
		const builderProjectId = computed(() => projectPages.isOverviewSubPage ? projectsStore.personalProject?.id : route.params.projectId);
		const { canCreate } = useAgentPermissions(builderProjectId);
		const showBuildAgentCard = computed(() => {
			return settingsStore.isModuleActive("agents") && canCreate.value;
		});
		const handleReadyToRunClick = async () => {
			try {
				await readyToRunStore.claimCreditsAndOpenWorkflow("card", builderParentFolderId.value, builderProjectId.value);
			} catch {}
		};
		const handleBuildAgentClick = () => {
			agentTelemetry.trackClickedNewAgent("card");
			router.push({
				name: NEW_AGENT_VIEW,
				query: { projectId: builderProjectId.value }
			});
		};
		const containerStyle = computed(() => ({ minHeight: `calc(100vh - ${bannersStore.bannersHeight}px)` }));
		const builderParentFolderId = computed(() => route.params.folderId);
		const handleBuilderPromptSubmit = async (prompt) => {
			await emptyStateBuilderPromptStore.createWorkflowWithPrompt(prompt, builderProjectId.value, builderParentFolderId.value);
		};
		const handleAppSelectionContinue = () => {
			credentialsAppSelectionStore.dismiss();
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.emptyStateLayout, {
					[_ctx.$style.noTemplatesContent]: !unref(showRecommendedTemplatesInline) && !unref(showBuilderPrompt) && !unref(showAppSelection),
					[_ctx.$style.builderLayout]: unref(showBuilderPrompt) || unref(showAppSelection)
				}]),
				style: normalizeStyle(containerStyle.value)
			}, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.content, { [_ctx.$style.builderContent]: unref(showBuilderPrompt) }]) }, [unref(showAppSelection) ? (openBlock(), createBlock(AppSelectionPage_default, {
				key: 0,
				onContinue: handleAppSelectionContinue
			})) : unref(showBuilderPrompt) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.welcomeBuilder) }, [createVNode(unref(N8nHeading_default), {
				tag: "h1",
				size: "xlarge"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(builderHeading)), 1)]),
				_: 1
			})], 2), createVNode(EmptyStateBuilderPrompt_default, {
				"data-test-id": "empty-state-builder-prompt",
				"project-id": builderProjectId.value,
				"parent-folder-id": builderParentFolderId.value,
				"show-build-agent-button": showBuildAgentCard.value,
				onSubmit: handleBuilderPromptSubmit,
				onStartFromScratch: addWorkflow,
				onBuildAgent: handleBuildAgentClick
			}, null, 8, [
				"project-id",
				"parent-folder-id",
				"show-build-agent-button"
			])], 64)) : unref(showRecommendedTemplatesInline) ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createVNode(unref(N8nHeading_default), {
				tag: "h1",
				size: "2xlarge",
				bold: "",
				class: normalizeClass(_ctx.$style.welcomeTitle)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(emptyStateHeading)), 1)]),
				_: 1
			}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.templatesSection) }, [
				createVNode(RecommendedTemplatesSection_default),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.orDivider) }, [createVNode(unref(N8nText_default), { size: "large" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.or")), 1)]),
					_: 1
				})], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.actionButtons) }, [
					createVNode(ReadyToRunButton_default, {
						type: "secondary",
						size: "large"
					}),
					showBuildAgentCard.value ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						variant: "subtle",
						icon: "robot",
						size: "large",
						"data-test-id": "build-agent-button",
						onClick: handleBuildAgentClick
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.empty.buildAgent")), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					createVNode(unref(N8nButton_default), {
						variant: "subtle",
						icon: "workflow",
						size: "large",
						"data-test-id": "start-from-scratch-button",
						onClick: addWorkflow
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.empty.buildWorkflow")), 1)]),
						_: 1
					})
				], 2)
			], 2)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [createVNode(unref(N8nHeading_default), {
				tag: "h1",
				size: "2xlarge",
				bold: "",
				class: normalizeClass([_ctx.$style.welcomeTitle, _ctx.$style.fallbackHeading])
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(emptyStateHeading)), 1)]),
				_: 1
			}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.fallbackContent) }, [
				!unref(canCreateWorkflow) ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					tag: "p",
					size: "large",
					color: "text-base",
					class: normalizeClass(_ctx.$style.fallbackDescription)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(emptyStateDescription)), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				unref(showMcpReminder) ? (openBlock(), createBlock(SurfaceMcpEmptyStateReminder_default, { key: 1 })) : createCommentVNode("", true),
				unref(canCreateWorkflow) ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass([_ctx.$style.actionCardsContainer, { [_ctx.$style.singleCard]: !showReadyToRunCard.value && !unref(showMcpTile) && !showBuildAgentCard.value }])
				}, [
					unref(showMcpTile) ? (openBlock(), createBlock(SurfaceMcpEmptyStateTile_default, {
						key: 0,
						class: normalizeClass(_ctx.$style.actionCard)
					}, null, 8, ["class"])) : createCommentVNode("", true),
					showReadyToRunCard.value ? (openBlock(), createBlock(unref(N8nCard_default), {
						key: 1,
						class: normalizeClass(_ctx.$style.actionCard),
						hoverable: "",
						"data-test-id": "ready-to-run-card",
						onClick: handleReadyToRunClick
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardContent) }, [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.cardIcon),
							icon: "zap",
							color: "foreground-dark",
							"stroke-width": 1.5
						}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
							size: "large",
							class: "mt-xs"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.empty.tryAiWorkflow")), 1)]),
							_: 1
						})], 2)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					showBuildAgentCard.value ? (openBlock(), createBlock(unref(N8nCard_default), {
						key: 2,
						class: normalizeClass(_ctx.$style.actionCard),
						hoverable: "",
						"data-test-id": "build-agent-card",
						onClick: handleBuildAgentClick
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardContent) }, [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.cardIcon),
							icon: "robot",
							color: "foreground-dark",
							"stroke-width": 1.5
						}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
							size: "large",
							class: "mt-xs"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.empty.buildAgent")), 1)]),
							_: 1
						})], 2)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					createVNode(unref(N8nCard_default), {
						class: normalizeClass(_ctx.$style.actionCard),
						hoverable: "",
						"data-test-id": "new-workflow-card",
						onClick: addWorkflow
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardContent) }, [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.cardIcon),
							icon: "workflow",
							color: "foreground-dark",
							"stroke-width": 1.5
						}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
							size: "large",
							class: "mt-xs"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.empty.buildWorkflow")), 1)]),
							_: 1
						})], 2)]),
						_: 1
					}, 8, ["class"])
				], 2)) : createCommentVNode("", true)
			], 2)], 64))], 2)], 6);
		};
	}
});
var EmptyStateLayout_vue_vue_type_style_index_0_lang_module_default = {
	emptyStateLayout: "_emptyStateLayout_h9e6s_125",
	noTemplatesContent: "_noTemplatesContent_h9e6s_140",
	builderLayout: "_builderLayout_h9e6s_143",
	content: "_content_h9e6s_151",
	builderContent: "_builderContent_h9e6s_158",
	welcomeBuilder: "_welcomeBuilder_h9e6s_163",
	welcomeTitle: "_welcomeTitle_h9e6s_167",
	templatesSection: "_templatesSection_h9e6s_171",
	fallbackContent: "_fallbackContent_h9e6s_175",
	fallbackDescription: "_fallbackDescription_h9e6s_183",
	contentDropIn: "_contentDropIn_h9e6s_1",
	fallbackHeading: "_fallbackHeading_h9e6s_187",
	headingLift: "_headingLift_h9e6s_1",
	actionCardsContainer: "_actionCardsContainer_h9e6s_191",
	singleCard: "_singleCard_h9e6s_198",
	actionCard: "_actionCard_h9e6s_191",
	actionCardIn: "_actionCardIn_h9e6s_1",
	cardIcon: "_cardIcon_h9e6s_222",
	cardContent: "_cardContent_h9e6s_273",
	orDivider: "_orDivider_h9e6s_289",
	actionButtons: "_actionButtons_h9e6s_294"
};
var EmptyStateLayout_default = /* @__PURE__ */ _plugin_vue_export_helper_default(EmptyStateLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EmptyStateLayout_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/views/WorkflowsView.vue?vue&type=script&setup=true&lang.ts
var import_debounce = /* @__PURE__ */ __toESM(require_debounce(), 1);
var _hoisted_1 = { key: 1 };
var _hoisted_2 = { class: "text-center mt-s" };
var _hoisted_3 = {
	key: 0,
	class: "mb-s"
};
var _hoisted_4 = { class: "mb-s" };
var _hoisted_5 = { class: "mb-s" };
var FILTERS_DEBOUNCE_TIME = 100;
var WorkflowsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowsView",
	setup(__props) {
		const SEARCH_DEBOUNCE_TIME = getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH);
		const StatusFilter = {
			ALL: "",
			ACTIVE: "active",
			DEACTIVATED: "deactivated"
		};
		/** Maps sort values from the ResourcesListLayout component to values expected by workflows endpoint */
		const WORKFLOWS_SORT_MAP = {
			lastUpdated: "updatedAt:desc",
			lastCreated: "createdAt:desc",
			nameAsc: "name:asc",
			nameDesc: "name:desc"
		};
		const i18n = useI18n();
		const route = useRoute();
		const router = useRouter();
		const message = useMessage();
		const toast = useToast();
		const folderHelpers = useFolders();
		const sourceControlStore = useSourceControlStore();
		const usersStore = useUsersStore();
		const workflowsStore = useWorkflowsStore();
		const workflowsListStore = useWorkflowsListStore();
		const credentialsStore = useCredentialsStore();
		const environmentsStore = useEnvironmentsStore();
		const dataTableStore = useDataTableStore();
		const mcpStore = useMCPStore();
		const settingsStore = useSettingsStore();
		const projectsStore = useProjectsStore();
		const telemetry = useTelemetry();
		const uiStore = useUIStore();
		const tagsStore = useTagsStore();
		const foldersStore = useFoldersStore();
		const favoritesStore = useFavoritesStore();
		const posthogStore = usePostHog();
		const usageStore = useUsageStore();
		const insightsStore = useInsightsStore();
		const aiStarterTemplatesStore = useAITemplatesStarterCollectionStore();
		const personalizedTemplatesStore = usePersonalizedTemplatesStore();
		const readyToRunWorkflowsStore = useReadyToRunWorkflowsStore();
		const personalizedTemplatesV2Store = usePersonalizedTemplatesV2Store();
		const personalizedTemplatesV3Store = usePersonalizedTemplatesV3Store();
		const readyToRunStore = useReadyToRunStore();
		const documentTitle = useDocumentTitle();
		const { callDebounced } = useDebounce();
		const projectPages = useProjectPages();
		const { next: nextFetch } = useLatestFetch();
		const { fetchDependencyCounts } = useDependencies();
		const { showRecommendedTemplatesInline, emptyStateHeading: emptyListHeading, emptyStateDescription: emptyListDescription, readOnlyEnv, projectPermissions } = useWorkflowsEmptyState();
		const loading = ref(true);
		const breadcrumbsLoading = ref(false);
		const filters = ref({
			search: "",
			homeProject: "",
			status: StatusFilter.ALL,
			showArchived: false,
			tags: []
		});
		const workflowListEventBus = createEventBus();
		const resourcesListLayoutRef = useTemplateRef("resourcesListLayout");
		const workflowsAndFolders = ref([]);
		const currentPage = ref(1);
		const pageSize = ref(50);
		const currentSort = ref("updatedAt:desc");
		const currentFolderId = ref(null);
		const showCardsBadge = ref(false);
		/**
		* Folder actions
		* These can appear on the list header, and then they are applied to current folder
		* or on each folder card, and then they are applied to the clicked folder
		* 'onlyAvailableOn' is used to specify where the action should be available, if not specified it will be available on both
		*/
		const folderActions = computed(() => [
			{
				label: i18n.baseText("generic.open"),
				value: FOLDER_LIST_ITEM_ACTIONS.OPEN,
				disabled: false,
				onlyAvailableOn: "card"
			},
			{
				label: i18n.baseText("folders.actions.create"),
				value: FOLDER_LIST_ITEM_ACTIONS.CREATE,
				disabled: readOnlyEnv.value || !hasPermissionToCreateFolders.value
			},
			{
				label: i18n.baseText("folders.actions.create.workflow"),
				value: FOLDER_LIST_ITEM_ACTIONS.CREATE_WORKFLOW,
				disabled: readOnlyEnv.value || !hasPermissionToCreateWorkflows.value
			},
			{
				label: currentFolder.value && favoritesStore.isFavorite(currentFolder.value.id, "folder") ? i18n.baseText("favorites.remove") : i18n.baseText("favorites.add"),
				value: FOLDER_LIST_ITEM_ACTIONS.TOGGLE_FAVORITE,
				disabled: false,
				onlyAvailableOn: "mainBreadcrumbs"
			},
			{
				label: i18n.baseText("generic.rename"),
				value: FOLDER_LIST_ITEM_ACTIONS.RENAME,
				disabled: readOnlyEnv.value || !hasPermissionToUpdateFolders.value
			},
			{
				label: i18n.baseText("folders.actions.moveToFolder"),
				value: FOLDER_LIST_ITEM_ACTIONS.MOVE,
				disabled: readOnlyEnv.value || !hasPermissionToUpdateFolders.value
			},
			{
				label: i18n.baseText("generic.delete"),
				value: FOLDER_LIST_ITEM_ACTIONS.DELETE,
				disabled: readOnlyEnv.value || !hasPermissionToDeleteFolders.value
			}
		]);
		const folderCardActions = computed(() => folderActions.value.filter((action) => !action.onlyAvailableOn || action.onlyAvailableOn === "card"));
		const mainBreadcrumbsActions = computed(() => folderActions.value.filter((action) => !action.onlyAvailableOn || action.onlyAvailableOn === "mainBreadcrumbs"));
		const isShareable = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Sharing]);
		const foldersEnabled = computed(() => {
			return settingsStore.isFoldersFeatureEnabled;
		});
		const mcpModuleActive = computed(() => settingsStore.isModuleActive("mcp"));
		const mcpEnabled = computed(() => {
			return mcpModuleActive.value && settingsStore.moduleSettings.mcp?.mcpAccessEnabled;
		});
		const canManageInstanceMcp = computed(() => hasPermission(["rbac"], { rbac: { scope: ["mcp:manage"] } }));
		const isWorkflowCardMcpToggleEnabled = computed(() => posthogStore.isVariantEnabled(WORKFLOW_CARD_MCP_TOGGLE_EXPERIMENT.name, WORKFLOW_CARD_MCP_TOGGLE_EXPERIMENT.variant));
		const showFolders = computed(() => {
			return foldersEnabled.value && !projectPages.isOverviewSubPage && !projectPages.isSharedSubPage;
		});
		const currentFolder = computed(() => {
			return currentFolderId.value ? foldersStore.breadcrumbsCache[currentFolderId.value] : null;
		});
		const currentFolderParent = computed(() => {
			return currentFolder.value?.parentFolder ? foldersStore.breadcrumbsCache[currentFolder.value.parentFolder] : null;
		});
		const showMainBreadcrumbs = computed(() => {
			return showFolders.value && (!currentFolderId.value || currentFolder.value !== null);
		});
		const isDragging = computed(() => {
			return foldersStore.draggedElement !== null;
		});
		const isDragNDropEnabled = computed(() => {
			return !readOnlyEnv.value && hasPermissionToUpdateFolders.value;
		});
		const listScrollContainer = computed(() => {
			return resourcesListLayoutRef.value?.getScrollContainer?.() ?? null;
		});
		useAutoScrollOnDrag({
			isActive: computed(() => isDragging.value && isDragNDropEnabled.value),
			container: listScrollContainer
		});
		const hasPermissionToCreateFolders = computed(() => {
			const project = currentProject.value ?? projectsStore.personalProject;
			if (!project) return false;
			return getResourcePermissions(project.scopes).folder.create === true;
		});
		const hasPermissionToUpdateFolders = computed(() => {
			const project = currentProject.value ?? projectsStore.personalProject;
			if (!project) return false;
			return getResourcePermissions(project.scopes).folder.update === true;
		});
		const hasPermissionToDeleteFolders = computed(() => {
			const project = currentProject.value ?? projectsStore.personalProject;
			if (!project) return false;
			return getResourcePermissions(project.scopes).folder.delete === true;
		});
		const hasPermissionToCreateWorkflows = computed(() => {
			if (!currentProject.value) return false;
			return getResourcePermissions(currentProject.value.scopes).workflow.create === true;
		});
		const hasPermissionToUpdateWorkflows = computed(() => {
			const project = currentProject.value ?? projectsStore.personalProject;
			if (!project) return false;
			return getResourcePermissions(project.scopes).workflow.update === true;
		});
		const currentProject = computed(() => projectsStore.currentProject);
		const currentBreadcrumbsProject = computed(() => currentProject.value ?? projectsStore.personalProject);
		const currentBreadcrumbsProjectName = computed(() => {
			const project = currentBreadcrumbsProject.value;
			if (!project) return void 0;
			return project.type === ProjectTypes.Personal ? i18n.baseText("projects.menu.personal") : project.name;
		});
		const currentParentName = computed(() => currentFolder.value?.name ?? currentBreadcrumbsProjectName.value);
		const projectRootBreadcrumbsActions = computed(() => {
			const project = currentBreadcrumbsProject.value;
			if (!project) return [];
			const actions = [{
				label: i18n.baseText("folders.actions.create"),
				value: FOLDER_LIST_ITEM_ACTIONS.CREATE,
				disabled: readOnlyEnv.value || !hasPermissionToCreateFolders.value
			}];
			if (project.type !== ProjectTypes.Personal) actions.push({
				label: favoritesStore.isFavorite(project.id, "project") ? i18n.baseText("favorites.remove") : i18n.baseText("favorites.add"),
				value: FOLDER_LIST_ITEM_ACTIONS.TOGGLE_FAVORITE,
				disabled: false
			});
			return actions;
		});
		const mcpAccessScope = computed(() => {
			if (currentFolderId.value) {
				if (!currentFolder.value) return null;
				return {
					type: "folder",
					id: currentFolder.value.id,
					name: currentFolder.value.name
				};
			}
			const project = currentBreadcrumbsProject.value;
			const name = currentBreadcrumbsProjectName.value;
			if (!project?.id || !name) return null;
			return {
				type: "project",
				id: project.id,
				name
			};
		});
		const showMcpAccessActions = computed(() => mcpModuleActive.value && mcpAccessScope.value !== null && !projectPages.isOverviewSubPage && !projectPages.isSharedSubPage && !readOnlyEnv.value && hasPermissionToUpdateWorkflows.value);
		const settingsLink = computed(() => router.resolve({ name: MCP_SETTINGS_VIEW }).href);
		const mcpAccessBreadcrumbsAction = computed(() => {
			if (!showMcpAccessActions.value || !mcpAccessScope.value) return null;
			return {
				label: i18n.baseText("resourceActions.mcpAccess.manage"),
				value: MCP_ACCESS_ACTIONS.MANAGE,
				disabled: false,
				children: [{
					label: i18n.baseText("resourceActions.mcpAccess.enable"),
					value: MCP_ACCESS_ACTIONS.ENABLE,
					disabled: false,
					tooltip: i18n.baseText("resourceActions.mcpAccess.enable.tooltip", { interpolate: { scopeName: mcpAccessScope.value.name } })
				}, {
					label: i18n.baseText("resourceActions.mcpAccess.disable"),
					value: MCP_ACCESS_ACTIONS.DISABLE,
					disabled: false,
					tooltip: i18n.baseText("resourceActions.mcpAccess.disable.tooltip", { interpolate: { scopeName: mcpAccessScope.value.name } })
				}]
			};
		});
		const breadcrumbsActions = computed(() => {
			const actions = currentFolder.value ? mainBreadcrumbsActions.value : projectRootBreadcrumbsActions.value;
			const mcpAction = mcpAccessBreadcrumbsAction.value;
			return mcpAction ? [...actions, mcpAction] : actions;
		});
		const personalProject = computed(() => {
			return projectsStore.personalProject;
		});
		const workflowListResources = computed(() => {
			return (workflowsAndFolders.value || []).map((resource) => {
				if (resource.resource === "folder") return {
					resourceType: "folder",
					id: resource.id,
					name: resource.name,
					createdAt: resource.createdAt.toString(),
					updatedAt: resource.updatedAt.toString(),
					homeProject: resource.homeProject,
					workflowCount: resource.workflowCount,
					subFolderCount: resource.subFolderCount,
					parentFolder: resource.parentFolder
				};
				else return {
					resourceType: "workflow",
					id: resource.id,
					name: resource.name,
					description: resource.description,
					active: resource.active ?? false,
					activeVersionId: resource.activeVersionId,
					isArchived: resource.isArchived,
					updatedAt: resource.updatedAt.toString(),
					createdAt: resource.createdAt.toString(),
					homeProject: resource.homeProject,
					scopes: resource.scopes,
					sharedWithProjects: resource.sharedWithProjects,
					readOnly: !getResourcePermissions(resource.scopes).workflow.update,
					tags: resource.tags,
					parentFolder: resource.parentFolder,
					settings: resource.settings,
					hasResolvableCredentials: resource.hasResolvableCredentials
				};
			});
		});
		const statusFilterOptions = computed(() => [
			{
				label: i18n.baseText("workflows.filters.status.all"),
				value: StatusFilter.ALL
			},
			{
				label: i18n.baseText("workflows.filters.status.active"),
				value: StatusFilter.ACTIVE
			},
			{
				label: i18n.baseText("workflows.filters.status.deactivated"),
				value: StatusFilter.DEACTIVATED
			}
		]);
		const showReadyToRunWorkflowsCallout = computed(() => {
			const isEnabled = readyToRunWorkflowsStore.isFeatureEnabled;
			const isDismissed = readyToRunWorkflowsStore.isCalloutDismissed;
			return isEnabled && !isDismissed && !loading.value && !readOnlyEnv.value && (projectPages.isOverviewSubPage || hasPermissionToCreateFolders.value && hasPermissionToCreateWorkflows.value);
		});
		const hasFilters = computed(() => {
			return !!(filters.value.search || filters.value.status !== StatusFilter.ALL || filters.value.showArchived || filters.value.tags.length);
		});
		const showArchivedOnlyHint = computed(() => {
			return workflowsAndFolders.value.length === 0 && !hasFilters.value && !filters.value.showArchived && foldersStore.totalWorkflowCount > 0;
		});
		const isSelfHostedDeployment = computed(() => settingsStore.deploymentType === "default");
		const canUserRegisterCommunityPlus = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).community.register);
		const showRegisteredCommunityCTA = computed(() => isSelfHostedDeployment.value && !foldersEnabled.value && canUserRegisterCommunityPlus.value);
		const showAIStarterCollectionCallout = computed(() => {
			return !loading.value && aiStarterTemplatesStore.isFeatureEnabled && !aiStarterTemplatesStore.calloutDismissed && !readOnlyEnv.value && (projectPages.isOverviewSubPage || hasPermissionToCreateFolders.value && hasPermissionToCreateWorkflows.value);
		});
		const showPersonalizedTemplates = computed(() => !loading.value && personalizedTemplatesStore.isFeatureEnabled());
		const shouldUseSimplifiedLayout = computed(() => {
			const simplifiedLayoutVisible = readyToRunStore.getSimplifiedLayoutVisibility(route);
			return !loading.value && simplifiedLayoutVisible;
		});
		const hasActiveCallouts = computed(() => {
			return showAIStarterCollectionCallout.value || showPersonalizedTemplates.value || showReadyToRunWorkflowsCallout.value;
		});
		const showStartFromScratchCard = computed(() => {
			return !loading.value && !showRecommendedTemplatesInline.value && !readOnlyEnv.value && projectPermissions.value.workflow.create;
		});
		/**
		* WATCHERS, STORE SUBSCRIPTIONS AND EVENT BUS HANDLERS
		*/
		watch([() => route.params?.projectId, () => route.name], async () => {
			loading.value = true;
		});
		watch(() => route.params?.folderId, async (newVal) => {
			currentFolderId.value = newVal;
			filters.value.search = "";
			saveFiltersOnQueryString();
			await Promise.all([fetchWorkflows(), foldersStore.fetchTotalWorkflowsAndFoldersCount(route.params.projectId, currentFolderId.value ?? void 0)]);
		});
		sourceControlStore.$onAction(({ name, after }) => {
			if (name !== "pullWorkfolder") return;
			after(async () => await initialize());
		});
		const refreshWorkflows = async () => {
			await Promise.all([fetchWorkflows(), foldersStore.fetchTotalWorkflowsAndFoldersCount(route.params.projectId, currentFolderId.value ?? void 0)]);
		};
		const onFolderDeleted = async (payload) => {
			const folderInfo = foldersStore.getCachedFolder(payload.folderId);
			foldersStore.deleteFoldersFromCache([payload.folderId, folderInfo?.parentFolder ?? ""]);
			const nextFolderId = currentFolderId.value === payload.folderId ? folderInfo?.parentFolder ?? null : currentFolderId.value;
			await foldersStore.fetchTotalWorkflowsAndFoldersCount(route.params.projectId, nextFolderId ?? void 0);
			if (currentFolderId.value === payload.folderId) router.push({
				name: VIEWS.PROJECTS_FOLDERS,
				params: {
					projectId: route.params.projectId,
					folderId: folderInfo?.parentFolder ?? ""
				}
			});
			else await fetchWorkflows();
			telemetry.track("User deleted folder", {
				folder_id: payload.folderId,
				deleted_sub_folders: payload.folderCount,
				deleted_sub_workflows: payload.workflowCount
			});
		};
		const showInsights = computed(() => {
			return projectPages.isOverviewSubPage && insightsStore.isSummaryEnabled && (workflowListResources.value.length > 0 || !personalizedTemplatesV2Store.isFeatureEnabled() && !personalizedTemplatesV3Store.isFeatureEnabled());
		});
		const showTemplateRecommendationV2 = computed(() => {
			return personalizedTemplatesV2Store.isFeatureEnabled() && !loading.value;
		});
		const showTemplateRecommendationV3 = computed(() => {
			return personalizedTemplatesV3Store.isFeatureEnabled() && !loading.value;
		});
		/**
		* LIFE-CYCLE HOOKS
		*/
		onMounted(async () => {
			documentTitle.set(i18n.baseText("workflows.heading"));
			usersStore.showPersonalizationSurvey();
			workflowListEventBus.on("resource-moved", fetchWorkflows);
			workflowListEventBus.on("workflow-duplicated", fetchWorkflows);
			workflowListEventBus.on("folder-deleted", onFolderDeleted);
			workflowListEventBus.on("folder-moved", moveFolder);
			workflowListEventBus.on("folder-transferred", onFolderTransferred);
			workflowListEventBus.on("workflow-moved", onWorkflowMoved);
			workflowListEventBus.on("workflow-transferred", onWorkflowTransferred);
		});
		onBeforeUnmount(() => {
			workflowListEventBus.off("resource-moved", fetchWorkflows);
			workflowListEventBus.off("workflow-duplicated", fetchWorkflows);
			workflowListEventBus.off("folder-deleted", onFolderDeleted);
			workflowListEventBus.off("folder-moved", moveFolder);
			workflowListEventBus.off("folder-transferred", onFolderTransferred);
			workflowListEventBus.off("workflow-moved", onWorkflowMoved);
			workflowListEventBus.off("workflow-transferred", onWorkflowTransferred);
		});
		/**
		* METHODS
		*/
		const isInitializing = ref(false);
		const initialize = async () => {
			if (isInitializing.value) return;
			isInitializing.value = true;
			try {
				loading.value = true;
				await setFiltersFromQueryString();
				currentFolderId.value = route.params.folderId;
				await Promise.all([
					fetchWorkflows(),
					workflowsListStore.fetchActiveWorkflows(),
					usageStore.getLicenseInfo(),
					foldersStore.fetchTotalWorkflowsAndFoldersCount(route.params.projectId, currentFolderId.value ?? void 0)
				]);
				if (foldersStore.totalWorkflowCount === 0 && projectPages.isOverviewSubPage) {
					const variablesEnabled = settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables];
					const dataTablesEnabled = settingsStore.isDataTableFeatureEnabled;
					loading.value = true;
					try {
						await Promise.all([
							credentialsStore.fetchAllCredentials(),
							variablesEnabled ? environmentsStore.fetchAllVariables() : Promise.resolve(),
							dataTablesEnabled ? dataTableStore.fetchDataTables("", 1, 1) : Promise.resolve()
						]);
					} catch (error) {
						toast.showError(error, i18n.baseText("workflows.list.error.fetching.emptyStateData"));
					}
				}
				breadcrumbsLoading.value = false;
			} finally {
				loading.value = false;
				isInitializing.value = false;
			}
		};
		/**
		* Fetches:
		* - Current workflows and folders page
		* - Total count of workflows and folders in the current project
		* - Path to the current folder (if not cached)
		*/
		const fetchWorkflows = async () => {
			const isCurrent = nextFetch();
			const delayedLoading = (0, import_debounce.default)(() => {
				loading.value = true;
			}, 300);
			const routeProjectId = route.params?.projectId;
			const homeProjectFilter = filters.value.homeProject || void 0;
			const parentFolder = route.params?.folderId || void 0;
			const tags = filters.value.tags.length ? filters.value.tags.map((tagId) => tagsStore.tagsById[tagId]?.name) : [];
			const activeFilter = filters.value.status === StatusFilter.ALL ? void 0 : filters.value.status === StatusFilter.ACTIVE;
			const archivedFilter = filters.value.showArchived ? void 0 : false;
			const fetchFolders = showFolders.value && !tags.length && activeFilter === void 0;
			try {
				const fetchedResources = await workflowsListStore.fetchWorkflowsPage(routeProjectId ?? homeProjectFilter, currentPage.value, pageSize.value, currentSort.value, {
					query: filters.value.search || void 0,
					active: activeFilter,
					isArchived: archivedFilter,
					tags: tags.length ? tags : void 0,
					parentFolderId: getParentFolderId(parentFolder)
				}, fetchFolders, projectPages.isSharedSubPage);
				if (!isCurrent()) return [];
				foldersStore.cacheFolders(fetchedResources.filter((resource) => resource.resource === "folder").map((r) => ({
					id: r.id,
					name: r.name,
					parentFolder: r.parentFolder?.id
				})));
				const isCurrentFolderCached = foldersStore.breadcrumbsCache[parentFolder ?? ""] !== void 0;
				if (parentFolder && !isCurrentFolderCached && routeProjectId) {
					breadcrumbsLoading.value = true;
					await foldersStore.getFolderPath(routeProjectId, parentFolder);
					breadcrumbsLoading.value = false;
				}
				workflowsAndFolders.value = fetchedResources;
				const workflowIds = fetchedResources.filter((r) => r.resource === "workflow" || r.resource === void 0).map((r) => r.id);
				if (workflowIds.length > 0) fetchDependencyCounts(workflowIds, "workflow");
				showCardsBadge.value = projectPages.isOverviewSubPage || projectPages.isSharedSubPage || filters.value.search !== "" || filters.value.tags.length > 0;
				return fetchedResources;
			} catch (error) {
				if (!isCurrent()) return [];
				toast.showError(error, i18n.baseText("workflows.list.error.fetching"));
				router.push({
					name: VIEWS.PROJECTS_FOLDERS,
					params: { projectId: routeProjectId }
				});
				return [];
			} finally {
				delayedLoading.cancel();
				if (isCurrent()) {
					loading.value = false;
					if (breadcrumbsLoading.value) breadcrumbsLoading.value = false;
				}
			}
		};
		/**
		* Get parent folder id for filtering requests
		*/
		const getParentFolderId = (routeId) => {
			if (routeId !== null && routeId !== void 0) return routeId;
			if (projectPages.isOverviewSubPage || projectPages.isSharedSubPage || filters?.value.search) return;
			if (filters.value.tags.length > 0) return;
			return "0";
		};
		const onFiltersUpdated = async () => {
			currentPage.value = 1;
			saveFiltersOnQueryString();
			if (!loading.value) await callDebounced(fetchWorkflows, {
				debounceTime: FILTERS_DEBOUNCE_TIME,
				trailing: true
			});
		};
		const onSearchUpdated = async (search) => {
			currentPage.value = 1;
			saveFiltersOnQueryString();
			if (search) await callDebounced(fetchWorkflows, {
				debounceTime: SEARCH_DEBOUNCE_TIME,
				trailing: true
			});
			else await fetchWorkflows();
		};
		const setPaginationAndSort = async (payload) => {
			if (payload.page) currentPage.value = payload.page;
			if (payload.pageSize) pageSize.value = payload.pageSize;
			if (payload.sort) currentSort.value = WORKFLOWS_SORT_MAP[payload.sort] ?? "updatedAt:desc";
			if (!loading.value) await callDebounced(fetchWorkflows, {
				debounceTime: FILTERS_DEBOUNCE_TIME,
				trailing: true
			});
		};
		const onClickTag = async (tagId) => {
			if (!filters.value.tags.includes(tagId)) {
				filters.value.tags.push(tagId);
				currentPage.value = 1;
				saveFiltersOnQueryString();
				await fetchWorkflows();
			}
		};
		const saveFiltersOnQueryString = () => {
			const currentQuery = { ...route.query };
			if (filters.value.search) currentQuery.search = filters.value.search;
			else delete currentQuery.search;
			if (filters.value.status !== StatusFilter.ALL) currentQuery.status = (filters.value.status === StatusFilter.ACTIVE).toString();
			else delete currentQuery.status;
			if (filters.value.showArchived) currentQuery.showArchived = "true";
			else delete currentQuery.showArchived;
			if (filters.value.tags.length) currentQuery.tags = filters.value.tags.join(",");
			else delete currentQuery.tags;
			if (filters.value.homeProject) currentQuery.homeProject = filters.value.homeProject;
			else delete currentQuery.homeProject;
			router.replace({ query: Object.keys(currentQuery).length ? currentQuery : void 0 });
		};
		const setFiltersFromQueryString = async () => {
			const newQuery = { ...route.query };
			const { tags, status, search, homeProject, sort, showArchived } = route.query ?? {};
			const isValidString = (value) => typeof value === "string" && value.trim().length > 0;
			if (isValidString(homeProject)) {
				await projectsStore.getAvailableProjects();
				if (isValidProjectId(homeProject)) {
					newQuery.homeProject = homeProject;
					filters.value.homeProject = homeProject;
				} else delete newQuery.homeProject;
			} else delete newQuery.homeProject;
			if (isValidString(search)) {
				newQuery.search = search;
				filters.value.search = search;
			} else delete newQuery.search;
			if (isValidString(tags)) {
				await tagsStore.fetchAll();
				const validTags = tags.split(",").filter((tag) => tagsStore.allTags.map((t) => t.id).includes(tag));
				if (validTags.length) {
					newQuery.tags = validTags.join(",");
					filters.value.tags = validTags;
				} else delete newQuery.tags;
			} else delete newQuery.tags;
			if (isValidString(status)) {
				newQuery.status = status;
				filters.value.status = status === "true" ? StatusFilter.ACTIVE : StatusFilter.DEACTIVATED;
			} else delete newQuery.status;
			if (isValidString(sort)) {
				const newSort = WORKFLOWS_SORT_MAP[sort] ?? "updatedAt:desc";
				newQuery.sort = sort;
				currentSort.value = newSort;
			} else delete newQuery.sort;
			if (isValidString(showArchived)) {
				newQuery.showArchived = showArchived;
				filters.value.showArchived = showArchived === "true";
			} else {
				delete newQuery.showArchived;
				filters.value.showArchived = false;
			}
			router.replace({ query: newQuery });
		};
		const addWorkflow = () => {
			uiStore.nodeViewInitialized = false;
			router.push({
				name: VIEWS.NEW_WORKFLOW,
				query: {
					projectId: route.params?.projectId,
					parentFolderId: route.params?.folderId
				}
			});
			telemetry.track("User clicked add workflow button", { source: "Workflows list" });
			trackEmptyCardClick("blank");
		};
		const trackEmptyCardClick = (option) => {
			telemetry.track("User clicked empty page option", { option });
		};
		function isValidProjectId(projectId) {
			return projectsStore.availableProjects.some((project) => project.id === projectId);
		}
		const createAIStarterWorkflows = async (source) => {
			try {
				const projectId = projectPages.isOverviewSubPage ? personalProject.value?.id : route.params.projectId;
				if (typeof projectId !== "string") {
					toast.showError(/* @__PURE__ */ new Error(), i18n.baseText("workflows.ai.starter.collection.error"));
					return;
				}
				const newFolder = await aiStarterTemplatesStore.createStarterWorkflows(projectId, currentFolderId.value ?? void 0);
				if (projectPages.isOverviewSubPage) await router.push({
					name: VIEWS.PROJECTS_FOLDERS,
					params: {
						projectId,
						folderId: newFolder.id
					}
				});
				else workflowsAndFolders.value.unshift({
					id: newFolder.id,
					name: newFolder.name,
					resource: "folder",
					createdAt: newFolder.createdAt,
					updatedAt: newFolder.updatedAt,
					subFolderCount: 0,
					workflowCount: 3,
					parentFolder: newFolder.parentFolder
				});
				aiStarterTemplatesStore.trackUserCreatedStarterCollection(source);
			} catch (error) {
				toast.showError(error, i18n.baseText("workflows.ai.starter.collection.error"));
				return;
			}
		};
		const handleCreateReadyToRunWorkflows = async (source) => {
			try {
				const projectId = projectPages.isOverviewSubPage ? personalProject.value?.id : route.params.projectId;
				if (typeof projectId !== "string") {
					toast.showError(/* @__PURE__ */ new Error(), i18n.baseText("workflows.readyToRunWorkflows.error"));
					return;
				}
				const newFolder = await readyToRunWorkflowsStore.createWorkflows(projectId, currentFolderId.value ?? void 0);
				readyToRunWorkflowsStore.trackCreateWorkflows(source);
				if (projectPages.isOverviewSubPage) await router.push({
					name: VIEWS.PROJECTS_FOLDERS,
					params: {
						projectId,
						folderId: newFolder.id
					}
				});
				else workflowsAndFolders.value.unshift({
					id: newFolder.id,
					name: newFolder.name,
					resource: "folder",
					createdAt: newFolder.createdAt,
					updatedAt: newFolder.updatedAt,
					subFolderCount: 0,
					workflowCount: 4,
					parentFolder: newFolder.parentFolder
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("workflows.readyToRunWorkflows.error"));
				return;
			}
		};
		const dismissStarterCollectionCallout = () => {
			aiStarterTemplatesStore.dismissCallout();
			aiStarterTemplatesStore.trackUserDismissedCallout();
		};
		const onShowArchived = async () => {
			filters.value.showArchived = true;
			await onFiltersUpdated();
		};
		const handleDismissReadyToRunCallout = () => {
			readyToRunWorkflowsStore.dismissCallout();
			readyToRunWorkflowsStore.trackDismissCallout();
		};
		const onWorkflowActiveToggle = async (data) => {
			const workflow = workflowsAndFolders.value.find((w) => w.id === data.id);
			if (!workflow) return;
			workflow.active = data.active;
			workflow.activeVersionId = data.active ? workflow.versionId : null;
			try {
				const updatedWorkflow = await workflowsListStore.fetchWorkflow(data.id);
				if (updatedWorkflow.settings) workflow.settings = updatedWorkflow.settings;
			} catch (error) {
				toast.showError(error, i18n.baseText("workflows.list.error.fetching.one"));
			}
		};
		const onWorkflowUnpublished = async (data) => {
			const workflow = workflowsAndFolders.value.find((w) => w.id === data.id);
			if (!workflow) return;
			workflow.activeVersionId = null;
		};
		const getFolderListItem = (folderId) => {
			return workflowsAndFolders.value.find((resource) => resource.resource === "folder" && resource.id === folderId);
		};
		const getFolderContent = async (folderId) => {
			const folderListItem = getFolderListItem(folderId);
			if (folderListItem) return {
				workflowCount: folderListItem.workflowCount,
				subFolderCount: folderListItem.subFolderCount
			};
			try {
				const content = await foldersStore.fetchFolderContent(currentProject.value?.id ?? "", folderId);
				return {
					workflowCount: content.totalWorkflows,
					subFolderCount: content.totalSubFolders
				};
			} catch (error) {
				toast.showMessage({
					title: i18n.baseText("folders.delete.error.message"),
					message: i18n.baseText("folders.not.found.message"),
					type: "error"
				});
				return {
					workflowCount: 0,
					subFolderCount: 0
				};
			}
		};
		const onFolderCardDrop = async (event) => {
			const { draggedResource, dropTarget } = folderHelpers.handleDrop(event);
			if (!draggedResource || !dropTarget) return;
			await moveResourceOnDrop(draggedResource, dropTarget);
		};
		const onBreadCrumbsItemDrop = async (item) => {
			if (!foldersStore.draggedElement) return;
			await moveResourceOnDrop({
				id: foldersStore.draggedElement.id,
				type: foldersStore.draggedElement.type,
				name: foldersStore.draggedElement.name
			}, {
				id: item.id,
				type: "folder",
				name: item.label
			});
			folderHelpers.onDragEnd();
		};
		const moveFolderToProjectRoot = async (id, name) => {
			if (!foldersStore.draggedElement) return;
			await moveResourceOnDrop({
				id: foldersStore.draggedElement.id,
				type: foldersStore.draggedElement.type,
				name: foldersStore.draggedElement.name
			}, {
				id,
				type: "project",
				name
			});
			folderHelpers.onDragEnd();
		};
		/**
		* Perform resource move on drop, also handles toast messages and updating the UI
		* @param draggedResource
		* @param dropTarget
		*/
		const moveResourceOnDrop = async (draggedResource, dropTarget) => {
			if (draggedResource.type === "folder") {
				await moveFolder({
					folder: {
						id: draggedResource.id,
						name: draggedResource.name
					},
					newParent: {
						id: dropTarget.id,
						name: dropTarget.name,
						type: dropTarget.type
					},
					options: {
						skipFetch: true,
						skipNavigation: true
					}
				});
				workflowsAndFolders.value = workflowsAndFolders.value.filter((folder) => folder.id !== draggedResource.id);
				const targetFolder = getFolderListItem(dropTarget.id);
				if (targetFolder) targetFolder.subFolderCount += 1;
			} else if (draggedResource.type === "workflow") {
				await onWorkflowMoved({
					workflow: {
						id: draggedResource.id,
						name: draggedResource.name,
						oldParentId: currentFolderId.value ?? ""
					},
					newParent: {
						id: dropTarget.id,
						name: dropTarget.name,
						type: dropTarget.type
					},
					options: { skipFetch: true }
				});
				workflowsAndFolders.value = workflowsAndFolders.value.filter((workflow) => workflow.id !== draggedResource.id);
				const targetFolder = getFolderListItem(dropTarget.id);
				if (targetFolder) targetFolder.workflowCount += 1;
			}
		};
		const onBreadcrumbItemClick = (item) => {
			if (item.href) {
				loading.value = true;
				router.push(item.href).then(() => {
					currentFolderId.value = item.id;
					loading.value = false;
				}).catch((error) => {
					toast.showError(error, i18n.baseText("folders.open.error.title"));
				});
			}
		};
		const onBreadCrumbsAction = async (action) => {
			switch (action) {
				case MCP_ACCESS_ACTIONS.ENABLE:
					await toggleMcpAccess(true);
					break;
				case MCP_ACCESS_ACTIONS.DISABLE:
					await toggleMcpAccess(false);
					break;
				case FOLDER_LIST_ITEM_ACTIONS.CREATE:
					if (!currentBreadcrumbsProject.value) return;
					const currentParent = currentFolder.value?.name || currentBreadcrumbsProjectName.value;
					if (!currentParent) return;
					await createFolder({
						id: route.params.folderId ?? "-1",
						name: currentParent,
						type: currentFolder.value ? "folder" : "project"
					});
					break;
				case FOLDER_LIST_ITEM_ACTIONS.CREATE_WORKFLOW:
					addWorkflow();
					break;
				case FOLDER_LIST_ITEM_ACTIONS.DELETE:
					if (!route.params.folderId) return;
					const content = await getFolderContent(route.params.folderId);
					await deleteFolder(route.params.folderId, content.workflowCount, content.subFolderCount);
					break;
				case FOLDER_LIST_ITEM_ACTIONS.TOGGLE_FAVORITE:
					if (currentFolder.value) await favoritesStore.toggleFavorite(currentFolder.value.id, "folder");
					else if (currentBreadcrumbsProject.value) await favoritesStore.toggleFavorite(currentBreadcrumbsProject.value.id, "project");
					break;
				case FOLDER_LIST_ITEM_ACTIONS.RENAME:
					onNameToggle();
					break;
				case FOLDER_LIST_ITEM_ACTIONS.MOVE:
					if (!currentFolder.value) return;
					uiStore.openMoveToFolderModal("folder", {
						id: currentFolder.value?.id,
						name: currentFolder.value?.name,
						parentFolderId: currentFolder.value?.parentFolder
					}, workflowListEventBus);
					break;
				default: break;
			}
		};
		function getMcpAccessTarget(scope = mcpAccessScope.value) {
			if (!scope) return null;
			return scope.type === "folder" ? { folderId: scope.id } : { projectId: scope.id };
		}
		function openSettingsFromToast(event) {
			if (!(event?.target instanceof HTMLAnchorElement)) return;
			event.preventDefault();
			router.push(settingsLink.value);
		}
		function getMCPAccessUpdatedSummary(enabled, count, scopeName) {
			return enabled ? i18n.baseText("resourceActions.mcpAccess.summary.updated.enabled", {
				adjustToNumber: count,
				interpolate: {
					count: String(count),
					scopeName
				}
			}) : i18n.baseText("resourceActions.mcpAccess.summary.updated.disabled", {
				adjustToNumber: count,
				interpolate: {
					count: String(count),
					scopeName
				}
			});
		}
		function getMCPAccessUnchangedSummary(enabled, count, scopeName) {
			return enabled ? i18n.baseText("resourceActions.mcpAccess.summary.unchanged.enabled", {
				adjustToNumber: count,
				interpolate: {
					count: String(count),
					scopeName
				}
			}) : i18n.baseText("resourceActions.mcpAccess.summary.unchanged.disabled", {
				adjustToNumber: count,
				interpolate: {
					count: String(count),
					scopeName
				}
			});
		}
		function getMCPAccessSkippedSummary(count, scopeName) {
			return i18n.baseText("resourceActions.mcpAccess.summary.skipped", {
				adjustToNumber: count,
				interpolate: {
					count: String(count),
					scopeName
				}
			});
		}
		function getMCPAccessOutcomeMessage(enabled, response, scopeName) {
			const summaries = [];
			if (response.updatedCount > 0) summaries.push(getMCPAccessUpdatedSummary(enabled, response.updatedCount, scopeName));
			if (response.unchangedCount > 0) summaries.push(getMCPAccessUnchangedSummary(enabled, response.unchangedCount, scopeName));
			if (response.skippedCount > 0) summaries.push(getMCPAccessSkippedSummary(response.skippedCount, scopeName));
			if (summaries.length === 0) return i18n.baseText("resourceActions.mcpAccess.noWorkflows.message", { interpolate: {
				link: settingsLink.value,
				scopeName
			} });
			return i18n.baseText("resourceActions.mcpAccess.outcome.message", { interpolate: {
				link: settingsLink.value,
				summary: `${summaries.join(". ")}.`
			} });
		}
		function showMCPAccessOutcomeToast(enabled, response, scopeName) {
			const hasUpdated = response.updatedCount > 0;
			const hasSkipped = response.skippedCount > 0;
			const hasUnchanged = response.unchangedCount > 0;
			let title = i18n.baseText("resourceActions.mcpAccess.noWorkflows.title");
			let type = "info";
			if (hasSkipped) {
				title = i18n.baseText("resourceActions.mcpAccess.partial.title");
				type = "warning";
			} else if (hasUpdated) {
				title = enabled ? i18n.baseText("resourceActions.mcpAccess.success.enabled.title") : i18n.baseText("resourceActions.mcpAccess.success.disabled.title");
				type = "success";
			} else if (hasUnchanged) title = i18n.baseText("resourceActions.mcpAccess.noChanges.title");
			toast.showToast({
				title,
				message: getMCPAccessOutcomeMessage(enabled, response, scopeName),
				onClick: openSettingsFromToast,
				type
			});
		}
		function showMCPAccessErrorToast(enabled, scopeName) {
			const title = enabled ? i18n.baseText("resourceActions.mcpAccess.error.enabled.title") : i18n.baseText("resourceActions.mcpAccess.error.disabled.title");
			const message = enabled ? i18n.baseText("resourceActions.mcpAccess.error.enabled.message", { interpolate: {
				link: settingsLink.value,
				scopeName
			} }) : i18n.baseText("resourceActions.mcpAccess.error.disabled.message", { interpolate: {
				link: settingsLink.value,
				scopeName
			} });
			toast.showToast({
				title,
				message,
				onClick: openSettingsFromToast,
				type: "error",
				duration: 0
			});
		}
		function showMCPAccessDisabledToast() {
			toast.showToast({
				title: i18n.baseText("resourceActions.mcpAccess.disabled.title"),
				message: i18n.baseText("resourceActions.mcpAccess.disabled.message", { interpolate: { link: settingsLink.value } }),
				onClick: openSettingsFromToast,
				type: "warning"
			});
		}
		async function toggleMcpAccess(enabled, scope = mcpAccessScope.value) {
			if (!mcpEnabled.value) {
				showMCPAccessDisabledToast();
				return;
			}
			if (!scope) return;
			const target = getMcpAccessTarget(scope);
			if (!target) return;
			try {
				const response = await mcpStore.toggleWorkflowsMcpAccess(target, enabled);
				await fetchWorkflows();
				if (response.failedCount > 0) {
					showMCPAccessErrorToast(enabled, scope.name);
					return;
				}
				showMCPAccessOutcomeToast(enabled, response, scope.name);
			} catch {
				showMCPAccessErrorToast(enabled, scope.name);
			}
		}
		const onFolderCardAction = async (payload) => {
			const clickedFolder = foldersStore.getCachedFolder(payload.folderId);
			if (!clickedFolder) return;
			switch (payload.action) {
				case MCP_ACCESS_ACTIONS.ENABLE:
					await toggleMcpAccess(true, {
						type: "folder",
						id: clickedFolder.id,
						name: clickedFolder.name
					});
					break;
				case MCP_ACCESS_ACTIONS.DISABLE:
					await toggleMcpAccess(false, {
						type: "folder",
						id: clickedFolder.id,
						name: clickedFolder.name
					});
					break;
				case FOLDER_LIST_ITEM_ACTIONS.CREATE:
					await createFolder({
						id: clickedFolder.id,
						name: clickedFolder.name,
						type: "folder"
					}, { openAfterCreate: true });
					break;
				case FOLDER_LIST_ITEM_ACTIONS.CREATE_WORKFLOW:
					currentFolderId.value = clickedFolder.id;
					router.push({
						name: VIEWS.NEW_WORKFLOW,
						query: {
							projectId: route.params?.projectId,
							parentFolderId: clickedFolder.id
						}
					});
					break;
				case FOLDER_LIST_ITEM_ACTIONS.DELETE: {
					const content = await getFolderContent(clickedFolder.id);
					await deleteFolder(clickedFolder.id, content.workflowCount, content.subFolderCount);
					break;
				}
				case FOLDER_LIST_ITEM_ACTIONS.RENAME:
					await renameFolder(clickedFolder.id);
					break;
				case FOLDER_LIST_ITEM_ACTIONS.MOVE:
					uiStore.openMoveToFolderModal("folder", {
						id: clickedFolder.id,
						name: clickedFolder.name,
						parentFolderId: clickedFolder.parentFolder
					}, workflowListEventBus);
					break;
				default: break;
			}
		};
		const createFolder = async (parent, options = { openAfterCreate: false }) => {
			const projectId = currentBreadcrumbsProject.value?.id;
			if (!projectId) return;
			const promptResponse = await message.prompt(i18n.baseText("folders.add.to.parent.message", { interpolate: { parent: parent.name } }), {
				confirmButtonText: i18n.baseText("generic.create"),
				cancelButtonText: i18n.baseText("generic.cancel"),
				inputValidator: folderHelpers.validateFolderName,
				customClass: "add-folder-modal"
			});
			if (promptResponse.action === "confirm") {
				const folderName = promptResponse.value;
				try {
					const newFolder = await foldersStore.createFolder(folderName, projectId, parent.type === "folder" ? parent.id : void 0);
					const newFolderURL = router.resolve({
						name: VIEWS.PROJECTS_FOLDERS,
						params: {
							projectId,
							folderId: newFolder.id
						}
					}).href;
					toast.showToast({
						title: i18n.baseText("folders.add.success.title"),
						message: i18n.baseText("folders.add.success.message", { interpolate: {
							link: newFolderURL,
							folderName: newFolder.name
						} }),
						onClick: (event) => {
							if (event?.target instanceof HTMLAnchorElement) {
								event.preventDefault();
								router.push(newFolderURL);
							}
						},
						type: "success"
					});
					telemetry.track("User created folder", { folder_id: newFolder.id });
					if (options.openAfterCreate) await router.push({
						name: VIEWS.PROJECTS_FOLDERS,
						params: {
							projectId,
							folderId: parent.id
						}
					});
					else if (!workflowsAndFolders.value.length) {
						workflowsAndFolders.value = [{
							id: newFolder.id,
							name: newFolder.name,
							resource: "folder",
							createdAt: newFolder.createdAt,
							updatedAt: newFolder.updatedAt,
							homeProject: currentBreadcrumbsProject.value,
							workflowCount: 0,
							subFolderCount: 0
						}];
						foldersStore.cacheFolders([{
							id: newFolder.id,
							name: newFolder.name,
							parentFolder: currentFolder.value?.id
						}]);
					} else await fetchWorkflows();
				} catch (error) {
					toast.showError(error, i18n.baseText("folders.create.error.title"));
				}
			}
		};
		const renameFolder = async (folderId) => {
			const folder = foldersStore.getCachedFolder(folderId);
			if (!folder || !currentProject.value) return;
			const promptResponse = await message.prompt(i18n.baseText("folders.rename.message", { interpolate: { folderName: folder.name } }), {
				confirmButtonText: i18n.baseText("generic.rename"),
				cancelButtonText: i18n.baseText("generic.cancel"),
				inputValue: folder.name,
				customClass: "rename-folder-modal",
				inputValidator: folderHelpers.validateFolderName
			});
			if (promptResponse.action === "confirm") {
				const newFolderName = promptResponse.value;
				try {
					await foldersStore.renameFolder(currentProject.value?.id, folderId, newFolderName);
					foldersStore.breadcrumbsCache[folderId].name = newFolderName;
					toast.showMessage({
						title: i18n.baseText("folders.rename.success.message", { interpolate: { folderName: newFolderName } }),
						type: "success"
					});
					await fetchWorkflows();
					telemetry.track("User renamed folder", { folder_id: folderId });
				} catch (error) {
					toast.showError(error, i18n.baseText("folders.rename.error.title"));
				}
			}
		};
		const createFolderInCurrent = async () => {
			if (showRegisteredCommunityCTA.value) {
				uiStore.openModalWithData({
					name: COMMUNITY_PLUS_ENROLLMENT_MODAL,
					data: { customHeading: i18n.baseText("folders.registeredCommunity.cta.heading") }
				});
				return;
			}
			if (!currentBreadcrumbsProject.value) return;
			const currentParent = currentFolder.value?.name || currentBreadcrumbsProjectName.value;
			if (!currentParent) return;
			await createFolder({
				id: route.params.folderId ?? "-1",
				name: currentParent,
				type: currentFolder.value ? "folder" : "project"
			});
		};
		const deleteFolder = async (folderId, workflowCount, subFolderCount) => {
			if (subFolderCount || workflowCount) uiStore.openDeleteFolderModal(folderId, workflowListEventBus, {
				workflowCount,
				subFolderCount
			});
			else {
				await foldersStore.deleteFolder(route.params.projectId, folderId);
				toast.showMessage({
					title: i18n.baseText("folders.delete.success.message"),
					type: "success"
				});
				await onFolderDeleted({
					folderId,
					workflowCount,
					folderCount: subFolderCount
				});
			}
		};
		const moveFolder = async (payload) => {
			if (!route.params.projectId) return;
			loading.value = true;
			try {
				if (!payload.options?.skipApiCall) await foldersStore.moveFolder(route.params.projectId, payload.folder.id, payload.newParent.type === "folder" ? payload.newParent.id : "0");
				const isCurrentFolder = currentFolderId.value === payload.folder.id;
				const newFolderURL = router.resolve({
					name: VIEWS.PROJECTS_FOLDERS,
					params: {
						projectId: route.params.projectId,
						folderId: payload.newParent.type === "folder" ? payload.newParent.id : void 0
					}
				}).href;
				if (isCurrentFolder && !payload.options?.skipNavigation) {
					router.push(newFolderURL);
					toast.showMessage({
						title: i18n.baseText("folders.move.success.title"),
						message: i18n.baseText("folders.move.success.messageNoAccess", { interpolate: {
							folderName: payload.folder.name,
							newFolderName: payload.newParent.name
						} }),
						type: "success"
					});
				} else {
					toast.showToast({
						title: i18n.baseText("folders.move.success.title"),
						message: i18n.baseText("folders.move.success.message", { interpolate: {
							folderName: payload.folder.name,
							newFolderName: payload.newParent.name
						} }),
						onClick: (event) => {
							if (event?.target instanceof HTMLAnchorElement) {
								event.preventDefault();
								router.push(newFolderURL);
							}
						},
						type: "success"
					});
					if (!payload.options?.skipFetch) await fetchWorkflows();
				}
			} catch (error) {
				toast.showError(error, i18n.baseText("folders.move.error.title"));
			} finally {
				loading.value = false;
			}
		};
		const onFolderTransferred = async (payload) => {
			loading.value = true;
			try {
				const isCurrentFolder = currentFolderId.value === payload.source.folder.id;
				const newFolderURL = router.resolve({
					name: VIEWS.PROJECTS_FOLDERS,
					params: {
						projectId: payload.destination.canAccess ? payload.destination.projectId : payload.source.projectId,
						folderId: payload.destination.canAccess ? payload.source.folder.id : void 0
					}
				}).href;
				if (isCurrentFolder) if (payload.destination.canAccess) router.push(newFolderURL);
				else router.push({
					name: VIEWS.PROJECTS_WORKFLOWS,
					params: { projectId: payload.source.projectId }
				});
				else {
					await refreshWorkflows();
					if (payload.destination.canAccess) toast.showToast({
						title: i18n.baseText("folders.move.success.title"),
						message: i18n.baseText("folders.move.success.message", { interpolate: {
							folderName: payload.source.folder.name,
							newFolderName: payload.destination.parentFolder.name
						} }),
						onClick: (event) => {
							if (event?.target instanceof HTMLAnchorElement) {
								event.preventDefault();
								router.push(newFolderURL);
							}
						},
						type: "success"
					});
					else toast.showToast({
						title: i18n.baseText("folders.move.success.title"),
						message: i18n.baseText("folders.move.success.messageNoAccess", { interpolate: {
							folderName: payload.source.folder.name,
							newFolderName: payload.destination.parentFolder.name
						} }),
						type: "success"
					});
				}
			} catch (error) {
				toast.showError(error, i18n.baseText("folders.move.error.title"));
			} finally {
				loading.value = false;
			}
		};
		const moveWorkflowToFolder = async (payload) => {
			if (showRegisteredCommunityCTA.value) {
				uiStore.openModalWithData({
					name: COMMUNITY_PLUS_ENROLLMENT_MODAL,
					data: { customHeading: i18n.baseText("folders.registeredCommunity.cta.heading") }
				});
				return;
			}
			uiStore.openMoveToFolderModal("workflow", {
				id: payload.id,
				name: payload.name,
				parentFolderId: payload.parentFolderId,
				sharedWithProjects: payload.sharedWithProjects,
				homeProjectId: payload.homeProjectId
			}, workflowListEventBus);
		};
		const onWorkflowTransferred = async (payload) => {
			loading.value = true;
			try {
				await refreshWorkflows();
				if (payload.destination.canAccess) toast.showToast({
					title: i18n.baseText("folders.move.workflow.success.title"),
					message: i18n.baseText("folders.move.workflow.success.message", { interpolate: {
						workflowName: payload.source.workflow.name,
						newFolderName: payload.destination.parentFolder.name
					} }),
					onClick: (event) => {
						if (event?.target instanceof HTMLAnchorElement) {
							event.preventDefault();
							router.push({
								name: VIEWS.PROJECTS_FOLDERS,
								params: {
									projectId: payload.destination.projectId,
									folderId: payload.destination.parentFolder.id
								}
							});
						}
					},
					type: "success"
				});
				else toast.showToast({
					title: i18n.baseText("folders.move.workflow.success.title"),
					message: i18n.baseText("folders.move.workflow.success.messageNoAccess", { interpolate: {
						workflowName: payload.source.workflow.name,
						newFolderName: payload.destination.parentFolder.name
					} }),
					type: "success"
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("folders.move.workflow.error.title"));
			} finally {
				loading.value = false;
			}
		};
		const onWorkflowMoved = async (payload) => {
			if (!route.params.projectId) return;
			loading.value = true;
			try {
				const newFolderURL = router.resolve({
					name: VIEWS.PROJECTS_FOLDERS,
					params: {
						projectId: route.params.projectId,
						folderId: payload.newParent.type === "folder" ? payload.newParent.id : void 0
					}
				}).href;
				if (!payload.options?.skipApiCall) {
					const workflowResource = workflowsAndFolders.value.find((resource) => resource.id === payload.workflow.id);
					await workflowsStore.updateWorkflow(payload.workflow.id, {
						parentFolderId: payload.newParent.type === "folder" ? payload.newParent.id : "0",
						versionId: workflowResource?.versionId
					});
				}
				if (!payload.options?.skipFetch) await fetchWorkflows();
				toast.showToast({
					title: i18n.baseText("folders.move.workflow.success.title"),
					message: i18n.baseText("folders.move.workflow.success.message", { interpolate: {
						workflowName: payload.workflow.name,
						newFolderName: payload.newParent.name
					} }),
					onClick: (event) => {
						if (event?.target instanceof HTMLAnchorElement) {
							event.preventDefault();
							router.push(newFolderURL);
						}
					},
					type: "success"
				});
				telemetry.track("User moved content", {
					workflow_id: payload.workflow.id,
					source_folder_id: payload.workflow.oldParentId,
					destination_folder_id: payload.newParent.id
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("folders.move.workflow.error.title"));
			} finally {
				loading.value = false;
			}
		};
		const onCreateWorkflowClick = () => {
			router.push({
				name: VIEWS.NEW_WORKFLOW,
				query: {
					projectId: currentProject.value?.id,
					parentFolderId: route.params.folderId
				}
			});
		};
		const renameInput = useTemplateRef("renameInput");
		function onNameToggle() {
			setTimeout(() => {
				if (renameInput.value?.forceFocus) renameInput.value.forceFocus();
			}, 0);
		}
		const onNameSubmit = async (name) => {
			if (!currentFolder.value || !currentProject.value) return;
			const newName = name.trim();
			if (!newName) {
				toast.showMessage({
					title: i18n.baseText("renameAction.emptyName.title"),
					message: i18n.baseText("renameAction.emptyName.message"),
					type: "error"
				});
				return;
			}
			if (newName === currentFolder.value.name) {
				renameInput.value?.forceCancel();
				return;
			}
			const validationResult = folderHelpers.validateFolderName(newName);
			if (typeof validationResult === "string") {
				toast.showMessage({
					title: i18n.baseText("renameAction.invalidName.title"),
					message: validationResult,
					type: "error"
				});
				renameInput.value?.forceCancel();
				return;
			} else try {
				await foldersStore.renameFolder(currentProject.value?.id, currentFolder.value.id, newName);
				foldersStore.breadcrumbsCache[currentFolder.value.id].name = newName;
				toast.showMessage({
					title: i18n.baseText("folders.rename.success.message", { interpolate: { folderName: newName } }),
					type: "success"
				});
				telemetry.track("User renamed folder", { folder_id: currentFolder.value.id });
			} catch (error) {
				toast.showError(error, i18n.baseText("folders.rename.error.title"));
				renameInput.value?.forceCancel();
			}
		};
		return (_ctx, _cache) => {
			return shouldUseSimplifiedLayout.value ? (openBlock(), createBlock(EmptyStateLayout_default, {
				key: 0,
				"onClick:add": addWorkflow
			})) : (openBlock(), createBlock(ResourcesListLayout_default, {
				key: 1,
				ref: "resourcesListLayout",
				filters: filters.value,
				"onUpdate:filters": [_cache[3] || (_cache[3] = ($event) => filters.value = $event), onFiltersUpdated],
				"resource-key": "workflows",
				type: "list-paginated",
				resources: workflowListResources.value,
				"type-props": { itemSize: 80 },
				shareable: isShareable.value,
				initialize,
				disabled: unref(readOnlyEnv) || !unref(projectPermissions).workflow.create,
				loading: false,
				"resources-refreshing": loading.value,
				"custom-page-size": unref(50),
				"total-items": unref(workflowsListStore).totalWorkflowCount,
				"dont-perform-sorting-and-filtering": true,
				"has-empty-state": unref(foldersStore).totalWorkflowCount === 0 && !currentFolderId.value,
				"onClick:add": addWorkflow,
				"onUpdate:search": onSearchUpdated,
				"onUpdate:paginationAndSort": setPaginationAndSort,
				onMouseleave: unref(folderHelpers).resetDropTarget
			}, createSlots({
				header: withCtx(() => [createVNode(ProjectHeader_default, {
					"has-active-callouts": hasActiveCallouts.value,
					onCreateFolder: createFolderInCurrent
				}, {
					default: withCtx(() => [showInsights.value ? (openBlock(), createBlock(InsightsSummary_default, {
						key: 0,
						loading: unref(insightsStore).weeklySummary.isLoading,
						summary: unref(insightsStore).weeklySummary.state,
						"time-range": "week"
					}, null, 8, ["loading", "summary"])) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["has-active-callouts"])]),
				callout: withCtx(() => [showAIStarterCollectionCallout.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 0,
					theme: "secondary",
					icon: "gift",
					class: normalizeClass(_ctx.$style["easy-ai-workflow-callout"])
				}, {
					trailingContent: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["callout-trailing-content"]) }, [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						"data-test-id": "easy-ai-button",
						size: "small",
						onClick: _cache[0] || (_cache[0] = ($event) => createAIStarterWorkflows("callout"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.startNow")), 1)]),
						_: 1
					}), createVNode(unref(N8nIcon_default), {
						size: "small",
						icon: "x",
						title: unref(i18n).baseText("generic.dismiss"),
						class: "clickable",
						onClick: dismissStarterCollectionCallout
					}, null, 8, ["title"])], 2)]),
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.ai.starter.collection.callout")) + " ", 1)]),
					_: 1
				}, 8, ["class"])) : showPersonalizedTemplates.value ? (openBlock(), createBlock(SuggestedWorkflows_default, { key: 1 }, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(personalizedTemplatesStore).suggestedWorkflows, (workflow) => {
						return openBlock(), createBlock(SuggestedWorkflowCard_default, {
							key: workflow.id,
							"data-test-id": "resource-list-item-suggested-workflow",
							data: {
								id: workflow.id,
								name: workflow.name
							}
						}, null, 8, ["data"]);
					}), 128))]),
					_: 1
				})) : createCommentVNode("", true), showReadyToRunWorkflowsCallout.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 2,
					theme: "secondary",
					icon: "bolt-filled",
					class: normalizeClass(_ctx.$style["easy-ai-workflow-callout"])
				}, {
					trailingContent: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["callout-trailing-content"]) }, [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						"data-test-id": "easy-ai-button",
						size: "small",
						onClick: _cache[1] || (_cache[1] = ($event) => handleCreateReadyToRunWorkflows("callout"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.startNow")), 1)]),
						_: 1
					}), createVNode(unref(N8nIcon_default), {
						size: "small",
						icon: "x",
						title: unref(i18n).baseText("generic.dismiss"),
						class: "clickable",
						onClick: handleDismissReadyToRunCallout
					}, null, 8, ["title"])], 2)]),
					default: withCtx(() => [createTextVNode(toDisplayString(unref(readyToRunWorkflowsStore).getCalloutText()) + " ", 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)]),
				breadcrumbs: withCtx(() => [breadcrumbsLoading.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style["breadcrumbs-loading"])
				}, [createVNode(unref(N8nLoading_default), {
					loading: breadcrumbsLoading.value,
					rows: 1,
					variant: "p"
				}, null, 8, ["loading"])], 2)) : showMainBreadcrumbs.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style["breadcrumbs-container"]),
					"data-test-id": "main-breadcrumbs"
				}, [createVNode(FolderBreadcrumbs_default, {
					"current-folder": currentFolderParent.value,
					actions: breadcrumbsActions.value,
					"hidden-items-trigger": isDragging.value ? "hover" : "click",
					"current-folder-as-link": true,
					onItemSelected: onBreadcrumbItemClick,
					onAction: onBreadCrumbsAction,
					onItemDrop: onBreadCrumbsItemDrop,
					onProjectDrop: moveFolderToProjectRoot
				}, createSlots({ _: 2 }, [currentFolder.value ? {
					name: "append",
					fn: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style["path-separator"]) }, "/", 2), (openBlock(), createBlock(unref(N8nInlineTextEdit_default), {
						ref_key: "renameInput",
						ref: renameInput,
						key: currentFolder.value?.id,
						"data-test-id": "breadcrumbs-item-current",
						placeholder: unref(i18n).baseText("folders.rename.placeholder"),
						"model-value": currentFolder.value.name,
						"max-length": 30,
						"read-only": unref(readOnlyEnv) || !hasPermissionToUpdateFolders.value,
						class: normalizeClass({
							[_ctx.$style.name]: true,
							[_ctx.$style["pointer-disabled"]]: isDragging.value
						}),
						"onUpdate:modelValue": onNameSubmit
					}, null, 8, [
						"placeholder",
						"model-value",
						"read-only",
						"class"
					]))]),
					key: "0"
				} : void 0]), 1032, [
					"current-folder",
					"actions",
					"hidden-items-trigger"
				])], 2)) : createCommentVNode("", true)]),
				item: withCtx(({ item: data, index }) => [data.resourceType === "folder" ? (openBlock(), createBlock(Draggable_default, {
					key: `folder-${index}`,
					disabled: !isDragNDropEnabled.value,
					type: "move",
					"target-data-key": "folder",
					onDragstart: unref(folderHelpers).onDragStart,
					onDragend: unref(folderHelpers).onDragEnd
				}, {
					preview: withCtx(() => [createVNode(unref(N8nCard_default), null, {
						default: withCtx(() => [createVNode(unref(N8nText_default), {
							tag: "h2",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(data.name), 1)]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1024)]),
					default: withCtx(() => [createVNode(FolderCard_default, {
						data,
						actions: folderCardActions.value,
						"read-only": unref(readOnlyEnv) || !hasPermissionToDeleteFolders.value && !hasPermissionToCreateFolders.value,
						"personal-project": personalProject.value,
						"data-resourceid": data.id,
						"data-resourcename": data.name,
						class: normalizeClass([{
							["mb-2xs"]: true,
							[_ctx.$style["drag-active"]]: isDragging.value,
							[_ctx.$style.dragging]: unref(foldersStore).draggedElement?.type === "folder" && unref(foldersStore).draggedElement?.id === data.id,
							[_ctx.$style["drop-active"]]: unref(foldersStore).activeDropTarget?.id === data.id
						}, "mb-2xs"]),
						"show-ownership-badge": showCardsBadge.value,
						"show-mcp-access-actions": showMcpAccessActions.value,
						"data-target": "folder",
						"data-droppable": "",
						onAction: onFolderCardAction,
						onMouseenter: unref(folderHelpers).onDragEnter,
						onMouseup: onFolderCardDrop
					}, null, 8, [
						"data",
						"actions",
						"read-only",
						"personal-project",
						"data-resourceid",
						"data-resourcename",
						"class",
						"show-ownership-badge",
						"show-mcp-access-actions",
						"onMouseenter"
					])]),
					_: 2
				}, 1032, [
					"disabled",
					"onDragstart",
					"onDragend"
				])) : (openBlock(), createBlock(Draggable_default, {
					key: `workflow-${index}`,
					disabled: !isDragNDropEnabled.value,
					type: "move",
					"target-data-key": "workflow",
					onDragstart: unref(folderHelpers).onDragStart,
					onDragend: unref(folderHelpers).onDragEnd
				}, {
					preview: withCtx(() => [createVNode(unref(N8nCard_default), null, {
						default: withCtx(() => [createVNode(unref(N8nText_default), {
							tag: "h2",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(data.name), 1)]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1024)]),
					default: withCtx(() => [createVNode(WorkflowCard_default, {
						"data-test-id": "resources-list-item-workflow",
						"data-target": "workflow",
						class: normalizeClass({
							["mb-2xs"]: true,
							[_ctx.$style["drag-active"]]: isDragging.value,
							[_ctx.$style.dragging]: unref(foldersStore).draggedElement?.type === "workflow" && unref(foldersStore).draggedElement?.id === data.id
						}),
						data,
						"workflow-list-event-bus": unref(workflowListEventBus),
						"read-only": unref(readOnlyEnv),
						"data-resourceid": data.id,
						"data-resourcename": data.name,
						"show-ownership-badge": showCardsBadge.value,
						"are-folders-enabled": unref(settingsStore).isFoldersFeatureEnabled,
						"are-tags-enabled": unref(settingsStore).areTagsEnabled,
						"is-mcp-enabled": mcpEnabled.value,
						"is-mcp-module-active": mcpModuleActive.value,
						"can-manage-instance-mcp": canManageInstanceMcp.value,
						"is-workflow-card-mcp-toggle-enabled": isWorkflowCardMcpToggleEnabled.value,
						"onClick:tag": onClickTag,
						"onWorkflow:deleted": refreshWorkflows,
						"onWorkflow:archived": refreshWorkflows,
						"onWorkflow:unarchived": refreshWorkflows,
						"onWorkflow:moved": fetchWorkflows,
						"onWorkflow:duplicated": fetchWorkflows,
						"onWorkflow:unpublished": onWorkflowUnpublished,
						"onWorkflow:activeToggle": onWorkflowActiveToggle,
						"onAction:moveToFolder": moveWorkflowToFolder,
						onMouseenter: _cache[2] || (_cache[2] = ($event) => isDragging.value ? unref(folderHelpers).resetDropTarget() : {})
					}, null, 8, [
						"class",
						"data",
						"workflow-list-event-bus",
						"read-only",
						"data-resourceid",
						"data-resourcename",
						"show-ownership-badge",
						"are-folders-enabled",
						"are-tags-enabled",
						"is-mcp-enabled",
						"is-mcp-module-active",
						"can-manage-instance-mcp",
						"is-workflow-card-mcp-toggle-enabled"
					])]),
					_: 2
				}, 1032, [
					"disabled",
					"onDragstart",
					"onDragend"
				]))]),
				empty: withCtx(() => [unref(projectPages).isSharedSubPage && personalProject.value ? (openBlock(), createBlock(EmptySharedSectionActionBox_default, {
					key: 0,
					"personal-project": personalProject.value,
					"resource-type": "workflows"
				}, null, 8, ["personal-project"])) : (openBlock(), createElementBlock("div", _hoisted_1, [unref(showRecommendedTemplatesInline) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.templatesContainer)
				}, [createVNode(RecommendedTemplatesSection_default)], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.emptyStateNoTemplates),
					"data-test-id": "list-empty-state"
				}, [createBaseVNode("div", _hoisted_2, [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "xlarge",
					class: "mb-2xs"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(emptyListHeading)), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "large",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(emptyListDescription)), 1)]),
					_: 1
				})]), showStartFromScratchCard.value ? (openBlock(), createBlock(unref(N8nCard_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.emptyStateCard),
					hoverable: "",
					"data-test-id": "new-workflow-card",
					onClick: addWorkflow
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.emptyStateCardContent) }, [createVNode(unref(N8nIcon_default), {
						class: normalizeClass(_ctx.$style.emptyStateCardIcon),
						icon: "file",
						color: "foreground-dark",
						"stroke-width": 1.5
					}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
						size: "large",
						class: "mt-xs"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.empty.startFromScratch")), 1)]),
						_: 1
					})], 2)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)], 2)), showTemplateRecommendationV3.value ? (openBlock(), createBlock(TemplateRecommendationV3_default, { key: 2 })) : showTemplateRecommendationV2.value ? (openBlock(), createBlock(TemplateRecommendationV2_default, { key: 3 })) : createCommentVNode("", true)]))]),
				filters: withCtx(({ setKeyValue }) => [
					unref(settingsStore).areTagsEnabled ? (openBlock(), createElementBlock("div", _hoisted_3, [createVNode(unref(N8nInputLabel_default), {
						label: unref(i18n).baseText("workflows.filters.tags"),
						bold: false,
						size: "small",
						color: "text-base",
						class: "mb-3xs"
					}, null, 8, ["label"]), createVNode(WorkflowTagsDropdown_default, {
						placeholder: unref(i18n).baseText("workflowOpen.filterWorkflows"),
						"model-value": filters.value.tags,
						"create-enabled": false,
						"onUpdate:modelValue": ($event) => setKeyValue("tags", $event)
					}, null, 8, [
						"placeholder",
						"model-value",
						"onUpdate:modelValue"
					])])) : createCommentVNode("", true),
					createBaseVNode("div", _hoisted_4, [createVNode(unref(N8nInputLabel_default), {
						label: unref(i18n).baseText("workflows.filters.status"),
						bold: false,
						size: "small",
						color: "text-base",
						class: "mb-3xs"
					}, null, 8, ["label"]), createVNode(unref(N8nSelect_default), {
						"data-test-id": "status-dropdown",
						"model-value": filters.value.status,
						"onUpdate:modelValue": ($event) => setKeyValue("status", $event)
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(statusFilterOptions.value, (option) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: option.label,
								label: option.label,
								value: option.value,
								"data-test-id": "status"
							}, null, 8, ["label", "value"]);
						}), 128))]),
						_: 1
					}, 8, ["model-value", "onUpdate:modelValue"])]),
					createBaseVNode("div", _hoisted_5, [createVNode(unref(Checkbox_default), {
						label: unref(i18n).baseText("workflows.filters.showArchived"),
						"model-value": filters.value.showArchived || false,
						"data-test-id": "show-archived-checkbox",
						"onUpdate:modelValue": ($event) => setKeyValue("showArchived", $event)
					}, null, 8, [
						"label",
						"model-value",
						"onUpdate:modelValue"
					])])
				]),
				postamble: withCtx(() => [workflowsAndFolders.value.length === 0 && !hasFilters.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style["empty-folder-container"]),
					"data-test-id": "empty-folder-container"
				}, [showArchivedOnlyHint.value ? (openBlock(), createBlock(unref(N8nInfoTip_default), {
					key: 0,
					bold: false
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.archivedOnly.hint")) + " ", 1), createVNode(unref(N8nLink_default), {
						size: "small",
						"data-test-id": "show-archived-link",
						onClick: onShowArchived
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.archivedOnly.hint.link")), 1)]),
						_: 1
					})]),
					_: 1
				})) : createCommentVNode("", true), unref(projectPages).isSharedSubPage && personalProject.value ? (openBlock(), createBlock(EmptySharedSectionActionBox_default, {
					key: 1,
					"personal-project": personalProject.value,
					"resource-type": "workflows"
				}, null, 8, ["personal-project"])) : currentFolder.value ? (openBlock(), createBlock(unref(N8nActionBox_default), {
					key: 2,
					"data-test-id": "empty-folder-action-box",
					heading: unref(i18n).baseText("folders.empty.actionbox.title", { interpolate: { folderName: currentFolder.value.name } }),
					"button-text": unref(i18n).baseText("generic.create.workflow"),
					"button-type": "secondary",
					"button-disabled": unref(readOnlyEnv) || !unref(projectPermissions).workflow.create,
					"onClick:button": onCreateWorkflowClick
				}, {
					disabledButtonTooltip: withCtx(() => [createTextVNode(toDisplayString(unref(readOnlyEnv) ? unref(i18n).baseText("readOnlyEnv.cantAdd.workflow") : unref(i18n).baseText("generic.missing.permissions")), 1)]),
					_: 1
				}, 8, [
					"heading",
					"button-text",
					"button-disabled"
				])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true), unref(showRecommendedTemplatesInline) && showArchivedOnlyHint.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.templatesContainer)
				}, [createVNode(RecommendedTemplatesSection_default)], 2)) : createCommentVNode("", true)]),
				_: 2
			}, [showRegisteredCommunityCTA.value ? {
				name: "add-button",
				fn: withCtx(() => [createVNode(unref(N8nTooltip_default), { placement: "top" }, {
					content: withCtx(() => [createBaseVNode("span", null, toDisplayString(currentParentName.value ? unref(i18n).baseText("folders.add.to.parent.message", { interpolate: { parent: currentParentName.value } }) : unref(i18n).baseText("folders.add.here.message")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "medium",
						iconOnly: "",
						icon: "folder-plus",
						"aria-label": unref(i18n).baseText("workflows.addFolder"),
						"data-test-id": "add-folder-button",
						onClick: createFolderInCurrent
					}, null, 8, ["aria-label"])]),
					_: 1
				})]),
				key: "0"
			} : void 0]), 1032, [
				"filters",
				"resources",
				"shareable",
				"disabled",
				"resources-refreshing",
				"custom-page-size",
				"total-items",
				"has-empty-state",
				"onMouseleave"
			]));
		};
	}
});
//#endregion
//#region src/app/views/WorkflowsView.vue?vue&type=style&index=0&lang.module.scss
var templatesContainer = "_templatesContainer_1nl01_125";
var emptyStateCard = "_emptyStateCard_1nl01_145";
var emptyStateCardContent = "_emptyStateCardContent_1nl01_158";
var emptyStateCardIcon = "_emptyStateCardIcon_1nl01_165";
var emptyStateNoTemplates = "_emptyStateNoTemplates_1nl01_172";
var dragging = "_dragging_1nl01_201";
var name = "_name_1nl01_219";
var WorkflowsView_vue_vue_type_style_index_0_lang_module_default = {
	templatesContainer,
	"easy-ai-workflow-callout": "_easy-ai-workflow-callout_1nl01_134",
	"callout-trailing-content": "_callout-trailing-content_1nl01_139",
	emptyStateCard,
	emptyStateCardContent,
	emptyStateCardIcon,
	emptyStateNoTemplates,
	"breadcrumbs-container": "_breadcrumbs-container_1nl01_180",
	"breadcrumbs-loading": "_breadcrumbs-loading_1nl01_186",
	"empty-folder-container": "_empty-folder-container_1nl01_192",
	"drag-active": "_drag-active_1nl01_196",
	dragging,
	"drop-active": "_drop-active_1nl01_208",
	"path-separator": "_path-separator_1nl01_213",
	name,
	"pointer-disabled": "_pointer-disabled_1nl01_225"
};
var WorkflowsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { WorkflowsView_default as default };
