import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, Mt as markRaw, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bn as normalizeStyle, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, m as withKeys, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { Z as useI18n } from "./dist-D6Fs_XhZ.js";
import { G as N8nTabs_default, Ki as N8nBadge_default, Mt as useRouter, Qt as N8nCallout_default, Ut as N8nOption_default, Vt as N8nSelect_default, ao as N8nText_default, do as N8nButton_default, et as N8nRadioButtons_default, fo as N8nIcon_default, oa as N8nTooltip_default } from "./src-BggREpmn.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useToast } from "./useToast-B9nGwxUA.js";
import { x as useEvaluationStore } from "./workflowDocument.store-r47IF4Jj.js";
import { pi as VIEWS, wd as deepCopy } from "./constants-BzyjfRY2.js";
import { g as usePostHog, p as useTelemetry } from "./users.store-3B2-cSx1.js";
import { t as useWorkflowsListStore } from "./workflowsList.store-B-FbQN9W.js";
import { s as useWorkflowHistoryStore } from "./builder.store-DpbeHI1E.js";
import { t as require_orderBy } from "./orderBy-C5I9xWv5.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-Dh9CQmud.js";
import { S as indexOfMax, d as formatMetricLabel, f as formatMetricPercent, i as computeDelta, l as formatDeltaPercent, n as buildScoreShapedMetricGroups, o as deriveRunsStatus, s as extractAnswerText, t as averageNormalizedScore, v as getMetricCategory, w as stringifyValue, x as getUserDefinedMetricNames, y as getMetricDescriptionKey } from "./evaluation.utils-DLWiYaom.js";
import { t as useEvaluationsLicense } from "./useEvaluationsLicense-CqgslN-S.js";
import { a as versionLetter, i as versionColorVar, n as GroupedMetricChart_default, r as VersionAvatar_default, t as useEvalCollectionsStore } from "./evalCollections.store-CPfyIBqp.js";
import { t as require_omit } from "./omit-CIKYWLHQ.js";
import { t as useEvalCollectionsFlag } from "./useEvalCollectionsFlag-BoioHlHG.js";
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
		const statusBadge = computed(() => {
			switch (status.value) {
				case "error": return {
					theme: "warning",
					label: i18n.baseText("evaluation.collections.card.failed")
				};
				case "running": return {
					theme: "tertiary",
					label: i18n.baseText("evaluation.collections.card.running")
				};
				default: return {
					theme: "success",
					label: i18n.baseText("evaluation.collections.card.done")
				};
			}
		});
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
					theme: statusBadge.value.theme,
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(statusBadge.value.label), 1)]),
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
//#region src/features/ai/evaluation.ee/components/Compare/MetricCriteria.vue?vue&type=script&setup=true&lang.ts
var PREVIEW_CHARS = 120;
var MetricCriteria_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MetricCriteria",
	props: {
		metricKey: {},
		prompt: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const expanded = ref(false);
		const description = computed(() => {
			const key = getMetricDescriptionKey(props.metricKey);
			return key ? i18n.baseText(key) : "";
		});
		const isLong = computed(() => (props.prompt?.length ?? 0) > PREVIEW_CHARS);
		const promptText = computed(() => {
			if (!props.prompt) return "";
			if (expanded.value || !isLong.value) return props.prompt;
			return `${props.prompt.slice(0, PREVIEW_CHARS).trimEnd()}…`;
		});
		return (_ctx, _cache) => {
			return description.value || __props.prompt ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.wrap),
				"data-test-id": "metric-criteria"
			}, [description.value ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				size: "xsmall",
				color: "text-light",
				class: normalizeClass(_ctx.$style.text)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(description.value), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true), __props.prompt ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 1,
				size: "xsmall",
				color: "text-light",
				class: normalizeClass([_ctx.$style.text, expanded.value ? _ctx.$style.expanded : null])
			}, {
				default: withCtx(() => [
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("evaluation.metric.criteria.label")), 3),
					createTextVNode(" " + toDisplayString(promptText.value) + " ", 1),
					isLong.value ? (openBlock(), createElementBlock("button", {
						key: 0,
						type: "button",
						class: normalizeClass(_ctx.$style.toggle),
						"data-test-id": "metric-criteria-toggle",
						onClick: _cache[0] || (_cache[0] = withModifiers(($event) => expanded.value = !expanded.value, ["stop"]))
					}, toDisplayString(expanded.value ? unref(i18n).baseText("evaluation.metric.criteria.showLess") : unref(i18n).baseText("evaluation.metric.criteria.showMore")), 3)) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true);
		};
	}
});
var MetricCriteria_vue_vue_type_style_index_0_lang_module_default = {
	wrap: "_wrap_u5igr_125",
	text: "_text_u5igr_132",
	expanded: "_expanded_u5igr_136",
	label: "_label_u5igr_141",
	toggle: "_toggle_u5igr_145"
};
var MetricCriteria_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MetricCriteria_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MetricCriteria_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/ScoreChart.vue?vue&type=script&setup=true&lang.ts
var CRITICAL_THRESHOLD$1 = .6;
var ScoreChart_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ScoreChart",
	props: {
		metricGroups: {},
		versions: {},
		metricPrompts: {}
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
				}, [
					createVNode(unref(N8nText_default), {
						size: "small",
						bold: "",
						color: "text-base",
						class: normalizeClass(_ctx.$style.panelHeading)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(group.label), 1)]),
						_: 2
					}, 1032, ["class"]),
					createVNode(MetricCriteria_default, {
						"metric-key": group.key,
						prompt: __props.metricPrompts?.[group.key]
					}, null, 8, ["metric-key", "prompt"]),
					createVNode(GroupedMetricChart_default, {
						variant: "detailed",
						groups: [{
							label: group.label,
							values: group.values,
							letters: letters.value
						}],
						max: 1,
						"critical-threshold": CRITICAL_THRESHOLD$1
					}, null, 8, ["groups"])
				], 2);
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
//#region src/features/ai/evaluation.ee/components/Compare/CasesTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["onClick", "onKeydown"];
var _hoisted_2 = ["title"];
var CRITICAL_THRESHOLD = .6;
var CasesTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CasesTable",
	props: {
		versions: {},
		caseRows: {}
	},
	emits: ["drilldown"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const sort = ref({
			key: "spread",
			dir: "desc"
		});
		function toggleSort(key) {
			if (sort.value.key === key) sort.value = {
				key,
				dir: sort.value.dir === "asc" ? "desc" : "asc"
			};
			else sort.value = {
				key,
				dir: key === "index" ? "asc" : "desc"
			};
		}
		function bestScore(row) {
			if (row.bestVersionIndex === null) return null;
			return row.cells[row.bestVersionIndex].score;
		}
		function scoreSpread(row) {
			const scores = row.cells.map((cell) => cell.score).filter((s) => s !== null);
			if (scores.length < 2) return 0;
			return Math.max(...scores) - Math.min(...scores);
		}
		const sortedRows = computed(() => {
			const rows = [...props.caseRows];
			const dir = sort.value.dir === "asc" ? 1 : -1;
			const value = (row) => {
				if (sort.value.key === "index") return row.index;
				if (sort.value.key === "best") return bestScore(row) ?? -1;
				return scoreSpread(row);
			};
			return rows.sort((a, b) => (value(a) - value(b)) * dir);
		});
		function isCritical(score) {
			return score !== null && score < CRITICAL_THRESHOLD;
		}
		function scoreLabel(cell) {
			if (cell.score !== null) return formatMetricPercent(cell.score);
			return cell.testCaseId !== null ? "–" : "⊘";
		}
		function deltas(row) {
			const best = bestScore(row);
			if (best === null || row.bestVersionIndex === null) return [];
			return row.cells.filter((cell) => cell.versionIndex !== row.bestVersionIndex && cell.score !== null).map((cell) => ({
				versionIndex: cell.versionIndex,
				letter: props.versions[cell.versionIndex]?.letter ?? "",
				delta: formatDeltaPercent(computeDelta(cell.score ?? void 0, best))
			}));
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("table", {
				class: normalizeClass(_ctx.$style.table),
				"data-test-id": "compare-cases-table"
			}, [createBaseVNode("thead", null, [createBaseVNode("tr", null, [
				createBaseVNode("th", {
					class: normalizeClass(_ctx.$style.num),
					role: "button",
					onClick: _cache[0] || (_cache[0] = ($event) => toggleSort("index"))
				}, toDisplayString(unref(i18n).baseText("evaluation.compare.cases.col.index")), 3),
				createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("evaluation.compare.cases.col.input")), 1),
				(openBlock(true), createElementBlock(Fragment, null, renderList(__props.versions, (version) => {
					return openBlock(), createElementBlock("th", {
						key: version.testRunId,
						class: normalizeClass(_ctx.$style.score)
					}, toDisplayString(version.letter), 3);
				}), 128)),
				createBaseVNode("th", {
					role: "button",
					onClick: _cache[1] || (_cache[1] = ($event) => toggleSort("best"))
				}, toDisplayString(unref(i18n).baseText("evaluation.compare.cases.col.best")), 1),
				createBaseVNode("th", {
					role: "button",
					onClick: _cache[2] || (_cache[2] = ($event) => toggleSort("spread"))
				}, toDisplayString(unref(i18n).baseText("evaluation.compare.cases.col.deltaVsBest")), 1),
				createBaseVNode("th", { class: normalizeClass(_ctx.$style.chevronCol) }, null, 2)
			])]), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(sortedRows.value, (row) => {
				return openBlock(), createElementBlock("tr", {
					key: row.index,
					class: normalizeClass(_ctx.$style.row),
					tabindex: "0",
					"data-test-id": "compare-cases-row",
					onClick: ($event) => emit("drilldown", row.index),
					onKeydown: withKeys(($event) => emit("drilldown", row.index), ["enter"])
				}, [
					createBaseVNode("td", { class: normalizeClass(_ctx.$style.num) }, toDisplayString(row.displayIndex), 3),
					createBaseVNode("td", {
						class: normalizeClass(_ctx.$style.input),
						title: row.inputPreview
					}, toDisplayString(row.inputPreview), 11, _hoisted_2),
					(openBlock(true), createElementBlock(Fragment, null, renderList(row.cells, (cell) => {
						return openBlock(), createElementBlock("td", {
							key: cell.versionIndex,
							class: normalizeClass(_ctx.$style.score)
						}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.chip) }, [createBaseVNode("span", {
							class: normalizeClass(_ctx.$style.dot),
							style: normalizeStyle({ background: unref(versionColorVar)(cell.versionIndex) })
						}, null, 6), createVNode(unref(N8nText_default), {
							size: "xsmall",
							color: isCritical(cell.score) ? "danger" : "text-base",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(scoreLabel(cell)), 1)]),
							_: 2
						}, 1032, ["color"])], 2)], 2);
					}), 128)),
					createBaseVNode("td", null, [row.bestVersionIndex !== null ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.bestPill)
					}, [createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "success",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.cases.bestPill", { interpolate: { letter: __props.versions[row.bestVersionIndex]?.letter ?? "" } })), 1)]),
						_: 2
					}, 1024)], 2)) : createCommentVNode("", true)]),
					createBaseVNode("td", null, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.deltas) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(deltas(row), (d) => {
						return openBlock(), createBlock(unref(N8nText_default), {
							key: d.versionIndex,
							size: "xsmall",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(d.letter) + " " + toDisplayString(d.delta), 1)]),
							_: 2
						}, 1024);
					}), 128))], 2)]),
					createBaseVNode("td", { class: normalizeClass(_ctx.$style.chevronCol) }, [createVNode(unref(N8nIcon_default), {
						icon: "chevron-right",
						size: "small",
						color: "text-light"
					})], 2)
				], 42, _hoisted_1$3);
			}), 128))])], 2);
		};
	}
});
var CasesTable_vue_vue_type_style_index_0_lang_module_default = {
	table: "_table_114c1_125",
	row: "_row_114c1_148",
	num: "_num_114c1_155",
	input: "_input_114c1_160",
	score: "_score_114c1_167",
	chip: "_chip_114c1_172",
	dot: "_dot_114c1_178",
	bestPill: "_bestPill_114c1_185",
	deltas: "_deltas_114c1_194",
	chevronCol: "_chevronCol_114c1_200"
};
var CasesTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CasesTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CasesTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/OutputsTab.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["onClick"];
var OutputsTab_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OutputsTab",
	props: {
		versions: {},
		caseRows: {},
		selectedIndex: {}
	},
	emits: ["update:selectedIndex"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const selectedRow = computed(() => props.caseRows.find((row) => row.index === props.selectedIndex) ?? props.caseRows[0]);
		function metricEntries(metrics) {
			if (!metrics) return [];
			return getUserDefinedMetricNames(metrics).map((key) => ({
				key,
				label: formatMetricLabel(key),
				value: formatMetricPercent(metrics[key], { category: getMetricCategory(key) })
			}));
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.outputs),
				"data-test-id": "compare-outputs-tab"
			}, [createBaseVNode("aside", { class: normalizeClass(_ctx.$style.sidebar) }, [createVNode(unref(N8nText_default), {
				size: "xsmall",
				bold: "",
				color: "text-light",
				class: normalizeClass(_ctx.$style.sidebarTitle)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.outputs.casesSidebarTitle")), 1)]),
				_: 1
			}, 8, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(__props.caseRows, (row) => {
				return openBlock(), createElementBlock("button", {
					key: row.index,
					type: "button",
					class: normalizeClass([_ctx.$style.caseItem, { [_ctx.$style.caseItemActive]: row.index === selectedRow.value?.index }]),
					"data-test-id": "compare-outputs-case",
					onClick: ($event) => emit("update:selectedIndex", row.index)
				}, [createVNode(unref(N8nText_default), {
					size: "xsmall",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode("#" + toDisplayString(row.displayIndex), 1)]),
					_: 2
				}, 1024), createVNode(unref(N8nText_default), {
					size: "xsmall",
					color: "text-light",
					class: normalizeClass(_ctx.$style.caseItemInput)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(row.inputPreview), 1)]),
					_: 2
				}, 1032, ["class"])], 10, _hoisted_1$2);
			}), 128))], 2), selectedRow.value ? (openBlock(), createElementBlock("section", {
				key: 0,
				class: normalizeClass(_ctx.$style.main)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputRow) }, [createVNode(unref(N8nText_default), {
				size: "xsmall",
				bold: "",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.outputs.input")), 1)]),
				_: 1
			}), createVNode(unref(N8nText_default), { size: "small" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(selectedRow.value.inputPreview), 1)]),
				_: 1
			})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.columns) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(selectedRow.value.cells, (cell) => {
				return openBlock(), createElementBlock("article", {
					key: cell.versionIndex,
					class: normalizeClass(_ctx.$style.column),
					"data-test-id": "compare-outputs-column"
				}, [
					createBaseVNode("header", { class: normalizeClass(_ctx.$style.columnHeader) }, [createVNode(VersionAvatar_default, {
						index: cell.versionIndex,
						variant: "square",
						size: "small"
					}, null, 8, ["index"]), createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.versions[cell.versionIndex]?.label), 1)]),
						_: 2
					}, 1024)], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.answer) }, [cell.outputs !== void 0 ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(extractAnswerText)(cell.outputs)), 1)]),
						_: 2
					}, 1024)) : (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.outputs.noOutput")), 1)]),
						_: 1
					}))], 2),
					createBaseVNode("footer", { class: normalizeClass(_ctx.$style.metrics) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(metricEntries(cell.metrics), (metric) => {
						return openBlock(), createElementBlock("span", {
							key: metric.key,
							class: normalizeClass(_ctx.$style.metric)
						}, [createVNode(unref(N8nText_default), {
							size: "xsmall",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(metric.label), 1)]),
							_: 2
						}, 1024), createVNode(unref(N8nText_default), {
							size: "xsmall",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(metric.value), 1)]),
							_: 2
						}, 1024)], 2);
					}), 128))], 2)
				], 2);
			}), 128))], 2)], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
