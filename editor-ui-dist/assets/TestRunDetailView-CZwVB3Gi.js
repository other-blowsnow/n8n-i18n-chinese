import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, n as Transition, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { s as useI18n } from "./src-2bgghuOQ.js";
import { At as N8nCard_default, Ht as N8nLoading_default, Ja as N8nButton_default, P as N8nSpinner_default, Ya as N8nIcon_default, gt as useRouter, ln as ElScrollbar, qa as N8nText_default, zi as N8nTooltip_default } from "./src-BwN8TeVO.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useToast } from "./useToast-DGGqiWI5.js";
import { ui as VIEWS } from "./constants-BiYlbN9Z.js";
import { P as useEvaluationStore } from "./workflows.store-B-Pu_sWP.js";
import { p as useTelemetry } from "./users.store-CUZkGc51.js";
import { t as useInjectWorkflowId } from "./useInjectWorkflowId-iiLFFV7P.js";
import { t as require_orderBy } from "./orderBy-_aLOFvs5.js";
import { a as formatDeltaPercent, c as formatMetricLabel, d as formatMetricRawScoreSum, f as formatTokens, g as normalizeMetricValue, h as getUserDefinedMetricNames, l as formatMetricPercent, n as computeDelta, o as formatDuration, p as getDeltaTone, r as computeDurationMs, u as formatMetricRawScore } from "./evaluation.utils-CTNh8BUh.js";
import { t as useWorkflowEvaluationState } from "./useWorkflowEvaluationState-BxheHqom.js";
import { c as getErrorBaseKey } from "./evaluation.constants-Y1Jy7X0U.js";
//#region src/features/ai/evaluation.ee/components/RunDetail/TrendDeltaBadge.vue?vue&type=script&setup=true&lang.ts
var import_orderBy = /* @__PURE__ */ __toESM(require_orderBy(), 1);
var TrendDeltaBadge_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TrendDeltaBadge",
	props: {
		delta: {},
		category: {}
	},
	setup(__props) {
		const props = __props;
		const tone = computed(() => getDeltaTone(props.delta));
		const label = computed(() => formatDeltaPercent(props.delta, { category: props.category }));
		const icon = computed(() => tone.value === "negative" ? "trending-down" : "trending-up");
		return (_ctx, _cache) => {
			return tone.value !== "default" ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass([_ctx.$style.badge, _ctx.$style[tone.value]]),
				"data-test-id": "trend-delta-badge"
			}, [createVNode(unref(N8nIcon_default), {
				icon: icon.value,
				size: "large"
			}, null, 8, ["icon"]), createVNode(unref(N8nText_default), {
				size: "small",
				class: normalizeClass(_ctx.$style.label)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(label.value), 1)]),
				_: 1
			}, 8, ["class"])], 2)) : createCommentVNode("", true);
		};
	}
});
var TrendDeltaBadge_vue_vue_type_style_index_0_lang_module_default = {
	badge: "_badge_13wg8_125",
	label: "_label_13wg8_135",
	positive: "_positive_13wg8_139",
	negative: "_negative_13wg8_144"
};
var TrendDeltaBadge_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TrendDeltaBadge_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TrendDeltaBadge_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/RunDetail/MetricSummaryCard.vue?vue&type=script&setup=true&lang.ts
var MetricSummaryCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MetricSummaryCard",
	props: {
		name: {},
		currentValue: {},
		delta: {},
		category: {},
		sourceNodeName: {},
		caseValues: {}
	},
	setup(__props) {
		const props = __props;
		const tone = computed(() => getDeltaTone(props.delta));
		const formattedValue = computed(() => formatMetricPercent(props.currentValue, { category: props.category }));
		const formattedLabel = computed(() => formatMetricLabel(props.name));
		const formattedSumScore = computed(() => formatMetricRawScoreSum(props.caseValues ?? [], { category: props.category }));
		const valueTooltip = computed(() => formattedSumScore.value ? `${formattedValue.value} • ${formattedSumScore.value}` : "");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.card),
				"data-test-id": "metric-summary-card"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.titleRow) }, [createVNode(unref(N8nTooltip_default), {
				content: __props.sourceNodeName ? `${__props.name} · ${__props.sourceNodeName}` : __props.name,
				placement: "top"
			}, {
				default: withCtx(() => [createVNode(unref(N8nText_default), {
					size: "small",
					class: normalizeClass(_ctx.$style.title)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(formattedLabel.value), 1)]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, ["content"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.valueRow) }, [valueTooltip.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				content: valueTooltip.value,
				placement: "top",
				"show-after": 0
			}, {
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass([_ctx.$style.value, _ctx.$style[`tone-${tone.value}`]]) }, toDisplayString(formattedValue.value), 3)]),
				_: 1
			}, 8, ["content"])) : (openBlock(), createElementBlock("span", {
				key: 1,
				class: normalizeClass([_ctx.$style.value, _ctx.$style[`tone-${tone.value}`]])
			}, toDisplayString(formattedValue.value), 3)), createVNode(TrendDeltaBadge_default, {
				delta: __props.delta,
				category: __props.category
			}, null, 8, ["delta", "category"])], 2)], 2);
		};
	}
});
var MetricSummaryCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_12dib_125",
	titleRow: "_titleRow_12dib_138",
	title: "_title_12dib_138",
	valueRow: "_valueRow_12dib_154",
	value: "_value_12dib_154",
	"tone-default": "_tone-default_12dib_168",
	"tone-positive": "_tone-positive_12dib_172",
	"tone-negative": "_tone-negative_12dib_176"
};
var MetricSummaryCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MetricSummaryCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MetricSummaryCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/RunDetail/MetricSummaryStrip.vue?vue&type=script&setup=true&lang.ts
var MetricSummaryStrip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MetricSummaryStrip",
	props: {
		currentMetrics: {},
		previousMetrics: {},
		metricSources: {},
		caseValuesByKey: {}
	},
	setup(__props) {
		const props = __props;
		const metricNames = computed(() => getUserDefinedMetricNames(props.currentMetrics));
		const cards = computed(() => metricNames.value.map((name) => {
			const source = props.metricSources?.[name];
			return {
				name,
				currentValue: normalizeMetricValue(props.currentMetrics?.[name]),
				delta: computeDelta(props.currentMetrics?.[name], props.previousMetrics?.[name]),
				category: source?.category,
				sourceNodeName: source?.nodeName,
				caseValues: props.caseValuesByKey?.[name] ?? []
			};
		}));
		return (_ctx, _cache) => {
			return cards.value.length > 0 ? (openBlock(), createBlock(unref(ElScrollbar), {
				key: 0,
				always: "",
				class: normalizeClass(_ctx.$style.scroll),
				"data-test-id": "metric-summary-strip"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.row) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(cards.value, (card) => {
					return openBlock(), createBlock(MetricSummaryCard_default, {
						key: card.name,
						name: card.name,
						"current-value": card.currentValue,
						delta: card.delta,
						category: card.category,
						"source-node-name": card.sourceNodeName,
						"case-values": card.caseValues
					}, null, 8, [
						"name",
						"current-value",
						"delta",
						"category",
						"source-node-name",
						"case-values"
					]);
				}), 128))], 2)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true);
		};
	}
});
var MetricSummaryStrip_vue_vue_type_style_index_0_lang_module_default = {
	scroll: "_scroll_1fbec_125",
	row: "_row_1fbec_140"
};
var MetricSummaryStrip_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MetricSummaryStrip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MetricSummaryStrip_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/RunDetail/RunStatusPill.vue?vue&type=script&setup=true&lang.ts
var RunStatusPill_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RunStatusPill",
	props: { status: {} },
	setup(__props) {
		const props = __props;
		const locale = useI18n();
		const tone = computed(() => {
			switch (props.status) {
				case "new":
				case "running": return "running";
				case "completed":
				case "success": return "done";
				case "error":
				case "warning": return "failed";
				case "cancelled": return "cancelled";
				default: return "failed";
			}
		});
		const labelKey = computed(() => {
			switch (tone.value) {
				case "running": return "evaluation.runDetail.runStatus.running";
				case "done": return "evaluation.runDetail.runStatus.done";
				case "failed": return "evaluation.runDetail.runStatus.failed";
				case "cancelled": return "evaluation.runDetail.runStatus.cancelled";
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				class: normalizeClass([_ctx.$style.pill, _ctx.$style[tone.value]]),
				"data-test-id": "run-status-pill"
			}, [tone.value === "running" ? (openBlock(), createBlock(unref(N8nSpinner_default), {
				key: 0,
				size: "small"
			})) : tone.value === "done" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 1,
				icon: "circle-check",
				size: "small"
			})) : tone.value === "failed" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 2,
				icon: "triangle-alert",
				size: "small"
			})) : tone.value === "cancelled" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 3,
				icon: "status-canceled",
				size: "small"
			})) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
				size: "small",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(labelKey.value)), 1)]),
				_: 1
			})], 2);
		};
	}
});
var RunStatusPill_vue_vue_type_style_index_0_lang_module_default = {
	pill: "_pill_1hth4_125",
	running: "_running_1hth4_136",
	done: "_done_1hth4_140",
	failed: "_failed_1hth4_145",
	cancelled: "_cancelled_1hth4_150"
};
var RunStatusPill_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RunStatusPill_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunStatusPill_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/composables/useCyclingVerb.ts
/**
* Pool of i18n keys for the progress verbs we cycle through while a test
* case is running. The composable returns a key (not the translated value)
* so the render site translates at use time and respects the active locale.
* Lifted from the TRUST-70 spec so the running state feels alive instead of
* just showing a static "Running…".
*/
var PROGRESS_VERB_KEYS = [
	"evaluation.runDetail.testCase.progress.accomplishing",
	"evaluation.runDetail.testCase.progress.actioning",
	"evaluation.runDetail.testCase.progress.actualizing",
	"evaluation.runDetail.testCase.progress.architecting",
	"evaluation.runDetail.testCase.progress.baking",
	"evaluation.runDetail.testCase.progress.beaming",
	"evaluation.runDetail.testCase.progress.beboppin",
	"evaluation.runDetail.testCase.progress.befuddling",
	"evaluation.runDetail.testCase.progress.billowing",
	"evaluation.runDetail.testCase.progress.blanching",
	"evaluation.runDetail.testCase.progress.bloviating",
	"evaluation.runDetail.testCase.progress.boogieing",
	"evaluation.runDetail.testCase.progress.boondoggling",
	"evaluation.runDetail.testCase.progress.booping",
	"evaluation.runDetail.testCase.progress.bootstrapping",
	"evaluation.runDetail.testCase.progress.brewing",
	"evaluation.runDetail.testCase.progress.bunning",
	"evaluation.runDetail.testCase.progress.burrowing",
	"evaluation.runDetail.testCase.progress.calculating",
	"evaluation.runDetail.testCase.progress.canoodling",
	"evaluation.runDetail.testCase.progress.caramelizing",
	"evaluation.runDetail.testCase.progress.cascading",
	"evaluation.runDetail.testCase.progress.catapulting",
	"evaluation.runDetail.testCase.progress.cerebrating",
	"evaluation.runDetail.testCase.progress.channeling",
	"evaluation.runDetail.testCase.progress.choreographing",
	"evaluation.runDetail.testCase.progress.churning",
	"evaluation.runDetail.testCase.progress.clauding",
	"evaluation.runDetail.testCase.progress.coalescing",
	"evaluation.runDetail.testCase.progress.cogitating",
	"evaluation.runDetail.testCase.progress.combobulating",
	"evaluation.runDetail.testCase.progress.composing",
	"evaluation.runDetail.testCase.progress.computing",
	"evaluation.runDetail.testCase.progress.concocting",
	"evaluation.runDetail.testCase.progress.considering",
	"evaluation.runDetail.testCase.progress.contemplating",
	"evaluation.runDetail.testCase.progress.cooking",
	"evaluation.runDetail.testCase.progress.crafting",
	"evaluation.runDetail.testCase.progress.creating",
	"evaluation.runDetail.testCase.progress.crunching",
	"evaluation.runDetail.testCase.progress.crystallizing",
	"evaluation.runDetail.testCase.progress.cultivating",
	"evaluation.runDetail.testCase.progress.deciphering",
	"evaluation.runDetail.testCase.progress.deliberating",
	"evaluation.runDetail.testCase.progress.determining",
	"evaluation.runDetail.testCase.progress.dillyDallying",
	"evaluation.runDetail.testCase.progress.discombobulating",
	"evaluation.runDetail.testCase.progress.doing",
	"evaluation.runDetail.testCase.progress.doodling"
];
var DEFAULT_INTERVAL_MS = 2500;
/**
* Picks a fresh progress-verb i18n key every `intervalMs` while `enabled` is
* truthy and returns it as a reactive ref. The render site is responsible
* for translating the key (via `useI18n().baseText(...)`), so locale
* changes take effect without re-mounting the composable. The first key is
* randomized so two cards starting at the same time aren't synced. The
* interval is paused while `enabled` is false to avoid burning timers on
* idle headers.
*/
function useCyclingVerb(enabled, intervalMs = DEFAULT_INTERVAL_MS) {
	const pickRandom = () => PROGRESS_VERB_KEYS[Math.floor(Math.random() * PROGRESS_VERB_KEYS.length)];
	const verbKey = ref(pickRandom());
	let timer = null;
	const stop = () => {
		if (timer !== null) {
			clearInterval(timer);
			timer = null;
		}
	};
	const start = () => {
		if (timer !== null) return;
		verbKey.value = pickRandom();
		timer = setInterval(() => {
			verbKey.value = pickRandom();
		}, intervalMs);
	};
	watch(enabled, (value) => {
		if (value) start();
		else stop();
	}, { immediate: true });
	onBeforeUnmount(stop);
	return verbKey;
}
//#endregion
//#region src/features/ai/evaluation.ee/components/RunDetail/TestCaseHeader.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["aria-label"];
var TestCaseHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TestCaseHeader",
	props: {
		index: {},
		status: {},
		tokens: {},
		durationMs: {},
		executionId: {},
		cancelDisabled: { type: Boolean }
	},
	emits: [
		"view",
		"cancel",
		"rerun"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const locale = useI18n();
		const tokensLabel = computed(() => formatTokens(props.tokens));
		const durationLabel = computed(() => formatDuration(props.durationMs));
		const isFinished = computed(() => props.status === "success" || props.status === "error" || props.status === "warning");
		const isPending = computed(() => props.status === "new");
		const isRunning = computed(() => props.status === "running" || props.status === "evaluation_running");
		const isCancelled = computed(() => props.status === "cancelled");
		const isFailed = computed(() => props.status === "error" || props.status === "warning");
		const hasMetadata = computed(() => isFinished.value && (props.tokens !== void 0 || props.durationMs !== void 0));
		const cyclingVerbKey = useCyclingVerb(isRunning);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.header),
				"data-test-id": "test-case-header"
			}, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.leftGroup, { [_ctx.$style.shimmering]: isRunning.value }]) }, [
				isRunning.value ? (openBlock(), createBlock(unref(N8nSpinner_default), {
					key: 0,
					size: "small",
					class: normalizeClass(_ctx.$style.leadingSpinner)
				}, null, 8, ["class"])) : createCommentVNode("", true),
				createVNode(unref(N8nText_default), {
					size: "medium",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.runDetail.testCase.title", { interpolate: { index: __props.index } })), 1)]),
					_: 1
				}),
				hasMetadata.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					__props.tokens !== void 0 ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						class: normalizeClass(_ctx.$style.meta)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(tokensLabel.value), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					__props.tokens !== void 0 && __props.durationMs !== void 0 ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						size: "small",
						class: normalizeClass(_ctx.$style.dot)
					}, {
						default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode(" · ", -1)])]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					__props.durationMs !== void 0 ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 2,
						size: "small",
						class: normalizeClass(_ctx.$style.meta)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(durationLabel.value), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)
				], 64)) : createCommentVNode("", true)
			], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.rightGroup) }, [isPending.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nIcon_default), {
				icon: "circle",
				size: "small",
				class: normalizeClass(_ctx.$style.pendingIcon)
			}, null, 8, ["class"]), createVNode(unref(N8nButton_default), {
				variant: "ghost",
				size: "mini",
				label: unref(locale).baseText("evaluation.runDetail.testCase.cancel"),
				disabled: __props.cancelDisabled,
				"data-test-id": "test-case-cancel-button",
				onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("cancel"), ["stop"]))
			}, null, 8, ["label", "disabled"])], 64)) : isRunning.value ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 1,
				size: "small",
				class: normalizeClass(_ctx.$style.runningVerb)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(unref(cyclingVerbKey))) + "… ", 1)]),
				_: 1
			}, 8, ["class"])) : isCancelled.value ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 2,
				size: "small",
				class: normalizeClass(_ctx.$style.meta)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.runDetail.testCase.cancelled")), 1)]),
				_: 1
			}, 8, ["class"])) : isFailed.value ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 3,
				variant: "outline",
				size: "mini",
				label: unref(locale).baseText("evaluation.runDetail.testCase.rerun"),
				"data-test-id": "test-case-rerun-button",
				onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("rerun"), ["stop"]))
			}, null, 8, ["label"])) : (openBlock(), createElementBlock(Fragment, { key: 4 }, [__props.executionId ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				content: unref(locale).baseText("evaluation.runDetail.testCase.viewLink"),
				placement: "top"
			}, {
				default: withCtx(() => [createBaseVNode("button", {
					type: "button",
					class: normalizeClass(["open-execution-link", _ctx.$style.viewIcon]),
					"data-test-id": "test-case-view-link",
					"aria-label": unref(locale).baseText("evaluation.runDetail.testCase.viewLink"),
					onClick: _cache[2] || (_cache[2] = withModifiers(($event) => emit("view"), ["stop"]))
				}, [createVNode(unref(N8nIcon_default), {
					icon: "external-link",
					size: "small"
				})], 10, _hoisted_1)]),
				_: 1
			}, 8, ["content"])) : createCommentVNode("", true)], 64))], 2)], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/RunDetail/TestCaseHeader.vue?vue&type=style&index=0&lang.module.scss
