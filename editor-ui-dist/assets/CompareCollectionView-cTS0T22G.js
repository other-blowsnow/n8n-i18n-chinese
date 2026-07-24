import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, j as createVNode, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ot as useI18n } from "./core-CPznNyVT.js";
import { Ji as N8nTooltip_default, K as N8nRadioButtons_default, Pi as N8nBadge_default, no as N8nButton_default, ro as N8nIcon_default, to as N8nText_default, wt as useRouter } from "./src-bSQwfFcX.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useToast } from "./useToast-B3_HjF9W.js";
import { hi as VIEWS } from "./constants-CSBjw1Ht.js";
import { g as usePostHog } from "./users.store-CsyV7tYv.js";
import { a as deriveRunsStatus, t as buildScoreShapedMetricGroups, u as formatMetricLabel } from "./evaluation.utils-CeU84SdO.js";
import { t as useEvaluationsLicense } from "./useEvaluationsLicense-4RMfYKoj.js";
import { i as versionLetter, n as GroupedMetricChart_default, r as VersionAvatar_default, t as useEvalCollectionsStore } from "./evalCollections.store-BRXOTCCc.js";
import { t as useEvalCollectionsFlag } from "./useEvalCollectionsFlag-BG6Tz8ky.js";
//#region src/features/ai/evaluation.ee/components/Compare/CompareHeader.vue?vue&type=script&setup=true&lang.ts
var CompareHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CompareHeader",
	props: {
		collectionName: {},
		versions: {},
		bestVersionIndex: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const status = computed(() => deriveRunsStatus(props.versions));
		const legend = computed(() => props.versions.map((version) => ({
			...version,
			scorePercent: version.avgScore !== null ? Math.round(version.avgScore * 100) : null,
			isBest: version.index === props.bestVersionIndex
		})));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("header", {
				class: normalizeClass(_ctx.$style.header),
				"data-test-id": "compare-header"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.titleRow) }, [createVNode(unref(N8nText_default), {
					tag: "h2",
					size: "xlarge",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.collectionName), 1)]),
					_: 1
				}), createVNode(unref(N8nBadge_default), {
					theme: status.value === "done" ? "success" : "tertiary",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(status.value === "done" ? "evaluation.collections.card.done" : "evaluation.collections.card.running")), 1)]),
					_: 1
				}, 8, ["theme"])], 2),
				createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.collections.card.meta.versions", { adjustToNumber: __props.versions.length })), 1)]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.legend) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(legend.value, (version) => {
					return openBlock(), createElementBlock("span", {
						key: version.testRunId,
						class: normalizeClass(_ctx.$style.chip),
						"data-test-id": "compare-header-version"
					}, [
						createVNode(VersionAvatar_default, {
							index: version.index,
							variant: "square",
							size: "small"
						}, null, 8, ["index"]),
						createVNode(unref(N8nText_default), {
							size: "xsmall",
							color: "text-base"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(version.label), 1)]),
							_: 2
						}, 1024),
						version.scorePercent !== null ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "xsmall",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(version.scorePercent) + "% ", 1)]),
							_: 2
						}, 1024)) : createCommentVNode("", true),
						version.isBest ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "xsmall",
							bold: "",
							color: "success"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.versionsLegend.best")), 1)]),
							_: 1
						})) : createCommentVNode("", true)
					], 2);
				}), 128))], 2)
			], 2);
		};
	}
});
var CompareHeader_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_r74sh_125",
	titleRow: "_titleRow_r74sh_131",
	legend: "_legend_r74sh_137",
	chip: "_chip_r74sh_144"
};
var CompareHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CompareHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CompareHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/ScoreChart.vue?vue&type=script&setup=true&lang.ts
var CRITICAL_THRESHOLD = .6;
var ScoreChart_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ScoreChart",
	props: {
		metricGroups: {},
		versions: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const mode = ref("average");
		const modeOptions = computed(() => [{
			label: i18n.baseText("evaluation.compare.scoreChart.toggle.average"),
			value: "average"
		}, {
			label: i18n.baseText("evaluation.compare.scoreChart.toggle.perCase"),
			value: "perCase",
			disabled: true
		}]);
		const letters = computed(() => props.versions.map((version) => version.letter));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", {
				class: normalizeClass(_ctx.$style.card),
				"data-test-id": "compare-score-chart"
			}, [createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nText_default), {
				tag: "h3",
				size: "medium",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.scoreChart.heading")), 1)]),
				_: 1
			}), createVNode(unref(N8nTooltip_default), {
				placement: "top",
				content: unref(i18n).baseText("evaluation.compare.scoreChart.toggle.perCaseComingSoon")
			}, {
				default: withCtx(() => [createVNode(unref(N8nRadioButtons_default), {
					modelValue: mode.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => mode.value = $event),
					size: "small",
					options: modeOptions.value
				}, null, 8, ["modelValue", "options"])]),
				_: 1
			}, 8, ["content"])], 2), __props.metricGroups.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.panels)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.metricGroups, (group) => {
				return openBlock(), createElementBlock("div", {
					key: group.key,
					class: normalizeClass(_ctx.$style.panel),
					"data-test-id": "compare-score-chart-panel"
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					bold: "",
					color: "text-base",
					class: normalizeClass(_ctx.$style.panelHeading)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(group.label), 1)]),
					_: 2
				}, 1032, ["class"]), createVNode(GroupedMetricChart_default, {
					variant: "detailed",
					groups: [{
						label: group.label,
						values: group.values,
						letters: letters.value
					}],
					max: 1,
					"critical-threshold": CRITICAL_THRESHOLD
				}, null, 8, ["groups"])], 2);
			}), 128))], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.empty)
			}, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.scoreChart.empty")), 1)]),
				_: 1
			})], 2))], 2);
		};
	}
});
var ScoreChart_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_994jw_125",
	header: "_header_994jw_135",
	panels: "_panels_994jw_142",
	panel: "_panel_994jw_142",
	panelHeading: "_panelHeading_994jw_154",
	empty: "_empty_994jw_161"
};
var ScoreChart_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ScoreChart_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ScoreChart_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/AiInsightsCard.vue?vue&type=script&setup=true&lang.ts
var AiInsightsCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AiInsightsCard",
	props: {
		workflowId: {},
		collectionId: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const store = useEvalCollectionsStore();
		const license = useEvaluationsLicense();
		const errored = ref(false);
		const licenseChecked = ref(false);
		const insights = computed(() => store.getInsights(props.collectionId));
		const loading = computed(() => store.loadingInsights[props.collectionId] ?? false);
		const hidden = computed(() => !licenseChecked.value || !license.isLicensed.value);
		const generatedTime = computed(() => {
			const iso = insights.value?.generatedAt;
			if (!iso) return "";
			const date = new Date(iso);
			if (Number.isNaN(date.getTime())) return "";
			return date.toLocaleTimeString(void 0, {
				hour: "2-digit",
				minute: "2-digit"
			});
		});
		const primaryRegression = computed(() => insights.value?.insights.regressions[0] ?? null);
		async function load(forceRegenerate) {
			errored.value = false;
			try {
				await store.generateInsights(props.workflowId, props.collectionId, forceRegenerate);
			} catch {
				errored.value = true;
			}
		}
		onMounted(async () => {
			await license.ensureLicenseLoaded();
			licenseChecked.value = true;
			if (!license.isLicensed.value) return;
			if (!store.getInsights(props.collectionId)) await load(false);
		});
		return (_ctx, _cache) => {
			return !hidden.value ? (openBlock(), createElementBlock("section", {
				key: 0,
				class: normalizeClass(_ctx.$style.card),
				"data-test-id": "compare-ai-insights"
			}, [createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.title) }, [
				createVNode(unref(N8nIcon_default), {
					icon: "wand-sparkles",
					size: "small"
				}),
				createVNode(unref(N8nText_default), {
					size: "medium",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.insights.title")), 1)]),
					_: 1
				}),
				generatedTime.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "xsmall",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.insights.generatedAt", { interpolate: { time: generatedTime.value } })), 1)]),
					_: 1
				})) : createCommentVNode("", true)
			], 2), createVNode(unref(N8nButton_default), {
				variant: "ghost",
				size: "small",
				icon: "refresh-cw",
				loading: loading.value,
				label: unref(i18n).baseText("evaluation.compare.insights.regenerate"),
				"data-test-id": "compare-ai-insights-regenerate",
				onClick: _cache[0] || (_cache[0] = ($event) => load(true))
			}, null, 8, ["loading", "label"])], 2), loading.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.takeaways),
				"data-test-id": "compare-ai-insights-loading"
			}, [(openBlock(), createElementBlock(Fragment, null, renderList(3, (n) => {
				return createBaseVNode("div", {
					key: n,
					class: normalizeClass([_ctx.$style.takeaway, _ctx.$style.skeleton])
				}, null, 2);
			}), 64))], 2)) : errored.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.errorCard),
				"data-test-id": "compare-ai-insights-error"
			}, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-base"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.insights.error")), 1)]),
				_: 1
			}), createVNode(unref(N8nButton_default), {
				variant: "outline",
				size: "small",
				label: unref(i18n).baseText("evaluation.compare.insights.retry"),
				onClick: _cache[1] || (_cache[1] = ($event) => load(true))
			}, null, 8, ["label"])], 2)) : insights.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.takeaways) }, [
				createBaseVNode("article", { class: normalizeClass([_ctx.$style.takeaway, _ctx.$style.winner]) }, [
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.badge, _ctx.$style.badgeSuccess]) }, [createVNode(unref(N8nIcon_default), {
						icon: "circle-check",
						size: "small"
					})], 2),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						bold: "",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.insights.winner")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(insights.value.insights.winner.headline), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(insights.value.insights.winner.body), 1)]),
						_: 1
					})
				], 2),
				createBaseVNode("article", { class: normalizeClass([_ctx.$style.takeaway, primaryRegression.value ? _ctx.$style.regression : _ctx.$style.neutral]) }, [
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.badge, primaryRegression.value ? _ctx.$style.badgeDanger : _ctx.$style.badgeSuccess]) }, [createVNode(unref(N8nIcon_default), {
						icon: primaryRegression.value ? "triangle-alert" : "circle-check",
						size: "small"
					}, null, 8, ["icon"])], 2),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						bold: "",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.insights.regression")), 1)]),
						_: 1
					}),
					primaryRegression.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nText_default), {
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(primaryRegression.value.headline), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(primaryRegression.value.body), 1)]),
						_: 1
					})], 64)) : (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.insights.noRegressions")), 1)]),
						_: 1
					}))
				], 2),
				createBaseVNode("article", { class: normalizeClass([_ctx.$style.takeaway, _ctx.$style.next]) }, [
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.badge, _ctx.$style.badgeInfo]) }, [createVNode(unref(N8nIcon_default), {
						icon: "arrow-right",
						size: "small"
					})], 2),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						bold: "",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.insights.suggestedNext")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(insights.value.insights.suggestedNext.headline), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(insights.value.insights.suggestedNext.body), 1)]),
						_: 1
					})
				], 2)
			], 2), insights.value.status === "fallback" ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				size: "xsmall",
				color: "text-light",
				class: normalizeClass(_ctx.$style.fallbackNote)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.insights.fallbackNote")), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true)], 64)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true);
		};
	}
});
var AiInsightsCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_owcc0_125",
	header: "_header_owcc0_135",
	title: "_title_owcc0_142",
	takeaways: "_takeaways_owcc0_148",
	takeaway: "_takeaway_owcc0_148",
	winner: "_winner_owcc0_163",
	regression: "_regression_owcc0_167",
	next: "_next_owcc0_171",
	neutral: "_neutral_owcc0_175",
	badge: "_badge_owcc0_179",
	badgeSuccess: "_badgeSuccess_owcc0_190",
	badgeDanger: "_badgeDanger_owcc0_194",
	badgeInfo: "_badgeInfo_owcc0_198",
	skeleton: "_skeleton_owcc0_202",
	errorCard: "_errorCard_owcc0_208",
	fallbackNote: "_fallbackNote_owcc0_219"
};
var AiInsightsCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AiInsightsCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AiInsightsCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/composables/useCompareData.ts
function indexOfMax(values) {
	let best = null;
	let bestValue = -Infinity;
	values.forEach((value, index) => {
		if (value !== null && value > bestValue) {
			bestValue = value;
			best = index;
		}
	});
	return best;
}
/**
* Shapes a collection's aggregate detail into the compare view's model:
* one `CompareVersion` per run (in stored order) and one `CompareMetricGroup`
* per score-shaped metric with per-version values aligned by version index.
*
* Only aggregate per-version metrics are read here — per-case data (Cases /
* Outputs tabs) is fetched separately by those components.
*/
function useCompareData(detail) {
	const i18n = useI18n();
	const versions = computed(() => {
		return (detail.value?.runs ?? []).map((run, index) => ({
			index,
			testRunId: run.testRunId,
			workflowVersionId: run.workflowVersionId,
			letter: versionLetter(index),
			label: run.workflowVersionId === null ? i18n.baseText("evaluation.collections.card.currentDraft") : run.workflowVersionId.slice(0, 7),
			status: run.status,
			avgScore: run.avgScore
		}));
	});
	const metricGroups = computed(() => buildScoreShapedMetricGroups(detail.value?.runs ?? []).map(({ key, values }) => ({
		key,
		label: formatMetricLabel(key),
		values,
		bestIndex: indexOfMax(values)
	})));
	const bestVersionIndex = computed(() => indexOfMax(versions.value.map((version) => version.avgScore)));
	return { compareData: computed(() => detail.value === null ? null : {
		versions: versions.value,
		metricGroups: metricGroups.value,
		bestVersionIndex: bestVersionIndex.value
	}) };
}
//#endregion
//#region src/features/ai/evaluation.ee/views/CompareCollectionView.vue?vue&type=script&setup=true&lang.ts
var CompareCollectionView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CompareCollectionView",
	props: {
		workflowId: {},
		collectionId: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const router = useRouter();
		const toast = useToast();
		const store = useEvalCollectionsStore();
		const postHog = usePostHog();
		const isEvalCollectionsEnabled = useEvalCollectionsFlag();
		const detail = computed(() => store.getDetail(props.collectionId));
		const { compareData } = useCompareData(detail);
		const loading = computed(() => store.loadingDetail[props.collectionId] ?? false);
		const notFound = ref(false);
		const isEmpty = computed(() => notFound.value || !loading.value && compareData.value === null);
		function isNotFoundError(error) {
			return typeof error === "object" && error !== null && "httpStatusCode" in error && error.httpStatusCode === 404;
		}
		async function load(workflowId, collectionId) {
			notFound.value = false;
			try {
				await store.fetchCollectionDetail(workflowId, collectionId);
			} catch (error) {
				toast.showError(error, i18n.baseText("evaluation.compare.errors.loadFailed"));
				notFound.value = isNotFoundError(error);
			}
		}
		function backToList() {
			router.push({
				name: VIEWS.EVALUATION_EDIT,
				params: { workflowId: props.workflowId }
			});
		}
		onMounted(async () => {
			await postHog.waitForFeatureFlags();
			if (!isEvalCollectionsEnabled.value) {
				router.replace({
					name: VIEWS.EVALUATION_EDIT,
					params: { workflowId: props.workflowId }
				});
				return;
			}
			await load(props.workflowId, props.collectionId);
		});
		watch([() => props.workflowId, () => props.collectionId], ([, collectionId], [, prevCollectionId]) => {
			store.stopPolling(prevCollectionId);
			load(props.workflowId, collectionId);
		});
		onBeforeUnmount(() => {
			store.stopPolling(props.collectionId);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.view),
				"data-test-id": "compare-collection-view"
			}, [createVNode(unref(N8nButton_default), {
				variant: "ghost",
				size: "small",
				icon: "arrow-left",
				label: unref(i18n).baseText("evaluation.compare.backToList"),
				"data-test-id": "compare-back",
				onClick: backToList
			}, null, 8, ["label"]), loading.value && unref(compareData) === null ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.skeleton),
				"data-test-id": "compare-loading"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.skelHeader) }, null, 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.skelChart) }, null, 2)], 2)) : isEmpty.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.empty),
				"data-test-id": "compare-empty"
			}, [createVNode(unref(N8nText_default), {
				size: "medium",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.errors.notFound")), 1)]),
				_: 1
			})], 2)) : unref(compareData) ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
				createVNode(CompareHeader_default, {
					"collection-name": detail.value?.name ?? "",
					versions: unref(compareData).versions,
					"best-version-index": unref(compareData).bestVersionIndex
				}, null, 8, [
					"collection-name",
					"versions",
					"best-version-index"
				]),
				createVNode(ScoreChart_default, {
					"metric-groups": unref(compareData).metricGroups,
					versions: unref(compareData).versions
				}, null, 8, ["metric-groups", "versions"]),
				(openBlock(), createBlock(AiInsightsCard_default, {
					key: __props.collectionId,
					"workflow-id": __props.workflowId,
					"collection-id": __props.collectionId
				}, null, 8, ["workflow-id", "collection-id"]))
			], 64)) : createCommentVNode("", true)], 2);
		};
	}
});
var CompareCollectionView_vue_vue_type_style_index_0_lang_module_default = {
	view: "_view_1utq5_125",
	skeleton: "_skeleton_1utq5_135",
	skelHeader: "_skelHeader_1utq5_141",
	skelChart: "_skelChart_1utq5_147",
	empty: "_empty_1utq5_153"
};
var CompareCollectionView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CompareCollectionView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CompareCollectionView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { CompareCollectionView_default as default };
