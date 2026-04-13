import { $ as openBlock, E as createElementBlock, N as defineComponent, S as computed, it as renderSlot } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { t as useSettingsStore } from "./settings.store-CnuErby1.js";
//#endregion
//#region src/app/components/EnterpriseEdition.ee.vue
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
//#endregion
export { EnterpriseEdition_ee_default as t };
