import { $ as openBlock, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, pt as useTemplateRef, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-CfxRLJPc.js";
import { Wi as N8nIconButton_default, ji as N8nChatInput_default, zi as N8nTooltip_default } from "./src-XWsjz-dU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { C as useSpeechRecognition } from "./core-CxAuVuwP.js";
//#region src/features/ai/shared/components/ChatInputBase.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["accept"];
var ChatInputBase_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatInputBase",
	props: {
		modelValue: {},
		placeholder: { default: void 0 },
		isStreaming: { type: Boolean },
		canSubmit: { type: Boolean },
		disabled: { type: Boolean },
		showVoice: { type: Boolean },
		showAttach: { type: Boolean },
		acceptedMimeTypes: { default: void 0 },
		autosize: {
			type: [Boolean, Object],
			default: () => ({
				minRows: 2,
				maxRows: 6
			})
		},
		buttonLabel: { default: void 0 },
		activeRequiresFocus: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"update:modelValue",
		"submit",
		"stop",
		"tab",
		"files-selected"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const inputRef = useTemplateRef("inputRef");
		const fileInputRef = useTemplateRef("fileInputRef");
		const isFocused = ref(false);
		const submitMuted = computed(() => props.activeRequiresFocus && !isFocused.value);
		const committedSpokenMessage = ref("");
		const speechInput = useSpeechRecognition({
			continuous: true,
			interimResults: true,
			lang: navigator.language
		});
		watch(speechInput.result, (spoken) => {
			if (props.showVoice) {
				const prefix = committedSpokenMessage.value;
				emit("update:modelValue", prefix + (prefix.length > 0 ? " " : "") + spoken.trimStart());
			}
		});
		watch(speechInput.isFinal, (final) => {
			if (final && props.showVoice) committedSpokenMessage.value = props.modelValue;
		}, { flush: "post" });
		function handleMic() {
			committedSpokenMessage.value = props.modelValue;
			if (speechInput.isListening.value) speechInput.stop();
			else speechInput.start();
		}
		function handleAttach() {
			fileInputRef.value?.click();
		}
		function focusInput() {
			inputRef.value?.focusInput();
		}
		function handleFileSelect(e) {
			const target = e.target;
			const files = target.files;
			if (!files || files.length === 0) return;
			emit("files-selected", Array.from(files));
			target.value = "";
			focusInput();
		}
		function handlePaste(e) {
			if (!props.showAttach || !e.clipboardData?.files.length) return;
			const files = Array.from(e.clipboardData.files);
			if (files.length > 0) {
				e.preventDefault();
				emit("files-selected", files);
			}
		}
		function handleKeydown(e) {
			if (e.key === "Tab" && !e.shiftKey) {
				e.preventDefault();
				emit("tab");
			}
		}
		function handleSubmit() {
			if (!props.canSubmit) return;
			speechInput.stop();
			emit("submit");
		}
		__expose({ focus: focusInput });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.inputWrapper, {
					[_ctx.$style.focusGatedSubmit]: __props.activeRequiresFocus,
					[_ctx.$style.submitMuted]: submitMuted.value
				}]),
				onPaste: handlePaste,
				onKeydownCapture: handleKeydown
			}, [__props.showAttach ? (openBlock(), createElementBlock("input", {
				key: 0,
				ref_key: "fileInputRef",
				ref: fileInputRef,
				type: "file",
				class: normalizeClass(_ctx.$style.fileInput),
				accept: __props.acceptedMimeTypes,
				multiple: "",
				onChange: handleFileSelect
			}, null, 42, _hoisted_1)) : createCommentVNode("", true), createVNode(unref(N8nChatInput_default), {
				ref_key: "inputRef",
				ref: inputRef,
				"model-value": __props.modelValue,
				placeholder: __props.placeholder,
				streaming: __props.isStreaming,
				disabled: __props.disabled,
				"submit-disabled": !__props.canSubmit,
				"button-label": props.buttonLabel,
				"send-button-test-id": "instance-ai-send-button",
				"stop-button-test-id": "instance-ai-stop-button",
				autosize: __props.autosize,
				layout: __props.autosize === false ? "single-line" : "multiline",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", $event)),
				onSubmit: handleSubmit,
				onStop: _cache[1] || (_cache[1] = ($event) => emit("stop")),
				onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
				onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false)
			}, {
				leading: withCtx(() => [renderSlot(_ctx.$slots, "attachments")]),
				"left-actions": withCtx(() => [renderSlot(_ctx.$slots, "footer-start")]),
				"right-actions": withCtx(() => [__props.showAttach ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(i18n).baseText("chatInputBase.button.attach"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						disabled: __props.disabled || __props.isStreaming,
						icon: "paperclip",
						"icon-size": "large",
						"data-test-id": "chat-input-attach-button",
						onClick: withModifiers(handleAttach, ["stop"])
					}, null, 8, ["disabled"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true), __props.showVoice && unref(speechInput).isSupported ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					content: unref(i18n).baseText("chatInputBase.button.dictate"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						disabled: __props.disabled || __props.isStreaming,
						icon: unref(speechInput).isListening.value ? "square" : "mic",
						class: normalizeClass({ [_ctx.$style.recording]: unref(speechInput).isListening.value }),
						"icon-size": "large",
						"data-test-id": "chat-input-voice-button",
						onClick: withModifiers(handleMic, ["stop"])
					}, null, 8, [
						"disabled",
						"icon",
						"class"
					])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true)]),
				_: 3
			}, 8, [
				"model-value",
				"placeholder",
				"streaming",
				"disabled",
				"submit-disabled",
				"button-label",
				"autosize",
				"layout"
			])], 34);
		};
	}
});
var ChatInputBase_vue_vue_type_style_index_0_lang_module_default = {
	inputWrapper: "_inputWrapper_faqel_126",
	fileInput: "_fileInput_faqel_130",
	recording: "_recording_faqel_134",
	focusGatedSubmit: "_focusGatedSubmit_faqel_140",
	submitMuted: "_submitMuted_faqel_144"
};
var ChatInputBase_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatInputBase_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatInputBase_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ChatInputBase_default as t };
