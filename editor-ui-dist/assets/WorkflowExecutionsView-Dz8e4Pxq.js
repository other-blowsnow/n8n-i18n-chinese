import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, _t as watch, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, ot as resolveComponent, r as TransitionGroup, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Hi as N8nIcon_default, Ht as N8nTooltip_default, It as onBeforeRouteLeave, Li as N8nHeading_default, Lt as useRoute, O as N8nTags_default, Rt as useRouter, St as N8nActionDropdown_default, Vi as N8nSpinner_default, at as Checkbox_default, xt as N8nLoading_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import "./date-picker-BBfVobfB.js";
import { C as useNodeTypesStore, Fr as isComponentPublicInstance, Mn as getNodeViewTab, Nt as useTelemetry, Vt as useProjectsStore, fs as useSettingsStore, g as executionRetryMessage, hr as useToast, ln as useWorkflowSaving, s as useWorkflowsStore } from "./users.store-qBZsmf9-.js";
import { Bo as getResourcePermissions, Mc as EnterpriseEditionFeature, Xo as VIEWS, Yo as MAIN_HEADER_TABS } from "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import { s as NO_NETWORK_ERROR_CODE } from "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import { t as useDebounce } from "./useDebounce-DmlUcXhA.js";
import "./versions.store-YehYbHFz.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjPq0E7w.js";
import { t as useExecutionsStore } from "./executions.store-nTCUYDJR.js";
import "./usePinnedData-B4FHq9FM.js";
import "./nodeIcon-p8UmtDus.js";
import "./canvas.utils-BvLPDYAs.js";
import "./nodeCreator.store-D-pWr7VG.js";
import { t as useCanvasOperations } from "./useCanvasOperations-01naG_2v.js";
import "./folders.store-B29vIVJe.js";
import { a as toTime, i as toDayMonth } from "./dateFormatter-C2jhIUgb.js";
import { t as useExecutionHelpers } from "./useExecutionHelpers-BqmfvwsO.js";
import "./TagsDropdown-DFkzLvnd.js";
import "./WorkflowTagsDropdown-B72qSN6Q.js";
import { t as WorkflowExecutionsInfoAccordion_default } from "./WorkflowExecutionsInfoAccordion-BZdh7TKt.js";
import "./AnnotationTagsDropdown.ee-DZB_HwNM.js";
import { i as ConcurrentExecutionsHeader_default, n as ExecutionStopAllText_default, r as ExecutionsFilter_default, t as ExecutionsTime_default } from "./ExecutionsTime-Db8rLwlH.js";
import { t as useIntersectionObserver } from "./useIntersectionObserver-BbZnVaq3.js";
var _hoisted_1$1 = { key: 2 };
var WorkflowExecutionsCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionsCard",
	props: {
		execution: {},
		highlight: { type: Boolean },
		showGap: { type: Boolean },
		workflowPermissions: {}
	},
	emits: ["retryExecution", "mounted"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const route = useRoute();
		const locale = useI18n();
		const executionHelpers = useExecutionHelpers();
		const workflowsStore = useWorkflowsStore();
		const settingsStore = useSettingsStore();
		const isAdvancedExecutionFilterEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedExecutionFilters]);
		const isAnnotationEnabled = computed(() => isAdvancedExecutionFilterEnabled.value);
		const currentWorkflow = computed(() => route.params.name || workflowsStore.workflowId);
		const retryExecutionActions = computed(() => [{
			id: "current-workflow",
			label: locale.baseText("executionsList.retryWithCurrentlySavedWorkflow")
		}, {
			id: "original-workflow",
			label: locale.baseText("executionsList.retryWithOriginalWorkflow")
		}]);
		const executionUIDetails = computed(() => executionHelpers.getUIDetails(props.execution));
		const isActive = computed(() => props.execution.id === route.params.executionId);
		const isRetriable = computed(() => executionHelpers.isExecutionRetriable(props.execution));
		onMounted(() => {
			emit("mounted", props.execution.id);
		});
		function onRetryMenuItemSelect(action) {
			emit("retryExecution", {
				execution: props.execution,
				command: action
			});
		}
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createElementBlock("div", { class: normalizeClass({
				["execution-card"]: true,
				[_ctx.$style.WorkflowExecutionsCard]: true,
				[_ctx.$style.active]: isActive.value,
				[_ctx.$style[executionUIDetails.value.name]]: true,
				[_ctx.$style.highlight]: __props.highlight,
				[_ctx.$style.showGap]: __props.showGap
			}) }, [createVNode(_component_RouterLink, {
				class: normalizeClass(_ctx.$style.executionLink),
				to: {
					name: unref(VIEWS).EXECUTION_PREVIEW,
					params: {
						name: currentWorkflow.value,
						executionId: __props.execution.id
					},
					query: unref(route).query
				},
				"data-test-execution-status": executionUIDetails.value.name
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.description) }, [
					executionUIDetails.value.name === "new" ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						color: "text-dark",
						bold: true,
						size: "medium",
						"data-test-id": "execution-time"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(toDayMonth)(executionUIDetails.value.createdAt)) + " - " + toDisplayString(unref(locale).baseText("executionDetails.startingSoon")), 1)]),
						_: 1
					})) : (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						color: "text-dark",
						bold: true,
						size: "medium",
						"data-test-id": "execution-time"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(executionUIDetails.value.startTime), 1)]),
						_: 1
					})),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.executionStatus) }, [
						executionUIDetails.value.name === "running" ? (openBlock(), createBlock(unref(N8nSpinner_default), {
							key: 0,
							size: "small",
							class: normalizeClass([_ctx.$style.spinner, "mr-4xs"])
						}, null, 8, ["class"])) : createCommentVNode("", true),
						createVNode(unref(N8nText_default), {
							class: normalizeClass(_ctx.$style.statusLabel),
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(executionUIDetails.value.label), 1)]),
							_: 1
						}, 8, ["class"]),
						_cache[0] || (_cache[0] = createTextVNode(" " + toDisplayString(" ") + " ", -1)),
						executionUIDetails.value.name === "running" && !__props.execution.stoppedAt ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							color: isActive.value ? "text-dark" : "text-base",
							size: "small",
							"data-test-id": "execution-time-in-status"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.runningTimeRunning")) + " ", 1), createVNode(ExecutionsTime_default, { "start-time": __props.execution.startedAt ?? __props.execution.createdAt }, null, 8, ["start-time"])]),
							_: 1
						}, 8, ["color"])) : createCommentVNode("", true),
						executionUIDetails.value.name === "new" && __props.execution.createdAt ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 2,
							color: isActive.value ? "text-dark" : "text-base",
							size: "small"
						}, {
							default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("executionDetails.at")) + " " + toDisplayString(unref(toTime)(__props.execution.createdAt)), 1)]),
							_: 1
						}, 8, ["color"])) : executionUIDetails.value.runningTime !== "" ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 3,
							color: isActive.value ? "text-dark" : "text-base",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.runningTimeFinished", { interpolate: { time: executionUIDetails.value?.runningTime } })), 1)]),
							_: 1
						}, 8, ["color"])) : createCommentVNode("", true)
					], 2),
					__props.execution.mode === "retry" ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nText_default), {
						color: isActive.value ? "text-dark" : "text-base",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.retry")) + " #" + toDisplayString(__props.execution.retryOf), 1)]),
						_: 1
					}, 8, ["color"])])) : createCommentVNode("", true),
					isAnnotationEnabled.value ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.annotation)
					}, [__props.execution.annotation?.vote ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.ratingIcon)
					}, [__props.execution.annotation.vote == "up" ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.up),
						icon: "thumbs-up"
					}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						class: normalizeClass(_ctx.$style.down),
						icon: "thumbs-down"
					}, null, 8, ["class"]))], 2)) : createCommentVNode("", true), executionUIDetails.value.tags.length > 0 ? (openBlock(), createBlock(unref(N8nTags_default), {
						key: 1,
						tags: executionUIDetails.value.tags,
						clickable: false
					}, null, 8, ["tags"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)
				], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.icons) }, [
					isRetriable.value ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
						key: 0,
						class: normalizeClass([_ctx.$style.icon, _ctx.$style.retry]),
						items: retryExecutionActions.value,
						disabled: !__props.workflowPermissions.execute,
						"activator-icon": "redo-2",
						"data-test-id": "retry-execution-button",
						onSelect: onRetryMenuItemSelect
					}, null, 8, [
						"class",
						"items",
						"disabled"
					])) : createCommentVNode("", true),
					__props.execution.mode === "manual" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 1,
						placement: "top"
					}, {
						content: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("executionsList.test")), 1)]),
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							class: normalizeClass([_ctx.$style.icon, _ctx.$style.manual]),
							icon: "flask-conical"
						}, null, 8, ["class"])]),
						_: 1
					})) : createCommentVNode("", true),
					__props.execution.mode === "evaluation" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 2,
						placement: "top"
					}, {
						content: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("executionsList.evaluation")), 1)]),
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							class: normalizeClass([_ctx.$style.icon, _ctx.$style.evaluation]),
							icon: "check-check"
						}, null, 8, ["class"])]),
						_: 1
					})) : createCommentVNode("", true)
				], 2)]),
				_: 1
			}, 8, [
				"class",
				"to",
				"data-test-execution-status"
			])], 2);
		};
	}
});
const WorkflowExecutionsCard = "_WorkflowExecutionsCard_m24vz_125";
const active = "_active_m24vz_132";
const executionStatus = "_executionStatus_m24vz_135";
const executionLink = "_executionLink_m24vz_138";
const spinner = "_spinner_m24vz_141";
const running = "_running_m24vz_141";
const statusLabel = "_statusLabel_m24vz_148";
const success = "_success_m24vz_153";
const waiting = "_waiting_m24vz_162";
const error = "_error_m24vz_168";
const unknown = "_unknown_m24vz_174";
const annotation = "_annotation_m24vz_177";
const ratingIcon = "_ratingIcon_m24vz_184";
const up = "_up_m24vz_184";
const down = "_down_m24vz_187";
const icon = "_icon_m24vz_204";
const icons = "_icons_m24vz_209";
const retry = "_retry_m24vz_217";
const manual = "_manual_m24vz_220";
const showGap = "_showGap_m24vz_228";
var WorkflowExecutionsCard_vue_vue_type_style_index_0_lang_module_default = {
	WorkflowExecutionsCard,
	active,
	executionStatus,
	executionLink,
	"new": "_new_m24vz_141",
	spinner,
	running,
	statusLabel,
	success,
	waiting,
	error,
	unknown,
	annotation,
	ratingIcon,
	up,
	down,
	icon,
	icons,
	retry,
	manual,
	showGap
};
var WorkflowExecutionsCard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowExecutionsCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionsCard_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = {
	key: 0,
	class: "mr-l"
};
var _hoisted_2 = {
	key: 3,
	class: "mr-m"
};
var WorkflowExecutionsSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionsSidebar",
	props: {
		workflow: {},
		executions: {},
		loading: { type: Boolean },
		loadingMore: { type: Boolean },
		temporaryExecution: {}
	},
	emits: [
		"retryExecution",
		"loadMore",
		"filterUpdated",
		"update:autoRefresh",
		"execution:stopMany"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const route = useRoute();
		const router = useRouter();
		const i18n = useI18n();
		const executionsStore = useExecutionsStore();
		const settingsStore = useSettingsStore();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const autoScrollDeps = ref({
			activeExecutionSet: false,
			cardsMounted: false,
			scroll: true
		});
		const currentWorkflowExecutionsCardRefs = ref({});
		const executionListRef = ref(null);
		const { observe: observeForLoadMore } = useIntersectionObserver({
			root: executionListRef,
			threshold: .01,
			onIntersect: () => emit("loadMore", 20)
		});
		const workflowPermissions = computed(() => getResourcePermissions(props.workflow?.scopes).workflow);
		const showConcurrencyHeader = computed(() => settingsStore.isConcurrencyEnabled && !settingsStore.isQueueModeEnabled);
		watch(() => route, (to, from) => {
			if (from.name === VIEWS.EXECUTION_PREVIEW && to.name === VIEWS.EXECUTION_HOME) router.go(-1);
		});
		watch(() => executionsStore.activeExecution, (newValue, oldValue) => {
			if (newValue && newValue.id !== oldValue?.id) autoScrollDeps.value.activeExecutionSet = true;
		});
		watch(autoScrollDeps, (updatedDeps) => {
			if (Object.values(updatedDeps).every(Boolean)) scrollToActiveCard();
		}, { deep: true });
		function addCurrentWorkflowExecutionsCardRef(comp, id) {
			if (comp && isComponentPublicInstance(comp) && id) currentWorkflowExecutionsCardRefs.value[id] = comp;
		}
		function onItemMounted(id) {
			const index = props.executions.findIndex((execution) => execution.id === id);
			if (executionsStore.activeExecution?.id === id) {
				autoScrollDeps.value.activeExecutionSet = true;
				autoScrollDeps.value.cardsMounted = true;
			}
			if (index === props.executions.length - 1 && !props.loading && !props.loadingMore) {
				const cardElement = currentWorkflowExecutionsCardRefs.value[id]?.$el;
				observeForLoadMore(cardElement);
			}
		}
		function loadMore(limit = 20) {
			if (!props.loading) {
				if (executionListRef.value) {
					const diff = executionListRef.value.offsetHeight - (executionListRef.value.scrollHeight - executionListRef.value.scrollTop);
					if (diff > -10 && diff < 10) emit("loadMore", limit);
				}
			}
		}
		function onRetryExecution(payload) {
			emit("retryExecution", payload);
		}
		function onFilterChanged(filter) {
			autoScrollDeps.value.activeExecutionSet = false;
			autoScrollDeps.value.cardsMounted = false;
			autoScrollDeps.value.scroll = true;
			emit("filterUpdated", filter);
		}
		function onAutoRefreshChange(enabled) {
			emit("update:autoRefresh", enabled);
		}
		function scrollToActiveCard() {
			if (executionListRef.value && executionsStore.activeExecution && currentWorkflowExecutionsCardRefs.value[executionsStore.activeExecution.id]) {
				const cardRect = currentWorkflowExecutionsCardRefs.value[executionsStore.activeExecution.id].$el.getBoundingClientRect();
				const LIST_HEADER_OFFSET = 200;
				if (cardRect.top > executionListRef.value.offsetHeight) {
					autoScrollDeps.value.scroll = false;
					executionListRef.value.scrollTo({
						top: cardRect.top - LIST_HEADER_OFFSET,
						behavior: "smooth"
					});
				}
			}
		}
		const goToUpgrade = () => {
			pageRedirectionHelper.goToUpgrade("concurrency", "upgrade-concurrency");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(["executions-sidebar", _ctx.$style.container]),
				"data-test-id": "executions-sidebar"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.heading) }, [
					createVNode(unref(N8nHeading_default), {
						tag: "h2",
						size: "medium",
						color: "text-dark"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.executions")), 1)]),
						_: 1
					}),
					showConcurrencyHeader.value ? (openBlock(), createBlock(ConcurrentExecutionsHeader_default, {
						key: 0,
						"running-executions-count": unref(executionsStore).concurrentExecutionsCount,
						"concurrency-cap": unref(settingsStore).concurrency,
						"is-cloud-deployment": unref(settingsStore).isCloudDeployment,
						onGoToUpgrade: goToUpgrade
					}, null, 8, [
						"running-executions-count",
						"concurrency-cap",
						"is-cloud-deployment"
					])) : createCommentVNode("", true),
					createVNode(ExecutionStopAllText_default, { executions: props.executions }, null, 8, ["executions"])
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.controls) }, [createVNode(unref(Checkbox_default), {
					modelValue: unref(executionsStore).autoRefresh,
					"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => unref(executionsStore).autoRefresh = $event), onAutoRefreshChange],
					"data-test-id": "auto-refresh-checkbox",
					label: unref(i18n).baseText("executionsList.autoRefresh")
				}, null, 8, ["modelValue", "label"]), createVNode(ExecutionsFilter_default, {
					"popover-side": "right",
					"popover-align": "start",
					onFilterChanged
				})], 2),
				createBaseVNode("div", {
					ref_key: "executionListRef",
					ref: executionListRef,
					class: normalizeClass(_ctx.$style.executionList),
					"data-test-id": "current-executions-list",
					onScroll: _cache[1] || (_cache[1] = ($event) => loadMore(20))
				}, [
					__props.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLoading_default), { variant: "rect" })])) : createCommentVNode("", true),
					!__props.loading && __props.executions.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.noResultsContainer),
						"data-test-id": "execution-list-empty"
					}, [createVNode(unref(N8nText_default), {
						color: "text-base",
						size: "medium",
						align: "center"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionsLandingPage.noResults")), 1)]),
						_: 1
					})], 2)) : __props.temporaryExecution ? (openBlock(), createBlock(WorkflowExecutionsCard_default, {
						key: 2,
						ref: (el) => addCurrentWorkflowExecutionsCardRef(el, __props.temporaryExecution?.id),
						execution: __props.temporaryExecution,
						"data-test-id": `execution-details-${__props.temporaryExecution.id}`,
						"show-gap": true,
						"workflow-permissions": workflowPermissions.value,
						onRetryExecution
					}, null, 8, [
						"execution",
						"data-test-id",
						"workflow-permissions"
					])) : createCommentVNode("", true),
					createVNode(TransitionGroup, { name: "executions-list" }, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.executions, (execution) => {
							return openBlock(), createBlock(WorkflowExecutionsCard_default, {
								key: execution.id,
								ref_for: true,
								ref: (el) => addCurrentWorkflowExecutionsCardRef(el, execution.id),
								execution,
								"workflow-permissions": workflowPermissions.value,
								"data-test-id": `execution-details-${execution.id}`,
								onRetryExecution,
								onMounted: onItemMounted
							}, null, 8, [
								"execution",
								"workflow-permissions",
								"data-test-id"
							]);
						}), 128))]),
						_: 1
					}),
					__props.loadingMore ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nLoading_default), {
						variant: "p",
						rows: 1
					})])) : createCommentVNode("", true)
				], 34),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.infoAccordion) }, [createVNode(WorkflowExecutionsInfoAccordion_default, { "initially-expanded": false })], 2)
			], 2);
		};
	}
});
var WorkflowExecutionsSidebar_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_r4zl2_125",
	heading: "_heading_r4zl2_137",
	controls: "_controls_r4zl2_144",
	executionList: "_executionList_r4zl2_156",
	infoAccordion: "_infoAccordion_r4zl2_174",
	noResultsContainer: "_noResultsContainer_r4zl2_187"
};
var WorkflowExecutionsSidebar_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowExecutionsSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionsSidebar_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-c2637f79"]]);
var WorkflowExecutionsList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionsList",
	props: {
		loading: {
			type: Boolean,
			default: false
		},
		workflow: {},
		executions: { default: () => [] },
		execution: {},
		loadingMore: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"execution:delete",
		"execution:stop",
		"execution:retry",
		"update:auto-refresh",
		"update:filters",
		"load-more",
		"reload"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const { promptSaveUnsavedWorkflowChanges } = useWorkflowSaving({ router: useRouter() });
		const temporaryExecution = computed(() => props.executions.find((execution) => execution.id === props.execution?.id) ? void 0 : props.execution ?? void 0);
		const hidePreview = computed(() => {
			return props.loading || !props.execution && props.executions.length;
		});
		const onDeleteCurrentExecution = () => {
			if (!props.execution?.id) return;
			emit("execution:delete", props.execution.id);
		};
		const onStopExecution = () => {
			if (!props.execution?.id) return;
			emit("execution:stop", props.execution.id);
		};
		const onRetryExecution = (payload) => {
			const loadWorkflow = payload.command === "current-workflow";
			emit("execution:retry", {
				id: payload.execution.id,
				loadWorkflow
			});
		};
		onBeforeRouteLeave(async (to, _, next) => {
			if (getNodeViewTab(to) === MAIN_HEADER_TABS.WORKFLOW) {
				next();
				return;
			}
			await promptSaveUnsavedWorkflowChanges(next);
		});
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(WorkflowExecutionsSidebar_default, {
				executions: __props.executions,
				loading: __props.loading && !__props.executions.length,
				"loading-more": __props.loadingMore,
				"temporary-execution": temporaryExecution.value,
				workflow: __props.workflow,
				"onUpdate:autoRefresh": _cache[0] || (_cache[0] = ($event) => emit("update:auto-refresh", $event)),
				onReloadExecutions: _cache[1] || (_cache[1] = ($event) => emit("reload")),
				onFilterUpdated: _cache[2] || (_cache[2] = ($event) => emit("update:filters", $event)),
				onLoadMore: _cache[3] || (_cache[3] = ($event) => emit("load-more")),
				onRetryExecution
			}, null, 8, [
				"executions",
				"loading",
				"loading-more",
				"temporary-execution",
				"workflow"
			]), !hidePreview.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.content)
			}, [createVNode(_component_RouterView, {
				name: "executionPreview",
				execution: __props.execution,
				onDeleteCurrentExecution,
				onRetryExecution,
				onStopExecution
			}, null, 8, ["execution"])], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
