import { C as computed, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, _n as normalizeClass, _t as watch, bt as withCtx, et as openBlock, yn as normalizeStyle, z as inject } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { D as useEventListener, gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { Ct as N8nInput_default, rt as useDeviceSupport, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./empty-RTEMfF4N.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { Ts as PopOutWindowKey } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import { t as useDebounce } from "./useDebounce-DyoINrYS.js";
var COLLAPSED_WIDTH = "30px";
var OPEN_WIDTH = "204px";
var OPEN_MIN_WIDTH = "120px";
var RunDataSearch_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RunDataSearch",
	props: {
		modelValue: {},
		paneType: { default: "output" },
		displayMode: { default: "schema" },
		shortcut: { default: void 0 }
	},
	emits: ["update:modelValue", "focus"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const props = __props;
		const locale = useI18n();
		const { debounce } = useDebounce();
		const { isCtrlKeyPressed, controlKeyText } = useDeviceSupport();
		const popOutWindow = inject(PopOutWindowKey, void 0);
		const keyboardEventTarget = computed(() => popOutWindow?.value?.document ?? window.document);
		const focusReturnTo = ref(null);
		const inputRef = ref(null);
		const search = ref(props.modelValue ?? "");
		const opened = ref(!!search.value);
		const placeholder = computed(() => {
			if (props.shortcut === "ctrl+f") return locale.baseText("ndv.search.placeholder.shortcutHint", { interpolate: { shortcut: `${controlKeyText.value}+F` } });
			if (props.paneType === "output") return locale.baseText("ndv.search.placeholder.output");
			if (props.displayMode === "schema") return locale.baseText("ndv.search.placeholder.input.schema");
			return locale.baseText("ndv.search.placeholder.input");
		});
		const style = computed(() => opened.value ? {
			maxWidth: OPEN_WIDTH,
			minWidth: OPEN_MIN_WIDTH
		} : { maxWidth: COLLAPSED_WIDTH });
		const documentKeyHandler = (event) => {
			const action = getKeyboardActionToTrigger(event);
			if (!action) return;
			event.preventDefault();
			event.stopImmediatePropagation();
			switch (action) {
				case "open":
					focusReturnTo.value = document.activeElement;
					inputRef.value?.focus();
					inputRef.value?.select();
					break;
				case "cancel":
					inputRef.value?.blur();
					opened.value = false;
					emit("update:modelValue", "");
					if (focusReturnTo.value instanceof HTMLElement) focusReturnTo.value.focus();
			}
		};
		const debouncedEmitUpdate = debounce(async (value) => emit("update:modelValue", value), {
			debounceTime: 300,
			trailing: true
		});
		const onSearchUpdate = (value) => {
			search.value = value;
			debouncedEmitUpdate(value);
		};
		const onFocus = () => {
			opened.value = true;
			inputRef.value?.select();
			emit("focus");
		};
		const onBlur = () => {
			if (!props.modelValue) opened.value = false;
		};
		function isTargetEditable(target) {
			if (!(target instanceof HTMLElement)) return false;
			return target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement || target.getAttribute("contentEditable") === "true";
		}
		function getKeyboardActionToTrigger(event) {
			if (opened.value && event.key === "Escape") return "cancel";
			switch (props.shortcut) {
				case "/": return event.key === "/" && !isTargetEditable(event.target) ? "open" : void 0;
				case "ctrl+f": return event.key === "f" && isCtrlKeyPressed(event) ? "open" : void 0;
				case void 0: return;
			}
		}
		useEventListener(keyboardEventTarget, "keydown", documentKeyHandler, { capture: true });
		watch(() => props.modelValue, (value) => {
			const searchClearedFromOutside = search.value && !value;
			search.value = value;
			if (searchClearedFromOutside) opened.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nInput_default), {
				ref_key: "inputRef",
				ref: inputRef,
				"data-test-id": "ndv-search",
				class: normalizeClass({
					[_ctx.$style.ioSearch]: true,
					[_ctx.$style.ioSearchOpened]: opened.value
				}),
				style: normalizeStyle(style.value),
				"model-value": search.value,
				placeholder: placeholder.value,
				size: "small",
				"onUpdate:modelValue": onSearchUpdate,
				onFocus,
				onBlur
			}, {
				prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
					class: normalizeClass(_ctx.$style.ioSearchIcon),
					icon: "search",
					size: "large"
				}, null, 8, ["class"])]),
				_: 1
			}, 8, [
				"class",
				"style",
				"model-value",
				"placeholder"
			]);
		};
	}
});
var RunDataSearch_vue_vue_type_style_index_0_lang_module_default = {
	ioSearch: "_ioSearch_zxpr4_123",
	ioSearchIcon: "_ioSearchIcon_zxpr4_126",
	ioSearchOpened: "_ioSearchOpened_zxpr4_144"
};
var RunDataSearch_default = /* @__PURE__ */ __plugin_vue_export_helper_default(RunDataSearch_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunDataSearch_vue_vue_type_style_index_0_lang_module_default }]]);
export { RunDataSearch_default as default };
