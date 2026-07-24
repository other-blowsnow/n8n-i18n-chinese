import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, j as createVNode, q as onBeforeUnmount, vn as normalizeClass } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ot as useI18n } from "./core-CPznNyVT.js";
import { $a as N8nHeading_default, no as N8nButton_default, ro as N8nIcon_default, to as N8nText_default } from "./src-bSQwfFcX.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { p as useTelemetry } from "./users.store-CsyV7tYv.js";
import { t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-BBWscdaP.js";
//#region src/features/ai/instanceAi/instanceAiBrowserUse.telemetry.ts
function useInstanceAiBrowserUseTelemetry() {
	const telemetry = useTelemetry();
	return {
		trackModalOpened() {
			telemetry.track("Instance AI Connect Browser Use modal opened");
		},
		trackInstallExtensionClicked() {
			telemetry.track("Instance AI Install Chrome Browser Extension button clicked");
		},
		trackOpenExtensionClicked() {
			telemetry.track("Instance AI Open Browser Use Extension button clicked");
		}
	};
}
//#endregion
//#region src/features/ai/instanceAi/components/modals/constants.ts
var CHROME_EXTENSION_URL = "https://chromewebstore.google.com/detail/n8n-browser-use/cegmdpndekdfpnafgacidejijecomlhh";
//#endregion
//#region src/features/ai/instanceAi/components/modals/BrowserUseSetupContent.vue?vue&type=script&setup=true&lang.ts
var CONNECT_URL_REFRESH_MARGIN_MS = 3e4;
var BrowserUseSetupContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BrowserUseSetupContent",
	props: { embedded: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const store = useInstanceAiSettingsStore();
		const telemetry = useInstanceAiBrowserUseTelemetry();
		const isConnected = computed(() => store.browserConnected);
		const connectUrl = ref(null);
		let refreshTimer;
		function clearRefreshTimer() {
			if (refreshTimer) {
				clearTimeout(refreshTimer);
				refreshTimer = void 0;
			}
		}
		async function refreshConnectUrl() {
			clearRefreshTimer();
			connectUrl.value = await store.fetchBrowserConnectUrl();
			const expiresAt = store.browserConnectUrlExpiresAt;
			if (!connectUrl.value || !expiresAt) return;
			const delay = Date.parse(expiresAt) - Date.now() - CONNECT_URL_REFRESH_MARGIN_MS;
			if (!Number.isFinite(delay) || delay <= 0) return;
			refreshTimer = setTimeout(() => void refreshConnectUrl(), delay);
		}
		onMounted(() => {
			telemetry.trackModalOpened();
			store.fetchBrowserStatus();
			if (!store.browserConnected) refreshConnectUrl();
		});
		onBeforeUnmount(() => {
			clearRefreshTimer();
			store.clearBrowserConnectUrl();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.body, props.embedded && _ctx.$style.bodyEmbedded]) }, [!props.embedded ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.header)
			}, [createVNode(unref(N8nHeading_default), {
				tag: "h2",
				size: "large",
				class: normalizeClass(_ctx.$style.title)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.modal.title")), 1)]),
				_: 1
			}, 8, ["class"])], 2)) : createCommentVNode("", true), isConnected.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.statusRow) }, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.statusDot, _ctx.$style.statusDotConnected]) }, null, 2), createVNode(unref(N8nText_default), {
				size: "small",
				bold: true
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.connected")), 1)]),
				_: 1
			})], 2), createVNode(unref(N8nText_default), {
				color: "text-light",
				class: normalizeClass(_ctx.$style.description)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.connected.description")), 1)]),
				_: 1
			}, 8, ["class"])], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
				createVNode(unref(N8nText_default), {
					color: "text-light",
					class: normalizeClass(_ctx.$style.description)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.modal.description")), 1)]),
					_: 1
				}, 8, ["class"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.step) }, [
					createVNode(unref(N8nText_default), {
						bold: true,
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.step.extension.title")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						color: "text-light",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.step.extension.description")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nButton_default), {
						label: unref(i18n).baseText("instanceAi.browserUse.step.extension.cta"),
						href: unref(CHROME_EXTENSION_URL),
						target: "_blank",
						variant: "outline",
						size: "medium",
						icon: "external-link",
						"data-test-id": "browser-use-install-extension",
						onClick: unref(telemetry).trackInstallExtensionClicked
					}, null, 8, [
						"label",
						"href",
						"onClick"
					])
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.step) }, [
					createVNode(unref(N8nText_default), {
						bold: true,
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.step.connect.title")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						color: "text-light",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.step.connect.description")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nButton_default), {
						label: unref(i18n).baseText("instanceAi.browserUse.step.connect.cta"),
						href: connectUrl.value ?? void 0,
						target: "_blank",
						variant: "solid",
						size: "medium",
						icon: "external-link",
						disabled: !connectUrl.value,
						"data-test-id": "browser-use-open-connect-page",
						onClick: unref(telemetry).trackOpenExtensionClicked
					}, null, 8, [
						"label",
						"href",
						"disabled",
						"onClick"
					])
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.waitingRow) }, [createVNode(unref(N8nIcon_default), {
					icon: "spinner",
					color: "primary",
					spin: "",
					size: "small"
				}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.browserUse.step.extension.waiting")), 1)], 2)
			], 64))], 2);
		};
	}
});
var BrowserUseSetupContent_vue_vue_type_style_index_0_lang_module_default = {
	body: "_body_1b4o2_125",
	bodyEmbedded: "_bodyEmbedded_1b4o2_132",
	header: "_header_1b4o2_136",
	title: "_title_1b4o2_143",
	description: "_description_1b4o2_148",
	step: "_step_1b4o2_153",
	statusRow: "_statusRow_1b4o2_163",
	statusDot: "_statusDot_1b4o2_169",
	statusDotConnected: "_statusDotConnected_1b4o2_176",
	waitingRow: "_waitingRow_1b4o2_180"
};
var BrowserUseSetupContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(BrowserUseSetupContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": BrowserUseSetupContent_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { BrowserUseSetupContent_default as t };
