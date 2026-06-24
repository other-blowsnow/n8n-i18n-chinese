import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, Pt as reactive, S as computed, T as createCommentVNode, bt as withCtx, gt as watch, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { s as useI18n } from "./src-2bgghuOQ.js";
import { Ga as N8nHeading_default, Ja as N8nButton_default, Ya as N8nIcon_default, qa as N8nText_default, st as N8nFormInput_default, t as MarkdownEditor_default } from "./src-BwN8TeVO.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { do as AGENT_SKILL_INSTRUCTIONS_MAX_LENGTH } from "./constants-BiYlbN9Z.js";
import { f as useUIStore } from "./users.store-CUZkGc51.js";
import { t as Modal_default } from "./Modal-BPkKtKFQ.js";
//#region src/features/agents/components/AgentSkillViewer.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["disabled"];
var AgentSkillViewer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSkillViewer",
	props: {
		skill: {},
		disabled: {
			type: Boolean,
			default: false
		},
		errors: {},
		scrollable: {
			type: Boolean,
			default: true
		},
		showValidationWarnings: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:skill", "update:valid"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const fileInput = ref();
		const name = ref(props.skill.name);
		const description = ref(props.skill.description);
		const fileError = ref("");
		const formValidation = reactive({
			name: false,
			description: false
		});
		const nameValidationRules = [{
			name: "MAX_LENGTH",
			config: { maximum: 128 }
		}];
		const descriptionValidationRules = [{
			name: "MAX_LENGTH",
			config: { maximum: 512 }
		}];
		const instructionsError = computed(() => {
			const value = props.skill.instructions ?? "";
			if (!value.trim()) return "";
			if (value.length > 1e4) return i18n.baseText("agents.builder.skills.validation.instructionsMaxLength", { interpolate: { max: String(AGENT_SKILL_INSTRUCTIONS_MAX_LENGTH) } });
			return "";
		});
		const instructionsValid = computed(() => Boolean((props.skill.instructions ?? "").trim()) && !instructionsError.value);
		const formIsValid = computed(() => formValidation.name && formValidation.description && instructionsValid.value);
		const instructionsCharacterCount = computed(() => i18n.baseText("agents.builder.skills.instructions.characterCount", { interpolate: {
			count: (props.skill.instructions ?? "").length.toLocaleString(),
			max: AGENT_SKILL_INSTRUCTIONS_MAX_LENGTH.toLocaleString()
		} }));
		const acceptedInstructionExtensions = new Set(["txt", "md"]);
		function onNameInput(value) {
			const next = typeof value === "string" ? value : String(value ?? "");
			name.value = next;
			emit("update:skill", { name: next });
		}
		function onDescriptionInput(value) {
			const next = typeof value === "string" ? value : String(value ?? "");
			description.value = next;
			emit("update:skill", { description: next });
		}
		function onFieldValidate(field, valid) {
			formValidation[field] = valid;
		}
		function onInstructionsInput(value) {
			emit("update:skill", { instructions: value });
		}
		function replaceInstructions(instructions) {
			fileError.value = "";
			emit("update:skill", { instructions });
		}
		function openFilePicker() {
			fileInput.value?.click();
		}
		function readInstructionsFile(file) {
			const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
			if (!acceptedInstructionExtensions.has(extension)) {
				fileError.value = i18n.baseText("agents.builder.skills.instructions.file.invalidType");
				return;
			}
			const reader = new FileReader();
			reader.onload = () => {
				replaceInstructions(String(reader.result ?? ""));
				reader.onload = null;
				reader.onerror = null;
			};
			reader.onerror = () => {
				fileError.value = i18n.baseText("agents.builder.skills.instructions.file.readError");
				reader.onload = null;
				reader.onerror = null;
			};
			reader.readAsText(file);
		}
		function onInstructionsFileChange(event) {
			const input = event.target instanceof HTMLInputElement ? event.target : null;
			const file = input?.files?.[0];
			if (file) readInstructionsFile(file);
			if (input) input.value = "";
		}
		watch(() => props.skill.name, (value) => {
			if (value !== name.value) name.value = value;
		});
		watch(() => props.skill.description, (value) => {
			if (value !== description.value) description.value = value;
		});
		watch(formIsValid, (valid) => emit("update:valid", valid), { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.panel, props.scrollable && _ctx.$style.scrollable]),
				"data-testid": "agent-skill-viewer"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [createVNode(unref(N8nFormInput_default), {
					"model-value": name.value,
					label: unref(i18n).baseText("agents.builder.skills.name.label"),
					name: "skill-name",
					required: "",
					"label-size": "small",
					placeholder: unref(i18n).baseText("agents.builder.skills.name.placeholder"),
					disabled: props.disabled,
					"show-validation-warnings": props.showValidationWarnings,
					"validation-rules": nameValidationRules,
					"data-testid": "agent-skill-name-input",
					"onUpdate:modelValue": onNameInput,
					onValidate: _cache[0] || (_cache[0] = ($event) => onFieldValidate("name", $event))
				}, null, 8, [
					"model-value",
					"label",
					"placeholder",
					"disabled",
					"show-validation-warnings"
				])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [createVNode(unref(N8nFormInput_default), {
					"model-value": description.value,
					label: unref(i18n).baseText("agents.builder.skills.description.label"),
					name: "skill-description",
					required: "",
					"label-size": "small",
					placeholder: unref(i18n).baseText("agents.builder.skills.description.placeholder"),
					disabled: props.disabled,
					"show-validation-warnings": props.showValidationWarnings,
					"validation-rules": descriptionValidationRules,
					"data-testid": "agent-skill-description-input",
					"onUpdate:modelValue": onDescriptionInput,
					onValidate: _cache[1] || (_cache[1] = ($event) => onFieldValidate("description", $event))
				}, null, 8, [
					"model-value",
					"label",
					"placeholder",
					"disabled",
					"show-validation-warnings"
				])], 2),
				createBaseVNode("div", { class: normalizeClass([_ctx.$style.field, _ctx.$style.instructionsField]) }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.instructionsHeader) }, [
						createBaseVNode("label", { class: normalizeClass(_ctx.$style.label) }, [createVNode(unref(N8nText_default), {
							size: "small",
							bold: true
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.instructions.label")), 1)]),
							_: 1
						})], 2),
						createVNode(unref(N8nButton_default), {
							variant: "subtle",
							size: "mini",
							disabled: props.disabled,
							"data-testid": "agent-skill-upload-instructions",
							onClick: openFilePicker
						}, {
							prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "upload",
								size: 12
							})]),
							default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.builder.skills.instructions.file.upload")), 1)]),
							_: 1
						}, 8, ["disabled"]),
						createBaseVNode("input", {
							ref_key: "fileInput",
							ref: fileInput,
							type: "file",
							accept: ".txt,.md,text/plain,text/markdown",
							disabled: props.disabled,
							class: normalizeClass(_ctx.$style.fileInput),
							"data-testid": "agent-skill-instructions-file-input",
							onChange: onInstructionsFileChange
						}, null, 42, _hoisted_1)
					], 2),
					createVNode(unref(MarkdownEditor_default), {
						class: normalizeClass(_ctx.$style.editor),
						"model-value": props.skill.instructions ?? "",
						readonly: props.disabled,
						"max-height": "100%",
						"data-testid": "agent-skill-instructions-editor",
						"onUpdate:modelValue": onInstructionsInput
					}, null, 8, [
						"class",
						"model-value",
						"readonly"
					]),
					fileError.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						color: "danger"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(fileError.value), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					instructionsError.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						size: "small",
						color: "danger"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(instructionsError.value), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					props.errors?.instructions ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 2,
						size: "small",
						color: "danger"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(props.errors.instructions), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(instructionsCharacterCount.value), 1)]),
						_: 1
					})
				], 2)
			], 2);
		};
	}
});
var AgentSkillViewer_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_1qp5h_125",
	scrollable: "_scrollable_1qp5h_136",
	field: "_field_1qp5h_142",
	instructionsField: "_instructionsField_1qp5h_148",
	label: "_label_1qp5h_153",
	instructionsHeader: "_instructionsHeader_1qp5h_157",
	fileInput: "_fileInput_1qp5h_164",
	editor: "_editor_1qp5h_168"
};
var AgentSkillViewer_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSkillViewer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSkillViewer_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentSkillModal.vue?vue&type=script&setup=true&lang.ts
var AgentSkillModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSkillModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const skill = ref({
			name: props.data.skill?.name ?? "",
			description: props.data.skill?.description ?? "",
			instructions: props.data.skill?.instructions ?? ""
		});
		const submitted = ref(false);
		const formIsValid = ref(false);
		const isEditing = computed(() => !!props.data.skillId);
		const validationErrors = computed(() => {
			const errors = {};
			const name = skill.value.name.trim();
			const description = skill.value.description.trim();
			const instructions = skill.value.instructions.trim();
			if (!name) errors.name = i18n.baseText("agents.builder.skills.validation.nameRequired");
			else if (name.length > 128) errors.name = i18n.baseText("agents.builder.skills.validation.nameMaxLength");
			if (!description) errors.description = i18n.baseText("agents.builder.skills.validation.descriptionRequired");
			else if (description.length > 512) errors.description = i18n.baseText("agents.builder.skills.validation.descriptionMaxLength");
			if (!instructions) errors.instructions = i18n.baseText("agents.builder.skills.validation.instructionsRequired");
			return errors;
		});
		const visibleErrors = computed(() => submitted.value ? validationErrors.value : {});
		const canSave = computed(() => formIsValid.value);
		function onSkillUpdate(updates) {
			skill.value = {
				...skill.value,
				...updates
			};
		}
		function onValidUpdate(valid) {
			formIsValid.value = valid;
		}
		function closeModal() {
			uiStore.closeModal(props.modalName);
		}
		function onSave() {
			submitted.value = true;
			if (!canSave.value) return;
			const payload = {
				name: skill.value.name.trim(),
				description: skill.value.description.trim(),
				instructions: skill.value.instructions
			};
			props.data.onConfirm({
				id: props.data.skillId,
				skill: payload
			});
			closeModal();
		}
		function onRemove() {
			if (!props.data.skillId) return;
			props.data.onRemove?.(props.data.skillId);
			closeModal();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: props.modalName,
				width: "860px",
				"custom-class": _ctx.$style.modal,
				"data-testid": "agent-skill-modal"
			}, {
				header: withCtx(() => [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.create.title")), 1)]),
					_: 1
				})]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(AgentSkillViewer_default, {
					skill: skill.value,
					errors: visibleErrors.value,
					scrollable: false,
					"show-validation-warnings": submitted.value,
					"onUpdate:skill": onSkillUpdate,
					"onUpdate:valid": onValidUpdate
				}, null, 8, [
					"skill",
					"errors",
					"show-validation-warnings"
				])], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [isEditing.value && __props.data.onRemove ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "subtle",
					"data-testid": "agent-skill-remove",
					onClick: onRemove
				}, {
					icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "trash-2",
						size: 16
					})]),
					default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.builder.skills.remove")), 1)]),
					_: 1
				})) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerActions) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: closeModal
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.create.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					disabled: !canSave.value,
					"data-testid": "agent-skill-create-save",
					onClick: onSave
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.create.save")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)], 2)]),
				_: 1
			}, 8, ["name", "custom-class"]);
		};
	}
});
var AgentSkillModal_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_9dbzy_2",
	modal: "_modal_9dbzy_8",
	footer: "_footer_9dbzy_14",
	footerActions: "_footerActions_9dbzy_20"
};
var AgentSkillModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSkillModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSkillModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentSkillModal_default as default };
