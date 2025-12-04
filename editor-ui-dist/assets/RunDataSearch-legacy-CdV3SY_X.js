;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./src-legacy-6DYpZVh_.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BWv-BWgW.js", "./icon-legacy-B_qPQAkZ.js", "./empty-legacy-ZG0-xpne.js", "./sanitize-html-legacy-D7fDKXy5.js", "./path-browserify-legacy-BRGcgaOH.js", "./constants-legacy-lM1Uv86G.js", "./merge-legacy-CyNDE0Ib.js", "./useDebounce-legacy-B0zW2D-C.js"], function (_export, _context) {
    "use strict";

    var computed, unref, ref, createVNode, defineComponent, createBlock, watch, normalizeStyle, withCtx, openBlock, normalizeClass, inject, useEventListener, useI18n, N8nIcon_default, useDeviceSupport, N8nInput_default, __plugin_vue_export_helper_default, PopOutWindowKey, useDebounce, __vite_style__, COLLAPSED_WIDTH, OPEN_WIDTH, OPEN_MIN_WIDTH, RunDataSearch_vue_vue_type_script_setup_true_lang_default, ioSearch, ioSearchIcon, ioSearchOpened, RunDataSearch_vue_vue_type_style_index_0_lang_module_default, cssModules, RunDataSearch_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.bn;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        inject = _vueRuntimeEsmBundlerLegacy003Js.z;
      }, function (_MapCacheLegacy005Js) {
        useEventListener = _MapCacheLegacy005Js.D;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nIcon_default = _srcLegacy007Js.Yn;
        useDeviceSupport = _srcLegacy007Js.it;
        N8nInput_default = _srcLegacy007Js.wt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_iconLegacy00nJs) {}, function (_emptyLegacy00vJs) {}, function (_sanitizeHtmlLegacy00LJs) {}, function (_pathBrowserifyLegacy00PJs) {}, function (_constantsLegacy00RJs) {
        PopOutWindowKey = _constantsLegacy00RJs.Gs;
      }, function (_mergeLegacy00TJs) {}, function (_useDebounceLegacy00$Js) {
        useDebounce = _useDebounceLegacy00$Js.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._ioSearch_zxpr4_123 {\n  transition: max-width 0.3s cubic-bezier(0.19, 1, 0.22, 1);\n}\n._ioSearch_zxpr4_123 ._ioSearchIcon_zxpr4_126 {\n  color: var(--color--foreground--shade-2);\n  cursor: pointer;\n  vertical-align: middle;\n}\n._ioSearch_zxpr4_123 .el-input__prefix {\n  left: 8px;\n}\n._ioSearch_zxpr4_123.el-input--prefix .el-input__inner {\n  padding-left: 30px;\n}\n._ioSearch_zxpr4_123 input {\n  border: 0;\n  opacity: 0;\n  background: transparent;\n  cursor: pointer;\n}\n._ioSearchOpened_zxpr4_144 ._ioSearchIcon_zxpr4_126 {\n  cursor: default;\n}\n._ioSearchOpened_zxpr4_144 input {\n  border: var(--input--border-color, var(--border-color)) var(--input--border-style, var(--border-style)) var(--border-width);\n  background: var(--input--color--background, var(--color--foreground--tint-2));\n  opacity: 1;\n  cursor: text;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ndv/runData/components/RunDataSearch.vue?vue&type=script&setup=true&lang.ts
        COLLAPSED_WIDTH = "30px";
        OPEN_WIDTH = "204px";
        OPEN_MIN_WIDTH = "120px";
        RunDataSearch_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "RunDataSearch",
          props: {
            modelValue: {},
            paneType: {
              default: "output"
            },
            displayMode: {
              default: "schema"
            },
            shortcut: {
              default: void 0
            }
          },
          emits: ["update:modelValue", "focus"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const props = __props;
            const locale = useI18n();
            const {
              debounce
            } = useDebounce();
            const {
              isCtrlKeyPressed,
              controlKeyText
            } = useDeviceSupport();
            const popOutWindow = inject(PopOutWindowKey, void 0);
            const keyboardEventTarget = computed(() => popOutWindow?.value?.document ?? window.document);
            const focusReturnTo = ref(null);
            const inputRef = ref(null);
            const search = ref(props.modelValue ?? "");
            const opened = ref(!!search.value);
            const placeholder = computed(() => {
              if (props.shortcut === "ctrl+f") return locale.baseText("ndv.search.placeholder.shortcutHint", {
                interpolate: {
                  shortcut: `${controlKeyText.value}+F`
                }
              });
              if (props.paneType === "output") return locale.baseText("ndv.search.placeholder.output");
              if (props.displayMode === "schema") return locale.baseText("ndv.search.placeholder.input.schema");
              return locale.baseText("ndv.search.placeholder.input");
            });
            const style = computed(() => opened.value ? {
              maxWidth: OPEN_WIDTH,
              minWidth: OPEN_MIN_WIDTH
            } : {
              maxWidth: COLLAPSED_WIDTH
            });
            const documentKeyHandler = event => {
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
            const debouncedEmitUpdate = debounce(async value => emit("update:modelValue", value), {
              debounceTime: 300,
              trailing: true
            });
            const onSearchUpdate = value => {
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
                case "/":
                  return event.key === "/" && !isTargetEditable(event.target) ? "open" : void 0;
                case "ctrl+f":
                  return event.key === "f" && isCtrlKeyPressed(event) ? "open" : void 0;
                case void 0:
                  return;
              }
            }
            useEventListener(keyboardEventTarget, "keydown", documentKeyHandler, {
              capture: true
            });
            watch(() => props.modelValue, value => {
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
              }, 8, ["class", "style", "model-value", "placeholder"]);
            };
          }
        }); //#endregion
        //#region src/features/ndv/runData/components/RunDataSearch.vue?vue&type=style&index=0&lang.module.scss
        ioSearch = "_ioSearch_zxpr4_123";
        ioSearchIcon = "_ioSearchIcon_zxpr4_126";
        ioSearchOpened = "_ioSearchOpened_zxpr4_144";
        RunDataSearch_vue_vue_type_style_index_0_lang_module_default = {
          ioSearch,
          ioSearchIcon,
          ioSearchOpened
        }; //#endregion
        //#region src/features/ndv/runData/components/RunDataSearch.vue
        cssModules = {
          "$style": RunDataSearch_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", RunDataSearch_default = /* @__PURE__ */__plugin_vue_export_helper_default(RunDataSearch_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();