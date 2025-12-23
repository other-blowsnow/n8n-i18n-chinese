import { C as computed, Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, _t as watch, bt as withCtx, et as openBlock, j as createTextVNode, mt as useTemplateRef, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { $ as N8nInputLabel_default, Bn as N8nHeading_default, Un as N8nButton_default, Wn as N8nSpinner_default, f as N8nIconPicker_default, yt as N8nInput_default } from "./src-j4VKDieO.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { T as createEventBus } from "./truncate-BlCeUq7F.js";
import "./overlay-Crh-SkkJ.js";
import "./empty-BuGRxzl4.js";
import { t as useMessage } from "./useMessage-LAVj4VkL.js";
import "./dialog-B6i5gbQO.js";
import { Wi as useUIStore, n as useToast } from "./builder.store-BjWbk2Wl.js";
import "./sanitize-html-Cft-jOcY.js";
import "./CalendarDate-B-JEhNYg.js";
import "./path-browserify-BgjP7RyT.js";
import { ri as emptyChatModelsResponse } from "./constants-ksa9xIxI.js";
import "./merge-D6lLi7TL.js";
import { g as assert, r as useRootStore } from "./_baseOrderBy-B2FQHwl_.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-Cb7xvwM5.js";
import "./retry-CMAFrhVi.js";
import "./nodeIcon-7dyMxFgB.js";
import "./NodeIcon-BDiqVc0r.js";
import { t as Modal_default } from "./Modal-CaiTJoBk.js";
import "./CredentialIcon-CHvZKgl9.js";
import { f as TOOLS_SELECTOR_MODAL_KEY } from "./constants-qk3hx0l8.js";
import { d as personalAgentDefaultIcon, g as fetchChatModelsApi, t as useChatStore, u as isLlmProviderModel } from "./chat.store-DnJwLoWK.js";
import "./fileUtils-D3GQ2UWQ.js";
import { n as ToolsSelector_default, r as ModelSelector_default, t as useCustomAgent } from "./useCustomAgent-6oiQs4KI.js";
import "./ChatAgentAvatar-hwD4RBR6.js";
var AgentEditorModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentEditorModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const chatStore = useChatStore();
		const i18n = useI18n();
		const toast = useToast();
		const message = useMessage();
		const uiStore = useUIStore();
		const modalBus = ref(createEventBus());
		const customAgent = useCustomAgent(props.data.agentId);
		const name = ref("");
		const description = ref("");
		const systemPrompt = ref("");
		const selectedModel = ref(null);
		const isSaving = ref(false);
		const isDeleting = ref(false);
		const isOpened = ref(false);
		const tools = ref([]);
		const agents = ref(emptyChatModelsResponse);
		const isLoadingAgents = ref(false);
		const nameInputRef = useTemplateRef("nameInput");
		const icon = ref(personalAgentDefaultIcon);
		const agentSelectedCredentials = ref({});
		const credentialIdForSelectedModelProvider = computed(() => selectedModel.value && agentMergedCredentials.value[selectedModel.value.provider]);
		const selectedAgent = computed(() => selectedModel.value && chatStore.getAgent(selectedModel.value, { name: selectedModel.value.model }));
		const isEditMode = computed(() => !!props.data.agentId);
		const isLoadingAgent = computed(() => isEditMode.value && !customAgent.value);
		const title = computed(() => isEditMode.value ? i18n.baseText("chatHub.agent.editor.title.edit") : i18n.baseText("chatHub.agent.editor.title.new"));
		const saveButtonLabel = computed(() => isSaving.value ? i18n.baseText("chatHub.agent.editor.saving") : i18n.baseText("chatHub.agent.editor.save"));
		const isValid = computed(() => {
			return name.value.trim().length > 0 && systemPrompt.value.trim().length > 0 && selectedModel.value !== null && !!credentialIdForSelectedModelProvider.value;
		});
		const agentMergedCredentials = computed(() => {
			return {
				...props.data.credentials,
				...agentSelectedCredentials.value
			};
		});
		const canSelectTools = computed(() => selectedAgent.value?.metadata.capabilities.functionCalling ?? false);
		modalBus.value.once("opened", () => {
			isOpened.value = true;
		});
		watch(selectedAgent, (agent) => {
			if (agent && !agent.metadata.capabilities.functionCalling) tools.value = [];
		}, { immediate: true });
		watch(customAgent, (agent) => {
			if (!agent) return;
			icon.value = agent.icon ?? personalAgentDefaultIcon;
			name.value = agent.name;
			description.value = agent.description ?? "";
			systemPrompt.value = agent.systemPrompt;
			selectedModel.value = {
				provider: agent.provider,
				model: agent.model
			};
			tools.value = agent.tools || [];
			if (agent.credentialId) agentSelectedCredentials.value[agent.provider] = agent.credentialId;
		}, { immediate: true });
		watch([
			isOpened,
			isLoadingAgent,
			nameInputRef
		], async ([opened, isLoading, name$1]) => {
			if (opened && !isLoading) name$1?.focus();
		}, {
			immediate: true,
			flush: "post"
		});
		watch(agentMergedCredentials, async (credentials) => {
			if (credentials) {
				isLoadingAgents.value = true;
				try {
					agents.value = await fetchChatModelsApi(useRootStore().restApiContext, { credentials });
				} finally {
					isLoadingAgents.value = false;
				}
			}
		}, { immediate: true });
		function onCredentialSelected(provider, credentialId) {
			agentSelectedCredentials.value = {
				...agentSelectedCredentials.value,
				[provider]: credentialId
			};
		}
		function onModelChange(model) {
			assert(isLlmProviderModel(model));
			selectedModel.value = model;
		}
		async function onSave() {
			if (!isValid.value || isSaving.value) return;
			isSaving.value = true;
			try {
				assert(selectedModel.value);
				assert(credentialIdForSelectedModelProvider.value);
				const payload = {
					name: name.value.trim(),
					description: description.value.trim() || void 0,
					systemPrompt: systemPrompt.value.trim(),
					...selectedModel.value,
					credentialId: credentialIdForSelectedModelProvider.value,
					tools: tools.value,
					icon: icon.value
				};
				if (isEditMode.value && props.data.agentId) {
					await chatStore.updateCustomAgent(props.data.agentId, payload, props.data.credentials);
					toast.showMessage({
						title: i18n.baseText("chatHub.agent.editor.success.update"),
						type: "success"
					});
				} else {
					const agent = await chatStore.createCustomAgent(payload, props.data.credentials);
					props.data.onCreateCustomAgent?.(agent);
					toast.showMessage({
						title: i18n.baseText("chatHub.agent.editor.success.create"),
						type: "success"
					});
				}
				modalBus.value.emit("close");
			} catch (error) {
				const errorMessage = error instanceof Error ? error.message : "";
				toast.showError(error, i18n.baseText("chatHub.agent.editor.error.save"), errorMessage);
			} finally {
				isSaving.value = false;
			}
		}
		async function onDelete() {
			if (!isEditMode.value || !props.data.agentId || isDeleting.value) return;
			if (await message.confirm(i18n.baseText("chatHub.agent.editor.delete.confirm.message"), i18n.baseText("chatHub.agent.editor.delete.confirm.title"), {
				confirmButtonText: i18n.baseText("chatHub.agent.editor.delete.confirm.button"),
				cancelButtonText: i18n.baseText("chatHub.agent.editor.delete.cancel.button"),
				type: "warning"
			}) !== "confirm") return;
			isDeleting.value = true;
			try {
				await chatStore.deleteCustomAgent(props.data.agentId, props.data.credentials);
				toast.showMessage({
					title: i18n.baseText("chatHub.agent.editor.success.delete"),
					type: "success"
				});
				props.data.onClose?.();
				modalBus.value.emit("close");
			} catch (error) {
				const errorMessage = error instanceof Error ? error.message : "";
				toast.showError(error, i18n.baseText("chatHub.agent.editor.error.delete"), errorMessage);
			} finally {
				isDeleting.value = false;
			}
		}
		function onSelectTools() {
			uiStore.openModalWithData({
				name: TOOLS_SELECTOR_MODAL_KEY,
				data: {
					selected: tools.value,
					onConfirm: (newTools) => {
						tools.value = newTools;
					}
				}
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: _ctx.modalName,
				"event-bus": modalBus.value,
				width: "600px",
				center: true,
				"max-width": "90%",
				"min-height": "400px"
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(title.value), 1)]),
					_: 1
				}), isEditMode.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					type: "secondary",
					icon: "trash-2",
					disabled: isDeleting.value,
					loading: isDeleting.value,
					onClick: onDelete
				}, null, 8, ["disabled", "loading"])) : createCommentVNode("", true)], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "agent-name",
						label: unref(i18n).baseText("chatHub.agent.editor.name.label"),
						required: true
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.agentName) }, [createVNode(unref(N8nIconPicker_default), {
							modelValue: icon.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => icon.value = $event),
							"button-tooltip": unref(i18n).baseText("chatHub.agent.editor.iconPicker.button.tooltip")
						}, null, 8, ["modelValue", "button-tooltip"]), createVNode(unref(N8nInput_default), {
							ref: "nameInput",
							id: "agent-name",
							modelValue: name.value,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => name.value = $event),
							placeholder: unref(i18n).baseText("chatHub.agent.editor.name.placeholder"),
							maxlength: 128,
							class: normalizeClass(_ctx.$style.agentNameInput),
							disabled: isLoadingAgent.value
						}, null, 8, [
							"modelValue",
							"placeholder",
							"class",
							"disabled"
						])], 2)]),
						_: 1
					}, 8, ["label"]),
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "agent-description",
						label: unref(i18n).baseText("chatHub.agent.editor.description.label")
					}, {
						default: withCtx(() => [createVNode(unref(N8nInput_default), {
							id: "agent-description",
							modelValue: description.value,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => description.value = $event),
							type: "textarea",
							placeholder: unref(i18n).baseText("chatHub.agent.editor.description.placeholder"),
							maxlength: 512,
							rows: 3,
							class: normalizeClass(_ctx.$style.input),
							disabled: isLoadingAgent.value
						}, null, 8, [
							"modelValue",
							"placeholder",
							"class",
							"disabled"
						])]),
						_: 1
					}, 8, ["label"]),
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "agent-system-prompt",
						label: unref(i18n).baseText("chatHub.agent.editor.systemPrompt.label"),
						required: true
					}, {
						default: withCtx(() => [createVNode(unref(N8nInput_default), {
							id: "agent-system-prompt",
							modelValue: systemPrompt.value,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => systemPrompt.value = $event),
							type: "textarea",
							placeholder: unref(i18n).baseText("chatHub.agent.editor.systemPrompt.placeholder"),
							rows: 6,
							class: normalizeClass(_ctx.$style.input),
							disabled: isLoadingAgent.value
						}, null, 8, [
							"modelValue",
							"placeholder",
							"class",
							"disabled"
						])]),
						_: 1
					}, 8, ["label"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.row) }, [createVNode(unref(N8nInputLabel_default), {
						"input-name": "agent-model",
						class: normalizeClass(_ctx.$style.input),
						label: unref(i18n).baseText("chatHub.agent.editor.model.label"),
						required: true
					}, {
						default: withCtx(() => [createVNode(ModelSelector_default, {
							"selected-agent": selectedAgent.value,
							"include-custom-agents": false,
							credentials: agentMergedCredentials.value,
							disabled: isLoadingAgent.value,
							agents: agents.value,
							"is-loading": isLoadingAgents.value,
							"warn-missing-credentials": "",
							onChange: onModelChange,
							onSelectCredential: onCredentialSelected
						}, null, 8, [
							"selected-agent",
							"credentials",
							"disabled",
							"agents",
							"is-loading"
						])]),
						_: 1
					}, 8, ["class", "label"]), createVNode(unref(N8nInputLabel_default), {
						"input-name": "agent-model",
						class: normalizeClass(_ctx.$style.input),
						label: unref(i18n).baseText("chatHub.agent.editor.tools.label"),
						required: false
					}, {
						default: withCtx(() => [createBaseVNode("div", null, [createVNode(ToolsSelector_default, {
							disabled: isLoadingAgent.value || !canSelectTools.value,
							"disabled-tooltip": isLoadingAgent.value || canSelectTools.value ? void 0 : unref(i18n).baseText("chatHub.tools.selector.disabled.tooltip"),
							selected: tools.value,
							onClick: onSelectTools
						}, null, 8, [
							"disabled",
							"disabled-tooltip",
							"selected"
						])])]),
						_: 1
					}, 8, ["class", "label"])], 2),
					isLoadingAgent.value ? (openBlock(), createBlock(unref(N8nSpinner_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.spinner),
						size: "xlarge"
					}, null, 8, ["class"])) : createCommentVNode("", true)
				], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					type: "secondary",
					onClick: _cache[4] || (_cache[4] = ($event) => modalBus.value.emit("close"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.tools.editor.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					type: "primary",
					disabled: !isValid.value || isSaving.value,
					onClick: onSave
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(saveButtonLabel.value), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)]),
				_: 1
			}, 8, ["name", "event-bus"]);
		};
	}
});
var AgentEditorModal_vue_vue_type_style_index_0_lang_module_default = {
	spinner: "_spinner_1r3m0_123",
	header: "_header_1r3m0_130",
	content: "_content_1r3m0_138",
	input: "_input_1r3m0_145",
	agentName: "_agentName_1r3m0_149",
	agentNameInput: "_agentNameInput_1r3m0_155",
	row: "_row_1r3m0_159",
	footer: "_footer_1r3m0_165"
};
var AgentEditorModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(AgentEditorModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentEditorModal_vue_vue_type_style_index_0_lang_module_default }]]);
export { AgentEditorModal_default as default };
