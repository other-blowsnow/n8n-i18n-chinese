import { C as computed, Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-mhYEJTeq.js";
import { Wn as N8nHeading_default, X as N8nInputLabel_default, qn as N8nButton_default, wt as N8nInput_default } from "./src-BDzAa1Y3.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { x as createEventBus } from "./truncate-CgT6TTic.js";
import "./icon-DD6uvFxo.js";
import "./overlay-CV0TQaLk.js";
import "./empty-C2SrrehM.js";
import { t as useMessage } from "./useMessage-br2elaFt.js";
import "./dialog-BZ51cVF9.js";
import "./useTelemetry-CX4Z1YmY.js";
import { t as useToast } from "./useToast-knoBLWpF.js";
import "./sanitize-html-CWrjF493.js";
import "./path-browserify-CcVVPqSM.js";
import "./constants-CuU0cMc8.js";
import "./merge-CUyfvEnu.js";
import { g as assert } from "./_baseOrderBy-CJFus1_r.js";
import "./dateformat-CaoB5ai3.js";
import "./useDebounce-CfE59s7M.js";
import "./useExternalHooks-C4-Yr9pT.js";
import "./useStyles-CEyEF3kW.js";
import "./retry-CR7m--lR.js";
import "./nodeIcon-nO1bfQ8_.js";
import "./NodeIcon-Begszw76.js";
import { t as Modal_default } from "./Modal-CJtdZ1Wd.js";
import "./CredentialIcon-CQYfUFHx.js";
import "./constants-z4xKkxbS.js";
import { l as isLlmProviderModel, t as useChatStore } from "./chat.store-DXPvQBL2.js";
import "./fileUtils-B4-lTzu6.js";
import "./ChatAgentAvatar-BtW6ATxR.js";
import { n as ModelSelector_default, t as ToolsSelector_default } from "./ToolsSelector-Cg9YPNXR.js";
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
		const modalBus = ref(createEventBus());
		const name = ref("");
		const description = ref("");
		const systemPrompt = ref("");
		const selectedModel = ref(null);
		const isSaving = ref(false);
		const isDeleting = ref(false);
		const tools = ref([]);
		const agentSelectedCredentials = ref({});
		const isEditMode = computed(() => !!props.data.agentId);
		const title = computed(() => isEditMode.value ? i18n.baseText("chatHub.agent.editor.title.edit") : i18n.baseText("chatHub.agent.editor.title.new"));
		const saveButtonLabel = computed(() => isSaving.value ? i18n.baseText("chatHub.agent.editor.saving") : i18n.baseText("chatHub.agent.editor.save"));
		const isValid = computed(() => {
			return name.value.trim().length > 0 && systemPrompt.value.trim().length > 0 && selectedModel.value !== null;
		});
		const agentMergedCredentials = computed(() => {
			return {
				...props.data.credentials,
				...agentSelectedCredentials.value
			};
		});
		function loadAgent() {
			const customAgent = chatStore.currentEditingAgent;
			if (!customAgent) return;
			name.value = customAgent.name;
			description.value = customAgent.description ?? "";
			systemPrompt.value = customAgent.systemPrompt;
			selectedModel.value = chatStore.getAgent(customAgent);
			tools.value = customAgent.tools || [];
			if (customAgent.credentialId) agentSelectedCredentials.value[customAgent.provider] = customAgent.credentialId;
		}
		onMounted(() => {
			if (props.data.agentId) loadAgent();
		});
		function onCredentialSelected(provider, credentialId) {
			agentSelectedCredentials.value = {
				...agentSelectedCredentials.value,
				[provider]: credentialId
			};
		}
		function onModelChange(model) {
			selectedModel.value = model;
		}
		async function onSave() {
			if (!isValid.value || isSaving.value) return;
			isSaving.value = true;
			try {
				assert(selectedModel.value);
				const model = "model" in selectedModel.value ? selectedModel.value.model : void 0;
				assert(isLlmProviderModel(model));
				const credentialId = agentMergedCredentials.value[model.provider];
				assert(credentialId);
				const payload = {
					name: name.value.trim(),
					description: description.value.trim() || void 0,
					systemPrompt: systemPrompt.value.trim(),
					...model,
					credentialId,
					tools: tools.value
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
		function onSelectTools(newTools) {
			tools.value = newTools;
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
				header: withCtx(() => [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(title.value), 1)]),
					_: 1
				})]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "agent-name",
						label: unref(i18n).baseText("chatHub.agent.editor.name.label"),
						required: true
					}, {
						default: withCtx(() => [createVNode(unref(N8nInput_default), {
							id: "agent-name",
							modelValue: name.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => name.value = $event),
							placeholder: unref(i18n).baseText("chatHub.agent.editor.name.placeholder"),
							maxlength: 128,
							class: normalizeClass(_ctx.$style.input)
						}, null, 8, [
							"modelValue",
							"placeholder",
							"class"
						])]),
						_: 1
					}, 8, ["label"]),
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "agent-description",
						label: unref(i18n).baseText("chatHub.agent.editor.description.label")
					}, {
						default: withCtx(() => [createVNode(unref(N8nInput_default), {
							id: "agent-description",
							modelValue: description.value,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => description.value = $event),
							type: "textarea",
							placeholder: unref(i18n).baseText("chatHub.agent.editor.description.placeholder"),
							maxlength: 512,
							rows: 3,
							class: normalizeClass(_ctx.$style.input)
						}, null, 8, [
							"modelValue",
							"placeholder",
							"class"
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
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => systemPrompt.value = $event),
							type: "textarea",
							placeholder: unref(i18n).baseText("chatHub.agent.editor.systemPrompt.placeholder"),
							rows: 6,
							class: normalizeClass(_ctx.$style.input)
						}, null, 8, [
							"modelValue",
							"placeholder",
							"class"
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
							"selected-agent": selectedModel.value,
							"include-custom-agents": false,
							credentials: agentMergedCredentials.value,
							onChange: onModelChange,
							onSelectCredential: onCredentialSelected
						}, null, 8, ["selected-agent", "credentials"])]),
						_: 1
					}, 8, ["class", "label"]), createVNode(unref(N8nInputLabel_default), {
						"input-name": "agent-model",
						class: normalizeClass(_ctx.$style.input),
						label: unref(i18n).baseText("chatHub.agent.editor.tools.label"),
						required: false
					}, {
						default: withCtx(() => [createBaseVNode("div", null, [createVNode(ToolsSelector_default, {
							disabled: false,
							selected: tools.value,
							onSelect: onSelectTools
						}, null, 8, ["selected"])])]),
						_: 1
					}, 8, ["class", "label"])], 2)
				], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerRight) }, [isEditMode.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					type: "secondary",
					icon: "trash-2",
					disabled: isDeleting.value,
					loading: isDeleting.value,
					onClick: onDelete
				}, null, 8, ["disabled", "loading"])) : createCommentVNode("", true), createVNode(unref(N8nButton_default), {
					type: "primary",
					disabled: !isValid.value || isSaving.value,
					onClick: onSave
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(saveButtonLabel.value), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)], 2)]),
				_: 1
			}, 8, ["name", "event-bus"]);
		};
	}
});
var AgentEditorModal_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_f2rvd_123",
	input: "_input_f2rvd_130",
	row: "_row_f2rvd_134",
	footer: "_footer_f2rvd_139",
	footerRight: "_footerRight_f2rvd_146"
};
var AgentEditorModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(AgentEditorModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentEditorModal_vue_vue_type_style_index_0_lang_module_default }]]);
export { AgentEditorModal_default as default };
