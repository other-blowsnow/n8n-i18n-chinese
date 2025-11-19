import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _ as Fragment, _n as normalizeClass, _t as watch, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, ot as resolveComponent, r as TransitionGroup, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { In as N8nText_default, Pn as N8nHeading_default, Rn as N8nSpinner_default, Vt as ElCheckbox, et as N8nLoading_default, h as N8nTags_default, tt as N8nActionDropdown_default, vt as N8nTooltip_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, v as onBeforeRouteLeave, y as useRoute } from "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./date-picker-C3uJHiXB.js";
import "./overlay-DxjKgl5T.js";
import "./empty-RTEMfF4N.js";
import "./useMessage-HzD9OyTZ.js";
import { Bo as useSettingsStore, En as useProjectsStore, X as executionRetryMessage, cc as NO_NETWORK_ERROR_CODE, nr as isComponentPublicInstance, o as useWorkflowsStore, rt as useNodeTypesStore, t as useTelemetry, x as getNodeViewTab } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { Hs as EnterpriseEditionFeature, _r as getResourcePermissions, mo as VIEWS, o as NEW_WORKFLOW_ID, po as MAIN_HEADER_TABS, s as PLACEHOLDER_EMPTY_WORKFLOW_ID } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import { t as useDebounce } from "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import "./npsSurvey.store-Csg2H1Od.js";
import "./cloudPlan.store-Dw9c9iy4.js";
import "./templates.store-CFt_GGxU.js";
import "./focusPanel.store-Ce3wvzmP.js";
import { t as useWorkflowSaving } from "./useWorkflowSaving-eHdXvbOs.js";
import { t as useExecutionsStore } from "./executions.store-a34D3haB.js";
import "./usePinnedData-CxyLm90h.js";
import "./nodeCreator.store-BXjpGwrk.js";
import "./nodeIcon-BWTKM7V3.js";
import "./useClipboard-CDW2KXIc.js";
import { t as useCanvasOperations } from "./useCanvasOperations-CA0dp-vn.js";
import "./folders.store-Cwp_DTVT.js";
import "./versions.store-DbkVHo9d.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-BOaFWroN.js";
import { a as toTime, i as toDayMonth } from "./dateFormatter-CXO-zUXu.js";
import { t as useExecutionHelpers } from "./useExecutionHelpers-Dhozi48o.js";
import "./TagsDropdown-rTwmy1Tm.js";
import "./WorkflowTagsDropdown-CC7yYT8W.js";
import { t as WorkflowExecutionsInfoAccordion_default } from "./WorkflowExecutionsInfoAccordion-kIjY-xAo.js";
import "./AnnotationTagsDropdown.ee-LOH7o9OO.js";
import { n as ExecutionsFilter_default, r as ConcurrentExecutionsHeader_default, t as ExecutionsTime_default } from "./ExecutionsTime-m3iQWqlX.js";
import { t as useIntersectionObserver } from "./useIntersectionObserver-C8Bz3yon.js";
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
				[_ctx.$style.highlight]: _ctx.highlight,
				[_ctx.$style.showGap]: _ctx.showGap
			}) }, [createVNode(_component_RouterLink, {
				class: normalizeClass(_ctx.$style.executionLink),
				to: {
					name: unref(VIEWS).EXECUTION_PREVIEW,
					params: {
						name: currentWorkflow.value,
						executionId: _ctx.execution.id
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
						_cache[0] || (_cache[0] = createTextVNode(" " + toDisplayString(" ") + " ")),
						executionUIDetails.value.name === "running" && !_ctx.execution.stoppedAt ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							color: isActive.value ? "text-dark" : "text-base",
							size: "small",
							"data-test-id": "execution-time-in-status"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.runningTimeRunning")) + " ", 1), createVNode(ExecutionsTime_default, { "start-time": _ctx.execution.startedAt ?? _ctx.execution.createdAt }, null, 8, ["start-time"])]),
							_: 1
						}, 8, ["color"])) : createCommentVNode("", true),
						executionUIDetails.value.name === "new" && _ctx.execution.createdAt ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 2,
							color: isActive.value ? "text-dark" : "text-base",
							size: "small"
						}, {
							default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("executionDetails.at")) + " " + toDisplayString(unref(toTime)(_ctx.execution.createdAt)), 1)]),
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
					_ctx.execution.mode === "retry" ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nText_default), {
						color: isActive.value ? "text-dark" : "text-base",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.retry")) + " #" + toDisplayString(_ctx.execution.retryOf), 1)]),
						_: 1
					}, 8, ["color"])])) : createCommentVNode("", true),
					isAnnotationEnabled.value ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.annotation)
					}, [_ctx.execution.annotation?.vote ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.ratingIcon)
					}, [_ctx.execution.annotation.vote == "up" ? (openBlock(), createBlock(unref(N8nIcon_default), {
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
						disabled: !_ctx.workflowPermissions.execute,
						"activator-icon": "redo-2",
						"data-test-id": "retry-execution-button",
						onSelect: onRetryMenuItemSelect
					}, null, 8, [
						"class",
						"items",
						"disabled"
					])) : createCommentVNode("", true),
					_ctx.execution.mode === "manual" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
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
					_ctx.execution.mode === "evaluation" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
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
const WorkflowExecutionsCard = "_WorkflowExecutionsCard_19371_123";
const active = "_active_19371_130";
const executionStatus = "_executionStatus_19371_133";
const executionLink = "_executionLink_19371_136";
const spinner = "_spinner_19371_139";
const running = "_running_19371_139";
const statusLabel = "_statusLabel_19371_146";
const success = "_success_19371_151";
const waiting = "_waiting_19371_160";
const error = "_error_19371_166";
const unknown = "_unknown_19371_172";
const annotation = "_annotation_19371_175";
const ratingIcon = "_ratingIcon_19371_182";
const up = "_up_19371_182";
const down = "_down_19371_185";
const icon = "_icon_19371_202";
const icons = "_icons_19371_207";
const retry = "_retry_19371_215";
const manual = "_manual_19371_218";
const showGap = "_showGap_19371_226";
var WorkflowExecutionsCard_vue_vue_type_style_index_0_lang_module_default = {
	WorkflowExecutionsCard,
	active,
	executionStatus,
	executionLink,
	"new": "_new_19371_139",
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
		"update:autoRefresh"
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
		const sidebarContainerRef = ref(null);
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
			emit("update:autoRefresh", typeof enabled === "boolean" ? enabled : Boolean(enabled));
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
				ref_key: "sidebarContainerRef",
				ref: sidebarContainerRef,
				class: normalizeClass(["executions-sidebar", _ctx.$style.container]),
				"data-test-id": "executions-sidebar"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.heading) }, [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "medium",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.executions")), 1)]),
					_: 1
				}), showConcurrencyHeader.value ? (openBlock(), createBlock(ConcurrentExecutionsHeader_default, {
					key: 0,
					"running-executions-count": unref(executionsStore).concurrentExecutionsCount,
					"concurrency-cap": unref(settingsStore).concurrency,
					"is-cloud-deployment": unref(settingsStore).isCloudDeployment,
					onGoToUpgrade: goToUpgrade
				}, null, 8, [
					"running-executions-count",
					"concurrency-cap",
					"is-cloud-deployment"
				])) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.controls) }, [createVNode(unref(ElCheckbox), {
					modelValue: unref(executionsStore).autoRefresh,
					"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => unref(executionsStore).autoRefresh = $event), onAutoRefreshChange],
					"data-test-id": "auto-refresh-checkbox"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionsList.autoRefresh")), 1)]),
					_: 1
				}, 8, ["modelValue"]), createVNode(ExecutionsFilter_default, {
					"popover-placement": "right-start",
					onFilterChanged
				})], 2),
				createBaseVNode("div", {
					ref_key: "executionListRef",
					ref: executionListRef,
					class: normalizeClass(_ctx.$style.executionList),
					"data-test-id": "current-executions-list",
					onScroll: _cache[1] || (_cache[1] = ($event) => loadMore(20))
				}, [
					_ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLoading_default), { variant: "rect" })])) : createCommentVNode("", true),
					!_ctx.loading && _ctx.executions.length === 0 ? (openBlock(), createElementBlock("div", {
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
					})], 2)) : _ctx.temporaryExecution ? (openBlock(), createBlock(WorkflowExecutionsCard_default, {
						key: 2,
						ref: (el) => addCurrentWorkflowExecutionsCardRef(el, _ctx.temporaryExecution?.id),
						execution: _ctx.temporaryExecution,
						"data-test-id": `execution-details-${_ctx.temporaryExecution.id}`,
						"show-gap": true,
						"workflow-permissions": workflowPermissions.value,
						onRetryExecution
					}, null, 8, [
						"execution",
						"data-test-id",
						"workflow-permissions"
					])) : createCommentVNode("", true),
					createVNode(TransitionGroup, { name: "executions-list" }, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.executions, (execution) => {
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
					_ctx.loadingMore ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nLoading_default), {
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
	container: "_container_hrgxj_123",
	heading: "_heading_hrgxj_135",
	controls: "_controls_hrgxj_142",
	executionList: "_executionList_hrgxj_154",
	infoAccordion: "_infoAccordion_hrgxj_172",
	noResultsContainer: "_noResultsContainer_hrgxj_185"
};
var WorkflowExecutionsSidebar_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowExecutionsSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionsSidebar_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-bb8454a7"]]);
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
				executions: _ctx.executions,
				loading: _ctx.loading && !_ctx.executions.length,
				"loading-more": _ctx.loadingMore,
				"temporary-execution": temporaryExecution.value,
				workflow: _ctx.workflow,
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
				execution: _ctx.execution,
				onDeleteCurrentExecution,
				onRetryExecution,
				onStopExecution
			}, null, 8, ["execution"])], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
