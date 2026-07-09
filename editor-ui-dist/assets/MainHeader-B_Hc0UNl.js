import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, $t as hasOwn, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, I as h, It as ref, K as onBeforeMount, N as defineComponent, R as inject, S as computed, T as createCommentVNode, W as nextTick, X as onMounted, _ as Fragment, bn as normalizeStyle, bt as withCtx, c as useCssModule, en as hyphenate, gt as watch, it as renderSlot, j as createVNode, p as vShow, pt as useTemplateRef, q as onBeforeUnmount, rt as renderList, st as resolveDynamicComponent, tn as init_shared_esm_bundler, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-BuOkMaP4.js";
import { Ja as N8nButton_default, M as SuggestedActions_default, Ot as createEventBus, Rt as N8nActionDropdown_default, T as N8nUserStack_default, Ti as N8nBadge_default, Wi as N8nIconButton_default, X as N8nTag_default, Ya as N8nIcon_default, _t as useRouter, gt as useRoute, ut as RouterLink, y as N8nInlineTextEdit_default, z as N8nRadioButtons_default, zi as N8nTooltip_default } from "./src-CSWS3PCK.js";
import { d as __vitePreload } from "./get-CDrcd2Fp.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { u as useDocumentVisibility, v as useLocalStorage } from "./core-CxAuVuwP.js";
import { t as useMessage } from "./useMessage-CEO7UJTt.js";
import { t as useToast } from "./useToast-CNwmpHsw.js";
import { $i as WORKFLOW_HISTORY_NAME_VERSION_MODAL_KEY, Ad as LOADING_ANIMATION_MIN_DURATION, Bu as WorkflowDocumentStoreKey, Ci as DUPLICATE_MODAL_KEY, Ed as EnterpriseEditionFeature, Ji as WORKFLOW_ACTIVE_MODAL_KEY, T as TIME_SAVED_DOCS_URL, Ud as WORKFLOW_MENU_ACTIONS, Yi as WORKFLOW_DESCRIPTION_MODAL_KEY, aa as WORKFLOW_SHARE_MODAL_KEY, di as WORKFLOW_HISTORY_PUBLISH_TIMELINE_TAB, fu as getResourcePermissions, h as EVALUATIONS_DOCS_URL, ia as WORKFLOW_SETTINGS_MODAL_KEY, ki as IMPORT_WORKFLOW_URL_MODAL_KEY, li as MAIN_HEADER_TABS, m as ERROR_WORKFLOW_DOCS_URL, ml as jsonParse, na as WORKFLOW_HISTORY_VERSION_UNPUBLISH, ra as WORKFLOW_PUBLISH_MODAL_KEY, t as AutoSaveState, ui as VIEWS, xa as LOCAL_STORAGE_HIDE_GITHUB_STAR_BUTTON, y as N8N_MAIN_GITHUB_REPO_URL } from "./constants-U-laJZAl.js";
import { Cn as ProjectTypes, Gn as getActivatableTriggerNodes, It as useTagsStore, Pt as useWorkflowId, Sn as useSourceControlStore, Ut as injectNDVStoreIfProvided, Yi as getBannerRowHeight, _ as useNodeTypesStore, a as injectWorkflowDocumentStore, b as useEvaluationStore, cn as useWorkflowsStore, gn as ResourceType, r as createWorkflowDocumentId, s as useWorkflowDocumentStore, xn as useProjectsStore } from "./workflowDocument.store-CHzX8xP5.js";
import { t as useRootStore } from "./useRootStore-Bad1y11b.js";
import { t as useSettingsStore } from "./settings.store-CgTGI66t.js";
import { t as useBannersStore } from "./banners.store-DRNsl4Op.js";
import { f as useUIStore, h as telemetry, n as hasPermission, p as useTelemetry, t as useUsersStore } from "./users.store-Bf6s0cNu.js";
import { n as require_debounce, t as useDebounce } from "./useDebounce-DkZtSUZe.js";
import { n as useFavoritesStore, t as useWorkflowsListStore } from "./workflowsList.store-DLn31s0i.js";
import { t as useDocumentTitle } from "./useDocumentTitle-DByx4tvl.js";
import { a as useWorkflowSaveStore, r as useWorkflowSaving, s as useWorkflowHistoryStore } from "./builder.store-mB0WXXKR.js";
import { o as sanitizeFilename } from "./dist-CFw5VhTU.js";
import { t as require_FileSaver_min } from "./FileSaver.min-vCTJCDj3.js";
import { t as nodeViewEventBus } from "./event-bus-C_HI1u_B.js";
import { t as useExecutionsStore } from "./executions.store-D5wCuwhe.js";
import { t as useInjectWorkflowId } from "./useInjectWorkflowId-BgzXh4_c.js";
import { t as useCollaborationStore } from "./collaboration.store-Ba3MUAIg.js";
import { t as TimeAgo_default } from "./TimeAgo-Bo-1ZpZq.js";
import { t as useFoldersStore } from "./folders.store-BkTsVvY5.js";
import { t as WorkflowTagsDropdown_default } from "./WorkflowTagsDropdown-BoAVjcpC.js";
import { t as router } from "./router-DMRvnrQS.js";
import { a as MCP_SETTINGS_VIEW, r as MCP_DOCS_PAGE_URL } from "./mcp.constants-BT39eBzp.js";
import { t as useMoveResourceToProjectToast } from "./useMoveResourceToProjectToast-D-Klb548.js";
import { i as getLastPublishedVersion, r as generateVersionLabelFromId } from "./utils-Cq9AbPKE.js";
import { t as useKeybindings } from "./useKeybindings-CYyRAMA-.js";
import { t as useWorkflowActivate } from "./useWorkflowActivate-DUu49_D3.js";
import { t as usePushConnection } from "./usePushConnection-Dz-Ng0MV.js";
import { t as FolderBreadcrumbs_default } from "./FolderBreadcrumbs-BT-ZhAQc.js";
import { t as ConnectionTracker_default } from "./ConnectionTracker-BAbEGk-q.js";
import { t as useWorkflowEvaluationState } from "./useWorkflowEvaluationState-DIdd17P7.js";
import "./usePushConnection-DiSzWOm0.js";
//#region src/app/components/MainHeader/TabBar.vue?vue&type=script&setup=true&lang.ts
var TabBar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TabBar",
	props: {
		items: {},
		modelValue: { default: MAIN_HEADER_TABS.WORKFLOW },
		floating: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		function onUpdateModelValue(tab, event) {
			emit("update:modelValue", tab, event);
		}
		return (_ctx, _cache) => {
			return __props.items ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass({
					[_ctx.$style.container]: true,
					[_ctx.$style.floating]: __props.floating,
					["tab-bar-container"]: true
				})
			}, [createVNode(unref(N8nRadioButtons_default), {
				"model-value": __props.modelValue,
				options: __props.items,
				"onUpdate:modelValue": onUpdateModelValue
			}, null, 8, ["model-value", "options"])], 2)) : createCommentVNode("", true);
		};
	}
});
var TabBar_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_8p938_125",
	floating: "_floating_8p938_140"
};
var TabBar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TabBar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TabBar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/components/BreakpointsObserver.vue
var BreakpointsObserver_default = /* @__PURE__ */ defineComponent({
	__name: "BreakpointsObserver",
	props: {
		valueXS: {},
		valueXL: {},
		valueLG: {},
		valueMD: {},
		valueSM: {},
		valueDefault: {}
	},
	setup(__props) {
		const props = __props;
		const { callDebounced } = useDebounce();
		const bannersStore = useBannersStore();
		const width = ref(window.innerWidth);
		const bp = computed(() => {
			if (width.value < 768) return "XS";
			if (width.value >= 1920) return "XL";
			if (width.value >= 1200) return "LG";
			if (width.value >= 992) return "MD";
			return "SM";
		});
		const value = computed(() => {
			if (props.valueXS && width.value < 768) return props.valueXS;
			if (props.valueXL && width.value >= 1920) return props.valueXL;
			if (props.valueLG && width.value >= 1200) return props.valueLG;
			if (props.valueMD && width.value >= 992) return props.valueMD;
			if (props.valueSM) return props.valueSM;
			return props.valueDefault;
		});
		const onResize = () => {
			callDebounced(onResizeEnd, { debounceTime: 50 });
		};
		const onResizeEnd = async () => {
			width.value = window.innerWidth;
			await nextTick();
			const bannerHeight = await getBannerRowHeight();
			bannersStore.updateBannersHeight(bannerHeight);
		};
		onMounted(() => {
			window.addEventListener("resize", onResize);
		});
		onBeforeUnmount(() => {
			window.removeEventListener("resize", onResize);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", null, [renderSlot(_ctx.$slots, "default", {
				bp: bp.value,
				value: value.value
			})]);
		};
	}
});
//#endregion
//#region src/app/plugins/cache.ts
async function indexedDbCache(dbName, storeName) {
	let cache = {};
	await loadCache();
	async function loadCache() {
		await transaction("readonly", async (store, db) => {
			return await new Promise((resolve, reject) => {
				const request = store.openCursor();
				request.onsuccess = (event) => {
					const cursor = event.target.result;
					if (cursor) {
						cache[cursor.key] = cursor.value.value;
						cursor.continue();
					} else {
						db.close();
						resolve();
					}
				};
				request.onerror = (event) => {
					db.close();
					reject(event);
				};
			});
		});
	}
	async function openDb() {
		return await new Promise((resolve, reject) => {
			const request = indexedDB.open(dbName, 1);
			request.onupgradeneeded = () => {
				request.result.createObjectStore(storeName, { keyPath: "key" });
			};
			request.onsuccess = () => resolve(request.result);
			request.onerror = () => reject(request.error);
		});
	}
	function setItem(key, value) {
		cache[key] = value;
		persistToIndexedDB(key, value);
	}
	function getItem(key) {
		return cache[key] ?? null;
	}
	function removeItem(key) {
		delete cache[key];
		deleteFromIndexedDB(key);
	}
	function clear() {
		cache = {};
		clearIndexedDB();
	}
	async function getAllWithPrefix(prefix) {
		const keyRange = IDBKeyRange.bound(prefix, prefix + "￿", false, false);
		const results = {};
		return await transaction("readonly", async (store) => {
			return await new Promise((resolve, reject) => {
				const request = store.openCursor(keyRange);
				request.onsuccess = (event) => {
					const cursor = event.target.result;
					if (cursor) {
						results[cursor.key] = cursor.value.value;
						cursor.continue();
					} else resolve(results);
				};
				request.onerror = () => {
					reject(request.error);
				};
			});
		});
	}
	async function transaction(mode, action) {
		const db = await openDb();
		const tx = db.transaction(storeName, mode);
		const result = await action(tx.objectStore(storeName), db);
		return await new Promise((resolve, reject) => {
			tx.oncomplete = () => {
				db.close();
				resolve(result);
			};
			tx.onerror = () => {
				db.close();
				reject(tx.error);
			};
		});
	}
	async function persistToIndexedDB(key, value) {
		await transaction("readwrite", (store) => {
			store.put({
				key,
				value
			});
		});
	}
	async function deleteFromIndexedDB(key) {
		await transaction("readwrite", (store) => {
			store.delete(key);
		});
	}
	async function clearIndexedDB() {
		await transaction("readwrite", (store) => {
			store.clear();
		});
	}
	return {
		getItem,
		removeItem,
		setItem,
		clear,
		getAllWithPrefix
	};
}
//#endregion
//#region src/app/composables/useWorkflowsCache.ts
function useWorkflowSettingsCache() {
	const isCacheLoading = ref(true);
	const cachePromise = ref(indexedDbCache("n8n-local", "workflows").finally(() => {
		isCacheLoading.value = false;
	}));
	async function getWorkflowsCache() {
		return await cachePromise.value;
	}
	async function getWorkflowSettings(workflowId) {
		return jsonParse((await getWorkflowsCache()).getItem(workflowId) ?? "", { fallbackValue: {} });
	}
	async function getMergedWorkflowSettings(workflowId) {
		const workflowSettings = await getWorkflowSettings(workflowId);
		const globalPreferences = jsonParse((await getWorkflowsCache()).getItem("*") ?? "", { fallbackValue: {} });
		workflowSettings.suggestedActions = {
			...workflowSettings.suggestedActions ?? {},
			...globalPreferences.suggestedActions ?? {}
		};
		return workflowSettings;
	}
	async function upsertWorkflowSettings(workflowId, updates) {
		const cache = await getWorkflowsCache();
		const existingSettings = await getWorkflowSettings(workflowId);
		const updatedSettings = {
			...existingSettings,
			...updates
		};
		if (updates.suggestedActions) updatedSettings.suggestedActions = {
			...existingSettings.suggestedActions ?? {},
			...updates.suggestedActions
		};
		cache.setItem(workflowId, JSON.stringify(updatedSettings));
	}
	async function updateFirstActivatedAt(workflowId) {
		if (!(await getWorkflowSettings(workflowId))?.firstActivatedAt) await upsertWorkflowSettings(workflowId, { firstActivatedAt: Date.now() });
	}
	async function ignoreSuggestedAction(workflowId, action) {
		await upsertWorkflowSettings(workflowId, { suggestedActions: { [action]: { ignored: true } } });
	}
	async function getEvaluationPreferences(workflowId) {
		return (await getWorkflowSettings(workflowId))?.evaluationRuns ?? {
			order: [],
			visibility: {}
		};
	}
	async function saveEvaluationPreferences(workflowId, evaluationRuns) {
		await upsertWorkflowSettings(workflowId, { evaluationRuns });
	}
	async function ignoreAllSuggestedActionsForAllWorkflows(actionsToIgnore) {
		await upsertWorkflowSettings("*", actionsToIgnore.reduce((accu, key) => {
			accu.suggestedActions = accu.suggestedActions ?? {};
			accu.suggestedActions[key] = { ignored: true };
			return accu;
		}, {}));
	}
	return {
		getWorkflowSettings,
		getMergedWorkflowSettings,
		upsertWorkflowSettings,
		updateFirstActivatedAt,
		ignoreSuggestedAction,
		ignoreAllSuggestedActionsForAllWorkflows,
		getEvaluationPreferences,
		saveEvaluationPreferences,
		isCacheLoading
	};
}
//#endregion
//#region src/app/components/WorkflowProductionChecklist.vue
var WorkflowProductionChecklist_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowProductionChecklist",
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		const evaluationStore = useEvaluationStore();
		const evaluationState = useWorkflowEvaluationState();
		const nodeTypesStore = useNodeTypesStore();
		const workflowsCache = useWorkflowSettingsCache();
		const uiStore = useUIStore();
		const message = useMessage();
		const telemetry = useTelemetry();
		const sourceControlStore = useSourceControlStore();
		const settingsStore = useSettingsStore();
		const usersStore = useUsersStore();
		const workflowDocumentStore = inject(WorkflowDocumentStoreKey, null);
		const isPopoverOpen = ref(false);
		const cachedSettings = ref(null);
		const nodes = computed(() => workflowDocumentStore?.value?.allNodes ?? []);
		const hasAINode = computed(() => {
			return nodes.value.some((node) => {
				return nodeTypesStore.getNodeType(node.type, node.typeVersion)?.codex?.categories?.includes("AI");
			});
		});
		const hasEvaluationSetOutputsNode = computed(() => {
			return evaluationState.evaluationSetOutputsNodeExist.value;
		});
		const hasErrorWorkflow = computed(() => {
			return !!workflowDocumentStore?.value?.settings?.errorWorkflow;
		});
		const isErrorWorkflow = computed(() => {
			return nodes.value.some((node) => node.type === "n8n-nodes-base.errorTrigger" && node.disabled !== true);
		});
		const hasSavedTimeNodes = computed(() => {
			return nodes.value.some((node) => node.type === "n8n-nodes-base.timeSaved" && node.disabled !== true);
		});
		const hasTimeSaved = computed(() => {
			return workflowDocumentStore?.value?.settings?.timeSavedPerExecution !== void 0 || hasSavedTimeNodes.value;
		});
		const isActivationModalOpen = computed(() => {
			return uiStore.isModalActiveById[WORKFLOW_ACTIVE_MODAL_KEY];
		});
		const isAnyModalOpen = computed(() => uiStore.isAnyModalOpen);
		const isProtectedEnvironment = computed(() => {
			return sourceControlStore.preferences.branchReadOnly;
		});
		const isOwner = computed(() => usersStore.isInstanceOwner);
		const isAdmin = computed(() => usersStore.isAdmin);
		const isMcpModuleEnabled = computed(() => {
			return settingsStore.isModuleActive("mcp");
		});
		const isMcpAccessEnabled = computed(() => {
			return settingsStore.moduleSettings.mcp?.mcpAccessEnabled ?? false;
		});
		const canToggleInstanceMCPAccess = computed(() => isOwner.value || isAdmin.value);
		const availableActions = computed(() => {
			if (workflowsCache.isCacheLoading.value) return [];
			const hasPublishedVersion = !!workflowDocumentStore?.value?.activeVersionId;
			const actions = [];
			const suggestedActionSettings = cachedSettings.value?.suggestedActions ?? {};
			if (hasPublishedVersion && !isErrorWorkflow.value && !suggestedActionSettings.errorWorkflow?.ignored) actions.push({
				id: "errorWorkflow",
				title: i18n.baseText("workflowProductionChecklist.errorWorkflow.title"),
				description: i18n.baseText("workflowProductionChecklist.errorWorkflow.description"),
				moreInfoLink: ERROR_WORKFLOW_DOCS_URL,
				completed: hasErrorWorkflow.value
			});
			if (hasPublishedVersion && hasAINode.value && evaluationStore.isEvaluationEnabled && !suggestedActionSettings.evaluations?.ignored) actions.push({
				id: "evaluations",
				title: i18n.baseText("workflowProductionChecklist.evaluations.title"),
				description: i18n.baseText("workflowProductionChecklist.evaluations.description"),
				moreInfoLink: EVALUATIONS_DOCS_URL,
				completed: hasEvaluationSetOutputsNode.value
			});
			if (hasPublishedVersion && !suggestedActionSettings.timeSaved?.ignored) actions.push({
				id: "timeSaved",
				title: i18n.baseText("workflowProductionChecklist.timeSaved.title"),
				description: i18n.baseText("workflowProductionChecklist.timeSaved.description"),
				moreInfoLink: TIME_SAVED_DOCS_URL,
				completed: hasTimeSaved.value
			});
			const mcpAction = getMcpAction();
			if (mcpAction) actions.push(mcpAction);
			return actions;
			function getMcpAction() {
				if (!isMcpModuleEnabled.value) return null;
				const baseAction = {
					title: i18n.baseText("mcp.productionChecklist.title"),
					moreInfoLink: MCP_DOCS_PAGE_URL
				};
				if (!isMcpAccessEnabled.value) {
					if (!canToggleInstanceMCPAccess.value || suggestedActionSettings["instance-mcp-access"]?.ignored) return null;
					return {
						...baseAction,
						id: "instance-mcp-access",
						description: i18n.baseText("mcp.productionChecklist.instance.description"),
						completed: false
					};
				}
				if (suggestedActionSettings["workflow-mcp-access"]?.ignored) return null;
				return {
					...baseAction,
					id: "workflow-mcp-access",
					description: i18n.baseText("mcp.productionChecklist.workflow.description"),
					completed: workflowDocumentStore?.value?.settings?.availableInMCP ?? false
				};
			}
		});
		async function loadWorkflowSettings() {
			if (workflowDocumentStore?.value?.workflowId) cachedSettings.value = await workflowsCache.getMergedWorkflowSettings(workflowDocumentStore?.value.workflowId);
		}
		async function handleActionClick(actionId) {
			switch (actionId) {
				case "evaluations":
					await router.push({
						name: VIEWS.EVALUATION_EDIT,
						params: { workflowId: workflowDocumentStore?.value?.workflowId }
					});
					break;
				case "errorWorkflow":
				case "timeSaved":
				case "workflow-mcp-access":
					uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
					break;
				case "instance-mcp-access":
					await router.push({ name: MCP_SETTINGS_VIEW });
					break;
				default: break;
			}
			isPopoverOpen.value = false;
		}
		function isValidAction(action) {
			return [
				"evaluations",
				"errorWorkflow",
				"timeSaved",
				"workflow-mcp-access",
				"instance-mcp-access"
			].includes(action);
		}
		async function handleIgnoreClick(actionId) {
			if (!isValidAction(actionId)) return;
			await workflowsCache.ignoreSuggestedAction(workflowDocumentStore?.value?.workflowId ?? "", actionId);
			await loadWorkflowSettings();
			telemetry.track("user clicked ignore suggested action", { actionId });
		}
		async function handleIgnoreAll() {
			if (await message.confirm(i18n.baseText("workflowProductionChecklist.ignoreAllConfirmation.description"), i18n.baseText("workflowProductionChecklist.ignoreAllConfirmation.title"), { confirmButtonText: i18n.baseText("workflowProductionChecklist.ignoreAllConfirmation.confirm") }) === "confirm") {
				await workflowsCache.ignoreAllSuggestedActionsForAllWorkflows(availableActions.value.map((action) => action.id));
				await loadWorkflowSettings();
				telemetry.track("user clicked ignore suggested actions for all workflows");
			}
		}
		function openSuggestedActions() {
			isPopoverOpen.value = true;
		}
		function onPopoverOpened() {
			telemetry.track("user opened suggested actions checklist");
		}
		function handlePopoverOpenChange(open) {
			if (open) {
				isPopoverOpen.value = true;
				onPopoverOpened();
			} else if (!isActivationModalOpen.value) isPopoverOpen.value = false;
		}
		watch(() => !!workflowDocumentStore?.value?.activeVersionId, async (isActive, wasActive) => {
			if (isActive && !wasActive) {
				if (!cachedSettings.value?.firstActivatedAt) if (isAnyModalOpen.value) {
					const stop = watch(isAnyModalOpen, (isOpen) => {
						if (!isOpen) {
							stop();
							openSuggestedActions();
						}
					});
				} else setTimeout(() => {
					openSuggestedActions();
				}, 0);
				await workflowsCache.updateFirstActivatedAt(workflowDocumentStore?.value?.workflowId ?? "");
			}
		});
		onMounted(async () => {
			await loadWorkflowSettings();
		});
		return (_ctx, _cache) => {
			return availableActions.value.length > 0 ? (openBlock(), createBlock(unref(SuggestedActions_default), {
				key: 0,
				open: isPopoverOpen.value,
				title: unref(i18n).baseText("workflowProductionChecklist.title"),
				actions: availableActions.value,
				"ignore-all-label": unref(i18n).baseText("workflowProductionChecklist.turnOffWorkflowSuggestions"),
				notice: isProtectedEnvironment.value ? unref(i18n).baseText("workflowProductionChecklist.readOnlyNotice") : "",
				"popover-alignment": "end",
				onActionClick: handleActionClick,
				onIgnoreClick: handleIgnoreClick,
				onIgnoreAll: handleIgnoreAll,
				"onUpdate:open": handlePopoverOpenChange
			}, null, 8, [
				"open",
				"title",
				"actions",
				"ignore-all-label",
				"notice"
			])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/app/components/IntersectionObserver.vue
var IntersectionObserver_default = /* @__PURE__ */ defineComponent({
	__name: "IntersectionObserver",
	props: {
		threshold: { default: 0 },
		enabled: {
			type: Boolean,
			default: false
		},
		eventBus: {}
	},
	emits: ["observed"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const observer = ref(null);
		const root = ref(null);
		onBeforeUnmount(() => {
			if (props.enabled && observer.value) observer.value.disconnect();
		});
		onMounted(() => {
			if (!props.enabled) return;
			const options = {
				root: root.value,
				rootMargin: "0px",
				threshold: props.threshold
			};
			const intersectionObserver = new IntersectionObserver((entries) => {
				entries.forEach(({ target, isIntersecting }) => {
					emit("observed", {
						el: target,
						isIntersecting
					});
				});
			}, options);
			observer.value = intersectionObserver;
			props.eventBus.on("observe", (observed) => {
				if (observed) intersectionObserver.observe(observed);
			});
			props.eventBus.on("unobserve", (observed) => {
				intersectionObserver.unobserve(observed);
			});
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "root",
				ref: root
			}, [renderSlot(_ctx.$slots, "default")], 512);
		};
	}
});
//#endregion
//#region src/app/components/IntersectionObserved.vue
var IntersectionObserved_default = /* @__PURE__ */ defineComponent({
	__name: "IntersectionObserved",
	props: {
		enabled: {
			type: Boolean,
			default: false
		},
		eventBus: {}
	},
	setup(__props) {
		const props = __props;
		const observed = ref(null);
		onMounted(async () => {
			if (!props.enabled) return;
			await nextTick();
			props.eventBus.emit("observe", observed.value);
		});
		onBeforeUnmount(() => {
			if (props.enabled) props.eventBus.emit("unobserve", observed.value);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				ref_key: "observed",
				ref: observed
			}, [renderSlot(_ctx.$slots, "default")], 512);
		};
	}
});
//#endregion
//#region src/features/shared/tags/components/TagsContainer.vue?vue&type=script&setup=true&lang.ts
var import_debounce = /* @__PURE__ */ __toESM(require_debounce(), 1);
var _hoisted_1$3 = { class: "tags" };
var _hoisted_2$2 = ["onClick"];
//#endregion
//#region src/features/shared/tags/components/TagsContainer.vue
var TagsContainer_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "TagsContainer",
	props: {
		tagIds: {},
		tagsById: {},
		limit: { default: 20 },
		clickable: {
			type: Boolean,
			default: false
		},
		responsive: {
			type: Boolean,
			default: false
		}
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const maxWidth = ref(320);
		const intersectionEventBus = createEventBus();
		const visibility = ref({});
		const tagsContainer = ref();
		const style = computed(() => ({ "max-width": `${maxWidth.value}px` }));
		const tags = computed(() => {
			const allTags = props.tagIds.map((tagId) => props.tagsById[tagId]).filter(Boolean);
			let toDisplay = props.limit ? allTags.slice(0, props.limit) : allTags;
			toDisplay = toDisplay.map((tag) => ({
				...tag,
				hidden: props.responsive && !visibility.value[tag.id]
			}));
			let visibleCount = toDisplay.length;
			if (props.responsive) visibleCount = Object.values(visibility.value).reduce((accu, val) => val ? accu + 1 : accu, 0);
			if (visibleCount < allTags.length) {
				const hidden = allTags.slice(visibleCount);
				const hiddenTitle = hidden.reduce((accu, tag) => accu ? `${accu}, ${tag.name}` : tag.name, "");
				const countTag = {
					id: "count",
					name: `+${hidden.length}`,
					title: hiddenTitle,
					isCount: true
				};
				toDisplay.splice(visibleCount, 0, countTag);
			}
			return toDisplay;
		});
		const setMaxWidth = () => {
			const parent = (tagsContainer.value?.$el)?.parentNode;
			if (parent) {
				maxWidth.value = 0;
				nextTick(() => {
					maxWidth.value = parent.clientWidth;
				});
			}
		};
		const debouncedSetMaxWidth = (0, import_debounce.default)(setMaxWidth, 100);
		const onObserved = ({ el, isIntersecting }) => {
			if (el.dataset.id) visibility.value = {
				...visibility.value,
				[el.dataset.id]: isIntersecting
			};
		};
		const onClick = (e, tag) => {
			if (props.clickable) e.stopPropagation();
			if (!tag.hidden) emit("click", tag.id);
		};
		onMounted(() => {
			setMaxWidth();
			window.addEventListener("resize", debouncedSetMaxWidth);
		});
		onBeforeUnmount(() => {
			window.removeEventListener("resize", debouncedSetMaxWidth);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(IntersectionObserver_default, {
				ref_key: "tagsContainer",
				ref: tagsContainer,
				threshold: 1,
				class: "tags-container",
				style: normalizeStyle(style.value),
				enabled: __props.responsive,
				"event-bus": unref(intersectionEventBus),
				onObserved
			}, {
				default: withCtx(() => [createBaseVNode("span", _hoisted_1$3, [(openBlock(true), createElementBlock(Fragment, null, renderList(tags.value, (tag) => {
					return openBlock(), createElementBlock("span", {
						key: tag.id,
						class: normalizeClass({ clickable: !tag.hidden }),
						onClick: (e) => onClick(e, tag)
					}, [tag.isCount ? (openBlock(), createBlock(unref(N8nTag_default), {
						key: 0,
						title: tag.title,
						text: tag.name,
						clickable: false,
						class: "count-container"
					}, null, 8, ["title", "text"])) : (openBlock(), createBlock(IntersectionObserved_default, {
						key: 1,
						class: normalizeClass({ hideTag: tag.hidden }),
						"data-id": tag.id,
						enabled: __props.responsive,
						"event-bus": unref(intersectionEventBus)
					}, {
						default: withCtx(() => [createVNode(unref(N8nTag_default), {
							title: tag.name,
							text: tag.name,
							clickable: __props.clickable
						}, null, 8, [
							"title",
							"text",
							"clickable"
						])]),
						_: 2
					}, 1032, [
						"class",
						"data-id",
						"enabled",
						"event-bus"
					]))], 10, _hoisted_2$2);
				}), 128))])]),
				_: 1
			}, 8, [
				"style",
				"enabled",
				"event-bus"
			]);
		};
	}
}), [["__scopeId", "data-v-8ecf8b55"]]);
//#endregion
//#region src/features/shared/tags/components/WorkflowTagsContainer.vue
var WorkflowTagsContainer_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowTagsContainer",
	props: {
		tagIds: {},
		limit: {},
		clickable: { type: Boolean },
		responsive: { type: Boolean }
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const annotationTagsStore = useTagsStore();
		const tagsById = computed(() => annotationTagsStore.tagsById);
		function onClick(tagId) {
			emit("click", tagId);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(TagsContainer_default, {
				"tag-ids": __props.tagIds,
				"tags-by-id": tagsById.value,
				limit: __props.limit,
				clickable: __props.clickable,
				responsive: __props.responsive,
				onClick
			}, null, 8, [
				"tag-ids",
				"tags-by-id",
				"limit",
				"clickable",
				"responsive"
			]);
		};
	}
});
//#endregion
//#region src/app/components/MainHeader/utils.ts
var getWorkflowId = (propId, routeName) => {
	return propId ?? (typeof routeName === "string" ? routeName : void 0);
};
//#endregion
//#region src/app/components/MainHeader/ActionsDropdownMenu.vue?vue&type=script&setup=true&lang.ts
var import_FileSaver_min = /* @__PURE__ */ __toESM(require_FileSaver_min(), 1);
var ActionsDropdownMenu_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ActionsDropdownMenu",
	props: {
		workflowPermissions: {},
		isNewWorkflow: { type: Boolean },
		isArchived: { type: Boolean },
		id: {},
		name: {},
		tags: {},
		currentFolder: {}
	},
	setup(__props, { expose: __expose }) {
		const props = __props;
		const importFileRef = ref();
		const toast = useToast();
		const locale = useI18n();
		const route = useRoute();
		const projectsStore = useProjectsStore();
		const sourceControlStore = useSourceControlStore();
		const collaborationStore = useCollaborationStore();
		const workflowsListStore = useWorkflowsListStore();
		const uiStore = useUIStore();
		const $style = useCssModule();
		const rootStore = useRootStore();
		const tagsStore = useTagsStore();
		const settingsStore = useSettingsStore();
		const usersStore = useUsersStore();
		const moveWorkflowEventBus = createEventBus();
		const { showMoveToProjectToast } = useMoveResourceToProjectToast();
		const workflowTelemetry = useTelemetry();
		const favoritesStore = useFavoritesStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const onExecutionsTab = computed(() => {
			return [
				VIEWS.EXECUTION_HOME.toString(),
				VIEWS.WORKFLOW_EXECUTIONS.toString(),
				VIEWS.EXECUTION_PREVIEW
			].includes(route.name || "");
		});
		const collaborationReadOnly = computed(() => collaborationStore.shouldBeReadOnly);
		const isSharingEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Sharing]);
		function handleFileImport() {
			const inputRef = importFileRef.value;
			if (inputRef?.files && inputRef.files.length !== 0) {
				const reader = new FileReader();
				reader.onload = () => {
					let workflowData;
					try {
						workflowData = JSON.parse(reader.result);
					} catch (error) {
						toast.showMessage({
							title: locale.baseText("mainSidebar.showMessage.handleFileImport.title"),
							message: locale.baseText("mainSidebar.showMessage.handleFileImport.message"),
							type: "error"
						});
						return;
					} finally {
						reader.onload = null;
						inputRef.value = "";
					}
					nodeViewEventBus.emit("importWorkflowData", { data: workflowData });
				};
				reader.readAsText(inputRef.files[0]);
			}
		}
		const workflowMenuItems = computed(() => {
			const actions = [{
				id: WORKFLOW_MENU_ACTIONS.DOWNLOAD,
				label: locale.baseText("menuActions.download")
			}];
			if (isSharingEnabled.value && props.workflowPermissions.share) actions.push({
				id: WORKFLOW_MENU_ACTIONS.SHARE,
				label: locale.baseText("workflowDetails.share")
			});
			if (props.workflowPermissions.move && projectsStore.isTeamProjectFeatureEnabled) actions.push({
				id: WORKFLOW_MENU_ACTIONS.CHANGE_OWNER,
				label: locale.baseText("workflows.item.changeOwner"),
				disabled: props.isNewWorkflow
			});
			if (!collaborationReadOnly.value && !props.isArchived && !sourceControlStore.preferences.branchReadOnly) actions.push({
				id: WORKFLOW_MENU_ACTIONS.RENAME,
				label: locale.baseText("generic.rename"),
				disabled: props.workflowPermissions.update !== true
			});
			actions.push({
				id: WORKFLOW_MENU_ACTIONS.FAVORITE,
				label: favoritesStore.isFavorite(props.id, "workflow") ? locale.baseText("favorites.remove") : locale.baseText("favorites.add"),
				disabled: props.isNewWorkflow
			});
			if (props.workflowPermissions.update === true && !collaborationReadOnly.value && !props.isArchived && !sourceControlStore.preferences.branchReadOnly || props.isNewWorkflow) {
				actions.unshift({
					id: WORKFLOW_MENU_ACTIONS.DUPLICATE,
					label: locale.baseText("menuActions.duplicate"),
					disabled: !props.id
				});
				actions.unshift({
					id: WORKFLOW_MENU_ACTIONS.EDIT_DESCRIPTION,
					label: locale.baseText("menuActions.editDescription"),
					disabled: !props.id
				});
				actions.push({
					id: WORKFLOW_MENU_ACTIONS.IMPORT_FROM_URL,
					label: locale.baseText("menuActions.importFromUrl"),
					disabled: onExecutionsTab.value
				}, {
					id: WORKFLOW_MENU_ACTIONS.IMPORT_FROM_FILE,
					label: locale.baseText("menuActions.importFromFile"),
					disabled: onExecutionsTab.value
				});
			}
			if (hasPermission(["rbac"], { rbac: { scope: "sourceControl:push" } })) actions.push({
				id: WORKFLOW_MENU_ACTIONS.PUSH,
				label: locale.baseText("menuActions.push"),
				disabled: !sourceControlStore.isEnterpriseSourceControlEnabled || onExecutionsTab.value || sourceControlStore.preferences.branchReadOnly
			});
			actions.push({
				id: WORKFLOW_MENU_ACTIONS.SETTINGS,
				label: locale.baseText("generic.settings"),
				disabled: props.isNewWorkflow
			});
			if (props.workflowPermissions.delete === true && !collaborationReadOnly.value && !sourceControlStore.preferences.branchReadOnly || props.isNewWorkflow) if (props.isArchived) {
				actions.push({
					id: WORKFLOW_MENU_ACTIONS.UNARCHIVE,
					label: locale.baseText("menuActions.unarchive"),
					disabled: props.isNewWorkflow
				});
				actions.push({
					id: WORKFLOW_MENU_ACTIONS.DELETE,
					label: locale.baseText("menuActions.delete"),
					disabled: props.isNewWorkflow,
					customClass: $style.deleteItem,
					divided: true
				});
			} else actions.push({
				id: WORKFLOW_MENU_ACTIONS.ARCHIVE,
				label: locale.baseText("menuActions.archive"),
				disabled: props.isNewWorkflow,
				customClass: $style.deleteItem,
				divided: true
			});
			return actions;
		});
		async function onWorkflowMenuSelect(action) {
			switch (action) {
				case WORKFLOW_MENU_ACTIONS.EDIT_DESCRIPTION: {
					const workflowId = getWorkflowId(props.id, route.params.workflowId);
					if (!workflowId) return;
					const workflowDescription = workflowDocumentStore?.value?.description ?? workflowsListStore.getWorkflowById(workflowId).description;
					uiStore.openModalWithData({
						name: WORKFLOW_DESCRIPTION_MODAL_KEY,
						data: {
							workflowId,
							workflowDescription
						}
					});
					break;
				}
				case WORKFLOW_MENU_ACTIONS.DUPLICATE:
					uiStore.openModalWithData({
						name: DUPLICATE_MODAL_KEY,
						data: {
							id: props.id,
							name: props.name,
							tags: props.tags,
							parentFolderId: props.currentFolder?.id
						}
					});
					break;
				case WORKFLOW_MENU_ACTIONS.RENAME:
					nodeViewEventBus.emit("renameWorkflow");
					break;
				case WORKFLOW_MENU_ACTIONS.DOWNLOAD: {
					if (!workflowDocumentStore?.value) throw new Error("Cannot download workflow: workflow document store is unavailable");
					const workflowData = workflowDocumentStore.value.serialize();
					const { tags, ...data } = workflowData;
					const exportData = {
						...data,
						meta: {
							...data.meta,
							instanceId: rootStore.instanceId
						},
						tags: (tags ?? []).map((tagId) => {
							const { usageCount, ...tag } = tagsStore.tagsById[tagId];
							return tag;
						})
					};
					const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json;charset=utf-8" });
					let name = props.name || "unsaved_workflow";
					name = sanitizeFilename(name);
					telemetry.track("User exported workflow", { workflow_id: workflowData.id });
					(0, import_FileSaver_min.default)(blob, name + ".json");
					break;
				}
				case WORKFLOW_MENU_ACTIONS.IMPORT_FROM_URL:
					uiStore.openModal(IMPORT_WORKFLOW_URL_MODAL_KEY);
					break;
				case WORKFLOW_MENU_ACTIONS.IMPORT_FROM_FILE:
					nodeViewEventBus.emit("importWorkflowFromFile");
					break;
				case WORKFLOW_MENU_ACTIONS.PUSH:
					try {
						router.push({ query: {
							...route.query,
							sourceControl: "push"
						} });
					} catch (error) {
						switch (error.message) {
							case "source_control_not_connected":
								toast.showError({
									...error,
									message: ""
								}, locale.baseText("settings.sourceControl.error.not.connected.title"), { message: locale.baseText("settings.sourceControl.error.not.connected.message") });
								break;
							default: toast.showError(error, locale.baseText("error"));
						}
					}
					break;
				case WORKFLOW_MENU_ACTIONS.SETTINGS:
					uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
					break;
				case WORKFLOW_MENU_ACTIONS.SHARE:
					uiStore.openModalWithData({
						name: WORKFLOW_SHARE_MODAL_KEY,
						data: { id: props.id }
					});
					workflowTelemetry.track("User opened sharing modal", {
						workflow_id: props.id,
						user_id_sharer: usersStore.currentUser?.id,
						sub_view: route.name === VIEWS.WORKFLOWS ? "Workflows listing" : "Workflow editor"
					});
					break;
				case WORKFLOW_MENU_ACTIONS.ARCHIVE:
					nodeViewEventBus.emit("archiveWorkflow");
					break;
				case WORKFLOW_MENU_ACTIONS.UNARCHIVE:
					nodeViewEventBus.emit("unarchiveWorkflow");
					break;
				case WORKFLOW_MENU_ACTIONS.DELETE:
					nodeViewEventBus.emit("deleteWorkflow");
					break;
				case WORKFLOW_MENU_ACTIONS.FAVORITE:
					await favoritesStore.toggleFavorite(props.id, "workflow");
					break;
				case WORKFLOW_MENU_ACTIONS.CHANGE_OWNER: {
					const workflowId = getWorkflowId(props.id, route.params.workflowId);
					if (!workflowId) return;
					const workflow = workflowsListStore.workflowsById[workflowId];
					const navigateAway = async () => await router.push({ name: VIEWS.WORKFLOWS });
					moveWorkflowEventBus.once("workflow-transferred", async (event) => {
						await navigateAway();
						showMoveToProjectToast({
							resourceType: ResourceType.Workflow,
							resourceTypeLabel: locale.baseText("generic.workflow").toLowerCase(),
							resourceName: event.source.workflow.name,
							targetProject: event.toast.targetProject,
							targetProjectName: event.toast.targetProjectName,
							destinationFolderId: event.destination.parentFolder.id,
							shareUsedCredentials: event.toast.shareUsedCredentials,
							areAllUsedCredentialsShareable: event.toast.areAllUsedCredentialsShareable
						});
					});
					uiStore.openMoveToFolderModal("workflow", {
						id: workflow.id,
						name: workflow.name,
						parentFolderId: props.currentFolder?.id,
						sharedWithProjects: workflow.sharedWithProjects,
						homeProjectId: workflow.homeProject?.id
					}, moveWorkflowEventBus);
					break;
				}
				default: break;
			}
		}
		__expose({ importFileRef });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([unref($style).group]) }, [createBaseVNode("input", {
				ref_key: "importFileRef",
				ref: importFileRef,
				class: normalizeClass(unref($style).hiddenInput),
				type: "file",
				"data-test-id": "workflow-import-input",
				onChange: _cache[0] || (_cache[0] = ($event) => handleFileImport())
			}, null, 34), createVNode(unref(N8nActionDropdown_default), {
				items: workflowMenuItems.value,
				"data-test-id": "workflow-menu",
				onSelect: onWorkflowMenuSelect
			}, null, 8, ["items"])], 2);
		};
	}
});
var ActionsDropdownMenu_vue_vue_type_style_index_0_lang_module_default = {
	deleteItem: "_deleteItem_ldsb8_125",
	group: "_group_ldsb8_129",
	hiddenInput: "_hiddenInput_ldsb8_134"
};
var ActionsDropdownMenu_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ActionsDropdownMenu_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ActionsDropdownMenu_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflows/workflowHistory/components/WorkflowHistoryButton.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { key: 0 };
var _hoisted_2$1 = { key: 1 };
var _hoisted_3 = { key: 2 };
var _hoisted_4 = { key: 3 };
//#endregion
//#region src/features/workflows/workflowHistory/components/WorkflowHistoryButton.vue
var WorkflowHistoryButton_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowHistoryButton",
	props: {
		workflowId: {},
		isNewWorkflow: { type: Boolean }
	},
	setup(__props) {
		const locale = useI18n();
		const props = __props;
		const uiStore = useUIStore();
		const saveStore = useWorkflowSaveStore();
		const isWorkflowSaving = ref(false);
		const { debounce } = useDebounce();
		const debouncedRemoveSaveIndicator = debounce(() => {
			isWorkflowSaving.value = false;
		}, {
			debounceTime: LOADING_ANIMATION_MIN_DURATION,
			trailing: true
		});
		watch(() => uiStore.isActionActive.workflowSaving, (isSaving) => {
			if (isSaving) isWorkflowSaving.value = true;
			else debouncedRemoveSaveIndicator();
		});
		const workflowHistoryRoute = computed(() => ({
			name: VIEWS.WORKFLOW_HISTORY,
			params: { workflowId: props.workflowId }
		}));
		const isScheduled = computed(() => saveStore.autoSaveState === AutoSaveState.Scheduled);
		const isDisabled = computed(() => props.isNewWorkflow || isScheduled.value || isWorkflowSaving.value);
		return (_ctx, _cache) => {
			return __props.workflowId ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				placement: "bottom",
				"show-after": 300
			}, {
				content: withCtx(() => [__props.isNewWorkflow ? (openBlock(), createElementBlock("span", _hoisted_1$2, toDisplayString(unref(locale).baseText("workflowHistory.button.tooltip.empty")), 1)) : isScheduled.value ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(unref(locale).baseText("workflowHistory.button.tooltip.scheduled")), 1)) : isWorkflowSaving.value ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(locale).baseText("workflowHistory.button.tooltip.saving")), 1)) : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(unref(locale).baseText("workflowHistory.button.tooltip")), 1))]),
				default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(isDisabled.value ? "div" : unref(RouterLink)), { to: isDisabled.value ? void 0 : workflowHistoryRoute.value }, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						class: "n8n-button--highlight",
						variant: "ghost",
						disabled: isDisabled.value,
						loading: isWorkflowSaving.value,
						"data-test-id": "workflow-history-button",
						icon: "history",
						"aria-label": unref(locale).baseText("workflowHistory.title"),
						size: "medium"
					}, null, 8, [
						"disabled",
						"loading",
						"aria-label"
					])]),
					_: 1
				}, 8, ["to"]))]),
				_: 1
			})) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/collaboration/collaboration/components/CollaborationPane.vue?vue&type=script&setup=true&lang.ts
