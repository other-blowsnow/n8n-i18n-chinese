import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, K as onBeforeMount, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, gt as watch, it as renderSlot, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-DL4VDRVM.js";
import { Mi as N8nTooltip_default, Qi as N8nButton_default, Ut as N8nBadge_default, W as N8nPopover_default, lt as N8nLink_default, vt as N8nInputLabel_default } from "./src-CO68IM2H.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { Ft as useProjectsStore } from "./users.store-Bj_XyNBb.js";
import { ml as EnterpriseEditionFeature } from "./constants-CasV1Nn-.js";
import { t as EnterpriseEdition_ee_default } from "./EnterpriseEdition.ee-qNsNiI9h.js";
import { t as ProjectSharing_default } from "./ProjectSharing-ByKoVhCW.js";
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
		const shouldBeIconButton = computed(() => {
			return !hasFilters.value;
		});
		watch(filtersLength, (value) => {
			emit("update:filtersLength", value);
		});
		onBeforeMount(async () => {
			await projectsStore.getAvailableProjects();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				width: "304px",
				"content-class": _ctx.$style["popover-content"],
				align: "end"
			}, {
				trigger: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style["trigger-wrapper"]) }, [createVNode(unref(N8nTooltip_default), null, {
					content: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode(" Filters ", -1)])]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "outline",
						icon: "funnel",
						size: "medium",
						iconOnly: shouldBeIconButton.value,
						active: hasFilters.value,
						"aria-label": unref(i18n).baseText("forms.resourceFiltersDropdown.filters"),
						class: normalizeClass({
							[_ctx.$style["filter-button"]]: true,
							[_ctx.$style["no-label"]]: __props.justIcon && filtersLength.value === 0
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
						}, 8, ["class"])) : createCommentVNode("", true), !__props.justIcon ? (openBlock(), createElementBlock("span", {
							key: 1,
							class: normalizeClass(_ctx.$style["filter-button-text"])
						}, toDisplayString(unref(i18n).baseText("forms.resourceFiltersDropdown.filters")), 3)) : createCommentVNode("", true)]),
						_: 1
					}, 8, [
						"iconOnly",
						"active",
						"aria-label",
						"class"
					])]),
					_: 1
				})], 2)]),
				content: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["filters-dropdown"]),
					"data-test-id": "resources-list-filters-dropdown"
				}, [
					renderSlot(_ctx.$slots, "default", {
						filters: __props.modelValue,
						setKeyValue
					}),
					__props.shareable && unref(projectsStore).isProjectHome ? (openBlock(), createBlock(EnterpriseEdition_ee_default, {
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
			}, 8, ["content-class"]);
		};
	}
});
var ResourceFiltersDropdown_vue_vue_type_style_index_0_lang_module_default = {
	"filter-button": "_filter-button_qmehf_125",
	"filter-button-count": "_filter-button-count_qmehf_125",
	"filter-button-text": "_filter-button-text_qmehf_130",
	"filters-dropdown-footer": "_filters-dropdown-footer_qmehf_138",
	"popover-content": "_popover-content_qmehf_144",
	"trigger-wrapper": "_trigger-wrapper_qmehf_148"
};
var ResourceFiltersDropdown_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ResourceFiltersDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResourceFiltersDropdown_vue_vue_type_style_index_0_lang_module_default }]]);
export { ResourceFiltersDropdown_default as t };
