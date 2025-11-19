;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./useTelemetry-legacy-BdQlQKwu.js", "./TagsDropdown-legacy-B77bF58I.js"], function (_export, _context) {
    "use strict";

    var computed, defineComponent, createBlock, openBlock, useUIStore, TAGS_MANAGER_MODAL_KEY, useTagsStore, TagsDropdown_default, WorkflowTagsDropdown_vue_vue_type_script_setup_true_lang_default, WorkflowTagsDropdown_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_useTelemetryLegacy00FJs) {
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        TAGS_MANAGER_MODAL_KEY = _useTelemetryLegacy00FJs.No;
        useTagsStore = _useTelemetryLegacy00FJs._n;
      }, function (_TagsDropdownLegacy02TJs) {
        TagsDropdown_default = _TagsDropdownLegacy02TJs.t;
      }],
      execute: function () {
        //#region src/features/shared/tags/components/WorkflowTagsDropdown.vue?vue&type=script&setup=true&lang.ts
        WorkflowTagsDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowTagsDropdown",
          props: {
            placeholder: {
              default: ""
            },
            modelValue: {
              default: () => []
            },
            createEnabled: {
              type: Boolean,
              default: true
            },
            eventBus: {
              default: null
            }
          },
          emits: ["update:modelValue", "esc", "blur"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const tagsStore = useTagsStore();
            const uiStore = useUIStore();
            const selectedTags = computed({
              get: () => props.modelValue,
              set: value => emit("update:modelValue", value)
            });
            const allTags = computed(() => tagsStore.allTags);
            const isLoading = computed(() => tagsStore.isLoading);
            const tagsById = computed(() => tagsStore.tagsById);
            async function createTag(name) {
              return await tagsStore.create(name);
            }
            function handleManageTags() {
              uiStore.openModal(TAGS_MANAGER_MODAL_KEY);
            }
            function handleEsc() {
              emit("esc");
            }
            function handleBlur() {
              emit("blur");
            }
            tagsStore.fetchAll();
            return (_ctx, _cache) => {
              return openBlock(), createBlock(TagsDropdown_default, {
                modelValue: selectedTags.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => selectedTags.value = $event),
                placeholder: _ctx.placeholder,
                "create-enabled": _ctx.createEnabled,
                "event-bus": _ctx.eventBus,
                "all-tags": allTags.value,
                "is-loading": isLoading.value,
                "tags-by-id": tagsById.value,
                "create-tag": createTag,
                onManageTags: handleManageTags,
                onEsc: handleEsc,
                onBlur: handleBlur
              }, null, 8, ["modelValue", "placeholder", "create-enabled", "event-bus", "all-tags", "is-loading", "tags-by-id"]);
            };
          }
        }); //#endregion
        //#region src/features/shared/tags/components/WorkflowTagsDropdown.vue
        _export("t", WorkflowTagsDropdown_default = WorkflowTagsDropdown_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();