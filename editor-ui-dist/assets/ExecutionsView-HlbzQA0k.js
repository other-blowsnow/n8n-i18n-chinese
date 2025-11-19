import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _ as Fragment, _n as normalizeClass, _t as watch, at as renderSlot, bt as withCtx, c as useCssModule, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, mt as useTemplateRef, ot as resolveComponent, q as onBeforeMount, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { A as useIntersectionObserver, _t as I18nT, gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { At as ElSkeletonItem, Ft as ElDropdown, In as N8nText_default, It as ElDropdownItem, J as N8nCheckbox_default, Ln as N8nButton_default, Lt as ElDropdownMenu, Tt as N8nIconButton_default, U as TableBase_default, Vt as ElCheckbox, mt as N8nLink_default, vt as N8nTooltip_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { y as useRoute } from "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./date-picker-C3uJHiXB.js";
import "./overlay-DxjKgl5T.js";
import "./empty-RTEMfF4N.js";
import { t as useMessage } from "./useMessage-HzD9OyTZ.js";
import { Bo as useSettingsStore, Sc as storeToRefs, Tn as useDocumentTitle, X as executionRetryMessage, o as useWorkflowsStore, t as useTelemetry } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { Ca as WAIT_INDEFINITELY, Hs as EnterpriseEditionFeature, No as MODAL_CONFIRM, _r as getResourcePermissions, mo as VIEWS } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import { t as useExternalHooks } from "./useExternalHooks-CE2Rdzfk.js";
import "./cloudPlan.store-Dw9c9iy4.js";
import { t as useExecutionsStore } from "./executions.store-a34D3haB.js";
import "./folders.store-Cwp_DTVT.js";
import "./versions.store-DbkVHo9d.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-BOaFWroN.js";
import "./ProjectIcon-BYB-pK6e.js";
import { t as convertToDisplayDate } from "./dateFormatter-CXO-zUXu.js";
import { t as useExecutionHelpers } from "./useExecutionHelpers-Dhozi48o.js";
import "./TagsDropdown-rTwmy1Tm.js";
import "./WorkflowTagsDropdown-CC7yYT8W.js";
import { t as useInsightsStore } from "./insights.store-DHwsBBEe.js";
import "./insights.constants-DK2g3nnD.js";
import "./insights.utils-yRgER63l.js";
import { n as useProjectPages } from "./readyToRunWorkflowsV2.store-DpzmixIa.js";
import { t as ProjectHeader_default } from "./ProjectHeader-DEFzma1m.js";
import "./smartDecimal-e9uPsnJa.js";
import { t as InsightsSummary_default } from "./InsightsSummary-DrNhXF20.js";
import { t as AnimatedSpinner_default } from "./AnimatedSpinner-4ie3BOLv.js";
import { t as SelectedItemsInfo_default } from "./SelectedItemsInfo-COAY_nVN.js";
import "./AnnotationTagsDropdown.ee-LOH7o9OO.js";
import { n as ExecutionsFilter_default, r as ConcurrentExecutionsHeader_default, t as ExecutionsTime_default } from "./ExecutionsTime-m3iQWqlX.js";
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
var GlobalExecutionsListItemQueuedTooltip_vue_vue_type_style_index_0_lang_module_default = { link: "_link_g8cyq_123" };
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
				createBaseVNode("td", null, [createVNode(unref(N8nCheckbox_default), {
					"model-value": _ctx.selected,
					"data-test-id": "select-execution-checkbox",
					disabled: !Boolean(_ctx.execution.id && _ctx.execution.stoppedAt),
					class: "mb-0",
					style: { marginTop: "-3px" },
					"onUpdate:modelValue": onSelect
				}, null, 8, ["model-value", "disabled"])]),
				createBaseVNode("td", null, [createVNode(unref(N8nTooltip_default), {
					content: _ctx.execution.workflowName || _ctx.workflowName,
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(_component_RouterLink, {
						to: {
							name: unref(VIEWS).EXECUTION_PREVIEW,
							params: {
								name: _ctx.execution.workflowId,
								executionId: _ctx.execution.id
							}
						},
						class: normalizeClass(_ctx.$style.workflowName),
						target: "_blank"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.execution.workflowName || _ctx.workflowName), 1)]),
						_: 1
					}, 8, ["to", "class"])]),
					_: 1
				}, 8, ["content"])]),
				createBaseVNode("td", _hoisted_1$1, [isWaitTillIndefinite.value || _ctx.execution.status === EXECUTION_STATUS.NEW ? (openBlock(), createBlock(GlobalExecutionsListItemQueuedTooltip_default, {
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
					disabled: _ctx.execution.status !== EXECUTION_STATUS.WAITING,
					content: unref(locale).baseText("executionsList.statusWaiting", { interpolate: {
						status: _ctx.execution.status,
						time: formattedWaitTillDate.value
					} })
				}, {
					default: withCtx(() => [createBaseVNode("div", null, [_ctx.execution.status === EXECUTION_STATUS.RUNNING ? (openBlock(), createBlock(unref(N8nText_default), {
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
					"start-time": _ctx.execution.startedAt ?? _ctx.execution.createdAt
				}, null, 8, ["start-time"]))]),
				createBaseVNode("td", null, [_ctx.execution.id ? (openBlock(), createElementBlock("span", _hoisted_3$1, toDisplayString(_ctx.execution.id), 1)) : createCommentVNode("", true), _ctx.execution.retryOf ? (openBlock(), createElementBlock("span", _hoisted_4$1, [_cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)), createBaseVNode("small", null, " (" + toDisplayString(unref(locale).baseText("executionsList.retryOf")) + " " + toDisplayString(_ctx.execution.retryOf) + ") ", 1)])) : _ctx.execution.retrySuccessId ? (openBlock(), createElementBlock("span", _hoisted_5$1, [_cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)), createBaseVNode("small", null, " (" + toDisplayString(unref(locale).baseText("executionsList.successRetry")) + " " + toDisplayString(_ctx.execution.retrySuccessId) + ") ", 1)])) : createCommentVNode("", true)]),
				createBaseVNode("td", null, [_ctx.execution.mode === "manual" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: "Manual Execution",
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "flask-conical" })]),
					_: 1
				})) : _ctx.execution.mode === "chat" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					content: "Chat Execution",
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "messages-square" })]),
					_: 1
				})) : createCommentVNode("", true)]),
				createBaseVNode("td", null, [!_ctx.execution.stoppedAt || _ctx.execution.waitTill ? (openBlock(), createBlock(unref(N8nButton_default), {
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
								disabled: !_ctx.workflowPermissions.execute
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.retryWithCurrentlySavedWorkflow")), 1)]),
								_: 1
							}, 8, ["class", "disabled"])) : createCommentVNode("", true),
							isRetriable.value ? (openBlock(), createBlock(unref(ElDropdownItem), {
								key: 1,
								"data-test-id": "execution-retry-original-dropdown-item",
								class: normalizeClass(_ctx.$style.retryAction),
								command: "retryOriginal",
								disabled: !_ctx.workflowPermissions.execute
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.retryWithOriginalWorkflow")), 1)]),
								_: 1
							}, 8, ["class", "disabled"])) : createCommentVNode("", true),
							createVNode(unref(ElDropdownItem), {
								"data-test-id": "execution-delete-dropdown-item",
								class: normalizeClass(_ctx.$style.deleteAction),
								command: "delete",
								disabled: !_ctx.workflowPermissions.update
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
	dangerBg: "_dangerBg_1j9ti_123",
	workflowName: "_workflowName_1j9ti_127"
};
var GlobalExecutionsListItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(GlobalExecutionsListItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": GlobalExecutionsListItem_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = { style: { "margin-left": "auto" } };
var _hoisted_2 = { key: 0 };
var _hoisted_3 = { style: { "width": "50px" } };
var _hoisted_4 = { colspan: "8" };
var _hoisted_5 = { style: { "width": "50px" } };
var _hoisted_6 = {
	colspan: "9",
	style: { "text-align": "center" }
};
var _hoisted_7 = {
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
				const { [executionId]: removedSelectedItem,...rest } = selectedItems.value;
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
					const { [execution.id]: _,...rest } = selectedItems.value;
					selectedItems.value = rest;
				}
			} catch (error) {
				toast.showError(error, i18n.baseText("executionsList.showError.handleDeleteSelected.title"));
			}
		}
		async function onAutoRefreshToggle(value) {
			if (typeof value === "boolean" ? value : Boolean(value)) await executionsStore.startAutoRefreshInterval();
			else executionsStore.stopAutoRefreshInterval();
		}
		const goToUpgrade = () => {
			pageRedirectionHelper.goToUpgrade("concurrency", "upgrade-concurrency");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.execListWrapper) }, [
				renderSlot(_ctx.$slots, "default", {}, void 0, true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.execListHeaderControls) }, [createVNode(ExecutionsFilter_default, {
					workflows: workflows.value,
					class: "execFilter",
					onFilterChanged
				}, null, 8, ["workflows"]), createBaseVNode("div", _hoisted_1, [showConcurrencyHeader.value ? (openBlock(), createBlock(ConcurrentExecutionsHeader_default, {
					key: 0,
					"running-executions-count": _ctx.concurrentTotal,
					"concurrency-cap": unref(settingsStore).concurrency,
					"is-cloud-deployment": unref(settingsStore).isCloudDeployment,
					onGoToUpgrade: goToUpgrade
				}, null, 8, [
					"running-executions-count",
					"concurrency-cap",
					"is-cloud-deployment"
				])) : (openBlock(), createBlock(unref(ElCheckbox), {
					key: 1,
					modelValue: unref(executionsStore).autoRefresh,
					"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => unref(executionsStore).autoRefresh = $event), _cache[1] || (_cache[1] = ($event) => onAutoRefreshToggle($event))],
					"data-test-id": "execution-auto-refresh-checkbox"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionsList.autoRefresh")), 1)]),
					_: 1
				}, 8, ["modelValue"]))])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.execList) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.execTable) }, [createVNode(unref(TableBase_default), null, {
					default: withCtx(() => [createBaseVNode("thead", null, [allVisibleSelected.value && _ctx.total > 0 ? (openBlock(), createElementBlock("tr", _hoisted_2, [createBaseVNode("th", _hoisted_3, [createVNode(unref(N8nCheckbox_default), {
						"model-value": allExistingSelected.value,
						"data-test-id": "select-all-executions-checkbox",
						class: "mb-0",
						"onUpdate:modelValue": handleCheckAllExistingChange
					}, null, 8, ["model-value"])]), createBaseVNode("th", _hoisted_4, toDisplayString(unref(i18n).baseText("executionsList.selectAll", {
						adjustToNumber: _ctx.total,
						interpolate: { count: `${_ctx.total}` }
					})), 1)])) : createCommentVNode("", true), createBaseVNode("tr", null, [
						createBaseVNode("th", _hoisted_5, [createVNode(unref(N8nCheckbox_default), {
							"model-value": allVisibleSelected.value,
							disabled: _ctx.total < 1,
							"data-test-id": "select-visible-executions-checkbox",
							class: "mb-0",
							"onUpdate:modelValue": handleCheckAllVisibleChange
						}, null, 8, ["model-value", "disabled"])]),
						createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("generic.workflow")), 1),
						createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("executionsList.status")), 1),
						createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("executionsList.startedAt")), 1),
						createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("executionsList.runTime")), 1),
						createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("executionsList.id")), 1),
						_cache[3] || (_cache[3] = createBaseVNode("th", null, null, -1)),
						_cache[4] || (_cache[4] = createBaseVNode("th", { style: { "width": "69px" } }, null, -1)),
						_cache[5] || (_cache[5] = createBaseVNode("th", { style: { "width": "50px" } }, null, -1))
					])]), createBaseVNode("tbody", null, [
						(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.executions, (execution) => {
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
						unref(executionsStore).loading && !_ctx.executions.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(executionsStore).itemsPerPage, (item) => {
							return openBlock(), createElementBlock("tr", { key: item }, [(openBlock(), createElementBlock(Fragment, null, renderList(9, (col) => {
								return createBaseVNode("td", { key: col }, [createVNode(unref(ElSkeletonItem))]);
							}), 64))]);
						}), 128)) : createCommentVNode("", true),
						createBaseVNode("tr", null, [createBaseVNode("td", _hoisted_6, [!_ctx.executions.length ? (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString(unref(i18n).baseText("executionsList.empty")), 1)) : _ctx.total > _ctx.executions.length || _ctx.estimated ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 1,
							ref: "loadMoreButton",
							icon: "refresh-cw",
							title: unref(i18n).baseText("executionsList.loadMore"),
							label: unref(i18n).baseText("executionsList.loadMore"),
							loading: unref(executionsStore).loading,
							"data-test-id": "load-more-button",
							onClick: _cache[2] || (_cache[2] = ($event) => loadMore())
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
	execListWrapper: "_execListWrapper_figer_123",
	execList: "_execList_figer_123",
	execListHeaderControls: "_execListHeaderControls_figer_138",
	execTable: "_execTable_figer_145"
};
var GlobalExecutionsList_default = /* @__PURE__ */ __plugin_vue_export_helper_default(GlobalExecutionsList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": GlobalExecutionsList_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-99838607"]]);
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
