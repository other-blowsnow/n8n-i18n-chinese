import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, X as onMounted, _ as Fragment, bt as withCtx, c as useCssModule, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, m as withKeys, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-Cdnara8G.js";
import { $ as SettingsRowGroup_default, Ai as N8nText_default, Dt as Checkbox_default, Et as N8nInputLabel_default, Ii as N8nButton_default, Li as N8nIcon_default, Pi as Input_default, Q as SettingsSaveBar_default, Z as SettingsSection_default, en as DropdownMenu_default, h as Dialog_default, jr as N8nTooltip_default, m as DialogFooter_default, nt as SettingsPageHeader_default, rt as SettingsLayout_default, tt as SettingsRow_default, y as DialogClose_default } from "./src-C5Kc3_kG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { h as onBeforeRouteLeave } from "./htmlUtils-6WNyAs6s.js";
import { t as useToast } from "./useToast-DazLbRYs.js";
import { i as defineStore } from "./constants-XpttQcgc.js";
import { Xn as makeRestApiRequest, t as useRootStore } from "./useRootStore-BGtY9ILv.js";
import { n as useTelemetry } from "./posthog.store-CHWQ6Zed.js";
import { t as useDocumentTitle } from "./useDocumentTitle-BRfXEVwP.js";
//#region src/features/settings/otel/otel.api.ts
async function getOtelSettings(context) {
	return await makeRestApiRequest(context, "GET", "/otel/settings");
}
async function updateOtelSettings(context, settings) {
	return await makeRestApiRequest(context, "PUT", "/otel/settings", settings);
}
async function sendOtelTestTrace(context, connection) {
	return await makeRestApiRequest(context, "POST", "/otel/test-trace", connection);
}
//#endregion
//#region src/features/settings/otel/otel.constants.ts
var OTEL_STORE = "otel";
/** Name of the span emitted by the "Send test trace" button — shown in the result copy. */
var OTEL_TEST_SPAN_NAME = "n8n.test_trace";
/** Maps each settings field to its env-var name — shown in per-field tooltips. */
var OTEL_FIELD_ENV_VARS = {
	enabled: "N8N_OTEL_ENABLED",
	exporterEndpoint: "N8N_OTEL_EXPORTER_OTLP_ENDPOINT",
	exporterTracingPath: "N8N_OTEL_EXPORTER_OTLP_TRACING_PATH",
	exporterServiceName: "N8N_OTEL_EXPORTER_SERVICE_NAME",
	exporterHeaders: "N8N_OTEL_EXPORTER_OTLP_HEADERS",
	tracesSampleRate: "N8N_OTEL_TRACES_SAMPLE_RATE",
	startupConnectivityTimeoutMs: "N8N_OTEL_STARTUP_CONNECTIVITY_TIMEOUT_MS",
	includeNodeSpans: "N8N_OTEL_TRACES_INCLUDE_NODE_SPANS",
	injectOutbound: "N8N_OTEL_TRACES_INJECT_OUTBOUND",
	productionExecutionsOnly: "N8N_OTEL_TRACES_PRODUCTION_ONLY"
};
//#endregion
//#region src/features/settings/otel/otel.store.ts
function headersStringToPairs(str) {
	if (!str.trim()) return [];
	return str.split(",").map((pair) => {
		const idx = pair.indexOf("=");
		if (idx === -1) return {
			key: pair.trim(),
			value: ""
		};
		return {
			key: pair.slice(0, idx).trim(),
			value: pair.slice(idx + 1).trim()
		};
	}).filter((p) => p.key);
}
function headersPairsToString(pairs) {
	return pairs.filter((p) => p.key.trim()).map((p) => `${p.key}=${p.value}`).join(",");
}
var defaultSettings = {
	enabled: false,
	exporterEndpoint: "http://localhost:4318",
	exporterTracingPath: "/v1/traces",
	exporterServiceName: "n8n",
	exporterHeaders: "",
	tracesSampleRate: 1,
	startupConnectivityTimeoutMs: 2e3,
	includeNodeSpans: true,
	injectOutbound: true,
	productionExecutionsOnly: true
};
function extractSettings(response) {
	const { envManagedFields: _, ...settings } = response;
	return settings;
}
var useOtelStore = defineStore(OTEL_STORE, () => {
	const rootStore = useRootStore();
	const settings = ref({ ...defaultSettings });
	const savedSettings = ref({ ...defaultSettings });
	const envManagedFields = ref([]);
	const loading = ref(true);
	const saving = ref(false);
	const testState = ref("idle");
	const testError = ref("");
	const testTimestamp = ref("");
	const isDirty = computed(() => JSON.stringify(settings.value) !== JSON.stringify(savedSettings.value));
	async function fetchSettings() {
		loading.value = true;
		try {
			const fetched = await getOtelSettings(rootStore.restApiContext);
			settings.value = extractSettings(fetched);
			savedSettings.value = extractSettings(fetched);
			envManagedFields.value = fetched.envManagedFields;
		} finally {
			loading.value = false;
		}
	}
	async function saveSettings() {
		saving.value = true;
		try {
			const updated = await updateOtelSettings(rootStore.restApiContext, settings.value);
			settings.value = extractSettings(updated);
			savedSettings.value = extractSettings(updated);
			envManagedFields.value = updated.envManagedFields;
		} finally {
			saving.value = false;
		}
	}
	function discardChanges() {
		settings.value = { ...savedSettings.value };
	}
	let currentTestRun = 0;
	function resetTestState() {
		currentTestRun++;
		testState.value = "idle";
		testError.value = "";
		testTimestamp.value = "";
	}
	async function sendTestTrace() {
		const runId = ++currentTestRun;
		testState.value = "sending";
		testError.value = "";
		try {
			const result = await sendOtelTestTrace(rootStore.restApiContext, {
				exporterEndpoint: settings.value.exporterEndpoint,
				exporterTracingPath: settings.value.exporterTracingPath,
				exporterServiceName: settings.value.exporterServiceName,
				exporterHeaders: settings.value.exporterHeaders,
				startupConnectivityTimeoutMs: settings.value.startupConnectivityTimeoutMs
			});
			if (runId !== currentTestRun) return;
			if (result.success) {
				testTimestamp.value = (/* @__PURE__ */ new Date()).toLocaleTimeString();
				testState.value = "sent";
			} else {
				testError.value = result.error;
				testState.value = "error";
			}
		} catch (error) {
			if (runId !== currentTestRun) return;
			testError.value = error instanceof Error ? error.message : String(error);
			testState.value = "error";
		}
	}
	return {
		settings,
		savedSettings,
		envManagedFields,
		loading,
		saving,
		isDirty,
		testState,
		testError,
		testTimestamp,
		fetchSettings,
		saveSettings,
		discardChanges,
		sendTestTrace,
		resetTestState
	};
});
//#endregion
//#region src/features/settings/otel/otel.utils.ts
/**
* Locale-aware formatting and parsing for the traces sample rate (0..1).
*
* The parser inverts the formatter: the locale's digits are mapped back to
* ASCII and its decimal separator is accepted alongside '.' and ',', so any
* value the formatter renders (or a user types) parses back to the same number.
*/
function createSampleRateFormat(locale) {
	const formatter = new Intl.NumberFormat(locale, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 4
	});
	const decimalSeparator = formatter.formatToParts(1.1).find((part) => part.type === "decimal")?.value ?? ".";
	const digitFormatter = new Intl.NumberFormat(locale);
	const asciiDigits = new Map(Array.from({ length: 10 }, (_, digit) => [digitFormatter.format(digit), String(digit)]));
	/** Parse a rate in this locale; null when not a number (incl. empty). Clamps to [0, 1]. */
	function parse(text) {
		const trimmed = text.replace(/[\u200e\u200f\u061c]/gu, "").trim();
		if (!trimmed) return null;
		const normalized = [...trimmed].map((char) => asciiDigits.get(char) ?? char).join("").replace(decimalSeparator, ".").replace(",", ".");
		const parsed = Number(normalized);
		return Number.isFinite(parsed) ? Math.min(1, Math.max(0, parsed)) : null;
	}
	return {
		format: (value) => formatter.format(value),
		parse
	};
}
//#endregion
//#region src/features/settings/otel/OtelSettingsRow.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-label"];
var OtelSettingsRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "OtelSettingsRow",
	props: {
		title: {},
		description: {},
		envTooltip: { default: void 0 },
		layout: { default: "horizontal" },
		actionFill: {
			type: Boolean,
			default: false
		},
		actionMaxWidth: {
			type: [String, Boolean],
			default: "50%"
		},
		descriptionError: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsRow_default), mergeProps(_ctx.$attrs, {
				layout: __props.layout,
				"action-fill": __props.actionFill,
				"action-max-width": __props.actionMaxWidth
			}), {
				info: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.info) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.title) }, [createVNode(unref(N8nText_default), {
					bold: "",
					size: "medium",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
					_: 1
				}), __props.envTooltip ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: __props.envTooltip,
					placement: "top"
				}, {
					default: withCtx(() => [createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.envInfo),
						role: "img",
						tabindex: "0",
						"aria-label": __props.envTooltip
					}, [createVNode(unref(N8nIcon_default), {
						icon: "circle-help",
						size: "small"
					})], 10, _hoisted_1$1)]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true)], 2), createVNode(unref(N8nText_default), {
					size: "small",
					color: __props.descriptionError ? "danger" : "text-light",
					"data-test-id": __props.descriptionError ? "otel-settings-row-error" : void 0
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.description), 1)]),
					_: 1
				}, 8, ["color", "data-test-id"])], 2)]),
				action: withCtx(() => [renderSlot(_ctx.$slots, "action")]),
				_: 3
			}, 16, [
				"layout",
				"action-fill",
				"action-max-width"
			]);
		};
	}
});
var OtelSettingsRow_vue_vue_type_style_index_0_lang_module_default = {
	info: "_info_1svef_125",
	title: "_title_1svef_132",
	envInfo: "_envInfo_1svef_138"
};
var OtelSettingsRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OtelSettingsRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OtelSettingsRow_vue_vue_type_style_index_0_lang_module_default }]]);
var OtelStatusDot_vue_vue_type_style_index_0_lang_module_default = {
	dot: "_dot_616g0_130",
	"status-dot-pulse": "_status-dot-pulse_616g0_1"
};
//#endregion
//#region src/features/settings/otel/OtelStatusDot.vue
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("span", {
		class: normalizeClass(_ctx.$style.dot),
		"aria-hidden": "true"
	}, null, 2);
}
var OtelStatusDot_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": OtelStatusDot_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/otel/OtelStatusControl.vue?vue&type=script&setup=true&lang.ts
var OtelStatusControl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OtelStatusControl",
	props: {
		enabled: { type: Boolean },
		disabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:enabled"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const $style = useCssModule();
		const menuItems = computed(() => [{
			id: "disable",
			label: i18n.baseText("settings.opentelemetry.enable.action.disable"),
			icon: {
				type: "icon",
				value: "power"
			},
			class: $style.dangerItem
		}]);
		function onSelect(id) {
			if (id === "disable") emit("update:enabled", false);
		}
		return (_ctx, _cache) => {
			return __props.enabled ? (openBlock(), createBlock(unref(DropdownMenu_default), {
				key: 0,
				items: menuItems.value,
				placement: "bottom-end",
				disabled: __props.disabled || __props.loading,
				"data-test-id": "otel-enabled-menu",
				onSelect
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "medium",
					disabled: __props.disabled,
					loading: __props.loading,
					"aria-label": unref(i18n).baseText("settings.opentelemetry.enable.action.enabledAriaLabel"),
					"data-test-id": "otel-enabled-toggle"
				}, {
					default: withCtx(() => [
						createVNode(OtelStatusDot_default),
						createTextVNode(" " + toDisplayString(unref(i18n).baseText("settings.opentelemetry.enable.option.enabled")) + " ", 1),
						createVNode(unref(N8nIcon_default), {
							icon: "chevron-down",
							size: "small"
						})
					]),
					_: 1
				}, 8, [
					"disabled",
					"loading",
					"aria-label"
				])]),
				_: 1
			}, 8, ["items", "disabled"])) : (openBlock(), createBlock(unref(N8nButton_default), {
				key: 1,
				variant: "outline",
				size: "medium",
				disabled: __props.disabled,
				loading: __props.loading,
				"aria-label": unref(i18n).baseText("settings.opentelemetry.enable.action.enableAriaLabel"),
				"data-test-id": "otel-enabled-toggle",
				onClick: _cache[0] || (_cache[0] = ($event) => emit("update:enabled", true))
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.opentelemetry.enable.action.enable")), 1)]),
				_: 1
			}, 8, [
				"disabled",
				"loading",
				"aria-label"
			]));
		};
	}
});
var OtelStatusControl_vue_vue_type_style_index_0_lang_module_default = { dangerItem: "_dangerItem_lxwz8_129" };
var OtelStatusControl_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OtelStatusControl_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OtelStatusControl_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/otel/SettingsOpenTelemetryView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { "data-test-id": "otel-unsaved-changes-dialog" };
var OTEL_DOCS_URL = "https://docs.n8n.io/hosting/logging-monitoring/opentelemetry/";
var SettingsOpenTelemetryView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsOpenTelemetryView",
	setup(__props) {
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const otelStore = useOtelStore();
		const headerPairs = ref([]);
		const showUnsavedChangesDialog = ref(false);
		const pendingNext = ref(null);
		function syncHeaderPairsFromStore() {
			headerPairs.value = headersStringToPairs(otelStore.settings.exporterHeaders);
		}
		function syncHeaderPairsToStore() {
			otelStore.settings.exporterHeaders = headersPairsToString(headerPairs.value);
		}
		function addHeader() {
			headerPairs.value.push({
				key: "",
				value: ""
			});
			syncHeaderPairsToStore();
		}
		function removeHeader(index) {
			headerPairs.value.splice(index, 1);
			syncHeaderPairsToStore();
		}
		function onHeaderChange(index, field, value) {
			headerPairs.value = headerPairs.value.map((pair, i) => i === index ? {
				...pair,
				[field]: value
			} : pair);
			syncHeaderPairsToStore();
		}
		function isEnvManaged(field) {
			return otelStore.envManagedFields.includes(field);
		}
		const statusDescription = computed(() => otelStore.settings.enabled ? i18n.baseText("settings.opentelemetry.status.enabledDescription") : i18n.baseText("settings.opentelemetry.status.disabledDescription"));
		function envTooltip(field) {
			const envVariable = i18n.baseText("settings.opentelemetry.envVarTooltip", { interpolate: { envVar: OTEL_FIELD_ENV_VARS[field] } });
			return isEnvManaged(field) ? `${i18n.baseText("settings.opentelemetry.envVarManagedTooltip")}. ${envVariable}` : envVariable;
		}
		async function save() {
			try {
				const wasEnabled = otelStore.savedSettings.enabled;
				await otelStore.saveSettings();
				const isNowEnabled = otelStore.settings.enabled;
				if (!wasEnabled && isNowEnabled) telemetry.track("Activated otel via UI", {
					includeNodeSpans: otelStore.settings.includeNodeSpans,
					productionExecutionsOnly: otelStore.settings.productionExecutionsOnly,
					tracesSampleRate: otelStore.settings.tracesSampleRate,
					injectOutbound: otelStore.settings.injectOutbound
				});
				else if (wasEnabled && !isNowEnabled) telemetry.track("Disabled otel via UI");
				else telemetry.track("Updated otel via UI", {
					enabled: isNowEnabled,
					includeNodeSpans: otelStore.settings.includeNodeSpans,
					productionExecutionsOnly: otelStore.settings.productionExecutionsOnly,
					tracesSampleRate: otelStore.settings.tracesSampleRate,
					injectOutbound: otelStore.settings.injectOutbound
				});
				toast.showMessage({
					title: i18n.baseText("settings.opentelemetry.savedSuccess"),
					type: "success"
				});
				return true;
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.opentelemetry.savedError"));
				return false;
			}
		}
		function discard() {
			otelStore.discardChanges();
			syncHeaderPairsFromStore();
		}
		const statusSaving = ref(false);
		async function onToggleEnabled(enabled) {
			otelStore.settings.enabled = enabled;
			statusSaving.value = true;
			try {
				if (!await save()) otelStore.settings.enabled = !enabled;
			} finally {
				statusSaving.value = false;
			}
		}
		function onLeaveWithoutSaving() {
			showUnsavedChangesDialog.value = false;
			pendingNext.value?.();
			pendingNext.value = null;
		}
		async function onSaveAndLeave() {
			if (!await save()) return;
			showUnsavedChangesDialog.value = false;
			pendingNext.value?.();
			pendingNext.value = null;
		}
		function onKeepEditing() {
			showUnsavedChangesDialog.value = false;
			pendingNext.value?.(false);
			pendingNext.value = null;
		}
		onBeforeRouteLeave((_to, _from, next) => {
			if (!otelStore.isDirty) {
				next();
				return;
			}
			pendingNext.value = next;
			showUnsavedChangesDialog.value = true;
		});
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.opentelemetry.title"));
			await otelStore.fetchSettings();
			syncHeaderPairsFromStore();
			syncSampleRateInput();
			syncConnectivityTimeoutInput();
		});
		watch(() => otelStore.settings?.exporterHeaders, (newVal) => {
			if (newVal !== headersPairsToString(headerPairs.value)) headerPairs.value = headersStringToPairs(newVal ?? "");
		});
		const canTestTrace = computed(() => !!otelStore.settings.exporterEndpoint && otelStore.testState !== "sending");
		const { format: formatSampleRate, parse: parseSampleRate } = createSampleRateFormat();
		const sampleRateMax = formatSampleRate(1);
		const sampleRateInput = ref("");
		const connectivityTimeoutInput = ref("");
		function syncSampleRateInput() {
			sampleRateInput.value = formatSampleRate(otelStore.settings.tracesSampleRate);
		}
		function syncConnectivityTimeoutInput() {
			connectivityTimeoutInput.value = String(otelStore.settings.startupConnectivityTimeoutMs);
		}
		function parseConnectivityTimeout(text) {
			const trimmed = text.trim();
			if (!trimmed) return null;
			const parsed = Number(trimmed);
			return Number.isFinite(parsed) ? Math.max(0, Math.round(parsed)) : null;
		}
		function commitSampleRate() {
			const parsed = parseSampleRate(sampleRateInput.value);
			if (parsed !== null) otelStore.settings.tracesSampleRate = parsed;
			syncSampleRateInput();
		}
		function commitConnectivityTimeout() {
			const parsed = parseConnectivityTimeout(connectivityTimeoutInput.value);
			if (parsed !== null) otelStore.settings.startupConnectivityTimeoutMs = parsed;
			syncConnectivityTimeoutInput();
		}
		function stepSampleRate(direction) {
			const current = parseSampleRate(sampleRateInput.value) ?? otelStore.settings.tracesSampleRate;
			const next = Math.min(1, Math.max(0, Math.round((current + direction * .01) * 100) / 100));
			otelStore.settings.tracesSampleRate = next;
			syncSampleRateInput();
		}
		function stepConnectivityTimeout(direction) {
			const current = parseConnectivityTimeout(connectivityTimeoutInput.value) ?? otelStore.settings.startupConnectivityTimeoutMs;
			otelStore.settings.startupConnectivityTimeoutMs = Math.max(0, current + direction * 100);
			syncConnectivityTimeoutInput();
		}
		watch(sampleRateInput, (text) => {
			const parsed = parseSampleRate(text);
			if (parsed !== null) otelStore.settings.tracesSampleRate = parsed;
		});
		watch(connectivityTimeoutInput, (text) => {
			const parsed = parseConnectivityTimeout(text);
			if (parsed !== null) otelStore.settings.startupConnectivityTimeoutMs = parsed;
		});
		watch(() => otelStore.settings.tracesSampleRate, (value) => {
			if (parseSampleRate(sampleRateInput.value) !== value) syncSampleRateInput();
		});
		watch(() => otelStore.settings.startupConnectivityTimeoutMs, (value) => {
			if (parseConnectivityTimeout(connectivityTimeoutInput.value) !== value) syncConnectivityTimeoutInput();
		});
		const testTraceSubtitle = computed(() => {
			if (otelStore.testState === "sent") return i18n.baseText("settings.opentelemetry.testTrace.success", { interpolate: {
				spanName: OTEL_TEST_SPAN_NAME,
				time: otelStore.testTimestamp
			} });
			if (otelStore.testState === "error") return i18n.baseText("settings.opentelemetry.testTrace.error", { interpolate: { error: otelStore.testError } });
			return i18n.baseText("settings.opentelemetry.testTrace.description");
		});
		async function onSendTestTrace() {
			await otelStore.sendTestTrace();
		}
		watch(() => [
			otelStore.settings.exporterEndpoint,
			otelStore.settings.exporterTracingPath,
			otelStore.settings.exporterServiceName,
			otelStore.settings.exporterHeaders,
			otelStore.settings.startupConnectivityTimeoutMs
		], () => {
			if (otelStore.testState !== "idle") otelStore.resetTestState();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), { class: normalizeClass(_ctx.$style.layout) }, {
				default: withCtx(() => [
					createVNode(unref(SettingsPageHeader_default), {
						title: unref(i18n).baseText("settings.opentelemetry.title"),
						description: unref(i18n).baseText("settings.opentelemetry.description"),
						"docs-url": OTEL_DOCS_URL
					}, null, 8, ["title", "description"]),
					unref(otelStore).loading ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.loading),
						"data-test-id": "otel-loading"
					}, [createVNode(unref(N8nIcon_default), {
						icon: "spinner",
						spin: ""
					})], 2)) : (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.settingsContent)
					}, [
						createVNode(unref(SettingsSection_default), null, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [createVNode(OtelSettingsRow_default, {
									title: unref(i18n).baseText("settings.opentelemetry.status.label"),
									description: statusDescription.value,
									"env-tooltip": envTooltip("enabled")
								}, {
									action: withCtx(() => [createVNode(OtelStatusControl_default, {
										enabled: unref(otelStore).settings.enabled,
										disabled: isEnvManaged("enabled"),
										loading: statusSaving.value,
										"onUpdate:enabled": onToggleEnabled
									}, null, 8, [
										"enabled",
										"disabled",
										"loading"
									])]),
									_: 1
								}, 8, [
									"title",
									"description",
									"env-tooltip"
								])]),
								_: 1
							})]),
							_: 1
						}),
						createVNode(unref(SettingsSection_default), { title: unref(i18n).baseText("settings.opentelemetry.collectorConnection.title") }, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [
									createVNode(OtelSettingsRow_default, {
										title: unref(i18n).baseText("settings.opentelemetry.exporterEndpoint.label"),
										description: unref(i18n).baseText("settings.opentelemetry.exporterEndpoint.description"),
										"env-tooltip": envTooltip("exporterEndpoint"),
										"action-fill": ""
									}, {
										action: withCtx(() => [createVNode(unref(Input_default), {
											modelValue: unref(otelStore).settings.exporterEndpoint,
											"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(otelStore).settings.exporterEndpoint = $event),
											class: normalizeClass(_ctx.$style.control),
											placeholder: unref(i18n).baseText("settings.opentelemetry.exporterEndpoint.placeholder"),
											disabled: isEnvManaged("exporterEndpoint"),
											"data-test-id": "otel-exporter-endpoint"
										}, null, 8, [
											"modelValue",
											"class",
											"placeholder",
											"disabled"
										])]),
										_: 1
									}, 8, [
										"title",
										"description",
										"env-tooltip"
									]),
									createVNode(OtelSettingsRow_default, {
										title: unref(i18n).baseText("settings.opentelemetry.exporterServiceName.label"),
										description: unref(i18n).baseText("settings.opentelemetry.exporterServiceName.description"),
										"env-tooltip": envTooltip("exporterServiceName"),
										"action-fill": ""
									}, {
										action: withCtx(() => [createVNode(unref(Input_default), {
											modelValue: unref(otelStore).settings.exporterServiceName,
											"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(otelStore).settings.exporterServiceName = $event),
											class: normalizeClass(_ctx.$style.control),
											placeholder: unref(i18n).baseText("settings.opentelemetry.exporterServiceName.placeholder"),
											disabled: isEnvManaged("exporterServiceName"),
											"data-test-id": "otel-service-name"
										}, null, 8, [
											"modelValue",
											"class",
											"placeholder",
											"disabled"
										])]),
										_: 1
									}, 8, [
										"title",
										"description",
										"env-tooltip"
									]),
									createVNode(OtelSettingsRow_default, {
										title: unref(i18n).baseText("settings.opentelemetry.exporterHeaders.label"),
										description: unref(i18n).baseText("settings.opentelemetry.exporterHeaders.description"),
										"env-tooltip": envTooltip("exporterHeaders"),
										layout: "vertical",
										"action-fill": "",
										"action-max-width": false
									}, {
										action: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headersBlock) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(headerPairs.value, (pair, index) => {
											return openBlock(), createElementBlock("div", {
												key: index,
												class: normalizeClass(_ctx.$style.headerRow)
											}, [
												createVNode(unref(N8nInputLabel_default), {
													label: index === 0 ? unref(i18n).baseText("settings.opentelemetry.exporterHeaders.keyLabel") : void 0,
													size: "small"
												}, {
													default: withCtx(() => [createVNode(unref(Input_default), {
														"model-value": pair.key,
														placeholder: unref(i18n).baseText("settings.opentelemetry.exporterHeaders.keyPlaceholder"),
														disabled: isEnvManaged("exporterHeaders"),
														"data-test-id": "otel-header-key",
														"onUpdate:modelValue": (v) => onHeaderChange(index, "key", v)
													}, null, 8, [
														"model-value",
														"placeholder",
														"disabled",
														"onUpdate:modelValue"
													])]),
													_: 2
												}, 1032, ["label"]),
												createVNode(unref(N8nInputLabel_default), {
													label: index === 0 ? unref(i18n).baseText("settings.opentelemetry.exporterHeaders.valueLabel") : void 0,
													size: "small"
												}, {
													default: withCtx(() => [createVNode(unref(Input_default), {
														"model-value": pair.value,
														placeholder: unref(i18n).baseText("settings.opentelemetry.exporterHeaders.valuePlaceholder"),
														disabled: isEnvManaged("exporterHeaders"),
														"data-test-id": "otel-header-value",
														"onUpdate:modelValue": (v) => onHeaderChange(index, "value", v)
													}, null, 8, [
														"model-value",
														"placeholder",
														"disabled",
														"onUpdate:modelValue"
													])]),
													_: 2
												}, 1032, ["label"]),
												createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerRemove) }, [createVNode(unref(N8nButton_default), {
													icon: "trash-2",
													variant: "ghost",
													size: "small",
													"native-type": "button",
													disabled: isEnvManaged("exporterHeaders"),
													"aria-label": unref(i18n).baseText("settings.opentelemetry.exporterHeaders.remove"),
													"data-test-id": "otel-header-remove",
													onClick: withModifiers(($event) => removeHeader(index), ["stop", "prevent"])
												}, null, 8, [
													"disabled",
													"aria-label",
													"onClick"
												])], 2)
											], 2);
										}), 128)), createVNode(unref(N8nButton_default), {
											icon: "plus",
											variant: "subtle",
											size: "small",
											"native-type": "button",
											disabled: isEnvManaged("exporterHeaders"),
											class: normalizeClass(_ctx.$style.addHeaderButton),
											"data-test-id": "otel-header-add",
											onClick: withModifiers(addHeader, ["stop", "prevent"])
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.opentelemetry.exporterHeaders.addHeader")), 1)]),
											_: 1
										}, 8, ["disabled", "class"])], 2)]),
										_: 1
									}, 8, [
										"title",
										"description",
										"env-tooltip"
									]),
									createVNode(OtelSettingsRow_default, {
										title: unref(i18n).baseText("settings.opentelemetry.exporterTracingPath.label"),
										description: unref(i18n).baseText("settings.opentelemetry.exporterTracingPath.description"),
										"env-tooltip": envTooltip("exporterTracingPath"),
										"action-fill": ""
									}, {
										action: withCtx(() => [createVNode(unref(Input_default), {
											modelValue: unref(otelStore).settings.exporterTracingPath,
											"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(otelStore).settings.exporterTracingPath = $event),
											class: normalizeClass(_ctx.$style.control),
											placeholder: unref(i18n).baseText("settings.opentelemetry.exporterTracingPath.placeholder"),
											disabled: isEnvManaged("exporterTracingPath"),
											"data-test-id": "otel-tracing-path"
										}, null, 8, [
											"modelValue",
											"class",
											"placeholder",
											"disabled"
										])]),
										_: 1
									}, 8, [
										"title",
										"description",
										"env-tooltip"
									]),
									createVNode(OtelSettingsRow_default, {
										title: unref(i18n).baseText("settings.opentelemetry.startupConnectivityTimeoutMs.label"),
										description: unref(i18n).baseText("settings.opentelemetry.startupConnectivityTimeoutMs.description"),
										"env-tooltip": envTooltip("startupConnectivityTimeoutMs")
									}, {
										action: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputWithSlug) }, [createVNode(unref(Input_default), {
											modelValue: connectivityTimeoutInput.value,
											"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => connectivityTimeoutInput.value = $event),
											disabled: isEnvManaged("startupConnectivityTimeoutMs"),
											"aria-label": unref(i18n).baseText("settings.opentelemetry.startupConnectivityTimeoutMs.label"),
											"data-test-id": "otel-connectivity-timeout",
											onBlur: commitConnectivityTimeout,
											onKeydown: [
												withKeys(commitConnectivityTimeout, ["enter"]),
												_cache[4] || (_cache[4] = withKeys(withModifiers(($event) => stepConnectivityTimeout(1), ["prevent"]), ["up"])),
												_cache[5] || (_cache[5] = withKeys(withModifiers(($event) => stepConnectivityTimeout(-1), ["prevent"]), ["down"]))
											]
										}, null, 8, [
											"modelValue",
											"disabled",
											"aria-label"
										]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.slug) }, toDisplayString(unref(i18n).baseText("settings.opentelemetry.startupConnectivityTimeoutMs.slug")), 3)], 2)]),
										_: 1
									}, 8, [
										"title",
										"description",
										"env-tooltip"
									]),
									createVNode(OtelSettingsRow_default, {
										title: unref(i18n).baseText("settings.opentelemetry.testTrace.label"),
										description: testTraceSubtitle.value,
										"description-error": unref(otelStore).testState === "error"
									}, {
										action: withCtx(() => [unref(otelStore).testState === "sent" ? (openBlock(), createBlock(unref(N8nButton_default), {
											key: 0,
											variant: "outline",
											icon: "check",
											"native-type": "button",
											"data-test-id": "otel-test-trace-button",
											onClick: withModifiers(onSendTestTrace, ["stop", "prevent"])
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.opentelemetry.testTrace.sent")), 1)]),
											_: 1
										})) : (openBlock(), createBlock(unref(N8nButton_default), {
											key: 1,
											variant: "outline",
											loading: unref(otelStore).testState === "sending",
											disabled: !canTestTrace.value,
											"native-type": "button",
											"data-test-id": "otel-test-trace-button",
											onClick: withModifiers(onSendTestTrace, ["stop", "prevent"])
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(otelStore).testState === "sending" ? unref(i18n).baseText("settings.opentelemetry.testTrace.sending") : unref(i18n).baseText("settings.opentelemetry.testTrace.send")), 1)]),
											_: 1
										}, 8, ["loading", "disabled"]))]),
										_: 1
									}, 8, [
										"title",
										"description",
										"description-error"
									])
								]),
								_: 1
							})]),
							_: 1
						}, 8, ["title"]),
						createVNode(unref(SettingsSection_default), { title: unref(i18n).baseText("settings.opentelemetry.tracing.title") }, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [
									createVNode(OtelSettingsRow_default, {
										title: unref(i18n).baseText("settings.opentelemetry.tracesSampleRate.label"),
										description: unref(i18n).baseText("settings.opentelemetry.tracesSampleRate.description", { interpolate: { max: unref(sampleRateMax) } }),
										"env-tooltip": envTooltip("tracesSampleRate")
									}, {
										action: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputWithSlug) }, [createVNode(unref(Input_default), {
											modelValue: sampleRateInput.value,
											"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => sampleRateInput.value = $event),
											disabled: isEnvManaged("tracesSampleRate"),
											"aria-label": unref(i18n).baseText("settings.opentelemetry.tracesSampleRate.label"),
											"data-test-id": "otel-sample-rate",
											onBlur: commitSampleRate,
											onKeydown: [
												withKeys(commitSampleRate, ["enter"]),
												_cache[7] || (_cache[7] = withKeys(withModifiers(($event) => stepSampleRate(1), ["prevent"]), ["up"])),
												_cache[8] || (_cache[8] = withKeys(withModifiers(($event) => stepSampleRate(-1), ["prevent"]), ["down"]))
											]
										}, null, 8, [
											"modelValue",
											"disabled",
											"aria-label"
										]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.slug) }, toDisplayString(unref(i18n).baseText("settings.opentelemetry.tracesSampleRate.slug", { interpolate: { max: unref(sampleRateMax) } })), 3)], 2)]),
										_: 1
									}, 8, [
										"title",
										"description",
										"env-tooltip"
									]),
									createVNode(OtelSettingsRow_default, {
										title: unref(i18n).baseText("settings.opentelemetry.includeNodeSpans.label"),
										description: unref(i18n).baseText("settings.opentelemetry.includeNodeSpans.description"),
										"env-tooltip": envTooltip("includeNodeSpans")
									}, {
										action: withCtx(() => [createVNode(unref(Checkbox_default), {
											"model-value": unref(otelStore).settings.includeNodeSpans,
											disabled: isEnvManaged("includeNodeSpans"),
											"data-test-id": "otel-include-node-spans",
											"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(otelStore).settings.includeNodeSpans = Boolean($event))
										}, null, 8, ["model-value", "disabled"])]),
										_: 1
									}, 8, [
										"title",
										"description",
										"env-tooltip"
									]),
									createVNode(OtelSettingsRow_default, {
										title: unref(i18n).baseText("settings.opentelemetry.injectOutbound.label"),
										description: unref(i18n).baseText("settings.opentelemetry.injectOutbound.description"),
										"env-tooltip": envTooltip("injectOutbound")
									}, {
										action: withCtx(() => [createVNode(unref(Checkbox_default), {
											"model-value": unref(otelStore).settings.injectOutbound,
											disabled: isEnvManaged("injectOutbound"),
											"data-test-id": "otel-inject-outbound",
											"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(otelStore).settings.injectOutbound = Boolean($event))
										}, null, 8, ["model-value", "disabled"])]),
										_: 1
									}, 8, [
										"title",
										"description",
										"env-tooltip"
									]),
									createVNode(OtelSettingsRow_default, {
										title: unref(i18n).baseText("settings.opentelemetry.productionExecutionsOnly.label"),
										description: unref(i18n).baseText("settings.opentelemetry.productionExecutionsOnly.description"),
										"env-tooltip": envTooltip("productionExecutionsOnly")
									}, {
										action: withCtx(() => [createVNode(unref(Checkbox_default), {
											"model-value": unref(otelStore).settings.productionExecutionsOnly,
											disabled: isEnvManaged("productionExecutionsOnly"),
											"data-test-id": "otel-production-only",
											"onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(otelStore).settings.productionExecutionsOnly = Boolean($event))
										}, null, 8, ["model-value", "disabled"])]),
										_: 1
									}, 8, [
										"title",
										"description",
										"env-tooltip"
									])
								]),
								_: 1
							})]),
							_: 1
						}, 8, ["title"]),
						createVNode(unref(SettingsSaveBar_default), {
							class: normalizeClass(_ctx.$style.saveBar),
							visible: unref(otelStore).isDirty,
							message: unref(i18n).baseText("settings.opentelemetry.unsavedChanges.title"),
							"save-label": unref(i18n).baseText("settings.opentelemetry.save"),
							"discard-label": unref(i18n).baseText("settings.opentelemetry.discard"),
							saving: unref(otelStore).saving,
							floating: "",
							onSave: save,
							onDiscard: discard
						}, null, 8, [
							"class",
							"visible",
							"message",
							"save-label",
							"discard-label",
							"saving"
						])
					], 2)),
					createVNode(unref(Dialog_default), {
						open: showUnsavedChangesDialog.value,
						"onUpdate:open": _cache[12] || (_cache[12] = ($event) => showUnsavedChangesDialog.value = $event),
						header: unref(i18n).baseText("settings.opentelemetry.unsavedChanges.title"),
						description: unref(i18n).baseText("settings.opentelemetry.unsavedChanges.message"),
						size: "medium"
					}, {
						default: withCtx(() => [createBaseVNode("div", _hoisted_1, [createVNode(unref(DialogFooter_default), null, {
							default: withCtx(() => [
								createVNode(unref(DialogClose_default), { "as-child": "" }, {
									default: withCtx(() => [createVNode(unref(N8nButton_default), {
										variant: "outline",
										label: unref(i18n).baseText("settings.opentelemetry.unsavedChanges.cancel"),
										onClick: onKeepEditing
									}, null, 8, ["label"])]),
									_: 1
								}),
								createVNode(unref(N8nButton_default), {
									variant: "outline",
									label: unref(i18n).baseText("settings.opentelemetry.unsavedChanges.leaveWithoutSaving"),
									onClick: onLeaveWithoutSaving
								}, null, 8, ["label"]),
								createVNode(unref(N8nButton_default), {
									variant: "solid",
									label: unref(i18n).baseText("settings.opentelemetry.unsavedChanges.saveAndLeave"),
									loading: unref(otelStore).saving,
									onClick: onSaveAndLeave
								}, null, 8, ["label", "loading"])
							]),
							_: 1
						})])]),
						_: 1
					}, 8, [
						"open",
						"header",
						"description"
					])
				]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var SettingsOpenTelemetryView_vue_vue_type_style_index_0_lang_module_default = {
	layout: "_layout_1yqe3_125",
	settingsContent: "_settingsContent_1yqe3_129",
	saveBar: "_saveBar_1yqe3_135",
	loading: "_loading_1yqe3_143",
	control: "_control_1yqe3_151",
	headersBlock: "_headersBlock_1yqe3_155",
	headerRow: "_headerRow_1yqe3_163",
	headerRemove: "_headerRemove_1yqe3_174",
	addHeaderButton: "_addHeaderButton_1yqe3_182",
	inputWithSlug: "_inputWithSlug_1yqe3_186",
	slug: "_slug_1yqe3_197"
};
var SettingsOpenTelemetryView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsOpenTelemetryView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsOpenTelemetryView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsOpenTelemetryView_default as default };