var WorkflowExecutionsList_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_udnba_123",
	content: "_content_udnba_129"
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
			const workflowIdParam = route.params.name;
			return ["__EMPTY__", "new"].includes(workflowIdParam) ? void 0 : workflowIdParam;
		});
		const executionId = computed(() => route.params.executionId);
		const executions = computed(() => workflowId.value ? [...executionsStore.currentExecutionsByWorkflowId[workflowId.value] ?? [], ...executionsStore.executionsByWorkflowId[workflowId.value] ?? []] : []);
		const execution = computed(() => {
			return executions.value.find((e) => e.id === executionId.value) ?? currentExecution.value;
		});
		const currentExecution = ref();
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
			if (workflowId.value) {
				if (workflowsStore.workflow.id === "__EMPTY__") try {
					await workflowsStore.fetchActiveWorkflows();
					initializeWorkspace(await workflowsStore.fetchWorkflow(workflowId.value));
				} catch (error$1) {
					toast.showError(error$1, i18n.baseText("nodeView.showError.openWorkflow.title"));
				}
				workflow.value = workflowsStore.getWorkflowById(workflowId.value);
				const workflowData = await workflowsStore.fetchWorkflow(workflow.value.id);
				await projectsStore.setProjectNavActiveIdByWorkflowHomeProject(workflowData.homeProject);
			} else workflow.value = workflowsStore.workflow;
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
