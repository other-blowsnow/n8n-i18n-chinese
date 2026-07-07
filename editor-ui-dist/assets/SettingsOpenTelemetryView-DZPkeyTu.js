import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, F as guardReactiveProps, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, rt as renderList, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-BqnE5xyQ.js";
import { Ga as N8nHeading_default, Ja as N8nButton_default, Tt as N8nOption_default, Ui as Input_default, Ya as N8nIcon_default, et as N8nInputNumber_default, ht as onBeforeRouteLeave, qa as N8nText_default, vt as N8nInputLabel_default, wt as N8nSelect_default, yt as Checkbox_default, zi as N8nTooltip_default } from "./src-CSWS3PCK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as ElDialog } from "./dialog-4H__P35x.js";
import { t as useToast } from "./useToast-DB6zPjqx.js";
import { T as defineStore, c as makeRestApiRequest, t as useRootStore } from "./useRootStore-BLAHyASD.js";
import "./settings.store-Bzrrgc0p.js";
import { p as useTelemetry } from "./users.store-D_2YlqZ_.js";
import { t as useDocumentTitle } from "./useDocumentTitle-Cd6twt1Y.js";
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
//#region src/features/settings/otel/SettingsOpenTelemetryView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "pb-2xl" };
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
		function envTooltip(field) {
			return i18n.baseText("settings.opentelemetry.envVarTooltip", { interpolate: { envVar: OTEL_FIELD_ENV_VARS[field] } });
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
		});
		watch(() => otelStore.settings?.exporterHeaders, (newVal) => {
			if (newVal !== headersPairsToString(headerPairs.value)) headerPairs.value = headersStringToPairs(newVal ?? "");
		});
		const canTestTrace = computed(() => !!otelStore.settings.exporterEndpoint && otelStore.testState !== "sending");
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
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.heading) }, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.opentelemetry.title")), 1)]),
					_: 1
				})], 2),
				createBaseVNode("p", { class: normalizeClass(_ctx.$style.description) }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.opentelemetry.description")) + " ", 1), createBaseVNode("a", {
					class: normalizeClass(_ctx.$style.docsLink),
					href: "https://docs.n8n.io/hosting/logging-monitoring/opentelemetry/",
					target: "_blank"
				}, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.opentelemetry.docsLink")), 1), createVNode(unref(N8nIcon_default), {
					icon: "arrow-up-right",
					size: "xsmall"
				})], 2)], 2),
				unref(otelStore).loading ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loading),
					"data-test-id": "otel-loading"
				}, [createVNode(unref(N8nIcon_default), {
					icon: "spinner",
					spin: ""
				})], 2)) : createCommentVNode("", true),
				!unref(otelStore).loading ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.card) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItem) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemLabel) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.labelRow) }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.enable.label")), 1), createVNode(unref(N8nTooltip_default), {
						placement: "top",
						"content-class": "otel-tooltip",
						content: envTooltip("enabled")
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "circle-help",
							size: "small"
						})]),
						_: 1
					}, 8, ["content"])], 2), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.enable.description")), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemControl) }, [(openBlock(), createBlock(resolveDynamicComponent(isEnvManaged("enabled") ? unref(N8nTooltip_default) : "span"), normalizeProps(guardReactiveProps(isEnvManaged("enabled") ? { content: unref(i18n).baseText("settings.opentelemetry.envVarManagedTooltip") } : {})), {
						default: withCtx(() => [createVNode(unref(N8nSelect_default), {
							"model-value": unref(otelStore).settings.enabled ? "enabled" : "disabled",
							size: "medium",
							"data-test-id": "otel-enabled-toggle",
							disabled: isEnvManaged("enabled"),
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(otelStore).settings.enabled = $event === "enabled")
						}, {
							prefix: withCtx(() => [unref(otelStore).settings.enabled ? (openBlock(), createElementBlock("span", {
								key: 0,
								class: normalizeClass(_ctx.$style.greenDot)
							}, null, 2)) : createCommentVNode("", true)]),
							default: withCtx(() => [createVNode(unref(N8nOption_default), {
								value: "enabled",
								label: unref(i18n).baseText("settings.opentelemetry.enable.option.enabled")
							}, null, 8, ["label"]), createVNode(unref(N8nOption_default), {
								value: "disabled",
								label: unref(i18n).baseText("settings.opentelemetry.enable.option.disabled")
							}, null, 8, ["label"])]),
							_: 1
						}, 8, ["model-value", "disabled"])]),
						_: 1
					}, 16))], 2)], 2)], 2),
					createVNode(unref(N8nHeading_default), {
						tag: "h2",
						size: "medium",
						class: normalizeClass(_ctx.$style.sectionHeading)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.opentelemetry.collectorConnection.title")), 1)]),
						_: 1
					}, 8, ["class"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.card) }, [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItem) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemLabel) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.labelRow) }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.exporterEndpoint.label")), 1), createVNode(unref(N8nTooltip_default), {
							placement: "top",
							"content-class": "otel-tooltip",
							content: envTooltip("exporterEndpoint")
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "circle-help",
								size: "small"
							})]),
							_: 1
						}, 8, ["content"])], 2), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.exporterEndpoint.description")), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemControl) }, [(openBlock(), createBlock(resolveDynamicComponent(isEnvManaged("exporterEndpoint") ? unref(N8nTooltip_default) : "span"), normalizeProps(guardReactiveProps(isEnvManaged("exporterEndpoint") ? { content: unref(i18n).baseText("settings.opentelemetry.envVarManagedTooltip") } : {})), {
							default: withCtx(() => [createVNode(unref(Input_default), {
								modelValue: unref(otelStore).settings.exporterEndpoint,
								"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(otelStore).settings.exporterEndpoint = $event),
								placeholder: unref(i18n).baseText("settings.opentelemetry.exporterEndpoint.placeholder"),
								disabled: isEnvManaged("exporterEndpoint"),
								"data-test-id": "otel-exporter-endpoint"
							}, null, 8, [
								"modelValue",
								"placeholder",
								"disabled"
							])]),
							_: 1
						}, 16))], 2)], 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItem) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemLabel) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.labelRow) }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.exporterServiceName.label")), 1), createVNode(unref(N8nTooltip_default), {
							placement: "top",
							"content-class": "otel-tooltip",
							content: envTooltip("exporterServiceName")
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "circle-help",
								size: "small"
							})]),
							_: 1
						}, 8, ["content"])], 2), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.exporterServiceName.description")), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemControl) }, [(openBlock(), createBlock(resolveDynamicComponent(isEnvManaged("exporterServiceName") ? unref(N8nTooltip_default) : "span"), normalizeProps(guardReactiveProps(isEnvManaged("exporterServiceName") ? { content: unref(i18n).baseText("settings.opentelemetry.envVarManagedTooltip") } : {})), {
							default: withCtx(() => [createVNode(unref(Input_default), {
								modelValue: unref(otelStore).settings.exporterServiceName,
								"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(otelStore).settings.exporterServiceName = $event),
								placeholder: unref(i18n).baseText("settings.opentelemetry.exporterServiceName.placeholder"),
								disabled: isEnvManaged("exporterServiceName"),
								"data-test-id": "otel-service-name"
							}, null, 8, [
								"modelValue",
								"placeholder",
								"disabled"
							])]),
							_: 1
						}, 16))], 2)], 2),
						createBaseVNode("div", { class: normalizeClass([_ctx.$style.settingsItem, _ctx.$style.settingsItemVertical]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemLabel) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.labelRow) }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.exporterHeaders.label")), 1), createVNode(unref(N8nTooltip_default), {
							placement: "top",
							"content-class": "otel-tooltip",
							content: envTooltip("exporterHeaders")
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "circle-help",
								size: "small"
							})]),
							_: 1
						}, 8, ["content"])], 2), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.exporterHeaders.description")), 1)], 2), (openBlock(), createBlock(resolveDynamicComponent(isEnvManaged("exporterHeaders") ? unref(N8nTooltip_default) : "span"), normalizeProps(guardReactiveProps(isEnvManaged("exporterHeaders") ? { content: unref(i18n).baseText("settings.opentelemetry.envVarManagedTooltip") } : {})), {
							default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headersBlock) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(headerPairs.value, (pair, index) => {
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
								class: "mt-2xs",
								"data-test-id": "otel-header-add",
								onClick: withModifiers(addHeader, ["stop", "prevent"])
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.opentelemetry.exporterHeaders.addHeader")), 1)]),
								_: 1
							}, 8, ["disabled"])], 2)]),
							_: 1
						}, 16))], 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItem) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemLabel) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.labelRow) }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.exporterTracingPath.label")), 1), createVNode(unref(N8nTooltip_default), {
							placement: "top",
							"content-class": "otel-tooltip",
							content: envTooltip("exporterTracingPath")
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "circle-help",
								size: "small"
							})]),
							_: 1
						}, 8, ["content"])], 2), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.exporterTracingPath.description")), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemControl) }, [(openBlock(), createBlock(resolveDynamicComponent(isEnvManaged("exporterTracingPath") ? unref(N8nTooltip_default) : "span"), normalizeProps(guardReactiveProps(isEnvManaged("exporterTracingPath") ? { content: unref(i18n).baseText("settings.opentelemetry.envVarManagedTooltip") } : {})), {
							default: withCtx(() => [createVNode(unref(Input_default), {
								modelValue: unref(otelStore).settings.exporterTracingPath,
								"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(otelStore).settings.exporterTracingPath = $event),
								placeholder: unref(i18n).baseText("settings.opentelemetry.exporterTracingPath.placeholder"),
								disabled: isEnvManaged("exporterTracingPath"),
								"data-test-id": "otel-tracing-path"
							}, null, 8, [
								"modelValue",
								"placeholder",
								"disabled"
							])]),
							_: 1
						}, 16))], 2)], 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItem) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemLabel) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.labelRow) }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.startupConnectivityTimeoutMs.label")), 1), createVNode(unref(N8nTooltip_default), {
							placement: "top",
							"content-class": "otel-tooltip",
							content: envTooltip("startupConnectivityTimeoutMs")
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "circle-help",
								size: "small"
							})]),
							_: 1
						}, 8, ["content"])], 2), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.startupConnectivityTimeoutMs.description")), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemControl) }, [(openBlock(), createBlock(resolveDynamicComponent(isEnvManaged("startupConnectivityTimeoutMs") ? unref(N8nTooltip_default) : "span"), normalizeProps(guardReactiveProps(isEnvManaged("startupConnectivityTimeoutMs") ? { content: unref(i18n).baseText("settings.opentelemetry.envVarManagedTooltip") } : {})), {
							default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputWithSlug) }, [createVNode(unref(N8nInputNumber_default), {
								"model-value": unref(otelStore).settings.startupConnectivityTimeoutMs,
								min: 0,
								step: 100,
								controls: false,
								disabled: isEnvManaged("startupConnectivityTimeoutMs"),
								"data-test-id": "otel-connectivity-timeout",
								"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(otelStore).settings.startupConnectivityTimeoutMs = Number($event))
							}, null, 8, ["model-value", "disabled"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.slug) }, toDisplayString(unref(i18n).baseText("settings.opentelemetry.startupConnectivityTimeoutMs.slug")), 3)], 2)]),
							_: 1
						}, 16))], 2)], 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItem) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemLabel) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.labelRow) }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.testTrace.label")), 1)], 2), createBaseVNode("small", { class: normalizeClass({ [_ctx.$style.testError]: unref(otelStore).testState === "error" }) }, toDisplayString(testTraceSubtitle.value), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemControl) }, [unref(otelStore).testState === "sent" ? (openBlock(), createBlock(unref(N8nButton_default), {
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
						}, 8, ["loading", "disabled"]))], 2)], 2)
					], 2),
					createVNode(unref(N8nHeading_default), {
						tag: "h2",
						size: "medium",
						class: normalizeClass(_ctx.$style.sectionHeading)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.opentelemetry.tracing.title")), 1)]),
						_: 1
					}, 8, ["class"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.card) }, [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItem) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemLabel) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.labelRow) }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.tracesSampleRate.label")), 1), createVNode(unref(N8nTooltip_default), {
							placement: "top",
							"content-class": "otel-tooltip",
							content: envTooltip("tracesSampleRate")
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "circle-help",
								size: "small"
							})]),
							_: 1
						}, 8, ["content"])], 2), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.tracesSampleRate.description")), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemControl) }, [(openBlock(), createBlock(resolveDynamicComponent(isEnvManaged("tracesSampleRate") ? unref(N8nTooltip_default) : "span"), normalizeProps(guardReactiveProps(isEnvManaged("tracesSampleRate") ? { content: unref(i18n).baseText("settings.opentelemetry.envVarManagedTooltip") } : {})), {
							default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputWithSlug) }, [createVNode(unref(N8nInputNumber_default), {
								"model-value": unref(otelStore).settings.tracesSampleRate,
								min: 0,
								max: 1,
								step: .01,
								precision: 2,
								controls: false,
								disabled: isEnvManaged("tracesSampleRate"),
								"data-test-id": "otel-sample-rate",
								"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(otelStore).settings.tracesSampleRate = Number($event))
							}, null, 8, ["model-value", "disabled"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.slug) }, toDisplayString(unref(i18n).baseText("settings.opentelemetry.tracesSampleRate.slug")), 3)], 2)]),
							_: 1
						}, 16))], 2)], 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItem) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemLabel) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.labelRow) }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.includeNodeSpans.label")), 1), createVNode(unref(N8nTooltip_default), {
							placement: "top",
							"content-class": "otel-tooltip",
							content: envTooltip("includeNodeSpans")
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "circle-help",
								size: "small"
							})]),
							_: 1
						}, 8, ["content"])], 2), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.includeNodeSpans.description")), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemControl) }, [(openBlock(), createBlock(resolveDynamicComponent(isEnvManaged("includeNodeSpans") ? unref(N8nTooltip_default) : "span"), normalizeProps(guardReactiveProps(isEnvManaged("includeNodeSpans") ? { content: unref(i18n).baseText("settings.opentelemetry.envVarManagedTooltip") } : {})), {
							default: withCtx(() => [createVNode(unref(Checkbox_default), {
								"model-value": unref(otelStore).settings.includeNodeSpans,
								disabled: isEnvManaged("includeNodeSpans"),
								"data-test-id": "otel-include-node-spans",
								"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(otelStore).settings.includeNodeSpans = Boolean($event))
							}, null, 8, ["model-value", "disabled"])]),
							_: 1
						}, 16))], 2)], 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItem) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemLabel) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.labelRow) }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.injectOutbound.label")), 1), createVNode(unref(N8nTooltip_default), {
							placement: "top",
							"content-class": "otel-tooltip",
							content: envTooltip("injectOutbound")
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "circle-help",
								size: "small"
							})]),
							_: 1
						}, 8, ["content"])], 2), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.injectOutbound.description")), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemControl) }, [(openBlock(), createBlock(resolveDynamicComponent(isEnvManaged("injectOutbound") ? unref(N8nTooltip_default) : "span"), normalizeProps(guardReactiveProps(isEnvManaged("injectOutbound") ? { content: unref(i18n).baseText("settings.opentelemetry.envVarManagedTooltip") } : {})), {
							default: withCtx(() => [createVNode(unref(Checkbox_default), {
								"model-value": unref(otelStore).settings.injectOutbound,
								disabled: isEnvManaged("injectOutbound"),
								"data-test-id": "otel-inject-outbound",
								"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(otelStore).settings.injectOutbound = Boolean($event))
							}, null, 8, ["model-value", "disabled"])]),
							_: 1
						}, 16))], 2)], 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItem) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemLabel) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.labelRow) }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.productionExecutionsOnly.label")), 1), createVNode(unref(N8nTooltip_default), {
							placement: "top",
							"content-class": "otel-tooltip",
							content: envTooltip("productionExecutionsOnly")
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "circle-help",
								size: "small"
							})]),
							_: 1
						}, 8, ["content"])], 2), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.opentelemetry.productionExecutionsOnly.description")), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemControl) }, [(openBlock(), createBlock(resolveDynamicComponent(isEnvManaged("productionExecutionsOnly") ? unref(N8nTooltip_default) : "span"), normalizeProps(guardReactiveProps(isEnvManaged("productionExecutionsOnly") ? { content: unref(i18n).baseText("settings.opentelemetry.envVarManagedTooltip") } : {})), {
							default: withCtx(() => [createVNode(unref(Checkbox_default), {
								"model-value": unref(otelStore).settings.productionExecutionsOnly,
								disabled: isEnvManaged("productionExecutionsOnly"),
								"data-test-id": "otel-production-only",
								"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(otelStore).settings.productionExecutionsOnly = Boolean($event))
							}, null, 8, ["model-value", "disabled"])]),
							_: 1
						}, 16))], 2)], 2)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
						label: unref(i18n).baseText("settings.opentelemetry.save"),
						loading: unref(otelStore).saving,
						disabled: !unref(otelStore).isDirty,
						size: "large",
						"data-test-id": "otel-save-button",
						onClick: save
					}, null, 8, [
						"label",
						"loading",
						"disabled"
					]), createVNode(unref(N8nButton_default), {
						variant: "outline",
						label: unref(i18n).baseText("settings.opentelemetry.discard"),
						disabled: !unref(otelStore).isDirty || unref(otelStore).saving,
						size: "large",
						"data-test-id": "otel-discard-button",
						onClick: discard
					}, null, 8, ["label", "disabled"])], 2)
				], 64)) : createCommentVNode("", true),
				createVNode(unref(ElDialog), {
					modelValue: showUnsavedChangesDialog.value,
					"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => showUnsavedChangesDialog.value = $event),
					title: unref(i18n).baseText("settings.opentelemetry.unsavedChanges.title"),
					width: "500",
					"data-test-id": "otel-unsaved-changes-dialog"
				}, {
					footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.dialogFooter) }, [
						createVNode(unref(N8nButton_default), {
							variant: "ghost",
							onClick: onKeepEditing
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.opentelemetry.unsavedChanges.cancel")), 1)]),
							_: 1
						}),
						createVNode(unref(N8nButton_default), {
							variant: "outline",
							onClick: onLeaveWithoutSaving
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.opentelemetry.unsavedChanges.leaveWithoutSaving")), 1)]),
							_: 1
						}),
						createVNode(unref(N8nButton_default), {
							type: "primary",
							onClick: onSaveAndLeave
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.opentelemetry.unsavedChanges.saveAndLeave")), 1)]),
							_: 1
						})
					], 2)]),
					default: withCtx(() => [createVNode(unref(N8nText_default), null, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.opentelemetry.unsavedChanges.message")), 1)]),
						_: 1
					})]),
					_: 1
				}, 8, ["modelValue", "title"])
			]);
		};
	}
});
var SettingsOpenTelemetryView_vue_vue_type_style_index_0_lang_module_default = {
	heading: "_heading_1owyb_125",
	description: "_description_1owyb_129",
	docsLink: "_docsLink_1owyb_136",
	loading: "_loading_1owyb_147",
	sectionHeading: "_sectionHeading_1owyb_155",
	card: "_card_1owyb_160",
	settingsItem: "_settingsItem_1owyb_168",
	settingsItemVertical: "_settingsItemVertical_1owyb_181",
	settingsItemLabel: "_settingsItemLabel_1owyb_187",
	labelRow: "_labelRow_1owyb_214",
	slug: "_slug_1owyb_221",
	settingsItemControl: "_settingsItemControl_1owyb_235",
	inputWithSlug: "_inputWithSlug_1owyb_241",
	headersBlock: "_headersBlock_1owyb_251",
	headerRow: "_headerRow_1owyb_257",
	headerRemove: "_headerRemove_1owyb_271",
	testError: "_testError_1owyb_279",
	greenDot: "_greenDot_1owyb_283",
	footer: "_footer_1owyb_292",
	dialogFooter: "_dialogFooter_1owyb_299"
};
var SettingsOpenTelemetryView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsOpenTelemetryView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsOpenTelemetryView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsOpenTelemetryView_default as default };
