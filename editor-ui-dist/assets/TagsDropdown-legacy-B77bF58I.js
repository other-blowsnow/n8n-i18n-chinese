;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, nextTick, unref, ref, onBeforeUnmount, createVNode, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, watch, withCtx, openBlock, withModifiers, renderList, createBaseVNode, onClickOutside, useI18n, N8nOption_default, N8nSelect_default, N8nIcon_default, v4_default, MAX_TAG_NAME_LENGTH, useToast, __vite_style__, _hoisted_1, _hoisted_2, _hoisted_3, MANAGE_KEY, CREATE_KEY, TagsDropdown_vue_vue_type_script_setup_true_lang_default, TagsDropdown_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        onClickOutside = _MapCacheLegacy005Js.g;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nOption_default = _srcLegacy007Js.G;
        N8nSelect_default = _srcLegacy007Js.W;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_useTelemetryLegacy00FJs) {
        v4_default = _useTelemetryLegacy00FJs.Io;
        MAX_TAG_NAME_LENGTH = _useTelemetryLegacy00FJs.Mo;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.tags-container .el-select-tags-wrapper .el-tag {\n  max-height: 60px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n.tags-container .el-select-tags-wrapper input {\n  max-height: 60px;\n}\n.tags-container .el-tag {\n  padding: var(--spacing--5xs) var(--spacing--4xs);\n  color: var(--color--text);\n  background-color: var(--color--background);\n  border-radius: var(--radius);\n  font-size: var(--font-size--2xs);\n  border: 0;\n}\n.tags-container .el-tag .el-tag__close {\n  max-height: 14px;\n  max-width: 14px;\n  line-height: 14px;\n}\n.tags-dropdown {\n  min-width: 224px !important;\n  max-width: 224px;\n}\n.tags-dropdown .el-tag {\n  white-space: normal;\n}\n.tags-dropdown .el-scrollbar {\n  position: relative;\n  max-height: 266px;\n}\n.tags-dropdown .el-scrollbar > div {\n  overflow: auto;\n  margin-bottom: 0 !important;\n}\n.tags-dropdown .el-scrollbar ul {\n  padding: 0;\n  max-height: 228px;\n}\n.tags-dropdown .el-scrollbar ul ::-webkit-scrollbar {\n  display: none;\n}\n.tags-dropdown-manage-enabled .tags-dropdown .el-scrollbar:after {\n  content: \" \";\n  display: block;\n  min-height: 38px;\n  width: 224px;\n  padding: 10px 20px;\n}\n.tags-dropdown .el-scrollbar ::-webkit-scrollbar-thumb {\n  display: none;\n}\n.tags-dropdown li {\n  height: 38px;\n  background-color: var(--color--foreground--tint-2);\n  padding: 10px 20px;\n  margin: 0;\n  line-height: 18px;\n  font-weight: var(--font-weight--regular);\n  font-size: 14px;\n}\n.tags-dropdown li.is-disabled {\n  color: var(--color--text--tint-1);\n  cursor: default;\n}\n.tags-dropdown li.selected {\n  font-weight: var(--font-weight--bold);\n}\n.tags-dropdown li.selected > span {\n  display: inline-block;\n  width: calc(100% - 14px);\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tags-dropdown li.selected:after {\n  font-size: 14px !important;\n}\n.tags-dropdown li.ops {\n  color: var(--color--primary);\n  cursor: pointer;\n}\n.tags-dropdown li.ops :first-child {\n  margin-right: 5px;\n}\n.tags-dropdown li.tag {\n  border-top: none;\n}\n.tags-dropdown li.manage-tags {\n  position: absolute;\n  bottom: 0;\n  min-width: 224px;\n  border-top: 1px solid var(--color--foreground);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/shared/tags/components/TagsDropdown.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          key: 0
        };
        _hoisted_2 = {
          key: 1
        };
        _hoisted_3 = {
          key: 2
        };
        MANAGE_KEY = "__manage";
        CREATE_KEY = "__create";
        TagsDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "TagsDropdown",
          props: {
            placeholder: {
              default: ""
            },
            modelValue: {
              default: () => []
            },
            eventBus: {
              default: null
            },
            allTags: {},
            isLoading: {
              type: Boolean
            },
            tagsById: {},
            createEnabled: {
              type: Boolean,
              default: true
            },
            manageEnabled: {
              type: Boolean,
              default: true
            },
            createTag: {
              type: Function,
              default: void 0
            },
            multipleLimit: {
              default: 0
            }
          },
          emits: ["update:modelValue", "esc", "blur", "manage-tags"],
          setup(__props, {
            emit: __emit
          }) {
            const i18n = useI18n();
            const {
              showError
            } = useToast();
            const props = __props;
            const emit = __emit;
            const selectRef = ref();
            const tagRefs = ref();
            const createRef = ref();
            const filter = ref("");
            const focused = ref(false);
            const preventUpdate = ref(false);
            const container = ref();
            const dropdownId = v4_default();
            const options = computed(() => {
              return props.allTags.filter(tag => tag && tag.name.toLowerCase().includes(filter.value.toLowerCase()));
            });
            const appliedTags = computed(() => {
              return props.modelValue.filter(id => props.tagsById[id]);
            });
            const containerClasses = computed(() => {
              return {
                "tags-container": true,
                focused: focused.value
              };
            });
            const dropdownClasses = computed(() => ["tags-dropdown", `tags-dropdown-${dropdownId}`, props.createEnabled ? "tags-dropdown-create-enabled" : "", props.manageEnabled ? "tags-dropdown-manage-enabled" : ""].join(" "));
            watch(() => props.allTags, () => {
              if (props.modelValue.length !== appliedTags.value.length) emit("update:modelValue", appliedTags.value);
            });
            onMounted(() => {
              const select = selectRef.value?.innerSelect;
              if (select) {
                const input = select.$refs.input;
                if (input) {
                  input.setAttribute("maxlength", `${24}`);
                  input.addEventListener("keydown", e => {
                    const keyboardEvent = e;
                    if (keyboardEvent.key === "Escape") emit("esc");else if (keyboardEvent.key === "Enter" && filter.value.length === 0) {
                      preventUpdate.value = true;
                      emit("blur");
                      if (typeof selectRef.value?.blur === "function") selectRef.value.blur();
                    }
                  });
                }
              }
              props.eventBus?.on("focus", onBusFocus);
            });
            onBeforeUnmount(() => {
              props.eventBus?.off("focus", onBusFocus);
            });
            function onBusFocus() {
              focusOnInput();
              focusFirstOption();
            }
            function filterOptions(value = "") {
              filter.value = value;
              nextTick(() => focusFirstOption());
            }
            async function onCreate() {
              if (!props.createTag) return;
              const name = filter.value;
              try {
                const newTag = await props.createTag(name);
                emit("update:modelValue", [...props.modelValue, newTag.id]);
                filter.value = "";
              } catch (error) {
                showError(error, i18n.baseText("tagsDropdown.showError.title"), i18n.baseText("tagsDropdown.showError.message", {
                  interpolate: {
                    name
                  }
                }));
              }
            }
            function onTagsUpdated(selected) {
              const manage = selected.find(value => value === MANAGE_KEY);
              const create = selected.find(value => value === CREATE_KEY);
              if (manage) {
                filter.value = "";
                emit("manage-tags");
                emit("blur");
              } else if (create) onCreate();else setTimeout(() => {
                if (!preventUpdate.value) emit("update:modelValue", selected);
                preventUpdate.value = false;
              }, 0);
            }
            function focusFirstOption() {
              if (createRef.value?.$el) createRef.value.$el.dispatchEvent(new Event("mouseenter"));else if (tagRefs.value?.[0]?.$el) tagRefs.value[0].$el.dispatchEvent(new Event("mouseenter"));
            }
            function focusOnInput() {
              if (selectRef.value) {
                selectRef.value.focusOnInput();
                focused.value = true;
              }
            }
            function onVisibleChange(visible) {
              if (!visible) {
                filter.value = "";
                focused.value = false;
              } else focused.value = true;
            }
            function onRemoveTag() {
              nextTick(() => {
                focusOnInput();
              });
            }
            onClickOutside(container, () => {
              emit("blur");
            }, {
              ignore: [`.tags-dropdown-${dropdownId}`, "#tags-manager-modal"],
              detectIframe: true
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                ref_key: "container",
                ref: container,
                class: normalizeClass(containerClasses.value),
                onKeydown: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
              }, [createVNode(unref(N8nSelect_default), {
                ref_key: "selectRef",
                ref: selectRef,
                teleported: true,
                "model-value": appliedTags.value,
                loading: _ctx.isLoading,
                placeholder: _ctx.placeholder,
                "filter-method": filterOptions,
                filterable: "",
                multiple: "",
                "multiple-limit": props.multipleLimit,
                "reserve-keyword": false,
                "loading-text": "...",
                "popper-class": dropdownClasses.value,
                "data-test-id": "tags-dropdown",
                "onUpdate:modelValue": onTagsUpdated,
                onVisibleChange,
                onRemoveTag
              }, {
                default: withCtx(() => [_ctx.createEnabled && options.value.length === 0 && filter.value ? (openBlock(), createBlock(unref(N8nOption_default), {
                  key: CREATE_KEY,
                  ref_key: "createRef",
                  ref: createRef,
                  value: CREATE_KEY,
                  class: "ops"
                }, {
                  default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                    icon: "circle-plus"
                  }), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("tagsDropdown.createTag", {
                    interpolate: {
                      filter: filter.value
                    }
                  })), 1)]),
                  _: 1
                })) : options.value.length === 0 ? (openBlock(), createBlock(unref(N8nOption_default), {
                  key: 1,
                  value: "message",
                  disabled: ""
                }, {
                  default: withCtx(() => [_ctx.createEnabled ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(unref(i18n).baseText("tagsDropdown.typeToCreateATag")), 1)) : _ctx.allTags.length > 0 ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(unref(i18n).baseText("tagsDropdown.noMatchingTagsExist")), 1)) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(i18n).baseText("tagsDropdown.noTagsExist")), 1))]),
                  _: 1
                })) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(options.value, (tag, i) => {
                  return openBlock(), createBlock(unref(N8nOption_default), {
                    key: tag.id + "_" + i,
                    ref_for: true,
                    ref_key: "tagRefs",
                    ref: tagRefs,
                    value: tag.id,
                    label: tag.name,
                    class: "tag",
                    "data-test-id": "tag"
                  }, null, 8, ["value", "label"]);
                }), 128)), _ctx.manageEnabled ? (openBlock(), createBlock(unref(N8nOption_default), {
                  key: MANAGE_KEY,
                  value: MANAGE_KEY,
                  class: "ops manage-tags"
                }, {
                  default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                    icon: "cog"
                  }), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("tagsDropdown.manageTags")), 1)]),
                  _: 1
                })) : createCommentVNode("", true)]),
                _: 1
              }, 8, ["model-value", "loading", "placeholder", "multiple-limit", "popper-class"])], 34);
            };
          }
        }); //#endregion
        //#region src/features/shared/tags/components/TagsDropdown.vue
        _export("t", TagsDropdown_default = TagsDropdown_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();