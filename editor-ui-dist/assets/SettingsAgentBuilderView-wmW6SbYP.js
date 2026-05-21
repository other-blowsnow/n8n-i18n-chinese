import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _n as normalizeClass, gt as watch, j as createVNode, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { it as useI18n } from "./core-CzIVo7k9.js";
import { Ca as N8nText_default, M as N8nRadioButtons_default, Ta as N8nIcon_default, wa as N8nButton_default, xa as N8nHeading_default } from "./src-DVkMmVCd.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useUsersStore } from "./users.store-Dpbobzbe.js";
import { t as useToast } from "./useToast-Pwu_Jqrl.js";
import { Wa as AGENT_BUILDER_DEFAULT_MODEL } from "./constants-B2-iseoM.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-CX_m119O.js";
import { t as useSettingsStore } from "./settings.store-D1h6gV_f.js";
import { t as useDocumentTitle } from "./useDocumentTitle-DTGPlvkt.js";
import { t as useChatStore } from "./chat.store-Dyh1vqm5.js";
import { v as isLlmProviderModel } from "./chat.utils-CQKxZJWn.js";
import { n as getAgentBuilderStatus, r as updateAgentBuilderSettings, t as getAgentBuilderSettings } from "./useAgentBuilderSettingsApi-oLdons6l.js";
import { t as useChatCredentials } from "./useChatCredentials-BSkxMugI.js";
import { t as ModelSelector_default } from "./ModelSelector-BXrpOJkx.js";
import { a as AGENT_UNSUPPORTED_PROVIDERS, i as sanitizeModelId, o as CATALOG_TO_CHATHUB, s as CHATHUB_TO_CATALOG } from "./model-string-CI5XFHeG.js";
//#region src/features/agents/agentBuilderSettings.store.ts
var DEFAULT_SETTINGS = { mode: "default" };
/**
* Pinia store for the agent builder admin settings page and the build-UI
* gating empty state.
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
	const isConfigured = ref(false);
	const draft = ref(null);
	const effectiveSettings = computed(() => draft.value ?? settings.value ?? DEFAULT_SETTINGS);
	const mode = computed(() => effectiveSettings.value.mode);
	const isDirty = computed(() => {
		if (!draft.value || !settings.value) return false;
		return JSON.stringify(draft.value) !== JSON.stringify(settings.value);
	});
	function applyResponse(response) {
		settings.value = response.settings;
		isConfigured.value = response.isConfigured;
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
	async function fetchStatus() {
		isConfigured.value = (await getAgentBuilderStatus(rootStore.restApiContext)).isConfigured;
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
		isConfigured,
		draft,
		effectiveSettings,
		mode,
		isDirty,
		fetch,
		fetchStatus,
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
		const chatStore = useChatStore();
		const toast = useToast();
		const store = useAgentBuilderSettingsStore();
		const { credentialsByProvider, selectCredential } = useChatCredentials(usersStore.currentUserId ?? "anonymous");
		watch(credentialsByProvider, (credentials) => {
			if (credentials) chatStore.fetchAgents(credentials);
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
		const filteredAgents = computed(() => Object.fromEntries(Object.entries(chatStore.agents).filter(([provider]) => !AGENT_UNSUPPORTED_PROVIDERS.has(provider))));
		const selectedAgent = computed(() => {
			const settings = store.effectiveSettings;
			if (settings.mode !== "custom") return null;
			const chatHubProvider = CATALOG_TO_CHATHUB[settings.provider];
			if (!chatHubProvider) return null;
			return {
				model: {
					provider: chatHubProvider,
					model: settings.modelName
				},
				name: settings.modelName,
				description: null,
				icon: null,
				updatedAt: null,
				createdAt: null,
				metadata: {},
				groupName: null,
				groupIcon: null
			};
		});
		function onModelChange(selection) {
			if (!isLlmProviderModel(selection)) return;
			const catalogProvider = CHATHUB_TO_CATALOG[selection.provider] ?? selection.provider;
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
				provider: catalogProvider,
				credentialId,
				modelName: sanitizeModelId(catalogProvider, selection.model)
			});
		}
		function onSelectCredential(provider, credentialId) {
			if (!credentialId) return;
			selectCredential(provider, credentialId);
			const settings = store.effectiveSettings;
			if (settings.mode !== "custom") return;
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
				}, [createVNode(ModelSelector_default, {
					"selected-agent": selectedAgent.value,
					"include-custom-agents": false,
					credentials: unref(credentialsByProvider),
					agents: filteredAgents.value,
					"is-loading": false,
					"warn-missing-credentials": true,
					horizontal: "",
					onChange: onModelChange,
					onSelectCredential
				}, null, 8, [
					"selected-agent",
					"credentials",
					"agents"
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
