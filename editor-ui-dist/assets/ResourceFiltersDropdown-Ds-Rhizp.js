import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, M as createVNode, P as defineComponent, T as createBlock, _t as watch, at as renderSlot, bt as withCtx, et as openBlock, j as createTextVNode, q as onBeforeMount, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { $ as N8nInputLabel_default, O as N8nPopover_default, Un as N8nButton_default, lt as N8nBadge_default, mt as N8nLink_default } from "./src-j4VKDieO.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { Pn as useProjectsStore } from "./builder.store-BjWbk2Wl.js";
import { wc as EnterpriseEditionFeature } from "./constants-ksa9xIxI.js";
import { t as EnterpriseEdition_ee_default } from "./EnterpriseEdition.ee-mw8TFNQ6.js";
import { t as ProjectSharing_default } from "./ProjectSharing-C0wkfel0.js";
var ResourceFiltersDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ResourceFiltersDropdown",
	props: {
		modelValue: { default: () => ({}) },
		keys: { default: () => [] },
		shareable: {
			type: Boolean,
			default: true
		},
		reset: {
			type: Function,
			default: () => {}
		},
		justIcon: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:modelValue", "update:filtersLength"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const projectsStore = useProjectsStore();
		const i18n = useI18n();
		const selectedProject = computed({
			get: () => {
				return projectsStore.availableProjects.find((project) => project.id === props.modelValue.homeProject) ?? null;
			},
			set: (value) => setKeyValue("homeProject", value?.id ?? "")
		});
		const filtersLength = computed(() => {
			let length = 0;
			props.keys.forEach((key) => {
				if (key === "search") return;
				const value = props.modelValue[key];
				if (value === true) length += 1;
				if (Array.isArray(value) && value.length) length += 1;
				if (typeof value === "string" && value !== "") length += 1;
			});
			return length;
		});
		const hasFilters = computed(() => filtersLength.value > 0);
		const setKeyValue = (key, value) => {
			emit("update:modelValue", {
				...props.modelValue,
				[key]: value
			});
		};
		const resetFilters = () => {
			if (props.reset) props.reset();
			else {
				const filters = { ...props.modelValue };
				props.keys.forEach((key) => {
					filters[key] = Array.isArray(props.modelValue[key]) ? [] : "";
				});
				emit("update:modelValue", filters);
			}
			selectedProject.value = null;
		};
		watch(filtersLength, (value) => {
			emit("update:filtersLength", value);
		});
		onBeforeMount(async () => {
			await projectsStore.getAvailableProjects();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				trigger: "click",
				width: "304",
				size: "large"
			}, {
				reference: withCtx(() => [createVNode(unref(N8nButton_default), {
					icon: "funnel",
					type: "tertiary",
					size: "small",
					active: hasFilters.value,
					class: normalizeClass({
						[_ctx.$style["filter-button"]]: true,
						[_ctx.$style["no-label"]]: _ctx.justIcon && filtersLength.value === 0
					}),
					"data-test-id": "resources-list-filters-trigger"
				}, {
					default: withCtx(() => [filtersLength.value > 0 ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						class: normalizeClass(_ctx.$style["filter-button-count"]),
						"data-test-id": "resources-list-filters-count",
						theme: "primary"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(filtersLength.value), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true), !_ctx.justIcon ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style["filter-button-text"])
					}, toDisplayString(unref(i18n).baseText("forms.resourceFiltersDropdown.filters")), 3)) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["active", "class"])]),
				default: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["filters-dropdown"]),
					"data-test-id": "resources-list-filters-dropdown"
				}, [
					renderSlot(_ctx.$slots, "default", {
						filters: _ctx.modelValue,
						setKeyValue
					}),
					_ctx.shareable && unref(projectsStore).isProjectHome ? (openBlock(), createBlock(EnterpriseEdition_ee_default, {
						key: 0,
						features: [unref(EnterpriseEditionFeature).Sharing]
					}, {
						default: withCtx(() => [createVNode(unref(N8nInputLabel_default), {
							label: unref(i18n).baseText("forms.resourceFiltersDropdown.owner"),
							bold: false,
							size: "small",
							color: "text-base",
							class: "mb-3xs"
						}, null, 8, ["label"]), createVNode(ProjectSharing_default, {
							modelValue: selectedProject.value,
							"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => selectedProject.value = $event), _cache[1] || (_cache[1] = ($event) => setKeyValue("homeProject", $event.id))],
							projects: unref(projectsStore).availableProjects,
							placeholder: unref(i18n).baseText("forms.resourceFiltersDropdown.owner.placeholder"),
							"empty-options-text": unref(i18n).baseText("projects.sharing.noMatchingProjects")
						}, null, 8, [
							"modelValue",
							"projects",
							"placeholder",
							"empty-options-text"
						])]),
						_: 1
					}, 8, ["features"])) : createCommentVNode("", true),
					hasFilters.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass([_ctx.$style["filters-dropdown-footer"], "mt-s"])
					}, [createVNode(unref(N8nLink_default), { onClick: resetFilters }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("forms.resourceFiltersDropdown.reset")), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true)
				], 2)]),
				_: 3
			});
		};
	}
});
var ResourceFiltersDropdown_vue_vue_type_style_index_0_lang_module_default = {
	"filter-button": "_filter-button_1mymx_123",
	"no-label": "_no-label_1mymx_127",
	"filter-button-count": "_filter-button-count_1mymx_133",
	"filter-button-text": "_filter-button-text_1mymx_142",
	"filters-dropdown": "_filters-dropdown_1mymx_150",
	"filters-dropdown-footer": "_filters-dropdown-footer_1mymx_154"
};
var ResourceFiltersDropdown_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ResourceFiltersDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResourceFiltersDropdown_vue_vue_type_style_index_0_lang_module_default }]]);
export { ResourceFiltersDropdown_default as t };