var header$1 = "_header_ofqve_341";
var leftGroup = "_leftGroup_ofqve_351";
var shimmering = "_shimmering_ofqve_358";
var shimmer = "_shimmer_ofqve_358";
var leadingSpinner = "_leadingSpinner_ofqve_372";
var rightGroup = "_rightGroup_ofqve_376";
var meta = "_meta_ofqve_383";
var dot = "_dot_ofqve_387";
var pendingIcon = "_pendingIcon_ofqve_391";
var runningVerb = "_runningVerb_ofqve_395";
var viewIcon = "_viewIcon_ofqve_409";
var spin = "_spin_ofqve_1";
var opacityPulse = "_opacityPulse_ofqve_1";
var popoverIn = "_popoverIn_ofqve_1";
var fadeIn = "_fadeIn_ofqve_1";
var collapsibleSlideDown = "_collapsibleSlideDown_ofqve_1";
var collapsibleSlideUp = "_collapsibleSlideUp_ofqve_1";
var pulseGlow = "_pulseGlow_ofqve_1";
var pulseGlowDelayed = "_pulseGlowDelayed_ofqve_1";
var fade = "_fade_ofqve_1";
var fadeInUp = "_fadeInUp_ofqve_1";
var fadeInDown = "_fadeInDown_ofqve_1";
var fadeInLeft = "_fadeInLeft_ofqve_1";
var fadeInRight = "_fadeInRight_ofqve_1";
var fadeOut = "_fadeOut_ofqve_1";
var fadeOutDown = "_fadeOutDown_ofqve_1";
var fadeOutUp = "_fadeOutUp_ofqve_1";
var fadeOutLeft = "_fadeOutLeft_ofqve_1";
var fadeOutRight = "_fadeOutRight_ofqve_1";
var ping = "_ping_ofqve_1";
var blinkBackground = "_blinkBackground_ofqve_1";
var typingBlink = "_typingBlink_ofqve_1";
var TestCaseHeader_vue_vue_type_style_index_0_lang_module_default = {
	header: header$1,
	leftGroup,
	shimmering,
	shimmer,
	leadingSpinner,
	rightGroup,
	meta,
	dot,
	pendingIcon,
	runningVerb,
	viewIcon,
	spin,
	"skeleton-pulse": "_skeleton-pulse_ofqve_1",
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
var TestCaseHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TestCaseHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TestCaseHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/RunDetail/TestCaseMetricRow.vue?vue&type=script&setup=true&lang.ts
var TestCaseMetricRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TestCaseMetricRow",
	props: {
		name: {},
		value: {},
		category: {},
		sourceNodeName: {},
		errored: { type: Boolean },
		errorMessage: {}
	},
	setup(__props) {
		const props = __props;
		const locale = useI18n();
		const formattedLabel = computed(() => formatMetricLabel(props.name));
		const formattedPercent = computed(() => formatMetricPercent(props.value, { category: props.category }));
		const formattedRawScore = computed(() => formatMetricRawScore(props.value, { category: props.category }));
		const tooltipContent = computed(() => formattedRawScore.value ? `${formattedPercent.value} • ${formattedRawScore.value}` : "");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.row),
				"data-test-id": "test-case-metric-row"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.leading) }, [
				createVNode(unref(N8nIcon_default), {
					icon: __props.errored ? "circle-x" : "circle-check",
					size: "small",
					class: normalizeClass(__props.errored ? _ctx.$style.errorIcon : _ctx.$style.successIcon)
				}, null, 8, ["icon", "class"]),
				createVNode(unref(N8nText_default), {
					size: "medium",
					bold: "",
					class: normalizeClass(_ctx.$style.name)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(formattedLabel.value), 1)]),
					_: 1
				}, 8, ["class"]),
				__props.sourceNodeName ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					class: normalizeClass(_ctx.$style.subtitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.sourceNodeName), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)
			], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.trailing) }, [__props.errored ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				size: "small",
				class: normalizeClass(_ctx.$style.errorMessage)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.errorMessage ?? unref(locale).baseText("evaluation.runDetail.testCase.failed")), 1)]),
				_: 1
			}, 8, ["class"])) : tooltipContent.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 1,
				content: tooltipContent.value,
				placement: "top"
			}, {
				default: withCtx(() => [createVNode(unref(N8nText_default), {
					size: "medium",
					class: normalizeClass(_ctx.$style.value)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(formattedPercent.value), 1)]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, ["content"])) : (openBlock(), createBlock(unref(N8nText_default), {
				key: 2,
				size: "medium",
				class: normalizeClass(_ctx.$style.value)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(formattedPercent.value), 1)]),
				_: 1
			}, 8, ["class"]))], 2)], 2);
		};
	}
});
var TestCaseMetricRow_vue_vue_type_style_index_0_lang_module_default = {
	row: "_row_1tzb7_125",
	leading: "_leading_1tzb7_134",
	trailing: "_trailing_1tzb7_142",
	successIcon: "_successIcon_1tzb7_148",
	errorIcon: "_errorIcon_1tzb7_152",
	name: "_name_1tzb7_156",
	subtitle: "_subtitle_1tzb7_163",
	value: "_value_1tzb7_167",
	errorMessage: "_errorMessage_1tzb7_173"
};
var TestCaseMetricRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TestCaseMetricRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TestCaseMetricRow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/RunDetail/TestCaseCard.vue?vue&type=script&setup=true&lang.ts
var TestCaseCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TestCaseCard",
	props: {
		testCase: {},
		index: {},
		metricSources: {}
	},
	emits: [
		"view",
		"cancel",
		"rerun"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const locale = useI18n();
		const status = computed(() => props.testCase.status);
		const tokens = computed(() => {
			const value = props.testCase.metrics?.totalTokens;
			return typeof value === "number" ? value : void 0;
		});
		const durationMs = computed(() => {
			const fromMetric = props.testCase.metrics?.executionTime;
			if (typeof fromMetric === "number") return fromMetric;
			return computeDurationMs(props.testCase.runAt ?? void 0, props.testCase.updatedAt);
		});
		const isOpaque = computed(() => status.value === "new" || status.value === "cancelled");
		const isErrored = computed(() => status.value === "error" || status.value === "warning");
		const showRows = computed(() => status.value === "success" || isErrored.value);
		const errorMessage = computed(() => {
			const code = props.testCase.errorCode;
			const key = code ? getErrorBaseKey(code) : "";
			if (key) return locale.baseText(key);
			return locale.baseText("evaluation.runDetail.error.unknownError");
		});
		const errorTitle = computed(() => locale.baseText("evaluation.runDetail.testCase.failed"));
		const rows = computed(() => {
			if (status.value !== "success") return [];
			return getUserDefinedMetricNames(props.testCase.metrics).map((name) => {
				const source = props.metricSources?.[name];
				return {
					name,
					value: normalizeMetricValue(props.testCase.metrics?.[name]),
					category: source?.category,
					sourceNodeName: source?.nodeName
				};
			});
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass([_ctx.$style.card, { [_ctx.$style.opaque]: isOpaque.value }]),
				style: { "--card--padding": "var(--spacing--md)" },
				"data-test-id": "test-case-card",
				"data-status": status.value
			}, {
				header: withCtx(() => [createVNode(TestCaseHeader_default, {
					index: __props.index,
					status: status.value,
					tokens: tokens.value,
					"duration-ms": durationMs.value,
					"execution-id": __props.testCase.executionId,
					onView: _cache[0] || (_cache[0] = ($event) => emit("view", __props.testCase)),
					onCancel: _cache[1] || (_cache[1] = ($event) => emit("cancel", __props.testCase)),
					onRerun: _cache[2] || (_cache[2] = ($event) => emit("rerun", __props.testCase))
				}, null, 8, [
					"index",
					"status",
					"tokens",
					"duration-ms",
					"execution-id"
				])]),
				default: withCtx(() => [createVNode(Transition, {
					name: "tc-rows-fade-in",
					appear: ""
				}, {
					default: withCtx(() => [showRows.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.rowList)
					}, [isErrored.value ? (openBlock(), createBlock(TestCaseMetricRow_default, {
						key: "__error__",
						name: errorTitle.value,
						value: void 0,
						errored: "",
						"error-message": errorMessage.value
					}, null, 8, ["name", "error-message"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(rows.value, (row) => {
						return openBlock(), createBlock(TestCaseMetricRow_default, {
							key: row.name,
							name: row.name,
							value: row.value,
							category: row.category,
							"source-node-name": row.sourceNodeName
						}, null, 8, [
							"name",
							"value",
							"category",
							"source-node-name"
						]);
					}), 128))], 2)) : createCommentVNode("", true)]),
					_: 1
				})]),
				_: 1
			}, 8, ["class", "data-status"]);
		};
	}
});
var TestCaseCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1mj2r_125",
	opaque: "_opaque_1mj2r_132",
	rowList: "_rowList_1mj2r_136",
	"tc-rows-fade-in": "_tc-rows-fade-in_1mj2r_142"
};
var TestCaseCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TestCaseCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TestCaseCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/views/TestRunDetailView.vue?vue&type=script&setup=true&lang.ts
var TestRunDetailView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TestRunDetailView",
	setup(__props) {
		const router = useRouter();
		const toast = useToast();
		const evaluationStore = useEvaluationStore();
		const evaluationState = useWorkflowEvaluationState();
		const locale = useI18n();
		const telemetry = useTelemetry();
		const isLoading = ref(true);
		const testCases = computed(() => Object.values(evaluationStore.testCaseExecutionsById).filter((record) => record.testRunId === runId.value));
		const runId = computed(() => router.currentRoute.value.params.runId);
		const workflowId = useInjectWorkflowId();
		const run = computed(() => evaluationStore.testRunsById[runId.value]);
		const orderedRuns = computed(() => (0, import_orderBy.default)(Object.values(evaluationStore.testRunsById).filter((record) => record.workflowId === workflowId.value), (record) => new Date(record.runAt), ["asc"]));
		const testRunIndex = computed(() => orderedRuns.value.findIndex((record) => record.id === runId.value));
		const previousRun = computed(() => {
			const index = testRunIndex.value;
			if (index <= 0) return null;
			for (let i = index - 1; i >= 0; i--) {
				const candidate = orderedRuns.value[i];
				if (candidate?.status === "completed") return candidate;
			}
			return null;
		});
		const orderedTestCases = computed(() => (0, import_orderBy.default)(testCases.value, [(record) => record.runIndex ?? Number.MAX_SAFE_INTEGER, (record) => record.runAt ?? ""], ["asc", "asc"]));
		const metricSources = computed(() => evaluationState.metricSourceByKey.value);
		const caseValuesByKey = computed(() => {
			const result = {};
			for (const name of getUserDefinedMetricNames(run.value?.metrics)) result[name] = orderedTestCases.value.map((testCase) => testCase.metrics?.[name]);
			return result;
		});
		const rerunRun = async () => {
			if (!workflowId.value) return;
			try {
				const { testRunId } = await evaluationStore.startTestRun(workflowId.value);
				await evaluationStore.fetchTestRuns(workflowId.value);
				await router.push({
					name: VIEWS.EVALUATION_RUNS_DETAIL,
					params: {
						workflowId: workflowId.value,
						runId: testRunId
					}
				});
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.error.cantStartTestRun"));
			}
		};
		const cancelPendingCase = async (testCase) => {
			if (!workflowId.value) return;
			try {
				await evaluationStore.cancelTestCase({
					workflowId: workflowId.value,
					runId: runId.value,
					caseId: testCase.id
				});
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.runDetail.testCase.cancelError"));
			}
		};
		const openRelatedExecution = (testCase) => {
			const executionId = testCase.executionId;
			if (!executionId) return;
			telemetry.track("User opened execution from run detail", {
				run_id: runId.value,
				workflow_id: workflowId.value,
				test_case_id: testCase.id
			});
			const { href } = router.resolve({
				name: VIEWS.EXECUTION_PREVIEW,
				params: {
					workflowId: workflowId.value,
					executionId
				}
			});
			window.open(href, "_blank");
		};
		const fetchExecutionTestCases = async () => {
			if (!runId.value || !workflowId.value) return false;
			isLoading.value = true;
			try {
				const testRun = await evaluationStore.getTestRun({
					workflowId: workflowId.value,
					runId: runId.value
				});
				await evaluationStore.fetchTestCaseExecutions({
					workflowId: workflowId.value,
					runId: testRun.id
				});
				await evaluationStore.fetchTestRuns(run.value.workflowId);
				return true;
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.toast.error.fetchTestCases"));
				return false;
			} finally {
				isLoading.value = false;
			}
		};
		const trackViewedRunDetail = () => {
			telemetry.track("User viewed run detail", {
				run_id: runId.value,
				workflow_id: workflowId.value,
				has_previous_run: previousRun.value !== null,
				metric_count: getUserDefinedMetricNames(run.value?.metrics).length,
				test_case_count: testCases.value.length,
				failed_test_case_count: testCases.value.filter((c) => c.status === "error").length
			});
		};
		const navigateBackToRuns = async () => {
			if (!workflowId.value) return;
			await router.push({
				name: VIEWS.EVALUATION_EDIT,
				params: { workflowId: workflowId.value }
			});
		};
		onMounted(async () => await fetchExecutionTestCases() && trackViewedRunDetail());
		onBeforeUnmount(() => evaluationStore.cleanupPolling());
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "test-definition-run-detail"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("button", {
					class: normalizeClass(_ctx.$style.backButton),
					onClick: navigateBackToRuns
				}, [createVNode(unref(N8nIcon_default), {
					icon: "arrow-left",
					size: "small"
				}), createVNode(unref(N8nText_default), { size: "medium" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.runDetail.backToRuns")), 1)]),
					_: 1
				})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.headingRow) }, [createBaseVNode("h1", { class: normalizeClass(_ctx.$style.runHeading) }, toDisplayString(unref(locale).baseText("evaluation.listRuns.testCasesListHeader", { interpolate: { index: testRunIndex.value + 1 } })), 3), run.value ? (openBlock(), createBlock(RunStatusPill_default, {
					key: 0,
					status: run.value.status
				}, null, 8, ["status"])) : createCommentVNode("", true)], 2)], 2),
				createVNode(MetricSummaryStrip_default, {
					"current-metrics": run.value?.metrics,
					"previous-metrics": previousRun.value?.metrics,
					"metric-sources": metricSources.value,
					"case-values-by-key": caseValuesByKey.value,
					class: "mb-m"
				}, null, 8, [
					"current-metrics",
					"previous-metrics",
					"metric-sources",
					"case-values-by-key"
				]),
				isLoading.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loading)
				}, [createVNode(unref(N8nLoading_default), {
					loading: true,
					rows: 5
				})], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.caseList)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(orderedTestCases.value, (testCase, index) => {
					return openBlock(), createBlock(TestCaseCard_default, {
						key: testCase.id,
						"test-case": testCase,
						index: index + 1,
						"metric-sources": metricSources.value,
						onView: openRelatedExecution,
						onCancel: cancelPendingCase,
						onRerun: rerunRun
					}, null, 8, [
						"test-case",
						"index",
						"metric-sources"
					]);
				}), 128))], 2))
			], 2);
		};
	}
});
var TestRunDetailView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1qhol_125",
	header: "_header_1qhol_132",
	headingRow: "_headingRow_1qhol_139",
	backButton: "_backButton_1qhol_146",
	runHeading: "_runHeading_1qhol_162",
	capitalized: "_capitalized_1qhol_171",
	loading: "_loading_1qhol_179",
	caseList: "_caseList_1qhol_186"
};
var TestRunDetailView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TestRunDetailView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TestRunDetailView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { TestRunDetailView_default as default };