var WorkflowExecutionsList_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_pd7qp_125",
	content: "_content_pd7qp_131"
};
var WorkflowExecutionsList_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowExecutionsList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionsList_vue_vue_type_style_index_0_lang_module_default }]]);
var WorkflowExecutionsView_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionsView",
	setup(__props) {
		const executionsStore = useExecutionsStore();
		const workflowsStore = useWorkflowsStore();
		const nodeTypesStore = useNodeTypesStore();
		const projectsStore = useProjectsStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const route = useRoute();
		const router = useRouter();
		const toast = useToast();
		const { callDebounced } = useDebounce();
		const { initializeWorkspace } = useCanvasOperations();
		const loading = ref(false);
		const loadingMore = ref(false);
		const workflow = ref();
		const workflowId = computed(() => {
			const name = route.params.name;
			return typeof name === "string" ? name : void 0;
		});
		const executionId = computed(() => {
			const id = route.params.executionId;
			return typeof id === "string" ? id : void 0;
		});
		const executions = computed(() => workflowId.value ? [...executionsStore.currentExecutionsByWorkflowId[workflowId.value] ?? [], ...executionsStore.executionsByWorkflowId[workflowId.value] ?? []] : []);
		const execution = computed(() => {
			return executions.value.find((e) => e.id === executionId.value) ?? currentExecution.value;
		});
		const currentExecution = ref();
		const isNewWorkflowRoute = computed(() => {
			return route.query.new === "true";
		});
		watch(() => workflowId.value, async () => {
			await fetchWorkflow();
		});
		watch(() => executionId.value, async () => {
			await fetchExecution();
		});
		onMounted(async () => {
			await Promise.all([nodeTypesStore.loadNodeTypesIfNotLoaded(), fetchWorkflow()]);
			if (workflowId.value) await Promise.all([executionsStore.initialize(workflowId.value), fetchExecution()]);
			await initializeRoute();
			document.addEventListener("visibilitychange", onDocumentVisibilityChange);
		});
		onBeforeUnmount(() => {
			executionsStore.reset();
			document.removeEventListener("visibilitychange", onDocumentVisibilityChange);
		});
		async function fetchExecution() {
			if (!executionId.value) return;
			try {
				currentExecution.value = await executionsStore.fetchExecution(executionId.value);
				executionsStore.activeExecution = currentExecution.value;
			} catch (error$1) {
				toast.showError(error$1, i18n.baseText("nodeView.showError.openExecution.title"));
			}
			if (!currentExecution.value) {
				toast.showMessage({
					type: "error",
					title: i18n.baseText("openExecution.missingExeuctionId.title"),
					message: i18n.baseText("openExecution.missingExeuctionId.message")
				});
				return;
			}
		}
		function onDocumentVisibilityChange() {
			if (document.visibilityState === "hidden") executionsStore.stopAutoRefreshInterval();
			else executionsStore.startAutoRefreshInterval(workflowId.value);
		}
		async function initializeRoute() {
			if (route.name === VIEWS.EXECUTION_HOME && executions.value.length > 0 && workflow.value) await router.replace({
				name: VIEWS.EXECUTION_PREVIEW,
				params: {
					name: workflow.value.id,
					executionId: executions.value[0].id
				},
				query: route.query
			}).catch(() => {});
		}
		async function fetchWorkflow() {
			if (isNewWorkflowRoute.value) {
				workflow.value = workflowsStore.workflow;
				return;
			}
			if (workflowId.value) if (!workflowsStore.workflowsById[workflowId.value]) {
				try {
					await workflowsStore.fetchActiveWorkflows();
					await initializeWorkspace(await workflowsStore.fetchWorkflow(workflowId.value));
				} catch (error$1) {
					toast.showError(error$1, i18n.baseText("nodeView.showError.openWorkflow.title"));
				}
				workflow.value = workflowsStore.getWorkflowById(workflowId.value);
				const workflowData = await workflowsStore.fetchWorkflow(workflow.value.id);
				await projectsStore.setProjectNavActiveIdByWorkflowHomeProject(workflowData.homeProject);
			} else workflow.value = workflowsStore.workflowsById[workflowId.value];
		}
		async function onAutoRefreshToggle(value) {
			if (value) await executionsStore.startAutoRefreshInterval(workflowId.value);
			else executionsStore.stopAutoRefreshInterval();
		}
		async function onRefreshData() {
			if (!workflowId.value) return;
			try {
				await executionsStore.fetchExecutions({
					...executionsStore.executionsFilters,
					workflowId: workflowId.value
				});
			} catch (error$1) {
				if (error$1.errorCode === 999) toast.showMessage({
					title: i18n.baseText("executionsList.showError.refreshData.title"),
					message: error$1.message,
					type: "error",
					duration: 3500
				}, false);
				else toast.showError(error$1, i18n.baseText("executionsList.showError.refreshData.title"));
			}
		}
		async function onUpdateFilters(newFilters) {
			executionsStore.reset();
			executionsStore.setFilters(newFilters);
			await executionsStore.initialize(workflowId.value);
		}
		async function onExecutionStop(id) {
			if (!id) return;
			try {
				await executionsStore.stopCurrentExecution(id);
				toast.showMessage({
					title: i18n.baseText("executionsList.showMessage.stopExecution.title"),
					message: i18n.baseText("executionsList.showMessage.stopExecution.message", { interpolate: { activeExecutionId: id } }),
					type: "success"
				});
				await onRefreshData();
			} catch (error$1) {
				toast.showError(error$1, i18n.baseText("executionsList.showError.stopExecution.title"));
			}
		}
		async function onExecutionDelete(id) {
			if (!id) return;
			loading.value = true;
			try {
				const executionIndex = executions.value.findIndex((e) => e.id === id);
				const nextExecution = executions.value[executionIndex + 1] || executions.value[executionIndex - 1] || executions.value[0];
				await executionsStore.deleteExecutions({ ids: [id] });
				if (workflow.value) if (executions.value.length > 0) await router.replace({
					name: VIEWS.EXECUTION_PREVIEW,
					params: {
						name: workflow.value.id,
						executionId: nextExecution.id
					}
				}).catch(() => {});
				else await router.replace({
					name: VIEWS.EXECUTION_HOME,
					params: { name: workflow.value.id }
				});
			} catch (error$1) {
				loading.value = false;
				toast.showError(error$1, i18n.baseText("executionsList.showError.handleDeleteSelected.title"));
				return;
			}
			loading.value = false;
			toast.showMessage({
				title: i18n.baseText("executionsList.showMessage.handleDeleteSelected.title"),
				type: "success"
			});
		}
		async function onExecutionRetry(payload) {
			toast.showMessage({
				title: i18n.baseText("executionDetails.runningMessage"),
				type: "info",
				duration: 2e3
			});
			await retryExecution(payload);
			await onRefreshData();
			telemetry.track("User clicked retry execution button", {
				workflow_id: workflow.value?.id,
				execution_id: payload.id,
				retry_type: payload.loadWorkflow ? "current" : "original"
			});
		}
		async function retryExecution(payload) {
			try {
				const retryMessage = executionRetryMessage((await executionsStore.retryExecution(payload.id, payload.loadWorkflow)).status);
				if (retryMessage) toast.showMessage(retryMessage);
			} catch (error$1) {
				toast.showError(error$1, i18n.baseText("executionsList.showError.retryExecution.title"));
			}
		}
		async function onLoadMore() {
			if (!loadingMore.value) await callDebounced(loadMore, { debounceTime: 1e3 });
		}
		async function loadMore() {
			if (!!executionsStore.executionsFilters.status?.includes("running") || executions.value.length >= executionsStore.executionsCount) return;
			loadingMore.value = true;
			let lastId;
			if (executions.value.length !== 0) lastId = executions.value.slice(-1)[0].id;
			try {
				await executionsStore.fetchExecutions(executionsStore.executionsFilters, lastId);
			} catch (error$1) {
				loadingMore.value = false;
				toast.showError(error$1, i18n.baseText("executionsList.showError.loadMore.title"));
				return;
			}
			loadingMore.value = false;
		}
		return (_ctx, _cache) => {
			return workflow.value ? (openBlock(), createBlock(WorkflowExecutionsList_default, {
				key: 0,
				executions: executions.value,
				execution: execution.value,
				workflow: workflow.value,
				loading: loading.value,
				"loading-more": loadingMore.value,
				"onExecution:stop": onExecutionStop,
				"onExecution:delete": onExecutionDelete,
				"onExecution:retry": onExecutionRetry,
				"onUpdate:filters": onUpdateFilters,
				"onUpdate:autoRefresh": onAutoRefreshToggle,
				onLoadMore,
				onReload: onRefreshData
			}, null, 8, [
				"executions",
				"execution",
				"workflow",
				"loading",
				"loading-more"
			])) : createCommentVNode("", true);
		};
	}
});
export { WorkflowExecutionsView_default as default };
