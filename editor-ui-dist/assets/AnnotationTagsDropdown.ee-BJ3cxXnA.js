import { C as computed, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { Li as useUIStore, gn as useAnnotationTagsStore } from "./useTelemetry-C3cN19b2.js";
import { M as ANNOTATION_TAGS_MANAGER_MODAL_KEY } from "./constants-CiCQTzlI.js";
import { t as TagsDropdown_default } from "./TagsDropdown-Zlf0mFsm.js";
var AnnotationTagsDropdown_ee_default = /* @__PURE__ */ defineComponent({
	__name: "AnnotationTagsDropdown.ee",
	props: {
		placeholder: { default: "" },
		modelValue: { default: () => [] },
		createEnabled: {
			type: Boolean,
			default: false
		},
		eventBus: { default: null }
	},
	emits: [
		"update:modelValue",
		"esc",
		"blur"
	],
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
		tagsStore.fetchAll();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(TagsDropdown_default, {
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
			}, null, 8, [
				"modelValue",
				"placeholder",
				"create-enabled",
				"event-bus",
				"all-tags",
				"is-loading",
				"tags-by-id"
			]);
		};
	}
});
export { AnnotationTagsDropdown_ee_default as t };