var OutputsTab_vue_vue_type_style_index_0_lang_module_default = {
	outputs: "_outputs_b5tg0_125",
	sidebar: "_sidebar_b5tg0_131",
	sidebarTitle: "_sidebarTitle_b5tg0_141",
	caseItem: "_caseItem_b5tg0_145",
	caseItemActive: "_caseItemActive_b5tg0_161",
	caseItemInput: "_caseItemInput_b5tg0_165",
	main: "_main_b5tg0_172",
	inputRow: "_inputRow_b5tg0_180",
	columns: "_columns_b5tg0_189",
	column: "_column_b5tg0_189",
	columnHeader: "_columnHeader_b5tg0_206",
	answer: "_answer_b5tg0_212",
	metrics: "_metrics_b5tg0_219",
	metric: "_metric_b5tg0_219"
};
var OutputsTab_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OutputsTab_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OutputsTab_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/MetricsTab.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { "data-test-id": "compare-metrics-tab" };
var MetricsTab_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MetricsTab",
	props: {
		versions: {},
		metricGroups: {},
		metricPrompts: {}
	},
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [__props.metricGroups.length > 0 ? (openBlock(), createElementBlock("table", {
				key: 0,
				class: normalizeClass(_ctx.$style.table)
			}, [createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("evaluation.compare.metrics.col.metric")), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(__props.versions, (version) => {
				return openBlock(), createElementBlock("th", {
					key: version.testRunId,
					class: normalizeClass(_ctx.$style.value)
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.head) }, [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.dot),
					style: normalizeStyle({ background: unref(versionColorVar)(version.index) })
				}, null, 6), createTextVNode(" " + toDisplayString(version.letter), 1)], 2)], 2);
			}), 128))])]), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.metricGroups, (group) => {
				return openBlock(), createElementBlock("tr", {
					key: group.key,
					"data-test-id": "compare-metrics-row"
				}, [createBaseVNode("td", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.metric) }, [createVNode(unref(N8nText_default), { size: "xsmall" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(group.label), 1)]),
					_: 2
				}, 1024), createVNode(MetricCriteria_default, {
					"metric-key": group.key,
					prompt: __props.metricPrompts?.[group.key]
				}, null, 8, ["metric-key", "prompt"])], 2)]), (openBlock(true), createElementBlock(Fragment, null, renderList(group.values, (value, versionIndex) => {
					return openBlock(), createElementBlock("td", {
						key: versionIndex,
						class: normalizeClass(_ctx.$style.value)
					}, [createVNode(unref(N8nText_default), {
						size: "xsmall",
						bold: versionIndex === group.bestIndex
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(formatMetricPercent)(value ?? void 0)), 1)]),
						_: 2
					}, 1032, ["bold"])], 2);
				}), 128))]);
			}), 128))])], 2)) : (openBlock(), createBlock(unref(N8nText_default), {
				key: 1,
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.metrics.empty")), 1)]),
				_: 1
			}))]);
		};
	}
});
var MetricsTab_vue_vue_type_style_index_0_lang_module_default = {
	table: "_table_52mgf_125",
	value: "_value_52mgf_141",
	metric: "_metric_52mgf_146",
	head: "_head_52mgf_153",
	dot: "_dot_52mgf_159"
};
var MetricsTab_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MetricsTab_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MetricsTab_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/WorkflowDiffTab.vue?vue&type=script&setup=true&lang.ts
var import_omit = /* @__PURE__ */ __toESM(require_omit(), 1);
var _hoisted_1 = { "data-test-id": "compare-workflow-diff-tab" };
var WorkflowDiffTab_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowDiffTab",
	props: {
		versions: {},
		workflowId: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const toast = useToast();
		const workflowsListStore = useWorkflowsListStore();
		const workflowHistoryStore = useWorkflowHistoryStore();
		const sourceIndex = ref(props.versions[0]?.index ?? 0);
		const targetIndex = ref(props.versions[1]?.index ?? props.versions[0]?.index ?? 0);
		const sourceWorkflow = ref();
		const targetWorkflow = ref();
		const isLoading = ref(false);
		const canDiff = computed(() => props.versions.length >= 2);
		const versionOptions = computed(() => props.versions.map((version) => ({
			value: version.index,
			label: `${version.letter} · ${version.label}`
		})));
		const versionByIndex = (index) => props.versions.find((version) => version.index === index);
		const labelFor = (index) => {
			const version = versionByIndex(index);
			return version ? `${version.letter} · ${version.label}` : "";
		};
		let loadRequestId = 0;
		const detach = (workflow) => markRaw(deepCopy(workflow));
		const resolveWorkflow = async (base, version) => {
			const bare = (0, import_omit.default)(base, "pinData");
			if (version.workflowVersionId === null) return bare;
			const snapshot = await workflowHistoryStore.getWorkflowVersion(props.workflowId, version.workflowVersionId);
			return {
				...bare,
				versionId: snapshot.versionId,
				nodes: snapshot.nodes,
				connections: snapshot.connections,
				nodeGroups: snapshot.nodeGroups ?? []
			};
		};
		const load = async () => {
			if (!canDiff.value) return;
			const source = versionByIndex(sourceIndex.value);
			const target = versionByIndex(targetIndex.value);
			if (!source || !target) return;
			const requestId = ++loadRequestId;
			isLoading.value = true;
			try {
				const base = await workflowsListStore.fetchWorkflow(props.workflowId);
				const [resolvedSource, resolvedTarget] = await Promise.all([resolveWorkflow(base, source), resolveWorkflow(base, target)]);
				if (requestId !== loadRequestId) return;
				sourceWorkflow.value = detach(resolvedSource);
				targetWorkflow.value = detach(resolvedTarget);
			} catch (error) {
				toast.showError(error, i18n.baseText("evaluation.compare.workflowDiff.loadError"));
			} finally {
				if (requestId === loadRequestId) isLoading.value = false;
			}
		};
		const onSourceChange = (next) => {
			if (next === targetIndex.value) targetIndex.value = sourceIndex.value;
			sourceIndex.value = next;
		};
		const onTargetChange = (next) => {
			if (next === sourceIndex.value) sourceIndex.value = targetIndex.value;
			targetIndex.value = next;
		};
		watch([sourceIndex, targetIndex], load, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [!canDiff.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.placeholder)
			}, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.workflowDiff.needTwo")), 1)]),
				_: 1
			})], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.controls) }, [createBaseVNode("label", { class: normalizeClass(_ctx.$style.control) }, [createVNode(unref(N8nText_default), {
				size: "xsmall",
				color: "text-light",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.workflowDiff.base")), 1)]),
				_: 1
			}), createVNode(unref(N8nSelect_default), {
				"model-value": sourceIndex.value,
				size: "small",
				"data-test-id": "workflow-diff-source-select",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => onSourceChange(Number($event)))
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(versionOptions.value, (opt) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: opt.value,
						value: opt.value,
						label: opt.label
					}, null, 8, ["value", "label"]);
				}), 128))]),
				_: 1
			}, 8, ["model-value"])], 2), createBaseVNode("label", { class: normalizeClass(_ctx.$style.control) }, [createVNode(unref(N8nText_default), {
				size: "xsmall",
				color: "text-light",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.workflowDiff.compare")), 1)]),
				_: 1
			}), createVNode(unref(N8nSelect_default), {
				"model-value": targetIndex.value,
				size: "small",
				"data-test-id": "workflow-diff-target-select",
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => onTargetChange(Number($event)))
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(versionOptions.value, (opt) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: opt.value,
						value: opt.value,
						label: opt.label
					}, null, 8, ["value", "label"]);
				}), 128))]),
				_: 1
			}, 8, ["model-value"])], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.diff) }, [isLoading.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.state)
			}, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.loading")), 1)]),
				_: 1
			})], 2)) : sourceWorkflow.value && targetWorkflow.value ? (openBlock(), createBlock(WorkflowDiffView_default, {
				key: 1,
				"source-workflow": sourceWorkflow.value,
				"target-workflow": targetWorkflow.value,
				"source-label": labelFor(sourceIndex.value),
				"target-label": labelFor(targetIndex.value)
			}, null, 8, [
				"source-workflow",
				"target-workflow",
				"source-label",
				"target-label"
			])) : createCommentVNode("", true)], 2)], 64))]);
		};
	}
});
var WorkflowDiffTab_vue_vue_type_style_index_0_lang_module_default = {
	placeholder: "_placeholder_vtyff_125",
	controls: "_controls_vtyff_134",
	control: "_control_vtyff_134",
	diff: "_diff_vtyff_147",
	state: "_state_vtyff_155"
};
var WorkflowDiffTab_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowDiffTab_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowDiffTab_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/CompareTabs.vue?vue&type=script&setup=true&lang.ts
var CompareTabs_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CompareTabs",
	props: {
		versions: {},
		metricGroups: {},
		caseRows: {},
		casesLoading: { type: Boolean },
		casesError: { type: Boolean },
		workflowId: {},
		metricPrompts: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const activeTab = ref("cases");
		const selectedCaseIndex = ref(0);
		const tabs = computed(() => [
			{
				value: "cases",
				label: i18n.baseText("evaluation.compare.tabs.cases")
			},
			{
				value: "outputs",
				label: i18n.baseText("evaluation.compare.tabs.outputs")
			},
			{
				value: "metrics",
				label: i18n.baseText("evaluation.compare.tabs.metrics")
			},
			{
				value: "workflowDiff",
				label: i18n.baseText("evaluation.compare.tabs.workflowDiff")
			}
		]);
		const hasCases = computed(() => props.caseRows.length > 0);
		const isRunning = computed(() => deriveRunsStatus(props.versions) === "running");
		function onDrilldown(caseIndex) {
			selectedCaseIndex.value = caseIndex;
			activeTab.value = "outputs";
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", {
				class: normalizeClass(_ctx.$style.tabs),
				"data-test-id": "compare-tabs"
			}, [
				createVNode(unref(N8nTabs_default), {
					modelValue: activeTab.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeTab.value = $event),
					options: tabs.value
				}, null, 8, ["modelValue", "options"]),
				__props.casesError ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "xsmall",
					color: "danger",
					"data-test-id": "compare-cases-error"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.cases.loadError")), 1)]),
					_: 1
				})) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.panel) }, [activeTab.value === "cases" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [__props.casesLoading ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.cases.loading")), 1)]),
					_: 1
				})) : !hasCases.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.cases.empty")), 1)]),
					_: 1
				})) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [isRunning.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "xsmall",
					color: "text-light",
					class: normalizeClass(_ctx.$style.runningNote),
					"data-test-id": "compare-cases-running"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.cases.running")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true), createVNode(CasesTable_default, {
					versions: __props.versions,
					"case-rows": __props.caseRows,
					onDrilldown
				}, null, 8, ["versions", "case-rows"])], 64))], 64)) : activeTab.value === "outputs" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [__props.casesLoading ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.cases.loading")), 1)]),
					_: 1
				})) : (openBlock(), createBlock(OutputsTab_default, {
					key: 1,
					versions: __props.versions,
					"case-rows": __props.caseRows,
					"selected-index": selectedCaseIndex.value,
					"onUpdate:selectedIndex": _cache[1] || (_cache[1] = ($event) => selectedCaseIndex.value = $event)
				}, null, 8, [
					"versions",
					"case-rows",
					"selected-index"
				]))], 64)) : activeTab.value === "metrics" ? (openBlock(), createBlock(MetricsTab_default, {
					key: 2,
					versions: __props.versions,
					"metric-groups": __props.metricGroups,
					"metric-prompts": __props.metricPrompts
				}, null, 8, [
					"versions",
					"metric-groups",
					"metric-prompts"
				])) : (openBlock(), createBlock(WorkflowDiffTab_default, {
					key: 3,
					versions: __props.versions,
					"workflow-id": __props.workflowId
				}, null, 8, ["versions", "workflow-id"]))], 2)
			], 2);
		};
	}
});
var CompareTabs_vue_vue_type_style_index_0_lang_module_default = {
	tabs: "_tabs_52rlp_125",
	panel: "_panel_52rlp_131",
	runningNote: "_runningNote_52rlp_135"
};
var CompareTabs_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CompareTabs_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CompareTabs_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/DatasetMismatchBanner.vue
var DatasetMismatchBanner_default = /* @__PURE__ */ defineComponent({
	__name: "DatasetMismatchBanner",
	props: { mismatch: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const countsLabel = computed(() => props.mismatch.counts.join(", "));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCallout_default), {
				theme: "warning",
				icon: "triangle-alert",
				"data-test-id": "compare-dataset-mismatch"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.datasetMismatch", { interpolate: { counts: countsLabel.value } })), 1)]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/composables/useCompareData.ts
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
//#region src/features/ai/evaluation.ee/composables/useCompareCases.ts
var import_orderBy = /* @__PURE__ */ __toESM(require_orderBy(), 1);
function inputPreview(inputs) {
	if (!inputs) return "";
	return Object.values(inputs).map((value) => stringifyValue(value)).filter((text) => text.length > 0).join(" · ");
}
/**
* Loads per-case executions for every run in a collection and aligns them into
* one row per test case across versions.
*
* There is no collection-level per-case endpoint and no case id shared across
* runs, so this fans out `fetchTestCaseExecutions` per run and aligns cells by
* `runIndex` (the seeded per-case sequence) — a version missing a case leaves a
* null cell rather than shifting later cases into the wrong row. Divergent case
* counts surface as a `mismatch` rather than silently misaligning rows.
*/
function useCompareCases(detail, workflowId) {
	const evaluationStore = useEvaluationStore();
	const loading = ref(false);
	const casesLoaded = ref(false);
	const casesError = ref(false);
	let loadToken = 0;
	async function load() {
		const runs = detail.value?.runs ?? [];
		const token = ++loadToken;
		if (runs.length === 0) {
			loading.value = false;
			casesError.value = false;
			casesLoaded.value = true;
			return;
		}
		loading.value = true;
		casesLoaded.value = false;
		casesError.value = false;
		try {
			const results = await Promise.allSettled(runs.map(async (run) => await evaluationStore.fetchTestCaseExecutions({
				workflowId: workflowId.value,
				runId: run.testRunId
			})));
			if (token !== loadToken) return;
			casesError.value = results.some((result) => result.status === "rejected");
			casesLoaded.value = true;
		} finally {
			if (token === loadToken) loading.value = false;
		}
	}
	const casesByVersion = computed(() => {
		const runs = detail.value?.runs ?? [];
		const byRunId = new Map(runs.map((run) => [run.testRunId, []]));
		for (const record of Object.values(evaluationStore.testCaseExecutionsById)) {
			const bucket = record.testRunId ? byRunId.get(record.testRunId) : void 0;
			if (bucket) bucket.push(record);
		}
		return runs.map((run) => (0, import_orderBy.default)(byRunId.get(run.testRunId) ?? [], [(record) => record.runIndex ?? Number.MAX_SAFE_INTEGER, (record) => record.runAt ?? ""], ["asc", "asc"]));
	});
	const mismatch = computed(() => {
		const counts = casesByVersion.value.map((cases) => cases.length);
		const maxCount = counts.length ? Math.max(...counts) : 0;
		return {
			counts,
			maxCount,
			hasMismatch: counts.some((count) => count !== maxCount)
		};
	});
	const caseRows = computed(() => {
		const byIndex = casesByVersion.value.map((cases) => {
			const map = /* @__PURE__ */ new Map();
			cases.forEach((record, position) => map.set(record.runIndex ?? position, record));
			return map;
		});
		return [...new Set(byIndex.flatMap((map) => [...map.keys()]))].sort((a, b) => a - b).map((runIndex, rowIndex) => {
			const cells = byIndex.map((map, versionIndex) => {
				const record = map.get(runIndex);
				return {
					versionIndex,
					testCaseId: record?.id ?? null,
					inputs: record?.inputs,
					outputs: record?.outputs,
					metrics: record?.metrics,
					score: averageNormalizedScore(record?.metrics)
				};
			});
			const firstWithInputs = cells.find((cell) => cell.inputs !== void 0);
			return {
				index: rowIndex,
				displayIndex: rowIndex + 1,
				inputPreview: inputPreview(firstWithInputs?.inputs),
				cells,
				bestVersionIndex: indexOfMax(cells.map((cell) => cell.score))
			};
		});
	});
	watch(() => detail.value ? (detail.value.runs ?? []).map((run) => run.testRunId).join(",") : null, async (key) => {
		if (key !== null) await load();
	}, { immediate: true });
	return {
		caseRows,
		mismatch,
		loading,
		casesLoaded,
		casesError,
		load
	};
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
		const telemetry = useTelemetry();
		const store = useEvalCollectionsStore();
		const evaluationStore = useEvaluationStore();
		const postHog = usePostHog();
		const isEvalCollectionsEnabled = useEvalCollectionsFlag();
		const detail = computed(() => store.getDetail(props.collectionId));
		const metricPrompts = computed(() => {
			const configId = detail.value?.evaluationConfigId;
			if (!configId) return {};
			const config = (evaluationStore.evaluationConfigsByWorkflowId[props.workflowId] ?? []).find((candidate) => candidate.id === configId);
			if (!config) return {};
			const prompts = {};
			for (const metric of config.metrics) if (metric.type === "llm_judge" && metric.config.prompt) prompts[metric.name] = metric.config.prompt;
			return prompts;
		});
		const { compareData } = useCompareData(detail);
		const { caseRows, mismatch, loading: casesLoading, casesLoaded, casesError } = useCompareCases(detail, computed(() => props.workflowId));
		const tracked = ref(false);
		watch(() => compareData.value !== null && casesLoaded.value, (ready) => {
			if (!ready || tracked.value) return;
			tracked.value = true;
			telemetry.track("Eval collection compared opened", {
				workflow_id: props.workflowId,
				collection_id: props.collectionId,
				version_count: compareData.value?.versions.length ?? 0,
				case_count: mismatch.value.maxCount
			});
		}, { immediate: true });
		const loading = computed(() => store.loadingDetail[props.collectionId] ?? false);
		const notFound = ref(false);
		const isEmpty = computed(() => notFound.value || !loading.value && compareData.value === null);
		function isNotFoundError(error) {
			return typeof error === "object" && error !== null && "httpStatusCode" in error && error.httpStatusCode === 404;
		}
		let unmounted = false;
		async function load(workflowId, collectionId) {
			notFound.value = false;
			try {
				await store.fetchCollectionDetail(workflowId, collectionId);
				await evaluationStore.fetchEvaluationConfigs(workflowId).catch(() => null);
				if (unmounted || collectionId !== props.collectionId) store.stopPolling(collectionId);
			} catch (error) {
				if (isNotFoundError(error)) notFound.value = true;
				else toast.showError(error, i18n.baseText("evaluation.compare.errors.loadFailed"));
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
			tracked.value = false;
			load(props.workflowId, collectionId);
		});
		onBeforeUnmount(() => {
			unmounted = true;
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
				unref(casesLoaded) && !unref(casesError) && unref(mismatch).hasMismatch ? (openBlock(), createBlock(DatasetMismatchBanner_default, {
					key: 0,
					mismatch: unref(mismatch)
				}, null, 8, ["mismatch"])) : createCommentVNode("", true),
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
					versions: unref(compareData).versions,
					"metric-prompts": metricPrompts.value
				}, null, 8, [
					"metric-groups",
					"versions",
					"metric-prompts"
				]),
				(openBlock(), createBlock(AiInsightsCard_default, {
					key: __props.collectionId,
					"workflow-id": __props.workflowId,
					"collection-id": __props.collectionId
				}, null, 8, ["workflow-id", "collection-id"])),
				createVNode(CompareTabs_default, {
					versions: unref(compareData).versions,
					"metric-groups": unref(compareData).metricGroups,
					"case-rows": unref(caseRows),
					"cases-loading": unref(casesLoading),
					"cases-error": unref(casesError),
					"workflow-id": __props.workflowId,
					"metric-prompts": metricPrompts.value
				}, null, 8, [
					"versions",
					"metric-groups",
					"case-rows",
					"cases-loading",
					"cases-error",
					"workflow-id",
					"metric-prompts"
				])
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
