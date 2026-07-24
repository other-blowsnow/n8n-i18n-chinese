import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, bt as withCtx, it as renderSlot, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ot as useI18n } from "./core-CPznNyVT.js";
import { ta as N8nActionBox_default } from "./src-bSQwfFcX.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
//#region src/app/components/layouts/ResourcesListEmptyState.vue?vue&type=script&setup=true&lang.ts
var EMPTY_STATE_CONFIG = {
	workflows: {
		icon: "workflow",
		headingKey: "workflows.empty.list.heading",
		descriptionKey: "workflows.empty.list.description",
		ctaKey: "projects.header.create.workflow",
		disabledTooltipKey: "workflows.empty.button.disabled.tooltip"
	},
	credentials: {
		icon: "key-round",
		headingKey: "credentials.empty.heading",
		descriptionKey: "credentials.empty.description",
		ctaKey: "projects.header.create.credential",
		disabledTooltipKey: "credentials.empty.button.disabled.tooltip"
	},
	variables: {
		icon: "variable",
		headingKey: "variables.empty.heading",
		descriptionKey: "variables.empty.description",
		ctaKey: "variables.add.button.label",
		disabledTooltipKey: "variables.empty.button.disabled.tooltip"
	},
	dataTable: {
		icon: "database",
		headingKey: "dataTable.empty.heading",
		descriptionKey: "dataTable.empty.description",
		ctaKey: "dataTable.add.button.label",
		disabledTooltipKey: "dataTable.empty.button.disabled.tooltip"
	},
	agents: {
		icon: "robot",
		headingKey: "agents.list.empty.heading",
		descriptionKey: "agents.list.empty.description",
		ctaKey: "projects.header.create.agent",
		disabledTooltipKey: "agents.list.empty.button.disabled.tooltip"
	}
};
function isEmptyStateResourceKey(key) {
	return key in EMPTY_STATE_CONFIG;
}
//#endregion
//#region src/app/components/layouts/ResourcesListEmptyState.vue
var ResourcesListEmptyState_default = /* @__PURE__ */ defineComponent({
	__name: "ResourcesListEmptyState",
	props: {
		resourceKey: {},
		buttonDisabled: {
			type: Boolean,
			default: false
		},
		disabledTooltipText: { default: void 0 }
	},
	emits: ["click:button"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const config = computed(() => EMPTY_STATE_CONFIG[props.resourceKey]);
		const tooltipText = computed(() => props.disabledTooltipText ?? i18n.baseText(config.value.disabledTooltipKey));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nActionBox_default), {
				"data-test-id": "empty-resources-list",
				icon: {
					type: "icon",
					value: config.value.icon
				},
				heading: unref(i18n).baseText(config.value.headingKey),
				description: unref(i18n).baseText(config.value.descriptionKey),
				"button-text": unref(i18n).baseText(config.value.ctaKey),
				"button-disabled": __props.buttonDisabled,
				"button-icon": __props.buttonDisabled ? "lock" : void 0,
				"onClick:button": _cache[0] || (_cache[0] = ($event) => emit("click:button", $event))
			}, {
				disabledButtonTooltip: withCtx(() => [createTextVNode(toDisplayString(tooltipText.value), 1)]),
				_: 1
			}, 8, [
				"icon",
				"heading",
				"description",
				"button-text",
				"button-disabled",
				"button-icon"
			]);
		};
	}
});
var PageViewLayout_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_1bol0_125",
	content: "_content_1bol0_141"
};
//#endregion
//#region src/app/components/layouts/PageViewLayout.vue
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.wrapper) }, [renderSlot(_ctx.$slots, "header"), createBaseVNode("main", { class: normalizeClass(_ctx.$style.content) }, [renderSlot(_ctx.$slots, "default")], 2)], 2);
}
var PageViewLayout_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": PageViewLayout_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ResourcesListEmptyState_default as n, isEmptyStateResourceKey as r, PageViewLayout_default as t };
