import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, T as createCommentVNode, Wt as unref, _n as normalizeClass, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, pt as useTemplateRef, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { s as useI18n } from "./src-BH7Ervrw.js";
import { Ii as Input_default, Li as N8nIconButton_default, Mi as N8nTooltip_default } from "./src-D7XhL4SE.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { S as useSpeechRecognition } from "./core-CMxey_qZ.js";
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
		function handleFileSelect(e) {
			const target = e.target;
			const files = target.files;
			if (!files || files.length === 0) return;
			emit("files-selected", Array.from(files));
			target.value = "";
			inputRef.value?.focus();
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
			if (e.key === "Enter" && !e.shiftKey && !e.isComposing) {
				e.preventDefault();
				speechInput.stop();
				emit("submit");
			} else if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				speechInput.stop();
				emit("submit");
			} else if (e.key === "Tab" && !e.shiftKey) {
				e.preventDefault();
				emit("tab");
			}
		}
		function handleClickWrapper() {
			inputRef.value?.focus();
		}
		__expose({ focus: () => inputRef.value?.focus() });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.inputWrapper),
				onClick: handleClickWrapper,
				onPaste: handlePaste
			}, [
				__props.showAttach ? (openBlock(), createElementBlock("input", {
					key: 0,
					ref_key: "fileInputRef",
					ref: fileInputRef,
					type: "file",
					class: normalizeClass(_ctx.$style.fileInput),
					accept: __props.acceptedMimeTypes,
					multiple: "",
					onChange: handleFileSelect
				}, null, 42, _hoisted_1)) : createCommentVNode("", true),
				renderSlot(_ctx.$slots, "attachments"),
				createVNode(unref(Input_default), {
					ref_key: "inputRef",
					ref: inputRef,
					"model-value": __props.modelValue,
					type: "textarea",
					placeholder: __props.placeholder,
					autocomplete: "off",
					autosize: __props.autosize,
					disabled: __props.disabled,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", $event)),
					onKeydown: handleKeydown
				}, null, 8, [
					"model-value",
					"placeholder",
					"autosize",
					"disabled"
				]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerStart) }, [renderSlot(_ctx.$slots, "footer-start")], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [
					__props.showAttach ? (openBlock(), createBlock(unref(N8nTooltip_default), {
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
					}, 8, ["content"])) : createCommentVNode("", true),
					__props.showVoice && unref(speechInput).isSupported ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 1,
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
					])) : createCommentVNode("", true),
					__props.isStreaming ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 2,
						"native-type": "button",
						title: unref(i18n).baseText("instanceAi.input.stop"),
						icon: "square",
						"icon-size": "large",
						"data-test-id": "instance-ai-stop-button",
						onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("stop"), ["stop"]))
					}, null, 8, ["title"])) : (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 3,
						"native-type": "button",
						disabled: !__props.canSubmit,
						title: unref(i18n).baseText("instanceAi.input.send"),
						icon: "arrow-up",
						"icon-size": "large",
						"data-test-id": "instance-ai-send-button",
						onClick: _cache[2] || (_cache[2] = withModifiers(($event) => emit("submit"), ["stop"]))
					}, null, 8, ["disabled", "title"]))
				], 2)], 2)
			], 34);
		};
	}
});
var ChatInputBase_vue_vue_type_style_index_0_lang_module_default = {
	inputWrapper: "_inputWrapper_1drnf_125",
	footer: "_footer_1drnf_156",
	footerStart: "_footerStart_1drnf_163",
	actions: "_actions_1drnf_167",
	fileInput: "_fileInput_1drnf_176",
	recording: "_recording_1drnf_180",
	chatInputRecordingPulse: "_chatInputRecordingPulse_1drnf_1"
};
var ChatInputBase_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatInputBase_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatInputBase_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ChatInputBase_default as t };
