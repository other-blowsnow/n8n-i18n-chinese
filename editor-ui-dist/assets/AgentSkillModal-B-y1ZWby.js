import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Nt as reactive, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _n as normalizeClass, gt as watch, j as createVNode, q as onBeforeUnmount, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { it as useI18n } from "./core-CwaTdA6t.js";
import { Ca as N8nText_default, Ta as N8nIcon_default, et as N8nFormInput_default, wa as N8nButton_default, xa as N8nHeading_default } from "./src-4M_3Mukr.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { r as useUIStore } from "./users.store-DI4bmc3m.js";
import { ao as AGENT_SKILL_INSTRUCTIONS_MAX_LENGTH } from "./constants-CVUc8I0d.js";
import { t as Modal_default } from "./Modal-C_u-cAHv.js";
import { H as EditorView, ht as EditorState, nt as lineNumbers, pt as Compartment } from "./dist-Cs83JkaM.js";
import { t as codeEditorTheme } from "./theme-BCIHRxyh.js";
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
		const container = ref();
		const fileInput = ref();
		const name = ref(props.skill.name);
		const description = ref(props.skill.description);
		const fileError = ref("");
		const formValidation = reactive({
			name: false,
			description: false
		});
		let view = null;
		let applyingExternalUpdate = false;
		const editable = new Compartment();
		const readOnly = new Compartment();
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
		function createEditor(doc) {
			if (!container.value) return;
			view = new EditorView({
				state: EditorState.create({
					doc,
					extensions: [
						lineNumbers(),
						EditorView.lineWrapping,
						readOnly.of(EditorState.readOnly.of(props.disabled)),
						editable.of(EditorView.editable.of(!props.disabled)),
						EditorView.updateListener.of((update) => {
							if (!update.docChanged || applyingExternalUpdate) return;
							emit("update:skill", { instructions: update.state.doc.toString() });
						}),
						codeEditorTheme({
							isReadOnly: props.disabled,
							maxHeight: "100%"
						})
					]
				}),
				parent: container.value
			});
		}
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
		function replaceInstructions(instructions) {
			fileError.value = "";
			if (view) {
				view.dispatch({ changes: {
					from: 0,
					to: view.state.doc.length,
					insert: instructions
				} });
				return;
			}
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
		onMounted(() => createEditor(props.skill.instructions ?? ""));
		onBeforeUnmount(() => {
			view?.destroy();
			view = null;
		});
		watch(() => props.skill.instructions, (next) => {
			if (!view) return;
			const nextDoc = next ?? "";
			if (view.state.doc.toString() === nextDoc) return;
			applyingExternalUpdate = true;
			view.dispatch({ changes: {
				from: 0,
				to: view.state.doc.length,
				insert: nextDoc
			} });
			applyingExternalUpdate = false;
		});
		watch(() => props.skill.name, (value) => {
			if (value !== name.value) name.value = value;
		});
		watch(() => props.skill.description, (value) => {
			if (value !== description.value) description.value = value;
		});
		watch(() => props.disabled, (disabled) => {
			if (!view) return;
			view.dispatch({ effects: [readOnly.reconfigure(EditorState.readOnly.of(disabled)), editable.reconfigure(EditorView.editable.of(!disabled))] });
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
					createBaseVNode("div", {
						ref_key: "container",
						ref: container,
						class: normalizeClass(_ctx.$style.editor)
					}, null, 2),
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
	panel: "_panel_14pj1_125",
	scrollable: "_scrollable_14pj1_136",
	field: "_field_14pj1_142",
	instructionsField: "_instructionsField_14pj1_148",
	label: "_label_14pj1_153",
	instructionsHeader: "_instructionsHeader_14pj1_157",
	fileInput: "_fileInput_14pj1_164",
	editor: "_editor_14pj1_168"
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
