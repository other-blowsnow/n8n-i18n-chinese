import { $ as openBlock, N as defineComponent, S as computed, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { Ft as useAnnotationTagsStore } from "./workflowDocument.store-LDfI_CPs.js";
import { J as ANNOTATION_TAGS_MANAGER_MODAL_KEY, f as useUIStore } from "./users.store-CHh4wCL_.js";
import { t as TagsDropdown_default } from "./TagsDropdown-BHJDnAhZ.js";
import { t as useAnnotationTagPermissions } from "./useTagPermissions-C80eY_9b.js";
//#endregion
//#region src/features/shared/tags/components/AnnotationTagsDropdown.ee.vue
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
		const { canCreate: canCreateTag, canManage } = useAnnotationTagPermissions();
		const selectedTags = computed({
			get: () => props.modelValue,
			set: (value) => emit("update:modelValue", value)
		});
		const allTags = computed(() => tagsStore.allTags);
		const isLoading = computed(() => tagsStore.isLoading);
		const tagsById = computed(() => tagsStore.tagsById);
		const isCreateEnabled = computed(() => props.createEnabled && canCreateTag.value);
		const isManageEnabled = computed(() => canManage.value);
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
				placeholder: __props.placeholder,
				"create-enabled": isCreateEnabled.value,
				"manage-enabled": isManageEnabled.value,
				"event-bus": __props.eventBus,
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
				"manage-enabled",
				"event-bus",
				"all-tags",
				"is-loading",
				"tags-by-id"
			]);
		};
	}
});
//#endregion
export { AnnotationTagsDropdown_ee_default as t };
