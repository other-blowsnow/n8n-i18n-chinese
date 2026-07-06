import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, bt as withCtx, gt as watch, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { s as useI18n } from "./src-CBtyHSh2.js";
import { Ga as N8nHeading_default, Ja as N8nButton_default, qa as N8nText_default } from "./src-BVC_ZvSs.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as Modal_default } from "./Modal-BW4kn_qP.js";
import { t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-Bdq1q4Dp.js";
import { t as ComputerUseSetupContent_default } from "./ComputerUseSetupContent-DnuKwJew.js";
//#region src/features/ai/instanceAi/components/modals/constants.ts
var CHROME_EXTENSION_URL = "https://chromewebstore.google.com/detail/n8n-browser-use/cegmdpndekdfpnafgacidejijecomlhh";
//#endregion
//#region src/features/ai/instanceAi/components/modals/BrowserUseSetupModal.vue?vue&type=script&setup=true&lang.ts
var BrowserUseSetupModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BrowserUseSetupModal",
	props: { modalName: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const store = useInstanceAiSettingsStore();
		const step = ref(store.isGatewayConnected ? "extension" : "gateway");
		watch(() => store.isGatewayConnected, (connected) => {
			if (connected && step.value === "gateway") step.value = "extension";
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: props.modalName,
				"show-close": true,
				"custom-class": "instance-ai-browser-use-setup-modal",
				width: "540"
			}, {
				content: withCtx(() => [step.value === "gateway" ? (openBlock(), createBlock(ComputerUseSetupContent_default, { key: 0 })) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.body)
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
						tag: "h2",
						size: "large",
						class: normalizeClass(_ctx.$style.title)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.step.extension.title")), 1)]),
						_: 1
					}, 8, ["class"])], 2),
					createVNode(unref(N8nText_default), {
						color: "text-light",
						class: normalizeClass(_ctx.$style.description)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.step.extension.description")), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nButton_default), {
						label: unref(i18n).baseText("instanceAi.browserUse.step.extension.cta"),
						href: unref(CHROME_EXTENSION_URL),
						target: "_blank",
						variant: "solid",
						size: "large",
						icon: "external-link",
						"data-test-id": "browser-use-install-extension"
					}, null, 8, ["label", "href"])
				], 2))]),
				_: 1
			}, 8, ["name"]);
		};
	}
});
var BrowserUseSetupModal_vue_vue_type_style_index_0_lang_module_default = {
	body: "_body_l1v0x_125",
	header: "_header_l1v0x_132",
	title: "_title_l1v0x_139",
	description: "_description_l1v0x_144",
	waitingRow: "_waitingRow_l1v0x_149"
};
var BrowserUseSetupModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(BrowserUseSetupModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": BrowserUseSetupModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { BrowserUseSetupModal_default as default };
