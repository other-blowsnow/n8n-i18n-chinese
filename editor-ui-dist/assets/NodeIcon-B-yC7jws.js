import { C as computed, Gt as unref, P as defineComponent, T as createBlock, _n as normalizeClass, et as openBlock, l as useCssVars } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { D as N8nNodeIcon_default } from "./src-BmrdBtCN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { t as getNodeIconSource } from "./nodeIcon-BWTKM7V3.js";
var NodeIcon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeIcon",
	props: {
		size: { default: void 0 },
		disabled: {
			type: Boolean,
			default: false
		},
		circle: {
			type: Boolean,
			default: false
		},
		colorDefault: { default: "" },
		showTooltip: {
			type: Boolean,
			default: false
		},
		tooltipPosition: { default: "top" },
		nodeName: { default: "" },
		iconSource: { default: void 0 },
		nodeType: { default: void 0 },
		node: { default: void 0 }
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		useCssVars((_ctx) => ({ "5a547dd0": iconColor.value }));
		const props = __props;
		const emit = __emit;
		const iconSource = computed(() => {
			if (props.iconSource) return props.iconSource;
			return getNodeIconSource(props.nodeType, props.node ?? null);
		});
		const iconType = computed(() => iconSource.value?.type ?? "unknown");
		const src = computed(() => {
			if (iconSource.value?.type !== "file") return;
			return iconSource.value.src;
		});
		const iconName = computed(() => {
			if (iconSource.value?.type !== "icon") return;
			return iconSource.value.name;
		});
		const iconColor = computed(() => {
			if (iconSource.value?.type !== "icon") return;
			return iconSource.value.color ?? props.colorDefault;
		});
		const badge = computed(() => {
			if (iconSource.value?.badge?.type !== "file") return;
			return iconSource.value.badge;
		});
		const nodeTypeName = computed(() => props.nodeName && props.nodeName !== "" ? props.nodeName : props.nodeType?.displayName);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nNodeIcon_default), {
				type: iconType.value,
				src: src.value,
				name: iconName.value,
				disabled: _ctx.disabled,
				size: _ctx.size,
				circle: _ctx.circle,
				"node-type-name": nodeTypeName.value,
				"show-tooltip": _ctx.showTooltip,
				"tooltip-position": _ctx.tooltipPosition,
				badge: badge.value,
				class: normalizeClass(_ctx.$style.nodeIcon),
				onClick: _cache[0] || (_cache[0] = ($event) => emit("click"))
			}, null, 8, [
				"type",
				"src",
				"name",
				"disabled",
				"size",
				"circle",
				"node-type-name",
				"show-tooltip",
				"tooltip-position",
				"badge",
				"class"
			]);
		};
	}
});
var NodeIcon_vue_vue_type_style_index_0_lang_module_default = { nodeIcon: "_nodeIcon_1mo9k_123" };
var NodeIcon_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NodeIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeIcon_vue_vue_type_style_index_0_lang_module_default }]]);
export { NodeIcon_default as t };
