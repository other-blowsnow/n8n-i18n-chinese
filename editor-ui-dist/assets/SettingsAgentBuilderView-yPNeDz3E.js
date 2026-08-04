import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, bt as withCtx, gt as watch, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-H3H6Z9UB.js";
import { Ai as N8nText_default, Ii as N8nButton_default, J as N8nRadioButtons_default, Li as N8nIcon_default, jt as N8nHeading_default } from "./src-D0J2qzpK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useToast } from "./useToast-CL5w_AIp.js";
import { i as defineStore } from "./constants-CdtkjduR.js";
import { L as AGENT_BUILDER_DEFAULT_MODEL, X as isAgentModelProvider } from "./src-CYAJL8H-.js";
import { Xn as makeRestApiRequest, t as useRootStore } from "./useRootStore-G5KSjJVg.js";
import { t as useSettingsStore } from "./settings.store-i6-hO8_O.js";
import "./settings.store-BA5qZE9o.js";
import { t as useUsersStore } from "./users.store-BqJZ4Qgp.js";
import { t as useDocumentTitle } from "./useDocumentTitle-qrffMKD0.js";
import { a as sanitizeModelId, c as useAgentProjectId, o as useModelCatalog, s as useAgentModelCredentials, t as AgentModelSelector_default } from "./AgentModelSelector-WNnhPCTN.js";
import "./menuItemId-Ts5wPrjx.js";
//#region src/features/agents/composables/useAgentBuilderSettingsApi.ts
var BASE = "/agent-builder";
var getAgentBuilderSettings = async (context) => await makeRestApiRequest(context, "GET", `${BASE}/settings`);
var updateAgentBuilderSettings = async (context, payload) => await makeRestApiRequest(context, "PATCH", `${BASE}/settings`, payload);
//#endregion
//#region src/features/agents/agentBuilderSettings.store.ts
var DEFAULT_SETTINGS = { mode: "default" };
/**
* Pinia store for the agent builder admin settings page.
*
* Holds only what the dedicated `/agent-builder` endpoints return — the
* cross-cutting context (deployment type, available credentials, credential
* display name) is read from the existing `useSettingsStore` and
* `useCredentialsStore` to avoid duplicated state.
*/
var useAgentBuilderSettingsStore = defineStore("agentBuilderSettings", () => {
	const rootStore = useRootStore();
	const isLoading = ref(false);
	const isSaving = ref(false);
	const settings = ref(null);
	const draft = ref(null);
	const effectiveSettings = computed(() => draft.value ?? settings.value ?? DEFAULT_SETTINGS);
	const mode = computed(() => effectiveSettings.value.mode);
	const isDirty = computed(() => {
		if (!draft.value || !settings.value) return false;
		return JSON.stringify(draft.value) !== JSON.stringify(settings.value);
	});
	function applyResponse(response) {
		settings.value = response.settings;
		draft.value = null;
	}
	async function fetch() {
		isLoading.value = true;
		try {
			applyResponse(await getAgentBuilderSettings(rootStore.restApiContext));
		} finally {
			isLoading.value = false;
		}
	}
	function setMode(next) {
		const base = settings.value ?? DEFAULT_SETTINGS;
		if (next === "default") {
			draft.value = { mode: "default" };
			return;
		}
		const previousCustom = base.mode === "custom" ? base : null;
		draft.value = {
			mode: "custom",
			provider: previousCustom?.provider ?? "",
			credentialId: previousCustom?.credentialId ?? "",
			modelName: previousCustom?.modelName ?? ""
		};
	}
	function setCustomSelection(selection) {
		draft.value = {
			mode: "custom",
			provider: selection.provider,
			credentialId: selection.credentialId,
			modelName: selection.modelName
		};
	}
	async function save() {
		if (!draft.value) return;
		isSaving.value = true;
		try {
			applyResponse(await updateAgentBuilderSettings(rootStore.restApiContext, draft.value));
		} finally {
			isSaving.value = false;
		}
	}
	function discardDraft() {
		draft.value = null;
	}
	return {
		isLoading,
		isSaving,
		settings,
		draft,
		effectiveSettings,
		mode,
		isDirty,
		fetch,
		setMode,
		setCustomSelection,
		save,
		discardDraft
	};
});
//#endregion
//#region src/features/agents/components/settings/AgentBuilderModelSection.vue?vue&type=script&setup=true&lang.ts
var AgentBuilderModelSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentBuilderModelSection",
	setup(__props) {
		const i18n = useI18n();
		const settingsStore = useSettingsStore();
		const usersStore = useUsersStore();
		const toast = useToast();
		const store = useAgentBuilderSettingsStore();
		const { ensureLoaded, getModelsForPicker, isLoading } = useModelCatalog();
		const projectId = useAgentProjectId();
		const { credentialsByProvider, selectCredential } = useAgentModelCredentials(usersStore.currentUserId ?? "anonymous", projectId);
		watch(projectId, (id) => {
			if (id) ensureLoaded(id);
		}, { immediate: true });
		/**
		* When the AI Assistant proxy isn't available, the only meaningful interactive
		* option is the custom-credential picker — surfacing the "Use n8n AI" radio
		* would be confusing. The mode picker is hidden in that case.
		*/
		const isProxyAvailable = computed(() => Boolean(settingsStore.isAiAssistantEnabled));
		const showModePicker = computed(() => isProxyAvailable.value);
		/**
		* When proxy is unavailable, the picker is the only way to configure the
		* builder, so it stays visible regardless of the persisted mode. Otherwise it
		* follows the user's selection.
		*/
		const showCustomPicker = computed(() => store.mode === "custom" || !isProxyAvailable.value);
		const filteredAgents = computed(() => getModelsForPicker(credentialsByProvider.value));
		const selectedAgent = computed(() => {
			const settings = store.effectiveSettings;
			if (settings.mode !== "custom") return null;
			if (!isAgentModelProvider(settings.provider)) return null;
			const registryEntry = filteredAgents.value[settings.provider]?.models.find((model) => model.model === settings.modelName);
			if (registryEntry) return registryEntry;
			return {
				provider: settings.provider,
				model: settings.modelName,
				name: settings.modelName,
				description: null,
				createdAt: null,
				metadata: {
					functionCalling: false,
					available: true
				}
			};
		});
		function onModelChange(selection) {
			const credentialId = credentialsByProvider.value?.[selection.provider] ?? "";
			if (!credentialId) {
				toast.showMessage({
					type: "warning",
					title: i18n.baseText("settings.agentBuilder.missingCredential.title"),
					message: i18n.baseText("settings.agentBuilder.missingCredential.message")
				});
				return;
			}
			store.setCustomSelection({
				provider: selection.provider,
				credentialId,
				modelName: sanitizeModelId(selection.provider, selection.model)
			});
		}
		function onSelectCredential(provider, credentialId) {
			if (!credentialId) return;
			selectCredential(provider, credentialId);
			const settings = store.effectiveSettings;
			if (settings.mode !== "custom") return;
			if (settings.provider !== provider) return;
			store.setCustomSelection({
				provider: settings.provider,
				credentialId,
				modelName: settings.modelName
			});
		}
		const modeOptions = computed(() => [{
			label: i18n.baseText("settings.agentBuilder.mode.default.label"),
			value: "default"
		}, {
			label: i18n.baseText("settings.agentBuilder.mode.custom.label"),
			value: "custom"
		}]);
		function onModeChange(value) {
			store.setMode(value);
		}
		/**
		* Whether the current draft is complete enough to persist:
		*   - 'default' is always valid
		*   - 'custom' requires provider + credentialId + modelName
		*/
		const isDraftValid = computed(() => {
			const draft = store.effectiveSettings;
			if (draft.mode === "default") return true;
			return Boolean(draft.provider && draft.credentialId && draft.modelName);
		});
		const canSave = computed(() => store.isDirty && isDraftValid.value);
		const statusText = computed(() => {
			const settings = store.effectiveSettings;
			if (settings.mode === "default") return isProxyAvailable.value ? i18n.baseText("settings.agentBuilder.status.proxy", { interpolate: { model: AGENT_BUILDER_DEFAULT_MODEL } }) : i18n.baseText("settings.agentBuilder.status.envVar");
			if (!settings.credentialId) return i18n.baseText("settings.agentBuilder.status.customIncomplete");
			return i18n.baseText("settings.agentBuilder.status.custom", { interpolate: {
				provider: settings.provider,
				model: settings.modelName
			} });
		});
		async function onSave() {
			try {
				await store.save();
				toast.showMessage({
					type: "success",
					title: i18n.baseText("settings.agentBuilder.saved")
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.agentBuilder.saveError"));
			}
		}
		function onCancel() {
			store.discardDraft();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.section) }, [
				createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.agentBuilder.section.model")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nText_default), {
					tag: "p",
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.agentBuilder.section.help")), 1)]),
					_: 1
				}),
				showModePicker.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.modeRow)
				}, [createVNode(unref(N8nRadioButtons_default), {
					"model-value": unref(store).mode,
					options: modeOptions.value,
					size: "medium",
					"onUpdate:modelValue": onModeChange
				}, null, 8, ["model-value", "options"])], 2)) : createCommentVNode("", true),
				showCustomPicker.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.picker)
				}, [createVNode(AgentModelSelector_default, {
					"selected-model": selectedAgent.value,
					credentials: unref(credentialsByProvider),
					"models-by-provider": filteredAgents.value,
					"is-loading": unref(isLoading),
					"project-id": unref(projectId),
					"warn-missing-credentials": true,
					onChange: onModelChange,
					onSelectCredential
				}, null, 8, [
					"selected-model",
					"credentials",
					"models-by-provider",
					"is-loading",
					"project-id"
				])], 2)) : createCommentVNode("", true),
				createVNode(unref(N8nText_default), {
					tag: "p",
					size: "small",
					color: "text-light",
					class: normalizeClass(_ctx.$style.status)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(statusText.value), 1)]),
					_: 1
				}, 8, ["class"]),
				canSave.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.actions)
				}, [createVNode(unref(N8nButton_default), {
					type: "secondary",
					size: "small",
					onClick: onCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					size: "small",
					loading: unref(store).isSaving,
					onClick: onSave
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.save")), 1)]),
					_: 1
				}, 8, ["loading"])], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var AgentBuilderModelSection_vue_vue_type_style_index_0_lang_module_default = {
	section: "_section_ye26w_125",
	modeRow: "_modeRow_ye26w_131",
	picker: "_picker_ye26w_137",
	status: "_status_ye26w_143",
	actions: "_actions_ye26w_147"
};
var AgentBuilderModelSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentBuilderModelSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentBuilderModelSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/views/SettingsAgentBuilderView.vue?vue&type=script&setup=true&lang.ts
var SettingsAgentBuilderView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsAgentBuilderView",
	setup(__props) {
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const toast = useToast();
		const store = useAgentBuilderSettingsStore();
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.agentBuilder.title"));
			try {
				await store.fetch();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.agentBuilder.loadError"));
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "agent-builder-settings"
			}, [createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
				class: normalizeClass([_ctx.$style.pageTitle, "mb-2xs"]),
				size: "xlarge"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.agentBuilder.title")), 1)]),
				_: 1
			}, 8, ["class"]), createVNode(unref(N8nText_default), {
				size: "medium",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.agentBuilder.description")), 1)]),
				_: 1
			})], 2), unref(store).isLoading ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.loading)
			}, [createVNode(unref(N8nIcon_default), {
				icon: "spinner",
				spin: ""
			})], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.card)
			}, [createVNode(AgentBuilderModelSection_default)], 2))], 2);
		};
	}
});
var SettingsAgentBuilderView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_nb8uz_125",
	header: "_header_nb8uz_132",
	pageTitle: "_pageTitle_nb8uz_138",
	loading: "_loading_nb8uz_142",
	card: "_card_nb8uz_148"
};
var SettingsAgentBuilderView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsAgentBuilderView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsAgentBuilderView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsAgentBuilderView_default as default };
