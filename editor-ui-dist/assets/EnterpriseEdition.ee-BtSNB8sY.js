import { C as computed, D as createElementBlock, P as defineComponent, at as renderSlot, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { fs as useSettingsStore } from "./users.store-qBZsmf9-.js";
var EnterpriseEdition_ee_default = /* @__PURE__ */ defineComponent({
	__name: "EnterpriseEdition.ee",
	props: { features: { default: () => [] } },
	setup(__props) {
		const props = __props;
		const settingsStore = useSettingsStore();
		const canAccess = computed(() => props.features.reduce((acc, feature) => acc && !!settingsStore.isEnterpriseFeatureEnabled[feature], true));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [canAccess.value ? renderSlot(_ctx.$slots, "default", { key: 0 }) : renderSlot(_ctx.$slots, "fallback", { key: 1 })]);
		};
	}
});
export { EnterpriseEdition_ee_default as t };
