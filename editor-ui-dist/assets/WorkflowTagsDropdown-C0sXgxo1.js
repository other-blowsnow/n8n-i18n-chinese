import { $ as openBlock, N as defineComponent, S as computed, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { Rt as useTagsStore } from "./workflowDocument.store-W274j3PU.js";
import { X as TAGS_MANAGER_MODAL_KEY, f as useUIStore } from "./users.store-C2APvywU.js";
import { t as TagsDropdown_default } from "./TagsDropdown-BGiJw8b-.js";
import { n as useTagPermissions } from "./useTagPermissions-Cu6l0SX9.js";
//#endregion
//#region src/features/shared/tags/components/WorkflowTagsDropdown.vue
var WorkflowTagsDropdown_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowTagsDropdown",
	props: {
		placeholder: { default: "" },
		modelValue: { default: () => [] },
		createEnabled: {
			type: Boolean,
			default: true
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
		const tagsStore = useTagsStore();
		const uiStore = useUIStore();
		const { canCreate, canManage } = useTagPermissions();
		const selectedTags = computed({
			get: () => props.modelValue,
			set: (value) => emit("update:modelValue", value)
		});
		const allTags = computed(() => tagsStore.allTags);
		const isLoading = computed(() => tagsStore.isLoading);
		const tagsById = computed(() => tagsStore.tagsById);
		const isCreateEnabled = computed(() => props.createEnabled && canCreate.value);
		const isManageEnabled = computed(() => canManage.value);
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
export { WorkflowTagsDropdown_default as t };
