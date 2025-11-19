import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _ as Fragment, _n as normalizeClass, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { Fn as N8nCallout_default, In as N8nText_default, Pn as N8nHeading_default, Tt as N8nIconButton_default, V as N8nExternalLink_default, Yt as ElScrollbar, et as N8nLoading_default, o as TableHeaderControlsButton_default, vt as N8nTooltip_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter } from "./truncate-1c7Iwk7N.js";
import "./table-utH6uwMI.js";
import "./icon-mgEZlgYz.js";
import "./empty-RTEMfF4N.js";
import { at as useEvaluationStore, o as useWorkflowsStore } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { mo as VIEWS } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import { t as convertToDisplayDate } from "./dateFormatter-CXO-zUXu.js";
import { t as require_orderBy } from "./orderBy-BTQ4q55E.js";
import { t as useWorkflowSettingsCache } from "./useWorkflowsCache-Bmj_2jFp.js";
import { a as applyCachedVisibility, c as getTestTableHeaders, i as applyCachedSortOrder, n as statusDictionary, o as getDefaultOrderedColumns, r as TestTableBase_default, s as getTestCasesColumns, t as getErrorBaseKey } from "./evaluation.constants-D-6AlWkL.js";
var import_orderBy = /* @__PURE__ */ __toESM(require_orderBy());
var _hoisted_1 = { style: { "display": "flex" } };
var _hoisted_2 = { style: {
	"display": "flex",
	"justify-content": "space-between",
	"gap": "10px"
} };
var _hoisted_3 = { style: {
	"display": "inline-flex",
	"gap": "12px",
	"align-items": "center",
	"max-width": "100%"
} };
var TestRunDetailView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TestRunDetailView",
	setup(__props) {
		const router = useRouter();
		const toast = useToast();
		const evaluationStore = useEvaluationStore();
		const workflowsStore = useWorkflowsStore();
		const locale = useI18n();
		const workflowsCache = useWorkflowSettingsCache();
		const isLoading = ref(true);
		const testCases = ref([]);
		const hasFailedTestCases = ref(false);
		const runId = computed(() => router.currentRoute.value.params.runId);
		const workflowId = computed(() => router.currentRoute.value.params.name);
		const workflowName = computed(() => workflowsStore.getWorkflowById(workflowId.value)?.name ?? "");
		const cachedUserPreferences = ref();
		const expandedRows = ref(/* @__PURE__ */ new Set());
		const run = computed(() => evaluationStore.testRunsById[runId.value]);
		const runErrorDetails = computed(() => {
			return run.value?.errorDetails;
		});
		const filteredTestCases = computed(() => (0, import_orderBy.default)(testCases.value, (record) => record.runAt, ["asc"]).map((record, index) => Object.assign(record, { index: index + 1 })));
		const isAllExpanded = computed(() => expandedRows.value.size === filteredTestCases.value.length);
		const testRunIndex = computed(() => Object.values((0, import_orderBy.default)(evaluationStore.testRunsById, (record) => new Date(record.runAt), ["asc"]).filter(({ workflowId: wId }) => wId === workflowId.value) ?? {}).findIndex(({ id }) => id === runId.value));
		const formattedTime = computed(() => convertToDisplayDate(new Date(run.value?.runAt).getTime()));
		const openRelatedExecution = (row) => {
			const executionId = row.executionId;
			if (executionId) {
				const { href } = router.resolve({
					name: VIEWS.EXECUTION_PREVIEW,
					params: {
						name: workflowId.value,
						executionId
					}
				});
				window.open(href, "_blank");
			}
		};
		const inputColumns = computed(() => getTestCasesColumns(filteredTestCases.value, "inputs"));
		const orderedColumns = computed(() => {
			return applyCachedVisibility(applyCachedSortOrder(getDefaultOrderedColumns(run.value, filteredTestCases.value), cachedUserPreferences.value?.order), cachedUserPreferences.value?.visibility);
		});
		const columns = computed(() => [
			{
				prop: "index",
				width: 100,
				label: locale.baseText("evaluation.runDetail.testCase"),
				sortable: true
			},
			{
				prop: "status",
				label: locale.baseText("evaluation.listRuns.status"),
				minWidth: 125
			},
			...getTestTableHeaders(orderedColumns.value, filteredTestCases.value)
		]);
		const metrics = computed(() => run.value?.metrics ?? {});
		const fetchExecutionTestCases = async () => {
			if (!runId.value || !workflowId.value) return;
			isLoading.value = true;
			try {
				const testRun = await evaluationStore.getTestRun({
					workflowId: workflowId.value,
					runId: runId.value
				});
				const testCaseEvaluationExecutions = await evaluationStore.fetchTestCaseExecutions({
					workflowId: workflowId.value,
					runId: testRun.id
				});
				testCases.value = testCaseEvaluationExecutions ?? [];
				hasFailedTestCases.value = testCaseEvaluationExecutions?.some((testCase) => testCase.status === "error");
				await evaluationStore.fetchTestRuns(run.value.workflowId);
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.toast.error.fetchTestCases"));
			} finally {
				isLoading.value = false;
			}
		};
		async function loadCachedUserPreferences() {
			cachedUserPreferences.value = await workflowsCache.getEvaluationPreferences(workflowId.value);
		}
		async function saveCachedUserPreferences() {
			if (cachedUserPreferences.value) await workflowsCache.saveEvaluationPreferences(workflowId.value, cachedUserPreferences.value);
		}
		async function handleColumnVisibilityUpdate(columnKey, visibility) {
			cachedUserPreferences.value ??= {
				order: [],
				visibility: {}
			};
			cachedUserPreferences.value.visibility[columnKey] = visibility;
			await saveCachedUserPreferences();
		}
		async function handleColumnOrderUpdate(newOrder) {
			cachedUserPreferences.value ??= {
				order: [],
				visibility: {}
			};
			cachedUserPreferences.value.order = newOrder;
			await saveCachedUserPreferences();
		}
		function toggleRowExpansion(row) {
			if (expandedRows.value.has(row.id)) expandedRows.value.delete(row.id);
			else expandedRows.value.add(row.id);
		}
		function toggleAllExpansion() {
			if (isAllExpanded.value) expandedRows.value.clear();
			else expandedRows.value = new Set(filteredTestCases.value.map((row) => row.id));
		}
		onMounted(async () => {
			await fetchExecutionTestCases();
			await loadCachedUserPreferences();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "test-definition-run-detail"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [
					createBaseVNode("button", {
						class: normalizeClass(_ctx.$style.backButton),
						onClick: _cache[0] || (_cache[0] = ($event) => unref(router).back())
					}, [createVNode(unref(N8nIcon_default), { icon: "arrow-left" }), createVNode(unref(N8nHeading_default), {
						size: "large",
						bold: true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.listRuns.runListHeader", { interpolate: { name: workflowName.value } })), 1)]),
						_: 1
					})], 2),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.headerSeparator) }, "/", 2),
					createVNode(unref(N8nHeading_default), {
						size: "large",
						bold: true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.listRuns.testCasesListHeader", { interpolate: { index: testRunIndex.value + 1 } })), 1)]),
						_: 1
					})
				], 2),
				run.value?.status === "error" ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 0,
					theme: "danger",
					icon: "triangle-alert",
					class: "mb-s"
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						size: "small",
						class: normalizeClass(_ctx.$style.capitalized)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(`${unref(getErrorBaseKey)(run.value?.errorCode)}`, runErrorDetails.value ? { interpolate: runErrorDetails.value } : {}) ?? unref(locale).baseText(`${unref(getErrorBaseKey)("UNKNOWN_ERROR")}`)), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				})) : createCommentVNode("", true),
				createVNode(unref(ElScrollbar), {
					always: "",
					class: normalizeClass([_ctx.$style.scrollableSummary, "mb-m"])
				}, {
					default: withCtx(() => [createBaseVNode("div", _hoisted_1, [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.summaryCard) }, [createVNode(unref(N8nText_default), {
							size: "small",
							class: normalizeClass(_ctx.$style.summaryCardTitle)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.runDetail.totalCases")), 1)]),
							_: 1
						}, 8, ["class"]), createVNode(unref(N8nText_default), {
							size: "xlarge",
							class: normalizeClass(_ctx.$style.summaryCardContentLargeNumber),
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(testCases.value.length), 1)]),
							_: 1
						}, 8, ["class"])], 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.summaryCard) }, [createVNode(unref(N8nText_default), {
							size: "small",
							class: normalizeClass(_ctx.$style.summaryCardTitle)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.runDetail.ranAt")), 1)]),
							_: 1
						}, 8, ["class"]), createBaseVNode("div", null, [createVNode(unref(N8nText_default), { size: "medium" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(formattedTime.value.date) + " " + toDisplayString(formattedTime.value.time), 1)]),
							_: 1
						})])], 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.summaryCard) }, [createVNode(unref(N8nText_default), {
							size: "small",
							class: normalizeClass(_ctx.$style.summaryCardTitle)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.listRuns.status")), 1)]),
							_: 1
						}, 8, ["class"]), run.value?.status === "completed" && hasFailedTestCases.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "medium",
							color: "warning"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(`evaluation.runDetail.error.partialCasesFailed`)), 1)]),
							_: 1
						})) : (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							color: unref(statusDictionary)[run.value?.status]?.color,
							size: "medium",
							class: normalizeClass(run.value?.status.toLowerCase()),
							style: { "text-transform": "capitalize" }
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(run.value?.status), 1)]),
							_: 1
						}, 8, ["color", "class"]))], 2),
						(openBlock(true), createElementBlock(Fragment, null, renderList(metrics.value, (value, key) => {
							return openBlock(), createElementBlock("div", {
								key,
								class: normalizeClass(_ctx.$style.summaryCard)
							}, [createVNode(unref(N8nTooltip_default), {
								content: key,
								placement: "top"
							}, {
								default: withCtx(() => [createVNode(unref(N8nText_default), {
									size: "small",
									class: normalizeClass(_ctx.$style.summaryCardTitle),
									style: {
										"text-overflow": "ellipsis",
										"overflow": "hidden"
									}
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(key), 1)]),
									_: 2
								}, 1032, ["class"])]),
								_: 2
							}, 1032, ["content"]), createVNode(unref(N8nText_default), {
								size: "xlarge",
								class: normalizeClass(_ctx.$style.summaryCardContentLargeNumber),
								bold: ""
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(value.toFixed(2)), 1)]),
								_: 2
							}, 1032, ["class"])], 2);
						}), 128))
					])]),
					_: 1
				}, 8, ["class"]),
				createBaseVNode("div", { class: normalizeClass(["mb-s", _ctx.$style.runsHeader]) }, [createBaseVNode("div", null, [createVNode(unref(N8nHeading_default), {
					size: "large",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.listRuns.allTestCases", { interpolate: { count: filteredTestCases.value.length } })), 1)]),
					_: 1
				})]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.runsHeaderButtons) }, [createVNode(unref(N8nIconButton_default), {
					icon: isAllExpanded.value ? "chevrons-down-up" : "chevrons-up-down",
					type: "secondary",
					size: "medium",
					onClick: toggleAllExpansion
				}, null, 8, ["icon"]), createVNode(unref(TableHeaderControlsButton_default), {
					size: "medium",
					"icon-size": "small",
					columns: orderedColumns.value,
					"onUpdate:columnVisibility": handleColumnVisibilityUpdate,
					"onUpdate:columnOrder": handleColumnOrderUpdate
				}, null, 8, ["columns"])], 2)], 2),
				!isLoading.value && !inputColumns.value.length && run.value?.status === "completed" && run.value?.finalResult === "success" ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 1,
					theme: "secondary",
					icon: "info",
					class: "mb-s"
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						size: "small",
						class: normalizeClass(_ctx.$style.capitalized)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.runDetail.notice.useSetInputs")), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				})) : createCommentVNode("", true),
				isLoading.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.loading)
				}, [createVNode(unref(N8nLoading_default), {
					loading: true,
					rows: 5
				})], 2)) : (openBlock(), createBlock(TestTableBase_default, {
					key: 3,
					data: filteredTestCases.value,
					columns: columns.value,
					"default-sort": {
						prop: "id",
						order: "descending"
					},
					"expanded-rows": expandedRows.value,
					onRowClick: toggleRowExpansion
				}, {
					id: withCtx(({ row }) => [createBaseVNode("div", _hoisted_2, toDisplayString(row.id), 1)]),
					index: withCtx(({ row }) => [createBaseVNode("div", null, [row.executionId ? (openBlock(), createBlock(unref(N8nExternalLink_default), {
						key: 0,
						class: "open-execution-link",
						onClick: withModifiers(($event) => openRelatedExecution(row), ["stop", "prevent"])
					}, {
						default: withCtx(() => [createTextVNode(" #" + toDisplayString(row.index), 1)]),
						_: 2
					}, 1032, ["onClick"])) : (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style.deletedExecutionRowIndex)
					}, "#" + toDisplayString(row.index), 3))])]),
					status: withCtx(({ row }) => [createBaseVNode("div", _hoisted_3, [createVNode(unref(N8nIcon_default), {
						icon: unref(statusDictionary)[row.status].icon,
						color: unref(statusDictionary)[row.status].color
					}, null, 8, ["icon", "color"]), row.status === "error" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						placement: "top",
						"show-after": 300
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(`${unref(getErrorBaseKey)(row.errorCode)}`) || row.status), 1)]),
						default: withCtx(() => [createVNode(unref(N8nText_default), {
							color: "danger",
							class: normalizeClass(_ctx.$style.capitalized)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(`${unref(getErrorBaseKey)(row.errorCode)}`) || row.status), 1)]),
							_: 2
						}, 1032, ["class"])]),
						_: 2
					}, 1024)) : (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						class: normalizeClass(_ctx.$style.capitalized)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(row.status), 1)]),
						_: 2
					}, 1032, ["class"]))])]),
					_: 1
				}, 8, [
					"data",
					"columns",
					"expanded-rows"
				]))
			], 2);
		};
	}
});
var TestRunDetailView_vue_vue_type_style_index_1_lang_module_default = {
	container: "_container_8z68v_123",
	header: "_header_8z68v_130",
	timestamp: "_timestamp_8z68v_136",
	backButton: "_backButton_8z68v_141",
	headerSeparator: "_headerSeparator_8z68v_156",
	summary: "_summary_8z68v_161",
	summaryStats: "_summaryStats_8z68v_164",
	stat: "_stat_8z68v_169",
	controls: "_controls_8z68v_174",
	downloadButton: "_downloadButton_8z68v_180",
	runsHeader: "_runsHeader_8z68v_184",
	runsHeaderButtons: "_runsHeaderButtons_8z68v_191",
	loading: "_loading_8z68v_196",
	scrollableSummary: "_scrollableSummary_8z68v_203",
	summaryCard: "_summaryCard_8z68v_218",
	capitalized: "_capitalized_8z68v_235",
	summaryCardTitle: "_summaryCardTitle_8z68v_243",
	summaryCardContentLargeNumber: "_summaryCardContentLargeNumber_8z68v_254",
	alertText: "_alertText_8z68v_259",
	deletedExecutionRowIndex: "_deletedExecutionRowIndex_8z68v_274"
};
var TestRunDetailView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TestRunDetailView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TestRunDetailView_vue_vue_type_style_index_1_lang_module_default }], ["__scopeId", "data-v-fd115f6f"]]);
export { TestRunDetailView_default as default };
