;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./src-legacy-D3-Bo0sy.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, nextTick, unref, toRefs, ref, defineComponent, reactive, toDisplayString, onMounted, normalizeClass, watch, renderSlot, vModelRadio, openBlock, withModifiers, createTextVNode, isRef, provide, isString, init_shared_esm_bundler, createBaseVNode, withDirectives, normalizeStyle, inject, useFormDisabled, useFormItemInputId, useFormItem, useFormSize, CHANGE_EVENT, useId, UPDATE_MODEL_EVENT, isBoolean, buildProps, useSizeProp, debugWarn, isNumber, useNamespace, withInstall, _export_sfc, withNoopInstall, radioPropsBase, radioProps, radioEmits, radioGroupKey, useRadio, _hoisted_1$2, Radio, radioButtonProps, _hoisted_1$1, RadioButton, radioGroupProps, radioGroupEmits, _hoisted_1, RadioGroup, ElRadio, ElRadioGroup, ElRadioButton;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        toRefs = _vueRuntimeEsmBundlerLegacy003Js.Ht;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        reactive = _vueRuntimeEsmBundlerLegacy003Js.Pt;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        vModelRadio = _vueRuntimeEsmBundlerLegacy003Js.d;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        isRef = _vueRuntimeEsmBundlerLegacy003Js.jt;
        provide = _vueRuntimeEsmBundlerLegacy003Js.nt;
        isString = _vueRuntimeEsmBundlerLegacy003Js.pn;
        init_shared_esm_bundler = _vueRuntimeEsmBundlerLegacy003Js.tn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.yn;
        inject = _vueRuntimeEsmBundlerLegacy003Js.z;
      }, function (_srcLegacy007Js) {
        useFormDisabled = _srcLegacy007Js.$t;
        useFormItemInputId = _srcLegacy007Js.Qt;
        useFormItem = _srcLegacy007Js.Zt;
        useFormSize = _srcLegacy007Js.en;
        CHANGE_EVENT = _srcLegacy007Js.ln;
        useId = _srcLegacy007Js.nn;
        UPDATE_MODEL_EVENT = _srcLegacy007Js.un;
      }, function (_truncateLegacy00hJs) {
        isBoolean = _truncateLegacy00hJs.K;
        buildProps = _truncateLegacy00hJs.P;
        useSizeProp = _truncateLegacy00hJs.T;
        debugWarn = _truncateLegacy00hJs.V;
        isNumber = _truncateLegacy00hJs.Y;
        useNamespace = _truncateLegacy00hJs.k;
      }, function (_iconLegacy00lJs) {
        withInstall = _iconLegacy00lJs.i;
        _export_sfc = _iconLegacy00lJs.n;
        withNoopInstall = _iconLegacy00lJs.s;
      }],
      execute: function () {
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/radio/src/radio.mjs
        init_shared_esm_bundler();
        radioPropsBase = buildProps({
          size: useSizeProp,
          disabled: Boolean,
          label: {
            type: [String, Number, Boolean],
            default: ""
          }
        });
        radioProps = buildProps({
          ...radioPropsBase,
          modelValue: {
            type: [String, Number, Boolean],
            default: ""
          },
          name: {
            type: String,
            default: ""
          },
          border: Boolean
        });
        radioEmits = {
          [UPDATE_MODEL_EVENT]: val => isString(val) || isNumber(val) || isBoolean(val),
          [CHANGE_EVENT]: val => isString(val) || isNumber(val) || isBoolean(val)
        }; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/radio/src/constants.mjs
        radioGroupKey = Symbol("radioGroupKey"); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/radio/src/use-radio.mjs
        useRadio = (props, emit) => {
          const radioRef = ref();
          const radioGroup = inject(radioGroupKey, void 0);
          const isGroup = computed(() => !!radioGroup);
          const modelValue = computed({
            get() {
              return isGroup.value ? radioGroup.modelValue : props.modelValue;
            },
            set(val) {
              if (isGroup.value) radioGroup.changeEvent(val);else emit && emit("update:modelValue", val);
              radioRef.value.checked = props.modelValue === props.label;
            }
          });
          const size = useFormSize(computed(() => radioGroup == null ? void 0 : radioGroup.size));
          const disabled = useFormDisabled(computed(() => radioGroup == null ? void 0 : radioGroup.disabled));
          return {
            radioRef,
            isGroup,
            radioGroup,
            focus: ref(false),
            size,
            disabled,
            tabIndex: computed(() => {
              return disabled.value || isGroup.value && modelValue.value !== props.label ? -1 : 0;
            }),
            modelValue
          };
        }; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/radio/src/radio2.mjs
        _hoisted_1$2 = ["value", "name", "disabled"];
        Radio = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          ...defineComponent({
            name: "ElRadio"
          }),
          props: radioProps,
          emits: radioEmits,
          setup(__props, {
            emit
          }) {
            const props = __props;
            const ns = useNamespace("radio");
            const {
              radioRef,
              radioGroup,
              focus,
              size,
              disabled,
              modelValue
            } = useRadio(props, emit);
            function handleChange() {
              nextTick(() => emit("change", modelValue.value));
            }
            return (_ctx, _cache) => {
              var _a;
              return openBlock(), createElementBlock("label", {
                class: normalizeClass([unref(ns).b(), unref(ns).is("disabled", unref(disabled)), unref(ns).is("focus", unref(focus)), unref(ns).is("bordered", _ctx.border), unref(ns).is("checked", unref(modelValue) === _ctx.label), unref(ns).m(unref(size))])
              }, [createBaseVNode("span", {
                class: normalizeClass([unref(ns).e("input"), unref(ns).is("disabled", unref(disabled)), unref(ns).is("checked", unref(modelValue) === _ctx.label)])
              }, [withDirectives(createBaseVNode("input", {
                ref_key: "radioRef",
                ref: radioRef,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(modelValue) ? modelValue.value = $event : null),
                class: normalizeClass(unref(ns).e("original")),
                value: _ctx.label,
                name: _ctx.name || ((_a = unref(radioGroup)) == null ? void 0 : _a.name),
                disabled: unref(disabled),
                type: "radio",
                onFocus: _cache[1] || (_cache[1] = $event => focus.value = true),
                onBlur: _cache[2] || (_cache[2] = $event => focus.value = false),
                onChange: handleChange,
                onClick: _cache[3] || (_cache[3] = withModifiers(() => {}, ["stop"]))
              }, null, 42, _hoisted_1$2), [[vModelRadio, unref(modelValue)]]), createBaseVNode("span", {
                class: normalizeClass(unref(ns).e("inner"))
              }, null, 2)], 2), createBaseVNode("span", {
                class: normalizeClass(unref(ns).e("label")),
                onKeydown: _cache[4] || (_cache[4] = withModifiers(() => {}, ["stop"]))
              }, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.label), 1)])], 34)], 2);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/radio/src/radio-button.mjs
        radioButtonProps = buildProps({
          ...radioPropsBase,
          name: {
            type: String,
            default: ""
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/radio/src/radio-button2.mjs
        _hoisted_1$1 = ["value", "name", "disabled"];
        RadioButton = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          ...defineComponent({
            name: "ElRadioButton"
          }),
          props: radioButtonProps,
          setup(__props) {
            const props = __props;
            const ns = useNamespace("radio");
            const {
              radioRef,
              focus,
              size,
              disabled,
              modelValue,
              radioGroup
            } = useRadio(props);
            const activeStyle = computed(() => {
              return {
                backgroundColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
                borderColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
                boxShadow: (radioGroup == null ? void 0 : radioGroup.fill) ? `-1px 0 0 0 ${radioGroup.fill}` : "",
                color: (radioGroup == null ? void 0 : radioGroup.textColor) || ""
              };
            });
            return (_ctx, _cache) => {
              var _a;
              return openBlock(), createElementBlock("label", {
                class: normalizeClass([unref(ns).b("button"), unref(ns).is("active", unref(modelValue) === _ctx.label), unref(ns).is("disabled", unref(disabled)), unref(ns).is("focus", unref(focus)), unref(ns).bm("button", unref(size))])
              }, [withDirectives(createBaseVNode("input", {
                ref_key: "radioRef",
                ref: radioRef,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(modelValue) ? modelValue.value = $event : null),
                class: normalizeClass(unref(ns).be("button", "original-radio")),
                value: _ctx.label,
                type: "radio",
                name: _ctx.name || ((_a = unref(radioGroup)) == null ? void 0 : _a.name),
                disabled: unref(disabled),
                onFocus: _cache[1] || (_cache[1] = $event => focus.value = true),
                onBlur: _cache[2] || (_cache[2] = $event => focus.value = false),
                onClick: _cache[3] || (_cache[3] = withModifiers(() => {}, ["stop"]))
              }, null, 42, _hoisted_1$1), [[vModelRadio, unref(modelValue)]]), createBaseVNode("span", {
                class: normalizeClass(unref(ns).be("button", "inner")),
                style: normalizeStyle(unref(modelValue) === _ctx.label ? unref(activeStyle) : {}),
                onKeydown: _cache[4] || (_cache[4] = withModifiers(() => {}, ["stop"]))
              }, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.label), 1)])], 38)], 2);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/radio/src/radio-group.mjs
        radioGroupProps = buildProps({
          id: {
            type: String,
            default: void 0
          },
          size: useSizeProp,
          disabled: Boolean,
          modelValue: {
            type: [String, Number, Boolean],
            default: ""
          },
          fill: {
            type: String,
            default: ""
          },
          label: {
            type: String,
            default: void 0
          },
          textColor: {
            type: String,
            default: ""
          },
          name: {
            type: String,
            default: void 0
          },
          validateEvent: {
            type: Boolean,
            default: true
          }
        });
        radioGroupEmits = radioEmits; //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/radio/src/radio-group2.mjs
        _hoisted_1 = ["id", "aria-label", "aria-labelledby"];
        RadioGroup = /* @__PURE__ */_export_sfc(/* @__PURE__ */defineComponent({
          ...defineComponent({
            name: "ElRadioGroup"
          }),
          props: radioGroupProps,
          emits: radioGroupEmits,
          setup(__props, {
            emit
          }) {
            const props = __props;
            const ns = useNamespace("radio");
            const radioId = useId();
            const radioGroupRef = ref();
            const {
              formItem
            } = useFormItem();
            const {
              inputId: groupId,
              isLabeledByFormItem
            } = useFormItemInputId(props, {
              formItemContext: formItem
            });
            const changeEvent = value => {
              emit(UPDATE_MODEL_EVENT, value);
              nextTick(() => emit("change", value));
            };
            onMounted(() => {
              const radios = radioGroupRef.value.querySelectorAll("[type=radio]");
              const firstLabel = radios[0];
              if (!Array.from(radios).some(radio => radio.checked) && firstLabel) firstLabel.tabIndex = 0;
            });
            const name = computed(() => {
              return props.name || radioId.value;
            });
            provide(radioGroupKey, reactive({
              ...toRefs(props),
              changeEvent,
              name
            }));
            watch(() => props.modelValue, () => {
              if (props.validateEvent) formItem?.validate("change").catch(err => debugWarn(err));
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                id: unref(groupId),
                ref_key: "radioGroupRef",
                ref: radioGroupRef,
                class: normalizeClass(unref(ns).b("group")),
                role: "radiogroup",
                "aria-label": !unref(isLabeledByFormItem) ? _ctx.label || "radio-group" : void 0,
                "aria-labelledby": unref(isLabeledByFormItem) ? unref(formItem).labelId : void 0
              }, [renderSlot(_ctx.$slots, "default")], 10, _hoisted_1);
            };
          }
        }), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]); //#endregion
        //#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=3bc4ea0a42ad52c6bbc3d06c12c2963d55b57d6b5b8d436e46e7fd8ff_87815230ec1d292541fa9e3e306612e7/node_modules/element-plus/es/components/radio/index.mjs
        _export("t", ElRadio = withInstall(Radio, {
          RadioButton,
          RadioGroup
        }));
        ElRadioGroup = withNoopInstall(RadioGroup);
        ElRadioButton = withNoopInstall(RadioButton); //#endregion
      }
    };
  });
})();