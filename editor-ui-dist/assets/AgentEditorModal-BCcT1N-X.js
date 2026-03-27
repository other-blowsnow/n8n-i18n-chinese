import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, W as nextTick, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, at as resolveComponent, dt as useModel, gt as watch, h as withModifiers, j as createVNode, pt as useTemplateRef, rt as renderList, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { B as useTimeoutPoll, bt as useI18n, w as useDocumentVisibility, xt as I18nT } from "./_MapCache-65UNw25j.js";
import { $i as N8nIcon_default, Fi as Input_default, Ii as N8nIconButton_default, Mi as N8nTooltip_default, O as N8nIconPicker_default, Qi as N8nButton_default, Xi as N8nCallout_default, Yi as N8nHeading_default, Zi as N8nText_default, vt as N8nInputLabel_default } from "./src-BushEFrD.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import { As as useSettingsStore, Hr as usePostHog, Tr as useToast, at as useCredentialsStore, en as useTelemetry, jr as useMessage, r as useUIStore, t as useUsersStore } from "./users.store-buY8IFeq.js";
import { Kc as CHAT_HUB_SEMANTIC_SEARCH_EXPERIMENT, _i as emptyChatModelsResponse } from "./constants-DgFYHRsp.js";
import "./merge-BTwzEvFa.js";
import { r as useRootStore, v as assert } from "./_baseOrderBy-C-vNG9pj.js";
import { t as require_dateformat } from "./dateformat-CIyrhJiH.js";
import "./useDebounce-DMBVth9W.js";
import { t as Modal_default } from "./Modal-Bi3rB-0H.js";
import "./nodeIcon-CD_sOlVS.js";
import "./CredentialIcon-BcmNkOZQ.js";
import "./NodeIcon-Bp2F1h7o.js";
import "./dist-DrwP24hX.js";
import { c as CHAT_SETTINGS_VIEW, y as providerDisplayNames } from "./constants-CsI9wULx.js";
import { D as fetchChatModelsApi, E as fetchAgentApi, g as isLlmProviderModel, t as useChatStore, y as personalAgentDefaultIcon } from "./chat.store-uXx5LGUR.js";
import "./ChatAgentAvatar-bwq8faRM.js";
import { n as useFileDrop, t as ToolsSelector_default } from "./ToolsSelector-Bs3f0vFO.js";
import { n as ModelSelector_default, t as useCustomAgent } from "./useCustomAgent-BIN2RLRo.js";
var MAX_PROMPTS = 6;
var SuggestedPromptsEditor_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SuggestedPromptsEditor",
	props: {
		"modelValue": { required: true },
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const DEFAULT_PROMPT_ICON = {
			type: "icon",
			value: "comment"
		};
		const i18n = useI18n();
		const prompts = useModel(__props, "modelValue");
		const inputRefs = ref([]);
		function addPrompt() {
			if (prompts.value.length >= MAX_PROMPTS) return;
			prompts.value = [...prompts.value, {
				text: "",
				icon: DEFAULT_PROMPT_ICON
			}];
			nextTick(() => {
				inputRefs.value[prompts.value.length - 1]?.focus();
			});
		}
		function removePrompt(index) {
			prompts.value = prompts.value.filter((_, i) => i !== index);
		}
		function updateText(index, text) {
			prompts.value = prompts.value.map((p, i) => i === index ? {
				...p,
				text
			} : p);
		}
		function updateIcon(index, icon) {
			prompts.value = prompts.value.map((p, i) => i === index ? {
				...p,
				icon
			} : p);
		}
		function onInputKeydown(event, index) {
			if (event.key === "Enter") {
				event.preventDefault();
				if (prompts.value[index].text.trim().length > 0) addPrompt();
			} else if (event.key === "Backspace" && prompts.value[index].text === "") {
				event.preventDefault();
				removePrompt(index);
				if (index > 0) nextTick(() => {
					inputRefs.value[index - 1]?.focus();
				});
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.container, "suggested-prompts-editor"]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(prompts.value, (prompt, index) => {
				return openBlock(), createElementBlock("div", {
					key: index,
					class: normalizeClass(_ctx.$style.row)
				}, [
					createVNode(unref(N8nIconPicker_default), {
						"model-value": prompt.icon ?? DEFAULT_PROMPT_ICON,
						"button-tooltip": unref(i18n).baseText("chatHub.agent.editor.iconPicker.button.tooltip"),
						"onUpdate:modelValue": ($event) => updateIcon(index, $event)
					}, null, 8, [
						"model-value",
						"button-tooltip",
						"onUpdate:modelValue"
					]),
					createVNode(unref(Input_default), {
						ref_for: true,
						ref: (el) => {
							inputRefs.value[index] = el;
						},
						"model-value": prompt.text,
						placeholder: unref(i18n).baseText("chatHub.agent.editor.suggestedPrompts.placeholder"),
						maxlength: 256,
						class: normalizeClass(_ctx.$style.input),
						"onUpdate:modelValue": ($event) => updateText(index, $event),
						onKeydown: ($event) => onInputKeydown($event, index)
					}, null, 8, [
						"model-value",
						"placeholder",
						"class",
						"onUpdate:modelValue",
						"onKeydown"
					]),
					createVNode(unref(N8nButton_default), {
						variant: "ghost",
						icon: "x",
						size: "small",
						"data-testid": "remove-prompt-button",
						onClick: ($event) => removePrompt(index)
					}, null, 8, ["onClick"])
				], 2);
			}), 128)), createVNode(unref(N8nButton_default), {
				variant: "subtle",
				icon: "plus",
				size: "small",
				disabled: prompts.value.length >= MAX_PROMPTS,
				"data-testid": "add-prompt-button",
				onClick: addPrompt
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.agent.editor.suggestedPrompts.addButton")), 1)]),
				_: 1
			}, 8, ["disabled"])], 2);
		};
	}
});
var SuggestedPromptsEditor_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_kc4ev_125",
	row: "_row_kc4ev_131",
	input: "_input_kc4ev_137"
};
var SuggestedPromptsEditor_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SuggestedPromptsEditor_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SuggestedPromptsEditor_vue_vue_type_style_index_0_lang_module_default }]]);
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var AgentEditorModalFileRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentEditorModalFileRow",
	props: {
		item: {},
		semanticSearchReady: { type: Boolean },
		currentEmbeddingProvider: {}
	},
	emits: ["remove"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const formattedCreatedAt = computed(() => {
			const createdAt$1 = props.item.createdAt ?? (/* @__PURE__ */ new Date()).toISOString();
			const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
			const date = (0, import_dateformat.default)(createdAt$1, `mmmm d${createdAt$1.startsWith(currentYear) ? "" : ", yyyy"}`);
			return i18n.baseText("chatHub.agent.editor.files.createdAt", { interpolate: { date } });
		});
		const warningTooltip = computed(() => {
			if (props.item.isNew || props.item.status !== "indexed") return void 0;
			if (!props.semanticSearchReady) return i18n.baseText("chatHub.agent.editor.files.semanticSearchNotReady.tooltip");
			if (props.item.provider && props.item.provider !== props.currentEmbeddingProvider) return i18n.baseText("chatHub.agent.editor.files.embeddingMismatch.tooltip", { interpolate: {
				fileProvider: providerDisplayNames[props.item.provider],
				currentProvider: props.currentEmbeddingProvider ? providerDisplayNames[props.currentEmbeddingProvider] : "unknown"
			} });
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.fileRow) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.fileName) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.fileNameText) }, toDisplayString(__props.item.fileName), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.createdAt) }, toDisplayString(formattedCreatedAt.value), 3)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.indexedCell) }, [warningTooltip.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: warningTooltip.value
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						size: "small",
						class: normalizeClass(_ctx.$style.statusText)
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "triangle-alert",
							size: "medium",
							class: normalizeClass(_ctx.$style.iconWarning)
						}, null, 8, ["class"]), createTextVNode(" " + toDisplayString(unref(i18n).baseText("chatHub.agent.editor.files.unavailable")), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["content"])) : __props.item.status === "indexing" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nIcon_default), {
					icon: "loader",
					class: normalizeClass(_ctx.$style.iconIndexing),
					size: "medium"
				}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.agent.editor.files.indexing")), 1)]),
					_: 1
				})], 64)) : __props.item.status === "error" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 2,
					content: unref(i18n).baseText("chatHub.agent.editor.files.indexingError.tooltip", { interpolate: { error: __props.item.error ?? "Unknown error" } })
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						size: "small",
						color: "danger",
						class: normalizeClass(_ctx.$style.statusText)
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "circle-x",
							size: "medium"
						}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("chatHub.agent.editor.files.failed")), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true)], 2),
				__props.item.status !== "indexing" ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					icon: "trash-2",
					size: "small",
					variant: "subtle",
					onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("remove"), ["stop"]))
				})) : createCommentVNode("", true)
			], 2);
		};
	}
});
var AgentEditorModalFileRow_vue_vue_type_style_index_0_lang_module_default = {
	fileRow: "_fileRow_17tdo_125",
	fileName: "_fileName_17tdo_137",
	fileNameText: "_fileNameText_17tdo_144",
	createdAt: "_createdAt_17tdo_152",
	indexedCell: "_indexedCell_17tdo_158",
	iconWarning: "_iconWarning_17tdo_165",
	iconIndexing: "_iconIndexing_17tdo_169",
	spin: "_spin_17tdo_1",
	statusText: "_statusText_17tdo_183"
};
var AgentEditorModalFileRow_default = /* @__PURE__ */ __plugin_vue_export_helper_default(AgentEditorModalFileRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentEditorModalFileRow_vue_vue_type_style_index_0_lang_module_default }]]);
var AgentEditorModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentEditorModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const chatStore = useChatStore();
		const usersStore = useUsersStore();
		const settingsStore = useSettingsStore();
		const credentialsStore = useCredentialsStore();
		const i18n = useI18n();
		const canConfigureVectorStore = computed(() => usersStore.isInstanceOwner);
		const canUploadFiles = computed(() => chatStore.semanticSearchReadiness.isReadyForCurrentUser);
		const toast = useToast();
		const message = useMessage();
		const uiStore = useUIStore();
		const documentVisibility = useDocumentVisibility();
		const { customAgent, isLoading: isLoadingCustomAgent } = useCustomAgent(props.data.agentId);
		const name = ref("");
		const description = ref("");
		const systemPrompt = ref("");
		const selectedModel = ref(null);
		const isSaving = ref(false);
		const isDeleting = ref(false);
		const toolIds = ref([]);
		const agents = ref(emptyChatModelsResponse);
		const isLoadingAgents = ref(false);
		const nameInputRef = useTemplateRef("nameInput");
		const icon = ref(personalAgentDefaultIcon);
		const savedFiles = ref([]);
		const newFiles = ref([]);
		const removedFileKnowledgeIds = ref([]);
		const fileInputRef = useTemplateRef("fileInput");
		const currentEmbeddingProvider = computed(() => settingsStore.moduleSettings["chat-hub"]?.semanticSearch.embeddingModel.provider ?? null);
		const agentUploadMaxSizeMb = computed(() => settingsStore.moduleSettings["chat-hub"]?.agentUploadMaxSizeMb ?? 20);
		const allFiles = computed(() => [...savedFiles.value.map((file) => ({
			...file,
			isNew: false
		})), ...newFiles.value.map((file, index) => ({
			id: `new-${index}`,
			type: "embedding",
			provider: currentEmbeddingProvider.value,
			fileName: file.name,
			mimeType: file.type,
			isNew: true
		}))]);
		const suggestedPrompts = ref([]);
		const agentSelectedCredentials = ref({});
		const credentialIdForSelectedModelProvider = computed(() => selectedModel.value && agentMergedCredentials.value[selectedModel.value.provider]);
		const selectedAgent = computed(() => selectedModel.value && chatStore.getAgent(selectedModel.value, { name: selectedModel.value.model }));
		const isEditMode = computed(() => !!props.data.agentId);
		const isLoadingAgent = computed(() => isEditMode.value && isLoadingCustomAgent.value);
		const title = computed(() => isEditMode.value ? i18n.baseText("chatHub.agent.editor.title.edit") : i18n.baseText("chatHub.agent.editor.title.new"));
		const saveButtonLabel = computed(() => isSaving.value ? i18n.baseText("chatHub.agent.editor.saving") : i18n.baseText("chatHub.agent.editor.save"));
		const isValid = computed(() => name.value.trim().length > 0 && selectedModel.value !== null && !!credentialIdForSelectedModelProvider.value);
		const agentMergedCredentials = computed(() => {
			return {
				...props.data.credentials,
				...agentSelectedCredentials.value
			};
		});
		const canSelectTools = computed(() => selectedAgent.value?.metadata.capabilities.functionCalling ?? false);
		function closeDialog() {
			uiStore.closeModal(props.modalName);
		}
		watch(selectedAgent, (agent) => {
			if (agent && !agent.metadata.capabilities.functionCalling) toolIds.value = [];
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
			savedFiles.value = agent.files;
			newFiles.value = [];
			removedFileKnowledgeIds.value = [];
			suggestedPrompts.value = agent.suggestedPrompts;
			toolIds.value = agent.toolIds ?? [];
			if (agent.credentialId) agentSelectedCredentials.value[agent.provider] = agent.credentialId;
		}, { immediate: true });
		onMounted(() => {
			watch([isLoadingAgent, nameInputRef], ([isLoading, nameInput]) => {
				if (!isLoading) nameInput?.focus();
			}, {
				immediate: true,
				flush: "post"
			});
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
		function handleToggleAgentTool(toolId) {
			if (toolIds.value.includes(toolId)) toolIds.value = toolIds.value.filter((id) => id !== toolId);
			else toolIds.value = [...toolIds.value, toolId];
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
				const filteredPrompts = suggestedPrompts.value.filter((p) => p.text.trim().length > 0);
				const payload = {
					name: name.value.trim(),
					description: description.value.trim() || void 0,
					systemPrompt: systemPrompt.value.trim(),
					...selectedModel.value,
					credentialId: credentialIdForSelectedModelProvider.value,
					toolIds: toolIds.value,
					icon: icon.value,
					suggestedPrompts: filteredPrompts.length > 0 ? filteredPrompts : void 0
				};
				const hasNewFiles = newFiles.value.length > 0;
				const addedFiles = [...newFiles.value];
				if (isEditMode.value && props.data.agentId) {
					await chatStore.updateCustomAgent(props.data.agentId, payload, addedFiles, removedFileKnowledgeIds.value, props.data.credentials);
					if (addedFiles.length > 0) {
						const totalSizeMb = addedFiles.reduce((sum, f) => sum + f.size, 0) / (1024 * 1024);
						telemetry.track("User added files to personal agent", {
							count: addedFiles.length,
							total_size_mb: totalSizeMb,
							agent_id: props.data.agentId
						});
					}
					toast.showMessage({
						title: i18n.baseText("chatHub.agent.editor.success.update"),
						message: hasNewFiles ? i18n.baseText("chatHub.agent.editor.success.withFiles") : void 0,
						type: "success"
					});
				} else {
					const agent = await chatStore.createCustomAgent(payload, addedFiles, props.data.credentials);
					if (addedFiles.length > 0) {
						const totalSizeMb = addedFiles.reduce((sum, f) => sum + f.size, 0) / (1024 * 1024);
						telemetry.track("User added files to personal agent", {
							count: addedFiles.length,
							total_size_mb: totalSizeMb,
							agent_id: agent.model.provider === "custom-agent" ? agent.model.agentId : void 0
						});
					}
					props.data.onCreateCustomAgent?.(agent);
					toast.showMessage({
						title: i18n.baseText("chatHub.agent.editor.success.create"),
						message: hasNewFiles ? i18n.baseText("chatHub.agent.editor.success.withFiles") : void 0,
						type: "success"
					});
				}
				closeDialog();
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
				closeDialog();
			} catch (error) {
				const errorMessage = error instanceof Error ? error.message : "";
				toast.showError(error, i18n.baseText("chatHub.agent.editor.error.delete"), errorMessage);
			} finally {
				isDeleting.value = false;
			}
		}
		function isFileTypeAccepted(file) {
			return file.type === "application/pdf";
		}
		function validateFileSizes(files) {
			const maxSizeBytes = agentUploadMaxSizeMb.value * 1024 * 1024;
			for (const file of files) if (file.size > maxSizeBytes) {
				toast.showMessage({
					title: i18n.baseText("chatHub.agent.editor.files.tooLarge", { interpolate: {
						fileName: file.name,
						maxSizeMb: agentUploadMaxSizeMb.value
					} }),
					type: "error"
				});
				return false;
			}
			return true;
		}
		function onFilesDropped(droppedFiles) {
			const acceptedFiles = droppedFiles.filter((file) => isFileTypeAccepted(file));
			if (acceptedFiles.length === 0) return;
			if (!validateFileSizes(acceptedFiles)) return;
			newFiles.value = [...newFiles.value, ...acceptedFiles];
		}
		function handleFileSelect(event) {
			const target = event.target;
			if (!target.files) return;
			const acceptedFiles = Array.from(target.files).filter((file) => isFileTypeAccepted(file));
			if (acceptedFiles.length === 0) {
				target.value = "";
				return;
			}
			if (!validateFileSizes(acceptedFiles)) {
				target.value = "";
				return;
			}
			newFiles.value = [...newFiles.value, ...acceptedFiles];
			target.value = "";
		}
		function handleClickUploadArea() {
			fileInputRef.value?.click();
		}
		function removeFile(row$2) {
			if (row$2.isNew) newFiles.value = newFiles.value.filter((_, i) => `new-${i}` !== row$2.id);
			else {
				removedFileKnowledgeIds.value = [...removedFileKnowledgeIds.value, row$2.id];
				savedFiles.value = savedFiles.value.filter((f) => f.id !== row$2.id);
			}
		}
		const posthogStore = usePostHog();
		const telemetry = useTelemetry();
		const isSemanticSearchEnabled = computed(() => posthogStore.isVariantEnabled(CHAT_HUB_SEMANTIC_SEARCH_EXPERIMENT.name, CHAT_HUB_SEMANTIC_SEARCH_EXPERIMENT.variant));
		const fileDrop = useFileDrop(true, onFilesDropped, ["application/pdf"]);
		const hasIndexingFiles = computed(() => savedFiles.value.some((f) => f.status === "indexing"));
		const { pause, resume } = useTimeoutPoll(async () => {
			if (!props.data.agentId) return;
			try {
				savedFiles.value = (await fetchAgentApi(useRootStore().restApiContext, props.data.agentId)).files;
			} catch {}
		}, 5e3);
		watch(hasIndexingFiles, (hasIndexing) => {
			if (hasIndexing && props.data.agentId) resume();
			else pause();
		}, { immediate: true });
		watch(documentVisibility, (visibility) => {
			if (visibility === "visible" && !canUploadFiles.value) {
				settingsStore.getModuleSettings();
				credentialsStore.fetchAllCredentials();
			}
		});
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createBlock(Modal_default, {
				name: __props.modalName,
				width: "640px",
				loading: isLoadingAgent.value
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(title.value), 1)]),
					_: 1
				}), isEditMode.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "subtle",
					icon: "trash-2",
					class: normalizeClass(_ctx.$style.deleteButton),
					disabled: isDeleting.value,
					loading: isDeleting.value,
					onClick: onDelete
				}, null, 8, [
					"class",
					"disabled",
					"loading"
				])) : createCommentVNode("", true)], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentWrapper) }, [isSemanticSearchEnabled.value && unref(fileDrop).isDragging.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.dropOverlay)
				}, [unref(fileDrop).isDraggingUnsupported.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "large",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.agent.editor.dropOverlay.unsupportedFileType")), 1)]),
					_: 1
				})) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "large",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.agent.editor.dropOverlay.addFile")), 1)]),
					_: 1
				}))], 2)) : createCommentVNode("", true), createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.content, { [_ctx.$style.isDraggingFile]: isSemanticSearchEnabled.value && unref(fileDrop).isDragging.value }]),
					onDragenter: _cache[5] || (_cache[5] = ($event) => isSemanticSearchEnabled.value && canUploadFiles.value ? unref(fileDrop).handleDragEnter($event) : void 0),
					onDragleave: _cache[6] || (_cache[6] = ($event) => isSemanticSearchEnabled.value && canUploadFiles.value ? unref(fileDrop).handleDragLeave($event) : void 0),
					onDragover: _cache[7] || (_cache[7] = ($event) => isSemanticSearchEnabled.value && canUploadFiles.value ? unref(fileDrop).handleDragOver($event) : void 0),
					onDrop: _cache[8] || (_cache[8] = ($event) => isSemanticSearchEnabled.value && canUploadFiles.value ? unref(fileDrop).handleDrop($event) : void 0)
				}, [
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "agent-name",
						label: unref(i18n).baseText("chatHub.agent.editor.name.label"),
						required: true
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.agentName) }, [createVNode(unref(N8nIconPicker_default), {
							modelValue: icon.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => icon.value = $event),
							"button-tooltip": unref(i18n).baseText("chatHub.agent.editor.iconPicker.button.tooltip")
						}, null, 8, ["modelValue", "button-tooltip"]), createVNode(unref(Input_default), {
							id: "agent-name",
							ref: "nameInput",
							modelValue: name.value,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => name.value = $event),
							placeholder: unref(i18n).baseText("chatHub.agent.editor.name.placeholder"),
							maxlength: 128,
							class: normalizeClass(_ctx.$style.agentNameInput)
						}, null, 8, [
							"modelValue",
							"placeholder",
							"class"
						])], 2)]),
						_: 1
					}, 8, ["label"]),
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "agent-description",
						label: unref(i18n).baseText("chatHub.agent.editor.description.label")
					}, {
						default: withCtx(() => [createVNode(unref(Input_default), {
							id: "agent-description",
							modelValue: description.value,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => description.value = $event),
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
						label: unref(i18n).baseText("chatHub.agent.editor.systemPrompt.label")
					}, {
						default: withCtx(() => [createVNode(unref(Input_default), {
							id: "agent-system-prompt",
							modelValue: systemPrompt.value,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => systemPrompt.value = $event),
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
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "agent-suggested-prompts",
						label: unref(i18n).baseText("chatHub.agent.editor.suggestedPrompts.label"),
						"tooltip-text": unref(i18n).baseText("chatHub.agent.editor.suggestedPrompts.tooltip"),
						"show-tooltip": true
					}, {
						default: withCtx(() => [createVNode(SuggestedPromptsEditor_default, {
							modelValue: suggestedPrompts.value,
							"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => suggestedPrompts.value = $event)
						}, null, 8, ["modelValue"])]),
						_: 1
					}, 8, ["label", "tooltip-text"]),
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
							agents: agents.value,
							"is-loading": isLoadingAgents.value,
							class: normalizeClass(_ctx.$style.modelSelector),
							"warn-missing-credentials": "",
							onChange: onModelChange,
							onSelectCredential: onCredentialSelected
						}, null, 8, [
							"selected-agent",
							"credentials",
							"agents",
							"is-loading",
							"class"
						])]),
						_: 1
					}, 8, ["class", "label"]), createVNode(unref(N8nInputLabel_default), {
						"input-name": "agent-tool",
						class: normalizeClass(_ctx.$style.input),
						label: unref(i18n).baseText("chatHub.agent.editor.tools.label"),
						required: false
					}, {
						default: withCtx(() => [createBaseVNode("div", null, [createVNode(ToolsSelector_default, {
							disabled: !canSelectTools.value,
							"disabled-tooltip": canSelectTools.value ? void 0 : selectedModel.value ? unref(i18n).baseText("chatHub.tools.selector.disabled.tooltip") : unref(i18n).baseText("chatHub.tools.selector.disabled.noModel.tooltip"),
							"checked-tool-ids": toolIds.value,
							onToggle: handleToggleAgentTool
						}, null, 8, [
							"disabled",
							"disabled-tooltip",
							"checked-tool-ids"
						])])]),
						_: 1
					}, 8, ["class", "label"])], 2),
					isSemanticSearchEnabled.value ? (openBlock(), createBlock(unref(N8nInputLabel_default), {
						key: 0,
						"input-name": "agent-files",
						label: unref(i18n).baseText("chatHub.agent.editor.files.label"),
						required: false
					}, {
						default: withCtx(() => [
							createBaseVNode("input", {
								ref: "fileInput",
								type: "file",
								class: normalizeClass(_ctx.$style.fileInput),
								accept: "application/pdf",
								multiple: "",
								onChange: handleFileSelect
							}, null, 34),
							!canUploadFiles.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
								key: 0,
								theme: "info",
								icon: "info",
								class: normalizeClass(_ctx.$style.vectorStoreCallout)
							}, {
								default: withCtx(() => [createVNode(unref(I18nT), {
									keypath: canConfigureVectorStore.value ? "chatHub.agent.editor.semanticSearch.notReady.canConfigure" : "chatHub.agent.editor.semanticSearch.notReady",
									tag: "span",
									scope: "global"
								}, {
									settingsLink: withCtx(() => [createVNode(_component_RouterLink, {
										to: { name: unref(CHAT_SETTINGS_VIEW) },
										target: "_blank",
										class: normalizeClass(_ctx.$style.settingsLink)
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.agent.editor.semanticSearch.settingsLink")), 1)]),
										_: 1
									}, 8, ["to", "class"])]),
									_: 1
								}, 8, ["keypath"])]),
								_: 1
							}, 8, ["class"])) : createCommentVNode("", true),
							allFiles.value.length > 0 ? (openBlock(), createElementBlock("div", {
								key: 1,
								class: normalizeClass(_ctx.$style.fileList)
							}, [(openBlock(true), createElementBlock(Fragment, null, renderList(allFiles.value, (item) => {
								return openBlock(), createBlock(AgentEditorModalFileRow_default, {
									key: item.id,
									item,
									"semantic-search-ready": canUploadFiles.value,
									"current-embedding-provider": currentEmbeddingProvider.value,
									onRemove: ($event) => removeFile(item)
								}, null, 8, [
									"item",
									"semantic-search-ready",
									"current-embedding-provider",
									"onRemove"
								]);
							}), 128))], 2)) : createCommentVNode("", true),
							createVNode(unref(N8nButton_default), {
								type: "tertiary",
								icon: "plus",
								variant: "subtle",
								class: normalizeClass(_ctx.$style.addFileButton),
								disabled: !canUploadFiles.value,
								onClick: handleClickUploadArea
							}, {
								default: withCtx(() => [..._cache[9] || (_cache[9] = [createTextVNode(" Add file ", -1)])]),
								_: 1
							}, 8, ["class", "disabled"])
						]),
						_: 1
					}, 8, ["label"])) : createCommentVNode("", true)
				], 34)], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: closeDialog
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.tools.editor.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					disabled: !isValid.value || isSaving.value,
					onClick: onSave
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(saveButtonLabel.value), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)]),
				_: 1
			}, 8, ["name", "loading"]);
		};
	}
});
var AgentEditorModal_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_c3h8p_125",
	deleteButton: "_deleteButton_c3h8p_133",
	contentWrapper: "_contentWrapper_c3h8p_137",
	content: "_content_c3h8p_137",
	vectorStoreCallout: "_vectorStoreCallout_c3h8p_152",
	settingsLink: "_settingsLink_c3h8p_156",
	isDraggingFile: "_isDraggingFile_c3h8p_161",
	dropOverlay: "_dropOverlay_c3h8p_165",
	input: "_input_c3h8p_179",
	agentName: "_agentName_c3h8p_183",
	agentNameInput: "_agentNameInput_c3h8p_189",
	row: "_row_c3h8p_193",
	modelSelector: "_modelSelector_c3h8p_199",
	footer: "_footer_c3h8p_203",
	fileInput: "_fileInput_c3h8p_209",
	addFileButton: "_addFileButton_c3h8p_213",
	fileList: "_fileList_c3h8p_218",
	credentialPickerRow: "_credentialPickerRow_c3h8p_224",
	credentialPicker: "_credentialPicker_c3h8p_224"
};
var AgentEditorModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(AgentEditorModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentEditorModal_vue_vue_type_style_index_0_lang_module_default }]]);
export { AgentEditorModal_default as default };
