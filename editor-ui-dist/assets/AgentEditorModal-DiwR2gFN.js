import { C as computed, Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Ut as toValue, _t as watch, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-CyBAZEDf.js";
import { Hn as N8nButton_default, Un as N8nSpinner_default, X as N8nInputLabel_default, yt as N8nInput_default, zn as N8nHeading_default } from "./src-CKNGGC1H.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { x as createEventBus } from "./truncate-CZFeThpb.js";
import "./icon-521DvC2D.js";
import "./overlay-BNHSj7rn.js";
import "./empty-C2SrrehM.js";
import { t as useMessage } from "./useMessage-C56y91s7.js";
import "./dialog-YPIfvJn3.js";
import "./useTelemetry-DfTC69TL.js";
import { t as useToast } from "./useToast-D5n7Pl1L.js";
import "./sanitize-html-B9msDoKc.js";
import "./CalendarDate-DxkU3CHY.js";
import "./path-browserify-BnEsEkpq.js";
import "./constants-DrLxPWeP.js";
import "./merge-CKju1Aqe.js";
import { g as assert } from "./_baseOrderBy-BFxQ1EZq.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-BiLybJE6.js";
import "./useExternalHooks-CSQJVpG7.js";
import "./useStyles-DhM0cpS7.js";
import "./retry-CalJieID.js";
import "./nodeIcon-B7K4ClOd.js";
import "./NodeIcon-DkIAxVaH.js";
import { t as Modal_default } from "./Modal-ffdO_Z6j.js";
import "./CredentialIcon-DV5y8eJm.js";
import "./constants-D2fYduVh.js";
import { l as isLlmProviderModel, t as useChatStore } from "./chat.store-ow_A6EGh.js";
import "./fileUtils-BIVczUdz.js";
import "./ChatAgentAvatar-Dj1oP6RM.js";
import { n as ModelSelector_default, t as ToolsSelector_default } from "./ToolsSelector-DSx9EvjT.js";
function useCustomAgent(agentId) {
	const store = useChatStore();
	const agent = ref();
	const toast = useToast();
	watch(() => toValue(agentId), async (id) => {
		if (!id) {
			agent.value = void 0;
			return;
		}
		try {
			agent.value = await store.fetchCustomAgent(id);
		} catch (error) {
			toast.showError(error, "Failed to load agent");
		}
	}, { immediate: true });
	return agent;
}
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
		const customAgent = useCustomAgent(props.data.agentId);
		const name = ref("");
		const description = ref("");
		const systemPrompt = ref("");
		const selectedModel = ref(null);
		const isSaving = ref(false);
		const isDeleting = ref(false);
		const tools = ref([]);
		const agentSelectedCredentials = ref({});
		const credentialIdForSelectedModelProvider = computed(() => selectedModel.value && agentMergedCredentials.value[selectedModel.value.provider]);
		const selectedAgent = computed(() => selectedModel.value && chatStore.getAgent(selectedModel.value, selectedModel.value.model));
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
		watch(customAgent, (agent) => {
			if (!agent) return;
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
		function onCredentialSelected(provider, credentialId) {
			agentSelectedCredentials.value = {
				...agentSelectedCredentials.value,
				[provider]: credentialId
			};
		}
		function onModelChange(agent) {
			assert(isLlmProviderModel(agent.model));
			selectedModel.value = agent.model;
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
						default: withCtx(() => [createVNode(unref(N8nInput_default), {
							id: "agent-name",
							modelValue: name.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => name.value = $event),
							placeholder: unref(i18n).baseText("chatHub.agent.editor.name.placeholder"),
							maxlength: 128,
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
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => systemPrompt.value = $event),
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
							"warn-missing-credentials": "",
							onChange: onModelChange,
							onSelectCredential: onCredentialSelected
						}, null, 8, [
							"selected-agent",
							"credentials",
							"disabled"
						])]),
						_: 1
					}, 8, ["class", "label"]), createVNode(unref(N8nInputLabel_default), {
						"input-name": "agent-model",
						class: normalizeClass(_ctx.$style.input),
						label: unref(i18n).baseText("chatHub.agent.editor.tools.label"),
						required: false
					}, {
						default: withCtx(() => [createBaseVNode("div", null, [createVNode(ToolsSelector_default, {
							disabled: isLoadingAgent.value,
							selected: tools.value,
							onSelect: onSelectTools
						}, null, 8, ["disabled", "selected"])])]),
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
					onClick: _cache[3] || (_cache[3] = ($event) => modalBus.value.emit("close"))
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
	spinner: "_spinner_r4k5u_123",
	header: "_header_r4k5u_130",
	content: "_content_r4k5u_138",
	input: "_input_r4k5u_145",
	row: "_row_r4k5u_149",
	footer: "_footer_r4k5u_154"
};
var AgentEditorModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(AgentEditorModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentEditorModal_vue_vue_type_style_index_0_lang_module_default }]]);
export { AgentEditorModal_default as default };
