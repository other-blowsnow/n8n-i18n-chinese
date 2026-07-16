import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, Ut as toValue, W as nextTick, X as onMounted, Z as onUnmounted, _ as Fragment, at as resolveComponent, bt as withCtx, gt as watch, j as createVNode, ot as resolveDirective, rt as renderList, tt as provide, vn as normalizeClass, w as createBlock, xt as withDirectives, zt as shallowRef } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-CEUyFjtd.js";
import { Ga as N8nHeading_default, Ja as N8nButton_default, Ot as createEventBus, P as N8nSpinner_default, Qt as ElDropdownMenu, Ti as N8nBadge_default, Wi as N8nIconButton_default, Xt as ElDropdown, Ya as N8nIcon_default, Zt as ElDropdownItem, gt as useRoute, qa as N8nText_default, tn as ElTag, zi as N8nTooltip_default } from "./src-XWsjz-dU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useMessage } from "./useMessage-61j3djBg.js";
import { t as useToast } from "./useToast-CYomjipa.js";
import { $u as WorkflowDocumentStoreKey, Vd as EnterpriseEditionFeature, Yu as EditorEnabledFeaturesKey, bu as getResourcePermissions, di as VIEWS, ed as WorkflowIdKey, mi as ADD_EXECUTION_TO_DATASET_MODAL_KEY, sc as isTerminalExecutionStatus, yl as deepCopy } from "./constants-BaNoJas_.js";
import { Gt as disposeWorkflowExecutionStateStore, Vt as disposeNDVStore, Wt as useNDVStore, b as useEvaluationStore, cn as useWorkflowsStore, dn as hasExecutionDataStore, fn as useExecutionDataStore, i as disposeWorkflowDocumentStore, ln as createExecutionDataId, n as createExecutionPreviewDocumentVersion, nn as getExecutionErrorToastConfiguration, qt as useWorkflowExecutionStateStore, r as createWorkflowDocumentId, s as useWorkflowDocumentStore, t as createExecutionPreviewDocumentId, un as disposeExecutionDataStore } from "./workflowDocument.store-LDfI_CPs.js";
import { t as useSettingsStore } from "./settings.store-BSo6Wkgz.js";
import { f as useUIStore, p as useTelemetry } from "./users.store-CHh4wCL_.js";
import { g as formatBytes, t as useWorkflowsListStore } from "./workflowsList.store-BfnM1vpV.js";
import { t as useExternalHooks } from "./useExternalHooks-QF0LbmQL.js";
import { s as useWorkflowHistoryStore } from "./builder.store-CRHWTGTG.js";
import { t as useExecutionsStore } from "./executions.store-LBrlsin8.js";
import { A as useWorkflowNormalization, u as useLogsStore } from "./useCanvasOperations-jb8MY4w9.js";
import { t as canvasEventBus } from "./canvas.eventBus--1xjwMZl.js";
import { t as useInjectWorkflowId } from "./useInjectWorkflowId-DARNb_P_.js";
import { t as convertToDisplayDate } from "./dateFormatter-ClR1Oxhp.js";
import { t as useExecutionHelpers } from "./useExecutionHelpers-Cml_sfeA.js";
import { n as LogsPanel_default, t as useExecutionDebugging } from "./useExecutionDebugging-DETo6TgM.js";
import { t as NodeView_default } from "./NodeView-BM1AkHJE.js";
import { r as useEvaluationsWizardSidepanelExperiment } from "./useEvaluationsLicense-CZCw8Xti.js";
import { t as AnnotationTagsDropdown_ee_default } from "./AnnotationTagsDropdown.ee-A_1ooio0.js";
//#region src/features/execution/executions/components/workflow/WorkflowExecutionAnnotationPanel.ee.vue?vue&type=script&setup=true&lang.ts
var WorkflowExecutionAnnotationPanel_ee_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionAnnotationPanel.ee",
	props: { execution: {} },
	setup(__props) {
		const props = __props;
		const workflowsListStore = useWorkflowsListStore();
		const i18n = useI18n();
		const annotationDropdownRef = ref(null);
		const isDropdownVisible = ref(false);
		const workflowId = useInjectWorkflowId();
		const workflowPermissions = computed(() => getResourcePermissions(workflowsListStore.getWorkflowById(workflowId.value)?.scopes).workflow);
		const customDataLength = computed(() => {
			return props.execution?.customData ? Object.keys(props.execution?.customData).length : 0;
		});
		function onEllipsisButtonBlur(event) {
			if (annotationDropdownRef.value && event.relatedTarget === null) annotationDropdownRef.value.handleClose();
		}
		function onDropdownVisibleChange(visible) {
			isDropdownVisible.value = visible;
		}
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return __props.execution ? (openBlock(), createBlock(unref(ElDropdown), {
				key: 0,
				ref_key: "annotationDropdownRef",
				ref: annotationDropdownRef,
				trigger: "click",
				onVisibleChange: onDropdownVisibleChange
			}, {
				dropdown: withCtx(() => [createBaseVNode("div", {
					ref: "container",
					class: normalizeClass(["execution-annotation-panel", _ctx.$style.container]),
					"data-test-id": "execution-annotation-panel"
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.section) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.heading) }, [createVNode(unref(N8nHeading_default), {
					tag: "h3",
					size: "small",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.annotationData")), 1)]),
					_: 1
				})], 2), __props.execution?.customData && Object.keys(__props.execution?.customData).length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.metadata)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(__props.execution?.customData), (attr) => {
					return openBlock(), createElementBlock("div", {
						key: attr,
						class: normalizeClass(_ctx.$style.customDataEntry)
					}, [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.key),
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(attr), 1)]),
						_: 2
					}, 1032, ["class"]), createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.value),
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.execution?.customData[attr]), 1)]),
						_: 2
					}, 1032, ["class"])], 2);
				}), 128))], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.noResultsContainer),
					"data-test-id": "execution-annotation-data-empty"
				}, [createVNode(unref(N8nText_default), {
					color: "text-base",
					size: "small",
					align: "center"
				}, {
					default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("executionAnnotationView.data.notFound")]])]),
					_: 1
				})], 2))], 2)], 2)]),
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					title: unref(i18n).baseText("executionDetails.additionalActions"),
					disabled: !workflowPermissions.value.update,
					icon: "list-checks",
					class: normalizeClass({
						[_ctx.$style.highlightDataButton]: true,
						[_ctx.$style.highlightDataButtonActive]: customDataLength.value > 0,
						[_ctx.$style.highlightDataButtonOpen]: isDropdownVisible.value
					}),
					size: "small",
					"data-test-id": "execution-preview-ellipsis-button",
					onBlur: onEllipsisButtonBlur
				}, {
					default: withCtx(() => [customDataLength.value > 0 ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.badge),
						theme: "primary"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(customDataLength.value.toString()), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"title",
					"disabled",
					"class"
				])]),
				_: 1
			}, 512)) : createCommentVNode("", true);
		};
	}
});
var WorkflowExecutionAnnotationPanel_ee_vue_vue_type_style_index_0_lang_module_default = {
	highlightDataButton: "_highlightDataButton_7tc76_125",
	highlightDataButtonActive: "_highlightDataButtonActive_7tc76_130",
	highlightDataButtonOpen: "_highlightDataButtonOpen_7tc76_134",
	badge: "_badge_7tc76_140",
	container: "_container_7tc76_144",
	section: "_section_7tc76_156",
	metadata: "_metadata_7tc76_165",
	heading: "_heading_7tc76_169",
	controls: "_controls_7tc76_176",
	customDataEntry: "_customDataEntry_7tc76_188",
	key: "_key_7tc76_195",
	noResultsContainer: "_noResultsContainer_7tc76_199",
	"execution-annotation-panel": "_execution-annotation-panel_7tc76_204",
	"el-skeleton__item": "_el-skeleton__item_7tc76_204"
};
var WorkflowExecutionAnnotationPanel_ee_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowExecutionAnnotationPanel_ee_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionAnnotationPanel_ee_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/execution/executions/components/workflow/WorkflowExecutionAnnotationTags.ee.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { key: 1 };
var WorkflowExecutionAnnotationTags_ee_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionAnnotationTags.ee",
	props: { execution: {} },
	setup(__props) {
		const props = __props;
		const locale = useI18n();
		const telemetry = useTelemetry();
		const { showError } = useToast();
		const executionsStore = useExecutionsStore();
		const tagIds = computed(() => props.execution.annotation?.tags.map((tag) => tag.id) ?? []);
		const tags = computed(() => props.execution.annotation?.tags);
		const tagsEventBus = createEventBus();
		const isTagsEditEnabled = ref(false);
		const appliedTagIds = ref([]);
		const tagsSaving = ref(false);
		const tagsHasChanged = (prev, curr) => {
			if (prev.length !== curr.length) return true;
			const set = new Set(prev);
			return curr.reduce((acc, val) => acc || !set.has(val), false);
		};
		const onTagsEditEnable = () => {
			appliedTagIds.value = tagIds.value;
			isTagsEditEnabled.value = true;
			tagsEventBus.emit("focus");
		};
		const onTagsBlur = async () => {
			if (!props.execution) return;
			const currentTagIds = tagIds.value ?? [];
			const newTagIds = appliedTagIds.value;
			if (!tagsHasChanged(currentTagIds, newTagIds)) {
				isTagsEditEnabled.value = false;
				return;
			}
			if (tagsSaving.value) return;
			tagsSaving.value = true;
			try {
				await executionsStore.annotateExecution(props.execution.id, { tags: newTagIds });
				if (newTagIds.length > 0) telemetry.track("User added execution annotation tag", {
					tag_ids: newTagIds,
					execution_id: props.execution.id
				});
			} catch (e) {
				showError(e, "executionAnnotationView.tag.error");
			}
			tagsSaving.value = false;
			isTagsEditEnabled.value = false;
		};
		const onTagsEditEsc = () => {
			isTagsEditEnabled.value = false;
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.executionDetailsTags) }, [createBaseVNode("span", {
				class: normalizeClass(_ctx.$style.tags),
				"data-test-id": "annotation-tags-container"
			}, [isTagsEditEnabled.value ? (openBlock(), createBlock(AnnotationTagsDropdown_ee_default, {
				key: 0,
				ref: "dropdown",
				modelValue: appliedTagIds.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => appliedTagIds.value = $event),
				"create-enabled": true,
				"event-bus": unref(tagsEventBus),
				placeholder: unref(locale).baseText("executionAnnotationView.chooseOrCreateATag"),
				class: "tags-edit",
				"data-test-id": "workflow-tags-dropdown",
				onBlur: onTagsBlur,
				onEsc: onTagsEditEsc
			}, null, 8, [
				"modelValue",
				"event-bus",
				"placeholder"
			])) : tagIds.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nButton_default), {
				variant: "ghost",
				class: normalizeClass([_ctx.$style.addTagButton, "clickable"]),
				label: unref(locale).baseText("executionAnnotationView.addTag"),
				size: "xsmall",
				outline: false,
				"data-test-id": "new-tag-link",
				icon: "plus",
				onClick: onTagsEditEnable
			}, null, 8, ["class", "label"])])) : (openBlock(), createElementBlock("span", {
				key: 2,
				class: normalizeClass(["tags-container", _ctx.$style.tagsContainer]),
				"data-test-id": "execution-annotation-tags",
				onClick: onTagsEditEnable
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(tags.value, (tag) => {
				return openBlock(), createElementBlock("span", {
					key: tag.id,
					class: "clickable"
				}, [createVNode(unref(ElTag), {
					title: tag.name,
					type: "info",
					size: "small",
					"disable-transitions": true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(tag.name), 1)]),
					_: 2
				}, 1032, ["title"])]);
			}), 128)), createBaseVNode("span", { class: normalizeClass(_ctx.$style.addTagWrapper) }, [createVNode(unref(N8nButton_default), {
				variant: "ghost",
				class: normalizeClass([
					_ctx.$style.addTagButton,
					_ctx.$style.addTagButtonIconOnly,
					"clickable"
				]),
				size: "xsmall",
				outline: false,
				"data-test-id": "new-tag-link",
				icon: "plus",
				onClick: onTagsEditEnable
			}, null, 8, ["class"])], 2)], 2))], 2)], 2);
		};
	}
});
var WorkflowExecutionAnnotationTags_ee_vue_vue_type_style_index_0_lang_module_default = {
	tags: "_tags_12rjz_125",
	addTagButton: "_addTagButton_12rjz_130",
	addTagButtonIconOnly: "_addTagButtonIconOnly_12rjz_151",
	tagsContainer: "_tagsContainer_12rjz_156"
};
var WorkflowExecutionAnnotationTags_ee_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowExecutionAnnotationTags_ee_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionAnnotationTags_ee_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/execution/executions/composables/useExecutionPreviewDocument.ts
/**
* Loads an execution for read-only preview into a fully isolated set of
* stores, keyed by the synthetic `{workflowId}@execution-preview` document id.
*
* This is the side-effect-free counterpart of
* `useCanvasOperations.openExecution()` (which serves "Debug in editor" and
* deliberately writes the editor's `{workflowId}@latest` stores): it performs
* NO `resetWorkspace`, NO `initState`, NO `workflowsStore.setWorkflowId`, and
* NO `uiStore.markStateClean` — loading a preview must never affect the
* editor's (possibly dirty) state, which stays alive across the
* editor/executions tab switch (`keepWorkflowAlive`).
*/
function useExecutionPreviewDocument(options) {
	const i18n = useI18n();
	const toast = useToast();
	const telemetry = useTelemetry();
	const externalHooks = useExternalHooks();
	const workflowsStore = useWorkflowsStore();
	const logsStore = useLogsStore();
	const { normalizeWorkflowData } = useWorkflowNormalization();
	/** Provide this under `WorkflowDocumentStoreKey`; null until the first load completes. */
	const documentStore = shallowRef(null);
	const execution = shallowRef(null);
	const isLoading = ref(false);
	const loadError = ref(null);
	/**
	* Every execution id this preview session has loaded. Per-execution data
	* stores are keyed app-wide by bare execution id, so previously viewed
	* executions render instantly when re-selected — they are released in
	* `dispose()`, except ids the editor's own state store still references.
	*/
	const loadedExecutionIds = /* @__PURE__ */ new Set();
	/**
	* Every preview document id this session has hydrated — one per distinct
	* executed workflow version (executions of the same version share a store).
	* All are released in `dispose()`.
	*/
	const loadedDocumentIds = /* @__PURE__ */ new Set();
	let latestLoadRequestId = 0;
	/**
	* The workflow id shared by every execution this session previews (all
	* documents/executions belong to the executions-tab workflow). Captured on
	* each successful load so `dispose()` can still resolve the editor-referenced
	* ids to protect even after a failed load nulled `documentStore`.
	*/
	let previewWorkflowId;
	/**
	* Marks an execution as most-recently-used. `Set` preserves insertion order
	* but `add()` is a no-op for an existing key, so re-add it to move it to the
	* tail (the front is then the least-recently-used eviction candidate).
	*/
	function touchLoadedExecution(executionId) {
		loadedExecutionIds.delete(executionId);
		loadedExecutionIds.add(executionId);
	}
	/**
	* Caps retained per-execution data stores at `MAX_PREVIEW_EXECUTIONS_IN_MEMORY`
	* by disposing the least-recently-used ones. Never evicts the execution just
	* loaded, nor any the editor's `{workflowId}@latest` session still references
	* (disposing those would blank the editor's run data) — when all retained ids
	* are protected the count simply stays above the cap.
	*/
	function evictLeastRecentlyUsedExecutions(currentExecutionId, workflowId) {
		const protectedExecutionIds = getEditorReferencedExecutionIds(workflowId);
		protectedExecutionIds.add(currentExecutionId);
		let retainedCount = loadedExecutionIds.size;
		for (const candidateExecutionId of [...loadedExecutionIds]) {
			if (retainedCount <= 10) break;
			if (protectedExecutionIds.has(candidateExecutionId)) continue;
			disposeExecutionDataStore(useExecutionDataStore(createExecutionDataId(candidateExecutionId)));
			loadedExecutionIds.delete(candidateExecutionId);
			retainedCount -= 1;
		}
	}
	/**
	* Production executions hide pin data and render production-only UI.
	* Derived from the execution itself (the per-instance
	* `useNodeHelpers().isProductionExecutionPreview` ref never reliably
	* crossed composable instances).
	*/
	const isProductionExecutionPreview = computed(() => execution.value !== null && !["manual", "evaluation"].includes(execution.value.mode));
	function getReusableExecution(executionId) {
		if (!loadedExecutionIds.has(executionId)) return null;
		const executionDataId = createExecutionDataId(executionId);
		if (!hasExecutionDataStore(executionDataId)) return null;
		const snapshot = useExecutionDataStore(executionDataId).getExecutionSnapshot();
		return snapshot && isTerminalExecutionStatus(snapshot.status) ? snapshot : null;
	}
	async function load() {
		const executionId = toValue(options.executionId);
		const requestId = ++latestLoadRequestId;
		isLoading.value = true;
		loadError.value = null;
		try {
			const data = getReusableExecution(executionId) ?? await workflowsStore.getExecution(executionId);
			if (requestId !== latestLoadRequestId) return;
			if (data === void 0) throw new Error(`Execution with id "${executionId}" could not be found!`);
			const resultData = data.data?.resultData;
			if (data.status === "error" && resultData?.error) {
				const { title, message } = getExecutionErrorToastConfiguration({
					error: resultData.error,
					lastNodeExecuted: resultData.lastNodeExecuted
				});
				toast.showMessage({
					title,
					message,
					type: "error",
					duration: 0
				});
			} else if (!data.finished && resultData?.error) {
				if (!Object.values(resultData.runData ?? {}).some((tasks) => tasks.some((task) => task.error))) toast.showMessage({
					title: i18n.baseText("nodeView.showError.workflowError"),
					message: resultData.error.message,
					type: "error",
					duration: 0
				});
			}
			const workflowId = data.workflowData.id;
			previewWorkflowId = workflowId;
			const documentVersion = createExecutionPreviewDocumentVersion(data.workflowData.versionId);
			const documentId = createExecutionPreviewDocumentId(workflowId, data.workflowData.versionId);
			const scopedDocumentStore = useWorkflowDocumentStore(documentId);
			const { nodes, connections } = normalizeWorkflowData(data.workflowData);
			scopedDocumentStore.hydrate({
				...data.workflowData,
				nodes,
				connections,
				versionId: documentVersion
			});
			useWorkflowExecutionStateStore(documentId).setWorkflowExecutionData(data);
			touchLoadedExecution(executionId);
			evictLeastRecentlyUsedExecutions(executionId, workflowId);
			loadedDocumentIds.add(documentId);
			if (!["manual", "evaluation"].includes(data.mode)) scopedDocumentStore.setPinData({});
			execution.value = data;
			documentStore.value = scopedDocumentStore;
			if (data.dataTooLargeToDisplay) logsStore.toggleOpen(true);
			externalHooks.run("execution.open", {
				workflowId: data.workflowData.id,
				workflowName: data.workflowData.name,
				executionId
			});
			telemetry.track("User opened read-only execution", {
				workflow_id: data.workflowData.id,
				execution_mode: data.mode,
				execution_finished: data.finished
			});
		} catch (error) {
			if (requestId === latestLoadRequestId) {
				loadError.value = error instanceof Error ? error : new Error(String(error));
				documentStore.value = null;
				execution.value = null;
			}
		} finally {
			if (requestId === latestLoadRequestId) isLoading.value = false;
		}
	}
	/**
	* Execution ids the editor's `{workflowId}@latest` session still references
	* — e.g. the user ran the workflow manually and then previewed that same
	* execution. Releasing those would blank the editor's displayed run data.
	*/
	function getEditorReferencedExecutionIds(workflowId) {
		const editorStateStore = useWorkflowExecutionStateStore(createWorkflowDocumentId(workflowId));
		const ids = /* @__PURE__ */ new Set();
		for (const id of [
			editorStateStore.activeExecutionId,
			editorStateStore.displayedExecutionId,
			editorStateStore.previousExecutionId,
			editorStateStore.lastSuccessfulExecutionId
		]) if (typeof id === "string") ids.add(id);
		return ids;
	}
	function dispose() {
		latestLoadRequestId += 1;
		if (previewWorkflowId !== void 0) {
			const editorReferencedIds = getEditorReferencedExecutionIds(previewWorkflowId);
			for (const executionId of loadedExecutionIds) {
				if (editorReferencedIds.has(executionId)) continue;
				disposeExecutionDataStore(useExecutionDataStore(createExecutionDataId(executionId)));
			}
		}
		for (const documentId of loadedDocumentIds) {
			disposeNDVStore(useNDVStore(documentId));
			disposeWorkflowExecutionStateStore(useWorkflowExecutionStateStore(documentId));
			disposeWorkflowDocumentStore(useWorkflowDocumentStore(documentId));
		}
		loadedDocumentIds.clear();
		loadedExecutionIds.clear();
		previewWorkflowId = void 0;
		documentStore.value = null;
		execution.value = null;
		loadError.value = null;
		isLoading.value = false;
	}
	return {
		documentStore,
		execution,
		isLoading,
		loadError,
		isProductionExecutionPreview,
		load,
		dispose
	};
}
//#endregion
//#region src/features/execution/executions/components/workflow/ExecutionPreviewHost.vue?vue&type=script&setup=true&lang.ts
var ExecutionPreviewHost_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ExecutionPreviewHost",
	props: {
		workflowId: {},
		executionId: {},
		nodeId: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		provide(WorkflowIdKey, computed(() => props.workflowId));
		const preview = useExecutionPreviewDocument({ executionId: () => props.executionId });
		provide(WorkflowDocumentStoreKey, preview.documentStore);
		provide(EditorEnabledFeaturesKey, computed(() => ({
			readOnly: true,
			aiAssistant: false,
			aiBuilder: false,
			askAi: false,
			executionSuccessToasts: false,
			executionErrorToasts: false,
			expandGroups: "errored"
		})));
		const isReady = computed(() => preview.documentStore.value !== null);
		const hasExecutionData = computed(() => preview.execution.value !== null);
		const hasLoadError = computed(() => preview.loadError.value !== null && !preview.isLoading.value);
		function openDeepLinkedNode() {
			const documentStore = preview.documentStore.value;
			if (!documentStore || !props.nodeId) return;
			const node = documentStore.getNodeById(props.nodeId);
			if (node) useNDVStore(documentStore.documentId).setActiveNodeName(node.name, "other");
		}
		async function loadExecution() {
			const previousDocumentId = preview.documentStore.value?.documentId;
			if (previousDocumentId) useNDVStore(previousDocumentId).unsetActiveNodeName();
			await preview.load();
			const documentStore = preview.documentStore.value;
			if (!documentStore) return;
			openDeepLinkedNode();
			if (previousDocumentId !== void 0 && previousDocumentId !== documentStore.documentId) {
				const connections = deepCopy(documentStore.connectionsBySourceNode);
				documentStore.setConnections({});
				canvasEventBus.emit("setConnections:onNodesInit", connections);
				canvasEventBus.emit("fitView:onNodesInit");
			} else {
				await nextTick();
				canvasEventBus.emit("fitView");
			}
		}
		onMounted(loadExecution);
		watch(() => props.executionId, loadExecution);
		watch(() => props.nodeId, openDeepLinkedNode);
		onUnmounted(() => {
			preview.dispose();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.host),
				"data-test-id": "execution-preview-host"
			}, [isReady.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.canvas) }, [createVNode(NodeView_default), unref(preview).isLoading.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.loadingOverlay)
			}, [createVNode(unref(N8nIcon_default), {
				icon: "loader-circle",
				size: 48,
				spin: ""
			})], 2)) : createCommentVNode("", true)], 2), hasExecutionData.value ? (openBlock(), createBlock(LogsPanel_default, {
				key: 0,
				class: normalizeClass(_ctx.$style.logs),
				"is-read-only": true
			}, null, 8, ["class"])) : createCommentVNode("", true)], 64)) : hasLoadError.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.centerState),
				"data-test-id": "execution-preview-error"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "triangle-alert",
				color: "danger",
				size: 48
			}), createVNode(unref(N8nText_default), {
				color: "text-dark",
				bold: true
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeView.showError.openExecution.title")), 1)]),
				_: 1
			})], 2)) : (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.centerState)
			}, [createVNode(unref(N8nIcon_default), {
				icon: "loader-circle",
				size: 80,
				spin: ""
			})], 2))], 2);
		};
	}
});
var ExecutionPreviewHost_vue_vue_type_style_index_0_lang_module_default = {
	host: "_host_d4wrm_125",
	canvas: "_canvas_d4wrm_135",
	loadingOverlay: "_loadingOverlay_d4wrm_142",
	logs: "_logs_d4wrm_152",
	centerState: "_centerState_d4wrm_156"
};
var ExecutionPreviewHost_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ExecutionPreviewHost_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ExecutionPreviewHost_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/composables/useAddExecutionToDataset.ts
/**
* Gating + open logic for adding a successful execution to an evaluation
* dataset. The action is only available when the config-evals experiment is on,
* and is only enabled once the workflow has at least one data-table-backed
* evaluation config.
*/
function useAddExecutionToDataset(workflowId) {
	const evaluationStore = useEvaluationStore();
	const uiStore = useUIStore();
	const { isFeatureEnabled } = useEvaluationsWizardSidepanelExperiment();
	const dataTableConfigs = ref([]);
	const hasDataTableConfig = computed(() => dataTableConfigs.value.length > 0);
	async function fetchDataTableConfigs() {
		if (!isFeatureEnabled.value) return;
		try {
			dataTableConfigs.value = (await evaluationStore.fetchEvaluationConfigs(toValue(workflowId))).filter((config) => config.datasetSource === "data_table");
		} catch {
			dataTableConfigs.value = [];
		}
	}
	function openModal(executionId) {
		uiStore.openModalWithData({
			name: ADD_EXECUTION_TO_DATASET_MODAL_KEY,
			data: {
				workflowId: toValue(workflowId),
				executionId,
				configs: dataTableConfigs.value
			}
		});
	}
	return {
		isFeatureEnabled,
		hasDataTableConfig,
		fetchDataTableConfigs,
		openModal
	};
}
//#endregion
//#region src/features/execution/executions/components/workflow/VoteButtons.vue?vue&type=script&setup=true&lang.ts
var VoteButtons_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "VoteButtons",
	props: { vote: {} },
	emits: ["vote-click"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const onVoteClick = (vote) => {
			emit("vote-click", vote);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.ratingIcon) }, [createVNode(unref(N8nIconButton_default), {
				variant: "ghost",
				class: normalizeClass([_ctx.$style.icon, __props.vote === "up" && _ctx.$style.up]),
				size: "small",
				icon: "thumbs-up",
				onClick: _cache[0] || (_cache[0] = ($event) => onVoteClick("up"))
			}, null, 8, ["class"]), createVNode(unref(N8nIconButton_default), {
				variant: "ghost",
				class: normalizeClass([_ctx.$style.icon, __props.vote === "down" && _ctx.$style.down]),
				size: "small",
				icon: "thumbs-down",
				onClick: _cache[1] || (_cache[1] = ($event) => onVoteClick("down"))
			}, null, 8, ["class"])], 2);
		};
	}
});
var VoteButtons_vue_vue_type_style_index_0_lang_module_default = {
	ratingIcon: "_ratingIcon_1u7e5_125",
	icon: "_icon_1u7e5_129",
	up: "_up_1u7e5_132",
	down: "_down_1u7e5_132"
};
var VoteButtons_default = /* @__PURE__ */ _plugin_vue_export_helper_default(VoteButtons_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": VoteButtons_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/execution/executions/components/workflow/WorkflowExecutionsPreview.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-test-id"];
var _hoisted_2 = { class: "retry-button" };
var WorkflowExecutionsPreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionsPreview",
	props: { execution: {} },
	emits: [
		"deleteCurrentExecution",
		"retryExecution",
		"stopExecution"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const route = useRoute();
		const locale = useI18n();
		const { showError } = useToast();
		const executionHelpers = useExecutionHelpers();
		const message = useMessage();
		const executionDebugging = useExecutionDebugging();
		const workflowsListStore = useWorkflowsListStore();
		const settingsStore = useSettingsStore();
		const retryDropdownRef = ref(null);
		const workflowId = useInjectWorkflowId();
		const workflowPermissions = computed(() => getResourcePermissions(workflowsListStore.getWorkflowById(workflowId.value)?.scopes).workflow);
		const executionId = computed(() => route.params.executionId);
		const nodeId = computed(() => route.params.nodeId);
		const executionUIDetails = computed(() => props.execution ? executionHelpers.getUIDetails(props.execution) : null);
		const debugButtonData = computed(() => props.execution?.status === "success" ? {
			text: locale.baseText("executionsList.debug.button.copyToEditor"),
			type: "secondary"
		} : {
			text: locale.baseText("executionsList.debug.button.debugInEditor"),
			type: "primary"
		});
		const isRetriable = computed(() => !!props.execution && executionHelpers.isExecutionRetriable(props.execution));
		const { isFeatureEnabled: isAddToDatasetFeatureEnabled, hasDataTableConfig, fetchDataTableConfigs, openModal: openAddToDatasetModal } = useAddExecutionToDataset(workflowId);
		const showAddToDataset = computed(() => isAddToDatasetFeatureEnabled.value && props.execution?.status === "success" && props.execution?.mode !== "evaluation");
		watch(isAddToDatasetFeatureEnabled, async (enabled) => {
			if (enabled) await fetchDataTableConfigs();
		}, { immediate: true });
		function onAddToDatasetClick() {
			if (props.execution) openAddToDatasetModal(props.execution.id);
		}
		const isAnnotationEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedExecutionFilters]);
		const hasAnnotation = computed(() => !!props.execution?.annotation && (props.execution?.annotation.vote || props.execution?.annotation.tags.length > 0));
		const executionsStore = useExecutionsStore();
		const workflowHistoryStore = useWorkflowHistoryStore();
		const workflowVersion = ref(null);
		const workflowVersionLabel = computed(() => {
			if (!workflowVersion.value) return void 0;
			return workflowVersion.value.name ?? locale.baseText("executionDetails.versionAutosave");
		});
		const workflowVersionTooltip = computed(() => {
			if (!workflowVersion.value) return void 0;
			const { date, time } = convertToDisplayDate(workflowVersion.value.createdAt);
			return locale.baseText("executionDetails.versionTooltip", { interpolate: { date: `${date} ${time}` } });
		});
		const workflowVersionRoute = computed(() => {
			if (!workflowVersion.value) return null;
			return {
				name: VIEWS.WORKFLOW_HISTORY,
				params: {
					workflowId: workflowVersion.value.workflowId,
					versionId: workflowVersion.value.versionId
				}
			};
		});
		const executionMetaText = computed(() => {
			if (!executionUIDetails.value) return null;
			if (executionUIDetails.value.showTimestamp === false) return null;
			if (executionUIDetails.value.name === "running") return locale.baseText("executionDetails.runningTimeRunning", { interpolate: { time: executionUIDetails.value.runningTime } });
			if (executionUIDetails.value.name !== "waiting") return locale.baseText("executionDetails.runningTimeFinished", { interpolate: { time: executionUIDetails.value.runningTime ?? "unknown" } });
			return null;
		});
		const executionDataSize = computed(() => {
			if (!props.execution) return null;
			const total = (props.execution.jsonSizeBytes ?? 0) + (props.execution.binaryDataSizeBytes ?? 0);
			return total > 0 ? formatBytes(total) : null;
		});
		watch(() => props.execution?.workflowVersionId, async (versionId) => {
			workflowVersion.value = null;
			if (!versionId || !props.execution?.workflowId) return;
			try {
				const version = await workflowHistoryStore.getWorkflowVersion(props.execution.workflowId, versionId);
				if (props.execution?.workflowVersionId === versionId) workflowVersion.value = version;
			} catch {}
		}, { immediate: true });
		const activeExecution = computed(() => {
			return executionsStore.activeExecution;
		});
		const vote = computed(() => activeExecution.value?.annotation?.vote || null);
		async function onDeleteExecution() {
			const confirmationText = [hasAnnotation.value && locale.baseText("executionDetails.confirmMessage.annotationsNote"), locale.baseText("executionDetails.confirmMessage.message")].filter(Boolean).join(" ");
			if (await message.confirm(confirmationText, locale.baseText("executionDetails.confirmMessage.headline"), {
				type: "warning",
				confirmButtonText: locale.baseText("executionDetails.confirmMessage.confirmButtonText"),
				cancelButtonText: ""
			}) !== "confirm") return;
			emit("deleteCurrentExecution");
		}
		function handleRetryClick(command) {
			if (props.execution) emit("retryExecution", {
				execution: props.execution,
				command
			});
		}
		function handleStopClick() {
			emit("stopExecution");
		}
		function onRetryButtonBlur(event) {
			if (retryDropdownRef.value && event.relatedTarget === null) retryDropdownRef.value.handleClose();
		}
		const onVoteClick = async (voteValue) => {
			if (!activeExecution.value) return;
			const voteToSet = voteValue === vote.value ? null : voteValue;
			try {
				await executionsStore.annotateExecution(activeExecution.value.id, { vote: voteToSet });
			} catch (e) {
				showError(e, "executionAnnotationView.vote.error");
			}
		};
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return executionUIDetails.value?.name === "new" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.newInfo)
			}, [createVNode(unref(N8nText_default), {
				class: normalizeClass(_ctx.$style.newMessage),
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.newMessage")), 1)]),
				_: 1
			}, 8, ["class"]), createVNode(unref(N8nButton_default), {
				variant: "subtle",
				class: "mt-l",
				onClick: handleStopClick
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.stopExecution")), 1)]),
				_: 1
			})], 2)) : executionUIDetails.value?.name === "running" ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.runningInfo)
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.spinner) }, [createVNode(unref(N8nSpinner_default), { type: "ring" })], 2),
				createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.runningMessage),
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.runningMessage")), 1)]),
					_: 1
				}, 8, ["class"]),
				createVNode(unref(N8nButton_default), {
					variant: "subtle",
					"data-test-id": "stop-execution",
					class: "mt-l",
					disabled: !workflowPermissions.value.execute,
					onClick: handleStopClick
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.stopExecution")), 1)]),
					_: 1
				}, 8, ["disabled"])
			], 2)) : executionUIDetails.value ? (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.previewContainer)
			}, [__props.execution ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.executionDetails),
				"data-test-id": `execution-preview-details-${executionId.value}`
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.executionDetailsLeft) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.executionTitle) }, [createVNode(unref(N8nText_default), {
					size: "large",
					color: "text-dark",
					bold: true,
					"data-test-id": "execution-time"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(executionUIDetails.value?.startTime), 1)]),
					_: 1
				}), isAnnotationEnabled.value && __props.execution ? (openBlock(), createBlock(VoteButtons_default, {
					key: 0,
					"data-test-id": "execution-preview-vote-buttons",
					vote: vote.value,
					class: normalizeClass(_ctx.$style.voteButtons),
					onVoteClick
				}, null, 8, ["vote", "class"])) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.executionDetailsInfo) }, [
					executionUIDetails.value?.name === "running" ? (openBlock(), createBlock(unref(N8nSpinner_default), {
						key: 0,
						size: "small",
						class: normalizeClass([_ctx.$style.spinner, "mr-4xs"])
					}, null, 8, ["class"])) : createCommentVNode("", true),
					createVNode(unref(N8nText_default), {
						size: "medium",
						class: normalizeClass([_ctx.$style.status, _ctx.$style[executionUIDetails.value.name]]),
						"data-test-id": "execution-preview-label"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(executionUIDetails.value.label), 1)]),
						_: 1
					}, 8, ["class"]),
					_cache[3] || (_cache[3] = createTextVNode(" " + toDisplayString(" ") + " ", -1)),
					executionUIDetails.value?.showTimestamp === false ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						color: "text-base",
						size: "medium"
					}, {
						default: withCtx(() => [
							executionDataSize.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode("| " + toDisplayString(executionDataSize.value), 1)], 64)) : createCommentVNode("", true),
							createTextVNode(" | ID#" + toDisplayString(__props.execution.id) + " ", 1),
							workflowVersionLabel.value && workflowVersionRoute.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [_cache[1] || (_cache[1] = createTextVNode(" | ", -1)), createVNode(unref(N8nText_default), { color: "text-light" }, {
								default: withCtx(() => [createVNode(unref(N8nTooltip_default), {
									content: workflowVersionTooltip.value,
									placement: "bottom"
								}, {
									default: withCtx(() => [createVNode(_component_RouterLink, {
										class: normalizeClass(_ctx.$style.versionLink),
										"data-test-id": "execution-preview-version-link",
										to: workflowVersionRoute.value
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(workflowVersionLabel.value), 1)]),
										_: 1
									}, 8, ["class", "to"])]),
									_: 1
								}, 8, ["content"])]),
								_: 1
							})], 64)) : createCommentVNode("", true)
						]),
						_: 1
					})) : executionMetaText.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 2,
						color: "text-base",
						size: "medium",
						"data-test-id": "execution-preview-id"
					}, {
						default: withCtx(() => [
							createTextVNode(toDisplayString(executionMetaText.value) + " ", 1),
							executionDataSize.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode("| " + toDisplayString(executionDataSize.value), 1)], 64)) : createCommentVNode("", true),
							createTextVNode(" | ID#" + toDisplayString(__props.execution.id) + " ", 1),
							workflowVersionLabel.value && workflowVersionRoute.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [_cache[2] || (_cache[2] = createTextVNode(" | ", -1)), createVNode(unref(N8nText_default), { color: "text-light" }, {
								default: withCtx(() => [createVNode(unref(N8nTooltip_default), {
									content: workflowVersionTooltip.value,
									placement: "bottom"
								}, {
									default: withCtx(() => [createVNode(_component_RouterLink, {
										class: normalizeClass(_ctx.$style.versionLink),
										"data-test-id": "execution-preview-version-link",
										to: workflowVersionRoute.value
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(workflowVersionLabel.value), 1)]),
										_: 1
									}, 8, ["class", "to"])]),
									_: 1
								}, 8, ["content"])]),
								_: 1
							})], 64)) : createCommentVNode("", true)
						]),
						_: 1
					})) : createCommentVNode("", true)
				], 2),
				__props.execution.mode === "retry" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.executionDetailsRetry)
				}, [createVNode(unref(N8nText_default), {
					color: "text-base",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.retry")) + " ", 1), createVNode(_component_RouterLink, {
						class: normalizeClass(_ctx.$style.executionLink),
						to: {
							name: unref(VIEWS).EXECUTION_PREVIEW,
							params: {
								workflowId: __props.execution.workflowId,
								executionId: __props.execution.retryOf
							}
						}
					}, {
						default: withCtx(() => [createTextVNode(" #" + toDisplayString(__props.execution.retryOf), 1)]),
						_: 1
					}, 8, ["class", "to"])]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				isAnnotationEnabled.value && __props.execution ? (openBlock(), createBlock(WorkflowExecutionAnnotationTags_ee_default, {
					key: 1,
					execution: __props.execution
				}, null, 8, ["execution"])) : createCommentVNode("", true)
			], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [
				createVNode(_component_RouterLink, { to: {
					name: unref(VIEWS).EXECUTION_DEBUG,
					params: {
						workflowId: __props.execution.workflowId,
						executionId: __props.execution.id
					}
				} }, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						size: "medium",
						variant: "subtle",
						class: normalizeClass(_ctx.$style.debugLink),
						disabled: !workflowPermissions.value.update
					}, {
						default: withCtx(() => [createBaseVNode("span", {
							"data-test-id": "execution-debug-button",
							onClick: _cache[0] || (_cache[0] = (...args) => unref(executionDebugging).handleDebugLinkClick && unref(executionDebugging).handleDebugLinkClick(...args))
						}, toDisplayString(debugButtonData.value.text), 1)]),
						_: 1
					}, 8, ["class", "disabled"])]),
					_: 1
				}, 8, ["to"]),
				isRetriable.value ? (openBlock(), createBlock(unref(ElDropdown), {
					key: 0,
					ref: "retryDropdown",
					trigger: "click",
					onCommand: handleRetryClick
				}, {
					dropdown: withCtx(() => [createVNode(unref(ElDropdownMenu), null, {
						default: withCtx(() => [createVNode(unref(ElDropdownItem), { command: "current-workflow" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.retryWithCurrentlySavedWorkflow")), 1)]),
							_: 1
						}), createVNode(unref(ElDropdownItem), { command: "original-workflow" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.retryWithOriginalWorkflow")), 1)]),
							_: 1
						})]),
						_: 1
					})]),
					default: withCtx(() => [createBaseVNode("span", _hoisted_2, [createVNode(unref(N8nIconButton_default), {
						variant: "subtle",
						size: "medium",
						title: unref(locale).baseText("executionsList.retryExecution"),
						disabled: !workflowPermissions.value.update,
						icon: "redo-2",
						"data-test-id": "execution-preview-retry-button",
						onBlur: onRetryButtonBlur
					}, null, 8, ["title", "disabled"])])]),
					_: 1
				}, 512)) : createCommentVNode("", true),
				showAddToDataset.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					content: unref(locale).baseText("evaluations.addToDataset.button.tooltip.noConfig"),
					disabled: unref(hasDataTableConfig),
					placement: "bottom"
				}, {
					default: withCtx(() => [createBaseVNode("span", null, [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						size: "medium",
						icon: "list-plus",
						disabled: !workflowPermissions.value.update || !unref(hasDataTableConfig),
						"data-test-id": "execution-preview-add-to-dataset-button",
						onClick: onAddToDatasetClick
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.addToDataset.button.label")), 1)]),
						_: 1
					}, 8, ["disabled"])])]),
					_: 1
				}, 8, ["content", "disabled"])) : createCommentVNode("", true),
				isAnnotationEnabled.value && activeExecution.value ? (openBlock(), createBlock(WorkflowExecutionAnnotationPanel_ee_default, {
					key: 2,
					execution: activeExecution.value
				}, null, 8, ["execution"])) : createCommentVNode("", true),
				createVNode(unref(N8nIconButton_default), {
					variant: "subtle",
					title: unref(locale).baseText("executionDetails.deleteExecution"),
					disabled: !workflowPermissions.value.update,
					icon: "trash-2",
					size: "medium",
					"data-test-id": "execution-preview-delete-button",
					onClick: onDeleteExecution
				}, null, 8, ["title", "disabled"])
			], 2)], 10, _hoisted_1)) : createCommentVNode("", true), createVNode(ExecutionPreviewHost_default, {
				"workflow-id": unref(workflowId),
				"execution-id": executionId.value,
				"node-id": nodeId.value
			}, null, 8, [
				"workflow-id",
				"execution-id",
				"node-id"
			])], 2)) : createCommentVNode("", true);
		};
	}
});
var WorkflowExecutionsPreview_vue_vue_type_style_index_0_lang_module_default = {
	previewContainer: "_previewContainer_15izv_125",
	executionDetails: "_executionDetails_15izv_131",
	executionDetailsLeft: "_executionDetailsLeft_15izv_150",
	executionTitle: "_executionTitle_15izv_156",
	voteButtons: "_voteButtons_15izv_162",
	spinner: "_spinner_15izv_166",
	running: "_running_15izv_172",
	waiting: "_waiting_15izv_177",
	success: "_success_15izv_181",
	error: "_error_15izv_185",
	newInfo: "_newInfo_15izv_189",
	runningInfo: "_runningInfo_15izv_190",
	newMessage: "_newMessage_15izv_197",
	runningMessage: "_runningMessage_15izv_198",
	debugLink: "_debugLink_15izv_204",
	actions: "_actions_15izv_209",
	highlightDataButton: "_highlightDataButton_15izv_214",
	highlightDataButtonActive: "_highlightDataButtonActive_15izv_219",
	highlightDataButtonOpen: "_highlightDataButtonOpen_15izv_223",
	versionLink: "_versionLink_15izv_229",
	badge: "_badge_15izv_237"
};
var WorkflowExecutionsPreview_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowExecutionsPreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionsPreview_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { WorkflowExecutionsPreview_default as default };
