import { $ as openBlock, Ht as toValue, N as defineComponent, S as computed, Wt as unref, _n as normalizeClass, l as useCssVars, w as createBlock } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { z as N8nNodeIcon_default } from "./src-BvkWedrz.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { $t as createWorkflowDocumentId, nn as useWorkflowDocumentStore, s as useWorkflowsStore } from "./users.store-BKdQVBk7.js";
import { n as getNodeIconSource } from "./nodeIcon-D76B4vWP.js";
//#region src/app/composables/useNodeIconSource.ts
function useNodeIconSource(nodeType, node) {
	const workflowsStore = useWorkflowsStore();
	const workflowDocumentStore = computed(() => useWorkflowDocumentStore(createWorkflowDocumentId(workflowsStore.workflowId)));
	return computed(() => {
		const typeValue = toValue(nodeType);
		const nodeValue = toValue(node);
		return getNodeIconSource(typeValue ?? nodeValue?.type, nodeValue ?? null, workflowDocumentStore.value.getExpressionHandler());
	});
}
//#endregion
//#region src/app/components/NodeIcon.vue?vue&type=script&setup=true&lang.ts
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
		useCssVars((_ctx) => ({ "v3e9bf8b2": iconColor.value }));
		const props = __props;
		const emit = __emit;
		const iconSourceFromNodeType = useNodeIconSource(props.nodeType, props.node ?? null);
		const iconSource = computed(() => props.iconSource ?? iconSourceFromNodeType.value);
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
				disabled: __props.disabled,
				size: __props.size,
				circle: __props.circle,
				"node-type-name": nodeTypeName.value,
				"show-tooltip": __props.showTooltip,
				"tooltip-position": __props.tooltipPosition,
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
var NodeIcon_vue_vue_type_style_index_0_lang_module_default = { nodeIcon: "_nodeIcon_16wly_125" };
var NodeIcon_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeIcon_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { useNodeIconSource as n, NodeIcon_default as t };
