import { d as defineComponent, P as useDebounce, cB as useDeviceSupport, bP as inject, x as computed, r as ref, c as useI18n, iz as useEventListener, a8 as watch, e as createBlock, g as openBlock, w as withCtx, i as createVNode, k as unref, N as N8nIcon, n as normalizeClass, ap as normalizeStyle, cT as N8nInput, b$ as PopOutWindowKey, _ as _export_sfc } from "./index-lkSN61-i.js";
const COLLAPSED_WIDTH = "30px";
const OPEN_WIDTH = "204px";
const OPEN_MIN_WIDTH = "120px";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      if (props.shortcut === "ctrl+f") {
        return locale.baseText("ndv.search.placeholder.shortcutHint", {
          interpolate: { shortcut: `${controlKeyText.value}+F` }
        });
      }
      if (props.paneType === "output") {
        return locale.baseText("ndv.search.placeholder.output");
      }
      if (props.displayMode === "schema") {
        return locale.baseText("ndv.search.placeholder.input.schema");
      }
      return locale.baseText("ndv.search.placeholder.input");
    });
    const style = computed(
      () => opened.value ? { maxWidth: OPEN_WIDTH, minWidth: OPEN_MIN_WIDTH } : { maxWidth: COLLAPSED_WIDTH }
    );
    const documentKeyHandler = (event) => {
      const action = getKeyboardActionToTrigger(event);
      if (!action) {
        return;
      }
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
          if (focusReturnTo.value instanceof HTMLElement) {
            focusReturnTo.value.focus();
          }
      }
    };
    const debouncedEmitUpdate = debounce(async (value) => emit("update:modelValue", value), {
      debounceTime: 300,
      trailing: true
    });
    const onSearchUpdate = (value) => {
      search.value = value;
      void debouncedEmitUpdate(value);
    };
    const onFocus = () => {
      opened.value = true;
      inputRef.value?.select();
      emit("focus");
    };
    const onBlur = () => {
      if (!props.modelValue) {
        opened.value = false;
      }
    };
    function isTargetEditable(target) {
      if (!(target instanceof HTMLElement)) {
        return false;
      }
      return target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement || target.getAttribute("contentEditable") === "true";
    }
    function getKeyboardActionToTrigger(event) {
      if (opened.value && event.key === "Escape") {
        return "cancel";
      }
      switch (props.shortcut) {
        case "/": {
          return event.key === "/" && !isTargetEditable(event.target) ? "open" : void 0;
        }
        case "ctrl+f":
          return event.key === "f" && isCtrlKeyPressed(event) ? "open" : void 0;
        case void 0:
          return void 0;
      }
    }
    useEventListener(keyboardEventTarget, "keydown", documentKeyHandler, { capture: true });
    watch(
      () => props.modelValue,
      (value) => {
        const searchClearedFromOutside = search.value && !value;
        search.value = value;
        if (searchClearedFromOutside) {
          opened.value = false;
        }
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(N8nInput), {
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
        prefix: withCtx(() => [
          createVNode(unref(N8nIcon), {
            class: normalizeClass(_ctx.$style.ioSearchIcon),
            icon: "search",
            size: "large"
          }, null, 8, ["class"])
        ]),
        _: 1
      }, 8, ["class", "style", "model-value", "placeholder"]);
    };
  }
});
const ioSearch = "_ioSearch_1resw_123";
const ioSearchIcon = "_ioSearchIcon_1resw_126";
const ioSearchOpened = "_ioSearchOpened_1resw_144";
const style0 = {
  ioSearch,
  ioSearchIcon,
  ioSearchOpened
};
const cssModules = {
  "$style": style0
};
const RunDataSearch = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  RunDataSearch as default
};
