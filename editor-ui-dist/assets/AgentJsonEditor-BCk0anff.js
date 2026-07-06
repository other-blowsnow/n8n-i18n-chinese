import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, Vt as toRef, X as onMounted, bt as withCtx, gt as watch, j as createVNode, q as onBeforeUnmount, vn as normalizeClass } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { s as useI18n } from "./src-CBtyHSh2.js";
import { Wi as N8nIconButton_default, zi as N8nTooltip_default } from "./src-BVC_ZvSs.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { J as useDebounceFn } from "./core-DOUvgShw.js";
import { t as useClipboard } from "./useClipboard-DZADaxjZ.js";
import { $t as keymap, A as history, Bt as EditorView, S as defaultKeymap, dn as EditorState, en as lineNumbers, ln as Compartment } from "./dist-BCcUonc6.js";
import { r as codeEditorTheme, t as json } from "./dist-C_veT3tf.js";
//#region src/features/agents/composables/useCodeMirrorEditor.ts
/**
* Three different editor wrappers used to repeat the same setup: track a `view`,
* a programmatic-update flag to suppress self-emits, a Compartment for
* reactive read-only, and identical mount/destroy lifecycles. This composable
* owns those concerns so the components only declare their language + theme
* extensions and react to changes.
*/
function useCodeMirrorEditor(options) {
	let view = null;
	let isProgrammatic = false;
	const readOnlyCompartment = new Compartment();
	const readOnlyExtensions = (ro) => ro ? [EditorState.readOnly.of(true), EditorView.editable.of(false)] : [];
	onMounted(() => {
		if (!options.container.value) return;
		view = new EditorView({
			state: EditorState.create({
				doc: options.initialDoc,
				extensions: [
					...options.extensions,
					readOnlyCompartment.of(readOnlyExtensions(options.readOnly.value)),
					EditorView.updateListener.of((update) => {
						if (!update.docChanged || isProgrammatic) return;
						options.onChange(update.state.doc.toString());
					})
				]
			}),
			parent: options.container.value
		});
	});
	onBeforeUnmount(() => {
		view?.destroy();
		view = null;
	});
	watch(options.readOnly, (ro) => {
		view?.dispatch({ effects: readOnlyCompartment.reconfigure(readOnlyExtensions(ro)) });
	});
	return {
		replaceDoc(nextDoc) {
			if (!view) return;
			const current = view.state.doc.toString();
			if (current === nextDoc) return;
			isProgrammatic = true;
			view.dispatch({ changes: {
				from: 0,
				to: current.length,
				insert: nextDoc
			} });
			isProgrammatic = false;
		},
		setReadOnly(ro) {
			view?.dispatch({ effects: readOnlyCompartment.reconfigure(readOnlyExtensions(ro)) });
		},
		getView: () => view
	};
}
var agent_panel_module_default = { disabledOverlay: "_disabledOverlay_urrle_125" };
//#endregion
//#region src/features/agents/components/AgentJsonCopyButton.vue?vue&type=script&setup=true&lang.ts
var AgentJsonCopyButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "AgentJsonCopyButton",
	props: {
		content: {},
		disabled: {
			type: Boolean,
			default: false
		},
		testId: { default: void 0 }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const clipboard = useClipboard();
		const copied = ref(false);
		let copiedResetTimer = null;
		const label = computed(() => copied.value ? i18n.baseText("agents.builder.editor.copied") : i18n.baseText("agents.builder.editor.copy"));
		async function copyJson() {
			if (!props.content || props.disabled) return;
			await clipboard.copy(props.content);
			copied.value = true;
			if (copiedResetTimer) clearTimeout(copiedResetTimer);
			copiedResetTimer = setTimeout(() => {
				copied.value = false;
				copiedResetTimer = null;
			}, 1500);
		}
		onBeforeUnmount(() => {
			if (copiedResetTimer) clearTimeout(copiedResetTimer);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", mergeProps({ class: _ctx.$style.wrapper }, _ctx.$attrs), [createVNode(unref(N8nTooltip_default), {
				content: label.value,
				placement: "bottom",
				"show-after": 300
			}, {
				default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					icon: copied.value ? "check" : "copy",
					variant: "subtle",
					size: "xmini",
					"aria-label": label.value,
					disabled: props.disabled || !props.content,
					"data-testid": props.testId,
					onClick: copyJson
				}, null, 8, [
					"icon",
					"aria-label",
					"disabled",
					"data-testid"
				])]),
				_: 1
			}, 8, ["content"])], 16);
		};
	}
});
var AgentJsonCopyButton_vue_vue_type_style_index_0_lang_module_default = { wrapper: "_wrapper_nuj1v_2" };
var AgentJsonCopyButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentJsonCopyButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentJsonCopyButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentJsonEditor.vue?vue&type=script&setup=true&lang.ts
var AgentJsonEditor_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentJsonEditor",
	props: {
		value: {},
		readOnly: {
			type: Boolean,
			default: false
		},
		showReadOnlyOverlay: {
			type: Boolean,
			default: true
		},
		copyButtonTestId: { default: "agent-json-copy" }
	},
	emits: ["update:value"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const jsonContainer = ref();
		const jsonError = ref("");
		const jsonValue = computed(() => props.value);
		function valueToJson(value) {
			if (value === null || value === void 0) return "";
			return JSON.stringify(value, null, 2) ?? "";
		}
		function isAgentJsonConfig(value) {
			return typeof value === "object" && value !== null && !Array.isArray(value);
		}
		const currentJson = ref(valueToJson(jsonValue.value));
		const debouncedJsonSave = useDebounceFn((text) => {
			if (props.readOnly) return;
			try {
				const parsed = JSON.parse(text);
				if (!isAgentJsonConfig(parsed)) {
					jsonError.value = i18n.baseText("agents.builder.editor.invalidJson");
					return;
				}
				jsonError.value = "";
				emit("update:value", parsed);
			} catch {
				jsonError.value = i18n.baseText("agents.builder.editor.invalidJson");
			}
		}, 800);
		const editor = useCodeMirrorEditor({
			container: jsonContainer,
			initialDoc: valueToJson(jsonValue.value),
			readOnly: toRef(props, "readOnly"),
			extensions: [
				json(),
				lineNumbers(),
				EditorView.lineWrapping,
				history(),
				keymap.of(defaultKeymap),
				codeEditorTheme({
					isReadOnly: false,
					maxHeight: "100%",
					minHeight: "100%",
					rows: -1
				})
			],
			onChange: (text) => {
				currentJson.value = text;
				debouncedJsonSave(text);
			}
		});
		function replaceJson(nextJson) {
			editor.replaceDoc(nextJson);
			currentJson.value = nextJson;
		}
		watch(jsonValue, (newValue) => {
			const view = editor.getView();
			if (!view) return;
			if (!props.readOnly && view.hasFocus) return;
			replaceJson(valueToJson(newValue));
			jsonError.value = "";
		}, { deep: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [
				createVNode(AgentJsonCopyButton_default, {
					content: currentJson.value,
					class: normalizeClass(_ctx.$style.copyButton),
					"test-id": props.copyButtonTestId
				}, null, 8, [
					"content",
					"class",
					"test-id"
				]),
				jsonError.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.errorBanner)
				}, toDisplayString(jsonError.value), 3)) : createCommentVNode("", true),
				createBaseVNode("div", {
					ref_key: "jsonContainer",
					ref: jsonContainer,
					class: normalizeClass([_ctx.$style.editorArea, props.readOnly && props.showReadOnlyOverlay && unref(agent_panel_module_default).disabledOverlay])
				}, null, 2)
			], 2);
		};
	}
});
var AgentJsonEditor_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_1j45c_2",
	copyButton: "_copyButton_1j45c_13",
	errorBanner: "_errorBanner_1j45c_20",
	editorArea: "_editorArea_1j45c_28"
};
var AgentJsonEditor_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentJsonEditor_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentJsonEditor_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { agent_panel_module_default as n, AgentJsonEditor_default as t };
