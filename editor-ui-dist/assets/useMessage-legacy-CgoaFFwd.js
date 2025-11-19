;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./src-legacy-D3-Bo0sy.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./useToast-legacy-D8KBGcJW.js"], function (_export, _context) {
    "use strict";

    var hasOwn, computed, createElementBlock, createCommentVNode, nextTick, toRefs, ref, onBeforeUnmount, createVNode, defineComponent, reactive, toDisplayString, createBlock, isVNode, onMounted, normalizeClass, watch, isFunction, renderSlot, withCtx, isObject, resolveDynamicComponent, openBlock, withModifiers, createTextVNode, withKeys, Transition, render, resolveComponent, vShow, isString, init_shared_esm_bundler, createBaseVNode, withDirectives, normalizeStyle, obtainAllFocusableElements, ElButton, ElInput, isValidComponentSize, useId, ElFocusTrap, isClient, useGlobalComponentSettings, debugWarn, isUndefined, isElement, TypeComponents, _export_sfc, EVENT_CODE, ElIcon, TypeComponentsMap, useDraggable, useSameTarget, useLockscreen, ElOverlay, sanitizeIfString, FOCUSABLE_CHILDREN, FOCUS_STACK, FOCUS_HANDLER, TrapFocus, _sfc_main, _hoisted_1, _hoisted_2, _hoisted_3, MessageBoxConstructor, messageInstance, getAppendToElement, initInstance, genContainer, showMessage, MESSAGE_BOX_VARIANTS, MESSAGE_BOX_DEFAULT_OPTS, _MessageBox, ElMessageBox;
    function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_el_icon = resolveComponent("el-icon");
      const _component_close = resolveComponent("close");
      const _component_el_input = resolveComponent("el-input");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_focus_trap = resolveComponent("el-focus-trap");
      const _component_el_overlay = resolveComponent("el-overlay");
      return openBlock(), createBlock(Transition, {
        name: "fade-in-linear",
        onAfterLeave: _cache[11] || (_cache[11] = $event => _ctx.$emit("vanish")),
        persisted: ""
      }, {
        default: withCtx(() => [withDirectives(createVNode(_component_el_overlay, {
          "z-index": _ctx.zIndex,
          "overlay-class": [_ctx.ns.is("message-box"), _ctx.modalClass],
          mask: _ctx.modal
        }, {
          default: withCtx(() => [createBaseVNode("div", {
            role: "dialog",
            "aria-label": _ctx.title,
            "aria-modal": "true",
            "aria-describedby": !_ctx.showInput ? _ctx.contentId : void 0,
            class: normalizeClass(`${_ctx.ns.namespace.value}-overlay-message-box`),
            onClick: _cache[8] || (_cache[8] = (...args) => _ctx.overlayEvent.onClick && _ctx.overlayEvent.onClick(...args)),
            onMousedown: _cache[9] || (_cache[9] = (...args) => _ctx.overlayEvent.onMousedown && _ctx.overlayEvent.onMousedown(...args)),
            onMouseup: _cache[10] || (_cache[10] = (...args) => _ctx.overlayEvent.onMouseup && _ctx.overlayEvent.onMouseup(...args))
          }, [createVNode(_component_el_focus_trap, {
            loop: "",
            trapped: _ctx.visible,
            "focus-trap-el": _ctx.rootRef,
            "focus-start-el": _ctx.focusStartRef,
            onReleaseRequested: _ctx.onCloseRequested
          }, {
            default: withCtx(() => [createBaseVNode("div", {
              ref: "rootRef",
              class: normalizeClass([_ctx.ns.b(), _ctx.customClass, _ctx.ns.is("draggable", _ctx.draggable), {
                [_ctx.ns.m("center")]: _ctx.center
              }]),
              style: normalizeStyle(_ctx.customStyle),
              tabindex: "-1",
              onClick: _cache[7] || (_cache[7] = withModifiers(() => {}, ["stop"]))
            }, [_ctx.title !== null && _ctx.title !== void 0 ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref: "headerRef",
              class: normalizeClass(_ctx.ns.e("header"))
            }, [createBaseVNode("div", {
              class: normalizeClass(_ctx.ns.e("title"))
            }, [_ctx.iconComponent && _ctx.center ? (openBlock(), createBlock(_component_el_icon, {
              key: 0,
              class: normalizeClass([_ctx.ns.e("status"), _ctx.typeClass])
            }, {
              default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true), createBaseVNode("span", null, toDisplayString(_ctx.title), 1)], 2), _ctx.showClose ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              class: normalizeClass(_ctx.ns.e("headerbtn")),
              "aria-label": _ctx.t("el.messagebox.close"),
              onClick: _cache[0] || (_cache[0] = $event => _ctx.handleAction(_ctx.distinguishCancelAndClose ? "close" : "cancel")),
              onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers($event => _ctx.handleAction(_ctx.distinguishCancelAndClose ? "close" : "cancel"), ["prevent"]), ["enter"]))
            }, [createVNode(_component_el_icon, {
              class: normalizeClass(_ctx.ns.e("close"))
            }, {
              default: withCtx(() => [createVNode(_component_close)]),
              _: 1
            }, 8, ["class"])], 42, _hoisted_2)) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true), createBaseVNode("div", {
              id: _ctx.contentId,
              class: normalizeClass(_ctx.ns.e("content"))
            }, [createBaseVNode("div", {
              class: normalizeClass(_ctx.ns.e("container"))
            }, [_ctx.iconComponent && !_ctx.center && _ctx.hasMessage ? (openBlock(), createBlock(_component_el_icon, {
              key: 0,
              class: normalizeClass([_ctx.ns.e("status"), _ctx.typeClass])
            }, {
              default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true), _ctx.hasMessage ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(_ctx.ns.e("message"))
            }, [renderSlot(_ctx.$slots, "default", {}, () => [!_ctx.dangerouslyUseHTMLString ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.showInput ? "label" : "p"), {
              key: 0,
              for: _ctx.showInput ? _ctx.inputId : void 0
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(!_ctx.dangerouslyUseHTMLString ? _ctx.message : ""), 1)]),
              _: 1
            }, 8, ["for"])) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.showInput ? "label" : "p"), {
              key: 1,
              for: _ctx.showInput ? _ctx.inputId : void 0,
              innerHTML: _ctx.message
            }, null, 8, ["for", "innerHTML"]))])], 2)) : createCommentVNode("v-if", true)], 2), withDirectives(createBaseVNode("div", {
              class: normalizeClass(_ctx.ns.e("input"))
            }, [createVNode(_component_el_input, {
              id: _ctx.inputId,
              ref: "inputRef",
              modelValue: _ctx.inputValue,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.inputValue = $event),
              type: _ctx.inputType,
              placeholder: _ctx.inputPlaceholder,
              "aria-invalid": _ctx.validateError,
              class: normalizeClass({
                invalid: _ctx.validateError
              }),
              onKeydown: withKeys(_ctx.handleInputEnter, ["enter"])
            }, null, 8, ["id", "modelValue", "type", "placeholder", "aria-invalid", "class", "onKeydown"]), createBaseVNode("div", {
              class: normalizeClass(_ctx.ns.e("errormsg")),
              style: normalizeStyle({
                visibility: !!_ctx.editorErrorMessage ? "visible" : "hidden"
              })
            }, toDisplayString(_ctx.editorErrorMessage), 7)], 2), [[vShow, _ctx.showInput]])], 10, _hoisted_3), createBaseVNode("div", {
              class: normalizeClass(_ctx.ns.e("btns"))
            }, [_ctx.showCancelButton ? (openBlock(), createBlock(_component_el_button, {
              key: 0,
              loading: _ctx.cancelButtonLoading,
              class: normalizeClass([_ctx.cancelButtonClass]),
              round: _ctx.roundButton,
              size: _ctx.btnSize,
              onClick: _cache[3] || (_cache[3] = $event => _ctx.handleAction("cancel")),
              onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers($event => _ctx.handleAction("cancel"), ["prevent"]), ["enter"]))
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(_ctx.cancelButtonText || _ctx.t("el.messagebox.cancel")), 1)]),
              _: 1
            }, 8, ["loading", "class", "round", "size"])) : createCommentVNode("v-if", true), withDirectives(createVNode(_component_el_button, {
              ref: "confirmRef",
              type: "primary",
              loading: _ctx.confirmButtonLoading,
              class: normalizeClass([_ctx.confirmButtonClasses]),
              round: _ctx.roundButton,
              disabled: _ctx.confirmButtonDisabled,
              size: _ctx.btnSize,
              onClick: _cache[5] || (_cache[5] = $event => _ctx.handleAction("confirm")),
              onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers($event => _ctx.handleAction("confirm"), ["prevent"]), ["enter"]))
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(_ctx.confirmButtonText || _ctx.t("el.messagebox.confirm")), 1)]),
              _: 1
            }, 8, ["loading", "class", "round", "disabled", "size"]), [[vShow, _ctx.showConfirmButton]])], 2)], 6)]),
            _: 3
          }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onReleaseRequested"])], 42, _hoisted_1)]),
          _: 3
        }, 8, ["z-index", "overlay-class", "mask"]), [[vShow, _ctx.visible]])]),
        _: 3
      });
    }
    function MessageBox(options, appContext = null) {
      if (!isClient) return Promise.reject();
      let callback;
      if (isString(options) || isVNode(options)) options = {
        message: options
      };else callback = options.callback;
      return new Promise((resolve, reject) => {
        const vm = showMessage(options, appContext != null ? appContext : MessageBox._context);
        messageInstance.set(vm, {
          options,
          callback,
          resolve,
          reject
        });
      });
    }
    function messageBoxFactory(boxType) {
      return (message, title, options, appContext) => {
        let titleOrOpts = "";
        if (isObject(title)) {
          options = title;
          titleOrOpts = "";
        } else if (isUndefined(title)) titleOrOpts = "";else titleOrOpts = title;
        return MessageBox(Object.assign({
          title: titleOrOpts,
          message,
          type: "",
          ...MESSAGE_BOX_DEFAULT_OPTS[boxType]
        }, options, {
          boxType
        }), appContext);
      };
    }
    //#endregion
    //#region src/app/composables/useMessage.ts
    function useMessage() {
      const handleCancelOrClose = e => {
        if (e instanceof Error) throw e;
        return e;
      };
      const handleCancelOrClosePrompt = e => {
        if (e instanceof Error) throw e;
        return {
          value: "",
          action: e
        };
      };
      async function alert(message, configOrTitle, config) {
        const resolvedConfig = {
          ...(config ?? (typeof configOrTitle === "object" ? configOrTitle : {})),
          cancelButtonClass: "btn--cancel",
          confirmButtonClass: "btn--confirm",
          dangerouslyUseHTMLString: true
        };
        if (typeof configOrTitle === "string") return await ElMessageBox.alert(sanitizeIfString(message), configOrTitle, resolvedConfig).catch(handleCancelOrClose);
        return await ElMessageBox.alert(sanitizeIfString(message), resolvedConfig).catch(handleCancelOrClose);
      }
      async function confirm(message, configOrTitle, config) {
        const resolvedConfig = {
          cancelButtonClass: "btn--cancel",
          confirmButtonClass: "btn--confirm",
          distinguishCancelAndClose: true,
          showClose: config?.showClose ?? false,
          closeOnClickModal: false,
          dangerouslyUseHTMLString: true,
          ...(config ?? (typeof configOrTitle === "object" ? configOrTitle : {}))
        };
        if (typeof configOrTitle === "string") return await ElMessageBox.confirm(sanitizeIfString(message), sanitizeIfString(configOrTitle), resolvedConfig).catch(handleCancelOrClose);
        return await ElMessageBox.confirm(sanitizeIfString(message), resolvedConfig).catch(handleCancelOrClose);
      }
      async function prompt(message, configOrTitle, config) {
        const resolvedConfig = {
          ...(config ?? (typeof configOrTitle === "object" ? configOrTitle : {})),
          cancelButtonClass: "btn--cancel",
          confirmButtonClass: "btn--confirm",
          dangerouslyUseHTMLString: true
        };
        if (typeof configOrTitle === "string") return await ElMessageBox.prompt(sanitizeIfString(message), sanitizeIfString(configOrTitle), resolvedConfig).catch(handleCancelOrClosePrompt);
        return await ElMessageBox.prompt(sanitizeIfString(message), resolvedConfig).catch(handleCancelOrClosePrompt);
      }
      return {
        alert,
        confirm,
        prompt,
        message: ElMessageBox
      };
    }

    //#endregion
    _export("t", useMessage);
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        hasOwn = _vueRuntimeEsmBundlerLegacy003Js.$t;
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        toRefs = _vueRuntimeEsmBundlerLegacy003Js.Ht;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        reactive = _vueRuntimeEsmBundlerLegacy003Js.Pt;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        isVNode = _vueRuntimeEsmBundlerLegacy003Js.V;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        isFunction = _vueRuntimeEsmBundlerLegacy003Js.an;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        isObject = _vueRuntimeEsmBundlerLegacy003Js.cn;
        resolveDynamicComponent = _vueRuntimeEsmBundlerLegacy003Js.ct;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        withKeys = _vueRuntimeEsmBundlerLegacy003Js.m;
        Transition = _vueRuntimeEsmBundlerLegacy003Js.n;
        render = _vueRuntimeEsmBundlerLegacy003Js.o;
        resolveComponent = _vueRuntimeEsmBundlerLegacy003Js.ot;
        vShow = _vueRuntimeEsmBundlerLegacy003Js.p;
        isString = _vueRuntimeEsmBundlerLegacy003Js.pn;
        init_shared_esm_bundler = _vueRuntimeEsmBundlerLegacy003Js.tn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.yn;
      }, function (_srcLegacy007Js) {
        obtainAllFocusableElements = _srcLegacy007Js.Nn;
        ElButton = _srcLegacy007Js.Wt;
        ElInput = _srcLegacy007Js.Xt;
        isValidComponentSize = _srcLegacy007Js.cn;
        useId = _srcLegacy007Js.nn;
        ElFocusTrap = _srcLegacy007Js.qt;
      }, function (_truncateLegacy00hJs) {
        isClient = _truncateLegacy00hJs.Mt;
        useGlobalComponentSettings = _truncateLegacy00hJs.S;
        debugWarn = _truncateLegacy00hJs.V;
        isUndefined = _truncateLegacy00hJs.X;
        isElement = _truncateLegacy00hJs.q;
      }, function (_iconLegacy00lJs) {
        TypeComponents = _iconLegacy00lJs.l;
        _export_sfc = _iconLegacy00lJs.n;
        EVENT_CODE = _iconLegacy00lJs.r;
        ElIcon = _iconLegacy00lJs.t;
        TypeComponentsMap = _iconLegacy00lJs.u;
      }, function (_overlayLegacy00pJs) {
        useDraggable = _overlayLegacy00pJs.i;
        useSameTarget = _overlayLegacy00pJs.n;
        useLockscreen = _overlayLegacy00pJs.r;
        ElOverlay = _overlayLegacy00pJs.t;
      }, function (_useToastLegacy00HJs) {
        sanitizeIfString = _useToastLegacy00HJs.l;
      }],
      execute: function () {
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/directives/trap-focus/index.mjs
        FOCUSABLE_CHILDREN = "_trap-focus-children";
        FOCUS_STACK = [];
        FOCUS_HANDLER = e => {
          if (FOCUS_STACK.length === 0) return;
          const focusableElement = FOCUS_STACK[FOCUS_STACK.length - 1][FOCUSABLE_CHILDREN];
          if (focusableElement.length > 0 && e.code === EVENT_CODE.tab) {
            if (focusableElement.length === 1) {
              e.preventDefault();
              if (document.activeElement !== focusableElement[0]) focusableElement[0].focus();
              return;
            }
            const goingBackward = e.shiftKey;
            const isFirst = e.target === focusableElement[0];
            const isLast = e.target === focusableElement[focusableElement.length - 1];
            if (isFirst && goingBackward) {
              e.preventDefault();
              focusableElement[focusableElement.length - 1].focus();
            }
            if (isLast && !goingBackward) {
              e.preventDefault();
              focusableElement[0].focus();
            }
          }
        };
        TrapFocus = {
          beforeMount(el) {
            el[FOCUSABLE_CHILDREN] = obtainAllFocusableElements(el);
            FOCUS_STACK.push(el);
            if (FOCUS_STACK.length <= 1) document.addEventListener("keydown", FOCUS_HANDLER);
          },
          updated(el) {
            nextTick(() => {
              el[FOCUSABLE_CHILDREN] = obtainAllFocusableElements(el);
            });
          },
          unmounted() {
            FOCUS_STACK.shift();
            if (FOCUS_STACK.length === 0) document.removeEventListener("keydown", FOCUS_HANDLER);
          }
        }; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/message-box/src/index.mjs
        _sfc_main = defineComponent({
          name: "ElMessageBox",
          directives: {
            TrapFocus
          },
          components: {
            ElButton,
            ElFocusTrap,
            ElInput,
            ElOverlay,
            ElIcon,
            ...TypeComponents
          },
          inheritAttrs: false,
          props: {
            buttonSize: {
              type: String,
              validator: isValidComponentSize
            },
            modal: {
              type: Boolean,
              default: true
            },
            lockScroll: {
              type: Boolean,
              default: true
            },
            showClose: {
              type: Boolean,
              default: true
            },
            closeOnClickModal: {
              type: Boolean,
              default: true
            },
            closeOnPressEscape: {
              type: Boolean,
              default: true
            },
            closeOnHashChange: {
              type: Boolean,
              default: true
            },
            center: Boolean,
            draggable: Boolean,
            roundButton: {
              default: false,
              type: Boolean
            },
            container: {
              type: String,
              default: "body"
            },
            boxType: {
              type: String,
              default: ""
            }
          },
          emits: ["vanish", "action"],
          setup(props, {
            emit
          }) {
            const {
              locale,
              zIndex,
              ns,
              size: btnSize
            } = useGlobalComponentSettings("message-box", computed(() => props.buttonSize));
            const {
              t
            } = locale;
            const {
              nextZIndex
            } = zIndex;
            const visible = ref(false);
            const state = reactive({
              autofocus: true,
              beforeClose: null,
              callback: null,
              cancelButtonText: "",
              cancelButtonClass: "",
              confirmButtonText: "",
              confirmButtonClass: "",
              customClass: "",
              customStyle: {},
              dangerouslyUseHTMLString: false,
              distinguishCancelAndClose: false,
              icon: "",
              inputPattern: null,
              inputPlaceholder: "",
              inputType: "text",
              inputValue: null,
              inputValidator: null,
              inputErrorMessage: "",
              message: null,
              modalFade: true,
              modalClass: "",
              showCancelButton: false,
              showConfirmButton: true,
              type: "",
              title: void 0,
              showInput: false,
              action: "",
              confirmButtonLoading: false,
              cancelButtonLoading: false,
              confirmButtonDisabled: false,
              editorErrorMessage: "",
              validateError: false,
              zIndex: nextZIndex()
            });
            const typeClass = computed(() => {
              const type = state.type;
              return {
                [ns.bm("icon", type)]: type && TypeComponentsMap[type]
              };
            });
            const contentId = useId();
            const inputId = useId();
            const iconComponent = computed(() => state.icon || TypeComponentsMap[state.type] || "");
            const hasMessage = computed(() => !!state.message);
            const rootRef = ref();
            const headerRef = ref();
            const focusStartRef = ref();
            const inputRef = ref();
            const confirmRef = ref();
            const confirmButtonClasses = computed(() => state.confirmButtonClass);
            watch(() => state.inputValue, async val => {
              await nextTick();
              if (props.boxType === "prompt" && val !== null) validate();
            }, {
              immediate: true
            });
            watch(() => visible.value, val => {
              var _a, _b;
              if (val) {
                if (props.boxType !== "prompt") if (state.autofocus) focusStartRef.value = (_b = (_a = confirmRef.value) == null ? void 0 : _a.$el) != null ? _b : rootRef.value;else focusStartRef.value = rootRef.value;
                state.zIndex = nextZIndex();
              }
              if (props.boxType !== "prompt") return;
              if (val) nextTick().then(() => {
                var _a2;
                if (inputRef.value && inputRef.value.$el) if (state.autofocus) focusStartRef.value = (_a2 = getInputElement()) != null ? _a2 : rootRef.value;else focusStartRef.value = rootRef.value;
              });else {
                state.editorErrorMessage = "";
                state.validateError = false;
              }
            });
            useDraggable(rootRef, headerRef, computed(() => props.draggable));
            onMounted(async () => {
              await nextTick();
              if (props.closeOnHashChange) window.addEventListener("hashchange", doClose);
            });
            onBeforeUnmount(() => {
              if (props.closeOnHashChange) window.removeEventListener("hashchange", doClose);
            });
            function doClose() {
              if (!visible.value) return;
              visible.value = false;
              nextTick(() => {
                if (state.action) emit("action", state.action);
              });
            }
            const handleWrapperClick = () => {
              if (props.closeOnClickModal) handleAction(state.distinguishCancelAndClose ? "close" : "cancel");
            };
            const overlayEvent = useSameTarget(handleWrapperClick);
            const handleInputEnter = e => {
              if (state.inputType !== "textarea") {
                e.preventDefault();
                return handleAction("confirm");
              }
            };
            const handleAction = action => {
              var _a;
              if (props.boxType === "prompt" && action === "confirm" && !validate()) return;
              state.action = action;
              if (state.beforeClose) (_a = state.beforeClose) == null || _a.call(state, action, state, doClose);else doClose();
            };
            const validate = () => {
              if (props.boxType === "prompt") {
                const inputPattern = state.inputPattern;
                if (inputPattern && !inputPattern.test(state.inputValue || "")) {
                  state.editorErrorMessage = state.inputErrorMessage || t("el.messagebox.error");
                  state.validateError = true;
                  return false;
                }
                const inputValidator = state.inputValidator;
                if (typeof inputValidator === "function") {
                  const validateResult = inputValidator(state.inputValue);
                  if (validateResult === false) {
                    state.editorErrorMessage = state.inputErrorMessage || t("el.messagebox.error");
                    state.validateError = true;
                    return false;
                  }
                  if (typeof validateResult === "string") {
                    state.editorErrorMessage = validateResult;
                    state.validateError = true;
                    return false;
                  }
                }
              }
              state.editorErrorMessage = "";
              state.validateError = false;
              return true;
            };
            const getInputElement = () => {
              const inputRefs = inputRef.value.$refs;
              return inputRefs.input || inputRefs.textarea;
            };
            const handleClose = () => {
              handleAction("close");
            };
            const onCloseRequested = () => {
              if (props.closeOnPressEscape) handleClose();
            };
            if (props.lockScroll) useLockscreen(visible);
            return {
              ...toRefs(state),
              ns,
              overlayEvent,
              visible,
              hasMessage,
              typeClass,
              contentId,
              inputId,
              btnSize,
              iconComponent,
              confirmButtonClasses,
              rootRef,
              focusStartRef,
              headerRef,
              inputRef,
              confirmRef,
              doClose,
              handleClose,
              onCloseRequested,
              handleWrapperClick,
              handleInputEnter,
              handleAction,
              t
            };
          }
        });
        _hoisted_1 = ["aria-label", "aria-describedby"];
        _hoisted_2 = ["aria-label"];
        _hoisted_3 = ["id"];
        MessageBoxConstructor = /* @__PURE__ */_export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/message-box/src/messageBox.mjs
        init_shared_esm_bundler();
        messageInstance = /* @__PURE__ */new Map();
        getAppendToElement = props => {
          let appendTo = document.body;
          if (props.appendTo) {
            if (isString(props.appendTo)) appendTo = document.querySelector(props.appendTo);
            if (isElement(props.appendTo)) appendTo = props.appendTo;
            if (!isElement(appendTo)) {
              debugWarn("ElMessageBox", "the appendTo option is not an HTMLElement. Falling back to document.body.");
              appendTo = document.body;
            }
          }
          return appendTo;
        };
        initInstance = (props, container, appContext = null) => {
          const vnode = createVNode(MessageBoxConstructor, props, isFunction(props.message) || isVNode(props.message) ? {
            default: isFunction(props.message) ? props.message : () => props.message
          } : null);
          vnode.appContext = appContext;
          render(vnode, container);
          getAppendToElement(props).appendChild(container.firstElementChild);
          return vnode.component;
        };
        genContainer = () => {
          return document.createElement("div");
        };
        showMessage = (options, appContext) => {
          const container = genContainer();
          options.onVanish = () => {
            render(null, container);
            messageInstance.delete(vm);
          };
          options.onAction = action => {
            const currentMsg = messageInstance.get(vm);
            let resolve;
            if (options.showInput) resolve = {
              value: vm.inputValue,
              action
            };else resolve = action;
            if (options.callback) options.callback(resolve, instance.proxy);else if (action === "cancel" || action === "close") {
              if (options.distinguishCancelAndClose && action !== "cancel") currentMsg.reject("close");else currentMsg.reject("cancel");
            } else currentMsg.resolve(resolve);
          };
          const instance = initInstance(options, container, appContext);
          const vm = instance.proxy;
          for (const prop in options) if (hasOwn(options, prop) && !hasOwn(vm.$props, prop)) vm[prop] = options[prop];
          vm.visible = true;
          return vm;
        };
        MESSAGE_BOX_VARIANTS = ["alert", "confirm", "prompt"];
        MESSAGE_BOX_DEFAULT_OPTS = {
          alert: {
            closeOnPressEscape: false,
            closeOnClickModal: false
          },
          confirm: {
            showCancelButton: true
          },
          prompt: {
            showCancelButton: true,
            showInput: true
          }
        };
        MESSAGE_BOX_VARIANTS.forEach(boxType => {
          MessageBox[boxType] = messageBoxFactory(boxType);
        });
        MessageBox.close = () => {
          messageInstance.forEach((_, vm) => {
            vm.doClose();
          });
          messageInstance.clear();
        };
        MessageBox._context = null;

        //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/message-box/index.mjs
        _MessageBox = MessageBox;
        _MessageBox.install = app => {
          _MessageBox._context = app._context;
          app.config.globalProperties.$msgbox = _MessageBox;
          app.config.globalProperties.$messageBox = _MessageBox;
          app.config.globalProperties.$alert = _MessageBox.alert;
          app.config.globalProperties.$confirm = _MessageBox.confirm;
          app.config.globalProperties.$prompt = _MessageBox.prompt;
        };
        _export("n", ElMessageBox = _MessageBox);
      }
    };
  });
})();