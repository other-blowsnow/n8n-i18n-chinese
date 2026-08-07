import { $ as openBlock, A as createTextVNode, Bt as toRaw, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, N as defineComponent, O as createSlots, Pt as reactive, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, dt as useModel, gt as watch, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { v as i18n, x as useI18n } from "./_MapCache-AzCpuecL.js";
import { $ as SettingsRowGroup_default, Ai as N8nText_default, At as N8nEmptyState_default, B as N8nSwitch_default, Et as N8nInputLabel_default, Ii as N8nButton_default, It as N8nOption_default, Li as N8nIcon_default, Pi as Input_default, Pt as N8nSelect_default, Z as SettingsSection_default, _ as DialogHeader_default, _r as N8nBadge_default, d as useMessage, dt as PreviewTag_default, en as DropdownMenu_default, et as SettingsRowConfigure_default, g as DialogTitle_default, h as Dialog_default, m as DialogFooter_default, nn as N8nLoading_default, nt as SettingsPageHeader_default, rt as SettingsLayout_default, tt as SettingsRow_default, v as DialogDescription_default } from "./src-DidBXlm8.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { _ as useRouter } from "./htmlUtils-y-zflQYZ.js";
import { T as provideWorkflowDocumentStore, vt as useCredentialsStore } from "./workflows.store-DDm0zgUM.js";
import { Ea as INSTANCE_AI_SEARCH_CREDENTIAL_TYPES, Rt as DOMAIN_RESTRICTION_FIELDS, Sr as displayParameter, Ta as INSTANCE_AI_MODEL_CREDENTIAL_TYPES } from "./src-D4ZcEdLA.js";
import { t as useSettingsStore } from "./settings.store-MdDUJyUn.js";
import "./settings.store-xTAm7xED.js";
import "./constants-CJQKNI-b.js";
import { t as VIEWS } from "./views-4JHVC4Nc.js";
import { t as useDocumentTitle } from "./useDocumentTitle-3grEV59C.js";
import "./useMessage-BM1tQLP7.js";
import { r as Banner_default, t as CredentialInputs_default } from "./CredentialInputs-DiQErjTr.js";
import { d as SANDBOX_PROVIDER_LABELS } from "./constants-IsCxc_jb.js";
import { t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-BNvF4w50.js";
import { n as useInstanceAiComputerUseExperiment, r as useInstanceAiMcpConnectionsExperiment, t as useInstanceAiBrowserUseExperiment } from "./instanceAiBrowserUse-BU-rgIzn.js";
import { t as useCredentialTestInBackground } from "./useCredentialTestInBackground-DOEGcFyf.js";
import { t as useLatestFetch } from "./useLatestFetch-BXbo8MiZ.js";
//#region src/features/ai/instanceAi/composables/useInstanceCredentialTest.ts
var genericError = () => i18n.baseText("instanceAi.workflowSetup.credentialTestFailedTooltip");
function useInstanceCredentialTest() {
	const credentialsStore = useCredentialsStore();
	const { isCredentialTypeTestable } = useCredentialTestInBackground();
	const credentialTestError = ref("");
	const isTestingCredential = ref(false);
	function hasRequiredData(credentials) {
		const data = credentials.data ?? {};
		return (credentialsStore.getCredentialTypeByName(credentials.type)?.properties ?? []).every((property) => {
			if (!property.required || !displayParameter(data, property, null, null)) return true;
			const value = data[property.name];
			return (typeof value === "string" ? value.trim().length > 0 : value !== null && value !== void 0) || property.default !== void 0 && property.default !== "";
		});
	}
	async function runCredentialTest(credentials) {
		const result = await credentialsStore.testCredential(credentials);
		if (result.status === "OK") return true;
		credentialTestError.value = result.message || genericError();
		return false;
	}
	async function testCredential(credentials) {
		credentialTestError.value = "";
		if (!isCredentialTypeTestable(credentials.type)) {
			const isValid = hasRequiredData(credentials);
			if (!isValid) credentialTestError.value = genericError();
			return isValid;
		}
		isTestingCredential.value = true;
		try {
			return await runCredentialTest(credentials);
		} catch {
			credentialTestError.value = genericError();
			return false;
		} finally {
			isTestingCredential.value = false;
		}
	}
	async function testSavedCredential(id, name, type) {
		if (!isCredentialTypeTestable(type)) return true;
		credentialTestError.value = "";
		isTestingCredential.value = true;
		try {
			const credential = await credentialsStore.getCredentialData({ id });
			const credentialData = credential && "data" in credential ? credential.data : void 0;
			if (!credentialData || typeof credentialData === "string") throw new Error();
			const { ownedBy: _ownedBy, sharedWithProjects: _sharedWithProjects, oauthTokenData, ...data } = credentialData;
			if (oauthTokenData) {
				credentialsStore.credentialTestResults.set(id, "success");
				return true;
			}
			return await runCredentialTest({
				id,
				name,
				type,
				data
			});
		} catch {
			credentialsStore.credentialTestResults.set(id, "error");
			credentialTestError.value = genericError();
			return false;
		} finally {
			isTestingCredential.value = false;
		}
	}
	/** Resurfaces a failure recorded for this credential by any prior testSavedCredential run. */
	function restoreStoredError(id) {
		credentialTestError.value = id && credentialsStore.credentialTestResults.get(id) === "error" ? genericError() : "";
	}
	return {
		credentialTestError,
		isTestingCredential,
		testCredential,
		testSavedCredential,
		restoreStoredError
	};
}
//#endregion
//#region src/features/ai/instanceAi/composables/useInstanceAiSetupSteps.ts
/** Step labels for the setup wizard; the optional search step drops off when already configured. */
function useInstanceAiSetupSteps(step) {
	const i18n = useI18n();
	const store = useInstanceAiSettingsStore();
	const totalSteps = computed(() => store.settings?.searchCredentialId ?? store.settings?.searchEnvConfigured ? 2 : 3);
	return {
		stepLabel: computed(() => i18n.baseText("settings.n8nAgent.setup.step", { interpolate: {
			step,
			total: totalSteps.value
		} })),
		isLastStep: computed(() => step >= totalSteps.value)
	};
}
//#endregion
//#region src/features/ai/instanceAi/components/settings/ConnectionFields.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["disabled"];
var ConnectionFields_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ConnectionFields",
	props: {
		credentialType: {},
		data: {},
		disabled: { type: Boolean }
	},
	emits: ["update"],
	setup(__props, { emit: __emit }) {
		const HIDDEN_FIELDS = new Set([
			...DOMAIN_RESTRICTION_FIELDS.map((field) => field.name),
			"organizationId",
			"header",
			"headerName",
			"headerValue"
		]);
		const props = __props;
		const emit = __emit;
		const credentialsStore = useCredentialsStore();
		const type = computed(() => credentialsStore.getCredentialTypeByName(props.credentialType));
		const properties = computed(() => (type.value?.properties ?? []).filter((property) => !HIDDEN_FIELDS.has(property.name)));
		function onUpdate(parameterData) {
			emit("update", parameterData.name, parameterData.value);
		}
		return (_ctx, _cache) => {
			return properties.value.length ? (openBlock(), createElementBlock("fieldset", {
				key: 0,
				disabled: __props.disabled,
				class: normalizeClass(_ctx.$style.fieldset)
			}, [createVNode(CredentialInputs_default, {
				"credential-properties": properties.value,
				"credential-data": __props.data,
				"documentation-url": type.value?.documentationUrl ?? "",
				onUpdate
			}, null, 8, [
				"credential-properties",
				"credential-data",
				"documentation-url"
			])], 10, _hoisted_1)) : createCommentVNode("", true);
		};
	}
});
var ConnectionFields_vue_vue_type_style_index_0_lang_module_default = { fieldset: "_fieldset_adc24_2" };
var ConnectionFields_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ConnectionFields_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConnectionFields_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/settings/ConnectionDialog.vue?vue&type=script&setup=true&lang.ts
var DAYTONA_DEFAULT_API_URL = "https://app.daytona.io/api";
var N8N_SANDBOX_HEADER = "x-api-key";
var DEFAULT_SEARCH_TYPE = "searXngApi";
var ConnectionDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ConnectionDialog",
	props: /* @__PURE__ */ mergeModels({
		kind: {},
		setup: {
			type: Boolean,
			default: false
		}
	}, {
		"open": {
			type: Boolean,
			required: true
		},
		"openModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["saved", "back"], ["update:open"]),
	setup(__props, { emit: __emit }) {
		const SANDBOX_CREDENTIAL_TYPES = ["daytonaApi", "httpHeaderAuth"];
		const SETUP_STEP = {
			model: 1,
			sandbox: 2,
			search: 3
		};
		const open = useModel(__props, "open");
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const store = useInstanceAiSettingsStore();
		const credentialsStore = useCredentialsStore();
		const readOnly = computed(() => !store.canManageInstanceCredentials);
		const { credentialTestError, isTestingCredential, testCredential, testSavedCredential, restoreStoredError } = useInstanceCredentialTest();
		const { stepLabel, isLastStep } = useInstanceAiSetupSteps(SETUP_STEP[props.kind]);
		provideWorkflowDocumentStore();
		/** For 'sandbox' the selection is a provider ('daytona' | 'n8n-sandbox'); otherwise a credential type. */
		const selection = ref("");
		const selectedCredentialId = ref("");
		const selectingExistingCredential = ref(false);
		const fieldsData = ref({});
		/** The one extra input a kind may have: the model name (model) or the API key (n8n sandbox). */
		const extraValue = ref("");
		const isLoading = ref(false);
		const { next: nextHydration } = useLatestFetch();
		let hydratedSelection = "";
		let hydratedData = {};
		let hydratedExtra = "";
		let hydratedSnapshot = "";
		const usingExisting = computed(() => readOnly.value || selectingExistingCredential.value);
		const isProxyDaytonaSelection = computed(() => props.kind === "sandbox" && store.isProxyEnabled && selection.value === "daytona" && !usingExisting.value);
		function credentialTypeLabel(type) {
			return credentialsStore.getCredentialTypeByName(type)?.displayName ?? type;
		}
		const copy = {
			model: {
				idPrefix: "n8n-agent-model",
				titleKey: "settings.n8nAgent.modelDialog.title",
				setupTitleKey: "settings.n8nAgent.modelDialog.setupTitle",
				descriptionKey: "settings.n8nAgent.modelDialog.description",
				setupDescriptionKey: "settings.n8nAgent.modelDialog.setupDescription",
				fieldLabelKey: "settings.n8nAgent.modelCredential.field",
				placeholderKey: "settings.n8nAgent.modelCredential.placeholder",
				footnoteKey: "settings.n8nAgent.modelDialog.footnote",
				testName: "AI Assistant model"
			},
			sandbox: {
				idPrefix: "n8n-agent-sandbox",
				titleKey: "settings.n8nAgent.sandboxDialog.title",
				setupTitleKey: "settings.n8nAgent.sandboxDialog.setupTitle",
				descriptionKey: "settings.n8nAgent.sandboxDialog.description",
				fieldLabelKey: "settings.n8nAgent.sandboxDialog.provider",
				providerHintKey: "settings.n8nAgent.sandboxDialog.providerHint",
				testName: "AI Assistant sandbox"
			},
			search: {
				idPrefix: "n8n-agent-search",
				titleKey: "settings.n8nAgent.searchDialog.title",
				setupTitleKey: "settings.n8nAgent.searchDialog.setupTitle",
				descriptionKey: "settings.n8nAgent.searchDialog.description",
				fieldLabelKey: "settings.n8nAgent.searchCredential.label",
				placeholderKey: "settings.n8nAgent.searchCredential.placeholder",
				testName: "AI Assistant web search"
			}
		}[props.kind];
		function environmentConfigured() {
			if (props.kind === "model") return Boolean(store.settings?.modelEnvConfigured);
			if (props.kind === "sandbox") return Boolean(store.settings?.sandboxEnvConfigured);
			return Boolean(store.settings?.searchEnvConfigured);
		}
		function getAssignedId() {
			if (props.kind === "model") return store.settings?.modelCredentialId ?? null;
			if (props.kind === "sandbox") return store.settings?.sandboxProvider === "daytona" ? store.settings?.daytonaCredentialId ?? null : store.settings?.n8nSandboxCredentialId ?? null;
			return store.settings?.searchCredentialId ?? null;
		}
		function getAssignedSelection() {
			if (props.kind === "sandbox") return getAssignedId() ? store.settings?.sandboxProvider ?? "" : "";
			return (props.kind === "model" ? store.instanceModelCredentials : store.serviceCredentials).find(({ id }) => id === getAssignedId())?.type ?? "";
		}
		function getDefaultSelection() {
			if (props.kind === "model") return "";
			if (props.kind === "sandbox") return store.settings?.sandboxEnvConfigured ? "" : store.settings?.sandboxProvider ?? "";
			return store.settings?.searchEnvConfigured ? "" : DEFAULT_SEARCH_TYPE;
		}
		function getProviderOptions() {
			if (props.kind === "sandbox") return [{
				value: "daytona",
				label: SANDBOX_PROVIDER_LABELS.daytona
			}, {
				value: "n8n-sandbox",
				label: SANDBOX_PROVIDER_LABELS["n8n-sandbox"]
			}];
			return (props.kind === "model" ? INSTANCE_AI_MODEL_CREDENTIAL_TYPES : INSTANCE_AI_SEARCH_CREDENTIAL_TYPES).map((type) => ({
				value: type,
				label: credentialTypeLabel(type)
			}));
		}
		function getExistingCredentials() {
			if (props.kind === "model") return store.instanceModelCredentials;
			const allowedTypes = props.kind === "sandbox" ? SANDBOX_CREDENTIAL_TYPES : INSTANCE_AI_SEARCH_CREDENTIAL_TYPES;
			return store.serviceCredentials.filter(({ type }) => allowedTypes.some((allowed) => allowed === type));
		}
		function existingCredentialLabel(credential) {
			const detail = props.kind === "sandbox" ? SANDBOX_PROVIDER_LABELS[credential.type === "daytonaApi" ? "daytona" : "n8n-sandbox"] : credentialTypeLabel(credential.type);
			return `${credential.name} · ${detail}`;
		}
		function selectionForCredential(credential) {
			if (props.kind !== "sandbox") return credential.type;
			return credential.type === "daytonaApi" ? "daytona" : "n8n-sandbox";
		}
		function credentialTypeFor(selected) {
			if (props.kind !== "sandbox") return selected;
			return selected === "daytona" ? "daytonaApi" : "httpHeaderAuth";
		}
		function seedData(selected) {
			return props.kind === "sandbox" && selected === "daytona" ? { apiUrl: DAYTONA_DEFAULT_API_URL } : {};
		}
		function applyLoadedData(data) {
			if (props.kind === "sandbox" && selection.value === "n8n-sandbox") {
				extraValue.value = typeof data.value === "string" ? data.value : "";
				return;
			}
			fieldsData.value = data;
		}
		function newConnectionIsComplete(selected) {
			if (props.kind === "model") return true;
			if (props.kind === "sandbox") {
				if (selected === "n8n-sandbox") return extraValue.value.trim().length > 0;
				if (isProxyDaytonaSelection.value) return true;
				return typeof fieldsData.value.apiUrl === "string" && fieldsData.value.apiUrl.trim().length > 0 && typeof fieldsData.value.apiKey === "string" && fieldsData.value.apiKey.trim().length > 0;
			}
			const field = selected === "braveSearchApi" ? "apiKey" : "apiUrl";
			const value = fieldsData.value[field];
			return typeof value === "string" && value.trim().length > 0;
		}
		function buildConnectionData() {
			if (props.kind === "sandbox" && selection.value === "n8n-sandbox") return {
				name: N8N_SANDBOX_HEADER,
				value: extraValue.value.trim()
			};
			return { ...toRaw(fieldsData.value) };
		}
		function stageExisting() {
			if (props.kind === "model") {
				store.setField("modelCredentialId", selectedCredentialId.value || null);
				store.setField("modelName", selectedCredentialId.value ? extraValue.value.trim() : void 0);
				return;
			}
			if (props.kind === "search") {
				store.setField("searchCredentialId", selectedCredentialId.value || null);
				return;
			}
			store.setField("daytonaCredentialId", selection.value === "daytona" ? selectedCredentialId.value : null);
			store.setField("n8nSandboxCredentialId", selection.value === "n8n-sandbox" ? selectedCredentialId.value : null);
			if (selection.value === "daytona" || selection.value === "n8n-sandbox") store.setField("sandboxProvider", selection.value);
		}
		function stageNew(connectionData) {
			if (props.kind === "model") {
				store.setField("modelConnection", {
					type: selection.value,
					data: connectionData
				});
				store.setField("modelName", extraValue.value.trim());
				return;
			}
			if (props.kind === "sandbox") {
				if (isProxyDaytonaSelection.value) {
					store.setField("sandboxProvider", "daytona");
					return;
				}
				store.setField("sandboxConnection", {
					type: credentialTypeFor(selection.value),
					data: connectionData
				});
				return;
			}
			store.setField("searchConnection", {
				type: selection.value,
				data: connectionData
			});
		}
		function stageClear() {
			if (props.kind === "model") {
				store.setField("modelConnection", null);
				store.setField("modelName", void 0);
			} else if (props.kind === "sandbox") store.setField("sandboxConnection", null);
			else store.setField("searchConnection", null);
		}
		async function refreshCredentials() {
			isLoading.value = true;
			try {
				if (props.kind === "model") await store.refreshInstanceModelCredentials();
				else await store.refreshCredentials();
			} finally {
				isLoading.value = false;
			}
		}
		const assignedId = computed(getAssignedId);
		const hasSelection = computed(() => usingExisting.value ? selectedCredentialId.value : selection.value);
		const providerOptions = computed(getProviderOptions);
		const existingOptions = computed(getExistingCredentials);
		const noneLabel = computed(() => environmentConfigured() ? i18n.baseText("settings.n8nAgent.connection.none") : i18n.baseText("settings.n8nAgent.connection.noneNoEnv"));
		function snapshot() {
			return JSON.stringify({
				c: usingExisting.value ? selectedCredentialId.value : "",
				e: selectingExistingCredential.value,
				s: selection.value,
				d: fieldsData.value,
				x: extraValue.value
			});
		}
		async function hydrate() {
			const isCurrent = nextHydration();
			const credentialId = assignedId.value;
			extraValue.value = props.kind === "model" ? store.settings?.modelName ?? "" : "";
			selectedCredentialId.value = credentialId ?? "";
			selectingExistingCredential.value = false;
			selection.value = readOnly.value ? getAssignedSelection() : getAssignedSelection() || getDefaultSelection();
			fieldsData.value = seedData(selection.value);
			isLoading.value = false;
			if (credentialId && !readOnly.value) {
				isLoading.value = true;
				try {
					const credential = await credentialsStore.getCredentialData({ id: credentialId });
					if (!isCurrent()) return;
					applyLoadedData(credential && "data" in credential ? credential.data ?? {} : {});
				} catch {
					if (!isCurrent()) return;
					fieldsData.value = seedData(selection.value);
				} finally {
					if (isCurrent()) isLoading.value = false;
				}
			}
			if (!isCurrent()) return;
			hydratedSelection = selection.value;
			hydratedData = { ...fieldsData.value };
			hydratedExtra = extraValue.value;
			hydratedSnapshot = snapshot();
			restoreStoredError(credentialId);
		}
		watch(open, async (isOpen) => {
			if (isOpen) await hydrate();
		}, { immediate: true });
		function selectOption(next) {
			const existingCredential = existingOptions.value.find(({ id }) => id === next);
			if (existingCredential) {
				credentialTestError.value = "";
				selectingExistingCredential.value = true;
				selectedCredentialId.value = existingCredential.id;
				selection.value = selectionForCredential(existingCredential);
				fieldsData.value = {};
				extraValue.value = existingCredential.id === assignedId.value ? hydratedExtra : "";
				return;
			}
			const changedMode = selectingExistingCredential.value;
			if (next === selection.value && !changedMode) return;
			credentialTestError.value = "";
			selectingExistingCredential.value = false;
			selectedCredentialId.value = "";
			selection.value = next;
			fieldsData.value = next === hydratedSelection ? { ...hydratedData } : seedData(next);
			extraValue.value = next === hydratedSelection ? hydratedExtra : "";
		}
		function selectCredential(nextCredentialId) {
			if (nextCredentialId === selectedCredentialId.value) return;
			credentialTestError.value = "";
			selectedCredentialId.value = nextCredentialId;
			const credential = existingOptions.value.find(({ id }) => id === nextCredentialId);
			selection.value = credential ? selectionForCredential(credential) : "";
			extraValue.value = nextCredentialId === assignedId.value ? hydratedExtra : "";
		}
		function setFieldValue(name, value) {
			fieldsData.value = {
				...fieldsData.value,
				[name]: value
			};
		}
		const isComplete = computed(() => {
			if (!hasSelection.value) return true;
			if (props.kind === "model" && extraValue.value.trim().length === 0) return false;
			if (usingExisting.value) return true;
			return newConnectionIsComplete(selection.value);
		});
		const isChanged = computed(() => snapshot() !== hydratedSnapshot);
		const isBusy = computed(() => store.isSaving || isTestingCredential.value || isLoading.value);
		const primaryDisabled = computed(() => {
			if (isBusy.value || !isComplete.value) return true;
			if (props.setup) return !isChanged.value && !hasSelection.value;
			return !isChanged.value && !credentialTestError.value;
		});
		async function handlePrimary() {
			const connectionData = buildConnectionData();
			if (!usingExisting.value && selection.value && !isProxyDaytonaSelection.value && !await testCredential({
				id: selection.value === getAssignedSelection() ? assignedId.value ?? "" : "",
				name: copy.testName,
				type: credentialTypeFor(selection.value),
				data: connectionData
			})) return;
			if (!open.value) return;
			if (selectingExistingCredential.value && !readOnly.value && selectedCredentialId.value) {
				const credential = existingOptions.value.find(({ id }) => id === selectedCredentialId.value);
				if (credential && !await testSavedCredential(credential.id, credential.name, credential.type)) return;
				if (!open.value) return;
			}
			if (isChanged.value) {
				if (usingExisting.value) stageExisting();
				else if (!selection.value) stageClear();
				else stageNew(connectionData);
				if (!await store.save()) return;
			}
			await refreshCredentials();
			if (!open.value) return;
			emit("saved");
			open.value = false;
		}
		function handleBack() {
			if (isBusy.value) return;
			emit("back");
			open.value = false;
		}
		function handleOpenChange(value) {
			if (!value && isBusy.value) return;
			open.value = value;
		}
		function handleClose() {
			handleOpenChange(false);
		}
		const title = computed(() => i18n.baseText(props.setup ? copy.setupTitleKey : copy.titleKey));
		const description = computed(() => i18n.baseText(props.setup && copy.setupDescriptionKey ? copy.setupDescriptionKey : copy.descriptionKey));
		const showCancel = computed(() => !props.setup || props.kind === "model");
		const primaryLabel = computed(() => {
			if (credentialTestError.value) return i18n.baseText("credentialEdit.credentialConfig.retry");
			if (props.setup && (props.kind === "model" || props.kind === "sandbox" && !isLastStep.value)) return i18n.baseText("settings.n8nAgent.setup.continue");
			return i18n.baseText("generic.save");
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: open.value,
				size: "medium",
				"show-close-button": !isBusy.value,
				"data-test-id": `${unref(copy).idPrefix}-dialog`,
				"onUpdate:open": handleOpenChange
			}, {
				default: withCtx(() => [
					createVNode(unref(DialogHeader_default), null, {
						default: withCtx(() => [
							__props.setup ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								class: normalizeClass(_ctx.$style.step),
								size: "xsmall",
								color: "text-light",
								bold: "",
								tag: "p",
								"data-test-id": `${unref(copy).idPrefix}-dialog-step`
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(stepLabel)), 1)]),
								_: 1
							}, 8, ["class", "data-test-id"])) : createCommentVNode("", true),
							createVNode(unref(DialogTitle_default), null, {
								default: withCtx(() => [createTextVNode(toDisplayString(title.value), 1)]),
								_: 1
							}),
							createVNode(unref(DialogDescription_default), null, {
								default: withCtx(() => [createTextVNode(toDisplayString(description.value), 1)]),
								_: 1
							})
						]),
						_: 1
					}),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.fields) }, [
						createVNode(unref(N8nInputLabel_default), { label: unref(i18n).baseText(unref(copy).fieldLabelKey) }, {
							default: withCtx(() => [readOnly.value ? (openBlock(), createBlock(unref(N8nSelect_default), {
								key: 0,
								"model-value": selectedCredentialId.value,
								size: "medium",
								disabled: isBusy.value,
								placeholder: unref(copy).placeholderKey ? unref(i18n).baseText(unref(copy).placeholderKey) : void 0,
								"data-test-id": `${unref(copy).idPrefix}-provider-select`,
								"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectCredential(String($event ?? "")))
							}, {
								default: withCtx(() => [!__props.setup ? (openBlock(), createBlock(unref(N8nOption_default), {
									key: 0,
									value: "",
									label: noneLabel.value
								}, null, 8, ["label"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(existingOptions.value, (credential) => {
									return openBlock(), createBlock(unref(N8nOption_default), {
										key: credential.id,
										value: credential.id,
										label: existingCredentialLabel(credential)
									}, null, 8, ["value", "label"]);
								}), 128))]),
								_: 1
							}, 8, [
								"model-value",
								"disabled",
								"placeholder",
								"data-test-id"
							])) : (openBlock(), createBlock(unref(N8nSelect_default), {
								key: 1,
								"model-value": selectingExistingCredential.value ? selectedCredentialId.value : selection.value,
								size: "medium",
								disabled: isBusy.value,
								placeholder: unref(copy).placeholderKey ? unref(i18n).baseText(unref(copy).placeholderKey) : void 0,
								"data-test-id": `${unref(copy).idPrefix}-provider-select`,
								"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectOption(String($event ?? "")))
							}, {
								default: withCtx(() => [
									!__props.setup ? (openBlock(), createBlock(unref(N8nOption_default), {
										key: 0,
										value: "",
										label: noneLabel.value
									}, null, 8, ["label"])) : createCommentVNode("", true),
									(openBlock(true), createElementBlock(Fragment, null, renderList(providerOptions.value, (option) => {
										return openBlock(), createBlock(unref(N8nOption_default), {
											key: option.value,
											value: option.value,
											label: option.label
										}, null, 8, ["value", "label"]);
									}), 128)),
									(openBlock(true), createElementBlock(Fragment, null, renderList(existingOptions.value, (credential) => {
										return openBlock(), createBlock(unref(N8nOption_default), {
											key: credential.id,
											value: credential.id,
											label: existingCredentialLabel(credential)
										}, null, 8, ["value", "label"]);
									}), 128))
								]),
								_: 1
							}, 8, [
								"model-value",
								"disabled",
								"placeholder",
								"data-test-id"
							])), unref(copy).providerHintKey ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 2,
								tag: "p",
								class: normalizeClass(_ctx.$style.providerHint),
								size: "small",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(unref(copy).providerHintKey)), 1)]),
								_: 1
							}, 8, ["class"])) : createCommentVNode("", true)]),
							_: 1
						}, 8, ["label"]),
						!usingExisting.value && selection.value && !isProxyDaytonaSelection.value && (__props.kind !== "sandbox" || selection.value === "daytona") && !isLoading.value ? (openBlock(), createBlock(ConnectionFields_default, {
							key: 0,
							"credential-type": credentialTypeFor(selection.value),
							data: fieldsData.value,
							disabled: isBusy.value,
							"data-test-id": `${unref(copy).idPrefix}-connection-fields`,
							onUpdate: setFieldValue
						}, null, 8, [
							"credential-type",
							"data",
							"disabled",
							"data-test-id"
						])) : createCommentVNode("", true),
						__props.kind === "model" && hasSelection.value ? (openBlock(), createBlock(unref(N8nInputLabel_default), {
							key: 1,
							label: unref(i18n).baseText("settings.n8nAgent.modelName.label")
						}, {
							default: withCtx(() => [createVNode(unref(Input_default), {
								"model-value": extraValue.value,
								type: "text",
								size: "medium",
								disabled: isBusy.value,
								autocomplete: "off",
								spellcheck: false,
								placeholder: unref(i18n).baseText("settings.n8nAgent.modelName.placeholder"),
								"data-test-id": "n8n-agent-model-name-input",
								"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => extraValue.value = String($event))
							}, null, 8, [
								"model-value",
								"disabled",
								"placeholder"
							])]),
							_: 1
						}, 8, ["label"])) : __props.kind === "sandbox" && !usingExisting.value && selection.value === "n8n-sandbox" ? (openBlock(), createBlock(unref(N8nInputLabel_default), {
							key: 2,
							label: unref(i18n).baseText("settings.n8nAgent.sandboxCredential.apiKey")
						}, {
							default: withCtx(() => [createVNode(unref(Input_default), {
								"model-value": extraValue.value,
								type: "password",
								size: "medium",
								disabled: isBusy.value,
								autocomplete: "off",
								spellcheck: false,
								"data-test-id": "n8n-agent-sandbox-api-key-input",
								"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => extraValue.value = String($event))
							}, null, 8, ["model-value", "disabled"])]),
							_: 1
						}, 8, ["label"])) : createCommentVNode("", true)
					], 2),
					unref(copy).footnoteKey ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.footnote),
						size: "small",
						color: "text-light",
						tag: "p"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(unref(copy).footnoteKey)), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					unref(credentialTestError) ? (openBlock(), createBlock(Banner_default, {
						key: 1,
						theme: "danger",
						message: unref(i18n).baseText("credentialEdit.credentialConfig.couldntConnectWithTheseSettings"),
						details: unref(credentialTestError),
						"data-test-id": `${unref(copy).idPrefix}-credential-test-error`
					}, null, 8, [
						"message",
						"details",
						"data-test-id"
					])) : createCommentVNode("", true),
					createVNode(unref(DialogFooter_default), null, {
						default: withCtx(() => [
							__props.setup && __props.kind !== "model" ? (openBlock(), createBlock(unref(N8nButton_default), {
								key: 0,
								variant: "outline",
								size: "medium",
								label: unref(i18n).baseText("generic.back"),
								disabled: isBusy.value,
								"data-test-id": `${unref(copy).idPrefix}-dialog-back`,
								onClick: handleBack
							}, null, 8, [
								"label",
								"disabled",
								"data-test-id"
							])) : createCommentVNode("", true),
							__props.setup && __props.kind === "search" ? (openBlock(), createBlock(unref(N8nButton_default), {
								key: 1,
								variant: "outline",
								size: "medium",
								label: unref(i18n).baseText("settings.n8nAgent.setup.skip"),
								disabled: isBusy.value,
								"data-test-id": `${unref(copy).idPrefix}-dialog-skip`,
								onClick: handleClose
							}, null, 8, [
								"label",
								"disabled",
								"data-test-id"
							])) : createCommentVNode("", true),
							showCancel.value ? (openBlock(), createBlock(unref(N8nButton_default), {
								key: 2,
								variant: "outline",
								size: "medium",
								label: unref(i18n).baseText("generic.cancel"),
								disabled: isBusy.value,
								"data-test-id": `${unref(copy).idPrefix}-dialog-cancel`,
								onClick: handleClose
							}, null, 8, [
								"label",
								"disabled",
								"data-test-id"
							])) : createCommentVNode("", true),
							createVNode(unref(N8nButton_default), {
								variant: "solid",
								size: "medium",
								label: primaryLabel.value,
								loading: unref(isTestingCredential),
								disabled: primaryDisabled.value,
								"data-test-id": `${unref(copy).idPrefix}-dialog-save`,
								onClick: handlePrimary
							}, null, 8, [
								"label",
								"loading",
								"disabled",
								"data-test-id"
							])
						]),
						_: 1
					})
				]),
				_: 1
			}, 8, [
				"open",
				"show-close-button",
				"data-test-id"
			]);
		};
	}
});
var ConnectionDialog_vue_vue_type_style_index_0_lang_module_default = {
	fields: "_fields_13j72_125",
	providerHint: "_providerHint_13j72_134",
	footnote: "_footnote_13j72_138",
	step: "_step_13j72_142"
};
var ConnectionDialog_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ConnectionDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConnectionDialog_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/views/SettingsInstanceAiView.vue?vue&type=script&setup=true&lang.ts
var DOCS_URL = "https://docs.n8n.io/deploy/host-n8n/configure-n8n/set-up-ai-assistant-preview";
var SettingsInstanceAiView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsInstanceAiView",
	setup(__props) {
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const message = useMessage();
		const router = useRouter();
		const settingsStore = useSettingsStore();
		const credentialsStore = useCredentialsStore();
		const store = useInstanceAiSettingsStore();
		const { isTestingCredential, testSavedCredential } = useInstanceCredentialTest();
		const { isFeatureEnabled: isMcpConnectionsExperimentEnabled } = useInstanceAiMcpConnectionsExperiment();
		const { isFeatureEnabled: isBrowserUseEnabled } = useInstanceAiBrowserUseExperiment();
		const { isFeatureEnabled: isComputerUseExperimentEnabled } = useInstanceAiComputerUseExperiment();
		const isAdmin = computed(() => store.canManage);
		const isEnabled = computed(() => store.settings?.enabled ?? settingsStore.moduleSettings?.["instance-ai"]?.enabled ?? false);
		const isOff = computed(() => !isEnabled.value);
		const isMcpAccessEnabled = computed(() => store.settings?.mcpAccessEnabled ?? true);
		const isSelfManaged = computed(() => !store.isProxyEnabled && !store.isCloudManaged);
		const showCredentialsRows = computed(() => isAdmin.value && isSelfManaged.value);
		const showSandboxRow = computed(() => isAdmin.value && !store.isCloudManaged);
		const modelCredential = computed(() => store.instanceModelCredentials.find((credential) => credential.id === store.settings?.modelCredentialId));
		const isModelConfigured = computed(() => Boolean(store.settings?.modelEnvConfigured || store.settings?.modelCredentialId && store.settings.modelName));
		const modelValue = computed(() => {
			if (store.settings?.modelCredentialId) return [modelCredential.value ? credentialTypeLabel(modelCredential.value.type) : "", store.settings.modelName ?? ""].filter(Boolean).join(" · ");
			return i18n.baseText("settings.n8nAgent.modelCredential.env.value");
		});
		const modelDescription = computed(() => {
			if (store.settings?.modelCredentialId && store.settings.modelName) return null;
			if (store.settings?.modelEnvConfigured) return {
				key: "settings.n8nAgent.modelCredential.env.description",
				warning: false
			};
			return {
				key: "settings.n8nAgent.modelCredential.missing.description",
				warning: !isOff.value
			};
		});
		const sandboxCredentialId = computed(() => store.settings?.sandboxProvider === "daytona" ? store.settings?.daytonaCredentialId : store.settings?.n8nSandboxCredentialId);
		const isSandboxConfigured = computed(() => Boolean(sandboxCredentialId.value ?? store.settings?.sandboxEnvConfigured));
		const sandboxValue = computed(() => {
			if (sandboxCredentialId.value) return store.settings?.sandboxProvider === "daytona" ? SANDBOX_PROVIDER_LABELS.daytona : SANDBOX_PROVIDER_LABELS["n8n-sandbox"];
			return i18n.baseText("settings.n8nAgent.sandbox.env.value");
		});
		const sandboxDescription = computed(() => {
			if (sandboxCredentialId.value) return {
				key: "settings.n8nAgent.sandbox.set.description",
				warning: false
			};
			if (store.settings?.sandboxEnvConfigured) return {
				key: "settings.n8nAgent.sandbox.env.description",
				warning: false
			};
			return {
				key: "settings.n8nAgent.sandbox.missing.description",
				warning: !isOff.value
			};
		});
		const searchCredential = computed(() => store.serviceCredentials.find((credential) => credential.id === store.settings?.searchCredentialId));
		const searchState = computed(() => {
			if (store.settings?.searchCredentialId) return "set";
			if (store.settings?.searchEnvConfigured) return "env";
			return "notset";
		});
		const searchValue = computed(() => {
			if (searchState.value === "env") return i18n.baseText("settings.n8nAgent.search.env.value");
			return searchCredential.value ? credentialTypeLabel(searchCredential.value.type) : "";
		});
		const isSetupRequired = computed(() => isEnabled.value && (showCredentialsRows.value && !isModelConfigured.value || showSandboxRow.value && !isSandboxConfigured.value));
		const neverConfigured = computed(() => {
			if (isEnabled.value) return false;
			if (!isSelfManaged.value || !store.settings) return true;
			return !isModelConfigured.value && !isSandboxConfigured.value && searchState.value === "notset";
		});
		const emptyStateIcon = {
			type: "cards",
			center: "sparkles",
			sides: [
				"workflow",
				"message-square",
				"search",
				"bot"
			]
		};
		const disableMenuItems = [{
			id: "disable",
			label: i18n.baseText("settings.n8nAgent.status.disable"),
			icon: {
				type: "icon",
				value: "power"
			}
		}];
		const PERMISSION_OPTIONS = [
			"require_approval",
			"always_allow",
			"blocked"
		];
		const MCP_TOOL_PERMISSION_OPTIONS = ["require_approval", "always_allow"];
		const PERMISSION_OPTION_LABEL = {
			require_approval: "settings.n8nAgent.permissions.needsApproval",
			always_allow: "settings.n8nAgent.permissions.alwaysAllow",
			blocked: "settings.n8nAgent.permissions.blocked"
		};
		const PERMISSION_GROUPS = [
			{
				id: "workflows",
				labelKey: "settings.n8nAgent.permissions.group.workflows",
				keys: [
					"createWorkflow",
					"updateWorkflow",
					"runWorkflow",
					"publishWorkflow",
					"deleteWorkflow",
					"restoreWorkflowVersion",
					"tagWorkflow",
					"moveWorkflowToFolder"
				]
			},
			{
				id: "folders",
				labelKey: "settings.n8nAgent.permissions.group.folders",
				keys: ["createFolder", "deleteFolder"]
			},
			{
				id: "dataTables",
				labelKey: "settings.n8nAgent.permissions.group.dataTables",
				keys: [
					"createDataTable",
					"mutateDataTableSchema",
					"mutateDataTableRows"
				]
			},
			{
				id: "credentials",
				labelKey: "settings.n8nAgent.permissions.group.credentials",
				keys: ["deleteCredential"]
			},
			{
				id: "system",
				labelKey: "settings.n8nAgent.permissions.group.system",
				keys: ["readFilesystem", "cleanupTestExecutions"]
			},
			{
				id: "web",
				labelKey: "settings.n8nAgent.permissions.group.web",
				keys: ["fetchUrl", "webSearch"]
			}
		];
		const MCP_PERMISSION_GROUP = {
			id: "mcp",
			labelKey: "settings.n8nAgent.permissions.group.mcp",
			keys: ["executeMcpTool"]
		};
		const permissionGroups = computed(() => isMcpConnectionsExperimentEnabled.value ? [...PERMISSION_GROUPS, MCP_PERMISSION_GROUP] : PERMISSION_GROUPS);
		const expandedGroups = reactive({});
		function isGroupLocked(group) {
			return isOff.value || group.id === "mcp" && !isMcpAccessEnabled.value;
		}
		function groupSummary(group) {
			if (group.id === "mcp" && !isMcpAccessEnabled.value) return i18n.baseText("settings.n8nAgent.permissions.group.mcpDisabled");
			const exceptions = group.keys.filter((key) => store.getPermission(key) !== "require_approval").length;
			if (exceptions === 0) return i18n.baseText("settings.n8nAgent.permissions.group.default");
			if (exceptions === 1) return i18n.baseText("settings.n8nAgent.permissions.group.exception");
			return i18n.baseText("settings.n8nAgent.permissions.group.exceptions", { interpolate: { count: exceptions } });
		}
		function permissionOptionsFor(key) {
			return key === "executeMcpTool" ? MCP_TOOL_PERMISSION_OPTIONS : PERMISSION_OPTIONS;
		}
		/** Exactly one dialog can be active; transitions between steps never observe an all-closed state. */
		const activeDialog = ref(null);
		const setupChain = ref(false);
		const enableAfterSetup = ref(false);
		watch(activeDialog, (dialog) => {
			if (dialog !== null) return;
			setupChain.value = false;
			enableAfterSetup.value = false;
		});
		function setDialogOpen(kind, isOpen) {
			if (isOpen) activeDialog.value = kind;
			else if (activeDialog.value === kind) activeDialog.value = null;
		}
		function openModelDialog() {
			setupChain.value = false;
			activeDialog.value = "model";
		}
		function openModelSetup() {
			setupChain.value = !isSandboxConfigured.value;
			activeDialog.value = "model";
		}
		function openSandboxDialog() {
			setupChain.value = false;
			activeDialog.value = "sandbox";
		}
		/** Returns whether the chain may continue (false only when enabling failed). */
		async function finishSetup() {
			setupChain.value = false;
			if (!enableAfterSetup.value) return true;
			enableAfterSetup.value = false;
			return await store.persistEnabled(true);
		}
		async function handleModelSaved() {
			if (setupChain.value) {
				activeDialog.value = "sandbox";
				return;
			}
			await finishSetup();
		}
		async function handleSandboxSaved() {
			const chainSearch = setupChain.value && searchState.value === "notset";
			if (!await finishSetup()) return;
			if (chainSearch) {
				setupChain.value = true;
				activeDialog.value = "search";
			}
		}
		function credentialTypeLabel(type) {
			return credentialsStore.getCredentialTypeByName(type)?.displayName ?? type;
		}
		onMounted(() => {
			documentTitle.set(i18n.baseText("settings.n8nAgent"));
			store.fetch();
			credentialsStore.fetchCredentialTypes(false);
		});
		async function handleEnable() {
			if (!showCredentialsRows.value && (!showSandboxRow.value || isSandboxConfigured.value)) {
				await store.persistEnabled(true);
				return;
			}
			enableAfterSetup.value = true;
			if (showCredentialsRows.value && !isModelConfigured.value) {
				openModelSetup();
				return;
			}
			const modelCredentialId = store.settings?.modelCredentialId;
			if (showCredentialsRows.value && modelCredentialId && store.canManageInstanceCredentials && (!modelCredential.value || !await testSavedCredential(modelCredentialId, modelCredential.value.name, modelCredential.value.type))) {
				openModelSetup();
				return;
			}
			if (showSandboxRow.value && !isSandboxConfigured.value) {
				openSandboxDialog();
				return;
			}
			if (showSandboxRow.value && sandboxCredentialId.value && store.canManageInstanceCredentials) {
				const isDaytona = store.settings?.sandboxProvider === "daytona";
				if (!await testSavedCredential(sandboxCredentialId.value, "AI Assistant sandbox", isDaytona ? "daytonaApi" : "httpHeaderAuth")) {
					openSandboxDialog();
					return;
				}
			}
			await finishSetup();
		}
		async function handleStatusAction(action) {
			if (action !== "disable") return;
			if (await message.confirm(i18n.baseText("settings.n8nAgent.status.disable.description"), {
				title: i18n.baseText("settings.n8nAgent.status.disable.title"),
				confirmButtonText: i18n.baseText("settings.n8nAgent.status.disable"),
				cancelButtonText: i18n.baseText("generic.cancel")
			}) === "confirm") await store.persistEnabled(false);
		}
		function handleComputerUseToggle(value) {
			store.setField("localGatewayDisabled", !value);
			store.save();
		}
		function handleBrowserUseToggle(value) {
			store.setField("browserUseEnabled", value);
			store.save();
		}
		function handleMcpAccessToggle(value) {
			store.setField("mcpAccessEnabled", value);
			store.save();
		}
		function handlePermissionChange(key, value) {
			store.setPermission(key, value);
			store.save();
		}
		function openAiUsageSettings() {
			router.push({ name: VIEWS.AI_SETTINGS });
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), { "data-test-id": "n8n-agent-settings" }, {
				default: withCtx(() => [
					createVNode(unref(SettingsPageHeader_default), {
						title: unref(i18n).baseText("settings.n8nAgent"),
						description: unref(i18n).baseText("settings.n8nAgent.description"),
						"docs-url": DOCS_URL,
						"docs-label": unref(i18n).baseText("settings.n8nAgent.docsLabel")
					}, {
						titleTrailing: withCtx(() => [createVNode(unref(PreviewTag_default), { size: "medium" })]),
						_: 1
					}, 8, [
						"title",
						"description",
						"docs-label"
					]),
					unref(store).isLoading ? (openBlock(), createBlock(unref(N8nLoading_default), {
						key: 0,
						rows: 3,
						"shrink-last": false
					})) : neverConfigured.value ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
						key: 1,
						icon: emptyStateIcon,
						heading: unref(i18n).baseText("settings.n8nAgent.empty.title"),
						description: unref(i18n).baseText("settings.n8nAgent.empty.description"),
						"button-text": isAdmin.value ? unref(i18n).baseText("settings.n8nAgent.empty.enable") : void 0,
						"button-disabled": unref(store).isSaving || unref(isTestingCredential),
						"button-variant": "solid",
						"onClick:button": handleEnable
					}, createSlots({ _: 2 }, [isAdmin.value ? {
						name: "additionalContent",
						fn: withCtx(() => [createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent.empty.footnote")), 1)]),
							_: 1
						})]),
						key: "0"
					} : void 0]), 1032, [
						"heading",
						"description",
						"button-text",
						"button-disabled"
					])) : isAdmin.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
						createVNode(unref(SettingsSection_default), null, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [
									createVNode(unref(SettingsRow_default), {
										title: unref(i18n).baseText("settings.n8nAgent.enable.label"),
										description: unref(i18n).baseText("settings.n8nAgent.enable.description")
									}, {
										action: withCtx(() => [isOff.value ? (openBlock(), createBlock(unref(N8nButton_default), {
											key: 0,
											variant: "solid",
											size: "medium",
											label: unref(i18n).baseText("settings.n8nAgent.status.enable"),
											disabled: unref(store).isSaving || unref(isTestingCredential),
											"data-test-id": "n8n-agent-enable-button",
											onClick: handleEnable
										}, null, 8, ["label", "disabled"])) : (openBlock(), createBlock(unref(DropdownMenu_default), {
											key: 1,
											items: disableMenuItems,
											placement: "bottom-end",
											"data-test-id": "n8n-agent-status-menu",
											onSelect: handleStatusAction
										}, {
											trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
												variant: "outline",
												size: "medium",
												disabled: unref(store).isSaving,
												"aria-label": unref(i18n).baseText("settings.n8nAgent.status.manage")
											}, {
												default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.statusLabel) }, [
													createBaseVNode("span", {
														class: normalizeClass([_ctx.$style.statusDot, isSetupRequired.value ? _ctx.$style.statusDotWarning : _ctx.$style.statusDotSuccess]),
														"aria-hidden": "true"
													}, null, 2),
													createTextVNode(" " + toDisplayString(isSetupRequired.value ? unref(i18n).baseText("settings.n8nAgent.status.setupRequired") : unref(i18n).baseText("settings.n8nAgent.status.enabled")) + " ", 1),
													createVNode(unref(N8nIcon_default), {
														icon: "chevron-down",
														size: "small"
													})
												], 2)]),
												_: 1
											}, 8, ["disabled", "aria-label"])]),
											"item-leading": withCtx(({ item }) => [item.icon?.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
												key: 0,
												class: normalizeClass(_ctx.$style.danger),
												icon: item.icon.value,
												size: "small"
											}, null, 8, ["class", "icon"])) : createCommentVNode("", true)]),
											"item-label": withCtx(({ item }) => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.danger) }, toDisplayString(item.label), 3)]),
											_: 1
										}))]),
										_: 1
									}, 8, ["title", "description"]),
									showCredentialsRows.value ? (openBlock(), createBlock(unref(SettingsRow_default), {
										key: 0,
										class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
										clickable: !isOff.value && isModelConfigured.value,
										"data-test-id": "n8n-agent-model-row",
										onClick: openModelDialog
									}, createSlots({
										info: withCtx(() => [createVNode(unref(N8nText_default), {
											bold: "",
											size: "medium",
											color: "text-dark"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent.modelCredential.label")), 1)]),
											_: 1
										}), modelDescription.value ? (openBlock(), createBlock(unref(N8nText_default), {
											key: 0,
											size: "small",
											color: modelDescription.value.warning ? "warning" : "text-light"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(modelDescription.value.key)), 1)]),
											_: 1
										}, 8, ["color"])) : createCommentVNode("", true)]),
										_: 2
									}, [!isOff.value ? {
										name: "action",
										fn: withCtx(() => [!isModelConfigured.value ? (openBlock(), createBlock(unref(N8nButton_default), {
											key: 0,
											variant: "solid",
											size: "medium",
											label: unref(i18n).baseText("settings.n8nAgent.modelCredential.add"),
											disabled: unref(store).isSaving,
											"data-test-id": "n8n-agent-model-add",
											onClick: openModelSetup
										}, null, 8, ["label", "disabled"])) : (openBlock(), createBlock(unref(SettingsRowConfigure_default), {
											key: 1,
											value: modelValue.value
										}, null, 8, ["value"]))]),
										key: "0"
									} : void 0]), 1032, ["class", "clickable"])) : createCommentVNode("", true),
									showSandboxRow.value ? (openBlock(), createBlock(unref(SettingsRow_default), {
										key: 1,
										class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
										clickable: !isOff.value && isSandboxConfigured.value,
										"data-test-id": "n8n-agent-sandbox-row",
										onClick: openSandboxDialog
									}, createSlots({
										info: withCtx(() => [createVNode(unref(N8nText_default), {
											bold: "",
											size: "medium",
											color: "text-dark"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent.sandbox.label")), 1)]),
											_: 1
										}), createVNode(unref(N8nText_default), {
											size: "small",
											color: sandboxDescription.value.warning ? "warning" : "text-light"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(sandboxDescription.value.key)), 1)]),
											_: 1
										}, 8, ["color"])]),
										_: 2
									}, [!isOff.value ? {
										name: "action",
										fn: withCtx(() => [!isSandboxConfigured.value ? (openBlock(), createBlock(unref(N8nButton_default), {
											key: 0,
											variant: "solid",
											size: "medium",
											label: unref(i18n).baseText("settings.n8nAgent.sandbox.add"),
											disabled: unref(store).isSaving,
											"data-test-id": "n8n-agent-sandbox-add",
											onClick: openSandboxDialog
										}, null, 8, ["label", "disabled"])) : (openBlock(), createBlock(unref(SettingsRowConfigure_default), {
											key: 1,
											value: sandboxValue.value
										}, null, 8, ["value"]))]),
										key: "0"
									} : void 0]), 1032, ["class", "clickable"])) : createCommentVNode("", true)
								]),
								_: 1
							})]),
							_: 1
						}),
						showCredentialsRows.value || unref(isComputerUseExperimentEnabled) || unref(isBrowserUseEnabled) ? (openBlock(), createBlock(unref(SettingsSection_default), {
							key: 0,
							title: unref(i18n).baseText("settings.n8nAgent.capabilities.title"),
							description: unref(i18n).baseText("settings.n8nAgent.capabilities.description")
						}, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [
									showCredentialsRows.value ? (openBlock(), createBlock(unref(SettingsRow_default), {
										key: 0,
										class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
										clickable: !isOff.value && searchState.value !== "notset",
										"data-test-id": "n8n-agent-search-row",
										onClick: _cache[1] || (_cache[1] = ($event) => activeDialog.value = "search")
									}, createSlots({
										info: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.titleWithTag) }, [createVNode(unref(N8nText_default), {
											bold: "",
											size: "medium",
											color: "text-dark"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent.search.label")), 1)]),
											_: 1
										}), createVNode(unref(N8nBadge_default), {
											theme: "success",
											size: "xsmall"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent.search.recommended")), 1)]),
											_: 1
										})], 2), createVNode(unref(N8nText_default), {
											size: "small",
											color: "text-light"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(searchState.value === "env" ? unref(i18n).baseText("settings.n8nAgent.search.env.description") : unref(i18n).baseText("settings.n8nAgent.search.description")), 1)]),
											_: 1
										})]),
										_: 2
									}, [!isOff.value ? {
										name: "action",
										fn: withCtx(() => [searchState.value === "notset" ? (openBlock(), createBlock(unref(N8nButton_default), {
											key: 0,
											variant: "outline",
											size: "medium",
											label: unref(i18n).baseText("settings.n8nAgent.search.setup"),
											disabled: unref(store).isSaving,
											"data-test-id": "n8n-agent-search-setup",
											onClick: _cache[0] || (_cache[0] = ($event) => activeDialog.value = "search")
										}, null, 8, ["label", "disabled"])) : (openBlock(), createBlock(unref(SettingsRowConfigure_default), {
											key: 1,
											value: searchValue.value
										}, null, 8, ["value"]))]),
										key: "0"
									} : void 0]), 1032, ["class", "clickable"])) : createCommentVNode("", true),
									unref(isComputerUseExperimentEnabled) ? (openBlock(), createBlock(unref(SettingsRow_default), {
										key: 1,
										class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
										title: unref(i18n).baseText("settings.n8nAgent.computerUse.label"),
										description: unref(i18n).baseText("settings.n8nAgent.computerUse.description")
									}, {
										action: withCtx(() => [createVNode(unref(N8nSwitch_default), {
											"model-value": !(unref(store).settings?.localGatewayDisabled ?? false),
											disabled: unref(store).isSaving || isOff.value,
											"aria-label": unref(i18n).baseText("settings.n8nAgent.computerUse.label"),
											"data-test-id": "n8n-agent-computer-use-toggle",
											"onUpdate:modelValue": handleComputerUseToggle
										}, null, 8, [
											"model-value",
											"disabled",
											"aria-label"
										])]),
										_: 1
									}, 8, [
										"class",
										"title",
										"description"
									])) : createCommentVNode("", true),
									unref(isBrowserUseEnabled) ? (openBlock(), createBlock(unref(SettingsRow_default), {
										key: 2,
										class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
										title: unref(i18n).baseText("settings.n8nAgent.browserUse.label"),
										description: unref(i18n).baseText("settings.n8nAgent.browserUse.description")
									}, {
										action: withCtx(() => [createVNode(unref(N8nSwitch_default), {
											"model-value": unref(store).settings?.browserUseEnabled ?? true,
											disabled: unref(store).isSaving || isOff.value,
											"aria-label": unref(i18n).baseText("settings.n8nAgent.browserUse.label"),
											"data-test-id": "n8n-agent-browser-use-toggle",
											"onUpdate:modelValue": handleBrowserUseToggle
										}, null, 8, [
											"model-value",
											"disabled",
											"aria-label"
										])]),
										_: 1
									}, 8, [
										"class",
										"title",
										"description"
									])) : createCommentVNode("", true)
								]),
								_: 1
							})]),
							_: 1
						}, 8, ["title", "description"])) : createCommentVNode("", true),
						unref(isMcpConnectionsExperimentEnabled) ? (openBlock(), createBlock(unref(SettingsSection_default), {
							key: 1,
							title: unref(i18n).baseText("settings.n8nAgent.mcp.title"),
							description: unref(i18n).baseText("settings.n8nAgent.mcp.description")
						}, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [createVNode(unref(SettingsRow_default), {
									class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
									title: unref(i18n).baseText("settings.n8nAgent.mcpAccess.label"),
									description: unref(i18n).baseText("settings.n8nAgent.mcpAccess.description")
								}, {
									action: withCtx(() => [createVNode(unref(N8nSwitch_default), {
										"model-value": isMcpAccessEnabled.value,
										disabled: unref(store).isSaving || isOff.value,
										"aria-label": unref(i18n).baseText("settings.n8nAgent.mcpAccess.label"),
										"data-test-id": "n8n-agent-mcp-access-toggle",
										"onUpdate:modelValue": handleMcpAccessToggle
									}, null, 8, [
										"model-value",
										"disabled",
										"aria-label"
									])]),
									_: 1
								}, 8, [
									"class",
									"title",
									"description"
								])]),
								_: 1
							})]),
							_: 1
						}, 8, ["title", "description"])) : createCommentVNode("", true),
						createVNode(unref(SettingsSection_default), {
							title: unref(i18n).baseText("settings.n8nAgent.permissions.title"),
							description: unref(i18n).baseText("settings.n8nAgent.permissions.description")
						}, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(permissionGroups.value, (group) => {
									return openBlock(), createBlock(unref(SettingsRow_default), {
										key: group.id,
										modelValue: expandedGroups[group.id],
										"onUpdate:modelValue": ($event) => expandedGroups[group.id] = $event,
										class: normalizeClass({ [_ctx.$style.dim]: isGroupLocked(group) }),
										title: unref(i18n).baseText(group.labelKey),
										expandable: !isGroupLocked(group),
										"expand-label": groupSummary(group),
										"collapse-label": groupSummary(group),
										"data-test-id": `n8n-agent-permission-group-${group.id}`
									}, createSlots({
										expanded: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.permissionList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(group.keys, (key) => {
											return openBlock(), createElementBlock("div", {
												key,
												class: normalizeClass(_ctx.$style.permissionRow)
											}, [createVNode(unref(N8nText_default), {
												size: "small",
												color: "text-dark"
											}, {
												default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`settings.n8nAgent.permissions.${key}`)), 1)]),
												_: 2
											}, 1024), createVNode(unref(N8nSelect_default), {
												class: normalizeClass(_ctx.$style.permissionSelect),
												"model-value": unref(store).getPermission(key),
												size: "small",
												disabled: unref(store).isSaving || isGroupLocked(group),
												"data-test-id": `n8n-agent-permission-${key}`,
												"onUpdate:modelValue": ($event) => handlePermissionChange(key, $event)
											}, {
												default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(permissionOptionsFor(key), (option) => {
													return openBlock(), createBlock(unref(N8nOption_default), {
														key: option,
														value: option,
														label: unref(i18n).baseText(PERMISSION_OPTION_LABEL[option])
													}, null, 8, ["value", "label"]);
												}), 128))]),
												_: 2
											}, 1032, [
												"class",
												"model-value",
												"disabled",
												"data-test-id",
												"onUpdate:modelValue"
											])], 2);
										}), 128))], 2)]),
										_: 2
									}, [isGroupLocked(group) ? {
										name: "action",
										fn: withCtx(() => [createVNode(unref(N8nText_default), {
											size: "small",
											color: "text-light"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(groupSummary(group)), 1)]),
											_: 2
										}, 1024)]),
										key: "0"
									} : void 0]), 1032, [
										"modelValue",
										"onUpdate:modelValue",
										"class",
										"title",
										"expandable",
										"expand-label",
										"collapse-label",
										"data-test-id"
									]);
								}), 128))]),
								_: 1
							})]),
							_: 1
						}, 8, ["title", "description"]),
						createVNode(unref(SettingsSection_default), {
							title: unref(i18n).baseText("settings.n8nAgent.dataSharing.title"),
							description: unref(i18n).baseText("settings.n8nAgent.dataSharing.description")
						}, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [createVNode(unref(SettingsRow_default), {
									class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
									title: unref(i18n).baseText("settings.n8nAgent.dataSharing.manage.label"),
									description: unref(i18n).baseText("settings.n8nAgent.dataSharing.manage.description"),
									clickable: !isOff.value && unref(store).canManageAiUsage,
									"data-test-id": "n8n-agent-data-sharing-row",
									onClick: openAiUsageSettings
								}, createSlots({ _: 2 }, [!isOff.value && unref(store).canManageAiUsage ? {
									name: "action",
									fn: withCtx(() => [createVNode(unref(SettingsRowConfigure_default))]),
									key: "0"
								} : void 0]), 1032, [
									"class",
									"title",
									"description",
									"clickable"
								])]),
								_: 1
							})]),
							_: 1
						}, 8, ["title", "description"])
					], 64)) : createCommentVNode("", true),
					showCredentialsRows.value ? (openBlock(), createBlock(ConnectionDialog_default, {
						key: 3,
						kind: "model",
						open: activeDialog.value === "model",
						setup: setupChain.value,
						"onUpdate:open": _cache[2] || (_cache[2] = ($event) => setDialogOpen("model", $event)),
						onSaved: handleModelSaved
					}, null, 8, ["open", "setup"])) : createCommentVNode("", true),
					showSandboxRow.value ? (openBlock(), createBlock(ConnectionDialog_default, {
						key: 4,
						kind: "sandbox",
						open: activeDialog.value === "sandbox",
						setup: showCredentialsRows.value && setupChain.value,
						"onUpdate:open": _cache[3] || (_cache[3] = ($event) => setDialogOpen("sandbox", $event)),
						onSaved: handleSandboxSaved,
						onBack: _cache[4] || (_cache[4] = ($event) => activeDialog.value = "model")
					}, null, 8, ["open", "setup"])) : createCommentVNode("", true),
					showCredentialsRows.value ? (openBlock(), createBlock(ConnectionDialog_default, {
						key: 5,
						kind: "search",
						open: activeDialog.value === "search",
						setup: setupChain.value,
						"onUpdate:open": _cache[5] || (_cache[5] = ($event) => setDialogOpen("search", $event)),
						onBack: _cache[6] || (_cache[6] = ($event) => activeDialog.value = "sandbox")
					}, null, 8, ["open", "setup"])) : createCommentVNode("", true)
				]),
				_: 1
			});
		};
	}
});
var SettingsInstanceAiView_vue_vue_type_style_index_0_lang_module_default = {
	statusLabel: "_statusLabel_zlooe_125",
	statusDot: "_statusDot_zlooe_131",
	statusDotSuccess: "_statusDotSuccess_zlooe_137",
	statusDotWarning: "_statusDotWarning_zlooe_141",
	danger: "_danger_zlooe_145",
	titleWithTag: "_titleWithTag_zlooe_149",
	dim: "_dim_zlooe_155",
	permissionList: "_permissionList_zlooe_160",
	permissionRow: "_permissionRow_zlooe_167",
	permissionSelect: "_permissionSelect_zlooe_174"
};
var SettingsInstanceAiView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsInstanceAiView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsInstanceAiView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsInstanceAiView_default as default };
