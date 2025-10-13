import { d as defineComponent, gj as useAnnotationTagsStore, Q as useUIStore, x as computed, e as createBlock, g as openBlock, gk as _sfc_main$1, gl as ANNOTATION_TAGS_MANAGER_MODAL_KEY } from "./index-Bwe5xApO.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AnnotationTagsDropdown.ee",
  props: {
    placeholder: { default: "" },
    modelValue: { default: () => [] },
    createEnabled: { type: Boolean, default: false },
    eventBus: { default: null }
  },
  emits: ["update:modelValue", "esc", "blur"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const tagsStore = useAnnotationTagsStore();
    const uiStore = useUIStore();
    const selectedTags = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    const allTags = computed(() => tagsStore.allTags);
    const isLoading = computed(() => tagsStore.isLoading);
    const tagsById = computed(() => tagsStore.tagsById);
    async function createTag(name) {
      return await tagsStore.create(name);
    }
    function handleManageTags() {
      uiStore.openModal(ANNOTATION_TAGS_MANAGER_MODAL_KEY);
    }
    function handleEsc() {
      emit("esc");
    }
    function handleBlur() {
      emit("blur");
    }
    void tagsStore.fetchAll();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        modelValue: selectedTags.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedTags.value = $event),
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
});
export {
  _sfc_main as _
};
