import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _t as watch, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Ai as N8nIconButton_default, Bi as N8nButton_default, Ht as N8nTooltip_default, Li as N8nHeading_default, Xt as ElSwitch, Yt as createEventBus, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { hr as useToast, rt as useCredentialsStore } from "./users.store-qBZsmf9-.js";
import { ti as PROVIDER_CREDENTIAL_TYPE_MAP } from "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import { r as useRootStore } from "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import { t as Modal_default } from "./Modal-CtqVMob-.js";
import { t as TagsDropdown_default } from "./TagsDropdown-DFkzLvnd.js";
import { v as providerDisplayNames } from "./constants-mCmg0XQZ.js";
import { t as CredentialPicker_default } from "./CredentialPicker-RiYX8de4.js";
import { t as useChatStore, x as fetchChatModelsApi } from "./chat.store-iit3mf2V.js";
var ProviderSettingsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProviderSettingsModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const settings = ref(null);
		const modalBus = ref(createEventBus());
		const loadingSettings = ref(false);
		const loadingModels = ref(false);
		const limitModels = ref(false);
		const availableModels = ref([]);
		const customModels = ref([]);
		const allModels = computed(() => {
			const models = new Map(availableModels.value.reduce((acc, model) => {
				if (model.model.provider !== "custom-agent" && model.model.provider !== "n8n") acc.push([model.model.model, {
					id: model.model.model,
					name: model.name
				}]);
				return acc;
			}, []));
			for (const model of customModels.value) models.set(model, {
				id: model,
				name: model,
				isManual: true
			});
			return Array.from(models.values());
		});
		const modelsById = computed(() => {
			const map = {};
			allModels.value.forEach((model) => {
				map[model.id] = model;
			});
			return map;
		});
		const selectedModels = computed({
			get: () => settings.value?.allowedModels?.map((m) => m.model) || [],
			set: (value) => {
				if (settings.value) {
					settings.value.allowedModels = allModels.value.filter((model) => value.includes(model.id)).map((model) => ({
						model: model.id,
						displayName: model.name,
						isManual: model.isManual
					}));
					customModels.value = settings.value.allowedModels.filter((model) => model.isManual).map((model) => model.model);
				}
			}
		});
		async function addManualModel(name) {
			customModels.value.push(name);
			return {
				id: name,
				name
			};
		}
		const i18n = useI18n();
		const credentialsStore = useCredentialsStore();
		const chatStore = useChatStore();
		const toast = useToast();
		const credentialType = computed(() => {
			return PROVIDER_CREDENTIAL_TYPE_MAP[props.data.provider];
		});
		function onCredentialSelect(credentialId) {
			if (settings.value) settings.value.credentialId = credentialId;
		}
		function onCredentialDeselect() {
			if (settings.value) {
				settings.value.credentialId = null;
				settings.value.allowedModels = [];
				limitModels.value = false;
			}
		}
		async function onConfirm() {
			if (settings.value) await props.data.onConfirm(settings.value);
			else props.data.onCancel();
			modalBus.value.emit("close");
		}
		function onCancel() {
			props.data.onCancel();
			modalBus.value.emit("close");
		}
		async function loadSettings() {
			settings.value = await chatStore.fetchProviderSettings(props.data.provider);
			limitModels.value = settings.value?.allowedModels.length > 0;
			customModels.value = settings.value.allowedModels.filter((model) => model.isManual).map((model) => model.model);
		}
		async function loadAvailableModels(credentialId) {
			loadingModels.value = true;
			try {
				const credentials = { [props.data.provider]: credentialId };
				availableModels.value = (await fetchChatModelsApi(useRootStore().restApiContext, { credentials }))[props.data.provider].models || [];
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.chatHub.providers.modal.edit.errorFetchingModels"));
			} finally {
				loadingModels.value = false;
			}
		}
		const isConfirmDisabled = computed(() => {
			if (props.data.disabled) return true;
			if (!settings.value) return true;
			return limitModels.value && settings.value.allowedModels.length === 0;
		});
		function onToggleEnabled(value) {
			if (settings.value) {
				settings.value.enabled = typeof value === "boolean" ? value : Boolean(value);
				if (!settings.value.enabled) {
					settings.value.credentialId = null;
					settings.value.allowedModels = [];
					limitModels.value = false;
				}
			}
		}
		function onToggleLimitModels(value) {
			if (settings.value) {
				limitModels.value = typeof value === "boolean" ? value : Boolean(value);
				if (!limitModels.value) settings.value.allowedModels = [];
			}
		}
		onMounted(async () => {
			loadingSettings.value = true;
			await Promise.all([
				loadSettings(),
				credentialsStore.fetchCredentialTypes(false),
				credentialsStore.fetchAllCredentials()
			]);
			loadingSettings.value = false;
		});
		watch(() => settings.value?.credentialId, async (credentialId) => {
			if (credentialId) await loadAvailableModels(credentialId);
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: __props.modalName,
				"event-bus": modalBus.value,
				width: "50%",
				"max-width": "500px",
				center: true
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
					size: "large",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.providers.modal.edit.title", { interpolate: { provider: unref(providerDisplayNames)[props.data.provider] } })), 1)]),
					_: 1
				})], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
					createBaseVNode("label", { class: normalizeClass(_ctx.$style.container) }, [createVNode(unref(N8nText_default), { color: "text-dark" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.providers.modal.edit.enabled.label", { interpolate: { provider: unref(providerDisplayNames)[props.data.provider] } })), 1)]),
						_: 1
					}), createVNode(unref(N8nTooltip_default), {
						content: unref(i18n).baseText("settings.chatHub.providers.modal.edit.enabled.tooltip"),
						disabled: props.data.disabled,
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(ElSwitch), {
							size: "large",
							"model-value": settings.value?.enabled ?? false,
							disabled: props.data.disabled,
							loading: loadingSettings.value,
							"onUpdate:modelValue": onToggleEnabled
						}, null, 8, [
							"model-value",
							"disabled",
							"loading"
						])]),
						_: 1
					}, 8, ["content", "disabled"])], 2),
					settings.value && settings.value.enabled ? (openBlock(), createElementBlock("label", {
						key: 0,
						class: normalizeClass(_ctx.$style.container)
					}, [createVNode(unref(N8nText_default), { color: "text-dark" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.providers.modal.edit.credential.label")), 1)]),
						_: 1
					}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.credentialContainer) }, [createVNode(CredentialPicker_default, {
						class: normalizeClass(_ctx.$style.credentialPicker),
						"app-name": unref(providerDisplayNames)[props.data.provider],
						"credential-type": credentialType.value,
						"selected-credential-id": settings.value.credentialId,
						"hide-create-new": true,
						onCredentialSelected: onCredentialSelect,
						onCredentialDeselected: onCredentialDeselect
					}, null, 8, [
						"class",
						"app-name",
						"credential-type",
						"selected-credential-id"
					]), settings.value.credentialId ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 0,
						"native-type": "button",
						title: unref(i18n).baseText("settings.chatHub.providers.modal.edit.credential.clearButton"),
						icon: "x",
						"icon-size": "large",
						type: "secondary",
						onClick: onCredentialDeselect
					}, null, 8, ["title"])) : createCommentVNode("", true)], 2)], 2)) : createCommentVNode("", true),
					settings.value && settings.value.enabled && settings.value.credentialId ? (openBlock(), createElementBlock("label", {
						key: 1,
						class: normalizeClass(_ctx.$style.container)
					}, [createVNode(unref(N8nText_default), { color: "text-dark" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.providers.modal.edit.limitModels.label", { interpolate: { provider: unref(providerDisplayNames)[props.data.provider] } })), 1)]),
						_: 1
					}), createVNode(unref(N8nTooltip_default), {
						content: unref(i18n).baseText("settings.chatHub.providers.modal.edit.limitModels.tooltip"),
						disabled: props.data.disabled,
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(ElSwitch), {
							size: "large",
							"model-value": limitModels.value,
							disabled: props.data.disabled,
							loading: loadingSettings.value,
							"onUpdate:modelValue": onToggleLimitModels
						}, null, 8, [
							"model-value",
							"disabled",
							"loading"
						])]),
						_: 1
					}, 8, ["content", "disabled"])], 2)) : createCommentVNode("", true),
					settings.value && settings.value.enabled && settings.value.credentialId && limitModels.value ? (openBlock(), createElementBlock("label", {
						key: 2,
						class: normalizeClass(_ctx.$style.container)
					}, [createVNode(unref(N8nText_default), { color: "text-dark" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.providers.modal.edit.allowedModels.label")), 1)]),
						_: 1
					}), createVNode(TagsDropdown_default, {
						modelValue: selectedModels.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedModels.value = $event),
						class: normalizeClass(_ctx.$style.modelPicker),
						placeholder: unref(i18n).baseText("settings.chatHub.providers.modal.edit.models.placeholder"),
						"event-bus": null,
						"create-enabled": true,
						"manage-enabled": false,
						"all-tags": allModels.value,
						"is-loading": loadingModels.value,
						"tags-by-id": modelsById.value,
						"create-tag": addManualModel,
						"create-tag-i18n-key": "settings.chatHub.providers.modal.edit.models.create"
					}, null, 8, [
						"modelValue",
						"class",
						"placeholder",
						"all-tags",
						"is-loading",
						"tags-by-id"
					])], 2)) : createCommentVNode("", true)
				], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerRight) }, [createVNode(unref(N8nButton_default), {
					type: "tertiary",
					onClick: onCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.providers.modal.edit.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					type: "primary",
					onClick: onConfirm,
					disabled: isConfirmDisabled.value
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.providers.modal.edit.confirm")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)], 2)]),
				_: 1
			}, 8, ["name", "event-bus"]);
		};
	}
});
var ProviderSettingsModal_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_3xawo_125",
	content: "_content_3xawo_131",
	container: "_container_3xawo_138",
	credentialContainer: "_credentialContainer_3xawo_146",
	credentialPicker: "_credentialPicker_3xawo_153",
	modelPicker: "_modelPicker_3xawo_157",
	footer: "_footer_3xawo_161",
	footerRight: "_footerRight_3xawo_168"
};
var ProviderSettingsModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProviderSettingsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProviderSettingsModal_vue_vue_type_style_index_0_lang_module_default }]]);
export { ProviderSettingsModal_default as default };
