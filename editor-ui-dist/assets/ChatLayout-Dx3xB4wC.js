import { $ as openBlock, E as createElementBlock, N as defineComponent, _n as normalizeClass, it as renderSlot } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { Bt as useDeviceSupport, gt as useRouter } from "./src-DFOx8N22.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { m as useEventListener } from "./core-nZc0i8VB.js";
import { f as useUIStore } from "./users.store-0wV1ayWS.js";
import { c as CHAT_VIEW } from "./constants-Cet-q9NP.js";
//#region src/features/ai/chatHub/components/ChatLayout.vue?vue&type=script&setup=true&lang.ts
var ChatLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatLayout",
	setup(__props) {
		const router = useRouter();
		const uiStore = useUIStore();
		const { isCtrlKeyPressed } = useDeviceSupport();
		useEventListener(document, "keydown", (event) => {
			if (event.key.toLowerCase() === "o" && isCtrlKeyPressed(event) && event.shiftKey && !uiStore.isAnyModalOpen) {
				event.preventDefault();
				event.stopPropagation();
				router.push({
					name: CHAT_VIEW,
					force: true
				});
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.component) }, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
var ChatLayout_vue_vue_type_style_index_0_lang_module_default = { component: "_component_1txea_125" };
var ChatLayout_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatLayout_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ChatLayout_default as t };