var CollaborationPane_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CollaborationPane",
	setup(__props) {
		const collaborationStore = useCollaborationStore();
		const usersStore = useUsersStore();
		const workflowId = useWorkflowId();
		watch(useDocumentVisibility(), (visibilityState) => {
			if (visibilityState === "hidden") collaborationStore.stopHeartbeat();
			else collaborationStore.startHeartbeat();
		});
		const showUserStack = computed(() => collaborationStore.collaborators.length > 1);
		const collaboratorsSorted = computed(() => {
			const users = collaborationStore.collaborators.map(({ user }) => user);
			const index = users.findIndex((user) => user.id === usersStore.currentUser?.id);
			if (index < 1) return { defaultGroup: users };
			const [currentUser] = users.splice(index, 1);
			return { defaultGroup: [currentUser, ...users] };
		});
		const currentUserEmail = computed(() => usersStore.currentUser?.email);
		onMounted(() => {
			collaborationStore.initialize(workflowId.value);
		});
		onBeforeUnmount(() => {
			collaborationStore.terminate();
		});
		return (_ctx, _cache) => {
			return showUserStack.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(`collaboration-pane-container ${_ctx.$style.container}`),
				"data-test-id": "collaboration-pane"
			}, [createVNode(unref(N8nUserStack_default), {
				users: collaboratorsSorted.value,
				"current-user-email": currentUserEmail.value
			}, null, 8, ["users", "current-user-email"])], 2)) : createCommentVNode("", true);
		};
	}
});
var CollaborationPane_vue_vue_type_style_index_0_lang_module_default = { container: "_container_cvwuq_125" };
var CollaborationPane_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CollaborationPane_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CollaborationPane_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/components/MainHeader/WorkflowHeaderDraftPublishActions.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { "data-test-id": "workflow-active-version-info" };
var VERSION_ACTIONS = /* @__PURE__ */ function(VERSION_ACTIONS) {
	VERSION_ACTIONS["PUBLISH"] = "publish";
	VERSION_ACTIONS["NAME_VERSION"] = "name-version";
	VERSION_ACTIONS["PUBLISH_TIMELINE"] = "publish-timeline";
	VERSION_ACTIONS["UNPUBLISH"] = "unpublish";
	return VERSION_ACTIONS;
}(VERSION_ACTIONS || {});
var WorkflowHeaderDraftPublishActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowHeaderDraftPublishActions",
	props: {
		id: {},
		tags: {},
		name: {},
		currentFolder: {},
		isArchived: { type: Boolean },
		isNewWorkflow: { type: Boolean },
		workflowPermissions: {}
	},
	setup(__props, { expose: __expose }) {
		const props = __props;
		const actionsMenuRef = useTemplateRef("actionsMenu");
		const uiStore = useUIStore();
		const workflowDocumentStore = computed(() => useWorkflowDocumentStore(createWorkflowDocumentId(props.id)));
		const collaborationStore = useCollaborationStore();
		const projectStore = useProjectsStore();
		const workflowHistoryStore = useWorkflowHistoryStore();
		const settingsStore = useSettingsStore();
		const i18n = useI18n();
		const router = useRouter();
		const toast = useToast();
		const saveStore = useWorkflowSaveStore();
		const { saveCurrentWorkflow, cancelAutoSave } = useWorkflowSaving({ router });
		const workflowActivate = useWorkflowActivate();
		const isNamedVersionsEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.NamedVersions]);
		const autoSaveForPublish = ref(false);
		const isSaving = ref(false);
		const showSaveButton = computed(() => !settingsStore.isAutosaveEnabled);
		const onSaveButtonClick = async () => {
			isSaving.value = true;
			try {
				await saveCurrentWorkflow({});
			} finally {
				isSaving.value = false;
			}
		};
		const importFileRef = computed(() => actionsMenuRef.value?.importFileRef);
		const foundTriggers = computed(() => getActivatableTriggerNodes(workflowDocumentStore.value.workflowTriggerNodes));
		const containsTrigger = computed(() => {
			return foundTriggers.value.length > 0;
		});
		const nodesWithValidationIssues = computed(() => workflowDocumentStore.value.nodesWithValidationIssues);
		const hasNodeIssues = computed(() => workflowDocumentStore.value.hasPublishBlockingIssues);
		const workflowPublishState = computed(() => {
			const hasBeenPublished = !!activeVersion.value;
			const hasChanges = workflowDocumentStore.value.versionId !== activeVersion.value?.versionId || uiStore.hasUnsavedWorkflowChanges;
			if (!hasBeenPublished) return containsTrigger.value && !hasNodeIssues.value ? "not-published-eligible" : "not-published-not-eligible";
			if (!containsTrigger.value) return "published-invalid-trigger";
			if (hasNodeIssues.value) return "published-node-issues";
			return hasChanges ? "published-with-changes" : "published-no-changes";
		});
		const collaborationReadOnly = computed(() => collaborationStore.shouldBeReadOnly);
		const hasUpdatePermission = computed(() => props.workflowPermissions.update);
		const hasPublishPermission = computed(() => props.workflowPermissions.publish);
		const hasUnpublishPermission = computed(() => props.workflowPermissions.unpublish);
		const isPersonalSpace = computed(() => projectStore.currentProject?.type === ProjectTypes.Personal);
		/**
		* Cancel autosave if scheduled or wait for it to finish if in progress
		* Save immediately if autosave idle or cancelled
		*/
		const saveBeforePublish = async () => {
			let saved = false;
			if (saveStore.autoSaveState === AutoSaveState.InProgress && saveStore.pendingSave) {
				autoSaveForPublish.value = true;
				try {
					await saveStore.pendingSave;
					saved = true;
				} catch {} finally {
					autoSaveForPublish.value = false;
				}
			} else if (saveStore.autoSaveState === AutoSaveState.Scheduled) cancelAutoSave();
			if (!saved || uiStore.stateIsDirty || props.isNewWorkflow) {
				autoSaveForPublish.value = true;
				saved = await saveCurrentWorkflow({}, true);
				autoSaveForPublish.value = false;
			}
			return saved;
		};
		const onPublishButtonClick = async () => {
			if (uiStore.stateIsDirty || props.isNewWorkflow) {
				if (!await saveBeforePublish()) return;
			}
			uiStore.openModalWithData({
				name: WORKFLOW_PUBLISH_MODAL_KEY,
				data: {}
			});
		};
		const publishButtonConfig = computed(() => {
			if (!hasPublishPermission.value) {
				const defaultConfigForNoPermission = {
					text: i18n.baseText("workflows.publish"),
					enabled: false,
					showIndicator: false,
					indicatorClass: "",
					tooltip: isPersonalSpace.value ? i18n.baseText("workflows.publish.personalSpaceRestricted") : i18n.baseText("workflows.publish.permissionDenied"),
					showVersionInfo: false
				};
				if (!!activeVersion.value) return {
					...defaultConfigForNoPermission,
					showIndicator: true,
					showVersionInfo: true,
					indicatorClass: "published"
				};
				else return defaultConfigForNoPermission;
			}
			if (props.isNewWorkflow) return {
				text: i18n.baseText("workflows.publish"),
				enabled: containsTrigger.value && !hasNodeIssues.value,
				showIndicator: false,
				indicatorClass: "",
				tooltip: !containsTrigger.value ? i18n.baseText("workflows.publishModal.noTriggerMessage") : hasNodeIssues.value ? i18n.baseText("workflowActivator.showMessage.activeChangedNodesIssuesExistTrue.title", {
					interpolate: { count: nodesWithValidationIssues.value.length },
					adjustToNumber: nodesWithValidationIssues.value.length
				}) : "",
				showVersionInfo: false
			};
			return {
				"not-published-not-eligible": {
					text: i18n.baseText("workflows.publish"),
					enabled: false,
					showIndicator: false,
					indicatorClass: "",
					tooltip: !containsTrigger.value ? i18n.baseText("workflows.publishModal.noTriggerMessage") : i18n.baseText("workflowActivator.showMessage.activeChangedNodesIssuesExistTrue.title", {
						interpolate: { count: nodesWithValidationIssues.value.length },
						adjustToNumber: nodesWithValidationIssues.value.length
					}),
					showVersionInfo: false
				},
				"not-published-eligible": {
					text: i18n.baseText("workflows.publish"),
					enabled: true,
					showIndicator: false,
					indicatorClass: "",
					tooltip: "",
					showVersionInfo: false
				},
				"published-no-changes": {
					text: i18n.baseText("generic.published"),
					enabled: false,
					showIndicator: true,
					indicatorClass: "published",
					tooltip: "",
					showVersionInfo: true
				},
				"published-with-changes": {
					text: i18n.baseText("workflows.publish"),
					enabled: true,
					showIndicator: true,
					indicatorClass: "changes",
					tooltip: i18n.baseText("workflows.publishModal.changes"),
					showVersionInfo: false
				},
				"published-node-issues": {
					text: i18n.baseText("workflows.publish"),
					enabled: false,
					showIndicator: true,
					indicatorClass: "error",
					tooltip: i18n.baseText("workflowActivator.showMessage.activeChangedNodesIssuesExistTrue.title", {
						interpolate: { count: nodesWithValidationIssues.value.length },
						adjustToNumber: nodesWithValidationIssues.value.length
					}),
					showVersionInfo: true
				},
				"published-invalid-trigger": {
					text: i18n.baseText("workflows.publish"),
					enabled: false,
					showIndicator: true,
					indicatorClass: "changes",
					tooltip: i18n.baseText("workflows.publishModal.noTriggerMessage"),
					showVersionInfo: true
				}
			}[workflowPublishState.value];
		});
		const shouldHidePublishButton = computed(() => {
			if (props.isNewWorkflow) return false;
			return props.isArchived || !hasUpdatePermission.value && !hasPublishPermission.value;
		});
		const shouldDisablePublishButton = computed(() => {
			return props.isNewWorkflow || collaborationReadOnly.value || !publishButtonConfig.value.enabled || !hasPublishPermission.value;
		});
		const activeVersion = computed(() => workflowDocumentStore.value.activeVersion ?? null);
		const activeVersionName = computed(() => {
			if (!activeVersion.value) return "";
			return activeVersion.value.name ?? generateVersionLabelFromId(activeVersion.value.versionId);
		});
		const latestPublishDate = computed(() => {
			return getLastPublishedVersion(activeVersion.value?.workflowPublishHistory ?? [])?.createdAt;
		});
		const versionMenuActions = computed(() => {
			const actions = [{
				id: VERSION_ACTIONS.PUBLISH,
				label: i18n.baseText("workflows.publish"),
				shortcut: {
					shiftKey: true,
					keys: ["P"]
				},
				disabled: shouldDisablePublishButton.value
			}];
			if (isNamedVersionsEnabled.value) actions.push({
				id: VERSION_ACTIONS.NAME_VERSION,
				label: i18n.baseText("generic.nameVersion"),
				shortcut: {
					metaKey: true,
					keys: ["S"]
				},
				disabled: !hasUpdatePermission.value || !workflowDocumentStore.value.versionId
			});
			actions.push({
				id: VERSION_ACTIONS.PUBLISH_TIMELINE,
				label: i18n.baseText("workflowHistory.action.viewTimeline")
			});
			actions.push({
				id: VERSION_ACTIONS.UNPUBLISH,
				label: i18n.baseText("workflows.unpublish"),
				disabled: !activeVersion.value || collaborationReadOnly.value || !hasUnpublishPermission.value,
				divided: true,
				shortcut: {
					metaKey: true,
					keys: ["U"]
				}
			});
			return actions;
		});
		const shouldDisableActionDropdown = computed(() => {
			if (activeVersion.value) return false;
			return versionMenuActions.value.every((action) => action.disabled);
		});
		const onNameVersion = async () => {
			if (uiStore.stateIsDirty || props.isNewWorkflow) {
				if (!await saveBeforePublish()) return;
			}
			const currentVersionId = workflowDocumentStore.value.versionId ?? "";
			const currentVersionData = workflowDocumentStore.value.versionData;
			const nameVersionEventBus = createEventBus();
			const modalData = ref({
				versionId: currentVersionId,
				versionName: currentVersionData?.name ?? void 0,
				description: currentVersionData?.description ?? void 0,
				modalTitle: i18n.baseText("workflowHistory.nameVersionModal.title"),
				submitButtonLabel: i18n.baseText("workflowHistory.nameVersionModal.confirmButton"),
				submitting: false,
				eventBus: nameVersionEventBus
			});
			nameVersionEventBus.once("submit", async (submitData) => {
				modalData.value.submitting = true;
				try {
					await workflowHistoryStore.updateWorkflowHistoryVersion(props.id, currentVersionId, {
						name: submitData.name,
						description: submitData.description
					});
					workflowDocumentStore.value.setVersionData({
						versionId: currentVersionId,
						name: submitData.name,
						description: submitData.description
					});
					toast.showMessage({
						title: i18n.baseText("workflowHistory.action.nameVersion.success.title"),
						type: "success"
					});
					uiStore.closeModal(WORKFLOW_HISTORY_NAME_VERSION_MODAL_KEY);
				} catch (error) {
					toast.showError(error, i18n.baseText("workflowHistory.action.nameVersion.error.title"));
				} finally {
					modalData.value.submitting = false;
				}
			});
			uiStore.openModalWithData({
				name: WORKFLOW_HISTORY_NAME_VERSION_MODAL_KEY,
				data: modalData.value
			});
		};
		const onUnpublish = () => {
			if (!activeVersion.value) {
				toast.showMessage({
					title: i18n.baseText("workflowHistory.action.unpublish.notAvailable"),
					type: "warning"
				});
				return;
			}
			const unpublishEventBus = createEventBus();
			unpublishEventBus.once("unpublish", async () => {
				const success = await workflowActivate.unpublishWorkflowFromHistory(props.id);
				uiStore.closeModal(WORKFLOW_HISTORY_VERSION_UNPUBLISH);
				if (success) toast.showMessage({
					title: i18n.baseText("workflowHistory.action.unpublish.success.title"),
					type: "success"
				});
			});
			uiStore.openModalWithData({
				name: WORKFLOW_HISTORY_VERSION_UNPUBLISH,
				data: {
					versionName: activeVersion.value.name,
					eventBus: unpublishEventBus
				}
			});
		};
		const onDropdownMenuSelect = async (action) => {
			switch (action) {
				case VERSION_ACTIONS.PUBLISH:
					await onPublishButtonClick();
					break;
				case VERSION_ACTIONS.NAME_VERSION:
					await onNameVersion();
					break;
				case VERSION_ACTIONS.PUBLISH_TIMELINE:
					await router.push({
						name: VIEWS.WORKFLOW_HISTORY,
						params: { workflowId: props.id },
						query: { tab: WORKFLOW_HISTORY_PUBLISH_TIMELINE_TAB }
					});
					break;
				case VERSION_ACTIONS.UNPUBLISH:
					onUnpublish();
					break;
				default: break;
			}
		};
		useKeybindings({
			shift_p: {
				disabled: () => shouldDisablePublishButton.value,
				run: async () => {
					await onPublishButtonClick();
				}
			},
			"ctrl+s": {
				disabled: () => !isNamedVersionsEnabled.value || !hasUpdatePermission.value || !workflowDocumentStore.value.versionId,
				run: async () => {
					await onNameVersion();
				}
			},
			"ctrl+u": {
				disabled: () => !activeVersion.value || !hasUnpublishPermission.value || collaborationReadOnly.value,
				run: onUnpublish
			}
		});
		onMounted(() => {
			nodeViewEventBus.on("publishWorkflow", onPublishButtonClick);
			nodeViewEventBus.on("unpublishWorkflow", onUnpublish);
		});
		onBeforeUnmount(() => {
			nodeViewEventBus.off("publishWorkflow", onPublishButtonClick);
			nodeViewEventBus.off("unpublishWorkflow", onUnpublish);
		});
		__expose({ importFileRef });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				!__props.isNewWorkflow ? (openBlock(), createBlock(CollaborationPane_default, { key: 0 })) : createCommentVNode("", true),
				showSaveButton.value && !__props.isArchived && __props.workflowPermissions.update ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					loading: isSaving.value,
					disabled: !unref(uiStore).stateIsDirty || collaborationReadOnly.value,
					type: "secondary",
					"data-test-id": "workflow-save-button",
					onClick: onSaveButtonClick
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(uiStore).stateIsDirty ? unref(i18n).baseText("saveButton.save") : unref(i18n).baseText("saveButton.saved")), 1)]),
					_: 1
				}, 8, ["loading", "disabled"])) : createCommentVNode("", true),
				!shouldHidePublishButton.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.publishButtonWrapper)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.buttonGroup) }, [createVNode(unref(N8nTooltip_default), {
					disabled: workflowPublishState.value === "not-published-eligible" && props.workflowPermissions.publish,
					"show-after": 300,
					offset: 15
				}, {
					content: withCtx(() => [createBaseVNode("div", null, [publishButtonConfig.value.tooltip ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(publishButtonConfig.value.tooltip) + " ", 1), _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1))], 64)) : createCommentVNode("", true), activeVersion.value && publishButtonConfig.value.showVersionInfo ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
						createBaseVNode("span", _hoisted_1$1, toDisplayString(activeVersionName.value), 1),
						_cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
						createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.item.active")) + " ", 1),
						latestPublishDate.value ? (openBlock(), createBlock(TimeAgo_default, {
							key: 0,
							date: latestPublishDate.value
						}, null, 8, ["date"])) : createCommentVNode("", true)
					], 64)) : createCommentVNode("", true)])]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						class: normalizeClass(_ctx.$style.groupButtonLeft),
						loading: autoSaveForPublish.value,
						disabled: !publishButtonConfig.value.enabled || shouldDisablePublishButton.value,
						variant: "ghost",
						"data-test-id": "workflow-open-publish-modal-button",
						onClick: onPublishButtonClick
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.flex]) }, [publishButtonConfig.value.showIndicator ? (openBlock(), createElementBlock("span", {
							key: 0,
							"data-test-id": "workflow-active-version-indicator",
							class: normalizeClass({
								[_ctx.$style.indicatorDot]: true,
								[_ctx.$style.indicatorPublished]: publishButtonConfig.value.indicatorClass === "published",
								[_ctx.$style.indicatorChanges]: publishButtonConfig.value.indicatorClass === "changes",
								[_ctx.$style.indicatorIssues]: publishButtonConfig.value.indicatorClass === "error"
							})
						}, null, 2)) : createCommentVNode("", true), createBaseVNode("span", { class: normalizeClass([workflowPublishState.value === "published-no-changes" && _ctx.$style.indicatorPublishedText]) }, toDisplayString(publishButtonConfig.value.text), 3)], 2)]),
						_: 1
					}, 8, [
						"class",
						"loading",
						"disabled"
					])]),
					_: 1
				}, 8, ["disabled"]), createVNode(unref(N8nActionDropdown_default), {
					items: versionMenuActions.value,
					placement: "bottom-end",
					"data-test-id": "version-menu",
					onSelect: onDropdownMenuSelect
				}, {
					activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						class: normalizeClass(_ctx.$style.groupButtonRight),
						variant: "ghost",
						icon: "chevron-down",
						disabled: shouldDisableActionDropdown.value,
						"aria-label": unref(i18n).baseText("node.moreActions"),
						"data-test-id": "version-menu-button"
					}, null, 8, [
						"class",
						"disabled",
						"aria-label"
					])]),
					_: 1
				}, 8, ["items"])], 2)], 2)) : createCommentVNode("", true),
				createVNode(WorkflowHistoryButton_default, {
					"workflow-id": props.id,
					"is-new-workflow": __props.isNewWorkflow
				}, null, 8, ["workflow-id", "is-new-workflow"]),
				createVNode(ActionsDropdownMenu_default, {
					id: __props.id,
					ref: "actionsMenu",
					"workflow-permissions": __props.workflowPermissions,
					"is-new-workflow": __props.isNewWorkflow,
					"is-archived": __props.isArchived,
					name: __props.name,
					tags: __props.tags,
					"current-folder": __props.currentFolder
				}, null, 8, [
					"id",
					"workflow-permissions",
					"is-new-workflow",
					"is-archived",
					"name",
					"tags",
					"current-folder"
				])
			], 2);
		};
	}
});
var WorkflowHeaderDraftPublishActions_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_yoqry_125",
	activeVersionIndicator: "_activeVersionIndicator_yoqry_129",
	icon: "_icon_yoqry_133",
	publishButtonWrapper: "_publishButtonWrapper_yoqry_137",
	buttonGroup: "_buttonGroup_yoqry_143",
	groupButtonLeft: "_groupButtonLeft_yoqry_149",
	groupButtonRight: "_groupButtonRight_yoqry_161",
	indicatorDot: "_indicatorDot_yoqry_171",
	indicatorPublished: "_indicatorPublished_yoqry_179",
	indicatorPublishedText: "_indicatorPublishedText_yoqry_183",
	indicatorChanges: "_indicatorChanges_yoqry_187",
	indicatorIssues: "_indicatorIssues_yoqry_191",
	flex: "_flex_yoqry_195"
};
var WorkflowHeaderDraftPublishActions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowHeaderDraftPublishActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowHeaderDraftPublishActions_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/components/MainHeader/WorkflowDetails.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	class: "tags",
	"data-test-id": "workflow-tags-container"
};
var _hoisted_2 = { key: 1 };
var WorkflowDetails_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowDetails",
	props: {
		id: {},
		tags: {},
		name: {},
		currentFolder: {},
		isArchived: { type: Boolean },
		description: {}
	},
	setup(__props) {
		const WORKFLOW_NAME_BP_TO_WIDTH = {
			XS: 150,
			SM: 200,
			MD: 250,
			LG: 500,
			XL: 1e3
		};
		const props = __props;
		const $style = useCssModule();
		const settingsStore = useSettingsStore();
		const uiStore = useUIStore();
		const workflowsStore = useWorkflowsStore();
		const workflowsListStore = useWorkflowsListStore();
		const projectsStore = useProjectsStore();
		const collaborationStore = useCollaborationStore();
		const sourceControlStore = useSourceControlStore();
		const foldersStore = useFoldersStore();
		const i18n = useI18n();
		const router = useRouter();
		const route = useRoute();
		const locale = useI18n();
		const telemetry = useTelemetry();
		const message = useMessage();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const workflowId = useInjectWorkflowId();
		const workflowDocumentStore = inject(WorkflowDocumentStoreKey, null);
		const isTagsEditEnabled = ref(false);
		const appliedTagIds = ref([]);
		const workflowHeaderActionsRef = useTemplateRef("workflowHeaderActions");
		const tagsEventBus = createEventBus();
		const hasChanged = (prev, curr) => {
			if (prev.length !== curr.length) return true;
			const set = new Set(prev);
			return curr.reduce((acc, val) => acc || !set.has(val), false);
		};
		const isNewWorkflow = computed(() => {
			return !workflowsStore.isWorkflowSaved[props.id];
		});
		const workflowPermissions = computed(() => getResourcePermissions(workflowDocumentStore?.value?.scopes).workflow);
		const readOnly = computed(() => sourceControlStore.preferences.branchReadOnly || collaborationStore.shouldBeReadOnly);
		const readOnlyActions = computed(() => {
			if (isNewWorkflow.value) return readOnly.value;
			return readOnly.value || props.isArchived || !workflowPermissions.value.update;
		});
		const workflowTagIds = computed(() => props.tags);
		const currentFolderForBreadcrumbs = computed(() => {
			if (!isNewWorkflow.value && props.currentFolder) return props.currentFolder;
			const folderId = route.query.parentFolderId;
			if (folderId) return foldersStore.getCachedFolder(folderId);
			return null;
		});
		watch(() => props.id, () => {
			isTagsEditEnabled.value = false;
			renameInput.value?.forceCancel();
		});
		function onTagsEditEnable() {
			if (readOnlyActions.value) return;
			appliedTagIds.value = [...props.tags];
			isTagsEditEnabled.value = true;
			setTimeout(() => {
				renameInput.value?.forceCancel();
				tagsEventBus.emit("focus");
			}, 0);
		}
		function onTagsBlur() {
			const current = props.tags;
			const tags = appliedTagIds.value;
			if (!hasChanged(current, tags)) {
				isTagsEditEnabled.value = false;
				return;
			}
			if (readOnlyActions.value) {
				isTagsEditEnabled.value = false;
				return;
			}
			collaborationStore.requestWriteAccess();
			if (workflowDocumentStore?.value) workflowDocumentStore.value.setTags(tags);
			uiStore.markStateDirty("metadata");
			telemetry.track("User edited workflow tags", {
				workflow_id: props.id,
				new_tag_count: tags.length
			});
			isTagsEditEnabled.value = false;
		}
		function onTagsEditEsc() {
			isTagsEditEnabled.value = false;
		}
		const renameInput = useTemplateRef("renameInput");
		function onNameToggle() {
			if (renameInput.value?.forceFocus) renameInput.value.forceFocus();
		}
		function onNameSubmit(name) {
			const newName = name.trim();
			if (!newName) {
				toast.showMessage({
					title: locale.baseText("renameAction.emptyName.title"),
					message: locale.baseText("renameAction.emptyName.message"),
					type: "error"
				});
				renameInput.value?.forceCancel();
				return;
			}
			if (newName === props.name) {
				renameInput.value?.forceCancel();
				return;
			}
			workflowDocumentStore?.value?.setName(newName);
			uiStore.markStateDirty("metadata");
			documentTitle.setDocumentTitle(newName, "IDLE");
			renameInput.value?.forceCancel();
		}
		async function handleArchiveWorkflow() {
			if (workflowDocumentStore?.value?.active) {
				if (await message.confirm(locale.baseText("mainSidebar.confirmMessage.workflowArchive.message", { interpolate: { workflowName: props.name } }), locale.baseText("mainSidebar.confirmMessage.workflowArchive.headline"), {
					type: "warning",
					confirmButtonText: locale.baseText("mainSidebar.confirmMessage.workflowArchive.confirmButtonText"),
					cancelButtonText: locale.baseText("mainSidebar.confirmMessage.workflowArchive.cancelButtonText")
				}) !== "confirm") return;
			}
			try {
				const expectedChecksum = props.id === workflowId.value ? workflowDocumentStore?.value?.checksum : void 0;
				await workflowsStore.archiveWorkflow(props.id, expectedChecksum);
				workflowDocumentStore?.value?.setActiveState({
					activeVersionId: null,
					activeVersion: null
				});
			} catch (error) {
				toast.showError(error, locale.baseText("generic.archiveWorkflowError"));
				return;
			}
			uiStore.markStateClean();
			const archivedWorkflowId = props.id;
			const archivedWorkflowName = props.name;
			toast.showToast({
				title: locale.baseText("mainSidebar.showMessage.handleArchive.title", { interpolate: { workflowName: archivedWorkflowName } }),
				message: `<a href="#" data-test-id="archive-toast-delete-permanently-link">${locale.baseText("mainSidebar.showMessage.handleArchive.message")}</a>`,
				onClick: (event) => {
					if (event?.target instanceof HTMLAnchorElement) {
						event.preventDefault();
						deleteArchivedWorkflow(archivedWorkflowId, archivedWorkflowName);
					}
				},
				type: "success"
			});
			const homeProject = workflowDocumentStore?.value?.homeProject;
			if (homeProject) await router.push({
				name: VIEWS.PROJECTS_WORKFLOWS,
				params: { projectId: homeProject.id }
			});
			else await router.push({ name: VIEWS.WORKFLOWS });
		}
		async function deleteArchivedWorkflow(id, name) {
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
		}
		async function handleUnarchiveWorkflow() {
			await workflowsStore.unarchiveWorkflow(props.id);
			toast.showMessage({
				title: locale.baseText("mainSidebar.showMessage.handleUnarchive.title", { interpolate: { workflowName: props.name } }),
				type: "success"
			});
		}
		async function handleDeleteWorkflow() {
			if (await message.confirm(locale.baseText("mainSidebar.confirmMessage.workflowDelete.message", { interpolate: { workflowName: props.name } }), locale.baseText("mainSidebar.confirmMessage.workflowDelete.headline"), {
				type: "warning",
				confirmButtonText: locale.baseText("mainSidebar.confirmMessage.workflowDelete.confirmButtonText"),
				cancelButtonText: locale.baseText("mainSidebar.confirmMessage.workflowDelete.cancelButtonText")
			}) !== "confirm") return;
			const homeProject = workflowDocumentStore?.value?.homeProject;
			try {
				await workflowsListStore.deleteWorkflow(props.id);
			} catch (error) {
				toast.showError(error, locale.baseText("generic.deleteWorkflowError"));
				return;
			}
			uiStore.markStateClean();
			documentTitle.reset();
			toast.showMessage({
				title: locale.baseText("mainSidebar.showMessage.handleSelect1.title", { interpolate: { workflowName: props.name } }),
				type: "success"
			});
			if (homeProject) await router.push({
				name: VIEWS.PROJECTS_WORKFLOWS,
				params: { projectId: homeProject.id }
			});
			else await router.push({ name: VIEWS.WORKFLOWS });
		}
		const onBreadcrumbsItemSelected = (item) => {
			if (item.href) router.push(item.href).catch((error) => {
				toast.showError(error, i18n.baseText("folders.open.error.title"));
			});
		};
		const handleImportWorkflowFromFile = () => {
			if (workflowHeaderActionsRef.value?.importFileRef) workflowHeaderActionsRef.value.importFileRef.click();
		};
		onMounted(() => {
			nodeViewEventBus.on("importWorkflowFromFile", handleImportWorkflowFromFile);
			nodeViewEventBus.on("archiveWorkflow", handleArchiveWorkflow);
			nodeViewEventBus.on("unarchiveWorkflow", handleUnarchiveWorkflow);
			nodeViewEventBus.on("deleteWorkflow", handleDeleteWorkflow);
			nodeViewEventBus.on("renameWorkflow", onNameToggle);
			nodeViewEventBus.on("addTag", onTagsEditEnable);
		});
		onBeforeUnmount(() => {
			nodeViewEventBus.off("importWorkflowFromFile", handleImportWorkflowFromFile);
			nodeViewEventBus.off("archiveWorkflow", handleArchiveWorkflow);
			nodeViewEventBus.off("unarchiveWorkflow", handleUnarchiveWorkflow);
			nodeViewEventBus.off("deleteWorkflow", handleDeleteWorkflow);
			nodeViewEventBus.off("renameWorkflow", onNameToggle);
			nodeViewEventBus.off("addTag", onTagsEditEnable);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(unref($style).container) }, [
				createVNode(BreakpointsObserver_default, {
					"value-x-s": 15,
					"value-s-m": 25,
					"value-m-d": 50,
					class: "name-container",
					"data-test-id": "canvas-breadcrumbs"
				}, {
					default: withCtx(({ bp }) => [createVNode(FolderBreadcrumbs_default, {
						"current-folder": currentFolderForBreadcrumbs.value,
						"current-folder-as-link": true,
						onItemSelected: onBreadcrumbsItemSelected
					}, {
						append: withCtx(() => [unref(projectsStore).currentProject ?? unref(projectsStore).personalProject ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(unref($style)["path-separator"])
						}, "/", 2)) : createCommentVNode("", true), (openBlock(), createBlock(unref(N8nInlineTextEdit_default), {
							ref_key: "renameInput",
							ref: renameInput,
							key: __props.id,
							placeholder: "Workflow name",
							"data-test-id": "workflow-name-input",
							class: "name",
							"model-value": __props.name,
							"max-length": unref(128),
							"max-width": WORKFLOW_NAME_BP_TO_WIDTH[bp],
							"read-only": readOnlyActions.value,
							disabled: readOnlyActions.value,
							"onUpdate:modelValue": onNameSubmit
						}, null, 8, [
							"model-value",
							"max-length",
							"max-width",
							"read-only",
							"disabled"
						]))]),
						_: 2
					}, 1032, ["current-folder"])]),
					_: 1
				}),
				createBaseVNode("span", _hoisted_1, [unref(settingsStore).areTagsEnabled ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [isTagsEditEnabled.value && !readOnlyActions.value ? (openBlock(), createBlock(WorkflowTagsDropdown_default, {
					key: 0,
					ref: "dropdown",
					modelValue: appliedTagIds.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => appliedTagIds.value = $event),
					"event-bus": unref(tagsEventBus),
					placeholder: unref(i18n).baseText("workflowDetails.chooseOrCreateATag"),
					class: "tags-edit",
					"data-test-id": "workflow-tags-dropdown",
					onBlur: onTagsBlur,
					onEsc: onTagsEditEsc
				}, null, 8, [
					"modelValue",
					"event-bus",
					"placeholder"
				])) : __props.tags.length === 0 && !readOnlyActions.value ? (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("span", {
					class: "add-tag clickable",
					"data-test-id": "new-tag-link",
					onClick: onTagsEditEnable
				}, " + " + toDisplayString(unref(i18n).baseText("workflowDetails.addTag")), 1)])) : (openBlock(), createBlock(WorkflowTagsContainer_default, {
					key: __props.id,
					"tag-ids": workflowTagIds.value,
					clickable: true,
					responsive: true,
					"data-test-id": "workflow-tags",
					onClick: onTagsEditEnable
				}, null, 8, ["tag-ids"]))], 64)) : createCommentVNode("", true), createBaseVNode("span", { class: normalizeClass(unref($style)["header-controls"]) }, [__props.isArchived ? (openBlock(), createBlock(unref(N8nBadge_default), {
					key: 0,
					class: "ml-3xs",
					theme: "tertiary",
					bold: "",
					"data-test-id": "workflow-archived-tag"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("workflows.item.archived")), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 2)]),
				createVNode(ConnectionTracker_default, { class: "actions" }, {
					default: withCtx(() => [!isNewWorkflow.value ? (openBlock(), createBlock(WorkflowProductionChecklist_default, { key: 0 })) : createCommentVNode("", true), createVNode(WorkflowHeaderDraftPublishActions_default, {
						id: __props.id,
						ref: "workflowHeaderActions",
						tags: __props.tags,
						name: __props.name,
						"is-archived": __props.isArchived,
						"is-new-workflow": isNewWorkflow.value,
						"workflow-permissions": workflowPermissions.value,
						"current-folder": currentFolderForBreadcrumbs.value ?? void 0
					}, null, 8, [
						"id",
						"tags",
						"name",
						"is-archived",
						"is-new-workflow",
						"workflow-permissions",
						"current-folder"
					])]),
					_: 1
				})
			], 2);
		};
	}
});
//#endregion
//#region src/app/components/MainHeader/WorkflowDetails.vue?vue&type=style&index=1&lang.module.scss
var container$1 = "_container_h2714_125";
var closeNodeViewDiscovery = "_closeNodeViewDiscovery_h2714_140";
var WorkflowDetails_vue_vue_type_style_index_1_lang_module_default = {
	container: container$1,
	"path-separator": "_path-separator_h2714_134",
	closeNodeViewDiscovery,
	"header-controls": "_header-controls_h2714_147"
};
var WorkflowDetails_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowDetails_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowDetails_vue_vue_type_style_index_1_lang_module_default }], ["__scopeId", "data-v-0673d8bf"]]);
//#endregion
//#region ../../../node_modules/.pnpm/vue-github-button@3.1.3/node_modules/vue-github-button/index.js
init_shared_esm_bundler();
var vue_github_button_default = defineComponent({
	name: "github-button",
	props: {
		href: String,
		ariaLabel: String,
		title: String,
		dataIcon: String,
		dataColorScheme: String,
		dataSize: String,
		dataShowCount: String,
		dataText: String
	},
	render: function() {
		const props = { ref: "_" };
		for (const key in this.$props) props[hyphenate(key)] = this.$props[key];
		return h("span", [hasOwn(this.$slots, "default") ? h("a", props, this.$slots.default()) : h("a", props)]);
	},
	mounted: function() {
		this.paint();
	},
	beforeUpdate: function() {
		this.reset();
	},
	updated: function() {
		this.paint();
	},
	beforeUnmount: function() {
		this.reset();
	},
	methods: {
		paint: function() {
			if (this.$el.lastChild !== this.$refs._) return;
			const _ = this.$el.appendChild(document.createElement("span"));
			const _this = this;
			__vitePreload(() => import(
				/* webpackMode: "eager" */
				"./buttons.esm-dzkOp4ru.js"
).then(function(module) {
				if (_this.$el.lastChild !== _) return;
				module.render(_.appendChild(_this.$refs._), function(el) {
					if (_this.$el.lastChild !== _) return;
					_.parentNode.replaceChild(el, _);
				});
			}), []);
		},
		reset: function() {
			if (this.$refs._ == null) return;
			this.$el.replaceChild(this.$refs._, this.$el.lastChild);
		}
	}
});
//#endregion
//#region src/app/components/MainHeader/MainHeader.vue?vue&type=script&setup=true&lang.ts
var MainHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MainHeader",
	setup(__props) {
		const router = useRouter();
		const route = useRoute();
		const locale = useI18n();
		const pushConnection = usePushConnection({ router });
		const toast = useToast();
		const ndvStore = injectNDVStoreIfProvided();
		const uiStore = useUIStore();
		const workflowsListStore = useWorkflowsListStore();
		const executionsStore = useExecutionsStore();
		const settingsStore = useSettingsStore();
		const activeHeaderTab = ref(MAIN_HEADER_TABS.WORKFLOW);
		const workflowToReturnTo = ref("");
		const executionToReturnTo = ref("");
		const dirtyState = ref(false);
		const githubButtonHidden = useLocalStorage(LOCAL_STORAGE_HIDE_GITHUB_STAR_BUTTON, false);
		const evaluationRoutes = [VIEWS.EVALUATION_EDIT, VIEWS.EVALUATION_RUNS_DETAIL];
		const workflowRoutes = [
			VIEWS.WORKFLOW,
			VIEWS.NEW_WORKFLOW,
			VIEWS.EXECUTION_DEBUG
		];
		const executionRoutes = [
			VIEWS.EXECUTION_HOME,
			VIEWS.WORKFLOW_EXECUTIONS,
			VIEWS.EXECUTION_PREVIEW
		];
		const tabBarItems = computed(() => {
			return [
				{
					value: MAIN_HEADER_TABS.WORKFLOW,
					label: locale.baseText("generic.editor")
				},
				{
					value: MAIN_HEADER_TABS.EXECUTIONS,
					label: locale.baseText("generic.executions")
				},
				{
					value: MAIN_HEADER_TABS.EVALUATION,
					label: locale.baseText("generic.tests")
				}
			];
		});
		const activeNode = computed(() => ndvStore.value?.activeNode ?? null);
		const hideMenuBar = computed(() => Boolean(activeNode.value && activeNode.value.type !== "n8n-nodes-base.stickyNote"));
		const workflowId = useInjectWorkflowId();
		const workflowDocumentStore = inject(WorkflowDocumentStoreKey, null);
		const workflowName = computed(() => workflowDocumentStore?.value?.name ?? "");
		const workflowTags = computed(() => workflowDocumentStore?.value?.tags ?? []);
		const workflowIsArchived = computed(() => workflowDocumentStore?.value?.isArchived ?? false);
		const workflowDescription = computed(() => workflowDocumentStore?.value?.description ?? "");
		const onWorkflowPage = computed(() => !!(route.meta.nodeView || route.meta.keepWorkflowAlive));
		const isEnterprise = computed(() => settingsStore.isQueueModeEnabled && settingsStore.isWorkerViewAvailable);
		const isTelemetryEnabled = computed(() => {
			return settingsStore.isTelemetryEnabled;
		});
		const showGitHubButton = computed(() => !isEnterprise.value && !settingsStore.settings.inE2ETests && !githubButtonHidden.value && isTelemetryEnabled.value);
		const parentFolderForBreadcrumbs = computed(() => {
			const folder = workflowDocumentStore?.value?.parentFolder;
			if (!folder) return void 0;
			return {
				id: folder.id,
				name: folder.name,
				parentFolder: folder.parentFolderId ?? void 0
			};
		});
		watch(route, (to, from) => {
			syncTabsWithRoute(to, from);
		});
		onBeforeMount(() => {
			pushConnection.initialize();
		});
		onBeforeUnmount(() => {
			pushConnection.terminate();
		});
		onMounted(async () => {
			dirtyState.value = uiStore.stateIsDirty;
			syncTabsWithRoute(route);
		});
		function isViewRoute(name) {
			return typeof name === "string" && [
				evaluationRoutes,
				workflowRoutes,
				executionRoutes
			].flat().includes(name);
		}
		function syncTabsWithRoute(to, from) {
			const routeTabMapping = [
				{
					routes: evaluationRoutes,
					tab: MAIN_HEADER_TABS.EVALUATION
				},
				{
					routes: executionRoutes,
					tab: MAIN_HEADER_TABS.EXECUTIONS
				},
				{
					routes: workflowRoutes,
					tab: MAIN_HEADER_TABS.WORKFLOW
				}
			];
			if (to.name && isViewRoute(to.name)) {
				const matchingTab = routeTabMapping.find(({ routes }) => routes.includes(to.name));
				if (matchingTab) activeHeaderTab.value = matchingTab.tab;
			}
			if (typeof to.params.workflowId === "string") workflowToReturnTo.value = to.params.workflowId;
			if (from?.name === VIEWS.EXECUTION_PREVIEW && to.params.workflowId === from.params.workflowId && typeof from.params.executionId === "string") executionToReturnTo.value = from.params.executionId;
		}
		function onTabSelected(tab, event) {
			const openInNewTab = event.ctrlKey || event.metaKey;
			switch (tab) {
				case MAIN_HEADER_TABS.WORKFLOW:
					navigateToWorkflowView(openInNewTab);
					break;
				case MAIN_HEADER_TABS.EXECUTIONS:
					navigateToExecutionsView(openInNewTab);
					break;
				case MAIN_HEADER_TABS.EVALUATION:
					navigateToEvaluationsView(openInNewTab);
					break;
				default: break;
			}
		}
		async function navigateToWorkflowView(openInNewTab) {
			let routeToNavigateTo;
			if (workflowToReturnTo.value && workflowToReturnTo.value !== "") routeToNavigateTo = {
				name: VIEWS.WORKFLOW,
				params: { workflowId: workflowToReturnTo.value },
				query: route.query
			};
			else routeToNavigateTo = {
				name: VIEWS.NEW_WORKFLOW,
				query: route.query
			};
			if (openInNewTab) {
				const { href } = router.resolve(routeToNavigateTo);
				window.open(href, "_blank");
			} else if (route.name !== routeToNavigateTo.name) {
				if (route.name === VIEWS.NEW_WORKFLOW) if (dirtyState.value) uiStore.markStateDirty();
				else uiStore.markStateClean();
				activeHeaderTab.value = MAIN_HEADER_TABS.WORKFLOW;
				await router.push(routeToNavigateTo);
			}
		}
		async function navigateToExecutionsView(openInNewTab) {
			const executionToReturnToValue = executionsStore.activeExecution?.id || executionToReturnTo.value;
			const routeToNavigateTo = executionToReturnToValue ? {
				name: VIEWS.EXECUTION_PREVIEW,
				params: {
					workflowId: workflowId.value,
					executionId: executionToReturnToValue
				},
				query: route.query
			} : {
				name: VIEWS.EXECUTION_HOME,
				params: { workflowId: workflowId.value },
				query: route.query
			};
			if (openInNewTab) {
				const { href } = router.resolve(routeToNavigateTo);
				window.open(href, "_blank");
			} else if (route.name !== routeToNavigateTo.name) {
				dirtyState.value = uiStore.stateIsDirty;
				workflowToReturnTo.value = workflowId.value;
				activeHeaderTab.value = MAIN_HEADER_TABS.EXECUTIONS;
				await router.push(routeToNavigateTo);
			}
		}
		async function navigateToEvaluationsView(openInNewTab) {
			const routeToNavigateTo = {
				name: VIEWS.EVALUATION_EDIT,
				params: { workflowId: workflowId.value },
				query: route.query
			};
			if (openInNewTab) {
				const { href } = router.resolve(routeToNavigateTo);
				window.open(href, "_blank");
			} else if (route.name !== routeToNavigateTo.name) {
				dirtyState.value = uiStore.stateIsDirty;
				workflowToReturnTo.value = workflowId.value;
				activeHeaderTab.value = MAIN_HEADER_TABS.EVALUATION;
				await router.push(routeToNavigateTo);
			}
		}
		function hideGithubButton() {
			githubButtonHidden.value = true;
		}
		async function onWorkflowDeactivated() {
			if (settingsStore.isModuleActive("mcp") && workflowDocumentStore?.value?.settings?.availableInMCP) try {
				const updatedWorkflow = await workflowsListStore.fetchWorkflow(workflowId.value);
				workflowDocumentStore?.value?.hydrate(updatedWorkflow);
				toast.showToast({
					title: locale.baseText("mcp.workflowDeactivated.title"),
					message: locale.baseText("mcp.workflowDeactivated.message"),
					type: "info"
				});
			} catch (error) {
				toast.showError(error, locale.baseText("workflowSettings.showError.fetchSettings.title"));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass({
				[_ctx.$style["main-header"]]: true,
				[_ctx.$style.expanded]: !unref(uiStore).sidebarMenuCollapsed,
				[_ctx.$style["canvas-only"]]: unref(settingsStore).isCanvasOnly
			}) }, [withDirectives(createBaseVNode("div", { class: normalizeClass(_ctx.$style["top-menu"]) }, [workflowName.value ? (openBlock(), createBlock(WorkflowDetails_default, {
				key: 0,
				id: unref(workflowId),
				tags: workflowTags.value,
				name: workflowName.value,
				"current-folder": parentFolderForBreadcrumbs.value,
				"is-archived": workflowIsArchived.value,
				description: workflowDescription.value,
				"onWorkflow:deactivated": onWorkflowDeactivated
			}, null, 8, [
				"id",
				"tags",
				"name",
				"current-folder",
				"is-archived",
				"description"
			])) : createCommentVNode("", true), showGitHubButton.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass([_ctx.$style["github-button"], "hidden-sm-and-down"])
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["github-button-container"]) }, [createVNode(unref(vue_github_button_default), {
				href: unref(N8N_MAIN_GITHUB_REPO_URL),
				"data-color-scheme": unref(uiStore).appliedTheme,
				"data-size": "large",
				"data-show-count": "true",
				"aria-label": unref(locale).baseText("editor.mainHeader.githubButton.label")
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("generic.star")), 1)]),
				_: 1
			}, 8, [
				"href",
				"data-color-scheme",
				"aria-label"
			]), createVNode(unref(N8nIcon_default), {
				class: normalizeClass(_ctx.$style["close-github-button"]),
				icon: "circle-x",
				size: "medium",
				onClick: hideGithubButton
			}, null, 8, ["class"])], 2)], 2)) : createCommentVNode("", true)], 2), [[vShow, !hideMenuBar.value && !unref(settingsStore).isCanvasOnly]]), onWorkflowPage.value ? (openBlock(), createBlock(TabBar_default, {
				key: 0,
				items: tabBarItems.value,
				"model-value": activeHeaderTab.value,
				floating: unref(settingsStore).isCanvasOnly,
				"onUpdate:modelValue": onTabSelected
			}, null, 8, [
				"items",
				"model-value",
				"floating"
			])) : createCommentVNode("", true)], 2)], 2);
		};
	}
});
var MainHeader_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_r2z2m_125",
	"main-header": "_main-header_r2z2m_132",
	"canvas-only": "_canvas-only_r2z2m_140",
	"top-menu": "_top-menu_r2z2m_146",
	"github-button": "_github-button_r2z2m_157",
	"close-github-button": "_close-github-button_r2z2m_166",
	"github-button-container": "_github-button-container_r2z2m_181"
};
var MainHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MainHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MainHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { MainHeader_default as t };
