import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, Wt as unref, X as onMounted, _n as normalizeClass, j as createVNode, q as onBeforeUnmount, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { c as I18nT, s as useI18n } from "./src-DXwO88M2.js";
import { Sa as N8nHeading_default, Ta as N8nButton_default, bt as createEventBus, tt as N8nLink_default, wa as N8nText_default } from "./src-pyi3rpL8.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { r as useUIStore } from "./users.store-g_JotOI6.js";
import { t as Modal_default } from "./Modal-41n8zwej.js";
import { n as SURFACE_MCP_ONBOARDING_MODAL_KEY } from "./constants-NnHZpjXY.js";
import { a as MCP_SETTINGS_VIEW } from "./mcp.constants-rWUUixAY.js";
import { t as useSurfaceMcpToNewCloudUsersStore } from "./surfaceMcpToNewCloudUsers.store-BCDxt2iA.js";
import { t as SurfaceMcpBridgeGraphic_default } from "./SurfaceMcpBridgeGraphic-NkGRwE_f.js";
//#region src/experiments/surfaceMcpToNewCloudUsers/components/SurfaceMcpFirstOpenIntroModal.vue?vue&type=script&setup=true&lang.ts
var SurfaceMcpFirstOpenIntroModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SurfaceMcpFirstOpenIntroModal",
	props: { modalName: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const surfaceMcpStore = useSurfaceMcpToNewCloudUsersStore();
		const modalBus = createEventBus();
		const exitMode = ref("none");
		const modalName = computed(() => props.modalName ?? "surfaceMcpFirstOpenIntroModal");
		function dismissExperiment() {
			surfaceMcpStore.dismissFirstOpenModal();
			surfaceMcpStore.trackDismissed("first_open_modal");
		}
		function handleSkip() {
			if (exitMode.value !== "none") return;
			exitMode.value = "skip";
			dismissExperiment();
			uiStore.closeModal(modalName.value);
		}
		function handleTryIt() {
			if (exitMode.value !== "none") return;
			exitMode.value = "try";
			uiStore.closeModal(modalName.value);
			uiStore.openModalWithData({
				name: SURFACE_MCP_ONBOARDING_MODAL_KEY,
				data: { surface: "first_open_modal" }
			});
		}
		function handleClosed() {
			if (exitMode.value !== "none") return;
			exitMode.value = "skip";
			dismissExperiment();
		}
		onMounted(() => {
			modalBus.on("closed", handleClosed);
		});
		onBeforeUnmount(() => {
			modalBus.off("closed", handleClosed);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: modalName.value,
				width: "640px",
				"event-bus": unref(modalBus),
				"close-on-click-modal": true,
				"close-on-press-escape": true,
				center: false,
				"custom-class": _ctx.$style.modal
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.hero) }, [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.heroBackdrop),
					"aria-hidden": "true"
				}, null, 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.heroGraphic) }, [createVNode(SurfaceMcpBridgeGraphic_default, { size: "hero" })], 2)], 2)]),
				content: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.content),
					"data-test-id": "surface-mcp-intro-content"
				}, [
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "primary",
						bold: true,
						class: normalizeClass(_ctx.$style.eyebrow)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.intro.eyebrow")), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nHeading_default), {
						tag: "h1",
						size: "xlarge",
						bold: true,
						class: normalizeClass(_ctx.$style.title)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.intro.title")), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nText_default), {
						tag: "p",
						size: "medium",
						color: "text-base",
						class: normalizeClass(_ctx.$style.description)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.intro.description")) + " " + toDisplayString(" ") + " ", 1), createVNode(unref(I18nT), {
							keypath: "experiments.surfaceMcpToNewCloudUsers.onboarding.intro.settingsHint",
							tag: "span",
							scope: "global"
						}, {
							settingsLink: withCtx(() => [createVNode(unref(N8nLink_default), {
								to: { name: unref(MCP_SETTINGS_VIEW) },
								size: "medium",
								"data-test-id": "surface-mcp-intro-settings-link"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.intro.settingsLink")), 1)]),
								_: 1
							}, 8, ["to"])]),
							_: 1
						})]),
						_: 1
					}, 8, ["class"])
				], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					"data-test-id": "surface-mcp-intro-skip-button",
					onClick: handleSkip
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.intro.skip")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					"data-test-id": "surface-mcp-intro-try-button",
					class: normalizeClass(_ctx.$style.tryButton),
					onClick: handleTryIt
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.intro.tryIt")), 1)]),
					_: 1
				}, 8, ["class"])], 2)]),
				_: 1
			}, 8, [
				"name",
				"event-bus",
				"custom-class"
			]);
		};
	}
});
//#endregion
//#region src/experiments/surfaceMcpToNewCloudUsers/components/SurfaceMcpFirstOpenIntroModal.vue?vue&type=style&index=0&lang.module.scss
var modal = "_modal_1ilmi_335";
var hero = "_hero_1ilmi_346";
var heroBackdrop = "_heroBackdrop_1ilmi_359";
var heroGraphic = "_heroGraphic_1ilmi_366";
var fadeInUp = "_fadeInUp_1ilmi_1";
var content = "_content_1ilmi_379";
var eyebrow = "_eyebrow_1ilmi_390";
var title = "_title_1ilmi_396";
var description = "_description_1ilmi_400";
var footer = "_footer_1ilmi_405";
var tryButton = "_tryButton_1ilmi_412";
var shimmer = "_shimmer_1ilmi_1";
var spin = "_spin_1ilmi_1";
var opacityPulse = "_opacityPulse_1ilmi_1";
var popoverIn = "_popoverIn_1ilmi_1";
var fadeIn = "_fadeIn_1ilmi_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1ilmi_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1ilmi_1";
var pulseGlow = "_pulseGlow_1ilmi_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1ilmi_1";
var fade = "_fade_1ilmi_1";
var fadeInDown = "_fadeInDown_1ilmi_1";
var fadeInLeft = "_fadeInLeft_1ilmi_1";
var fadeInRight = "_fadeInRight_1ilmi_1";
var fadeOut = "_fadeOut_1ilmi_1";
var fadeOutDown = "_fadeOutDown_1ilmi_1";
var fadeOutUp = "_fadeOutUp_1ilmi_1";
var fadeOutLeft = "_fadeOutLeft_1ilmi_1";
var fadeOutRight = "_fadeOutRight_1ilmi_1";
var blinkBackground = "_blinkBackground_1ilmi_1";
var typingBlink = "_typingBlink_1ilmi_1";
var SurfaceMcpFirstOpenIntroModal_vue_vue_type_style_index_0_lang_module_default = {
	modal,
	hero,
	heroBackdrop,
	heroGraphic,
	fadeInUp,
	content,
	eyebrow,
	title,
	description,
	footer,
	tryButton,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1ilmi_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	blinkBackground,
	typingBlink
};
var SurfaceMcpFirstOpenIntroModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SurfaceMcpFirstOpenIntroModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SurfaceMcpFirstOpenIntroModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SurfaceMcpFirstOpenIntroModal_default as default };
