import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, _t as watch, at as renderSlot, bt as withCtx, c as useCssModule, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, mt as useTemplateRef, ot as resolveComponent, q as onBeforeMount, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as I18nT, j as useIntersectionObserver, yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Ai as N8nIconButton_default, At as N8nLink_default, Bi as N8nButton_default, Hi as N8nIcon_default, Ht as N8nTooltip_default, Lt as useRoute, Zt as ElSkeletonItem, at as Checkbox_default, in as ElDropdownMenu, lt as TableBase_default, nn as ElDropdown, rn as ElDropdownItem, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import "./date-picker-BBfVobfB.js";
import { Nt as useTelemetry, _r as useExternalHooks, cn as useDocumentTitle, fs as useSettingsStore, g as executionRetryMessage, hr as useToast, s as useWorkflowsStore, xr as useMessage } from "./users.store-qBZsmf9-.js";
import { Bo as getResourcePermissions, Mc as EnterpriseEditionFeature, To as WAIT_INDEFINITELY, Xo as VIEWS, hs as MODAL_CONFIRM } from "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import { j as storeToRefs } from "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import "./versions.store-YehYbHFz.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjPq0E7w.js";
import { t as useExecutionsStore } from "./executions.store-nTCUYDJR.js";
import "./folders.store-B29vIVJe.js";
import "./ProjectIcon-B_2Zohal.js";
import { t as convertToDisplayDate } from "./dateFormatter-C2jhIUgb.js";
import { t as useExecutionHelpers } from "./useExecutionHelpers-BqmfvwsO.js";
import "./TagsDropdown-DFkzLvnd.js";
import "./WorkflowTagsDropdown-B72qSN6Q.js";
import { t as useInsightsStore } from "./insights.store-B6S4KFCq.js";
import "./insights.constants-Q1hG0DUw.js";
import "./insights.utils-CjNWaY5O.js";
import { r as useProjectPages } from "./readyToRun.store-jCsh7z8e.js";
import { t as AnimatedSpinner_default } from "./AnimatedSpinner-BHDG51rn.js";
import { t as ProjectHeader_default } from "./ProjectHeader-_KJxdw-E.js";
import { t as InsightsSummary_default } from "./InsightsSummary-CXBo4UGr.js";
import { t as SelectedItemsInfo_default } from "./SelectedItemsInfo-C8V0tV59.js";
import "./AnnotationTagsDropdown.ee-DZB_HwNM.js";
import { i as ConcurrentExecutionsHeader_default, n as ExecutionStopAllText_default, r as ExecutionsFilter_default, t as ExecutionsTime_default } from "./ExecutionsTime-Db8rLwlH.js";
var GlobalExecutionsListItemQueuedTooltip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "GlobalExecutionsListItemQueuedTooltip",
	props: {
		status: {},
		concurrencyCap: {},
		isCloudDeployment: { type: Boolean }
	},
	emits: ["goToUpgrade"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), { placement: "top" }, {
				content: withCtx(() => [props.status === "waiting" ? (openBlock(), createBlock(unref(I18nT), {
					key: 0,
					keypath: "executionsList.statusTooltipText.theWorkflowIsWaitingIndefinitely",
					scope: "global"
				})) : createCommentVNode("", true), props.status === "new" ? (openBlock(), createBlock(unref(I18nT), {
					key: 1,
					keypath: "executionsList.statusTooltipText.waitingForConcurrencyCapacity",
					scope: "global"
				}, {
					instance: withCtx(() => [props.isCloudDeployment ? (openBlock(), createBlock(unref(I18nT), {
						key: 0,
						keypath: "executionsList.statusTooltipText.waitingForConcurrencyCapacity.cloud",
						scope: "global"
					}, {
						concurrencyCap: withCtx(() => [createTextVNode(toDisplayString(props.concurrencyCap), 1)]),
						link: withCtx(() => [createVNode(unref(N8nLink_default), {
							bold: "",
							size: "small",
							class: normalizeClass(_ctx.$style.link),
							onClick: _cache[0] || (_cache[0] = ($event) => emit("goToUpgrade"))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgradeNow")), 1)]),
							_: 1
						}, 8, ["class"])]),
						_: 1
					})) : (openBlock(), createBlock(unref(I18nT), {
						key: 1,
						keypath: "executionsList.statusTooltipText.waitingForConcurrencyCapacity.self",
						scope: "global"
					}, {
						concurrencyCap: withCtx(() => [createTextVNode(toDisplayString(props.concurrencyCap), 1)]),
						link: withCtx(() => [createVNode(unref(N8nLink_default), {
							class: normalizeClass(_ctx.$style.link),
							href: unref(i18n).baseText("executions.concurrency.docsLink"),
							target: "_blank"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.viewDocs")), 1)]),
							_: 1
						}, 8, ["class", "href"])]),
						_: 1
					}))]),
					_: 1
				})) : createCommentVNode("", true)]),
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			});
		};
	}
});
var GlobalExecutionsListItemQueuedTooltip_vue_vue_type_style_index_0_lang_module_default = { link: "_link_1g7mx_125" };
var GlobalExecutionsListItemQueuedTooltip_default = /* @__PURE__ */ __plugin_vue_export_helper_default(GlobalExecutionsListItemQueuedTooltip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": GlobalExecutionsListItemQueuedTooltip_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$1 = { "data-test-id": "execution-status" };
var _hoisted_2$1 = { "data-test-id": "execution-time" };
var _hoisted_3$1 = { key: 0 };
var _hoisted_4$1 = { key: 1 };
var _hoisted_5$1 = { key: 2 };
var GlobalExecutionsListItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "GlobalExecutionsListItem",
	props: {
		execution: {},
		selected: {
			type: Boolean,
			default: false
		},
		workflowName: { default: "" },
		workflowPermissions: {},
		concurrencyCap: {},
		isCloudDeployment: { type: Boolean }
	},
	emits: [
		"stop",
		"select",
		"retrySaved",
		"retryOriginal",
		"delete",
		"goToUpgrade"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const props = __props;
		const style = useCssModule();
		const locale = useI18n();
		const executionHelpers = useExecutionHelpers();
		const isStopping = ref(false);
		const isRunning = computed(() => props.execution.status === "running");
		const isWaitTillIndefinite = computed(() => {
			if (!props.execution.waitTill) return false;
			return new Date(props.execution.waitTill).getTime() === WAIT_INDEFINITELY.getTime();
		});
		const isRetriable = computed(() => executionHelpers.isExecutionRetriable(props.execution));
		const EXECUTION_STATUS = {
			CRASHED: "crashed",
			ERROR: "error",
			WAITING: "waiting",
			SUCCESS: "success",
			NEW: "new",
			RUNNING: "running",
			UNKNOWN: "unknown",
			CANCELED: "canceled"
		};
		const executionIconStatusDictionary = {
			[EXECUTION_STATUS.CRASHED]: {
				icon: "status-error",
				color: "danger"
			},
			[EXECUTION_STATUS.ERROR]: {
				icon: "status-error",
				color: "danger"
			},
			[EXECUTION_STATUS.WAITING]: {
				icon: "status-waiting",
				color: "secondary"
			},
			[EXECUTION_STATUS.SUCCESS]: {
				icon: "status-completed",
				color: "success"
			},
			[EXECUTION_STATUS.NEW]: {
				icon: "status-new",
				color: "foreground-xdark"
			},
			[EXECUTION_STATUS.RUNNING]: {
				icon: "spinner",
				color: "secondary"
			},
			[EXECUTION_STATUS.UNKNOWN]: {
				icon: "status-unknown",
				color: "foreground-xdark"
			},
			[EXECUTION_STATUS.CANCELED]: {
				icon: "status-canceled",
				color: "foreground-xdark"
			}
		};
		const errorStatuses = [EXECUTION_STATUS.ERROR, EXECUTION_STATUS.CRASHED];
		const classes = computed(() => {
			return { [style.dangerBg]: errorStatuses.includes(props.execution.status) };
		});
		const formattedStartedAtDate = computed(() => {
			return props.execution.startedAt ? formatDate(props.execution.startedAt) : locale.baseText("executionsList.startingSoon");
		});
		const formattedWaitTillDate = computed(() => {
			return props.execution.waitTill ? formatDate(props.execution.waitTill) : "";
		});
		const formattedStoppedAtDate = computed(() => {
			return props.execution.stoppedAt ? locale.displayTimer(new Date(props.execution.stoppedAt).getTime() - new Date(props.execution.startedAt ?? props.execution.createdAt).getTime(), true) : "";
		});
		function getStatusLabel(status) {
			if (status === EXECUTION_STATUS.CRASHED) return locale.baseText("executionsList.error");
			return locale.baseText(`executionsList.${status}`);
		}
		const statusRender = computed(() => {
			return {
				...executionIconStatusDictionary[props.execution.status],
				label: getStatusLabel(props.execution.status)
			};
		});
		function formatDate(fullDate) {
			const { date, time } = convertToDisplayDate(fullDate);
			return locale.baseText("executionsList.started", { interpolate: {
				time,
				date
			} });
		}
		function onStopExecution() {
			isStopping.value = true;
			emit("stop", props.execution);
		}
		function onSelect() {
			emit("select", props.execution);
		}
		async function handleActionItemClick(commandData) {
			emit(commandData, props.execution);
		}
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createElementBlock("tr", { class: normalizeClass(classes.value) }, [
				createBaseVNode("td", null, [createVNode(unref(Checkbox_default), {
					"model-value": __props.selected,
					"data-test-id": "select-execution-checkbox",
					disabled: !Boolean(__props.execution.id && __props.execution.stoppedAt),
					class: "mb-0",
					style: { marginTop: "-3px" },
					"onUpdate:modelValue": onSelect
				}, null, 8, ["model-value", "disabled"])]),
				createBaseVNode("td", null, [createVNode(unref(N8nTooltip_default), {
					content: __props.execution.workflowName || __props.workflowName,
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(_component_RouterLink, {
						to: {
							name: unref(VIEWS).EXECUTION_PREVIEW,
							params: {
								name: __props.execution.workflowId,
								executionId: __props.execution.id
							}
						},
						class: normalizeClass(_ctx.$style.workflowName),
						target: "_blank"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.execution.workflowName || __props.workflowName), 1)]),
						_: 1
					}, 8, ["to", "class"])]),
					_: 1
				}, 8, ["content"])]),
				createBaseVNode("td", _hoisted_1$1, [isWaitTillIndefinite.value || __props.execution.status === EXECUTION_STATUS.NEW ? (openBlock(), createBlock(GlobalExecutionsListItemQueuedTooltip_default, {
					key: 0,
					status: props.execution.status,
					"concurrency-cap": props.concurrencyCap,
					"is-cloud-deployment": props.isCloudDeployment,
					onGoToUpgrade: _cache[0] || (_cache[0] = ($event) => emit("goToUpgrade"))
				}, {
					default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nIcon_default), {
						icon: statusRender.value.icon,
						color: statusRender.value.color,
						class: "mr-2xs"
					}, null, 8, ["icon", "color"]), createTextVNode(" " + toDisplayString(statusRender.value.label), 1)])]),
					_: 1
				}, 8, [
					"status",
					"concurrency-cap",
					"is-cloud-deployment"
				])) : (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					disabled: __props.execution.status !== EXECUTION_STATUS.WAITING,
					content: unref(locale).baseText("executionsList.statusWaiting", { interpolate: {
						status: __props.execution.status,
						time: formattedWaitTillDate.value
					} })
				}, {
					default: withCtx(() => [createBaseVNode("div", null, [__props.execution.status === EXECUTION_STATUS.RUNNING ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						color: "secondary",
						class: "mr-2xs"
					}, {
						default: withCtx(() => [createVNode(AnimatedSpinner_default)]),
						_: 1
					})) : (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						size: "medium",
						icon: statusRender.value.icon,
						color: statusRender.value.color,
						class: "mr-2xs"
					}, null, 8, ["icon", "color"])), createTextVNode(" " + toDisplayString(statusRender.value.label), 1)])]),
					_: 1
				}, 8, ["disabled", "content"]))]),
				createBaseVNode("td", null, toDisplayString(formattedStartedAtDate.value), 1),
				createBaseVNode("td", _hoisted_2$1, [formattedStoppedAtDate.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(formattedStoppedAtDate.value), 1)], 64)) : (openBlock(), createBlock(ExecutionsTime_default, {
					key: 1,
					"start-time": __props.execution.startedAt ?? __props.execution.createdAt
				}, null, 8, ["start-time"]))]),
				createBaseVNode("td", null, [__props.execution.id ? (openBlock(), createElementBlock("span", _hoisted_3$1, toDisplayString(__props.execution.id), 1)) : createCommentVNode("", true), __props.execution.retryOf ? (openBlock(), createElementBlock("span", _hoisted_4$1, [_cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)), createBaseVNode("small", null, " (" + toDisplayString(unref(locale).baseText("executionsList.retryOf")) + " " + toDisplayString(__props.execution.retryOf) + ") ", 1)])) : __props.execution.retrySuccessId ? (openBlock(), createElementBlock("span", _hoisted_5$1, [_cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)), createBaseVNode("small", null, " (" + toDisplayString(unref(locale).baseText("executionsList.successRetry")) + " " + toDisplayString(__props.execution.retrySuccessId) + ") ", 1)])) : createCommentVNode("", true)]),
				createBaseVNode("td", null, [__props.execution.mode === "manual" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: "Manual Execution",
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "flask-conical" })]),
					_: 1
				})) : __props.execution.mode === "chat" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					content: "Chat Execution",
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "messages-square" })]),
					_: 1
				})) : createCommentVNode("", true)]),
				createBaseVNode("td", null, [!__props.execution.stoppedAt || __props.execution.waitTill ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					"data-test-id": "stop-execution-button",
					type: "secondary",
					loading: isStopping.value,
					disabled: isStopping.value,
					onClick: withModifiers(onStopExecution, ["stop"])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.stop")), 1)]),
					_: 1
				}, 8, ["loading", "disabled"])) : createCommentVNode("", true)]),
				createBaseVNode("td", null, [!isRunning.value ? (openBlock(), createBlock(unref(ElDropdown), {
					key: 0,
					trigger: "click",
					onCommand: handleActionItemClick
				}, {
					dropdown: withCtx(() => [createVNode(unref(ElDropdownMenu), { class: normalizeClass({
						[_ctx.$style.actions]: true,
						[_ctx.$style.deleteOnly]: !isRetriable.value
					}) }, {
						default: withCtx(() => [
							isRetriable.value ? (openBlock(), createBlock(unref(ElDropdownItem), {
								key: 0,
								"data-test-id": "execution-retry-saved-dropdown-item",
								class: normalizeClass(_ctx.$style.retryAction),
								command: "retrySaved",
								disabled: !__props.workflowPermissions.execute
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.retryWithCurrentlySavedWorkflow")), 1)]),
								_: 1
							}, 8, ["class", "disabled"])) : createCommentVNode("", true),
							isRetriable.value ? (openBlock(), createBlock(unref(ElDropdownItem), {
								key: 1,
								"data-test-id": "execution-retry-original-dropdown-item",
								class: normalizeClass(_ctx.$style.retryAction),
								command: "retryOriginal",
								disabled: !__props.workflowPermissions.execute
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.retryWithOriginalWorkflow")), 1)]),
								_: 1
							}, 8, ["class", "disabled"])) : createCommentVNode("", true),
							createVNode(unref(ElDropdownItem), {
								"data-test-id": "execution-delete-dropdown-item",
								class: normalizeClass(_ctx.$style.deleteAction),
								command: "delete",
								disabled: !__props.workflowPermissions.update
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("generic.delete")), 1)]),
								_: 1
							}, 8, ["class", "disabled"])
						]),
						_: 1
					}, 8, ["class"])]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						text: "",
						type: "tertiary",
						icon: "ellipsis-vertical"
					})]),
					_: 1
				})) : createCommentVNode("", true)])
			], 2);
		};
	}
});
var GlobalExecutionsListItem_vue_vue_type_style_index_0_lang_module_default = {
	dangerBg: "_dangerBg_11wla_125",
	workflowName: "_workflowName_11wla_129"
};
var GlobalExecutionsListItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(GlobalExecutionsListItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": GlobalExecutionsListItem_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = { key: 0 };
var _hoisted_2 = { style: { "width": "50px" } };
var _hoisted_3 = { colspan: "8" };
var _hoisted_4 = { style: { "width": "50px" } };
var _hoisted_5 = {
	colspan: "9",
	style: { "text-align": "center" }
};
var _hoisted_6 = {
	key: 0,
	"data-test-id": "execution-list-empty"
};
var GlobalExecutionsList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "GlobalExecutionsList",
	props: {
		executions: {},
		filters: {},
		total: { default: 0 },
		concurrentTotal: { default: 0 },
		estimated: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:filters", "execution:stop"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const workflowsStore = useWorkflowsStore();
		const executionsStore = useExecutionsStore();
		const settingsStore = useSettingsStore();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const allVisibleSelected = ref(false);
		const allExistingSelected = ref(false);
		const selectedItems = ref({});
		const message = useMessage();
		const toast = useToast();
		const selectedCount = computed(() => {
			if (allExistingSelected.value) return props.total;
			return Object.keys(selectedItems.value).length;
		});
		const workflows = computed(() => {
			return [{
				id: "all",
				name: i18n.baseText("executionsList.allWorkflows")
			}, ...workflowsStore.allWorkflows];
		});
		const isAnnotationEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedExecutionFilters]);
		const showConcurrencyHeader = computed(() => settingsStore.isConcurrencyEnabled && !settingsStore.isQueueModeEnabled);
		watch(() => props.executions, () => {
			if (props.executions.length === 0) handleClearSelection();
			adjustSelectionAfterMoreItemsLoaded();
		});
		function handleCheckAllExistingChange() {
			allExistingSelected.value = !allExistingSelected.value;
			allVisibleSelected.value = !allExistingSelected.value;
			handleCheckAllVisibleChange();
		}
		function handleCheckAllVisibleChange() {
			allVisibleSelected.value = !allVisibleSelected.value;
			if (!allVisibleSelected.value) {
				allExistingSelected.value = false;
				selectedItems.value = {};
			} else selectAllVisibleExecutions();
		}
		function toggleSelectExecution(execution) {
			const executionId = execution.id;
			if (selectedItems.value[executionId]) {
				const { [executionId]: removedSelectedItem, ...rest } = selectedItems.value;
				selectedItems.value = rest;
			} else selectedItems.value = {
				...selectedItems.value,
				[executionId]: true
			};
			allVisibleSelected.value = Object.keys(selectedItems.value).length === props.executions.length;
			allExistingSelected.value = Object.keys(selectedItems.value).length === props.total;
		}
		async function handleDeleteSelected() {
			const confirmationText = [isAnnotationEnabled.value && i18n.baseText("executionsList.confirmMessage.annotationsNote"), i18n.baseText("executionsList.confirmMessage.message", { interpolate: { count: selectedCount.value.toString() } })].filter(Boolean).join(" ");
			if (await message.confirm(confirmationText, i18n.baseText("executionsList.confirmMessage.headline"), {
				type: "warning",
				confirmButtonText: i18n.baseText("executionsList.confirmMessage.confirmButtonText"),
				cancelButtonText: i18n.baseText("executionsList.confirmMessage.cancelButtonText")
			}) !== "confirm") return;
			try {
				await executionsStore.deleteExecutions({
					filters: executionsStore.executionsFilters,
					...allExistingSelected.value ? { deleteBefore: /* @__PURE__ */ new Date() } : { ids: Object.keys(selectedItems.value) }
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("executionsList.showError.handleDeleteSelected.title"));
				return;
			}
			toast.showMessage({
				title: i18n.baseText("executionsList.showMessage.handleDeleteSelected.title"),
				type: "success"
			});
			handleClearSelection();
		}
		function handleClearSelection() {
			allVisibleSelected.value = false;
			allExistingSelected.value = false;
			selectedItems.value = {};
		}
		async function onFilterChanged(filters) {
			emit("update:filters", filters);
			handleClearSelection();
		}
		function getExecutionWorkflowName(execution) {
			return getWorkflowName(execution.workflowId ?? "") ?? i18n.baseText("executionsList.unsavedWorkflow");
		}
		function getExecutionWorkflowPermissions(execution) {
			return getResourcePermissions(execution.scopes).workflow;
		}
		function getWorkflowName(workflowId) {
			return workflows.value.find((data) => data.id === workflowId)?.name;
		}
		useIntersectionObserver(useTemplateRef("loadMoreButton"), ([entry]) => {
			if (!entry?.isIntersecting) return;
			loadMore();
		});
		async function loadMore() {
			if (executionsStore.filters.status === "running") return;
			const lastItem = props.executions.at(-1);
			try {
				await executionsStore.fetchExecutions(executionsStore.executionsFilters, lastItem?.id);
			} catch (error) {
				toast.showError(error, i18n.baseText("executionsList.showError.loadMore.title"));
			}
		}
		function selectAllVisibleExecutions() {
			props.executions.forEach((execution) => {
				selectedItems.value[execution.id] = true;
			});
		}
		function adjustSelectionAfterMoreItemsLoaded() {
			if (allExistingSelected.value) {
				allVisibleSelected.value = true;
				selectAllVisibleExecutions();
			}
		}
		async function retrySavedExecution(execution) {
			await retryExecution(execution, true);
		}
		async function retryOriginalExecution(execution) {
			await retryExecution(execution, false);
		}
		async function retryExecution(execution, loadWorkflow) {
			try {
				const retryMessage = executionRetryMessage((await executionsStore.retryExecution(execution.id, loadWorkflow)).status);
				if (retryMessage) toast.showMessage(retryMessage);
			} catch (error) {
				toast.showError(error, i18n.baseText("executionsList.showError.retryExecution.title"));
			}
			telemetry.track("User clicked retry execution button", {
				workflow_id: workflowsStore.workflowId,
				execution_id: execution.id,
				retry_type: loadWorkflow ? "current" : "original"
			});
		}
		async function stopExecution(execution) {
			try {
				await executionsStore.stopCurrentExecution(execution.id);
				toast.showMessage({
					title: i18n.baseText("executionsList.showMessage.stopExecution.title"),
					message: i18n.baseText("executionsList.showMessage.stopExecution.message", { interpolate: { activeExecutionId: execution.id } }),
					type: "success"
				});
				emit("execution:stop");
			} catch (error) {
				toast.showError(error, i18n.baseText("executionsList.showError.stopExecution.title"));
			}
		}
		async function deleteExecution(execution) {
			if (!!execution.annotation && (execution.annotation.vote || execution.annotation.tags.length > 0)) {
				if (await message.confirm(i18n.baseText("executionsList.confirmMessage.annotatedExecutionMessage"), i18n.baseText("executionDetails.confirmMessage.headline"), {
					type: "warning",
					confirmButtonText: i18n.baseText("executionDetails.confirmMessage.confirmButtonText"),
					cancelButtonText: ""
				}) !== "confirm") return;
			}
			try {
				await executionsStore.deleteExecutions({ ids: [execution.id] });
				if (allVisibleSelected.value) {
					const { [execution.id]: _, ...rest } = selectedItems.value;
					selectedItems.value = rest;
				}
			} catch (error) {
				toast.showError(error, i18n.baseText("executionsList.showError.handleDeleteSelected.title"));
			}
		}
		async function onAutoRefreshToggle(value) {
			if (value) await executionsStore.startAutoRefreshInterval();
			else executionsStore.stopAutoRefreshInterval();
		}
		const goToUpgrade = () => {
			pageRedirectionHelper.goToUpgrade("concurrency", "upgrade-concurrency");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.execListWrapper) }, [
				renderSlot(_ctx.$slots, "default"),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.execListHeaderControls) }, [showConcurrencyHeader.value ? (openBlock(), createBlock(ConcurrentExecutionsHeader_default, {
					key: 0,
					"running-executions-count": __props.concurrentTotal,
					"concurrency-cap": unref(settingsStore).concurrency,
					"is-cloud-deployment": unref(settingsStore).isCloudDeployment,
					onGoToUpgrade: goToUpgrade
				}, null, 8, [
					"running-executions-count",
					"concurrency-cap",
					"is-cloud-deployment"
				])) : (openBlock(), createBlock(unref(Checkbox_default), {
					key: 1,
					modelValue: unref(executionsStore).autoRefresh,
					"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => unref(executionsStore).autoRefresh = $event), onAutoRefreshToggle],
					"data-test-id": "execution-auto-refresh-checkbox",
					label: unref(i18n).baseText("executionsList.autoRefresh")
				}, null, 8, ["modelValue", "label"])), createBaseVNode("div", { class: normalizeClass(_ctx.$style.execHeaderRight) }, [createVNode(ExecutionStopAllText_default, { executions: props.executions }, null, 8, ["executions"]), createVNode(ExecutionsFilter_default, {
					workflows: workflows.value,
					class: "execFilter",
					onFilterChanged
				}, null, 8, ["workflows"])], 2)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.execList) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.execTable) }, [createVNode(unref(TableBase_default), null, {
					default: withCtx(() => [createBaseVNode("thead", null, [allVisibleSelected.value && __props.total > 0 ? (openBlock(), createElementBlock("tr", _hoisted_1, [createBaseVNode("th", _hoisted_2, [createVNode(unref(Checkbox_default), {
						"model-value": allExistingSelected.value,
						"data-test-id": "select-all-executions-checkbox",
						class: "mb-0",
						"onUpdate:modelValue": handleCheckAllExistingChange
					}, null, 8, ["model-value"])]), createBaseVNode("th", _hoisted_3, toDisplayString(unref(i18n).baseText("executionsList.selectAll", {
						adjustToNumber: __props.total,
						interpolate: { count: `${__props.total}` }
					})), 1)])) : createCommentVNode("", true), createBaseVNode("tr", null, [
						createBaseVNode("th", _hoisted_4, [createVNode(unref(Checkbox_default), {
							"model-value": allVisibleSelected.value,
							disabled: __props.total < 1,
							"data-test-id": "select-visible-executions-checkbox",
							class: "mb-0",
							"onUpdate:modelValue": handleCheckAllVisibleChange
						}, null, 8, ["model-value", "disabled"])]),
						createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("generic.workflow")), 1),
						createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("executionsList.status")), 1),
						createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("executionsList.startedAt")), 1),
						createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("executionsList.runTime")), 1),
						createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("executionsList.id")), 1),
						_cache[2] || (_cache[2] = createBaseVNode("th", null, null, -1)),
						_cache[3] || (_cache[3] = createBaseVNode("th", { style: { "width": "69px" } }, null, -1)),
						_cache[4] || (_cache[4] = createBaseVNode("th", { style: { "width": "50px" } }, null, -1))
					])]), createBaseVNode("tbody", null, [
						(openBlock(true), createElementBlock(Fragment, null, renderList(__props.executions, (execution) => {
							return openBlock(), createBlock(GlobalExecutionsListItem_default, {
								key: execution.id,
								execution,
								"workflow-name": getExecutionWorkflowName(execution),
								"workflow-permissions": getExecutionWorkflowPermissions(execution),
								selected: selectedItems.value[execution.id] || allExistingSelected.value,
								"concurrency-cap": unref(settingsStore).concurrency,
								"is-cloud-deployment": unref(settingsStore).isCloudDeployment,
								"data-test-id": "global-execution-list-item",
								onStop: stopExecution,
								onDelete: deleteExecution,
								onSelect: toggleSelectExecution,
								onRetrySaved: retrySavedExecution,
								onRetryOriginal: retryOriginalExecution,
								onGoToUpgrade: goToUpgrade
							}, null, 8, [
								"execution",
								"workflow-name",
								"workflow-permissions",
								"selected",
								"concurrency-cap",
								"is-cloud-deployment"
							]);
						}), 128)),
						unref(executionsStore).loading && !__props.executions.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(executionsStore).itemsPerPage, (item) => {
							return openBlock(), createElementBlock("tr", { key: item }, [(openBlock(), createElementBlock(Fragment, null, renderList(9, (col) => {
								return createBaseVNode("td", { key: col }, [createVNode(unref(ElSkeletonItem))]);
							}), 64))]);
						}), 128)) : createCommentVNode("", true),
						createBaseVNode("tr", null, [createBaseVNode("td", _hoisted_5, [!__props.executions.length ? (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(unref(i18n).baseText("executionsList.empty")), 1)) : __props.total > __props.executions.length || __props.estimated ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 1,
							ref: "loadMoreButton",
							icon: "refresh-cw",
							title: unref(i18n).baseText("executionsList.loadMore"),
							label: unref(i18n).baseText("executionsList.loadMore"),
							loading: unref(executionsStore).loading,
							"data-test-id": "load-more-button",
							onClick: _cache[1] || (_cache[1] = ($event) => loadMore())
						}, null, 8, [
							"title",
							"label",
							"loading"
						])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(unref(i18n).baseText("executionsList.loadedAll")), 1)], 64))])])
					])]),
					_: 1
				})], 2)], 2),
				createVNode(SelectedItemsInfo_default, {
					"selected-count": selectedCount.value,
					onDeleteSelected: handleDeleteSelected,
					onClearSelection: handleClearSelection
				}, null, 8, ["selected-count"])
			], 2);
		};
	}
});
var GlobalExecutionsList_vue_vue_type_style_index_0_lang_module_default = {
	execListWrapper: "_execListWrapper_5gyes_125",
	execList: "_execList_5gyes_125",
	execListHeaderControls: "_execListHeaderControls_5gyes_140",
	execTable: "_execTable_5gyes_147",
	execHeaderRight: "_execHeaderRight_5gyes_152"
};
var GlobalExecutionsList_default = /* @__PURE__ */ __plugin_vue_export_helper_default(GlobalExecutionsList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": GlobalExecutionsList_vue_vue_type_style_index_0_lang_module_default }]]);
var ExecutionsView_default = /* @__PURE__ */ defineComponent({
	__name: "ExecutionsView",
	setup(__props) {
		const route = useRoute();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const externalHooks = useExternalHooks();
		const workflowsStore = useWorkflowsStore();
		const executionsStore = useExecutionsStore();
		const insightsStore = useInsightsStore();
		const documentTitle = useDocumentTitle();
		const toast = useToast();
		const overview = useProjectPages();
		const { executionsCount, executionsCountEstimated, concurrentExecutionsCount, filters, allExecutions } = storeToRefs(executionsStore);
		onBeforeMount(async () => {
			await loadWorkflows();
			externalHooks.run("executionsList.openDialog");
			telemetry.track("User opened Executions log", { workflow_id: workflowsStore.workflowId });
		});
		onMounted(async () => {
			documentTitle.set(i18n.baseText("executionsList.workflowExecutions"));
			document.addEventListener("visibilitychange", onDocumentVisibilityChange);
			await executionsStore.initialize();
		});
		onBeforeUnmount(() => {
			executionsStore.reset();
			document.removeEventListener("visibilitychange", onDocumentVisibilityChange);
		});
		async function loadWorkflows() {
			try {
				await workflowsStore.fetchAllWorkflows(route.params?.projectId);
			} catch (error) {
				toast.showError(error, i18n.baseText("executionsList.showError.loadWorkflows.title"));
			}
		}
		function onDocumentVisibilityChange() {
			if (document.visibilityState === "hidden") executionsStore.stopAutoRefreshInterval();
			else executionsStore.startAutoRefreshInterval();
		}
		async function onRefreshData() {
			try {
				await executionsStore.fetchExecutions();
			} catch (error) {
				toast.showError(error, i18n.baseText("executionsList.showError.refreshData.title"));
			}
		}
		async function onUpdateFilters(newFilters) {
			executionsStore.reset();
			executionsStore.setFilters(newFilters);
			await executionsStore.initialize();
		}
		async function onExecutionStop() {
			await onRefreshData();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(GlobalExecutionsList_default, {
				executions: unref(allExecutions),
				filters: unref(filters),
				total: unref(executionsCount),
				"estimated-total": unref(executionsCountEstimated),
				"concurrent-total": unref(concurrentExecutionsCount),
				"onExecution:stop": onExecutionStop,
				"onUpdate:filters": onUpdateFilters
			}, {
				default: withCtx(() => [createVNode(ProjectHeader_default, null, {
					default: withCtx(() => [unref(overview).isOverviewSubPage && unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(InsightsSummary_default, {
						key: 0,
						loading: unref(insightsStore).weeklySummary.isLoading,
						summary: unref(insightsStore).weeklySummary.state,
						"time-range": "week"
					}, null, 8, ["loading", "summary"])) : createCommentVNode("", true)]),
					_: 1
				})]),
				_: 1
			}, 8, [
				"executions",
				"filters",
				"total",
				"estimated-total",
				"concurrent-total"
			]);
		};
	}
});
export { ExecutionsView_default as default };
